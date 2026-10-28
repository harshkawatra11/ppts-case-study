# ===== HARVESTBOX MODEL v1 =====
"""24-month cohort and cash model for the Verdict 2.0 HarvestBox case.
Run from anywhere:  python -X utf8 verdict-mnc/model/harvestbox_model.py
Writes model_outputs.json and model_tables.md beside this file and ../deck/values.js.
Set HB_DRY=1 to print the values object and write nothing.
Units: money in Rs crore unless a name ends in _rs; time in months (M1 = first month of the plan)."""
import json, math, hashlib, os, pathlib, io, sys

HERE = pathlib.Path(__file__).resolve().parent if "__file__" in globals() else pathlib.Path(os.environ.get("HB_HERE", "."))
DRY = os.environ.get("HB_DRY") == "1"

# ---------- case facts (never edit; IDs match case/01-case-brief.md) ----------
F = dict(subs=62000, aov_rs=5200, staff=410, cash=15.0, rev=42.0, ebitda=-9.2, followers_lakh=3.8,
         ret={1: 1.00, 3: 0.55, 6: 0.34, 12: 0.19},
         why=[("Too rigid / difficult to skip", 34), ("Too expensive", 27), ("Menu becomes repetitive", 18),
              ("Food waste / portion issues", 11), ("Delivery problems", 10)],
         rating=4.6, gp_box_rs=1600, cac_rs=7000, life_boxes=6.8, ltv_rs=10900, ltv_cac=1.55, bench=3.0,
         hist={2022: (19, .38, .22, -.12), 2023: (29, .36, .25, -.15), 2024: (38, .33, .28, -.19), 2025: (42, .31, .30, -.22)},
         mk_growth=8, rte_growth=15, pl_box_rs=3500,
         A=dict(inv=1.8, s3=0.65), B=dict(inv=1.3, rev=8.0, gm=.22, stores=800), C=dict(inv=5.0, rev=6.0, gm=.45, cann=.10),
         util=68, waste=6, lease=1.0, visits_lakh=14, conv=2.8)

# ---------- team assumptions (IDs match plan section 5) ----------
A = dict(
    A01_tail=None,            # solved below so that lifetime boxes tie to 6.8
    A03_gm_drift=-0.015,      # gross margin points a year lost with no decision (history: -2.3 a year)
    A04_cac_infl=0.08,        # paid CAC inflation a year with no decision
    A05_opex_infl=0.04,       # other operating cost inflation a year, every scenario
    A06_plan_gm_drift=-0.005, A07_plan_cac_infl=0.03,
    A08_skip=0.05,            # share of boxes skipped once skipping is free (base)
    A09_aovf=0.979,           # blended order value after 2, 3 and 4 meal plans (20/65/15 at Rs 3,600/5,200/6,600)
    A10_ref_share=0.20, A11_ref_cac_rs=2000, A12_wb=40, A13_wb_cac_rs=800,
    A14_conv_to=3.3,          # website conversion after the entry plan and the skip promise (from 2.8)
    A15_prune_vol=0.90, A16_prune_cac=0.89, A17_brand=0.60, A18_gm_up=0.04, A19_opexf=0.88, A20_run=0.25,
    A21_B=dict(ret=0.04, opex=0.06, cann=0.05, wc_days=60, g2=0.08),
    A22_C=dict(opex=0.12, g2=0.15),
    A23_stage=dict(scale=0.80, start=13, rev_start=14, inv=4.0),
    A25_cont=dict(m=7, vol=0.50, brand=0.50, opexf=0.85),
    A24_weights=dict(growth=20, profit=30, cash=30, risk=20))

BOXES_YR = F["rev"] * 1e7 / F["aov_rs"]
Q12 = math.sqrt(F["ret"][3]); Q36 = (F["ret"][6] / F["ret"][3]) ** (1 / 3); Q612 = (F["ret"][12] / F["ret"][6]) ** (1 / 6)


def surv12(s3):
    q = math.sqrt(s3); k = s3 / F["ret"][3]
    return [1.0, q, s3] + [F["ret"][3] * Q36 ** i * k for i in (1, 2)] + [F["ret"][6] * k] + [F["ret"][6] * Q612 ** i * k for i in range(1, 6)] + [F["ret"][12] * k]


S0 = surv12(0.55)
_tail = F["life_boxes"] - sum(S0)
RT = _tail / (_tail + S0[-1])           # monthly retention after month 12 that ties lifetime boxes to 6.8
A["A01_tail"] = round(RT, 4)
N0 = BOXES_YR / 12 / F["life_boxes"]    # new customers a month in steady state
ACQ = N0 * 12 * F["cac_rs"] / 1e7       # acquisition spend implied by CAC
MKT = F["rev"] * F["hist"][2025][2]
BRAND = MKT - ACQ                       # marketing not captured in CAC
OPEX = F["rev"] * (F["hist"][2025][1] - F["hist"][2025][2] - F["hist"][2025][3])


def qa(a, s3):
    """Probability of being active in month a+1 given active in month a."""
    if a <= 2: return math.sqrt(s3)
    if a <= 5: return Q36
    if a <= 11: return Q612
    return RT


def life_months(s3):
    s = surv12(s3); return sum(s) + s[-1] * RT / (1 - RT)


def lin(t, a, b, v0, v1):
    return v0 if t <= a else (v1 if t >= b else v0 + (v1 - v0) * (t - a) / (b - a))


def plateau(y1):
    """Monthly plateau of a line that ramps linearly over six months and whose first 12 months sum to y1."""
    return y1 / 9.5


def run(P, T=24):
    AGE = 240; base = [0.0] * (AGE + 2); S = 1.0
    for a in range(1, AGE + 1):
        if a >= 2: base[a] = N0 * S
        S *= qa(a, 0.55)
    flex = [0.0] * (AGE + 2); cash = F["cash"]; out = []; wcbal = 0.0; L = P.get("launch", 999)
    for t in range(1, T + 1):
        live = t >= L
        ct = P.get("cont"); cf = lin(t, ct["m"] - 1, ct["m"] + 1, 0, 1) if ct else 0.0
        vol = lin(t, 1, 2, 1, P.get("vol", 1)) * (1 - cf * (1 - ct["vol"]) if ct else 1)
        cacf = lin(t, 1, 3, 1, P.get("prune", 1)) * lin(t, L, L + 5, 1, P.get("cro", 1)) * (1 + P.get("cac_infl", 0)) ** (t / 12)
        paid = N0 * vol
        refsh = lin(t, L - 1, L + 8, 0, P.get("ref", 0))
        ref = paid * refsh / (1 - refsh); wb = P.get("wb", 0) if live else 0
        new = paid + ref + wb
        if live: flex[1] += new
        else: base[1] += new
        freq = 1 - lin(t, L - 1, L + 2, 0, P.get("skip", 0))
        aov = F["aov_rs"] * lin(t, L - 1, L + 3, 1, P.get("aovf", 1))
        act = sum(base) + sum(flex); core = act * freq * aov / 1e7
        gm = F["hist"][2025][1] + P.get("gm_drift", 0) * t / 12 + lin(t, 2, 15, 0, P.get("gm_up", 0))
        orev = 0.0; ogp = 0.0; ocost = 0.0; wc = 0.0; rte = 0.0
        if "b" in P:
            r = P["b"]; p = plateau(r["y1"]); m = p * min(t, 6) / 6 * ((1 + r["g2"]) if t > 12 else 1)
            orev += m; ogp += m * (r["gm"] - r["ret"]); ocost += m * r["opex"]; core -= m * r["cann"]
            wc = m * r["wc_days"] / 30 - wcbal; wcbal += wc
        if "c" in P:
            r = P["c"]; k = t - r["start"] + 1; p = plateau(r["y1"])
            m = 0.0 if k < 1 else p * min(k, 6) / 6 * ((1 + r["g2"]) if k > 12 else 1)
            orev += m; ogp += m * r["gm"]; ocost += m * r["opex"]; core -= m * r["cann"]; rte = m
        gp = core * gm + ogp
        brand = BRAND / 12 * lin(t, 1, 6, 1, P.get("brand", 1)) * (1 - cf * (1 - ct["brand"]) if ct else 1)
        acq = (paid * F["cac_rs"] * cacf + ref * P.get("refcac", 2000) + wb * A["A13_wb_cac_rs"]) / 1e7
        opex = OPEX / 12 * lin(t, 1, 6, 1, P.get("opexf", 1)) * (1 - cf * (1 - ct["opexf"]) if ct else 1) * (1 + A["A05_opex_infl"]) ** (t / 12) + (P.get("run", 0) / 12 if live else 0) + ocost
        eb = gp - acq - brand - opex
        inv = sum(v for (m_, v) in P.get("inv", []) if m_ == t)
        cash += eb - inv - wc
        s3 = P.get("s3", 0.55) if live else 0.55
        boxes_new = life_months(s3) * freq
        out.append(dict(t=t, new=new, act=act, rev=core + orev, core=core, rte=rte, gm=gp / (core + orev), gp=gp, mkt=acq + brand, acq=acq,
                        opex=opex, eb=eb, inv=inv, cash=cash, cac=acq * 1e7 / new, s3=s3, skip=1 - freq,
                        ltv=boxes_new * aov * gm, boxes_new=boxes_new))
        nb = [0.0] * (AGE + 2); nf = [0.0] * (AGE + 2)
        for a in range(1, AGE):
            nb[a + 1] = base[a] * qa(a, 0.55); nf[a + 1] = flex[a] * qa(a, P.get("s3", 0.55))
        base, flex = nb, nf
    return out


def summ(o):
    y = lambda a, b, k: sum(x[k] for x in o[a:b])
    be = next((x["t"] for i, x in enumerate(o) if len(o[i:i + 3]) == 3 and all(z["eb"] >= 0 for z in o[i:i + 3])), None)
    mc = min(o, key=lambda x: x["cash"]); z = next((x["t"] for x in o if x["cash"] <= 0), None); e = o[-1]
    return dict(rev1=y(0, 12, "rev"), rev2=y(12, 24, "rev"), eb1=y(0, 12, "eb"), eb2=y(12, 24, "eb"), rr=y(21, 24, "eb") * 4,
                rrrev=y(21, 24, "rev") * 4, gm1=y(0, 12, "gp") / y(0, 12, "rev"), gm2=y(12, 24, "gp") / y(12, 24, "rev"),
                mk1=y(0, 12, "mkt") / y(0, 12, "rev"), mk2=y(12, 24, "mkt") / y(12, 24, "rev"), cash12=o[11]["cash"], cash24=e["cash"],
                mincash=mc["cash"], minm=mc["t"], zero=z, be=be, cac=e["cac"], ltv=e["ltv"], lc=e["ltv"] / e["cac"], s3=e["s3"],
                act=e["act"], gm24=e["gm"], mk24=e["mkt"] / e["rev"], inv=y(0, 24, "inv"))


# ---------- scenarios ----------
D = dict(gm_drift=A["A03_gm_drift"], cac_infl=A["A04_cac_infl"])
INV_A = [(1, 0.6), (2, 0.6), (3, 0.6)]
b_ = dict(y1=F["B"]["rev"], gm=F["B"]["gm"], **A["A21_B"])
c_ = dict(start=1, y1=F["C"]["rev"], gm=F["C"]["gm"], cann=F["C"]["cann"], **A["A22_C"])
RESET = dict(gm_drift=A["A06_plan_gm_drift"], cac_infl=A["A07_plan_cac_infl"], prune=A["A16_prune_cac"], vol=A["A15_prune_vol"],
             brand=A["A17_brand"], gm_up=A["A18_gm_up"], opexf=A["A19_opexf"])
FLEX = dict(launch=4, s3=F["A"]["s3"], skip=A["A08_skip"], aovf=A["A09_aovf"], ref=A["A10_ref_share"], refcac=A["A11_ref_cac_rs"],
            cro=F["conv"] / A["A14_conv_to"], wb=A["A12_wb"], inv=INV_A, run=A["A20_run"])
st = A["A23_stage"]
STAGE = dict(c=dict(start=st["rev_start"], y1=F["C"]["rev"] * st["scale"], gm=F["C"]["gm"], cann=F["C"]["cann"], **A["A22_C"]))
INV_ST = [(st["start"] + i, st["inv"] / 3) for i in range(3)]
SC = {
    "drift": dict(D),
    "A_written": dict(D, launch=4, s3=F["A"]["s3"], skip=A["A08_skip"], aovf=A["A09_aovf"], ref=0.10, inv=INV_A, run=A["A20_run"]),
    "B_written": dict(D, b=b_, inv=[(1, 0.65), (2, 0.65)]),
    "C_written": dict(D, c=c_, inv=[(i, 1.25) for i in (1, 2, 3, 4)]),
    "reset_only": dict(RESET),
    "B_reset": dict(RESET, b=b_, inv=[(1, 0.65), (2, 0.65)]),
    "C_reset": dict(RESET, c=c_, inv=[(i, 1.25) for i in (1, 2, 3, 4)]),
    "core": dict(RESET, **FLEX),
    "base": dict(RESET, **dict(FLEX, inv=INV_A + INV_ST), **STAGE),
    "bear": dict(RESET, **dict(FLEX, s3=0.60, skip=0.10, ref=0.10, cro=F["conv"] / 3.0, wb=20), gm_up=0.025, brand=0.75, opexf=0.95, prune=0.95),
    "bear_cont": dict(RESET, **dict(FLEX, s3=0.60, skip=0.10, ref=0.10, cro=F["conv"] / 3.0, wb=20), gm_up=0.025, brand=0.75, opexf=0.95, prune=0.95, cont=A["A25_cont"]),
    "bull": dict(RESET, **dict(FLEX, s3=0.68, skip=0.03, ref=0.28, cro=F["conv"] / 3.5, inv=INV_A + [(13 + i, 5.0 / 4) for i in range(4)]),
                 gm_up=0.05, opexf=0.88, c=dict(start=13, y1=F["C"]["rev"], gm=F["C"]["gm"], cann=F["C"]["cann"], **A["A22_C"])),
}
RUNS = {k: run(v) for k, v in SC.items()}
SUM = {k: summ(o) for k, o in RUNS.items()}

# ---------- unit economics today ----------
cum = 0.0; payback = None
for k_, s_ in enumerate(S0, 1):
    cum += s_
    if payback is None and cum * F["gp_box_rs"] >= F["cac_rs"]: payback = k_; pay_surv = s_
early = (S0[0] - 0.55) + (S0[1] - 0.55)            # boxes taken by customers who are gone by month 3, per customer acquired
leaver_boxes = early / 0.45; stayer_boxes = (F["life_boxes"] - early) / 0.55
UNIT = dict(boxes_yr=BOXES_YR, boxes_m=BOXES_YR / 12, n0_m=N0, n0_y=N0 * 12, acq=ACQ, brand=BRAND, opex=OPEX, mkt=MKT, tail=RT,
            sum12=sum(S0), payback=payback, pay_surv=pay_surv, leaver_boxes=leaver_boxes, stayer_boxes=stayer_boxes,
            leaver_gp=leaver_boxes * F["gp_box_rs"], leaver_loss=F["cac_rs"] - leaver_boxes * F["gp_box_rs"],
            stayer_gp=stayer_boxes * F["gp_box_rs"], stayer_lc=stayer_boxes * F["gp_box_rs"] / F["cac_rs"],
            leaver_burn=N0 * 12 * 0.45 * (F["cac_rs"] - leaver_boxes * F["gp_box_rs"]) / 1e7,
            runway=F["cash"] / -F["ebitda"] * 12, be_skip=1 - F["life_boxes"] / life_months(0.65), flex_months=life_months(0.65),
            cac_for_3x=F["ltv_rs"] / 3, boxes_for_3x=3 * F["cac_rs"] / F["gp_box_rs"],
            b_store_m_rs=F["B"]["rev"] * 1e7 / F["B"]["stores"] / 12, c_gp=F["C"]["rev"] * F["C"]["gm"],
            c_net=F["C"]["rev"] * F["C"]["gm"] - F["C"]["rev"] * F["C"]["cann"] * F["hist"][2025][1], b_gp=F["B"]["rev"] * F["B"]["gm"],
            web_first=F["visits_lakh"] * 1e5 * F["conv"] / 100, subs_box_share=BOXES_YR / 12 / F["subs"])
HIST = []
prev = None
for yr, (R, g, m, e) in F["hist"].items():
    o = g - m - e
    HIST.append(dict(year=yr, rev=R, gp=R * g, mkt=R * m, opex=R * o, eb=R * e, gm=g, mk=m, ox=o, em=e,
                     dmk=None if prev is None else (R * m - prev[0] * prev[2]) / (R - prev[0]), growth=None if prev is None else R / prev[0] - 1))
    prev = (R, g, m, e)

# ---------- bridge from 2025 EBITDA to the month 24 run-rate (levers added in a fixed order) ----------
steps = [("Headwinds: cost inflation, margin drift", dict(gm_drift=A["A06_plan_gm_drift"], cac_infl=A["A07_plan_cac_infl"])),
         ("Cut non-working marketing 40%", dict(brand=A["A17_brand"])),
         ("Prune paid channels above LTV", dict(prune=A["A16_prune_cac"], vol=A["A15_prune_vol"])),
         ("Overheads down 12%", dict(opexf=A["A19_opexf"])),
         ("Gross margin levers (+4.0 points)", dict(gm_up=A["A18_gm_up"])),
         ("Proposal A: retention net of skips", dict(launch=4, s3=F["A"]["s3"], skip=A["A08_skip"], aovf=A["A09_aovf"], run=A["A20_run"], inv=INV_A)),
         ("Proposal A: referral on the third box", dict(ref=A["A10_ref_share"], refcac=A["A11_ref_cac_rs"])),
         ("Proposal A: win-back of lapsed customers", dict(wb=A["A12_wb"])),
         ("Proposal A: website conversion", dict(cro=F["conv"] / A["A14_conv_to"])),
         ("Year 2: staged ready-to-eat", dict(STAGE, inv=INV_A + INV_ST))]
BRIDGE = [("2025 EBITDA", F["rev"] * F["hist"][2025][3])]; acc = {}; last = F["rev"] * F["hist"][2025][3]
for name, d in steps:
    acc.update(d); rr = summ(run(acc))["rr"]; BRIDGE.append((name, rr - last)); last = rr
BRIDGE.append(("Month 24 run-rate", last))

# ---------- sensitivity ----------
def var(**kw):
    p = dict(SC["base"]); p.update(kw); return summ(run(p))
TORN = [("3-month retention 60% to 70%", var(s3=0.60), var(s3=0.70)), ("Skip rate 12% to 0%", var(skip=0.12), var(skip=0.0)),
        ("Referral share 10% to 30%", var(ref=0.10), var(ref=0.30)), ("Conversion 3.0% to 3.6%", var(cro=2.8 / 3.0), var(cro=2.8 / 3.6)),
        ("Margin levers +2.5 to +5.0 pts", var(gm_up=0.025), var(gm_up=0.05)), ("Overhead cut 6% to 15%", var(opexf=0.94), var(opexf=0.85)),
        ("Non-working marketing cut 25% to 50%", var(brand=0.75), var(brand=0.50)),
        ("Ready-to-eat sales 50% to 120% of plan", var(c=dict(STAGE["c"], y1=STAGE["c"]["y1"] * 0.5)), var(c=dict(STAGE["c"], y1=STAGE["c"]["y1"] * 1.2)))]
GRID_S3 = [0.55, 0.60, 0.65, 0.70]; GRID_SK = [0.0, 0.05, 0.10, 0.15]
GRID = [[var(s3=s, skip=k)["eb1"] + var(s3=s, skip=k)["eb2"] for k in GRID_SK] for s in GRID_S3]
AW1 = SUM["A_written"]["eb1"] - SUM["drift"]["eb1"]


# ---------- option scorecard (rules, not judgement; each rule is printed in the tables) ----------
def band(v, cuts):
    return 1 + sum(1 for c in cuts if v >= c)
OPT = {}
for key, lab, inv in (("A_written", "A  Fix the subscription", F["A"]["inv"]), ("B_written", "B  Grocery retail", F["B"]["inv"]), ("C_written", "C  Ready-to-eat", F["C"]["inv"])):
    s = SUM[key]; d = SUM["drift"]
    drev = s["rev1"] - d["rev1"]; deb = (s["eb1"] + s["eb2"]) - (d["eb1"] + d["eb2"]); need = inv + (A["A21_B"]["wc_days"] / 30 * plateau(F["B"]["rev"]) if key[0] == "B" else 0)
    OPT[key] = dict(label=lab, drev=drev, deb=deb, need=need, zero=s["zero"], payback=None)
    OPT[key]["s_growth"] = band(drev, [1, 3, 5, 7]); OPT[key]["s_profit"] = band(deb, [0.5, 1.5, 2.5, 3.5]); OPT[key]["s_cash"] = 6 - band(need, [1.5, 2.5, 3.5, 4.5])
OPT["A_written"]["s_risk"] = 4; OPT["B_written"]["s_risk"] = 2; OPT["C_written"]["s_risk"] = 2
W = A["A24_weights"]
for o in OPT.values():
    o["score"] = (o["s_growth"] * W["growth"] + o["s_profit"] * W["profit"] + o["s_cash"] * W["cash"] + o["s_risk"] * W["risk"]) / 100
PER = dict(label="A rebuilt", s_growth=band(SUM["core"]["rev1"] - SUM["drift"]["rev1"], [1, 3, 5, 7]),
           s_profit=band((SUM["core"]["eb1"] + SUM["core"]["eb2"]) - (SUM["drift"]["eb1"] + SUM["drift"]["eb2"]), [0.5, 1.5, 2.5, 3.5]),
           s_cash=6 - band(F["A"]["inv"], [1.5, 2.5, 3.5, 4.5]), s_risk=4)
PER["score"] = (PER["s_growth"] * W["growth"] + PER["s_profit"] * W["profit"] + PER["s_cash"] * W["cash"] + PER["s_risk"] * W["risk"]) / 100

# ---------- checks ----------
CHK = []
def chk(name, ok): CHK.append((name, bool(ok)))
chk("lifetime boxes tie to 6.8", abs(life_months(0.55) - 6.8) < 1e-9)
chk("LTV/CAC ties to 1.55", abs(F["life_boxes"] * F["gp_box_rs"] / F["cac_rs"] - 1.554) < 0.01)
chk("gross profit per box ties to 31%", abs(F["gp_box_rs"] / F["aov_rs"] - 0.31) < 0.005)
chk("month 0 revenue ties to Rs 42 Cr", abs(run(dict(), 1)[0]["rev"] * 12 - 42.0) < 0.05)
chk("month 0 EBITDA ties to -9.2", abs(run(dict(), 1)[0]["eb"] * 12 - (-9.24)) < 0.15)
chk("drift runs out of cash inside 24 months", SUM["drift"]["zero"] is not None and SUM["drift"]["zero"] <= 24)
chk("each proposal as written runs out of cash inside 24 months", all(SUM[k]["zero"] for k in ("A_written", "B_written", "C_written")))
chk("base never below Rs 2.5 Cr", SUM["base"]["mincash"] >= 2.5)
chk("bear with the contingency never below zero", SUM["bear_cont"]["mincash"] > 0)
chk("core path never below Rs 5 Cr", SUM["core"]["mincash"] >= 5.0)
chk("base breaks even inside 24 months", SUM["base"]["be"] is not None)
chk("A as written is negative in year 1", AW1 < 0)
chk("bridge sums", abs(sum(v for _, v in BRIDGE[:-1]) - BRIDGE[-1][1]) < 1e-6)
KEY = [round(SUM[k][f], 2) for k in ("drift", "A_written", "B_written", "C_written", "core", "base", "bear", "bear_cont", "bull") for f in ("eb1", "eb2", "rr", "cash24", "mincash")]
HASH = hashlib.sha1(json.dumps(KEY).encode()).hexdigest()[:10]

OUT = dict(facts=F, assumptions=A, unit=UNIT, hist=HIST, summary=SUM, bridge=BRIDGE, tornado=[(n, lo, hi) for n, lo, hi in TORN],
           grid=dict(s3=GRID_S3, skip=GRID_SK, cum_ebitda=GRID), options=OPT, perennial_score=PER, a_written_y1_delta=AW1,
           monthly={k: RUNS[k] for k in ("drift", "A_written", "B_written", "C_written", "core", "base", "bear", "bear_cont", "bull")}, checks=CHK, hash=HASH)

# ---------- values for the deck (every slide number comes from here) ----------
MIN = "−"; RU = "₹"
def f1(x): return (MIN if x < -0.049 else "") + "%.1f" % abs(x)
def f2(x): return (MIN if x < -0.0049 else "") + "%.2f" % abs(x)
def sg(x): return ("+" if x >= 0 else MIN) + "%.1f" % abs(x)
def pc(x, d=0): return ("%." + str(d) + "f%%") % (x * 100)
def rs(x): return (MIN if x < 0 else "") + RU + format(int(round(abs(x))), ",")
def pts(x): return ("+" if x >= 0 else MIN) + "%dp" % abs(round(x * 100))
def qpts(k): return [F["cash"]] + [round(RUNS[k][i]["cash"], 2) for i in range(2, 24, 3)]
def d24(k, f): return SUM[k][f + "1"] + SUM[k][f + "2"] - SUM["drift"][f + "1"] - SUM["drift"][f + "2"]
b = SUM["base"]; c0 = SUM["core"]; br = SUM["bear_cont"]; bu = SUM["bull"]; d0 = SUM["drift"]; R = RUNS["base"]
lc0 = F["life_boxes"] * F["gp_box_rs"] / F["cac_rs"]
lc1 = life_months(0.65) * (1 - A["A08_skip"]) * F["aov_rs"] * A["A09_aovf"] * F["hist"][2025][1] / F["cac_rs"]
lc2 = lc1 * RUNS["core"][-1]["gm"] / F["hist"][2025][1]; lc3 = c0["lc"]
h0, h3 = HIST[0], HIST[3]
def kp(i):
    x = R[i - 1]
    return dict(s3=pc(x["s3"]), skip=pc(x["skip"]), lc="%.2fx" % (x["ltv"] / x["cac"]), cac=rs(x["cac"]), gm=pc(x["gm"], 1), mk=pc(x["mkt"] / x["rev"], 1), cash=f1(x["cash"]))
k3, k12, k24 = kp(3), kp(12), kp(24)
V = dict(
    hash=HASH,
    team=dict(name="TEAM IDEAFORGE", rows=[["Harsh Kawatra", "Delhi Technological University (DTU)", "Team Leader"],
                                           ["Gursimran Kaur", "Guru Gobind Singh Indraprastha University (GGSIPU)", "Member"],
                                           ["Dayita Arora", "Ramjas College, University of Delhi (DU)", "Member"]]),
    f2="HarvestBox loses %s on each of the 45%% of customers gone by month 3, and no proposal as written keeps cash above zero for 24 months" % rs(UNIT["leaver_loss"]),
    f3="Fund Proposal A, rebuilt with a floor on skipping: LTV to CAC rises from 1.55x to %.2fx for %s1.8 Cr, and ready-to-eat becomes affordable in year 2" % (lc3, RU),
    f4="The plan cuts the loss from %s9.2 Cr to %s%s Cr in year 2 and breaks even in month %d, with cash never below %s%s Cr and no new funding" % (RU, RU, f1(-b["eb2"]), b["be"], RU, f1(b["mincash"])),
    f5="Ninety days put Proposal A live in five cities for %s1.8 Cr, and seven KPIs with stop triggers tell the Board by month 6 whether to hold, push or cut" % RU,
    f6="Every number on the four slides traces to the case, a stated assumption or the model, and three case volume figures that do not reconcile are not used",
    hist=[[str(h["year"]), "%s%d Cr" % (RU, h["rev"]), pc(h["gm"]), pc(h["mk"]), pc(h["ox"]), pc(h["em"]).replace("-", MIN)] for h in HIST]
         + [["Chg", "+121%", pts(h3["gm"] - h0["gm"]), pts(h3["mk"] - h0["mk"]), pts(h3["ox"] - h0["ox"]), pts(h3["em"] - h0["em"])]],
    dmk=["%dp" % round(h["dmk"] * 100) for h in HIST[1:]],
    surv=[round(s * 100, 1) for s in S0], payback=payback, pay_surv=pc(pay_surv),
    two=[["Share of sign-ups", "45%", "55%"], ["Boxes bought", "%.1f" % leaver_boxes, "%.1f" % stayer_boxes],
         ["Gross profit", rs(UNIT["leaver_gp"]), rs(UNIT["stayer_gp"])], ["Against CAC", rs(-UNIT["leaver_loss"]), "%.2fx" % UNIT["stayer_lc"]]],
    burn=f1(UNIT["leaver_burn"]), leaver_loss=rs(UNIT["leaver_loss"]),
    why=[[w[0].replace(" / ", ", "), w[1]] for w in F["why"]],
    opt=[[OPT[k]["label"], OPT[k]["s_growth"], OPT[k]["s_profit"], OPT[k]["s_cash"], OPT[k]["s_risk"], "%.2f" % OPT[k]["score"]] for k in ("A_written", "B_written", "C_written")]
        + [["A rebuilt (ours)", PER["s_growth"], PER["s_profit"], PER["s_cash"], PER["s_risk"], "%.2f" % PER["score"]]],
    cashq=dict(drift=qpts("drift"), A=qpts("A_written"), B=qpts("B_written"), C=qpts("C_written"), base=qpts("base"), core=qpts("core"), bear=qpts("bear"), bear_cont=qpts("bear_cont"), bull=qpts("bull")),
    zero=dict(drift=d0["zero"], A=SUM["A_written"]["zero"], B=SUM["B_written"]["zero"], C=SUM["C_written"]["zero"]),
    aw1=f2(-AW1), be_skip=pc(UNIT["be_skip"], 1), b_store=rs(UNIT["b_store_m_rs"]),
    grid=[[f1(x) for x in row] for row in GRID], grid_raw=[[round(x, 2) for x in row] for row in GRID],
    ladder=[["Today", round(lc0, 2)], ["Retention", round(lc1, 2)], ["Margin", round(lc2, 2)], ["CAC", round(lc3, 2)], ["Benchmark", 3.0]],
    lc24="%.2fx" % lc3, cac24=rs(c0["cac"]),
    bridge=[[n, round(v, 2)] for n, v in BRIDGE], be="MONTH %d" % b["be"], be_n=b["be"], mincash=f1(b["mincash"]), minm=b["minm"],
    scen=[["Revenue", "42.0", f1(b["rev1"]), f1(b["rev2"]), f1(br["rev2"]), f1(bu["rev2"])],
          ["Gross margin", "31.0%", pc(b["gm1"], 1), pc(b["gm2"], 1), pc(br["gm2"], 1), pc(bu["gm2"], 1)],
          ["Marketing %", "30.0%", pc(b["mk1"], 1), pc(b["mk2"], 1), pc(br["mk2"], 1), pc(bu["mk2"], 1)],
          ["EBITDA", MIN + "9.2", f1(b["eb1"]), f1(b["eb2"]), f1(br["eb2"]), f1(bu["eb2"])],
          ["Year-end cash", "15.0", f1(b["cash12"]), f1(b["cash24"]), f1(br["cash24"]), f1(bu["cash24"])],
          ["M3 retention", "55%", pc(b["s3"]), pc(b["s3"]), pc(br["s3"]), pc(bu["s3"])],
          ["LTV to CAC", "1.55x", "%.2fx" % (R[11]["ltv"] / R[11]["cac"]), "%.2fx" % b["lc"], "%.2fx" % br["lc"], "%.2fx" % bu["lc"]]],
    uses=[["Proposal A build", F["A"]["inv"]], ["Year 1 operating loss", round(-b["eb1"], 2)], ["Staged ready-to-eat, gated", A["A23_stage"]["inv"]],
          ["Year 2 operating loss", round(-b["eb2"], 2)], ["Cash left at month 24", round(b["cash24"], 2)]],
    core_cash24=f1(c0["cash24"]), core_rr=f1(c0["rr"]), bear_cash24=f1(br["cash24"]), bear_zero=SUM["bear"]["zero"], base_rr=f2(b["rr"]), bull_be=bu["be"], bull_rr=f1(bu["rr"]),
    y1loss=f1(-b["eb1"]), y2loss=f1(-b["eb2"]), cash12=f1(b["cash12"]), cash24=f1(b["cash24"]),
    kpi=[["M3 retention, new cohorts", "55%", "M2: 81%", k12["s3"], k24["s3"], "under 60% at month 6"],
         ["Boxes skipped, % of due", "none", "from M4", k12["skip"], k24["skip"], "over 6% for 2 months"],
         ["Blended CAC", RU + "7,000", k3["cac"], k12["cac"], k24["cac"], "over " + RU + "6,000 at month 6"],
         ["LTV to CAC, new cohorts", "1.55x", k3["lc"], k12["lc"], k24["lc"], "under 2.0x at month 9"],
         ["Gross margin", "31.0%", k3["gm"], k12["gm"], k24["gm"], "under 32% at month 9"],
         ["Marketing % of revenue", "30.0%", k3["mk"], k12["mk"], k24["mk"], "over 25% at month 9"],
         ["Cash in bank (" + RU + " Cr)", "15.0", k3["cash"], k12["cash"], k24["cash"], "under " + RU + "7 Cr at month 12"]],
    torn=[[n, round(lo["rr"], 2), round(hi["rr"], 2)] for n, lo, hi in TORN], torn_base=round(b["rr"], 2),
    optab=[[k[0] + " as written", "%s%.1f Cr" % (RU, F[k[0]]["inv"]), sg(d24(k, "rev")), sg(d24(k, "eb")), "zero in M%d" % SUM[k]["zero"]] for k in ("A_written", "B_written", "C_written")]
          + [["B + improvements", RU + "1.3 Cr", sg(d24("B_reset", "rev")), sg(d24("B_reset", "eb")), RU + f1(SUM["B_reset"]["cash24"]) + " Cr left"],
             ["C + improvements", RU + "5.0 Cr", sg(d24("C_reset", "rev")), sg(d24("C_reset", "eb")), RU + f1(SUM["C_reset"]["cash24"]) + " Cr left"],
             ["A rebuilt (ours)", RU + "1.8 Cr", sg(d24("core", "rev")), sg(d24("core", "eb")), RU + f1(c0["cash24"]) + " Cr left"]],
    check=[["Boxes sold", RU + "42 Cr ÷ " + RU + "5,200", format(int(round(UNIT["boxes_m"])), ",") + " a month", "Used"],
           ["Lifetime boxes", "6.8", "ties to retention", "Used"],
           ["New customers", "not stated", format(int(round(UNIT["n0_m"])), ",") + " a month", "Used"],
           ["Subscribers", "62,000 active", "1 in 9 buys monthly", "Not used"],
           ["Web orders", "14 lakh × 2.8%", "39,200 a month", "Ratio"]],
    assum=[["A08", "Skip rate once free", "5% (bear 10%)"], ["A09", "Order value, new plan mix", RU + "5,091"],
           ["A10", "Referral share of sign-ups", "20% at " + RU + "2,000"], ["A14", "Website conversion", "2.8% to 3.3%"],
           ["A16", "Paid volume pruned", "10%, costliest"], ["A17", "Non-working marketing", "cut 40%"],
           ["A18", "Gross margin levers", "+4.0 points"], ["A19", "Overheads", "cut 12%"], ["A23", "Staged ready-to-eat", "80% of C, M13"]])
VJS = "const V = " + json.dumps(V, ensure_ascii=False) + ";\n"


# ---------- model tables (reproduced as Appendix B of the research document) ----------
def mdt(title, head, rows):
    return "\n### " + title + "\n\n| " + " | ".join(head) + " |\n|" + "---|" * len(head) + "\n" + "\n".join("| " + " | ".join(str(c) for c in r) + " |" for r in rows) + "\n"
SCN = [("drift", "No decision"), ("A_written", "A as written"), ("B_written", "B as written"), ("C_written", "C as written"), ("reset_only", "Improvements only"),
       ("B_reset", "B with the same improvements"), ("C_reset", "C with the same improvements"), ("core", "Recommended plan, core (A rebuilt)"), ("base", "Recommended plan, base (with staged ready-to-eat)"),
       ("bear", "Bear, no response"), ("bear_cont", "Bear with the contingency"), ("bull", "Bull")]
TABLES = "# HarvestBox model tables (hash " + HASH + ")\n\nAll money in " + RU + " crore unless stated. Generated by harvestbox_model.py; do not edit by hand.\n"
TABLES += mdt("T1 Four-year history rebuilt from the case", ["Year", "Revenue", "Gross profit", "Marketing", "Other operating cost", "EBITDA", "Other cost % of revenue", "Marketing added per " + RU + "1 of new revenue"],
              [[h["year"], h["rev"], f2(h["gp"]), f2(h["mkt"]), f2(h["opex"]), f2(h["eb"]), pc(h["ox"]), "" if h["dmk"] is None else f2(h["dmk"])] for h in HIST])
TABLES += mdt("T2 Calibration: what the case figures imply", ["Item", "Value"], [[k_, (round(v_, 3) if isinstance(v_, float) else v_)] for k_, v_ in UNIT.items()])
TABLES += mdt("T3 Survival curve, months 1 to 12, today and with Proposal A rebuilt", ["Month"] + [str(i) for i in range(1, 13)], [["Today"] + [pc(s, 1) for s in S0], ["A rebuilt (65% at month 3)"] + [pc(s, 1) for s in surv12(0.65)]])
TABLES += mdt("T4 Scenario summary, 24 months", ["Scenario", "Revenue Y1", "Revenue Y2", "EBITDA Y1", "EBITDA Y2", "Run-rate EBITDA M22 to M24", "Cash M12", "Cash M24", "Lowest cash", "Month of lowest", "Cash zero month", "Break-even month", "CAC at M24", "LTV to CAC at M24"],
              [[lab, f1(SUM[k]["rev1"]), f1(SUM[k]["rev2"]), f2(SUM[k]["eb1"]), f2(SUM[k]["eb2"]), f2(SUM[k]["rr"]), f2(SUM[k]["cash12"]), f2(SUM[k]["cash24"]), f2(SUM[k]["mincash"]), SUM[k]["minm"], SUM[k]["zero"] or "none", SUM[k]["be"] or "none", rs(SUM[k]["cac"]), "%.2fx" % SUM[k]["lc"]] for k, lab in SCN])
TABLES += mdt("T5 Base case by month", ["Month", "New customers", "Active customers", "Revenue", "Gross margin", "Marketing", "Other cost", "EBITDA", "One-off investment", "Cash", "CAC", "LTV to CAC"],
              [[x["t"], round(x["new"]), round(x["act"]), f2(x["rev"]), pc(x["gm"], 1), f2(x["mkt"]), f2(x["opex"]), f2(x["eb"]), f2(x["inv"]), f2(x["cash"]), rs(x["cac"]), "%.2fx" % (x["ltv"] / x["cac"])] for x in R])
TABLES += mdt("T6 EBITDA bridge, 2025 to the month 24 run-rate", ["Step", RU + " Cr a year"], [[n, f2(v)] for n, v in BRIDGE])
TABLES += mdt("T7 Sensitivity of the base case (one input at a time)", ["Input and range", "Run-rate EBITDA low", "Run-rate EBITDA high", "Cash M24 low", "Cash M24 high"], [[n, f2(lo["rr"]), f2(hi["rr"]), f2(lo["cash24"]), f2(hi["cash24"])] for n, lo, hi in TORN])
TABLES += mdt("T8 24-month cumulative EBITDA by 3-month retention (rows) and skip rate (columns)", ["Retention"] + [pc(k_) for k_ in GRID_SK], [[pc(s_)] + [f1(x) for x in row] for s_, row in zip(GRID_S3, GRID)])
TABLES += mdt("T9 Option scorecard (1 to 5; weights growth 20, profit 30, cash 30, risk 20)", ["Option", "Year-1 revenue vs no decision", "24-month revenue vs no decision", "24-month EBITDA vs no decision", "Cash needed", "Growth", "Profit", "Cash", "Risk", "Score"],
              [[o["label"], sg(o["drev"]), sg(d24(k_, "rev")), sg(o["deb"]), f2(o["need"]), o["s_growth"], o["s_profit"], o["s_cash"], o["s_risk"], "%.2f" % o["score"]] for k_, o in OPT.items()]
              + [[PER["label"], sg(SUM["core"]["rev1"] - SUM["drift"]["rev1"]), sg(d24("core", "rev")), sg(d24("core", "eb")), "1.80", PER["s_growth"], PER["s_profit"], PER["s_cash"], PER["s_risk"], "%.2f" % PER["score"]]])
TABLES += mdt("T10 Uses of the " + RU + "15 Cr over 24 months, base case", ["Use", RU + " Cr"], V["uses"] + [["Total", f2(sum(u[1] for u in V["uses"]))]])
TABLES += mdt("T11 Board KPIs on the base path", ["KPI", "Today", "Day 90", "Month 12", "Month 24", "Stop trigger"], V["kpi"])
TABLES += mdt("T12 LTV to CAC ladder", ["Step", "LTV to CAC"], V["ladder"])
TABLES += mdt("T13 Quarterly cash by scenario", ["Scenario"] + ["M" + str(i) for i in range(0, 25, 3)], [[k_] + [f1(x) for x in v_] for k_, v_ in V["cashq"].items()])
chk("uses of cash sum to 15", abs(sum(u[1] for u in V["uses"]) - 15.0) < 0.02)

if __name__ == "__main__" or DRY:
    for n, ok in CHK: print("PASS" if ok else "FAIL", n)
    print("HASH", HASH)
    for k, s in SUM.items():
        print("%-11s Y1 rev %5.1f eb %6.2f | Y2 rev %5.1f eb %6.2f | RR %6.2f | cash12 %5.2f cash24 %6.2f min %5.2f@M%-2d zero %s BE %s | CAC %5.0f LTV/CAC %.2f" % (
            k, s["rev1"], s["eb1"], s["rev2"], s["eb2"], s["rr"], s["cash12"], s["cash24"], s["mincash"], s["minm"], s["zero"], s["be"], s["cac"], s["lc"]))
    if DRY: print("VALUES_JS " + VJS.strip())
    else:
        io.open(HERE / "model_outputs.json", "w", encoding="utf-8", newline="\n").write(json.dumps(OUT, indent=1, default=str))
        (HERE.parent / "deck").mkdir(exist_ok=True)
        io.open(HERE.parent / "deck" / "values.js", "w", encoding="utf-8", newline="\n").write(VJS)
        io.open(HERE / "model_tables.md", "w", encoding="utf-8", newline="\n").write(TABLES)
        print("wrote model_outputs.json, model_tables.md and deck/values.js", len(VJS))
    print("FINDINGS", [len(V[k]) for k in ("f2", "f3", "f4", "f5", "f6")])
    assert all(ok for _, ok in CHK), "a model check failed"
