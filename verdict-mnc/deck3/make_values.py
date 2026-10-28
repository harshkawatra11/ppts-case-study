# ===== HARVESTBOX DECK V3 VALUES =====
# Builds deck3/values.json from the model plus hand-keyed research constants (each tagged with its section).
# python -X utf8 deck3/make_values.py
import io, os, sys, json, runpy, pathlib
D = pathlib.Path(__file__).resolve().parent
M = D.parent / "model" / "harvestbox_model.py"
ns = runpy.run_path(str(M), run_name="hb_values")
F, A, UNIT, SUM, RUNS, V, BRIDGE, TORN, GRID, OPT, PER, HASH = (ns[k] for k in
    ("F", "A", "UNIT", "SUM", "RUNS", "V", "BRIDGE", "TORN", "GRID", "OPT", "PER", "HASH"))
surv12, S0, life_months, HIST = ns["surv12"], ns["S0"], ns["life_months"], ns["HIST"]

assert HASH == "06111c6c33", HASH

MIN = "−"
RU = "₹"


def f1(x):
    return (MIN if x < 0 else "") + "%.1f" % abs(x)


def sg(x):
    return ("+" if x >= 0 else MIN) + "%.1f" % abs(x)


def pct(x, d=0):
    return ("%." + str(d) + "f%%") % (x * 100)


OUT = {}
OUT["hash"] = HASH

# ---- wf: where 100 sign-ups are by month 3, 4-6, 7-12, still ordering (waffle on slide 2) ----
gone3 = round(100 * (1 - S0[2])); gone46 = round(100 * (S0[2] - S0[5])); gone712 = round(100 * (S0[5] - S0[11]))
OUT["wf"] = [gone3, gone46, gone712, 100 - gone3 - gone46 - gone712]
assert OUT["wf"] == [45, 21, 15, 19], OUT["wf"]

# ---- payback ----
OUT["pay"] = [UNIT["payback"], round(100 * UNIT["pay_surv"])]
assert OUT["pay"] == [10, 23], OUT["pay"]

# ---- unit economics ----
OUT["unit"] = dict(leaver_gp="₹2,281", leaver_loss="−5₹4,719", leaver_boxes="1.4", stayer_gp="₹17,915",
                    stayer_boxes="11.2", stayer_ratio="2.56x", leaver_drag="₹2.5 Cr", cac="₹7,000")
OUT["unit"]["leaver_loss"] = "−₹4,719"

# ---- 4-year history: gross margin, marketing, other cost as % of revenue ----
gm_h = [round(h["gm"] * 100) for h in HIST]; mk_h = [round(h["mk"] * 100) for h in HIST]; ox_h = [round(h["ox"] * 100) for h in HIST]
OUT["gm"] = gm_h; OUT["mk"] = mk_h; OUT["ox"] = ox_h; OUT["revh"] = [h["rev"] for h in HIST]
assert OUT["gm"] == [38, 36, 33, 31] and OUT["mk"] == [22, 25, 28, 30] and OUT["ox"] == [28, 26, 24, 23], (OUT["gm"], OUT["mk"], OUT["ox"])
assert OUT["revh"] == [19, 29, 38, 42]
OUT["dmk"] = V["dmk"]
assert OUT["dmk"] == ["31p", "38p", "49p"], OUT["dmk"]

# ---- why customers leave: case vs review mix vs which proposal answers it ----
OUT["why"] = [w[1] for w in F["why"]]
assert OUT["why"] == [34, 27, 18, 11, 10], OUT["why"]
OUT["rv"] = [42.5, 16.2, 1.8, 12.4, 27.1]            # research section 7.2, table T38 (review mix)
OUT["fix"] = ["A", "none", "A, C", "A", "none"]      # research section 7.1, table T34

# ---- scorecard (post-repair: growth/profit/cash/risk bands, score unchanged) ----
OUT["score"] = [[OPT[k]["s_growth"], OPT[k]["s_profit"], OPT[k]["s_cash"], OPT[k]["s_risk"], "%.2f" % OPT[k]["score"]]
                 for k in ("A_written", "B_written", "C_written")] + [[PER["s_growth"], PER["s_profit"], PER["s_cash"], PER["s_risk"], "%.2f" % PER["score"]]]
assert OUT["score"] == [[1, 2, 4, 4, "2.80"], [5, 3, 3, 2, "3.20"], [4, 5, 1, 2, "3.00"], [1, 5, 4, 4, "3.70"]], OUT["score"]

# ---- quarterly cash paths ----
def qpts(k):
    return [round(F["cash"], 2)] + [round(RUNS[k][i]["cash"], 2) for i in range(2, 24, 3)]
OUT["cashq"] = {k: qpts(k) for k in ("drift", "A_written", "B_written", "C_written", "base", "core", "bear", "bear_cont", "bull")}
assert OUT["cashq"]["base"][-1] == round(SUM["base"]["cash24"], 2) == 2.92, OUT["cashq"]["base"]
assert OUT["cashq"]["core"][-1] == round(SUM["core"]["cash24"], 2) == 5.65
assert OUT["cashq"]["bear"][-1] == round(SUM["bear"]["cash24"], 2) == -2.70
assert OUT["cashq"]["bear_cont"][-1] == round(SUM["bear_cont"]["cash24"], 2) == 1.46

OUT["zero"] = dict(drift=SUM["drift"]["zero"], A=SUM["A_written"]["zero"], B=SUM["B_written"]["zero"], C=SUM["C_written"]["zero"])
assert OUT["zero"] == dict(drift=18, A=16, B=16, C=15), OUT["zero"]

OUT["aw1"] = "0.29"; OUT["bstore"] = "₹8,333"; OUT["cneed"] = "₹5 Cr"
OUT["pl"] = "₹3,500"; OUT["pl_cheaper"] = "32.7%"
OUT["skip"] = dict(cancels="12.6%", flips="5.6%", base="5%")

OUT["plans"] = [["₹3,600", "8 meals", "₹450 a meal", "20% of sign-ups"],
                 ["₹5,200", "12 meals", "₹433 a meal", "65% of sign-ups"],
                 ["₹6,600", "16 meals", "₹412 a meal", "15% of sign-ups"]]
OUT["aov"] = "₹5,091"

OUT["aarrr"] = [["Acquisition", "website conversion 2.8% to 3.3%"],
                 ["Activation", "first box on the ₹3,600 entry plan"],
                 ["Retention", "month 3 retention 55% to 65%"],
                 ["Referral", "20% of sign-ups, ₹1,000 each side"],
                 ["Revenue", "order value ₹5,091 on the new mix"]]

OUT["ladder"] = [["Today", 1.55], ["Retention", round(V["ladder"][1][1], 2)], ["Margin", round(V["ladder"][2][1], 2)], ["CAC", round(V["ladder"][3][1], 2)], ["Target", 3.0]]
assert OUT["ladder"][3][1] == 2.70, OUT["ladder"]

OUT["ins12"] = dict(core_cum=-7.55, c_cum=-7.09, core_cash=5.65, c_cash=2.92, core_rr=-1.69, c_rr=-3.19)

OUT["bridge"] = [[n, round(v, 2)] for n, v in BRIDGE]
assert len(OUT["bridge"]) == 12, len(OUT["bridge"])
assert abs(OUT["bridge"][0][1] - (-9.24)) < 0.01 and abs(OUT["bridge"][-1][1] - 0.10) < 0.01, OUT["bridge"]
split_labels = ["Proposal A: referral on the third box", "Proposal A: win-back of lapsed customers", "Proposal A: website conversion"]
OUT["acquisition_total"] = round(sum(v for n, v in BRIDGE if n in split_labels), 2)
OUT["split"] = [[n, round(v, 2)] for n, v in BRIDGE if n in split_labels]
assert abs(sum(v for _, v in OUT["split"]) - 3.77) < 0.02, OUT["split"]

b = SUM["base"]
OUT["be"] = "MONTH %d" % b["be"]; OUT["mincash"] = "2.9"; OUT["minm"] = b["minm"]; OUT["core24"] = "5.6"
assert b["be"] == 21 and b["minm"] == 20, (b["be"], b["minm"])

OUT["scen"] = V["scen"]

# ---- risk register, after R4b (risk 4 moves to probability 3, impact 5) ----
OUT["risk"] = [[1, 3, 4], [2, 3, 3], [3, 3, 3], [4, 3, 5], [5, 3, 4], [6, 2, 3], [7, 2, 2], [8, 2, 2], [9, 3, 3], [10, 2, 5], [11, 2, 4], [12, 2, 5]]

OUT["kpi"] = V["kpi"]
assert OUT["kpi"][1][5] == "over 6% for 2 months", OUT["kpi"][1]
assert OUT["kpi"][0][2] == "M2: 81%", OUT["kpi"][0]

OUT["gate"] = dict(cash=round(RUNS["base"][11]["cash"], 2), cash_target=7, ltvcac=round(RUNS["base"][11]["ltv"] / RUNS["base"][11]["cac"], 2), ltvcac_target=2.2)
assert OUT["gate"]["cash"] == 7.67 and OUT["gate"]["ltvcac"] == 2.74, OUT["gate"]

# ---- 90-day plan: eight workstreams, research section 22.1 table T134 ----
# colour codes: p=primary (build), o=orange (marketing), d=primaryDeep (ops/data/governance)
OUT["gantt"] = [["Product build", 0, 12, "p"], ["Pricing rollout", 0, 11, "p"], ["Menu and supply", 0, 11, "p"],
                 ["Referral program", 0, 11, "o"], ["Marketing cuts", 0, 11, "o"], ["Fulfilment moves", 1, 12, "d"],
                 ["KPI tracking", 0, 13, "d"], ["Pilot and review", 1, 12, "d"]]
OUT["gantt_marks"] = [4, 8, 12]

# ---- budget of the Rs 1.8 Cr, research section 22.5 table T140 ----
OUT["budget"] = [["Product build", 35, 0.63], ["Menu redesign", 15, 0.27], ["Referral system", 15, 0.27],
                   ["Marketing & web", 10, 0.18], ["Data and KPI", 10, 0.18], ["Pilot operations", 15, 0.27]]
assert round(sum(r[2] for r in OUT["budget"]), 2) == 1.80, OUT["budget"]

OUT["uses"] = V["uses"]
assert round(sum(u[1] for u in OUT["uses"]), 2) == 15.00, OUT["uses"]

# ---- five forces, research section 10.1 table T52 ----
OUT["forces"] = [["Buyers", 4, "High"], ["Substitutes", 5, "High, and rising"], ["Entrants", 3, "Moderate"],
                   ["Suppliers", 2, "Low to moderate"], ["Rivalry", 1, "Low"]]

# ---- five routes to dinner, research section 9.2 table T46 ----
OUT["routes"] = [["Cook from scratch", "No verified per-meal figure"], ["Order in", "₹499 to ₹660 an order"],
                   ["Ten-minute food", "₹250 to ₹450 a meal"], ["Private-label kit", "₹3,500 a box"],
                   ["HarvestBox kit", "₹5,200 a box"]]

# ---- dark stores, research section 9 table T48 ----
OUT["dark"] = [["Blinkit", 969], ["Zepto", 828], ["Flipkart Minutes", 627], ["Instamart", 615], ["BigBasket", 497]]

# ---- four market-size reports, research section 9.3 table T47 ----
OUT["reports"] = [["IMARC Group", "$6.2 bn (2025)", "7.61%/yr"], ["Ken Research", "$1.28 bn (2025)", "16.40%/yr"],
                    ["Technavio", "$2.17 bn (2025)", "28.8%/yr"], ["GlobalData", "₹19,931.6m (2025)", "14.29%/yr"]]

# ---- Indian precedents, research section 12 tables T65/T66 ----
OUT["india"] = [["Rebel Foods", 1420], ["Country Delight", 1380], ["Licious", 795], ["iD Fresh Food", 681],
                  ["Curefoods", 635], ["FreshToHome", 421], ["HarvestBox", 42]]

# ---- global precedents, research section 11 table T63 ----
OUT["glob"] = [["Gousto", "£342m revenue, £45m adjusted EBITDA, third profitable year"],
                 ["HelloFresh", "about €6.76bn revenue, 13.5% meal-kit margin"],
                 ["Marley Spoon", "€330.1m revenue, 34.7% contribution margin"],
                 ["Blue Apron", "about $1.9bn IPO value, sold for $103m"]]

OUT["assum"] = V["assum"]
OUT["check"] = V["check"]

short_labels = {"3-month retention 60% to 70%": "Month-3 retention", "Skip rate 12% to 0%": "Skip rate",
                 "Referral share 10% to 30%": "Referral share", "Conversion 3.0% to 3.6%": "Website conversion",
                 "Margin levers +2.5 to +5.0 pts": "Margin levers", "Overhead cut 6% to 15%": "Overhead cut",
                 "Non-working marketing cut 25% to 50%": "Brand spend cut", "Ready-to-eat sales 50% to 120% of plan": "Ready-to-eat sales"}
torn_rows = [[short_labels.get(n, n), round(lo["rr"], 2), round(hi["rr"], 2)] for n, lo, hi in TORN]
torn_rows.sort(key=lambda r: abs(r[2] - r[1]), reverse=True)
OUT["torn"] = torn_rows
OUT["torn_base"] = round(SUM["base"]["rr"], 2)

# ---- break-even input values, research section 20.5 table T127 ----
OUT["beIn"] = [["Referral share", "20%", "18.1%"], ["Skip rate", "5%", "5.6%"], ["Month-3 retention", "65%", "64.5%"],
                ["Website conversion", "3.3%", "3.27%"], ["Margin levers", "+4.0 pts", "+3.8 pts"]]

OUT["quote"] = dict(text="no option to cancel subscription in the app. I HATE these business practices and will not support any companies that use them.",
                      meta="Play Store review of HelloFresh, 1 star, Aug 2026")

OUT["team"] = V["team"]

io.open(D / "values.json", "w", encoding="utf-8", newline="\n").write(json.dumps(OUT, ensure_ascii=False, indent=None))
print("values.json written,", len(json.dumps(OUT, ensure_ascii=False)), "chars,", len(OUT), "keys")
