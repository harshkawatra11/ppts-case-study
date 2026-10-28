# Arthik Khayal 2026 (ecotech, USME DTU, with YES Securities): research deliverable and native Figma deck

> **Who executes this.** A main agent (Sonnet class is enough) plus Sonnet sub-agents dispatched with the Agent tool
> (`subagent_type: "general-purpose"`, `model: "sonnet"`), at most three at once. The case is already solved here: the
> recommendation, the activation model and every locked number, every research section title, all eight slide scripts,
> every prompt and every check. **The job is execution, not design.** When a step has a "Done when" test, do not move on
> until it passes.
>
> **What this plan produces**, all under `arthikkhayal-case/` (repo root `C:\Users\harsh\Desktop\HARSH\PPTS-CASE-STUDY\nsut-innovators-court`):
> (1) `model/activation_model.py` with `model_outputs.json`, `model_tables.md` (T1 to T19) and `deck/values.json`;
> (2) nine verified raw research files and a source register; (3) `research/arthik-khayal-research.md` plus HTML and PDF,
> at least 65,000 words and 120 tables, humanised; (4) an 8-slide native Figma Slides deck in a new file: cover with a
> mind map and logo slots, five core slides (Summary, Diagnosis, Strategy, Impact, Execution), one appendix, a thank-you
> slide; plus a PDF export.
>
> **Verified at planning time (21 Oct 2026), in memory only:** the model prints `CHECKS 12/12 HASH fc66d11096` and
> `FINDINGS 2.28 1.02 3.94 19,053 17.0% ₹16.5 lakh ₹87 1,649`; `deck/gen.py pre` builds the preamble from the existing
> libraries; all eight slide scripts pass the offline Figma mock with `warnings: []` and `ISSUES 0` (nodes 138, 390, 335,
> 409, 309, 289, 249, 40), every build part is under 49,900 characters, and `gen.py copy` prints `copy issues 0`. Offline
> previews of all eight slides were inspected and four slides were redesigned on the user's feedback (Summary, Diagnosis,
> Strategy, Execution). If a first run does not reproduce these, something was retyped or the environment changed: stop
> and use section 13.

## 0. How to read this plan

| Part | Sections | What it is |
|---|---|---|
| I | 1 to 2 | Context, the user's locked decisions, ground rules (content, language, humanizer, tags, text sizes) |
| II | 3 to 5 | The solved case: how the case-competition-deck skill was applied, the argument, the levers, locked numbers, assumptions |
| III | 6 to 7 | Nine research lanes (B to J) with questions and seeds; the research document specification |
| IV | 8 to 14 | Skill touchpoints, environment, step table, prompts, calibration, recovery, final checks, memory |
| V | 15 | The Figma deck: new file, build from the embedded scripts, validation, logos, export |
| VI | Embedded files | Model, deck generator and helpers, eight slide scripts, validators, research assembler, case transcription, extractor |

### Roles

| Role | Model | Does | Never does |
|---|---|---|---|
| Main agent | Sonnet or better | Bootstrap, runs every script, every Figma call (one at a time), source register, dispatch, assembly, final report | Change the recommendation, a locked number, a section title or a slide's geometry outside the fix rules |
| Verifiers V-B to V-J | Sonnet, at most three at once | Open the seed sources in section 6, confirm or correct each fact, add rows | Invent a figure, quote or URL; write prose; touch the model |
| Writers W-A to W-F | Sonnet, at most three at once | Write their sections into `research/parts/`, then run the humanizer pass on their own file | Browse the web, change a number, invent an interview, a test result or ONL data |
| Critic CR | Sonnet | Scores the research and later the deck with the skill's critique rubric and the humanizer tells list | Rewrite sections or slides |

### The Sonnet execution contract

DO
1. Follow section 10 step by step. Log each step in `arthikkhayal-case/build-log.md` with `STATUS: PASS` or `FAIL` and what was fixed.
2. Create files only by extraction (step B1). Never retype a code block from this plan.
3. Take every modelled number from `model/model_outputs.json`, `model/model_tables.md` or `deck/values.json`. Take every external fact from a VERIFIED or CORRECTED row in `research/raw/`.
4. Invoke the `case-competition-deck` skill with the Skill tool at the touchpoints in section 8, and the `humanizer` skill at the touchpoints in section 8.2. Log each.
5. Load the Figma guidance before the first `use_figma` call (section 15.2) and pass `skillNames` on every call.

DO NOT
1. Do not change the recommendation, a locked number, an H2 title or an assumption value except through the update protocol in section 5.3.
2. Do not invent interviews, customer quotes, survey results, test results, LOIs, ONL internal data or parent-bank data. The customer validation plan is a plan and says "not yet run".
3. Do not write an em dash, an en dash, a hook, a rhetorical question, an exclamation mark or a banned word (section 2.2).
4. Do not coin a name for the strategy, a lever, a feature or a programme (user rule). Describe each plainly: "the salary-day card", "the investments tile", "the RM review".
5. Do not attribute any YES Securities or YES Bank fact to Trade Private Limited or ONL Trade. Analysis uses the case's names; real brands appear only as context and in logo slots.
6. Do not add an AI-use statement. Do not commit or push (and never add a Co-Authored-By trailer: user memory rule). Do not modify anything outside `arthikkhayal-case/` (reading other folders is fine).

---

# PART I. CONTEXT AND RULES

## 1. Context

### 1.1 The brief (full transcription with IDs in `case/01-case.md`)

Arthik Khayal 2026 is an economics case competition by ecotech, USME DTU, with YES Securities (sponsor marks: YES
Securities, Anthill Ventures, Kae Capital). The case company is Trade Private Limited, a bank-led broker, and its
digital platform ONL Trade, built for first-time, digital-first investors under 30 [C-CO1, C-CO2]. Most account holders
are customers of the parent bank [C-CO4]. The task [C-Q1]: turn newly opened and dormant accounts into highly engaged,
revenue-active, daily users, in a way that works when markets are volatile and stays within the rules.

| Fact | Value | ID |
|---|---|---|
| Eligible accounts | 7,33,855 (Sep 2025), 8,09,746 (Sep 2026) | C-E1 |
| Active, traded in 12 months | 1,07,889 (14.70%), 1,19,339 (14.74%) | C-E1 |
| Highly active, traded in 3 months | 66,943 (9.1%), 82,086 (10.1%) | C-E1 |
| Industry activation | 20% to 40% | C-PB2 |
| Salary Account cohort | 6,27,853 accounts, 77.5% of base, 14% active, up 24% in a year | C-E2a, C-E2b |
| What ONL tried | WhatsApp, email, RCS and social messages on market info, research calls, first-trade offers; literacy videos, newsletters; "stay invested" theme. Active users did not rise | C-PB3 to C-PB5 |
| Constraints | 3 months for +200 to +300 bps; SEBI (no advice, no implied returns, no inducement); lean budget, owned assets; no engine rebuild; consent; no dark patterns; responsible growth | C-K1 to C-K7 |

### 1.2 Decisions the user locked (do not relax any)

| Item | Decision |
|---|---|
| Slides | 8: cover, five core (Summary, Diagnosis, Strategy, Impact, Execution), one appendix, thank-you |
| Team | TEAM IDEAFORGE: Harsh Kawatra (Delhi Technological University, Team Leader); Gursimran Kaur (Guru Gobind Singh Indraprastha University, Member). Email line: harshkawatra11@gmail.com |
| Palette | Sponsor blue and red (embedded `deck/_palette.js`): primary #1D4FA3, primaryDeep #0B2A63, accent #F5B700, alert #D7263D, good #1E8A4C, ink #0A0A0A |
| Names | Case names in the analysis (Trade Private Limited, ONL Trade, the parent bank). Real brands only in logo slots and as sponsor or market context, with "no partnership or endorsement is implied" |
| Text sizes | The 22 pt floor in root `CLAUDE.md` is retired (user decision, carried from the latest decks): headlines 40 pt (34 minimum), panel titles 22 pt, numerals 26 to 112 pt, secondary text 18 pt named `SEC`; only `SOURCE` (14 pt), `FINEPRINT`/`BIBLIO` (16 pt) and logo or image captions are smaller |
| Cover | A real mind map with brand logo slots (not plain text, unlike the Satoshi Gate cover), no KPI-card row, team table; same team table on the thank-you slide |
| Design approval | The user approved the Cover, Impact and Appendix as built; Summary, Diagnosis, Strategy and Execution were redesigned at planning time to the user's direction (Summary: charts on top, an Asian Paints-style "brief asks / obvious move / what we do / proof / result" matrix below; Strategy and Execution: chart-led, minimal prose). Do not change geometry outside section 15.6 |
| Language | Humanised analytical storytelling: the `humanizer` skill is applied to every piece of prose (research and slides). No em dashes, no hooks, no rhetorical questions, no AI phrasing |
| Research depth | No limit. Target at least 65,000 words and 120 tables; references for depth: `asian-paints-alchemy/`, `dreamforge-case/`, `iim-lucknow-pivot/`, `maudrik-policy/`, `mandamasterminds/`. `lsr-caseforchange/` is a rejected entry: never read or copy it |
| Inspo decks (read only) | Prime `hOJVMGv9nIhDmayTT7DmOt`; `e5VEexsLMhDampx7gvhFmM`; `vAIyXmljHlFDuwQo6RsoIN`; `APbOstO4SSU7iAjYIgEeSd`; `JLOOyohkQPUrwXEsxDKz4m`; Dream11 `YoiazGGOribfg69EjEDIlP`; SwiftKart (winning) `7N3v6bAfmXYRrte0zChFDg`; Eurogrip `Yv5gClOIsJco4wR3fAhyxB`; Asian Paints `KJQkGsLgbeLU9vNy24p78y` |

### 1.3 Folder layout after the build

```
arthikkhayal-case/
  6ad67dcf8fef3_case_arthik_khayal_26.pdf (exists, never modified)   PLAN.md  extract.py  build-log.md  DECISIONS.md
  case/01-case.md
  model/activation_model.py  model_outputs.json  model_tables.md
  research/raw/R-B..R-J.md  sources.md  rid_to_sid.json   parts/part-A..F.md  appendix-C.md  appendix-D.md
           build_sources.py  assemble.py  build_pdf.py  arthik-khayal-research.md  .html  .pdf  critique.md
  deck/gen.py _palette.js _extras.js _v1.js _sweeps.js setup.js logo_rects.js make_pdf.py checks.py slides/s01..s08.js values.json
       (generated) preamble.js mock_figma.js values.js _x2.js _x3.js metrics.json derived/ build/ shots/ logos/
       slide-ids.json figma.md derivation.md overrides.json slide-copy.md critique.md TeamIdeaForge_ArthikKhayal.pdf
```

## 2. Ground rules

### 2.1 Content integrity

1. The activation model is a model. Every sentence reporting a model result says "in our model". Lever response rates are
   assumptions (T1) checked against benchmarks, never measurements.
2. No interview, survey, A/B result or customer quote exists. Section 29 of the research and the deck's "Not yet run" note
   are a validation plan with decision rules.
3. YES Securities and YES Bank facts (for example the NSE onboarding ban of 26 May 2026, lifted 1 Jul 2026) are sponsor
   context in research section 5 only, in a box headed "Sponsor context, not case data". They never appear on a slide.
4. Terminology: the case's "dormant" means no trade in 24 months [C-D4]; the case's "inactive" means deactivated for fraud
   or on a regulator's notice [C-D3]. The NSE circular of 25 Oct 2024 calls the 24-month case "inactive". Translate every time.
5. Rate changes (pp) and extra-active counts both come from the model tables. Never derive one from the other or back-solve
   a denominator: the business-as-usual rate differs by scenario (A02).
6. Indian units: ₹, lakh, crore, Indian digit grouping (8,09,746). Statistics keep the precision the source supports.
7. Customer copy (message drafts) states facts only, names no fund as better than another, implies no return, rewards no
   trade, carries no urgency or fear, and ends with the exchange's standard risk line as Lane D verifies it.

### 2.2 Language standard

- Zero em dashes and en dashes. Ranges use "to". The minus sign is U+2212.
- No hooks, no rhetorical questions (question marks only in research section 32), no "imagine", no exclamation marks.
- Banned words: the lists `BANW` in `deck/gen.py` and `BAN` in `research/assemble.py`, plus the humanizer's §12 list
  (additionally, align with, bolstered, crucial, deep dive, delve, enduring, enhance, garner, highlight as a verb,
  interplay, intricate, key as an adjective, landscape, meticulous, pivotal, quietly, robust, showcase, tapestry,
  testament, underscore, valuable, vibrant). "Elevate" is allowed only as the cohort's capitalised name.
- First person plural, declarative, plain words, a number in most sentences, reasoning shown, as a consultant's memo to
  the head of a bank-led broker.

### 2.3 The humanizer standard (user instruction, 21 Oct 2026)

Every writer and every slide-copy change runs the humanizer skill (`C:\Users\harsh\.claude\skills\humanizer\SKILL.md`,
invoke with the Skill tool `skill: "humanizer"`) in file mode on its own text before finishing: prose only; tables,
numbers, tags, headings and copy-block facts unchanged. Strongest tells first: §1 not-X-but-Y (allowed only in the
research §2 do/do-not table and the §11 "Conclusively" paragraph, where both halves carry numbers), §2 one-line closers,
§3 sayings, §4 staged run-ups, §5 arguing with no one, §6 forced triads, §8 dashes, §12 AI words, §13 inflated
significance, §15 -ing riders, §18 "serves as/boasts", §19 bold labels (the `**Answer.**` lead is the only bold kept),
§25 writing about the document. Then reread for the five tells that survive rewrites: contrasts, closers, triads,
dashes, bold labels. The humanizer never adds a fact, number or source.

### 2.4 Tags (every number in the research carries one)

| Tag | Meaning | Resolves to |
|---|---|---|
| `[C-E2a]`, `[C-K2]`, `[C-PB3]` | Case line by ID | `case/01-case.md` |
| `[A21]` | Model assumption | `model/model_tables.md` T1 and research section 30 |
| `[M]` | Model output | `model/model_outputs.json` |
| `[T10]` | Model table | `model/model_tables.md`, research Appendix B |
| `[S12]` | External source | `research/raw/sources.md`, research Appendix A |
| `[F07]` | Raw research row (lanes B to J only) | `research/raw/R-F.md`, resolved to an S-ID by `rid_to_sid.json` |

Lanes are lettered B to J so that `[A##]` always means a model assumption.

### 2.5 Files to read before starting (main agent)

1. This plan, fully. 2. Root `CLAUDE.md` sections 0, 5 and 7 (the 22 pt rule there is superseded by 1.2).
3. `.claude/skills/case-competition-deck/SKILL.md` through the Skill tool (touchpoint A). 4. The humanizer skill.
5. `asian-paints-alchemy/PLAN.md` sections 0 to 2 (the predecessor plan this one follows) and
   `dreamforge-case/research/swiftkart-research.md` lines 1 to 150 (register and tag discipline of the winning entry).

---

# PART II. THE SOLVED CASE

## 3. The argument (how the case-competition-deck skill was applied)

### 3.1 Case type and calibration

Marketing and strategy hybrid with an operations funnel (skill guides `case_types/marketing.md`, `strategy.md`,
`operations.md`). The skill is calibrated on three M&A decks; its structural patterns (contrarian answer, action titles,
foreshadowing, symmetric treatment, three scenarios, one moneyshot, double synthesis, defensive depth) are applied with
confidence and its frameworks by reasoned extrapolation. Say this once in research section 0.

### 3.2 The eight-section logic compressed into five core slides

| Skill section | Where it lives |
|---|---|
| I Executive summary | Slide 2 (Summary): answer strip; ONL against the market; Exhibit 1 as a funnel; target band with bear, base, bull; the brief-asks / obvious-move / what-we-do / proof / result matrix |
| II Context and III Actors | Slide 3 (Diagnosis): cohort heat map, idle pool, mix shift, funnel, quarter arithmetic, market tiles, five whys, five biases. The seed: "No ONL message reaches them in the bank app" (why 5) and "customers stall before they ever log in" |
| IV Quantitative analysis | Slide 5 (Impact): the moneyshot card (same ₹16.5 lakh: 19,053 against 1,649, 11.6x), waterfall 14.74% to 17.02%, weekly ramp against the target band, scenarios, tornado |
| V Feasibility | Slide 4 top strip "CONCLUSIVELY" (2.60 against 4.40) and the eight-option heat matrix; slide 6 risks and guardrails |
| VI Recommended alternative | Slide 4 (Strategy): segment by moment heat map, five checks, the bank app on two days (two phone mockups), reach against conversion bubbles, funnel fixes |
| Implementation | Slide 6 (Execution): 13-week Gantt with four gates, go-only-if table, monthly extra actives by moment, holdout detectability, weekly KPIs, risk matrix, guardrail stop lines |
| VII Conclusion | Slide 8 "THEREFORE" card (pure recap) |
| Appendix | Slide 7: A1 model, A2 assumptions, A3 rules, A4 short forms and sources |

### 3.3 The contrarian recommendation (skill section A; rhetoric section 1)

The prompt implies "communicate better and push people to trade in a falling market". ONL already did that for a year
and the active rate moved from 14.70% to 14.74% [C-E1]. The idle base is mostly salary customers who never chose an
investing account: 5,39,954 of the 6,89,375 idle accounts in the cohort table, 78% [T2]. Our answer: show customers the
ONL account they already hold, inside the bank, at four moments the bank already owns, with a small monthly ETF
instalment the customer chooses, and never promote the market, offers or F&O.

| Reason | Selling the market harder | Meeting the account inside the bank |
|---|---|---|
| Quantitative | +0.04 pp in 12 months [C-E1]; the same ₹16.5 lakh in paid media buys 1,649 activations [T14] | +2.28 pp in our base case, 19,053 extra actives at ₹87 cash each [T11, T13] |
| Strategic fit | Messages reach people who do not think of the account as theirs | 78% of idle accounts sit with salary customers who open the bank app every salary day [T2] |
| Feasibility and rules | Offers and contests read as trade inducement under NSE circulars; 88.5% of under-30 F&O traders lost money in FY26 (SEBI) | No advice, no return claims, no offers, consent first; ships on existing order, payment and KYC services |

### 3.4 The four moments and three support levers (copy rules apply to every draft)

| Lever | Who | Mechanism | Timing | Base extra actives |
|---|---|---|---|---|
| Salary day | Salary Account idle (5,39,954) | A card in the parent bank's app on salary credit: "Your ONL account is open; start a monthly ETF instalment." Customer picks from a neutral list built by rule (gold, liquid, broad index ETF categories; objective inclusion criteria; fixed alphabetical order; no default; no returns shown). Single sign-on into ONL; UPI Autopay mandate from the same bank; amount and date set by the customer; pause any time | Salary credits in weeks 5, 9, 13 | 5,661 |
| Holdings check (rediscovery) | All idle | Investments tile in the bank app ("ONL Trade demat, linked to this bank, holdings in one tap"), statement line, servicing email, WhatsApp utility template, SMS. Dormant accounts get video IPV in app or in-person verification at a branch | From week 2 | 3,081 |
| RM review | Prestige, Elite, Elevate, Preferred idle | A facts-only script in the RM's existing portfolio review: the account exists, how to log in, what an instalment is; no product recommendation; no per-trade incentive for the RM | Weeks 2 to 10 | 4,083 |
| Dhanteras | All idle | A factual notice on 6 to 8 Nov 2026 that the account can hold gold ETFs (SEBI-regulated, unlike digital gold, which SEBI cautioned about on 8 Nov 2025) and that the exchanges hold a Muhurat session on 8 Nov 2026, timings as the exchanges announce; no price talk, no "today only" | Week 1 | 2,311 |
| Workplace sessions | Salary customers at employers that bank with the parent bank | 40 education sessions by SEBI SMARTs trainers or exchange investor-awareness programmes; no product pitch | Weeks 3 to 12 | 413 |
| Warm-cohort defence | 8,887 to 14,072 accounts whose last trade was 9 to 12 months ago | Holdings statement, nominee and contact update, instalment option; never "trade to stay active" (the NSE circular bars pushing clients to trade only to stay active) | All 13 weeks | 1,607 |
| New-account guided first order | 18,972 accounts opened in the window | Day 0 to 30 walkthrough, order preview, full cost display, no default product | All 13 weeks | 1,897 |

Draft copy (writers reproduce these in research sections 12 to 17 inside `Message copy (draft, subject to compliance review):` blocks):

> Salary day card: "Your ONL Trade account is open and linked to this bank account. You can set a monthly amount to buy units of an exchange-traded fund after each salary credit. You choose the fund, the amount and the date, and you can pause at any time." + standard risk line.
> Investments tile: "ONL Trade demat and trading account, opened with your [bank] account. See your holdings, update your nominee and contact details, or log in." + standard risk line.
> Dhanteras notice: "Your ONL Trade account can hold gold through gold exchange-traded funds, which SEBI regulates and which sit in your demat account. The exchanges will hold a Muhurat trading session on Sunday, 8 November 2026; timings as announced by the exchanges." + standard risk line.

### 3.5 Twelve insights the research must carry

1. Activation stood at 14.70% then 14.74% across a year of messaging [C-E1]. 2. 78% of idle accounts are salary customers [T2]. 3. Salary accounts grew 24% while credit card accounts fell 34% [T4]. 4. Premium cohorts lost 3 to 4 pp of T12 activation; Elevate's T1 fell from 24% to 13% [T4]. 5. Only 40% of 12-month actives traded last month, down from 47% [T6]. 6. 8,887 to 14,072 accounts roll off every quarter [T7], so the target needs 16,701 to 25,051 extra actives [T8]. 7. NSE active clients fell 7% in FY26; India's active ratio was about 19.2% in Sep 2026 (4.61 crore of 24.06 crore demat accounts) [Lane C]. 8. SEBI FY26: 87.7% of individual F&O traders lost money; 88.5% of those under 30 [Lane D]. 9. The binding funnel stages are login and funding [C-F2, C-F3]. 10. Bank-led peers run 3-in-1 models: the bank account funds the trade without a transfer [Lane B]. 11. The same ₹16.5 lakh buys 19,053 extra actives through the bank and 1,649 through paid media [T14]. 12. Every lever's expected lift is 4x to 23x the smallest lift a 10% holdout can detect [T19].

### 3.6 Frameworks used and where (`references/frameworks.md`)

| Framework | Section | Layering pattern |
|---|---|---|
| Issue tree, MECE, 5 Whys, Pyramid Principle | 10, 2 | Issue Tree + MECE + Pyramid |
| AARRR, customer journey, service blueprint, JTBD | 8, 9, 18 | Customer Journey + Service Blueprint + JTBD |
| PESTLE (legal) and Porter-style strategic group map | 6, 7 | PESTLE + Strategic Group Mapping |
| VRIO on the parent bank's assets | 5 | VRIO |
| Weighted option filter, sensitivity to weights | 11 | MECE option filter |
| KPI tree, OKRs, balanced scorecard | 21, 27 | KPI tree |
| Scenario planning, tornado, risk heat map, pre-mortem | 22, 23, 28 | Scenario + risk heat map |
| Kano (feature classes), RACI, lean startup (validation plan) | 18, 26, 29 | |

## 4. Locked numbers (reference output of the model, hash `fc66d11096`)

| Item | Value | Table |
|---|---|---|
| Activation now | 14.74% (1,19,339 of 8,09,746) | C-E1 |
| Idle accounts (cohort table) | 6,89,375; salary 5,39,954 (78%) | T2 |
| Roll-off next quarter | 8,887 to 14,072 (midpoint 11,479) | T7 |
| Accounts at 31 Jan 2027 | 8,35,042; business as usual 1,23,067 active | T8 |
| Needed for +200 / +300 bps | 16,701 / 25,051 | T8 |
| Extra actives, bear / base / bull | 9,783 / 19,053 / 32,037 | T11 |
| Rate on 31 Jan 2027 | 15.76% / 17.02% / 18.68% (+1.02 / +2.28 / +3.94 pp) | T11 |
| Highly active (T3) | 10.1% now; 11.3% / 12.4% / 14.0% | T11 |
| Levers, base | salary day 5,661; RM 4,083; holdings 3,081; Dhanteras 2,311; workplace 413; warm 1,607; new 1,897 | T10 |
| Cash cost | ₹16,49,357 (₹16.5 lakh); ₹87 per extra active (bear ₹169, bull ₹51); internal sprint ₹37.8 lakh; all-in ₹285 | T13 |
| Paid media, same cash | 1,649 at ₹1,000 (bear ₹700: 2,356; bull ₹1,400: 1,178); ours is 11.6x | T14 |
| Revenue per new active a year | ₹62 (brokerage ₹2.40, depository ₹15, annual charge ₹45); cash payback 17 months | T15 |
| Option screen | ours 4.40; best alternative 2.60; ours leads under all four weight sets | T17, T18 |
| Holdout | lift is 11x, 5x, 23x, 4x the minimum detectable effect for salary day, holdings, RM, Dhanteras | T19 |
| Week 6 bear line | 15.2% | T12 |

## 5. Assumptions and the update protocol

### 5.1 Register
T1 in `model/model_tables.md` lists A01 to A67 with base, bear, bull, unit and basis (lane named). Research section 30 explains each in prose.

### 5.2 Which assumptions verifiers test
A10, A11 (Lane D); A20 to A25, A28 to A30, A35, A36, A39, A50 to A53, A61 (Lanes E, F, G); A26, A27, A31 to A33 (Lanes B, E); A62 to A67 (Lanes C, D).

### 5.3 Update protocol (the only way a locked number may change)
A verifier's CORRECTED row changes an assumption only if (a) it is a same-unit primary or official figure and (b) it lies
outside the bear-to-bull range, or replaces a team estimate with a sourced base value. Then: edit the value in
`model/activation_model.py`, rerun M1 and M2, log the new hash and every changed locked number in `DECISIONS.md`
(`date | step | decision | why`), and update section 4 references in the research through the writers. Slide numbers
update automatically from `values.json`; rerun `gen.py mock` and `copy`. Otherwise record "considered, no change" with the reason.

---

# PART III. RESEARCH

## 6. Research lanes

Schema for every raw file `research/raw/R-X.md`: an H1, a two-line preamble with the access date, one H2 per question,
then `| R-ID | Fact | Source title | Publisher | URL | Date accessed | Verbatim snippet (max 25 words) | Status |` with
Status VERIFIED, CORRECTED (corrected figure and date), VERIFIED (search only), UNVERIFIABLE or NOT YET PUBLISHED; end
with `## Gaps` and `## Conflicts`. R-IDs are the lane letter plus two digits (`F07`). 35 to 70 rows a lane (Lane I: 12 to
25). Prefer regulator text, exchange circulars, filings, peer-reviewed papers and official statistics. Flag `[blog]` and
`[vendor]`. Cross-lane rules: sponsor separation; "case term: dormant [C-D4]" note on any 24-month "inactive"; no
currency conversion; never infer a 2026 date from an earlier year.

Planning-time verification already found (verifiers confirm and extend, do not lose these): NSE active clients 4.92
crore (Mar 2025) to 4.57 crore (Mar 2026), 4.61 crore (Sep 2026); demat 24.06 crore (Sep 2026); SEBI F&O FY25 study
(7 Jul 2025, 91%, ₹1,05,603 crore) and FY26 study (20 Aug 2026, 87.7%, under-30 88.5%, ₹91,685 crore); NSE/INSP/64718
(25 Oct 2024) inactive accounts; SEBI finfluencer amendment regulations gazetted 29 Aug 2024 (follow-up circular 22 Oct
2024); NSE code of advertisement NSE/COMP/55482 (2 Feb 2023) with prior approval; SEBI consultation on a common
advertisement code (23 Jun 2026); inducement rules come from NSE circulars (49/2019, NSE/INSP/63425 of 14 Aug 2024) and
the ad code, not a SEBI circular; BSDA (SEBI circular of 28 Jun 2024: ₹10 lakh limit, nil AMC to ₹4 lakh, ₹100 from ₹4
lakh to ₹10 lakh); CCPA dark pattern guidelines (30 Nov 2023, 13 patterns); DPDP Rules (G.S.R. 846(E), 13 Nov 2025;
Rule 4 after 12 months, main obligations after 18 months); RBI Commercial Banks Undertaking of Financial Services
Directions 2025 and Responsible Business Conduct amendment effective 1 Jan 2027 (explicit consent, no bundling, no dark
patterns); SEBI digital gold caution (8 Nov 2025); Dhanteras 6 Nov 2026, Diwali and NSE Muhurat 8 Nov 2026 (NSE
FAOP71777; timings not yet notified); WhatsApp India marketing ₹0.8631 from 1 Jan 2026, utility ₹0.115; Groww CAC ₹616
(FY25) to ₹1,374 (H1 FY26); bank-led NSE active clients Sep 2026: ICICI Securities 21.60 lakh, Kotak 13.92 lakh, HDFC
Securities 13.54 lakh, SBI Securities 10.21 lakh; gold ETF inflows about ₹43,000 crore in 2025; SIP inflows ₹32,490
crore (Sep 2026), stoppage ratio 78.53%; SEBI Investor Survey 2025 (63% aware, 9.5% participate); Jar 3.5 crore users;
Thaler and Benartzi 2004 (3.5% to 13.6%).

### Lane B: Sponsor and bank-led broker context
Questions: YES Securities (status, ownership, registrations, products, apps, leadership); its FY25 and FY26 results from
the YES Bank annual report; NSE active clients by month Sep 2025 to Sep 2026; the 2026 NSE onboarding ban and lifting;
YES Bank customers, branches, CASA, app (iris by YES BANK) and digital statements; ICICI Securities 3-in-1 and its merger
into ICICI Bank; Kotak Securities and Kotak 811; HDFC Securities and HDFC Sky; SBI Securities and YONO; Axis Securities;
the share of a bank-led broker's new clients sourced from the parent bank; RM coverage and clients per RM if published.
Seeds: yesbank.in investor relations, yessecurities.co.in, NSE member-wise active clients, ICICI Bank and Kotak investor
presentations, HDFC Bank and SBI annual reports, Business Standard, Mint, Economic Times.
Tests: A26, A27, A31 to A33; "majority are parent-bank customers" [C-CO4].

### Lane C: Indian broking market and activity
Questions: demat accounts monthly Sep 2024 to Sep 2026; NSE active clients monthly and the active ratio; unique
investors and share under 30 (NSE Market Pulse); broker shares of active clients; Nifty 50, Midcap and Smallcap returns
Oct 2025 to Oct 2026 and India VIX range; retail share of cash turnover; IPOs FY26 and H1 FY27; SIP inflows, accounts and
stoppage ratio; ETF and gold ETF flows, AUM, folios; retail F&O participation before and after Nov 2024 measures;
depository charges per sell at bank-led brokers.
Seeds: NSE Market Pulse, CDSL and NSDL statistics, SEBI Bulletin, AMFI monthly data, World Gold Council, NSE indices.
Tests: A02 (business-as-usual drift), A63 to A65.

### Lane D: Regulation
Questions: SEBI Investment Advisers Regulations (definition of advice; the incidental-advice position of brokers;
whether a rule-built neutral ETF list counts as advice); Research Analyst rules and mass research calls [C-PB3]; the
finfluencer amendment regulations and their education carve-out; the NSE and BSE advertisement codes, standard risk line
wording, penalties; the June 2026 SEBI consultation; inducement and referral rules; the 25 Oct 2024 inactive-account
circular (activities that count, reactivation by IPV or video IPV, the bar on pushing clients to trade to stay active);
KYC and KRA statuses, video IPV; BSDA; nomination (no freezing after 10 Jun 2024); SEBI F&O studies FY22 to FY26; Nov
2024 F&O measures; the ₹250 SIP status; the digital gold caution; UPI blocked-amount trading for qualified brokers; UPI
Autopay and e-mandate limits; RBI directions on banks referring group products and the 2027 conduct amendment; TRAI
TCCCPR and DLT (2025 amendments); CCPA dark patterns; the SEBI investor charter for brokers.
Seeds: sebi.gov.in, nseindia.com and bseindia.com circulars, rbi.org.in, npci.org.in, trai.gov.in, consumeraffairs.nic.in, egazette.gov.in.
Tests: A10, A11, A66, A67; the compliance scores in T17.

### Lane E: Behavioural science and activation evidence
Questions: Thaler and Benartzi 2004; Madrian and Shea 2001; Choi, Laibson, Madrian and Metrick on defaults; Karlan et al.
2016 reminders; Dai, Milkman and Riis 2014 fresh start; Milkman et al. 2011 implementation intentions; Kahneman and
Tversky 1979; Benartzi and Thaler 1995; Karlsson, Loewenstein and Seppi 2009 and Sicherman et al. 2016 (the ostrich
effect); Thaler on mental accounting; DellaVigna 2009 on attention; payday studies; Barber et al. 2022 on attention
trading; FCA 2022 on digital engagement; SEBI Investor Survey 2025; NCFE literacy. Report design, sample, effect with units, Indian or not.
Seeds: NBER, SSRN, journal pages, SEBI survey page, ncfe.org.in, fca.org.uk.
Tests: A21, A22, A27, A33, A36, A39.

### Lane F: Channels and unit costs
Questions: bank app reach (YES Bank app, RBI or NPCI mobile-banking data); in-app card and banner CTR `[vendor]`; push
CTR for finance; WhatsApp India per-message prices; DLT SMS and email costs; RCS prices; broker CAC from filings (Angel
One, Groww RHP and FY26); cost per funded account `[vendor]`; UPI Autopay mandate volumes and success rates; exchange
investor-awareness programme costs; SEBI SMARTs.
Seeds: developers.facebook.com WhatsApp pricing, npci.org.in, Angel One investor relations, Groww RHP on sebi.gov.in, vendor benchmark reports.
Tests: A20, A21, A23, A24, A35, A50 to A53, A61.

### Lane G: Calendar and culture
Questions: Dhanteras and Diwali 2026 dates; NSE and BSE 2026 holidays; the 2026 Muhurat circular (or NOT YET
PUBLISHED); gold demand around Dhanteras 2024 and 2025 (WGC, trade bodies); gold ETF flows in Oct and Nov 2024 and 2025;
salary credit timing (last working day or the 1st); fresh-start dates in the window (1 Jan 2027, Makar Sankranti and
Pongal 14 and 15 Jan 2027); wedding-season gold; ELSS season under the new tax regime; Union Budget 1 Feb 2027 (just outside).
Seeds: NSE and BSE holiday pages, gold.org, amfiindia.com, DoPT holiday list.
Tests: A28 to A30; the timing profiles in the model.

### Lane H: Comparable activation plays and cautionary tales
Questions: Groww's mutual-fund-first funnel (RHP); Jar's daily gold habit; Kotak 811 cross-sell; HDFC Sky; SBI Securities
in YONO; ICICI Direct in the ICICI Bank app; Paytm Money; PhonePe Share.Market; Zerodha's risk nudges; Robinhood (FINRA
June 2021 action, Massachusetts gamification settlement, confetti removal); FCA findings; Vanguard How America Saves;
UK automatic enrolment evaluation; Acorns round-ups. Report what transfers to ONL and what does not.
Seeds: sebi.gov.in (Groww RHP), finra.org, mass.gov, fca.org.uk, Vanguard, gov.uk DWP, Inc42 and Entrackr `[blog]`.
Tests: A22, A27, A39.

### Lane I: Third-party quotes for the deck and research
6 to 10 verbatim quotes of at most 40 words from named, credible sources (title, URL, date; prefer April 2025 onward):
SEBI's chairperson on retail F&O losses; NSE's MD and CEO on investor numbers or SIPs; Nithin Kamath on falling activity;
Thaler or Benartzi on automatic saving; WGC India on gold ETFs; AMFI's CEO on SIP flows; the FCA on gamification. Never
paraphrase inside quotation marks; if a quote cannot be verified verbatim, record the nearest verbatim sentence.

### Lane J: Data, consent and privacy
Questions: DPDP Act 2023 (notice, consent, purpose limitation, legitimate uses, penalties); DPDP Rules 2025 phases and
which apply between 2 Nov 2026 and 31 Jan 2027; consent managers; Account Aggregator framework and securities data;
bank-to-subsidiary data sharing (RBI KYC Master Direction, confidentiality, consent for group products); SEBI cyber
framework for brokers; TRAI consent framework; WhatsApp opt-in policy; consent screens free of CCPA dark patterns.
Seeds: meity.gov.in, egazette.gov.in, rbi.org.in, sahamati.org.in, sebi.gov.in, trai.gov.in, WhatsApp Business Policy.
Tests: A50; the opt-out and message-cap guardrails.

### After the nine files exist (step R2)
Run `python -X utf8 arthikkhayal-case/research/build_sources.py` (writes `sources.md` and `rid_to_sid.json`). Read every
"Changed numbers" list, apply 5.3 where triggered, and write `## Corrections for writers` and `## Terminology for
writers` (inactive and dormant mapping; sponsor separation) in `build-log.md`.

## 7. Research document specification

### 7.1 Format
- File `research/arthik-khayal-research.md`, assembled by `assemble.py md`. Writers never write an H1.
- Each H2 is `## N. Title` with the exact title from 7.2 and opens with a bold `**Answer.**` paragraph of two to four sentences.
- Pipe tables are introduced by a sentence and followed by what they show. Show worked arithmetic the first time a derived
  number appears. End every section that feeds a slide with `Exhibit for the deck: ...`.
- No images. Blockquotes only for verbatim quotes of at most 40 words with attribution, and for customer copy labelled
  `Message copy (draft, subject to compliance review):`.
- Lever template (symmetric treatment) for sections 12 to 17, in this order: 1 who and how many; 2 the moment and the
  message (with copy); 3 what we build; 4 rules it meets; 5 the numbers chain (reach, response, extra actives; bear, base,
  bull); 6 evidence and comparables; 7 what could go wrong and how we would see it early. Section 17 repeats it for two levers.

### 7.2 Section outline, content and owner

| § | H2 title (use exactly) | Must contain | Tables (min) | Words (min) | Writer |
|---|---|---|---|---|---|
| 0 | Document control: every number in this document traces to the case, an assumption, the model or a verified source | Purpose and readers (the judges and YES Securities); tag legend with one example each; source hierarchy; model file, hash and rerun command; the skill's calibration note; the four kinds of number; verification tally per lane B to J; what the document does not contain (no interviews, no ONL data beyond the case, no test results); naming and sponsor separation; inactive and dormant note | 5 | 1,000 | W-A |
| 1 | Coverage matrix: every line of the case maps to a section of this document and a slide | One row per ID in `case/01-case.md` (what it says in at most 20 words, how we answer, section, slide); constraints C-K1 to C-K7 against the seven levers; definitions reconciliation; lines answered only in part and why | 4 | 1,800 | W-A |
| 2 | The answer on one page: show salary customers the account they already hold, inside the bank, for +2.28 points by 31 January 2027 | Recommendation in three sentences; the do-not and do table with three reasons each side and numbers; the moneyshot (14.74% to 17.02%, 19,053; same ₹16.5 lakh buys 1,649 in paid media); scenarios with the honest reading that the bear case (+1.02 pp) misses 200 bps; the seven-lever table summing to 19,053; cost line (₹87 cash, ₹285 all-in); five triggers that would change our mind; a 150-word version | 5 | 2,200 | W-A |
| 3 | The case data decoded: activation stood still at 14.7% while salary accounts grew to 77.5% of the base and premium cohorts lost 3 to 4 points | Exhibit 1 decoded; Exhibits 2a and 2b side by side (T2, T3); share shift and growth (T4); mix and rate decomposition (T5: mix +0.02 pp, rate +0.19 pp); recency ladder (T6); roll-off 8,887 to 14,072 (T7); target arithmetic (T8); rounding reconciliation (cohort-weighted 1,20,372 against 1,19,339); what the data cannot show | 8 | 3,200 | W-A |
| 4 | Indian equities had a weak year that hit first-time investors hardest, and ONL's 14.74% sits below India's 19.2% active ratio | Lane C: demat against active clients; Nifty and VIX path; IPOs; SIP flows and stoppage; ETF and gold ETF flows; broker shares; what held up (recurring and gold-linked products) and what fell. Ends on the foreshadow without naming our levers | 6 | 2,600 | W-B |
| 5 | Bank-led brokers grow through the parent bank's channels, and ONL's parent bank already serves most of the customers behind its 8,09,746 accounts | Lane B sponsor facts in a box "Sponsor context, not case data"; the bank-led model (3-in-1, app, RMs); the assets a parent bank owns (salary credits, app sessions, statements, servicing messages, RMs, employer ties); VRIO; what ONL lacks without them | 5 | 2,400 | W-B |
| 6 | ONL matches discount apps on features, so its gap comes from how accounts are opened and reached, which is where bank-led peers differ | Symmetric template per peer (ownership, distribution, active clients and trend, activation tactics, recurring products): ICICI Securities, Kotak Securities, HDFC Securities, SBI Securities, Groww, Zerodha, Angel One, Upstox; strategic group map as a table; three lessons from Lane H | 7 | 2,600 | W-B |
| 7 | Regulation allows all seven levers when messages state facts, customers choose the product and no reward is tied to a trade, and it rules out five tactics | Each Lane D item in plain words; a lever-by-rule matrix (allowed, allowed with conditions, the condition); the five ruled-out tactics (mass research calls, first-trade offers, contests, return-led content, F&O promotion), including how ONL's past first-trade offers sit, stated neutrally | 8 | 3,400 | W-B |
| 8 | Inattention explains more of the inactivity than fear does, which is why a year of "stay invested" messages moved the rate by 0.04 points | Lane E evidence on attention, the ostrich effect, loss aversion, mental accounting, present bias, defaults, fresh start, reminders; SEBI Investor Survey 2025 and NCFE; a barrier, evidence and lever map; the line between a nudge and a dark pattern (CCPA list); jobs-to-be-done for a salary-account holder | 5 | 2,800 | W-B |
| 9 | The 6,90,407 accounts without a trade in 12 months stall at first login and funding, the two steps a bank-app entry with single sign-on and an Autopay mandate removes | Funnel C-F1 to C-F5; lever chains (A20 to A25) as stage assumptions (T9); where each lever acts; a journey map for a salary-account holder; AARRR mapping; why habit decides the warm cohort | 5 | 2,400 | W-C |
| 10 | Five whys trace the flat 14.74% to one root cause: the account was opened alongside a bank product and never tied to a moment the customer already has | Five whys; MECE issue tree (awareness, access, funding friction, motivation, market); hypothesis table with evidence and verdict; the gap named for the foreshadow without naming the levers | 3 | 1,800 | W-C |
| 11 | The option screen scores meeting accounts inside bank-owned moments at 4.40 of 5 and the strongest alternative at 2.60 | T17 options, criteria, weights, scores and verdicts; T18 robustness under three other weight sets; the synthesis paragraph opening "Conclusively," with three columns (it does not move the rate; it raises regulatory and ethical risk; it costs more per activation) | 5 | 2,400 | W-C |
| 12 | Salary day: a card in the bank app when the salary lands, offering a monthly ETF instalment the customer picks, is the largest lever at 5,661 extra actives | Lever template; the 6,27,853 salary accounts; card copy; the neutral-list rule; single sign-on; Autopay mechanics and limits; numbers chain (A20 to A22, T10); evidence (SMarT, defaults, payday studies, Groww, Jar) | 5 | 2,800 | W-C |
| 13 | A holdings check adds 3,081 extra actives through the investments tile, statements, servicing messages and re-KYC for dormant accounts | Lever template; the awareness gap [C-PB6]; four touchpoints and copy; the reactivation flow under the 25 Oct 2024 circular with the case-term mapping; numbers chain | 5 | 2,400 | W-C |
| 14 | RM review conversations reach Prestige, Elite, Elevate and Preferred clients and add 4,083 extra actives in cohorts that already trade at 20% to 37% | Lever template; the 1,08,576 premium and preferred accounts; year-on-year declines; facts-only RM script; capacity; incentive rule (no per-trade payout); referral rules | 4 | 2,200 | W-C |
| 15 | A factual Dhanteras and Muhurat notice on 6 to 8 November 2026 adds 2,311 extra actives because gold ETFs fit a purchase many households already plan | Lever template; verified dates; festive gold demand; gold ETF facts against digital gold (SEBI caution); copy with no price talk or urgency; DLT channels; week-1 compliance clearance as the main risk | 4 | 2,000 | W-D |
| 16 | Warm-cohort defence keeps 1,607 extra actives among the 8,887 to 14,072 accounts whose last trade was 9 to 12 months ago, without asking anyone to trade to keep a status | Lever template; sizing (T7); the ethical line under the NSE circular; timing; numbers chain | 4 | 1,800 | W-D |
| 17 | A guided first order for new accounts adds 1,897 extra actives and workplace sessions add 413 | Lever template twice; 75,891 accounts added in the year; guided-order design; SMARTs-led sessions with no product pitch; why the 413 lever stays | 4 | 2,000 | W-D |
| 18 | Seven features ship within one quarter on the bank app and ONL's existing services, without touching the trading engine | The features on slide 4 (tile with sign-on and video IPV, Autopay, ETF instalment, daily holdings view, guided first order, consent and preference centre, holdout and frequency-cap service); owner, dependency, weeks, live week, Kano class, acceptance test; a service blueprint table | 4 | 2,000 | W-D |
| 19 | Every message and screen passes five checks for advice, return claims, inducement, consent and dark patterns before it ships | The five checks on slide 4 expanded into a ten-point test; every copy block scored; approval path (ONL compliance, exchange ad approval, bank compliance); banned customer phrases (guaranteed, assured, risk-free, sure, don't miss, last chance, hurry, limited time, only today, jackpot, multibagger, tip); how past ONL messages score (2 of 5) | 4 | 2,200 | W-D |
| 20 | The bank shows the card inside its own app under its own notice, so customer data reaches the broker only after the customer taps, and opt-outs above 0.5% a send stop a message | Lane J: DPDP phase in force in the window; consent managers; purpose limitation; bank-to-subsidiary sharing; RBI 2027 conduct amendment; TRAI and WhatsApp consent; data-flow table per lever | 3 | 1,800 | W-D |
| 21 | The model builds 19,053 extra actives lever by lever from reach, response and overlap | Method in plain words then formulas (the A1 formula on slide 7); inputs (T1, T9); overlap by 1 minus the product of misses; dormant friction; base growth and the business-as-usual rate; the 12 checks; limits; rerun | 5 | 2,600 | W-E |
| 22 | The active rate rises from 14.74% to 17.02% by 31 January 2027 in the base case, within a range of +1.02 to +3.94 points | T10, T11, T12; lever bars; weekly path; scenario assumption boxes; highly active 10.1% to 12.4%; the honest reading of the bear case and the week-6 trigger | 5 | 2,200 | W-E |
| 23 | The base case clears the 200 bps floor by 28 bps, and no single input at its bear value pushes it below +2.0 points | T16 tornado; the pre-empted weakness stated first; what would have to be true for the bear case | 4 | 1,800 | W-E |
| 24 | ₹16.5 lakh of cash buys 19,053 extra actives at ₹87 each, while the same cash in paid media buys 1,649, 11.6 times fewer | T13, T14; cash against internal effort; Lane F CAC evidence (Groww ₹616 to ₹1,374 per acquired customer); channel unit costs; decomposition into base cost plus named components | 4 | 2,000 | W-E |
| 25 | Each new active earns about ₹62 a year in broking revenue, so activation pays back in 17 months and its larger value sits in the bank relationship | T15; brokerage ₹0.15 an order [C-PR1]; BSDA effect on annual charges; mutual funds at ₹0 [C-PR3]; bank-relationship value described without invented figures; why we do not chase F&O revenue [C-K7] | 3 | 1,400 | W-E |
| 26 | A 13-week roadmap from 2 November 2026 to 31 January 2027 runs four gates and ships every feature by week 8 | Week-by-week table matching slide 6; gates G0 to G3 with tests; RACI; dependencies; what continues after 31 January | 4 | 2,000 | W-E |
| 27 | A 10% holdout reads the lift every week, and four guardrails stop any message that pushes F&O, annoys customers or breaks consent | KPI tree; holdout sizing (T19); weekly dashboard (slide 6 KPIs); guardrails with stop lines and actions; metric definitions tied to C-D1 and C-D2; daily-use measures for the "daily users" ask [C-Q1] | 4 | 2,000 | W-E |
| 28 | Risks: ad approval timing and a further market fall carry the most weight, and both are handled before week 1 | Register (probability, impact, early signal, response, owner); heat map as a table; pre-mortem | 5 | 2,000 | W-F |
| 29 | Customer validation plan (not yet run): 30 interviews and two usability rounds in weeks 1 to 3 would confirm or cut the two largest levers | First sentence says nothing has been run; hypotheses; sample by cohort; interview guide; tests; decision rules | 3 | 1,600 | W-F |
| 30 | Assumptions register: every model input with its base, bear and bull value, and the inputs that move the result most | T1 in prose; T16 ranking; evidence class for each; how to change one input and rerun | 3 | 1,600 | W-F |
| 31 | Slide blueprint: eight slides carry the argument, and every number on them traces to a tagged line in this document | Per slide and panel: title, numbers, section and tags (from `deck/slide-copy.md`); archetype mapping (H, K, M, N, P, U, V, W); cover mind-map nodes; "Conclusively" on slide 4, "Therefore" on slide 8; the one moneyshot on slide 5 | 4 | 1,800 | W-F |
| 32 | Forty questions the judges could ask, answered | Grouped as data, diagnosis, regulation, levers, model, economics, ethics, execution; the ten hardest first; each 60 to 120 words with tags. The only section with question marks | 2 | 5,000 | W-F |
| 33 | A talk track for two speakers, timed slide by slide | Timed blocks; the one number each block lands; handovers between Harsh and Gursimran | 2 | 1,000 | W-F |
| App A | Appendix A: Bibliography | Built by `assemble.py` | 1 | n/a | Script |
| App B | Appendix B: Model tables | T1 to T19, inserted by `assemble.py` | 19 | n/a | Script |
| App C | Appendix C: Glossary and short forms | Every term and short form | 2 | 900 | W-F |
| App D | Appendix D: Data conflicts and method limits | Every `## Conflicts` entry and its resolution; the cohort rounding gap; inactive and dormant mapping; model limits | 2 | 1,000 | W-F |

Part files: `part-A.md` §0 to 3; `part-B.md` §4 to 8; `part-C.md` §9 to 14; `part-D.md` §15 to 20; `part-E.md` §21 to 27;
`part-F.md` §28 to 33; `appendix-C.md` and `appendix-D.md` by W-F, each opening with its exact `## Appendix X: ...` heading.

Acceptance (printed by `assemble.py md`): words at least 65,000; tables at least 120; dashes 0; exclamations 0; question
marks outside §32: 0; `not just/only/merely`: 0; banned empty; question headings empty; `missing_S` empty; duplicate
headings empty; `**Answer.**` leads at least the number of H2 sections; untagged number lines at most 25.

---

# PART IV. EXECUTION

## 8. Skill touchpoints (mandatory)

### 8.1 case-competition-deck (`skill: "case-competition-deck"`)

| Touchpoint | When | What to do | Pass test |
|---|---|---|---|
| A | Step B3 | Load the skill; read `references/structure.md`, `rhetoric.md`, `archetypes.md`, `frameworks.md`, `case_types/marketing.md`, `strategy.md`, `operations.md`. Confirm section 3 carries: contrarian answer, seed, symmetric treatment, three scenarios, one moneyshot, double synthesis, action titles, third-party validation, pre-empted weaknesses | All nine located; calibration note logged |
| B | Every writer prompt | Writers read `rhetoric.md` and the frameworks assigned in 3.6 | Each part's H2s are the locked findings; each framework appears |
| C | Step R6 | Critique mode on the research (prompt 11.4) | `research/critique.md`; every score under 4 fixed or reason logged |
| D | Step R5 | Slide-mode check of research §31 against `archetypes.md` | Mapping table appended to §31 |
| E | Step Z1 | Polish search on the research: TODO, Insert, Placeholder, TBD, Lorem, xyz, and other case names (SwiftKart, SwasthyaGrid, HarvestBox, Dream11, Paytm, Liminal, Satoshi, Alchemy, TiO2, Eurogrip, Setu) | Nothing outside the bibliography |
| F | Step D1 | Before deriving the deck: five core headlines are full-sentence findings with a number; slide 4 carries "CONCLUSIVELY", slide 8 "THEREFORE"; exactly one `CARD: MONEYSHOT` | Logged |
| G | Step D6 | Critique mode on the built deck (prompt 11.5) | `deck/critique.md`; allowed fixes applied |
| H | Step D7 | Final polish search on `deck/slide-copy.md` (same list as E) | Nothing found |

The rubric assumes a 100-slide M&A deck. Re-base it and say so: "8 sections present" becomes 3.2; "sample 10 action
titles" becomes all 34 research H2s or all seven slide headlines; "appendix depth" becomes "every number has a tag"
(research) or "every number is in `values.json` or a VERIFIED row" (deck). The skill's .pptx step does not apply.

### 8.2 humanizer (`skill: "humanizer"`)

| Touchpoint | When | What | Pass test |
|---|---|---|---|
| HU1 | Each writer, before replying | File-mode pass on its own part (section 2.3) | Self-check prints 0 tell hits |
| HU2 | Step R4, after `ASSEMBLY PASS` | Main agent samples 15 paragraphs across all parts and counts tells by §1 to §8, §13 and §19 | Under 1 tell per paragraph on average; worst three fixed by the owner |
| HU3 | Step D1 | Every `overrides.json` string and the derivation copy | No contrast, closer, triad or dash introduced |
| HU4 | Step D6 | The deck critic counts tells in `deck/slide-copy.md` | Zero tells of §1 to §8 |

## 9. Environment (checked 21 Oct 2026)

Python 3 with PyMuPDF (`fitz`), Pillow, fontTools; Node v24; Chrome at `C:\Program Files\Google\Chrome\Application\chrome.exe`.
Run every Python command from the repo root with `python -X utf8`. In PowerShell chain with `;`, never `&&`; the Bash
tool is also available. `markdown_it` is used by the PDF renderer (`python -m pip install markdown-it-py` if missing).
The deck generator reads, never writes: `verdict-mnc/deck/preamble.js`, `verdict-mnc/deck/mock_figma.js` and
`swasthyagrid-gcp/space-beyond/deck/{_x2.js,_x3.js,metrics.json,preview.py}`. The PDF builder reads
`iim-lucknow-pivot/research/build_pdf.py`.

## 10. Execution sequence

### 10.1 Bootstrap

Step B0. Copy this plan byte for byte:
```
python -c "import shutil; shutil.copyfile(r'C:\Users\harsh\.claude\plans\working-folder-arthikkhayal-case-jaunty-russell.md', r'arthikkhayal-case\PLAN.md')"
```
Step B1. Open `arthikkhayal-case/PLAN.md`, find the block `<!-- FILE: extract.py -->` in Part VI, create
`arthikkhayal-case/extract.py` with exactly that block's content using the Write tool, and run
`python -X utf8 arthikkhayal-case/extract.py`. Done when it prints `files 22`.

### 10.2 Step table

| Step | Who | Action | Done when |
|---|---|---|---|
| B0, B1 | Main | Bootstrap | `files 22` |
| B2 | Main | Start `build-log.md` and `DECISIONS.md` (header `date | step | decision | why`); read 2.5 | Both exist |
| B3 | Main | Touchpoint A; load the humanizer skill | Logged PASS |
| M1 | Main | `python -X utf8 arthikkhayal-case/model/activation_model.py` | 12 PASS lines, `CHECKS 12/12 HASH fc66d11096`, `FINDINGS 2.28 1.02 3.94 19,053 17.0% ₹16.5 lakh ₹87 1,649`, three files written; spot-check five rows of section 4 against `model_tables.md` |
| M2 | Main | `python -X utf8 arthikkhayal-case/deck/gen.py pre`; `... gen.py mock`; `... gen.py copy`; `... gen.py preview` | Eight `sNN OK`; `copy issues 0`; eight previews in `deck/shots/` viewed with Read |
| C0 | Main | Cover first: section 15.2 steps F1 to F4, then show the user the cover screenshot and say the research stage is starting | Slide 1 built, V1 clean, screenshot viewed |
| R1 | Verifiers, background, three at a time: B, C, D; then E, F, G; then H, I, J | Prompt 11.1 with the lane text from section 6 | Nine `R-*.md` files with `## Gaps` and `## Conflicts`; replies give counts and "Changed numbers" |
| R2 | Main | Section 6 "After the nine files exist"; apply 5.3 | Every S-ID has a URL; corrections and terminology written; if the model changed, M1 and M2 rerun and logged |
| R3 | Writers, background: W-A, W-B, W-C together; then W-D, W-E; then W-F | Prompt 11.2 | Each part meets its words and tables and passes its self-check, including HU1 |
| R4 | Main | `python -X utf8 arthikkhayal-case/research/assemble.py md`; then HU2 | `ASSEMBLY PASS`; else re-dispatch the short writer with 11.3 |
| R5 | Main | Touchpoint D; `python -X utf8 arthikkhayal-case/research/assemble.py pdf` | PDF over 800 KB; first page and one table page viewed with Read; team block shows Harsh Kawatra and Gursimran Kaur |
| R6 | Critic CR | Touchpoint C, prompt 11.4 | `critique.md`; fixes applied by re-dispatching owners; R4 and R5 rerun |
| Z1 | Main | Touchpoint E; checklist 14.1; Stage 1 report to the user; write `STAGE 1 COMPLETE` with the date | All boxes ticked |
| D1 to D8 | Main | Section 15 | 15.9 ticked |
| Z2 | Main | Memory, section 14.3 | Files and pointers exist |

### 10.3 Parallelism rules
- At most three sub-agents at once; on a rate limit, relaunch after the reset time in the error.
- Sub-agents write only their own files. Figma calls are made by the main agent only, one at a time.
- Writers start only after M1 (tables) and R2 (S-IDs). Writers save their file after the first two sections and extend it.

## 11. Prompts

### 11.1 Verifier prompt (fill LANE = B to J)

> You are verifier V-LANE for a case-competition research file. Read `arthikkhayal-case/PLAN.md` section 6 (the schema,
> the cross-lane rules, the planning-time findings and "Lane LANE"), section 2.1 and `arthikkhayal-case/case/01-case.md`.
> Today's date is the access date. For each question and seed: open the URL with WebFetch, or find the primary source with
> WebSearch (mode "standard"; "extended" only when a standard search comes back thin); record one row per fact in the
> schema; mark it VERIFIED, CORRECTED (give the corrected figure and date), VERIFIED (search only), UNVERIFIABLE or NOT YET
> PUBLISHED; quote at most 25 words verbatim. Add rows from better sources until you have 35 to 70 (Lane I: 12 to 25 quotes
> of at most 40 words with name, title, URL and date). Prefer SEBI, the exchanges, RBI, NPCI, TRAI, MeitY, filings,
> peer-reviewed papers and official statistics. Never invent a figure, date, quote, circular number or URL. Never infer a
> 2026 date from an earlier year. Flag `[blog]` and `[vendor]`. Facts about YES Securities or YES Bank are sponsor context:
> never attribute them to Trade Private Limited or ONL Trade. When a source calls an account with no trade in 24 months
> "inactive", add "case term: dormant [C-D4]". Keep conflicting sources and list them under `## Conflicts`. Do not write
> analysis. Do not convert currency. No em dashes or en dashes. R-IDs are `LANE` plus two digits (for example F07). Write
> `arthikkhayal-case/research/raw/R-LANE.md`, saving after your first two questions and extending it. Reply with rows
> verified, corrected, unverifiable, not yet published and new; a list "Changed numbers" with the T1 assumption ID where
> one applies; and, at the top, any finding that would change a lever's legality (Lane D) or a roadmap date (Lane G).

### 11.2 Writer prompt (fill PART and SECTIONS)

> You are writer W-PART. Write sections SECTIONS of a consulting-grade research deliverable into
> `arthikkhayal-case/research/parts/part-PART.md` (W-F also writes `appendix-C.md` and `appendix-D.md`).
>
> Skills first. Invoke `case-competition-deck` with the Skill tool and read `references/rhetoric.md`,
> `references/case_types/marketing.md`, `references/case_types/strategy.md` and the `frameworks.md` entries assigned to
> your sections in PLAN 3.6. Then invoke `humanizer` and keep its tells list beside you while you write.
>
> Read first, fully: `arthikkhayal-case/PLAN.md` sections 1 to 7; `case/01-case.md`; `model/model_tables.md` (T1 to T19)
> and `model/model_outputs.json`; `research/raw/sources.md` and every `R-*.md`; `build-log.md` sections "Corrections for
> writers" and "Terminology for writers"; for register only, `dreamforge-case/research/swiftkart-research.md` lines 1 to 150.
>
> Rules. (1) Use the exact H2 titles from PLAN 7.2 as `## N. Title`, `### N.M` for sub-sections, never an H1; open every
> H2 with a bold `**Answer.**` paragraph of two to four sentences; sections 12 to 17 follow the seven-part lever template.
> (2) Cover every "Must contain" item and meet the minimum words and tables; more is welcome when every paragraph carries
> evidence. (3) Every number carries a tag: [C-E2a], [A21], [M], [T10], [S12] or a raw row [F07]. Use only numbers from
> the case, the model files, PLAN section 4, or a VERIFIED or CORRECTED raw row. (4) Do not browse. Compute nothing beyond
> sums, differences, ratios and products of tagged numbers, and show the arithmetic the first time. Never derive a rate
> change from a count or the reverse. (5) Write "in our model" for every model result. Never invent an interview, a
> customer quote, a test result, a response rate, or any ONL or bank figure beyond the case; section 29 has not been run
> and says so. (6) Keep the recommendation, the seven levers and every locked number exactly as in PLAN; state the honest
> reading that the bear case (+1.02 pp) misses 200 bps wherever your sections touch scenarios. (7) Use the case's names;
> YES Securities and YES Bank appear only in §5 as sponsor context and in quotes; translate "inactive" (24 months) to
> "dormant" [C-D4]. (8) Coin no name for the strategy, a lever, a feature or a programme. No AI-use statement. (9) Customer
> copy goes in a blockquote labelled `Message copy (draft, subject to compliance review):`, states facts only, names no
> fund as better, implies no return, rewards no trade, carries no urgency or fear, and ends with the standard risk line
> exactly as Lane D verified it.
>
> Style. First person plural, declarative, plain words, mostly short sentences with some longer ones, reasoning shown, a
> number in most sentences: a consultant's memo to the head of a bank-led broker. Zero em and en dashes; ranges use "to".
> No hooks, rhetorical questions, "imagine" or exclamation marks; question marks only in §32. Banned words: PLAN 2.2.
> Expand each short form on first use in a section; put an italic expansion line under any table with short-form heads.
> Introduce every table with a sentence and follow it with what it shows. End every slide-feeding section with
> `Exhibit for the deck: ...`.
>
> Humanizer pass before you finish (HU1). Treat your part file in the humanizer's file mode: prose only; numbers, tags,
> tables, headings and copy-block facts unchanged. Fix, strongest first, the tells in PLAN 2.3, then reread for contrasts,
> closers, triads, dashes and bold labels. Add no fact in this pass.
>
> Save after your first two sections and extend. Self-check before replying:
> `python -X utf8 -c "import re,io;t=io.open(r'arthikkhayal-case/research/parts/part-PART.md',encoding='utf-8').read();b=re.split(r'^## 32\.',t,flags=re.M)[0];print(len(t.split()),len(re.findall(r'^\|[ :|-]+\|\s*$',t,re.M)),len(re.findall('[\u2014\u2013]',t)),t.count('!'),b.count('?'),len(re.findall(r'\bnot (?:just|only|merely)\b|\bat its core\b|\bthe real question\b|\bserves as\b|\bpivotal\b|\bcrucial\b',t,re.I)))"`
> Fix until dashes, exclamations, stray question marks and tell hits are 0 and words and tables meet the minimums. Reply
> with the six numbers, the sections written and any figure you wanted but could not find. Edit no other file.

Assignments: W-A §0 to 3; W-B §4 to 8; W-C §9 to 14; W-D §15 to 20; W-E §21 to 27; W-F §28 to 33 plus the appendix
files. W-F runs last; add: "Also read `parts/part-A.md` to `part-E.md` and `deck/slide-copy.md`; §31 and §32 quote only
numbers that appear in those files."

### 11.3 Expansion line (when a part is short)
"Expand sections <list> by <n> words by adding worked examples from the model tables and the raw files and one more
table a section, keeping the lever template where it applies. Do not change any number. Run the humanizer pass again on the added text."

### 11.4 Critic prompt (research)

> You are critic CR. Invoke `case-competition-deck` and read `references/critique_rubric.md`, `rhetoric.md` and
> `case_types/marketing.md`; invoke `humanizer`. Read `arthikkhayal-case/PLAN.md` sections 2 to 7, then
> `research/arthik-khayal-research.md` in full. Score the argument with the rubric re-based for a research document (say
> so in one line): executive summary §2; industry §4 to 7; company §3 and §5; diagnosis §8 to 10; option filter §11;
> alternative §12 to 17; quantitative §21 to 25; feasibility §18 to 20 and §26 to 28; conclusion §2 and §31; all 34 H2
> titles scored for full sentence and number; "appendix depth" becomes "every number has a tag that resolves". Added
> tests: (1) every case line in `case/01-case.md` is answered with evidence; (2) the honest bear reading appears in §2,
> §22, §23 and §28; (3) every copy block passes the §19 test; (4) the foreshadow works (§4 and §10 name the gap without the
> levers; §11 opens with "Conclusively"); (5) check 25 numbers against `model_tables.md` and the case and list every
> mismatch; (6) sponsor separation and the dormant mapping hold; (7) §29 says it has not been run and no customer quote or
> test result appears anywhere; (8) humanizer sample of 15 paragraphs with tell counts and the worst three quoted. Lead
> with the two strongest things; at most eight issues, each with section, current state, fix and why. Never propose
> changing a locked number, the recommendation, a lever or an H2 title. No dashes. Write `research/critique.md`.

### 11.5 Deck critic prompt (touchpoint G)

> You are the deck critic. Invoke `case-competition-deck` (read `critique_rubric.md`, `archetypes.md`, `rhetoric.md`) and
> `humanizer`. Read the eight screenshots in `arthikkhayal-case/deck/shots/`, `deck/slide-copy.md`, `deck/derivation.md`,
> `deck/values.json` and research §31. Score the deck with the rubric re-based for eight slides with five core slides (say
> so). Check: the Summary headline carries the answer and +2.3 pp; slide 4 carries "CONCLUSIVELY" and slide 8
> "THEREFORE" with no new number; exactly one moneyshot on slide 5; symmetric treatment of the moments on slide 4; every
> number is in `values.json` or a tagged research line; customer copy shown passes the five checks; YES Securities appears
> only as a sponsor logo; the cover mind map has real nodes and the team table; zero humanizer tells (§1 to §8) and no
> banned word ("Elevate" as a cohort is allowed). At most five issues; none may change a number, the recommendation, the
> slide count or a layout the user approved (1.2); each fix must be doable through `deck/overrides.json` or 15.6. No
> dashes. Write `deck/critique.md`.

## 12. What good looks like (calibration for writers and critics)

> Most ONL accounts were opened for a reason other than investing. Salary customers hold 6,27,853 of the 8,09,746
> accounts, 77.5% [C-E2a], and that cohort grew 24% in a year [T4] while trading at 14% on a 12-month basis. A year of
> market updates, research calls and first-trade offers [C-PB3] moved the platform's active rate from 14.70% to 14.74%
> [C-E1]. These customers open the bank app on the day the salary lands, so that is where we show them the account. In
> our model, a card on salary day offering a monthly instalment into an ETF the customer picks from a fixed list adds
> 5,661 actives by 31 January 2027 [T10], the largest of seven levers. Together the levers lift the active rate to
> 17.02% [T11], a gain of 2.28 points, for ₹16.5 lakh of cash, ₹87 per extra active [T13]. Spent on paid media at ₹1,000
> an activation [A61], the same cash buys 1,649 [T14]. The bear case adds 1.02 points [T11], short of the brief's 200
> bps [C-K1], and section 23 shows which inputs decide it.

Avoid: an adjective without a number; a number without a tag; a table without a sentence before and after it; a model
result called a measurement; a rate computed from a count; copy that names a fund as better, implies a return or rewards
a trade; a paragraph ending in a one-line moral; any sentence that could sit unchanged in a document about another broker.

## 13. Recovery table

| Symptom | Action |
|---|---|
| `extract.py` prints fewer than 22 files | `PLAN.md` is not a byte copy. Redo B0 |
| Model hash differs or a check fails | A file was edited or a library changed. Re-extract and rerun. If only the hash changes and every section 4 number is identical, log and continue; if a number changes, stop and report |
| `gen.py pre` assertion | A read-only library in section 9 changed. Report the failing string; do not edit those libraries |
| `gen.py mock` FAIL after an override | Shorten the override with the ladder in 15.6 and rerun |
| Preview shows a donut as a full disc | Expected: the offline preview cannot draw arcs; Figma will. If Figma also shows a disc, set `const ARCS=false;` in `deck/_extras.js`, rerun `pre` and the slide |
| A lane has under 20 VERIFIED rows | Re-dispatch once: "Find 15 more rows from primary sources for questions <list>" |
| `ASSEMBLY FAIL` | Read the JSON: fix the named part by hand for banned words or dashes; re-dispatch the owner for words or tables |
| `missing_S` not empty | A writer cited an S-ID not in `sources.md`: add the source or remove the claim |
| `ModuleNotFoundError: markdown_it` | `python -m pip install markdown-it-py` |
| Figma not authorised or rate limited | Run `whoami`; if not authorised, stop and ask the user to authorise the Figma connector |
| `setup.js` returns more than 8 slides | List them in `deck/figma.md` and ask the user before removing any |

## 14. Final checks, report and memory

### 14.1 Stage 1 checklist
- [ ] M1 prints `CHECKS 12/12 HASH fc66d11096` (or the logged new hash after a 5.3 update).
- [ ] Nine raw files with `## Gaps` and `## Conflicts`; `sources.md` has a URL for every S-ID.
- [ ] `assemble.py md` prints `ASSEMBLY PASS`; HU2 logged.
- [ ] §1 has a row for every case ID; §29 opens by saying nothing has been run; the honest bear reading is in §2, §22, §23, §28.
- [ ] No AI-use statement; no coined name; sponsor facts only in §5.
- [ ] PDF exists and two pages were viewed; touchpoints A to E and HU1 to HU2 logged.

### 14.2 Reports to the user
Stage 1: paths, word and table counts, critic scores, every corrected seed, every conflict. Stage 2: the Figma URL, the
override count and the three biggest copy changes, logo slots filled and left, residuals, the PDF path.

### 14.3 Memory
Save `project_arthik_khayal.md` (type project) in the memory directory: folder, recommendation in one line, model hash,
Figma file key, team (Harsh Kawatra and Gursimran Kaur), palette, and that `arthikkhayal-case/PLAN.md` is the surviving
copy of this plan. Save `feedback_summary_slide_style.md` (type feedback): the user rejected text-heavy summary layouts
(two-column do/do-not cards, scorecards, flow diagrams) and approved charts on top plus the Asian Paints row matrix
(brief asks, obvious move struck through, what we do, mini proof bars, big result); strategy and execution slides must
be chart-led with captions, not prose. Save `feedback_humanizer.md` (type feedback): run the humanizer skill on every
deliverable's prose. Add the three pointers to `MEMORY.md`.

---

# PART V. STAGE 2: THE FIGMA DECK

## 15. Stage 2

### 15.1 Gate (for slides 2 to 8; the cover is built in C0)
- [ ] `STAGE 1 COMPLETE` is in `build-log.md`; `research/critique.md` fixes are applied.

### 15.2 Figma setup and the cover (steps F1 to F4, run in C0)

Tools: one ToolSearch with `select:mcp__figma-mcp__whoami,mcp__figma-mcp__create_new_file,mcp__figma-mcp__create_session,mcp__figma-mcp__use_figma,mcp__figma-mcp__get_screenshot,mcp__figma-mcp__upload_assets`.
Guidance: Skill `figma-use` if listed, otherwise `ReadMcpResourceTool` server `figma-mcp` uri `skill://figma/figma-use/SKILL.md`
(and `skill://figma/figma-use-slides/SKILL.md` if it exists); pass `skillNames: "resource:figma-use"` (plus
`,resource:figma-use-slides` when read) on every `use_figma` call. The deck positions nodes absolutely through the
helper library; that overrides any auto-layout advice. `get_metadata` does not work on Slides files.

| Step | Action | Done when |
|---|---|---|
| F1 | `whoami`. If exactly one plan has an editor seat, use its key; if several, ask the user which team. `create_new_file` with `editorType: "slides"`, name `Arthik Khayal 2026 | Team IdeaForge`. Then `create_session` with the new key | File key recorded in `deck/figma.md` and `build-log.md` |
| F2 | `use_figma` with the full text of `deck/setup.js` | Returns `count: 8` (or more), eight ids, `fontsOk` all true. Write `deck/slide-ids.json` as `{"S1": id1, ..., "S8": id8}` |
| F3 | `python -X utf8 arthikkhayal-case/deck/gen.py bind 1`; run `build/slide_01_1.js` then `build/slide_01_2.js` with `use_figma`; then `build/v1_01.js` | Each part returns `warnings: []`; V1 `clean: true` |
| F4 | `get_screenshot` of slide 1 at `maxDimension: 1600`, save to `deck/shots/s1.png` with curl, Read it, compare with `deck/shots/preview_01.png` | Mind map, answer card and team table as in the preview. Tell the user the cover is up |

### 15.3 Step D1: derive the deck from the research (touchpoints F and HU3)
1. Read research §2 to §4, §11 to §27 and §31, `research/critique.md` and the build-log corrections.
2. Create `deck/derivation.md`: per slide `| Panel | Text or number | Research section | Tag | Same (yes or no) | Change |`
   covering every panel title, label, sentence and number in `deck/slide-copy.md`.
3. A number from `values.json` must match the research (if not, fix the research sentence). Wording the research states
   better, a verifier corrected, or a claim the research could not support goes into `deck/overrides.json` as
   `"exact old string": "new string"`, never more than 10% longer, no dash, question mark, exclamation mark, banned word
   or humanizer tell. A central finding no slide carries goes under "Candidates for the talk track".
4. `gen.py mock`, `gen.py copy`, `gen.py preview`; `python -X utf8 arthikkhayal-case/deck/checks.py`. Done when eight
   `sNN OK`, `copy issues 0`, no dash or placeholder, and every name candidate is a real organisation, a case term or a
   plain phrase. Write `STAGE 2 D1 PASS` with the override count.

### 15.4 Build (main agent only, one call at a time)

| Step | Action | Done when |
|---|---|---|
| D2 | `gen.py bind` (all) | `build/slide_NN_1.js`, `_2.js` (slide 8 is one file) for N = 1 to 8, `v1_NN.js`, `v1_all.js`, `sweeps.js`, `slots.js`, each under 50,000 characters |
| D3 | For N = 2 to 8 (and 1 again if it changed): run every part of slide N in order, each must return `warnings: []`; then `v1_NN.js`; then screenshot to `deck/shots/sN.png` and Read it | V1 `clean: true` or logged residuals; each screenshot described in two lines in `deck/figma.md`. **Stop after slide 2 and compare it with `preview_02.png` and with SwiftKart slide `2:6` of `7N3v6bAfmXYRrte0zChFDg`; fix the system before building the rest** |
| D4 | `build/sweeps.js` then `build/v1_all.js` | `fontLow`, `copy`, `missing`, `presentBad` empty; `moneyshot` 1; `slides` 8 |
| D5 | Logos and images (15.7) | Log written |
| D6 | Touchpoints G and HU4 (prompt 11.5) | `deck/critique.md`; allowed fixes applied, D3 rerun for those slides |
| D7 | Touchpoint H; final screenshots of slides 1 to 8 at `maxDimension: 1920`, saved as `deck/shots/hi_s01.png` to `hi_s08.png` | Eight images viewed |
| D8 | `python -X utf8 arthikkhayal-case/deck/make_pdf.py`; report (14.2) | `TeamIdeaForge_ArthikKhayal.pdf` with 8 pages |

Every slide script's first part clears the slide (`wipe` through `skelBT`), so a rerun is safe; later parts never clear.
If a later part fails, rerun the slide from part 1.

### 15.5 Approved-layout rule
The user approved Cover, Impact and Appendix, and directed the redesign of Summary, Diagnosis, Strategy and Execution
that the embedded scripts carry. Copy may change through `overrides.json`; geometry changes only under 15.6.

### 15.6 Fix rules (the only edits allowed during the build)
A fix goes into `deck/overrides.json` (copy) or the slide file under `deck/slides/` (geometry), then `gen.py mock`,
`bind`, and the slide is rebuilt from part 1. Never edit a build file by hand and never add 240 to a coordinate.

| Issue | Fix |
|---|---|
| `headline 3 lines` | Remove the two weakest words through `overrides.json`; keep every number |
| `source 2 lines` | Drop the least important source group |
| `textOut`, `cellWrap`, overflow | Shortening ladder: drop articles; a shorter word; a short form defined on slide 7; drop the least important clause. Never below 18 pt for SEC text or 22 pt elsewhere; never drop a number |
| A label touches a line in a screenshot | Nudge it by at most 24 px in the slide file |
| A node sits 240 px off | A hand-written line set x or y before `appendChild`; rerun the full slide |
| `Cannot use unloaded font` | A fragment was run; always run full part files |
| Rotated rail label not centred | After `gen.py pre`, edit `deck/_x2.js` to `const RAILROT=false;`, rerun `bind` (not `pre`) and rebuild; log in `DECISIONS.md` |
| Donut renders as a disc | `const ARCS=false;` in `deck/_extras.js`, rerun `pre`, `bind`, rebuild slide 2 |

Known false positives: ribbon punch-holes over their tags, `BACK:` rectangles under cards, phone mockup frames.

### 15.7 Logos and image slots
Run `build/slots.js`. Expected slots. Slide 1 strip: DTU, ecotech, YES Securities, Anthill Ventures, Kae Capital. Slide 1
mind map: YES Bank, Zerodha, Groww, Angel One, ICICI Direct, HDFC Sky, Kotak, SEBI, NSE, BSE, NSE Indices, WhatsApp,
MeitY, Sahamati, and the image slot "Salaried first-time investor". Slide 8: DTU, ecotech, YES Securities, Anthill
Ventures, Kae Capital.
1. Sponsor and organiser marks come from the case PDF itself: run
   `python -X utf8 -c "import fitz,pathlib;d=fitz.open(r'arthikkhayal-case/6ad67dcf8fef3_case_arthik_khayal_26.pdf');o=pathlib.Path('arthikkhayal-case/deck/logos/case');o.mkdir(parents=True,exist_ok=True);[open(o/f'p{p+1}_{i}.{b[\"ext\"]}','wb').write(b['image']) for p in (0,3) for i,x in enumerate(d[p].get_images(full=True)) for b in [d.extract_image(x[0])]]"`,
   Read each image, and keep the ones that are clearly the DTU crest, ecotech, YES Securities, Anthill Ventures and Kae Capital marks.
2. Other brands: Wikimedia Commons search (`https://commons.wikimedia.org/w/api.php?action=query&list=search&srnamespace=6&srlimit=10&format=json&srsearch=<brand>%20logo`
   with a descriptive User-Agent), download with `curl -sL -o "arthikkhayal-case/deck/logos/<slug>.png" "https://commons.wikimedia.org/wiki/Special:FilePath/<File>?width=600"`, Read it to confirm the brand.
3. Fill: fill `MAP` in `deck/logo_rects.js` with `{"<slot id>": [pngW, pngH]}` (at most 8 a call), run it, then one
   `upload_assets` call per returned rectangle (`count: 1`, `nodeId`, `scaleMode: "FIT"`) and POST the bytes.
4. Marks with the State Emblem (MeitY) stay placeholders. The image slot takes only an openly licensed photo (Wikimedia
   Commons, CC BY or CC BY-SA) whose credit goes on slide 7 through `overrides.json`; otherwise leave it and tell the user.
   Never resize a slot after upload. Log each slot as uploaded or placeholder with the reason in `deck/figma.md`.

### 15.8 Export
`deck/make_pdf.py` builds the PDF from the D7 screenshots. Also tell the user that Figma Slides can export natively with
File, Export, PDF, and to check the organisers' naming rule before upload.

### 15.9 Stage 2 checklist
- [ ] Eight slides; `derivation.md` covers every text and number; `overrides.json` holds every change; mock all OK after it.
- [ ] Sweeps empty; one `CARD: MONEYSHOT`; V1 clean or logged residuals; eight screenshots viewed.
- [ ] Cover: mind map with brand slots, no KPI-card row, team table; same table on slide 8.
- [ ] Touchpoints F, G, H and HU3, HU4 logged; `deck/critique.md` exists; PDF has 8 pages.

---

# PART VI. EMBEDDED FILES (the source of truth for every script)

Every block below is extracted byte for byte by `extract.py` (paths relative to `arthikkhayal-case/`). Never retype a
block. A fix is made in the extracted file and logged in `DECISIONS.md`.


<!-- FILE: model/activation_model.py -->
```python
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
 "A10": (0.50, 0.55, 0.45, "share", "Share of idle accounts with no qualifying activity for 24 months, flagged inactive under the Oct 2024 exchange circular (lane D, lane C)"),
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
```

<!-- FILE: deck/gen.py -->
```python
# ===== ARTHIK KHAYAL DECK GEN v1 (from the Space and Beyond and Asian Paints generators) =====
"""Deck generator. Run from the repo root with python -X utf8.
  python -X utf8 arthikkhayal-case/deck/gen.py pre          build preamble.js, mock_figma.js and values.js (needs deck/values.json from the model)
  python -X utf8 arthikkhayal-case/deck/gen.py mock 2 3     dry-run the listed slides on the offline mock (no list = all 8); exit 1 on any issue
  python -X utf8 arthikkhayal-case/deck/gen.py bind 2 3     write build/slide_NN.js (or _1, _2, _3 parts) and build/v1_NN.js; always rewrite
                                                           v1_all.js, sweeps.js and slots.js
  python -X utf8 arthikkhayal-case/deck/gen.py copy         write deck/slide-copy.md (every text node, from the mock) and check it
  python -X utf8 arthikkhayal-case/deck/gen.py preview 2 3  offline previews on white in deck/shots/preview_NN.png (layout check)"""
import io, json, re, subprocess, sys, pathlib
try: DECK = pathlib.Path(__file__).resolve().parent
except NameError: DECK = pathlib.Path("arthikkhayal-case/deck").resolve()
AK = DECK.parent; ROOT = AK.parent; N = "\n"; NS = 8; ALL = tuple(range(1, NS + 1))
LIB = ROOT / "verdict-mnc" / "deck" / "preamble.js"; MOCKSRC = ROOT / "verdict-mnc" / "deck" / "mock_figma.js"
SB = ROOT / "swasthyagrid-gcp" / "space-beyond" / "deck"     # read-only source of _x2.js, _x3.js and metrics.json
ROT = ('Object.defineProperty(Node.prototype, "relativeTransform", { set(m) { this._rt = m; '
       'if (this.type === "TEXT" && Math.abs(m[0][0]) < 1e-6) { const w = this.width, h = this.height; this.x = m[0][2]; this.y = m[1][2] - w; this.width = h; this.height = w; } }, '
       'get() { return this._rt; } });')
BANW = ["here's", "let's", "bottom line", "delve", "game-changer", "game changer", "unlock", "it's not just", "make no mistake", "landscape",
        "robust", "seamless", "holistic", "tapestry", "paradigm", "navigate", "revolutioni", "cutting-edge", "leverage", "empower",
        "transformative", "journey", "synergy", "world-class", "best-in-class", "next-gen", "reimagine", "supercharge", "harness",
        "crucial", "pivotal", "furthermore", "moreover", "in today's", "ever-evolving", "imagine", "ecosystem", "testament", "elevating",
        "what if", "picture this", "dive into", "groundbreaking", "state-of-the-art", "plethora", "myriad", "underscore", "showcase",
        "foster", "bolster", "spearhead", "nuanced", "intricate", "meticulous", "realm", "fast-paced", "in conclusion",
        "it is important to note", "revolutionary", "breakthrough", "guaranteed", "assured returns", "risk-free", "hurry", "last chance", "don't miss"]
ABSENT = ["Anuj", "Dayita", "Aakriti", "Ranvir", "SwiftKart", "SwasthyaGrid", "HarvestBox", "Dream11", "Paytm", "Liminal", "Satoshi", "Alchemy",
          "TiO2", "Eurogrip", "Setu", "TODO", "TBD", "Lorem", "xyz", "undefined", "NaN", "Rs ", "Rs.", "ChatGPT"]
TEAM = {"name": "TEAM IDEAFORGE", "rows": [["Harsh Kawatra", "Delhi Technological University", "Team Leader"],
                                          ["Gursimran Kaur", "Guru Gobind Singh Indraprastha University", "Member"]]}
MUSTK = ["pp", "inc", "cash", "cpa", "rate26", "rate_end", "sal_idle_sh", "hash", "paid_n"]
MEM = None  # the planning-time harness sets this to a dict so that nothing touches the disk
def rdx(p): return io.open(p, encoding="utf-8").read().replace("\r", "")
def has(rel): return (MEM is not None and rel in MEM) or (DECK / rel).exists()
def rd(rel): return MEM[rel] if (MEM is not None and rel in MEM) else rdx(DECK / rel)
def wr(rel, t, quiet=False):
    if MEM is not None: MEM[rel] = t
    else:
        p = DECK / rel; p.parent.mkdir(parents=True, exist_ok=True); io.open(p, "w", encoding="utf-8", newline=N).write(t)
    if not quiet: print("wrote", rel, len(t))
def vals(): return json.loads(rd("values.js")[len("const V = "):].rstrip().rstrip(";"))
def r2mock(m):
    for a, b in [
        ('if (measure(cand, fam, size) <= width || !line) line = cand; else { out.push(line); line = wd; } }',
         'if (measure(cand, fam, size) <= width) line = cand; else { if (line) out.push(line); line = wd; let k = Math.ceil(measure(wd, fam, size) / Math.max(1, width)); while (k-- > 1) out.push(wd); } }'),
        ('setRangeFontName() {}', 'setRangeFontName(a, b, f) { if (f && f.style === "Bold") { this._bold = true; this._reflow(); } }'),
        ('_fam() { return this.fontName.family + "|" + this.fontName.style; }',
         '_fam() { return this.fontName.family + "|" + (this._bold && this.fontName.family === "Inter" ? "Bold" : this.fontName.style); }'),
        ('/BIBLIO|FINEPRINT/.test(t.name || "")', '/BIBLIO|FINEPRINT/.test(t.name || "") || (t.name === "SEC" && t.fontSize >= 18)')]:
        assert m.count(a) == 1, ("r2mock", a[:50], m.count(a)); m = m.replace(a, b)
    return m
def pre():
    t = rdx(LIB)
    for f in ("const C = {", "const HG=[", "function lineChart(", "function logoSlot(", "function layered(", "function panel(", "function vBars(",
              "function hBars(", "function waterfall(", "function rt(", "function wipe(", "function srcLine(", "function measureW(", "function hcell("):
        assert t.count(f) == 1, f
    for f in ("_x2.js", "_x3.js", "metrics.json"): wr(f, rdx(SB / f), True)
    pal = rd("_palette.js").strip(); k = pal.index("const HG=["); a = t.index("const C = {"); b = t.index("};", a) + 2; h0 = t.index("const HG=["); h1 = t.index("];", h0) + 2
    ext = rd("_extras.js"); assert ext.count("function teamBT(") == 1 and ext.count("function skelBT(") == 1 and ext.count("function actorL(") == 1
    wr("preamble.js", t[:a] + pal[:k].strip() + t[b:h0] + pal[k:] + t[h1:] + N + ext)
    m, c1 = re.subn(r"const \[pre, vals, slide, num\] = process\.argv\.slice\(2\);\nconst code = [^\n]*\n", "const code = CODE_JSON;\n", rdx(MOCKSRC))
    c2 = m.count("/LOGO:/.test("); m = m.replace("/LOGO:/.test(", "/LOGO:|IMG:/.test(")
    adv = rd("metrics.json").strip(); assert set(json.loads(adv)) == {"Poppins|Bold", "Poppins|ExtraBold", "Inter|Semi Bold", "Inter|Bold"}
    c3 = m.count("function cw(ch, fam) {"); c4 = m.count("let warnings_global = [];")
    m = m.replace("function cw(ch, fam) {", "const ADV = " + adv + ";\nfunction cw(ch, fam) { const a = ADV[fam]; if (a && a[ch] !== undefined) return a[ch] * 1.02;")
    m = m.replace("let warnings_global = [];", ROT + "\nlet warnings_global = [];")
    assert c1 == 1 and c2 == 1 and c3 == 1 and c4 == 1 and "for (let i = 1; i <= 11; i++)" in m, (c1, c2, c3, c4); m = r2mock(m); wr("mock_figma.js", m)
    V = json.loads(rd("values.json")); V["team"] = TEAM; V["must"] = [V[k] for k in MUSTK]
    wr("values.js", "const V = " + json.dumps(V, ensure_ascii=False) + ";")
def derive(only=None):
    """Apply deck/overrides.json ({"exact old string": "new string"}) to the slide files and write deck/derived/sNN.js."""
    ov = json.loads(rd("overrides.json")) if has("overrides.json") else {}; used = set()
    for n in ALL:
        s = rd("slides/s%02d.js" % n)
        for a, b in ov.items():
            if a in s: s = s.replace(a, b); used.add(a)
        wr("derived/s%02d.js" % n, s, True)
    miss = [a for a in ov if a not in used]; assert not miss, ("an override key matches no slide text", miss)
SPLIT = "// ===== PART ====="   # a slide may be split into any number of parts; each later part re-reads the slide by id and never wipes
def compose(n, sid, part=None):
    p = rd("preamble.js") + N + rd("_x2.js") + N + rd("_x3.js"); s = rd("derived/s%02d.js" % n); old = 'getNodeByIdAsync("S%d")' % n; assert s.count(old) >= 1, n
    if part is not None: s = s.split(SPLIT)[part]
    V = vals(); keys = set(re.findall(r"\bV\.([A-Za-z_][A-Za-z0-9_]*)", p + s)); miss = keys - set(V); assert not miss, ("unknown V keys", n, miss)
    sub = "const V = " + json.dumps({k: V[k] for k in V if k in keys}, ensure_ascii=False) + ";"
    return p + N + sub + N + "const results=[];" + N + s.replace(old, 'getNodeByIdAsync("%s")' % sid) + N + "return {results,warnings};" + N
def parts(n, sid):
    s = rd("derived/s%02d.js" % n); k = s.count(SPLIT)
    return [compose(n, sid, i) for i in range(k + 1)] if k else [compose(n, sid)]
# A node that leaves its parent frame by more than 1 px is flagged (rotated rail labels excepted).
CHK = ("const __S=await figma.getNodeByIdAsync('S%d'); for(const q of __S.findAll(()=>true)){ const p=q.parent; if(!p||p.type==='SLIDE'||q._rt) continue; "
       "if(q.x<-1||q.y<-1||q.x+q.width>p.width+1||q.y+q.height>p.height+1) warnings.push('childOut: '+String(q.name||q.type).slice(0,30)+' in '+String(p.name||'').slice(0,40)+' at '+Math.round(q.x)+','+Math.round(q.y)+' size '+Math.round(q.width)+'x'+Math.round(q.height)+' parent '+Math.round(p.width)+'x'+Math.round(p.height)); }")
def mock(only=None):
    derive(only); ok = True; m = rd("mock_figma.js")
    for n in ALL:
        if only and n not in only: continue
        code = compose(n, "S%d" % n).replace("return {results,warnings};", (CHK % n) + N + "return {results,warnings};")
        r = subprocess.run(["node", "-"], input=m.replace("CODE_JSON", json.dumps(code)), capture_output=True, text=True, encoding="utf-8")
        out = r.stdout + r.stderr; lens = [len(c) for c in parts(n, "S%d" % n)]; good = "warnings: []" in out and "ISSUES 0" in out and max(lens) < 49900; ok = ok and good
        print("s%02d" % n, "OK" if good else "FAIL", lens, "|", " | ".join(l.strip() for l in out.splitlines() if l.strip())[:(220 if good else 6000)].encode("ascii", "replace").decode())
    return ok
def bind(only=None):
    derive(); ids = json.loads(rd("slide-ids.json")); V = vals(); v1 = rd("_v1.js"); sw = rd("_sweeps.js")
    assert v1.count("const ids=IDS;") == 1 and sw.count("const ids=IDS;") == 1 and sw.count("MUSTLIST") == 1 and len(ids) == NS
    for n in ALL:
        if only and n not in only: continue
        cs = parts(n, ids["S%d" % n])
        for i, code in enumerate(cs):
            assert len(code) < 50000, (n, i, len(code)); wr(("build/slide_%02d.js" % n) if len(cs) == 1 else ("build/slide_%02d_%d.js" % (n, i + 1)), code)
        wr("build/v1_%02d.js" % n, v1.replace("const ids=IDS;", "const ids=%s;" % json.dumps([ids["S%d" % n]])))
    allids = json.dumps([ids["S%d" % n] for n in ALL])
    wr("build/v1_all.js", v1.replace("const ids=IDS;", "const ids=%s;" % allids))
    wr("build/sweeps.js", sw.replace("const ids=IDS;", "const ids=%s;" % allids).replace("MUSTLIST", json.dumps(V["must"], ensure_ascii=False)))
    wr("build/slots.js", "const ids=%s; const out=[]; for(const id of ids){ const s=await figma.getNodeByIdAsync(id); s.findAll(n=>n.name.startsWith('LOGO: ')||n.name.startsWith('IMG: ')).forEach(n=>out.push({slide:s.name,id:n.id,name:n.name,w:Math.round(n.width),h:Math.round(n.height)})); } return out;" % allids)
def copy():
    derive(); m = rd("mock_figma.js"); out = ["# Slide copy: every text node on every slide, read from the offline mock", ""]; bad = []
    for n in ALL:
        dump = "const __s=await figma.getNodeByIdAsync('S%d'); console.log('@@T'+JSON.stringify(__s.findAll(q=>q.type==='TEXT').map(t=>t.characters)));" % n
        code = compose(n, "S%d" % n).replace("return {results,warnings};", dump + N + "return {results,warnings};")
        r = subprocess.run(["node", "-"], input=m.replace("CODE_JSON", json.dumps(code)), capture_output=True, text=True, encoding="utf-8")
        tl = [l for l in r.stdout.splitlines() if l.startswith("@@T")]; texts = json.loads(tl[0][3:]) if tl else ["(no output)"]
        out += ["## S%d" % n, ""] + ["%d. %s" % (i + 1, x.replace("\n", " / ")) for i, x in enumerate(texts)] + [""]
        for x in texts:
            low = x.lower()
            if re.search("[—–]", x): bad.append((n, "dash", x[:60]))
            if "?" in x or "!" in x: bad.append((n, "question or exclamation", x[:60]))
            bad += [(n, "banned " + b, x[:60]) for b in BANW if b in low]
            bad += [(n, "absent " + a, x[:60]) for a in ABSENT if a in x]
    wr("slide-copy.md", N.join(out) + N); print("copy issues", len(bad))
    for b in bad: print("  ", b)
    return not bad
SHOTS = None  # output folder for previews; defaults to deck/shots
def preview(only=None):
    """Offline layout preview on a white canvas: deck/shots/preview_NN.png (layout check only; needs Pillow and fontTools)."""
    import importlib.util
    from PIL import Image
    spec = importlib.util.spec_from_file_location("pv", SB / "preview.py"); pv = importlib.util.module_from_spec(spec); spec.loader.exec_module(pv)
    F = pv.Fonts(json.loads(rd("metrics.json"))); m = rd("mock_figma.js"); i = m.rindex("})();"); m = m[:i] + pv.DUMP + m[i:]; derive()
    od = pathlib.Path(SHOTS) if SHOTS else DECK / "shots"; od.mkdir(parents=True, exist_ok=True)
    for n in ALL:
        if only and n not in only: continue
        r = subprocess.run(["node", "-"], input=m.replace("CODE_JSON", json.dumps(compose(n, "S%d" % n))), capture_output=True, text=True, encoding="utf-8")
        tj = [l for l in r.stdout.splitlines() if l.startswith("TREE_JSON")]
        if not tj: print("no tree for slide", n, r.stderr[-400:]); continue
        img = Image.new("RGB", (1920, 1080), "white")
        for k in json.loads(tj[0][9:])["k"]: pv.draw(img, F, k, 0, 0)
        out = od / ("preview_%02d.png" % n); img.save(out); print("wrote", out)
def main(a):
    only = set(int(x) for x in a[1:]) or None
    if a[0] == "preview": preview(only)
    if a[0] == "pre": pre()
    elif a[0] == "mock": sys.exit(0 if mock(only) else 1)
    elif a[0] == "bind": bind(only)
    elif a[0] == "copy": sys.exit(0 if copy() else 1)
if __name__ == "__main__": main(sys.argv[1:])
```

<!-- FILE: deck/_palette.js -->
```js
const C = {
  primary:{r:0.114,g:0.310,b:0.639}, primaryDeep:{r:0.043,g:0.165,b:0.388},
  accent:{r:0.961,g:0.718,b:0.0}, alert:{r:0.843,g:0.149,b:0.239},
  tint:{r:0.863,g:0.906,b:0.969}, alertTint:{r:0.984,g:0.878,b:0.890},
  blue:{r:0.184,g:0.435,b:0.839}, blueDeep:{r:0.071,g:0.231,b:0.478}, blueTint:{r:0.890,g:0.925,b:0.980},
  good:{r:0.118,g:0.541,b:0.298}, goodTint:{r:0.867,g:0.949,b:0.898}, accentTint:{r:1,g:0.957,b:0.820},
  ink:{r:0.039,g:0.039,b:0.039}, surface:{r:0.929,g:0.929,b:0.929},
  surfaceAlt:{r:0.965,g:0.965,b:0.965}, white:{r:1,g:1,b:1}
};
const HG=[null,{r:0.918,g:0.945,b:0.984},{r:0.773,g:0.843,b:0.949},{r:0.561,g:0.690,b:0.890},{r:0.290,g:0.482,b:0.784},{r:0.043,g:0.165,b:0.388}];
const HR=[null,{r:1,g:0.945,b:0.949},{r:0.976,g:0.788,b:0.812},{r:0.933,g:0.498,b:0.549},{r:0.843,g:0.149,b:0.239}];
```

<!-- FILE: deck/_extras.js -->
```js
// ===== ARTHIK KHAYAL DECK EXTRAS (from the Space and Beyond extras) =====
const RIBN=["SUMMARY","DIAGNOSIS","STRATEGY","IMPACT","EXECUTION"];
const RIBAP=["A1 MODEL","A2 ASSUMPTIONS","A3 RULES","A4 SHORT FORMS AND SOURCES"];
const ARCS=true;
function ribbonBT(s,active,labels){ const y=40,h=60,n=labels.length; let size=24;
  let tw=labels.map(l=>measureW(s,"Poppins","Bold",size,l));
  const fits=pad=>tw.reduce((a,b)=>a+b,0)+pad*n+26*(n-1)<=1792;
  let pad=64; while(!fits(pad)&&pad>44) pad-=4;
  if(!fits(pad)){ size=22; tw=labels.map(l=>measureW(s,"Poppins","Bold",size,l)); pad=64; while(!fits(pad)&&pad>44) pad-=4; }
  if(!fits(pad)) warnings.push("ribbon too wide");
  const widths=tw.map(w=>Math.ceil(w+pad)), used=widths.reduce((a,b)=>a+b,0), gap=n>1?Math.min(80,Math.max(26,(1792-used)/(n-1))):0;
  let x=64; const bxs=[];
  for(let i=0;i<n;i++){ const w=widths[i], act=i===active;
    if(act) addRect(s,x+8,y+8,w,h,C.accent,C.ink,2.5);
    addRect(s,x,y,w,h,act?C.primaryDeep:C.accent,C.ink,2);
    addText(s,"Poppins","Bold",size,act?C.white:C.ink,labels[i],x,y+Math.round((h-size*1.5)/2),w,Math.round(size*1.5),"CENTER","CENTER");
    addEllipse(s,x+3,y+h/2-7,14,14,C.white,C.ink,2); addEllipse(s,x+w-17,y+h/2-7,14,14,C.white,C.ink,2);
    bxs.push({x,w}); x+=w+gap; }
  for(let i=0;i<n-1;i++) addWireH(s,bxs[i].x+bxs[i].w-10,bxs[i+1].x+10,y+h/2,C.ink,2.5); }
function skelBT(s,active,counter,chip,chipW,title,source,o){ o=o||{}; wipe(s);
  ribbonBT(s,active,o.labels||RIBN);
  addChip(s,64,118,chipW,56,chip,C.primary,C.white,22);
  const cw=o.counterW||156; addChip(s,1856-cw,118,cw,56,counter,C.primaryDeep,C.white,24);
  const t=addText(s,"Poppins","Bold",40,C.ink,title,64,188,1792,100,"LEFT",undefined,true); t.name="HEADLINE";
  while(t.height>112 && t.fontSize>34){ t.fontSize=t.fontSize-1; }
  if(t.height>112) warnings.push("headline 3 lines: "+counter);
  srcLine(s,source); return t; }
function arc(p,cx,cy,d,a0,a1,fill,inner){ const e=addEllipse(p,cx-d/2,cy-d/2,d,d,fill,C.ink,2);
  try{ e.arcData={startingAngle:a0,endingAngle:a1,innerRadius:inner||0}; }catch(err){ warnings.push("arc failed"); } return e; }
function donut(p,cx,cy,d,segs,inner){ const tot=segs.reduce((a,s)=>a+s.v,0);
  if(!ARCS){ let yy=cy-d/2; segs.forEach(sg=>{ const hh=d*sg.v/tot; addRect(p,cx-d/2,yy,d,hh,sg.c,C.ink,2); yy+=hh; }); return; }
  let a=-Math.PI/2; segs.forEach(sg=>{ const b=a+2*Math.PI*sg.v/tot; arc(p,cx,cy,d,a,b,sg.c,inner===undefined?0.55:inner); a=b; }); }
function arrow(p,x1,y1,x2,y2,color,th){ color=color||C.ink; th=th||2.5; addDiagonalWire(p,x1,y1,x2,y2,color,th);
  const a=Math.atan2(y2-y1,x2-x1); [a+2.6,a-2.6].forEach(b=>addDiagonalWire(p,x2,y2,x2+10*Math.cos(b),y2+10*Math.sin(b),color,th)); }
function callout(p,x,y,w,h,lead,text,o){ o=o||{}; const f=addFrame(p,x,y,w,h,o.fill||C.accentTint,C.ink,2,"CALLOUT");
  rt(f,14,o.py===undefined?10:o.py,w-28,22,lead,text,{color:o.color,leadColor:o.leadColor||C.primaryDeep}); return f; }
function teamBT(p,x,y,cw){ const X=[0,cw[0],cw[0]+cw[1]], rh=54, hh=50, tw=cw[0]+cw[1]+cw[2], rows=V.team.rows;
  const t=addFrame(p,x,y,tw,hh+rh*rows.length,C.white,C.ink,2,"TABLE: team");
  const h=addFrame(t,0,0,tw,hh,C.tint,C.ink,2,"HEAD");
  ["Team Members","Institution","Role"].forEach((l,i)=>addText(h,"Poppins","Bold",22,C.ink,l,X[i]+16,0,cw[i]-24,hh,"LEFT","CENTER"));
  rows.forEach((m,i)=>{ const r=addFrame(t,0,hh+rh*i,tw,rh,i%2?C.surfaceAlt:C.white,C.ink,2,"ROW");
    m.forEach((v,j)=>addText(r,"Inter",j===0?"Bold":"Semi Bold",22,C.ink,v,X[j]+16,0,cw[j]-24,rh,"LEFT","CENTER")); });
  [X[1],X[2]].forEach(vx=>addRect(t,vx-1,0,2,hh+rh*rows.length,C.ink)); return t; }
// Cover strip: event chip, sponsor and organiser logo slots, team chip, a wire with dots.
function coverTop(s){ addChip(s,64,48,640,56,"ARTHIK KHAYAL 2026  |  ECOTECH, USME DTU",C.primaryDeep,C.white,22);
  [["DTU",724,72],["ecotech",812,110],["YES Securities",938,210],["Anthill Ventures",1164,150],["Kae Capital",1330,150]].forEach(l=>logoSlot(s,l[1],40,l[2],72,l[0]));
  addChip(s,1556,48,300,56,V.team.name,C.primaryDeep,C.white,22);
  addWireH(s,64,1856,140,C.ink,2.5); [64,512,960,1408,1856].forEach(cx=>addEllipse(s,cx-8,132,16,16,C.white,C.ink,2)); }
// Image placeholder (people or product shots): grey, dashed, named IMG.
function imgSlot(p,x,y,w,h,label){ const f=addFrame(p,x,y,w,h,C.surfaceAlt,C.primaryDeep,1.5,"IMG: "+label); try{ f.dashPattern=[6,4]; }catch(e){}
  addText(f,"Inter","Semi Bold",14,C.primaryDeep,label,4,0,w-8,h,"CENTER","CENTER",false); return f; }
// Mind-map node with one to three logo slots ("IMG:" prefix makes an image slot), a title and a wrapped sub-line.
function actorL(p,x,y,w,h,brands,title,sub){ const f=addFrame(p,x,y,w,h,C.white,C.ink,2,"NODE "+title); addRect(f,0,0,6,h,C.accent);
  const n=Math.max(1,brands.length), gap=6, bw=(w-28-gap*(n-1))/n;
  brands.forEach((b,i)=>{ const bx0=16+i*(bw+gap); if(b.startsWith("IMG:")) imgSlot(f,bx0,8,bw,56,b.slice(4)); else logoSlot(f,bx0,8,bw,56,b); });
  TL(f,16,68,22,title,{color:C.primaryDeep,maxW:w-28}); sT(f,16,102,w-28,18,sub,{family:"Inter",style:"Semi Bold"}); return f; }
// Heat cells. ynCell for Yes, Part, No; heatN for counts with ascending cut points.
function ynCell(v){ if(v==="Yes") return {t:"Yes",f:HG[3],tc:C.ink}; if(v==="Part") return {t:"Part",f:C.accentTint,tc:C.ink};
  if(v==="No") return {t:"No",f:C.alertTint,tc:C.alert}; return {t:String(v),f:C.white,tc:C.ink}; }
function heatN(v,cuts){ if(!v) return {t:"",f:C.surfaceAlt,tc:C.ink}; let k=1; cuts.forEach((c,i)=>{ if(v>=c) k=i+2; }); k=Math.min(5,k);
  return {t:fmtN(v),f:HG[k],tc:k>=4?C.white:C.ink}; }
function heatP(v){ const k=v>=35?5:(v>=25?4:(v>=15?3:(v>=8?2:1))); return {t:String(v),f:HG[k],tc:k>=4?C.white:C.ink}; }
function rag(p,x,y,w,h,t){ const f=t==="GREEN"?C.good:(t==="AMBER"?C.accent:C.alert);
  return bx(p,x,y,w,h,t,{fill:f,color:t==="AMBER"?C.ink:C.white,fam:"Poppins",st:"Bold",size:18}); }
// Waterfall on a broken axis: totals rise from o.min, steps float; labels at 18 pt.
function wfB(p,x,y,w,h,items,o){ o=o||{}; const sz=18, n=items.length, pitch=w/n, bw=o.bw||Math.min(72,pitch*0.6), lh=o.lh||52, dp=o.dp===undefined?2:o.dp;
  const top=y+Math.ceil(sz*1.25)+6, base=y+h-lh, Y=v=>base-(base-top)*(v-o.min)/(o.max-o.min); addRect(p,x,base,w,2,C.ink); let run=0;
  items.forEach((it,i)=>{ const cx=x+pitch*i+pitch/2, tot=(i===0||i===n-1); let a,b; if(tot){a=o.min;b=it[1];run=it[1];} else {a=run;b=run+it[1];run=b;}
    const y1=Math.min(Y(a),Y(b)), bh=Math.max(3,Math.abs(Y(a)-Y(b)));
    addRect(p,cx-bw/2,y1,bw,bh,tot?C.primaryDeep:C.good,C.ink,1.5);
    sTL(p,0,y1-Math.ceil(sz*1.25)-2,sz,tot?it[1].toFixed(dp)+"%":"+"+it[1].toFixed(dp),{family:"Inter",style:"Bold",color:tot?C.primaryDeep:C.good,centerAt:cx});
    if(i<n-1) addRect(p,cx+bw/2,Y(run)-0.75,pitch-bw,1.5,C.ink);
    sT(p,cx-pitch/2+3,base+4,pitch-6,sz,it[0],{family:"Inter",style:"Bold",align:"CENTER"}); }); return {Y,base,top}; }
// Tornado at 18 pt: red to the bear side, blue to the bull side, a black base line, optional tick labels.
function torS(p,x,y,w,items,baseV,o){ o=o||{}; const lw=o.lw||240, rh=o.rh||30, span=w-lw-10, X=v=>x+lw+span*(v-o.min)/(o.max-o.min);
  items.forEach((it,i)=>{ const ry=y+i*rh; sTL(p,x,ry+Math.round((rh-23)/2),18,it.label,{family:"Inter",style:"Bold",maxW:lw-8});
    const lo=Math.min(it.lo,it.hi), hi=Math.max(it.lo,it.hi);
    addRect(p,X(lo),ry+5,Math.max(2,X(baseV)-X(lo)),rh-10,C.alert,C.ink,1); addRect(p,X(baseV),ry+5,Math.max(2,X(hi)-X(baseV)),rh-10,C.primary,C.ink,1); });
  addRect(p,X(baseV)-1,y-4,2.5,rh*items.length+8,C.ink);
  (o.ticks||[]).forEach(t=>sTL(p,0,y+rh*items.length+6,18,t.toFixed(1),{family:"Inter",style:"Bold",centerAt:X(t)})); return X; }
// A numbered step card with a dark header strip and a wrapped body (18 pt).
function step(p,x,y,w,h,head,who,body,o){ o=o||{}; const f=addFrame(p,x,y,w,h,o.fill||C.white,C.ink,2,"STEP "+head);
  const hz=o.hs||22, hf=addFrame(f,0,0,w,34,o.hfill||C.primaryDeep,C.ink,1.5,"HEAD"); (hz<22?sTL:TL)(hf,10,Math.round((34-hz*1.5)/2),hz,head,{color:o.hc||C.white,maxW:w-20});
  let y2=40; if(who){ const a=sT(f,8,y2,w-16,18,who,{family:"Inter",style:"Bold",color:C.primaryDeep}); y2+=a.height+2; }
  sT(f,8,y2,w-16,18,body,{family:"Inter",style:"Semi Bold"}); return f; }
// Bullet line with a bold lead at 18 pt; returns the next y.
function bl18(p,x,y,w,items,o){ o=o||{}; let cy=y; items.forEach(it=>{ addRect(p,x,cy+6,9,9,o.dot||C.primary,C.ink,1);
  const t=sRT(p,x+18,cy,w-18,18,it[0],it[1],{leadColor:o.lc||C.primaryDeep}); cy+=t.height+(o.gap===undefined?6:o.gap); }); return cy; }
// Small numeral + label tile.
function tile(p,x,y,w,h,num,label,o){ o=o||{}; const f=addFrame(p,x,y,w,h,o.fill||C.white,C.ink,1.5,"TILE");
  TL(f,10,o.ny===undefined?2:o.ny,o.size||26,num,{family:"Poppins",style:"ExtraBold",color:o.color||C.primary,maxW:w-20,min:18});
  sT(f,10,o.ly||40,w-20,18,label,{family:"Inter",style:"Bold",color:o.tc||C.ink}); return f; }
function diamond(p,cx,cy,r,fill){ const sd=r*Math.SQRT2, q=Math.SQRT1_2; const d=figma.createRectangle(); p.appendChild(d); d.resize(sd,sd);
  d.fills=[{type:"SOLID",color:fill}]; d.strokes=[{type:"SOLID",color:C.ink}]; d.strokeWeight=2; d.cornerRadius=0;
  d.relativeTransform=[[q,-q,cx],[q,q,cy-r]]; return d; }
function tick(p,x,y,d){ const f=addFrame(p,x,y,d,d,null,null,0,"ICON: tick"); addEllipse(f,0,0,d,d,C.good,C.ink,1.5);
  addDiagonalWire(f,d*0.25,d*0.53,d*0.43,d*0.71,C.white,3); addDiagonalWire(f,d*0.43,d*0.71,d*0.76,d*0.32,C.white,3); return f; }
function phone(p,x,y,w,h){ const ph=addFrame(p,x,y,w,h,C.ink,C.ink,2,"MOCKUP: phone"); const sc=addFrame(ph,8,14,w-16,h-28,C.white,null,0,"SCREEN");
  addRect(sc,0,0,w-16,30,C.primaryDeep); sTL(sc,8,3,18,"Bank app",{color:C.white}); return sc; }
// ===== END ARTHIK KHAYAL DECK EXTRAS =====
```

<!-- FILE: deck/slides/s01.js -->
```js
{ const s = await figma.getNodeByIdAsync("S1"); wipe(s);
coverTop(s);
TL(s,64,150,112,"ACTIVATION",{family:"Poppins",style:"ExtraBold",maxW:920,min:80});
TL(s,64,326,60,"WITHOUT A BULL MARKET",{family:"Poppins",style:"ExtraBold",color:C.primary,maxW:920,min:44});
T(s,64,420,920,22,"Driving user activation on trading and investing platforms in volatile markets: a strategy for ONL Trade, the digital platform of Trade Private Limited",{family:"Poppins",style:"Bold",color:C.primaryDeep});
const v=layered(s,64,500,920,270,C.primaryDeep,"CARD: verdict");
T(v,24,16,872,24,"OUR ANSWER: SHOW SALARY CUSTOMERS THE ONL ACCOUNT THEY ALREADY HOLD, INSIDE THE BANK, ON SALARY DAY, IN A HOLDINGS CHECK, AT THE RM REVIEW AND AT DHANTERAS, WITH A SMALL MONTHLY ETF INSTALMENT THEY CHOOSE.",{family:"Poppins",style:"Bold",color:C.accent});
T(v,24,166,872,22,"In our model: "+V.pp+" by 31 Jan 2027 ("+V.rate26+" to "+V.rate_end+") and "+V.inc+" more active accounts for "+V.cash+" of cash. No advice, no offers, no paid media, no F&O prompts.",{family:"Inter",style:"Semi Bold",color:C.white});
TL(s,64,786,40,V.team.name,{family:"Poppins",style:"ExtraBold",color:C.primary});
teamBT(s,64,846,[230,520,170]);
sT(s,64,1008,920,18,"harshkawatra11@gmail.com  |  Arthik Khayal 2026, ecotech, USME DTU",{family:"Inter",style:"Bold",color:C.primaryDeep});
srcLine(s,"Source: case Exhibits 1 and 2 | NSE active clients FY26 | team activation model "+V.hash+" | logos identify organisations in the analysis; no partnership or endorsement is implied");
}
// ===== PART =====
{ const s = await figma.getNodeByIdAsync("S1");
const m=addFrame(s,1016,150,840,882,C.white,C.ink,2,"PANEL: mind map");
TL(m,16,10,24,"WHO DECIDES WHETHER AN ACCOUNT GETS USED",{color:C.primary,maxW:808}); addRect(m,16,50,808,2,C.ink);
T(m,16,60,808,22,V.base26+" accounts, "+V.act26+" active: "+V.sal_idle_sh+" of the "+V.idle_l+" idle accounts belong to salary customers of the parent bank.",{family:"Poppins",style:"Bold",color:C.primaryDeep});
const A=[[["YES Bank"],"PARENT BANK","6.28 lakh salary accounts sit with ONL"],[["Zerodha","Groww","Angel One"],"RIVAL BROKERS","set the bar on speed and price"],
  [["ICICI Direct","HDFC Sky","Kotak"],"BANK-LED PEERS","bank, demat and trading together"],[["SEBI","NSE","BSE"],"REGULATORS","no advice, no inducement, ad approval"],
  [["NSE Indices"],"THE MARKET","NSE active clients fell 7% in FY26"],[["IMG:Salaried first-time investor"],"THE CUSTOMER","under 30, risk averse, busy"],
  [["WhatsApp"],"OWNED CHANNELS","bank app, email, SMS, RM, branch"],[["MeitY","Sahamati"],"DATA, CONSENT","DPDP Act 2023 and Rules 2025"]];
const P=[[16,124],[294,124],[572,124],[16,377],[572,377],[16,630],[294,630],[572,630]], W=252, Hh=150, HX=420, HY=452;
P.forEach(q=>addDiagonalWire(m,HX,HY,q[0]+W/2,q[1]+Hh/2,C.ink,2.5));
A.forEach((a,i)=>actorL(m,P[i][0],P[i][1],W,Hh,a[0],a[1],a[2]));
addEllipse(m,HX-105,HY-105,210,210,C.primaryDeep,C.ink,2.5);
TL(m,0,HY-66,26,"ONL TRADE",{color:C.white,centerAt:HX}); TL(m,0,HY-26,26,V.rate26+" ACTIVE",{color:C.accent,centerAt:HX});
sTL(m,0,HY+18,18,V.base26+" accounts",{family:"Inter",style:"Bold",color:C.white,centerAt:HX});
[["FIND","bank app tile"],["FUND","same bank"],["START","one ETF unit"]].forEach((r,i)=>{ const x=16+278*i;
  const f=addFrame(m,x,800,252,36,i===2?C.accent:C.tint,C.ink,1.5,"CHIP"); sRT(f,10,7,232,18,r[0]+": ",r[1],{leadColor:C.primaryDeep});
  if(i<2) arrow(m,x+254,818,x+276,818,C.ink,2); });
fine(m,16,850,808,"Logos identify organisations referred to in the analysis; no partnership or endorsement is implied.");
results.push({slide:s.id,total:s.findAll(()=>true).length,top:s.children.length}); }
```

<!-- FILE: deck/slides/s02.js -->
```js
{ const s = await figma.getNodeByIdAsync("S2");
skelBT(s,0,"1 / 5","EXECUTIVE SUMMARY",360,"ONL can add "+V.pp+" of activation by 31 January 2027 by meeting salary customers inside the bank, for "+V.cash+" of cash and with no offers or F&O prompts",
  "Source: case Exhibits 1 and 2 | NSE active clients and demat accounts, Sep 2026 | SEBI F&O study FY26 | team activation model "+V.hash+" (T8, T10, T11, T14, T17)");
const a=layered(s,64,306,1792,56,C.primaryDeep,"CARD: answer");
TL(a,16,10,22,"OUR ANSWER",{color:C.accent});
T(a,200,13,1576,22,"Show customers their forgotten ONL account where they already bank: on salary day, in a holdings check, at the RM review and at Dhanteras.",{family:"Inter",style:"Semi Bold",color:C.white});
const p1=pnl(s,64,378,500,330,"ONL AGAINST THE MARKET, %");
const bx0=30, bw=78, BASE=290, TOP=112, Yv=v=>BASE-(BASE-TOP)*v/42;
addRect(p1,14,BASE,472,2,C.ink);
[["ONL 2025",V.rate25_n,C.alert],["ONL 2026",V.rate26_n,C.alert],["India 2026",19.2,C.primary]].forEach((r,i)=>{ const x=bx0+112*i;
  addRect(p1,x,Yv(r[1]),bw,BASE-Yv(r[1]),r[2],C.ink,1.5); sTL(p1,0,Yv(r[1])-26,18,r[1].toFixed(1)+"%",{family:"Inter",style:"Bold",centerAt:x+bw/2,color:r[2]});
  sTL(p1,0,BASE+4,18,r[0],{family:"Inter",style:"Bold",centerAt:x+bw/2}); });
const xi=bx0+336; addRect(p1,xi,Yv(40),bw,Yv(20)-Yv(40),C.goodTint,C.good,1.5); ghost(p1,xi,Yv(20),bw,BASE-Yv(20),C.good);
sTL(p1,0,Yv(40)-26,18,"20 to 40%",{family:"Inter",style:"Bold",centerAt:xi+bw/2,color:C.good}); sTL(p1,0,BASE+4,18,"Industry",{family:"Inter",style:"Bold",centerAt:xi+bw/2});
dashedH(p1,14,Yv(V.rate26_n),472,C.alert,1.5);
note(p1,14,46,472,"Flat: ","a year of messages moved it 0.04 pp",{fill:C.alertTint});
const p2=pnl(s,580,378,440,330,"EXHIBIT 1 AS A FUNNEL");
const FW=[330,262,196,150], FC=[C.primaryDeep,C.primary,HG[3],C.accent];
V.fun.forEach((r,i)=>{ const y=48+62*i, w=FW[i], x=14+(330-w)/2; const f=addFrame(p2,x,y,w,56,FC[i],C.ink,1.5,"TIER");
  TL(f,0,1,22,r[0],{family:"Poppins",style:"ExtraBold",color:i<2?C.white:C.ink,centerAt:w/2}); sTL(f,0,34,18,r[1],{family:"Inter",style:"Semi Bold",color:i<2?C.white:C.ink,centerAt:w/2});
  if(i>0) sTL(p2,352,y-14,18,V.fun_drop[i-1],{family:"Poppins",style:"Bold",color:C.alert}); });
sT(p2,14,298,412,18,V.never+" in 100 accounts: no trade in a year",{family:"Inter",style:"Bold",color:C.alert});
const p3=pnl(s,1036,378,820,330,"THE TARGET, AND WHERE WE LAND, pp");
const L=40,R=780, X=v=>L+(R-L)*v/4.5, YB=118;
addRect(p3,X(2),YB-34,X(3)-X(2),68,C.accentTint,C.accent,1.5); sTL(p3,X(3)+8,YB-58,18,"the brief: +2.0 to +3.0",{family:"Inter",style:"Bold",color:C.primaryDeep});
addRect(p3,L,YB-2,R-L,4,C.ink); [0,1,2,3,4].forEach(v=>{ addRect(p3,X(v)-1,YB+8,2,10,C.ink); sTL(p3,0,YB+40,18,String(v),{family:"Inter",style:"Bold",centerAt:X(v)}); });
[["Status quo",0.04,C.surface,22,-1],["Bear",V.pp_bear_n,C.alert,26,1],["Base",V.pp_n,C.primaryDeep,40,-1],["Bull",V.pp_bull_n,C.good,26,1]].forEach(m=>{
  addEllipse(p3,X(m[1])-m[3]/2,YB-m[3]/2,m[3],m[3],m[2],C.ink,2);
  const lab=m[0]+" "+(m[1]>=0?"+":"")+m[1].toFixed(m[0]==="Status quo"?2:1); sTL(p3,0,m[4]<0?YB-m[3]/2-26:YB+m[3]/2+2,18,lab,{family:"Inter",style:"Bold",centerAt:Math.max(L+60,X(m[1]))}); });
sTL(p3,14,190,18,"Where the "+V.inc+" extra actives come from, base case",{family:"Inter",style:"Bold",color:C.primaryDeep});
const PT=[["Salary day",V.lev[0],C.primaryDeep],["RM review",V.lev[2],C.primary],["Holdings",V.lev[1],HG[3]],["Dhanteras",V.lev[3],C.accent],["New",V.new_n,C.good],["Warm",V.warm_n,C.alert],["Workplace",V.lev[4],HG[2]]];
let sx=14; const tot=PT.reduce((a,r)=>a+r[1],0);
PT.forEach(r=>{ const w=792*r[1]/tot; addRect(p3,sx,218,w,40,r[2],C.ink,1); if(w>70) sTL(p3,0,227,18,fmtN(r[1]),{family:"Inter",style:"Bold",color:(r[2]===C.accent||r[2]===HG[3]||r[2]===HG[2])?C.ink:C.white,centerAt:sx+w/2}); sx+=w; });
let lx=14; PT.forEach((r,i)=>{ lx=lgS(p3,lx,272,r[2],r[0]); });
}
// ===== PART =====
{ const s = await figma.getNodeByIdAsync("S2");
[["THE BRIEF ASKS",100,C.primaryDeep],["THE OBVIOUS MOVE",345,C.alert],["WHAT WE DO",715,C.good],["THE PROOF",1095,C.primaryDeep],["THE RESULT",1545,C.primaryDeep]].forEach(h=>TL(s,h[1],724,22,h[0],{color:h[2]}));
addRect(s,60,760,1796,2,C.ink); addRect(s,73,772,2.5,252,C.primaryDeep);
const NO=(x,y)=>{ const f=addFrame(s,x,y,28,28,null,null,0,"ICON: no"); addEllipse(f,0,0,28,28,C.alert,C.ink,1.5); addDiagonalWire(f,9,9,19,19,C.white,3); addDiagonalWire(f,19,9,9,19,C.white,3); };
const bar=(x,y,lab,v,max,col,txt)=>{ sTL(s,x,y,18,lab,{family:"Inter",style:"Bold",maxW:150}); const w=Math.max(3,Math.round(200*v/max)); addRect(s,x+156,y+3,w,18,col,C.ink,1); sTL(s,x+164+w,y,18,txt,{family:"Inter",style:"Bold"}); };
const ROW=(yR,n,A,B,Cc,Pt,Pb,E)=>{ addBadge(s,60,yR+4,28,n,C.primaryDeep,C.white);
  TL(s,100,yR,22,A[0],{color:C.primaryDeep,maxW:232}); sT(s,100,yR+36,232,18,A[1],{family:"Inter",style:"Semi Bold"});
  NO(345,yR+4); const b=TL(s,381,yR,22,B[0],{color:C.alert,maxW:320}); addRect(s,b.x,b.y+b.height/2,b.width,2.5,C.alert); sT(s,345,yR+38,350,18,B[1],{family:"Inter",style:"Semi Bold"});
  tick(s,715,yR+4,28); TL(s,751,yR,22,Cc[0],{color:C.good,maxW:330}); sT(s,715,yR+38,362,18,Cc[1],{family:"Inter",style:"Semi Bold"});
  sTL(s,1095,yR,18,Pt,{family:"Inter",style:"Bold",color:C.primaryDeep}); Pb.forEach((r,i)=>bar(1095,yR+26+24*i,r[0],r[1],r[2],r[3],r[4]));
  TL(s,1545,yR-4,40,E[0],{family:"Poppins",style:"ExtraBold",color:E[2],maxW:300,min:30}); sTL(s,1545,yR+58,18,E[1],{family:"Inter",style:"Bold",maxW:310}); };
ROW(772,1,["ACTIVATE","+200 to +300 bps in 3 months"],["More market messages","a year of them moved it 0.04 pp"],["Meet it in the bank","salary day, holdings check, RM review, Dhanteras"],
  "Activation rate, %",[["Today",V.rate26_n,18,C.alert,V.rate26],["31 Jan 2027",V.rate_end_n,18,C.good,V.rate_end]],[V.pp,"bear "+V.pp_bear+", bull "+V.pp_bull,C.good]);
dashedH(s,60,857,1796,C.ink,2);
ROW(862,2,["SPEND LITTLE","lean budget, owned assets first"],["Buy users with paid media",V.paid_cpa+" for each activated account"],["Use rails the bank owns","app, statements, RM, WhatsApp, branch"],
  "Extra actives for "+V.cash,[["Bank moments",V.inc_n,V.inc_n,C.good,V.inc],["Paid media",V.paid_nn,V.inc_n,C.alert,V.paid_n]],[V.cpa,"cash each; "+V.ratio+"x paid media",C.alert]);
dashedH(s,60,947,1796,C.ink,2);
ROW(952,3,["STAY COMPLIANT","SEBI, consent, no dark patterns"],["Offers, contests, F&O push","88.5% of under-30 F&O traders lost money"],["Facts only, consent first","no advice, no returns, no urgency"],
  "Checks passed, out of 5",[["Past messages",2,5,C.alert,"2"],["Our messages",5,5,C.good,"5"]],["0","offers, contests, F&O prompts",C.primaryDeep]);
results.push({slide:s.id,total:s.findAll(()=>true).length,top:s.children.length}); }
```

<!-- FILE: deck/slides/s03.js -->
```js
{ const s = await figma.getNodeByIdAsync("S3");
skelBT(s,1,"2 / 5","DIAGNOSIS",260,V.sal_idle_sh+" of the "+V.idle_l+" idle accounts belong to salary customers, and a year of market-led messages left activation flat at "+V.rate26,
  "Source: case Exhibits 1, 2a, 2b and funnel table | NSE active clients FY26 and Sep 2026 | demat accounts, Sep 2026 (24.06 crore) | SEBI F&O study FY26 | team model "+V.hash+" (T2 to T8)");
rail(s,64,310,240,"THE BASE",C.primary); rail(s,64,562,232,"THE FUNNEL",C.alert); rail(s,64,806,226,"WHY IT STALLS",C.primaryDeep);
const p1=pnl(s,116,310,650,240,"ACTIVE BY TRAILING WINDOW, SEP 2026, %");
hgrid(p1,14,46,V.seg,["T12","T9","T6","T3","T1","YoY"],V.r26.map((r,i)=>r.map(v=>heatP(v)).concat([(()=>{ const d=r[0]-V.r25[i][0]; return {t:(d>0?"+":(d<0?"−":""))+Math.abs(d)+" pp",f:d<0?C.alertTint:C.goodTint,tc:d<0?C.alert:C.good}; })()])),
  {lw:166,cw:76,rh:26,hh:26,corner:"Segment",name:"cohort heat"});
const p2=pnl(s,778,310,500,240,"IDLE ACCOUNTS BY SEGMENT");
const mx=Math.max(...V.idle_seg);
V.seg.forEach((g,i)=>{ const y=50+28*i, w=Math.max(3,Math.round(226*V.idle_seg[i]/mx));
  sTL(p2,14,y,18,g,{family:"Inter",style:"Bold",maxW:146}); addRect(p2,164,y+3,w,18,i===4?C.alert:C.primary,C.ink,1); sTL(p2,170+w,y,18,V.idle_seg_f[i],{family:"Inter",style:"Bold",color:i===4?C.alert:C.ink}); });
const p3=pnl(s,1290,310,566,240,"SHARE OF THE BASE BY SEGMENT, %");
const SC=[C.primaryDeep,C.primary,HG[3],C.accent,C.alert,HG[2]];
[["Sep 2025",V.sh25s,V.base25_f],["Sep 2026",V.sh26s,V.base26]].forEach((r,j)=>{ const y=52+56*j; sTL(p3,14,y+8,18,r[0],{family:"Inter",style:"Bold"}); let x=104;
  r[1].forEach((v,i)=>{ const w=438*v/100; addRect(p3,x,y,Math.max(1,w),40,SC[i],C.ink,1); if(i===4){ sTL(p3,0,y+8,18,v.toFixed(1)+"%",{family:"Inter",style:"Bold",color:C.white,centerAt:x+w/2}); } x+=w; }); });
const LG=["Prestige","Elite","Elevate","Preferred","Salary","Credit card"]; let lx=14;
LG.forEach((g,i)=>{ if(i===3) lx=14; lx=lgS(p3,lx,i<3?166:192,SC[i],g); });
sT(p3,14,216,538,18,"Salary accounts grew 24% in a year; credit card fell 34%",{family:"Inter",style:"Bold",color:C.alert});
}
// ===== PART =====
{ const s = await figma.getNodeByIdAsync("S3");
const p4=pnl(s,116,562,700,232,"THE FUNNEL, AND WHERE PAST EFFORT LANDED");
const ST=["Account opened","First login","Funded","First order","Habit"], LK=["healthy volumes","account forgotten","separate funding step","fear of loss","no routine"];
ST.forEach((t,i)=>{ const x=14+136*i; bx(p4,x,46,124,52,t,{fill:(i===1||i===2)?C.alertTint:C.white}); if(i<4) arrow(p4,x+124,72,x+135,72,C.ink,2);
  sT(p4,x,104,124,18,LK[i],{family:"Inter",style:"Semi Bold",color:(i===1||i===2)?C.alert:C.ink,align:"CENTER"}); });
const g=ghost(p4,14,158,396,70,C.alert); sT(p4,24,166,376,18,"Stages 2 and 3: nothing in ONL's plan aimed here",{family:"Inter",style:"Bold",color:C.alert});
bx(p4,422,158,264,70,"ONL's effort: market updates, research calls, offers, literacy",{fill:C.accentTint,size:18});
const p5=pnl(s,828,562,500,232,"THE QUARTER IN ACCOUNTS");
tbl(p5,14,46,[300,172],["Item","Accounts"],[["Active on 30 Sep 2026",V.act26],["Roll off next quarter",V.roll_lo+" to "+V.roll_hi],["Active 31 Jan 2027, no change",V.bau_n],["Needed for +200 bps",V.need200],["Needed for +300 bps",V.need300]],
  {hh:26,rh:25,name:"quarter",align:["LEFT","RIGHT"]});
note(p5,14,199,472,"So what: ","about 11,500 roll off a quarter");
const p6=pnl(s,1340,562,516,232,"THE MARKET AROUND ONL");
tile(p6,14,46,240,86,"−7%","NSE active clients FY26",{color:C.alert,size:30,ly:50}); tile(p6,262,46,240,86,"19.2%","active ratio, India",{size:30,ly:50});
tile(p6,14,140,240,86,V.rate26,"ONL, Sep 2026",{color:C.alert,size:30,ly:50}); tile(p6,262,140,240,86,"87.7%","F&O traders lost, FY26",{color:C.alert,size:30,ly:50});
const p7=pnl(s,116,806,880,226,"FIVE WHYS ON ONE IDLE SALARY ACCOUNT");
["No order in a year: it came with the salary account","It was never chosen, so it is not thought of as theirs","ONL messages arrive as market news, easy to ignore",
 "In a falling market, 'stay invested' sounds like risk","No ONL message reaches them in the bank app"].forEach((w,i)=>{ const x=14+170*i;
  const f=addFrame(p7,x,46,160,132,i===4?C.accent:C.white,C.ink,2,"WHY"); TL(f,8,2,22,"WHY "+(i+1),{color:C.primaryDeep}); sT(f,8,36,144,18,w,{family:"Inter",style:"Semi Bold"});
  if(i<4) arrow(p7,x+161,112,x+169,112,C.ink,2); });
note(p7,14,184,852,"Root cause: ","customers stall before they ever log in.");
const p8=pnl(s,1008,806,848,226,"FIVE BIASES, AND THE DESIGN ANSWER");
tbl(p8,14,44,[190,290,340],["Bias","What it does here","Our design answer"],[["Inattention","account is out of sight","show it in the bank app"],["Loss aversion","falling prices feel like losses","gold, liquid, index ETFs, small"],
  ["Present bias","starting is always next month","act once, on salary day"],["Status quo","idle stays idle","an instalment they set and pause"],["Mental accounting","salary is spending money","a set-aside right after salary"]],{hh:26,rh:30,name:"biases"});
results.push({slide:s.id,total:s.findAll(()=>true).length,top:s.children.length}); }
```

<!-- FILE: deck/slides/s04.js -->
```js
{ const s = await figma.getNodeByIdAsync("S4");
skelBT(s,2,"3 / 5","THE STRATEGY",300,"Meet the account inside four moments the bank already owns: salary day, a holdings check, the RM review and Dhanteras, with no advice and no offers",
  "Source: SEBI finfluencer rules, Aug 2024 | NSE ad code, Feb 2023 | NSE inducement circulars | DPDP Rules 2025 | CCPA dark patterns 2023 | RBI conduct directions 2026 | team model "+V.hash+" (T10, T17 to T19)");
const a=layered(s,64,306,1792,56,C.primaryDeep,"CARD: conclusively");
TL(a,16,10,22,"CONCLUSIVELY",{color:C.accent});
T(a,220,13,1556,22,"Selling the market harder tops out at "+V.opt_s[0]+" of 5; meeting the account inside the bank scores "+V.opt_s[7]+" and clears every guardrail.",{family:"Inter",style:"Semi Bold",color:C.white});
rail(s,64,378,300,"THE CHOICE",C.primary); rail(s,64,690,342,"THE BUILD",C.primaryDeep);
const p1=pnl(s,116,378,662,300,"EIGHT OPTIONS, ONE TEST, SCORED 1 TO 5");
hgrid(p1,14,44,V.opt.map(o=>o[0]),["Lift","Rules","Fall","Cost","Ships","Score"],V.opt.map((o,k)=>o[1].map(v=>hcell(v)).concat([k===7?{t:V.opt_s[k],f:C.primaryDeep,tc:C.accent}:{t:V.opt_s[k],f:C.white,tc:C.ink}])),
  {lw:250,cw:64,rh:24,hh:24,corner:"Option",name:"options"});
note(p1,14,266,634,"","Ours leads under all four weight sets tested (T18)",{fill:C.tint});
const p2=pnl(s,790,378,738,300,"EXTRA ACTIVES BY SEGMENT AND MOMENT");
const CUT=[100,500,1500,3000], RL=["Prestige","Elite","Elevate","Preferred","Salary","Card"];
hgrid(p2,14,44,RL.map((g,i)=>g+" "+V.idle_seg_f[i]).concat(["Total"]),["Salary day","Holdings","RM review","Dhanteras","Workplace"],
  V.rows.map(r=>r.map(v=>heatN(v,CUT))).concat([V.lev.map(v=>({t:fmtN(v),f:C.primaryDeep,tc:C.accent}))]),{lw:190,cw:104,rh:24,hh:24,corner:"Idle pool",name:"lever heat"});
note(p2,14,244,710,"","Plus "+V.warm+" warm-cohort and "+V.new+" new-account first orders; each idle account is counted once.",{fill:C.tint});
const p3=pnl(s,1540,378,316,300,"FIVE CHECKS");
[["No advice","SEBI adviser rules"],["No return claims","SEBI, NSE ad code"],["No inducement","NSE circulars"],["Consent first","DPDP Rules 2025"],["No dark patterns","CCPA 2023, RBI 2026"]].forEach((r,i)=>{ const y=50+48*i;
  tick(p3,14,y+4,30); sTL(p3,54,y,18,r[0],{family:"Inter",style:"Bold",color:C.primaryDeep,maxW:248}); sTL(p3,54,y+22,18,r[1],{family:"Inter",style:"Semi Bold",maxW:248}); });
}
// ===== PART =====
{ const s = await figma.getNodeByIdAsync("S4");
const p4=pnl(s,116,690,560,342,"THE BANK APP, ON TWO DAYS");
const s1=phone(p4,14,46,256,260); sTL(s1,10,38,18,"Salary credited",{family:"Inter",style:"Bold",color:C.good});
const c1=addFrame(s1,10,66,220,160,C.tint,C.ink,1.5,"CARD: mock salary");
sT(c1,8,6,204,18,"ONL account: open",{family:"Inter",style:"Bold",color:C.primaryDeep}); sT(c1,8,34,204,18,"Start an instalment",{family:"Inter",style:"Semi Bold"});
sT(c1,8,62,204,18,"Gold, liquid, index",{family:"Inter",style:"Semi Bold",color:C.primary});
bx(c1,8,116,98,32,"Set up",{fill:C.primary,color:C.white}); bx(c1,114,116,98,32,"Later",{fill:C.white});
const s2=phone(p4,290,46,256,260); sTL(s2,10,38,18,"Investments",{family:"Inter",style:"Bold",color:C.primaryDeep});
const c2=addFrame(s2,10,66,220,160,C.white,C.ink,1.5,"CARD: mock tile");
addRect(c2,0,0,6,160,C.accent); sT(c2,14,6,198,18,"ONL Trade demat",{family:"Inter",style:"Bold",color:C.primaryDeep}); sT(c2,14,34,198,18,"Linked to this bank",{family:"Inter",style:"Semi Bold"});
sT(c2,14,62,198,18,"Holdings: one tap",{family:"Inter",style:"Semi Bold",color:C.primary}); bx(c2,14,116,192,32,"Open ONL",{fill:C.primary,color:C.white});
sTL(p4,0,312,18,"Salary day: the card",{family:"Inter",style:"Bold",centerAt:142}); sTL(p4,0,312,18,"Any day: the tile",{family:"Inter",style:"Bold",centerAt:418});
const p5=pnl(s,688,690,600,342,"REACH AND CONVERSION, BUBBLE = ACTIVES");
const L=74,R=580,TP=56,B=284, X=v=>L+(R-L)*v/500000, LY=v=>Math.log(v/0.5)/Math.log(40), Y=v=>B-(B-TP)*LY(v);
[0.5,1,2,5,10,20].forEach(v=>{ addRect(p5,L,Y(v),R-L,1,C.surface); sTL(p5,0,Y(v)-11,18,v+"%",{family:"Inter",style:"Semi Bold",rightAt:L-6}); });
[0,1,2,3,4,5].forEach(v=>sTL(p5,0,B+4,18,String(v),{family:"Inter",style:"Bold",centerAt:X(v*100000)}));
addRect(p5,L,B,R-L,2,C.ink); addRect(p5,L,TP,2,B-TP,C.ink);
sTL(p5,0,B+28,18,"lakh accounts reached; first-order chance (log)",{family:"Inter",style:"Semi Bold",centerAt:(L+R)/2});
const POS={"Salary day":[-1,-1],"Rediscover":[2,-1],"RM review":[1,0],"Dhanteras":[-1,0]}, COL={"Salary day":C.primaryDeep,"Rediscover":HG[3],"RM review":C.primary,"Dhanteras":C.accent,"Workplace":HG[2]};
V.sc.filter(r=>r[0]!=="Workplace").forEach(r=>{ const cx=X(r[1]), cy=Y(r[2]), d=Math.max(16,Math.round(80*Math.sqrt(r[3]/5661))); addEllipse(p5,cx-d/2,cy-d/2,d,d,COL[r[0]],C.ink,1.5);
  const q=POS[r[0]], lab=r[0]+" "+fmtN(r[3]), ly=cy+(q[1]===0?-11:(q[1]<0?-d/2-24:d/2-4));
  if(q[0]===2) sTL(p5,0,ly,18,lab,{family:"Inter",style:"Bold",rightAt:R+4}); else if(q[0]>0) sTL(p5,cx+d/2+6,ly,18,lab,{family:"Inter",style:"Bold"}); else sTL(p5,0,ly,18,lab,{family:"Inter",style:"Bold",rightAt:cx-d/2+(q[1]<0?20:-4)}); });
const p6=pnl(s,1300,690,556,342,"FIVE FUNNEL STEPS, FIVE FIXES");
[["Opened","Guided first order, days 0 to 30","W4"],["Login","Bank-app tile, sign-on; video IPV if dormant","W4"],["Fund","UPI Autopay from the same bank","W5"],
 ["First order","Monthly ETF instalment, customer's pick","W6"],["Habit","Daily holdings and net-worth view","W8"]].forEach((r,i)=>{ const y=48+56*i, w=150-10*i;
  bx(p6,14+5*i,y,w,46,r[0],{fill:HG[5-i],color:i<2?C.white:C.ink,fam:"Poppins",st:"Bold"}); arrow(p6,168,y+23,184,y+23,C.ink,2);
  bx(p6,188,y,272,46,r[1],{fill:C.white,align:"LEFT",pad:8}); bx(p6,468,y,74,46,r[2],{fill:C.accent,fam:"Poppins",st:"Bold"}); });
results.push({slide:s.id,total:s.findAll(()=>true).length,top:s.children.length}); }
```

<!-- FILE: deck/slides/s05.js -->
```js
{ const s = await figma.getNodeByIdAsync("S5");
skelBT(s,3,"4 / 5","THE IMPACT",280,"Base case adds "+V.inc+" active accounts and "+V.pp+" by 31 January 2027 for "+V.cash+" of cash, "+V.ratio+" times what the same money buys in paid media",
  "Source: team activation model "+V.hash+" (T10 to T16); assumptions A20 to A39 and A61 in the appendix | paid cost per activation is a team assumption checked against broker disclosures | case product table");
const m=layered(s,64,310,700,384,C.white,"CARD: MONEYSHOT",C.alert);
TL(m,16,8,22,"SAME "+V.cash.toUpperCase()+" OF CASH, TWO ROUTES",{color:C.alert,maxW:668}); addRect(m,16,42,668,2,C.ink);
cols(m,16,52,300,236,["Bank moments","Paid media"],[{values:[V.inc_n,0],color:C.primary},{values:[0,V.paid_nn],color:C.alert}],{max:V.inc_n*1.12,bw:90,totals:[V.inc,V.paid_n]});
TL(m,340,52,72,V.ratio+"x",{family:"Poppins",style:"ExtraBold",color:C.alert,maxW:340,min:48});
T(m,340,164,340,22,"the active accounts for the same money, base case",{family:"Inter",style:"Bold",color:C.primaryDeep});
sT(m,340,228,340,18,"Bank moments: "+V.inc+" at "+V.cpa+" each. Paid media: "+V.paid_n+" at "+V.paid_cpa+".",{family:"Inter",style:"Semi Bold"});
[[V.cpa,"cash each"],[V.cpa_all,"all-in each"],[V.rev_per,"revenue a year"],[V.payback,"payback"]].forEach((r,i)=>tile(m,16+170*i,300,160,72,r[0],r[1],{ly:38}));
const p2=pnl(s,780,310,1076,384,"FROM "+V.rate26+" TO "+V.rate_end+": WHERE THE POINTS COME FROM, pp");
const wfr=wfB(p2,14,48,1048,326,V.wf,{min:14,max:17.4,dp:2,bw:64});
const ty=wfr.Y(16.74), tx=14+1048*7/9; dashedH(p2,tx,ty,1048*2/9,C.alert,2); sTL(p2,tx+6,ty+6,18,"+200 bps line",{family:"Inter",style:"Bold",color:C.alert});
}
// ===== PART =====
{ const s = await figma.getNodeByIdAsync("S5");
const p3=pnl(s,64,710,640,322,"WEEK BY WEEK AGAINST THE TARGET BAND, %");
const yMin=14.5, yMax=19, ch={x:14,y:44,w:612,h:220,padL:56,padR:80}; const B=ch.y+ch.h-Math.ceil(18*1.3)-6, Tp=ch.y+8, Yf=v=>B-(B-Tp)*(v-yMin)/(yMax-yMin);
addRect(p3,ch.x+ch.padL,Yf(17.74),ch.w-ch.padL-ch.padR,Yf(16.74)-Yf(17.74),C.accentTint,null,0);
lcS(p3,ch.x,ch.y,ch.w,ch.h,[{values:V.ramp.bull,color:C.good,label:"Bull",dy:-6},{values:V.ramp.base,color:C.primary,label:"Base",dy:0},{values:V.ramp.bear,color:C.alert,label:"Bear",dy:6}],
  ["1","2","3","4","5","6","7","8","9","10","11","12","13"],{yMin,yMax,yTicks:[15,16,17,18,19],padL:ch.padL,padR:ch.padR});
sT(p3,14,272,612,18,"Shaded: +200 to +300 bps. Week 1 is Dhanteras and Diwali; weeks 5, 9 and 13 carry salary credits.",{family:"Inter",style:"Semi Bold"});
const p4=pnl(s,716,710,560,322,"THREE SCENARIOS");
tbl(p4,14,46,[200,110,110,112],["Measure","Bear","Base","Bull"],V.scen_rows.concat([["Salary-day tap","6%","8%","10%"],["Order after tap","26%","32%","38%"],["RM review to order","11%","15%","19%"]]),
  {hh:26,rh:26,name:"scenarios",align:["LEFT","RIGHT","RIGHT","RIGHT"],fills:[null,C.tint,null,null,null,C.surfaceAlt,C.surfaceAlt,C.surfaceAlt]});
note(p4,14,284,532,"Bear: ","the week-6 trigger adds RM capacity");
const p5=pnl(s,1288,710,568,322,"WHAT MOVES THE BASE CASE, pp");
torS(p5,14,50,540,V.tor.slice(0,7).map(t=>({label:V.tor_l[t[0]],lo:t[1],hi:t[2]})),V.pp_n,{lw:250,rh:30,min:2.0,max:2.6,ticks:[2.0,2.3,2.6]});
sT(p5,14,290,540,18,"Every bar stays above +2.0 pp",{family:"Inter",style:"Bold",color:C.good});
results.push({slide:s.id,total:s.findAll(()=>true).length,top:s.children.length}); }
```

<!-- FILE: deck/slides/s06.js -->
```js
{ const s = await figma.getNodeByIdAsync("S6");
skelBT(s,4,"5 / 5","EXECUTION",260,"Thirteen weeks, four gates and a 10% holdout: the lift is read every week and any moment that breaks a guardrail stops",
  "Source: team plan and activation model "+V.hash+" (T12, T19) | guardrail thresholds are team targets | SEBI F&O study FY26 | NSE advertisement code | research sections 26 to 29");
rail(s,64,310,300,"THE PLAN",C.primary); rail(s,64,622,214,"THE PROOF",C.good); rail(s,64,848,184,"THE RISKS",C.alert);
const p1=pnl(s,116,310,1100,300,"13 WEEKS FROM 2 NOVEMBER 2026, FOUR GATES");
const RW=[{label:"Consent, ad approval",s:0,e:0,color:C.accent},{label:"Dhanteras notice",s:0,e:1,color:C.alert},{label:"Bank-app tile, sign-on",s:0,e:3},{label:"RM review sprint",s:1,e:9},
  {label:"ETF instalments live",s:5,e:12},{label:"Salary-day card",s:4,e:12,color:C.primaryDeep},{label:"Holdout, weekly read",s:0,e:12,color:C.good}];
const y0=gnt(p1,14,46,230,64,26,["1","2","3","4","5","6","7","8","9","10","11","12","13"],RW);
[["G0",0,0],["G1",2,4],["G2",4,6],["G3",6,13]].forEach(g=>{ const cx=Math.max(14+238,Math.min(14+230+64*g[2],14+230+832-12)), cy=y0+26*g[1]+13; diamond(p1,cx,cy,11,C.accent);
  if(cx>14+230+832-60) sTL(p1,0,cy-12,18,g[0],{family:"Poppins",style:"Bold",rightAt:cx-14}); else sTL(p1,cx+14,cy-12,18,g[0],{family:"Poppins",style:"Bold"}); });
sT(p1,14,y0+26*7+8,1060,18,"Salary credits land in weeks 5, 9 and 13; Dhanteras and Diwali fall in week 1 (6 and 8 November).",{family:"Inter",style:"Semi Bold",color:C.primaryDeep});
const p2=pnl(s,1228,310,628,300,"GO ONLY IF");
tbl(p2,14,46,[64,96,440],["Gate","When","Test"],[["G0","Week 0","creatives cleared; consent text live"],["G1","Week 4","tile and sign-on live; holdout drawn"],
  ["G2","Week 6","rate at or above "+V.bear6+"; else add RM reviews"],["G3","Week 13","lift read; scale or stop each moment"]],{hh:26,rh:30,name:"gates"});
note(p2,14,204,600,"Not yet run: ","30 customer interviews and 2 usability rounds in weeks 1 to 3 test the card and the tile.");
}
// ===== PART =====
{ const s = await figma.getNodeByIdAsync("S6");
const p3=pnl(s,116,622,640,214,"EXTRA ACTIVES ADDED EACH MONTH, BY MOMENT");
const COL=[C.primaryDeep,C.primary,HG[3],C.accent,C.good,C.alert,HG[2]], mt=[0,1,2].map(m=>V.mlev.reduce((a,r)=>a+r[m],0));
cols(p3,14,44,330,164,["Nov","Dec","Jan"],V.mlev.map((r,i)=>({values:r,color:COL[i]})),{max:Math.max(...mt)*1.12,bw:70,totals:V.mtot});
V.mlev_l.forEach((l,i)=>lgS(p3,372,48+22*i,COL[i],l));
const p4=pnl(s,768,622,520,214,"HOLDOUT: LIFT VS DETECTABLE, pp");
const mx=Math.max(...V.hold.map(h=>h[1]/h[2]));
V.hold.forEach((h,i)=>{ const y=52+38*i, k=h[1]/h[2], w=Math.round(150*k/mx);
  sTL(p4,14,y,18,h[0],{family:"Inter",style:"Bold",maxW:120}); addRect(p4,140,y+2,w,22,C.good,C.ink,1);
  sTL(p4,146+w,y,18,Math.round(k)+"x ("+h[1].toFixed(2)+" vs "+h[2].toFixed(2)+" pp)",{family:"Inter",style:"Bold"}); });
const p5=pnl(s,1300,622,556,214,"WHAT WE REPORT EVERY WEEK");
tbl(p5,14,44,[214,90,112,112],["KPI","Today","Week 6","Week 13"],V.kpi,{hh:26,rh:28,name:"kpi",align:["LEFT","RIGHT","RIGHT","RIGHT"],fills:[C.tint,null,null,null,null]});
const p6=pnl(s,116,848,900,184,"RISKS: PROBABILITY BY IMPACT");
const LV=["Low","Med","High"], CELL={"1,2":"1","0,2":"2, 5","1,1":"3","2,1":"4"};
LV.forEach((l,j)=>sTL(p6,0,46,18,l,{family:"Inter",style:"Bold",centerAt:84+70*j+35}));
[2,1,0].forEach((pi,r)=>{ sTL(p6,14,72+36*r+7,18,LV[pi],{family:"Inter",style:"Bold"});
  [0,1,2].forEach(ii=>{ const v=(pi+1)*(ii+1), k=v>=6?4:(v>=4?3:(v>=2?2:1)); const f=addFrame(p6,84+70*ii,72+36*r,70,36,HR[k],C.ink,1,"CELL");
    const tx=CELL[pi+","+ii]; if(tx) sTL(f,0,7,18,tx,{family:"Inter",style:"Bold",centerAt:35,color:k>=4?C.white:C.ink}); }); });
["Ad approval slips: file every creative in October","App slot not given: bank sponsor signs off first","Consent short: lead with servicing messages",
 "Market falls further: gold, liquid, index ETFs only","Drift into F&O: no F&O prompts, knowledge check"].forEach((x,i)=>{ const y=48+26*i;
  addEllipse(p6,316,y,22,22,C.alert,C.ink,1.5); sTL(p6,0,y-1,18,String(i+1),{family:"Inter",style:"Bold",color:C.white,centerAt:327}); sTL(p6,348,y,18,x,{family:"Inter",style:"Semi Bold",maxW:536}); });
const p7=pnl(s,1028,848,828,184,"GUARDRAILS: STOP LINES, CHECKED WEEKLY");
tbl(p7,14,44,[330,190,280],["Guardrail","Stop line","Action"],[["New actives in F&O","above 5%","pause the moment"],["Opt-outs a send","above 0.5%","stop the message"],
  ["Complaints per 10,000","above 1","compliance review"],["Messages a person a month","more than 4","hold further sends"]],{hh:26,rh:26,name:"guardrails"});
results.push({slide:s.id,total:s.findAll(()=>true).length,top:s.children.length}); }
```

<!-- FILE: deck/slides/s07.js -->
```js
{ const s = await figma.getNodeByIdAsync("S7");
skelBT(s,-1,"A1 TO A4","APPENDIX",240,"Every number in the deck traces to the case exhibits, a stated assumption or a cited source, and the model passes 10 of 10 checks",
  "Source: team activation model "+V.hash+" | research document Appendix A (bibliography) and section 27 (assumptions register)",{labels:RIBAP,counterW:200});
const p1=pnl(s,64,310,900,350,"A1 MODEL: HOW ONE EXTRA ACTIVE ACCOUNT IS COUNTED");
note(p1,14,48,872,"Extra actives = ","sum over segments of idle x (1 − d + d x k) x [1 − (1 − p salary)(1 − p rediscover)(1 − p RM)(1 − p Dhanteras)] + workplace + warm x reach x re-trade + new x lift",{fill:C.tint,lc:C.primaryDeep});
tbl(p1,14,122,[230,150,150,150,192],["Lever, base case","Reach","Tap or meet","First order","Chance per idle"],V.pv,{hh:26,rh:26,name:"chances",align:["LEFT","RIGHT","RIGHT","RIGHT","RIGHT"]});
sT(p1,14,264,872,18,"d = share idle 24 months or more (50%), k = order rate after re-KYC (0.50). Checks: 10 of 10 pass, hash "+V.hash+". Rerun: python -X utf8 arthikkhayal-case/model/activation_model.py",{family:"Inter",style:"Bold",color:C.primaryDeep});
const p2=pnl(s,976,310,880,350,"A2 ASSUMPTIONS THAT MOVE THE ANSWER");
tbl(p2,14,46,[60,300,90,90,90,222],["ID","Assumption","Bear","Base","Bull","Checked in"],V.arows,{hh:26,rh:29,name:"assumptions",align:["LEFT","LEFT","RIGHT","RIGHT","RIGHT","LEFT"]});
}
// ===== PART =====
{ const s = await figma.getNodeByIdAsync("S7");
const p3=pnl(s,64,676,900,356,"A3 RULES WE DESIGN TO");
tbl(p3,14,46,[230,300,342],["Rule","Source","What it asks of us"],[["No investment advice","SEBI (Investment Advisers) Regulations, 2013","neutral lists, no recommendations"],
  ["Advertisement code","NSE code, February 2023","exchange approval first; a risk line on each"],["Finfluencers","SEBI amended regulations, August 2024","no tie-ups with unregistered persons"],
  ["Inactive accounts","NSE circular, 25 October 2024","24 months idle; video IPV; no push to trade"],["Personal data","DPDP Act 2023; Rules notified November 2025","notice, consent, withdrawal, purpose limits"],
  ["Dark patterns","CCPA Guidelines, November 2023","no false urgency, nagging or confirm-shaming"]],{hh:26,rh:44,name:"rules"});
const p4=pnl(s,976,676,880,356,"A4 SHORT FORMS AND SOURCES");
tbl(p4,14,46,[110,320],["Short","Meaning"],[["AMC","annual maintenance charge"],["BSDA","Basic Services Demat Account"],["DPDP","Digital Personal Data Protection"],["ETF","exchange-traded fund"],["F&O","futures and options"],
  ["IPV","in-person verification"],["KYC","know your customer"],["RM","relationship manager"],["SSO","single sign-on"],["T12, T3","trailing 12 and 3 months"]],{hh:26,rh:26,name:"short forms"});
const b=T(p4,458,48,408,16,"Case: Arthik Khayal 2026 problem statement and Exhibits 1, 2a, 2b\nSEBI: F&O trader study FY26; finfluencer rules, Aug 2024\nNSE: inactive accounts, Oct 2024; advertisement code, Feb 2023\nNSE active clients FY26 (IANS, Apr 2026)\nDemat and active ratio, Aug 2026 (Business Today)\nMeitY: DPDP Rules 2025\nCCPA: dark pattern guidelines 2023\nThaler and Benartzi (2004), Save More Tomorrow\nKarlan et al. (2016), reminders and saving\nFull list: research Appendix A",{family:"Inter",style:"Semi Bold"}); b.name="BIBLIO";
results.push({slide:s.id,total:s.findAll(()=>true).length,top:s.children.length}); }
```

<!-- FILE: deck/slides/s08.js -->
```js
{ const s = await figma.getNodeByIdAsync("S8"); wipe(s);
TL(s,0,96,112,"THANK YOU",{family:"Poppins",style:"ExtraBold",color:C.ink,centerAt:960});
const c=layered(s,260,300,1400,214,C.primaryDeep,"CARD: therefore");
TL(c,28,14,26,"THEREFORE",{color:C.accent});
T(c,28,58,1344,22,"ONL Trade should put the account its salary customers already hold in front of them inside the bank: "+V.pp+" and "+V.inc+" more active accounts by 31 January 2027 in our base case, for "+V.cash+" of cash.",{family:"Inter",style:"Semi Bold",color:C.white});
[V.pp+" by 31 Jan 2027, base case",V.cpa+" of cash per extra active","0 offers, 0 F&O prompts, 0 paid media"].forEach((g,i)=>bx(c,28+448*i,140,430,48,g,{fill:C.accent,fam:"Poppins",st:"Bold",size:20}));
TL(s,0,552,40,V.team.name,{family:"Poppins",style:"ExtraBold",color:C.primary,centerAt:960});
teamBT(s,420,620,[300,600,180]);
[["DTU",120],["ecotech",150],["YES Securities",220],["Anthill Ventures",170],["Kae Capital",170]].reduce((x,l)=>{ logoSlot(s,x,800,l[1],72,l[0]); return x+l[1]+24; },960-(830+96)/2);
TL(s,0,900,22,"Research document, model and every source are in the appendix",{family:"Inter",style:"Bold",color:C.primaryDeep,centerAt:960});
sTL(s,0,940,18,"harshkawatra11@gmail.com  |  Team IdeaForge  |  Arthik Khayal 2026, ecotech, USME DTU",{family:"Inter",style:"Bold",centerAt:960});
srcLine(s,"Source: team activation model "+V.hash+" | case Exhibits 1 and 2");
results.push({slide:s.id,total:s.findAll(()=>true).length,top:s.children.length}); }
```

<!-- FILE: deck/setup.js -->
```js
// Creates (or finds) exactly eight slides in a new Slides file, names them, checks fonts. Safe to rerun: it never makes a second set.
let grid = figma.currentPage.children.find(c => c.type === "SLIDE_GRID");
if (grid === undefined) { figma.createSlide(); grid = figma.currentPage.children.find(c => c.type === "SLIDE_GRID"); }
const all = () => grid.children.flatMap(r => r.children);
let guard = 0; while (all().length < 8 && guard++ < 12) figma.createSlide();
const names = ["01 Cover", "02 Executive Summary", "03 Diagnosis", "04 Strategy", "05 Impact", "06 Execution", "07 Appendix", "08 Thank You"];
const slides = all(); slides.slice(0, 8).forEach((s, i) => { s.name = names[i]; });
const fonts = await figma.listAvailableFontsAsync();
const need = [["Poppins", "Bold"], ["Poppins", "ExtraBold"], ["Inter", "Semi Bold"], ["Inter", "Bold"]];
return { count: slides.length, ids: slides.slice(0, 8).map(s => s.id), extra: slides.slice(8).map(s => ({ id: s.id, children: s.children.length })),
  fontsOk: need.map(n => fonts.some(f => f.fontName.family === n[0] && f.fontName.style === n[1])) };
```

<!-- FILE: deck/_v1.js -->
```js
await Promise.all([{family:"Poppins",style:"Bold"},{family:"Poppins",style:"ExtraBold"},{family:"Inter",style:"Semi Bold"},{family:"Inter",style:"Bold"}].map(f=>figma.loadFontAsync(f)));
const ids=IDS; const issues=[]; const KEY=/^(PANEL|CARD|KPI|TABLE):/;
for(const id of ids){ const s=await figma.getNodeByIdAsync(id);
  const ch=s.children.filter(c=>KEY.test(c.name)).map(c=>({n:c.name,x:c.x,y:c.y,w:c.width,h:c.height}));
  for(let i=0;i<ch.length;i++)for(let j=i+1;j<ch.length;j++){ const a=ch[i],b=ch[j];
    const ox=Math.min(a.x+a.w,b.x+b.w)-Math.max(a.x,b.x), oy=Math.min(a.y+a.h,b.y+b.h)-Math.max(a.y,b.y);
    if(ox>=4&&oy>=4) issues.push({s:s.name,t:"overlap",a:a.n,b:b.n}); }
  for(const c of s.children){ if(c.x<-1||c.y<-1||c.x+c.width>1921||c.y+c.height>1081) issues.push({s:s.name,t:"bounds",n:c.name,x:Math.round(c.x),y:Math.round(c.y),w:Math.round(c.width),h:Math.round(c.height)});
    if(KEY.test(c.name) && c.y+c.height>1038) issues.push({s:s.name,t:"belowContent",n:c.name}); }
  const hl=s.children.find(c=>c.name==="HEADLINE"); if(hl&&hl.height>113) issues.push({s:s.name,t:"headline3lines"});
  const src=s.children.find(c=>c.name==="SOURCE"); if(src&&src.height>22) issues.push({s:s.name,t:"source2lines"});
  for(const t of s.findAllWithCriteria({types:["TEXT"]})){ const p=t.parent; if(!p||p.type==="SLIDE") continue;
    const tb=t.absoluteBoundingBox, pb=p.absoluteBoundingBox;
    if(tb.x+tb.width>pb.x+pb.width+1||tb.y+tb.height>pb.y+pb.height+1) issues.push({s:s.name,t:"textOut",chars:t.characters.slice(0,40),parent:p.name});
    if(t.textAutoResize==="NONE"){ const k=t.clone(); p.appendChild(k); k.textAutoResize="HEIGHT";
      if(k.height>t.height+2) issues.push({s:s.name,t:"cellWrap",chars:t.characters.slice(0,40),parent:p.name}); k.remove(); } } }
return {clean:issues.length===0,count:issues.length,issues:issues.slice(0,80)};
```

<!-- FILE: deck/_sweeps.js -->
```js
await Promise.all([{family:"Poppins",style:"Bold"},{family:"Poppins",style:"ExtraBold"},{family:"Inter",style:"Semi Bold"},{family:"Inter",style:"Bold"}].map(f=>figma.loadFontAsync(f)));
const ids=IDS; const MUST=MUSTLIST;
const BAN=["here's","let's","bottom line","delve","game-changer","unlock","it's not just","make no mistake","landscape","robust","seamless","holistic","tapestry","paradigm","navigate","revolutioni","cutting-edge","leverage","empower","transformative","journey","synergy","world-class","best-in-class","next-gen","reimagine","supercharge","harness","crucial","pivotal","furthermore","moreover","in today's","ever-evolving","imagine","ecosystem","testament","elevating","what if","picture this","dive into","groundbreaking","state-of-the-art","plethora","myriad","underscore","showcase","foster","bolster","spearhead","nuanced","intricate","meticulous","realm","fast-paced","in conclusion","it is important to note","game changer","guaranteed","assured returns","risk-free","hurry","last chance","don't miss"];
const ABSENT=["Anuj","Dayita","Aakriti","Ranvir","SwiftKart","SwasthyaGrid","HarvestBox","Dream11","Paytm","Liminal","Satoshi","Alchemy","TiO2","Eurogrip","Setu","TODO","TBD","Lorem","xyz","undefined","NaN","Rs ","Rs.","ChatGPT"];
let radiusFixed=0, money=0; const fontLow=[]; const copy=[]; const density=[]; let all="";
for(const id of ids){ const s=await figma.getNodeByIdAsync(id);
  const nodes=s.findAll(()=>true); density.push({slide:s.name,nodes:nodes.length});
  for(const nd of nodes){ if(nd.name==="CARD: MONEYSHOT") money++; if("cornerRadius" in nd && typeof nd.cornerRadius==="number" && nd.cornerRadius!==0){ nd.cornerRadius=0; radiusFixed++; } }
  for(const t of s.findAllWithCriteria({types:["TEXT"]})){ const c=t.characters; all+=" "+c;
    if(typeof t.fontSize==="number" && t.fontSize<22){ let ok=t.name==="SOURCE"||t.name==="FINEPRINT"||t.name==="BIBLIO"||c.startsWith("Source:")||(t.name==="SEC"&&t.fontSize>=18); let p=t.parent;
      while(p && !ok){ if(p.name && (p.name.startsWith("LOGO:")||p.name.startsWith("IMG:"))) ok=true; p=p.parent; }
      if(!ok) fontLow.push({slide:s.name,size:t.fontSize,chars:c.slice(0,40)}); }
    if(/[—–]/.test(c)) copy.push({slide:s.name,issue:"dash",chars:c.slice(0,60)});
    if(c.includes("?")||c.includes("!")) copy.push({slide:s.name,issue:"question or exclamation",chars:c.slice(0,60)});
    const low=c.toLowerCase(); for(const b of BAN) if(low.includes(b)) copy.push({slide:s.name,issue:"banned: "+b,chars:c.slice(0,60)}); } }
return {radiusFixed, moneyshot:money, fontLow, copy, missing:MUST.filter(m=>!all.includes(m)), presentBad:ABSENT.filter(a=>all.includes(a)), density, slides:ids.length};
```

<!-- FILE: deck/logo_rects.js -->
```js
// Replace MAP with {"<slot id>": [pngWidth, pngHeight], ...} (at most 8 slots a call). Creates an IMG rectangle fitted to the
// PNG's aspect inside each LOGO or IMG slot, removes the slot's caption and dash pattern, and returns the rectangle ids for upload_assets.
await figma.loadFontAsync({family:"Inter",style:"Semi Bold"});
const MAP = {}; const out = [];
for (const [id, wh] of Object.entries(MAP)) { const slot = await figma.getNodeByIdAsync(id); if (!slot) { out.push({id, error: "missing"}); continue; }
  slot.children.filter(c => c.type === "TEXT").forEach(c => c.remove()); try { slot.dashPattern = []; } catch (e) {}
  const W = slot.width - 6, H = slot.height - 6, k = Math.min(W / wh[0], H / wh[1]), w = Math.max(4, wh[0] * k), h = Math.max(4, wh[1] * k);
  const r = figma.createRectangle(); slot.appendChild(r); r.resize(w, h); r.x = (slot.width - w) / 2; r.y = (slot.height - h) / 2;
  r.fills = []; r.strokes = []; r.name = "IMG"; out.push({slot: slot.name, rect: r.id, w: Math.round(w), h: Math.round(h)}); }
return out;
```

<!-- FILE: deck/make_pdf.py -->
```python
"""Build deck/TeamIdeaForge_ArthikKhayal.pdf from deck/shots/hi_s01.png .. hi_s08.png, one 1920 x 1080 page each."""
import pathlib, fitz
D = pathlib.Path(__file__).resolve().parent; doc = fitz.open()
for n in range(1, 9):
    p = D / "shots" / ("hi_s%02d.png" % n); assert p.exists(), p
    page = doc.new_page(width=1920, height=1080); page.insert_image(page.rect, filename=str(p))
out = D / "TeamIdeaForge_ArthikKhayal.pdf"; doc.save(str(out)); print("pages", doc.page_count, "->", out)
```

<!-- FILE: deck/checks.py -->
```python
"""Cross-checks before the deck critic: dashes, '!', 'Rs' before a digit, placeholders and invented-name candidates in slide-copy.md."""
import io, re, pathlib
D = pathlib.Path(__file__).resolve().parent; t = io.open(D / "slide-copy.md", encoding="utf-8").read()
print("dashes", len(re.findall("[—–]", t)), "excl", t.count("!"), "rs", len(re.findall(r"\bRs\.? ?\d", t)),
      "placeholders", len(re.findall(r"TODO|TBD|Lorem|Insert|xyz|PLACEHOLDER", t)))
ALLOW = {"Team IdeaForge", "Delhi Technological University", "Guru Gobind Singh Indraprastha University", "Trade Private Limited", "Arthik Khayal",
         "Salary Account", "Credit Card", "Save More Tomorrow", "Business Today", "Investment Advisers", "Rules Unknown"}
cands = sorted(set(re.findall(r"\b(?:[A-Z][a-z]+\s){1,3}[A-Z][a-z]+\b", t)) - ALLOW)
print("name candidates to review (each must be a real organisation, a case term or a plain phrase; never a coined programme name)", len(cands))
for c in cands: print("  ", c)
```

<!-- FILE: research/build_sources.py -->
```python
# ===== ARTHIK KHAYAL SOURCES BUILDER v1 (from the Alchemy builder) =====
"""Parse research/raw/R-B.md .. R-J.md, build research/raw/sources.md (one row per unique URL, S01 upward, with the R-IDs
citing it) and research/raw/rid_to_sid.json. Run: python -X utf8 arthikkhayal-case/research/build_sources.py"""
import re, io, pathlib, json
from collections import OrderedDict
R = pathlib.Path(__file__).resolve().parent; RAW = R / "raw"; LANES = "BCDEFGHIJ"
def rd(p): return io.open(p, encoding="utf-8").read().replace("\r", "")
def rows_of(text, lane):
    out = []; L = text.split("\n"); i = 0
    while i < len(L):
        if L[i].strip().startswith("| R-ID |"):
            i += 2
            while i < len(L) and L[i].strip().startswith("|"):
                c = [x.strip() for x in L[i].strip().strip("|").split("|")]
                if len(c) >= 8 and c[0] and not c[0].startswith("-"):
                    out.append({"rid": c[0], "fact": c[1], "title": c[2], "publisher": c[3], "url": c[4], "accessed": c[5], "snippet": c[6], "status": c[7], "lane": lane})
                i += 1
        else: i += 1
    return out
def nurl(u):
    u = u.strip().rstrip(").,;")
    return None if u.lower() in ("n/a", "na", "", "none") else u
def main():
    rows = []
    for lane in LANES:
        f = RAW / ("R-%s.md" % lane)
        if not f.exists(): print("MISSING", f); continue
        r = rows_of(rd(f), lane); print("lane %s: %d rows" % (lane, len(r))); rows += r
    print("TOTAL ROWS", len(rows))
    tally = {}
    for r in rows: k = r["status"].split("(")[0].split("[")[0].strip(); tally[k] = tally.get(k, 0) + 1
    print("STATUS TALLY", json.dumps(tally))
    by = OrderedDict()
    for r in rows:
        u = nurl(r["url"])
        if not u: continue
        by.setdefault(u, {"title": r["title"], "publisher": r["publisher"], "accessed": r["accessed"], "rids": []})["rids"].append(r["rid"])
    out = ["# Sources: every unique URL cited across the nine research lanes", "", "Built by `research/build_sources.py`. One row per unique URL.", "",
           "| S-ID | Publisher (date) Title | URL | Accessed | Lane rows |", "|---|---|---|---|---|"]; sid = {}
    for i, (u, rec) in enumerate(by.items(), 1):
        sid[u] = "S%02d" % i
        out.append("| %s | %s | %s | %s | %s |" % (sid[u], (rec["publisher"] + " " + rec["title"]).replace("|", "/").strip(), u, rec["accessed"], ", ".join(rec["rids"])))
    (RAW / "sources.md").write_text("\n".join(out) + "\n", encoding="utf-8", newline="\n"); print("wrote sources.md with %d unique sources" % len(by))
    look = {}
    for r in rows:
        u = nurl(r["url"])
        if u and u in sid:
            rid = r["rid"]
            if rid.upper().startswith("R-"): rid = rid[2:]
            if rid.upper().startswith(r["lane"]): rid = rid[1:]
            look[r["lane"] + rid] = sid[u]
    (RAW / "rid_to_sid.json").write_text(json.dumps(look, indent=1, ensure_ascii=False), encoding="utf-8"); print("wrote rid_to_sid.json with %d mappings" % len(look))
if __name__ == "__main__": main()
```

<!-- FILE: research/assemble.py -->
```python
# ===== ARTHIK KHAYAL ASSEMBLE v1 (from the Alchemy assembler) =====
"""Assemble arthik-khayal-research.md from the writer parts and generated appendices, then run the acceptance checks.
  python -X utf8 arthikkhayal-case/research/assemble.py md     assemble and check
  python -X utf8 arthikkhayal-case/research/assemble.py pdf    build build_pdf.py from the IIM Lucknow renderer and render the PDF"""
import re, sys, json, io, pathlib, subprocess
R = pathlib.Path(__file__).resolve().parent; AK = R.parent; ROOT = AK.parent; NAME = "arthik-khayal-research"
HEADER = """# Activation Without a Bull Market: ONL Trade, Arthik Khayal 2026

**Stop selling the market to customers who never chose it, and meet the account they already own inside four moments the parent bank runs: +2.3 pp of activation by 31 January 2027 in our base case, for ₹16.5 lakh of cash**

Team IdeaForge: Harsh Kawatra (Delhi Technological University, Team Leader) · Gursimran Kaur (Guru Gobind Singh Indraprastha University, Member)

Prepared for: Arthik Khayal 2026, an economics case competition by ecotech, USME DTU, in collaboration with YES Securities, October 2026

---

"""
BAN = ["here's", "let's", "bottom line", "delve", "game-changer", "unlock", "it's not just", "make no mistake", "robust", "seamless", "holistic", "tapestry",
       "paradigm", "navigate the", "revolutionis", "revolutioniz", "cutting-edge", "leverage", "empower", "transformative", "journey", "synergy", "world-class",
       "best-in-class", "next-gen", "reimagine", "supercharge", "harness", "crucial", "pivotal", "furthermore", "moreover", "in today's", "ever-evolving",
       "imagine if", "testament", "realm", "fast-paced", "groundbreaking", "state-of-the-art", "plethora", "myriad", "delves", "underscores", "showcases",
       "it is important to note", "in conclusion", "landscape of", "ecosystem"]
MIN_WORDS, MIN_TABLES = 65000, 120
TAGTOK = r"(C-[A-Za-z0-9]+|A\d{2}|M|T\d{1,2}|S\d+|[B-J]\d{2,3})"
def rd(p): return io.open(p, encoding="utf-8").read().replace("\r", "")
def demote(t): t = re.sub(r"^# .*\n", "", t, count=1); return t.strip()
def md():
    body = "\n\n".join(rd(R / "parts" / ("part-%s.md" % x)).strip() for x in "ABCDEF")
    reg = {}
    for ln in rd(R / "raw" / "sources.md").splitlines():
        m = re.match(r"^\| (S\d+) \| (.+?) \| (.+?) \| (.*?) \|", ln)
        if m: reg[m.group(1)] = (m.group(2), m.group(3))
    toks = set(tok.strip() for grp in re.findall(r"\[([^\]]+)\]", body) for tok in grp.split(",") if tok.strip())
    cited = sorted({t for t in toks if re.fullmatch(r"S\d+", t)}, key=lambda s: int(s[1:])); missing = [c for c in cited if c not in reg]
    rid = json.loads(rd(R / "raw" / "rid_to_sid.json"))
    extra = {rid[t] for t in toks if re.fullmatch(r"[B-J]\d+", t) and t in rid}
    allc = sorted(set(cited) | extra, key=lambda s: int(s[1:]))
    app_a = ("| ID | Source | Available at |\n|---|---|---|\n" + "\n".join("| %s | %s | %s |" % (s, reg[s][0], reg[s][1]) for s in allc if s in reg) +
             "\n\nAssumption tags (`[A21]` style) resolve to section 27 and Appendix B (model table T1). Case tags (`[C-E1]` style) resolve to "
             "`case/01-case.md`. Raw research rows (`[F07]` style) resolve through `research/raw/R-F.md` and are listed here through their URL.")
    doc = (HEADER + body + "\n\n## Appendix A: Bibliography\n\nSources were opened and checked in October 2026. Only sources cited in the text are listed.\n\n" + app_a +
           "\n\n## Appendix B: Model tables\n\n" + demote(rd(AK / "model" / "model_tables.md")) + "\n\n" + rd(R / "parts" / "appendix-C.md").strip() + "\n\n" +
           rd(R / "parts" / "appendix-D.md").strip() + "\n")
    io.open(R / (NAME + ".md"), "w", encoding="utf-8", newline="\n").write(doc)
    heads = re.findall(r"^#{2,3} (.+)$", doc, re.M); h2 = re.findall(r"^## (\d+)\. ", body, re.M)
    authored = body + "\n\n" + rd(R / "parts" / "appendix-C.md") + "\n\n" + rd(R / "parts" / "appendix-D.md")
    res = dict(words=len(doc.split()), tables=len(re.findall(r"^\|[ :|-]+\|\s*$", doc, re.M)), dashes=len(re.findall("[—–]", authored)),
               exclamations=authored.count("!"), question_headings=[h for h in heads if h.strip().endswith("?")],
               banned={b: len(re.findall(re.escape(b), authored, re.I)) for b in BAN if re.search(re.escape(b), authored, re.I)},
               q_outside_32=re.split(r"^## 32\.", authored, flags=re.M)[0].count("?"), not_x_but_y=len(re.findall(r"\bnot (?:just|only|merely)\b", authored, re.I)),
               h2_numbered=len(h2), answers=len(re.findall(r"^\*\*Answer\.\*\*", doc, re.M)), cited_S=len(cited), missing_S=missing,
               dup_headings=sorted({h for h in heads if heads.count(h) > 1})[:10],
               ai_statement=len(re.findall(r"generated (by|with|using) (AI|artificial intelligence)|AI-use|AI use disclosure", doc, re.I)),
               untagged_number_lines=sum(1 for ln in body.splitlines() if re.search(r"₹|\d%|\d,\d{3}", ln) and not ln.startswith(("|", "#", ">")) and not re.search(r"\[" + TAGTOK, ln)))
    print(json.dumps(res, indent=1, ensure_ascii=False))
    ok = (res["words"] >= MIN_WORDS and res["tables"] >= MIN_TABLES and res["dashes"] == 0 and res["exclamations"] == 0 and not res["question_headings"]
          and not res["banned"] and res["answers"] >= res["h2_numbered"] and not res["missing_S"] and not res["dup_headings"] and res["ai_statement"] == 0
          and res["untagged_number_lines"] <= 25 and res["q_outside_32"] == 0 and res["not_x_but_y"] == 0)
    print("ASSEMBLY PASS" if ok else "ASSEMBLY FAIL"); sys.exit(0 if ok else 1)
def pdf():
    src = rd(ROOT / "iim-lucknow-pivot" / "research" / "build_pdf.py")
    def rep(a, b, n):
        nonlocal src
        assert src.count(a) == n, (a[:50], src.count(a)); src = src.replace(a, b)
    rep("dream11-pivot-research", NAME, 4)
    rep("Dream11: Life After the Ban  |  Team IdeaForge", "Activation Without a Bull Market  |  Team IdeaForge", 1)
    rep("else 'Dream11: Life After the Ban'}", "else 'Activation Without a Bull Market'}", 1)
    rep("IIM Lucknow  |  PIVOT '26  |  Round 1 research deliverable", "Arthik Khayal 2026  |  ecotech, USME DTU  |  Research deliverable", 1)
    rep("--p:#C4161C; --pd:#5E0A0E; --a:#F5C518; --tint:#FDE0E0;", "--p:#1D4FA3; --pd:#0B2A63; --a:#F5B700; --tint:#DCE7F7;", 1)
    rep("color: #C4161C; }", "color: #1D4FA3; }", 1)
    rep("Harsh Kawatra, Delhi Technological University<br>Gursimran Kaur, Guru Gobind Singh Indraprastha University<br>Dayita Arora, Ramjas College, University of Delhi<br><br>",
        "Harsh Kawatra, Delhi Technological University (DTU), Team Leader<br>Gursimran Kaur, Guru Gobind Singh Indraprastha University (GGSIPU), Member<br><br>", 1)
    src, k = re.subn(r"^TAG = re\.compile\(.*$", lambda m: 'TAG = re.compile(r"\\[((?:C-[A-Za-z0-9]+|A\\d{2}|M|T\\d{1,2}|S\\d+|[B-J]\\d{2,3})(?:, ?(?:C-[A-Za-z0-9]+|A\\d{2}|M|T\\d{1,2}|S\\d+|[B-J]\\d{2,3}))*)\\]")', src, count=1, flags=re.M)
    assert k == 1, "TAG line"
    io.open(R / "build_pdf.py", "w", encoding="utf-8", newline="\n").write(src)
    r = subprocess.run([sys.executable, "-X", "utf8", str(R / "build_pdf.py")], capture_output=True, text=True, encoding="utf-8")
    print(r.stdout[-600:], r.stderr[-600:]); p = R / (NAME + ".pdf"); print("PDF", p.exists() and p.stat().st_size)
if __name__ == "__main__": {"md": md, "pdf": pdf}[sys.argv[1]]()
```

<!-- FILE: case/01-case.md -->
```markdown
# Arthik Khayal 2026: the case, transcribed with reference IDs

Source: `arthikkhayal-case/6ad67dcf8fef3_case_arthik_khayal_26.pdf` (7 pages). Transcribed verbatim; IDs are ours. Writers cite these IDs as `[C-xx]`.

## Cover (page 1)
- C-T1: An economics case competition, ecotech (USME, Delhi Technological University). Problem statement in collaboration with YES Securities.
- C-T2: Title: "Driving user activation on trading / investing platforms in volatile markets".
- C-T3: Sponsor marks on pages 2 to 7: YES Securities, Anthill Ventures, Kae Capital.

## Context (page 2)
- C-X1: "Opening a trading and demat account has never been easier in India. Getting a new investor to actually use it is much harder."
- C-X2: "Millions of accounts sit dormant, and the problem gets sharper when markets turn volatile or take a bearish turn."
- C-X3: "Investors in India are largely risk averse and an unfavourable market strengthens their resolve to stay out of it."
- C-Q1 (the task): "design a strategy that turns newly opened and dormant accounts on a digital investing platform into highly engaged, revenue active, daily users, in a way that works when markets are volatile and stays within the rules of a regulated industry."

## Definitions (page 2)
- C-D1: Active users: at least one trade in the last 12 months.
- C-D2: Highly Active users: at least one trade in the last 3 months.
- C-D3: Inactive users: accounts deactivated due to fraudulent activity or notice from the regulator.
- C-D4: Dormant users: have not traded even once in the last 24 months. (See Exhibit 1)

## Company (page 2)
- C-CO1: Trade Private Limited is a bank-led broking and investment services company offering retail and institutional investors access to equities, derivatives, mutual funds, IPOs and more.
- C-CO2: ONL Trade, the digital trading and demat platform, is available as a mobile app and on the web, built for first-time, digital-first, often young (less than 30 years old) investors.
- C-CO3: ONL Trade competes with discount brokers and fintech apps that have raised the bar on onboarding speed, pricing and user experience. In features, ONL is at par with its rivals.
- C-CO4: ONL Trade works with other banks too, but most account holders are customers of the parent bank.

## Products, pricing and revenue (page 3; indicative, taxes and fees excluded)
- C-PR1: Cash equities: buy and sell listed shares; ₹0.15 per executed order; brokerage per order.
- C-PR2: Equity derivatives: futures and options; ₹0.20 per executed order; brokerage per order.
- C-PR3: Mutual funds: eligible schemes; ₹0 brokerage on eligible direct plans; no execution brokerage on direct-plan transactions.
- C-PR4: IPOs: apply for eligible new issues; ₹0 application brokerage.
- C-PR5: Demat services: hold and service securities; applicable maintenance and depository fees; account and service fees.
- C-PR6: Research and learning: basic market information, research calls and education; included; no separate subscription.

## The problem (page 4)
- C-PB1: Markets have been unfavourable on average over the last 12 months; returns below expectations make existing traders leave and deter new investors.
- C-PB2: Trade Private Limited has seen very low active clients over the last year; average activation rate about 15% against an industry average of 20% to 40%.
- C-PB3: The ONL team tried regular communication on WhatsApp, email, RCS and social media based on market information, successful research calls and offers for every first trade.
- C-PB4: In parallel: financial literacy campaigns (YouTube explainers, jargon-simplifying newsletters) and an active customer support team.
- C-PB5: The overarching theme was staying invested in an unfavourable market, compounding and long-term wealth. The number of active users has not gone up.
- C-PB6 (why this is hard): Awareness gap: many accounts are opened alongside another banking product, so the customer may not remember having a demat and trading account.
- C-PB7: Who the users are: existing banking customers (Exhibits 2a and 2b).

## Indicative activation funnel (page 4)
- C-F1: Account opened: created through a digital journey. Volumes healthy; onboarding is not the main bottleneck.
- C-F2: First login: drop-off begins; some users never log in.
- C-F3: Funded: user adds money; another steep drop.
- C-F4: First trade or first investment: places an order or starts an SIP. Very new accounts reach this within the first month.
- C-F5: Repeat and habit: many activated users gradually go dormant.

## Constraints and guardrails (page 5)
- C-K1: Duration: 3 months to increase activation by 200 to 300 basis points.
- C-K2: Regulatory: SEBI and the exchanges regulate; communication must not offer investment advice, promise or imply returns, or induce customers to trade.
- C-K3: Budget: lean marketing budget; prefer owned assets over large paid media.
- C-K4: Product: no rebuild of the core trading engine; new features realistic for an app team to ship within a quarter.
- C-K5: Data and privacy: personalisation must respect consent and data protection expectations.
- C-K6: Ethical standard: no dark patterns, fear-based nudges or misleading urgency.
- C-K7: Growth must be responsible; regulators have repeatedly highlighted that many retail traders, especially in derivatives, lose money; pushing people to trade more is neither ethical nor sustainable.

## Appendix and exhibits (pages 6 and 7)
- C-N1: All figures indicative, constructed for the case; rounded where noted; snapshots as at 30 September 2026. Percentages rounded to the nearest integer.
- C-N2: Definitions given for MTD, YTD and LTD.
- C-E1 (Exhibit 1, account portfolio): Eligible accounts 7,33,855 (Sep 2025) and 8,09,746 (Sep 2026); Active (at least one executed trade, trailing 12 months) 1,07,889 and 1,19,339; Highly Active (trailing 3 months) 66,943 and 82,086.
- C-E2a (Exhibit 2A, September 2026; LTD clients; trailing 12, 9, 6, 3, 1 months %): Prestige 3,096: 35, 31, 28, 22, 16. Elite 35,697: 32, 29, 26, 22, 15. Elevate 9,471: 37, 34, 31, 27, 13. Preferred 60,312: 20, 18, 16, 14, 9. Salary Account 6,27,853: 14, 13, 11, 9, 6. Credit Card 73,317: 6, 6, 5, 5, 4. Total 8,09,746: 15, 13, 12, 10, 6.
- C-E2b (Exhibit 2B, September 2025): Prestige 2,999: 38, 34, 30, 24, 17. Elite 34,865: 36, 33, 28, 24, 17. Elevate 6,959: 41, 39, 34, 31, 24. Preferred 72,826: 21, 19, 14, 12, 9. Salary Account 5,05,823: 13, 12, 10, 8, 7. Credit Card 1,10,383: 9, 9, 4, 4, 4. Total 7,33,855: 15, 14, 10, 9, 7.
```

<!-- FILE: extract.py -->
```python
"""Extract every embedded file from arthikkhayal-case/PLAN.md into arthikkhayal-case/. Run from the repo root:
python -X utf8 arthikkhayal-case/extract.py"""
import re, io, pathlib
AK = pathlib.Path(__file__).resolve().parent; t = io.open(AK / "PLAN.md", encoding="utf-8").read()
n = 0
for m in re.finditer(r"<!-- FILE: (\S+) -->\n```\w+\n(.*?)\n```\n", t, re.S):
    p = AK / m.group(1); p.parent.mkdir(parents=True, exist_ok=True); io.open(p, "w", encoding="utf-8", newline="\n").write(m.group(2) + "\n"); n += 1; print("wrote", m.group(1))
print("files", n)
```



