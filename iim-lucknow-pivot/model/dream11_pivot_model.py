"""Dream11 PIVOT '26 model. Single source of truth for every modelled number in the deck and the
research document. Run from iim-lucknow-pivot/model:  python dream11_pivot_model.py
Writes model_outputs.json and model_tables.md."""
import json, hashlib, datetime as dt

# ======================= F: case facts (never modify) =======================
F = dict(
    rev={"FY23": 6384, "FY24": 7934, "FY25": 6759}, pat={"FY23": 188, "FY24": 1295, "FY25": -479},
    paid_share=0.95, dau_sep25_m=10.0, age_18_35=0.70, watchalong_fans_m=30.0,
    users_feb26_m=250, users_aug26_m=300, bcci_deal_usd_m=44, staff=700, staff_left=0.15, gst_case=0.28)

# ======================= R: researched facts (change only via plan 5.6) =======================
R = dict(
    gst_statute=0.40,            # 56th GST Council, online money gaming, from 22 Sep 2025
    gst_pre2023_on_fee=0.18,     # GST on platform fee before 1 Oct 2023
    offshore_share=1/3,          # Lumikai: about 1 in 3 RMG users to offshore sites
    fy25_expenses_cr=7122.6,     # Inc42 / Entrackr FY25
    fy25_ad_spend_cr=3913,       # Inc42 / exchange4media FY25
    fy25_exceptional_cr=575,     # reverse-flip tax, FY25 (Entrackr, verified 29 Sep 2026)
    gst_notice_cr=28000,         # DGGI show-cause notice to Dream11, Oct 2023
)

# ======================= A: team assumptions (A01 to A33; see plan 7.2) =======================
SC = ["bear", "base", "bull"]
A = dict(
  A01_preban_season_active_m=100.0,
  A02_seg_share={"S1": 0.35, "S2": 0.05, "S3": 0.20, "S4": 0.15, "S5": 0.25},
  A03_seg_stay={"S1": 0.10, "S2": 0.05, "S3": 0.40, "S4": 0.35, "S5": 0.50},
  A04_prize_removal_drop=0.30,
  A05_wtb0_m={"bear": 3.5, "base": 5.0, "bull": 6.5},
  A06_nsm_curve=[1.00, 1.05, 1.20, 1.35, 1.50, 2.30, 2.80, 2.40, 1.60, 1.70, 1.85, 2.00],
  A07_curve_k={"bear": 0.5, "base": 1.0, "bull": 1.6},
  A08_mau_elasticity=0.35,
  A09_core_sessions_wk=3.0, A10_imps_per_core_session=9, A11_casual_sessions_mo=3, A12_imps_per_casual_session=5,
  A13_fill=0.75,
  A14_ecpm={"regular": 110, "ipl": 180},
  A15_ecpm_k={"bear": 0.75, "base": 1.0, "bull": 1.25},
  A16_sponsor={"title_rating_season": {"bear": 15, "base": 30, "bull": 45},
               "ipl_partners_n": {"bear": 3, "base": 5, "bull": 8}, "ipl_partner_cr": 5.0,
               "series_partners_n": {"bear": 2, "base": 4, "bull": 6}, "series_partner_cr": 2.5,
               "wpl_partner_cr": {"bear": 1.5, "base": 3.0, "bull": 4.5}},
  A17_pro_price_mo=49, A18_pro_arppu_mo=33,
  A19_pro_conv_start={"bear": 0.005, "base": 0.010, "bull": 0.015}, A20_pro_conv_end={"bear": 0.010, "base": 0.020, "bull": 0.030},
  A21_gift_payer_share=0.005, A22_gift_spend_mo=60, A23_gift_take=0.30,
  A24_fancode_ref_share=0.003, A25_fancode_pass_rs=99, A26_fancode_rev_share=0.15,
  A27_cost_cr={"people": 96, "tech_data": 45, "creators_content": 25, "marketing": 50, "g_and_a": 20},
  A28_rake=0.15, A29_deposit_ratio={"bear": 0.70, "base": 0.50, "bull": 0.35}, A30_prize_pool=0.85,
  A31_m1_baseline=0.35, A32_m2_baseline=0.20,
  A33_mau_mid26_m=50.0,
)
MONTHS = ["Oct'26", "Nov'26", "Dec'26", "Jan'27", "Feb'27", "Mar'27", "Apr'27", "May'27", "Jun'27", "Jul'27", "Aug'27", "Sep'27"]
IPLW = {"Mar'27": 0.7, "Apr'27": 1.0, "May'27": 0.5}      # IPL 2027 window 10 Mar to 15 May
SERIES = {"Oct'26", "Dec'26", "Jan'27", "Feb'27"}           # WI; SL; Zimbabwe + Australia; Australia
WPL = {"Jan'27", "Feb'27"}                                  # WPL 14 Jan to 7 Feb 2027

def r1(x): return round(x, 1)
def r2(x): return round(x, 2)

SEG = {"S1": "Jackpot Hunters", "S2": "Grinders", "S3": "Cricket Brains", "S4": "League Captains", "S5": "Match-day Loungers"}

def base_decomp():
    pre = {s: A["A01_preban_season_active_m"] * A["A02_seg_share"][s] for s in SEG}
    ret = {s: pre[s] * A["A03_seg_stay"][s] for s in SEG}
    retained = sum(ret.values()); mau = A["A33_mau_mid26_m"]
    return dict(registered_m=F["users_aug26_m"], preban_season_active_m=A["A01_preban_season_active_m"], mau_mid26_m=mau,
                dau_sep25_m=F["dau_sep25_m"], mau_oct26_m=r1(mau * (1 - A["A04_prize_removal_drop"])),
                wtb_oct26_m=A["A05_wtb0_m"]["base"], retained_m=r1(retained), new_arrivals_m=r1(mau - retained),
                share_mau_of_registered=r1(100 * mau / F["users_aug26_m"]),
                share_wtb_of_registered=r2(100 * A["A05_wtb0_m"]["base"] / F["users_aug26_m"]),
                seg_retained_m={k: r2(v) for k, v in ret.items()}, seg_preban_m={k: r1(v) for k, v in pre.items()})

def segments(bd):
    now = dict(bd["seg_retained_m"]); now["S5"] = r2(now["S5"] + bd["new_arrivals_m"])
    tot = sum(now.values()); pre = bd["seg_preban_m"]
    rows = [dict(id=s, name=SEG[s], preban_m=pre[s], stay_pct=int(round(100 * A["A03_seg_stay"][s])), now_m=r1(now[s]),
                 now_share_pct=r1(100 * now[s] / tot), left_m=r1(pre[s] - bd["seg_retained_m"][s])) for s in SEG]
    left = sum(r["left_m"] for r in rows)
    return dict(rows=rows, core_now_m=r1(now["S3"] + now["S4"]), total_now_m=r1(tot), left_m=r1(left),
                left_s1s2_share=r1(100 * (rows[0]["left_m"] + rows[1]["left_m"]) / left))

CRIT = [("Fan pull without prizes", 0.25), ("Differentiation vs apps fans already open", 0.20), ("Fit with Dream11 assets", 0.15),
        ("Legal safety", 0.15), ("Revenue within 12 months", 0.15), ("Executable by the post-split team", 0.10)]
OPT = {"A": ("As declared: AI-first, global, multi-sport platform", [2, 2, 3, 5, 2, 2]),
       "B": ("Fold Dream11 into FanCode", [2, 3, 2, 5, 3, 3]),
       "C": ("Creator media network (watch-alongs first)", [3, 1, 2, 5, 3, 3]),
       "D": ("Sharpen: India's free cricket skill league", [4, 5, 5, 5, 3, 4]),
       "E": ("Wait for the court, return to paid fantasy", [5, 4, 5, 1, 2, 2])}
def options():
    out = {k: dict(name=n, scores=sc, weighted=r2(sum(s * w for s, (_, w) in zip(sc, CRIT)))) for k, (n, sc) in OPT.items()}
    return dict(criteria=[c for c, _ in CRIT], weights=[w for _, w in CRIT], options=out, rank=sorted(out, key=lambda k: -out[k]["weighted"]))

FEAT = [("Dream Rating v1", 8.0, 3, 0.8, 10), ("Leagues v2", 6.0, 3, 0.8, 8), ("Lineup-lock nudges", 9.0, 1, 0.9, 3),
        ("Live Calls", 5.0, 2, 0.6, 12), ("AI Scout at lineup lock", 6.0, 2, 0.6, 9), ("AI Coach review", 4.0, 2, 0.5, 8),
        ("Match-day digest", 7.0, 1, 0.7, 5), ("Session XI for Tests", 2.5, 2, 0.6, 6), ("Creator-hosted leagues", 4.0, 2, 0.6, 6),
        ("Shareable rating cards", 6.0, 1, 0.8, 3), ("Dream11 Pro", 1.5, 1, 0.6, 6), ("FanCode play-along overlay", 2.0, 2, 0.5, 10),
        ("Own live streaming", 3.0, 1, 0.3, 40), ("Global launch", 1.0, 1, 0.2, 36), ("Non-cricket fantasy", 1.5, 0.5, 0.4, 20),
        ("Social feed and video", 5.0, 0.5, 0.3, 24)]
CUT = {"Own live streaming", "Global launch", "Non-cricket fantasy", "Social feed and video"}
def rice():
    rows = [dict(feature=n, reach=r, impact=i, confidence=c, effort=e, score=r1(r * i * c / e * 10), cut=n in CUT) for n, r, i, c, e in FEAT]
    return sorted(rows, key=lambda x: -x["score"])

def nsm_path(sc):
    k = A["A07_curve_k"][sc]; return [A["A05_wtb0_m"][sc] * (1 + (m - 1) * k) for m in A["A06_nsm_curve"]]
def mau_path(sc):
    k = A["A07_curve_k"][sc]; mau0 = A["A33_mau_mid26_m"] * (1 - A["A04_prize_removal_drop"])
    return [max(w / 0.6, mau0 * (1 + A["A08_mau_elasticity"] * (m - 1) * k)) for w, m in zip(nsm_path(sc), A["A06_nsm_curve"])]
def revenue(sc):
    W, M, S = nsm_path(sc), mau_path(sc), A["A16_sponsor"]; rows = []
    for i, mo in enumerate(MONTHS):
        w, mau = W[i] * 1e6, M[i] * 1e6; wt = IPLW.get(mo, 0.0)
        imps = w * A["A09_core_sessions_wk"] * 4.33 * A["A10_imps_per_core_session"] + (mau - w) * A["A11_casual_sessions_mo"] * A["A12_imps_per_casual_session"]
        ecpm = (A["A14_ecpm"]["regular"] + (A["A14_ecpm"]["ipl"] - A["A14_ecpm"]["regular"]) * wt) * A["A15_ecpm_k"][sc]
        ads = imps * A["A13_fill"] * ecpm / 1000 / 1e7
        spon = 0.0
        if i >= 3: spon += S["title_rating_season"][sc] / 9
        if wt: spon += S["ipl_partners_n"][sc] * S["ipl_partner_cr"] * wt / sum(IPLW.values())
        if mo in SERIES: spon += S["series_partners_n"][sc] * S["series_partner_cr"] / len(SERIES)
        if mo in WPL: spon += S["wpl_partner_cr"][sc] / 2
        pro = 0.0
        if i >= 5:
            t = (i - 5) / 6; conv = A["A19_pro_conv_start"][sc] + t * (A["A20_pro_conv_end"][sc] - A["A19_pro_conv_start"][sc])
            pro = w * conv * A["A18_pro_arppu_mo"] / 1e7
        gift = w * A["A21_gift_payer_share"] * A["A22_gift_spend_mo"] * A["A23_gift_take"] / 1e7
        fc = w * A["A24_fancode_ref_share"] * A["A25_fancode_pass_rs"] * A["A26_fancode_rev_share"] / 1e7
        rows.append(dict(month=mo, nsm_m=r2(W[i]), mau_m=r1(M[i]), ads=r2(ads), sponsorship=r2(spon), pro=r2(pro), gifting=r2(gift), fancode=r2(fc),
                         total=r2(ads + spon + pro + gift + fc)))
    tot = {k: r1(sum(r[k] for r in rows)) for k in ["ads", "sponsorship", "pro", "gifting", "fancode", "total"]}
    return dict(rows=rows, total=tot, arpwp_rs=r1(tot["total"] * 1e7 / (sum(W) / 12 * 1e6)))

def costs():
    c = A["A27_cost_cr"]; return dict(lines=c, total=sum(c.values()), share_of_fy25_expenses=r1(100 * sum(c.values()) / R["fy25_expenses_cr"]))

SEG_BEH = {"S3": (4.0, 9, 0.03), "S4": (3.5, 9, 0.02), "S5": (1.2, 6, 0.002)}   # sessions a week, impressions a session, Pro conversion
def unit_econ():
    eb = (A["A14_ecpm"]["regular"] * 10 + A["A14_ecpm"]["ipl"] * 2) / 12; out = {}
    for s, (ss, ip, cv) in SEG_BEH.items():
        ads = ss * 52 * ip * A["A13_fill"] * eb / 1000; pro = cv * A["A18_pro_arppu_mo"] * 12
        out[s] = dict(name=SEG[s], ads_rs=r1(ads), pro_rs=r1(pro), total_rs=r1(ads + pro))
    out["multiple_S3_vs_S5"] = r1(out["S3"]["total_rs"] / out["S5"]["total_rs"]); out["multiple_S4_vs_S5"] = r1(out["S4"]["total_rs"] / out["S5"]["total_rs"])
    return out

def sensitivity():
    w0s, ks = [3.0, 4.0, 5.0, 6.0, 7.0], [0.75, 0.875, 1.0, 1.125, 1.25]
    kw, kk = dict(A["A05_wtb0_m"]), dict(A["A15_ecpm_k"]); grid = []
    for w in w0s:
        row = []
        for k in ks:
            A["A05_wtb0_m"]["base"] = w; A["A15_ecpm_k"]["base"] = k; row.append(revenue("base")["total"]["total"])
        grid.append(row)
    A["A05_wtb0_m"].update(kw); A["A15_ecpm_k"].update(kk)
    return dict(wtb0=w0s, ecpm_rs=[round(A["A14_ecpm"]["regular"] * k) for k in ks], grid=grid)

def metrics(rev):
    b = rev["base"]["rows"]
    t6 = 2 * sum(r["total"] for r in b[:6]) * 1e7 / (sum(r["nsm_m"] for r in b[:6]) / 6 * 1e6)
    return dict(nsm=dict(name="Weekly Team-Builders (WTB)", baseline_m=A["A05_wtb0_m"]["base"], m3_m=b[2]["nsm_m"], m6_m=b[4]["nsm_m"],
                         ipl_peak_m=max(r["nsm_m"] for r in b), m12_m=b[11]["nsm_m"], m6_multiple=A["A06_nsm_curve"][4], m12_multiple=A["A06_nsm_curve"][11]),
                supporting=[dict(id="M1", name="Match-to-match return rate", baseline=f"{int(round(A['A31_m1_baseline']*100))}% (A31)", m6="45%", m12="50%"),
                            dict(id="M2", name="League share of weekly players", baseline=f"{int(round(A['A32_m2_baseline']*100))}% (A32)", m6="35%", m12="45%"),
                            dict(id="M3", name="Live Calls reach (5+ calls a match-day)", baseline="0% (new)", m6="25%", m12="35%"),
                            dict(id="M4", name="Revenue per weekly player (trailing, annualised)", baseline="n/a",
                                 m6=f"Rs {int(round(t6, -1))}", m12=f"Rs {int(round(rev['base']['arpwp_rs'], -1))}")],
                kill=dict(by="15 Jan 2027", cohort="fans with 3+ rated matches since Rating v1 launch (15 Oct 2026)",
                          t1="match-to-match return rate below 40%", t2="league members return less than 1.3x as often as solo players",
                          action="stop rating and league spend; move to option C (creator media) or fold play features into FanCode (option B)"))

def stress():
    r = A["A28_rake"] * 100; pre = r - r * R["gst_pre2023_on_fee"] / (1 + R["gst_pre2023_on_fee"]); out = {}
    for sc in SC:
        d = A["A29_deposit_ratio"][sc]; g28 = 100 * d * F["gst_case"]; g40 = 100 * d * R["gst_statute"]   # GST as a percentage of deposit value (rule 31B; RC-N1)
        out[sc] = dict(deposit_ratio=d, net_pre2023=r2(pre), gst28=r2(g28), net28=r2(r - g28), gst40=r2(g40), net40=r2(r - g40),
                       drop28_pct=r1(100 * (1 - (r - g28) / pre)), drop40_pct=r1(100 * (1 - (r - g40) / pre)),
                       prize_pool_to_hold_margin_28=r1(100 * A["A30_prize_pool"] - (pre - (r - g28))),
                       prize_pool_to_hold_margin_40=r1(100 * A["A30_prize_pool"] - (pre - (r - g40))))
    out["fy25"] = dict(revenue=F["rev"]["FY25"], expenses=R["fy25_expenses_cr"], gap=r1(F["rev"]["FY25"] - R["fy25_expenses_cr"]),
                       ad_spend=R["fy25_ad_spend_cr"], exceptional=R["fy25_exceptional_cr"], gst_notice=R["gst_notice_cr"])
    return out

RISKS = [("Rating feels meaningless without money", 3, 5, "90-day kill signal; tiers tied to public status and creator leagues", "Head of Product", "M1 below 40% by Jan 2027"),
 ("Casual fans find Live Calls intrusive", 3, 3, "Calls opt-in, one per over, quiet mode", "Design lead", "Opt-out above 30%"),
 ("Advertisers pay sports CPMs only in IPL", 4, 3, "Title partner signed before IPL; series packages", "Head of Revenue", "Non-IPL eCPM below Rs 90"),
 ("FanCode and Dream11 still overlap", 3, 3, "Written job split; Dream11 streaming sunset in 90 days", "Both CEOs", "Overlap share above 20%"),
 ("Regulator reads a mechanic as a stake", 2, 5, "Legal test on every feature; no prizes, no redeemable currency", "Legal counsel", "Any notice from the Authority"),
 ("Under-18 users join via friends' invites", 3, 4, "Age gate plus DPDP verifiable consent; no personalised ads to minors", "Trust and safety", "Monthly block-rate audit"),
 ("Offshore betting apps target lapsed players", 4, 3, "No money-adjacent copy; report surrogate ads; responsible-play links", "Trust and safety", "T10 review share rising"),
 ("Key talent leaves after the split", 3, 4, "Focused roadmap; retention grants tied to loop milestones", "CEO", "Attrition above 20% annualised"),
 ("Court restores paid fantasy and rivals return", 2, 3, "Decision rule in the stress test; stay free in Dream11", "CEO and board", "Final judgment")]

def build():
    bd = base_decomp(); seg = segments(bd); rev = {sc: revenue(sc) for sc in SC}; cst = costs()
    O = dict(base=bd, segments=seg, options=options(), rice=rice(), revenue=rev, costs=cst, unit_econ=unit_econ(), sensitivity=sensitivity(),
             metrics=metrics(rev), stress=stress(),
             risks=[dict(risk=a, p=b, i=c, score=b * c, rag=("R" if b * c >= 15 else "A" if b * c >= 9 else "G"), mitigation=d, owner=e, trigger=f) for a, b, c, d, e, f in RISKS],
             case=dict(lost_revenue_cr=round(F["rev"]["FY25"] * F["paid_share"]), fy25_rev=F["rev"]["FY25"]))
    b = rev["base"]["total"]["total"]
    O["moneyshot"] = dict(rev12_base=b, rev12_bear=rev["bear"]["total"]["total"], rev12_bull=rev["bull"]["total"]["total"], cost12=cst["total"],
                          gap12_base=r1(b - cst["total"]), arpwp_base=rev["base"]["arpwp_rs"], share_of_fy25=r1(100 * b / F["rev"]["FY25"]))
    O["meta"] = dict(F=F, R=R, A=A, run=dt.datetime.now().isoformat(timespec="seconds"))
    return O

def md_table(h, rows): return "\n".join(["| " + " | ".join(str(x) for x in h) + " |", "|" + "---|" * len(h)] + ["| " + " | ".join(str(c) for c in r) + " |" for r in rows])

def tables(O):
    bd, L = O["base"], ["# Model tables (generated by dream11_pivot_model.py)", ""]
    L += ["## T1 Base decomposition", "", md_table(["Layer", "Fans (M)", "Basis"], [
        ["Registered users claimed, Aug 2026", bd["registered_m"], "Case T7"], ["Played in the IPL 2025 season (pre-ban)", bd["preban_season_active_m"], "A01"],
        ["Monthly active, mid-2026 (upper bound)", bd["mau_mid26_m"], "A33"], ["Monthly active after prizes removed, Oct 2026", bd["mau_oct26_m"], "A04"],
        ["Daily active, Sep 2025", bd["dau_sep25_m"], "Case T2"], ["Weekly team-builders, Oct 2026 (NSM baseline)", bd["wtb_oct26_m"], "A05"]]), ""]
    L += ["## T2 Behavioural segments", "", md_table(["ID", "Segment", "Pre-ban (M)", "Still monthly-active (%)", "Left (M)", "Now (M)", "Share of mid-2026 base (%)"],
          [[r["id"], r["name"], r["preban_m"], r["stay_pct"], r["left_m"], r["now_m"], r["now_share_pct"]] for r in O["segments"]["rows"]]), ""]
    op = O["options"]
    L += ["## T5 Option scoring", "", md_table(["Option"] + [f"{c} ({int(round(w*100))}%)" for c, w in zip(op["criteria"], op["weights"])] + ["Weighted"],
          [[f"{k}. {v['name']}"] + v["scores"] + [v["weighted"]] for k, v in op["options"].items()]), ""]
    L += ["## T8 RICE prioritisation", "", md_table(["Feature", "Reach (M a quarter)", "Impact", "Confidence", "Effort (person-months)", "RICE", "Decision"],
          [[r["feature"], r["reach"], r["impact"], r["confidence"], r["effort"], r["score"], "Cut" if r["cut"] else "Build"] for r in O["rice"]]), ""]
    for sc in SC:
        rv = O["revenue"][sc]
        L += [f"## T10 Monthly revenue, {sc} (Rs Cr)", "", md_table(["Month", "NSM (M)", "MAU (M)", "Ads", "Sponsorship", "Pro", "Gifting", "FanCode", "Total"],
              [[r["month"], r["nsm_m"], r["mau_m"], r["ads"], r["sponsorship"], r["pro"], r["gifting"], r["fancode"], r["total"]] for r in rv["rows"]] +
              [["12 months", "", "", rv["total"]["ads"], rv["total"]["sponsorship"], rv["total"]["pro"], rv["total"]["gifting"], rv["total"]["fancode"], rv["total"]["total"]]]), ""]
    L += ["## T11 Revenue by scenario (Rs Cr, 12 months)", "", md_table(["Scenario", "Ads", "Sponsorship", "Pro", "Gifting", "FanCode", "Total", "Rs per weekly player"],
          [[sc] + [O["revenue"][sc]["total"][k] for k in ["ads", "sponsorship", "pro", "gifting", "fancode", "total"]] + [O["revenue"][sc]["arpwp_rs"]] for sc in SC]), ""]
    L += ["## T12 Cost base (Rs Cr, 12 months)", "", md_table(["Line", "Rs Cr"], [[k, v] for k, v in O["costs"]["lines"].items()] +
          [["Total", O["costs"]["total"]], ["Share of FY25 group expenses (%)", O["costs"]["share_of_fy25_expenses"]]]), ""]
    ue = O["unit_econ"]
    L += ["## T13 Revenue per fan per year by segment (Rs)", "", md_table(["Segment", "Ads", "Pro", "Total"], [[ue[s]["name"], ue[s]["ads_rs"], ue[s]["pro_rs"], ue[s]["total_rs"]] for s in ["S3", "S4", "S5"]]), ""]
    se = O["sensitivity"]
    L += ["## T14 Sensitivity: 12-month base revenue (Rs Cr) by NSM baseline (rows, M) and regular eCPM (columns, Rs)", "",
          md_table(["NSM baseline"] + [str(e) for e in se["ecpm_rs"]], [[w] + row for w, row in zip(se["wtb0"], se["grid"])]), ""]
    m = O["metrics"]
    L += ["## T15 Metrics and targets", "", md_table(["Metric", "Baseline", "6 months (1 Mar 2027, pre-IPL)", "12 months (Sep 2027)"],
          [["NSM: " + m["nsm"]["name"] + " (M)", m["nsm"]["baseline_m"], m["nsm"]["m6_m"], m["nsm"]["m12_m"]]] +
          [[x["id"] + " " + x["name"], x["baseline"], x["m6"], x["m12"]] for x in m["supporting"]]), ""]
    st = O["stress"]
    L += ["## T16 Stress test: Dream11's net per Rs 100 of contest entries", "", md_table(["Deposit case", "Deposits per Rs 1 of entries", "Pre-Oct 2023", "GST at 28%", "Net at 28%", "GST at 40%", "Net at 40%", "Drop at 28% (%)", "Drop at 40% (%)", "Prize pool to hold margin at 28% (%)"],
          [[{"bear": "High deposit", "base": "Mid", "bull": "Low deposit"}[sc], st[sc]["deposit_ratio"], st[sc]["net_pre2023"], st[sc]["gst28"], st[sc]["net28"], st[sc]["gst40"], st[sc]["net40"],
            st[sc]["drop28_pct"], st[sc]["drop40_pct"], st[sc]["prize_pool_to_hold_margin_28"]] for sc in SC]), ""]
    L += ["## T17 Risk register", "", md_table(["Risk", "P", "I", "Score", "RAG", "Mitigation", "Owner", "Trigger"],
          [[x["risk"], x["p"], x["i"], x["score"], x["rag"], x["mitigation"], x["owner"], x["trigger"]] for x in O["risks"]]), ""]
    return "\n".join(L).replace("Rs Cr", "₹ Cr").replace("Rs per", "₹ per").replace("Rs 100", "₹100").replace("Rs 1 ", "₹1 ").replace("Rs ", "₹")

if __name__ == "__main__":
    O = build(); js = json.dumps(O, sort_keys=True, default=str)
    O["meta"]["hash"] = hashlib.sha1(js.encode()).hexdigest()[:10]
    json.dump(O, open("model_outputs.json", "w", encoding="utf-8"), indent=1, ensure_ascii=False, default=str)
    open("model_tables.md", "w", encoding="utf-8").write(tables(O))
    ms = O["moneyshot"]
    print("REV12 bear/base/bull:", ms["rev12_bear"], ms["rev12_base"], ms["rev12_bull"], "| cost", ms["cost12"], "| ARPWP", ms["arpwp_base"])
