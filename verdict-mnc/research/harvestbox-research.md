# HarvestBox: Growing Without Burning Out

**A 24-month path to profit on ₹15 Cr: fund Proposal A, rebuilt, then ready-to-eat behind a cash gate**

Team: Harsh Kawatra (Delhi Technological University, Team Leader) · Gursimran Kaur (Guru Gobind Singh Indraprastha University) · Dayita Arora (Ramjas College, University of Delhi)

Prepared for: Verdict 2.0, The Skill Development Cell, Motilal Nehru College, University of Delhi, October 2026

---

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

## Contents

- 0. Document control
- 1. Coverage matrix: every ask in the case mapped to a section
- 2. Board answer: fund Proposal A, rebuilt, and reach break-even in month 21 on the cash in hand
- 3. The case in numbers: 15 margin points were lost in two lines and none in overheads
- 4. Data reconciliation: three case figures do not tie, and the plan does not depend on them
- 5. Retention: 45% of sign-ups are gone by month 3 and CAC is not paid back until month 10
- 6. Unit economics: two customers hide in one average, and 3.0x is the break-even condition
- 7. Why customers leave: the product is rated 4.6, the contract is the problem
- 8. Margin and marketing: growth has been bought at a rising price
- 9. Market context: four substitutes for the same dinner are cheaper or faster
- 10. Competition: buyer power and substitutes decide this market, not rival meal kits
- 11. Global precedents: the companies that survived cut marketing and widened the offer in that order
- 12. Indian precedents: meal kits have been tried here before and the survivors sell fresh food differently
- 13. Proposal A as written: the right problem, with a design that loses money in year 1
- 14. Proposal B: ₹8,333 a store a month, beside a kit that costs a third less
- 15. Proposal C: the best market and the worst timing
- 16. Options compared: as written A scores lowest, rebuilt it scores highest
- 17. Proposal A, rebuilt: five features, each redesigned to protect order frequency
- 18. Operational improvements: six levers, each with its arithmetic and its owner
- 19. Financial case: the loss falls from ₹9.2 Cr to ₹0.8 Cr and break-even arrives in month 21
- 20. Scenarios and sensitivity: every single downside turns the run-rate negative, which is why there are gates
- 21. Risk register: twelve risks, each with a trigger and a response
- 22. The first 90 days: The rebuilt Proposal A live in five cities by week 12
- 23. Board KPIs: seven numbers with stop triggers
- 24. The 24-month roadmap: A now, ready-to-eat behind a gate, retail later
- 25. Assumptions register and model summary
- 26. Slide blueprint for the deck
- 27. Forty judge questions, answered
- 28. Seven-minute talk track for three speakers
- Appendix A: Bibliography
- Appendix B: Model tables
- Appendix C: Review-mining tables and codebook
- Appendix D: Glossary and abbreviations
- Appendix E: Validation plan, not yet run
- Appendix F: Data conflicts and method limits

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

## 5. Retention: 45% of sign-ups are gone by month 3 and CAC is not paid back until month 10

**Answer.** Of every 100 customers HarvestBox signs up, 45 are gone by month 3 `[C R2]`, and the money spent acquiring them is not recovered on average until month 10, by which point only 23% of the original cohort is still ordering `[T2]`. The rebuilt Proposal A narrows this fall but does not remove it: the floor asks nothing of a customer until the back end of a three-month window, so the first ninety days decide more of the twenty-four month outcome than any single feature in the rebuild. Outside benchmarks on meal-kit retention are thin: most of what desk research found could not be confirmed against a primary source, and the two readings this document treats as solid evidence describe a different country, category and decade from HarvestBox's own.

Customer acquisition cost (CAC) is what HarvestBox pays, on average, to sign up one new customer; the case states it at ₹7,000 `[C U3]`. Lifetime value (LTV) is the gross profit a customer returns over the time they stay subscribed; the case puts it at about ₹10,900 `[C U5]`. Both terms recur through this section and the next.

### 5.1 The case's four survival points fit a single decay curve

The case gives four points on HarvestBox's own retention curve: 100% of a cohort is active in month 1, 55% in month 3, 34% in month 6 and 19% in month 12 `[C R1]` `[C R2]` `[C R3]` `[C R4]`. Team assumption A01 treats a "box" as one month of dinners and fits a geometric decay through these four points, carrying a constant monthly retention rate of 0.9058 after month 12 `[A01]` `[T2]`. The fitted curve reproduces the case's own stated lifetime of 6.8 boxes `[C U4]` almost exactly, which is why this document treats the case's four points as internally consistent on this reading rather than as four disconnected numbers (see section 4 of this document for the full working).

The table below sets out the full monthly curve under this fit, for both the subscription as it stands today and for the modelled effect of the rebuilt Proposal A, which the model moves 3-month retention from 55% to 65% `[C PA3]` and recalculates every later month off that new starting point.

| Month | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Today, % active | 100.0 | 74.2 | 55.0 | 46.9 | 39.9 | 34.0 | 30.9 | 28.0 | 25.4 | 23.1 | 20.9 | 19.0 |
| With the rebuilt Proposal A, % active | 100.0 | 80.6 | 65.0 | 55.4 | 47.2 | 40.2 | 36.5 | 33.1 | 30.0 | 27.3 | 24.7 | 22.5 |

*CAC = customer acquisition cost. The two case-anchored months are month 3 (55% today, 65% with the rebuilt Proposal A `[C PA3]`) and month 6 (34% today `[C R3]`); every other month is the model's geometric fit `[T3]`, tagged `[T3]` throughout.*

This table shows that the rebuilt Proposal A does not flatten the curve, it shifts the whole thing upward: the shape of the decay (fast in months 1 to 3, slower afterward) is unchanged, because the fit applies the same monthly retention rate on top of a higher month-3 starting point. By month 12 the gap between the two lines (22.5% against 19.0%) is 3.5 points, smaller in absolute terms than the 10-point gap the case states for month 3, because both curves are decaying toward the same long-run monthly rate `[A01]`.

### 5.2 Cumulative gross profit against CAC: the month the cohort pays for itself

A customer's monthly survival percentage, divided by 100, is also the number of boxes an average surviving cohort orders that month (this is how the model's "sum of months 1 to 12" figure of 4.97 boxes `[T2]` is built: it is the sum of the twelve survival fractions in the "Today" row above, divided by 100). Multiplying cumulative boxes by gross profit per box of ₹1,600 `[C U2]` and comparing the running total against the ₹7,000 CAC `[C U3]` gives the month-by-month payback picture the case's own "payback" and "cohort remaining" figures summarise in one line each `[T2]`.

| Month | Cumulative boxes | Cumulative gross profit, ₹ | CAC, ₹ | Gap against CAC, ₹ |
|---|---|---|---|---|
| 1 | 1.00 | 1,600 | 7,000 | −5,400 |
| 3 | 2.29 | 3,667 | 7,000 | −3,333 |
| 6 | 3.50 | 5,600 | 7,000 | −1,400 |
| 9 | 4.34 | 6,949 | 7,000 | −51 |
| 10 | 4.57 | 7,318 | 7,000 | +318 |
| 12 | 4.97 | 7,957 | 7,000 | +957 |

*CAC = customer acquisition cost. Cumulative boxes are the running sum of the "Today" survival fractions in the table above, divided by 100; gross profit is cumulative boxes multiplied by ₹1,600 a box `[C U2]`; the gap column is cumulative gross profit less the ₹7,000 CAC `[C U3]`. Figures are this document's own arithmetic on model and case inputs, tagged `[M]`.*

The crossing point sits between month 9 (the cohort is still ₹51 short of covering its own acquisition cost) and month 10 (the cohort is ₹318 ahead), which is exactly the payback month the model reports `[T2]`. At that crossing point, 23.1% of the original cohort is still ordering `[T2]`. Put plainly: HarvestBox recovers what it spent to acquire a customer only after losing more than three-quarters of that customer's original cohort. Every customer still ordering past month 10 is now pure margin against that acquisition spend, which is also why the 55% who are still active at month 3 `[C R2]` and go on to become the document's "stayers" in section 6 carry most of the business's profitable weight.

### 5.3 Comparison with Lane C benchmarks, with the caveat the raw research itself attaches

The research lane built to benchmark retention, CAC and referral economics (Lane C) found that most of the specific percentages reported in press and vendor coverage of meal-kit retention could not be confirmed against a primary document in this research round; they are recorded as UNVERIFIABLE in the raw file and are not carried into this document as sourced figures. Two readings are the exception, and the rest is reported here only as context, clearly marked as unconfirmed.

| Reading | Figure | Status | What it describes |
|---|---|---|---|
| Bloomberg Second Measure, Blue Apron, six months after first purchase, May 2016 snapshot | 28% still subscribed | VERIFIED, direct page read `[S30]` | A single US meal-kit company, one provider's card-transaction panel, a snapshot a decade before this case |
| A 1010data analysis reported in October 2016 press coverage, HelloFresh, Blue Apron and Plated combined | About 10% still subscribed at six months | UNVERIFIABLE in this research: the underlying 1010data report could not be opened directly, only press summaries of it, and the three named companies' spokespeople disputed the figure without publishing a rebuttal number | Three US meal-kit companies, a different data provider and panel from the figure above, same approximate period |
| McKinsey, "Thinking Inside the Subscription Box", a November 2017 US consumer survey | 38% cancel within 3 months, over 62% within 6 months, across all subscription-box categories | UNVERIFIABLE in this research: the primary McKinsey page could not be opened directly in this session, only search-engine summaries, which agree with each other but are not a document read | All US subscription boxes (curation and replenishment), not meal kits specifically |
| Eightx category-benchmark estimate, citing Blue Apron's own SEC filings for customer counts | Monthly meal-kit churn roughly 8% to 15% | UNVERIFIABLE in this research: a vendor blog's own estimate, no named primary panel for the range itself | A blog's category estimate, not a company-disclosed retention curve |
| IJRASET, "Subscription-Based Grocery Kit", a 2025 academic study of at least 150 respondents across major Indian metro cities | Price sensitivity 21%, ingredient quality 21.6% as adoption drivers; no churn or retention figure reported | VERIFIED (methodology and driver percentages); the paper itself states retention and churn data is outside its scope `[S32]` | Indian metro respondents, adoption drivers only, not a retention curve |

*CAC = customer acquisition cost. "Status" repeats the verification status given in the raw research file for each row, never upgraded or softened here.*

Read against this table, HarvestBox's own case-stated 34% retention at six months `[C R3]` sits closer to the VERIFIED Blue Apron figure of 28% `[S30]` than to the UNVERIFIABLE 10% figure sometimes quoted in press coverage of the US meal-kit category. This is the three-way conflict the research instructions for this lane flagged by name: HarvestBox's 34%, a 1010data figure near 10% that this research could not verify, and a verified Bloomberg Second Measure figure of 28% for Blue Apron alone. None of the three describes the same company, year or market, and this document does not pick a winner among them. What can be said without overreaching is that HarvestBox's stated six-month retention is not an outlier against the one VERIFIED external figure this research located, even though it is well above the unverified press figure some secondary sources repeat. The honest reading is that meal-kit retention benchmarks vary enormously by provider, year and category definition, and a team that wanted a tighter external anchor would need a primary dataset this research round did not find.

### 5.4 Where in the first 90 days customers fall out, and what the case lets us say about why

The case gives five reasons customers leave, as shares of total exits: too rigid or difficult to skip 34% `[C W1]`, too expensive 27% `[C W2]`, menu becomes repetitive 18% `[C W3]`, food waste or portion issues 11% `[C W4]` and delivery problems 10% `[C W5]`. The case does not break these shares down by month, so this document cannot state which specific reason drives the month 1 to 3 fall as opposed to the month 3 to 6 fall; that would be inventing precision the source does not support. What the case does support is the shape: 45 points of the eventual 81-point twelve-month attrition happen inside the first 90 days `[C R1]` `[C R2]`, before a customer has had a chance to use the menu for more than a handful of weeks, which points toward decision-stage frictions (the two largest reasons, rigidity and price, together 61% of stated exits `[C W1]` `[C W2]`) mattering earlier than experience-stage frictions such as menu fatigue, which would plausibly need several boxes to be felt. This is an inference from the shares and the curve together, not a case fact on its own, and it is treated here as an assumption about timing rather than a stated finding.

The one piece of outside, India-specific evidence this research located on why customers choose or reject a subscription food model, the IJRASET survey of Indian metro respondents `[S32]`, found price sensitivity (21%) and ingredient quality (21.6%) as the two largest named adoption drivers, with meal variety and customisation (13.8%) and ease of use (10.8%) behind them. This lines up directionally with the case's own ranking of price as a major stated reason to leave (27%, second only to rigidity) `[C W2]`, though the IJRASET paper is about why Indian respondents adopt a service, not why HarvestBox customers specifically leave one, and the two surveys are not measuring the same population or the same decision.

| Reason | Share of stated exits | When it most plausibly bites, on the shape of the curve alone |
|---|---|---|
| Too rigid, difficult to skip | 34% `[C W1]` | Likely early: a customer locked into a box they did not want to order that week is a month 1 to 3 experience |
| Too expensive | 27% `[C W2]` | Likely early: price is evaluated against the first few boxes, before habit forms |
| Menu becomes repetitive | 18% `[C W3]` | Likely later: repetition needs exposure to several boxes before it is felt |
| Food waste or portion issues | 11% `[C W4]` | Could be either: a mismatch is felt on the first box, but accumulates with more boxes |
| Delivery problems | 10% `[C W5]` | Could be either: a single bad delivery can end a relationship at any point |

This table is this document's own ordering of the case's stated reasons against the survival curve's shape, not a case-stated timing breakdown, and the word "assumption" applies to every row in the right-hand column.

### 5.5 How much a change in retention alone would move the outcome

The model tests what a change in 3-month retention alone, holding every other input at its base-case value, does to the 24-month run-rate and to cash in hand at month 24. This is the cleanest answer available to the question a judge is likely to ask first: how much of this plan depends on the rebuilt Proposal A actually lifting 3-month retention from 55% to 65%, as the case's own stated expectation for Proposal A puts it `[C PA3]`.

| Input tested, held alone | Run-rate EBITDA, low end | Run-rate EBITDA, high end | Cash at month 24, low end | Cash at month 24, high end |
|---|---|---|---|---|
| 3-month retention, 60% to 70% | −₹0.83 Cr | +₹1.03 Cr | ₹1.90 Cr | ₹3.93 Cr |
| Skip rate, 12% to 0% | −₹1.14 Cr | +₹0.99 Cr | ₹1.05 Cr | ₹4.25 Cr |

*Figures are one-input-at-a-time sensitivity results, every other input held at its base-case value `[T7]`.*

Two things follow from this table. First, retention and the skip rate pull in opposite directions on the same mechanism, because both change how many boxes a cohort orders before it leaves, and the model tests them as separate inputs precisely because the rebuilt Proposal A can raise one while customers choose to raise the other at the same time, the exact risk the case names for Proposal A `[C PA4]`. Second, neither input alone swings the run-rate by more than about ₹2 Cr across its tested range, which is a smaller swing than the ₹3.77 Cr the bridge in section 8 attributes to referral, win-back and conversion gains together `[T6]`. Retention is the feature the case names first and the one this plan treats as the load-bearing fix for the largest stated reason to leave, but on the model's own sensitivity test it is not, by itself, the biggest single number in the plan. That distinction matters for how a presenting team should answer a question that assumes retention is the whole story.

Exhibit for the deck: the survival line with a payback marker at month 10, drawn against the ₹7,000 CAC, on the diagnosis and evaluation slide.

## 6. Unit economics: two customers hide in one average, and 3.0x is the break-even condition

**Answer.** HarvestBox's headline 1.55x LTV to CAC `[C U6]` is an average of two very different customers: the 45% who leave by month 3 cost the business about ₹2.5 Cr a year `[T2]`, while the 55% who stay return 2.56 times their acquisition cost on their own `[T2]`. The 3.0x benchmark the case treats as a "healthy" target `[C U7]` is not an arbitrary round number: given HarvestBox's own gross profit per box, it is close to the exact point at which acquisition spending stops being a net drag on cash, and reaching it from where the business sits today needs more than one lever moved at once, because no single lever (cutting CAC alone, or extending lifetime alone) gets there by itself without an implausible move.

Customer acquisition cost (CAC) is the ₹7,000 the case states HarvestBox pays, on average, to sign up one customer `[C U3]`. Lifetime value (LTV) is the roughly ₹10,900 of gross profit the case says an average customer returns over their life `[C U5]`. Gross profit (GP) is revenue less the direct cost of the box; the case puts it at ₹1,600 a box `[C U2]`.

### 6.1 Leavers and stayers: two customers inside one average

Splitting the cohort at the month-3 case point (55% still active `[C R2]`, 45% gone) and carrying each group forward on the fitted survival curve from section 5 gives two very different pictures of the same acquisition spend.

| Group | Share of a cohort | Lifetime boxes | Lifetime gross profit | CAC | LTV to CAC | Loss or gain per head against CAC |
|---|---|---|---|---|---|---|
| Leavers (gone by month 3) | 45% `[C R2]` | 1.4 `[T2]` | ₹2,281 `[T2]` | ₹7,000 `[C U3]` | 0.33x | −₹4,719 `[T2]` |
| Stayers (past month 3) | 55% `[C R2]` | 11.2 `[T2]` | ₹17,915 `[T2]` | ₹7,000 `[C U3]` | 2.56x `[T2]` | +₹10,915 |

*CAC = customer acquisition cost; LTV = lifetime value, here shown as lifetime gross profit over CAC. The gain figure for stayers is this document's own arithmetic, ₹17,915 less ₹7,000, tagged `[M]`.*

HarvestBox signs up about 11,878 new customers a year at steady state `[T2]`. Applying the 45% leaver share gives 5,345 leavers a year (11,878 × 0.45 = 5,345.1 `[M]`), and multiplying that by the ₹4,719 loss per leaver gives an annual drag of about ₹2.5 Cr (5,345 × ₹4,719 ≈ ₹25.2 million, or ₹2.52 Cr `[T2]`), more than a quarter of the ₹9.2 Cr EBITDA loss the case reports for 2025 `[C K6]`. The business is not uniformly weak. It has a good customer and a bad one, and today it pays the same ₹7,000 to acquire either.

### 6.2 Why 3.0x is a break-even condition, not a vanity target

The case treats 3.0x LTV to CAC as the "healthy benchmark" `[C U7]` without explaining where the number comes from. Working from HarvestBox's own figures shows it is close to the point where acquisition spending breaks even on its own terms. There are two ways to reach 3.0x holding only one input fixed, and neither is reachable by itself.

Holding today's lifetime economics fixed and solving for the CAC that would deliver 3.0x: ₹10,900 lifetime gross profit `[C U5]` divided by 3 equals a target CAC of ₹3,633 `[T2]`. That is a 48% cut from today's ₹7,000 `[C U3]` (calculated as (7,000 − 3,633) ÷ 7,000 = 48.1% `[M]`). Team assumption A16 models pruning the costliest decile of paid acquisition, which moves blended CAC to about 0.89 of today's figure, or roughly ₹6,230 `[A16]` (7,000 × 0.89 = 6,230 `[M]`), nowhere close to ₹3,633 on its own.

Holding today's CAC fixed and solving for the lifetime boxes that would deliver 3.0x: 3 × ₹7,000 = ₹21,000 of lifetime gross profit needed; at ₹1,600 gross profit a box `[C U2]`, that is 13.1 boxes `[T2]` (₹21,000 ÷ ₹1,600 = 13.125 `[M]`), against today's fitted lifetime of 6.8 boxes `[C U4]`, nearly double. The rebuilt Proposal A is modelled to extend lifetime active months to 7.78 `[T2]`, an improvement, but still well short of the 13.1 boxes CAC alone would need to cover on today's acquisition price.

| Lever held fixed | What the other lever would need to reach | Against today | Gap |
|---|---|---|---|
| Lifetime economics (₹10,900 LTV) | CAC of ₹3,633 `[T2]` | ₹7,000 `[C U3]` | 48% cut needed, pruning alone reaches about 11% |
| Acquisition cost (₹7,000 CAC) | Lifetime boxes of 13.1 `[T2]` | 6.8 boxes `[C U4]` | Nearly double, the rebuilt Proposal A alone reaches 7.78 months `[T2]` |

This is why the model's own path to 3.0x moves five levers together rather than one alone, shown as a ladder: today's LTV to CAC of 1.55x `[C U6]` rises to 1.67x from the rebuilt Proposal A's retention gain net of the skip rate, to 1.83x once the gross-margin levers land, to 2.70x once the acquisition-cost pruning and non-working marketing cuts land, and the modelled base case ends month 24 at 2.70x against a 3.0x benchmark `[T12]`, close but, by the model's own account, short.

| Step | LTV to CAC |
|---|---|
| Today | 1.55 |
| After the rebuilt Proposal A retention, net of skips | 1.67 |
| After gross margin levers | 1.83 |
| After CAC pruning | 2.70 |
| Benchmark | 3.0 |

*LTV = lifetime value; CAC = customer acquisition cost. Figures from the model's ladder table `[T12]`.*

### 6.3 Contribution per cohort: when a month's sign-ups turn from cost to profit

Taking one month's cohort of 990 new customers `[T2]` and carrying it on the fitted survival curve from section 5 shows the same payback story at the scale the Board actually funds it: one month of acquisition spending at a time.

| Month | Cumulative boxes for the cohort | Cumulative gross profit, ₹ lakh | Cumulative CAC outlay, ₹ lakh | Net contribution, ₹ lakh |
|---|---|---|---|---|
| 1 | 990 | 15.8 | 69.3 | −53.5 |
| 3 | 2,269 | 36.3 | 69.3 | −33.0 |
| 6 | 3,465 | 55.4 | 69.3 | −13.9 |
| 9 | 4,300 | 68.8 | 69.3 | −0.5 |
| 10 | 4,528 | 72.4 | 69.3 | +3.1 |
| 12 | 4,923 | 78.8 | 69.3 | +9.5 |

*CAC = customer acquisition cost. Cumulative boxes are 990 multiplied by the cumulative survival fraction from section 5.2; gross profit is cumulative boxes times ₹1,600 `[C U2]`; CAC outlay is 990 × ₹7,000 = ₹69.3 lakh, paid once at acquisition `[C U3]`. Figures are this document's own arithmetic, tagged `[M]`, and reconcile with the per-customer payback month of month 10 in section 5.2 and table T2.*

A single month's cohort does not turn net-positive until between month 9 and month 10, the same crossing point found in section 5.2 at the per-customer level, because the arithmetic is the same relationship scaled up. What this table adds is the size of the hole in the meantime: one month's worth of new sign-ups costs the business more than ₹50 lakh of unrecovered cash in its first month alone, and every month HarvestBox keeps acquiring at this pace, it is opening a new hole of that size while older cohorts are still climbing out of theirs. This is the mechanical reason a business can be growing revenue and burning cash at the same time: the newest cohorts are always the least paid-back ones.

A further reading of the grid in section 6.6 is worth stating in this section's own terms, because it is where the unit-economics argument and the retention argument meet. The grid's columns (skip rate) and rows (3-month retention) are both, at root, statements about how many boxes a cohort orders before it stops, which is the same quantity this section has used throughout to separate leavers from stayers. A cohort that retains at 65% but skips at 10% books fewer effective boxes over its life than a cohort that retains at 60% but skips at 0%, even though the first cohort looks like the better outcome on the single headline metric the case names (3-month retention `[C PA3]`). This is a reason to treat "retention improved" as a necessary but not sufficient description of what the rebuilt Proposal A needs to achieve: the floor of two boxes in three months exists precisely to stop a retained-but-skipping customer from behaving, in unit-economics terms, like a leaver who simply has not formally cancelled yet.

### 6.4 What would move this, and the honest reading that belongs here

The modelled bridge to the 24-month run-rate figure gives the rebuilt Proposal A's three acquisition-side steps, referral on the third box, win-back of lapsed customers and website conversion, taken together as the single largest block, worth ₹3.77 Cr a year `[T6]`, built on assumption A10 (20% of sign-ups from referral by month 12), assumption A12 and A13 (win-back volume and cost) and assumption A14 (website conversion rising from 2.8% to 3.3%). Two of the three rest on weaker outside evidence than the gross-margin or overhead levers: the one VERIFIED academic reference this research found on referral economics, a German retail-banking study, found referred customers worth about 16% more than non-referred customers and about 18% to 22% less likely to defect over 21 to 33 months `[S33]`, but that is one bank, one country, one product, a decade before this case, and it says nothing about a food subscription specifically. The honest reading carried from section 4 of this plan applies directly here: The base case crosses break-even in month 21 and then sits at a run-rate of only ₹0.10 Cr a year `[T4]`, a break-even plan rather than a profit plan, and the single biggest lever behind that crossing is also the one with the thinnest outside corroboration. A judge who presses on one number in this plan should press on this one.

### 6.5 How far one lever alone can move the run-rate

The model's sensitivity table tests eight inputs one at a time, each held at its base-case value except the one being tested, and reports the effect on the month-24 run-rate EBITDA and on cash in hand at month 24. This is the cleanest way to see which of the many moving parts in the rebuilt Proposal A and the operational improvements actually carries weight, rather than relying on intuition about which lever "sounds" important.

| Input and range tested | Run-rate EBITDA, low | Run-rate EBITDA, high | Cash at month 24, low | Cash at month 24, high |
|---|---|---|---|---|
| 3-month retention, 60% to 70% | −0.83 | +1.03 | 1.90 | 3.93 |
| Skip rate, 12% to 0% | −1.14 | +0.99 | 1.05 | 4.25 |
| Referral share, 10% to 30% | −1.12 | +1.65 | 1.83 | 4.27 |
| Website conversion, 3.0% to 3.6% | −0.50 | +0.60 | 2.04 | 3.65 |
| Gross margin levers, +2.5 to +5.0 points | −0.63 | +0.59 | 2.00 | 3.53 |
| Overhead cut, 6% to 15% | −0.52 | +0.41 | 1.85 | 3.45 |
| Non-working marketing cut, 25% to 50% | −0.54 | +0.53 | 1.79 | 3.67 |
| Ready-to-eat sales, 50% to 120% of plan | −0.80 | +0.46 | 2.28 | 3.17 |

*Figures in ₹ Cr unless stated otherwise. Each row holds every other input at its base-case value `[T7]`.*

Ranked by the width of the swing in run-rate EBITDA, referral share and the skip rate carry the most weight (a range of ₹2.77 Cr and ₹2.13 Cr respectively), followed by 3-month retention itself (₹1.86 Cr). Website conversion, the gross-margin levers, overheads and the non-working marketing cut each swing the run-rate by a little over ₹1 Cr across their tested range, roughly half the weight of the top three. This ranking is a caution against treating every lever in the operational improvements as equally load-bearing: the two inputs that move the outcome most, referral share and the skip rate, are also, respectively, one of the two assumptions this document's section 6.4 already flags as the weakest-evidenced in the plan, and a customer behaviour the case explicitly names as a risk of the rebuilt Proposal A design itself `[C PA4]`.

### 6.6 The 24-month grid: retention and the skip rate together

Because retention and the skip rate interact (a cohort that stays longer but skips more often can still order fewer boxes than a cohort that leaves sooner but never skips), the model also runs a two-way grid across both inputs at once, holding every other input at its base-case value, and reports cumulative 24-month EBITDA for each combination.

| 3-month retention | Skip rate 0% | Skip rate 5% | Skip rate 10% | Skip rate 15% |
|---|---|---|---|---|
| 55% | −7.1 | −8.3 | −9.6 | −10.8 |
| 60% | −6.0 | −7.3 | −8.6 | −9.9 |
| 65% | −5.0 | −6.3 | −7.6 | −8.9 |
| 70% | −3.9 | −5.3 | −6.7 | −8.0 |

*Cumulative 24-month EBITDA, ₹ Cr `[T8]`. The base case sits at 65% retention, 5% skip rate, a cumulative figure of −6.3 inside this grid, which is the model's EBITDA Y1 plus EBITDA Y2 for the base case path (−5.53 plus −0.75, giving −6.28, which rounds to the grid's −6.3) `[M]` `[T4]`.*

Reading along the 65% retention row (the case's own stated expectation for the rebuilt Proposal A `[C PA3]`) shows a difference of 3.9 points of 24-month EBITDA between a 0% and a 15% skip rate, which is a larger swing than reading down the 5% skip rate column shows between 55% and 70% retention (3.0 points). On this grid, how disciplined the skip feature's floor turns out to be in practice matters at least as much as whether retention improves by the full ten points the case hopes for. This is the arithmetic behind why the rebuilt Proposal A is built with a floor of two boxes in any three months rather than an unlimited free skip: the case's own stated risk for Proposal A, that customers use flexibility to order less often `[C PA4]`, is not a minor caveat on this grid, it is close to the single largest lever in the whole table.

### 6.7 Why this is a quantitative reason to prefer the recommended plan over the other two proposals as written

The leaver and stayer split in section 6.1, and the ladder in section 6.2, are the arithmetic behind one of the three reasons each side this document's recommendation rests on: none of the three proposals as written changes customer acquisition cost, which is where, on this section's own numbers, most of the value is being lost or won. Grocery retail `[C PB1]` and ready-to-eat as written `[C PC1]` both add revenue without touching the 45% of a cohort that leaves by month 3 `[C R2]` or the ₹7,000 cost of acquiring them `[C U3]`; they grow the top of the funnel while the leak in the middle stays exactly the size this section has measured it at, about ₹2.5 Cr a year `[T2]`. Only a rebuilt Proposal A reaches into the mechanism this section has spent its length describing, the gap between a leaver worth 0.33x its acquisition cost and a stayer worth 2.56x `[T2]`, because only a change to the subscription's own terms can move which of those two a given customer becomes. This is why the model's scorecard scores Proposal A as written lowest on profit among the three options (a score of 2 out of 5) `[T9]` despite addressing the single largest stated reason customers leave `[C W1]`: as written, the proposal changes the terms but not the price or the floor, so it lifts the number of customers who become stayers without lifting what a stayer is worth, a half-measure this section's own ladder shows is not enough on its own to reach 3.0x.

Exhibit for the deck: the two-customers table (leavers against stayers) beside the LTV to CAC ladder, on the diagnosis and evaluation slide.

## 7. Why customers leave: the product is rated 4.6, the contract is the problem

**Answer.** Customers who stay past six months rate HarvestBox 4.6 out of 5 `[C W6]`: whatever is wrong with this business, it is not the box itself. The five reasons the case gives for leaving sum to 100% of stated exits `[C W1]` to `[C W5]`, and only one of the three Board proposals touches most of them: The rebuilt Proposal A answers 63% of stated exits (rigidity 34%, food waste or portions 11%, menu variety 18%) `[C W1]` `[C W3]` `[C W4]`, grocery retail answers none of them `[C PB1]`, and ready-to-eat answers only part of the 18% tied to menu variety `[C PC1]`. A keyword reading of 8,052 Google Play reviews of six real meal-kit and ready-to-eat services `[V1]` broadly agrees with the case's ranking of rigidity as the single largest complaint, but it does not support the case's weight on menu repetition, and it surfaces two frictions the case brief never mentions: billing surprises and a cancellation flow with no self-serve option. This is evidence about other companies' customers; it is association, not proof of what HarvestBox's own leavers experienced, and every use of it below names the apps and says so.

### 7.1 What each proposal fixes, and what it leaves on the table

The case gives exact shares for why customers leave: too rigid or difficult to skip, 34% `[C W1]`; too expensive, 27% `[C W2]`; menu becomes repetitive, 18% `[C W3]`; food waste or portion issues, 11% `[C W4]`; delivery problems, 10% `[C W5]`. Mapping each of the three Board proposals against these five reasons shows how unevenly they are matched to the stated problem.

| Reason | Share | Proposal A, as rebuilt | Proposal B, grocery retail | Proposal C, ready-to-eat |
|---|---|---|---|---|
| Too rigid, difficult to skip | 34% `[C W1]` | Answered: free skip or pause with a floor of two boxes in three months `[C PA1]` | Not answered: a retail channel does not touch subscription terms `[C PB1]` | Not answered: a parallel product line does not change the subscription contract `[C PC1]` |
| Too expensive | 27% `[C W2]` | Partly eased: a ₹3,600 entry plan beside the ₹5,200 core box `[A09]`, not counted in the 63% headline since the case gives no evidence this removes the complaint rather than softening it | Not answered: grocery retail sells the existing box, not a cheaper one `[C PB1]` | Not answered: ready-to-eat is a different, typically pricier, product `[C PC2]` |
| Menu becomes repetitive | 18% `[C W3]` | Answered: swap recipes and a larger menu of about 40 recipes `[C PA1]` | Not answered | Partly answered: a ready-to-eat range offers different variety, not more variety within the existing kit `[C PC1]` |
| Food waste or portion issues | 11% `[C W4]` | Answered: 2 or 4 meal portion sizing options `[C PA1]` | Not answered | Not answered |
| Delivery problems | 10% `[C W5]` | Not answered: none of the rebuilt Proposal A's five features touches logistics `[C PA1]` | Not answered | Not answered |

*The "answered" column total for the rebuilt Proposal A (34 + 11 + 18 = 63 `[M]`) is the 63% figure used throughout this document for what the rebuilt Proposal A addresses; the 27% tied to price and the 10% tied to delivery sit outside that figure because neither proposal removes the underlying friction, only softens or ignores it.*

Grocery retail's row is instructive precisely because it is empty: none of the five reasons customers give for leaving HarvestBox is touched by putting the existing box on a supermarket shelf. Ready-to-eat's row shows the same pattern from the other direction: its one point of contact with the case's stated reasons for leaving is partial and indirect, a different kind of variety rather than more variety within the subscription people are already frustrated with.

### 7.2 Review-mining method, and what the four tables show

Six Google Play listings were pulled for reviews dated 1 January 2024 or later, newest first, up to 4,000 a app: five meal-kit subscriptions, HelloFresh, EveryPlate, Home Chef, Dinnerly and Green Chef, and one ready-to-eat subscription, CookUnity. All six package identifiers loaded without error, for a pooled total of 8,052 reviews, of which 2,435 are 1 or 2 star and 5,152 are 4 or 5 star `[V1]`. Four apps cleared a 300-review floor (HelloFresh 4,000, EveryPlate 611, Home Chef 650, CookUnity 2,546); Dinnerly (77) and Green Chef (168) are kept in the pooled tables but carry little weight individually because their review volume on Play since 2024 is thin, not because anything failed to load `[V1]`. None of these reviewers is a HarvestBox customer: HarvestBox is fictional and has no reviews of its own.

| App | Type | Reviews pulled | Average rating | 1 and 2 star share, % |
|---|---|---|---|---|
| HelloFresh | Meal kit | 4,000 | 3.27 | 39.8 |
| EveryPlate | Meal kit | 611 | 3.02 | 45.7 |
| Home Chef | Meal kit | 650 | 3.81 | 26.0 |
| Dinnerly | Meal kit | 77 | 1.88 | 74.0 |
| Green Chef | Meal kit | 168 | 2.60 | 57.1 |
| CookUnity | Ready-to-eat | 2,546 | 4.40 | 9.5 |

*Table V1, sample by app `[V1]`.*

Each review was coded by regular expression against the case's five reasons (W1 to W5) plus two extra themes (app or billing fault, X1; wanting ready-made food, X2). Twenty reviews per theme were then sampled from the matching low-star pool and read individually to check precision, true matches divided by sample size.

| Theme | Precision | Flag |
|---|---|---|
| W1, rigid plan, hard to skip or cancel | 90% | |
| W2, too expensive | 70% | |
| W3, menu repetitive or narrow | 80%, after one codebook fix described below | |
| W4, food waste or portion issues | 70% | |
| W5, delivery problems | 65% | (indicative), under the 70% threshold |
| X1, app or billing fault | 95% | |
| X2, wants ready-made or less cooking | 85%, smaller sample (13), too few low-star matches available | |

*Precision figures from the review-mining precision check `[V1]`. Per the research plan, any theme under 70% precision is labelled "(indicative)" everywhere it is used; that applies to W5 only. W2 and W4 sit exactly at the 70% line and are not flagged by that rule, but a reader should treat every one of these seven numbers as a keyword-coded estimate, not an audited count.*

W3's first-pass precision was 50%, below the 60% threshold that permits a single codebook correction. The most common false match was the bare word "selection" catching any mention of an app's meal-selection screen, unrelated to menu repetition. Removing that one alternative from the regular expression and rerunning the full pull against the same 8,052 reviews raised W3's precision to 80% on a fresh sample. The fix pulled W3's measured share down, from 2.4% to 1.2% of low-star mentions, moving it further from, not closer to, the case's 18% figure, which is the one directional check this document can offer that the single permitted codebook change was not used to flatter the comparison.

| Theme | All apps, % of low-star reviews | HelloFresh | EveryPlate | Home Chef | Dinnerly | Green Chef | CookUnity |
|---|---|---|---|---|---|---|---|
| W1, rigid plan, hard to skip or cancel | 28.8 | 33.0 | 24.7 | 18.3 | 22.8 | 19.8 | 17.8 |
| W2, too expensive | 11.0 | 11.2 | 12.9 | 8.9 | 12.3 | 13.5 | 7.0 |
| W3, menu repetitive or narrow | 1.2 | 0.9 | 2.9 | 2.4 | 0.0 | 1.0 | 0.4 |
| W4, food waste or portion issues | 8.4 | 9.1 | 9.0 | 5.9 | 12.3 | 9.4 | 3.7 |
| W5, delivery problems (indicative) | 18.4 | 20.2 | 12.2 | 18.3 | 35.1 | 14.6 | 10.7 |
| X1, app or billing fault | 18.4 | 15.6 | 24.7 | 18.9 | 19.3 | 13.5 | 30.2 |
| X2, wants ready-made or less cooking | 0.5 | 0.4 | 1.1 | 1.8 | 0.0 | 0.0 | 0.4 |

*Table V2, share of 1 and 2 star reviews mentioning each theme `[V2]`.*

Rescaling the five case-matched themes to sum to 100, so they can be compared directly with the case's own five shares, gives the comparison this section is built around.

| Reason | Review mix, % | Case exit share, % | Gap, points |
|---|---|---|---|
| Too rigid, hard to skip or cancel | 42.5 | 34 | +8.5 |
| Too expensive | 16.2 | 27 | −10.8 |
| Menu repetitive or narrow | 1.8 | 18 | −16.2 |
| Food waste or portion issues | 12.4 | 11 | +1.4 |
| Delivery problems (indicative) | 27.1 | 10 | +17.1 |

*Table V3, mix of the five case reasons among low-star mentions, against the case `[V3]`.*

| Theme | Share of 4 and 5 star reviews, % |
|---|---|
| W1, rigid plan, hard to skip or cancel | 1.9 |
| W2, too expensive | 6.7 |
| W3, menu repetitive or narrow | 4.9 |
| W4, food waste or portion issues | 7.4 |
| W5, delivery problems (indicative) | 8.5 |
| X1, app or billing fault | 1.5 |
| X2, wants ready-made or less cooking | 0.7 |

*Table V4, the same seven themes in 4 and 5 star reviews `[V4]`.*

Read together, these four tables support the case's ranking of rigidity as the single largest named reason customers leave: it is the largest theme in the review mix, 28.8% of all low-star mentions `[V2]`, and the gap against the case's 34% share is the smallest directional gap of the five reasons in relative terms. They do not support the case's weight on menu repetition: real customers of these six apps barely raise it unprompted in a one or two-star review, 1.2% of low-star mentions and 1.8% of the rescaled mix `[V2]` `[V3]`, against the case's 18%. Delivery problems, which the case ranks lowest at 10% `[C W5]`, is the second-largest theme in the review data at 27.1% of the rescaled mix `[V3]`, though this theme carries the "(indicative)" flag for its 65% precision and should be read with that caveat attached every time. This is one study of six other companies' customers against one stated breakdown for a fictional company. The comparison is a sense check on relative ordering, not proof of HarvestBox's own causes, and that caveat travels with every number in this paragraph.

### 7.3 What the reviews add that the case brief does not mention

Two themes outside the case's own five reasons stand out in the review data and have no equivalent in the case brief at all. App or billing fault (X1, bugs, crashes, login failures, double charges, refund disputes) is mentioned in 18.4% of low-star reviews pooled across all six apps `[V2]`, almost as large a share as delivery problems and larger than either food waste or menu repetition. The case brief is silent on billing or app reliability as a reason customers leave; it is implicit, at most, inside the 34% "too rigid, difficult to skip" figure if a failed cancellation attempt is itself an app or billing fault, but the case does not say so. The second addition is a specific mechanism inside rigidity rather than a new theme: several of the verbatim quotes below describe not being able to cancel from inside the app at all, only by phone or live chat, which is a narrower and more concrete friction than "too rigid" as a label implies.

> "no option to cancel subscription in the app. I HATE these business practices and will not support any companies that use them."
> Play Store review of HelloFresh, 1 star, Aug 2026

> "It would've been nice if there was a way to cancel the subscription on my own instead of calling or using a live chat."
> Play Store review of HelloFresh, 1 star, Sep 2026

> "Deceptive pricing, hidden cancellation and other bad practices make this a one star app"
> Play Store review of HelloFresh, 1 star, May 2026

None of these reviewers is a HarvestBox customer, and this document does not claim HarvestBox's own cancellation flow has these specific faults; the case gives no detail on HarvestBox's app mechanics beyond stating that customers find the subscription rigid `[C PA4]`. What the quotes show is that, in at least one real, comparably-sized meal-kit company, "rigid" in practice often means "no self-serve way out", which is exactly the gap the rebuilt Proposal A's free, in-app skip-or-pause feature is designed to close `[C PA1]`.

### 7.4 A Kano reading of the five reasons

The Kano model classifies a feature by how its presence or absence changes satisfaction: a must-have causes strong dissatisfaction when absent but is barely noticed when present; a performance attribute raises or lowers satisfaction roughly in proportion to how much of it is delivered; a delighter is unnoticed when absent but creates outsized satisfaction when present. Applied to the five case reasons, three of the five sit in the must-have category.

| Case reason | Kano category | Why |
<br>
| Too rigid, difficult to skip | Must-have | Customers do not reward flexibility with extra loyalty; they punish its absence by leaving, which is exactly the 34% share `[C W1]` |
| Food waste or portion issues | Must-have | A box that does not match a household's needs is a basic-expectations failure, not a value-add opportunity |
| Delivery problems | Must-have | Reliable delivery is the baseline a subscription box is paid for; it cannot delight, only fail to disappoint |
| Too expensive | Performance | Price sensitivity is graded, not binary: a cheaper entry tier plausibly keeps some price-sensitive customers who would otherwise leave, without needing to be "free" |
| Menu becomes repetitive | Performance, trending toward delighter at scale | More recipes, built from a wider shared pantry, raise satisfaction roughly in proportion to variety on offer, and a well-executed menu can become a reason to stay, not just an absence of a reason to leave |

This reading explains why the rebuilt Proposal A is built the way it is: the three must-have reasons (rigidity, waste or portion mismatch, and delivery, though delivery is not targeted by any of the three Board proposals) are the ones where falling short causes active harm, so the free skip-or-pause and the 2 or 4 meal sizing options are built to remove dissatisfaction rather than to impress anyone. The two performance reasons, price and variety, are addressed by a price ladder and a larger shared-ingredient menu respectively, both designed to move a dial rather than clear a single threshold, which is consistent with the Kano model's own logic that performance attributes repay incremental investment rather than a single fix.

### 7.5 Limits of the review-mining evidence, stated plainly

Every figure in this section carries the limits the review-mining method itself names, and they are collected here rather than scattered through the tables above, so a reader can weigh them in one place before using any of the numbers on a slide.

| Limit | What it means for the numbers above |
|---|---|
| These are customers of six real services, mostly in the United States and United Kingdom, not HarvestBox customers | The case brief's five reasons and this review data describe two different populations; the comparison is a sense check on ordering, never proof of HarvestBox's own causes |
| Reviewers are self-selected | People who write a public Play Store review skew toward the very satisfied or the very angry; the quiet middle of the customer base, who may leave for ordinary reasons without ever writing a review, is underrepresented in both pools |
| Coding is by regular expression on free text, not by a human reading every review | The precision check in section 7.2 shows this works correctly most of the time for five of seven themes but not for W5, held at 65% and marked "(indicative)" throughout |
| The one permitted codebook fix addressed only W3's worst single source of false matches | W3's 80% precision still means one in five sampled matches is not truly about a repetitive or narrow menu, and no other theme's expression was touched |
| Dinnerly (77 reviews) and Green Chef (168 reviews) sit under the 300-review floor | Their app-level rows in the tables above are thin samples; the pooled totals across all six apps, not any single small app, carry the weight in this document |
| The review window is 1 January 2024 onward only | Recent reviews describe each app's current cancellation flow and pricing, which may differ from how these companies behaved in the years Lane B's company-level facts cover; the two lanes are not necessarily describing the same product generation |
| W2 and W4 sit exactly at the 70% precision threshold | They are not labelled "(indicative)" because the stated rule names only results strictly under 70%, but close to one in three sampled matches for several themes here is still a false keyword hit, a margin of error that travels with every number in tables V2 to V4 |

None of these limits changes the direction of the one finding this section leans on most, that rigidity is the largest theme in both the case and the review data. They do mean that the precise size of any gap, such as the 16.2-point gap on menu repetition or the 17.1-point gap on delivery, should be read as approximate, not as a measured difference with a tight error bar.

Exhibit for the deck: exit-reason bars keyed to which proposal answers each reason, on the diagnosis and evaluation slide.

## 8. Margin and marketing: growth has been bought at a rising price

**Answer.** Gross margin fell from 38% to 31% across the four years the case reports `[C P22]` `[C P25]`, while marketing rose from 22% to 30% of revenue over the same period `[C P22]` `[C P25]`; other operating cost actually fell from 28% to 23% of revenue over the same window `[T1]`. Pulling HarvestBox's own acquisition arithmetic through the case's figures implies ₹8.31 Cr of 2025 revenue was spent on paid acquisition and a further ₹4.29 Cr of marketing spend is not explained by acquisition volume at all `[T2]`; each rupee of new revenue has needed more marketing every year, rising from 31 paise in 2023 to 49 paise in 2025 `[T1]`. This is the single clearest finding in HarvestBox's own numbers: the company is not failing to control overheads, it is paying an escalating price to keep growing.

Earnings before interest, tax, depreciation and amortisation (EBITDA) is the case's own measure of operating profit before financing and non-cash charges; HarvestBox's 2025 EBITDA loss is ₹9.2 Cr `[C K6]`. Customer acquisition cost (CAC) is the ₹7,000 the case states HarvestBox pays, on average, to sign up a new customer `[C U3]`.

### 8.1 Decomposing the seven lost gross-margin points

Gross margin fell from 38% in 2022 to 31% in 2025 `[C P22]` `[C P25]`, seven points over four years. The case gives two facts that bear directly on where those points could be sitting, and this document treats everything beyond those two facts as a candidate, not a proven cause, using an issue-tree discipline: each candidate must be mutually exclusive of the others and the full set must be collectively exhaustive of what moves gross margin, with no candidate counted twice.

| Candidate cause | What the case supports | Status |
|---|---|---|
| Rising promotional or first-box discounting | The case does not state a discounting history; the operational improvements' own plan to cut "first-box discounting" `[A18]` implies the team believes some of today's margin loss is discount-driven, but the case gives no figure to confirm or size this | Assumption |
| Food waste at 6% of ingredient purchases | The case states this as a current snapshot figure, not a four-year trend `[C X2]`; whether 6% is higher or lower than in 2022 is not stated | Case fact (single year only, not a trend) |
| Fulfilment-centre utilisation at 68% | The case states this as a current snapshot figure, not a trend `[C X1]`; low utilisation plausibly raises the per-box cost of fixed fulfilment capacity, but the case does not show utilisation falling over time | Case fact (single year only, not a trend) |
| Input cost inflation on ingredients | The case states no input-cost history at all | Assumption |

This document uses the word assumption here because two of the four candidates (discounting and input-cost inflation) rest entirely on inference, and the other two (waste, utilisation) are case facts for one year only, not evidence of a worsening trend across the four years the margin actually fell. The honest position is that the case lets a reader name plausible candidates for the seven lost points without letting a reader apportion the seven points across them with any precision; this document does not attempt that apportionment as if it were known.

### 8.2 The marketing arithmetic: acquisition spend against spend that acquisition alone does not explain

HarvestBox signs up about 11,878 new customers a year at steady state `[T2]`. Multiplying that figure by the ₹7,000 CAC `[C U3]` gives the acquisition spend the business's own cost-per-customer figure implies: ₹8.31 Cr a year (11,878 × ₹7,000 ≈ ₹8.31 Cr `[T2]`). Total 2025 marketing spend was ₹12.60 Cr `[T1]`. Subtracting the acquisition-implied figure from total marketing spend leaves ₹4.29 Cr unexplained by new-customer volume alone (₹12.60 Cr − ₹8.31 Cr = ₹4.29 Cr `[T2]`), which this document and the model call non-working marketing: spend that does not show up as a traceable new sign-up at the stated CAC.

| Item | ₹ Cr |
|---|---|
| Total 2025 marketing spend | 12.60 `[T1]` |
| Acquisition spend implied by CAC × new customers | 8.31 `[T2]` |
| Marketing not explained by acquisition volume | 4.29 `[T2]` |

*CAC = customer acquisition cost. The unexplained figure is the model's own term "non-working marketing" and is the base for assumption A17's 40% cut `[A17]`, one of the levers in the operational improvements.*

This ₹4.29 Cr figure matters because it is the single largest lever in the operational improvements' marketing side: cutting 40% of it is worth ₹1.71 Cr a year in the bridge to the month-24 run-rate `[T6]`, more than any other single marketing-side lever, and it does not require a single customer to behave any differently, only the business to spend differently.

### 8.3 The marginal cost of growth has risen every year

The case's own four-year history lets this document compute how much new marketing spend each additional rupee of revenue has required, year on year, and the trend only moves in one direction.

| Year | Revenue, ₹ Cr | Gross margin | Marketing, % of revenue | Marketing added per ₹1 of new revenue |
|---|---|---|---|---|
| 2022 | 19 `[C P22]` | 38% `[C P22]` | 22% `[C P22]` | not computable, no prior year in the case |
| 2023 | 29 `[C P23]` | 36% `[C P23]` | 25% `[C P23]` | 0.31 `[T1]` |
| 2024 | 38 `[C P24]` | 33% `[C P24]` | 28% `[C P24]` | 0.38 `[T1]` |
| 2025 | 42 `[C P25]` | 31% `[C P25]` | 30% `[C P25]` | 0.49 `[T1]` |

*The marginal figure in the last column is each year's increase in marketing spend divided by that year's increase in revenue over the prior year `[T1]`; it is not computable for 2022 because the case gives no 2021 figure to compare against.*

Revenue grew 52.6% from 2022 to 2023 (19 to 29, a rise of 10 over 19 `[M]`), 31.0% from 2023 to 2024 (29 to 38, a rise of 9 over 29 `[M]`) and 10.5% from 2024 to 2025 (38 to 42, a rise of 4 over 38 `[M]`). Revenue growth has slowed in every year the case reports, and the marginal cost of buying that slower growth has risen in every year: in 2023, 31 paise of new marketing bought ₹1 of new revenue; by 2025, 49 paise did `[T1]`. This is the clearest single number in this document for why "grow faster" cannot be the answer on its own: the business is already paying a rising price for the growth it has, before any new initiative asks it to grow faster still.

For outside context on what a mature, profitable meal-kit or meal-adjacent operator's cost structure looks like at scale, two VERIFIED figures from Lane B are useful, with the caveat that neither company is Indian, neither is a direct HarvestBox comparator in scale, and neither figure is presented as a target HarvestBox could reach on this plan's timeline.

| Company | Metric | Figure | Status |
|---|---|---|---|
| HelloFresh SE, FY2025 preliminary results | Meal-kit category adjusted EBITDA margin | 13.5% | VERIFIED `[S20]` |
| Gousto, FY2025 results | Adjusted EBITDA margin, third consecutive profitable year | 13.2%, against 13.5% the year before | VERIFIED `[S27]` |

*EBITDA = earnings before interest, tax, depreciation and amortisation. Both figures describe a different company, country and currency from HarvestBox and are shown only as a scale of what "mature and profitable" looks like in this category, never as a HarvestBox figure.*

Both companies run adjusted EBITDA margins in the low teens at scale, a different order of outcome from HarvestBox's −22% EBITDA margin in 2025 `[C P25]`, and both reached that position only after years of the kind of marketing discipline the operational improvements are built to start. Neither figure is a target this plan claims HarvestBox will reach inside 24 months, and the model's own base case ends month 24 at a run-rate EBITDA of just ₹0.10 Cr a year `[T4]`, nowhere near either company's margin.

### 8.4 Where the biggest bridge step sits, and the honest reading that belongs here

The model's bridge from the 2025 EBITDA loss of ₹9.24 Cr to the month-24 run-rate decomposes into named steps `[T6]`; cutting non-working marketing by 40% is worth ₹1.71 Cr, pruning paid channels above lifetime value is worth ₹0.62 Cr, the gross-margin levers in section 8.1 are worth ₹1.53 Cr once executed, and the single largest block, the rebuilt Proposal A's three referral, win-back and conversion steps together, is worth ₹3.77 Cr `[T6]`. Two of those three steps rest on assumptions A10 and A14, which this document's section 6.4 already flags as the weakest-evidenced levers in the entire plan. The honest reading carried from section 4 of this plan applies again here: every one-at-a-time downside in the model's sensitivity table turns the month-24 run-rate negative `[T7]`, and the two levers this section has shown to carry the most financial weight, non-working marketing and the referral or conversion gains, are exactly the two the model's own sensitivity analysis treats as uncertain enough to test individually. A margin and marketing story this document can defend with case facts and model arithmetic is not the same as a guarantee that the rupee amounts land exactly as modelled; the gates described later in this document exist because of this gap between the arithmetic and the evidence behind its largest inputs. The same caution applies when a team is asked, in cross-questioning, why the plan does not simply cut marketing further and faster: section 8.3's own history shows marketing rising as a share of revenue every year even as growth slowed, the behaviour of a business substituting spend for the organic pull a genuinely sticky product would provide. Cutting the ₹4.29 Cr of non-working marketing `[T2]` corrects that substitution; it is not an instruction to spend nothing, because a subscription business with no new customers at all has no future cohorts left to retain. The arithmetic in this section is also why the operational improvements are described in this document as a precondition for the rebuilt Proposal A rather than a separate initiative competing for the same ₹15 Cr of cash `[C K4]`: cutting marketing and improving margin are what keep the business solvent while the rebuilt Proposal A's retention gains build, cohort by cohort, over the months this section's tables have shown are needed before any single month's acquisition spend pays for itself.

### 8.5 The full bridge, step by step, against the margin and marketing story told above

Every step of the model's bridge from the 2025 EBITDA loss to the month-24 run-rate can be read as either a marketing-side move or a margin-side move, which is the same two-line diagnosis this section opened with: the loss sits in gross margin and marketing, not in overheads.

| Step | ₹ Cr a year | Which line this section's diagnosis puts it on |
|---|---|---|
| 2025 EBITDA | −9.24 `[T6]` | Starting point |
| Headwinds: cost inflation, margin drift | −1.64 `[T6]` | Both lines move against the plan before any lever is pulled `[A03]` `[A04]` `[A05]` |
| Cut non-working marketing 40% | +1.71 `[T6]` | Marketing line, the ₹4.29 Cr figure in section 8.2 `[A17]` |
| Prune paid channels above lifetime value | +0.62 `[T6]` | Marketing line, acquisition spend `[A15]` `[A16]` |
| Overheads down 12% | +1.25 `[T6]` | Neither line in this section's diagnosis; overheads are a separate, smaller lever `[A19]` |
| Gross margin levers, plus 4.0 points | +1.53 `[T6]` | Margin line, the candidates in section 8.1 `[A18]` |
| The rebuilt Proposal A: retention net of skips | +0.31 `[T6]` | Neither line directly; a volume effect on the existing margin and marketing structure |
| The rebuilt Proposal A: referral on the third box | +2.21 `[T6]` | Marketing line, the largest single step, resting on A10 |
| The rebuilt Proposal A: win-back of lapsed customers | +0.50 `[T6]` | Marketing line, resting on A12 and A13 |
| The rebuilt Proposal A: website conversion | +1.07 `[T6]` | Marketing line, resting on A14, the step with no outside evidence at all |
| Year 2: staged ready-to-eat | +1.79 `[T6]` | Outside this section's diagnosis; a new revenue line, not a fix to the existing one |
| Month 24 run-rate | +0.10 `[T6]` | End point |

*Figures are the model's own bridge steps `[T6]`. The right-hand column is this document's own classification of each step against the margin and marketing decomposition in sections 8.1 to 8.3, tagged `[M]`.*

Summing only the steps this section's diagnosis calls marketing-side, cutting non-working marketing and the three rebuilt Proposal A acquisition steps (referral, win-back and conversion), gives ₹5.49 Cr of the roughly ₹9.34 Cr of improvement the bridge delivers before the ready-to-eat stage (1.71 + 2.21 + 0.50 + 1.07 = 5.49 `[M]`), fifty-nine per cent of the total (5.49 ÷ 9.34 ≈ 58.8% `[M]`). The gross-margin lever contributes a further ₹1.53 Cr, sixteen per cent of the same total (1.53 ÷ 9.34 ≈ 16.4% `[M]`). Put together, more than three-quarters of the bridge's improvement before ready-to-eat comes from the two lines this section has shown carried the loss in the first place, marketing and gross margin, which is the arithmetic case for why the operational improvements are built the way they are: they spend their effort where the four-year history in table T1 shows the damage actually happened, not on overheads, which were never the problem.

Exhibit for the deck: the EBITDA bridge waterfall from 2025 to the month-24 run-rate, on the financial and risk case slide.

## 9. Market context: four substitutes for the same dinner are cheaper or faster

**Answer.** A weeknight dinner can be solved five different ways in urban India today, and HarvestBox's kit is the slowest and most expensive of the five once the recipe card is read and the pan is on the stove. Cooking from scratch with a quick-commerce top-up, ordering in, buying a ten-minute ready-to-eat meal and buying a ₹3,500 private-label kit all sit on the same dinner map as HarvestBox's ₹5,200 kit, and three of the four are cheaper. The four outside market-size reports on this category disagree with each other by a factor of four to five on absolute size and by a factor of nearly four on growth rate, so this section states what each measures rather than averaging them into one number. The case's own 8% meal-kit and 15% ready-to-eat growth figures `[C M1]` `[C M2]` are the figures the rest of this document uses; everything below is context, not a replacement.

### 9.1 The job: getting a weeknight dinner on the table

Jobs to be done is the right lens here because HarvestBox does not compete only against other meal-kit companies, it competes against every way an urban Indian household solves the same recurring problem: a weeknight dinner has to appear, with acceptable effort, at an acceptable price, in an acceptable amount of time. The case's own customer research names the attributes people are optimising for: convenience, flexibility, variety, ready-to-eat options and value for money `[C M4]`. None of those attributes names a category. A household "hires" whichever solution clears the job at the lowest combined cost of money, time and effort on a given night, and it can switch solutions from one night to the next without switching allegiance to any one brand. This is the uncomfortable structural fact behind the case's retention numbers: HarvestBox is not just losing customers to rival meal-kit companies, who barely exist in India at scale (section 12), it is losing dinner occasions to other ways of doing the same job, some of which cost less than half as much.

Two readings of the same government survey describe why the job matters more for some households than others, and they disagree on the minute count even though they describe the same underlying pattern. The National Statistical Office's 2019 Time Use Survey is read by one secondary source as showing Indian women spending over four hours a day, 19.5% of their waking time, on unpaid caregiving and domestic work, against about 25 minutes a day for men `[S15]`. A second secondary source reading the same 2019 survey states that women's participation rate in unpaid domestic services is 81.2% a day against 26.1% for men, and that women average 299 minutes, close to five hours, a day on this work against 97 minutes for men `[S16]`. The two summaries agree in direction, women carry roughly ten times the domestic-work burden of men in the readings available, but disagree on the men's figure by nearly a factor of four (25 minutes against 97 minutes), most likely because one source is reporting a narrower cooking-and-food-preparation slice and the other the full unpaid-domestic-services aggregate, though neither fetched excerpt states this explicitly. Neither source isolates a cooking-only time figure, still less one split by dual-income household status, which is what the question actually needs. This is logged as a gap, not papered over: HarvestBox's own case does not state a time-pressure figure either, so the document does not build an argument for the subscription on a borrowed number it cannot verify at the right precision.

### 9.2 The dinner map: five ways to solve the same job

The table below lays out five solutions to the same weeknight-dinner job side by side, on the three dimensions a household actually weighs: price per meal, time from decision to plate, and effort required. HarvestBox's own box price and cadence are case facts; every other row either carries a case band or a verified outside figure, and two rows carry a stated gap where no verified India figure exists.

| Route | What it is | Price per meal or occasion | Time to plate | Effort | Evidence |
|---|---|---|---|---|---|
| Cook from scratch, topped up by quick commerce | Household buys ingredients from a dark-store app (Blinkit, Zepto, Swiggy Instamart) and cooks unassisted | No verified India per-meal grocery-only figure found | Groceries can arrive inside the same quick-commerce window that dark-store networks are built around; cooking itself still takes the household's own time | Full: shopping decision, recipe knowledge, prep, cooking, cleanup | Dark-store scale `[S07]` `[S08]` `[S09]`; no per-meal cost source, logged as a gap |
| Order in (food delivery) | A cooked meal from a restaurant, delivered | Average order value ₹660 (Zomato) and ₹499 (Swiggy), Q2 FY25 `[S12]` | Restaurant preparation plus delivery; no verified India-wide average minute figure found in this lane | Minimal: choose, pay, wait | `[S12]` |
| Ten-minute ready-to-eat food | A pre-made dish bought through a quick-commerce-adjacent app and delivered on a short promise | Within the case's ₹250 to ₹450 ready-to-eat meal band `[C M2]` | Branded around a roughly 10 to 15 minute delivery promise (Zepto Cafe's own framing; Blinkit Bistro's stated 15-minute promise) `[S10]` `[S11]` | Minimal: choose, pay, heat if needed | `[S10]` `[S11]` |
| Private-label meal kit | A supermarket-chain-branded kit, ingredients and recipe card, bought off a shelf | ₹3,500 a box `[C M3]` | Comparable prep time to any meal kit, 20 to 30 minutes of cooking, once bought | Moderate: shop or order the box, then cook | `[C M3]` |
| HarvestBox kit | Pre-portioned ingredients and a recipe card, delivered on a subscription | ₹5,200 a box `[C K2]`, which on the case's own cadence of 3 dinners a week `[C K8]` works out to roughly 12 dinners a month and ₹5,200 ÷ 12 = ₹433 a dinner, inside the case's own ₹350 to ₹650 meal-kit band `[C M1]` | Delivery on a schedule, then 20 to 30 minutes of cooking | Moderate: no shopping decision, but cooking is still required | `[C K2]` `[C K8]` `[C M1]` |

*AOV: average order value.*

The table shows what the arithmetic already established as insight 1 (PLAN section 3.3): HarvestBox's box price is not out of line with the meal-kit category's own stated price band once the monthly cadence is unpacked, ₹433 a dinner against a stated ₹350 to ₹650 `[C M1]`. What the table adds is that three of the four alternatives beat that price outright. The private-label kit at ₹3,500 a box is roughly 33% cheaper for what looks like a comparable format, worked as ₹5,200 − ₹3,500 = ₹1,700, and ₹1,700 ÷ ₹5,200 = 32.7% `[C M3]`. Ready-to-eat sits at ₹250 to ₹450 a meal `[C M2]`, below HarvestBox's ₹433 at the top of its own range and well below it at the bottom. Order-in, at ₹499 to ₹660 an occasion `[S12]`, is close to or above HarvestBox's per-dinner price but removes the effort entirely, which is itself a form of being cheaper on the dimension that matters most to a time-pressed household. Only cooking from scratch has no confirmed per-meal price in this research, logged as a gap rather than estimated, because no source in Lane A isolates an ingredients-only cost net of the time spent shopping and cooking.

### 9.3 Lane A: the India ready-to-eat and ready-meals market, four reports, four numbers

Four named research houses size the Indian ready-to-eat or ready-meals category, and the build-log correction for writers is explicit on this point: these four must be presented side by side with their differing scopes, never averaged or presented as one figure. The table below does that.

| Publisher | Market definition used | Size for a comparable recent year | Stated growth rate | Source |
|---|---|---|---|---|
| IMARC Group | Ready-to-eat meals, broad category (rice bowls, wraps, salads, burritos, gravies and curries, noodles and pastas, pizza, soups and stews) | $6.2 billion (2025), forecast $12.3 billion by 2034 | 7.61% a year, 2026 to 2034 | `[S02]` |
| Ken Research | Ready-to-eat food, narrower product scope ("converts processed ingredients into fully cooked products requiring no preparation beyond opening, thawing or reheating") | $1,280 million (2025), forecast $3,184 million by 2031 | 16.40% a year, 2026 to 2031; 12.45% a year historically, 2020 to 2025 | `[S03]` |
| Technavio | Ready-to-eat food, covering frozen food, ready-to-heat meals and ready-to-cook products, offline and online | About $2.17 billion (2025); frozen food segment alone $509.9 million (2024) | 28.8% a year, 2025 to 2030 | `[S04]` |
| GlobalData | Ready meals (prepared meals), a narrower ambient/chilled definition | ₹19,931.60 million in 2025, up 11.98% over 2024 | 14.29% a year, 2020 to 2025 | `[S05]` |

*RTE: ready-to-eat.*

These four reports do not describe the same market. IMARC's figure is roughly five times Ken Research's and more than three times Technavio's for a comparable year, and the stated growth rates range from 7.6% to 28.8%, a factor of nearly four. Each publisher uses its own product scope (ambient, chilled, dried or frozen "ready meals" against a broader ready-to-eat-plus-ready-to-cook basket against a narrower frozen-food slice), and none of the fetched pages states a methodology detailed enough to reconcile the gap `[S02]` `[S03]` `[S04]` `[S05]`. A judge who asks "so how big is the ready-to-eat market" does not have one honest answer from outside sources; the honest answer is that four credible-sounding publishers answer that question four different ways, and the case's own 15% growth figure `[C M2]` sits inside the lower half of that range rather than at either extreme.

Meal kits specifically are an even thinner category by outside measure. GlobalData's own "Meal Kits (Prepared Meals)" line, a separate product category from its ready-meals line in the table above, gives a 2025 Indian meal-kit market size of ₹266.55 million, about $3.2 million, growing 13.21% a year over 2020 to 2025 `[S06]`. A different data aggregator's page, not independently reproducible on a live fetch in this research round, claimed an Indian meal-kit e-commerce market of $238.0 million by 2024 `[S06]`, two orders of magnitude larger than GlobalData's own figure for an overlapping period. The two cannot describe the same market, and the larger figure could not be verified, so it is not used anywhere in this document. What both agree on, implicitly, is that meal kits are a narrow slice of the much larger ready-to-eat-and-adjacent basket in India, which matters for how the Board should read Proposal C against Proposal A (section 16): the market Proposal C enters is the one with four disagreeing but all much larger size estimates, and the market Proposal A's core product sits in is the one everyone agrees is small.

### 9.4 What the case's 8% and 15% growth figures mean against these reports

The case gives HarvestBox's own category two growth rates: meal kits at 8% a year and ready-to-eat at 15% a year `[C M1]` `[C M2]`. Reading these against the table in section 9.3, the case's ready-to-eat figure of 15% sits below IMARC's 7.61% to Technavio's 28.8% range in a way that places it roughly in the middle, closer to Ken Research's 16.40% than to either extreme, while the case's meal-kit figure of 8% is lower than GlobalData's own India meal-kit CAGR of 13.21% `[S06]`. Neither of the case's figures is contradicted by the outside evidence; both sit inside a range that outside reports, disagreeing with each other, nonetheless bracket. The honest statement for a judge is not that the case's figures are independently confirmed, no single outside report uses the case's own product definition closely enough to call this verification, but that they are not implausible against the range of credible outside estimates, which is the most that can be said given how much these reports disagree with each other.

The case fact that most changes how this document reads the market is M3: two major supermarket chains have already launched private-label meal kits at around ₹3,500 a box against HarvestBox's ₹5,200 `[C M3]`. No source in this research gives a meal-kit-specific private-label share figure for India; the private-label figures that do exist (section 10.3) describe grocery categories generally, not meal kits. That absence is itself informative: the private-label entrant named in the case is recent and specific enough that general-category research has not caught up to it, and the Board should not expect outside market research to validate or refute M3 on a timetable useful to this decision.

### 9.5 Quick commerce and ten-minute food: the fastest-growing adjacent category

The part of the dinner map moving fastest is not meal kits and it is not even the broader ready-to-eat category as conventionally defined; it is quick commerce's own push into ready-to-eat through ten-minute food formats. Dark-store scale has grown enough that, as of August 2026, Blinkit led with 969 dark stores across India's top ten cities, ahead of Zepto at 828, Flipkart Minutes at 627, Swiggy Instamart at 615 and BigBasket at 497, with dark stores now present across 477 Indian cities in total `[S07]`.

| Platform | Dark stores, top 10 cities | Note |
|---|---|---|
| Blinkit | 969 | Market leader by store count, August 2026 |
| Zepto | 828 | |
| Flipkart Minutes | 627 | Overtook Swiggy Instamart on store count |
| Swiggy Instamart | 615 | 1,102 stores across 128 cities by Q2 FY26 on a separate count, ahead of growth in later quarters |
| BigBasket | 497 | |

*Dark store: a delivery-only warehouse with no walk-in retail, used for quick commerce.*

Order value and scale on these platforms have grown quickly too. Blinkit's gross order value rose 122% year on year to ₹6,132 crore in the quarter ended September 2024, from ₹2,760 crore a year earlier, with average daily gross order value per store rising to ₹12.7 lakh from ₹5.9 lakh over the same period `[S08]`. Swiggy Instamart's gross order value rose 108% year on year and 24.2% quarter on quarter to ₹7,022 crore in the quarter reported as Q2 FY26, with average order value up 39.7% year on year to ₹697, while the share of stores running profitably rose to about 25% from about 10% two quarters earlier `[S09]`. Zomato's chief executive described the quick-commerce business as operating at "a near adjusted EBITDA break-even" in the Q2 FY25 shareholder letter `[S08]`, which, against HarvestBox's own −22% EBITDA margin in 2025 `[C P25]`, is a materially different cost position for a channel that did not exist at this scale a few years ago.

Inside quick commerce, the sharpest-edged substitute for HarvestBox is the new ten-minute cooked-food layer: Zepto Cafe and Blinkit Bistro. Zepto Cafe launched in late 2024 at about 30,000 orders a day with more than 100 new cafes opening a month `[S10]`; by May 2025 it had grown to about 1,000 locations delivering close to 100,000 orders a day, with a projected $100 million annualised gross merchandise value, before halting operations at 44 stores across seven North Indian cities (Delhi NCR, Agra, Meerut, Haridwar, Gorakhpur, Mohali, Amritsar and Ghaziabad) over supply-chain and staffing problems `[S18]`, with 15 of the relocated kitchen staff choosing to quit rather than move and resumption expected in the quarter from July to September 2025 `[S18]`. Blinkit Bistro, spotted around 12 December 2024 operating in a pilot in parts of Gurugram only, promises delivery in up to 15 minutes for meals, snacks, tea and coffee, and had more than 1,000 downloads and a 4.8-star rating from 24 reviews at the point it was first observed, listing more than 50 dishes `[S10]` `[S11]`. Swiggy's existing fast-delivery food layer, Bolt, already operates in more than 400 cities with more than 40,000 participating restaurants, the scale these newer ten-minute formats are measured against `[S10]`.

| Service | Launch window | Scale observed | Delivery promise |
|---|---|---|---|
| Zepto Cafe | Announced late 2024 | About 30,000 orders a day at launch, rising to about 100,000 orders a day and roughly 1,000 locations by May 2025, before a 44-store pause in seven North Indian cities | Branded around a ten-minute cooked-food delivery |
| Blinkit Bistro | Spotted December 2024 | Pilot phase, parts of Gurugram only, 1,000+ downloads at first sighting | 15 minutes stated |
| Swiggy Bolt | Pre-existing fast layer | 400+ cities, 40,000+ restaurants | Fast delivery, the benchmark the newer cafe formats are compared against |

Two readings follow from this evidence for a Board weighing HarvestBox's options. First, the category growing fastest in adjacent convenience food is not meal kits in any form, it is ready-cooked food delivered in minutes, which answers the case's own stated customer demand for "ready-to-eat options" `[C M4]` more directly than any meal-kit redesign can; Proposal C enters a related but materially slower-moving and differently-shaped category (chilled, heat-at-home, subscription-adjacent) than the ten-minute cafe format, a distinction developed further in section 15. Second, even the best-funded entrants in this adjacent category are not reliably profitable: Zomato's quick-commerce business sits near break-even at the platform level `[S08]`, while Zepto Cafe, the most aggressive ten-minute entrant, had to retreat from 44 stores on operational grounds within months of its fastest growth `[S18]`. A category moving this quickly is not evidence that convenience food is easy money; it is evidence that the competitive bar for speed and cost is rising faster than HarvestBox's current model can follow, since a recipe-card-and-cook format cannot compete on the ten-minute dimension at all, by construction.

The profitability signal inside quick commerce itself is worth stating as its own table, because it bears directly on how much cash-rich patience a Board should expect from platform-backed rivals before they either pull back (as Zepto Cafe did) or settle into durable margins.

| Platform or format | Profitability signal | Direction | Source |
|---|---|---|---|
| Blinkit (Zomato) quick commerce, platform level | Near adjusted EBITDA break-even, per the chief executive's own Q2 FY25 shareholder letter | Improving | `[S08]` |
| Swiggy Instamart, store level | About 25% of stores running profitably, up from about 10% two quarters earlier | Improving | `[S09]` |
| Swiggy Instamart, segment level | Adjusted EBITDA loss ₹849 crore in the quarter reported, down 5.2% quarter on quarter from ₹896 crore | Improving, but still a loss | `[S09]` |
| Zepto Cafe, operational level | Halted operations at 44 of roughly 1,000 stores across seven cities over supply-chain and staffing problems within months of its fastest growth | A pullback, not a profitability figure, but evidence that scale outran operational capacity | `[S18]` |

The pattern across this table is that quick commerce's core grocery business is moving toward break-even store by store, while its newest, fastest-growing layer, ten-minute cooked food, has already shown it can outrun its own operations before it shows a profit figure at all. Neither signal supports a reading that convenience food in India is an easy category to enter profitably; both support the reading that the competitive bar is rising on cost and speed at the same time, which is the harder combination for any new entrant, HarvestBox included, to meet.

A second gap worth stating as its own comparison, because two secondary sources summarising the same government survey disagree on a figure that looks precise but is not independently confirmed, is the minute-count conflict in section 9.1 laid out side by side rather than left inside a single paragraph.

| Reading | Women | Men | Ratio stated | Source |
|---|---|---|---|---|
| GKToday's summary of the 2019 NSO Time Use Survey | Over four hours a day, 19.5% of waking time | About 25 minutes a day | Women about 10 times men | `[S15]` |
| Manorama Yearbook's summary of the same 2019 survey | 299 minutes a day (about 5 hours), 81.2% daily participation | 97 minutes a day, 26.1% daily participation | Not stated as a single ratio in this source | `[S16]` |

*NSO: National Statistical Office.*

Both summaries describe the same underlying survey round and agree that women carry a far larger share of unpaid domestic work than men in urban and rural India alike, but the two readings differ by nearly a factor of four on the men's minute figure (25 minutes against 97 minutes), which this document treats as an unresolved conflict between two secondary summaries rather than as two independently confirmed numbers, consistent with the caution already stated in section 9.1.

Exhibit for the deck: the cover slide's dinner mind map, hub node "a weekday dinner" with five spoke nodes (cook from scratch plus quick commerce, order in, ten-minute ready-to-eat, private-label kit, HarvestBox kit), price and effort labelled on each spoke, brand placeholder slots for Blinkit, Zepto, Swiggy, Zomato and a HarvestBox slot, with the private-label gap (₹5,200 against ₹3,500) called out on the HarvestBox spoke.

---

## 10. Competition: buyer power and substitutes decide this market, not rival meal kits

**Answer.** Run against the standard five forces, HarvestBox's hardest pressure does not come from other subscription meal-kit companies, who barely exist in India at scale (section 12), it comes from buyers who can switch to a cheaper or faster substitute on any given night at zero switching cost, and from a private-label entrant priced a third below HarvestBox's own box. Ten-minute ready-to-eat formats are the sharpest edge of that substitute threat, growing faster than any slower-moving channel in this market. What HarvestBox retains that none of the substitutes can claim is a 4.6 out of 5 satisfaction score among customers who stay past six months `[C W6]`, evidence that the core product, not the contract around it, is where the company's advantage sits.

### 10.1 Porter's five forces, rated and evidenced

Porter's five forces organises industry profitability pressure into threat of new entrants, bargaining power of suppliers, bargaining power of buyers, threat of substitutes and rivalry among existing competitors. Applied to HarvestBox's category, two forces dominate and the rest are comparatively mild, which the table below states plainly rather than scoring every force as equally important.

| Force | Rating | Evidence |
|---|---|---|
| Threat of new entrants | Moderate | Two major supermarket chains have already entered with private-label kits at ₹3,500 `[C M3]`, showing entry is not capital-constrained for an established retailer; a standalone meal-kit startup, by contrast, faces the graveyard documented in section 12, where every named Indian meal-kit company either shut down, was never heard from again, or pivoted away from the format |
| Bargaining power of suppliers | Low to moderate | Not directly evidenced by a case fact or outside source specific to HarvestBox's ingredient suppliers; the general-trade distribution system that most Indian FMCG still runs through carries distributor margins of 10% to 12% and retailer margins around 25% to 30% `[S61]`, suggesting suppliers generally hold limited bargaining power against a buyer with real purchasing scale, though HarvestBox's own scale relative to its suppliers is not disclosed in the case |
| Bargaining power of buyers | High | This is the force that matters most here. HarvestBox's own customers face zero switching cost between a HarvestBox kit and any of the four substitutes on the dinner map (section 9.2): no contract lock-in is stated in the case, and the case's own stated reasons for leaving (too rigid, too expensive, repetitive menu) `[C W1]` `[C W2]` `[C W3]` are all buyer-power symptoms, not supplier or entrant symptoms |
| Threat of substitutes | High, and rising | Four substitutes sit on the same dinner map at a lower price or lower effort (section 9.2), and the fastest-growing of them, ten-minute ready-to-eat food, is scaling at a pace (Zepto Cafe near 100,000 orders a day by May 2025) `[S18]` that no meal-kit format can match on speed, by construction |
| Rivalry among existing meal-kit competitors | Low | Section 12 finds no surviving, at-scale Indian meal-kit competitor; every named company either shut down with no stated reason, was never followed up on, or (Fizzy Foodlabs) went into liquidation. HarvestBox is not being out-competed by other meal-kit companies, it has effectively no direct meal-kit rival at its own scale in India |

The honest reading of this table is uncomfortable for a strategy built around "winning the meal-kit category": there is barely a meal-kit category to win in India, and the forces that actually threaten HarvestBox's economics (buyer power and substitutes) sit entirely outside that narrow category. This is the argument section 10.4 develops further, and it is also why Proposal A's rebuild cannot be a meal-kit-industry argument; it has to be an argument about why a customer stays inside HarvestBox's offer rather than defecting to a cheaper or faster alternative on any given night.

The threat-of-new-entrants rating in the table above rests partly on how large a share of Indian food retail modern trade, the channel a supermarket private-label kit sells through, actually commands, since a channel that reaches only a small share of overall food spending bounds how fast a private-label entrant can scale even after it decides to enter.

| Channel | Share of consumer-goods sales for an average manufacturer, reference period 2011 | Note |
|---|---|---|
| Traditional (general) trade | About 87% | The dominant channel by volume; distributor margins 10% to 12%, retailer margins 25% to 30% `[S61]` |
| Modern trade | About 8% to 9% | The channel through which the ₹3,500 private-label kits are sold `[C M3]` |
| Company-owned outlets | About 4% to 5% | Not a material channel for either HarvestBox or the private-label entrants |

This figure is dated, from a 2011 reference period, and no current, India-wide modern-trade share figure was found in this research to replace it; it is used here only to bound how much shelf reach a supermarket-chain private-label kit can command, not as a claim about today's exact split. Even allowing for modern trade's share having grown since 2011, a channel that commanded less than a tenth of consumer-goods sales at that reference point is not a channel that turns a ₹3,500 private-label kit into overnight national scale, which is one reason this document rates the new-entrant threat as moderate rather than severe, while still treating the private-label entrant as the most direct price comparison HarvestBox faces (section 10.3).

### 10.2 Strategic groups: where HarvestBox sits on price and curation

Strategic group mapping plots competitors on two dimensions and clusters them, on the logic that competition is sharper within a group than across groups. The two dimensions that organise this market cleanly are price per dinner occasion and the degree of curation and effort removed from the customer (from "customer does everything" to "customer does nothing but heat and eat").

| Strategic group | Members | Price per occasion | Curation and effort removed |
|---|---|---|---|
| Self-service grocery | Cook from scratch via quick commerce (Blinkit, Zepto, Swiggy Instamart) | No verified per-meal figure; groceries only, full cooking effort | Lowest: customer plans, shops, cooks |
| Order-in | Zomato, Swiggy food delivery | ₹499 to ₹660 an occasion `[S12]` | Highest effort removed of any group: fully cooked, no prep |
| Ten-minute ready-to-eat | Zepto Cafe, Blinkit Bistro, Swiggy Bolt | Within the case's ₹250 to ₹450 ready-to-eat band `[C M2]` | High: cooked or near-cooked, delivered fast, minimal or no heating |
| Private-label meal kit | Two unnamed supermarket chains' own-brand kits | ₹3,500 a box `[C M3]` | Moderate: ingredients portioned, recipe supplied, customer still cooks |
| Branded subscription meal kit | HarvestBox | ₹5,200 a box, ₹433 a dinner on the case's own cadence `[C K2]` `[C K8]` | Moderate: same curation level as private label, but on a recurring subscription with recipe variety as the stated differentiator |

*n/a where no verified figure exists.*

Two findings follow from mapping the groups this way. First, HarvestBox and the private-label kits occupy the same curation band, moderate effort removed, full cooking still required, which means the competition HarvestBox feels most directly is not the order-in or ten-minute groups on a different curation level, it is the private-label kits sitting one row below it on price for a comparable amount of remaining customer effort. Second, there is genuine white space between the ten-minute ready-to-eat group and the meal-kit groups: no format in this market currently offers meal-kit-level ingredient quality and recipe variety at ten-minute-group speed, because portioning and recipe-card preparation cannot be compressed into a ten-minute delivery window. That white space is not one HarvestBox is positioned to exploit (its model depends on the customer cooking), but it explains why the quick-commerce platforms are investing in cooked-food formats rather than meal-kit formats: the easier win for them is removing effort entirely, not adding curation.

### 10.3 The price ladder: private label, the rebuilt entry tier, the core box and the family tier

The price comparison that matters most to the Board is not an index number, it is the specific ladder a customer sees when deciding whether to stay with HarvestBox, defect to the cheaper private-label kit, or (under the rebuilt Proposal A) trade down to a cheaper HarvestBox tier instead of leaving entirely.

| Tier | Price | Gap to HarvestBox's current ₹5,200 box | Meals included | Price per meal |
|---|---|---|---|---|
| Private-label kit (two supermarket chains) | ₹3,500 `[C M3]` | −₹1,700, −32.7% (₹5,200 − ₹3,500 = ₹1,700; ₹1,700 ÷ ₹5,200 = 32.7%) | Not disclosed in any source found | Not disclosed |
| Rebuilt entry plan (2 meals a week) | ₹3,600 (assumption `[A09]`) | −₹1,600, −30.8% | About 8 meals a month on a 2-a-week cadence | ₹3,600 ÷ 8 = ₹450 a meal, matching the entry-plan pricing assumption's own stated rationale |
| HarvestBox core box (today, and unchanged under the rebuild) | ₹5,200 `[C K2]` | Baseline | About 12 meals a month on the case's 3-a-week cadence `[C K8]` | ₹433 a meal |
| Rebuilt family plan (4 meals a week) | ₹6,600 (assumption `[A09]`) | +₹1,400, +26.9% | About 16 meals a month on a 4-a-week cadence | ₹6,600 ÷ 16 = ₹412.5, close to ₹412 a meal, matching the family-plan pricing assumption's own stated rationale |

This table carries an assumption, flagged once here: the ₹3,600 and ₹6,600 tier prices come from assumption A09, the team's own reconstruction of the rebuilt Proposal A's price mix, which is not a case figure `[A09]`. The reasoning behind A09 is that pricing the entry tier at ₹450 a meal rather than discounting the existing ₹433-a-meal core box undercuts the private-label kit's apparent value proposition on a different axis (a lower total monthly bill for a smaller commitment) without cutting the price of the core product that today's customers already accept at 4.6 out of 5 satisfaction `[C W6]`. The arithmetic shows this works: ₹3,600 a month for the entry tier is still above the private-label kit's ₹3,500 box price, so the rebuild is not attempting to win a price war against private label on its own terms, it is offering a lower absolute monthly commitment for a customer who was going to leave anyway over cost, which is 27% of stated exits `[C W2]`, while leaving the core box's per-meal economics untouched for the customers who are staying.

### 10.4 Ten-minute ready-to-eat food: the real competitor for convenience, not rival meal-kit brands

Section 10.1's five-forces reading already established that rivalry among existing meal-kit competitors is the weakest of the five forces; HarvestBox essentially has no scaled Indian meal-kit rival (section 12). The force doing the actual competitive damage is the threat of substitutes, concentrated in the ten-minute ready-to-eat format. Three facts make this concrete. First, scale: Zepto Cafe alone reached roughly 100,000 orders a day and about 1,000 locations within roughly five months of its public launch `[S18]`, a growth rate no meal-kit format, which requires portioning, packing and a recipe card rather than a finished dish, can match structurally. Second, price position: ten-minute ready-to-eat sits inside the case's own ₹250 to ₹450 meal band `[C M2]`, at or below HarvestBox's ₹433-a-dinner price, while removing the cooking effort that HarvestBox's format still requires. Third, platform backing: these formats are built by Blinkit, Zepto and Swiggy, companies already running dark-store networks with hundreds of locations and gross order values in the thousands of crores a quarter `[S08]` `[S09]`, giving them a distribution and delivery-speed advantage no standalone meal-kit company can replicate without years of fulfilment-centre build-out.

This matters directly for how the Board should read Proposal A's rebuild. The rebuild (section 17) does not and cannot compete with ten-minute food on speed; it competes on the dimension ten-minute food structurally cannot offer, curated, portioned, recipe-guided cooking for a household that wants to cook, not just eat. The case's own customer-research finding that demand exists for "convenience, flexibility, variety, ready-to-eat options and value for money" together `[C M4]` is not a single demand; it bundles two different jobs (wanting to cook with less friction, and wanting to not cook at all), and HarvestBox's rebuilt offer can only serve the first. The honest implication, developed further in sections 13 and 17, is that Proposal A's ceiling is bounded by how many urban households actually want to cook most weeknights rather than outsource the job entirely, a segment this research cannot size precisely because no source found gives a cooking-versus-outsourcing split for Indian urban households (section 9.1's gap).

### 10.5 What HarvestBox has that the substitutes lack

Against four cheaper or faster substitutes and a buyer-power force that lets customers switch at will, HarvestBox's one durable asset, confirmed by the case itself rather than assumption, is product quality once a customer stays long enough to experience it repeatedly: customers who remain beyond six months rate HarvestBox 4.6 out of 5 `[C W6]`. No substitute in this research carries a comparably high, case-verified satisfaction score; none of the sources in Lanes A, B, D or F report a customer satisfaction figure for Blinkit, Zepto, Swiggy, the private-label kits, or any Indian meal-kit precedent that would allow a direct comparison, so this is stated as HarvestBox's own evidenced strength, not as a claim of superiority over a measured rival.

| What HarvestBox has | Evidence | What the substitutes offer instead |
|---|---|---|
| High satisfaction among retained customers | 4.6 of 5 among 6-month-plus stayers `[C W6]` | No comparable satisfaction figure found for any named substitute in this research |
| Curated, portioned ingredients with a recipe card | Case description of the core product `[C K8]` | Private label matches the format but at a lower price `[C M3]`; quick-commerce and order-in remove the cooking step entirely rather than curating it |
| An existing subscription relationship and delivery infrastructure | Five fulfilment centres, 410 staff, five-city footprint `[C K9]` `[C K3]` | New entrants (private label, platform cafes) are building distribution fast, but HarvestBox already has a working, if underused, network (68% utilisation `[C X1]`) |
| A website and app with an existing, if small, conversion funnel | 14 lakh visits a month, 2.8% conversion `[C X4]` `[C X5]` | Quick-commerce apps have far larger user bases, but HarvestBox's funnel is a lever it already controls and can improve (section 18) |

The strategic conclusion from sections 10.1 to 10.5 together is that HarvestBox's problem is not product quality and not a shortage of rival meal-kit companies to out-compete; it is that the contract around a good product lets customers leave for a cheaper or faster substitute before the product has a chance to earn their loyalty, which is exactly the finding the rebuild in section 17 is engineered to fix, by removing the rigidity that turns a single bad week into a cancelled subscription.

Exhibit for the deck: slide 2 (diagnosis and evaluation) carries a compressed version of the five-forces rating as a side panel next to the exit-reason bars, keyed to show that buyer power and substitutes, not meal-kit rivalry, are the forces the chosen proposal has to answer.

---

## 11. Global precedents: the companies that survived cut marketing and widened the offer in that order

**Answer.** Six global meal-kit and adjacent ready-to-eat companies give a consistent precedent: Gousto and Marley Spoon, the two still running healthy margins, cut spend discipline and widened their offer (lower-cost sub-brands, more recipe choice) before chasing growth again, while Blue Apron, which widened the offer late and never got spend discipline under control, lost roughly 95% of its value in six years and was sold for parts. HelloFresh sits in between: scaled and still large, but running an explicit "efficiency program" after a 9.0% constant-currency revenue decline in its most recent full year. None of these six companies is a clean India analogue, and the document says so plainly rather than forcing a fit; what transfers is the sequencing lesson (discipline before growth), not any specific number.

### 11.1 How the six companies are compared

Each company below is profiled against the same seven questions used throughout Lane B: revenue and active customers by year, marketing as a share of revenue, any disclosed retention or order-rate figure, profitability by year, what the company changed and when, the outcome, and one verbatim management statement. The same template is applied to every company so a reader can compare them without re-orienting to a different structure each time, following the symmetric-treatment principle used throughout this document (PLAN section 3.4).

### 11.2 HelloFresh

| Question | Finding |
|---|---|
| Revenue and active customers by year | FY2023 group revenue €7.6 billion, up 2.8% in constant currency `[S22]`; FY2024 group revenue approximately €7.66 billion, up about 0.9% in constant currency `[S21]`; FY2025 preliminary group revenue approximately €6.76 billion, down 9.0% in constant currency `[S20]`. Active-customer counts specific to a verified fiscal year were not located in this research; a search-summary figure of 7.6 million active subscribers against €10.72 billion of revenue does not correspond to any verified HelloFresh fiscal year and is dropped (see Conflicts below) |
| Marketing as a share of revenue | FY2025 preliminary results state marketing spend fell 0.9 percentage points of revenue year on year, though this specific figure was not independently located in the direct fetch of the primary release and is carried as reported `[S20]`. A separate, unverifiable search-summary figure puts marketing at 16% of revenue in Q4 2024 against 19.1% in Q4 2023, with a stated mid-term target of 15% to 16% of revenue |
| Retention, order rate or orders per customer | FY2023 order volume declined 4.7% to approximately 119 million orders `[S22]`, with the chief executive stating the meal-kit business reached "Customer Lifetime Revenue to the highest levels we ever achieved" |
| Profitability by year | FY2023 adjusted EBITDA €448 million, down 6.3% from €477 million in 2022, with free cash flow returning to positive €78 million `[S22]`; FY2024 adjusted EBITDA approximately €399 million `[S21]`; FY2025 preliminary adjusted EBITDA approximately €423 million, up about 14% in constant currency, with the meal-kit product category alone carrying a 13.5% adjusted EBITDA margin `[S20]` |
| What the company changed, and when | Acquired Factor75 for up to $277 million, announced 23 November 2020, adding ready-to-eat meals to its US portfolio alongside EveryPlate and Green Chef `[S29]`; ran an "efficiency program" through FY2025 covering, per its own FY2024 results commentary, higher marketing return-on-investment thresholds, labour productivity gains and lower capital expenditure |
| The outcome | FY2025 guidance targets a return to double-digit adjusted EBIT growth after the 9.0% revenue decline, with adjusted EBIT guided at €200 million to €250 million for FY2025 `[S21]` |
| One verbatim management statement | Chief executive Dominik Richter, on the FY2023 results: "Customer Lifetime Revenue to the highest levels we ever achieved" `[S22]` |

### 11.3 Blue Apron

| Question | Finding |
|---|---|
| Revenue and active customers by year | Revenue grew from $77.8 million in 2014 to $795.4 million in 2016, and $868 million for the twelve months ended 31 March 2017 `[S23]`; more than 1 million customers paid for orders in Q1 2017, ordering 8 million meals a month `[S23]` |
| Marketing as a share of revenue | No VERIFIED figure located in this research; a search-summary-only figure put Q2 2022 marketing expenses at $21.8 million, 17.5% of net revenue, marked UNVERIFIABLE |
| Retention, order rate or orders per customer | Bloomberg Second Measure's transaction data, a May 2016 snapshot, found 28% of Blue Apron customers remained subscribed six months after first purchase, against 16% each for Plated and HelloFresh over the same period `[S30]`. This is a different provider, period and method than the roughly 10% six-month retention figure referenced elsewhere for the same three companies (a 2016 1010data study, discussed in section 6), and the two do not agree even approximately for the same companies in the same general period |
| Profitability by year | No VERIFIED year-by-year profitability figure located; a search-summary-only figure put the Q1 2022 net loss at $38.4 million, marked UNVERIFIABLE |
| What the company changed, and when | Struck a $50 million deal to move to an "asset-light" model, selling its own operating infrastructure and partnering with FreshRealm for fulfilment, before being sold `[S25]` |
| The outcome | Initial public offering priced at $10 a share in June 2017, below the planned $15 to $17 range, implying a valuation around $1.9 billion against an earlier planned $3 billion `[S24]`; sold to Wonder Group at $13 a share, about $103 million total equity value, completed 13 November 2023 `[S25]` `[S26]`, a decline of roughly 95% from the IPO valuation |
| One verbatim management statement | No verbatim, dated management statement specifically on retention or marketing efficiency was located for Blue Apron in this research; this is logged as a gap, not filled with an unattributed quote |

### 11.4 Gousto

| Question | Finding |
|---|---|
| Revenue and active customers by year | FY2025 sales up 10% to £342 million, from £312 million in FY2024 `[S27]` |
| Marketing as a share of revenue | No specific marketing-share-of-revenue figure located for Gousto in this research; logged as a gap |
| Retention, order rate or orders per customer | No disclosed retention or churn figure located; the FY2025 article explicitly does not disclose a repeat-rate or churn metric on direct read `[S27]` |
| Profitability by year | FY2025 adjusted EBITDA up 7% to a record £45 million, a margin of 13.2% against 13.5% the prior year, its third consecutive year of profit `[S27]`; gross margin approximately 55%, maintained from the prior year, a direct-read figure that corrects the lower, blog-sourced 53% figure carried in earlier seed material `[S27]` |
| What the company changed, and when | Shifted recipe mix toward healthy ranges (Protein Hit, Calorie Controlled, Pasta Pronto), which grew demand by 144% year on year, alongside convenience-range growth of 23% year on year `[S27]` |
| The outcome | Third consecutive year of profitability in FY2025 `[S27]` |
| One verbatim management statement | No verbatim, dated management statement specific to retention or marketing efficiency was located for Gousto in this research; logged as a gap |

### 11.5 Marley Spoon (with Dinnerly)

| Question | Finding |
|---|---|
| Revenue and active customers by year | FY2024 preliminary net revenue €330.1 million, up 0.8% year on year in constant currency `[S28]` |
| Marketing as a share of revenue | Not separately disclosed in the sources located; contribution margin, a related profitability measure, was 34.7% for FY2024 `[S28]` |
| Retention, order rate or orders per customer | Customers select 3 to 4 recipes a week from a choice of 20, as stated in December 2018, with a stated intention to personalise choices using data from past selections `[S31]` |
| Profitability by year | FY2024 preliminary operating EBITDA approximately €9.2 million, positive, driven by the 34.7% contribution margin `[S28]` |
| What the company changed, and when | Launched Dinnerly in March 2018 as a lower-cost alternative brand with simpler recipes `[S31]` |
| The outcome | FY2024 guidance exceeded for EBITDA; FY2025 subsequent guidance was cut over the course of the year from a single-digit percentage revenue decline to an absolute range of €250 million to €270 million, a figure carried from search-summary sources and not independently confirmed by a direct document read, so stated here with that caveat |
| One verbatim management statement | Chief executive Fabian Siegel, 17 December 2018: "we are so early on and sub scale and have already relatively high margins" `[S31]` |

### 11.6 Home Chef (Kroger)

| Question | Finding |
|---|---|
| Revenue and active customers by year | Surpassed $1 billion in annual retail sales, announced around 25 October 2021, with distribution in more than 2,200 Kroger-family stores, more than 75% of Kroger Co. stores nationwide, and more than 500 products `[S69]` |
| Marketing as a share of revenue | No figure located in this research; logged as a gap |
| Retention, order rate or orders per customer | No figure located; logged as a gap |
| Profitability by year | No year-by-year profitability figure located for Home Chef specifically, as distinct from Kroger's group results; logged as a gap |
| What the company changed, and when | Kroger began rolling Home Chef meal kits out to Kroger-family supermarkets from October 2018, after merging with Home Chef earlier that year, with a heat-and-eat and lunch-kit pilot following in May 2019 `[S69]`; brand sales rose 118% in fiscal 2020 as pandemic demand shifted toward at-home meal solutions `[S69]` |
| The outcome | Over $1 billion in annual retail sales by the October 2021 milestone, across the in-store distribution footprint above `[S69]` |
| One verbatim management statement | Home Chef president Erik Jensen, around the $1 billion milestone (25 October 2021): "By offering time-saving meal solutions at Kroger Family of Stores, we're able to simplify the cooking process" `[S69]` |

### 11.7 Factor (Factor75)

| Question | Finding |
|---|---|
| Revenue and active customers by year | No VERIFIED standalone Factor75 revenue figure was located; HelloFresh's group-level ready-to-eat segment, which includes but is not limited to Factor75, was €1.4 billion for FY2023 `[S22]`. A blog claim that Factor75 alone reached "more than €2,000 million" in 2023 is larger than HelloFresh's entire verified group ready-to-eat segment for that year and is not used anywhere in this document |
| Marketing as a share of revenue | Not separately disclosed for Factor75 as a standalone brand; logged as a gap |
| Retention, order rate or orders per customer | Not located for Factor75 specifically; logged as a gap |
| Profitability by year | Not disclosed separately from HelloFresh's group results; logged as a gap |
| What the company changed, and when | HelloFresh agreed to acquire Factor75 for up to $277 million ($177 million at closing plus up to $100 million in earn-outs), announced 23 November 2020, to add ready-to-eat meals to its US portfolio `[S29]` |
| The outcome | Folded into HelloFresh's group ready-to-eat segment, which reached €1.4 billion of revenue in FY2023, the only verified figure available at this level `[S22]` |
| One verbatim management statement | No verbatim, dated management statement specific to Factor75's retention or marketing efficiency was located; logged as a gap |

### 11.8 Comparison across the six companies

| Company | Most recent verified revenue | Most recent verified profitability | What it changed | Outcome |
|---|---|---|---|---|
| HelloFresh | ~€6.76bn, FY2025 preliminary, down 9.0% cc `[S20]` | Adjusted EBITDA ~€423m, +14% cc `[S20]` | Factor75 acquisition (2020); an "efficiency program" through FY2025 | Still large, running a stated efficiency program after a revenue decline |
| Blue Apron | $868m TTM to Mar 2017, the last verified scale figure before decline `[S23]` | No VERIFIED year-by-year profitability located | Asset-light pivot, sold own infrastructure | Sold for ~$103m, down ~95% from its ~$1.9bn IPO valuation `[S25]` `[S26]` |
| Gousto | £342m, FY2025, +10% `[S27]` | Adjusted EBITDA £45m, margin 13.2%, third profitable year `[S27]` | Shifted mix toward healthy and convenience recipe ranges | Third consecutive profitable year |
| Marley Spoon | €330.1m, FY2024 preliminary, +0.8% cc `[S28]` | Operating EBITDA ~€9.2m, positive, contribution margin 34.7% `[S28]` | Launched Dinnerly, a lower-cost sub-brand | FY2024 guidance exceeded; FY2025 guidance subsequently cut |
| Home Chef (Kroger) | Over $1bn annual retail sales, Oct 2021 `[S69]` | Not disclosed separately from Kroger | Expanded from online subscription into in-store grocery distribution | Surpassed $1bn in retail sales inside a grocery retailer's own footprint |
| Factor (Factor75) | Not disclosed standalone; part of HelloFresh's €1.4bn FY2023 RTE segment `[S22]` | Not disclosed standalone | Acquired by HelloFresh to add ready-to-eat to the portfolio | Folded into HelloFresh's group results |

*cc: constant currency. RTE: ready-to-eat.*

### 11.9 What transferred to India, and what did not

Three patterns recur across the companies that are still running healthy margins (Gousto, Marley Spoon) and are absent or reversed in the one that collapsed (Blue Apron). First, cost discipline came before, not after, widening the offer: Gousto's recipe-mix shift and Marley Spoon's Dinnerly launch both sit alongside healthy or improving contribution margins, not alongside aggressive new spend. Second, the lower-cost tier was a new, separate product (Dinnerly as its own brand, a distinct recipe range at Gousto) rather than a discount on the existing core product, preserving the core brand's pricing. Third, the one company without a verified cost-discipline story, Blue Apron, is also the one that lost nearly all its value and was ultimately sold for its operating infrastructure rather than its brand.

What transfers to HarvestBox's situation is the sequencing logic, not the specific numbers: these are large, mature Western markets with far larger addressable populations and different cost structures, and none of their marketing-as-a-percentage-of-revenue, gross-margin or retention figures should be read as a target for HarvestBox, which the writer notes explicitly rather than implying by juxtaposition. What does transfer is the order of operations the rebuild in section 17 and the operational improvements in section 18 follow: cut non-working spend and tighten acquisition quality first (the operational improvements, section 18), then widen the offer with a genuinely new, lower-cost tier rather than a discount on the core box (the entry plan, section 17), which is the same sequence Gousto and Marley Spoon followed and Blue Apron did not.

Two precedent lines are strong enough, on verified facts, for the deck to carry. The first: Gousto's FY2025 results, adjusted EBITDA up 7% to a record £45 million on sales up 10% to £342 million, its third consecutive profitable year, built on a recipe-mix shift toward healthy and convenience ranges rather than discounting `[S27]`. The second: Blue Apron's trajectory from an approximately $1.9 billion IPO valuation in June 2017 to a $103 million sale completed 13 November 2023, a roughly 95% decline, following an asset-light pivot that came only after the business had already lost most of its value `[S25]` `[S26]`. Both lines are usable because both rest on VERIFIED figures from primary company disclosure or directly-read trade press, not on search-summary figures or blog sources.

### 11.10 Marketing efficiency across the six, where it is known, and two dropped figures

Marketing as a share of revenue is the single comparison this document would most like to make cleanly across all six companies, because HarvestBox's own marketing line, up from 22% to 30% of revenue in four years `[C P22]` `[C P25]`, is the single largest driver of its margin collapse (section 8). The table below states what is actually known, rather than filling every row with an unverifiable search-summary figure.

| Company | Marketing or acquisition efficiency figure | Status |
|---|---|---|
| HelloFresh | FY2025 marketing spend reported as down 0.9 percentage points of revenue year on year; a separate, unverifiable figure puts marketing at 16% of revenue in Q4 2024 against 19.1% in Q4 2023, with a stated mid-term target of 15% to 16% | Headline direction VERIFIED from the primary release `[S20]`; the specific percentage figures are from a search summary, not a direct document read, and are marked UNVERIFIABLE |
| Blue Apron | A search-summary-only figure puts Q2 2022 marketing expenses at $21.8 million, 17.5% of net revenue | UNVERIFIABLE; no VERIFIED figure located |
| Gousto | No marketing-share-of-revenue figure located in any source opened in this research | Gap |
| Marley Spoon | Not separately disclosed; the related contribution-margin figure of 34.7% for FY2024 is VERIFIED | `[S28]` |
| Home Chef (Kroger) | No figure located | Gap |
| Factor (Factor75) | No figure located, standalone from HelloFresh's group figures | Gap |

The honest statement from this table is that marketing efficiency, the exact lever the operational improvements in section 18 target for HarvestBox, is the single thinnest disclosure item across all six global precedents; only HelloFresh gives any figure at all, and even that figure is only partly confirmed by a direct document read. This document does not fill the gaps with estimated figures, and a judge asking "how does HarvestBox's planned marketing cut compare with what HelloFresh or Gousto actually did" should be told plainly that the comparison cannot be made on verified numbers, only on direction: the companies that are profitable today are also the ones whose own disclosures, however sparse, describe pulling back on spend before widening the offer, not after.

Two figures surfaced in the initial research round for this lane and are explicitly dropped rather than carried forward. The first is a claim that HelloFresh spent 18.2% of revenue on marketing, €1.95 billion of €10.72 billion in revenue, with 7.6 million active subscribers; no verified HelloFresh fiscal year in this research matches a €10.72 billion revenue figure (FY2023 was €7.6 billion `[S22]`, FY2024 about €7.66 billion `[S21]`, FY2025 preliminary about €6.76 billion `[S20]`), so this figure is not used anywhere in this document, consistent with the build-log correction for writers. The second is a blog claim that Factor75 alone reached "more than €2,000 million" in revenue in 2023, which is larger than HelloFresh's entire verified group ready-to-eat segment of €1.4 billion for that year `[S22]`; this figure is similarly dropped. Both drops are stated here explicitly, rather than silently, because a judge who has seen either figure in other public commentary on these companies should know this document considered and rejected it, rather than simply never mentioning it.

### 11.11 Why none of the six is a clean India analogue

None of the six companies profiled above should be read as a direct stand-in for HarvestBox, and this document states the calibration limits plainly rather than letting the symmetric table structure imply a closer fit than the evidence supports. HelloFresh, Blue Apron, Gousto, Marley Spoon and Home Chef operate in the United States, the United Kingdom, Germany and Australia, markets where household incomes, grocery infrastructure, cold-chain reliability and the base rate of eating out are all materially different from the five Indian cities HarvestBox serves `[C K9]`. None of the six companies' disclosed gross-margin, retention or marketing-efficiency figures is offered anywhere in this document as a target or a benchmark HarvestBox should hit; every locked number in this document's financial case (sections 19 and 20) comes from the HarvestBox model `[M]`, built on the case's own figures and the team's own stated assumptions, not from a scaled or converted version of any of these six companies' results.

What is transferable, and what this document actually claims is transferable, is narrower and more structural: the sequencing lesson that cost discipline preceded a widened offer at the two companies still profitable today, and the caution that the one company which widened without discipline lost nearly all of its value. Two further differences limit the comparison even on this narrower claim. First, scale: HelloFresh's smallest recent figure in this research, its FY2025 preliminary revenue of approximately €6.76 billion `[S20]`, is more than 150 times HarvestBox's ₹42 crore (roughly €4.5 million at typical rates) `[C K5]`, so HelloFresh's "efficiency program" operates with a cost base and a balance sheet HarvestBox does not have. Second, currency and market structure: five of the six companies report in euros, pounds or dollars in large, mature, high-income markets with established cold-chain and grocery-delivery infrastructure; HarvestBox's own figures are rupee figures from a market where modern trade itself reaches only a minority of food retail (section 10.1), a materially different starting point for any of these companies' go-to-market tactics to transfer cleanly. The document treats the sequencing lesson as the only claim strong enough to survive this gap, and does not extend it further.

A further reason for caution sits inside the symmetric table itself: three of the seven questions in the template, marketing as a share of revenue, retention or order rate, and a verbatim management statement, returned a confirmed figure for fewer than half of the six companies (sections 11.2 to 11.7). A comparison built mostly from the rows that are fully populated, revenue scale and headline profitability, is a thinner comparison than the uniform table structure might suggest to a reader skimming it quickly. This document keeps the full template for every company regardless, following the symmetric-treatment principle (PLAN section 3.4), precisely so that the gaps are visible in the same place a figure would otherwise sit, rather than quietly omitted from a shorter, cleaner-looking table that would hide how little is known about five of the six companies on several of the seven questions.

Exhibit for the deck: the cover slide's precedent strip, two cards, Gousto ("discipline then widen: third straight profitable year") and Blue Apron ("discipline came too late: 95% of value lost"), each with a brand logo placeholder and its headline verified figure.

---

## 12. Indian precedents: meal kits have been tried here before and the survivors sell fresh food differently

**Answer.** Every named Indian meal-kit company found in this research either shut down, went into liquidation, or has no recorded outcome at all; none scaled to a size comparable to HarvestBox's ₹42 crore revenue `[C K5]`. The Indian direct-to-consumer food brands that did reach scale, Licious, Country Delight, iD Fresh Food and FreshMenu among them, did not sell meal kits; they sold a finished or near-finished fresh product through a vertically integrated supply chain. The lesson for HarvestBox is stated carefully: no source gives a reason for most of these shutdowns, so this section states what happened and when it is known, and says plainly where no reason was found, rather than inferring one.

### 12.1 Indian meal-kit companies: founding, funding and outcome

Six named Indian meal-kit or meal-kit-adjacent companies were found in this research. The table lists each with its founding year, its model, its outcome, and the stated reason for that outcome where one exists in a source, or "no stated reason found" where it does not.

| Company | Founded | Model | Outcome | Stated reason |
|---|---|---|---|---|
| Chef's Basket (parent: Fizzy Foodlabs) | 2012, by Manish Tirthani, Varun Jhawar and Nipun Tirthani `[S35]` | Pre-portioned recipe kits, ₹75 to ₹400 a kit depending on source, sold mainly through hypermarkets `[S35]` `[S37]` | Raised $6 million Series A in November 2015 `[S35]`, but revenue never crossed ₹10 crore in any year while losses mounted (2014-15 ₹1.96 crore revenue with a small profit, rising to 2018-19 ₹3.48 crore revenue against a ₹10.4 crore loss) `[S38]`; went into liquidation after a vendor's unpaid ₹8.95 lakh triggered an insolvency petition, admitted by the National Company Law Tribunal in September 2019, with liquidation approved 12 March 2020 `[S38]` | Liquidation triggered by an unpaid vendor claim; the brand was later acquired by Weikfield Foods `[S38]` |
| Burgundy Box | January 2015, Mumbai, by two private-equity professionals and one hotel-management professional `[S39]` | DIY meal kits | No record found of a shutdown, acquisition, or continued operation | No stated reason found |
| iChef | 2014 | Online pre-measured recipe-kit ordering, seed funding from Springboard Ventures Fund (amount undisclosed) `[S36]` | No record found of what happened after the seed round | No stated reason found |
| Cookfresh | February 2014, South Delhi and Gurgaon, by Raghav Kohli and Anshul Narang `[S37]` | Pre-chopped, exact-quantity ingredients with recipe cards, ₹169 to ₹749 a kit, grew from 15 to 33 recipes `[S37]` | No record found of its later outcome | No stated reason found |
| Being Chef | September 2014, Gurgaon, by Shubham Maheshwari, ₹60 lakh initial investment, ₹6 to 7 lakh monthly operating cost `[S37]` | Exact-quantity meal-kit ingredients delivered | No outcome recorded in any source found | No stated reason found |
| EatFresh | 2015, Bangalore | Chef-prepared, on-demand gourmet meal service with its own commercial kitchens | Stopped on-demand delivery and moved to bulk and party orders only, announced 4 January 2017 `[S41]` | No official reason given; the publisher's own framing, not a company statement, attributes food-tech shutdowns generally to difficult unit economics and an inability to scale `[S41]` |

A seventh company, FabBox, founded in 2015 in Mumbai, was investigated and excluded from this table: its current business is a snack and corporate-gifting e-commerce brand (nut mixes, millet chips), not a meal-kit company, so it does not answer the case's meal-kit question `[S40]`.

The pattern across these six is stark even without a stated reason for most of them: not one reached a scale comparable to HarvestBox's ₹42 crore 2025 revenue `[C K5]`, and the one with disclosed financials, Fizzy Foodlabs, never crossed ₹10 crore in revenue in any year while its losses grew to more than three times that revenue `[S38]`. This is read carefully: an absence of a stated reason for five of the six outcomes is not evidence that the format is unworkable, it is a genuine gap in the public record, and the document states it as a gap rather than filling it with inference.

### 12.2 Indian fresh-food subscription and direct brands that reached scale

Where meal kits failed to scale in India, a different model, fresh or near-finished product delivered through a company's own supply chain, did scale, in several cases to revenue many times HarvestBox's own.

| Company | What it sells | Most recent verified revenue | Most recent verified loss or profit | Source |
|---|---|---|---|---|
| Licious | Fresh meat and seafood, vertically integrated cold chain, no outsourced critical logistics `[S42]` | ₹795 crore, FY25 (one figure); a second article gives ₹797.2 crore for the same year `[S44]` `[S45]` | EBITDA loss cut 45% to ₹163 crore from ₹296 crore in FY24 `[S44]`; a second article gives net loss narrowed 27% to ₹218.3 crore from ₹298.6 crore `[S45]` | `[S42]` `[S44]` `[S45]` |
| Country Delight | Subscription milk and dairy sourced directly from farmers, app-based, 25-plus cities | ₹1,380 crore, FY24, up 77.5% year on year `[S47]` | Not disclosed as a loss or profit figure in sources found; valued at $731.1 million as of 27 March 2025 by one data provider, against $758 million cited for its Series E round by another `[S48]` | `[S47]` `[S48]` |
| iD Fresh Food | Fresh batter, bread and ready-to-cook staples | ₹681.38 crore, FY25, up 22% on FY24 `[S50]` | Turned profitable in FY24 with ₹1.8 crore profit after tax `[S49]`; FY25 profit up more than fivefold `[S50]` | `[S49]` `[S50]` |
| FreshToHome | Fresh meat and seafood, direct-to-consumer | ₹421 crore, FY25, up 14% `[S46]` | Net loss ₹146 crore, FY25, against ₹150 crore in FY24, roughly a 2.7% reduction `[S46]` | `[S46]` |
| FreshMenu | Cloud-kitchen prepared meals | Revenue fell from ₹104.5 crore in FY20 to ₹50 crore in FY21, roughly a 51% drop, before a reported recovery `[S52]` | Raised about $26 million over its life; the FY21 drop was followed by a reported turnaround rather than a closure, after competing against Swiggy's and Zomato's aggregation model `[S52]` | `[S52]` |
| Curefoods (parent of EatFit) | Multi-brand cloud kitchens | ₹635 crore total income, FY24 (₹585 crore operating revenue, up 53%, plus ₹50 crore interest income) `[S53]` | Net loss ₹172.6 crore, FY24, roughly halved from ₹342.7 crore in FY23, with advertising spend cut 50.8% to ₹52.8 crore as part of the improvement `[S53]` `[S54]` | `[S53]` `[S54]` |
| Rebel Foods | Cloud-kitchen aggregator, multiple owned brands | ₹1,420 crore, FY24, up about 19% from ₹1,195 crore FY23, over 450 kitchens across 70 cities `[S55]` `[S56]` | Net loss ₹378 crore, FY24, against ₹656.55 crore FY23, more than 40% narrower `[S55]` | `[S55]` `[S56]` |

*FY: financial year, referring to the Indian fiscal year ending 31 March unless stated otherwise.*

Two of these rows carry stated figure conflicts worth flagging rather than silently resolving. Licious's FY25 revenue is given as ₹795 crore by one source `[S44]` and ₹797.2 crore by another `[S45]`, a difference of about ₹2.2 crore that looks like normal rounding or reporting-date variance rather than a real disagreement; its net loss figure for the same year is reported as an EBITDA-loss figure of ₹163 crore in one place and a net-loss figure of ₹218.3 crore in another, which are two different profitability measures (EBITDA loss against net loss) rather than a contradiction, and this document does not conflate them. Country Delight's valuation is given as $731.1 million by one data aggregator and $758 million, tied to its Series E round, by another `[S48]`; neither could be traced to a company-issued statement in this research, and both are kept on record rather than resolved to a single figure.

### 12.3 What the scaled survivors did instead of meal kits

The structural pattern across every company in section 12.2 is the same: none of them asks a customer to cook from a recipe card. Licious and FreshToHome sell fresh meat and seafood that the customer cooks however they choose, with no recipe constraint. Country Delight sells a single staple commodity (milk and dairy) on a replenishment subscription, the simplest possible recurring-purchase model. iD Fresh Food sells batter, bread and ready-to-cook staples, closer to a grocery item than a curated kit. FreshMenu, Curefoods and Rebel Foods sell fully cooked food from their own kitchens, the opposite end of the effort spectrum from a meal kit. Licious has also moved further toward the finished-product end of its own category, expanding from fresh and raw meat into ready-to-cook and ready-to-eat lines with pre-marinated meats and bottled meat spreads, sold through its own app and quick-commerce listings `[S57]`.

None of these companies' models maps directly onto Proposal C, launching a chilled, ready-to-heat meal through HarvestBox's existing subscription network `[C PC1]`. This research found no named Indian brand selling chilled, refrigerated, short-shelf-life ready-to-heat meals at national retail scale comparable to HelloFresh's Factor in the United States; the closest adjacent evidence is ITC's Kitchens of India and Aashirvaad ReadyMeals lines, which are ambient, shelf-stable products preserved by pasteurisation and traditional oil-and-salt preservation, requiring no refrigeration, a different storage category entirely from the chilled format Proposal C describes `[S58]` `[S59]` `[S60]`. This is logged as a genuine gap in the Indian evidence base, not an inference about why no such brand exists; the honest statement for the Board is that Proposal C would be entering a product format with essentially no scaled Indian direct precedent to benchmark against, which raises rather than lowers its execution risk, a point developed with the licensing and cold-chain evidence in section 15.

| Company | What it sells instead of a meal kit | Effort still required of the customer |
|---|---|---|
| Licious | Fresh meat and seafood, plus ready-to-cook and ready-to-eat lines | Full cooking for the fresh line; minimal for the newer ready-to-eat spreads `[S57]` |
| Country Delight | A single replenishment staple (milk and dairy) | None beyond normal use of the product |
| iD Fresh Food | Fresh batter, bread and ready-to-cook staples | Partial: the product is closer to a prepared ingredient than a recipe kit |
| FreshMenu, Curefoods, Rebel Foods | Fully cooked meals from owned kitchens | None: ready to eat on delivery |

### 12.4 Indian modern-trade supplier terms

Because Proposal B proposes selling through roughly 800 supermarkets `[C PB1]`, the terms a supplier faces in Indian modern trade matter directly to that proposal's economics, developed fully in section 14. The terms found in this research are dated but directionally consistent across sources.

| Metric | Figure | Source |
|---|---|---|
| General trade (kirana) share of India's FMCG volume | 70% to 75% | `[S61]` |
| Distributor margin in general trade | 10% to 12% | `[S61]` |
| Retailer margin in general trade | About 25% to 30% | `[S61]` |
| Modern trade's share of consumer-goods sales for an average manufacturer (2011 reference period) | About 8% to 9%, against 87% for traditional trade and 4% to 5% for company-owned outlets | `[S62]` |
| Retailer margins reported in a 2011 consumer-durables dispute | 8% to 18% typically, squeezed toward 4% to 5% by rising operating costs; one retailer cited being offered 16% to 18% margins against 24% operating costs, with better agreements at 27% to 28% | `[S62]` |
| India private-label share of modern retail, overall | About 4.5% as of a 2012 to 2013 reference period, rising to 30% to 50% in price-sensitive staples such as rice and wheat flour | `[S63]` |

*FMCG: fast-moving consumer goods.*

No exact listing-fee amount, slotting-fee amount or credit-day term, in rupees or days, was found in any source searched for this lane; the figures available are margin percentages only, mostly dated to 2011 to 2013, and this is stated as a gap rather than estimated. Modern trade carries upfront costs including listing fees and slotting allowances, plus long payment credit cycles that strain supplier working capital, but no source gives the specific numbers `[S61]`. This gap matters directly for Proposal B's model assumption A21 on working-capital days, discussed in section 14, since the research base behind that assumption is a general industry pattern rather than a HarvestBox-specific or even category-specific negotiated figure.

### 12.5 The lesson for HarvestBox, stated carefully

The lesson from sections 12.1 to 12.4 together is narrower than it might first appear, and the document states it narrowly on purpose. It is not that meal kits cannot work in India; five of the six companies in section 12.1 have no stated reason for their outcome at all, so no causal claim can be built on them. What can be said, carefully, from the evidence actually found: no Indian meal-kit company in this research reached a scale comparable to HarvestBox's own ₹42 crore revenue `[C K5]`, while every Indian food brand that did reach meaningfully larger scale did so by removing the recipe-card-and-cook step from the customer's job, either by selling a simpler staple (Country Delight), a less-processed fresh product (Licious, FreshToHome, iD Fresh Food), or a fully finished meal (FreshMenu, Curefoods, Rebel Foods).

| Precedent company | What it did instead of a meal kit | Relevance to HarvestBox |
|---|---|---|
| Licious | Vertically integrated cold chain, fresh meat and seafood, later adding ready-to-eat lines | Shows a workable India path to scale in adjacent fresh food, but not through the meal-kit format itself |
| Country Delight | Single-commodity subscription replenishment | Shows subscription itself is not the problem; a simple, low-friction subscription scales in India |
| iD Fresh Food | Fresh, minimally processed staples, profitable at scale | Shows profitability is achievable in adjacent fresh food without a recipe-kit format |
| FreshMenu | Revenue fell by about half in FY21, followed by a reported recovery, after years competing against aggregator platforms | A caution that even a fully cooked, lower-effort format can come close to real trouble under platform-scale competition, a risk also relevant to how HarvestBox should weigh Proposal C against Zomato- and Swiggy-scale rivals |

This document draws one further-reaching conclusion carefully: Country Delight's success at reaching ₹1,380 crore of revenue `[S47]` on a subscription model shows that the subscription structure itself, HarvestBox's own chosen model, is not the obstacle; the obstacle, consistent with the retention and unit-economics findings in sections 5 and 6, sits in how rigid the subscription is around a product that still requires the customer's own cooking effort. That reading supports, without overstating, the direction the rebuild in section 17 takes: keep the subscription, remove the rigidity, and do not assume that widening into a format with no scaled Indian precedent (ready-to-eat at national scale, Proposal C) carries the same evidence of workability that a flexible subscription around the existing product does.

Exhibit for the deck: appendix slide's data-check panel carries a condensed version of the section 12.1 outcome table (company, year, outcome, stated reason) as a single dense row-strip, supporting the claim that HarvestBox has essentially no surviving Indian meal-kit rival to benchmark against.

## 13. Proposal A as written: the right problem, with a design that loses money in year 1

**Answer.** Proposal A names the correct disease. HarvestBox's subscription punishes a customer for ordering less often, and the case's own number for why customers leave puts rigidity first, at 34% of stated exits `[C W1]`. But the fix as written gives every one of today's 62,000 subscribers `[C K1]` the right to skip from the day it launches, while the retention benefit it is meant to buy accrues only inside the cohorts that sign up after launch, one cohort at a time. In the model, Proposal A as written closes year 1 ₹0.29 Cr worse off than making no change at all, cash still runs out in month 16, and the proposal needs to hold the skip rate at or below 12.6%, the level that cancels its own retention gain `[M]`, to preserve the standalone retention uplift, a ceiling its own feature list does nothing to enforce. We keep the thesis. We replace the design in section 17.

### 13.1 What it is

Proposal A is five features layered onto the existing subscription at an investment of ₹1.8 crore `[C PA2]`: skip or pause orders without penalty, choose 2 or 4 meals instead of the standard box, swap recipes, access a larger menu, and refer friends for rewards `[C PA1]`. Management's own expectation is that three-month retention improves from 55% to 65% `[C PA3]`, and its own stated risk is that customers "may use flexibility to order less frequently" `[C PA4]`. Every element of the proposal is a subtraction of friction. None of it is priced, none of it is capped, and none of it changes what the customer pays. That is the version the model runs under the label "A as written," and it is the version this section evaluates on its own terms, before section 17 rebuilds it.

### 13.2 Economics as written

The case gives one retention number for Proposal A, three-month retention of 65% against today's 55% `[C PA3]`. The model applies that higher survival rate to new cohorts from launch and lets every current subscriber skip freely with no limit, exactly as written. Two results follow.

First, revenue. Modelled revenue for year 1 under Proposal A as written is ₹42.0 Cr and year 2 is ₹46.6 Cr `[M]`, against ₹42.0 Cr and ₹42.0 Cr with no decision taken `[M]`. The year-2 lift of ₹4.6 Cr comes entirely from the better-retained cohorts compounding through their second year on the books; year 1 shows no revenue gain at all, because a cohort signed up in month 1 of the plan has not yet reached the month-3 point where the higher survival rate shows up in the boxes it still orders.

Second, profit. EBITDA (earnings before interest, tax, depreciation and amortisation) under Proposal A as written is −₹10.44 Cr in year 1 and −₹11.05 Cr in year 2 `[M]`, against −₹10.15 Cr and −₹11.86 Cr with no decision taken `[M]`. The year-1 comparison is the one that matters for a Board being asked to fund this: ₹10.44 Cr minus ₹10.15 Cr is a loss that is ₹0.29 Cr larger than doing nothing `[M]`, the locked figure in section 4 of this plan. Proposal A as written is not merely slow to help. In its first year, it actively hurts.

| Measure | No decision | Proposal A as written | Difference |
|---|---|---|---|
| Revenue, year 1 (₹ Cr) | 42.0 | 42.0 | 0.0 |
| Revenue, year 2 (₹ Cr) | 42.0 | 46.6 | +4.6 |
| EBITDA, year 1 (₹ Cr) | −10.15 | −10.44 | −0.29 |
| EBITDA, year 2 (₹ Cr) | −11.86 | −11.05 | +0.81 |
| Cash zero month | 18 | 16 | 2 months earlier |

*EBITDA: earnings before interest, tax, depreciation and amortisation.* All figures `[M]`. The table shows that Proposal A as written gives back year 1 before it gives back anything else, and brings the month cash runs out forward by two months, not back. Section 16.2's scorecard table states a different revenue figure for this option, +₹0.0 Cr rather than this table's +₹4.6 Cr for year 2 alone; that column uses a year-1-only basis for three of its four rows, stated explicitly where it appears, and does not use this section's year-by-year figures.

### 13.3 Why skipping hits everyone at once

The mechanism behind that year-1 loss is structural, not a modelling quirk. Skip or pause without penalty `[C PA1]` is a right every existing subscriber holds from day one of the rollout. The retention gain it is supposed to fund is a property of a cohort's survival curve, and a survival curve only resolves itself one month at a time, as each cohort actually reaches month 2, month 3, and beyond. A customer who signed up two years ago can start skipping on day one of the new policy. A customer whose higher 65% three-month retention is supposed to pay for that skip has not even reached month 3 yet. The cost of the feature is immediate and economy-wide; the benefit of the feature is deferred and cohort-by-cohort. Lay one against the other inside a single year and the cost wins, which is exactly what the ₹0.29 Cr year-1 shortfall `[M]` shows.

This is also why Proposal A's own stated risk, that "customers may use flexibility to order less frequently" `[C PA4]`, is not a tail risk to be managed later. It is the central mechanism of the proposal's own first year, acting before the proposal's own benefit has had time to accrue.

### 13.4 What it fixes, and the break-even skip rate it needs to hold

Mapped against the case's five stated reasons for leaving, Proposal A's features touch three directly and a fourth partially. Skip or pause answers rigidity (34%) `[C W1]`. The larger menu answers repetition (18%) `[C W3]`. Choosing 2 or 4 meals partially answers "too expensive" (27%) `[C W2]`, to the extent a smaller box lowers the price a household pays, though the case gives no specific price for either size. Food waste and portion issues (11%) `[C W4]` are touched indirectly, because a customer who can swap recipes or choose a smaller box is less likely to over-order ingredients they do not use. Summed, the reasons A's feature list is aimed at account for 34 + 18 + 11 = 63% of stated exits `[C W1]` `[C W3]` `[C W4]`, close to the 63% figure this document's insight register assigns to the rebuilt version in section 17; delivery problems (10%) `[C W5]` are outside the scope of any subscription-terms change.

The condition under which the retention uplift survives is the skip rate itself. The model solves for the share of due boxes that must go unskipped for the proposal's own retention gain to survive, rather than being cancelled out, and that rate, the skip rate that cancels Proposal A's retention gain, is 12.6% `[M]`. Proposal A as written contains no mechanism that keeps the skip rate anywhere near that line: there is no limit on how often a subscriber may skip, no floor on boxes taken in a rolling period, and no return date attached to a pause. The feature list that is meant to fix rigidity is, on its own terms, unbounded, and an unbounded skip option has no reason to land at 12.6% rather than considerably higher.

| Row | What it shows |
|---|---|
| 24-month cumulative EBITDA by 3-month retention (rows) and skip rate (columns, 0% to 15%), built from the base case, the full recommended plan including the staged ready-to-eat gate | Even at the 65% retention rate Proposal A promises, cumulative EBITDA over 24 months stays negative at every skip rate tested |

| Retention | Skip 0% | Skip 5% | Skip 10% | Skip 15% |
|---|---|---|---|---|
| 55% | −7.1 | −8.3 | −9.6 | −10.8 |
| 60% | −6.0 | −7.3 | −8.6 | −9.9 |
| 65% | −5.0 | −6.3 | −7.6 | −8.9 |
| 70% | −3.9 | −5.3 | −6.7 | −8.0 |

Figures are ₹ crore, 24-month cumulative EBITDA `[T8]`, run from the base case rather than Proposal A as written in isolation: the 65% retention, 5% skip cell, −₹6.3 Cr, checks against the base case's own year-1 EBITDA of −₹5.53 Cr plus its year-2 EBITDA of −₹0.75 Cr `[M]`. Reading the 65% row, the retention level Proposal A's own stated expectation targets `[C PA3]`, cumulative EBITDA ranges from −₹5.0 Cr at a 0% skip rate to −₹8.9 Cr at a 15% skip rate. Even the best case in that row, a skip rate of zero that the written proposal's own design does nothing to secure, does not reach break-even inside 24 months. The grid shows that retention alone, however much of it the plan delivers, cannot reach profitability without a skip rate that is managed, which is precisely the feature the written proposal omits.

A reason-by-reason view of the same arithmetic makes the gap concrete rather than abstract.

| Stated reason for leaving | Share of exits | Touched by Proposal A as written | How |
|---|---|---|---|
| Too rigid or difficult to skip | 34% | Yes | Skip or pause without penalty `[C PA1]` |
| Too expensive | 27% | Partially | Choosing 2 or 4 meals changes the size of the box, not a stated price `[C PA1]` |
| Menu becomes repetitive | 18% | Yes | Larger recipe menu `[C PA1]` |
| Food waste or portion issues | 11% | Indirectly | Smaller boxes and recipe swaps reduce unused ingredients `[C PA1]` |
| Delivery problems | 10% | No | Nothing in the feature list addresses delivery execution `[C PA1]` |

Figures `[C W1]` `[C W2]` `[C W3]` `[C W4]` `[C W5]`. Read down the "touched" column, four of five reasons have some feature aimed at them, and only delivery problems are entirely outside the proposal's reach; read across to the "share" column, the two reasons the proposal answers most directly, rigidity and repetition, together account for 34 + 18 = 52% of stated exits `[C W1]` `[C W3]`, with the partial and indirect rows adding the rest of the 63% this section's insight register claims. The gap between a feature list that is aimed at the right reasons and a design that loses money in year 1 is not a gap in diagnosis. It is the unbounded skip mechanism described in section 13.3, which turns a correctly targeted fix into a cash outflow that outruns its own benefit.

### 13.5 What it leaves

Delivery problems, 10% of stated exits `[C W5]`, sit entirely outside Proposal A's scope: nothing in skip, pause, sizing, swapping or referral touches a delivery failure. More importantly, the customer acquisition cost (CAC) side of the business, the other half of the 1.55x ratio of lifetime value (LTV) to CAC `[C U6]` that the case flags as the core problem, is untouched by Proposal A as written. The model's LTV-to-CAC ladder decomposes the gap between today's 1.55x and the 3.0x benchmark `[C U7]` into four steps.

| Step | LTV to CAC |
|---|---|
| Today | 1.55 |
| Retention | 1.67 |
| Margin | 1.83 |
| CAC | 2.70 |
| Benchmark | 3.0 |

*LTV: lifetime value. CAC: customer acquisition cost.* `[T12]`. The step labelled "Retention" isolates the contribution of a better-retained cohort, holding gross margin and acquisition cost at today's levels; it moves the ratio from 1.55x to only 1.67x `[T12]`. That is the entire economic contribution Proposal A as written is capable of making on its own, because retention is the only lever its five features pull. The remaining 1.33x of distance to the 3.0x benchmark comes from margin work and acquisition-cost discipline, neither of which Proposal A as written contains. A proposal that improves retention and nothing else was never going to close a gap that is, on the case's own numbers, mostly a margin and marketing problem: 15 of the lost percentage points sit in gross margin and marketing, and none in overheads, as section 3 of this document shows.

### 13.6 Cash path

Cash under Proposal A as written starts at ₹15.0 Cr `[C K4]`, the ₹1.8 Cr investment `[C PA2]` is spent inside the first year, and the business still burns through the balance to reach zero in month 16 `[M]`, two months sooner than the month-18 zero point under no decision at all `[M]`. Against the investors' stated 24-month runway condition for a further funding round `[C K11]`, Proposal A as written does not merely fall short; it shortens the runway the company already has.

| Scenario | Month 0 | Month 6 | Month 12 | Month 18 | Month 24 | Cash zero month |
|---|---|---|---|---|---|---|
| No decision | 15.0 | 10.1 | 4.8 | −0.9 | −7.0 | 18 |
| Proposal A as written | 15.0 | 8.2 | 2.8 | −2.7 | −8.3 | 16 |

Figures are ₹ crore `[T13]` `[M]`. Both rows end negative at month 24; the written version of Proposal A simply gets there faster, because it spends ₹1.8 Cr on a feature set that does not earn its keep inside a single year.

### 13.7 Risk

The main risk Proposal A as written carries is the one the case names for it `[C PA4]`: unmanaged use of flexibility. A secondary risk is opportunity cost. ₹1.8 Cr and twelve months of the Board's one permitted major initiative `[C G0]` `[C G6]` would be spent on a design that, by its own numbers, sets the company back in year 1 and still runs out of cash two months sooner than doing nothing. A third risk is sequencing: having spent the single permitted initiative on a design that does not work, HarvestBox would be in a materially worse position, with less cash and less time, to try again on a better version of the same idea.

### 13.8 What would make it right

The gap between Proposal A as written and a proposal that works is not the thesis; it is the absence of a floor. A rebuild that keeps skip and pause free but attaches a return date to every pause and a floor of two boxes in any three months caps the skip rate near the level the model needs, instead of leaving it unbounded. Pairing that floor with the margin and acquisition-cost levers the LTV-to-CAC ladder shows are still missing, rather than relying on retention alone, is what turns a 1.67x contribution into something closer to the 3.0x benchmark `[C U7]`. That rebuild, named the rebuilt Proposal A, is the subject of section 17, and the six-lever operational improvements that make the margin and CAC side of the ladder move is the subject of section 18. Sections 19 and 20 carry the honest reading of what the two together actually deliver: a path to break-even in month 21, not a profit plan, with every single downside in the sensitivity table turning the run-rate negative.

Exhibit for the deck: the survival-line-with-payback-marker panel on the diagnosis slide carries the 65% retention case alongside the skip-rate grid, with the skip rate that cancels Proposal A's retention gain, 12.6%, marked directly on the chart as the line Proposal A as written has no mechanism to hold.

## 14. Proposal B: ₹8,333 a store a month, beside a kit that costs a third less

**Answer.** Proposal B puts HarvestBox's kit on the shelf of about 800 supermarkets `[C PB1]` for ₹1.3 Cr `[C PB2]`, promising ₹8 Cr of incremental revenue in year 1 at a 22% gross margin `[C PB3]` `[C PB4]`. Divided across 800 stores and twelve months, that is ₹8,333 a store a month `[M]`, less than two boxes at the existing ₹5,200 price `[C K2]`, sitting on a shelf beside a private-label kit the case says launched at about ₹3,500, a third less `[C M3]`. The model shows Proposal B reaching the same cash-zero month as Proposal A as written, month 16 `[M]`, because the channel economics of modern trade, returns, channel cost and working capital eat most of the gross margin before it reaches HarvestBox, and because none of it touches the 45% of customers who leave by month 3. It is a real revenue line. It is not a fix for the business the case describes.

### 14.1 What it is

Proposal B sells HarvestBox's existing meal kits through roughly 800 supermarkets across India `[C PB1]`, for an investment of ₹1.3 crore `[C PB2]`, with a stated year-1 incremental revenue expectation of ₹8 crore `[C PB3]` at an expected gross margin of 22% `[C PB4]`. The case names the main risks itself: lower margins, retailer margins, competition from the ₹3,500 private-label kits, and potential brand dilution `[C PB5]`. Unlike Proposal A, Proposal B adds a new sales channel rather than changing the terms of the existing subscription; in the Ansoff matrix used in section 16, it is market development, taking an existing product into a market HarvestBox has not sold through before, rather than a change to the product itself.

### 14.2 Economics as written

Divide the proposal's own numbers by its own footprint. ₹8 Cr of incremental revenue `[C PB3]` across 800 stores `[C PB1]` over 12 months is ₹8 crore ÷ 800 stores ÷ 12 months = ₹8,333 a store a month `[M]`, the figure the model's calibration table carries as `b_store_m_rs` `[T2]`. At HarvestBox's own order value of ₹5,200 a box `[C K2]`, ₹8,333 is less than two boxes sold a month, out of every store on the list. That is the entire revenue case for each shelf slot, before any of the channel's own costs are taken out.

Those costs are not small. At the stated 22% gross margin `[C PB4]`, gross profit on ₹8 Cr of revenue is ₹8 Cr × 22% = ₹1.76 Cr `[T2]` for the full year. The team's assumption register attaches three further terms specific to grocery retail: returns and unsold stock at 4% of sales, channel cost at 6% of sales, and 5% cannibalisation of HarvestBox's own existing subscription sales `[A21]`, alongside 60 days of receivables and 8% revenue growth in year 2 `[A21]`. Working through those on the ₹8 Cr revenue line: returns and unsold stock cost ₹8 Cr × 4% = ₹0.32 Cr; channel cost is ₹8 Cr × 6% = ₹0.48 Cr; and cannibalisation, applied against the 2025 gross margin of 31% `[C P25]`, costs a further ₹8 Cr × 5% × 31% = ₹0.124 Cr in lost margin on subscription sales the retail channel simply moves rather than creates. Net of all three, the contribution left from ₹1.76 Cr of gross profit is approximately ₹1.76 Cr − ₹0.32 Cr − ₹0.48 Cr − ₹0.12 Cr ≈ ₹0.84 Cr `[A21]`. That figure reconciles to the model's own year-1 result: EBITDA under Proposal B as written is −₹9.31 Cr against −₹10.15 Cr with no decision taken `[M]`, a year-1 improvement of ₹9.31 Cr − ₹10.15 Cr worked the other way, −9.31 − (−10.15) = +₹0.84 Cr `[M]`, the same number the channel-cost arithmetic above lands on from the other direction.

| Line | ₹ Cr |
|---|---|
| Incremental revenue, year 1 | 8.00 |
| Gross profit at 22% margin | 1.76 |
| Less: returns and unsold stock, 4% of sales | −0.32 |
| Less: channel cost, 6% of sales | −0.48 |
| Less: cannibalisation of core sales, 5% at 31% margin | −0.12 |
| Net contribution | ≈0.84 |

Figures `[C PB3]` `[C PB4]` `[A21]` `[C P25]`, assumption. The table shows that of ₹1.76 Cr of headline gross profit, two-thirds is absorbed by the channel's own costs and by sales the channel simply relocates rather than adds, before the proposal's single-year effect on company-wide EBITDA is even counted.

### 14.3 What it fixes

Proposal B fixes a distribution-reach gap: HarvestBox's kit is sold only through its own subscription and quick-commerce listing today `[C K12]`, and this proposal puts it in front of modern-trade shoppers who do not currently encounter the brand at all. It also fixes, on paper, the Board's near-term revenue growth question, since the year-1 revenue outcome against no decision is +₹7.6 Cr, rising to +₹18.0 Cr over 24 months `[T9]`, the single largest revenue lift of the three options evaluated in this document.

### 14.4 What it leaves

Proposal B's feature list touches none of the case's five stated reasons for leaving `[C W1]` `[C W2]` `[C W3]` `[C W4]` `[C W5]`: it is a shelf placement, not a change to the subscription terms a departing customer is reacting to. Retention, the core of the case's diagnosis, is unmoved; the model holds three-month retention at today's 55% `[M]` under Proposal B as written, because nothing in the proposal is designed to change it. The 45% of sign-ups who leave by month 3, a group that loses HarvestBox roughly ₹2.5 Cr a year `[T2]`, as section 6 of this document shows, are untouched by a supermarket shelf slot they will never encounter if they have already stopped ordering.

Lane F evidence on grocery-channel meal kits supports treating this as a real and recurring pattern, not a HarvestBox-specific risk. Walmart rolled meal kits into more than 2,000 stores starting in 2018, at $8 to $15 for a two-person meal, and later discontinued the entire programme; its own corporate page carries an editor's note added in 2024 confirming the programme had ended, with no commercial reason stated `[S70]`. Albertsons bought the meal-kit brand Plated in September 2017 specifically to use its store network, and by November 2019 had phased out Plated's home-delivery subscription business, repositioning the brand as an in-store, private-label culinary line instead `[S25]` `[S26]`; no single stated commercial reason for that wind-down was found in any primary source opened in this research, a limit this document states plainly rather than inferring a cause `[S25]`. The clearest counter-example, Kroger's Home Chef, is also the one least like Proposal B: Home Chef was Kroger's own acquired meal-kit brand, not a third party's product placed on an existing retailer's shelf, and it reached $1 billion of annual sales by October 2021 only after the retailer rotated recipes weekly and expanded the brand to over 2,200 stores `[S69]`, a scale of retail integration and ownership this proposal does not contemplate for HarvestBox.

| Precedent | What happened | Source |
|---|---|---|
| Walmart in-store meal kits | More than 2,000 stores from 2018; programme later ended, no stated reason found | `[S70]` |
| Albertsons and Plated | Acquired September 2017 for store distribution; home-delivery business phased out November 2019, repositioned as in-store private label | `[S25]` `[S26]` |
| Kroger and Home Chef | Retailer's own acquired brand, not a third-party placement; over $1 billion of sales by October 2021 across 2,200+ stores | `[S69]` |

The table shows that the precedent closest to succeeding at scale is the one structurally least similar to Proposal B, because it involved the retailer owning the brand rather than a direct-to-consumer company renting shelf space.

Brand effect is the thinnest evidence lane in this research. No named, quantified study measuring brand dilution from a premium direct-to-consumer food brand entering grocery retail was located `[S36]`; the case's own flagged risk of "potential brand dilution" `[C PB5]` is stated as a risk in the case itself, not something this document can quantify from outside evidence. What can be said with more confidence is the shelf-level price contrast the case itself provides: HarvestBox's own box at ₹5,200 `[C K2]` sits beside private-label kits the case says launched at around ₹3,500 `[C M3]`, a gap of ₹5,200 − ₹3,500 = ₹1,700, or ₹1,700 ÷ ₹5,200 ≈ 33%, close enough to call a third `[C M3]`. Private label is not a hypothetical threat in this channel; India's private-label share in staples such as rice and wheat flour was already 30% to 50% as far back as 2012 to 2013 `[S17]`, and a 2025 industry survey found 52% of Indian consumers say they are switching toward private-label products, with 70% saying the quality feels comparable or better `[S74]`. Those two readings describe different things, a decade-old market-share estimate and a recent attitudinal survey, and this document does not combine them into one current percentage; both point the same direction for a premium kit entering the aisle where that substitution is already strongest.

### 14.5 Working capital

Proposal B is the only one of the three proposals in this document that carries a working-capital burden beyond its stated investment. The model's own scorecard table gives Proposal B a cash-needed figure of ₹2.98 Cr `[T9]`, against a stated investment of only ₹1.3 Cr `[C PB2]`. The difference, ₹2.98 Cr − ₹1.3 Cr = ₹1.68 Cr `[T9]` `[C PB2]`, is working capital tied up in the 60 days of receivables modern-trade retailers typically extract `[A21]`, consistent with the general-trade and modern-trade margin evidence this research found: distributor margins of 10% to 12% and retailer margins of about 25% to 30% in general trade `[S61]`, and a 2011 dispute in which one retailer described being offered 16% to 18% margins against 24% operating costs `[S62]`, context that corroborates long credit cycles and thin realised margins in Indian organised retail generally, though no single named source in this research gives an exact listing-fee or credit-day figure specific to a grocery meal-kit placement.

| Channel | Distributor or retailer margin | Source |
|---|---|---|
| General trade (kirana), distributor margin | 10% to 12% | `[S61]` |
| General trade (kirana), retailer margin | About 25% to 30% | `[S61]` |
| Modern trade, retailer margin (2011 dispute, one named retailer) | 16% to 18% offered against 24% operating costs | `[S62]` |
| Modern trade's share of an average manufacturer's sales (2011 reference period) | About 8% to 9%, against 87% traditional trade | `[S62]` |

The table shows two things a Board weighing Proposal B should hold together: modern trade is a small share of total Indian retail sales for a typical manufacturer even a decade and a half after organised retail began expanding, and the margin a supplier is actually offered in that channel has historically run below what covers a typical retailer's own operating costs, which is consistent with, though does not by itself prove, why 800 stores of shelf space `[C PB1]` produces only ₹1.68 Cr of tied-up working capital rather than a larger number: the receivable sits on a modest per-store volume, ₹8,333 a store a month `[M]`, not a large one.

India's private-label evidence spans two different time periods that this document keeps separate rather than averaging into one current figure, consistent with the caution in `research/raw/R-F.md`.

| Measure | Figure | Period | Source |
|---|---|---|---|
| Private-label share of modern retail, all categories | About 4.5%, projected to 10.5% by 2020 and 25% by 2030 | 2012 to 2013 reference | `[S17]` |
| Private-label share in staples (rice, wheat flour) | 30% to 50% | 2012 to 2013 reference | `[S17]` |
| Consumers switching to private label | 52% | 2025 survey | `[S74]` |
| BigBasket's own private-label share of its sales | Close to 40% of ₹10,062 Cr FY24 sales | FY24 | `[S75]` |

The dated 2012 to 2013 figures and the 2025 consumer-attitude survey describe different things, a market-share estimate from over a decade ago and a recent survey of intent, and this document does not combine them into a single "current" aggregate; both nonetheless point toward a retail environment where private-label substitution pressure on a ₹5,200 kit sitting beside a ₹3,500 alternative `[C K2]` `[C M3]` is real and, on the more recent, if narrower, evidence, rising.

### 14.6 Cash path

Cash under Proposal B as written starts at ₹15.0 Cr `[C K4]`, and reaches zero in month 16 `[M]`, the same month as Proposal A as written, two months sooner than the month-18 zero point under no decision `[M]`.

| Scenario | Month 0 | Month 6 | Month 12 | Month 18 | Month 24 | Cash zero month |
|---|---|---|---|---|---|---|
| No decision | 15.0 | 10.1 | 4.8 | −0.9 | −7.0 | 18 |
| Proposal B as written | 15.0 | 7.5 | 2.7 | −2.6 | −8.1 | 16 |

Figures are ₹ crore `[T13]` `[M]`. The pattern is the same shape as Proposal A: a heavier year-1 and year-2 cost load than the gross-margin arithmetic alone suggests, because channel cost, returns and cannibalisation sit on top of the headline 22% margin.

### 14.7 With the operational improvements

Layered onto the six-lever operational improvements of section 18, Proposal B's year-1 EBITDA improves from −₹9.31 Cr to −₹5.19 Cr, and year-2 from −₹10.71 Cr to −₹4.30 Cr `[M]`, with cash at month 24 turning positive at ₹2.39 Cr `[M]`, against −₹8.14 Cr with no operational improvements `[M]`. That improvement comes almost entirely from the operational improvements' own levers, pruning paid acquisition, cutting non-working marketing, lifting gross margin, and cutting overheads, which apply to the whole business regardless of which proposal is chosen; Proposal B with the operational improvements still carries a 24-month revenue advantage against no decision of +₹12.6 Cr and an EBITDA advantage of +₹12.5 Cr `[M]`, the largest revenue figure of the three operational-improvements comparisons, because grocery retail is the single largest source of incremental top-line growth among the three options.

| Measure | B as written | B with the operational improvements |
|---|---|---|
| EBITDA, year 1 (₹ Cr) | −9.31 | −5.19 |
| EBITDA, year 2 (₹ Cr) | −10.71 | −4.30 |
| Run-rate EBITDA, months 22 to 24 (₹ Cr a year) | −11.37 | −4.65 |
| Cash, month 24 (₹ Cr) | −8.14 | 2.39 |

All figures `[M]`. Even with the operational improvements fully layered on, Proposal B's run-rate at month 24 is still a loss of ₹4.65 Cr a year, worse than the operational improvements applied to Proposal A rebuilt, whose run-rate loss is ₹1.69 Cr `[M]`, because grocery retail's channel costs and cannibalisation persist regardless of how well the core subscription itself is run.

### 14.8 When Proposal B becomes right

Proposal B is a channel decision, and channel decisions compound best on top of a subscription base that has already stopped leaking. If the core retention and unit-economics work in sections 17 and 18 succeeds, and the month-12 gate on cash and LTV-to-CAC described in section 2 of this document is met, grocery retail becomes a lower-risk way to deploy the staged capital this plan reserves for expansion in year 2, because the brand would be entering supermarket shelves backed by a subscription business that converts new sign-ups into long-tenured customers rather than one that loses 45% of them in three months `[M]`. Taken now, ahead of that fix, Proposal B asks the Board to spend its one permitted initiative `[C G0]` `[C G6]` on a new front door for a house that is still losing water out the back.

Exhibit for the deck: the diagnosis slide's exit-reason bar chart carries a fourth, unlabelled bar for Proposal B showing zero overlap with any of the five stated exit reasons, beside the ₹8,333-a-store-a-month calculation shown as an annotation.

## 15. Proposal C: the best market and the worst timing

**Answer.** Proposal C aims at the fastest-growing segment named in the case, ready-to-eat meals at roughly 15% annual growth `[C M2]`, with the highest gross margin of the three proposals at 45% `[C PC4]`. On its own numbers, ₹6 Cr of incremental revenue `[C PC3]` at that margin is ₹2.70 Cr of gross profit `[M]`, which the case's own 10% cannibalisation assumption `[C PC6]` reduces by about ₹0.19 Cr to a net contribution of roughly ₹2.51 Cr `[M]`, against a ₹5 Cr investment `[C PC2]` that does not pay back inside the 24-month window the investors have set `[C K11]`. Cash under Proposal C as written reaches zero in month 15 `[M]`, the earliest of any option modelled in this document, one month sooner than Proposal A or B as written and three months sooner than taking no decision at all. The market is real. The timing, funded now out of the one initiative the Board can afford, is not.

### 15.1 What it is

Proposal C launches chilled, ready-to-heat meals through HarvestBox's existing app and subscription network `[C PC1]`, for ₹5 crore `[C PC2]`, with a stated year-1 incremental revenue expectation of ₹6 crore `[C PC3]` at an expected gross margin of 45% `[C PC4]`, into a ready-to-eat market the case says is growing at approximately 15% a year `[C PC5]`. Management expects about 10% of ready-to-eat sales to cannibalise existing meal-kit sales `[C PC6]`, and names the main risks itself: high upfront investment, food-safety and cold-chain challenges, operational complexity, and a significant cash requirement `[C PC7]`. In the Ansoff matrix used in section 16, Proposal C is product development, a new product sold to HarvestBox's existing customer base, the riskiest of the three categories after diversification.

### 15.2 Economics as written

Work through the proposal's own numbers in order. Gross profit on the stated revenue and margin is ₹6 Cr × 45% = ₹2.70 Cr `[C PC3]` `[C PC4]`, the figure the model's calibration table carries as `c_gp` `[T2]`. Cannibalisation, applied to the 2025 gross margin of 31% `[C P25]` as the rate at which a meal-kit sale lost to ready-to-eat would otherwise have earned, costs ₹6 Cr × 10% × 31% = ₹0.186 Cr ≈ ₹0.19 Cr `[C PC6]` `[C P25]`. Net of that, the contribution is ₹2.70 Cr − ₹0.19 Cr ≈ ₹2.51 Cr `[T2]`, the model's `c_net` figure.

| Line | ₹ Cr |
|---|---|
| Incremental revenue, year 1 | 6.00 |
| Gross profit at 45% margin | 2.70 |
| Less: cannibalisation, 10% of sales at 31% margin | −0.19 |
| Net contribution | ≈2.51 |

Figures `[C PC3]` `[C PC4]` `[C PC6]` `[C P25]`. Set that ₹2.51 Cr of first-year contribution against a ₹5 Cr investment `[C PC2]`, and the arithmetic of payback is immediate: one year of contribution at this rate does not recover half the capital spent, let alone the whole of it. The model's own 24-month result confirms the same point from the top down. The 24-month EBITDA outcome for Proposal C against no decision is +₹4.4 Cr `[T9]`, which is less than the ₹5.0 Cr invested `[C PC2]` `[T9]`: ₹4.4 Cr − ₹5.0 Cr = −₹0.6 Cr `[T9]` `[C PC2]`, a shortfall against the investment, meaning Proposal C as written has not fully paid for itself even after 24 full months on its own improved profitability path, before any discounting for the time value of that cash is applied.

### 15.3 What it fixes

Proposal C answers part of one of the case's five stated exit reasons, menu repetition, 18% of stated exits `[C W3]`, by widening the category of food on offer beyond recipe kits. It also answers, in principle, the "too expensive" objection for a slice of occasions, since a ready-to-heat meal competing at the case's stated ₹250 to ₹450 a meal `[C M2]` sits below HarvestBox's own ₹350 to ₹650 meal-kit band `[C M1]` for at least part of its range. It does not answer rigidity (34%), portion and waste issues (11%), or delivery problems (10%) `[C W1]` `[C W4]` `[C W5]`, none of which a new product category changes.

### 15.4 What it leaves: selling into a leaking base

The single largest problem with Proposal C as written is distributional, not nutritional. It sells a new product through "the existing HarvestBox app and subscription network" `[C PC1]`, which is to say, to the same base that loses 45% of sign-ups by month 3 `[C R2]` and 81% by month 12 `[C R4]`. A customer who has already cancelled cannot be upsold a ready-to-eat line inside the same app. The model holds three-month retention at today's 55% under Proposal C as written `[M]`, exactly as under Proposal B, because nothing in a new product line changes the terms a departing customer is reacting to. Proposal C's addressable market, on day one, is the 55% of each cohort still on the books at month 3, a base the case's own numbers say is shrinking toward 19% by month 12 `[C R4]`.

This research found no named Indian direct-to-consumer brand selling chilled, short-shelf-life, ready-to-heat meals at national scale through a subscription app, the closest adjacent evidence being ITC's Kitchens of India and Aashirvaad ReadyMeals lines, which are ambient, shelf-stable products preserved by traditional methods, a different storage category entirely from the chilled format Proposal C describes `[S58]` `[S59]` `[S60]`. That absence of a scaled Indian precedent is logged as a gap in the evidence base, not as evidence the format cannot work; it does mean Proposal C would be entering with no domestic benchmark to validate its own execution assumptions against, on top of the base-decay problem above.

### 15.5 Lane E: licences, cold chain and shelf life

Proposal C's operational risks are not abstract; they are specific regulatory and physical constraints this research priced where a primary figure exists. On licensing, FSSAI's (Food Safety and Standards Authority of India's) revised turnover thresholds, effective from 1 April 2026, set basic registration up to ₹1.5 crore of turnover, a state licence from ₹1.5 crore to ₹50 crore, and a central licence above ₹50 crore `[S64]`, superseding the pre-amendment bands of ₹12 lakh and ₹20 crore `[S64]`. HarvestBox's ₹42 Cr of 2025 revenue `[C K5]` already sits inside the state-licence band under the revised thresholds, and a ready-to-eat line manufactured and distributed from a central kitchen would need to be licensed accordingly; this document uses the revised, corrected thresholds throughout, per the correction logged in `build-log.md`.

On food-handling rules, FSSAI directed e-commerce food business operators, following a meeting convened on 12 November 2024, to ensure a minimum remaining shelf life of 30% or 45 days, whichever applies, at the point of delivery to the consumer `[S65]`, and that no food business operator may sell on an e-commerce platform without a valid FSSAI licence or registration `[S65]`. Shelf life itself is the weakest-evidenced line in this research's food-safety lane: trade and vendor pages describe an unextended chilled-meal shelf life of roughly a week, and describe modified atmosphere packaging, pasteurisation and high-pressure processing as ways to extend it, but every one of those figures in this research's raw file is marked UNVERIFIABLE, sourced to an equipment vendor's own promotional page or to a search-engine summary rather than an independently opened primary document, and this document does not state any of them as a fact HarvestBox could rely on in a licence application or an investment case.

On penalties, the Food Safety and Standards Act, 2006 sets specific exposure for a ready-to-eat business that gets food safety wrong: up to ₹5 lakh for selling food not of the quality demanded, reduced to ₹25,000 for small manufacturers `[S68]`; up to ₹5 lakh for sub-standard food `[S68]`; and, at the most severe end, unsafe food causing death carries a minimum of seven years' imprisonment, up to life imprisonment, plus a minimum fine of ₹10 lakh `[S68]`. None of these exposures exists for Proposal A or Proposal B in the same way, because neither involves manufacturing and distributing a new, short-shelf-life chilled food product.

| Item | Figure | Source |
|---|---|---|
| FSSAI state-licence band (revised, effective 1 Apr 2026) | ₹1.5 Cr to ₹50 Cr turnover | `[S64]` |
| FSSAI central-licence threshold (revised) | Above ₹50 Cr turnover | `[S64]` |
| Minimum shelf life required at e-commerce delivery | 30% of shelf life, or 45 days | `[S65]` |
| Penalty, sub-standard food | Up to ₹5 lakh | `[S68]` |
| Penalty, unsafe food causing death | Minimum 7 years to life imprisonment, minimum ₹10 lakh fine | `[S68]` |
| India refrigerated-trucks market size, 2024 | ₹7.4 billion, forecast ₹27.7 billion by 2033 | `[S66]` |

*FSSAI: Food Safety and Standards Authority of India.* The table shows that Proposal C introduces a licensing and liability regime HarvestBox has no experience operating under, on top of the base-decay and payback problems above, and that the cold-chain infrastructure market it would depend on is itself still scaling (a 15.0% compound annual growth rate forecast for 2025 to 2033 `[S66]`), meaning capacity and cost benchmarks for the service HarvestBox would need to buy are not yet mature.

Shelf life is nonetheless the specific constraint that turns a strong gross margin into an operational problem, even without a single verified day-count to anchor it. The FSSAI rule this research did verify, that delivered food must retain at least 30% of its shelf life or 45 days, whichever applies, at the point of delivery `[S65]`, means that any chilled product whose total shelf life is itself short, in the range the (unverified) vendor literature suggests before any extension technique, would have very little room between manufacture, central-kitchen dispatch, cold-chain transit and consumer delivery before breaching the rule. India's refrigerated-trucks market, the physical infrastructure this cold chain would run on, was itself still at an early stage of scale, ₹7.4 billion in 2024, with a forecast compound annual growth rate of 15.01% out to 2033 `[S66]`, meaning the national cold-chain capacity Proposal C would lean on is still being built out, not a mature, fully priced utility HarvestBox could simply buy into. The honest statement for the Board is that Proposal C's shelf-life and cold-chain execution risk is real and plausible on the regulatory evidence this research did verify, but that no reliable, India-specific number exists yet to say exactly how tight the operating window would be; that absence of a firm number is itself part of the case for staging Proposal C behind a gate, developed in section 15.9, rather than committing the full ₹5 Cr to it immediately.

| What was checked | What this research found | Status |
|---|---|---|
| Minimum shelf life at e-commerce delivery | 30% of shelf life, or 45 days | VERIFIED `[S65]` |
| Unextended shelf life of a chilled ready meal | Vendor pages suggest roughly a week; not independently confirmed | UNVERIFIABLE, not used as a figure |
| Shelf-life extension by packaging or processing method | Vendor and trade claims exist; none opened as a primary document | UNVERIFIABLE, not used as a figure |
| India's refrigerated-trucks market size, 2024 | ₹7.4 billion, 15.01% compound annual growth rate to 2033 | VERIFIED `[S66]` |

The table separates what this document is willing to state as established, the regulatory floor and the infrastructure market's scale, from what it is not, the actual day-count a HarvestBox ready-to-eat product would need to clear that floor.

The three proposals carry visibly different capital exposures and risk categories, worth setting beside each other once more before turning to cash.

| Proposal | Investment | Primary risk category named in the case | Regulatory exposure beyond today's business |
|---|---|---|---|
| A, fix the subscription | ₹1.8 Cr `[C PA2]` | Customers order less often `[C PA4]` | None: a change to software and process only |
| B, grocery retail | ₹1.3 Cr `[C PB2]` | Margin, retailer terms, brand dilution `[C PB5]` | Retailer contracting; no new food-safety licence class |
| C, ready-to-eat | ₹5.0 Cr `[C PC2]` | Investment size, food safety, cold chain, complexity `[C PC7]` | New FSSAI licence class, Schedule 4 hygiene obligations, FSS Act 2006 penalty exposure `[S64]` `[S68]` |

The table shows Proposal C alone adds an entirely new regulatory category to HarvestBox's risk register, on top of carrying the largest single capital exposure of the three options, which is why section 15.7 treats its risk separately rather than folding it into a single generic "execution risk" line.

### 15.6 Cash path

Cash under Proposal C as written starts at ₹15.0 Cr `[C K4]` and reaches zero in month 15 `[M]`, the earliest cash-zero month of any scenario modelled in this document, including no decision at all.

| Scenario | Month 0 | Month 6 | Month 12 | Month 18 | Month 24 | Cash zero month |
|---|---|---|---|---|---|---|
| No decision | 15.0 | 10.1 | 4.8 | −0.9 | −7.0 | 18 |
| Proposal C as written | 15.0 | 5.8 | 1.6 | −2.8 | −7.6 | 15 |

Figures are ₹ crore `[T13]` `[M]`. The gap between no decision and Proposal C as written is widest at month 6, ₹10.1 Cr versus ₹5.8 Cr `[T13]`, because the ₹5 Cr investment `[C PC2]` is the largest up-front outlay of any of the three proposals and is spent before the new product line has had time to generate offsetting revenue.

### 15.7 Risk

Proposal C carries food-safety and cold-chain risk, which the case names directly `[C PC7]` and the Act 2006 penalty schedule in section 15.5 prices concretely for the first time anywhere in this document's evaluation of the three options. It also carries the highest cash requirement of the three, ₹5.0 Cr against ₹1.8 Cr for Proposal A and ₹1.3 Cr for Proposal B `[C PA2]` `[C PB2]` `[C PC2]`, the largest single exposure against the company's ₹15 Cr of total cash `[C K4]`. A third risk, specific to Proposal C, is operational complexity in a domain, a manufactured chilled food product with its own licence class, that HarvestBox has never run; the company's five fulfilment centres today handle pre-portioned ingredients for customer-side cooking, not finished, ready-to-heat meals requiring their own cook-chill or high-pressure-processing line.

### 15.8 With the operational improvements

Layered onto the six-lever operational improvements of section 18, Proposal C's year-1 EBITDA improves from −₹8.35 Cr to −₹4.24 Cr, and year-2 from −₹9.24 Cr to −₹2.85 Cr `[M]`, with cash at month 24 turning positive at ₹2.92 Cr `[M]`, against −₹7.58 Cr with no operational improvements `[M]`. The 24-month revenue advantage against no decision under Proposal C with the operational improvements is +₹7.9 Cr and the EBITDA advantage is +₹14.9 Cr `[M]`, the largest EBITDA improvement of the three operational-improvements comparisons, reflecting Proposal C's higher gross margin doing more work once the base it sells into has stopped leaking as fast.

| Measure | C as written | C with the operational improvements |
|---|---|---|
| EBITDA, year 1 (₹ Cr) | −8.35 | −4.24 |
| EBITDA, year 2 (₹ Cr) | −9.24 | −2.85 |
| Run-rate EBITDA, months 22 to 24 (₹ Cr a year) | −9.89 | −3.19 |
| Cash, month 24 (₹ Cr) | −7.58 | 2.92 |

All figures `[M]`. Even here, the run-rate at month 24 under Proposal C with the operational improvements is a loss of ₹3.19 Cr a year `[M]`, worse than the run-rate of −₹1.69 Cr under the rebuilt core plan `[M]`, the exact tension insight 12 in section 16 develops in full.

### 15.9 Why Proposal C is right in year 2

The gap between Proposal C taken now and Proposal C taken in year 2 is not its economics, which are identical either way; it is sequencing against capacity and cash. Idle fulfilment-centre capacity today sits at 32%, a figure that follows directly from the case's stated 68% utilisation `[C X1]`: 100% − 68% = 32% `[C X1]`. Staging a smaller version of Proposal C, at 80% of its original scale and ₹4 Cr rather than ₹5 Cr `[A23]`, into that idle capacity in the two largest cities first, released only once cash is at least ₹7 Cr and new-cohort LTV-to-CAC is at least 2.2x at month 12, converts an immediate, unconditional ₹5 Cr bet into an option exercised only once the core business has proven it can fund it. Section 24 develops the staged design and the gate in full; this section's conclusion is narrower, that the case for Proposal C's market, 15% annual growth and 45% gross margin, is not in dispute, but the case for funding it now, out of the one initiative the Board can afford, against a base that is still losing 45% of new customers by month 3, is.

Exhibit for the deck: the diagnosis slide's four-cash-lines panel carries Proposal C as written as the line reaching zero earliest, month 15, directly beside the staged, gated version referenced in the appendix slide's options table.

## 16. Options compared: as written A scores lowest, rebuilt it scores highest

**Answer.** Scored on a single rule-based card, weighted toward profit and cash because those are the tests the investors have set `[C K11]`, Proposal A as written scores lowest of the four options evaluated, 2.80 out of 5, and the rebuilt version of the same proposal, the recommended plan, scores highest, 3.70 `[T9]`. The same rule applied to Proposals B and C once the operational improvements are layered under each of them narrows but does not close that gap: with the identical six-lever operational improvements applied uniformly, Proposal C actually earns ₹0.4 to ₹0.5 Cr more cumulative EBITDA over 24 months than the rebuilt core plan, and still ends with less cash, ₹2.9 Cr against ₹5.6 Cr, and a deeper annual run-rate loss, ₹3.2 Cr against ₹1.7 Cr `[M]`. The lesson of that uncomfortable number is that which initiative scores best in isolation is not the same question as which order to do things in. Sequence beats selection.

### 16.1 Placing the three proposals on the Ansoff matrix

Igor Ansoff's 1957 growth matrix sorts a growth move by whether it sells an existing or a new product into an existing or a new market, with risk rising from market penetration through product development and market development to diversification. Applied to HarvestBox's three options, Proposal A sells the existing meal-kit product to the existing subscriber base on new terms, market penetration, the lowest-risk of the four quadrants. Proposal B sells the existing meal-kit product into a new market, grocery retail shoppers who do not subscribe, market development. Proposal C sells a new product, ready-to-heat meals, to the existing subscriber base, product development. None of the three options is diversification, a new product into a new market, which the case's own ₹15 Cr cash constraint `[C K4]` `[C G1]` would make hard to justify in any case, since diversification is Ansoff's highest-risk, highest-capital quadrant.

| Proposal | Product | Market | Ansoff quadrant |
|---|---|---|---|
| A, fix the subscription | Existing (meal kit) | Existing (current subscribers) | Market penetration |
| B, grocery retail | Existing (meal kit) | New (supermarket shoppers) | Market development |
| C, ready-to-eat | New (chilled ready-to-heat meal) | Existing (current app and subscription base) | Product development |

The table shows why the scorecard in section 16.2 scores growth from each option's year-1 revenue added against no decision, in bands that land in the same order as the Ansoff reading above: Proposal A, confined to penetration of an existing base, adds the least new revenue in year one and so cannot score as high on growth as a move into a genuinely new market or product category, however much revenue its own retention improvement generates over the full two years.

### 16.2 The scorecard, with its rule stated

The model scores each option on four dimensions, growth, profit, cash and risk, each on a 1-to-5 scale, weighted at growth 20, profit 30, cash 30, risk 20 `[A24]`, reflecting the assumption's own rationale that the investors' test is profit and survival, not top-line growth for its own sake `[A24]`. The overall score is the weighted average: Score = (Growth × 20 + Profit × 30 + Cash × 30 + Risk × 20) ÷ 100.

Growth is scored by the year-1 revenue each option adds against no decision `[T9]`: below ₹1 Cr scores 1, ₹1 Cr to below ₹3 Cr scores 2, ₹3 Cr to below ₹5 Cr scores 3, ₹5 Cr to below ₹7 Cr scores 4, ₹7 Cr and above scores 5. That ordering lands in the same place as the Ansoff reading in section 16.1: Proposal A, confined to market penetration, scores 1 either way; Proposal C, product development, scores 4; Proposal B, market development, scores 5. Profit is scored by the 24-month EBITDA change against no decision `[T9]`: below ₹0.5 Cr scores 1, ₹0.5 Cr to below ₹1.5 Cr scores 2, ₹1.5 Cr to below ₹2.5 Cr scores 3, ₹2.5 Cr to below ₹3.5 Cr scores 4, ₹3.5 Cr and above scores 5. Cash is scored by the model's own cash-needed figure `[T9]`, inverted because less capital at risk against a ₹15 Cr total scores better: below ₹1.5 Cr scores 5, ₹1.5 Cr to below ₹2.5 Cr scores 4, ₹2.5 Cr to below ₹3.5 Cr scores 3, ₹3.5 Cr to below ₹4.5 Cr scores 2, ₹4.5 Cr and above scores 1. Risk is scored qualitatively from the case's own named risks for each proposal `[C PA4]` `[C PB5]` `[C PC7]`: a reversible, software-and-process change scores 4; a move carrying brand-dilution, retailer-margin or food-safety and cold-chain exposure scores 2.

| Option | Year-1 revenue vs no decision (₹ Cr) | 24-month revenue vs no decision (₹ Cr) | 24-month EBITDA vs no decision (₹ Cr) | Cash needed (₹ Cr) | Growth | Profit | Cash | Risk | Score |
|---|---|---|---|---|---|---|---|---|---|
| A, fix the subscription (as written) | +0.0 | +4.7 | +0.5 | 1.80 | 1 | 2 | 4 | 4 | 2.80 |
| B, grocery retail | +7.6 | +18.0 | +2.0 | 2.98 | 5 | 3 | 3 | 2 | 3.20 |
| C, ready-to-eat | +5.4 | +13.2 | +4.4 | 5.00 | 4 | 5 | 1 | 2 | 3.00 |
| A rebuilt | −0.7 | +5.1 | +14.5 | 1.80 | 1 | 5 | 4 | 4 | 3.70 |

All figures `[T9]`. On 24-month revenue, A rebuilt adds the least of the four options (+₹5.1 Cr against +₹18.0 Cr for B); the weights put profit and cash first `[A24]`. Worked for Proposal A rebuilt, the arithmetic behind the 3.70 is (1 × 20) + (5 × 30) + (4 × 30) + (4 × 20) = 20 + 150 + 120 + 80 = 370, divided by 100 = 3.70 `[T9]`. The table's own rule produces an outcome that is easy to misread at a glance: Proposal A as written scores lowest of the four, 2.80, precisely because it is the only option that is simultaneously low-growth on this scoring, weak on profit, and no different in risk from its own rebuilt version; Proposal A rebuilt scores highest, 3.70, by keeping the same low capital requirement and low risk profile while fixing the profit dimension almost completely.

Stating the band rule in one place, rather than scattering it through the prose above, lets a judge check the scorecard's arithmetic without re-deriving it.

| Dimension | Weight | Score 1 | Score 2 | Score 3 | Score 4 | Score 5 |
|---|---|---|---|---|---|---|
| Growth, year-1 revenue vs no decision | 20 | Below ₹1 Cr | ₹1 Cr to below ₹3 Cr | ₹3 Cr to below ₹5 Cr | ₹5 Cr to below ₹7 Cr | ₹7 Cr and above |
| Profit, 24-month EBITDA vs no decision | 30 | Below ₹0.5 Cr | ₹0.5 Cr to below ₹1.5 Cr | ₹1.5 Cr to below ₹2.5 Cr | ₹2.5 Cr to below ₹3.5 Cr | ₹3.5 Cr and above |
| Cash needed | 30 | ₹4.5 Cr and above | ₹3.5 Cr to below ₹4.5 Cr | ₹2.5 Cr to below ₹3.5 Cr | ₹1.5 Cr to below ₹2.5 Cr | Below ₹1.5 Cr |
| Risk | 20 | Highest named exposure | n/a | n/a | n/a | Reversible, software and process only |

The table shows the scorecard rewards low capital intensity and reversibility as heavily as it rewards profit improvement, by design `[A24]`: the weights of 30 on cash and 30 on profit, against 20 each on growth and risk, encode the plan's own reading of what the investors are actually testing, a credible path to profitability within 24 months on a fixed ₹15 Cr of cash `[C K11]` `[C K4]`, not which option grows the fastest.

### 16.3 The same improvements, compared across options

The scorecard above compares each option as written against the others. A fairer and harder test is to apply the identical six-lever operational improvements from section 18 underneath each of the three options and compare what is left, because the operational improvements themselves, pruning paid acquisition, cutting non-working marketing, lifting gross margin and cutting overheads, are available regardless of which single major initiative the Board funds.

| Measure | Improvements only | B with the operational improvements | C with the operational improvements | A rebuilt (core) |
|---|---|---|---|---|
| EBITDA, year 1 (₹ Cr) | −6.02 | −5.19 | −4.24 | −5.53 |
| EBITDA, year 2 (₹ Cr) | −5.43 | −4.30 | −2.85 | −2.02 |
| Run-rate EBITDA, months 22 to 24 (₹ Cr a year) | −5.77 | −4.65 | −3.19 | −1.69 |
| Cash, month 24 (₹ Cr) | 3.55 | 2.39 | 2.92 | 5.65 |

All figures `[M]`. Reading down the run-rate row, the column that answers "what does this business earn a year once the dust has settled," the rebuilt core plan is the only column that reaches a run-rate loss under ₹2 Cr a year; both B with the operational improvements and C with the operational improvements still run at an annual loss of ₹3 Cr to ₹5 Cr even after the identical improvements are applied.

### 16.4 Insight 12, in full, including its uncomfortable half

Reading the cumulative EBITDA row rather than the run-rate row tells a different, less comfortable story. Summed over both years, the core plan's cumulative EBITDA is −5.53 + −2.02 = −₹7.55 Cr `[M]`, while Proposal C with the operational improvements' cumulative EBITDA is −4.24 + −2.85 = −₹7.09 Cr `[M]`. The difference, −7.09 − (−7.55) = +₹0.46 Cr `[M]`, rounds to the roughly ₹0.4 to ₹0.5 Cr this document's insight register states: with the identical improvements applied, Proposal C actually earns more cumulative EBITDA over 24 months than the rebuilt core plan does. That is true, and stating it plainly, rather than only citing the figures that favour the recommendation, is the test this document holds itself to.

It is also not the end of the comparison. The same two columns diverge sharply on the two tests the Board has actually set, cash and run-rate profitability. Cash at month 24 is ₹2.92 Cr under Proposal C with the operational improvements against ₹5.65 Cr under the rebuilt core plan `[M]`, a difference of ₹5.65 Cr − ₹2.92 Cr = ₹2.73 Cr `[M]` less cash in hand. Run-rate EBITDA at month 24 is −₹3.19 Cr a year under Proposal C with the operational improvements against −₹1.69 Cr a year under the rebuilt core plan `[M]`, a difference of −3.19 − (−1.69) = −₹1.50 Cr `[M]` a year worse. Proposal C with the operational improvements earns slightly more cumulative profit over 24 months and leaves the company with a thinner cash cushion and a deeper ongoing loss rate to climb out of, because its ₹5 Cr of up-front capital `[C PC2]` is spent against a base that, at the point of spending, is still losing customers nearly as fast as it always has.

| Measure | The core plan | C with the operational improvements | Difference |
|---|---|---|---|
| Cumulative EBITDA, 24 months (₹ Cr) | −7.55 | −7.09 | C better by 0.46 |
| Cash, month 24 (₹ Cr) | 5.65 | 2.92 | Core better by 2.73 |
| Run-rate EBITDA, months 22 to 24 (₹ Cr a year) | −1.69 | −3.19 | Core better by 1.50 |

All figures `[M]`. The table carries both halves of insight 12 side by side on purpose: a Board that only reads the first row would conclude Proposal C with the operational improvements is the better bet; a Board that reads all three rows sees that it buys a marginally better 24-month total at the cost of a materially weaker ending cash position and a materially worse run-rate, the two measures the investors' 24-month profitability condition `[C K11]` actually tests.

### 16.5 Why sequence beats selection

The resolution is not to choose between Proposal A rebuilt and Proposal C; this document's recommendation in section 2 stages both, in order. The rebuilt Proposal A, together with the operational improvements, is funded now, inside the ₹1.8 Cr Proposal A already asked for `[C PA2]`. A staged, 80%-scale version of Proposal C, at ₹4 Cr rather than ₹5 Cr `[A23]`, is released in year 2 only if cash is at least ₹7 Cr and new-cohort LTV-to-CAC is at least 2.2x at month 12, a gate the base case clears with room: modelled cash at month 12 under the core path is ₹7.67 Cr `[M]`, above the ₹7 Cr gate, and modelled LTV-to-CAC at month 12 is 2.74x `[M]`, above the 2.2x gate. Clearing that gate turns the staged, gated version of Proposal C into the "Recommended plan, base" scenario, whose 24-month outcome is a run-rate of +₹0.10 Cr a year `[M]` and a break-even month of 21 `[M]`, strictly better on every measure that matters to the Board than taking the full, unstaged version of Proposal C now.

The sequencing argument holds across more than the base case. The model's bear and bull scenarios, built on named, differing inputs rather than a single point estimate, test whether the staged design still makes sense when the world turns out worse or better than expected.

| Scenario | EBITDA, year 1 (₹ Cr) | EBITDA, year 2 (₹ Cr) | Break-even month | Cash, month 24 (₹ Cr) |
|---|---|---|---|---|
| Bear, no response to a month 7 shortfall | −8.25 | −7.65 | none | −2.70 |
| Bear, with the month 7 contingency | −6.18 | −5.56 | none | 1.46 |
| Base (the recommended plan, staged) | −5.53 | −0.75 | 21 | 2.89 |
| Bull | −4.78 | +2.48 | 14 | 5.90 |

All figures `[M]`. Even in the bear case, the staged design with its month-7 contingency, halving paid acquisition and non-working marketing and cutting overheads a further 15% `[A25]`, keeps cash positive through month 24, while the same bear conditions with no response at all run cash negative by month 20 `[M]`. In the bull case, the staged design reaches break-even four months earlier than the base case, in month 14 `[M]`, because a faster-than-expected improvement in retention, referral and conversion accelerates the same gate rather than requiring a different plan. The staged sequence is not a bet that the base case is the only outcome that matters; it is a design that degrades gracefully in the bear case and accelerates cleanly in the bull case, which a single, unstaged commitment of ₹5 Cr to Proposal C on day one cannot do, because that capital is spent before any scenario has had the chance to reveal itself.

The uncomfortable half of insight 12 is, read this way, an argument for the staging design rather than against it. Proposal C's economics are good enough that they are worth having; they are not good enough to justify spending ₹5 Cr of a ₹15 Cr cash balance on them before the base they depend on has stopped leaking. Doing Proposal A rebuilt first does not merely avoid that mistake; it is what makes the later, smaller, gated version of Proposal C cheaper to run and more certain to work, because it sells into a base that, by month 12 of the core plan, is retaining new cohorts at a materially higher rate than today. Selection asks "which one option is best." Sequence asks "in what order do these options stop competing with each other for the same scarce cash and attention," and on HarvestBox's own numbers, that second question has a clearer answer than the first.

Conclusively, the scorecard's own rule says Proposal A as written is the weakest of the four cards on the table and Proposal A rebuilt is the strongest; the same operational-improvements comparison says Proposal C is a genuinely close second on cumulative profit alone, but a clear third on the two tests, cash and run-rate, that the investors actually set; and the honest reading of both results together is not that one proposal beats the others in isolation, but that funding the rebuild first and staging ready-to-eat behind a cash-and-retention gate in year 2 captures most of Proposal C's profit advantage without its cash and timing risk. That is this document's recommendation, and nothing in sections 13 to 16 moves it.

Exhibit for the deck: the strategic-recommendation slide carries the "do not" and "do" cards from section 2 beside a condensed version of the scorecard heat grid above, with insight 12's two-row comparison shown as a single annotated callout rather than a full table, closing on the same "Conclusively" line this section ends on.

## 17. Proposal A, rebuilt: five features, each redesigned to protect order frequency

**Answer.** Proposal A as written lists five features (skip or pause without penalty, choose 2 or 4 meals, swap recipes, access a larger menu, refer friends for rewards) and none of them carries a limit `[C PA1]`. The rebuilt Proposal A keeps every one of the five jobs the case asks for and adds a rule to each: a return date on every pause, two more price points rather than a discount, a swap confined to one ingredient family, a wider menu built from the same ingredient base, and a referral paid only when the friend proves they are a customer, not a sign-up. Each rule exists because the case itself names the risk that an unrestricted version of the feature would not survive: customers "may use flexibility to order less frequently" `[C PA4]`. This section specifies the five features one by one, states what each guards against, classifies each with the Kano model, prices the new plan ladder against the case's own benchmarks, and names what the team chose not to build in the first release.

### 17.1 Feature 1: skip or pause, free, with a floor

The case's feature is "skip or pause orders without penalty" `[C PA1]`. Written with no limit, a customer can skip every box, every month, forever, and the subscription earns nothing while costing the same support and software overhead. The rebuilt Proposal A keeps the promise free and keeps it penalty-free, and adds one rule: a customer may skip or pause, but across any rolling three-month window at least two boxes must ship. A customer who has already skipped one box in a rolling three-month window cannot skip a second if that would reduce shipments below two. The app explains the next required shipment and offers date changes only within the window. Cancellation remains available at any time and is never gated behind this floor. The floor caps the mathematical ceiling on how much a cohort can skip (one-in-three boxes in theory, or 33% of due boxes) while leaving the headline promise of the case intact: nothing is penalised, nothing requires a call to customer support, and nothing is hidden in small print.

| Element | Specification |
|---|---|
| Customer-facing wording | "Skip or pause any box, free, any time. We only ask that you take at least 2 boxes in any 3 months, so we can keep your recipes, pricing and delivery slot ready." |
| Rule | Floor of 2 boxes shipped per rolling 3-month window per subscription; a second skip is refused if it breaches the floor; rescheduling cannot bypass it |
| Edge case 1 | A customer who has skipped 1 of 3 and requests another skip sees the required shipment date; changing that date is permitted only if 2 boxes still ship inside the window |
| Edge case 2 | A customer who cancels mid-window keeps their existing floor status; cancelling is never gated behind the floor, only skipping is |
| Edge case 3 | A customer on the family plan (4 meals a week, per 17.3) has the same 2-in-3 floor applied at the subscription level, not per meal size, so switching plan size never resets or breaches the floor |
| Metric that watches it | Boxes skipped, percentage of boxes due, tracked monthly; the case's own stated risk `[C PA4]` is directly this metric, modelled at 5% in the base case, 10% in the bear case and 3% in the bull case `[A08]` |
| Model input | A08 |

*Floor = the minimum shipped-box requirement across a rolling window. The case's own worry that "customers may use flexibility to order less frequently" `[C PA4]` is the reason this feature carries a numbered metric rather than being left to run free; this paragraph's reference to the 5%, 10% and 3% figures is an assumption, stated once.*

The retention-gain cancellation threshold is 12.6% of boxes due `[M T2]`: at that rate, lost box revenue cancels the standalone retention uplift. This is not the profitability threshold for the full rebuild. The base run-rate turns negative at 5.6% skips `[M T7]`, leaving only 0.6 percentage points of headroom above the assumed 5% `[A08]`. At 5%, the retention step contributes ₹0.31 Cr to the annual EBITDA bridge `[T6]`. Across the tested 12% to 0% range, run-rate EBITDA moves from −₹1.14 Cr to +₹0.99 Cr `[T7]`; the plan therefore needs close monitoring rather than a claim of comfortable safety.

### 17.2 Feature 2: choose 2 or 4 meals, priced as a ladder, not a discount

The case's feature is "choose 2 or 4 meals" `[C PA1]`, offered beside the existing 3-meal box. Written as a plain size choice with no price design, a 2-meal option that simply halves the ₹5,200 box price to roughly ₹3,467 would sit almost on top of the ₹3,500 private-label kits the case names as a competitive threat `[C M3]`, discounting HarvestBox's own brand to match a competitor it should instead be differentiating against. The rebuilt Proposal A instead treats the three sizes as a price ladder with their own per-meal economics, not a percentage-off exercise, detailed with the arithmetic in section 17.3.

| Element | Specification |
|---|---|
| Customer-facing wording | "Pick your week: 2 meals for smaller households or trial customers, 3 meals (our classic box), or 4 meals for families and bigger appetites." |
| Rule | Three fixed plan sizes, each with its own weekly meal count and total price (17.3); plan size can be changed from one billing cycle to the next, with no fee |
| Edge case 1 | A customer moving down in size mid-subscription keeps their current recipe selections for the boxes already confirmed; only the next unconfirmed box reflects the new size |
| Edge case 2 | The 2-meal entry plan is capped at a maximum of 3 consecutive months before the customer is prompted (not forced) to move to the 3-meal plan, because the entry plan's gross margin is thinner (17.3) and an indefinite 2-meal subscriber is a worse unit economically than a 3-meal one |
| Edge case 3 | Family plan (4 meals) customers get first access to new recipe drops, a non-price lever to reward the highest-value plan size without discounting it |
| Metric that watches it | Blended order value (AOV), modelled at ₹5,091 against the case's stated ₹5,200 `[C U1]` `[A09]`, tracked by plan-size mix monthly |
| Model input | A09 |

*AOV = average order value. The plan-size mix (20% entry, 65% classic, 15% family) is a team assumption, stated once, chosen to keep the blended order value close to the case's current ₹5,200 `[C U1]` rather than eroding it, because the entry plan exists to answer the "too expensive" exit reason `[C W2]`, not to cut the average price HarvestBox already earns.*

### 17.3 The price ladder, worked in full

Three plan sizes sit on the ladder: an entry plan at ₹3,600 for 2 meals a week, the unchanged classic plan at ₹5,200 for 3 meals a week `[C U1]`, and a family plan at ₹6,600 for 4 meals a week. Each is priced to land inside the case's own stated meal-kit price band of ₹350 to ₹650 a meal `[C M1]` while sitting clearly above the ₹3,500 private-label kits the case names as a threat `[C M3]`, because the entry plan is designed to compete on flexibility and portion size, not to race a private-label competitor to the bottom on price.

| Plan | Weekly meals | Weeks a month | Meals a month | Total price a month | Price per meal | Positioned against |
|---|---|---|---|---|---|---|
| Entry | 2 | 4 | 8 | ₹3,600 | ₹450 | The ₹3,500 private label `[C M3]`, answered with more flexibility and a brand customers already know |
| Classic (unchanged) | 3 | 4 | 12 | ₹5,200 | ₹433 | HarvestBox's own current box `[C U1]`, held flat |
| Family | 4 | 4 | 16 | ₹6,600 | ₹412 | Multi-person households priced out of three separate entry-plan subscriptions |

*AOV = average order value. "Price per meal" is total price divided by meals a month, each falling inside the case's stated ₹350 to ₹650 meal-kit band `[C M1]`. The entry plan's ₹450 a meal and the family plan's ₹412 a meal are both taken directly from plan 5, assumption A09's rationale, and this paragraph's reference to them is an assumption, stated once.*

The weighted average order value under the assumed 20% entry, 65% classic, 15% family mix `[A09]` is 0.20 × ₹3,600 + 0.65 × ₹5,200 + 0.15 × ₹6,600 = ₹720 + ₹3,380 + ₹990 = ₹5,090, which the model carries at ₹5,091 after rounding through the monthly cohort build `[A09]`. This is 2.1% below the case's current ₹5,200 `[C U1]`, a worked example of the trade-off at the centre of the whole proposal: the ladder exists to answer "too expensive," the single largest stated exit reason after rigidity at 27% of exits `[C W2]`, and a small reduction in blended order value is the acknowledged cost of answering it, more than offset in the model by the extra customers the entry price and the skip promise keep past month 3 (section 5 derives this in full). The classic plan is held exactly flat at ₹5,200 so that existing subscribers see no change in their own price; only new sign-ups and self-selecting downgrades move the blend.

### 17.4 Feature 3: swap recipes, inside one ingredient family

The case's feature is "swap recipes" `[C PA1]`, offered with no stated limit. An unlimited swap, across the full menu, means a customer could in principle request any of roughly 40 recipes (17.5) against ingredients bought for a different one, multiplying the ingredient mix the fulfilment centre has to hold on any given week and working directly against the gross-margin lever that targets a reduction in food waste from 6% of ingredient purchases `[C X2]` toward about 4% `[A18]`. The rebuilt Proposal A keeps the swap, free, same-day where stock allows, and confines it to recipes inside the same ingredient family as the one being replaced.

| Element | Specification |
|---|---|
| Customer-facing wording | "Not feeling tonight's recipe? Swap it free for another dish from the same ingredient family, no extra charge, no extra delivery." |
| Rule | Swap limited to recipes sharing at least 70% of their core ingredient list with the original (an internal menu-engineering threshold, not a customer-facing number) |
| Edge case 1 | If no same-family alternative is available that week, the system offers the nearest cross-family recipe and flags it to the culinary team as a menu-planning gap, rather than silently expanding the swap rule |
| Edge case 2 | A customer with a declared allergy or dietary flag is only ever shown swaps that also respect that flag, even within the same ingredient family |
| Edge case 3 | Swaps requested after the fulfilment centre's weekly ingredient order is locked are queued for the following week rather than triggering an emergency reorder |
| Metric that watches it | Ingredient stock-keeping units (SKUs) carried per fulfilment centre per week, and food waste as a percentage of ingredient purchases, both tracked against the 4% target under A18 |
| Model input | A18 (shared with the margin levers in section 18) |

### 17.5 Feature 4: a larger menu, built from the same ingredients

The case's feature is "access a larger menu" `[C PA1]`, the direct answer to "menu becomes repetitive," 18% of stated exits `[C W3]`. A larger menu built the naive way, with new recipes drawing on new ingredients, multiplies stock-keeping units (SKUs) and works against the same waste-reduction lever as an unrestricted recipe swap. The rebuilt Proposal A instead targets a menu of about 40 recipes built from a shared pool of about 120 ingredients, so that variety on the customer's plate does not translate one-for-one into variety on the fulfilment centre's shelves: a 120-ingredient pantry supporting 40 recipes means each recipe draws on roughly a third of the available ingredient set on average, with deliberate overlap engineered into the menu-planning process rather than left to chance.

| Element | Specification |
|---|---|
| Customer-facing wording | "Over 40 recipes to choose from each season, refreshed regularly, so the same three meals never show up twice in a row." |
| Rule | Target menu size approximately 40 live recipes at any time, drawn from a shared ingredient pool of approximately 120 ingredients, with new recipes vetted for ingredient overlap with the existing menu before being added |
| Edge case 1 | A seasonal recipe using an ingredient outside the core 120 is run as a limited-time addition, capped at a small share of weekly orders, so it never becomes a permanent SKU burden |
| Edge case 2 | Recipes with the lowest repeat-order rate are rotated out on a quarterly cycle to keep the active 40 fresh without the total count drifting upward over time |
| Edge case 3 | A customer who has ordered the same recipe three times in the last eight boxes is shown a "try something new" prompt built from recipes inside their ingredient-family preferences, a nudge rather than a restriction |
| Metric that watches it | Distinct recipes ordered per customer per quarter; menu-repetition complaints as a share of support contacts |
| Model input | Shares the margin-lever target under A18; no separate model input of its own |

### 17.6 Feature 5: refer a friend, paid on proof, not on sign-up

The case's feature is "refer friends and earn rewards" `[C PA1]`. Paid at sign-up, a referral reward pays for a friend who signs up once and never orders, which is close to the single costliest failure mode the case describes elsewhere: acquisition spend going to customers who do not stay. The rebuilt Proposal A pays ₹1,000 to each side, but only once the referred friend has taken their third box `[A11]`, which both delays the cost until the referred customer has crossed the point in the survival curve where the case's own numbers show most of the drop-off has already happened (45% gone by month 3 `[C R2]`) and aligns the incentive with retention rather than sign-up.

| Element | Specification |
|---|---|
| Customer-facing wording | "Invite a friend. When they take their third box, you both get ₹1,000 off your next one." |
| Rule | ₹1,000 credit to referrer and ₹1,000 credit to referred friend, both triggered only on the referred friend's third shipped box, total referral cost ₹2,000 a converted referral `[A11]` |
| Fraud guard 1 | One referral code per subscription, tied to a verified payment method, not to an email address alone, to raise the cost of creating throwaway accounts to farm the reward |
| Fraud guard 2 | A referred account that cancels and re-signs up under a different identifier within 12 months is flagged for manual review before any further referral reward is paid against it |
| Fraud guard 3 | Referral rewards are capped at a maximum number of successful referrals a quarter per subscription, so the mechanic cannot be turned into a side income stream rather than a genuine word-of-mouth channel |
| Metric that watches it | Referral share of new sign-ups, modelled at 20% by month 12, 10% in the bear case and 28% in the bull case `[A10]` |
| Model input | A10, A11 |

*The design choice to pay on the third box rather than on sign-up draws on one piece of outside evidence, used here only as rationale for a design decision, never as a HarvestBox figure. A study of 5,181 referred customers at a German retail bank found that referred customers were about 18% less likely to defect than otherwise similar non-referred customers who were still active, and about 22% less likely to leave within the first 21 months `[S33]`. The same study found the referral programme's net cost (a flat reward per referral) was recovered within the observation window through this lower attrition, which is the logic behind tying HarvestBox's own reward to a proof point (the third box) rather than the moment of sign-up: a reward paid early buys sign-ups, a reward paid on proof of early retention buys the thing that study found referred customers actually deliver.*

The referral channel carries the single largest range in the sensitivity table among the operational improvements' revenue-facing inputs: moving the referral share of sign-ups from 10% to 30% moves run-rate EBITDA from −1.12 ₹ Cr to +1.65 ₹ Cr, a ₹2.77 Cr swing `[T7]`, wider than any other single input the model tests. This is also the input with the thinnest supporting evidence behind it: the only directly comparable academic study found (Schmitt, Skiera and Van den Bulte, 2011) is a single European retail-banking programme, not a food subscription, and no Indian or meal-kit-specific referral benchmark could be verified in this research round. Section 20 returns to this point in full.

### 17.7 Kano classification of the five features

Not every feature in the rebuild earns the same weight in a customer's decision to stay. The Kano model separates features that remove dissatisfaction (must-haves) from features that add satisfaction in proportion to how well they are delivered (performance features) from features a customer does not expect but is pleased to find (delighters).

| Feature | Kano category | Why |
|---|---|---|
| Skip or pause with a floor | Must-have | The case's single largest stated exit reason is rigidity (34% `[C W1]`); its absence causes strong dissatisfaction, its presence is simply expected, not celebrated |
| Price ladder (2, 3, 4 meals) | Performance | The second-largest exit reason is price (27% `[C W2]`); more choice at the right price point raises satisfaction roughly linearly with how well the entry plan is priced against the ₹3,500 private label `[C M3]` |
| Recipe swap within family | Performance | Addresses food waste and portion complaints (11% `[C W4]`) in proportion to how reliably a swap is honoured; a swap that frequently fails to find a match disappoints more than it is expected to |
| Larger menu (approximately 40 recipes) | Delighter, becoming a must-have over time | Answers menu repetition (18% `[C W3]`); a customer does not expect a wide menu on sign-up, but once experienced, its absence over time would be felt as a regression, the Kano model's "today's delighter is tomorrow's must-have" dynamic |
| Referral, paid on the third box | Delighter | Not a stated exit reason at all; it is a growth mechanic layered on top of the product experience, valuable to HarvestBox but not something a customer expects or is dissatisfied by its absence |

This classification is this document's own judgement applied to the case's own exit-reason shares, not a case-stated ranking, and the word "assumption" applies to every row's category label.

### 17.8 What is deliberately not built

A rebuild that tried to answer every stated customer want in one release would blur the floor's purpose and widen the menu and SKU count beyond what the gross-margin levers in section 18 can absorb. Four things the case's own customer research and exit reasons could plausibly justify are deliberately left out of this release.

| Not built in this release | Why it is excluded | What would bring it back |
|---|---|---|
| Fully personalised recipe selection (AI-matched to past orders) | Adds engineering cost outside the rebuilt Proposal A's ₹1.8 Cr budget `[C PA2]` and does not map to any of the five stated exit reasons directly | A future release, funded separately, once the core floor and ladder are proven in the pilot (section 22) |
| A loyalty-points programme on top of the referral credit | Risks duplicating the referral mechanic's cost without a distinct retention signal to justify it | Reconsidered only if referral conversion (A10) underperforms its bear case and a second lever is needed |
| Grocery add-ons sold alongside the box (adjacent to Proposal B) | Out of scope for this initiative; Proposal B is not the funded option in this plan (section 16) | Only if the Board separately funds a version of Proposal B after the month 12 gate |
| A standalone ready-to-eat sub-range inside the rebuilt Proposal A's app | This is Proposal C, staged for year 2 behind the month 12 gate, not bundled into the rebuilt Proposal A (section 24) | At the month 12 gate, if cash is at least ₹7 Cr and LTV to CAC of new cohorts is at least 2.2x |

Exhibit for the deck: the five-feature table with its Kano tags and the price ladder's per-meal arithmetic, on the strategic recommendation slide.

## 18. Operational improvements: six levers, each with its arithmetic and its owner

**Answer.** Alongside the rebuilt Proposal A, the case explicitly allows "smaller operational improvements," provided they fit inside HarvestBox's financial constraints `[C G2]`. This document calls that bundle the operational improvements: six levers, none requiring new capital beyond what the rebuilt Proposal A already spends, together worth ₹6.75 ₹ Cr a year against the 2025 loss once headwinds are netted out `[T6]` (1.71 non-working marketing, 0.62 pruning, 1.25 overheads, 1.53 margin, minus 1.64 of headwinds leaves a net 1.47, before the rebuilt Proposal A's own retention and referral effects are added separately). Three levers cut cost (pruning, non-working marketing, overheads), two lift revenue quality without new spend (conversion, win-back), and one lifts gross margin through five smaller changes rather than one large one. Every lever traces to a numbered assumption, and every rupee it costs or saves is shown against the ₹15 Cr the case allows the team to spend `[C K4]` `[C G7]`.

### 18.1 The operational improvements mapped to the acquisition, activation, retention, referral, revenue (AARRR) funnel

Acquisition, activation, retention, referral, revenue (AARRR), also known as pirate metrics, separates a subscription business into the stage where a customer is found, the stage where they have a first good experience, the stage where they keep coming back, the stage where they bring others, and the stage where the business is paid. HarvestBox's own numbers make clear where the funnel leaks hardest: 45% of a cohort is gone by month 3 `[C R2]`, which is a retention failure, not an acquisition one, and the case's own CAC of ₹7,000 `[C U3]` is being spent into that leak rather than against it.

| AARRR stage | What the case shows | Operational-improvements lever that answers it |
|---|---|---|
| Acquisition | ₹8.31 Cr a year of acquisition spend is implied by the stated CAC and new-customer run rate `[M]`, against a further ₹4.29 Cr of marketing the CAC figure does not explain `[M]` | Prune the costliest paid decile (18.2); cut non-working marketing by 40% (18.3) |
| Activation | Website traffic of 14 lakh visits a month converts to a first order at 2.8% `[C X4]` `[C X5]`, no activation-specific case metric exists beyond this | Lift conversion to 3.3% once the entry price and skip promise are on the first page (18.4) |
| Retention | 45% gone by month 3, 81% gone by month 12 `[C R1]` to `[C R4]` | The rebuilt Proposal A (section 17) carries this stage; the operational improvements' own lever is win-back of lapsed accounts (18.5) |
| Referral | No referral mechanic exists in the current product | Referral, paid on the third box (section 17.6); not an operational-improvements lever, carried in the rebuilt Proposal A |
| Revenue | Gross margin has fallen from 38% to 31% in four years `[C P22]` `[C P25]` | Five gross-margin levers worth 4.0 points (18.6); overheads down 12% (18.7) |

*AARRR = acquisition, activation, retention, referral, revenue, a framework for separating a subscription funnel into the stage at which growth or leakage happens. The operational improvements deliberately do not touch retention or referral directly; those two stages are carried entirely by the rebuilt Proposal A (section 17), and the word "assumption" applies to the mapping of which lever answers which stage, which is this document's own organising choice rather than a case-stated structure.*

A snapshot of the funnel today, before any lever is pulled, makes clear why the operational improvements spend almost nothing on the acquisition stage itself and almost everything downstream of it: the stage that is cheapest to fix (revenue quality, through conversion and win-back) is also the stage the case gives the least direct evidence about, while the stage with the most case evidence (retention) is already fully owned by the rebuilt Proposal A rather than the operational improvements.

| AARRR stage | Current reading | Who owns the fix |
|---|---|---|
| Acquisition | ₹7,000 blended CAC `[C U3]`, ₹8.31 Cr a year of CAC-explained spend `[M]` `[T2]` | Operational-improvements levers 18.2 and 18.3 |
| Activation | 14 lakh visits a month at 2.8% conversion `[C X4]` `[C X5]`; the implied 39,200 first orders a month is not measurable from case data, since the web funnel and revenue do not reconcile (section 4) `[T2]` | Operational-improvements lever 18.4 |
| Retention | 55% at month 3, 19% at month 12 `[C R2]` `[C R4]` | The rebuilt Proposal A (section 17), not an operational-improvements lever |
| Referral | Not measured today, no mechanic exists | The rebuilt Proposal A (section 17.6), not an operational-improvements lever |
| Revenue | Gross margin 31%, marketing 30% of revenue `[C P25]` | Operational-improvements levers 18.6 and 18.7 |

*This table restates the same five stages as the table above, read as a current-state snapshot rather than as a lever map, to show that two of the five stages (retention and referral) carry no operational-improvements-specific lever at all; both are the rebuilt Proposal A's responsibility, and the operational improvements' six levers sit entirely inside acquisition, activation and revenue.*

### 18.2 Lever 1: prune the costliest paid acquisition

The case states CAC at ₹7,000 as a single blended figure `[C U3]`. The model's assumption is that this blend hides a decile of paid customers acquired at roughly twice the average cost, and that pruning that decile, which the model treats as 10% of paid volume `[A15]`, lowers the remaining blended CAC to 0.89 of today's figure `[A16]`. The arithmetic behind that multiplier: if the blended ₹7,000 `[C U3]` is a 90:10 mix of a cheaper majority and the costly decile, and the decile costs ₹14,000, then 0.9 × x + 0.1 × ₹14,000 = ₹7,000, so 0.9x = ₹7,000 − ₹1,400 = ₹5,600, and x = ₹6,222. Dividing ₹6,222 by the original ₹7,000 gives 0.889, which the model rounds to the 0.89 pruning multiplier `[A16]`. The ₹14,000 figure for the pruned decile is itself chosen because it exceeds the case's own stated lifetime gross profit of about ₹10,900 `[C U5]` by ₹3,100: a customer acquired at ₹14,000 never pays back under the case's own unit economics, pruning that decile removes acquisition spend that was never going to be recovered rather than cutting spend that works.

| Element | Specification |
|---|---|
| Model input | A15 (10% of paid volume pruned), A16 (resulting CAC multiplier 0.89) |
| Arithmetic | 0.9 × ₹6,222 + 0.1 × ₹14,000 = ₹5,600 + ₹1,400 = ₹7,000 `[C U3]`; ₹6,222 ÷ ₹7,000 = 0.889 ≈ 0.89 `[A16]` |
| What it saves | Contributes 0.62 ₹ Cr a year to the bridge ("Prune paid channels above LTV") `[T6]` |
| What it does not touch | The 90% of paid volume that already pays back inside the case's own CAC and lifetime gross profit figures is untouched |
| Owner | Head of growth marketing, reporting the pruned decile's CAC and conversion quarterly to the Board alongside the blended CAC KPI (section 23) |

### 18.3 Lever 2: cut non-working marketing by 40%

HarvestBox spent ₹12.60 Cr on marketing in 2025 `[T1]`. The model's calibration shows that only ₹8.31 Cr of this is explained by the stated CAC of ₹7,000 `[C U3]` multiplied by the modelled new-customer run rate `[M]`: ₹7,000 × 11,878 new customers a year ÷ ₹1,00,00,000 per ₹ Cr ≈ ₹8.31 Cr `[M]` `[T2]`. The remainder, ₹12.60 Cr − ₹8.31 Cr = ₹4.29 Cr `[M]` `[T2]`, is marketing spend the CAC figure does not explain: brand campaigns, undifferentiated display spend, sponsorships and similar lines that do not show up in a per-customer acquisition cost. The operational improvements cut 40% of this unexplained ₹4.29 Cr `[A17]`: ₹4.29 Cr × 0.40 = ₹1.71 Cr `[T6]`, exactly the figure the bridge carries as "Cut non-working marketing 40%."

| Element | Specification |
|---|---|
| Model input | A17 (40% cut in the base case, 25% in the bear case) |
| Arithmetic | ₹12.60 Cr total marketing `[T1]` − ₹8.31 Cr CAC-explained acquisition `[M]` = ₹4.29 Cr non-working `[T2]`; ₹4.29 Cr × 0.40 = ₹1.71 Cr saved `[T6]` |
| What it saves | 1.71 ₹ Cr a year `[T6]` |
| Risk | Non-working marketing includes brand-building spend that may support conversion and referral indirectly even if it cannot be traced to a specific acquired customer; the 40% cut assumes this indirect effect is small, an assumption stated once |
| Owner | Chief marketing function (or, pending a dedicated hire, the head of growth marketing dual-hatting), reporting marketing as a percentage of revenue quarterly (section 23) |

### 18.4 Lever 3: lift website conversion from 2.8% to 3.3%

The case states website traffic at 14 lakh visits a month `[C X4]` and conversion to a first order at 2.8% `[C X5]`. At that rate, first orders a month are 14,00,000 × 0.028 = 39,200 `[M]` `[T2]`, a figure the model records separately from the roughly 990 net new customers a month the revenue run rate implies `[M]`, a gap discussed fully in section 4 of this document and not reopened here. What the operational improvements lever changes is the conversion rate itself, not the traffic: putting the entry plan's ₹3,600 price point and the skip-or-pause-with-a-floor promise on the website's first screen removes two of the largest stated reasons a visitor might bounce before signing up (price at 27% and rigidity at 34% of eventual exits, which plausibly also deter sign-up, not only retention `[C W1]` `[C W2]`) `[A14]`. The operational improvements targets 3.3% by month 12, against 3.0% in the bear case and 3.5% in the bull case `[A14]`.

| Element | Specification |
|---|---|
| Model input | A14 (2.8% to 3.3% base, 3.0% bear, 3.5% bull) |
| Arithmetic | At 3.3%: 14,00,000 × 0.033 = 46,200 website orders a month `[A14]`, against 39,200 today `[M]` `[T2]`, a rise of 7,000 orders a month on unchanged traffic |
| What it changes | The conversion rate alone; traffic (14 lakh visits `[C X4]`) is held constant in the model, an assumption stated once |
| Bridge contribution | Its own bridge step, "The rebuilt Proposal A: website conversion," worth +1.07 ₹ Cr a year `[T6]`, the step in the whole bridge resting on no outside evidence at all `[A14]` |
| Owner | Head of product, jointly with the growth marketing function, since the change is a website and app copy change, not a media-spend change |

### 18.5 Lever 4: win back lapsed accounts

About 34% of the case's own stated exits are attributed to rigidity `[C W1]`, a reason the current product no longer has once the rebuilt Proposal A's floor exists. The win-back lever targets exactly these lapsed accounts: customers who left for a reason the rebuilt product now answers. The model assumes 40 win-backs a month from month 4 onward in the base case, 20 a month in the bear case `[A12]`, each costing ₹800 in the form of a credit and a targeted message rather than a full new acquisition cost `[A13]`, against a blended CAC of ₹7,000 for a wholly new customer `[C U3]`.

| Element | Specification |
|---|---|
| Model input | A12 (40 win-backs a month base, 20 bear), A13 (₹800 cost per win-back) |
| Arithmetic | 40 win-backs × ₹800 = ₹32,000 a month, or ₹0.032 Cr × 12 = ₹0.384 Cr a year in win-back cost alone, well under one-tenth of a single average month's full acquisition spend of ₹8.31 Cr ÷ 12 ≈ ₹0.69 Cr `[M]` `[T2]` |
| What it targets | Customers who left specifically for rigidity (34% of stated exits `[C W1]`), offered the pause feature itself as the win-back message |
| Bridge contribution | Its own bridge step, "The rebuilt Proposal A: win-back of lapsed customers," worth +0.50 ₹ Cr a year `[T6]`, built from the case's own count of customers who left for rigidity `[A12]` |
| Owner | A retention or customer success function (newly scoped under this plan, not previously named in the case), reporting win-back volume and cost against target monthly |

### 18.6 Lever 5: five gross-margin levers worth 4.0 points

Gross margin fell from 38% in 2022 to 31% in 2025 `[C P22]` `[C P25]`, a drop of seven points over the four years the case documents. The operational improvements do not try to recover all seven; they target 4.0 points of recovery over 15 months `[A18]`, landing at roughly 35%, which is below the 2023 level of 36% `[C P23]` and deliberately conservative against the full seven-point loss. The 4.0 points are built from five named sub-levers, each with its own point value, summing to the target.

| Sub-lever | Point value | What it is |
|---|---|---|
| Waste reduction | +0.8 | Food waste from 6% of ingredient purchases `[C X2]` toward about 4%, enabled by the shared-ingredient menu (section 17.5) |
| Fulfilment-centre absorption | +1.2 | Fixed fulfilment-centre costs spread over more volume as the win-back and conversion levers (18.4, 18.5) lift box counts, with utilisation starting from 68% `[C X1]` |
| Shared-ingredient menu and buying | +1.2 | Fewer distinct SKUs (section 17.5) allow larger per-ingredient purchase volumes and better buying terms |
| Packaging | +0.3 | Smaller, standardised packaging formats across the new plan ladder (section 17.3) rather than three bespoke formats |
| Less first-box discounting | +0.5 | The entry plan's lower headline price (₹3,600, section 17.3) reduces the need for a first-box discount to win a price-sensitive sign-up |
| Total | +4.0 | `[A18]` |

*Point values are in percentage points of gross margin, each a team assumption and together summing to the +4.0 point target `[A18]`; the bear case holds this at +2.5 points and the bull case at +5.0 points. This paragraph's reference to the five sub-lever values is an assumption, stated once.*

The model shows the full 4.0-point target contributing 1.53 ₹ Cr a year to the bridge once blended across the whole customer base `[T6]`, the single largest cost-side contribution of any lever in the operational improvements, larger than pruning, non-working marketing or overheads individually.

### 18.7 Lever 6: overheads down 12%, anchored to the lease

Other operating cost is not where the case's loss sits: it fell from 28% of revenue in 2022 to 23% in 2025 `[T1]`, already a declining share even without deliberate operational improvements, which is insight 3 from this plan's argument (section 3.3) carried forward here. The overheads lever targets a further 12% cut `[A19]`, anchored to one concrete, case-stated figure: the annual head-office lease of ₹1 Cr `[C X3]`. The plan moves head-office functions into spare capacity at the fulfilment centres, which the case states run at 68% utilisation `[C X1]`, freeing the leased space rather than renewing it, paired with a hiring freeze allowed to run through normal staff attrition rather than layoffs.

| Element | Specification |
|---|---|
| Model input | A19 (12% cut base, 5% bear, 12% bull, the bull and base cases coinciding) |
| Anchor figure | ₹1 Cr annual head-office lease `[C X3]`, the single largest identifiable overhead line the case discloses |
| Mechanism | Head office relocated into fulfilment-centre space already running at 68% utilisation `[C X1]`; hiring freeze with normal attrition, no stated layoffs |
| What it saves | 1.25 ₹ Cr a year `[T6]` |
| Owner | Head of operations or facilities, jointly with finance for the lease exit and the hiring-freeze policy |

### 18.8 How the six levers fit inside the case's ₹15 Cr cash test

The case requires that any smaller operational improvement "explain how these fit within the company's financial constraints" `[C G2]`, and separately requires every recommendation to "remain realistic within the company's ₹15 crore cash position" `[C G7]`. None of the six improvement levers requires new capital; all six are cost and process changes funded from the existing cost base, which is why the ₹15 Cr cash table in section 19 shows only the rebuilt Proposal A's ₹1.8 Cr build cost and the staged ready-to-eat's ₹4.0 Cr as discrete capital uses, with the operational improvements levers folded into the operating loss line rather than listed as a separate spend.

| Use of the ₹15 Cr | ₹ Cr | Is this an operational-improvements lever |
|---|---|---|
| The rebuilt Proposal A build | 1.80 | No, this is the rebuilt Proposal A's feature build itself (section 17) |
| Year 1 operating loss | 5.53 | Partly: The operational improvements' savings are already netted into this loss figure |
| Staged ready-to-eat, gated | 4.00 | No, this is the year 2 contingent launch (section 24) |
| Year 2 operating loss | 0.75 | Partly: The operational improvements' full-year run rate is netted into this loss figure |
| Cash left at month 24 | 2.92 | n/a |
| Total | 15.00 | `[T10]` |

The operational improvements levers themselves never appear as a line item because none of them costs money up front: pruning paid acquisition reduces a variable spend, cutting non-working marketing reduces a variable spend, win-back costs ₹800 a conversion funded from the same marketing budget, the margin levers are process and buying changes, and the overheads lever exits a lease rather than signing a new one. The one small exception is the rebuilt Proposal A's own running cost once live, modelled at ₹0.25 Cr a year for support and menu development `[A20]`, which is folded into the operating loss lines above rather than treated as a separate capital use.

### 18.9 Ownership and cadence across the six levers

Each lever in this section names a single owner, but the operational improvements only work as a package if the six owners report against a shared cadence rather than six separate ones. The table below sets out who owns what and how often the Board should expect to see each lever's own number move, tying the ownership lines named in 18.2 through 18.7 to the KPI cadence built out in full in section 23.

| Lever | Owner | Reporting cadence | Primary KPI it feeds |
|---|---|---|---|
| Prune the costliest paid acquisition (18.2) | Head of growth marketing | Monthly | Blended CAC |
| Cut non-working marketing by 40% (18.3) | Chief marketing function or the head of growth marketing | Quarterly | Marketing as a percentage of revenue |
| Lift website conversion (18.4) | Head of product, with growth marketing | Monthly | Website conversion rate (not a standing Board KPI, tracked operationally) |
| Win back lapsed accounts (18.5) | Retention or customer success function | Monthly | 3-month retention of new cohorts |
| Five gross-margin levers (18.6) | Head of operations, with the culinary and supply function for the ingredient-sharing component | Quarterly | Gross margin |
| Overheads and the lease (18.7) | Head of operations or facilities, with finance | Quarterly | Cash in bank |

*This table is this document's own organisational design, not a case-stated reporting structure, and the word "assumption" applies to the specific cadence (monthly against quarterly) assigned to each lever, which follows the logic that cost-side, slower-moving levers (margin, overheads) are checked quarterly while customer-facing, faster-moving levers (acquisition quality, conversion, win-back) are checked monthly, matching the monthly granularity the case's own KPI deliverable implies by asking for a 90-day plan alongside the 24-month one `[C D4]`.*

Six owners reporting on six different cadences is only useful if one person outside the six is reading all of it together, which is why the 90-day plan in section 22 names a single accountable owner for the operational improvements as a package, distinct from the six lever owners named above, whose job is to notice when two levers are moving in opposite directions, for example when the overheads cut starts to slow the fulfilment-centre absorption gain that the margin levers in 18.6 depend on, before either lever owner would see the conflict from inside their own number alone.

Exhibit for the deck: the six-lever table with each lever's rupee contribution to the bridge, on the strategic recommendation slide.

## 19. Financial case: the loss falls from ₹9.2 Cr to ₹0.8 Cr and break-even arrives in month 21

**Answer.** Under the base case (the rebuilt Proposal A, the operational improvements and the staged ready-to-eat launch together), HarvestBox's EBITDA loss falls from ₹9.24 Cr in 2025 `[C K6]` `[T1]` to ₹5.53 Cr in year 1 and ₹0.75 Cr in year 2 `[M]` `[T4]`, crossing into positive monthly EBITDA in month 21 `[M]` `[T4]` and ending the 24-month window at a run rate of +₹0.10 Cr a year `[T6]`. Cash falls from ₹15 Cr today `[C K4]` to a low of ₹2.89 Cr in month 20 before recovering to ₹2.92 Cr at month 24 `[T4]` `[T13]`, never crossing zero across the full window. This is the moneyshot of the whole plan, and it is also, read honestly, a break-even outcome rather than a profit: the margin above zero at month 24 is ten lakh rupees a year, and every single downside the model tests turns that margin negative. This section works through the revenue, margin, EBITDA, cash and retention path in full, with the honest reading carried forward from this plan without softening.

### 19.1 Revenue, margin and marketing: year 1 against year 2

The base case grows revenue from ₹41.3 Cr in year 1 to ₹51.6 Cr in year 2 `[M]` `[T4]`, a rise of ₹51.6 Cr − ₹41.3 Cr = ₹10.3 Cr, almost entirely driven by the staged ready-to-eat launch, which spends in months 13 to 15 and starts sales in month 14, bearing fruit through year 2 (section 24 details the launch itself); the core plan path, without ready-to-eat, grows only to ₹47.8 Cr in year 2 `[M]` `[T4]`, a difference of ₹51.6 Cr − ₹47.8 Cr = ₹3.8 Cr attributable to the gated launch. Gross margin rises from 32.2% in year 1 to 35.1% in year 2 `[M]` `[T4]`, consistent with the five-sub-lever target of +4.0 points phased over 15 months (section 18.6) landing mostly inside the second year. Marketing as a share of revenue falls from 23.4% in year 1 to 17.5% in year 2 `[M]` `[T4]`, against the case's own 2025 figure of 30% `[C P25]`, a swing of 30.0% − 17.5% = 12.5 percentage points over the full window, carrying both the non-working marketing cut (18.3) and the effect of a larger, more efficient revenue base diluting a flatter marketing spend.

| Metric | 2025 (case) | Year 1 (base) | Year 2 (base) |
|---|---|---|---|
| Revenue, ₹ Cr | 42.0 `[C K5]` | 41.3 `[M]` `[T4]` | 51.6 `[M]` `[T4]` |
| Gross margin | 31% `[C P25]` | 32.2% `[M]` `[T4]` | 35.1% `[M]` `[T4]` |
| Marketing, % of revenue | 30% `[C P25]` | 23.4% `[M]` `[T4]` | 17.5% `[M]` `[T4]` |
| EBITDA, ₹ Cr | −9.24 `[T1]` | −5.53 `[M]` `[T4]` | −0.75 `[M]` `[T4]` |

*EBITDA = earnings before interest, taxes, depreciation and amortisation, the case's own stated measure of loss `[C K6]`. Year 1 revenue of ₹41.3 Cr sits slightly below the 2025 case figure of ₹42.0 Cr because the rebuilt Proposal A's floor and plan-ladder changes briefly reduce order frequency and the blended order value before the retention gain and the entry/family plans build volume; this is a modelled transition effect, not an error, and the word "assumption" applies to the phasing of that transition.*

### 19.2 EBITDA and cash by quarter

The monthly model `[T5]` gives a full month-by-month path; the table below extracts the quarterly checkpoints the case's own deliverable (D3, "show the expected impact on revenue, margins, EBITDA, cash and customer retention" `[C D3]`) asks for, at months 3, 6, 9, 12, 15, 18, 21 and 24.

| Month | Active customers | Revenue, ₹ Cr | Gross margin | EBITDA, ₹ Cr | Cash, ₹ Cr | LTV to CAC |
|---|---|---|---|---|---|---|
| 3 | 6,558 | 3.41 | 31.2% | −0.57 | 11.21 | 1.76x |
| 6 | 6,773 | 3.29 | 32.0% | −0.45 | 9.68 | 2.21x |
| 9 | 7,170 | 3.47 | 32.8% | −0.34 | 8.55 | 2.57x |
| 12 | 7,622 | 3.69 | 33.6% | −0.27 | 7.67 | 2.74x |
| 15 | 7,984 | 4.01 | 34.8% | −0.14 | 3.10 | 2.78x |
| 18 | 8,240 | 4.36 | 35.3% | −0.04 | 2.90 | 2.75x |
| 21 | 8,429 | 4.53 | 35.3% | 0.00 | 2.89 | 2.73x |
| 24 | 8,571 | 4.60 | 35.2% | 0.01 | 2.92 | 2.70x |

*LTV = lifetime value, the gross profit a customer is expected to return over their modelled lifetime. All figures are single-month readings from the base-case monthly model `[T5]`, not cumulative or annualised; EBITDA turns from negative to effectively zero between month 20 (0.00, not shown) and month 21, which is the model's stated break-even month `[T4]`.*

Two things stand out against the case's own stated figures. First, the sharp cash step down between month 12 (₹7.67 Cr) and month 15 (₹3.10 Cr) is not a trading loss; it is the staged ready-to-eat launch's ₹4 Cr capital outlay landing across months 13 to 15 `[A23]`, visible in the monthly table as one-off investment lines of ₹1.33 Cr in each of those three months `[T5]`. Second, EBITDA crosses from negative to essentially flat between month 20 and month 21, not a dramatic swing into profit; the base case's break-even is a line crossing, not an inflection into growth.

### 19.3 The EBITDA bridge, 2025 to the month 24 run rate, with a paragraph per step

The bridge takes 2025's actual EBITDA loss of ₹9.24 Cr `[C K6]` `[T1]` through eleven steps to the month 24 run rate of +₹0.10 Cr a year `[T6]`. Each step is this document's own arithmetic, built from the levers in sections 17 and 18, and each is read here in sequence.

| Step | ₹ Cr a year | Running total |
|---|---|---|
| 2025 EBITDA | −9.24 | −9.24 |
| Headwinds: cost inflation, margin drift | −1.64 | −10.88 |
| Cut non-working marketing 40% | +1.71 | −9.17 |
| Prune paid channels above LTV | +0.62 | −8.55 |
| Overheads down 12% | +1.25 | −7.30 |
| Gross margin levers (+4.0 points) | +1.53 | −5.77 |
| The rebuilt Proposal A: retention net of skips | +0.31 | −5.46 |
| The rebuilt Proposal A: referral on the third box | +2.21 | −3.25 |
| The rebuilt Proposal A: win-back of lapsed customers | +0.50 | −2.75 |
| The rebuilt Proposal A: website conversion | +1.07 | −1.68 |
| Year 2: staged ready-to-eat | +1.79 | +0.11 |
| Month 24 run rate | n/a | +0.10 |

*Running totals are this document's own cumulative sum of the bridge steps `[T6]`, shown to make each step's contribution visible. Splitting the acquisition step into its three named levers, rather than reporting one bundled ₹3.77 Cr figure, rounds to ₹3.78 Cr when the three are added separately; that one-cent difference carries through to a running total of +0.11 ₹ Cr after the ready-to-eat step, against the model's own published total of +0.10 ₹ Cr, which is the figure the Month 24 run rate row carries and the one this document treats as authoritative.*

The first step, headwinds of −1.64 ₹ Cr, is not a lever at all; it is the cost of doing nothing differently, assumed cost inflation of 4% a year on other operating cost `[A05]` and continued margin drift of 1.5 points a year without a plan `[A03]`, the same drift the no-decision scenario runs on in full (section 13). Every step after that is a deliberate lever. Non-working marketing and pruning together add 1.71 + 0.62 = 2.33 ₹ Cr, both cost-side levers described fully in sections 18.2 and 18.3. Overheads add a further 1.25 ₹ Cr (18.7), anchored to the ₹1 Cr lease `[C X3]`. The margin levers add 1.53 ₹ Cr (18.6), the single largest individual step on the cost side. The rebuilt Proposal A's own four steps split the feature rebuild's effect by mechanism rather than bundling them: retention net of skips contributes a comparatively modest 0.31 ₹ Cr, because the floor's own cost (lost box revenue from the skips it permits) is netted against the retention gain inside this step; referral on the third box contributes 2.21 ₹ Cr, resting on one outside study, the Lane C referral-economics benchmark `[A10]`, read as directional only; win-back of lapsed customers contributes 0.50 ₹ Cr, built from the case's own count of customers who left for rigidity `[A12]`; and website conversion contributes 1.07 ₹ Cr, resting on no outside evidence at all, an assumed improvement in the entry page's own conversion rate `[A14]`. Together the three sum to 3.78 ₹ Cr (2.21 + 0.50 + 1.07), the largest block in the entire bridge and larger than every cost-side lever combined (2.33 + 1.25 + 1.53 = 5.11 ₹ Cr against this block's 3.78 ₹ Cr, so the two sides are closer than they first appear, but the block is still the largest single grouping), and it is also the least evidenced block, which is why it carries the thinnest outside support of any step in the bridge. The final step, the staged ready-to-eat launch, adds 1.79 ₹ Cr and is the step that tips the run rate from −1.69 ₹ Cr (the core plan path without it, matching the locked figure in this plan) to +0.10 ₹ Cr, meaning the staged launch alone is the difference between a break-even plan and a plan still ₹1.69 Cr short of break-even at month 24.

### 19.4 Cash: the uses of ₹15 Cr and where the low point falls

The case gives HarvestBox ₹15 Cr in cash `[C K4]` and a hard rule that any recommendation stay realistic within that figure `[C G7]`. The base-case plan spends every rupee of it and ends with ₹2.92 Cr still in the bank, after a low point of ₹2.89 Cr in month 20 `[M]` `[T4]`.

| Use | ₹ Cr |
|---|---|
| The rebuilt Proposal A build | 1.80 |
| Year 1 operating loss | 5.53 |
| Staged ready-to-eat, gated | 4.00 |
| Year 2 operating loss | 0.75 |
| Cash left at month 24 | 2.92 |
| Total | 15.00 |

*The five lines sum to exactly ₹15.00 Cr `[T10]`, matching the case's stated cash position `[C K4]` to the rupee; this is a check on the model's internal consistency, not a coincidence the model was built to hit, since every underlying monthly cash figure `[T5]` `[T13]` rolls up independently to this total.*

Quarter by quarter, cash falls from ₹15.0 Cr at month 0 to ₹11.2 Cr at month 3, ₹9.7 Cr at month 6, ₹8.6 Cr at month 9 and ₹7.7 Cr at month 12, before the staged ready-to-eat outlay drops it to ₹3.1 Cr at month 15, essentially flat at ₹2.9 Cr from month 18 through month 24 `[T13]`. For comparison, the core plan path (the rebuilt Proposal A and the operational improvements, without the staged launch) ends month 24 with ₹5.65 Cr in cash `[M]` `[T4]`, ₹5.65 Cr − ₹2.92 Cr = ₹2.73 Cr more than the base case, because it never spends the ₹4 Cr ready-to-eat outlay; this is the trade the Board makes at the month 12 gate (section 24), more cash held in reserve against a lower eventual run rate (−1.69 ₹ Cr against +0.10 ₹ Cr).

Set beside the three options as the case writes them, the cash picture is the starkest single comparison in this document. A as written reaches cash zero in month 16 `[M]` `[T4]`, B as written in month 16 `[M]` `[T4]`, and C as written in month 15 `[M]` `[T4]`, each inside the investors' own 24-month window and each before the base case's own low point of ₹2.89 Cr in month 20 `[M]` `[T4]` is even reached. No decision at all reaches cash zero in month 18 `[M]` `[T4]`, meaning three of the four alternatives to this plan run out of cash before the plan's own low point, and the fourth, no decision, runs out only two months after it. The base case's low point of ₹2.89 Cr is a thinner cushion than a Board used to a ₹15 Cr balance might expect, at roughly 19% of the cash HarvestBox holds today, but it is a cushion that exists, where the four alternatives this document was built against have none left by that point in the window.

### 19.5 Retention and the unit-economics ladder, year 1 against year 2

Retention is the fourth item the case's D3 deliverable asks for by name `[C D3]`. The case's own four-point curve (100%, 55%, 34%, 19% at months 1, 3, 6 and 12 `[C R1]` to `[C R4]`) describes today's subscription; the rebuilt Proposal A's floor moves the month 3 point from 55% to 65% `[C PA3]` and the model recalculates every later month off that new starting point under the same fitted decay rate `[A01]`.

| Month | Today, % active | With the rebuilt Proposal A, % active |
|---|---|---|
| 1 | 100.0 | 100.0 |
| 3 | 55.0 | 65.0 |
| 6 | 34.0 | 40.2 |
| 9 | 25.4 | 30.0 |
| 12 | 19.0 | 22.5 |

*Today's figures at months 1, 3, 6 and 12 are the case's own stated curve `[C R1]` `[C R2]` `[C R3]` `[C R4]`; the rebuilt Proposal A figures at month 3 are the case's own stated target for the proposal `[C PA3]`, and every other month under the rebuilt Proposal A is this document's fitted curve under the same decay rate as today's curve `[T3]` `[A01]`.*

LTV to CAC, the ratio the case itself names as the central unit-economics problem (1.55x today against a 3.0x benchmark `[C U6]` `[C U7]`), climbs through four separate levers, each isolated in the ladder below.

| Step | LTV to CAC |
|---|---|
| Today | 1.55 |
| Retention | 1.67 |
| Margin | 1.83 |
| CAC | 2.70 |
| Benchmark | 3.00 |

*LTV = lifetime value. Each step in the ladder isolates one lever's contribution, holding the others at their prior step's value `[T12]`: retention alone (the rebuilt Proposal A's floor) lifts the ratio from 1.55 to 1.67; adding the margin levers lifts it to 1.83; adding the CAC-side levers (pruning and non-working marketing) lifts it to 2.70, still 0.30 short of the 3.0x benchmark `[C U7]` at the model's month 24 reading.*

The model's year 12 and year 24 readings of LTV to CAC under the base case are 2.74x and 2.70x respectively `[M]` `[T4]` `[T5]`, both below the 3.0x benchmark `[C U7]` even at the end of the 24-month window, which is the clearest single number in this document for why the recommendation is a break-even plan and not a plan that reaches the case's own stated health benchmark within the window the investors have set.

Retention and the unit-economics ladder both feed directly into the Board KPI tree built in full in section 23; the five checkpoints below, drawn from the same base-case path, show how far each KPI has moved by the time the Board would next review it.

| KPI | Today | Day 90 | Month 12 | Month 24 |
|---|---|---|---|---|
| 3-month retention, new cohorts | 55% | Month-2 retention 81% (pilot; today 74%) | 65% | 65% |
| Blended CAC | ₹7,000 | ₹6,276 | ₹4,619 | ₹4,745 |
| LTV to CAC, new cohorts | 1.55x | 1.76x | 2.74x | 2.70x |
| Gross margin | 31.0% | 31.2% | 33.6% | 35.2% |
| Cash in bank, ₹ Cr | 15.0 | 11.2 | 7.7 | 2.9 |

*These five rows are drawn from the full seven-KPI Board tree `[T11]`, limited here to the four that this section's own retention and unit-economics discussion already built up to, plus cash for reference; the fuller KPI design, including stop triggers for each, is in section 23.*

### 19.6 The honest reading, in full

This plan's own working paper states the honest reading of these numbers without softening, and this document carries that reading forward in full, unchanged. The base case crosses break-even in month 21 and then sits just above zero, a run rate of +₹0.10 Cr a year: this is a break-even plan, not a profit plan, inside the 24-month window the investors have set `[C K11]`. Without the year 2 ready-to-eat stage, the run rate is −₹1.69 Cr with ₹5.65 Cr in the bank, a plan that is safer on cash but still loss-making at the 24-month mark `[M]` `[T4]`. Every single downside in the sensitivity table (section 20) turns the run rate negative: there is no input the model tests, taken alone in its downside direction, that leaves the plan above zero at month 24 `[T7]`. The bear case survives the full 24 months only with the month 7 contingency (A25); without it, cash reaches zero in month 20 `[T4]`. The single largest block in the bridge, the rebuilt Proposal A's three referral, win-back and conversion steps together worth +3.77 ₹ Cr `[T6]`, rests for two of its three parts on the assumptions this research round could find the least outside evidence for: the 20% referral share of sign-ups `[A10]` and the 2.8% to 3.3% conversion lift `[A14]`, both discussed with their evidentiary limits in section 20. This is why the plan is built with gates rather than a single committed path: the month 12 gate before the ready-to-eat stage releases, the month 7 contingency before the bear case is allowed to run unmanaged, and the Board KPI stop triggers in section 23 that would halt the plan's assumptions before they compound into a worse outcome than the one modelled here.

None of this changes the comparison with the three options as written. No decision at all ends month 24 at cash zero in month 18 and a run rate of −₹12.52 Cr `[T4]`; A, B and C each as written in the case reach cash zero between month 15 and month 16 `[T4]`, before the investors' 24-month window even closes. A break-even plan that still holds ₹2.92 Cr in the bank at month 24 `[T4]` `[T13]` is a materially different outcome from any of the four alternatives this plan was built against, even though it falls short of the profit the Board would ultimately want. Stating the plan's own shortfall plainly, rather than rounding +₹0.10 Cr up to a claim of profitability, is the discipline this document holds to throughout, and it is also the reason the 90-day plan (section 22) and the Board KPIs (section 23) exist: a plan this close to its own break-even line needs an early-warning system, not a single number repeated with confidence it has not earned.

### 19.7 What the case's D3 deliverable asked for, and where each item sits

The case names five things the financial and risk case must show: revenue, margins, EBITDA, cash and customer retention, plus key risks and mitigations `[C D3]`. This section has carried the first five in full; risks and mitigations are carried in section 21, outside this part's scope, and referenced here only to close the loop on the deliverable as a whole.

| D3 item | Where it is shown in this section |
|---|---|
| Revenue | 19.1 (year 1 and year 2), 19.2 (by quarter) |
| Margins | 19.1 (gross margin and marketing as a percentage of revenue, year 1 and year 2) |
| EBITDA | 19.1, 19.2, 19.3 (the full bridge) |
| Cash | 19.2 (by quarter), 19.4 (the ₹15 Cr uses table and the low point) |
| Customer retention | 19.5 (the survival curve and the LTV to CAC ladder) |
| Key risks and mitigations | Carried in section 21, not this part; the honest reading in 19.6 names the three risk-bearing assumptions this part's own numbers depend on |

Read together, every modelled line in this section ties back to a case fact, a model table or a numbered assumption, and the one place this section departs from a confident single number is exactly where the case itself gives the least to work with: the referral and conversion assumptions behind the bridge's largest step. That departure is deliberate. A financial case that showed every number with equal confidence would be easier to present and harder to defend under cross-questioning; naming the two or three numbers that carry the most uncertainty, and showing exactly how much uncertainty, is what section 20 does next.

One further reconciliation is worth stating plainly before moving on. Section 4 of this document (part A) discloses that three of the case's own figures do not tie to one another on their own terms: active subscribers against boxes a month, web conversion against the implied new-customer run rate, and the lifetime-boxes figure against the stated retention curve. None of the financial-case numbers in this section depends on resolving those three conflicts; the model is built from the case's revenue, cost and retention figures directly, not from the subscriber count or the website-traffic conversion figure that section 4 flags as internally inconsistent. A reader who checked only this section, without reading section 4, would not find a number here that silently assumes one of the three disputed readings is correct, because none of them is load-bearing for the bridge, the cash path or the retention ladder this section builds.

Exhibit for the deck: the EBITDA bridge waterfall from 2025 to the month 24 run rate, with the break-even month marked on the cash line below it, on the financial and risk case slide.

## 20. Scenarios and sensitivity: every single downside turns the run-rate negative, which is why there are gates

**Answer.** The base case is one of three named scenarios: bear, base and bull, each built from the same model with different values for the same eight named inputs `[A08]` `[A10]` `[A12]` `[A14]` `[A17]` `[A18]` `[A19]` `[A23]`. The bear case alone, with no management response, runs out of cash in month 20 `[M]` `[T4]`; with the month 7 contingency (A25) it survives to month 24 with ₹1.46 Cr left `[M]` `[T4]`. Every one of the eight inputs the model tests, moved to its downside value alone, turns the base case's +₹0.10 Cr run rate negative `[T7]`, which is the reason this plan does not treat the base case as a forecast and instead builds a 90-day plan (section 22), a set of Board KPIs with stop triggers (section 23), and two explicit gates (the month 7 contingency and the month 12 ready-to-eat gate, section 24) around it. This section sets out the three scenarios side by side, the bear case with and without its contingency, the ranked sensitivity table, the 24-month grid, and which three inputs matter most to watch.

### 20.1 Bear, base and bull: named inputs side by side

Each of the three scenarios carries its own value for the same eight inputs, never a single point estimate treated as certain.

| Input | Bear | Base | Bull |
|---|---|---|---|
| Skip rate once free (A08) | 10% | 5% | 3% |
| Referral share of sign-ups by month 12 (A10) | 10% | 20% | 28% |
| Win-backs a month from month 4 (A12) | 20 | 40 | 40 |
| Website conversion (A14) | 3.0% | 3.3% | 3.5% |
| Non-working marketing cut (A17) | 25% | 40% | 40% |
| Gross margin levers over 15 months (A18) | +2.5 pts | +4.0 pts | +5.0 pts |
| Overheads cut (A19) | 5% | 12% | 12% |
| Staged ready-to-eat scale (A23) | n/a (not launched in bear) | 80% of Proposal C | 80% of Proposal C |

*Pts = percentage points. The bear case assumes the staged ready-to-eat launch is not attempted, since the month 12 gate conditions (cash at least ₹7 Cr and LTV to CAC of new cohorts at least 2.2x) are unlikely to be met under bear-case inputs; this is an assumption about gate behaviour, stated once, consistent with the gate's own design in section 24.*

| Scenario | Revenue Y1, ₹ Cr | Revenue Y2, ₹ Cr | EBITDA Y1, ₹ Cr | EBITDA Y2, ₹ Cr | Run rate, ₹ Cr | Cash M24, ₹ Cr |
|---|---|---|---|---|---|---|
| Bear, no response | 38.4 | 39.1 | −8.25 | −7.65 | −7.74 | −2.70 |
| Base | 41.3 | 51.6 | −5.53 | −0.75 | +0.10 | 2.92 |
| Bull | 43.0 | 59.5 | −4.78 | +2.48 | +3.67 | 5.90 |

*The bear, no response row runs out of cash before month 24 (cash zero month 20 `[T4]`), so the −2.70 ₹ Cr cash figure at month 24 is a modelled overdraft the company would not actually be able to carry, shown here only to size the gap the contingency closes `[M]` `[T4]`.*

The gap between bear and bull is wide on every line: revenue differs by ₹59.5 Cr − ₹38.4 Cr = ₹21.1 Cr by year 2, EBITDA by ₹2.48 Cr − (−₹7.65 Cr) = ₹10.13 Cr, and the run rate by ₹3.67 Cr − (−₹7.74 Cr) = ₹11.41 Cr, almost the entire difference driven by the same inputs this section ranks below. No single input drives the whole gap; the scenarios move eight inputs at once in the same direction, which is why the sensitivity table in section 20.3 isolates each one.

### 20.2 The bear case, with and without the month 7 contingency

Run with no management response, the bear case's cash reaches zero in month 20 `[M]` `[T4]`, four months before the window the investors have set closes `[C K11]`. The month 7 contingency (A25) is designed to be triggered if the bear-case trajectory becomes visible early: paid acquisition halved, non-working marketing halved again (on top of the operational improvements' own 25% bear-case cut), and overheads cut a further 15% beyond the bear case's 5% `[A25]`. The logic for timing it at month 7 rather than later is stated in the assumption's own rationale: acquisition spend is paid back, on average, only after ten months `[M]` `[T2]`, so a paid-acquisition cut made in month 7 removes spend before most of it would have been recovered anyway, making it the fastest lever available to protect cash.

The contingency itself is three changes, each layered on top of the bear case's own already-reduced levers, not a fresh set of cuts invented at month 7.

| Contingency lever | Bear-case starting point | Month 7 change | What it targets |
|---|---|---|---|
| Paid acquisition | Already pruning the costliest decile at the bear-case level `[A15]` | Halved further | Spend that is paid back only after month 10 on average `[M]` `[T2]`, the slowest-returning cost line in the business |
| Non-working marketing | 25% cut in the bear case `[A17]` | Halved again from that reduced base | The same unexplained ₹4.29 Cr line as lever 18.3, cut harder once the bear path is confirmed |
| Overheads | 5% cut in the bear case `[A19]` | A further 15% cut on top | Head-office and fulfilment-centre cost beyond the ₹1 Cr lease already exited under 18.7 |

*A25 names all three changes together as the month 7 contingency; none of the three is a new lever type, each is an existing lever (18.2, 18.3, 18.7) pushed further once the bear trajectory is visible early enough to act on it.*

| Scenario | EBITDA Y1, ₹ Cr | EBITDA Y2, ₹ Cr | Cash M24, ₹ Cr | Cash zero month |
|---|---|---|---|---|
| Bear, no response | −8.25 | −7.65 | −2.70 | 20 |
| Bear, with the month 7 contingency | −6.18 | −5.56 | 1.46 | none |

*The contingency does not change the bear case's revenue inputs (A08, A10, A12, A14 in their bear values); it changes only the three cost levers named in A25, which is why Y1 EBITDA improves by −6.18 − (−8.25) = 2.07 ₹ Cr even though the top-line bear assumptions are unchanged.*

| Scenario | M0 | M3 | M6 | M9 | M12 | M15 | M18 | M21 | M24 |
|---|---|---|---|---|---|---|---|---|---|
| Bear, no response | 15.0 | 11.1 | 9.0 | 6.9 | 5.0 | 3.0 | 1.1 | −0.8 | −2.7 |
| Bear, with the contingency | 15.0 | 11.1 | 9.0 | 8.0 | 7.0 | 5.8 | 4.5 | 3.0 | 1.5 |

*Both rows are read directly from the model's own monthly bear-scenario cash series `[M]`, sampled every three months. The no-response row crosses zero during month 20, consistent with the headline figure in section 20.2, and ends month 24 at −₹2.70 Cr, a modelled overdraft the company would not actually be able to carry, shown here only to size the gap the contingency closes.*

Read plainly, the contingency is the only one of the eight levers in this plan that converts a scenario which runs out of cash before the window closes into one that does not. Every other lever in sections 17 and 18 improves the outcome; only the contingency, triggered early enough, prevents an outright cash failure under the bear case's own assumptions.

### 20.3 The tornado: every input ranked by its swing

The sensitivity table moves eight inputs one at a time, each across its own stated range, holding every other input at its base value, and records the resulting run-rate EBITDA and month 24 cash at both ends.

| Input and range | Run-rate EBITDA low, ₹ Cr | Run-rate EBITDA high, ₹ Cr | Swing, ₹ Cr | Cash M24 low, ₹ Cr | Cash M24 high, ₹ Cr |
|---|---|---|---|---|---|
| Referral share 10% to 30% | −1.12 | +1.65 | 2.77 | 1.83 | 4.27 |
| Skip rate 12% to 0% | −1.14 | +0.99 | 2.13 | 1.05 | 4.25 |
| 3-month retention 60% to 70% | −0.83 | +1.03 | 1.86 | 1.90 | 3.93 |
| Ready-to-eat sales 50% to 120% of plan | −0.80 | +0.46 | 1.26 | 2.28 | 3.17 |
| Conversion 3.0% to 3.6% | −0.50 | +0.60 | 1.10 | 2.04 | 3.65 |
| Non-working marketing cut 25% to 50% | −0.54 | +0.53 | 1.07 | 1.79 | 3.67 |
| Margin levers +2.5 to +5.0 points | −0.63 | +0.59 | 1.22 | 2.00 | 3.53 |
| Overhead cut 6% to 15% | −0.52 | +0.41 | 0.93 | 1.85 | 3.45 |

*Swing is the high reading minus the low reading for each row, this document's own arithmetic on the model's own published sensitivity outputs `[T7]`, ranked largest to smallest; every row's low reading is negative, which is the basis for this section's own headline finding that every single downside turns the run rate negative.*

Ranked by swing, referral share is the single most consequential input in the whole model, wider even than the skip rate that the case itself names as the headline risk of a flexible subscription `[C PA4]`. Both referral and skip sit above retention itself, which is notable because retention is the case's own headline problem `[C R1]` to `[C R4]` and yet two levers inside the rebuild (how fast customers skip, how many sign-ups come through referral) matter more to the 24-month financial outcome than the retention improvement the proposal is nominally built around.

### 20.4 The 24-month grid: retention against skip rate

Because retention and skip interact (a higher retention target means more customers who can exercise the skip floor), the model also runs a two-way grid across both inputs at once, holding every other input at its base value.

| 3-month retention | Skip 0% | Skip 5% | Skip 10% | Skip 15% |
|---|---|---|---|---|
| 55% | −7.1 | −8.3 | −9.6 | −10.8 |
| 60% | −6.0 | −7.3 | −8.6 | −9.9 |
| 65% | −5.0 | −6.3 | −7.6 | −8.9 |
| 70% | −3.9 | −5.3 | −6.7 | −8.0 |

*Cells are 24-month cumulative EBITDA in ₹ Cr under the base case (the rebuilt Proposal A and the operational improvements, with the staged ready-to-eat launch from month 13 already included), at each combination of retention and skip rate `[T8]`; every cell in the grid is negative because cumulative EBITDA over the full 24 months and the run rate are different measures. The base case's positive run rate, +0.10 ₹ Cr a year `[T6]`, is what months 22 to 24 alone earn once the business has reached its exit pace, not what the first 24 months add up to.*

Reading the grid along its diagonal from the worst cell (55% retention, 15% skip, −10.8 ₹ Cr) to the best (70% retention, 0% skip, −3.9 ₹ Cr) shows a spread of −3.9 − (−10.8) = 6.9 ₹ Cr across the full range this grid tests, confirming that the two inputs together, not either alone, bound the whole plausible range of the base case's cumulative outcome. The case's own stated target for Proposal A, 65% three-month retention `[C PA3]`, sits in the grid's third row; at that retention level, the model's own base-case skip assumption of 5% `[A08]` lands cumulative EBITDA at −6.3 ₹ Cr over 24 months, which checks against the base case's own year-1 EBITDA of −₹5.53 Cr plus its year-2 EBITDA of −₹0.75 Cr `[M]`, the staged ready-to-eat launch already included.

### 20.5 Break-even values: where each input alone would erase the run rate

Because the base-case run rate sits very close to zero (+0.10 ₹ Cr `[T6]`), it is useful to know not just the direction of each input's downside, but roughly where along its own tested range the run rate itself would cross back to zero, holding every other input at base. The values below are this document's own linear interpolation between each input's two tested endpoints in the sensitivity table `[T7]`, shown with the arithmetic, and are a modelled approximation, not a separately run scenario; the model was not re-run to find these exact crossing points, only the two endpoints it already reports.

| Input | Low endpoint | High endpoint | Approximate break-even value | Arithmetic |
|---|---|---|---|---|
| Referral share of sign-ups | 10% at −1.12 | 30% at +1.65 | about 18.1% | (0 − (−1.12)) ÷ (1.65 − (−1.12)) = 0.404; 10% + 0.404 × 20 points = 18.1% |
| Skip rate | 12% at −1.14 | 0% at +0.99 | about 5.6% | (−1.14 − 0) ÷ (−1.14 − 0.99) = 0.535; 12% − 0.535 × 12 points = 5.6% |
| 3-month retention | 60% at −0.83 | 70% at +1.03 | about 64.5% | (0 − (−0.83)) ÷ (1.03 − (−0.83)) = 0.446; 60% + 0.446 × 10 points = 64.5% |
| Website conversion | 3.0% at −0.50 | 3.6% at +0.60 | about 3.27% | (0 − (−0.50)) ÷ (0.60 − (−0.50)) = 0.455; 3.0% + 0.455 × 0.6 points = 3.27% |
| Margin levers | +2.5 pts at −0.63 | +5.0 pts at +0.59 | about +3.8 points | (0 − (−0.63)) ÷ (0.59 − (−0.63)) = 0.516; 2.5 + 0.516 × 2.5 points = 3.8 points |
| Non-working marketing cut | 25% at −0.54 | 50% at +0.53 | about 37.6% | (0 − (−0.54)) ÷ (0.53 − (−0.54)) = 0.505; 25% + 0.505 × 25 points = 37.6% |
| Overhead cut | 6% at −0.52 | 15% at +0.41 | about 11.0% | (0 − (−0.52)) ÷ (0.41 − (−0.52)) = 0.559; 6% + 0.559 × 9 points = 11.0% |
| Ready-to-eat sales | 50% at −0.80 | 120% at +0.46 | about 94.5% | (0 − (−0.80)) ÷ (0.46 − (−0.80)) = 0.635; 50% + 0.635 × 70 points = 94.5% |

Read against the base-case assumed values from section 20.1, four inputs sit uncomfortably close to their own break-even value: the base-case referral share (20% `[A10]`) is only 20% − 18.1% = 1.9 points above its break-even value; the base-case skip rate (5% `[A08]`) is 5.6% − 5% = 0.6 points below its break-even value, meaning skip would have to rise by less than one point from its own base assumption to turn the run rate negative on that input alone; the base-case conversion target (3.3% `[A14]`) is 3.3% − 3.27% = 0.03 points above its break-even value, the thinnest margin of any input tested; and the base-case margin-lever target (+4.0 points `[A18]`) sits comfortably above its own break-even value of +3.8 points, a margin of 0.2 points. The conversion input's margin above its break-even point is effectively zero, which this document flags without softening: a conversion outcome only marginally below the base-case target, on this input alone, would be enough to tip the run rate negative.

### 20.6 Which three inputs matter most, and what would firm each up

Ranked by the width of their swing in the tornado (section 20.3), referral share, skip rate and three-month retention are the three inputs the plan should watch most closely, and they are also, not coincidentally, the three inputs carrying the thinnest outside evidence.

| Input | Swing, ₹ Cr | Evidence behind the base-case value | What would firm it up |
|---|---|---|---|
| Referral share (A10) | 2.77 | A single verified academic study of one European retail-banking referral programme `[S33]`; no Indian or meal-kit-specific referral benchmark could be verified in this research round | A live referral pilot in the 90-day plan (section 22), measuring actual referred sign-up share before the month 12 gate, rather than carrying the 20% assumption forward unchecked |
| Skip rate (A08) | 2.13 | The case's own stated risk that flexibility could reduce order frequency `[C PA4]`, with no outside benchmark for what skip rate a floor-limited pause feature actually produces, since the vendor-blog figures found in Lane C research could not be verified against a named primary study | The pilot city's actual skip rate against the floor, tracked from week one and reported against the KPI stop trigger in section 23 |
| 3-month retention (A08's companion assumption, carried via PA3) | 1.86 | The case's own stated target for Proposal A (55% to 65% `[C PA3]`), which is a case-given figure, not a team estimate, but its achievement depends on execution quality this document cannot verify in advance | The pilot's own month-2 cohort read, named explicitly as the first success test in the 90-day plan (section 22) |

*Swing figures are repeated from section 20.3 for ease of reference `[T7]`. The pilot city design referenced in the right-hand column is detailed fully in section 22 and is the mechanism by which all three of these inputs move from assumption to measured fact inside the first 90 days, before the plan has committed the bulk of its spend.*

The honest reading carried forward from section 19.6 applies with full force here: the largest single block in the financial bridge, worth 3.77 ₹ Cr a year `[T6]`, is built from exactly two of these three thinly evidenced inputs (referral and conversion, with win-back a third, smaller and better-evidenced component), and the plan's entire month 24 run rate of +0.10 ₹ Cr `[T6]` sits inside a margin that any one of the three inputs tested here, taken alone to its downside, is enough to erase. This is not a reason to abandon the plan; every one of the three has a direct, measurable pilot test built into the 90 days (section 22), and the gates in section 24 exist specifically so that the Board is not committed to the staged ready-to-eat launch, or to running the bear case unmanaged, before those three numbers are known rather than assumed.

Exhibit for the deck: the tornado chart ranked by swing, with the retention-by-skip grid as a companion panel, on the financial and risk case slide.

## 21. Risk register: twelve risks, each with a trigger and a response

**Answer.** We carry twelve risks on the recommended plan, scored on a five-point probability and impact scale and plotted on a heat map, each with an early signal, a trigger threshold and a named response and owner. Ten sit inside the core Proposal A and operational-improvements path; two are specific to the staged ready-to-eat option that only opens if the month 12 gate passes. The single largest exposure is the one the bridge already flags as the thinnest evidence: referral, win-back and conversion together carry ₹3.77 Cr of the ₹9.34 Cr improvement in the bridge `[M T6]`, more than the gross-margin and overhead levers combined. A pre-mortem dated month 12 names the three most likely failure stories, and each maps to a risk already on this register.

### 21.1 The twelve risks

A risk register is only useful if it is specific enough to trigger action before the number moves too far to recover. For each risk we name what we would see first (the early signal), the number that tells us to act (the trigger threshold), what we would do (the response) and who owns the call. Probability and impact are each scored 1 (lowest) to 5 (highest); the product of the two is not a precise statistic, it is a sorting device to decide which risks get attention first.

| # | Risk | Probability (1 to 5) | Impact (1 to 5) | Early signal | Trigger threshold | Response | Owner |
|---|---|---|---|---|---|---|---|
| 1 | Referral share falls short of 20% of sign-ups by month 12 | 3 | 4 | Referral share under 12% by month 4 | Referral under 15% of sign-ups at month 6 | Raise the ₹1,000-per-side reward toward the bull case's more generous terms, or substitute a win-back-weighted mix; re-run the model with the lower bound of the referral range (10%, bear case) to re-test the gate | Growth lead |
| 2 | Win-backs run below 40 a month from month 4 `[A12]` | 3 | 3 | Fewer than 20 win-backs logged in month 4 | Win-backs under 20 a month for two consecutive months | Fall back to the bear-case assumption (20 a month) in the live plan and reallocate the saved ₹800-a-head `[A13]` budget to the pause-offer messaging that drives win-backs | Retention lead |
| 3 | Website conversion does not move from 2.8% toward 3.3% `[A14]` | 3 | 3 | Conversion under 3.0% by month 6 | Conversion under 3.0% at month 9 | Treat the Board KPI stop trigger in section 23 as binding: hold marketing spend flat and redesign the entry page around the ₹3,600 plan and the skip promise before adding a rupee of paid spend | Marketing lead |
| 4 | Skip rate exceeds 5.6%, where the full base run-rate turns negative `[M T7]`, once skipping is free | 3 | 5 | Skip rate above 5% in month 5 | Skip rate over 6% for two consecutive months (the KPI stop trigger) | Enforce the floor of two shipped boxes in three months and revise the plan design if the stop trigger persists; this is PA4 `[C PA4]`, the case's own stated risk for Proposal A, and the floor is the feature built to guard against it | Product lead |
| 5 | Gross margin levers (+4.0 points, `[A18]`) land at the bear case (+2.5) rather than the base case | 3 | 4 | Waste still above 5% (against 6% today, `[C X2]`) by month 6 | Gross margin under 32% at month 9 (the KPI stop trigger) | Sequence the levers in order of certainty: packaging and buying first, first-box-discount reduction second, fulfilment-centre absorption last, since absorption depends on volume we cannot force | Operations lead |
| 6 | Non-working marketing cut (40% of ₹4.29 Cr, `[A17]`) removes spend that was quietly working | 2 | 3 | New-customer volume falls below plan despite flat paid spend | New customers under 900 a month for two months after the cut | Restore the cut in 10-point increments and watch the next month's sign-ups before cutting further; the ₹4.29 Cr figure is itself an inference (spend not explained by CAC times new customers, `[M T2]`), not a line item the company has labelled "non-working" | Marketing lead |
| 7 | Paid-channel pruning (the costliest 10%, `[A15]`, `[A16]`) removes customers who were profitable on a longer horizon than the model assumes | 2 | 2 | Total paid volume falls by more than 10% rather than the targeted decile | Paid new-customer volume down more than 15% against the pre-prune run rate | Re-admit the next-costliest decile if its CAC comes in under the lifetime gross profit benchmark of ₹10,900 `[C U5]` once a full cohort has matured | Marketing lead |
| 8 | Overhead cut (12%, `[A19]`) damages service quality because the head-office move into fulfilment-centre space creates operational friction | 2 | 2 | Delivery-problem complaints rise against the case's 10% baseline share of exits `[C W5]` | Delivery-related exits exceed 13% of total exits for one quarter | Phase the move site by site rather than all at once, keeping one city's head-office function intact until the first move proves clean | Operations lead |
| 9 | Competitive intensity rises faster than modelled, from quick-commerce ten-minute food or a third private-label entrant | 3 | 3 | A fourth national chain launches a private-label kit near the ₹3,500 price point `[C M3]` | Two or more competitors cut price within the same quarter | Hold price and let the ₹3,600 entry plan `[A09]` absorb the pressure rather than discounting the ₹5,200 core box, since the core box is where gross profit per box (₹1,600, `[C U2]`) is earned | Product lead |
| 10 | Cash runway breaches the model's own trough before break-even | 2 | 5 | Monthly burn exceeds the plan by more than 15% in any month before month 12 | Cash under ₹7 Cr at month 12 (the KPI stop trigger, `[M T11]`) | Pull the month 7 contingency early (halve paid acquisition and non-working marketing, cut overheads a further 15%, `[A25]`), the fastest lever because acquisition spend is paid ten months before it returns `[M]` | Chief executive and Board |
| 11 | The month 12 gate is missed (cash under ₹7 Cr or LTV to CAC under 2.2x for new cohorts) and the staged ready-to-eat option cannot open on schedule | 2 | 4 | LTV to CAC tracking under 2.4x by month 9 against the model's 2.57x `[M T5]` | Either gate test fails at month 12 | Stay on the core path; core-only still reaches ₹5.65 Cr of cash at month 24 against the base case's ₹2.92 Cr `[M T4]`, so missing the gate is a worse growth outcome, not a cash crisis | Chief executive and Board |
| 12 | Food-safety and regulatory risk on the staged ready-to-eat launch (year 2 only, treated separately below) | 2 | 5 | A licence, hygiene or shelf-life requirement is discovered late in the two gated cities | Any FSSAI finding that would delay the month 14 sales start by more than one quarter | Build the licence and cold-chain compliance file in the three months before the gate decision, not after it, so the only thing the gate decision is waiting on is the cash and unit-economics test | Operations lead, with external food-safety counsel |

*LTV is lifetime value, CAC is customer acquisition cost, FSSAI is the Food Safety and Standards Authority of India.*

This table shows that four of the twelve risks (1, 2, 3, 6) sit directly on the bridge's largest and least-evidenced block, the rebuilt Proposal A's three referral, win-back and conversion steps worth ₹3.77 Cr together `[M T6]`, and that the gross-margin and overhead risks (5, 8) sit on the second-largest step, ₹1.53 Cr and ₹1.25 Cr respectively. Risk 1 is therefore not just the most likely to disappoint; it is the one the plan can least afford to get wrong.

Risk 4 carries an equally direct urgency, for a different reason: the base case's planned skip rate of 5% sits only 0.6 points from 5.6%, the skip rate at which base run-rate EBITDA turns negative (section 20.5), so there is almost no room to drift before the plan is already underwater. That is why its probability score is set at 3 rather than 2 in the table above, and why its trigger is tightened to 6%, a buffer of only 0.4 points above that break-even, rather than left at a looser number that would let the business cross into loss before anyone acted.

To make that last sentence checkable rather than asserted, we map each of the eight risks that have a matching input in the sensitivity table to the swing in run-rate EBITDA that input carries, low to high.

| Risk # | Linked input | Low case run-rate EBITDA | High case run-rate EBITDA | Swing (₹ Cr) |
|---|---|---|---|---|
| 4 | Skip rate, 12% to 0% | −1.14 | 0.99 | 2.13 |
| 1 | Referral share, 10% to 30% | −1.12 | 1.65 | 2.77 |
| 1, 2, 3 (combined channel) | Three-month retention, 60% to 70% | −0.83 | 1.03 | 1.86 |
| 3 | Website conversion, 3.0% to 3.6% | −0.50 | 0.60 | 1.10 |
| 5 | Margin levers, +2.5 to +5.0 points | −0.63 | 0.59 | 1.22 |
| 8 | Overhead cut, 6% to 15% | −0.52 | 0.41 | 0.93 |
| 6 | Non-working marketing cut, 25% to 50% | −0.54 | 0.53 | 1.07 |
| 12 | Ready-to-eat sales, 50% to 120% of plan | −0.80 | 0.46 | 1.26 |

*All figures `[M T7]`, ₹ crore a year, run-rate EBITDA for months 22 to 24.*

This table shows referral share carries the single widest swing of any input in the model, ₹2.77 Cr, ahead of the skip rate's ₹2.13 Cr and the ready-to-eat sales range's ₹1.26 Cr, which is the quantitative basis for treating risk 1 as the register's top priority rather than a judgement call.

### 21.2 The 5 by 5 heat map

A heat map sorts risks by probability and impact so that attention goes first to the top-right corner rather than to whichever risk was discussed most recently in a meeting. We plot each of the twelve risks by its probability and impact score from the table above.

| Impact \ Probability | 1 (rare) | 2 (unlikely) | 3 (possible) | 4 (likely) | 5 (frequent) |
|---|---|---|---|---|---|
| 5 (severe) | | 10, 12 | 4 | | |
| 4 (major) | | 11 | 1, 5 | | |
| 3 (moderate) | | 6 | 2, 3, 9 | | |
| 2 (minor) | | 7, 8 | | | |
| 1 (negligible) | | | | | |

This table shows no risk sits in the top-right quadrant (probability 4 or 5 with impact 4 or 5), which is itself a finding: the plan has no risk we judge both likely and severe. The risk closest to that corner, and the single highest-scoring risk on the register, is risk 4 (skip rate), scored possible and severe, probability 3 and impact 5, for a score of 15, the reasoning set out above. Next nearest are risk 1 (referral) and risk 5 (margin levers), both scored probability 3 and impact 4, and risk 10 (cash trough breach) and risk 12 (food-safety finding), each scored probability 2 but impact 5, meaning we judge them unlikely but we would not have a fast way back if any one of them landed. The response column for exactly those five risks is the one the Board should read most closely before approving the plan.

### 21.3 Pre-mortem: it is month 12 and the plan has failed

A pre-mortem works backward from a stated failure to find the causes a forward-looking discussion tends to miss, because imagining failure as already real removes the social pressure to sound optimistic. We set the scene at month 12, the month the gate decision is made, and ask what story a Board member would tell if the plan had already failed by then.

**Story one: The operational improvements levers worked on paper but not on the invoice.** Gross margin crept up by only 1 to 2 points instead of 4, because the fulfilment-centre absorption gain (part of `[A18]`) never materialised: volume did not rise enough to spread fixed kitchen costs further, since new customers were still being pruned under `[A15]` at the same time. Marketing came down as planned, but revenue came down with it because the website-conversion gain (`[A14]`) also did not land, so the net effect on EBITDA was close to zero. This story matches risks 3, 5 and 6 acting together rather than any one risk alone, which is why the register treats them as linked (a single bad month on conversion makes the margin-lever timeline tighter, since there is less volume to absorb costs against).

**Story two: The rebuilt Proposal A reduced churn and reduced revenue by roughly the same amount.** The floor (two boxes in three months) held, so the skip rate stayed near the planned 5%, but customers who stayed used every available skip, so lifetime active months rose less than lifetime boxes-at-risk fell. This is risk 4 drifting a little above the 5% base without yet crossing its trigger, but still enough to blunt the retention gain the bridge credits at ₹0.31 Cr `[M T6]`. The response, enforcing the shipping floor and reviewing the plan design, was not triggered because the threshold was never crossed, which is exactly why the trigger itself was set at 6% rather than left at a looser number: at 6% it already functions as the early watch level, close enough to the 5.6% run-rate break-even that there is no room left for a separate, softer line beneath it.

**Story three: the gate numbers were close but wrong in the pessimistic direction on both tests at once.** Cash at month 12 came in at ₹6.8 Cr against the base case's ₹7.67 Cr `[M T5]`, and LTV to CAC came in at 2.3x against 2.74x, both below their gate thresholds (₹7 Cr and 2.2x respectively) by a small margin on the LTV test but a real one on cash. This is the scenario the bear case models directly: bear, no response, reaches cash zero by month 20 `[M T4]`, which is why risk 10's response is to pull the month 7 contingency `[A25]` well before month 12, not to wait and see whether the two gate tests will pass on their own.

None of the three stories requires a single dramatic event. Each is a slow drift in two or three assumptions at once, which is the reason the Board KPIs in section 23 are checked monthly rather than only at the three formal milestones, and the reason four of the seven KPIs carry a stop trigger before month 12.

The three stories map cleanly back onto the register, which is itself a check that the register is complete: a pre-mortem that produces a failure story with no matching row would mean a risk had been missed.

| Pre-mortem story | Risks it draws on | Closest modelled scenario |
|---|---|---|
| One: improvement levers work on paper, not on the invoice | 3 (conversion), 5 (margin levers), 6 (non-working marketing cut) | Improvements only, without the rebuilt Proposal A: EBITDA Y1 −₹6.02 Cr, Y2 −₹5.43 Cr, cash M24 ₹3.55 Cr `[M T4]`, a world where the operational improvements under-deliver relative to the rebuilt Proposal A's own contribution |
| Two: The rebuilt Proposal A cuts churn and revenue by about the same amount | 4 (skip rate), indirectly 1 (referral, since fewer active months means fewer referral-eligible third boxes) | A as written: EBITDA Y1 −₹10.44 Cr, cash zero by month 16 `[M T4]`, the extreme version of skipping outrunning retention gains |
| Three: both gate tests miss by a small margin at month 12 | 10 (cash trough), 11 (gate missed) | Bear, no response: cash zero by month 20 `[M T4]`, the scenario the month 7 contingency exists to intercept |

This table shows each story has a real, modelled scenario sitting behind it rather than an unbounded hypothetical, which is why none of the three responses in the main register table is open-ended: each points to a specific lever (floor tightening, contingency triggering, lever re-sequencing) that the model has already priced.

### 21.4 Food-safety risk for year 2, treated separately

Proposal C's own stated risk is explicit: "high upfront investment; food-safety and cold-chain challenges; operational complexity; significant cash requirement" `[C PC7]`. Because the staged ready-to-eat launch only opens behind the month 12 gate, we treat its food-safety exposure as a distinct risk category rather than folding it into the ten risks above, for one reason: it is a regulatory and criminal-liability exposure, not a financial-modelling exposure, and the two call for different kinds of mitigation.

The licensing position itself has moved during the life of this plan. Under the Food Safety and Standards (Licensing and Registration of Food Businesses) Regulations, 2011, the turnover thresholds between a basic registration, a state licence and a central licence were revised effective 1 April 2026: registration now covers turnover up to ₹1.5 Cr, a state licence covers ₹1.5 Cr to ₹50 Cr, and a central licence applies above ₹50 Cr `[S64]`. We use this revised band, not the pre-amendment one, in every discussion of HarvestBox's licensing position, as the build log's correction for writers instructs. On HarvestBox's 2025 revenue of ₹42 Cr `[C K5]`, the company sits inside the state-licence band today. The arithmetic matters for year 2: the base-case plan reaches ₹51.6 Cr of revenue in year 2 `[M T4]`, which is ₹1.6 Cr above the ₹50 Cr central-licence threshold (₹51.6 Cr − ₹50 Cr = ₹1.6 Cr). A successful ready-to-eat launch would therefore move HarvestBox from a state-issued licence to a centrally issued one during year 2, a compliance tier change the company has not had to manage before, and one we flag as an assumption's downstream consequence rather than a case fact, since the revenue figure that triggers it is a model output.

Three further regulatory facts bound the exposure. First, no food business operator may sell on an e-commerce platform without a valid FSSAI licence or registration, and FSSAI has separately directed e-commerce food business operators to deliver products with at least 30% of shelf life, or 45 days, remaining at the point of delivery, whichever test applies `[S65]`. A chilled ready-to-eat meal with a short total shelf life makes the 45-day absolute test irrelevant in practice (the meal will not have 45 days of shelf life at all) and places the entire operational burden on the 30%-of-shelf-life test, which in turn depends on how long the product's total shelf life is, a figure we could not verify to an Indian-specific, FSSAI-sourced standard in Lane E and have not modelled. Second, the penalty structure under the Food Safety and Standards Act 2006 is specific and escalating, and is not scaled to a company's size: it applies to a central-licence holder exactly as it would to a corner shop.

| Section | Offence | Penalty |
|---|---|---|
| 50 | Selling food not of the nature, substance or quality demanded | Up to ₹5 lakh, reduced to ₹25,000 for petty or small manufacturers under Section 31 |
| 51 | Sub-standard food | Up to ₹5 lakh |
| 52 | Misbranded food | Up to ₹3 lakh |
| 53 | Misleading advertisement | Up to ₹10 lakh |
| 54 | Food containing extraneous matter | Up to ₹1 lakh |
| 56 | Unhygienic processing or manufacture | Up to ₹1 lakh |
| 57 | Possessing adulterants | ₹2 lakh (non-injurious) or ₹10 lakh (injurious to health) |
| 58 | Contraventions not separately specified | Up to ₹2 lakh |
| 59 | Unsafe food | Up to 6 months plus ₹1 lakh (no injury); up to 6 years plus ₹5 lakh (grievous injury); minimum 7 years up to life plus a minimum ₹10 lakh fine (death) |
| 63 | Operating without a licence | Up to 6 months' imprisonment plus a fine up to ₹5 lakh |
| 64 | Repeat conviction for the same offence | Up to twice the first-conviction punishment, with possible licence cancellation |
| 65 | Compensation to the victim | Up to ₹5 lakh (death), ₹3 lakh (grievous injury), ₹1 lakh (other injury) |

*All penalties `[S68]`. Figures are statutory maxima or minima as stated in the Act; actual penalties imposed in any case depend on the facts and the adjudicating officer's finding.*

This table shows that operating without a valid licence (Section 63) is the floor risk if the licence-tier transition described above is not managed before the central-licence threshold is actually crossed, not after, and that the Section 59 ladder for unsafe food, up to life imprisonment where death results, is the reason this risk category is treated separately from the financial risks in the main register rather than folded into a probability-impact score alongside them.

We could not verify an India-specific, FSSAI-sourced shelf-life or cold-chain cost benchmark in Lane E; the raw file flags this gap directly, noting that the only shelf-life-extension figures found were vendor pages for equipment (modified-atmosphere packaging and high-pressure processing) rather than FSSAI standards, and that cold-chain and central-kitchen cost figures found were thin, inconsistent, single-company anecdotes. We therefore do not model a specific shelf-life or cold-chain cost number into the ready-to-eat case beyond what Proposal C already states (`[C PC2]` to `[C PC7]`), and we say so plainly here rather than present an invented figure with false precision, consistent with the content-integrity rule that an unverified seed fact is dropped, not softened.

The response to this category, consistent with risk 12 in the main table, is to front-load the compliance work into the three months before the month 12 gate decision rather than into the launch window itself: confirm which licence tier applies to the combined entity at projected year 2 revenue, document the Schedule 4 hygiene and food-safety-management-system requirements for the two gated cities' kitchens, and have the e-commerce delivery process (shelf-life-at-delivery discipline, separate handling of food and non-food items where relevant) designed and tested before the ₹4 Cr of staged investment `[A23]` is committed, not discovered as a surprise inside it.

**Exhibit for the deck: the risk register's top eight rows by heat-map proximity to the severe quadrant, shown as a compact probability-impact grid beside the response column for the four risks nearest that corner.**

## 22. The first 90 days: The rebuilt Proposal A live in five cities by week 12

**Answer.** We sequence eight workstreams across thirteen weeks so that the rebuilt Proposal A, the operational improvements and the data instrumentation to watch both are live in all five cities by week 12, with a one-city pilot running from week 4 to generate the first read on retention and skip behaviour before the full rollout locks its defaults. The ₹1.8 Cr Proposal A investment `[C PA2]` is split six ways by workstream, an assumption-based planning split since the model gives only the total; the pilot's own success test is an 81% month-2 retention read, the first two-month read of the week-3 and week-4 cohorts, against the plan's day-90 target `[M T11]`, and a skip rate under 6%, the same level as the Board's own stop trigger, because a pilot should earn confidence before the full rollout, not merely avoid the formal red line.

### 22.1 Eight workstreams, week by week

The ₹1.8 Cr build is a product, pricing, supply-chain and data project running in parallel, not a single sequential task list. We organise it into eight workstreams, each with a named lead role (not an individual, since the research document has no visibility into HarvestBox's organisation chart beyond the case's stated 410 employees, `[C K3]`) and a weekly cadence.

| Week | Product and engineering (the rebuilt Proposal A features) | Pricing and plans | Menu and supply chain | Referral and win-back | Marketing reallocation | Fulfilment and overheads | Data and KPI instrumentation | Pilot and governance |
|---|---|---|---|---|---|---|---|---|
| 1 to 2 | Specify skip, pause and swap rules; define the floor (two boxes in three months) | Finalise the ₹3,600 and ₹6,600 tiers against the ₹5,200 core `[A09]` | Map the roughly 40-recipe menu to 120 shared ingredients `[A09]` | Design the ₹1,000-each-side referral mechanic and the fraud guard (pay on the third box, `[A11]`) | Identify the costliest paid decile for pruning `[A15]` | Scope the head-office move into idle fulfilment-centre space `[A19]`, `[C X3]` | Define the seven Board KPIs and their data sources (section 23) | Select the pilot city and freeze the pilot's success test |
| 3 to 4 | Build skip and pause in the app; begin swap-within-family logic | Build the new pricing page copy and checkout flow | Lock the shared-ingredient recipe list; brief fulfilment centres | Build the referral credit engine and the win-back trigger list (lapsed accounts) | Cut non-working marketing spend by a first 20-point tranche `[A17]` | Begin the lease-and-space transition plan `[C X3]` | Instrument cohort-level retention and CAC tracking | Launch the pilot in one city |
| 5 to 6 | Internal QA of skip, pause, swap on the pilot city's traffic | Test the entry-page conversion flow against the 2.8% baseline `[C X5]` | Run the shared-ingredient menu in the pilot city's fulfilment centre | Soft-launch referral in the pilot city only | Hold the second pruning tranche pending the first month's read | Move non-pilot-city overhead planning forward | First weekly KPI dashboard live | Weekly pilot read: retention, skip rate, referral uptake |
| 7 to 8 | Fix issues found in the pilot; freeze the feature set for national rollout | Freeze the three-tier pricing ladder nationally | Freeze the national shared-ingredient menu | Freeze referral and win-back mechanics nationally | Complete non-working marketing cut to the full 40% `[A17]` | Execute the head-office move in the first non-pilot city | Add day-30 deliverables to the dashboard | Day 30 review: go or hold on national rollout |
| 9 to 10 | National rollout begins, city by city | National pricing live in rolled-out cities | National menu live in rolled-out cities | National referral and win-back live in rolled-out cities | Begin web-conversion-driven spend reallocation `[A14]` | Complete the remaining head-office moves | Cohort tracking live for all rolled-out cities | Day 60 review: two of five cities live |
| 11 to 12 | Complete rollout to all five cities | All five cities on the three-tier ladder | All five cities on the shared-ingredient menu | All five cities on referral and win-back | Full reallocation of marketing spend complete | Overhead cut target (12%, `[A19]`) tracked against plan | Full national KPI dashboard live | Day 90 review: all five cities live, pilot's first two-month read of the week-3 and week-4 cohorts banked |
| 13 | Buffer and stabilisation; carry fixes into month 4 | Buffer | Buffer | Buffer | Buffer | Buffer | Confirm KPI data feeds are stable for month 4 onward | Handover from build project to run-the-business ownership |

This table shows that the pilot city carries the real risk of the 90 days: everything that launches nationally in weeks 9 to 12 was tested in the pilot city from week 4. A single city running four extra weeks ahead of the other four lets the team see a skip rate and a referral-uptake number before committing the full ₹1.8 Cr build to a national rollout, at the cost of eight weeks where four cities are still on the old subscription terms.

Each workstream has one objective and one measure of whether week 12 was reached cleanly, stated here so the Gantt exhibit at the end of this section has a single line of text to carry per track.

| Workstream | Objective by week 12 | Measure |
|---|---|---|
| Product and engineering | Skip, pause and swap live in all five cities with the floor enforced | Zero critical defects open; floor correctly blocks a fourth skip in any rolling three-box window |
| Pricing and plans | Three-tier ladder (₹3,600, ₹5,200, ₹6,600) live nationally | Checkout correctly prices all three tiers; no city still on the single-tier legacy page |
| Menu and supply chain | Roughly 40 recipes live, built from 120 shared ingredients `[A09]` | Ingredient count at or below 120 across the live menu; no fulfilment centre reports a new stock-keeping unit outside that set |
| Referral and win-back | Referral and win-back mechanics live in all five cities | Referral paid only on a third box `[A11]`; win-back offers reaching at least 40 lapsed accounts a month `[A12]` by week 12 |
| Marketing reallocation | Non-working marketing cut fully executed; pruning complete | 40% of the ₹4.29 Cr non-working estimate removed `[A17]`; costliest paid decile paused `[A15]` |
| Fulfilment and overheads | Head-office function relocated into fulfilment-centre space in at least one city | First move complete with no disruption to that city's deliveries |
| Data and KPI instrumentation | All seven Board KPIs reporting on a live monthly dashboard | Zero manual data pulls required for the monthly Board pack |
| Pilot and governance | Pilot city's day 90 read banked and reviewed | Go or hold decision recorded in writing before week 13 |

This table shows the measures are binary wherever possible (a defect count, a ingredient count, a yes or no on a relocation) rather than open-ended, so the day 90 review in the next sub-section is a checklist against this table rather than a fresh discussion.

### 22.2 Day 30, 60 and 90 deliverables

| Milestone | Deliverable | Test |
|---|---|---|
| Day 30 | The rebuilt Proposal A feature set frozen and running in the pilot city; non-working marketing cut 20 points done | Pilot city shows no critical defect in skip, pause or swap; early retention read trending above the 55% baseline `[C R2]` |
| Day 60 | Rollout to at least two further cities; pricing ladder, referral and win-back live in all rolled-out cities; non-working marketing cut complete | Pilot city's month-2 retention read available; no city shows a skip rate above the 6% KPI stop trigger `[M T11]` |
| Day 90 | All five cities live on the rebuilt Proposal A and the operational improvements; full KPI dashboard operating; pilot's month-2 retention read banked | Pilot cohort's month-2 retention at or above 81%, the day-90 KPI target `[M T11]`, and skip rate under 6%, the Board's own stop trigger |

*KPI is key performance indicator.*

This table shows the 90-day plan has only one hard external test, the pilot cohort's month-2 retention, because a cohort begun in weeks 3 to 4 of the build has reached only about two months of age by day 90, not the three months the case's own baseline `[C R2]` is quoted at. The read is checked against the model's own month-2 survival figures, 81% targeted and 74% today, rather than against the case's month-3 point directly. Everything else in the 90 days is an internal build-and-rollout milestone, not yet a market result.

### 22.3 Pilot design in one city

The pilot runs in one of HarvestBox's five existing cities, chosen for having a fulfilment centre close to the system average 68% utilisation `[C X1]`, so the shared-ingredient menu and the skip-and-pause logic are tested under typical operating conditions rather than in an unusually idle or unusually stretched centre. The pilot cohort is every new sign-up in that city from week 4 onward, tracked against the case's existing month-1, month-3 and month-6 survival points `[C R1]`, `[C R2]`, `[C R3]` rather than against a new, separately defined metric, so the comparison is direct.

The city-selection criteria are stated once here as a short scorecard, so the choice of pilot city is a documented decision rather than an unstated one.

| Criterion | Why it matters | What we look for |
|---|---|---|
| Fulfilment-centre utilisation near 68% `[C X1]` | A pilot run in an unusually idle or unusually stretched centre would not generalise to the other four cities | A centre within a few points of the system average |
| Cohort size large enough to read a retention curve | A small city produces a noisy month-2 figure that cannot be judged against the 81% target with confidence | At least several hundred new sign-ups expected over the pilot's first four weeks |
| No concurrent operational change already under way | A city mid-way through an unrelated change (a new fulfilment-centre lease, a staffing change) would make it hard to attribute any shift in retention to the rebuilt Proposal A specifically | A city with a stable recent operating history |
| Representative exit-reason mix | The pilot should test against the case's stated reasons for leaving in roughly their stated proportions `[C W1]` to `[C W5]`, not a city where one reason dominates unusually | A city without a known, unusual skew in why customers have left historically |

This table shows the selection logic is deliberately conservative: a pilot city chosen to make the rebuilt Proposal A look its best would not be a fair test of whether the floor and the pricing ladder work at a national scale, and the fourth criterion in particular guards against that temptation.

The pilot's success test has two parts. The first is the retention read itself: the Board KPI table sets a day-90 pilot target of 81% month-2 retention for new cohorts, against today's 74% at month 2 `[M T11]`, `[C PA3]` (Proposal A's own stated expected impact is a rise to 65% three-month retention by month 12; 81% at month 2 on an early, partial cohort, the first two-month read of the week-3 and week-4 cohorts, is the corresponding interim marker on the way there). The second is the skip rate, which must stay under 6% in the pilot, the same level as the Board's own stop trigger `[M T11]`, because PA4's stated risk, that customers use flexibility to order less often `[C PA4]`, is exactly the failure mode the rebuilt Proposal A's floor (two boxes in three months) is built to prevent, and a pilot should demonstrate that the floor works before the other four cities are committed to the same mechanic.

If the pilot misses either test by day 90, the response is not to cancel the national rollout outright but to hold the referral and win-back launch in the remaining four cities for one additional month while the floor or the pricing ladder is adjusted, since the model shows the skip-rate and retention risks (risks 1 and 4 in section 21) carry the largest sensitivities of any input in the plan.

### 22.4 RACI

A RACI matrix states who is Responsible (does the work), Accountable (owns the outcome and signs off), Consulted (gives input before a decision) and Informed (told after). Exactly one role is Accountable for each workstream, even where several are Responsible, so that no decision has two owners.

| Workstream | Responsible | Accountable | Consulted | Informed |
|---|---|---|---|---|
| Product and engineering (the rebuilt Proposal A features) | Product and engineering team | Product lead | Operations lead (floor design), Data lead (skip-rate definition) | Chief executive, Board |
| Pricing and plans | Pricing and product team | Product lead | Marketing lead (entry-page copy), Finance (margin impact) | Chief executive, Board |
| Menu and supply chain | Supply chain and fulfilment-centre teams | Operations lead | Product lead (recipe-to-ingredient mapping), Finance (waste and cost impact) | Chief executive |
| Referral and win-back | Growth and engineering team | Growth lead | Finance (reward cost against `[A11]`, `[A13]`), Legal (fraud-guard terms) | Chief executive, Board |
| Marketing reallocation | Marketing team | Marketing lead | Finance (spend-cut sequencing against `[A15]` to `[A17]`) | Chief executive, Board |
| Fulfilment and overheads | Operations and facilities teams | Operations lead | Finance (lease and headcount impact of `[A19]`, `[C X3]`), Human resources | Chief executive, Board |
| Data and KPI instrumentation | Data and analytics team | Data lead | All other workstream leads (metric definitions) | Chief executive, Board |
| Pilot and governance | Pilot city general manager | Chief executive | All workstream leads (weekly pilot read) | Board |

This table shows the chief executive and the Board are Informed on every workstream and directly Accountable only for the pilot's go or hold decision, which is deliberate: the pilot is the one decision in the 90 days that commits the remaining ₹1.8 Cr build to a national rollout, and it is the only decision that should sit above the individual workstream leads.

The data and KPI instrumentation workstream has one job that cuts across all seven others: logging the events that let the Board KPIs in section 23 be computed without a manual pull each month. We state the minimum event set here, since a 90-day plan that builds the product features without building the matching event log would leave the Board waiting for its first KPI read well past day 90.

| Event logged | Which KPI it feeds | Logged from |
|---|---|---|
| Sign-up (with channel: paid, referral, win-back, organic) | New customers, blended CAC, referral share | Pricing and plans, referral and win-back workstreams |
| Box delivered or skipped (with reason, if given) | Three-month retention, boxes skipped % | Product and engineering workstream |
| Cohort active or lapsed at month 1, 3, 6, 12 | Three-month retention, LTV to CAC | Product and engineering, data workstream |
| Cost per acquisition channel, by month | Blended CAC, marketing % of revenue | Marketing reallocation workstream |
| Gross profit per box (price less ingredient and fulfilment cost) | Gross margin | Menu and supply chain, finance |
| Monthly overhead and lease spend | Other operating cost, cash in bank | Fulfilment and overheads workstream |

This table shows every one of the seven Board KPIs in section 23 depends on at least one event logged during these 90 days, which is why the data and KPI instrumentation workstream runs in parallel with every other workstream in the Gantt rather than starting only once the other builds are complete.

### 22.5 Budget of the ₹1.8 Cr by line

Proposal A's stated investment is ₹1.8 Cr `[C PA2]`, matched by the model's uses-of-cash table, which allocates ₹1.8 Cr to the rebuilt Proposal A build `[M T10]`. The model gives only the single total; splitting it into lines for a 90-day plan is a planning assumption, not a model output, so we say so here and flag it as an assumption rather than present it as case fact. We split it by the weight of effort shown in the workstream table above: product and engineering, carrying the largest build (skip, pause, swap and the pricing-tier logic), takes the largest share.

| Line | Share | ₹ Cr (share × ₹1.80 Cr) |
|---|---|---|
| Product and engineering | 35% | 0.63 |
| Menu and supply-chain redesign | 15% | 0.27 |
| Referral and win-back systems | 15% | 0.27 |
| Marketing and web-conversion redesign | 10% | 0.18 |
| Data and KPI instrumentation | 10% | 0.18 |
| Pilot operations and contingency | 15% | 0.27 |
| Total | 100% | 1.80 |

This table shows the split sums exactly to the ₹1.8 Cr case figure (0.63 + 0.27 + 0.27 + 0.18 + 0.18 + 0.27 = 1.80), with the two largest lines, product and engineering and the pilot's own operating buffer, together carrying half the budget, consistent with the 90-day plan's structure of building in the pilot city first and freezing the feature set only after that city's early read is in. This one-time ₹1.8 Cr build is separate from the rebuilt Proposal A's ongoing running cost of ₹0.25 Cr a year `[A20]`, which covers support and continued menu development once the build is complete and is carried in the year 1 and year 2 operating figures rather than in this 90-day capital line.

### 22.6 What is stopped to make room

A 90-day plan that only adds workstreams without stopping anything is not inside the case's ₹15 Cr constraint `[C G1]`, `[C G7]`. Three things stop in the first 90 days to make room for the rebuilt Proposal A and the operational improvements, each already reflected in the workstreams above rather than invented separately here: the costliest decile of paid acquisition spend, where CAC exceeds lifetime gross profit `[A15]`, `[A16]`; 40% of the ₹4.29 Cr of marketing not explained by CAC times new customers `[A17]`, `[M T2]`; and any further build on Proposal B or C in this window, since the case allows only one funded major initiative in the next 12 months `[C G0]`, `[C G6]` and both remain outside the ₹1.8 Cr rebuilt Proposal A budget until, in C's case, the month 12 gate is passed.

**Exhibit for the deck: a 13-week Gantt across the eight workstreams, with the pilot city's weeks 4 to 13 marked as a parallel track running ahead of the other four cities, and the day 30, 60 and 90 diamonds marked on the pilot track.**

## 23. Board KPIs: seven numbers with stop triggers

**Answer.** We recommend seven Board key performance indicators, each with a definition, a formula, a data source, a reporting cadence, an owner and a stop trigger that forces a specific action rather than a general conversation. All seven trace to the base-case model and move together down a single KPI tree rooted in EBITDA, Earnings Before Interest, Tax, Depreciation and Amortisation. Three commonly reported numbers, social-media followers, the raw count of registered subscribers and gross sign-ups before retention is applied, are deliberately excluded because none of them moves EBITDA on its own.

### 23.1 The seven KPIs

| KPI | Definition | Formula | Data source | Cadence | Owner | Today | Day 90 | Month 12 | Month 24 | Stop trigger and action |
|---|---|---|---|---|---|---|---|---|---|---|
| Three-month retention, new cohorts | Share of a sign-up cohort still active at month 3 | Active customers at month 3 ÷ cohort sign-ups | App and billing system, cohort-tagged | Monthly | Retention lead | 55% `[C R2]` | Month-2 retention 81% (pilot; today 74%) `[M T11]` | 65% `[M T11]`, `[C PA3]` | 65% `[M T11]` | Under 60% at month 6: hold the referral and win-back rollout in the remaining cities and rework the rebuilt Proposal A floor |
| Boxes skipped, % of boxes due | Share of scheduled boxes a customer skips in a month | Boxes skipped ÷ boxes due that month | App skip-and-pause log | Monthly | Product lead | None (not yet offered) | Launches month 4 | 5% `[M T11]` | 5% `[M T11]` | Over 6% for two months: tighten the floor or introduce a fee on a third consecutive skip |
| Blended customer acquisition cost | Average cost to acquire one new customer across all channels | Total acquisition spend ÷ new customers in the period | Marketing spend ledger ÷ sign-up count | Monthly | Marketing lead | ₹7,000 `[C U3]` | ₹6,276 `[M T11]` | ₹4,619 `[M T11]` | ₹4,745 `[M T5]`, `[M T11]` | Over ₹6,000 at month 6: pause further paid-channel expansion and re-run the pruning decile analysis |
| LTV to CAC, new cohorts | Lifetime gross profit per customer divided by acquisition cost | Lifetime gross profit (from the survival curve) ÷ CAC | Model, fed by the live survival and margin data | Quarterly | Finance lead | 1.55x `[C U6]` | 1.76x `[M T11]` | 2.74x `[M T11]` | 2.70x `[M T5]`, `[M T11]` | Under 2.0x at month 9: escalate to the Board; this is the earlier and more sensitive of the two month-12 gate tests |
| Gross margin | Gross profit as a share of revenue | Gross profit ÷ revenue | Finance system, monthly close | Monthly | Finance lead | 31.0% `[C P25]` | 31.2% `[M T11]` | 33.6% `[M T11]` | 35.2% `[M T5]`, `[M T11]` | Under 32% at month 9: reorder the margin-lever sequence in risk 5 of section 21 |
| Marketing as a share of revenue | Total marketing spend as a share of revenue | Marketing spend ÷ revenue | Finance system, monthly close | Monthly | Marketing lead | 30.0% `[C P25]` | 25.2% `[M T11]` | 20.3% `[M T11]` | 16.6% `[M T5]`, `[M T11]` | Over 25% at month 9: the non-working-marketing cut has not held; re-audit the ₹4.29 Cr non-working estimate `[M T2]` |
| Cash in bank | Cash available to the company | Direct bank balance | Treasury | Monthly | Finance lead and chief executive | ₹15.0 Cr `[C K4]` | ₹11.2 Cr `[M T13]` | ₹7.7 Cr `[M T5]`, `[M T11]` | ₹2.9 Cr `[M T4]`, `[M T11]` | Under ₹7 Cr at month 12: this is the second of the two month-12 gate tests, and the trigger for the month 7 contingency if seen earlier `[A25]` |

*LTV is lifetime value, CAC is customer acquisition cost.*

This table shows two of the seven KPIs, LTV to CAC and cash in bank, carry the formal month-12 gate decision on their own, while the other five are operational KPIs whose stop triggers exist to prevent the gate tests from being missed in the first place. Four of the seven KPIs (retention, skip rate, blended CAC, gross margin and marketing share, five in total once margin and marketing are both counted) carry a stop trigger before month 12, which is deliberate: a KPI that only reports a result at month 12 cannot change a decision before month 12.

### 23.1a The LTV to CAC ladder, and why 2.2x is the gate while 3.0x is the eventual target

The gate threshold (2.2x) and the benchmark the plan aims toward (3.0x) are not the same number, and the Board should hear why. Section 6 already derives that at HarvestBox's gross margin, non-working marketing load and overhead share, 3.0x is the exact point at which acquisition spend and the business's cost structure break even, not an arbitrary round number. The ladder below shows the four steps that take the business from today's 1.55x toward that benchmark, each step attributable to one lever rather than to the plan as a whole.

| Step | LTV to CAC | What moves it |
|---|---|---|
| Today | 1.55x `[C U6]` | Starting point |
| Retention | 1.67x `[M T12]` | The rebuilt Proposal A's net effect on retention after skips are netted out |
| Margin | 1.83x `[M T12]` | The gross-margin levers in `[A18]` |
| CAC | 2.70x `[M T12]` | Pruning, the non-working-marketing cut and the conversion gain acting on acquisition cost |
| Benchmark | 3.0x `[C U7]` | Not yet reached by month 24 under the base case |

This table shows the base case closes most of the gap to the 3.0x benchmark (from 1.55x to 2.70x, a rise of 1.15x out of the 1.45x total gap, or about 79%) but does not fully close it within 24 months, which is why the month-12 gate uses 2.2x, a threshold the base case passes comfortably at 2.74x `[M T5]` by that month, rather than requiring the full 3.0x benchmark before releasing the staged ready-to-eat option. David Skok's original statement of the convention, the commonly cited source for the 3:1 figure, puts it as "the best SaaS businesses have a LTV to CAC ratio that is higher than 3, sometimes as high as 7 or 8" `[S34]`, offered as an observed pattern across many businesses rather than a formula derived from first principles; HarvestBox's own 3.0x figure is stated directly in the case as the healthy benchmark `[C U7]` and is independently shown in section 6 to be the business's own break-even condition, so the two sources agree on the number without either one depending on the other.

### 23.2 KPI tree from EBITDA down

A KPI tree decomposes one top-level number into the operational levers that drive it, so that each leaf in the tree is a metric one named team can move directly. We root the tree in EBITDA, the number the case's own deliverable D3 asks the plan to show `[C D3]`.

```
EBITDA
  = Revenue − Cost of goods sold − Marketing − Other operating cost
Revenue
  = Active customers × orders per customer per month × average order value
Active customers
  = New customers (from the acquisition funnel) × survival curve (retention)
New customers
  = Website visits × website-to-first-order conversion
    + Referral-driven sign-ups
    + Win-backs of lapsed accounts
Survival curve
  = Month-1 to month-12 retention, shaped by the rebuilt Proposal A floor and the skip rate
Cost of goods sold
  = (1 − gross margin) × revenue, where gross margin moves on waste, buying,
    fulfilment-centre absorption and first-box discounting
Marketing
  = Paid acquisition spend (after pruning) + non-working marketing (after the cut)
    + referral and win-back rewards
Other operating cost
  = Overheads (after the lease and headcount reductions from the operational improvements) + the rebuilt Proposal A running cost
```

This decomposition shows exactly five leaves a named team can move without going through another team first: website-to-first-order conversion (marketing), referral and win-back volume (growth), the skip rate and the floor (product), gross-margin levers (operations and finance together), and overhead cuts (operations). Five of our seven Board KPIs map one-to-one onto these five leaves; the remaining two, LTV to CAC and cash in bank, are outcome metrics that combine several leaves at once and are the reason they carry the gate decision rather than a single team's accountability.

A stop trigger is only useful if everyone knows what happens the day it fires. We state the escalation path once, rather than leave it implicit in the "action" column of the KPI table.

| Who is told first | When | What they decide |
|---|---|---|
| The KPI's named owner (section 23.1) | The day the monthly or quarterly read crosses the trigger | Whether the response named in the KPI table can be applied without further sign-off |
| The chief executive | Within one week of the owner's read, for any trigger tied to cash, LTV to CAC, or two consecutive misses on any other KPI | Whether to apply the month 7 contingency (`[A25]`) ahead of schedule, or to escalate to the Board |
| The Board | At the next scheduled meeting, or within two weeks for a cash-related trigger | Whether the month 12 gate decision itself should be revisited early, or whether the response already applied is sufficient |

This table shows only cash and LTV to CAC triggers carry a mandatory path to the Board inside two weeks; every other KPI's first response sits with its named owner, which keeps the Board's attention on the two numbers that actually gate the ready-to-eat decision rather than on every operational metric at once.

### 23.3 Three vanity metrics the Board should ignore

A vanity metric looks like progress but does not move any leaf in the tree above. We name three the Board should see in a monthly pack, note, and then set aside rather than chase.

| Metric | Why it looks like progress | Why it is not a KPI here |
|---|---|---|
| Social-media followers (3.8 lakh, `[C K7]`) | A large, round, publicly comparable number that keeps growing independent of the company's financial health | It has no modelled link to new customers, retention or revenue anywhere in this plan; a follower count can rise while active customers fall, which is close to HarvestBox's actual recent history (revenue growth slowing from 53% to 10.5% a year while losses widened `[C P22]` to `[C P25]`) |
| Registered or "active" subscribers (62,000, `[C K1]`, `[C X6]`) | Reads as the company's customer base and is the figure management already reports | Section 4's insight shows this figure, if read as one order a month, implies ₹387 Cr of annual revenue against the case's actual ₹42 Cr `[C K5]`; the real monthly buying base is about 6,731 boxes `[M T2]`, roughly one in nine of the 62,000, so tracking 62,000 upward tells the Board nothing about whether the business is buying more often |
| Gross sign-ups before retention is applied (implied about 39,200 website first orders a month against roughly 990 net new customers, `[M T2]`) | A large top-of-funnel number that marketing teams naturally want to report, since it is the easiest number to grow with more ad spend | The gap between 39,200 and 990 is the entire story of early churn (45% gone by month 3, `[C R2]`); growing the top of the funnel without growing the survival curve underneath it is exactly the pattern that produced the current ₹9.2 Cr loss `[C K6]` |

This table shows all three excluded metrics share one property: each can rise while EBITDA falls, because none of them sits on a leaf of the KPI tree in section 23.2. We include them here, named and explained, rather than silently omit them, because a Board presented with a followers count or a subscriber count without this context will reasonably ask why it is not on the KPI list, and the answer should be on record rather than improvised in the room.

### 23.4 How each KPI reaches the Board

The seven KPIs are not all equally fresh when the Board sees them, and the Board should know which numbers are a same-day read and which are a modelled estimate that depends on assumptions still being tested.

| KPI | How current the number is | Dependent on an assumption |
|---|---|---|
| Three-month retention | A rolling read, finalised only once a cohort reaches its third month | No, a direct count from the app and billing system |
| Boxes skipped | Same-month, direct count | No |
| Blended CAC | Same-month, direct count from the spend ledger | No |
| LTV to CAC | Partly modelled: lifetime gross profit depends on the fitted survival curve `[A01]` | Yes, on the survival curve's shape beyond month 12 |
| Gross margin | Same-month, direct count from the finance close | No |
| Marketing % of revenue | Same-month, direct count from the finance close | No |
| Cash in bank | Same-day, direct bank balance | No |

This table shows six of the seven KPIs are direct counts with no assumption behind them, and only LTV to CAC carries a modelling dependency, on the shape of the survival curve past month 12 `[A01]`. That is one more reason the month 12 gate leans on cash, a fully direct number, alongside LTV to CAC rather than on LTV to CAC alone.

**Exhibit for the deck: a seven-row KPI table (today, day 90, month 12, month 24, stop trigger) beside a compact EBITDA-down KPI tree, with the three vanity metrics shown struck through in a footnote band.**

## 24. The 24-month roadmap: A now, ready-to-eat behind a gate, retail later

**Answer.** The 24-month roadmap runs the core rebuilt-Proposal-A-and-operational-improvements path from month 1, checks a two-part gate at month 12 (cash at least ₹7 Cr and LTV to CAC at least 2.2x for new cohorts), and only then releases the staged ready-to-eat launch at 80% of Proposal C's scale in two cities using idle fulfilment-centre capacity. Proposal B stays parked for the full 24 months on its own economics, not merely by sequencing preference. A month 7 contingency sits underneath the whole roadmap as an early-warning lever, independent of the month 12 gate, because acquisition spend is paid back ten months after it is spent, which makes it the fastest cash lever available if the plan runs behind in year 1.

### 24.1 Quarter-by-quarter roadmap

We lay the roadmap out in eight quarters, each showing the base-case cash position from the model's quarterly table and the headline action for that quarter.

| Quarter | Months | Cash in bank (₹ Cr) | Headline action |
|---|---|---|---|
| Q1 | 1 to 3 | 15.0 to 11.2 `[M T13]` | Build and launch the rebuilt Proposal A in the pilot city (section 22); begin the operational improvements levers (pruning, non-working marketing cut) |
| Q2 | 4 to 6 | 11.2 to 9.7 `[M T13]` | National rebuilt Proposal A rollout complete across all five cities; win-back and referral mechanics live nationally |
| Q3 | 7 to 9 | 9.7 to 8.6 `[M T13]` | Monitor the seven Board KPIs monthly; the month 7 contingency (`[A25]`) is available from this quarter if cash or retention tracks below plan |
| Q4 | 10 to 12 | 8.6 to 7.7 `[M T5]`, `[M T13]` | Month 12 gate test: cash ₹7.67 Cr against the ₹7 Cr threshold (pass), LTV to CAC 2.74x against the 2.2x threshold (pass) `[M T5]` |
| Q5 | 13 to 15 | 7.7 to 3.1 `[M T13]` | Staged ready-to-eat build and launch, ₹4 Cr invested across these three months `[A23]`; cash falls fastest here because this is the one-off capital spend, not an operating deterioration |
| Q6 | 16 to 18 | 3.1 to 2.9 `[M T13]` | Ready-to-eat ramps in its two launch cities; this quarter contains the model's lowest cash point, ₹2.89 Cr at month 20 falls in the following quarter but the approach to the trough begins here `[M T4]` |
| Q7 | 19 to 21 | 2.9 to 2.9 `[M T13]` | Break-even month: The base case's EBITDA crosses zero in month 21 `[M T4]` |
| Q8 | 22 to 24 | 2.9 to 2.92 `[M T4]`, `[M T13]` | Plan ends at a run-rate EBITDA of +₹0.10 Cr a year `[M T4]`, with cash essentially flat through the final quarter |

This table shows the roadmap's cash path is not a smooth decline: it falls through Q1 to Q3 as the business absorbs the rebuilt Proposal A's build cost and the operational improvements levers phase in, flattens through Q4 as the operational improvements' savings catch up with the investment, drops sharply in Q5 as the staged ready-to-eat capital is spent, and then holds roughly flat from Q6 onward as the plan reaches and then sits just above break-even. The quarterly figures from `[M T13]` and the monthly figures from `[M T4]` and `[M T5]` agree to within one or two decimal points of rounding (for example ₹2.9 Cr at month 24 in the quarterly table against ₹2.92 Cr in the monthly and scenario tables), the same underlying model read at two different levels of aggregation.

The roadmap also carries the case's own four deliverables, and we state once, in one place, which part of the 24 months answers each.

| Case deliverable | What it asks `[C D1]` to `[C D4]` | Where the roadmap answers it |
|---|---|---|
| D1, diagnosis and evaluation | Identify the core problems; compare all three proposals on growth, profitability, cash and risk | Sections 3 to 16, with the scorecard in section 16 and this section's gate-outcome table |
| D2, strategic recommendation | Select one initiative and justify it | Section 2, carried through every quarter of this roadmap as the primary path |
| D3, financial and risk case | Revenue, margins, EBITDA, cash, retention, risks and mitigations | Section 19 for the financial case, section 21 for the risk register, this section for how both play out over time |
| D4, 90-day plan and KPIs | A practical 90-day roadmap and 5 to 7 Board KPIs | Section 22 for the 90 days, section 23 for the KPIs, nested inside this section's Q1 |

This table shows the 24-month roadmap is not a fifth deliverable alongside the case's four; it is the timeline that the other four run on, with D4's 90 days sitting entirely inside Q1 and Q2 of the eight quarters above.

### 24.2 The month 12 gate, both tests and both outcomes priced

The gate has two conditions, both must pass: cash of at least ₹7 Cr and LTV to CAC of at least 2.2x for new cohorts at month 12. The base case passes both (cash ₹7.67 Cr, LTV to CAC 2.74x, `[M T5]`), which is why the base case already includes the staged ready-to-eat launch; the core case, without ready-to-eat, is what the plan would default to if the gate had failed.

| Outcome | Revenue Y1, Y2 | EBITDA Y1, Y2 | Run-rate EBITDA (M22 to M24) | Cash at month 24 |
|---|---|---|---|---|
| Gate passes: Recommended plan, base (ready-to-eat released) | ₹41.3 Cr, ₹51.6 Cr | −₹5.53 Cr, −₹0.75 Cr | +₹0.10 Cr | ₹2.92 Cr |
| Gate fails: Recommended plan, core (stays on the rebuilt Proposal A and the operational improvements only) | ₹41.3 Cr, ₹47.8 Cr | −₹5.53 Cr, −₹2.02 Cr | −₹1.69 Cr | ₹5.65 Cr |

*All figures from `[M T4]`.*

This table shows the two outcomes trade growth for cash in a specific, priced way: passing the gate adds ₹3.8 Cr of year 2 revenue (₹51.6 Cr − ₹47.8 Cr) and moves the run-rate from a ₹1.69 Cr loss to a ₹0.10 Cr gain, at the cost of ₹2.73 Cr less cash in hand at month 24 (₹5.65 Cr − ₹2.92 Cr). Neither outcome is a failure. A missed gate means the company spent year 1 fixing retention and unit economics and chose, correctly on its own numbers, not to add a second initiative on top of an unproven first one; insight 12 already states this plainly, that the uncomfortable half of the finding is that ready-to-eat with the operational improvements earns ₹0.4 Cr more EBITDA over 24 months than the core path alone, but ends with ₹2.9 Cr of cash against ₹5.6 Cr and a less favourable run-rate, −₹3.19 Cr `[M T4]` for C with the operational improvements alone against −₹1.69 Cr for the core path. Sequencing the operational improvements and the rebuilt Proposal A first is what makes a later ready-to-eat decision cheaper and better-informed than launching it first would have been, which is the plan's central sequencing argument, not a preference for caution over growth.

To show the gate decision inside the full range of outcomes the model carries, not only its two headline rows, we add the bear and bull scenarios alongside base and core at month 24.

| Scenario | Revenue Y2 | EBITDA Y2 | Run-rate EBITDA | Cash at month 24 | Break-even month |
|---|---|---|---|---|---|
| Bear, no response | ₹39.1 Cr | −₹7.65 Cr | −₹7.74 Cr | −₹2.70 Cr (cash zero at month 20) | None |
| Bear with the month 7 contingency | ₹25.1 Cr | −₹5.56 Cr | −₹6.32 Cr | ₹1.46 Cr | None |
| Recommended plan, core (gate fails) | ₹47.8 Cr | −₹2.02 Cr | −₹1.69 Cr | ₹5.65 Cr | None |
| Recommended plan, base (gate passes) | ₹51.6 Cr | −₹0.75 Cr | ₹0.10 Cr | ₹2.92 Cr | Month 21 |
| Bull | ₹59.5 Cr | ₹2.48 Cr | ₹3.67 Cr | ₹5.90 Cr | Month 14 |

*All figures `[M T4]`.*

This table shows the roadmap's two headline outcomes, core and base, sit in the middle of the full scenario range: bear without the contingency is the only scenario that runs out of cash before month 24, and bull is the only scenario that breaks even before month 21. The month 7 contingency's entire purpose is to move the plan off the bear-without-response row and onto a row that survives to month 24, even at the cost of slower year 2 revenue growth (₹25.1 Cr against ₹39.1 Cr).

### 24.3 The staged ready-to-eat launch design

If the gate passes, the staged launch follows Proposal C's shape but at a fraction of its scale and inside the company's existing footprint. It runs at 80% of Proposal C's scale, costs ₹4 Cr spent across months 13 to 15, and begins generating sales from month 14 `[A23]`. It launches in the two largest of HarvestBox's five cities first, rather than all five, and uses the 32% of fulfilment-centre capacity currently idle (the case states 68% utilisation today, `[C X1]`, so 100% − 68% = 32% is idle), which avoids a new capital commitment to kitchen space that a from-scratch Proposal C would have required.

The regulatory position for this launch is the one set out in section 21.4: HarvestBox's core business sits inside the ₹1.5 Cr to ₹50 Cr state-licence band under the revised FSSAI thresholds effective 1 April 2026 `[S64]`, but the combined entity's year 2 revenue of ₹51.6 Cr `[M T4]` crosses the ₹50 Cr central-licence threshold by ₹1.6 Cr, so the licence-tier transition must be managed as part of this launch, not treated as a side issue. The e-commerce delivery rules requiring a valid FSSAI licence and a minimum shelf-life-at-delivery discipline `[S65]` apply to this channel from day one of sales in month 14, since the case states HarvestBox already sells through quick-commerce platforms `[C K12]`, an existing e-commerce exposure the ready-to-eat line simply extends rather than creates.

### 24.4 What would bring Proposal B back

Proposal B, grocery retail, is not rejected outright; it is parked because its own numbers, even with the operational improvements applied, do not clear the bar the core path and the gated ready-to-eat path both clear. As written, B reaches ₹8 Cr of year 1 incremental revenue `[C PB3]` through roughly 800 stores `[C PB1]`, which works out to ₹8,333 a store a month (₹8 Cr ÷ 800 stores ÷ 12 months = ₹8,333), less than two boxes at the ₹5,200 price point.

| Measure | B as written | B with the operational improvements | Core path (A rebuilt, no B or C) |
|---|---|---|---|
| EBITDA, year 1 | −₹9.31 Cr | −₹5.19 Cr | −₹5.53 Cr |
| EBITDA, year 2 | −₹10.71 Cr | −₹4.30 Cr | −₹2.02 Cr |
| Run-rate EBITDA | −₹11.37 Cr | −₹4.65 Cr | −₹1.69 Cr |
| Cash at month 24 | cash zero at month 16 | ₹2.39 Cr | ₹5.65 Cr |

*All figures `[M T4]`.*

This table shows that even with the operational improvements' savings applied on top of it, B still finishes 24 months behind the core path on every measure: a run-rate loss of ₹4.65 Cr against ₹1.69 Cr, and cash of ₹2.39 Cr against ₹5.65 Cr. B would return to consideration under two conditions, neither of which the case or any verified source currently supports: first, if a retailer offered terms meaningfully better than the assumption set behind B (returns and unsold stock at 4% of sales, channel cost at 6%, 5% cannibalisation, 60 days of receivables, `[A21]`), for example a channel cost closer to half of 6%, since channel cost is the largest single drag in that assumption set; second, if the ready-to-eat gate is missed and the Board specifically wants a second distribution channel for the core box rather than a second product line, since B's main case-stated benefit is incremental revenue on the existing product, not a new one `[C PB1]` to `[C PB5]`.

### 24.5 The month 7 contingency

Separate from the month 12 gate, a contingency is built into month 7 of the plan: if cash or retention is tracking below plan by that point, paid acquisition is halved, non-working marketing is halved again on top of the already-planned cut, and overheads are cut a further 15% beyond the base `[A25]`. This is the fastest lever available because paid acquisition is spent ten months before CAC is paid back `[M]` (the case's own CAC payback month is month 10, `[M]`), so cutting it stops a cash outflow immediately rather than waiting for a future cohort to underperform before acting.

| Lever | Base plan | Month 7 contingency `[A25]` |
|---|---|---|
| Paid acquisition spend | Pruned by 10% (`[A15]`, `[A16]`) | Halved from the already-pruned level |
| Non-working marketing | Cut 40% (`[A17]`) | Cut a further half on top of the 40% |
| Overheads | Cut 12% (`[A19]`) | Cut a further 15% beyond that |

This table shows the contingency does not introduce a new lever; it pushes the same three levers the operational improvements already use further and faster, which is why it can be pulled inside a single month rather than requiring a new build. Modelled against the bear scenario, applying it moves the outcome from cash reaching zero in month 20 with no response `[M T4]` to a 24-month EBITDA of −₹6.18 Cr in year 1 and −₹5.56 Cr in year 2 with ₹1.46 Cr of cash still in hand at month 24 `[M T4]`, the difference between a survivable bear case and one that runs out of cash four months before the investors' 24-month test `[C K11]`.

### 24.6 The roadmap in one line

The roadmap is deliberately not a race to do everything at once. Months 1 to 12 fix the two things the case's own numbers say are broken, retention and the price paid for growth; month 12 is the one point where the plan asks a verifiable, two-part question before committing a further ₹4 Cr; and months 13 to 24 either extend the business into a second, smaller, idle-capacity-funded line or simply keep compounding on the operational improvements, with Proposal B held in reserve and the month 7 contingency available throughout year 1 regardless of which path year 2 takes.

Therefore, we recommend the Board approve the rebuilt Proposal A and the operational improvements now, inside the ₹1.8 Cr Proposal A budget `[C PA2]`, fund it from the existing ₹15 Cr cash position `[C K4]`, and commit in advance to the month 12 gate test on cash and LTV to CAC as the sole, pre-agreed trigger for releasing the staged ready-to-eat launch, rather than revisiting the choice among A, B and C from scratch at that point. This keeps the ₹5 Cr scale of Proposal C's full ambition `[C PC2]` available to the company without spending it before the retention and unit-economics problem that caused the ₹9.2 Cr loss `[C K6]` is actually fixed, and it keeps Proposal B's ₹8 Cr of incremental revenue `[C PB3]` available as a later option without committing working capital to it while the core business is still proving it can hold a customer past month three.

**Exhibit for the deck: an eight-quarter roadmap bar with the month 12 gate marked as a decision diamond, the two priced outcomes shown as a small branching table beneath it, and the month 7 contingency marked as a dashed trigger line running under the whole of year 1.**

## 25. Assumptions register and model summary

**Answer.** The recommended plan rests on twenty-five named team assumptions, each with a stated value, a rationale and a sensitivity range, layered on top of case facts that are never changed `[C G3]`. Nine of the twenty-five carry most of the model's uncertainty, measured by how far the month 24 run-rate moves when each is tested alone `[T7]`, and two of those nine, referral share and website conversion, are also the two with the thinnest outside corroboration anywhere in this document. The model itself is a short, deterministic chain: case facts and assumptions go in, a fitted monthly survival curve and a cohort-by-cohort cash ledger come out, and the whole chain reproduces to the digit on every rerun, hash `06111c6c33` `[M]`.

### 25.1 Case facts used, and how the model consumes them

The model does not use every one of the seventy-four case reference IDs listed in section 1's coverage matrix; several (the social-media follower count `[C K7]`, the quick-commerce listing `[C K12]`, the customer-research sentence `[C M4]`) are context the document discusses but the model does not compute with. The IDs the model actually consumes as inputs are a smaller, specific set.

| Case ID | What it supplies to the model | Role |
|---|---|---|
| K2 | ₹5,200 average order value | The rupee value of one box, used in every revenue and gross-profit line |
| K4 | ₹15 Cr cash available | The starting balance of every cash-path table `[T4]` `[T13]` |
| K5 | ₹42 Cr 2025 revenue | The base-year revenue the model's steady-state new-customer count is solved from `[A02]` |
| K6 | ₹9.2 Cr 2025 EBITDA loss | The starting point of the bridge in `[T6]` |
| K9 | Five cities, one fulfilment centre each | The footprint the 90-day plan and the staged ready-to-eat launch are built against |
| K11 | 24-month funding horizon | The length of every modelled scenario |
| R1 to R4 | Survival at months 1, 3, 6, 12 (100%, 55%, 34%, 19%) | The four points the geometric decay curve is fitted through `[A01]` |
| U2 | ₹1,600 gross profit a box | Multiplied by cumulative boxes to get lifetime gross profit |
| U3 | ₹7,000 customer acquisition cost (CAC) | The denominator of every LTV to CAC figure and the input to the payback calculation |
| U4 | 6.8 lifetime boxes | The target the fitted survival curve's tail is solved to reproduce `[A01]` |
| U7 | 3.0x benchmark LTV to CAC | Shown in section 6 to be the business's own break-even condition, not an arbitrary target |
| P22 to P25 | Four years of revenue, gross margin, marketing % and EBITDA margin | Rebuilt into rupees as `[T1]` and the source of the issue tree in section 3 |
| X1 to X5 | Utilisation, waste, lease, website traffic, conversion | Each feeds one specific operational-improvement lever (sections 18 and 24) |
| PA1 to PA4 | Proposal A's features, investment, expected impact, risk | The ₹1.8 Cr budget and the 55% to 65% retention target that the rebuilt Proposal A builds on |
| PB1 to PB5 | Proposal B's shape, investment, revenue, margin, risk | Converted into a per-store, per-month figure in section 14 |
| PC1 to PC6 | Proposal C's shape, investment, revenue, margin, cannibalisation | Converted into net contribution against the ₹5 Cr investment in section 15 |

*CAC: customer acquisition cost. LTV: lifetime value.* The table shows the model is built on fifteen distinct families of case fact, not on all seventy-four reference points; the remaining case IDs are used in prose, in the coverage matrix and in the honest treatment of the three figures that do not reconcile (section 4), but they do not change a single number the model produces.

### 25.2 The assumptions register, A01 to A25

Every assumption below carries the value, rationale and sensitivity stated at planning time, reproduced here as the source of every `[A##]` tag used anywhere in this document, per the case's own instruction that major assumptions be stated and justified `[C G3]`.

| ID | Assumption | Value | Rationale | Sensitivity shown |
|---|---|---|---|---|
| A01 | A box is one month of dinners; survival between case points is geometric; retention after month 12 | 0.9058 a month | Solved so lifetime boxes equal the case's 6.8 `[C U4]`. Close to the month 6 to 12 rate (0.9076), so the case is internally consistent on this reading | Section 4 |
| A02 | Revenue is in steady state at 2025 volumes at month 0 | 990 new customers a month | ₹42 Cr ÷ ₹5,200 ÷ 12 ÷ 6.8 `[C K5]` `[C K2]` `[C U4]`. Growth slowed from 53% to 10.5% | Section 4 |
| A03 | Gross margin drift with no decision | −1.5 points a year | History is −2.3 a year; we assume less, which flatters the no-decision case | Drift scenario |
| A04 | Paid CAC inflation with no decision | 8% a year | Marketing per rupee of new revenue rose from 0.31 to 0.49 in two years `[T1]` | Drift scenario |
| A05 | Other operating cost inflation, every scenario | 4% a year | Wage and rent inflation | Bridge headwinds |
| A06 | Gross margin drift under the plan | −0.5 points a year | Input inflation continues; discount pressure stops | Bridge headwinds |
| A07 | Paid CAC inflation under the plan | 3% a year | Channels are pruned, not pushed | Bridge headwinds |
| A08 | Share of boxes skipped once skipping is free | 5% base, 10% bear, 3% bull | The floor (two boxes in any three months) caps it near 33% in theory; the skip rate that cancels Proposal A's retention gain is 12.6% `[M]` | Grid `[T8]`, tornado `[T7]` |
| A09 | Order value after the plan mix | ₹5,091 (20% at ₹3,600, 65% at ₹5,200, 15% at ₹6,600) | Entry plan priced at ₹450 a meal, family plan at ₹412 | Section 17 |
| A10 | New customers from referral | 20% of sign-ups by month 12 (10% bear, 28% bull) | A Lane C benchmark `[S33]`, to be read as directional only | Tornado `[T7]` |
| A11 | Referral cost | ₹2,000 a customer | ₹1,000 each side, paid on the third box | Section 18 |
| A12 | Win-backs | 40 a month from month 4 (20 bear) | About 3,300 of last year's leavers left for rigidity `[C W1]` | Section 18 |
| A13 | Win-back cost | ₹800 each | One box credit and messaging | Section 18 |
| A14 | Website conversion | 2.8% to 3.3% (3.0% bear, 3.5% bull) | Entry price and skip promise remove the two largest stated objections at sign-up `[C W1]` `[C W2]`. Used as a ratio only | Tornado `[T7]` |
| A15 | Paid volume pruned | 10% | The costliest decile of paid customers | Section 18 |
| A16 | Paid CAC after pruning | 0.89 of today | That decile's CAC of ₹14,000 exceeds lifetime gross profit of ₹10,900 `[C U5]` | Section 18 |
| A17 | Non-working marketing | Cut 40% (25% bear) | ₹4.29 Cr of marketing is not explained by CAC times new customers `[T2]` | Tornado `[T7]` |
| A18 | Gross margin levers | +4.0 points over 15 months (+2.5 bear, +5.0 bull) | Waste 6% toward 4% `[C X2]` (+0.8), fulfilment-centre absorption (+1.2), shared-ingredient menu and buying (+1.2), packaging (+0.3), less first-box discounting (+0.5). Lands at 35%, below the 36% of 2023 `[C P23]` | Tornado `[T7]` |
| A19 | Overheads | Cut 12% (5% bear, 12% bull) | ₹1 Cr lease `[C X3]` moved into idle fulfilment-centre space, hiring freeze with normal attrition | Tornado `[T7]` |
| A20 | The rebuilt Proposal A running cost | ₹0.25 Cr a year | Support, menu development | Section 19 |
| A21 | Proposal B terms | Returns and unsold stock 4% of sales; channel cost 6%; 5% cannibalisation; 60 days of receivables; 8% growth in year 2 | Chilled kits with short shelf life; modern-trade credit terms `[S61]` `[S62]` | Section 14 |
| A22 | Proposal C terms | Running cost 12% of ready-to-eat sales; 15% growth in year 2; six-month ramp | Quality, cold chain and launch marketing; the case's own market growth `[C PC5]` | Section 15 |
| A23 | Staged ready-to-eat | 80% of C's scale, ₹4 Cr over months 13 to 15, sales from month 14 | Two largest cities first, idle fulfilment-centre space `[C X1]` | Tornado `[T7]` |
| A24 | Scorecard weights | Growth 20, profit 30, cash 30, risk 20 | The investors' test is profit and survival `[C K11]`, not top-line growth | Section 16 |
| A25 | Month 7 contingency | Paid acquisition halved, non-working marketing halved, overheads down a further 15% | Acquisition is paid ten months before it returns `[M]`, so cutting it is the fastest cash lever | Section 20 |

*Bear and bull values in brackets feed the two alternative scenarios in section 20; the base value is what every other table in this document uses unless a scenario name says otherwise.*

### 25.3 The nine that matter most

Not every assumption carries equal weight. The model's own one-input-at-a-time sensitivity test `[T7]` and the risk register's linked-input table (section 21) together identify which assumptions move the month 24 run-rate the furthest when tested alone, holding every other input at its base-case value. We rank the nine largest swings here, because a judge asking "which of your twenty-five numbers should I actually worry about" deserves a ranked answer, not an assurance that all twenty-five matter equally.

| Rank | Assumption | Range tested | Run-rate swing, ₹ Cr | Why it ranks here |
|---|---|---|---|---|
| 1 | A10, referral share | 10% to 30% of sign-ups | 2.77 `[T7]` | The single widest swing of any input in the model; also the assumption with the thinnest outside evidence, one European retail-banking study `[S33]` |
| 2 | A08, skip rate | 12% to 0% | 2.13 `[T7]` | The case's own stated risk for Proposal A `[C PA4]`; the floor exists specifically to hold this rate down |
| 3 | A01 (with case fact PA3), 3-month retention | 60% to 70% | 1.86 `[T7]` | The foundation every other cohort number in this document is built on; not a free assumption, since it is anchored to the case's own four survival points `[C R1]` to `[C R4]` |
| 4 | A23, ready-to-eat sales | 50% to 120% of plan | 1.26 `[T7]` | Gates the year 2 launch; the only one of the nine that does not touch the core path at all if the month 12 gate is missed |
| 5 | A18, gross margin levers | +2.5 to +5.0 points | 1.22 `[T7]` | The second-largest single step in the bridge, ₹1.53 Cr `[T6]`, built from five named candidates, three of them (waste, absorption, buying) tied to case facts `[C X1]` `[C X2]` |
| 6 | A17, non-working marketing cut | 25% to 50% | 1.07 `[T7]` | The largest marketing-side lever on its own, ₹1.71 Cr `[T6]`, drawn from a figure the model itself derives rather than one the case states directly |
| 7 | A14, website conversion | 3.0% to 3.6% | 1.10 `[T7]` | Its own bridge step, worth +1.07 ₹ Cr `[T6]`, one of three acquisition-side steps (with A10 and A12/A13) that together total ₹3.77 Cr before component rounding, the largest block in the whole bridge |
| 8 | A19, overhead cut | 6% to 15% | 0.93 `[T7]` | The smallest of the nine, by design: section 3 already shows overheads were never the problem, so this lever is sized modestly |
| 9 | A12 and A13, win-back volume and cost | 20 to 40 a month, ₹800 each | Not separately tornado-tested | Its own bridge step, worth +0.50 ₹ Cr `[T6]`; the case's own stated 34% rigidity share `[C W1]` implies roughly 3,300 of last year's leavers left for a reason a pause offer can address |

The pattern across this ranking is not flattering to the plan's own best-looking number. The two assumptions with the widest individual swing, referral share and the skip rate, are also, respectively, the weakest-evidenced lever in the document and the case's own named risk for the whole of Proposal A `[C PA4]`. This is stated here, once more, because section 25 is the place a judge is most likely to come looking for it directly: the plan's gates (the month 7 contingency, the month 12 cash-and-LTV test) exist precisely because the two numbers that move the outcome most are also the two the team is least certain of in advance.

### 25.4 Model structure in plain words

The HarvestBox model is a single Python script, `model/harvestbox_model.py`, that runs in four stages without any random component, so the same inputs always produce the same outputs `[M]`.

First, it fits the monthly survival curve (section 4.1 of this document) through the case's four retention points `[C R1]` to `[C R4]`, solving for the geometric rate that also reproduces the case's stated 6.8 lifetime boxes `[C U4]` under assumption A01. Second, it builds a cohort engine: each month's new sign-ups, set by assumption A02 at steady state and adjusted scenario by scenario for referral, win-back and conversion gains, are carried forward on that survival curve, multiplied by gross profit per box `[C U2]` and netted against acquisition cost `[C U3]` to produce a month-by-month cash and EBITDA ledger. Third, it layers the scenario-specific levers, the operational-improvement cuts to marketing and overheads, the rebuilt Proposal A floor's effect on the skip rate, the staged ready-to-eat launch's revenue and cost, on top of the cohort engine, for each of the twelve named scenarios in table `[T4]`. Fourth, it runs fourteen internal checks (the arithmetic in the bridge sums to the stated total, the scorecard weights sum to 100, the uses-of-cash table sums to ₹15 Cr, and eleven others) and prints a hash of its own code and inputs, so that any change to a single number, intentional or accidental, produces a different hash and a visibly different set of outputs rather than a silent drift.

| Stage | What it does | Output |
|---|---|---|
| 1. Curve fitting | Solves the monthly decay rate and the post-month-12 tail from four case points and the 6.8-box target | The survival curve `[T3]`, used by every later stage |
| 2. Cohort engine | Carries each month's sign-ups forward on the curve, nets gross profit against acquisition cost | The base month-by-month ledger `[T5]`, `[T13]` |
| 3. Scenario layering | Applies improvement levers, the rebuilt Proposal A's floor, referral and win-back gains, and the staged ready-to-eat launch where relevant | Twelve named scenarios `[T4]`, the bridge `[T6]`, the sensitivity table `[T7]`, the grid `[T8]`, the scorecard `[T9]` |
| 4. Checks and hash | Runs fourteen internal consistency checks; hashes the code and inputs | `HASH 06111c6c33`, `14 of 14 PASS`, `FINDINGS [135, 146, 134, 146, 150]` `[M]` |

### 25.5 How to rerun the model and change one input

A reader who wants to test a different assumption, not challenge the model's arithmetic but ask "what if A10 were 25% instead of 20%", follows four steps. First, open `model/harvestbox_model.py` and locate the named assumption by its ID in a comment immediately above the line that sets its value; every assumption in the register above is written into the script with its ID as a label, so a search for "A10" finds the referral-share line directly. Second, change only that one value, leaving every other line untouched. Third, run `python -X utf8 verdict-mnc/model/harvestbox_model.py` from the repository root. Fourth, compare the new hash against `06111c6c33`: a different hash confirms the change was registered, and the script reprints all fourteen checks and rewrites `model_outputs.json`, `model_tables.md` and `deck/values.js` with the new figures.

| Step | Command or action | What confirms it worked |
|---|---|---|
| 1 | Find the assumption's line by its `[A##]` label in the script | The exact value matches the register in section 25.2 |
| 2 | Edit only that one value | No other line changes |
| 3 | `python -X utf8 verdict-mnc/model/harvestbox_model.py` | Script runs without an error and prints 14 lines |
| 4 | Compare the printed hash against `06111c6c33` | A different hash confirms the change propagated; all three output files are rewritten |

The document's own rule, stated in section 0.4 and repeated here because section 25 is where a change would actually be made, is that if a locked number ever changes, every sentence in this document that uses it is rewritten, never patched in one place and left stale everywhere else. A reader who reruns the model with a changed assumption should expect every table in Appendix B, and every sentence in this document that cites a tag drawn from those tables, to move together, because they are all one calculation, not twenty-nine independent ones.

Exhibit for the deck: appendix slide only, carrying the assumptions table and a compressed version of the nine-ranked sensitivity table, available the moment a judge asks which number in the plan the team is least sure of.

## 26. Slide blueprint for the deck

**Answer.** The deck that follows this document is seven slides, one cover, four core slides matched one each to the case's own four deliverables, one appendix, one thank-you `[C G4]`, and every number, panel and chart named below traces to a section or a model table in this document, so the deck and the research base agree to the digit by construction rather than by later reconciliation. The cover carries a real dinner mind map rather than a plain title panel, with placeholder slots for the four organiser marks and for every real brand named in the research (Blinkit, Zepto, Swiggy, Zomato, HelloFresh, Blue Apron, ITC, MTR), each slot stating plainly that no partnership with HarvestBox is implied.

### 26.1 The seven-slide blueprint

Each row below names the slide's action title, the panels it carries, the chart or table drawn in each panel, and the section or model table the panel's content is drawn from, so a reader checking the deck against this document can trace every element in one pass.

| # | Slide | Action title | Panels and their charts or tables | Draws on |
|---|---|---|---|---|
| 1 | Cover | HarvestBox: Growing Without Burning Out | Title and team table (Members, Institution, Role); a verdict card stating the one-sentence recommendation; the dinner mind map (hub "a weekday dinner", five spoke nodes, ten brand placeholder slots, a "rebuilt" node for the rebuilt Proposal A, a precedent strip with two global cards); four organiser logo slots | Section 2.8 (the 150-word cover version); section 9.2 (the dinner map); section 11.9 (the two precedent lines) |
| 2 | Diagnosis and evaluation (D1) | 15 margin points were lost in two lines and none in overheads | Four-year history table `[T1]`; survival line with a payback marker at month 10 against the ₹7,000 CAC `[C U3]`; two-customers table (leavers against stayers) `[T2]`; exit-reason bars keyed to which proposal answers each reason; scorecard heat grid with the weighting formula `[T9]`; four cash lines (no decision, A, B, C as written) `[T13]` | Sections 3, 5, 6, 7, 13 to 16 |
| 3 | Strategic recommendation (D2) | Fund Proposal A, rebuilt, and reach break-even in month 21 on the cash in hand | "Do not" against "do" cards (section 2.1); skip-rate heat grid `[T8]`; the rebuilt Proposal A feature table (section 17); LTV to CAC ladder bars `[T12]`; a card closing "Conclusively", repeating section 16's close | Sections 2, 13, 16, 17 |
| 4 | Financial and risk case (D3) | The loss falls from ₹9.2 Cr to ₹0.8 Cr and break-even arrives in month 21 | EBITDA bridge waterfall `[T6]`; the moneyshot card (break-even month 21, lowest cash ₹2.89 Cr in month 20 `[M]`); three-scenario table (bear, base, bull) `[T4]`; four cash lines (drift, base, core, bear) `[T13]`; risk table, top rows by heat-map proximity to the severe quadrant (section 21.2) | Sections 19, 20, 21 |
| 5 | 90-day plan and KPIs (D4) | The rebuilt Proposal A live in five cities by week 12 | 13-week Gantt across eight workstreams (section 22.1); uses of the ₹15 Cr bar and table `[T10]`; seven-KPI table with stop triggers `[T11]`; a card closing "Therefore", repeating section 24's close | Sections 22, 23, 24 |
| 6 | Appendix | Assumptions, data checks and the full options table | Assumptions table (section 25.2, the nine that matter most from 25.3); data-reconciliation table (the three figures that do not tie, section 4); tornado chart ranked by swing `[T7]`; options table (all four scored cards, `[T9]`); reading notes expanding every abbreviation used on the slide | Sections 4, 16, 20, 25; Appendix D |
| 7 | Thank you | Thank you, from Team IdeaForge | Title; the same verdict card as the cover; the same Members, Institution, Role table as the cover; the same four organiser logo slots | Repeats slide 1's team table and recommendation, per the user's standing cover and thank-you style |

*CAC: customer acquisition cost. KPI: key performance indicator. LTV: lifetime value.* The table shows no slide introduces a number this document does not already carry under a section heading; the deck's job is compression and arrangement, not new arithmetic, which is the entire point of building the research document first and deriving the deck from it in Stage 2.

### 26.2 Archetype mapping, checked against the skill's slide catalogue

The skill's archetype guide (`references/archetypes.md`) and this folder's own `deck-system/slide-archetypes.md` between them name roughly thirty slide forms; the table below states which named forms each core slide uses, so the Stage 2 derivation step can confirm the layout plan matches an existing, tested recipe rather than inventing a new one for each slide.

| Slide | Primary archetype | Secondary archetype | Why this pairing |
|---|---|---|---|
| 1, Cover | Hub-and-spoke mind map | Precedent strip with logo placeholders | A weekday dinner is the hub; five substitute routes are the spokes; two verified global precedents anchor the brand strip without implying a partnership |
| 2, Diagnosis | Dashboard-grid | Band and rail (for the exit-reason bars) | Six distinct panels on one slide is the dashboard form; the exit-reason bars carry a labelled rail because they are the slide's single most load-bearing panel |
| 3, Recommendation | Quadrant-hero ("do not" against "do") | KPI-hero (the LTV to CAC ladder) | The two-column contrast is the slide's spine; the ladder is this slide's giant-numeral moment |
| 4, Financial and risk case | KPI-hero (the moneyshot card) | Table-wall (the three-scenario and risk tables) | Break-even month 21 is the one moneyshot the whole deck earns; everything else on the slide supports it |
| 5, 90-day plan and KPIs | Timeline-hero (the Gantt) | Table-wall (the KPI table) | A 13-week build is naturally a timeline; the KPI table is deliberately plain, since its job is legibility under cross-questioning, not density |
| 6, Appendix | Table-wall | Band and rail (the tornado) | An appendix slide's job is defensive depth, not persuasion, so density is favoured over visual variety |
| 7, Thank you | Repeated cover elements | None | Deliberately plain, per the user's standing instruction that the thank-you slide repeats the cover's team table rather than introducing new content |

### 26.3 The cover mind map, node by node

The cover's dinner mind map is the single most visually distinctive panel in the deck, and its nodes are fixed here so the Stage 2 build does not improvise them.

| Node | Label | Content |
|---|---|---|
| Hub | A weekday dinner | The job every route below solves, per section 9.1's jobs-to-be-done framing |
| Spoke 1 | Cook from scratch, quick commerce | Blinkit, Zepto, Swiggy Instamart brand slots; no verified India per-meal figure, logged as a gap on the node itself |
| Spoke 2 | Order in | Zomato and Swiggy brand slots; ₹499 to ₹660 an occasion `[S12]` |
| Spoke 3 | Ten-minute ready-to-eat | Zepto Cafe and Blinkit Bistro brand slots; within the case's ₹250 to ₹450 band `[C M2]` |
| Spoke 4 | Private-label kit | ₹3,500 a box `[C M3]`, no named brand (the case does not name the two chains) |
| Spoke 5 | HarvestBox kit, today | ₹5,200 a box, ₹433 a dinner `[C K2]` `[C K8]` `[C M1]` |
| Rebuilt node | The rebuilt Proposal A | The ₹3,600 to ₹6,600 price ladder `[A09]`, branching off the HarvestBox spoke |
| Precedent strip | Gousto and Blue Apron cards | Section 11.9's two verified precedent lines, each with a logo placeholder |

### 26.4 Organiser and brand logo slots

Every logo slot on the cover and thank-you slide is a placeholder, named exactly, with a caption line stating that its presence implies no partnership or endorsement.

| Slot name | What it represents | Where it appears |
|---|---|---|
| `LOGO: Avsar` | Project Avsar | Cover, thank-you |
| `LOGO: SDC` | The Skill Development Cell | Cover, thank-you |
| `LOGO: MNC` | Motilal Nehru College | Cover, thank-you |
| `LOGO: DU` | University of Delhi | Cover, thank-you |
| Brand slots (ten, cover only) | Blinkit, Zepto, Swiggy, Zomato, HelloFresh, Blue Apron, ITC, MTR, a private-label-generic slot, a HarvestBox slot | Cover, inside the dinner mind map and the precedent strip |

Exhibit for the deck: this section is itself the exhibit specification for every slide; no further exhibit line is needed, since section 26 is the document's own translation layer between the research and the deck.

## 27. Forty judge questions, answered

**Answer.** We answer forty questions a judge could plausibly raise in a three-minute cross-questioning window `[C G8]`, the ten hardest first because a team that can survive its own worst questions first is the team least likely to be surprised in the room, followed by thirty more grouped by the case's own four deliverables and by the evidence and process work that sits underneath them. Every answer below cites at least one tagged number, and several of the hardest ten repeat a figure already stated plainly elsewhere in this document rather than attempt a softer answer under pressure.

### 27.1 Grouping and how to use this section

The forty questions are grouped so that a team preparing for cross-questioning can rehearse by category rather than by memorising forty answers in sequence.

| Group | Count | What it tests |
|---|---|---|
| The ten hardest | 10 | The honest reading, the weakest assumptions, the uncomfortable half of insight 12, and anything a sceptical judge would reach for first |
| D1, diagnosis and evaluation | 7 | Whether the team actually diagnosed the loss, not just described it |
| D2, strategic recommendation | 7 | Whether the recommendation is defensible against the two it was not chosen over |
| D3, financial and risk case | 8 | Whether the numbers hold together and the risks are named with a response, not just listed |
| D4, 90-day plan and KPIs | 5 | Whether the plan is executable in the time given, not just modelled |
| Process and evidence | 3 | Whether the outside research and the review mining were done honestly, including their limits |

*Thirty of the forty sit inside this grouping; the ten hardest are listed first and are not repeated inside the deliverable groups, even where a hardest question also happens to touch a deliverable.*

An index of the ten hardest, by their one-line theme, lets a team drill a single weak spot without rereading all ten answers in full.

| Question | One-line theme | Tag a presenter should have ready |
|---|---|---|
| Q1 | Why fund a plan that barely breaks even | `[M]` run-rate ₹0.10 Cr |
| Q2 | The biggest bridge steps are the weakest-evidenced | `[T6]` ₹3.77 Cr; `[S33]` |
| Q3 | Three case figures do not reconcile | `[C K1]` `[C K5]` |
| Q4 | Insight 12's uncomfortable half | `[M]` +₹0.46 Cr cumulative, worse cash and run-rate |
| Q5 | A as written loses to no decision in year 1 | `[M]` −₹0.29 Cr |
| Q6 | The referral benchmark is a single foreign study | `[S33]` |
| Q7 | Review mining disagrees with the case on menu repetition | `[V3]` 1.8% against 18% |
| Q8 | Every downside turns the run-rate negative | `[T7]` |
| Q9 | The gate always passes in the base case | `[M]` cash ₹7.67 Cr, LTV to CAC 2.74x |
| Q10 | Why trust a student model over the case's own benchmark | `[C U7]` 3.0x derived in section 6.2 |

### 27.2 The ten hardest questions, first

**Q1.** "Your base case only reaches a run-rate of ₹0.10 Cr a year. Why should the Board fund a plan that barely breaks even?"

Because the alternative is not profit, it is a loss that keeps growing. No decision reaches a run-rate of −₹12.52 Cr a year by month 24 `[M]`, and every one of the three proposals as written reaches cash zero between month 15 and month 16 `[M]`. A break-even plan that survives on ₹2.89 Cr of cash in hand `[M]` is the strongest outcome any scenario in this model reaches without the staged ready-to-eat launch adding a second, smaller bet; we say "break-even, not profit" plainly in sections 2.7 and 19, because overstating it would not survive a second question.

**Q2.** "Your three largest bridge steps, together ₹3.77 Cr from referral, win-back and conversion, rest on two assumptions you yourselves call the weakest-evidenced. Isn't your plan built on its shakiest numbers?"

Yes, and that is why the plan has gates rather than a single committed path. Referral share (A10, 20% of sign-ups by month 12) rests on one European retail-banking study `[S33]`; website conversion (A14, 2.8% to 3.3%) rests on removing the two largest stated sign-up objections, which is a reasoned argument, not a measured fact; win-back (A12, A13) is the one of the three built directly from a case figure, the 34% rigidity share. The month 7 contingency and the month 12 cash-and-LTV gate both exist specifically because these three steps, worth ₹3.77 Cr combined of the ₹9.34 Cr pre-ready-to-eat improvement `[T6]`, are the ones we are least certain of.

**Q3.** "You admit three case figures do not reconcile. If the case itself is internally inconsistent, how can we trust any number built on it?"

We state all three plainly in section 4 rather than hide them: 62,000 subscribers would imply ₹387 Cr of revenue against the actual ₹42 Cr `[C K1]` `[C K5]`; the website funnel implies 39,200 first orders against about 990 revenue-consistent new customers `[C X4]` `[C X5]`; and 6.8 lifetime boxes only matches the four retention points under one specific reading of what a box is `[C U4]` `[A01]`. None of the three is an input to the model; the model is built entirely from the revenue identity and the four-point survival curve, so none of the three gaps changes a single modelled figure.

**Q4.** "Insight 12 says Proposal C with the operational improvements earns more cumulative EBITDA than your recommended plan. Why aren't you recommending C?"

Because cumulative profit is not the only test the investors set. Proposal C with the operational improvements earns ₹0.46 Cr more over 24 months `[M]` but ends with ₹2.92 Cr of cash against our plan's ₹5.65 Cr, and a run-rate loss of ₹3.19 Cr a year against our ₹1.69 Cr `[M]`. The investors' condition is a credible path to profitability within 24 months on a fixed ₹15 Cr `[C K11]` `[C K4]`, which is a cash and run-rate test, not a cumulative-EBITDA test; on both of the tests that actually matter, our plan wins by a wider margin than the one dimension where C comes out ahead.

**Q5.** "Proposal A as written loses ₹0.29 Cr more than doing nothing in year 1. Isn't your whole thesis, that A is the right idea, undermined by your own model?"

No, because the model shows a design flaw, not a thesis flaw. Every existing subscriber can skip from day one, while the retention gain that is meant to pay for it builds cohort by cohort `[M]`. The fix is not to abandon flexibility, which answers 63% of stated exits `[C W1]` `[C W3]` `[C W4]`, it is to cap it: The rebuilt Proposal A keeps the free skip and pause but attaches a floor of two boxes in three months, which is exactly the feature the written proposal omits.

**Q6.** "Your referral benchmark comes from a single German banking study from 2011. How is that relevant to an Indian meal-kit company in 2026?"

It is not directly relevant, and we say so rather than overstate it. The Schmitt, Skiera and Van den Bulte study `[S33]` is the only VERIFIED academic reference this research located on referral economics; it describes one bank, one country, one product, over a decade before this case. We use its directional finding, that referred customers are worth more and less likely to defect, as the best available outside anchor, not as a number we claim transfers to food subscriptions, and A10's own sensitivity range (10% to 30%) is wide precisely because of this gap.

**Q7.** "You call rigidity the top reason customers leave, at 34%. Your own review mining puts it even higher, at 42.5%, but finds almost no evidence for menu repetition, which the case puts at 18%. Doesn't that mean the case's own breakdown is wrong?"

We cannot say the case's breakdown is wrong, only that six real companies' customers, on Google Play, raise menu repetition far less than HarvestBox's leavers reportedly do (1.8% of the review mix against the case's 18%, a 16.2-point gap) `[V3]`. This is association across a different population, country and decade, not proof about HarvestBox specifically `[V1]`. What we can say is that it is a reasonable caution against over-investing in menu variety relative to the floor on skipping, which the review data and the case agree is the largest single reason.

**Q8.** "Your model shows every single one-at-a-time downside in the sensitivity table turning the run-rate negative. Doesn't that mean your plan has no margin for error at all?"

It means the base case sits close to the line, and we built the plan's gates around exactly that fact rather than hiding it. The sensitivity table `[T7]` tests eight inputs one at a time against a base case that nets to only ₹0.10 Cr a year `[M]`, so almost any single downside, held alone, pushes it negative. The month 7 contingency and the month 12 gate exist to catch a downside before it compounds with a second one, which is the scenario the bear case with no response actually shows, cash zero by month 20 `[M]`.

**Q9.** "You're staging Proposal C behind a gate that the base case clears comfortably, cash ₹7.67 Cr against a ₹7 Cr threshold and LTV to CAC 2.74x against 2.2x. Isn't the gate just theatre if it always passes?"

The gate passes in the base case, but it is not guaranteed to, which is the entire reason it exists rather than committing the ₹4 Cr automatically. The bear scenario without the month 7 contingency reaches cash zero by month 20 `[M]`, well before month 12's test would even be reached on a healthy trajectory; the gate is the mechanism that stops the staged launch from being funded on a base case assumption if the actual trajectory looks more like the bear case by month 9 or 10.

**Q10.** "Why should we believe a model built by a student team over the case's own stated LTV to CAC of 1.55x and its own 3.0x benchmark?"

We do not override either figure; we use both as fixed case facts `[C U6]` `[C U7]` and build the model to explain where 3.0x comes from, which the case itself does not state. Section 6.2 shows 3.0x is close to the exact point where HarvestBox's own acquisition spending stops being a net drag on cash, given its gross profit per box `[C U2]` and acquisition cost `[C U3]`; it is not a number we invented, it is the case's own benchmark, derived rather than merely repeated.

### 27.3 D1, diagnosis and evaluation

**Q11.** "You say overheads were never the problem. How do you know that from the case alone, without the model?"

Because the case's own four-year table already settles it: other operating cost fell from 28% of revenue in 2022 to 23% in 2025 `[C P22]` `[C P25]`, even as headcount rose to 410 `[C K3]` and the company opened fulfilment centres in five cities `[C K9]`. A cost line that falls as a share of revenue while the business more than doubles is a cost line scaling well, not hiding a loss; the fifteen lost points sit entirely in gross margin (−7) and marketing (+8) `[T1]`.

**Q12.** "Your runway calculation says 19.6 months against a 24-month investor condition. Isn't 'do nothing' still technically one of the three proposals on the table?"

No, because the case frames three funded proposals, not a fourth, unfunded option; and even if it were, the math rules it out on its own terms. ₹15 Cr of cash `[C K4]` divided by ₹9.2 Cr of annual burn `[C K6]`, or ₹0.767 Cr a month, gives 19.6 months of runway `[M]`, 4.4 months short of the 24-month window the investors require before a further funding conversation `[C K11]`.

**Q13.** "Why does your model hold three-month retention flat under Proposals B and C as written? Couldn't a new product line itself improve retention?"

Because neither proposal changes the subscription terms a departing customer is actually reacting to. The case's five reasons for leaving are all about the existing kit's contract, rigidity, price, menu, waste, delivery `[C W1]` to `[C W5]`; a supermarket shelf slot or a new ready-to-eat line does not touch any of them, which is why the model holds retention at today's 55% `[M]` under both as-written scenarios, a modelling choice, not an assumption buried in a footnote.

**Q14.** "You separate leavers and stayers into two groups worth ₹4,719 of loss and ₹10,915 of gain per head. Isn't that just restating the LTV to CAC ratio in different words?"

It restates the same underlying economics at a level the single ratio hides. The 1.55x average `[C U6]` blends a group that loses money (45% of sign-ups, 1.4 boxes, ₹2,281 gross profit against ₹7,000 CAC `[T2]`) with a group that returns 2.56 times its acquisition cost on its own `[T2]`; the average obscures that HarvestBox is not uniformly weak, it has a good customer and a bad one and charges both the same acquisition price.

**Q15.** "You use four different outside market-size reports for ready-to-eat in India and they disagree by a factor of four or five. Why include numbers that disagree that much?"

Because hiding the disagreement, or averaging it into one false-precision figure, would be worse than showing it. IMARC's $6.2 billion, Ken Research's $1,280 million, Technavio's $2.17 billion and GlobalData's ₹19,931.60 million `[S02]` `[S03]` `[S04]` `[S05]` use four different product scopes; the honest statement to a judge is that outside research does not give a single clean number for this market, and the case's own 15% ready-to-eat growth figure `[C M2]` sits inside the range these four reports bracket.

**Q16.** "Your competitive analysis says HarvestBox's real competitor is quick-commerce ten-minute food, not other meal kits. Doesn't that undercut Proposal A entirely, since the rebuilt Proposal A can't compete on speed?"

It sharpens what the rebuilt Proposal A is for rather than undercutting it. Zepto Cafe scaled to roughly 100,000 orders a day within months `[S18]`, a speed no recipe-card format can match structurally; the rebuilt Proposal A does not try to win on the ten-minute dimension, it competes on the dimension ten-minute food cannot offer, curated, portioned, recipe-guided cooking for a household that wants to cook, which is the segment HarvestBox's own 4.6-of-5 satisfaction score `[C W6]` shows it already serves well once a customer stays.

**Q17.** "Your review mining is of six companies that are not HarvestBox. Why include it at all if it can't prove anything about HarvestBox's own customers?"

Because a sense check on relative ordering is still useful evidence, clearly labelled. Across 8,052 reviews `[V1]`, rigidity is the largest single theme at 28.8% of low-star mentions `[V2]`, agreeing with the case's own ranking; we state in every use of this data that it is association, not proof, and name the six real apps every time, because the alternative, pretending HarvestBox has customer voice data it does not have, would violate the content-integrity rule against fabricated primary research.

### 27.4 D2, strategic recommendation

**Q18.** "You call your recommendation contrarian, but Proposal A is one of the case's own three listed options. How is recommending it contrarian?"

The contrarian move is not which proposal we pick, it is rejecting the obvious reading of all four options the case invites, including "pick the best of the three as written" and "score them and choose." Each as-written proposal fails on the case's own numbers (sections 2.1, 13 to 15); the obvious scorecard exercise would stop at Proposal B's higher score (3.20 against A's 2.80 as written, `[T9]`) without noticing that rebuilding A changes the comparison entirely, to 3.70 `[T9]`, which the obvious reading never tests.

**Q19.** "Why not just recommend Proposal C, since it has the highest growth and profit scores on your own scorecard?"

Because the scorecard's own cash and risk weights, 30 and 20 of the 100 points `[A24]`, penalise Proposal C for exactly the reasons its own risk list names: ₹5 Cr of upfront capital `[C PC2]`, a cash-zero month of 15 `[M]`, and a new food-safety licence class HarvestBox has never operated under `[S64]`. Proposal C scores 3.00 overall against the recommended plan's 3.70 `[T9]`; staging it into year 2 behind a gate, rather than funding it now, captures most of its upside without its timing risk.

**Q20.** "Your 'do not' table says Proposal B does nothing for the 45% who leave in three months. But doesn't more revenue help the whole business, even if it doesn't fix retention?"

It helps revenue, but revenue is not the binding constraint; cash and EBITDA are, which is what the investors' 24-month test actually measures `[C K11]`. ₹8 Cr across 800 stores `[C PB1]` `[C PB3]` is ₹8,333 a store a month `[M]`, and after returns, channel cost and cannibalisation under assumption A21, net contribution is only about ₹0.84 Cr in year 1; the proposal still reaches cash zero by month 16 `[M]`, two months sooner than doing nothing at all.

**Q21.** "The rebuilt Proposal A's price ladder, ₹3,600 and ₹6,600 around the existing ₹5,200, is your own assumption, not a case figure. What if the real numbers are different?"

They would move the revenue mix, which the model tests explicitly through assumption A09's own sensitivity treatment in section 20, but they would not change the underlying logic: the entry tier is priced above the ₹3,500 private-label kit `[C M3]`, so the rebuilt Proposal A is not attempting to win a price war on private label's own terms, it is offering a lower total monthly bill to the 27% of exits that cite cost `[C W2]` without discounting the core box the majority of stayers already accept at 4.6 of 5 satisfaction `[C W6]`.

**Q22.** "You cite Gousto and Blue Apron as precedents. One of those companies lost 95% of its value. Why use a failure as supporting evidence?"

Because the failure is the half of the argument that shows what not to do. Blue Apron widened its offer without first fixing spend discipline and was sold for roughly 5% of its IPO valuation `[S25]` `[S26]`; Gousto cut to a healthy cost base before widening its recipe mix and reached its third consecutive profitable year `[S27]`. The sequencing lesson, discipline before growth, is what transfers; neither company's specific numbers are offered as a HarvestBox target.

**Q23.** "If the rebuilt Proposal A is so clearly the right fix, why does the case itself only expect retention to rise to 65%, not higher?"

Because that figure is the case's own stated expectation for Proposal A `[C PA3]`, not a ceiling we invented or inflated. We take it as given rather than assume a more flattering number, and the model's own ladder shows that even reaching 65% retention only moves LTV to CAC from 1.55x to 1.67x on its own `[T12]`, which is exactly why the recommendation pairs the rebuilt Proposal A with the six-lever operational improvements rather than relying on retention alone.

**Q24.** "Three of your five named triggers for changing your mind are KPI stop triggers you set yourselves. Isn't that circular?"

The triggers are self-set because the Board, not an outside authority, is the one who has to decide whether to keep funding this plan; a self-set, numeric trigger that forces a specific response (tighten the floor, escalate to the Board, re-open pruning) is the alternative to an open-ended "we'll know it if we see it" standard, which is harder to act on, not easier.

### 27.5 D3, financial and risk case

**Q25.** "Your bridge shows headwinds of −₹1.64 Cr before any lever is even pulled. What assumptions drive that number, and are they conservative or aggressive?"

They are built to flatter the no-decision case, not the plan. Gross margin drift of −1.5 points a year `[A03]` is less severe than the case's own recent history of −2.3 points a year; paid CAC inflation of 8% a year `[A04]` reflects the pattern that marketing per rupee of new revenue rose from 0.31 to 0.49 in two years `[T1]`. Both headwind assumptions understate, not overstate, how bad "no change" would plausibly get, which is a deliberate conservative choice in the plan's own favour, stated here rather than left implicit.

**Q26.** "Your plan's lowest cash point is ₹2.89 Cr in month 20. What happens if an unmodelled shock, a lawsuit, a regulatory fine, hits exactly then?"

The plan has no dedicated buffer against an unmodelled shock beyond the ₹2.89 Cr `[M]` itself and the month 7 contingency's levers, which remain available at any point in year 2 as well as year 1. We do not model a specific litigation or fine scenario because the case gives no basis for one; what we can say is that the core path without the staged ready-to-eat launch ends with ₹5.65 Cr `[M]`, a materially larger buffer, which is one honest argument for a Board that wants more margin for an unmodelled shock to miss the month 12 gate deliberately.

**Q27.** "Why does the staged ready-to-eat launch wait until month 13 instead of starting immediately after the gate passes at month 12?"

Because the ₹4 Cr `[A23]` build, licensing and cold-chain compliance work cannot be compressed into the same month the gate decision is made; section 21.4 states plainly that the compliance file should be built in the three months before the gate decision, not discovered inside the launch window, which is why the modelled launch runs across months 13 to 15 with sales starting from month 14 `[A23]`.

**Q28.** "Your risk register shows no risk in the top-right, most-severe quadrant of your own heat map. Isn't that suspiciously comfortable for a plan asking for a Board's one permitted initiative?"

It would be suspicious if we had built the heat map to produce that result; instead, the two risks closest to that corner, cash trough breach and a late food-safety finding, are both scored probability 2 (unlikely) but impact 5 (severe) `[§21.2]`, meaning we judge them unlikely but without a fast way back if either lands, which is why their responses, pulling the month 7 contingency early and front-loading compliance work, are both designed to act before, not after, the risk materialises.

**Q29.** "You say the bear scenario only survives 24 months with the month 7 contingency. What if the business is already past month 7 before anyone notices the bear trajectory?"

The KPI table's stop triggers are designed to fire before month 7 wherever possible: website conversion is checked at month 6 `[T11]`, blended CAC at month 6 `[T11]`, and three-month retention itself is a rolling monthly read from the first cohort onward, not a single checkpoint; a Board watching the monthly dashboard described in section 22.4 should see the bear trajectory forming well before month 7 arrives, which is the entire design purpose of checking five of the seven KPIs before month 12.

**Q30.** "Why is Proposal C's cash-zero month, 15, earlier than Proposal A's or B's, 16, when C has the highest gross margin of the three?"

Because the ₹5 Cr investment `[C PC2]` is the largest upfront outlay of the three, spent before any ready-to-eat revenue has had time to offset it; the model's quarterly cash table shows the gap between no decision and Proposal C as written widest at month 6, ₹10.1 Cr against ₹5.8 Cr `[T13]`, precisely because the capital goes out before the 45%-gross-margin benefit comes in.

**Q31.** "Your sensitivity table tests eight inputs one at a time. Why not test combinations, since several of your worst risks could plausibly happen together?"

The two-way grid in table `[T8]` does test one combination, retention and the skip rate together, because the register itself flags them as interacting; a full combinatorial test of all eight inputs was outside this research's scope, and we say so rather than imply a completeness the model does not have. The pre-mortem in section 21.3 substitutes narrative combination testing, three stories where two or three assumptions drift together, for the quantitative version the model does not run.

**Q32.** "If the gate fails and you stay on the core path, what exactly happens to the ₹4 Cr you had reserved for ready-to-eat?"

It is never spent. The core path's uses-of-cash do not allocate it anywhere else; the plan's own structure is that the ₹4 Cr is an option, exercised only if the gate passes, and if it does not, the core path simply ends month 24 with ₹5.65 Cr in the bank `[M]` rather than the base case's ₹2.92 Cr `[M]`, a materially stronger cash position precisely because the capital was never committed.

### 27.6 D4, 90-day plan and KPIs

**Q33.** "Your 90-day plan pilots in one city before rolling out nationally. Doesn't that mean four of five cities are still on the old, rigid terms for up to eight extra weeks?"

Yes, and that is the deliberate trade. Everything launching nationally in weeks 9 to 12 is tested in the pilot city from week 4 `[§22.1]`; the cost is eight weeks of four cities still on legacy terms, the benefit is seeing a real skip rate and referral-uptake number before committing the full ₹1.8 Cr build nationally, which is a smaller bet than rolling out blind to all five cities at once.

**Q34.** "Why is the pilot's success threshold, 81% month-2 retention, lower than the case's own 65% three-month expectation for the full rollout?"

Because the two numbers are not measuring the same thing. The case's 65% is a three-month figure, and a cohort begun in weeks 3 to 4 of the 90-day plan is only about two months old by day 90, not three, so the pilot's own threshold is read against the model's month-2 survival curve instead: 81% targeted against 74% today. It is a conservative interim marker on the way to the eventual month-3 target, deliberately checked at the point the cohort has actually reached, rather than claiming a three-month read the pilot has not yet had time to produce.

**Q35.** "Three of your seven KPIs, followers, registered subscribers and gross sign-ups, are explicitly excluded. Why mention them at all if you're not tracking them?"

Because a Board presented with a large, round, growing number, 3.8 lakh followers `[C K7]` or 62,000 subscribers `[C K1]`, will reasonably ask why it is not on the KPI list, and the answer should be on record. None of the three moves a leaf of the EBITDA-down KPI tree in section 23.2; a follower count or a subscriber count can rise while active, paying customers fall, which is close to HarvestBox's own recent history.

**Q36.** "Your budget split of the ₹1.8 Cr by workstream line is your own planning assumption, not a case figure or a model output. How confident should we be in it?"

Not very confident in the exact percentages, and we say so directly in section 22.5: the model gives only the ₹1.8 Cr total `[M T10]`, and the line-item split is this document's own planning assumption, built to sum exactly to that total. What should be trusted is the total and the sequencing logic (product and engineering and the pilot buffer carrying the largest shares), not the precise rupee figure on any one line.

**Q37.** "Only one of your seven KPIs, LTV to CAC, depends on a modelling assumption rather than a direct count. Doesn't that make the other six trivially easy to hit by definition?"

No, because being a direct count does not make a KPI easy to hit, only easy to measure without dispute; blended CAC, gross margin and marketing's share of revenue are all direct finance-system reads that still require real operational change (pruning, margin levers, the cut to non-working marketing) to move in the right direction. The one modelling dependency, LTV to CAC's reliance on the fitted survival curve past month 12 `[A01]`, is exactly why cash, a fully direct number, sits alongside it as the second half of the month 12 gate.

### 27.7 Process and evidence

**Q38.** "Your review-mining precision for delivery problems is only 65%, below your own 70% threshold. Why use that number at all?"

Because labelling it honestly is the alternative to silently dropping an inconvenient finding. We mark it "(indicative)" everywhere it appears `[V2]` `[V3]` per the plan's own rule for any theme under 70% precision, and we still report it, 27.1% of the rescaled review mix against the case's 10% `[V3]`, because even an indicative figure that runs counter to the case's own ranking is more honest to show than to omit.

**Q39.** "You made one change to your review-mining codebook mid-research. How do we know that change wasn't made to get a more favourable result?"

Because the change, removing the bare word "selection" from the menu-repetition regular expression, pulled that theme's measured share down, from 2.4% to 1.2% of low-star mentions, moving it further from the case's 18% figure, not closer `[§7.3]`. If the change had been aimed at flattering the comparison, it would have moved the number toward the case's figure, not away from it; the direction of the actual effect is the evidence that the one permitted change was not used to manufacture agreement.

**Q40.** "Several of your raw research files mark more than half their rows UNVERIFIABLE, especially food safety and retention benchmarks. Doesn't that undermine the whole research base?"

It undermines confidence in the specific rows marked that way, which is why we mark them rather than quietly upgrade them, and it does not touch the model's own locked numbers, which come entirely from the case brief and the team's stated assumptions, not from the UNVERIFIABLE outside rows. Lane E, food safety, is the thinnest at 39 of 58 rows UNVERIFIABLE, mostly because FSSAI's own pages returned access errors in this research round; we say so in Appendix F rather than present a false confidence in India-specific cold-chain cost figures we could not actually verify.

Exhibit for the deck: none directly; this section is the preparation material behind the three minutes of cross-questioning `[C G8]`, not a slide of its own, though the appendix slide's reading notes (section 26.1) are drawn in part from the ten hardest questions above.

## 28. Seven-minute talk track for three speakers

**Answer.** All three members of Team IdeaForge speak, as the case requires `[C G8]`: Harsh Kawatra opens and closes, Gursimran Kaur carries the diagnosis and the financial case, and Dayita Arora carries the recommendation and the 90-day plan, with each of the five main slides landing exactly one number the speaker must not lose in the handoff. The full seven minutes are blocked into five speaking turns of roughly 60 to 90 seconds each, leaving a short buffer before the three-minute cross-questioning window `[C G8]` begins.

### 28.1 The timed outline

Each row states who speaks, on which slide, for how long, the one number that block exists to land, and the single sentence the speaker should be able to say even if every other line of the script is forgotten.

| Order | Speaker | Slide | Time | The one number to land | The one sentence that must survive |
|---|---|---|---|---|---|
| 1 | Harsh Kawatra | Cover and framing | 60 seconds | ₹9.2 Cr annual loss `[C K6]` | HarvestBox loses ₹9.2 Cr a year not from weak demand, but because it pays the same ₹7,000 to acquire every customer while 45% leave in three months `[C U3]` `[C R2]` |
| 2 | Gursimran Kaur | Diagnosis and evaluation | 90 seconds | 15 lost margin points, none in overheads `[T1]` | Gross margin alone cost 7 points, marketing alone cost 8, and overheads actually improved, from 28% to 23% of revenue, so the loss sits in exactly two lines, not in how the company is run day to day `[C P22]` `[C P25]` |
| 3 | Dayita Arora | Strategic recommendation | 90 seconds | Break-even month 21 `[M]` | We recommend the recommended plan, Proposal A rebuilt, the operational improvements, and Proposal C staged into year 2 behind a gate, taking the loss from ₹9.2 Cr to a month 24 run-rate of positive ₹0.10 Cr, crossing break-even in month 21 `[M]` |
| 4 | Gursimran Kaur | Financial and risk case | 90 seconds | Lowest cash ₹2.89 Cr in month 20 `[M]` | The plan never runs out of the ₹15 Cr in hand, with the lowest point at ₹2.89 Cr in month 20, and every one of the twelve risks on our register has a named trigger and a named response, not just a probability score `[C K4]` |
| 5 | Dayita Arora | 90-day plan and KPIs | 75 seconds | The rebuilt Proposal A live in five cities by week 12 | We pilot in one city from week 4, read a real retention and skip number before the full rollout, and track seven Board KPIs with stop triggers, so the Board knows by month 9 whether the plan is on track, not only at month 24 `[T11]` |
| Buffer | Harsh Kawatra | Close | 15 seconds | Proposal B waits, Proposal C is not abandoned | Proposal B waits because ₹8,333 a store a month does not move the needle, and Proposal C's ready-to-eat opportunity is staged into year 2, not abandoned, behind a gate the base case already clears `[M]` |

*The total across all five blocks and the buffer is 420 seconds (7 minutes), matching the case's own time limit exactly `[C G8]`.*

### 28.2 Why the speakers are split this way

The split follows each speaker's slide, not an arbitrary rotation, so that the person answering a cross-question about a slide is the same person who presented it, which is both a practical convenience and a signal to the judges that all three members genuinely understand their section rather than having memorised a line written by someone else. Harsh Kawatra opens and closes because the cover's framing sentence and the close's "what we are not abandoning" line both need to connect the whole seven minutes into one argument, which is naturally the job of whichever speaker bookends the talk. Gursimran Kaur carries both number-heavy slides, diagnosis and the financial case, because the two slides share the same underlying model and the same habit of showing arithmetic rather than asserting conclusions, so one speaker fluent in that habit across both slides reduces the number of handoffs inside the most data-dense half of the talk. Dayita Arora carries the recommendation and the execution plan, the two slides that answer "what do we do" rather than "what did we find," which keeps the talk's narrative arc, diagnosis, recommendation, proof, plan, aligned with a change of speaker at each turn in the argument rather than only at each slide.

### 28.3 Readiness for the three-minute cross-questioning window

Because all three members must speak during cross-questioning as well as during the main talk `[C G8]`, each speaker owns a first-response category matched to their slide, so a judge's question reaches the speaker best placed to answer it immediately rather than being redirected mid-session.

| Speaker | First-response category | Representative hard question from section 27 |
|---|---|---|
| Harsh Kawatra | The recommendation as a whole, the contrarian framing, and why Proposal B waits | Q18, Q20 |
| Gursimran Kaur | The model's arithmetic, the data reconciliation in section 4, and the risk register | Q3, Q25, Q28 |
| Dayita Arora | The rebuilt Proposal A's feature design, the operational improvements, the 90-day plan and the Board KPIs | Q21, Q33, Q36 |

A question that does not fit neatly into one category, for instance Q4's challenge about insight 12's uncomfortable half, is answered first by whichever speaker owns the slide the question references (the recommendation slide, so Harsh Kawatra), with Gursimran Kaur ready to add the model's own ₹0.46 Cr figure `[M]` if the judge presses further, which is the pattern every cross-question in section 27 was written to support: a first answer that lands in under 30 seconds, and a tagged number in reserve if the judge asks again.

### 28.4 How the team rehearses this

The team runs the talk track against a stopwatch, not against a script committed to memory, because a seven-minute limit judged strictly is less forgiving of a long pause than of a slightly different sentence. Each of the five blocks in the table above has a hard upper bound, and a rehearsal that overruns one block borrows time from the fifteen-second buffer first, never from the next speaker's block, so that one person's slow start never compresses the recommendation or the financial case into less time than the numbers need. The team times three full run-throughs before presenting: the first against the stopwatch alone to find which block tends to run long, the second with a fourth team member asking one unscripted question from section 27 partway through to rehearse the handoff described in 28.3, and the third as a full dry run with slides advancing on cue, so that the final attempt the judges see is at minimum the team's fourth pass through the same seven minutes. If a block runs over in rehearsal, the fix is always to cut a supporting clause from "the single sentence that must survive," never to drop the tagged number itself, since the number is what a judge can check against the deck and the sentence around it is what makes the number mean something.

Exhibit for the deck: none directly; this talk track is rehearsal material for the presentation itself, not a slide, though its five "one sentence that must survive" lines are close paraphrases of the action titles already carried on the five main slides in section 26.1.

## Appendix A: Bibliography

Sources were opened and checked in October 2026. Only sources cited in the text are listed.

| ID | Source | Available at |
|---|---|---|
| S02 | IMARC Group (2026) 'India Ready-to-Eat Meals Market Size, Share, Trends and Forecast by Type, Category, End User, and Region, 2025-2033' | https://www.imarcgroup.com/india-ready-to-eat-meals-market |
| S03 | Ken Research (2026) 'India Ready-to-Eat (RTE) Food Market report' | https://www.kenresearch.com/industry-reports/india-ready-to-eat-rte-food-market.md |
| S04 | Technavio (2026) 'Ready-to-Eat Food Market in India, Industry Analysis' | https://technavio.com/report/ready-to-eat-food-market-in-india-industry-analysis |
| S05 | GlobalData (2026) 'India Ready Meals (Prepared Meals) Market Size, Growth and Forecast Analytics to 2030' | https://www.globaldata.com/store/?p=1949872 |
| S06 | GlobalData (2026) 'India Meal Kits (Prepared Meals) Market Size, Growth and Forecast Analytics to 2030' | https://www.globaldata.com/store/?p=1949868 |
| S07 | Apparel Resources (2026) 'Flipkart Minutes overtakes Instamart dark stores across top 10 cities' | https://apparelresources.com/business-news/retail/flipkart-minutes-overtakes-instamart-dark-stores-across-top-10-cities/ |
| S08 | Inc42 (2026) 'Blinkit Q2 Revenue More Than Doubles YoY to INR 1,156 Cr' | https://inc42.com/?p=483190 |
| S09 | Inc42 (2026) 'Swiggy Q2: Instamart's Adjusted EBITDA Loss Declines 5.2% QoQ to INR 849 Cr' | https://inc42.com/?p=536708 |
| S10 | OfficeChai (2026) 'Zepto Announces Zepto Cafe, Blinkit Launches Bistro For 10-Minute Deliveries' | https://officechai.com/startups/zepto-announces-zepto-cafe-blinkit-launches-bistro-for-10-minute-deliveries/ |
| S11 | Inc42 (2026) 'Blinkit Launches New App Bistro To Take On Zepto Cafe' | https://inc42.com/buzz/blinkit-launches-new-app-bistro-to-take-on-zepto-cafe |
| S12 | Angel One (2026) 'Swiggy vs Zomato: Q3 FY25 Financial Highlights' | https://www.angelone.in/news/share-market/swiggy-vs-zomato-q3-fy25-financial-highlights |
| S15 | GKToday (2026) 'NSO Time Use Survey in India: Key Facts' | https://www.gktoday.in/nso-time-use-survey-in-india-key-facts/ |
| S16 | Manorama Yearbook (2026) 'Indian women spend 5 hours daily on domestic work: Time Use Survey' | https://www.manoramayearbook.in/india/special-articles/2020/10/01/indian-women-spend-5-hours-daily-on-domestic-work-time-use-survey.html |
| S17 | FoodNavigator (2026) 'India quicker than China to adopt private labels' | https://www.foodnavigator.com/Article/2013/08/12/India-quicker-than-China-to-adopt-private-labels |
| S18 | Business Today (2026) 'Zepto Cafe halts ops in 44 stores in these North Indian cities amid supply, staffing issues' | https://www.businesstoday.in/amp/technology/news/story/zepto-cafe-halts-ops-in-44-stores-in-these-north-indian-cities-amid-supply-staffing-issues-477638-2025-05-24 |
| S20 | HelloFresh SE (EQS/webdisclosure) (2026) 'HelloFresh Group preliminary results for the fiscal year 2025' | https://webdisclosure.com/press-release/hellofresh-se-etr-hellofresh-group-preliminary-results-for-the-fiscal-year-2025-7F8KwxT58dA |
| S21 | HelloFresh SE (EQS/webdisclosure) (2026) 'EQS ad hoc: HelloFresh SE provides outlook for the fiscal year 2025' | https://webdisclosure.com/press-release/hellofresh-se-etr-eqs-adhoc-hellofresh-se-provides-outlook-for-the-fiscal-year-2025-ZAx33B3SCNC |
| S22 | ESM Magazine, reporting HelloFresh SE disclosure (2026) 'HelloFresh reports consolidated revenue of EUR 7.6bn in FY 2023' | https://esmmagazine.com/technology/hellofresh-reports-consolidated-revenue-of-e7-6bn-in-fy-2023-261701 |
| S23 | Benzinga (2026) '6 important numbers potential Blue Apron investors should know ahead of the IPO' | https://drupal-cloudfront.benzinga.com/news/17/06/9626534/6-important-numbers-potential-blue-apron-investors-should-know-ahead-of-the-ipo |
| S24 | TechCrunch (2026) 'Blue Apron significantly lowers its valuation with slashed IPO pricing' | https://techcrunch.com/2017/06/28/blue-apron-significantly-lowers-its-valuation-with-slashed-ipo-pricing/amp/ |
| S25 | Grocery Dive (2026) 'Blue Apron, Wonder Group reach acquisition deal' | https://www.grocerydive.com/news/blue-apron-wonder-group-acquisition-marc-lore/695187/ |
| S26 | ESM Magazine (2026) 'Wonder Group acquires US meal kit maker Blue Apron for $103m' | https://www.esmmagazine.com/a-brands/wonder-group-acquires-us-meal-kit-maker-blue-apron-for-103m-250573 |
| S27 | Grocery Gazette (2026) 'Gousto sales return to growth as healthy meal demand surges' | https://www.grocerygazette.co.uk/2026/05/13/gousto-sales-return-to-growth/ |
| S28 | Marley Spoon Group SE (EQS/webdisclosure) (2026) 'EQS ad hoc: Marley Spoon Group SE exceeds EBITDA guidance for FY 2024 and announces outlook for FY 2025' | https://webdisclosure.com/press-release/468-spac-ii-se-etr-eqs-adhoc-marley-spoon-group-se-marley-spoon-group-se-exceeds-ebitda-guidance-for-fy-2024-and-announces-outlook-for-fy-2025-2fC9V47kGDu |
| S29 | ESM Magazine (2026) 'HelloFresh-Factor75 acquisition coverage' | https://esmmagazine.com/technology/hellofresh-acquires-ready-eat-meal-company-factor75-114918 |
| S30 | Second Measure (Bloomberg Second Measure) (2026) 'Blue Apron: Inside the box' | https://secondmeasure.com/datapoints/blue-apron/ |
| S31 | Inside FMCG (2026) 'Marley Spoon CEO plots cheaper and more personalised meal kits in the future' | https://insidefmcg.com.au/2018/12/17/marley-spoon-ceo-plots-cheaper-and-more-personalised-meal-kits-in-the-future/ |
| S32 | International Journal for Research in Applied Science & Engineering Technology (IJRASET) (2026) 'Subscription-Based Grocery Kit' | https://www.ijraset.com/research-paper/subscription-based-grocery-kit |
| S33 | Philipp Schmitt, Bernd Skiera and Christophe Van den Bulte, Journal of Marketing (American Marketing Association) (2026) 'Referral Programs and Customer Value' | https://faculty.wharton.upenn.edu/wp-content/uploads/2012/04/Schmitt-Skiera-vandenBulte-2011-Referral-Programs-Customer-Value.pdf |
| S34 | David Skok, forEntrepreneurs (2026) 'SaaS Metrics 2.0: A Guide to Measuring and Improving What Matters' | https://www.forentrepreneurs.com/saas-metrics-2/ |
| S35 | Inc42 (2026) 'Chef's Basket funding story' | https://inc42.com/flash-feed/chefs-basket-funding |
| S36 | CBInsights (2026) 'Chef's Basket vs iChef comparison' | https://www.cbinsights.com/compare/chefs-basket-vs-ichef1 |
| S37 | Down To Earth (2026) 'Be your own gourmet chef' | https://www.downtoearth.org.in/amp/story/food/be-your-own-gourmet-chef-48439 |
| S38 | Insolvency Tracker (2026) 'How high-flying FMCG startup Fizzy Foodlabs ended up in liquidation' | https://insolvencytracker.in/2020/10/22/how-high-flying-fmcg-startup-fizzy-foodlabs-ended-in-liquidation/ |
| S39 | LBB / case seed (2026) 'Case seed description, corroborated by LBB listing' | https://lbb.in/delhi/burgundy-box |
| S40 | CBInsights (2026) 'FabBox company profile' | https://www.cbinsights.com/company/fabbox |
| S41 | OfficeChai (2026) 'EatFresh shuts down operations' | https://officechai.com/news/eatfresh-shuts-down-operations/ |
| S42 | Channeliam (2026) 'How Licious revolutionized meat sales in India' | https://en.channeliam.com/2025/08/11/licious-indias-first-d2c-meat-unicorn/ |
| S44 | Entrackr (2026) 'Licious reports Rs 795 Cr revenue in FY25, cuts EBITDA losses by 45%' | https://entrackr.com/news/licious-reports-rs-795-cr-revenue-in-fy25-cuts-ebitda-losses-by-45-10575891 |
| S45 | Inc42 (2026) 'Licious trims FY25 loss by 27% to INR 218.3 Cr' | https://inc42.com/buzz/licious-trims-fy25-loss-by-27-to-inr-218-3-cr |
| S46 | Entrackr (2026) 'FreshToHome posts Rs 421 Cr revenue in FY25, losses remain stable' | https://entrackr.com/fintrackr/freshtohome-posts-rs-421-cr-revenue-in-fy25-losses-remain-stable-10965975 |
| S47 | Inc42 (2026) 'Country Delight posts INR 650 Cr sales in H1 FY24 (figure for full FY24 taken from the same financial series)' | https://inc42.com/buzz/country-delight-posts-inr-650-cr-sales-in-h1-fy24 |
| S48 | CBInsights / Affluense (2026) 'Country Delight financials' | https://www.cbinsights.com/company/country-delight/financials |
| S49 | Inc42 (2026) 'iD Fresh Food turns profitable in FY24, posts INR 1.8 Cr PAT' | https://inc42.com/buzz/id-fresh-food-turns-profitable-in-fy24-posts-inr-1-8-cr-pat |
| S50 | Entrackr (2026) 'iD Fresh Food reports Rs 681 Cr revenue in FY25, profit surges over 5x' | https://entrackr.com/fintrackr/id-fresh-food-reports-rs-681-cr-revenue-in-fy25-profit-surges-over-5x-10599920 |
| S52 | Inc42 (2026) 'How FreshMenu bounced back from near collapse to hit INR 150 Cr revenue' | https://inc42.com/?p=512026 |
| S53 | Entrackr (2026) 'Curefoods reports Rs 635 Cr income in FY24, halves losses' | https://entrackr.com/fintrackr/curefoods-reports-rs-635-cr-income-in-fy24-halves-losses-8550085 |
| S54 | Inc42 (2026) 'Curefoods' FY24 loss halves to INR 173 Cr' | https://inc42.com/buzz/curefoods-fy24-loss-halves-to-inr-173-cr |
| S55 | Entrackr (2026) 'Rebel Foods posts Rs 1,420 Cr revenue in FY24, losses down by 42%' | https://entrackr.com/2024/08/rebel-foods-posts-rs-1420-cr-revenue-in-fy24-losses-down-by-42 |
| S56 | India Retailing (2026) 'Rebel Foods loss declines to Rs 378 Cr in FY24, revenue up 18.8%' | https://www.indiaretailing.com/2024/09/02/rebel-foods-loss-declines-to-rs-378-cr-in-fy24-revenue-up-18-8 |
| S57 | Just Food (2026) 'Licious expands into packaged foods with meat spreads launch' | https://just-food.com/news/indias-licious-expands-into-packaged-foods-with-meat-spreads-launch |
| S58 | ITC (2026) 'Kitchens of India brand page' | https://itcportal.com/brands-microsite/kitchens-of-india.aspx |
| S59 | ITC (2026) 'ITC FMCG convenience foods and snacks products' | https://itcportal.com/itc-stories/itc-fmcg-convenience-foods-snacks-products.aspx |
| S60 | Afaqs (2026) 'ITC Foods launches Aashirvaad ReadyMeals' | https://www.afaqs.com/company-briefs/1151_itc-foods-launches-aashirvaad-readymeals |
| S61 | eChai Ventures (2026) 'General trade vs modern trade: start margins [blog]' | https://echai.ventures/d2c/d2c-offline-retail/general-trade-vs-modern-trade-start-margins |
| S62 | ThirdEyeSight (2026) 'Retailer-manufacturer slugfest resurfaces (March 2011)' | https://www.thirdeyesight.in/?p=3191 |
| S63 | FoodNavigator-Asia (2026) 'India quicker than China to adopt private labels' | https://www.foodnavigator-asia.com/Article/2013/08/12/India-quicker-than-China-to-adopt-private-labels |
| S64 | CliniExperts regulatory update (2026) 'Implementation of revised turnover threshold for food businesses under FSS (Licensing and Registration of Food Businesses) Regulations 2011' | https://cliniexperts.com/regulatory-update/implementation-of-revised-turnover-threshold-for-food-businesses-under-food-safety-and-standards-licensing-and-registration-of-food-businesses-regulations-2011/ |
| S65 | All India Radio / News on Air (government broadcaster) (2026) 'FSSAI directs e-commerce FBOs to ensure minimum 30% shelf life for delivered products to enhance food safety standards' | https://www.newsonair.gov.in/fssai-directs-e-commerce-fbos-to-ensure-minimum-30-shelf-life-for-delivered-products-to-enhance-food-safety-standards |
| S66 | IMARC Group (2026) 'Refrigerated Trucks Market in India' | https://www.imarcgroup.com/refrigerated-trucks-market-india |
| S68 | TaxGuru (2026) 'Analysis: Offences and Penalties under FSS Act, 2006' | https://taxguru.in/corporate-law/analysis-offences-penalties-fss-act-2006.html |
| S69 | Supermarket News (2026) 'Kroger's Home Chef brand hits $1 billion in sales' | https://www.supermarketnews.com/prepared-foods/kroger-s-home-chef-brand-hits-1-billion-sales |
| S70 | Walmart Corporate (2026) 'What's for dinner? Walmart cooks up a hassle-free solution with quality, fresh meals' | https://corporate.walmart.com/news/2018/03/05/whats-for-dinner-walmart-cooks-up-a-hassle-free-solution-with-quality-fresh-meals |
| S74 | EY India newsroom (2026) '52 percent consumers are switching to private labels: EY Future Consumer Index' | https://ey.com/en_in/newsroom/2025/05/52-percent-consumers-are-switching-to-private-labels-ey-future-consumer-index |
| S75 | Inc42 (2026) 'BigBasket's INR 4,000 Cr private label moat against Zepto & co' | https://inc42.com/features/bigbasket-inr-4000-cr-private-label-moat-quick-commerce-zepto-brands/ |

## Appendix B: Model tables

All money in ₹ crore unless stated. Generated by harvestbox_model.py; do not edit by hand.

### T1 Four-year history rebuilt from the case

| Year | Revenue | Gross profit | Marketing | Other operating cost | EBITDA | Other cost % of revenue | Marketing added per ₹1 of new revenue |
|---|---|---|---|---|---|---|---|
| 2022 | 19 | 7.22 | 4.18 | 5.32 | −2.28 | 28% |  |
| 2023 | 29 | 10.44 | 7.25 | 7.54 | −4.35 | 26% | 0.31 |
| 2024 | 38 | 12.54 | 10.64 | 9.12 | −7.22 | 24% | 0.38 |
| 2025 | 42 | 13.02 | 12.60 | 9.66 | −9.24 | 23% | 0.49 |

### T2 Calibration: what the case figures imply

| Item | Value |
|---|---|
| boxes_yr | 80769.231 |
| boxes_m | 6730.769 |
| n0_m | 989.819 |
| n0_y | 11877.828 |
| acq | 8.314 |
| brand | 4.286 |
| opex | 9.66 |
| mkt | 12.6 |
| tail | 0.906 |
| sum12 | 4.972 |
| payback | 10 |
| pay_surv | 0.231 |
| leaver_boxes | 1.426 |
| stayer_boxes | 11.197 |
| leaver_gp | 2281.315 |
| leaver_loss | 4718.685 |
| stayer_gp | 17915.288 |
| stayer_lc | 2.559 |
| leaver_burn | 2.522 |
| runway | 19.565 |
| be_skip | 0.126 |
| flex_months | 7.784 |
| cac_for_3x | 3633.333 |
| boxes_for_3x | 13.125 |
| b_store_m_rs | 8333.333 |
| c_gp | 2.7 |
| c_net | 2.514 |
| b_gp | 1.76 |
| web_first | 39200.0 |
| subs_box_share | 0.109 |

### T3 Survival curve, months 1 to 12, today and with Proposal A rebuilt

| Month | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Today | 100.0% | 74.2% | 55.0% | 46.9% | 39.9% | 34.0% | 30.9% | 28.0% | 25.4% | 23.1% | 20.9% | 19.0% |
| A rebuilt (65% at month 3) | 100.0% | 80.6% | 65.0% | 55.4% | 47.2% | 40.2% | 36.5% | 33.1% | 30.0% | 27.3% | 24.7% | 22.5% |

### T4 Scenario summary, 24 months

| Scenario | Revenue Y1 | Revenue Y2 | EBITDA Y1 | EBITDA Y2 | Run-rate EBITDA M22 to M24 | Cash M12 | Cash M24 | Lowest cash | Month of lowest | Cash zero month | Break-even month | CAC at M24 | LTV to CAC at M24 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| No decision | 42.0 | 42.0 | −10.15 | −11.86 | −12.52 | 4.85 | −7.01 | −7.01 | 24 | 18 | none | ₹8,165 | 1.21x |
| A as written | 42.0 | 46.6 | −10.44 | −11.05 | −11.40 | 2.76 | −8.29 | −8.29 | 24 | 16 | none | ₹7,548 | 1.40x |
| B as written | 49.6 | 52.4 | −9.31 | −10.71 | −11.37 | 2.71 | −8.14 | −8.14 | 24 | 16 | none | ₹8,165 | 1.21x |
| C as written | 47.4 | 49.8 | −8.35 | −9.24 | −9.89 | 1.65 | −7.58 | −7.58 | 24 | 15 | none | ₹8,165 | 1.21x |
| Improvements only | 40.1 | 38.5 | −6.02 | −5.43 | −5.77 | 8.98 | 3.55 | 3.55 | 24 | none | none | ₹6,609 | 1.82x |
| B with the same improvements | 47.7 | 48.9 | −5.19 | −4.30 | −4.65 | 6.82 | 2.39 | 2.39 | 24 | none | none | ₹6,609 | 1.82x |
| C with the same improvements | 45.5 | 46.3 | −4.24 | −2.85 | −3.19 | 5.76 | 2.92 | 2.92 | 24 | none | none | ₹6,609 | 1.82x |
| Recommended plan, core (A rebuilt) | 41.3 | 47.8 | −5.53 | −2.02 | −1.69 | 7.67 | 5.65 | 5.65 | 24 | none | none | ₹4,745 | 2.70x |
| Recommended plan, base (with staged ready-to-eat) | 41.3 | 51.6 | −5.53 | −0.75 | 0.10 | 7.67 | 2.92 | 2.89 | 20 | none | 21 | ₹4,745 | 2.70x |
| Bear, no response | 38.4 | 39.1 | −8.25 | −7.65 | −7.74 | 4.95 | −2.70 | −2.70 | 24 | 20 | none | ₹6,021 | 1.80x |
| Bear with the contingency | 35.5 | 25.1 | −6.18 | −5.56 | −6.32 | 7.02 | 1.46 | 1.46 | 24 | none | none | ₹5,919 | 1.83x |
| Bull | 43.0 | 59.5 | −4.78 | 2.48 | 3.67 | 8.42 | 5.90 | 3.68 | 16 | none | 14 | ₹4,255 | 3.28x |

### T5 Base case by month

| Month | New customers | Active customers | Revenue | Gross margin | Marketing | Other cost | EBITDA | One-off investment | Cash | CAC | LTV to CAC |
|---|---|---|---|---|---|---|---|---|---|---|---|
| 1 | 990 | 6731 | 3.50 | 31.0% | 1.05 | 0.81 | −0.78 | 0.60 | 13.62 | ₹7,017 | 1.56x |
| 2 | 891 | 6632 | 3.45 | 30.9% | 0.92 | 0.79 | −0.65 | 0.60 | 12.38 | ₹6,648 | 1.64x |
| 3 | 891 | 6558 | 3.41 | 31.2% | 0.86 | 0.77 | −0.57 | 0.60 | 11.21 | ₹6,276 | 1.76x |
| 4 | 951 | 6564 | 3.34 | 31.4% | 0.84 | 0.78 | −0.57 | 0.00 | 10.64 | ₹5,969 | 2.09x |
| 5 | 972 | 6645 | 3.31 | 31.7% | 0.80 | 0.76 | −0.51 | 0.00 | 10.13 | ₹5,722 | 2.15x |
| 6 | 994 | 6773 | 3.29 | 32.0% | 0.76 | 0.74 | −0.45 | 0.00 | 9.68 | ₹5,481 | 2.21x |
| 7 | 1018 | 6904 | 3.34 | 32.2% | 0.75 | 0.75 | −0.42 | 0.00 | 9.26 | ₹5,246 | 2.31x |
| 8 | 1042 | 7036 | 3.40 | 32.5% | 0.74 | 0.75 | −0.38 | 0.00 | 8.89 | ₹5,017 | 2.44x |
| 9 | 1068 | 7170 | 3.47 | 32.8% | 0.73 | 0.75 | −0.34 | 0.00 | 8.55 | ₹4,795 | 2.57x |
| 10 | 1095 | 7312 | 3.54 | 33.0% | 0.73 | 0.75 | −0.32 | 0.00 | 8.23 | ₹4,737 | 2.63x |
| 11 | 1123 | 7463 | 3.61 | 33.3% | 0.74 | 0.76 | −0.29 | 0.00 | 7.94 | ₹4,678 | 2.68x |
| 12 | 1154 | 7622 | 3.69 | 33.6% | 0.75 | 0.76 | −0.27 | 0.00 | 7.67 | ₹4,619 | 2.74x |
| 13 | 1154 | 7759 | 3.75 | 33.8% | 0.75 | 0.76 | −0.24 | 1.33 | 6.10 | ₹4,629 | 2.75x |
| 14 | 1154 | 7879 | 3.89 | 34.3% | 0.75 | 0.77 | −0.19 | 1.33 | 4.58 | ₹4,639 | 2.77x |
| 15 | 1154 | 7984 | 4.01 | 34.8% | 0.75 | 0.79 | −0.14 | 1.33 | 3.10 | ₹4,650 | 2.78x |
| 16 | 1154 | 8078 | 4.13 | 35.0% | 0.75 | 0.80 | −0.10 | 0.00 | 3.00 | ₹4,660 | 2.77x |
| 17 | 1154 | 8163 | 4.25 | 35.1% | 0.75 | 0.81 | −0.07 | 0.00 | 2.93 | ₹4,671 | 2.76x |
| 18 | 1154 | 8240 | 4.36 | 35.3% | 0.75 | 0.82 | −0.04 | 0.00 | 2.90 | ₹4,681 | 2.75x |
| 19 | 1154 | 8309 | 4.47 | 35.4% | 0.76 | 0.84 | −0.01 | 0.00 | 2.89 | ₹4,692 | 2.74x |
| 20 | 1154 | 8372 | 4.50 | 35.4% | 0.76 | 0.84 | 0.00 | 0.00 | 2.89 | ₹4,702 | 2.74x |
| 21 | 1154 | 8429 | 4.53 | 35.3% | 0.76 | 0.84 | 0.00 | 0.00 | 2.89 | ₹4,713 | 2.73x |
| 22 | 1154 | 8481 | 4.56 | 35.3% | 0.76 | 0.84 | 0.01 | 0.00 | 2.90 | ₹4,723 | 2.72x |
| 23 | 1154 | 8528 | 4.58 | 35.3% | 0.76 | 0.85 | 0.01 | 0.00 | 2.91 | ₹4,734 | 2.71x |
| 24 | 1154 | 8571 | 4.60 | 35.2% | 0.76 | 0.85 | 0.01 | 0.00 | 2.92 | ₹4,745 | 2.70x |

### T6 EBITDA bridge, 2025 to the month 24 run-rate

| Step | ₹ Cr a year |
|---|---|
| 2025 EBITDA | −9.24 |
| Headwinds: cost inflation, margin drift | −1.64 |
| Cut non-working marketing 40% | 1.71 |
| Prune paid channels above LTV | 0.62 |
| Overheads down 12% | 1.25 |
| Gross margin levers (+4.0 points) | 1.53 |
| Proposal A: retention net of skips | 0.31 |
| Proposal A: referral on the third box | 2.21 |
| Proposal A: win-back of lapsed customers | 0.50 |
| Proposal A: website conversion | 1.07 |
| Year 2: staged ready-to-eat | 1.79 |
| Month 24 run-rate | 0.10 |

### T7 Sensitivity of the base case (one input at a time)

| Input and range | Run-rate EBITDA low | Run-rate EBITDA high | Cash M24 low | Cash M24 high |
|---|---|---|---|---|
| 3-month retention 60% to 70% | −0.83 | 1.03 | 1.90 | 3.93 |
| Skip rate 12% to 0% | −1.14 | 0.99 | 1.05 | 4.25 |
| Referral share 10% to 30% | −1.12 | 1.65 | 1.83 | 4.27 |
| Conversion 3.0% to 3.6% | −0.50 | 0.60 | 2.04 | 3.65 |
| Margin levers +2.5 to +5.0 pts | −0.63 | 0.59 | 2.00 | 3.53 |
| Overhead cut 6% to 15% | −0.52 | 0.41 | 1.85 | 3.45 |
| Non-working marketing cut 25% to 50% | −0.54 | 0.53 | 1.79 | 3.67 |
| Ready-to-eat sales 50% to 120% of plan | −0.80 | 0.46 | 2.28 | 3.17 |

### T8 24-month cumulative EBITDA by 3-month retention (rows) and skip rate (columns)

| Retention | 0% | 5% | 10% | 15% |
|---|---|---|---|---|
| 55% | −7.1 | −8.3 | −9.6 | −10.8 |
| 60% | −6.0 | −7.3 | −8.6 | −9.9 |
| 65% | −5.0 | −6.3 | −7.6 | −8.9 |
| 70% | −3.9 | −5.3 | −6.7 | −8.0 |

### T9 Option scorecard (1 to 5; weights growth 20, profit 30, cash 30, risk 20)

| Option | Year-1 revenue vs no decision | 24-month revenue vs no decision | 24-month EBITDA vs no decision | Cash needed | Growth | Profit | Cash | Risk | Score |
|---|---|---|---|---|---|---|---|---|---|
| A  Fix the subscription | +0.0 | +4.7 | +0.5 | 1.80 | 1 | 2 | 4 | 4 | 2.80 |
| B  Grocery retail | +7.6 | +18.0 | +2.0 | 2.98 | 5 | 3 | 3 | 2 | 3.20 |
| C  Ready-to-eat | +5.4 | +13.2 | +4.4 | 5.00 | 4 | 5 | 1 | 2 | 3.00 |
| A rebuilt | −0.7 | +5.1 | +14.5 | 1.80 | 1 | 5 | 4 | 4 | 3.70 |

### T10 Uses of the ₹15 Cr over 24 months, base case

| Use | ₹ Cr |
|---|---|
| Proposal A build | 1.8 |
| Year 1 operating loss | 5.53 |
| Staged ready-to-eat, gated | 4.0 |
| Year 2 operating loss | 0.75 |
| Cash left at month 24 | 2.92 |
| Total | 15.00 |

### T11 Board KPIs on the base path

| KPI | Today | Day 90 | Month 12 | Month 24 | Stop trigger |
|---|---|---|---|---|---|
| M3 retention, new cohorts | 55% | M2: 81% | 65% | 65% | under 60% at month 6 |
| Boxes skipped, % of due | none | from M4 | 5% | 5% | over 6% for 2 months |
| Blended CAC | ₹7,000 | ₹6,276 | ₹4,619 | ₹4,745 | over ₹6,000 at month 6 |
| LTV to CAC, new cohorts | 1.55x | 1.76x | 2.74x | 2.70x | under 2.0x at month 9 |
| Gross margin | 31.0% | 31.2% | 33.6% | 35.2% | under 32% at month 9 |
| Marketing % of revenue | 30.0% | 25.2% | 20.3% | 16.6% | over 25% at month 9 |
| Cash in bank (₹ Cr) | 15.0 | 11.2 | 7.7 | 2.9 | under ₹7 Cr at month 12 |

### T12 LTV to CAC ladder

| Step | LTV to CAC |
|---|---|
| Today | 1.55 |
| Retention | 1.67 |
| Margin | 1.83 |
| CAC | 2.7 |
| Benchmark | 3.0 |

### T13 Quarterly cash by scenario

| Scenario | M0 | M3 | M6 | M9 | M12 | M15 | M18 | M21 | M24 |
|---|---|---|---|---|---|---|---|---|---|
| drift | 15.0 | 12.6 | 10.1 | 7.5 | 4.8 | 2.0 | −0.9 | −3.9 | −7.0 |
| A | 15.0 | 10.8 | 8.2 | 5.5 | 2.8 | 0.1 | −2.7 | −5.4 | −8.3 |
| B | 15.0 | 10.6 | 7.5 | 5.1 | 2.7 | 0.1 | −2.6 | −5.3 | −8.1 |
| C | 15.0 | 9.1 | 5.8 | 3.8 | 1.6 | −0.5 | −2.8 | −5.1 | −7.6 |
| base | 15.0 | 11.2 | 9.7 | 8.6 | 7.7 | 3.1 | 2.9 | 2.9 | 2.9 |
| core | 15.0 | 11.2 | 9.7 | 8.6 | 7.7 | 7.0 | 6.5 | 6.1 | 5.7 |
| bear | 15.0 | 11.1 | 9.0 | 6.9 | 5.0 | 3.0 | 1.1 | −0.8 | −2.7 |
| bear_cont | 15.0 | 11.1 | 9.0 | 8.0 | 7.0 | 5.8 | 4.5 | 3.0 | 1.5 |
| bull | 15.0 | 11.2 | 9.8 | 8.9 | 8.4 | 4.8 | 4.1 | 5.0 | 5.9 |

## Appendix C: Review-mining tables and codebook

### V1 Sample by app

| App | Type | Play id | Reviews | Average rating | 1 and 2 star share % |
|---|---|---|---|---|---|
| HelloFresh | meal kit | com.hellofresh.androidapp | 4000 | 3.27 | 39.8 |
| EveryPlate | meal kit | com.everyplate.android | 611 | 3.02 | 45.7 |
| Home Chef | meal kit | com.homechef.android | 650 | 3.81 | 26.0 |
| Dinnerly | meal kit | com.dinnerly | 77 | 1.88 | 74.0 |
| Green Chef | meal kit | com.greenchef.GreenChef | 168 | 2.6 | 57.1 |
| CookUnity | ready-to-eat | com.cookunity.android.app | 2546 | 4.4 | 9.5 |

### V2 Share of 1 and 2 star reviews that mention each theme, %

| Theme | All apps | HelloFresh | EveryPlate | Home Chef | Dinnerly | Green Chef | CookUnity |
|---|---|---|---|---|---|---|---|
| W1 Rigid plan, hard to skip or cancel | 28.8 | 33.0 | 24.7 | 18.3 | 22.8 | 19.8 | 17.8 |
| W2 Too expensive | 11.0 | 11.2 | 12.9 | 8.9 | 12.3 | 13.5 | 7.0 |
| W3 Menu repetitive or narrow | 1.2 | 0.9 | 2.9 | 2.4 | 0.0 | 1.0 | 0.4 |
| W4 Food waste or portion issues | 8.4 | 9.1 | 9.0 | 5.9 | 12.3 | 9.4 | 3.7 |
| W5 Delivery problems | 18.4 | 20.2 | 12.2 | 18.3 | 35.1 | 14.6 | 10.7 |
| X1 App or billing fault | 18.4 | 15.6 | 24.7 | 18.9 | 19.3 | 13.5 | 30.2 |
| X2 Wants ready-made or less cooking | 0.5 | 0.4 | 1.1 | 1.8 | 0.0 | 0.0 | 0.4 |

### V3 Mix of the five case reasons among low-star mentions, against the case

| Reason | Review mix % | Case exit share % | Gap, points |
|---|---|---|---|
| W1 Rigid plan, hard to skip or cancel | 42.5 | 34 | 8.5 |
| W2 Too expensive | 16.2 | 27 | -10.8 |
| W3 Menu repetitive or narrow | 1.8 | 18 | -16.2 |
| W4 Food waste or portion issues | 12.4 | 11 | 1.4 |
| W5 Delivery problems | 27.1 | 10 | 17.1 |

### V4 The same themes in 4 and 5 star reviews, %

| Theme | Share of 4 and 5 star reviews |
|---|---|
| W1 Rigid plan, hard to skip or cancel | 1.9 |
| W2 Too expensive | 6.7 |
| W3 Menu repetitive or narrow | 4.9 |
| W4 Food waste or portion issues | 7.4 |
| W5 Delivery problems | 8.5 |
| X1 App or billing fault | 1.5 |
| X2 Wants ready-made or less cooking | 0.7 |

### V5 Codebook

| ID | Theme | Regular expression |
|---|---|---|
| W1 | Rigid plan, hard to skip or cancel | `\b(skip\w* or paus\w* or cancel\w* or unsubscrib\w* or auto.?renew\w* or charged (me )?(again or twice or without) or commit\w* or locked in or cut.?off or deadline or forgot to)\b` |
| W2 | Too expensive | `\b(expensive or pric\w+ or overpriced or too much money or not worth or afford\w* or cheaper or costly or cost too or rip.?off)\b` |
| W3 | Menu repetitive or narrow | `\b(repetit\w* or same (meals? or recipes? or menu or dishes) or boring or variety or limited (menu or options or choice\w* or selection) or more (options or choices or recipes))\b` |
| W4 | Food waste or portion issues | `\b(portion\w* or too (small or little) or not enough food or wast\w* or spoil\w* or rotten or wilted or went bad or mold\w* or packaging or plastic)\b` |
| W5 | Delivery problems | `\b(deliver\w* or late or never (arrived or came or received) or missing (box or item\w* or ingredient\w*) or damaged or courier or shipping or did ?n.?t arrive)\b` |
| X1 | App or billing fault | `\b(bug\w* or crash\w* or log ?in or glitch\w* or freez\w* or not working or error\w* or refund\w* or double charged)\b` |
| X2 | Wants ready-made or less cooking | `\b(ready.?made or ready to eat or pre.?made or pre.?cooked or heat and eat or too much (work or prep or time) or takes too long or prep time or no time to cook)\b` |

## Appendix D: Glossary and abbreviations

This glossary gives the meaning of every abbreviation, technical term and tag used anywhere in this document, so a reader does not have to search back through forty prior pages to find where a term was first expanded. Terms are grouped by kind, financial and unit-economics terms, market and regulatory terms, model and document terms, and then the tag and units conventions that run through every section.

### D.1 Financial and unit-economics terms

| Term | Meaning as used in this document |
|---|---|
| EBITDA | Earnings before interest, tax, depreciation and amortisation; the case's own measure of operating profit before financing and non-cash charges `[C K6]` |
| CAC | Customer acquisition cost, the average amount HarvestBox spends to sign up one new customer, stated by the case at ₹7,000 `[C U3]` |
| LTV | Lifetime value, the gross profit a customer returns over the time they stay subscribed, stated by the case at about ₹10,900 `[C U5]` |
| LTV to CAC | The ratio of lifetime value to customer acquisition cost, the case's own headline unit-economics measure, stated at 1.55x today against a 3.0x benchmark `[C U6]` `[C U7]` |
| AOV | Average order value, the rupee value of one box, ₹5,200 `[C K2]` `[C U1]` |
| GP | Gross profit, revenue less the direct cost of producing a box, ₹1,600 a box `[C U2]` |
| Gross margin | Gross profit as a share of revenue; fell from 38% in 2022 to 31% in 2025 `[C P22]` `[C P25]` |
| Run-rate (EBITDA) | The annualised EBITDA a scenario is earning in its final months, used here as the average of months 22 to 24 `[M]`, distinct from cumulative EBITDA, which sums every month |
| Payback month | The month in which a cohort's cumulative gross profit first exceeds its acquisition cost; HarvestBox's is month 10 `[M]` |
| Contribution margin | Revenue less variable costs, used in this document only when quoting a real company's own disclosed figure (for example Marley Spoon's 34.7% `[S28]`), never computed for HarvestBox |
| Working capital | Cash tied up in a business's operating cycle rather than spent outright; relevant to Proposal B's receivables under assumption A21 |
| Cumulative EBITDA | The sum of EBITDA across every month of a period, as distinct from the run-rate, used in table `[T8]` and in insight 12's comparison |

### D.2 Market, competition and regulatory terms

| Term | Meaning as used in this document |
|---|---|
| RTE | Ready-to-eat, a food category requiring no preparation beyond opening, thawing or reheating, the subject of Proposal C and of the four disagreeing market-size reports in section 9.3 |
| CAGR | Compound annual growth rate, the standard way outside market reports state a growth rate over several years |
| FSSAI | Food Safety and Standards Authority of India, the regulator whose licence thresholds and shelf-life rules govern Proposal C `[S64]` `[S65]` |
| FBO | Food business operator, the FSSAI's term for any entity, including an e-commerce seller, subject to its licensing and hygiene rules |
| MAP | Modified atmosphere packaging, a technique for extending a chilled product's shelf life, cited only from unverifiable vendor sources in this research (section 15.5) |
| HPP | High-pressure processing, a second shelf-life-extension technique, cited with the same caveat as MAP |
| Private label | A retailer's own-brand product, as distinct from a manufacturer's branded product; the ₹3,500 meal kit named in the case is private label `[C M3]` |
| Modern trade | Organised retail, supermarkets and chains, as distinct from general or traditional trade (independent kirana stores); the channel Proposal B sells through `[C PB1]` |
| General trade | Independent, unorganised retail outlets (kirana stores), the dominant channel for Indian consumer goods by an older reference-period estimate `[S61]` |
| Dark store | A delivery-only warehouse with no walk-in retail, the physical infrastructure behind quick commerce |
| Quick commerce | Rapid, app-based grocery and food delivery (Blinkit, Zepto, Swiggy Instamart), the fastest-growing adjacent category to HarvestBox's own `[S07]` `[S08]` `[S09]` |

### D.3 Model, framework and document terms

| Term | Meaning as used in this document |
|---|---|
| Survival curve | The month-by-month share of a sign-up cohort still active, fitted geometrically through the case's four retention points `[C R1]` to `[C R4]` under assumption A01 |
| Cohort | A group of customers who signed up in the same month, tracked together on the survival curve |
| Tornado (chart or table) | A sensitivity display ranking inputs by the width of their effect on an outcome, high to low; table `[T7]` in this document |
| Retention-gain cancellation threshold | 12.6% skips cancels the standalone retention uplift `[M T2]`. The full rebuilt base run-rate becomes negative at 5.6% skips `[M T7]`; these thresholds measure different outcomes. |
| Issue tree | A mutually exclusive, collectively exhaustive decomposition of a problem into its component causes, used in section 3.2 on the EBITDA gap and in section 8.1 on gross margin |
| MECE | Mutually exclusive, collectively exhaustive, the discipline behind an issue tree: every branch is distinct and the branches together cover the whole |
| Jobs to be done | A framework that defines competition by the underlying task a customer is trying to accomplish, used in section 9.1 to frame "a weekday dinner" rather than "the meal-kit category" |
| Porter's five forces | A framework assessing industry profitability pressure across new entrants, supplier power, buyer power, substitutes and rivalry, applied in section 10.1 |
| Ansoff matrix | A 1957 growth-strategy framework sorting a move by whether it sells an existing or new product into an existing or new market, applied to the three proposals in section 16.1 |
| Kano model | A framework classifying a feature as a must-have, a performance attribute or a delighter by how its presence or absence changes satisfaction, applied to the five exit reasons in section 7.4 and to the rebuilt Proposal A's features in section 17 |
| Real options | A framework treating a future investment decision (here, the staged ready-to-eat launch) as an option exercised only once a named condition is met, rather than a commitment made today |
| RACI | Responsible, Accountable, Consulted, Informed, a framework for assigning exactly one accountable owner to each workstream, used in section 22.4 |
| KPI tree | A decomposition of one top-level metric (here, EBITDA) into the operational levers that drive it, used in section 23.2 |
| Pre-mortem | An exercise that works backward from an assumed future failure to find its most likely causes, used in section 21.3 |
| Heat map | A table or grid sorting items by two scored dimensions (here, probability and impact) so attention goes first to the highest-risk combination, used in section 21.2 |

### D.4 Tags and units

Every number in this document carries a tag stating where it came from and how far it can be disputed.

| Tag | Meaning | Resolves to |
|---|---|---|
| `[C K5]` | A case fact, by the reference ID given in its transcription | `case/01-case-brief.md` |
| `[A08]` | A team assumption, numbered A01 to A25 | Section 25 of this document, section 5 of `PLAN.md` |
| `[M]` | A number produced by running the HarvestBox model | `model/model_outputs.json` |
| `[T4]` | A table produced by the same model run | `model/model_tables.md`, Appendix B |
| `[S12]` | An external source, numbered in the source register | Appendix A, `research/raw/sources.md` |
| `[V2]` | A table from the review-mining output | Appendix C, `research/reviews/review_tables.md` |

Units follow one rule throughout: Indian rupee figures are written with crore (Cr, ten million) and lakh (one hundred thousand), using Indian digit grouping, and a foreign-currency figure from an outside source stays in that source's own currency (€, $, £) rather than being converted to look like an Indian figure. A negative number carries the minus sign, written as U+2212. A range uses the word "to", never a dash. Where the model gives a figure to one or two decimal places, that precision is kept; where an outside source gives a rounded figure, the rounding is kept rather than implying a precision the source does not support.

| Unit or symbol | Meaning |
|---|---|
| Cr | Crore, ten million (10,000,000) |
| Lakh | One hundred thousand (100,000) |
| ₹ | Indian rupee |
| x (as in "3.0x") | A ratio, read as "times", used throughout for LTV to CAC |
| pp or points | Percentage points, used when comparing two percentages directly rather than as a ratio (for example, gross margin fell 7 points) |
| M (as in "month 12", "M24") | A month number counted from the start of the 24-month plan horizon, month 0 being today |
| Y1, Y2 | Year 1 (months 1 to 12) and year 2 (months 13 to 24) of the plan horizon |

This appendix does not repeat the full tag-resolution table from section 0.2 beyond what is shown above; a reader who needs the complete reading conventions, including how a tag covers a whole sentence unless a later figure in the same sentence carries its own tag, should read section 0.2 directly, since that section's job is the reading convention itself, while this appendix's job is the vocabulary.

## Appendix E: Validation plan, not yet run

No interview, survey or pilot described in this appendix has been run. HarvestBox is fictional, this document rests entirely on the case brief, the team's own model and outside research about real companies, and every figure in the plan that would ordinarily be tested against a live customer or a live operator before a Board commits ₹15 Cr of cash `[C K4]` is instead an assumption, a modelled output or a borrowed benchmark from a different company, country or decade. This appendix states what we would actually go and check first, who we would ask, how many, and what answer would change the plan, precisely because none of it exists yet.

### E.1 Who we would interview, and how many

The plan's riskiest numbers, named in section 25.3 as the nine assumptions that matter most, are concentrated in customer behaviour, referral, win-back, conversion, retention under the rebuilt Proposal A, not in anything a desk exercise can resolve further. Five respondent groups would close that gap fastest, each chosen because they sit on a different side of the exact mechanism a specific assumption describes.

| Respondent group | Target count | Why this group | The assumption it would test |
|---|---|---|---|
| Lapsed subscribers, by exit reason | 30, roughly 6 per stated reason `[C W1]` to `[C W5]` | The case gives shares, not mechanisms; a leaver can say what the rigid contract, the price or the menu actually felt like in the moment they cancelled | A08 (skip behaviour once free), the timing inference in section 5.4 |
| Six-month-plus stayers | 20 | This group rates HarvestBox 4.6 of 5 `[C W6]`; understanding what specifically keeps them, beyond "the product is good," would sharpen the rebuilt Proposal A feature design and the referral mechanic | A10 (whether a stayer would actually refer a friend), A11 (whether ₹1,000 a side is the right reward) |
| Non-customers who use quick commerce for dinner | 25 | This group is the dinner map's other four routes in section 9.2; understanding why they never tried HarvestBox, or tried and left early, tests whether the rebuilt Proposal A's price ladder and floor actually address their objection | A09 (the entry-tier price point), the jobs-to-be-done framing in section 9.1 |
| A modern-trade buyer (grocery chain category manager) | 3 to 5 | Only this role can state actual listing fees, credit days and margin terms, which this research could not verify beyond a decade-old general estimate `[S61]` `[S62]` | A21 (Proposal B's channel-cost and receivables terms) |
| A co-packer or cold-chain operator serving chilled, short-shelf-life food | 3 to 5 | Only this role can state an actual, India-specific cost per kilometre, cost per pallet-day, or achievable shelf-life-extension figure, none of which Lane E's desk research could verify `[S66]` | A22, A23 (Proposal C's running cost and the staged launch's feasibility) |

*The target counts above are planning assumptions about what a useful qualitative sample looks like for each group, not a statistically powered sample size; this appendix does not claim a specific count would make any finding generalisable, only that it is large enough to surface the main patterns a desk exercise cannot.*

### E.2 The question each group would be asked, and the answer that would change the plan

A validation interview is only useful if its answer can move a number in the model, not merely confirm a feeling the team already had. The table below states, for each group, the single question that matters most and the specific answer that would require a change to this plan.

| Respondent group | The question that matters most | The answer that would change the plan |
|---|---|---|
| Lapsed subscribers | "In the week you decided to cancel, what specifically happened, and would a free, floor-protected pause have changed that decision?" | If more than half say no, a floor would not have changed their decision, assumption A08's premise, that the rebuilt Proposal A's floor is the right mechanism for the case's stated PA4 risk `[C PA4]`, needs re-examining, and the skip-rate sensitivity range in table `[T7]` should widen rather than stay at 12% to 0% |
| Six-month-plus stayers | "Would you actually refer a friend for ₹1,000, and if so, how many friends in a year?" | If the typical answer is zero or one friend a year, assumption A10's 20%-of-sign-ups-by-month-12 referral target `[A10]` is too high, and the referral step, +₹2.21 Cr of the bridge's ₹3.77 Cr largest block `[T6]`, should be re-modelled at a lower referral share before the plan is presented as achievable |
| Non-customers using quick commerce | "What would make you choose a meal kit over ordering in or a ten-minute app, on a typical weeknight?" | If the answer is consistently "nothing, I don't want to cook," that confirms section 10.4's reading that Proposal A's ceiling is bounded by how many households want to cook at all, a segment this research could not size, and the plan's growth expectations for new sign-ups, not just retained ones, should be set more conservatively |
| Modern-trade buyer | "What would the actual listing fee, credit period and category margin be for a premium meal kit on your shelves?" | If channel cost or receivables terms are materially worse than assumption A21's 6% and 60 days, Proposal B's already-thin net contribution of about ₹0.84 Cr in year 1 `[§14.2]` would turn negative, strengthening the case for continuing to park it |
| Co-packer or cold-chain operator | "What shelf life can you actually deliver for a chilled, ready-to-heat meal at this price point, and at what cost?" | If achievable shelf life falls below the FSSAI floor of 30% of shelf life or 45 days at delivery `[S65]` without an extension technique this research could not verify, the staged ready-to-eat launch's month 14 sales start `[A23]` would need to move later, and the month 12 gate's cash buffer would need re-testing against a longer, costlier compliance runway |

### E.3 The pilot as the real test

Every one of the five interview groups above answers a question faster and more cheaply than a national rollout, but none of them is a substitute for the one test this plan actually commits to: the one-city pilot described in section 22.3, running from week 4 of the 90-day plan, with its own stated success test of 81% month-2 retention and a skip rate under 6% by day 90 `[M T11]`. The validation interviews in this appendix are what we would do before or alongside the pilot, to sharpen the rebuilt Proposal A's design and the targeting of the operational improvements; the pilot itself is what actually tells the Board whether the model's assumptions hold against real HarvestBox customers in a live city, rather than against a modelled curve or a borrowed outside benchmark.

The distinction matters because every number in sections E.1 and E.2 above describes people who are not yet HarvestBox customers experiencing the rebuilt Proposal A, lapsed subscribers recalling a past decision, stayers speculating about a referral they have not been offered, non-customers imagining a product they have not tried. The pilot, by contrast, puts the actual rebuilt subscription in front of actual new sign-ups in one real city, and its day-30, day-60 and day-90 reads (section 22.2) are the closest this plan comes to primary evidence about HarvestBox itself, as distinct from evidence about the category it competes in. If the pilot's first two-month read, from the week-3 and week-4 cohorts, comes in below 81%, or the skip rate exceeds 6%, that is a stronger signal to revisit assumption A08 or the floor's design than anything an interview could establish in advance, because it is HarvestBox's own customers, not a proxy population, generating the number.

We state this validation plan honestly as unperformed work, consistent with the rule that HarvestBox has no primary research and none is invented to fill the gap `[C G3]`. A judge asking "what would you do differently with more time" should hear this appendix's answer: run the five interview groups above in parallel with the first four weeks of the 90-day plan, so their findings reach the product and pricing workstreams before the pilot's own feature set is frozen at week 8, not after.

## Appendix F: Data conflicts and method limits

This appendix collects every disagreement between outside sources that the six research lanes flagged, states how each was resolved or left open, and separately states the limits of the model and of the review mining. Nothing here changes a locked number: every conflict below is a disagreement among outside sources about real companies, markets or regulations, never a disagreement inside the HarvestBox model itself, which is built entirely from the case brief and the team's own stated assumptions.

### F.1 Conflicts between outside sources, lane by lane

| Lane | Conflict | Figures in disagreement | How it was resolved in this document |
|---|---|---|---|
| A, market context | India's ready-to-eat and ready-meals market size and growth | IMARC $6.2 bn (2025), 7.61% CAGR `[S02]`; Ken Research $1,280 million (2025), 16.40% CAGR `[S03]`; Technavio about $2.17 bn (2025), 28.8% CAGR `[S04]`; GlobalData ₹19,931.60 million (2025), 14.29% CAGR `[S05]` | Presented side by side with each publisher's own product scope stated, in section 9.3, never averaged into one figure; the case's own 15% ready-to-eat growth `[C M2]` is noted as sitting inside the range these four reports bracket, not confirmed by any one of them |
| A, market context | India meal-kit market size | GlobalData's own line gives ₹266.55 million (2025), 13.21% CAGR `[S06]`; a separate, non-reproducible aggregator figure claimed $238.0 million by 2024, two orders of magnitude larger | The larger figure could not be independently reproduced on a live fetch and is not used anywhere in this document; only the GlobalData figure is cited, in section 9.3 |
| A, market context | Men's daily domestic-work time in the 2019 NSO Time Use Survey | One secondary summary gives about 25 minutes a day `[S15]`; a second secondary summary of the same survey gives 97 minutes a day `[S16]` | Both figures are shown side by side in section 9.1 and 9.4 as an unresolved conflict between two secondary summaries, neither independently confirmed against the primary survey document in this research round; no cooking-only time figure exists in either reading, logged as a separate gap |
| B, global precedents | HelloFresh's marketing share of revenue and active-subscriber count | A search-summary figure of "18.2% of revenue on marketing, €1.95 bn of €10.72 bn revenue, 7.6 million active subscribers" does not match any verified HelloFresh fiscal year (FY2023 €7.6 bn `[S22]`, FY2024 about €7.66 bn `[S21]`, FY2025 preliminary about €6.76 bn `[S20]`) | The figure is dropped entirely and never cited in this document, consistent with the build-log correction for writers; only the verified revenue and the directionally-verified marketing-reduction figure from the FY2025 preliminary release are used, in sections 8.3 and 11.2 |
| B, global precedents | Factor75's standalone revenue | A blog claims Factor75 alone reached "more than €2,000 million" in 2023, larger than HelloFresh's entire verified group ready-to-eat segment of €1.4 billion for the same year `[S22]` | The blog figure is dropped as implausible and not used; only the verified group-level €1.4 billion ready-to-eat segment figure is cited, in section 11.7 |
| B and C, retention | Blue Apron six-month retention | Bloomberg Second Measure, a direct-read May 2016 snapshot, gives 28% `[S30]`; a 1010data analysis reported in October 2016 press coverage gives about 10% for HelloFresh, Blue Apron and Plated combined, never independently opened in this research | Both figures are presented side by side with their provider, date and method stated, in sections 5.3 and 6, rather than treating either as the settled benchmark; HarvestBox's own case-stated 34% six-month retention `[C R3]` is noted as sitting closer to the verified 28% figure than to the unverified 10% figure, without claiming this proves anything about HarvestBox specifically |
| C, retention benchmarks | McKinsey's 38%/62% subscription-box cancellation figures against Eightx's 8% to 15% monthly meal-kit churn estimate | McKinsey (cross-category, all subscription boxes, November 2017 US survey) implies about 38% six-month retention; Eightx's midpoint (meal-kit-specific, partly sourced from Blue Apron's own SEC filings) implies about 49% | Both are shown as different category definitions and different years rather than two readings of the same number, in section 5.3; neither is treated as confirming or contradicting HarvestBox's own 34% figure `[C R3]` |
| D, Indian precedents | Licious FY24 net loss | One Inc42 headline states ₹294 crore; the same article's own body and detailed breakdown states ₹298.6 crore `[S43]` | The body figure, ₹298.6 crore, is the one carried into this document wherever Licious's FY24 loss is cited, since it is the figure the article's own detailed table uses |
| D, Indian precedents | Licious FY25 revenue | Entrackr states ₹795 crore `[S44]`; a later Inc42 article states ₹797.2 crore `[S45]` | Both figures are kept on record; the difference, about ₹2.2 crore, is treated as normal rounding or reporting-date variance, not a substantive disagreement, and either figure may appear depending on which source a given sentence cites |
| D, Indian precedents | Country Delight's valuation | One data aggregator states $731.1 million as of 27 March 2025; another states $758 million tied to its Series E round `[S48]` | Both are kept on record; neither traces to a company-issued statement in this research, so this document does not pick a winner between them |
| E, food safety | India's refrigerated-trucks market size | A general search-engine summary gave ₹6.4 billion (2023); a direct read of the IMARC Group report page itself gives ₹7.4 billion (2024) `[S66]` | The directly-read figure, ₹7.4 billion, is the one used in section 15.5, since a primary-page read outranks a search-engine summary in the source hierarchy (section 0.3) |
| E, food safety | Cloud-kitchen setup cost in India | One source gives ₹1 to 3 lakh (home-based) or ₹5 to 20 lakh (rented or owned space); another gives ₹8 to 20 lakh with monthly rent of ₹25,000 to ₹80,000 | Neither figure is used as a HarvestBox cost input anywhere in this document; both are logged in the raw file as an unresolved range from uncited secondary sources |
| E, food safety | FSSAI licence turnover thresholds, old against revised | Pre-amendment bands (registration to ₹12 lakh, state licence to ₹20 Cr, central licence above ₹20 Cr) against the revised bands effective 1 April 2026 (registration to ₹1.5 Cr, state licence ₹1.5 Cr to ₹50 Cr, central licence above ₹50 Cr) `[S64]` | Not a genuine disagreement between sources, the revised bands supersede the old ones by regulatory amendment; this document uses the revised bands throughout, per the build-log correction for writers, while noting that an older secondary source would still show the pre-amendment figures |
| F, retail and private label | India's private-label share of modern trade | A 2012 to 2013 reference-period figure gives about 4.5% overall, 30% to 50% in staples `[S17]`; a 2025 consumer-attitude survey finds 52% of consumers switching to private label `[S74]`; BigBasket's own private-label share of its own sales is close to 40% of FY24 sales `[S75]` | All three are presented in section 14.4 as measuring different things, a decade-old market-share estimate, a recent attitudinal survey and one retailer's internal mix, and are never combined into a single "current" aggregate figure |
| F, retail and private label | Why Plated's in-store trial pulled back against why its home-delivery business was wound down | One unopened source suggests an in-store pullback as early as March 2019, distinct from the November 2019 announcement that phased out the home-delivery subscription business | Both events are recorded separately in section 14.4 rather than treated as the same event; no stated commercial reason for either was found in any source opened in this research, logged as "no stated reason found" per the plan's own convention |

*Cr: crore. CAGR: compound annual growth rate. The "resolved" column states this document's own treatment; several conflicts, especially the India market-size reports in Lane A and the two retention studies in Lanes B and C, are left genuinely open because no primary source in this research round could adjudicate between them.*

### F.2 Limits of the model

The HarvestBox model is deterministic and reproduces to the digit on every rerun `[M]`, which is a strength for traceability and not a claim that its structure captures every real-world dynamic. Four limits matter most for a judge weighing how much to trust a given modelled figure.

| Limit | What it means for the numbers in this document |
|---|---|
| One-input-at-a-time sensitivity only, with one two-way exception | Table `[T7]` tests eight inputs individually; only retention and the skip rate are tested together, in the grid `[T8]`. The pre-mortem in section 21.3 substitutes narrative scenario-building for a full combinatorial sensitivity test the model does not run |
| The survival curve's tail beyond month 12 is fitted, not observed | The case states only four retention points, months 1, 3, 6 and 12 `[C R1]` to `[C R4]`; every month in between and the entire post-month-12 decline rests on assumption A01's geometric fit, not on a case-stated or outside-verified figure |
| Referral, win-back and conversion rest on uneven outside evidence | The bridge reports the rebuilt Proposal A's three acquisition-side steps separately (referral +₹2.21 Cr, win-back +₹0.50 Cr, conversion +₹1.07 Cr, together the bridge's single largest block, `[T6]`), but two of the three, referral (A10) and conversion (A14), rest on one outside study or no outside evidence at all; only win-back (A12/A13) is anchored to a case-stated figure, the 34% rigidity share. This is disclosed in section 6.4 |
| No combined-shock or tail-risk scenario beyond bear, base and bull | The model runs twelve named scenarios `[M]`, but none models an unmodelled external shock (litigation, a regulatory fine, a supply disruption) landing at the plan's lowest cash point, ₹2.89 Cr in month 20 `[M]`; Appendix E's validation plan and the risk register's qualitative pre-mortem are the document's only treatment of that gap |

### F.3 Limits of the review mining

The review-mining evidence in section 7 and Appendix C answers one narrow question, whether real customers of six other companies complain about the same things, in roughly the same order, as the case says HarvestBox's leavers do; it is association, not proof, and every use of it in this document says so. Seven limits, stated in full in `research/raw/R-G-review-mining.md`, are summarised here.

| Limit | What it means for the numbers in sections 7 and Appendix C |
|---|---|
| The population is six other companies' customers, not HarvestBox's | Mostly United States and United Kingdom reviewers; none of them is a HarvestBox customer, and HarvestBox has no reviews of its own, because it is fictional |
| Reviewers are self-selected | People who write a public Play Store review skew toward the very satisfied or the very angry; the quiet middle of a customer base is underrepresented in both the low-star and high-star pools |
| Coding is by regular expression, not human reading of every review | The precision check shows this works correctly for five of seven themes at 70% or better; W5 (delivery problems) stays at 65% and is marked "(indicative)" everywhere it is used `[V2]` `[V3]` `[V4]` |
| One permitted codebook fix touched only W3 | Removing the bare word "selection" from the menu-repetition expression raised W3's precision from 50% to 80%, but one in five sampled matches after the fix is still not truly about menu repetition; no other theme's expression was touched |
| Two of six apps fall under the 300-review floor | Dinnerly (77 reviews) and Green Chef (168 reviews) are kept in the pooled totals but carry little weight individually; the pooled total of 8,052 reviews across four apps above 300 carries the weight in this document |
| The review window is 1 January 2024 onward only | Recent reviews describe each app's current cancellation flow and pricing, which may differ from the years Lane B's company-level facts (profitability, marketing share) describe for the same companies |
| W2 and W4 sit exactly at the 70% precision threshold | They are not labelled "(indicative)" because the rule names only results strictly under 70%, but close to one in three sampled matches for several themes is still a false keyword hit, a margin of error that travels with every number in tables V2 to V4 |

None of these limits changes the one finding this document leans on most, that rigidity is the largest theme in both the case's own stated reasons and the review data; they do mean that the precise size of any gap stated from this evidence, for example the 16.2-point gap on menu repetition or the 17.1-point gap on delivery `[V3]`, should be read as approximate, not as a measured difference with a tight error bar, and that none of it is offered as proof about HarvestBox's own, non-existent customer base.
