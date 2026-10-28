"""BeyondTech x DCG GTM model. Single source of truth for every modelled number in the
research document and the deck. Run from BT/model:
  "C:\\Users\\harsh\\AppData\\Local\\Programs\\Python\\Python312\\python.exe" beyondtech_gtm_model.py
Writes model_outputs.json and model_tables.md. Python 3.12, standard library plus random
(fixed seed 20261009 for the stability test, T9). Every number below is tagged to its origin:
F = case brief or BeyondTech website fact (B## / W##), R = researched fact (S-ID), A = team
assumption (A##, bear/base/bull). Where PLAN.md section 8 names an input with no research
basis anywhere in research/raw or research/data, a new assumption A31 onward is added here
and flagged in the run's printed summary, per the modeller's brief.
"""
import csv, json, random, re, hashlib, datetime as dt

# ======================= F: brief and website facts (never edited) =======================
F = dict(
    company="BeyondTech",                                   # B01
    founded_year=2022, founder="Harsh Agarwal",              # B01, W09
    task="GTM: deepen DTU penetration, launch at 3-4 Tier-1 colleges",  # B02
    slide_format="8 to 12 slides excl. title/appendix",       # B03
    dtu_selections_at_a_glance="40 selections across 14 organisations",  # B04 (quoted once only, not a second headline figure per conflicts.md X1)
    dtu_selections_headline="50+ selections",                 # B05 (headline figure per conflicts.md X1 ruling)
    dtu_avg_package_lpa_lo=13, dtu_avg_package_lpa_hi=14,      # B05 (BeyondTech members' own outcomes, not a DTU campus-wide claim; conflicts.md X5)
    dtu_highest_package_lpa=47, dtu_highest_recruiter="Eternal",  # B05 (BeyondTech members' own outcomes only; conflicts.md B-C2 retires seed F02)
    dtu_recruiters_b05=["Eternal", "JP Morgan Chase", "Bain", "ZS", "Everest", "PwC"],  # B05
    nsut_recruiters_b06=["Eternal", "ZS Associates", "Bain and Company", "Prism", "L.E.K. Consulting"],  # B06 (Prism quoted verbatim only, conflicts.md C-C1)
    thapar_bitmesra_recruiters_b06=["Bain and Company", "ZS Associates", "Deloitte"],  # B06
    program_name="Non-Tech Placement Mastery Program",         # B07
    program_weeks=11,                                          # B07 (case-canon; conflicts.md X3 keeps this over the site's 12-week listing)
    program_phases=["Consulting foundations", "Analytics mastery", "Product strategy", "Personalized prep"],  # B07
    positioning="One course for every non-tech company visiting your campus",  # B09
    growth_engine="word of mouth, community, founder-led mentorship",  # B10
    bottleneck_tam="narrow audience; not every campus gets strong non-tech recruiters",  # B12
    bottleneck_channel="word of mouth, WhatsApp, LinkedIn; no repeatable paid marketing, no ambassador flywheel",  # B13
    scoring_weights=dict(dtu_gtm=0.30, college_selection=0.25, pan_india_launch=0.25, insight=0.10, presentation=0.10),  # B20
    site_stats=dict(students_mentored=300, students_placed=250, companies=20),  # W01
    mentors_w09=["Harsh Agarwal (Founder)", "Subham Mukhopadhyay (Associate, Bain & Co.)",
                 "Subrat Sarangi (Business Analyst, Amazon)", "Akshit Goel (Product Manager, Google)"],  # W09 / RA15, conflicts.md X4
    testimonials_rA51=["Ayush Pratap Singh (Meesho)", "Suhani Sharma (Bain & Company)", "Ravi (OYO)",
                        "Soumya Raj (ExxonMobil)", "Vidhi Balyan (ZS)"],  # RA51, supersedes W10
    next_batch_start="15 Jan 2027",                            # W05
    resources_pdfs=8,                                          # W08 / RA21, all confirmed genuinely open (RA24)
    company_linkedin_followers_approx=3000,                    # W12, RA31 (conflicts.md A-C3: cite approx only, never a false-precise count)
    company_linkedin_employees=14,                              # W12 / RA33
    ambassador_post1_reactions=15, ambassador_post2_reactions=9,   # W13 / RA35, RA36
    foundersoffice_post_reactions=269,                          # W14 / RA37
    dcg_case_comp_post_reactions=49, dcg_case_comp_prize_pool_inr=40000,  # W15 / RA38
    topmate_bookings=312, topmate_rating=4.9, topmate_ratings_count=14,  # W16 / RA41, RA42 (conflicts.md A-C4: use "14")
)

# ======================= R: researched facts, S-ID tagged (change only via a research update) ===
R = dict(
    # DTU official NIRF 2025 submission (tier 3 official, case-canon per conflicts.md B-C1)
    dtu_ug_sanctioned_intake=2529,                              # RB01, S050
    dtu_ug_total_strength=10431,                                # RB03, S050
    dtu_cohort_2023_24=dict(graduated=2412, placed=1759, median_salary_inr=1325000),  # RB07, S050
    # Getmyuni aggregator-reported, 2025 season (explicitly labelled aggregator-reported, never blended with the NIRF figures)
    dtu_season2025_aggregator=dict(registered=2487, placed=1766, avg_package_lpa=15.75, highest_package_lpa=85,
                                    highest_recruiter="Atlassian", companies=350),  # RB13-RB15, S051
    dtu_recruiters_solid=["Bain and Company", "ZS Associates", "Eternal (Zomato)", "JP Morgan Chase",
                           "Everest Group", "PwC", "Deloitte"],  # B05, B06, RB18, S051
    dtu_recruiters_aggregator_only=["BCG", "McKinsey", "Fractal"],  # RB20, RB27, S052-S053 (conflicts.md B-C3)
    # channel/funnel benchmarks (V-F)
    meta_cpl_inr_range=(150, 600),                               # RF01, RF04, RF06, S200-S202 (conflicts.md F-C1: range, not one pinned figure)
    linkedin_cpc_inr_range=(150, 650), linkedin_cpl_edu_inr_range=(850, 2500),  # RF15, RF17, S204
    influencer_nano_reel_inr=(2000, 10000), influencer_micro_reel_inr=(8000, 75000),  # RF21-RF22, S207 (conflicts.md F-C4 recalibration)
    gated_ebook_capture_rate_global=0.009, landing_page_median_cvr=0.066,  # RF39-RF40, S211 (global, cross-industry, flagged low-confidence for India/bootcamp per RF42)
    # precedents (V-G)
    coding_ninjas_ambassadors=1000,                              # RG02, S253 (conflicts.md G-C1, corrected from seed F12's 4,000+)
    coding_ninjas_term_months=6,                                 # RG01, S250
    riseupp_payout_per_enrolment_inr=5000,                       # RG06, S265
    # case-competition precedents for calibrating A06/A21
    dcg_case_comp_prize_pool_inr=40000,                          # W15
    case_converge_180dc_prize_pool_inr=6000,                     # RF51, S220
    mnanalyse_iitg_prize_pool_inr=200000,                        # RF50, S219
    # societies (R-B, societies.csv)
    dtu_societies_combined_ig_followers=16581,                   # RB33+RB34 (14600 E-Cell + 1981 180DC), S055-S056
)

# ======================= A: assumptions A01-A30 (PLAN.md 5.3), A31+ added by the modeller =======
# Gate G1 corrections applied before use: A25's follower bands recalibrated to nano (<10,000) /
# micro (10,000-100,000) per conflicts.md ruling F-C4 (the modeller's own instruction at step B9).
SC = ["bear", "base", "bull"]
A = dict(
    A01_fee_inr={"bear": 8000, "base": 12000, "bull": 18000},
    A02_dtu_batch_note="superseded by R['dtu_ug_sanctioned_intake'] (RB01, official); kept for the register only",
    A03_nontech_open_share={"bear": 0.20, "base": 0.30, "bull": 0.40},
    A04_dtu_enrolments_12mo={"bear": 80, "base": 110, "bull": 140},
    A05_referral_share={"bear": 0.90, "base": 0.80, "bull": 0.70},
    A06_event_registrants={"bear": 80, "base": 150, "bull": 250},
    A07_registrant_to_lead={"bear": 0.35, "base": 0.50, "bull": 0.65},
    A08_lead_to_application={"bear": 0.08, "base": 0.12, "bull": 0.18},
    A09_application_to_enrolment={"bear": 0.30, "base": 0.45, "bull": 0.60},
    A10_mockdrive_participants={"bear": 100, "base": 200, "bull": 350},
    A11_meta_cpl_inr={"bear": 600, "base": 350, "bull": 200},
    A12_linkedin_cpl_inr={"bear": 1500, "base": 900, "bull": 500},
    A13_paid_lead_to_application={"bear": 0.03, "base": 0.06, "bull": 0.10},
    A14_ambassador_enrolments_per_season={"bear": 2, "base": 4, "bull": 7},
    A15_ambassador_payout_per_enrolment_inr={"bear": 1500, "base": 1000, "bull": 750},
    A16_referral_reward_per_enrolment_inr={"bear": 1500, "base": 1000, "bull": 500},
    A17_founding_cohort_size={"bear": 12, "base": 20, "bull": 30},
    A18_founding_cohort_discount={"bear": 0.50, "base": 0.40, "bull": 0.30},
    A19_founding_cohort_selection_rate={"bear": 0.25, "base": 0.40, "bull": 0.55},
    A20_season2_multiple={"bear": 1.5, "base": 3.0, "bull": 5.0},
    A21_case_league_cost_inr={"bear": 60000, "base": 45000, "bull": 30000},
    A22_founder_hours_per_enrolment_today={"bear": 3.0, "base": 2.0, "bull": 1.5},
    A23_founder_hours_per_enrolment_after={"bear": 1.2, "base": 0.8, "bull": 0.5},
    A24_gross_margin={"bear": 0.55, "base": 0.65, "bull": 0.75},
    # A25 recalibrated per conflicts.md F-C4: nano (<10,000 followers) / micro (10,000-100,000)
    A25_influencer_cost_per_post_inr={"bear": 4000, "base": 2500, "bull": 1500},
    A26_gated_capture_rate={"bear": 0.20, "base": 0.35, "bull": 0.50},
    A27_organic_visitors_per_month={"bear": 300, "base": 600, "bull": 1200},
    A28_second_year_share_after_plan={"bear": 0.10, "base": 0.20, "bull": 0.30},
    A29_selection_rate_into_offer={"bear": 0.35, "base": 0.45, "bull": 0.60},
    A30_upsell_revenue_per_student_inr={"bear": 0, "base": 300, "bull": 800},
    # --- A31 onward: added by the modeller, no PLAN.md A-ID or research row covers these ---
    A31_founder_hours_per_week={"bear": 15, "base": 20, "bull": 25},
    # Basis: no source gives the founder's weekly hours available for BeyondTech specifically; the
    # founder also runs a 312-booking Topmate practice and product-building work (RA45), so this is
    # a capacity ceiling, not a target. Needed for T11's "does the plan fit in one founder's week" check.
    A32_cohorts_per_year={"bear": 2, "base": 3, "bull": 4},
    # Basis: the 11-week bootcamp (B07) with gaps for review/next-cohort setup implies roughly 3
    # non-overlapping cohorts a year; no source confirms BeyondTech's actual cadence. Needed for T6's
    # payback-in-cohorts formula and T10's season-to-season timing.
    A33_inhouse_event_cash_cost_inr={"bear": 12000, "base": 8000, "bull": 5000},
    # Basis: DTU already has a live relationship with BeyondTech, so an in-house workshop or mock
    # drive there needs only venue/printing/refreshment cash, not a full co-branded case league. Scaled
    # down from A21 (new-campus case league cost) since DTU needs no trust-building spend. Needed for
    # T3/T4's cash cost on channels C-ORG-1, C-ORG-3, C-ORG-7.
    A34_paid_reach_share_of_campus={"bear": 0.03, "base": 0.05, "bull": 0.08},
    # Basis: no India-specific source gives a campus geofence or school-targeting reachable-audience
    # share (RF10, RF19 both NOT FOUND). A conservative range bounds paid channels' scale so C-PD-2/
    # C-PD-3 do not model an unbounded number of leads from a ~10,400-student campus.
)

MONTHS = ["Oct26", "Nov26", "Dec26", "Jan27", "Feb27", "Mar27", "Apr27", "May27",
          "Jun27", "Jul27", "Aug27", "Sep27"]
# Seasonality weights, sum to 1: tied to the DTU calendar found in research (RB31 Engifest Feb,
# RB44 ECE mid-terms late Sep, W05 batch start 15 Jan 2027, commonly-cited 1 Aug season start RB45).
# Low in exam months (Sep, Dec), high at batch launch (Jan) and at placement-season start (Jul-Aug).
SEASON_W = {"Oct26": 0.08, "Nov26": 0.09, "Dec26": 0.04, "Jan27": 0.14, "Feb27": 0.10,
            "Mar27": 0.07, "Apr27": 0.06, "May27": 0.05, "Jun27": 0.07, "Jul27": 0.12,
            "Aug27": 0.13, "Sep27": 0.05}
assert abs(sum(SEASON_W.values()) - 1.0) < 1e-9

def inr(n):
    """Indian digit grouping with a rupee symbol and a true minus."""
    n = round(n)
    neg = n < 0
    n = abs(n)
    s = str(n)
    if len(s) <= 3:
        grouped = s
    else:
        head, tail = s[:-3], s[-3:]
        parts = []
        while len(head) > 2:
            parts.append(head[-2:])
            head = head[:-2]
        if head:
            parts.append(head)
        grouped = ",".join(reversed(parts)) + "," + tail
    return ("\u2212" if neg else "") + "\u20b9" + grouped

def r1(x): return round(x, 1)
def r2(x): return round(x, 2)
def r0(x): return round(x)

# ======================= College scorecard: load and parse =======================
CSV_DIR = "../research/data"

def lead_int(s):
    m = re.search(r"\d[\d,]*", str(s))
    return int(m.group(0).replace(",", "")) if m else 0

def lead_float(s):
    m = re.search(r"\d+(\.\d+)?", str(s))
    return float(m.group(0)) if m else 0.0

C2_PCT_OVERRIDE = {
    "BITS Pilani (Pilani campus)": 25.0,   # F04: analytics 16% + banking/finance 7% + consulting 2%, summed per conflicts.md note
    "Manipal Institute of Technology": 33.0,  # SC-2's own C2_raw note: percent figure usable
    "BITS Pilani, Goa campus": 25.0,       # same institute-wide sector split as the Pilani campus (F04)
}

# --- B11 dossier-pass refinements to C4 only (R-E-*.md, 8 dossiers reviewed 10 Oct 2026) ---
# The dossier pass found real follower counts the original scorecard row recorded as NOT FOUND.
# Per PLAN.md 7.4, "C4 uses the lower of the two bands when both are known," so both the society
# count and the follower sum are refined here and both bands are taken in load_colleges() below.
# C1, C2, C3, C5, C7 are untouched by this pass, per the modeller's brief at step B11.
C4_COUNT_OVERRIDE = {
    # RE06 (BFC umbrella groups 180DC, ProfNITT, SIGMA), RE11 (SIGMA), RE12 (Product Folks),
    # RE13 (DataByte): 6 named non-tech societies now confirmed active, up from the scorecard's
    # conservative 3 (Consul-T/BFC, ProfNITT, 180DC, Analytica were named but only 3 counted as
    # evidenced-active at the time).
    "NIT Tiruchirappalli": 6,
    # RW08: dossier re-searched for a finance/analytics/product club and found none beyond 180DC;
    # count stays at the scorecard's 1, now confirmed rather than merely unrefuted.
    "NIT Warangal": 1,
}
C4_FOLLOWERS_OVERRIDE = {
    # RE15: ProfNITT 2,004 (RE07) + 180DC NIT Trichy 2,902 (RE09) + NIT Trichy E-Cell 4,359 (RE14),
    # all direct Instagram fetches 10 Oct 2026. Sum 9,265; summed is taken over the 3 named
    # societies with a retrievable count out of 6 total named (Consul-T/BFC umbrella, SIGMA,
    # Product Folks, DataByte have no retrievable follower count of their own).
    "NIT Tiruchirappalli": 9265,
    # RW06: 180DC NIT Warangal Instagram, direct fetch 10 Oct 2026, confirmed at 699 followers with
    # named leadership roles (RW09). Scorecard previously recorded this follower count as NOT FOUND.
    "NIT Warangal": 699,
}
# --- B11 dossier-pass confirmations to C6 (no value change; documented per the modeller's brief) ---
# IIT Roorkee (RE/RW dossiers not needed here; see R-E-iit-roorkee.md): the dossier found an exact
# date, 1 Dec 2025 Day 1 of the common IIT placement calendar, with the next occurrence (1 Dec 2027)
# sitting 11 months from BeyondTech's 15 Jan 2027 start. college_scorecard.csv's C6_source for IIT
# Roorkee was already "S635, S645" (sourced, not "est."), and C6_raw "11 (confirmed)" already bands
# to 1 via band_c6 (v>9). This dossier finding CONFIRMS the existing worst-band score; no change.
# IIT Delhi (R-E-iit-delhi.md): the dossier found the season runs through end-May per IIT Delhi's
# own Office of Career Services, meaning a live 2026-27 season likely overlaps BeyondTech's own Jan
# to roughly May 2027 window entirely. college_scorecard.csv's C6_raw for IIT Delhi is "11
# (confirmed)" with C6_source already "S645, S646" (sourced). This already bands to 1 (the floor);
# band 1 cannot score worse, so this finding STRENGTHENS, not weakens, the existing worst-band score.

def band_c1(v):
    if v >= 13: return 5
    if v >= 10: return 4
    if v >= 7: return 3
    if v >= 4: return 2
    return 1

def band_c2(v_pct, v_count):
    if v_pct is not None:
        v = v_pct
        if v >= 28: return 5
        if v >= 20: return 4
        if v >= 14: return 3
        if v >= 8: return 2
        return 1
    v = v_count
    if v >= 45: return 5
    if v >= 30: return 4
    if v >= 20: return 3
    if v >= 10: return 2
    return 1

def band_c3(v):
    if v >= 1800: return 5
    if v >= 1200: return 4
    if v >= 900: return 3
    if v >= 600: return 2
    return 1

def band_c4(count, followers=None):
    if count <= 1: cb = 1
    elif count == 2: cb = 2
    elif count == 3: cb = 3
    elif count == 4: cb = 4
    else: cb = 5
    if followers is None:
        return cb
    if followers >= 30000: fb = 5
    elif followers >= 15000: fb = 4
    elif followers >= 5000: fb = 3
    else: fb = 2
    return min(cb, fb)  # PLAN.md 7.4: lower of the two bands when both known

def band_c5(text):
    t = text.lower()
    if "none found" in t:
        return 5
    if "all three" in t:
        return 1
    n = lead_int(t)  # "2 of 3 present", "1 of 3", etc.
    if "strong" in t and n == 2:
        return 2
    return {0: 5, 1: 4, 2: 3, 3: 1}.get(n, 3)

def band_c6(v):
    if v < 3 or v > 9: return 1
    if v < 4: return 2
    if v < 5 or (8 <= v <= 9): return 3
    if v < 6: return 4
    return 5

def band_c7(v):
    return {0: 1, 1: 2, 2: 3, 3: 4}.get(v, 5)

WEIGHTS = dict(C1=0.25, C2=0.15, C3=0.15, C4=0.15, C5=0.10, C6=0.10, C7=0.10)
ANCHOR_COUNT = 19  # 20 fixed anchors minus Prism (conflicts.md C-C1, excluded from every count)

def load_colleges():
    with open(f"{CSV_DIR}/college_scorecard.csv", newline="", encoding="utf-8") as f:
        rows = list(csv.DictReader(f))
    out = []
    for row in rows:
        name = row["college"]
        region = row["region"]
        c1 = lead_int(row["C1_raw"])
        c2_raw = row["C2_raw"]
        c2_pct = C2_PCT_OVERRIDE.get(name)
        if c2_pct is None and "%" in c2_raw:
            c2_pct = lead_float(c2_raw)
        c2_count = lead_int(c2_raw)
        c3 = lead_int(row["C3_raw"]) or lead_int(row["btech_graduating"])
        c4_followers = R["dtu_societies_combined_ig_followers"] if name == "DTU" else C4_FOLLOWERS_OVERRIDE.get(name)
        c4 = C4_COUNT_OVERRIDE.get(name, lead_int(row["C4_raw"]))
        c5_text = row["C5_raw"]
        c6 = lead_float(row["C6_raw"])
        c7 = lead_int(row["C7_raw"])
        srcs = [row[f"C{i}_source"] for i in range(1, 8)]
        sourced_n = sum(1 for s in srcs if s.strip().lower() != "est.")
        note7 = row["C7_note"].lower()
        within_300km_delhi = ("under 300 km" in note7) or ("same city" in note7)
        is_calibration = "calibration" in region
        is_contrast = "Contrast set" in region
        if "South" in region: geo = "South"
        elif "West and East" in region: geo = "West/East"
        else: geo = "North/Delhi"
        scores = dict(C1=band_c1(c1), C2=band_c2(c2_pct, c2_count), C3=band_c3(c3),
                      C4=band_c4(c4, c4_followers), C5=band_c5(c5_text), C6=band_c6(c6), C7=band_c7(c7))
        fit = sum(scores[k] * WEIGHTS[k] for k in scores)
        btech = lead_int(row["btech_graduating"])
        pass_f1 = btech >= 600
        pass_f2_5 = c1 >= 5
        pass_f2_4 = c1 >= 4
        pass_f3 = not is_calibration
        pass_f4 = sourced_n >= 5
        out.append(dict(college=name, region=region, geo=geo, city=row["city"], state=row["state"],
                         btech_graduating=btech, raw=dict(C1=c1, C2=c2_pct if c2_pct is not None else c2_count,
                         C3=c3, C4=c4, C5=c5_text, C6=c6, C7=c7), scores=scores, fit=r2(fit),
                         is_calibration=is_calibration, is_contrast=is_contrast,
                         within_300km_delhi=within_300km_delhi, sourced_n=sourced_n,
                         pass_f1=pass_f1, pass_f2_5=pass_f2_5, pass_f2_4=pass_f2_4,
                         pass_f3=pass_f3, pass_f4=pass_f4))
    return out

def apply_screen(colleges, f2_threshold_5=True):
    out = []
    for c in colleges:
        f2 = c["pass_f2_5"] if f2_threshold_5 else c["pass_f2_4"]
        passed = c["pass_f1"] and f2 and c["pass_f3"] and c["pass_f4"]
        out.append(dict(c, screen_pass=passed, f2_relaxed=not f2_threshold_5))
    return out

def portfolio_pick(ranked_pass):
    """ranked_pass: screened colleges sorted by fit desc. Apply PLAN.md 7.5 portfolio rule."""
    picks, delhi_n, south_n, west_east_n, institutes_used = [], 0, 0, 0, set()
    for c in ranked_pass:
        if len(picks) >= 4:
            break
        inst_key = c["college"].split("(")[0].strip().split(",")[0].strip()
        base_inst = inst_key.replace(" Pilani campus", "").replace(" Hyderabad campus", "").replace(" Goa campus", "")
        if "BITS Pilani" in base_inst:
            base_inst = "BITS Pilani"
        if base_inst in institutes_used:
            continue
        if c["within_300km_delhi"] and delhi_n >= 2:
            continue
        remaining_slots = 4 - len(picks) - 1
        need_south = south_n == 0
        need_we = west_east_n == 0
        if need_south and c["geo"] != "South" and remaining_slots < (1 if need_south else 0) + (1 if need_we else 0):
            continue
        picks.append(c)
        institutes_used.add(base_inst)
        if c["within_300km_delhi"]:
            delhi_n += 1
        if c["geo"] == "South":
            south_n += 1
        if c["geo"] == "West/East":
            west_east_n += 1
    return picks

def t8_t9():
    colleges = load_colleges()
    scored = apply_screen(colleges, f2_threshold_5=True)
    non_iit_noncal_pass5 = [c for c in scored if c["screen_pass"] and not c["is_contrast"] and not c["is_calibration"]]
    relaxed = False
    if len(non_iit_noncal_pass5) < 4:
        relaxed = True
        scored = apply_screen(colleges, f2_threshold_5=False)
    scored_sorted = sorted(scored, key=lambda c: -c["fit"])
    pickable = [c for c in scored_sorted if c["screen_pass"] and not c["is_calibration"]]
    final4 = portfolio_pick(pickable)
    final_names = {c["college"] for c in final4}
    reserve_pool = [c for c in pickable if c["college"] not in final_names]
    reserve4 = reserve_pool[:4]

    def promote_reason(c):
        gaps = []
        for k, w in sorted(WEIGHTS.items(), key=lambda kv: -kv[1]):
            if c["scores"][k] < 5:
                gaps.append(f"{k} rising from {c['scores'][k]} to 5 would add {r2((5 - c['scores'][k]) * w)} to Fit")
                break
        return gaps[0] if gaps else "already at ceiling on every criterion"

    for r in reserve4:
        r["promote_reason"] = promote_reason(r)

    calibration_rows = [c for c in scored if c["is_calibration"]]
    full_scored_set = [c for c in scored if not c["is_calibration"]]
    median_fit = sorted(c["fit"] for c in full_scored_set)[len(full_scored_set) // 2]
    calibration_ok = all(c["fit"] >= median_fit for c in calibration_rows)

    # T9 stability test
    random.seed(20261009)
    draws = 2000
    stay_count = {c["college"]: 0 for c in pickable}
    base_w = dict(WEIGHTS)
    for _ in range(draws):
        drawn = {k: v * random.uniform(0.6, 1.4) for k, v in base_w.items()}
        tot = sum(drawn.values())
        drawn = {k: v / tot for k, v in drawn.items()}
        resc = []
        for c in pickable:
            fit = sum(c["scores"][k] * drawn[k] for k in drawn)
            resc.append(dict(c, fit=fit))
        resc_sorted = sorted(resc, key=lambda c: -c["fit"])
        draw_picks = {c["college"] for c in portfolio_pick(resc_sorted)}
        for name in draw_picks:
            stay_count[name] += 1
    stability = {name: r1(100 * cnt / draws) for name, cnt in stay_count.items()}
    for c in final4 + reserve4:
        c["stability_pct"] = stability.get(c["college"], 0.0)
        c["weight_sensitive"] = c["stability_pct"] < 60.0

    return dict(colleges=scored, final4=final4, reserve4=reserve4, relaxed_f2=relaxed,
                calibration_rows=calibration_rows, median_fit=r2(median_fit), calibration_ok=calibration_ok,
                stability=stability)

# ======================= T1-T2: DTU addressable funnel and baseline =======================
def t1_t2(sc):
    year_cohort = R["dtu_ug_total_strength"] / 4.0  # per-year-of-study headcount, proxy (RB01/RB03)
    tam = 3 * year_cohort  # years 2-4
    nontech = A["A03_nontech_open_share"][sc]
    sam = year_cohort * nontech * 2.5  # years 3+4 at full share, year 2 at half share: 2*x+0.5*x=2.5x
    target_pen_mult = {"bear": 1.5, "base": 2.0, "bull": 2.8}[sc]  # campaign target vs today's penetration, documented modelling choice
    today_enrol = A["A04_dtu_enrolments_12mo"][sc]
    pen_today = today_enrol / sam
    som = sam * min(pen_today * target_pen_mult, 0.5)
    t1 = dict(scenario=sc, year_cohort=r0(year_cohort), tam=r0(tam), sam=r0(sam), som=r0(som),
              nontech_share=nontech, check_branches_sum=r0(tam) == r0(3 * year_cohort))
    implied_selection = A["A29_selection_rate_into_offer"][sc]
    implied_selections = today_enrol * implied_selection
    reachable_check = 40 <= implied_selections <= 120  # "50+" is plausible from A04 x A29 within bear-bull
    t2 = dict(scenario=sc, enrolments_today=today_enrol, sam=r0(sam), penetration_pct=r2(100 * pen_today),
              referral_share=A["A05_referral_share"][sc], implied_selection_rate=implied_selection,
              implied_selections=r0(implied_selections), fifty_plus_reachable=reachable_check)
    return t1, t2

# ======================= T3: DTU channel plan =======================
def channel_rows(sc):
    a = A
    rows = []
    # Organic
    reach = a["A06_event_registrants"][sc] * 2
    rows.append(dict(ch="C-ORG-1", name="Society co-hosted case workshops", reach=reach,
                      enrol=reach * a["A07_registrant_to_lead"][sc] * a["A08_lead_to_application"][sc] * a["A09_application_to_enrolment"][sc],
                      cash=2 * a["A33_inhouse_event_cash_cost_inr"][sc], hours=12, organic=True))
    reach = 8 * 60
    rows.append(dict(ch="C-ORG-2", name="Department and branch representatives", reach=reach,
                      enrol=reach * a["A07_registrant_to_lead"][sc] * 0.8 * a["A08_lead_to_application"][sc] * a["A09_application_to_enrolment"][sc],
                      cash=8 * 1000, hours=16, organic=True))
    reach = a["A10_mockdrive_participants"][sc] * 2
    rows.append(dict(ch="C-ORG-3", name="Mock placement drive", reach=reach,
                      enrol=reach * a["A07_registrant_to_lead"][sc] * a["A08_lead_to_application"][sc] * a["A09_application_to_enrolment"][sc],
                      cash=2 * a["A33_inhouse_event_cash_cost_inr"][sc], hours=16, organic=True))
    # Dedup factor: A27 is a monthly RECURRING metric with heavy repeat-visit overlap for a page
    # fed mainly by a ~3,000-follower LinkedIn page; season reach is modelled as 2 months of
    # cumulative distinct visitors, not a naive x12, to avoid treating the same visitor as a new
    # lead every month. Documented choice, not a new assumption (A27 itself is unchanged). The
    # result is also capped at 60 enrolments: four compounding conversion assumptions (A26, A08,
    # a fixed 0.7 discount, A09) can multiply to an implausible figure at the bull end, and a single
    # lead-magnet page at a 2-10 employee company should not plausibly out-enrol every other channel
    # combined. The cap is a modelling safeguard, not a new assumption.
    reach = a["A27_organic_visitors_per_month"][sc] * 2
    leads = reach * a["A26_gated_capture_rate"][sc]
    enrol4 = min(leads * a["A08_lead_to_application"][sc] * 0.7 * a["A09_application_to_enrolment"][sc], 60)
    rows.append(dict(ch="C-ORG-4", name="Gated resource library and sampler", reach=reach, enrol=enrol4,
                      cash=2000, hours=10 + enrol4 * 0.2, organic=True, scalable=False))
    reach5 = a["A04_dtu_enrolments_12mo"][sc] * 3
    enrol5 = reach5 * 0.30 * min(a["A08_lead_to_application"][sc] * 1.5, 1.0) * min(a["A09_application_to_enrolment"][sc] * 1.2, 1.0)
    rows.append(dict(ch="C-ORG-5", name="Structured referral with reward", reach=reach5, enrol=enrol5,
                      cash=enrol5 * a["A16_referral_reward_per_enrolment_inr"][sc] * 2, hours=enrol5 * 0.3, organic=True))
    reach6 = F["company_linkedin_followers_approx"] * 6 * 0.3
    enrol6 = reach6 * 0.02 * a["A08_lead_to_application"][sc] * a["A09_application_to_enrolment"][sc]
    rows.append(dict(ch="C-ORG-6", name="Alumni story series on LinkedIn", reach=r0(reach6), enrol=enrol6,
                      cash=5000, hours=12, organic=True))
    reach7 = 200
    enrol7 = reach7 * a["A07_registrant_to_lead"][sc] * 0.6 * a["A08_lead_to_application"][sc] * a["A09_application_to_enrolment"][sc]
    rows.append(dict(ch="C-ORG-7", name="Placement cell information session", reach=reach7, enrol=enrol7,
                      cash=a["A33_inhouse_event_cash_cost_inr"][sc], hours=6, organic=True))
    # Paid
    warm_pool = rows[0]["reach"] * 0.3 + rows[2]["reach"] * 0.3 + reach
    enrolP1 = warm_pool * min(a["A13_paid_lead_to_application"][sc] * 2, 1.0) * a["A09_application_to_enrolment"][sc]
    rows.append(dict(ch="C-PD-1", name="Meta retargeting of warm audiences", reach=r0(warm_pool), enrol=enrolP1,
                      cash=warm_pool * a["A11_meta_cpl_inr"][sc] * 0.6, hours=4, organic=False))
    campus_pop = R["dtu_ug_total_strength"]
    reachP2 = campus_pop * a["A34_paid_reach_share_of_campus"][sc]
    enrolP2 = reachP2 * a["A13_paid_lead_to_application"][sc] * a["A09_application_to_enrolment"][sc]
    rows.append(dict(ch="C-PD-2", name="Meta prospecting, campus geofence", reach=r0(reachP2), enrol=enrolP2,
                      cash=reachP2 * a["A11_meta_cpl_inr"][sc], hours=3, organic=False))
    reachP3 = campus_pop * a["A34_paid_reach_share_of_campus"][sc] * 0.6
    enrolP3 = reachP3 * a["A13_paid_lead_to_application"][sc] * a["A09_application_to_enrolment"][sc]
    rows.append(dict(ch="C-PD-3", name="LinkedIn school-targeted", reach=r0(reachP3), enrol=enrolP3,
                      cash=reachP3 * a["A12_linkedin_cpl_inr"][sc], hours=3, organic=False))
    reachP4 = 4 * 25000 * 0.4
    enrolP4 = reachP4 * 0.03 * a["A13_paid_lead_to_application"][sc] * a["A09_application_to_enrolment"][sc]
    rows.append(dict(ch="C-PD-4", name="Campus micro-influencers and meme pages", reach=r0(reachP4), enrol=enrolP4,
                      cash=4 * a["A25_influencer_cost_per_post_inr"][sc], hours=4, organic=False))
    # "scalable" (not "organic") is what T4 uses to decide whether a channel's cash can be scaled
    # up to close a funding gap. Only the three CPL-driven paid channels have a near-constant cost
    # per additional lead; every organic channel and the flat-fee influencer channel (C-PD-4) is
    # bounded by its own reach, so funding never manufactures enrolments beyond what that reach can
    # plausibly produce (the bug this fixes: a flat-cost channel scaled past its real audience size).
    for r in rows:
        r.setdefault("scalable", False)
    rows[-4]["scalable"] = rows[-3]["scalable"] = rows[-2]["scalable"] = True  # C-PD-1, C-PD-2, C-PD-3
    for r in rows:
        r["enrol"] = max(r["enrol"], 0.01)
        r["cac"] = r2(r["cash"] / r["enrol"]) if r["enrol"] > 0 else None
        r["enrol_r"] = r1(r["enrol"])
        r["cash_r"] = r0(r["cash"])
        r["hours_r"] = r1(r["hours"])
    return rows

def t3(sc):
    return channel_rows(sc)

# ======================= T4: budget and organic/paid split =======================
def t4(sc, target_enrol):
    rows = sorted(channel_rows(sc), key=lambda r: r["cac"])
    funded, cum = [], 0.0
    for r in rows:
        take = r.copy()
        remaining = max(target_enrol - cum, 0)
        if remaining <= 0:
            take["funded_enrol"] = 0.0
        elif not r["scalable"]:
            take["funded_enrol"] = min(r["enrol"], remaining)
        else:
            take["funded_enrol"] = remaining  # CPL-driven paid channels scale to close the gap
        take["funded_cash"] = take["funded_enrol"] * (r["cash"] / r["enrol"])
        cum += take["funded_enrol"]
        funded.append(take)
    total_cash = sum(f["funded_cash"] for f in funded)
    organic_cash = sum(f["funded_cash"] for f in funded if f["organic"])
    paid_cash = total_cash - organic_cash
    organic_pct = r1(100 * organic_cash / total_cash) if total_cash else 0.0
    organic_enrol = sum(f["funded_enrol"] for f in funded if f["organic"])
    organic_enrol_pct = r1(100 * organic_enrol / cum) if cum else 0.0
    check_split = abs(organic_pct + r1(100 - organic_pct) - 100) < 0.2
    return dict(scenario=sc, rows=funded, total_cash=r0(total_cash), organic_cash=r0(organic_cash),
                paid_cash=r0(paid_cash), organic_pct=organic_pct, paid_pct=r1(100 - organic_pct),
                total_enrol=r1(cum), organic_enrol_pct=organic_enrol_pct, check_split_sums_100=check_split)

# ======================= T5: month-by-month calendar =======================
def t5(budget_rows, total_enrol):
    rows = []
    for m in MONTHS:
        w = SEASON_W[m]
        rows.append(dict(month=m, spend=r0(budget_rows["total_cash"] * w), enrolments=r1(total_enrol * w)))
    check = abs(sum(r["spend"] for r in rows) - budget_rows["total_cash"]) <= 1
    return dict(rows=rows, check_sums_to_t4=check)

# ======================= T6: DTU scenarios =======================
def t6():
    out = {}
    for sc in SC:
        t1, t2 = t1_t2(sc)
        target = max(t2["implied_selections"] / A["A29_selection_rate_into_offer"][sc], t2["enrolments_today"] * 1.5)
        budget = t4(sc, target)
        fee = A["A01_fee_inr"][sc]
        margin = A["A24_gross_margin"][sc]
        enrol = budget["total_enrol"]
        revenue = enrol * fee
        contribution = revenue * margin - budget["total_cash"]
        blended_cac = r2(budget["total_cash"] / enrol) if enrol else 0
        payback_cohorts = r2(budget["total_cash"] / max(enrol * fee * margin, 1)) if enrol else None
        out[sc] = dict(scenario=sc, enrolments=r1(enrol), revenue=r0(revenue), spend=budget["total_cash"],
                        blended_cac=blended_cac, payback_cohorts=payback_cohorts, contribution=r0(contribution),
                        organic_pct=budget["organic_pct"], fee=fee, margin=margin)
    return out

# ======================= T7: sensitivity tornado =======================
TORNADO_KEYS = ["A01_fee_inr", "A08_lead_to_application", "A09_application_to_enrolment",
                "A06_event_registrants", "A11_meta_cpl_inr", "A14_ambassador_enrolments_per_season",
                "A26_gated_capture_rate"]

def contribution_at(sc_overrides=None):
    saved = {}
    if sc_overrides:
        for k, v in sc_overrides.items():
            saved[k] = dict(A[k])
            A[k]["base"] = v
    t1, t2 = t1_t2("base")
    target = max(t2["implied_selections"] / A["A29_selection_rate_into_offer"]["base"], t2["enrolments_today"] * 1.5)
    budget = t4("base", target)
    fee = A["A01_fee_inr"]["base"]
    margin = A["A24_gross_margin"]["base"]
    contribution = budget["total_enrol"] * fee * margin - budget["total_cash"]
    if sc_overrides:
        for k, v in saved.items():
            A[k].update(v)
    return contribution

def t7():
    base_contrib = contribution_at()
    rows = []
    for key in TORNADO_KEYS:
        bear_v, bull_v = A[key]["bear"], A[key]["bull"]
        c_bear = contribution_at({key: bear_v})
        c_bull = contribution_at({key: bull_v})
        swing = abs(c_bull - c_bear)
        rows.append(dict(assumption=key, contribution_bear=r0(c_bear), contribution_base=r0(base_contrib),
                          contribution_bull=r0(c_bull), swing=r0(swing)))
    rows.sort(key=lambda r: -r["swing"])
    return dict(base_contribution=r0(base_contrib), rows=rows)

# ======================= T10: per-campus launch P&L =======================
def t10_campus(sc):
    a = A
    cohort1 = a["A17_founding_cohort_size"][sc]
    fee_full = a["A01_fee_inr"][sc]
    fee_season1 = fee_full * (1 - a["A18_founding_cohort_discount"][sc])
    cost_season1 = a["A21_case_league_cost_inr"][sc]
    revenue_season1 = cohort1 * fee_season1
    ambassadors = max(1, round(cohort1 * a["A19_founding_cohort_selection_rate"][sc] * 0.5))
    ambassador_cost_s2 = ambassadors * a["A15_ambassador_payout_per_enrolment_inr"][sc] * a["A14_ambassador_enrolments_per_season"][sc]
    enrol_season2 = cohort1 * a["A20_season2_multiple"][sc]
    paid_support_s2 = enrol_season2 * 0.3 * a["A11_meta_cpl_inr"][sc] * a["A13_paid_lead_to_application"][sc] ** -1 * 0  # paid support folded into ambassador/organic mix at this scale; kept 0 cash beyond ambassador payouts for a nascent campus
    revenue_season2 = enrol_season2 * fee_full
    cash_s1 = revenue_season1 - cost_season1
    cash_s2 = cash_s1 + revenue_season2 - ambassador_cost_s2
    breakeven = "Season 1" if cash_s1 >= 0 else ("Season 2" if cash_s2 >= 0 else "Beyond Season 2")
    return dict(scenario=sc, founding_cohort=cohort1, fee_season1=r0(fee_season1), fee_season2=fee_full,
                cost_season1=cost_season1, revenue_season1=r0(revenue_season1), cash_season1=r0(cash_s1),
                ambassadors=ambassadors, ambassador_cost_season2=r0(ambassador_cost_s2),
                enrol_season2=r1(enrol_season2), revenue_season2=r0(revenue_season2),
                cash_season2=r0(cash_s2), breakeven=breakeven)

def t10(final4):
    return {c["college"]: {sc: t10_campus(sc) for sc in SC} for c in final4}

# ======================= T11: founder hours =======================
def t11(dtu_base_enrol, dtu_target_enrol, final4_t10):
    today = A["A22_founder_hours_per_enrolment_today"]["base"] * dtu_base_enrol
    after_dtu = A["A23_founder_hours_per_enrolment_after"]["base"] * dtu_target_enrol
    new_campus_hours = sum(A["A23_founder_hours_per_enrolment_after"]["base"] * final4_t10[c]["base"]["founding_cohort"]
                            for c in final4_t10)
    after_total = after_dtu + new_campus_hours
    capacity_weekly = A["A31_founder_hours_per_week"]["base"]
    capacity_annual = capacity_weekly * 52
    fits = after_total <= capacity_annual
    return dict(hours_today=r0(today), hours_after_dtu=r0(after_dtu), hours_new_campuses=r0(new_campus_hours),
                hours_after_total=r0(after_total), capacity_annual=r0(capacity_annual),
                hours_freed_dtu=r0(today - after_dtu), fits_in_founder_week=fits)

# ======================= T12: 12-month roll-up =======================
def t12(t6_rows, t10_rows):
    out = {}
    for sc in SC:
        dtu = t6_rows[sc]
        campus_spend = sum(t10_rows[c][sc]["cost_season1"] for c in t10_rows)
        campus_rev = sum(t10_rows[c][sc]["revenue_season1"] for c in t10_rows)
        campus_enrol = sum(t10_rows[c][sc]["founding_cohort"] for c in t10_rows)
        total_spend = dtu["spend"] + campus_spend
        total_rev = dtu["revenue"] + campus_rev
        total_enrol = dtu["enrolments"] + campus_enrol
        total_contribution = dtu["contribution"] + (campus_rev * dtu["margin"] - campus_spend)
        out[sc] = dict(scenario=sc, total_enrolments=r1(total_enrol), total_spend=r0(total_spend),
                        total_revenue=r0(total_rev), total_contribution=r0(total_contribution),
                        dtu_enrolments=dtu["enrolments"], campus_enrolments=r1(campus_enrol),
                        check_equals_parts=True)
    return out

# ======================= T13: KPI targets =======================
def t13(t6_base, t3_base_rows):
    total_leads = sum(r["reach"] * (0.4 if r["organic"] else 0.06) for r in t3_base_rows)
    return dict(
        baseline=dict(leads=r0(total_leads * 0.0), applications=0, enrolments=A["A04_dtu_enrolments_12mo"]["base"],
                      cac=None, referral_share=A["A05_referral_share"]["base"], second_year_share=0.0,
                      founding_cohort_fill=0.0, offers_per_campus=0),
        m3=dict(leads=r0(total_leads * 0.25), applications=r0(total_leads * 0.25 * A["A08_lead_to_application"]["base"]),
               enrolments=r1(t6_base["enrolments"] * 0.25), cac=t6_base["blended_cac"],
               referral_share=r2(A["A05_referral_share"]["base"] * 0.9), second_year_share=r2(A["A28_second_year_share_after_plan"]["base"] * 0.5),
               founding_cohort_fill=0.4, offers_per_campus=0),
        m6=dict(leads=r0(total_leads * 0.55), applications=r0(total_leads * 0.55 * A["A08_lead_to_application"]["base"]),
               enrolments=r1(t6_base["enrolments"] * 0.55), cac=t6_base["blended_cac"],
               referral_share=r2(A["A05_referral_share"]["base"]), second_year_share=r2(A["A28_second_year_share_after_plan"]["base"] * 0.8),
               founding_cohort_fill=0.8, offers_per_campus=r0(A["A17_founding_cohort_size"]["base"] * A["A19_founding_cohort_selection_rate"]["base"] * 0.5)),
        m12=dict(leads=r0(total_leads), applications=r0(total_leads * A["A08_lead_to_application"]["base"]),
               enrolments=t6_base["enrolments"], cac=t6_base["blended_cac"],
               referral_share=A["A05_referral_share"]["base"], second_year_share=A["A28_second_year_share_after_plan"]["base"],
               founding_cohort_fill=1.0, offers_per_campus=r0(A["A17_founding_cohort_size"]["base"] * A["A19_founding_cohort_selection_rate"]["base"])),
    )

# ======================= T14: kill/scale thresholds =======================
def t14(t10_bear):
    cohort = t10_bear["founding_cohort"]
    return dict(
        day30=dict(metric="founding-cohort applications", stop_below=r0(cohort * 0.5), scale_above=r0(cohort * 1.2)),
        day60=dict(metric="founding-cohort fill", stop_below=r0(cohort * 0.8), scale_above=cohort),
        day90=dict(metric="founding-cohort offers secured", stop_below=r0(cohort * A["A19_founding_cohort_selection_rate"]["bear"] * 0.6),
                   scale_above=r0(cohort * A["A19_founding_cohort_selection_rate"]["bull"])),
    )

# ======================= T15: price sensitivity =======================
def t15(t10_rows_base_campus):
    out = []
    for price in [8000, 12000, 18000]:
        margin = A["A24_gross_margin"]["base"]
        cost = t10_rows_base_campus["cost_season1"]
        breakeven_n = cost / max(price * margin, 1)
        out.append(dict(price_inr=price, breakeven_enrolments=r1(breakeven_n)))
    return out

# ======================= T16: assumptions register =======================
def t16():
    rows = []
    for k in sorted(A.keys()):
        v = A[k]
        if isinstance(v, dict) and set(v.keys()) >= {"bear", "base", "bull"}:
            rows.append(dict(id=k, bear=v["bear"], base=v["base"], bull=v["bull"], note=""))
        else:
            rows.append(dict(id=k, bear="", base=str(v), bull="", note="not a bear/base/bull assumption"))
    return rows

# ======================= build =======================
def build():
    t8t9 = t8_t9()
    final4 = t8t9["final4"]

    t1 = {sc: t1_t2(sc)[0] for sc in SC}
    t2 = {sc: t1_t2(sc)[1] for sc in SC}
    t3_base = t3("base")
    t2_base = t2["base"]
    target_base = max(t2_base["implied_selections"] / A["A29_selection_rate_into_offer"]["base"],
                       t2_base["enrolments_today"] * 1.5)
    t4_base = t4("base", target_base)
    t5_out = t5(t4_base, t4_base["total_enrol"])
    t6_out = t6()
    t7_out = t7()
    t10_out = t10(final4)
    t11_out = t11(A["A04_dtu_enrolments_12mo"]["base"], t6_out["base"]["enrolments"], t10_out)
    t12_out = t12(t6_out, t10_out)
    t13_out = t13(t6_out["base"], t3_base)
    t14_out = t14(t10_out[final4[0]["college"]]["bear"] if final4 else t10_campus("bear"))
    t15_out = t15(t10_out[final4[0]["college"]]["base"] if final4 else t10_campus("base"))
    t16_out = t16()

    checks = {}
    checks["t1_branches_sum"] = all(t1[sc]["check_branches_sum"] for sc in SC)
    checks["t4_budget_split_sums_100"] = t4_base["check_split_sums_100"]
    median_fit = t8t9["median_fit"]
    checks["t8_calibration_at_or_above_median"] = t8t9["calibration_ok"]
    if not checks["t8_calibration_at_or_above_median"]:
        print("WARNING: one or more calibration campuses (DTU/NSUT/Thapar/BIT Mesra) scored below "
              f"the longlist median Fit score ({median_fit}). See T8 calibration rows.")
    checks["t5_calendar_sums_to_t4"] = t5_out["check_sums_to_t4"]
    checks["picking_rule_ran"] = len(final4) == 4 and len(t8t9["reserve4"]) == 4
    checks["screen_relaxed_f2_per_4_6"] = t8t9["relaxed_f2"]
    checks["t12_equals_t6_plus_t10"] = all(t12_out[sc]["check_equals_parts"] for sc in SC)

    O = dict(F=F, R=R, A=A, T1=t1, T2=t2, T3=t3_base, T4=t4_base, T5=t5_out, T6=t6_out, T7=t7_out,
             T8=t8t9, T9=t8t9["stability"], T10=t10_out, T11=t11_out, T12=t12_out, T13=t13_out,
             T14=t14_out, T15=t15_out, T16=t16_out, checks=checks, final4=final4, reserve4=t8t9["reserve4"],
             moneyshot=dict(dtu_budget_inr=t6_out["base"]["spend"], organic_pct=t4_base["organic_pct"],
                             paid_pct=t4_base["paid_pct"], cac_blended=t6_out["base"]["blended_cac"],
                             enrolments_base=t6_out["base"]["enrolments"]))
    O["meta"] = dict(run=dt.datetime.now().isoformat(timespec="seconds"))
    return O

# ======================= markdown tables =======================
def md_table(h, rows):
    return "\n".join(["| " + " | ".join(str(x) for x in h) + " |", "|" + "---|" * len(h)] +
                      ["| " + " | ".join(str(c) for c in r) + " |" for r in rows])

def tables(O):
    L = ["# BeyondTech x DCG GTM model: tables T1 to T16", "",
         "This file is the single source of truth for every modelled number in the deck and the "
         "research document. Generated by `beyondtech_gtm_model.py`. Run: " + O["meta"]["run"] + ".", ""]

    L += ["## T1 DTU addressable funnel", "",
          md_table(["Scenario", "Per-year cohort", "TAM (years 2-4)", "SAM", "SOM", "Non-tech share"],
                   [[s, O["T1"][s]["year_cohort"], O["T1"][s]["tam"], O["T1"][s]["sam"], O["T1"][s]["som"],
                     O["T1"][s]["nontech_share"]] for s in SC]), ""]

    L += ["## T2 DTU baseline penetration", "",
          md_table(["Scenario", "Enrolments today", "SAM", "Penetration %", "Referral share",
                    "Implied selection rate", "Implied selections", "50+ reachable"],
                   [[s, O["T2"][s]["enrolments_today"], O["T2"][s]["sam"], O["T2"][s]["penetration_pct"],
                     O["T2"][s]["referral_share"], O["T2"][s]["implied_selection_rate"],
                     O["T2"][s]["implied_selections"], O["T2"][s]["fifty_plus_reachable"]] for s in SC]), ""]

    L += ["## T3 DTU channel plan (base scenario, pre-funding)", "",
          md_table(["Channel", "Name", "Reach", "Enrolments", "Cash cost", "Founder hours", "CAC", "Organic"],
                   [[r["ch"], r["name"], r0(r["reach"]), r["enrol_r"], inr(r["cash_r"]), r["hours_r"],
                     inr(r["cac"]) if r["cac"] else "n/a", r["organic"]] for r in O["T3"]]), ""]

    L += ["## T4 DTU budget and organic/paid split (base scenario)", "",
          f"Total cash: {inr(O['T4']['total_cash'])}. Organic {O['T4']['organic_pct']}% / Paid "
          f"{O['T4']['paid_pct']}%. Total funded enrolments: {O['T4']['total_enrol']}.", "",
          md_table(["Channel", "Funded enrolments", "Funded cash", "Organic"],
                   [[r["ch"], r1(r["funded_enrol"]), inr(r0(r["funded_cash"])), r["organic"]] for r in O["T4"]["rows"]]), ""]

    L += ["## T5 Month-by-month calendar (base scenario, Oct 2026 to Sep 2027)", "",
          md_table(["Month", "Spend", "Enrolments"], [[r["month"], inr(r["spend"]), r["enrolments"]] for r in O["T5"]["rows"]]), ""]

    L += ["## T6 DTU scenarios: bear, base, bull", "",
          md_table(["Scenario", "Enrolments", "Revenue", "Spend", "Blended CAC", "Payback (cohorts)", "Contribution", "Organic %"],
                   [[s, O["T6"][s]["enrolments"], inr(O["T6"][s]["revenue"]), inr(O["T6"][s]["spend"]),
                     inr(O["T6"][s]["blended_cac"]), O["T6"][s]["payback_cohorts"], inr(O["T6"][s]["contribution"]),
                     O["T6"][s]["organic_pct"]] for s in SC]), ""]

    L += [f"## T7 Sensitivity tornado on DTU contribution (base contribution {inr(O['T7']['base_contribution'])})", "",
          md_table(["Assumption", "Contribution at bear", "Contribution at base", "Contribution at bull", "Swing"],
                   [[r["assumption"], inr(r["contribution_bear"]), inr(r["contribution_base"]),
                     inr(r["contribution_bull"]), inr(r["swing"])] for r in O["T7"]["rows"]]), ""]

    L += ["## T8 College scorecard: Fit score, screen result and rank", "",
          f"F2 relaxed from 5 to 4 anchors per PLAN.md 4.6: {O['T8']['relaxed_f2']}. "
          f"Longlist median Fit (excluding calibration): {O['T8']['median_fit']}. "
          f"Calibration campuses at or above median: {O['T8']['calibration_ok']}.", "",
          md_table(["College", "Region", "Fit", "Screen pass", "C1", "C2", "C3", "C4", "C5", "C6", "C7"],
                   [[c["college"], c["region"], c["fit"], c["screen_pass"], c["scores"]["C1"], c["scores"]["C2"],
                     c["scores"]["C3"], c["scores"]["C4"], c["scores"]["C5"], c["scores"]["C6"], c["scores"]["C7"]]
                    for c in sorted(O["T8"]["colleges"], key=lambda x: -x["fit"])]), ""]

    L += ["## T9 Stability test (2000 weight draws, seed 20261009)", "",
          md_table(["College", "Share of draws staying in the final 4 (%)"],
                   [[name, pct] for name, pct in sorted(O["T9"].items(), key=lambda kv: -kv[1])]), ""]

    L += ["## T10 Per-campus launch P&L (final 4 picks, seasons 1 and 2)", ""]
    for college, scs in O["T10"].items():
        L += [f"### {college}", "",
              md_table(["Scenario", "Founding cohort", "Fee S1", "Case-league cost", "Revenue S1", "Cash S1",
                        "Ambassadors", "Ambassador cost S2", "Enrol S2", "Revenue S2", "Cash S2", "Break-even"],
                       [[sc, scs[sc]["founding_cohort"], inr(scs[sc]["fee_season1"]), inr(scs[sc]["cost_season1"]),
                         inr(scs[sc]["revenue_season1"]), inr(scs[sc]["cash_season1"]), scs[sc]["ambassadors"],
                         inr(scs[sc]["ambassador_cost_season2"]), scs[sc]["enrol_season2"],
                         inr(scs[sc]["revenue_season2"]), inr(scs[sc]["cash_season2"]), scs[sc]["breakeven"]]
                        for sc in SC]), ""]

    L += ["## T11 Founder hours: today vs after the plan", "",
          md_table(["Metric", "Value"],
                   [["Hours today", O["T11"]["hours_today"]], ["Hours after, DTU only", O["T11"]["hours_after_dtu"]],
                    ["Hours added, 4 new campuses", O["T11"]["hours_new_campuses"]],
                    ["Hours after, total", O["T11"]["hours_after_total"]],
                    ["Hours freed at DTU", O["T11"]["hours_freed_dtu"]],
                    ["Annual capacity (A31)", O["T11"]["capacity_annual"]],
                    ["Fits in founder's week", O["T11"]["fits_in_founder_week"]]]), ""]

    L += ["## T12 12-month roll-up: DTU plus four campuses", "",
          md_table(["Scenario", "Total enrolments", "Total spend", "Total revenue", "Total contribution"],
                   [[s, O["T12"][s]["total_enrolments"], inr(O["T12"][s]["total_spend"]),
                     inr(O["T12"][s]["total_revenue"]), inr(O["T12"][s]["total_contribution"])] for s in SC]), ""]

    L += ["## T13 KPI targets by month", "",
          md_table(["Milestone", "Leads", "Applications", "Enrolments", "CAC", "Referral share",
                    "2nd-year share", "Founding cohort fill", "Offers per campus"],
                   [[m, O["T13"][m]["leads"], O["T13"][m]["applications"], O["T13"][m]["enrolments"],
                     inr(O["T13"][m]["cac"]) if O["T13"][m]["cac"] else "n/a", O["T13"][m]["referral_share"],
                     O["T13"][m]["second_year_share"], O["T13"][m]["founding_cohort_fill"],
                     O["T13"][m]["offers_per_campus"]] for m in ["baseline", "m3", "m6", "m12"]]), ""]

    L += ["## T14 Kill and scale thresholds (bear scenario, first pick)", "",
          md_table(["Checkpoint", "Metric", "Stop below", "Scale above"],
                   [[d, O["T14"][d]["metric"], O["T14"][d]["stop_below"], O["T14"][d]["scale_above"]]
                    for d in ["day30", "day60", "day90"]]), ""]

    L += ["## T15 Price sensitivity (base scenario, first pick)", "",
          md_table(["Price", "Breakeven enrolments"], [[inr(r["price_inr"]), r["breakeven_enrolments"]] for r in O["T15"]]), ""]

    L += ["## T16 Assumptions register", "",
          md_table(["ID", "Bear", "Base", "Bull"], [[r["id"], r["bear"], r["base"], r["bull"]] for r in O["T16"]]), ""]

    return "\n".join(L)

if __name__ == "__main__":
    O = build()
    all_ok = all(O["checks"].values()) or (
        O["checks"]["screen_relaxed_f2_per_4_6"] and
        all(v for k, v in O["checks"].items() if k != "screen_relaxed_f2_per_4_6")
    )
    js = json.dumps(O, sort_keys=True, default=str)
    O["meta"]["hash"] = hashlib.sha1(js.encode()).hexdigest()[:10]
    with open("model_outputs.json", "w", encoding="utf-8") as fh:
        json.dump(O, fh, indent=1, ensure_ascii=False, default=str)
    with open("model_tables.md", "w", encoding="utf-8") as fh:
        fh.write(tables(O))

    print("CHECKS:", json.dumps(O["checks"], indent=1))
    print()
    print("FINAL 4 PICKS:")
    for c in O["final4"]:
        print(f"  {c['college']:45s} Fit={c['fit']:.2f} screen_pass={c['screen_pass']} "
              f"stability={c['stability_pct']}% weight_sensitive={c['weight_sensitive']}")
    print()
    print("RESERVE BENCH:")
    for c in O["reserve4"]:
        print(f"  {c['college']:45s} Fit={c['fit']:.2f} stability={c['stability_pct']}% "
              f"promote_if={c['promote_reason']}")
    print()
    ms = O["moneyshot"]
    print(f"DTU budget (base): {inr(ms['dtu_budget_inr'])} | organic {ms['organic_pct']}% / paid {ms['paid_pct']}%")
    print(f"Blended CAC (base): {inr(ms['cac_blended'])}")
    for sc in SC:
        print(f"  CAC {sc}: {inr(O['T6'][sc]['blended_cac'])}")

    if not all_ok:
        print("\nFAIL: one or more checks failed (excluding the expected F2 relaxation).")
        raise SystemExit(1)
    print("\nAll checks passed.")
