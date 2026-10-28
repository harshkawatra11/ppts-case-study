"""Build the V object for the slide scripts from model/model_outputs.json. gen.py calls build(O); nothing here writes a file.
Every string is pre-formatted: rupee sign, Indian digit grouping, true minus sign. Model run hash is pinned: if the model
is re-run and the hash changes, stop and re-check the constants table in DECK-PLAN.md section 4 before building."""
MODEL_HASH = "3a53e3745f"
SC = ["bear", "base", "bull"]
def inr(x):
    n = abs(round(x)); s = str(n)
    if len(s) > 3:
        head, tail = s[:-3], s[-3:]; parts = []
        while len(head) > 2: parts.append(head[-2:]); head = head[:-2]
        if head: parts.append(head)
        s = ",".join(reversed(parts)) + "," + tail
    return ("\u2212" if round(x) < 0 else "") + s
def rs(x): return ("\u2212" if round(x) < 0 else "") + "\u20b9" + inr(abs(x))
def lk(x, dp=1): return ("\u2212" if x < 0 else "") + "\u20b9" + f"{abs(x) / 100000:.{dp}f}" + " lakh"
def n1(x): return f"{x:.1f}"
def pc(x): return f"{round(x * 100)}%"
NAME = {"DTU": "DTU", "NSUT": "NSUT", "Thapar Institute of Engineering and Technology": "Thapar Institute", "BIT Mesra": "BIT Mesra",
 "BITS Pilani (Pilani campus)": "BITS Pilani", "PEC Chandigarh": "PEC Chandigarh", "IIIT Delhi": "IIIT Delhi", "IGDTUW": "IGDTUW",
 "NIT Kurukshetra": "NIT Kurukshetra", "MNIT Jaipur": "MNIT Jaipur", "MNNIT Allahabad": "MNNIT", "IIIT Allahabad": "IIIT Allahabad",
 "NIT Jalandhar": "NIT Jalandhar", "NIT Tiruchirappalli": "NIT Tiruchirappalli", "NIT Karnataka Surathkal": "NIT Karnataka, Surathkal",
 "NIT Warangal": "NIT Warangal", "NIT Calicut": "NIT Calicut", "IIIT Hyderabad": "IIIT Hyderabad", "BITS Pilani Hyderabad campus": "BITS Pilani, Hyderabad",
 "VIT Vellore": "VIT Vellore", "Manipal Institute of Technology": "MIT Manipal", "RV College of Engineering Bengaluru": "RV College of Engineering",
 "BITS Pilani, Goa campus": "BITS Pilani, Goa", "VJTI Mumbai (Veermata Jijabai Technological Institute)": "VJTI Mumbai",
 "COEP Technological University, Pune": "COEP Pune", "VNIT Nagpur (Visvesvaraya National Institute of Technology)": "VNIT Nagpur",
 "NIT Rourkela (National Institute of Technology, Rourkela)": "NIT Rourkela", "Jadavpur University": "Jadavpur University",
 "IIT Delhi": "IIT Delhi", "IIT Roorkee": "IIT Roorkee", "IIT (BHU) Varanasi": "IIT (BHU) Varanasi", "IIT Guwahati": "IIT Guwahati"}
CH = {"C-ORG-1": "Society workshops", "C-ORG-2": "Branch reps", "C-ORG-3": "Mock placement drive", "C-ORG-4": "Gated library",
 "C-ORG-5": "Referral reward", "C-ORG-6": "Alumni stories", "C-ORG-7": "Placement cell talk", "C-PD-1": "Meta retargeting",
 "C-PD-2": "Meta geofence", "C-PD-3": "LinkedIn ads", "C-PD-4": "Micro-influencers"}
def sp(x): return f"{x:.0f}%" if float(x).is_integer() else f"{x:.1f}%"
def rk(x): return (f"{x // 1000}k" if x >= 10000 else inr(x))
T7L = {"A01_fee_inr": "Fee per student", "A09_application_to_enrolment": "Applicant conversion", "A11_meta_cpl_inr": "Meta cost per lead",
 "A08_lead_to_application": "Lead to application", "A26_gated_capture_rate": "Gated capture rate", "A06_event_registrants": "Event registrations"}
ASM = [("A01_fee_inr", "Fee per student", rs), ("A03_nontech_open_share", "Share open to non-tech", pc), ("A04_dtu_enrolments_12mo", "DTU enrolments today", inr),
 ("A05_referral_share", "Share arriving by referral", pc), ("A08_lead_to_application", "Lead to application", pc), ("A09_application_to_enrolment", "Application to enrolment", pc),
 ("A11_meta_cpl_inr", "Meta cost per lead", rs), ("A17_founding_cohort_size", "Founding cohort size", inr), ("A18_founding_cohort_discount", "Founding cohort discount", pc),
 ("A19_founding_cohort_selection_rate", "Cohort selection rate", pc), ("A20_season2_multiple", "Season 2 multiple", n1), ("A21_case_league_cost_inr", "Case competition cost", rs)]
MAP = [[[6,3]],[[5,6]],[[7,8]],[[7,7]],[[7,6]],[[8,6]],[[8,5]],[[8,6]],[[7,9]],[[6,9]],[[5,10],[32,3]],[[4,13],[25,1],[30,6]],[[2,18],[24,2],[29,5]],[[3,22],[26,7]],[[3,22],[27,6]],[[4,20],[30,2]],[[0,25],[28,3]],[[1,25],[30,1]],[[2,3],[6,20],[30,1]],[[2,3],[6,17]],[[6,17]],[[6,16]],[[6,14]],[[6,14]],[[6,12]],[[6,11]],[[7,9]],[[7,8]],[[8,7]],[[8,7]],[[8,7],[30,1]],[[9,5]],[[9,5]],[[10,4]],[[10,3]],[[11,1]],[],[[31,1]]]
def build(O):
    assert O["meta"]["hash"] == MODEL_HASH, "model re-run: re-check DECK-PLAN.md section 4 before building"
    assert all(O["checks"].values()), "a model check is failing"
    A = O["A"]; t1 = O["T1"]["base"]; t2 = O["T2"]; t4 = O["T4"]; t6 = O["T6"]; t8 = O["T8"]["colleges"]; t9 = O["T9"]; t10 = O["T10"][O["final4"][0]["college"]]
    t11 = O["T11"]; t12 = O["T12"]; t13 = O["T13"]; t14 = O["T14"]; F = O["F"]
    assert all(c["college"] in NAME for c in t8) and all(r["ch"] in CH for r in O["T3"])
    fund = {r["ch"]: r for r in t4["rows"]}; picks = [c["college"] for c in O["final4"]]; res = [c["college"] for c in O["reserve4"]]
    org_e = sum(r["funded_enrol"] for r in t4["rows"] if r["organic"]); paid_e = t4["total_enrol"] - org_e
    ch = [[r["ch"], CH[r["ch"]], rk(r["reach"]), n1(r["enrol_r"]), rs(r["cash_r"]), rs(r["cac"])] for r in O["T3"]]
    cac = [[CH[r["ch"]], round(r["cac"]), rs(r["cac"]), fund[r["ch"]]["funded_cash"] > 0, rs(fund[r["ch"]]["funded_cash"]), n1(fund[r["ch"]]["funded_enrol"]), r["organic"]]
           for r in sorted(O["T3"], key=lambda r: r["cac"])]
    def tag(c):
        if c["is_calibration"]: return "LIVE"
        if c["college"] in picks: return "PICK " + str(picks.index(c["college"]) + 1)
        return "BENCH" if c["college"] in res else "LOWER"
    def row(c): return [NAME[c["college"]], [c["scores"]["C%d" % i] for i in range(1, 8)], f"{c['fit']:.2f}", (sp(t9[c["college"]]) if c["college"] in t9 else "n/a"), tag(c)]
    ll = [c for c in t8 if not c["is_calibration"]]; ok = sorted([c for c in ll if c["screen_pass"]], key=lambda c: -c["fit"])
    cal = sorted([c for c in t8 if c["is_calibration"]], key=lambda c: -c["fit"])
    def why(c): return ("F1: batch of " + inr(c["raw"]["C3"])) if not c["pass_f1"] else ("F2: " + str(c["raw"]["C1"]) + " of 4 anchors")
    rest = [[NAME[c["college"]], f"{c['fit']:.2f}", why(c)] for c in sorted([c for c in ll if not c["screen_pass"]], key=lambda c: -c["fit"])]
    screen = [len(ll), sum(c["pass_f1"] for c in ll), sum(c["pass_f1"] and c["pass_f2_4"] for c in ll), len(picks)]
    assert screen == [28, 25, 10, 4] and len(rest) == 18 and len(ok) == 10, screen
    stab_min = int(min(c["stability_pct"] for c in O["final4"])); b6 = t6["base"]; b12 = t12["base"]; pen = t2["base"]["penetration_pct"]
    V = dict(
        hash=O["meta"]["hash"],
        team=dict(name="TEAM IDEAFORGE", rows=[["Harsh Kawatra", "Dept of ECE, DTU", "Team Lead"], ["Anuj Gambhir", "Dept of Biotechnology, DTU", "Member"]]),
        f2=f"{lk(b12['total_spend'])} takes BeyondTech from {t2['base']['enrolments_today']} to {inr(b6['enrolments'])} DTU enrolments and opens four new campuses in twelve months, by distributing proof before buying reach",
        f3=f"Recall at DTU is strong, yet about {pen:.1f}% of the non-tech pool enrols, because five leaks sit between hearing of BeyondTech and paying",
        f4=f"Eleven channels in three layers close the five leaks in order, and the cheapest, a gated resource library, brings {round(fund['C-ORG-4']['funded_enrol'])} enrolments at {rs(fund['C-ORG-4']['cac'])} each",
        f5=f"{lk(t4['total_cash'])} funds nine of eleven channels, cheapest first: organic takes {round(t4['organic_pct'])}% of the cash and brings {round(t4['organic_enrol_pct'])}% of the {inr(t4['total_enrol'])} enrolments",
        f6=f"BITS Pilani, NIT Tiruchirappalli, PEC Chandigarh and COEP Pune top a seven-criterion scorecard of {screen[0]} candidate colleges and hold in {stab_min}% or more of 2,000 re-weightings",
        f7=f"Each new campus is entered in four steps: borrow a society's trust, seed {t10['base']['founding_cohort']} students, earn their offers, then hand over to ambassadors who were customers first",
        f8=f"One campus costs {rs(t10['base']['cost_season1'])} to open and turns cash positive in season 1 in the base case; checkpoints at days 30, 60 and 90 decide stop, hold or scale",
        f9=f"Two waves add four campuses by September 2027 and lift base-case enrolments to {inr(b12['total_enrolments'])}, with every campus clearing three gates before more money is spent",
        fA=f"Every number on the eight slides traces to the brief, a named source, the {len(t8)}-college dataset or one model with {len(O['T16'])} stated assumptions",
        budget=rs(t4["total_cash"]), budget_lk=lk(t4["total_cash"]), enrol=inr(t4["total_enrol"]), cac=rs(b6["blended_cac"]),
        org_pct=f"{t4['organic_pct']:.1f}%", paid_pct=f"{t4['paid_pct']:.1f}%", org_pct0=f"{round(t4['organic_pct'])}%", org_e_pct0=f"{round(t4['organic_enrol_pct'])}%",
        org_e_pct=f"{t4['organic_enrol_pct']:.1f}%", paid_e_pct=f"{100 - t4['organic_enrol_pct']:.1f}%", split=[t4["organic_pct"], t4["paid_pct"], t4["organic_enrol_pct"], 100 - t4["organic_enrol_pct"]],
        layer=[["Organic", rs(t4["organic_cash"]), n1(org_e), rs(t4["organic_cash"] / org_e)], ["Paid", rs(t4["paid_cash"]), n1(paid_e), rs(t4["paid_cash"] / paid_e)],
               ["Total", rs(t4["total_cash"]), n1(t4["total_enrol"]), rs(b6["blended_cac"])]],
        tam=inr(t1["tam"]), sam=inr(t1["sam"]), cohort=inr(t1["year_cohort"]), now=inr(t2["base"]["enrolments_today"]), pen=f"{pen:.1f}%",
        pen3=[f"{t2[s]['penetration_pct']:.2f}%" for s in SC], sam3=[inr(O["T1"][s]["sam"]) for s in SC], now3=[inr(t2[s]["enrolments_today"]) for s in SC],
        ref=pc(A["A05_referral_share"]["base"]), posts=[["Intern post", F["foundersoffice_post_reactions"]], ["DCG case post", F["dcg_case_comp_post_reactions"]],
               ["Ambassador 1", F["ambassador_post1_reactions"]], ["Ambassador 2", F["ambassador_post2_reactions"]]],
        ladder=[["Enrolments"] + [str(A["A14_ambassador_enrolments_per_season"][s]) for s in SC], ["Payout each"] + [rs(A["A15_ambassador_payout_per_enrolment_inr"][s]) for s in SC],
                ["Referral"] + [rs(A["A16_referral_reward_per_enrolment_inr"][s]) for s in SC]],
        t10t=[["Founding cohort"] + [str(t10[s]["founding_cohort"]) for s in SC], ["Fee, season 1"] + [rs(t10[s]["fee_season1"]) for s in SC],
              ["League cost"] + [rs(t10[s]["cost_season1"]) for s in SC], ["Cash, season 1"] + [lk(t10[s]["cash_season1"], 2) for s in SC],
              ["Season 2 intake"] + [str(round(t10[s]["enrol_season2"])) for s in SC], ["Cash by end of S2"] + [lk(t10[s]["cash_season2"], 2) for s in SC],
              ["Breaks even"] + [t10[s]["breakeven"] for s in SC]],
        cash_line=[[0, t10[s]["cash_season1"] / 1e5, t10[s]["cash_season2"] / 1e5] for s in SC], median=f"{O['T8']['median_fit']:.2f}",
        ch=ch, cac_rows=cac, months=[r["month"][:3] for r in O["T5"]["rows"]], spend=[r["spend"] for r in O["T5"]["rows"]], menrol=[r["enrolments"] for r in O["T5"]["rows"]],
        t6=[[s.capitalize(), inr(t6[s]["enrolments"]), lk(t6[s]["spend"]), rs(t6[s]["blended_cac"]), lk(t6[s]["contribution"])] for s in SC],
        t7=[[T7L[r["assumption"]], r["contribution_bear"] / 1e5, r["contribution_bull"] / 1e5, lk(r["swing"])] for r in O["T7"]["rows"] if r["swing"] > 0], t7base=O["T7"]["base_contribution"] / 1e5,
        contrib=lk(b6["contribution"], 2), grid=[row(c) for c in ok], cal=[row(c) for c in cal], rest=rest, screen=screen, stab_min=f"{stab_min}%",
        t10=[[s.capitalize(), str(t10[s]["founding_cohort"]), rs(t10[s]["fee_season1"]), rs(t10[s]["cost_season1"]), rs(t10[s]["cash_season1"]), str(round(t10[s]["enrol_season2"])), rs(t10[s]["cash_season2"]), t10[s]["breakeven"]] for s in SC],
        cost1=rs(t10["base"]["cost_season1"]), cohort20=str(t10["base"]["founding_cohort"]), amb=str(t10["base"]["ambassadors"]), enrol2=str(round(t10["base"]["enrol_season2"])),
        offers=str(t13["m12"]["offers_per_campus"]), hours=[t11["hours_today"], -t11["hours_freed_dtu"], t11["hours_new_campuses"], t11["hours_after_total"]], cap=inr(t11["capacity_annual"]),
        t12=[[s.capitalize(), inr(t12[s]["total_enrolments"]), lk(t12[s]["total_spend"]), lk(t12[s]["total_contribution"])] for s in SC], t12e=[t12[s]["total_enrolments"] for s in SC],
        total_spend=lk(b12["total_spend"]), total_enrol=inr(b12["total_enrolments"]), total_contrib=lk(b12["total_contribution"]),
        t13=[["Leads"] + [inr(t13[m]["leads"]) for m in ("baseline", "m3", "m6", "m12")], ["Applications"] + [inr(t13[m]["applications"]) for m in ("baseline", "m3", "m6", "m12")],
             ["Second-year share"] + [pc(t13[m]["second_year_share"]) for m in ("baseline", "m3", "m6", "m12")], ["Founding cohort fill"] + [pc(t13[m]["founding_cohort_fill"]) for m in ("baseline", "m3", "m6", "m12")],
             ["Offers per new campus"] + [str(t13[m]["offers_per_campus"]) for m in ("baseline", "m3", "m6", "m12")]],
        t14=[[d.replace("day", "Day "), t14[d]["metric"].replace("founding-cohort ", "").capitalize(), str(t14[d]["stop_below"]), str(t14[d]["scale_above"])] for d in ("day30", "day60", "day90")],
        t15=[[rs(r["price_inr"]), r["breakeven_enrolments"]] for r in O["T15"]],
        asm=[[k[:3], lab] + [fn(A[k][s]) for s in SC] for k, lab, fn in ASM], n_asm=str(len(O["T16"])), map=MAP)
    V["must"] = [V["budget_lk"], V["enrol"], V["cac"], V["org_pct0"], V["org_e_pct0"], V["pen"], V["cost1"], V["total_enrol"], V["stab_min"], "BEYONDTECH", "THANK YOU", "TEAM IDEAFORGE",
                 "Harsh Kawatra", "Anuj Gambhir", "BITS Pilani", "NIT Tiruchirappalli", "PEC Chandigarh", "COEP", "CONCLUSIVELY", "THEREFORE", "15 January", "Fit = 0.25 C1"]
    return V
