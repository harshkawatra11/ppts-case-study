# ===== ARTHIK KHAYAL ACTIVATION MODEL v1 =====
"""Activation model for the Arthik Khayal case (Trade Private Limited, ONL Trade).
Run from the repo root:  python -X utf8 arthikkhayal-case/model/activation_model.py
Writes arthikkhayal-case/model/model_outputs.json, model_tables.md and arthikkhayal-case/deck/values.json.
Add --dry to print the summary without writing anything."""
import json, hashlib, io, sys, pathlib
DRY = "--dry" in sys.argv
try: HERE = pathlib.Path(__file__).resolve().parent
except NameError: HERE = pathlib.Path("arthikkhayal-case/model").resolve()

# ---------- formatting (Indian digit grouping, no dashes; minus sign is U+2212) ----------
def fI(v):
    n = int(round(abs(v))); s = str(n)
    if len(s) > 3:
        head, tail = s[:-3], s[-3:]; parts = []
        while len(head) > 2: parts.insert(0, head[-2:]); head = head[:-2]
        if head: parts.insert(0, head)
        s = ",".join(parts) + "," + tail
    return ("−" if v < 0 and n else "") + s
def fP(v, dp=1): return ("−" if v < 0 else "") + ("%." + str(dp) + "f") % abs(v) + "%"
def fpp(v, dp=1): return ("+" if v >= 0 else "−") + ("%." + str(dp) + "f") % abs(v) + " pp"
def fL(v, dp=1): return "₹" + ("%." + str(dp) + "f") % (v / 1e5) + " lakh"
def fR(v): return "₹" + fI(v)

# ---------- case facts (Exhibit 1, Exhibit 2a, Exhibit 2b; all figures as printed) ----------
SEG = ["Prestige", "Elite", "Elevate", "Preferred", "Salary Account", "Credit Card"]
WIN = ["T12", "T9", "T6", "T3", "T1"]
N26 = [3096, 35697, 9471, 60312, 627853, 73317]
R26 = [[35, 31, 28, 22, 16], [32, 29, 26, 22, 15], [37, 34, 31, 27, 13], [20, 18, 16, 14, 9], [14, 13, 11, 9, 6], [6, 6, 5, 5, 4]]
T26 = [15, 13, 12, 10, 6]
N25 = [2999, 34865, 6959, 72826, 505823, 110383]
R25 = [[38, 34, 30, 24, 17], [36, 33, 28, 24, 17], [41, 39, 34, 31, 24], [21, 19, 14, 12, 9], [13, 12, 10, 8, 7], [9, 9, 4, 4, 4]]
T25 = [15, 14, 10, 9, 7]
E1 = {"base25": 733855, "base26": 809746, "act25": 107889, "act26": 119339, "ha25": 66943, "ha26": 82086}
assert sum(N26) == E1["base26"] and sum(N25) == E1["base25"], "case totals"

# ---------- assumptions: ID -> (base, bear, bull, unit, basis). Bear is the value least favourable to our plan ----------
A = {
 "A01": (4, 4, 4, "months", "Measurement on 31 Jan 2027, four months after the 30 Sep 2026 snapshot; programme runs 2 Nov 2026 to 31 Jan 2027 (13 weeks)"),
 "A02": (0.1474, 0.1459, 0.1484, "share", "Business-as-usual activation rate at measurement: flat at the Sep 2026 level (14.70% Sep 2025 to 14.74% Sep 2026, Exhibit 1); bear drifts 15 bps down, bull 10 bps up"),
 "A03": (6324, 6324, 6324, "accounts a month", "Net account growth, (8,09,746 minus 7,33,855) / 12, Exhibit 1"),
 "A05": (0.010, 0.010, 0.010, "share", "Organic first-order rate among idle accounts over 13 weeks without any message; used only to size the holdout test (team estimate)"),
 "A10": (0.50, 0.55, 0.45, "share", "Share of idle accounts with no qualifying activity for 24 months, flagged inactive under the Oct 2024 exchange circular (the case's own term is dormant [C-D4]) (lane D, lane C)"),
 "A11": (0.50, 0.42, 0.58, "multiplier", "Conversion of a flagged account relative to an unflagged one, after re-KYC or video IPV; bank branches can do in-person verification (lane D)"),
 "A20": (0.55, 0.45, 0.62, "share", "Salary customers who open the parent bank's app in a month (lane F)"),
 "A21": (0.08, 0.06, 0.10, "share", "Tap-through on the salary-day card over three salary credits (lane F benchmarks for in-app cards)"),
 "A22": (0.32, 0.26, 0.38, "share", "First executed exchange order within the window after a tap, with single sign-on and a bank mandate (lane F, lane E)"),
 "A23": (0.60, 0.50, 0.68, "share", "Idle accounts reached through any owned channel with consent: bank app tile, email, statement, WhatsApp, SMS (lane F)"),
 "A24": (0.04, 0.03, 0.05, "share", "Tap-through on the account rediscovery message or tile (lane F)"),
 "A25": (0.25, 0.20, 0.30, "share", "First executed order after rediscovery (lane F)"),
 "A26": (1.00, 0.80, 1.15, "multiplier", "RM coverage multiplier on the base pattern: Prestige 80%, Elite 60%, Elevate 60%, Preferred 35% of idle clients get a review conversation in the window (lane B)"),
 "A27": (0.15, 0.11, 0.19, "share", "First executed order after an RM review conversation (lane B, lane E)"),
 "A28": (0.50, 0.42, 0.56, "share", "Idle accounts reached in Dhanteras and Diwali week (6 to 8 Nov 2026) through owned channels (lane G)"),
 "A29": (0.030, 0.022, 0.040, "share", "Tap-through on the factual gold ETF and Muhurat session notice (lane G, lane F)"),
 "A30": (0.30, 0.25, 0.35, "share", "First executed order after the tap (lane G)"),
 "A31": (40, 30, 50, "sessions", "Workplace financial-education sessions at employers that run salary accounts with the parent bank (lane B)"),
 "A32": (120, 100, 140, "attendees", "Attendees a session (lane B)"),
 "A33": (0.10, 0.07, 0.13, "share", "First executed order within the window among idle attendees (lane E)"),
 "A35": (0.70, 0.60, 0.78, "share", "Warm cohort (last trade 9 to 12 months ago) reached with a servicing message (lane F)"),
 "A36": (0.20, 0.15, 0.25, "share", "Incremental re-trade among the reached warm cohort, above business as usual (lane E)"),
 "A39": (0.10, 0.07, 0.13, "share", "Lift in 90-day first-order rate for accounts opened in the window, from guided onboarding (lane E, lane H)"),
 "A50": (0.35, 0.35, 0.35, "share", "Idle accounts with a WhatsApp opt-in (lane F)"),
 "A51": (0.40, 0.40, 0.40, "rupees a message", "Blended WhatsApp Business price, two utility (₹0.115) and one marketing (₹0.8631 from 1 Jan 2026) template a person is ₹0.36; ₹0.40 adds a margin (lane F)"),
 "A52": (0.18, 0.18, 0.18, "rupees a message", "SMS on DLT routes, vendor range ₹0.10 to ₹0.25 (lane F)"),
 "A53": (0.025, 0.025, 0.025, "rupees a message", "Email (lane F)"),
 "A54": (400000, 400000, 400000, "rupees", "Content production: explainers, in-app copy, creatives (team estimate)"),
 "A55": (6000, 6000, 6000, "rupees a session", "Workplace session cost: travel, material (team estimate)"),
 "A56": (150000, 150000, 150000, "rupees", "Compliance and exchange advertisement review support (team estimate)"),
 "A57": (120000, 120000, 120000, "rupees", "Customer validation research: 30 interviews and 2 usability rounds (team estimate)"),
 "A58": (0.10, 0.10, 0.10, "share", "Contingency on cash cost"),
 "A59": (21, 21, 21, "FTE months", "Internal product sprint: 7 people for 3 months (team estimate)"),
 "A60": (180000, 180000, 180000, "rupees a FTE month", "Loaded internal cost a person a month (team estimate)"),
 "A61": (1000, 700, 1400, "rupees", "Paid-media cost per activated trading account; Groww reported ₹616 to ₹1,374 per acquired customer (FY25 to H1 FY26) and an activated account costs more, so ₹1,000 favours paid media; bear is cheaper paid media, which is worse for our comparison (lane F)"),
 "A62": (0.15, 0.15, 0.15, "rupees an order", "Cash equities brokerage per executed order, case product table"),
 "A63": (16, 12, 20, "orders a year", "Orders a year by a newly activated account: 12 monthly ETF instalments plus 4 others (team estimate)"),
 "A64": (1, 1, 1, "sells a year", "Sell transactions a year (team estimate)"),
 "A65": (15, 15, 15, "rupees a sell", "Depository charge a sell (lane C)"),
 "A66": (0.15, 0.15, 0.15, "share", "Share of new actives on a regular demat account that pays an annual fee; BSDA is nil up to ₹4 lakh of holdings and ₹100 a year from ₹4 lakh to ₹10 lakh (SEBI, 28 Jun 2024) (lane D)"),
 "A67": (300, 300, 300, "rupees a year", "Annual maintenance charge outside BSDA (lane C)"),
}
RMCOV = [0.80, 0.60, 0.60, 0.35, 0.0, 0.0]
SENDS = {"email": 3, "sms": 2, "wa": 3}
LEV = ["Salary day", "Rediscover", "RM review", "Dhanteras", "Workplace"]
SC = ["base", "bear", "bull"]

# ---------- exhibit analytics ----------
base26, base25 = E1["base26"], E1["base25"]
act_seg26 = [n * r[0] / 100 for n, r in zip(N26, R26)]; act_seg25 = [n * r[0] / 100 for n, r in zip(N25, R25)]
idle = [round(n * (100 - r[0]) / 100) for n, r in zip(N26, R26)]
rate26 = E1["act26"] / base26; rate25 = E1["act25"] / base25
ha26 = E1["ha26"] / base26; ha25 = E1["ha25"] / base25
sh26 = [n / base26 for n in N26]; sh25 = [n / base25 for n in N25]
mix = sum((sh26[i] - sh25[i]) * R25[i][0] / 100 for i in range(6)); rte = sum(sh26[i] * (R26[i][0] - R25[i][0]) / 100 for i in range(6))
cohort_rate26 = sum(act_seg26) / base26; cohort_rate25 = sum(act_seg25) / base25
t9_seg = sum(n * r[1] / 100 for n, r in zip(N26, R26))
roll_cohort = E1["act26"] * (1 - t9_seg / sum(act_seg26)); roll_total = E1["act26"] - base26 * T26[1] / 100
roll_lo, roll_hi = sorted([roll_cohort, roll_total]); roll_mid = (roll_lo + roll_hi) / 2
months = A["A01"][0]; grow = A["A03"][0]; endbase = base26 + grow * months; new_in_window = grow * 3
need200 = endbase * (rate26 + 0.02) - endbase * rate26; need300 = endbase * (rate26 + 0.03) - endbase * rate26

# ---------- lever model ----------
def run(sc, over=None):
    k = SC.index(sc)
    g = lambda i: (over[i] if over and i in over else A[i][k])
    effm = (1 - g("A10")) + g("A10") * g("A11"); eff = [i * effm for i in idle]
    pS = g("A20") * g("A21") * g("A22"); pR = g("A23") * g("A24") * g("A25"); pD = g("A28") * g("A29") * g("A30")
    rows = []
    for j, s in enumerate(SEG):
        p = [pS if s == "Salary Account" else 0.0, pR, min(1.0, RMCOV[j] * g("A26")) * g("A27"), pD]
        q = 1.0
        for v in p: q *= (1 - v)
        tot = eff[j] * (1 - q); sp = sum(p)
        rows.append([tot * v / sp for v in p] + [0.0])
    rows[4][4] = g("A31") * g("A32") * (idle[4] / N26[4]) * g("A33")
    warm = roll_mid * g("A35") * g("A36"); new = new_in_window * g("A39")
    inc = sum(sum(r) for r in rows) + warm + new
    bau = endbase * g("A02"); rate = (bau + inc) / endbase
    ha_end = (endbase * ha26 + inc) / endbase
    return {"rows": rows, "warm": warm, "new": new, "inc": inc, "bau": bau, "rate": rate, "pp": (rate - rate26) * 100, "ha": ha_end,
            "lev": [sum(r[c] for r in rows) for c in range(5)], "sessions": g("A31")}
R = {s: run(s) for s in SC}

# ---------- weekly ramp (13 weeks from 2 Nov 2026); weights per lever sum to 1 ----------
W = 13
PROF = {"Salary day": [0, 0, 0, 0, .30, 0, 0, 0, .35, 0, 0, 0, .35], "Rediscover": [.04, .12, .14, .12, .10, .09, .08, .07, .06, .05, .05, .04, .04],
        "RM review": [0, .11, .11, .11, .11, .11, .11, .11, .11, .12, 0, 0, 0], "Dhanteras": [.70, .30, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        "Workplace": [0, 0, .10, .10, .10, .10, .10, .10, .10, .10, .10, .10, 0], "Warm": [1 / 13] * 13, "New": [1 / 13] * 13}
for k, v in PROF.items(): assert abs(sum(v) - 1) < 1e-9, k
def ramp(r):
    out = []; cum = 0.0
    for w in range(W):
        cum += sum(r["lev"][i] * PROF[LEV[i]][w] for i in range(5)) + r["warm"] * PROF["Warm"][w] + r["new"] * PROF["New"][w]
        eb = base26 + grow * (1 + 3 * (w + 1) / W); bau = r["bau"] / endbase
        out.append((bau * eb + cum) / eb * 100)
    return out
RAMP = {s: ramp(R[s]) for s in SC}

# ---------- cost, revenue, paid comparison ----------
idle_all = sum(idle)
cash = {"Email, 3 sends": idle_all * SENDS["email"] * A["A53"][0], "SMS, 2 sends": idle_all * SENDS["sms"] * A["A52"][0],
        "WhatsApp, 3 sends to opted-in": idle_all * A["A50"][0] * SENDS["wa"] * A["A51"][0], "Content production": A["A54"][0],
        "Workplace sessions": A["A31"][0] * A["A55"][0], "Compliance and ad review": A["A56"][0], "Validation research": A["A57"][0],
        "Bank app card, tile, push": 0.0}
cash_sub = sum(cash.values()); cash["Contingency 10%"] = cash_sub * A["A58"][0]; cash_total = sum(cash.values())
internal = A["A59"][0] * A["A60"][0]
def econ(sc):
    k = SC.index(sc); inc = R[sc]["inc"]
    rev = A["A63"][k] * A["A62"][k] + A["A64"][k] * A["A65"][k] + A["A66"][k] * A["A67"][k]
    paid = cash_total / A["A61"][k]
    return {"cpa_cash": cash_total / inc, "cpa_all": (cash_total + internal) / inc, "rev_per": rev, "rev_total": rev * inc,
            "payback_m": 12 * (cash_total / inc) / rev, "paid_n": paid, "paid_pp": paid / endbase * 100}
ECON = {s: econ(s) for s in SC}

# ---------- tornado on base-case pp ----------
TOR = []
for i in ["A21", "A27", "A22", "A02", "A20", "A11", "A24", "A26", "A29", "A25", "A39", "A10", "A36"]:
    lo = run("base", {i: A[i][1]})["pp"]; hi = run("base", {i: A[i][2]})["pp"]; TOR.append((i, lo, hi))
TOR.sort(key=lambda t: -(t[2] - t[1]))

# ---------- option screen (team judgement, scores 1 to 5; weights stated on the slide) ----------
CRIT = [("90-day lift", 0.30), ("SEBI and ethics fit", 0.25), ("Works in a falling market", 0.20), ("Cash cost", 0.15), ("Ships in a quarter", 0.10)]
OPT = [("More market content and 'stay invested' messages", [1, 4, 1, 4, 5], "Run for 12 months; rate moved 14.70% to 14.74%"),
       ("First-trade cash offers and zero brokerage", [3, 2, 2, 2, 5], "Already tried; reads as trade inducement under NSE rules"),
       ("Trading contests and leaderboards", [3, 1, 2, 3, 3], "Gamified urgency; a dark pattern"),
       ("Paid media and finfluencers", [2, 2, 2, 1, 4], "SEBI rules of Aug 2024 bar ties with unregistered finfluencers"),
       ("Referral rewards", [2, 3, 2, 3, 4], "Pays for accounts, not first orders"),
       ("F&O education push", [2, 1, 2, 4, 4], "87.7% of individual F&O traders lost money in FY26"),
       ("New trading engine or app rebuild", [1, 4, 3, 1, 1], "Outside the brief: no engine rebuild"),
       ("Bank moments: salary day, rediscovery, RM review, Dhanteras", [4, 5, 4, 5, 4], "Owned rails, no advice, no offers, no F&O")]
SCORES = [(o[0], round(sum(s * w for s, (_, w) in zip(o[1], CRIT)), 2), o[1], o[2]) for o in OPT]
WALT = {"Equal weights": [0.2] * 5, "Rules first": [0.20, 0.40, 0.15, 0.15, 0.10], "Lift first": [0.45, 0.20, 0.15, 0.10, 0.10]}
SALT = {k: [round(sum(s * w for s, w in zip(o[1], ws)), 2) for o in OPT] for k, ws in WALT.items()}

# ---------- holdout sizing: 10% of each lever's reached pool gets no message; 80% power, 5% two-sided ----------
p0 = A["A05"][0]; effm0 = (1 - A["A10"][0]) + A["A10"][0] * A["A11"][0]
REACH = [("Salary day", idle[4] * A["A20"][0], A["A21"][0] * A["A22"][0]), ("Rediscover", idle_all * A["A23"][0], A["A24"][0] * A["A25"][0]),
         ("RM review", sum(i * c * A["A26"][0] for i, c in zip(idle, RMCOV)), A["A27"][0]), ("Dhanteras", idle_all * A["A28"][0], A["A29"][0] * A["A30"][0])]
HOLD = [(n, r, 0.1 * r, l * effm0 * 100, 2.80 * (p0 * (1 - p0) * (1 / (0.9 * r) + 1 / (0.1 * r))) ** 0.5 * 100) for n, r, l in REACH]

# ---------- checks ----------
CHK = []
def chk(name, ok): CHK.append((name, bool(ok))); print(("PASS " if ok else "FAIL ") + name)
chk("segment counts add to Exhibit 1 totals", sum(N26) == base26 and sum(N25) == base25)
chk("cohort activation within 0.2 pp of Exhibit 1", abs(cohort_rate26 - rate26) < 0.002 and abs(cohort_rate25 - rate25) < 0.002)
chk("idle pool within 0.2% of base minus active", abs(idle_all - (base26 - E1["act26"])) / (base26 - E1["act26"]) < 0.002)
chk("roll-off range positive and ordered", 0 < roll_lo < roll_hi)
chk("scenarios ordered bear < base < bull", R["bear"]["inc"] < R["base"]["inc"] < R["bull"]["inc"])
chk("base case inside the 200 to 300 bps brief", 2.0 <= R["base"]["pp"] <= 3.0)
chk("lever split adds to segment total", abs(sum(R["base"]["lev"]) + R["base"]["warm"] + R["base"]["new"] - R["base"]["inc"]) < 1e-6)
chk("ramp ends at the scenario rate", all(abs(RAMP[s][-1] - R[s]["rate"] * 100) < 0.01 for s in SC))
chk("our option scores highest", max(SCORES, key=lambda t: t[1])[0].startswith("Bank moments"))
chk("our option leads under three other weight sets", all(v[7] == max(v) for v in SALT.values()))
chk("every lever lift is above its minimum detectable effect", all(h[3] > h[4] for h in HOLD))
chk("tornado bars bracket the base", all(min(t[1], t[2]) <= R["base"]["pp"] + 1e-9 <= max(t[1], t[2]) for t in TOR))

# ---------- outputs ----------
OUTJ = {"rate26": rate26, "rate25": rate25, "ha26": ha26, "ha25": ha25, "mix": mix, "rte": rte, "roll": [roll_lo, roll_hi, roll_mid],
        "endbase": endbase, "need200": need200, "need300": need300, "idle": idle, "R": {s: {k: v for k, v in R[s].items()} for s in SC},
        "ramp": RAMP, "cash": cash, "cash_total": cash_total, "internal": internal, "econ": ECON, "tornado": TOR, "scores": SCORES, "salt": SALT, "hold": HOLD}
blob = json.dumps(OUTJ, sort_keys=True, default=lambda o: round(o, 6))
HASH = hashlib.md5(blob.encode()).hexdigest()[:10]
print("CHECKS %d/%d HASH %s" % (sum(c[1] for c in CHK), len(CHK), HASH))
b = R["base"]
print("FINDINGS", round(b["pp"], 2), round(R["bear"]["pp"], 2), round(R["bull"]["pp"], 2), fI(b["inc"]), fP(b["rate"] * 100, 1),
      fL(cash_total), fR(ECON["base"]["cpa_cash"]), fI(ECON["base"]["paid_n"]))

# ---------- tables for the research document ----------
def tbl(h, rows): return "| " + " | ".join(h) + " |\n|" + "|".join("---" for _ in h) + "|\n" + "\n".join("| " + " | ".join(str(c) for c in r) + " |" for r in rows) + "\n"
T = []
T.append(("T1 Assumptions register", tbl(["ID", "Base", "Bear", "Bull", "Unit", "Basis"], [[k, v[0], v[1], v[2], v[3], v[4]] for k, v in A.items()])))
T.append(("T2 Cohorts, September 2026 (Exhibit 2a) with derived active and idle accounts", tbl(["Segment", "Accounts", "Share of base"] + WIN + ["Active (T12)", "Idle"],
    [[s, fI(n), fP(sh26[i] * 100)] + [str(x) + "%" for x in R26[i]] + [fI(act_seg26[i]), fI(idle[i])] for i, (s, n) in enumerate(zip(SEG, N26))] +
    [["Total", fI(base26), "100%"] + [str(x) + "%" for x in T26] + [fI(sum(act_seg26)), fI(idle_all)]])))
T.append(("T3 Cohorts, September 2025 (Exhibit 2b)", tbl(["Segment", "Accounts", "Share of base"] + WIN + ["Active (T12)"],
    [[s, fI(n), fP(sh25[i] * 100)] + [str(x) + "%" for x in R25[i]] + [fI(act_seg25[i])] for i, (s, n) in enumerate(zip(SEG, N25))] +
    [["Total", fI(base25), "100%"] + [str(x) + "%" for x in T25] + [fI(sum(act_seg25))]])))
T.append(("T4 Year on year by segment", tbl(["Segment", "Accounts 2025", "Accounts 2026", "Growth", "T12 change", "T3 change", "T1 change"],
    [[s, fI(N25[i]), fI(N26[i]), fP((N26[i] / N25[i] - 1) * 100), fpp(R26[i][0] - R25[i][0], 0), fpp(R26[i][3] - R25[i][3], 0), fpp(R26[i][4] - R25[i][4], 0)] for i, s in enumerate(SEG)])))
T.append(("T5 Mix and rate decomposition of the change in activation, 2025 to 2026 (cohort-weighted)", tbl(["Component", "Effect"],
    [["Mix effect: base shifted toward Salary Account, away from Credit Card and Preferred", fpp(mix * 100, 2)], ["Rate effect: segment activation rates moved", fpp(rte * 100, 2)],
     ["Interaction and rounding", fpp((cohort_rate26 - cohort_rate25 - mix - rte) * 100, 2)], ["Total cohort-weighted change", fpp((cohort_rate26 - cohort_rate25) * 100, 2)]])))
T.append(("T6 Recency: share of the base trading in each trailing window", tbl(["Window"] + WIN, [["Sep 2025"] + [str(x) + "%" for x in T25], ["Sep 2026"] + [str(x) + "%" for x in T26],
    ["T1 as share of T12", fP(T25[4] / T25[0] * 100, 0), "", "", "", fP(T26[4] / T26[0] * 100, 0)]])))
T.append(("T7 Accounts that roll out of the 12-month active count in the next quarter", tbl(["Method", "Accounts"], [["Cohort rows: T12 minus T9, scaled to Exhibit 1", fI(roll_cohort)],
    ["Total row: 1,19,339 minus 13% of 8,09,746", fI(roll_total)], ["Midpoint used in the model", fI(roll_mid)]])))
T.append(("T8 Target arithmetic at 31 January 2027", tbl(["Item", "Value"], [["Accounts at measurement (8,09,746 + 4 x 6,324)", fI(endbase)],
    ["Active at business as usual (14.74%)", fI(endbase * rate26)], ["Extra active accounts for +200 bps", fI(need200)], ["Extra active accounts for +300 bps", fI(need300)],
    ["Accounts opened in the 13-week window", fI(new_in_window)]])))
T.append(("T9 Lever parameters by scenario", tbl(["ID", "Base", "Bear", "Bull"], [[k, A[k][0], A[k][1], A[k][2]] for k in A if k[1:].isdigit() and 10 <= int(k[1:]) <= 39])))
T.append(("T10 Incremental active accounts by segment and lever, base case", tbl(["Segment"] + LEV + ["Total"],
    [[s] + [fI(x) for x in R["base"]["rows"][i]] + [fI(sum(R["base"]["rows"][i]))] for i, s in enumerate(SEG)] +
    [["Warm cohort defence", "", "", "", "", "", fI(R["base"]["warm"])], ["New accounts, guided first order", "", "", "", "", "", fI(R["base"]["new"])],
     ["Total"] + [fI(x) for x in R["base"]["lev"]] + [fI(R["base"]["inc"])]])))
T.append(("T11 Scenario summary", tbl(["Measure", "Bear", "Base", "Bull"], [["Extra active accounts", fI(R["bear"]["inc"]), fI(R["base"]["inc"]), fI(R["bull"]["inc"])],
    ["Activation rate at 31 Jan 2027", fP(R["bear"]["rate"] * 100, 2), fP(R["base"]["rate"] * 100, 2), fP(R["bull"]["rate"] * 100, 2)],
    ["Change from 14.74%", fpp(R["bear"]["pp"], 2), fpp(R["base"]["pp"], 2), fpp(R["bull"]["pp"], 2)],
    ["Highly active (T3) rate", fP(R["bear"]["ha"] * 100, 1), fP(R["base"]["ha"] * 100, 1), fP(R["bull"]["ha"] * 100, 1)],
    ["Cash cost per extra active", fR(ECON["bear"]["cpa_cash"]), fR(ECON["base"]["cpa_cash"]), fR(ECON["bull"]["cpa_cash"])]])))
T.append(("T12 Weekly activation rate, % (week 1 starts 2 Nov 2026)", tbl(["Week"] + [str(w + 1) for w in range(W)], [[s.title()] + ["%.2f" % x for x in RAMP[s]] for s in SC])))
T.append(("T13 Cash cost for the 13 weeks", tbl(["Item", "Rupees"], [[k, fR(v)] for k, v in cash.items()] + [["Total cash", fR(cash_total)], ["Internal product sprint (not cash marketing)", fR(internal)]])))
T.append(("T14 Owned rails against paid media for the same cash", tbl(["Measure", "Bear", "Base", "Bull"], [["Cash", fL(cash_total)] * 1 + [fL(cash_total), fL(cash_total)],
    ["Extra actives, our plan", fI(R["bear"]["inc"]), fI(R["base"]["inc"]), fI(R["bull"]["inc"])], ["Paid cost per activated account", fR(A["A61"][1]), fR(A["A61"][0]), fR(A["A61"][2])],
    ["Extra actives, paid media", fI(ECON["bear"]["paid_n"]), fI(ECON["base"]["paid_n"]), fI(ECON["bull"]["paid_n"])]])))
T.append(("T15 Revenue a year per newly activated account and payback", tbl(["Item", "Base"], [["Brokerage: 16 orders x ₹0.15", "₹%.2f" % (A["A63"][0] * A["A62"][0])],
    ["Depository charge: 1 sell x ₹15", fR(A["A64"][0] * A["A65"][0])], ["Annual charge: 15% on a regular account x ₹300", fR(A["A66"][0] * A["A67"][0])],
    ["Revenue a year", fR(ECON["base"]["rev_per"])], ["Cash payback, months", "%.1f" % ECON["base"]["payback_m"]]])))
T.append(("T16 Sensitivity of the base case (pp change from 14.74%)", tbl(["ID", "At bear value", "At bull value", "Spread"], [[t[0], "%.2f" % t[1], "%.2f" % t[2], "%.2f" % (t[2] - t[1])] for t in TOR])))
T.append(("T17 Option screen", tbl(["Option"] + [c[0] + " (" + str(int(c[1] * 100)) + "%)" for c in CRIT] + ["Score", "Why"], [[o[0]] + o[2] + ["%.2f" % o[1], o[3]] for o in SCORES])))
T.append(("T18 Option scores under three other weight sets", tbl(["Option", "Base weights"] + list(WALT), [[o[0], "%.2f" % o[1]] + ["%.2f" % SALT[k][i] for k in WALT] for i, o in enumerate(SCORES)])))
T.append(("T19 Holdout sizing: 10% of each reached pool, 80% power, 5% two-sided, organic rate 1.0%", tbl(["Lever", "Reached", "Holdout", "Expected lift, pp", "Minimum detectable, pp"],
    [[h[0], fI(h[1]), fI(h[2]), "%.2f" % h[3], "%.2f" % h[4]] for h in HOLD])))
TABLES = "\n".join("### " + t[0] + "\n\n" + t[1] for t in T)

# ---------- values for the deck (every number on a slide comes from here) ----------
b, be, bu = R["base"], R["bear"], R["bull"]
V = {"hash": HASH, "base26": fI(base26), "act26": fI(E1["act26"]), "rate26": fP(rate26 * 100, 1), "rate25": fP(rate25 * 100, 1), "ha26": fP(ha26 * 100, 1),
     "idle": fI(idle_all), "idle_l": "%.1f lakh" % (idle_all / 1e5), "sal_idle": fI(idle[4]), "sal_idle_sh": fP(idle[4] / idle_all * 100, 0), "sal_sh": fP(sh26[4] * 100, 1),
     "sal_growth": fP((N26[4] / N25[4] - 1) * 100, 0), "cc_growth": fP((N26[5] / N25[5] - 1) * 100, 0), "mix": fpp(mix * 100, 2), "rte": fpp(rte * 100, 2),
     "roll_lo": fI(roll_lo), "roll_hi": fI(roll_hi), "roll_mid": fI(roll_mid), "endbase": fI(endbase), "need200": fI(need200), "need300": fI(need300),
     "new_win": fI(new_in_window), "inc": fI(b["inc"]), "inc_bear": fI(be["inc"]), "inc_bull": fI(bu["inc"]),
     "rate_end": fP(b["rate"] * 100, 1), "rate_bear": fP(be["rate"] * 100, 1), "rate_bull": fP(bu["rate"] * 100, 1),
     "pp": fpp(b["pp"], 1), "pp_bear": fpp(be["pp"], 1), "pp_bull": fpp(bu["pp"], 1), "bps": "+%d bps" % round(b["pp"] * 100),
     "ha_end": fP(b["ha"] * 100, 1), "lev": [round(x) for x in b["lev"]], "lev_f": [fI(x) for x in b["lev"]], "warm": fI(b["warm"]), "new": fI(b["new"]),
     "rows": [[round(x) for x in r] for r in b["rows"]], "seg_tot": [round(sum(r)) for r in b["rows"]],
     "ramp": {s: [round(x, 2) for x in RAMP[s]] for s in SC}, "cash": fL(cash_total), "cash_n": round(cash_total), "internal": fL(internal),
     "cash_rows": [[k, fR(v)] for k, v in cash.items()], "cpa": fR(ECON["base"]["cpa_cash"]), "cpa_bear": fR(ECON["bear"]["cpa_cash"]), "cpa_bull": fR(ECON["bull"]["cpa_cash"]),
     "cpa_all": fR(ECON["base"]["cpa_all"]), "paid_cpa": fR(A["A61"][0]), "paid_n": fI(ECON["base"]["paid_n"]), "paid_pp": fpp(ECON["base"]["paid_pp"], 2),
     "rev_per": fR(ECON["base"]["rev_per"]), "payback": "%.0f months" % ECON["base"]["payback_m"], "rev_total": fL(ECON["base"]["rev_total"]),
     "tor": [[t[0], round(t[1], 2), round(t[2], 2)] for t in TOR], "scores": [[o[0], o[1]] for o in SCORES], "pp_n": round(b["pp"], 2),
     "seg": SEG, "n26": N26, "r26": R26, "r25": R25, "t26": T26, "t25": T25, "idle_seg": idle, "idle_seg_f": [fI(x) for x in idle],
     "sh26": [round(x * 100, 1) for x in sh26], "sh25": [round(x * 100, 1) for x in sh25], "scen_rows": [
        ["Extra actives", fI(be["inc"]), fI(b["inc"]), fI(bu["inc"])], ["Rate, 31 Jan 2027", fP(be["rate"] * 100, 1), fP(b["rate"] * 100, 1), fP(bu["rate"] * 100, 1)],
        ["Change from 14.7%", fpp(be["pp"], 1), fpp(b["pp"], 1), fpp(bu["pp"], 1)], ["Highly active (T3)", fP(be["ha"] * 100, 1), fP(b["ha"] * 100, 1), fP(bu["ha"] * 100, 1)],
        ["Cash per active", fR(ECON["bear"]["cpa_cash"]), fR(ECON["base"]["cpa_cash"]), fR(ECON["bull"]["cpa_cash"])]],
     "bau_n": fI(endbase * rate26), "spare": fI(b["inc"] - need200), "ratio": "%.1f" % (b["inc"] / ECON["base"]["paid_n"]),
     "inc_n": round(b["inc"]), "paid_nn": round(ECON["base"]["paid_n"]), "a02": round(A["A02"][0] * 100, 2), "rate_end_n": round(b["rate"] * 100, 2),
     "wf": [["30 Sep 2026", round(A["A02"][0] * 100, 2)]] + sorted([[LEV[i], round(b["lev"][i] / endbase * 100, 2)] for i in range(5)] +
           [["New accounts", round(b["new"] / endbase * 100, 2)], ["Warm cohort", round(b["warm"] / endbase * 100, 2)]], key=lambda r: -r[1]) + [["31 Jan 2027", round(b["rate"] * 100, 2)]],
     "opt": [[s, o[1], o[2]] for s, o in zip(["More market content", "First-trade offers", "Contests", "Paid media", "Referral rewards",
             "F&O education push", "Engine or app rebuild", "Bank moments (ours)"], [(x[0], x[2], x[1]) for x in SCORES])],
     "opt_s": ["%.2f" % x[1] for x in SCORES],
     "pv": [["Salary day", fP(A["A20"][0] * 100, 0), fP(A["A21"][0] * 100, 0), fP(A["A22"][0] * 100, 0), fP(A["A20"][0] * A["A21"][0] * A["A22"][0] * 100, 2)],
            ["Rediscover", fP(A["A23"][0] * 100, 0), fP(A["A24"][0] * 100, 0), fP(A["A25"][0] * 100, 0), fP(A["A23"][0] * A["A24"][0] * A["A25"][0] * 100, 2)],
            ["RM review, Elite", fP(RMCOV[1] * A["A26"][0] * 100, 0), "meeting", fP(A["A27"][0] * 100, 0), fP(RMCOV[1] * A["A26"][0] * A["A27"][0] * 100, 2)],
            ["Dhanteras", fP(A["A28"][0] * 100, 0), fP(A["A29"][0] * 100, 1), fP(A["A30"][0] * 100, 0), fP(A["A28"][0] * A["A29"][0] * A["A30"][0] * 100, 2)]],
     "arows": [[i, l, ("₹" + fI(A[i][1])) if i == "A61" else (("%.2f" % A[i][1]) if i == "A11" else fP(A[i][1] * 100, 1 if A[i][1] < 0.1 else 0)),
                ("₹" + fI(A[i][0])) if i == "A61" else (("%.2f" % A[i][0]) if i == "A11" else fP(A[i][0] * 100, 1 if A[i][0] < 0.1 else 0)),
                ("₹" + fI(A[i][2])) if i == "A61" else (("%.2f" % A[i][2]) if i == "A11" else fP(A[i][2] * 100, 1 if A[i][2] < 0.1 else 0)), c]
               for i, l, c in [("A20", "App use on salary day", "Lane F"), ("A21", "Salary-day tap-through", "Lane F"), ("A22", "First order after tap", "Lanes E, F"),
                               ("A24", "Rediscovery tap-through", "Lane F"), ("A27", "RM review to first order", "Lanes B, E"), ("A29", "Dhanteras tap-through", "Lane G"),
                               ("A10", "Idle 24 months or more", "Lanes C, D"), ("A11", "Order rate after re-KYC", "Lane D"), ("A61", "Paid cost per activation", "Lane F")]],
     "tor_l": {"A21": "Salary-day tap-through", "A27": "RM review to order", "A22": "First order after tap", "A02": "Business-as-usual drift",
               "A20": "App use on salary day", "A11": "Re-KYC friction", "A24": "Rediscovery tap-through", "A26": "RM coverage", "A29": "Dhanteras tap-through",
               "A25": "Order after rediscovery", "A39": "New-account lift", "A10": "Share idle 24 months", "A36": "Warm re-trade"}}
# ---------- extra series for the strategy and execution slides ----------
MONW = [range(0, 4), range(4, 8), range(8, 13)]
LV7 = [("Salary day", 0), ("RM review", 2), ("Rediscover", 1), ("Dhanteras", 3), ("New accounts", "New"), ("Warm cohort", "Warm"), ("Workplace", 4)]
def lev_month(r, key, mw):
    if key == "New": return r["new"] * sum(PROF["New"][w] for w in mw)
    if key == "Warm": return r["warm"] * sum(PROF["Warm"][w] for w in mw)
    return r["lev"][key] * sum(PROF[LEV[key]][w] for w in mw)
MLEV = [[round(lev_month(R["base"], k, mw)) for mw in MONW] for _, k in LV7]
eb6 = base26 + grow * (1 + 3 * 6 / W); cum6 = (RAMP["base"][5] / 100 - R["base"]["bau"] / endbase) * eb6
V["mlev"] = MLEV; V["mlev_l"] = [n for n, _ in LV7]; V["mtot"] = [fI(sum(MLEV[i][m] for i in range(7))) for m in range(3)]
V["kpi"] = [["Activation rate", fP(rate26 * 100, 1), "%.1f%%" % RAMP["base"][5], fP(R["base"]["rate"] * 100, 1)],
            ["Extra active accounts", "0", fI(cum6), fI(R["base"]["inc"])],
            ["Highly active (T3)", fP(ha26 * 100, 1), "tracked", fP(R["base"]["ha"] * 100, 1)],
            ["New actives in F&O", "n/a", "5% max", "5% max"], ["Opt-outs a send", "n/a", "0.5% max", "0.5% max"]]
V["sc"] = [[h[0], round(h[1]), round(h[3], 2), round(R["base"]["lev"][i])] for i, h in enumerate(HOLD)] +           [["Workplace", round(A["A31"][0] * A["A32"][0]), round(A["A33"][0] * idle[4] / N26[4] * 100, 2), round(R["base"]["lev"][4])]]
V["hold"] = [[h[0], round(h[3], 2), round(h[4], 2)] for h in HOLD]
V["base25_f"] = fI(base25); V["bear6"] = "%.1f%%" % RAMP["bear"][5]; V["pp_bear_n"] = round(R["bear"]["pp"], 2); V["pp_bull_n"] = round(R["bull"]["pp"], 2); V["rate25_n"] = round(rate25 * 100, 2); V["rate26_n"] = round(rate26 * 100, 2); V["new_n"] = round(R["base"]["new"]); V["warm_n"] = round(R["base"]["warm"]); t1n = round(base26 * T26[4] / 100); V["fun"] = [[fI(base26), "accounts"], [fI(E1["act26"]), "active in 12 months"], [fI(E1["ha26"]), "active in 3 months"], [fI(t1n), "last month"]]; V["fun_drop"] = [fP((1 - E1["act26"] / base26) * -100, 0), fP((1 - E1["ha26"] / E1["act26"]) * -100, 0), fP((1 - t1n / E1["ha26"]) * -100, 0)]; V["never"] = "%d" % round(100 - rate26 * 100); V["rest_n"] = fI(R["base"]["new"] + R["base"]["warm"] + R["base"]["lev"][4]); V["sh25s"] = [round(x * 100, 1) for x in sh25]; V["sh26s"] = [round(x * 100, 1) for x in sh26]
if not DRY:
    io.open(HERE / "model_outputs.json", "w", encoding="utf-8").write(json.dumps(OUTJ, indent=1, default=float, ensure_ascii=False))
    io.open(HERE / "model_tables.md", "w", encoding="utf-8").write("# Model tables (hash " + HASH + ")\n\n" + TABLES)
    d = HERE.parent / "deck"; d.mkdir(exist_ok=True)
    io.open(d / "values.json", "w", encoding="utf-8").write(json.dumps(V, ensure_ascii=False, indent=1))
    print("wrote model_outputs.json, model_tables.md, deck/values.json")
else:
    print(TABLES)
