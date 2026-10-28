# ===== ECON-ARENA SETU AI MODEL v1 =====
"""Financial, compute and environment model for Setu AI (Econ-Arena, Blisspoint'26-27, Sri Venkateswara College).
Run from the repo root:
  python -X utf8 econarena-svc/model/setu_model.py          run, check, write outputs
  python -X utf8 econarena-svc/model/setu_model.py --dry    run and print, write nothing
Every number is a model output from stated assumptions (dictionary A) and case facts (dictionary F). Nothing here is a
signed customer, a quoted price, a measured accuracy or a measured footprint. Scores in the screens are team judgement."""
import sys, json, math, hashlib, io, pathlib
DRY = "--dry" in sys.argv
MEM = None  # the planning-time harness sets this to a dict so that nothing touches the disk
try: HERE = pathlib.Path(__file__).resolve().parent
except NameError: HERE = pathlib.Path("econarena-svc/model").resolve()
M = 24; HY = ["H1", "H2", "H3", "H4"]; HYM = ["M1 to M6", "M7 to M12", "M13 to M18", "M19 to M24"]

# ---------- case facts (packet, October 2026); IDs resolve in case/01-case.md ----------
F = {"budget_cr": 50.0, "runway_lo": 18, "runway_hi": 24, "portal_lo": 65.0, "portal_hi": 92.0, "subsidy": 0.40, "gpus_mar26": 38000,
     "gpus_dec26": 100000, "mission_cr": 10372, "fm_teams": 12, "fof_cr": 10000, "rdi_cr": 100000, "mh_fund_cr": 500, "mh_grant_cr": 1.0,
     "mh_gpus": 2000, "mh_subsidy": 0.20, "mh_firms": 5000, "dpdp_pen_cr": 250, "mum_mw": 846, "mum_sh": 0.46, "pune_mw": 182, "che_mw": 320,
     "che_sh": 0.18, "hyd_new": 0.11, "ncr_mw": 191, "ncr_sh": 0.10, "use_mh": 15.5, "use_tn": 13.2, "use_ka": 12.7, "use_dl": 10.5, "gov_sh": 0.23}

# ---------- assumptions: ID -> (base, bear, bull, unit, basis). Bear is the value least favourable to the plan ----------
A = {
 "A01": (18.0, 14.0, 22.0, "₹ lakh a year", "Land contract: compliance review of every recorded collection call for one mid-sized lender (about ₹1,000 per collector a month for 150 collectors)"),
 "A02": (18.0, 14.0, 22.0, "₹ lakh a year", "Expansion: AI voice reminders, pre-due to 30 days past due, labelled as AI"),
 "A03": (0.50, 0.35, 0.65, "share", "Customers that add voice reminders once six months live"),
 "A04": (4.0, 3.0, 5.0, "₹ lakh", "Paid pilot fee for eight weeks on 500 to 2,000 hours of the lender's own recordings"),
 "A05": (0.60, 0.45, 0.75, "share", "Paid pilots that convert to an annual contract"),
 "A06": (2, 3, 2, "months", "Pilot length before the contract starts"),
 "A07": (1.0, 0.75, 1.25, "x", "Multiplier on the base pilot-start schedule (sales capacity and pipeline)"),
 "A08": (0.005, 0.010, 0.003, "a month", "Logo churn once a customer passes 12 months of tenure"),
 "A09": (1, 2, 1, "months", "Lag between revenue and cash collected (quarterly billing in advance, net 30)"),
 "A10": (4.5, 3.5, 5.5, "lakh minutes a month", "Recorded collection minutes per mid-sized lender: 150 collectors x 115 talk minutes x 26 days"),
 "A11": (60000.0, 40000.0, 80000.0, "minutes a month", "AI voice reminder minutes per voice customer"),
 "A12": (1.0, 1.0, 1.0, "lakh minutes a month", "Recorded minutes reviewed in each pilot month"),
 "A13": (6000.0, 3600.0, 7800.0, "audio minutes per GPU-hour", "Batch review throughput on one L40S at launch: speech recognition, speaker split, rule checks, model scoring"),
 "A14": (2.0, 1.5, 2.2, "x by H4", "Throughput gain by H4 from distilled speech models, int8 quantisation and batching (linear by half-year)"),
 "A15": (16.0, 10.0, 24.0, "calls per GPU", "Concurrent live voice calls one L40S serves (streaming recognition, small language model, speech synthesis)"),
 "A16": (0.50, 0.40, 0.60, "share", "Average utilisation of provisioned voice GPUs across the 8 am to 7 pm calling window"),
 "A17": (67.5, 90.0, 45.0, "₹ per GPU-hour", "L40S on the IndiaAI compute portal (bull: 12-month reserved rate)"),
 "A18": (185.0, 252.0, 111.0, "₹ per GPU-hour", "H100 on an IndiaAI-empanelled provider, reserved (bear: on demand; bull: with the 40% subsidy, shown as upside only)"),
 "A19": (1.6, 2.0, 1.3, "x", "Price multiple for months 1 to 4 on commercial Indian GPU cloud, before portal allocation"),
 "A20": (12000.0, 16000.0, 9000.0, "H100-hours", "Training and evaluation over 24 months: speech-model adaptation for Marathi, Hindi and Hinglish collections audio, small-model fine-tuning, evaluation runs"),
 "A21": (2, 3, 2, "GPUs", "Always-on L40S GPUs for development, staging and regression tests"),
 "A22": (0.45, 0.55, 0.35, "₹ per minute", "Telephony for AI voice reminder minutes (cloud telephony provider)"),
 "A23": (0.30, 0.40, 0.20, "₹ per minute", "Bought speech synthesis API for voice reminders"),
 "A24": (0.02, 0.03, 0.015, "share", "Reviewed minutes escalated to a frontier model hosted in India for a written summary"),
 "A25": (0.60, 0.80, 0.40, "₹ per escalated minute", "Frontier model cost per escalated minute (Claude on Amazon Bedrock, India inference profile)"),
 "A26": (2.5, 3.0, 2.0, "₹ lakh a month", "Platform: storage, CPU, logging, monitoring, backups in India"),
 "A27": (0.15, 0.20, 0.12, "share of CTC", "Benefits, office, laptops and software per employee"),
 "A28": (0.08, 0.10, 0.06, "share", "Salary increase from month 13"),
 "A29": (8.0, 9.0, 7.0, "₹ lakh a month", "Sales travel, lender events, CRM and sales tools"),
 "A30": (0.15, 0.15, 0.15, "share", "Partner commission on first-year contract value of partner-sourced customers"),
 "A31": (0.35, 0.25, 0.45, "share", "New customers sourced by partners (collection agencies, loan-software and dialler vendors)"),
 "A32": (1.0, 1.15, 0.9, "x", "Multiplier on the marketing programme (free call audits, readiness report, industry events, content)"),
 "A33": (2500.0, 3000.0, 2000.0, "₹ per audio hour", "Labelling and two-pass review of consented, de-identified call audio (Marathi, Hindi, Hinglish)"),
 "A34": (6000.0, 6000.0, 6000.0, "audio hours", "Labelled audio hours built over 24 months"),
 "A35": (60.0, 80.0, 45.0, "₹ lakh", "Licensed speech corpora and evaluation sets"),
 "A36": (1.0, 1.2, 0.9, "x", "Multiplier on the compliance programme (DPO, ISO/IEC 27001 and 42001, audits, testing, insurance, legal)"),
 "A37": (0.25, 0.40, 0.15, "share", "Contingency on GPU spend for failed runs, experiments and peak headroom"),
 "A40": (1.275, 1.40, 1.20, "kW per GPU", "H100 power at the server, including its share of CPU, memory and network (an 8-GPU H100 server is rated about 10.2 kW)"),
 "A41": (0.55, 0.65, 0.50, "kW per GPU", "L40S power at the server, including its share of the host"),
 "A42": (0.70, 0.80, 0.60, "share", "Average draw as a share of rated power while a GPU-hour is billed"),
 "A43": (1.50, 1.70, 1.35, "ratio", "Power usage effectiveness of the host data centre"),
 "A44": (0.71, 0.75, 0.68, "kg CO2 per kWh", "Indian grid emission factor (CEA CO2 baseline database)"),
 "A45": (0.70, 0.40, 0.90, "share", "Renewable-matched share of GPU energy reached in H4 (path 0, 0.3, 0.5, 0.7 of the H4 value scaled)"),
 "A46": (1.8, 2.5, 0.8, "litres per kWh of IT energy", "On-site water use effectiveness of the host data centre (evaporative cooling)"),
 "A47": (3.0, 3.5, 2.0, "litres per kWh", "Water consumed off-site to generate grid electricity (thermal-heavy mix)"),
 "A48": (88.0, 90.0, 86.0, "₹ per US$", "Exchange rate used only to compare global list prices"),
 "A49": (30.0, 40.0, 25.0, "₹ per audio hour", "Bought speech-to-text API price, used only in the provider comparison"),
}
def av(i, s="base"): return A[i][{"base": 0, "bear": 1, "bull": 2}[s]]

# ---------- team plan: role -> (CTC ₹ lakh a year, heads in H1, H2, H3, H4, budget line) ----------
TEAM = [
 ("Founders and leadership", 48.0, [3, 3, 3, 3], "People"),
 ("Speech and machine-learning engineers", 42.0, [5, 8, 10, 11], "People"),
 ("Platform, security and backend engineers", 30.0, [4, 6, 7, 8], "People"),
 ("Compliance rules and evaluation analysts", 18.0, [2, 3, 4, 4], "People"),
 ("Forward-deployed solution engineers", 24.0, [1, 3, 5, 7], "People"),
 ("Customer success managers", 16.0, [0, 1, 3, 4], "People"),
 ("Finance, people and administration", 18.0, [1, 2, 2, 3], "People"),
 ("Account executives (lenders)", 30.0, [1, 3, 4, 5], "Sales"),
 ("Sales development and partner managers", 14.0, [1, 2, 4, 5], "Sales"),
 ("Product marketing", 20.0, [1, 2, 2, 3], "Marketing"),
 ("Data operations lead and linguists", 12.0, [2, 3, 4, 4], "Data"),
 ("Data protection officer, counsel and security compliance", 32.0, [1, 1, 2, 2], "Compliance"),
]
PILOTS = [0, 0, 1, 1, 2, 1, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3]          # base pilot starts, months 1 to 24
MKT = [8.0, 12.0, 14.0, 14.0]                                                                # ₹ lakh a month by half-year
COMP = [4.0, 3.5, 3.5, 3.0]                                                                  # ₹ lakh a month by half-year, before people
CERT = {3: 18.0, 9: 22.0, 15: 10.0, 21: 10.0}                                                # one-off: ISO/IEC 27001, ISO/IEC 42001, surveillance audits
TRAIN_PH = [0.30, 0.30, 0.25, 0.15]                                                          # share of training hours by half-year
RE_PATH = [0.0, 0.3 / 0.7, 0.5 / 0.7, 1.0]                                                   # renewable share path, scaled to A45 in H4
LINES = ["People", "Compute", "Sales", "Marketing", "Data", "Compliance"]

MILE = {"cust": 15, "arr": 3.0, "gm": 0.70}                                                  # month-18 milestone: paying lenders, ARR ₹ Cr, gross margin
def hidx(m): return (m - 1) // 6
def run(s="base", over=None, gate=False):
    """gate=True applies the month-18 rule: if the milestone is missed, hold H4 heads at H3 levels and cut marketing and sales travel."""
    a = {k: av(k, s) for k in A}; a.update(over or {}); hold = False
    if gate:
        r0, _ = run(s, over, False); hold = r0[17]["live"] < MILE["cust"] or r0[17]["arr"] < MILE["arr"]
    starts = [p * a["A07"] for p in PILOTS]; conv = [0.0] * (M + 1); lag = int(round(a["A06"]))
    for m in range(1, M + 1):
        k = m - lag
        if k >= 1: conv[m] = starts[k - 1] * a["A05"]
    rows = []; cash = F["budget_cr"]; rev_hist = []; cohorts = []
    for m in range(1, M + 1):
        h = hidx(m); cohorts.append([m, conv[m]])
        live = 0.0; land = 0.0; voice_c = 0.0
        for c in cohorts:
            ten = m - c[0]
            surv = c[1] * (1 - a["A08"]) ** max(0, ten - 12)
            if ten >= 0: live += surv; land += surv
            if ten >= 6: voice_c += surv * a["A03"]
        running = sum(starts[max(0, m - lag): m])                       # pilots running this month
        rev = (land * a["A01"] + voice_c * a["A02"]) / 12 / 100 + running * a["A04"] / lag / 100   # ₹ Cr
        rev_hist.append(rev); lagm = int(round(a["A09"])); coll = rev_hist[m - 1 - lagm] if m - 1 - lagm >= 0 else 0.0
        # volumes (minutes a month)
        ramp = sum(c[1] * (0.5 if m - c[0] < 2 else 1.0) * (1 - a["A08"]) ** max(0, m - c[0] - 12) for c in cohorts if m - c[0] >= 0)
        qa_min = ramp * a["A10"] * 1e5 + running * a["A12"] * 1e5
        v_min = voice_c * a["A11"]
        thr = a["A13"] * (1 + (a["A14"] - 1) * h / 3)
        g_batch = qa_min / thr; g_voice = v_min / (a["A15"] * 60 * a["A16"]); g_dev = a["A21"] * 730.0
        g_h100 = a["A20"] * TRAIN_PH[h] / 6
        mult = a["A19"] if m <= 4 else 1.0
        comp_l = ((g_batch + g_voice + g_dev) * a["A17"] + g_h100 * a["A18"]) * mult * (1 + a["A37"]) / 1e5 + v_min * (a["A22"] + a["A23"]) / 1e5 \
                 + qa_min * a["A24"] * a["A25"] / 1e5 + a["A26"]                                       # ₹ lakh
        cogs = (g_batch + g_voice) * a["A17"] * mult * (1 + a["A37"]) / 1e7 + v_min * (a["A22"] + a["A23"]) / 1e7 \
               + qa_min * a["A24"] * a["A25"] / 1e7 + 0.5 * a["A26"] / 100                                   # ₹ Cr, cost of revenue
        sal = 1 + (a["A28"] if m >= 13 else 0.0); cut = hold and h == 3; hh = 2 if cut else h
        team = {l: 0.0 for l in LINES}; heads = 0
        for role, ctc, hc, line in TEAM:
            team[line] += hc[hh] * ctc * sal * (1 + a["A27"]) / 12; heads += hc[hh]
        new_logos = conv[m]
        sales_l = team["Sales"] + a["A29"] * (0.75 if cut else 1.0) + new_logos * a["A31"] * a["A30"] * a["A01"]
        mkt_l = team["Marketing"] + MKT[h] * a["A32"] * (0.6 if cut else 1.0)
        data_l = team["Data"] + a["A33"] * a["A34"] / M / 1e5 + (a["A35"] if m == 3 else 0.0)
        comp_line = team["Compliance"] + (COMP[h] + CERT.get(m, 0.0)) * a["A36"]
        lines = {"People": team["People"] / 100, "Compute": comp_l / 100, "Sales": sales_l / 100, "Marketing": mkt_l / 100,
                 "Data": data_l / 100, "Compliance": comp_line / 100}
        spend = sum(lines.values()); cash = cash + coll - spend
        energy_it = (g_h100 * a["A40"] + (g_batch + g_voice + g_dev) * a["A41"]) * a["A42"]       # kWh at the IT load
        energy = energy_it * a["A43"]; re = a["A45"] * RE_PATH[h]
        rows.append(dict(m=m, h=h, starts=starts[m - 1], conv=conv[m], live=live, voice=voice_c, running=running, rev=rev, coll=coll, cogs=cogs,
                         lines=lines, spend=spend, cash=cash, heads=heads, qa_min=qa_min, v_min=v_min, g_batch=g_batch, g_voice=g_voice,
                         g_dev=g_dev, g_h100=g_h100, thr=thr, e_it=energy_it, e=energy, re=re, co2_loc=energy * a["A44"] / 1000,
                         co2_mkt=energy * a["A44"] * (1 - re) / 1000, w_on=energy_it * a["A46"], w_off=energy * a["A47"] * (1 - re),
                         arr=(land * a["A01"] + voice_c * a["A02"]) / 100))
    return rows, a

def summary(rows, a):
    hy = []
    for h in range(4):
        r = [x for x in rows if x["h"] == h]
        hy.append(dict(cust=r[-1]["live"], pil=sum(x["starts"] for x in r), rev=sum(x["rev"] for x in r), coll=sum(x["coll"] for x in r),
                       spend=sum(x["spend"] for x in r), lines={l: sum(x["lines"][l] for x in r) for l in LINES}, cash=r[-1]["cash"],
                       arr=r[-1]["arr"], heads=r[-1]["heads"], qa=sum(x["qa_min"] for x in r), vm=sum(x["v_min"] for x in r),
                       gb=sum(x["g_batch"] for x in r), gv=sum(x["g_voice"] for x in r), gd=sum(x["g_dev"] for x in r), gh=sum(x["g_h100"] for x in r),
                       e=sum(x["e"] for x in r), e_it=sum(x["e_it"] for x in r), co2l=sum(x["co2_loc"] for x in r), co2m=sum(x["co2_mkt"] for x in r),
                       won=sum(x["w_on"] for x in r), woff=sum(x["w_off"] for x in r), re=r[-1]["re"], thr=r[-1]["thr"]))
    last = rows[-6:]; net = sum(x["spend"] - x["coll"] for x in last) / 6; gross = sum(x["spend"] for x in last) / 6
    cash24 = rows[-1]["cash"]
    return dict(hy=hy, cash24=cash24, net_burn=net, gross_burn=gross, runway_net=cash24 / net if net > 0 else 99.0, runway_gross=cash24 / gross,
                min_cash=min(x["cash"] for x in rows), cust24=rows[-1]["live"], arr24=rows[-1]["arr"], arr18=rows[17]["arr"], cust18=rows[17]["live"],
                spend24=sum(x["spend"] for x in rows), rev24=sum(x["rev"] for x in rows), coll24=sum(x["coll"] for x in rows),
                lines={l: sum(x["lines"][l] for x in rows) for l in LINES}, logos=sum(x["conv"] for x in rows), pilots=sum(x["starts"] for x in rows),
                gm_h4=gm(rows, a, 3), gm_h3=gm(rows, a, 2))
def gm(rows, a, h):
    """gross margin in a half-year: revenue less cost of revenue (inference GPUs, telephony, bought speech, escalations, half the
    platform) and customer success, over revenue. Training and development GPUs are research cost, not cost of revenue."""
    r = [x for x in rows if x["h"] == h]; rev = sum(x["rev"] for x in r); comp = sum(x["cogs"] for x in r)
    cs = [t for t in TEAM if t[0].startswith("Customer success")][0]; sal = 1 + (a["A28"] if h >= 2 else 0.0)
    csc = cs[2][h] * cs[1] * sal * (1 + a["A27"]) / 12 * 6 / 100
    return (rev - comp - csc) / rev if rev > 0 else 0.0

# ---------- formatting (Indian digit grouping; no dashes; minus sign is U+2212) ----------
def ig(v):
    neg = v < 0; s = str(int(round(abs(v))))
    if len(s) > 3:
        last = s[-3:]; rest = s[:-3]; parts = []
        while len(rest) > 2: parts.insert(0, rest[-2:]); rest = rest[:-2]
        if rest: parts.insert(0, rest)
        s = ",".join(parts) + "," + last
    return ("−" if neg else "") + s
def cr(v, d=1): return ("−" if v < 0 else "") + "₹" + ("%." + str(d) + "f") % abs(v) + " Cr"
def lk(v, d=0): return "₹" + ("%." + str(d) + "f") % v + " lakh"
def pc(v, d=0): return ("%." + str(d) + "f") % (100 * v) + "%"

# ---------- runs ----------
RB, AB = run("base"); SB = summary(RB, AB)
RBE, ABE = run("bear"); SBE = summary(RBE, ABE)
RBU, ABU = run("bull"); SBU = summary(RBU, ABU)
RBG, ABG = run("bear", gate=True); SBG = summary(RBG, ABG)

# ---------- budget: the ₹50 crore split; reserve is what the 24-month plan does not spend ----------
ALLOC = [(l, round(SB["lines"][l], 1)) for l in LINES]
ALLOC.append(("Reserve", round(F["budget_cr"] - sum(v for _, v in ALLOC), 1)))
ALLOC_SUM = round(sum(v for _, v in ALLOC), 1)

# ---------- screens (team judgement 1 to 5, evidence in research sections 6 to 9) ----------
IND_C = [("AI maturity", 0.25), ("Regulatory pull to 2027", 0.20), ("Budget per buyer", 0.20), ("Data access", 0.10), ("Room versus rivals", 0.15), ("Sales-cycle speed", 0.10)]
IND = [("Banking and financial services (lenders)", [5, 5, 4, 2, 3, 3]), ("Media and entertainment", [4, 4, 2, 3, 3, 4]),
       ("Telecom", [4, 3, 4, 3, 2, 2]), ("Retail", [4, 2, 3, 3, 3, 4]), ("IT services and GCCs", [4, 2, 4, 4, 1, 3]),
       ("Manufacturing", [4, 1, 3, 2, 4, 2]), ("Healthcare", [1, 3, 2, 1, 4, 1])]
REG_C = [("Data-centre capacity", 0.25), ("AI use signal", 0.20), ("Lender head offices", 0.25), ("Room versus AI vendors", 0.15), ("State AI policy", 0.15)]
REG = [("West", [5, 4, 5, 3, 5]), ("South", [3, 5, 3, 1, 3]), ("North", [2, 3, 3, 3, 2]), ("East", [1, 1, 2, 4, 2])]
OPT_C = [("Fits ₹50 Cr", 0.25), ("Revenue by month 24", 0.25), ("Defensible", 0.20), ("Uses state support", 0.10), ("Light on compute", 0.10), ("Builds trust", 0.10)]
OPT = [("Train an Indic foundation model", [1, 1, 2, 3, 1, 3]), ("Sell a general Indic language API", [2, 2, 1, 3, 2, 2]),
       ("Voice agents for every industry", [3, 3, 1, 2, 3, 2]), ("AI services and consulting", [4, 4, 1, 1, 5, 2]),
       ("Compliance-grade collections AI for lenders", [5, 4, 4, 4, 4, 5])]
def wsc(sc, cr_): return round(sum(s * w for s, (_, w) in zip(sc, cr_)), 2)
IND_S = [(n, sc, wsc(sc, IND_C)) for n, sc in IND]; REG_S = [(n, sc, wsc(sc, REG_C)) for n, sc in REG]; OPT_S = [(n, sc, wsc(sc, OPT_C)) for n, sc in OPT]
PAIR = [[round(i[2] * r[2] / 5, 2) for r in REG_S] for i in IND_S]

# ---------- competitors: Yes, Part, No (team reading of public material, October 2026; Lane E verifies every cell) ----------
CAPS = ["Indic speech", "Collections focus", "Call compliance review", "Evidence mapped to RBI, DPDP, IT Rules", "Hosted in India", "Mid-market price", "Mumbai-Pune team"]
RIVALS = [("Sarvam AI", ["Yes", "Part", "No", "No", "Yes", "Yes", "Part"]), ("Gnani.ai", ["Yes", "Yes", "Part", "No", "Yes", "Part", "Part"]),
          ("Krutrim", ["Part", "No", "No", "No", "Yes", "Yes", "No"]), ("BharatGen", ["Part", "No", "No", "No", "Yes", "No", "Part"]),
          ("Soket AI Labs", ["Part", "No", "No", "No", "Yes", "No", "No"]), ("Fractal", ["Part", "Part", "Part", "Part", "Yes", "No", "Yes"]),
          ("Tech Mahindra", ["Part", "Part", "Part", "Part", "Yes", "No", "Yes"]), ("Yellow.ai", ["Part", "Part", "No", "No", "Part", "Part", "No"]),
          ("Haptik", ["Part", "Part", "No", "No", "Yes", "Part", "Yes"]), ("Uniphore", ["Part", "Part", "Yes", "Part", "Part", "No", "No"]),
          ("Convin", ["Part", "Yes", "Yes", "Part", "Yes", "Yes", "No"]), ("Credgenics", ["Part", "Yes", "Part", "Part", "Yes", "Part", "Part"]),
          ("Large IT services", ["Part", "Part", "Part", "Part", "Yes", "No", "Yes"]), ("Global AI labs", ["Part", "No", "No", "No", "Part", "No", "No"]),
          ("Setu AI, month 24 target", ["Yes", "Yes", "Yes", "Yes", "Yes", "Yes", "Yes"])]
def ynp(v): return {"Yes": 2, "Part": 1, "No": 0}[v]
RIV_S = [(n, c, sum(ynp(v) for v in c)) for n, c in RIVALS]

# ---------- moats and weak advantages (months are team estimates; research section 16) ----------
MOATS = [("Labelled collections-call corpus, Marathi, Hindi, Hinglish", 6, 18, "6,000 labelled hours by month 24 under lender contracts; a rival needs the same lender access"),
         ("Evidence history inside each lender's audit file", 4, 15, "12 months of call evidence and dialler and loan-system links make switching costly"),
         ("Partner channel of collection agencies and loan-software vendors", 3, 12, "agencies resell; Maharashtra's 20% MSME subsidy lowers their price")]
WEAK = [("Indic speech accuracy", 6, "Sarvam, Gnani, open models improve"), ("Voice reminder price", 3, "Sarvam lists ₹3.00 to ₹3.50 a minute"),
        ("Hosting in India", 3, "Claude runs in India on Bedrock"), ("Rule checklist", 6, "Convin already flags call breaches"),
        ("Dashboards", 2, "any rival with engineers")]

# ---------- market: bottom-up by counted lenders (Lane D verifies counts; minutes a month per lender in lakh) ----------
# (segment, lenders in India, share headquartered in the West, recorded minutes a month per lender in lakh, share of minutes we can reach, in SAM)
MKT_SEG = [("Middle-layer NBFCs and HFCs with call teams", 400, 0.35, 3.0, 1.0, True), ("Small finance banks", 11, 0.25, 8.0, 1.0, True),
           ("Urban co-operative banks with call teams", 300, 0.45, 0.8, 1.0, True),
           ("Agency-handled minutes of banks and upper-layer NBFCs", 50, 0.40, 45.0, 0.5, True),
           ("In-house minutes of banks and upper-layer NBFCs", 50, 0.40, 45.0, 0.5, False)]
PRICE_MIN = av("A01") * 1e5 / (av("A10") * 1e5 * 12)                                          # ₹ per reviewed minute implied by the land contract
VOICE_MIN = av("A02") * 1e5 / (av("A11") * 12)                                                # ₹ per voice minute implied by the voice contract
VOICE_SH = 0.15                                                                                # share of minutes that AI voice reminders can carry
VAL_MIN = PRICE_MIN + VOICE_SH * VOICE_MIN                                                     # ₹ a minute: review every minute, voice on 15% of them
def seg_value(cnt, mins, reach): return cnt * mins * reach * 1e5 * 12 * VAL_MIN / 1e7          # ₹ Cr a year
TAM = sum(seg_value(c, mi, rch) for _, c, _, mi, rch, _ in MKT_SEG)
SAM = sum(seg_value(c * w, mi, rch) for _, c, w, mi, rch, s in MKT_SEG if s)
SAM_LOGOS = sum(c * w for n, c, w, mi, rch, s in MKT_SEG if s and not n.startswith("Agency"))
SOM = SB["arr24"]

# ---------- the model-first alternative (illustrative assumptions B01 to B09, research section 13) ----------
B = {"B01": (25, "researchers at ₹55 lakh"), "B02": (15, "engineers at ₹30 lakh"), "B03": (8e9, "parameters"), "B04": (1.5e12, "training tokens"),
     "B05": (989e12, "H100 dense BF16 FLOP/s"), "B06": (0.38, "model FLOP utilisation"), "B07": (2, "full training runs plus 30% ablations"),
     "B08": (6.0, "₹ Cr for Indic text and speech data"), "B09": (5.0, "₹ lakh a month of API revenue from month 13, growing 15% a month")}
def model_first():
    flops = 6 * B["B03"][0] * B["B04"][0]; h_run = flops / (B["B05"][0] * B["B06"][0]) / 3600
    h_tot = h_run * B["B07"][0] * 1.3 + 20000; cash = F["budget_cr"]; path = []; out = None
    ppl = (B["B01"][0] * 55 + B["B02"][0] * 30) * (1 + av("A27")) / 12 / 100
    for m in range(1, M + 13):
        spend = ppl * (1 + (av("A28") if m >= 13 else 0)) + (h_tot * av("A18") / 1e7 / 18 if m <= 18 else 0.02) + (B["B08"][0] / 12 if m <= 12 else 0) \
                + (0.30 if m >= 10 else 0.05) + 0.06
        rev = B["B09"][0] * 1.15 ** (m - 13) / 100 if m >= 13 else 0.0
        cash += rev - spend; path.append(cash)
        if out is None and cash <= 0: out = m
    return dict(h_run=h_run, h_tot=h_tot, path=path, out=out, cash24=path[23], arr24=B["B09"][0] * 1.15 ** 11 * 12 / 100)
MF = model_first()

# ---------- provider choice: the same 24-month workload priced on five routes (research section 18) ----------
def workload(rows): return dict(h100=sum(x["g_h100"] for x in rows), l40=sum(x["g_batch"] + x["g_voice"] + x["g_dev"] for x in rows),
                                qa=sum(x["qa_min"] for x in rows), vm=sum(x["v_min"] for x in rows))
WL = workload(RB)
PROV = [("IndiaAI portal, Mumbai (ours)", av("A18"), av("A17"), 6, 1.50, 0.20, "Yes"),
        ("Indian GPU cloud, on demand", av("A18") * av("A19"), av("A17") * av("A19"), 1, 1.50, 0.20, "Yes"),
        ("Hyperscaler, Mumbai, list", 4.5 * av("A48"), 1.8 * av("A48"), 1, 1.20, 0.60, "Yes"),
        ("Speech and model APIs only", None, None, 0, 1.30, 0.40, "Part"),
        ("Own GPUs (not allowed)", None, None, 26, 1.50, 0.20, "Yes")]
def prov_row(p):
    name, ph, pl, wk, pue, re, res = p
    if name.startswith("Speech"):
        cost = (WL["qa"] / 60 * av("A49") + WL["vm"] * 3.25) / 1e7
    elif ph is None: cost = None
    else: cost = (WL["h100"] * ph + WL["l40"] * pl) * (1 + av("A37")) / 1e7
    e = (WL["h100"] * av("A40") + WL["l40"] * av("A41")) * av("A42") * pue
    return dict(name=name, cost=cost, weeks=wk, pue=pue, re=re, res=res, co2=e * av("A44") * (1 - re) / 1000)
PROV_S = [prov_row(p) for p in PROV]

# ---------- tornado: runway at month 24 (months), one input at a time to its bear and bull value ----------
TOR_K = ["A05", "A07", "A01", "A03", "A02", "A09", "A27", "A13", "A17", "A20"]
def runway_of(s="base", over=None): r, a = run(s, over); return summary(r, a)["runway_net"]
TOR = sorted([(k, A[k][4], runway_of("base", {k: av(k, "bear")}), runway_of("base", {k: av(k, "bull")})) for k in TOR_K],
             key=lambda t: -abs(t[3] - t[2]))

# ---------- environment: 24-month totals and intensity ----------
ENV = dict(e=sum(x["e"] for x in RB), e_it=sum(x["e_it"] for x in RB), co2l=sum(x["co2_loc"] for x in RB), co2m=sum(x["co2_mkt"] for x in RB),
           won=sum(x["w_on"] for x in RB), woff=sum(x["w_off"] for x in RB))
def wh_per_k(h):
    r = [x for x in RB if x["h"] == h]; qa = sum(x["qa_min"] for x in r)
    e = sum(x["g_batch"] for x in r) * av("A41") * av("A42") * av("A43")
    return 1000 * e / qa * 1000 if qa else 0.0                                                  # Wh per 1,000 reviewed minutes
INT = [wh_per_k(h) for h in range(4)]
TARGETS = [("Wh per 1,000 minutes", "%.0f Wh" % INT[0], "%.0f Wh" % INT[3], "distil, quantise, batch"),
           ("Renewable-matched share", "0%", pc(av("A45")), "renewable contracts"),
           ("PUE and water disclosed", "PUE 1.50", "1.50 at most", "publishing hosts only")]

# ---------- government support: base case uses none of the grants; upside only ----------
GOV = [("IndiaAI compute portal (needs DPIIT recognition)", "Base: portal rates of ₹65 to ₹92 a GPU-hour", "used"),
       ("IndiaAI extra subsidy of up to 40%", cr(0.40 * (WL["h100"] * av("A18") + WL["l40"] * av("A17")) / 1e7, 2) + " of GPU spend", "upside only"),
       ("Maharashtra incubator grant", "up to ₹1 Cr", "upside only"),
       ("Maharashtra 20% AI subsidy for 5,000 MSMEs", "cuts price for collection agencies, our partner channel", "channel lever"),
       ("Startup India Fund of Funds 2.0", "Series A via SEBI-registered funds after month 18", "next round"),
       ("RDI scheme, ₹1 lakh Cr", "suited to later-stage deep tech; not before month 24", "not used"),
       ("IndiaAI foundation-model support", "12 teams already chosen; we do not train a base model", "not pursued")]

# ---------- checks ----------
CHECKS = []
def chk(name, ok): CHECKS.append((name, bool(ok))); print(("PASS " if ok else "FAIL ") + name)
chk("budget split sums to ₹50.0 Cr", abs(ALLOC_SUM - 50.0) < 1e-9)
chk("reserve at least 15% of the budget", ALLOC[-1][1] >= 7.5)
chk("cash stays positive to month 24 in base, bear and bull", min(SB["min_cash"], SBE["min_cash"], SBU["min_cash"]) > 0)
chk("half-year spend adds to the 24-month total", abs(sum(h["spend"] for h in SB["hy"]) - SB["spend24"]) < 1e-9)
chk("line totals add to total spend", abs(sum(SB["lines"].values()) - SB["spend24"]) < 1e-9)
chk("base clears the month-18 milestone", SB["cust18"] >= MILE["cust"] and SB["arr18"] >= MILE["arr"] and SB["gm_h3"] >= MILE["gm"])
chk("base runway at month 24 at least 6 months", SB["runway_net"] >= 6)
chk("bear with the month-18 cuts keeps at least 6 months of runway", SBG["runway_net"] >= 6)
chk("industry screen picks lenders and region screen picks West", max(IND_S, key=lambda t: t[2])[0].startswith("Banking") and max(REG_S, key=lambda t: t[2])[0] == "West")
chk("option screen picks compliance-grade collections AI", max(OPT_S, key=lambda t: t[2])[0].startswith("Compliance"))
chk("energy by type adds to total", abs(ENV["e"] - sum(h["e"] for h in SB["hy"])) < 1e-6)
chk("model-first route runs out of cash before month 24", MF["out"] is not None and MF["out"] <= 24)
CHECKS_OK = sum(1 for _, ok in CHECKS if ok)

# ---------- unit economics (base) ----------
SM24 = SB["lines"]["Sales"] + SB["lines"]["Marketing"]; CAC = SM24 / SB["logos"]                # ₹ Cr per new customer
ACV24 = SB["arr24"] / SB["cust24"]; CHURN_Y = 1 - (1 - av("A08")) ** 12; LIFE = min(5.0, 1 / CHURN_Y)
PAYBACK = CAC / (ACV24 / 12 * SB["gm_h4"]); LTV = ACV24 * SB["gm_h4"] * LIFE; LTVCAC = LTV / CAC
GPU_RS = (WL["h100"] * av("A18") + WL["l40"] * av("A17")) * (1 + av("A37")) / 1e7              # ₹ Cr of GPU rental in 24 months
H100_EQ = F["budget_cr"] * 1e7 / av("A18")                                                     # H100-hours the whole budget would rent

# ---------- outputs ----------
OUT = dict(alloc=ALLOC, hy=[{k: (v if not isinstance(v, float) else round(v, 4)) for k, v in h.items() if k != "lines"} | {"lines": {l: round(v, 4) for l, v in h["lines"].items()}} for h in SB["hy"]],
           base={k: round(v, 4) for k, v in SB.items() if isinstance(v, float)}, bear={k: round(v, 4) for k, v in SBE.items() if isinstance(v, float)},
           bull={k: round(v, 4) for k, v in SBU.items() if isinstance(v, float)}, bear_gate={k: round(v, 4) for k, v in SBG.items() if isinstance(v, float)},
           ind=IND_S, reg=REG_S, opt=OPT_S, pair=PAIR, tam=round(TAM, 2), sam=round(SAM, 2), som=round(SOM, 2),
           mf={k: (round(v, 2) if isinstance(v, float) else v) for k, v in MF.items() if k != "path"}, env={k: round(v, 2) for k, v in ENV.items()},
           intensity=[round(v, 1) for v in INT], tornado=[(k, round(lo, 2), round(hi, 2)) for k, _, lo, hi in TOR],
           prov=[{k: (round(v, 2) if isinstance(v, float) else v) for k, v in p.items()} for p in PROV_S], checks=CHECKS_OK)
HASH = hashlib.sha1(json.dumps(OUT, sort_keys=True, ensure_ascii=False).encode()).hexdigest()[:10]
print("CHECKS %d/%d HASH %s" % (CHECKS_OK, len(CHECKS), HASH))
print("FINDINGS", cr(SB["cash24"]), "%.1f months" % SB["runway_net"], ig(SB["cust24"]), cr(SB["arr24"]), cr(SB["spend24"]), "%.1f t" % ENV["co2l"],
      "%.1f MWh" % (ENV["e"] / 1000), "month %s" % MF["out"])

# ---------- tables for the research document (Appendix B) ----------
TOR_LBL = {"A05": "Pilot conversion", "A07": "Pilot starts", "A01": "Land contract value", "A03": "Voice attach rate", "A02": "Voice contract value",
           "A09": "Cash collection lag", "A27": "Overhead on salaries", "A13": "Review throughput", "A17": "L40S price", "A20": "Training GPU-hours"}
WHAT = {"People": "engineering, delivery, customer success and administration", "Compute": "GPU rent, telephony, bought speech, escalations, platform",
        "Sales": "account executives, partner managers, travel, partner commission", "Marketing": "free call audits, readiness report, events, content",
        "Data": "labelling 6,000 audio hours, licensed corpora, data operations", "Compliance": "DPO, counsel, ISO/IEC 27001 and 42001, audits, insurance",
        "Reserve": "untouched in the plan: incident, delayed Series A, bear case"}
def fmt(v):
    if isinstance(v, float): s = ("%.2f" % v).rstrip("0").rstrip(".") if abs(v) < 1000 else ig(v); return s.replace("-", "−")
    return str(v)
TB = []
def table(tid, title, heads, rows, note=""):
    TB.append("## %s. %s\n\n| %s |\n|%s|\n%s\n%s" % (tid, title, " | ".join(heads), "|".join(["---"] * len(heads)),
              "\n".join("| " + " | ".join(fmt(c) for c in r) + " |" for r in rows), ("\n" + note + "\n") if note else ""))
table("T1", "Assumptions register (bear is the value least favourable to the plan)", ["ID", "Assumption", "Base", "Bear", "Bull", "Unit"],
      [[k, v[4], v[0], v[1], v[2], v[3]] for k, v in A.items()])
table("T2", "Case facts used by the model", ["Key", "Value"], [[k, v] for k, v in F.items()])
table("T3", "Industry screen, weighted (team judgement, 1 to 5)", ["Industry"] + ["%s (%.2f)" % c for c in IND_C] + ["Score"], [[n] + s + [w] for n, s, w in IND_S])
table("T4", "Region screen, weighted (team judgement, 1 to 5; evidence from the case table)", ["Region"] + ["%s (%.2f)" % c for c in REG_C] + ["Score"], [[n] + s + [w] for n, s, w in REG_S])
table("T5", "Industry and region pairs (industry score x region score / 5)", ["Industry"] + [r[0] for r in REG_S], [[IND_S[i][0]] + PAIR[i] for i in range(len(IND_S))])
table("T6", "Five strategic routes under one test (team judgement, 1 to 5)", ["Route"] + ["%s (%.2f)" % c for c in OPT_C] + ["Score"], [[n] + s + [w] for n, s, w in OPT_S])
table("T7", "Month by month, base case (₹ Cr; customers are expected values)", ["Month", "Pilots started", "New customers", "Live customers", "Revenue", "Cash in", "Spend", "Cash at end", "Heads"],
      [[x["m"], x["starts"], round(x["conv"], 2), round(x["live"], 2), round(x["rev"], 3), round(x["coll"], 3), round(x["spend"], 3), round(x["cash"], 2), x["heads"]] for x in RB])
table("T8", "Financial sketch by half-year, base case (₹ Cr)", ["Item"] + HYM + ["24 months"],
      [["Paying customers at end"] + [round(h["cust"], 1) for h in SB["hy"]] + [round(SB["cust24"], 1)],
       ["Pilots started"] + [h["pil"] for h in SB["hy"]] + [SB["pilots"]], ["Revenue"] + [round(h["rev"], 2) for h in SB["hy"]] + [round(SB["rev24"], 2)],
       ["Cash collected"] + [round(h["coll"], 2) for h in SB["hy"]] + [round(SB["coll24"], 2)]] +
      [[l] + [round(h["lines"][l], 2) for h in SB["hy"]] + [round(SB["lines"][l], 2)] for l in LINES] +
      [["Total spend"] + [round(h["spend"], 2) for h in SB["hy"]] + [round(SB["spend24"], 2)], ["Cash at end"] + [round(h["cash"], 2) for h in SB["hy"]] + [round(SB["cash24"], 2)],
       ["ARR at end"] + [round(h["arr"], 2) for h in SB["hy"]] + [round(SB["arr24"], 2)], ["Heads at end"] + [h["heads"] for h in SB["hy"]] + [SB["hy"][3]["heads"]]],
      "Runway at month 24 = cash at month 24 / average net burn of months 19 to 24 = %.2f / %.3f = %.1f months (gross: %.1f months)." % (SB["cash24"], SB["net_burn"], SB["runway_net"], SB["runway_gross"]))
table("T9", "The ₹50 crore split (24-month plan; reserve is not spent)", ["Line", "₹ Cr", "Share", "What it buys"], [[l, v, pc(v / 50), WHAT[l]] for l, v in ALLOC] + [["Total", ALLOC_SUM, "100%", ""]])
table("T10", "Team plan (heads at the end of each half-year; CTC ₹ lakh a year)", ["Role", "CTC", "H1", "H2", "H3", "H4", "Budget line"], [[r, c, *h, l] for r, c, h, l in TEAM])
table("T11", "Unit economics, base case", ["Measure", "Value", "How"], [["Average contract value at month 24", lk(ACV24 * 100, 1), "ARR / customers"],
      ["Customer acquisition cost", lk(CAC * 100, 1), "sales and marketing over 24 months / new customers"], ["Gross margin, H4", pc(SB["gm_h4"]), "revenue less cost of revenue and customer success"],
      ["Payback", "%.1f months" % PAYBACK, "CAC / (monthly contract value x gross margin)"], ["Lifetime value to CAC", "%.1fx" % LTVCAC, "ACV x margin x min(5, 1 / annual churn), over CAC"]])
table("T12", "Compute workload by half-year, base case", ["Item"] + HYM, [["Reviewed minutes (lakh)"] + [round(h["qa"] / 1e5, 1) for h in SB["hy"]], ["Voice minutes (lakh)"] + [round(h["vm"] / 1e5, 2) for h in SB["hy"]],
      ["H100-hours (training)"] + [round(h["gh"]) for h in SB["hy"]], ["L40S-hours (batch review)"] + [round(h["gb"]) for h in SB["hy"]], ["L40S-hours (live voice)"] + [round(h["gv"]) for h in SB["hy"]],
      ["L40S-hours (development)"] + [round(h["gd"]) for h in SB["hy"]], ["Review throughput, minutes per GPU-hour"] + [round(h["thr"]) for h in SB["hy"]]])
table("T13", "The same 24-month workload on five compute routes", ["Route", "₹ Cr", "Weeks to start", "PUE", "Renewable share", "Data in India", "t CO2e"],
      [[p["name"], "n/a" if p["cost"] is None else round(p["cost"], 2), p["weeks"], p["pue"], pc(p["re"]), p["res"], round(p["co2"], 1)] for p in PROV_S])
table("T14", "Energy, carbon and water by half-year, base case", ["Item"] + HYM + ["24 months"],
      [["Facility energy, MWh"] + [round(h["e"] / 1000, 1) for h in SB["hy"]] + [round(ENV["e"] / 1000, 1)],
       ["Carbon, location-based, t CO2e"] + [round(h["co2l"], 1) for h in SB["hy"]] + [round(ENV["co2l"], 1)],
       ["Renewable-matched share at end"] + [pc(h["re"]) for h in SB["hy"]] + [""],
       ["Carbon, market-based, t CO2e"] + [round(h["co2m"], 1) for h in SB["hy"]] + [round(ENV["co2m"], 1)],
       ["Water on site, kL"] + [round(h["won"] / 1000, 1) for h in SB["hy"]] + [round(ENV["won"] / 1000, 1)],
       ["Water off site, kL"] + [round(h["woff"] / 1000, 1) for h in SB["hy"]] + [round(ENV["woff"] / 1000, 1)],
       ["Wh per 1,000 reviewed minutes (batch)"] + [round(v) for v in INT] + [""]])
table("T15", "Three measurable environmental targets", ["Target", "Month 6", "Month 24", "How"], [list(t) for t in TARGETS])
SC = [("Base", SB), ("Bear", SBE), ("Bear with the month-18 cuts", SBG), ("Bull", SBU)]
table("T16", "Scenarios (every assumption at its base, bear or bull value)", ["Measure"] + [n for n, _ in SC],
      [["Paying lenders at month 24"] + [round(s["cust24"], 1) for _, s in SC], ["ARR at month 24, ₹ Cr"] + [round(s["arr24"], 2) for _, s in SC],
       ["Spend over 24 months, ₹ Cr"] + [round(s["spend24"], 2) for _, s in SC], ["Cash at month 24, ₹ Cr"] + [round(s["cash24"], 2) for _, s in SC],
       ["Runway at month 24, months"] + [round(s["runway_net"], 1) for _, s in SC], ["Lowest cash, ₹ Cr"] + [round(s["min_cash"], 2) for _, s in SC]])
table("T17", "Runway at month 24: one input at a time to its bear and bull value (base %.1f months)" % SB["runway_net"], ["ID", "Input", "Bear", "Bull"],
      [[k, TOR_LBL[k], round(lo, 1), round(hi, 1)] for k, _, lo, hi in TOR])
table("T18", "Same ₹50 crore: training a base model against our plan (illustrative B01 to B09)", ["Measure", "Model-first", "Our plan"],
      [["H100-hours to train", ig(MF["h_tot"]), ig(WL["h100"])], ["Cash at month 24, ₹ Cr", round(MF["cash24"], 2), round(SB["cash24"], 2)],
       ["Month cash runs out", MF["out"], "after month %d" % (24 + int(SB["runway_net"]))], ["ARR at month 24, ₹ Cr", round(MF["arr24"], 2), round(SB["arr24"], 2)]],
      "FLOPs per run = 6 x parameters x tokens = 6 x %.0e x %.1e; hours per run = FLOPs / (989 TFLOP/s x %.2f) / 3,600 = %s." % (B["B03"][0], B["B04"][0], B["B06"][0], ig(MF["h_run"])))
table("T19", "Market sized bottom-up from counted lenders (₹ Cr a year)", ["Segment", "Lenders", "West share", "Minutes a month (lakh)", "Reach", "In SAM", "India value", "West value"],
      [[n, c, pc(w), mi, pc(r), "yes" if s else "no", round(seg_value(c, mi, r), 1), round(seg_value(c * w, mi, r), 1)] for n, c, w, mi, r, s in MKT_SEG],
      "Value a minute = ₹%.3f review + %.0f%% x ₹%.2f voice = ₹%.3f. TAM ₹%.0f Cr, SAM ₹%.0f Cr (%s West lenders), SOM ₹%.1f Cr (month-24 ARR)." % (PRICE_MIN, VOICE_SH * 100, VOICE_MIN, VAL_MIN, TAM, SAM, ig(SAM_LOGOS), SOM))
table("T20", "Competitor capability matrix (team reading of public material; Lane E verifies)", ["Player"] + CAPS + ["Score of 14"], [[n] + c + [s] for n, c, s in RIV_S])
table("T21", "Moats and weak advantages", ["Advantage", "Start month", "Months to build", "Why it holds or fails"], [[n, s, b, w] for n, s, b, w in MOATS] + [[n, "", "copied in %d months" % mo, w] for n, mo, w in WEAK])
table("T22", "Government support: the base case books none of the grants", ["Scheme", "What it is worth to us", "Treatment"], [list(g) for g in GOV])
table("T23", "Model checks", ["Check", "Result"], [[n, "PASS" if ok else "FAIL"] for n, ok in CHECKS])

# ---------- values for the deck (every number on a slide comes from here) ----------
ASHORT = {"A01": "Land contract, ₹ lakh a year", "A05": "Pilots that convert", "A07": "Pilot starts, x the base plan",
          "A10": "Recorded minutes per lender, lakh a month", "A13": "Review minutes per L40S-hour at launch", "A15": "Live calls on one L40S",
          "A17": "L40S, ₹ a GPU-hour", "A18": "H100, ₹ a GPU-hour", "A43": "Data-centre PUE", "A44": "Grid factor, kg CO2 per kWh",
          "A45": "Renewable-matched share by H4", "A46": "On-site water, litres per kWh"}
def r1(v): return round(v, 1)
V = dict(hash=HASH, checks="%d of %d" % (CHECKS_OK, len(CHECKS)), cash24=cr(SB["cash24"]), runway="%.1f months" % SB["runway_net"], runway_n=r1(SB["runway_net"]),
         cust24=ig(SB["cust24"]), arr24=cr(SB["arr24"]), spend24=cr(SB["spend24"]), rev24=cr(SB["rev24"]), reserve=cr(ALLOC[-1][1]), cust18=ig(SB["cust18"]), arr18=cr(SB["arr18"]),
         alloc=[[l, "%.1f" % v, pc(v / 50), WHAT[l]] for l, v in ALLOC], alloc_n=[[l, v] for l, v in ALLOC],
         hy_cust=[round(h["cust"]) for h in SB["hy"]], hy_arr=[r1(h["arr"]) for h in SB["hy"]], hy_rev=[round(h["rev"], 2) for h in SB["hy"]],
         fin=[["Paying lenders, end"] + [ig(h["cust"]) for h in SB["hy"]] + [ig(SB["cust24"])], ["Pilots started"] + [ig(h["pil"]) for h in SB["hy"]] + [ig(SB["pilots"])],
              ["Revenue"] + ["%.2f" % h["rev"] for h in SB["hy"]] + ["%.2f" % SB["rev24"]]] +
             [[l] + ["%.2f" % h["lines"][l] for h in SB["hy"]] + ["%.2f" % SB["lines"][l]] for l in LINES] +
             [["Total spend"] + ["%.2f" % h["spend"] for h in SB["hy"]] + ["%.2f" % SB["spend24"]], ["Cash at end"] + ["%.2f" % h["cash"] for h in SB["hy"]] + ["%.2f" % SB["cash24"]],
              ["ARR at end"] + ["%.2f" % h["arr"] for h in SB["hy"]] + ["%.2f" % SB["arr24"]], ["Heads at end"] + [str(h["heads"]) for h in SB["hy"]] + [str(SB["hy"][3]["heads"])]],
         path_base=[50.0] + [round(x["cash"], 2) for x in RB], path_bear=[50.0] + [round(x["cash"], 2) for x in RBE], path_gate=[50.0] + [round(x["cash"], 2) for x in RBG],
         path_bull=[50.0] + [round(x["cash"], 2) for x in RBU], path_mf=[50.0] + [round(v, 2) for v in MF["path"][:24]], mf_out="month %d" % MF["out"], mf_out_n=MF["out"],
         mf_cash24=cr(MF["cash24"]), mf_arr24=cr(MF["arr24"]), mf_hours=ig(MF["h_tot"]),
         ind=[[n, s, "%.2f" % w] for n, s, w in IND_S], reg=[[n, s, "%.2f" % w] for n, s, w in REG_S], pair=PAIR, opt=[[n, s, "%.2f" % w] for n, s, w in OPT_S],
         opt_top="%.2f" % max(o[2] for o in OPT_S), opt_fm="%.2f" % OPT_S[0][2], ind_top="%.2f" % IND_S[0][2], reg_top="%.2f" % REG_S[0][2], pair_top="%.2f" % PAIR[0][0],
         rivals=[[n, c] for n, c, _ in RIV_S], caps=CAPS, moats=[[n, s, b] for n, s, b, _ in MOATS], weak=[[n, str(mo), w] for n, mo, w in WEAK],
         tam=cr(TAM, 0), sam=cr(SAM, 0), som=cr(SOM), sam_logos=ig(SAM_LOGOS), tam_n=round(TAM), sam_n=round(SAM), som_n=r1(SOM), share_som=pc(SOM / SAM),
         prov=[[p["name"], "n/a" if p["cost"] is None else "%.2f" % p["cost"], str(p["weeks"]), "%.2f" % p["pue"], pc(p["re"]), p["res"], "%.0f" % p["co2"]] for p in PROV_S],
         gpu_rs=cr(GPU_RS, 2), h100_eq=ig(H100_EQ), h100_hours=ig(WL["h100"]), l40_hours=ig(WL["l40"]),
         gh=[round(h["gh"]) for h in SB["hy"]], gb=[round(h["gb"]) for h in SB["hy"]], gv=[round(h["gv"]) for h in SB["hy"]], gd=[round(h["gd"]) for h in SB["hy"]],
         env=[["Energy, MWh"] + ["%.1f" % (h["e"] / 1000) for h in SB["hy"]] + ["%.1f" % (ENV["e"] / 1000)],
              ["CO2e, grid, t"] + ["%.1f" % h["co2l"] for h in SB["hy"]] + ["%.1f" % ENV["co2l"]],
              ["CO2e, after renewables, t"] + ["%.1f" % h["co2m"] for h in SB["hy"]] + ["%.1f" % ENV["co2m"]],
              ["Water on site, kL"] + ["%.1f" % (h["won"] / 1000) for h in SB["hy"]] + ["%.1f" % (ENV["won"] / 1000)],
              ["Water off site, kL"] + ["%.1f" % (h["woff"] / 1000) for h in SB["hy"]] + ["%.1f" % (ENV["woff"] / 1000)]],
         e_mwh="%.0f MWh" % (ENV["e"] / 1000), co2l="%.0f t" % ENV["co2l"], co2m="%.0f t" % ENV["co2m"], water_kl="%.0f kL" % ((ENV["won"] + ENV["woff"]) / 1000),
         water_l=ig(ENV["won"] + ENV["woff"]), inten=[round(v) for v in INT], re_end=pc(av("A45")), hy_re=[round(100 * h["re"]) for h in SB["hy"]],
         targets=[list(t) for t in TARGETS],
         tor=[[TOR_LBL[k], r1(lo), r1(hi)] for k, _, lo, hi in TOR[:8]],
         scen=[["Lenders"] + [ig(s["cust24"]) for _, s in SC], ["ARR"] + [cr(s["arr24"]) for _, s in SC],
               ["Total spend"] + [cr(s["spend24"]) for _, s in SC], ["Cash left"] + [cr(s["cash24"]) for _, s in SC],
               ["Months left"] + ["%.1f" % s["runway_net"] for _, s in SC]],
         gate_cash=cr(SBG["cash24"]), ef="%.2f" % av("A44"),
         acv=lk(ACV24 * 100, 1), cac=lk(CAC * 100, 1), payback="%.0f months" % PAYBACK, gm=pc(SB["gm_h4"]), ltvcac="%.1fx" % LTVCAC, gm18=pc(SB["gm_h3"]),
         mile="%d lenders, %s ARR and %s gross margin by month 18" % (MILE["cust"], cr(MILE["arr"]), pc(MILE["gm"])), gate_runway="%.1f months" % SBG["runway_net"],
         bear_runway="%.1f months" % SBE["runway_net"], bull_runway="%.1f months" % SBU["runway_net"], net_burn=cr(SB["net_burn"], 2), heads24=str(SB["hy"][3]["heads"]),
         gov=[list(g) for g in GOV], subsidy_up=cr(0.40 * (WL["h100"] * av("A18") + WL["l40"] * av("A17")) / 1e7, 2),
         arows=[[k, ASHORT[k], fmt(A[k][1]), fmt(A[k][0]), fmt(A[k][2])] for k in ASHORT],
         price_min="₹%.2f" % PRICE_MIN, voice_min="₹%.2f" % VOICE_MIN, budget="₹50 Cr",
         path_mf_clip=[50.0] + [round(max(0.0, v), 2) for v in MF["path"][:MF["out"]]], prov_save=pc(1 - PROV_S[0]["cost"] / PROV_S[1]["cost"]),
         api_x="%.0fx" % (PROV_S[3]["cost"] / PROV_S[0]["cost"]), west_dc=pc((F["mum_mw"] + F["pune_mw"]) / (F["mum_mw"] / F["mum_sh"])),
         gpu_portal=cr(PROV_S[0]["cost"], 2), co2_drop=pc(1 - ENV["co2m"] / ENV["co2l"]), dev_hours=ig(sum(x["g_dev"] for x in RB)),
         batch_hours=ig(sum(x["g_batch"] for x in RB)), voice_hours=ig(sum(x["g_voice"] for x in RB)), mm_reviewed=ig(WL["qa"] / 1e5) + " lakh",
         alloc_sum="%.1f" % ALLOC_SUM, pilots24=ig(SB["pilots"]))

# ---------- write ----------
def write(rel, text):
    if MEM is not None: MEM[rel] = text; return
    p = HERE.parent / rel; p.parent.mkdir(parents=True, exist_ok=True); io.open(p, "w", encoding="utf-8", newline="\n").write(text)
if not DRY:
    write("model/model_outputs.json", json.dumps(dict(OUT, hash=HASH, monthly=[{k: (round(v, 4) if isinstance(v, float) else v) for k, v in x.items() if k != "lines"} for x in RB]), ensure_ascii=False, indent=1))
    write("model/model_tables.md", "# Model tables: Setu AI (hash %s, %d of %d checks)\n\n" % (HASH, CHECKS_OK, len(CHECKS)) + "\n\n".join(TB) + "\n")
    write("deck/values.json", json.dumps(V, ensure_ascii=False, indent=1))
    print("wrote model/model_outputs.json, model/model_tables.md, deck/values.json")
