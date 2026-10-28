# Project Perennial: execution plan for the Verdict 2.0 HarvestBox case (Motilal Nehru College, DU)

> **Who executes this.** A Sonnet-class main agent plus Sonnet sub-agents dispatched with the Agent tool
> (`subagent_type: "general-purpose"`, `model: "sonnet"`). The case is already solved here: the recommendation, the model,
> every locked number, every section title and every prompt are fixed. **The job is execution, not design.**
>
> **THE SEQUENCING RULE (user decision, 8 and 9 Oct 2026). This sits above everything else in this plan.**
> The work has two stages and they run strictly one after the other, never side by side.
> **Stage 1 is the research deliverable.** It is built first and completely: model, review mining, six verified research
> lanes, seven writer parts, assembly, PDF and critique, with section 15.1 fully ticked.
> **Stage 2 is the Figma deck.** It starts only after Stage 1 is completely executed, and it is a derivative of the finished
> research document, not a parallel product. No Figma call, no `gen.py` run and no slide edit happens during Stage 1. Stage 2
> opens with a derivation step (section 16.3) in which every slide is checked against the finished document and its copy
> is brought into line with what the research actually established. The slide scripts in section 19 are a tested starting
> layout for that step, not a finished deck.
>
> **What this plan produces**, all under `verdict-mnc/`. Stage 1: (1) `research/harvestbox-research.md` plus HTML and PDF, at least
> 50,000 words and 110 tables; (2) the 24-month model `model/harvestbox_model.py` with `model_outputs.json`,
> `model_tables.md` and `deck/values.js`; (3) a review-mining dataset of real meal-kit app reviews with a published codebook;
> (4) six verified raw research files and a source register. Stage 2: (5) a native Figma Slides deck of exactly 7 slides
> (1 cover, 4 core, 1 appendix, 1 thank-you), derived from the research, with logo placeholders and a PDF export.
>
> **Verified at planning time (8 Oct 2026), in memory, with nothing written to disk:** the model runs and passes its 14 checks
> (hash `06111c6c33`); the review miner pulls and codes live Play Store reviews (a 827-review test sample put "hard to skip
> or cancel" at 36.7% of low-star mentions against the case's 34%); `assemble.py`, `gen.py` and `extract.py` compile; all seven slide scripts pass the offline Figma mock with `warnings: []` and `ISSUES 0` (nodes 103, 355, 173, 283, 191, 233, 49); the six string
> replacements that turn the Dream11 PDF renderer into the HarvestBox one all match. If a first run does not reproduce
> these, something was retyped or the environment changed: stop and use section 14.

## 0. How to read this plan

| Part | Sections | What it is |
|---|---|---|
| I | 1 to 2 | Context, deliverables, ground rules |
| II | 3 to 5 | The solved case: argument, locked numbers, assumptions |
| III | 6 to 8 | Research lanes with seed sources, review mining, the research document specification |
| IV | 9 to 15 | Stage 1 (research): skill touchpoints, execution sequence, prompts, recovery, final checks |
| V | 16 | Stage 2 (deck): gate, derivation from the research, Figma build, validation, logos, export. Runs only after Stage 1 is complete |
| VI | 17 to 23 | Embedded files: model, deck palette, extras, slides, generator and validators, review miner, assembler, case brief, bootstrap |

### Roles

| Role | Model | Does | Never does |
|---|---|---|---|
| Main agent | Sonnet | Bootstrap, runs every script, builds the source register, dispatches, assembles, final report | Change a number, a section title or the recommendation |
| Verifiers V-A to V-F | Sonnet, at most three at once | Open the seed sources in section 6, confirm or correct each fact, add rows | Invent a figure, write prose, touch the model |
| Review coder V-G | Sonnet | Runs the miner, does the precision check, writes `R-G-review-mining.md` | Edit the codebook after seeing results, except by the one rule in 7.3 |
| Writers W-A to W-G | Sonnet, at most three at once | Write their sections into `research/parts/` | Browse the web, change a number, invent an interview |
| Critic CR | Sonnet | Scores the argument with the `case-competition-deck` critique rubric as re-based in section 9 | Rewrite sections |

### The Sonnet execution contract

DO
1. Follow section 11 step by step. Each step has a "Done when" test. Do not move on until it passes.
2. Extract files with the bootstrap (section 11.1). Never retype a code block.
3. Take every modelled number from `model/model_outputs.json` or `model/model_tables.md`. Take every external fact from a
   VERIFIED or CORRECTED row in `research/raw/`.
4. Log each step in `verdict-mnc/build-log.md` with `STATUS: PASS` or `FAIL` and what was fixed.
5. Invoke the `case-competition-deck` skill with the Skill tool at the five touchpoints in section 9 and log each.

DO NOT
1. Do not change the recommendation, a locked number, an H2 title or an assumption value.
2. Do not invent interviews, surveys, pilots, customer quotes, letters of intent or company data. HarvestBox is fictional and
   has no primary data. The validation plan in Appendix E is a plan and says so in its first sentence.
3. Do not present a real company's figure as a HarvestBox figure. Real-world evidence is context for the industry only.
4. Do not write an em dash, an en dash, a hook, a rhetorical question, an exclamation mark or a banned word (section 2.2).
5. Do not present an assumption as a case fact. Every non-case number carries its tag.
6. During Stage 1 do not open Figma, run `deck/gen.py` or edit a slide file. Stage 2 begins only when the gate in 16.1 passes.
7. Do not commit or push. Do not modify anything outside `verdict-mnc/` (reading other folders is fine).

---

# PART I. CONTEXT AND RULES

## 1. Context

### 1.1 Why this work exists

The team is entering **Verdict 2.0**, a case competition run by The Skill Development Cell, Motilal Nehru College, University
of Delhi (with Project Avsar). The case file is `verdict-mnc/6ac3e4aa93eb5_the_verdict_case_problem.pdf` (6 pages). Its
full transcription with reference IDs is embedded in section 22 as `case/01-case-brief.md`. Read it before anything else.

The case in one paragraph: HarvestBox is a fictional Indian subscription meal-kit company (founded 2019, five cities, one
fulfilment centre each, 410 staff). 2025 revenue is ₹42 Cr with an EBITDA loss of ₹9.2 Cr and ₹15 Cr of cash. Only 55% of
customers are still active at month 3 and 19% at month 12; LTV to CAC is 1.55x against a 3.0x benchmark; gross margin has
fallen from 38% to 31% and marketing has risen from 22% to 30% of revenue in four years. Investors will fund again only on
a credible path to profitability within 24 months. The Board can fund one of three proposals in the next 12 months:
A, fix the subscription experience (₹1.8 Cr); B, enter grocery retail (₹1.3 Cr); C, launch ready-to-eat meals (₹5 Cr).

### 1.2 What the organisers ask for (binding)

- Four deliverables: D1 diagnosis and evaluation of all three proposals on growth, profitability, cash and risk; D2 one
  major initiative, justified; D3 financial and risk case (revenue, margins, EBITDA, cash, retention, risks, mitigations);
  D4 a 90-day plan and 5 to 7 Board KPIs.
- One primary proposal only. Smaller operational improvements are allowed if they fit inside ₹15 Cr.
- Every major assumption stated and justified.
- Deck: at most 4 main slides, plus thank-you and up to 4 appendix slides. PDF on Unstop named `TeamName_CollegeName.pdf`.
  Seven minutes to present, three minutes of cross-questioning, all members speak.

### 1.3 Decisions the user locked (8 Oct 2026)

| Item | Decision |
|---|---|
| Order of work | Research deliverable first. Deck planned and built afterwards, from the research |
| Research length | No limit. Match or exceed `iim-lucknow-pivot/research/dream11-pivot-research.md` (49,765 words) and `maudrik-policy/research/pramaan-research.md` (54,198 words). Target here: 50,000 words or more, 110 tables or more |
| Language | Professional, humanised analytical storytelling. No hooks, no AI-sounding phrasing, no em dashes |
| Team | Team IdeaForge: Harsh Kawatra (Delhi Technological University, Team Leader), Gursimran Kaur (Guru Gobind Singh Indraprastha University, Member), Dayita Arora (Ramjas College, University of Delhi, Member) |
| Skill | The `case-competition-deck` skill is used throughout (section 9) |
| Not a template | The LSR "Case for Change" plan and deck are not to be used as a model: that deck was rejected in the PPT round. Do not read or copy `lsr-caseforchange/` or `lsr-revive/` |
| Deck (Stage 2) | 7 slides: 1 cover, 4 core, 1 appendix, 1 thank-you. Details in section 16 |

### 1.4 Decisions made at planning time (change only if the user says so)

| Item | Decision | Where to change it |
|---|---|---|
| Programme name | Project Perennial. An annual crop is replanted every season, the way HarvestBox re-buys its customer base every year; a perennial comes back on its own. Used as a plain name, never as a slogan | Section 3, writer prompts |
| The rebuilt Proposal A | "Flex with a floor" (short form: Flex) | Section 3.2 |
| The operating improvements | "the operating reset" (short form: the reset) | Section 3.2 |
| Document title | HarvestBox: Growing Without Burning Out | `HEADER` in `assemble.py` |

### 1.5 Folder layout after the build

```
verdict-mnc/
  6ac3e4aa93eb5_the_verdict_case_problem.pdf   (exists, never modified)
  PLAN.md  extract.py  build-log.md
  case/01-case-brief.md
  model/harvestbox_model.py  model_outputs.json  model_tables.md
  research/raw/R-A..R-F.md  R-G-review-mining.md  sources.md
           reviews/mine_reviews.py  reviews_raw.csv  review_outputs.json  review_tables.md  precision_sample.json
           parts/part-A..G.md  appendix-D.md  appendix-E.md  appendix-F.md
           assemble.py  build_pdf.py  harvestbox-research.md  harvestbox-research.html  harvestbox-research.pdf
           critique.md
  deck/values.js  _palette.js  _extras.js  _v1.js  _sweeps.js  gen.py  setup.js  slides/s01..s07.js   (extracted in Stage 1, used only in Stage 2)
  deck/derivation.md  overrides.json  preamble.js  mock_figma.js  derived/  build/  shots/  logos/  slide-ids.json  figma.md   (Stage 2)
```

## 2. Ground rules

### 2.1 Content integrity

1. Case facts are never modified. They live in `F` in the model and are tagged `[C K5]`, `[C PA3]` and so on.
2. HarvestBox is fictional. A real-world figure never replaces a case figure and is never attributed to HarvestBox.
3. Every team assumption has an ID (A01 to A25), a value, a rationale and a sensitivity (section 5).
4. Statistics stay at the precision the source supports. An unverified seed fact is dropped, not softened.
5. Indian units throughout: ₹, lakh, crore, Indian digit grouping. Foreign figures keep their own currency ($, €, £) and
   are never converted to rupees to look like Indian data.
6. No fabricated primary research. Customer voice comes only from verbatim public reviews of the real services named in
   section 7, attributed as "Play Store review of <app>, <Mon YYYY>", and is never called a HarvestBox customer.
7. Three case figures do not reconcile with the rest (section 3.4). The document says so plainly in its own section. It
   never hides this and never "corrects" the case.
8. If a locked number ever has to change, rerun the model and rewrite every sentence that uses it. Never patch one place.

### 2.2 Language standard

- Zero em dashes and en dashes. Use commas, colons, full stops or brackets. Ranges use "to". The minus sign is U+2212.
- No hooks: no rhetorical question as an opener, no "imagine", no suspense. State the finding.
- No exclamation marks. A question mark is allowed only inside a quoted judge question in section 27, written as
  `**Q7.** "..."`.
- Banned words and phrases (checked by `assemble.py`): here's, let's, bottom line, delve, game-changer, unlock, it's not
  just, make no mistake, landscape, robust, seamless, holistic, tapestry, paradigm, navigate the, revolutionise, cutting-edge,
  leverage, empower, transformative, journey, synergy, world-class, best-in-class, next-gen, reimagine, supercharge, harness,
  crucial, pivotal, furthermore, moreover, in today's, ever-evolving, imagine if, testament, realm, fast-paced.
- Register: first person plural, declarative, plain words, a number in most sentences, the reasoning shown. Written as a
  consultant writes a board memo: what we found, why it matters, what we would do, what could prove us wrong.
- H2 titles are action titles: a finding, with a number where one exists. They are fixed in section 8.2.

### 2.3 Tags (every number carries one)

| Tag | Meaning | Resolves to |
|---|---|---|
| `[C K5]` | Case fact by ID | `case/01-case-brief.md` |
| `[A08]` | Team assumption | Section 5 of this plan, section 25 of the document |
| `[M]` | Model output | `model/model_outputs.json` |
| `[T4]` | Model table | `model/model_tables.md`, Appendix B |
| `[S12]` | External source | `research/raw/sources.md`, Appendix A |
| `[V2]` | Review-mining table | `research/reviews/review_tables.md`, Appendix C |

### 2.4 Abbreviations

Expand every abbreviation on first use in each section. Any table with abbreviated column heads carries an italic line
directly under it expanding them. Appendix D lists every abbreviation used anywhere in the document.

### 2.5 Files to read before starting (main agent)

1. This plan, fully.
2. `CLAUDE.md` at the repo root, section 0 (the two-layer pipeline) and section 5 (content integrity).
3. `.claude/skills/case-competition-deck/SKILL.md`, loaded with the Skill tool.
4. `iim-lucknow-pivot/research/dream11-pivot-research.md` lines 1 to 140, to see the register, the tag legend and the
   "Answer." lead being matched. `maudrik-policy/research/pramaan-research.md` lines 1 to 120 for a second example.

---

# PART II. THE SOLVED CASE

## 3. The argument

### 3.1 Case type and how the skill is applied

This is a **strategy case** (choose among three growth options) with a **turnaround-finance spine** (runway, unit economics,
path to break-even) and a **marketing core** (retention, LTV, CAC). The `case-competition-deck` skill has guides for strategy
and marketing; it has nothing on subscription cohort models or cash runways, so the cohort and cash model in section 17
supplies that. Section 0 of the document says so, as the skill's calibration note requires.

The skill's 8-section logic maps onto the research document like this:

| Skill section | Document sections | What carries it |
|---|---|---|
| Executive summary, two-column for and against | 2 | Recommendation in one sentence, "do not" against "do" table |
| Context and the seed | 9, 10 | The dinner map: four substitutes are cheaper or faster, so a kit wins only with customers who stay. Seeds the answer without naming it |
| Actors, symmetric treatment | 11, 12, 13 to 15 | Same template for every precedent company; same template for proposals A, B and C |
| Quantitative analysis | 5 to 8, 19 | Cohort economics, margin bridge, 24-month model |
| Feasibility of the obvious answers | 13 to 16 | Each proposal as written runs out of cash inside 24 months |
| The moneyshot | 19 | Break-even in month 21 on the cash in hand, lowest cash ₹2.9 Cr |
| Recommended alternative and implementation | 17, 18, 22 to 24 | Flex with a floor, the reset, the 90-day plan, the month 12 gate |
| Double synthesis | 16 closes with "Conclusively"; 24 closes with "Therefore" | No new content in either |
| Appendix, defensive depth | 25, 27, Appendices A to F | Assumptions, 40 judge questions, tables, codebook |

### 3.2 The recommendation (contrarian pattern)

**The obvious answers and why each fails on the case's own numbers**

| Route | The obvious version | Why it fails |
|---|---|---|
| A as written | "34% leave because it is rigid, so let them skip" | Skipping is offered to every subscriber on day one, while the retention gain arrives one cohort at a time. In the model, year 1 ends ₹0.29 Cr worse than taking no decision, and cash still reaches zero in month 16. The whole proposal breaks even at a 12.6% skip rate |
| B | "₹8 Cr of new revenue for ₹1.3 Cr" | ₹8 Cr across 800 stores is ₹8,333 a store a month, at 22% gross margin, on a shelf beside a ₹3,500 private-label kit. It does nothing for the 45% who leave in three months and ties up about ₹1.7 Cr of working capital. Cash reaches zero in month 16 |
| C | "45% margin in a market growing 15%" | ₹5 Cr is a third of the cash, spent to sell through an app whose base loses 45% of sign-ups in three months. Cash reaches zero in month 15, earlier than doing nothing (month 18) |
| Pick the best of the three | "Score them and choose" | None of them is worth more than ₹2.5 Cr a year against a ₹9.2 Cr loss. The initiative is a quarter of the answer; the operating reset is the rest |

**The recommendation.** Primary initiative: **Proposal A, rebuilt as Flex with a floor**, with the operating reset that only
a flexible subscription makes possible, and Proposal C staged into year 2 behind a cash gate. Proposal B waits.

Flex with a floor, feature by feature:

| Feature in the case | As written | Rebuilt | What it guards against |
|---|---|---|---|
| Skip or pause | No penalty, no limit | Free, with a return date on every pause, and a floor of two boxes in any three months | Customers ordering less often (the case's own stated risk) |
| Choose 2 or 4 meals | Two more sizes | A ₹3,600 two-meal entry plan and a ₹6,600 four-meal family plan beside the ₹5,200 plan | "Too expensive" (27% of exits) and the ₹3,500 private label, without discounting the core box |
| Swap recipes | Any recipe | Swaps inside one ingredient family | Extra ingredient waste |
| Larger menu | More recipes | About 40 recipes built from the same 120 ingredients | Menu repetition (18%) without more stock-keeping units |
| Refer friends | Rewards | ₹1,000 each side, paid when the friend takes a third box | Paying for sign-ups who leave in month 1 |

The operating reset (the "smaller operational improvements" the case allows):

| Lever | What changes | Model input |
|---|---|---|
| Prune paid acquisition | Stop the costliest 10% of paid volume, where CAC exceeds lifetime gross profit | A15, A16 |
| Cut non-working marketing | 40% off the ₹4.29 Cr of marketing that the CAC figure does not explain | A17 |
| Web conversion | 2.8% to 3.3% once the entry price and the skip promise are on the first page | A14 |
| Win back lapsed accounts | About 40 a month at ₹800 each, using the pause feature as the offer | A12, A13 |
| Gross margin | +4.0 points: waste from 6% towards 4%, shared-ingredient menu, buying, less first-box discounting, better fulfilment-centre absorption | A18 |
| Overheads | Down 12%: head office moved into spare fulfilment-centre space (the lease is ₹1 Cr), hiring freeze | A19 |

The year 2 gate: if cash is at least ₹7 Cr and LTV to CAC of new cohorts is at least 2.2x at month 12, release a staged
ready-to-eat launch at 80% of Proposal C's scale (₹4 Cr, two largest cities first, using the 32% of fulfilment-centre
capacity that is idle). If the gate is missed, the plan stays on the core path and ends month 24 with ₹5.6 Cr.

**Three reasons each side** (document section 2 and Q and A):

| Side | Quantitative | Strategic fit | Feasibility |
|---|---|---|---|
| Not A as written, B or C first | Each reaches zero cash between month 15 and 16 | None changes CAC, which is where the money goes | C needs a kitchen, cold chain and a food-safety system the firm has never run |
| Perennial | Loss ₹9.2 Cr to ₹5.5 Cr to ₹0.8 Cr; break-even month 21; lowest cash ₹2.9 Cr | Customers who stay rate the product 4.6 of 5: the product works, the contract does not | ₹1.8 Cr, software and process, reversible, live in 12 weeks |

### 3.3 The twelve insights

Each is derivable from the case tables. The writer of the section named must develop it with the arithmetic shown.

| # | Insight | Rests on | Section |
|---|---|---|---|
| 1 | The retention table and "6.8 lifetime boxes" agree only if a box is one month of dinners: the survival curve sums to 4.97 boxes in year 1 and 6.8 with a tail that continues at the month 6 to 12 rate. A box at ₹5,200 is 12 dinners at ₹433, inside the case's ₹350 to ₹650 band | Case + A01 | 4, 5 |
| 2 | ₹42 Cr at ₹5,200 is 6,731 boxes a month. "62,000 active subscribers" would be ₹387 Cr a year at one box a month, so only about 1 in 9 buys in a given month. Web traffic times conversion gives 39,200 first orders a month against about 990 new customers implied by revenue. These three figures are reported, not used | Case | 4 |
| 3 | Overheads are not the problem: other operating cost fell from 28% to 23% of revenue. All 15 lost margin points sit in two lines: gross margin −7 and marketing +8 | Case | 3, 8 |
| 4 | Each extra rupee of revenue cost 31 paise of marketing in 2023, 38 in 2024 and 49 in 2025. Growth is being bought at a rising marginal price | Case | 8 |
| 5 | CAC of ₹7,000 is paid back in month 10, when 23% of the cohort is still there | Case + A01 | 5, 6 |
| 6 | The average hides two customers. The 45% gone by month 3 take 1.4 boxes and lose ₹4,719 each: ₹2.5 Cr a year. The 55% who stay take 11.2 boxes and return 2.56x | Case + A01 | 6 |
| 7 | 3.0x is not a vanity benchmark. At 36% gross margin, 4% non-working marketing and 20% overheads, acquisition can be 12% of revenue, which is LTV to CAC of exactly 3.0x. The benchmark is the break-even condition | Case + arithmetic | 6 |
| 8 | Runway at today's burn is 19.6 months, shorter than the investors' 24 | Case | 3 |
| 9 | A answers 63% of stated exits (rigid 34, portions 11, variety 18). B answers none. C answers part of the 18% | Case | 7, 16 |
| 10 | A as written loses money in year 1 because everyone can skip at once while retention builds cohort by cohort; break-even skip rate 12.6% | Model | 13 |
| 11 | ₹8 Cr through 800 stores is ₹8,333 a store a month, less than two boxes at ₹5,200 | Case | 14 |
| 12 | With the same reset, C first earns ₹0.4 Cr more EBITDA over 24 months than the core plan but ends with ₹2.9 Cr of cash against ₹5.6 Cr and a run-rate loss of ₹3.2 Cr against ₹1.7 Cr. Sequence beats selection: A first makes C cheaper to reach and worth more | Model | 16, 24 |

### 3.4 Rhetorical engineering (from the skill)

- **Action titles.** The H2 titles in section 8.2 are findings and are locked.
- **Foreshadowing.** Sections 9 and 10 establish the dinner map and stop at "a kit wins only with customers who stay". The
  answer is named in section 2 and paid off in section 17.
- **Symmetric treatment.** Sections 13, 14, 15 use one template (what it is, economics as written, what it fixes, what it
  leaves, cash path, risk, what would make it right). Section 11 uses one template for every precedent company.
- **Three scenarios.** Bear, base, bull with named inputs; bear shown both with no response and with the month 7 contingency.
- **Moneyshot.** One only: break-even in month 21 on the ₹15 Cr in hand.
- **Pre-empting weaknesses.** Section 4 discloses the three figures that do not tie. Section 19 states that referral and
  conversion carry the largest single share of the bridge and have the thinnest evidence. Section 20 shows every
  one-at-a-time downside turning the run-rate negative.
- **Third-party validation.** Named precedents with verified figures only (section 6, lanes B and C). No anonymous experts.
- **Double synthesis.** Section 16 closes with a paragraph beginning "Conclusively"; section 24 with "Therefore".
- **Defensive depth.** Every number traces to a model table T1 to T13, reproduced as Appendix B.

### 3.5 Frameworks used and where

| Framework | Document section | Why here |
|---|---|---|
| MECE issue tree of the EBITDA gap (price, volume, gross margin, marketing, overheads) | 3, 8 | Shows the loss sits in two lines |
| Cohort survival and unit economics (LTV, CAC, payback, contribution) | 5, 6 | The case's core |
| Jobs to be done and the dinner map | 9, 10 | Defines substitutes by the job, not the category |
| Porter's five forces and strategic groups | 10 | Substitutes and buyer power dominate |
| Kano model on the five Proposal A features | 17 | Separates must-haves (skip) from delighters (menu) |
| Ansoff matrix for A, B, C | 16 | A is penetration, B is market development, C is product development |
| MECE option filter and weighted scorecard with formula | 16 | Rule-based scores, weights stated |
| Three-scenario projection, tornado, two-way grid | 20 | One scenario set for the whole document |
| Real options and stage gates | 24 | Ready-to-eat as an option exercised at month 12 |
| AARRR funnel | 18 | Organises the reset levers |
| Risk register with probability and impact, pre-mortem | 21 | 12 risks |
| Balanced scorecard and KPI tree | 23 | Seven Board KPIs |
| RACI with letters expanded | 22 | 90-day plan ownership |

Use two to four per section. Do not add frameworks that are not in this table.

## 4. Locked numbers (reference output of the model)

Step M1 must reproduce these. Tolerance: exact at the precision shown.

| Item | Value |
|---|---|
| Model hash | `06111c6c33` |
| Boxes a year; a month | 80,769; 6,731 |
| New customers a month; a year (steady state) | 990; 11,878 |
| Acquisition spend implied by CAC; marketing not explained by CAC | ₹8.31 Cr; ₹4.29 Cr |
| Other operating cost 2025 | ₹9.66 Cr (23% of revenue) |
| Survival, months 1 to 12 | 100, 74.2, 55.0, 46.9, 39.9, 34.0, 30.9, 28.0, 25.4, 23.1, 20.9, 19.0 |
| Sum of months 1 to 12; monthly retention after month 12 | 4.97 boxes; 0.9058 |
| CAC payback month; cohort remaining | Month 10; 23% |
| Leavers by month 3: boxes, gross profit, loss each, loss a year | 1.4; ₹2,281; ₹4,719; ₹2.5 Cr |
| Stayers: boxes, gross profit, LTV to CAC | 11.2; ₹17,915; 2.56x |
| Runway at today's burn | 19.6 months |
| Lifetime active months with Flex; break-even skip rate | 7.78; 12.6% |
| CAC that gives 3.0x today; boxes that give 3.0x today | ₹3,633; 13.1 |
| Marketing per rupee of new revenue 2023, 2024, 2025 | 0.31, 0.38, 0.49 |
| No decision: EBITDA Y1, Y2; cash zero month | −10.15, −11.86; month 18 |
| A as written: EBITDA Y1, Y2; cash zero month; year 1 against no decision | −10.44, −11.05; month 16; −0.29 |
| B as written: EBITDA Y1, Y2; cash zero month | −9.31, −10.71; month 16 |
| C as written: EBITDA Y1, Y2; cash zero month | −8.35, −9.24; month 15 |
| Reset only: EBITDA Y1, Y2; cash M24 | −6.02, −5.43; 3.55 |
| B with the reset: EBITDA Y1, Y2; run-rate; cash M24 | −5.19, −4.30; −4.65; 2.39 |
| C with the reset: EBITDA Y1, Y2; run-rate; cash M24 | −4.24, −2.85; −3.19; 2.92 |
| Perennial core (A rebuilt): revenue Y1, Y2; EBITDA Y1, Y2; run-rate; cash M12, M24 | 41.3, 47.8; −5.53, −2.02; −1.69; 7.67, 5.65 |
| Perennial base (with staged ready-to-eat): revenue Y1, Y2; EBITDA Y1, Y2; run-rate | 41.3, 51.6; −5.53, −0.75; +0.10 |
| Base: break-even month; lowest cash and month; cash M12, M24 | Month 21; ₹2.89 Cr in month 20; 7.67, 2.92 |
| Base: gross margin Y1, Y2; marketing % Y1, Y2 | 32.2%, 35.1%; 23.4%, 17.5% |
| Base: blended CAC at M24; LTV to CAC at M12, M24 | ₹4,745; 2.74x, 2.70x |
| LTV to CAC ladder | 1.55, 1.67 (retention net of skips), 1.83 (margin), 2.70 (CAC), benchmark 3.0 |
| Bear, no response: cash zero month | Month 20 |
| Bear with the month 7 contingency: EBITDA Y1, Y2; cash M24 | −6.18, −5.56; 1.46 |
| Bull: EBITDA Y1, Y2; break-even month; run-rate; cash M24 | −4.78, +2.48; month 14; +3.67; 5.90 |
| Bridge, ₹ Cr a year | −9.24; headwinds −1.64; non-working marketing +1.71; pruning +0.62; overheads +1.25; margin +1.53; Flex retention +0.31; referral, win-back, conversion +3.77; staged ready-to-eat +1.79; run-rate +0.10 |
| Uses of ₹15 Cr | Flex 1.80; year 1 loss 5.53; staged ready-to-eat 4.00; year 2 loss 0.75; cash left 2.92 |
| Scorecard (growth, profit, cash, risk; score) | A written 1, 2, 4, 4; 2.80. B 5, 3, 3, 2; 3.20. C 4, 5, 1, 2; 3.00. A rebuilt 1, 5, 4, 4; 3.70 |
| 24-month change against no decision, revenue and EBITDA | A +4.7, +0.5. B +18.0, +2.0. C +13.2, +4.4. B with reset +12.6, +12.5. C with reset +7.9, +14.9. A rebuilt +5.1, +14.5 |
| Sensitivity of run-rate EBITDA, low and high | Retention 60 to 70%: −0.83, +1.03. Skip 12 to 0%: −1.14, +0.99. Referral 10 to 30%: −1.12, +1.65. Conversion 3.0 to 3.6%: −0.50, +0.60. Margin +2.5 to +5.0: −0.63, +0.59. Overheads 6 to 15%: −0.52, +0.41. Non-working cut 25 to 50%: −0.54, +0.53. Ready-to-eat 50 to 120%: −0.80, +0.46 |
| 24-month EBITDA grid (retention rows 55, 60, 65, 70%; skip columns 0, 5, 10, 15%) | −7.1, −8.3, −9.6, −10.8 / −6.0, −7.3, −8.6, −9.9 / −5.0, −6.3, −7.6, −8.9 / −3.9, −5.3, −6.7, −8.0 |
| Board KPIs on the base path (today, day 90, M12, M24) | Blended CAC ₹7,000, ₹6,276, ₹4,619, ₹4,745. Gross margin 31.0, 31.2, 33.6, 35.2%. Marketing 30.0, 25.2, 20.3, 16.6%. Cash 15.0, 11.2, 7.7, 2.9 |

**Honest reading of these numbers, to be written into sections 19 and 20 without softening.** The base case crosses
break-even in month 21 and then sits just above zero (run-rate +₹0.10 Cr a year): it is a break-even plan, not a profit
plan, inside 24 months. Without the year 2 ready-to-eat stage the run-rate is −₹1.7 Cr with ₹5.6 Cr in the bank. Every
single downside in the sensitivity table turns the run-rate negative. The bear case survives 24 months only with the
contingency. The largest step in the bridge (referral, win-back and conversion, +₹3.77 Cr) rests on the assumptions with
the least outside evidence (A10, A14). This is why the plan has gates.

## 5. Assumptions register

This table is the content of document section 25 and the source of every `[A##]` tag. Writers copy rationale text from here.

| ID | Assumption | Value | Rationale | Sensitivity shown |
|---|---|---|---|---|
| A01 | A "box" is one month of dinners; survival between case points is geometric; retention after month 12 | 0.9058 a month | Solved so lifetime boxes equal the case's 6.8. Close to the month 6 to 12 rate (0.9076), so the case is internally consistent on this reading | Section 4 |
| A02 | Revenue is in steady state at 2025 volumes at month 0 | 990 new customers a month | ₹42 Cr ÷ ₹5,200 ÷ 12 ÷ 6.8. Growth slowed from 53% to 10.5% | Section 4 |
| A03 | Gross margin drift with no decision | −1.5 points a year | History is −2.3 a year; we assume less, which flatters the no-decision case | Drift scenario |
| A04 | Paid CAC inflation with no decision | 8% a year | Marketing per rupee of new revenue rose from 0.31 to 0.49 in two years | Drift scenario |
| A05 | Other operating cost inflation, every scenario | 4% a year | Wage and rent inflation | Bridge "headwinds" |
| A06 | Gross margin drift under the plan | −0.5 points a year | Input inflation continues; discount pressure stops | Bridge "headwinds" |
| A07 | Paid CAC inflation under the plan | 3% a year | Channels are pruned, not pushed | Bridge "headwinds" |
| A08 | Share of boxes skipped once skipping is free | 5% base, 10% bear, 3% bull | The floor (two boxes in three months) caps it near 33% in theory; break-even is 12.6% | Grid, tornado |
| A09 | Order value after the plan mix | ₹5,091 (20% at ₹3,600, 65% at ₹5,200, 15% at ₹6,600) | Entry plan priced at ₹450 a meal, family plan at ₹412 | Section 17 |
| A10 | New customers from referral | 20% of sign-ups by month 12 (10% bear, 28% bull) | Lane C benchmark, to be verified | Tornado |
| A11 | Referral cost | ₹2,000 a customer | ₹1,000 each side, paid on the third box | Section 18 |
| A12 | Win-backs | 40 a month from month 4 (20 bear) | About 3,300 of last year's leavers left for rigidity | Section 18 |
| A13 | Win-back cost | ₹800 each | One box credit and messaging | Section 18 |
| A14 | Website conversion | 2.8% to 3.3% (3.0% bear, 3.5% bull) | Entry price and skip promise remove the two largest stated objections at sign-up. Used as a ratio only | Tornado |
| A15 | Paid volume pruned | 10% | The costliest decile of paid customers | Section 18 |
| A16 | Paid CAC after pruning | 0.89 of today | If the pruned decile costs twice the average, the rest costs 0.89. That decile's CAC of ₹14,000 exceeds lifetime gross profit of ₹10,900 | Section 18 |
| A17 | Non-working marketing | Cut 40% (25% bear) | ₹4.29 Cr of marketing is not explained by CAC × new customers | Tornado |
| A18 | Gross margin levers | +4.0 points over 15 months (+2.5 bear, +5.0 bull) | Waste 6% to about 4% (+0.8), fulfilment-centre absorption on more volume (+1.2), shared-ingredient menu and buying (+1.2), packaging (+0.3), less first-box discounting (+0.5). Lands at 35%, below the 36% of 2023 | Tornado |
| A19 | Overheads | Cut 12% (5% bear, 12% bull) | ₹1 Cr lease moved into idle fulfilment-centre space, hiring freeze with normal attrition | Tornado |
| A20 | Flex running cost | ₹0.25 Cr a year | Support, menu development | Section 19 |
| A21 | Proposal B terms | Returns and unsold stock 4% of sales; channel cost 6%; 5% cannibalisation; 60 days of receivables; 8% growth in year 2 | Chilled kits with short shelf life; modern-trade credit terms | Section 14 |
| A22 | Proposal C terms | Running cost 12% of ready-to-eat sales; 15% growth in year 2; six-month ramp | Quality, cold chain and launch marketing; the case's market growth | Section 15 |
| A23 | Staged ready-to-eat | 80% of C's scale, ₹4 Cr over months 13 to 15, sales from month 14 | Two largest cities first, in idle fulfilment-centre space | Tornado |
| A24 | Scorecard weights | Growth 20, profit 30, cash 30, risk 20 | The investors' test is profit and survival | Section 16 |
| A25 | Month 7 contingency | Paid acquisition halved, non-working marketing halved, overheads down a further 15% | Acquisition is paid ten months before it returns, so cutting it is the fastest cash lever | Section 20 |

---

# PART III. RESEARCH

## 6. Research lanes

Six desk lanes and one data lane. Each verifier writes one file `research/raw/R-<lane>.md` using the schema below. The seed
facts were found at planning time by web search and are **unverified**; several conflict with each other. Every row must be
opened and marked.

**Raw file schema** (one table per question):

`| R-ID | Fact (exact figure, unit and date) | Source title | Publisher | URL | Date accessed | Verbatim snippet (max 25 words) | Status |`

Status is VERIFIED, CORRECTED (give the corrected figure) or UNVERIFIABLE. R-IDs are RA01, RA02, ... per lane. Each file ends
with `## Gaps` and `## Conflicts` (two sources that disagree, with both figures). No argument, no recommendation, no model
numbers in a raw file. Target: 35 to 60 rows a lane.

**Source hierarchy:** company filings, annual reports and investor presentations; regulator and government text (FSSAI,
ministries); industry bodies and named research houses (with the report name and year); reputable trade and business press;
blogs and vendor pages last, flagged `[blog]` and never the sole support for a number.

### Lane A: the Indian convenience-food market

Questions: A1 size and growth of ready-to-eat and ready-to-cook food in India, by named report, with the definition each
uses; A2 meal kits in India, size and growth if any credible figure exists; A3 quick commerce scale (orders, dark stores,
cities) for Blinkit, Zepto, Swiggy Instamart; A4 ten-minute food services (Zepto Cafe, Blinkit Bistro, Swiggy Bolt, Snacc):
launch dates, cities, order volumes; A5 food delivery scale (Zomato, Swiggy: orders, average order value); A6 urban
household cooking behaviour: working couples, time spent cooking, eating-out frequency, from government or named surveys;
A7 modern-trade grocery chains and private-label share in India.

Seeds: IMARC, India ready-to-eat meals market $5.75 bn in 2024, $11.74 bn by 2033, 8.26% a year
`https://www.imarcgroup.com/india-ready-to-eat-meals-market`; Ken Research $1.28 bn in 2025 to $3.18 bn by 2031, 16.4% a year
`https://www.kenresearch.com/industry-reports/india-ready-to-eat-rte-food-market.md`; Technavio 28.8% a year 2025 to 2030
`https://technavio.com/report/ready-to-eat-food-market-in-india-industry-analysis`; GlobalData ready meals 14.29% a year
2020 to 2025. **These disagree by a factor of four on size and three on growth: record each with its definition and put the
disagreement in `## Conflicts`.** Zepto Cafe at 30,000 orders a day and 100+ cafes a month; Blinkit Bistro pilot in Gurugram;
Swiggy Bolt in 400+ cities `https://officechai.com/startups/zepto-announces-zepto-cafe-blinkit-launches-bistro-for-10-minute-deliveries/`,
`https://inc42.com/buzz/blinkit-launches-new-app-bistro-to-take-on-zepto-cafe`,
`https://www.storyboard18.com/brand-marketing/zomatos-blinkit-launches-bistro-to-compete-with-zepto-cafe-and-swiggys-cafe-50356.htm`.

Instruction to V-A: the case states meal kits grow 8% and ready-to-eat 15% (`[C M1]`, `[C M2]`). Report what outside
sources say; never replace the case figures.

### Lane B: global meal-kit precedents

Questions, the same seven for each of HelloFresh, Blue Apron, Gousto, Marley Spoon (with Dinnerly), Home Chef (Kroger) and
Factor: B1 revenue and active customers by year; B2 marketing as a share of revenue by year; B3 any disclosed retention,
order rate or orders per customer; B4 profitability by year; B5 what the company changed (flexibility, menu size, price
tiers, ready-to-eat, retail) and when; B6 the outcome; B7 one verbatim management statement on retention or marketing
efficiency, with date.

Seeds: HelloFresh FY2025 preliminary results: revenue about €6.76 bn, down 9.0% in constant currency; adjusted EBITDA about
€423 m; meal-kit category adjusted EBITDA margin 13.5%; marketing down 0.9 points of revenue; an "efficiency program"
`https://webdisclosure.com/press-release/hellofresh-se-etr-hellofresh-group-preliminary-results-for-the-fiscal-year-2025-7F8KwxT58dA`,
`https://www.tradingview.com/news/eqs:3a0e49d6f094b:0-hellofresh-se-s-efficiency-program-drives-strong-q2-2025-results-paving-the-way-for-renewed-customer-focus`,
quarterly and annual reports under `https://irpages2.eqs.com/download/companies/hellofresh/`. **A second search summary gave
"18.2% of revenue on marketing, €1.95 bn of €10.72 bn" and "7.6 million active subscribers": these do not fit €6.76 bn
revenue and are probably wrong. Resolve from the annual report or drop.** HelloFresh agreed to buy Factor75 in November 2020
and completed on 31 December 2020 `https://esmmagazine.com/technology/hellofresh-acquires-ready-eat-meal-company-factor75-114918`.
Blue Apron: IPO June 2017 at about $1.89 bn; sold to Wonder Group for $103 m, $13 a share, completed 13 November 2023; had
sold its operating infrastructure and cut staff before the sale `https://www.grocerydive.com/news/blue-apron-wonder-group-acquisition-marc-lore/695187/`,
`https://www.esmmagazine.com/a-brands/wonder-group-acquires-us-meal-kit-maker-blue-apron-for-103m-250573`. Gousto 2025:
sales up 10% to £342 m, adjusted EBITDA £45 m, third profitable year `https://www.grocerygazette.co.uk/2026/05/13/gousto-sales-return-to-growth/`
(a `[blog]` page claimed 200 recipes a week, 53% gross margin and a 78% repeat rate: verify from Gousto or drop). Home Chef:
bought by Kroger in 2018, in over 2,200 stores, above $1 bn of annual sales by 2021
`https://www.foodnavigator-usa.com/Article/2021/10/25/Home-Chef-surpasses-1bn-in-annual-retail-sales`.

### Lane C: subscription retention, CAC and referral benchmarks

Questions: C1 meal-kit retention by month from any named panel study; C2 subscription-box churn by month (McKinsey 2018
"Thinking inside the subscription box"); C3 evidence on what pause and skip features do to churn and to order frequency;
C4 Indian direct-to-consumer CAC, LTV to CAC and payback benchmarks; C5 referral programmes: share of sign-ups, cost per
referred customer, retention of referred against paid customers (academic and company sources; Schmitt, Skiera and Van den
Bulte 2011, Journal of Marketing, is the standard reference); C6 website conversion benchmarks for food subscriptions;
C7 the origin and meaning of the 3:1 LTV to CAC rule.

Seeds: about 10% of HelloFresh, Blue Apron and Plated customers remained after six months (1010data, 2016)
`https://www.fastcompany.com/3064792/meal-kit-customers-dine-and-dash`, `https://thefern.org/ag_insider/meal-kit-customers-sign-dont-stick-around`,
`https://www.cnbc.com/2017/05/27/meal-kit-subscriptions-dont-stand-the-test-of-time.html`; McKinsey: 38% of subscription-box
customers cancel within three months, over 62% within six (verify against the McKinsey paper itself); meal kits churn 8 to
15% a month `[blog]` `https://eightx.co/blog/meal-kit-subscription-churn-rate-benchmark`; Indian direct-to-consumer brands
"run healthy at 1.5 to 2.5:1 in early years", payback target six months `[blog]` `https://echai.ventures/d2c/d2c-roas-cac-attribution/ltv-cac-ratio-india-target`,
`https://upgrowth.in/customer-acquisition-cost-vs-lifetime-value/`.

Instruction to V-C: HarvestBox keeps 34% at six months `[C R3]` against about 10% in the 1010data study. If verified, this
is a finding in its own right: the category leaks everywhere, and HarvestBox leaks less than its best-known peers did. State
the study's date, sample and method so writers can caveat it.

### Lane D: Indian meal kits and fresh-food subscriptions

Questions: D1 which Indian meal-kit companies existed (iChef, Burgundy Box, Chef's Basket, Cookfresh, Let's Chef, Fabbox,
others), founding year, funding, what happened and when, with the stated reason where one exists; D2 Indian fresh-food
subscription or direct brands that reached scale (Licious, FreshToHome, Country Delight, iD Fresh, FreshMenu, EatFit,
Rebel Foods): revenue, loss, model; D3 Indian chilled ready-to-eat brands and their channels; D4 what Indian modern-trade
retailers charge suppliers (margins, listing fees, credit days, returns) from any named source.

Seeds: Chef's Basket founded 2012, raised $6 m from SAIF in November 2015 `https://inc42.com/flash-feed/chefs-basket-funding`;
Burgundy Box founded January 2015; iChef delivered pre-portioned recipe kits `https://www.cbinsights.com/compare/chefs-basket-vs-ichef1`;
EatFresh shut its core business `https://officechai.com/news/eatfresh-shuts-down-operations/`.

Instruction to V-D: where no reason for a shutdown is on record, write "no stated reason found". Do not infer one.

### Lane E: food safety, cold chain and operations for ready-to-eat

Questions: E1 FSSAI licence types and the turnover thresholds between registration, state licence and central licence;
E2 the rules that apply to chilled ready-to-eat meals (storage temperature, shelf-life labelling, Schedule 4 hygiene
requirements, testing); E3 FSSAI rules for e-commerce food business operators, including minimum remaining shelf life at
delivery; E4 typical shelf life of chilled ready meals and what extends it (modified-atmosphere packaging, high-pressure
processing); E5 cost benchmarks for a central kitchen and for cold-chain delivery in India, from any named source;
E6 food waste in meal kits against grocery retail, from published studies; E7 penalties and recall procedure under the
Food Safety and Standards Act 2006.

Seeds: chilled storage at 4°C or below; FSSAI requires e-commerce sellers to deliver food with at least 30% of shelf life
or 45 days remaining (verify the exact wording and whether it applies to short-life chilled food)
`https://velcolegalindia.com/blog/fssai-license-frozen-food-cold-chain-india`, `https://clearlycomply.org/fssai/ready-to-eat-food-manufacturing/`.
Prefer `fssai.gov.in` text for every row.

### Lane F: retail and private label

Questions: F1 how grocery-store meal kits have performed where they were tried (Kroger and Home Chef, Walmart, Albertsons
and Plated, UK supermarkets); F2 evidence on brand effects of selling a premium direct brand in grocery; F3 private-label
price gaps and share in Indian modern trade; F4 the Albertsons and Plated story (bought 2017, wound down) with dates and
stated reasons; F5 store velocity benchmarks for chilled premium products.

Seeds: Kroger rotated four Home Chef recipes weekly in store at $17 to $20 a kit `https://www.digitalcommerce360.com/2019/02/06/kroger-expands-in-store-distribution-of-home-chef-meal-kits/amp`;
Marley Spoon's chief executive on cheaper, more personalised kits `https://insidefmcg.com.au/2018/12/17/marley-spoon-ceo-plots-cheaper-and-more-personalised-meal-kits-in-the-future/`.

### After the six files exist

The main agent builds `research/raw/sources.md`: one table `| ID | Source | URL | Lane rows |` assigning S01, S02, ... to
every source behind a VERIFIED or CORRECTED row. Source text is Harvard-like: Publisher (year) 'Title'. S01 is the case
file. The row pattern must be exactly `| S07 | text | url | RB03, RB04 |` because `assemble.py` parses it.

## 7. Lane G: review mining

### 7.1 What it is and what it is not

`research/reviews/mine_reviews.py` (section 20) pulls recent public Google Play reviews of six real services (HelloFresh,
EveryPlate, Home Chef, Dinnerly, Green Chef as meal kits; CookUnity as a ready-to-eat service) and codes each review
against the case's five exit reasons plus two extra themes, with a published regular-expression codebook. It answers one
question: do paying customers of real meal kits complain about the same things, in roughly the same order, as the case says
HarvestBox's leavers do. It is US and UK customers of other companies, self-selected reviewers, keyword coding. It is
association only and the document says so every time a review figure is used.

### 7.2 Steps (V-G)

1. From `verdict-mnc/research/reviews`, run `python -X utf8 mine_reviews.py`. Done when it prints the summary and
   "wrote reviews_raw.csv review_outputs.json review_tables.md precision_sample.json", with at least 3,000 reviews in total
   and at least four apps above 300 reviews. An app that fails to load is skipped by the script; log it.
2. Precision check. Open `precision_sample.json`. For each theme read the 20 sampled reviews and mark each as a true or
   false match for the theme's label. Precision is true matches ÷ 20. Record the seven precisions.
3. Write `research/raw/R-G-review-mining.md`: method (apps, ids, dates, counts from `review_outputs.json`), the precision
   table, tables V1 to V4 copied from `review_tables.md`, five to eight verbatim quotes per case reason (W1 to W5) with app,
   star rating and month, a `## Limits` section, and one paragraph comparing the review mix (table V3) with the case's 34,
   27, 18, 11, 10.
4. Label any theme with precision under 70% as "(indicative)" everywhere it is used.

### 7.3 The one permitted codebook change

If a theme's precision is under 60%, V-G may add a single exclusion to that theme by editing its regular expression in
`mine_reviews.py` to remove the one alternative that caused most false matches, rerun, and redo the check for that theme
only. The change and both precisions are logged in `R-G-review-mining.md`. No other edit to the codebook is allowed, and
none is allowed to move a result towards the case's figures.

## 8. Research document specification

### 8.1 Format

- File `research/harvestbox-research.md`, assembled by `assemble.py md`. The header is written by the assembler; writers
  never write an H1.
- Each H2 is numbered `## N. Title` with the exact title from 8.2 and opens with a bold `**Answer.**` paragraph of two to
  four sentences. Sub-sections are `### N.M Title`.
- Tables are pipe tables, each introduced by a sentence and followed by a sentence that says what it shows.
- Worked arithmetic is shown in full the first time a derived number appears (for example
  `₹42 Cr ÷ ₹5,200 = 80,769 boxes a year`).
- No images. Blockquotes only for verbatim reviews and verbatim management statements of at most 40 words, each attributed.
- Every section that corresponds to a deck slide ends with a line `Exhibit for the deck: ...` naming what would be drawn.

### 8.2 Section outline, content and owner

| § | H2 title (use exactly) | Must contain | Tables (min) | Words (min) | Writer |
|---|---|---|---|---|---|
| 0 | Document control | Purpose and reader; tag legend; source hierarchy; model version and hash; the skill's calibration note (patterns from M&A decks, cohort and cash model supplied by the team); what is case fact, assumption, model output and outside evidence; how to rerun the model | 4 | 900 | W-A |
| 1 | Coverage matrix: every ask in the case mapped to a section | One row per ID in the case brief (K1 to K12, R1 to R4, W1 to W6, U1 to U8, P22 to P26, M1 to M4, PA1 to PA4, PB1 to PB5, PC1 to PC7, X1 to X6, D1 to D4, G0 to G8): what the case says, how we use it, section | 2 | 900 | W-A |
| 2 | Board answer: fund Proposal A, rebuilt, and reach break-even in month 21 on the cash in hand | Recommendation in one paragraph; "do not" against "do" table from 3.2; Flex feature table; the reset table; the year 2 gate; three reasons each side; what would change our mind (five named triggers); a 150-word version for the cover | 5 | 2,000 | W-A |
| 3 | The case in numbers: 15 margin points were lost in two lines and none in overheads | T1 rebuilt with rupee values; issue tree of the EBITDA gap; overheads 28% to 23%; marketing per rupee of new revenue 0.31, 0.38, 0.49; runway 19.6 months against 24; revenue growth 53%, 31%, 10.5% | 5 | 2,000 | W-A |
| 4 | Data reconciliation: three case figures do not tie, and the plan does not depend on them | What a box is (insight 1); the survival curve fitted to the four case points and the tail that ties to 6.8; 62,000 subscribers against 6,731 boxes; web conversion against implied new customers; three readings of "active subscribers" and why none changes the answer; what the team would ask HarvestBox's finance head on day 1 | 5 | 2,200 | W-A |
| 5 | Retention: 45% of sign-ups are gone by month 3 and CAC is not paid back until month 10 | T3; month-by-month survival and cumulative gross profit against CAC; comparison with Lane C benchmarks, with the caveat on dates and method; where in the first 90 days customers fall out and what the case lets us say about why | 5 | 2,400 | W-B |
| 6 | Unit economics: two customers hide in one average, and 3.0x is the break-even condition | Leavers and stayers table; ₹2.5 Cr a year lost on early leavers; derivation of insight 7; what CAC (₹3,633) or lifetime (13.1 boxes) would deliver 3.0x alone and why neither is reachable alone; contribution per cohort | 6 | 2,600 | W-B |
| 7 | Why customers leave: the product is rated 4.6, the contract is the problem | The five reasons mapped to what each proposal changes (63%, 0%, part of 18%); review-mining method, tables V1 to V4, precision and limits; verbatim reviews per reason; what the reviews add that the case does not (billing surprise, cancellation friction); Kano reading of the five reasons | 7 | 3,000 | W-B |
| 8 | Margin and marketing: growth has been bought at a rising price | Decomposition of the 7 lost gross-margin points into candidates (discounting, waste at 6%, utilisation at 68%, input cost) with what the case supports and what is assumption; ₹8.31 Cr acquisition and ₹4.29 Cr non-working marketing; the marginal cost of growth by year | 5 | 2,200 | W-B |
| 9 | Market context: four substitutes for the same dinner are cheaper or faster | Jobs to be done for a weekday dinner; the dinner map (cook from scratch with quick commerce, order in, ready-to-eat, private-label kit, HarvestBox kit) with price per meal, time and effort for each; Lane A facts with every conflict between market reports stated; what the case's 8% and 15% mean | 6 | 2,800 | W-C |
| 10 | Competition: buyer power and substitutes decide this market, not rival meal kits | Five forces with evidence per force; strategic groups; the ₹3,500 private label against ₹5,200 and the ₹3,600 entry plan; quick-commerce ten-minute food as the real competitor for convenience; what HarvestBox has that substitutes lack | 5 | 2,400 | W-C |
| 11 | Global precedents: the companies that survived cut marketing and widened the offer in that order | One symmetric profile per company (HelloFresh, Blue Apron, Gousto, Marley Spoon, Home Chef, Factor) on the seven Lane B questions; a comparison table; what transferred and what did not to India; the two precedent lines the deck may use, each with its source | 8 | 3,600 | W-C |
| 12 | Indian precedents: meal kits have been tried here before and the survivors sell fresh food differently | Lane D profiles; a table of company, year, model, outcome, stated reason; what Licious, Country Delight, iD Fresh and FreshMenu did instead; the lesson for HarvestBox stated carefully, without inferring unstated reasons | 5 | 2,200 | W-C |
| 13 | Proposal A as written: the right problem, with a design that loses money in year 1 | The symmetric template; cohort arithmetic for 55% to 65%; why skipping hits everyone at once; break-even skip rate 12.6%; T8 grid; LTV to CAC only 1.67x from retention alone; cash zero in month 16; what would make it right | 5 | 2,400 | W-D |
| 14 | Proposal B: ₹8,333 a store a month, beside a kit that costs a third less | The template; store arithmetic; margin stack from shelf price to HarvestBox (retailer margin, returns, channel cost) under A21; working capital; Lane F evidence; brand effect; cash zero month 16; with the reset; when B becomes right | 6 | 2,400 | W-D |
| 15 | Proposal C: the best market and the worst timing | The template; ₹2.7 Cr gross profit less ₹0.19 Cr cannibalisation; payback beyond 24 months on ₹5 Cr; cash zero month 15; Lane E on licences, cold chain and shelf life; why it sells into a leaking base; with the reset; why it is right in year 2 | 6 | 2,600 | W-D |
| 16 | Options compared: as written A scores lowest, rebuilt it scores highest | Ansoff placement; T9 scorecard with each rule and band stated; the same-reset comparison table; insight 12 stated with its uncomfortable half (C with the reset earns ₹0.4 Cr more over 24 months); why sequence beats selection; closes with a paragraph beginning "Conclusively" | 6 | 2,600 | W-D |
| 17 | Flex with a floor: five features, each rebuilt to protect order frequency | Feature-by-feature design with customer-facing wording, rule, edge cases and the metric that watches it; Kano classification; the price ladder ₹3,600, ₹5,200, ₹6,600 against ₹3,500; the shared-ingredient menu; referral mechanics and fraud guards; what is deliberately not built | 8 | 3,400 | W-E |
| 18 | The operating reset: six levers, each with its arithmetic and its owner | AARRR view of acquisition; pruning (A15, A16) with the decile arithmetic; non-working marketing; conversion; win-back; the five gross-margin levers with their point values; overheads and the lease; what each costs and saves; how each fits inside ₹15 Cr (the case's explicit test, `[C G2]`) | 8 | 3,200 | W-E |
| 19 | Financial case: the loss falls from ₹9.2 Cr to ₹0.8 Cr and break-even arrives in month 21 | T4, T5 by quarter, T6 bridge with a paragraph per step, T10 uses of cash, T12 ladder, T13; revenue, margins, EBITDA, cash and retention for year 1 and year 2 (the case's D3 list); the honest reading from section 4 of this plan, in full | 9 | 3,400 | W-E |
| 20 | Scenarios and sensitivity: every single downside turns the run-rate negative, which is why there are gates | Bear, base, bull inputs side by side; bear with and without the contingency; T7 tornado ranked; T8 grid; which three inputs matter most and what evidence would firm each up; break-even values for each input | 7 | 2,600 | W-E |
| 21 | Risk register: twelve risks, each with a trigger and a response | 12 risks with probability, impact, early signal, trigger threshold, response, owner; a 5 by 5 heat map as a table; pre-mortem ("it is month 12 and the plan has failed: the three most likely stories"); food-safety risk treated separately for year 2 | 5 | 2,400 | W-F |
| 22 | The first 90 days: Flex live in five cities by week 12 | Week-by-week plan for weeks 1 to 13 in eight workstreams; day 30, 60, 90 deliverables; pilot design in one city with its success test (62% month 3 retention on the pilot cohort's early read, skip under 8%); RACI with letters expanded; budget of the ₹1.8 Cr by line; what is stopped to make room | 7 | 2,800 | W-F |
| 23 | Board KPIs: seven numbers with stop triggers | T11; for each KPI: definition, formula, data source, cadence, owner, today, day 90, month 12, month 24, stop trigger and the action it sets off; KPI tree from EBITDA down; three vanity metrics the Board should ignore (followers at 3.8 lakh, registered subscribers, gross sign-ups) | 5 | 2,200 | W-F |
| 24 | The 24-month roadmap: A now, ready-to-eat behind a gate, retail later | Quarter-by-quarter roadmap; the month 12 gate with both tests and both outcomes priced; the staged ready-to-eat launch design (two cities, idle capacity, licences from Lane E); what would bring B back; the month 7 contingency; closes with a paragraph beginning "Therefore" | 6 | 2,400 | W-F |
| 25 | Assumptions register and model summary | Case facts used; A01 to A25 from section 5 with rationale and sensitivity; the nine that matter most; model structure in plain words; how to rerun and change one input | 4 | 1,800 | W-G |
| 26 | Slide blueprint for the deck | One row per slide (cover, four core, appendix, thank-you): action title, panels, the table or chart in each, model table or section it draws on; the cover mind map nodes; the organiser and brand logo slots | 3 | 1,200 | W-G |
| 27 | Forty judge questions, answered | 40 questions a judge could ask in three minutes, grouped by deliverable, each as `**Q7.** "..."` with an answer of 60 to 120 words that cites a number and its tag; the ten hardest first | 2 | 4,500 | W-G |
| 28 | Seven-minute talk track for three speakers | A timed outline: who says what, per slide, in 60 to 90 second blocks, with the one number each block must land. Plain statements, no hooks | 2 | 1,200 | W-G |
| App A | Appendix A: Bibliography | Built by `assemble.py` from `sources.md` | 1 | n/a | Script |
| App B | Appendix B: Model tables | Inserted by `assemble.py` | 13 | n/a | Script |
| App C | Appendix C: Review-mining tables and codebook | Inserted by `assemble.py` | 5 | n/a | Script |
| App D | Appendix D: Glossary and abbreviations | Every term and abbreviation with its meaning as used here; a table of tags and units | 2 | 900 | W-G |
| App E | Appendix E: Validation plan, not yet run | First sentence states that none of it has been done. Who would be interviewed (lapsed subscribers by exit reason, six-month stayers, non-customers who use quick commerce, a modern-trade buyer, a co-packer), target counts, the question, and the answer that would change the plan; the pilot as the real test | 2 | 800 | W-G |
| App F | Appendix F: Data conflicts and method limits | Every `## Conflicts` entry from the raw files with how it was resolved; limits of the model; limits of the review mining | 2 | 800 | W-G |

Part files: `part-A.md` = §0 to 4; `part-B.md` = §5 to 8; `part-C.md` = §9 to 12; `part-D.md` = §13 to 16; `part-E.md` = §17
to 20; `part-F.md` = §21 to 24; `part-G.md` = §25 to 28; `appendix-D.md`, `appendix-E.md`, `appendix-F.md` by W-G, each
starting with its own `## Appendix X: ...` heading exactly as above.

Acceptance (printed by `assemble.py md`): words at least 50,000; tables at least 110; dashes 0; exclamations 0; banned empty;
question headings empty; `missing_S` empty; duplicate headings empty; `**Answer.**` leads at least 24.

---

# PART IV. EXECUTION

## 9. Using the case-competition-deck skill (mandatory touchpoints)

Invoke with the Skill tool (`skill: "case-competition-deck"`). Log each touchpoint in `build-log.md` as
`Touchpoint X: STATUS` with two lines of evidence.

| Touchpoint | When | What to do | Pass test |
|---|---|---|---|
| A | Step B3, before anything is written | Load the skill. Read `references/structure.md`, `references/rhetoric.md`, `references/case_types/strategy.md` and `references/case_types/marketing.md`. Confirm section 3 of this plan carries: contrarian recommendation, seed, symmetric treatment, three scenarios, one moneyshot, double synthesis, action titles | All seven located; note logged that the skill has no cohort or runway method and the model supplies it |
| B | In every writer prompt (step R3) | Writers read `references/rhetoric.md` (action titles, quantification, pre-empting weaknesses) and the `references/frameworks.md` entries for the frameworks assigned to their sections in 3.5 | Each part's H2s are the locked findings; each framework named in 3.5 appears in its section |
| C | Step R6, after assembly | Critique mode: dispatch critic CR with prompt 12.4 and `references/critique_rubric.md`, re-based as below | Scores recorded in `research/critique.md`; every score under 4 has a fix applied or a logged reason |
| D | Step R5, on section 26 | Slide mode check of the slide blueprint against `references/archetypes.md`: each core slide maps to named archetypes | Mapping table appended to section 26 |
| E | Step Z1 | Polish search from `references/rhetoric.md`: TODO, Insert, Placeholder, TBD, Lorem, xyz, and names from other cases (Dream11, Paytm, Liminal, Setu, Maudrik, SwasthyaGrid, FanCode) | Grep of `harvestbox-research.md` returns nothing outside the bibliography |

**Rubric re-based for a research document.** The skill's rubric assumes a 100-slide deck. Use it with these substitutions
and say so in the critique: "8 sections present" becomes the mapping in 3.1; "recommendation in the executive summary
headline" becomes the H2 of section 2; "alternative foreshadowed" becomes sections 9 and 10 seeding section 17; "sample 10
action titles" becomes scoring all 29 H2 titles (one point for a full-sentence finding, one for a number); "appendix depth"
becomes whether every number traces to a tag. Add two tests the rubric lacks: (i) is every case deliverable D1 to D4
answered with its named items; (ii) is the honest reading in section 4 of this plan present in sections 19 and 20.

The skill says to produce a .pptx. That step does not apply here: this plan produces the research document only.

## 10. Environment (confirmed 8 Oct 2026)

Python 3.14.5 with `google_play_scraper`, `markdown_it` and `openpyxl`; Node v24.15.0; Chrome at
`C:\Program Files\Google\Chrome\Application\chrome.exe`. Run every Python command with `python -X utf8`. Repo root:
`C:\Users\harsh\Desktop\HARSH\PPTS-CASE-STUDY\nsut-innovators-court`. In PowerShell chain with `;`, never `&&`.

## 11. Execution sequence

### 11.1 Bootstrap

Step B0. Copy this plan to `verdict-mnc/PLAN.md` byte for byte:

```
python -c "import shutil; shutil.copyfile(r'C:\Users\harsh\.claude\plans\working-folder-verdict-mnc-binary-pizza.md', r'verdict-mnc\PLAN.md')"
```

Step B1. Open `verdict-mnc/PLAN.md`, find the block marked `<!-- FILE: extract.py -->` in section 23, and create
`verdict-mnc/extract.py` with exactly that block's content using the Write tool. Run
`python -X utf8 verdict-mnc/extract.py` from the repo root. Done when it prints `files 17`.

### 11.2 Step table

| Step | Who | Action | Done when |
|---|---|---|---|
| B0, B1 | Main | Bootstrap | `files 17` |
| B2 | Main | Start `build-log.md`; read the files in 2.5 | Log has a header and the date |
| B3 | Main | Touchpoint A | Logged PASS |
| M1 | Main | `python -X utf8 verdict-mnc/model/harvestbox_model.py` | 14 lines of PASS, `HASH 06111c6c33`, `FINDINGS [135, 146, 134, 146, 150]`, three files written. Compare ten rows of section 4 with `model_tables.md` |
| G1 | V-G, `run_in_background: true` | Section 7.2 with prompt 12.2 | `R-G-review-mining.md` exists with seven precisions |
| R1 | Verifiers, `run_in_background: true`: V-A, V-B, V-C together, then V-D, V-E, V-F | Prompt 12.1 with the lane text from section 6 | Six `R-*.md` files, each with `## Gaps` and `## Conflicts`, and a reply giving counts and "Changed numbers" |
| R2 | Main | Build `research/raw/sources.md`. Read every "Changed numbers" list. If a verified fact contradicts a sentence in section 3 of this plan (for example the Factor date or the Blue Apron price), write the correction into `build-log.md` under `## Corrections for writers` | Every S-ID has a URL; corrections listed |
| R3 | Writers, `run_in_background: true`: W-A, W-B, W-C together, then W-D, W-E, W-F, then W-G | Prompt 12.3 | Each part meets its minimum words and tables and passes its self-check |
| R4 | Main | `python -X utf8 verdict-mnc/research/assemble.py md` | `ASSEMBLY PASS`. If a part is short, re-dispatch that writer with the expansion instruction in section 14 |
| R5 | Main | Touchpoint D; then `python -X utf8 verdict-mnc/research/assemble.py pdf` | PDF exists, size above 500 KB; open page 1 and one table page with the Read tool to confirm it rendered |
| R6 | Critic CR | Touchpoint C, prompt 12.4 | `research/critique.md` saved; fixes applied by re-dispatching the owning writer with the critic's exact text; rerun R4 and R5 |
| Z1 | Main | Touchpoint E; checklist 15.1; Stage 1 report 15.2 | All boxes ticked. **Stage 1 is now complete. Only now may Stage 2 (section 16) begin** |
| Z2 | Main | Memory, section 15.3 | File and pointer exist |

### 11.3 Parallelism rules

- At most three sub-agents at once. On a rate-limit error, relaunch after the reset time in the error.
- Sub-agents write only their own files. They never edit the plan, the model or another agent's file.
- Writers start only after M1 (tables), G1 (review tables) and R2 (S-IDs).
- Every writer is told to write its file after the first two sections and extend it, so a rate limit cannot lose work.

## 12. Prompts

### 12.1 Verifier prompt (fill LANE = A to F)

> You are verifier V-LANE for a case-competition research file. Read `verdict-mnc/PLAN.md` section 6 (schema, source
> hierarchy and "Lane LANE") and `verdict-mnc/case/01-case-brief.md`. For each question in your lane and each seed: open the
> URL with WebFetch, or find the primary source with WebSearch (use mode "standard"; use "extended" only when a standard
> search comes back thin); record one row per fact in the schema; mark it VERIFIED, CORRECTED (state the corrected figure
> and date) or UNVERIFIABLE; quote at most 25 words. Then add rows that answer the lane's questions from better sources
> until you have 35 to 60 rows. Prefer company filings, regulator text and named reports. Never invent a figure, a date, a
> quote or a URL. Flag blogs `[blog]`. Where two sources disagree, keep both and list them under `## Conflicts`. Do not
> write analysis or recommendations. Do not convert foreign currency to rupees. Do not use em dashes or en dashes. Write
> `verdict-mnc/research/raw/R-LANE.md` with an H1, a two-line preamble with today's access date, one H2 per question, the
> fact table, then `## Gaps` and `## Conflicts`. Write the file after your first two questions and extend it. Reply with:
> rows verified, corrected, unverifiable and new, and a list "Changed numbers" of any seed figure you corrected.

### 12.2 Review coder prompt (V-G)

> You are V-G. Read `verdict-mnc/PLAN.md` section 7 and section 2, and `verdict-mnc/case/01-case-brief.md`. Carry out
> section 7.2 steps 1 to 4 exactly, and 7.3 only if its condition is met. Do not edit the codebook for any other reason.
> Quotes are verbatim, at most 40 words, attributed as "Play Store review of <app>, <star rating>, <Mon YYYY>", with no
> names. Never call a reviewer a HarvestBox customer. No em dashes or en dashes in your own text. Reply with total reviews,
> reviews per app, the seven precisions, the review mix against the case's five shares, and anything that failed.

### 12.3 Writer prompt (fill PART and SECTIONS)

> You are writer W-PART. Write sections SECTIONS of a consulting research deliverable into
> `verdict-mnc/research/parts/part-PART.md` (W-G also writes `appendix-D.md`, `appendix-E.md` and `appendix-F.md`).
> Read first, fully: `verdict-mnc/PLAN.md` sections 1 to 5 and 8; `verdict-mnc/case/01-case-brief.md`;
> `verdict-mnc/model/model_tables.md`; `verdict-mnc/research/raw/sources.md` and every `R-*.md` file;
> `verdict-mnc/research/reviews/review_tables.md`; `verdict-mnc/build-log.md` section "Corrections for writers";
> `.claude/skills/case-competition-deck/references/rhetoric.md` and the `references/frameworks.md` entries for the
> frameworks listed against your sections in PLAN 3.5; and, for register only,
> `iim-lucknow-pivot/research/dream11-pivot-research.md` lines 1 to 140.
> Rules. Use the exact H2 titles from PLAN 8.2, numbered `## N. Title`; use `### N.M` for sub-sections; never write an H1.
> Open every H2 with a bold `**Answer.**` paragraph of two to four sentences. Cover every "Must contain" item. Meet the
> minimum words and tables for each section; more is welcome when every paragraph carries evidence. Every number carries a
> tag: `[C id]`, `[A##]`, `[M]`, `[T#]`, `[S##]`, `[V#]`. Use only numbers found in the case brief, the model tables, PLAN
> sections 4 and 5, a VERIFIED or CORRECTED raw row, or the review tables. Do not browse. Do not compute new figures beyond
> sums, differences, ratios and products of tagged numbers, and show the arithmetic when you do. Do not invent interviews,
> customers, quotes or pilots. Say "assumption" once in any paragraph that uses one. A real company's figure is never
> described as HarvestBox's. Review figures are "association, not proof" and name the apps. Where sources conflict, say so.
> Keep the recommendation, the names (Project Perennial, Flex with a floor, the operating reset) and every locked number
> exactly as in the plan. Include the honest reading at the end of PLAN section 4 wherever your sections touch it.
> Style. First person plural, declarative, plain words, short sentences, reasoning shown, written as a board memo. No em
> dashes or en dashes, no rhetorical questions, no exclamation marks, no hooks, none of the banned words in PLAN 2.2.
> Expand each abbreviation on first use in a section. Put an italic expansion line under any table with abbreviated heads.
> Introduce every table with a sentence and follow it with what it shows.
> Write your file after your first two sections and extend it. Self-check before replying: run
> `python -X utf8 -c "import re,io;t=io.open(r'verdict-mnc/research/parts/part-PART.md',encoding='utf-8').read();print(len(t.split()),len(re.findall(r'^\|[ :|-]+\|\s*$',t,re.M)),len(re.findall('[\u2014\u2013]',t)),t.count('!'))"`
> and fix until dashes and exclamations are 0 and words and tables meet the minimums. Reply with the four numbers, the
> sections written, and any figure you wanted but could not find. Edit no other file.

Assignments: W-A sections 0 to 4; W-B 5 to 8; W-C 9 to 12; W-D 13 to 16; W-E 17 to 20; W-F 21 to 24; W-G 25 to 28 plus the
three appendix files. W-G runs last because sections 26 to 28 and Appendix F draw on the other parts; add to its prompt:
"Also read `parts/part-A.md` to `part-F.md`."

### 12.4 Critic prompt

> You are critic CR. Invoke the `case-competition-deck` skill and read `references/critique_rubric.md`. Read
> `verdict-mnc/PLAN.md` sections 3, 4 and 9, then read `verdict-mnc/research/harvestbox-research.md` in full. Score the
> argument with the rubric as re-based in PLAN section 9: pass or fail items, then each quality dimension from 1 to 5, plus
> the two added tests. Then check 25 numbers chosen across the document against `verdict-mnc/model/model_tables.md` and the
> case brief and list every mismatch with its line. Lead with the two strongest things. Give at most eight issues, each
> with section, current state, the specific fix and why it matters. Do not propose changing a locked number, the
> recommendation or an H2 title. Do not use dashes. Write `verdict-mnc/research/critique.md`.

## 13. What a good section looks like (calibration for writers and the critic)

A paragraph at the standard wanted, from section 6:

> The average customer hides two different ones. Of every 100 sign-ups, 45 are gone by month 3 `[C R2]`. On the fitted
> curve those 45 take 1.4 boxes each `[M]`, which is ₹2,281 of gross profit against ₹7,000 of acquisition cost `[C U3]`: a
> loss of ₹4,719 a head. HarvestBox signs up about 11,878 customers a year `[A02]`, so 5,345 of them are early leavers and
> the loss on that group is ₹2.5 Cr a year `[T2]`, more than a quarter of the ₹9.2 Cr EBITDA loss `[C K6]`. The other 55
> stay, take 11.2 boxes and return 2.56 times their acquisition cost `[M]`. The business is not uniformly weak. It has a
> good customer and a bad one, and it pays the same price for both.

What to avoid: a paragraph of adjectives, a number without a tag, a table with no sentence before or after it, a real
company's result presented as a forecast for HarvestBox, any sentence that could sit unchanged in a document about a
different company.

## 14. Recovery table

| Symptom | Action |
|---|---|
| `extract.py` prints fewer than 17 files | `PLAN.md` is not a byte copy. Redo B0 |
| M1 hash differs or a check fails | A file was edited. Re-extract and rerun. If it still differs, stop and report the failing line; do not edit the model |
| `mine_reviews.py` raises on import | `python -m pip install google-play-scraper`, rerun |
| An app returns no reviews | The script skips it. Continue if at least four apps exceed 300 reviews; otherwise report |
| Fewer than 3,000 reviews in total | Lower nothing. Report the count; the document states the sample as it is |
| A verifier corrects a seed used in section 3 of this plan | Log it under `## Corrections for writers`; writers use the corrected figure. If the Factor or Blue Apron facts fail, writers drop that precedent line and use another VERIFIED Lane B row of the same kind |
| A lane has under 20 VERIFIED rows | Re-dispatch that verifier once with: "Find 15 more rows from primary sources for questions <list>" |
| Writer under target | Re-dispatch with: "Expand sections <list> by <n> words by adding worked examples from the model tables and the raw files and one more table a section. Do not change any number" |
| `ASSEMBLY FAIL` on `banned` or `dashes` | Fix the words in the named part file by hand (replace, do not delete sentences), rerun |
| `missing_S` not empty | A writer cited an S-ID that is not in `sources.md`. Find the raw row; add the source, or remove the claim |
| `assemble.py pdf` fails on an assertion | `iim-lucknow-pivot/research/build_pdf.py` changed. Report the failing string. The markdown file is still the deliverable |
| `ModuleNotFoundError: markdown_it` | `python -m pip install markdown-it-py`, rerun |
| Chrome not found | Report; deliver the HTML and markdown |
| Team must change | `HEADER` in `assemble.py` and `team` in the model's `V`; rerun M1 and R4 |

## 15. Final checks, report and memory

### 15.1 Final verification checklist

Model
- [ ] M1 prints 14 PASS lines and `HASH 06111c6c33`.
- [ ] `model_tables.md` has tables T1 to T13 and matches ten spot-checked rows of section 4.

Research inputs
- [ ] Six `R-A` to `R-F` files, each with `## Gaps` and `## Conflicts`; `R-G-review-mining.md` with seven precisions.
- [ ] `sources.md` has a URL for every S-ID.

Research document
- [ ] `assemble.py md` prints `ASSEMBLY PASS` (words at least 50,000, tables at least 110, dashes 0).
- [ ] Section 1 has a row for every ID in the case brief.
- [ ] Sections 13, 14 and 15 use one template. Section 16 ends with "Conclusively", section 24 with "Therefore".
- [ ] Sections 19 and 20 carry the honest reading: break-even, not profit; negative run-rate on every single downside;
      bear survives only with the contingency; referral and conversion have the thinnest evidence.
- [ ] Section 4 states the three figures that do not tie.
- [ ] Appendix E opens by saying no interview, survey or pilot has been run.
- [ ] No real company figure is attributed to HarvestBox (critic's check).
- [ ] `harvestbox-research.pdf` exists and two pages were viewed.

Skill and language
- [ ] Touchpoints A to E logged.
- [ ] No em dash, en dash, exclamation mark or banned word; question marks only in quoted judge questions.

### 15.2 Final report to the user

Paths of the research markdown, HTML and PDF, the model and its tables, the review dataset; word and table counts; review
sample size and the review mix against the case; the critic's scores; every seed a verifier corrected or could not confirm;
any conflict between sources; and this closing line: "The research deliverable is complete. Stage 2, the
Figma deck, is derived from it and starts now with the derivation step in section 16.3."

### 15.3 Memory

Save one file `project_verdict_harvestbox.md` in the memory directory named in the system prompt (type `project`): the
folder; that by user instruction the research is built first and completely and the deck is then derived from it; the
recommendation in one line; the model hash; the deck decisions in section 16; and that `verdict-mnc/PLAN.md` is the
surviving copy of this plan. Add its pointer to `MEMORY.md`. Save a second file `feedback_lsr_not_a_template.md` (type
`feedback`): the user said on 8 Oct 2026 not to use the LSR Case for Change plan or deck as a model because that entry was
rejected in the PPT round; the Dream11 deck (`YoiazGGOribfg69EjEDIlP`) and the prime deck (`hOJVMGv9nIhDmayTT7DmOt`) are
the references to follow. Add its pointer too.

---

# PART V. STAGE 2: THE FIGMA DECK, DERIVED FROM THE FINISHED RESEARCH

## 16. Stage 2

### 16.1 The gate (nothing in this section runs until every line is true)

- [ ] `assemble.py md` printed `ASSEMBLY PASS` and `harvestbox-research.pdf` exists.
- [ ] `research/critique.md` exists and its fixes were applied (step R6).
- [ ] Checklist 15.1 is fully ticked and the Stage 1 report (15.2) has been given to the user.
- [ ] `build-log.md` carries the line `STAGE 1 COMPLETE` with the date.

If any line is false, stop and finish Stage 1. Do not start Stage 2 "to save time" while writers are still running.

### 16.2 Decisions the user has given for the deck

| Item | Decision |
|---|---|
| Slide count | 7: 1 cover, 4 core, 1 appendix, 1 thank-you. The user chose to treat the cover as outside the 4-slide cap. The rules exempt only the thank-you and appendix in words (`[C G4]`), so step D7 asks the user to confirm with the organisers at skill@mln.du.ac.in before submission |
| Appendix | One slide (the rules allow four) |
| Palette | Harvest green and tomato: primary `#1B7F3B`, deep `#0E4D25`, accent yellow `#FFC72C`, alert tomato `#E03A1E`, tint `#D5EFDC`. Red is reserved for losses and cash burn |
| Visual system | The Dream11 and Satoshi Gate system: white ground, ink outlines, layered cards, ribbon with punch-holes, section chip, two-line action headline, panels. Native Figma Slides per `CLAUDE.md` |
| Inspiration | Prime `hOJVMGv9nIhDmayTT7DmOt`; "an amazing one" `YoiazGGOribfg69EjEDIlP` (its cover mind map with real logos is the model); also `e5VEexsLMhDampx7gvhFmM`, `vAIyXmljHlFDuwQo6RsoIN`, `APbOstO4SSU7iAjYIgEeSd`, `JLOOyohkQPUrwXEsxDKz4m`. Read-only, never modified |
| Cover | A real mind map with brand image placeholders, not the plain-text panel of the Satoshi Gate cover. No KPI-card row. Team in a Members, Institution, Role table, repeated on the thank-you slide |
| Organiser logos | Placeholders on the cover and thank-you slide for the four marks in the case header: Project Avsar, The Skill Development Cell, Motilal Nehru College, University of Delhi (slot names `LOGO: Avsar`, `LOGO: SDC`, `LOGO: MNC`, `LOGO: DU`) |
| Brand logos | Placeholder slots wherever the deck names a real brand: Blinkit, Zepto, Swiggy, Zomato, ITC, MTR, HelloFresh, Blue Apron, and a HarvestBox slot. The cover states that no partnership is implied |
| Density | Content-heavy consulting pages: tables, a heat-map scorecard, a heat grid, bars, lines, a waterfall, a Gantt, a tornado. 22pt floor; only `SOURCE` (14pt), `FINEPRINT` (16pt) and logo captions are smaller |
| Not a template | The LSR Case for Change deck and plan |

What the starting layout in section 19 draws:

| # | Slide | Forms |
|---|---|---|
| 1 | Cover | Title, verdict card, team table, four organiser slots, the dinner mind map (hub, five nodes, ten brand slots, "rebuilt" node, precedent strip) |
| 2 | Diagnosis and evaluation (D1) | Four-year table, survival line with payback marker, two-customers table, exit-reason bars keyed to proposals, scorecard heat grid with formula, four cash lines |
| 3 | Strategic recommendation (D2) | "Do not" and "do" cards, skip-rate heat grid, Flex feature table, LTV to CAC ladder bars, "Conclusively" card |
| 4 | Financial and risk case (D3) | EBITDA bridge waterfall, moneyshot card (node `MONEYSHOT`), three-scenario table, four cash lines, risk table |
| 5 | 90-day plan and KPIs (D4) | 13-week Gantt, uses of ₹15 Cr bar and table, seven-KPI table with stop triggers, "Therefore" card |
| 6 | Appendix | Assumptions table, data-check table, tornado, options table, reading notes with abbreviations |
| 7 | Thank you | Title, verdict, team table, logo slots |

### 16.3 Step D1: derive the deck from the research (this is what makes the deck a derivative)

The main agent does this itself, reading, before any Figma call.

1. Read `research/harvestbox-research.md` sections 2, 3, 6, 7, 11, 13 to 24 and 26, `research/critique.md`, and
   `build-log.md` section "Corrections for writers".
2. Run `python -X utf8 verdict-mnc/deck/gen.py pre` then `... gen.py mock`. Done when seven lines read `sNN OK`. This
   confirms the starting layout still runs before anything is changed.
3. Create `deck/derivation.md` with one table per slide: `| Panel | Text or number on the slide | Research section | Tag | Same as research (yes or no) | Change |`.
   List every panel title, every table row label, every sentence and every number that the slide file writes (read
   `deck/slides/sNN.js` and `deck/values.js`). For each, find where the finished research establishes it.
4. Apply this rule to each row:

| Finding | Action |
|---|---|
| A number from `values.js` | It comes from the model, which the research also uses. Confirm the research states the same figure. If the research differs, the research has an error: fix the research sentence, not the slide |
| A sentence, row label or panel title that the research words better, or that a verifier corrected (for example the precedent line on slide 3, the risk rows on slide 4, the Flex feature rows on slide 3, the Gantt rows on slide 5, the cover mind-map nodes) | Add an entry to `deck/overrides.json` as `"exact old string": "new string"`. The new string must not be longer than the old one by more than 10% and must contain no dash, question mark, exclamation mark or banned word |
| A claim on a slide that the research could not support (UNVERIFIABLE or dropped) | Replace it through `overrides.json` with a VERIFIED fact of the same kind, or with a case fact |
| A finding the research and critique treat as central that no slide carries | Do not redesign. Record it in `derivation.md` under "Candidates for the talk track" and tell the user in the final report |
| A source line | Rewrite through `overrides.json` to name the sources the research actually cites for that slide, as `Source: a | b | c`, one line |

5. The source line of slide 3 currently names "HelloFresh SE annual report 2020 (Factor acquisition)". Keep it only if
   Lane B verified it; otherwise override it with the verified source.
6. Run `gen.py mock` again. Done when seven lines read `sNN OK`. If an override breaks a slide, shorten that string with
   the ladder in 16.6 and rerun. Never edit a number.
7. Write `STAGE 2 D1 PASS` with the count of overrides in `build-log.md`.

### 16.4 Skill touchpoints for the deck

| Touchpoint | When | What to do | Pass test |
|---|---|---|---|
| F | Start of D1 | Skill tool `case-competition-deck`; read `references/archetypes.md` and `references/rhetoric.md`. Check the four core headlines in `values.js` (`f2` to `f5`) are action titles with a number, and that slide 3 ends "Conclusively" and slide 5 "Therefore" | Logged |
| G | After D5 | Critique mode on the built deck: dispatch a critic with the seven screenshots, `values.js`, `derivation.md` and `references/critique_rubric.md`, re-based as in section 9 with "document sections" read as "slides". At most five issues, none may change a number, the recommendation or the slide count | `deck/critique.md` saved; fixes that fall under 16.6 applied |

### 16.5 Figma build (main agent only, one call at a time, never delegated in parallel)

Tools: `ToolSearch` with `select:mcp__figma-mcp__whoami,mcp__figma-mcp__create_new_file,mcp__figma-mcp__use_figma,mcp__figma-mcp__get_screenshot,mcp__figma-mcp__upload_assets`.
Load the Figma guidance first: Skill `figma-use` if listed, otherwise `ReadMcpResourceTool` on server `figma-mcp`, uri
`skill://figma/figma-use/SKILL.md`; pass `skillNames: "resource:figma-use"` on every `use_figma` call. This deck positions
nodes absolutely through the helper library; that is deliberate and overrides the auto-layout advice in the Figma skill.
`get_metadata` does not work on Slides files. If the Figma server is not authorised, stop and tell the user to authorise it.

| Step | Action | Done when |
|---|---|---|
| D2 | `whoami`. Use `planKey: "team::1564294484048272772"` (the user's team, used for the Dream11 deck); if it is not listed, ask the user. Take one screenshot each of the cover (`2:2`) and slide 5 (`2:7`) of `YoiazGGOribfg69EjEDIlP` for calibration | planKey known; two images viewed |
| D3 | `create_new_file`, `editorType: "slides"`, name `HarvestBox: Growing Without Burning Out | Team IdeaForge | Verdict 2.0`. Then `use_figma` with the contents of `deck/setup.js` | Returns `count: 7` (or more with `extra` listing empty slides), seven ids, `fontsOk` all true. Write `deck/slide-ids.json` as `{"S1": id1, ..., "S7": id7}` and the file key and URL into `deck/figma.md`. If `extra` lists slides with 0 children, remove them with a small script by id |
| D4 | `python -X utf8 verdict-mnc/deck/gen.py bind` | 7 `slide_NN.js`, 7 `v1_NN.js`, `v1_all.js`, `sweeps.js`, `logos.js`, each slide file under 50,000 characters |
| D5 | For N = 2, 3, 4, 5, 6, 1, 7: (a) `use_figma` with the full text of `build/slide_0N.js`; (b) the return has `warnings: []`; (c) `use_figma` with `build/v1_0N.js`; (d) `get_screenshot` of the slide at `maxDimension: 1600`, save to `deck/shots/sN.png`, Read it; (e) apply 16.6 if needed, at most three attempts, then log the residual | V1 returns `clean: true` or only logged residuals; each screenshot viewed and described in two lines in `deck/figma.md`. **Stop after slide 2 and compare it with the two calibration images before building the rest** |
| D6 | `use_figma` with `build/sweeps.js`, then `build/v1_all.js`; then touchpoint G | `fontLow`, `copy`, `missing`, `presentBad` all empty; `slides` is 7; V1 clean or logged residuals |
| D7 | Logos (16.7), final screenshots of all seven slides, PDF export (16.8) | Seven images; logo log written; export instruction given |

Every slide script clears its slide first, so a rerun is safe.

### 16.6 Fix rules (the only edits allowed during the build)

A fix goes into `deck/overrides.json` (copy) or into the file under `deck/slides/` (geometry), then `gen.py mock`, then
`gen.py bind`, then the slide is rebuilt. Never edit a build file by hand and never add 240 to a coordinate.

| Issue | Fix |
|---|---|
| `headline3lines` | Remove the two weakest words from that finding through `overrides.json`, keeping every number |
| `source2lines` | Drop the least important source group |
| `textOut`, `cellWrap`, a `warnings` overflow | Shortening ladder: drop articles; shorter synonym; an abbreviation already defined on slide 6; drop the least important clause. Never below 22pt, never drop a number |
| `overlap`, `bounds`, `belowContent` | Move the later node by the overlap plus 8px if it stays inside y 318 to 1030; otherwise report |
| A label collides with a line or bar in a screenshot | Nudge that label by at most 24px |
| A node sits 240px off | A hand-written line set `x` or `y` before `appendChild`. Remove it and rerun the slide file |
| `Cannot use unloaded font` | A fragment was run. Always run the full `build/slide_NN.js` |
| Dead space larger than about 200 by 200 | Report it. Do not add decoration |

Known false positives: ribbon punch-holes over their tags and `BACK:` rectangles under their cards are by design.

### 16.7 Logo placeholders and logos

Every logo slot is a dashed frame named `LOGO: <brand>` with a small caption, and stays that way unless a real logo is
placed. Run `build/logos.js` to list the slots (expected: 13 on the cover, 5 on the thank-you slide). For each brand:
try Wikimedia Commons (`https://commons.wikimedia.org/w/api.php?action=query&list=search&srnamespace=6&srlimit=10&format=json&srsearch=<brand>%20logo`,
then `curl -sL -o "verdict-mnc/deck/logos/<slug>.png" "https://commons.wikimedia.org/wiki/Special:FilePath/<File name>?width=600"`);
Read the image to confirm it is that brand's logo; upload with `upload_assets` (`count: 1`, `nodeId` = the slot, scale mode
FIT if offered) and POST the bytes to the returned URL; then remove that slot's caption text and dash pattern. Never resize
a slot. HarvestBox is fictional: its slot stays a placeholder. The four organiser marks are unlikely to be on Commons: leave
them as placeholders and tell the user to drop in the files from the organisers. Log each slot as uploaded or placeholder
with the reason.

### 16.8 Export and hand-over

Screenshot all seven slides to `deck/shots/`. Tell the user: export from Figma Slides with File, Export, PDF; name the file
`TeamIdeaForge_<CollegeName>.pdf` (the rules ask for TeamName_CollegeName; the user chooses which college name to use);
confirm with the organisers whether a cover counts towards the four main slides; if it does, the fallback is to drop
slide 1 and move its verdict line and team table to the thank-you slide, which the rules exempt.

### 16.9 Stage 2 checklist and report

- [ ] `STAGE 1 COMPLETE` was logged before the first Stage 2 command.
- [ ] `deck/derivation.md` has a row for every text and number on every slide; `overrides.json` holds every change.
- [ ] `gen.py mock`: seven OK lines after the overrides.
- [ ] Exactly 7 slides, named as in `setup.js`. Sweeps empty. `MONEYSHOT` reads the break-even month.
- [ ] Cover has a mind map with brand slots, four organiser slots, no KPI-card row, team table; the same table on slide 7.
- [ ] Seven screenshots saved and viewed. Touchpoints F and G logged. `deck/critique.md` exists.

Final report: the Figma URL; the count of overrides and the three most important copy changes the research caused; logo
slots filled and left; residuals; the organiser question; the file name to use.



---

# PART VI. EMBEDDED FILES (the source of truth for every script)

Every file below is extracted byte for byte by `extract.py` (section 13.1). Never retype a block. A fix is made in the
extracted file under `verdict-mnc/`, never in this plan.

## 17. Model

<!-- FILE: model/harvestbox_model.py -->
```python
# ===== HARVESTBOX MODEL v1 =====
"""Project Perennial: 24-month cohort and cash model for the Verdict 2.0 HarvestBox case.
Run from anywhere:  python -X utf8 verdict-mnc/model/harvestbox_model.py
Writes model_outputs.json and model_tables.md beside this file and ../deck/values.js.
Set HB_DRY=1 to print the values object and write nothing.
Units: money in Rs crore unless a name ends in _rs; time in months (M1 = first month of the plan)."""
import json, math, hashlib, os, pathlib, io, sys

HERE = pathlib.Path(__file__).resolve().parent if "__file__" in globals() else pathlib.Path(os.environ.get("HB_HERE", "."))
DRY = os.environ.get("HB_DRY") == "1"

# ---------- case facts (never edit; IDs match case/01-case-brief.md) ----------
F = dict(subs=62000, aov_rs=5200, staff=410, cash=15.0, rev=42.0, ebitda=-9.2, followers_lakh=3.8,
         ret={1: 1.00, 3: 0.55, 6: 0.34, 12: 0.19},
         why=[("Too rigid / difficult to skip", 34), ("Too expensive", 27), ("Menu becomes repetitive", 18),
              ("Food waste / portion issues", 11), ("Delivery problems", 10)],
         rating=4.6, gp_box_rs=1600, cac_rs=7000, life_boxes=6.8, ltv_rs=10900, ltv_cac=1.55, bench=3.0,
         hist={2022: (19, .38, .22, -.12), 2023: (29, .36, .25, -.15), 2024: (38, .33, .28, -.19), 2025: (42, .31, .30, -.22)},
         mk_growth=8, rte_growth=15, pl_box_rs=3500,
         A=dict(inv=1.8, s3=0.65), B=dict(inv=1.3, rev=8.0, gm=.22, stores=800), C=dict(inv=5.0, rev=6.0, gm=.45, cann=.10),
         util=68, waste=6, lease=1.0, visits_lakh=14, conv=2.8)

# ---------- team assumptions (IDs match plan section 5) ----------
A = dict(
    A01_tail=None,            # solved below so that lifetime boxes tie to 6.8
    A03_gm_drift=-0.015,      # gross margin points a year lost with no decision (history: -2.3 a year)
    A04_cac_infl=0.08,        # paid CAC inflation a year with no decision
    A05_opex_infl=0.04,       # other operating cost inflation a year, every scenario
    A06_plan_gm_drift=-0.005, A07_plan_cac_infl=0.03,
    A08_skip=0.05,            # share of boxes skipped once skipping is free (base)
    A09_aovf=0.979,           # blended order value after 2, 3 and 4 meal plans (20/65/15 at Rs 3,600/5,200/6,600)
    A10_ref_share=0.20, A11_ref_cac_rs=2000, A12_wb=40, A13_wb_cac_rs=800,
    A14_conv_to=3.3,          # website conversion after the entry plan and the skip promise (from 2.8)
    A15_prune_vol=0.90, A16_prune_cac=0.89, A17_brand=0.60, A18_gm_up=0.04, A19_opexf=0.88, A20_run=0.25,
    A21_B=dict(ret=0.04, opex=0.06, cann=0.05, wc_days=60, g2=0.08),
    A22_C=dict(opex=0.12, g2=0.15),
    A23_stage=dict(scale=0.80, start=13, rev_start=14, inv=4.0),
    A25_cont=dict(m=7, vol=0.50, brand=0.50, opexf=0.85),
    A24_weights=dict(growth=20, profit=30, cash=30, risk=20))

BOXES_YR = F["rev"] * 1e7 / F["aov_rs"]
Q12 = math.sqrt(F["ret"][3]); Q36 = (F["ret"][6] / F["ret"][3]) ** (1 / 3); Q612 = (F["ret"][12] / F["ret"][6]) ** (1 / 6)


def surv12(s3):
    q = math.sqrt(s3); k = s3 / F["ret"][3]
    return [1.0, q, s3] + [F["ret"][3] * Q36 ** i * k for i in (1, 2)] + [F["ret"][6] * k] + [F["ret"][6] * Q612 ** i * k for i in range(1, 6)] + [F["ret"][12] * k]


S0 = surv12(0.55)
_tail = F["life_boxes"] - sum(S0)
RT = _tail / (_tail + S0[-1])           # monthly retention after month 12 that ties lifetime boxes to 6.8
A["A01_tail"] = round(RT, 4)
N0 = BOXES_YR / 12 / F["life_boxes"]    # new customers a month in steady state
ACQ = N0 * 12 * F["cac_rs"] / 1e7       # acquisition spend implied by CAC
MKT = F["rev"] * F["hist"][2025][2]
BRAND = MKT - ACQ                       # marketing not captured in CAC
OPEX = F["rev"] * (F["hist"][2025][1] - F["hist"][2025][2] - F["hist"][2025][3])


def qa(a, s3):
    """Probability of being active in month a+1 given active in month a."""
    if a <= 2: return math.sqrt(s3)
    if a <= 5: return Q36
    if a <= 11: return Q612
    return RT


def life_months(s3):
    s = surv12(s3); return sum(s) + s[-1] * RT / (1 - RT)


def lin(t, a, b, v0, v1):
    return v0 if t <= a else (v1 if t >= b else v0 + (v1 - v0) * (t - a) / (b - a))


def plateau(y1):
    """Monthly plateau of a line that ramps linearly over six months and whose first 12 months sum to y1."""
    return y1 / 9.5


def run(P, T=24):
    AGE = 240; base = [0.0] * (AGE + 2); S = 1.0
    for a in range(1, AGE + 1):
        if a >= 2: base[a] = N0 * S
        S *= qa(a, 0.55)
    flex = [0.0] * (AGE + 2); cash = F["cash"]; out = []; wcbal = 0.0; L = P.get("launch", 999)
    for t in range(1, T + 1):
        live = t >= L
        ct = P.get("cont"); cf = lin(t, ct["m"] - 1, ct["m"] + 1, 0, 1) if ct else 0.0
        vol = lin(t, 1, 2, 1, P.get("vol", 1)) * (1 - cf * (1 - ct["vol"]) if ct else 1)
        cacf = lin(t, 1, 3, 1, P.get("prune", 1)) * lin(t, L, L + 5, 1, P.get("cro", 1)) * (1 + P.get("cac_infl", 0)) ** (t / 12)
        paid = N0 * vol
        refsh = lin(t, L - 1, L + 8, 0, P.get("ref", 0))
        ref = paid * refsh / (1 - refsh); wb = P.get("wb", 0) if live else 0
        new = paid + ref + wb
        if live: flex[1] += new
        else: base[1] += new
        freq = 1 - lin(t, L - 1, L + 2, 0, P.get("skip", 0))
        aov = F["aov_rs"] * lin(t, L - 1, L + 3, 1, P.get("aovf", 1))
        act = sum(base) + sum(flex); core = act * freq * aov / 1e7
        gm = F["hist"][2025][1] + P.get("gm_drift", 0) * t / 12 + lin(t, 2, 15, 0, P.get("gm_up", 0))
        orev = 0.0; ogp = 0.0; ocost = 0.0; wc = 0.0; rte = 0.0
        if "b" in P:
            r = P["b"]; p = plateau(r["y1"]); m = p * min(t, 6) / 6 * ((1 + r["g2"]) if t > 12 else 1)
            orev += m; ogp += m * (r["gm"] - r["ret"]); ocost += m * r["opex"]; core -= m * r["cann"]
            wc = m * r["wc_days"] / 30 - wcbal; wcbal += wc
        if "c" in P:
            r = P["c"]; k = t - r["start"] + 1; p = plateau(r["y1"])
            m = 0.0 if k < 1 else p * min(k, 6) / 6 * ((1 + r["g2"]) if k > 12 else 1)
            orev += m; ogp += m * r["gm"]; ocost += m * r["opex"]; core -= m * r["cann"]; rte = m
        gp = core * gm + ogp
        brand = BRAND / 12 * lin(t, 1, 6, 1, P.get("brand", 1)) * (1 - cf * (1 - ct["brand"]) if ct else 1)
        acq = (paid * F["cac_rs"] * cacf + ref * P.get("refcac", 2000) + wb * A["A13_wb_cac_rs"]) / 1e7
        opex = OPEX / 12 * lin(t, 1, 6, 1, P.get("opexf", 1)) * (1 - cf * (1 - ct["opexf"]) if ct else 1) * (1 + A["A05_opex_infl"]) ** (t / 12) + (P.get("run", 0) / 12 if live else 0) + ocost
        eb = gp - acq - brand - opex
        inv = sum(v for (m_, v) in P.get("inv", []) if m_ == t)
        cash += eb - inv - wc
        s3 = P.get("s3", 0.55) if live else 0.55
        boxes_new = life_months(s3) * freq
        out.append(dict(t=t, new=new, act=act, rev=core + orev, core=core, rte=rte, gm=gp / (core + orev), gp=gp, mkt=acq + brand, acq=acq,
                        opex=opex, eb=eb, inv=inv, cash=cash, cac=acq * 1e7 / new, s3=s3, skip=1 - freq,
                        ltv=boxes_new * aov * gm, boxes_new=boxes_new))
        nb = [0.0] * (AGE + 2); nf = [0.0] * (AGE + 2)
        for a in range(1, AGE):
            nb[a + 1] = base[a] * qa(a, 0.55); nf[a + 1] = flex[a] * qa(a, P.get("s3", 0.55))
        base, flex = nb, nf
    return out


def summ(o):
    y = lambda a, b, k: sum(x[k] for x in o[a:b])
    be = next((x["t"] for i, x in enumerate(o) if len(o[i:i + 3]) == 3 and all(z["eb"] >= 0 for z in o[i:i + 3])), None)
    mc = min(o, key=lambda x: x["cash"]); z = next((x["t"] for x in o if x["cash"] <= 0), None); e = o[-1]
    return dict(rev1=y(0, 12, "rev"), rev2=y(12, 24, "rev"), eb1=y(0, 12, "eb"), eb2=y(12, 24, "eb"), rr=y(21, 24, "eb") * 4,
                rrrev=y(21, 24, "rev") * 4, gm1=y(0, 12, "gp") / y(0, 12, "rev"), gm2=y(12, 24, "gp") / y(12, 24, "rev"),
                mk1=y(0, 12, "mkt") / y(0, 12, "rev"), mk2=y(12, 24, "mkt") / y(12, 24, "rev"), cash12=o[11]["cash"], cash24=e["cash"],
                mincash=mc["cash"], minm=mc["t"], zero=z, be=be, cac=e["cac"], ltv=e["ltv"], lc=e["ltv"] / e["cac"], s3=e["s3"],
                act=e["act"], gm24=e["gm"], mk24=e["mkt"] / e["rev"], inv=y(0, 24, "inv"))


# ---------- scenarios ----------
D = dict(gm_drift=A["A03_gm_drift"], cac_infl=A["A04_cac_infl"])
INV_A = [(1, 0.6), (2, 0.6), (3, 0.6)]
b_ = dict(y1=F["B"]["rev"], gm=F["B"]["gm"], **A["A21_B"])
c_ = dict(start=1, y1=F["C"]["rev"], gm=F["C"]["gm"], cann=F["C"]["cann"], **A["A22_C"])
RESET = dict(gm_drift=A["A06_plan_gm_drift"], cac_infl=A["A07_plan_cac_infl"], prune=A["A16_prune_cac"], vol=A["A15_prune_vol"],
             brand=A["A17_brand"], gm_up=A["A18_gm_up"], opexf=A["A19_opexf"])
FLEX = dict(launch=4, s3=F["A"]["s3"], skip=A["A08_skip"], aovf=A["A09_aovf"], ref=A["A10_ref_share"], refcac=A["A11_ref_cac_rs"],
            cro=F["conv"] / A["A14_conv_to"], wb=A["A12_wb"], inv=INV_A, run=A["A20_run"])
st = A["A23_stage"]
STAGE = dict(c=dict(start=st["rev_start"], y1=F["C"]["rev"] * st["scale"], gm=F["C"]["gm"], cann=F["C"]["cann"], **A["A22_C"]))
INV_ST = [(st["start"] + i, st["inv"] / 3) for i in range(3)]
SC = {
    "drift": dict(D),
    "A_written": dict(D, launch=4, s3=F["A"]["s3"], skip=A["A08_skip"], aovf=A["A09_aovf"], ref=0.10, inv=INV_A, run=A["A20_run"]),
    "B_written": dict(D, b=b_, inv=[(1, 0.65), (2, 0.65)]),
    "C_written": dict(D, c=c_, inv=[(i, 1.25) for i in (1, 2, 3, 4)]),
    "reset_only": dict(RESET),
    "B_reset": dict(RESET, b=b_, inv=[(1, 0.65), (2, 0.65)]),
    "C_reset": dict(RESET, c=c_, inv=[(i, 1.25) for i in (1, 2, 3, 4)]),
    "core": dict(RESET, **FLEX),
    "base": dict(RESET, **dict(FLEX, inv=INV_A + INV_ST), **STAGE),
    "bear": dict(RESET, **dict(FLEX, s3=0.60, skip=0.10, ref=0.10, cro=F["conv"] / 3.0, wb=20), gm_up=0.025, brand=0.75, opexf=0.95, prune=0.95),
    "bear_cont": dict(RESET, **dict(FLEX, s3=0.60, skip=0.10, ref=0.10, cro=F["conv"] / 3.0, wb=20), gm_up=0.025, brand=0.75, opexf=0.95, prune=0.95, cont=A["A25_cont"]),
    "bull": dict(RESET, **dict(FLEX, s3=0.68, skip=0.03, ref=0.28, cro=F["conv"] / 3.5, inv=INV_A + [(13 + i, 5.0 / 4) for i in range(4)]),
                 gm_up=0.05, opexf=0.88, c=dict(start=13, y1=F["C"]["rev"], gm=F["C"]["gm"], cann=F["C"]["cann"], **A["A22_C"])),
}
RUNS = {k: run(v) for k, v in SC.items()}
SUM = {k: summ(o) for k, o in RUNS.items()}

# ---------- unit economics today ----------
cum = 0.0; payback = None
for k_, s_ in enumerate(S0, 1):
    cum += s_
    if payback is None and cum * F["gp_box_rs"] >= F["cac_rs"]: payback = k_; pay_surv = s_
early = (S0[0] - 0.55) + (S0[1] - 0.55)            # boxes taken by customers who are gone by month 3, per customer acquired
leaver_boxes = early / 0.45; stayer_boxes = (F["life_boxes"] - early) / 0.55
UNIT = dict(boxes_yr=BOXES_YR, boxes_m=BOXES_YR / 12, n0_m=N0, n0_y=N0 * 12, acq=ACQ, brand=BRAND, opex=OPEX, mkt=MKT, tail=RT,
            sum12=sum(S0), payback=payback, pay_surv=pay_surv, leaver_boxes=leaver_boxes, stayer_boxes=stayer_boxes,
            leaver_gp=leaver_boxes * F["gp_box_rs"], leaver_loss=F["cac_rs"] - leaver_boxes * F["gp_box_rs"],
            stayer_gp=stayer_boxes * F["gp_box_rs"], stayer_lc=stayer_boxes * F["gp_box_rs"] / F["cac_rs"],
            leaver_burn=N0 * 12 * 0.45 * (F["cac_rs"] - leaver_boxes * F["gp_box_rs"]) / 1e7,
            runway=F["cash"] / -F["ebitda"] * 12, be_skip=1 - F["life_boxes"] / life_months(0.65), flex_months=life_months(0.65),
            cac_for_3x=F["ltv_rs"] / 3, boxes_for_3x=3 * F["cac_rs"] / F["gp_box_rs"],
            b_store_m_rs=F["B"]["rev"] * 1e7 / F["B"]["stores"] / 12, c_gp=F["C"]["rev"] * F["C"]["gm"],
            c_net=F["C"]["rev"] * F["C"]["gm"] - F["C"]["rev"] * F["C"]["cann"] * F["hist"][2025][1], b_gp=F["B"]["rev"] * F["B"]["gm"],
            web_first=F["visits_lakh"] * 1e5 * F["conv"] / 100, subs_box_share=BOXES_YR / 12 / F["subs"])
HIST = []
prev = None
for yr, (R, g, m, e) in F["hist"].items():
    o = g - m - e
    HIST.append(dict(year=yr, rev=R, gp=R * g, mkt=R * m, opex=R * o, eb=R * e, gm=g, mk=m, ox=o, em=e,
                     dmk=None if prev is None else (R * m - prev[0] * prev[2]) / (R - prev[0]), growth=None if prev is None else R / prev[0] - 1))
    prev = (R, g, m, e)

# ---------- bridge from 2025 EBITDA to the month 24 run-rate (levers added in a fixed order) ----------
steps = [("Headwinds: cost inflation, margin drift", dict(gm_drift=A["A06_plan_gm_drift"], cac_infl=A["A07_plan_cac_infl"])),
         ("Cut non-working marketing 40%", dict(brand=A["A17_brand"])),
         ("Prune paid channels above LTV", dict(prune=A["A16_prune_cac"], vol=A["A15_prune_vol"])),
         ("Overheads down 12%", dict(opexf=A["A19_opexf"])),
         ("Gross margin levers (+4.0 points)", dict(gm_up=A["A18_gm_up"])),
         ("Flex: retention net of skips", dict(launch=4, s3=F["A"]["s3"], skip=A["A08_skip"], aovf=A["A09_aovf"], run=A["A20_run"], inv=INV_A)),
         ("Flex: referral, win-back, conversion", dict(ref=A["A10_ref_share"], refcac=A["A11_ref_cac_rs"], cro=F["conv"] / A["A14_conv_to"], wb=A["A12_wb"])),
         ("Year 2: staged ready-to-eat", dict(STAGE, inv=INV_A + INV_ST))]
BRIDGE = [("2025 EBITDA", F["rev"] * F["hist"][2025][3])]; acc = {}; last = F["rev"] * F["hist"][2025][3]
for name, d in steps:
    acc.update(d); rr = summ(run(acc))["rr"]; BRIDGE.append((name, rr - last)); last = rr
BRIDGE.append(("Month 24 run-rate", last))

# ---------- sensitivity ----------
def var(**kw):
    p = dict(SC["base"]); p.update(kw); return summ(run(p))
TORN = [("3-month retention 60% to 70%", var(s3=0.60), var(s3=0.70)), ("Skip rate 12% to 0%", var(skip=0.12), var(skip=0.0)),
        ("Referral share 10% to 30%", var(ref=0.10), var(ref=0.30)), ("Conversion 3.0% to 3.6%", var(cro=2.8 / 3.0), var(cro=2.8 / 3.6)),
        ("Margin levers +2.5 to +5.0 pts", var(gm_up=0.025), var(gm_up=0.05)), ("Overhead cut 6% to 15%", var(opexf=0.94), var(opexf=0.85)),
        ("Non-working marketing cut 25% to 50%", var(brand=0.75), var(brand=0.50)),
        ("Ready-to-eat sales 50% to 120% of plan", var(c=dict(STAGE["c"], y1=STAGE["c"]["y1"] * 0.5)), var(c=dict(STAGE["c"], y1=STAGE["c"]["y1"] * 1.2)))]
GRID_S3 = [0.55, 0.60, 0.65, 0.70]; GRID_SK = [0.0, 0.05, 0.10, 0.15]
GRID = [[var(s3=s, skip=k)["eb1"] + var(s3=s, skip=k)["eb2"] for k in GRID_SK] for s in GRID_S3]
AW1 = SUM["A_written"]["eb1"] - SUM["drift"]["eb1"]


# ---------- option scorecard (rules, not judgement; each rule is printed in the tables) ----------
def band(v, cuts):
    return 1 + sum(1 for c in cuts if v >= c)
OPT = {}
for key, lab, inv in (("A_written", "A  Fix the subscription", F["A"]["inv"]), ("B_written", "B  Grocery retail", F["B"]["inv"]), ("C_written", "C  Ready-to-eat", F["C"]["inv"])):
    s = SUM[key]; d = SUM["drift"]
    drev = s["rev1"] - d["rev1"]; deb = (s["eb1"] + s["eb2"]) - (d["eb1"] + d["eb2"]); need = inv + (A["A21_B"]["wc_days"] / 30 * plateau(F["B"]["rev"]) if key[0] == "B" else 0)
    OPT[key] = dict(label=lab, drev=drev, deb=deb, need=need, zero=s["zero"], payback=None)
    OPT[key]["s_growth"] = band(drev, [1, 3, 5, 7]); OPT[key]["s_profit"] = band(deb, [0.5, 1.5, 2.5, 3.5]); OPT[key]["s_cash"] = 6 - band(need, [1.5, 2.5, 3.5, 4.5])
OPT["A_written"]["s_risk"] = 4; OPT["B_written"]["s_risk"] = 2; OPT["C_written"]["s_risk"] = 2
W = A["A24_weights"]
for o in OPT.values():
    o["score"] = (o["s_growth"] * W["growth"] + o["s_profit"] * W["profit"] + o["s_cash"] * W["cash"] + o["s_risk"] * W["risk"]) / 100
PER = dict(label="A rebuilt: Perennial", s_growth=band(SUM["core"]["rev1"] - SUM["drift"]["rev1"], [1, 3, 5, 7]),
           s_profit=band((SUM["core"]["eb1"] + SUM["core"]["eb2"]) - (SUM["drift"]["eb1"] + SUM["drift"]["eb2"]), [0.5, 1.5, 2.5, 3.5]),
           s_cash=6 - band(F["A"]["inv"], [1.5, 2.5, 3.5, 4.5]), s_risk=4)
PER["score"] = (PER["s_growth"] * W["growth"] + PER["s_profit"] * W["profit"] + PER["s_cash"] * W["cash"] + PER["s_risk"] * W["risk"]) / 100

# ---------- checks ----------
CHK = []
def chk(name, ok): CHK.append((name, bool(ok)))
chk("lifetime boxes tie to 6.8", abs(life_months(0.55) - 6.8) < 1e-9)
chk("LTV/CAC ties to 1.55", abs(F["life_boxes"] * F["gp_box_rs"] / F["cac_rs"] - 1.554) < 0.01)
chk("gross profit per box ties to 31%", abs(F["gp_box_rs"] / F["aov_rs"] - 0.31) < 0.005)
chk("month 0 revenue ties to Rs 42 Cr", abs(run(dict(), 1)[0]["rev"] * 12 - 42.0) < 0.05)
chk("month 0 EBITDA ties to -9.2", abs(run(dict(), 1)[0]["eb"] * 12 - (-9.24)) < 0.15)
chk("drift runs out of cash inside 24 months", SUM["drift"]["zero"] is not None and SUM["drift"]["zero"] <= 24)
chk("each proposal as written runs out of cash inside 24 months", all(SUM[k]["zero"] for k in ("A_written", "B_written", "C_written")))
chk("base never below Rs 2.5 Cr", SUM["base"]["mincash"] >= 2.5)
chk("bear with the contingency never below zero", SUM["bear_cont"]["mincash"] > 0)
chk("core path never below Rs 5 Cr", SUM["core"]["mincash"] >= 5.0)
chk("base breaks even inside 24 months", SUM["base"]["be"] is not None)
chk("A as written is negative in year 1", AW1 < 0)
chk("bridge sums", abs(sum(v for _, v in BRIDGE[:-1]) - BRIDGE[-1][1]) < 1e-6)
KEY = [round(SUM[k][f], 2) for k in ("drift", "A_written", "B_written", "C_written", "core", "base", "bear", "bear_cont", "bull") for f in ("eb1", "eb2", "rr", "cash24", "mincash")]
HASH = hashlib.sha1(json.dumps(KEY).encode()).hexdigest()[:10]

OUT = dict(facts=F, assumptions=A, unit=UNIT, hist=HIST, summary=SUM, bridge=BRIDGE, tornado=[(n, lo, hi) for n, lo, hi in TORN],
           grid=dict(s3=GRID_S3, skip=GRID_SK, cum_ebitda=GRID), options=OPT, perennial_score=PER, a_written_y1_delta=AW1,
           monthly={k: RUNS[k] for k in ("drift", "A_written", "B_written", "C_written", "core", "base", "bear", "bear_cont", "bull")}, checks=CHK, hash=HASH)

# ---------- values for the deck (every slide number comes from here) ----------
MIN = "−"; RU = "₹"
def f1(x): return (MIN if x < -0.049 else "") + "%.1f" % abs(x)
def f2(x): return (MIN if x < -0.0049 else "") + "%.2f" % abs(x)
def sg(x): return ("+" if x >= 0 else MIN) + "%.1f" % abs(x)
def pc(x, d=0): return ("%." + str(d) + "f%%") % (x * 100)
def rs(x): return (MIN if x < 0 else "") + RU + format(int(round(abs(x))), ",")
def pts(x): return ("+" if x >= 0 else MIN) + "%d pts" % abs(round(x * 100))
def qpts(k): return [F["cash"]] + [round(RUNS[k][i]["cash"], 2) for i in range(2, 24, 3)]
def d24(k, f): return SUM[k][f + "1"] + SUM[k][f + "2"] - SUM["drift"][f + "1"] - SUM["drift"][f + "2"]
b = SUM["base"]; c0 = SUM["core"]; br = SUM["bear_cont"]; bu = SUM["bull"]; d0 = SUM["drift"]; R = RUNS["base"]
lc0 = F["life_boxes"] * F["gp_box_rs"] / F["cac_rs"]
lc1 = life_months(0.65) * (1 - A["A08_skip"]) * F["aov_rs"] * A["A09_aovf"] * F["hist"][2025][1] / F["cac_rs"]
lc2 = lc1 * RUNS["core"][-1]["gm"] / F["hist"][2025][1]; lc3 = c0["lc"]
h0, h3 = HIST[0], HIST[3]
def kp(i):
    x = R[i - 1]
    return dict(s3=pc(x["s3"]), skip=pc(x["skip"]), lc="%.2fx" % (x["ltv"] / x["cac"]), cac=rs(x["cac"]), gm=pc(x["gm"], 1), mk=pc(x["mkt"] / x["rev"], 1), cash=f1(x["cash"]))
k3, k12, k24 = kp(3), kp(12), kp(24)
V = dict(
    hash=HASH,
    team=dict(name="TEAM IDEAFORGE", rows=[["Harsh Kawatra", "Delhi Technological University (DTU)", "Team Leader"],
                                           ["Gursimran Kaur", "Guru Gobind Singh Indraprastha University (GGSIPU)", "Member"],
                                           ["Dayita Arora", "Ramjas College, University of Delhi (DU)", "Member"]]),
    f2="HarvestBox loses %s on each of the 45%% of customers gone by month 3, and no proposal as written keeps cash above zero for 24 months" % rs(UNIT["leaver_loss"]),
    f3="Fund Proposal A, rebuilt with a floor on skipping: LTV to CAC rises from 1.55x to %.2fx for %s1.8 Cr, and ready-to-eat becomes affordable in year 2" % (lc3, RU),
    f4="The plan cuts the loss from %s9.2 Cr to %s%s Cr in year 2 and breaks even in month %d, with cash never below %s%s Cr and no new funding" % (RU, RU, f1(-b["eb2"]), b["be"], RU, f1(b["mincash"])),
    f5="Ninety days put Flex live in all five cities for %s1.8 Cr, and seven KPIs with stop triggers tell the Board by month 6 whether to hold, push or cut" % RU,
    f6="Every number on the four slides traces to the case, a stated assumption or the model, and three case volume figures that do not reconcile are not used",
    hist=[[str(h["year"]), "%s%d Cr" % (RU, h["rev"]), pc(h["gm"]), pc(h["mk"]), pc(h["ox"]), pc(h["em"]).replace("-", MIN)] for h in HIST]
         + [["Change", "+121%", pts(h3["gm"] - h0["gm"]), pts(h3["mk"] - h0["mk"]), pts(h3["ox"] - h0["ox"]), pts(h3["em"] - h0["em"])]],
    dmk=["%dp" % round(h["dmk"] * 100) for h in HIST[1:]],
    surv=[round(s * 100, 1) for s in S0], payback=payback, pay_surv=pc(pay_surv),
    two=[["Share of sign-ups", "45%", "55%"], ["Boxes bought", "%.1f" % leaver_boxes, "%.1f" % stayer_boxes],
         ["Gross profit", rs(UNIT["leaver_gp"]), rs(UNIT["stayer_gp"])], ["Against CAC", rs(-UNIT["leaver_loss"]), "%.2fx" % UNIT["stayer_lc"]]],
    burn=f1(UNIT["leaver_burn"]), leaver_loss=rs(UNIT["leaver_loss"]),
    why=[[w[0].replace(" / ", ", "), w[1]] for w in F["why"]],
    opt=[[OPT[k]["label"], OPT[k]["s_growth"], OPT[k]["s_profit"], OPT[k]["s_cash"], OPT[k]["s_risk"], "%.2f" % OPT[k]["score"]] for k in ("A_written", "B_written", "C_written")]
        + [["A rebuilt (ours)", PER["s_growth"], PER["s_profit"], PER["s_cash"], PER["s_risk"], "%.2f" % PER["score"]]],
    cashq=dict(drift=qpts("drift"), A=qpts("A_written"), B=qpts("B_written"), C=qpts("C_written"), base=qpts("base"), core=qpts("core"), bear=qpts("bear_cont")),
    zero=dict(drift=d0["zero"], A=SUM["A_written"]["zero"], B=SUM["B_written"]["zero"], C=SUM["C_written"]["zero"]),
    aw1=f2(-AW1), be_skip=pc(UNIT["be_skip"], 1), b_store=rs(UNIT["b_store_m_rs"]),
    grid=[[f1(x) for x in row] for row in GRID], grid_raw=[[round(x, 2) for x in row] for row in GRID],
    ladder=[["Today", round(lc0, 2)], ["Retention", round(lc1, 2)], ["Margin", round(lc2, 2)], ["CAC", round(lc3, 2)], ["Benchmark", 3.0]],
    lc24="%.2fx" % lc3, cac24=rs(c0["cac"]),
    bridge=[[n, round(v, 2)] for n, v in BRIDGE], be="MONTH %d" % b["be"], be_n=b["be"], mincash=f1(b["mincash"]), minm=b["minm"],
    scen=[["Revenue (" + RU + " Cr)", "42.0", f1(b["rev1"]), f1(b["rev2"]), f1(br["rev2"]), f1(bu["rev2"])],
          ["Gross margin", "31.0%", pc(b["gm1"], 1), pc(b["gm2"], 1), pc(br["gm2"], 1), pc(bu["gm2"], 1)],
          ["Marketing %", "30.0%", pc(b["mk1"], 1), pc(b["mk2"], 1), pc(br["mk2"], 1), pc(bu["mk2"], 1)],
          ["EBITDA (" + RU + " Cr)", MIN + "9.2", f1(b["eb1"]), f1(b["eb2"]), f1(br["eb2"]), f1(bu["eb2"])],
          ["Cash at year end", "15.0", f1(b["cash12"]), f1(b["cash24"]), f1(br["cash24"]), f1(bu["cash24"])],
          ["M3 retention", "55%", pc(b["s3"]), pc(b["s3"]), pc(br["s3"]), pc(bu["s3"])],
          ["LTV to CAC", "1.55x", "%.2fx" % (R[11]["ltv"] / R[11]["cac"]), "%.2fx" % b["lc"], "%.2fx" % br["lc"], "%.2fx" % bu["lc"]]],
    uses=[["Flex build (Proposal A)", F["A"]["inv"]], ["Year 1 operating loss", round(-b["eb1"], 2)], ["Staged ready-to-eat, gated", A["A23_stage"]["inv"]],
          ["Year 2 operating loss", round(-b["eb2"], 2)], ["Cash left at month 24", round(b["cash24"], 2)]],
    core_cash24=f1(c0["cash24"]), core_rr=f1(c0["rr"]), bear_cash24=f1(br["cash24"]), bear_zero=SUM["bear"]["zero"], base_rr=f2(b["rr"]), bull_be=bu["be"], bull_rr=f1(bu["rr"]),
    y1loss=f1(-b["eb1"]), y2loss=f1(-b["eb2"]), cash12=f1(b["cash12"]), cash24=f1(b["cash24"]),
    kpi=[["M3 retention, new cohorts", "55%", "pilot 62%", k12["s3"], k24["s3"], "under 60% at month 6"],
         ["Boxes skipped, % of due", "none", k3["skip"], k12["skip"], k24["skip"], "over 10% for 2 months"],
         ["Blended CAC", RU + "7,000", k3["cac"], k12["cac"], k24["cac"], "over " + RU + "6,000 at month 6"],
         ["LTV to CAC, new cohorts", "1.55x", k3["lc"], k12["lc"], k24["lc"], "under 2.0x at month 9"],
         ["Gross margin", "31.0%", k3["gm"], k12["gm"], k24["gm"], "under 32% at month 9"],
         ["Marketing % of revenue", "30.0%", k3["mk"], k12["mk"], k24["mk"], "over 25% at month 9"],
         ["Cash in bank (" + RU + " Cr)", "15.0", k3["cash"], k12["cash"], k24["cash"], "under " + RU + "7 Cr at month 12"]],
    torn=[[n, round(lo["rr"], 2), round(hi["rr"], 2)] for n, lo, hi in TORN], torn_base=round(b["rr"], 2),
    optab=[[k[0] + " as written", "%s%.1f Cr" % (RU, F[k[0]]["inv"]), sg(d24(k, "rev")), sg(d24(k, "eb")), "zero in M%d" % SUM[k]["zero"]] for k in ("A_written", "B_written", "C_written")]
          + [["B with the reset", RU + "1.3 Cr", sg(d24("B_reset", "rev")), sg(d24("B_reset", "eb")), RU + f1(SUM["B_reset"]["cash24"]) + " Cr left"],
             ["C with the reset", RU + "5.0 Cr", sg(d24("C_reset", "rev")), sg(d24("C_reset", "eb")), RU + f1(SUM["C_reset"]["cash24"]) + " Cr left"],
             ["A rebuilt (ours)", RU + "1.8 Cr", sg(d24("core", "rev")), sg(d24("core", "eb")), RU + f1(c0["cash24"]) + " Cr left"]],
    check=[["Boxes sold", RU + "42 Cr ÷ " + RU + "5,200", format(int(round(UNIT["boxes_m"])), ",") + " a month", "Used"],
           ["Lifetime boxes", "6.8", "ties to retention", "Used"],
           ["New customers", "not stated", format(int(round(UNIT["n0_m"])), ",") + " a month", "Used"],
           ["Subscribers", "62,000 active", "1 in 9 buys monthly", "Not used"],
           ["Web orders", "14 lakh × 2.8%", "39,200 a month", "Ratio"]],
    assum=[["A08", "Skip rate once free", "5% (bear 10%)"], ["A09", "Order value, new plan mix", RU + "5,091"],
           ["A10", "Referral share of sign-ups", "20% at " + RU + "2,000"], ["A14", "Website conversion", "2.8% to 3.3%"],
           ["A16", "Paid volume pruned", "10%, costliest"], ["A17", "Non-working marketing", "cut 40%"],
           ["A18", "Gross margin levers", "+4.0 points"], ["A19", "Overheads", "cut 12%"], ["A23", "Staged ready-to-eat", "80% of C, M13"]])
VJS = "const V = " + json.dumps(V, ensure_ascii=False) + ";\n"


# ---------- model tables (reproduced as Appendix B of the research document) ----------
def mdt(title, head, rows):
    return "\n### " + title + "\n\n| " + " | ".join(head) + " |\n|" + "---|" * len(head) + "\n" + "\n".join("| " + " | ".join(str(c) for c in r) + " |" for r in rows) + "\n"
SCN = [("drift", "No decision"), ("A_written", "A as written"), ("B_written", "B as written"), ("C_written", "C as written"), ("reset_only", "Reset only"),
       ("B_reset", "B with the reset"), ("C_reset", "C with the reset"), ("core", "Perennial, core (A rebuilt)"), ("base", "Perennial, base (with staged ready-to-eat)"),
       ("bear", "Bear, no response"), ("bear_cont", "Bear with the contingency"), ("bull", "Bull")]
TABLES = "# HarvestBox model tables (hash " + HASH + ")\n\nAll money in " + RU + " crore unless stated. Generated by harvestbox_model.py; do not edit by hand.\n"
TABLES += mdt("T1 Four-year history rebuilt from the case", ["Year", "Revenue", "Gross profit", "Marketing", "Other operating cost", "EBITDA", "Other cost % of revenue", "Marketing added per " + RU + "1 of new revenue"],
              [[h["year"], h["rev"], f2(h["gp"]), f2(h["mkt"]), f2(h["opex"]), f2(h["eb"]), pc(h["ox"]), "" if h["dmk"] is None else f2(h["dmk"])] for h in HIST])
TABLES += mdt("T2 Calibration: what the case figures imply", ["Item", "Value"], [[k_, (round(v_, 3) if isinstance(v_, float) else v_)] for k_, v_ in UNIT.items()])
TABLES += mdt("T3 Survival curve, months 1 to 12, today and with Flex", ["Month"] + [str(i) for i in range(1, 13)], [["Today"] + [pc(s, 1) for s in S0], ["Flex (65% at month 3)"] + [pc(s, 1) for s in surv12(0.65)]])
TABLES += mdt("T4 Scenario summary, 24 months", ["Scenario", "Revenue Y1", "Revenue Y2", "EBITDA Y1", "EBITDA Y2", "Run-rate EBITDA M22 to M24", "Cash M12", "Cash M24", "Lowest cash", "Month of lowest", "Cash zero month", "Break-even month", "CAC at M24", "LTV to CAC at M24"],
              [[lab, f1(SUM[k]["rev1"]), f1(SUM[k]["rev2"]), f2(SUM[k]["eb1"]), f2(SUM[k]["eb2"]), f2(SUM[k]["rr"]), f2(SUM[k]["cash12"]), f2(SUM[k]["cash24"]), f2(SUM[k]["mincash"]), SUM[k]["minm"], SUM[k]["zero"] or "none", SUM[k]["be"] or "none", rs(SUM[k]["cac"]), "%.2fx" % SUM[k]["lc"]] for k, lab in SCN])
TABLES += mdt("T5 Base case by month", ["Month", "New customers", "Active customers", "Revenue", "Gross margin", "Marketing", "Other cost", "EBITDA", "One-off investment", "Cash", "CAC", "LTV to CAC"],
              [[x["t"], round(x["new"]), round(x["act"]), f2(x["rev"]), pc(x["gm"], 1), f2(x["mkt"]), f2(x["opex"]), f2(x["eb"]), f2(x["inv"]), f2(x["cash"]), rs(x["cac"]), "%.2fx" % (x["ltv"] / x["cac"])] for x in R])
TABLES += mdt("T6 EBITDA bridge, 2025 to the month 24 run-rate", ["Step", RU + " Cr a year"], [[n, f2(v)] for n, v in BRIDGE])
TABLES += mdt("T7 Sensitivity of the base case (one input at a time)", ["Input and range", "Run-rate EBITDA low", "Run-rate EBITDA high", "Cash M24 low", "Cash M24 high"], [[n, f2(lo["rr"]), f2(hi["rr"]), f2(lo["cash24"]), f2(hi["cash24"])] for n, lo, hi in TORN])
TABLES += mdt("T8 24-month cumulative EBITDA by 3-month retention (rows) and skip rate (columns)", ["Retention"] + [pc(k_) for k_ in GRID_SK], [[pc(s_)] + [f1(x) for x in row] for s_, row in zip(GRID_S3, GRID)])
TABLES += mdt("T9 Option scorecard (1 to 5; weights growth 20, profit 30, cash 30, risk 20)", ["Option", "24-month revenue vs no decision", "24-month EBITDA vs no decision", "Cash needed", "Growth", "Profit", "Cash", "Risk", "Score"],
              [[o["label"], sg(o["drev"]), sg(o["deb"]), f2(o["need"]), o["s_growth"], o["s_profit"], o["s_cash"], o["s_risk"], "%.2f" % o["score"]] for o in OPT.values()] + [[PER["label"], sg(d24("core", "rev")), sg(d24("core", "eb")), "1.80", PER["s_growth"], PER["s_profit"], PER["s_cash"], PER["s_risk"], "%.2f" % PER["score"]]])
TABLES += mdt("T10 Uses of the " + RU + "15 Cr over 24 months, base case", ["Use", RU + " Cr"], V["uses"] + [["Total", f2(sum(u[1] for u in V["uses"]))]])
TABLES += mdt("T11 Board KPIs on the base path", ["KPI", "Today", "Day 90", "Month 12", "Month 24", "Stop trigger"], V["kpi"])
TABLES += mdt("T12 LTV to CAC ladder", ["Step", "LTV to CAC"], V["ladder"])
TABLES += mdt("T13 Quarterly cash by scenario", ["Scenario"] + ["M" + str(i) for i in range(0, 25, 3)], [[k_] + [f1(x) for x in v_] for k_, v_ in V["cashq"].items()])
chk("uses of cash sum to 15", abs(sum(u[1] for u in V["uses"]) - 15.0) < 0.02)

if __name__ == "__main__" or DRY:
    for n, ok in CHK: print("PASS" if ok else "FAIL", n)
    print("HASH", HASH)
    for k, s in SUM.items():
        print("%-11s Y1 rev %5.1f eb %6.2f | Y2 rev %5.1f eb %6.2f | RR %6.2f | cash12 %5.2f cash24 %6.2f min %5.2f@M%-2d zero %s BE %s | CAC %5.0f LTV/CAC %.2f" % (
            k, s["rev1"], s["eb1"], s["rev2"], s["eb2"], s["rr"], s["cash12"], s["cash24"], s["mincash"], s["minm"], s["zero"], s["be"], s["cac"], s["lc"]))
    if DRY: print("VALUES_JS " + VJS.strip())
    else:
        io.open(HERE / "model_outputs.json", "w", encoding="utf-8", newline="\n").write(json.dumps(OUT, indent=1, default=str))
        (HERE.parent / "deck").mkdir(exist_ok=True)
        io.open(HERE.parent / "deck" / "values.js", "w", encoding="utf-8", newline="\n").write(VJS)
        io.open(HERE / "model_tables.md", "w", encoding="utf-8", newline="\n").write(TABLES)
        print("wrote model_outputs.json, model_tables.md and deck/values.js", len(VJS))
    print("FINDINGS", [len(V[k]) for k in ("f2", "f3", "f4", "f5", "f6")])
    assert all(ok for _, ok in CHK), "a model check failed"
```
<!-- END FILE -->

## 18. Deck palette and extras (Stage 2 only)

`gen.py pre` builds `deck/preamble.js` from three pieces: the tested helper library in
`swasthyagrid-gcp/nexora/deck/preamble.js` (the library the Dream11-style decks were built with), the palette below
(which replaces that file's `const C = {...};` block) and the extras below (appended).

<!-- FILE: deck/_palette.js -->
```js
const C = {
  primary:{r:0.106,g:0.498,b:0.231}, primaryDeep:{r:0.055,g:0.302,b:0.145},
  accent:{r:1,g:0.780,b:0.173}, alert:{r:0.878,g:0.227,b:0.118},
  tint:{r:0.835,g:0.937,b:0.863}, alertTint:{r:0.988,g:0.894,b:0.871},
  blue:{r:0.145,g:0.388,b:0.922}, blueDeep:{r:0.114,g:0.306,b:0.722}, blueTint:{r:0.859,g:0.914,b:0.996},
  good:{r:0.180,g:0.620,b:0.310}, accentTint:{r:1,g:0.957,b:0.820},
  ink:{r:0.039,g:0.039,b:0.039}, surface:{r:0.929,g:0.929,b:0.929},
  surfaceAlt:{r:0.965,g:0.965,b:0.965}, white:{r:1,g:1,b:1}
};
```
<!-- END FILE -->

<!-- FILE: deck/_extras.js -->
```js
// ===== PERENNIAL EXTRAS =====
const RIB4=["DIAGNOSE AND EVALUATE","RECOMMEND","FINANCIAL AND RISK CASE","90-DAY PLAN AND KPIs"];
const RIBX=["APPENDIX","ASSUMPTIONS","DATA CHECK","SENSITIVITY","SOURCES"];
const HG=[null,{r:0.918,g:0.965,b:0.925},{r:0.749,g:0.890,b:0.784},{r:0.525,g:0.796,b:0.596},{r:0.247,g:0.639,b:0.361},{r:0.055,g:0.302,b:0.145}];
function hcell(v){ return {t:String(v),f:HG[v],tc:v>=4?C.white:C.ink}; }
function wipe(s){ s.children.slice().forEach(c=>c.remove()); s.fills=[{type:"SOLID",color:C.white}]; }
function skel(s,n,chip,chipW,title,source){ wipe(s); return skeleton2(s,n-2,(n-1)+" / 4",chip,chipW,title,source,RIB4); }
function srcLine(s,text){ const src=addText(s,"Inter","Semi Bold",14,C.primary,text,64,1046,1792,20,"RIGHT",undefined,true); src.name="SOURCE";
  if(src.height>22) warnings.push("source 2 lines: "+s.name); return src; }
function fine(p,x,y,w,text){ const t=addText(p,"Inter","Semi Bold",16,C.ink,text,x,y,w,20,"LEFT",undefined,true); t.name="FINEPRINT"; return t; }
function rt(p,x,y,w,size,lead,rest,o){ o=o||{}; const t=T(p,x,y,w,size,lead+rest,{color:o.color});
  t.setRangeFontName(0,lead.length,{family:"Inter",style:"Bold"}); if(o.leadColor) t.setRangeFills(0,lead.length,[{type:"SOLID",color:o.leadColor}]); return t; }
function dashedV(p,x,y,h,color,th){ th=th||2.5; let cy=y; while(cy<y+h){ const hh=Math.min(12,y+h-cy); addRect(p,x-th/2,cy,th,hh,color||C.ink); cy+=20; } }
function segBar(p,x,y,w,h,segs){ const tot=segs.reduce((a,s)=>a+s.v,0); let cx=x;
  segs.forEach(sg=>{ const sw=w*sg.v/tot; addRect(p,cx,y,sw,h,sg.c,C.ink,2);
    if(sg.t){ const t=TL(p,0,0,22,sg.t,{family:"Poppins",style:"Bold",color:sg.tc||C.white}); t.x=cx+sw/2-t.width/2; t.y=y+h/2-t.height/2; } cx+=sw; }); }
function teamTableN(p,x,y,cw){ const X=[0,cw[0],cw[0]+cw[1]], rh=54, hh=50, tw=cw[0]+cw[1]+cw[2], rows=V.team.rows;
  const t=addFrame(p,x,y,tw,hh+rh*rows.length,C.white,C.ink,2,"TABLE: team");
  const h=addFrame(t,0,0,tw,hh,C.tint,C.ink,2,"HEAD");
  ["Team Members","Institution","Role"].forEach((l,i)=>addText(h,"Poppins","Bold",22,C.ink,l,X[i]+16,0,cw[i]-24,hh,"LEFT","CENTER"));
  rows.forEach((m,i)=>{ const r=addFrame(t,0,hh+rh*i,tw,rh,i%2?C.surfaceAlt:C.white,C.ink,2,"ROW");
    m.forEach((v,j)=>addText(r,"Inter",j===0?"Bold":"Semi Bold",22,C.ink,v,X[j]+16,0,cw[j]-24,rh,"LEFT","CENTER")); });
  [X[1],X[2]].forEach(vx=>addRect(t,vx-1,0,2,hh+rh*rows.length,C.ink)); return t; }
// Table whose cells wrap: every cell is an auto-height text in a fixed-height row.
function wrapTable(p,x,y,cw,heads,rows,o){ o=o||{}; const hh=o.headerH||40, rh=o.rowH||64, tw=cw.reduce((a,b)=>a+b,0);
  const t=addFrame(p,x,y,tw,hh+rh*rows.length,C.white,C.ink,2.5,"TABLE: "+(o.name||"wrap"));
  const h=addFrame(t,0,0,tw,hh,o.headFill||C.tint,null,0,"HEAD"); let cx=0;
  heads.forEach((l,i)=>{ addText(h,"Poppins","Bold",22,C.ink,l,cx+12,0,cw[i]-20,hh,"LEFT","CENTER"); cx+=cw[i]; });
  rows.forEach((r,i)=>{ const f=addFrame(t,0,hh+rh*i,tw,rh,(o.fills&&o.fills[i])||(i%2?C.surfaceAlt:C.white),null,0,"ROW"); let x2=0;
    r.forEach((v,j)=>{ const c=T(f,x2+12,0,cw[j]-20,22,v,{family:"Inter",style:j===0?"Bold":"Semi Bold",color:(o.colors&&o.colors[j])||C.ink});
      c.y=Math.max(0,(rh-c.height)/2); if(c.height>rh+1) warnings.push("wrapTable overflow: "+v.slice(0,30)); x2+=cw[j]; });
    addRect(t,0,hh+rh*i-1,tw,1.5,C.ink); });
  let vx=0; cw.slice(0,-1).forEach(w=>{ vx+=w; addRect(t,vx-1,0,1.5,hh+rh*rows.length,C.ink); }); return t; }
// Waterfall: items [[label, value]]; the first and last items are totals, the rest are steps.
function waterfall(p,x,y,w,h,items,o){ o=o||{}; const n=items.length, pitch=w/n, bw=o.barW||Math.min(96,pitch*0.62), lh=o.labelH||96;
  const top=y+34, base=y+h-lh, min=o.min, max=o.max; const Y=v=>base-(base-top)*(v-min)/(max-min);
  addRect(p,x,Y(0),w,2.5,C.ink); let run=0;
  items.forEach((it,i)=>{ const cx=x+pitch*i+pitch/2, tot=(i===0||i===n-1); let a,b;
    if(tot){ a=0; b=it[1]; run=it[1]; } else { a=run; b=run+it[1]; run=b; }
    const y1=Math.min(Y(a),Y(b)), bh=Math.max(4,Math.abs(Y(a)-Y(b)));
    addRect(p,cx-bw/2,y1,bw,bh,tot?C.primaryDeep:(it[1]>=0?C.good:C.alert),C.ink,2);
    const txt=(it[1]<0?"−":(tot?"":"+"))+Math.abs(it[1]).toFixed(o.dp===undefined?1:o.dp);
    const below=tot&&it[1]<0; TL(p,0,below?y1+bh+2:y1-32,22,txt,{family:"Poppins",style:"Bold",color:it[1]<0?C.alert:C.primaryDeep,centerAt:cx});
    if(i<n-1) addRect(p,cx+bw/2,Y(run)-1,pitch-bw,1.5,C.ink);
    const lb=T(p,cx-pitch/2+4,base+(o.labelDy||40),pitch-8,22,o.labels?o.labels[i]:it[0],{family:"Inter",style:"Bold",align:"CENTER"});
    if(lb.height>lh-(o.labelDy||40)+2) warnings.push("waterfall label tall: "+lb.characters); }); return {Y}; }
function node2(p,x,y,w,h,title,sub,o){ o=o||{}; const f=addFrame(p,x,y,w,h,o.fill||C.white,C.ink,2,"NODE "+title);
  TL(f,12,6,22,title,{family:"Poppins",style:"Bold",color:o.titleColor||C.primaryDeep,maxW:w-20});
  TL(f,12,36,22,sub,{family:"Inter",style:"Semi Bold",color:o.subColor||C.ink,maxW:w-20}); return f; }
function kv(p,x,y,num,label,o){ o=o||{}; TL(p,x,y,o.size||40,num,{family:"Poppins",style:"ExtraBold",color:o.color||C.primary,maxW:o.numW||220,min:26});
  return T(p,x+(o.numW||220)+12,y+(o.dy||6),o.w||300,22,label,{family:"Inter",style:"Bold",color:o.textColor||C.ink}); }
// ===== END PERENNIAL EXTRAS =====
```
<!-- END FILE -->

## 19. Slide code (seven slides; Stage 2 only, the starting layout for the derivation step)

Each block is one file under `deck/slides/`. `"S1"` to `"S7"` are placeholders that `gen.py bind` replaces with the
real slide ids. All copy is final and linted: no em dash, en dash, question mark, exclamation mark or banned word.

<!-- FILE: deck/slides/s01.js -->
```js
{ const s = await figma.getNodeByIdAsync("S1"); wipe(s);
addChip(s,64,48,460,56,"VERDICT 2.0 · CASE COMPETITION",C.primary,C.white,22);
[["Avsar",556],["SDC",664],["MNC",772],["DU",880]].forEach(l=>logoSlot(s,l[1],40,96,72,l[0]));
addChip(s,1476,48,380,56,V.team.name,C.primaryDeep,C.white,22);
addWireH(s,64,1856,140,C.ink,2.5); [64,512,960,1408,1856].forEach(cx=>addEllipse(s,cx-8,132,16,16,C.white,C.ink,2));
const ti=nm(TL(s,64,150,112,"HARVESTBOX",{family:"Poppins",style:"ExtraBold",maxW:900,min:80}),"TITLE");
logoSlot(s,64+ti.width+28,186,120,96,"HarvestBox");
nm(T(s,64,322,1120,28,"Growing without burning out: 24 months to profit on ₹15 Cr",{family:"Poppins",style:"Bold",color:C.primary}),"SUBTITLE");
const v=layered(s,64,384,1120,244,C.primaryDeep,"CARD: verdict");
T(v,28,18,1064,26,"OUR VERDICT: FUND PROPOSAL A, REBUILT. Free skipping with a floor, a ₹3,600 entry plan and referral, plus the operating reset that only a flexible subscription makes possible.",{family:"Poppins",style:"Bold",color:C.accent});
T(v,28,146,1064,22,"Base case: break-even in "+V.be.toLowerCase()+" on the ₹15 Cr in the bank, cash never below ₹"+V.mincash+" Cr. Ready-to-eat follows in year 2 behind a cash gate. Grocery retail waits.",{color:C.white});
nm(TL(s,64,650,28,V.team.name,{color:C.primary}),"TEAM LABEL");
teamTableN(s,64,698,[280,620,220]);
T(s,64,930,1120,22,"Verdict 2.0, The Skill Development Cell, Motilal Nehru College, University of Delhi",{family:"Inter",style:"Bold",color:C.primaryDeep});
// MIND MAP
const pm=panel(s,1220,160,636,836,"FIVE WAYS TO SOLVE TONIGHT'S DINNER",{fill:C.tint,layered:true});
T(pm,16,58,604,22,"Four rivals for the same meal are cheaper or faster. A meal kit wins only with customers who stay.",{family:"Inter",style:"Bold"});
const HUB=[318,404];
[[318,200],[150,272],[486,272],[150,524],[486,524]].forEach(q=>addDiagonalWire(pm,HUB[0],HUB[1],q[0],q[1],C.ink,2.5));
addEllipse(pm,HUB[0]-78,HUB[1]-78,156,156,C.primaryDeep,C.ink,2.5);
addText(pm,"Poppins","Bold",22,C.white,"TONIGHT'S DINNER",HUB[0]-66,HUB[1]-78,132,156,"CENTER","CENTER");
node2(pm,184,128,268,72,"COOK FROM SCRATCH","groceries in minutes");
logoSlot(pm,96,128,76,72,"Blinkit"); logoSlot(pm,464,128,76,72,"Zepto");
node2(pm,16,236,268,72,"ORDER IN","hot food in 30 minutes");
logoSlot(pm,16,316,76,72,"Swiggy"); logoSlot(pm,100,316,76,72,"Zomato");
node2(pm,352,236,268,72,"READY-TO-EAT","₹250 to ₹450 a meal");
logoSlot(pm,460,316,76,72,"ITC"); logoSlot(pm,544,316,76,72,"MTR");
node2(pm,16,488,268,72,"PRIVATE-LABEL KIT","₹3,500 a box",{fill:C.alertTint});
node2(pm,352,488,268,72,"HARVESTBOX KIT","₹5,200 a box",{fill:C.accent});
const hb=addFrame(pm,16,592,604,84,C.primary,C.ink,2,"NODE rebuilt");
TL(hb,16,8,24,"HARVESTBOX, REBUILT",{color:C.accent,maxW:572});
TL(hb,16,44,22,"skip freely, start at ₹3,600, bring a friend",{family:"Inter",style:"Bold",color:C.white,maxW:572});
addDiagonalWire(pm,486,560,486,592,C.ink,2.5); addDiagonalWire(pm,478,580,486,592,C.ink,2.5); addDiagonalWire(pm,494,580,486,592,C.ink,2.5);
TL(pm,16,688,22,"TWO THAT WALKED THIS ROAD",{color:C.primaryDeep});
logoSlot(pm,16,724,124,72,"HelloFresh"); logoSlot(pm,152,724,124,72,"Blue Apron");
T(pm,292,720,328,22,"One added ready-to-eat after its kit base held. One never fixed churn.",{family:"Inter",style:"Bold"});
fine(pm,16,808,604,"Logos mark alternatives and precedents. No partnership is implied.");
addWireH(s,64,1856,1012,C.ink,2.5);
srcLine(s,"Source: Verdict 2.0 case, HarvestBox: Growing Without Burning Out (Motilal Nehru College, 2026) | Team IdeaForge model "+V.hash+" and research document");
results.push({slide:s.id,total:s.findAll(()=>true).length,top:s.children.length}); }
```
<!-- END FILE -->

<!-- FILE: deck/slides/s02.js -->
```js
{ const s = await figma.getNodeByIdAsync("S2");
skel(s,2,"1 DIAGNOSIS AND EVALUATION",470,V.f2,"Source: Verdict 2.0 case, sections 1 to 5 (snapshot, retention, exit reasons, unit economics, four-year table, proposals) | Team IdeaForge model "+V.hash+", tables T1 to T4 and T9");
// A1 margin table
const a1=panel(s,64,318,640,344,"15 MARGIN POINTS LOST IN TWO LINES");
addTable(a1,16,58,[104,116,90,90,92,116],["Year","Revenue","GM","Mktg","Other","EBITDA"],V.hist,{rowH:34,headerH:36}).name="TABLE: history";
rt(a1,16,270,608,22,"Overheads improved 5 points. ","Each extra ₹1 of revenue cost "+V.dmk[0]+" of marketing in 2023, "+V.dmk[2]+" in 2025.");
fine(a1,16,322,608,"% of revenue. GM: gross margin. Mktg: marketing.");
// A2 survival curve
const a2=panel(s,720,318,540,344,"CAC PAID BACK IN MONTH "+V.payback+", "+V.pay_surv+" REMAIN");
const lc=lineChart(a2,8,56,524,236,[{values:V.surv,color:C.primary}],["1","","3","","","6","","","","10","","12"],{yMin:0,yMax:100,yTicks:[0,50,100],padL:64,padR:28,yFmt:v=>v+"%"});
dashedV(a2,lc.X(9),lc.Y(100),lc.Y(0)-lc.Y(100),C.alert,3);
TL(a2,0,lc.Y(100)-2,22,"payback",{family:"Poppins",style:"Bold",color:C.alert,rightAt:lc.X(9)-10});
[[2,"55%"],[5,"34%"],[11,"19%"]].forEach(q=>TL(a2,0,lc.Y(V.surv[q[0]])-40,22,q[1],{family:"Poppins",style:"Bold",color:C.primaryDeep,centerAt:lc.X(q[0])+6}));
fine(a2,16,298,508,"Share of a sign-up cohort still ordering, by month. Months between the case points are interpolated.");
// A3 two customers
const a3=panel(s,1276,318,580,344,"TWO CUSTOMERS IN ONE AVERAGE");
addTable(a3,16,58,[228,150,170],["Per sign-up","Gone by M3","Stay past M3"],V.two,{rowH:36,headerH:38}).name="TABLE: two customers";
rt(a3,16,250,548,22,"₹"+V.burn+" Cr a year "," is spent acquiring customers who never pay back. Those who stay six months rate HarvestBox 4.6 of 5.",{leadColor:C.alert});
// B1 exit reasons
const b1=panel(s,64,678,560,352,"A ANSWERS 63% OF EXITS, B NONE");
const who=["A","none","A, C","A","none"];
const WL=["Too rigid, hard to skip","Too expensive","Menu repetitive","Food waste, portions","Delivery problems"];
hBars(b1,16,58,528,V.why.map((w,i)=>({label:WL[i],value:w[1],text:w[1]+"%  "+who[i],color:who[i]==="none"?C.surface:C.primary})),{labelW:290,rowH:44,barH:26,valueW:118,max:36});
fine(b1,16,286,528,"Share of leavers by stated reason (case). The letter shows which proposal answers that reason. A: rigid plan, portions, part of menu. C: variety only.");
// B2 scorecard
const b2=panel(s,640,678,700,352,"AS WRITTEN, A SCORES LOWEST. REBUILT, HIGHEST");
grid(b2,16,58,["A as written","B as written","C as written","A rebuilt (ours)"],["Growth","Profit","Cash","Risk","Score"],V.opt.map((o,i)=>[hcell(o[1]),hcell(o[2]),hcell(o[3]),hcell(o[4]),{t:o[5],f:i===3?C.accent:C.white}]),{labelW:228,cellW:88,rowH:44,headH:40,corner:"1 low, 5 high",name:"TABLE: scorecard"});
const fx=addFrame(b2,16,286,668,50,C.surfaceAlt,C.ink,2,"FORMULA");
addText(fx,"Inter","Bold",22,C.ink,"Score = .20 growth + .30 profit + .30 cash + .20 risk",12,0,644,50,"LEFT","CENTER");
// B3 cash paths
const b3=panel(s,1356,678,500,352,"EVERY PATH AS WRITTEN HITS ZERO");
const cc=lineChart(b3,8,56,484,224,[{values:V.cashq.drift,color:C.ink},{values:V.cashq.A,color:C.primary},{values:V.cashq.B,color:C.blue},{values:V.cashq.C,color:C.alert}],["0","","6","","12","","18","","24"],{yMin:-10,yMax:15,yTicks:[-10,0,15],padL:60,padR:20});
addRect(b3,cc.X(0),cc.Y(0)-1,cc.X(8)-cc.X(0),2.5,C.alert);
T(b3,16,284,468,22,"Cash reaches zero: no decision M"+V.zero.drift+", A M"+V.zero.A+", B M"+V.zero.B+", C M"+V.zero.C+".",{family:"Inter",style:"Bold"});
results.push({slide:s.id,total:s.findAll(()=>true).length,top:s.children.length}); }
```
<!-- END FILE -->

<!-- FILE: deck/slides/s03.js -->
```js
{ const s = await figma.getNodeByIdAsync("S3");
skel(s,3,"2 STRATEGIC RECOMMENDATION",470,V.f3,"Source: Verdict 2.0 case, sections 2 to 4 | HelloFresh SE annual report 2020 (Factor acquisition) | Team IdeaForge model "+V.hash+", tables T4, T8, T9 and T12");
function three(card,items,bg,fg,tc){ items.forEach((b,i)=>{ const y=62+i*88; addBadge(card,20,y,40,i+1,bg,fg); T(card,74,y,card.width-94,22,b,{color:tc||C.ink}); }); }
const dn=layered(s,64,318,640,332,C.alertTint,"CARD: do not");
TL(dn,20,12,24,"DO NOT FUND THESE FIRST",{color:C.alert,maxW:600}); addRect(dn,20,50,600,2,C.ink);
three(dn,["A as written: everyone can skip from day one, while retention builds cohort by cohort. Year 1 ends ₹"+V.aw1+" Cr worse than no decision.",
 "B: ₹8 Cr across 800 stores is "+V.b_store+" a store a month, at 22% margin, beside a ₹3,500 private-label kit.",
 "C first: ₹5 Cr is a third of the cash, spent to sell into a base that loses 45% of sign-ups in three months."],C.alert,C.white);
const dy=layered(s,720,318,640,332,C.tint,"CARD: do");
TL(dy,20,12,24,"DO: FUND A, REBUILT AS FLEX WITH A FLOOR",{color:C.primaryDeep,maxW:600}); addRect(dy,20,50,600,2,C.ink);
three(dy,["Free skipping, with a floor: a return date on every pause and two boxes in any three months. Break-even skip rate: "+V.be_skip+".",
 "A ₹3,600 two-meal plan answers the ₹3,500 private label without a discount on the ₹5,200 box.",
 "Referral paid on a friend's third box, win-back of lapsed accounts and a better web page cut CAC to "+V.cac24+"."],C.primary,C.white);
const hp=panel(s,1376,318,480,332,"SKIPPING DECIDES IF A PAYS");
const hf=v=>v>-5.5?HG[4]:(v>-7?HG[3]:(v>-8.5?HG[2]:C.alertTint));
grid(hp,16,58,["55%","60%","65%","70%"],["0%","5%","10%","15%"],V.grid_raw.map((r,i)=>r.map((v,j)=>({t:V.grid[i][j],f:(i===2&&j===1)?C.accent:hf(v),tc:(v>-5.5&&!(i===2&&j===1))?C.white:C.ink}))),{labelW:120,cellW:82,rowH:40,headH:40,corner:"M3 kept",name:"TABLE: skip grid"});
fine(hp,16,266,448,"24-month EBITDA, ₹ Cr, by month 3 retention (rows) and share of boxes skipped (columns). Base case in yellow.");
const fp=panel(s,64,666,760,364,"FLEX WITH A FLOOR: FIVE FEATURES, REBUILT");
wrapTable(fp,16,56,[150,200,378],["Feature","As written","Rebuilt"],[
 ["Skip or pause","No penalty, no limit","Free, with a return date; 2 boxes in any 3 months"],
 ["2 or 4 meals","Two more sizes","₹3,600 entry plan and a ₹6,600 family plan"],
 ["Swap recipes","Any recipe","Swap within one ingredient family"],
 ["Larger menu","More recipes","40 recipes from the same 120 ingredients"],
 ["Refer friends","Rewards on sign-up","₹1,000 each side, paid on the friend's 3rd box"]],{rowH:54,headerH:36,name:"flex features"});
const lp=panel(s,840,666,500,364,"LTV TO CAC: 1.55x TO "+V.lc24);
vBars(lp,16,56,468,250,V.ladder.map((l,i)=>({label:["Today","Retain","Margin","CAC","Target"][i],value:l[1],text:l[1].toFixed(2)+"x",color:[C.alert,C.primary,C.primary,C.primaryDeep,C.surface][i]})),{max:3.4,barW:64});
fine(lp,16,312,468,"Cumulative: each bar adds one lever. Retention is net of a 5% skip rate. 3.0x is the case benchmark.");
const cc=layered(s,1356,666,493,357,C.primaryDeep,"CARD: conclusively");
TL(cc,20,14,28,"CONCLUSIVELY: A, THEN C",{color:C.accent,maxW:453});
[["Months 1 to 12: ","Flex and the operating reset, ₹1.8 Cr."],["Month 12 gate: ","cash of ₹7 Cr and LTV to CAC of 2.2x."],
 ["Months 13 to 24: ","ready-to-eat in two cities, ₹4 Cr of C's ₹5 Cr."],["Precedent: ","HelloFresh bought ready-to-eat maker Factor in 2020, after its kit base held."]]
 .forEach((r,i)=>rt(cc,20,66+i*62,453,22,r[0],r[1],{color:C.white,leadColor:C.accent}));
results.push({slide:s.id,total:s.findAll(()=>true).length,top:s.children.length}); }
```
<!-- END FILE -->

<!-- FILE: deck/slides/s04.js -->
```js
{ const s = await figma.getNodeByIdAsync("S4");
skel(s,4,"3 FINANCIAL AND RISK CASE",450,V.f4,"Source: Verdict 2.0 case (2025 revenue, margins, cash, proposals) | Team IdeaForge model "+V.hash+", tables T4 to T7 and T13 | assumptions A01 to A25 in the appendix and research document");
const bp=panel(s,64,318,1180,354,"EBITDA BRIDGE: 2025 TO THE MONTH 24 RUN-RATE (₹ CR A YEAR)");
waterfall(bp,16,56,1148,290,V.bridge,{min:-12,max:1.5,labelH:92,labelDy:8,barW:78,labels:["2025","Headwinds","Brand cut","Prune paid","Overheads","Margin","Retention","Cheaper CAC","Ready to eat","Month 24"]});
const mc=layered(s,1260,318,589,347,C.primaryDeep,"CARD: moneyshot");
TL(mc,20,14,24,"BREAK-EVEN, BASE CASE",{color:C.accent,maxW:549});
nm(TL(mc,20,52,72,V.be,{family:"Poppins",style:"ExtraBold",color:C.white,maxW:549,min:56}),"MONEYSHOT");
TL(mc,20,166,22,"EBITDA turns positive on cash in hand",{family:"Inter",style:"Bold",color:C.white,maxW:549});
[["₹"+V.mincash+" Cr","lowest cash, in month "+V.minm],["₹0","new funding needed"],["₹"+V.core_cash24+" Cr","at month 24 without ready-to-eat"]]
 .forEach((k,i)=>kv(mc,20,204+i*46,k[0],k[1],{size:30,color:C.accent,numW:150,w:380,dy:6,textColor:C.white}));
const sp=panel(s,64,688,760,342,"THREE SCENARIOS, ONE SET OF LEVERS");
addTable(sp,16,58,[220,92,92,92,116,116],["₹ Cr or %","2025","Y1","Y2","Bear Y2","Bull Y2"],V.scen,{rowH:32,headerH:36}).name="TABLE: scenarios";
fine(sp,16,322,728,"Y1, Y2: plan years, base case. Bear includes the month 7 contingency. M3: month 3.");
const cp=panel(s,840,688,420,342,"CASH NEVER BELOW ₹"+V.mincash+" CR");
const lc=lineChart(cp,8,56,404,216,[{values:V.cashq.drift,color:C.alert},{values:V.cashq.bear,color:C.accent},{values:V.cashq.core,color:C.blue},{values:V.cashq.base,color:C.primary}],["0","","6","","12","","18","","24"],{yMin:-8,yMax:15,yTicks:[0,7.5,15],padL:60,padR:20});
addRect(cp,lc.X(0),lc.Y(0)-1,lc.X(8)-lc.X(0),2.5,C.ink);
[["Base",C.primary,16,276],["No ready-to-eat",C.blue,110,276],["Bear",C.ink,16,306],["No decision",C.alert,110,306]].forEach(l=>{ addRect(cp,l[2],l[3]+7,18,18,l[0]==="Bear"?C.accent:l[1],C.ink,1.5); TL(cp,l[2]+26,l[3],22,l[0],{family:"Inter",style:"Bold"}); });
const rp=panel(s,1276,688,580,342,"FOUR RISKS, EACH WITH A TRIGGER");
wrapTable(rp,16,56,[140,180,228],["Risk","Trigger","Response"],[
 ["Skips run high","Over 10% for 2 months","Tighten the floor to 3 in 4"],
 ["Referral is slow","Under 10% at month 6","Double reward, cut paid 50%"],
 ["Margin slips","Under 32% at month 9","Menu cut to 30 recipes"],
 ["Kitchen incident","Any safety event","Year 2 only, two cities first"]],{rowH:58,headerH:36,name:"risks"});
results.push({slide:s.id,total:s.findAll(()=>true).length,top:s.children.length}); }
```
<!-- END FILE -->

<!-- FILE: deck/slides/s05.js -->
```js
{ const s = await figma.getNodeByIdAsync("S5");
skel(s,5,"4 90-DAY PLAN AND KPIs",410,V.f5,"Source: Verdict 2.0 case, deliverable 4 and the ₹15 Cr constraint | Team IdeaForge model "+V.hash+", tables T10 and T11 | research document sections 15 to 17");
const gp=panel(s,64,318,1140,354,"90 DAYS: FLEX LIVE IN FIVE CITIES BY WEEK 12");
gantt(gp,16,58,330,59,31,["W1","W2","W3","W4","W5","W6","W7","W8","W9","W10","W11","W12","W13"],[
 {label:"Build skip, pause, sizes",s:0,e:4},{label:"Pilot in one city",s:5,e:7,color:C.accent},{label:"Roll out to five cities",s:8,e:11},
 {label:"Referral and win-back live",s:8,e:12},{label:"Channel audit, prune paid",s:0,e:3,color:C.alert},{label:"Margin sprint: waste, menu",s:1,e:12,color:C.primaryDeep},
 {label:"Overheads: lease, hiring",s:0,e:5,color:C.primaryDeep},{label:"Board gate review",s:12,e:12,color:C.accent}]);
const up=panel(s,1220,318,636,354,"WHERE THE ₹15 CR GOES IN 24 MONTHS");
const UC=[C.primary,C.alert,C.accent,C.alertTint,C.good];
segBar(up,16,62,604,52,V.uses.map((u,i)=>({v:u[1],c:UC[i],t:u[1]>=1.5?u[1].toFixed(1):"",tc:(i===2||i===3)?C.ink:C.white})));
addTable(up,16,128,[440,164],["Use of cash","₹ Cr"],V.uses.map(u=>[u[0],u[1].toFixed(2)]),{rowH:34,headerH:36,totalRow:null}).name="TABLE: uses of cash";
const kp=panel(s,64,688,1240,342,"SEVEN KPIs FOR THE BOARD, EACH WITH A STOP TRIGGER");
addTable(kp,16,58,[360,120,150,130,130,318],["KPI","Today","Day 90","Month 12","Month 24","Stop trigger"],V.kpi,{rowH:34,headerH:38}).name="TABLE: kpis";
const tc=layered(s,1320,688,529,335,C.primaryDeep,"CARD: therefore");
TL(tc,20,14,28,"THEREFORE: THREE GATES",{color:C.accent,maxW:489});
[["Day 90: ","Flex live in five cities, pilot retention at 62%."],["Month 6: ","hold, push or cut, read from the seven KPIs."],
 ["Month 12: ","cash of ₹7 Cr and 2.2x release ready-to-eat."],["Miss a gate: ","the contingency halves paid acquisition."]]
 .forEach((r,i)=>rt(tc,20,66+i*66,489,22,r[0],r[1],{color:C.white,leadColor:C.accent}));
results.push({slide:s.id,total:s.findAll(()=>true).length,top:s.children.length}); }
```
<!-- END FILE -->

<!-- FILE: deck/slides/s06.js -->
```js
{ const s = await figma.getNodeByIdAsync("S6"); wipe(s);
skeleton2(s,0,"A1","APPENDIX: ASSUMPTIONS AND CHECKS",560,V.f6,"Source: Verdict 2.0 case | Team IdeaForge model "+V.hash+" (harvestbox_model.py, 13 tables) | full bibliography in the research document, Appendix A",RIBX);
const ap=panel(s,64,318,660,366,"NINE ASSUMPTIONS THAT MOVE THE ANSWER");
addTable(ap,16,58,[70,330,228],["ID","Assumption","Value"],V.assum,{rowH:28,headerH:34}).name="TABLE: assumptions";
const dp=panel(s,740,318,600,366,"THREE CASE FIGURES DO NOT TIE");
wrapTable(dp,16,58,[158,150,160,100],["Figure","Case","Implies","Use"],V.check,{rowH:54,headerH:36,name:"data check",fills:[null,null,null,C.alertTint,C.alertTint]});
const tp=panel(s,1356,318,500,366,"RUN-RATE EBITDA SWING, ₹ CR");
const SL=["M3 retention","Skip rate","Referral share","Conversion","Margin levers","Overhead cut","Brand spend cut","Ready-to-eat"];
tornado(tp,16,60,468,V.torn.map((r,i)=>({label:SL[i],lo:r[1],hi:r[2]})).sort((a,b)=>(b.hi-b.lo)-(a.hi-a.lo)),V.torn_base,{labelW:216,rowH:33,min:-1.4,max:1.9});
fine(tp,16,338,468,"Months 22 to 24, annualised. Ranges: model table T7.");
const op=panel(s,64,700,820,330,"THREE PROPOSALS, AS WRITTEN AND WITH THE SAME RESET");
addTable(op,16,58,[236,120,120,120,192],["Option","Invest","Revenue","EBITDA","Cash"],V.optab,{rowH:32,headerH:36}).name="TABLE: options";
fine(op,16,290,788,"Revenue and EBITDA: 24-month change against no decision, ₹ Cr. Cash: the month cash reaches zero, or cash left at month 24.");
const xp=panel(s,900,700,956,330,"HOW TO READ THIS DECK");
["Case facts are used as given. Every team assumption has an ID (A01 to A25), a rationale and a sensitivity in the research document.",
 "No customer interview, survey or pilot has been run. The validation plan in the research document is a plan and says so.",
 "Real brands on the cover mark alternatives and precedents only. HarvestBox is the fictional company in the case.",
 "CAC: customer acquisition cost. LTV: lifetime gross profit per customer. EBITDA: earnings before interest, tax, depreciation and amortisation. GM: gross margin. M3: month 3. Flex: Proposal A as rebuilt. Reset: the operating improvements. Run-rate: months 22 to 24, annualised."]
 .forEach((x,i)=>{ const f=fine(xp,56,62+[0,52,104,156][i],884,x); addBadge(xp,16,62+[0,52,104,156][i],32,i+1,C.primary,C.white); });
results.push({slide:s.id,total:s.findAll(()=>true).length,top:s.children.length}); }
```
<!-- END FILE -->

<!-- FILE: deck/slides/s07.js -->
```js
{ const s = await figma.getNodeByIdAsync("S7"); wipe(s);
addChip(s,64,48,460,56,"VERDICT 2.0 · CASE COMPETITION",C.primary,C.white,22);
[["Avsar",556],["SDC",664],["MNC",772],["DU",880]].forEach(l=>logoSlot(s,l[1],40,96,72,l[0]));
addChip(s,1476,48,380,56,V.team.name,C.primaryDeep,C.white,22);
addWireH(s,64,1856,140,C.ink,2.5); [64,512,960,1408,1856].forEach(cx=>addEllipse(s,cx-8,132,16,16,C.white,C.ink,2));
nm(TL(s,0,176,112,"THANK YOU",{family:"Poppins",style:"ExtraBold",centerAt:960}),"TITLE");
const v=layered(s,260,372,1400,150,C.primaryDeep,"CARD: verdict");
addText(v,"Poppins","Bold",26,C.accent,"Fund Proposal A, rebuilt: break-even in "+V.be.toLowerCase()+" on the ₹15 Cr in the bank. Ready-to-eat follows behind a cash gate.",28,0,1344,150,"CENTER","CENTER");
nm(TL(s,0,560,28,V.team.name,{color:C.primary,centerAt:960}),"TEAM LABEL");
teamTableN(s,400,612,[280,620,220]);
logoSlot(s,900,850,120,96,"HarvestBox");
addText(s,"Inter","Bold",22,C.primaryDeep,"Every number on these slides traces to the case, a stated assumption or the model.",260,962,1400,30,"CENTER","CENTER");
addWireH(s,64,1856,1012,C.ink,2.5);
srcLine(s,"Source: Verdict 2.0 case, HarvestBox: Growing Without Burning Out (Motilal Nehru College, 2026) | Team IdeaForge model "+V.hash);
results.push({slide:s.id,total:s.findAll(()=>true).length,top:s.children.length}); }
```
<!-- END FILE -->

## 19b. Deck generator, Figma setup and validators (Stage 2 only)

<!-- FILE: deck/gen.py -->
```python
# ===== PERENNIAL GEN v1 =====
"""Deck generator. Stage 2 only. Run from the repo root (nsut-innovators-court):
  python -X utf8 verdict-mnc/deck/gen.py pre     build deck/preamble.js and copy the offline mock
  python -X utf8 verdict-mnc/deck/gen.py mock    apply overrides.json, then dry-run all 7 slides against the mock Figma API
  python -X utf8 verdict-mnc/deck/gen.py bind    write build/slide_NN.js, v1_NN.js, v1_all.js, sweeps.js, logos.js with the real slide ids"""
import io, json, subprocess, sys, pathlib, shutil
DECK = pathlib.Path(__file__).resolve().parent; ROOT = DECK.parents[1]; N = "\n"
LIB = ROOT / "swasthyagrid-gcp" / "nexora" / "deck" / "preamble.js"; MOCK = ROOT / "yuva-yodha" / "deck" / "mock_figma.js"
def rd(p): return io.open(p, encoding="utf-8").read().replace("\r", "")
def wr(p, t): p.parent.mkdir(parents=True, exist_ok=True); io.open(p, "w", encoding="utf-8", newline=N).write(t); print("wrote", p.name, len(t))
def pre():
    t = rd(LIB); a = t.index("const C = {"); b = t.index("};", a) + 2
    for f in ("function skeleton2(", "function lineChart(", "function grid(", "function gantt(", "function tornado(", "function logoSlot(", "function layered(", "function panel(", "function vBars(", "function hBars("):
        assert t.count(f) == 1, f
    wr(DECK / "preamble.js", t[:a] + rd(DECK / "_palette.js").strip() + t[b:] + N + rd(DECK / "_extras.js")); shutil.copyfile(MOCK, DECK / "mock_figma.js")
def derive():
    """Apply deck/overrides.json ({"exact old string": "new string"}) to the slide files and write deck/derived/sNN.js."""
    ovp = DECK / "overrides.json"; ov = json.loads(rd(ovp)) if ovp.exists() else {}; used = set()
    for n in range(1, 8):
        s = rd(DECK / "slides" / ("s%02d.js" % n))
        for a, b in ov.items():
            if a in s: s = s.replace(a, b); used.add(a)
        wr(DECK / "derived" / ("s%02d.js" % n), s)
    miss = [a for a in ov if a not in used]
    print("overrides", len(ov), "unused", miss); assert not miss, "an override key matches no slide text"
def mock():
    derive(); ok = True
    for n in range(1, 8):
        r = subprocess.run(["node", "mock_figma.js", "preamble.js", "values.js", "derived/s%02d.js" % n], cwd=DECK, capture_output=True, text=True, encoding="utf-8")
        good = "warnings: []" in r.stdout and "ISSUES 0" in r.stdout; ok = ok and good
        print("s%02d" % n, "OK" if good else "FAIL", "|", " | ".join(l.strip() for l in (r.stdout + r.stderr).splitlines() if l.strip())[:1200].encode("ascii", "replace").decode())
    sys.exit(0 if ok else 1)
def bind():
    derive(); ids = json.loads(rd(DECK / "slide-ids.json")); p = rd(DECK / "preamble.js"); vals = rd(DECK / "values.js"); V = json.loads(vals[len("const V = "):].rstrip().rstrip(";"))
    v1 = rd(DECK / "_v1.js"); sw = rd(DECK / "_sweeps.js"); assert v1.count("const ids=IDS;") == 1 and sw.count("const ids=IDS;") == 1 and sw.count("MUSTLIST") == 1
    must = [V["be"], V["lc24"], V["cac24"], V["leaver_loss"], V["be_skip"], "HARVESTBOX", "THANK YOU", V["team"]["name"]] + [r[0] for r in V["team"]["rows"]] + ["Motilal Nehru College", "CONCLUSIVELY", "THEREFORE"]
    for n in range(1, 8):
        s = rd(DECK / "derived" / ("s%02d.js" % n)); old = 'getNodeByIdAsync("S%d")' % n; assert s.count(old) == 1, n
        code = p + N + vals + N + "const results=[];" + N + s.replace(old, 'getNodeByIdAsync("%s")' % ids["S%d" % n]) + N + "return {results,warnings};" + N
        assert len(code) < 50000, (n, len(code)); wr(DECK / "build" / ("slide_%02d.js" % n), code)
        wr(DECK / "build" / ("v1_%02d.js" % n), v1.replace("const ids=IDS;", "const ids=%s;" % json.dumps([ids["S%d" % n]])))
    allids = json.dumps([ids["S%d" % n] for n in range(1, 8)])
    wr(DECK / "build" / "v1_all.js", v1.replace("const ids=IDS;", "const ids=%s;" % allids))
    wr(DECK / "build" / "sweeps.js", sw.replace("const ids=IDS;", "const ids=%s;" % allids).replace("MUSTLIST", json.dumps(must, ensure_ascii=False)))
    wr(DECK / "build" / "logos.js", "const ids=%s; const out=[]; for(const id of ids){ const s=await figma.getNodeByIdAsync(id); s.findAll(n=>n.name.startsWith('LOGO: ')).forEach(n=>out.push({slide:s.name,id:n.id,name:n.name,w:Math.round(n.width),h:Math.round(n.height)})); } return out;" % allids)
if __name__ == "__main__": {"pre": pre, "mock": mock, "bind": bind}[sys.argv[1]]()
```
<!-- END FILE -->

<!-- FILE: deck/setup.js -->
```js
// Creates (or finds) exactly seven slides, names them, checks fonts. Safe to rerun: it never makes a second set.
const grid = figma.currentPage.children.find(c => c.type === "SLIDE_GRID");
const all = () => grid.children.flatMap(r => r.children);
let guard = 0; while (all().length < 7 && guard++ < 10) figma.createSlide();
const names = ["01 Cover", "02 Diagnosis and Evaluation", "03 Strategic Recommendation", "04 Financial and Risk Case", "05 90-Day Plan and KPIs", "06 Appendix", "07 Thank You"];
const slides = all(); slides.slice(0, 7).forEach((s, i) => { s.name = names[i]; });
const fonts = await figma.listAvailableFontsAsync();
const need = [["Poppins", "Bold"], ["Poppins", "ExtraBold"], ["Inter", "Semi Bold"], ["Inter", "Bold"]];
return { count: slides.length, ids: slides.slice(0, 7).map(s => s.id), extra: slides.slice(7).map(s => ({ id: s.id, children: s.children.length })),
  fontsOk: need.map(n => fonts.some(f => f.fontName.family === n[0] && f.fontName.style === n[1])) };
```
<!-- END FILE -->

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
<!-- END FILE -->

<!-- FILE: deck/_sweeps.js -->
```js
await Promise.all([{family:"Poppins",style:"Bold"},{family:"Poppins",style:"ExtraBold"},{family:"Inter",style:"Semi Bold"},{family:"Inter",style:"Bold"}].map(f=>figma.loadFontAsync(f)));
const ids=IDS; const MUST=MUSTLIST;
const BAN=["here's","let's","bottom line","delve","game-changer","unlock","it's not just","make no mistake","landscape","robust","seamless","holistic","tapestry","paradigm","navigate","revolutionise","cutting-edge","leverage","empower","transformative","journey","synergy","world-class","best-in-class","next-gen","reimagine","supercharge","harness","crucial","pivotal","furthermore","moreover","in today's","ever-evolving","imagine if"];
const ABSENT=["Dream11","FanCode","Paytm","Liminal","Setu","PRAMAAN","Maudrik","SwasthyaGrid","NEXORA","Aakriti","TODO","TBD","Lorem","Insert","xyz","undefined","NaN"];
let radiusFixed=0; const fontLow=[]; const copy=[]; const density=[]; let all="";
for(const id of ids){ const s=await figma.getNodeByIdAsync(id);
  const nodes=s.findAll(()=>true); density.push({slide:s.name,nodes:nodes.length});
  for(const nd of nodes){ if("cornerRadius" in nd && typeof nd.cornerRadius==="number" && nd.cornerRadius!==0){ nd.cornerRadius=0; radiusFixed++; } }
  for(const t of s.findAllWithCriteria({types:["TEXT"]})){ const c=t.characters; all+=" "+c;
    if(typeof t.fontSize==="number" && t.fontSize<22){ let ok=t.name==="SOURCE"||t.name==="FINEPRINT"||c.startsWith("Source:"); let p=t.parent;
      while(p && !ok){ if(p.name && p.name.startsWith("LOGO:")) ok=true; p=p.parent; }
      if(!ok) fontLow.push({slide:s.name,size:t.fontSize,chars:c.slice(0,40)}); }
    if(/[—–]/.test(c)) copy.push({slide:s.name,issue:"dash",chars:c.slice(0,60)});
    if(c.includes("?")||c.includes("!")) copy.push({slide:s.name,issue:"question or exclamation",chars:c.slice(0,60)});
    const low=c.toLowerCase(); for(const b of BAN) if(low.includes(b)) copy.push({slide:s.name,issue:"banned: "+b,chars:c.slice(0,60)}); } }
return {radiusFixed, fontLow, copy, missing:MUST.filter(m=>!all.includes(m)), presentBad:ABSENT.filter(a=>all.includes(a)), density, slides:ids.length};
```
<!-- END FILE -->

## 20. Review mining (public app-store reviews of real meal-kit services)

HarvestBox is fictional, so it has no reviews. This script tests the case's five exit reasons against what paying
customers of real meal-kit services write in public. It is association, never proof, and the document says so.

<!-- FILE: research/reviews/mine_reviews.py -->
```python
# ===== HARVESTBOX REVIEW MINING v1 =====
"""Pull public Google Play reviews of real meal-kit apps and code them against the five exit reasons in the case.
Run from verdict-mnc/research/reviews:  python -X utf8 mine_reviews.py
Writes reviews_raw.csv, review_outputs.json, review_tables.md, precision_sample.json. HB_DRY=1 pulls 150 a app and writes nothing."""
import csv, json, re, random, os, io, datetime as dt
from collections import Counter
from google_play_scraper import reviews, Sort

DRY = os.environ.get("HB_DRY") == "1"
CAP = 150 if DRY else 4000
CUTOFF = dt.datetime(2024, 1, 1)
APPS = {"HelloFresh": ["com.hellofresh.androidapp"], "EveryPlate": ["com.everyplate.android"], "Home Chef": ["com.homechef.android"],
        "Dinnerly": ["com.dinnerly"], "Green Chef": ["com.greenchef.GreenChef"], "CookUnity": ["com.cookunity.android.app"]}
KIND = {"CookUnity": "ready-to-eat"}
CB = {
 "W1": ("Rigid plan, hard to skip or cancel", r"\b(skip\w*|paus\w*|cancel\w*|unsubscrib\w*|auto.?renew\w*|charged (me )?(again|twice|without)|commit\w*|locked in|cut.?off|deadline|forgot to)\b"),
 "W2": ("Too expensive", r"\b(expensive|pric\w+|overpriced|too much money|not worth|afford\w*|cheaper|costly|cost too|rip.?off)\b"),
 "W3": ("Menu repetitive or narrow", r"\b(repetit\w*|same (meals?|recipes?|menu|dishes)|boring|variety|limited (menu|options|choice\w*|selection)|more (options|choices|recipes)|selection)\b"),
 "W4": ("Food waste or portion issues", r"\b(portion\w*|too (small|little)|not enough food|wast\w*|spoil\w*|rotten|wilted|went bad|mold\w*|packaging|plastic)\b"),
 "W5": ("Delivery problems", r"\b(deliver\w*|late|never (arrived|came|received)|missing (box|item\w*|ingredient\w*)|damaged|courier|shipping|did ?n.?t arrive)\b"),
 "X1": ("App or billing fault", r"\b(bug\w*|crash\w*|log ?in|glitch\w*|freez\w*|not working|error\w*|refund\w*|double charged)\b"),
 "X2": ("Wants ready-made or less cooking", r"\b(ready.?made|ready to eat|pre.?made|pre.?cooked|heat and eat|too much (work|prep|time)|takes too long|prep time|no time to cook)\b"),
}
rows = []; meta = {}
for name, ids in APPS.items():
    got = []; used = None
    for pid in ids:
        try:
            tok = None
            while len(got) < CAP:
                res, tok = reviews(pid, lang="en", country="us", sort=Sort.NEWEST, count=min(200, CAP - len(got)), continuation_token=tok)
                if not res: break
                got += res
                if res[-1]["at"] < CUTOFF or tok is None: break
            used = pid
            if got: break
        except Exception as e:
            print("skip", name, pid, str(e)[:80])
    got = [g for g in got if g["at"] >= CUTOFF and (g.get("content") or "").strip()]
    meta[name] = dict(play_id=used, n=len(got), first=str(min((g["at"] for g in got), default="")), last=str(max((g["at"] for g in got), default="")))
    for g in got:
        rows.append(dict(app=name, kind=KIND.get(name, "meal kit"), date=g["at"].strftime("%Y-%m-%d"), rating=int(g["score"]), thumbs=int(g.get("thumbsUpCount") or 0), text=g["content"].replace("\n", " ").strip()))
for r in rows:
    t = " " + r["text"].lower() + " "
    r["themes"] = [k for k, (lab, rx) in CB.items() if re.search(rx, t, flags=re.I)]
low = [r for r in rows if r["rating"] <= 2]; high = [r for r in rows if r["rating"] >= 4]
def share(sub, k): return round(100.0 * sum(1 for r in sub if k in r["themes"]) / max(1, len(sub)), 1)
W = ["W1", "W2", "W3", "W4", "W5"]
mentions = Counter(k for r in low for k in r["themes"] if k in W); tot = sum(mentions.values()) or 1
CASE = {"W1": 34, "W2": 27, "W3": 18, "W4": 11, "W5": 10}
OUT = dict(pulled=str(dt.date.today()), cutoff=str(CUTOFF.date()), n=len(rows), n_low=len(low), n_high=len(high), meta=meta,
           by_app={a: dict(n=sum(1 for r in rows if r["app"] == a), avg=round(sum(r["rating"] for r in rows if r["app"] == a) / max(1, sum(1 for r in rows if r["app"] == a)), 2),
                           low_share=round(100.0 * sum(1 for r in rows if r["app"] == a and r["rating"] <= 2) / max(1, sum(1 for r in rows if r["app"] == a)), 1),
                           **{k: share([r for r in low if r["app"] == a], k) for k in CB}) for a in APPS},
           low={k: share(low, k) for k in CB}, high={k: share(high, k) for k in CB},
           mix={k: round(100.0 * mentions[k] / tot, 1) for k in W}, case=CASE)
random.seed(7)
SAMPLE = {k: [dict(app=r["app"], rating=r["rating"], text=r["text"][:260]) for r in random.sample([x for x in low if k in x["themes"]], min(20, len([x for x in low if k in x["themes"]])))] for k in CB}
def tb(title, head, body): return "\n### " + title + "\n\n| " + " | ".join(head) + " |\n|" + "---|" * len(head) + "\n" + "\n".join("| " + " | ".join(str(c) for c in r) + " |" for r in body) + "\n"
MD = "# Review mining tables (pulled " + OUT["pulled"] + ", reviews since " + OUT["cutoff"] + ")\n"
MD += tb("V1 Sample by app", ["App", "Type", "Play id", "Reviews", "Average rating", "1 and 2 star share %"], [[a, KIND.get(a, "meal kit"), meta[a]["play_id"], OUT["by_app"][a]["n"], OUT["by_app"][a]["avg"], OUT["by_app"][a]["low_share"]] for a in APPS])
MD += tb("V2 Share of 1 and 2 star reviews that mention each theme, %", ["Theme", "All apps"] + list(APPS), [[k + " " + CB[k][0], OUT["low"][k]] + [OUT["by_app"][a][k] for a in APPS] for k in CB])
MD += tb("V3 Mix of the five case reasons among low-star mentions, against the case", ["Reason", "Review mix %", "Case exit share %", "Gap, points"], [[k + " " + CB[k][0], OUT["mix"][k], CASE[k], round(OUT["mix"][k] - CASE[k], 1)] for k in W])
MD += tb("V4 The same themes in 4 and 5 star reviews, %", ["Theme", "Share of 4 and 5 star reviews"], [[k + " " + CB[k][0], OUT["high"][k]] for k in CB])
MD += tb("V5 Codebook", ["ID", "Theme", "Regular expression"], [[k, v[0], "`" + v[1].replace("|", " or ") + "`"] for k, v in CB.items()])
print(json.dumps(dict(n=OUT["n"], n_low=OUT["n_low"], mix=OUT["mix"], low=OUT["low"], apps={a: meta[a]["n"] for a in APPS}), indent=1))
if not DRY:
    with io.open("reviews_raw.csv", "w", encoding="utf-8", newline="") as f:
        w = csv.DictWriter(f, fieldnames=["app", "kind", "date", "rating", "thumbs", "text", "themes"]); w.writeheader()
        for r in rows: w.writerow(dict(r, themes=" ".join(r["themes"])))
    io.open("review_outputs.json", "w", encoding="utf-8").write(json.dumps(OUT, indent=1))
    io.open("review_tables.md", "w", encoding="utf-8", newline="\n").write(MD)
    io.open("precision_sample.json", "w", encoding="utf-8").write(json.dumps(SAMPLE, indent=1, ensure_ascii=False))
    print("wrote reviews_raw.csv review_outputs.json review_tables.md precision_sample.json")
```
<!-- END FILE -->

## 21. Research assembly and PDF

<!-- FILE: research/assemble.py -->
```python
# ===== HARVESTBOX ASSEMBLE v1 =====
"""Assemble harvestbox-research.md from the writer parts and generated appendices, then run the acceptance checks.
  python -X utf8 verdict-mnc/research/assemble.py md     assemble and check
  python -X utf8 verdict-mnc/research/assemble.py pdf    build build_pdf.py from the Dream11 renderer and render the PDF"""
import re, sys, json, io, pathlib, subprocess
R = pathlib.Path(__file__).resolve().parent; VM = R.parent; ROOT = VM.parent
HEADER = """# HarvestBox: Growing Without Burning Out

**A 24-month path to profit on ₹15 Cr: fund Proposal A, rebuilt, then ready-to-eat behind a cash gate**

Team: Harsh Kawatra (Delhi Technological University, Team Leader) · Gursimran Kaur (Guru Gobind Singh Indraprastha University) · Dayita Arora (Ramjas College, University of Delhi)

Prepared for: Verdict 2.0, The Skill Development Cell, Motilal Nehru College, University of Delhi, October 2026

---

"""
BAN = ["here's", "let's", "bottom line", "delve", "game-changer", "unlock", "it's not just", "make no mistake", "landscape", "robust", "seamless",
       "holistic", "tapestry", "paradigm", "navigate the", "revolutionis", "revolutioniz", "cutting-edge", "leverage", "empower", "transformative",
       "journey", "synergy", "world-class", "best-in-class", "next-gen", "reimagine", "supercharge", "harness", "crucial", "pivotal", "furthermore",
       "moreover", "in today's", "ever-evolving", "imagine if", "testament", "realm", "fast-paced"]
MIN_WORDS, MIN_TABLES, MIN_ANSWERS = 50000, 110, 24
def rd(p): return io.open(p, encoding="utf-8").read().replace("\r", "")
def demote(t): t = re.sub(r"^# .*\n", "", t, count=1); return t.strip()

def md():
    parts = [rd(R / "parts" / ("part-%s.md" % x)).strip() for x in "ABCDEFG"]
    body = "\n\n".join(parts)
    reg = {}
    for ln in rd(R / "raw" / "sources.md").splitlines():
        m = re.match(r"^\| (S\d+) \| (.+?) \| (.+?) \| (.*?) \|$", ln)
        if m: reg[m.group(1)] = (m.group(2), m.group(3))
    cited = sorted({"S" + n for grp in re.findall(r"\[([^\]]*S\d+[^\]]*)\]", body) for n in re.findall(r"S(\d+)", grp)}, key=lambda s: int(s[1:]))
    missing = [c for c in cited if c not in reg]
    app_a = "| ID | Source | Available at |\n|---|---|---|\n" + "\n".join("| %s | %s | %s |" % (s, reg[s][0], reg[s][1]) for s in cited if s in reg)
    app_b = demote(rd(VM / "model" / "model_tables.md")); app_c = demote(rd(R / "reviews" / "review_tables.md"))
    doc = (HEADER + body + "\n\n## Appendix A: Bibliography\n\nSources were opened and checked in October 2026. Only sources cited in the text are listed.\n\n" + app_a +
           "\n\n## Appendix B: Model tables\n\n" + app_b + "\n\n## Appendix C: Review-mining tables and codebook\n\n" + app_c + "\n\n" +
           rd(R / "parts" / "appendix-D.md").strip() + "\n\n" + rd(R / "parts" / "appendix-E.md").strip() + "\n\n" + rd(R / "parts" / "appendix-F.md").strip() + "\n")
    io.open(R / "harvestbox-research.md", "w", encoding="utf-8", newline="\n").write(doc)
    text = doc.split("\n---\n", 1)[1]
    quoted_q = len(re.findall(r"^> .*\?", text, re.M)) + len(re.findall(r"^\*\*Q\d+\.", text, re.M))
    heads = re.findall(r"^#{2,3} (.+)$", doc, re.M)
    res = dict(words=len(doc.split()), tables=len(re.findall(r"^\|[ :|-]+\|\s*$", doc, re.M)), dashes=len(re.findall("[—–]", doc)),
               exclamations=text.count("!"), question_headings=[h for h in heads if h.strip().endswith("?")],
               banned={b: len(re.findall(re.escape(b), doc, re.I)) for b in BAN if re.search(re.escape(b), doc, re.I)},
               answers=len(re.findall(r"^\*\*Answer\.\*\*", doc, re.M)), cited_S=len(cited), missing_S=missing,
               dup_headings=sorted({h for h in heads if heads.count(h) > 1})[:10],
               untagged_rupee_lines=sum(1 for ln in body.splitlines() if "₹" in ln and not ln.startswith("|") and not re.search(r"\[(C |A\d|M\]|T\d|S\d|V\d)", ln)))
    print(json.dumps(res, indent=1, ensure_ascii=False))
    ok = (res["words"] >= MIN_WORDS and res["tables"] >= MIN_TABLES and res["dashes"] == 0 and res["exclamations"] == 0 and not res["question_headings"]
          and not res["banned"] and res["answers"] >= MIN_ANSWERS and not res["missing_S"] and not res["dup_headings"])
    print("ASSEMBLY PASS" if ok else "ASSEMBLY FAIL"); sys.exit(0 if ok else 1)

def pdf():
    src = rd(ROOT / "iim-lucknow-pivot" / "research" / "build_pdf.py")
    def rep(a, b, n):
        nonlocal src
        assert src.count(a) == n, (a[:50], src.count(a)); src = src.replace(a, b)
    rep("dream11-pivot-research", "harvestbox-research", 4)
    rep("Dream11: Life After the Ban  |  Team IdeaForge", "HarvestBox: Growing Without Burning Out  |  Team IdeaForge", 1)
    rep("else 'Dream11: Life After the Ban'}", "else 'HarvestBox: Growing Without Burning Out'}", 1)
    rep("IIM Lucknow  |  PIVOT '26  |  Round 1 research deliverable", "Verdict 2.0  |  Motilal Nehru College, University of Delhi  |  Research deliverable", 1)
    rep("--p:#C4161C; --pd:#5E0A0E; --a:#F5C518; --tint:#FDE0E0;", "--p:#1B7F3B; --pd:#0E4D25; --a:#FFC72C; --tint:#D5EFDC;", 1)
    rep("color: #C4161C; }", "color: #1B7F3B; }", 1)
    io.open(R / "build_pdf.py", "w", encoding="utf-8", newline="\n").write(src)
    r = subprocess.run([sys.executable, "-X", "utf8", str(R / "build_pdf.py")], capture_output=True, text=True, encoding="utf-8")
    print(r.stdout[-600:], r.stderr[-600:]); p = R / "harvestbox-research.pdf"
    print("PDF", p.exists() and p.stat().st_size)

if __name__ == "__main__": {"md": md, "pdf": pdf}[sys.argv[1]]()
```
<!-- END FILE -->

## 22. Case brief (verbatim transcription with reference IDs)

<!-- FILE: case/01-case-brief.md -->
```markdown
# Verdict 2.0 case: HarvestBox, Growing Without Burning Out (transcription with reference IDs)

Source: `verdict-mnc/6ac3e4aa93eb5_the_verdict_case_problem.pdf`, 6 pages. Organiser: The Skill Development Cell, Motilal Nehru
College, University of Delhi (with Project Avsar). Every case fact below has an ID. The research document cites facts as `[C K3]`.
Wording follows the case; only the IDs and the table layout are added.

## 1. Company background

HarvestBox is an Indian subscription-based meal-kit company founded in 2019. Customers receive pre-portioned ingredients and
recipe cards to prepare 3 dinners per week, delivered to their homes. The company currently operates in five major Indian
cities, with one fulfilment centre in each.

| ID | Current snapshot | Value |
|---|---|---|
| K1 | Active subscribers | 62,000 |
| K2 | Average order value | ₹5,200 per box |
| K3 | Employees | 410 |
| K4 | Cash available | ₹15 crore |
| K5 | 2025 revenue | ₹42 crore |
| K6 | 2025 EBITDA loss | ₹9.2 crore |
| K7 | Social media followers | 3.8 lakh |
| K8 | Founded; model; cadence | 2019; subscription meal kit; 3 dinners per week |
| K9 | Footprint | Five major Indian cities, one fulfilment centre in each |
| K10 | Profitability | Despite strong revenue growth, HarvestBox has never achieved profitability |
| K11 | Investor condition | Another funding round will depend on a credible path to profitability within 24 months |
| K12 | Quick commerce | Already available on major quick-commerce platforms, an additional channel to purchase HarvestBox products |

## 2. The problem

HarvestBox is facing three major challenges.

### A. Poor customer retention

| ID | Time after sign-up | Customers still active |
|---|---|---|
| R1 | Month 1 | 100% |
| R2 | Month 3 | 55% |
| R3 | Month 6 | 34% |
| R4 | Month 12 | 19% |

Why customers leave:

| ID | Reason | Share |
|---|---|---|
| W1 | Too rigid / difficult to skip | 34% |
| W2 | Too expensive | 27% |
| W3 | Menu becomes repetitive | 18% |
| W4 | Food waste / portion issues | 11% |
| W5 | Delivery problems | 10% |

W6: Customers who stay beyond six months rate HarvestBox 4.6/5.

### B. Weak unit economics

| ID | Metric | Current |
|---|---|---|
| U1 | Average order value | ₹5,200 |
| U2 | Gross profit per box | ₹1,600 |
| U3 | Customer acquisition cost | ₹7,000 |
| U4 | Lifetime boxes per customer | 6.8 |
| U5 | Lifetime gross profit per customer | about ₹10,900 |
| U6 | LTV/CAC | about 1.55x |
| U7 | Healthy benchmark | 3.0x |

U8: HarvestBox is spending heavily to acquire customers who do not stay long enough to generate attractive returns.

### C. Falling profitability

| ID | Year | Revenue | Gross margin | Marketing % of revenue | EBITDA margin |
|---|---|---|---|---|---|
| P22 | 2022 | ₹19 Cr | 38% | 22% | −12% |
| P23 | 2023 | ₹29 Cr | 36% | 25% | −15% |
| P24 | 2024 | ₹38 Cr | 33% | 28% | −19% |
| P25 | 2025 | ₹42 Cr | 31% | 30% | −22% |

P26: Revenue continues to grow, but margins are declining and losses are increasing. The company currently burns approximately
₹9.2 crore annually.

## 3. Market situation

The Indian convenience-food market is changing rapidly.

| ID | Segment | Approx. annual growth | Typical price |
|---|---|---|---|
| M1 | Meal kits | 8% | ₹350 to ₹650 per meal |
| M2 | Ready-to-eat meals | 15% | ₹250 to ₹450 per meal |

M3: Two major supermarket chains have launched private-label meal kits at around ₹3,500 per box, compared with HarvestBox's ₹5,200.
M4: Customer research shows increasing demand for convenience, flexibility, variety, ready-to-eat options and better value for money.

## 4. Strategic options

G0: The Board can fund only ONE major initiative over the next 12 months.

| ID | Proposal A: Fix the Subscription Experience | |
|---|---|---|
| PA1 | Features | Skip or pause orders without penalty; choose 2 or 4 meals; swap recipes; access a larger menu; refer friends and earn rewards |
| PA2 | Investment | ₹1.8 crore |
| PA3 | Expected impact | 3-month retention could improve from 55% to 65% |
| PA4 | Main risk | Customers may use flexibility to order less frequently |

| ID | Proposal B: Enter Grocery Retail | |
|---|---|---|
| PB1 | What | Sell HarvestBox meal kits through approximately 800 supermarkets across India |
| PB2 | Investment | ₹1.3 crore |
| PB3 | Year-1 incremental revenue | ₹8 crore |
| PB4 | Expected gross margin | 22% |
| PB5 | Main risks | Lower margins; retailer margins; competition from ₹3,500 private-label kits; potential brand dilution |

| ID | Proposal C: Launch Ready-to-Eat Meals | |
|---|---|---|
| PC1 | What | Launch chilled, ready-to-heat meals through the existing HarvestBox app and subscription network |
| PC2 | Investment | ₹5 crore |
| PC3 | Year-1 incremental revenue | ₹6 crore |
| PC4 | Expected gross margin | 45% |
| PC5 | Market | The ready-to-eat market is growing at approximately 15% annually |
| PC6 | Cannibalisation | Management expects around 10% of ready-to-eat sales to cannibalise existing meal-kit sales |
| PC7 | Main risks | High upfront investment; food-safety and cold-chain challenges; operational complexity; significant cash requirement |

## 5. Additional company data

| ID | Item | Value |
|---|---|---|
| X1 | Fulfilment-centre utilisation | 68% |
| X2 | Food waste | 6% of ingredient purchases |
| X3 | Annual head-office lease | ₹1 crore |
| X4 | Website traffic | 14 lakh visits per month |
| X5 | Website-to-first-order conversion | 2.8% |
| X6 | Active subscribers | 62,000 |

## 6. Deliverables

As HarvestBox's consulting team, develop a 24-month strategy for the company covering:

| ID | Deliverable | What it asks |
|---|---|---|
| D1 | Diagnosis and evaluation | Identify the core problems and compare all three proposals on growth, profitability, cash requirements and risk |
| D2 | Strategic recommendation | Select one major initiative and clearly justify why it is the best choice for HarvestBox |
| D3 | Financial and risk case | Show the expected impact on revenue, margins, EBITDA, cash and customer retention, along with key risks and mitigation strategies |
| D4 | 90-day action plan and KPIs | Provide a practical 90-day implementation roadmap and recommend 5 to 7 KPIs that the Board should track |

## 7. Constraint and rules

| ID | Rule |
|---|---|
| G1 | HarvestBox has only ₹15 crore in cash and can fund only ONE major initiative in the next 12 months |
| G2 | Teams may recommend smaller operational improvements alongside their chosen initiative, but must explain how these fit within the company's financial constraints |
| G3 | Teams may make reasonable assumptions, but all major assumptions must be clearly stated and justified |
| G4 | Slide limit: a maximum of 4 main slides, excluding the Thank You slide and up to 4 Appendix slides |
| G5 | Submission: PDF on Unstop, named TeamName_CollegeName.pdf; fallback email skill@mln.du.ac.in |
| G6 | Teams must select only one of the three proposals as their primary strategy |
| G7 | All recommendations must remain realistic within the company's ₹15 crore cash position |
| G8 | Presentation of at most 7 minutes, then a 3-minute cross-questioning session; all team members should participate; the judge's decision is final |
```
<!-- END FILE -->

## 23. Bootstrap

<!-- FILE: extract.py -->
```python
import re, io, pathlib
CF = pathlib.Path(__file__).resolve().parent
t = io.open(CF / "PLAN.md", encoding="utf-8").read().replace("\r", "")
n = 0
for m in re.finditer(r"<!-- FILE: ([^\n]+?) -->\n```[a-z]*\n(.*?)\n```\n<!-- END FILE -->", t, re.S):
    if m.group(1).strip() == "extract.py": continue
    p = CF / m.group(1).strip(); p.parent.mkdir(parents=True, exist_ok=True)
    io.open(p, "w", encoding="utf-8", newline="\n").write(m.group(2) + "\n"); n += 1; print("wrote", p.relative_to(CF).as_posix(), len(m.group(2)))
for d in ("research/raw", "research/parts", "research/reviews", "model", "deck/build", "deck/shots", "deck/logos"): (CF / d).mkdir(parents=True, exist_ok=True)
print("files", n)
```
<!-- END FILE -->

