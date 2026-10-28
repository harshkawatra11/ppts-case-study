# CaseQuest 2026 (USME DTU): research deliverable and native Figma deck for "The Rise of Cross-Border E-Commerce: Unlocking India's MSME Export Potential"

> **Who executes this.** A main agent (Sonnet class is enough) plus Sonnet sub-agents dispatched with the Agent tool
> (`subagent_type: "general-purpose"`, `model: "sonnet"`), at most three at once. The case is solved in this plan: the
> recommendation, the four answers to the four case requirements, the unit-economics model with every locked number, the
> research section titles, every slide's panels, every prompt and every check. **The job is execution, not design.** When a
> step has a "Done when" test, do not move on until it passes.
>
> **Hard deadline.** The organisers extended submission by one day: upload by **23:59 IST on 28 October 2026** on Unstop,
> as one PDF named `TeamIdeaForge` (case rule 4: "TeamName"). Planning finished about 15:15 IST. Section 10.4 gives the
> clock. If the clock and quality conflict, the clock wins for the deck PDF; the research document may finish after the
> upload because it is not part of the submission.
>
> **What this plan produces**, all under `casequest-usme/` in the repo clone (section 9): (1) `model/cq_model.py` with
> `model_outputs.json`, `model_tables.md` (T1 to T13) and `deck/values.json`; (2) six verified raw research files and a
> source register; (3) `research/casequest-research.md` plus HTML and PDF, at least 45,000 words and 90 tables, humanised;
> (4) a six-slide native Figma Slides deck in a new file (cover with a mind map and logo slots, three core slides, one
> appendix, one thank-you) and the submission PDF `deck/TeamIdeaForge.pdf`; (5) a pushed git branch.
>
> **Verified at planning time (28 Oct 2026, in this container):** the embedded model prints `CHECKS 11/11 HASH 8fe043dc97`
> and `FINDINGS ₹640 ₹1,038 ₹892 ₹398 ₹1,531 ₹959 50 ₹3,57,72,000 960 10`. The Arthik Khayal deck toolchain
> (`arthikkhayal-case/deck/gen.py pre` then `mock`) runs on this Linux container with Node 22 and prints eight `sNN OK`,
> so the copied toolchain in section 15 is known to work here. The patched copy (NS 6, new MUSTK, navy and saffron
> palette) was also run against this model's `values.json` with six stub slides: `pre` wrote the preamble (31,865
> characters) and `mock` printed six `sNN OK`. The plan's own `extract.py` was run on a byte copy of this plan and
> reproduced the model exactly. If a first run does not reproduce these, something was
> retyped or the environment changed: stop and use section 13.

## 0. How to read this plan

| Part | Sections | What it is |
|---|---|---|
| I | 1 to 2 | Context, locked user decisions, ground rules (content, language, humanizer, tags, text sizes) |
| II | 3 to 5 | The solved case: skill application, the argument, the four answers, locked numbers, assumptions, update protocol |
| III | 6 to 7 | Six research lanes (B to G) with questions and seeds; the research document specification |
| IV | 8 to 14 | Skill touchpoints, environment, step table and clock, prompts, calibration, recovery, final checks |
| V | 15 | The Figma deck: toolchain copy and patches, slide-by-slide panel specification, build, logos, export, upload |
| VI | Embedded files | Case transcription with IDs, the model, the humanizer standard |

### Roles

| Role | Model | Does | Never does |
|---|---|---|---|
| Main agent | Sonnet or better | Bootstrap, model run, every Figma call (one at a time), slide scripts, source register, dispatch, assembly, export, push, final report | Change the recommendation, a locked number or a section title outside section 5.3 |
| Verifiers V-B to V-G | Sonnet, at most three at once | Open seed sources, confirm or correct each fact, add rows | Invent a figure, quote or URL; write prose; touch the model |
| Writers W-A to W-F | Sonnet, at most three at once | Write their sections into `research/parts/`, then run the humanizer pass on their own file | Browse, change a number, invent an interview, a quote or a pilot result |
| Critic CR | Sonnet | Scores research then deck with the skill's critique rubric and the humanizer tells | Rewrite sections or slides |

### The Sonnet execution contract

DO
1. Follow section 10 step by step. Log each step in `casequest-usme/build-log.md` with `STATUS: PASS` or `FAIL` and what was fixed.
2. Create embedded files only by extraction (step B2). Never retype a code block from this plan.
3. Take every modelled number from `model/model_outputs.json`, `model/model_tables.md` or `deck/values.json`. Take every external fact from a VERIFIED or CORRECTED row in `research/raw/`.
4. Invoke the `case-competition-deck` skill with the Skill tool at the touchpoints in section 8.1, and apply the humanizer at the touchpoints in section 8.2. Log each.
5. Load Figma guidance before the first `use_figma` call (section 15.2) and pass `skillNames` on every call.

DO NOT
1. Do not change the recommendation, a locked number, an H2 title or an assumption value except through section 5.3.
2. Do not invent interviews, seller quotes, survey results, pilot results, provider quotes, LOIs or agency commitments. The validation plan is a plan and says "not yet run".
3. Do not write an em dash, an en dash, a hook, a rhetorical question, an exclamation mark or a banned word (section 2.2).
4. Do not coin a name for the strategy, a lever, a tier or a programme (standing user rule). Describe each plainly: "the cluster export desk", "the seller tiers", "the pooled return point".
5. Do not read or reuse anything in the old `casequest-usme/` files (user instruction: "every material is scrap" apart from the case PDF). Step B1 moves them aside.
6. Do not add an AI-use statement. Do not add a Co-Authored-By trailer to commits (standing user rule). Do not modify anything outside `casequest-usme/` (reading other folders is fine).

---

# PART I. CONTEXT AND RULES

## 1. Context

### 1.1 The brief (full transcription with IDs in Part VI, file `case/01-case.md`)

CaseQuest is a USME DTU case competition ("Conspectus", contacts Anushka Goel and Bhargavi Sharma) [C-P1]. The case:
cross-border e-commerce lets small sellers reach global buyers without foreign offices or distributors; in 2026 India made
e-commerce exports a policy priority [C-B1]. India has millions of MSMEs, artisans, weavers and home-based producers making
handicrafts, textiles, jewellery, leather goods and home décor, in clusters such as Jaipur, Moradabad and Varanasi, many run
by women and first-generation entrepreneurs [C-B2]. Only a small share sell abroad online [C-E1]. Barriers: registrations,
invoices, shipping bills, customs declarations, tax paperwork across offices and portals; rules that differ by courier,
postal or cargo route; hand-filled forms and agents; effort not worth it for a handful of parcels a month [C-E2]. After
dispatch: customs delays, high small-parcel freight without bulk rates, and returns treated as fresh imports [C-E3, C-E4].
Authorities cannot simply relax controls: low-value parcels raise under-invoicing, incentive misuse and tax leakage risks
and cannot be inspected one by one; destination markets are tightening low-value import rules [C-E5]. The challenge:
"make exporting online simple and affordable for small sellers without weakening customs checks or tax collection. Too much
control keeps small sellers out; too little control opens the door to misuse" [C-E6].

Task [C-R0]: as a Policy Consultant for DPIIT, develop a reform-oriented strategy for the 2026 Inter-Ministerial Committee on
E-Commerce Exports. Four requirements: Market and Access Dynamics [C-R1]; Regulatory and Process Reform [C-R2]; Stakeholder
and Coordination Strategy [C-R3]; Pilot Driven Innovation [C-R4]. Rules: single PDF, three slides excluding cover and
appendix [C-I2]; named TeamName [C-I4]; frameworks allowed [C-I5]; assumptions stated and justified [C-I6]. Judged on
creativity, originality, feasibility, granularity, key challenges addressed [C-J1 to C-J5].

### 1.2 Decisions the user locked (do not relax any)

| Item | Decision |
|---|---|
| Slides | 6: cover, three core (1 Market and access, 2 Rules and integrity, 3 Coordination and pilot), one appendix, thank-you. Case rule: 3 slides excluding cover and appendix; the thank-you slide is permitted as a closing page and carries no new content (state this in `build-log.md`; if the user says otherwise, drop it from the PDF only) |
| Team | TEAM IDEAFORGE: Harsh Kawatra (Delhi Technological University, Team Leader); Dayita Arora (Delhi Technological University, Member). Email line: harshkawatra11@gmail.com. If the user gives Dayita's institution differently, change `TEAM` in `deck/gen.py` only |
| Palette | Government navy and saffron with India-flag green (embedded in 15.1 as `deck/_palette.js`): primary #0B3D91 navy, primaryDeep #061F4A, accent #FF9933 saffron, alert #C62828, good #138808 green, ink #0A0A0A |
| Text sizes | The 22 pt floor in root `CLAUDE.md` is retired (user decision, repeated today): headlines 40 pt (34 minimum), panel titles 22 pt, numerals 26 to 112 pt, secondary text 18 pt named `SEC`; only `SOURCE` (14 pt), `FINEPRINT` and `BIBLIO` (16 pt) and logo captions are smaller |
| Cover | A real mind map with brand logo slots in its nodes (not plain text like the Satoshi Gate cover), no KPI-card row, team table; same team table on the thank-you slide |
| Language | Humanised analytical storytelling: humanizer standard (Part VI, `HUMANIZER.md`) on every piece of prose in the research and on slides. No em dashes, no hooks, no rhetorical questions, no AI phrasing |
| Research depth | No upper limit. Floor 45,000 words and 90 tables (deadline-aware); references for depth and structure: `maudrik-policy/research/pramaan-research.md` (closest: a policy case), `mandamasterminds/`, `iim-lucknow-pivot/`, `lsr-caseforchange/` (the user named it today as a structure reference; read only, copy nothing) |
| Inspo decks (read only) | Prime `hOJVMGv9nIhDmayTT7DmOt`; `e5VEexsLMhDampx7gvhFmM`; `vAIyXmljHlFDuwQo6RsoIN`; `APbOstO4SSU7iAjYIgEeSd`; `JLOOyohkQPUrwXEsxDKz4m`; `YoiazGGOribfg69EjEDIlP`; `7N3v6bAfmXYRrte0zChFDg`; `KJQkGsLgbeLU9vNy24p78y`; `UidfYOpqRKbPxXKJMhftJV` |
| Delivery | Commit only `casequest-usme/` to branch `casequest-usme-build` and push it to `harshkawatra11/ppts-case-study` (the repo is public: tell the user once in the final report). The user pulls it on the PC |

### 1.3 Folder layout after the build

```
casequest-usme/
  6adda57c4d516_casequest_crossborderecom.pdf (never modified)   PLAN.md  extract.py  HUMANIZER.md  build-log.md  DECISIONS.md
  _superseded/ (the old research, model and deck/values.json, moved by B1, never read)
  case/01-case.md
  model/cq_model.py  model_outputs.json  model_tables.md
  research/raw/R-B.md .. R-G.md  sources.md   parts/part-A.md .. part-F.md   assemble.py  build_pdf.py
           casequest-research.md  .html  .pdf  critique.md
  deck/gen.py _palette.js _extras.js _v1.js _sweeps.js setup.js checks.py make_pdf.py logo_rects.js _preview.py fonts/
       slides/s01.js .. s06.js  values.json  (generated) preamble.js mock_figma.js values.js _x2.js _x3.js metrics.json
       derived/ build/ shots/ logos/ slide-ids.json figma.md slide-copy.md derivation.md overrides.json critique.md TeamIdeaForge.pdf
```

## 2. Ground rules

### 2.1 Content integrity

1. The model is a model. Every sentence reporting a model result says "in our model". Inputs are assumptions (T1) checked
   against sources, never measurements. Only the representative item is modelled (a ₹3,960 handmade décor or textile item,
   0.5 kg, sold to an overseas buyer at $45); say so every time a per-order figure appears.
2. No interview, survey, provider quote, pilot result or agency commitment exists. Research §29 and the appendix slide's
   "Not yet run" note are a validation plan with decision rules.
3. The 2026 reforms are the baseline, not our proposal: the ₹10 lakh courier export cap removed from 1 April 2026 after
   the Union Budget 2026-27; the risk-based re-import framework and ECCS returns module; the inventory-based export
   framework with registered Exporters-on-Record from 5 August 2026; postal export benefits. Our proposal starts where those
   end. Never claim to create them.
4. Destination rules move fast (US de minimis suspension from 29 August 2025 and the 2026 tariff changes; the EU €3 duty on
   low-value parcels from 1 July 2026). Destination duties are held equal across lanes in the model (A25) and discussed in
   research §8. Never put a US duty rate on a slide unless Lane E VERIFIED it with a date.
5. Indian units: ₹, lakh, crore, Indian digit grouping (3,57,72,000). The minus sign is U+2212. Statistics keep the
   precision the source supports. USD only where the source is in USD, with the A01 rate stated once per section.
6. Government agencies are named as agencies. No agency, platform or carrier "has agreed" to anything. The compact in
   §20 is proposed.
7. Option scores (T13) are team judgement and we scored our own option: research §11 must show the equal-weight result and
   say the scoring is ours. The ranking holds under equal weights (4.40 against 2.80 for the next option) [T13].

### 2.2 Language standard

- Zero em dashes and en dashes. Ranges use "to". The minus sign is U+2212.
- No hooks (this is a document, not a speech), no rhetorical questions (question marks only in research §32), no
  "imagine", no exclamation marks.
- Banned words: the `BANW` list in `deck/gen.py`, the `BAN` list in `research/assemble.py`, plus: additionally, align
  with, bolstered, crucial, deep dive, delve, enduring, enhance, garner, highlight as a verb, interplay, intricate, key as an
  adjective, landscape, meticulous, pivotal, quietly, robust, showcase, tapestry, testament, underscore, valuable, vibrant,
  unlock (the case title uses "Unlocking": quote it only inside the case title), game-changer, seamless, ecosystem.
- First person plural, declarative, plain words, a number in most sentences, reasoning shown: a consultant's memo to a
  committee of secretaries.

### 2.3 The humanizer standard

The `humanizer` skill lives on the user's PC (`C:\Users\harsh\.claude\skills\humanizer\SKILL.md`) and is not in this
container. Step B3 checks the Skill list: if `humanizer` is listed, invoke it with the Skill tool and use it; otherwise use
`casequest-usme/HUMANIZER.md` (extracted from Part VI), which carries the same tells list and file-mode procedure used in
the user's last two builds. Either way, every writer and every slide-copy change runs the file-mode pass on its own text
before finishing: prose only; tables, numbers, tags and headings unchanged. The pass never adds a fact, number or source.

### 2.4 Tags (every number in the research carries one)

| Tag | Meaning | Resolves to |
|---|---|---|
| `[C-E2]`, `[C-R3]` | Case line by ID | `case/01-case.md` |
| `[A10]` | Model assumption | `model/model_tables.md` T1 and research §30 |
| `[M]` | Model output | `model/model_outputs.json` |
| `[T6]` | Model table | `model/model_tables.md`, research Appendix B |
| `[S12]` | External source | `research/raw/sources.md`, research Appendix A |
| `[C07]` | Raw research row (lanes B to G) | `research/raw/R-C.md`, resolved to an S-ID in `sources.md` |

Lanes are lettered B to G so that `[A##]` always means a model assumption. Case IDs always carry the `C-` prefix with a
hyphen; lane-C raw rows are `C` plus two digits with no hyphen. Do not confuse them.

### 2.5 Files to read before starting (main agent)

1. This plan, fully. 2. Root `CLAUDE.md` sections 0, 5 and 7 (the 22 pt rule there is superseded by 1.2).
3. `.claude/skills/case-competition-deck/SKILL.md` through the Skill tool (touchpoint A). 4. The humanizer (2.3).
5. `arthikkhayal-case/PLAN.md` sections 0, 10, 11 and 15 (the predecessor this plan follows; its toolchain is copied in
   15.1) and `arthikkhayal-case/deck/slides/s01.js` to `s08.js` (code templates for every helper call in 15.3).

---

# PART II. THE SOLVED CASE

## 3. The argument (how the case-competition-deck skill was applied)

### 3.1 Case type and calibration

Policy and trade case (`case_types/policy_and_trade.md`) with an operations core (`case_types/operations.md`: the
unit of analysis is one parcel's cost to serve). The skill is calibrated on three M&A decks; its structural patterns
(contrarian answer, action titles, foreshadowing, symmetric treatment, three scenarios, one moneyshot, double synthesis,
defensive depth, pre-empted weaknesses) are applied with confidence and its frameworks by reasoned extrapolation. Say this
once in research §0. Policy moneyshot format used: a welfare comparison (seller contribution per order before and after,
with the integrity load beside it), per `policy_and_trade.md` "The Policy Moneyshot".

### 3.2 The eight-section logic compressed into three core slides

| Skill section | Where it lives |
|---|---|
| I Executive summary | Slide 2 top strip: the brief-asks / obvious move / what we do / proof / result matrix (row style the user approved on the Asian Paints and Arthik Khayal summaries), plus the moneyshot card |
| II Context and III Actors | Slide 2 market tiles (MSME share of exports, exporting MSMEs, India against China, DNK reach, return rate) and the cover mind map (actors) |
| IV Quantitative analysis | Slide 2: the moneyshot card and waterfall ₹640 to ₹1,038, where ₹3,960 goes by lane, the return-rate by freight heat map |
| V Feasibility | Slide 2 bottom-right "CONCLUSIVELY" option heat matrix (T13); slide 3 integrity heat map; slide 4 risk matrix |
| VI Recommended alternative | Slides 2 (access levers), 3 (seller tiers, one declaration, returns), 4 (compact, pilot) |
| Implementation | Slide 4: six clusters, 12-month Gantt with four gates, KPI tree, scenario bars, budget |
| VII Conclusion | Slide 6 "THEREFORE" card (pure recap, no new number) |
| Appendix | Slide 5: A1 model and assumptions, A2 tornado and scenarios, A3 tier rules and data fields, A4 short forms and sources |

### 3.3 The contrarian recommendation (skill section A; rhetoric section 1)

The brief invites three obvious answers: build one more portal, subsidise small-parcel freight, or exempt low-value parcels
from checks. Since the brief was written, India has already removed the courier value cap, built a returns module and
allowed inventory-based exporters-on-record. What is left is the cost a small seller bears on every single parcel, and the
model shows freight is not the biggest part of it. For the representative ₹3,960 item [T2], a seller today keeps ₹640 an
order after expected returns [T5]. Paperwork and agent fees cost ₹232 an order [T2] and a return costs the seller ₹2,132
[T2], which at a 20% return rate [A10] is ₹426 an order. Freight is ₹1,000 [A05].

Our answer: **move the control from the parcel to the seller, and move the paperwork from the seller to the cluster.**
A cluster export desk files one pre-filled declaration per order from the order data; customs keeps every parcel declared
and risk-scored, and grades sellers into three tiers on their own record (identity, payment realisation, past
discrepancies), so checks fall on the risky few instead of the many; the cluster buys freight and returns on one rate card;
returned parcels go to a pooled return point abroad and unsold stock comes home on one monthly re-import bill. Consolidated
overseas warehousing is kept only as a graduation option for proven SKUs, because in our model it beats today's parcel but
never beats the reformed parcel at the unit level [T5, T12].

| Reason | Portal, subsidy or exemption | Seller-level control, cluster-level paperwork |
|---|---|---|
| Quantitative | A freight subsidy attacks ₹1,000 of a ₹1,531 cost to serve and costs the exchequer per parcel forever [T2] | +₹398 an order in our base case, ₹640 to ₹1,038, with no freight subsidy [T5, T6] |
| Integrity | An exemption below a value line invites splitting and under-invoicing, the misuse the brief names [C-E5] | Every parcel stays declared and risk-scored; incentives release only against matched payment realisation |
| Feasibility | A new portal duplicates ICEGATE, ECCS, DNK and DGFT systems and takes years | Runs on the 2026 reforms, the 1,013 Dak Ghar Niryat Kendras and existing identifiers (IEC, GSTIN, Udyam) [S lane C] |

Foreshadow (rhetoric section 2): research §4 and §9 and slide 2's market tiles name the gap ("the cost sits in paperwork
and returns, not freight") before the recommendation is named; §11 opens with "Conclusively".

### 3.4 The four answers (one per case requirement; symmetric treatment: each has mechanism, owner, number, control)

| Requirement | Our answer | Mechanism | Owner (proposed) | Number in our model | Integrity control |
|---|---|---|---|---|---|
| R1 Market and access [C-R1] | Cluster export desk at the DNK or district export hub; pooled rate card; platform fee transparency; pooled return point abroad; graduation lane for SKUs selling 10 or more a month | Desk staff photograph, list and file; one tender per cluster for parcel freight and returns; platforms publish a seller fee sheet and give sellers their own order data | DoP and DGFT district committees; platforms; carriers | Paperwork ₹232 to ₹38 an order [T2, T3]; freight −12% on the rate card [A28]; seller contribution +₹398 [T5] | Desk cannot release goods; customs keeps authority |
| R2 Regulation and process [C-R2] | One pre-filled e-commerce declaration for postal and courier routes; three seller tiers; incentives and GST refunds released on matched payment realisation; matched duty-free re-import of unsold returns on one monthly bill | Order, invoice, shipping bill, payment and return linked by one seller ID; risk engine scores parcel and seller | CBIC, DGFT, GSTN, RBI and AD banks, DoP | Paperwork 45 to 15 minutes [A07, A27]; returns loss falls [T3] | 100% of parcels declared; random sample in every tier; demotion on any discrepancy |
| R3 Stakeholders [C-R3] | An Inter-Ministerial e-commerce export compact: one seller ID data link, a give-get matrix, a published monthly scorecard, a two-week escalation rule | Each actor gives one thing and gets one thing it wants (CBIC gets data, platforms get supply, carriers get volume, sellers get time) | DPIIT convenes; DoC/DGFT secretariat | Declarations per 10,000 orders: 10,000 parcel bills today, 50 bills on the graduation lane [T9] | Shared scorecard includes integrity indicators |
| R4 Pilot [C-R4] | Six clusters across six regions and product types, 2,400 sellers, 12 months, wave 1 and wave 2 (later access as comparison), four scale gates | Local desks, local-language onboarding, women-led and first-time sellers recorded | DPIIT with district committees and an independent evaluator | ₹3.58 crore [T10]; 960 active sellers base [T11]; ₹37,262 per active seller [T11] | Integrity sample sized by the evaluator; scale only if integrity does not deteriorate |

### 3.5 The three seller tiers (plain names only: "tier 1", "tier 2", "tier 3")

| Tier | Entry | Customs treatment | Seller benefit | Demotion |
|---|---|---|---|---|
| 1 New seller | Valid IEC, GSTIN or GST-exempt status, Udyam or artisan ID, KYC at the desk | Every parcel declared and risk-scored; higher random examination; desk-assisted filing | Desk files for free; first-shipment freight bridge (capped) | Any misdeclaration |
| 2 Established | 25 clean parcels or 3 months with full payment realisation match and no discrepancy | Lower random examination; monthly consolidated incentive claim | Faster incentive release; pooled returns | Any unmatched payment beyond the legal window, any discrepancy |
| 3 Trusted small exporter | 12 months clean, realisation match, physical verification once | Lowest examination in the risk engine; post-clearance audit of a sample; still 100% declared | Monthly filing of claims; priority clearance | Audit finding, unmatched realisation |

The thresholds (25 parcels, 3 months, 12 months) are proposals for the pilot to test, not existing customs categories.
Lane C checks whether any existing CBIC or DGFT category (AEO, Status Holder) already overlaps; if so, research §15 maps
tiers to it.

### 3.6 Twelve insights the research must carry

1. MSME-related products were about 45.8% of India's exports in 2024-25 and exporting MSMEs rose from 52,849 in 2020-21 to
   about 1,73,350 in 2024-25 [Lane B seeds]. 2. India's e-commerce exports are a few billion dollars a year against China's
   ₹-scale gap: China's cross-border e-commerce exports were ¥2.15 trillion in 2024 [Lane F]. 3. The 2026 reforms removed the
   value cap and built returns and EOR routes [Lane C]: the remaining barrier is per-parcel cost. 4. In our model a seller
   keeps ₹640 on a ₹3,960 order [T5]. 5. Paperwork and agent fees, ₹232 an order, are the largest controllable cost after
   freight [T2]; the cluster desk recovers ₹195 [T6]. 6. CBIC cites e-commerce export return rates of 20% to 25% against under
   5% for traditional exports [Lane C seed]; at 30% returns and ₹1,400 freight today's parcel loses money [T7]. 7. Bringing
   a single return home costs more than it recovers for a low-value item [T2, T8 A29]: returns must be resolved abroad.
8. The pooled rate card is the most uncertain lever (tornado top bar) [T8]. 9. Overseas warehousing beats today's parcel
   from about 10 orders per SKU a month [T12] but never beats the reformed parcel at unit level: keep it as graduation, not
   the core. 10. Consolidation turns 10,000 parcel declarations into 50 bills [T9]. 11. Every option ranks below ours
   under both weightings, and the scoring is ours [T13]. 12. The pilot costs ₹37,262 per active seller in the base case and
   ₹59,620 in the bear case [T11]; the bear case still lifts each order from ₹14 to ₹385 [T5].

### 3.7 Frameworks used and where (`references/frameworks.md` and `case_types/policy_and_trade.md`)

| Framework | Section | Layering pattern |
|---|---|---|
| Issue tree, MECE, 5 Whys, Pyramid Principle | §2, §9, §10 | Issue Tree + MECE + Pyramid |
| PESTLE (legal and economic), CAGE for destination distance | §4 to §8 | PESTLE + CAGE |
| Value chain and service blueprint of one export order | §9, §13 | Value Stream Mapping |
| Weighted option filter with weight sensitivity | §11 | MECE option filter |
| Regulatory Impact Assessment (OECD RIA), cost-benefit | §14, §21 to §24 | RIA + CBA |
| Risk management (WCO SAFE and E-commerce Framework of Standards), risk heat map | §15, §16, §28 | Risk heat map |
| Stakeholder power-interest grid, give-get matrix, RACI, two-level game (Putnam) | §19, §20 | Power-Interest + RACI |
| Scenario planning, tornado, pre-mortem | §22, §23, §28 | Scenario + tornado |
| Stepped rollout evaluation, KPI tree, balanced scorecard, three-horizon roadmap | §25 to §27 | KPI tree + roadmap |

## 4. Locked numbers (reference output of the model, hash `8fe043dc97`)

| Key | Value | Table |
|---|---|---|
| Representative order price | ₹3,960 ($45 at ₹88) | T2, A01, A02 |
| Seller contribution per order, today / reformed parcel / warehouse (base) | ₹640 / ₹1,038 / ₹892 | T5 |
| Bear / bull (today, reformed, warehouse) | ₹14, ₹385, ₹176 / ₹1,209, ₹1,623, ₹1,532 | T5 |
| Uplift, reformed over today | +₹398, +62% (base); +₹371 bear; +₹414 bull | T5 |
| Waterfall steps (base) | Paperwork at the cluster desk +₹195; pooled rate card +₹120; returns pooled abroad +₹83 | T6 |
| Cost to serve per order | ₹1,531 today, ₹959 reformed (−37%), ₹1,423 warehouse | T2 to T4 |
| Paperwork and agent cost | ₹232 today, ₹38 reformed | T2, T3 |
| Expected loss when an order is returned today | ₹2,132 | T2 |
| Heat map | today's contribution by return rate 10% to 30% and freight ₹800 to ₹1,400; corner −₹106 | T7 |
| Tornado top bars | A28 rate card −₹70 / +₹60; A07 paperwork +₹38 / −₹25; A09 agent fee +₹30 / −₹20 | T8 |
| Declarations per 10,000 orders | 10,000 parcel declarations; 50 bills on the graduation lane | T9 |
| Pilot | 6 clusters, 2,400 sellers, 12 months, ₹3,57,72,000 (₹3.58 crore) | T10 |
| Pilot outcomes in our model | active sellers 600 / 960 / 1,320; seller gain ₹0.80 / ₹2.29 / ₹4.92 crore; ₹59,620 / ₹37,262 / ₹27,100 per active seller | T11 |
| Warehouse break-even | 15 / 10 / 8 orders per SKU a month against today; never against the reformed parcel at unit level | T12 |
| Option filter | ours 4.45 weighted, 4.40 equal; next best 2.95 (warehouses everywhere) weighted, 2.80 equal | T13 |

## 5. Assumptions and the update protocol

### 5.1 Register
T1 in `model/model_tables.md` lists A01 to A31 with bear, base, bull and basis. Research §30 reproduces it with one sentence
of justification per row (case rule 6 [C-I6]) and the lane that tested it.

### 5.2 Which assumptions verifiers test
Lane D tests A01, A05, A12, A13, A15, A16, A21, A28, A29 (costs and FX). Lane B tests A02, A04, A06 (prices, product cost,
platform fees). Lane C tests A10 (return rate, the CBIC 20% to 25% statement) and the legal basis of A29 and A31. A07, A09,
A27 stay team assumptions labelled as such (no primary time study exists) and the validation plan measures them.

### 5.3 Update protocol (the only way a locked number may change)
1. A verifier marks a row CORRECTED with a value outside the assumption's bear-to-bull range, and names the A-ID.
2. The main agent edits only that tuple in `model/cq_model.py` (base only, unless the source supports a range), logs the
   old and new value in `DECISIONS.md`, reruns M1, and copies the new `CHECKS` and `FINDINGS` lines into `build-log.md`.
3. If any check fails, revert and log "kept assumption, source noted in §30".
4. After a change: rerun `deck/gen.py pre` and `mock`; grep the research parts for every old value in section 4 and fix.
   No update is allowed after step D3 starts (section 10.2), except a factual error a judge would catch.

---

# PART III. RESEARCH

## 6. Research lanes

Schema for every raw file `research/raw/R-<L>.md` (it must match the parser in `research/build_sources.py`): a header with
lane, date and verifier, then one or more tables whose header row is exactly
`| R-ID | Fact | Title | Publisher | URL | Accessed | Quote | Status | Used for |` (Fact carries the value and the date of
the fact; Quote is at most 25 words; Used for is an A-ID or a § number), then `## Gaps` and `## Conflicts`. Status: VERIFIED, CORRECTED (give the corrected value), VERIFIED (search only),
UNVERIFIABLE, NOT YET PUBLISHED. Prefer PIB, CBIC, DGFT, DoP, RBI, GSTN, Ministry of MSME, Ministry of Textiles, Ministry of
Commerce parliamentary replies, WCO, UPU, WTO, OECD, official destination agencies, filings and peer-reviewed work. Flag
`[blog]`, `[vendor]`, `[press]`. Planning-time seeds below came from search snippets: each one must be opened and
confirmed, never copied as verified.

### Lane B: Market, platforms, sellers and clusters (35 to 60 rows)
Questions: MSME share of exports and exporting MSME count (seed: 45.79% FY25; 1,73,350 exporting MSMEs FY25 against 52,849
in FY21; MSME exports ₹12.39 lakh crore FY25; SBI economist and a PIB/parliament reply); Udyam registrations (seed: about
5.93 crore incl. Udyam Assist, Feb 2025) and women-owned share (sources conflict 20.5% vs 40%: record both); India
e-commerce export value (seed: $4 to 5 billion FY23 estimates; GTRI 2023 "$350 billion by 2030" think-tank target; any 2026
government statement); Amazon Global Selling (seed: Indian sellers passed $20 billion cumulative e-commerce exports
2015 to 2025, target $80 billion by 2030; seller count); Etsy and eBay India seller programmes; platform fee pages for A06;
listing prices of 10 representative Indian handmade items on Amazon US and Etsy for A02 (block-print cushion cover, brass
diya, Banarasi silk stole, Kutch embroidered bag, Channapatna toy, bamboo basket); ex-works cost evidence for A04; the
clusters: Jaipur, Moradabad, Varanasi (named in the case), Kutch, Channapatna, and a north-east candidate (Agartala or
Guwahati cane and bamboo): exports, artisan counts, GI tags, Towns of Export Excellence status, Districts as Export Hubs
product mapping, ODOP product. Artisan and weaver counts (Handicrafts and Handloom census or Ministry of Textiles replies).

### Lane C: Indian rules, customs, returns, incentives, tax and payments (45 to 70 rows)
Questions: Budget 2026-27 announcement removing the ₹10 lakh courier cap and CBIC operationalisation from 1 April 2026
(seed: Circular 17/2026 and notification numbers conflict across sources: open CBIC and PIB, record the official numbers);
the risk-based re-import of returned or rejected export goods and the ECCS Return Module (what conditions, what duty, what
benefit neutralisation; the CBIC statement that e-commerce export returns run 20% to 25% against under 5% for traditional
exports, seed via Upstox quoting CBIC); Return to Origin for uncleared imports after 15 days (seed via TaxTMI only);
inventory-based cross-border export framework (seed: Press Note 3 (2026 Series) of 23 July 2026; DGFT Notification
27/2026-27 and Public Notice 25/2026-27 of 5 August 2026, ANF 9A EOR registration; one source cites 30/2026-27 of 20 August:
resolve); postal export benefits (RoDTEP, Duty Drawback, RoSCTL via PBE-3, dates); courier export benefits since 2024; ECCS,
CSB-V, ICEGATE, PBE-3 and DNK portal process; Dak Ghar Niryat Kendras (seed: 1,013 centres; about ₹287 crore of exports
enabled, India Post 2025 year-end review via ANI: confirm on PIB); Districts as Export Hubs and E-Commerce Export Hubs (ECEH)
status; Trade Connect ePlatform; eBRC and the 2023 eBRC system; FEMA export realisation window (the 2026 FEMA export and
import regulations, RBI notification FEMA 23(R)/2026-RB if it exists: verify); GST on exports (LUT, IGST refund, GSTR-1
link); AEO programme tiers and eligibility (does an MSME AEO path exist; overlap with tier 3); CBIC Risk Management System
and its use for courier and postal; Customs Act provisions on post-clearance audit; India Post outward small-packet
discontinuation from 1 January 2026; legal basis for a pooled return point abroad and one monthly re-import bill (A31, A29).

### Lane D: Logistics costs and FX (30 to 50 rows)
Questions: India Post ITPS tariff for the US, UK, UAE and EU for 0.25, 0.5 and 1 kg under the Post Office (Amendment)
Regulations 2026 Table VIII (seed: 2025 USA first-50 g ₹400; USA limit 2 kg); India Post calculator results with date;
courier aggregator 0.5 kg quotes (Shiprocket X, DHL Express, Aramex, FedEx public calculators; record the date, service,
inclusions); bulk air freight India to US, UK, UAE per kg at 100 kg plus (seed: about $3 to $5 per kg standard from a
commercial guide; ₹450 to ₹800 per kg at 100 kg plus from a rate page of unclear date: find a better source such as a
freight index); USPS Ground Advantage, Royal Mail and Aramex UAE last-mile rates for 0.5 kg; 3PL and FBA fulfilment and
storage fees for a small standard item; return processing fees at US and UK 3PLs; the RBI reference rate INR per USD at
28 Oct 2026 (A01); any published cluster or collective freight tender in India (A28 evidence).

### Lane E: Destination rules (25 to 40 rows)
Questions: US de minimis suspension from 29 August 2025, its legal status in 2026 (seed: CBP regulation June 2026; EO 14388
of 20 February 2026 after the Supreme Court IEEPA ruling) and the duty basis for postal shipments from India in October 2026
(sources conflict: record all with dates); India Post US service suspension of August 2025 and resumption (seed: 15 October
2025); EU €3 per item duty from 1 July 2026 to 1 July 2028 (counting rule per tariff line; IOSS scope; handling fee
proposal status); UK £135 VAT rule and marketplace responsibility; UAE import VAT and the AED 1,000 threshold if any;
Australia low-value GST. One row each for what changes for a seller and who pays.

### Lane F: Precedents and integrity evidence (30 to 50 rows)
Questions: Brazil Exporta Fácil (Correios simplified postal export, launched 1999), Peru Exporta Fácil (SUNAT and Serpost,
value limits, uptake), Chile, Colombia, Ecuador versions; China cross-border e-commerce customs codes 9610 (retail export),
9710 (B2B direct), 9810 (overseas warehouse) and volumes (seed: exports ¥2.15 trillion 2024, total ¥2.71 trillion; 2025
total ¥2.84 trillion; H1 2026 overseas-warehouse exports up 3.3 times); WCO Framework of Standards on Cross-Border
E-Commerce (2018) and its risk management standards; UPU electronic advance data (ITMATT) rules; Korea and Indonesia small
exporter programmes; evidence on under-invoicing and incentive misuse in courier exports in India (CAG audits of drawback or
MEIS, DRI cases); evidence that risk-based targeting keeps detection while cutting examinations (WCO, World Bank).

### Lane G: Third-party quotes and stakeholder positions (12 to 25 quotes, 40 words max each, name, title, URL, date)
Quotes supporting simplification with control (Finance Minister Budget speech 2026-27 on courier exports; Commerce Secretary
or DGFT on the EOR framework; FIEO, EPCH, GJEPC on returns and risk-based norms; GTRI (Ajay Srivastava) on e-commerce export
policy; WCO Secretary General on e-commerce risk management; UPU on postal exports). Positions of each stakeholder in 3.4
for the power-interest grid (what each has said it wants), each with a source. Never paraphrase a quote into quotation marks.

### Research toolchain (copy during D0; reading `arthikkhayal-case/` is allowed, editing it is not)
`mkdir -p casequest-usme/research/raw casequest-usme/research/parts && cp arthikkhayal-case/research/{build_sources.py,assemble.py} casequest-usme/research/`, then with the Edit tool:
1. `build_sources.py`: first line title to `# ===== CASEQUEST SOURCES BUILDER v1 (from the Arthik Khayal builder) =====`;
   `arthikkhayal-case` to `casequest-usme` in the docstring; `LANES = "BCDEFGHIJ"` to `LANES = "BCDEFG"`; the docstring's
   `R-B.md .. R-J.md` to `R-B.md .. R-G.md`.
2. `assemble.py`: first line title to `# ===== CASEQUEST ASSEMBLE v1 (from the Arthik Khayal assembler) =====`;
   `arthikkhayal-case` to `casequest-usme` (docstring, two places); `NAME = "arthik-khayal-research"` to
   `NAME = "casequest-research"`; replace the whole `HEADER` string with:
   `"""# Small Parcels, Full Checks: MSME E-Commerce Exports, CaseQuest 2026\n\n**Keep every parcel declared, grade the seller instead of the parcel, and move the paperwork from the seller to a cluster export desk: in our model a ₹3,960 order earns the seller ₹1,038 instead of ₹640, with no freight subsidy**\n\nTeam IdeaForge: Harsh Kawatra (Delhi Technological University, Team Leader), Dayita Arora (Delhi Technological University, Member)\n\nPrepared for: CaseQuest 2026, USME, Delhi Technological University, for DPIIT and the 2026 Inter-Ministerial Committee on E-Commerce Exports, 28 October 2026\n\n---\n\n"""`;
   `MIN_WORDS, MIN_TABLES = 65000, 120` to `MIN_WORDS, MIN_TABLES = 45000, 90`; in `TAGTOK` and in the `rid` regex
   `[B-J]` to `[B-G]` (every occurrence in the file, including inside `pdf()`); in the Appendix A note "section 27" to
   "section 30" and `[F07]` / `R-F.md` examples to `[C07]` / `R-C.md`; add `"unlocking", "relaxed checks"` to `BAN`.
3. `assemble.py` `pdf()`: change the replacement targets (the left side of each `rep` stays, the right side changes):
   `"Activation Without a Bull Market  |  Team IdeaForge"` to `"Small Parcels, Full Checks  |  Team IdeaForge"`;
   `"else 'Activation Without a Bull Market'}"` to `"else 'Small Parcels, Full Checks'}"`; `"Arthik Khayal 2026  |  ecotech, USME DTU  |  Research deliverable"`
   to `"CaseQuest 2026  |  USME DTU  |  Research deliverable"`; the colour line right side to
   `"--p:#0B3D91; --pd:#061F4A; --a:#FF9933; --tint:#E0E8F6;"`; `"color: #1D4FA3; }"` to `"color: #0B3D91; }"`; the team
   right side to `"Harsh Kawatra, Delhi Technological University (DTU), Team Leader<br>Dayita Arora, Delhi Technological University (DTU), Member<br><br>"`.
   Run `pdf` with `PYTHONPATH=/tmp/cq-pylib`. If an `assert` in `rep` fails, the IIM Lucknow renderer changed: report it
   and build the PDF instead with `maudrik-policy/research/build_pdf.py` copied and its title strings edited.
4. W-F also writes `research/parts/appendix-C.md` (`## Appendix C: Glossary of short forms`) and `appendix-D.md`
   (`## Appendix D: Case line coverage`, every C-ID to a section and slide); the assembler requires both.

### After the six files exist (step R2)
1. `python3 -X utf8 casequest-usme/research/build_sources.py` builds `research/raw/sources.md` (one S-ID per unique URL,
   S01 upward, with the R-IDs citing it) and `rid_to_sid.json`. Open `sources.md` and check every row has a URL. 2. List CORRECTED rows that touch an A-ID and apply 5.3. 3. Write "Corrections for writers" and
   "Terminology for writers" in `build-log.md` (official notification numbers, DNK count, EOR terms, return-rate wording).

## 7. Research document specification

### 7.1 Format
Markdown assembled from six parts plus appendices C and D into `research/casequest-research.md` by `research/assemble.py
md`, then HTML and PDF by `research/assemble.py pdf` (toolchain in section 6; run with `PYTHONPATH=/tmp/cq-pylib`). The
title block is the assembler's `HEADER`. Every H2 opens with a bold `**Answer.**` paragraph of two to four sentences. Floor: 45,000
words, 90 tables. Appendix A: source register. Appendix B: model tables T1 to T13 (generated, pasted by `assemble.py`).
Appendix C: glossary of short forms. Appendix D: the case line coverage matrix (every C-ID to a section).

### 7.2 Section outline, owners, minimum words and tables, must contain

| § | H2 title (use exactly) | Owner | Words / tables | Must contain |
|---|---|---|---|---|
| 0 | How to read this report | W-A | 600 / 1 | scope, tags, "in our model" rule, calibration note (3.1), what is verified vs assumed |
| 1 | Every line of the brief and where we answer it | W-A | 1,200 / 2 | a row for every C-ID with section and slide |
| 2 | Move the control from the parcel to the seller, and the paperwork from the seller to the cluster | W-A | 2,400 / 4 | 3.3 table, four answers 3.4, the moneyshot +₹398, honest bear reading (₹14 to ₹385) |
| 3 | India makes the goods the world buys online but ships them one costly parcel at a time | W-A | 1,800 / 3 | Lane B market facts, MSME share, exporting MSMEs, e-commerce export value, China comparison |
| 4 | The 2026 reforms removed the value cap and built the return and EOR routes, so the remaining barrier is per-parcel cost | W-B | 2,200 / 4 | dated reform timeline table; what each does and does not do; the foreshadow sentence |
| 5 | Who sells: artisans, weavers and home-based producers in clusters, many women-led and first-generation | W-B | 1,600 / 3 | segments by product archetype; cluster table; what is unknown |
| 6 | Platforms set the terms small sellers cannot negotiate alone | W-B | 1,600 / 3 | fee tables (A06), account and listing hurdles, data ownership |
| 7 | Postal, courier and cargo routes each carry different forms, benefits and costs | W-B | 1,800 / 3 | route comparison table (forms, benefits, limits, costs) |
| 8 | Destination markets are closing the low-value door, so cheap parcels no longer slip through | W-B | 1,500 / 3 | Lane E rules table and implication per market |
| 9 | One order, eleven steps: where a seller's ₹3,960 goes | W-C | 2,200 / 4 | service blueprint of one order; T2 line by line; cost-to-serve split |
| 10 | Paperwork and returns, not freight, decide whether a parcel pays | W-C | 2,000 / 4 | 5 Whys; issue tree; T7 heat map read; insight 7 on single returns |
| 11 | Conclusively, a portal, a subsidy or an exemption each fail one test the committee cannot waive | W-C | 1,800 / 3 | T13 both weightings, scorer bias disclosed, why each option fails |
| 12 | The cluster export desk takes the paperwork off the seller | W-C | 1,800 / 3 | desk design, staffing, what it may and may not do, ₹195 step |
| 13 | A pooled rate card and a pooled return point abroad cut the cost of each parcel | W-C | 1,800 / 3 | tender design, competition guardrails, returns flow, ₹120 and ₹83 steps, A28 uncertainty |
| 14 | One pre-filled declaration replaces the hand-filled forms on every route | W-D | 1,800 / 3 | data fields; routes; what stays with the seller legally |
| 15 | Three seller tiers put checks on the risky few and keep every parcel declared | W-D | 2,200 / 4 | tier table 3.5; promotion and demotion; mapping to AEO if Lane C finds overlap |
| 16 | Incentives and refunds released only against matched payment close the misuse the brief fears | W-D | 1,800 / 3 | misuse type by control heat map; eBRC and GST matching; sampling |
| 17 | Returns resolved abroad and brought home on one bill stop a return from becoming a fresh import | W-D | 1,600 / 3 | returns decision table; legal basis; benefit neutralisation |
| 18 | Overseas warehousing pays only for SKUs that already sell ten a month | W-D | 1,400 / 3 | T4, T12, when to graduate, inventory risk |
| 19 | Every actor wants something the others hold | W-E | 1,800 / 3 | power-interest grid; stated positions (Lane G); two-level game |
| 20 | An Inter-Ministerial compact gives each actor one duty and one gain, with a published monthly scorecard | W-E | 2,000 / 4 | give-get matrix; RACI; escalation rule; scorecard measures |
| 21 | In our model the reformed parcel lifts a seller's contribution from ₹640 to ₹1,038 an order | W-E | 2,000 / 4 | T3, T5, T6, waterfall read step by step |
| 22 | Three scenarios: even the bear case lifts an order from ₹14 to ₹385 | W-E | 1,500 / 3 | T5 all scenarios; what bear means for adoption |
| 23 | The pooled rate card is the least certain lever, so the pilot tests it first | W-E | 1,400 / 3 | T8 tornado read; what would change the recommendation |
| 24 | Customs sees more data on fewer, better-targeted checks | W-E | 1,400 / 3 | T9; integrity measures; what a pilot cannot prove about rare fraud |
| 25 | Six clusters, six product types, 2,400 sellers and two waves test the reform for ₹3.58 crore | W-F | 2,200 / 4 | cluster table; wave design; T10; inclusion design |
| 26 | Four gates decide whether the reform scales, is revised or stops | W-F | 1,600 / 3 | gate table with thresholds; 12-month Gantt |
| 27 | Success is measured per order, per seller and per declaration | W-F | 1,600 / 3 | KPI tree; definitions; denominators; T11 |
| 28 | What could go wrong and what we do about it | W-F | 1,500 / 3 | risk register probability by impact; pre-mortem |
| 29 | Validation plan: nothing below has been run yet | W-F | 1,200 / 2 | interviews by role and count, provider quotes, time study, decision rules |
| 30 | Every assumption, why we chose it and who tested it | W-F | 1,400 / 2 | T1 with justification and lane |
| 31 | From research to slides | W-F | 800 / 2 | slide crosswalk; archetype mapping (touchpoint D) |
| 32 | Questions the committee will ask, with our answers | W-F | 1,600 / 1 | 15 to 20 Q and A (the only section with question marks) |

Appendix A (bibliography) and Appendix B (model tables) are generated by `assemble.py`; W-F writes Appendices C and D.
There are 33 H2 sections (§0 to §32).

Assembly checks (`assemble.py md`): words at least 45,000; tables at least 90; zero em or en dashes; zero `!`; question marks
only in §32; zero banned words; every `[S..]` resolves in `sources.md`; every H2 starts with `**Answer.**`; at most 25
untagged lines containing a digit.

---

# PART IV. EXECUTION

## 8. Skill touchpoints (mandatory)

### 8.1 case-competition-deck (`skill: "case-competition-deck"`)

| Touchpoint | When | What to do | Pass test |
|---|---|---|---|
| A | Step B3 | Load the skill; read `references/structure.md`, `rhetoric.md`, `archetypes.md`, `frameworks.md`, `case_types/policy_and_trade.md`, `operations.md`. Confirm section 3 carries: contrarian answer, foreshadow, symmetric treatment, three scenarios, one moneyshot, double synthesis, action titles, third-party validation, pre-empted weaknesses | All nine located; calibration note logged |
| B | Every writer prompt | Writers read `rhetoric.md`, `case_types/policy_and_trade.md` and the frameworks assigned in 3.7 | Each part's H2s are the locked findings; each framework appears |
| C | Step R6 | Critique mode on the research (prompt 11.4) | `research/critique.md`; every score under 4 fixed or reason logged |
| D | Step R5 | Slide-mode check of research §31 against `archetypes.md` | Mapping table appended to §31 |
| E | Step Z1 | Polish search on the research: TODO, Insert, Placeholder, TBD, Lorem, xyz, and other case names (ONL, Arthik, SwiftKart, SwasthyaGrid, Dream11, Paytm, Satoshi, Alchemy, Eurogrip, Pramaan, Maudrik) | Nothing outside the bibliography |
| F | Step D1 | Before building: three core headlines are full-sentence findings with a number; slide 2 carries "CONCLUSIVELY", slide 6 "THEREFORE"; exactly one `CARD: MONEYSHOT` (slide 2) | Logged |
| G | Step D6 | Critique mode on the built deck (prompt 11.5) | `deck/critique.md`; allowed fixes applied |
| H | Step D7 | Final polish search on `deck/slide-copy.md` (same list as E) | Nothing found |

The rubric assumes a 100-slide M&A deck. Re-base it and say so: "8 sections present" becomes 3.2; "sample 10 action titles"
becomes all 33 research H2s or all five slide headlines; "appendix depth" becomes "every number has a tag" (research) or
"every number is in `values.json` or a VERIFIED row" (deck). The skill's .pptx step does not apply: the deck is native Figma.

### 8.2 Humanizer

| Touchpoint | When | What | Pass test |
|---|---|---|---|
| HU1 | Each writer, before replying | File-mode pass on its own part (2.3) | Self-check prints 0 tell hits |
| HU2 | Step R4, after `ASSEMBLY PASS` | Main agent samples 15 paragraphs across all parts, counts tells by HUMANIZER §1 to §8, §13, §19 | Under 1 tell per paragraph on average; worst three fixed |
| HU3 | Step D1 | Every slide string in `slides/s01.js` to `s06.js` | No contrast, closer, triad or dash |
| HU4 | Step D6 | The deck critic counts tells in `deck/slide-copy.md` | Zero tells of §1 to §8 |

## 9. Environment (this cloud container, checked 28 Oct 2026)

- Linux, Python 3 (`python3`), Node 22 (`node`), git, curl. Not installed: PyMuPDF (`fitz`), fontTools, markdown-it. Install
  them once into a scratch folder: `pip install -q --target /tmp/cq-pylib fonttools pymupdf markdown-it-py` and prefix every
  Python command that needs them with `PYTHONPATH=/tmp/cq-pylib`. Pillow is present.
- Repo: attach with push access (`add_repo` owner `harshkawatra11`, repo `ppts-case-study`, access `push`), then clone as the
  tool says (expected path `/home/user/ppts-case-study`). Set `REPO=/home/user/ppts-case-study` and run every command from
  `$REPO`. If push access is refused, clone read-only (`GIT_LFS_SKIP_SMUDGE=1 git clone --depth 1
  https://github.com/harshkawatra11/ppts-case-study $REPO`) and deliver files with SendUserFile at the end instead of pushing.
- Branch: `git checkout -b casequest-usme-build` before the first write.
- Python: `python3 -X utf8 <script>`; Bash chains with `&&`. Windows paths in older plans do not apply here.
- Figma tools are `mcp__Figma__*` (not `mcp__figma-mcp__*` as in older plans). The Figma connector is authorised in this
  session.
- The deck generator reads, never writes: `verdict-mnc/deck/preamble.js`, `verdict-mnc/deck/mock_figma.js` and
  `swasthyagrid-gcp/space-beyond/deck/{_x2.js,_x3.js,metrics.json}`.

## 10. Execution sequence

### 10.1 Bootstrap

B0. Attach and clone (section 9), `cd $REPO`, create the branch. Copy this plan byte for byte:
`cp /root/.claude/plans/working-folder-casequest-usme-tidy-moon.md casequest-usme/PLAN.md`.

B1. Move the scrap aside (user instruction): `mkdir -p casequest-usme/_superseded && git mv casequest-usme/research
casequest-usme/model casequest-usme/deck casequest-usme/_superseded/`. Done when `ls casequest-usme` shows only the PDF,
`PLAN.md` and `_superseded/`.

B2. Create `casequest-usme/extract.py` with the Write tool from the block `<!-- FILE: extract.py -->` in Part VI, then run
`python3 -X utf8 casequest-usme/extract.py`. Done when it prints `files 3` (case/01-case.md, model/cq_model.py, HUMANIZER.md).

B3. Touchpoint A; humanizer check (2.3). Start `build-log.md` and `DECISIONS.md` (header `date | step | decision | why`).

### 10.2 Step table

| Step | Who | Action | Done when |
|---|---|---|---|
| B0 to B3 | Main | Bootstrap | `files 3`; touchpoint A logged |
| M1 | Main | `python3 -X utf8 casequest-usme/model/cq_model.py` | 11 PASS lines, `CHECKS 11/11 HASH 8fe043dc97`, the FINDINGS line in the header, three files written |
| R1a | Verifiers B, C, D in background | Prompt 11.1 | Three raw files |
| D0 | Main, while R1a runs | Section 15.1 deck toolchain copy and patches, the research toolchain copy in section 6; `gen.py pre` | `wrote preamble.js`, no assertion |
| D0b | Main | Section 15.2 Figma setup, inspo look (prime deck, 3 slides), cover script `s01.js`, mock, build the cover, screenshot | Cover built and viewed; tell the user the cover is up |
| R1b | Verifiers E, F, G in background | Prompt 11.1 | Three raw files |
| R2 | Main | Section 6 "After the six files exist"; apply 5.3 | Every S-ID has a URL; corrections logged; if the model changed, M1 and `gen.py pre` rerun |
| R3a | Writers W-A, W-B, W-C in background | Prompt 11.2 | Parts pass self-check incl. HU1 |
| D1 to D3 | Main, while writers run | Section 15.3 and 15.4: write s02 to s06, mock, copy, preview, build each slide, screenshot | Five slides built; V1 clean |
| R3b | Writers W-D, W-E, then W-F | Prompt 11.2 | Parts pass self-check |
| D4 to D5 | Main | Sweeps; logos | Sweeps empty; logo log |
| D6 | Critic CR (deck) | Prompt 11.5 | `deck/critique.md`; fixes applied |
| D7, D8 | Main | Final screenshots and `TeamIdeaForge.pdf`; tell the user it is ready to upload | 6-page PDF, viewed |
| R4 | Main | `assemble.py md`; HU2 | `ASSEMBLY PASS` |
| R5 | Main | Touchpoint D; `assemble.py pdf` | PDF exists; two pages viewed |
| R6 | Critic CR (research) | Prompt 11.4 | `research/critique.md`; fixes applied |
| Z1 | Main | Touchpoint E; checklists 14.1 and 15.9; commit and push (14.3); report (14.2) | Branch pushed |

### 10.3 Parallelism rules
- At most three sub-agents at once; on a rate limit, relaunch after the reset time.
- Sub-agents write only their own files. Figma calls are made by the main agent only, one at a time.
- Writers start only after M1 and R2. Writers save after their first two sections and extend.
- The deck does not wait for the research: every slide number comes from `values.json` (locked) or a seed that Lane B to G
  confirms. If a seed used on a slide comes back CORRECTED, fix the slide string through `deck/overrides.json` (15.6).

### 10.4 Clock (IST, 28 Oct 2026)

| By | Milestone |
|---|---|
| 16:00 | B0 to M1 done; R1a running; D0 done |
| 17:00 | Cover built; R1a done; R1b running |
| 18:00 | R2 done; R3a running; slide 2 built and compared with the prime inspo |
| 20:00 | Slides 3 to 6 built; R3b running |
| 21:30 | Sweeps, logos, deck critic fixes done |
| 22:15 | `TeamIdeaForge.pdf` ready; tell the user to upload (do not wait for research) |
| 23:59 | Upload deadline (the user uploads on Unstop; this session cannot) |
| after | R4 to R6, Z1 push |

If 21:30 arrives with a slide unbuilt, build it with fewer panels (drop the lowest panel in its 15.3 list), not later.

## 11. Prompts

### 11.1 Verifier prompt (fill LANE = B to G)

> You are verifier V-LANE for a case-competition research file. Work in the repo at `$REPO` (path in
> `casequest-usme/build-log.md`). Read `casequest-usme/PLAN.md` section 6 (the schema, "Lane LANE" and the seeds), section
> 2.1 and `casequest-usme/case/01-case.md`. Today's date, 28 October 2026, is the access date. For each question and seed:
> open the URL with WebFetch, or find the primary source with WebSearch (mode "standard"; "extended" only when standard comes
> back thin or for a date-sensitive 2026 rule); record one row per fact in the schema; mark VERIFIED, CORRECTED (give the
> corrected value and date), VERIFIED (search only), UNVERIFIABLE or NOT YET PUBLISHED; quote at most 25 words verbatim.
> Add rows from better sources until you reach the lane's range (Lane G: quotes of at most 40 words with name, title, URL,
> date). Prefer PIB, CBIC, DGFT, DoP, RBI, ministries, WCO, UPU, WTO, OECD and official destination agencies. Never invent a
> figure, date, quote, notification number or URL. Never infer a 2026 date from an earlier year. Flag `[blog]`, `[vendor]`,
> `[press]`. Keep conflicting sources and list them under `## Conflicts`. Do not write analysis. Do not convert currency.
> No em dashes or en dashes. R-IDs are `LANE` plus two digits (for example D07). Write
> `casequest-usme/research/raw/R-LANE.md`, saving after your first two questions and extending it. You have about 40
> minutes. Reply with counts (verified, corrected, unverifiable, not yet published, new), a list "Changed numbers" with the
> A-ID where one applies, and at the top any finding that would change a reform's legal basis (Lane C) or a destination
> rule on a slide (Lane E).

### 11.2 Writer prompt (fill PART and SECTIONS)

> You are writer W-PART. Write sections SECTIONS of a consulting-grade research deliverable into
> `casequest-usme/research/parts/part-PART.md` in the repo at `$REPO`.
>
> Skills first. Invoke `case-competition-deck` with the Skill tool and read `references/rhetoric.md`,
> `references/case_types/policy_and_trade.md`, `references/case_types/operations.md` and the `frameworks.md` entries assigned
> to your sections in PLAN 3.7. Then read `casequest-usme/HUMANIZER.md` (or invoke `humanizer` if the Skill list has it) and
> keep its tells list beside you while you write.
>
> Read first, fully: `casequest-usme/PLAN.md` sections 1 to 7; `case/01-case.md`; `model/model_tables.md` (T1 to T13);
> `research/raw/sources.md` and every `R-*.md`; `build-log.md` sections "Corrections for writers" and "Terminology for
> writers"; for register and depth only, `maudrik-policy/research/pramaan-research.md` lines 1 to 200.
>
> Rules. (1) Use the exact H2 titles from PLAN 7.2 as `## N. Title`, `### N.M` for sub-sections, never an H1; open every
> H2 with a bold `**Answer.**` paragraph of two to four sentences. (2) Cover every "Must contain" item and meet the minimum
> words and tables; more is welcome when every paragraph carries evidence. (3) Every number carries a tag: [C-E2], [A10],
> [M], [T6], [S12] or a raw row [C07]. Use only numbers from the case, the model files, PLAN section 4, or a VERIFIED or
> CORRECTED raw row. (4) Do not browse. Compute nothing beyond sums, differences, ratios and products of tagged numbers, and
> show the arithmetic the first time. (5) Write "in our model" for every model result and name the representative item
> (₹3,960, 0.5 kg) when quoting a per-order figure. Never invent an interview, quote, provider rate, pilot result or agency
> commitment; §29 has not been run and says so. (6) Keep the recommendation, the four answers, the tiers and every locked
> number exactly as in PLAN; state the honest readings wherever your sections touch them: the warehouse lane never beats the
> reformed parcel at unit level [T12]; the rate card is the least certain lever [T8]; the option scores are ours [T13]; a
> 2,400-seller pilot cannot measure rare fraud precisely. (7) The 2026 reforms are the baseline (PLAN 2.1 item 3). (8) Coin
> no name for the strategy, a lever, a tier or a programme. No AI-use statement.
>
> Style. First person plural, declarative, plain words, mostly short sentences with some longer ones, reasoning shown, a
> number in most sentences: a consultant's memo to a committee of secretaries. Zero em and en dashes; ranges use "to". No
> hooks, rhetorical questions, "imagine" or exclamation marks; question marks only in §32. Banned words: PLAN 2.2. Expand
> each short form on first use in a section; put an italic expansion line under any table with short-form heads.
> Introduce every table with a sentence and follow it with what it shows. End every slide-feeding section with
> `Exhibit for the deck: ...`.
>
> Humanizer pass before you finish (HU1): HUMANIZER.md file mode on your part: prose only; numbers, tags, tables and
> headings unchanged. Fix, strongest first, the tells it lists, then reread for contrasts, closers, triads, dashes and bold
> labels. Add no fact in this pass.
>
> Save after your first two sections and extend. Self-check before replying:
> `python3 -X utf8 -c "import re,io;t=io.open(r'casequest-usme/research/parts/part-PART.md',encoding='utf-8').read();b=re.split(r'^## 32\.',t,flags=re.M)[0];print(len(t.split()),len(re.findall(r'^\|[ :|-]+\|\s*$',t,re.M)),len(re.findall('[\u2014\u2013]',t)),t.count('!'),b.count('?'),len(re.findall(r'\bnot (?:just|only|merely)\b|\bat its core\b|\bthe real question\b|\bserves as\b|\bpivotal\b|\bcrucial\b|\bdelve\b|\blandscape\b',t,re.I)))"`
> Fix until dashes, exclamations, stray question marks and tell hits are 0 and words and tables meet the minimums. Reply
> with the six numbers, the sections written and any figure you wanted but could not find. Edit no other file.

Assignments: W-A §0 to 3; W-B §4 to 8; W-C §9 to 13; W-D §14 to 18; W-E §19 to 24; W-F §25 to 32 plus Appendices C and D. W-F runs last; add:
"Also read `parts/part-A.md` to `part-E.md` and `deck/slide-copy.md`; §31 and §32 quote only numbers that appear in those
files."

### 11.3 Expansion line (when a part is short)
"Expand sections <list> by <n> words by adding worked examples from the model tables and the raw files and one more table a
section. Do not change any number. Run the humanizer pass again on the added text."

### 11.4 Critic prompt (research)

> You are critic CR. Invoke `case-competition-deck` and read `references/critique_rubric.md`, `rhetoric.md` and
> `case_types/policy_and_trade.md`; read `casequest-usme/HUMANIZER.md`. Read `casequest-usme/PLAN.md` sections 2 to 7, then
> `research/casequest-research.md` in full. Score with the rubric re-based for a research document (say so in one line):
> executive summary §2; context §3 to §8; diagnosis §9 and §10; option filter §11; alternative §12 to §20; quantitative §21
> to §24; feasibility and implementation §25 to §28; conclusion §2 and §31; all 33 H2 titles for full sentence and number;
> "appendix depth" becomes "every number has a tag that resolves". Added tests: (1) every case line in `case/01-case.md` is
> answered with evidence, especially C-E6 (the control trade-off) and each of C-R1 to C-R4; (2) the honest readings (PLAN
> 11.2 rule 6) appear; (3) the 2026 reforms are presented as baseline, never as our idea; (4) the foreshadow works (§4 and
> §10 name the gap before §12 names the desk; §11 opens with "Conclusively"); (5) check 25 numbers against `model_tables.md`
> and the case and list every mismatch; (6) §29 says it has not been run and no quote, interview or pilot result is
> invented; (7) humanizer sample of 15 paragraphs with tell counts and the worst three quoted. Lead with the two strongest
> things; at most eight issues, each with section, current state, fix and why. Never propose changing a locked number, the
> recommendation or an H2 title. No dashes. Write `research/critique.md`.

### 11.5 Deck critic prompt (touchpoint G)

> You are the deck critic. Invoke `case-competition-deck` (read `critique_rubric.md`, `archetypes.md`, `rhetoric.md`,
> `case_types/policy_and_trade.md`) and read `casequest-usme/HUMANIZER.md`. Read the six screenshots in
> `casequest-usme/deck/shots/` (`s1.png` to `s6.png`), `deck/slide-copy.md`, `deck/values.json` and PLAN sections 3 and 15.3.
> Score the deck with the rubric re-based for six slides with three core slides (say so). Check: slide 2's headline carries
> the answer and +₹398; slide 2 carries "CONCLUSIVELY" and slide 6 "THEREFORE" with no new number; exactly one moneyshot;
> each of the four case requirements is visibly answered and labelled R1 to R4; symmetric treatment of the four answers;
> every number is in `values.json` or the seeds of PLAN 15.3; no number without a source on its slide; logos appear only as
> identification with the no-endorsement line; the cover mind map has real nodes, logo slots and the team table; zero
> humanizer tells (§1 to §8) and no banned word. At most five issues; none may change a number, the recommendation or the
> slide count; each fix must be doable through `deck/overrides.json` or 15.6. No dashes. Write `deck/critique.md`.

## 12. What good looks like (calibration for writers and critics)

> For the representative order, a ₹3,960 brass or block-print item weighing half a kilogram [A02, A03], the seller keeps
> ₹640 in our model once expected returns are counted [T5]. Freight is the largest single line at ₹1,000 [A05], yet it is not
> where the seller loses most. Forty-five minutes of forms and a ₹120 agent fee cost ₹232 on every parcel [A07, A09, T2], and
> one return in five [A10] costs ₹2,132 because most returned items are abandoned abroad [A11, T2]. A cluster export desk
> that files a pre-filled declaration from the order data recovers ₹195 of that [T6]. A single rate card for the cluster's
> parcels adds ₹120 if it achieves the 12% saving we assume [A28, T6], and sending returns to a pooled point abroad adds ₹83
> [T6]. Together the seller keeps ₹1,038, a 62% rise, without a rupee of freight subsidy [T5]. The rate card is the least
> certain of the three [T8], so the pilot prices it in the first two months.

Avoid: an adjective without a number; a number without a tag; a table without a sentence before and after; a model result
called a measurement; a reform from 2026 presented as ours; "relaxed checks" anywhere in our proposal; a paragraph ending in
a one-line moral; any sentence that could sit unchanged in a document about another country.

## 13. Recovery table

| Symptom | Action |
|---|---|
| `extract.py` prints fewer than 3 files | `PLAN.md` is not a byte copy. Redo B0 |
| Model hash differs or a check fails | A file was edited. Re-extract and rerun. If only the hash changes and every section 4 number is identical, log and continue; if a number changes, stop and report |
| `ModuleNotFoundError: fitz`, `fontTools` or `markdown_it` | Section 9 install into `/tmp/cq-pylib` and prefix `PYTHONPATH=/tmp/cq-pylib` |
| `gen.py pre` assertion | A read-only library in section 9 changed. Report the failing string; do not edit those libraries |
| `gen.py mock` FAIL | Read the warning; apply 15.6; rerun until `sNN OK` |
| A lane has under 20 VERIFIED rows | Re-dispatch once: "Find 15 more rows from primary sources for questions <list>" |
| `ASSEMBLY FAIL` | Read the JSON; fix banned words or dashes by hand; re-dispatch the owner for words or tables (11.3) |
| Figma not authorised or rate limited | Run `whoami`; if not authorised, stop and ask the user to authorise the Figma connector in claude.ai settings |
| `setup.js` returns more than 6 slides | List them in `deck/figma.md` and ask the user before removing any |
| Push refused | Read the `github.access` documentation page with `read_documentation`, tell the user, and send `TeamIdeaForge.pdf`, the research PDF and the model tables with SendUserFile |

## 14. Final checks, report and delivery

### 14.1 Stage 1 checklist (research)
- [ ] M1 prints `CHECKS 11/11 HASH 8fe043dc97` (or the logged new hash after a 5.3 update).
- [ ] Six raw files with `## Gaps` and `## Conflicts`; `sources.md` has a URL for every S-ID.
- [ ] `assemble.py md` prints `ASSEMBLY PASS`; HU2 logged; research PDF exists and two pages were viewed.
- [ ] §1 has a row for every case ID; §29 opens by saying nothing has been run; honest readings present.
- [ ] No AI-use statement; no coined name; 2026 reforms framed as baseline.

### 14.2 Reports to the user
Deck ready (as soon as D8 passes, before the research): the Figma URL, the path of `TeamIdeaForge.pdf`, the instruction
"upload this file on Unstop before 23:59 IST; the file name must be your team name", the three biggest residuals. Final: research word
and table counts, critic scores, every corrected seed and conflict, the branch name and the pull command:
`git fetch origin casequest-usme-build && git checkout casequest-usme-build`. Say once that the repo is public.

### 14.3 Commit and push
`git add casequest-usme && git commit -m "CaseQuest USME: research, model and native Figma deck"` (no Co-Authored-By
trailer: standing user rule), then `git push -u origin casequest-usme-build`, retrying up to four times on network errors
(2 s, 4 s, 8 s, 16 s). Never push to `main`. Do not open a pull request.

---

# PART V. THE FIGMA DECK

## 15. Deck

### 15.1 Toolchain copy and patches (step D0)

Copy from the predecessor (reading is allowed; never edit `arthikkhayal-case/`):
`mkdir -p casequest-usme/deck/slides && cp arthikkhayal-case/deck/{gen.py,_extras.js,_sweeps.js,_v1.js,setup.js,checks.py,make_pdf.py,logo_rects.js} casequest-usme/deck/`
(the M1 run already wrote `casequest-usme/deck/values.json`). Then apply these patches with the Edit tool, each exactly once,
and log them in `DECISIONS.md`:

1. `deck/gen.py`: replace the first line's title with `# ===== CASEQUEST USME DECK GEN v1 (from the Arthik Khayal generator) =====`;
   every `arthikkhayal-case/deck` in the docstring with `casequest-usme/deck`; `DECK = pathlib.Path("arthikkhayal-case/deck")`
   with `DECK = pathlib.Path("casequest-usme/deck")`; `NS = 8` with `NS = 6`.
2. `deck/gen.py` `ABSENT`: replace the list with
   `["Anuj", "Gursimran", "Aakriti", "Ranvir", "ONL", "Arthik", "YES Securities", "SwiftKart", "SwasthyaGrid", "HarvestBox", "Dream11", "Paytm", "Liminal", "Satoshi", "Alchemy", "TiO2", "Eurogrip", "Setu", "Pramaan", "TODO", "TBD", "Lorem", "xyz", "undefined", "NaN", "Rs ", "Rs.", "ChatGPT"]`.
3. `deck/gen.py` `TEAM`: `{"name": "TEAM IDEAFORGE", "rows": [["Harsh Kawatra", "Delhi Technological University", "Team Leader"], ["Dayita Arora", "Delhi Technological University", "Member"]]}`.
4. `deck/gen.py` `MUSTK`: `["today", "reformed", "uplift", "uplift_pct", "budget_cr", "sellers", "hash"]` (the sweeps assert each value appears somewhere in the deck).
5. `deck/gen.py` `BANW`: append `"unlocking", "ecosystem", "relaxed checks"` (keep the rest). Note `"unlock"` is already in the list; the case title "Unlocking" must therefore not appear on slides (the cover uses our own title).
6. `deck/gen.py` `pre()`: the line `for f in ("_x2.js", "_x3.js", "metrics.json"): wr(f, rdx(SB / f), True)` stays. In
   `preview()` change `spec_from_file_location("pv", SB / "preview.py")` to `spec_from_file_location("pv", DECK / "_preview.py")`.
7. `deck/_preview.py`: `cp swasthyagrid-gcp/space-beyond/deck/preview.py casequest-usme/deck/_preview.py`, then replace the
   two lines starting `UF = ` and `FS = ` with `UF = DECK / "fonts"` and `FS = DECK / "fonts"`, and the `FILES` dict values
   with `[UF / "Poppins-Bold.ttf"]`, `[UF / "Poppins-ExtraBold.ttf"]`, `[FS / "Inter-SemiBold.ttf"]`, `[FS / "Inter-Bold.ttf"]`.
   Download the fonts: `mkdir -p casequest-usme/deck/fonts && cd casequest-usme/deck/fonts && for f in Bold ExtraBold; do curl -sL -o Poppins-$f.ttf https://github.com/google/fonts/raw/main/ofl/poppins/Poppins-$f.ttf; done && curl -sL -o Inter.ttf "https://github.com/google/fonts/raw/main/ofl/inter/Inter%5Bopsz,wght%5D.ttf" && cd $REPO`.
   Inter on Google Fonts is a variable font; create the two static instances:
   `PYTHONPATH=/tmp/cq-pylib python3 -c "from fontTools.ttLib import TTFont;from fontTools.varLib.instancer import instantiateVariableFont as I;import sys;d='casequest-usme/deck/fonts/';[I(TTFont(d+'Inter.ttf'),{'wght':w,'opsz':14}).save(d+n) for w,n in ((600,'Inter-SemiBold.ttf'),(700,'Inter-Bold.ttf'))]"`.
   If any download fails, skip previews (they are a layout aid only) and rely on the Figma screenshots; log it.
8. `deck/setup.js`: replace `8` with `6` in the three places (`< 8`, `slice(0, 8)` twice) and the names array with
   `["01 Cover", "02 Market and Access", "03 Rules and Integrity", "04 Coordination and Pilot", "05 Appendix", "06 Thank You"]`.
9. `deck/_extras.js`: replace the line `const RIBN=["SUMMARY","DIAGNOSIS","STRATEGY","IMPACT","EXECUTION"];` with
   `const RIBN=["R1 MARKET AND ACCESS","R2 RULES AND INTEGRITY","R3 + R4 COORDINATION AND PILOT"];` and the `RIBAP` line with
   `const RIBAP=["A1 MODEL","A2 SENSITIVITY","A3 TIER RULES","A4 SHORT FORMS AND SOURCES"];`.
10. `deck/make_pdf.py`: `range(1, 9)` to `range(1, 7)`; `TeamIdeaForge_ArthikKhayal.pdf` to `TeamIdeaForge.pdf` (two places).
11. `deck/checks.py`: replace `ALLOW` with `{"Team IdeaForge", "Delhi Technological University", "Dak Ghar Niryat Kendra", "Dak Ghar Niryat Kendras", "Inter Ministerial Committee", "Exporter on Record", "Department of Posts", "India Post", "Amazon Global Selling"}`.
12. `deck/_palette.js`: overwrite with the block below (same role names, so every helper works):
```js
const C = {
  primary:{r:0.043,g:0.239,b:0.569}, primaryDeep:{r:0.024,g:0.122,b:0.290},
  accent:{r:1.0,g:0.600,b:0.200}, alert:{r:0.776,g:0.157,b:0.157},
  tint:{r:0.878,g:0.910,b:0.965}, alertTint:{r:0.988,g:0.894,b:0.894},
  blue:{r:0.169,g:0.396,b:0.769}, blueDeep:{r:0.031,g:0.169,b:0.400}, blueTint:{r:0.902,g:0.933,b:0.984},
  good:{r:0.075,g:0.533,b:0.031}, goodTint:{r:0.878,g:0.957,b:0.875}, accentTint:{r:1.0,g:0.937,b:0.867},
  ink:{r:0.039,g:0.039,b:0.039}, surface:{r:0.929,g:0.929,b:0.929},
  surfaceAlt:{r:0.965,g:0.965,b:0.965}, white:{r:1,g:1,b:1}
};
const HG=[null,{r:0.925,g:0.945,b:0.980},{r:0.784,g:0.839,b:0.937},{r:0.553,g:0.659,b:0.855},{r:0.243,g:0.400,b:0.698},{r:0.024,g:0.122,b:0.290}];
const HR=[null,{r:1,g:0.949,b:0.949},{r:0.976,g:0.800,b:0.800},{r:0.910,g:0.502,b:0.502},{r:0.776,g:0.157,b:0.157}];
```
13. `gen.py pre` adds `team` and `must` to the values. Model numbers are read as `V.<key>` (keys listed in section 4 and
    printed by `python3 -c "import json;print(sorted(json.load(open('casequest-usme/deck/values.json'))))"`). Numbers that
    are not model outputs (the seeds in 15.3) are written as literal strings in the slide files and listed in
    `deck/derivation.md` with their lane row; a correction goes through `overrides.json`. Integer values (`V.act.*`,
    `V.orders.*`, `V.clusters`) must be wrapped as `String(...)` or formatted with `fmtN(...)` before they go into a table cell.

Part size: the preamble alone is about 32,000 characters and each composed part must stay under 49,900, so keep the
slide code of each part under about 16,000 characters; split dense slides into three parts.

Run `python3 -X utf8 casequest-usme/deck/gen.py pre`. Done when it writes `preamble.js`, `mock_figma.js`, `values.js` with
no assertion. Every slide file starts `{ const s = await figma.getNodeByIdAsync("SN"); skelBT(...)` (or `wipe(s); coverTop(s);`
for the cover), splits into parts with the exact line `// ===== PART =====`, and each later part starts
`{ const s = await figma.getNodeByIdAsync("SN");` and ends with `}`. The last part ends with
`results.push({slide:s.id,total:s.findAll(()=>true).length,top:s.children.length}); }`. Copy that structure from
`arthikkhayal-case/deck/slides/s05.js`.

### 15.2 Figma setup (step D0b)

Tools: one ToolSearch with `select:mcp__Figma__whoami,mcp__Figma__create_new_file,mcp__Figma__create_session,mcp__Figma__use_figma,mcp__Figma__get_screenshot,mcp__Figma__upload_assets`.
Guidance: Skill `figma-use` if listed, otherwise `ReadMcpResourceTool` with the Figma server and uri
`skill://figma/figma-use/SKILL.md` (and `skill://figma/figma-use-slides/SKILL.md` if it exists); pass
`skillNames: "resource:figma-use"` (plus `,resource:figma-use-slides` when read) on every `use_figma` call. The deck
positions nodes absolutely through the helper library; that overrides any auto-layout advice. `get_metadata` does not work
on Slides files.

| Step | Action | Done when |
|---|---|---|
| F0 | Inspo look (read only): `create_session` with fileKey `hOJVMGv9nIhDmayTT7DmOt`; a read-only `use_figma` listing the first 8 slide ids and names; `get_screenshot` of slide 1 and two dense content slides at `maxDimension: 1600`; Read them. Note in `deck/figma.md`, in five lines, the density, chart forms and how the cover mind map uses images. Do the same for one slide of `KJQkGsLgbeLU9vNy24p78y` (Asian Paints summary row matrix) and `7N3v6bAfmXYRrte0zChFDg` (winning SwiftKart, slide `2:6`). Twenty minutes at most | Notes written |
| F1 | `whoami`. If exactly one plan has an editor seat, use it; if several, ask the user which team. `create_new_file` with `editorType: "slides"`, name `CaseQuest 2026 | Team IdeaForge`. `create_session` with the new key | Key in `deck/figma.md` and `build-log.md` |
| F2 | `use_figma` with the full text of `deck/setup.js` | `count: 6`, six ids, `fontsOk` all true. Write `deck/slide-ids.json` as `{"S1": id1, ..., "S6": id6}` |
| F3 | Write `slides/s01.js` (15.3 slide 1), `gen.py mock 1`, `gen.py preview 1`, `gen.py bind 1`, run `build/slide_01_1.js` and `build/slide_01_2.js`, then `build/v1_01.js` | Each part `warnings: []`; V1 `clean: true` |
| F4 | `get_screenshot` slide 1 at `maxDimension: 1600`; save to `deck/shots/s1.png` with curl from the returned URL; Read it | Mind map, title, verdict card and team table as specified. Tell the user the cover is up |

### 15.3 Slide-by-slide specification (step D1: write `slides/s01.js` to `s06.js` from this)

Conventions for every slide. Canvas 1920 by 1080. The skeleton `skelBT(s, active, counter, chip, chipW, title, source)`
draws the ribbon (y 40), the chip (y 118), the counter chip and the 40 pt headline at y 188 (up to two lines, ends near
y 290). Content starts at y 310 and ends by y 1032; the source line sits at y 1050. Panels: `pnl(s,x,y,w,h,TITLE)` returns
a frame whose inside coordinates start at (0,0); the title occupies the first 40 px, so content inside starts at y 44 to 52.
Gutters 16 px. Every number comes from `V.<key>` (values.json) or a literal seed listed for that slide; copy helper usage
from the Arthik Khayal slide named in brackets. Use `T`/`sT` for wrapped text (22 pt / 18 pt), `TL`/`sTL` for single lines,
`tbl` for tables, `hgrid` with `heatN`/`heatP`/`ynCell` for heat maps, `wfB` for waterfalls, `cols` for stacked or grouped
columns, `torS` for tornados, `gnt` for Gantt, `tile` for KPI tiles, `rail` for band rails, `note` for so-what callouts,
`actorL`/`logoSlot`/`imgSlot` for logos. If a helper's argument order is unclear, open `preamble.js`, `_x2.js` or `_x3.js`
and read its definition before writing the call; never guess.

**Slide 1 Cover** [template: `arthikkhayal-case/deck/slides/s01.js`, keep its two-part structure]
- Part 1: `wipe(s); coverTop(s);` Title `TL(s,64,150,112,"SMALL PARCELS,",{ExtraBold,maxW:920,min:80})`; second line
  `TL(s,64,276,112,"FULL CHECKS",{ExtraBold,color:C.primary,maxW:920,min:80})`. Subtitle `T(s,64,410,920,22,"A reform
  strategy for DPIIT and the 2026 Inter-Ministerial Committee on E-Commerce Exports: simple, affordable online exporting for
  MSMEs and artisans without weakening customs checks or tax collection",{Poppins Bold, primaryDeep})`.
- Verdict card `layered(s,64,500,920,270,C.primaryDeep,"CARD: verdict")`: accent 24 pt "OUR ANSWER: KEEP EVERY PARCEL
  DECLARED, GRADE THE SELLER INSTEAD OF INSPECTING THE PARCEL, AND MOVE THE PAPERWORK FROM THE SELLER TO A CLUSTER EXPORT
  DESK." White 22 pt at y 166: "In our model: a ₹3,960 order earns the seller "+V.reformed+" instead of "+V.today+" ("+
  V.uplift_pct+" more) with no freight subsidy. Pilot: "+V.clusters+" clusters, "+V.sellers+" sellers, "+V.budget_cr+"."
- `TL(s,64,786,40,V.team.name,{ExtraBold,primary})`; `teamBT(s,64,846,[230,520,170])`; `sT(s,64,1008,920,18,
  "harshkawatra11@gmail.com  |  CaseQuest 2026, USME DTU",{Inter Bold, primaryDeep})`; `srcLine(s,"Source: case brief |
  CBIC and DGFT 2026 notifications | team model "+V.hash+" | logos identify organisations in the analysis; no partnership
  or endorsement is implied")`.
- Part 2: mind map panel `addFrame(s,1016,150,840,882,C.white,C.ink,2,"PANEL: mind map")`, title "WHO DECIDES WHETHER A
  SMALL PARCEL LEAVES INDIA", rule, then `T(m,16,60,808,22,"MSMEs make about 46% of India's exports; e-commerce carries a
  small slice. Eight actors shape every parcel.",{Poppins Bold, primaryDeep})` (seed B: 45.79% rounded; if Lane B corrects
  it, override). Eight `actorL` nodes on the same positions as the template `P` array, hub at (420,452), hub ellipse
  210 px `C.primaryDeep` with `TL` "MSME SELLER" (white, 26 pt, centred), `TL` "IN A CLUSTER" (accent, 26 pt) and `sTL`
  "Jaipur, Moradabad, Varanasi" (white, 18 pt). Nodes (brands; title; sub):
  1 `["DPIIT","DGFT","CBIC"]`; "POLICY AND CUSTOMS"; "rules, risk engine, incentives"
  2 `["India Post","DHL","Shiprocket"]`; "POST AND CARRIERS"; "1,013 Dak Ghar Niryat Kendras" (seed C)
  3 `["Amazon","Etsy","eBay"]`; "PLATFORMS"; "fees, listings, buyer data"
  4 `["RBI","GSTN"]`; "PAYMENTS AND TAX"; "realisation, refunds, LUT"
  5 `["IMG:Artisan at work"]`; "THE SELLER"; "women-led, first-generation"
  6 `["EPCH","Ministry of MSME"]`; "SELLER BODIES"; "councils, clusters, credit"
  7 `["US CBP","European Commission","HMRC"]`; "DESTINATIONS"; "de minimis gone, €3 EU duty"
  8 `["IMG:Jaipur block print","IMG:Moradabad brass"]`; "CLUSTERS"; "six pilot sites"
  Bottom chip row (template's FIND/FUND/START row) with three chips: "DESK: files for the seller", "TIERS: checks follow
  risk", "POOL: one rate card"; arrows between. `fine(m,16,850,808,"Logos and images identify organisations and places in
  the analysis; no partnership or endorsement is implied.")`.

**Slide 2 Core 1, Market and access (R1)** [templates: `s02.js` (summary row matrix), `s05.js` (moneyshot, waterfall), `s03.js` (heat grid, tiles)]
- `skelBT(s,0,"1 / 3","R1 MARKET AND ACCESS",420, HEADLINE, SOURCE)`.
  HEADLINE: "Paperwork and returns, not freight, decide whether a small parcel pays: a cluster desk, one rate card and a
  pooled return point lift a seller's margin from "+V.today+" to "+V.reformed+" an order with no freight subsidy"
  SOURCE: "Source: team model "+V.hash+" (T2 to T7, T13), representative ₹3,960 item, 0.5 kg | CBIC on e-commerce return
  rates | SBI economist and Ministry of MSME on MSME exports | GACC on China | India Post year-end review 2025"
- Band 1 (y 310 to 470), a two-row matrix in the Asian Paints style across x 64 to 1240 [s02 lower matrix], header 34 px,
  rows 62 px, cell text 18 pt; columns
  "THE BRIEF ASKS", "THE OBVIOUS MOVE" (struck through: draw a 3 px `C.alert` line across the text), "WHAT WE DO",
  "PROOF", "RESULT". Rows:
  R1 "Better access and bargaining" | "Freight subsidy per parcel" | "Cluster desk lists and files; one rate card per cluster; platforms publish a seller fee sheet" | mini bar today ₹232 vs ₹38 paperwork | V.uplift+" an order"
  R2 "Lower shipping and return cost" | "Overseas warehouse for every cluster" | "Pooled return point abroad; warehouse only for SKUs selling "+V.be_sku+"+ a month" | "warehouse "+V.wh+" vs reformed "+V.reformed | V.cts_today+" to "+V.cts_ref+" cost to serve"
  (Two rows only in band 1; R2 to R4 answers appear on slides 3 and 4.) The "PROOF" cell carries a mini bar pair drawn
  with two `addRect` bars (today `C.alert`, after `C.good`) scaled to the larger value at 140 px, with the values in 18 pt.
- Market tiles strip (y 480 to 560, x 64 to 1240): five `tile`s 224 by 80 with 14 px gaps, numbers 30 pt, labels 18 pt.
  Seeds (literal strings; Lane B, C, F confirm or correct through `overrides.json`): "45.79%" / "of exports from MSMEs,
  FY25"; "1,73,350" / "exporting MSMEs, FY25"; "1,013" / "Dak Ghar Niryat Kendras"; "20% to 25%" / "e-commerce export
  returns (CBIC)"; "¥2.15 trn" / "China e-commerce exports, 2024". Each goes in `derivation.md` with its lane row.
- Moneyshot card at x 1256, y 310, w 600, h 250: `layered(s,1256,310,600,250,C.white,"CARD: MONEYSHOT",C.accent)`;
  title "SAME ORDER, SAME CHECKS, MORE LEFT FOR THE SELLER"; giant numeral `TL(...,96,"+"+V.uplift_pct,{ExtraBold,color:C.good})`;
  line "per ₹3,960 order in our model: "+V.today+" to "+V.reformed; three tiles: "Paperwork "+V.admin_today+" to "+V.admin_ref,
  "Cost to serve "+V.cts_today+" to "+V.cts_ref, "Bear case "+V.bear_today+" to "+V.bear_ref.
- Band 2 (y 576 to 1032), three panels:
  P1 x 64 w 600 "FROM "+V.today+" TO "+V.reformed+": WHERE THE GAIN COMES FROM" `wfB` with `V.wf` (5 bars: start, three
  steps, end), labels under bars wrapped at 18 pt; note under it: "Rate card is the least certain step (appendix A2)".
  P2 x 680 w 560 "TODAY'S MARGIN BY RETURN RATE AND FREIGHT, ₹ PER ORDER" `hgrid` rows `V.grid_r`, cols `V.grid_f`, cells
  from `V.grid` coloured with a diverging rule (negative `C.alertTint` with alert text; 0 to 300 `HG[1]`; 300 to 600 `HG[2]`;
  600 to 900 `HG[3]`; above 900 `HG[4]` with white text). Outline the base cell (20%, ₹1,000) with a 3 px accent rectangle.
  `sT` caption: "At 30% returns and ₹1,400 freight the parcel loses money; CBIC puts e-commerce export returns at 20% to 25%."
  P3 x 1256 w 600 "CONCLUSIVELY: SIX OPTIONS ON FIVE TESTS (1 TO 5)" `hgrid` rows option names (short: "New portal",
  "Freight subsidy", "Exempt low-value parcels", "Govt marketplace", "Warehouses everywhere", "Our package"), cols the five
  criteria shortened ("Seller cost 30%", "Integrity 25%", "Fiscal 15%", "Speed 15%", "Builds on 2026 15%") plus "Score"; cells
  from `V.opts` with `heatN` cuts [2,3,4,5]; our row with a 3 px primary outline. `sT`: "Team judgement; equal weights give
  4.40 against 2.80. A score of 1 on integrity rules out exemption."

**Slide 3 Core 2, Rules and integrity (R2)** [templates: `s03.js` (rails, heat grid), `s04.js` (two-column flows), `s06.js` (tables)]
- `skelBT(s,1,"2 / 3","R2 RULES AND INTEGRITY",420, HEADLINE, SOURCE)`.
  HEADLINE: "Grade the seller, not the parcel: one pre-filled declaration and three seller tiers keep every parcel declared,
  cut a first-time seller's forms from 45 to 15 minutes and release incentives only against matched payment"
  SOURCE: "Source: CBIC Circular on e-commerce exports and returns, 2026 | DGFT EOR framework, Aug 2026 | WCO E-Commerce
  Framework of Standards | team model "+V.hash+" (A07, A27, T9) | tier thresholds are proposals for the pilot"
- Band 1 (y 310 to 640), `rail` label "THE PROCESS". Left panel x 64 w 880 "ONE ORDER TODAY AND AFTER": two swimlanes
  (today on top in `C.alertTint`, after below in `C.goodTint`), each a row of step boxes (`bx`) joined by arrows:
  Today: "Register IEC, GST" | "Invoice by hand" | "Pick route: post, courier, cargo" | "Fill PBE-3 or CSB-V" | "Agent or CHA" | "Wait at the counter" | "Return = fresh import" (7 boxes);
  After: "One seller ID at the desk" | "Declaration pre-filled from the order" | "Desk books on the rate card" | "Risk engine clears or flags" | "Return to pooled point abroad" (5 boxes).
  Under each lane a `sTL`: "45 min and ₹120 agent fee a parcel (A07, A09)" and "15 min, no agent (A27)".
  Right panel x 960 w 896 "THREE SELLER TIERS" `tbl` with columns "Tier", "Entry", "Checks", "Seller gets", "Demotion"
  and the three rows of PLAN 3.5 shortened to fit (cell text 18 pt). Tier column fills: tier 1 `C.tint`, tier 2 `HG[2]`,
  tier 3 `HG[3]`.
- Band 2 (y 656 to 1032), `rail` label "THE CONTROLS". Panel x 64 w 900 "EACH MISUSE THE BRIEF NAMES MEETS A CONTROL"
  `hgrid` rows: "Under-invoicing", "Incentive misuse", "GST refund leakage", "Prohibited or restricted goods", "Split
  consignments", "Fake returns"; cols: "Data match", "Payment realisation match", "Random sample every tier", "Post-clearance
  audit", "Demotion"; cells `ynCell` "Yes"/"Part"/"No" as follows (rows in order):
  [Yes,Yes,Yes,Yes,Yes] [Yes,Yes,Part,Yes,Yes] [Yes,Yes,Part,Yes,Yes] [Part,No,Yes,Part,Yes] [Yes,Part,Yes,Yes,Yes] [Yes,Part,Yes,Yes,Yes].
  `sT` caption: "No row is left without two controls. Checks fall on risk; no parcel goes undeclared."
  Panel x 980 w 420 "DECLARATIONS PER 10,000 ORDERS" `cols` two bars: "Parcels today "+V.decl_direct and "Graduation
  lane "+V.decl_wh, with a `sT`: "Consolidated SKUs reach customs as 50 bills with full item data (T9)."
  Panel x 1416 w 440 "RETURNS: A RETURN STOPS BEING A FRESH IMPORT" `step` or `bx` flow: "Buyer returns" to "Pooled point
  abroad" to two branches "Resold locally" and "Unsold: home on one monthly bill, duty-free if matched to the shipping bill,
  incentive reversed". `sT`: "Builds on CBIC's 2026 re-import framework; the monthly bill is our proposal."

**Slide 4 Core 3, Coordination and pilot (R3, R4)** [templates: `s06.js` (Gantt, risk, KPIs), `s04.js` (heat matrix), `s05.js` (scenario table)]
- `skelBT(s,2,"3 / 3","R3 + R4 COORDINATION AND PILOT",560, HEADLINE, SOURCE)`.
  HEADLINE: "One compact gives every agency a duty and a gain; a "+V.sellers+"-seller pilot in "+V.clusters+" clusters tests
  the reform for "+V.budget_cr+" and scales only if seller margin rises and integrity holds"
  SOURCE: "Source: team model "+V.hash+" (T10, T11) | DGFT Districts as Export Hubs product mapping | Towns of Export
  Excellence list | GI registry | pilot design and thresholds are proposals"
- Band 1 (y 310 to 650), `rail` "R3 THE COMPACT". Panel x 64 w 1000 "GIVE AND GET: WHAT EACH ACTOR PUTS IN AND TAKES OUT"
  `tbl` columns "Actor", "Gives", "Gets", "Scorecard line" with rows:
  "DPIIT" | "Convenes, funds pilot" | "Measured MSME export growth" | "Active exporters"
  "DGFT, DoC" | "Secretariat, EOR rules, district committees" | "Export data by district" | "First-time exporters"
  "CBIC" | "Risk engine, tier rules" | "Item-level data on every parcel" | "Discrepancy rate"
  "Department of Posts" | "Desks at DNKs, postal rate card" | "Parcel volume" | "Booking to dispatch time"
  "RBI and AD banks" | "Realisation match feed" | "Fewer open export bills" | "Realisation within window"
  "GSTN" | "Refund match" | "Lower refund risk" | "Refund days"
  "Platforms" | "Fee sheet, seller data API" | "New supply" | "Seller fee transparency"
  "Carriers" | "Cluster rate card, returns point" | "Pooled volume" | "Cost per parcel"
  Panel x 1080 w 776 "WHO MUST AGREE: POWER AND INTEREST" a 2 by 2 grid (`addRect` quadrants with labels "Keep satisfied",
  "Manage closely", "Monitor", "Keep informed") with circles (`bub`) placed: CBIC (high power, high interest), DGFT (high,
  high), DPIIT (high, high), RBI (high, medium), GSTN (high, medium), DoP (medium, high), Platforms (medium, high), Carriers
  (low, high), Sellers (low, high), Councils (low, medium). `sT`: "Monthly scorecard published; any blocker escalated to the
  committee within two weeks."
- Band 2 (y 666 to 1032), `rail` "R4 THE PILOT". Four panels:
  P1 x 64 w 520 "SIX CLUSTERS, SIX PRODUCTS" `tbl` "Cluster" | "Region" | "Product" | "Why": Jaipur | North | Block-print textiles | named in the brief; Moradabad | North | Brassware | named in the brief, heavy items test freight; Varanasi | East | Silk stoles | named in the brief, home-based weavers; Kutch | West | Embroidery | GI craft, long pickup distances; Channapatna | South | Wooden toys | GI craft, toy safety rules; Agartala or Guwahati | North-east | Cane and bamboo | remote, first-time sellers. (Lane B confirms each "why"; the north-east site is chosen by Lane B.)
  P2 x 600 w 560 "12 MONTHS, FOUR GATES" `gnt` with rows "Legal checks and tenders" (m1 to m2), "Wave 1: 1,200 sellers" (m3 to m12), "Wave 2: 1,200 sellers" (m7 to m12), "Rate card priced" (m1 to m2), "Integrity sample audit" (m4 to m12), "Independent evaluation" (m10 to m12); diamonds at m2 "G1 rate card priced", m6 "G2 margin up in wave 1", m9 "G3 integrity holds", m12 "G4 scale, revise or stop".
  P3 x 1176 w 680 "THREE SCENARIOS IN OUR MODEL" `tbl` "Measure" | "Bear" | "Base" | "Bull": "Active sellers by month 12" | V.act.bear | V.act.base | V.act.bull; "Seller gain, months 7 to 12" | V.gain_cr.bear | V.gain_cr.base | V.gain_cr.bull; "Budget per active seller" | V.cpa.bear | V.cpa.base | V.cpa.bull; "Margin per order, reformed" | V.bear_ref | V.reformed | V.bull_ref. Then a KPI row of four `tile`s: "Cost per parcel −20% target", "Seller paperwork −60% target", "Return closure −30% target", "Discrepancy rate no worse". (Targets are proposals; label "targets, not forecasts".)

**Slide 5 Appendix** [template: `s07.js`, ribbon `RIBAP`, active index 0 then all four sections on one slide as quadrants]
- `skelBT(s,0,"APPENDIX","APPENDIX",280,"Assumptions, sensitivity, tier rules and sources behind every number on slides 2 to 4", SOURCE, {labels:RIBAP})`.
  SOURCE: "Source: team model "+V.hash+" | research document, Appendix A source register | all values are assumptions or model outputs unless sourced"
- A1 x 64 y 310 w 900 h 352 "A1 MODEL: ONE ORDER, THREE LANES (BASE, ₹ PER ORDER)" `tbl` "Line" | "Today" | "Reformed parcel" | "Warehouse" with rows `V.a1_rows` (8 rows; the last row, contribution, filled `C.tint`). Under it `sT`: "Columns sum to the contribution; expected return effect includes the margin lost on returned orders. Representative ₹3,960 item, 0.5 kg, $1 = ₹88."
- A2 x 980 y 310 w 876 h 352 "A2 SENSITIVITY: WHAT MOVES THE "+V.uplift+" UPLIFT" `torS` with `V.tornado` (8 bars, labels shortened to 22 characters), plus `sT`: "Rate card saving is the swing factor; the pilot prices it by month 2."
- A3 x 64 y 678 w 900 h 354 "A3 ASSUMPTIONS THAT MATTER MOST AND THE TIER RULES" `tbl` "ID" | "Input" | "Bear" | "Base" | "Bull" with rows `V.a3_rows` (8 rows, rh 30), then one `sT` line: "Tiers: 1 new; 2 after 25 clean parcels or 3 months matched; 3 after 12 months clean. Thresholds are pilot proposals."
- A4 x 980 y 678 w 876 h 354 "A4 SHORT FORMS AND SOURCES" two columns of short forms (AD bank, AEO, CBIC, CHA, CSB-V, DGFT, DNK, DoP, DPIIT, eBRC, ECCS, EOR, FEMA, GSTN, IEC, LUT, PBE-3, RoDTEP, SKU, 3PL) with expansions in 16 pt `FINEPRINT`, and a `BIBLIO` block of the 10 most used S-IDs (publisher, title, year) from `sources.md` once R2 is done; before R2, leave the seed names and replace after R2 through `overrides.json`. Also a one-line "Not yet run: seller interviews, provider quotes and a time study (research §29)".

**Slide 6 Thank you** [template: `s08.js`]
- `wipe(s); coverTop(s);` "THANK YOU" 112 pt; "THEREFORE" card `layered` primaryDeep: "Keep every parcel declared. Grade the
  seller, not the parcel. Move the paperwork to the cluster. Buy freight and returns as one. Test it in six clusters before
  it scales." (no new number); `TL` team name; `teamBT`; email line; logo strip with `logoSlot` for "DTU" and "USME DTU" only;
  `srcLine` "Source: slides 2 to 5".

Derivation and checks after writing all slides: `gen.py mock`, `gen.py copy`, `gen.py preview`, `python3 -X utf8
casequest-usme/deck/checks.py`. Done when six `sNN OK`, `copy issues 0`, no dash or placeholder, every name candidate is a
real organisation, a case term or a plain phrase. Create `deck/derivation.md` listing every literal number on any slide
with its source (V key, T table, or lane row). HU3 on all slide strings. Write `STAGE 2 D1 PASS`.

### 15.4 Build (main agent only, one call at a time)

| Step | Action | Done when |
|---|---|---|
| D2 | `gen.py bind` (all) | `build/slide_NN_K.js` for all parts, `v1_NN.js`, `v1_all.js`, `sweeps.js`, `slots.js`, each under 50,000 characters |
| D3 | For N = 2 to 6: run every part of slide N in order (each must return `warnings: []`); then `v1_NN.js`; then screenshot to `deck/shots/sN.png` and Read it | V1 `clean: true` or logged residuals. **Stop after slide 2 and compare with the prime inspo notes (F0) and the preview; fix the system before building the rest** |
| D4 | `build/sweeps.js` then `build/v1_all.js` | `fontLow`, `copy`, `missing`, `presentBad` empty; `moneyshot` 1; `slides` 6 |
| D5 | Logos and images (15.6) | Log written |
| D6 | Touchpoints G and HU4 (prompt 11.5) | `deck/critique.md`; allowed fixes applied, D3 rerun for those slides |
| D7 | Touchpoint H; final screenshots of slides 1 to 6 at `maxDimension: 1920` saved as `deck/shots/hi_s01.png` to `hi_s06.png` | Six images viewed |
| D8 | `PYTHONPATH=/tmp/cq-pylib python3 -X utf8 casequest-usme/deck/make_pdf.py`; report 14.2 (deck ready) | `TeamIdeaForge.pdf` with 6 pages; send it with SendUserFile (`status: proactive`) |

Every slide script's first part clears the slide, so a rerun is safe; later parts never clear. If a later part fails,
rerun the slide from part 1.

### 15.5 Fix rules (the only edits allowed during the build)

A fix goes into `deck/overrides.json` (copy) or the slide file (geometry), then `gen.py mock`, `bind`, and the slide is
rebuilt from part 1. Never edit a build file by hand and never add 240 to a coordinate.

| Issue | Fix |
|---|---|
| `headline 3 lines` | Remove the two weakest words; keep every number |
| `source 2 lines` | Drop the least important source group |
| `textOut`, `cellWrap`, overflow | Shortening ladder: drop articles; a shorter word; a short form defined on slide 5; drop the least important clause. Never below 18 pt for SEC text or 22 pt elsewhere; never drop a number |
| A panel spills below y 1032 | Reduce its rows or row height (minimum 26 px) in the slide file |
| A label touches a line in a screenshot | Nudge it by at most 24 px |
| A node sits 240 px off | A hand-written line set x or y before `appendChild`; rerun the full slide |
| `Cannot use unloaded font` | A fragment was run; always run full part files |
| Rotated rail label not centred | Edit `deck/_x2.js` to `const RAILROT=false;` after `pre`, rerun `bind`, rebuild; log |
| Donut renders as a disc | `const ARCS=false;` in `deck/_extras.js`, rerun `pre`, `bind`, rebuild |

Known false positives: ribbon punch-holes over their tags, `BACK:` rectangles under cards.

### 15.6 Logos and image slots

Run `build/slots.js`. Expected slots: slide 1 nodes (DPIIT, DGFT, CBIC, India Post, DHL, Shiprocket, Amazon, Etsy, eBay, RBI,
GSTN, EPCH, Ministry of MSME, US CBP, European Commission, HMRC) and images (Artisan at work, Jaipur block print, Moradabad
brass); slide 6 (DTU, USME DTU).
1. Organiser marks from the case PDF: `PYTHONPATH=/tmp/cq-pylib python3 -X utf8 -c "import fitz,pathlib;d=fitz.open(r'casequest-usme/6adda57c4d516_casequest_crossborderecom.pdf');o=pathlib.Path('casequest-usme/deck/logos/case');o.mkdir(parents=True,exist_ok=True);[open(o/f'p{p+1}_{i}.{b[\"ext\"]}','wb').write(b['image']) for p in range(d.page_count) for i,x in enumerate(d[p].get_images(full=True)) for b in [d.extract_image(x[0])]]"`; Read each and keep the DTU and USME marks.
2. Other brands: Wikimedia Commons search (`https://commons.wikimedia.org/w/api.php?action=query&list=search&srnamespace=6&srlimit=10&format=json&srsearch=<brand>%20logo`, descriptive User-Agent), download with `curl -sL -o "casequest-usme/deck/logos/<slug>.png" "https://commons.wikimedia.org/wiki/Special:FilePath/<File>?width=600"`, Read to confirm.
3. Fill `MAP` in `deck/logo_rects.js` with `{"<slot id>": [pngW, pngH]}` (at most 8 a call), run it, then one `upload_assets` call per returned rectangle (`count: 1`, `nodeId`, `scaleMode: "FIT"`) and POST the bytes.
4. Marks carrying the State Emblem of India (DPIIT, DGFT, CBIC, Ministry of MSME and any ministry seal) stay as text placeholders. Images take only openly licensed photos (Wikimedia Commons, CC BY or CC BY-SA, or public domain) whose credit goes on slide 5 through `overrides.json`; otherwise leave the placeholder. Never resize a slot after upload. Log every slot in `deck/figma.md`.
5. Time box: 30 minutes. Unfilled slots are acceptable; they show the brand name in a ruled box.

### 15.7 Export and upload
`deck/make_pdf.py` builds the PDF from the D7 screenshots. Also tell the user that Figma Slides can export natively with
File, Export, PDF. The user uploads `TeamIdeaForge.pdf` on Unstop before 23:59 IST; this session cannot upload.

### 15.8 Stage 2 checklist
- [ ] Six slides; `derivation.md` covers every literal number; mock all OK after the last override.
- [ ] Sweeps empty; one `CARD: MONEYSHOT`; V1 clean or logged residuals; six screenshots viewed.
- [ ] Cover: mind map with brand slots, no KPI-card row, team table; same table on slide 6.
- [ ] R1 to R4 each visibly answered and labelled; "CONCLUSIVELY" on slide 2; "THEREFORE" on slide 6.
- [ ] Touchpoints F, G, H and HU3, HU4 logged; `deck/critique.md` exists; PDF has 6 pages and was sent to the user.

---

# PART VI. EMBEDDED FILES (the source of truth)

Every block below is extracted byte for byte by `extract.py` (paths relative to `casequest-usme/`). Never retype a block.
A fix is made in the extracted file and logged in `DECISIONS.md`.

<!-- FILE: extract.py -->
```python
# Extract the embedded files of casequest-usme/PLAN.md. Run from the repo root: python3 -X utf8 casequest-usme/extract.py
import io, re, pathlib
P = pathlib.Path("casequest-usme"); t = io.open(P / "PLAN.md", encoding="utf-8").read().replace("\r", "")
blocks = re.findall(r"^<!-- FILE: ([^\n]+?) -->\n```[a-z]*\n(.*?)\n```\n<!-- END FILE -->", t, re.S | re.M); n = 0
for name, body in blocks:
    if name == "extract.py": continue
    p = P / name; p.parent.mkdir(parents=True, exist_ok=True); io.open(p, "w", encoding="utf-8", newline="\n").write(body + "\n"); n += 1; print("wrote", p, len(body))
print("files", n)
```
<!-- END FILE -->


<!-- FILE: case/01-case.md -->
```markdown
# CaseQuest 2026: the case, transcribed with reference IDs

Source: `6adda57c4d516_casequest_crossborderecom.pdf` (4 pages). Wording kept as printed; IDs added by the team.

## Page 1: cover
- [C-P1] University School of Management and Entrepreneurship, Delhi Technological University. "CONSPECTUS". Title: "The Rise of Cross-Border E-Commerce : Unlocking India's MSME Export Potential". Contacts: Anushka Goel, Bhargavi Sharma.

## Page 2: instructions and evaluation criteria
- [C-I1] Deadline 11:59 P.M., 27.10.2026; later submissions not entertained. (The organisers extended it by one day: user, 28 Oct 2026.)
- [C-I2] One PDF; slide limit of 3 slides excluding cover page and appendix slides.
- [C-I3] Upload through Unstop only.
- [C-I4] Nomenclature: TeamName.
- [C-I5] Frameworks and matrices allowed.
- [C-I6] Assumptions, if any, clearly stated and justified.
- [C-I7] Final presentation round offline at DTU East Campus (USME), Vivek Vihar, Phase 2.
- [C-J1] Creativity. [C-J2] Originality. [C-J3] Feasibility. [C-J4] Granularity. [C-J5] Key challenges addressed.

## Page 3: case problem
### I. Background: the online export opportunity
- [C-B1] Cross-border e-commerce lets small sellers reach global buyers without foreign offices or distributors. In 2026, India has made e-commerce exports a policy priority.
- [C-B2] India has millions of MSMEs, artisans, weavers and home-based producers making handicrafts, textiles, jewellery, leather goods and home décor in demand abroad, spread across clusters such as Jaipur, Moradabad, Varanasi, many run by women and first-generation entrepreneurs.
- [C-B3] Together they form the backbone of local economies and the largest untapped pool of potential online exporters.
### II. Existing problems: a system not built for small parcels
- [C-E1] Only a small share of India's small producers sell abroad online.
- [C-E2] The main barrier is a complicated export process: registrations, invoices, shipping bills, customs declarations and tax paperwork, often across several offices and portals. Rules differ by shipping route (courier, postal, cargo); many forms are still filled by hand or through agents. For a seller exporting a handful of parcels a month, the effort is often not worth the reward.
- [C-E3] After dispatch: customs delays leave small consignments sitting for days, hurting delivery times and ratings. Shipping costs are high for small parcels because small sellers cannot negotiate bulk rates.
- [C-E4] Returns are the biggest hidden cost: a returned item is often treated as a fresh import, with duties, forms and delays. Many sellers absorb the loss or avoid exporting altogether.
- [C-E5] Authorities cannot simply relax controls. Large volumes of low-value parcels raise risks of under-invoicing, misuse of export incentives and tax leakage and cannot be inspected one by one. Destination markets are tightening their own rules on low-value imports.
- [C-E6] The challenge is to make exporting online simple and affordable for small sellers without weakening customs checks or tax collection. Too much control keeps small sellers out; too little control opens the door to misuse.

## Page 4: case requirements
- [C-R0] As a Policy Consultant for the Department for Promotion of Industry and Internal Trade (DPIIT), develop a reform-oriented strategy to be presented to the 2026 Inter-Ministerial Committee on E-Commerce Exports, exploring pathways to simplify cross-border online selling for small manufacturers and artisans without weakening customs checks or tax collection.
- [C-R1] Market and Access Dynamics: a plan to improve small sellers' access to and bargaining position on online platforms while reducing shipping and returns costs.
- [C-R2] Regulatory and Process Reform: a simplified risk-based export framework that reduces compliance effort for small sellers while protecting customs and tax integrity.
- [C-R3] Stakeholder and Coordination Strategy: a consensus-building idea to align small sellers, platforms, logistics providers and the multiple government agencies involved.
- [C-R4] Pilot Driven Innovation: a scalable pilot with clear success measures that shows how sellers across regions and product types can adopt the new process through localized participation.
```
<!-- END FILE -->

<!-- FILE: model/cq_model.py -->
```python
# ===== CASEQUEST USME MODEL v1 =====
"""Unit economics of one handmade export order under two lanes, three scenarios, pilot sizing and integrity load.
Run: python3 -X utf8 casequest-usme/model/cq_model.py   (writes model_outputs.json, model_tables.md, ../deck/values.json)"""
import json, hashlib, pathlib, io
try: HERE = pathlib.Path(__file__).resolve().parent
except NameError: HERE = pathlib.Path("casequest-usme/model").resolve()
OUT = HERE; DECK = HERE.parent / "deck"
def inr(v, d=0):
    s = ("%." + str(d) + "f") % abs(v); a, _, b = s.partition("."); 
    if len(a) > 3:
        h, t = a[:-3], a[-3:]; g = []
        while len(h) > 2: g.insert(0, h[-2:]); h = h[:-2]
        if h: g.insert(0, h)
        a = ",".join(g) + "," + t
    r = a + ("." + b if b else ""); return ("−" if v < 0 else "") + "₹" + r
def pct(v, d=0): return (("%." + str(d) + "f") % (v * 100)) + "%"
# ---------- assumptions: id -> (bear, base, bull, unit, basis). Bear = least favourable to the recommendation ----------
A = {
 "A01": (88, 88, 88, "INR per USD", "RBI reference rate, verify at freeze (Lane F)"),
 "A02": (40, 45, 50, "USD retail price abroad", "representative handmade decor or textile item; Lane B listings scan"),
 "A03": (0.50, 0.50, 0.50, "kg packed weight", "representative item"),
 "A04": (900, 800, 750, "INR seller product cost", "cluster ex-works cost; Lane B"),
 "A05": (1100, 1000, 900, "INR direct parcel freight 0.5 kg", "India Post ITPS and courier aggregator quotes; Lane F"),
 "A06": (0.15, 0.15, 0.15, "platform referral share of retail", "Amazon and Etsy fee pages; Lane B"),
 "A07": (60, 45, 35, "minutes of seller paperwork per direct parcel", "case: forms, portals, agents; Lane E"),
 "A08": (150, 150, 150, "INR value of one seller hour", "team assumption"),
 "A09": (150, 120, 100, "INR agent or CHA fee per direct parcel", "Lane E"),
 "A10": (0.22, 0.20, 0.18, "return rate, direct parcel", "CBIC cites 20 to 25% for e-commerce exports; Lane D"),
 "A11": (0.85, 0.80, 0.75, "share of direct returns abandoned abroad", "case: sellers absorb the loss; Lane E"),
 "A12": (1500, 1300, 1200, "INR cost to bring one parcel back and clear it", "return freight plus clearance; Lane F"),
 "A13": (450, 380, 320, "INR bulk air freight per chargeable kg, 100 kg plus", "forwarder benchmarks; Lane F"),
 "A14": (1.3, 1.25, 1.2, "chargeable over packed weight in a carton", "volumetric factor"),
 "A15": (6.0, 5.5, 5.0, "USD destination last-mile per order", "USPS Ground Advantage or Royal Mail tables; Lane F"),
 "A16": (5.0, 4.5, 4.0, "USD warehouse pick, pack and storage per order", "3PL and FBA fee tables; Lane F"),
 "A17": (0.10, 0.08, 0.07, "EOR or consolidator margin on product cost", "Lane B"),
 "A18": (10, 6, 4, "minutes of seller work per order, consolidated", "batch pickup"),
 "A19": (0.18, 0.15, 0.12, "return rate, warehouse lane", "faster delivery, local returns; Lane E"),
 "A20": (0.50, 0.60, 0.70, "share of warehouse returns resold locally", "Lane E"),
 "A21": (4.0, 3.5, 3.0, "USD to process one local return", "3PL tables"),
 "A22": (0.10, 0.07, 0.05, "unsold stock written off, share of units shipped", "inventory risk"),
 "A23": (0.12, 0.11, 0.10, "annual working capital cost", "MSME lending rates; Lane D"),
 "A24": (5, 4, 3, "months stock is held", "turn assumption"),
 "A25": (0.0, 0.0, 0.0, "destination duty and VAT difference between lanes", "held equal; shown separately in research"),
}
SC = ("bear", "base", "bull")
def a(k, s): return A[k][SC.index(s)]
def direct(s):
    fx = a("A01", s); price = a("A02", s) * fx; fee = a("A06", s) * price
    admin = a("A07", s) / 60 * a("A08", s) + a("A09", s); fr = a("A05", s); prod = a("A04", s)
    deliv = price - fee - fr - admin - prod
    r = a("A10", s); ab = a("A11", s)
    loss_aband = prod + fr + admin            # refund given, product lost; fee assumed refunded by platform
    loss_back = a("A12", s) + fr + admin     # product recovered, both freights and the clearance lost
    ret = ab * loss_aband + (1 - ab) * loss_back
    exp = (1 - r) * deliv - r * ret
    cost_to_serve = fr + admin + r * (ab * (fr + admin) + (1 - ab) * (a("A12", s) + fr + admin))
    return dict(price=price, fee=fee, freight=fr, admin=admin, product=prod, delivered=deliv, ret_loss=ret, expected=exp, cts=cost_to_serve)
def wh(s):
    fx = a("A01", s); price = a("A02", s) * fx; fee = a("A06", s) * price; prod = a("A04", s)
    fr = a("A13", s) * a("A03", s) * a("A14", s); lm = a("A15", s) * fx; ful = a("A16", s) * fx
    eor = a("A17", s) * prod; admin = a("A18", s) / 60 * a("A08", s)
    wc = prod * a("A23", s) * a("A24", s) / 12; wo = a("A22", s) * (prod + fr) / (1 - a("A22", s))
    deliv = price - fee - fr - lm - ful - eor - admin - prod - wc - wo
    r = a("A19", s); rs = a("A20", s); proc = a("A21", s) * fx
    loss_resold = proc + lm                    # resold later: pay return processing and the wasted delivery
    loss_scrap = proc + lm + prod + fr          # not resaleable: also lose the product and inbound freight
    ret = rs * loss_resold + (1 - rs) * loss_scrap
    exp = (1 - r) * deliv - r * ret
    cts = fr + lm + ful + eor + admin + wc + wo + r * (proc + lm)
    return dict(price=price, fee=fee, freight=fr, lastmile=lm, fulfil=ful, eor=eor, admin=admin, product=prod, wc=wc, writeoff=wo,
                delivered=deliv, ret_loss=ret, expected=exp, cts=cts)
D = {s: direct(s) for s in SC}; W = {s: wh(s) for s in SC}
# ---------- reformed direct parcel lane (requirement 2 effect): assisted filing, pooled rate card, matched returns ----------
A["A27"] = (25, 15, 10, "minutes of seller paperwork per parcel with the cluster desk and pre-filled declaration", "Lane E")
A["A28"] = (0.05, 0.12, 0.18, "pooled rate-card saving on direct parcel freight", "cluster tender; Lane F")
A["A29"] = (1200, 950, 800, "INR to bring a parcel back under matched duty-free re-import", "CBIC returns module; Lane D")
A["A30"] = (0.75, 0.60, 0.50, "unused (kept for ID stability)", "")
A["A31"] = (0.50, 0.65, 0.80, "share of direct returns routed to a pooled return point abroad", "3PL return networks; Lane F")
def reformed(s):
    fx = a("A01", s); price = a("A02", s) * fx; fee = a("A06", s) * price; prod = a("A04", s)
    fr = a("A05", s) * (1 - a("A28", s)); admin = a("A27", s) / 60 * a("A08", s)
    deliv = price - fee - fr - admin - prod; r = a("A10", s); hub = a("A31", s); rs = a("A20", s); proc = a("A21", s) * fx
    # a returned parcel goes to a pooled return point in the destination (share hub) or is abandoned; unsold hub stock comes home in one
    # monthly re-import bill under the matched duty-free route (cost A29 spread across a 40-item carton)
    hub_loss = fr + admin + proc + (1 - rs) * (a("A29", s) / 40) + (1 - rs) * 0 
    hub_loss += 0  # resold items recover the product; unsold items are recovered at home, so no product loss in either branch
    ret = hub * hub_loss + (1 - hub) * (prod + fr + admin)
    exp = (1 - r) * deliv - r * ret
    cts = fr + admin + r * (hub * (proc + (1 - rs) * a("A29", s) / 40) + 0)
    return dict(price=price, fee=fee, freight=fr, admin=admin, product=prod, delivered=deliv, ret_loss=ret, expected=exp, cts=cts)
R = {s: reformed(s) for s in SC}
# ---------- sensitivity grid: expected contribution gap (warehouse minus direct today) by return rate and freight ----------
def with_(over, f, s="base"):
    old = {k: A[k] for k in over}
    for k, v in over.items(): A[k] = tuple([v] * 3) + A[k][3:]
    try: return f(s)["expected"]
    finally: A.update(old)
RR = [0.10, 0.15, 0.20, 0.25, 0.30]; FRT = [800, 1000, 1200, 1400]
GRID = [[round(with_({"A10": r, "A05": fq}, direct)) for fq in FRT] for r in RR]
GRIDW = [round(with_({"A19": r * 0.75}, wh)) for r in RR]
# ---------- tornado on the base gap (warehouse minus direct today), each input moved to its bear and bull value ----------
def gap_with(k, v):
    old = A[k]; A[k] = tuple([v] * 3) + A[k][3:]
    try: return reformed("base")["expected"] - direct("base")["expected"]
    finally: A[k] = old
G0 = R["base"]["expected"] - D["base"]["expected"]
TOR = sorted([(k, A[k][3], gap_with(k, A[k][0]) - G0, gap_with(k, A[k][2]) - G0) for k in ["A02","A04","A05","A07","A09","A10","A20","A21","A27","A28","A29","A31"]],
             key=lambda t: -max(abs(t[2]), abs(t[3])))

# ---------- integrity load: declarations and examination per 10,000 orders ----------
ORD = 10000; PER_CARTON = 40; CARTONS_PER_BILL = 5
decl_direct = ORD; decl_wh = ORD / (PER_CARTON * CARTONS_PER_BILL)
# ---------- pilot ----------
PIL = dict(clusters=6, sellers_per_cluster=400, wave1_share=0.5, months=12)
PIL["sellers"] = PIL["clusters"] * PIL["sellers_per_cluster"]
BUD = {"Cluster export desks (6 x 4 staff x 12 months)": 1_15_20_000, "Seller onboarding, cataloguing, photography": 72_00_000,
       "Data link and dashboard (IEC, GSTIN, Udyam, eBRC)": 60_00_000, "First-shipment freight bridge (capped per seller)": 48_00_000,
       "Independent evaluation": 30_00_000, "Contingency (10%)": 0}
BUD["Contingency (10%)"] = round(sum(v for k, v in BUD.items()) * 0.10)
BTOT = sum(BUD.values())
ACT = {"bear": 0.25, "base": 0.40, "bull": 0.55}            # share of enrolled sellers exporting by month 12
ORD_M = {"bear": 6, "base": 10, "bull": 15}                 # orders a month per active seller in months 7 to 12
def pilot(s):
    act = round(PIL["sellers"] * ACT[s]); orders = act * ORD_M[s] * 6
    gain = orders * (reformed(s)["expected"] - direct(s)["expected"])   # every pilot order uses the reformed parcel lane
    gmv = orders * D[s]["price"]
    return dict(active=act, orders=orders, gain=gain, gmv=gmv, cost_per_active=BTOT / act)
P = {s: pilot(s) for s in SC}
# ---------- break-even: warehouse lane beats direct at what monthly order volume per SKU? (fixed listing + inbound) ----------
FIXED_SKU_M = 2500  # INR a month per SKU for storage minimums and inbound handling (assumption A26)
A["A26"] = (2500, 2500, 2500, "INR a month fixed per SKU in the warehouse lane", "3PL minimums")
be = {s: FIXED_SKU_M / max(1e-9, W[s]["expected"] - D[s]["expected"]) for s in SC}
beR = {s: (FIXED_SKU_M / (W[s]["expected"] - R[s]["expected"])) if W[s]["expected"] > R[s]["expected"] else None for s in SC}

# ---------- option filter (team judgement, 1 to 5; weights stated on the slide) ----------
WTS = [("Seller cost per order", 0.30), ("Customs and tax integrity", 0.25), ("Fiscal cost (5 = cheapest)", 0.15), ("Time to deliver", 0.15), ("Builds on the 2026 reforms", 0.15)]
OPTS = [("New single-window export portal", [3, 3, 2, 1, 2]), ("Freight subsidy per parcel", [4, 2, 1, 4, 1]),
        ("Exempt low-value parcels from checks", [4, 1, 4, 4, 1]), ("Government export marketplace", [2, 3, 2, 1, 2]),
        ("Overseas warehouses for every cluster", [3, 4, 2, 2, 3]), ("Cluster desk, seller tiers, pooled rates and returns", [5, 4, 4, 4, 5])]
OSC = [(n, sc, round(sum(v * w for v, (_, w) in zip(sc, WTS)), 2)) for n, sc in OPTS]
OSC_EQ = [(n, round(sum(sc) / len(sc), 2)) for n, sc in OPTS]
# ---------- checks ----------
chk = []
def ck(name, ok): chk.append((name, bool(ok))); print(("PASS " if ok else "FAIL ") + name)
ck("scenario order direct", D["bear"]["expected"] < D["base"]["expected"] < D["bull"]["expected"])
ck("scenario order warehouse", W["bear"]["expected"] < W["base"]["expected"] < W["bull"]["expected"])
ck("warehouse beats direct in base", W["base"]["expected"] > D["base"]["expected"])
ck("cost to serve lower in base", W["base"]["cts"] < D["base"]["cts"])
ck("budget sums", BTOT == sum(BUD.values()))
ck("declarations cut", decl_wh < decl_direct / 100)
ck("pilot sellers", PIL["sellers"] == 2400)
ck("reformed direct beats today in base", R["base"]["expected"] > D["base"]["expected"])
ck("our package ranks first weighted and equal", max(OSC, key=lambda t: t[2])[0] == OPTS[-1][0] and max(OSC_EQ, key=lambda t: t[1])[0] == OPTS[-1][0])
ck("weights sum to one", abs(sum(w for _, w in WTS) - 1) < 1e-9)
ck("break-even positive", all(v > 0 for v in be.values()))
ok = all(c[1] for c in chk)
out = {"assumptions": {k: list(v) for k, v in A.items()}, "direct": D, "warehouse": W, "pilot": P, "budget": BUD, "budget_total": BTOT,
       "reformed": R, "grid": GRID, "gridw": GRIDW, "tornado": TOR, "declarations": {"direct": decl_direct, "warehouse": decl_wh}, "breakeven_orders_per_sku_month": be}
h = hashlib.sha256(json.dumps(out, sort_keys=True, default=str).encode()).hexdigest()[:10]
b = "base"; gapu = W[b]["expected"] - D[b]["expected"]; ctsd = 1 - W[b]["cts"] / D[b]["cts"]
print("CHECKS %d/%d HASH %s" % (sum(c[1] for c in chk), len(chk), h))
print("FINDINGS", inr(D[b]["expected"]), inr(R[b]["expected"]), inr(W[b]["expected"]), inr(R[b]["expected"]-D[b]["expected"]), inr(D[b]["cts"]), inr(R[b]["cts"]), int(decl_wh), inr(BTOT), P[b]["active"], round(be[b]))
for s in SC: print(s, "direct", round(D[s]["expected"], 1), "wh", round(W[s]["expected"], 1), "ctsD", round(D[s]["cts"]), "ctsW", round(W[s]["cts"]), "act", P[s]["active"], "gain", round(P[s]["gain"]))
for s in SC: print(s, "reformed", round(R[s]["expected"],1), "ctsR", round(R[s]["cts"]))
print("GRID", GRID); print("GRIDW", GRIDW)
for t in TOR[:8]: print("TOR", t[0], round(t[2]), round(t[3]))
for k in ("freight","admin","ret_loss","delivered"): print(k, round(D["base"][k]), round(R["base"][k]), round(W["base"].get(k,0)))
print("wh parts", {k: round(v) for k, v in W["base"].items()})

# ---------- waterfall today -> reformed parcel (sequential, base) ----------
def seq():
    steps = [("Paperwork at the cluster desk", {"A07": a("A27","base"), "A09": 0}), ("Pooled rate card", {"A05": a("A05","base")*(1-a("A28","base"))}),
             ("Returns pooled abroad", None)]
    cur = {}; prev = direct("base")["expected"]; rows = [("Today, direct parcel", prev)]
    for name, ov in steps:
        if ov is None:
            v = R["base"]["expected"]
        else:
            cur.update(ov); old = {k: A[k] for k in cur}
            for k, vv in cur.items(): A[k] = tuple([vv]*3) + A[k][3:]
            try: v = direct("base")["expected"]
            finally: A.update(old)
        rows.append((name, v - prev)); prev = v
    rows.append(("Reformed parcel lane", prev)); return rows
WF = seq()
assert abs(WF[-1][1] - R["base"]["expected"]) < 0.01, (WF[-1][1], R["base"]["expected"])
fmt = lambda v: inr(round(v))
SHORT = {"A05": "Parcel freight, 0.5 kg, \u20b9", "A07": "Paperwork today, minutes", "A09": "Agent fee, \u20b9", "A10": "Return rate today",
         "A11": "Returns abandoned abroad", "A27": "Paperwork at the desk, minutes", "A28": "Rate-card saving", "A31": "Returns sent to pooled point"}
V = {"hash": h, "fx": "₹%d per USD" % a("A01","base"), "price": fmt(D["base"]["price"]),
     "today": fmt(D["base"]["expected"]), "reformed": fmt(R["base"]["expected"]), "wh": fmt(W["base"]["expected"]),
     "uplift": fmt(R["base"]["expected"] - D["base"]["expected"]), "uplift_pct": pct((R["base"]["expected"] - D["base"]["expected"]) / D["base"]["expected"]),
     "bear_today": fmt(D["bear"]["expected"]), "bear_ref": fmt(R["bear"]["expected"]), "bear_wh": fmt(W["bear"]["expected"]),
     "bull_today": fmt(D["bull"]["expected"]), "bull_ref": fmt(R["bull"]["expected"]), "bull_wh": fmt(W["bull"]["expected"]),
     "cts_today": fmt(D["base"]["cts"]), "cts_ref": fmt(R["base"]["cts"]), "cts_wh": fmt(W["base"]["cts"]),
     "ret_loss_today": fmt(D["base"]["ret_loss"]), "ret_share": pct(a("A10","base")*D["base"]["ret_loss"]/(D["base"]["price"]-D["base"]["fee"]-D["base"]["product"])),
     "admin_today": fmt(D["base"]["admin"]), "admin_ref": fmt(R["base"]["admin"]), "freight_today": fmt(D["base"]["freight"]),
     "wf": [[n, round(v)] for n, v in WF], "grid": GRID, "grid_r": [pct(r) for r in RR], "grid_f": [inr(f) for f in FRT], "gridw": GRIDW,
     "tornado": [[t[0], t[1], round(t[2]), round(t[3])] for t in TOR[:8]],
     "decl_direct": "{:,}".format(decl_direct), "decl_wh": str(int(decl_wh)),
     "sellers": "{:,}".format(PIL["sellers"]), "clusters": PIL["clusters"], "budget": inr(BTOT), "budget_cr": "₹%.2f crore" % (BTOT/1e7),
     "budget_rows": [[k, inr(v)] for k, v in BUD.items()],
     "act": {s: P[s]["active"] for s in SC}, "orders": {s: P[s]["orders"] for s in SC}, "gain": {s: inr(round(P[s]["gain"]/1e5,1)*1e5) for s in SC},
     "gain_cr": {s: "₹%.2f crore" % (P[s]["gain"]/1e7) for s in SC}, "cpa": {s: inr(round(P[s]["cost_per_active"])) for s in SC},
     "be_sku": round(be["base"]),
     "a1_rows": [["Price abroad", fmt(D[b]["price"]), fmt(R[b]["price"]), fmt(W[b]["price"])], ["Platform fee", fmt(D[b]["fee"]), fmt(R[b]["fee"]), fmt(W[b]["fee"])],
                 ["Product cost", fmt(D[b]["product"]), fmt(R[b]["product"]), fmt(W[b]["product"])],
                 ["Freight and delivery", fmt(D[b]["freight"]), fmt(R[b]["freight"]), fmt(W[b]["freight"] + W[b]["lastmile"] + W[b]["fulfil"])],
                 ["Paperwork and agent", fmt(D[b]["admin"]), fmt(R[b]["admin"]), fmt(W[b]["admin"])],
                 ["Consolidator, stock, write-off", "\u20b90", "\u20b90", fmt(W[b]["eor"] + W[b]["wc"] + W[b]["writeoff"])],
                 ["Expected return effect", fmt(D[b]["delivered"] - D[b]["expected"]), fmt(R[b]["delivered"] - R[b]["expected"]), fmt(W[b]["delivered"] - W[b]["expected"])],
                 ["Contribution per order", fmt(D[b]["expected"]), fmt(R[b]["expected"]), fmt(W[b]["expected"])]],
     "a3_rows": [[k, SHORT[k], str(A[k][0]), str(A[k][1]), str(A[k][2])] for k in SHORT], "opt_heads": [w[0] for w in WTS], "opt_w": [pct(w[1]) for w in WTS], "opts": [[n] + [str(v) for v in sc] + ["%.2f" % t] for n, sc, t in OSC], "beR": None if beR["base"] is None else round(beR["base"])}
OUT.mkdir(parents=True, exist_ok=True); DECK.mkdir(parents=True, exist_ok=True)
io.open(OUT / "model_outputs.json", "w", encoding="utf-8").write(json.dumps(out, indent=1, default=str, ensure_ascii=False))
io.open(DECK / "values.json", "w", encoding="utf-8").write(json.dumps(V, indent=1, ensure_ascii=False))
L = ["# CaseQuest model tables (hash %s)" % h, "", "Every value is a team assumption or a model output unless a row says otherwise. Verify inputs through the research lanes before freeze.", ""]
def tab(t, heads, rows): L.extend(["### " + t, "| " + " | ".join(heads) + " |", "|" + "---|" * len(heads)] + ["| " + " | ".join(str(c) for c in r) + " |" for r in rows] + [""])
tab("T1. Assumption register", ["ID", "Input", "Bear", "Base", "Bull", "Basis"], [[k, v[3], v[0], v[1], v[2], v[4]] for k, v in A.items()])
for nm, M in (("T2. Today's direct parcel, per order", D), ("T3. Reformed parcel lane, per order", R), ("T4. Consolidated warehouse lane, per order", W)):
    keys = list(M["base"].keys()); tab(nm, ["Line"] + list(SC), [[k] + [inr(round(M[s][k])) for s in SC] for k in keys])
tab("T5. Expected contribution per order by lane", ["Scenario", "Today", "Reformed parcel", "Warehouse", "Reformed minus today"], [[s, fmt(D[s]["expected"]), fmt(R[s]["expected"]), fmt(W[s]["expected"]), fmt(R[s]["expected"]-D[s]["expected"])] for s in SC])
tab("T6. Base waterfall, today to reformed parcel", ["Step", "INR per order"], [[n, fmt(v)] for n, v in WF])
tab("T7. Today's contribution by return rate and freight (base)", ["Return rate"] + [inr(f) for f in FRT], [[pct(r)] + [inr(v) for v in row] for r, row in zip(RR, GRID)])
tab("T8. Tornado on the reformed-minus-today uplift (base " + fmt(G0) + ")", ["ID", "Input", "At bear", "At bull"], [[t[0], t[1], fmt(t[2]), fmt(t[3])] for t in TOR])
tab("T9. Customs declarations per 10,000 orders", ["Lane", "Declarations"], [["Direct parcel", "{:,}".format(decl_direct)], ["Consolidated (40 orders a carton, 5 cartons a bill)", int(decl_wh)]])
tab("T10. Pilot budget", ["Line", "INR"], [[k, inr(v)] for k, v in BUD.items()] + [["Total", inr(BTOT)]])
tab("T11. Pilot outcomes in our model", ["Scenario", "Active sellers", "Orders months 7 to 12", "Seller gain vs today", "Budget per active seller"], [[s, P[s]["active"], "{:,}".format(P[s]["orders"]), "₹%.2f crore" % (P[s]["gain"]/1e7), inr(round(P[s]["cost_per_active"]))] for s in SC])
tab("T12. Warehouse break-even orders per SKU a month", ["Scenario", "Against today", "Against reformed parcel"], [[s, round(be[s]), "never at unit level" if beR[s] is None else round(beR[s])] for s in SC])
tab("T13. Option filter (team judgement)", ["Option"] + ["%s (%s)" % (w[0], pct(w[1])) for w in WTS] + ["Weighted", "Equal weights"], [[n] + sc + ["%.2f" % t, "%.2f" % e] for (n, sc, t), (_, e) in zip(OSC, OSC_EQ)])
io.open(OUT / "model_tables.md", "w", encoding="utf-8").write("\n".join(L) + "\n")
print("WF", [(n, round(v)) for n, v in WF]); print("beR", beR); print("V keys", len(V))
```
<!-- END FILE -->

<!-- FILE: HUMANIZER.md -->
```markdown
# Humanizer standard (file mode) for CaseQuest prose

Use this when the `humanizer` skill is not in the Skill list. It applies to prose only: never change a number, tag, table
cell, heading or quoted source text, and never add a fact. Work strongest tell first, then reread for the five tells that
survive rewrites (contrasts, closers, triads, dashes, bold labels).

## Tells, strongest first
1. Not-X-but-Y and its cousins ("not just", "not only ... but", "rather than X, Y" used for drama, "it isn't about X, it's about Y"). Allowed only where both halves carry a number or a named rule and the contrast corrects a real mistake.
2. One-line closers and morals at the end of a paragraph ("That is the point.", "The lesson is clear."). Delete; the last sentence should carry evidence.
3. Sayings, idioms and slogans ("move the needle", "low-hanging fruit", "the elephant in the room").
4. Staged run-ups before the point ("Here is the thing:", "This matters because", "The answer is simple:"). Start with the point.
5. Arguing with no one ("Some might say", "Critics will argue") unless a named source said it.
6. Forced triads: three adjectives or three parallel clauses where two, or one, carry the meaning.
7. Rhetorical questions and hooks (none outside research §32).
8. Dashes: em and en dashes, and spaced hyphens used as dashes. Use a comma, a colon, a full stop or "to" for ranges.
9. Hedge stacks ("may potentially", "could possibly help to").
10. Empty intensifiers ("truly", "really", "deeply", "incredibly").
11. Synonym cycling for the same thing within a paragraph (seller, merchant, vendor, artisan for one person). Pick one term per section.
12. AI vocabulary: additionally, align with, bolster, crucial, deep dive, delve, enduring, enhance, foster, garner, highlight (verb), interplay, intricate, key (adjective), landscape, meticulous, navigate, pivotal, quietly, robust, seamless, showcase, tapestry, testament, transformative, underscore, unlock, valuable, vibrant, ecosystem, journey (metaphor), realm, leverage (verb).
13. Inflated significance ("a landmark shift", "a watershed", "historic") without a number.
14. Vague attribution ("experts say", "studies show") without a tagged source.
15. Participle riders: "-ing" clauses tacked onto the end of a sentence to add a claimed effect ("..., ensuring compliance").
16. Copula avoidance: "serves as", "stands as", "boasts", "features" where "is" or "has" is meant.
17. False ranges ("from small artisans to large exporters") used as decoration.
18. Uniform sentence length: vary; mostly short, some long, none over 40 words.
19. Bold labels inside prose ("**Why it matters:**"). The `**Answer.**` lead of each H2 is the only bold label kept.
20. Title case in headings beyond the first word and proper nouns.
21. Emoji, decorative symbols, arrows in prose.
22. Excess signposting ("In this section we will", "As discussed above", "It is worth noting").
23. Generic conclusions that could fit any country or case.
24. Overuse of "ensure", "enable", "drive", "deliver" as all-purpose verbs. Name the actual action.
25. Writing about the document instead of the subject ("This report shows", "The table above highlights"). Allowed once per section to point to an exhibit.

## Procedure
1. Read the whole file once. 2. Mark each paragraph's tells by number. 3. Rewrite only marked sentences, keeping every
number, tag and named rule. 4. Reread for 1, 2, 6, 8 and 19. 5. Run the writer self-check in PLAN 11.2. 6. Report the
count of tells fixed per number.
```
<!-- END FILE -->
