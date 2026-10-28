# ===== SWIFTKART MODEL v1 =====
"""SwiftKart, Dream Forge 3.0 (IEEE DTU), Round 2: the Rs 1 crore crossroads.
Run from the repo root:
  PY dreamforge-case/model/swiftkart_model.py          run, check, write model_outputs.json and model_tables.md
  PY dreamforge-case/model/swiftkart_model.py --dry    run and print, write nothing
Deterministic. Case facts sit in F and are never edited. Team assumptions sit in AS with base, bear and bull values;
bear is the value least favourable to the recommended option. Every number on a slide or in the research document comes
from the outputs of this file. Contribution means revenue less rider pay, fuel or energy, lease, contract overhead and
reporting cost; the case gives no fixed overhead, so no EBITDA is claimed."""
import sys, json, math, hashlib, io, pathlib
DRY = "--dry" in sys.argv
try: HERE = pathlib.Path(__file__).resolve().parent
except NameError: HERE = pathlib.Path("dreamforge-case/model").resolve()
L, CR, H = 1e5, 1e7, 48

# ---------- case facts (brief IDs in case/01-case-brief.md) ----------
F = dict(fleet=100, rev_del=40, del_day=30, days=26, rider=14000, petrol_run=9000, ev_run=3000, util=0.85,
         capital=1e7, ev_price=120000, ev_life=48, ev_resale=25000, lease=3500, lease_life=36, petrol_resale=30000,
         charge_100=1e6, subsidy=10000, loan_rate=0.11, loan_term=36, c_veh=75, c_rev=2.8e7, fulfil=0.95, scale_m=12,
         ev_range_del=30)
FID = dict(fleet="D01", rev_del="D02", del_day="D03", days="D04", rider="D05", petrol_run="D06", ev_run="D07", util="D08",
           capital="D09", ev_price="D10", ev_life="D13", ev_resale="D14", lease="D12", lease_life="D13", petrol_resale="X05",
           charge_100="X01", subsidy="X06", loan_rate="X08", loan_term="X08", c_veh="O02", c_rev="O07", fulfil="O03",
           scale_m="O06", ev_range_del="X02")

# ---------- team assumptions: (id, key, base, bear, bull, unit, label, basis) ----------
AS = [
 ("A01","rec_days",57,60,30,"days","Contract receivable days","M1 update from lane R-C verified data: Delhivery 58 to 67 days (Screener and StockAnalysis, FY24 to FY25) and Blue Dart 48 to 56 days (StockAnalysis, FY24 to FY26), median of the eight verified points (48, 50.65, 53, 56.4, 58, 61, 64, 67) is 57.2 days, rounded to 57"),
 ("A02","dep_months",2,3,1,"months","Lease security deposit","EV fleet leases ask one to three months of rent as a refundable deposit (lane R-B)"),
 ("A03","onboard",5000,7000,4000,"Rs per rider","New rider onboarding","Recruitment, police verification, training, kit and first-month insurance (lane R-F)"),
 ("A04","train",1500,2500,1000,"Rs per rider","EV training for existing riders","Half-day course on EV handling, charging discipline and battery safety"),
 ("A05","build",1300000,1700000,1000000,"Rs","Reporting and dispatch platform build","Telematics integration, GHG Protocol method, emissions dashboard, external review, pooled dispatch (lanes R-D, R-F)"),
 ("A06","mrv_pm",150,250,100,"Rs per vehicle-month","Telematics and reporting running cost","Software and data per connected vehicle (lane R-F)"),
 ("A07","c_ovh",150000,200000,120000,"Rs per month","Contract operations overhead","Two hub supervisors, one fleet and energy manager, one reporting analyst"),
 ("A08","award",3,5,2,"month","Contract award month","Negotiation, audit and onboarding take two to four months"),
 ("A09","c_start",0.70,0.60,0.80,"share","Contract volume in the first month of supply","The case says investment comes before full utilisation (O08)"),
 ("A10","c_ramp",6,9,4,"months","Months from first supply to plateau volume","Inside the 12-month scaling window (O06)"),
 ("A11","c_plateau",1.00,0.85,1.00,"share","Plateau volume as a share of the Rs 2.8 crore capacity","The case revenue implies 100% utilisation; bear holds the 85% SwiftKart achieves today"),
 ("A12","lease_rs",3500,5000,3500,"Rs per month","All-in EV lease rate","The case gives Rs 3,500 (D12); bear is a market rate if the case rate cannot be secured (lane R-B)"),
 ("A13","util",0.85,0.80,0.90,"share","Existing-fleet utilisation","Case 85% (D08)"),
 ("A14","disc",0.11,0.15,0.11,"per year","Discount rate","Bank rate of 11% (X08) as the cost of capital; bear adds an equity premium"),
 ("A15","avail",0.95,0.90,0.98,"share","EV availability after charging downtime","The case flags charging downtime (X03); spares absorb it"),
 ("A16","rider_esc",0.00,0.10,0.00,"share","Rider pay rise from month 13","Minimum wage revisions and the labour codes (lane R-E)"),
 ("A17","petrol_res48",12000,8000,15000,"Rs","Value of a petrol bike still held in month 48","Delhi makes new two-wheeler registrations electric-only from 1 April 2028 (lane R-E), so used petrol values fall"),
 ("A18","late_resale",27000,24000,30000,"Rs","Resale of petrol bikes sold in month 12","Case Rs 30,000 today (X05), about 10% lower a year on"),
 ("A19","fuel_share",0.78,0.78,0.78,"share","Fuel share of petrol running cost","The rest is servicing, oil and tyres (lane R-D)"),
 ("A20","petrol_price",102.0,102.0,102.0,"Rs per litre","Delhi petrol price","M1 update from lane R-D verified data: 102.12 a litre, confirmed as the live rate as of 15 Oct 2026 by two independent sources (Upstox RD11, Business Today RD12), rounded to 102.0"),
 ("A21","ef_petrol",2.31,2.31,2.31,"kg CO2 per litre","Petrol emission factor","IPCC 2006 default for motor gasoline (lane R-G)"),
 ("A22","kmpl",42.0,42.0,42.0,"km per litre","Delivery-bike fuel economy","110 to 125 cc bike in stop-start city delivery (lane R-D)"),
 ("A23","kwh_km",0.036,0.036,0.036,"kWh per km","EV energy use including charging losses","Cargo e-scooter energy use (lane R-D)"),
 ("A24","ef_grid",0.727,0.727,0.727,"kg CO2 per kWh","Grid emission factor","CEA CO2 Baseline Database, latest version (lane R-G)"),
 ("A25","floor",1000000,1000000,1000000,"Rs","Minimum cash balance","About one month of rider pay for the contract fleet"),
 ("A26","ev_res_mult",1.00,0.85,1.00,"multiplier","Resale multiplier on owned EVs","Falling new-EV prices pull used values down (case U02)"),
]
A = {a[0]: dict(key=a[1], base=a[2], bear=a[3], bull=a[4], unit=a[5], label=a[6], basis=a[7]) for a in AS}
def params(s="base", **over):
    P = {a["key"]: a[s] for a in A.values()}
    P.update(dict(petrol_shock=0.0, elec_up=0.0, util_shift=0.0, c_vol=1.0, subsidy=F["subsidy"], rev_del=F["rev_del"]))
    P.update(over); return P

# ---------- decisions (fixed by the plan, not assumptions) ----------
SPARE_C, SPARE_E = 6, 4                 # two spares per contract tranche; four spares for the converted fleet
WAVES = {2: 50, 4: 40, 12: 10}          # electrify first; the last ten petrol bikes run to month 12 as a fallback
OPT = {
 "O0": dict(name="Stay petrol, no contract", short="Stay petrol", contract=False, ex=None, own_e=False, own_c=False),
 "O1": dict(name="Buy 100 EVs, no contract", short="Electrify, buy", contract=False, ex={2: 100}, own_e=True, own_c=False),
 "O2": dict(name="Buy EVs for the contract, keep petrol", short="Grow, buy", contract=True, ex=None, own_e=False, own_c=True),
 "O3": dict(name="Buy EVs for both", short="Both, buy", contract=True, ex=WAVES, own_e=True, own_c=True),
 "O4": dict(name="Lease EVs for the contract, keep petrol", short="Grow, lease", contract=True, ex=None, own_e=False, own_c=False),
 "O5": dict(name="Lease EVs for both, electrify first", short="Both, lease", contract=True, ex=WAVES, own_e=False, own_c=False),
 "O6": dict(name="Lease EVs for the existing fleet, contract not won", short="No award", contract=False, ex=WAVES, own_e=False, own_c=False),
}
HK = ["O0", "O1", "O2", "O3", "O4", "O5"]
DM = F["del_day"] * F["days"]

def sim(k, P, loan=0.0):
    o = OPT[k]; ex = o["ex"] or {}; aw = int(P["award"])
    tr = {aw + 1: 25, aw + 3: 25, aw + 5: 25} if o["contract"] else {}
    first = min(tr) if tr else None; fe = min(ex) if ex else None
    rm = (1 + P["disc"]) ** (1 / 12) - 1; li = F["loan_rate"] / 12
    emi = loan * li / (1 - (1 + li) ** -F["loan_term"]) if loan > 0 else 0.0
    petrol, ev_e, sp_e, ca, sp_c, owned, rec0, cash, rows = 100, 0, 0, 0, 0, [], 0.0, F["capital"], []
    lit = F["petrol_run"] * P["fuel_share"] / P["petrol_price"]; km = lit * P["kmpl"]
    for t in range(1, H + 1):
        capex = charge = dep = onb = build = sale = 0.0
        if t in ex:
            n = ex[t]; petrol -= n; ev_e += n; sale += n * (P["late_resale"] if t >= 12 else F["petrol_resale"]); onb += n * P["train"]
            s = SPARE_E if (t == fe and k != "O1") else 0; sp_e += s; nn = n + s; charge += nn * F["charge_100"] / 100
            if o["own_e"]: capex += nn * (F["ev_price"] - P["subsidy"]); owned.append((t, nn))
            else: dep += nn * P["dep_months"] * P["lease_rs"]
        if t in tr:
            n = tr[t]; s = SPARE_C // 3; ca += n; sp_c += s; onb += n * P["onboard"]; charge += (n + s) * F["charge_100"] / 100
            if o["own_c"]: capex += (n + s) * (F["ev_price"] - P["subsidy"]); owned.append((t, n + s))
            else: dep += (n + s) * P["dep_months"] * P["lease_rs"]
        if (o["contract"] or k == "O6") and t == 2: build += P["build"] if o["contract"] else P["build"] * 8 / 13
        ev_ok = (ev_e > 0) or (ca > 0)
        shift = (P["util_shift"] * (1 if (ev_ok and petrol == 0) else -1)) if t >= 13 else 0.0
        u_ex = P["util"] + shift
        if ca > 0:
            j = t - first; up = P["c_plateau"]
            uc = (P["c_start"] + (up - P["c_start"]) * j / P["c_ramp"]) if j < P["c_ramp"] else up
            uc = min(uc, up) * P["c_vol"]; avf = min(1.0, P["avail"] * (ca + sp_c) / ca)
        else: uc, avf = 0.0, 1.0
        rev_ex = F["fleet"] * DM * u_ex * P["rev_del"]; rev_c = ca * DM * uc * avf * P["rev_del"]
        rider = (F["fleet"] + ca) * F["rider"] * (1 + (P["rider_esc"] if t >= 13 else 0))
        n_own = (ev_e if o["own_e"] else 0) + (ca if o["own_c"] else 0)
        n_lease = (0 if o["own_e"] else ev_e + sp_e) + (0 if o["own_c"] else ca + sp_c)
        energy = petrol * F["petrol_run"] * (1 + (P["petrol_shock"] if t >= 7 else 0)) + n_own * F["ev_run"] * (1 + 0.3 * P["elec_up"])
        lease = n_lease * P["lease_rs"]; ovh = P["c_ovh"] if (o["contract"] and t > aw) else 0.0
        nev = ev_e + sp_e + ca + sp_c; mrv = P["mrv_pm"] * nev if (o["contract"] or k == "O6") else 0.0
        contrib = rev_ex + rev_c - rider - energy - lease - ovh - mrv
        rec = rev_c * P["rec_days"] / 30; drec = rec - rec0; rec0 = rec
        ld = loan if t == 1 else 0.0; e = emi if (loan > 0 and t <= F["loan_term"]) else 0.0
        cf = contrib - capex - charge - dep - onb - build - drec + sale + ld - e; cash += cf
        co2 = petrol * lit * P["ef_petrol"] + (ev_e + ca) * km * P["kwh_km"] * P["ef_grid"]
        dels = F["fleet"] * DM * u_ex + ca * DM * uc * avf
        rows.append(dict(t=t, petrol=petrol, ev=ev_e + ca, ev_e=ev_e, ev_c=ca, spares=sp_e + sp_c, uc=uc, rev=rev_ex + rev_c, rev_c=rev_c,
                         rider=rider, energy=energy, lease=lease, ovh=ovh, mrv=mrv, contrib=contrib, capex=capex, charge=charge,
                         dep=dep, onb=onb, build=build, drec=drec, sale=sale, loan=ld, emi=e, cf=cf, cash=cash, co2=co2, dels=dels))
    term = 0.0
    for (m, n) in owned:
        res = F["ev_resale"] * P["ev_res_mult"]; age = H - m + 1
        term += n * max(res, F["ev_price"] - (F["ev_price"] - res) * age / F["ev_life"])
    term += petrol * P["petrol_res48"] + rec0 + sum(r["dep"] for r in rows)
    npv = sum(r["cf"] / (1 + rm) ** r["t"] for r in rows) + term / (1 + rm) ** H
    return dict(rows=rows, npv=npv, term=term, loan=loan, mincash=min(r["cash"] for r in rows))

def run(k, P):
    loan = 0.0
    for _ in range(40):
        r = sim(k, P, loan)
        if r["mincash"] >= P["floor"] - 1: return r
        loan = math.ceil((loan + (P["floor"] - r["mincash"]) * 1.02) / 5e5) * 5e5
    raise RuntimeError("debt sizing did not converge for " + k)

def summ(r):
    R = r["rows"]; m = R[23]
    uses = {x: sum(q[x] for q in R[:24]) for x in ("capex", "charge", "dep", "onb", "build", "drec", "sale", "emi", "loan")}
    cost = m["rider"] + m["energy"] + m["lease"] + m["ovh"] + m["mrv"]
    return dict(npv=r["npv"], c24=sum(q["contrib"] for q in R[:24]), rr24=m["contrib"] * 12, rev24=m["rev"] * 12,
                cash24=m["cash"], mincash=r["mincash"], minmonth=min(R, key=lambda q: q["cash"])["t"], loan=r["loan"], uses=uses,
                co2_24=m["co2"] * 12 / 1000, g_del24=m["co2"] / m["dels"] * 1000, dels24=m["dels"], ev24=m["ev"],
                petrol24=m["petrol"], fuel_share24=m["energy"] / cost, capex24=uses["capex"])

PB = params("base"); BASE = {k: run(k, PB) for k in OPT}; S = {k: summ(v) for k, v in BASE.items()}
for k in OPT: S[k]["dnpv"] = S[k]["npv"] - S["O0"]["npv"]
SCN = ("bear", "base", "bull")
SC = {s: {k: summ(run(k, params(s))) for k in ("O0", "O3", "O5", "O6")} for s in SCN}

# ---------- unit economics per bike-month ----------
li = F["loan_rate"] / 12
def ann(n, r=li): return r / (1 - (1 + r) ** -n)
emi_ev = (F["ev_price"] - F["subsidy"]) * ann(F["loan_term"])
def own_parts(sub):
    cap = (F["ev_price"] - sub) * ann(48); res = F["ev_resale"] * (1 + li) ** -48 * ann(48); chg = F["charge_100"] / 100 * ann(48)
    return dict(capital=cap, resale=-res, charging=chg, running=F["ev_run"], total=cap - res + chg + F["ev_run"])
OWN = own_parts(F["subsidy"])
UE = []
for lab, u, veh in [("Petrol bike", 0.85, F["petrol_run"]), ("EV bought, running cost only", 0.85, F["ev_run"]),
                    ("EV bought, all-in", 0.85, OWN["total"]), ("EV leased", 0.85, F["lease"]), ("EV leased, contract at full volume", 1.0, F["lease"])]:
    rv = DM * u * F["rev_del"]; c = rv - F["rider"] - veh
    UE.append(dict(label=lab, util=u, dels=DM * u, rev=rv, rider=F["rider"], vehicle=veh, contrib=c, margin=c / rv))

# ---------- switch points ----------
def bisect(fn, lo, hi, it=50):
    flo = fn(lo)
    for _ in range(it):
        mid = (lo + hi) / 2; fm = fn(mid)
        if (fm > 0) == (flo > 0): lo, flo = mid, fm
        else: hi = mid
    return (lo + hi) / 2
SW = dict(lease_bike=OWN["total"],
          lease_fleet=bisect(lambda x: run("O5", params("base", lease_rs=x))["npv"] - run("O3", params("base", lease_rs=x))["npv"], 3000, 9000),
          subsidy=bisect(lambda s: own_parts(s)["total"] - F["lease"], 0, 119000),
          c_util_bike=(F["rider"] + F["lease"]) / (DM * F["rev_del"]),
          c_vol=bisect(lambda v: sim("O4", params("base", c_vol=v))["npv"] - sim("O0", PB)["npv"], 0.30, 1.0),
          rev_del=bisect(lambda x: sim("O5", params("base", rev_del=x))["npv"], 15, 40),
          emi=emi_ev)

# ---------- tornado: recommended NPV over 48 months, one input at a time ----------
TOR_IN = [("All-in lease rate", "lease_rs", 5000, 3000, "Rs 5,000", "Rs 3,000"),
          ("Contract volume", "c_vol", 0.80, 1.00, "80%", "100%"),
          ("Utilisation now", "util", 0.80, 0.90, "80%", "90%"),
          ("Price per delivery", "rev_del", 36, 44, "Rs 36", "Rs 44"),
          ("Rider pay rise", "rider_esc", 0.15, 0.0, "+15% from month 13", "flat"),
          ("Award month", "award", 6, 2, "month 6", "month 2"),
          ("EV availability", "avail", 0.88, 0.98, "88%", "98%"),
          ("Discount rate", "disc", 0.15, 0.09, "15%", "9%"),
          ("Receivable days", "rec_days", 75, 30, "75 days", "30 days")]
TOR = []
for lab, key, lo, hi, lt, ht in TOR_IN:
    a = run("O5", params("base", **{key: lo}))["npv"]; b = run("O5", params("base", **{key: hi}))["npv"]
    TOR.append(dict(label=lab, lo=min(a, b), hi=max(a, b), lo_text=lt, hi_text=ht, swing=abs(b - a)))
TOR.sort(key=lambda d: -d["swing"])

# ---------- the seven uncertainties the case lists, against each option: change in NPV, Rs lakh ----------
UNC = [("U01", "Petrol up 20% from month 7", dict(petrol_shock=0.20)),
       ("U02", "EV prices fall 15%", dict(ev_res_mult=0.85)),
       ("U03", "Delivery demand down 10%", dict(util=0.765, c_vol=0.90)),
       ("U04", "Electricity up 25%", dict(elec_up=0.25)),
       ("U05", "Charging downtime doubles", dict(avail=0.90)),
       ("U06", "EV subsidy withdrawn", dict(subsidy=0)),
       ("U07", "Clients shift volume by emissions", dict(util_shift=0.03))]
HEAT = [[round((run(k, params("base", **ov))["npv"] - S[k]["npv"]) / L, 1) for k in HK] for _, _, ov in UNC]

# ---------- scorecard: rules, not judgement ----------
best = max(S[k]["dnpv"] for k in HK)
def band(x, cuts): return 1 + sum(x >= c for c in cuts)
EXPO = {k: -sum(min(0, HEAT[i][j]) for i in range(len(UNC))) for j, k in enumerate(HK)}
W = dict(value=0.35, liquidity=0.20, resilience=0.20, emissions=0.15, growth=0.10)
CARD = {}
for k in HK:
    s = S[k]; npv_l = s["npv"] / L
    v = band(s["dnpv"] / best, [0.2, 0.4, 0.6, 0.8])
    lq = 5 if (s["loan"] == 0 and s["mincash"] >= 50 * L) else (4 if s["loan"] == 0 else (3 if s["loan"] <= 50 * L else (2 if s["loan"] <= 100 * L else 1)))
    at_risk = EXPO[k] / npv_l
    rs = 5 if at_risk <= 0.40 else (4 if at_risk <= 0.60 else (3 if at_risk <= 0.80 else (2 if at_risk <= 1.00 else 1)))
    em = band(-s["g_del24"], [-240, -200, -160, -120]); gr = 5 if OPT[k]["contract"] else 1
    d = dict(value=v, liquidity=lq, resilience=rs, emissions=em, growth=gr)
    CARD[k] = dict(d, score=round(sum(W[x] * d[x] for x in W), 2), at_risk=at_risk)

# ---------- uses of the Rs 1 crore and the contribution bridge (recommended) ----------
u5 = S["O5"]["uses"]
USES = [("Contract working capital", u5["drec"], "months 4 to 10"), ("Charging hub", u5["charge"], "months 2 to 8"),
        ("Lease deposits", u5["dep"], "months 2 to 8"), ("Reporting and dispatch", u5["build"], "month 2"),
        ("Riders: hiring and EV training", u5["onb"], "months 2 to 12")]
USES.append(("Reserve", F["capital"] - sum(v for _, v, _ in USES), "held"))
P = PB
BR = [("Today, petrol", S["O0"]["rr24"]),
      ("Fuel to lease, 100 bikes", F["fleet"] * (F["petrol_run"] - P["lease_rs"]) * 12),
      ("Spares, existing fleet", -SPARE_E * P["lease_rs"] * 12),
      ("Contract margin, 75 bikes", F["c_veh"] * (DM * P["c_plateau"] * P["rev_del"] - F["rider"] - P["lease_rs"]) * 12),
      ("Spares, contract", -SPARE_C * P["lease_rs"] * 12),
      ("Contract overhead", -P["c_ovh"] * 12),
      ("Reporting running cost", -P["mrv_pm"] * (F["fleet"] + SPARE_E + F["c_veh"] + SPARE_C) * 12)]
BR.append(("Month 24, run-rate", sum(v for _, v in BR)))
R5, R3, R0 = BASE["O5"]["rows"], BASE["O3"]["rows"], BASE["O0"]["rows"]
QTR = []
for q in range(8):
    seg = R5[q * 3:(q + 1) * 3]
    QTR.append(dict(q="Q%d" % (q + 1), rev=sum(x["rev"] for x in seg), contrib=sum(x["contrib"] for x in seg), cash=seg[-1]["cash"],
                    petrol=seg[-1]["petrol"], ev_e=seg[-1]["ev_e"], ev_c=seg[-1]["ev_c"], spares=seg[-1]["spares"]))
EM = dict(today_t=R0[0]["co2"] * 12 / 1000, today_g=R0[0]["co2"] / R0[0]["dels"] * 1000,
          m12_t=R5[11]["co2"] * 12 / 1000, m12_g=R5[11]["co2"] / R5[11]["dels"] * 1000,
          m24_t=R5[23]["co2"] * 12 / 1000, m24_g=R5[23]["co2"] / R5[23]["dels"] * 1000,
          dels_today=R0[0]["dels"], dels_24=R5[23]["dels"],
          petrol_kg=F["petrol_run"] * P["fuel_share"] / P["petrol_price"] * P["ef_petrol"],
          ev_kg=F["petrol_run"] * P["fuel_share"] / P["petrol_price"] * P["kmpl"] * P["kwh_km"] * P["ef_grid"],
          km_month=F["petrol_run"] * P["fuel_share"] / P["petrol_price"] * P["kmpl"])

# ---------- checks ----------
CHK = {
 "contract revenue ties to 75 x 30 x 26 x Rs 40 x 12": abs(F["c_veh"] * DM * F["rev_del"] * 12 - F["c_rev"]) / F["c_rev"] < 0.01,
 "current contribution is Rs 3,520 a bike-month": abs(UE[0]["contrib"] - 3520) < 0.5,
 "lease beats bought all-in at case values": F["lease"] < OWN["total"],
 "financed EMI alone exceeds the lease": emi_ev > F["lease"],
 "recommended has the highest NPV of the six": max(HK, key=lambda k: S[k]["npv"]) == "O5",
 "recommended needs no debt": S["O5"]["loan"] == 0,
 "buying both needs debt": S["O3"]["loan"] > 0,
 "uses of the Rs 1 crore sum to Rs 1 crore": abs(sum(v for _, v, _ in USES) - F["capital"]) < 1,
 "reserve is positive": USES[-1][1] > 0,
 "bridge sums to the month 24 run-rate": abs(BR[-1][1] - S["O5"]["rr24"]) < 1,
 "recommended stays above the cash floor in bear without debt": SC["bear"]["O5"]["mincash"] >= PB["floor"] - 1 and SC["bear"]["O5"]["loan"] == 0,
 "recommended beats buying both in bear and in bull": all(SC[s]["O5"]["npv"] > SC[s]["O3"]["npv"] for s in ("bear", "bull")),
 "no petrol bikes at month 24": S["O5"]["petrol24"] == 0,
 "contract fleet complete within 12 months": PB["award"] + 5 <= F["scale_m"],
 "emissions per delivery fall": EM["m24_g"] < EM["today_g"],
 "scorecard ranks the recommendation first": max(HK, key=lambda k: CARD[k]["score"]) == "O5",
 "no-award branch still beats staying petrol": S["O6"]["npv"] > S["O0"]["npv"],
 "lease switch point above the case lease": SW["lease_fleet"] > F["lease"],
}
OK = all(CHK.values())

# ---------- formatting (Indian grouping, no dashes) ----------
def inr(x):
    n = abs(round(x)); s = str(n)
    if len(s) > 3:
        head, tail = s[:-3], s[-3:]; parts = []
        while len(head) > 2: parts.append(head[-2:]); head = head[:-2]
        if head: parts.append(head)
        s = ",".join(reversed(parts)) + "," + tail
    return ("−" if round(x) < 0 else "") + s
def lk(x, d=1): return ("−" if x < 0 else "") + ("%." + str(d) + "f") % abs(x / L)
def crs(x, d=2): return ("−" if x < 0 else "") + ("%." + str(d) + "f") % abs(x / CR)
def pc(x, d=0): return ("%." + str(d) + "f%%") % (x * 100)

# ---------- deck values: every slide number comes from here ----------
s5, s3, s0, s6 = S["O5"], S["O3"], S["O0"], S["O6"]
DECK = dict(
 rr0=lk(s0["rr24"]), rr5=crs(s5["rr24"]), mult="%.1fx" % (s5["rr24"] / s0["rr24"]), npv5=crs(s5["npv"]), npv3=crs(s3["npv"]),
 gap53=crs(s5["npv"] - s3["npv"]), dnpv5=crs(s5["dnpv"]), loan3=lk(s3["loan"], 0), emi=inr(emi_ev), own_all=inr(OWN["total"]),
 lease=inr(F["lease"]), sw_lease=inr(SW["lease_fleet"]), sw_lease_pct=pc(SW["lease_fleet"] / F["lease"] - 1), sw_sub=inr(SW["subsidy"]),
 sw_cvol=pc(SW["c_vol"]), sw_cutil=pc(SW["c_util_bike"]), sw_rev="%.1f" % SW["rev_del"],
 contrib0=inr(UE[0]["contrib"]), margin0=pc(UE[0]["margin"], 1), fuel_share0=pc(F["petrol_run"] / UE[0]["rev"]),
 rider_share0=pc(F["rider"] / UE[0]["rev"]), rev0=crs(s0["rev24"]), c_rev85=crs(F["c_veh"] * DM * 0.85 * F["rev_del"] * 12),
 cash5_24=crs(s5["cash24"]), min5=crs(s5["mincash"]), min5_month=s5["minmonth"], cash3_24=crs(s3["cash24"]),
 g0=str(round(EM["today_g"])), g24=str(round(EM["m24_g"])), gcut=pc(1 - EM["m24_g"] / EM["today_g"]),
 t0=str(round(EM["today_t"])), t24=str(round(EM["m24_t"])), dels_up=pc(EM["dels_24"] / EM["dels_today"] - 1),
 npv6=crs(s6["npv"]), dnpv6=crs(s6["dnpv"]), npv0=crs(s0["npv"]),
 bear5=crs(SC["bear"]["O5"]["npv"]), bear3=crs(SC["bear"]["O3"]["npv"]), bull5=crs(SC["bull"]["O5"]["npv"]), bull3=crs(SC["bull"]["O3"]["npv"]),
 bear3_loan=lk(SC["bear"]["O3"]["loan"], 0), bear5_min=lk(SC["bear"]["O5"]["mincash"], 0),
 ue=[[u["label"], inr(u["rev"]), inr(u["vehicle"]), inr(u["contrib"]), pc(u["margin"], 1)] for u in UE],
 wf=[["Revenue", UE[0]["rev"]], ["Rider pay", -F["rider"]], ["Petrol", -F["petrol_run"]], ["Left over", UE[0]["contrib"]]],
 opts=[[OPT[k]["short"], ("Yes" if OPT[k]["contract"] else "No"), lk(S[k]["capex24"], 0), lk(S[k]["loan"], 0), crs(S[k]["npv"]),
        lk(S[k]["rr24"], 0), str(round(S[k]["g_del24"])), "%.2f" % CARD[k]["score"]] for k in HK],
 scores=[CARD[k]["score"] for k in HK], cards=[[CARD[k][x] for x in ("value", "liquidity", "resilience", "emissions", "growth")] for k in HK],
 heat=HEAT, heat_rows=[u[1] for u in UNC], heat_cols=[OPT[k]["short"] for k in HK],
 own_cap=OWN["capital"] + OWN["resale"], own_chg=OWN["charging"], own_run=OWN["running"],
 uses=[[n, v / L, w] for n, v, w in USES], uses_txt=[[n, lk(v), pc(v / F["capital"]), w] for n, v, w in USES],
 bridge=[[n, v / L] for n, v in BR], cash5=[R5[t]["cash"] / L for t in range(24)], cash3=[R3[t]["cash"] / L for t in range(24)],
 cash0=[R0[t]["cash"] / L for t in range(24)],
 qtr=[[q["q"], lk(q["rev"]), lk(q["contrib"]), lk(q["cash"])] for q in QTR],
 fleet=[[q["q"], q["petrol"], q["ev_e"], q["ev_c"]] for q in QTR],
 scen=[["NPV, ₹ Cr"] + [crs(SC[s]["O5"]["npv"]) for s in SCN],
       ["Run-rate, ₹ L"] + [lk(SC[s]["O5"]["rr24"], 0) for s in SCN],
       ["Low cash, ₹ L"] + [lk(SC[s]["O5"]["mincash"], 0) for s in SCN],
       ["Buy both NPV"] + [crs(SC[s]["O3"]["npv"]) for s in SCN],
       ["Buy both debt"] + [lk(SC[s]["O3"]["loan"], 0) for s in SCN]],
 rr0r=str(round(s0["rr24"] / L)), rr12=lk(R5[11]["contrib"] * 12), ev8=str(R5[7]["ev"]), ev12=str(R5[11]["ev"]),
 capex3=lk(s3["capex24"]), used=lk(F["capital"] - USES[-1][1]), reserve=lk(USES[-1][1]), sale5=lk(S["O5"]["uses"]["sale"]),
 c24_5=lk(s5["c24"]), c24_0=lk(s0["c24"]), cash0_24=crs(s0["cash24"]),
 own_c=inr(OWN["capital"]), own_h=inr(OWN["charging"]), own_r=inr(-OWN["resale"]), dels0=inr(EM["dels_today"]), dels24=inr(EM["dels_24"]),
 sw_sub_n=SW["subsidy"], km=inr(EM["km_month"]),
 kpi=[["Contribution a year", lk(s0["rr24"]) + " L", crs(R5[11]["contrib"] * 12) + " Cr", crs(s5["rr24"]) + " Cr"],
      ["g CO2 per delivery", str(round(EM["today_g"])), str(round(EM["m12_g"])), str(round(EM["m24_g"]))],
      ["Petrol bikes", "100", str(R5[11]["petrol"]), str(R5[23]["petrol"])],
      ["Cash, ₹ Cr", crs(F["capital"]), crs(R5[11]["cash"]), crs(s5["cash24"])]],
 tor=[[t["label"], t["lo"] / CR, t["hi"] / CR, t["lo_text"], t["hi_text"]] for t in TOR[:7]], tor_base=s5["npv"] / CR,
 em=dict(today_t=round(EM["today_t"]), m24_t=round(EM["m24_t"]), today_g=round(EM["today_g"]), m24_g=round(EM["m24_g"]),
         petrol_kg=round(EM["petrol_kg"]), ev_kg=round(EM["ev_kg"]), km=round(EM["km_month"])),
)
OUT = dict(meta=dict(model="SWIFTKART MODEL v1", horizon_months=H), checks=CHK, F=F, A=A, options={k: OPT[k]["name"] for k in OPT},
           summary=S, scenarios=SC, unit=UE, own=OWN, switch=SW, tornado=TOR,
           heat=dict(rows=[u[1] for u in UNC], cols=HK, values=HEAT, exposure=EXPO), scorecard=dict(weights=W, cards=CARD),
           uses=[dict(line=n, rs=v, when=w) for n, v, w in USES], bridge=[dict(step=n, rs=v) for n, v in BR], quarters=QTR,
           emissions=EM, monthly_o5=R5[:24], deck=DECK)
OUT["meta"]["hash"] = hashlib.sha1(json.dumps(OUT, sort_keys=True, default=float).encode()).hexdigest()[:10]
DECK["hash"] = OUT["meta"]["hash"]

# ---------- model tables (reproduced as Appendix B of the research document) ----------
def tbl(head, rows): return "| " + " | ".join(head) + " |\n|" + "---|" * len(head) + "\n" + "\n".join("| " + " | ".join(str(c) for c in r) + " |" for r in rows) + "\n"
T = []
T.append("## T1. Case facts used by the model\n\n" + tbl(["Key", "Brief ID", "Value"], [[k, FID[k], v] for k, v in F.items()]))
T.append("## T2. Unit economics per bike-month\n\n" + tbl(["Configuration", "Utilisation", "Deliveries", "Revenue, Rs", "Rider, Rs", "Vehicle, Rs", "Contribution, Rs", "Margin"],
         [[u["label"], pc(u["util"]), inr(u["dels"]), inr(u["rev"]), inr(u["rider"]), inr(u["vehicle"]), inr(u["contrib"]), pc(u["margin"], 1)] for u in UE]))
T.append("## T3. A bought EV, monthly equivalent at 11% over 48 months, against the lease\n\n" + tbl(["Component", "Rs a month"],
         [["Capital (Rs 1,20,000 less Rs 10,000 subsidy)", inr(OWN["capital"])], ["Resale credit (Rs 25,000 at month 48)", inr(OWN["resale"])],
          ["Charging hub share (Rs 10,000)", inr(OWN["charging"])], ["Running cost", inr(OWN["running"])], ["Total, bought", inr(OWN["total"])],
          ["Lease, all-in", inr(F["lease"])], ["EMI alone on a 3-year 11% loan", inr(emi_ev)]]))
T.append("## T4. The options, as modelled\n\n" + tbl(["ID", "Option", "Contract", "Existing fleet", "Contract fleet"],
         [[k, OPT[k]["name"], "Yes" if OPT[k]["contract"] else "No",
           (("bought" if OPT[k]["own_e"] else "leased") + (" in waves (months 2, 4, 12)" if OPT[k]["ex"] == WAVES else " in month 2")) if OPT[k]["ex"] else "petrol",
           (("bought" if OPT[k]["own_c"] else "leased") + " in months 4, 6, 8") if OPT[k]["contract"] else "none"] for k in OPT]))
T.append("## T5. Options compared (base case)\n\n" + tbl(["ID", "Option", "NPV 48m, Rs Cr", "vs petrol, Rs Cr", "Contribution 24m, Rs L", "Run-rate M24, Rs L a year", "Cash M24, Rs Cr", "Lowest cash, Rs L", "Debt, Rs L", "Capex 24m, Rs L", "g CO2 per delivery M24"],
         [[k, OPT[k]["name"], crs(S[k]["npv"]), crs(S[k]["dnpv"]), lk(S[k]["c24"]), lk(S[k]["rr24"]), crs(S[k]["cash24"]), lk(S[k]["mincash"]), lk(S[k]["loan"]), lk(S[k]["capex24"]), round(S[k]["g_del24"])] for k in OPT]))
T.append("## T6. Scorecard\n\nScore = 0.35 Value + 0.20 Liquidity + 0.20 Resilience + 0.15 Emissions + 0.10 Growth\n\n" + tbl(["ID", "Value", "Liquidity", "Resilience", "Emissions", "Growth", "Value at risk", "Score"],
         [[k, CARD[k]["value"], CARD[k]["liquidity"], CARD[k]["resilience"], CARD[k]["emissions"], CARD[k]["growth"], pc(CARD[k]["at_risk"]), "%.2f" % CARD[k]["score"]] for k in HK]))
T.append("## T7. Recommended plan, month by month (Rs lakh)\n\n" + tbl(["Month", "Petrol", "EV", "Spares", "Revenue", "Contribution", "Investment", "Working capital", "Petrol sales", "Cash flow", "Cash"],
         [[r["t"], r["petrol"], r["ev"], r["spares"], lk(r["rev"]), lk(r["contrib"]), lk(r["charge"] + r["dep"] + r["onb"] + r["build"]), lk(r["drec"]), lk(r["sale"]), lk(r["cf"]), lk(r["cash"])] for r in R5[:24]]))
T.append("## T8. Recommended plan by quarter\n\n" + tbl(["Quarter", "Revenue, Rs L", "Contribution, Rs L", "Cash at end, Rs L", "Petrol bikes", "EVs existing", "EVs contract", "Spares"],
         [[q["q"], lk(q["rev"]), lk(q["contrib"]), lk(q["cash"]), q["petrol"], q["ev_e"], q["ev_c"], q["spares"]] for q in QTR]))
T.append("## T9. Uses of the Rs 1 crore, months 1 to 24\n\n" + tbl(["Use", "Rs lakh", "Share", "When"], [[n, lk(v), pc(v / F["capital"]), w] for n, v, w in USES]))
T.append("## T10. Scenarios\n\n" + tbl(["Option", "Measure"] + list(SCN), [[k, m] + [(crs(SC[s][k][x]) if x == "npv" else lk(SC[s][k][x])) for s in SCN] for k in ("O0", "O3", "O5", "O6") for m, x in (("NPV, Rs Cr", "npv"), ("Run-rate M24, Rs L", "rr24"), ("Lowest cash, Rs L", "mincash"), ("Debt, Rs L", "loan"))]))
T.append("## T11. Sensitivity of the recommended plan (NPV over 48 months, Rs Cr)\n\n" + tbl(["Input", "Low case", "High case", "NPV low", "NPV high", "Swing"],
         [[t["label"], t["lo_text"], t["hi_text"], crs(t["lo"]), crs(t["hi"]), crs(t["swing"])] for t in TOR]))
T.append("## T12. The seven uncertainties in the case, against each option (change in NPV, Rs lakh)\n\n" + tbl(["Uncertainty"] + HK, [[u[1]] + [("−" if v < 0 else "") + "%.1f" % abs(v) for v in row] for u, row in zip(UNC, HEAT)]) + "\nExposure (sum of losses), Rs lakh: " + ", ".join("%s %.1f" % (k, EXPO[k]) for k in HK) + "\n")
T.append("## T13. Switch points and break-evens\n\n" + tbl(["Question", "Answer"],
         [["Lease rate at which buying one bike matches leasing", "Rs " + inr(SW["lease_bike"]) + " a month"], ["Lease rate at which buying both fleets matches leasing both (NPV)", "Rs " + inr(SW["lease_fleet"]) + " a month"],
          ["Subsidy per EV at which buying matches the Rs 3,500 lease", "Rs " + inr(SW["subsidy"])], ["Contract utilisation at which one leased bike breaks even", pc(SW["c_util_bike"], 1)],
          ["Contract volume at which the leased contract adds no value over petrol", pc(SW["c_vol"], 1)], ["Revenue per delivery at which the recommended plan is worth zero over 48 months", "Rs " + "%.1f" % SW["rev_del"]],
          ["EMI on a financed EV, 3 years at 11%", "Rs " + inr(SW["emi"])]]))
T.append("## T14. Emissions\n\n" + tbl(["Measure", "Today", "Month 12", "Month 24"], [["Tonnes CO2 a year", round(EM["today_t"], 1), round(EM["m12_t"], 1), round(EM["m24_t"], 1)],
         ["Grams CO2 per delivery", round(EM["today_g"]), round(EM["m12_g"]), round(EM["m24_g"])], ["Deliveries a month", inr(EM["dels_today"]), inr(R5[11]["dels"]), inr(EM["dels_24"])]]))
T.append("## T15. Contribution bridge, today to month 24 (Rs lakh a year)\n\n" + tbl(["Step", "Rs lakh"], [[n, lk(v)] for n, v in BR]))
T.append("## T16. Assumptions register\n\n" + tbl(["ID", "Assumption", "Base", "Bear", "Bull", "Unit", "Basis"], [[a, A[a]["label"], A[a]["base"], A[a]["bear"], A[a]["bull"], A[a]["unit"], A[a]["basis"]] for a in A]))
T.append("## T17. Checks\n\n" + tbl(["Check", "Result"], [[k, "PASS" if v else "FAIL"] for k, v in CHK.items()]))
TABLES = "# SwiftKart model tables (model hash " + OUT["meta"]["hash"] + ")\n\n" + "\n".join(T)

for k, v in CHK.items(): print(("PASS " if v else "FAIL ") + k)
print("HASH", OUT["meta"]["hash"])
print("FINDINGS", [round(S["O5"]["npv"] / L, 1), round(S["O3"]["npv"] / L, 1), round(S["O5"]["rr24"] / L, 1), round(S["O0"]["rr24"] / L, 1), round(SW["lease_fleet"])])
if not DRY:
    io.open(HERE / "model_outputs.json", "w", encoding="utf-8").write(json.dumps(OUT, indent=1, sort_keys=True, default=float, ensure_ascii=False))
    io.open(HERE / "model_tables.md", "w", encoding="utf-8", newline="\n").write(TABLES)
    print("wrote model_outputs.json model_tables.md")
print("MODEL PASS" if OK else "MODEL FAIL")
