"""Build V for the Eurogrip Case 4 slides from model/model_outputs.json. gen.py calls build(O); nothing here writes a file.
Every string is pre-formatted (rupee sign, Indian grouping). SRC1 to SRC4 and CRESTS are finalised in step D0."""
SC = ("bear", "base", "bull")
SRC1 = "Source: Eurogrip x Unstop Case Study 4 brief | TVS Srichakra annual report FY26 | research sections 3, 6, 8 | model "
SRC2 = "Source: Case Study 4 brief | MoSPI ASUSE, VAHAN | Castrol India (Fast Scan) | IndiaMART, Amazon.in tool prices, Oct 2026 | research sections 6 to 14 | model "
SRC3 = "Source: model tables T1 to T12 | research/data: universe_methods, state_parc (VAHAN), benchmarks (15 programmes) | research sections 6, 8, 11, 13, 14 | model "
# Pilot shares are the share_pct column of research/data/state_parc.csv (Tamil Nadu 7.6, Uttar Pradesh 13.8; S195, S196).
PILOTLINE = "Pilots: Tamil Nadu (home) and Uttar Pradesh (thin)."
RSN = {"R02": "Codes not logged"}          # display names that fit the A6 risk column (measured)
RCN = {"R03": "6-monthly review"}          # display names that fit the A6 control column (measured)
LEG = ["Tools", "Visibility", "Training", "Field", "Tech"]   # P7 legend names, same order as the model's five lines
SRC4 = "Source: Team IdeaForge, Eurogrip x Unstop Case Study 4 submission | model "
CRESTS = [["Castrol", "lubricants"], ["Amaron", "batteries"], ["Bosch", "parts"], ["Pidilite", "adhesives"], ["Havells", "electricals"]]   # 5 real programmes from research/data/benchmarks.csv, one per category, JK Tyre excluded (same category as Eurogrip, belongs with the rivals node on S1 instead)
SEGL = {"S-A": "stock and fit tyres", "S-B": "service bikes, stock none", "S-C": "fix punctures, refer"}
SEGS = {"S-A": "Stocking", "S-B": "Service", "S-C": "Puncture"}
# Short display labels for the tornado chart (A2 appendix panel). Only the 12 IDs in the model's
# TOR list ever appear in c4.tornado; every one is covered here so the chart never falls back to a
# raw assumption ID. Kept at or under 15 characters to fit the tornado helper's label column.
TORL = {"A27": "Tyre MRP", "A30": "Contribution", "A29": "Channel cut", "A20": "Referral fee",
        "A10": "Tier 3 kit", "A09": "Tier 2 kit", "A08": "Tier 1 kit", "A17": "Enrolment",
        "A18": "Team cost", "A06": "Coverage", "A33": "Meets", "A13": "Training"}
# Phrase form of the same IDs for the A2 switch-point sentence (grammatical mid-sentence, unlike the
# tornado chart's short noun-phrase labels).
TORP = {"A27": "the tyre price", "A30": "the contribution margin", "A29": "the channel margin",
        "A20": "the credit per referral", "A10": "Tier 3 tool cost", "A09": "Tier 2 tool cost",
        "A08": "Tier 1 tool cost", "A17": "the enrolment cost", "A18": "the programme team size",
        "A06": "the coverage cap", "A33": "the meets cost", "A13": "the training cost"}


def inr(x):
    n = abs(round(x)); s = str(n)
    if len(s) > 3:
        head, tail = s[:-3], s[-3:]; parts = []
        while len(head) > 2:
            parts.append(head[-2:]); head = head[:-2]
        if head:
            parts.append(head)
        s = ",".join(reversed(parts)) + "," + tail
    return ("−" if round(x) < 0 else "") + s


def f1(x): return f"{x:.1f}"
def pc(x): return f"{round(x)}%"


def build(O):
    assert all(O["checks"].values()), [k for k, v in O["checks"].items() if not v]
    A = O["A"]; c = O["c4"]; h = O["meta"]["hash"]; b = "base"
    be3 = [f1(c["be"][s]) for s in SC]; be = be3[1]
    weeks = str(round(52 / c["be"][b]))
    members = f1(c["members_lakh"][b]); spend = f1(c["spend_cr"][b]); budget = "₹" + spend + " crore"
    share = f"{c['spend_share_pct'][b]:.2f}%"
    univ = f1(c["universe"]["base"]); univ3 = [f1(c["universe"][s]) for s in SC]
    app = c["app_name"]
    seg = [{"label": SEGL[g["key"]], "lakh": f1(g["lakh"]), "v": g["share"],
            "t": pc(g["share"] * 100) if g["share"] >= 0.15 else ""} for g in c["segments"]]
    tiers = [["Tier 1", "repair kit and board", "any referral"],
             ["Tier 2", "gauge, apron, course", "%d referrals" % c["tiers"]["t2_refs"]],
             ["Tier 3", "inflator and listing", "%d referrals" % c["tiers"]["t3_refs"]]]
    alloc = [{"label": l["line"], "v": l["cr"], "pct": pc(l["pct"]), "cr": "₹" + f1(l["cr"])} for l in c["lines"]]
    gantt = [["2 states", 0, 1, ""], ["8 states", 2, 3, ""], ["National", 4, 7, "all states"]]
    kpis = [["Activity", "Monthly active", "G1 ≥ " + pc(A["A23"]["base"] * 100)],
            ["Advocacy", "Mystery audit", "G1 +%d points" % round(A["A24"]["base"])],
            ["Sales", "Code-linked tyres", "G2 ≥ " + be + " each"],
            ["Brand", "Brand re-survey", "G3 stocking up"]]
    meths = c["universe"]["methods"]
    tri = [{"label": m["method"], "v": m["base"], "text": f1(m["base"]) + " lakh", "est": m["kind"] == "estimate"} for m in meths]
    segrows = [[SEGS[g["key"]], f1(g["lakh"]), pc(g["share"] * 100)] for g in c["segments"]] + [["Total", univ, "100%"]]
    scen = [["BU revenue, ₹ cr"] + [inr(c["bu_rev_cr"][s]) for s in SC],
            ["Budget share"] + [f"{A['A02'][s]:.2f}%" for s in SC],
            ["Spend, ₹ cr"] + [f1(c["spend_cr"][s]) for s in SC],
            ["Members, lakh"] + [f1(c["members_lakh"][s]) for s in SC],
            ["Cost per member"] + ["₹" + inr(c["cost_per_member"][s]) for s in SC],
            ["Break-even tyres"] + be3]
    # Compact 3-row version for the redesigned A2 panel (table + tornado side by side; PLAN.md
    # §6.5 A2 decision, logged in DECISIONS.md: the full 6-row table doesn't fit next to a tornado
    # chart at the 22pt floor, and the tornado is the higher-value addition, modelled on the winning
    # reference deck's "A3 Sensitivity and scenarios" panel).
    scen3 = [["Spend, ₹cr"] + [f1(c["spend_cr"][s]) for s in SC],
             ["Members"] + [f1(c["members_lakh"][s]) for s in SC],
             ["Break-even"] + be3]
    tor = c["tornado"][:5]
    tornado_items = [{"label": TORL.get(t["id"], t["id"]), "lo": t["be_low"], "hi": t["be_high"]} for t in tor]
    be_base = c["be"]["base"]
    switch = f"The break-even bar moves most with {TORP.get(tor[0]['id'], tor[0]['label'])}." if tor else ""
    bench = {"rows": [r["short"] for r in c["bench"]],
             "cells": [[r[k] for k in ("cash", "tools", "visibility", "skill", "advice", "tracks")] for r in c["bench"]]}
    rk = c["risks"][:5]
    cells = [["" for _ in range(3)] for _ in range(3)]
    for n, r in enumerate(rk, 1):
        i, j = 3 - int(r["p"]), int(r["i"]) - 1          # row 0 = high probability, column 2 = high impact
        cells[i][j] = (cells[i][j] + ", " if cells[i][j] else "") + str(n)
    risks = [r["risk_short"] + ": " + r["control_short"] for r in rk]
    V = dict(hash=h,
             team=dict(name="TEAM IDEAFORGE", rows=[["Harsh Kawatra", "Delhi Technological University", "Team Leader"]]),
             h2=f"Tools and status for {members} lakh shops cost {budget} a year, about half a cash-per-tyre scheme, and repay the lot at {be} extra tyres a shop",
             h3=f"Appendix: {univ} lakh shops counted four ways, ₹{inr(c['cost_per_member'][b])} a member a year, and break-even from {be3[2]} to {be3[0]} tyres a shop, under the kill line of {round(A['A26']['base'])}",
             src1=SRC1 + h, src2=SRC2 + h, src3=SRC3 + h, src4=SRC4 + h, crests=CRESTS,
             seg=seg, univ=univ, univ3=univ3, tiers=tiers, app=app, be=be, be3=be3,
             bevals=[c["be"][s] for s in SC], weeks=weeks, budget=budget,
             p7title=f"₹{spend} CRORE, {share} OF UNIT REVENUE", alloc=alloc, members=members, gantt=gantt, kpis=kpis,
             cover_line=f"Every mechanic and puncture shop can join free. A personal code, logged by the retailer in the {app}, earns tools, visibility and training even where Eurogrip is not stocked. Tiers are re-earned every six months.",
             thanks=f"equip the mechanic, credit the advice and measure the recommendation. At {be} extra tyres a shop a year, {budget} pays for itself.",
             tri=tri, segrows=segrows, pilots=c["pilot_states"], scen=scen, scen3=scen3,
             tornado_items=tornado_items, be_base=be_base, switch=switch,
             bench=bench, riskcells=cells, risks=risks,
             valid=f"{int(c['validation']['interviews'])} interviews, {int(c['validation']['cities'])} cities")
    # ===== REBUILD v2 KEYS (PLAN.md Part 2, R2.2) =====
    cs = c["cash_scheme"]
    assert 0.4 < c["spend_cr"][b] / cs["cost_cr"] < 0.6, "headline says 'about half a cash-per-tyre scheme'"
    cpt = c["cpt"][b]; am = A["A11"]["base"]; cr = A["A20"]["base"]
    mix = [A["A07a"]["base"], A["A07b"]["base"], A["A07c"]["base"]]
    trn = A["A13"]["base"] * A["A13s"]["base"] + A["A33"]["base"]
    TK = [("A08", "A08v", "A12a", "A15a"), ("A09", "A09v", "A12b", "A15"), ("A10", "A10v", "A12c", "A16")]
    tier_cost = [A[t]["base"] / am + A[v]["base"] / am + 4 * A[r]["base"] + A[n]["base"] * cr + (trn if k else 0)
                 for k, (t, v, r, n) in enumerate(TK)]
    pb_ = c["parts"][b]
    assert abs(sum(m * x for m, x in zip(mix, tier_cost)) - (pb_["tools"] + pb_["visibility"] + pb_["training"])) < 1, \
        "tier costs must rebuild the model's per-member tools + visibility + training"
    V["seg2"] = [{"head": hd, "num": f1(g["lakh"]) + " lakh", "share": pc(g["share"] * 100), "need": nd}
                 for g, hd, nd in zip(c["segments"], ["Stock and fit", "Service only", "Puncture fix"],
                                      ["needs margin", "needs tools", "needs refills"])]
    V["ins"] = [["Stocking lags", "credit advice"], ["Non-stockers refer", "code, no stock"],
                ["Visibility rising", "boards, aprons"], ["One-offs fade", "6-month tiers"]]
    V["cmp"] = [["Cost a year", "₹" + f1(cs["cost_cr"]) + " crore", budget],
                ["Deadweight", pc(cs["deadweight_pct"]) + " of spend", "pilot tests it"],
                ["Pays for", "stockists only", "every adviser"],
                ["Rival copy", "in a week", "hard to copy"]]
    V["tierrows"] = [["Tier %d" % (k + 1), gets, "%d a year" % round(A[n]["base"]), "₹" + inr(tc), pc(m * 100)]
                     for k, (gets, n, tc, m) in enumerate(zip(["repair kit, board", "gauge, apron, course", "inflator, listing"],
                                                              ["A15a", "A15", "A16"], tier_cost, mix))]
    V["repay"] = "Each tier repays its cost at %s, %s and %s extra tyres a year" % tuple(f1(x / cpt) for x in tier_cost)
    V["stack"] = [[c["lines_sc"][s][i]["cr"] for s in SC] for i in range(5)]
    V["stot"] = ["₹" + f1(c["spend_cr"][s]) for s in SC]
    V["leg"] = [{"label": LEG[i], "pct": pc(l["pct"]), "cr": "₹" + f1(l["cr"])} for i, l in enumerate(c["lines"])]
    GL = {1: " G1", 3: " G2", 7: " G3"}
    V["ramp"] = [{"q": q["q"] + GL.get(i, ""), "v": q["members_lakh"], "t": f"{q['members_lakh']:.2f}"} for i, q in enumerate(c["rollout"])]
    V["p8title"] = f"24 MONTHS: {members} LAKH SHOPS, 3 GATES"
    V["gates"] = [["G1", "Q2", f"{pc(A['A23']['base'] * 100)} active, audit +{round(A['A24']['base'])} points"],
                  ["G2", "Q4", f"{be} extra tyres a shop"], ["G3", "Q8", "stocking up on re-survey"],
                  ["Stop", "any", f"break-even above {round(A['A26']['base'])}"]]
    tri2 = []
    for mth in c["universe"]["methods"]:
        est = mth["kind"] == "estimate"
        tri2.append({"label": mth["method"], "lo": mth["low"], "base": mth["base"], "hi": mth["high"], "floor": not est,
                     "text": (f"{f1(mth['base'])} ({f1(mth['low'])} to {f1(mth['high'])})" if est else f"{f1(mth['base'])}, floor")})
    V["tri2"] = tri2; V["univb"] = c["universe"]["base"]
    V["a1note"] = f"Base {univ} lakh: mean of two estimates, not below Castrol's {f1(c['universe']['floor'])} lakh."
    V["pilotline"] = PILOTLINE
    V["cpm"] = inr(c["cost_per_member"][b])
    P_ = c["parts"]
    CK = [("Tools, refills", "tools"), ("Visibility kits", "visibility"), ("Training, meets", "training"), ("Enrolment", "field"), ("Messaging", "tech")]
    V["cpmrows"] = [[lab] + ["₹" + inr(P_[s][k]) for s in SC] for lab, k in CK] + [["Total"] + ["₹" + inr(c["cost_per_member"][s]) for s in SC]]
    fixed = c["spend_cr"][b] - c["members_lakh"][b] * 1e5 * c["cost_per_member"][b] / 1e7
    V["a2note"] = f"Base: {c['members_lakh'][b]:.2f} lakh members × ₹{V['cpm']} + ₹{f1(fixed)} crore fixed = {budget} a year"
    V["tor6"] = [{"label": TORL.get(t["id"], t["id"]), "lo": t["be_low"], "hi": t["be_high"], "txt": f"{f1(t['be_low'])} to {f1(t['be_high'])}"}
                 for t in c["tornado"][:6]]
    V["killnote"] = f"Kill line is {round(A['A26']['base'])}: even the bear case, {be3[0]}, stays under it."
    V["scen8"] = [["Unit revenue, ₹ cr"] + [inr(c["bu_rev_cr"][s]) for s in SC],
                  ["Budget share"] + [f"{A['A02'][s]:.2f}%" for s in SC],
                  ["Envelope, ₹ cr"] + [f1(c["envelope_cr"][s]) for s in SC],
                  ["Spend, ₹ cr"] + [f1(c["spend_cr"][s]) for s in SC],
                  ["Members, lakh"] + [f"{c['members_lakh'][s]:.2f}" for s in SC],
                  ["Contribution a tyre"] + ["₹" + inr(c["cpt"][s]) for s in SC],
                  ["Break-even tyres"] + be3,
                  ["Weeks a tyre"] + [str(round(c["weeks"][s])) for s in SC]]
    V["bench4"] = [[r_["short"], r_["cash"], r_["tools"], r_["visibility"], r_["advice"]] for r_ in c["bench"]]
    V["a5note"] = "Signs = boards and uniforms. Advice = credits a recommendation with no purchase. As published; n/a = not disclosed."
    V["risk5"] = [[RSN.get(r_["id"], r_["risk_short"]), r_["p"] * r_["i"], RCN.get(r_["id"], r_["control_short"])] for r_ in c["risks"][:5]]
    au = c["audit"]
    V["auditline"] = f"Audit: {au['n_per_arm']} shops an arm, {round(au['audits_per_year'])} visits, ₹{f1(au['cost_lakh'])} lakh"
    assert all(len(r_[1]) <= 15 and len(r_[2]) <= 14 for r_ in V["cmp"]) and len(V["repay"]) <= 66
    assert len(V["tor6"]) == 6 and all(len(t["label"]) <= 12 for t in V["tor6"])
    # ===== END REBUILD v2 KEYS =====
    V["must"] = [be, budget, univ + " lakh", "TEAM IDEAFORGE", "Harsh Kawatra", "Delhi Technological University",
                 "CASH PER TYRE", "THE LOOP",
                 "Case Study 4", "THANK YOU", "THEREFORE", "Tier 1", "Tier 2", "Tier 3", "INCENTIVE REALISM", "MEASURABILITY"]
    assert len(V["h2"]) <= 150 and len(V["h3"]) <= 150, (len(V["h2"]), len(V["h3"]))
    assert all(len(x) <= 40 for x in risks) and 5 <= len(bench["rows"]) <= 7 and all(len(r) <= 16 for r in bench["rows"])
    assert len(tri) == 4 and all(len(t["label"]) <= 17 for t in tri) and len(CRESTS) == 5
    assert all(len(src) <= 230 for src in (V["src1"], V["src2"], V["src3"], V["src4"]))
    assert 3 <= len(tornado_items) <= 6 and all(len(t["label"]) <= 12 for t in tornado_items)
    assert all(t["lo"] <= be_base <= t["hi"] or t["hi"] <= be_base <= t["lo"] for t in tornado_items), \
        "a tornado row's bear/bull range must straddle the base break-even value"
    assert len(switch) <= 90
    return V
