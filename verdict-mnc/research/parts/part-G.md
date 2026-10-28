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
