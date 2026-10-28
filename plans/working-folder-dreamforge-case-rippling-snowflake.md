# SwiftKart, Round 2 redesign (R2): consulting-grade slides 2 to 5, a finished and extended research document, and a winning deck

> **Who executes this.** A Sonnet-class orchestrator (the main agent) plus Sonnet sub-agents dispatched with the Agent tool
> (`subagent_type: "general-purpose"`, `model: "sonnet"`). Every design decision is already made in this plan: the slide
> layouts down to the pixel, every string and number on every new panel, the helper library, the tooling patch, the
> research sections, the fix list, every prompt and every gate. **Your job is execution, not design.** When this plan
> conflicts with your instinct, follow the plan. When something is genuinely missing, apply §0.7. Never stop to redesign.
>
> **Verified at planning time (16 Oct 2026), in memory, with nothing written to disk** (harness in Q.0):
> 1. `patch_r2.py` applies cleanly to the current `DF\deck\gen.py`, `DF\deck\_sweeps.js` and `DF\research\assemble.py`
>    (ten `patched` lines, then `patch_r2 done`).
> 2. `gen.py pre` builds `values.js` with every Q.3 key; the four headlines are 138, 128, 121 and 133 characters; the four
>    source lines 169, 178, 139 and 150 characters; the payback assert (`pay == 13`) holds.
> 3. `gen.py mock 2 3 4 5` on the PATCHED mock (which now catches single words wider than their box): `s02 OK`, `s03 OK`,
>    `s04 OK`, `s05 OK`, `warnings: []`, `ISSUES 0` on all four. Node counts 279, 466, 410, 251. Figma script parts
>    (characters): S2 43,100 and 40,843; S3 44,780 and 40,931; S4 44,562 and 40,686; S5 41,591 and 42,297 (limit 50,000).
>
> If a first run does not reproduce these, a block was retyped or a deck file changed since 16 Oct 2026: stop and use §7.

**Contents.** §0 Context, decisions, rules, contract · §1 Why the slides change, and the framework map · §2 Locked numbers
and research facts · §3 Sequence and gates · §4 Phase R: research (finish, extend, fix, assemble, critique, PDF) ·
§5 Phase D: deck (tooling, values, four slides, build, verification, critique, derivation) · §6 Verification · §7 Risks and
recovery · §8 Open items · §9 Hand-off and memory · Part VI embedded files (Q.0 harness, Q.1 tooling patch, Q.2 helpers,
Q.3 values, Q.4 to Q.7 slide scripts, Q.8 extractor).

---

## §0 CONTEXT AND HOW TO USE THIS PLAN

### §0.1 Where the project stands (16 Oct 2026)

Team IdeaForge (Harsh Kawatra, DTU, Team Leader; Dayita Arora, Ramjas College, University of Delhi, Member) is entering
Dream Forge 3.0, Round 2 (IEEE DTU). The case: SwiftKart, a fictional Delhi-NCR last-mile operator with 100 petrol
two-wheelers and ₹1 crore to deploy over 24 months, deciding between electrifying, a 75-vehicle growth contract, or both.
Working folder `ROOT\dreamforge-case\` (`DF` below), `ROOT` = `C:\Users\harsh\Desktop\HARSH\PPTS-CASE-STUDY\nsut-innovators-court`.

The first build (plan now kept at `DF\PLAN.md`, md5 93b8030090b80a09c824521d9713d05f) delivered:

| Item | State | Where |
|---|---|---|
| Financial model | DONE, hash `effb9a66e6`, 18/18 checks PASS (after M1: A01 = 57 days, A20 = ₹102 a litre) | `DF\model\swiftkart_model.py`, `model_outputs.json`, `model_tables.md` |
| Research lanes R-A to R-H, verification V1, V2 | DONE, 332 sources, 589 fact rows | `DF\research\raw\`, `DF\research\data\` |
| Research parts A to F (sections 0 to 25) | DONE, about 95,000 words, every part self-checked PASS | `DF\research\parts\part-A.md` to `part-F.md` |
| Research part G (sections 26 to 28, glossary) | PARTIAL: §26 and §27 written, §27 word count unverified, §28 and the glossary not started | `part-G.md`; resumption notes at `C:\Users\harsh\.claude\plans\working-folder-dreamforge-case-rippling-snowflake-agent-a2e5b1a43530010e3.md` |
| Assembly, critique, PDF (R4 to R6) | NOT STARTED | `DF\research\assemble.py` exists |
| Figma deck, 7 slides | BUILT and V1-clean, file key `7N3v6bAfmXYRrte0zChFDg`, slide ids in `DF\deck\slide-ids.json` (S1 `2:2`, S2 `2:4`, S3 `2:5`, S4 `2:6`, S5 `2:7`, S6 `2:8`, S7 `2:9`) | `DF\deck\` |
| Logos | 4 of 19 slots filled (DTU, Flipkart, Blinkit, Zomato); rest are labelled placeholders | `DF\deck\logos\manifest.json` |

### §0.2 What the user asked for in this round (16 Oct 2026, verbatim intent)

1. **Redesign slides 2, 3, 4 and 5** to consulting grade: content heavy, dense "to a very heavy extent", research backed,
   laced with tables, charts, proper MBA diagrams and marketing funnels, built with the `case-competition-deck` skill
   (installed at `ROOT\.claude\skills\case-competition-deck\`, identical to `ROOT\case-competition-deck.skill`).
2. **"A hell of a research document"**: finish it, extend it to back every new exhibit, and polish it to a winning standard.
3. **A plan so detailed** that Sonnet sub-agents spend their effort on execution, not on thinking up fixes.

Slides 1 (cover), 6 (annexure) and 7 (thank you) are NOT redesigned. They stay exactly as built.

### §0.3 User decisions (AskUserQuestion, 16 Oct 2026). These override CLAUDE.md for this deck only

| Question | Answer | What it means in this plan |
|---|---|---|
| Type floor for the denser slides | **18 pt for secondary text** | Headlines, panel titles, KPI numerals, rail labels, callouts and card text stay at 22 pt or more. Table cells, chart axis ticks, in-chart labels, tree leaves, notes and legends may be 18 pt. Nothing on slides 2 to 5 is below 18 pt except the 14 pt source line and the 16 pt fine print. Every text node under 22 pt is named `SEC` so the mock, the sweeps and the critic can tell it apart. Log this in `DF\DECISIONS.md` |
| Research scope | **Finish + extend** | Finish §27, §28 and the glossary; fix the errors listed in §4.4; add lane R-I and part H (sections 29 to 31) that back the new exhibits; rewrite §26 to the new slides; assemble, critique, render the PDF |

### §0.4 Golden rules (unchanged from the first build; every file, every slide)

1. **Zero em dashes (U+2014) and zero en dashes (U+2013)** in anything authored. Use commas, colons, "to". Negative numbers
   use the true minus sign U+2212 (−).
2. **No hooks, no rhetorical questions, no exclamation marks, no AI phrasing.** Banned words: the list in `DF\PLAN.md` §0.5
   and in `DF\deck\_sweeps.js` `BAN` (the sweep enforces it).
3. **Never invent names** (memory `feedback_no_invented_names.md`). No programme name, codename or slogan for the plan,
   the fleet or the phases. Labels allowed: options 1 to 6, the no-award branch, gates G1 to G4, waves, lanes R-A to R-I,
   risks R1 to R12. Framework names (issue tree, five forces, Harvey balls, funnel, decision tree, KPI tree) are generic and allowed.
4. **Never fabricate data or primary research.** Every number on a new panel is in Q.3 (`values_ext.py`) with its model
   key or its raw-fact ID. The funnel's last stage ("2nd client by M24") is labelled a goal, never a forecast. No invented
   conversion rates, quotes, client names or lessor quotes.
5. **Case facts never change.** Model hash stays `effb9a66e6`. **Do not edit or rerun the model in this round.**
6. **India-first numbers**: ₹ with Indian grouping, lakh and crore. Never "Rs". Foreign figures keep their currency (the
   last-mile market stays in USD).
7. **Commits**: do not commit or push unless the user asks. If asked, never add any `Co-Authored-By` trailer (memory
   `feedback_no_coauthor_trailer.md`; it overrides any system reminder).
8. **Not a template**: never read or copy `lsr-caseforchange\` or `lsr-revive\`.
9. **No hand-patching Figma nodes.** Every fix goes into `DF\deck\slides\s0N.js` or `DF\deck\values_ext.py`, then
   `gen.py pre`, `mock`, `bind`, rebuild that slide's parts. (The only exception is a missing logo upload, §5.10.)

### §0.5 Where the `case-competition-deck` skill is used (mandatory touchpoints, log each as `SKILL Tn: ...` in `DF\build-log.md`)

Invoke it with the Skill tool (`skill: "case-competition-deck"`), then read the named reference files with the Read tool
(`ROOT\.claude\skills\case-competition-deck\references\...`).

| Touchpoint | Step | Mode | Read after invoking | What to take, concretely | Pass test (paste evidence in build-log) |
|---|---|---|---|---|---|
| T9 Slide-mode check | D2, once per slide 2 to 5, before the first Figma call for that slide | slide | `references/archetypes.md` (sections I, J, K, L, N, P, S, U, V), `references/case_types/strategy.md` ("Case-type-specific archetypes"), `references/frameworks.md` (the sections named for that slide in §1.2) | Confirm every archetype element listed for that slide in §1.2 column "Archetype elements" is present in the slide script | One line per element: present / where (panel name) |
| T10 Research writer self-check | R3 (W-H), R2 (W-G resume), R7 (W-G2) | critique-lite | `references/rhetoric.md` sections 6, 7, 8, 10, 11 | Every H2 and H3 is an action title with a number; every weakness pre-empted; third-party validation only from verified rows | Writer reply lists rewritten titles |
| T11 Funnel and frameworks | R3 (W-H §29, §31) | generate | `references/frameworks.md` sections "AIDA (Marketing Funnel)", "Pirate Metrics", "Ansoff Matrix", "Issue trees", "Porter's Five Forces", "Strategic Group Mapping", "Decision Tree", "Real Options Reasoning", "KPI Trees", "Risk Heat Map", `references/case_types/marketing.md` ("Customer Journey Map") | The structure of each framework section in part H | §29 and §31 each name the framework and its source in the skill |
| T5 Deck critique | D6 | critique | `references/critique_rubric.md`, `references/case_types/strategy.md`, `references/case_types/operations.md` | Score dimensions 1, 3, 4, 5, 7 on slides 2 to 5 plus the pass/fail items in §5.8 | `DF\deck\critique-r2.md` saved; score ≥ 32/35 on the five dimensions |
| T6 Research critique | R5 | critique | `references/critique_rubric.md` re-based as in §4.7 | Score the document; list at most eight issues | `DF\research\critique.md` saved |

### §0.6 Writing style contract (research, slide text, notes)

Action titles everywhere (declarative finding with a number). First person plural, plain words, a number in most
sentences, reasoning shown. Every table introduced by one sentence and followed by one sentence saying what it shows.
Uncertain numbers as bear, base and bull. "(vendor-reported)" or "(aggregator-reported)" on any single-vendor fact.
Expand abbreviations on first use in each section. No question marks in headings or slide text (the §27 judge
questions in `**Q7.** "..."` form are the only exception).

### §0.7 Default when unspecified

(a) Copy the nearest pattern in this plan or in `DF\PLAN.md`; (b) choose the simplest option that keeps every golden rule;
(c) append `YYYY-MM-DD | step | decision | why` to `DF\DECISIONS.md`. Ask the user only for destructive or outward-facing
actions (pushing, publishing, submitting) or a missing credential.

### §0.8 The Sonnet execution contract

DO: read the sections your dispatch names before acting; extract files with Q.8, never retype a code block; take every
modelled number from `model_outputs.json` or `model_tables.md`; take every outside fact from a VERIFIED or CORRECTED raw
row; run every self-check and paste its output into `DF\build-log.md`; write incrementally; report in at most 12 lines
ending `STATUS: PASS | PASS WITH RESIDUALS | FAIL`.

DO NOT: change the recommendation, a case fact, a model number, a slide layout, a palette value or the slide count; run two
Figma calls at once; create a second Figma file; hand-patch a Figma node (§0.4 rule 9); edit anything outside `DF\`;
treat a V1 `cellWrap` or `textOut` flag as a false positive (first build lesson, §5.7).

### §0.9 Roles

| Role | Model | Does | Never does |
|---|---|---|---|
| Orchestrator (main agent) | Sonnet | Bootstrap, gates, tooling, every Figma call, dispatch, assembly, final report | Edit a locked number or a slide layout |
| Lane researcher R-I | Sonnet | Lane R-I facts and CSV (§4.2) | Write prose |
| Writers W-G (resume), W-H, W-G2, W-FIX | Sonnet, at most 3 at once | Their sections (§4.3 to §4.5) | Browse, change numbers, invent quotes |
| Critic CR | Sonnet | T5 deck critique, T6 research critique | Rewrite sections |

---

## §1 WHY THE SLIDES CHANGE, AND THE FRAMEWORK MAP

### §1.1 Diagnosis of the first-build slides 2 to 5 (against the skill's rubric and the reference decks)

| Gap | Evidence on the built slides | Fix in R2 |
|---|---|---|
| Too few named MBA frameworks | S2 to S5 carry waterfall, tables, line, heat map, Gantt; no issue tree, five forces, MECE matrix, Harvey balls, positioning 2x2, funnel, decision tree, KPI tree, pyramid | 16 named frameworks across four slides (§1.2) |
| Thin outside research on the slides | Only S2 carried research (petrol line, 3 client rows, policy dates) | Market size and CAGR, Delhi-NCR dark stores, gig workforce, five forces ratings, 6-client EV table, policy clock, Alt Mobility quote, Delhi and PM E-DRIVE subsidy, client funnel |
| Panels without a "so what" | Charts end without a conclusion line | `note()` strips and in-chart annotations on most panels |
| 22 pt everywhere limited density | Tables held 4 to 6 short rows | 18 pt secondary text (user decision) lets tables hold 6 to 8 rows and charts carry labelled axes |
| Moneyshot lacked the operations "payback" proof the skill asks for | S4 had the bridge and cash line only | Payback crossover chart (month 13), monthly deployment of the crore, sources and uses |
| Mock missed real wraps | "Overhead", "When", "Gate", "High", "Recommended" all passed the mock and wrapped in Figma | Q.1 patches the mock: a single word wider than its box now counts extra lines; bold ranges are measured as Bold |

### §1.2 Slide-by-slide architecture (the judge sees this)

Every core slide: ribbon (unchanged), section chip, counter, a two-line action headline (≤ 150 characters), three bands
with EY rails, 7 to 10 panels, a 14 pt source line naming the research sources. Content area y 310 to 1032, panels from
x 116 to 1856 (1740 px). Panel titles 22 pt Poppins Bold at y 5 with a rule at y 39; content from y 46.

**S2 THE SITUATION** (`V.h1x`: "SwiftKart keeps 13.3% of what a petrol bike earns, the ₹2.8 Cr contract assumes 100% use,
and no petrol fleet bike can be added after 2026")

| Band (rail) | Panel (x, y, w, h) | Form and framework | Content (all values in Q.3) | Archetype elements (T9) |
|---|---|---|---|---|
| TODAY | 4 KPI tiles (116/392, 310/438, 268, 112) | KPI stack | 100 petrol bikes; ₹3.18 Cr revenue; ₹42.2 L contribution; 13.3% of revenue kept | quantification |
| TODAY | `ONE BIKE-MONTH, ₹ THOUSAND` (676, 310, 472, 240) | Unit-economics waterfall + note | 26.5 revenue, −14.0 rider, −9.0 petrol, 3.5 left; note "Rider 53%, petrol 34%, kept 13.3%" | two-chart workhorse, annotation |
| TODAY | `FIVE WAYS TO RUN ONE BIKE, ₹ A MONTH` (1160, 310, 696, 240) | Symmetric comparison table + so-what | petrol, EV bought running, EV bought all-in, EV leased, EV leased full use; so-what: a leased EV keeps ₹9,020, 2.6x a petrol bike (seeds the answer) | symmetric grid, foreshadowing |
| MARKET | `LAST-MILE MARKET, INDIA, USD BN` (116, 562, 572, 232) | Market bars + 3 stat callouts | USD 3.15 bn 2025, 3.66 bn 2026, 7.57 bn 2031, 15.6% CAGR (Mordor, RA01 to RA03); ~400 Delhi-NCR dark stores, #1 city (Savills, RA75); 2.35 Cr gig workers by 2029-30 (NITI Aayog, RA52); ₹102.12 a litre petrol, +7.8% (PPAC, RD11) | industry context funnel |
| MARKET | `FIVE FORCES: BUYERS HOLD THE POWER` (700, 562, 572, 232) | **Porter's five forces** (3x3 layout, rating by colour) | Entrants MEDIUM, Suppliers LOW TO MED, Rivalry HIGH (centre), Buyers HIGH, Substitutes MEDIUM (research §7.1); corners: scope, legend, Valmo insourcing, so-what "Win on uptime and data, not price" | Porter's 5 forces (strategy.md) |
| MARKET | `5 OF 6 BIG CLIENTS HAVE EV TARGETS` (1284, 562, 572, 232) | Client commitment table | Flipkart, Amazon, Zomato, Swiggy, BigBasket, Zepto: target and progress (research §6.1, RC IDs) | third-party validation |
| THE CHALLENGE | `THE POLICY CLOCK IS ALREADY RUNNING` (116, 806, 600, 226) | **PESTLE policy timeline** | Nov 2023 fleet scheme; Jul 2026 EV Policy 2026; Dec 2026 last petrol induction (alert); Apr 2028 only EVs registered; Apr 2030 fleets 100% EV; so-what: 2 months left, PM E-DRIVE only ₹5,000 | foreshadowing |
| THE CHALLENGE | `THE KEY QUESTION, BROKEN DOWN: A MECE ISSUE TREE` (728, 806, 1128, 226) | **MECE issue tree** (root, 3 branches, 6 leaves) | Root: how to deploy ₹1 Cr for the most value; FIX THE MARGIN, WIN THE CONTRACT, STAY LIQUID; 6 numbered leaves | issue tree (frameworks.md §1), key business challenge |

**S3 STRATEGIC ALTERNATIVES** (`V.h2x`: "Six options from two choices: leasing both fleets is worth ₹5.76 Cr over 48 months, ₹1.10 Cr
more than buying both, with no debt")

| Band | Panel | Form and framework | Content | Archetype elements |
|---|---|---|---|---|
| SIX OPTIONS | `TWO CHOICES, SIX OPTIONS (MECE)` (116, 310, 520, 240) | **MECE 3x3 option matrix** | Existing fleet (stay petrol, buy, lease) x contract (decline, win with bought, win with leased): options 1 to 6, the no-award branch, 2 mixed cells not built, NPV in every cell | MECE option filter (K) |
| SIX OPTIONS | `SIX OPTIONS ON ONE SET OF NUMBERS` (648, 310, 760, 240) | Option shortlist table, 8 columns | Deal, capex, debt, cash floor, NPV, run-rate, gCO2 for options 1 to 6 | option shortlist (S), symmetric (L) |
| SIX OPTIONS | `WEIGHTED SCORE, 5 CRITERIA` (1420, 310, 436, 240) | **Harvey-ball scorecard** | 6 options x value 35%, liquidity 20%, resilience 20%, CO2 15%, growth 10%; totals 1.95 to 5.00 | formula callout |
| TRADE-OFFS | `VALUE AGAINST CAPITAL TIED UP` (116, 562, 520, 232) | **Capture-versus-cost 2x2 bubble chart** (strategy.md moneyshot form) | x capex ₹ L, y NPV ₹ Cr, bubble size = debt; quadrants labelled | strategic positioning |
| TRADE-OFFS | `THE OBVIOUS ANSWER: BUY BOTH` (struck) (648, 562, 520, 232) | Obvious answer, struck, 3 reasons, **CONCLUSIVELY** callout | ₹110 L debt; EMI ₹3,601 above the ₹3,500 lease; cash dips to ₹12 L in month 8 | section closer (V), contrarian pattern |
| TRADE-OFFS | `ONE BIKE, ₹ A MONTH: LEASE BEATS OWN` (1180, 562, 676, 232) | **TCO stack** + evidence table | petrol 9,000, bought 5,684, leased 3,500; lease that flips it ₹5,153; bought with ₹35,000 of Delhi and PM E-DRIVE subsidy ₹5,038; Alt Mobility from ₹2,800; EMI ₹3,601 | pre-empting weakness |
| VERDICT | `7 SHOCKS FROM THE CASE: CHANGE IN NPV, ₹ L` (116, 806, 760, 226) | **Sensitivity heat map** (case uncertainties U01 to U07 x 6 options) | model T12 | sensitivity matrix (N) |
| VERDICT | `NPV, ₹ CR, WITH BEAR-BULL RANGE` (888, 806, 520, 226) | **Three-scenario range bars** | base bars for 6 options; bear to bull lines for options 1, 4, 6 (modelled) | three scenarios (M) |
| VERDICT | `CARD: verdict` (1420, 806, 436, 219) | Verdict card | value, cash, risk, CO2 | double synthesis |

**S4 THE ₹1 CRORE DECISION** (`V.h3x`: "The crore buys what a lease cannot: ₹94.2 L into five enablers, ₹0 on vehicles, earned back
by month 13, ₹5.8 L held back")

| Band | Panel | Form and framework | Content | Archetype elements |
|---|---|---|---|---|
| ALLOCATION | `WHEN THE CRORE GOES OUT, ₹ L A MONTH` (116, 310, 760, 246) | **Phased deployment stacked columns** M1 to M12 | 5 uses by month (model monthly rows); in-chart note "₹87.9 L of the crore is out by month 8" | implementation phasing (U) |
| ALLOCATION | `SOURCES AND USES, MONTHS 1 TO 24, ₹ L` (888, 310, 968, 246) | **Sources and uses**: twin stacked bars + 7-row table with basis | ₹1 Cr + ₹29.7 L petrol sales = 6 uses + cash; basis column shows each formula | formula callouts |
| PAYBACK | `PAYBACK: THE ₹94.2 L COMES BACK BY MONTH 13` (116, 568, 760, 228) | **Payback crossover** (operations moneyshot form) | cumulative deployed vs cumulative contribution over petrol, M0 to M24, marker at month 13 | moneyshot support |
| PAYBACK | `CASH IN THE BANK, ₹ L: NO LOAN NEEDED` (888, 568, 968, 228) | Cash path, 3 options | lease both ₹3.74 Cr, buy both ₹2.32 Cr with a ₹110 L loan, stay petrol ₹1.84 Cr | comparison |
| RETURNS | `CARD: MONEYSHOT` (116, 808, 560, 217) | **The moneyshot** (exactly one in the deck) | ₹42 L to ₹2.06 Cr a year; 4.9x, no debt, floor ₹1.02 Cr; +₹4.31 Cr NPV vs petrol; ₹1.10 Cr above buy both; −56% CO2 | moneyshot (P) |
| RETURNS | `HOW ₹42 L BECOMES ₹2.06 CR A YEAR, ₹ L` (688, 808, 700, 224) | **Contribution bridge waterfall** (decomposition) | today 42.2, fuel to lease +66.0, contract +123.3, spares −4.2, opex −21.3, month 24 206.0 | premium decomposition (P-supplement) |
| RETURNS | `WHAT HAS TO BE TRUE` (1400, 808, 456, 224) | **Switch-point table** | lease ₹5,153, contract volume 70%, price ₹27.3, bike use 56%, subsidy ₹94,521; Alt Mobility from ₹2,800 | pre-empting weakness |

**S5 RECOMMENDATION AND ROADMAP** (`V.h4x`: "Lease both fleets and electrify first: 175 EVs and no petrol by month 12, ₹2.06 Cr a year by
month 24, no debt, four go or stop gates")

| Band | Panel | Form and framework | Content | Archetype elements |
|---|---|---|---|---|
| THE ANSWER | `CARD: answer` (116, 310, 620, 229) | **Pyramid principle** (governing thought + 3 pillars) | value ₹5.76 Cr; liquidity ₹0 debt, floor ₹1.02 Cr; resilience 35% of NPV at risk, lowest | executive summary (H) |
| THE ANSWER | `LAND AND EXPAND: THE CLIENT FUNNEL` (748, 310, 560, 236) | **B2B marketing funnel (AIDA, land and expand)** | 6 big buyers, 5 with public EV targets, 3 aim for 100% EV by 2030, 1 anchor contract (75 bikes), +1 second client by M24 (a goal) | funnel (frameworks.md §6) |
| THE ANSWER | `TWO DECISIONS STAY OPEN` (1320, 310, 536, 236) | **Decision tree / real options** | award at M3: contract won (option 6, ₹5.76 Cr) or not (no-award branch, ₹3.34 Cr); month 36: renew under ₹5,153, else buy | real options |
| ROADMAP | `24 MONTHS IN EIGHT QUARTERS, FOUR GO OR STOP GATES` (116, 558, 1180, 236) | **Gantt with stage gates** | 7 workstreams, G1 to G4 diamonds | implementation plan (U) |
| ROADMAP | `GO ONLY IF` (1308, 558, 548, 236) | Gate tests table + fallback note | G1 M3, G2 M8, G3 M12, G4 M24 | milestone gates |
| RISKS AND KPIs | `12 RISKS: IMPACT BY PROBABILITY` (116, 806, 620, 226) | **Risk heat map** + 4 risk-to-control pairs | research §21.5 grid | risk register (U pattern 4) |
| RISKS AND KPIs | `KPI TREE: 14 NUMBERS EVERY MONTH` (748, 806, 600, 226) | **KPI tree** (contribution root, 3 branches) | financial, operations, emissions | KPI trees (frameworks.md §15) |
| RISKS AND KPIs | `IMPACT: PEOPLE, PLANET, PROFIT` (1360, 806, 496, 226) | **Triple bottom line** | 175 riders trained; −56% CO2 a delivery; 4.9x contribution; deliveries +88% | impact |

Named frameworks across slides 2 to 5: issue tree (MECE), Porter's five forces, PESTLE policy clock, unit economics,
symmetric comparison, MECE option matrix, Harvey-ball weighted scorecard, capture-versus-cost 2x2, TCO stack, sensitivity
heat map, three scenarios, phased deployment, sources and uses, payback crossover, contribution bridge, pyramid principle,
B2B funnel, decision tree (real options), Gantt with stage gates, risk heat map, KPI tree, triple bottom line.

### §1.3 Rhetoric carried across the deck (skill `rhetoric.md`)

Foreshadowing: S2's unit table so-what ("a leased EV keeps ₹9,020, 2.6x a petrol bike") and the issue tree's STAY LIQUID
branch seed the lease answer before S3 names it. Symmetric treatment: six options on identical rows on S3. Three scenarios:
S3 range bars. Exactly one moneyshot: `CARD: MONEYSHOT` on S4. Double synthesis: "CONCLUSIVELY" on S3, "THEREFORE" on S7
(unchanged). Pre-empting weaknesses: the lease rate (₹5,153 switch point, ₹2,800 market quote), the subsidy (₹35,000 still
loses), the contract (70% volume break-even, no-award branch ₹3.34 Cr).

---

## §2 LOCKED NUMBERS AND RESEARCH FACTS (model hash `effb9a66e6`)

### §2.1 Model numbers used on slides 2 to 5 (all computed by Q.3 from `model_outputs.json`; never typed by hand)

| Item | Value | Model key |
|---|---|---|
| Per bike-month at 85%: revenue, rider, petrol, kept, margin | ₹26,520, ₹14,000, ₹9,000, ₹3,520, 13.3% | `deck.ue`, `deck.wf` |
| Leased EV keeps; bought EV all-in; EMI | ₹9,020; ₹5,684; ₹3,601 | `unit[3].contrib`, `deck.own_all`, `deck.emi` |
| NPV 48m, options 1 to 6; no-award | 1.45, 2.94, 3.36, 4.66, 3.80, 5.76; 3.34 ₹ Cr | `summary.O0..O6.npv` |
| Debt options 1 to 6 (₹ L) | 0, 0, 35, 110, 0, 0 | `summary.*.loan` |
| Cash floor options 1 to 6 (₹ L) | 103.5, 21.5, 12.0, 12.4, 67.9, 101.6 | `summary.*.mincash` |
| Bear / base / bull NPV: option 1, 4, 6 | 0.41/1.45/2.08; 1.35/4.66/5.67; 1.50/5.76/6.80 | `scenarios` |
| Scorecard totals options 1 to 6 | 1.95, 3.15, 3.00, 3.65, 3.60, 5.00 | `deck.scores` |
| Option 6 value at risk | 35% of NPV | `scorecard.cards.O5.at_risk` |
| Uses of the crore (₹ L) | WC 44.5, charging 18.5, deposits 12.9, data 13.0, riders 5.2, reserve 5.8 | `deck.uses_txt` |
| Petrol sale proceeds | ₹29.7 L | `deck.sale5` |
| Deployed by month 8; by month 12 | ₹87.9 L; ₹94.2 L | computed from `monthly_o5` |
| Payback month (cumulative contribution over petrol ≥ cumulative deployed) | 13 (11 if petrol sale proceeds are counted) | computed |
| Contribution today to M24; multiple; NPV gain over petrol; over buy both | ₹42.2 L to ₹2.06 Cr; 4.9x; +₹4.31 Cr; ₹1.10 Cr | `deck` |
| Switch points | lease ₹5,153 (fleet), ₹5,684 (one bike); contract volume 70%; one-bike use 56%; price ₹27.3; subsidy ₹94,521 | `switch` |
| Bought EV with ₹35,000 subsidy (Delhi year-1 cap ₹30,000 + PM E-DRIVE ₹5,000) | ₹5,038 a month, still above ₹3,500 | computed from `own` |
| CO2 per delivery; deliveries a month | 240 g to 106 g (−56%); 66,300 to 1,24,800 (+88%) | `emissions` |

### §2.2 Research facts used on slides 2 to 5 (VERIFIED or CORRECTED rows; the researcher's IDs; where the document states them)

| Fact | Value | Raw IDs | Research § |
|---|---|---|---|
| India last-mile delivery market (Mordor Intelligence) | USD 3.15 bn 2025, 3.66 bn 2026, 7.57 bn 2031, 15.63% CAGR 2026 to 2031 | RA01, RA02, RA03 | 5.1 |
| Delhi-NCR dark stores (Savills India, Oct 2025) | about 400 of about 2,525, the largest city | RA73, RA75 | 5.3 |
| Gig workforce (NITI Aayog 2022) | 77 lakh (2020-21) to 2.35 crore (2029-30) | RA51, RA52 | 5.5 |
| Delhi petrol | ₹94.72 (2025), ₹102.12 (Oct 2026), +7.8% | RD07, RD11, RD12 | 8 (and make_values PETROL) |
| Five forces ratings | entrants Medium, suppliers Low to Medium, buyers High, substitutes Medium, rivalry High | RA70, RC76, RB19, RB24, RB34, RA35, RC64, RA43, RA32, RA33, RB06 | 7.1 |
| Meesho insourcing via Valmo | under 2% (FY23) to about 62% of shipments (Jun 2025) | RA43 | 5.4 |
| Client EV commitments | Flipkart 100% by 2030, 10,000+ EVs; Amazon 10,000 EVs reached Oct 2024; Zomato 100% by 2030, 13,500 EVs Apr 2024; Swiggy 100% by 2030, fleet 7x in a year; BigBasket 60% by 2030, about 27%; Zepto no company target, partner fleet only | RC01, RC02, RC11, RC12, RC14, RC19, RC21, RC24, RC25, RC28, RC33, RC34, RC36, RC40 | 6.1 |
| Policy clock | Nov 2023 aggregator and delivery scheme; 1 Jul 2026 Delhi EV Policy 2026; 31 Dec 2026 last BS-VI petrol 2W induction into a Delhi fleet (CAQM No. 94 from 1 Jan 2026 in wider NCR; conflict C-E4 ruled to the conservative date); 1 Apr 2028 only EVs registered in Delhi; 1 Apr 2030 delivery fleets fully electric | RA70, RE43, RE26, RE27, RE37, RE38, RE51, RE35, RE45 | 8.1, 8.3 |
| PM E-DRIVE e-2W cap | ₹10,000 (FY 2024-25) to ₹5,000 (FY 2025-26 to 31 Mar 2028) | RE02, RE03, RE12, RE14 | 8.2 |
| Delhi EV Policy 2026 e-2W purchase incentive | ₹30,000 cap in year 1, company buyers eligible | RE29, RE31 | 8.3 |
| Public B2B lease quote | Alt Mobility FleetLease from ₹2,800 a month (2023) | RB19, RB20 | 10.2 |
| Risk heat map | 12 risks placed per §21.5 | (model and §21) | 21.5 |

---

## §3 SEQUENCE, DISPATCH, GATES

### §3.1 Bootstrap (orchestrator, in order)

B0. Copy this plan byte for byte: `Copy-Item -LiteralPath "C:\Users\harsh\.claude\plans\working-folder-dreamforge-case-rippling-snowflake.md" -Destination "<ROOT>\dreamforge-case\PLAN-R2.md"`. Executors read `DF\PLAN-R2.md`. **Never overwrite `DF\PLAN.md`** (it is the first build's plan) and **never rerun `DF\extract.py`** (it would overwrite slides 2 to 5 and the original model files with first-build versions).

B1. Create `DF\extract_r2.py` with exactly the content of block Q.8 (Write tool). Run `PY DF\extract_r2.py`. Done when it prints `backed up 4` and `files 7`. It backs up the current `deck\slides\s02.js` to `s05.js` into `deck\slides_v1\` before writing the new ones.

B2. Run `PY DF\deck\patch_r2.py`. Done when it prints ten `patched` lines and `patch_r2 done`. (It patches `deck\gen.py`, `deck\_sweeps.js` and `research\assemble.py`; every anchor string must occur exactly once or it stops.)

B3. Append to `DF\DECISIONS.md`: `2026-10-16 | R2 bootstrap | 18 pt secondary text on slides 2 to 5, text named SEC | user decision via AskUserQuestion` and `2026-10-16 | R2 bootstrap | research finish + extend (lane R-I, part H) | user decision via AskUserQuestion`.

`PY` = `"C:\Users\harsh\AppData\Local\Programs\Python\Python312\python.exe" -X utf8`. PowerShell 5.1 has no `&&` (chain with `;`). Never put backticks or long quoted Python in `-c` from PowerShell; write a `.py` file under `DF\` instead.

### §3.2 Order and gates

| # | Step | Who | Output | Gate |
|---|---|---|---|---|
| 1 | B0 to B3 | orchestrator | PLAN-R2.md, new files, patched tooling | `files 7`, `patch_r2 done` |
| 2 | D0 content lock: `gen.py pre`, `gen.py mock 2 3 4 5` | orchestrator | values.js, mock OK | G-D0: four lines `s0N OK` |
| 3 | R2 resume writer G (§28, glossary) and R1 lane R-I, in parallel | 2 sub-agents, background | part-G.md complete, R-I raw file | |
| 4 | D1 to D4 Figma build of S2, S3, S4, S5 (in parallel with step 3) | orchestrator only | 4 slides rebuilt | G-D4: V1 clean on each |
| 5 | R3 writer H (sections 29 to 31) after R-I passes; R7 writer G2 (§26 rewrite) and W-FIX (§4.4 fixes), max 3 at once | sub-agents | part-H.md, part-G §26, fixed parts | G-R3 |
| 6 | D5 sweeps and visual review; D6 deck critique T5; D7 derivation | orchestrator, CR | critique-r2.md, derivation-r2.md | G-D |
| 7 | R4 assemble; R5 critique T6 and fixes; R6 PDF | orchestrator, CR, writers | swiftkart-research.md, html, pdf | G-R |
| 8 | D8 hi-res screenshots and preview PDF | orchestrator | preview PDF, 7 pages | |
| 9 | §6 final verification, §9 hand-off and memory | orchestrator | report, memory | DONE |

### §3.3 Dispatch rules

Agent tool, `subagent_type: "general-purpose"`, `model: "sonnet"`, `run_in_background: true`. At most 3 sub-agents at once.
Figma calls only by the orchestrator, one at a time. Every dispatch prompt starts with:

```
You are executor <step id> for the SwiftKart (Dream Forge 3.0) Round 2 build. Working folder:
C:\Users\harsh\Desktop\HARSH\PPTS-CASE-STUDY\nsut-innovators-court\dreamforge-case
Read dreamforge-case\PLAN-R2.md sections §0, §2 and <sections for your task> in full before acting. Also read
dreamforge-case\PLAN.md §0.3 and §0.5 (golden rules and banned words). Follow them exactly. The model hash is effb9a66e6;
never use a planning-time number from PLAN.md text. Invoke the case-competition-deck skill where your section says so
(touchpoint <Tn>) and log "SKILL Tn: ..." in dreamforge-case\build-log.md. Append your log entry to build-log.md: step id,
what you did, self-check output pasted, residuals. Report in at most 12 lines, ending with STATUS: PASS | PASS WITH
RESIDUALS | FAIL.
```

On a rate-limit (HTTP 429) error from a sub-agent, never relaunch fresh: wait for the reset time in the error, then
`SendMessage` to the same agent id with "Resume exactly where you stopped: you were on <section/task>; your file already
contains <what>; continue from there." (worked three times in the first build).

---

## §4 PHASE R: THE RESEARCH DOCUMENT

### §4.0 Targets (gate G-R)

| Metric | Minimum | Checked by |
|---|---|---|
| Words | 1,10,000 (A to F ≈ 95,000, G ≥ 9,000, H ≥ 9,400) | `assemble.py md` (its own floor is 80,000) |
| Tables | 220 | `assemble.py md` |
| H2 sections with `**Answer.**` | 32 (§0 to §31) | `assemble.py md` |
| Dashes, exclamations, banned words, "Rs" + digit, placeholders, missing S-IDs, duplicate headings | 0 each | `assemble.py md` |
| Internal process notes ("planning-time", "writer brief", "draft title", "Title note") in parts | 0 | §4.4 F5 grep |
| Primary-tier share of cited sources | ≥ 40% | `assemble.py md` |
| Critique | every CRITICAL and IMPORTANT fixed | `research/critique.md` |

### §4.1 Step R2: resume writer G (sections 27 check, 28, glossary)

Writer G was interrupted by plan mode with §26 and §27 written. Resume it: `SendMessage` to agent `a2e5b1a43530010e3`
with: "Resume exactly where you stopped. Read your resumption notes at C:\Users\harsh\.claude\plans\working-folder-dreamforge-case-rippling-snowflake-agent-a2e5b1a43530010e3.md and dreamforge-case\PLAN-R2.md §4.1. Re-run the self-check on section 27 (it must reach 5,000 words; expand with more worked answers if short), then write section 28 exactly as specified in dreamforge-case\PLAN.md §4.5 row 28, then write parts\appendix-E-glossary.md (≥ 80 terms, including the new framework terms: issue tree, MECE, five forces, Harvey ball, pyramid principle, land and expand, AIDA, funnel, decision tree, real option, KPI tree, payback period, sources and uses, stage gate, capture-versus-cost matrix). Do not touch section 26: writer G2 rewrites it later. Append your build-log entry and report."
If the agent id is no longer reachable, dispatch a fresh writer with the same text plus the full writer prompt of
`DF\PLAN.md` §4.6 filled for writer G (sections 27 and 28 only).

### §4.2 Step R1: lane R-I, client pipeline and fleet-partner precedents (one researcher, background)

Purpose: back the S5 funnel and research §29 with verified facts. Raw file `research\raw\R-I-pipeline.md` in the exact
schema of `DF\PLAN.md` §4.2 (R-IDs RI01 to RI99, S-IDs from the reserved block **S700 to S759**, statuses VERIFIED,
CORRECTED, SNIPPET, UNVERIFIABLE). CSV `research\data\client_pipeline.csv` with header
`client,partner_or_fact,type,date,city,listed,brsr_applies,source_sid,note`. Target 45 to 70 rows, at least 85% VERIFIED or CORRECTED.

Questions, in order:
1. For Flipkart, Amazon India, Zomato (Eternal) and Blinkit, Swiggy and Instamart, BigBasket, Zepto: every public
   announcement of a third-party EV fleet or EV rental partner for last-mile delivery (partner name, vehicle count, city,
   date). Known leads to verify, not to cite as-is: Zomato with Yulu (DeX, 2023), Zepto with Zypp Electric, Swiggy, Amazon
   India and Flipkart EV partner announcements.
2. Listing status of each client (NSE/BSE) and whether SEBI BRSR (and BRSR Core value-chain disclosure) applies; cite
   SEBI circulars already in lane R-C (reuse their S-IDs) and the companies' own BRSR filings.
3. Published supplier or partner codes of conduct of these clients that mention emissions data, EV use or sustainability
   reporting by logistics partners.
4. Public statements of how these clients onboard delivery partners or 3PLs (pilot then scale; minimum fleet sizes;
   service-level terms), only where a named source states it.
5. Each client's Delhi-NCR footprint if stated (dark stores, hubs, delivery partners in Delhi-NCR).
Rules: exactly as `DF\PLAN.md` §4.2 (no prose, no analysis, no currency conversion, dashes replaced by commas in titles,
snippets max 25 words). Gaps section lists unanswered questions with queries tried. Gate: ≥ 45 rows, ≥ 85% VERIFIED or
CORRECTED, sources appended to `research\raw\sources.md` from S700 upward with no duplicate S-ID (run the G-R1 one-liner
from `DF\PLAN.md` §4.2).

### §4.3 Step R3: writer H, part-H.md (sections 29 to 31)

Dispatch after R-I passes its gate. Writer prompt: the template of `DF\PLAN.md` §4.6 with these substitutions. Read list
adds `research\raw\R-I-pipeline.md`, `research\data\client_pipeline.csv`, `research\parts\part-B.md` (§5 to §7),
`part-E.md` (§17, §18), `part-F.md` (§21 to §24), `deck\values.js` (after D0), and this plan's §1.2 and §2. Skill touchpoints
T10 and T11. Exact H2s, in order:

| § | H2 title (exact) | Must contain | Tables min | Words min |
|---|---|---|---|---|
| 29 | 29. Go-to-market: six large buyers, five with public EV targets, three aiming for 100% EV by 2030, and one anchor contract to land first | The funnel stage by stage with the evidence for each count (RC and RI tags); land and expand as a staged plan; Ansoff matrix placement (market penetration with the existing client base, market development with the contract client); client concentration norm (Shadowfax 74%, RA35) and what it means; how monthly emissions reporting and BRSR value-chain pressure open the door; why the second client by month 24 is a goal, not a forecast, and what would make it happen; no conversion rates are invented | 7 | 3,200 |
| 30 | 30. Capital timing and payback: ₹87.9 L of the crore is out by month 8, and the deployed ₹94.2 L is earned back by month 13 | Monthly deployment table M1 to M12 by use (model T7 and `monthly_o5`); cumulative deployed against cumulative contribution over the petrol baseline (₹3.52 L a month) for months 1 to 24; payback month 13 with the method stated, and month 11 if petrol sale proceeds count; sources and uses recap (₹129.7 L); the working-capital formula (57 days × ₹23.4 L monthly billing = ₹44.5 L); subsidy stress: Delhi EV Policy 2026 year-1 cap ₹30,000 plus PM E-DRIVE ₹5,000 leaves a bought EV at ₹5,038 a month, still above the ₹3,500 lease, and ₹94,521 would be needed to flip it | 7 | 3,000 |
| 31 | 31. The frameworks behind the deck: twenty-two exhibits, each tied to one number the judges can check | One H3 per framework used on slides 2 to 5 (§1.2 list, 22 frameworks): what it shows, the number it carries, the section that establishes it, and its source in the skill's `frameworks.md` or `archetypes.md`; include the corrected MECE matrix (options 3 and 5 in the stay-petrol row); Porter's five forces with ratings; the capture-versus-cost 2x2 coordinates; the decision tree payoffs; the KPI tree; the risk heat map placement | 10 | 3,200 |

Every H2 opens with `**Answer.**` and closes with `### What this section establishes, and what it does not`. Self-check
one-liner from `DF\PLAN.md` §4.5 after each H2. Append to `parts\part-H.md`. Tags as in WRITER-BRIEF.md plus `[RI12]`.

### §4.4 Step R7: fixes to the existing parts (writer W-FIX, then writer W-G2)

W-FIX applies these to the named files, shows a before/after line for each in its build-log entry, and re-runs the
self-check on every touched part:

| ID | File, place | Defect | Fix |
|---|---|---|---|
| F1 | part-D.md §13.1, table T13.1 | Mislabels the matrix: puts "not built" where options 3 and 5 belong | Rows: Stay petrol = option 1, option 3, option 5; Buy EVs = option 2, option 4, mixed (not built); Lease EVs = the no-award branch, mixed (not built), option 6. Rewrite the italic note under it and the paragraph after it to match (two mixed cells, not three) |
| F2 | part-D.md §13.4, value band table | Puts option 5 (55% of the best gain) in band 2 | Option 5 is band 3 (40% to under 60%); model `scorecard.cards.O4.value` = 3 |
| F3 | part-E.md §17.6 | "Four of the five uses are done by month 8" is not true in model T7 (charging, deposits and riders have month-12 amounts; working capital runs to month 10) | Retitle and rewrite: "₹87.9 L of the crore is deployed by month 8 and ₹94.2 L by month 12" with the T7 arithmetic |
| F4 | part-A.md §0.8 document map and §1 traceability | Stop at §28 | Add rows for §29, §30, §31 and the new slide panels (§1.2 of this plan) |
| F5 | parts A, D, E, F, G and ARGUMENT.md | Internal process notes leak into the reader's document: "Planning-time note" blocks (part-D lines about ₹25 L, ₹1.00 crore, ₹5.79 crore), "Title note" (part-E line 3 and its bullet), "an earlier planning-time draft" (part-A §2.13, part-G), "planning estimate of ₹35.1 lakh" (part-F), "the planning-time 2022 peak" (part-F R9) | Delete the process notes. Where the comparison carries information, restate it as a sensitivity, for example "At 45 receivable days the working capital line would be ₹35.1 L and the reserve ₹15.2 L; at the verified 57 days it is ₹44.5 L and ₹5.8 L". Afterwards `grep -i -E "planning-time|planning time|writer brief|draft title|title note"` over parts A to H must return nothing |
| F6 | all parts | Any "₹5.79", "₹5,151", "₹84.8", "1f2b5c9715" outside a sensitivity sentence | Replace with the current model value |

W-G2 (after D0, any time): rewrite §26 of part-G.md to describe the R2 deck: the seven-slide shape (S1, S6, S7 unchanged),
the §1.2 tables of this plan in prose and tables, one derivation table per core slide (panel, text or number, research
section, tag, model key) built from `deck\values.js` and `deck\slides\s0N.js`, the density table (node counts from D5),
and the 18 pt secondary-text decision. Keep the H2 title of §26 unchanged.

### §4.5 Step R4: assemble

`PY DF\research\assemble.py md` until `ASSEMBLY PASS` (the patch in Q.1 makes it read parts A to H and accept R-I tags).
Fix rules as in `DF\PLAN.md` §4.7 (dash: rewrite the sentence; banned word: plain synonym; missing S-ID: add the register
row or remove the citation; short section: re-dispatch its writer for that H2 only).

### §4.6 Step R5: critique (T6) and fixes

Dispatch CR with `DF\PLAN.md` §4.7 R5 text, re-based for 32 sections, plus three added tests: (iv) every number on slides
2 to 5 (from `deck\slide-copy-r2.md`, written in D5) appears in the document with the same value; (v) no internal process
notes; (vi) §29 to §31 each tie every framework to a number. Fix CRITICAL and IMPORTANT by re-dispatching the owning writer
with the critic's exact text; rerun R4.

### §4.7 Step R6: PDF

`PY DF\research\assemble.py pdf`. Read pages 1 to 3 and five random pages with the Read tool (the PDF reader works; if a
page cannot render, check page count with PyMuPDF from a `.py` file). Log G-R with the assembler JSON pasted.

---

## §5 PHASE D: THE DECK (slides 2 to 5)

### §5.0 Entry

Start D0 right after B3. The model is final (hash `effb9a66e6`) and every research fact on the new slides is already a
VERIFIED row (§2.2), so the deck does not wait for part H. D7 checks the finished document afterwards.

### §5.1 Tooling (what Q.1 patches, so you know what you are running)

- `gen.py`: slides 2 to 5 get `_x3.js` (Q.2) appended after the preamble and `_x2.js`. A slide file may contain the line
  `// ===== PART 2 =====`; `bind` then writes two Figma scripts, `build\slide_0N_1.js` (wipes and builds the first block)
  and `build\slide_0N_2.js` (adds the second block without wiping), each under 50,000 characters. `mock` runs the whole
  slide as one script and checks both parts' lengths.
- The offline mock: a single word wider than its box now counts the extra lines Figma will wrap it onto (the first-build
  "Overh/ead", "Whe/n", "Ga/te" bugs); text with a bold range is measured as Inter Bold; `SEC` text at 18 pt or more passes
  the font floor.
- `_sweeps.js`: `SEC` text at 18 pt or more passes `fontLow`.
- `research\assemble.py`: reads parts A to H; lane tags `R[A-I]`.

### §5.2 Content lock (D0)

1. Run `PY DF\deck\gen.py pre` then `PY DF\deck\gen.py mock 2 3 4 5`. Done when four lines read `s0N OK` and each shows
   part lengths under 49,900 (the harness result in §6.0 is the expected output).
2. Write `DF\deck\slide-copy-r2.md`: every string on slides 2 to 5 verbatim, read from `deck\values.js` and the slide files.
3. Write `DF\deck\derivation-r2.md`: one table per slide, `| Panel | Text or number | Research section | Tag | Model key or raw ID | Matches (Y/N) |`, rows from §1.2 and §2. Research section column for §29 to §31 reads "pending (W-H)" until D7.

### §5.3 Build procedure (D1 to D4, orchestrator only, one Figma call at a time)

1. Load the Figma tools if deferred: ToolSearch `select:mcp__figma-mcp__use_figma,mcp__figma-mcp__get_screenshot,mcp__figma-mcp__upload_assets,ReadMcpResourceTool`.
   Load the figma-use guidance (ReadMcpResourceTool, server `figma-mcp`, uri `skill://figma/figma-use/SKILL.md`) and pass
   `skillNames: "resource:figma-use"` on every `use_figma` call. File key `7N3v6bAfmXYRrte0zChFDg`.
2. Invoke the skill in slide mode for the slide (T9) and log the archetype check.
3. `PY DF\deck\gen.py bind 2 3 4 5`. For N in 2, 3, 4, 5:
   a. `use_figma` with the exact contents of `build\slide_0N_1.js`, then `build\slide_0N_2.js`. Each return must show
      `warnings: []`. Pass the file content unchanged; never edit it. The old first-build files `build\slide_02.js` to
      `slide_05.js` are stale after bind: move them to `build\stale_v1\` so they cannot be submitted by mistake.
   b. `use_figma` with `build\v1_0N.js`. It must return `clean: true`. Every flag is real (§5.7).
   c. `get_screenshot` (fileKey above, nodeId from `slide-ids.json`, maxDimension 1600). Download the PNG with
      `curl -s -L -o DF\deck\shots\r2_s0N.png "<url>"` and Read it. Check the K-card (§5.6). Describe it in two lines in
      `DF\deck\figma.md`.
   d. Fix by §5.7, at most three rounds a slide; each round edits `slides\s0N.js` or `values_ext.py`, then
      `gen.py pre`, `gen.py mock N`, `gen.py bind N`, and rebuilds both parts of that slide (part 1 wipes the slide).
4. Never build S1, S6 or S7 in this round.

### §5.4 Sweeps, visual review and critique (D5, D6)

1. `use_figma` with `build\sweeps.js`, then `build\v1_all.js`. Pass: `radiusFixed` 0 (second run), `moneyshot` 1,
   `fontLow` [], `copy` [], `missing` [], `presentBad` []; V1 `clean: true` for all 7 slides.
2. Screenshot all 7 slides at 1600 px, read each, confirm S1, S6 and S7 are unchanged.
3. Dispatch CR for T5: give it the seven screenshots (paths), `deck\slide-copy-r2.md`, `deck\derivation-r2.md`,
   `references\critique_rubric.md`. It scores dimensions 1, 3, 4, 5, 7 on slides 2 to 5 (35 points) and the pass/fail
   items: recommendation in a headline (S5), for and against present (S3), action titles with numbers (4/4), sources on
   every slide, exactly one moneyshot, "CONCLUSIVELY" and "THEREFORE" present, at least 16 named frameworks, no
   placeholder text other than named logo slots. At most five issues; none may change a number, the recommendation, the
   slide count or a layout beyond §5.7. Writes `DF\deck\critique-r2.md`. Fix what falls under §5.7; rebuild; re-run the sweeps.

### §5.5 Derivation (D7, after G-R)

Complete `derivation-r2.md`: every row names the research section (§29 to §31 included) and says Y. If the document and
the deck disagree on a number, the document is wrong (the deck reads the model): fix the document sentence.

### §5.6 K-card for every screenshot

1. No empty region larger than about 120 × 120 px inside the content area.
2. No text touches or crosses a panel border; no word broken across lines; no text under 18 pt except the source line
   and fine print.
3. S2: the issue tree shows root, 3 coloured branches, 6 leaves with connectors; the five forces centre box is dark;
   Dec 2026 dot is red.
4. S3: the obvious-answer title is struck through in red; "CONCLUSIVELY" callout visible; Harvey balls show 0 to 4
   quarters; option 6 bubble sits top-left of the 2x2; heat map red losses, teal gains.
5. S4: "₹2.06 Cr" is the largest numeral on the slide, volt yellow on the dark card; the month-13 dashed marker crosses
   the two payback lines between M12 and M15; the twin sources and uses bars are the same height.
6. S5: pyramid connector reaches all 3 pillars; funnel narrows over 5 tiers; gate diamonds G1 to G4 sit on the Gantt;
   risk grid darkest cell top right.
7. Ribbons: the active tag matches the slide (S2 tag 1 to S5 tag 4); rails read bottom to top, centred.

### §5.7 Fix rules (one rule per issue)

| Issue | Fix |
|---|---|
| V1 `cellWrap` or `textOut`, or a broken word on a screenshot | It is real (the first build proved it). Measure the string live: `use_figma` read-only script `const t=figma.createText(); figma.currentPage.appendChild(t); await figma.loadFontAsync({family:"Inter",style:"Bold"}); t.fontName={family:"Inter",style:"Bold"}; t.fontSize=18; t.characters="<text>"; const w=t.width; t.remove(); return w;` (same family and style as the node). Then shorten the string in `values_ext.py` (ladder: drop an article, shorter synonym, drop the least important clause; keep every number) or widen the column by taking width from the widest other column in the same table, keeping the table total unchanged |
| `overlap`, `bounds`, `belowContent` | Move the lower panel down by the overlap + 12, or reduce the upper panel height; panel bottoms never pass y 1032 |
| `headline3lines` | Shorten the headline in `values_ext.py` (drop a clause, keep every number) |
| `source2lines` | Shorten publisher names in the source line |
| Font sweep hit | Raise to 18 (SEC) or 22, then shorten if it overflows |
| `textCollision` (mock) | Move the later text by the overlap + 6 px |
| A node 240 px off | A position was set before `appendChild`; use the helpers only |
| `Cannot use unloaded font` | You ran a fragment; always run the whole build file |
| Copy hit (dash, ?, !, banned word, absent word) | Rewrite the string |
| Part over 50,000 characters | Move the `// ===== PART 2 =====` line earlier (between panels) so the parts balance |
| Figma timeout | Re-run the same part once; if it times out twice, move the PART 2 line so each part has fewer panels |

### §5.8 Logos (unchanged slots)

The R2 slides 2 to 5 carry no logo slots (client names are text). Logo work stays as in `DF\deck\logos\manifest.json`
(open item §8.2).

### §5.9 Previews (D8)

`get_screenshot` maxDimension 3840 of all 7 slides into `DF\deck\shots\hi_s0N.png`; build
`DF\deck\SwiftKart_DreamForge3_preview.pdf` (one 1920 × 1080 page per PNG, PyMuPDF from a `.py` file); Read pages 1, 2, 3, 4, 5.

---

## §6 VERIFICATION

### §6.0 Planning-time verification (the planner ran Q.0 before handing over)

The planner ran Q.0 on 16 Oct 2026 after the last edit to Q.1 to Q.7. Expected output of `gen.py mock 2 3 4 5` after B2:

```
s02 OK [43100, 40843] | [S2] nodes {"total":279,"top":47,"texts":135,"lowest":1032} | warnings: [] | ISSUES 0
s03 OK [44780, 40931] | [S3] nodes {"total":466,"top":42,"texts":227,"lowest":1032} | warnings: [] | ISSUES 0
s04 OK [44562, 40686] | [S4] nodes {"total":410,"top":40,"texts":150,"lowest":1032} | warnings: [] | ISSUES 0
s05 OK [41591, 42297] | [S5] nodes {"total":251,"top":41,"texts":116,"lowest":1032} | warnings: [] | ISSUES 0
```

The first harness run found 11 real layout defects (two five-forces corner notes wrapping to 3 lines, two fine-print
lines wrapping, a table cell, a label collision on the 2x2, zero ticks colliding with "M0", the moneyshot label touching
the numeral, two decision-tree collisions); all were fixed in Q.3 to Q.7 before hand-over. The mock is approximate:
Figma's V1 is final, and every V1 flag is real (§5.7). Expect at most one or two small V1 residuals per slide.

### §6.1 Gate table

| Gate | Check |
|---|---|
| Bootstrap | `files 7`, `backed up 4`, `patch_r2 done` |
| G-D0 | `gen.py mock 2 3 4 5` prints four `OK` lines |
| G-D4 | V1 `clean: true` on S2 to S5; screenshots read and described |
| G-D | sweeps clean on all 7; critique-r2 ≥ 32/35; derivation-r2 all Y |
| G-R1 (R-I) | ≥ 45 rows, ≥ 85% VERIFIED or CORRECTED, unique S-IDs |
| G-R3 | part-G and part-H self-checks clean; F1 to F6 done with before/after lines |
| G-R | `ASSEMBLY PASS` with ≥ 1,10,000 words, ≥ 220 tables, ≥ 32 answers; PDF renders; critique fixed |

### §6.2 Cross-deliverable checks (run before reporting)

Write and run `DF\checks_r2.py` that prints, for `research\parts\*.md`, `research\ARGUMENT.md`, `deck\slide-copy-r2.md`
and `deck\values.js`: counts of U+2014, U+2013, `!`, `Rs` followed by a digit, `TODO|TBD|Lorem|Insert|xyz|PLACEHOLDER`,
`planning-time|writer brief|title note`. Every count 0. Then collect every ₹, lakh and percentage figure in
`slide-copy-r2.md` and confirm each appears in `model_tables.md` or the assembled document; paste the table into
`derivation-r2.md`.

### §6.3 Final checks by the orchestrator

Open the research PDF (pages 1 to 3) and the preview PDF (all 7 pages); re-run sweeps and V1 on the live file; confirm the
hash on S7 equals `effb9a66e6`; confirm build-log has SKILL T5, T6, T9 (×4), T10, T11.

---

## §7 RISKS AND RECOVERY

| Symptom | Action |
|---|---|
| `extract_r2.py` prints fewer than 7 files | PLAN-R2.md is not a byte copy; redo B0 |
| `patch_r2.py` assertion | A patched file was edited earlier; restore it from the first-build state (`gen.py` and `_sweeps.js` come from `beyondtech-dcg\deck\` + `DF\deck\patch_tooling.py`; `assemble.py` from `DF\PLAN.md` via a one-off extraction of that single block into a temp folder), then re-run |
| `gen.py pre` assertion in `values_ext.extend` | A string is too long: shorten it per §5.7 |
| Mock FAIL | Read the issue line, apply §5.7, re-run `gen.py mock N` |
| A slide part over 50,000 characters | §5.7 |
| Figma 429 or timeout | Wait 60 s, check the slide's child count with a read-only `use_figma`, re-run that part; part 1 always wipes |
| Writer G agent unreachable | Fresh writer per §4.1 |
| Lane R-I finds fewer than 45 rows | Re-dispatch once for 20 more rows on questions 1 and 2; the funnel counts already rest on lane R-C rows, so §29 can proceed with what R-I verified |
| `ASSEMBLY FAIL` | Fix by §4.5 rules |
| Chrome not found for the PDF | Deliver markdown and HTML; report |

---

## §8 OPEN ITEMS FOR THE USER

1. Slide count: the brief caps core slides at 4 excluding title and annexure; the thank-you slide is extra by choice.
2. Organiser marks (IEEE DTU, Dream Forge 3.0) and 13 other logo slots on the cover remain placeholders.
3. Confirm Dayita Arora's institution line and roles.
4. Links for the three thank-you slots.
5. Submission file name and format (default: Figma Slides export to PDF).
6. The 18 pt secondary-text rule applies to this deck only; CLAUDE.md still says 22 pt for future decks unless you change it.

---

## §9 HAND-OFF AND MEMORY

Final message (orchestrator): Figma URL `https://www.figma.com/slides/7N3v6bAfmXYRrte0zChFDg`; paths of the research md,
html and pdf and the preview PDF; word and table counts; the frameworks now on slides 2 to 5; gate results; critique
scores; open items. Update memory: edit `project_dreamforge_swiftkart.md` in the memory folder (create it if missing,
frontmatter `type: project`) with: folder, team, recommendation in one line, hash `effb9a66e6`, Figma key, 7 slides,
R2 redesign of slides 2 to 5 with 18 pt secondary text, `DF\PLAN-R2.md` as the surviving copy of this plan; add or update
its line in `MEMORY.md`. Add a feedback memory `feedback_mock_wrap.md`: "V1 cellWrap flags are real; the offline mock
missed single words wider than their box until the R2 patch; measure live before dismissing". No git commit unless asked.

---

# PART VI. EMBEDDED FILES (source of truth; extract with Q.8, never retype)

## Q.0 Planning-time harness (never extracted; read-only; reads this plan at its .claude path and the deck files on disk)

<!-- HARNESS: planning-time only, never extracted -->
```python
import io, re, json, sys, pathlib
ROOT = pathlib.Path(r"C:\Users\harsh\Desktop\HARSH\PPTS-CASE-STUDY\nsut-innovators-court"); DF = ROOT / "dreamforge-case"; DK = DF / "deck"
PLAN = r"C:\Users\harsh\.claude\plans\working-folder-dreamforge-case-rippling-snowflake.md"
t = io.open(PLAN, encoding="utf-8").read().replace("\r", "")
B = dict(re.findall(r"<!-- FILE: ([^\n]+?) -->\n```[a-z]*\n(.*?)\n```\n", t, re.S))
rdf = lambda p: io.open(p, encoding="utf-8").read().replace("\r", "")
MEM = {r: rdf(DK / r) for r in ("gen.py", "_extras.js", "_x2.js", "_v1.js", "_sweeps.js", "metrics.json", "_palette.js", "make_values.py", "slide-ids.json")}
for n in range(1, 8): MEM["slides/s%02d.js" % n] = rdf(DK / "slides" / ("s%02d.js" % n))
MEM["_x3.js"] = B["deck/_x3.js"]; MEM["values_ext.py"] = B["deck/values_ext.py"]
for n in (2, 3, 4, 5): MEM["slides/s%02d.js" % n] = B["deck/slides/s%02d.js" % n]
AS = {"../research/assemble.py": rdf(DF / "research" / "assemble.py")}
pg = {"__name__": "pr2"}; exec(compile(B["deck/patch_r2.py"], "pr2", "exec"), pg)
pg["patch"](lambda r: AS[r] if r.startswith("../") else MEM[r], lambda r, x: AS.__setitem__(r, x) if r.startswith("../") else MEM.__setitem__(r, x))
gg = {"__name__": "gen", "__file__": str(DK / "gen.py")}; exec(compile(MEM["gen.py"], "gen", "exec"), gg); gg["MEM"] = MEM
gg["pre"](); ok = gg["mock"](set(int(a) for a in sys.argv[1:]) or {2, 3, 4, 5})
V = json.loads(MEM["values.js"][len("const V = "):].rstrip().rstrip(";"))
for k in ("h1x", "h2x", "h3x", "h4x"): print(k, len(V[k]), V[k])
for k in ("src2x", "src3x", "src4x", "src5x"): print(k, len(V[k]))
print("ALL OK" if ok else "SOME FAIL")
```

## Q.1 Tooling patch

<!-- FILE: deck/patch_r2.py -->
```python
"""Round-2 tooling patch (PLAN-R2.md section 5.1). Run once: PY dreamforge-case/deck/patch_r2.py
Every anchor string must occur exactly once. patch(read, write) takes two callables so the planning harness can apply
the same edits in memory. Paths starting with ../ are relative to the deck folder (the research assembler)."""
import io, pathlib
D = pathlib.Path(__file__).resolve().parent if "__file__" in globals() else pathlib.Path("dreamforge-case/deck")

R2MOCK = '''def r2mock(m):
    for a, b in [
        ('if (measure(cand, fam, size) <= width || !line) line = cand; else { out.push(line); line = wd; } }',
         'if (measure(cand, fam, size) <= width) line = cand; else { if (line) out.push(line); line = wd; let k = Math.ceil(measure(wd, fam, size) / Math.max(1, width)); while (k-- > 1) out.push(wd); } }'),
        ('setRangeFontName() {}', 'setRangeFontName(a, b, f) { if (f && f.style === "Bold") { this._bold = true; this._reflow(); } }'),
        ('_fam() { return this.fontName.family + "|" + this.fontName.style; }',
         '_fam() { return this.fontName.family + "|" + (this._bold && this.fontName.family === "Inter" ? "Bold" : this.fontName.style); }'),
        ('/BIBLIO|FINEPRINT/.test(t.name || "")', '/BIBLIO|FINEPRINT/.test(t.name || "") || (t.name === "SEC" && t.fontSize >= 18)')]:
        assert m.count(a) == 1, ("r2mock", a[:50], m.count(a)); m = m.replace(a, b)
    return m
'''

PARTS = '''SPLIT = "// ===== PART 2 ====="
def parts(n, sid):
    s = rd("derived/s%02d.js" % n)
    return [compose(n, sid, i) for i in range(2)] if SPLIT in s else [compose(n, sid)]
'''

def patch(read, write):
    def sub(rel, old, new):
        t = read(rel); assert t.count(old) == 1, (rel, old[:70], t.count(old)); write(rel, t.replace(old, new)); print("patched", rel, "|", old[:50])
    sub("gen.py", "# ===== SWIFTKART DECK GEN v1 =====", "# ===== SWIFTKART DECK GEN v1 + R2 =====")
    sub("gen.py", "X2 = (1, 2, 3, 4, 5, 6, 7)  # glyph metrics and rail helpers on every slide",
        "X2 = (1, 2, 3, 4, 5, 6, 7)  # glyph metrics and rail helpers on every slide\nX3 = (2, 3, 4, 5)  # R2 helpers (_x3.js) on the redesigned slides")
    sub("gen.py", "def pre():", R2MOCK + "def pre():")
    sub("gen.py", 'in m, (c1, c2, c3, c4); wr("mock_figma.js", m)', 'in m, (c1, c2, c3, c4); m = r2mock(m); wr("mock_figma.js", m)')
    sub("gen.py", 'def compose(n, sid):\n    p = rd("preamble.js") + ((N + rd("_x2.js")) if n in X2 else ""); s = rd("derived/s%02d.js" % n); old = \'getNodeByIdAsync("S%d")\' % n; assert s.count(old) == 1, n',
        'def compose(n, sid, part=None):\n    p = rd("preamble.js") + ((N + rd("_x2.js")) if n in X2 else "") + ((N + rd("_x3.js")) if (n in X3 and has("_x3.js")) else ""); s = rd("derived/s%02d.js" % n); old = \'getNodeByIdAsync("S%d")\' % n; assert s.count(old) >= 1, n\n    if part is not None: s = s.split(SPLIT)[part]')
    sub("gen.py", "def mock(only=None):", PARTS + "def mock(only=None):")
    sub("gen.py", 'out = r.stdout + r.stderr; good = "warnings: []" in out and "ISSUES 0" in out and len(code) < 49900; ok = ok and good\n        print("s%02d" % n, "OK" if good else "FAIL", len(code), "|",',
        'out = r.stdout + r.stderr; lens = [len(c) for c in parts(n, "S%d" % n)]; good = "warnings: []" in out and "ISSUES 0" in out and max(lens) < 49900; ok = ok and good\n        print("s%02d" % n, "OK" if good else "FAIL", lens, "|",')
    sub("gen.py", '        code = compose(n, ids["S%d" % n]); assert len(code) < 50000, (n, len(code)); wr("build/slide_%02d.js" % n, code)',
        '        cs = parts(n, ids["S%d" % n])\n        for i, code in enumerate(cs):\n            assert len(code) < 50000, (n, i, len(code)); wr(("build/slide_%02d.js" % n) if len(cs) == 1 else ("build/slide_%02d_%d.js" % (n, i + 1)), code)')
    sub("_sweeps.js", 'let ok=t.name==="SOURCE"||t.name==="FINEPRINT"||t.name==="BIBLIO"||c.startsWith("Source:");',
        'let ok=t.name==="SOURCE"||t.name==="FINEPRINT"||t.name==="BIBLIO"||c.startsWith("Source:")||(t.name==="SEC"&&t.fontSize>=18);')
    t = read("../research/assemble.py"); n = t.count("R[A-H]"); assert n == 4, ("assemble R[A-H]", n)
    assert t.count('for x in "ABCDEFG"]') == 1
    write("../research/assemble.py", t.replace("R[A-H]", "R[A-I]").replace('for x in "ABCDEFG"]', 'for x in "ABCDEFGH"]')); print("patched ../research/assemble.py | R[A-I], parts A to H")
    print("patch_r2 done")

if __name__ == "__main__":
    def rd(rel): return io.open((D / rel).resolve(), encoding="utf-8").read().replace("\r", "")
    def wr(rel, t): io.open((D / rel).resolve(), "w", encoding="utf-8", newline="\n").write(t)
    patch(rd, wr)
```

## Q.2 Helpers for slides 2 to 5

<!-- FILE: deck/_x3.js -->
```js
// ===== R2 HELPERS: appended after the preamble and _x2.js for slides 2 to 5 =====
// Text below 22 pt is secondary text (user decision, 16 Oct 2026): never below 18 pt, always named SEC.
function nmS(t,sz){ if(sz<22) t.name="SEC"; return t; }
function sT(p,x,y,w,sz,s,o){ return nmS(T(p,x,y,w,sz,s,o||{}),sz); }
function sTL(p,x,y,sz,s,o){ o=o||{}; if(sz<22&&o.min===undefined) o.min=sz; return nmS(TL(p,x,y,sz,s,o),sz); }
function sRT(p,x,y,w,sz,a,b,o){ return nmS(rt(p,x,y,w,sz,a,b,o||{}),sz); }
function pnl(s,x,y,w,h,title,o){ o=o||{}; const f=addFrame(s,x,y,w,h,o.fill||C.white,C.ink,2,"PANEL: "+title);
  if(title){ TL(f,14,5,22,title,{color:o.tc||C.primary,maxW:w-28}); addRect(f,14,39,w-28,2,C.ink); } return f; }
function note(p,x,y,w,a,b,o){ o=o||{}; const sz=o.size||18, f=addFrame(p,x,y,w,10,o.fill||C.accentTint,C.ink,1.5,"NOTE");
  const t=a?sRT(f,10,4,w-20,sz,a,b,{leadColor:o.lc||C.alert}):sT(f,10,4,w-20,sz,b,{family:"Inter",style:"Bold"}); f.resize(w,Math.ceil(t.height)+8); return f; }
function bx(p,x,y,w,h,s,o){ o=o||{}; const sz=o.size||18, pd=o.pad===undefined?6:o.pad, f=addFrame(p,x,y,w,h,o.fill||C.white,C.ink,o.sw||1.5,o.name||"BOX");
  nmS(addText(f,o.fam||"Inter",o.st||"Bold",sz,o.color||C.ink,s,pd,0,w-2*pd,h,o.align||"CENTER","CENTER"),sz); return f; }
function elb(p,x1,y1,x2,y2,c,th){ th=th||2; c=c||C.ink; const mx=Math.round((x1+x2)/2);
  addRect(p,x1,y1-th/2,Math.max(2,mx-x1),th,c); addRect(p,mx-th/2,Math.min(y1,y2)-th/2,th,Math.abs(y2-y1)+th,c); addRect(p,mx,y2-th/2,Math.max(2,x2-mx),th,c); }
function tbl(p,x,y,cw,heads,rows,o){ o=o||{}; const sz=o.size||18, hh=o.hh||26, rh=o.rh||24, tw=cw.reduce((a,b)=>a+b,0), al=o.align||[];
  const t=addFrame(p,x,y,tw,hh+rh*rows.length,C.white,C.ink,2,"TABLE: "+(o.name||"t")); const h=addFrame(t,0,0,tw,hh,o.hf||C.tint,null,0,"HEAD"); let cx=0;
  heads.forEach((l,i)=>{ nmS(addText(h,"Inter","Bold",sz,C.ink,l,cx+7,0,cw[i]-12,hh,al[i]||"LEFT","CENTER"),sz); cx+=cw[i]; });
  rows.forEach((r,i)=>{ const f=addFrame(t,0,hh+rh*i,tw,rh,(o.fills&&o.fills[i])||(i%2?C.surfaceAlt:C.white),null,0,"ROW"); let x2=0;
    if(o.strip) addRect(f,0,0,5,rh,o.strip[i]);
    r.forEach((v,j)=>{ nmS(addText(f,"Inter",(j===0||(o.bold&&o.bold.includes(j)))?"Bold":"Semi Bold",sz,(o.rc&&o.rc[i])||C.ink,String(v),x2+7,0,cw[j]-12,rh,al[j]||"LEFT","CENTER"),sz); x2+=cw[j]; });
    addRect(t,0,hh+rh*i-1,tw,1.5,C.ink); });
  let vx=0; cw.slice(0,-1).forEach(w=>{ vx+=w; addRect(t,vx-1,0,1.5,hh+rh*rows.length,C.ink); }); return t; }
function lgS(p,x,y,c,label,sz){ sz=sz||18; addRect(p,x,y+4,14,14,c,C.ink,1); const t=sTL(p,x+20,y,sz,label,{family:"Inter",style:"Bold"}); return x+20+t.width+14; }
function cols(p,x,y,w,h,cats,series,o){ o=o||{}; const sz=o.size||18, lh=Math.ceil(sz*1.25), n=cats.length, pitch=w/n, bw=o.bw||Math.min(60,pitch*0.6);
  const top=y+lh+4, base=y+h-lh-2, max=o.max; addRect(p,x,base,w,2,C.ink);
  cats.forEach((c,i)=>{ const cx=x+pitch*i+pitch/2; let acc=0;
    series.forEach(s=>{ const v=s.values[i]; if(!(v>0)) return; const hh=(base-top)*v/max; addRect(p,cx-bw/2,base-(base-top)*(acc+v)/max,bw,Math.max(1.5,hh),s.color,C.ink,1); acc+=v; });
    if(o.totals&&o.totals[i]) sTL(p,0,base-(base-top)*acc/max-lh,sz,o.totals[i],{family:"Inter",style:"Bold",centerAt:cx});
    sTL(p,0,base+2,sz,c,{family:"Inter",style:"Bold",centerAt:cx}); }); return {base,top,pitch}; }
function wf(p,x,y,w,h,items,o){ o=o||{}; const sz=o.size||18, n=items.length, pitch=w/n, bw=o.bw||Math.min(80,pitch*0.6), lh=o.lh||48;
  const top=y+Math.ceil(sz*1.25)+6, base=y+h-lh, Y=v=>base-(base-top)*(v-o.min)/(o.max-o.min); addRect(p,x,Y(0),w,2,C.ink); let run=0;
  items.forEach((it,i)=>{ const cx=x+pitch*i+pitch/2, tot=(i===0||i===n-1); let a,b; if(tot){a=0;b=it[1];run=it[1];} else {a=run;b=run+it[1];run=b;}
    const y1=Math.min(Y(a),Y(b)), bh=Math.max(3,Math.abs(Y(a)-Y(b)));
    addRect(p,cx-bw/2,y1,bw,bh,tot?C.primaryDeep:(it[1]>=0?C.good:C.alert),C.ink,1.5);
    sTL(p,0,y1-Math.ceil(sz*1.25)-2,sz,(it[1]<0?"−":(tot?"":"+"))+Math.abs(it[1]).toFixed(o.dp===undefined?1:o.dp),{family:"Inter",style:"Bold",color:it[1]<0?C.alert:C.primaryDeep,centerAt:cx});
    if(i<n-1) addRect(p,cx+bw/2,Y(run)-0.75,pitch-bw,1.5,C.ink);
    sT(p,cx-pitch/2+3,base+4,pitch-6,sz,it[0],{family:"Inter",style:"Bold",align:"CENTER"}); }); return {Y}; }
function lcS(p,x,y,w,h,series,xl,o){ o=o||{}; const sz=o.size||18, L=x+(o.padL||56), R=x+w-(o.padR||120), Tp=y+8, B=y+h-Math.ceil(sz*1.3)-6;
  const X=i=>L+(R-L)*i/(xl.length-1), Y=v=>B-(B-Tp)*(v-o.yMin)/(o.yMax-o.yMin);
  (o.yTicks||[]).forEach(v=>{ addRect(p,L,Y(v),R-L,1,C.surface); sTL(p,0,Y(v)-Math.round(sz*0.62),sz,String(v),{family:"Inter",style:"Semi Bold",rightAt:L-6}); });
  addRect(p,L,B,R-L,2,C.ink); addRect(p,L,Tp,2,B-Tp,C.ink);
  xl.forEach((lb,i)=>sTL(p,0,B+4,sz,lb,{family:"Inter",style:"Bold",centerAt:X(i)}));
  series.forEach(se=>{ const pts=se.values.map((v,i)=>[X(i),Y(v)]);
    for(let i=0;i<pts.length-1;i++) addDiagonalWire(p,pts[i][0],pts[i][1],pts[i+1][0],pts[i+1][1],se.color,3.5);
    pts.forEach(pt=>addEllipse(p,pt[0]-5,pt[1]-5,10,10,se.color,C.ink,1.5));
    if(se.label){ const l=pts[pts.length-1]; sTL(p,l[0]+10,l[1]-Math.round(sz*0.62)+(se.dy||0),sz,se.label,{family:"Inter",style:"Bold",color:se.color}); } });
  return {X,Y,L,R,Tp,B}; }
function hgrid(p,x,y,rl,cl,cells,o){ o=o||{}; const sz=o.size||18, lw=o.lw||200, cw=o.cw||70, rh=o.rh||24, hh=o.hh||24, W=lw+cw*cl.length, H=hh+rh*rl.length;
  const g=addFrame(p,x,y,W,H,C.white,C.ink,2,"TABLE: "+(o.name||"grid")); addFrame(g,0,0,W,hh,C.tint,null,0,"HEAD");
  if(o.corner) nmS(addText(g,"Inter","Bold",sz,C.ink,o.corner,7,0,lw-12,hh,"LEFT","CENTER"),sz);
  cl.forEach((c,j)=>nmS(addText(g,"Inter","Bold",sz,C.ink,c,lw+cw*j+3,0,cw-6,hh,"CENTER","CENTER"),sz));
  rl.forEach((r,i)=>{ const ry=hh+rh*i; nmS(addText(g,"Inter","Bold",sz,C.ink,r,7,ry,lw-12,rh,"LEFT","CENTER"),sz);
    cells[i].forEach((c,j)=>{ const cf=addFrame(g,lw+cw*j,ry,cw,rh,c.f||C.white,C.ink,1,"CELL"); nmS(addText(cf,"Inter","Bold",sz,c.tc||C.ink,c.t,3,0,cw-6,rh,"CENTER","CENTER"),sz); });
    addRect(g,0,ry-0.75,W,1.5,C.ink); });
  addRect(g,lw-1,0,2,H,C.ink); return g; }
function gnt(p,x,y,lw,cw,rh,cl,rows,o){ o=o||{}; const sz=o.size||18, hy=Math.ceil(sz*1.3)+4;
  cl.forEach((c,j)=>{ sTL(p,0,y,sz,c,{family:"Inter",style:"Bold",centerAt:x+lw+cw*j+cw/2}); addRect(p,x+lw+cw*j,y+hy-2,1.5,rh*rows.length+4,C.surface); });
  const y0=y+hy;
  rows.forEach((r,i)=>{ const ry=y0+rh*i; sTL(p,x,ry+(rh-Math.ceil(sz*1.25))/2,sz,r.label,{family:"Inter",style:"Bold",maxW:lw-10});
    addRect(p,x+lw+cw*r.s+3,ry+3,cw*(r.e-r.s+1)-6,rh-6,r.color||C.primary,C.ink,1.5); }); return y0; }
function fun(p,x,y,w,tiers,o){ o=o||{}; const th=o.th||32, gap=o.gap===undefined?4:o.gap, minW=o.minW||w*0.4, n=tiers.length;
  tiers.forEach((t,i)=>{ const tw=w-(w-minW)*i/Math.max(1,n-1), tx=x+(w-tw)/2, ty=y+i*(th+gap), sz=t.size||20;
    const f=addFrame(p,tx,ty,tw,th,t.f||HG[5-Math.min(4,i)],C.ink,1.5,"TIER");
    nmS(addText(f,"Poppins","Bold",sz,t.tc||C.white,t.t,4,0,tw-8,th,"CENTER","CENTER"),sz); }); }
function bub(p,cx,cy,d,label,fill,fg){ addEllipse(p,cx-d/2,cy-d/2,d,d,fill,C.ink,1.5); const t=sTL(p,0,0,18,label,{color:fg||C.white}); t.x=cx-t.width/2; t.y=cy-t.height/2; return t; }
// ===== END R2 HELPERS =====
```

## Q.3 Values for slides 2 to 5

<!-- FILE: deck/values_ext.py -->
```python
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
```

## Q.4 Slide 2, The Situation

<!-- FILE: deck/slides/s02.js -->
```js
{ const s = await figma.getNodeByIdAsync("S2");
skelBT(s,0,"1 / 4","THE SITUATION",320,V.h1x,V.src2x,{labels:RIBN});
rail(s,64,310,240,"TODAY",C.primaryDeep); rail(s,64,562,232,"MARKET",C.alert); rail(s,64,806,226,"THE CHALLENGE",C.primary);
// band 1: unit economics
kpi(s,116,310,268,112,"100","petrol bikes today",{size:40,ny:2,ly:66});
kpi(s,392,310,268,112,"₹"+V.rev0+" Cr","revenue a year",{size:40,ny:2,ly:66});
kpi(s,116,438,268,112,"₹"+V.rr0+" L","contribution a year",{size:40,ny:2,ly:66,color:C.alert});
kpi(s,392,438,268,112,V.margin0,"of revenue kept",{size:40,ny:2,ly:66,color:C.alert});
const p1=pnl(s,676,310,472,240,"ONE BIKE-MONTH, ₹ THOUSAND");
wf(p1,14,46,444,156,V.wf.map(w=>[w[0],w[1]/1000]),{min:0,max:28,dp:1,lh:28,bw:62});
note(p1,14,204,444,"",V.wf_note);
const p2=pnl(s,1160,310,696,240,"FIVE WAYS TO RUN ONE BIKE, ₹ A MONTH");
tbl(p2,14,46,[236,110,110,110,102],["Bike","Revenue","Vehicle","Left","Margin"],V.ue2,{hh:26,rh:26,name:"unit",align:["LEFT","RIGHT","RIGHT","RIGHT","RIGHT"],fills:[C.alertTint,C.white,C.surfaceAlt,C.tint,C.tint]});
note(p2,14,206,668,"SO WHAT: ",V.ue_note);
// band 2: market, five forces, clients
const p3=pnl(s,116,562,572,232,"LAST-MILE MARKET, INDIA, USD BN");
cols(p3,14,46,240,180,["2025","2026","2031"],[{color:C.primary,values:[3.15,3.66,7.57]}],{max:8,bw:52,totals:["3.15","3.66","7.57"]});
sTL(p3,22,50,18,"15.6% CAGR",{family:"Inter",style:"Bold",color:C.alert});
V.mkt.forEach((m,i)=>{ const y=50+i*58; sTL(p3,268,y,26,m[0],{family:"Poppins",style:"ExtraBold",color:i===2?C.alert:C.primary,maxW:122}); sT(p3,396,y+2,162,18,m[1],{family:"Inter",style:"Bold"}); });
const p4=pnl(s,700,562,572,232,"FIVE FORCES: BUYERS HOLD THE POWER");
const PX=[14,198,382], PY=[46,108,170], RF={H:HR[3],M:HR[2],L:HG[2],X:C.primaryDeep,C:C.surfaceAlt,S:C.accentTint};
V.porter.forEach(q=>{ const dk=q[4]==="X", f=addFrame(p4,PX[q[1]],PY[q[0]],176,56,RF[q[4]],C.ink,dk?2.5:1.5,"FORCE");
  if(q[3]){ sT(f,6,4,164,18,q[2],{family:"Inter",style:"Bold",align:"CENTER",color:dk?C.white:C.ink}); sT(f,6,28,164,18,q[3],{family:"Poppins",style:"Bold",align:"CENTER",color:dk?C.accent:C.ink}); }
  else sT(f,6,6,164,18,q[2],{family:"Inter",style:q[4]==="S"?"Bold":"Semi Bold",align:"CENTER",color:q[4]==="S"?C.alert:C.ink}); });
const p5=pnl(s,1284,562,572,232,"5 OF 6 BIG CLIENTS HAVE EV TARGETS");
tbl(p5,14,46,[128,186,230],["Client","EV target","Progress"],V.clients6,{hh:26,rh:26,name:"clients",fills:[null,null,null,null,null,C.alertTint]});
}
// ===== PART 2 =====
{ const s = await figma.getNodeByIdAsync("S2");
const p6=pnl(s,116,806,600,226,"THE POLICY CLOCK IS ALREADY RUNNING");
addRect(p6,30,90,540,3,C.ink);
V.policy5.forEach((q,i)=>{ const cx=70+i*115; addEllipse(p6,cx-10,81,20,20,q[2]?C.alert:C.primary,C.ink,2);
  sTL(p6,0,50,18,q[0],{family:"Poppins",style:"Bold",centerAt:cx,color:q[2]?C.alert:C.ink}); sT(p6,cx-56,106,112,18,q[1],{family:"Inter",style:"Bold",align:"CENTER"}); });
note(p6,14,160,572,"SO WHAT: ",V.policy_note);
const p7=pnl(s,728,806,1128,226,"THE KEY QUESTION, BROKEN DOWN: A MECE ISSUE TREE");
bx(p7,14,52,212,164,V.tree_root,{fill:C.primaryDeep,color:C.white,size:22,pad:10});
const BC=[C.alert,C.primary,C.blueDeep], BY=[52,110,168];
V.tree.forEach((b,i)=>{ bx(p7,262,BY[i],240,50,b[0],{fill:BC[i],color:C.white,fam:"Poppins",size:20}); elb(p7,226,134,262,BY[i]+25,C.ink,2);
  b[1].forEach((leaf,j)=>{ const ly=BY[i]+j*26; const lf=addFrame(p7,526,ly,588,24,j?C.surfaceAlt:C.white,C.ink,1,"LEAF"); sT(lf,8,1,572,18,leaf,{family:"Inter",style:"Semi Bold"}); elb(p7,502,BY[i]+25,526,ly+12,BC[i],2); }); });
results.push({slide:s.id,total:s.findAll(()=>true).length,top:s.children.length}); }
```

## Q.5 Slide 3, Strategic Alternatives

<!-- FILE: deck/slides/s03.js -->
```js
{ const s = await figma.getNodeByIdAsync("S3");
skelBT(s,1,"2 / 4","STRATEGIC ALTERNATIVES",420,V.h2x,V.src3x,{labels:RIBN});
rail(s,64,310,240,"SIX OPTIONS",C.primaryDeep); rail(s,64,562,232,"TRADE-OFFS",C.primary); rail(s,64,806,226,"VERDICT",C.alert);
// band 1: MECE matrix, options table, Harvey scorecard
const p1=pnl(s,116,310,520,240,"TWO CHOICES, SIX OPTIONS (MECE)");
bx(p1,14,46,120,28,"Fleet / deal",{fill:C.tint});
["Decline","Win, buy","Win, lease"].forEach((c,j)=>bx(p1,134+124*j,46,124,28,c,{fill:C.tint}));
const MF={R:C.primaryDeep,O:C.alertTint,N:C.surfaceAlt,B:HG[1],P:HG[2]};
V.mece.forEach((row,i)=>{ bx(p1,14,74+52*i,120,52,row[0],{fill:C.white}); row[1].forEach((c,j)=>bx(p1,134+124*j,74+52*i,124,52,c[0],{fill:MF[c[1]],color:c[1]==="R"?C.white:C.ink})); });
const p2=pnl(s,648,310,760,240,"SIX OPTIONS ON ONE SET OF NUMBERS");
tbl(p2,14,46,[180,64,78,70,70,78,92,70],["Option","Deal","Capex","Debt","Floor","NPV","Run-rate","gCO2"],V.opts2,{hh:26,rh:24,name:"options",align:["LEFT","LEFT","RIGHT","RIGHT","RIGHT","RIGHT","RIGHT","RIGHT"],fills:[null,null,null,C.alertTint,null,C.tint]});
fine(p2,14,218,732,"₹ lakh; NPV in ₹ Cr, 48 months, 11%; floor = lowest cash; gCO2 at M24");
const p3=pnl(s,1420,310,436,240,"WEIGHTED SCORE, 5 CRITERIA");
bx(p3,14,46,28,44,"#",{fill:C.tint,pad:2});
V.hcrit.forEach((c,j)=>bx(p3,42+64*j,46,64,44,c,{fill:C.tint,pad:3}));
bx(p3,362,46,60,44,"Total",{fill:C.tint,pad:3});
V.cards.forEach((r,i)=>{ const y=90+24*i, hl=i===5, f=addFrame(p3,14,y,408,24,hl?C.tint:(i%2?C.surfaceAlt:C.white),C.ink,1,"ROW");
  sTL(f,0,1,18,String(i+1),{family:"Inter",style:"Bold",centerAt:14}); r.forEach((v,j)=>harvey(f,28+64*j+32,12,18,v-1));
  sTL(f,0,1,18,V.scores[i].toFixed(2),{family:"Inter",style:"Bold",centerAt:378,color:hl?C.primaryDeep:C.ink}); });
// band 2: capture-versus-cost 2x2, the obvious answer, lease against own
const p4=pnl(s,116,562,520,232,"VALUE AGAINST CAPITAL TIED UP");
const L0=62,R0=500,T0=72,B0=194,X=v=>L0+24+(R0-L0-40)*v/220,Y=v=>B0-(B0-T0)*v/7;
sTL(p4,L0,46,18,"NPV, ₹ Cr",{family:"Inter",style:"Bold",color:C.primaryDeep});
addRect(p4,X(110),T0,1.5,B0-T0,C.surface); addRect(p4,L0,Y(3.5),R0-L0,1.5,C.surface);
addRect(p4,L0,B0,R0-L0,2,C.ink); addRect(p4,L0,T0,2,B0-T0,C.ink);
[0,100,200].forEach(v=>sTL(p4,0,B0+3,18,String(v),{family:"Inter",style:"Semi Bold",centerAt:X(v)}));
[2,4,6].forEach(v=>sTL(p4,0,Y(v)-11,18,String(v),{family:"Inter",style:"Semi Bold",rightAt:L0-6}));
sTL(p4,0,B0+3,18,"Capex, ₹ L",{family:"Inter",style:"Bold",centerAt:(X(100)+X(200))/2});
sTL(p4,X(110)+8,T0+2,18,"Value, needs debt",{family:"Inter",style:"Bold",color:C.alert});
sTL(p4,0,B0-26,18,"Capital, less value",{family:"Inter",style:"Bold",rightAt:R0-4});
V.bub.forEach(b=>bub(p4,X(b[0]),Y(b[1]),26+b[3]/5,String(b[2]),b[2]===6?C.primaryDeep:(b[2]===4?C.alert:C.blueDeep),C.white));
const p5=nm(pnl(s,648,562,520,232,""),"PANEL: obvious");
const t5=TL(p5,14,5,22,"THE OBVIOUS ANSWER: BUY BOTH",{color:C.alert,maxW:492}); addRect(p5,14,39,492,2,C.ink); strike(p5,t5,C.alert);
V.obvious.forEach((b,i)=>{ const y=50+i*34; addEllipse(p5,14,y,26,26,C.alert,C.ink,1.5); sTL(p5,0,y,18,String(i+1),{color:C.white,centerAt:27}); sT(p5,50,y+2,456,18,b,{family:"Inter",style:"Semi Bold"}); });
callout(p5,14,156,492,68,"CONCLUSIVELY: ","lease both, and buy only if a lease tops ₹"+V.sw_lease+" a month.",{fill:C.tint});
const p6=pnl(s,1180,562,676,232,"ONE BIKE, ₹ A MONTH: LEASE BEATS OWN");
let lx=lgS(p6,14,46,C.alert,"Petrol"); lx=lgS(p6,lx,46,C.primaryDeep,"Capital"); lgS(p6,lx,46,C.primary,"Running");
cols(p6,14,70,300,156,["Petrol","Bought","Leased"],[{color:C.alert,values:[9000,0,0]},{color:C.primaryDeep,values:[0,V.own_cap+V.own_chg,0]},{color:C.primary,values:[0,V.own_run,3500]}],{max:9500,bw:66,totals:["9,000",V.own_all,V.lease]});
tbl(p6,326,46,[226,110],["Check","₹ a month"],V.costfacts,{hh:26,rh:28,name:"costfacts",align:["LEFT","RIGHT"],fills:[C.tint,null,null,C.alertTint]});
}
// ===== PART 2 =====
{ const s = await figma.getNodeByIdAsync("S3");
const p7=pnl(s,116,806,760,226,"7 SHOCKS FROM THE CASE: CHANGE IN NPV, ₹ L");
hgrid(p7,14,46,V.heat_rows2,["1","2","3","4","5","6"],V.heat.map(r=>r.map(v=>dvCell(v))),{lw:240,cw:76,rh:22,hh:24,corner:"Option",name:"shocks"});
const p8=pnl(s,888,806,520,226,"NPV, ₹ CR, WITH BEAR-BULL RANGE");
const NX=v=>186+300*v/7;
V.npvr.forEach((r,i)=>{ const y=48+i*25; sTL(p8,14,y,18,r[0],{family:"Inter",style:"Bold",maxW:166}); addRect(p8,NX(0),y+3,Math.max(2,NX(r[1])-NX(0)),14,i===5?C.primaryDeep:(i===3?C.alert:C.surface),C.ink,1);
  sTL(p8,NX(r[1])+6,y-2,18,r[1].toFixed(2),{family:"Inter",style:"Bold",color:i===5?C.primaryDeep:C.ink});
  if(r[2]!==null){ addRect(p8,NX(r[2]),y+20,Math.max(2,NX(r[3])-NX(r[2])),2.5,C.ink); addRect(p8,NX(r[2])-1,y+16,2.5,9,C.ink); addRect(p8,NX(r[3])-1,y+16,2.5,9,C.ink); } });
fine(p8,14,202,492,"Bar: base. Line: bear to bull, options 1, 4, 6.");
const c=layered(s,1420,806,436,219,C.primaryDeep,"CARD: verdict");
TL(c,18,8,22,"THE VERDICT: OPTION 6",{color:C.accent,maxW:400});
bl(c,18,50,400,V.verdict,{color:C.white,leadColor:C.accent,dot:C.accent,gap:8});
results.push({slide:s.id,total:s.findAll(()=>true).length,top:s.children.length}); }
```

## Q.6 Slide 4, The ₹1 Crore Decision

<!-- FILE: deck/slides/s04.js -->
```js
{ const s = await figma.getNodeByIdAsync("S4");
skelBT(s,2,"3 / 4","THE ₹1 CRORE DECISION",480,V.h3x,V.src4x,{labels:RIBN});
rail(s,64,310,246,"ALLOCATION",C.primaryDeep); rail(s,64,568,228,"PAYBACK",C.primary); rail(s,64,808,224,"RETURNS",C.alert);
const UC=[C.primaryDeep,C.primary,HG[3],C.accent,C.blue,C.surface,C.alert];
// band 1: deployment by month, sources and uses
const p1=pnl(s,116,310,760,246,"WHEN THE CRORE GOES OUT, ₹ L A MONTH");
let lx=14; V.dep_names.forEach((n,i)=>{ lx=lgS(p1,lx,46,UC[i],n); });
cols(p1,14,72,732,170,V.dep_m,V.dep_series.map((v,i)=>({color:UC[i],values:v})),{max:25,bw:34,totals:V.dep_tot});
sT(p1,540,110,200,18,V.dep_note,{family:"Inter",style:"Bold",color:C.alert});
const p2=pnl(s,888,310,968,246,"SOURCES AND USES, MONTHS 1 TO 24, ₹ L");
sTL(p2,0,46,18,"SOURCES",{family:"Inter",style:"Bold",centerAt:58}); sTL(p2,0,46,18,"USES",{family:"Inter",style:"Bold",centerAt:170});
const SY=72, SK=166/V.su_total; let y=SY;
V.su_src.forEach((q,i)=>{ const h=q[1]*SK; addRect(p2,22,y,72,h,i?C.alert:C.primaryDeep,C.ink,1.5); sTL(p2,0,y+h/2-11,18,q[0],{family:"Inter",style:"Bold",color:C.white,centerAt:58}); y+=h; });
y=SY; V.su_use.forEach((q,i)=>{ const h=q[1]*SK; addRect(p2,134,y,72,h,UC[i],C.ink,1); if(h>=30) sTL(p2,0,y+h/2-11,18,q[1].toFixed(1),{family:"Inter",style:"Bold",color:C.white,centerAt:170}); y+=h; });
addRect(p2,94,SY,40,1.5,C.ink); addRect(p2,94,SY+100*SK,40,1.5,C.ink); addRect(p2,94,SY+166,40,1.5,C.ink);
tbl(p2,226,46,[214,64,56,374],["Use","₹ L","%","Basis"],V.su_rows,{hh:26,rh:24,name:"uses",align:["LEFT","RIGHT","RIGHT","LEFT"],strip:UC});
// band 2: payback and cash
const p3=pnl(s,116,568,760,228,"PAYBACK: THE ₹"+V.used+" L COMES BACK BY MONTH "+V.payback);
const lc=lcS(p3,14,46,732,176,[{values:V.pb_inv,color:C.blueDeep,label:"Deployed ₹"+V.used+" L",dy:12},{values:V.pb_earn,color:C.primary,label:"Earned ₹"+V.pb_last+" L"}],V.pb_x,{yMin:0,yMax:270,yTicks:[90,180,270],padL:46,padR:190});
const xm=lc.X(V.payback/3); dashedV(p3,xm,lc.Tp,lc.B-lc.Tp,C.alert,2.5);
sTL(p3,xm+8,lc.Tp,18,"Month "+V.payback,{family:"Inter",style:"Bold",color:C.alert});
const p4=pnl(s,888,568,968,228,"CASH IN THE BANK, ₹ L: NO LOAN NEEDED");
const idx=[0,3,6,9,12,15,18,21,24], pick=a=>idx.map(m=>m===0?100:a[m-1]);
const ch=lcS(p4,14,46,940,176,[{values:pick(V.cash5),color:C.primary,label:"Lease both ₹"+V.cash5_24+" Cr",dy:-4},{values:pick(V.cash3),color:C.alert,label:"Buy both ₹"+V.cash3_24+" Cr",dy:-8},{values:pick(V.cash0),color:C.blueDeep,label:"Stay petrol ₹"+V.cash0_24+" Cr",dy:10}],idx.map(m=>"M"+m),{yMin:0,yMax:400,yTicks:[100,200,300,400],padL:52,padR:230});
sTL(p4,ch.L+12,ch.Tp+2,18,V.cash_note,{family:"Inter",style:"Bold",color:C.alert});
}
// ===== PART 2 =====
{ const s = await figma.getNodeByIdAsync("S4");
const m=layered(s,116,808,560,217,C.primaryDeep,"CARD: MONEYSHOT");
TL(m,20,6,22,"CONTRIBUTION A YEAR",{color:C.accent,maxW:520});
const a1=TL(m,20,44,44,"₹"+V.rr0r+" L",{family:"Poppins",style:"ExtraBold",color:C.white});
arrow(m,20+a1.width+12,78,20+a1.width+56,78,C.accent,5);
TL(m,20+a1.width+68,38,56,"₹"+V.rr5+" Cr",{family:"Poppins",style:"ExtraBold",color:C.accent,maxW:520-a1.width-68,min:40});
T(m,20,122,520,22,V.ms_line,{family:"Inter",style:"Bold",color:C.white});
addDashedRow(m,20,154,520,C.accent,14,9,2);
V.ms_minis.forEach((k,i)=>{ const x=20+i*176; TL(m,x,158,24,k[0],{family:"Poppins",style:"ExtraBold",color:C.accent,maxW:166,min:22}); sT(m,x,194,166,18,k[1],{family:"Inter",style:"Bold",color:C.white}); });
const p6=pnl(s,688,808,700,224,"HOW ₹"+V.rr0r+" L BECOMES ₹"+V.rr5+" CR A YEAR, ₹ L");
wf(p6,14,46,672,174,V.bridge6,{min:0,max:230,dp:1,lh:46,bw:60});
const p7=pnl(s,1400,808,456,224,"WHAT HAS TO BE TRUE");
tbl(p7,14,46,[214,92,122],["Driver","Base","Breaks at"],V.sw_rows,{hh:26,rh:24,name:"switch",align:["LEFT","RIGHT","RIGHT"]});
note(p7,14,190,428,"",V.sw_note);
results.push({slide:s.id,total:s.findAll(()=>true).length,top:s.children.length}); }
```

## Q.7 Slide 5, Recommendation and Roadmap

<!-- FILE: deck/slides/s05.js -->
```js
{ const s = await figma.getNodeByIdAsync("S5");
skelBT(s,3,"4 / 4","RECOMMENDATION AND ROADMAP",560,V.h4x,V.src5x,{labels:RIBN});
rail(s,64,310,236,"THE ANSWER",C.primaryDeep); rail(s,64,558,236,"ROADMAP",C.primary); rail(s,64,806,226,"RISKS AND KPIs",C.alert);
// band 1: pyramid answer, client funnel, decision tree
const c=layered(s,116,310,620,229,C.primaryDeep,"CARD: answer");
T(c,18,8,584,22,"OUR ANSWER: LEASE BOTH FLEETS, ELECTRIFY FIRST AND KEEP THE CRORE LIQUID",{family:"Poppins",style:"Bold",color:C.accent});
addRect(c,309,78,2,12,C.accent); addRect(c,112,88,396,2,C.accent);
V.pillars.forEach((q,i)=>{ const x=18+i*198; addRect(c,x+93,88,2,12,C.accent); const f=addFrame(c,x,100,188,119,C.primary,C.ink,1.5,"PILLAR");
  sTL(f,10,4,18,q[0],{family:"Poppins",style:"Bold",color:C.accent}); TL(f,10,30,26,q[1],{family:"Poppins",style:"ExtraBold",color:C.white,maxW:168,min:22}); sT(f,10,70,168,18,q[2],{family:"Inter",style:"Bold",color:C.white}); });
const p2=pnl(s,748,310,560,236,"LAND AND EXPAND: THE CLIENT FUNNEL");
fun(p2,14,48,250,V.funnel.map((f,i)=>({t:f[0],size:20,tc:i<2?C.white:C.ink})),{th:32,gap:4,minW:96});
V.funnel.forEach((f,i)=>sT(p2,276,48+i*36+5,270,18,f[1],{family:"Inter",style:"Bold"}));
const p3=pnl(s,1320,310,536,236,"TWO DECISIONS STAY OPEN");
bx(p3,14,94,84,64,"Lease\nnow",{fill:C.primaryDeep,color:C.white,size:20,fam:"Poppins"});
addRect(p3,98,125,28,2,C.ink); diamond(p3,140,126,14,C.accent); sTL(p3,0,146,18,"M3",{family:"Inter",style:"Bold",centerAt:140});
elb(p3,154,126,190,74,C.good,2.5); elb(p3,154,126,190,164,C.alert,2.5);
bx(p3,190,50,150,48,"Contract won",{fill:HG[1]}); bx(p3,190,140,150,48,"Not awarded",{fill:C.alertTint});
addRect(p3,340,73,16,2,C.ink); addRect(p3,340,163,16,2,C.ink);
bx(p3,356,50,166,48,"Option 6\n₹"+V.npv5+" Cr NPV",{fill:C.primaryDeep,color:C.white}); bx(p3,356,140,166,48,"No award\n₹"+V.npv6+" Cr NPV",{fill:C.white});
note(p3,14,196,508,"M36: ","renew under ₹"+V.sw_lease+" a month, else buy");
}
// ===== PART 2 =====
{ const s = await figma.getNodeByIdAsync("S5");
// band 2: Gantt with gates, gate tests
const p4=pnl(s,116,558,1180,236,"24 MONTHS IN EIGHT QUARTERS, FOUR GO OR STOP GATES");
const GC=[C.primaryDeep,C.primary,C.alert,C.primaryDeep,C.accent,C.blueDeep,C.alert];
const y0=gnt(p4,14,46,270,106,22,["Q1","Q2","Q3","Q4","Q5","Q6","Q7","Q8"],V.gantt.map((r,i)=>({label:r[0],s:r[1],e:r[2],color:GC[i]})));
V.gates.forEach(g=>{ const gx=14+270+106*g[1], gy=y0+22*g[2]+11; diamond(p4,gx,gy,11,C.accent); sTL(p4,gx+14,gy-12,18,g[0],{family:"Poppins",style:"Bold"}); });
const p5=pnl(s,1308,558,548,236,"GO ONLY IF");
tbl(p5,14,46,[58,66,396],["Gate","When","Test"],V.gates_rows,{hh:26,rh:28,name:"gates"});
note(p5,14,190,520,"FALLBACK: ",V.fallback);
// band 3: risk heat map, KPI tree, impact
const p6=pnl(s,116,806,620,226,"12 RISKS: IMPACT BY PROBABILITY");
hgrid(p6,14,46,["High","Med","Low"],["Low","Med","High"],V.riskmap.map((r,i)=>r.map((t,j)=>({t,f:[C.white,HR[1],HR[2],HR[3],HR[4]][(2-i)+j],tc:(2-i)+j===4?C.white:C.ink}))),{lw:64,cw:82,rh:50,hh:24,corner:"",name:"risk"});
V.riskctrl.forEach((r,i)=>sRT(p6,334,48+i*44,272,18,r[0],r[1],{leadColor:C.alert}));
const p7=pnl(s,748,806,600,226,"KPI TREE: 14 NUMBERS EVERY MONTH");
bx(p7,14,52,160,166,"CONTRIBUTION\n₹"+V.rr5+" Cr a year",{fill:C.primaryDeep,color:C.white,size:18,fam:"Poppins"});
V.kpitree.forEach((b,i)=>{ const yy=52+i*58; bx(p7,198,yy,150,50,b[0],{fill:[C.primary,C.blueDeep,C.good][i],color:C.white,size:18,fam:"Poppins"}); elb(p7,174,135,198,yy+25); bx(p7,368,yy,218,50,b[1],{fill:C.surfaceAlt,st:"Semi Bold",align:"LEFT"}); addRect(p7,348,yy+24,20,2,C.ink); });
const p8=pnl(s,1360,806,496,226,"IMPACT: PEOPLE, PLANET, PROFIT");
V.impact.forEach((k,i)=>{ const x=14+i*158; TL(p8,x,46,30,k[0],{family:"Poppins",style:"ExtraBold",color:[C.primary,C.good,C.primaryDeep][i],maxW:150,min:22}); sTL(p8,x,92,18,k[1],{family:"Poppins",style:"Bold"}); sT(p8,x,120,150,18,k[2],{family:"Inter",style:"Semi Bold"}); });
note(p8,14,188,468,"",V.dels_note);
results.push({slide:s.id,total:s.findAll(()=>true).length,top:s.children.length}); }
```

## Q.8 Extractor

<!-- FILE: extract_r2.py -->
```python
"""Extract the R2 files from dreamforge-case/PLAN-R2.md. Run from anywhere: PY dreamforge-case/extract_r2.py
Backs up the first-build slides 2 to 5 into deck/slides_v1/ before overwriting them. Never extracts this file itself."""
import re, io, shutil, pathlib
D = pathlib.Path(__file__).resolve().parent
t = io.open(D / "PLAN-R2.md", encoding="utf-8").read().replace("\r", "")
B = re.findall(r"<!-- FILE: ([^\n]+?) -->\n```[a-z]*\n(.*?)\n```\n", t, re.S)
bk = D / "deck" / "slides_v1"; bk.mkdir(parents=True, exist_ok=True); nb = 0
for n in (2, 3, 4, 5):
    src = D / "deck" / "slides" / ("s%02d.js" % n)
    if src.exists() and not (bk / src.name).exists(): shutil.copy2(src, bk / src.name); nb += 1
print("backed up", nb)
n = 0
for rel, body in B:
    if rel == "extract_r2.py": continue
    p = D / rel; p.parent.mkdir(parents=True, exist_ok=True)
    io.open(p, "w", encoding="utf-8", newline="\n").write(body + "\n"); n += 1; print("wrote", rel, len(body))
print("files", n)
```
