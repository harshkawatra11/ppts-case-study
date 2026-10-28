# ===== SETU VALUES =====
"""Reads model/model_outputs.json and writes deck/values.js (one JS constant V) and model/model_tables.md.
Run from anywhere:  python lsr-caseforchange/model/make_values.py"""
import json, pathlib
HERE = pathlib.Path(__file__).resolve().parent; O = json.loads((HERE / "model_outputs.json").read_text(encoding="utf-8"))
MINUS = "−"; RS = "₹"
def n0(v):
    s = str(int(round(abs(v)))); out = s[-3:]; s = s[:-3]
    while s: out = s[-2:] + "," + out; s = s[:-2]
    return (MINUS if round(v) < 0 else "") + out
def n1(v): return (MINUS if round(v, 1) < 0 else "") + ("%.1f" % abs(v))
def n2(v): return (MINUS if round(v, 2) < 0 else "") + ("%.2f" % abs(v))
def sg(v): return ("+" if v > 0 else "") + n1(v)
def pc(v, d=0): return (MINUS if v < 0 else "") + (("%." + str(d) + "f") % abs(v * 100)) + "%"
F = O["meta"]["F"]; A = O["meta"]["A"]; L = O["meta"]["L"]; S = O["meta"]["SCEN"]
B = O["plan"]["base"]; K = B["kpi"]; R = B["rows"]; DR = O["drift"]["rows"]; H = O["history"]; U = O["unit"]; W = O["workforce"]; BU = O["budget"]; WD = O["winddown"]; SA = O["sale"]["cases"]; LN = O["lines"]
kb, ku, kc = O["plan"]["bear"]["kpi"], O["plan"]["bull"]["kpi"], O["plan"]["bear_contingency"]["kpi"]
jobs = n0(K["hc12"]); floor_gap = K["min_cash"] - F["floor"]; bench_cost = sum(r["bench"] for r in R[:12]) * A["pay"]["clean"] * L["bench_pay"] / 1200
lead_save = 60 * A["pay"]["corp"] * L["lead_cut"] / 100 * L["lead_cut_months"] / 12; reskill_pool = W["roles_m12"]["hard_desk"] + W["roles_m12"]["data_services"] + W["roles_m12"]["clean_verifiers"] + W["roles_m12"]["team_leads"]
def clip(xs, lo): 
    out = []; dead = False
    for x in xs:
        if dead: out.append(None)
        else:
            out.append(round(x, 1))
            if x < lo: dead = True
    return out
CR = ["Runway", "Cash", "Jobs", "Control", "Upside", "Speed"]; WT = [0.25, 0.20, 0.25, 0.10, 0.10, 0.10]
SC = [["Drift, no decision", [1, 1, 1, 3, 1, 5]], ["1 Reskill everyone", [1, 1, 4, 5, 2, 2]], ["2 Sell or merge now", [3, 3, 2, 1, 3, 3]],
      ["3 Pivot outright", [1, 1, 2, 5, 4, 1]], ["4 Wind down", [2, 1, 1, 2, 1, 4]], ["Setu: Path 1 rebuilt", [5, 4, 4, 4, 4, 3]]]
score = [round(sum(a * b for a, b in zip(s[1], WT)), 2) for s in SC]
assert score[-1] == max(score) and K["breach"] is None and round(K["vsp12"]) == 0
T = sorted(O["tornado"], key=lambda t: t["min_lo"])[:7]
V = dict(
  team=dict(name="TEAM IDEAFORGE", rows=[["Harsh Kawatra", "Delhi Technological University", "Team Leader"], ["Gursimran Kaur", "Guru Gobind Singh Indraprastha University", "Member"]]),
  cover=dict(left=[["BFSI FILES", RS + "38 price, " + RS + "41 cost"], ["CATALOGUE QC", "Zero contribution"], ["VOICE, CHAT", "380 agents"]], right=[["HARD-FILE DESK", RS + n0(L["p_hard"]) + ", AI-assisted"], ["AI ENGINE LINE", "Clean files at " + RS + n0(L["p_clean"])], ["DATA SERVICES", n0(L["lab"][11]) + " labellers"], ["REGIONAL VOICE", "Human escalation"]], thesis="Restructure first, then reskill into the work AI cannot do.",
    body="Primary path: Reskill and Restructure (Path 1), rebuilt around the 30% of files that are handwritten or in regional languages, an AI engine for the clean 70%, and an AI data services line. Cash stays above " + RS + n1(K["min_cash"]) + " Cr, " + jobs + " of 2,400 jobs remain at month 12, and nobody is forced out in the base case.",
    source="Source: Case for Change case brief, Economics Department, Lady Shri Ram College for Women | Team model, base case"),
  s2=dict(finding="Revenue fell " + RS + "80 Cr from its FY24 peak and " + pc(H["dropthrough"]) + " of that fall reached EBITDA, because neither the " + RS + "144 Cr payroll nor the " + RS + "69 Cr of other cost moved; the covenant is breached in month " + str(O["drift"]["breach"]),
    sowhat="the cost base never flexed and the clock runs to " + RS + "15 Cr, not to zero; the opening is the work AI still cannot read",
    source="Source: Case for Change case brief, sections 1 and 2 | Team model, drift case (revenue " + MINUS + "2.45% a month, interest 11%, assumptions A01 and A02) | NASSCOM Strategic Review 2026",
    emp=[round(x, 1) for x in H["emp_cost"]], non=[round(x, 1) for x in H["non_emp"]], rev=F["hist"]["rev"], ebitda=F["hist"]["ebitda"],
    drift=[40.0] + [round(r["cash"], 1) for r in DR[:9]], flat=[round(40 - (i * (31 / 12 + 40 * A["interest"] / 12)), 1) for i in range(10)],
    cashbar=[F["floor"], F["budget"], F["cash0"] - F["floor"] - F["budget"]], free_months=n1((F["cash0"] - F["floor"] - F["budget"]) / (31 / 12)),
    rivals=[["The Company", RS + "38", RS + "41", MINUS + RS + "3", "Every line loses"], ["AI-native firm", RS + "27", RS + "9", "+" + RS + "18", "Handwritten, regional"],
            ["Incumbent + AI", RS + "33", RS + "28", "+" + RS + "5", "Cost above " + RS + "27"], ["Voice AI firm", "n/s", "n/s", "n/s", "Needs labellers"]],
    hid=[dict(label="Revenue", value=31, text=MINUS + "31%"), dict(label="Headcount", value=6, text=MINUS + "6%"), dict(label="Revenue per head", value=26, text=MINUS + "26%")],
    leavers=n0(H["leavers_per_year"])),
  s3=dict(finding="The " + RS + "41 average file hides two businesses: a clean file that costs " + RS + n0(U["today"]["clean"]["cost"]) + " and a hard file that costs " + RS + n0(U["today"]["hard"]["cost"]) + "; a wind-down today would owe " + RS + n0(WD["0"]["dues"]) + " Cr in dues that the cash cannot cover",
    sowhat="a severance takes " + n2(W["severance_payback_months"]) + " months to pay back, longer than the runway, so cutting people first makes the covenant problem worse before it helps",
    source="Source: Case brief | Team model (assumptions A03 to A12) | Industrial Relations Code 2020, Code on Social Security 2020 and Code on Wages 2019 (compensation, gratuity and the 50% wage rule) | Balance sheet items are team assumptions",
    unit=[dict(label="Clean", segs=[round(U["today"]["clean"][k], 1) for k in ("labour", "tl", "overhead")], total=RS + n1(U["today"]["clean"]["cost"])),
          dict(label="Hard", segs=[round(U["today"]["hard"][k], 1) for k in ("labour", "tl", "overhead")], total=RS + n1(U["today"]["hard"]["cost"])),
          dict(label="Blended", segs=[round(0.7 * U["today"]["clean"][k] + 0.3 * U["today"]["hard"][k], 1) for k in ("labour", "tl", "overhead")], total=RS + n1(U["today"]["blended"]["cost"]))],
    lines=[dict(label=lab, value=round(v["ebitda"], 1), text=sg(v["ebitda"])) for lab, v in zip(["Clean files", "Hard files", "Catalogue", "Voice"], LN.values())], lines_total=round(sum(v["ebitda"] for v in LN.values()), 1),
    exits=[["Statutory minimum", n2(WD["0"]["dues_per_head_lakh"]), n1(WD["0"]["dues_per_head_lakh"] / 0.5)], ["Voluntary package", n2(L["vsp_cost"]), n2(W["severance_payback_months"])],
           ["Bridge grant", n2(L["bridge_grant"]), n1(L["bridge_grant"] / 0.4)], ["Month on the bench", n2(0.4 * L["bench_pay"]), n2(L["bench_pay"])]],
    afford=[["Payroll today", RS + "144 Cr", "79% of revenue"], ["Payroll at the FY24 ratio", RS + n0(F["rev"] * 0.55) + " Cr", "55%, " + n0(H["hc_at_55pct"]) + " people"], ["Gap to an affordable payroll", RS + n0(144 - F["rev"] * 0.55) + " Cr", n0(2400 - H["hc_at_55pct"]) + " people"],
            ["Leavers in a normal year", "26%", n0(H["leavers_per_year"]) + " people"], ["Dues if all 2,400 exit", RS + n1(WD["0"]["dues"]) + " Cr", RS + n2(WD["0"]["dues_per_head_lakh"]) + " lakh each"], ["Cash after repaying the loan", RS + "0 Cr", "40 less 40"]],
    wd=[dict(label="Cash", value=40.0, kind="total", text="40.0"), dict(label="Receivables", value=round(WD["0"]["receivables"], 1), text="+" + n1(WD["0"]["receivables"])), dict(label="Term loan", value=-40.0, text=MINUS + "40.0"),
        dict(label="Staff dues", value=-round(WD["0"]["dues"], 1), text=MINUS + n1(WD["0"]["dues"])), dict(label="Other costs", value=-round(WD["0"]["payables"] + WD["0"]["closure"] + WD["0"]["closure_burn"], 1), text=MINUS + n1(WD["0"]["payables"] + WD["0"]["closure"] + WD["0"]["closure_burn"])),
        dict(label="Shortfall", value=-round(WD["0"]["shortfall"], 1), kind="total", text=MINUS + n1(WD["0"]["shortfall"]))], cover=pc(WD["0"]["dues_cover"])),
  s4=dict(finding="Path 1, rebuilt as Project Setu, is the only route that stays above the " + RS + "15 Cr covenant: " + jobs + " of 2,400 jobs remain at month 12 with no forced exit, where a sale keeps about " + n0(SA["base"]["jobs"]) + " and a wind-down none",
    sowhat="conclusively, the standard paths fail on runway or on people; Setu passes both and keeps a sale open as a fallback from a stronger position",
    source="Source: Team model, 18-month cash paths for each route | Sale case: 0.20 to 0.50 times revenue (assumption A18) | Klarna (2025) and NASSCOM (2026) as cited in the research document, section 8",
    money=jobs, money2=RS + n1(K["min_cash"]) + " Cr", money3=RS + n1(floor_gap) + " Cr above the covenant floor", cash=dict(setu=[40.0] + [round(r["cash"], 1) for r in R[:12]], drift=clip([40.0] + O["paths"]["drift"]["cash"][:12], -6),
      p1=clip([40.0] + O["paths"]["p1_standard"]["cash"][:12], -6), p3=clip([40.0] + O["paths"]["p3_pivot"]["cash"][:12], -6)),
    why=["Reskill all: AI-assisted cost of " + RS + "28 is still above the " + RS + "27 price", "Sell now: about " + n0(SA["base"]["jobs"]) + " jobs kept, on the buyer's terms", "Pivot outright: covenant breached in month " + str(O["paths"]["p3_pivot"]["breach"]), "Wind down: " + RS + n0(WD["0"]["dues"]) + " Cr of dues, " + pc(WD["0"]["dues_cover"]) + " covered"],
    crit=CR, routes=[s[0] for s in SC], scores=[s[1] + [score[i]] for i, s in enumerate(SC)], formula="Score = 25% runway + 20% cash floor + 25% jobs + 10% each for control, upside and speed (1 to 5)"),
  s5=dict(finding="Setu spends " + RS + n1(BU["spent"]) + " Cr of the " + RS + "15 Cr budget, turns EBITDA positive in month " + str(K["breakeven_month"]) + " and reaches a " + RS + n1(K["e12"]) + " Cr run-rate by month 12, with " + RS + n1(BU["reserve"]) + " Cr held in reserve for the downside",
    sowhat="the milestones are cash tests, not activity tests: each gate either releases the next tranche or opens the sale fallback",
    source="Source: Team model, base, bear and bull cases (assumptions A07 to A16) | Budget lines from the plan levers L01 to L12 | Case brief for the " + RS + "15 Cr budget and the " + RS + "15 Cr covenant",
    budget=[dict(label="Reskilling", value=round(BU["lines"]["reskill"], 1)), dict(label="Technology", value=round(BU["lines"]["tech"], 1)), dict(label="Retention, bridge", value=round(BU["lines"]["retention"] + BU["lines"]["bridge"], 1)),
            dict(label="Footprint", value=round(BU["lines"]["footprint"], 1)), dict(label="Reserve", value=round(BU["reserve"], 1))],
    budget_rows=[["Reskilling", n1(BU["lines"]["reskill"]), n0(reskill_pool) + " people, new roles"], ["Technology", n1(BU["lines"]["tech"]), "Engine, assist tools"], ["Retention, bridge", n1(BU["lines"]["retention"] + BU["lines"]["bridge"]), "Key staff, exit grants"],
                 ["Footprint", n1(BU["lines"]["footprint"]), "Half the seats released"], ["Reserve, ring-fenced", n1(BU["reserve"]), "Severance if a gate fails"]],
    cash=dict(base=[40.0] + [round(r["cash"], 1) for r in R], bear=clip([40.0] + [r["cash"] for r in O["plan"]["bear"]["rows"]], 0), bull=[40.0] + [round(r["cash"], 1) for r in O["plan"]["bull"]["rows"]]),
    scen=[["Clean volume", pc(-S["bear"]["d_clean"], 1), pc(-L["d_clean"], 1), pc(-S["bull"]["d_clean"], 1)], ["Hard-file price", RS + n0(S["bear"]["p_hard"]), RS + n0(L["p_hard"]), RS + n0(S["bull"]["p_hard"])],
          ["Labelling a head", n0(S["bear"]["lab_rev"] * 1e5), n0(L["lab_rev"] * 1e5), n0(S["bull"]["lab_rev"] * 1e5)], ["Cash, month 12", n1(kb["cash12"]), n1(K["cash12"]), n1(ku["cash12"])],
          ["EBITDA run-rate", sg(kb["e12"]), sg(K["e12"]), sg(ku["e12"])], ["Covenant", "Breach", "Held", "Held"]],
    gates=[["M3", "20% on the engine", "Add a vendor"], ["M6", "Cash above " + RS + n0(K["cash6"] - 1) + " Cr", "Open the sale"], ["M9", "EBITDA positive", "Use reserve"], ["M12", RS + n0(K["e12"]) + " Cr run-rate", "Restore pay"]], gate_note="Month 6 decides: below the cash test, sale talks open while cash is still near " + RS + n0(kb["cash6"]) + " Cr. Bear breaches in month " + str(kb["breach"]) + "."),
  s6=dict(finding="Of 2,400 people today, " + n0(W["natural"]) + " leave through normal attrition that is no longer backfilled and " + n0(W["assisted"]) + " take a funded bridge to an outside job; the firm employs " + jobs + " at month 12 and " + RS + n1(BU["reserve"]) + " Cr stays ring-fenced for severance",
    sowhat="therefore, Path 1 rebuilt around the hard file protects the covenant and three in four jobs, and prices the fallback before it is needed",
    source="Source: Team model, base case workforce flow | Case brief (26% attrition, six-year tenure, " + RS + "6 lakh average cost) | Labour codes as cited on slide 3 | Risk ratings are team judgement",
    t1="2,400 TO " + jobs + ", NO FORCED EXIT", flow=[dict(label="Today", value=2400, kind="total", text="2,400"), dict(label="Leavers", value=-round(W["natural"]), text=MINUS + n0(W["natural"])), dict(label="Bridge exits", value=-round(W["assisted"]), text=MINUS + n0(W["assisted"])),
          dict(label="Forced exits", value=0, text="0"), dict(label="Hires", value=round(W["hired"]), text="+" + n0(W["hired"])), dict(label="Month 12", value=round(W["end"]), kind="total", text=jobs)],
    roles=[dict(label="Catalogue holding line", value=round(W["roles_m12"]["catalogue"])), dict(label="AI data services", value=round(W["roles_m12"]["data_services"])), dict(label="Hard-file desk", value=round(W["roles_m12"]["hard_desk"])),
           dict(label="Regional voice", value=round(W["roles_m12"]["voice"])), dict(label="Team leads", value=round(W["roles_m12"]["team_leads"])), dict(label="Clean-file verifiers", value=round(W["roles_m12"]["clean_verifiers"])), dict(label="Tech and corporate", value=round(W["roles_m12"]["tech_corporate"]))],
    promise=[["Reskilling, " + n0(reskill_pool) + " people", n1(BU["lines"]["reskill"])], ["Bridge pay, 75%, peak " + n0(K["max_bench"]), n1(bench_cost)], ["Retention for key staff", n1(BU["lines"]["retention"])],
             ["Bridge grants, " + n0(W["assisted"]) + " people", n1(BU["lines"]["bridge"])], ["Severance reserve", n1(BU["reserve"])], ["Leadership pay cut, 25%", MINUS + n1(lead_save)]],
    risks=[["Clients reject " + RS + "48", "M", "H", "Tiered contract, " + RS + "44 floor"], ["Engine accuracy slips", "M", "H", "Two vendors, human check"], ["Best handlers leave", "H", "H", "Retention pay, career ladder"],
           ["Labelling demand is slow", "M", "M", "Catalogue as the holding line"], ["AI-native cuts price", "H", "M", "Exit clean files, keep hard"], ["Lender tightens covenant", "L", "H", RS + n1(BU["reserve"]) + " Cr reserve, sale track"]],
    grid=[[round(x, 1) for x in row] for row in O["grid"]["min_cash_12m"]], grid_rows=[RS + n0(p) + " hard price" for p in O["grid"]["p_hard"]], grid_cols=[pc(-d, 1) for d in O["grid"]["d_clean"]]),
  s7=dict(finding="Every figure traces to the case or to a numbered assumption; no single assumption moved to its downside takes cash below " + RS + n1(min(t["min_lo"] for t in O["tornado"])) + " Cr, and only all five together breach the covenant",
    sowhat="method limit: the line split, the balance sheet and productivity are team assumptions; the conclusions hold across the ranges shown",
    source="Source: Team model (hash " + O["meta"]["hash"] + ") | Full assumptions register, sources and tables are in the research document",
    assume=[["A01", "Revenue decline with no decision", "2.45% a month"], ["A02", "Interest on the term loan", "11% a year"], ["A03", "Revenue: BFSI, catalogue, voice", RS + "100, 48, 34 Cr"], ["A04", "Hard files in BFSI volume", "30%"],
            ["A05", "Files a person a month", "2,950 and 1,500"], ["A06", "Wages as a share of pay", "50%"], ["A07", "Engine fee per clean file", RS + "8"], ["A08", "Labelling revenue a head", RS + "63,000 a month"]],
    tor=[dict(label=t["name"], lo=round(t["min_lo"], 1), hi=round(t["min_hi"], 1), loText=n1(t["min_lo"]), hiText=n1(t["min_hi"])) for t in T], tor_base=round(K["min_cash"], 1),
    sale=[["Owners' value, " + RS + " Cr", n0(SA["bear"]["equity"]), n0(SA["base"]["equity"]), n0(SA["bull"]["equity"])], ["Jobs kept by a buyer", n0(SA["bear"]["jobs"]), n0(SA["base"]["jobs"]), n0(SA["bull"]["jobs"])]],
    wind=[["Dues payable", pc(WD["0"]["dues_cover"]), pc(WD["3"]["dues_cover"]), pc(WD["6"]["dues_cover"])]],
    bear="All five downsides at once breach in month " + str(kb["breach"]) + "; the month 6 gate opens the sale track first."),
  s8=dict(thesis="Project Setu: restructure first, then reskill into the work AI cannot do."))
assert len(V["s2"]["finding"]) < 200 and len(V["s3"]["finding"]) < 200 and len(V["s4"]["finding"]) < 215 and len(V["s5"]["finding"]) < 200 and len(V["s6"]["finding"]) < 225, [len(V[k]["finding"]) for k in ("s2", "s3", "s4", "s5", "s6", "s7")]
(HERE.parent / "deck").mkdir(exist_ok=True)
(HERE.parent / "deck" / "values.js").write_text("const V = " + json.dumps(V, ensure_ascii=False) + ";\n", encoding="utf-8")
def tbl(head, rows): return "\n".join(["| " + " | ".join(head) + " |", "|" + "---|" * len(head)] + ["| " + " | ".join(str(c) for c in r) + " |" for r in rows]) + "\n"
md = ["# Setu model tables (generated by make_values.py, model hash " + O["meta"]["hash"] + ")\n", "Units: " + RS + " crore unless stated.\n",
  "## T1. History rebuilt from the case table\n", tbl(["Line", "FY23", "FY24", "FY25", "Run-rate"], [["Revenue"] + F["hist"]["rev"], ["Total operating cost"] + F["hist"]["cost"], ["EBITDA"] + F["hist"]["ebitda"], ["Employee cost"] + [n1(x) for x in H["emp_cost"]], ["Other cost"] + [n1(x) for x in H["non_emp"]], ["Headcount"] + F["hist"]["hc"], ["Revenue per head, " + RS + " lakh"] + [n2(x) for x in H["rev_per_head"]], ["Employee cost per head, " + RS + " lakh"] + [n2(x) for x in H["cost_per_head"]]]),
  "## T2. Drift case, month by month\n", tbl(["Month", "Revenue", "EBITDA", "Cash"], [[r["m"], n2(r["rev"]), n2(r["ebitda"]), n1(r["cash"])] for r in DR]),
  "## T3. Line economics today (assumed split)\n", tbl(["Line", "Revenue", "Heads", "Direct cost", "Contribution", "Overhead", "EBITDA", "Margin", "Revenue per head, " + RS + " lakh"], [[k, n1(v["rev"]), n0(v["heads"]), n1(v["direct"]), n1(v["contribution"]), n1(v["overhead"]), n1(v["ebitda"]), pc(v["margin"]), n2(v["rev_per_head_lakh"])] for k, v in LN.items()]),
  "## T4. Unit economics per BFSI file (" + RS + ")\n", tbl(["State", "File", "Price", "Labour", "Team lead", "Engine", "Overhead", "Cost", "Margin"], [[st, f, n1(U[st][f]["price"]), n1(U[st][f]["labour"]), n1(U[st][f]["tl"]), n1(U[st][f]["engine"]), n1(U[st][f]["overhead"]), n1(U[st][f]["cost"]), n1(U[st][f]["margin"])] for st in ("today", "m12") for f in ("clean", "hard")] + [[st, "blended", n1(U[st]["blended"]["price"]), "", "", "", "", n1(U[st]["blended"]["cost"]), n1(U[st]["blended"]["margin"])] for st in ("today", "m12")]),
  "## T5. Setu base case, month by month\n", tbl(["Month", "Revenue", "Clean", "Hard", "Catalogue", "Voice", "Data services", "People cost", "Other cost", "EBITDA", "One-offs", "Cash", "Headcount", "Bench"], [[r["m"], n2(r["rev"]), n2(r["r_clean"]), n2(r["r_hard"]), n2(r["r_cat"]), n2(r["r_voice"]), n2(r["r_lab"]), n2(r["ppl"]), n2(r["nonp"]), n2(r["ebitda"]), n2(r["one"]), n1(r["cash"]), n0(r["S"]), n0(r["bench"])] for r in R]),
  "## T6. Scenario summary\n", tbl(["Measure", "Bear", "Bear with contingency", "Base", "Bull"], [[lab] + [f(O["plan"][s]["kpi"][key]) if O["plan"][s]["kpi"][key] is not None else "None" for s in ("bear", "bear_contingency", "base", "bull")] for lab, key, f in (("Lowest cash", "min_cash", n1), ("Month of lowest cash", "min_month", str), ("Covenant breach month", "breach", str), ("EBITDA break-even month", "breakeven_month", str), ("Cash at month 6", "cash6", n1), ("Cash at month 12", "cash12", n1), ("Cash at month 18", "cash18", n1), ("EBITDA run-rate, month 12", "e12", n1), ("EBITDA run-rate, month 18", "e18", n1), ("Revenue run-rate, month 12", "rev12", n1), ("Headcount, month 12", "hc12", n0), ("Forced exits to month 12", "vsp12", n0), ("One-off spend", "one_total", n2))]),
  "## T7. Workforce flow to month 12 (base)\n", tbl(["Item", "People"], [["Start", 2400], ["Natural attrition, not backfilled", n0(W["natural"])], ["Assisted bridge exits", n0(W["assisted"])], ["Forced exits", n0(W["vsp"])], ["Hires", n0(W["hired"])], ["Month 12", n0(W["end"])]] + [["Role: " + k.replace("_", " "), n0(v)] for k, v in W["roles_m12"].items()]),
  "## T8. Emergency budget (" + RS + " Cr)\n", tbl(["Line", "Amount"], [[k, n2(v)] for k, v in BU["lines"].items()] + [["Spent", n2(BU["spent"])], ["Reserve", n2(BU["reserve"])]]),
  "## T9. Sensitivity: one assumption at a time\n", tbl(["Assumption", "Downside value", "Upside value", "Lowest cash, downside", "Lowest cash, upside", "EBITDA M12, downside", "EBITDA M12, upside"], [[t["name"], t["lo"], t["hi"], n1(t["min_lo"]), n1(t["min_hi"]), n1(t["e12_lo"]), n1(t["e12_hi"])] for t in O["tornado"]]),
  "## T10. Lowest 12-month cash: hard-file price (rows) by clean-volume decline (columns)\n", tbl(["Hard price"] + [pc(d, 1) for d in O["grid"]["d_clean"]], [[n0(p)] + [n1(x) for x in O["grid"]["min_cash_12m"][i]] for i, p in enumerate(O["grid"]["p_hard"])]),
  "## T11. The standard paths\n", tbl(["Route", "Covenant breach month", "Lowest cash in 12 months", "People at month 12", "EBITDA run-rate, month 12"], [[k, str(v["breach"]), n1(v["min_cash12"]), n0(v["jobs12"]), n1(v["e12"])] for k, v in O["paths"].items()]),
  "## T12. Sale at month 5 and wind-down\n", tbl(["Sale case", "Multiple of revenue", "Enterprise value", "Value to owners", "Jobs kept"], [[k, n2(v["mult"]), n1(v["ev"]), n1(v["equity"]), n0(v["jobs"])] for k, v in SA.items()]),
  tbl(["Wind-down start", "Cash", "Receivables", "Loan", "Staff dues", "Other", "Shortfall", "Dues cover"], [["Month " + m, n1(w["cash"]), n1(w["receivables"]), n1(w["loan"]), n1(w["dues"]), n1(w["payables"] + w["closure"] + w["closure_burn"]), n1(w["shortfall"]), pc(w["dues_cover"])] for m, w in WD.items()]),
  "## T13. Route scorecard\n", tbl(["Route"] + CR + ["Score"], [[s[0]] + s[1] + [score[i]] for i, s in enumerate(SC)])]
(HERE / "model_tables.md").write_text("\n".join(md), encoding="utf-8")
print("values.js written; findings:", [len(V[k]["finding"]) for k in ("s2", "s3", "s4", "s5", "s6", "s7")], "| scores", score)
