"""PRAMAAN model: India's National Examination Security Architecture (Team IdeaForge, Maudrik v7.0).
Single source of truth for every model number in the research document and the Figma deck.
Run from its own folder: python pramaan_model.py  (writes model_outputs.json and model_tables.md)."""
import json, math, pathlib
OUT = pathlib.Path(__file__).parent if "__file__" in globals() else None

# ---------- 1. Reported facts (IDs refer to the plan's source register) ----------
F = dict(
    nta_cbt=1.00e7,    # NTA CBT tender, Mar 2026: about 1 crore candidate-tests a year [S27]
    neet=22.76e5,      # NEET-UG 2025 registrations 22,76,069 [S30]
    ssc_cgl=28.15e5,   # SSC CGL 2025 applications 28,15,445 [S32]
    ssc_gd=25.21e5,    # SSC GD 2025, 25.21 lakh appeared [S33]
    rrb_ntpc=1.2168e7, # RRB NTPC 2025 applications 1,21,67,679 [S34]
    rrb_d=1.0822e7,    # RRB Group D 2025 applications 1,08,22,423 [S35]
    upsc=9.38e5,       # UPSC CSE 2025 applications 9,37,876 [S36]
    ie_cands=1.4e7, ie_leaks=41, ie_years=5, ie_posts=1.04e5,  # Indian Express, Feb 2024 [S01]
    ugcnet24=9.08e5,   # UGC-NET June 2024 cancelled [S10]
    neet26=22.7e5,     # NEET-UG 2026 cancelled [S05, S06]
    neet_fee=1700,     # NEET-UG 2026 general fee, Rs [S68]
)

# ---------- 2. Team assumptions A01 to A16 (disclosed on the appendix slide and in doc Appendix E) ----------
A = dict(
    rrb_annual=0.5, state_sittings=2.0e7, growth=0.03, delay_months=8, post_month=30000,
    hh_cost=1500, time_cost=5000, reconduct=800, dr=0.08,
    cover=[0.10, 0.35, 0.60, 0.80, 1, 1, 1, 1, 1, 1], ramp=[0.4, 0.7] + [1] * 8, capsplit=[0.4, 0.4, 0.2] + [0] * 7,
    refresh_share=0.4, scen={"bear": (0.30, 0.40), "base": (0.50, 0.60), "bull": (0.65, 0.75)}, levy=50,
    detect_now=0.10, detect_p=0.60, buyers=300, price=5e5, fine=10e7,
)
YEARS = list(range(2027, 2037))

# ---------- 3. Scale and expected annual loss (EAL) ----------
central = F["nta_cbt"] + F["neet"] + F["ssc_cgl"] + F["ssc_gd"] + (F["rrb_ntpc"] + F["rrb_d"]) * A["rrb_annual"] + F["upsc"]
sittings = central + A["state_sittings"]
affected = F["ie_cands"] / F["ie_years"] + (F["ugcnet24"] + F["neet26"]) / 3
per_cand = A["hh_cost"] + A["time_cost"] + A["reconduct"]
posts = F["ie_posts"] / F["ie_years"]
vac_cr = posts * A["delay_months"] * A["post_month"] / 1e7
direct_cr = affected * per_cand / 1e7
EAL = direct_cr + vac_cr
EAL_cash = affected * (A["hh_cost"] + A["reconduct"]) / 1e7 + vac_cr

# ---------- 4. Cost components (Rs Cr, constant 2026 prices): id, name, capex, opex a year, hardware share ----------
COMP = [
    ("C01", "NEIAA: statutory standards, accreditation, audit and incident authority", 150, 120, 0.30),
    ("C02", "National Item Bank Vault and 45,000 calibrated items", 172.5, 38, 60 / 172.5),
    ("C03", "Split-key cryptography: HSMs, PKI, threshold key release", 40, 8, 0.80),
    ("C04", "Forensic watermarking, custody ledger, smart-lock boxes", 50, 17.5, 0.80),
    ("C05", "Hardening 2,500 existing government labs as secure centres", 75, 25, 1.00),
    ("C06", "Identity at the gate: 1:1 face-match devices", 100, 15, 1.00),
    ("C07", "CERT-Exam SOC and AI forensics", 80, 60, 0.60),
    ("C08", "Insider programme: vetting, sequestration, rotation", 0, 50, 0.00),
    ("C09", "Independent audits and red teams", 0, 50, 0.00),
    ("C10", "36 State Examination Security Cells", 72, 180, 0.50),
    ("C11", "Candidate Protection Fund", 0, 50, 0.00),
    ("C12", "Exam-crime investigation and forensic labs", 40, 60, 0.60),
]
capex = sum(c[2] for c in COMP); opex = sum(c[3] for c in COMP); hw = sum(c[2] * c[4] for c in COMP)
refresh = A["refresh_share"] * hw

def cost_path(m=1.0):
    return [(capex * A["capsplit"][t] + (refresh if t == 5 else 0) + opex * A["ramp"][t]) * m for t in range(10)]

def run(p, b, costmult=1.0, dr=None, eal=None, growth=None):
    dr = A["dr"] if dr is None else dr; eal = EAL if eal is None else eal; growth = A["growth"] if growth is None else growth
    red = 1 - (1 - p) * (1 - b); costs = cost_path(costmult); rows = []; pvb = pvc = cb = cc = 0; pay = None
    for t in range(10):
        e = eal * (1 + growth) ** t; ben = e * A["cover"][t] * red; df = (1 + dr) ** -(t + 1)
        pvb += ben * df; pvc += costs[t] * df; cb += ben; cc += costs[t]
        if pay is None and cb >= cc: pay = YEARS[t]
        rows.append(dict(year=YEARS[t], cost=round(costs[t], 1), eal=round(e, 1), benefit=round(ben, 1), cum_benefit=round(cb, 1), cum_cost=round(cc, 1)))
    return dict(reduction=round(red, 4), pv_benefit=round(pvb, 1), pv_cost=round(pvc, 1), npv=round(pvb - pvc, 1),
                bcr=round(pvb / pvc, 2), payback=pay, cum_cost=round(cc, 1), cum_benefit=round(cb, 1), rows=rows)

SC = {k: run(*v) for k, v in A["scen"].items()}
base = SC["base"]
cash = run(*A["scen"]["base"], eal=EAL_cash)
tot_sit = sum(sittings * (1 + A["growth"]) ** t for t in range(10))
per_sit_10y = base["cum_cost"] * 1e7 / tot_sit
per_sit_ss = opex * 1e7 / sittings
gl = EAL / math.e

# ---------- 5. Tornado on base NPV ----------
def npv_with(aff_mult=1.0, costmult=1.0, dr=None, **kw):
    save = dict(A); A.update(kw); p, b = A["scen"]["base"]
    pc = A["hh_cost"] + A["time_cost"] + A["reconduct"]; vac = posts * A["delay_months"] * A["post_month"] / 1e7
    r = run(p, b, costmult=costmult, dr=dr, eal=affected * aff_mult * pc / 1e7 + vac); A.clear(); A.update(save); return r["npv"]
TOR = [("Candidate time per re-sit, Rs 0 to Rs 10,000", npv_with(time_cost=0), npv_with(time_cost=10000)),
       ("Effectiveness, bear to bull", SC["bear"]["npv"], SC["bull"]["npv"]),
       ("Candidates hit a year, -30% to +30%", npv_with(aff_mult=0.7), npv_with(aff_mult=1.3)),
       ("Programme cost, +30% to -30%", npv_with(costmult=1.3), npv_with(costmult=0.7)),
       ("Appointment delay, 4 to 12 months", npv_with(delay_months=4), npv_with(delay_months=12)),
       ("Discount rate, 12% to 6%", npv_with(dr=0.12), npv_with(dr=0.06)),
       ("Re-conduct cost, Rs 500 to Rs 1,200", npv_with(reconduct=500), npv_with(reconduct=1200))]
TOR = sorted([(n, round(lo, 1), round(hi, 1)) for n, lo, hi in TOR], key=lambda r: -(r[2] - r[1]))

# ---------- 6. Blast radius, insider exposure, attacker economics ----------
forms_full = 6 * 2 * 8; forms_interim = 24
blast_now = int(F["neet26"]); blast_full = round(F["neet26"] / forms_full); blast_interim = round(F["neet26"] / forms_interim)
blast_govt = round(F["neet26"] / 20)          # NTA DG: about 20 CBT shifts, one form a shift [S64]
exposure_now = 120 / 180; exposure_p = 1 / 40; cap_p = 1 / 20
rev_now = A["buyers"] * A["price"] / 1e7; rev_p = rev_now * exposure_p / exposure_now
ev_now = rev_now - A["detect_now"] * A["fine"] / 1e7; ev_p = rev_p - A["detect_p"] * A["fine"] / 1e7

# ---------- 7. Coded incident dataset: (id, year, exam, state, stage, type, candidates or None, cancelled) ----------
STAGES = ["QC", "QS", "PA", "TR", "EC", "CA", "EX", "ER"]
SN = {"QC": "Question creation", "QS": "Question storage", "PA": "Personnel access", "TR": "Transmission",
      "EC": "Examination centre", "CA": "Candidate authentication", "EX": "Examination", "ER": "Evaluation & results"}
TYPES = ["INS", "PHY", "CYB", "OPS"]
INC = [
 (1,2015,"Punjab DLG JE/SDE","Punjab","QS","INS",None,1),(2,2015,"AIPMT","All India","EX","PHY",None,1),
 (3,2016,"TS EAMCET-II Medical","Telangana","QS","INS",None,1),(4,2017,"BSSC Clerical","Bihar","PA","INS",None,1),
 (5,2017,"HCS Judicial","Haryana","PA","INS",None,1),(6,2017,"UP Police Inspector (online)","Uttar Pradesh","EX","CYB",None,1),
 (7,2017,"TNPSC Group II-A","Tamil Nadu","TR","INS",None,0),(8,2017,"TRB Polytechnic Lecturer","Tamil Nadu","ER","INS",200,1),
 (9,2018,"Rajasthan Police Constable","Rajasthan","EX","CYB",None,1),(10,2018,"UPPSC LT Grade","Uttar Pradesh","QS","INS",None,0),
 (11,2018,"UP BTC 4th Semester","Uttar Pradesh","EC","INS",None,1),(12,2018,"UPSSSC VDO","Uttar Pradesh","ER","INS",None,1),
 (13,2019,"RRB JE Stage-2","Maharashtra","EX","CYB",None,0),(14,2019,"TNPSC Group-4","Tamil Nadu","TR","INS",None,0),
 (15,2019,"GSSSB Binsachivalay Clerk","Gujarat","EC","PHY",600000,1),(16,2020,"MAHA-TET","Maharashtra","ER","INS",None,0),
 (17,2020,"GUVNL Vidyut Sahayak","Gujarat","EX","CYB",2156,0),(18,2020,"RSMSSB Junior Engineer","Rajasthan","QS","INS",None,1),
 (19,2020,"APPSC Group-I Mains","Andhra Pradesh","ER","OPS",None,1),(20,2020,"APSSB LDC and JSA","Arunachal Pradesh","ER","INS",None,1),
 (21,2021,"HSSC Gram Sachiv","Haryana","CA","PHY",None,1),(22,2021,"ITBP Constable Tradesmen","All India","PA","INS",46174,0),
 (23,2021,"MPPEB Group-1 and Group-5","Madhya Pradesh","QS","CYB",None,1),(24,2021,"Army CEE Soldier GD","All India","PA","INS",None,1),
 (25,2021,"Punjab Police SI","Punjab","EX","CYB",None,1),(26,2021,"JEE Main","All India","EX","CYB",None,0),
 (27,2021,"NEET-UG impersonation","All India","CA","PHY",None,0),(28,2021,"REET Level 2","Rajasthan","QS","INS",1600000,1),
 (29,2021,"Karnataka Police SI","Karnataka","ER","INS",None,1),(30,2021,"GSSSB Head Clerk","Gujarat","QS","INS",None,1),
 (31,2021,"MHADA staff recruitment","Maharashtra","QC","INS",None,1),(32,2022,"KEA Assistant Professor","Karnataka","QC","INS",None,0),
 (33,2022,"JKSSB Finance Accounts Assistant","J&K","QS","INS",None,1),(34,2022,"MP TET Varg-3","Madhya Pradesh","EX","CYB",None,0),
 (35,2022,"HP Police Constable","Himachal Pradesh","QS","PHY",75000,1),(36,2022,"PPSC Naib Tehsildar","Punjab","CA","PHY",None,1),
 (37,2022,"KPTCL Junior Assistant","Karnataka","EC","PHY",None,0),(38,2023,"TSPSC Group-I and 14 other papers","Telangana","QS","INS",None,1),
 (39,2022,"HPSSC JE and JOA-IT","Himachal Pradesh","PA","INS",None,1),(40,2022,"RPSC Senior Teacher GK","Rajasthan","QC","INS",None,1),
 (41,2023,"UKPSC Patwari/Lekhpal","Uttarakhand","PA","INS",None,1),(42,2023,"GPSSB Junior Clerk","Gujarat","QS","INS",953000,1),
 (43,2024,"UP Police Constable","Uttar Pradesh","TR","INS",4800000,1),(44,2024,"BPSC TRE-3","Bihar","QS","INS",375000,1),
 (45,2024,"NEET-UG (Hazaribagh strong room)","All India","EC","INS",2406079,0),(46,2024,"NEET-UG (Godhra centre)","Gujarat","ER","INS",None,0),
 (47,2024,"UGC-NET June (doctored-screenshot alarm)","All India","EX","OPS",908000,1),(48,2025,"SSC Selection Post Phase 13","All India","EX","OPS",None,0),
 (49,2026,"NEET-UG (setters and translators)","All India","QC","INS",2270000,1),
]
count = {s: {t: 0 for t in TYPES} for s in STAGES}
for i in INC: count[i[4]][i[5]] += 1
by_stage = {s: sum(count[s].values()) for s in STAGES}
by_type = {t: sum(count[s][t] for s in STAGES) for t in TYPES}
canc = [i for i in INC if i[7] == 1 and i[6]]
canc_total = sum(i[6] for i in canc); pre = sum(i[6] for i in canc if i[4] in ("QC", "QS", "PA", "TR"))

# ---------- 8. Risk heat map (likelihood, impact) per stage for INS, PHY, CYB, OPS ----------
LI = {"QC": [(4,5),(1,5),(2,5),(2,3)], "QS": [(4,5),(3,5),(3,5),(2,4)], "PA": [(4,4),(2,3),(3,4),(3,3)],
      "TR": [(3,5),(3,4),(2,4),(2,3)], "EC": [(4,3),(3,3),(2,3),(3,2)], "CA": [(2,2),(3,2),(2,2),(2,2)],
      "EX": [(3,3),(4,2),(4,4),(3,4)], "ER": [(3,3),(1,2),(2,4),(3,3)]}
HEAT = {s: [l * i for (l, i) in LI[s]] for s in STAGES}
REG = sorted([(HEAT[s][k], by_stage[s], s, TYPES[k]) for s in STAGES for k in range(4)], key=lambda r: (-r[0], -r[1]))[:10]

# ---------- 9. Funding split, steady state ----------
levy_cr = A["levy"] * sittings / 1e7; state_cr = 0.4 * 180; union_cr = opex - levy_cr - state_cr

out = dict(sittings_crore=round(sittings/1e7, 2), central_crore=round(central/1e7, 2), affected_lakh=round(affected/1e5, 2),
    per_candidate=per_cand, direct_cr=round(direct_cr, 1), vacancy_cr=round(vac_cr, 1), EAL_cr=round(EAL, 1), EAL_cash_cr=round(EAL_cash, 1),
    capex=capex, opex=opex, hardware=round(hw, 1), refresh=round(refresh, 1),
    scenarios={k: {x: v[x] for x in v if x != "rows"} for k, v in SC.items()}, base_rows=base["rows"],
    cash_only={x: cash[x] for x in cash if x != "rows"}, per_sitting_10y=round(per_sit_10y, 1), per_sitting_steady=round(per_sit_ss, 1),
    fee_share=round(per_sit_ss / F["neet_fee"], 3), gl_ceiling=round(gl, 1), opex_share_EAL=round(opex / EAL, 3), opex_share_GL=round(opex / gl, 3),
    tornado=TOR, forms_full=forms_full, forms_interim=forms_interim, blast_now=blast_now, blast_full=blast_full, blast_interim=blast_interim,
    blast_govt=blast_govt, blast_ratio=round(blast_now / blast_full), exposure_now=round(exposure_now, 3), exposure_p=exposure_p, cap_p=cap_p,
    attacker=dict(rev_now=round(rev_now, 2), ev_now=round(ev_now, 2), rev_p=round(rev_p, 2), ev_p=round(ev_p, 2)),
    incidents=len(INC), by_stage=by_stage, by_type=by_type, count=count, cancelled_known=len(canc),
    cancelled_lakh=round(canc_total/1e5, 2), pre_centre_lakh=round(pre/1e5, 2), pre_centre_share=round(pre/canc_total, 3),
    heat=HEAT, register=REG, funding=dict(levy=round(levy_cr, 1), states=state_cr, union=round(union_cr, 1)))

def md(h, rows): return "| " + " | ".join(h) + " |\n|" + "---|" * len(h) + "\n" + "\n".join("| " + " | ".join(str(c) for c in r) + " |" for r in rows) + "\n"
def f1(v): return f"{v:,.1f}".replace("-", "\u2212")
T = ["# PRAMAAN model tables\n",
 "## T1. Annual high-stakes sittings (lakh)\n" + md(["Line", "Lakh"], [["NTA CBT exams", 100.0], ["NEET-UG", 22.76], ["SSC CGL and GD", 53.36],
   ["RRB NTPC and Group D (half a cycle a year)", 114.95], ["UPSC CSE", 9.38], ["Central subtotal", round(central/1e5, 2)], ["State exams (A02)", 200.0], ["Total", round(sittings/1e5, 2)]]),
 "## T2. Expected annual loss, 2026 baseline (Rs Cr)\n" + md(["Line", "Value"], [["Candidates hit by cancellations a year (lakh)", round(affected/1e5, 2)],
   ["Cost per affected candidate (Rs)", per_cand], ["Direct candidate and re-conduct loss", f1(direct_cr)], ["Stalled posts: 20,800 a year x 8 months x Rs 30,000", f1(vac_cr)],
   ["Expected annual loss (EAL)", f1(EAL)], ["EAL, cash only (no candidate time)", f1(EAL_cash)], ["Gordon-Loeb ceiling (EAL / e)", f1(gl)]]),
 "## T3. Cost components (Rs Cr)\n" + md(["ID", "Component", "Capex", "Opex a year"], [[c[0], c[1], c[2], c[3]] for c in COMP] + [["", "Total", capex, opex]]),
 "## T4. Base case by year (Rs Cr)\n" + md(["Year", "Cost", "EAL", "Avoided loss", "Cum. benefit", "Cum. cost"],
   [[r["year"], f1(r["cost"]), f1(r["eal"]), f1(r["benefit"]), f1(r["cum_benefit"]), f1(r["cum_cost"])] for r in base["rows"]]),
 "## T5. Scenarios (Rs Cr, PV at 8% real)\n" + md(["Scenario", "Loss cut", "PV benefit", "PV cost", "NPV", "BCR", "Payback"],
   [[k, f"{v['reduction']:.0%}", f1(v["pv_benefit"]), f1(v["pv_cost"]), f1(v["npv"]), v["bcr"], v["payback"]] for k, v in SC.items()]
   + [["base, cash only", f"{cash['reduction']:.0%}", f1(cash["pv_benefit"]), f1(cash["pv_cost"]), f1(cash["npv"]), cash["bcr"], cash["payback"]]]),
 "## T6. Tornado on base NPV (Rs Cr)\n" + md(["Input", "Low", "High"], [[n, f1(lo), f1(hi)] for n, lo, hi in TOR]),
 "## T7. Coded incidents by stage and risk type (49, 2015 to 2026)\n" + md(["Stage"] + TYPES + ["Total"], [[SN[s]] + [count[s][t] for t in TYPES] + [by_stage[s]] for s in STAGES]),
 "## T8. Risk heat map (likelihood x impact)\n" + md(["Stage"] + TYPES, [[SN[s]] + HEAT[s] for s in STAGES]),
 "## T9. Blast radius and attacker economics\n" + md(["Metric", "Today", "PRAMAAN"], [
   ["Candidates exposed by one NEET-UG compromise", f"{blast_now:,}", f"{blast_full:,} ({forms_full} forms); {blast_interim:,} ({forms_interim} forms, 2027 to 2028)"],
   ["Government CBT plan, one form a shift (20 shifts)", f"{blast_govt:,}", ""],
   ["Share of a paper one insider can expose", f"{exposure_now:.0%}", f"{exposure_p:.1%} expected, {cap_p:.0%} cap"],
   ["Leak revenue (Rs Cr)", f1(rev_now), f1(rev_p)], ["Seller's expected value (Rs Cr)", f1(ev_now), f1(ev_p)]]),
 "## T10. Funding, steady state (Rs Cr a year)\n" + md(["Source", "Rs Cr", "Share"], [["Union budget", f1(union_cr), f"{union_cr/opex:.0%}"],
   [f"Integrity levy (Rs {A['levy']} a sitting)", f1(levy_cr), f"{levy_cr/opex:.0%}"], ["States (40% of C10)", f1(state_cr), f"{state_cr/opex:.0%}"], ["Total", f1(opex), "100%"]]),
 "## T11. Coded incident list\n" + md(["#", "Year", "Exam", "State", "Stage", "Type", "Candidates", "Cancelled"],
   [[i[0], i[1], i[2], i[3], SN[i[4]], i[5], f"{i[6]:,}" if i[6] else "not stated", "yes" if i[7] else "no"] for i in INC]),
]
if OUT:
    (OUT / "model_outputs.json").write_text(json.dumps(out, indent=2, ensure_ascii=False), encoding="utf-8")
    (OUT / "model_tables.md").write_text("\n".join(T), encoding="utf-8")
print("REF1 sittings", out["sittings_crore"], "affected", out["affected_lakh"], "EAL", out["EAL_cr"], "EAL_cash", out["EAL_cash_cr"], "GL", out["gl_ceiling"])
print("REF2 capex", capex, "opex", opex, "refresh", out["refresh"], "cum_cost", base["cum_cost"], "cum_benefit", base["cum_benefit"])
for k, v in out["scenarios"].items(): print("REF3", k, v["npv"], v["bcr"], v["payback"], v["pv_benefit"], v["pv_cost"])
print("REF4 cash", out["cash_only"]["npv"], out["cash_only"]["bcr"], out["cash_only"]["payback"])
print("REF5 per sitting", out["per_sitting_10y"], out["per_sitting_steady"], out["fee_share"], out["opex_share_EAL"], out["opex_share_GL"])
print("REF6 blast", blast_now, blast_full, blast_interim, blast_govt, out["blast_ratio"], "attacker", out["attacker"])
print("REF7 incidents", len(INC), by_stage, by_type, "cancelled", len(canc), out["cancelled_lakh"], out["pre_centre_lakh"], out["pre_centre_share"])
print("REF8 register", REG)
print("REF9 funding", out["funding"])
print("REF10 tornado", TOR)
print("REF11 count", count)
