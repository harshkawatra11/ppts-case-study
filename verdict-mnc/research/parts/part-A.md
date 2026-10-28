## 0. Document control

**Answer.** This document is the research base behind Team IdeaForge's recommendation for Verdict 2.0: HarvestBox should fund the recommended plan, a rebuilt Proposal A, run together with six operating-improvement levers, with Proposal C staged into year 2 behind a cash and retention gate. Every number below carries a tag that says where it came from, a case fact, a team assumption, a model output, a model table, an external source or a review-mining table, so a judge who challenges a figure in the seven-minute presentation can trace it back in one place. The source hierarchy in section 0.3 and the model version in section 0.4 let any reader reproduce every modelled number to the digit shown here.

### 0.1 Purpose and reader

The reader is the HarvestBox Board, as the case frames it: a consulting team hired to answer four deliverables, diagnosis, recommendation, financial and risk case, and a 90-day plan with Board KPIs `[C D1]` `[C D2]` `[C D3]` `[C D4]`. The deck that goes with this document is capped at four main slides plus a thank-you slide and up to four appendix slides, seven minutes to present, three minutes of cross-questioning `[C G4]` `[C G8]`. A deck of that size can carry a finding and its headline number, but it cannot carry the derivation behind it, the counter-arguments to the obvious reading, the conflicts between outside sources, or the full assumptions register. This document carries all four, so that any judge who challenges a slide can find the working behind it here, and so that the three team members who all have to speak in the cross-questioning `[C G8]` can answer from the same base.

The document does four jobs, matched to the case's own four deliverables.

| Job | What it means in practice | Case deliverable | Where in this document |
|---|---|---|---|
| Diagnose | State where the ₹9.2 Cr loss actually comes from and evaluate all three proposals on growth, profit, cash and risk | D1 | Sections 3, 4, 8, 13 to 16 |
| Recommend | Select one major initiative and justify it against the two others and against doing nothing | D2 | Sections 2, 16, 17 |
| Build the financial and risk case | Revenue, margin, EBITDA, cash and retention paths, with risks and mitigations | D3 | Sections 5, 6, 19, 20, 21 |
| Plan execution | A 90-day roadmap and five to seven Board KPIs | D4 | Sections 22, 23 |

The deck and this document are meant to agree to the digit. Wherever a section of this document corresponds to a slide, that section ends with a line naming the exhibit the deck would draw from it. Every modelled number in both comes from one Python model and one JSON file, so a change to an input moves the deck, this document and the model tables together, never one at a time.

### 0.2 Tag legend and reading conventions

Every number in this document ends with a bracketed tag. The tag tells the reader how far to trust the figure and exactly where to check it. A tag on a sentence covers every number in that sentence unless a later figure in the same sentence carries its own tag.

| Tag | Meaning | Resolves to |
|---|---|---|
| `[C K5]` | A fact stated in the case brief, by the reference ID given in its transcription | `case/01-case-brief.md` |
| `[A08]` | A team assumption, numbered A01 to A25 | Section 25 of this document, section 5 of `PLAN.md` |
| `[M]` | A number produced by running the HarvestBox model | `model/model_outputs.json` |
| `[T4]` | A table produced by the same model run | `model/model_tables.md`, reproduced as Appendix B |
| `[S12]` | An external source, numbered in the source register | Appendix A, `research/raw/sources.md` |
| `[V2]` | A table from the review-mining output | Appendix C, `research/reviews/review_tables.md` |

*CAC: customer acquisition cost. EBITDA: earnings before interest, tax, depreciation and amortisation. LTV: lifetime value. AOV: average order value.*

Money is in Indian rupees, written as ₹ with crore (Cr, ten million) and lakh (one hundred thousand) and Indian digit grouping, except where an outside source reports in a foreign currency, which stays in that currency and is never converted to look like an Indian figure. A negative number carries the minus sign. Ranges use the word "to", never a dash. Where the model gives a figure to one or two decimal places, this document keeps that precision; where a source gives a rounded figure, the rounding is kept, because showing a precision the source does not support would overstate what is known. "Assumption" is used once in any paragraph that rests on a team assumption, so a reader never mistakes an estimate for a case fact.

### 0.3 Source hierarchy

Where two outside sources disagree, or where an outside figure differs from a case figure, this document follows a fixed order rather than averaging or picking whichever number is more convenient.

| Tier | Source type | How it is used here |
|---|---|---|
| 1 | The case brief itself | Never overwritten. HarvestBox's own figures are fixed inputs to every analysis; where an outside figure conflicts, the case figure is used and the conflict is logged, never silently dropped |
| 2 | Company filings, annual reports, investor presentations, regulator and ministry text (FSSAI, government broadcaster releases) | Preferred for financial, legal and regulatory facts about real companies and about Indian food-safety rules |
| 3 | Named industry reports and research houses (IMARC, Ken Research, Technavio, GlobalData, Nielsen as cited in trade press) | Preferred for market sizing; used with the report's own definition stated, never averaged across reports with different scopes |
| 4 | Reputable trade and business press (Inc42, Entrackr, Grocery Gazette, ESM Magazine and similar) | Preferred for company results, launches, shutdowns and outcomes, with the publication date stated |
| 5 | Academic and peer-reviewed sources (the Schmitt, Skiera and Van den Bulte 2011 referral study; the IJRASET paper) | Used where a named, dated study exists; treated as the strongest evidence for behavioural claims |
| 6 | Blogs, vendor pages and aggregator summaries, flagged `[blog]` | Used last, for directional context only, never as the sole support for a number that appears in the document's argument or in the deck |

The hierarchy settles the conflicts that matter most for this document: four market-size reports for India's ready-to-eat and meal-kit market that disagree by a factor of four on size and more than three on growth `[S02]` `[S03]` `[S04]` `[S05]` `[S06]`, which are reported side by side rather than averaged in section 9; and a three-way disagreement on named meal-kit companies' six-month retention (roughly 10% in one 2016 study, 28% for Blue Apron alone in another 2016 study, and HarvestBox's own case-stated 34%) `[S30]` `[C R3]`, reported side by side in section 6 rather than treated as one settled benchmark.

### 0.4 Model version, hash and how to rerun

Every modelled number in this document comes from one pinned run of the HarvestBox model. A reader who reruns the script should reproduce every table in Appendix B digit for digit.

| Item | Value |
|---|---|
| Model file | `model/harvestbox_model.py`, writing `model_outputs.json` and `model_tables.md` |
| Model hash | `06111c6c33` `[M]` |
| Checks passed | 14 of 14 `[M]` |
| Findings count by check group | 135, 146, 134, 146, 150 `[M]` |
| Scenarios modelled | No decision, A as written, B as written, C as written, operational improvements only, B with the operational improvements, C with the operational improvements, the core plan, the base case, bear, bear with the month 7 contingency, bull |
| Base case used unless named otherwise | Recommended plan, base (the core plan plus the staged ready-to-eat option exercised at the month 12 gate) |

To rerun the model, a reader runs `python -X utf8 verdict-mnc/model/harvestbox_model.py` from the repository root. The script is deterministic: it takes the case facts in `[C]` form and the assumptions register in section 25 as inputs, and writes the same hash and the same fourteen passing checks every time it is run unchanged. Changing an assumption's value in the script and rerunning it will move every downstream table; this document's rule, stated in section 25, is that if a locked number ever changes, every sentence using it is rewritten, rather than patched in one place.

### 0.5 The skill's calibration note

Building this document's argument used the `case-competition-deck` skill's structural playbook: an action title on every section, a contrarian recommendation defended against the obvious answers, one "moneyshot" number decomposed into named parts, symmetric treatment of the three proposals, three financial scenarios, and a double synthesis that closes the main argument and then the full document. That playbook is corpus-derived from published winning decks that are mostly mergers-and-acquisitions and corporate-finance cases. The structural and rhetorical patterns, contrarian recommendation, foreshadowing, symmetric treatment, one moneyshot, carry across case types with reasonable confidence, because they describe how an argument is sequenced rather than what a particular industry looks like. This case sits across a strategy frame (choosing among three growth options), a turnaround-finance frame (runway, unit economics, path to break-even) and a marketing frame (retention, LTV, CAC). The skill has guides for the strategy and marketing framing; it has no built-in method for a subscription cohort model or a monthly cash runway, so the cohort and cash model described in section 25 was built by the team specifically for this case, not drawn from the skill. The rule that every section heading is a full-sentence finding with a number applies to the twenty-three argument sections, sections 2 to 24; sections 25 to 28 are reference and rehearsal material, the assumptions register, the slide blueprint, the judge-question bank and the talk track, and carry topic-label headings deliberately, because they document the argument rather than extend it.

### 0.6 What is case fact, assumption, model output and outside evidence

Four different kinds of number appear in this document, and conflating them is the single easiest way for an argument to collapse under cross-questioning.

| Kind | What it is | Can it be disputed | Example |
|---|---|---|---|
| Case fact `[C]` | Stated directly in the case brief | No. It is the premise the whole exercise rests on, even where three such figures do not reconcile with each other (section 4) | 2025 revenue ₹42 Cr `[C K5]` |
| Team assumption `[A##]` | A value the team chose where the case asks teams to make and justify reasonable assumptions `[C G3]` | Yes, and each one in section 25 states its own sensitivity range | A08: 5% of boxes skipped once skipping is free, base case |
| Model output `[M]` or `[T#]` | Arithmetic performed on case facts and assumptions by the pinned model run | Only by changing an input and rerunning; the arithmetic itself is mechanical | Runway at today's burn, 19.6 months `[M]` |
| Outside evidence `[S##]` or `[V#]` | A fact about a real company, market or regulation, or a pattern from mined public reviews | Yes, and several outside sources disagree with each other, flagged throughout | HelloFresh FY2025 marketing fell 0.9 points of revenue `[S20]` |

HarvestBox itself is fictional and has no primary research, no customer interviews, no letters of intent and no reviews of its own. Every piece of outside evidence in this document describes a real company, market or regulation, used as context for the industry HarvestBox sits in, and no real company's figure is ever attributed to HarvestBox. Where the research deliverable needs a customer voice, Appendix C's review-mining tables draw only on verbatim public reviews of six named real meal-kit and ready-to-eat apps, labelled "association, not proof" every time they are used, never as a HarvestBox customer's words.

Exhibit for the deck: none. Section 0 has no slide of its own; its content (the tag legend, the honesty about what the skill does and does not supply) is carried in the deck's appendix and in the talk track rather than on a main slide.

## 1. Coverage matrix: every ask in the case mapped to a section

**Answer.** Every reference ID in the case brief is used somewhere in this document, and the table below says where. Seventy-four case IDs cover the company snapshot, the three problem areas, the market context, the three proposals, the additional company data, the deliverables and the organiser's rules, and each is mapped to the section that answers it so a judge working from the case PDF can jump straight to the matching argument. No ID is dropped, and none is answered only in passing: where a deliverable spans several sections (for example the financial and risk case, D3), the table names every one of them.

### 1.1 Company background, problems and market (K, R, W, U, P, M, X)

| Case ID | What the case says | How this document uses it | Section |
|---|---|---|---|
| K1 | Active subscribers, 62,000 | Reconciled against implied monthly boxes; shown not to change the recommendation | 4 |
| K2 | Average order value, ₹5,200 per box | Base unit for every revenue, margin and cohort calculation in the model | 3, 5, 6, 19 |
| K3 | Employees, 410 | Overhead and headcount context for the operational improvements | 8, 18, 23 |
| K4 | Cash available, ₹15 Cr | The budget constraint every scenario is tested against | 2, 3, 19, 24 |
| K5 | 2025 revenue, ₹42 Cr | Base-year revenue for the model and for every growth calculation | 3, 4, 19 |
| K6 | 2025 EBITDA loss, ₹9.2 Cr | Starting point of the bridge to the month 24 run-rate | 2, 3, 19 |
| K7 | Social media followers, 3.8 lakh | Named as a vanity metric the Board should ignore | 23 |
| K8 | Founded 2019; subscription meal kit; 3 dinners a week | Company background and the box definition used throughout | 0, 1, 9 |
| K9 | Five major Indian cities, one fulfilment centre each | Footprint used in the 90-day plan and the ready-to-eat staging | 9, 22, 24 |
| K10 | Never achieved profitability despite revenue growth | Frames the diagnosis in section 3 | 2, 3 |
| K11 | Funding depends on a credible path to profitability within 24 months | Sets the model's 24-month horizon | 2, 19, 24 |
| K12 | Already on quick-commerce platforms | Context for the competitive map | 9, 10 |
| R1 | Month 1 retention, 100% | Anchor point of the survival curve | 4, 5, 13 |
| R2 | Month 3 retention, 55% | Anchor point; also Proposal A's stated target of 65% | 4, 5, 13, 17 |
| R3 | Month 6 retention, 34% | Anchor point; compared with outside benchmarks | 4, 5, 6 |
| R4 | Month 12 retention, 19% | Anchor point; fourth point used to fit the full monthly curve | 4, 5 |
| W1 | Too rigid, hard to skip, 34% of exits | Answered directly by the rebuilt Proposal A's skip and pause feature | 7, 17 |
| W2 | Too expensive, 27% of exits | Answered by the price ladder below ₹5,200 | 7, 17 |
| W3 | Menu repetitive, 18% of exits | Answered by the larger shared-ingredient menu | 7, 17 |
| W4 | Food waste or portion issues, 11% of exits | Partly answered by portion sizing and the margin levers on waste | 7, 8, 18 |
| W5 | Delivery problems, 10% of exits | Not directly addressed by any of the three proposals as written | 7, 16 |
| W6 | Stayers rate HarvestBox 4.6 of 5 after six months | Central to the "product works, contract does not" framing | 2, 6, 7 |
| U1 | Average order value, ₹5,200 | Repeats K2 in the unit-economics section | 6 |
| U2 | Gross profit per box, ₹1,600 | Input to the leaver and stayer arithmetic | 6 |
| U3 | Customer acquisition cost, ₹7,000 | Input to CAC payback and the LTV to CAC ratio | 5, 6, 19 |
| U4 | Lifetime boxes per customer, 6.8 | Anchor for the fitted survival curve's tail | 4, 5, 6 |
| U5 | Lifetime gross profit per customer, about ₹10,900 | Cross-checked against the model's own lifetime gross-profit arithmetic | 6 |
| U6 | LTV to CAC, about 1.55x | Starting point of the LTV to CAC ladder | 6, 19 |
| U7 | Healthy benchmark, 3.0x | Shown to be the break-even condition, not an arbitrary target | 6 |
| U8 | HarvestBox spends heavily to acquire customers who do not stay long enough | Framing statement carried through sections 5, 6 and 19 | 5, 6, 19 |
| P22 | 2022: revenue ₹19 Cr, gross margin 38%, marketing 22%, EBITDA margin −12% | First point of the four-year history rebuilt in rupees | 3, 8 |
| P23 | 2023: revenue ₹29 Cr, gross margin 36%, marketing 25%, EBITDA margin −15% | Second point of the same history | 3, 8 |
| P24 | 2024: revenue ₹38 Cr, gross margin 33%, marketing 28%, EBITDA margin −19% | Third point of the same history | 3, 8 |
| P25 | 2025: revenue ₹42 Cr, gross margin 31%, marketing 30%, EBITDA margin −22% | Fourth point; base year for the model | 3, 8, 19 |
| P26 | Revenue keeps growing, margins decline, losses increase, burn about ₹9.2 Cr a year | The one-sentence diagnosis the rest of section 3 unpacks | 2, 3 |
| M1 | Meal kits grow about 8% a year, ₹350 to ₹650 a meal | Case's own market figure, reported alongside outside estimates, never overwritten | 9 |
| M2 | Ready-to-eat grows about 15% a year, ₹250 to ₹450 a meal | Same treatment as M1 | 9, 15 |
| M3 | Private-label meal kits at about ₹3,500 a box against HarvestBox's ₹5,200 | Anchors the competitive and pricing discussion | 9, 10, 17 |
| M4 | Customers want convenience, flexibility, variety, ready-to-eat options, better value | Frames the jobs-to-be-done map | 9, 17 |
| X1 | Fulfilment-centre utilisation, 68% | Idle-capacity argument for staging ready-to-eat | 15, 18, 24 |
| X2 | Food waste, 6% of ingredient purchases | Input to the gross-margin lever on waste | 8, 18 |
| X3 | Annual head-office lease, ₹1 Cr | Input to the overheads lever | 18 |
| X4 | Website traffic, 14 lakh visits a month | Input to the web-funnel reconciliation | 4, 18 |
| X5 | Website-to-first-order conversion, 2.8% | Same, and input to the conversion lever | 4, 18 |
| X6 | Active subscribers, 62,000 (repeats K1) | Same treatment as K1 | 4 |

*AOV: average order value. CAC: customer acquisition cost. LTV: lifetime value. EBITDA: earnings before interest, tax, depreciation and amortisation.*

### 1.2 Strategic options, additional data and the organiser's rules (PA, PB, PC, D, G)

The second half of the coverage matrix carries the three proposals, the four deliverables and the nine constraint and rule items, each mapped the same way.

| Case ID | What the case says | How this document uses it | Section |
|---|---|---|---|
| PA1 | Proposal A features: skip or pause, 2 or 4 meal sizes, swap recipes, larger menu, refer and earn | Rebuilt feature by feature into the rebuilt Proposal A | 13, 17 |
| PA2 | Proposal A investment, ₹1.8 Cr | Carried unchanged into the rebuilt Proposal A's budget | 2, 13, 17, 19 |
| PA3 | Proposal A's own expected impact, month 3 retention 55% to 65% | Tested against the model's cohort arithmetic | 13, 17 |
| PA4 | Proposal A's main risk, customers order less often | Directly modelled as the skip rate and answered by the floor | 13, 17 |
| PB1 | Proposal B: sell through about 800 supermarkets | Modelled store by store | 14 |
| PB2 | Proposal B investment, ₹1.3 Cr | Carried into the scorecard and the cash model | 14, 16 |
| PB3 | Proposal B year 1 incremental revenue, ₹8 Cr | Converted into a per-store, per-month figure | 14 |
| PB4 | Proposal B expected gross margin, 22% | Input to the margin-stack arithmetic | 14 |
| PB5 | Proposal B's main risks | Expanded with Lane F evidence on grocery meal-kit trials | 14 |
| PC1 | Proposal C: chilled ready-to-eat through the existing app and network | Basis for the staged ready-to-eat design | 15, 24 |
| PC2 | Proposal C investment, ₹5 Cr | Carried into the scorecard and the staged, smaller version's budget | 15, 16, 24 |
| PC3 | Proposal C year 1 incremental revenue, ₹6 Cr | Input to the as-written cash model | 15 |
| PC4 | Proposal C expected gross margin, 45% | Input to the gross-profit arithmetic | 15 |
| PC5 | Ready-to-eat market growing about 15% a year | Repeats M2; used for the growth-rate reality check | 9, 15 |
| PC6 | Cannibalisation, about 10% of ready-to-eat sales | Netted out of the gross-profit figure | 15 |
| PC7 | Proposal C's main risks | Expanded with Lane E evidence on licensing and cold chain | 15 |
| D1 | Diagnosis and evaluation of all three proposals on growth, profit, cash, risk | Answered across the whole document, led by sections 3 and 16 | 3, 13 to 16 |
| D2 | One major initiative, justified | Answered in section 2's recommendation | 2, 16, 17 |
| D3 | Financial and risk case: revenue, margin, EBITDA, cash, retention, risks, mitigations | Answered by sections 5, 6, 19, 20 and 21 together | 5, 6, 19, 20, 21 |
| D4 | 90-day plan and five to seven Board KPIs | Answered by sections 22 and 23 | 22, 23 |
| G0 | The Board can fund only one major initiative in the next 12 months | Shapes the "pick one" framing of section 2 and 16 | 2, 16 |
| G1 | Only ₹15 Cr cash, one major initiative in the next 12 months | Repeats G0 and K4; the binding constraint on every scenario | 2, 19 |
| G2 | Smaller operational improvements allowed if they fit inside ₹15 Cr | Legal basis for the operational improvements | 2, 18, 19 |
| G3 | Major assumptions must be stated and justified | Basis for the assumptions register | 0, 25 |
| G4 | Slide limit: 4 main slides plus a thank-you and up to 4 appendix slides | Governs the deck built from this document in Stage 2 | 0, 26 |
| G5 | Submission as a named PDF on Unstop | Operational rule, not an argument input | 0 |
| G6 | Teams must select only one of the three proposals as the primary strategy | Reinforces G0; answered by naming Proposal A rebuilt as primary | 2, 16 |
| G7 | All recommendations must stay realistic within ₹15 Cr | Tested explicitly in the uses-of-cash table | 2, 19 |
| G8 | Seven minutes to present, three minutes of cross-questioning, all members speak, judge's decision final | Shapes the talk track and the forty judge questions | 0, 27, 28 |

*PA/PB/PC: Proposal A, B, C as the case brief numbers them. Cr: crore.*

Exhibit for the deck: none directly, though this coverage matrix is the working document that confirms no deliverable or constraint from the case brief is missing from either the research document or the deck, and it is the first thing a cross-questioning judge should be shown if asked "did you answer everything we asked for."

## 2. Board answer: fund Proposal A, rebuilt, and reach break-even in month 21 on the cash in hand

**Answer.** We recommend HarvestBox fund the recommended plan: Proposal A rebuilt, the ₹1.8 Cr feature rebuild the case already allows `[C PA2]`, run together with six operating-improvement levers that the case's own rules permit as smaller operational improvements `[C G2]`, with Proposal C staged into year 2 behind a cash and retention gate. On the model's base case this plan turns a ₹9.2 Cr annual loss `[C K6]` into a month 24 run-rate of positive ₹0.10 Cr a year `[M]`, crossing break-even in month 21 `[M]`, without ever running out of the ₹15 Cr in hand `[C K4]`. Proposal B, grocery retail, waits: on its own numbers it does less for the business than either A rebuilt or C staged, and nothing about rebuilding A forecloses it later. This is not the obvious reading of the case prompt, which frames three proposals as competing choices; the obvious reading loses money in year 1 under every one of the three as written, and the better answer is to fix the subscription first, because fixing it is what makes the ready-to-eat option affordable a year later.

### 2.1 The obvious answers and why each fails on the case's own numbers

A reader of the case brief's three options would reasonably expect the choice to be among A, B and C as described. Each fails a test the case itself supplies before any model is built.

| Route | The obvious version | Why it fails |
|---|---|---|
| A as written | Thirty-four percent of exits are rigidity, so let everyone skip freely `[C W1]` | Skipping is offered to every existing subscriber on day one, while the retention gain builds cohort by cohort. In the model, year 1 ends ₹0.29 Cr worse than taking no decision at all, and cash still reaches zero in month 16 `[M]`. Its standalone retention uplift is cancelled at 12.6% skips `[M]` |
| B | ₹8 Cr of new revenue for ₹1.3 Cr of investment `[C PB2]` `[C PB3]` | ₹8 Cr spread across 800 stores `[C PB1]` is ₹8,333 a store a month, less than two boxes at ₹5,200 `[M]`, at a 22% gross margin `[C PB4]` sitting on a shelf beside a ₹3,500 private-label kit `[C M3]`. It does nothing for the 45% who leave within three months `[C R2]` and ties up about ₹1.7 Cr of working capital under the retail terms assumed. Cash reaches zero in month 16 `[M]` |
| C | 45% gross margin in a market growing 15% a year `[C PC4]` `[C PC5]` | ₹5 Cr `[C PC2]` is a third of the entire cash position, spent to sell through an app whose base already loses 45% of sign-ups in three months `[C R2]`. Cash reaches zero in month 15 `[M]`, earlier than doing nothing at all (month 18 `[M]`) |
| Pick the best of the three by a scorecard | Score each on growth, profit, cash and risk, and choose | None of the three as written is worth more than about ₹2.5 Cr of extra annual EBITDA against a ₹9.2 Cr loss `[M]`. The initiative itself is only a quarter of the answer; the operational improvements supply the rest |

### 2.2 The rebuilt Proposal A

Proposal A's five features, as the case states them, are rebuilt one at a time to close the gap the case itself flags as the main risk, that flexibility could let customers order less often `[C PA4]`.

| Feature in the case | As written | As the rebuilt Proposal A | What it guards against |
|---|---|---|---|
| Skip or pause orders, no penalty | No limit stated `[C PA1]` | Free, with a return date set on every pause, and a floor of two boxes in any rolling three months | Customers ordering less often, the case's own stated risk `[C PA4]` |
| Choose 2 or 4 meals | Two additional sizes `[C PA1]` | A ₹3,600 two-meal entry plan and a ₹6,600 four-meal family plan sit beside the existing ₹5,200 plan `[A09]` | "Too expensive" (27% of exits `[C W2]`) and the ₹3,500 private label `[C M3]`, without discounting the core box |
| Swap recipes | Any recipe `[C PA1]` | Swaps are allowed inside one ingredient family only | Extra ingredient waste beyond the 6% already on the books `[C X2]` |
| Access a larger menu | More recipes `[C PA1]` | About 40 recipes built from the same roughly 120 ingredients | Menu repetition (18% of exits `[C W3]`) without adding stock-keeping units |
| Refer friends and earn rewards | Rewards, unspecified `[C PA1]` | ₹1,000 to each side, paid only once the referred friend takes a third box `[A11]` | Paying for sign-ups who leave again in month 1 |

The ₹1.8 Cr investment is unchanged from the case `[C PA2]`; what changes is the design of each feature, so that the flexibility customers say they want `[C M4]` does not become the mechanism by which the business loses more boxes than it gains in retained ones (assumption A08 sets the resulting skip rate at 5% in the base case, with a sensitivity range shown in section 20).

### 2.3 The operational improvements

The case permits smaller operational improvements alongside the chosen initiative, provided they fit inside the ₹15 Cr constraint `[C G2]`. Six levers, costed and sequenced, make up the operational improvements that run alongside the rebuilt Proposal A.

| Lever | What changes | Model input |
|---|---|---|
| Prune paid acquisition | Stop the costliest 10% of paid customer volume, where cost per customer exceeds that customer's lifetime gross profit | A15, A16 |
| Cut non-working marketing | Cut 40% of the ₹4.29 Cr of 2025 marketing spend that the acquisition-cost figure does not explain `[M]` | A17 |
| Improve web conversion | Move the website's first-order conversion from 2.8% `[C X5]` to 3.3%, once the entry-tier price and the skip promise sit on the first page | A14 |
| Win back lapsed accounts | About 40 reactivations a month from month 4, offered through the pause feature | A12, A13 |
| Lift gross margin | Four points over fifteen months: waste down from 6% `[C X2]` toward 4%, a shared-ingredient menu, stronger buying terms, less first-box discounting, better use of the 68% fulfilment-centre utilisation `[C X1]` | A18 |
| Cut overheads | Twelve percent down, by moving head office into spare fulfilment-centre space (the ₹1 Cr lease `[C X3]`) and freezing hiring | A19 |

### 2.4 The year 2 gate and the staged option on Proposal C

If, at month 12, cash is at least ₹7 Cr and the LTV to CAC ratio of new cohorts is at least 2.2x, HarvestBox releases a staged ready-to-eat launch sized at 80% of Proposal C's original scale, ₹4 Cr `[A23]`, in the two largest cities first, using the 32% of fulfilment-centre capacity that today sits idle `[C X1]`. If the gate is missed, the plan stays on its core path and still ends month 24 with ₹5.6 Cr in the bank `[M]`. This is a real options structure: the ready-to-eat opportunity is not foreclosed by choosing A first, it is purchased more cheaply, because a healthier base of customers makes the staged version worth more and cost less relative to cash on hand than launching it today.

### 2.5 Three reasons each side

| Side | Quantitative | Strategic fit | Feasibility |
|---|---|---|---|
| Not A as written, B or C first | Each as-written route reaches zero cash between month 15 and month 16 `[M]` | None of the three as written changes customer acquisition cost, which is where most of the money actually goes `[M]` | Proposal C needs a kitchen, a cold chain and a food-safety system HarvestBox has never run |
| The recommended plan | Loss falls from ₹9.2 Cr to ₹5.5 Cr (core) to a run-rate of positive ₹0.10 Cr (base) `[M]`; break-even in month 21; lowest cash ₹2.9 Cr `[M]` | Customers who stay six months rate HarvestBox 4.6 of 5 `[C W6]`: the product works, the subscription contract is what is broken | The ₹1.8 Cr Proposal A rebuild `[C PA2]` is software and process, reversible, and live in twelve weeks on the 90-day plan |

### 2.6 What would change our mind

Five named triggers would move the team off this recommendation, each tied to a measurable signal rather than a feeling.

| Trigger | Signal | What it would do to the recommendation |
|---|---|---|
| Month 6 retention stalls below 60% at month 3 for new cohorts | KPI stop trigger, under 60% at month 6 `[T11]` | Pull back non-working marketing and overhead cuts further under the month 7 contingency `[A25]`, rather than scale acquisition |
| Skip rate runs persistently above 6% of boxes due | KPI stop trigger `[T11]` | Tighten the floor, or add a modest skip fee, before the referral and conversion levers are pushed harder |
| LTV to CAC of new cohorts falls under 2.0x by month 9 | KPI stop trigger `[T11]` | Re-open the paid-acquisition pruning decision rather than proceed to the month 12 gate |
| A genuine, India-specific, named chilled ready-to-eat cost benchmark becomes available | Currently a gap (section 15; Lane E, section 24) | Could justify exercising the ready-to-eat gate earlier or later than month 12, depending on what it shows |
| Cash falls under ₹7 Cr at month 12 | KPI stop trigger `[T11]` | The ready-to-eat gate is missed by its own rule and the plan stays on the core path by design, not as an improvisation |

### 2.7 The honest reading, stated once in full

The base case crosses break-even in month 21 and then sits just above zero, a run-rate of positive ₹0.10 Cr a year `[M]`: this is a break-even plan inside 24 months, not a profit plan. Without the year 2 ready-to-eat stage, the core plan alone ends at a run-rate of negative ₹1.69 Cr with ₹5.65 Cr still in the bank `[M]`. Every single downside tested one at a time in the sensitivity table turns the run-rate negative `[T7]`. The bear scenario survives the full 24 months only with the month 7 contingency triggered `[M]`. The single largest block in the EBITDA bridge, the rebuilt Proposal A's three referral, win-back and conversion steps together adding ₹3.77 Cr a year `[T6]`, rests for two of its three parts on the assumptions with the thinnest outside evidence behind them, referral share of sign-ups (A10) and the post-rebuild website conversion rate (A14). This is why the plan is built with gates rather than a single committed path: the month 7 contingency if the bear case starts to show, and the month 12 gate before a rupee of the ₹4 Cr staged ready-to-eat budget is spent.

### 2.8 A 150-word version for the cover

HarvestBox loses ₹9.2 Cr a year not because of weak demand but because it pays the same ₹7,000 to acquire every customer while 45% leave within three months. We recommend the recommended plan: rebuild Proposal A, a ₹1.8 Cr, twelve-week subscription redesign, alongside six operating-improvement levers that prune wasted marketing, lift gross margin and cut overheads, all inside the ₹15 Cr in hand. The model takes the loss from ₹9.2 Cr to a month 24 run-rate of positive ₹0.10 Cr, crossing break-even in month 21, with cash never falling below ₹2.9 Cr. Proposal C's ready-to-eat opportunity is not abandoned, it is staged into year 2 at 80% scale behind a cash and retention gate, cheaper and more likely to work once the subscription base is healthier. Proposal B waits: ₹8,333 a store a month does not move the needle.

Exhibit for the deck: the recommendation slide, carrying the one-sentence recommendation, the do-not-against-do comparison, the rebuilt Proposal A feature summary and the headline break-even-month-21 numeral as the deck's single moneyshot.

## 3. The case in numbers: 15 margin points were lost in two lines and none in overheads

**Answer.** HarvestBox's EBITDA margin worsened by 10 points between 2022 and 2025, from −12% to −22% `[C P22]` `[C P25]`, and that net change hides a much larger swing: gross margin alone cost 7 points and marketing alone cost 8 points, 15 points of margin lost between them, while other operating cost actually improved, falling from 28% to 23% of revenue `[C P22]` `[C P25]`. Overheads are not the problem. The loss sits in exactly two lines, the cost of making the product and the cost of acquiring customers for it, and the second of those two lines is growing faster than revenue every single year.

### 3.1 The four-year history rebuilt in rupees

The case gives percentages for four years. Converting each to rupees at the stated revenue for that year makes the arithmetic behind the diagnosis checkable line by line.

| Year | Revenue | Gross profit | Marketing | Other operating cost | EBITDA | Other cost, % of revenue | Marketing added per ₹1 of new revenue |
|---|---|---|---|---|---|---|---|
| 2022 | ₹19 Cr `[C P22]` | ₹7.22 Cr `[T1]` | ₹4.18 Cr `[T1]` | ₹5.32 Cr `[T1]` | −₹2.28 Cr `[T1]` | 28% `[T1]` | not applicable, first year shown |
| 2023 | ₹29 Cr `[C P23]` | ₹10.44 Cr `[T1]` | ₹7.25 Cr `[T1]` | ₹7.54 Cr `[T1]` | −₹4.35 Cr `[T1]` | 26% `[T1]` | 0.31 `[T1]` |
| 2024 | ₹38 Cr `[C P24]` | ₹12.54 Cr `[T1]` | ₹10.64 Cr `[T1]` | ₹9.12 Cr `[T1]` | −₹7.22 Cr `[T1]` | 24% `[T1]` | 0.38 `[T1]` |
| 2025 | ₹42 Cr `[C P25]` | ₹13.02 Cr `[T1]` | ₹12.60 Cr `[T1]` | ₹9.66 Cr `[T1]` | −₹9.24 Cr `[T1]` | 23% `[T1]` | 0.49 `[T1]` |

*Cr: crore. EBITDA: earnings before interest, tax, depreciation and amortisation.* The table shows that gross profit in rupees has roughly doubled from 2022 to 2025 while marketing spend has roughly tripled over the same four years, which is the single clearest picture of where the extra revenue has actually gone.

### 3.2 An issue tree of the EBITDA gap

Splitting the change in EBITDA margin into its mutually exclusive, collectively exhaustive parts isolates exactly where the fifteen points of pressure sit and where the five points of relief sit.

| Branch | 2022 | 2025 | Change | Direction of pressure on EBITDA |
|---|---|---|---|---|
| Revenue (base for all percentages) | ₹19 Cr `[C P22]` | ₹42 Cr `[C P25]` | +₹23 Cr | Growth, not itself a margin problem |
| Gross margin | 38% `[C P22]` | 31% `[C P25]` | −7 points | Pressure: the cost of making each box has grown faster than its price |
| Marketing, % of revenue | 22% `[C P22]` | 30% `[C P25]` | +8 points | Pressure: acquiring each new customer costs more of every revenue rupee |
| Other operating cost, % of revenue | 28% `[C P22]` | 23% `[C P25]` | −5 points (relief) | Relief: overheads have scaled down as revenue scaled up |
| Net EBITDA margin | −12% `[C P22]` | −22% `[C P25]` | −10 points | 7 (gross margin) + 8 (marketing) − 5 (overhead relief) = 10 |

The arithmetic behind the bottom row is shown in full rather than asserted: the gross-margin line subtracts 7 points, the marketing line subtracts a further 8 points, for 15 points of combined pressure, and the overhead line gives back 5 of those points, leaving a net worsening of 10 points, which matches the case's own −12% to −22% change exactly `[C P22]` `[C P25]`.

### 3.3 Overheads are not the problem

The case's own four-year table already settles this question without needing the model: other operating cost fell from 28% of revenue in 2022 to 23% in 2025 `[C P22]` `[C P25]`, even as the company added headcount to reach 410 employees `[C K3]` and opened fulfilment centres in five cities `[C K9]`. A cost line that falls as a share of revenue while the underlying business triples in size (₹19 Cr to ₹42 Cr, a 2.2x increase `[C P22]` `[C P25]`) is a cost line that is scaling well, not one hiding the loss. Any argument that frames HarvestBox's problem as "bloated overheads" does not survive contact with this one row of the case's own data, which is why the overheads lever among the operational improvements in section 18 is sized modestly, a further 12% cut `[A19]`, rather than treated as the main source of relief.

### 3.4 Marketing per rupee of new revenue is rising

A single ratio, marketing spend added divided by revenue added, each year against the prior year, makes the point that growth is being bought at a rising marginal price, not a flat one.

| Year | Marketing spend | Revenue | Marketing added per ₹1 of new revenue that year |
|---|---|---|---|
| 2023 | ₹7.25 Cr `[T1]` | ₹29 Cr `[C P23]` | 0.31 `[T1]`: every rupee of new revenue over 2022 cost 31 paise of extra marketing |
| 2024 | ₹10.64 Cr `[T1]` | ₹38 Cr `[C P24]` | 0.38 `[T1]`: the same rupee of new revenue now costs 38 paise |
| 2025 | ₹12.60 Cr `[T1]` | ₹42 Cr `[C P25]` | 0.49 `[T1]`: and now 49 paise, roughly half the value of every incremental rupee of revenue |

This is insight 4 of the team's twelve: each extra rupee of revenue is costing more to generate than the rupee before it, which is the arithmetic signature of a business whose growth engine is losing efficiency over time, not one that has simply chosen to spend more.

### 3.5 Revenue growth is slowing sharply

| Year pair | Revenue, from and to | Growth, shown in full | Growth rate |
|---|---|---|---|
| 2022 to 2023 | ₹19 Cr `[C P22]` to ₹29 Cr `[C P23]` | ₹29 Cr ÷ ₹19 Cr − 1 = 0.526 | 53% `[C P22]` `[C P23]` |
| 2023 to 2024 | ₹29 Cr `[C P23]` to ₹38 Cr `[C P24]` | ₹38 Cr ÷ ₹29 Cr − 1 = 0.310 | 31% `[C P23]` `[C P24]` |
| 2024 to 2025 | ₹38 Cr `[C P24]` to ₹42 Cr `[C P25]` | ₹42 Cr ÷ ₹38 Cr − 1 = 0.105 | 10.5% `[C P24]` `[C P25]` |

Growth has fallen from 53% to 10.5% in two years, at the same time that marketing's cost per rupee of new revenue has risen from 0.31 to 0.49 (section 3.4). The company is spending more to grow more slowly, which is the combined signature behind the runway calculation that follows.

### 3.6 Runway at today's burn is shorter than the investors' 24-month window

| Input | Value | Arithmetic |
|---|---|---|
| Cash available | ₹15 Cr `[C K4]` | ₹15 Cr ÷ (₹9.2 Cr ÷ 12) |
| Annual burn, 2025 | ₹9.2 Cr `[C K6]` | Monthly burn: ₹9.2 Cr ÷ 12 = ₹0.767 Cr a month |
| Runway at today's burn | 19.6 months `[M]` | ₹15 Cr ÷ ₹0.767 Cr a month = 19.6 months |
| Investor condition | 24 months `[C K11]` | 19.6 months is 4.4 months short of the window investors have set |

If HarvestBox changed nothing at all, it would run out of cash more than four months before the next funding conversation the investors require `[C K11]`, which is the single clearest statement of why "do nothing" is not actually one of the options on the table, whatever the case's own framing of three choices might suggest.

Exhibit for the deck: the diagnosis slide, carrying the issue tree, the marketing-per-rupee-of-revenue line and the runway-against-24-months comparison as the deck's statement of the core problem before any proposal is introduced.

## 4. Data reconciliation: three case figures do not tie, and the plan does not depend on them

**Answer.** Three figures in the case brief do not reconcile with each other on their face: 62,000 active subscribers `[C K1]` would imply ₹387 Cr of annual revenue at one box a month, nine times the case's actual ₹42 Cr `[C K5]`; the website funnel (14 lakh visits a month at 2.8% conversion `[C X4]` `[C X5]`) implies 39,200 first orders a month, forty times the roughly 990 new customers a month the revenue figure itself implies `[A02]`; and the stated 6.8 lifetime boxes `[C U4]` only matches the four retention points `[C R1]` to `[C R4]` under a specific reading of what a "box" is. None of these three gaps is hidden or fixed by guessing; all three are stated here plainly, and the model and the recommendation are built so that none of the three readings of "active subscriber" changes which plan HarvestBox should fund.

### 4.1 What a box is, and the survival curve that fits the four case points

The case states four retention points, month 1 at 100%, month 3 at 55%, month 6 at 34%, month 12 at 19% `[C R1]` `[C R2]` `[C R3]` `[C R4]`, and separately states that a customer takes 6.8 lifetime boxes `[C U4]`. A "box" is read as one month of dinners, consistent with the case's own cadence of three dinners a week `[C K8]`, and the monthly survival rate between the four stated points is fitted geometrically `[A01]`. Doing so gives the full month-by-month curve below.

| Month | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Survival | 100.0% `[C R1]` | 74.2% `[T3]` | 55.0% `[C R2]` | 46.9% `[T3]` | 39.9% `[T3]` | 34.0% `[C R3]` | 30.9% `[T3]` | 28.0% `[T3]` | 25.4% `[T3]` | 23.1% `[T3]` | 20.9% `[T3]` | 19.0% `[C R4]` |

The sum of the twelve monthly survival rates gives 4.97 boxes taken in the first year `[M]`. A customer's remaining lifetime boxes beyond month 12 are then modelled as continuing to decline geometrically at 0.9058 a month `[M]`, the rate the model finds closest to the case's own month 6 to 12 decline (0.9076, computed as (34%/19%) to the power of 1/6, essentially the same number), so the case turns out to be internally consistent on this reading of a box and this treatment of the tail. Adding that declining tail to the 4.97 boxes already taken in year one brings the total lifetime figure to 6.8 boxes `[C U4]`, which is insight 1: the retention table and the lifetime-boxes figure agree only under this specific but reasonable reading, and a box at ₹5,200 `[C K2]` works out to 12 dinners at about ₹433 each, squarely inside the case's own stated ₹350 to ₹650 band for a meal-kit meal `[C M1]`.

### 4.2 Sixty-two thousand subscribers do not match 6,731 boxes a month

| Step | Calculation | Result |
|---|---|---|
| Revenue implied by 62,000 subscribers taking one box a month | 62,000 × ₹5,200 × 12 months | ₹386.88 Cr a year, rounded to ₹387 Cr `[C K1]` `[C K2]` |
| Actual 2025 revenue | Case fact | ₹42 Cr `[C K5]` |
| Boxes a month the actual revenue implies | ₹42 Cr ÷ ₹5,200 ÷ 12 | 6,731 boxes a month `[M]` |
| Share of the 62,000 subscribers who buy in a given month | 6,731 ÷ 62,000 | 10.9%, roughly 1 in 9 `[M]` |

The 62,000 figure, taken as written, would put HarvestBox at nine times its stated revenue. Read instead as a count of accounts that have not been formally cancelled, it is consistent with only about one in nine of those accounts actually taking a box in any given month, which is itself a plausible description of a subscription with no obligation to buy every period, especially once the rebuilt Proposal A's skip and pause feature is introduced in section 17. Either way, this document's model and recommendation never use the 62,000 figure as an input; they build from the revenue identity in the next row instead.

### 4.3 The website funnel implies forty times more new customers than revenue does

| Step | Calculation | Result |
|---|---|---|
| Website visits a month | Case fact | 14 lakh `[C X4]` |
| Website-to-first-order conversion | Case fact | 2.8% `[C X5]` |
| First orders a month implied by the funnel | 14,00,000 × 0.028 | 39,200 a month `[T2]` |
| New customers a month implied by revenue, 6.8 lifetime boxes and steady state | ₹42 Cr ÷ ₹5,200 ÷ 12 ÷ 6.8 `[A02]` | About 990 a month `[M]` |
| Ratio between the two readings | 39,200 ÷ 990 | About 40x |

A website funnel converting at 2.8% of 14 lakh monthly visits into first orders would add roughly 39,200 new customers a month, which would in turn make HarvestBox a vastly larger business than its stated ₹42 Cr of revenue supports. The revenue-consistent figure of about 990 new customers a month `[A02]` is the one used throughout this document's model, because it is derived directly from the one case figure that most directly constrains everything else, 2025 revenue itself `[C K5]`, rather than from a funnel conversion rate that could plausibly describe something other than first-time HarvestBox customers (repeat visits, visits that do not convert for reasons the case does not state, or a broader top-of-funnel number than the one that actually becomes a paying subscriber).

### 4.4 Three readings of "active subscribers", and why none changes the answer

| Reading | What it would mean | Consistent with |
|---|---|---|
| Literal headcount | 62,000 accounts that have not formally cancelled, whether or not they are currently buying `[C K1]` | A loose definition of "active" common to subscription businesses that do not force a hard cancellation after a skipped period |
| Trailing-month purchasers | Only the roughly 6,731 customers who actually took a box in the most recent month `[M]` | The revenue identity in section 4.2, and the roughly 1-in-9 monthly purchase incidence it implies |
| Revenue-consistent new-customer accounting | About 990 new customers a month `[A02]`, flowing through the fitted survival curve in section 4.1, with a running active base far below 62,000 once the month 3 drop to 55% `[C R2]` is applied | The model's own cohort structure, which is what every downstream number in this document, CAC payback, LTV to CAC, the EBITDA bridge, is actually built on |

None of these three readings changes the recommendation in section 2, because the model and the recommendation are built on the revenue identity and the four-point survival curve, not on the 62,000 headcount figure. Whichever reading of "active subscriber" a judge prefers, the cohort economics in sections 5 and 6, the CAC payback math, and the EBITDA bridge in section 19 are computed the same way and produce the same numbers, because none of them has 62,000 as an input. This is insight 2 of the team's twelve: three different reported figures (62,000 subscribers, 39,200 implied first orders, 990 revenue-consistent new customers) are reported here for completeness because a judge may ask about any of them, but only the last is actually used, and that choice is stated rather than hidden.

### 4.5 What the team would ask HarvestBox's finance head on day 1

Four questions would resolve the gap faster than any outside reconciliation can.

| Item to ask about | Why it matters |
|---|---|
| The operational definition of "active subscriber": any account not cancelled, or an account that ordered in the trailing 30, 60 or 90 days | Resolves section 4.4's three readings directly, from the company's own system rather than from outside arithmetic |
| The actual monthly cohort-level order count, by month since sign-up, for the last two full years | Would let the fitted curve in section 4.1 be checked, or corrected, against real data rather than four summary points |
| The share of the 14 lakh monthly website visits that are first-time visitors, as opposed to returning subscribers managing an existing box | Would resolve whether the 2.8% conversion figure in section 4.3 describes new-customer acquisition at all, or a mix of new and returning traffic |
| Whether a "box" is always exactly one week's worth of dinners, or whether the figure sometimes includes partial boxes, add-ons or one-off purchases outside the weekly cadence | Would confirm or correct the reading used in section 4.1 to reconcile 6.8 lifetime boxes with the stated retention curve |

### 4.6 The honest reading, restated where it touches this reconciliation

None of the three unreconciled figures changes the base case's own honest reading, restated here because this section is where a sceptical reader is most likely to ask whether the whole model rests on shaky ground. The base case crosses break-even in month 21 and then sits just above zero, a run-rate of positive ₹0.10 Cr a year `[M]`, built entirely from the revenue-consistent reading of new customers and the four-point survival curve, never from the 62,000 or 39,200 figures this section has set aside. Every single downside tested in the sensitivity table turns that run-rate negative `[T7]`, and the single largest block in the EBITDA bridge, the rebuilt Proposal A's referral, win-back and conversion steps adding ₹3.77 Cr a year `[T6]`, rests for two of its three parts on the assumptions with the thinnest outside evidence, not on any of the three figures reconciled in this section. The team would rather state plainly that three case figures do not tie than quietly pick whichever one makes the model look better.

Exhibit for the deck: an appendix slide only, carrying the three-figure reconciliation table and the finance-head questions, kept out of the four main slides because the recommendation does not depend on resolving it, but available the moment a judge asks why 62,000 and 6,731 do not match.
