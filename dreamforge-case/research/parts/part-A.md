## 0. Document control

**Answer.** This document is the research base behind Team IdeaForge's recommendation for SwiftKart: lease every bike, electrify the existing fleet first, win the e-commerce contract, and hold ₹5.8 lakh of the ₹1 crore in reserve, on model hash effb9a66e6 [M]. Every number below carries a tag that says exactly where it came from, a brief sentence, a stated assumption, a model output, a model table, a verified raw fact, or a named source, so a judge who challenges a figure in the cross-questioning can trace it back in one place. Four of the eight research lanes cleared the plan's verification gate on the first reopen and the remaining two cleared it after one targeted retry, so the evidence behind this recommendation has been checked against its own primary sources, not merely collected once and left untested [RA R0-verify]. The document is built to the same discipline the deck uses: one model, one set of locked numbers, and a single sentence rule that if a number ever moves, every slide and every section that uses it is rewritten together.

### 0.1 Purpose and reader

The reader is SwiftKart's management acting, in the case's own framing, as the audience for a strategy and finance consulting engagement [C T01]. Management has asked the team to determine how SwiftKart should deploy its ₹1 crore over the next 24 months [C T02], considering the company's financial position, the growth opportunity, fleet strategy, operational requirements and long-term competitive position [C T03]. The deck that accompanies this document is capped at four main slides plus a title slide and an annexure [C S01], with annexure slides free to carry detailed calculations, the financial model, assumptions, sensitivity analysis, supporting research and sources [C N01, C N02]. A four-slide deck can carry a finding and its headline number; it cannot carry the full derivation behind that number, the case against the obvious alternatives, the conflicts between outside sources, or the complete assumptions register. This document carries all four, so a judge who presses on a slide's number can find the working behind it here, and so the two team members who both answer cross-questioning can work from the same base rather than improvising separately.

The document answers four things the case asks for directly.

| Job | What it means here | Case reference | Where in this document |
|---|---|---|---|
| Diagnose | State SwiftKart's current unit economics and the key business challenge | S02 | Sections 3, 4 |
| Decide | Evaluate the strategic alternatives and compare them on financial and business parameters | S03 | Sections 13 to 16 (writer D) |
| Allocate | Deploy the ₹1 crore over 24 months with the financial analysis and assumptions behind it | S04, T02 | Section 17 (writer E) |
| Recommend and plan | State the final recommendation with a 24-month roadmap, risks, uncertainties and expected impact | S05 | Sections 2, 21 to 25 |

The deck and this document are meant to agree to the figure shown. Wherever a section below corresponds to a slide panel, that section states the exhibit it feeds, so a reader moving between the two never finds a number that does not match.

### 0.2 Tag legend and reading conventions

Every number in this document ends with a bracketed tag that tells the reader how far to trust the figure and where to check it.

| Tag | Meaning | Resolves to |
|---|---|---|
| `[C D05]` | A fact stated in the case brief, by the sentence or data-row ID given in its transcription | `case/01-case-brief.md` |
| `[A12]` | A team assumption, numbered A01 to A26 | Model table T16, `model/model_tables.md` |
| `[M]` | A number produced directly by running the SwiftKart model | `model/model_outputs.json` |
| `[T5]` | A table produced by the same model run | `model/model_tables.md` |
| `[RA12]` | A raw fact recorded by a research lane, with primary provenance | `research/raw/R-A-market.md` to `R-H-methods.md` |
| `[S123]` | An external source, numbered in the source register | `research/raw/sources.md` |

Money is written as ₹ with Indian digit grouping, lakh (L, one hundred thousand) and crore (Cr, ten million), never as "Rs" and never converted from a foreign currency to look Indian. Ranges use the word "to", never a dash. Where the model gives a figure to one or two decimal places, this document keeps that precision; where a source gives a rounded figure, the rounding is kept, because a sharper decimal than the source supports would overstate what is actually known. The word "assumption" is used once in any paragraph that rests on a team assumption, so a reader never mistakes an estimate for a case fact. Options are referred to only as "option 1" to "option 6" and "the no-award branch", matching the numbering in model table T4; no other label is used anywhere in this document.

### 0.3 Source hierarchy

Where two outside sources disagree, or an outside figure differs from a case figure, this document follows a fixed order rather than averaging or choosing whichever number is more convenient to the argument.

| Tier | Source type | How it is used here |
|---|---|---|
| 1 | The case brief itself | Never overwritten. Every brief figure is a fixed input; a conflicting outside figure is reported as context or as a stress test, never as a replacement |
| 2 | Government and regulator text (Ministry of Heavy Industries, Delhi Transport Department, the Commission for Air Quality Management, PPAC, CEA, SEBI, PIB, CBIC) | Preferred for policy dates, incentive amounts and emission factors |
| 3 | Company filings (DRHPs, annual reports, investor presentations, exchange filings, balance sheets) | Preferred for real companies' financial facts used as market context |
| 4 | Named research houses and standards bodies (IPCC, the GHG Protocol, ISO, the GLEC Framework, NITI Aayog, Mordor Intelligence, IMARC) | Preferred for market sizing and methodology |
| 5 | Reputable press reporting on a named, dated primary event | Preferred for company announcements, EV commitments and policy coverage |
| 6 | Company press releases and vendor or blog pages, flagged `[blog]`, "(vendor-reported)" or "(aggregator-reported)" | Used last, for directional context only, never as the sole support for a number inside the argument |

A lower tier that disagrees with a higher tier loses, and the disagreement is logged in `research/raw/conflicts.md` rather than silently dropped. Two concrete examples recur through this document's sections: the Free Press Journal headline describing the 10 August 2026 PM E-DRIVE amendment as a 50 percent subsidy cut, against the primary gazette text showing only the vehicle cap and fund figure were raised and the per kWh rate was unchanged [RE20, RE14]; and one press report claiming the PM E-DRIVE e-2W terminal date stayed at 31 March 2026 under the same amendment, against the primary gazette text's own "01.04.2025 to 31.03.2028" column header [RE23, RE12 to RE14]. Both are resolved in favour of the primary government text per this hierarchy.

### 0.4 Verification status by lane

Eight research lanes (R-A market, R-B leasing, R-C clients, R-D vehicles and energy, R-E policy, R-F operations, R-G emissions, R-H methods) fed the model and the research document. Two verification passes (V1 covering R-A to R-D, V2 covering R-E to R-H) reopened a 20 percent sample of each lane's verified rows, with a 100 percent check on every row feeding a model assumption. A lane under the plan's 90 percent pass-rate gate is re-run once on its failing rows; this happened for R-C and R-D [RA R0-verify].

| Lane | Rows checked | Pass rate after first pass | Pass rate after retry | Gate (90%) |
|---|---|---|---|---|
| R-A market | 11 | 100% | not needed | cleared |
| R-B leasing | 23 | 100% | not needed | cleared |
| R-C clients | 19 | 89.5% | 94.7% | cleared on retry |
| R-D vehicles and energy | 20 | 60% | 100% | cleared on retry |
| R-E policy | 43 | 100% | not needed | cleared |
| R-F operations | 17 | 100% (16 pass, 1 corrected) | not needed | cleared |
| R-G emissions | 55 | 100% | not needed | cleared |
| R-H methods | 10 | 100% | not needed | cleared |

R-D's first-pass shortfall was almost entirely an access block against five domains that returned HTTP 403 or 504 to the automated fetch tool, not a content error; a direct Python download cleared all eight blocked rows, including the ICCT total-cost-of-ownership paper that feeds the fuel-economy and EV energy-use assumptions behind this document's emissions and vehicle-economics sections [RA R0-verify]. R-C's one residual row (a BusinessWorld page cited for a non-model-critical Amazon fleet claim) genuinely does not contain the sentence it was cited for and stays logged as unverifiable rather than being forced to a pass [RA R0-verify]. Neither residual feeds a number this document or the model relies on.

### 0.5 Model version, hash and how to rerun

Every modelled number in this document comes from one pinned run of the SwiftKart model, after two verified assumption updates moved the model from its initial hash to its final, post-verification hash.

| Item | Value |
|---|---|
| Model file | `model/swiftkart_model.py`, writing `model_outputs.json` and `model_tables.md` |
| Model hash (this document's figures) | `effb9a66e6` [M] |
| Checks passed | 18 of 18, model table T17 [T17] |
| Assumption updates since the initial hash | A01 (contract receivable days, 45 to 57) and A20 (Delhi petrol price, ₹100 to ₹102 a litre) |
| Options modelled | Options 1 to 6 and the no-award branch, model table T4 [T4] |

To rerun the model, a reader runs the model file from the repository root with a standard Python interpreter: `PY dreamforge-case/model/swiftkart_model.py`. The script is deterministic: it takes the case facts in `[C]` form and the assumptions register (model table T16) [T16] as inputs and writes the same hash and the same 18 passing checks every time it is run unchanged. Changing an assumption's value and rerunning the script moves every downstream table; the rule this document follows, consistent with the case's data-integrity requirement, is that a changed number is propagated to every sentence that uses it rather than patched in one place.

### 0.6 What is case fact, assumption, model output and outside evidence

Four different kinds of number appear in this document, and treating them as interchangeable is the easiest way for an argument to collapse under cross-questioning.

| Kind | What it is | Can it be disputed | Example |
|---|---|---|---|
| Case fact `[C]` | Stated directly in the case brief | No. It is a premise of the exercise, never changed | Available capital ₹1 crore `[C D09]` |
| Team assumption `[A##]` | A value chosen where the case asks teams to make and state reasonable assumptions `[C I04]` | Yes, and each one in model table T16 carries its own bear and bull range | A12: all-in EV lease rate, base ₹3,500, bear ₹5,000 |
| Model output `[M]` or `[T#]` | Arithmetic performed on case facts and assumptions by the pinned model run | Only by changing an input and rerunning; the arithmetic itself is mechanical | Recommended plan's 48-month NPV, ₹5.76 crore `[M]` |
| Outside evidence `[RA##]` or `[S##]` | A fact about a real company, market or regulation, verified by a research lane | Yes, and several outside sources disagree with each other, flagged throughout | Delhivery's consolidated debtor days, 58 for FY25 `[RC60]` |

SwiftKart itself is fictional and has no primary research of its own: no interviews, no letters of intent, no named client commitments. Every piece of outside evidence in this document describes a real company, market or regulation, used as context for the industry SwiftKart operates in, and no real company's figure is ever attributed to SwiftKart directly. Where this document needs a client-side data point, it draws on named, verified commitments by real e-commerce and quick-commerce platforms (sections 6 and 7), always labelled by the company that made the commitment.

### 0.7 The skill's calibration note

Building this document's argument used the case-competition-deck skill's structural playbook, invoked at touchpoints T1 and T2 per the plan: a contrarian recommendation defended against the obvious answers, one moneyshot number, foreshadowing across sections, symmetric treatment of the six options, three scenarios on every uncertain figure, and a double synthesis that closes the options analysis and then the whole document. This case is a strategy case (capital allocation across options) with a finance core (net present value, financing, scenario discipline over a 48-month horizon) and an operations core (fleet uptime, service level, capacity scaling). The skill's own corpus is three merger-and-acquisition decks from the Global Case Competition at Harvard; strategy and operations patterns in the skill are themselves flagged there as extrapolated rather than corpus-derived. This document extrapolates one layer further: the structural and rhetorical patterns transfer with confidence, because they describe how an argument is sequenced rather than what a particular industry looks like, but the merger-specific frameworks (trading comparables, a football field valuation, earnings-per-share accretion) do not apply to a 100-bike delivery fleet and are replaced here by net present value over 48 months, lease-versus-buy total cost of ownership, scenario and sensitivity analysis, real options, and a weighted scorecard, as set out in `research/ARGUMENT.md`. The skill says to produce a slide deck in PowerPoint format; that mechanical step does not apply to this project, since the accompanying deck is built natively in Figma Slides.

### 0.8 Document map

The research deliverable is written in eight parts by eight writers, assembled into one document.

| Part | Sections | Writer | Subject |
|---|---|---|---|
| part-A.md | 0 to 4 | A | Document control, requirements traceability, the one-page answer, today's unit economics, seven numbers that change the answer |
| part-B.md | 5 to 8 | B | Market, clients, competition, the policy clock |
| part-C.md | 9 to 12 | C | Vehicle economics, leasing market, range and charging, emissions |
| part-D.md | 13 to 16 | D | The six options, symmetric treatment and the scorecard |
| part-E.md | 17 to 20 | E | The ₹1 crore decision, the financial case, scenarios and sensitivity, financing |
| part-F.md | 21 to 25 | F | Risk register, the roadmap, operating model, KPIs, impact |
| part-G.md | 26 to 28 | G | The deck's derivation, the judge question bank, method and validation |
| part-H.md | 29 to 31 | H | Go-to-market (the six-buyer funnel), capital timing and payback, and the frameworks behind the R2 deck's slides 2 to 5 |

Writer G also writes the glossary at `parts/appendix-E-glossary.md`. Every part follows the same writer rules: exact section titles, an opening finding, a closing statement of what the section does and does not establish, and a tag on every number.

### What this section establishes, and what it does not

- Establishes who this document is for, what four jobs it does against the case's own deliverables, and how it maps to the deck's four main slides and annexure.
- Establishes the tag system used on every number in the document, so a case fact, an assumption, a model output and an outside fact are never confused with each other.
- Establishes the source hierarchy used whenever outside evidence disagrees, and gives two worked examples of that hierarchy resolving a real conflict in the policy evidence.
- Establishes that six of eight research lanes cleared verification on the first pass and the remaining two cleared it after one retry, with the residual gaps named rather than hidden.
- Establishes the model's final hash, effb9a66e6, the two assumption updates that produced it, and the exact command to reproduce it.
- Does not itself argue the recommendation, quantify any option, or state the roadmap; those are sections 2 and onward. Section 0 is scaffolding, not argument.

## 1. Every line of the brief, mapped: where it is answered and on which slide

**Answer.** Every reference ID in the case brief is used somewhere in this document, and the table below says where, extending the same mapping the plan carries at its section 1.2. Seventy-eight brief IDs across the header, background, opportunity, data tables, additional information, market uncertainty, task, submission requirements, annexure and important-instructions blocks are each tied to the section that answers them, so a judge working from the case PDF can jump straight to the matching argument. No ID is dropped, and the one judging criterion that is hardest to show on a four-slide deck, feasibility, is the one this document spends the most pages defending (sections 15, 20 to 23).

### 1.1 Requirements traceability matrix

The matrix below groups brief IDs by block, states what each requires, how this document and the model answer it, and which section carries that answer. Slide references use the fixed titles the brief sets: S2 The Situation, S3 Strategic Alternatives, S4 The ₹1 Crore Decision, S5 Recommendation and Roadmap, and S6 for the annexure `[C S02 to C S05, C N01]`.

| Brief ID | What the brief says | How this document uses it | Section | Slide and panel |
|---|---|---|---|---|
| H01 to H03 | The case title, "The ₹1 crore crossroads: SwiftKart's next move" | Frames the governing thought of the whole document and deck | 2 | S1 cover |
| B01, B02 | SwiftKart is a Delhi-NCR last-mile delivery company with 100 petrol two-wheelers | Establishes the starting fleet and geography used throughout | 3, 5 | S2 KPI tiles |
| B03 | Rising fuel and maintenance costs pressure margins | Quantified as petrol taking 34 percent of per-bike revenue | 3, 9 | S2 challenge card |
| B04 | Clients prefer low-emission logistics partners | Backed by named client EV commitments | 6 | S2 challenge card |
| B05, B06 | SwiftKart is evaluating electrification, which is not its only priority | States the dual decision (fleet and growth) this document resolves | 2, 13 | S1 verdict |
| B07 | ₹1 crore available over 24 months, plus the contract opportunity | The capital-allocation question this whole document answers | 2, 17 | S4 donut |
| B08 | Management must decide how to deploy the capital for the greatest value | Restated as the scorecard objective (model table T6) | 13 | S3 score bars |
| O01 | A large e-commerce player is considering SwiftKart as a partner | Frames the contract as conditional, not guaranteed | 2, 22 | S5 Gantt |
| O02 | About 75 vehicles needed within 12 months at high reliability | Sizes the contract fleet and the tranche schedule | 11, 22, 23 | S5 gates G1, G2 |
| O03 | Minimum 95 percent fulfilment required | Sizes spares and the operating model | 11, 23 | S2 badge, S5 gate G2 |
| O04 | A significant low-emission delivery share required | Answered by the recommendation's zero petrol bikes on the contract fleet | 12, 16 | S5 KPI |
| O05 | Monthly emissions reporting required | Answered by the reporting and dispatch platform and the KPI tree | 12, 24 | S4 uses, S5 Gantt row |
| O06 | Ability to scale within 12 months | Answered by the tranche schedule (model table T8) | 22, 23 | S5 Gantt |
| O07 | About ₹2.8 crore annual revenue at full capacity | Shown to be a 100 percent utilisation figure, reconciled to SwiftKart's 85 percent in section 4 | 4, 9 | S2 badge |
| O08 | Investment needed before full utilisation | Answered by the working capital line inside the ₹1 crore | 17 | S4 cash line |
| O09 | The strategic dilemma itself: electrify, grow, or both | The question this document's recommendation answers directly | 2 | S1 verdict |
| D01 to D08 | Current fleet, revenue, deliveries, pay, running costs and utilisation | The unit economics base for the entire model | 3 | S2 unit table |
| D09 | Available capital, ₹1 crore | The budget constraint on every option | 2, 17 | S4 donut |
| D10 to D14 | Acquisition cost, running cost, lease cost, useful life, resale value for petrol, bought and leased configurations | The vehicle economics driving the lease-versus-buy comparison | 9, 10 | S3 table, S6 A3 |
| X01 to X04 | Charging investment, range, downtime, battery wear | Sizes the charging hub and the spares fleet | 11 | S2 badge 3, S5 gates |
| X05 | Petrol resale about ₹30,000 a bike | Funds part of the ₹1 crore through phased sales | 17 | S4 cash line |
| X06 | A subsidy of ₹10,000 per purchased EV "may be available" | Read literally in section 4 as conditional, not guaranteed | 4, 15 | S2 badge, S6 A2 |
| X07, X08 | Financing through internal capital, bank debt or leasing; 11 percent indicative bank rate | The discount rate and the debt-sizing logic for every option | 17, 20 | S3, S4 |
| U01 to U07 | Seven named market uncertainties | Built directly into a case-specific uncertainty exposure matrix | 19 | S3 heat map |
| U08 | Teams are encouraged to research market trends and external data | Answered by the eight research lanes behind this document | 5 to 12 | S6 sources |
| T01 to T06 | The task: act as consultants, deploy the crore, consider the four dimensions, consider six option types, accept there is no single right answer, be judged on analysis quality | The structure of this entire document follows these six lines | 2, 13 to 20 | whole deck |
| S01 to S05 | The deck's four-slide cap and fixed slide titles | The deck derivation table in section 26 maps every number to one of these slides | 26 | S1 to S5 |
| N01, N02 | Annexure slides for calculations, model, assumptions, sensitivity, research and sources, uncounted against the four-slide cap | This document itself, compressed into S6 | 26 | S6 A1 to A4 |
| I01, I02 | 24 hours to prepare; internet and public resources may be used | Explains why every outside fact below carries a dated access note | 0 | S6 sources |
| I03 | All external data must be cited | Every outside fact below carries an `[S##]` or `[RA##]` tag | 0 | source line, every slide |
| I04 | Reasonable assumptions must be clearly stated | Model table T16, 26 assumptions with base, bear and bull values | 19 | S4 assumptions table, S6 A2 |
| I05 | Teams may introduce additional alternatives | Option 6 (leasing both fleets, electrifying first) is the team's own addition beyond the obvious four | 13, 16 | S3 six options |
| I06 | Recommendation must be financially viable, implementable and supported | Answered by sections 17 to 23 together | 17 to 23 | S4, S5 |
| I07 | No single predetermined correct answer | Honoured by evaluating all six options symmetrically before recommending one | 13 to 16 | S3 |
| I08 | Judged on understanding, creativity, financial rigour, feasibility, sustainability, impact | Mapped criterion by criterion in section 1.2 below | all | whole deck |
| B04, O01, O02, I05 | Clients prefer low-emission partners; a large e-commerce player is considering SwiftKart; teams may add alternatives beyond the obvious ones | The six-buyer go-to-market funnel, with the evidence for each count, land-and-expand staging, and the Ansoff matrix placement of the existing client base against the contract client | 29 | S5 client funnel |
| B07, D09, O08 | ₹1 crore available over 24 months; investment needed before full utilisation | The month-by-month deployment of the crore against cumulative contribution over the petrol baseline, and the payback point where the two cross | 30 | S4 phased deployment panel, S4 payback crossover panel |
| T01 to T06, I08 | The task's own four dimensions and six judging criteria | Twenty-two named frameworks used across slides 2 to 5, each tied to one section and one number a judge can check, including the corrected MECE matrix in section 13.1 | 31 | S2 to S5, all new R2 panels |

The matrix groups IDs by the brief's own headings rather than by this document's own section order, so a reader checking a specific case paragraph can find its row without first learning the document's structure. Where one brief ID feeds more than one section, for example D08 (85 percent utilisation), which runs through the unit economics in section 3, the contract reconciliation in section 4 and the scenario base in section 19, the row above names the section that carries the fullest treatment, and the other sections cross-reference it rather than repeating the derivation. This avoids the single most common traceability-matrix failure, which is a brief line answered nowhere because each section assumed another section would cover it.

### 1.2 Judging criteria and where this document wins each

The brief names six judging criteria `[C I08]`. The table below states what each criterion looks for and the specific place in this document, and on the deck, where it is won, extending the plan's own criteria map.

| Criterion | What a judge looks for | Where this document wins it | Evidence a judge can check |
|---|---|---|---|
| Understanding | Close reading of the case's own numbers, not a generic strategy memo | Section 4's seven numbers that change the answer, especially that the ₹2.8 crore contract figure assumes 100 percent utilisation `[C O07]` and that a full charge covers exactly one working day with no spare capacity `[C X02]` | Section 4, model table T1 |
| Creativity | An alternative beyond the four obvious combinations of buy, lease, keep petrol and grow | Option 6, leasing both the existing fleet and the contract fleet and electrifying before the contract starts, introduced under the brief's own invitation to add alternatives `[C I05]` | Sections 13, 16 |
| Financial rigour | Net present value, cash flow, financing, scenarios and sensitivity, not a single point estimate | 48-month net present value for all six options at an 11 percent discount rate `[C X08]`, month-by-month cash (model table T7), bear-base-bull scenarios (model table T10), and a nine-input tornado (model table T11) | Sections 17 to 19 |
| Feasibility | A staged, practical plan with named risks and controls, not only an attractive number | Three vehicle waves and three contract tranches (model table T8), four decision gates, two lessors, ten spares and a twelve-item risk register | Sections 21 to 23 |
| Sustainability | Measured emissions and a demonstrated fit with policy direction, not an unquantified green claim | Grams of carbon dioxide per delivery falling from 240 to 106, a 56 percent cut, against Delhi's 1 April 2028 electric-only two-wheeler registration rule `[RE35]` | Section 12 |
| Impact | A quantified business outcome stated against the status quo, not a qualitative claim | Contribution rising from ₹42.2 lakh to ₹2.06 crore a year, a 4.9 times increase, with zero debt drawn `[M]` | Section 18 |

### 1.3 Where the evidence is thinnest

Honesty about gaps is itself part of the evidence; three residual weaknesses are logged here rather than smoothed over, each cross-referenced to the lane that found it.

- No single, authoritative figure exists for the per-delivery price a quick-commerce or e-commerce platform pays a third-party fleet operator, as distinct from what the platform pays its own gig riders; the case's own ₹40 figure `[C D02]` sits inside the publicly reported ₹15 to ₹90 gig-rider payout range `[RA56` to `RA58]` but is not independently confirmed against a fleet-operator rate card, a gap lane R-A logged directly rather than papering over with an invented confirmation.
- No company-disclosed receivable-days figure exists for a 100-bike-scale last-mile operator; assumption A01 (57 days) rests on a median of eight verified points from two larger, listed comparables, Delhivery and Blue Dart, not on a company SwiftKart's own size `[A01]`, and this document says so plainly in section 17 rather than presenting the 57-day figure as more certain than it is.
- No India-specific, disclosed per-order or percentage-based service-level penalty clause comparable to the case's 95 percent fulfilment requirement `[C O03]` was found in any Indian last-mile delivery contract; the only benchmark located is a generic, non-India-specific 95 to 99 percent industry adherence figure `[RC76]`, used in section 23 as directional context only, not as a verified Indian norm.

A fourth, smaller gap: the exact Delhi-NCR share of national quick-commerce or e-commerce order volume is not stated by any named platform or regulator; section 5 uses Delhi-NCR's dark-store count, about 400 of 2,525 nationally, as a density proxy and flags it explicitly as a proxy, not a direct order-share figure `[RA75]`.

The four gaps above are summarised below with the lane that logged each one and the section that carries the honest statement of the gap, rather than an invented fill.

| Gap | Lane that logged it | Model input affected | Where stated honestly |
|---|---|---|---|
| No fleet-operator per-delivery rate card distinct from gig-rider pay | R-A | None, the case's own ₹40 figure is used unmodified `[C D02]` | Section 5 |
| No receivable-days figure at SwiftKart's own scale | R-C | A01 (contract receivable days) | Section 17 |
| No India-specific fulfilment service-level penalty clause | R-C | None, no model input rests on this figure | Section 23 |
| No platform-stated, Delhi-NCR-specific order-share figure | R-A | None, a density proxy is used and flagged | Section 5 |

### 1.4 How the slide panel count reconciles with the four-slide cap

The brief's four-slide cap applies to the main deck, not to this document or to the annexure `[C S01, C N02]`. The table below shows how the twenty-nine panels referenced across sections 1 to 28 collapse onto four main slides plus one annexure slide, so a reader can confirm the deck itself still respects the cap even though this document maps far more panels than four slides could individually hold.

| Deck slide | Brief title | Number of research sections feeding it | Panel count on the slide |
|---|---|---|---|
| S2 | The Situation | 6 (sections 3, 4, 5, 6, 8, 11) | 4 to 5 panels, one slide |
| S3 | Strategic Alternatives | 7 (sections 9, 10, 13 to 16, 19) | 4 to 5 panels, one slide |
| S4 | The ₹1 Crore Decision | 4 (sections 12, 17, 18, 24) | 4 panels, one slide |
| S5 | Recommendation and Roadmap | 7 (sections 2, 20 to 23, 25) | 5 panels, one slide |
| S6 | Annexure | 5 (sections 26 to 28, plus appendices) | up to 4 sub-slides, uncounted against the cap `[C N02]` |

### What this section establishes, and what it does not

- Establishes that every one of the brief's seventy-eight reference IDs is answered somewhere in this document, with the section and slide named for each.
- Establishes exactly where each of the six judging criteria is won, with the specific model table or section a judge can check.
- States honestly, rather than concealing, where the supporting evidence is thinnest: fleet-operator per-delivery pricing, receivable days for an operator SwiftKart's own size, and a quantified Indian fulfilment-penalty benchmark.
- Does not itself present the recommendation's numbers; those are developed starting in section 2. This section is a map, not an argument.
- Does not claim every gap has been closed; three residual gaps are named precisely so the document is not read as more complete than it is.

## 2. The answer on one page: lease every bike, electrify first, win the contract, and keep ₹5.8 lakh of the crore in reserve

**Answer.** SwiftKart should lease every bike rather than buy any: convert the existing 100 petrol bikes to leased electric vehicles in three waves, win the e-commerce contract with 75 more leased electric vehicles added in three tranches, and spend the ₹1 crore on the five things a lease cannot buy, working capital, the charging hub, lease deposits, the reporting and dispatch platform, and rider hiring, with ₹5.8 lakh held back in reserve `[M]`. This option, option 6 (lease both fleets, electrify first), carries the highest 48-month net present value of the six options modelled, ₹5.76 crore, needs no bank debt in any scenario, and keeps cash above ₹1.02 crore at its lowest point `[M, T5]`. None of the three kill criteria that would have forced a rethink of this recommendation were triggered by the verified evidence gathered across eight research lanes.

### 2.1 The obvious answers, and why each falls short

The case explicitly invites buying, leasing, keeping petrol, phasing, expanding, or a combination `[C T04]`. Four of these combinations look obvious on a first read of the case numbers; each falls short for a specific, quantified reason.

| Route | The obvious version | Why it falls short |
|---|---|---|
| Buy EVs for both fleets (option 4) | Do both: buy EVs for the existing fleet, borrow for the contract | Buying the 185 EVs both jobs need, including 10 spares, costs ₹2.04 crore after subsidy, twice the available crore `[M]`. It needs ₹1.10 crore of bank debt at 11 percent `[C X08]`, cash dips to ₹12.4 lakh, and it is worth ₹4.66 crore over 48 months against ₹5.76 crore for leasing both `[M, T5]`. In the bear case it needs ₹1.40 crore of debt `[M, T10]` |
| Electrify first by buying (option 2) | Fuel is the problem, so buy 100 EVs and worry about the contract later | Spends most of the crore net of petrol sale proceeds, leaves nothing for the contract's working capital, and forgoes the contract entirely: net present value ₹2.94 crore, less than half the recommended plan's value `[M, T5]` |
| Grow first by buying (option 3) | Take the contract, keep petrol for now | Needs ₹35 lakh of debt `[M, T5]`, keeps 100 petrol bikes exposed to petrol-price shocks, and fails the clients' stated low-emission preference on the existing fleet `[C B04]`: net present value ₹3.36 crore |
| Stay petrol (option 1) | Wait for EV prices to fall before committing | Contribution stays flat at ₹42.2 lakh a year `[M]`; petrol resale value falls as Delhi's 1 April 2028 electric-only registration rule approaches `[RE35]`, and clients continue to shift volume toward lower-emission partners: net present value ₹1.45 crore, the lowest of the six options |
| The running-cost comparison every buy option leans on | A bought EV runs at ₹3,000 a month, cheaper than the ₹3,500 lease `[C D07, C D12]` | Running cost alone is not the full cost. A bought EV costs ₹5,684 a month all-in once capital, charging share and resale credit are included, against ₹3,500 all-in for the lease `[T3]`. The monthly loan instalment alone on a financed EV, ₹3,601, already exceeds the all-in lease `[T3, T13]` |

### 2.2 The recommendation, restated with the mechanics

The governing thought: do both, lease every bike, and spend the crore on what a lease cannot buy. The existing 100 petrol bikes convert to leased EVs in three waves, 50 in month 2, 40 in month 4, and the last 10 in month 12 as a fallback while the contract ramps, with 4 spare EVs `[M, T4, T7]`. On contract award, assumed at month 3 in the base case `[A08]`, 25 leased EVs are added in each of months 4, 6 and 8, with 2 spares per tranche, and 75 riders are hired `[M, T7]`. The fleet is electrified before the contract starts specifically because the contract itself asks for a low-emission share and monthly emissions data `[C O04, C O05]`, so the operating and reporting capability needs to already exist when contract volume arrives, not be promised. No bank debt is drawn; the 11 percent line stays undrawn as contingency `[M]`. If the contract is not won, the no-award branch still leases the 100 existing bikes: net present value ₹3.34 crore, ₹1.88 crore above staying petrol `[M, T5]`. At lease renewal in month 36, buying only becomes attractive if the lease is repriced above ₹5,153 a month, the fleet-level switch point `[M, T13]`.

### 2.3 Three reasons for leasing both fleets, against buying both

| Side | Value over 48 months | Liquidity | Resilience |
|---|---|---|---|
| Against buying both (option 4) | ₹4.66 crore net present value, ₹1.10 crore below leasing | ₹1.10 crore of bank debt needed, cash floor ₹12.4 lakh | Carries battery, subsidy and resale risk; exposure across the case's seven uncertainties totals ₹240.5 lakh `[T12]` |
| For leasing both (option 6) | ₹5.76 crore net present value, the highest of six options | No debt, cash never below ₹1.02 crore | Exposure across the same seven uncertainties totals ₹203.6 lakh, and the single largest exposure (delivery demand falling 10 percent) affects every option roughly equally `[T12]` |

### 2.4 The Flex-style option comparison

All six options and the no-award branch, compared on one template, reconciled against model table T5.

| Option | What it is | Net present value, 48 months | Debt needed | Run-rate contribution, month 24 | Lowest cash | g CO2 per delivery, month 24 |
|---|---|---|---|---|---|---|
| Option 1 | Stay petrol, no contract | ₹1.45 crore | ₹0 | ₹42.2 lakh a year | ₹103.5 lakh | 240 |
| Option 2 | Buy 100 EVs, no contract | ₹2.94 crore | ₹0 | ₹114.2 lakh a year | ₹21.5 lakh | 114 |
| Option 3 | Buy EVs for the contract, keep petrol | ₹3.36 crore | ₹35 lakh | ₹150.6 lakh a year | ₹12.0 lakh | 173 |
| Option 4 | Buy EVs for both fleets | ₹4.66 crore | ₹110 lakh | ₹220.7 lakh a year | ₹12.4 lakh | 106 |
| Option 5 | Lease EVs for the contract, keep petrol | ₹3.80 crore | ₹0 | ₹143.6 lakh a year | ₹67.9 lakh | 173 |
| Option 6 (recommended) | Lease EVs for both fleets, electrify first | ₹5.76 crore | ₹0 | ₹206.0 lakh a year | ₹101.6 lakh | 106 |
| No-award branch | Lease the existing fleet only, contract not won | ₹3.34 crore | ₹0 | ₹104.7 lakh a year | ₹103.5 lakh | 114 |

### 2.5 The scorecard

The weighted scorecard (model table T6) scores each option on value, liquidity, resilience, emissions and growth, weighted 0.35, 0.20, 0.20, 0.15 and 0.10 `[T6]`.

| Option | Value | Liquidity | Resilience | Emissions | Growth | Score out of 5 |
|---|---|---|---|---|---|---|
| Option 1 | 1 | 5 | 1 | 2 | 1 | 1.95 |
| Option 2 | 2 | 4 | 4 | 5 | 1 | 3.15 |
| Option 3 | 3 | 3 | 2 | 3 | 5 | 3.00 |
| Option 4 | 4 | 1 | 4 | 5 | 5 | 3.65 |
| Option 5 | 3 | 5 | 3 | 3 | 5 | 3.60 |
| Option 6 | 5 | 5 | 5 | 5 | 5 | 5.00 |

Option 6 scores a clean 5 on every dimension the scorecard measures, which is a property of the model's own scoring bands rather than a coincidence: leasing both fleets is simultaneously the highest-value, most liquid, most resilient, lowest-emission and highest-growth option among the six, so it tops every column rather than winning on a single dimension while trailing on others.

### 2.6 The moneyshot

Contribution rises from ₹42.2 lakh to ₹2.06 crore a year by month 24, a 4.9 times increase, with zero debt drawn at any point in the plan `[M]`. Paired figures: net present value plus ₹4.31 crore over staying petrol, and plus ₹1.10 crore over buying both fleets `[M]`.

### 2.7 Kill criteria, and why none triggered

Three conditions, identified before research began, would have forced a report back to the user before writers proceeded. None triggered, on verified evidence.

| Kill criterion | What would trigger it | Verified evidence | Triggered |
|---|---|---|---|
| 1 | Verified business-to-business all-in EV lease quotes in Delhi-NCR sit consistently above ₹5,153 a month, with no lessor offering a fixed 36-month rate below it | Lane R-B verified an Alt Mobility quote starting around ₹2,800 a month on a bundled, 3 to 5 year term, well below both the case figure and the switch point `[RB]` | No |
| 2 | PM E-DRIVE or the Delhi EV Policy give a fleet operator ₹90,000 or more per purchased EV | Lane R-E verified, from the primary gazette texts, a maximum stackable incentive of about ₹35,000 to ₹40,000 per vehicle (PM E-DRIVE ₹5,000 per kWh capped at ₹5,000 per vehicle `[RE19]`, plus the Delhi policy's year-1 cap of ₹30,000 `[RE29]`), far below the ₹94,521 subsidy switch point `[T13]` | No |
| 3 | A verified client term-sheet norm requires owned vehicles | Lane R-C's review of client commitments and service-level research found no such norm across any named client `[RC]` | No |

### 2.8 The no-award branch

If the contract is not won, the recommended fallback is still to lease the 100 existing bikes rather than buy or stay petrol. Net present value ₹3.34 crore, ₹1.88 crore above staying petrol and ahead of every buy-based option except buying both fleets `[M, T5]`. Run-rate contribution reaches ₹104.7 lakh a year by month 24, and the lowest cash point is ₹103.5 lakh, the same floor as staying petrol, because no contract-fleet capital is ever committed in this branch `[T5]`.

### 2.9 The fleet schedule behind the recommendation

The wave and tranche schedule, reconciled against model tables T7 and T8, shows how the fleet composition changes quarter by quarter under the recommendation.

| Quarter | Petrol bikes left | EVs on the existing fleet | EVs on the contract fleet | Spares |
|---|---|---|---|---|
| Q1 (months 1 to 3) | 50 | 50 | 0 | 4 |
| Q2 (months 4 to 6) | 10 | 90 | 50 | 8 |
| Q3 (months 7 to 9) | 10 | 90 | 75 | 10 |
| Q4 (months 10 to 12) | 0 | 100 | 75 | 10 |
| Q5 to Q8 (months 13 to 24) | 0 | 100 | 75 | 10 |

By the end of Q4, zero petrol bikes remain, two years ahead of Delhi's 1 April 2028 electric-only two-wheeler registration rule `[RE35]`, and the fleet holds steady at 100 existing-route EVs, 75 contract EVs and 10 spares through month 24.

### 2.10 What would have to be true for buying to beat leasing

The recommendation is not unconditional; the switch points below state exactly what would have to move, and by how much, for a buy-based option to overtake leasing. None of these conditions are met on the verified evidence in sections 9, 10 and 15.

| Condition | Switch point | Verified real-world value | Gap |
|---|---|---|---|
| All-in lease rate rises | ₹5,153 a month, fleet level `[T13]` | Alt Mobility quotes starting around ₹2,800 a month `[RB]` | Lease would need to rise 84 percent before buying wins |
| Per-EV subsidy rises | ₹94,521 a vehicle `[T13]` | About ₹35,000 to ₹40,000 stackable, PM E-DRIVE plus Delhi policy `[RE19, RE29]` | Subsidy would need to rise more than double before buying wins |
| Contract volume falls | 69.7 percent of the promised ₹2.8 crore before the leased contract fleet adds no value over petrol `[T13]` | SwiftKart's own current utilisation is 85 percent `[C D08]` | The contract would need to underperform SwiftKart's existing run rate by 15 points |

### 2.11 The 150-word cover version

SwiftKart should lease, not buy. Converting the 100-bike petrol fleet to leased EVs and adding 75 more leased EVs for the e-commerce contract is worth ₹5.76 crore over 48 months, the highest of six options modelled, ₹1.10 crore more than buying both fleets and ₹4.31 crore more than staying on petrol `[M]`. Leasing needs no bank debt in any scenario, keeps cash above ₹1.02 crore at its lowest point, and the ₹3,500 all-in lease stays cheaper than owning up to a ₹5,153 switch point, 47 percent above the case's own rate `[M, T13]`. The crore itself goes to working capital, the charging hub, lease deposits, the reporting platform and rider hiring, not vehicles, because leasing already supplies the vehicles. If the contract is not won, leasing the existing fleet alone is still worth ₹3.34 crore. Contribution rises from ₹42.2 lakh to ₹2.06 crore a year by month 24, with zero debt drawn.

### 2.12 Headline numbers

| Measure | Recommended plan (option 6) |
|---|---|
| 48-month net present value at 11 percent | ₹5.76 crore |
| Gain over staying petrol | plus ₹4.31 crore |
| Gain over buying both fleets | plus ₹1.10 crore |
| Run-rate contribution, today to month 24 | ₹42.2 lakh to ₹2.06 crore a year, 4.9 times |
| Debt drawn | ₹0 in base, bear and bull |
| Lowest cash point, and month | ₹1.02 crore, month 2 |
| Cash at month 24 | ₹3.74 crore |
| Emissions per delivery, today to month 24 | 240 g to 106 g CO2, minus 56 percent |
| Scorecard rank | first of six, score 5.00 out of 5 |

### 2.13 The reserve is ₹5.8 lakh, not ₹15.2 lakh, on the verified 57-day receivable period

At a 45-day receivable period, the model would hold ₹15.2 lakh in reserve inside the ₹1 crore. At the verified 57-day receivable terms that lane R-C confirmed from Delhivery and Blue Dart's own disclosed debtor-days metrics `[A01]`, the figure is ₹5.8 lakh `[M, T9]`. The reason is mechanical and worth stating plainly: a longer receivable period on the same ₹23.4 lakh a month of contract revenue at full scale ties up more working capital before that revenue turns into cash, and working capital, not vehicles or the charging hub, is the single largest claim on the crore at 44 percent of it `[T9]`. The recommendation does not change because of this: the plan still draws no debt and still keeps cash above the ₹10 lakh minimum floor `[A25]` in every one of the bear, base and bull scenarios modelled `[T10]`. What does change is the margin available for a further shock beyond the ones already modelled. A reserve of ₹5.8 lakh is a real number, not a rounding artefact, and this document treats it as the true figure a judge should cross-question, not the larger, more comfortable ₹15.2 lakh a shorter receivable assumption would imply.

### 2.14 Why leasing both edges leasing only the contract fleet

Option 5 (lease the contract fleet, keep petrol on the existing fleet) is the next-best leasing-based alternative at ₹3.80 crore of net present value, ahead of every buy-based option except buying both fleets, but ₹1.96 crore behind option 6 `[M, T5]`. The gap exists because option 5 leaves the existing 100 petrol bikes exposed to exactly the cost pressure the case opens with `[C B03]`: petrol running cost stays at ₹9,000 a bike-month against a leased EV's ₹3,500 all-in, a saving of ₹5,500 a bike-month that option 5 simply never captures on the existing fleet `[T2, T3]`. Option 5 also fails the clients' own stated preference for low-emission partners on the 100 bikes those same clients already see `[C B04]`, since only the new contract fleet, not the existing fleet, would run electric under option 5. The uncertainty exposure matrix in section 19 shows the same pattern numerically: option 5's exposure to a petrol price shock alone is a ₹59.9 lakh swing in net present value, identical to staying on petrol entirely, because its petrol-exposed existing fleet is exactly the same size `[T12]`.

Exhibit for the deck: S1 verdict card, S3 options table and score bars, S4 moneyshot card, S5 answer card.

### 2.15 One sentence each, for the cross-questioning

A judge asking "why not just do the obvious thing" in the cross-questioning period can be answered in one sentence per obvious route, each traceable to the fuller treatment above. Why not stay petrol: contribution never moves off ₹42.2 lakh a year while the resale value of every bike still on the books keeps falling toward Delhi's 2028 rule `[M, RE35]`. Why not buy for the existing fleet alone: it spends most of the crore on one job and forgoes the contract entirely, at a net present value less than half the recommendation's `[M]`. Why not buy for the contract alone: it leaves the existing fleet's fuel exposure untouched and still needs ₹35 lakh of debt `[M]`. Why not buy both: it is worth ₹1.10 crore less than leasing both, needs eleven times as much debt, and carries battery, subsidy and resale risk the leasing plan does not `[M, T5, T12]`. Each answer names a number because, per the skill's own rhetorical discipline, a number is what lets the answer survive a follow-up question rather than being restated as an opinion. The same discipline applies to the recommendation's own weakest point: the ₹3,500 all-in lease rate is a case figure, not a confirmed market quote for SwiftKart specifically `[C D12]`, and this document says so again in section 10 rather than only here, because a number repeated honestly in two places is harder to dislodge in cross-questioning than one stated once and hoped past, and because the switch point at ₹5,153 a month already shows how much room exists before that single case figure could threaten the recommendation at all, a margin of 47 percent that no plausible single quote in the leasing market evidence gathered here comes close to closing.

### What this section establishes, and what it does not

- Establishes the full recommendation in one place: lease both fleets, electrify first, win the contract, hold ₹5.8 lakh in reserve, with every headline number traced to model table T5 or T6.
- Establishes why each of the four obvious combinations falls short, each with its own quantified reason rather than a general preference for leasing.
- Establishes that none of the three kill criteria defined before research began were triggered, with the specific verified evidence for each.
- Establishes the no-award branch's own value, so the recommendation does not silently depend on winning a contract that is the client's decision, not SwiftKart's.
- Does not yet show the unit economics the recommendation is built on; that derivation starts in section 3.
- Does not yet walk through each option's individual cash and risk profile in full; that symmetric treatment is sections 13 to 16.

## 3. SwiftKart today: ₹3.18 crore of revenue a year, ₹3,520 kept per bike a month, and petrol takes 34%

**Answer.** At 85 percent utilisation, one SwiftKart petrol bike earns ₹26,520 a month in revenue and keeps ₹3,520 of it after rider pay and petrol, a 13.3 percent margin `[T2]`. Across the 100-bike fleet that is ₹3.18 crore of revenue and ₹42.2 lakh of contribution a year `[M]`. Rider pay takes the largest single share of revenue at 53 percent and petrol the second largest at 34 percent, leaving contribution at 13.3 percent, before any fixed overhead the case does not state `[T2]`.

### 3.1 One petrol bike keeps ₹3,520 of ₹26,520 a month, a 13.3 percent margin

Model table T2 gives five configurations: the petrol bike as it runs today, a bought EV counted on running cost alone, a bought EV counted all-in, a leased EV at SwiftKart's own 85 percent utilisation, and a leased EV at the contract's full 100 percent utilisation.

| Configuration | Utilisation | Deliveries a month | Revenue | Rider pay | Vehicle cost | Contribution | Margin |
|---|---|---|---|---|---|---|---|
| Petrol bike | 85% | 663 | ₹26,520 | ₹14,000 | ₹9,000 | ₹3,520 | 13.3% |
| EV bought, running cost only | 85% | 663 | ₹26,520 | ₹14,000 | ₹3,000 | ₹9,520 | 35.9% |
| EV bought, all-in | 85% | 663 | ₹26,520 | ₹14,000 | ₹5,684 | ₹6,836 | 25.8% |
| EV leased | 85% | 663 | ₹26,520 | ₹14,000 | ₹3,500 | ₹9,020 | 34.0% |
| EV leased, contract at full volume | 100% | 780 | ₹31,200 | ₹14,000 | ₹3,500 | ₹13,700 | 43.9% |

The arithmetic behind the petrol row, shown once: 30 deliveries a day `[C D03]` times 26 working days a month `[C D04]` times 85 percent utilisation `[C D08]` times ₹40 a delivery `[C D02]` equals 663 deliveries and ₹26,520 of revenue a month. Rider pay of ₹14,000 `[C D05]` plus petrol running cost of ₹9,000 `[C D06]` equals ₹23,000, leaving ₹3,520 of contribution, 13.3 percent of revenue.

### 3.2 Annual figures across the 100-bike fleet

Scaling the petrol-bike row across 100 bikes and 12 months gives the fleet's current annual position, before any contract.

| Measure | Monthly, per bike | Monthly, fleet of 100 | Annual, fleet of 100 |
|---|---|---|---|
| Revenue | ₹26,520 | ₹26.52 lakh | ₹3.18 crore |
| Rider pay | ₹14,000 | ₹14.00 lakh | ₹1.68 crore |
| Petrol running cost | ₹9,000 | ₹9.00 lakh | ₹1.08 crore |
| Contribution | ₹3,520 | ₹3.52 lakh | ₹42.2 lakh |

This ₹42.2 lakh a year is the recommended plan's own starting point in the contribution bridge (model table T15) and the figure every option's net present value is measured against `[T5, T15]`.

### 3.3 Rider pay takes 53 percent of revenue and petrol 34 percent

The same figures as shares of revenue, which is the comparison that matters most for judging where a cost-reduction lever would have the largest effect.

| Cost or margin line | Share of revenue | What this means |
|---|---|---|
| Rider pay | 52.8% | The single largest cost line; unaffected by the vehicle choice between petrol, bought and leased EVs |
| Petrol running cost | 33.9% | The line electrification removes entirely, replaced by either EV running cost or a lease payment |
| Contribution | 13.3% | What is left for everything the case does not itemise, overhead, debt service and profit |

Converting from petrol to a leased EV changes only the vehicle-cost line: ₹9,000 petrol running cost becomes ₹3,500 all-in lease, a saving of ₹5,500 a bike-month, which is 20.8 percent of revenue moving from cost into contribution `[T2]`. Rider pay, the larger of the two cost lines, is untouched by the vehicle decision entirely, since it is paid per rider regardless of what the rider drives `[C D05]`.

### 3.4 Converting one bike, shown in full

The saving from converting a single petrol bike to a leased EV, worked through once so every later reference to "₹5,500 a bike-month" and "₹9,020 contribution" in this document can be traced back to this arithmetic.

| Step | Petrol | Leased EV | Difference |
|---|---|---|---|
| Revenue (unchanged by vehicle type) | ₹26,520 | ₹26,520 | ₹0 |
| Rider pay (unchanged by vehicle type) | ₹14,000 | ₹14,000 | ₹0 |
| Vehicle cost | ₹9,000 | ₹3,500 | minus ₹5,500 |
| Contribution | ₹3,520 | ₹9,020 | plus ₹5,500 |
| Margin | 13.3% | 34.0% | plus 20.7 points |

Across the full 100-bike fleet, this saving is ₹5,500 times 100 bikes times 12 months, ₹66.0 lakh a year, which is the single largest line in the contribution bridge from today's ₹42.2 lakh to month 24's ₹206.0 lakh `[T15]`. Converting also releases a one-time ₹30,000 of cash per bike sold `[C X05]`, which funds part of the ₹1 crore's own uses in section 17.

### 3.5 Four figures the case withholds, and why this document never invents them

The case gives revenue, rider pay and vehicle running cost at the bike level, but it deliberately stops short of a full profit-and-loss statement, which this document does not fill in with an invented number.

| What is missing | Why it matters | How this document handles it |
|---|---|---|
| Fixed overhead (rent, management salaries, insurance, depreciation on anything besides the vehicles) | Without it, contribution cannot be turned into EBITDA or net profit | Every figure in this document is called "contribution", never "profit" or "EBITDA" `[C D01]` to `[C D09]` give no overhead line |
| Existing debt or liabilities | Without it, the ₹1 crore's true effect on the balance sheet cannot be fully stated | The model treats the crore as the only capital pool in scope, per the case's own framing `[C D09]` |
| Cash position beyond the crore | Without it, "lowest cash" in this document means lowest point within the ₹1 crore pool specifically, not SwiftKart's total cash | Every cash figure in this document is scoped explicitly to the ₹1 crore `[M, T7]` |
| Historical growth rate or trend | The case states growth has been steady `[C B03]` without a number | This document does not invent a growth percentage; the 85 percent utilisation figure is treated as a snapshot, not a trend |

### 3.6 Contract revenue reconciled to SwiftKart's own utilisation

The contract's own headline figure, about ₹2.8 crore annual revenue at full capacity `[C O07]`, uses the same per-delivery arithmetic as the existing fleet, but at 100 percent utilisation rather than SwiftKart's own 85 percent.

| Basis | Utilisation | Deliveries a month, 75 vehicles | Annual revenue |
|---|---|---|---|
| Case figure, full capacity | 100% | 58,500 | ₹2.81 crore |
| At SwiftKart's own current utilisation | 85% | 49,725 | ₹2.39 crore |

The arithmetic: 75 vehicles `[C O02]` times 30 deliveries a day `[C D03]` times 26 working days `[C D04]` times ₹40 a delivery `[C D02]` times 12 months equals ₹2,80,80,000, rounded in the case to "about ₹2.8 crore" `[C O07]`. This reconciliation is developed in full in section 4 as the first of the seven numbers that change the answer; it is introduced here because it depends directly on the same bike-month unit economics this section establishes.

### 3.7 How SwiftKart's margin compares with real last-mile operators

SwiftKart is fictional and none of its own figures are replaced with a real company's number, per this document's content-integrity rule in section 0.6. What follows is context, not a substitute: three real, listed or soon-to-list Indian last-mile operators disclose figures that sit in a comparable range, which supports reading SwiftKart's 13.3 percent contribution margin as a plausible, not an inflated, figure for this industry.

| Company | Disclosed measure | Value | Period | Source |
|---|---|---|---|---|
| Shadowfax Technologies | Restated consolidated total income | ₹2,514.66 crore | FY25 | `[RA33]` |
| Delhivery | Consolidated revenue | ₹8,932 crore | FY25 | `[RC61]` |
| Blue Dart Express | Revenue from operations, profit after tax | ₹5,720 crore, ₹245 crore | FY25 | `[RC70]` |

Blue Dart's FY25 profit after tax of ₹245 crore against ₹5,720 crore of revenue implies a net margin near 4.3 percent `[RC70]`, well below SwiftKart's 13.3 percent contribution margin, but net profit and contribution are not the same measure: Blue Dart's figure is after every overhead, tax and financing cost, while SwiftKart's 13.3 percent is a contribution margin with no overhead subtracted at all `[C D01]` to `[C D09]` give no overhead line. The two numbers are not directly comparable, and this document does not present them as if they were; they are shown together only to confirm that neither figure is wildly outside the range an India-based last-mile operator actually reports.

### 3.8 SwiftKart's 85 percent utilisation sits inside a market serving hundreds of millions of monthly orders

SwiftKart's own 85 percent utilisation figure `[C D08]` is a case fact, not a modelled estimate, so this document does not second-guess it; what this subsection adds is the external evidence that 85 percent sits inside a plausible range for the Delhi-NCR delivery market.

| Measure | Value | Source |
|---|---|---|
| Blinkit, Q4 FY26, order count | about 274 million | `[RA12]` |
| Zepto, Q4 FY26, order count | about 210 million | `[RA13]` |
| Swiggy Instamart, Q4 FY26, order count | about 112.6 million | `[RA14]` |
| Shadowfax Technologies, average quarterly unique transacting delivery partners | 205,864, as of 30 Sep 2025 | `[RA32]` |

No source gives a vehicle-level utilisation percentage directly comparable to SwiftKart's 85 percent; the order-volume figures above show only that the market SwiftKart operates in is large and still growing, which is the demand backdrop assumed when this document treats 85 percent as a stable, not a declining, base case (model table T16, assumption A13) `[A13]`.

### 3.9 The fleet-level annual position, before and after the contract

The 100-bike existing fleet and the 75-vehicle contract fleet are separate revenue lines until the contract is awarded; the table below states each on its own, at the two utilisation levels relevant to this document.

| Fleet | Vehicles | Utilisation | Annual revenue | Annual contribution at petrol-equivalent cost structure |
|---|---|---|---|---|
| Existing fleet, petrol, today | 100 | 85% | ₹3.18 crore | ₹42.2 lakh |
| Existing fleet, if fully leased | 100 | 85% | ₹3.18 crore | ₹1.08 crore |
| Contract fleet, at full capacity | 75 | 100% | ₹2.81 crore | not comparable, contract fleet is leased by design |
| Contract fleet, at SwiftKart's own utilisation | 75 | 85% | ₹2.39 crore | not comparable, contract fleet is leased by design |

The existing-fleet contribution if fully leased, ₹1.08 crore a year, is the ₹9,020 leased contribution a bike-month `[T2]` times 100 bikes times 12 months; it is shown here as an intermediate figure, before the spares, overhead and reporting-cost deductions that bring the recommended plan's actual month-24 run rate to ₹2.06 crore once the contract fleet's own contribution is added (model table T15, section 18).

### 3.10 Why rider pay, not vehicle cost, is the larger lever in absolute terms

A reader focused only on the petrol-versus-EV debate can lose sight of the fact that rider pay is the larger of the two cost lines in absolute rupees, even though the vehicle-cost line is the one this whole case turns on.

| Lever | Monthly cost, per bike | Annual cost, 100 bikes | Changeable by this plan | Changed by this plan |
|---|---|---|---|---|
| Rider pay | ₹14,000 | ₹1.68 crore | No, paid per rider regardless of vehicle `[C D05]` | Not reduced; 75 more riders are hired for the contract fleet `[M, T7]` |
| Vehicle cost | ₹9,000 (petrol) | ₹1.08 crore | Yes, this is the entire lease-versus-buy-versus-petrol question | Reduced to ₹3,500 a bike-month across both fleets under the recommendation `[T2]` |

The case's own framing, that rising fuel and maintenance costs pressure margins `[C B03]`, is therefore a statement about the smaller of the two cost lines in absolute terms, but the one this document's entire recommendation is built around, because it is the only one of the two levers the ₹1 crore and the lease-versus-buy choice can actually move; rider pay is fixed by the case's own data and is not treated as a variable anywhere in this document.

### 3.11 Sensitivity of today's contribution margin to its own inputs

Before any decision about leasing, buying or staying on petrol is made, it is worth asking how sensitive today's 13.3 percent contribution margin already is to small moves in the case's own four inputs, since this baseline sensitivity recurs later as the foundation of the tornado analysis in section 19.

| Input moved | New value | Resulting bike-month contribution | Change from ₹3,520 base |
|---|---|---|---|
| Revenue per delivery, ₹40 to ₹44 | ₹44 `[T11]` | ₹6,172 | plus ₹2,652 |
| Revenue per delivery, ₹40 to ₹36 | ₹36 `[T11]` | ₹868 | minus ₹2,652 |
| Utilisation, 85% to 90% | 90% `[T11]` | ₹4,124 | plus ₹604 |
| Utilisation, 85% to 80% | 80% `[T11]` | ₹2,916 | minus ₹604 |
| Rider pay rising 15% from month 13 | ₹16,100 | ₹1,420 | minus ₹2,100 |

The same four inputs reappear, scaled to the full 48-month plan, as the top entries in the tornado chart in section 19 (model table T11): price per delivery remains by far the largest single swing factor at any scale, a pattern visible even at the single-bike-month level shown here before the model ever runs a full 48-month projection.

### 3.12 How the 13.3 percent margin compares across the five configurations

Restating model table T2 one more way, as a margin ladder, makes clear exactly how much of the margin gap between today's petrol operation and the recommended leased operation is available without any change to revenue or rider pay at all.

| Configuration | Margin | Margin gap versus petrol | Driver of the gap |
|---|---|---|---|
| Petrol bike, 85% utilisation | 13.3% | base case | none, this is the starting point |
| EV bought, running cost only, 85% utilisation | 35.9% | plus 22.6 points | Running cost alone falls from ₹9,000 to ₹3,000, ignoring capital cost |
| EV leased, 85% utilisation | 34.0% | plus 20.7 points | All-in lease of ₹3,500 replaces ₹9,000 petrol running cost |
| EV bought, all-in, 85% utilisation | 25.8% | plus 12.5 points | Capital cost, charging share and resale credit are added back to the running-cost-only figure |
| EV leased, contract at 100% utilisation | 43.9% | plus 30.6 points | Both the vehicle-cost saving and the higher utilisation apply together |

The gap between the bought-EV "running cost only" row (35.9 percent) and the bought-EV "all-in" row (25.8 percent), a full 10.1 points of margin, is exactly the cost every option-4-style argument omits when it compares a bought EV's ₹3,000 running cost directly against a ₹3,500 lease without adding back the capital, charging and resale lines; section 9 develops this comparison in full with the annuity arithmetic behind the ₹5,684 all-in figure.

### 3.13 A worked example at the fleet's actual composition in month 6

The configurations above are each single-bike snapshots. To show how they combine at an actual point in the recommended plan's own timeline, the table below reconstructs month 6 of model table T7, when the fleet holds 10 petrol bikes, 140 EVs across both fleets, and 8 spares.

| Bike type | Count, month 6 | Monthly contribution per bike | Monthly contribution, this group |
|---|---|---|---|
| Petrol, existing fleet remainder | 10 | ₹3,520 | ₹35,200 |
| Leased EV, existing fleet and contract fleet combined | 140 | varies by utilisation ramp | included in ₹10.2 lakh total `[T7]` |
| Spares | 8 | ₹0, held for availability, not revenue-generating when idle | ₹0 |

Model table T7 states the month-6 fleet total contribution directly at ₹10.2 lakh, against revenue of ₹39.0 lakh `[T7]`, a blended margin of 26.2 percent that month, below the 43.9 percent full-utilisation leased-contract figure in section 3.1 because the contract fleet is still ramping toward full volume in month 6 and 10 petrol bikes remain as a fallback `[A09, A10]`.

### 3.14 Reading the 13.3 percent margin against the case's own silence on overhead

A reader could mistake 13.3 percent for a weak margin by comparing it, wrongly, against a net-profit benchmark from a different industry. This document avoids that error by stating explicitly, a second time and in a different frame from section 3.5, what 13.3 percent is and is not a measure of. It is the share of revenue left after the only two cash costs the case states at the bike level, rider pay and vehicle running cost `[C D05, C D06]`. It is not a measure of profit, because no depot rent, no management salary, no insurance premium, no vehicle depreciation beyond the running-cost line, and no corporate overhead of any kind is subtracted from it, simply because the case brief does not supply any of those figures `[C D01]` to `[C D09]`. A judge who asks "is 13.3 percent good" should be answered with this distinction first, since the honest answer is that the case does not supply enough information to say whether 13.3 percent of revenue is enough to cover whatever overhead SwiftKart actually carries, and this document does not guess at a figure the case withholds. What can be said with confidence is the direction of travel: converting to a leased EV raises the same contribution measure to 34.0 percent without changing a single other assumption, and that direction, not a comparison to an unstated overhead figure, is the basis for every later recommendation in this document. Section 17 does introduce one overhead figure, a monthly contract operations overhead of ₹1.5 lakh covering two hub supervisors, one fleet and energy manager and one reporting analyst `[A07]`, but that figure is scoped explicitly to the new contract fleet's own operation and is never applied retroactively to restate the existing fleet's 13.3 percent margin as a profit figure.

### 3.15 Exhibit for the deck

The unit economics in this section feed directly into the deck's second slide, where the per-bike-month figures appear as a compact table beside the kilometre-level KPI tiles. The slide carries exactly the four rows a reader needs to see the margin move, revenue, rider pay, vehicle cost and contribution, each for petrol and leased EV side by side, rather than the full five-configuration table above, which stays in this document as the fuller working behind that compact panel.

Exhibit for the deck: S2 unit economics table and KPI tiles.

### 3.16 One closing reconciliation

Every figure in this section traces back to five case data rows, D02 through D08 and D01 `[C D01, C D02, C D03, C D04, C D05, C D06, C D08]`, run through one multiplication and one subtraction, with no outside figure and no assumption anywhere in the chain. A judge who wants to re-derive ₹26,520 or ₹3,520 from scratch during cross-questioning needs only those seven case numbers and a calculator; nothing in this section depends on the model, the research lanes, or any number this document itself produced. That is deliberate: the unit economics are the one part of this document that should be verifiable from the case brief alone, before any team analysis, model output or outside source is trusted on top of it.

### What this section establishes, and what it does not

- Establishes the bike-month unit economics (model table T2), derived from case rows D01 through D08 alone with no outside figure, that every later financial section in this document builds on: ₹26,520 revenue, ₹3,520 contribution, 13.3 percent margin at 85 percent utilisation.
- Establishes the annual scale of SwiftKart's current operation, ₹3.18 crore revenue and ₹42.2 lakh contribution, which is the recommendation's own starting point and the zero-line every option is compared against.
- Establishes the cost structure shares, rider pay 53 percent, petrol 34 percent, contribution 13.3 percent, and shows the single petrol-to-lease conversion arithmetic that drives the contribution bridge in section 18.
- States plainly and repeatedly what the case does not supply, fixed overhead, existing debt, total cash position and a historical growth rate, so this document is never read anywhere as claiming knowledge of a figure the case itself withholds.
- Does not yet evaluate the EV configurations against each other in full analytical detail; that comparison, including the complete annuity arithmetic behind the bought-EV all-in row, is developed in section 9.
- Does not yet resolve the ₹2.8 crore contract figure fully, nor the remaining six reading-closely insights; the reconciliation above is completed, with the arithmetic shown in full, across section 4.

## 4. Reading the case closely: seven numbers that change the answer

**Answer.** Seven numbers inside the case brief, read closely rather than taken at face value, change what the right answer is: the ₹2.8 crore contract figure assumes 100 percent utilisation `[C O07]`, a full charge covers exactly one working day with no spare capacity `[C X02]`, the lease already includes running cost so it competes with a bought EV's full cost, not its running cost alone `[C D11, C D12]`, buying the 185 EVs both jobs need costs twice the available crore `[M]`, working capital rather than vehicles is the largest claim on the ₹1 crore `[T9]`, Delhi's regulatory clock makes a petrol delivery bike a falling-value asset `[RE35]`, and the ₹10,000 subsidy the case itself describes as something that "may be available" is conditional, not guaranteed `[C X06]`. Each is developed below with its arithmetic shown once, because a team that reads these seven numbers correctly reaches a different, better-supported answer than a team that reads the case brief only at face value.

### 4.1 Insight 2: the ₹2.8 crore contract figure assumes 100 percent utilisation

The case states the contract would generate "approximately ₹2.8 crore in annual revenue" at "full capacity" `[C O07]`. The word "full" is doing real work in that sentence. The arithmetic, shown once: 75 vehicles `[C O02]` times 30 deliveries a day `[C D03]` times 26 working days a month `[C D04]` times ₹40 a delivery `[C D02]` times 12 months equals ₹2,80,80,000, which rounds to the case's own "about ₹2.8 crore" `[C O07]`. This calculation uses 100 percent utilisation implicitly, because it applies the full 30-deliveries-a-day figure every working day with no allowance for downtime, demand variation or the ramp period the case itself flags `[C O08]`. At SwiftKart's own demonstrated utilisation of 85 percent `[C D08]`, the same fleet would generate ₹2.39 crore, ₹42 lakh less than the headline figure `[M]`.

| Basis | Utilisation | Annual revenue |
|---|---|---|
| Case headline, "full capacity" | 100% | ₹2.81 crore |
| SwiftKart's own demonstrated rate | 85% | ₹2.39 crore |
| Gap | 15 points | ₹42 lakh a year |

### 4.2 Insight 3: a full charge covers exactly one working day, with no headroom at full utilisation

The case states a fully charged EV supports "approximately 30 deliveries per working day under normal operating conditions" `[C X02]`. SwiftKart's own delivery rate is also exactly 30 deliveries a day `[C D03]`. This is not a coincidence a reader should pass over: it means a single charge per vehicle per day is the maximum the case's own numbers allow, with zero spare range for a longer route, a delayed charge, or the battery degradation the case itself flags as expected over the vehicle's life `[C X04]`.

| Fleet | Deliveries a day needed | Deliveries a charge supplies | Headroom |
|---|---|---|---|
| Existing fleet, at 85% utilisation | 25.5 | 30 | 4.5 deliveries, about 15% |
| Contract fleet, at 100% utilisation | 30 | 30 | 0 deliveries, 0% |

The existing fleet, running at SwiftKart's own 85 percent rate, keeps a real margin of about 15 percent of a charge's capacity as a buffer against charging downtime `[C X03]` or battery wear `[C X04]`. The contract fleet, priced and promised at full capacity, has none, which is exactly why the recommended plan sizes ten spare vehicles and two lessors rather than relying on a single charge cycle per vehicle per day (section 11, section 23).

### 4.3 Insight 4: the lease already includes running cost, so it competes with a bought EV's full cost, not its running cost alone

The case's own data table states that for the leased EV, monthly running cost is "included in lease" `[C D11]`, while a bought EV's monthly running cost of ₹3,000 is listed separately from its ₹1,20,000 acquisition cost `[C D10, C D07]`. A reader who compares the lease's ₹3,500 directly against the bought EV's ₹3,000 running cost concludes, wrongly, that buying is cheaper. The correct comparison adds the bought EV's capital cost, converted to a monthly equivalent at the 11 percent bank rate `[C X08]` over its 48-month useful life `[C D13]`, plus its share of the ₹10 lakh charging investment `[C X01]`, minus its resale credit `[C D14]`, to its running cost.

| Component | Bought EV, monthly equivalent | Leased EV, monthly |
|---|---|---|
| Capital (₹1,20,000 less ₹10,000 subsidy, annuitised at 11% over 48 months) | ₹2,843 | included |
| Charging hub share (₹10,000 per vehicle) | ₹258 | included |
| Resale credit (₹25,000 at month 48) | minus ₹417 | not applicable |
| Running cost | ₹3,000 | included |
| Total, all-in | ₹5,684 | ₹3,500 |

The bought EV costs ₹5,684 a month all-in against ₹3,500 for the lease, a gap of ₹2,184 a month the running-cost-only comparison hides entirely `[T3]`. Even the loan instalment alone on a financed EV, ₹3,601 a month at 11 percent over 36 months `[T13]`, already exceeds the all-in lease.

### 4.4 Insight 6: buying the 185 EVs both jobs need costs twice the available crore

The existing fleet needs 100 EVs plus spares, and the contract fleet needs 75 EVs plus spares, for a combined 185 vehicles including 10 spares across both `[M, T4]`. At ₹1,20,000 acquisition cost each, less the ₹10,000 subsidy if it is available `[C D10, C X06]`, buying all 185 costs far more than the ₹1 crore available.

| Item | Calculation | Value |
|---|---|---|
| Gross acquisition cost, 185 EVs | 185 times ₹1,20,000 | ₹2.22 crore |
| Subsidy credit, if available, 185 EVs | 185 times ₹10,000 | minus ₹18.5 lakh |
| Net acquisition cost | | ₹2.04 crore |
| Available capital | `[C D09]` | ₹1.00 crore |
| Shortfall | | ₹1.04 crore |

Buying both fleets costs ₹2.04 crore net of the subsidy, more than double the ₹1 crore the case provides `[M]`, which is why option 4 (buy both) needs ₹1.10 crore of bank debt in the model's base case, rising to ₹1.40 crore in the bear case `[M, T10]`. This single number is the clearest numerical refutation of "buy for both fleets" as the obvious answer.

### 4.5 Insight 11: working capital, not vehicles, is the largest claim on the ₹1 crore

A reader expecting the crore to be spent mostly on vehicles is reading the recommendation backwards. Under the recommended plan, nothing is spent on vehicles at all, because every vehicle is leased, not bought `[M, T9]`. The largest single use of the crore is contract working capital, because the contract's own receivable terms, 57 days verified from two real comparables `[A01]`, mean SwiftKart pays riders and lessors before the client pays SwiftKart.

| Use of the ₹1 crore | Amount | Share | When |
|---|---|---|---|
| Contract working capital | ₹44.5 lakh | 44% | months 4 to 10 |
| Charging hub | ₹18.5 lakh | 18% | months 2 to 8 |
| Lease deposits | ₹12.9 lakh | 13% | months 2 to 8 |
| Reporting and dispatch platform | ₹13.0 lakh | 13% | month 2 |
| Riders, hiring and EV training | ₹5.2 lakh | 5% | months 2 to 12 |
| Reserve | ₹5.8 lakh | 6% | held |

The arithmetic behind the ₹44.5 lakh, shown once: at full contract revenue of ₹23.4 lakh a month `[M]`, a 57-day receivable period ties up about 1.9 months of revenue, ₹44.5 lakh, before it turns into cash `[A01, M]`. This is the largest line in the table above by a wide margin, 44 percent of the whole crore, well ahead of the charging hub at 18 percent, despite the case's own framing of the decision as being mostly about vehicles.

### 4.6 Insight 14: Delhi's regulatory clock makes a petrol delivery bike a falling-value asset

Three separate, verified Delhi and NCR rules converge on the same fleet SwiftKart operates. The Delhi Electric Vehicles Policy 2026 permits only electric two-wheeler registrations from 1 April 2028 `[RE35]`. The same policy's fleet-aggregator clause bars inducting any new petrol two-wheeler into an existing delivery fleet after 31 December 2026, two years earlier than the general rule `[RE37, RE38]`. The Commission for Air Quality Management's Direction No. 94 separately bars new petrol or diesel two-wheelers from being added to covered NCR delivery fleets from 1 January 2026 `[RE51, RE52]`.

| Rule | Date it binds | What it restricts |
|---|---|---|
| CAQM Direction No. 94 | 1 January 2026 | No new petrol or diesel two-wheelers added to NCR delivery fleets of 25 or more vehicles |
| Delhi EV Policy 2026, fleet aggregator clause | 31 December 2026 | No new BS-VI petrol two-wheeler induction into an existing Delhi fleet after this date |
| Delhi EV Policy 2026, general registration rule | 1 April 2028 | No new petrol two-wheeler registration in Delhi NCT at all |

None of the three rules forces SwiftKart to retire a petrol bike already on the road before these dates `[RE53]`; what they do is remove the option of ever buying another one. Selling the existing fleet's petrol bikes now, at the case's own stated resale value of about ₹30,000 `[C X05]`, is worth more than holding them toward a shrinking resale market as the registration deadline approaches, which the model's own assumption (A17) prices at ₹12,000 in the bear case for a bike still held at month 48 `[A17]`.

### 4.7 The subsidy's own wording: "may be available", read literally

The case states the ₹10,000 per-EV subsidy "may be available" `[C X06]`, not that it is available or guaranteed. This document treats that wording literally rather than optimistically: every acquisition-cost figure that could include the subsidy states explicitly whether the subsidy is assumed, and the recommendation itself does not depend on it at all, because the recommended plan buys zero vehicles `[M]`. Verified evidence on the subsidy's actual size supports reading the case's hedge as realistic rather than merely cautious: the maximum stackable incentive a fleet buyer could actually claim, combining PM E-DRIVE's ₹5,000 per kWh capped at ₹5,000 a vehicle `[RE19]` and the Delhi EV Policy's year-1 cap of ₹30,000 `[RE29]`, both of which require specific eligibility and claims-window conditions, sits well below the ₹94,521 a vehicle the model shows would be needed before buying could match the ₹3,500 lease on cost alone `[T13]`.

| Reading of X06 | Effect on this document's figures |
|---|---|
| Literal ("may be available") | Subsidy applied only where the case's own buy-option tables state it `[C D10]`; never assumed guaranteed |
| Optimistic (treated as certain) | Would understate every buy-option's true cost by ₹10,000 a vehicle, a small effect against the ₹2,184 all-in gap in section 4.3 |

### 4.7a A second subsidy reading worth stating plainly

Even setting aside the "may be available" hedge, the subsidy's own eligibility conditions narrow further than a first read suggests. PM E-DRIVE's own text states the per kWh rate is "subject to review as per the reduction in vehicle cost and would be notified accordingly from time to time" `[RE11]`, meaning the rate itself is not fixed for the scheme's remaining life, and the scheme is fund-limited, closing a component early with no further claims once its allocated funds are exhausted `[RE07]`. A plan that depends on the subsidy being available at a specific rate on a specific future date, rather than treating it as a bonus if it arrives, is building on a number the scheme's own primary text describes as provisional. The recommended plan sidesteps this entirely by never depending on the subsidy, which this document considers a feasibility strength distinct from, and additional to, the cost-based case against buying made in section 4.4 above.

This additional reading does not change any model figure; it only reinforces, with one more piece of verified primary evidence, why the recommendation was built to require nothing from the subsidy line in the first place.

### 4.8 What we would ask SwiftKart's finance head on day 1

Each question below targets a specific gap named in section 1.3 or a specific assumption range in model table T16, so the answer, once obtained, would narrow a real range rather than confirm something already known.

| Question | Why it matters | What it would confirm or move |
|---|---|---|
| What receivable terms has the e-commerce client actually offered, in writing | A01 rests on two comparable companies' disclosed figures, not SwiftKart's own contract `[A01]` | The ₹44.5 lakh working-capital figure in section 4.5 |
| What overhead, beyond rider pay and vehicle cost, does the existing fleet already carry | The case gives no overhead figure at all `[C D01]` to `[C D09]` | Whether the 13.3 percent contribution margin covers overhead today |
| Has SwiftKart obtained a firm, multi-year lease quote from any Delhi-NCR EV lessor | The case's own ₹3,500 rate is unconfirmed against SwiftKart's specific fleet size and credit profile `[C D12]` | Whether the ₹3,500 base case or the ₹5,000 bear case is closer to reality |
| What cash and existing debt does SwiftKart hold outside the ₹1 crore | The model scopes every cash figure to the crore alone, per section 3.5 | Whether the ₹10 lakh minimum cash floor used in the model is realistic for the whole business `[A25]` |

### 4.9 How the seven numbers compound, rather than stand alone

Each of the seven insights above is shown separately with its own arithmetic, but none of them operates in isolation on the final recommendation; the table below states, for each insight, which option it weakens most and which option it leaves untouched, so a reader can see that the seven numbers consistently point the same direction rather than being seven unrelated observations assembled after the fact.

| Insight | Option weakened most | Option left untouched |
|---|---|---|
| 2, the ₹2.8 crore figure assumes full utilisation | Any option sized to the full ₹2.8 crore without a utilisation discount | The recommendation, which is tested against both 100% and 85% in section 4.1 and section 18 |
| 3, a charge is exactly one working day's capacity | The contract fleet under any option, since it has zero range headroom at full volume | The existing fleet, which retains about 15% headroom at 85% utilisation |
| 4, the lease already includes running cost | Options 2, 3 and 4, which compare a bought EV's running cost alone against the lease | Options 5 and 6, which are leasing-based and never make this comparison error |
| 6, buying both costs twice the crore | Option 4 specifically, which needs ₹1.10 crore of debt as a direct result | Options 5 and 6, which need no debt at all |
| 11, working capital is the largest use of cash | Any option that assumes most of the crore goes on vehicles | Option 6, where working capital's true size is already built into the ₹5.8 lakh reserve figure |
| 14, Delhi's regulatory clock devalues petrol bikes | Option 1 (stay petrol) and any option that keeps petrol bikes past month 12 | Option 6, where the last petrol bike is sold by month 12 |
| Subsidy wording, "may be available" | Options 2, 3 and 4, whose cost case partly rests on the subsidy applying | Options 5 and 6, which depend on zero subsidy assumption since they buy nothing |

Reading the pattern across all seven rows: every insight either weakens a buy-based option or leaves the lease-based recommendation untouched, and none of the seven weakens option 6 itself. This is not a coincidence engineered after the fact; it is the direct, traceable consequence of leasing avoiding the specific failure modes, running-cost-only comparisons, subsidy dependence, debt exposure and falling resale value, that each insight separately exposes in the buy-based alternatives.

### 4.10 Cross-checking the seven insights against the model's own tests

Model table T17 runs 18 checks against the recommended plan and the model's internal consistency; six of them map directly onto the seven insights developed above, which this document treats as independent confirmation rather than restating the same claim twice under two different names.

| Model check (T17) | Insight it confirms |
|---|---|
| Contract revenue ties to 75 times 30 times 26 times ₹40 times 12 | Insight 2, the ₹2.8 crore figure's own derivation |
| Lease beats bought all-in at case values | Insight 4, the lease-versus-buy comparison |
| Financed EMI alone exceeds the lease | Insight 4, the EMI-versus-lease comparison |
| Buying both needs debt | Insight 6, the twice-the-crore finding |
| Uses of the ₹1 crore sum to ₹1 crore | Insight 11, the sources-and-uses arithmetic |
| No petrol bikes at month 24 | Insight 14, the regulatory-clock finding |

Every one of these six checks reports PASS on the current model run `[T17]`, which means the seven insights above are not only internally consistent arguments in this document's own prose, they are also independently verified by the model's own automated consistency checks, run separately from the writer who drafted this section.

### 4.11 Why these seven, and not a longer list

The case brief contains far more than seven numbers; this document selects these seven specifically because each one, read carelessly, would point a team toward a different and weaker recommendation, which is the test this document applies before calling a number an "insight" rather than simply a fact already used elsewhere. A case fact that does not change the ranking of the six options, for example the 26 working days a month `[C D04]`, which is a multiplier common to every option and every configuration alike, is not listed here as one of the seven, even though it is used throughout section 3 and section 9. The seven chosen each satisfy the same test: a reader who takes the number at face value, without re-deriving it from the case's own surrounding sentences, reaches a conclusion this document can show, with arithmetic, to be wrong or incomplete. That is also why insight 4, the lease-already-includes-running-cost point, appears twice in this document, once here and once in section 9's fuller treatment of vehicle economics: a number that resolves a genuine, demonstrated misreading earns a second mention rather than a cross-reference alone, because the misreading it corrects is the single most common error an unprepared team would make reading this case cold.

### 4.12 A summary table of all seven, with the tag for each arithmetic chain

| # | Insight, in one line | Where the arithmetic is shown | Primary tags |
|---|---|---|---|
| 2 | The ₹2.8 crore contract figure assumes 100 percent utilisation | Section 4.1 | `[C O07, C O02, C D02, C D03, C D04]` |
| 3 | A full charge covers exactly one working day with no headroom at full use | Section 4.2 | `[C X02, C D03, C D08]` |
| 4 | The lease already includes running cost | Section 4.3 | `[C D11, C D12, C X08, T3]` |
| 6 | Buying both fleets costs twice the available crore | Section 4.4 | `[C D10, C X06, C D09, M]` |
| 11 | Working capital is the largest claim on the crore | Section 4.5 | `[A01, T9]` |
| 14 | Delhi's regulatory clock devalues a petrol bike every month it is held | Section 4.6 | `[RE35, RE37, RE51, C X05]` |
| subsidy | "May be available" is read literally, not optimistically | Section 4.7 | `[C X06, T13]` |

### What this section establishes, and what it does not

- Establishes, with the arithmetic shown for each, the seven numbers inside the case brief that change the right answer when read closely rather than at face value.
- Establishes that the recommended plan is specifically robust to the subsidy's conditional wording, since it buys zero vehicles and therefore never depends on the subsidy being real.
- Establishes four concrete, specific questions for SwiftKart's finance head, each tied to a named assumption range this document already states honestly as a range rather than a certainty.
- Does not use any of the seven insights to change a case fact; every one of them is read from the case's own words, not substituted with an outside figure.
- Does not yet show how these insights change the ranking of the six options against each other in full; that symmetric comparison, with the same seven numbers tested against every option rather than only the recommendation, is carried out in sections 13 to 16, and the specific financial consequence of insight 11 for the ₹1 crore's own sources-and-uses table is carried forward into the fuller treatment in section 17, so a reader who wants the complete arithmetic behind the ₹44.5 lakh working-capital line, rather than the single month-end snapshot shown here, should read that section next.
