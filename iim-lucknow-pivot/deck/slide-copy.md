# Slide copy (working draft for writers; plan section 12 code is authoritative)

Values injected by make_values.py:

```
const V = {"rev12": "250", "rev12_bear": "130", "rev12_bull": "432", "cost12": "236", "share_fy25": "3.7", "lost_rev": "6,421", "ads12": "177", "spon12": "68", "pro12": "3.5", "gift12": "0.9", "fc12": "0.5", "rev_totals": {"bear": {"ads": 91.4, "sponsorship": 36.5, "pro": 0.9, "gifting": 0.5, "fancode": 0.3, "total": 129.6}, "base": {"ads": 176.8, "sponsorship": 68.0, "pro": 3.5, "gifting": 0.9, "fancode": 0.5, "total": 249.7}, "bull": {"ads": 316.6, "sponsorship": 104.5, "pro": 9.0, "gifting": 1.5, "fancode": 0.8, "total": 432.3}}, "rev_months": [11.1, 8.89, 12.26, 17.96, 18.83, 34.91, 46.24, 31.51, 15.8, 16.45, 17.41, 18.38], "nsm_paths": {"bear": [3.5, 3.59, 3.85, 4.11, 4.38, 5.77, 6.65, 5.95, 4.55, 4.73, 4.99, 5.25], "base": [5.0, 5.25, 6.0, 6.75, 7.5, 11.5, 14.0, 12.0, 8.0, 8.5, 9.25, 10.0], "bull": [6.5, 7.02, 8.58, 10.14, 11.7, 20.02, 25.22, 21.06, 12.74, 13.78, 15.34, 16.9]}, "ipl2": "113", "core_now": "13", "preban": "100", "mau_jul": "50", "mau_oct": "35", "nsm0": "5", "nsm6": "7.5", "nsm12": "10", "m4_6": "300", "m4_12": "290", "left_s1s2_share": "51", "seg_now": [3.5, 0.2, 8.0, 5.2, 33.0], "seg_pre": [35.0, 5.0, 20.0, 15.0, 25.0], "stay": [10, 5, 40, 35, 50], "seg_left": [31.5, 4.8, 12.0, 9.8, 12.5], "ue_S3": "183", "ue_S4": "157", "ue_S5": "35", "ue_mult": "5.2", "opt_scores": [[2, 2, 3, 5, 2, 2, 2.6], [2, 3, 2, 5, 3, 3, 2.9], [3, 1, 2, 5, 3, 3, 2.75], [4, 5, 5, 5, 3, 4, 4.35], [5, 4, 5, 1, 2, 2, 3.45]], "scoreD": "4.35", "scoreA": "2.60", "rice_top": [["Lineup-lock nudges", 27.0, "Build"], ["Dream Rating v1", 19.2, "Build"], ["Leagues v2", 18.0, "Build"], ["Shareable rating cards", 16.0, "Build"], ["Match-day digest", 9.8, "Build"]], "rice_cut": [["Non-cricket fantasy", 0.2, "Cut"], ["Global launch", 0.1, "Cut"]], "net_pre": "12.7", "net28": "1.0", "net40": "-5.0", "drop28": "92", "drop40": "139", "pp28": "73", "ecpm_reg": "110", "ecpm_ipl": "180", "title_base": "30", "n_d11": "29,248", "n_all": "42,759", "n_periods": [11514, 8230, 9309, 195], "rating_months": [4.17, 4.36, 3.98, 3.92, 3.84, 4.08, 2.86, 3.25, 3.07, 2.34, 2.03, 2.86, 2.45, 2.15, 2.49, 2.52], "rating_labels": ["Jun 25", "Jul 25", "Aug 25", "Sep 25", "Oct 25", "Nov 25", "Dec 25", "Jan 26", "Feb 26", "Mar 26", "Apr 26", "May 26", "Jun 26", "Jul 26", "Aug 26", "Sep 26"], "rating_keys": ["2025-06", "2025-07", "2025-08", "2025-09", "2025-10", "2025-11", "2025-12", "2026-01", "2026-02", "2026-03", "2026-04", "2026-05", "2026-06", "2026-07", "2026-08", "2026-09"], "theme_share": [[6.4, 6.4, 7.0, 20.0], [1.3, 1.0, 1.4, 1.0], [0.8, 0.4, 0.5, 0.5], [0.1, 0.2, 4.5, 0.0], [0.1, 0.9, 7.4, 1.5]], "rating_title": "DREAM11'S APP-STORE RATING FELL AT EVERY STEP OF THE PIVOT", "scrape_date": "2026-09-29", "scrape_mon": "Sep 2026", "quotes": [{"text": "now this app is useless because you can make team but there is no prize if…", "meta": "Play Store review, 1/5, Aug 2026"}, {"text": "Please bring back football on Dream11. Even if there is no money involved, I just enjoy…", "meta": "Play Store review, 5/5, Aug 2026"}], "n_sources": "60", "prec_summary": "T01 87%, T04 85%, T06 90%, T08 80%; T05 65% (indicative)"};
```

### 9.4 Locked slide copy and content (the build code in §12 implements exactly this)

`{key}` = a value from `deck/values.js`. Everything else is final wording.

**Slide 1: Cover**
- **Chips:**
  - "IIM LUCKNOW · PIVOT '26" (primary)
  - "ROUND 1 · LIFE AFTER THE BAN" (accent)
  - "TEAM IDEAFORGE" (primaryDeep, right)
- **Kicker:** "DREAM11" (Poppins ExtraBold 64, primary).
- **Title:** "LIFE AFTER THE BAN" (ExtraBold 104, ink, fit to 1120px, min 80).
- **Subtitle:** "Will the pivot work, and what would we change? A Head of Product's answer in eight slides".
- **Verdict card** (primaryDeep, layered):
  - Gold: "OUR VERDICT: SHARPEN THE PIVOT. Make Dream11 India's free cricket skill league: every match, your team, a live rating everyone can see, and friends to beat."
  - White: "FanCode is where fans watch; Dream11 is where they play. Base case ₹{rev12} Cr of legal revenue in 12 months, and no return to paid fantasy even if the ban falls."
- **"TEAM IDEAFORGE"** heading above the team table.
- **Right panel "THE PIVOT IN SIX DATES"** (tint): a vertical timeline of six rows:
  - 21 Aug 2025: Paid contests paused, ~95% of revenue gone
  - Sep 2025: Free-to-play relaunch, 10M daily users
  - 4 Dec 2025: Second-screen pivot with creators
  - 27 May 2026: SC rules 28% GST on deposits
  - 27 Aug 2026: Pivot declared complete, all prizes removed
  - Oct 2026: Our plan, day one
- **Logo slots:** two dashed placeholders ("Dream11", "IIM Lucknow").
- **Video line:** "Video walkthrough: link to be added" (22pt, primary).
- **Source:** "Source: PIVOT '26 case (IIM Lucknow, Sep 2026) | exchange4media (27 Aug 2026) | Storyboard18 (Sep 2025) | Supreme Court of India, 2026 INSC 595 | Team IdeaForge model and research document"

**Slide 2: Executive Summary** (counter 1 / 8; chip "EXECUTIVE SUMMARY", w 380)

*Headline:* "Sharpen the pivot, do not keep it: a free cricket skill league for Dream11's ~{core_now}M core fans earns ₹{rev12} Cr in 12 months with no rupee at stake"

Band A (y318 to 548):
- **Panel "THE CEO'S QUESTION AND OUR VERDICT"** (x64, w700):
  - The question line (Inter Bold): "Will this pivot work, and what would you change?"
  - The verdict word "SHARPEN" (Poppins ExtraBold 56, primary).
  - The destination statement (§3.2) in 22pt.
- **Table "KEEP | CHANGE"** (x788, w640), 4 rows:
  - Free, ad and sponsor funded | Global → India first
  - Engagement as the product | Multi-sport → cricket first
  - Creators, now as league hosts | AI-first → three AI jobs in the loop
  - FanCode as the sister unit | Streaming → handed to FanCode
- **Panel "WHAT THE BAN TOOK"** (x1452, w404):
  - A donut: 95% paid contests (primary) / 5% other (surface).
  - The centre label "95%".
  - A caption: "₹{lost_rev} Cr of FY25's ₹6,759 Cr".
  - Mini vertical bars: FY23 6,384 / FY24 7,934 / FY25 6,759 (₹ Cr).

Band B (y592 to 806), two columns (archetype H). **Each item must fit one line** (≤ 68
characters), so the wording below is final:
- **Left** (alertTint): "DO NOT: KEEP THE DECLARED DESTINATION, OR WAIT FOR THE COURT"
  1. "Global and multi-sport fight FPL abroad and FanCode at home"
  2. "Streams, scores and chatter already have apps; no IPL rights"
  3. "Paid fantasy nets ₹{net28} per ₹100 at 28% GST, down from ₹{net_pre}"
- **Right** (goodTint): "DO: SHARPEN INTO INDIA'S FREE CRICKET SKILL LEAGUE"
  1. "10M played free daily in Sep 2025; FPL thrives without cash prizes"
  2. "Skill and friends: the only match-day jobs no app owns now"
  3. "Ships on today's engine; ₹{rev12} Cr of legal revenue in 12 months"

Band C (y812 to 1030): five answer cards, each with a label chip, a numeral (Poppins ExtraBold 36) and 2 lines:

| Card | Chip | Numeral | Text |
|---|---|---|---|
| 1 | Q1 DIAGNOSE | "~{core_now}M" | "core fans to build for: Cricket Brains and League Captains (est.)" |
| 2 | Q2 JUDGE | "{scoreD} / 5" | "skill league tops five options; declared path scores {scoreA}" |
| 3 | Q3 BUILD | "5 steps" | "pick, call, prove, rank, repeat; 7 things we will not build" |
| 4 | Q4 MAKE IT PAY | "{nsm0}M to {nsm12}M" | "weekly team-builders by Sep 2027" |
| 5 | STRESS TEST | "₹{net28} of ₹{net_pre}" | "left per ₹100 of paid contests at 28% GST: stay free" |

*Source:* "Source: PIVOT '26 case (FY23 to FY25 Dream Sports results, CEO statements) | Storyboard18 (Sep 2025) | Lumikai State of India Interactive Media 2025 | Premier League (FPL 2025/26) | Team IdeaForge model (T2, T5, T10, T15, T16)"

**Slide 3: Q1 Who Left** (counter 2 / 8; chip "Q1 DIAGNOSE: WHO LEFT", w 420)

*Headline:* "At most about 1 in 6 of Dream11's 300M registered fans was active in a month by mid-2026, and most who left came for the money, not the game"

Band A (y318 to 700):
- **Panel "THE 300M IS A REGISTRY"** (x64, w700): a funnel with 6 rows:
  - 300M | Registered (claim, Aug 2026)
  - {preban}M | Played in IPL 2025 season (est.)
  - {mau_jul}M | Monthly, mid-2026 (max). The 50M Watch Along MAU target is the ceiling (A33)
  - {mau_oct}M | Monthly active, prizes gone (est.)
  - 10M | Daily active, Sep 2025
  - {nsm0}M | Weekly team-builders now (est.)
- **Panel "WHERE THE LEAVERS WENT"** (x788, w560):
  - The KPI "1 in 3" (Poppins ExtraBold 56, primary) with 2 lines: "ex-real-money gamers moved to offshore betting sites (Lumikai, ~1 lakh phones tracked)".
  - hBars "Daily engagement change, ex-RMG users", 3 rows (all verified): Music +43% · Micro-dramas +40% · Free games +6% (62 to 66 minutes a day).
- **Panel "WHO LEFT, BY SEGMENT (M, EST.)"** (x1372, w484):
  - A 5-row table: Segment | Left (M), rows S1 Jackpot Hunters {left_S1}, S2 Grinders {left_S2}, S3 Cricket Brains {left_S3}, S4 League Captains {left_S4}, S5 Loungers {left_S5}.
  - A caption: "{left_s1s2_share}% of leavers came for money".

Band B (y720 to 1030):
- **Panel "DREAM11'S PLAY STORE RATING FELL AT EVERY STEP OF THE PIVOT"** (x64, w1100):
  - A monthly average-rating line chart from Jun 2025 to the scrape month, values
    `{rating_months}`, y 1 to 5.
  - Three dashed vertical markers with labels: "Ban" (Aug 2025), "Second screen" (Dec 2025),
    "Prizes gone" (Aug 2026).
  - A caption: "n = {n_d11} reviews, Jun 2025 to {scrape_mon} (appendix)".
  - **The headline's "fell at every step" is conditional.** Use it only if the P1, P2 and P3
    average ratings are each lower than P0. If not, the panel title becomes "DREAM11'S PLAY
    STORE RATING, MONTH BY MONTH, ACROSS THE PIVOT". The generator (§9.5) sets `V.rating_title`.
- **Seed card** (x1188, w668, layered primaryDeep):
  - Title (gold): "SEVEN MATCH-DAY JOBS. TWO LOST THEIR APP WHEN MONEY WENT"
  - A 7-row job | default app list (white text; the last two rows gold):
    - Watch the match | JioHotstar, FanCode
    - Follow the score | Cricbuzz
    - Go deep on stats | ESPNcricinfo
    - React with others | YouTube, X
    - Laugh at the clips | Instagram
    - Have a stake in it | none since the ban
    - Prove you know cricket | none since the ban

*Source:* "Source: PIVOT '26 case (users 250M Feb 2026, 300M Aug 2026; 10M DAU Sep 2025) | best media info (50M MAU Watch Along target, IPL 2026) | Lumikai State of India Interactive Media 2025 via Business Today (Mar 2026) | Play Store and App Store reviews scraped {scrape_date}, n = {n_d11} | Team IdeaForge model T1, T2"

**Slide 4: Q1 Who Stayed** (counter 3 / 8; chip "Q1 DIAGNOSE: WHO STAYED", w 440)

*Headline:* "Five behavioural segments explain Dream11's base, and two of them, Cricket Brains and League Captains, are the ~{core_now}M fans worth building for"

Band A (y318 to 650):
- **Heatmap "HOW EACH SEGMENT BEHAVED IN THE PAID ERA (1 LOW TO 5 HIGH)"** (x64):
  - Rows: "S1 Jackpot Hunters", "S2 Grinders", "S3 Cricket Brains", "S4 League Captains", "S5 Match-day Loungers".
  - Columns: "Money motive", "Match frequency", "Team depth", "Friends", "Content", "Stayed".
  - Values (fixed judgement scores, doc §8 explains each):

    | Segment | Money motive | Match frequency | Team depth | Friends | Content | Stayed |
    |---|---|---|---|---|---|---|
    | S1 | 5 | 2 | 1 | 2 | 1 | {stay_S1}% |
    | S2 | 5 | 5 | 4 | 1 | 1 | {stay_S2}% |
    | S3 | 2 | 5 | 5 | 3 | 2 | {stay_S3}% |
    | S4 | 2 | 3 | 3 | 5 | 2 | {stay_S4}% |
    | S5 | 1 | 2 | 1 | 3 | 5 | {stay_S5}% |

  - Stayed-% cells use HG levels: <10 → 1, 10 to 29 → 2, 30 to 39 → 3, 40 to 49 → 4, ≥50 → 5.
- **Table "WHAT EACH WANTS NOW"** (right), columns ID | They want now | Verdict:
  - S1 | A windfall, which is gone | LET GO
  - S2 | Income; offshore risk | LET GO
  - S3 | Proof they know cricket | CORE
  - S4 | Bragging rights over friends | CORE
  - S5 | Company during the match | EDGE
  - Verdict cells are chips: LET GO = surface fill with ink text; CORE = primary; EDGE = accent.

Band B (y672 to 1030):
- **Panel "SIZE TODAY AND VALUE PER FAN"** (x64, w700):
  - A stacked bar of today's base by segment `{now_S1..S5}` with its legend.
  - hBars "₹ per fan per year": Cricket Brain ₹{ue_S3} · League Captain ₹{ue_S4} · Lounger ₹{ue_S5}.
  - The KPI line "A Cricket Brain is worth {ue_mult}× a Lounger".
- **Heatmap "WHAT REVIEWS TALK ABOUT (% OF DREAM11 REVIEWS)"** (x788, w560):
  - Rows: Money or prize (T01), Skill and teams (T04), Friends and leagues (T05), Watch-along and content (T06), Rank and status (T07).
  - Columns: P0 Paid, P1 FTP, P2 2nd screen, P3 No prizes.
  - Values `{share_T0x_Py}`; HR scale.
- **Two quote cards** (x1372, w484), chosen by the §6.7 rule, meta "Play Store review, {stars}★, {Mon YYYY}".
- A caption under the cards: "Verbatim public reviews; no interviews were run (appendix)".

*Source:* "Source: Play Store and App Store reviews scraped {scrape_date}, n = {n_d11}, codebook and precision in appendix | Team IdeaForge model T2 (segment sizes, assumptions A01 to A03), T13 (value per fan) | PIVOT '26 case"

**Slide 5: Q2 Verdict and FanCode** (counter 4 / 8; chip "Q2 JUDGE THE PIVOT", w 380)

*Headline:* "Sharpen the destination: a free cricket skill league scores {scoreD} of 5 against {scoreA} for the declared global multi-sport platform, and FanCode keeps the job of showing the match"

Band A (y318 to 712):
- **Heatmap "FIVE DESTINATIONS, SIX CRITERIA (1 TO 5)"** (x64):
  - Row labels: "A. As declared: global, multi-sport", "B. Fold Dream11 into FanCode", "C. Creator media network", "D. Sharpen: cricket skill league", "E. Wait for court, go back to paid".
  - Columns: "Fan pull", "Stands out", "Asset fit", "Legal", "Pays in 12m", "Doable", "Score".
  - Values from `{opt_scores}`, with the weighted score in the last column. HG scale; the score column uses levels <3 → 1, 3 to 3.49 → 2, 3.5 to 3.99 → 3, 4 to 4.29 → 4, ≥4.3 → 5.
  - Right of each row, a verdict chip: A "REJECT", B "REJECT", C "REJECT", D "IDEAL" (good), E "REJECT".
- **Formula box** below: "Score = 0.25 fan pull + 0.20 stands out + 0.15 asset fit + 0.15 legal + 0.15 pays in 12m + 0.10 doable".
- **Table "THE DECLARED DESTINATION, WORD BY WORD"** (right), columns Word | Our call:
  - Global | Defer: no rights or brand edge abroad
  - Multi-sport | Defer: FanCode has 300+ leagues
  - AI-first | Reframe: three AI jobs fans can see
  - Platform | Narrow: the match-day skill game
  - 300M users | Replace: weekly team-builders

Band B (y736 to 1030):
- **Job-split diagram**, three columns:
  - FanCode card (alertTint), title "FANCODE: WHERE YOU WATCH", 3 bullets:
    - Live rights and match passes
    - 300+ leagues, multi-sport
    - Highlights and replays
  - Seam column, "THE SEAM", with 4 chips and arrows both ways:
    - Play-along overlay
    - Watch-on links
    - Joint ad package
    - One login, with consent
  - Dream11 card (tint), title "DREAM11: WHERE YOU PLAY", 3 bullets:
    - Free team every match
    - Rating, leagues, Live Calls
    - Works beside any broadcast
- **Verdict card** (layered primaryDeep):
  - Gold 40pt: "CONCLUSIVELY: SHARPEN"
  - White 22pt: "Keep engagement and the free model. Drop global and multi-sport for 12 months. Build the one match-day job no app owns: proving you know cricket."

*Source:* "Source: Team IdeaForge option scoring (model T5; rationale per cell in research document §9) | PIVOT '26 case (FanCode 160M+ users, TN2) | Inc42 (FanCode 300+ leagues) | exchange4media (27 Aug 2026 pivot) | Premier League (FPL)"

**Slide 6: Q3 Core Loop** (counter 5 / 8; chip "Q3 THE MATCH-DAY LOOP", w 440)

*Headline:* "A five-step match-day loop replaces the prize with proof: pick, call, prove, rank, repeat, powered by status, friends and suspense instead of money"

**Left: loop diagram**, centre (532, 676), rx 330, ry 258, cards 300 × 126. Hub: "MATCH DAY" /
"no rupee at stake". Nodes:

| # | Title | Text |
|---|---|---|
| 1 | PICK | "At the toss: XI in 60 s, 3 Scout cards" |
| 2 | CALL | "Live: one-tap call each over" |
| 3 | PROVE | "Points and calls move your rating" |
| 4 | RANK | "League table, tier, shareable card" |
| 5 | REPEAT | "Coach review, next fixture, streak" |

Doc §11 carries the full detail: the Live Calls feed the same rating, and streaks have a freeze.

**Right top: three phone mockups**, with the caption "Illustrative screens: the loop, not a
finished design":

| Phone | Title | Lines |
|---|---|---|
| 1 | "AI SCOUT" | "Pitch: spin helps" / "Pace v top 3" / "Form: last 5" / "You pick the XI" |
| 2 | "LIVE CALLS" | "Over 14: a boundary?" / chips "YES" and "NO" / "Your calls today: 7 of 9" / "League: 2nd of 12" |
| 3 | "DREAM RATING" | "1,482" (Poppins ExtraBold 40, primary) / "+36 this match" / "Tier: State" / "Share to WhatsApp" |

**Right bottom:**
- **Table "WHAT REPLACES THE MONEY"**, columns Money used to give | Now comes from | Why it holds:
  - Status | Dream Rating and tiers | Competence
  - A reason to return | Friends' leagues | Relatedness
  - Suspense | Live Calls each over | Variable reward
  - A payout moment | Rating card to share | Recognition
- **Table "AI INSIDE THE LOOP: WHAT CHANGES FOR THE FAN"**, columns Job | Fan sees:
  - Scout | 3 evidence cards at lineup lock
  - Coach | Why your rating moved
  - Digest | Only your teams, Hindi or English
- **Legal-test chip strip:** "NO STAKE" · "NO PRIZE" · "MONEY NEVER BUYS AN OUTCOME".

*Source:* "Source: Team IdeaForge product design (research document §11) | Nir Eyal, Hooked (2014) | Ryan and Deci, Self-Determination Theory (2000) | Promotion and Regulation of Online Gaming Act 2025, s.2 definitions | Screens are illustrative"

**Slide 7: Q3 Roadmap and Cuts** (counter 6 / 8; chip "Q3 THE NEXT 12 MONTHS", w 440)

*Headline:* "Ship the loop before the Australia Tests, scale it on IPL 2027, and say no to seven things that would drag Dream11 back into fights it cannot win"

**Gantt** (x64, y318), months Oct to Sep (label "Oct" … "Sep"; the row label column is headed "OCT 2026 TO SEP 2027"). Rows (bar start and end are month indexes, 0 = Oct):

| Row | Bars / marks |
|---|---|
| "Calendar: India" and "Calendar: leagues" (two lanes) | Accent bars with ink text, from RB12 to RB15, as coded in `CAL`:<br>India lane: WI 0 to 0.55 (27 Sep to 17 Oct) · SL 2.39 to 2.9 (13 to 27 Dec) · Zimbabwe 3.06 to 3.32 (3 to 9 Jan, no label) · Australia Tests 3.65 to 5.1 (21 Jan to 3 Mar) · India away (TBC) 8.3 to 10.9<br>Leagues lane: WPL 3.42 to 4.25 (14 Jan to 7 Feb) · IPL 2027 5.29 to 7.48 (10 Mar to 15 May) · Hundred, CPL 9.7 to 11.3 |
| "Phase 0 · Foundations" | primary 0 to 2.6: "Rating v1 · Leagues v2 · nudges" |
| "Phase 1 · Depth" | primary 2.4 to 5.4: "Live Calls · Scout · Session XI · WPL" |
| "Phase 2 · Scale on IPL" | primaryDeep 5.3 to 8.0: "Tiers · creator leagues · Pro" |
| "Phase 3 · Prove" | primaryDeep 8.0 to 12: "Off-season leagues · sport gate" |
| "FanCode seam" | alert 0 to 2.8 "Sunset streaming" · alert 3.0 to 5.8 "Play-along pilot" · alert 6.0 to 12 "Joint ad package" |
| "Gates" | diamond marks at 3.5 (90-day signal, 15 Jan), 5.9 (6-month review, Mar), 11.8 (12-month review, Sep) |
| "Revenue" | good 0 to 3 "Ads" · good 3 to 12 "Title partner + ads" · good 5.5 to 12 "Pro" (in its own lane, so the Revenue row uses two lanes: split it into two rows "Revenue: ads, sponsors" and "Revenue: Pro, gifting") |

Band B (y≈800 to 1030):
- **Panel "WE WILL NOT BUILD (7)"**, numbered badges in two columns:
  1. "Own live streaming: FanCode's job"
  2. "Global launches: FY28 gate, not now"
  3. "In-house non-cricket fantasy"
  4. "Any prize, voucher or redeemable coin"
  5. "Boosts or coins that change scoring"
  6. "A general AI chatbot"
  7. "A social feed or short video"
- **Panel "RICE SCORE: WHY THE LOOP SHIPS FIRST"**: horizontal bars for the top 3 build
  features plus the 2 lowest cut features, each with a GO or CUT chip.

*Source:* per §12 slide 7 code (authoritative).

**Slide 8: Q4 Revenue** (counter 7 / 8; chip "Q4 MAKE IT PAY", w 340)

*Headline:* "Five legal revenue lines earn ₹{rev12} Cr in the next 12 months in the base case, against a leaner ₹{cost12} Cr cost base, without a single prize"

Band A (y318 to 700):
- **Moneyshot panel "12-MONTH REVENUE BUILD, BASE (₹ CR)"** (x64, w1100):
  - A waterfall: Ads {ads12} · Sponsorship {spon12} · Pro {pro12} · Gifting {gift12} · FanCode {fc12} · Total {rev12}.
  - At the right of the panel, the **giant numeral "₹{rev12} Cr"** (Poppins ExtraBold 96, primary; the largest text in the deck), with the caption: "legal revenue in 12 months, base. Bear ₹{rev12_bear} Cr, bull ₹{rev12_bull} Cr. {share_fy25}% of FY25 revenue, with no court risk attached."
- **Panel "THE LEGALITY TEST"** (x1188, w668): rows are the 5 streams plus 3 rejected ideas; columns are "No stake?", "No prize?", "Money never buys outcome?". Each cell is a chip, PASS (good) or FAIL (primary):

  | Row | No stake? | No prize? | Money never buys outcome? |
  |---|---|---|---|
  | Match-moment ads | PASS | PASS | PASS |
  | Sponsorship | PASS | PASS | PASS |
  | Dream11 Pro | PASS | PASS | PASS |
  | Creator gifting | PASS | PASS | PASS |
  | FanCode referral | PASS | PASS | PASS |
  | Paid-entry leagues | FAIL | FAIL | FAIL |
  | Sponsor-funded prizes | PASS | FAIL | PASS |
  | Buyable boosts | PASS | PASS | FAIL |

Band B (y720 to 1030):
- **Panel "BEAR, BASE, BULL (₹ CR)"** (x64, w560): three stacked horizontal bars by stream, each with its total at the end.
- **Panel "MONTH BY MONTH, BASE (₹ CR)"** (x648, w560):
  - Vertical bars for 12 months, labelled with first letters "O N D J F M A M J J A S".
  - Annotate the IPL window: "IPL window, Mar to May: ₹{ipl2} Cr".
- **Panel "WHO PAYS FOR IT"** (x1232, w624):
  - hBars "₹ per fan per year" (the same three segments as slide 4).
  - A formula box: "Ads = weekly players × sessions × impressions × fill × eCPM".

*Source:* per §12 slide 8 code (authoritative).

**Slide 9: Q4 Metrics and Stress Test** (counter 8 / 8; chip "Q4 MEASURE + STRESS TEST", w 480; ribbon `[4,5]`)

*Headline:* "Weekly team-builders must double to {nsm12}M by September 2027, a 90-day signal can prove us wrong by January, and a court win would not justify going back"

**Left** (x64 to 1130):
- **KPI tree** (y318 to 548):
  - Root "NORTH STAR: WEEKLY TEAM-BUILDERS", with the definition "fans who lock at least one team in a week".
  - Four children: M1 "Match-to-match return", M2 "League share", M3 "Live Calls reach", M4 "Revenue per weekly player".
  - Formula box: "WTB = new fans × activation + returning fans × match-to-match return".
- **Targets table** (y576 to 806), columns Metric | Baseline | 6 mo (1 Mar 2027, pre-IPL) | 12 mo (Sep 2027):
  - NSM | {nsm0}M | {nsm6}M | {nsm12}M
  - M1 | 35% (A31) | 45% | 50%
  - M2 | 20% (A32) | 35% | 45%
  - M3 | 0% | 25% | 35%
  - M4 | n/a | ₹{m4_6} | ₹{m4_12}
  - A note: "Targets also hold as multiples: 1.5× and 2.0× of the week-1 baseline".
- **Line chart "WTB PATH (M)"** (x64, w520, y832 to 1030): bear, base and bull over 12 months, with a label at the IPL peak.
- **Kill-signal card** (x608, w522, layered alert fill with white text):
  - Title: "90-DAY SIGNAL THAT WE ARE WRONG"
  - Text: "By 15 Jan 2027, among fans with 3+ rated matches: match-to-match return below 40% AND league members returning under 1.3× solo players. If it fires, stop rating and league spend; shift to creator media or fold play into FanCode."

**Right** (x1154 to 1856), under the chip "STRESS TEST: THE BAN FALLS, 28% GST STAYS":
- **vBars "DREAM11 KEEPS PER ₹100 OF CONTESTS"**, three bars:
  - "Before Oct 2023" ₹{net_pre}
  - "28% on deposits (case)" ₹{net28}
  - "40% (the law since Sep 2025)" ₹{net40}
  - Annotations: "−{drop28}%" and "−{drop40}%".
  - A caption: "Or players absorb it: prize pools fall to ~{pp28}% while offshore books pay more".
- **Decision tree:** "Court strikes the ban?" → "Tax on fees, not deposits?" → "Separate ring-fenced entity?"
  - All yes → "Consider paid, outside Dream11".
  - Any no → "Stay free".
  - The case's scenario path is highlighted: yes → no → "STAY FREE".
- **Verdict chip:** "THE STRATEGY HOLDS: DREAM11 DOES NOT GO BACK".

*Source:* "Source: Team IdeaForge model T15, T16 (rake 15%, deposit ratio 0.5, A28 to A30) | PIVOT '26 case ST | 56th GST Council (40% from 22 Sep 2025) | Supreme Court, DGGI v Gameskraft, 2026 INSC 595 (27 May 2026)"

**Slide 10: Appendix** (counter A1; chip "APPENDIX: METHOD, ASSUMPTIONS, SOURCES, AI USE", w 700; ribbon `RIB_APP`, active `[0,1,2,3]`)

*Headline:* "Every number traces to a public source, a scripted review pull of {n_all} reviews or a labelled assumption, and no interviews or AI-written fan voices are claimed"

- **Column 1, "METHOD"** (x64, w560):
  - Review-mining box: stores, apps, dates, and a table of n by period (P0 to P3, Dream11), theme precision "{prec_summary}".
  - Desk-research line: "{n_sources} sources: case, court records, GST Council, company releases, business press".
  - An alertTint box "NOT DONE IN ROUND 1": "No interviews or surveys were run. Next: 12 interviews (Cricket Brains 4, League Captains 4, Loungers 2, lapsed payers 2) and a two-week in-app test of the 90-day signal."
- **Column 2, "KEY ASSUMPTIONS"** (x648, w600): a table ID | Assumption | Base, rows:
  - A01 | Played IPL 2025 season | 100M
  - A02 | Pre-ban segment mix S1 to S5 | 35/5/20/15/25%
  - A03 | Still active Jul 2026, S3 / S4 | 40% / 35%
  - A04 | MAU fall after prizes went | 30%
  - A05 | NSM baseline, Oct 2026 | {nsm0}M
  - A06 | NSM multiple, 6 / 12 months | 1.5× / 2.0×
  - A09 | Core sessions a week | 3
  - A14 | eCPM regular / IPL | ₹{ecpm_reg} / ₹{ecpm_ipl}
  - A16 | Title partner, a year | ₹{title_base} Cr
  - A27 | Cost base, 12 months | ₹{cost12} Cr
  - A28 | Paid-era platform fee | 15%
  - A29 | Deposits per ₹1 of entries | 0.5
- **Column 2, below the table: "AI USE"** box (layered, surfaceAlt), text locked: "We used Claude (Anthropic) to help with desk research, drafting, the Python model, the review-mining scripts and the Figma build scripts. The team checked every figure against its cited source. No AI output is presented as primary research, and no interview, survey or fan quote was generated."
- **Column 3, "SOURCES"** (x1272, w584): the numbered bibliography, 14 to 16pt, in `BIBLIO` nodes, from the final §5.2 list (short form: "Publisher (Mon YYYY) Title"). Include every source named on slides 1 to 9.

*Source:* "Source: Full bibliography with URLs, model tables and review-mining tables in the Team IdeaForge research document (appendices A to C)"

**Slide 11: Thank You**
- A red rail on the left edge.
- "Thank you" (Poppins ExtraBold 120, centred).
- Subline: "Dream11: Life After the Ban · PIVOT '26 · Team IdeaForge" (36pt, primary, centred).
- The team table, centred.
- A line: "Sharpen the pivot. FanCode watches, Dream11 plays." (26pt, centred, primaryDeep).

