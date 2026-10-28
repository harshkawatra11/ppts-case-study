# ===== DOBAARA MODEL v1 =====
"""Tikau Phones economics and plan model for Project DOBAARA (MarKSoc DTU Case Competition 2026).
Run from the repo root:  python -X utf8 marksoc-case/model/dobaara_model.py
Writes marksoc-case/model/model_outputs.json, marksoc-case/model/model_tables.md and marksoc-case/deck/values.json.
Add --dry to print the summary without writing anything.
Every input is a case number (pages 2, 3 and 7, Exhibits 1 to 6) or a stated assumption A01 to A20 (table T1).
Nothing here uses outside data: the case's ground rules give outside numbers no credit (C-R1, FAQ 4)."""
import io, json, sys, hashlib, itertools, pathlib, datetime

# ---------- formatting (Indian digit grouping; the minus sign is U+2212; no dashes anywhere) ----------
MINUS = "−"
def ind(n):
    s = str(int(round(abs(n))))
    if len(s) <= 3: return s
    head, tail, parts = s[:-3], s[-3:], []
    while len(head) > 2: parts.insert(0, head[-2:]); head = head[:-2]
    if head: parts.insert(0, head)
    return ",".join(parts) + "," + tail
def r1(v): r = round(v + 1e-9, 1); return 0.0 if abs(r) < 0.05 else r
def lk(v, sign=False):
    r = r1(v); return (MINUS if r < 0 else ("+" if sign and r > 0 else "")) + "%.1f" % abs(r)
def rl(v, sign=False):
    r = r1(v); return (MINUS if r < 0 else ("+" if sign and r > 0 else "")) + "₹%.1f lakh" % abs(r)
def rs(v, sign=False):
    return (MINUS if round(v) < 0 else ("+" if sign and round(v) > 0 else "")) + "₹" + ind(v)
def n0(v): return (MINUS if round(v) < 0 else "") + ind(v)
def pc(v, dp=1): return "%.*f%%" % (dp, v * 100)

# ---------- case facts (IDs resolve to marksoc-case/case/01-case.md) ----------
GR = ("S", "G", "F"); GN = {"S": "Superb", "G": "Good", "F": "Fair"}
PRICE = {"S": 24000, "G": 16000, "F": 10000}          # C-E2
BUY = {"S": 17800, "G": 11600, "F": 7000}             # C-E2
LAB = {"S": 800, "G": 1000, "F": 1200}                # C-E2
PACK = 600                                            # C-E2
CLAIM = {"S": 0.03, "G": 0.06, "F": 0.10}             # C-E2
RET = {"S": 0.04, "G": 0.07, "F": 0.13}               # C-E2 (website rates, C-E2N4)
CLAIM_COST, RET_COST = 2500, 1800                     # C-E2N1, C-E2N2
FIXED = 58.0                                          # C-CO4, ₹ lakh a month
LTM_REV_CR, LTM_EBITDA_CR = 139.0, -1.7               # C-CO3
BUDGET = 80.0                                         # C-B7, ₹ lakh, January to March 2027
LAB_TESTED, LAB_FAIL, LAB_SELL = 8000, 0.10, 7200     # C-E4a
SHIFT_ADD, SHIFT_COST = 1800, 9.0                     # C-E6SH (9,000 in total)
SUPERB_CAP = 2000                                     # C-E4b
SPOT_N, SPOT_BAD = 200, 22                            # C-E4c
REPAIR_DAYS, SECOND_VISIT = 9, 0.38                   # C-E4d
# channels: key, label, orders a month, grade mix, fixed spend (₹ lakh), commission share, coupon (₹), return multiplier, dashboard cost per order (₹)
CH = [("ads", "Performance ads", 2600, {"S": .20, "G": .40, "F": .40}, 60.0, 0.00, 0, 1.0, 2308),   # C-E3, C-E3N1
      ("mk", "MegaKart", 2000, {"S": .10, "G": .45, "F": .45}, 0.0, 0.12, 0, 1.0, 0),               # C-E3N2
      ("cr", "Creators", 900, {"S": .40, "G": .50, "F": .10}, 18.0, 0.00, 0, 1.5, 2000),            # C-E3N3
      ("st", "Stores", 1000, {"S": .45, "G": .45, "F": .10}, 21.0, 0.00, 0, 0.5, 2100),             # C-E3N4
      ("rf", "Referrals", 700, {"S": .35, "G": .50, "F": .15}, 0.0, 0.00, 350, 1.0, 350)]           # C-E3N5
CHK = [c[0] for c in CH]; CHN = {c[0]: c[1] for c in CH}; CHN["ti"] = "Trade in orders"
REASONS = [("Worried the battery will not last", 46), ("Cannot tell the real condition from photos", 41), ("6 month warranty is too short", 31),
           ("Wanted to see the phone in person", 28), ("Price not low enough compared with a local shop", 24), ("Phone might be stolen or locked", 22),
           ("Worried about the previous owner's data", 12)]                                        # C-E1A
OFFERS = [("Battery health guaranteed at 85% or more", 44), ("12 month warranty", 39), ("A condition report with real photos, a battery reading and an IMEI check", 36),
          ("Take my old phone as part payment", 31), ("A price 5% lower", 22)]                       # C-E1B
SEGS = [("Flagship on a budget", 34, "Superb"), ("Value seekers", 29, "Fair"), ("Family buyers", 21, "Good"), ("Upgraders", 16, "Superb and Good")]  # C-E1C
FUNNEL = [("Visited the website", 960000), ("Opened a product page", 310000), ("Added a phone to cart", 26000), ("Placed an order", 4200)]  # C-E1D
STORE_CONV = 1 / 3                                                                                  # C-E1D note
# which Exhibit 6 option answers each lost-sale reason (team mapping; T9). "Stores" = an existing channel, not an option.
REASON_FIX = ["B2 (85% battery) with B1 (lab reading)", "B1 (real photos, condition report)", "B2 (12 month warranty)", "Stores (existing channel)",
              "A (Fair price cut only)", "B1 (IMEI check)", "B1 (data wipe certificate)"]
# segment scorecard (team judgement, 1 weak to 5 strong; T10). Criteria and the case basis for each score are printed with the table.
SEG_CRIT = ["Size: share of buyers", "Contribution a phone after the plan", "Room to grow in Q1", "Return risk of the grade", "Their worry is what B1 + B2 fix",
            "A lever that passes the board tests reaches them"]
SEG_SCORE = {"Flagship on a budget": [5, 5, 1, 5, 3, 3], "Value seekers": [4, 1, 5, 1, 1, 1], "Family buyers": [3, 3, 5, 3, 5, 5], "Upgraders": [2, 4, 3, 4, 2, 1]}
SEG_BASIS = {"Flagship on a budget": ["34%", "Superb ₹5,500", "Superb capped at 2,000", "Superb 4%", "photos and condition (41%)", "B1 + B2, but Superb is rationed"],
             "Value seekers": ["29%", "Fair ₹164", "no cap", "Fair 13%", "price (24%)", "only A, which fails tests 2 to 4"],
             "Family buyers": ["21%", "Good ₹2,699", "no cap", "Good 7%", "who will fix it: 12 months (39%), battery (46%)", "B1 + B2"],
             "Upgraders": ["16%", "Superb and Good", "half capped", "4% to 7%", "part payment (31%)", "C, which does not fit the ₹80 lakh with B1 + B2"]}
# levers (C-E6): setup ₹ lakh paid in January; monthly ₹ lakh from February
LEV = {"A": dict(setup=0, monthly=10.0), "B1": dict(setup=15.0, monthly=0), "B2": dict(setup=25.0, monthly=0),
       "B3": dict(setup=0, monthly=15.0), "C": dict(setup=35.0, monthly=0)}
# lever effects as printed in Exhibit 6 (the sensitivity scales k_* change them only in T18 and T19)
BASEP = dict(upA=0.50, upB1=0.08, upB2=0.08, upB3=0.05, rrB1=0.30, rrB2=0.20, gbat=0.40, fbat=0.70, gbat_c=1000, fbat_c=800, rep=120,
             pB2=0.04, pA=0.03, tin_fail=0.15, tin_buy=0.30, tin_save=0.08, pickup=400, credit=1000, kcl=1.0)
MIX_A = {"ads": {"S": .15, "G": .35, "F": .50}, "mk": {"S": .05, "G": .40, "F": .55}}             # C-E6A
CLAIM_B2 = {"S": 0.04, "G": 0.06, "F": 0.09}                                                         # C-E6B2
TIN_ARR = {"S": .30, "G": .50, "F": .20}; TIN_BUYMIX = {"S": .40, "G": .50, "F": .10}               # C-E6TI2, C-E6TI4
TIN_SCHED = {"Jan": 0, "Feb": 1000, "Mar": 1800}                                                     # C-E6TI1
MONTHS = ("Jan", "Feb", "Mar")

# ---------- assumptions (T1): every gap in the case, stated once, used everywhere ----------
A = [
 ("A01", "Lever A's ₹10 lakh of extra performance ads is counted once, as growth money in the month spent, and is not added again to the performance-ads fixed spend", "C-E6H3 says count each growth item once"),
 ("A02", "Each channel's fixed spend (₹99 lakh in all) stays as today in every plan and every month", "No lever in Exhibit 6 changes it"),
 ("A03", "Commission, coupons and every per-phone cost apply only to delivered orders; an order that cannot be delivered earns and costs nothing", "C-E6H4: undelivered orders are lost"),
 ("A04", "Rationing includes trade in orders: Superb first, pro rata across all channels, then all orders pro rata to the lab limit", "C-E6H4 read literally"),
 ("A05", "Return-rate cuts from B1 and B2 multiply each channel's own rate, including the website rate that trade in buyers pay", "C-E6H2: multiply effects on return rates"),
 ("A06", "The 15% trade in failure rate applies equally to each arriving grade", "C-E6TI2 gives one rate"),
 ("A07", "30% of all trade ins, failed or passed, also buy a Tikau phone", "C-E6TI4: 30% of people who trade in"),
 ("A08", "From February the Superb rule (85% or more) is applied to Tikau's own lab reading; with no failure rate in the case, no Superb phone changes grade", "C-E5a, C-E6B1; no data on Superb readings"),
 ("A09", "January is today's month in every plan, so doing nothing earns today's result in each of the three months", "C-E6H1 and FAQ 15"),
 ("A10", "A third shift adds 1,800 sellable phones, so the limit becomes 9,000; its ₹9 lakh is growth money in each month it runs", "C-E6SH, C-E6H3"),
 ("A11", "B2's 4% price rise raises MegaKart's 12% commission on those phones, because the commission is a share of the selling price", "C-E3N2"),
 ("A12", "The ₹120 report cost and the B2 battery costs apply to trade in buyers' phones too", "C-E6H2: cost changes apply to every phone sold"),
 ("A13", "Weekly figures use 4.33 weeks a month", "Team convention"),
 ("A14", "The November spot check (22 of 200 Good phones below 80%) applies to all Good phones sold, so about 351 a month carry an untrue battery claim today", "C-E4c, an indicative scale-up only"),
 ("A15", "In April Tikau has new growth money for the next quarter and the trade in ramp restarts at 1,000, then 1,800, then 800 more a month to 4,000", "C-E6TI1 pattern; April is outside the board tests"),
 ("A16", "Stress tests move only what Tikau does not control (the order rise, the return cut, battery shares, claim rates) 25% worse or better; prices and the ₹120 report cost are Tikau's decisions and stay as printed; the plan uses the printed values", "Team convention for Q5 trigger levels"),
 ("A17", "Revenue in the reconciliation is gross selling price before commission; the case's ₹139 crore is read as that figure", "C-CO3"),
 ("A18", "Month figures are averages of August to October 2026 and stand for November 2026 to January 2027 as well", "C-E3 title, C-E6H1"),
 ("A19", "Store, creator and MegaKart return multipliers stay as today when B1 and B2 apply", "C-E3 notes"),
 ("A20", "Trade in savings count only for traded phones that pass the check; a failed traded phone is sold as parts at cost, like a failed lab phone", "C-E6TI2, C-E4a"),
]

A_SHORT = {"A01": "Lever A's ₹10 lakh counts once, as growth money, not in ads' fixed spend",
           "A02": "Every channel's fixed spend stays as today in every plan and month",
           "A03": "Commission, coupons and per-phone costs apply to delivered orders only",
           "A04": "Rationing covers trade in orders too: Superb first, then all orders pro rata",
           "A05": "Return cuts from B1 and B2 multiply each channel's own return rate",
           "A06": "The 15% trade in failure rate applies equally to every grade",
           "A07": "30% of all trade ins, failed or passed, also buy a Tikau phone",
           "A08": "From February Superb is graded on Tikau's reading; none changes grade",
           "A09": "January is today in every plan; doing nothing repeats today three times",
           "A10": "A third shift adds 1,800 sellable phones for ₹9 lakh of growth money a month",
           "A11": "B2's 4% price rise also raises MegaKart's 12% commission",
           "A12": "The ₹120 report and B2 battery costs apply to trade in buyers' phones too",
           "A13": "Weekly figures use 4.33 weeks a month",
           "A14": "The spot check rate (22 of 200) applies to every Good phone sold",
           "A15": "April brings new growth money; trade in ramps 1,000, 1,800, then +800 a month",
           "A16": "Stress tests move only what Tikau does not control, 25% worse or better",
           "A17": "The case's ₹139 crore is read as selling price before commission",
           "A18": "August to October averages stand for November to January",
           "A19": "Store, creator and MegaKart return multipliers hold under B1 and B2",
           "A20": "Only traded phones that pass save 8%; failed ones go for parts at cost"}

# ---------- the month engine ----------
def month_calc(levers, shift_on, tin, P=None, detail=False):
    """One month of Tikau with the given live levers. Returns orders, deliveries, contribution after marketing (₹ lakh), returns."""
    P = dict(BASEP, **(P or {}))
    A_, B1, B2, B3, Cl = ("A" in levers), ("B1" in levers), ("B2" in levers), ("B3" in levers), ("C" in levers)
    price = dict(PRICE); claim = dict(CLAIM); extra = {g: 0.0 for g in GR}
    if A_: price["F"] = PRICE["F"] * (1 - P["pA"])
    if B2:
        price["S"] = PRICE["S"] * (1 + P["pB2"]); price["G"] = PRICE["G"] * (1 + P["pB2"]); claim = {g: CLAIM_B2[g] * P["kcl"] for g in GR}
        extra["G"] += P["gbat"] * P["gbat_c"]; extra["F"] += P["fbat"] * P["fbat_c"]
    if B1:
        for g in GR: extra[g] += P["rep"]
    retm = (1 - P["rrB1"] if B1 else 1) * (1 - P["rrB2"] if B2 else 1)
    dem = {}
    for k, name, n, mix, fx, cm, cp, rm, dash in CH:
        m, mult = dict(mix), 1.0
        if A_ and k in MIX_A: mult *= 1 + P["upA"]; m = dict(MIX_A[k])
        if B1: mult *= 1 + P["upB1"]
        if B2: mult *= 1 + P["upB2"]
        if B3 and k != "mk": mult *= 1 + P["upB3"]
        dem[k] = {g: n * mult * m[g] for g in GR}
    supS, save, pick, tin_pass = float(SUPERB_CAP), 0.0, 0.0, {g: 0.0 for g in GR}
    if Cl and tin > 0:
        ps = tin * (1 - P["tin_fail"]); tin_pass = {g: ps * TIN_ARR[g] for g in GR}; supS += tin_pass["S"]
        save = sum(tin_pass[g] * BUY[g] * P["tin_save"] for g in GR) / 1e5; pick = tin * P["pickup"] / 1e5
        b = tin * P["tin_buy"]; dem["ti"] = {g: b * TIN_BUYMIX[g] for g in GR}
    deliv = {k: dict(v) for k, v in dem.items()}
    demS = sum(o["S"] for o in deliv.values()); fS = 1.0
    if demS > supS:
        fS = supS / demS
        for o in deliv.values(): o["S"] *= fS
    cap = LAB_SELL + (SHIFT_ADD if shift_on else 0); tot = sum(sum(o.values()) for o in deliv.values()); fC = 1.0
    if tot > cap:
        fC = cap / tot
        for o in deliv.values():
            for g in GR: o[g] *= fC
    rows = {}; cam = rets = sold = 0.0; unit = {}
    for k, o in deliv.items():
        spec = next((c for c in CH if c[0] == k), None)
        fx, cm, cp, rm = (spec[4], spec[5], spec[6], spec[7]) if spec else (0.0, 0.0, 0, 1.0)
        gross = rr = 0.0; u = {}
        for g in GR:
            r = RET[g] * rm * retm
            u[g] = price[g] - BUY[g] - LAB[g] - PACK - extra[g] - claim[g] * CLAIM_COST - r * RET_COST - cm * price[g]
            gross += o[g] * u[g]; rr += o[g] * r
        q = sum(o.values()); after = gross / 1e5 - fx - cp * q / 1e5 - (P["credit"] * q / 1e5 if k == "ti" else 0)
        rows[k] = dict(q=q, grade=dict(o), gross=gross / 1e5, cam=after, fixed=fx, comm=sum(o[g] * cm * price[g] for g in GR) / 1e5,
                       coupons=cp * q / 1e5, credit=(P["credit"] * q / 1e5 if k == "ti" else 0), returns=rr, unit=u, demand=sum(dem[k].values()))
        cam += after; rets += rr; sold += q
        unit[k] = u
    cam += save - pick
    web = {g: price[g] - BUY[g] - LAB[g] - PACK - extra[g] - claim[g] * CLAIM_COST - RET[g] * retm * RET_COST for g in GR}
    return dict(cam=cam, sold=sold, rets=rets, rr=rets / sold, rows=rows, save=save, pick=pick, fS=fS, fC=fC, demS=demS, supS=supS,
                demand=sum(sum(v.values()) for v in dem.values()), cap=cap, web=web, price=price, claim=claim, extra=extra, retm=retm,
                grade_sold={g: sum(o[g] for o in deliv.values()) for g in GR}, tin=tin, tin_pass=tin_pass)

def plan_calc(levers, shift, P=None, sched=None):
    """Three months, January to March 2027. shift is None, 'Feb' or 'Mar'."""
    levers = set(levers); sched = sched or TIN_SCHED
    setup = sum(LEV[l]["setup"] for l in levers); mon = sum(LEV[l]["monthly"] for l in levers)
    gm = {"Jan": setup, "Feb": mon + (SHIFT_COST if shift == "Feb" else 0), "Mar": mon + (SHIFT_COST if shift in ("Feb", "Mar") else 0)}
    ms = {"Jan": month_calc(set(), False, 0, P), "Feb": month_calc(levers, shift == "Feb", sched["Feb"], P),
          "Mar": month_calc(levers, shift in ("Feb", "Mar"), sched["Mar"], P)}
    e = {m: ms[m]["cam"] - FIXED - gm[m] for m in MONTHS}
    tests = {"t1": sum(gm.values()) <= BUDGET + 1e-9, "t2": e["Mar"] >= -1e-9, "t3": ms["Mar"]["rr"] <= 0.06 + 1e-12, "t4": "B1" in levers}
    return dict(levers=sorted(levers, key=lambda x: ["A", "B1", "B2", "B3", "C"].index(x)), shift=shift, gm=gm, gm_tot=sum(gm.values()), m=ms, e=e,
                q1=sum(e.values()), tests=tests, ok=all(tests.values()))

def label(p):
    s = " + ".join(p["levers"]) if p["levers"] else "Do nothing"
    return s + ({"Feb": " + shift from Feb", "Mar": " + shift from Mar"}.get(p["shift"], ""))

def all_plans(P=None):
    out = []
    for r in range(0, 6):
        for combo in itertools.combinations(["A", "B1", "B2", "B3", "C"], r):
            if "B3" in combo and not ({"B1", "B2"} & set(combo)): continue    # C-E6B3: B3 only with B1 or B2
            for sh in (None, "Feb", "Mar"): out.append(plan_calc(combo, sh, P))
    return out

def bridge_march(P=None):
    """Status-quo March to plan March, one effect at a time (the order is fixed so the steps add up exactly)."""
    base = month_calc(set(), False, 0, P); plan = month_calc({"B1", "B2"}, True, 0, P)
    deliv = {k: plan["rows"][k]["grade"] for k in plan["rows"]}
    def cam(price, claim, extra, retm):
        t = 0.0
        for k, name, n, mix, fx, cm, cp, rm, dash in CH:
            o = deliv[k]
            for g in GR: t += o[g] * (price[g] - BUY[g] - LAB[g] - PACK - extra[g] - claim[g] * CLAIM_COST - RET[g] * rm * retm * RET_COST - cm * price[g])
            t -= fx * 1e5 + cp * sum(o.values())
        return t / 1e5
    z = {g: 0.0 for g in GR}; pp = plan["price"]; bat = {"S": 0.0, "G": BASEP["gbat"] * BASEP["gbat_c"], "F": BASEP["fbat"] * BASEP["fbat_c"]}
    rep = {g: bat[g] + BASEP["rep"] for g in GR}
    lv = [base["cam"], cam(PRICE, CLAIM, z, 1), cam(pp, CLAIM, z, 1), cam(pp, CLAIM, bat, 1), cam(pp, CLAIM, rep, 1), cam(pp, CLAIM_B2, rep, 1), cam(pp, CLAIM_B2, rep, plan["retm"])]
    names = ["More phones sold", "Superb and Good prices up 4%", "New batteries (B2)", "Tikau Report, ₹120 a phone", "Warranty claim rates", "Fewer returns"]
    steps = [(names[i], lv[i + 1] - lv[i]) for i in range(6)]
    return dict(start=base["cam"] - FIXED, steps=steps, shift=-SHIFT_COST, end=lv[-1] - FIXED - SHIFT_COST, plan_cam=plan["cam"])

def bisect(f, lo, hi, n=80):
    for _ in range(n):
        mid = (lo + hi) / 2
        if f(mid) < 0: lo = mid
        else: hi = mid
    return hi

def run():
    out = {"meta": {"version": "dobaara-model v1"}}
    base = month_calc(set(), False, 0)
    # ---- T2: one phone, by grade, website rates ----
    t2 = {}
    for g in GR:
        w = CLAIM[g] * CLAIM_COST; r = RET[g] * RET_COST
        t2[g] = dict(price=PRICE[g], buy=BUY[g], lab=LAB[g], pack=PACK, warranty=w, returns=r, contrib=PRICE[g] - BUY[g] - LAB[g] - PACK - w - r)
    # ---- T3: by grade and return regime ----
    t3 = {g: {m: PRICE[g] - BUY[g] - LAB[g] - PACK - CLAIM[g] * CLAIM_COST - RET[g] * m * RET_COST for m in (0.5, 1.0, 1.5)} for g in GR}
    # ---- T4: channels today ----
    t4 = {}
    for k, name, n, mix, fx, cm, cp, rm, dash in CH:
        r = base["rows"][k]
        t4[k] = dict(name=name, orders=n, S=mix["S"], G=mix["G"], F=mix["F"], gross=r["gross"], comm=r["comm"], fixed=fx, coupons=r["coupons"],
                     contrib_before=r["gross"] + r["comm"], cam=r["cam"], cam_per=r["cam"] * 1e5 / n, dash=dash,
                     true_cost=(fx * 1e5 + r["comm"] * 1e5 + r["coupons"] * 1e5) / n, ret_rate=r["returns"] / n, returns=r["returns"],
                     wc=sum(n * mix[g] * CLAIM[g] for g in GR))
    tot_rev = sum(base["grade_sold"][g] * PRICE[g] for g in GR) / 1e5
    claims_n = sum(base["grade_sold"][g] * CLAIM[g] for g in GR)
    t5 = dict(cam=base["cam"], fixed=FIXED, ebitda=base["cam"] - FIXED, ltm=(base["cam"] - FIXED) * 12, ltm_case=LTM_EBITDA_CR * 100,
              rev_month=tot_rev, rev_ltm_cr=tot_rev * 12 / 100, rev_case=LTM_REV_CR, sold=base["sold"], rets=base["rets"], rr=base["rr"],
              claims_n=claims_n, claims_cost=claims_n * CLAIM_COST / 1e5, ret_cost=base["rets"] * RET_COST / 1e5,
              grade_sold=base["grade_sold"], comm_total=sum(base["rows"][k]["comm"] for k in CHK), fixed_ch=sum(c[4] for c in CH),
              coupons=sum(base["rows"][k]["coupons"] for k in CHK), gross_total=sum(base["rows"][k]["gross"] for k in CHK) + sum(base["rows"][k]["comm"] for k in CHK),
              grade_contrib={g: base["grade_sold"][g] * t2[g]["contrib"] / 1e5 for g in GR})
    t5["trust_tax"] = t5["claims_cost"] + t5["ret_cost"]
    # ---- funnel ----
    fun = [dict(step=s, n=v, conv=(v / FUNNEL[i - 1][1] if i else 1.0)) for i, (s, v) in enumerate(FUNNEL)]
    web_orders = sum(t4[k]["orders"] for k in ("ads", "cr", "rf"))
    # ---- capacity and the battery spot check ----
    cap = dict(tested=LAB_TESTED, fail=LAB_FAIL, sellable=LAB_SELL, sold=base["sold"], util=base["sold"] / LAB_SELL, superb=base["grade_sold"]["S"],
               superb_cap=SUPERB_CAP, superb_head=SUPERB_CAP - base["grade_sold"]["S"], spot=SPOT_BAD / SPOT_N,
               bad_month=SPOT_BAD / SPOT_N * base["grade_sold"]["G"], repair_days=REPAIR_DAYS, second=SECOND_VISIT)
    # ---- lever unit effects (website rates) ----
    def web(lv):
        mc = month_calc(set(lv), True, 0); return mc["web"]
    t11 = {"Today": web(()), "A": web(("A",)), "B1": web(("B1",)), "B2": web(("B2",)), "B1 + B2": web(("B1", "B2")), "A + B1 + B2": web(("A", "B1", "B2"))}
    # ---- every plan ----
    plans = all_plans(); feas = [p for p in plans if p["ok"]]; feas.sort(key=lambda p: -p["q1"])
    nothing = plan_calc((), None); best = feas[0]
    assert best["levers"] == ["B1", "B2"] and best["shift"] == "Feb", label(best)
    named = [("Do nothing", (), None), ("Rohan: price push", ("A",), None), ("Rohan with a third shift", ("A",), "Feb"),
             ("Kabir: certify and warranty", ("B1", "B2"), None), ("Store managers: trade in", ("C",), None),
             ("Battery promise without the report", ("B2",), "Feb"), ("Everything that fits on paper", ("B1", "B2", "C"), "Feb"),
             ("Trade in instead of the shift", ("B1", "B2", "C"), None), ("Our plan", ("B1", "B2"), "Feb")]
    t14 = []
    for nm, lv, sh in named:
        p = plan_calc(lv, sh); t14.append(dict(name=nm, label=label(p), gm=p["gm_tot"], e=p["e"], q1=p["q1"], d=p["q1"] - nothing["q1"], rr=p["m"]["Mar"]["rr"],
                                               tests=p["tests"], ok=p["ok"], sold=p["m"]["Mar"]["sold"], demand=p["m"]["Mar"]["demand"]))
    rec = best
    # ---- T15 decision table ----
    t15 = {m: dict(options=("None live; ₹40 lakh of B1 and B2 setup paid" if m == "Jan" else "B1, B2, third shift"), sold=rec["m"][m]["sold"], cam=rec["m"][m]["cam"],
                   gm=rec["gm"][m], ebitda=rec["e"][m], rr=rec["m"][m]["rr"]) for m in MONTHS}
    # ---- bridge ----
    br = bridge_march()
    # ---- sensitivities (T18, T19) ----
    def mar_e(P=None, mult=None):
        PP = dict(BASEP, **(P or {}))
        if mult is not None: PP["upB1"] = mult - 1; PP["upB2"] = 0.0
        m = month_calc({"B1", "B2"}, True, 0, PP); return m["cam"] - FIXED - SHIFT_COST, m
    be_mult = bisect(lambda x: mar_e(mult=x)[0], 1.0, 1.1664)
    be_orders = mar_e(mult=be_mult)[1]["sold"]
    be_gbat = bisect(lambda x: -mar_e({"gbat": x})[0], 0.40, 1.0)
    be_fbat = bisect(lambda x: -mar_e({"fbat": x})[0], 0.70, 1.0)
    def rr_at(retm):
        PP = dict(BASEP); PP["rrB1"] = 1 - retm; PP["rrB2"] = 0.0; return month_calc({"B1", "B2"}, True, 0, PP)["rr"]
    rr_mult_6 = bisect(lambda x: rr_at(x) - 0.06, 0.56, 1.0)
    rr_mult_55 = bisect(lambda x: rr_at(x) - 0.055, 0.56, 1.0)
    # Stress only what Tikau does not control: customers' response, returns, the lab's battery findings and claims.
    # Prices (+4%) and the ₹120 report cost are Tikau's own decisions and stay as printed.
    UP, DN = ("upB1", "upB2", "rrB1", "rrB2"), ("gbat", "fbat", "kcl")
    tor_items = [("Order rise", ["upB1", "upB2"]), ("Good battery swaps", ["gbat"]), ("Fair battery swaps", ["fbat"]),
                 ("Return cut", ["rrB1", "rrB2"]), ("Claim rates after B2", ["kcl"])]
    def stress(keys, k):   # k = 0.75 bear, 1.25 bull: good effects scale with k, cost drivers scale against it
        return {key: (BASEP[key] * k if key in UP else (min(1.0, BASEP[key] * (2 - k)) if key in ("gbat", "fbat") else BASEP[key] * (2 - k))) for key in keys}
    base_e = mar_e()[0]; tor = []
    for nm, keys in tor_items:
        tor.append(dict(name=nm, bear=mar_e(stress(keys, 0.75))[0], bull=mar_e(stress(keys, 1.25))[0]))
        tor[-1]["swing"] = tor[-1]["bull"] - tor[-1]["bear"]
    tor.sort(key=lambda t: -t["swing"])
    def scen(k):
        p = plan_calc(("B1", "B2"), "Feb", stress(UP + DN, k)); return dict(e=p["e"], q1=p["q1"], d=p["q1"] - nothing["q1"], rr=p["m"]["Mar"]["rr"], sold=p["m"]["Mar"]["sold"], ok=p["ok"])
    scenarios = {"Bear": scen(0.75), "Base": scen(1.0), "Bull": scen(1.25)}
    # ---- April options (T20) ----
    april = []
    for nm, lv, tin in [("Keep the plan", {"B1", "B2"}, 0), ("Add B3 trust campaign", {"B1", "B2", "B3"}, 0), ("Add A price push", {"A", "B1", "B2"}, 0)] + \
                       [("Add C trade in, month %d" % (i + 1), {"B1", "B2", "C"}, t) for i, t in enumerate((1000, 1800, 2600, 3400, 4000))]:
        m = month_calc(lv, True, tin); monthly = SHIFT_COST + sum(LEV[l]["monthly"] for l in lv)
        april.append(dict(name=nm, tin=tin, cam=m["cam"], ebitda=m["cam"] - FIXED - monthly, sold=m["sold"], demand=m["demand"], rr=m["rr"]))
    # ---- channels in March under the plan ----
    chm = {k: dict(q=rec["m"]["Mar"]["rows"][k]["q"], cam=rec["m"]["Mar"]["rows"][k]["cam"], per=rec["m"]["Mar"]["rows"][k]["cam"] * 1e5 / rec["m"]["Mar"]["rows"][k]["q"],
                   rr=rec["m"]["Mar"]["rows"][k]["returns"] / rec["m"]["Mar"]["rows"][k]["q"]) for k in CHK}
    # ---- checks ----
    ck = {}
    ck["website orders = funnel orders"] = web_orders == FUNNEL[-1][1]
    ck["orders today = lab sellable"] = abs(base["sold"] - LAB_SELL) < 1e-6 and LAB_TESTED * (1 - LAB_FAIL) == LAB_SELL
    ck["channel fixed spend = ₹99 lakh"] = abs(sum(c[4] for c in CH) - 99) < 1e-9
    ck["dashboard figures reproduce"] = all(abs((c[4] * 1e5 + c[6] * c[2]) / c[2] - c[8]) < 1 for c in CH)
    ck["monthly EBITDA x 12 within ₹1 lakh of LTM"] = abs(t5["ltm"] - t5["ltm_case"]) < 1.0
    ck["revenue x 12 within ₹1 crore of LTM"] = abs(t5["rev_ltm_cr"] - LTM_REV_CR) < 1.0
    ck["grade mixes sum to 100%"] = all(abs(sum(c[3].values()) - 1) < 1e-9 for c in CH) and abs(sum(TIN_ARR.values()) - 1) < 1e-9
    ck["84 plans screened"] = len(plans) == 84
    ck["5 plans pass every test"] = len(feas) == 5
    ck["recommended plan passes all four tests"] = rec["ok"]
    ck["bridge adds up"] = abs(br["start"] + sum(s[1] for s in br["steps"]) + br["shift"] - br["end"]) < 1e-6 and abs(br["end"] - rec["e"]["Mar"]) < 1e-6
    ck["decision table EBITDA = CAM − 58 − growth money"] = all(abs(t15[m]["ebitda"] - (t15[m]["cam"] - FIXED - t15[m]["gm"])) < 1e-9 for m in MONTHS)
    ck["march break-even uplift below plan uplift"] = be_mult < 1.08 * 1.08
    out["checks"] = ck
    out.update(dict(A=[dict(id=a[0], text=a[1], basis=a[2]) for a in A], T2=t2, T3=t3, T4=t4, T5=t5, funnel=fun, web_orders=web_orders, cap=cap,
                    T11=t11, nothing=dict(e=nothing["e"], q1=nothing["q1"]), plans=[dict(label=label(p), levers=p["levers"], shift=p["shift"], gm=p["gm"], gm_tot=p["gm_tot"],
                    e=p["e"], q1=p["q1"], d=p["q1"] - nothing["q1"], rr=p["m"]["Mar"]["rr"], sold=p["m"]["Mar"]["sold"], demand=p["m"]["Mar"]["demand"], tests=p["tests"], ok=p["ok"]) for p in plans],
                    feasible=[label(p) for p in feas], T14=t14, T15=t15, rec=dict(label=label(rec), gm=rec["gm"], gm_tot=rec["gm_tot"], e=rec["e"], q1=rec["q1"], d=rec["q1"] - nothing["q1"],
                    rr={m: rec["m"][m]["rr"] for m in MONTHS}, sold={m: rec["m"][m]["sold"] for m in MONTHS}, demand={m: rec["m"][m]["demand"] for m in MONTHS},
                    grade_sold={m: rec["m"][m]["grade_sold"] for m in MONTHS}, fS=rec["m"]["Mar"]["fS"], demS=rec["m"]["Mar"]["demS"], web=rec["m"]["Mar"]["web"]),
                    bridge=br, chm=chm, sens=dict(be_mult=be_mult, be_orders=be_orders, be_gbat=be_gbat, be_fbat=be_fbat, rr_mult_6=rr_mult_6, rr_mult_55=rr_mult_55,
                    base_e=base_e), tornado=tor, scenarios=scenarios, april=april))
    return out, rec, nothing, base, plans

# ---------- tables for the research document ----------
def tables(o):
    L = []; add = L.append
    def tab(title, head, rows, src):
        add("## " + title); add(""); add("| " + " | ".join(head) + " |"); add("|" + "|".join(["---"] * len(head)) + "|")
        for r in rows: add("| " + " | ".join(str(x) for x in r) + " |")
        add(""); add("*Source: " + src + "*"); add("")
    tab("T1. Assumptions register", ["ID", "Assumption", "Basis"], [[a["id"], a["text"], a["basis"]] for a in o["A"]], "team assumptions, stated on the slide where each is used (C-R3)")
    t2 = o["T2"]
    tab("T2. Contribution per phone by grade, website rates (₹ per phone)", ["Line", "Superb", "Good", "Fair"],
        [["Average selling price"] + [rs(t2[g]["price"]) for g in GR], ["Price paid to the trader"] + [rs(-t2[g]["buy"]) for g in GR],
         ["Testing and repair"] + [rs(-t2[g]["lab"]) for g in GR], ["Packing, delivery, payment"] + [rs(-t2[g]["pack"]) for g in GR],
         ["Warranty: claim rate x ₹2,500"] + [rs(-t2[g]["warranty"]) for g in GR], ["Returns: return rate x ₹1,800"] + [rs(-t2[g]["returns"]) for g in GR],
         ["Contribution per phone"] + [rs(t2[g]["contrib"]) for g in GR], ["Contribution as a share of price"] + [pc(t2[g]["contrib"] / t2[g]["price"]) for g in GR]],
        "case Exhibit 2 (C-E2, C-E2N1 to C-E2N3); team model")
    tab("T3. Contribution per phone by return regime (₹)", ["Grade", "Stores (0.5x returns)", "Website, ads, MegaKart, referrals (1x)", "Creators (1.5x)"],
        [[GN[g]] + [rs(o["T3"][g][m]) for m in (0.5, 1.0, 1.5)] for g in GR], "case Exhibits 2 and 3 (C-E3N3, C-E3N4); before commission, fixed spend and coupons")
    t4 = o["T4"]
    tab("T4. Contribution after marketing by channel, a month today (₹ lakh unless stated)", ["Channel", "Orders", "Superb / Good / Fair", "Contribution of phones", "MegaKart commission", "Fixed spend", "Coupons", "After marketing", "Per order (₹)", "Dashboard cost per order (₹)", "True cost per order (₹)", "Return rate"],
        [[t4[k]["name"], n0(t4[k]["orders"]), "%d / %d / %d%%" % (t4[k]["S"] * 100, t4[k]["G"] * 100, t4[k]["F"] * 100), lk(t4[k]["contrib_before"]), lk(-t4[k]["comm"]), lk(-t4[k]["fixed"]),
          lk(-t4[k]["coupons"]), lk(t4[k]["cam"]), rs(t4[k]["cam_per"]), rs(t4[k]["dash"]), rs(t4[k]["true_cost"]), pc(t4[k]["ret_rate"], 2)] for k in CHK] +
        [["Total", n0(sum(t4[k]["orders"] for k in CHK)), "", lk(sum(t4[k]["contrib_before"] for k in CHK)), lk(-o["T5"]["comm_total"]), lk(-o["T5"]["fixed_ch"]), lk(-o["T5"]["coupons"]),
          lk(o["T5"]["cam"]), rs(o["T5"]["cam"] * 1e5 / 7200), "", "", pc(o["T5"]["rr"], 2)]],
        "case Exhibits 2 and 3; true cost per order = (fixed spend + commission + coupons) / orders; team model")
    t5 = o["T5"]
    tab("T5. Tikau's month today and the reconciliation with the last twelve months", ["Line", "Value"],
        [["Contribution after marketing, all channels", rl(t5["cam"])], ["Fixed costs", rl(-t5["fixed"])], ["Monthly EBITDA", rl(t5["ebitda"])],
         ["Monthly EBITDA x 12", rl(t5["ltm"])], ["Case: EBITDA, Nov 2025 to Oct 2026", rl(t5["ltm_case"])], ["Gross sales a month", rl(t5["rev_month"])],
         ["Gross sales x 12", "₹%.1f crore" % t5["rev_ltm_cr"]], ["Case: net revenue, last twelve months", "₹%.0f crore" % t5["rev_case"]],
         ["Phones sold a month", n0(t5["sold"])], ["Phones returned a month", n0(t5["rets"])], ["Return rate", pc(t5["rr"], 2)],
         ["Warranty claims a month", n0(t5["claims_n"])], ["Cost of claims", rl(t5["claims_cost"])], ["Cost of returns", rl(t5["ret_cost"])], ["Distrust costs a month (claims plus returns)", rl(t5["trust_tax"])]],
        "case page 3 (C-CO3, C-CO4), Exhibits 2 and 3; team model")
    tab("T6. Phones sold and contribution by grade, a month today", ["Grade", "Phones", "Share", "Contribution per phone", "Contribution, ₹ lakh"],
        [[GN[g], n0(t5["grade_sold"][g]), pc(t5["grade_sold"][g] / 7200), rs(o["T2"][g]["contrib"]), lk(t5["grade_contrib"][g])] for g in GR],
        "case Exhibits 2 and 3; contribution at website rates before channel effects")
    tab("T7. Website funnel, October 2026", ["Step", "People", "Conversion from the step before"], [[f["step"], n0(f["n"]), pc(f["conv"]) if i else ""] for i, f in enumerate(o["funnel"])] +
        [["Visit to order", "", pc(4200 / 960000, 2)], ["Store: picks up a phone to buys", "", pc(1 / 3)]], "case Exhibit 1D (C-E1D)")
    cp = o["cap"]
    tab("T8. The lab, Superb supply and the battery spot check", ["Measure", "Value"],
        [["Phones tested a month", n0(cp["tested"])], ["Fail the final check", pc(cp["fail"], 0)], ["Sellable phones a month", n0(cp["sellable"])], ["Phones sold a month", n0(cp["sold"])],
         ["Lab use", pc(cp["util"], 0)], ["Superb sold a month", n0(cp["superb"])], ["Superb available from traders", n0(cp["superb_cap"])], ["Superb headroom", n0(cp["superb_head"])],
         ["Good phones below their printed 80% (spot check)", "22 of 200, " + pc(cp["spot"], 0)], ["Good phones a month with an untrue battery line (A14)", n0(cp["bad_month"])],
         ["Repair time", "9 days"], ["Claims needing a second visit", pc(cp["second"], 0)]], "case Exhibit 4 (C-E4a to C-E4d); A14")
    tab("T9. Why visitors did not buy, and the option that answers each reason", ["Reason (Exhibit 1A)", "Share", "Answered by"],
        [[r[0], "%d%%" % r[1], REASON_FIX[i]] for i, r in enumerate(REASONS)], "case Exhibit 1A (C-E1A), Exhibit 6; team mapping")
    tab("T10. Segment scorecard (1 weak to 5 strong; team judgement on case data)", ["Segment"] + SEG_CRIT + ["Total"],
        [[s] + ["%d (%s)" % (v, SEG_BASIS[s][i]) for i, v in enumerate(SEG_SCORE[s])] + [str(sum(SEG_SCORE[s]))] for s in SEG_SCORE],
        "case Exhibit 1C (C-E1C), Exhibits 2, 4 and 6; team model T11 for contribution after the plan")
    t11 = o["T11"]
    tab("T11. Contribution per phone under each lever, website rates (₹)", ["Case"] + [GN[g] for g in GR], [[k] + [rs(v[g]) for g in GR] for k, v in t11.items()],
        "case Exhibits 2 and 6; per-phone costs and return cuts as printed")
    rows = []
    for p in o["plans"]:
        rows.append([p["label"], lk(p["gm_tot"]), lk(p["e"]["Jan"]), lk(p["e"]["Feb"]), lk(p["e"]["Mar"]), lk(p["q1"]), lk(p["d"], True), pc(p["rr"], 2),
                     "".join("P" if p["tests"][t] else "F" for t in ("t1", "t2", "t3", "t4")), "Passes" if p["ok"] else ""])
    tab("T12. Every plan the options allow: 28 lever sets x 3 shift choices (₹ lakh)", ["Plan", "Growth money", "Jan EBITDA", "Feb EBITDA", "Mar EBITDA", "Q1 EBITDA", "Q1 vs doing nothing", "Mar return rate", "Tests 1 to 4", "Verdict"], rows,
        "team model; test 4 needs B1, because a battery claim needs a reading taken in Tikau's own lab (C-E5a) and today's readings come from the trader's tool (C-E4c)")
    tab("T13. The five plans that pass all four board tests (₹ lakh)", ["Plan", "Growth money", "Mar EBITDA", "Q1 EBITDA", "Q1 vs doing nothing", "Mar return rate"],
        [[p["label"], lk(p["gm_tot"]), lk(p["e"]["Mar"]), lk(p["q1"]), lk(p["d"], True), pc(p["rr"], 2)] for p in sorted([p for p in o["plans"] if p["ok"]], key=lambda p: -p["q1"])], "team model")
    tab("T14. The plans each camp proposed, on the board's tests (₹ lakh)", ["Plan", "Levers", "Growth money", "Mar EBITDA", "Q1 vs doing nothing", "Mar return rate", "Tests failed"],
        [[t["name"], t["label"], lk(t["gm"]), lk(t["e"]["Mar"]), lk(t["d"], True), pc(t["rr"], 2), ", ".join(str(i + 1) for i, k in enumerate(("t1", "t2", "t3", "t4")) if not t["tests"][k]) or "none"] for t in o["T14"]],
        "team model; case page 3 (C-B4 to C-B6)")
    t15 = o["T15"]
    tab("T15. The decision table for our plan", ["Your plan", "January", "February", "March"],
        [["Options live"] + [t15[m]["options"] for m in MONTHS], ["Phones sold"] + [n0(t15[m]["sold"]) for m in MONTHS],
         ["Contribution after marketing (₹ lakh)"] + [lk(t15[m]["cam"]) for m in MONTHS], ["Growth money spent (₹ lakh)"] + [lk(t15[m]["gm"]) for m in MONTHS],
         ["EBITDA (₹ lakh)"] + [lk(t15[m]["ebitda"]) for m in MONTHS], ["Return rate"] + [pc(t15[m]["rr"], 1) for m in MONTHS]], "team model; format from case page 7 (C-D3)")
    b = o["bridge"]
    tab("T16. March EBITDA, doing nothing to our plan, one effect at a time (₹ lakh)", ["Step", "Change", "Running total"],
        [["March EBITDA if Tikau does nothing", "", lk(b["start"])]] + [[s[0], lk(s[1], True), lk(b["start"] + sum(x[1] for x in b["steps"][:i + 1]))] for i, s in enumerate(b["steps"])] +
        [["Third shift, ₹9 lakh of growth money", lk(b["shift"], True), lk(b["end"])], ["March EBITDA, our plan", "", lk(b["end"])]], "team model; steps applied in this order so that they add up exactly")
    s = o["sens"]
    tab("T17. Break-even points for March EBITDA under our plan", ["Input", "Plan value", "March EBITDA reaches zero at"],
        [["Order rise from B1 and B2 together", "16.6%", pc(s["be_mult"] - 1) + " (" + n0(s["be_orders"]) + " phones)"],
         ["Good phones needing a new battery", "40%", pc(s["be_gbat"], 0)], ["Fair phones needing a new battery", "70%", pc(s["be_fbat"], 0)],
         ["Return rate kept by B1 and B2 together (March return rate 6.0%)", "56% of today's rate", pc(s["rr_mult_6"], 0) + " of today's rate"]], "team model")
    tab("T18. Stress test: each Exhibit 6 effect at 75% and 125% (A16), March EBITDA (₹ lakh)", ["Input", "Bear", "Bull", "Swing"],
        [[t["name"], lk(t["bear"]), lk(t["bull"]), lk(t["swing"])] for t in o["tornado"]], "team model; plan value " + lk(s["base_e"]))
    sc = o["scenarios"]
    tab("T19. Three scenarios for our plan (₹ lakh)", ["Scenario", "Feb EBITDA", "Mar EBITDA", "Q1 vs doing nothing", "Mar return rate", "Phones in March", "All four tests"],
        [[k, lk(v["e"]["Feb"]), lk(v["e"]["Mar"]), lk(v["d"], True), pc(v["rr"], 2), n0(v["sold"]), "Pass" if v["ok"] else "Fail"] for k, v in sc.items()], "team model; A16")
    tab("T20. April: the options we did not choose, on top of our plan (₹ lakh a month)", ["Option", "Trade ins", "Phones sold", "Demand", "EBITDA before setup", "Change vs keeping the plan", "Return rate"],
        [[a["name"], n0(a["tin"]), n0(a["sold"]), n0(a["demand"]), lk(a["ebitda"]), lk(a["ebitda"] - o["april"][0]["ebitda"], True), pc(a["rr"], 2)] for a in o["april"]],
        "team model; A15; trade in setup of ₹35 lakh is paid once in its first month")
    tab("T21. Channels in March under our plan", ["Channel", "Phones", "After marketing, ₹ lakh", "Per order (₹)", "Today per order (₹)", "Return rate"],
        [[CHN[k], n0(v["q"]), lk(v["cam"]), rs(v["per"]), rs(o["T4"][k]["cam_per"]), pc(v["rr"], 2)] for k, v in o["chm"].items()], "team model")
    return "\n".join(L)

# ---------- values for the deck (every number on a slide comes from here) ----------
def values(o, rec, nothing, base):
    t2, t4, t5, b, s = o["T2"], o["T4"], o["T5"], o["bridge"], o["sens"]
    V = {}
    V["hash"] = o["meta"]["hash"]
    V["c_S"], V["c_G"], V["c_F"] = (rs(t2[g]["contrib"]) for g in GR)
    V["c_S_n"], V["c_G_n"], V["c_F_n"] = (round(t2[g]["contrib"]) for g in GR)
    V["cp_S"], V["cp_G"], V["cp_F"] = (rs(rec["m"]["Mar"]["web"][g]) for g in GR)
    V["cp_S_n"], V["cp_G_n"], V["cp_F_n"] = (round(rec["m"]["Mar"]["web"][g]) for g in GR)
    V["stack"] = {g: [t2[g]["buy"], t2[g]["lab"], t2[g]["pack"], round(t2[g]["warranty"]), round(t2[g]["returns"]), round(t2[g]["contrib"])] for g in GR}
    V["ch"] = [[t4[k]["name"], n0(t4[k]["orders"]), lk(t4[k]["cam"]), rs(t4[k]["cam_per"]), rs(t4[k]["dash"]), rs(t4[k]["true_cost"]), pc(t4[k]["ret_rate"], 1)] for k in CHK]
    V["ch_cam_n"] = [round(t4[k]["cam"], 2) for k in CHK]
    V["ch_per_n"] = [round(t4[k]["cam_per"]) for k in CHK]
    V["ch_dash_n"] = [t4[k]["dash"] for k in CHK]
    V["ch_true_n"] = [round(t4[k]["true_cost"]) for k in CHK]
    V["ch_names"] = [t4[k]["name"] for k in CHK]
    V["ch_rr_n"] = [round(t4[k]["ret_rate"] * 100, 1) for k in CHK]
    V["mk_comm_per"] = rs(t4["mk"]["comm"] * 1e5 / 2000)
    V["cam0"], V["e0"], V["e0_n"], V["fixed"] = lk(t5["cam"]), lk(t5["ebitda"]), round(t5["ebitda"], 2), lk(FIXED)
    V["ltm"], V["rr0"], V["rr0_n"] = lk(t5["ltm"]), pc(t5["rr"], 1), round(t5["rr"] * 100, 2)
    V["rets0"], V["claims0"] = n0(t5["rets"]), n0(t5["claims_n"])
    V["claims_cost"], V["ret_cost"], V["trust_tax"] = lk(t5["claims_cost"]), lk(t5["ret_cost"]), lk(t5["trust_tax"])
    V["rev_cr"] = "%.1f" % t5["rev_ltm_cr"]
    V["gs0"] = {g: n0(t5["grade_sold"][g]) for g in GR}
    V["gs0_n"] = {g: round(t5["grade_sold"][g]) for g in GR}
    V["gc0"] = {g: lk(t5["grade_contrib"][g]) for g in GR}
    V["gc0_n"] = {g: round(t5["grade_contrib"][g], 1) for g in GR}
    V["funnel"] = [[f["step"], n0(f["n"]), pc(f["conv"]) if i else ""] for i, f in enumerate(o["funnel"])]
    V["funnel_n"] = [f["n"] for f in o["funnel"]]
    V["v2o"] = pc(4200 / 960000, 2)
    V["pdp2cart"] = pc(26000 / 310000); V["cart2order"] = pc(4200 / 26000); V["pdp_leave"] = pc(1 - 26000 / 310000)
    cp = o["cap"]
    V["util0"] = pc(cp["util"], 0); V["superb0"] = n0(cp["superb"]); V["superb_head"] = n0(cp["superb_head"]); V["superb_used"] = pc(cp["superb"] / SUPERB_CAP, 0)
    V["spot_pct"] = pc(cp["spot"], 0); V["spot_month"] = n0(cp["bad_month"])
    V["reasons"] = [[r[0], r[1]] for r in REASONS]; V["offers"] = [[x[0], x[1]] for x in OFFERS]
    V["segs"] = [[x[0], x[1], x[2]] for x in SEGS]
    # plan
    V["gm_tot"] = lk(rec["gm_tot"]); V["gm_left"] = lk(BUDGET - rec["gm_tot"]); V["gm"] = {m: lk(rec["gm"][m]) for m in MONTHS}
    V["e"] = {m: lk(rec["e"][m]) for m in MONTHS}; V["e_n"] = {m: round(rec["e"][m], 2) for m in MONTHS}
    V["cam"] = {m: lk(rec["m"][m]["cam"]) for m in MONTHS}
    V["sold"] = {m: n0(rec["m"][m]["sold"]) for m in MONTHS}; V["sold_n"] = {m: round(rec["m"][m]["sold"]) for m in MONTHS}
    V["rr"] = {m: pc(rec["m"][m]["rr"], 1) for m in MONTHS}; V["rr_n"] = {m: round(rec["m"][m]["rr"] * 100, 2) for m in MONTHS}
    V["rr_mar2"] = pc(rec["m"]["Mar"]["rr"], 2)
    V["q1"] = lk(rec["q1"]); V["q1_0"] = lk(nothing["q1"]); V["dq1"] = lk(rec["q1"] - nothing["q1"], True)
    V["swing"] = lk(rec["e"]["Mar"] - nothing["e"]["Mar"], True)
    V["swing_yr"] = lk((rec["e"]["Mar"] - nothing["e"]["Mar"]) * 12)
    V["demand_mar"] = n0(rec["m"]["Mar"]["demand"]); V["lost_S"] = n0(rec["m"]["Mar"]["demand"] - rec["m"]["Mar"]["sold"])
    V["gsm"] = {g: n0(rec["m"]["Mar"]["grade_sold"][g]) for g in GR}
    V["util_mar"] = pc(rec["m"]["Mar"]["sold"] / 9000, 0)
    V["uplift"] = pc(1.08 * 1.08 - 1)
    BSHORT = ["More phones", "Prices up 4%", "New batteries", "Report ₹120", "Claim rates", "Fewer returns"]
    V["bridge"] = [["Do nothing", round(b["start"], 1)]] + [[BSHORT[i], round(x[1], 1)] for i, x in enumerate(b["steps"])] + [["Third shift", round(b["shift"], 1)], ["Our March", round(b["end"], 1)]]
    V["a_short"] = [[a[0], A_SHORT[a[0]]] for a in A]
    V["be_up"] = pc(s["be_mult"] - 1); V["be_orders"] = n0(s["be_orders"]); V["be_week"] = n0(s["be_orders"] / 4.33)
    V["plan_week"] = n0(rec["m"]["Mar"]["sold"] / 4.33); V["be_gbat"] = pc(s["be_gbat"], 0); V["be_fbat"] = pc(s["be_fbat"], 0)
    V["rr_mult_6"] = pc(s["rr_mult_6"], 0)
    V["tor"] = [[t["name"], round(t["bear"], 1), round(t["bull"], 1)] for t in o["tornado"]]
    V["scen"] = {k: dict(feb=lk(v["e"]["Feb"]), mar=lk(v["e"]["Mar"]), d=lk(v["d"], True), rr=pc(v["rr"], 1), ok=("Pass" if v["ok"] else "Fail")) for k, v in o["scenarios"].items()}
    V["t14"] = [[t["name"], t["label"], lk(t["gm"]), lk(t["e"]["Mar"]), lk(t["d"], True), pc(t["rr"], 1), [bool(t["tests"][k]) for k in ("t1", "t2", "t3", "t4")]] for t in o["T14"]]
    V["n_plans"] = str(len(o["plans"])); V["n_ok"] = str(len(o["feasible"]))
    V["feas"] = [[p["label"], lk(p["gm_tot"]), lk(p["e"]["Mar"]), lk(p["d"], True), pc(p["rr"], 1)] for p in sorted([p for p in o["plans"] if p["ok"]], key=lambda p: -p["q1"])]
    V["scatter"] = [[round(p["e"]["Mar"], 1), round(p["gm_tot"]), 1 if p["ok"] else 0] for p in o["plans"]]
    V["scatter_ours"] = [round(rec["e"]["Mar"], 1), round(rec["gm_tot"])]
    ap = o["april"]; V["apr"] = [[a["name"], n0(a["tin"]), lk(a["ebitda"]), lk(a["ebitda"] - ap[0]["ebitda"], True)] for a in ap]
    V["apr_n"] = [[a["name"], round(a["ebitda"], 1)] for a in ap]
    V["chm"] = [[CHN[k], n0(v["q"]), lk(v["cam"]), rs(v["per"]), pc(v["rr"], 1)] for k, v in o["chm"].items()]
    V["chm_cam_n"] = [round(v["cam"], 2) for v in o["chm"].values()]
    V["unit"] = {k: {g: rs(v[g]) for g in GR} for k, v in o["T11"].items()}
    V["unit_n"] = {k: {g: round(v[g]) for g in GR} for k, v in o["T11"].items()}
    V["fS"] = pc(1 - rec["m"]["Mar"]["fS"], 1)
    V["e_mar"] = V["e"]["Mar"]; V["rr_mar"] = V["rr"]["Mar"]; V["e0_mar"] = lk(nothing["e"]["Mar"])
    # the month today as a waterfall (₹ lakh): phones' contribution, then what the channels and the head office take
    gross = t5["gross_total"]
    V["wf_month"] = [["Phones", round(gross, 1)], ["MegaKart", round(-t5["comm_total"], 1)], ["Channels", round(-t5["fixed_ch"], 1)],
                     ["Coupons", round(-t5["coupons"], 1)], ["Fixed costs", round(-FIXED, 1)], ["EBITDA", round(t5["ebitda"], 1)]]
    V["gross0"] = lk(gross); V["comm0"] = lk(t5["comm_total"])
    V["retgrid"] = [[t4[k]["name"]] + ["%.1f" % (RET[g] * c[7] * 100) for g in GR] + ["%.1f" % (t4[k]["ret_rate"] * 100)] for k, c in zip(CHK, CH)]
    # one Good and one Fair phone, today to our plan (website rates)
    def pw(g):
        price_up = PRICE[g] * BASEP["pB2"] if g in ("S", "G") else 0.0
        bat = {"S": 0.0, "G": BASEP["gbat"] * BASEP["gbat_c"], "F": BASEP["fbat"] * BASEP["fbat_c"]}[g]
        cl = (CLAIM[g] - CLAIM_B2[g]) * CLAIM_COST; rt = RET[g] * (1 - (1 - BASEP["rrB1"]) * (1 - BASEP["rrB2"])) * RET_COST
        return [["Today", round(t2[g]["contrib"])], ["Price up 4%", round(price_up)], ["New battery", round(-bat)], ["Report", -BASEP["rep"]],
                ["Claims", round(cl)], ["Fewer returns", round(rt)], ["Our plan", round(rec["m"]["Mar"]["web"][g])]]
    V["pw_G"], V["pw_F"], V["pw_S"] = pw("G"), pw("F"), pw("S")
    V["seg_rows"] = [[s] + SEG_SCORE[s] + [sum(SEG_SCORE[s])] for s in SEG_SCORE]
    V["seg_basis"] = SEG_BASIS; V["seg_crit"] = SEG_CRIT
    V["reason_fix"] = REASON_FIX
    V["e_gbat50"] = lk(month_calc({"B1", "B2"}, True, 0, {"gbat": 0.5})["cam"] - FIXED - SHIFT_COST)
    V["rr_trig"] = "5.5%"; V["gbat_trig"] = "50%"
    V["good_up"] = n0(rec["m"]["Mar"]["grade_sold"]["G"] - t5["grade_sold"]["G"])
    V["mk_per_mar"] = rs(o["chm"]["mk"]["per"])
    V["pb_gap"] = pc(1.06 / 1.04 - 1)
    V["e0_rl"] = rl(t5["ebitda"]); V["e_mar_rl"] = rl(rec["e"]["Mar"], True); V["gm_rl"] = rl(rec["gm_tot"]); V["swing_rl"] = rl(rec["e"]["Mar"] - nothing["e"]["Mar"])
    V["dq1_rl"] = rl(rec["q1"] - nothing["q1"]); V["q1_rl"] = rl(rec["q1"]); V["q1_0_rl"] = rl(nothing["q1"]); V["ads_rl"] = rl(t4["ads"]["cam"])
    V["trust_rl"] = rl(t5["trust_tax"]); V["ltm_rl"] = rl(t5["ltm"])
    kab = next(t for t in o["T14"] if t["name"].startswith("Kabir")); roh = next(t for t in o["T14"] if t["name"] == "Rohan: price push")
    V["lost_noshift"] = n0(kab["demand"] - kab["sold"]); V["kab_mar"] = rl(kab["e"]["Mar"]); V["roh_mar"] = rl(roh["e"]["Mar"])
    V["roh_lost"] = pc(1 - roh["sold"] / roh["demand"], 0)
    tin = next(t for t in o["T14"] if t["name"].startswith("Store")); V["tin_mar"] = rl(tin["e"]["Mar"]); V["tin_rr"] = pc(tin["rr"], 1)
    allp = next(t for t in o["T14"] if t["name"].startswith("Everything")); V["all_gm"] = lk(allp["gm"]); V["all_mar"] = lk(allp["e"]["Mar"])
    b2o = next(t for t in o["T14"] if t["name"].startswith("Battery")); V["b2_rr"] = pc(b2o["rr"], 1); V["b2_d"] = lk(b2o["d"], True)
    fe = sorted([p for p in o["plans"] if p["ok"]], key=lambda p: -p["q1"]); V["gap2"] = lk(fe[0]["q1"] - fe[1]["q1"])
    V["b3_gain"] = lk(o["april"][1]["cam"] - o["april"][0]["cam"])
    V["tin_payback"] = "%.1f" % (35.0 / (o["april"][3]["ebitda"] - o["april"][0]["ebitda"]))
    V["claims_n0"] = n0(t5["claims_n"]); V["superb_dem"] = n0(rec["m"]["Mar"]["demS"])
    V["ch_rets"] = [[t4[k]["name"], n0(t4[k]["orders"]), "%.1f" % t4[k]["returns"], pc(t4[k]["ret_rate"], 2)] for k in CHK]
    V["t2rows"] = [["Average selling price"] + [rs(t2[g]["price"]) for g in GR], ["Price paid to the trader"] + [rs(-t2[g]["buy"]) for g in GR],
                   ["Testing and repair"] + [rs(-t2[g]["lab"]) for g in GR], ["Packing, delivery, payment"] + [rs(-t2[g]["pack"]) for g in GR],
                   ["Claims: rate x ₹2,500"] + [rs(-t2[g]["warranty"]) for g in GR], ["Returns: rate x ₹1,800"] + [rs(-t2[g]["returns"]) for g in GR],
                   ["Contribution per phone"] + [rs(t2[g]["contrib"]) for g in GR]]
    V["t4rows"] = [[t4[k]["name"], n0(t4[k]["orders"]), lk(t4[k]["contrib_before"]), lk(-t4[k]["comm"]), lk(-t4[k]["fixed"]), lk(-t4[k]["coupons"]), lk(t4[k]["cam"]), pc(t4[k]["ret_rate"], 1)] for k in CHK] + \
                  [["Total", n0(7200), lk(sum(t4[k]["contrib_before"] for k in CHK)), lk(-t5["comm_total"]), lk(-t5["fixed_ch"]), lk(-t5["coupons"]), lk(t5["cam"]), pc(t5["rr"], 1)]]
    V["n_checks"] = "%d of %d" % (sum(1 for v in o["checks"].values() if v), len(o["checks"]))
    return V

def main(argv):
    o, rec, nothing, base, plans = run()
    blob = json.dumps({k: v for k, v in o.items() if k != "meta"}, ensure_ascii=False, sort_keys=True, default=str)
    o["meta"]["hash"] = hashlib.sha1(blob.encode("utf-8")).hexdigest()[:10]
    o["meta"]["run_at"] = datetime.datetime.now().isoformat(timespec="seconds")
    md = "# Model tables\n\nModel " + o["meta"]["hash"] + ", run " + o["meta"]["run_at"] + ".\n\n" + tables(o)
    V = values(o, rec, nothing, base)
    for k, v in o["checks"].items(): print(("PASS " if v else "FAIL ") + k)
    n_ok = sum(1 for v in o["checks"].values() if v)
    print("CHECKS %d/%d HASH %s" % (n_ok, len(o["checks"]), o["meta"]["hash"]))
    print("FINDINGS", V["c_S"], V["c_G"], V["c_F"], V["e0"], V["rr0"], "|", rec["levers"], rec["shift"], "| GM", V["gm_tot"], "| E", V["e"]["Jan"], V["e"]["Feb"], V["e"]["Mar"],
          "| RR", V["rr"]["Mar"], "| dQ1", V["dq1"], "| plans", V["n_plans"], "ok", V["n_ok"])
    if "--dry" in argv: return o, md, V
    root = pathlib.Path(__file__).resolve().parent.parent
    io.open(root / "model" / "model_outputs.json", "w", encoding="utf-8").write(json.dumps(o, ensure_ascii=False, indent=1, default=str))
    io.open(root / "model" / "model_tables.md", "w", encoding="utf-8").write(md)
    (root / "deck").mkdir(exist_ok=True)
    io.open(root / "deck" / "values.json", "w", encoding="utf-8").write(json.dumps(V, ensure_ascii=False, indent=1))
    print("wrote model_outputs.json, model_tables.md, deck/values.json")
    if n_ok != len(o["checks"]): print("MODEL FAIL"); sys.exit(1)
    print("MODEL PASS")
    return o, md, V

if __name__ == "__main__": main(sys.argv[1:])
