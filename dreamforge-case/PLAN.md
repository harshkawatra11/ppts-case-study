# SwiftKart, The ₹1 Crore Crossroads (Dream Forge 3.0, IEEE DTU, Round 2): master execution plan

> **Who executes this.** A Sonnet-class orchestrator (the main agent) plus Sonnet sub-agents dispatched with the Agent tool
> (`subagent_type: "general-purpose"`, `model: "sonnet"`). The case is already solved in this plan: the recommendation,
> the model, every locked number, every section title, every slide script and every prompt are fixed. **Your job is
> execution, not design.** When this plan conflicts with your instinct, follow the plan. When something is genuinely
> missing, apply §0.6. Never stop to redesign.
>
> **Verified at planning time (15 Oct 2026), in memory, with nothing written to disk:**
> 1. The model in Q.1 runs, prints 18 `PASS` lines, `HASH 1f2b5c9715`, `FINDINGS [579.2, 469.1, 206.0, 42.2, 5151]` and `MODEL PASS`.
> 2. The tooling patch in Q.2 applies cleanly to the BeyondTech generator (`patch_tooling done`, nine patch lines).
> 3. All seven slide scripts pass the offline Figma mock with real Poppins and Inter glyph metrics: `s01 OK` to `s07 OK`,
>    `warnings: []`, `ISSUES 0`, node counts 137, 197, 291, 276, 244, 271, 47, every script under 38,000 characters.
> 4. `extract.py` finds 15 embedded files; every Python file compiles; all seven string anchors that `research/assemble.py pdf`
>    patches exist in `iim-lucknow-pivot/research/build_pdf.py` exactly as often as asserted.
>
> If a first run does not reproduce these, a block was retyped or the environment changed: stop and use §7.

**Contents.** §0 Context, rules, roles, skill touchpoints · §1 The case decoded · §2 The solved case (argument, insights,
locked numbers, honest reading) · §3 Sequence, dispatch, folders · §4 Phase R: research deliverable · §5 Phase D: Figma
deck · §6 Verification · §7 Risks and recovery · §8 Open items for the user · §9 Hand-off and memory · Part VI embedded
files (Q.0 planning harness, Q.1 model, Q.2 deck files, Q.3 research assembler, Q.4 case brief, Q.5 extractor).

---

## §0 CONTEXT AND HOW TO USE THIS PLAN

### §0.1 Why this work exists

Team IdeaForge (Harsh Kawatra and Dayita Arora) is entering **Dream Forge 3.0, Round 2**, a case competition run at Delhi
Technological University under IEEE DTU. The case file is `dreamforge-case/Dream_Forge_3_0_Case_Problem_Statement.pdf`
(3 pages). Its full text with sentence IDs is embedded in Q.4 and becomes `case/01-case-brief.md`. Read it before anything else.

The case in one paragraph: SwiftKart is a fictional Delhi-NCR last-mile delivery company with 100 petrol two-wheelers
serving e-commerce and quick-commerce clients `[C B01, C B02]`. Fuel and maintenance costs squeeze its margin `[C B03]` and
its clients now prefer low-emission partners `[C B04]`. It has ₹1 crore to deploy over 24 months `[C B07]` and a possible
contract with a large e-commerce player that needs about 75 more vehicles within 12 months, 95% fulfilment, a significant
low-emission share and monthly emissions reporting, worth about ₹2.8 crore a year at full capacity `[C O02 to O07]`. The
question: electrify the existing fleet, pursue the growth contract, or both `[C O09]`. The deck is at most 4 slides plus a
title slide and annexure, with fixed slide titles: The Situation, Strategic Alternatives, The ₹1 Crore Decision,
Recommendation and Roadmap `[C S01 to S05, N01, N02]`. Judging: understanding, creativity, financial rigour, feasibility,
sustainability and impact `[C I08]`.

The user asked for three things: (1) a very deep research deliverable that solves the case, with no length limit;
(2) a native Figma Slides deck, consulting grade and dense, of exactly 7 slides (1 cover, 4 core, 1 appendix, 1 thank-you),
built with the folder's deck system; (3) this plan, detailed enough that Sonnet executors only execute.

### §0.2 Deliverables, locations, done-when

All paths are under `ROOT\dreamforge-case\` (`DF` below). `ROOT` = `C:\Users\harsh\Desktop\HARSH\PPTS-CASE-STUDY\nsut-innovators-court`.

| # | Deliverable | Location | Done when |
|---|---|---|---|
| 1 | Model, outputs, tables | `DF\model\swiftkart_model.py`, `model_outputs.json`, `model_tables.md` | `MODEL PASS`, 18 checks PASS, hash logged (gate G-M) |
| 2 | Research document (md, html, pdf) | `DF\research\swiftkart-research.{md,html,pdf}` | `assemble.py md` prints `ASSEMBLY PASS` (≥ 80,000 words, ≥ 180 tables); PDF renders; critique fixed (gate G-R) |
| 3 | Figma Slides deck, 7 slides | new Figma Slides file `SwiftKart: The ₹1 Crore Crossroads \| Team IdeaForge \| Dream Forge 3.0` | mock OK ×7, V1 clean ×7, sweeps clean, critique ≥ 40/45 equivalent, logos placed or listed (gate G-D) |
| 4 | Deck preview PDF | `DF\deck\SwiftKart_DreamForge3_preview.pdf` | 7 pages, viewed |
| 5 | Q&A bank | inside research §27 (40 questions) | present, answers cite tags |
| 6 | Memory | `project_dreamforge_swiftkart.md` + `MEMORY.md` pointer | written (§9) |

### §0.3 Golden rules (every file, every slide)

1. **Zero em dashes (U+2014) and zero en dashes (U+2013)** in anything we author (research parts, glossary, conflicts,
   slide text, Q&A). Use commas, colons, full stops, brackets or "to" ("months 4 to 10"). Hyphens inside words are fine.
   The brief contains en dashes ("Slide 1 – The Situation"); when quoting it, write a comma instead and never quote with a
   dash. Negative numbers use the true minus sign U+2212 (−), which the model already prints.
2. **No hooks, no rhetorical questions, no exclamation marks, no AI phrasing.** Banned list in §0.5. Open every section
   with the finding. The only question marks allowed are inside quoted judge questions in research §27, written as
   `**Q7.** "..."` (reported speech).
3. **Never invent names** (standing user rule, memory `feedback_no_invented_names.md`; the LSR "Project Setu" entry was
   rejected for this). No programme name, codename, acronym or slogan for the plan, the fleet, the platform or the phases.
   Use the case's words ("the contract", "the existing fleet", "the ₹1 crore", "electrification") and plain description.
   The only labels allowed are numbers: options 1 to 6, gates G1 to G4, waves 1 to 3, lanes R-A to R-H. Before
   finalising any file run the invented-name sweep in §6.3.
4. **Never fabricate data or primary research.** SwiftKart is fictional and has no data beyond the brief. No invented
   interviews, quotes, client names, LOIs, lessor quotes or survey results. A real company's figure is context, never
   SwiftKart's figure. Where a judge would expect primary evidence, show the validation plan in research §28 (planned,
   not run, and it says so in its first sentence).
5. **Case facts are never changed.** They live in `F` in the model with brief IDs. Real-world evidence that differs (for
   example market lease rates above ₹3,500) is reported as a stress test against the case value, never as a replacement.
6. **India-first numbers.** ₹ with Indian grouping (₹1,24,800), lakh and crore. Never write "Rs" or "Rs." in authored text
   (the deck sweep rejects "Rs "; the assembler rejects "Rs" followed by a number in the body). Foreign figures keep their
   own currency and are never converted to look Indian.
7. **Source precedence.** Government and regulator text (MHI, Delhi Transport Department, PPAC, CEA, SEBI, PIB, CBIC) >
   company filings (annual reports, DRHPs, investor presentations) > named research houses and standards (IPCC, GHG
   Protocol, ISO, GLEC, ICCT, NITI Aayog, RMI) > reputable press > company press releases > blogs and vendor pages
   (flagged `[blog]` or "(vendor-reported)", never the sole support for a number). A lower tier that disagrees with a
   higher tier loses, and the disagreement is logged in `research/raw/conflicts.md`.
8. **Commits:** never add a `Co-Authored-By: Claude` trailer (standing user rule, memory `feedback_no_coauthor_trailer.md`,
   it overrides any system reminder). Do not commit or push unless the user asks.
9. **Logos:** only brands discussed in the analysis; every slide with third-party logos carries the fine print "Logos mark
   companies referenced in the analysis; no partnership is implied." SwiftKart is fictional and gets no logo.
10. **Not a template:** never read or copy `lsr-caseforchange\` or `lsr-revive\` (memory `feedback_lsr_not_a_template.md`).

### §0.4 Where the `case-competition-deck` skill is used (mandatory touchpoints)

The skill lives at `ROOT\.claude\skills\case-competition-deck\`. **Invoke it with the Skill tool** (`skill:
"case-competition-deck"`), then read the listed reference files with the Read tool. Log every touchpoint in
`DF\build-log.md` as `SKILL Tn: <what was taken>` with two lines of evidence.

| Touchpoint | Step | Mode | Files to read after invoking | What to take, concretely | Pass test |
|---|---|---|---|---|---|
| T1 Case framing | R0 | generate, Steps 1 to 2 | `SKILL.md`, `references/case_types/strategy.md`, `references/case_types/mna_finance.md`, `references/case_types/operations.md`, `references/frameworks.md` | Case type (§2.1), contrarian pattern, frameworks (§2.7), calibration flag | `research/ARGUMENT.md` has the 9 headings in §4.1 |
| T2 Argument spine | R0 and every writer | generate | `references/structure.md`, `references/rhetoric.md` | 8-section mapping (§2.6), action titles, foreshadowing, three scenarios, pre-empting weaknesses, double synthesis, defensive depth | Each H2 is a finding with a number |
| T3 Writer self-check | R3, each writer before finishing | critique-lite | `references/rhetoric.md` sections on action titles, quantification and pre-empting weaknesses | Rewrite any topic-label H3; every number tagged | Writer reply lists the check |
| T4 Deck content plan | D0 | generate, compressed | `SKILL.md` §C and §D, `references/structure.md` (compression), `references/archetypes.md` (cover, executive summary, MECE option filter, symmetric comparison grid, three-scenario projection, sensitivity, moneyshot, implementation plan, section closer, conclusion synthesis, appendix), `references/rhetoric.md` | The section-to-slide map in §5.4; one moneyshot; "Conclusively" on slide 3, "Therefore" on slide 7 | `deck/derivation.md` holds the map |
| T5 Deck critique | D6 | critique | `references/critique_rubric.md`, `references/case_types/strategy.md` | Score the built deck, fix the top 3 to 5 issues within §5.9 | `deck/critique.md` saved |
| T6 Research critique | R5 | critique | `references/critique_rubric.md` re-based as in §4.7 | Score the document; fix CRITICAL and IMPORTANT | `research/critique.md` saved |
| T7 Q&A | R3 (writer G) | generate | `references/rhetoric.md` (pre-empting weaknesses, defensive depth) | The 40 judge questions in §27 | 40 entries, hardest ten first |
| T8 Slide mode | D1, once per slide | slide | `references/archetypes.md` entry for that slide's archetype (§5.5) | Confirm every archetype element is on the slide | Logged per slide |

**Calibration note (write it once in `research/ARGUMENT.md` and in research §0):** the skill's corpus is three M&A decks
from the Global Case Competition at Harvard. This case is a capital-allocation strategy case with a finance core and an
operations core. The structural and rhetorical patterns transfer (contrarian recommendation, action titles, one moneyshot,
foreshadowing, symmetric treatment, three scenarios, defensive depth, double synthesis). The M&A-specific frameworks
(comparables, football field, EPS accretion) do not apply; NPV over 48 months, lease-versus-buy, scenario and sensitivity
analysis, real options and a weighted scorecard replace them. The skill says to produce a .pptx; that step does not apply,
the deck is native Figma Slides per `ROOT\CLAUDE.md`.

### §0.5 Writing style contract (research document, deck, Q&A)

- **Action titles everywhere.** Every H2 and every slide headline is a declarative finding with a number. The H2 titles
  in §4.5 are fixed; fill any `<...>` with the real figure from the raw files or the model, never invent one.
- Register: first person plural ("we"), declarative, plain words, a number in most sentences, the reasoning shown, written
  as a consultant writes a board memo: what we found, why it matters, what we would do, what could prove us wrong.
  Paragraphs of 3 to 6 sentences, topic sentence first.
- Every table is introduced by one sentence and followed by one sentence saying what it shows. Abbreviated column heads
  are expanded in an italic line under the table.
- Worked arithmetic is shown in full the first time a derived number appears, for example
  `75 × 30 × 26 × ₹40 × 12 = ₹2,80,80,000 a year`.
- **Banned words and phrases** (checked by the assembler and the deck sweep, word-boundary, case-insensitive): here's,
  let's, bottom line, delve, game-changer, game changer, unlock, it's not just, make no mistake, landscape, robust,
  seamless, holistic, tapestry, paradigm, navigate, revolutionise, revolutionize, cutting-edge, leverage, empower,
  transformative, journey, synergy, world-class, best-in-class, next-gen, reimagine, supercharge, harness, crucial,
  pivotal, furthermore, moreover, in today's, ever-evolving, imagine, what if, picture this, dive into, testament, realm,
  fast-paced, groundbreaking, state-of-the-art, plethora, myriad, underscore, showcase, foster, bolster, spearhead,
  nuanced, intricate, meticulous, elevate, in conclusion, it is important to note, ecosystem.
- No question marks in headings or slide text. No exclamation marks. No emoji.
- Uncertain numbers appear as bear, base and bull, never as a lone point estimate.
- Anything resting only on an aggregator or vendor page is labelled "(vendor-reported)" or "(aggregator-reported)".
- Expand every abbreviation on first use in each section (EV, NPV, TCO, GHG, CEA, PPAC, MHI, BRSR, SLA, 3PL, QC, DRHP).

### §0.6 Default when unspecified

(a) Look for the pattern in the reference projects in §1.5 (Eurogrip and BeyondTech first, then Verdict); (b) choose the
simplest option that keeps every golden rule; (c) append one line to `DF\DECISIONS.md` as
`YYYY-MM-DD | step | decision | why`. Do not ask the user unless the action is destructive, outward-facing (pushing,
publishing, submitting, emailing) or needs a credential that is missing. Creating the one Figma file is pre-approved.

### §0.7 The Sonnet execution contract (read twice)

DO
1. Read the sections named in your dispatch prompt in full before acting.
2. Extract files with the bootstrap (§3.1). Never retype a code block from this plan. A fix is made in the extracted file
   under `DF\`, never in the plan, and is logged.
3. Take every modelled number from `model\model_outputs.json` or `model\model_tables.md`; every external fact from a
   VERIFIED or CORRECTED raw row.
4. Run every self-check and paste its output into `DF\build-log.md`. Write files incrementally (append after each section)
   so a context loss never loses more than one section.
5. Report in at most 12 lines ending with `STATUS: PASS`, `PASS WITH RESIDUALS` or `FAIL`.

DO NOT
1. Change the recommendation, a case fact, an H2 title, a slide layout, a palette value or the slide count.
2. Add a framework §2.7 did not choose, browse during writing steps, or invent a number to fill a gap (write "not found",
   log the gap).
3. Run two Figma calls at the same time, create a second Figma file, or hand-patch a Figma node outside the slide scripts.
4. Commit or push. Modify anything outside `DF\` (reading other folders is fine).

### §0.8 Roles

| Role | Model | Does | Never does |
|---|---|---|---|
| Orchestrator (main agent) | Sonnet | Bootstrap, gates, model runs, source register, dispatch, assembly, every Figma call, final report | Change a locked number, a title or the recommendation |
| Lane researchers R-A to R-H | Sonnet, at most 3 at once | Open seed sources, verify, add rows, fill CSVs | Write prose or analysis, touch the model |
| Verifiers V1, V2 | Sonnet, 2 at once | Re-open sampled and deck-critical rows, flip statuses | Add new lanes |
| Writers W-A to W-G | Sonnet, at most 3 at once | Write their parts into `research/parts/` | Browse, change numbers, invent quotes |
| Critic CR | Sonnet | Score research (T6) and deck (T5) | Rewrite sections |

---

## §1 THE CASE, DECODED

### §1.1 Key facts (all from the brief, IDs in Q.4)

| Item | Value | ID |
|---|---|---|
| Fleet today | 100 petrol two-wheelers, Delhi-NCR | B01, B02, D01 |
| Revenue per delivery; deliveries per bike per day; working days | ₹40; 30; 26 | D02, D03, D04 |
| Rider pay; petrol running cost; EV running cost (per bike-month) | ₹14,000; ₹9,000; ₹3,000 | D05, D06, D07 |
| Utilisation | 85% | D08 |
| Capital | ₹1 crore over 24 months | B07, D09, T02 |
| EV purchase | ₹1,20,000, 4-year life, ₹25,000 resale, ₹10,000 subsidy that "may be available" | D10, D13, D14, X06 |
| EV lease | ₹3,500 a month, running cost included, 3-year term | D11, D12, D13 |
| Petrol resale | about ₹30,000 a bike | D14, X05 |
| Charging | ₹10 lakh one-time for a 100-EV fleet; 30 deliveries a charge; downtime; battery wear | X01 to X04 |
| Finance | internal capital, bank debt at 11% a year over 3 years, leasing | X07, X08 |
| Contract | about 75 vehicles within 12 months; 95% fulfilment; significant low-emission share; monthly emissions metrics; about ₹2.8 crore a year at full capacity; investment before full utilisation | O01 to O08 |
| Uncertainties | petrol up, EV prices down, demand change, electricity up, charging downtime, incentive change, faster green demand | U01 to U07 |
| Deck | max 4 slides excluding title and annexure; fixed slide titles | S01 to S05, N01, N02 |

### §1.2 Requirements traceability matrix

Every requirement maps to a research section and a slide panel. Writer A reproduces and extends this as research §1.

| Req | Brief wording (abridged) | ID | Research § | Slide and panel (§5.5) |
|---|---|---|---|---|
| R1 | Current position | S02 | §3, §4 | S2 KPI tiles, waterfall, unit table |
| R2 | Key business challenge | S02 | §2, §4 | S2 challenge card |
| R3 | Most important insights from the information | S02 | §4 | S2 "Contract, read closely" badges; unit table |
| R4 | Evaluate options on financial and business parameters | S03 | §13 to §16 | S3 options table, score bars |
| R5 | Key trade-offs | S03 | §15, §16, §19 | S3 struck obvious answer, cost columns, shock heat map |
| R6 | Deploy ₹1 crore over 24 months | S04, T02 | §17 | S4 donut and uses table |
| R7 | Financial analysis and assumptions behind the allocation | S04, I04 | §17, §18, Appendix B | S4 cash lines, bridge, assumptions table |
| R8 | Final recommendation | S05 | §2, §25 | S5 answer card |
| R9 | 24-month roadmap | S05 | §22 | S5 Gantt and gates |
| R10 | Key risks and uncertainties | S05, U01 to U07 | §19, §21 | S5 risk grid; S3 heat map |
| R11 | Expected business impact | S05 | §18, §25 | S5 KPI table; S4 moneyshot |
| R12 | Annexure: calculations, model, assumptions, sensitivity, research, sources | N01 | Appendices A to F | S6 A1 to A4 |
| R13 | Financial position, growth, fleet strategy, operations, long-term position | T03 | §3, §9, §17, §23, §7 | S2 to S5 |
| R14 | Buy, lease, retain petrol, phase, expand, or combine | T04 | §13 to §16 | S3 six options |
| R15 | 75 vehicles in 12 months with high reliability | O02, O06 | §11, §22, §23 | S5 Gantt, gates G1 and G2 |
| R16 | 95% fulfilment | O03 | §11, §23 | S2 badge 3; S5 gate G2 |
| R17 | Low-emission share | O04 | §12, §16 | S5 KPI petrol bikes 0 |
| R18 | Monthly emissions reporting | O05 | §12, §24 | S4 uses (data and dispatch); S5 Gantt row |
| R19 | Investment before full utilisation | O08 | §18 | S4 cash line; working capital in the donut |
| R20 | Cite all external data | I03 | Appendix A | source line on every slide |
| R21 | State every major assumption | I04 | §19, Appendix B T16 | S4 assumptions table; S6 A2 |
| R22 | Additional alternatives welcome | I05 | §13, §16 | Option 6 (lease both, electrify first) is ours |
| R23 | Viable, implementable, supported | I06 | §18, §22, §23 | S5 gates |
| R24 | Judging criteria | I08 | §1.3 of this plan, research §1 | whole deck |

### §1.3 Judging criteria and where we win each

| Criterion `[C I08]` | What the judges look for | Where we win it | Evidence the judge sees |
|---|---|---|---|
| Understanding | Reads the case numbers closely | Seven case numbers that change the answer (§4): the ₹2.8 Cr contract is priced at 100% use; a charge covers exactly one full day; the lease includes running costs; the EMI alone exceeds the lease | S2 badges, unit table |
| Creativity | An alternative beyond the obvious | Lease both, electrify first, spend the crore on enablers; electrify before the contract so the operation is proven when volume arrives | S1 verdict, S3 struck card, S5 answer |
| Financial rigour | NPV, cash, financing, scenarios, sensitivity | 48-month NPV at 11%, monthly cash, debt sizing, bear and bull, tornado, switch points, uncertainty heat map | S3, S4, S6 |
| Feasibility | Practical, staged, risks handled | Waves and tranches, four gates, two lessors, spares, depot hub, reserve | S5 |
| Sustainability | Emissions, policy fit | 245 g to 108 g CO2 per delivery; zero petrol by month 12, two years before Delhi's 2028 registration rule | S2 timeline, S5 KPI, S6 A4 |
| Impact | Business outcome | ₹42 L to ₹2.06 Cr contribution a year, NPV +₹4.34 Cr against staying petrol | S4 moneyshot |

### §1.4 Team and naming (user decision, 15 Oct 2026)

| Field | Value |
|---|---|
| Team name | TEAM IDEAFORGE (cover and thank-you chip), "Team IdeaForge" in prose |
| Member 1 | Harsh Kawatra · Delhi Technological University (DTU) · Team Leader |
| Member 2 | Dayita Arora · Ramjas College, University of Delhi · Member |
| Research header | `Team: Harsh Kawatra (Delhi Technological University, Team Leader) and Dayita Arora (Ramjas College, University of Delhi), Team IdeaForge` |
| Cover and thank-you | Members \| Institution \| Role table (memory `feedback_cover_style.md`), no KPI-card row on the cover, the same table on the thank-you slide |
| Absent from every deliverable | Anuj, Gursimran (other projects' members); the deck sweep checks this |

### §1.5 Reference material (read the named parts before your phase)

| Purpose | Path or key | Read |
|---|---|---|
| Deck doctrine | `ROOT\CLAUDE.md` | all, before any deck step |
| Figma generator (proven, BeyondTech critique 43/45) | `ROOT\beyondtech-dcg\deck\` (`gen.py`, `_extras.js`, `_x2.js`, `_v1.js`, `_sweeps.js`, `metrics.json`, `preview.py`) | D1 (copied, never edited in place) |
| Shared preamble and offline mock (read-only, referenced by path from `gen.py`) | `ROOT\verdict-mnc\deck\preamble.js`, `ROOT\verdict-mnc\deck\mock_figma.js` | never edit |
| PDF template | `ROOT\iim-lucknow-pivot\research\build_pdf.py` | R6 (read-only, patched in memory by `assemble.py pdf`) |
| Register and honesty conventions | lines 1 to 140 of `ROOT\verdict-mnc\research\harvestbox-research.md` and of `ROOT\beyondtech-dcg\research\beyondtech-gtm-research.md` | writers, register only |
| Plans this one follows | `ROOT\eurogrip-case\PLAN.md`, `ROOT\verdict-mnc\PLAN.md` | style only |
| Visual models (screenshots, read-only) | Prime inspo `hOJVMGv9nIhDmayTT7DmOt` (slides `5:4` executive summary, `5:7` valuation); Dream11 `YoiazGGOribfg69EjEDIlP` (cover `2:2`); BeyondTech `cpcsN7ytWMJputcohXOMgz` (cover `2:2`, the mind-map model for our S1); also `e5VEexsLMhDampx7gvhFmM`, `vAIyXmljHlFDuwQo6RsoIN`, `APbOstO4SSU7iAjYIgEeSd`, `JLOOyohkQPUrwXEsxDKz4m` | D0 |
| Logos already on disk | `ROOT\verdict-mnc\deck3\logos\` (Flipkart, Blinkit, Zomato, Swiggy, Zepto, Instamart), `ROOT\beyondtech-dcg\deck\assets\logos\` (dtu.png, flipkart.png) | D5 |
| Do NOT use | `lsr-caseforchange\`, `lsr-revive\`, the Satoshi Gate cover (plain text card) | never |

### §1.6 Machine facts (verified at planning time, 15 Oct 2026)

| Fact | Value |
|---|---|
| Python | `PY` = `"C:\Users\harsh\AppData\Local\Programs\Python\Python312\python.exe" -X utf8` (has `markdown_it`, `fitz`, `PIL`, `requests`). Do not use the default `python` |
| Node | on PATH (the mock runs `node -`) |
| Chrome | `C:\Program Files\Google\Chrome\Application\chrome.exe` (headless PDF) |
| Shells | PowerShell 5.1 primary (no `&&`; chain with `;`). In PowerShell double-quoted strings a backtick is an escape character: never put Markdown fences or backticks inside a `python -c "..."` there; write a script file under `DF\` instead. The Git Bash wrapper mishandles apostrophes inside long heredocs: same remedy |
| Figma plan key | `team::1564294484048272772` (confirm with `whoami` in D2) |
| Repo root | `ROOT` as in §0.2 |

### §1.7 Planning-time evidence (leads to re-verify from primary sources; never cite as-is)

| Lead | What was seen at planning time | Verify at | Lane |
|---|---|---|---|
| L1 | PM E-DRIVE two-wheeler incentive extended to 31 Mar 2028 at ₹2,500 per kWh, capped at ₹5,000 a vehicle; e-2W allocation ₹2,767 crore (Autocar Pro, Aug 2026); earlier reports said it would end 31 Jul 2026 | MHI gazette notification, PIB, pmedrive.heavyindustries.gov.in | R-E |
| L2 | Delhi EV Policy 2.0 in force from 1 Jul 2026, valid to 31 Mar 2030; new two-wheeler registrations electric-only from 1 Apr 2028; purchase incentive tapering ₹30,000, ₹20,000, ₹10,000 (blogs and explainers) | Delhi Transport Department notification, ev.delhi.gov.in | R-E |
| L3 | Delhi Motor Vehicle Aggregator and Delivery Service Provider Scheme 2023, notified Nov 2023: fleets of 25+ vehicles, phased EV share for newly onboarded vehicles, all-electric by 1 Apr 2030 (sources disagree on the phase percentages) | Delhi gazette text | R-E |
| L4 | Delhi petrol ₹102.12 a litre on 29 Jul 2026 (Upstox); ₹98.64 on 19 May 2026 after a 90 paise rise (News On AIR); ₹94.77 in 2025; ₹94.72 after the March 2024 cut; ₹105.41 peak in April 2022; ₹96.72 after the May 2022 excise cut | PPAC price build-up, IOCL Delhi price history | R-D |
| L5 | Flipkart: EV100 member since Aug 2020, 100% EV logistics by 2030, past 10,000 EVs by Nov 2024 (electrive) | Flipkart sustainability pages, Climate Group EV100 | R-C |
| L6 | Amazon India: pledged 10,000 EVs in delivery by 2025; EVs in 20+ cities | Amazon India press releases | R-C |
| L7 | Zomato: pledged a 100% EV delivery fleet by 2030; about 33,000 active EV delivery partners (Nov 2023); Yulu DeX partnership 2023 | Eternal sustainability report, BRSR | R-C |
| L8 | Zypp Electric FY26: rental revenue ₹137.7 crore (+24%), loss ₹60 crore (−45%), battery-swapping cost ₹24 crore (Inc42) | Zypp filings via MCA or Inc42 with Tofler | R-B |
| L9 | No public B2B all-in lease rate for delivery e-scooters surfaced in a quick search; rider rental plans exist (daily, weekly, monthly) | Zypp, Yulu, eBikeGo, Alt Mobility, Battery Smart pages; press | R-B |
| L10 | CEA CO2 Baseline Database: weighted average grid emission factor about 0.7 t CO2 per MWh in recent versions | cea.nic.in, latest version PDF | R-G |
| L11 | IPCC 2006 Vol 2 Ch 3 default for motor gasoline; per-litre factor depends on density and NCV | ipcc-nggip.iges.or.jp | R-G |
| L12 | ISO 14083:2023 and the GLEC Framework (Smart Freight Centre) set how transport emissions are quantified and reported | iso.org, smartfreightcentre.org | R-G |
| L13 | SEBI BRSR Core and value-chain disclosures push listed clients to ask suppliers for emissions data | SEBI circulars | R-C |
| L14 | Labour codes, including the Code on Social Security 2020 provisions for gig and platform workers, notified in late 2025 | Ministry of Labour, PIB | R-E |

---

## §2 THE SOLVED CASE (skill generate mode, decided at planning time)

R0 confirms this section through the skill (T1, T2) and writes it into `research/ARGUMENT.md` in final wording. Lanes may
**correct facts** that feed it; they may not change the recommendation. If a lane finds a fact that trips a kill criterion
(§2.8), it writes it in `## Conflicts` and the orchestrator reports to the user before writers start.

### §2.1 Case type, audience, moneyshot form

| Item | Decision |
|---|---|
| Skill case type | Strategy (`case_types/strategy.md`) with a finance core (`case_types/mna_finance.md`, for NPV, financing and scenario discipline) and an operations core (`case_types/operations.md`, for fleet, uptime and service level) |
| Calibration | Extrapolated: not an M&A case (see §0.4 note) |
| Audience | SwiftKart management acting as a board: finance-literate, operational, cash-constrained |
| Moneyshot form | Strategy guide: "pursuing X versus Y captures ₹X more". Ours: **contribution rises from ₹42 L to ₹2.06 Cr a year by month 24 (4.9x) with no debt**, paired with NPV +₹4.34 Cr against staying petrol and ₹1.10 Cr more than buying both |

### §2.2 The obvious answers and why each falls short (case numbers only)

| Route | The obvious version | Why it falls short |
|---|---|---|
| Split the crore and buy (option 4, "both, buy") | "Do both: buy EVs for the existing fleet, borrow for the contract" | Buying the 185 EVs both jobs need (incl. 10 spares) costs ₹2.04 Cr after subsidy, twice the crore. It needs ₹1.00 Cr of bank debt at 11%, cash dips to ₹13 L, and it is worth ₹4.69 Cr over 48 months against ₹5.79 Cr for leasing both. In the bear case it needs ₹1.40 Cr of debt |
| Electrify first by buying (option 2) | "Fuel is the problem, so buy 100 EVs" | Uses ₹90 L of the crore net of petrol sales, leaves nothing for the contract's working capital, and forgoes the contract: NPV ₹2.94 Cr |
| Grow first by buying (option 3) | "Take the contract, keep petrol for now" | Needs ₹25 L of debt, keeps 100 petrol bikes exposed to fuel prices (−₹60 L of NPV if petrol rises 20%), and fails the client's low-emission preference on the existing fleet: NPV ₹3.38 Cr |
| Stay petrol (option 1) | "Wait for EV prices to fall" | Contribution stays at ₹42 L a year; petrol resale value falls as Delhi's 1 April 2028 electric-only registration rule approaches; clients move volume away: NPV ₹1.45 Cr |
| The arithmetic every buy option ignores | "A bought EV runs at ₹3,000 a month, cheaper than the ₹3,500 lease" | Running cost is not the full cost. A bought EV costs ₹5,684 a month all-in (₹2,843 capital at 11% over 48 months + ₹258 charging share − ₹417 resale credit + ₹3,000 running). The EMI alone on a financed EV, ₹3,601, is above the all-in lease |

### §2.3 The recommendation (contrarian pattern)

**Governing thought (verbatim for ARGUMENT.md, research §2 and the cover verdict):** "Do both, lease every bike, and spend
the crore on what a lease cannot buy."

| Element | Decision | Model input |
|---|---|---|
| Existing fleet | Lease EVs and sell the petrol bikes in three waves: 50 in month 2, 40 in month 4, the last 10 in month 12 (they run as a fallback while the contract ramps); 4 spare EVs | `WAVES`, `SPARE_E` |
| Contract | Bid with a working EV operation; on award (month 3 base) add 25 leased EVs in months 4, 6 and 8 with 2 spares per tranche; 75 riders hired | `award`, tranches, `SPARE_C` |
| Sequence | Electrify first so EV operations, charging and emissions reporting are proven before contract volume arrives (the contract asks for a low-emission share and monthly emissions data) | waves before tranches |
| The ₹1 crore | ₹35.1 L contract working capital (45-day receivables), ₹18.5 L charging hub (₹10,000 per EV per the case), ₹12.9 L lease deposits (2 months), ₹13.0 L reporting and pooled dispatch platform, ₹5.2 L rider hiring and EV training, ₹15.2 L reserve; ₹0 on vehicles | T9 |
| Financing | No bank debt; the 11% line stays undrawn as contingency | `loan` = 0 |
| Fallback | If the contract is not won, lease the 100 anyway (option "No award"): NPV ₹3.34 Cr, +₹1.88 Cr over staying petrol | O6 |
| The option to own | At lease renewal (month 36) buy only if the lease is repriced above ₹5,151 a month, the fleet-level switch point | T13 |

**Three reasons for, three against the alternatives** (research §2 and the deck):

| Side | Value | Liquidity | Resilience |
|---|---|---|---|
| Against buying both | ₹4.69 Cr NPV, ₹1.10 Cr below leasing | ₹1.00 Cr of debt, cash floor ₹13 L | carries battery, subsidy and resale risk (−₹18 L if the subsidy goes, −₹14 L if electricity rises 25%) |
| For leasing both | ₹5.79 Cr NPV, the highest of six | no debt, cash never below ₹1.02 Cr | fuel, subsidy, electricity and resale shocks move it by less than ₹1 L each |

### §2.4 The insights (each derivable from the brief; the writer of the named section develops it with arithmetic)

| # | Insight | Rests on | Research § | Slide |
|---|---|---|---|---|
| 1 | A petrol bike earns ₹26,520 a month at 85% use and keeps ₹3,520 (13.3%); rider pay takes 53% and petrol 34% | D02 to D08 | §3 | S2 |
| 2 | ₹2.8 Cr = 75 × 30 × 26 × ₹40 × 12, which is 100% utilisation; at SwiftKart's 85% it is ₹2.39 Cr | O02, O07, D08 | §4 | S2 |
| 3 | A charge covers 30 deliveries, exactly a full day at 100% use: no headroom on the contract fleet, while the existing fleet at 85% keeps 15% for battery wear | X02, X04, D08 | §11 | S2 |
| 4 | The lease includes running cost, so ₹3,500 all-in competes with ₹5,684 all-in for a bought EV; the EMI alone is ₹3,601 | D10 to D14, X08 | §9 | S3, S6 |
| 5 | Converting one petrol bike to a leased EV saves ₹5,500 a month and releases ₹30,000 of cash on day one | D06, D12, X05 | §9 | S4 bridge |
| 6 | Buying the 185 EVs both jobs need costs ₹2.04 Cr after subsidy, twice the crore | D10, X06, X01 | §15 | S2 card |
| 7 | Leasing stays cheaper than owning up to ₹5,151 a month at fleet level (47% above the case rate); a subsidy of ₹94,521 a bike would be needed for buying to match ₹3,500 | model T13 | §10 | S3, S6 |
| 8 | The contract adds value over petrol as long as volume exceeds 69% of the promised ₹2.8 Cr; one leased bike breaks even at 56% use | model T13 | §16 | S6 |
| 9 | The seven uncertainties in the case barely touch the leased plan: petrol, subsidy, electricity and EV-price shocks hit only the owners and petrol fleets | model T12 | §19 | S3 heat map |
| 10 | Price per delivery is the largest swing (₹36 to ₹44 moves NPV from ₹3.98 Cr to ₹7.61 Cr); the plan stays worth more than zero down to ₹27.2 a delivery | model T11, T13 | §19 | S6 |
| 11 | Working capital, not vehicles, is the largest use of cash: 45-day receivables on ₹23.4 L a month of contract revenue tie up ₹35.1 L | A01, O07 | §17 | S4 |
| 12 | Electrifying first makes the monthly emissions report a capability SwiftKart has before the contract starts, not a promise | O04, O05 | §12, §22 | S5 |
| 13 | Emissions per delivery fall from 245 g to 108 g CO2 (−56%) while deliveries rise 88%; absolute emissions fall from 195 t to 162 t a year | model T14 | §12 | S5, S6 |
| 14 | Delhi's rules (electric-only two-wheeler registrations from 1 April 2028; all-electric delivery fleets by 1 April 2030) make a petrol delivery bike a falling-value asset; selling at ₹30,000 now beats ₹12,000 later | L2, L3, X05, A17 | §8 | S2 timeline |

### §2.5 Rhetorical engineering (skill references `rhetoric.md`, `structure.md`)

- **Action titles.** Every slide headline (`V.h1` to `V.h5` in `make_values.py`) and every H2 in §4.5 is a finding with a number.
- **Foreshadowing.** The cover seed line ("A leased EV costs ₹3,500 a month all-in. A bought one costs ₹5,684.") and the
  S2 challenge card ("a cheaper way to get vehicles than owning them") seed the answer before S3 names it. In the
  document, §4 and §9 seed it before §16 names it.
- **Symmetric treatment.** The six options use one template in §14 to §16 (what it is, cash needed, debt, NPV, run-rate,
  emissions, exposure to the seven uncertainties, what would make it right) and one row each in the S3 table and heat map.
- **Three scenarios.** Bear, base, bull everywhere an uncertain number appears (T10).
- **Moneyshot.** Exactly one: the S4 card named `CARD: MONEYSHOT` (₹42 L to ₹2.06 Cr a year).
- **Pre-empting weaknesses.** Said plainly: the case's ₹3,500 all-in lease may be below market (switch point ₹5,151);
  the contract volume is the client's to give (break-even 69%); price per delivery is the largest swing.
- **Third-party validation.** Only verified statements by named organisations (client commitments, policy text). No anonymous experts.
- **Double synthesis.** S3 ends with a "CONCLUSIVELY" callout; research §16 ends with a paragraph beginning "Conclusively".
  S7 carries the "THEREFORE" card; research §25 ends with a paragraph beginning "Therefore".
- **Defensive depth.** S6 annexure (A1 to A4) and research Appendices A to F back every slide number.

### §2.6 The skill's 8-section logic, compressed

| Skill section | Deck | Research |
|---|---|---|
| Front matter | S1 cover (title, verdict, team table, mind map) | header, contents, §0 |
| I Executive summary | S1 verdict card; S5 answer card | §1, §2 |
| II Context + seed | S2 (petrol line, clients, policy clock) | §3 to §8 |
| III Actors, symmetric | S1 mind map (clients, lessors, charging, rules, makers); S3 six options | §5 to §7, §13 to §16 |
| IV Quantitative analysis + moneyshot | S3 table and score; S4 cash, bridge, moneyshot | §9 to §12, §17 to §19 |
| V Feasibility | S3 struck obvious answer; S5 gates, risks | §15, §20 to §23 |
| VI Recommended alternative | S4 allocation; S5 roadmap | §16, §17, §22 |
| VII Conclusion | S3 "CONCLUSIVELY"; S7 "THEREFORE" | §16 close, §25 close |
| Appendix | S6 | §26 to §28, Appendices A to F |

### §2.7 Frameworks used and where (use only these)

| Framework | Research § | Slide | Why here |
|---|---|---|---|
| Unit economics per bike-month (contribution, margin) | §3, §9 | S2 | The case's own currency |
| Total cost of ownership and lease-versus-buy (annuity method at 11%) | §9, §10, §20 | S3, S6 | Settles buy versus lease |
| NPV over 48 months, monthly cash, debt sizing to a cash floor | §17, §18 | S3, S4 | The ₹1 crore question is a cash question |
| MECE option filter and weighted scorecard with its formula | §13 | S3 | Six options, one rule set |
| Porter's five forces and strategic groups | §7 | none | Position of a 100-bike fleet operator |
| PESTLE, compressed to a policy clock | §8 | S2 | Delhi's rules set the timetable |
| Scenario analysis, tornado, switch points | §19 | S6 | Every uncertain number as a range |
| Uncertainty exposure matrix (the case's U01 to U07 against each option) | §19 | S3 | Answers the case's uncertainty list directly |
| Real options (the option to buy at renewal; the no-award branch) | §20, §22 | S5 | Leasing keeps choices open |
| Risk register with probability and impact, pre-mortem | §21 | S5 | Risks and controls 1:1 |
| Stage gates and RACI | §22, §23 | S5 | 24-month roadmap |
| KPI tree and monthly reporting pack | §24 | S5 | Contract demands monthly metrics |
| GHG Protocol scopes, ISO 14083 and GLEC method | §12 | S6 | Monthly emissions reporting |
| People, planet, profit | §25 | S5 | Impact |

### §2.8 Kill criteria (any one triggers a report to the user before writers start)

1. Verified B2B all-in EV lease quotes in Delhi-NCR for delivery fleets sit consistently above ₹5,151 a month **and** no
   lessor offers a 36-month fixed rate below it. Response: keep the case value as base (it is a case fact), move the
   market rate into bear (already ₹5,000), and add to §10 and the deck's A3 a sentence that leasing then needs a negotiated
   rate; do not change the recommendation without the user.
2. PM E-DRIVE or Delhi EV Policy 2.0 turns out to give a fleet operator ₹90,000 or more per purchased EV. (Planning
   evidence says ₹5,000 national plus Delhi's tapering incentive; buying would only match leasing at ₹94,521.)
3. A verified client term sheet norm requires owned vehicles (none known).

### §2.9 Locked numbers (reference output of the model, hash `1f2b5c9715`)

Step M1 must reproduce these at the precision shown (lakh to 0.1, crore to 0.01). If a lane forces an assumption update
(§4.4), the hash changes and the orchestrator regenerates this table from `model_tables.md` into `research/ARGUMENT.md`.

| Item | Value |
|---|---|
| Per bike-month at 85%: revenue, rider, petrol, contribution, margin | ₹26,520, ₹14,000, ₹9,000, ₹3,520, 13.3% |
| Bought EV all-in a month (capital ₹2,843, charging ₹258, resale −₹417, running ₹3,000) | ₹5,684 |
| Leased EV all-in a month; EMI on a financed EV (₹1,10,000, 11%, 36 months) | ₹3,500; ₹3,601 |
| Contribution per bike-month: petrol, bought EV running only, bought EV all-in, leased, leased at 100% | ₹3,520, ₹9,520, ₹6,836, ₹9,020, ₹13,700 |
| Contract revenue at 100% and at 85% | ₹2.81 Cr and ₹2.39 Cr a year |
| Options, NPV over 48 months at 11% (₹ Cr): 1 stay petrol, 2 electrify buy, 3 grow buy, 4 both buy, 5 grow lease, 6 both lease, no award | 1.45, 2.94, 3.38, 4.69, 3.83, 5.79, 3.34 |
| Run-rate contribution at month 24 (₹ L a year), same order | 42.2, 114.2, 150.6, 220.7, 143.6, 206.0, 104.7 |
| Debt needed (₹ L), same order | 0, 0, 25, 100, 0, 0, 0 |
| Cash at month 24 (₹ Cr), same order | 1.84, 2.31, 1.96, 2.39, 2.63, 3.84, 2.97 |
| Lowest cash (₹ L), same order | 103.5, 21.5, 13.1, 13.4, 76.3, 101.6, 103.5 |
| g CO2 per delivery at month 24, same order | 245, 116, 176, 108, 176, 108, 116 |
| Scores (out of 5): options 1 to 6 | 1.80, 3.15, 3.00, 3.85, 3.60, 5.00 |
| Recommended: contribution today to month 24 | ₹42.2 L to ₹2.06 Cr a year (4.9x) |
| Recommended: NPV gain over staying petrol; over buying both | +₹4.34 Cr; +₹1.10 Cr |
| Recommended: cash low and month; cash at month 24 | ₹1.02 Cr in month 2; ₹3.84 Cr |
| Uses of the ₹1 crore (₹ L) | working capital 35.1, charging hub 18.5, lease deposits 12.9, reporting and dispatch 13.0, riders 5.2, reserve 15.2 |
| Petrol sale proceeds over 24 months | ₹29.7 L |
| Contribution bridge (₹ L a year) | 42.2 + 66.0 fuel to lease − 1.7 spares + 123.3 contract − 2.5 spares − 18.0 overhead − 3.3 reporting = 206.0 |
| Fleet at quarter end (petrol, EV existing, EV contract) | Q1 50, 50, 0; Q2 10, 90, 50; Q3 10, 90, 75; Q4 to Q8 0, 100, 75; spares 10 |
| Scenarios, recommended (bear, base, bull): NPV ₹ Cr; run-rate ₹ L; low cash ₹ L | 1.50, 5.79, 6.80; 67.6, 206.0, 229.4; 63.0, 101.6, 105.1 |
| Scenarios, buy both (bear, base, bull): NPV ₹ Cr; debt ₹ L | 1.35, 4.69, 5.67; 140, 100, 65 |
| Tornado (NPV ₹ Cr, low to high) | price per delivery 3.98 to 7.61; contract volume 4.24 to 5.79; lease rate 4.79 to 6.13; utilisation 5.18 to 6.40; rider pay 4.77 to 5.79; discount rate 5.33 to 6.04; EV availability 5.41 to 5.79; award month 5.57 to 5.87; receivable days 5.72 to 5.83 |
| Switch points | lease ₹5,151 a month (fleet), ₹5,684 (one bike); subsidy ₹94,521; contract volume 69.4%; one-bike contract break-even 56.1%; price per delivery for zero NPV ₹27.2 |
| Emissions (today, month 24) | 195 t and 162 t CO2 a year; 245 g and 108 g per delivery; deliveries 66,300 and 1,24,800 a month |

### §2.10 The honest reading (write into §18 and §19 without softening)

1. The ₹3,500 all-in lease is a case figure. Real fleet quotes may be higher; leasing still wins up to ₹5,151, and the
   bear case already uses ₹5,000. If a lessor will not hold ₹5,151 or less for 36 months, the answer for the contract fleet
   flips to buying with debt, and the document says so.
2. The recommended plan's month-24 run-rate (₹2.06 Cr) is below buying both (₹2.21 Cr): owning is cheaper to run once paid
   for. Leasing wins on value over 48 months, on liquidity and on resilience, not on monthly margin. In the bear case the
   gap in run-rate is larger (₹68 L against ₹1.16 Cr) and leasing still wins on NPV (₹1.50 Cr against ₹1.35 Cr) because
   buying then needs ₹1.40 Cr of debt.
3. The contract is half the value. It is the client's to give; the no-award branch is worth ₹3.34 Cr and is still the
   best non-contract option.
4. Contribution is not profit: the case gives no fixed overhead, so the document never claims EBITDA or net profit.
5. The emissions figures rest on assumed fuel economy (42 km a litre), EV energy use (0.036 kWh a km) and the CEA grid
   factor; lane R-D and R-G may move them, and the model is rerun if they do.

### §2.11 Assumptions

The 26 assumptions with base, bear, bull and basis are the `AS` list in Q.1 and appear as model table T16 (Appendix B).
Bear is always the value least favourable to the recommendation. The eight that matter most for the deck are shown on
S4 ("What has to be true") and S6 (A2).

---

## §3 SEQUENCE, DISPATCH, FOLDERS

### §3.1 Bootstrap (orchestrator, first actions, in order)

B0. Copy this plan byte for byte to `DF\PLAN.md` (PowerShell):
`Copy-Item -LiteralPath "C:\Users\harsh\.claude\plans\working-folder-dreamforge-case-rippling-snowflake.md" -Destination "<ROOT>\dreamforge-case\PLAN.md"`.
Executors read `DF\PLAN.md`, never the `.claude\plans` copy (a later session may overwrite it).

B1. Open `DF\PLAN.md`, find the block under `<!-- FILE: extract.py -->` (Q.5), and create `DF\extract.py` with exactly that
block's content using the Write tool. Run `PY DF\extract.py`. Done when it prints `files 15`.

B2. Create `DF\build-log.md` (header `# Build log`, date) and `DF\DECISIONS.md` (header `date | step | decision | why`).

B3. Run `PY DF\model\swiftkart_model.py --dry`. Done when it prints 18 PASS lines, `HASH 1f2b5c9715` and `MODEL PASS`.
Then run it without `--dry` to write `model_outputs.json` and `model_tables.md`.

### §3.2 Step sequence and gates

The case gives teams 24 hours `[C I01]`. The critical path is lanes → final model → deck, so the deck is built while the
writers write. The deck still derives from the research: step D7 checks every slide claim against the finished document.

| Order | Step | Agents | Output | Gate |
|---|---|---|---|---|
| 1 | B0 to B3 bootstrap | orchestrator | files, logs, model v0 | `files 15`, `MODEL PASS` |
| 2 | R0 setup | orchestrator | folders, `ARGUMENT.md`, registers, CSV headers | G-R0 |
| 3 | R1 wave 1: R-A, R-B, R-C | 3 parallel, background | raw files + CSVs | |
| 4 | R1 wave 2: R-D, R-E, R-F | 3 parallel, background | raw files + CSVs | |
| 5 | R1 wave 3: R-G, R-H | 2 parallel, background | raw files + CSVs | G-R1 |
| 6 | R2 verification V1, V2 | 2 parallel | `raw/R0-verify.md` | G-R2 |
| 7 | M1 assumption update and final model run | orchestrator | final `model_outputs.json`, `model_tables.md` | G-M |
| 8 | R3 writers A, B, C | 3 parallel, background | parts A to C | |
| 8b | D0 to D5 deck build (in parallel with writers) | orchestrator only (Figma) | 7 slides | per-slide V1 |
| 9 | R3 writers D, E, F | 3 parallel, background | parts D to F | |
| 10 | R3 writer G | 1 | part G + glossary | G-R3 |
| 11 | R4 assemble | orchestrator | `swiftkart-research.md` | ASSEMBLY PASS |
| 12 | R5 critique and fixes (T6) | CR, then writers | `research/critique.md` | |
| 13 | R6 PDF | orchestrator | html, pdf | G-R |
| 14 | D6 sweeps and deck critique (T5); D7 derivation check against the finished research | orchestrator, CR | `deck/critique.md`, `deck/derivation.md` | G-D |
| 15 | D8 previews and export | orchestrator | preview PDF | |
| 16 | Final verification §6, hand-off §9 | orchestrator | report, memory | DONE |

### §3.3 Dispatch rules

- Agent tool, `subagent_type: "general-purpose"`, `model: "sonnet"`, `run_in_background: true` for lanes and writers.
  **At most 3 sub-agents at once.** Figma calls are made only by the orchestrator, one at a time.
- Every dispatch prompt starts with this block (fill `<>`):
  ```
  You are executor <step id> for the SwiftKart (Dream Forge 3.0) build. Working folder:
  C:\Users\harsh\Desktop\HARSH\PPTS-CASE-STUDY\nsut-innovators-court\dreamforge-case
  Read dreamforge-case\PLAN.md sections §0, §1, §2 and <sections for your task> in full before acting.
  Follow the golden rules (§0.3) and the style contract (§0.5). Invoke the case-competition-deck skill where your
  section says so (touchpoint <Tn>) and log "SKILL Tn: ..." in build-log.md.
  Append your log entry to dreamforge-case\build-log.md: step id, what you did, verification output pasted, residuals.
  Report in at most 12 lines, ending with STATUS: PASS | PASS WITH RESIDUALS | FAIL.
  ```
- A FAIL is re-dispatched once with the failure text appended. A second FAIL stops that phase; the orchestrator reports.
- On a rate-limit error, relaunch after the reset time in the error. Sub-agents write only their own files.

### §3.4 Folder layout (create exactly in R0)

```
dreamforge-case\
  Dream_Forge_3_0_Case_Problem_Statement.pdf   (exists, never modified)
  PLAN.md  extract.py  build-log.md  DECISIONS.md
  case\01-case-brief.md
  model\swiftkart_model.py  model_outputs.json  model_tables.md
  research\
    ARGUMENT.md  assemble.py  build_pdf.py (written by assemble.py pdf)  critique.md
    raw\R-A-market.md  R-B-leasing.md  R-C-clients.md  R-D-vehicles-energy.md  R-E-policy.md  R-F-operations.md
        R-G-emissions.md  R-H-methods.md  sources.md  conflicts.md  R0-verify.md  pdf\<lane>\ (downloads)
    data\market.csv  lease_quotes.csv  client_commitments.csv  fuel_prices.csv  ev_models.csv  energy_tariffs.csv
         policy_timeline.csv  ops_benchmarks.csv  emission_factors.csv
    parts\WRITER-BRIEF.md  part-A.md .. part-G.md  appendix-E-glossary.md
    swiftkart-research.md  swiftkart-research.html  swiftkart-research.pdf
  deck\
    gen.py  _palette.js  _extras.js  _x2.js  _v1.js  _sweeps.js  setup.js  metrics.json  preview.py  patch_tooling.py
    make_values.py  slides\s01.js .. s07.js  slide-copy.md  derivation.md  slide-ids.json  figma.md  critique.md
    logos\ (+ manifest.json)  shots\  build\ (generated)  SwiftKart_DreamForge3_preview.pdf
```

---

## §4 PHASE R: THE RESEARCH DELIVERABLE

### §4.0 Targets and acceptance (gate G-R)

| Metric | Minimum | Checked by |
|---|---|---|
| Words (whole document) | 80,000 (target 95,000) | `assemble.py md` |
| Markdown tables | 180 (target 220) | `assemble.py md` |
| H2 sections opening with `**Answer.**` | 29 (§0 to §28) | `assemble.py md` |
| Em or en dashes anywhere in the assembled document | 0 | `assemble.py md` |
| Exclamation marks; question-mark headings; banned words | 0 | `assemble.py md` |
| "Rs" followed by a number in authored parts | 0 | `assemble.py md` (`rs_text`) |
| Unfilled `<...>` placeholders | 0 | `assemble.py md` |
| Cited S-IDs missing from the register | 0 | `assemble.py md` |
| Duplicate headings | 0 | `assemble.py md` |
| Sources in the register; sources cited | ≥ 300; ≥ 180 | `register`, `cited_S` |
| Primary-tier share of cited sources | ≥ 40% | `primary_share` |
| PDF renders with cover, contents, page numbers | yes | Read pages 1 to 3 and three random pages |
| Critique (T6) | all CRITICAL and IMPORTANT fixed | `research/critique.md` |

Depth benchmarks: `beyondtech-dcg\research\beyondtech-gtm-research.md` (100,310 words) and
`verdict-mnc\research\harvestbox-research.md` (88,937 words, 193 tables).

### §4.1 Step R0: setup (orchestrator)

1. Create the §3.4 folders.
2. Invoke the skill (T1, T2); read the files listed in §0.4. Write `research/ARGUMENT.md` with these H2s, filled from §2
   in final wording: `## Case type and calibration`, `## The obvious answers and why each falls short`,
   `## The recommendation and three reasons`, `## The moneyshot`, `## The seed and where it appears`,
   `## Frameworks and where`, `## Kill criteria`, `## Locked numbers` (copy §2.9), `## The honest reading` (copy §2.10).
   Log `SKILL T1` and `SKILL T2`.
3. Create `research/raw/sources.md`:
   ```
   # Source register
   | S-ID | Source (Publisher (year) 'Title') | URL | Accessed | Used in |
   |---|---|---|---|---|
   | S001 | IEEE DTU (2026) 'Dream Forge 3.0 Round 2 case problem statement' | local file dreamforge-case/Dream_Forge_3_0_Case_Problem_Statement.pdf | 15 Oct 2026 | all |
   ```
   The assembler parses `^\| (S\d{3}) \|(.+?)\|(.+?)\|(.+?)\|(.+?)\|$`: exactly five cells, never a pipe inside a cell.
4. Create `research/raw/conflicts.md` with `# Data conflicts and rulings` and the header
   `| C-ID | Claim | Source A says | Source B says | Ruling | Basis |`.
5. Create every CSV in `research/data/` with only its header row (headers in §4.2).
6. Copy the writer rules in §4.5 verbatim into `research/parts/WRITER-BRIEF.md`.

Gate G-R0: all files exist; `ARGUMENT.md` has the 9 headings filled; build-log has SKILL T1 and T2.

### §4.2 Step R1: research lanes

**Raw file schema (every lane, exactly):**

```
# R-X: <lane title>
Accessed: <date range>. Researcher: lane agent R-X.

## Facts
| R-ID | Fact (exact figure + period + unit) | S-ID | Source title | Publisher | URL | Date accessed | Verbatim snippet (max 25 words) | Status |
|---|---|---|---|---|---|---|---|---|
| RX01 | ... | S0nn | ... | ... | https://... | 15 Oct 2026 | "..." | VERIFIED |

## Gaps
- <question not answered> | queries tried: "<q1>", "<q2>", "<q3>" | best fallback: <assumption needed>

## Conflicts
- C-X1: <two sources disagree on ...> (also appended to raw/conflicts.md)

## Quotes (verbatim, for third-party validation; optional)
| Q-ID | Speaker, role, organisation | Quote (verbatim, max 40 words) | Date | S-ID |
```

Rules:
- **S-ID is the third column** (the assembler resolves R-IDs to S-IDs with `^\|\s*(R[A-H]\d{2,3})\s*\|.*?\|\s*([^|]+?)\s*\|`).
  R-ID prefixes RA to RH, numbered RA01 to RA99, then RA100.
- Status: `VERIFIED` (page opened, figure matches), `CORRECTED` (opened, figure differed; row shows the corrected figure),
  `SNIPPET` (only seen in a search snippet; never the sole support for a deck number), `UNVERIFIABLE`.
- New S-IDs are appended to `raw/sources.md` by the lane from its **reserved block**: R-A S002 to S079 · R-B S080 to S159 ·
  R-C S160 to S239 · R-D S240 to S319 · R-E S320 to S399 · R-F S400 to S469 · R-G S470 to S529 · R-H S530 to S589 ·
  V1 S590 to S619 · V2 S620 to S649 · orchestrator S650 to S699.
- Target 60 to 90 fact rows per lane; at least 85% VERIFIED or CORRECTED.
- Tools: WebSearch (`mode: "standard"` first; `"extended"` for niche, recent or numeric facts), WebFetch, and Python for
  PDFs: download into `research\raw\pdf\<lane>\` with `requests`, read with `fitz` under `PY -I`, never execute anything
  downloaded. Government notifications and annual reports are PDFs: read their tables with PyMuPDF.
- Each lane fills its CSVs (one row per item; a `source_sid` column always filled; prices state GST inclusion).
- Write the lane file incrementally (after every ~15 rows).
- Never write analysis or recommendations in a raw file. Never convert foreign currency to rupees.
- Source titles and CSV cells end up in Appendices A and C, and the assembler rejects any em or en dash anywhere in the
  document: when a real title contains a dash, write a comma in its place in `sources.md` and in every CSV (the snippet
  column keeps the source's words but also replaces dashes with commas). Never write "Rs" in a CSV; use ₹ or a bare number
  with the unit in the column name.

**R-A Delhi-NCR last-mile delivery and quick commerce (S002 to S079).** CSV `market.csv`
(`metric,value,unit,period,geography,source_sid,note`).
1. Size and growth of Indian e-commerce logistics and last-mile delivery (named reports: RedSeer, Bain "How India Shops
   Online", Avendus, CRISIL, ICRA), with each report's definition.
2. Quick commerce: GMV, orders, dark stores and cities for Blinkit (Eternal annual report and shareholder letters),
   Swiggy Instamart (Swiggy annual report), Zepto (press, DRHP if filed); Delhi-NCR share where stated.
3. Third-party logistics players with last-mile two-wheeler fleets: Delhivery (annual report, Ecom Express acquisition),
   Shadowfax (DRHP: per-order economics, rider base, EV share, receivable days, client concentration), Ekart, Xpressbees.
4. Per-delivery prices and rider payouts in Indian last mile (DRHPs, Fairwork India reports, NITI Aayog 2022 "India's
   Booming Gig and Platform Economy": 77 lakh gig workers 2020-21, projection for 2029-30; confirm).
5. Delhi-NCR specifics: two-wheeler registrations (VAHAN), delivery activity, heat and pollution episodes affecting operations.
6. Client concentration norms and contract lengths for 3PL fleet operators.

**R-B EV leasing, swapping and financing (S080 to S159).** CSV `lease_quotes.csv`
(`provider,product,customer_type,monthly_rs,includes,deposit_rs,term_months,city,date,source_sid,note`).
1. Fleet and rider leasing providers in Delhi-NCR: Zypp Electric (FY26 financials, fleet, rental revenue; lead L8),
   Yulu (DeX, Zomato tie-up; lead L7), eBikeGo, Alt Mobility, Battery Smart, Sun Mobility, Gogoro (Zypp pilot), others.
   For each: model, fleet size, cities, what the rent includes (battery, swaps, maintenance, insurance), deposit, term.
2. Every public monthly, weekly or daily rent you can find (rider or B2B), normalised to a month with the arithmetic shown.
   Lead L9: there may be no public B2B all-in quote; record what exists and log the gap honestly.
3. Battery swapping: station counts in Delhi-NCR, swap time, price per swap or subscription.
4. Bank and NBFC loan rates for commercial two-wheeler EVs and for MSMEs (RBI data, SBI, SIDBI programmes), typical tenure,
   margin money; compare with the case's 11% over 3 years.
5. GST on EV leasing and rental, on EVs, on chargers, on battery swapping (CBIC notifications).
6. Lease accounting: Ind AS 116 (right-of-use asset and lease liability) versus AS 19 for smaller companies (ICAI).

**R-C Clients and contract norms (S160 to S239).** CSV `client_commitments.csv`
(`company,commitment,target_year,status_stmt,fleet_ev_count,date,source_sid`).
1. Flipkart (lead L5), Amazon India (L6), Zomato/Eternal and Blinkit (L7), Swiggy, Zepto, BigBasket, Meesho: EV fleet
   commitments, progress, verbatim statements with dates.
2. Climate Group EV100 members in India and their commitments.
3. SEBI BRSR and BRSR Core: value-chain disclosure and assurance timelines (lead L13), and what that means for suppliers.
4. Service-level norms in Indian last-mile contracts: delivery success rates, penalties (DRHPs, contracts disclosed in
   filings, industry reports).
5. Receivable days of listed or DRHP-filing logistics companies (Delhivery, Shadowfax, Blue Dart): the basis for A01.

**R-D Vehicle and energy economics (S240 to S319).** CSVs `fuel_prices.csv` (`date,city,product,price_rs_per_litre,source_sid`),
`ev_models.csv` (`model,maker,segment,battery_kwh,range_km_claimed,top_speed,price_rs,cargo_rating,source_sid`),
`energy_tariffs.csv` (`tariff,category,rs_per_kwh,period,source_sid`).
1. Delhi petrol retail price history 2021 to 2026, at least six dated points (PPAC, IOCL; lead L4). These feed
   `PETROL` in `make_values.py`.
2. Fuel economy of 100 to 125 cc commuter motorcycles in city use (ARAI type-approval figures and independent real-world
   tests); the delivery stop-start penalty if any source quantifies it. Feeds A22.
3. Electric scooters used for delivery: models, battery size, claimed and real range, price (₹1.0 to 1.3 lakh in the
   case; check), energy use in Wh a km (independent tests, ICCT, ARAI). Feeds A23.
4. Battery degradation of lithium-ion two-wheeler packs (cycles to 80% capacity; LFP versus NMC); heat effects.
5. Electricity tariffs for EV charging in Delhi (DERC tariff orders: EV charging station category), public charging prices.
6. Charger costs for light EVs (Bharat AC-001 type, LEV chargers), installation, depot layouts.
7. TCO studies of electric versus petrol two-wheelers in Indian delivery use (NITI Aayog and RMI, ICCT, WRI India, CEEW).
8. Maintenance cost comparisons (petrol versus electric two-wheelers).

**R-E Policy and regulation (S320 to S399).** CSV `policy_timeline.csv` (`date,jurisdiction,instrument,provision,applies_to,source_sid`).
1. PM E-DRIVE: notification, amounts by year, the extension (lead L1), fund limits, eligibility for fleet buyers.
2. Delhi EV Policy 2.0 (2026): incentives, eligibility for commercial and fleet buyers, electric-only registration dates
   (lead L2). Feeds `POLICY` and `PMLINE` in `make_values.py`.
3. Delhi Motor Vehicle Aggregator and Delivery Service Provider Scheme 2023: exact text of the fleet EV provisions,
   phases, penalties (lead L3).
4. Commission for Air Quality Management directions on NCR delivery fleets, if any; road tax and registration waivers.
5. GST rates (cross-check R-B item 5). Battery safety standards (AIS-156 amendments).
6. Labour codes and gig-worker provisions (lead L14); Delhi minimum wages for unskilled workers (to compare with the
   case's ₹14,000 rider pay, which the document treats as given). Feeds A16.

**R-F Operations benchmarks (S400 to S469).** CSV `ops_benchmarks.csv` (`metric,value,unit,context,source_sid`).
1. Deliveries per rider per day in Indian last mile; utilisation and fleet availability norms.
2. Spare-vehicle ratios used by fleet operators; charging and swap downtime.
3. Rider onboarding costs (verification, training, kit, insurance) and attrition in delivery (Fairwork, TeamLease, press). Feeds A03.
4. Telematics devices and fleet software in India: device price, monthly SaaS (vendor pages, flagged). Feeds A05, A06.
5. Pooled dispatch and route optimisation: published productivity effects (association, not proof).
6. Heatwave and monsoon effects on Delhi delivery operations and EV batteries.

**R-G Emissions measurement (S470 to S529).** CSV `emission_factors.csv` (`factor,value,unit,scope,source_sid,note`).
1. IPCC 2006 Guidelines Vol 2 Ch 3 default for motor gasoline; density and net calorific value; derive kg CO2 per litre
   with the arithmetic (lead L11). Feeds A21.
2. India GHG Program (WRI India, CII, TERI) mobile combustion factors for petrol, if published.
3. CEA CO2 Baseline Database, latest version: weighted average grid emission factor (lead L10). Feeds A24.
4. GHG Protocol: Scope 1, 2 and the client's Scope 3 Category 4 (upstream transport); ISO 14083:2023; GLEC Framework
   (lead L12): what a monthly transport emissions report must contain.
5. Green power options in Delhi (DERC green energy tariff, open access) for a bull case on Scope 2.

**R-H Methods and precedents (S530 to S589).** No CSV.
Cite the original sources for: lease versus buy (Myers, Dill and Bautista 1976, Journal of Finance); NPV and capital
budgeting (Brealey, Myers and Allen); real options (Dixit and Pindyck 1994; Trigeorgis 1996); Porter's five forces
(Porter 1979, 2008); scenario planning (Schoemaker 1995); pre-mortem (Klein 2007); stage-gate (Cooper 1990); balanced
scorecard (Kaplan and Norton 1992); TCO methods for vehicles (ICCT); fleet electrification precedents in India and abroad
(published case studies by named organisations: India Smart Utility, RMI, Climate Group), with outcomes as stated.

Gate G-R1: every lane file has ≥ 60 rows, ≥ 85% VERIFIED or CORRECTED, sections Gaps and Conflicts present; every CSV
filled with `source_sid`; S-IDs unique across the register. Check with:
`PY -c "import re,glob,collections;rows=[l for f in glob.glob(r'<DF>\research\raw\R-*.md') for l in open(f,encoding='utf-8') if re.match(r'^\|\s*R[A-H]\d',l)];print(len(rows));reg=[l.split('|')[1].strip() for l in open(r'<DF>\research\raw\sources.md',encoding='utf-8') if l.startswith('| S')];print(len(reg),'dups',[k for k,v in collections.Counter(reg).items() if v>1])"`

### §4.3 Step R2: verification (2 agents in parallel)

V1 checks R-A to R-D; V2 checks R-E to R-H. For a random 20% of VERIFIED rows per lane (pick with
`random.Random(20261015).sample`), reopen the URL and confirm figure and snippet. **100% check** for every row that feeds
the model or the deck: rows behind assumptions A01 to A03, A05, A06, A12, A16, A17, A19 to A24; every row behind
`PETROL`, `POLICY`, `PMLINE`, `CLIENTS` and `BIBLIO` in `make_values.py`. Mismatch → flip to CORRECTED or UNVERIFIABLE
and log in `conflicts.md`. Output `raw/R0-verify.md` with `| Lane | Rows checked | Pass | Corrected | Unverifiable |`.
Gate G-R2: pass rate ≥ 90% per lane; otherwise that lane re-runs its failing questions once.

### §4.4 Step M1: assumption update and final model run (orchestrator)

1. For each assumption below, read its feeding rows. Change the base value in the extracted `model\swiftkart_model.py`
   only if a VERIFIED or CORRECTED row contradicts it, and only within the rule shown. Log every change in `DECISIONS.md`
   with the R-ID.

| Assumption | Update rule |
|---|---|
| A20 petrol price | Set to the latest verified Delhi price, rounded to 0.5 |
| A21 petrol factor | Set to the IPCC-derived kg per litre, two decimals |
| A22 fuel economy | Set to the median of verified real-world city figures for 100 to 125 cc bikes, then subtract any verified stop-start penalty; if none, keep 42 |
| A23 EV energy | Set to verified Wh a km × 1.1 for charging losses, three decimals |
| A24 grid factor | Set to the latest CEA weighted average, three decimals |
| A01 receivable days | Set base to the median verified receivable days of Indian logistics companies, within 30 to 75 |
| A02, A03, A05, A06 | Move only if verified figures fall outside the bear to bull range; then set base to the verified midpoint |
| A12 lease rate | **Never change the base (₹3,500 is a case fact, D12).** If verified market quotes sit above ₹5,000, set bear to the verified median and report under kill criterion 1 |
| Case facts F | Never change |

2. Run `PY DF\model\swiftkart_model.py`. Done when `MODEL PASS`. If any check fails, stop and report to the user with the
   failing line; do not edit a check.
3. Log the new hash and the `FINDINGS` line. If the hash changed, regenerate the locked-numbers table in `ARGUMENT.md`
   from `model_tables.md` and list every changed number under `## Corrections for writers` in `build-log.md`.

Gate G-M: `MODEL PASS`; `model_tables.md` has T1 to T17; hash logged.

### §4.5 Step R3: writers (seven parts; at most 3 at once; order A, B, C, then D, E, F, then G)

**Writer rules** (copy verbatim into `parts/WRITER-BRIEF.md`; paste into every writer prompt):
- Use the exact H2 titles below, in order, numbered `## N. Title`. Replace every `<...>` with the real number from the raw
  files or the model, with its unit. Each H2 opens with `**Answer.** <2 to 4 sentences: the finding with numbers and
  tags>` and ends with `### What this section establishes, and what it does not` (3 to 6 bullets). H3s are `### N.M Title`.
- **No browsing.** Use only `research/raw/*`, `research/data/*.csv`, `model/model_tables.md`, `model/model_outputs.json`,
  `case/01-case-brief.md`, `research/ARGUMENT.md`. Arithmetic on cited numbers is allowed: show it inline once.
- Tags, in square brackets: `[C D05]` brief sentence, `[A12]` assumption, `[M]` model output, `[T5]` model table,
  `[RA12]` raw fact (primary provenance), `[S123]` source. Every number carries a tag. Any paragraph that uses an
  assumption says "assumption" once. Aggregator-only or vendor-only facts carry "(aggregator-reported)" or "(vendor-reported)".
- Options are always "option 1" to "option 6" with the descriptions in T4 ("option 6, leasing both fleets and
  electrifying first"); the no-award branch is "the no-award branch". No other labels.
- Symmetric template for each option in §14 to §16, H3s in this order: `What it is`, `Cash and debt`, `Value over 48
  months`, `Run-rate and margin`, `Emissions and the contract test`, `Exposure to the seven uncertainties`,
  `What would make it right`.
- Each section that feeds a slide ends with a line `Exhibit for the deck: <slide and panel from §5.5, or "none">`.
- Style §0.5. No em or en dashes. No question headings. No exclamation marks. ₹ with Indian grouping, never "Rs".
- Self-check after every H2 (paste the output in your report):
  `PY -c "import re,io;t=io.open(r'<part>',encoding='utf-8').read();print('words',len(t.split()),'tables',len(re.findall(r'^\|[ :|-]+\|\s*$',t,re.M)),'dashes',len(re.findall('[\u2014\u2013]',t)),'excl',t.count('!'),'ph',len(re.findall(r'<[a-z][^>]{0,20}>',t)),'rs',len(re.findall(r'\bRs\.? ?\d',t)))"`
  must print `dashes 0`, `excl 0`, `ph 0`, `rs 0`. (Run it from a `.py` file if PowerShell mangles the quotes: §1.6.)
- Append to the file after each H2.
- Before finishing, invoke the skill (T3) and check every H2 and H3 title against `rhetoric.md`; log `SKILL T3`.

**Outline (exact H2 titles; `<...>` filled from data, never invented):**

| § | H2 title (exact) | Must contain | Tables min | Words min | Writer |
|---|---|---|---|---|---|
| 0 | 0. Document control | purpose and reader; tag legend; source hierarchy (§0.3 rule 7); verification status by lane (from R0-verify); model version and hash; what is case fact, assumption, model output and outside evidence; the skill's calibration note; how to rerun the model; document map | 6 | 1,800 | A |
| 1 | 1. Every line of the brief, mapped: where it is answered and on which slide | RTM for every brief ID (H01 to I08) with how we use it, section and slide; judging criteria map (§1.3); where the evidence is thinnest | 4 | 2,500 | A |
| 2 | 2. The answer on one page: lease every bike, electrify first, win the contract, and keep ₹15.2 L of the crore in reserve | recommendation; obvious answers and why each falls short (§2.2); three reasons each side; the moneyshot; kill criteria; the no-award branch; a 150-word version for the cover; headline numbers table | 8 | 3,200 | A |
| 3 | 3. SwiftKart today: ₹3.18 crore of revenue a year, ₹3,520 kept per bike a month, and petrol takes 34% | unit economics per bike-month (T2); annual P and L at contribution level; cost structure shares; what the case does not tell us (overheads, debt, cash beyond the crore) | 8 | 3,500 | A |
| 4 | 4. Reading the case closely: seven numbers that change the answer | insights 2, 3, 4, 6, 11, 14 and the subsidy wording (X06 "may"); each with arithmetic; what we would ask SwiftKart's finance head on day 1 | 7 | 3,500 | A |
| 5 | 5. The market: last-mile delivery in Delhi-NCR is growing on quick commerce, and fleets compete on reliability | R-A facts with every conflict between reports stated; demand drivers; what the case's 85% utilisation means in this market | 8 | 4,000 | B |
| 6 | 6. The clients: `<n>` large Indian e-commerce buyers have public EV commitments, and listed clients now need suppliers' emissions data | R-C commitments table; BRSR Core; Scope 3 Category 4; what "monthly reporting of emissions-related metrics" `[C O05]` requires in practice | 8 | 3,800 | B |
| 7 | 7. Competition: a 100-bike operator wins on uptime and data, not on price | five forces with evidence per force; strategic groups (platform-owned fleets, national 3PLs, EV-native fleet providers, small operators); where SwiftKart sits | 7 | 3,500 | B |
| 8 | 8. The policy clock: Delhi makes new two-wheeler registrations electric-only from `<date>`, so a petrol delivery bike loses value every month | R-E timeline; PM E-DRIVE amounts and dates; Delhi EV Policy 2.0; aggregator and delivery scheme; labour codes; insight 14 with A17 | 8 | 3,800 | B |
| 9 | 9. Vehicle economics: a bought EV costs ₹5,684 a month all-in, a leased one ₹3,500 | T2, T3 with the annuity arithmetic; contribution per configuration; R-D TCO studies compared; insight 4 and 5 | 9 | 4,200 | C |
| 10 | 10. The leasing market: who rents EVs to fleets in Delhi-NCR, at what price, and why leasing wins up to ₹5,151 a month | R-B providers and quotes normalised; switch points (T13); subsidy needed to flip (₹94,521); real market rates against the case's ₹3,500 stated plainly (§2.10 point 1) | 8 | 3,800 | C |
| 11 | 11. Range, charging and downtime: 30 deliveries a charge is a full day with no headroom at full use | insight 3; battery degradation evidence; depot versus swap; spares sizing (10 spares, 95% availability, A15); heat | 7 | 3,200 | C |
| 12 | 12. Emissions: 245 g of CO2 a delivery today, 108 g on the leased fleet, reported every month | method (A19 to A24 with sources); T14; ISO 14083 and GLEC; the monthly report's contents; green power as upside | 8 | 3,500 | C |
| 13 | 13. Six options, one scorecard: how the alternatives are built and scored | MECE option filter (T4); the scoring rules and formula (T6) with each band stated; why these six cover the case's list `[C T04]` | 7 | 3,200 | D |
| 14 | 14. Options 1 and 2: staying petrol keeps ₹42.2 L a year, and buying 100 EVs spends ₹90 L of the crore on one job | symmetric template ×2 | 7 | 3,200 | D |
| 15 | 15. Options 3 and 4: buying for the contract needs ₹25 L of debt, and buying both needs ₹1.00 crore | symmetric template ×2; option 4 as the obvious answer, fairly stated | 8 | 3,400 | D |
| 16 | 16. Options 5 and 6: leasing for both fleets is worth ₹5.79 crore over 48 months, ₹1.10 crore more than buying both | symmetric template ×2; the T5 comparison; heat map T12; closes with a paragraph beginning "Conclusively" | 8 | 3,400 | D |
| 17 | 17. The ₹1 crore decision: ₹84.8 L goes to five uses a lease cannot cover and ₹15.2 L stays in reserve | T9 with the arithmetic per line and its timing; sources and uses including ₹29.7 L of petrol sales; why nothing goes on vehicles | 8 | 3,600 | E |
| 18 | 18. Financial case: contribution rises from ₹42.2 L to ₹2.06 crore a year by month 24, with no debt | T7, T8, T15 bridge with a paragraph per step; cash path against buying both; the moneyshot; §2.10 points 2 and 4 in full | 10 | 3,800 | E |
| 19 | 19. Scenarios and sensitivity: the plan holds in bear and bull, and the price per delivery moves it most | T10, T11, T12, T13; which three inputs matter most and what evidence would firm each up; §2.10 points 1 and 3 | 9 | 3,600 | E |
| 20 | 20. Financing: why no debt, what the 11% loan really costs, and the option to buy at renewal | EMI ₹3,601 against the lease; debt each option needs; Ind AS 116 treatment of leases (lease liabilities still exist); real option at month 36 | 7 | 3,000 | E |
| 21 | 21. Risk register: twelve risks, each with a trigger and a control | 12 risks with probability, impact, early signal, trigger, control, owner; 3×3 heat map as a table; pre-mortem ("it is month 12 and the plan has failed: the three most likely stories") | 5 | 2,800 | F |
| 22 | 22. The 24-month roadmap: four gates decide each next step | quarter-by-quarter plan; gates G1 (M3), G2 (M8), G3 (M12), G4 (M24) with tests and both outcomes; the no-award branch | 6 | 2,800 | F |
| 23 | 23. Operating model: two lessors, ten spares, one depot and pooled dispatch keep fulfilment at 95% | riders, hiring, training; lessor selection and split; depot; dispatch pooling across clients; RACI with letters expanded | 7 | 3,000 | F |
| 24 | 24. KPIs and the monthly report: `<n>` numbers management and the client see every month | KPI tree from contribution down; definitions, formulas, sources, cadence, owner, targets, triggers; the client emissions report layout | 5 | 2,400 | F |
| 25 | 25. Impact: 88% more deliveries, 56% less CO2 per delivery and 4.9 times the contribution | people (riders, training, safety), planet (T14), profit (T15); closes with a paragraph beginning "Therefore" | 6 | 2,600 | F |
| 26 | 26. The deck: four slides and an annexure, and where every number on them comes from | slide blueprint per §5.5; derivation table panel → section → tag → model key; cover mind-map nodes and logo slots | 4 | 1,800 | G |
| 27 | 27. Forty questions the judges are likely to ask, and our answers | 40 questions, hardest ten first, each `**Q7.** "..."` with a 60 to 120 word answer citing a number and its tag (T7) | 2 | 5,000 | G |
| 28 | 28. Method, limits and the validation we would run next | desk research versus model versus assumption; limits; validation plan (first sentence: none of it has been run): lessor RFP, client SLA terms, rider time-and-motion on 10 EVs, emissions pilot report | 4 | 2,200 | G |

Writer G also writes `parts/appendix-E-glossary.md` starting `## Appendix E: Glossary` with ≥ 70 terms (3PL, AIS-156, BRSR,
CEA, contribution, DERC, DRHP, EMI, EV, EV100, GHG, GLEC, Ind AS 116, ISO 14083, kWh, LFP, MHI, NPV, PM E-DRIVE, PPAC,
QC, RACI, Scope 1, Scope 2, Scope 3, SLA, SoH, TCO, VAHAN and more).

Part files: `part-A.md` §0 to §4; `part-B.md` §5 to §8; `part-C.md` §9 to §12; `part-D.md` §13 to §16; `part-E.md` §17
to §20; `part-F.md` §21 to §25; `part-G.md` §26 to §28. Assignments as in the table. Writer G runs last and also reads
parts A to F.

### §4.6 Writer prompt (copy verbatim; fill `<>`)

```
You are writer <A..G> for the SwiftKart research deliverable (Dream Forge 3.0, IEEE DTU, Round 2, Team IdeaForge).
Read in order: dreamforge-case\PLAN.md §0, §1, §2, §4.5; dreamforge-case\research\ARGUMENT.md;
dreamforge-case\research\parts\WRITER-BRIEF.md; build-log.md section "Corrections for writers";
lines 1 to 140 of verdict-mnc\research\harvestbox-research.md (register only; never copy content);
dreamforge-case\model\model_tables.md; dreamforge-case\case\01-case-brief.md; the raw files and CSVs you need: <list>.
Invoke the case-competition-deck skill and read references/rhetoric.md and the frameworks.md entries for:
<frameworks from PLAN §2.7 for your sections>.
Write dreamforge-case\research\parts\part-<X>.md containing exactly these H2 sections, in order, with these exact titles:
<paste the rows of §4.5 for this writer>.
Each H2 opens with **Answer.**, meets the table and word minimums, and closes with
"### What this section establishes, and what it does not".
Cite every number with its brief ID, assumption ID, model tag, raw R-ID or S-ID. Never browse. Never invent a figure,
quote, name or label. Options are "option 1" to "option 6". No em or en dashes, no "Rs", no exclamation marks.
Append to the file after each H2. Run the self-check one-liner after each H2 and fix before moving on.
Before finishing, invoke the skill again (touchpoint T3) and check every title is an action title with a number.
Finish with: words, tables, dashes, exclamations, placeholders, rs per H2, then the STATUS line.
```

**What a good paragraph looks like** (calibration for writers and the critic):

> A petrol bike earns SwiftKart ₹26,520 a month: 30 deliveries a day × 26 days × 85% utilisation × ₹40 `[C D02, C D03,
> C D04, C D08]`. Rider pay takes ₹14,000 and petrol ₹9,000 `[C D05, C D06]`, which leaves ₹3,520, or 13.3% of revenue
> `[T2]`. A leased EV on the same route keeps ₹9,020, because the ₹3,500 lease already includes running cost `[C D12]`.
> The saving is ₹5,500 a bike a month before the ₹30,000 the petrol bike fetches on sale `[C X05]`. Across 100 bikes that
> is ₹66.0 L a year of contribution `[T15]`, more than one and a half times what the whole fleet earns today.

What to avoid: adjectives without numbers; a number without a tag; a table with no sentence before and after it; a real
company's figure presented as SwiftKart's; any sentence that could sit unchanged in a document about another company.

### §4.7 Steps R4 to R6: assemble, critique, PDF

**R4 assemble.** `PY DF\research\assemble.py md` until `ASSEMBLY PASS`. Fix rules: dash → rewrite the sentence (never a
mechanical hyphen); banned word → plain synonym; missing S-ID → add the register row or remove the citation; short section
→ re-dispatch that writer for that H2 only with "Expand sections <list> by <n> words with worked examples from the model
tables and raw files and one more table each; do not change any number"; placeholder → fill from data; `rs_text` → ₹.

**R5 critique (T6).** Dispatch CR: invoke the skill in critique mode; read `references/critique_rubric.md`; read
`DF\PLAN.md` §2 and the assembled document in full. The rubric assumes a 100-slide deck; re-base it and say so: "8 sections
present" becomes the mapping in §2.6; "recommendation in the executive summary headline" becomes the H2 of §2; "alternative
foreshadowed" becomes §4 and §9 seeding §16; "sample 10 action titles" becomes scoring all 29 H2 titles (one point for a
full-sentence finding, one for a number); "appendix depth" becomes whether every number traces to a tag. Add three tests:
(i) every brief requirement R1 to R24 answered; (ii) §2.10's honest reading present in §18 and §19; (iii) 25 numbers
spot-checked against `model_tables.md` and the brief, every mismatch listed with its line. Lead with the two strongest
things; at most eight issues, each with section, current state, fix, why it matters. Never propose changing a locked
number, the recommendation or an H2 title. Write `research/critique.md`. Fix CRITICAL and IMPORTANT by re-dispatching the
owning writer with the critic's exact text; rerun R4. Then run the invented-name sweep (§6.3). Log `SKILL T6`.

**R6 PDF.** `PY DF\research\assemble.py pdf`. Open the PDF with the Read tool (pages 1 to 3 and three random pages) and
check cover, contents, tables and tag styling. Log G-R with the assembler JSON pasted.

---

## §5 PHASE D: THE FIGMA SLIDES DECK (7 slides, native vectors, EY density)

### §5.0 Entry gate and doctrine

Start D0 only after G-M (final model) and G-R2 (verified lanes): every deck number comes from `model_outputs.json`, every
research constant from a verified row. Doctrine: `ROOT\CLAUDE.md` §1 to §7 (zero dead space, bands and rails, 4 to 5 type
levels, charts paired with tables, in-chart annotation, sources bottom-right, cornerRadius 0, ink outlines, layered
sticker cards, 22 pt floor except the source line, fine print and slot captions, Poppins and Inter). The slide scripts in
Q.2 already implement this and pass the offline mock; the work is to build them, verify them in Figma, fill logos and
check them against the research.

Slide count: 7, by user decision: 1 cover, 4 core, 1 annexure, 1 thank-you. The brief exempts only the title slide and the
annexure from the 4-slide cap `[C S01, N02]`; whether a thank-you slide counts is open item 1 (§8).

### §5.1 Visual models (D0: screenshot each, read-only, `get_screenshot` maxDimension 1600, look before building)

- Prime inspo `hOJVMGv9nIhDmayTT7DmOt`: slides `5:4` (executive summary) and `5:7` (valuation). Take: yellow punch-hole
  ribbon with one filled active tag, section chip, two-line action headline, outlined panels with uppercase coloured
  titles and a rule, heat-celled tables, dashed in-chart reference lines, source line bottom right.
- Dream11 `YoiazGGOribfg69EjEDIlP` slide `2:2` and BeyondTech `cpcsN7ytWMJputcohXOMgz` slide `2:2`: the cover layout our S1
  copies (title and verdict card left, team table, hub-and-spoke mind map with logo rows right, dashed bus to a crest row).
- Never copy the Satoshi Gate cover (plain "case in numbers" text card).

### §5.2 Tooling (step D1): copy the BeyondTech generator and patch it

1. Copy from `ROOT\beyondtech-dcg\deck\` into `DF\deck\`: `gen.py`, `_extras.js`, `_x2.js`, `_v1.js`, `_sweeps.js`,
   `metrics.json`, `preview.py`. Do **not** copy BeyondTech's `_palette.js`, `setup.js`, `make_values.py`, `values_ext.py`,
   `slides\` or `overrides.json` (ours come from the extractor; a stray `values_ext.py` would break `gen.py pre`).
2. The extractor already wrote `DF\deck\_palette.js`, `setup.js`, `make_values.py`, `patch_tooling.py` and
   `slides\s01.js` to `s07.js`. Run `PY DF\deck\patch_tooling.py`. Done when it prints nine `patched` or `replaced` lines
   and `patch_tooling done`.
3. `gen.py` reads `ROOT\verdict-mnc\deck\preamble.js` and `mock_figma.js` read-only by path (`LIB`, `MOCKSRC`; leave them).
   With `DECK = DF\deck`, `BT` is `DF`, so `BT / "model" / "model_outputs.json"` resolves to the model output with no edit.

### §5.3 Palette (EV teal and volt, user decision 15 Oct 2026)

`deck\_palette.js` (Q.2): `primary` #0F766E deep teal (panel titles, numerals, the active ribbon tag is primaryDeep per the
helper); `primaryDeep` #0B3B3A charcoal teal (hub, dark cards, chips); `accent` #F5C518 volt yellow (back-cards, inactive
tags, card headlines on dark); `alert` #C2410C petrol red (petrol fleet, losses, the struck obvious answer, risk);
`tint` #CCFBF1 mint (table heads, quiet fills). Heat scales: `HG` mint to deep teal (gains), `HR` cream to petrol red
(losses). Text on HR[4] is white. The research PDF uses the same teal, deep teal, volt and mint (`assemble.py pdf`).

### §5.4 Section mapping (skill T4; write into `deck/derivation.md`)

Use the §2.6 table. Archetypes per slide (T8): S1 cover (archetype A) with hub-and-spoke mind map; S2 two-chart action
title, multi-chart dense; S3 MECE option filter + symmetric comparison grid + sensitivity matrix (heat map) + section
closer; S4 moneyshot + three uses (donut, line, waterfall) + assumptions; S5 recommendation + implementation plan (Gantt,
gates) + risk matrix + KPIs; S6 appendix (calculations, assumptions, tornado and scenarios, emissions and sources);
S7 conclusion synthesis ("Therefore").

### §5.5 Slide-by-slide specification (code in Q.2; this table is what the judge sees)

| Slide | Headline (from `make_values.py`) | Panels and forms |
|---|---|---|
| S1 Cover | none (title "THE ₹1 CRORE / CROSSROADS") | top band: chip "IEEE DTU · DREAM FORGE 3.0 · ROUND 2", logo slots IEEE DTU, Dream Forge, DTU, team chip; subtitle; verdict card "OUR ANSWER: DO BOTH, LEASE EVERY BIKE, AND SPEND THE CRORE ON WHAT A LEASE CANNOT BUY." + `V.cover_line`; team table (Harsh Kawatra, Dayita Arora); mind map "WHO SHAPES THE CROSSROADS": seed line, hub SWIFTKART / 100 bikes, four nodes (THE CLIENTS: Flipkart, Amazon, Blinkit logos; THE LESSORS: Zypp Electric, Yulu; THE CHARGE: Battery Smart, Sun Mobility, Tata Power; THE RULES: Delhi Govt, MHI), dashed bus to five EV-maker crests (Ather, TVS Motor, Bajaj Auto, Hero Vida, Kinetic Green), fine print |
| S2 The Situation | `V.h1` (petrol 34%, ₹3,520, 100% use) | rails TODAY / PRESSURE / THE CHALLENGE; four KPI tiles (100 bikes, ₹3.18 Cr, ₹42.2 L, 13.3%); waterfall of one bike-month (₹ thousand); unit-economics table, 5 rows; Delhi petrol line chart; client commitments with logos (3 rows); policy timeline (4 dates) with PM E-DRIVE fine print; numbered badges "The contract, read closely" (4); dark challenge card with three chips. Forms: 9 |
| S3 Strategic Alternatives | `V.h2` (₹5.79 Cr, ₹1.10 Cr, ₹100 L debt) | rails SIX OPTIONS / TRADE-OFFS; options table (8 columns, row 4 tinted red, row 6 tinted teal); score bars with formula callout; struck "THE OBVIOUS ANSWER: BUY BOTH" with 3 badges and the "CONCLUSIVELY" callout; stacked cost columns (petrol, bought, leased) with switch line text; 7 × 6 shock heat map (diverging). Forms: 7 |
| S4 The ₹1 Crore Decision | `V.h3` (₹84.8 L, ₹15.2 L) | rails ALLOCATION / RETURNS; donut + uses table with swatches; cash line chart (3 options, 9 points, loan annotation); moneyshot card `CARD: MONEYSHOT` (₹42 L → ₹2.06 Cr, 4.9x, three mini KPIs); bridge waterfall (6 steps); "What has to be true" assumptions table. Forms: 6 |
| S5 Recommendation and Roadmap | `V.h4` (175 EVs, month 12, ₹2.06 Cr, no debt) | rails THE ANSWER / ROADMAP / RISK AND KPIs; dark answer card with three reasons; fleet stacked columns by quarter; Gantt (6 rows, 8 quarters) with gate diamonds G1 to G4; gates table; 3×3 risk grid + 5 risk-control badges; KPI table (today, month 12, month 24). Forms: 7 |
| S6 Annexure | `V.h5` (switch ₹5,151) | ribbon A1 to A4; A1 quarterly table + two formula callouts; A2 assumptions bear/base/bull (8 rows); A3 tornado (7 rows) + scenario table + switch points; A4 emissions table + method callout + 12-line bibliography (16 pt, `BIBLIO`). Forms: 8 |
| S7 Thank you | none | "THANK YOU"; dark "THEREFORE" card; team table; three link slots; model hash line |

Density bar (ROOT CLAUDE.md and memory): core slides 197 to 291 nodes at planning time, 6 to 9 forms each. Do not add
decoration to reach a count; do not remove a form.

### §5.6 Content lock (step D0, before any Figma call)

1. Invoke the skill (T4); read the files listed for T4. Log `SKILL T4`.
2. Finalise the research constants in `DF\deck\make_values.py` from VERIFIED or CORRECTED rows only, keeping each S-ID in
   a comment:
   - `PETROL`: 4 to 6 dated Delhi prices from `fuel_prices.csv` (one a year; label = year as text; value to 2 decimals).
     If a year cannot be verified, drop the point (minimum 4).
   - `POLICY`: four dated milestones from `policy_timeline.csv`; label ≤ 2 lines of about 11 characters.
   - `PMLINE`: one line ≤ 80 characters on PM E-DRIVE from R-E.
   - `CLIENTS`: three rows `[brand, text ≤ 32 characters]` from `client_commitments.csv`; the brand must have a logo slot
     (Flipkart, Amazon, Zomato by default; swap to Swiggy, Zepto or BigBasket only if their row is stronger, and change
     the logo slot name to match).
   - `BIBLIO`: the 12 sources the deck leans on, ≤ 41 characters each, in the order of the slides.
   - `SRC`: seven source lines, ≤ 230 characters including the hash (the assert checks).
   `build()` asserts every length; a failing assert names the string to shorten.
3. Run `PY DF\deck\gen.py pre` then `PY DF\deck\gen.py mock`. Done when seven lines read `sNN OK` and the last line is
   `ALL OK` (or every line OK). If a changed constant breaks a slide, shorten it with the ladder in §5.9 and rerun.
4. Write `deck/slide-copy.md`: every string on every slide verbatim, read from `deck/values.js` and the slide files.
5. Write `deck/derivation.md`: the §5.4 mapping, then one table per slide
   `| Panel | Text or number | Research section | Tag | Model key | Matches (Y/N) |` for every number. At D0 the research
   section column may read "pending (writer X, §N)"; D7 completes it.

Gate G-D0: mock OK ×7; `slide-copy.md` and `derivation.md` exist; every model number row says Y.

### §5.7 Build procedure

| Step | What | Done when |
|---|---|---|
| D1 | Tooling (§5.2); invoke the skill in slide mode once per slide (T8) and log; `PY DF\deck\gen.py pre`; `PY DF\deck\gen.py mock`; `PY DF\deck\preview.py 1 2 3 4 5 6 7` and Read each `deck\shots\preview_0N.png` (if `preview.py` writes elsewhere, read its docstring for the output path) | mock OK ×7; previews show no overlaps, no clipped text, no empty region larger than about 120 × 120 px. The donut renders as a flat disc in the preview (known PIL limit, not a defect) |
| D2 | `ToolSearch` with `select:mcp__figma-mcp__whoami,mcp__figma-mcp__create_new_file,mcp__figma-mcp__use_figma,mcp__figma-mcp__get_screenshot,mcp__figma-mcp__upload_assets,ReadMcpResourceTool`; load the figma-use guidance (Skill `figma-use` if listed, else `ReadMcpResourceTool` on server `figma-mcp`, uri `skill://figma/figma-use/SKILL.md`) and pass `skillNames: "resource:figma-use"` on every `use_figma` call; this deck positions nodes absolutely through the helper library, which deliberately overrides the skill's auto-layout advice. `whoami` (confirm plan key `team::1564294484048272772`; if absent and the user has several teams, ask). `create_new_file`, `editorType: "slides"`, name `SwiftKart: The ₹1 Crore Crossroads \| Team IdeaForge \| Dream Forge 3.0`. `use_figma` with the full text of `deck\setup.js`. Screenshot the visual models (§5.1) | returns `count: 7` (or more with `extra` listing empty slides: remove those by id with a small script), seven ids, `fontsOk` all true. Write `deck\slide-ids.json` as `{"S1":"<id>",...,"S7":"<id>"}` and `deck\figma.md` (file key, URL, ids, fonts) |
| D3 | `PY DF\deck\gen.py bind` | `build\slide_01.js` to `slide_07.js` (each < 50,000 characters), `v1_0N.js`, `v1_all.js`, `sweeps.js`, `slots.js` |
| D4 | For N = 2, 1, 3, 4, 5, 6, 7: `use_figma` with the exact contents of `build\slide_0N.js`; check the return has `warnings: []`; `use_figma` with `build\v1_0N.js`; `get_screenshot` of the slide (maxDimension 1600) saved to `deck\shots\s0N.png`; Read it and check the K-card (§5.8); fix by §5.9 (edit `slides\s0N.js` or `make_values.py`, then `gen.py mock N`, `gen.py bind N`, rebuild that slide only), at most three rounds a slide. **Stop after S2 and compare it with the prime inspo screenshots before building the rest** | every slide V1 `clean: true` (or logged residuals that are the known false positives); every screenshot viewed and described in two lines in `deck\figma.md` |
| D5 | Logos (§5.10) | every slot filled at the right aspect or listed in open items |
| D6 | `use_figma` with `build\sweeps.js`, then `build\v1_all.js`; then critique T5: dispatch CR with the seven screenshots, `values.js`, `derivation.md` and `references/critique_rubric.md`; score dimensions 1, 3, 4 (on S2 to S6), 5 and 7 plus the pass/fail items that apply (recommendation in a headline; for and against present; action titles; sources on every slide; exactly one moneyshot; "Conclusively" and "Therefore" present; no placeholder text other than named slots); at most five issues, none may change a number, the recommendation or the slide count; write `deck\critique.md`; fix those that fall under §5.9; re-run sweeps and V1 | sweeps: `radiusFixed` 0 on the second run, `moneyshot 1`, `fontLow []`, `copy []`, `missing []`, `presentBad []`; V1 clean; critique ≥ 40/45 equivalent |
| D7 | Derivation against the finished research (after G-R): complete `derivation.md` so every slide claim names the research section that establishes it. If a research sentence differs from a model number, the research is wrong: fix the research sentence. If the research words a label better or a lane corrected a constant, change `make_values.py` constants (never a model number), `gen.py mock`, `bind`, rebuild that slide | every row `Matches Y`; any rebuilt slide re-verified with V1 |
| D8 | `get_screenshot` maxDimension 3840 of each slide → `deck\shots\hi_s0N.png`; build `deck\SwiftKart_DreamForge3_preview.pdf` with PyMuPDF (one 1920 × 1080 page per PNG, from a small `.py` file); Read pages 1, 4 and 7 | preview PDF has 7 pages |

Every slide script starts by clearing its slide (`wipe` via `skelBT` or directly), so rerunning a slide is always safe.

### §5.8 K-card: what to check on every screenshot

1. No empty region in the content zone larger than about 120 × 120 px.
2. Every text sits inside its panel; nothing touches a panel border; no text below 22 pt except the source line, fine
   print, the bibliography and slot captions.
3. S4: the moneyshot numeral "₹2.06 Cr" is the largest numeral on the slide and sits in volt yellow on the dark card.
4. S3: the obvious-answer title is visibly struck through in petrol red; the heat map shows red losses and teal gains.
5. S5: gate diamonds G1 to G4 sit on the Gantt; the risk grid's darkest cell is top right.
6. Ribbons: tags evenly spaced, wires connect punch holes, the correct tag is active (S2 tag 1 ... S5 tag 4; S6 none).
7. Rails: labels read bottom to top, centred in their bars (if not, set `RAILROT=false` in `_x2.js` per its comment and rebuild).
8. Cover: four spokes reach the four nodes; the dashed bus reaches all five crests; the seed line is visible.
9. Donut (S4): six slices. If it renders as a full disc in Figma, set `ARCS=false` in `_extras.js` (its documented fallback) and rebuild S4.

### §5.9 Fix rules (one rule per issue type)

| Issue | Fix (in `slides\s0N.js` or `make_values.py`, then mock, bind, rebuild that slide) |
|---|---|
| `overlap` between two named panels | move the lower panel down by the overlap + 16 or reduce the upper panel's height |
| `bounds`, `belowContent` | shrink width or height; never below 30 px per 22 pt table row |
| `headline3lines` | shorten the headline in `make_values.py`: drop an adjective, replace an "and" clause with a comma clause, round to whole units; keep every number |
| `source2lines` | shorten publisher names in `SRC` |
| `textOut`, `cellWrap`, overflow warning | shortening ladder: drop articles; shorter synonym; an abbreviation expanded elsewhere on the slide; drop the least important clause; widen the column by taking width from the widest other column. Never below 22 pt, never drop a number |
| `textCollision` | move the later text by the overlap + 6 px inside its panel |
| A node 240 px off | a line set x or y before `appendChild`; never add 240; use the helpers |
| `Cannot use unloaded font` | a fragment was run; always run the full `build\slide_0N.js` |
| Font sweep hit | raise to 22 pt; if it then overflows, shorten the text |
| Copy hit (dash, `?`, `!`, banned word, absent word) | rewrite the string |
| `ribbon too wide` | the helper drops to 22 pt; if still too wide, shorten "RECOMMENDATION AND ROADMAP" to "RECOMMENDATION, ROADMAP" in `patch_tooling.py`'s RIBN and re-run the patch on a fresh copy of `_extras.js` (log it) |
| Dead space larger than about 200 × 200 | report it; do not add decoration |

Known false positives: ribbon punch-holes over their tags, `BACK:` rectangles under their cards, logo-slot captions at
14 pt, `BIBLIO` lines at 16 pt.

### §5.10 Logos (step D5)

1. `use_figma` with `build\slots.js` to list every `LOGO:` and `IMG:` slot with its size; save to `deck\slots.json`.
2. Brands and sources, in this order: reuse files on disk (`ROOT\verdict-mnc\deck3\logos\Flipkart.png`, `Blinkit.png`,
   `Zomato.png`; `ROOT\beyondtech-dcg\deck\assets\logos\dtu.png`), then the brand's own press or brand page, then
   Wikimedia Commons (`https://commons.wikimedia.org/w/api.php?action=query&list=search&srnamespace=6&srlimit=10&format=json&srsearch=<brand>%20logo`,
   then `Special:FilePath/<file>?width=600`). Expected slots: cover top IEEE DTU, Dream Forge, DTU (thank-you repeats
   them); mind map Flipkart, Amazon, Blinkit, Zypp Electric, Yulu, Battery Smart, Sun Mobility, Tata Power, Delhi Govt,
   MHI; crests Ather, TVS Motor, Bajaj Auto, Hero Vida, Kinetic Green; S2 the three `CLIENTS` brands. Download into
   `deck\logos\<slug>.png` (SVG → PNG at ≥ 2× slot size via PIL or headless Chrome; never run downloaded code). Read each
   file with the Read tool to confirm it is that brand. Record `{brand, file, source_url, licence_note, w, h}` in
   `deck\logos\manifest.json`.
3. For each slot: create inside it a child rectangle named `IMG` sized to the logo's aspect ratio, fitted within the slot
   minus 6 px and centred; `upload_assets` (`count: 1`, `nodeId` = that rectangle, scale mode FIT) and POST the bytes to
   the returned URL; then remove the slot's caption text and dash pattern. Never resize a slot (`CLAUDE.md` §7.4, §7.5).
4. IEEE DTU and Dream Forge marks are unlikely to be public: leave those slots as placeholders and list them in §8.
   SwiftKart has no slot. Link slots on S7 stay as slots until the user gives the links.
5. Re-run `build\sweeps.js` (caption removal changes text content).

### §5.11 Rate limits and recovery

On a Figma HTTP 429 or timeout: wait 60 s, then check the slide's child count with a read-only `use_figma`
(`return (await figma.getNodeByIdAsync("<id>")).children.length`) and rerun that slide's build script. Never run two
Figma calls at once. Never create a second file; `setup.js` is idempotent.

---

## §6 VERIFICATION

### §6.1 Gate table

| Gate | Check | Command or method |
|---|---|---|
| Bootstrap | 15 files; model v0 | `files 15`; `MODEL PASS`, `HASH 1f2b5c9715` |
| G-R0 | folders, ARGUMENT, registers, SKILL T1 and T2 | `Test-Path`; grep build-log |
| G-R1 | lane rows, statuses, CSVs, unique S-IDs | §4.2 one-liner |
| G-R2 | verification ≥ 90% per lane | `raw/R0-verify.md` |
| G-M | final model | `MODEL PASS`, hash logged |
| G-R3 | each part meets minimums, self-check clean | writer reports |
| G-R | ASSEMBLY PASS, PDF renders, critique fixed | `assemble.py md`, `pdf`, Read PDF |
| G-D0 | content lock | mock OK ×7, files exist |
| G-D | V1 ×7, sweeps, critique, derivation | §5.7 D4 to D7 |

### §6.2 Cross-deliverable greps (run before G-R and G-D)

Write and run `DF\checks.py` (a small script, never a long `-c` in PowerShell) that, for every file in
`research\parts\*.md`, `research\raw\conflicts.md`, `deck\slide-copy.md` and `research\ARGUMENT.md`, prints the count of
U+2014 and U+2013 characters, of `!`, of `Rs` followed by a digit, and of `TODO|TBD|Lorem|Insert|xyz|PLACEHOLDER`. Every
count must be 0. Then a consistency pass: collect every ₹ figure, lakh figure and percentage in `slide-copy.md` and
confirm each appears in `model_tables.md` or in the research document with the same value; paste the table into
`deck\derivation.md`.

### §6.3 Invented-name sweep

List every capitalised multi-word phrase in the research parts and the slide copy
(`re.findall(r"\b(?:[A-Z][a-z]+\s){1,3}[A-Z][a-z]+\b", text)`) that is not in the brief, the raw files, or this allow-list:
{Team IdeaForge, Delhi Technological University, Ramjas College, University of Delhi, Dream Forge, IEEE DTU, SwiftKart,
Delhi EV Policy, PM E-DRIVE, Climate Group, Scope 3, Battery Smart, Sun Mobility, Zypp Electric, Tata Power, Hero Vida,
Kinetic Green, Bajaj Auto, TVS Motor}. Review each; remove any coined label for the plan, a phase, a platform or a method.

### §6.4 Final check by the orchestrator (before reporting)

1. Open the research PDF (pages 1 to 3) and the deck preview PDF (all 7 pages) with the Read tool and look at them.
2. Re-run `build\sweeps.js` and `build\v1_all.js` on the live Figma file.
3. Confirm the deck's headline numbers equal the final `model_outputs.json` values (hash on S7 = model hash).
4. Confirm build-log has SKILL T1 to T8.

---

## §7 RISKS AND RECOVERY

| Symptom or risk | Action |
|---|---|
| `extract.py` prints fewer than 15 files | `PLAN.md` is not a byte copy; redo B0 |
| Model hash differs at B3, or a check fails | a block was retyped or edited; re-extract; if it still differs, stop and report the failing line |
| `gen.py pre` fails on `values_ext.py` or a missing key | a BeyondTech file was copied that should not be (§5.2 step 1); delete it |
| `gen.py pre` assertion in `make_values.build` | a research constant is too long: shorten it, rerun |
| `patch_tooling.py` assertion | `_extras.js`, `_sweeps.js` or `gen.py` was edited before patching; re-copy from `beyondtech-dcg\deck\` and rerun |
| Mock FAIL after a constant change | §5.9 shortening ladder; never shrink below 22 pt |
| No public B2B lease quote found (likely) | Record it as a gap; the case's ₹3,500 stays base; the document states the switch point (₹5,151) and the validation step (lessor RFP) |
| Verified lease quotes above ₹5,151 | kill criterion 1 (§2.8): report to the user before writers start |
| Subsidy evidence conflicts (₹5,000 national versus the case's ₹10,000) | case value stays in the model (it is a case fact); the document reports the real figure and T13's switch subsidy |
| A lane under 60 rows or under 85% verified | re-dispatch once with "Find 20 more rows from primary sources for questions <list>" |
| Writer under target | re-dispatch with the expansion instruction in §4.7 |
| `ASSEMBLY FAIL` | fix by the R4 rules; rerun |
| `assemble.py pdf` assertion | the template changed; report the failing string; the markdown and HTML remain deliverables |
| Chrome not found | deliver markdown and HTML; report |
| Figma not authorised | stop and tell the user to authorise the Figma connector |
| Plan file overwritten by a later session | the first action copied it to `DF\PLAN.md` |
| Context loss mid-write | files are written incrementally; resume from the last H2 in the part file |

---

## §8 OPEN ITEMS FOR THE USER (list in every hand-off until resolved)

1. **Slide count.** The brief allows 4 slides excluding the title slide and the annexure. The thank-you slide is extra by
   the user's choice. If the organisers count it, drop S7 on submission (the cover already carries the team table).
2. **Organiser marks.** IEEE DTU and Dream Forge 3.0 logos for the cover and thank-you slots.
3. **Team details.** Confirm Dayita Arora's institution line ("Ramjas College, University of Delhi") and roles.
4. **Links** for the thank-you slots (research PDF, model, deck) if the user wants them live.
5. **Submission file name and format** (the brief does not state one; default PDF export from Figma Slides via
   File, Export, PDF).
6. **Time.** The brief allows 24 hours `[C I01]`; the deck can be built from the verified lanes and the final model before
   the writers finish (§3.2), so the deck is never blocked by the research length.

---

## §9 HAND-OFF AND MEMORY

- Final message to the user (orchestrator): the Figma URL from `deck\figma.md`; paths of the research markdown, HTML and
  PDF, the model and its tables, the deck preview PDF; word and table counts; the model hash and the moneyshot; gate
  results; every seed a lane corrected or could not confirm; critique scores; open items (§8). Plain, no hooks.
- Memory (orchestrator, after G-D): create `project_dreamforge_swiftkart.md` in the memory folder named in the system
  prompt (frontmatter `type: project`): folder `dreamforge-case\`; Dream Forge 3.0 (IEEE DTU) Round 2; team Harsh Kawatra
  and Dayita Arora as Team IdeaForge; recommendation in one line (lease both fleets, electrify first, the crore into
  working capital, charging, deposits, reporting, riders and a reserve, no debt); the model hash; the moneyshot; the Figma
  key; palette EV teal and volt; 7 slides; that `dreamforge-case\PLAN.md` is the surviving copy of this plan. Add one line
  to `MEMORY.md`: `- [Dream Forge SwiftKart](project_dreamforge_swiftkart.md) — IEEE DTU case, lease-both answer, 7-slide Figma deck <key>`.
- No git commit unless the user asks; never add a co-author trailer.

---

# PART VI. EMBEDDED FILES (the source of truth for every script)

Every block marked `<!-- FILE: path -->` is extracted byte for byte by `extract.py` (Q.5) into `dreamforge-case\<path>`.
Never retype a block. Q.0 holds two planning-time scripts that verified this plan; they are not extracted, and an executor
may run them only as a diagnostic (they read the plan file at its `.claude\plans` path and write nothing).

## Q.0 Planning-time harness and check (never extracted)

<!-- HARNESS: planning-time only, never extracted -->
```python
import io, re, json, sys, pathlib
ROOT = pathlib.Path(r"C:\Users\harsh\Desktop\HARSH\PPTS-CASE-STUDY\nsut-innovators-court")
PLAN = r"C:\Users\harsh\.claude\plans\working-folder-dreamforge-case-rippling-snowflake.md"
t = io.open(PLAN, encoding="utf-8").read()
B = dict(re.findall(r"<!-- FILE: ([^\n]+?) -->\n```[a-z]*\n(.*?)\n```\n", t, re.S))
ARGS = list(sys.argv[1:]); sys.argv = ["m", "--dry"]; g = {"__name__": "__main__"}
exec(compile(B["model/swiftkart_model.py"], "model", "exec"), g); OUT = json.loads(json.dumps(g["OUT"], default=float))
BT = ROOT / "beyondtech-dcg" / "deck"
MEM = {r: io.open(BT / r, encoding="utf-8").read().replace("\r", "") for r in ("gen.py", "_extras.js", "_x2.js", "_v1.js", "_sweeps.js", "metrics.json")}
pg = {"__name__": "pt"}; exec(compile(B["deck/patch_tooling.py"], "pt", "exec"), pg)
pg["patch"](lambda r: MEM[r], lambda r, x: MEM.__setitem__(r, x))
for k in ("deck/_palette.js", "deck/make_values.py", "deck/setup.js"): MEM[k[5:]] = B[k]
for n in range(1, 8): MEM["slides/s%02d.js" % n] = B["deck/slides/s%02d.js" % n]
gg = {"__name__": "gen", "__file__": str(BT / "gen.py")}; exec(compile(MEM["gen.py"], "gen", "exec"), gg)
gg["MEM"] = MEM; orig = gg["rdx"]
gg["rdx"] = lambda p: json.dumps(OUT) if str(p).endswith("model_outputs.json") else orig(p)
gg["has"] = lambda rel: rel in MEM
gg["pre"](); ok = gg["mock"](set(int(a) for a in ARGS) or None)
print("ALL OK" if ok else "SOME FAIL")
```

<!-- CHECK: planning-time only, never extracted -->
```python
import io, re, pathlib
ROOT = pathlib.Path(r"C:\Users\harsh\Desktop\HARSH\PPTS-CASE-STUDY\nsut-innovators-court")
t = io.open(r"C:\Users\harsh\.claude\plans\working-folder-dreamforge-case-rippling-snowflake.md", encoding="utf-8").read()
B = re.findall(r"<!-- FILE: ([^\n]+?) -->\n```[a-z]*\n(.*?)\n```\n", t, re.S)
print("files", len(B), [b[0] for b in B])
for n, b in B:
    if n.endswith(".py"): compile(b, n, "exec")
print("python compiles")
src = io.open(ROOT / "iim-lucknow-pivot" / "research" / "build_pdf.py", encoding="utf-8").read()
for a, n in [("dream11-pivot-research", 4), ("Dream11: Life After the Ban  |  Team IdeaForge", 1), ("else 'Dream11: Life After the Ban'}", 1),
             ("IIM Lucknow  |  PIVOT '26  |  Round 1 research deliverable", 1), ("--p:#C4161C; --pd:#5E0A0E; --a:#F5C518; --tint:#FDE0E0;", 1),
             ("color: #C4161C; }", 1), ('<b>Team IdeaForge</b><br>Harsh Kawatra, Delhi Technological University<br>Gursimran Kaur, Guru Gobind Singh Indraprastha University<br>Dayita Arora, Ramjas College, University of Delhi', 1)]:
    print(src.count(a) == n, a[:50])
print("TAG lines", sum(1 for l in src.split("\n") if l.startswith("TAG = re.compile(")))
D = dict(B)
for n, b in B:
    if not n.endswith(".md"):
        bad = [m for m in re.findall(r"[\u2014\u2013]", b)]
        print(n, "dashes", len(bad), "excl-in-strings", len(re.findall(r'"[^"\n]*![^=][^"\n]*"', b)))
```

## Q.1 Model

<!-- FILE: model/swiftkart_model.py -->
```python
# ===== SWIFTKART MODEL v1 =====
"""SwiftKart, Dream Forge 3.0 (IEEE DTU), Round 2: the Rs 1 crore crossroads.
Run from the repo root:
  PY dreamforge-case/model/swiftkart_model.py          run, check, write model_outputs.json and model_tables.md
  PY dreamforge-case/model/swiftkart_model.py --dry    run and print, write nothing
Deterministic. Case facts sit in F and are never edited. Team assumptions sit in AS with base, bear and bull values;
bear is the value least favourable to the recommended option. Every number on a slide or in the research document comes
from the outputs of this file. Contribution means revenue less rider pay, fuel or energy, lease, contract overhead and
reporting cost; the case gives no fixed overhead, so no EBITDA is claimed."""
import sys, json, math, hashlib, io, pathlib
DRY = "--dry" in sys.argv
try: HERE = pathlib.Path(__file__).resolve().parent
except NameError: HERE = pathlib.Path("dreamforge-case/model").resolve()
L, CR, H = 1e5, 1e7, 48

# ---------- case facts (brief IDs in case/01-case-brief.md) ----------
F = dict(fleet=100, rev_del=40, del_day=30, days=26, rider=14000, petrol_run=9000, ev_run=3000, util=0.85,
         capital=1e7, ev_price=120000, ev_life=48, ev_resale=25000, lease=3500, lease_life=36, petrol_resale=30000,
         charge_100=1e6, subsidy=10000, loan_rate=0.11, loan_term=36, c_veh=75, c_rev=2.8e7, fulfil=0.95, scale_m=12,
         ev_range_del=30)
FID = dict(fleet="D01", rev_del="D02", del_day="D03", days="D04", rider="D05", petrol_run="D06", ev_run="D07", util="D08",
           capital="D09", ev_price="D10", ev_life="D13", ev_resale="D14", lease="D12", lease_life="D13", petrol_resale="X05",
           charge_100="X01", subsidy="X06", loan_rate="X08", loan_term="X08", c_veh="O02", c_rev="O07", fulfil="O03",
           scale_m="O06", ev_range_del="X02")

# ---------- team assumptions: (id, key, base, bear, bull, unit, label, basis) ----------
AS = [
 ("A01","rec_days",45,60,30,"days","Contract receivable days","Logistics invoices to large e-commerce clients are paid on 30 to 60 day terms; 45 is the midpoint (lane R-C)"),
 ("A02","dep_months",2,3,1,"months","Lease security deposit","EV fleet leases ask one to three months of rent as a refundable deposit (lane R-B)"),
 ("A03","onboard",5000,7000,4000,"Rs per rider","New rider onboarding","Recruitment, police verification, training, kit and first-month insurance (lane R-F)"),
 ("A04","train",1500,2500,1000,"Rs per rider","EV training for existing riders","Half-day course on EV handling, charging discipline and battery safety"),
 ("A05","build",1300000,1700000,1000000,"Rs","Reporting and dispatch platform build","Telematics integration, GHG Protocol method, emissions dashboard, external review, pooled dispatch (lanes R-D, R-F)"),
 ("A06","mrv_pm",150,250,100,"Rs per vehicle-month","Telematics and reporting running cost","Software and data per connected vehicle (lane R-F)"),
 ("A07","c_ovh",150000,200000,120000,"Rs per month","Contract operations overhead","Two hub supervisors, one fleet and energy manager, one reporting analyst"),
 ("A08","award",3,5,2,"month","Contract award month","Negotiation, audit and onboarding take two to four months"),
 ("A09","c_start",0.70,0.60,0.80,"share","Contract volume in the first month of supply","The case says investment comes before full utilisation (O08)"),
 ("A10","c_ramp",6,9,4,"months","Months from first supply to plateau volume","Inside the 12-month scaling window (O06)"),
 ("A11","c_plateau",1.00,0.85,1.00,"share","Plateau volume as a share of the Rs 2.8 crore capacity","The case revenue implies 100% utilisation; bear holds the 85% SwiftKart achieves today"),
 ("A12","lease_rs",3500,5000,3500,"Rs per month","All-in EV lease rate","The case gives Rs 3,500 (D12); bear is a market rate if the case rate cannot be secured (lane R-B)"),
 ("A13","util",0.85,0.80,0.90,"share","Existing-fleet utilisation","Case 85% (D08)"),
 ("A14","disc",0.11,0.15,0.11,"per year","Discount rate","Bank rate of 11% (X08) as the cost of capital; bear adds an equity premium"),
 ("A15","avail",0.95,0.90,0.98,"share","EV availability after charging downtime","The case flags charging downtime (X03); spares absorb it"),
 ("A16","rider_esc",0.00,0.10,0.00,"share","Rider pay rise from month 13","Minimum wage revisions and the labour codes (lane R-E)"),
 ("A17","petrol_res48",12000,8000,15000,"Rs","Value of a petrol bike still held in month 48","Delhi makes new two-wheeler registrations electric-only from 1 April 2028 (lane R-E), so used petrol values fall"),
 ("A18","late_resale",27000,24000,30000,"Rs","Resale of petrol bikes sold in month 12","Case Rs 30,000 today (X05), about 10% lower a year on"),
 ("A19","fuel_share",0.78,0.78,0.78,"share","Fuel share of petrol running cost","The rest is servicing, oil and tyres (lane R-D)"),
 ("A20","petrol_price",100.0,100.0,100.0,"Rs per litre","Delhi petrol price","Delhi retail price in 2026 (lane R-D)"),
 ("A21","ef_petrol",2.31,2.31,2.31,"kg CO2 per litre","Petrol emission factor","IPCC 2006 default for motor gasoline (lane R-G)"),
 ("A22","kmpl",42.0,42.0,42.0,"km per litre","Delivery-bike fuel economy","110 to 125 cc bike in stop-start city delivery (lane R-D)"),
 ("A23","kwh_km",0.036,0.036,0.036,"kWh per km","EV energy use including charging losses","Cargo e-scooter energy use (lane R-D)"),
 ("A24","ef_grid",0.727,0.727,0.727,"kg CO2 per kWh","Grid emission factor","CEA CO2 Baseline Database, latest version (lane R-G)"),
 ("A25","floor",1000000,1000000,1000000,"Rs","Minimum cash balance","About one month of rider pay for the contract fleet"),
 ("A26","ev_res_mult",1.00,0.85,1.00,"multiplier","Resale multiplier on owned EVs","Falling new-EV prices pull used values down (case U02)"),
]
A = {a[0]: dict(key=a[1], base=a[2], bear=a[3], bull=a[4], unit=a[5], label=a[6], basis=a[7]) for a in AS}
def params(s="base", **over):
    P = {a["key"]: a[s] for a in A.values()}
    P.update(dict(petrol_shock=0.0, elec_up=0.0, util_shift=0.0, c_vol=1.0, subsidy=F["subsidy"], rev_del=F["rev_del"]))
    P.update(over); return P

# ---------- decisions (fixed by the plan, not assumptions) ----------
SPARE_C, SPARE_E = 6, 4                 # two spares per contract tranche; four spares for the converted fleet
WAVES = {2: 50, 4: 40, 12: 10}          # electrify first; the last ten petrol bikes run to month 12 as a fallback
OPT = {
 "O0": dict(name="Stay petrol, no contract", short="Stay petrol", contract=False, ex=None, own_e=False, own_c=False),
 "O1": dict(name="Buy 100 EVs, no contract", short="Electrify, buy", contract=False, ex={2: 100}, own_e=True, own_c=False),
 "O2": dict(name="Buy EVs for the contract, keep petrol", short="Grow, buy", contract=True, ex=None, own_e=False, own_c=True),
 "O3": dict(name="Buy EVs for both", short="Both, buy", contract=True, ex=WAVES, own_e=True, own_c=True),
 "O4": dict(name="Lease EVs for the contract, keep petrol", short="Grow, lease", contract=True, ex=None, own_e=False, own_c=False),
 "O5": dict(name="Lease EVs for both, electrify first", short="Both, lease", contract=True, ex=WAVES, own_e=False, own_c=False),
 "O6": dict(name="Lease EVs for the existing fleet, contract not won", short="No award", contract=False, ex=WAVES, own_e=False, own_c=False),
}
HK = ["O0", "O1", "O2", "O3", "O4", "O5"]
DM = F["del_day"] * F["days"]

def sim(k, P, loan=0.0):
    o = OPT[k]; ex = o["ex"] or {}; aw = int(P["award"])
    tr = {aw + 1: 25, aw + 3: 25, aw + 5: 25} if o["contract"] else {}
    first = min(tr) if tr else None; fe = min(ex) if ex else None
    rm = (1 + P["disc"]) ** (1 / 12) - 1; li = F["loan_rate"] / 12
    emi = loan * li / (1 - (1 + li) ** -F["loan_term"]) if loan > 0 else 0.0
    petrol, ev_e, sp_e, ca, sp_c, owned, rec0, cash, rows = 100, 0, 0, 0, 0, [], 0.0, F["capital"], []
    lit = F["petrol_run"] * P["fuel_share"] / P["petrol_price"]; km = lit * P["kmpl"]
    for t in range(1, H + 1):
        capex = charge = dep = onb = build = sale = 0.0
        if t in ex:
            n = ex[t]; petrol -= n; ev_e += n; sale += n * (P["late_resale"] if t >= 12 else F["petrol_resale"]); onb += n * P["train"]
            s = SPARE_E if (t == fe and k != "O1") else 0; sp_e += s; nn = n + s; charge += nn * F["charge_100"] / 100
            if o["own_e"]: capex += nn * (F["ev_price"] - P["subsidy"]); owned.append((t, nn))
            else: dep += nn * P["dep_months"] * P["lease_rs"]
        if t in tr:
            n = tr[t]; s = SPARE_C // 3; ca += n; sp_c += s; onb += n * P["onboard"]; charge += (n + s) * F["charge_100"] / 100
            if o["own_c"]: capex += (n + s) * (F["ev_price"] - P["subsidy"]); owned.append((t, n + s))
            else: dep += (n + s) * P["dep_months"] * P["lease_rs"]
        if (o["contract"] or k == "O6") and t == 2: build += P["build"] if o["contract"] else P["build"] * 8 / 13
        ev_ok = (ev_e > 0) or (ca > 0)
        shift = (P["util_shift"] * (1 if (ev_ok and petrol == 0) else -1)) if t >= 13 else 0.0
        u_ex = P["util"] + shift
        if ca > 0:
            j = t - first; up = P["c_plateau"]
            uc = (P["c_start"] + (up - P["c_start"]) * j / P["c_ramp"]) if j < P["c_ramp"] else up
            uc = min(uc, up) * P["c_vol"]; avf = min(1.0, P["avail"] * (ca + sp_c) / ca)
        else: uc, avf = 0.0, 1.0
        rev_ex = F["fleet"] * DM * u_ex * P["rev_del"]; rev_c = ca * DM * uc * avf * P["rev_del"]
        rider = (F["fleet"] + ca) * F["rider"] * (1 + (P["rider_esc"] if t >= 13 else 0))
        n_own = (ev_e if o["own_e"] else 0) + (ca if o["own_c"] else 0)
        n_lease = (0 if o["own_e"] else ev_e + sp_e) + (0 if o["own_c"] else ca + sp_c)
        energy = petrol * F["petrol_run"] * (1 + (P["petrol_shock"] if t >= 7 else 0)) + n_own * F["ev_run"] * (1 + 0.3 * P["elec_up"])
        lease = n_lease * P["lease_rs"]; ovh = P["c_ovh"] if (o["contract"] and t > aw) else 0.0
        nev = ev_e + sp_e + ca + sp_c; mrv = P["mrv_pm"] * nev if (o["contract"] or k == "O6") else 0.0
        contrib = rev_ex + rev_c - rider - energy - lease - ovh - mrv
        rec = rev_c * P["rec_days"] / 30; drec = rec - rec0; rec0 = rec
        ld = loan if t == 1 else 0.0; e = emi if (loan > 0 and t <= F["loan_term"]) else 0.0
        cf = contrib - capex - charge - dep - onb - build - drec + sale + ld - e; cash += cf
        co2 = petrol * lit * P["ef_petrol"] + (ev_e + ca) * km * P["kwh_km"] * P["ef_grid"]
        dels = F["fleet"] * DM * u_ex + ca * DM * uc * avf
        rows.append(dict(t=t, petrol=petrol, ev=ev_e + ca, ev_e=ev_e, ev_c=ca, spares=sp_e + sp_c, uc=uc, rev=rev_ex + rev_c, rev_c=rev_c,
                         rider=rider, energy=energy, lease=lease, ovh=ovh, mrv=mrv, contrib=contrib, capex=capex, charge=charge,
                         dep=dep, onb=onb, build=build, drec=drec, sale=sale, loan=ld, emi=e, cf=cf, cash=cash, co2=co2, dels=dels))
    term = 0.0
    for (m, n) in owned:
        res = F["ev_resale"] * P["ev_res_mult"]; age = H - m + 1
        term += n * max(res, F["ev_price"] - (F["ev_price"] - res) * age / F["ev_life"])
    term += petrol * P["petrol_res48"] + rec0 + sum(r["dep"] for r in rows)
    npv = sum(r["cf"] / (1 + rm) ** r["t"] for r in rows) + term / (1 + rm) ** H
    return dict(rows=rows, npv=npv, term=term, loan=loan, mincash=min(r["cash"] for r in rows))

def run(k, P):
    loan = 0.0
    for _ in range(40):
        r = sim(k, P, loan)
        if r["mincash"] >= P["floor"] - 1: return r
        loan = math.ceil((loan + (P["floor"] - r["mincash"]) * 1.02) / 5e5) * 5e5
    raise RuntimeError("debt sizing did not converge for " + k)

def summ(r):
    R = r["rows"]; m = R[23]
    uses = {x: sum(q[x] for q in R[:24]) for x in ("capex", "charge", "dep", "onb", "build", "drec", "sale", "emi", "loan")}
    cost = m["rider"] + m["energy"] + m["lease"] + m["ovh"] + m["mrv"]
    return dict(npv=r["npv"], c24=sum(q["contrib"] for q in R[:24]), rr24=m["contrib"] * 12, rev24=m["rev"] * 12,
                cash24=m["cash"], mincash=r["mincash"], minmonth=min(R, key=lambda q: q["cash"])["t"], loan=r["loan"], uses=uses,
                co2_24=m["co2"] * 12 / 1000, g_del24=m["co2"] / m["dels"] * 1000, dels24=m["dels"], ev24=m["ev"],
                petrol24=m["petrol"], fuel_share24=m["energy"] / cost, capex24=uses["capex"])

PB = params("base"); BASE = {k: run(k, PB) for k in OPT}; S = {k: summ(v) for k, v in BASE.items()}
for k in OPT: S[k]["dnpv"] = S[k]["npv"] - S["O0"]["npv"]
SCN = ("bear", "base", "bull")
SC = {s: {k: summ(run(k, params(s))) for k in ("O0", "O3", "O5", "O6")} for s in SCN}

# ---------- unit economics per bike-month ----------
li = F["loan_rate"] / 12
def ann(n, r=li): return r / (1 - (1 + r) ** -n)
emi_ev = (F["ev_price"] - F["subsidy"]) * ann(F["loan_term"])
def own_parts(sub):
    cap = (F["ev_price"] - sub) * ann(48); res = F["ev_resale"] * (1 + li) ** -48 * ann(48); chg = F["charge_100"] / 100 * ann(48)
    return dict(capital=cap, resale=-res, charging=chg, running=F["ev_run"], total=cap - res + chg + F["ev_run"])
OWN = own_parts(F["subsidy"])
UE = []
for lab, u, veh in [("Petrol bike", 0.85, F["petrol_run"]), ("EV bought, running cost only", 0.85, F["ev_run"]),
                    ("EV bought, all-in", 0.85, OWN["total"]), ("EV leased", 0.85, F["lease"]), ("EV leased, contract at full volume", 1.0, F["lease"])]:
    rv = DM * u * F["rev_del"]; c = rv - F["rider"] - veh
    UE.append(dict(label=lab, util=u, dels=DM * u, rev=rv, rider=F["rider"], vehicle=veh, contrib=c, margin=c / rv))

# ---------- switch points ----------
def bisect(fn, lo, hi, it=50):
    flo = fn(lo)
    for _ in range(it):
        mid = (lo + hi) / 2; fm = fn(mid)
        if (fm > 0) == (flo > 0): lo, flo = mid, fm
        else: hi = mid
    return (lo + hi) / 2
SW = dict(lease_bike=OWN["total"],
          lease_fleet=bisect(lambda x: run("O5", params("base", lease_rs=x))["npv"] - run("O3", params("base", lease_rs=x))["npv"], 3000, 9000),
          subsidy=bisect(lambda s: own_parts(s)["total"] - F["lease"], 0, 119000),
          c_util_bike=(F["rider"] + F["lease"]) / (DM * F["rev_del"]),
          c_vol=bisect(lambda v: sim("O4", params("base", c_vol=v))["npv"] - sim("O0", PB)["npv"], 0.30, 1.0),
          rev_del=bisect(lambda x: sim("O5", params("base", rev_del=x))["npv"], 15, 40),
          emi=emi_ev)

# ---------- tornado: recommended NPV over 48 months, one input at a time ----------
TOR_IN = [("All-in lease rate", "lease_rs", 5000, 3000, "Rs 5,000", "Rs 3,000"),
          ("Contract volume", "c_vol", 0.80, 1.00, "80%", "100%"),
          ("Utilisation now", "util", 0.80, 0.90, "80%", "90%"),
          ("Price per delivery", "rev_del", 36, 44, "Rs 36", "Rs 44"),
          ("Rider pay rise", "rider_esc", 0.15, 0.0, "+15% from month 13", "flat"),
          ("Award month", "award", 6, 2, "month 6", "month 2"),
          ("EV availability", "avail", 0.88, 0.98, "88%", "98%"),
          ("Discount rate", "disc", 0.15, 0.09, "15%", "9%"),
          ("Receivable days", "rec_days", 75, 30, "75 days", "30 days")]
TOR = []
for lab, key, lo, hi, lt, ht in TOR_IN:
    a = run("O5", params("base", **{key: lo}))["npv"]; b = run("O5", params("base", **{key: hi}))["npv"]
    TOR.append(dict(label=lab, lo=min(a, b), hi=max(a, b), lo_text=lt, hi_text=ht, swing=abs(b - a)))
TOR.sort(key=lambda d: -d["swing"])

# ---------- the seven uncertainties the case lists, against each option: change in NPV, Rs lakh ----------
UNC = [("U01", "Petrol up 20% from month 7", dict(petrol_shock=0.20)),
       ("U02", "EV prices fall 15%", dict(ev_res_mult=0.85)),
       ("U03", "Delivery demand down 10%", dict(util=0.765, c_vol=0.90)),
       ("U04", "Electricity up 25%", dict(elec_up=0.25)),
       ("U05", "Charging downtime doubles", dict(avail=0.90)),
       ("U06", "EV subsidy withdrawn", dict(subsidy=0)),
       ("U07", "Clients shift volume by emissions", dict(util_shift=0.03))]
HEAT = [[round((run(k, params("base", **ov))["npv"] - S[k]["npv"]) / L, 1) for k in HK] for _, _, ov in UNC]

# ---------- scorecard: rules, not judgement ----------
best = max(S[k]["dnpv"] for k in HK)
def band(x, cuts): return 1 + sum(x >= c for c in cuts)
EXPO = {k: -sum(min(0, HEAT[i][j]) for i in range(len(UNC))) for j, k in enumerate(HK)}
W = dict(value=0.35, liquidity=0.20, resilience=0.20, emissions=0.15, growth=0.10)
CARD = {}
for k in HK:
    s = S[k]; npv_l = s["npv"] / L
    v = band(s["dnpv"] / best, [0.2, 0.4, 0.6, 0.8])
    lq = 5 if (s["loan"] == 0 and s["mincash"] >= 50 * L) else (4 if s["loan"] == 0 else (3 if s["loan"] <= 50 * L else (2 if s["loan"] <= 100 * L else 1)))
    at_risk = EXPO[k] / npv_l
    rs = 5 if at_risk <= 0.40 else (4 if at_risk <= 0.60 else (3 if at_risk <= 0.80 else (2 if at_risk <= 1.00 else 1)))
    em = band(-s["g_del24"], [-240, -200, -160, -120]); gr = 5 if OPT[k]["contract"] else 1
    d = dict(value=v, liquidity=lq, resilience=rs, emissions=em, growth=gr)
    CARD[k] = dict(d, score=round(sum(W[x] * d[x] for x in W), 2), at_risk=at_risk)

# ---------- uses of the Rs 1 crore and the contribution bridge (recommended) ----------
u5 = S["O5"]["uses"]
USES = [("Contract working capital", u5["drec"], "months 4 to 10"), ("Charging hub", u5["charge"], "months 2 to 8"),
        ("Lease deposits", u5["dep"], "months 2 to 8"), ("Reporting and dispatch", u5["build"], "month 2"),
        ("Riders: hiring and EV training", u5["onb"], "months 2 to 12")]
USES.append(("Reserve", F["capital"] - sum(v for _, v, _ in USES), "held"))
P = PB
BR = [("Today, petrol", S["O0"]["rr24"]),
      ("Fuel to lease, 100 bikes", F["fleet"] * (F["petrol_run"] - P["lease_rs"]) * 12),
      ("Spares, existing fleet", -SPARE_E * P["lease_rs"] * 12),
      ("Contract margin, 75 bikes", F["c_veh"] * (DM * P["c_plateau"] * P["rev_del"] - F["rider"] - P["lease_rs"]) * 12),
      ("Spares, contract", -SPARE_C * P["lease_rs"] * 12),
      ("Contract overhead", -P["c_ovh"] * 12),
      ("Reporting running cost", -P["mrv_pm"] * (F["fleet"] + SPARE_E + F["c_veh"] + SPARE_C) * 12)]
BR.append(("Month 24, run-rate", sum(v for _, v in BR)))
R5, R3, R0 = BASE["O5"]["rows"], BASE["O3"]["rows"], BASE["O0"]["rows"]
QTR = []
for q in range(8):
    seg = R5[q * 3:(q + 1) * 3]
    QTR.append(dict(q="Q%d" % (q + 1), rev=sum(x["rev"] for x in seg), contrib=sum(x["contrib"] for x in seg), cash=seg[-1]["cash"],
                    petrol=seg[-1]["petrol"], ev_e=seg[-1]["ev_e"], ev_c=seg[-1]["ev_c"], spares=seg[-1]["spares"]))
EM = dict(today_t=R0[0]["co2"] * 12 / 1000, today_g=R0[0]["co2"] / R0[0]["dels"] * 1000,
          m12_t=R5[11]["co2"] * 12 / 1000, m12_g=R5[11]["co2"] / R5[11]["dels"] * 1000,
          m24_t=R5[23]["co2"] * 12 / 1000, m24_g=R5[23]["co2"] / R5[23]["dels"] * 1000,
          dels_today=R0[0]["dels"], dels_24=R5[23]["dels"],
          petrol_kg=F["petrol_run"] * P["fuel_share"] / P["petrol_price"] * P["ef_petrol"],
          ev_kg=F["petrol_run"] * P["fuel_share"] / P["petrol_price"] * P["kmpl"] * P["kwh_km"] * P["ef_grid"],
          km_month=F["petrol_run"] * P["fuel_share"] / P["petrol_price"] * P["kmpl"])

# ---------- checks ----------
CHK = {
 "contract revenue ties to 75 x 30 x 26 x Rs 40 x 12": abs(F["c_veh"] * DM * F["rev_del"] * 12 - F["c_rev"]) / F["c_rev"] < 0.01,
 "current contribution is Rs 3,520 a bike-month": abs(UE[0]["contrib"] - 3520) < 0.5,
 "lease beats bought all-in at case values": F["lease"] < OWN["total"],
 "financed EMI alone exceeds the lease": emi_ev > F["lease"],
 "recommended has the highest NPV of the six": max(HK, key=lambda k: S[k]["npv"]) == "O5",
 "recommended needs no debt": S["O5"]["loan"] == 0,
 "buying both needs debt": S["O3"]["loan"] > 0,
 "uses of the Rs 1 crore sum to Rs 1 crore": abs(sum(v for _, v, _ in USES) - F["capital"]) < 1,
 "reserve is positive": USES[-1][1] > 0,
 "bridge sums to the month 24 run-rate": abs(BR[-1][1] - S["O5"]["rr24"]) < 1,
 "recommended stays above the cash floor in bear without debt": SC["bear"]["O5"]["mincash"] >= PB["floor"] - 1 and SC["bear"]["O5"]["loan"] == 0,
 "recommended beats buying both in bear and in bull": all(SC[s]["O5"]["npv"] > SC[s]["O3"]["npv"] for s in ("bear", "bull")),
 "no petrol bikes at month 24": S["O5"]["petrol24"] == 0,
 "contract fleet complete within 12 months": PB["award"] + 5 <= F["scale_m"],
 "emissions per delivery fall": EM["m24_g"] < EM["today_g"],
 "scorecard ranks the recommendation first": max(HK, key=lambda k: CARD[k]["score"]) == "O5",
 "no-award branch still beats staying petrol": S["O6"]["npv"] > S["O0"]["npv"],
 "lease switch point above the case lease": SW["lease_fleet"] > F["lease"],
}
OK = all(CHK.values())

# ---------- formatting (Indian grouping, no dashes) ----------
def inr(x):
    n = abs(round(x)); s = str(n)
    if len(s) > 3:
        head, tail = s[:-3], s[-3:]; parts = []
        while len(head) > 2: parts.append(head[-2:]); head = head[:-2]
        if head: parts.append(head)
        s = ",".join(reversed(parts)) + "," + tail
    return ("−" if round(x) < 0 else "") + s
def lk(x, d=1): return ("−" if x < 0 else "") + ("%." + str(d) + "f") % abs(x / L)
def crs(x, d=2): return ("−" if x < 0 else "") + ("%." + str(d) + "f") % abs(x / CR)
def pc(x, d=0): return ("%." + str(d) + "f%%") % (x * 100)

# ---------- deck values: every slide number comes from here ----------
s5, s3, s0, s6 = S["O5"], S["O3"], S["O0"], S["O6"]
DECK = dict(
 rr0=lk(s0["rr24"]), rr5=crs(s5["rr24"]), mult="%.1fx" % (s5["rr24"] / s0["rr24"]), npv5=crs(s5["npv"]), npv3=crs(s3["npv"]),
 gap53=crs(s5["npv"] - s3["npv"]), dnpv5=crs(s5["dnpv"]), loan3=lk(s3["loan"], 0), emi=inr(emi_ev), own_all=inr(OWN["total"]),
 lease=inr(F["lease"]), sw_lease=inr(SW["lease_fleet"]), sw_lease_pct=pc(SW["lease_fleet"] / F["lease"] - 1), sw_sub=inr(SW["subsidy"]),
 sw_cvol=pc(SW["c_vol"]), sw_cutil=pc(SW["c_util_bike"]), sw_rev="%.1f" % SW["rev_del"],
 contrib0=inr(UE[0]["contrib"]), margin0=pc(UE[0]["margin"], 1), fuel_share0=pc(F["petrol_run"] / UE[0]["rev"]),
 rider_share0=pc(F["rider"] / UE[0]["rev"]), rev0=crs(s0["rev24"]), c_rev85=crs(F["c_veh"] * DM * 0.85 * F["rev_del"] * 12),
 cash5_24=crs(s5["cash24"]), min5=crs(s5["mincash"]), min5_month=s5["minmonth"], cash3_24=crs(s3["cash24"]),
 g0=str(round(EM["today_g"])), g24=str(round(EM["m24_g"])), gcut=pc(1 - EM["m24_g"] / EM["today_g"]),
 t0=str(round(EM["today_t"])), t24=str(round(EM["m24_t"])), dels_up=pc(EM["dels_24"] / EM["dels_today"] - 1),
 npv6=crs(s6["npv"]), dnpv6=crs(s6["dnpv"]), npv0=crs(s0["npv"]),
 bear5=crs(SC["bear"]["O5"]["npv"]), bear3=crs(SC["bear"]["O3"]["npv"]), bull5=crs(SC["bull"]["O5"]["npv"]), bull3=crs(SC["bull"]["O3"]["npv"]),
 bear3_loan=lk(SC["bear"]["O3"]["loan"], 0), bear5_min=lk(SC["bear"]["O5"]["mincash"], 0),
 ue=[[u["label"], inr(u["rev"]), inr(u["vehicle"]), inr(u["contrib"]), pc(u["margin"], 1)] for u in UE],
 wf=[["Revenue", UE[0]["rev"]], ["Rider pay", -F["rider"]], ["Petrol", -F["petrol_run"]], ["Left over", UE[0]["contrib"]]],
 opts=[[OPT[k]["short"], ("Yes" if OPT[k]["contract"] else "No"), lk(S[k]["capex24"], 0), lk(S[k]["loan"], 0), crs(S[k]["npv"]),
        lk(S[k]["rr24"], 0), str(round(S[k]["g_del24"])), "%.2f" % CARD[k]["score"]] for k in HK],
 scores=[CARD[k]["score"] for k in HK], cards=[[CARD[k][x] for x in ("value", "liquidity", "resilience", "emissions", "growth")] for k in HK],
 heat=HEAT, heat_rows=[u[1] for u in UNC], heat_cols=[OPT[k]["short"] for k in HK],
 own_cap=OWN["capital"] + OWN["resale"], own_chg=OWN["charging"], own_run=OWN["running"],
 uses=[[n, v / L, w] for n, v, w in USES], uses_txt=[[n, lk(v), pc(v / F["capital"]), w] for n, v, w in USES],
 bridge=[[n, v / L] for n, v in BR], cash5=[R5[t]["cash"] / L for t in range(24)], cash3=[R3[t]["cash"] / L for t in range(24)],
 cash0=[R0[t]["cash"] / L for t in range(24)],
 qtr=[[q["q"], lk(q["rev"]), lk(q["contrib"]), lk(q["cash"])] for q in QTR],
 fleet=[[q["q"], q["petrol"], q["ev_e"], q["ev_c"]] for q in QTR],
 scen=[["NPV, ₹ Cr"] + [crs(SC[s]["O5"]["npv"]) for s in SCN],
       ["Run-rate, ₹ L"] + [lk(SC[s]["O5"]["rr24"], 0) for s in SCN],
       ["Low cash, ₹ L"] + [lk(SC[s]["O5"]["mincash"], 0) for s in SCN],
       ["Buy both NPV"] + [crs(SC[s]["O3"]["npv"]) for s in SCN],
       ["Buy both debt"] + [lk(SC[s]["O3"]["loan"], 0) for s in SCN]],
 rr0r=str(round(s0["rr24"] / L)), rr12=lk(R5[11]["contrib"] * 12), ev8=str(R5[7]["ev"]), ev12=str(R5[11]["ev"]),
 capex3=lk(s3["capex24"]), used=lk(F["capital"] - USES[-1][1]), reserve=lk(USES[-1][1]), sale5=lk(S["O5"]["uses"]["sale"]),
 c24_5=lk(s5["c24"]), c24_0=lk(s0["c24"]), cash0_24=crs(s0["cash24"]),
 own_c=inr(OWN["capital"]), own_h=inr(OWN["charging"]), own_r=inr(-OWN["resale"]), dels0=inr(EM["dels_today"]), dels24=inr(EM["dels_24"]),
 sw_sub_n=SW["subsidy"], km=inr(EM["km_month"]),
 kpi=[["Contribution a year", lk(s0["rr24"]) + " L", crs(R5[11]["contrib"] * 12) + " Cr", crs(s5["rr24"]) + " Cr"],
      ["g CO2 per delivery", str(round(EM["today_g"])), str(round(EM["m12_g"])), str(round(EM["m24_g"]))],
      ["Petrol bikes", "100", str(R5[11]["petrol"]), str(R5[23]["petrol"])],
      ["Cash, ₹ Cr", crs(F["capital"]), crs(R5[11]["cash"]), crs(s5["cash24"])]],
 tor=[[t["label"], t["lo"] / CR, t["hi"] / CR, t["lo_text"], t["hi_text"]] for t in TOR[:7]], tor_base=s5["npv"] / CR,
 em=dict(today_t=round(EM["today_t"]), m24_t=round(EM["m24_t"]), today_g=round(EM["today_g"]), m24_g=round(EM["m24_g"]),
         petrol_kg=round(EM["petrol_kg"]), ev_kg=round(EM["ev_kg"]), km=round(EM["km_month"])),
)
OUT = dict(meta=dict(model="SWIFTKART MODEL v1", horizon_months=H), checks=CHK, F=F, A=A, options={k: OPT[k]["name"] for k in OPT},
           summary=S, scenarios=SC, unit=UE, own=OWN, switch=SW, tornado=TOR,
           heat=dict(rows=[u[1] for u in UNC], cols=HK, values=HEAT, exposure=EXPO), scorecard=dict(weights=W, cards=CARD),
           uses=[dict(line=n, rs=v, when=w) for n, v, w in USES], bridge=[dict(step=n, rs=v) for n, v in BR], quarters=QTR,
           emissions=EM, monthly_o5=R5[:24], deck=DECK)
OUT["meta"]["hash"] = hashlib.sha1(json.dumps(OUT, sort_keys=True, default=float).encode()).hexdigest()[:10]
DECK["hash"] = OUT["meta"]["hash"]

# ---------- model tables (reproduced as Appendix B of the research document) ----------
def tbl(head, rows): return "| " + " | ".join(head) + " |\n|" + "---|" * len(head) + "\n" + "\n".join("| " + " | ".join(str(c) for c in r) + " |" for r in rows) + "\n"
T = []
T.append("## T1. Case facts used by the model\n\n" + tbl(["Key", "Brief ID", "Value"], [[k, FID[k], v] for k, v in F.items()]))
T.append("## T2. Unit economics per bike-month\n\n" + tbl(["Configuration", "Utilisation", "Deliveries", "Revenue, Rs", "Rider, Rs", "Vehicle, Rs", "Contribution, Rs", "Margin"],
         [[u["label"], pc(u["util"]), inr(u["dels"]), inr(u["rev"]), inr(u["rider"]), inr(u["vehicle"]), inr(u["contrib"]), pc(u["margin"], 1)] for u in UE]))
T.append("## T3. A bought EV, monthly equivalent at 11% over 48 months, against the lease\n\n" + tbl(["Component", "Rs a month"],
         [["Capital (Rs 1,20,000 less Rs 10,000 subsidy)", inr(OWN["capital"])], ["Resale credit (Rs 25,000 at month 48)", inr(OWN["resale"])],
          ["Charging hub share (Rs 10,000)", inr(OWN["charging"])], ["Running cost", inr(OWN["running"])], ["Total, bought", inr(OWN["total"])],
          ["Lease, all-in", inr(F["lease"])], ["EMI alone on a 3-year 11% loan", inr(emi_ev)]]))
T.append("## T4. The options, as modelled\n\n" + tbl(["ID", "Option", "Contract", "Existing fleet", "Contract fleet"],
         [[k, OPT[k]["name"], "Yes" if OPT[k]["contract"] else "No",
           (("bought" if OPT[k]["own_e"] else "leased") + (" in waves (months 2, 4, 12)" if OPT[k]["ex"] == WAVES else " in month 2")) if OPT[k]["ex"] else "petrol",
           (("bought" if OPT[k]["own_c"] else "leased") + " in months 4, 6, 8") if OPT[k]["contract"] else "none"] for k in OPT]))
T.append("## T5. Options compared (base case)\n\n" + tbl(["ID", "Option", "NPV 48m, Rs Cr", "vs petrol, Rs Cr", "Contribution 24m, Rs L", "Run-rate M24, Rs L a year", "Cash M24, Rs Cr", "Lowest cash, Rs L", "Debt, Rs L", "Capex 24m, Rs L", "g CO2 per delivery M24"],
         [[k, OPT[k]["name"], crs(S[k]["npv"]), crs(S[k]["dnpv"]), lk(S[k]["c24"]), lk(S[k]["rr24"]), crs(S[k]["cash24"]), lk(S[k]["mincash"]), lk(S[k]["loan"]), lk(S[k]["capex24"]), round(S[k]["g_del24"])] for k in OPT]))
T.append("## T6. Scorecard\n\nScore = 0.35 Value + 0.20 Liquidity + 0.20 Resilience + 0.15 Emissions + 0.10 Growth\n\n" + tbl(["ID", "Value", "Liquidity", "Resilience", "Emissions", "Growth", "Value at risk", "Score"],
         [[k, CARD[k]["value"], CARD[k]["liquidity"], CARD[k]["resilience"], CARD[k]["emissions"], CARD[k]["growth"], pc(CARD[k]["at_risk"]), "%.2f" % CARD[k]["score"]] for k in HK]))
T.append("## T7. Recommended plan, month by month (Rs lakh)\n\n" + tbl(["Month", "Petrol", "EV", "Spares", "Revenue", "Contribution", "Investment", "Working capital", "Petrol sales", "Cash flow", "Cash"],
         [[r["t"], r["petrol"], r["ev"], r["spares"], lk(r["rev"]), lk(r["contrib"]), lk(r["charge"] + r["dep"] + r["onb"] + r["build"]), lk(r["drec"]), lk(r["sale"]), lk(r["cf"]), lk(r["cash"])] for r in R5[:24]]))
T.append("## T8. Recommended plan by quarter\n\n" + tbl(["Quarter", "Revenue, Rs L", "Contribution, Rs L", "Cash at end, Rs L", "Petrol bikes", "EVs existing", "EVs contract", "Spares"],
         [[q["q"], lk(q["rev"]), lk(q["contrib"]), lk(q["cash"]), q["petrol"], q["ev_e"], q["ev_c"], q["spares"]] for q in QTR]))
T.append("## T9. Uses of the Rs 1 crore, months 1 to 24\n\n" + tbl(["Use", "Rs lakh", "Share", "When"], [[n, lk(v), pc(v / F["capital"]), w] for n, v, w in USES]))
T.append("## T10. Scenarios\n\n" + tbl(["Option", "Measure"] + list(SCN), [[k, m] + [(crs(SC[s][k][x]) if x == "npv" else lk(SC[s][k][x])) for s in SCN] for k in ("O0", "O3", "O5", "O6") for m, x in (("NPV, Rs Cr", "npv"), ("Run-rate M24, Rs L", "rr24"), ("Lowest cash, Rs L", "mincash"), ("Debt, Rs L", "loan"))]))
T.append("## T11. Sensitivity of the recommended plan (NPV over 48 months, Rs Cr)\n\n" + tbl(["Input", "Low case", "High case", "NPV low", "NPV high", "Swing"],
         [[t["label"], t["lo_text"], t["hi_text"], crs(t["lo"]), crs(t["hi"]), crs(t["swing"])] for t in TOR]))
T.append("## T12. The seven uncertainties in the case, against each option (change in NPV, Rs lakh)\n\n" + tbl(["Uncertainty"] + HK, [[u[1]] + [("−" if v < 0 else "") + "%.1f" % abs(v) for v in row] for u, row in zip(UNC, HEAT)]) + "\nExposure (sum of losses), Rs lakh: " + ", ".join("%s %.1f" % (k, EXPO[k]) for k in HK) + "\n")
T.append("## T13. Switch points and break-evens\n\n" + tbl(["Question", "Answer"],
         [["Lease rate at which buying one bike matches leasing", "Rs " + inr(SW["lease_bike"]) + " a month"], ["Lease rate at which buying both fleets matches leasing both (NPV)", "Rs " + inr(SW["lease_fleet"]) + " a month"],
          ["Subsidy per EV at which buying matches the Rs 3,500 lease", "Rs " + inr(SW["subsidy"])], ["Contract utilisation at which one leased bike breaks even", pc(SW["c_util_bike"], 1)],
          ["Contract volume at which the leased contract adds no value over petrol", pc(SW["c_vol"], 1)], ["Revenue per delivery at which the recommended plan is worth zero over 48 months", "Rs " + "%.1f" % SW["rev_del"]],
          ["EMI on a financed EV, 3 years at 11%", "Rs " + inr(SW["emi"])]]))
T.append("## T14. Emissions\n\n" + tbl(["Measure", "Today", "Month 12", "Month 24"], [["Tonnes CO2 a year", round(EM["today_t"], 1), round(EM["m12_t"], 1), round(EM["m24_t"], 1)],
         ["Grams CO2 per delivery", round(EM["today_g"]), round(EM["m12_g"]), round(EM["m24_g"])], ["Deliveries a month", inr(EM["dels_today"]), inr(R5[11]["dels"]), inr(EM["dels_24"])]]))
T.append("## T15. Contribution bridge, today to month 24 (Rs lakh a year)\n\n" + tbl(["Step", "Rs lakh"], [[n, lk(v)] for n, v in BR]))
T.append("## T16. Assumptions register\n\n" + tbl(["ID", "Assumption", "Base", "Bear", "Bull", "Unit", "Basis"], [[a, A[a]["label"], A[a]["base"], A[a]["bear"], A[a]["bull"], A[a]["unit"], A[a]["basis"]] for a in A]))
T.append("## T17. Checks\n\n" + tbl(["Check", "Result"], [[k, "PASS" if v else "FAIL"] for k, v in CHK.items()]))
TABLES = "# SwiftKart model tables (model hash " + OUT["meta"]["hash"] + ")\n\n" + "\n".join(T)

for k, v in CHK.items(): print(("PASS " if v else "FAIL ") + k)
print("HASH", OUT["meta"]["hash"])
print("FINDINGS", [round(S["O5"]["npv"] / L, 1), round(S["O3"]["npv"] / L, 1), round(S["O5"]["rr24"] / L, 1), round(S["O0"]["rr24"] / L, 1), round(SW["lease_fleet"])])
if not DRY:
    io.open(HERE / "model_outputs.json", "w", encoding="utf-8").write(json.dumps(OUT, indent=1, sort_keys=True, default=float, ensure_ascii=False))
    io.open(HERE / "model_tables.md", "w", encoding="utf-8", newline="\n").write(TABLES)
    print("wrote model_outputs.json model_tables.md")
print("MODEL PASS" if OK else "MODEL FAIL")
```

## Q.2 Deck files (palette, tooling patch, setup, values, seven slide scripts)

<!-- FILE: deck/_palette.js -->
```js
const C = {
  primary:{r:0.059,g:0.463,b:0.431}, primaryDeep:{r:0.043,g:0.231,b:0.227},
  accent:{r:0.961,g:0.773,b:0.094}, alert:{r:0.761,g:0.255,b:0.047},
  tint:{r:0.800,g:0.984,b:0.945}, alertTint:{r:1,g:0.929,b:0.835},
  blue:{r:0.114,g:0.306,b:0.847}, blueDeep:{r:0.118,g:0.227,b:0.541}, blueTint:{r:0.859,g:0.918,b:0.996},
  good:{r:0.082,g:0.502,b:0.239}, goodTint:{r:0.863,g:0.988,b:0.906}, accentTint:{r:0.996,g:0.976,b:0.765},
  ink:{r:0.039,g:0.039,b:0.039}, surface:{r:0.929,g:0.929,b:0.929},
  surfaceAlt:{r:0.965,g:0.965,b:0.965}, white:{r:1,g:1,b:1}
};
const HG=[null,{r:0.941,g:0.992,b:0.980},{r:0.600,g:0.965,b:0.894},{r:0.176,g:0.831,b:0.749},{r:0.059,g:0.463,b:0.431},{r:0.043,g:0.231,b:0.227}];
const HR=[null,{r:1,g:0.969,b:0.929},{r:0.996,g:0.843,b:0.667},{r:0.984,g:0.573,b:0.235},{r:0.761,g:0.255,b:0.047}];
```

<!-- FILE: deck/patch_tooling.py -->
```python
"""One-time patch of the tooling copied from beyondtech-dcg/deck for the SwiftKart deck.
Every old string must occur exactly once. Run once: PY dreamforge-case/deck/patch_tooling.py
patch(read, write) takes two callables so the same edits can be tested in memory."""
import io, pathlib
D = pathlib.Path(__file__).resolve().parent if "__file__" in globals() else pathlib.Path("dreamforge-case/deck")

EXTRA = r'''function coverTop(s){ addChip(s,64,48,640,56,"IEEE DTU  |  DREAM FORGE 3.0  |  ROUND 2",C.primaryDeep,C.white,22);
  logoSlot(s,736,40,150,72,"IEEE DTU"); logoSlot(s,902,40,150,72,"Dream Forge"); logoSlot(s,1068,40,72,72,"DTU");
  addChip(s,1556,48,300,56,V.team.name,C.primaryDeep,C.white,22);
  addWireH(s,64,1856,140,C.ink,2.5); [64,512,960,1408,1856].forEach(cx=>addEllipse(s,cx-8,132,16,16,C.white,C.ink,2)); }
// Diverging heat cell for a change in value: losses in the petrol-red scale, gains in the teal scale.
function dvCell(v){ const a=Math.abs(v); const t=(v<0?"−":(v>0?"+":""))+Math.round(a);
  if(Math.round(a)===0) return {t:"0",f:C.white,tc:C.ink};
  if(v<0) return a>=100?{t,f:HR[4],tc:C.white}:(a>=20?{t,f:HR[3],tc:C.ink}:{t,f:HR[2],tc:C.ink});
  return a>=20?{t,f:HG[3],tc:C.ink}:{t,f:HG[2],tc:C.ink}; }
// A 3 px rule through the middle of a text node: the struck-through obvious answer.
function strike(p,t,color){ return addRect(p,t.x,t.y+t.height/2-1.5,t.width,3,color||C.alert); }
// Signed number with a true minus sign.
function sgn(v,dp){ return (v<0?"−":"")+Math.abs(v).toFixed(dp===undefined?1:dp); }
// ===== END SWIFTKART DECK EXTRAS ====='''

BAN = ('const BAN=["here\'s","let\'s","bottom line","delve","game-changer","unlock","it\'s not just","make no mistake","landscape","robust",'
       '"seamless","holistic","tapestry","paradigm","navigate","revolutioni","cutting-edge","leverage","empower","transformative","journey",'
       '"synergy","world-class","best-in-class","next-gen","reimagine","supercharge","harness","crucial","pivotal","furthermore","moreover",'
       '"in today\'s","ever-evolving","imagine","ecosystem","testament","elevate","what if","picture this","dive into","groundbreaking",'
       '"state-of-the-art","plethora","myriad","underscore","showcase","foster","bolster","spearhead","nuanced","intricate","meticulous",'
       '"realm","fast-paced","in conclusion","it is important to note","game changer"];')
ABSENT = ('const ABSENT=["BeyondTech","Beyond Tech","Eurogrip","Dream11","FanCode","Paytm","Liminal","Setu","PRAMAAN","Maudrik","SwasthyaGrid",'
          '"NEXORA","HarvestBox","Perennial","Verdict","Next Signal","Anuj","Gursimran","TODO","TBD","Lorem","Insert","xyz","undefined","NaN","Rs ","Rs."];')

def patch(read, write):
    def sub(rel, old, new):
        t = read(rel); assert t.count(old) == 1, (rel, old[:60], t.count(old)); write(rel, t.replace(old, new)); print("patched", rel, "|", old[:50])
    def line(rel, prefix, new):
        t = read(rel); ls = t.split("\n"); idx = [i for i, l in enumerate(ls) if l.lstrip().startswith(prefix)]
        assert len(idx) == 1, (rel, prefix, idx); ls[idx[0]] = new; write(rel, "\n".join(ls)); print("replaced line", rel, "|", prefix)
    sub("gen.py", "# ===== BEYONDTECH DECK GEN v2 =====", "# ===== SWIFTKART DECK GEN v1 =====")
    sub("gen.py", "NS = 11", "NS = 7")
    sub("gen.py", "X2 = (2, 3, 5)  # the redesigned slides", "X2 = (1, 2, 3, 4, 5, 6, 7)  # glyph metrics and rail helpers on every slide")
    sub("_extras.js", "// ===== BEYONDTECH DECK EXTRAS =====", "// ===== SWIFTKART DECK EXTRAS =====")
    line("_extras.js", "const RIBN=[", 'const RIBN=["THE SITUATION","STRATEGIC ALTERNATIVES","THE ₹1 CRORE DECISION","RECOMMENDATION AND ROADMAP"];')
    line("_extras.js", "const RIBAP=[", 'const RIBAP=["A1 CALCULATIONS","A2 ASSUMPTIONS","A3 SENSITIVITY","A4 EMISSIONS AND SOURCES"];')
    t = read("_extras.js"); END = "// ===== END BEYONDTECH DECK EXTRAS ====="
    assert t.count("function coverTop(s){") == 1 and t.count(END) == 1
    a = t.index("function coverTop(s){"); b = t.index(END) + len(END); write("_extras.js", t[:a] + EXTRA + t[b:]); print("replaced coverTop, added dvCell, strike, sgn")
    line("_sweeps.js", "const BAN=[", BAN)
    line("_sweeps.js", "const ABSENT=[", ABSENT)
    print("patch_tooling done")

if __name__ == "__main__":
    def rd(rel): return io.open(D / rel, encoding="utf-8").read().replace("\r", "")
    def wr(rel, t): io.open(D / rel, "w", encoding="utf-8", newline="\n").write(t)
    patch(rd, wr)
```

<!-- FILE: deck/setup.js -->
```js
// Creates (or finds) exactly seven slides, names them, checks fonts. Safe to rerun: it never makes a second set.
let grid = figma.currentPage.children.find(c => c.type === "SLIDE_GRID");
if (grid === undefined) { figma.createSlide(); grid = figma.currentPage.children.find(c => c.type === "SLIDE_GRID"); }
const all = () => grid.children.flatMap(r => r.children);
let guard = 0; while (all().length < 7 && guard++ < 10) figma.createSlide();
const names = ["01 Cover", "02 The Situation", "03 Strategic Alternatives", "04 The Rs 1 Crore Decision", "05 Recommendation and Roadmap", "06 Annexure", "07 Thank You"];
const slides = all(); slides.slice(0, 7).forEach((s, i) => { s.name = names[i]; });
const fonts = await figma.listAvailableFontsAsync();
const need = [["Poppins", "Bold"], ["Poppins", "ExtraBold"], ["Inter", "Semi Bold"], ["Inter", "Bold"]];
return { count: slides.length, ids: slides.slice(0, 7).map(s => s.id), extra: slides.slice(7).map(s => ({ id: s.id, children: s.children.length })),
  fontsOk: need.map(n => fonts.some(f => f.fontName.family === n[0] && f.fontName.style === n[1])) };
```

<!-- FILE: deck/make_values.py -->
```python
"""Build V for the SwiftKart slides from model/model_outputs.json. gen.py calls build(O); nothing here reads or writes a file.
Numbers come from O["deck"], which the model writes. The research constants below (PETROL, POLICY, CLIENTS, BIBLIO and the
source lines) are finalised in step D0 from VERIFIED rows in research/raw/*.md; each keeps the S-ID of its source in a
comment. Strings are already sized to their slide boxes; gen.py mock is the final judge."""
TEAM = [["Harsh Kawatra", "Delhi Technological University (DTU)", "Team Leader"],
        ["Dayita Arora", "Ramjas College, University of Delhi", "Member"]]
# Delhi retail petrol, Rs a litre, one reading a year (ADAPT in D0 from research/data/fuel_prices.csv, VERIFIED rows only)
PETROL = [["2021", 90.40], ["2022", 105.41], ["2023", 96.72], ["2024", 94.72], ["2025", 94.77], ["2026", 102.12]]
# Rules that set the clock (ADAPT in D0 from lane R-E; labels at most 2 lines of 11 characters)
POLICY = [["Nov 2023", "Delivery fleet rules"], ["Jul 2026", "EV Policy 2.0"], ["Apr 2028", "New 2W must be EV"], ["Apr 2030", "Fleets all EV"]]
# Client commitments (ADAPT in D0 from lane R-H; text at most 32 characters; brand must match a LOGO slot)
CLIENTS = [["Flipkart", "aims for an all-EV fleet by 2030"], ["Amazon", "runs EVs in delivery in India"], ["Zomato", "pledged all-EV delivery by 2030"]]
# Bibliography lines for the annexure, 16 pt (ADAPT in D0: the twelve sources the deck leans on, from research/raw/sources.md)
BIBLIO = ["Dream Forge 3.0 Round 2 case, IEEE DTU", "PPAC and IOCL, Delhi retail fuel prices", "MHI, PM E-DRIVE scheme notifications",
          "Delhi EV Policy 2.0, GNCTD (2026)", "Delhi Aggregator and Delivery Scheme 2023", "CEA, CO2 Baseline Database, latest",
          "IPCC 2006 Guidelines, Vol 2, Ch 3", "GHG Protocol Corporate and Scope 3", "Flipkart sustainability disclosures",
          "Amazon India delivery fleet releases", "Zomato (Eternal) sustainability report", "Team IdeaForge research and model"]
# One-line policy footnote for the timeline (ADAPT in D0 from lane R-E; at most 80 characters)
PMLINE = "PM E-DRIVE pays up to ₹5,000 per e-2W until 31 Mar 2028 (MHI)."
SRC = ["Source: Dream Forge 3.0 Round 2 case (IEEE DTU) | company websites and press, Oct 2026 | Team IdeaForge research and model ",
       "Source: case data | PPAC and IOCL Delhi prices | Delhi Transport Department | MHI PM E-DRIVE | company sustainability reports | model ",
       "Source: case data | six options modelled over 48 months at 11% | uncertainties as listed in the case | model tables T5, T6, T12 | model ",
       "Source: case data | model tables T7, T9, T15 | receivable terms and lease deposits from research sections 6 and 7 | model ",
       "Source: model tables T8, T10, T13 | risk register in research section 21 | model ",
       "Source: model tables T2 to T17 | CEA CO2 Baseline Database | IPCC 2006 Guidelines | research Appendix A | model ",
       "Source: Team IdeaForge, Dream Forge 3.0 Round 2 submission | model "]
USE_SHORT = {"Contract working capital": ("Working capital", "M4 to M10"), "Charging hub": ("Charging hub", "M2 to M8"),
             "Lease deposits": ("Lease deposits", "M2 to M8"), "Reporting and dispatch": ("Data, dispatch", "M2"),
             "Riders: hiring and EV training": ("Riders", "M2 to M12"), "Reserve": ("Reserve", "held")}

def build(O):
    assert all(O["checks"].values()), [k for k, v in O["checks"].items() if not v]
    D = dict(O["deck"]); h = O["meta"]["hash"]; V = dict(D)
    V["team"] = dict(name="TEAM IDEAFORGE", rows=TEAM)
    V["petrol"] = PETROL; V["policy"] = POLICY; V["clients"] = CLIENTS; V["biblio"] = BIBLIO; V["pmline"] = PMLINE
    A = O["A"]; b = lambda i, s="base": A[i][s]
    pc = lambda x: "%d%%" % round(x * 100)
    rs = lambda x: "₹" + "{:,}".format(int(x))
    V["assume"] = [["All-in lease", rs(b("A12"))], ["Contract volume", pc(b("A11"))], ["Utilisation now", pc(b("A13"))],
                   ["Receivable days", str(b("A01"))], ["Award month", "M" + str(b("A08"))], ["EV availability", pc(b("A15"))],
                   ["Discount rate", pc(b("A14"))], ["Petrol resale", "₹30,000"]]
    fm = {"A12": rs, "A11": pc, "A13": pc, "A01": str, "A08": lambda x: "M" + str(x), "A15": pc, "A14": pc, "A16": lambda x: ("+" + pc(x)) if x else "flat"}
    lab = {"A12": "All-in lease, ₹ a month", "A11": "Contract volume at plateau", "A13": "Utilisation, existing fleet", "A01": "Receivable days",
           "A08": "Contract award month", "A15": "EV availability", "A14": "Discount rate", "A16": "Rider pay rise from month 13"}
    V["assum"] = [[i, lab[i]] + [fm[i](A[i][s]) for s in ("bear", "base", "bull")] for i in ("A12", "A11", "A13", "A01", "A08", "A15", "A14", "A16")]
    V["src"] = [s + h for s in SRC]
    V["uses_rows"] = [[USE_SHORT[n][0], l, p, USE_SHORT[n][1]] for n, l, p, _ in D["uses_txt"]]
    V["uses_v"] = [u[1] for u in D["uses"]]
    br = D["bridge"]
    V["bridge6"] = [["Today", br[0][1]], ["Fuel to lease", br[1][1]], ["Contract", br[3][1]], ["Spares", br[2][1] + br[4][1]],
                    ["Overhead", br[5][1] + br[6][1]], ["Month 24", br[7][1]]]
    V["h1"] = ("Petrol takes " + D["fuel_share0"] + " of every rupee SwiftKart earns and leaves ₹" + D["contrib0"] +
               " a bike a month; the ₹2.8 Cr contract assumes 100% use, not 85%")
    V["h2"] = ("Leasing both fleets is worth ₹" + D["npv5"] + " Cr over four years, ₹" + D["gap53"] +
               " Cr more than buying both, which needs ₹" + D["loan3"] + " L of debt")
    V["h3"] = ("The crore buys what a lease cannot: ₹" + D["used"] + " L for working capital, charging, deposits, data and riders, and ₹" +
               D["reserve"] + " L in reserve")
    V["h4"] = ("Lease both fleets and electrify first: " + D["ev12"] + " EVs and no petrol by month 12, ₹" + D["rr5"] +
               " Cr a year by month 24, and no debt")
    V["h5"] = ("Annexure: one model behind every number; the answer holds in bear and bull cases, and leasing wins up to ₹" +
               D["sw_lease"] + " a month")
    V["cover_line"] = ("Electrify the 100 bikes first, then win the contract on a working EV operation. Contribution rises from ₹" +
                       D["rr0r"] + " L to ₹" + D["rr5"] + " Cr a year by month 24 with no debt, and ₹" + D["reserve"] +
                       " L of the crore stays in reserve.")
    V["thanks"] = ("LEASE EVERY BIKE, ELECTRIFY FIRST, WIN THE CONTRACT ON A WORKING EV FLEET, AND KEEP THE CRORE FOR WHAT A LEASE CANNOT BUY.")
    V["must"] = ["TEAM IDEAFORGE", "Harsh Kawatra", "Dayita Arora", "THANK YOU", "THEREFORE", "CONCLUSIVELY", "THE SITUATION",
                 "STRATEGIC ALTERNATIVES", "₹" + D["rr5"] + " Cr", "₹" + D["npv5"] + " Cr", "₹" + D["sw_lease"], "₹3,601"]
    for k in ("h1", "h2", "h3", "h4", "h5"): assert len(V[k]) <= 150, (k, len(V[k]))
    assert all(len(s) <= 230 for s in V["src"]), [len(s) for s in V["src"]]
    assert all(len(c[1]) <= 32 for c in CLIENTS) and len(PETROL) >= 4 and len(POLICY) == 4 and len(BIBLIO) <= 12
    assert all(len(x) <= 41 for x in BIBLIO) and len(PMLINE) <= 80
    return V
```

<!-- FILE: deck/slides/s01.js -->
```js
{ const s = await figma.getNodeByIdAsync("S1"); wipe(s); coverTop(s);
nm(TL(s,64,156,80,"THE ₹1 CRORE",{family:"Poppins",style:"ExtraBold",maxW:1100,min:60}),"TITLE");
nm(TL(s,64,276,80,"CROSSROADS",{family:"Poppins",style:"ExtraBold",color:C.primary,maxW:1100,min:60}),"TITLE 2");
nm(T(s,64,404,1100,26,"SwiftKart's next move: electrify, grow, or both, on ₹1 crore",{family:"Poppins",style:"Bold",color:C.primaryDeep}),"SUBTITLE");
const v=layered(s,64,460,1100,236,C.primaryDeep,"CARD: verdict");
T(v,28,18,1044,26,"OUR ANSWER: DO BOTH, LEASE EVERY BIKE, AND SPEND THE CRORE ON WHAT A LEASE CANNOT BUY.",{family:"Poppins",style:"Bold",color:C.accent});
T(v,28,112,1044,22,V.cover_line,{color:C.white});
nm(TL(s,64,716,28,V.team.name,{color:C.primary}),"TEAM LABEL");
teamBT(s,64,764,[300,560,240]);
T(s,64,944,1100,22,"Prepared for Dream Forge 3.0, Round 2 (IEEE DTU)",{family:"Inter",style:"Bold",color:C.primaryDeep});
const pm=panel(s,1200,160,656,836,"WHO SHAPES THE CROSSROADS",{fill:C.tint,layered:true});
T(pm,16,58,624,22,"A leased EV costs ₹"+V.lease+" a month all-in. A bought one costs ₹"+V.own_all+".",{family:"Inter",style:"Bold"});
const HUB=[328,404];
[[161,164],[495,164],[161,568],[495,568]].forEach(q=>addDiagonalWire(pm,HUB[0],HUB[1],q[0],q[1],C.ink,2.5));
dashedV(pm,328,490,194,C.primaryDeep,2.5); dashedH(pm,76,684,504,C.primaryDeep,2.5);
[76,202,328,454,580].forEach(cx=>dashedV(pm,cx,684,12,C.primaryDeep,2.5));
node2(pm,16,128,290,72,"THE CLIENTS","prefer EV partners");
node2(pm,350,128,290,72,"THE LESSORS","rent EVs, no capex");
node2(pm,16,532,290,72,"THE CHARGE","depots and swaps");
node2(pm,350,532,290,72,"THE RULES","Delhi goes electric",{fill:C.accentTint});
[["Flipkart",16],["Amazon",114],["Blinkit",212]].forEach(l=>logoSlot(pm,l[1],210,90,60,l[0]));
[["Zypp Electric",350],["Yulu",498]].forEach(l=>logoSlot(pm,l[1],210,142,60,l[0]));
[["Battery Smart",16],["Sun Mobility",114],["Tata Power",212]].forEach(l=>logoSlot(pm,l[1],614,90,60,l[0]));
[["Delhi Govt",350],["MHI",498]].forEach(l=>logoSlot(pm,l[1],614,142,60,l[0]));
addEllipse(pm,HUB[0]-86,HUB[1]-86,172,172,C.primaryDeep,C.ink,2.5);
addText(pm,"Poppins","Bold",22,C.white,"SWIFTKART",HUB[0]-80,HUB[1]-40,160,36,"CENTER","CENTER");
addText(pm,"Inter","Bold",22,C.accent,"100 bikes",HUB[0]-80,HUB[1]+4,160,30,"CENTER","CENTER");
[["Ather",76],["TVS Motor",202],["Bajaj Auto",328],["Hero Vida",454],["Kinetic Green",580]].forEach(c=>logoSlot(pm,c[1]-60,696,120,50,c[0]));
TL(pm,16,758,22,"Electric two-wheeler makers selling in India",{family:"Inter",style:"Bold",color:C.primary,maxW:624});
fine(pm,16,794,624,"Logos mark companies referenced in the analysis; no partnership is implied.");
addWireH(s,64,1856,1012,C.ink,2.5);
srcLine(s,V.src[0]);
results.push({slide:s.id,total:s.findAll(()=>true).length,top:s.children.length}); }
```

<!-- FILE: deck/slides/s02.js -->
```js
{ const s = await figma.getNodeByIdAsync("S2");
skelBT(s,0,"1 / 4","THE SITUATION",320,V.h1,V.src[1],{labels:RIBN});
rail(s,64,312,250,"TODAY",C.primaryDeep); rail(s,64,578,218,"PRESSURE",C.alert); rail(s,64,812,218,"THE CHALLENGE",C.primary);
// band 1: where SwiftKart stands
kpi(s,120,312,270,113,"100","petrol bikes today",{size:44,ny:2,ly:78});
kpi(s,404,312,270,113,"₹"+V.rev0+" Cr","revenue a year",{size:44,ny:2,ly:78});
kpi(s,120,441,270,113,"₹"+V.rr0+" L","contribution a year",{size:44,ny:2,ly:78,color:C.alert});
kpi(s,404,441,270,113,V.margin0,"contribution margin",{size:44,ny:2,ly:78,color:C.alert});
const p1=panel(s,696,312,524,250,"ONE BIKE-MONTH, ₹ THOUSAND");
waterfall(p1,16,52,492,192,V.wf.map(w=>[w[0],w[1]/1000]),{min:0,max:29,dp:1,labelH:40,labelDy:6,barW:72});
const p2=panel(s,1236,312,620,250,"PER BIKE-MONTH, ₹");
const UEL=["Petrol","EV bought, running","EV bought, all-in","EV leased","EV leased, 100% use"];
wrapTable(p2,16,56,[256,116,116,100],["Bike","Cost","Left","Margin"],V.ue.map((r,i)=>[UEL[i],r[2],r[3],r[4]]),{headerH:34,rowH:30,name:"unit",fills:[C.alertTint,C.white,C.surfaceAlt,C.tint,C.tint]});
// band 2: the pressure
const p3=panel(s,120,578,560,218,"DELHI PETROL, ₹ A LITRE");
const last=V.petrol[V.petrol.length-1];
lineChart(p3,16,52,528,160,[{values:V.petrol.map(d=>d[1]),color:C.alert,label:"₹"+last[1].toFixed(2)}],V.petrol.map(d=>d[0]),{yMin:85,yMax:110,yTicks:[90,100,110],padL:60,padR:110});
const p4=panel(s,696,578,524,218,"CLIENTS ARE GOING ELECTRIC");
V.clients.forEach((c,i)=>{ const y=60+i*50; logoSlot(p4,16,y,100,42,c[0]); T(p4,130,y+6,378,22,c[1],{family:"Inter",style:"Bold"}); });
const p5=panel(s,1236,578,620,218,"DELHI'S RULES SET THE CLOCK");
addWireH(p5,40,580,104,C.ink,3);
V.policy.forEach((q,i)=>{ const cx=90+i*147; addEllipse(p5,cx-10,94,20,20,i===2?C.alert:C.primary,C.ink,2);
  TL(p5,0,58,22,q[0],{centerAt:cx}); T(p5,cx-70,122,140,22,q[1],{align:"CENTER",family:"Inter",style:"Bold"}); });
fine(p5,16,190,588,V.pmline);
// band 3: the challenge
const p6=panel(s,120,812,856,218,"THE CONTRACT, READ CLOSELY");
badgeList(p6,16,60,824,["₹2.8 Cr is 75 × 30 × 26 × ₹40 × 12: full use. At 85% it is ₹"+V.c_rev85+" Cr",
  "One charge covers 30 deliveries, a full day at 100% use",
  "95% fulfilment needs spares; petrol fails the low-emission test",
  "Monthly emissions reports need data SwiftKart does not collect"],{bg:C.alert,d:32,pitch:38});
const c=layered(s,992,812,864,218,C.primaryDeep,"CARD: challenge");
TL(c,24,14,24,"THE CHALLENGE: DO BOTH ON ₹1 CRORE",{color:C.accent,maxW:816});
T(c,24,56,816,22,"Buying the 185 EVs both jobs need costs ₹"+V.capex3+" L after subsidy, twice the crore. Doing both needs a cheaper way to get vehicles than owning them, and a contract won on reliability and data.",{color:C.white});
[["FIX THE MARGIN",24],["WIN THE CONTRACT",304],["STAY LIQUID",584]].forEach(q=>addChip(c,q[1],158,264,44,q[0],C.primary,C.white,22));
results.push({slide:s.id,total:s.findAll(()=>true).length,top:s.children.length}); }
```

<!-- FILE: deck/slides/s03.js -->
```js
{ const s = await figma.getNodeByIdAsync("S3");
skelBT(s,1,"2 / 4","STRATEGIC ALTERNATIVES",420,V.h2,V.src[2],{labels:RIBN});
rail(s,64,312,340,"SIX OPTIONS",C.primaryDeep); rail(s,64,668,362,"TRADE-OFFS",C.primary);
const NAMES=["1 Stay petrol","2 Electrify, buy","3 Grow, buy","4 Both, buy","5 Grow, lease","6 Both, lease"];
const p1=panel(s,120,312,1100,340,"SIX WAYS TO DEPLOY THE CRORE");
wrapTable(p1,16,56,[250,130,110,100,110,130,96,96],["Option","Contract","Capex","Debt","NPV","Run-rate","gCO2","Score"],V.opts.map((r,i)=>[NAMES[i]].concat(r.slice(1))),{headerH:38,rowH:36,name:"options",fills:[C.white,C.surfaceAlt,C.white,C.alertTint,C.white,C.tint]});
fine(p1,16,316,1068,"₹ lakh for capex, debt and run-rate; NPV in ₹ crore over 48 months at 11%; gCO2 per delivery at month 24.");
const p2=panel(s,1236,312,620,340,"WEIGHTED SCORE, OUT OF 5");
hBars(p2,16,60,588,V.scores.map((v,i)=>({label:NAMES[i],value:v,text:v.toFixed(2),color:i===5?C.primary:(i===3?C.alert:C.surface)})),{labelW:220,rowH:30,barH:22,valueW:70,max:5});
callout(p2,16,248,588,80,"FORMULA: ","Score = 0.35 value + 0.20 liquidity + 0.20 resilience + 0.15 emissions + 0.10 growth");
// band 2: trade-offs
const p3=nm(panel(s,120,668,520,362,""),"PANEL: obvious");
const t3=TL(p3,16,10,24,"THE OBVIOUS ANSWER: BUY BOTH",{color:C.alert,maxW:488}); addRect(p3,16,50,488,2,C.ink); strike(p3,t3,C.alert);
badgeList(p3,16,62,488,["Needs ₹"+V.loan3+" L of debt on top of the crore","EMI on one financed EV is ₹"+V.emi+", above the ₹"+V.lease+" lease","Battery wear, resale and subsidy risk stay with SwiftKart"],{bg:C.alert,d:34,pitch:66});
callout(p3,16,262,488,92,"CONCLUSIVELY: ","lease both, and buy nothing unless a lease costs more than ₹"+V.sw_lease+" a month.",{fill:C.tint});
const p4=panel(s,656,668,470,362,"WHAT A BIKE-MONTH COSTS, ₹");
let lx=lg(p4,16,58,C.alert,"Petrol"); lx=lg(p4,lx,58,C.primaryDeep,"Capital"); lg(p4,lx,58,C.primary,"Running");
TL(p4,16,90,22,"Leasing wins below ₹"+V.sw_lease+" a month",{family:"Inter",style:"Bold",color:C.alert,maxW:438});
stackedCols(p4,16,116,438,238,["Petrol","Bought EV","Leased EV"],[{color:C.alert,values:[9000,0,0]},{color:C.primaryDeep,values:[0,V.own_cap+V.own_chg,0]},{color:C.primary,values:[0,V.own_run,3500]}],{max:10000,totals:["9,000",V.own_all,V.lease],barW:90});
const p5=panel(s,1142,668,714,362,"SEVEN SHOCKS FROM THE CASE, ₹ L OF NPV");
grid(p5,16,58,["Petrol +20%","EV prices −15%","Demand −10%","Electricity +25%","Downtime doubles","Subsidy withdrawn","EV-first clients"],["1","2","3","4","5","6"],V.heat.map(r=>r.map(v=>dvCell(v))),{labelW:250,cellW:72,rowH:36,headH:38,corner:"Shock",name:"TABLE: shocks"});
results.push({slide:s.id,total:s.findAll(()=>true).length,top:s.children.length}); }
```

<!-- FILE: deck/slides/s04.js -->
```js
{ const s = await figma.getNodeByIdAsync("S4");
skelBT(s,2,"3 / 4","THE ₹1 CRORE DECISION",480,V.h3,V.src[3],{labels:RIBN});
rail(s,64,312,310,"ALLOCATION",C.primaryDeep); rail(s,64,638,392,"RETURNS",C.primary);
// band 1: allocation and cash
const p1=panel(s,120,312,820,310,"WHERE THE ₹1 CRORE GOES");
const UC=[C.primaryDeep,C.primary,HG[3],C.accent,C.blue,C.surface];
donut(p1,136,184,224,V.uses_v.map((v,i)=>({v,c:UC[i]})),0.55);
TL(p1,0,166,30,"₹1 Cr",{family:"Poppins",style:"ExtraBold",centerAt:136});
V.uses_rows.forEach((r,i)=>addRect(p1,254,56+34+i*34+8,10,18,UC[i],C.ink,1.5));
wrapTable(p1,272,56,[214,86,76,140],["Use","₹ L","%","When"],V.uses_rows,{headerH:34,rowH:34,name:"uses"});
const p2=panel(s,956,312,900,310,"CASH IN THE BANK, ₹ LAKH");
const idx=[0,3,6,9,12,15,18,21,24], pick=a=>idx.map(m=>m===0?100:a[m-1]);
const ch=lineChart(p2,16,56,868,244,[{values:pick(V.cash5),color:C.primary,label:"Lease both ₹"+V.cash5_24+" Cr"},
  {values:pick(V.cash3),color:C.alert,label:"Buy both ₹"+V.cash3_24+" Cr",labelDy:-14},
  {values:pick(V.cash0),color:C.blueDeep,label:"Stay petrol ₹"+V.cash0_24+" Cr",labelDy:14}],
  idx.map(m=>"M"+m),{yMin:0,yMax:400,yTicks:[100,200,300,400],padL:70,padR:250});
TL(p2,0,ch.Y(V.cash3[2])-38,22,"needs a ₹"+V.loan3+" L loan",{family:"Inter",style:"Bold",color:C.alert,centerAt:ch.X(1)+40});
// band 2: returns
const m=layered(s,120,638,600,392,C.primaryDeep,"CARD: MONEYSHOT");
TL(m,24,10,22,"CONTRIBUTION A YEAR",{color:C.accent,maxW:552});
const a1=TL(m,24,64,48,"₹"+V.rr0r+" L",{family:"Poppins",style:"ExtraBold",color:C.white});
arrow(m,24+a1.width+14,100,24+a1.width+70,100,C.accent,5);
TL(m,24+a1.width+84,50,64,"₹"+V.rr5+" Cr",{family:"Poppins",style:"ExtraBold",color:C.accent,maxW:552-a1.width-84,min:44});
T(m,24,154,552,22,V.mult+" the contribution of today, with ₹0 of debt and cash never below ₹"+V.min5+" Cr.",{family:"Inter",style:"Bold",color:C.white});
addDashedRow(m,24,222,552,C.accent,14,9,2);
[["+₹"+V.dnpv5+" Cr","NPV over petrol, 48 months"],["₹"+V.gap53+" Cr","more than buying both"],["−"+V.gcut,"CO2 per delivery"]].forEach((k,i)=>{ const x=24+i*188;
  TL(m,x,240,30,k[0],{family:"Poppins",style:"ExtraBold",color:C.accent,maxW:176,min:24});
  T(m,x,290,176,22,k[1],{family:"Inter",style:"Bold",color:C.white}); });
const p4=panel(s,736,638,708,392,"HOW ₹"+V.rr0r+" L BECOMES ₹"+V.rr5+" CR A YEAR, ₹ L");
waterfall(p4,16,56,676,326,V.bridge6,{min:0,max:240,dp:1,labelH:70,labelDy:8});
const p5=panel(s,1460,638,396,392,"WHAT HAS TO BE TRUE");
wrapTable(p5,16,56,[244,120],["Assumption","Base"],V.assume,{headerH:34,rowH:36,name:"assume"});
results.push({slide:s.id,total:s.findAll(()=>true).length,top:s.children.length}); }
```

<!-- FILE: deck/slides/s05.js -->
```js
{ const s = await figma.getNodeByIdAsync("S5");
skelBT(s,3,"4 / 4","RECOMMENDATION AND ROADMAP",560,V.h4,V.src[4],{labels:RIBN});
rail(s,64,312,224,"THE ANSWER",C.primaryDeep); rail(s,64,552,254,"ROADMAP",C.primary); rail(s,64,822,208,"RISK AND KPIs",C.alert);
// band 1: the answer
const c=layered(s,120,312,1000,224,C.primaryDeep,"CARD: answer");
T(c,24,14,952,24,"OUR RECOMMENDATION: LEASE BOTH FLEETS, ELECTRIFY FIRST, AND KEEP THE CRORE LIQUID",{family:"Poppins",style:"Bold",color:C.accent});
bl(c,24,96,952,[["Value: ","₹"+V.npv5+" Cr over 48 months, the highest of the six options"],["Liquidity: ","no debt; cash never falls below ₹"+V.min5+" Cr"],["Resilience: ","fuel, subsidy and resale shocks barely move it"]],{color:C.white,leadColor:C.accent,dot:C.accent,gap:8});
const p2=panel(s,1136,312,720,224,"FLEET AT QUARTER END");
let lx=lg(p2,16,56,C.alert,"Petrol"); lx=lg(p2,lx,56,C.primary,"EV, existing"); lg(p2,lx,56,C.primaryDeep,"EV, contract");
stackedCols(p2,16,84,688,136,V.fleet.map(q=>q[0]),[{color:C.alert,values:V.fleet.map(q=>q[1])},{color:C.primary,values:V.fleet.map(q=>q[2])},{color:C.primaryDeep,values:V.fleet.map(q=>q[3])}],{max:175,barW:52,totals:V.fleet.map(q=>String(q[1]+q[2]+q[3]))});
// band 2: roadmap and gates
const p3=panel(s,120,552,1180,254,"24 MONTHS, FOUR GATES");
gantt(p3,16,56,250,112,26,["Q1","Q2","Q3","Q4","Q5","Q6","Q7","Q8"],[
  {label:"Leases, charging",s:0,e:0,color:C.primaryDeep},{label:"Electrify 100 bikes",s:0,e:3,color:C.primary},
  {label:"Contract fleet",s:1,e:2,color:C.primaryDeep},{label:"Volume ramp",s:1,e:3,color:C.accent},
  {label:"Emissions reports",s:1,e:7,color:C.blueDeep},{label:"Renew or buy",s:6,e:7,color:C.alert}]);
[[378,109,"G1",1],[602,161,"G2",1],[714,135,"G3",1],[1162,239,"G4",-1]].forEach(g=>{ diamond(p3,g[0],g[1]-11,11,C.accent);
  TL(p3,g[3]>0?g[0]+16:g[0]-48,g[1]-17,22,g[2],{family:"Poppins",style:"Bold"}); });
const p4=panel(s,1316,552,540,254,"GO ONLY IF");
wrapTable(p4,16,56,[76,84,348],["Gate","When","Test"],[["G1","M3","Contract signed; EVs 95% up"],["G2","M8","75 EVs live; 95% fulfilled"],["G3","M12","Petrol gone; reports on time"],["G4","M24","Renew if lease under ₹"+V.sw_lease]],{headerH:34,rowH:40,name:"gates"});
// band 3: risks and KPIs
const p5=panel(s,120,822,860,208,"RISKS: PROBABILITY BY IMPACT");
const RL=[C.white,HR[1],HR[2],HR[3],HR[4]], RC=[["","5",""],["","2, 3","1"],["","4",""]];
grid(p5,16,56,["High","Med","Low"],["Low","Med","High"],RC.map((r,i)=>r.map((t,j)=>({t,f:RL[(2-i)+j],tc:(2-i)+j===4?C.white:C.ink}))),{labelW:70,cellW:70,rowH:34,headH:34,corner:"",name:"TABLE: risk"});
badgeList(p5,312,56,532,["No award: lease the 100 anyway, +₹"+V.dnpv6+" Cr","Lessor slips: split orders across two lessors","Downtime: 10 spares and a depot hub","Lease above ₹"+V.sw_lease+" at renewal: buy then","Client pays late: ₹"+V.reserve+" L reserve"],{bg:C.alert,d:26,pitch:30});
const p6=panel(s,996,822,860,208,"WHAT WE REPORT EVERY MONTH");
wrapTable(p6,16,52,[348,148,160,176],["KPI","Today","Month 12","Month 24"],V.kpi,{headerH:34,rowH:30,name:"kpi"});
results.push({slide:s.id,total:s.findAll(()=>true).length,top:s.children.length}); }
```

<!-- FILE: deck/slides/s06.js -->
```js
{ const s = await figma.getNodeByIdAsync("S6");
skelBT(s,-1,"A / 1","ANNEXURE",300,V.h5,V.src[5],{labels:RIBAP});
const a1=panel(s,64,312,884,350,"A1 CALCULATIONS, ₹ LAKH");
wrapTable(a1,16,56,[90,150,160,150],["Qtr","Revenue","Contrib.","Cash"],V.qtr,{headerH:32,rowH:32,name:"quarters"});
callout(a1,582,56,286,144,"Bought EV: ","₹"+V.own_c+" capital + ₹"+V.own_h+" hub − ₹"+V.own_r+" resale + ₹3,000 running = ₹"+V.own_all+" a month");
callout(a1,582,204,286,144,"EMI: ","₹1,10,000 at 11% over 36 months is ₹"+V.emi+" a month, above the ₹"+V.lease+" lease");
const a2=panel(s,972,312,884,350,"A2 ASSUMPTIONS, BEAR TO BULL");
wrapTable(a2,16,56,[70,380,124,124,124],["ID","Assumption","Bear","Base","Bull"],V.assum,{headerH:32,rowH:30,name:"assumptions",colors:[C.ink,C.ink,C.alert,C.primaryDeep,C.good]});
fine(a2,16,330,852,"Bear is the value least favourable to the recommendation. Case facts are never varied.");
const a3=panel(s,64,678,884,352,"A3 SENSITIVITY AND SCENARIOS");
TL(a3,16,56,22,"NPV over 48 months, ₹ Cr, base "+V.tor_base.toFixed(2),{family:"Inter",style:"Bold",maxW:440});
const TX=tornado(a3,16,92,440,V.tor.map(r=>({label:r[0],lo:r[1],hi:r[2]})),V.tor_base,{labelW:230,rowH:30,min:3.8,max:7.8});
TL(a3,0,306,22,V.tor[0][1].toFixed(2),{family:"Inter",style:"Bold",centerAt:TX(V.tor[0][1])});
TL(a3,0,306,22,V.tor_base.toFixed(2),{family:"Inter",style:"Bold",color:C.primaryDeep,centerAt:TX(V.tor_base)});
TL(a3,0,306,22,V.tor[0][2].toFixed(2),{family:"Inter",style:"Bold",rightAt:456});
wrapTable(a3,472,56,[180,72,72,72],["Recommended","Bear","Base","Bull"],V.scen,{headerH:32,rowH:34,name:"scenarios"});
T(a3,472,266,396,22,"Switch points: lease ₹"+V.sw_lease+" a month; subsidy ₹"+V.sw_sub+" a bike; contract volume "+V.sw_cvol+".",{family:"Inter",style:"Bold",color:C.primaryDeep});
const a4=panel(s,972,678,884,352,"A4 EMISSIONS AND SOURCES");
wrapTable(a4,16,56,[230,90,140],["Measure","Today","Month 24"],[["t CO2 a year",String(V.em.today_t),String(V.em.m24_t)],["g CO2 per delivery",String(V.em.today_g),String(V.em.m24_g)],["Deliveries a month",V.dels0,V.dels24]],{headerH:32,rowH:32,name:"emissions"});
callout(a4,16,194,460,140,"Method: ","a petrol bike emits "+V.em.petrol_kg+" kg CO2 a month (litres × 2.31 kg); an EV "+V.em.ev_kg+" kg (kWh × 0.727 kg, CEA grid factor).");
TL(a4,492,56,22,"Sources",{color:C.primary});
V.biblio.forEach((b,i)=>{ const t=addText(a4,"Inter","Semi Bold",16,C.ink,(i+1)+". "+b,492,90+i*21,376,20,"LEFT","CENTER",false); t.name="BIBLIO"; });
results.push({slide:s.id,total:s.findAll(()=>true).length,top:s.children.length}); }
```

<!-- FILE: deck/slides/s07.js -->
```js
{ const s = await figma.getNodeByIdAsync("S7"); wipe(s); coverTop(s);
nm(TL(s,0,176,104,"THANK YOU",{family:"Poppins",style:"ExtraBold",centerAt:960}),"TITLE");
const v=layered(s,260,370,1400,150,C.primaryDeep,"CARD: therefore");
addText(v,"Poppins","Bold",26,C.accent,"THEREFORE: "+V.thanks,28,0,1344,150,"CENTER","CENTER");
nm(TL(s,0,556,28,V.team.name,{color:C.primary,centerAt:960}),"TEAM LABEL");
teamBT(s,410,604,[300,560,240]);
[["link: research document (PDF)",410],["link: financial model",790],["link: Figma deck",1170]].forEach(l=>imgSlot(s,l[1],800,340,80,l[0]));
addText(s,"Inter","Bold",22,C.primaryDeep,"Every number on these slides comes from the research document and its model, hash "+V.hash+".",260,910,1400,30,"CENTER","CENTER");
addWireH(s,64,1856,1012,C.ink,2.5);
srcLine(s,V.src[6]);
results.push({slide:s.id,total:s.findAll(()=>true).length,top:s.children.length}); }
```

## Q.3 Research assembler and PDF

<!-- FILE: research/assemble.py -->
```python
# ===== SWIFTKART ASSEMBLE v1 =====
"""Assemble swiftkart-research.md from the seven writer parts and the generated appendices, run the acceptance
checks, then render HTML and PDF with the IIM Lucknow template.
  PY dreamforge-case/research/assemble.py md     assemble and check (prints ASSEMBLY PASS or FAIL)
  PY dreamforge-case/research/assemble.py pdf    write build_pdf.py from the template and render the PDF"""
import re, sys, json, io, csv, pathlib, subprocess

R = pathlib.Path(__file__).resolve().parent
BT = R.parent
ROOT = BT.parent

HEADER = """# SwiftKart: The ₹1 Crore Crossroads

**How SwiftKart should deploy ₹1 crore over 24 months: lease every bike, electrify the fleet first, win the 75-vehicle contract on a working EV operation, and keep the crore for what a lease cannot buy**

Team: Harsh Kawatra (Delhi Technological University, Team Leader) and Dayita Arora (Ramjas College, University of Delhi), Team IdeaForge

Prepared for: Dream Forge 3.0, Round 2 (IEEE DTU): The ₹1 Crore Crossroads, SwiftKart's Next Move

---

"""

BAN = ["here's", "let's", "bottom line", "delve", "game-changer", "game changer", "unlock", "it's not just",
       "make no mistake", "landscape", "robust", "seamless", "holistic", "tapestry", "paradigm", "navigate the",
       "revolutionis", "revolutioniz", "cutting-edge", "leverage", "empower", "transformative", "journey", "synergy",
       "world-class", "best-in-class", "next-gen", "reimagine", "supercharge", "harness", "crucial", "pivotal",
       "furthermore", "moreover", "in today's", "ever-evolving", "imagine", "what if", "picture this", "dive into",
       "testament", "realm", "fast-paced", "groundbreaking", "state-of-the-art", "plethora", "myriad", "underscore",
       "showcase", "foster", "bolster", "spearhead", "nuanced", "intricate", "meticulous", "elevate", "in conclusion",
       "it is important to note", "ecosystem"]
PRIMARY = re.compile(r"gov\.in|nic\.in|ppac|iocl|indianoil|cea\.nic|heavyindustries|pib\.gov|delhi\.gov|transport\.delhi|ev\.delhi|"
                     r"sebi\.gov|mca\.gov|rbi\.org|nseindia|bseindia|ipcc|ghgprotocol|iso\.org|smartfreightcentre|niti\.gov|morth|"
                     r"parivahan|vahan|siam|derc|bis\.gov|araiindia|caqm|labour\.gov|mospi|india-ghg|wri\.org|theicct|iea\.org", re.I)
MIN_WORDS, MIN_TABLES, MIN_ANSWERS, MIN_PRIMARY = 80000, 180, 29, 0.40


def rd(p):
    return io.open(p, encoding="utf-8").read().replace("\r", "")


def demote(t):
    return re.sub(r"^# .*\n", "", t, count=1).strip()


def csv_to_table(path, cols=None):
    with io.open(path, encoding="utf-8-sig", newline="") as f:
        rows = list(csv.DictReader(f))
    if not rows:
        return "_No rows._"
    cols = cols or list(rows[0].keys())
    out = ["| " + " | ".join(cols) + " |", "|" + "|".join(["---"] * len(cols)) + "|"]
    for r in rows:
        out.append("| " + " | ".join(((r.get(c) or "").strip().replace("\n", " ").replace("|", "/")[:140] or "not found") for c in cols) + " |")
    return "\n".join(out)


def md():
    parts = [rd(R / "parts" / ("part-%s.md" % x)).strip() for x in "ABCDEFG"]
    body = "\n\n".join(parts)
    reg = {}
    for ln in rd(R / "raw" / "sources.md").splitlines():
        m = re.match(r"^\| (S\d{3}) \|(.+?)\|(.+?)\|(.+?)\|(.+?)\|$", ln)
        if m:
            reg[m.group(1)] = (m.group(2).strip(), m.group(3).strip())
    rid_to_sids = {}
    for lf in sorted((R / "raw").glob("R-*.md")):
        for ln in rd(lf).splitlines():
            m = re.match(r"^\|\s*(R[A-H]\d{2,3})\s*\|.*?\|\s*([^|]+?)\s*\|", ln)
            if m:
                sids = re.findall(r"S\d{3}", m.group(2))
                if sids:
                    rid_to_sids.setdefault(m.group(1), set()).update(sids)
    direct_s = {"S" + n for grp in re.findall(r"\[([^\]]*S\d{3}[^\]]*)\]", body) for n in re.findall(r"S(\d{3})", grp)}
    cited_rids = sorted(set(re.findall(r"\b(R[A-H]\d{2,3})\b", body)) & set(rid_to_sids))
    resolved = set(direct_s)
    for rid in cited_rids:
        resolved |= rid_to_sids[rid]
    cited = sorted(resolved, key=lambda s: int(s[1:]))
    missing = [c for c in cited if c not in reg]
    via = {}
    for rid in cited_rids:
        for sid in rid_to_sids[rid]:
            via.setdefault(sid, []).append(rid)
    rows = ["| S-ID | Source | Available at | Cited via |", "|---|---|---|---|"]
    for s in cited:
        if s in reg:
            v = ", ".join(sorted(via.get(s, []))[:4]) or "direct citation"
            if len(via.get(s, [])) > 4:
                v += ", +%d more" % (len(via[s]) - 4)
            rows.append("| %s | %s | %s | %s |" % (s, reg[s][0], reg[s][1], v))
    primary = [s for s in cited if s in reg and PRIMARY.search(reg[s][1] + " " + reg[s][0])]
    app_a = ("Every source cited in the text, resolved from direct `[S###]` tags and from raw-fact tags (`[RA12]` and so on) "
             "through each lane file. %d sources are listed here; the full register of %d sources is `research/raw/sources.md`.\n\n"
             % (len(rows) - 2, len(reg)) + "\n".join(rows))
    app_b = demote(rd(BT / "model" / "model_tables.md"))
    app_c = "\n\n".join("### C.%d `%s`\n\n" % (i + 1, p.name) + csv_to_table(p) for i, p in enumerate(sorted((R / "data").glob("*.csv"))))
    brief = rd(BT / "case" / "01-case-brief.md")
    brief = re.sub(r"^# .*\n", "", brief, count=1).replace(" " + chr(0x2013) + " ", ", ").replace(chr(0x2013), ", ").replace(chr(0x2014), "n/a")
    app_d = ("The case brief as issued, with the sentence IDs used throughout this document. Dashes in the original are shown "
             "as commas, and blank cells as n/a.\n\n" + brief.strip())
    app_e = re.sub(r"^## Appendix E\.? Glossary\s*\n", "", rd(R / "parts" / "appendix-E-glossary.md").strip(), count=1)
    app_f = rd(R / "raw" / "conflicts.md").strip()
    app_f = re.sub(r"^# .*\n", "", app_f, count=1)
    titles = ["Appendix A: Bibliography", "Appendix B: Model tables", "Appendix C: Research datasets",
              "Appendix D: The case brief with sentence IDs", "Appendix E: Glossary", "Appendix F: Data conflicts and rulings"]
    toc = "## Contents\n\n" + "\n".join("- %s" % t for t in re.findall(r"^## (.+)$", body, re.M) + titles) + "\n\n"
    body = body.replace("## 0. Document control", toc + "## 0. Document control", 1)
    doc = (HEADER + body
           + "\n\n## " + titles[0] + "\n\n" + app_a + "\n\n## " + titles[1] + "\n\n" + app_b
           + "\n\n## " + titles[2] + "\n\n" + app_c + "\n\n## " + titles[3] + "\n\n" + app_d
           + "\n\n## " + titles[4] + "\n\n" + app_e + "\n\n## " + titles[5] + "\n\n" + app_f + "\n")
    io.open(R / "swiftkart-research.md", "w", encoding="utf-8", newline="\n").write(doc)
    prose = body + "\n" + app_e + "\n" + app_f
    heads = re.findall(r"^#{2,3} (.+)$", doc, re.M)
    res = dict(words=len(doc.split()), tables=len(re.findall(r"^\|[ :|-]+\|\s*$", doc, re.M)),
               dashes=len(re.findall("[" + chr(0x2014) + chr(0x2013) + "]", doc)), exclamations=prose.count("!"),
               question_headings=[h for h in heads if h.strip().endswith("?")],
               banned={b: len(re.findall(r"\b" + re.escape(b), prose, re.I)) for b in BAN if re.search(r"\b" + re.escape(b), prose, re.I)},
               answers=len(re.findall(r"^\*\*Answer\.\*\*", doc, re.M)), cited_S=len(cited), register=len(reg), missing_S=missing,
               primary_share=round(len(primary) / max(1, len(cited)), 3),
               placeholders=len(re.findall(r"<[a-z][^>]{0,20}>", body)), dup_headings=sorted({h for h in heads if heads.count(h) > 1})[:10],
               rs_text=len(re.findall(r"\bRs\.? ?\d", body)))
    print(json.dumps(res, indent=1, ensure_ascii=False))
    ok = (res["words"] >= MIN_WORDS and res["tables"] >= MIN_TABLES and res["dashes"] == 0 and res["exclamations"] == 0
          and not res["question_headings"] and not res["banned"] and res["answers"] >= MIN_ANSWERS and not res["missing_S"]
          and not res["dup_headings"] and res["placeholders"] == 0 and res["primary_share"] >= MIN_PRIMARY and res["rs_text"] == 0)
    print("ASSEMBLY PASS" if ok else "ASSEMBLY FAIL")
    sys.exit(0 if ok else 1)


def pdf():
    src = rd(ROOT / "iim-lucknow-pivot" / "research" / "build_pdf.py")

    def rep(a, b, n):
        nonlocal src
        assert src.count(a) == n, (a[:60], src.count(a))
        src = src.replace(a, b)

    rep("dream11-pivot-research", "swiftkart-research", 4)
    rep("Dream11: Life After the Ban  |  Team IdeaForge", "SwiftKart: The ₹1 Crore Crossroads  |  Team IdeaForge", 1)
    rep("else 'Dream11: Life After the Ban'}", "else 'SwiftKart: The ₹1 Crore Crossroads'}", 1)
    rep("IIM Lucknow  |  PIVOT '26  |  Round 1 research deliverable", "IEEE DTU  |  Dream Forge 3.0  |  Round 2 research deliverable", 1)
    rep("--p:#C4161C; --pd:#5E0A0E; --a:#F5C518; --tint:#FDE0E0;", "--p:#0F766E; --pd:#0B3B3A; --a:#F5C518; --tint:#CCFBF1;", 1)
    rep("color: #C4161C; }", "color: #0F766E; }", 1)
    rep('<b>Team IdeaForge</b><br>Harsh Kawatra, Delhi Technological University<br>Gursimran Kaur, Guru Gobind Singh Indraprastha University<br>Dayita Arora, Ramjas College, University of Delhi',
        '<b>Team IdeaForge</b><br>Harsh Kawatra, Delhi Technological University (Team Leader)<br>Dayita Arora, Ramjas College, University of Delhi', 1)
    old_tag = [l for l in src.split("\n") if l.startswith("TAG = re.compile(")]
    assert len(old_tag) == 1, old_tag
    src = src.replace(old_tag[0], 'TAG = re.compile(r"\\[((?:C [A-Z]\\d{2}(?:, ?C [A-Z]\\d{2})*)|M|T\\d+(?:, ?T\\d+)*|A\\d{2}(?:, ?A\\d{2})*|R[A-H]\\d{2,3}(?:, ?R[A-H]\\d{2,3})*|S\\d{3}(?:, ?S\\d{3})*)\\]")')
    io.open(R / "build_pdf.py", "w", encoding="utf-8", newline="\n").write(src)
    r = subprocess.run([sys.executable, "-X", "utf8", str(R / "build_pdf.py")], capture_output=True, text=True, encoding="utf-8")
    print(r.stdout[-600:], r.stderr[-600:])
    p = R / "swiftkart-research.pdf"
    print("PDF", p.exists() and p.stat().st_size)


if __name__ == "__main__":
    {"md": md, "pdf": pdf}[sys.argv[1]]()
```

## Q.4 The case brief, verbatim, with sentence IDs

<!-- FILE: case/01-case-brief.md -->
```markdown
# Dream Forge 3.0, Round 2: case brief with sentence IDs

Source file: `dreamforge-case/Dream_Forge_3_0_Case_Problem_Statement.pdf` (3 pages). Text is verbatim. IDs are ours.
Prefixes: H header, B background, O opportunity, D data provided, X additional information, U market uncertainty,
T your task, S submission requirements, N annexure, I important instructions.

## Header
- H01: DREAM FORGE 3.0
- H02: Round 2 – Case Problem Statement
- H03: THE Rs. 1 CRORE CROSSROADS: SWIFTKART'S NEXT MOVE

## Background
- B01: SwiftKart is a Delhi-NCR based last-mile delivery company serving e-commerce and quick-commerce players across the region.
- B02: The company currently operates a fleet of 100 petrol two-wheelers.
- B03: While SwiftKart has experienced steady growth, increasing fuel and maintenance costs have begun putting pressure on its margins.
- B04: At the same time, SwiftKart's major clients are becoming increasingly conscious of their environmental footprint and are showing a preference for logistics partners capable of providing low-emission delivery solutions.
- B05: SwiftKart is therefore evaluating the transition from petrol vehicles to electric vehicles (EVs).
- B06: However, electrification is not the company's only strategic priority.
- B07: The company has Rs. 1 crore available for deployment over the next 24 months and has also received an opportunity to expand its operations through a potential contract with a large e-commerce player.
- B08: The management must decide how this limited capital should be deployed to create the greatest value for the company.

## The Opportunity
- O01: A large e-commerce player is considering SwiftKart as a logistics partner for an expanded delivery network.
- O02: If SwiftKart secures the contract, it would need to add approximately 75 vehicles within the next 12 months while maintaining high service reliability.
- O03: The proposed contract requires: Minimum 95% delivery fulfilment
- O04: A significant proportion of deliveries to be made using low-emission vehicles
- O05: Monthly reporting of emissions-related metrics
- O06: Ability to scale operations within 12 months
- O07: At full capacity, the contract is expected to generate approximately Rs. 2.8 crore in annual revenue.
- O08: However, SwiftKart would need to make the necessary investments before reaching full utilization.
- O09: This creates a strategic dilemma for the management: Should SwiftKart prioritize electrifying its existing fleet, pursue the new growth opportunity, or adopt a combination of both?

## Data Provided: Current Operations
| ID | Particular | Value |
|---|---|---|
| D01 | Current fleet | 100 petrol two-wheelers |
| D02 | Revenue per delivery | Rs. 40 |
| D03 | Deliveries per bike per day | 30 |
| D04 | Working days per month | 26 |
| D05 | Rider pay per bike per month | Rs. 14,000 |
| D06 | Petrol running cost per bike per month | Rs. 9,000 |
| D07 | EV running cost per bike per month | Rs. 3,000 |
| D08 | Current average fleet utilization | 85% |
| D09 | Available capital | Rs. 1 crore |

## Data Provided: Fleet Alternatives
| ID | Particular | Petrol Bike | EV – Purchase | EV – Lease |
|---|---|---|---|---|
| D10 | Acquisition cost | — | Rs. 1,20,000 | — |
| D11 | Monthly running cost | Rs. 9,000 | Rs. 3,000 | Included in lease |
| D12 | Monthly lease cost | — | — | Rs. 3,500 |
| D13 | Expected useful life | — | 4 years | 3 years |
| D14 | Expected resale value | Rs. 30,000 | Rs. 25,000 | — |

## Additional Information
- X01: Charging infrastructure for a 100-EV fleet requires a one-time investment of Rs. 10 lakh.
- X02: A fully charged EV can support approximately 30 deliveries per working day under normal operating conditions.
- X03: Charging-related downtime may affect vehicle availability.
- X04: Battery performance is expected to deteriorate gradually over the useful life of the vehicle.
- X05: Existing petrol vehicles can be sold for approximately Rs. 30,000 per vehicle.
- X06: A government subsidy of Rs. 10,000 per purchased EV may be available.
- X07: SwiftKart can finance its investments through a combination of internal capital, bank debt and leasing.
- X08: The indicative bank loan interest rate is 11% per annum, with a 3-year tenure.

## Market Uncertainty
- U00: The management expects the operating environment to remain uncertain over the next two years. Some possible developments include:
- U01: Petrol prices increasing significantly
- U02: EV acquisition costs declining as adoption increases
- U03: Changes in delivery demand
- U04: Higher electricity costs
- U05: Charging-related downtime
- U06: Changes in government incentives
- U07: Faster-than-expected growth in demand for sustainable logistics
- U08: Teams are encouraged to investigate relevant market trends and external data while developing their recommendation.

## Your Task
- T01: You are acting as strategy and finance consultants to SwiftKart's management.
- T02: The management wants you to determine how SwiftKart should deploy its Rs. 1 crore over the next 24 months.
- T03: Your recommendation should consider the company's financial position, growth opportunity, fleet strategy, operational requirements and long-term competitive position.
- T04: Teams may consider buying EVs, leasing EVs, retaining petrol vehicles, phased electrification, expansion, or a combination of strategies.
- T05: There is no predetermined correct answer.
- T06: The strength of the recommendation will depend on the quality of the analysis, assumptions, financial reasoning and strategic rationale supporting it.

## Submission Requirements
- S01: Teams must submit a maximum 4-slide presentation, excluding the Title Slide and Annexure.
- S02: Slide 1 – The Situation: Present your understanding of SwiftKart's current position and identify the key business challenge. Highlight the most important insights from the information provided.
- S03: Slide 2 – Strategic Alternatives: Evaluate the strategic options available to SwiftKart. Teams should compare the alternatives on relevant financial and business parameters and identify the key trade-offs involved.
- S04: Slide 3 – The Rs. 1 Crore Decision: Present how you would deploy SwiftKart's Rs. 1 crore over the next 24 months. Support your proposed allocation with relevant financial analysis and assumptions.
- S05: Slide 4 – Recommendation & Roadmap: Present your final recommendation and a 24-month implementation roadmap. Your recommendation should address the key risks, uncertainties and expected business impact.

## Annexure
- N01: Teams may include additional slides containing: Detailed calculations; Financial models; Assumptions; Sensitivity analysis; Supporting research; Sources
- N02: Annexure slides will not count towards the 4-slide limit.

## Important Instructions
- I01: Teams will have 24 hours to analyse the case and prepare their solution.
- I02: Teams may use the internet and publicly available resources for research.
- I03: All external data and sources used must be appropriately cited.
- I04: Teams may make reasonable assumptions wherever necessary. All major assumptions must be clearly stated.
- I05: Teams are free to introduce additional strategic alternatives if they believe they create greater value for SwiftKart.
- I06: Recommendations should be financially viable, practically implementable and supported by appropriate analysis.
- I07: There is no single predetermined correct answer.
- I08: Teams will be evaluated on understanding, creativity, financial rigour, feasibility, sustainability and impact.
```

## Q.5 Bootstrap extractor

<!-- FILE: extract.py -->
```python
"""Extract every embedded file from dreamforge-case/PLAN.md into dreamforge-case/. Run from the repo root:
  PY dreamforge-case/extract.py
Never retype a block by hand; fix an extracted file, not the plan."""
import re, io, pathlib
D = pathlib.Path(__file__).resolve().parent
t = io.open(D / "PLAN.md", encoding="utf-8").read().replace("\r", "")
B = re.findall(r"<!-- FILE: ([^\n]+?) -->\n```[a-z]*\n(.*?)\n```\n", t, re.S)
n = 0
for rel, body in B:
    p = D / rel
    p.parent.mkdir(parents=True, exist_ok=True)
    io.open(p, "w", encoding="utf-8", newline="\n").write(body + "\n")
    n += 1
    print("wrote", rel, len(body))
print("files", n)
```
