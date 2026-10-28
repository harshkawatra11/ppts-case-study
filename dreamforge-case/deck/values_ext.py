"""Round-2 values for the redesigned slides 2 to 5 (PLAN-R2.md). gen.py calls extend(V, O, g) after make_values.build(O);
it may only ADD keys (gen.py asserts this). Model numbers are computed from O (hash effb9a66e6). Research constants carry
their raw-fact IDs (research/raw/R-*.md, VERIFIED or CORRECTED rows) in comments and are stated in the research sections
named in PLAN-R2.md section 2.2."""
L, CR = 1e5, 1e7


def inr(x):
    s = str(int(round(abs(x))))
    if len(s) > 3:
        h, t = s[:-3], s[-3:]; p = []
        while len(h) > 2: p.insert(0, h[-2:]); h = h[:-2]
        if h: p.insert(0, h)
        s = ",".join(p) + "," + t
    return ("−" if x < 0 else "") + s


def extend(V, O, g):
    D, S, R, h, A, F = O["deck"], O["summary"], O["monthly_o5"], O["meta"]["hash"], O["A"], O["F"]
    K = ["O0", "O1", "O2", "O3", "O4", "O5"]
    NM = ["1 Stay petrol", "2 Electrify, buy", "3 Grow, buy", "4 Both, buy", "5 Grow, lease", "6 Both, lease"]
    U = O["unit"]
    # ---------- payback and deployment, from the recommended plan's monthly rows ----------
    base = S["O0"]["rr24"] / 12; ci = ce = 0.0; inv = []; earn = []; pay = None
    for r in R:
        ci += r["charge"] + r["dep"] + r["onb"] + r["build"] + r["drec"]; ce += r["contrib"] - base
        inv.append(ci / L); earn.append(ce / L)
        if pay is None and ci > 0 and ce >= ci: pay = r["t"]
    idx = [0, 3, 6, 9, 12, 15, 18, 21, 24]
    V["payback"] = pay
    V["pb_x"] = ["M%d" % m for m in idx]
    V["pb_inv"] = [0 if m == 0 else round(inv[m - 1], 1) for m in idx]
    V["pb_earn"] = [0 if m == 0 else round(earn[m - 1], 1) for m in idx]
    V["pb_last"] = "%.1f" % earn[23]
    UK = [("drec", "Working capital"), ("charge", "Charging"), ("dep", "Deposits"), ("build", "Data"), ("onb", "Riders")]
    V["dep_names"] = [u[1] for u in UK]
    V["dep_series"] = [[round(R[m][k] / L, 2) for m in range(12)] for k, _ in UK]
    tot = [sum(R[m][k] for k, _ in UK) / L for m in range(12)]
    V["dep_tot"] = [("%.1f" % x) if x >= 5 else "" for x in tot]
    V["dep_m"] = ["M%d" % (m + 1) for m in range(12)]
    V["dep_note"] = "₹%.1f L of the crore is out by month 8" % inv[7]
    # ---------- headlines (action titles; every number from the model) ----------
    V["h1x"] = ("SwiftKart keeps " + D["margin0"] + " of what a petrol bike earns, the ₹2.8 Cr contract assumes 100% use, "
                "and no petrol fleet bike can be added after 2026")
    V["h2x"] = ("Six options from two choices: leasing both fleets is worth ₹" + D["npv5"] + " Cr over 48 months, ₹" + D["gap53"] +
                " Cr more than buying both, with no debt")
    V["h3x"] = ("The crore buys what a lease cannot: ₹" + D["used"] + " L into five enablers, ₹0 on vehicles, earned back by month " +
                str(pay) + ", ₹" + D["reserve"] + " L held back")
    V["h4x"] = ("Lease both fleets and electrify first: " + D["ev12"] + " EVs and no petrol by month 12, ₹" + D["rr5"] +
                " Cr a year by month 24, no debt, four go or stop gates")
    V["src2x"] = ("Source: case data | Mordor Intelligence 2025 | Savills India 2025 | NITI Aayog 2022 | PPAC, IOCL | company EV disclosures | "
                  "CAQM, GNCTD EV Policy 2026 | model " + h)
    V["src3x"] = ("Source: case data | six options modelled over 48 months at 11% | Alt Mobility FleetLease | Delhi EV Policy 2026, MHI PM E-DRIVE | "
                  "model tables T5, T6, T10, T12 | model " + h)
    V["src4x"] = ("Source: case data | model tables T7, T9, T15 | Delhivery and Blue Dart receivable days | research sections 17, 18 and 30 | model " + h)
    V["src5x"] = ("Source: model tables T8, T10, T13 | Flipkart, Amazon, Eternal, Swiggy, BigBasket EV disclosures | research sections 21 to 25 and 29 | model " + h)
    # ---------- S2 ----------
    V["wf_note"] = "Rider " + D["rider_share0"] + ", petrol " + D["fuel_share0"] + ", kept " + D["margin0"]
    UEL = ["Petrol bike", "EV bought, running", "EV bought, all-in", "EV leased", "EV leased, full use"]
    V["ue2"] = [[UEL[i], u[1], u[2], u[3], u[4]] for i, u in enumerate(D["ue"])]
    V["ue_note"] = "a leased EV keeps ₹%s a month, %.1fx a petrol bike" % (inr(U[3]["contrib"]), U[3]["contrib"] / U[0]["contrib"])
    p25, p26 = g["PETROL"][-2][1], g["PETROL"][-1][1]  # RD07 (2025, held), RD11 and RD12 (Oct 2026)
    V["mkt"] = [["~400", "Delhi-NCR dark stores, #1 city"],     # RA73, RA75 (Savills India, Oct 2025)
                ["2.35 Cr", "gig workers by 2029-30, 3x"],      # RA51, RA52 (NITI Aayog 2022)
                ["₹%.2f" % p26, "Delhi petrol a litre, +%.1f%%" % (100 * (p26 / p25 - 1))]]
    # five forces: [row, col, label, rating, code]; code M/L/H rating, X centre, C corner note, S so-what (research 7.1, RA43)
    V["porter"] = [[0, 0, "3PL last mile in Delhi-NCR", "", "C"], [0, 1, "New entrants", "MEDIUM", "M"], [0, 2, "Colour shows margin pressure", "", "C"],
                   [1, 0, "Suppliers", "LOW TO MED", "L"], [1, 1, "Rivalry", "HIGH", "X"], [1, 2, "Buyers", "HIGH", "H"],
                   [2, 0, "Clients insource: Valmo", "", "C"], [2, 1, "Substitutes", "MEDIUM", "M"], [2, 2, "Win on uptime, not price", "", "S"]]
    # research 6.1: RC01 RC02 RC11 | RC12 RC14 | RC19 RC21 RC24 | RC25 RC28 | RC36 RC40 | RC33 RC34
    V["clients6"] = [["Flipkart", "100% EV, 2030", "10,000+ EVs by 2024"], ["Amazon", "10,000 EVs", "met early, Oct 2024"],
                     ["Zomato", "100% EV, 2030", "13,500 EVs by 2024"], ["Swiggy", "100% EV, 2030", "EV fleet grew 7x"],
                     ["BigBasket", "60% EV, 2030", "about 27%, mid-2024"], ["Zepto", "none stated", "partner fleet only"]]
    # research 8.1 and 8.3: RA70 RE43 | RE26 RE27 | RE37 RE38 (C-E4 ruling) | RE35 | RE45; PM E-DRIVE RE03 RE12 RE14
    V["policy5"] = [["Nov 2023", "Fleet scheme", 0], ["Jul 2026", "EV Policy 2026", 0], ["Dec 2026", "Last petrol induction", 1],
                    ["Apr 2028", "Only EVs registered", 0], ["Apr 2030", "Fleets 100% EV", 0]]
    V["policy_note"] = "2 months left to add a petrol fleet bike; PM E-DRIVE now pays only ₹5,000 an e-2W"
    V["tree_root"] = "How should SwiftKart deploy ₹1 Cr over 24 months for the most value"
    V["tree"] = [["FIX THE MARGIN", ["Petrol is %s of revenue; a lease saves ₹%s a bike-month" % (D["fuel_share0"], inr(F["petrol_run"] - F["lease"])),
                                     "No petrol fleet bike can be added after 2026: resale falls"]],
                 ["WIN THE CONTRACT", ["₹2.8 Cr assumes 100%% use; at SwiftKart's 85%% it is ₹%s Cr" % D["c_rev85"],
                                       "95% fulfilment, one charge per day, monthly CO2 data"]],
                 ["STAY LIQUID", ["185 bought EVs cost ₹%s L, twice the crore" % D["capex3"],
                                  "57-day receivables tie up ₹%s L of the crore" % D["uses_txt"][0][1]]]]
    # ---------- S3 ----------
    npv = {k: S[k]["npv"] / CR for k in S}
    V["mece"] = [["Stay petrol", [["Option 1\n₹%.2f Cr" % npv["O0"], "P"], ["Option 3\n₹%.2f Cr" % npv["O2"], "P"], ["Option 5\n₹%.2f Cr" % npv["O4"], "P"]]],
                 ["Buy EVs", [["Option 2\n₹%.2f Cr" % npv["O1"], "P"], ["Option 4\n₹%.2f Cr" % npv["O3"], "O"], ["Mixed\nnot built", "N"]]],
                 ["Lease EVs", [["No award\n₹%.2f Cr" % npv["O6"], "B"], ["Mixed\nnot built", "N"], ["Option 6\n₹%.2f Cr" % npv["O5"], "R"]]]]
    V["opts2"] = [[NM[i], o[1], o[2], o[3], "%.0f" % (S[K[i]]["mincash"] / L), o[4], o[5], o[6]] for i, o in enumerate(D["opts"])]
    W = O["scorecard"]["weights"]
    V["hcrit"] = ["Value\n%d%%" % round(100 * W["value"]), "Liquid\n%d%%" % round(100 * W["liquidity"]), "Resil.\n%d%%" % round(100 * W["resilience"]),
                  "CO2\n%d%%" % round(100 * W["emissions"]), "Grow\n%d%%" % round(100 * W["growth"])]
    V["bub"] = [[S[k]["capex24"] / L, npv[k], i + 1, S[k]["loan"] / L] for i, k in enumerate(K)]
    V["obvious"] = ["Needs ₹%s L of debt on top of the crore" % D["loan3"],
                    "Its EMI, ₹%s a month, is above the ₹%s lease" % (D["emi"], D["lease"]),
                    "Cash dips to ₹%.0f L in month %d" % (S["O3"]["mincash"] / L, S["O3"]["minmonth"])]
    own = O["own"]; own35 = own["capital"] * (F["ev_price"] - 35000) / (F["ev_price"] - F["subsidy"]) + own["resale"] + own["charging"] + own["running"]
    V["own35"] = inr(own35)  # Delhi EV Policy 2026 year-1 cap ₹30,000 (RE29) + PM E-DRIVE ₹5,000 (RE03)
    V["costfacts"] = [["Lease that flips it", "₹" + D["sw_lease"]], ["Bought, all subsidies", "₹" + inr(own35)],
                      ["Alt Mobility, from", "₹2,800"], ["EMI, financed EV", "₹" + D["emi"]]]  # RB19, RB20
    V["heat_rows2"] = ["Petrol +20%", "EV prices −15%", "Demand −10%", "Electricity +25%", "Downtime doubles", "Subsidy withdrawn", "EV-first clients"]
    SC = O["scenarios"]
    V["npvr"] = [[NM[i], round(npv[k], 2)] + ([round(SC["bear"][k]["npv"] / CR, 2), round(SC["bull"][k]["npv"] / CR, 2)] if k in SC["bear"] else [None, None])
                 for i, k in enumerate(K)]
    ar = O["scorecard"]["cards"]["O5"]["at_risk"]
    V["verdict"] = [["Value: ", "₹%s Cr, highest of 6" % D["npv5"]], ["Cash: ", "no debt, floor ₹%s Cr" % D["min5"]],
                    ["Risk: ", "lowest, %d%% of NPV" % round(100 * ar)], ["CO2: ", "%s g a delivery, −%s" % (D["g24"], D["gcut"])]]
    # ---------- S4 ----------
    sale = S["O5"]["uses"]["sale"] / L
    V["su_total"] = 100.0 + sale
    V["su_src"] = [["₹1 Cr", 100.0], ["Petrol", sale]]
    V["su_use"] = [[u[0], u[1]] for u in D["uses"]] + [["Cash", sale]]
    bill = F["c_veh"] * F["del_day"] * F["days"] * F["rev_del"] / L
    nbikes = round(S["O5"]["uses"]["charge"] / (F["charge_100"] / 100))
    BAS = ["%d days of ₹%.1f L monthly billing" % (A["A01"]["base"], bill), "₹10,000 a bike × %d bikes" % nbikes,
           "%d months of lease × %d bikes" % (A["A02"]["base"], nbikes), "telematics, CO2 reports, dispatch",
           "75 hires × ₹5,000, 100 retrained", "kept for late client payment"]
    SHORT = ["Working capital", "Charging hub", "Lease deposits", "Data, dispatch", "Riders", "Reserve"]
    V["su_rows"] = [[SHORT[i], u[1], u[2], BAS[i]] for i, u in enumerate(D["uses_txt"])] + [["Petrol sale cash", "%.1f" % sale, "", "petrol bike sales, kept as cash"]]
    V["cash_note"] = "Buy both: ₹%s L loan; cash falls to ₹%.0f L in month %d" % (D["loan3"], S["O3"]["mincash"] / L, S["O3"]["minmonth"])
    V["ms_line"] = D["mult"] + ", no debt, cash floor ₹" + D["min5"] + " Cr"
    V["ms_minis"] = [["+₹" + D["dnpv5"] + " Cr", "NPV vs petrol"], ["₹" + D["gap53"] + " Cr", "above buy both"], ["−" + D["gcut"], "CO2 a delivery"]]
    V["sw_rows"] = [["All-in lease", "₹" + D["lease"], "₹" + D["sw_lease"]], ["Contract volume", "100%", D["sw_cvol"]],
                    ["Price a delivery", "₹40", "₹" + D["sw_rev"]], ["Bike use, contract", "100%", D["sw_cutil"]],
                    ["Subsidy to buy", "₹10,000", "₹" + D["sw_sub"]]]
    V["sw_note"] = "Alt Mobility quotes from ₹2,800"
    # ---------- S5 ----------
    V["pillars"] = [["VALUE", "₹" + D["npv5"] + " Cr", "NPV over 48 months, best of 6"], ["LIQUIDITY", "₹0 debt", "cash never below ₹" + D["min5"] + " Cr"],
                    ["RESILIENCE", "%d%%" % round(100 * ar), "of NPV at risk, the lowest"]]
    # research 6.1 (RC rows) and lane R-I; the last stage is a goal, never a forecast
    V["funnel"] = [["6", "big e-com and q-com buyers"], ["5", "with public EV targets"], ["3", "aim for 100% EV by 2030"],
                   ["1", "anchor contract: 75 bikes"], ["+1", "2nd client by M24, a goal"]]
    V["gantt"] = [["Leases, charging hub", 0, 0], ["Electrify 100 bikes", 0, 3], ["Bid and win contract", 0, 0], ["Contract fleet, 75", 1, 2],
                  ["Volume ramp", 1, 3], ["Monthly CO2 report", 1, 7], ["Price lease renewal", 6, 7]]
    V["gates"] = [["G1", 1, 2], ["G2", 8 / 3, 3], ["G3", 4, 1], ["G4", 8, 6]]
    V["gates_rows"] = [["G1", "M3", "Signed; EVs 95% available"], ["G2", "M8", "75 EVs live; 95% fulfilled"],
                       ["G3", "M12", "0 petrol bikes; CO2 reports accepted"], ["G4", "M24", "Renew if lease under ₹" + D["sw_lease"]]]
    V["fallback"] = "no award still earns ₹" + D["npv6"] + " Cr NPV"
    V["riskmap"] = [["R1", "R3, R5", ""], ["R10", "R2, R6,\nR12", "R8"], ["R11", "R4, R9", "R7"]]  # research 21.5
    V["riskctrl"] = [["R3 No award: ", "lease the 100 anyway; still ₹" + D["npv6"] + " Cr"], ["R5 Low volume: ", "pooled dispatch; break-even at " + D["sw_cvol"]],
                     ["R1 Repricing: ", "lock 36 months with two lessors"], ["R8 Rider churn: ", "rolling hiring at ₹5,000 a rider"]]
    V["kpitree"] = [["FINANCIAL", "₹40 a delivery, ₹3,500 lease, 100% use"], ["OPERATIONS", "95% fulfilled, 95% EV uptime"],
                    ["EMISSIONS", D["g24"] + " g CO2 a delivery, " + D["t24"] + " t a year"]]
    V["impact"] = [["175", "PEOPLE", "riders trained before the first shift"], ["−" + D["gcut"], "PLANET", "CO2 a delivery, " + D["g0"] + " g to " + D["g24"] + " g"],
                   [D["mult"], "PROFIT", "contribution, ₹" + D["rr0r"] + " L to ₹" + D["rr5"] + " Cr"]]
    V["dels_note"] = "Deliveries a month up " + D["dels_up"] + ", to " + D["dels24"]
    for k in ("h1x", "h2x", "h3x", "h4x"): assert len(V[k]) <= 150, (k, len(V[k]))
    for k in ("src2x", "src3x", "src4x", "src5x"): assert len(V[k]) <= 230, (k, len(V[k]))
    assert pay == 13, pay
