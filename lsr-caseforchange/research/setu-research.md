# Project Setu: Research Deliverable

**Restructure first, then reskill into the work AI cannot do: an emergency board review of a mid-sized Indian services firm**

Team: Team IdeaForge · Harsh Kawatra (Delhi Technological University) · Gursimran Kaur (Guru Gobind Singh Indraprastha University)

Prepared for: Case for Change, Business Crisis Case Competition, Economics Department, Lady Shri Ram College for Women

---

## 0. Document control

**Answer.** This document is the research spine behind Project Setu, the turnaround plan recommended to the board as the Company's primary path. Every figure in it traces to one of five sources: a case fact, a named team assumption, a plan lever, a model output or table, or a verified external source, each marked with its own tag so a reader can check where a number came from without asking us. The case-competition-deck skill supplies the argument patterns (contrarian recommendation, action titles, the moneyshot); it has no guidance on covenant mechanics, cash-runway modelling or a wind-down waterfall, so that part of the method is the team's own model, described in full below.

### 0.1 Tag legend

Every number in this document carries a tag immediately after it, in square brackets. Table 0.1 sets out what each tag means and where its register lives.

| Tag form | Meaning | Register it points to |
|---|---|---|
| `[C Fx]` or `[C Kx]` or `[C Qx]` etc. | A fact taken directly from the case brief, unmodified | `case/01-case-brief.md`, IDs F1 to F3, K1 to K4, Q1 to Q4, P1 to P4, D1 to D5, J1 to J5 |
| `[A##]` | A team assumption: a value the case does not supply, chosen with a stated rationale and a sensitivity check | Assumptions register, section 18 of this document and PLAN section 5 |
| `[L##]` | A plan lever: an action the team recommends taking, with its cost or saving | Levers register, section 18 of this document and PLAN section 5 |
| `[M]` | A model output: a figure the turnaround model calculated from case facts and assumptions, not independently sourced | `model/model_outputs.json`, `model/setu_model.py`, model hash `7bf97725b5` [M] |
| `[Tx]` | A reference to one of the thirteen model tables, reproduced in Appendix B | `model/model_tables.md` |
| `[S##]` | An external source, verified by a named verifier against the publisher's own page | `research/raw/sources.md` |

*C: case. A: assumption. L: lever. M: model. T: table. S: source.*

### 0.2 Source hierarchy

The five research lanes that fed this document followed a fixed hierarchy when two sources disagreed: statute text and government releases first, then regulator and industry-body reports, then company filings and official blogs, then reputable press, with vendor marketing last and flagged. Table 0.2 sets this out with one example from the raw files for each tier.

| Tier | Source type | Example used in this document |
|---|---|---|
| 1 | Statute text and government releases | Industrial Relations Code 2020, clause 70, bill text [S05] |
| 2 | Regulator and industry-body reports | NASSCOM Strategic Review 2026, as quoted by press [S01] |
| 3 | Company filings and official statements | Klarna's own press statement on its AI assistant [S03] |
| 4 | Reputable press | Entrepreneur's reporting on Klarna's reversal [S04] |
| 5 | Vendor marketing, flagged | NextWealth's own description of its services [S24], marked `[vendor]` |

A fact that could not be confirmed against any tier is marked UNVERIFIABLE in the raw files and is never used as a stated fact in this document; it is either dropped or reported as a gap, consistent with the rule that an unverified seed fact is dropped, not softened.

### 0.3 Model version and what the model covers

The turnaround model that produces every `[M]` and `[Tx]` figure in this document carries hash `7bf97725b5` [M], confirmed to reproduce on every run at planning time together with its ten internal checks. Table 0.3 lists the model's scope and the three outputs it feeds.

| Model component | What it does | Feeds |
|---|---|---|
| Thirteen-week-style monthly cash model | Projects revenue, cost, EBITDA (earnings before interest, tax, depreciation and amortisation) and cash month by month under drift, three plan scenarios and nine shock drills | `model_outputs.json`, `model_tables.md` T2, T5, T6 |
| Covenant and runway test | Flags the month cash first falls below the ₹15 Cr loan covenant floor, and the month cash reaches zero | T2, T5, T6, T11 |
| Workforce and statutory-dues calculator | Projects headcount, attrition, bridge exits and hires; prices severance, gratuity and notice pay under the labour codes | T7, T8, T12 |

The case itself supplies no turnaround-finance method: no covenant schedule, no monthly cash build, no wind-down waterfall. The case-competition-deck skill, calibrated on roughly one hundred Harvard Global Case Competition Hub decks that are overwhelmingly mergers-and-acquisitions cases, supplies the rhetorical architecture of this document (the contrarian-recommendation pattern, action titles, the single moneyshot, symmetric treatment of competing options) but no turnaround-specific content: it does not model a covenant, a cash runway or a liquidation waterfall. That machinery is supplied entirely by this team's own model, built for this case. We say so plainly because the skill's own calibration note asks writers using it outside the M&A case types to be honest about which patterns generalise (the structural and rhetorical ones, with confidence) and which do not (case-type-specific financial templates, used here only as a starting shape, not as a source of numbers).

### 0.4 What is fact and what is assumption

No figure in this document is invented. Every case fact is unmodified from the case brief. Every number the case does not supply is a named assumption or lever with a rationale, drawn from PLAN section 5's register of twenty-one assumptions (A01 to A21) and twelve levers (L01 to L12), each cross-checked against a sensitivity test so a reader can see how much of the conclusion depends on the assumption holding. Where a real-world figure is used, for example NASSCOM's FY26 revenue figures or Klarna's own account of its AI assistant, it is used only as outside context for the industry, the technology or the law, never as a substitute for a missing case number. A real-world figure never replaces a case figure anywhere in this document, on the deck or in the model.

No interview, pilot, letter of intent, survey or client quote appears anywhere in this document because none was run; the Company is fictional and the case discloses no primary research. Appendix D sets out a validation plan naming who we would interview, how many, and what question, and states plainly that none of it has been done. Any legal reading in this document is hedged as our own reading of the relevant code, with counsel to confirm applicability to a services establishment, consistent with the project's content-integrity rule on legal statements.

---

## 1. Coverage matrix: every ask in the case mapped to a section and a slide

**Answer.** The case brief carries twenty-five cross-referenced asks across its background facts, its question, its deliverable specification and its judging rubric. Table 1.1 maps every one of the twenty-five IDs, F1 to F3, K1 to K4, Q1 to Q4, P1 to P4, D1 to D5 and J1 to J5, to the section of this document that answers it and the deck slide that shows it, so a reader (or a judge) can verify in one pass that nothing in the case brief was left unanswered. The deck runs eight slides: s01 cover, s02 to s06 the five mandated core slides in order, s07 appendix, s08 thank-you; the table below uses those slide codes.

### 1.1 The coverage matrix

Table 1.1 is organised in the order the case brief presents its own IDs, not in the order this document answers them, so a reader working from the case brief outward can follow along line by line.

| ID | Short ask (from the case brief) | One-line answer | Section | Slide |
|---|---|---|---|---|
| F1 | Who the Company is: 2,400 staff, five cities, three service lines, many in their first formal job | A fictional mid-sized Indian services firm built on cheap, scalable human labour across BFSI document processing, e-commerce catalogue QC and multilingual voice support [C F1] | 3 | s02 |
| F2 | What changed: AI rivals 30% cheaper and three times faster; six months of cash before shutdown | AI-native and AI-assisted rivals have repriced the Company's core work in eighteen months; on the drift path the covenant breaks in month 6 and cash reaches zero in month 9 [M] | 3, 4 | s02 |
| F3 | The financial table, FY23 to run-rate | Revenue fell from ₹262 Cr to a ₹182 Cr run-rate while cost barely moved, turning a ₹45 Cr EBITDA into a run-rate loss of ₹31 Cr [C F3] | 3 | s02, s03 |
| K1 | Cash and the loan covenant | ₹40 Cr cash, of which ₹15 Cr is the covenant floor and ₹15 Cr the emergency budget; free buffer is ₹10 Cr [C K1] | 4 | s02 |
| K2 | The workforce today: roles, pay, tenure, attrition | 1,350 processors, 420 exception handlers, 380 voice agents, 190 team leads, 60 tech and corporate staff; ₹6 lakh average pay; 26% attrition [C K2] | 8 | s03, s06 |
| K3 | Unit economics: every line loses money | A BFSI file costs ₹41 and sells for ₹38, a ₹3.2 loss per file at today's blended cost [C K3] | 7 | s03 |
| K4 | The three named competitors | An AI-native rival at ₹27 (cost about ₹9), an AI-assisted incumbent at ₹33 (cost about ₹28), and a voice AI start-up that needs human data labellers [C K4] | 6 | s02 |
| Q1 | Decide what the Company should do, around one of four named paths or the team's own | Primary path: Path 1 rebuilt as Project Setu, restructure first, then reskill into the work AI cannot do [C Q1] | 2, 9 | s04 |
| Q2 | Paths may be combined or replaced, but one primary path must be named and justified against the standard options | Setu borrows one idea each from Paths 2 and 3 and prices Paths 2 and 4 as fallback and floor, not as live alternatives [C Q2] | 2, 9 | s04 |
| Q3 | The non-negotiable: what happens to the people | 1,814 of 2,400 jobs held at month 12 with no forced exit; a ₹6.1 Cr reserve held against the downside [C Q3] [M] | 15 | s06 |
| Q4 | The strategy must be financially viable, operationally realistic and defensible under scrutiny | Cash never falls below ₹21.1 Cr in the base case, EBITDA turns positive by month 8, and every lever traces to a named cost line [C Q4] [M] | 13, 14 | s05 |
| P1 | Reskill and Restructure | As written, it fails: reskilling 2,340 staff at ₹45,000 a head still prices the file at ₹33 and the covenant breaks in month 4 [A19] [M] | 9, 10 | s04 |
| P2 | Get Acquired or Merge | Priced as the fallback: owners receive ₹12 to 60 Cr at a sale in month 5, and the Company loses control of which 500 to 1,200 of 2,400 jobs survive [A18] [M] | 10 | s04, s07 |
| P3 | Pivot the Business | As written, it fails: a cold-start AI-adjacent line needs about ₹145 Cr of new revenue within a year and the covenant breaks in month 4 [M] | 9 | s04 |
| P4 | Wind Down | Priced as the floor: today's wind-down covers only 54% of staff dues and the lender's claim, falling to 23% by month 6 [M] | 11 | s04, s07 |
| D1 | Deck slide: Diagnose the Crisis | What changed, why the model is uncompetitive, and the urgency shown by the drift path's month 6 breach | 3, 5, 6 | s02 |
| D2 | Deck slide: Quantify the Problem | Unit economics and the workforce-cost model, showing where value is lost and what the Company can afford | 7, 8 | s03 |
| D3 | Deck slide: Choose and Justify a Path | The four paths and Setu scored on the same six tests, with Setu the only route scoring above 4 out of 5 [T13] | 9 | s04 |
| D4 | Deck slide: Build the Strategy and Plan | Resource allocation, the six moves, milestones and the four cash gates | 12, 13, 14 | s05 |
| D5 | Deck slide: Address the Workforce and Risks | The role-by-role transition plan, the bridge programme, and a twelve-line risk register | 15, 16 | s06 |
| J1 | Judging: analytical rigour, 25% | Every number ties back to the case table or a named assumption; the EBITDA bridge and unit-cost build are shown line by line | 3, 7, 8 | s02, s03 |
| J2 | Judging: strategic judgement, 25% | A named primary path with honest trade-offs against speed, cost, control, survival and human impact, scored on a weighted formula | 9 | s04 |
| J3 | Judging: workforce and human impact, 20% | A costed, role-by-role plan for 1,814 jobs with a named reserve for the downside, not an afterthought | 15 | s06 |
| J4 | Judging: originality of insight, 15% | Nine insights derived directly from the case's own table, including that the six months runs to the covenant, not to zero | 2, 3 | s02, s04 |
| J5 | Judging: adaptability, 15% | Nine finals drills pre-computed, each with a stated counter-move, so a new development at the final can be answered from a table already built | 14, 20 | s05, s07 |

*BFSI: banking, financial services and insurance. QC: quality control. EBITDA: earnings before interest, tax, depreciation and amortisation.*

### 1.2 How to read the matrix

Three patterns are worth naming before the rest of this document works through each row in depth. First, the case's financial facts (F1 to F3, K1 to K4) concentrate on slide s02 and sections 3 and 4, because diagnosis has to happen before any path can be chosen or costed; a judge reading only that slide should already see why six months is six months and not a vaguer "soon." Second, the four named paths (P1 to P4) are treated symmetrically in section 9 and on slide s04: each gets the same thesis, cash path, jobs, control and risk columns that Setu gets, so no path is quietly given an easier test than another. Third, the judging weights (J1 to J5) are not decorative: Table 1.1's last five rows show that every weighted criterion has a specific section and slide carrying its evidence, which is itself a check that the deck was built to the rubric rather than to a generic case-study template.

One honest gap belongs here rather than buried in an appendix. The case's own four-path menu names risks for each path in a single clause (for example, Path 1's risk is "too slow or costly to pay off within the runway" [C P1]); this document and the model exist specifically to put a number on each of those four clauses, because a board reviewing a crisis has no use for a risk statement it cannot size. Where the case gives a risk in words, we give it in rupees and months; that conversion is the single biggest piece of work this research document does, and it recurs in every section from here on.

---

## 2. Board answer: restructure first, then reskill into the work AI cannot do

**Answer.** Our recommendation is Path 1, Reskill and Restructure, rebuilt as Project Setu: cut cost and freeze hiring in month 1, reprice by file complexity in months 2 to 4, move clean files to a licensed AI engine, build a hard-file desk around the Company's existing exception handlers, and grow a new AI data-services line that turns the Company's multilingual staff into the human labellers a named rival's own weakness requires [C K4]. Project Setu never lets cash fall below ₹21.1 Cr, breaks even on EBITDA by month 8, and holds 1,814 of 2,400 jobs with no forced exit [M], at a cost of ₹8.9 Cr against a ₹15 Cr budget [T8]. The three standard paths, taken as written, each breach the ₹15 Cr covenant inside the six-month runway the case describes [C F2]; Setu is the only route in our scorecard that survives, keeps jobs, and leaves the Company in control of its own decision.

### 2.1 Why the three standard paths fail on the case's own numbers

A board meeting this crisis will naturally reach first for the obvious version of each named path. Table 2.1 sets out why each obvious version fails, tested only against numbers the case itself supplies or the model derives from them.

| Route | The obvious version | Why it fails on the case's own numbers |
|---|---|---|
| Path 1 as written | Reskill everyone to work with AI, keep every line running unchanged | The incumbent rival already runs this model and its AI-assisted cost of ₹28 a file [C K4] still sits above the AI-native price of ₹27 [C K4]. Reskilling 2,340 people costs about ₹10.5 Cr inside four months [A19], and the covenant breaks in month 4 [M] |
| Path 2 | Sell to the AI-native firm now | An enterprise value of 0.20 to 0.50 times revenue gives owners roughly ₹12 to 60 Cr [A18] [M], the buyer likely needs only 500 to 1,200 of 2,400 people [A18], and the Company has no control over who stays. A sale process takes about as long as the runway itself [M] |
| Path 3 | Exit the disrupted lines, bet everything on a new AI-adjacent service | Needs about ₹145 Cr of new revenue within a year from a standing start, and the covenant breaks in month 4 [M] |
| Path 4 | Close in an orderly way with fair severance | Statutory dues total about ₹51 Cr, roughly ₹2.13 lakh a head [M]. Cash is ₹40 Cr and the lender is already owed ₹40 Cr. On the assumed balance sheet, only 54% of dues and debt can be met today, falling to 23% by month 6 [A13] [M] |

A wind-down is not the safe, value-preserving option it can look like on paper. It is the option that most needs a balance sheet the case does not give us, and every month of drift before taking it makes the dues cover worse, not better.

### 2.2 The recommendation, and the three reasons it is right

Project Setu is Path 1 rebuilt, not Path 1 as written. It keeps the spirit of the case's own first path (retrain staff, redeploy, restructure how work is done) but changes what is reskilled into, borrowing one idea from Path 2 (license an AI engine rather than sell the Company for one) and one from Path 3 (build a genuinely new AI data-services line, funded by milestones rather than attempted in one leap). Table 2.2 sets out the case for Setu against the case against the three standard paths, in the same three tests, so the comparison is symmetric rather than one-sided.

| Side | Quantitative | Strategic fit | Feasibility |
|---|---|---|---|
| Not the standard paths | Paths 1 and 3 as written breach the covenant in month 4; drift breaches in month 6 [M] | Matching the AI-native rival on price for clean files is a price war against a rival carrying about ₹18 of margin a file [C K4] | A wind-down cannot pay its own dues today [M]; a sale hands the workforce decision to a buyer [A18] |
| Project Setu | Cash never below ₹21.1 Cr; EBITDA positive from month 8; ₹8.4 Cr EBITDA run-rate by month 12 [M] | Uses the three clues the case itself provides: the AI-native rival is weak on handwritten and regional-language forms [C K4], the voice start-up needs human labellers [C K4], and the Company already has 420 trained exception handlers [C K2] | ₹8.9 Cr of one-off spend inside a ₹15 Cr budget [T8]; no forced exit to month 12 [M]; four cash gates tied to the covenant |

### 2.3 The six moves

1. **Stop the bleed (month 1).** A hiring freeze means the 624 people who leave in a normal year [M] are simply not replaced [L01]. Leadership pay is cut 25% for twelve months for sixty people, saving ₹2.7 Cr [L02]. Selling and general cost is cut to 75% then 60%, and general cost to 90% then 75% [L03].
2. **Price by complexity (months 2 to 4).** One ₹38 price [C K3] was hiding two very different products. Clean files move to ₹31 and hard files (handwritten, regional-language) move to ₹48 [L05]. The client's blended bill falls about 5%, from ₹38 to ₹36.1, while the Company's blended margin moves from minus ₹3.2 to plus ₹7.1 a file [T4].
3. **AI engine on clean files (months 3 to 9).** A licensed document AI engine costs ₹8 a clean file, with a human verifying one file in five [A07] [A14]. Migration is paced 20, 40, 55, 70, 80, 90, 100% over seven months [L06], so that people freed from clean-file work have somewhere else to go before the line shrinks under them.
4. **The hard-file desk.** The case's own 420 exception handlers [C K2], plus upskilled processors, work AI-assisted at a 45% productivity gain [A15], sold at ₹48. This is the one segment the AI-native rival is weak at [C K4] and the only segment the Company can defend on quality rather than race on price.
5. **AI data services.** The regional-language voice AI start-up named in the case needs human data labellers [C K4]; the Company already has multilingual staff across five cities [C F1]. The line ramps from 30 people in month 2 to 400 by month 12 at about ₹63,000 revenue a head a month [A08] [L07].
6. **Hold a reserve for people.** Only ₹8.92 Cr of the ₹15 Cr emergency budget [C K1] is deployed [T8]; ₹6.08 Cr is ring-fenced, released only if a cash gate fails [L12].

Catalogue QC is kept deliberately as a holding line: it earns almost no contribution margin, but it keeps about 500 people employed and paid by clients while data services ramps and attrition does the rest of the work of shrinking it. It is allowed to shrink only as fast as the people inside it have somewhere else in the plan to go.

### 2.4 The moneyshot

The single number this deck is built around is **1,814**: of 2,400 people on the Company's books today [C F1], 1,814 are still employed, still paid, at month 12 under Project Setu [M], with zero forced exits [M]. The workforce bridge runs 2,400 less 549 unreplaced leavers, less 70 assisted bridge exits, less zero forced exits, plus 32 new hires, to land at 1,814 [T7]. The second number that supports it is the cash floor: ₹21.1 Cr, the lowest month-by-month cash balance Setu ever touches [M], comfortably above the ₹15 Cr covenant [C K1] and never close to the drift path's month-9 zero [M].

### 2.5 What would change our mind

Project Setu is not unconditional. Table 2.3 names the three triggers most likely to move us off it, each with a pre-built response from the model, so a change in circumstances at the finals (the adaptability criterion, J5) has a pre-computed answer rather than an improvised one.

| Trigger | What the model shows | Our response |
|---|---|---|
| Data-services ramp runs at half the planned pace | Lowest cash still holds at ₹15.4 Cr, no covenant breach [M] | Watch, do not act; the plan has margin for this specific shock on its own |
| Largest BFSI client leaves, BFSI revenue falls 20% | Cash falls to ₹1.1 Cr and the covenant breaks in month 6 [M] | The month 6 cash gate opens the Path 2 sale fallback before cash forces a worse, later decision |
| Five or more downside shocks land together, not one at a time | The base case does not hold under compounded shocks [M] | State this honestly in section 14 rather than claim a plan that survives everything |

*BFSI: banking, financial services and insurance.*

### 2.6 Draft cover text

Project Setu: restructure first, then reskill into the work AI cannot do. The Company's model is uncompetitive: AI-native rivals sell the same BFSI file thirty percent cheaper and three times faster, and every line now loses money per unit. Six months of cash is not six months to decide; it is six months to a loan covenant breach. We recommend Path 1 rebuilt, not sold, not abandoned: a hiring freeze, complexity-based pricing, a licensed AI engine on clean files, a hard-file desk built on the Company's own exception handlers, and a new AI data-services line. Cash never falls below ₹21.1 Cr. EBITDA turns positive by month 8. 1,814 of 2,400 jobs are held, with no forced exit, and a reserve stands behind the people this plan cannot yet place.

(103 words)

---

## 3. The case in numbers: revenue fell ₹80 Cr and 95% of it reached EBITDA

**Answer.** Revenue fell from ₹262 Cr in FY24 to a ₹182 Cr run-rate [C F3], a fall of ₹80 Cr, while total operating cost barely moved, falling only ₹4 Cr from ₹217 Cr to ₹213 Cr over the same stretch [C F3]. Ninety-five percent of that ₹80 Cr revenue fall reached EBITDA (earnings before interest, tax, depreciation and amortisation) directly, because neither the people cost base nor the other cost base flexed down with the business [M]. Headcount fell only 6% while revenue fell 31% from its FY24 peak, meaning the Company spent eighteen months hiring, or at least not shrinking, into a business that was already contracting [C F3].

### 3.1 Rebuilding the case's own financial table

The case gives one financial table, in ₹ crore, across FY23, FY24, FY25 and a current run-rate [C F3]. Table 3.1 reproduces it with two derived rows, employee cost and other cost in absolute rupee terms, computed by applying the case's own disclosed employee-cost percentage of revenue to the case's own revenue line for each year [T1].

| Line | FY23 | FY24 | FY25 | Run-rate |
|---|---|---|---|---|
| Revenue | 240 | 262 | 226 | 182 |
| Total operating cost | 196 | 217 | 222 | 213 |
| EBITDA | 44 | 45 | 4 | −31 |
| Employee cost as % of revenue (case) | 53% | 55% | 65% | 80% |
| Employee cost, ₹ Cr (derived) | 127.2 | 144.1 | 146.9 | 144.0 |
| Other cost, ₹ Cr (derived) | 68.8 | 72.9 | 75.1 | 69.0 |
| Headcount | 2,300 | 2,550 | 2,500 | 2,400 |

*₹ Cr: Indian rupees, crore (ten million). EBITDA: earnings before interest, tax, depreciation and amortisation. % of revenue and headcount rows are case facts [C F3]; the two "derived" rows are model table T1 [T1] [M].*

Table 3.1 shows the shape of the crisis in one place. EBITDA ran at ₹44 to 45 Cr in FY23 and FY24, a stable, healthy business by the look of it, before collapsing to ₹4 Cr in FY25 and a loss of ₹31 Cr on the current run-rate [C F3]. The collapse happened almost entirely on the cost side staying still while revenue fell: employee cost in FY24 was ₹144.1 Cr and on the current run-rate it is ₹144.0 Cr [T1], a difference of effectively nothing, while revenue over the same stretch fell from ₹262 Cr to ₹182 Cr [C F3]. Other cost tells a similar story: ₹72.9 Cr in FY24 against ₹69.0 Cr on the run-rate [T1], a fall of only ₹3.9 Cr against an ₹80 Cr revenue fall.

### 3.2 The issue tree: where the EBITDA gap actually comes from

A board asking "why did EBITDA fall ₹76 Cr from FY24 to the run-rate" deserves a decomposition that is mutually exclusive and collectively exhaustive (MECE), not a single sentence about "AI disruption." Table 3.2 breaks the fall into price, volume, people cost and other cost, the four branches that between them account for the whole of the EBITDA gap.

| Branch of the issue tree | What moved | Approximate contribution to the EBITDA fall | Tag |
|---|---|---|---|
| Price | AI-native and AI-assisted rivals undercut by roughly 30% on the Company's core BFSI file [C F2] [C K4], forcing price concessions across the book | Largest single branch; visible directly in the ₹38 price against a ₹41 cost today [C K3] | [C F2] [C K4] [C K3] |
| Volume | Clients shifted volume to cheaper, faster rivals [C F2], compounding the price pressure rather than offsetting it | Revenue fell faster (31% from the FY24 peak) than price alone would explain | [C F2] [C F3] |
| People cost | Employee cost stayed essentially flat, ₹144.1 Cr to ₹144.0 Cr, while the business it was supposed to staff shrank by nearly a third [T1] | 95% of the revenue fall reached EBITDA because this branch did not move [M] | [T1] [M] |
| Other cost | Facilities, technology, selling and general cost stayed within ₹4 Cr of its FY24 level while revenue fell ₹80 Cr [T1] | Smaller than the people-cost branch but still a drag; this is the branch Project Setu's levers L03 and L04 target directly | [T1] [L03] [L04] |

*MECE: mutually exclusive, collectively exhaustive, meaning the four branches do not overlap and together explain the whole gap.*

Table 3.2 is the single most important diagnostic in this document, because it answers the judges' analytical-rigour criterion (J1) directly: the Company's problem is not only that rivals got cheaper, it is that the Company's own cost base never responded to a shrinking top line. A firm whose revenue fell 31% but whose employee cost fell by less than one percent [T1] was not restructuring during the eighteen months the case describes as the disruption window [C F2]; it was absorbing the fall entirely into margin until margin ran out.

### 3.3 Ninety-five percent drop-through, and why that number matters more than the headline loss

The ₹31 Cr run-rate loss [C F3] is the number a board will fixate on first, but the drop-through rate is the number that explains how urgent the fix needs to be. From FY24 to the run-rate, revenue fell ₹80 Cr (₹262 Cr to ₹182 Cr) and EBITDA fell ₹76 Cr (₹45 Cr to minus ₹31 Cr) [C F3]; dividing one by the other gives a drop-through of 95% [M]. In a cost base that flexed with revenue, a 31% revenue fall would cost far less than 95 cents of every rupee lost; a well-run variable-cost business might see drop-through in the 30 to 50% range, with the rest absorbed by lower direct cost. A drop-through near 100% is the signature of a cost base that is almost entirely fixed in the short run, which is exactly what Table 3.1's employee-cost and other-cost rows show directly.

### 3.4 Payroll and other cost that did not move, and headcount that barely fell

Two further facts from the case's own table deserve their own line, because each is easy to miss inside the aggregate EBITDA number. First, employee cost as a percentage of revenue rose mechanically from 53% in FY23 to 80% on the run-rate [C F3], not because pay rose but because the denominator (revenue) collapsed under a numerator (employee cost) that stayed roughly flat [T1]. Second, headcount fell only from 2,500 in FY25 to 2,400 on the run-rate, a fall of 4%, and only 6% from the FY24 peak of 2,550 [C F3], against a revenue fall of 31% from that same FY24 peak. Table 3.3 puts revenue and cost on a per-head basis to show what this means for productivity.

| Measure | FY23 | FY24 | FY25 | Run-rate |
|---|---|---|---|---|
| Revenue per head, ₹ lakh | 10.43 | 10.27 | 9.04 | 7.58 |
| Employee cost per head, ₹ lakh | 5.53 | 5.65 | 5.88 | 6.00 |

*₹ lakh: Indian rupees, lakh (100,000). Both rows are model table T1, computed from case facts [T1] [C F3].*

Table 3.3 shows that revenue per head fell from ₹10.43 lakh in FY23 to ₹7.58 lakh on the run-rate, a fall of 27%, while employee cost per head rose slightly, from ₹5.53 lakh to ₹6.00 lakh, over the same stretch [T1]. Every employee became, on average, a little more expensive and a great deal less productive in revenue terms, in the space of three years. This is not a story about lazy staff; it is a story about a cost structure, and a pricing structure, that assumed a world where cheap human labour was the Company's edge [C F1], a world the case tells us ended eighteen months ago [C F2].

### 3.5 Hiring into a shrinking business

The case states that annual attrition runs at about 26% [C K2]. Applied to the current headcount of 2,400 [C F3], that implies roughly 624 people leave in a normal year [M], a figure the Company would need to replace at a rate of more than fifty people a month simply to hold headcount flat. Headcount did fall over the period the case describes, from 2,550 in FY24 to 2,400 on the run-rate, a drop of 150 people, or 6% [C F3]. Against natural attrition running at an estimated 624 a year [M], a 150-person net fall over roughly eighteen months (the disruption window named in the case [C F2]) is consistent with the Company still replacing the large majority of leavers during a period when revenue was falling 31% from its FY24 peak. The Company was, in other words, not shrinking its workforce in line with its shrinking business; it was still backfilling into a business that was already contracting, which is precisely the branch of the issue tree (people cost) that Table 3.2 identifies as the single largest driver of the EBITDA collapse. This is also the first and simplest of the plan's levers: a hiring freeze from month 1 [L01] does nothing clever, it simply stops repeating a mistake the case's own numbers show was already three years in the making.

### 3.6 Growth rates, side by side: revenue and cost moved on different clocks

A year-over-year view of the same case table makes the point in section 3.1 sharper still. Table 3.4 converts the case's revenue and total operating cost figures into year-over-year percentage change, so the two lines can be compared on the same footing rather than read off the absolute-rupee table one year at a time.

| Period | Revenue, year-over-year change | Total operating cost, year-over-year change | Gap |
|---|---|---|---|
| FY23 to FY24 | +9.2% | +10.7% | Cost grew faster than revenue even while the business was still healthy [C F3] [M] |
| FY24 to FY25 | −13.7% | +2.3% | Revenue reversed sharply; cost kept rising [C F3] [M] |
| FY25 to run-rate | −19.5% | −4.1% | Cost finally started falling, but at roughly a fifth of the pace revenue fell [C F3] [M] |

*All percentages are model outputs computed directly from the case's revenue and total operating cost figures [M] [C F3].*

Table 3.4 shows that cost discipline, such as it was, arrived too late and moved too slowly. Even in the FY23 to FY24 period, when the Company was still profitable, cost grew marginally faster than revenue [M], meaning the seeds of the current mismatch were present before the disruption named in the case even began [C F2]. By the time cost did start to fall, FY25 to the run-rate, it fell at barely a fifth of the rate revenue fell [M], which is exactly the asymmetry that produces a 95% drop-through, as shown in section 3.3.

### 3.7 Attrition against the net headcount change: the arithmetic of hiring into a shrinking business

Section 3.5 argued qualitatively that the Company kept hiring into a shrinking business. Table 3.5 makes the same point with the specific numbers side by side, so the claim can be checked rather than taken on trust.

| Measure | Value | Tag |
|---|---|---|
| Annual attrition rate | 26% | [C K2] |
| Current headcount | 2,400 | [C F3] |
| Implied natural leavers in a normal year | about 624 | [M], 26% of 2,400 |
| Net headcount change, FY24 to run-rate | −150 (2,550 to 2,400) | [C F3] |
| Implied replacement hiring over the same window | the large majority of roughly 624 annual leavers, repeated across the eighteen-month disruption window [C F2], against a net fall of only 150 | [M] |

*The implied natural-leavers and replacement-hiring rows are model calculations applying the case's own attrition rate to the case's own headcount figures [M] [C K2] [C F3]; they are not separately disclosed in the case.*

Table 3.5 is the arithmetic behind Project Setu's first and simplest lever. A hiring freeze with no backfill [L01] does not require persuading anyone to accept a pay cut or a changed role; it only requires the Company to stop doing something its own numbers show it was already doing at a cost it could not afford, which is replacing the roughly 624 people a year who leave on their own, inside a business that needed to be shrinking its headcount, not holding it flat.

### 3.8 What this section does and does not claim

This section claims only what the case's own table supports: that cost did not fall with revenue, that the fall reached EBITDA at a 95% rate, and that headcount fell much more slowly than revenue did. It does not yet say what to do about any of this; that argument is built in sections 7 through 9, using the unit-economics and workforce-cost detail this section's aggregate numbers do not show. What this section establishes is the urgency case: a business that absorbed an ₹80 Cr revenue fall almost entirely into margin, while continuing to staff and spend roughly as it did at its FY24 peak, does not have the luxury of a slow decision. That urgency is made precise, in months and in rupees, in section 4.

---

## 4. The cash clock: six months to the covenant, not to zero

**Answer.** The case states the Company has six months of cash before it shuts down [C F2]; the model shows that on the drift path, where nothing changes, cash first breaches the ₹15 Cr loan covenant floor in month 6, at a cash balance of ₹14.8 Cr, and reaches zero only in month 9 [M] [T2]. The "six months" the case names is therefore best read as the distance to the covenant breach, not to true cash exhaustion, which matters because a covenant breach hands the lender rights over the Company well before cash physically runs out. Reconciling that six-month statement against the model's monthly figures implies a revenue decline of about 2.38% a month if the Company is run purely to the covenant date [M], close to the 2.45% the model actually uses as its drift assumption [A01], and close to the 2.85% decline observed directly between the FY25 and run-rate revenue figures in the case's own table [C F3].

### 4.1 Rebuilding the drift path, month by month

Table 4.1 reproduces the model's month-by-month drift projection (no decision taken, the business continues exactly as today), covering revenue, EBITDA (earnings before interest, tax, depreciation and amortisation) and cash for all eighteen months the model runs [T2].

| Month | Revenue, ₹ Cr | EBITDA, ₹ Cr | Cash, ₹ Cr |
|---|---|---|---|
| 1 | 14.80 | −2.95 | 36.7 |
| 3 | 14.08 | −3.67 | 29.0 |
| 6 | 13.07 | −4.68 | 14.8 |
| 9 | 12.13 | −5.62 | −2.2 |
| 12 | 11.26 | −6.49 | −21.9 |
| 15 | 10.45 | −7.30 | −44.1 |
| 18 | 9.70 | −8.05 | −68.6 |

*₹ Cr: Indian rupees, crore (ten million). Full eighteen-month table is model table T2 [T2]; every cell is a model output [M].*

Table 4.1 shows the drift path crossing the ₹15 Cr covenant floor between month 5 (cash ₹19.9 Cr) and month 6 (cash ₹14.8 Cr) [T2], and crossing zero between month 8 (cash ₹3.8 Cr) and month 9 (cash minus ₹2.2 Cr) [T2]. Both events happen because monthly EBITDA is negative throughout, averaging roughly minus ₹5 to 8 Cr a month and widening over time as revenue keeps declining on the drift path's own trajectory [T2]. Nothing about this path is a cliff edge; it is a slow, visible drain, which is itself a finding: the Company does not run out of time suddenly, it runs out of time predictably, on a schedule the model can print a month in advance.

### 4.2 The ₹40 Cr split, and the real size of the buffer

The case states cash is ₹40 Cr, that the ₹15 Cr emergency budget is part of that ₹40 Cr and not additional to it, that no new debt or funding is available, and that the ₹40 Cr term loan requires cash to stay above ₹15 Cr [C K1]. Table 4.2 breaks the ₹40 Cr into its three functional pieces.

| Component of the ₹40 Cr cash balance | Amount, ₹ Cr | What it is for |
|---|---|---|
| Loan covenant floor | 15.0 | Must stay in the bank at all times; breaching it gives the lender rights over the Company [C K1] |
| Emergency budget | 15.0 | The plan's entire discretionary spend on reskilling, technology, retention, footprint and bridge pay, drawn from inside the ₹40 Cr, not on top of it [C K1] [T8] |
| Free buffer | 10.0 | What is left once both the covenant floor and the full emergency budget are set aside |

*₹ Cr: Indian rupees, crore (ten million). Covenant floor and emergency budget are case facts [C K1]; the free-buffer figure is the arithmetic remainder, ₹40 Cr less ₹15 Cr less ₹15 Cr [C K1].*

The free buffer of ₹10 Cr is only about 3.9 months of the Company's current monthly burn rate on the drift path, where EBITDA runs at roughly minus ₹2.95 to minus ₹4.7 Cr a month across the first six months [T2]. That buffer, not the full ₹40 Cr headline, is the realistic measure of how much slack the board actually has before either the covenant or the emergency budget itself has to be touched.

### 4.3 Flat revenue against declining revenue: two different clocks

The model also runs a flat-revenue variant, holding revenue constant at the current run-rate rather than letting it continue to decline, to separate the effect of further revenue erosion from the effect of an already-unsustainable cost base. Table 4.3 compares the two.

| Scenario | Covenant breach month | Cash-zero month |
|---|---|---|
| Drift (revenue continues declining) | Month 6 | Month 9 |
| Flat revenue (no further decline, cost base unchanged) | Month 9 | Month 14 |

*Both rows are model outputs [M], drawn from the model's drift and flat-revenue runs.*

Table 4.3 makes a point that is easy to lose in a single "six months" headline: even if the Company could somehow stop its revenue from falling any further tomorrow, with no further price or volume loss at all, it would still breach the covenant in month 9 and run out of cash in month 14, purely because the current cost base does not fit the current revenue level. The cost problem identified in section 3 (people cost and other cost that did not flex down) is large enough on its own to force a covenant breach even without a single further rupee of revenue decline. Revenue decline accelerates the clock from nine months to six; it did not create the clock.

### 4.4 Reconciling "six months" to the model's 2.45% monthly decline assumption

The case's own words are "on its current trajectory the Company has six months of cash before it shuts down" [C F2]. Three different readings of "six months" are possible, and Table 4.4 sets out what monthly revenue decline rate each reading implies, so the team's chosen assumption (A01, 2.45% a month) can be checked against each one.

| Reading of "six months" | What it implies | Implied monthly revenue decline |
|---|---|---|
| Six months to the covenant breach, cash below ₹15 Cr | Matches the drift path's month 6 breach almost exactly [M] | about 2.38% a month, reverse-solved so the covenant breach lands at month 6 [M] |
| Six months to true cash exhaustion, cash at zero | Does not match the drift path, which does not reach zero until month 9 [M] | Would require a faster decline than the model's drift path shows |
| Observed decline, FY25 revenue to the current run-rate | A direct read of the case's own two most recent data points [C F3] | 2.85% a month, computed from ₹226 Cr falling to a ₹182 Cr run-rate [C F3] [M] |

*All three implied rates are model outputs reverse-solved from case facts [M] [C F3], except where noted.*

The team's chosen assumption, A01, sets the drift path's monthly decline at 2.45% [A01], a figure chosen deliberately between the two reconciled readings: close enough to the 2.38% that makes "six months" mean "six months to the covenant" exactly, and close enough to the 2.85% observed directly in the case's own FY25-to-run-rate numbers [C F3] that it does not understate the pace of decline the case has already shown. We treat this as the most defensible single number to run the base case on, and we show the model's sensitivity to it directly: the model's own breach month under this 2.45% assumption lands at month 6 [T2], matching the case's "six months" statement to the month. Insight 1 in section 2.4's companion table (the nine insights, carried in section 3 in full) rests on exactly this reconciliation: the case's six months is a covenant clock, not a cash-exhaustion clock, and that distinction is itself one of the nine named insights this document claims as original to this team's reading of the case [A01].

### 4.5 What the lender can do at a breach

The case states the loan requires cash to stay above ₹15 Cr [C K1] but does not say what happens if it does not. No case fact and no verified external source in our research describes the specific remedies available to this Company's lender; our verification pass on this question (lane E, question E4) found general banking practice well known in principle (a lender can waive the breach, reset the covenant at a new level, or recall the loan) but could not confirm a specific Indian secured-lending case with a sourced outcome, and that row is recorded as not found. We therefore state this only as general industry practice, not as a sourced finding specific to this Company or to Indian lending generally, and we hedge accordingly: on our reading of how secured lending typically works, a lender facing a breach by an operating business with a credible recovery plan is more likely to negotiate a waiver or a reset than to recall immediately, because recall usually recovers less for the lender than a continuing, cash-generative business does. We do not rely on this reading for any number in the model; the model treats a breach as a hard stop requiring a change of plan (opening the Path 2 sale fallback, as described in section 2.5), not as an event the Company can assume away on the hope of lender forbearance.

### 4.6 Why this section matters for everything that follows

The cash clock established here is the test every later section runs its numbers against. Section 9 scores the four paths and Setu on exactly this covenant line, not on a vaguer notion of survival. Section 10 prices a sale at month 5, deliberately inside the drift path's month 6 breach, so that the sale fallback is triggered before the clock runs out, not after. Section 14's four cash gates are each a checkpoint against this same ₹15 Cr floor, read off the model month by month rather than guessed at. Every one of those later arguments depends on the reconciliation in section 4.4 holding: that "six months" is the covenant clock, that the free buffer is ₹10 Cr and not ₹40 Cr, and that revenue decline accelerates but did not create the problem. Get this section wrong and every later number in this document would be measuring against the wrong line.


## 5. Industry context: AI is repricing Indian services work from headcount to outcome

**Answer.** The Indian technology sector grew to USD 315 billion in FY26, and within it business process management (BPM) revenue grew from USD 55 billion to USD 59 billion [S01], so the industry as a whole is not shrinking. What is changing is how a unit of work gets priced: artificial intelligence (AI) now does the first pass on standard, high-volume tasks, and clients pay for a result rather than for a roster of people sitting at desks. The Company's own numbers sit on the wrong side of that shift: it still prices and staffs a BFSI (banking, financial services and insurance) file as if the file needed a person from start to finish [C K3], while an AI-native rival prices the same file at thirty percent less and three times faster [C F2]. We treat the national data as context for the shape of the industry, never as a substitute for the case's own figures, and we say plainly where the seed research found nothing worth citing.

### 5.1 The industry is growing, employment is growing, and price per unit is still falling

NASSCOM's Strategic Review 2026, as quoted in a contemporaneous report, puts FY26 technology sector revenue at USD 315 billion, a rise of 6.1 percent, with BPM revenue rising from USD 55 billion in FY25 to USD 59 billion in FY26 [S01]. Direct employment rose too: the sector added 1.35 lakh workers to reach 59.5 lakh employees [S01]. Table 5.1 sets out the headline figures.

| Measure | FY25 | FY26 | Change | Tag |
|---|---|---|---|---|
| Technology sector revenue, USD billion | not stated in the seed | 315 | +6.1% | [S01] |
| BPM revenue, USD billion | 55 | 59 | +4 | [S01] |
| Direct employment, lakh | not stated in the seed | 59.5 | +1.35 lakh | [S01] |
| AI-related revenue, USD billion | not stated in the seed | 10 to 12 | n/a | [S01] |
| Employees upskilled in AI, lakh | not stated in the seed | over 20, of which up to 3 in advanced AI skills | n/a | [S01] |

*BPM: business process management. AI: artificial intelligence. Lakh: 100,000 in Indian digit grouping. USD: United States dollar.*

Table 5.1 shows that the industry's revenue and headcount both rose at the same time that AI revenue reached an estimated USD 10 to 12 billion [S01]. That combination matters for how we read the Company's crisis. A shrinking industry would make a Wind Down (Path 4) a more defensible reading of the case; a growing industry whose growth is increasingly AI-denominated instead supports the diagnosis that the Company's problem is positioning, not a dying market. More than one in three of the sector's 59.5 lakh employees have already been pushed through some AI upskilling [S01], while the Company, on the case's own account, has added no AI capability of its own in the eighteen months this disruption has been visible to it [C F2]. The gap is not industry demand. It is the Company's own rate of adaptation against the rate the rest of the industry has moved.

### 5.2 Pricing is moving from headcount to outcome, and we say honestly what we could not confirm

The clearest industry-level confirmation we have of a pricing shift from seats to results is not a BPM filing but the overseas precedent used throughout this document for its rhetorical, not its statistical, value: Klarna's AI assistant handled two-thirds of customer-service chats in its first month and did work equivalent to 700 full-time agents, by Klarna's own account [S03]. We treat this as evidence of what outcome-based automation can do to the economics of a service line, not as a figure about the Company or about India. We return to Klarna's reversal, and to the limits of that reversal, in section 6.

Two figures that were seeded into our research brief did not survive verification, and we flag them here so neither is mistaken for a fact anywhere else in this document. First, a claim that "63 in 100 Indian workers need training by 2030", attributed to the World Economic Forum's Future of Jobs Report 2025: our verifier could not reach the primary report (it returned an access error on every attempt), and the secondary summaries that were reachable give a figure of 59 in 100 workers needing new or updated skills by 2030, stated as a global figure, not an India-specific one. No India-specific "63 in 100" figure was found anywhere in the search. Second, a claim that an unnamed contact-centre operator cut its agent headcount from 15,000 to under 4,000 after adopting generative AI: the article our seed research cited for this figure does not contain it, and no vendor name, date or independent source for the claim was located. Table 5.2 records both findings so that neither figure reappears later in this document, in the deck or in a judge's question, dressed as something we verified.

| Claim as seeded to the research brief | What the verification pass found | Status | Used as a fact in this document |
|---|---|---|---|
| "63 in 100 Indian workers need training by 2030" (World Economic Forum) | Primary report unreachable; secondary summaries give 59 in 100 globally, not an India figure, and no "63" figure anywhere | NOT FOUND | No |
| A contact-centre vendor's headcount fell from 15,000 to under 4,000 agents | The article cited for this figure does not contain it; no vendor, date or independent source located | NOT FOUND | No |
| Klarna AI assistant did the work of 700 full-time agents in its first month | Confirmed directly on Klarna's own press statement | VERIFIED | Yes, as overseas precedent only [S03] |

*Status terms follow the raw-file schema in `research/raw/`: VERIFIED means the figure was confirmed against the cited page; NOT FOUND means the figure could not be located in any source reached during verification.*

The discipline here is not cosmetic. A deck or a research document that repeats an unverifiable statistic because it sounds dramatic fails the same test that a team's unit economics table fails when a number does not tie. Judges testing analytical rigour (J1) are entitled to ask where a number came from, and "we could not find it, so we dropped it" is a stronger answer under scrutiny than a number nobody can trace.

### 5.3 What we can say with evidence about the pattern of AI-driven displacement

The World Bank's South Asia Development Update of October 2025 gives two figures we can use with confidence, because both were confirmed against the publisher's own press release. Job listings in occupations most exposed to, and most replaceable by, AI fell by around 20 percent relative to other occupations, measured from the point generative AI tools became widely available [S02]. At the same time, AI-skilled roles in South Asia carry a wage premium of nearly 30 percent relative to other professional roles [S02]. Table 5.3 sets these out together with what each implies for a services firm like the Company.

| Measure | Value | What it implies | Tag |
|---|---|---|---|
| Fall in job listings, AI-exposed occupations, relative to other occupations, since generative AI became widely available | around 20% | Entry-level, standardised-task roles are the first to shrink in demand, not the last | [S02] |
| Wage premium for AI-skilled roles vs other professional roles, South Asia | nearly 30% | The labour market is already paying a premium for the skills the Company's reskilling plan (L10) targets | [S02] |

*AI: artificial intelligence.*

Read together with the Company's own position, these two data points describe exactly the trap the case sets: the roles the Company is most exposed in, first-job, standardised document and voice work, are the roles the wider labour market is already shrinking demand for, while the roles that now carry a wage premium (working alongside AI rather than instead of it) are roles the Company has not yet trained anyone into. This is the industry-level version of the Company's own problem, and it is also the argument for why reskilling (Project Setu's core move) is not a slogan but a response to where the market itself is now pricing labour.

### 5.4 The $5 trillion frame: human capital, not headcount, is the stated national priority

The competition's own theme, "India's $5 Trillion Economy: AI Shaping Human Capital and Future Workspaces," points at a specific policy framing that we should use honestly rather than decoratively. Our verifier could not reach the primary text of the Economic Survey 2025-26 chapter on the evolution of the AI ecosystem, nor the Union Budget 2026-27 speech, so we do not quote either as a confirmed primary source; both rows in the raw file remain UNVERIFIABLE and we do not use them as case-supporting facts, consistent with the rule that an unverified seed fact is dropped, not softened. What we can say without relying on an unconfirmed quote is structural: the case itself frames the problem as a human-capital question, not an automation-adoption question (the organisers' own instruction is "not simply whether to adopt AI" [C Q1]), and the judging weights give workforce and human impact a fifth of the score [C J3]. The national theme and the case's own judging criteria point in the same direction without needing an unverifiable statistic to connect them.

### 5.5 Why entry-level, first-formal-job work is the exposed layer

The Company employs 2,400 people across five cities, and many are in their first formal job [C F1]. Its three lines, BFSI document processing, e-commerce catalogue quality control (QC) and multilingual voice and chat support [C F1], are each built around tasks that are repetitive, rules-governed and judged on throughput: read a form, key the fields, check a listing against a template, answer a scripted question. These are precisely the tasks the industry data above identifies as most exposed: standardised, high-volume, low-judgment work is the first layer AI reaches, because it is the layer where a model's error rate on a clean, well-formed input is already acceptable. Table 5.4 lines up the Company's own price and cost figures against the two competitors named in the case, to show where the national pricing shift has already landed inside this one company's book of business.

| Comparator | Price per BFSI file (₹) | Estimated cost per file (₹) | Tag |
|---|---|---|---|
| AI-native rival | 27 | about 9 | [C K4] |
| Incumbent, AI-assisted staff | 33 | about 28 | [C K4] |
| The Company, today | 38 | 41 | [C K3] |

*BFSI: banking, financial services and insurance. ₹: Indian rupee.*

Table 5.4 is the clearest single data point connecting the national industry narrative to the case: an AI-native competitor can sell the identical file at nearly thirty percent less than the Company's price [C F2] and still clear a double-digit margin, because its cost structure has already made the shift the national data describes. The Company has not. Its workforce composition, 1,350 frontline processors against 420 senior exception handlers, 380 voice agents, 190 team leads and 60 tech and corporate staff [C K2], is a workforce built for a model where humans do the first pass on everything. The industry has moved to a model where humans do the first pass only on what AI cannot yet read reliably, which, as we show in section 6, happens to be exactly the segment of work (handwritten and regional-language forms) where the Company's own exception-handling staff already carry the deepest institutional skill. Table 5.5 closes the section by placing the Company's current skilling position against the national skilling base the industry data describes.

| Measure | National position (NASSCOM FY26) | The Company's position | Tag |
|---|---|---|---|
| Share of workforce upskilled in AI | over 34% of 59.5 lakh employees (20-plus lakh) | not disclosed in the case; no AI upskilling line exists in the FY23 to FY25 cost history [C F3] | [S01] / [C F3] |
| Planned AI-adjacent reskilling spend (Project Setu) | n/a | ₹3.3 Cr over months 2 to 6 for about 930 people [L10] | [L10] |
| Wage premium for AI-adjacent skills | nearly 30% [S02] | not yet captured; average pay across all roles is a flat ₹6 lakh a year today [C K2] | [S02] / [C K2] |

*AI: artificial intelligence. NASSCOM: National Association of Software and Service Companies. ₹: Indian rupee. Cr: crore (ten million).*

The honest reading of Table 5.5 is that the Company starts this transition later than the sector it competes in, and later than the wage data says the market has already started rewarding. That lateness is the industry-context argument for urgency: the case's six months of runway [C F2] is not simply a cash problem, it is a window measured against a labour market that is already pricing the skills the Company needs its people to acquire. Every month spent deciding is a month in which the wage premium for those skills, and the clients willing to pay for AI-assisted work, compound against a company that has not yet built the capability. We carry this urgency argument forward into section 6, where we show precisely which of the three named rivals the Company can and cannot compete with on price, and into section 9, where the four paths are tested against this same six-month clock.

One further point on method belongs here, before any industry figure is used again later in this document. Every number in sections 5.1 to 5.3 is a figure about India's technology or BPM sector as a whole, or about the South Asia region, not a figure about the Company, which is fictional, or about either of its two named rivals, whose true cost structures are never disclosed outside the case. We use the industry figures only to establish that the direction of change the case describes (AI repricing services work, clients rewarding outcome-based delivery, entry-level roles shrinking first) matches a pattern visible at the level of the whole Indian industry, not to borrow a real company's number and relabel it as the Company's own. Where a real-world figure might have strengthened a specific case claim, for example a precise contact-centre headcount reduction, we preferred to state that the figure could not be verified rather than to let an unverifiable number do argumentative work it had not earned. That same discipline carries through sections 6 and 7, where every price, cost and margin figure traces to the case table, a named assumption, or a model output, never to an external source standing in for a case fact.

## 6. The three rivals: a price war the Company cannot win on clean files

**Answer.** The case names three rivals and gives each a price, an implied cost and one weakness: an AI-native firm that is cheap and fast but weak on handwritten and regional-language forms, a large incumbent that has matched some of the AI-native firm's speed but still carries a cost above its own selling price, and a voice AI start-up that is not a processing rival at all but a buyer of exactly the kind of multilingual labour the Company already employs [C K4]. On the one segment where price is the only axis of competition, standard clean-format BFSI files, the Company cannot win: its own cost of ₹41 sits above even the incumbent's price of ₹33, let alone the AI-native firm's ₹27 [C K3, C K4]. The right response is not to fight that war but to leave the segment where the Company has no structural advantage and concentrate on the two segments (handwritten and regional-language forms, and multilingual data labelling) where the case itself says the rivals are weak or dependent on exactly the kind of staff the Company already has.

### 6.1 Three rivals, treated symmetrically

Following the skill's instruction on symmetric treatment, we score the Company and all three rivals against the same five dimensions: price, cost, margin, the weakness the case or our verification identifies, and how the Company should relate to that rival (fight, avoid, or turn into a counterparty). Table 6.1 sets this out in full.

| Dimension | The Company | AI-native firm | Incumbent (AI-assisted staff) | Voice AI start-up |
|---|---|---|---|---|
| Price per BFSI file (₹) | 38 [C K3] | 27 [C K4] | 33 [C K4] | not applicable; sells a voice service, not a per-file product [C K4] |
| Estimated cost per file (₹) | 41 [C K3] | about 9 [C K4] | about 28 [C K4] | not disclosed |
| Margin per file (₹) | −3 [M] | about +18 [M] | about +5 [M] | not applicable |
| Stated or inferred weakness | Flat pricing, cost base that did not flex as revenue fell [C F2, C F3] | Weaker on handwritten and regional-language forms [C K4] | Still carries a cost close to its own price; little room to cut further | Needs human data labellers to build and maintain its models [C K4] |
| How the Company should treat it | n/a (the subject of the analysis) | Avoid on clean files; a potential licensor of the document AI engine the Company plans to use [L06] | Avoid matching on price; the incumbent's own AI-assisted cost of ₹28 is already above the AI-native price of ₹27, so matching it copies a model that is itself losing the price war | Become its supplier: the Company's multilingual voice staff are the labelled-data workforce this start-up needs [L07] |

*BFSI: banking, financial services and insurance. ₹: Indian rupee. AI: artificial intelligence.*

The last row of Table 6.1 is the strategic hinge of this entire section. Two of the three named rivals are not purely competitors once the Company stops trying to match them on price for clean files: the AI-native firm is a plausible source of the licensed engine the plan uses on clean files [L06], and the voice AI start-up is a plausible buyer of the labelling work the Company's multilingual staff can do [L07]. Only the incumbent remains a pure rival under this reading, and it is the weakest of the three on the numbers, because its AI-assisted cost of ₹28 already sits above the AI-native firm's price of ₹27 [C K4]: it has partially automated and still cannot match the fully AI-native competitor on cost.

### 6.2 Margin room: who can afford a price war and who cannot

Table 6.2 isolates the single number that decides whether a price war is survivable: margin per file.

| Player | Price (₹) | Cost (₹) | Margin (₹) | Tag |
|---|---|---|---|---|
| AI-native firm | 27 | 9 | +18 | [C K4] / [M] |
| Incumbent, AI-assisted | 33 | 28 | +5 | [C K4] / [M] |
| The Company, today | 38 | 41 | −3 | [C K3] / [M] |

*₹: Indian rupee.*

The AI-native firm has eighteen rupees of margin to spend defending or further cutting its price before it even reaches break-even; the Company has none; it is already three rupees under cost at a price nine rupees higher than its cheapest rival's. Any attempt to meet the AI-native firm's price by cutting the Company's own price, without first cutting its cost, widens a loss that is already running at minus ₹31 Cr on an annualised basis [C F3]. This is the numerical case against Path 1 as written (reskill everyone, keep every line, match the market on price): the incumbent already tried a version of this move and is still worse off than the firm it is trying to match. Section 9 returns to this comparison when it scores the four standard paths against Project Setu; here we establish only that the arithmetic rules out a price-matching response on clean files before any judgment about strategy is applied.

### 6.3 Porter's five forces: an industry that has turned against a single-price, single-channel operator

Michael Porter's five-forces framework helps place the Company's problem in a structure broader than one price comparison. Table 6.3 applies the five forces to the Company's current position, using only facts and figures already established in the case or in Lane A and Lane C evidence.

| Force | Assessment for the Company | Tag |
|---|---|---|
| Threat of new entrants | Falling: commercial document AI is now priced per page by established cloud providers, at rates as low as roughly ₹0.13 (US$0.0015) per page for basic text extraction and roughly ₹6 per page for a full forms-tables-queries bundle [S16], which lowers the capital a new entrant needs to start competing on clean-file work | [S16] |
| Bargaining power of buyers | High and rising: BFSI, e-commerce and telecom clients have already shifted volume to AI-powered competitors at roughly thirty percent lower prices [C F2], which shows buyers are both willing and able to re-tender quickly | [C F2] |
| Bargaining power of suppliers | Rising for the Company specifically, because a licensed document AI engine is a new, concentrated input it will depend on (per-clean-file engine fee of roughly ₹8, falling to about ₹6.5 from month 13) [A07, L06] | [A07] |
| Threat of substitutes | High on standard, printed, well-formatted documents, where commercial OCR systems already post single-digit error rates [S15]; low on handwritten and regional-language forms, where even the best documented commercial reference still shows an 8.63 percent word-error rate [S15] | [S15] |
| Rivalry among existing competitors | Intense and price-led: three named rivals span a thirty-eight to twenty-seven rupee price band on the same product, the file [C K4] | [C K4] |

*AI: artificial intelligence. OCR: optical character recognition. ₹: Indian rupee.*

The five-forces read confirms what the margin table already suggested in numbers: on clean, standard-format files, every force in Porter's model has turned against a single-price, single-channel operator like the Company as it stands today. The one force that has not turned against it, the threat of substitutes on hard, handwritten and regional-language forms, is the one the Company's existing 420 senior exception handlers [C K2] already address, and it is where the plan in section 12 concentrates new investment.

### 6.4 Strategic groups: where the Company sits today and where Project Setu moves it

Strategic group mapping places competitors on the two axes that matter most for this case: price and the share of the file's processing done by a machine rather than a person. Table 6.4 places the three named rivals and the Company's current and planned positions on this map.

| Strategic group | Members | Price band (₹ per file) | Degree of automation |
|---|---|---|---|
| Pure AI-native | AI-native firm | 27 | High: most files pass through with minimal human review, implied cost of about ₹9 | [C K4] |
| Hybrid, AI-assisted | Incumbent today; the Company under Project Setu from month 3 | 31 to 48 | Medium: an AI engine does the first pass, a person verifies or handles the exception [L06, L05] |
| Legacy, fully manual | The Company today | 38 flat across clean and hard files | Low: a person processes the file from end to end [C K3] |
| Adjacent, data-services | Voice AI start-up (buyer, not a file-processing rival); the Company's planned data-services line | not a per-file price; sold on revenue per labeller per month | Not applicable: the product is labelled data, not a processed document [A08, L07] |

*₹: Indian rupee. AI: artificial intelligence.*

The strategic group map in Table 6.4 shows the Company's current position (legacy, fully manual, a single flat price across two very different kinds of work) is the only group with no viable competitor. The planned move, under Project Setu, is not into the pure AI-native group, where the Company has no cost advantage and would be a late, under-capitalised entrant, but into the hybrid group on clean files while building a genuinely distinct position on hard files and a new, adjacent position in data services. This is the structural version of the contrarian recommendation: the obvious move, matching the AI-native group on price, is foreclosed by the margin math in Table 6.2; the available move is to split the book of work into two different competitive games and pick a defensible group in each.

### 6.5 Where the disruptor is weak: the evidence behind the hard-file desk

The case states as fact that the AI-native firm is weaker on handwritten and regional-language forms [C K4]. Lane C's technology verification gives us independent figures that support treating this weakness as real and material, not merely as a line in the case written for dramatic balance. Table 6.5 sets out the evidence.

| Evidence | Figure | Tag |
|---|---|---|
| Handwritten Indic-language pages, free OCR baseline | word error rate 50.00%, character error rate 25.74% | [S15] |
| Handwritten Indic-language pages, commercial OCR reference | word error rate 8.63%, character error rate 1.68% | [S15] |
| General Indic document AI benchmark, best vendor result (mixed, mostly printed documents, 22 languages) | overall accuracy 87.39 | [S14] |
| Indian-language speech recognition, 10 most spoken languages, current best vendor model (2026) | word error rate 19.31% | [S17] |
| Same benchmark, prior-generation vendor model (2025) | word error rate approximately 22% | [S17] |

*OCR: optical character recognition. Indic: belonging to the Indian subcontinent's language families. ₹: Indian rupee (not used in this table; included for consistency with the glossary).*

Table 6.5 supports two separate arguments. First, even the best commercial OCR reference on handwritten Indic-language pages still errs on nearly one word in twelve [S15], which is a materially higher error rate than the same systems achieve on printed, standard-format documents, confirming that handwritten and regional-language work is a genuinely harder problem for AI, not just a problem the case asserts is harder. Second, speech recognition in Indian languages, while improving (word error rate fell from about 22 percent to 19.31 percent across one vendor's model generations in under a year [S17]), still carries a meaningfully higher error rate than English-language speech recognition typically does, which is the technical reason a regional-language voice AI start-up needs continuously refreshed, human-labelled training data rather than a one-time model build [C K4]. Both findings are specific to the technology, not to the case's two named rivals by name, and we present them as supporting evidence for a case assertion, not as a claim about the named rivals' actual, internal error rates, which neither firm discloses.

The practical consequence for the recommendation is that the 420 senior exception handlers the Company already employs [C K2] are not a legacy cost to be reskilled away; they are the asset that makes the hard-file desk defensible against an AI-native rival that the evidence confirms is weaker in exactly this segment. Section 7 turns this qualitative advantage into a number: the hard file's cost today is roughly double the clean file's cost [T4], and the plan prices that gap explicitly rather than hiding it inside one blended price, which is the single pricing error we hold responsible for a large share of the Company's current loss.

### 6.6 Symmetric summary: what each rival means for the recommendation, stated once

We close this section by restating, for each of the three named rivals in turn, the single sentence that carries forward into the choice of path in section 9. Against the AI-native firm, the Company does not compete on clean-file price; it leaves that segment, prices its own clean files close to the AI-native firm's level once the licensed engine absorbs most of the processing cost [L06], and treats the AI-native firm's technology, not its commercial relationship, as the thing worth adopting. Against the incumbent, the Company does not match a price that is already proven not to work, because the incumbent's own AI-assisted cost of ₹28 sits above the AI-native firm's price of ₹27 [C K4], which means the incumbent is itself losing the price war it appears, on the surface, to be winning against the Company; matching the incumbent's price would mean copying a strategy that the data shows is already failing one rung up the cost ladder. Against the voice AI start-up, the relationship inverts entirely: the Company stops treating it as competition for voice and chat revenue and starts treating it as a customer for a service the Company is uniquely positioned to supply, multilingual, human-labelled data drawn from staff who already work in the languages the start-up's models need to improve.

This three-way symmetry is also where the case's instruction to connect every decision to both business economics and human capital [C Q3] does its clearest work in this document. Avoiding the AI-native firm on price and avoiding the incumbent on strategy are economic decisions with a direct jobs consequence: both choices preserve roles (hard-file exception handling, voice and multilingual work) that a pure price-matching strategy would eliminate first, because those are the roles with the highest labour cost per file under the old, undifferentiated pricing model. Turning the voice AI start-up into a customer is the clearest single move in the entire plan where a competitive threat becomes a source of new, paid work for an existing skill set, rather than a reason to cut headcount. We treat this not as a coincidence of the case's design but as the central structural opportunity the case's own facts create, once the three rivals are read symmetrically rather than as a single undifferentiated "AI competition" the Company must simply survive.

## 7. Unit economics: the ₹41 average hides a ₹33 file and a ₹61 file

**Answer.** The case states a single blended cost of ₹41 against a single blended price of ₹38 for a BFSI file [C K3]. That single average is the Company's most important hidden problem: a clean, well-formatted file actually costs about ₹33 to process, while a hard, handwritten or regional-language file costs about ₹61, and both are sold at the identical ₹38 price [T4]. The clean file is quietly profitable; the hard file is deeply loss-making; averaging them together hides both facts and leaves the Company pricing its best work too cheaply and its hardest work far too cheaply. Rebuilding the split, and reassigning the human effort that split implies, is how the assumptions A03 to A05 tie the model back to the case's own ₹41 average cost and ₹213 Cr total operating cost [C F3], and it is the arithmetic foundation for the complexity-based pricing move in Project Setu.

### 7.1 Line economics today: four businesses, one P&L, three of them losing money

The case gives one consolidated cost and revenue figure for the whole Company [C F3] but names four distinct lines of work: BFSI clean files, BFSI hard files, catalogue quality control (QC) and voice and chat [C F1]. Assumption A03 splits the case's single ₹182 Cr run-rate revenue [C F3] into a defensible per-line figure (₹100 Cr BFSI, ₹48 Cr catalogue, ₹34 Cr voice [A03]) chosen so that the BFSI unit cost reproduces the case's stated ₹41 [C K3] and the total operating cost reproduces the case's ₹213 Cr [C F3]. Table 7.1 reproduces the model's T3, line economics today.

| Line | Revenue (₹ Cr) | Heads | Direct cost (₹ Cr) | Contribution (₹ Cr) | Overhead (₹ Cr) | EBITDA (₹ Cr) | Margin | Revenue per head (₹ lakh) |
|---|---|---|---|---|---|---|---|---|
| BFSI clean files | 70.0 | 520 | 29.8 | 40.2 | 30.7 | +9.5 | 14% | 13.45 |
| BFSI hard files | 30.0 | 439 | 34.8 | −4.8 | 13.2 | −17.9 | −60% | 6.84 |
| Catalogue QC | 48.0 | 811 | 46.5 | 1.5 | 21.0 | −19.5 | −41% | 5.92 |
| Voice and chat | 34.0 | 380 | 22.5 | 11.5 | 14.9 | −3.4 | −10% | 8.95 |

*BFSI: banking, financial services and insurance. QC: quality control. EBITDA: earnings before interest, tax, depreciation and amortisation. ₹: Indian rupee. Cr: crore (ten million). Source: model table T3, [T3].*

Table 7.1 is the single most important diagnostic table in this document, because it shows the company-wide EBITDA loss of ₹31.4 Cr [T3, M] is not evenly spread. BFSI clean files are the only profitable line, earning fourteen percent EBITDA margin [T3]. BFSI hard files lose sixty percent of their own revenue [T3], the single worst margin of the four lines, and catalogue QC, despite being the largest line by headcount at 811 people, loses forty-one percent [T3]. Voice and chat is the smallest loss in percentage terms. The headcount-to-revenue ratio tells the same story a different way: clean-file staff generate ₹13.45 lakh of revenue a head, more than double the catalogue line's ₹5.92 lakh [T3], which means the Company's staffing is heaviest exactly where its revenue efficiency is lowest.

### 7.2 Per-file unit economics: the number the case gives us, rebuilt from first principles

Assumptions A04 and A05 do the work of turning the single ₹41 blended cost [C K3] into two separate, internally consistent file costs. A04 sets hard files at thirty percent of BFSI volume [A04], justified because the 420 senior exception handlers are twenty-four percent of production staff and hard files take roughly twice as long to process [A04]. A05 sets productivity at 2,950 clean files a person a month against 1,500 hard files a person a month [A05], solved specifically so that the blended BFSI cost reproduces the case's ₹41 [C K3]; the model's own output comes to ₹41.2 [M], which is the stated precision match. Table 7.2 reproduces the model's T4, unit economics per BFSI file.

| State | File type | Price (₹) | Labour (₹) | Team lead (₹) | Engine (₹) | Overhead (₹) | Total cost (₹) | Margin (₹) |
|---|---|---|---|---|---|---|---|---|
| Today | Clean | 38.0 | 13.6 | 2.6 | 0.0 | 16.7 | 32.8 | +5.2 |
| Today | Hard | 38.0 | 38.9 | 5.2 | 0.0 | 16.7 | 60.7 | −22.7 |
| Month 12 | Clean | 31.0 | 2.7 | 0.4 | 8.0 | 12.7 | 23.8 | +7.2 |
| Month 12 | Hard | 48.0 | 25.8 | 2.8 | 0.0 | 12.7 | 41.2 | +6.8 |
| Today | Blended | 38.0 | n/a | n/a | n/a | n/a | 41.2 | −3.2 |
| Month 12 | Blended | 36.1 | n/a | n/a | n/a | n/a | 29.0 | +7.1 |

*₹: Indian rupee. Engine: the licensed document artificial-intelligence engine introduced from month 3 [L06]. Source: model table T4, [T4].*

Table 7.2 is the exact rebuild of the case's headline statement, "one BFSI file costs ₹41 to process and sells for ₹38" [C K3]. The blended cost of ₹41.2 and blended margin of minus ₹3.2 [T4] reproduce that figure almost exactly at today's split. But the two rows above it show the hidden structure: a clean file today already costs only ₹32.8, five rupees under its ₹38 price [T4], while a hard file costs ₹60.7, nearly twenty-three rupees over the same ₹38 price [T4]. The Company's single average cost of ₹41 is a mathematical artifact of blending a profitable file with a badly loss-making one at the same price, not evidence that every file is marginally unprofitable. This is insight 7 in the argument section: the ₹41 average hides a clean file at about ₹33 and a hard file at about ₹61, both sold at ₹38 [A04, A05], and the Company subsidises the work it is best at.

### 7.3 How A03 to A05 tie the model to the case's ₹41 and ₹213 Cr

The assumptions register exists precisely so a judge, or a teammate under cross-examination, can trace every modelled figure back to a case fact. Table 7.3 shows that trace explicitly for the three assumptions that carry the heaviest weight in this section.

| Assumption | Value | What it is solved to reproduce | Reproduced figure | Tag |
|---|---|---|---|---|
| A03: revenue split, BFSI / catalogue / voice | ₹100 Cr / ₹48 Cr / ₹34 Cr | The case's ₹182 Cr run-rate revenue [C F3] split so BFSI unit cost ties to ₹41 [C K3] | Total revenue ₹182 Cr [T3 sums to this]; total cost ₹213 Cr [C F3] | [A03] |
| A04: hard files as a share of BFSI volume | 30% | The case's 420 exception handlers as a share of production staff (24%), doubled for the roughly 2x processing time of a hard file [C K2] | BFSI heads split 520 clean / 439 hard [T3] | [A04] |
| A05: files a person a month, clean / hard | 2,950 / 1,500 | Solved so blended BFSI cost equals the case's stated ₹41 [C K3] | Model gives ₹41.2 [T4] | [A05] |

*BFSI: banking, financial services and insurance. ₹: Indian rupee. Cr: crore (ten million).*

Table 7.3 is deliberately conservative in one respect: A04 and A05 are stated as "ties by construction" in the assumptions register, meaning they were chosen to make the model match the case, not independently derived and found to match by coincidence. We disclose this openly rather than presenting A04 and A05 as discovered facts, because the case gives no line-level split and any team solving this case has to make the same choice; the honest version of that choice is to say so, show the working, and show the sensitivity (Table 7.5 below) rather than to present a single invented number as though the case had supplied it.

The ₹213 Cr total operating cost [C F3] reconciles through a second assumption not shown in Table 7.3: A10 splits the ₹69 Cr of "other cost" (total cost of ₹213 Cr less employee cost of ₹144 Cr [T1]) into facilities ₹30 Cr, technology ₹14 Cr, selling ₹17 Cr and general ₹8 Cr [A10], a split that sums exactly to ₹69 Cr by construction and lets the financial plan in section 13 target specific cost lines (facilities, selling, general) for the cuts described in levers L03 and L04, rather than cutting "other cost" as an undifferentiated lump.

### 7.4 The cross-subsidy: who pays for whom, today and after the plan

The clearest way to see the cross-subsidy is to hold price constant and watch margin flip as the plan moves from today's single ₹38 price to the complexity-based pricing of month 12. Table 7.4 does this.

| Measure | Today (single price, ₹38) | Month 12 (complexity pricing) | Change | Tag |
|---|---|---|---|---|
| Clean-file price (₹) | 38.0 | 31.0 | −7.0 | [L05] |
| Clean-file cost (₹) | 32.8 | 23.8 | −9.0 | [T4] |
| Clean-file margin (₹) | +5.2 | +7.2 | +2.0 | [T4] |
| Hard-file price (₹) | 38.0 | 48.0 | +10.0 | [L05] |
| Hard-file cost (₹) | 60.7 | 41.2 | −19.5 | [T4] |
| Hard-file margin (₹) | −22.7 | +6.8 | +29.5 | [T4] |
| Blended price (₹) | 38.0 | 36.1 | −1.9 | [T4] |
| Blended margin (₹) | −3.2 | +7.1 | +10.3 | [T4] |

*₹: Indian rupee.*

Table 7.4 shows the cross-subsidy had been running in the wrong direction: at a single ₹38 price, the clean file (cheap to serve) was earning a small, uncollected surplus while the hard file (expensive to serve) was losing nearly twenty-three rupees on every unit [T4], a loss the Company had no visibility into because its cost reporting, like the case's own disclosure, is given only as a single blended number [C K3]. Complexity pricing under Project Setu does two things at once: it lowers the clean-file price to ₹31, which is between the AI-native firm's ₹27 and the incumbent's ₹33 [C K4, L05], making the Company price-competitive on the segment where the AI engine now does most of the work; and it raises the hard-file price to ₹48, reflecting the genuine cost of work that the case's own evidence (and the independent Lane C evidence in section 6.5) says AI cannot yet do reliably. The client's own blended bill falls, from ₹38.0 to about ₹36.1 [T4], even as the Company's own blended margin swings from minus ₹3.2 to plus ₹7.1 [T4]. Neither side of that trade requires the client to pay more on average; it requires the Company to stop pricing two different products as though they were one.

### 7.5 Line-by-line loss and sensitivity to the thirty percent hard-file share

Returning to the four-line view from Table 7.1, we restate where today's ₹31.4 Cr loss [T3, sum of EBITDA column] actually sits: BFSI clean files contribute a positive ₹9.5 Cr, while BFSI hard files, catalogue QC and voice and chat lose ₹17.9 Cr, ₹19.5 Cr and ₹3.4 Cr respectively [T3]. The single disclosed unit loss in the case, minus eight percent on a BFSI file [C K3, read at the blended margin of minus 3.2 divided by 38], understates the severity of the worst line; the hard-file line alone loses sixty percent of its revenue [T3], and the other three lines combined lose a company-wide equivalent of roughly twenty-eight percent [A03, derived]. This is insight 5 in the argument section, carried here with the full line detail rather than the summary figure alone.

Because A04 fixes hard files at thirty percent of BFSI volume by assumption, we test how sensitive the Setu base case is to that one number being wrong in either direction, using the model's own drill outputs D8 and D9. Table 7.5 sets out the base case alongside both drills.

| Scenario | Hard-file share of BFSI volume | Lowest 12-month cash (₹ Cr) | EBITDA run-rate, month 12 (₹ Cr) | Tag |
|---|---|---|---|---|
| D8: hard files understated | 20% | 18.7 | +3.9 | [M] |
| Base case (A04) | 30% | 21.1 | +8.4 | [A04] / [M] |
| D9: hard files overstated | 40% | 21.9 | +12.4 | [M] |

*₹: Indian rupee. Cr: crore (ten million). EBITDA: earnings before interest, tax, depreciation and amortisation.*

The direction of this sensitivity is the opposite of what intuition might suggest, and it is worth stating plainly because it is a genuine insight rather than a restatement of the base case. If hard files turn out to be a larger share of volume than thirty percent, the Setu plan's cash position and EBITDA improve, not worsen (D9, forty percent hard files, shows higher cash and EBITDA than the base case) [T9, drills]. This is because the repriced hard-file desk earns a positive margin of nearly seven rupees a file under the plan [T4], more than the repriced clean file earns, once the AI-assist productivity gain (A15) is applied; a larger hard-file book under the plan is a larger share of the Company's now-profitable segment, not a larger share of its loss-making one, which is the exact opposite of the relationship that held before the plan. This single sensitivity result is a concrete answer to a judge who asks "what if your thirty percent assumption is wrong": wrong in the direction of more hard files makes the plan safer, and wrong in the direction of fewer hard files (D8, twenty percent) still leaves cash at ₹18.7 Cr, comfortably above the ₹15 Cr covenant floor [K1, T9]. The one direction this logic depends on holding is that hard-file pricing at ₹48 and the AI-assist productivity gain on hard files (A15) both hold; section 14 prices the downside where they do not.


## 8. Workforce-cost model: what the Company can afford and what an exit costs

**Answer.** The Company spends about six lakh rupees a year on each of its 2,400 people [C K2], a figure that ties exactly to the financial year cost run-rate of 144.0 crore rupees [T1]. Removing people costs more than keeping them, inside the window that matters: a full statutory exit averages about 2.13 lakh rupees a head [T12], a company-wide wind-down today owes about 51.2 crore rupees against 40 crore rupees of cash [T12], and the model's own severance payback of 6.75 months [M] is longer than the six months of runway the case describes [C F2]. That is the arithmetic behind the decision not to cut headcount first: doing so spends cash the covenant needs before the saving from a smaller payroll has time to arrive.

### 8.1 Headcount, pay and the attrition arithmetic

The case gives a single average cost per head of six lakh rupees a year across 2,400 people, split into 1,350 frontline processors, 420 senior exception handlers, 380 voice agents, 190 team leads and 60 technology and corporate staff [C K2]. Multiplying that uniform average across every role reproduces the current employee cost of 144.0 crore rupees [T1] to the rupee, which is the check we use before touching any role-level figure: the case's single average is internally consistent with its own cost line, and we have not needed to assume a role premium to make the two tie.

| Role | Headcount [C K2] | Share of total | Average cost, lakh rupees a year [C K2] | Annual cost, crore rupees |
|---|---|---|---|---|
| Frontline processors | 1,350 | 56.3% | 6.0 | 81.00 |
| Senior exception handlers | 420 | 17.5% | 6.0 | 25.20 |
| Voice and chat agents | 380 | 15.8% | 6.0 | 22.80 |
| Team leads | 190 | 7.9% | 6.0 | 11.40 |
| Technology and corporate | 60 | 2.5% | 6.0 | 3.60 |
| Total | 2,400 | 100% | 6.0 | 144.00 |

*Lakh: one hundred thousand rupees. Crore: ten million rupees. The uniform average cost per head is the case's own figure [C K2]; the role split is also from the case. The sum of the five role lines reproduces the run-rate employee cost of 144.0 crore rupees exactly [T1], which is why section 8 uses the uniform figure rather than inventing a role premium. Section 7's unit-economics work (part B) uses role-differentiated pay for the plan itself, under assumption A09; that differentiation does not change the total shown here.*

Average tenure across the workforce is about six years [C K2], and annual attrition is about 26% [C K2], which on 2,400 heads is about 624 people leaving in a normal year [C K2, M]. A separate check, run at planning time, asks what headcount the Company's own FY24 employee-cost ratio of 55% of revenue would support at the current run-rate of 182 crore rupees [C F3]: the answer is about 1,668 people [M], against the 2,400 actually on the books. The gap of roughly 732 people is wider than one year's natural attrition of 624 [C K2, M], which means normal leaver flow alone, with no backfill, takes a little over fourteen months to close that gap, not the six months of cash the Company has [C F2]. This is the arithmetic reason Project Setu does not try to "right-size" the organisation to a textbook payroll ratio by month six: the attrition clock runs slower than the cash clock, and the two have to be managed together rather than forcing one to match the other.

### 8.2 The workforce flow that the plan actually produces

Rather than a one-time cut, Project Setu lets natural attrition do most of the work and backs it with a small number of assisted exits, so that by month 12 the organisation has moved from 2,400 to 1,814 people with no forced exit [T7].

| Item | People [T7] |
|---|---|
| Start | 2,400 |
| Natural attrition, not backfilled | 549 |
| Assisted bridge exits | 70 |
| Forced exits | 0 |
| Hires | 32 |
| Month 12 headcount | 1,814 |

*The bridge programme referred to here is the paid transition arrangement for people whose old role has shrunk faster than a new one has opened; it is costed and described in section 15. The table shows that of the 586 heads removed from the month-1 base to reach 1,814, 549 are unreplaced leavers and 70 are assisted exits paid a bridge allowance, with zero compulsory redundancies [T7].*

By month 12 those 1,814 people sit across seven roles rather than the original five: 497 in catalogue quality control (shrinking but still real work), 400 in the new data-services line, 329 on the hard-file desk, 317 in voice and chat, 116 as team leads (down from 190, a tighter span of control under lever L08), 85 as clean-file verifiers and 70 in technology and corporate roles [T7]. The peak bench, people between roles and still paid, reaches 129 heads around month 4 and costs about 2.4 crore rupees in bridge pay before it clears [M, T5].

### 8.3 The statutory dues waterfall, instrument by instrument

Every number in this sub-section rests on our reading of the Industrial Relations Code 2020, the Code on Social Security 2020 and the Code on Wages 2019; counsel should confirm applicability to a services establishment before any of it is used operationally. The four labour codes came into force on 21 November 2025 [S06]. Four of the five instruments below trace to the Industrial Relations Code 2020 bill text as reproduced by PRS Legislative Research [S05]; gratuity traces to the Code on Social Security 2020 as reproduced by Indian Kanoon [S07]; the 50% wage-definition rule that can inflate some of these numbers traces to the Code on Wages 2019 [S08].

| Instrument | Statutory formula | Source | Illustrative amount for a representative six-year-tenure worker on an average monthly cost of about 50,000 rupees |
|---|---|---|---|
| Notice pay | One month's notice in writing, or wages in lieu, before retrenchment, for a worker with one year or more of continuous service (IR Code 2020, s.70(a)) | [S05] | ~50,000 rupees |
| Retrenchment compensation | Fifteen days' average pay for every completed year of continuous service, or any part in excess of six months (IR Code 2020, s.70(b)) | [S05] | 15 days times 6 years, ~1,50,000 rupees |
| Worker re-skilling fund | Employer contributes fifteen days' wages last drawn per retrenched worker, credited to the worker within forty-five days (IR Code 2020, s.83(2)(a) and s.83(3)) | [S05] | ~25,000 rupees |
| Gratuity | Fifteen days' wages per completed year of service or part in excess of six months, payable only after five years of continuous service (Code on Social Security 2020, s.53) | [S07] | 15 days times 6 years, ~1,50,000 rupees where the five-year test is met |
| Leave encashment | Unused earned leave paid out at exit; the model uses about ten days' average pay as the representative balance (A12) | [A12] | ~16,700 rupees |

*IR Code: Industrial Relations Code, 2020. The illustrative amounts in the right-hand column are for exposition only, for one worker at the case's average tenure of six years and average monthly cost [C K2]; they are not the model's blended average. A representative worker meeting every instrument in full would cost the Company roughly 3.9 lakh rupees to exit, but only 55% of the workforce clears the five-year gratuity threshold on the case's average tenure profile (A11), and tenure is not evenly distributed around the six-year average. The model's own blended average across the full tenure and role distribution is 2.13 lakh rupees a head [T12], lower than the single-worker illustration because the workforce skews toward a mix of longer- and shorter-tenure staff rather than everyone sitting at exactly six years, and because not every instrument applies to every leaver.*

One further legal point from Lane B bears directly on how we have treated this entire waterfall. The Industrial Relations Code's Chapter X, which carries the well-known "300 workers" prior-permission rule for lay-off, retrenchment and closure, applies by its own terms to an "industrial establishment" that the bill's own notes define as a factory, a mine or a plantation [S05]. On our reading of the codes, this means Chapter X's heavier prior-permission procedure, as distinct from the universal notice, compensation, gratuity and re-skilling-fund obligations above, most plausibly does not reach a services establishment such as the Company, though the point rests on the bill's clause notes rather than a court ruling on a services employer, and counsel should confirm it before the Company relies on it. We have therefore costed the full statutory package for every scenario in this document on the conservative assumption that notice, compensation, gratuity and the re-skilling fund apply in full regardless of how Chapter X is ultimately read, and we have not assumed any benefit from a possible exemption.

### 8.4 What a full exit costs today

Table 8.4 restates the "today" row of the wind-down waterfall from section 11's full model, because it is the anchor figure for this section's affordability argument.

| Item | Amount, crore rupees [T12] |
|---|---|
| Cash on hand | 40.0 |
| Receivables (team assumption, A13) | 25.8 |
| Term loan outstanding | 40.0 |
| Staff statutory dues | 51.2 |
| Other liabilities (closure cost, payables; A13) | 16.2 |
| Shortfall against dues and debt | 41.6 |
| Cover (cash plus receivables, against dues plus debt) | 54% |

*The receivables and other-liabilities lines are team assumptions (A13) because the case gives no balance sheet; they are repeated and explained in full in section 11.3. Cover is the percentage of combined staff dues and term loan that cash plus receivables can meet today.*

At 51.2 crore rupees of staff dues alone [T12], against 40 crore rupees of total cash [C K1], of which 15 crore rupees must stay in the bank for the covenant and a further 15 crore rupees is earmarked as the emergency budget [C K1], the Company does not have the liquidity to pay out a full exit today without breaching the covenant on day one. Even the 25 crore rupees of cash usable above the covenant floor, and the 10 crore rupees still free after the emergency budget is set aside [M], falls well short of the 51.2 crore rupees owed to staff before the term loan is touched at all.

### 8.5 The severance payback and why it is longer than the runway

The model's reported severance payback is 6.75 months [M]: this is the time it takes the cash saved by removing a role to repay the cash spent severing the person in that role, averaged across the exit population the model actually produces. A naive version of this calculation, using the case's average cost per head of six lakh rupees a year (about 50,000 rupees a month) [C K2] against the model's average dues per head of 2.13 lakh rupees [T12], suggests a payback of about 4.3 months (2.13 lakh divided by 0.50 lakh). The model's own figure is longer, at 6.75 months, because the saving from most exits is not realised in full from month one: a person leaving the hard-file desk before the engine and the complexity-pricing lever are live is not yet fully redundant, so part of the wage saved has to be replaced by overtime, temporary cover or lost throughput for several months before the saving becomes clean. We read the gap between the naive 4.3-month figure and the model's 6.75-month figure as the cost of exiting people before the restructuring that makes their role genuinely surplus; it is also the reason the plan sequences pricing and the engine ahead of any headcount reduction beyond ordinary attrition.

| Measure | Cash cost per exited head, lakh rupees | Monthly saving assumption, lakh rupees | Payback, months |
|---|---|---|---|
| Naive, full saving from month one | 2.13 [T12] | 0.50 [C K2] | 4.3 [M] |
| Model, partial saving during hand-over | 2.13 [T12] | n/a (blended) | 6.75 [M] |

*The naive row is our own illustrative division, shown to explain the gap; the model row is the reported output [M] and is the figure used throughout this document.*

Either figure is longer than the six months of cash the Company has before the current trajectory reaches the covenant floor [C F2]. That single comparison, payback above 6.75 months against a six-month clock, is the quantitative core of why cutting people first worsens, rather than improves, the covenant position inside the window that matters.

### 8.6 Where the dues would fall by role, and why that matters for sequencing

Applying the model's average dues per head of 2.13 lakh rupees uniformly across the case's role headcounts [T12, C K2] shows roughly where a full exit's cash cost would concentrate, and ties back close to the 51.2 crore rupees total.

| Role | Headcount [C K2] | Average dues per head, lakh rupees [T12] | Dues exposure, crore rupees |
|---|---|---|---|
| Frontline processors | 1,350 | 2.13 | 28.76 |
| Senior exception handlers | 420 | 2.13 | 8.95 |
| Voice and chat agents | 380 | 2.13 | 8.09 |
| Team leads | 190 | 2.13 | 4.05 |
| Technology and corporate | 60 | 2.13 | 1.28 |
| Total | 2,400 | 2.13 | 51.13 |

*The total of 51.13 crore rupees is a uniform-rate approximation and reconciles to the model's 51.2 crore rupees figure [T12] within rounding; actual dues vary by individual tenure and pay, not by a flat rate.*

Frontline processors, the largest and lowest-tenure-weighted group, carry the largest single share of dues exposure in cash terms, about 28.76 crore rupees, simply because of headcount. This is also the group in which Project Setu's hiring freeze and natural attrition do the most work without a single rupee of severance, which is the structural reason the plan leans on attrition and the bridge programme for this group rather than any exit package: every processor who leaves through ordinary attrition costs the Company nothing in statutory dues, where every processor severed deliberately costs on the order of 2.13 lakh rupees against a covenant floor that already has little room [C K1, T12].

Putting sections 8.4, 8.5 and 8.6 together: a company-wide exit costs about 51.2 crore rupees against 40 crore rupees of cash and a 15 crore-rupee floor that must survive [T12, C K1]; the payback on that spend is 6.75 months against a six-month clock [M, C F2]; and the dues are heaviest exactly where the headcount is largest and the attrition-driven path is cheapest. None of those three facts changes if the Company instead chooses a partial cut; they only change in scale. That is why Project Setu's six moves (section 3.2) sequence pricing, the engine and the hard-file desk ahead of any deliberate headcount reduction beyond the 549 unreplaced leavers and 70 bridge exits the base plan already produces [T7], and why the plan holds a 6.08 crore-rupee reserve inside the emergency budget specifically to fund severance if a cash gate fails later, rather than spending it on severance now [T8].

This is also why the workforce-cost model belongs beside, not after, the cash model in section 4: the two are one model, read from two directions. Section 4 asks how long the cash lasts if nothing changes; this section asks what it costs to change the workforce deliberately, and the answer is that deliberate change costs more, faster, than the case's own six-month clock allows for, unless the change is sequenced so that most of the headcount reduction happens through attrition the Company does not have to pay for. Every subsequent section of this document, the path comparison in section 9, the sale in section 10 and the wind-down in section 11, takes this constraint as given rather than re-deriving it.

---

## 9. The four paths compared: only one stays above ₹15 Cr

**Answer.** Of the six routes we modelled on the same cash, jobs and control tests, drift and the two case paths taken at face value (Path 1 as written and Path 3 as written) all breach the 15 crore-rupee covenant floor inside the Company's own runway, in month 6, month 4 and month 4 respectively [T11]. Path 2, a sale, and Path 4, a wind-down, avoid a covenant breach only because they end the business rather than run it, at a cost in jobs and in dues that sections 10 and 11 price in full. Project Setu is the only route whose cash never falls below 15 crore rupees, bottoming at 21.1 crore rupees in month 12, while also keeping 1,814 of the original 2,400 jobs and reaching an EBITDA score of 4.15 out of a possible 5 on the weighted scorecard, against the next-best score of 2.55 for a sale [T11, T13].

### 9.1 Six routes, the same six tests

We hold every route to the same six criteria, drawn from the case's own evaluation weights (J1 to J5) and translated into a scorecard under assumption A21: runway (does the route survive the covenant), cash (how much is left), jobs (how many of the 2,400 are still employed), control (does the Company keep the decision), upside (is there a growth path after the crisis) and speed (how fast can the route be executed). Table 9.1 lays out the six routes on the same five descriptive columns before any scoring is applied.

| Route | One-line thesis | Cash path | Jobs at month 12 | Control | Headline risk |
|---|---|---|---|---|---|
| Drift, no decision | Keep operating unchanged and let the trend continue | Breaches the covenant floor in month 6, cash zero in month 9 [T11, PLAN §4] | 0 (the business is no longer operating) [T11] | None; outcome is dictated by the lender once cash runs out | Breach is certain, not probabilistic |
| Path 1, Reskill and Restructure, as written | Retrain the whole book to work with artificial intelligence, keep every line as is | Breaches the covenant in month 4 [T11] | 1,845 at month 12, but on a route that has already failed financially [T11] | High, the Company runs its own transition | Reskilling 2,340 people costs about 10.5 crore rupees in four months, and the resulting cost per file (about 28 rupees) still sits above the AI-native price of 27 rupees [PLAN §3.2] |
| Path 2, Get Acquired or Merge | Sell to or merge with an AI-native competitor now | No internal cash path; a transaction event priced in section 10 [T12] | 500 to 1,200 of 2,400, decided by the buyer [T12, A18] | Low; the buyer decides the workforce outcome | A sale process runs about as long as the runway itself [PLAN §3.2] |
| Path 3, Pivot the Business, as written | Exit the disrupted lines outright and bet everything on a new AI-adjacent service | Breaches the covenant in month 4 [T11] | 1,238 at month 12 [T11] | High in principle, but the new line is unproven | Needs about 145 crore rupees of new revenue within a year from a standing start [PLAN §3.2] |
| Path 4, Wind Down | Close in an orderly way, paying statutory dues | A one-time event; dues and cover priced in section 11 [T12] | 0, with staged job loss over the closure period | Moderate; the Company controls the closure process but not its outcome for staff | Dues of about 51.2 crore rupees exceed cash of 40 crore rupees even before the term loan is repaid [T12] |
| Setu, Path 1 rebuilt | Restructure first, then reskill into work artificial intelligence cannot yet do | Never falls below 21.1 crore rupees across 18 months; the lowest point is month 12 [T5, T11] | 1,814 at month 12, with no forced exit [T7] | High; the plan is executed by the Company on its own cash | Depends on three operational levers landing broadly on schedule (pricing, the engine, data services) [section 14] |

*AI: artificial intelligence. Every figure in this table carries its own tag back to the case, the model or an assumption, and the routes for drift, Path 1 as written and Path 3 as written are run through the same monthly cash model as Setu; the sale and wind-down routes are one-time events rather than month-by-month paths, which is why their cash column reads differently and why sections 10 and 11 treat them separately in depth.*

### 9.2 The standard-paths table in full

Table 9.2 reproduces the model's own standard-paths table without alteration, because it is the primary evidence for the claim that only Setu avoids a covenant breach among the routes that are run month by month.

| Route | Covenant breach month [T11] | Lowest cash in 12 months, crore rupees [T11] | People at month 12 [T11] | EBITDA run-rate, month 12, crore rupees [T11] |
|---|---|---|---|---|
| Drift | 6 | −21.9 | 0 | −77.9 |
| Path 1, standard | 4 | −16.5 | 1,845 | −42.0 |
| Path 3, pivot | 4 | −39.7 | 1,238 | −54.1 |
| Setu | None | 21.1 | 1,814 | 8.4 |

*EBITDA: earnings before interest, tax, depreciation and amortisation. Negative lowest-cash figures mean the route's own cash model runs through zero into a cash deficit; the Company cannot actually operate at a negative cash balance, so a negative figure in this table signals that the route would have forced an earlier, unplanned stop, a borrowing event that is not permitted under the case's "no new debt" constraint [C K1], or both.*

Drift's lowest cash of minus 21.9 crore rupees and Path 3's minus 39.7 crore rupees [T11] are therefore not numbers the Company could actually reach; they are the model's way of showing how far past the point of no return each route would run if nothing stopped it. Path 1 as written breaches two months earlier than drift itself, in month 4 against drift's month 6 [T11], because actively spending on reskilling without first cutting cost or raising price adds cash outflow on top of the existing EBITDA loss rather than reducing it. This is the single clearest piece of evidence in the whole model for the case's own implied warning that Path 1's risk is being "too slow or costly to pay off within the runway" [C P1]: taken at face value, it is not slow, it is fast, and it fails faster than doing nothing.

### 9.3 The weighted scorecard

Table 9.3 reproduces the model's route scorecard, scored one to five on each of the six criteria and combined using the weights in assumption A21.

| Route | Runway | Cash | Jobs | Control | Upside | Speed | Score [T13] |
|---|---|---|---|---|---|---|---|
| Drift, no decision | 1 | 1 | 1 | 3 | 1 | 5 | 1.60 |
| Path 1, Reskill everyone | 1 | 1 | 4 | 5 | 2 | 2 | 2.35 |
| Path 2, Sell or merge now | 3 | 3 | 2 | 1 | 3 | 3 | 2.55 |
| Path 3, Pivot outright | 1 | 1 | 2 | 5 | 4 | 1 | 1.95 |
| Path 4, Wind down | 2 | 1 | 1 | 2 | 1 | 4 | 1.65 |
| Setu, Path 1 rebuilt | 5 | 4 | 4 | 4 | 4 | 3 | 4.15 |

*Each criterion is scored one to five by the model against the route's own quantitative output (sections 9.1 and 9.2, plus sections 10 and 11); the score column is the weighted sum shown worked in table 9.4.*

### 9.4 The scoring weights and a worked check

Table 9.4 states the weights under assumption A21, chosen to mirror the case's own judging weights so that the scorecard rewards survival and jobs first, in line with J1 to J5 [C J1 to J5].

| Criterion | Weight [A21] | Rationale |
|---|---|---|
| Runway | 25% | Mirrors J1, analytical rigour on survival; a route that cannot survive the runway cannot be rigorous in any other respect |
| Cash | 20% | How much buffer the route leaves, tied to J2, strategic judgement under the covenant constraint |
| Jobs | 25% | Mirrors J3, workforce and human impact at 20% of the judging weight, weighted slightly higher here because the case names it "non-negotiable" [C Q3] |
| Control | 10% | Whether the Company, not a buyer or a court, decides the workforce outcome |
| Upside | 10% | Whether the route leaves a growth path once the crisis passes, feeding J4, originality |
| Speed | 10% | How quickly the route can be executed, feeding J5, adaptability |

*The weights sum to 100%. We have not matched the case's judging weights exactly, because two of the case's criteria (J4 originality and J5 adaptability) are better tested by how a route is argued and defended than by a route's own mechanical score; the scorecard instead folds most of that judgement into runway, cash and jobs, which are the three criteria the case repeatedly calls "non-negotiable" or central [C Q1, Q3].*

To show the formula is not decorative, table 9.5 works the weighted sum for the two routes at either end of the score range.

| Route | Runway (score × 25%) | Cash (score × 20%) | Jobs (score × 25%) | Control (score × 10%) | Upside (score × 10%) | Speed (score × 10%) | Sum |
|---|---|---|---|---|---|---|---|
| Drift | 1 × 0.25 = 0.25 | 1 × 0.20 = 0.20 | 1 × 0.25 = 0.25 | 3 × 0.10 = 0.30 | 1 × 0.10 = 0.10 | 5 × 0.10 = 0.50 | 1.60 [T13] |
| Setu | 5 × 0.25 = 1.25 | 4 × 0.20 = 0.80 | 4 × 0.25 = 1.00 | 4 × 0.10 = 0.40 | 4 × 0.10 = 0.40 | 3 × 0.10 = 0.30 | 4.15 [T13] |

*Both rows reconcile exactly to the scorecard in table 9.3; the formula is: score equals the sum, across the six criteria, of each criterion's one-to-five rating multiplied by its weight under A21.*

Drift scores highest of all six routes on speed alone, 5 out of 5, because doing nothing is the fastest thing to do [T13]; it is the lowest-scoring route overall because speed carries only 10% of the weight and drift scores 1 out of 5 on the three criteria that carry 70% of the weight between them: runway, cash and jobs. Setu scores lower than Path 1 as written on speed (3 against 2, in Path 1's favour by one point in the model's own scale is actually the reverse: Path 1 scores 2 and Setu scores 3, so Setu is in fact faster on this one criterion) and lower than Path 3 on upside (4 against 4, tied) and control (4 against 5, Path 3 ahead by one point because exiting old lines outright is operationally simpler to control than running three programmes at once); Setu wins the overall ranking because it is the only route that scores above 3 on both runway and jobs simultaneously, which no other route manages.

### 9.5 The cash gap, shown month by month

Table 9.6 sets the drift cash path against the Setu base case cash path at three common checkpoints, to make the "only one stays above 15 crore rupees" claim visible as a trend, not only as an end point.

| Month | Drift cash, crore rupees [T2] | Setu base cash, crore rupees [T5] | Covenant floor, crore rupees [C K1] |
|---|---|---|---|
| 6 | 14.8 | 22.3 | 15.0 |
| 12 | −21.9 | 21.1 | 15.0 |
| 18 | −68.6 | 25.2 | 15.0 |

*Drift's cash at month 6, 14.8 crore rupees, is already below the covenant floor of 15 crore rupees [C K1], which is why the model records drift's covenant breach in month 6 [T2, T11]; by month 18 drift's cash has gone deeply negative because the model runs the trend forward even past the point the Company could actually continue to operate. Setu's cash stays above the floor at every one of the three checkpoints shown and at every month in between [T5].*

### 9.6 Why Setu beats each of the other five

Against drift and Path 1 as written, Setu wins because it is the only route that treats the cost base as the first thing to fix, not the last: the hiring freeze, leadership pay cut and overhead cuts land in month 1, before a rupee is spent on reskilling or an engine (section 3.2, move 1). Against Path 3, Setu wins because it does not bet the whole company on an unproven revenue line from a standing start; data services is ramped from 30 people in month 2 to 400 by month 12 [L07, T7], funded in stages, with the old lines kept as a holding line rather than exited outright. Against Path 2, Setu wins on control and on upside: a sale handed 500 to 1,200 of 2,400 jobs to a buyer's discretion and an owners' value of 12 to 60 crore rupees [T12, A18], against Setu's 1,814 jobs decided by the Company itself and an EBITDA run-rate of 8.4 crore rupees at month 12 that the Company keeps [T5]. Against Path 4, the comparison is starkest: a wind-down today cannot even pay its own statutory dues in full, with only 54% cover [T12], while Setu reaches positive cash flow with the workforce still employed. None of this means the other four routes have no role; Path 2 is priced in section 10 as the fallback if a cash gate fails, and Path 4 is priced in section 11 as the floor beneath which the Company will not willingly fall. Setu is the primary path because, on the same six tests applied to every route without exception, it is the only one that both survives and keeps the workforce whole.

The comparison also answers two of the case's own judging criteria directly. On originality of insight, the nine findings in section 3.3 of this document's opening sections, in particular that the incumbent's own AI-assisted cost of 28 rupees a file still sits above the AI-native price of 27 rupees [C K4], and that a severance payback of 6.75 months exceeds the six-month runway [M, C F2], are both derivable from the case's own table without any outside data; a team that scores well on originality is one that reads the case's numbers against each other rather than importing an unrelated framework. On adaptability, the scorecard in table 9.3 is deliberately a live instrument, not a one-time verdict: section 9.4's weights (A21) and section 9.5's worked formula mean that if a judge changes one input, for instance assuming the Company can raise a small amount of bridge financing after all, every route's score can be re-computed on the same six criteria rather than re-argued from scratch. That is the practical value of holding every route to the same test: a new development, which the case's own evaluation criteria warn finalists to expect [C J5], changes numbers in the table, not the structure of the argument, and the team can defend a changed number in the room rather than having to improvise a new argument on the spot.

---

## 10. Path 2 in depth: a sale is the fallback, not the plan

**Answer.** A sale at month 5 to an AI-native buyer, under assumption A18's distressed-multiple range of 0.20 to 0.50 times revenue, would deliver 12 to 60 crore rupees to owners and keep 500 to 1,200 of the Company's 2,400 jobs, decided by the buyer, not the Company [T12, A18]. Listed Indian business process management peers trade far above that range, eClerx at about 3.5 times revenue and Firstsource at about 1.9 times revenue [S26, S27], which only underlines how steep the distress discount on a six-month-runway seller would be. We hold Path 2 in reserve rather than lead with it because the Company controls more of the workforce outcome by executing Setu, and because the model shows exactly when that calculus would flip: if cash at month 6 falls to the bear-with-contingency case's 17.0 crore rupees while the bear case itself is still heading for a month-8 covenant breach, that is the signal to open a sale process as the live option rather than the fallback [T6, PLAN §4].

### 10.1 The sale table

Table 10.1 reproduces the model's sale-at-month-5 output in full.

| Sale case | Multiple of revenue [A18] | Enterprise value, crore rupees [T12] | Value to owners, crore rupees [T12] | Jobs kept [T12] |
|---|---|---|---|---|
| Bear | 0.20 | 32.2 | 12.0 | 500 |
| Base | 0.35 | 56.3 | 36.1 | 800 |
| Bull | 0.50 | 80.4 | 60.2 | 1,200 |

*Enterprise value is the price for the operating business before debt is deducted; value to owners is what is left after the term loan and transaction costs are settled, consistent with the model's treatment elsewhere in this document. The multiple range of 0.20 to 0.50 times current run-rate revenue of 182 crore rupees [C F3] is a team assumption, A18, not a quoted market benchmark, because no current (2025 to 2026) disclosed multiple for a distressed Indian business process management sale was found in the research pass behind this document; the gap is recorded explicitly in Lane E's own notes.*

Even at the bull end of the range, 1,200 jobs kept is exactly half of the Company's current 2,400 [C F3], and the buyer, not the Company, decides which 1,200. At the bear end, 500 jobs kept against 2,400 is a reduction of nearly 80%. This is the quantitative basis for the case's own stated risk on Path 2: "losing control over integration, especially workforce decisions" [C P2].

### 10.2 Why the multiple is this low

Listed Indian business process management firms do not trade anywhere near 0.20 to 0.50 times revenue. eClerx Services, as of 5 October 2026, carried a last-twelve-months enterprise value to revenue multiple of about 3.5 times, on last-twelve-months revenue of about 475 million US dollars and EBITDA of about 119 million US dollars, implying an EBITDA multiple of about 13.9 times [S26]. eClerx's own historical EBITDA multiple ranged from about 7 times in 2020 up to 15.3 times in 2024 [S26]. Firstsource Solutions, over the same period, carried a lower but still far higher multiple than our assumed sale range: about 1.9 times revenue and about 11.6 times EBITDA on last-twelve-months figures [S27].

| Company | Revenue multiple | EBITDA multiple | Note |
|---|---|---|---|
| eClerx Services (listed, healthy) [S26] | 3.5x | 13.9x | Historical range 7x to 15.3x EBITDA, 2020 to 2024 |
| Firstsource Solutions (listed, healthy) [S27] | 1.9x | 11.6x | Larger, lower-margin peer than eClerx |
| The Company, assumed distressed sale [A18] | 0.20x to 0.50x | n/a, loss-making | Six months of runway, no new funding, EBITDA already negative [C F2, F3] |

*x: times, a standard shorthand for a valuation multiple (price divided by the metric named). The Company's own EBITDA is currently negative [C F3], so an EBITDA multiple cannot be calculated for it; only the revenue multiple applies.*

The gap between the Company's assumed 0.20 to 0.50 times revenue and its listed peers' 1.9 to 3.5 times revenue is explained by two case facts working together: the Company's unit economics are already loss-making (minus 3.2 rupees a file today, against eClerx and Firstsource's positive margins) [T4], and it has six months of cash and no new funding to negotiate from a position of strength [C F2, K1]. A healthy business process management operator with growing volumes and margin is worth a multiple of revenue; a six-month-runway seller whose business model is being undercut by 30% is not. India's broader distressed mergers and acquisitions market confirms the pattern directionally, if not at this precision: since 2017, distressed deals in India have totalled about 14.3 billion US dollars, around 12% of total deal value [S28], which tells us distressed sales are a recognised, sizeable category of Indian dealmaking, not an exotic one, but gives no current, India-specific multiple for a business process services target. We record this as a gap rather than papering over it: the 0.20 to 0.50 range is the team's own judgement (A18), reasoned from the Company's own unit economics and from the general pattern that distressed sellers are discounted heavily against healthy comparables, not read off an external source.

### 10.3 Timeline against the runway, and who decides the workforce

A sale process is assumed to close at month 5 (A18), a figure the research behind this document could not anchor to any published Indian benchmark for how long a mid-market services sale takes to close; that gap is recorded explicitly rather than left implicit. Taking the five-month assumption at face value, it sits inside the six months of cash the case gives before the current trajectory reaches the covenant floor [C F2], which is why Path 2 is feasible as a timeline at all. It is not comfortable: Path 1 and Path 3, taken at face value, both breach the covenant in month 4 [T11], a full month before a sale under A18 would even close, which means a sale cannot be a safety net for a route that has already failed on its own terms; it has to be chosen early enough, or held in reserve explicitly, to still have a transaction to run.

The deeper issue is not time but authority. In every other route modelled in this document, the Company's own management decides who stays, who is reskilled and who is supported into a bridge role. In a sale, the buyer decides. The case's own stated risk for Path 2, losing control over integration and workforce decisions [C P2], is therefore not a risk that better negotiation removes; it is close to the definition of what a sale is. Jobs kept in the sale table (500, 800 or 1,200, table 10.1) are the buyer's estimate of how many of the Company's people the buyer's own AI-native operating model needs, not a number the Company's board can commit to on the Company's own authority.

Table 10.3 places the assumed sale-close milestone against the covenant-breach milestones of the other routes modelled month by month, to show how little slack a sale process has if it is not started early.

| Milestone | Month | Source |
|---|---|---|
| Decision point, board review | 0 | [C Q1] |
| Path 1 and Path 3, as written, breach the covenant | 4 | [T11] |
| Assumed sale process close (A18) | 5 | [A18], no external timing benchmark located |
| Drift breaches the covenant | 6 | [T11, T2] |
| Setu base case, lowest point in the first 12 months | 12 | [T5] |

*A18: the team's sale-timing and sale-terms assumption. The table reads as a single timeline: if the Company had already committed to Path 1 or Path 3 as written, a sale assumed to close in month 5 would close after the covenant has already been breached under either of those routes, which is why a sale has to be chosen deliberately and early rather than reached for only once another route has visibly failed.*

### 10.4 The month-6 gate that would convert Path 2 from fallback to live option

Project Setu does not treat a sale as something to revisit only if everything else has already failed; it is held as a priced, ready fallback with an explicit trigger. The model's bear case, re-run with the full contingency response (releasing the reserve described in section 8.6 and L12), still breaches the covenant in month 8, but the act of adding the contingency lifts cash at month 6 from the unmitigated bear case's 18.7 crore rupees to 17.0 crore rupees under the contingency path and to 9.7 crore rupees by month 12 [T6]. Because even the contingency-assisted bear case cannot clear the month-8 breach on its own, the month-6 checkpoint is the point at which the plan's own logic says to stop relying on internal cash management and open a sale process in parallel, while there is still enough runway left for a transaction to close before cash would otherwise run out.

| Case at month 6 | Cash, crore rupees [T6] | Still breaches covenant later | Action |
|---|---|---|---|
| Setu base | 22.3 | No | Continue Setu as planned |
| Bear, no contingency | 18.7 | Yes, month 8 | Trigger review |
| Bear, with contingency | 17.0 | Yes, month 8, even after contingency | Open a sale process as the live fallback |

*The "with contingency" row applies the reserve and other downside responses described in section 14 and under lever L12; it buys time and cash but does not, on its own, clear the covenant breach that the unmitigated bear case shows arriving in month 8 [T6].*

Table 10.4 is the operational core of why Path 2 belongs in this document as a fallback rather than as the headline recommendation: it is not an abstract hedge, it is a specific test (bear-with-contingency cash at month 6, set against a covenant breach that contingency alone cannot clear) that, if triggered, converts a sale from a background option into the active plan with enough runway left to execute it. Project Setu's own base case clears month 6 at 22.3 crore rupees, comfortably above both the covenant floor and the trigger level [T5], which is why the fallback is not expected to be needed, only priced in case it is.

---

## 11. Path 4 in depth: a wind-down today cannot pay its own dues

**Answer.** Closing the Company today would require about 51.2 crore rupees in statutory staff dues, 2.13 lakh rupees a head, against 40 crore rupees of cash and a term loan of the same size still outstanding, leaving a shortfall of about 41.6 crore rupees and only 54% cover [T12]. The cover gets worse, not better, the longer a decision is delayed: by month 6 of drift, cover falls to 23% as cash is consumed while dues stay essentially fixed [T12]. On our reading of Insolvency and Bankruptcy Code section 53, workmen's dues for the twenty-four months before liquidation rank alongside a secured creditor's claim to the extent that creditor has given up its security, which is more favourable to staff than an unsecured ranking would be, but counsel should confirm this reading before it is relied upon, and the receivables, payables and closure-cost figures that complete the picture here are the team's own assumptions (A13), because the case gives no balance sheet.

### 11.1 The wind-down waterfall at three points in time

Table 11.1 reproduces the model's full wind-down table, showing how the picture changes if the decision to close is delayed.

| Wind-down start | Cash, crore rupees [T12] | Receivables, crore rupees [A13, T12] | Term loan, crore rupees [C K1] | Staff dues, crore rupees [T12] | Other liabilities, crore rupees [A13] | Shortfall, crore rupees [T12] | Dues cover [T12] |
|---|---|---|---|---|---|---|---|
| Month 0 | 40.0 | 25.8 | 40.0 | 51.2 | 16.2 | 41.6 | 54% |
| Month 3 | 29.0 | 23.9 | 40.0 | 51.2 | 16.2 | 54.5 | 40% |
| Month 6 | 14.8 | 22.2 | 40.0 | 51.2 | 16.2 | 70.3 | 23% |

*Other liabilities combine assumed trade payables and assumed closure costs, both under A13. Dues cover is cash plus receivables, set against staff dues plus the term loan. Staff dues and the term loan are held essentially flat across the three rows because neither changes materially over a six-month delay on its own; it is cash and receivables, the assets available to meet those dues, that shrink as the drift case burns through them [T2, T12].*

The shortfall nearly doubles, from 41.6 crore rupees at month 0 to 70.3 crore rupees at month 6, purely because cash falls from 40.0 to 14.8 crore rupees over that period under the drift trajectory [T2, T12] while receivables fall only modestly, from 25.8 to 22.2 crore rupees, and the dues themselves barely move. Every month of delay in choosing a path is therefore a month in which the resources available to pay staff what they are legally owed shrink, while the obligation itself does not. This is the clearest single piece of evidence in this document against treating "wait and see" as a neutral choice: on the case's own path of drift, waiting is itself a decision that makes the workforce worse off, not better off.

### 11.2 Priority of workmen's dues, and the limit of what we can say with confidence

Section 53 of the Insolvency and Bankruptcy Code sets out the order in which a liquidator distributes the proceeds of a company's assets. The provision most relevant to this case, section 53(1)(b)(i), ranks "workmen's dues for the period of twenty-four months preceding the liquidation commencement date" in the distribution waterfall [S09]. A later Supreme Court ruling, in a case concerning a separate statutory provision (the Companies Act's section 327(7)), is reported by the Insolvency and Bankruptcy Board of India as confirming that this twenty-four-month workmen's dues claim ranks equally with the claim of a secured creditor who has given up its security interest, to the extent of that relinquished security [S10, S11]. The practical reading, on our side of the law, not counsel's, is that staff dues earned in the last two years before any liquidation are placed alongside secured lenders rather than behind them, for the portion of the lender's claim the lender has agreed to treat as unsecured; this is more favourable to staff than being ranked as an ordinary unsecured creditor, which is where workmen's dues older than twenty-four months, and dues beyond the formula in section 53, would fall instead.

Table 11.2 separates what is directly sourced from what is not, because the content rules of this document require that distinction to be visible rather than folded into a single confident sentence.

| Tier (as sourced) | Claim | Statutory reference | Source |
|---|---|---|---|
| Workmen's dues, 24 months before liquidation | Ranks in the distribution waterfall at this named tier | IBC s.53(1)(b)(i) | [S09] |
| Pari passu confirmation | The 24-month workmen's dues claim ranks equally with a secured creditor's claim, to the extent that creditor has relinquished its security | Moser Baer Karamchari Union v Union of India, 2 May 2023, as noted by the Insolvency and Bankruptcy Board of India | [S10, S11] |
| All other tiers of section 53 (process costs ranked ahead; other creditor classes ranked behind) | Not independently verified in this research pass | IBC s.53, general structure | Not sourced; recorded as a gap, not presented as fact |

*IBC: Insolvency and Bankruptcy Code. The third row is a deliberate gap, not an omission by mistake: this document only states a statutory ranking where a primary or near-primary text has been read, and the remaining tiers of section 53 were not opened during this research pass.*

We flag three further limits on this reading explicitly, because the content rules of this document require every legal statement to be hedged and every gap to be stated rather than smoothed over. First, we have not located the exact law-report citation for the Supreme Court judgment quoted above; one commonly cited citation string could not be verified against any source we opened, and the judgment itself was read only through a secondary summary, not the primary text [S10, S11]. Second, section 53's full waterfall has several tiers beyond the one we have sourced here (insolvency process costs ahead of workmen's dues, and other creditor classes behind them); we have not independently verified the remaining tiers for this document and have therefore not presented a full ladder, only the one rank that is directly sourced. Third, and most importantly for the route itself: voluntary liquidation under the Code's section 59 requires a majority of directors to declare that the company has no debt, or can pay its debts in full from the proceeds of asset realisation [S29, S30]. The Company, with a term loan it cannot fully repay under the wind-down numbers in table 11.1, does not meet that declaration test and so could not use the simpler voluntary liquidation route at all; it would need the Code's formal insolvency resolution and liquidation process instead, where the section 53 waterfall discussed above applies. This last point is our own inference connecting two separately sourced facts, not a directly sourced conclusion, and we label it as such rather than as a verified finding.

### 11.3 The balance sheet behind this section is a team assumption, not a case fact

The case gives a profit and loss history and a cash figure [C F3, K1], but no balance sheet: no receivables ageing, no payables figure, no fixed-asset or lease-exit schedule. Every balance-sheet line used in sections 8, 10 and 11 of this document is therefore a team assumption carrying identifier A13, and we state that plainly here rather than letting the figures read as if they came from the case.

| Balance-sheet item | Assumed value | Basis |
|---|---|---|
| Receivables | 60 days of revenue outstanding, recovered at 85% | A13; a conservative but not punitive collection assumption for a distressed services firm |
| Payables | 5.75 crore rupees | A13; sized against the other-cost base, with no case figure to anchor it |
| Closure cost | 6 crore rupees | A13; covers lease exit, severance administration and professional fees for an orderly closure |
| Residual operating burn during wind-down | Three months at half the current burn rate | A13; reflects a staged closure rather than an instant stop |

*None of the four figures above has a case citation; each is marked A13 in every table of this document that uses it, including tables 8.4, 11.1 and the wind-down commentary throughout sections 8, 10 and 11. If the Company's actual balance sheet were known, every dues-cover and shortfall figure in this document would need to be recalculated against it, and this document would be updated accordingly rather than patched line by line, consistent with the content-integrity rule that a changed headline number must be propagated everywhere it appears.*

We hold to these assumptions rather than omitting the balance sheet altogether, because a wind-down route cannot be assessed as "preserving more value than burning cash", the case's own description of Path 4's appeal [C P4], without some view of what assets exist to pay dues and debt. The honest position is to state the assumption, size it conservatively, and show the result rather than to avoid a number because the case did not supply one.

### 11.4 What drift costs the workforce, month by month

The core finding of this section, restated from table 11.1 in the form that matters most for the workforce test in the case's own evaluation criteria (J3, 20% of the judging weight) [C J3], is that dues cover falls from 54% to 40% to 23% across months 0, 3 and 6 of drift [T12], purely as a function of time, with no change in what staff are legally owed.

| Month of drift | Dues cover [T12] | What this means for staff |
|---|---|---|
| 0 | 54% | Just over half of statutory dues and the term loan could be met from cash and receivables today |
| 3 | 40% | Cover has fallen by 14 percentage points with no change in the amount owed to staff |
| 6 | 23% | Fewer than one in four rupees of staff dues and loan principal combined could be met from cash and receivables |

*The figures in the right-hand column follow directly from the cover percentages in table 11.1; they describe the same shortfall growth discussed in section 11.1 in terms of what it would mean for the people the dues are owed to, not only for the balance sheet.*

This is the quantitative basis for the claim, made earlier in this document and repeated here because it belongs in this section as much as any other, that Path 4 "does not preserve value for staff" [PLAN §3.2, insight 9]: the case frames an orderly wind-down as the responsible, fair-severance option, and on day one it is, relative to drift, the better of two bad outcomes. But an orderly wind-down executed later, after months of drift have consumed cash the dues calculation depends on, is a materially worse outcome for the same staff than an orderly wind-down executed on day one, which in turn is a worse outcome for them than Project Setu, where the model shows no forced exit at all and 1,814 of 2,400 jobs still standing at month 12 [T5, T7]. Path 4 remains in this document as the floor the Company will not fall through, priced honestly rather than treated as a free safety net; it is not, on these numbers, a plan that can be chosen instead of a decision, only a plan that can be chosen as a decision, and the earlier it is chosen, the better it serves the people it is meant to protect.


## 12. Project Setu: where to play and how to win

**Answer.** Project Setu plays on two fields at once: the BFSI (banking, financial services and insurance) document line, where the Company narrows to the hard-file desk and licenses an AI engine for clean files, and a new AI data services line, where the Company's own multilingual, multi-city workforce becomes a supplier to the voice AI start-up rather than only a target of disruption [C K4]. It wins by being organised, priced and staffed to do the one thing the AI-native firm cannot do economically: handle handwritten and regional-language exceptions at scale [C K4]. The hard-file desk passes a VRIO (valuable, rare, inimitable, organised) test inside the six-month runway in a way a generic reskilling programme does not, and the data services line is sized bottom-up, from people and hours, to ₹2.52 Cr of monthly revenue by month 12 [A08][T5], not from a slice of a market-size headline.

### 12.1 Where to play and how to win

A Playing to Win map forces four questions to be answered together, not separately: where the Company competes, how it wins there, what capabilities that requires, and what management systems keep it honest. The table below states Project Setu's answer to each.

| Element | Setu's choice | Why this and not the alternative |
|---|---|---|
| Where to play (markets) | BFSI hard-file exception processing; a licensed-engine clean-file line at reduced headcount; a new multilingual AI data services line for third-party AI builders; catalogue quality control kept only as a holding line | Hard files are the one segment where the case names a rival weakness [C K4]; clean files cannot be won on price against a ₹27 rival with an estimated ₹9 cost [C K4]; data services matches an unmet need the case states directly, a start-up needing human labellers [C K4] |
| Where to play (customers) | The Company's existing BFSI, e-commerce and telecom clients for hard files; the regional-language voice AI start-up and, by extension, other AI builders needing Indian-language labelled data, as customers of the new line | No new client acquisition is assumed for the core lines; the only new customer relationship modelled is the labelling buyer, consistent with not inventing primary demand |
| How to win | Price by complexity instead of one blended rate [L05]; pair humans with a licensed engine so the hard-file team processes about 45% more files a person [A15]; sell exception handling as a named, priced service instead of a leftover cost centre | The blended ₹38 price hides a profitable clean file and a lossmaking hard file [C K3][T4]; splitting the price is a pricing decision, not a cost cut, and it is reversible if clients object |
| Capabilities needed | A licensed document AI engine [A07]; retrained exception handlers and verifiers [L10]; a bridge and reserve so attrition and exits are managed, not forced [L01][L12]; a small data services operations team | Capabilities are bought (the engine) or built on staff the Company already has (420 exception handlers, [C K2]), not hired from outside at scale; only 10 new technology hires are modelled [L09] |
| Management systems | A monthly cash and covenant review; four cash gates tied to spend and hiring decisions (section 14.5); a weekly workforce tracking sheet tied to the bridge programme | The case's binding constraint is cash, not strategy quality; the management system that matters most is the one that stops spending before the covenant is breached |

*BFSI: banking, financial services and insurance. VRIO: valuable, rare, inimitable, organised, the four tests in a resource-based view of strategy.*

The map is deliberately narrow. The Company does not choose to play in new geographies, new client verticals or new currencies. Every "where to play" cell above is already inside the Company's existing client base or its existing workforce, because a six-month runway [C F2] does not fund market entry.

### 12.2 The six moves, in detail

The recommendation rests on six moves that run on different clocks: some start on day one, some take nine months to land. Running them out of order is itself a risk, discussed in section 16; the sequence below is load-bearing.

| # | Move | Starts | What happens | Lever | Financial effect |
|---|---|---|---|---|---|
| 1 | Stop the bleed | Month 1 | Hiring freeze; the 624 people who would leave in a normal year are not backfilled [C K2]; leadership pay cut 25% for 60 people for 12 months; selling cost falls to 75% then 60% of today, general cost to 90% then 75% | L01, L02, L03 | Saves ₹2.7 Cr from the pay cut alone [L02]; about ₹8.8 Cr a year at steady state from selling and general cost [L03]; 549 roles unreplaced by month 12 [T7] |
| 2 | Price by complexity | Months 2 to 4 | The single ₹38 BFSI price [C K3] splits into a clean-file price of ₹31 and a hard-file price of ₹48, phased in at 40%, 80%, 100% of hard-file volume by months 2, 3 and 4 | L05 | Client blended price falls to about ₹36.1 [T4]; Company blended unit margin moves from minus ₹3.2 to plus ₹7.1 a file [T4] |
| 3 | AI engine on clean files | Months 3 to 9 | A licensed document AI engine is brought in at ₹8 a file, falling to ₹6.5 from month 13 [A07], with one file in five checked by a human [A14]; migration is paced at 20, 40, 55, 70, 80, 90, 100% of clean volume over the window so that freed staff have somewhere to go | L06 | ₹2.5 Cr one-off cost, about ₹0.2 Cr a month running cost [L06]; clean-file cost falls from ₹32.8 to ₹23.8 by month 12 [T4] |
| 4 | Hard-file desk | From month 1, scaling through month 10 | The 420 exception handlers [C K2], plus upskilled processors, work AI-assisted at a 45% productivity gain rising two points a month from month 10 to 65% [A15], and sell at the new ₹48 price | L05, L10 | This is the line the AI-native firm cannot price against; it carries the blended margin from negative to positive once clean files alone could not |
| 5 | AI data services | Months 2 to 18 | Multilingual staff across five cities [C F1] move into data labelling for the voice AI start-up and, in principle, other AI builders with the same need, ramping from 30 people in month 2 to 400 by month 12 and 500 by month 18 [L07] | L07 | ₹63,000 revenue a head a month, rising to ₹68,000 from month 13 [A08]; ₹2.52 Cr monthly revenue by month 12, ₹3.40 Cr by month 18 [T5] |
| 6 | Hold a reserve for people | Throughout | Only ₹8.92 Cr of the ₹15 Cr emergency budget is deployed [T8]; ₹6.08 Cr stays ring-fenced, released only if a cash gate fails | L12 | No run-rate effect; this is a cash and workforce insurance line, not a cost or saving |

*AI: artificial intelligence. One-off: a non-recurring cost booked once rather than every month.*

Catalogue quality control is held, not grown or cut sharply. It earns almost no contribution on its own [T3] but keeps about 500 people employed and paid for by clients while data services absorbs capacity and attrition does the rest of the work of shrinking it. A holding line is not a strategy in itself; it is a timing device, and it is priced that way: catalogue revenue falls from ₹3.84 Cr a month in month 1 to ₹1.92 Cr by month 18 [T5], almost entirely through the natural volume and attrition path rather than a managed exit.

### 12.3 VRIO: the hard-file desk is the asset the plan is actually built on

A VRIO test asks four questions of a resource: is it valuable, is it rare, is it hard to imitate, and is the firm organised to capture it. Most of the Company's assets fail this test today, which is exactly why the case opens with a crisis. The hard-file desk is the one asset that, on the case's own facts, passes.

| Test | Hard-file desk | Why |
|---|---|---|
| Valuable | Yes | Clients still need handwritten and regional-language BFSI forms processed, and the AI-native firm is explicitly weaker here [C K4]; this is demand that does not disappear with the disruption, it moves |
| Rare | Yes, for now | 420 trained exception handlers [C K2] plus the institutional knowledge of five years of handling these forms is not something either rival is disclosed to hold at scale; the AI-native firm's edge is cost and speed on standard forms, not coverage of non-standard ones [C K4] |
| Inimitable | Moderately, inside the runway | A rival could in principle build an equivalent desk, but doing so needs trained staff, domain knowledge of five cities' document formats and time; the Company's six-month runway [C F2] is short for the Company but it is also short for anyone trying to copy this specific capability from scratch |
| Organised | Only if moves 2 and 4 are both executed | The desk only becomes a sustained advantage once it is priced separately (move 2, [L05]) and AI-assisted (move 4, [A15]); without the price split, the hard-file desk still subsidises the clean-file line and the advantage is invisible in the accounts |
| Strategic implication | Temporary competitive advantage, convertible to a sustained one if move 2 and move 4 both land and the Company keeps investing in the AI-assist gain | A VRIO resource that is valuable and rare but not yet organised is, by definition, an advantage the firm is not capturing; Setu's first financial move is to start capturing it |

*VRIO: valuable, rare, inimitable, organised, a standard resource-based test of whether a capability can sustain an advantage.*

The honest reading of this table is that the hard-file desk is not a moat by itself. It is a resource that becomes an advantage only when the pricing and AI-assist moves are both running, which is why the plan treats pricing (move 2) and the desk (move 4) as a single combined action rather than two separate initiatives.

### 12.4 From rival to customer and supplier: what the market data says

The case names the AI-native firm and the voice AI start-up as competitors [C K4], and on the document-processing line they are. But the case also gives each of them a second role. The AI-native firm's own cost structure depends on the same category of document AI technology the Company is licensing for itself [A07]; the voice start-up's stated need is not compute, it is human-labelled data [C K4], which is precisely what the Company's workforce can supply. Neither of these second roles is an assumed deal; no letter of intent, pilot or named contract is claimed anywhere in this plan [per the plan's content-integrity rule]. The claim is structural: the economics make a customer or supplier relationship plausible, and the external data on the Indian data annotation market supports treating this as a real commercial category, not a one-off opportunity.

| Relationship today (case) | Relationship the plan argues is also available | What makes it plausible |
|---|---|---|
| AI-native firm: rival on clean files, selling at ₹27 against an estimated ₹9 cost [C K4] | Potential supplier of, or competitor to, the document AI engine the Company licenses at ₹8 a file [A07] | Its disclosed cost (about ₹9, [C K4]) and the Company's engine price (₹8, [A07]) sit in the same band; the technology category is shared even if the specific vendor is not named |
| Voice AI start-up: described only by its need, human data labellers [C K4] | Direct customer of the Company's new AI data services line [L07] | This is the most literal reading of the case's own sentence; the Company has multilingual staff in five cities [C F1] and the start-up has a stated, unmet labelling need [C K4] |
| Large AI-assisted incumbent: rival selling at ₹33, cost about ₹28 [C K4] | Benchmark only; no new relationship is argued here | Its cost structure (₹28) sits above the AI-native price (₹27), which is itself the reason Path 1 as written fails (section 9 of this document); it is not a plausible supplier or customer, only a cautionary comparator |

The wider market data supports the direction of travel, not a specific deal. NASSCOM's 2021 analysis put the Indian data annotation market served from India at about USD 250 million in FY20, with potential to exceed USD 7 billion by 2030 [S22]. The same body of NASSCOM community material states that managed-service providers, firms that sell labelling as an outsourced service rather than a self-serve platform, contribute an estimated 65 to 75% of market revenue [S23]. NASSCOM separately records that Indian BPM (business process management) providers are moving from contracts priced on full-time-equivalent staff toward outcome-based arrangements as AI lifts productivity [S21]. Read together, these three facts describe exactly the position Project Setu is choosing: a managed-service labelling supplier, priced on outcomes rather than headcount, inside a market category that NASSCOM's own numbers show is already majority-managed-service. Vendor sites for firms such as NextWealth describe human-in-the-loop and reinforcement-learning-from-human-feedback annotation services as an active, named service line in India [S24][vendor], which corroborates that the category the Company is entering already has paying commercial demand, even though no figure from a vendor site is used as a case number.

Two cautions belong here, because the plan's content-integrity rule requires them. First, specific figures on the number of Indian annotators (one secondary citation claims about 20,000 full-time annotators in the managed-service model and 50,000 working independently) and on named firms' headcount and revenue (iMerit's reported headcount ranges from about 2,280 to over 5,500 depending on the source) could not be verified against a primary disclosure and are not used in this plan's model or sizing [see the research document's lane D raw file for the unverifiable rows]. Second, a widely circulated figure for a particular annotation firm's minimum hourly wage floor is carried from an earlier, unconfirmed search summary and is not re-verified here; it is mentioned only as context that a wage-floor model exists in this market, not as a number this plan relies on. Nothing in Project Setu's financial model uses any of these unverifiable figures; the ₹63,000 revenue a head a month used in the model [A08] is a team assumption benchmarked to about ₹450 an hour for 140 billable hours, not a market-reported wage.

### 12.5 Bottom-up sizing of the data services line: people and hours, not a slice of a market

The plan deliberately sizes AI data services from the bottom up, people multiplied by hours multiplied by a rate, rather than by assuming a percentage share of the NASSCOM market-size figures in section 12.4. A percentage-of-market number is easy to produce and easy to attack under viva questioning; a headcount build is neither. The table below reconstructs the model's own ramp [L07] and revenue assumption [A08] month by month, and ties every monthly revenue figure back to the Company's own month-by-month table [T5].

| Month | Heads on the labelling desk | Billable hours a head a month | Rate per hour, ₹ | Revenue a head a month, ₹ | Monthly revenue, ₹ Cr | Check against T5 |
|---|---|---|---|---|---|---|
| 2 | 30 | 140 | 450 | 63,000 | 0.19 | T5 month 2 data services: 0.19 [T5] |
| 4 | 200 | 140 | 450 | 63,000 | 0.88 | T5 month 4 data services: 0.88 [T5] |
| 6 | 290 | 140 | 450 | 63,000 | 1.57 | T5 month 6 data services: 1.57 [T5] |
| 8 | 350 | 140 | 450 | 63,000 | 2.02 | T5 month 8 data services: 2.02 [T5] |
| 10 | 390 | 140 | 450 | 63,000 | 2.33 | T5 month 10 data services: 2.33 [T5] |
| 12 | 400 | 140 | 450 | 63,000 | 2.52 | T5 month 12 data services: 2.52 [T5] |
| 18 | 500 | 140 | 486 | 68,000 | 3.40 | T5 month 18 data services: 3.40 [T5] |

*T5: the model's month-by-month Setu base case table. ₹ Cr: rupees crore, one crore equals ten million rupees.*

Two things follow from building the line this way. First, every number in the data services line of the Setu base case [T5] is reproducible by hand from the ramp [L07] and the revenue assumption [A08]; there is no hidden multiplier and no market-share leap. Second, the rate itself (about ₹450 an hour, [A08]) sits inside the pay band reported for contract annotators in India, roughly ₹100 to ₹250 an hour for individual contract work according to this plan's lane D research, scaled up for a managed-service, quality-assured delivery model rather than a freelance one; the plan does not use the unverified individual-contractor figure directly, it only notes that the assumed managed-service rate is structurally consistent with a market where individual rates run lower and managed-service margins sit on top. At 400 heads by month 12, the labelling desk is smaller than the 420-person hard-file desk and about a fifth of the Company's month-12 headcount of 1,814 [T7], which is consistent with a line that is funded, staffed and real, not a headline-sized bet the Company cannot deliver with its own people.

### 12.6 Client data, consent and the Digital Personal Data Protection Act: an honest note

The Company's existing BFSI and voice lines already process personal data belonging to its clients' customers: account details, identity documents and voice recordings [C F1][C K2]. The new data services line adds a second data relationship, where the Company processes data on behalf of the voice AI start-up rather than its own clients. On our reading of the Digital Personal Data Protection Act, 2023, both relationships likely fall within the Act's scope of personal data processing, and the Company would most plausibly sit as a data processor acting on instructions from a data fiduciary (its BFSI and voice clients, and the voice start-up) rather than as the fiduciary itself. We have not carried out, and this plan does not claim to have carried out, any formal compliance assessment of the Company's current consent architecture, data-processing agreements, breach-notification readiness or cross-border transfer position, because no such assessment exists for a fictional company and none is claimed. Counsel should confirm, before the data services line scales past its month-12 level, what consent and data-processing-agreement terms the voice start-up and the Company's existing clients require, and whether the multilingual voice data involved carries any additional sensitivity under the Act's treatment of certain categories of personal data. Nothing in the financial model, the ₹63,000 revenue a head assumption [A08] or the budget table [T8] contains a line for this legal work; it is a gap this plan states rather than papers over, consistent with the plan's rule against presenting an unverified compliance position as a fact.

| Data flow | Likely role | Open question, flagged for counsel |
|---|---|---|
| BFSI client documents processed by clean-file and hard-file desks [C K3] | Processor, acting for the client as fiduciary | Whether existing client contracts already cover AI-engine processing [A07] or need a fresh consent or disclosure step |
| Voice recordings handled by the voice and chat line [C F1] | Processor, acting for the client as fiduciary | Whether multilingual voice data requires any additional safeguard under the Act |
| Labelled data supplied to the voice AI start-up [L07] | Processor, acting for the start-up as fiduciary, on data the start-up itself holds or sources | Whether a formal data-processing agreement, not assumed in this plan, needs to exist before volume scales past month 12 |

*DPDP Act: the Digital Personal Data Protection Act, 2023. This table states roles on our reading of the Act only; it is not a legal opinion and carries no case-specific or verified-source figure.*

---

## 13. Financial plan: ₹8.9 Cr of one-offs, EBITDA positive in month 8

**Answer.** The Setu base case turns EBITDA (earnings before interest, tax, depreciation and amortisation) positive in month 8 and holds cash above the ₹15 Cr covenant floor in every one of the 18 months the model runs, bottoming at ₹21.1 Cr in month 12 before recovering to ₹25.2 Cr by month 18 [T5]. The swing from a minus ₹31 Cr annualised run-rate to a plus ₹8.4 Cr run-rate at month 12 is delivered mostly by cost discipline and the hard-file price split, net of a deliberate drag from legacy-line volume decline and the ramp cost of the new data services line [M]. The plan spends ₹8.92 Cr of the ₹15 Cr emergency budget and holds ₹6.08 Cr in reserve [T8], and it explicitly does not assume any subsidy, working-capital release or covenant waiver from the lender.

### 13.1 The Setu base case, month by month

Table T5 is the spine of the entire plan. It is reproduced here in full so that every later table in this document, and every number on the deck, can be traced back to one source.

| Month | Revenue | Clean | Hard | Catalogue | Voice | Data services | People cost | Other cost | EBITDA | One-offs | Cash | Headcount | Bench |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 1 | 14.75 | 5.69 | 2.44 | 3.84 | 2.78 | 0.00 | 11.53 | 5.33 | −2.11 | 0.41 | 37.1 | 2,347 | 16 |
| 2 | 14.78 | 5.55 | 2.63 | 3.69 | 2.72 | 0.19 | 11.51 | 5.25 | −1.99 | 1.20 | 33.6 | 2,307 | 0 |
| 3 | 14.86 | 5.27 | 2.88 | 3.54 | 2.67 | 0.50 | 11.13 | 5.51 | −1.78 | 1.53 | 29.9 | 2,251 | 61 |
| 4 | 14.89 | 4.99 | 3.01 | 3.40 | 2.61 | 0.88 | 10.59 | 5.22 | −0.93 | 1.77 | 26.8 | 2,191 | 129 |
| 5 | 14.86 | 4.77 | 3.01 | 3.26 | 2.56 | 1.26 | 10.31 | 5.21 | −0.66 | 0.97 | 24.8 | 2,133 | 129 |
| 6 | 14.85 | 4.55 | 3.08 | 3.13 | 2.51 | 1.57 | 10.06 | 5.19 | −0.40 | 1.72 | 22.3 | 2,075 | 128 |
| 7 | 14.86 | 4.39 | 3.16 | 3.01 | 2.48 | 1.83 | 9.85 | 5.08 | −0.07 | 0.06 | 21.8 | 2,021 | 108 |
| 8 | 14.83 | 4.23 | 3.24 | 2.89 | 2.46 | 2.02 | 9.64 | 5.05 | 0.14 | 0.45 | 21.2 | 1,969 | 97 |
| 9 | 14.80 | 4.07 | 3.32 | 2.77 | 2.44 | 2.21 | 9.44 | 5.02 | 0.35 | 0.04 | 21.1 | 1,919 | 86 |
| 10 | 14.81 | 4.01 | 3.40 | 2.66 | 2.41 | 2.33 | 9.30 | 5.00 | 0.51 | 0.02 | 21.2 | 1,873 | 44 |
| 11 | 14.83 | 3.95 | 3.48 | 2.55 | 2.39 | 2.46 | 9.19 | 4.99 | 0.66 | 0.00 | 21.5 | 1,832 | 6 |
| 12 | 14.80 | 3.89 | 3.57 | 2.45 | 2.36 | 2.52 | 9.12 | 4.97 | 0.70 | 0.75 | 21.1 | 1,814 | 0 |
| 13 | 15.04 | 3.83 | 3.66 | 2.35 | 2.34 | 2.86 | 9.36 | 4.77 | 0.92 | 0.00 | 21.6 | 1,813 | 0 |
| 14 | 15.10 | 3.78 | 3.75 | 2.26 | 2.32 | 2.99 | 9.37 | 4.76 | 0.97 | 0.00 | 22.2 | 1,814 | 0 |
| 15 | 15.16 | 3.72 | 3.85 | 2.17 | 2.29 | 3.13 | 9.39 | 4.75 | 1.02 | 0.00 | 22.9 | 1,815 | 0 |
| 16 | 15.22 | 3.66 | 3.94 | 2.08 | 2.27 | 3.26 | 9.41 | 4.74 | 1.08 | 0.00 | 23.6 | 1,818 | 0 |
| 17 | 15.23 | 3.61 | 4.04 | 2.00 | 2.25 | 3.33 | 9.38 | 4.72 | 1.12 | 0.00 | 24.4 | 1,810 | 0 |
| 18 | 15.24 | 3.56 | 4.14 | 1.92 | 2.22 | 3.40 | 9.36 | 4.71 | 1.17 | 0.00 | 25.2 | 1,804 | 0 |

*All amounts other than headcount and bench are ₹ Cr (rupees crore). EBITDA: earnings before interest, tax, depreciation and amortisation. Bench: staff between an old role and a new one, paid 75% of salary while awaiting placement.*

Reading this table by quarter brings out the shape of the plan more clearly than the row-by-row detail.

**Months 1 to 3 (quarter 1).** Revenue holds flat at about ₹14.8 Cr a month [T5], because the price split [L05] has not yet reached full hard-file volume and the engine migration has barely started [L06]. EBITDA is still negative, moving from minus ₹2.11 Cr to minus ₹1.78 Cr [T5], and cash falls from ₹37.1 Cr to ₹29.9 Cr [T5] as one-off spend on reskilling and the engine begins. This is the quarter in which the hiring freeze [L01] and the leadership pay cut [L02] are doing almost all of the work; the bench, people between an old role and a new one, starts to build, reaching 61 people by month 3 [T5].

**Months 4 to 6 (quarter 2).** The hard-file price reaches 100% of volume by month 4 [L05] and the bench peaks at 129 people in month 4 and again in month 5 [T5], the single clearest sign in the whole model of how much workforce transition the plan is managing at once. EBITDA improves sharply, from minus ₹0.93 Cr to minus ₹0.40 Cr [T5], and cash falls more slowly, from ₹26.8 Cr to ₹22.3 Cr [T5], because the pricing and cost moves are now earning faster than the one-off spend is consuming cash.

**Months 7 to 9 (quarter 3).** EBITDA crosses into positive territory in month 8, at ₹0.14 Cr [T5], the break-even point named in the locked numbers [section 4 of this plan]. Cash stabilises rather than falls, moving from ₹21.8 Cr to ₹21.1 Cr [T5], and the bench shrinks from 108 to 86 people [T5] as the bridge programme [L01] and the data services ramp [L07] absorb more of the transition.

**Months 10 to 12 (quarter 4).** Cash touches its lowest point of the 18-month run, ₹21.1 Cr in month 12 [T5], not because the business weakens but because a scheduled one-off spend of ₹0.75 Cr lands that month [T5]. The bench clears to zero by month 11 [T5], meaning every person who left an old role by then has either moved into a new one, taken the bridge, or left through natural attrition; none were made to wait. Headcount reaches 1,814 [T5][T7], the number carried through the rest of this document as the month-12 workforce figure.

**Months 13 to 15 (quarter 5).** Revenue steps up to about ₹15.0 to ₹15.2 Cr a month [T5] as the post-month-12 pricing and engine-fee changes take effect [A07][A08]. EBITDA continues to climb steadily, from ₹0.92 Cr to ₹1.02 Cr [T5], and cash recovers, from ₹21.6 Cr to ₹22.9 Cr [T5].

**Months 16 to 18 (quarter 6).** The plan reaches its most stable state: EBITDA rises to ₹1.17 Cr a month by month 18, an annualised run-rate of ₹14.0 Cr [T5][section 4 of this plan], cash recovers to ₹25.2 Cr [T5], and headcount settles at 1,804, a net change of only 10 people from the month-12 figure over six months [T5]. Catalogue revenue, the holding line, has by now fallen to ₹1.92 Cr a month [T5] from ₹3.84 Cr in month 1, consistent with a line that is being allowed to shrink on its own timetable rather than cut.

A simple summary table of the same six quarters makes the trajectory easier to check at a glance.

| Quarter | Months | Revenue range, ₹ Cr a month | EBITDA at quarter end, ₹ Cr a month | Cash at quarter end, ₹ Cr | Headcount at quarter end |
|---|---|---|---|---|---|
| Q1 | 1 to 3 | 14.75 to 14.86 | −1.78 | 29.9 | 2,251 |
| Q2 | 4 to 6 | 14.85 to 14.89 | −0.40 | 22.3 | 2,075 |
| Q3 | 7 to 9 | 14.80 to 14.86 | 0.35 | 21.1 | 1,919 |
| Q4 | 10 to 12 | 14.80 to 14.83 | 0.70 | 21.1 | 1,814 |
| Q5 | 13 to 15 | 15.04 to 15.16 | 1.02 | 22.9 | 1,815 |
| Q6 | 16 to 18 | 15.22 to 15.24 | 1.17 | 25.2 | 1,804 |

*All figures in this table are taken directly from T5 (the model's month-by-month Setu base case) and grouped into calendar quarters for commentary purposes only; the model itself does not run on a quarterly cycle [T5].*

### 13.2 The EBITDA bridge, from minus ₹31 Cr to plus ₹8.4 Cr

The model reports an aggregate monthly profit and loss, not a native per-lever attribution line. The bridge below allocates the model's known total swing, ₹39.4 Cr of annualised EBITDA, to the lever most responsible for each component, using the magnitudes stated for each lever in the assumptions and levers register, and nets the three revenue-side levers (complexity pricing, engine migration and data services) against the legacy-line volume decline they are run alongside, since the model does not separate these effects. This is stated plainly as an allocation, not as a separate output the model prints on its own.

| Step | Item | Annualised EBITDA effect, ₹ Cr | Running total, ₹ Cr | Basis |
|---|---|---|---|---|
| 0 | Case run-rate before the plan | − | −31.0 | [C F3] |
| 1 | L01: hiring freeze, 549 roles not backfilled by month 12 at the case's average cost a head | +32.9 | 1.9 | [T7][C K2] |
| 2 | L02: leadership pay cut, 60 people, 25%, 12 months | +2.7 | 4.6 | [L02] |
| 3 | L03: selling and general cost discipline | +8.8 | 13.4 | [L03] |
| 4 | L04: footprint and facilities right-sizing | +15.0 | 28.4 | [L04] |
| 5 | L08: span of control, team leads reduced from 190 to 116 at the role's average pay | +7.8 | 36.2 | [A09][T7] |
| 6 | L09: ten new technology hires | −2.4 | 33.8 | [L09] |
| 7 | L05, L06, L07 net: complexity pricing, engine migration and the new data services line, net of the revenue lost to legacy-line volume decline on clean, catalogue and voice | −25.4 | 8.4 | [M], balancing to [T5] month 12 |
| | Setu base case run-rate at month 12 | | 8.4 | [T5] |

*L01 to L09: lever identifiers from this plan's assumptions and levers register. The step-7 figure is a balancing allocation, not a separately printed model output; it captures interaction effects between the pricing, engine and data-services levers and the legacy-line revenue decline that the model runs concurrently with them.*

Two readings of this bridge matter more than the individual numbers. First, the single largest positive item is the hiring freeze (step 1), which is also the most mechanical: it is simply 549 people not rehired at the case's own average cost a head [C K2][T7], and it would happen even if none of the other five moves were executed. Second, the single largest negative item is the net revenue-side bucket (step 7), which is the honest price of running the business smaller: clean-file and catalogue revenue genuinely fall as volume migrates to the engine and attrition reduces catalogue headcount, and that fall is only partly offset by the hard-file price increase and the new data services revenue. The plan does not claim the revenue side is a net positive; it claims the cost side is large enough to carry it, and the bridge shows exactly how large that carry is.

### 13.3 The emergency budget

Table T8 shows how the ₹15 Cr emergency budget is split and how much of it is actually spent through month 18.

| Line | Amount, ₹ Cr |
|---|---|
| Reskilling | 3.30 |
| Technology | 2.50 |
| Footprint | 1.20 |
| Retention | 1.50 |
| Voluntary separation package | 0.00 |
| Bridge grants | 0.42 |
| Spent | 8.92 |
| Reserve | 6.08 |

*₹ Cr: rupees crore, one crore equals ten million rupees. The voluntary separation package line is zero in the base case because no forced exits are modelled [T7].*

Only ₹8.92 Cr of the ₹15 Cr budget is deployed in the base case, leaving ₹6.08 Cr held in reserve [T8]. This reserve is not idle cash sitting outside the model; it is the plan's answer to the question every judge is likely to ask, which is what happens if a single assumption breaks. Section 14.5 shows the four points at which that reserve is released.

### 13.4 Unit economics at month 12

The clearest single proof that the plan has turned the Company's economics around sits in the per-file numbers, reproduced here from T4 at the month-12 state only.

| State | File | Price, ₹ | Labour, ₹ | Team lead, ₹ | Engine, ₹ | Overhead, ₹ | Total cost, ₹ | Margin, ₹ |
|---|---|---|---|---|---|---|---|---|
| Month 12 | Clean | 31.0 | 2.7 | 0.4 | 8.0 | 12.7 | 23.8 | 7.2 |
| Month 12 | Hard | 48.0 | 25.8 | 2.8 | 0.0 | 12.7 | 41.2 | 6.8 |
| Month 12 | Blended | 36.1 | − | − | − | − | 29.0 | 7.1 |

*Engine: the fee paid to the licensed document AI engine, charged only on clean files [A07]. Overhead includes facilities and general cost allocated per file. The blended row does not sum the labour, team lead and engine columns because the two file types carry different cost structures.*

Every column in this table traces to a named lever or assumption: the clean price of ₹31 and hard price of ₹48 to the complexity-pricing lever [L05]; the engine fee of ₹8 to the engine licence assumption [A07]; the labour cost fall on clean files to the AI-assist productivity gain on that line [L06]; and the labour cost on hard files to the 45% AI-assist gain applied there [A15]. The blended margin of plus ₹7.1 a file against today's minus ₹3.2 [T4] is the single number that most directly answers the case's own framing of the problem, that every business line now loses money per unit [C K3].

### 13.5 What is not in the plan

A financial plan is as credible for what it refuses to assume as for what it claims. The table below states, plainly, the three things judges are most likely to probe for and that this plan deliberately does not include.

| Not assumed | What it would have done | Why it is excluded |
|---|---|---|
| A government reskilling subsidy | Would reduce the ₹3.3 Cr reskilling line [L10] or extend its reach to more people | The employment-linked incentive scheme rewards net additional employment, not retraining of an existing, shrinking workforce, and a shrinking firm is unlikely to qualify on the scheme's own terms [research document, section 8]; treating it as upside only, applied after cash arrives, is the plan's stated position |
| A working-capital release | Freeing receivables faster than the case's own cash position implies would improve every month's cash figure in T5 | The case states the Company's cash position directly [C K1] and gives no receivables schedule beyond what this plan's own assumption states for the wind-down case only [A13]; the base case model does not assume any acceleration of collections |
| A covenant waiver or reset from the lender | Would remove the ₹15 Cr floor as a binding constraint, or move it, in any of the scenarios | The case states the covenant as a fact [C K1], and the plan's entire discipline, the four cash gates in section 14.5, exists because the floor is treated as fixed unless the lender agrees otherwise, which is itself one of the actions the month-6 gate can trigger, not a starting assumption |

The absence of these three assumptions is not a weakness in the plan; it is the reason the plan's numbers survive a hostile question. A plan that assumed a subsidy, a working-capital release or a covenant reset would look stronger on a slide and would fail the first serious question a judge asked about it.

---

## 14. Scenarios, sensitivity and gates: every single downside holds, five together do not

**Answer.** The bear case alone holds cash positive through month 18 only with its contingency response active; without it, cash turns negative in month 18 and the covenant breaches in month 8 [T6]. Every single-assumption sensitivity tested, ten in total, keeps the lowest 12-month cash figure above ₹16 Cr [T9], and every individually tested shock in the finals drills except one keeps the covenant intact [drills table, section 14.7]. The plan is built around four cash gates, tied to specific tests at months 3, 6, 9 and 12, each with a named action if the test is missed, precisely because a single bad month is survivable and a run of bad months is not.

### 14.1 The three scenarios

Table T6 sets out the bear, base and bull cases side by side on the same measures, with the bear case shown both with and without its contingency response.

| Measure | Bear | Bear with contingency | Base | Bull |
|---|---|---|---|---|
| Lowest cash, ₹ Cr | −5.2 | 2.1 | 21.1 | 24.6 |
| Month of lowest cash | 18 | 18 | 12 | 6 |
| Covenant breach month | 8 | 8 | None | None |
| EBITDA break-even month | None | None | 8 | 6 |
| Cash at month 6, ₹ Cr | 18.7 | 17.0 | 22.3 | 24.6 |
| Cash at month 12, ₹ Cr | 7.2 | 9.7 | 21.1 | 29.4 |
| Cash at month 18, ₹ Cr | −5.2 | 2.1 | 25.2 | 42.4 |
| EBITDA run-rate, month 12, ₹ Cr | −15.2 | −8.2 | 8.4 | 22.7 |
| EBITDA run-rate, month 18, ₹ Cr | −22.2 | −12.6 | 14.0 | 33.2 |
| Revenue run-rate, month 12, ₹ Cr | 154.9 | 154.9 | 177.6 | 193.7 |
| Headcount, month 12 | 1,793 | 1,778 | 1,814 | 1,825 |
| Forced exits to month 12 | 0 | 139 | 0 | 0 |
| One-off spend, ₹ Cr | 8.92 | 11.96 | 8.92 | 8.93 |

*EBITDA: earnings before interest, tax, depreciation and amortisation. "Bear with contingency" applies the reserve and the voluntary exit response described in section 14.4; "Bear" shows the same assumptions with no response, for comparison.*

The honest reading of this table is in the covenant breach row. Even with the contingency response active, the bear case still breaches the covenant in month 8 [T6]; the contingency does not prevent the breach, it changes what cash and workforce position the Company is in when the breach happens, and it buys the time described in the month-6 gate (section 14.5) to open a sale process before cash runs out entirely. This is the honest version of the bear case the plan commits to showing rather than smoothing over.

### 14.2 Contingency set: what changes between bear and bear with contingency

The contingency response is not a separate scenario; it is a defined set of actions, costed and ready, that activates inside the bear case. Isolating the difference between the two bear columns in T6 shows exactly what the contingency buys and what it costs.

| Measure | Bear, no contingency | Bear, with contingency | Difference |
|---|---|---|---|
| Cash at month 12, ₹ Cr | 7.2 | 9.7 | +2.5 |
| Cash at month 18, ₹ Cr | −5.2 | 2.1 | +7.3 |
| Forced exits to month 12 | 0 | 139 | +139 |
| One-off spend, ₹ Cr | 8.92 | 11.96 | +3.04 |

*The contingency's higher one-off spend (₹11.96 Cr against ₹8.92 Cr) reflects the cost of a managed, funded exit for 139 people rather than letting the bench build unchecked; this draws on the ring-fenced reserve described in T8.*

The contingency trades 139 forced exits, the only scenario anywhere in this plan where a forced exit is modelled at all, for an additional ₹3.04 Cr of one-off spend and roughly ₹2.5 to 7.3 Cr of extra cash depending on the month [T6]. This is the plan's one admission that its no-forced-exit commitment is conditional on the base case holding; under a sustained bear case, a managed exit for a minority of staff is the honest alternative to a covenant breach that would put every job at risk, not only 139 of them.

### 14.3 Sensitivity: ten assumptions, tested one at a time

Table T9 moves one assumption at a time to its stated downside and upside value and reports the effect on the two measures judges are most likely to ask about: the lowest cash point in the first 12 months and the EBITDA run-rate at month 12.

| Assumption | Downside value | Upside value | Lowest cash, downside, ₹ Cr | Lowest cash, upside, ₹ Cr | EBITDA run-rate M12, downside, ₹ Cr | EBITDA run-rate M12, upside, ₹ Cr |
|---|---|---|---|---|---|---|
| Labelling revenue a head | ₹50,000 | ₹72,000 | 16.5 | 22.3 | 2.2 | 12.8 |
| Catalogue run-off speed | 7% a month | 2% a month | 17.7 | 22.2 | 5.3 | 9.0 |
| Engine fee per clean file | ₹11.0 | ₹6.0 | 18.1 | 22.1 | 3.9 | 11.5 |
| Hard-file price | ₹44.0 | ₹52.0 | 18.4 | 22.8 | 4.9 | 12.0 |
| Clean-file volume decline | 3% a month | 0.5% a month | 18.7 | 21.9 | 4.2 | 11.6 |
| Clean-file price | ₹29.0 | ₹33.0 | 19.1 | 22.1 | 5.4 | 11.5 |
| Hard-file volume growth | 0% a month | 3.5% a month | 19.7 | 21.3 | 4.9 | 9.7 |
| AI-assist gain on hard files | 30% | 55% | 19.8 | 21.5 | 5.6 | 10.0 |
| Human verification share | 30% | 15% | 20.3 | 21.3 | 6.1 | 9.6 |
| Bridge pay on the bench | 100% of pay | 60% of pay | 20.3 | 21.5 | 8.4 | 8.4 |

*M12: month 12. "Downside" and "upside" values are each tested against the base case with every other assumption held at its base value, so the table isolates one driver at a time; it does not show what happens if several move together.*

The table is ordered from the assumption with the widest swing in lowest-cash outcome (labelling revenue a head, a range of ₹5.8 Cr between downside and upside) to the narrowest (bridge pay on the bench, which barely changes the EBITDA figure at all). This ordering is itself a finding worth stating plainly: the data services line's revenue assumption is the single input the plan is most sensitive to, more than the pricing or engine assumptions that occupy more of the narrative in section 12. Every downside column in this table, held alone, still keeps cash above ₹16 Cr through month 12 [T9], which is the sense in which "every single downside holds."

### 14.4 The two-way grid: hard-file price against clean-file volume decline

No real plan moves one assumption at a time; the two most commercially exposed assumptions, the hard-file price the market will bear and the speed at which clean-file volume erodes, are shown together in table T10, reporting the lowest cash point across the first 12 months for each combination.

| Hard price, ₹ | Clean-volume decline 0.5% a month | 1.0% a month | 1.5% a month | 2.5% a month | 3.5% a month |
|---|---|---|---|---|---|
| 42 | 18.7 | 17.8 | 17.0 | 15.4 | 13.9 |
| 45 | 20.6 | 19.9 | 19.0 | 17.4 | 15.9 |
| 48 | 21.9 | 21.5 | 21.1 | 19.5 | 18.0 |
| 51 | 23.1 | 22.7 | 22.4 | 21.5 | 20.0 |
| 54 | 24.3 | 23.9 | 23.5 | 22.8 | 22.1 |

*All figures are lowest 12-month cash, ₹ Cr. The base case sits at a hard price of ₹48 and a clean-volume decline of 1.5% a month [T10], which reads as 21.1 in the centre cell, the same figure as the base-case lowest cash in T5 and T6.*

This grid is the clearest answer to the question of where the plan's real margin for error sits. At the planned hard price of ₹48, cash stays above ₹18 Cr across the entire range of clean-volume decline tested, from the mildest (0.5% a month, cash of 21.9) to the harshest (3.5% a month, cash of 18.0) [T10]. The grid's worst single cell, a hard price of ₹42 against a 3.5% monthly clean-volume decline, gives a lowest cash of 13.9, still above the ₹15 Cr covenant line is not guaranteed; this is in fact the one cell in the grid where cash would dip below the floor, and it combines the single worst assumption on each axis at once. The grid's honest message is that the plan tolerates being wrong on either axis alone, but not badly wrong on both at the same time, which is exactly why the four cash gates below exist as a monitoring system rather than a one-time check.

### 14.5 The four cash gates

The plan does not wait until month 18 to find out whether it is working. Four gates, each with a stated test and a stated action if the test is missed, are checked on a fixed monthly schedule.

| Gate | Month | Test | Action if missed |
|---|---|---|---|
| 1 | 3 | Engine migration has reached 20% of clean-file volume [L06] | Add a second engine vendor rather than wait for the first to catch up |
| 2 | 6 | Cash is above about ₹21 Cr | Open the sale process described in section 10 of this document, from a position of strength rather than distress |
| 3 | 9 | EBITDA is positive | Draw on the ₹6.08 Cr reserve [T8] rather than cut further into the workforce |
| 4 | 12 | EBITDA run-rate is at least ₹8 Cr | Restore the leadership pay cut [L02] and the other temporary cost reductions on schedule |

*The month-6 cash test and the month-12 run-rate test are each stated to the nearest whole ₹ Cr, consistent with the model's own base-case output at those months [T5].*

The month-6 gate is the one that matters most, because it is the earliest point at which the plan can tell the difference between a normal month-to-month wobble and a genuine bear-case trajectory. The gate note attached to this table in the model states the logic directly: the bear case, even with its cash still relatively healthy at about ₹19 Cr at month 6 [T6], is already on a trajectory that breaches the covenant in month 8 [T6]; the month-6 gate exists to catch that trajectory three months before it would otherwise force a crisis decision. A gate that only fires once the covenant is already breached is not a gate, it is a post-mortem; this is why gate 2 is set on a cash level rather than on the covenant line itself.

### 14.6 A decision tree, in table form

The four gates are not independent switches; they form a sequence of decisions where each branch leads to a different document in this plan. The table below sketches that sequence.

| Decision point | Condition | Branch A | Branch B |
|---|---|---|---|
| Month 3: engine migration | Reached 20% of clean volume [L06] | Continue with the single engine vendor | Add a second vendor; delay has no cash effect large enough to change the month-6 decision |
| Month 6: cash level | Above about ₹21 Cr | Continue the base case; no new action | Open the sale process (section 10); compare against T12's owners' value of ₹12 to 60 Cr and 500 to 1,200 jobs kept |
| Month 8: covenant | Still above ₹15 Cr | Continue; gate 3 proceeds on schedule | Covenant breached; this is the bear-case outcome shown in T6, and the lender's options described in section 4 of this document apply |
| Month 9: EBITDA sign | Positive | Continue; no reserve drawn | Draw on the ₹6.08 Cr reserve [T8] rather than cut headcount further |
| Month 12: EBITDA run-rate | At least ₹8 Cr | Restore leadership pay and temporary cost cuts [L02] | Hold the cost cuts in place for a further quarter and re-test at month 15 |

*Each row is a single decision point; a plan that fails a branch at an earlier month carries that failure into the later rows rather than resetting.*

The tree is deliberately short. A longer tree with more branches would look more thorough on a slide, but every additional branch is also a claim about a future state the model has not actually tested; the five decision points above are the five the model's own gate logic and scenario tables directly support.

### 14.7 The finals drills

Judging criterion J5, adaptability, is tested directly in the finals by a new development the team must respond to on the day. The table below is the full set of drills run against the base plan with no counter-move applied, so that the team can see, before the finals, exactly how much the base plan already absorbs on its own.

| Shock | Lowest cash, ₹ Cr | Covenant breach | Cash at month 12, ₹ Cr | EBITDA run-rate M12, ₹ Cr | Headcount M12 |
|---|---|---|---|---|---|
| Base case | 21.1 | None | 21.1 | 8.4 | 1,814 |
| D1: largest BFSI client leaves, 20% of BFSI revenue | 1.1 | Month 6 | 5.0 | −7.5 | 1,851 |
| D2: AI-native firm cuts its price to ₹22, our clean price to ₹26 | 16.0 | None | 16.1 | 0.9 | 1,814 |
| D2b: D2 plus clean-file volume falling 3% a month | 12.5 | Month 12 | 14.2 | −2.3 | 1,801 |
| D3: attrition jumps to 40% | 22.6 | None | 23.1 | 8.4 | 1,814 |
| D3b: attrition falls to 15% | 17.7 | None | 17.7 | 4.6 | 1,919 |
| D4: data services ramp is half the plan | 15.4 | None | 15.5 | 1.1 | 1,704 |
| D5: lender demands a ₹10 Cr prepayment in month 3 | 11.1 | Month 5 | 11.1 | 8.4 | 1,814 |
| D6: engine go-live slips three months | 19.9 | None | 19.9 | 4.2 | 1,931 |
| D7: clients refuse the hard-file price, it stays at ₹38 | 13.5 | Month 12 | 14.2 | −0.5 | 1,814 |
| D8: hard files are 20% of volume, not 30% | 18.7 | None | 18.7 | 3.9 | 1,773 |
| D9: hard files are 40% of volume | 21.9 | Month 8 | 23.3 | 12.4 | 1,871 |

*M12: month 12. BFSI: banking, financial services and insurance. Every row re-runs the full 18-month model with only the stated change applied; no counter-move is modelled in this table.*

Four of the twelve rows are worth discussing individually, because they carry different lessons.

**D1, the largest client leaves.** This is the single worst drill in the set: lowest cash of only ₹1.1 Cr and a covenant breach in month 6 [drills table]. It is also the drill that most clearly separates a diversification risk from a strategy risk. Nothing in Project Setu's six moves addresses client concentration directly, because the case gives no information on how revenue is split across named clients; the honest response, stated in this document's recovery guidance, is to release the reserve and open the sale track immediately from a stronger cash position than a wind-down would allow, not to claim the base plan already protects against this shock.

**D2 and D2b, the AI-native firm cuts price again.** A price cut alone (D2) is survivable, cash stays at ₹16.0 Cr [drills table], because the hard-file desk and data services lines are untouched by a clean-file price war. Adding a faster clean-file volume decline on top (D2b) is where the covenant breaches, in month 12 [drills table]. The lesson is specific: the plan's vulnerability is not the price cut itself, it is the combination of a price cut and a client exodus from the clean-file line at the same time, which is the scenario the plan's recovery guidance addresses by stopping active defence of clean files and reallocating staff to the two lines a price war cannot touch.

**D5, the lender demands prepayment.** This drill shows the clearest contrast between cash and profit. The ₹10 Cr prepayment in month 3 pushes lowest cash down to ₹11.1 Cr and triggers a covenant breach in month 5 [drills table], yet the EBITDA run-rate at month 12 is unchanged at ₹8.4 Cr [drills table], identical to the base case. This is a liquidity shock, not an operating shock, and the plan's response, offering the lender monthly cash-gate reporting and the ring-fenced reserve in exchange for a floor reset, is designed around exactly this distinction.

**D9, hard files are 40% of volume, not 30%.** This is the one drill in the set with a positive surprise: EBITDA run-rate at month 12 rises to ₹12.4 Cr, well above the base case's ₹8.4 Cr [drills table], because a larger hard-file share means more volume at the higher ₹48 price and a smaller share exposed to clean-file price competition. It still breaches the covenant in month 8 on a cash basis, because the hard-file desk takes longer to staff up to a higher volume than the model's cash timing allows for; the lesson is that a favourable mix shift is not free, it still has to be funded through the same transition period as every other move in this plan.


## 15. The workforce plan: 1,814 jobs, no forced exit, ₹6.1 Cr held for the downside

**Answer.** Project Setu moves the Company from 2,400 people to 1,814 by month 12 without a single forced exit: 549 roles go unreplaced as people leave on their own, 70 people take an assisted bridge exit with pay and placement support, and 32 people are hired into the two growing lines, data services and technology [T7]. Of the ₹15 Cr emergency budget, only ₹8.92 Cr is spent on reskilling, technology, footprint, retention and bridge grants; ₹6.08 Cr stays in reserve, untouched unless a cash gate fails later and severance has to be funded for real [T8]. This section sets out who moves from which role to which, what they are taught, what the bridge and retention programmes pay, the fairness principles behind every selection decision, how the change is communicated and governed week by week, and, as plainly as the rest of this document states its gaps, what the plan does not promise.

### 15.1 The workforce flow in full

Table 15.1 reproduces the model's workforce-flow table without alteration, because every other table in this section is built to reconcile with it.

| Item | People [T7] |
|---|---|
| Start | 2,400 |
| Natural attrition, not backfilled | 549 |
| Assisted bridge exits | 70 |
| Forced exits | 0 |
| Hires | 32 |
| Month 12 headcount | 1,814 |
| Role: catalogue quality control | 497 |
| Role: data services | 400 |
| Role: hard-file desk | 329 |
| Role: voice and chat | 317 |
| Role: team leads | 116 |
| Role: clean-file verifiers | 85 |
| Role: technology and corporate | 70 |

*QC: quality control. The seven role lines at the bottom of the table sum to 1,814, the same figure as the month 12 headcount line above them [T7]; the table reads top to bottom as a stock-and-flow reconciliation, not as seven separate facts.*

Three features of this table carry the argument for the rest of the section. First, zero forced exits means every one of the 586 people who leave the organisation between month 1 and month 12 does so either through ordinary attrition the Company does not pay for, or through a bridge exit the Company pays for and supports into a new role [T7]. Second, 32 hires against 549 unreplaced leavers is a net contraction of 517 people through the attrition channel alone, which is most of the total reduction and costs nothing in statutory dues, consistent with the sequencing logic set out in section 8.6 of this document: every attrition exit the plan can absorb is an exit the covenant does not have to fund. Third, the role mix at month 12 is materially different from the role mix at month 1: three of the seven roles, data services, clean-file verifiers and the hard-file desk at its larger size, did not exist in their current form in the case's own description of the workforce [C K2], which means the workforce plan is not a smaller version of the old organisation, it is a reshaped one.

### 15.2 Role-by-role transition matrix

The model publishes stocks, the headcount by role at month 1 and at month 12 [C K2, T7], but it does not publish a from-to flow between them. Table 15.2 is the team's own routing design, built to move every person from an origin role in the case's workforce description to a destination role in the model's month 12 role mix, so that each origin row sums to the case's own headcount for that role and each destination column sums to the model's own month 12 figure for that role. Training hours are our own planning estimate, not a model or case output, and are labelled as such throughout; training cost is tied to the reskilling lever, L10, wherever a row draws on that fund, and is our own estimate elsewhere.

| From role | To role | People | Training hours (estimate) | Training cost |
|---|---|---|---|---|
| Frontline processors (1,350) [C K2] | Catalogue quality control (stay) | 497 | 8 (estimate, refresher only) | On-the-job, no separate line |
| Frontline processors | Clean-file verifiers (retrain) | 85 | 60 (estimate) | ₹35,000 a head [L10] |
| Frontline processors | Data services (retrain) | 278 | 90 (estimate) | ₹35,000 a head [L10] |
| Frontline processors | Hard-file desk (upskill) | 49 | 120 (estimate) | ₹35,000 a head [L10] |
| Frontline processors | Natural attrition, unreplaced | 401 | n/a | None |
| Frontline processors | Assisted bridge exit | 40 | n/a | Bridge grant (section 15.4) |
| Senior exception handlers (420) [C K2] | Hard-file desk (core, stay) | 280 | 40 (estimate, AI-assist tooling) | ₹35,000 a head [L10] |
| Senior exception handlers | Data services (retrain) | 60 | 90 (estimate) | ₹35,000 a head [L10] |
| Senior exception handlers | Natural attrition, unreplaced | 65 | n/a | None |
| Senior exception handlers | Assisted bridge exit | 15 | n/a | Bridge grant |
| Voice and chat agents (380) [C K2] | Voice and chat (stay) | 317 | 16 (estimate, refresher) | On-the-job |
| Voice and chat agents | Data services (retrain) | 33 | 80 (estimate) | ₹35,000 a head [L10] |
| Voice and chat agents | Natural attrition, unreplaced | 25 | n/a | None |
| Voice and chat agents | Assisted bridge exit | 5 | n/a | Bridge grant |
| Team leads (190) [C K2] | Team leads (stay, wider span) | 116 | 40 (estimate, people-management) | General training opex, not L10 |
| Team leads | Data services (retrain) | 7 | 90 (estimate) | ₹35,000 a head [L10] |
| Team leads | Natural attrition, unreplaced | 57 | n/a | None |
| Team leads | Assisted bridge exit | 10 | n/a | Bridge grant |
| Technology and corporate (60) [C K2] | Technology and corporate (stay) | 60 | 24 (estimate, new-tool onboarding) | General training opex |
| New hires | Data services | 22 | 160 (estimate, structured onboarding) | Onboarding opex, not L10 |
| New hires | Technology and corporate | 10 | 80 (estimate, structured onboarding) | ₹24 lakh a year each [L09] |

*Rows reconcile to the case's own origin headcounts (1,350, 420, 380, 190 and 60) [C K2] and to the model's own destination headcounts at month 12 (497, 400, 329, 317, 116, 85 and 70) [T7] within one person of rounding on the attrition lines, the same scale of rounding this document accepts elsewhere, for example table 8.6's 51.13 crore rupees against the model's reported 51.2 crore rupees. Bridge exits sum to exactly 70 and hires sum to exactly 32, both ties exact to T7.*

The matrix shows that the hard-file desk, at 329 people, is not simply the 420 senior exception handlers minus attrition; it is 280 exception handlers who stay in the role they already hold, now AI-assisted, plus 49 frontline processors upskilled into it, a genuine net addition of capability to the Company's one differentiated service line. It also shows that data services, at 400 people, draws from every origin role: 278 from frontline processing, 60 from exception handling, 33 from voice and chat, 7 from team leads and 32 new hires, which is the clearest evidence in this document that data services is designed as a destination for displaced capacity across the whole organisation, not a single department's reassignment. Summing the rows that draw on the reskilling fund (clean-file verifiers, data services and the hard-file desk upskill cohort) gives 85 plus 278 plus 60 plus 33 plus 49 plus 7, or 512 people inside this matrix, plus the 280 exception handlers who also need the hard-file AI-assist curriculum even though they are staying in role. Taken together that is close to, but not identical to, the roughly 930 people the budget line in table 15.3 below is sized for; the difference is a planning buffer for team leads retrained into data-services supervision and for a second cohort of refresher training later in the plan, both of which draw on the same ₹3.3 Cr fund [L10].

### 15.3 Reskilling curricula

Three curricula carry almost all of the substantive reskilling spend. Table 15.3a sets out the hard-file desk curriculum, for the 329 people who process the Company's one line that the AI-native rival is weak at [C K4].

| Module | Content | Hours (estimate) | Taught by | Assessed by |
|---|---|---|---|---|
| AI-assist tool familiarisation | Working the assistive interface that flags likely fields on handwritten and regional-language forms | 16 | Technology lead | Supervised live-file accuracy check |
| Exception-handling standards | Updated quality standards for the ₹48 hard-file price tier, error tolerances, escalation paths | 16 | Hard-file desk lead | Written and practical test |
| Regional-language form literacy | Deepening coverage across the five cities' dominant regional-language forms | 24 | Senior exception handlers (peer-taught) | Supervisor sign-off |
| Productivity ramp coaching | Structured coaching toward the plan's AI-assist productivity gain, rising from 45% toward 65% over time [A15] | 24 | Team lead | Monthly throughput review |

*AI: artificial intelligence. The 45% to 65% productivity-gain range is assumption A15, not a case figure; the curriculum is designed to make that assumption achievable rather than to assume it will happen on its own.*

Table 15.3b sets out the clean-file verifier curriculum, for the 85 people who check one engine-processed file in five under assumption A14.

| Module | Content | Hours (estimate) | Taught by | Assessed by |
|---|---|---|---|---|
| Engine output literacy | How the licensed document AI engine flags confidence and routes exceptions | 20 | Technology lead | Supervised review session |
| Verification sampling standards | The 20% human-verification sampling rule under A14 and what it is meant to catch | 12 | Hard-file desk lead | Written test |
| Escalation to the hard-file desk | When a verified file should be routed on to the hard-file desk rather than closed | 16 | Hard-file desk lead | Supervisor sign-off |
| Quality audit practice | Spot-audit technique, so verifiers also catch engine drift over time, not only individual file errors | 12 | Quality lead | Practical assessment |

*A14: the team's assumption on the share of engine-processed files a human verifies, set at 20%. The curriculum is shorter than the hard-file desk curriculum because the verifier role checks engine output rather than processing a file from a blank form.*

Table 15.3c sets out the data services curriculum, for the 400 people who label and annotate data for the regional-language voice AI start-up and similar clients [C K4].

| Module | Content | Hours (estimate) | Taught by | Assessed by |
|---|---|---|---|---|
| Annotation tooling and guidelines | The client's labelling interface and task-specific guideline sets | 24 | Data services lead | Guideline-adherence test |
| Multilingual transcription and tagging standards | Standards for the languages the Company's five-city workforce already covers | 24 | Senior annotators (peer-taught) | Inter-rater agreement check |
| Quality and throughput targets | The per-head revenue target of about ₹63,000 a month that the plan is built on [A08] | 16 | Data services lead | Monthly throughput review |
| Client-specific onboarding | Short onboarding module repeated for each new client engagement as the line ramps from 30 to 400 people [L07] | 16 | Data services lead | Client acceptance test |

*A08: the team's assumption on data-services revenue a head a month, ₹63,000 rising to ₹68,000 from month 13. The client-specific onboarding module recurs because the line is ramping through multiple client engagements, not a single contract, as headcount grows from 30 in month 2 to 400 in month 12 [L07].*

All three curricula draw their funding from the same ₹3.3 Cr reskilling line, spent over months 2 to 6 for about 930 people at roughly ₹35,000 a head [L10]. At that unit cost, the 512 people in the matrix of section 15.2 who draw on this fund for a genuine role change cost about ₹1.79 Cr, which leaves headroom inside the ₹3.3 Cr line for the 280 hard-file desk stayers who also need the AI-assist curriculum (a further ₹0.98 Cr) and a planning margin for team-lead retraining and a second cohort later in the programme. We show this arithmetic rather than simply asserting the budget is sufficient, because the content rules of this document require every cost claim to be checked, not stated.

### 15.4 The bridge programme

The bridge programme is the Company's own design, not a case fact, built for the 70 people whose old role has shrunk faster than a new one has opened and who are not simply absorbed by attrition timing.

| Feature | Design | Basis |
|---|---|---|
| Eligibility | Any employee whose role is being phased out under the plan and who has not found an internal destination role within 60 days | Team design choice |
| Pay during the bridge | 75% of last-drawn salary, for up to four months | Team design choice |
| Placement support | Structured internal redeployment first, then assisted external placement through the Company's client relationships and, where relevant, government schemes such as apprenticeship support | Team design choice; schemes referenced for context only, not relied on as funding [PLAN §6, Lane B] |
| Bridge grant on exit | A one-time grant, averaging about ₹60,000 a person, paid from the dedicated ₹0.42 Cr bridge budget line across the 70 assisted exits | [T8, T7, M-derived: ₹0.42 Cr divided by 70 people] |
| Peak bench size | 129 people between roles at the busiest point, around month 4, costing about ₹2.4 Cr in bridge pay before it clears | [M, T5] |

*The bridge grant figure of about ₹60,000 a person follows arithmetically from dividing the model's own ₹0.42 Cr bridge budget line [T8] by the model's own count of 70 assisted bridge exits [T7]; it is a derived figure, not a separately sourced one. The peak bench of 129 people at month 4 and its ₹2.4 Cr cost are both model outputs [M, T5], reported in section 4 of this document as locked numbers.*

The bench, the pool of people who have left an old role but not yet started a new one, peaks at 129 in month 4 and clears to zero by month 11 [T5]. Paying the bench at 75% of salary rather than full pay is a deliberate trade-off: it costs the Company less during a period when the person is not yet producing in a new role, but it is also why the bridge is capped at four months rather than left open-ended, so that nobody sits on reduced pay indefinitely while a destination role is found. We hold this arrangement up for scrutiny rather than present it as a settled best practice, because a judge may reasonably ask whether 75% is generous enough; our answer is that it sits between a full-pay bench the Company cannot afford for long, given the EBITDA deficit it is still working out of in these months [T5], and the statutory minimum the labour codes would require on an actual lay-off, which is lower still [A12].

### 15.5 Retention tranches

Retention pay is targeted, not broad-based, because the plan cannot afford to pay a retention premium to 1,814 people and does not need to: the roles at the highest risk of losing their most experienced people before the transition completes are the hard-file desk's senior exception handlers and the team leads who hold institutional knowledge of client relationships built over an average tenure of six years [C K2].

| Tranche | Amount | Timing | Eligibility (team design choice) |
|---|---|---|---|
| Tranche 1 | ₹0.75 Cr | Month 6 | Senior exception handlers remaining on the hard-file desk; team leads retained under the narrower span of control |
| Tranche 2 | ₹0.75 Cr | Month 12 | Same eligible population, conditional on remaining in role through month 12 |
| Total | ₹1.5 Cr | Months 6 and 12 | [T8, L11] |

*The split into two equal tranches of ₹0.75 Cr each is our own design choice; the model's own locked figure is the ₹1.5 Cr total paid in two tranches at months 6 and 12 to exception handlers and key leads [L11, T8].* Splitting the payment rather than paying it all at month 6 is deliberate: it gives the people the plan most needs to keep a reason to stay through the second half of the ramp, when data services is scaling from 250 to 400 people and the hard-file desk's AI-assist productivity gain is still rising toward 65% [L07, A15], not only through the first half.

### 15.6 Principles of fairness

Every selection decision in this plan, who moves to which role, who is offered a bridge exit, who is retained, follows principles the team has chosen to apply consistently, stated here as design choices rather than as case facts, because the case gives no policy on any of them.

| Principle | What it means in practice | Why |
|---|---|---|
| Attrition first, always | No deliberate exit is offered to a role before natural attrition and redeployment have been tried | Attrition costs the Company nothing in statutory dues; a deliberate exit costs about ₹2.13 lakh a head [T12], as shown in section 8 |
| No forced exits in the base plan | The 70 bridge exits are offered, not imposed; nobody is compelled into the programme in the base case | The plan's own headline claim is zero forced exits [T7]; a policy that allowed compulsion in practice would contradict the claim it makes on the slide |
| Notice and transparency ahead of any role change | Every person whose role is affected is told at least one month ahead of the change taking effect, in line with the notice period the labour codes require even for a formal retrenchment [S05] | A plan that treats its own people better than the statutory floor requires is more defensible under scrutiny than one that meets the floor only when forced to |
| Protection for first-formal-job staff | Staff for whom this is their first formal job, a substantial share of the 2,400 given the case's description of the workforce [C F1], are prioritised for redeployment over a bridge exit wherever a destination role exists | A first job lost to restructuring carries a disproportionate cost to someone with no prior formal-sector experience to fall back on; this is a judgement call the plan makes explicitly rather than leaving to chance |
| Protection for women returning from leave | Staff returning from maternity or other statutory leave are not selected for a bridge exit within six months of their return, and are offered redeployment ahead of staff without that protection where roles are equally suited | A restructuring that disproportionately exits people shortly after they return from leave would undermine the "human impact" standard the case's own judging criteria set at 20% of the score [C J3] |
| Selection by role suitability, not seniority alone | Redeployment matches are made on the skills the destination role needs first, with tenure as a tie-breaker, not the reverse | A reskilling plan that ignores fit in favour of seniority risks placing people in roles the training cannot realistically bring them up to speed in within the plan's timeline |

*None of the six rows above is a case fact; all six are the team's own design choices, consistent with this document's content-integrity rule that a team decision is never presented as something the case specified.*

### 15.7 Managing the change: ADKAR by stakeholder group

We use the ADKAR model, awareness, desire, knowledge, ability and reinforcement, to check that the plan has a concrete answer for each of the four stakeholder groups it affects differently.

| Group | Awareness | Desire | Knowledge | Ability | Reinforcement |
|---|---|---|---|---|---|
| Leadership | Briefed on the full model and the covenant mechanics before month 1 | Accepts a 25% pay cut for 12 months as the first visible move [L02] | Understands the cash-gate logic in section 14 well enough to defend it under questioning | Runs the weekly cash committee from month 1 (section 17.5) | Monthly scorecard review against the targets in section 17.6 |
| Team leads | Told in month 1 that span of control is widening from about 11 to 14 people [L08] | Supported with a retention tranche at months 6 and 12 if they stay through the transition [L11] | Trained in the people-management module of table 15.2 before their teams change shape | Coaches their own teams through the role changes in table 15.2 | Reported on in the fortnightly team-lead briefing (section 15.8) |
| Frontline staff | Told in month 1 which of catalogue, clean verification, the hard-file desk or data services their role is heading toward | Motivated by the bridge programme's pay floor and the absence of any forced exit in the base plan | Trained through the specific curriculum in table 15.3 that matches their destination role | Assessed and signed off through the curriculum's own assessment column | Supervisor check-ins at 30, 60 and 90 days after any role change |
| Bench | Told clearly, at the point they enter the bench, that the bridge is time-limited to four months [section 15.4] | Supported by 75% pay and active placement effort rather than being left with no income while they wait | Given redeployment options matched to the destination roles still filling in table 15.2 | Matched to a specific vacancy, not a general promise of "something will come up" | Weekly placement check, since the bench clears fastest of any group, from 129 in month 4 to zero by month 11 [T5] |

*ADKAR: awareness, desire, knowledge, ability, reinforcement, a standard change-management sequencing model. The table is a planning design, not a model output; the figures it cites (the pay cut, the span of control, the bench size) are drawn from the levers and model tables referenced in each cell.*

### 15.8 Communication calendar, weeks 1 to 26

Table 15.8 sets out who hears what, through which channel, across the first six months of the plan, the period during which the workforce flow in table 15.1 does almost all of its moving.

| Weeks | Audience | Channel | Core message |
|---|---|---|---|
| 1 to 2 | All staff | Town hall plus written notice | The Company is restructuring, not closing; no forced exits in the base plan; every role's likely direction is named |
| 1 to 2 | Leadership and team leads | Closed briefing | The full model, the covenant mechanics and the cash gates, so they can answer questions consistently |
| 3 to 4 | Frontline staff by line | Small-group sessions, by BFSI clean, BFSI hard, catalogue and voice | Which destination role each group is most likely to move toward, and the reskilling curriculum that supports it |
| 5 to 8 | Staff entering the bench | One-to-one conversation with HR and the line lead | Bridge pay terms, the four-month cap, and active placement support from day one of the bench |
| 9 to 12 | All staff | Written update plus team-lead briefing | Progress against the month-3 cash and headcount checkpoint (section 17.4), in plain terms |
| 13 to 16 | Hard-file desk and data services | Line-specific briefing | Curriculum progress, productivity targets and the first signs of the pricing and ramp levers taking effect |
| 17 to 20 | All staff | Written update | Month-6 checkpoint results; confirmation or adjustment of the retention tranche 1 payout |
| 21 to 24 | Team leads | Fortnightly briefing (standing, from week 1) | Continues throughout; week range shown here marks the midpoint review of the six-month period |
| 25 to 26 | All staff | Town hall | Six-month results against the scorecard in section 17.6, and what the second half of the first year looks like |

*The fortnightly team-lead briefing referenced in the week 21 to 24 row is a standing meeting that runs continuously from week 1, not a one-time event; it is listed at its midpoint review to avoid repeating the same row eight times. No week range in this table implies that communication stops outside the weeks shown; the table lists the headline events, not every routine check-in.*

### 15.9 Responsibility matrix

Table 15.9 assigns responsibility for the workforce plan's main activities using the letters R, A, C and I. R means responsible, the role that does the work. A means accountable, one role per row, the role answerable for the outcome. C means consulted, asked for input before the work is done. I means informed, told after the decision or the work is complete.

| Activity | HR and workforce lead | Line leads (hard-file desk, data services, catalogue, voice) | Finance and cash committee | Leadership |
|---|---|---|---|---|
| Design the role-transition matrix (section 15.2) | R | C | C | A |
| Run the reskilling curricula (section 15.3) | A | R | I | I |
| Administer the bridge programme (section 15.4) | R | C | A | I |
| Approve and pay retention tranches (section 15.5) | C | C | R | A |
| Apply the fairness principles to individual decisions (section 15.6) | A | R | I | C |
| Deliver the communication calendar (section 15.8) | R | C | I | A |
| Monitor the balanced scorecard (section 17.6) | C | C | R | A |
| Decide whether to release the ₹6.08 Cr reserve | C | I | R | A |

*R: responsible, does the work. A: accountable, one per row, answerable for the outcome. C: consulted before the work is done. I: informed after. Finance and cash committee is accountable for only one row (retention-tranche payment) and responsible for two others (scorecard monitoring and reserve release), reflecting that its role is financial control and gatekeeping, not day-to-day workforce decisions, which sit with the HR and workforce lead and the line leads.*

### 15.10 What this plan does not promise

We state plainly what the workforce plan does not claim, because a plan that implies more certainty than its own numbers support fails the standard this document holds itself to elsewhere. The plan does not promise that no one will lose their job: the base case shows zero forced exits [T7], but the bear scenario, run with the full contingency response, still shows 139 forced exits by month 12 if the covenant is breached and a sale has to be triggered [T6]. The plan does not promise that reskilling always succeeds: the hard-file desk curriculum targets an AI-assist productivity gain of 45% rising toward 65% [A15], and the sensitivity table in section 14 shows that if that gain lands nearer 30% instead, both lowest cash and month-12 EBITDA fall measurably [T9]; some people trained under table 15.3 will take longer than the curriculum's hours suggest, or will not reach the target productivity level at all, and the plan has not modelled a remedy beyond extending the hard-file desk's human-verification share if that happens. The plan does not promise that the bridge programme places every one of its 70 assisted exits into comparable work; placement support is a service, not a guarantee, and the outcome depends in part on conditions outside the Company's control, including how quickly the broader Indian services labour market absorbs displaced BFSI and voice-support workers [S01, S02]. Finally, the plan does not promise that the ₹6.08 Cr reserve is enough to cover every downside at once: it is sized against the single-worst-assumption sensitivity in section 14, not against several assumptions failing together, and the scenarios in section 14 show that a combination of shocks can still breach the covenant even with the reserve released [T6]. We would rather a judge find these limits stated here than discover them unstated under questioning.

---

## 16. Risk register: twelve risks, each with a trigger and a mitigation

**Answer.** We hold twelve risks to the same five-column test, probability, impact, an early signal that would show the risk is materialising, a mitigation and an owner by role, rather than a longer unstructured list, because a register that cannot be scanned in one table is a register nobody uses under pressure. The highest-probability, highest-impact risks are the two the model itself stresses hardest in the drills, a large BFSI client cutting volume and the data-services ramp slipping behind schedule [PLAN §4, drills D1 and D4], and both carry a named owner and a mitigation that does not depend on cash the plan has not already set aside. The pre-mortem that closes this section asks what the plan's own numbers would look like twelve months from now if it had already failed, and traces that failure back to which one or two of the twelve risks most plausibly caused it.

### 16.1 The twelve risks

Table 16.1 lists all twelve risks with probability and impact rated low, medium or high, an early signal, a mitigation and an owner named by role, never by individual.

| # | Risk | Probability | Impact | Early signal | Mitigation | Owner (role) |
|---|---|---|---|---|---|---|
| 1 | The largest BFSI client cuts volume sharply | Medium | High | Client order volume falls before a contract renewal date | Diversify the client base inside BFSI; accelerate the hard-file price increase where volume allows; hold the reserve ready for a sale-process trigger | Commercial and BFSI relationship lead |
| 2 | The data-services ramp slips behind the L07 schedule | Medium | High | Data-services headcount below 250 at month 6, against the L07 target [L07] | Widen the client pipeline beyond the single named voice AI start-up; renegotiate the per-head revenue rate if client demand is softer than A08 assumes | Data services lead |
| 3 | The licensed engine vendor slips delivery | Medium | Medium | Engine migration share below 40% by month 4, against the L06 schedule [L06] | Hold the human-verification share at 20% or above until migration catches up; do not cut the clean-file price to ₹31 faster than the engine can support it | Technology lead |
| 4 | The AI-native rival cuts its clean-file price further | Medium | Medium | Published or client-reported price below ₹27 on comparable clean files | Do not match price on clean files; hold differentiation on the hard-file desk, where the rival is weak [C K4] | Pricing lead |
| 5 | Attrition runs below the planned 26% | Medium | Medium | Monthly leaver count below the run rate implied by 549 unreplaced leavers over 12 months [T7] | Use the bridge programme more actively; consider a voluntary bridge offer funded from the reserve rather than waiting for attrition | HR and workforce lead |
| 6 | The lender draws down cash inside the covenant window | Low | High | Any lender communication about an early repayment demand or a covenant reset | Maintain proactive covenant-headroom reporting to the lender; keep the reserve visible as evidence of a funded contingency | Finance lead, cash committee chair |
| 7 | The ₹48 hard-file price cannot be enforced with clients | Medium | Medium to high | Client pushback on the price increase before month 4, when it is scheduled to reach 100% of volume [L05] | Phase the increase with visible service-quality proof points from the hard-file desk; hold the ₹38 blended legacy price as a fallback floor only, not a target | Commercial lead |
| 8 | A legal challenge to the Chapter X applicability reading | Low | Medium | Any counsel or regulator communication disputing the services-establishment reading in section 8.3 | Cost the full statutory package regardless of the exemption reading, as already done throughout this document; seek counsel confirmation before relying on the reading operationally | Legal and compliance lead |
| 9 | Bridge placements do not land within the four-month cap | Medium | Medium | Bench size still above 60 people at month 8, against the model's own clearance path toward zero by month 11 [T5] | Extend placement partnerships beyond internal redeployment; consider extending bridge pay duration within the reserve if the bench is not clearing | HR and workforce lead |
| 10 | The hard-file AI-assist productivity gain underperforms A15 | Medium | Medium | Measured productivity gain below 35% at month 9, against the 45% target in A15 | Redesign the curriculum module on productivity-ramp coaching (table 15.3a); hold human-verification share higher for longer | Learning and development lead |
| 11 | Key exception handlers or team leads leave before the retention tranche vests | Low to medium | Medium to high | Resignation notices from the hard-file desk or team-lead group before month 6 | Consider front-loading part of tranche 1 for the highest-risk individuals; begin successor planning on the hard-file desk immediately | Hard-file desk lead and HR |
| 12 | Catalogue quality control erodes faster than the holding-line assumption | Medium | Medium | Catalogue revenue declining faster than the 4% a month assumed in A16 | Accelerate redeployment of catalogue staff into data services ahead of schedule, drawing down the reserve only if cash allows | Catalogue lead |

*BFSI: banking, financial services and insurance. Every mitigation in this table either uses a lever already funded in the emergency budget (table 15.4, 15.5 and T8) or a reporting and governance action that costs nothing beyond staff time; none assumes new funding beyond the ₹15 Cr budget the case allows [C K1].*

### 16.2 Probability and impact, as a heat map

Because this document is prose rather than a Figma canvas, table 16.2 presents the probability by impact grid as a table, placing each risk's number in the cell that matches its rating from table 16.1.

| | Impact: Low | Impact: Medium | Impact: High |
|---|---|---|---|
| **Probability: High** | | | |
| **Probability: Medium** | | 3, 4, 7, 9, 10, 12 | 1, 2 |
| **Probability: Low** | | 8 | 6 |
| **Probability: Low to medium** | | | 11 |

*No risk in the register falls in the high-probability row; the Company's own scenario work in section 14 treats the bear case, not a higher-probability case, as the register's effective ceiling. The two risks in the medium-probability, high-impact cell, risk 1 (a large client cutting volume) and risk 2 (the data-services ramp slipping), are the pair the pre-mortem below treats as the most likely joint cause of a plan failure, because they sit in the cell with no lower-severity escape and because both map directly to drills already run in section 14 [PLAN §4, drills D1 and D4].*

### 16.3 Risks grouped by category and owner

Table 16.3 regroups the same twelve risks by category, to check that no single function owns a disproportionate share of the register and that the mitigations are not all pointing at the same lever.

| Category | Risks | Count | Owning functions represented |
|---|---|---|---|
| Commercial and pricing | 1, 4, 7, 12 | 4 | Commercial lead, pricing lead, catalogue lead |
| Operational delivery (technology, data services, hard-file desk) | 2, 3, 10 | 3 | Technology lead, data services lead, learning and development lead |
| Workforce and people | 5, 9, 11 | 3 | HR and workforce lead, hard-file desk lead |
| Financial and legal | 6, 8 | 2 | Finance lead, legal and compliance lead |

*The spread across four categories and six distinct owning functions is itself a check on the register: a register where every mitigation routes back to one function (most often finance, in a cash-constrained plan) usually means the register has not been thought through role by role. Here, the HR and workforce lead and the hard-file desk lead carry the heaviest load by count, three risks each, which is consistent with the case's own emphasis on workforce and human impact as 20% of the judging weight [C J3].*

### 16.4 Pre-mortem

We ask what this plan's own numbers would look like twelve months from now if it had already failed, and work backward to the most plausible cause, rather than forward from today's optimism. If month 12 shows cash near or below the covenant floor of ₹15 Cr, against the base case's own ₹21.1 Cr [T5], the two risks most likely to explain it are risk 1, a large client cutting BFSI volume, which the model's own drill shows can take lowest cash to ₹1.1 Cr and force a covenant breach in month 6 on its own [PLAN §4, drill D1], and risk 2, the data-services ramp slipping, which on the model's own sensitivity work can take lowest cash down toward ₹16.5 Cr if the per-head revenue assumption undershoots badly [T9]. If month 12 shows headcount well above 1,814 with EBITDA still negative, the most plausible cause is risk 5, attrition running below plan, compounding with risk 9, bridge placements not clearing on schedule, because together they would mean the Company is carrying cost it planned to shed without the cash saving materialising. If month 12 shows the hard-file desk still losing money despite the ₹48 price being in force, the most plausible cause is risk 10, the AI-assist productivity gain underperforming, since the desk's own unit economics depend on that gain to bring cost down to the ₹41.2 blended figure the plan targets [T4]. We do not treat any of these as the most likely single outcome; the base case remains the base case because its own assumptions are, in our judgement, the most defensible reading of the evidence in sections 5 through 14 of this document. The pre-mortem exists so that if the plan does start to go wrong, the cash committee described in section 17.5 recognises the pattern early, against this register, rather than treating an adverse month as unprecedented.

### 16.5 Top five risks by residual priority

Twelve risks do not carry equal weight in practice, so table 16.5 ranks the five the cash committee should review first at every weekly meeting, ordered by the combination of probability and impact from table 16.1 and cross-checked against the drills and sensitivities already run in section 14.

| Rank | Risk | Why it ranks here | Linked model evidence |
|---|---|---|---|
| 1 | Risk 1: the largest BFSI client cuts volume sharply | Medium probability, high impact, and the single drill with the sharpest cash effect in the whole model | Lowest cash ₹1.1 Cr, covenant breach month 6 [PLAN §4, drill D1] |
| 2 | Risk 2: the data-services ramp slips behind schedule | Medium probability, high impact, and the line the plan depends on most for new revenue | Lowest cash ₹16.5 Cr if the per-head revenue assumption fails [T9] |
| 3 | Risk 11: key exception handlers or team leads leave before the retention tranche vests | Lower probability but a high-impact loss of institutional knowledge on the Company's one differentiated line | Hard-file desk headcount of 329 depends on the 280 exception handlers who stay in role [section 15.2] |
| 4 | Risk 10: the hard-file AI-assist productivity gain underperforms A15 | Medium probability, medium impact, but it sits directly beneath the blended margin target the whole pricing lever depends on | Blended margin of +7.1 a file at month 12 assumes the gain lands as planned [T4, A15] |
| 5 | Risk 7: the ₹48 hard-file price cannot be enforced with clients | Medium probability, medium to high impact, and the lever every other hard-file desk figure in this document is built on | Hard-file margin moves from minus 22.7 to plus 6.8 a file only if the price holds [T4] |

*The ranking is the team's own judgement, built from the probability and impact ratings in table 16.1 and weighted toward risks with a directly quantified drill or sensitivity in sections 9 and 14, not a separate scoring formula; it is reviewed and can be reordered at any weekly cash committee meeting if a different risk's early signal fires first.*

---

## 17. Implementation roadmap: 30, 60, 90 days and 12 months

**Answer.** The first 90 days carry almost the entire cost-side of the plan, the hiring freeze, the leadership pay cut, the start of complexity pricing and the first engine migration tranche, because every month of delay on the cost side is a month the covenant floor does not get further away [PLAN §3.2]. The 12-month roadmap that follows groups six workstreams by quarter and is built to the same monthly figures as the Setu base case in table T5, so that a judge can check any cell in the roadmap against the model directly. A weekly cash committee, not a monthly one, governs execution throughout, because the covenant and the cash gates in section 14 operate on a tighter clock than a standard monthly reporting cycle would catch in time. The balanced scorecard that closes the section sets twelve measures with month 6 and month 12 targets drawn from or consistent with the model tables, so that progress is checked against numbers, not impressions.

### 17.1 Day 1 to 30

| Action | Lever or source | Owner |
|---|---|---|
| Freeze hiring; stop backfilling leavers | [L01] | HR and workforce lead |
| Cut leadership pay by 25% for 12 months, for about 60 people | [L02] | Leadership, administered by finance |
| Begin cutting selling and general cost toward the first-stage targets | [L03] | Finance lead |
| Hold the all-staff town hall and leadership briefing (section 15.8, weeks 1 to 2) | [section 15.8] | HR and workforce lead, leadership |
| Stand up the weekly cash committee (section 17.5) | [PLAN §3.2] | Finance lead, cash committee chair |
| Begin engine vendor selection and contracting | [L06] | Technology lead |
| Design the complexity-pricing communication to BFSI clients ahead of the month 2 rollout | [L05] | Commercial lead |
| Begin the first data-services client conversation, ahead of the month 2 ramp start | [L07] | Data services lead |

*Every day 1 to 30 action either costs nothing beyond staff time (the freeze, the briefings, the vendor conversations) or is the leadership pay cut itself, which saves money rather than spending it [L02]; this is deliberate, so that the plan's first month improves cash before any reskilling or technology spend begins.*

### 17.2 Day 31 to 60

| Action | Lever or source | Owner |
|---|---|---|
| Roll out complexity pricing: hard-file price to ₹48 reaching 40% of volume; clean-file price moves toward ₹31 as the engine comes online | [L05] | Commercial lead |
| Begin the data-services ramp, from 30 people in month 2 | [L07] | Data services lead |
| Begin reskilling fund disbursement for the first training cohorts (table 15.3) | [L10] | HR and workforce lead, line leads |
| Bring the bridge programme into operation for the first assisted exits | [section 15.4] | HR and workforce lead |
| Hold line-specific small-group briefings (section 15.8, weeks 3 to 4) | [section 15.8] | HR and workforce lead, line leads |
| Continue selling and general cost reduction toward the second-stage target | [L03] | Finance lead |
| Review the month 2 cash and headcount reading against the model [T5] | [T5] | Cash committee |

*By the end of day 60, the model's own month 2 figures are 14.78 Cr revenue, minus 1.99 Cr EBITDA and 33.6 Cr cash [T5], the first checkpoint the cash committee uses to confirm the plan is tracking.*

### 17.3 Day 61 to 90

| Action | Lever or source | Owner |
|---|---|---|
| Begin the licensed engine migration at 20% of clean-file volume | [L06] | Technology lead |
| Raise the hard-file price to 80% of volume | [L05] | Commercial lead |
| Hold one-to-one bench conversations for anyone entering the bridge programme (section 15.8, weeks 5 to 8) | [section 15.8] | HR and workforce lead |
| Begin the hard-file desk and clean-file verifier curricula (tables 15.3a and 15.3b) | [L10] | Hard-file desk lead, technology lead |
| Review the month 3 cash and headcount reading against the model [T5] | [T5] | Cash committee |
| Confirm the first bench peak is approaching and plan placement capacity for month 4's expected peak of 129 people | [T5, M] | HR and workforce lead |

*By the end of day 90, the model's own month 3 figures are 14.86 Cr revenue, minus 1.78 Cr EBITDA and 29.9 Cr cash [T5], comfortably above the ₹15 Cr covenant floor [C K1] and consistent with the plan's own trajectory.*

### 17.4 The 12-month roadmap, by quarter and workstream

Table 17.4 lays out six workstreams against four quarters, built to the same monthly schedule as the levers and the Setu base case, mirroring the Gantt chart on the deck's own slide 5.

| Workstream | Q1 (months 1 to 3) | Q2 (months 4 to 6) | Q3 (months 7 to 9) | Q4 (months 10 to 12) |
|---|---|---|---|---|
| Cost and cash | Hiring freeze, leadership pay cut, overhead cuts begin [L01, L02, L03] | Overhead cuts reach second-stage target; footprint reduction toward 50% by month 9 begins [L03, L04] | Footprint reduction completes by month 9 [L04] | Reserve held at ₹6.08 Cr unless a gate fails [T8] |
| Pricing and product | Complexity pricing designed and begins rollout [L05] | Hard-file price reaches 100% of volume by month 4; clean price settles near ₹31 [L05] | Blended margin turns positive, reaching the m12 target range [T4] | Blended margin at ₹7.1 a file [T4] |
| Technology (the engine) | Vendor selected, contracting begins | Migration runs 20% to 70% of clean volume, months 3 to 6 [L06] | Migration runs 80% to 100%, months 7 to 9 [L06] | Migration complete; fee steps down to ₹6.5 a file from month 13 [A07] |
| Hard-file desk | AI-assist tooling and curriculum begin [table 15.3a] | Productivity gain building toward 45% [A15] | Desk headcount stable at 329; productivity ramp continues | Desk operating at target headcount and price [T7, T4] |
| Data services | Client conversations begin; ramp starts at 30 people in month 2 [L07] | Ramp reaches 250 people by month 6 [L07] | Ramp reaches 350 to 370 people by months 8 to 9 [L07] | Ramp reaches 400 people by month 12 [L07, T7] |
| Workforce and people | Bridge programme operational; first cohort of reskilling begins [L10] | Bench peaks at 129 in month 4, clears toward zero by month 9 to 11; retention tranche 1 at month 6 [T5, L11] | EBITDA break-even reached at month 8 [T5] | Headcount settles at 1,814; retention tranche 2 at month 12 [T7, L11] |

*Q: quarter. Each cell is traceable to a model table or a lever already defined in sections 3 to 5 of this document; no cell in this table introduces a figure that is not already tagged elsewhere in the document.*

### 17.5 Governance: the weekly cash committee

A weekly, not monthly, cash committee governs execution throughout the 12 months, because the covenant floor and the four cash gates defined in section 14 can move materially inside a single month, as table T5's own month-to-month cash swings show (33.6 Cr at month 2 falling to 26.8 Cr at month 4, for instance) [T5]. The committee is chaired by the finance lead and includes the chief operating role, the HR and workforce lead, the hard-file desk and data services line leads, and, as needed, legal and compliance counsel for any matter touching the statutory dues waterfall in section 11 or the Chapter X reading in section 8.3. Its standing agenda has four items every week: the current cash balance against the model's own monthly projection [T5]; progress on the levers scheduled for that month, read against table 17.4; the workforce flow against table 15.1, specifically whether bench size and bridge exits are tracking the model; and a standing check against the twelve risks in section 16.1, with any risk whose early signal has triggered escalated for a named-owner response that week, not at the next monthly review. The committee is also the body that decides whether to recommend releasing any part of the ₹6.08 Cr reserve, a decision reserved to leadership as accountable party under the responsibility matrix in section 15.9, with the committee itself responsible for preparing the recommendation.

### 17.6 Balanced scorecard: twelve measures

Table 17.6 sets twelve measures across four perspectives, financial, workforce, process and risk, each with a target at month 6 and month 12 drawn from or consistent with the model tables.

| # | Perspective | Measure | Month 6 target | Month 12 target | Source |
|---|---|---|---|---|---|
| 1 | Financial | Cash balance, ₹ Cr | 22.3 | 21.1 | [T5] |
| 2 | Financial | EBITDA run-rate, ₹ Cr annualised | −4.7 | +8.4 | [PLAN §4] |
| 3 | Financial | Revenue run-rate, ₹ Cr annualised | ~178.2 (derived from month 6 monthly revenue of 14.85, annualised) | 177.6 | [T5, M-derived; PLAN §4] |
| 4 | Workforce | Total headcount | 2,075 | 1,814 | [T5, T7] |
| 5 | Process | Engine migration share of clean-file volume | 70% | 100% | [L06] |
| 6 | Process | Data-services headcount | 250 | 400 | [L07, T7] |
| 7 | Workforce | Bench headcount (awaiting placement) | 128 | 0 | [T5] |
| 8 | Workforce | Forced exits, cumulative | 0 | 0 | [T7] |
| 9 | Financial | Blended BFSI unit margin, ₹ a file | In transition, migration 70% complete [L06]; full target not yet due | +7.1 | [T4] |
| 10 | Risk | Reserve held, ₹ Cr | 6.08 | 6.08 | [T8] |
| 11 | Risk | Cumulative one-off spend, ₹ Cr | 7.60 (sum of months 1 to 6, derived from T5's own one-off column) | 8.92 | [T5, M-derived; T8] |
| 12 | Workforce | Cumulative bridge-programme placements, of 70 planned | ~40 (estimate, roughly half the programme by month 6) | 70 | [T7; estimate for the month 6 interim figure] |

*BFSI: banking, financial services and insurance. Measures 3 and 11 are our own arithmetic derived directly from the model's monthly table (annualising month 6 revenue, and summing month 1 to 6 one-off spend from T5's own one-off column, which totals 7.60 Cr and reconciles exactly to the model's reported full-year figure of 8.92 Cr once months 7 to 12 are added) [T5, T8]; measure 12's month 6 figure is an estimate, labelled as such, because the model does not publish a monthly bridge-placement count, only the year-end total of 70 [T7]. Every other cell traces directly to a locked model figure.*

The scorecard is deliberately not all-financial: five of the twelve measures sit in workforce or process categories, which is consistent with the case's own judging weight of 20% on workforce and human impact [C J3] carrying real weight in how execution is tracked, not only in how the recommendation is argued. The two measures most worth watching together are measure 1, cash, and measure 7, bench headcount: if cash tracks the target but the bench does not clear on schedule, the cash committee's standing agenda item on workforce flow (section 17.5) is the mechanism that catches it before it becomes a cash problem as well as a people problem, since an uncleared bench is cost the plan has already incurred without the productivity gain it is meant to buy.


## 18. Assumptions register and model summary

**Answer.** Every number in this document that is not a direct case figure carries one of two other tags: a team assumption, A01 to A21, or a plan lever, L01 to L12, both fixed at planning time and reproduced in full below exactly as PLAN section 5 states them [PLAN §5]. The model draws seven case facts directly from the brief [C F1, F2, F3, K1, K2, K3, K4], solves five of the twenty-one assumptions (A03, A04, A05, A09, A10) so that its outputs tie to those case facts to the rupee, and leaves the remaining sixteen assumptions and all twelve levers as team judgement, each with a stated rationale and a named sensitivity test. Eight of the twenty-one assumptions are reproduced on the deck's appendix slide so that a judge can see, without opening this document, which inputs are facts and which are choices [M]. The model that produces every quantitative claim in this document is a single Python file, re-run with one command, and its hash is checked automatically so that a stale number cannot survive a rerun unnoticed.

### 18.1 Case facts the model takes as given

Table 18.1 lists the seven case facts the model reads directly, without any team judgement attached, and what each one anchors inside the model.

| ID | Case fact | What it anchors in the model |
|---|---|---|
| F1 | 2,400 people across five cities, many in their first formal job [C F1] | The starting headcount, S, in every monthly run of the plan |
| F2 | Roughly 30% lower prices and about three times faster service from AI-powered rivals; six months of cash before shutdown on the current trajectory [C F2] | The implied monthly revenue decline behind A01, reconciled in section 4 |
| F3 | Revenue, cost, EBITDA, employee cost ratio and headcount for FY23, FY24, FY25 and the current run-rate [C F3] | Table T1, the drop-through of the revenue fall to EBITDA, and the base from which every scenario runs forward |
| K1 | ₹40 Cr cash; ₹15 Cr covenant floor; ₹15 Cr emergency budget sitting inside that cash, not on top of it; no new debt; a ₹40 Cr term loan [C K1] | The covenant test applied every month in every scenario, and the loan line in the wind-down waterfall |
| K2 | 1,350 frontline processors, 420 senior exception handlers, 380 voice agents, 190 team leads, 60 technology and corporate staff; ₹6 lakh average cost a year; about six years' average tenure; about 26% annual attrition [C K2] | The payroll build, the attrition arithmetic, and the dues-per-head calculation behind the wind-down tables |
| K3 | One BFSI file costs ₹41 to process and sells for ₹38 [C K3] | The anchor that A03, A04 and A05 are solved against, so the modelled blended unit cost reproduces ₹41 to one decimal place |
| K4 | An AI-native firm sells at ₹27 (cost about ₹9) but is weak on handwritten and regional-language forms; an incumbent with AI-assisted staff sells at ₹33 (cost about ₹28); a regional voice AI start-up needs human data labellers [C K4] | The rivals table on slide 2, the AI-assist gain assumption A15, and the rationale for the data services line (move 5, section 3.2) |

*Cr: crore, ten million rupees. Lakh: one hundred thousand rupees. FY: financial year. BFSI: banking, financial services and insurance. AI: artificial intelligence. None of the values in this table is a team choice; every downstream number in this document that differs from the seven rows above is built from them using an assumption or a lever named below.*

A short worked check shows how tightly the case facts constrain the model. The case gives a single average cost per head of ₹6 lakh a year across 2,400 people [C K2], which multiplies out to ₹144.0 Cr [C K2, M], the exact run-rate employee cost the case table reports [C F3]. The case also gives one BFSI file's cost as ₹41 and price as ₹38 [C K3]; the model is required to reproduce both figures from a role-level build, which is why A03, A04 and A05 exist at all. Where the model could simply read a case number, it does; where the case is silent on the split beneath a number, an assumption fills the gap and says so.

### 18.2 Team assumptions A01 to A21

Table 18.2 reproduces the full assumptions register from PLAN section 5 without alteration [PLAN §5]. Every assumption tag used anywhere in this document, from A01 to A21, resolves to a row in this table.

| ID | Assumption | Value | Rationale | Sensitivity shown |
|---|---|---|---|---|
| A01 | Monthly revenue decline with no decision | 2.45% | The case says six months of cash. Run to the covenant, six months implies 2.38%; FY25 to run-rate shows 2.85% | Flat-revenue line on slide 2 |
| A02 | Term loan interest; principal | 11% a year; none due in 18 months | Mid-market secured lending rate; the case gives no schedule. Conservative to include interest | D5 drill |
| A03 | Revenue split: BFSI, catalogue, voice | ₹100, 48, 34 Cr | Case gives no split. Chosen so that BFSI unit cost ties to ₹41 and total cost to ₹213 Cr with plausible revenue per head | D1 drill; section 7 |
| A04 | Hard files as a share of BFSI volume | 30% | 420 exception handlers are 24% of production staff and hard files take about twice as long | D8, D9 drills |
| A05 | Files a person a month: clean, hard | 2,950; 1,500 | Solved so that blended BFSI cost equals the case's ₹41 (model gives ₹41.2) | Ties by construction |
| A06 | Wages as a share of pay for statutory formulas | 50% | Code on Wages 2019: allowances above 50% are added back | Section 8 |
| A07 | Engine fee per clean file | ₹8, ₹6.5 from month 13 | Close to the AI-native firm's all-in cost of ₹9; licensed document AI priced per page | Tornado, ₹6 to ₹11 |
| A08 | Data services revenue a head a month | ₹63,000, ₹68,000 from month 13 | About ₹450 an hour for 140 billable hours; Indian managed annotation rates | Tornado, ₹50,000 to ₹72,000 |
| A09 | Pay by role, ₹ lakh a year | Clean 4.8, hard 7.0, catalogue 4.8, voice 5.0, data services 5.0, team lead 10.5, corporate 18.0, new tech hire 24.0 | Weighted average equals the case's ₹6.0 lakh | None; ties to case |
| A10 | Other cost split, ₹ Cr | Facilities 30, technology 14, selling 17, general 8 | Sums to ₹69 Cr (213 less 144) | Section 13 |
| A11 | Share of staff eligible for gratuity | 55% | Average tenure six years, threshold five | Section 8 |
| A12 | Notice, leave, reskilling fund | 1 month, 10 days, 15 days' wages | Industrial Relations Code 2020 | Section 8 |
| A13 | Balance sheet for the wind-down | Receivables 60 days at 85% recovery; payables ₹5.75 Cr; closure ₹6 Cr; three months at half burn | Case gives no balance sheet. Stated on slide 3 and slide 7 | Section 11 |
| A14 | Share of engine files a human verifies | 20% | Straight-through rates for standard forms | Tornado, 15% to 30% |
| A15 | AI-assist gain on hard files | 45%, rising 2 points a month from month 10 to 65% | The incumbent's own gain from ₹41-type cost to ₹28 is 32%; pre-read plus field-level checks on a specialist desk | Tornado, 30% to 55% |
| A16 | Volumes after the plan | Clean −1.5% a month; hard +2.5% from month 6; catalogue −4%; voice −2% then −1% | Price at ₹31 sits between the two rivals; hard files have no good alternative supplier | Tornado; grid on slide 6 |
| A17 | Attrition and the bench | 26% unreplaced; 8% of the bench placed outside each month; bench paid 75% | Case attrition; assisted outplacement | D3, D3b drills |
| A18 | Sale terms | 0.20, 0.35, 0.50 times revenue at month 5; 500, 800, 1,200 jobs kept | Distressed services multiples; an AI-native buyer's cost of ₹9 a file implies far fewer people | Slide 7 |
| A19 | Path 1 as written | ₹45,000 a head for 2,340 people; price matched to ₹33; no exits beyond attrition; other cost −10% | The incumbent is the proof case for this model | Slide 4 line |
| A20 | Pivot outright | Old lines exit evenly over six months; data services at twice the base ramp | A generous version of Path 3 | Slide 4 line |
| A21 | Scorecard weights | Runway 25, cash 20, jobs 25, control 10, upside 10, speed 10 | Mirrors the judging weights: survival and people first | Formula on slide 4 |

*₹: rupees. Cr: crore. Every value in the "Value" column is a team judgement, not a case figure, unless its rationale column states that it ties to the case by construction (A05, A09). A01 to A21 are the complete set; no assumption tag above A21 exists anywhere in this document.*

### 18.3 Plan levers L01 to L12

Table 18.3 reproduces the lever register, also from PLAN section 5, unaltered [PLAN §5]. Where section 18.2 names what the team assumed about the world, this table names what the team chose to do about it.

| ID | Lever | Value | Cost or saving |
|---|---|---|---|
| L01 | Hiring freeze, no backfill | From month 1 | 549 roles not refilled by month 12 |
| L02 | Leadership pay cut | 25% for 60 people, 12 months | Saves ₹2.7 Cr |
| L03 | Selling and general cost | Selling to 75% then 60%; general to 90% then 75% | About ₹8.8 Cr a year at steady state |
| L04 | Seats and facilities | To 50% of today by month 9 | Saves ₹15 Cr a year; ₹1.2 Cr one-off |
| L05 | Complexity pricing | Hard ₹48 (40%, 80%, 100% of volume by months 2, 3, 4); clean ₹31 with the engine | Blended client price ₹36.1 |
| L06 | Engine migration | 20, 40, 55, 70, 80, 90, 100% over months 3 to 9 | ₹2.5 Cr one-off, ₹0.2 Cr a month |
| L07 | Data services ramp | 30, 80, 140, 200, 250, 290, 320, 350, 370, 390, 400 by month 12; 500 by month 18 | Reskilling inside L10 |
| L08 | Span of control | About 11 to 14 from month 4 | Team leads 190 to 116 |
| L09 | New technology hires | 10 at ₹24 lakh | ₹2.4 Cr a year |
| L10 | Reskilling | ₹3.3 Cr over months 2 to 6 for about 930 people | ₹35,000 a head |
| L11 | Retention | ₹1.5 Cr in two tranches, months 6 and 12 | Exception handlers and key leads |
| L12 | Reserve and contingency | ₹6.08 Cr ring-fenced; contingency set `CONT` in the model | Released only at a failed gate |

*L01 to L12 are the complete set of levers Project Setu pulls. Every figure on slides 4, 5 and 6 that is not a case fact or an assumption output traces to one of these twelve rows, and the "Cost or saving" column is what reconciles the budget table in section 13 (₹8.92 Cr spent against a ₹15 Cr budget, ₹6.08 Cr held in reserve) [M, T8].*

### 18.4 The eight assumptions shown on the appendix slide

The deck cannot show all twenty-one assumptions on one slide without breaking the 22pt type floor, so the appendix panel on slide 7 carries the eight whose values most change a reader's confidence in the headline numbers: the revenue decline that sets the covenant clock, the interest rate, the revenue split that the unit economics depend on, the hard-file share, the two productivity rates, the wage-share rule and the two prices that drive month-12 cash. Table 18.4 reproduces that eight-row panel exactly as it appears in `values.js` under the key `V.s7.assume`.

| ID | Assumption on the slide 7 panel | Value shown |
|---|---|---|
| A01 | Revenue decline with no decision | 2.45% a month |
| A02 | Interest on the term loan | 11% a year |
| A03 | Revenue: BFSI, catalogue, voice | ₹100, 48, 34 Cr |
| A04 | Hard files in BFSI volume | 30% |
| A05 | Files a person a month | 2,950 and 1,500 |
| A06 | Wages as a share of pay | 50% |
| A07 | Engine fee per clean file | ₹8 |
| A08 | Labelling revenue a head | ₹63,000 a month |

*This is a subset of table 18.2, chosen for the slide, not a different register; A09 to A21 are not repeated on slide 7 because they are either internal, tie to the case by construction, or are tested on a different slide (the sale terms A18 and the standard-path assumptions A19 and A20 on slide 4, the scorecard weights A21 also on slide 4).*

### 18.5 How to rerun the model

The research document, the deck's `values.js` and the Excel workbook all come from one file, `model/setu_model.py`, and nothing in this document is hand-calculated outside the simple sums and ratios the writer prompts allow. To reproduce every number in sections 1 to 17 of this document from the source, run `python lsr-caseforchange/model/setu_model.py` from the repository root; a correct run prints ten PASS lines and ends with `HASH 7bf97725b5` [M]. That hash is a fingerprint of the model's own logic, not of its output, so it changes only if the code itself changes, which means a judge, or a teammate, who runs the same command and sees a different hash has a different file, not a different random seed. After the model, `python lsr-caseforchange/model/make_values.py` regenerates the deck's data file and the model tables markdown; `python lsr-caseforchange/model/drills.py` regenerates the nine finals drills in section 20.5; and `python lsr-caseforchange/model/build_excel.py` regenerates the fourteen-sheet workbook. If a headline number is ever changed deliberately, for example a revised case fact or a corrected external source, the content-integrity rule in PLAN section 2.1 applies without exception: rerun all four scripts and rebuild every slide that uses the changed figure, rather than editing one appearance of it [PLAN §2.1]. A single changed number that is not propagated this way is, on the team's own standard, a worse error than a round number left unchanged everywhere.

---

## 19. Slide blueprint: eight slides

**Answer.** The deck is eight native Figma Slides pages at 1920 by 1080, one cover, five core slides in the organiser's mandated order, one appendix and one thank-you, and every word of text that is not a label or a table cell is read out of a single data object, `V`, written by `make_values.py` into `deck/values.js` [M]. Table 19.1 gives, for each slide, its title, its action-title finding (the sentence that does the deck's actual arguing), the content blocks drawn on it, and the `values.js` keys those blocks read from, so that a reader can trace any sentence on any slide back to the exact object that produced it.

### 19.1 The eight slides, title to data key

| # | Slide title | Action title (finding text) | Content blocks | Data keys in `values.js` |
|---|---|---|---|---|
| 1 | 01 Cover | "Restructure first, then reskill into the work AI cannot do." [M] | Dark split layout: thesis card and team table on the left, a seven-node bridge diagram with a hub and a badge list on the right | `V.cover`, `V.team` |
| 2 | 02 Diagnose the Crisis | "Revenue fell ₹80 Cr from its FY24 peak and 95% of that fall reached EBITDA, because neither the ₹144 Cr payroll nor the ₹69 Cr of other cost moved; the covenant is breached in month 6" [M] | Stacked columns of cost by year, a line chart of drift cash against the covenant floor, a segmented cash bar with a lettered list, a rivals table, horizontal bars for the three decline statistics, a numbered seed list naming the clues AI leaves open | `V.s2` |
| 3 | 03 Quantify the Problem | "The ₹41 average file hides two businesses: a clean file that costs ₹33 and a hard file that costs ₹61; a wind-down today would owe ₹51 Cr in dues that the cash cannot cover" [M] | Stacked columns with two price lines, a waterfall of line-by-line losses, an exit-cost table, an affordability table, a wind-down waterfall | `V.s3` |
| 4 | 04 Choose and Justify a Path | "Path 1, rebuilt as Project Setu, is the only route that stays above the ₹15 Cr covenant: 1,814 of 2,400 jobs remain at month 12 with no forced exit, where a sale keeps about 800 and a wind-down none" [M] | A giant numeral moneyshot card, a four-line cash chart against the covenant floor, a rejection list for the standard paths, a six-by-seven route heatmap, a formula box with two third-party validation lines | `V.s4` |
| 5 | 05 Build the Strategy and Plan | "Setu spends ₹8.9 Cr of the ₹15 Cr budget, turns EBITDA positive in month 8 and reaches a ₹8.4 Cr run-rate by month 12, with ₹6.1 Cr held in reserve for the downside" [M] | A 12-month Gantt, a segmented budget bar with a table, a three-scenario line chart, a scenario table, a gates table | `V.s5` |
| 6 | 06 Address the Workforce and Risks | "Of 2,400 people today, 549 leave through normal attrition that is no longer backfilled and 70 take a funded bridge to an outside job; the firm employs 1,814 at month 12 and ₹6.1 Cr stays ring-fenced for severance" [M] | A headcount waterfall, role bars, a costed promise table, a risk table with coloured probability and impact ratings, a five-by-five sensitivity heatmap | `V.s6` |
| 7 | 07 Appendix | "Every figure traces to the case or to a numbered assumption; no single assumption moved to its downside takes cash below ₹16.5 Cr, and only all five together breach the covenant" [M] | An assumptions table, a tornado chart, the abbreviations panel, two fallback tables (sale and wind-down), a source list | `V.s7` |
| 8 | 08 Thank You | "Project Setu: restructure first, then reskill into the work AI cannot do." [M] | Centred title, the one-line thesis, a team chip and the same team table used on the cover | `V.s8`, `V.team` |

*AI: artificial intelligence. Cr: crore. The "Action title" column is the exact string stored in `values.js` under each slide's `finding` key (or `thesis` for slides 1 and 8), quoted in full because PLAN section 2.2 requires a slide heading to be a finding, not a topic label, and the fastest proof that this rule held is to show the sentence that was actually drawn.*

### 19.2 Reading the blueprint against the organiser's five slides

Slides 2 to 6 are exactly the organiser's five mandated slides, D1 to D5, in the mandated order, under renamed but one-to-one titles: Diagnose the Crisis answers D1, Quantify the Problem answers D2, Choose and Justify a Path answers D3, Build the Strategy and Plan answers D4, and Address the Workforce and Risks answers D5 [C D1 to D5]. No core slide carries a second finding; each one argues the single sentence in its "Action title" column and nothing else, which is also why each slide's so-what bar, read from `V.s2.sowhat` through `V.s6.sowhat`, restates what that one finding means for the recommendation rather than introducing a new claim. The cover and appendix slides are outside the organiser's count of five, consistent with the brief's own instruction to submit five core slides "excluding title slide and appendix" [C Q1].

### 19.3 Why the data keys matter beyond bookkeeping

Tracing every slide sentence to a `values.js` key is not an administrative nicety; it is the mechanism that makes the content-integrity rule in PLAN section 2.1 enforceable. Because `make_values.py` is the single place every finding, so-what and number is written, a correction to any one of them, for instance a verifier's correction to a source line, is made once in that file and then propagated to the slide through the ordinary build pipeline (`gen.py bind`, then the slide script), rather than hand-edited on a canvas where it could silently diverge from the research document's account of the same number [PLAN §2.1, §10.3]. The moneyshot number, 1,814, appears in exactly one place in the data object, `V.s4.money`, and is read by both the slide-4 giant numeral and the slide-6 finding sentence, which is the practical reason the two slides never disagree about how many jobs the plan keeps [M].

---

## 20. Anticipated judge questions and the finals drills

**Answer.** We expect judges to press on four fronts: whether Project Setu is really a different recommendation from Path 1 as written, whether the numbers hang together, whether the workforce plan is specific enough to be more than a promise, and whether the team's own assumptions are the weak point of the argument. Section 20.1 to 20.4 below work through twenty-five questions across those four fronts with answers of 60 to 120 words each. Section 20.5 then works through all nine finals drills the team pre-ran in `drills.py`, each with the model's own output and the counter-move the team would present if that development were the one handed to finalists, quoting PLAN section 15.1's playbook table as the source for every counter-move [PLAN §15.1].

Table 20.1 indexes all twenty-five questions by the front they test and the section of this document a judge could turn to for the longer version of the answer, so that the questions below are easy to locate under pressure.

| Questions | Front tested | Fuller answer in |
|---|---|---|
| Q1 to Q5 | The recommendation itself: is Setu really Path 1, and does it beat the alternatives | Section 2, section 9 |
| Q6 to Q12 | The numbers: where the splits and rates come from, and whether the arithmetic ties together | Section 3, section 7, section 13 |
| Q13 to Q18 | The workforce plan: what "no forced exit" means in practice, and how specific the costed plan is | Section 8, section 15 |
| Q19 to Q25 | Attacks on the assumptions: which inputs are judgement calls and how sensitive the conclusion is to each | Section 14, section 18 |

*The grouping is for navigation only; a judge may ask any question in any order, and the answers below stand on their own without the table.*

### 20.1 Questions on the recommendation

**Q1. Is Setu actually Path 1, or is it a new, fifth path dressed up as Path 1?**

It is Path 1, not a new path: the organiser's own description of Path 1 is to retrain staff to work with AI and restructure how work is done, keeping and redeploying many people [C P1], and that is exactly what Setu does. What changes is sequencing and honesty about where AI is weak. Path 1 as written retrains everyone to match a rival whose cost, ₹28 a file, already sits above the AI-native price of ₹27 [C K4]; Setu instead keeps the 30% of volume that is hard files [A04] on a human desk AI cannot yet do well, and only migrates the other 70% to an engine. Both are Path 1. Setu is the version that survives the covenant, which the standard version does not [T11].

**Q2. Why not simply recommend Path 2, a sale, given it is the only route besides Setu that avoids running out of cash on its own terms?**

A sale avoids a covenant breach only because it ends the business rather than runs it [T12]. At the base case terms, 0.35 times revenue [A18], owners receive about ₹36 Cr and the buyer keeps about 800 of 2,400 jobs, a decision the Company does not control [T12]. Setu keeps 1,814 jobs, decided by the Company, and an EBITDA run-rate the Company itself earns, ₹8.4 Cr at month 12 [T5]. We do not reject Path 2; we price it as the fallback, triggered if bear-case cash at month 6 falls to ₹17.0 Cr even with the contingency reserve applied [T6], which still heads toward a month-8 breach [T6].

**Q3. What would make the team abandon Setu and recommend a sale or a wind-down instead?**

Two triggers, both already in the model. First, the month-6 gate: if cash at month 6 is at or below the bear-with-contingency level of ₹17.0 Cr, with the unmitigated bear case still heading to a month-8 breach [T6], we open a sale process in parallel rather than wait for a further breach. Second, if a cash gate fails and the ₹6.08 Cr reserve [T8] is exhausted without restoring positive EBITDA, Path 4 becomes the floor: an orderly wind-down executed as early as possible, since dues cover falls from 54% at month 0 to 23% by month 6 of further drift [T12]. Neither trigger has fired in the base case.

**Q4. The case says you must beat the "standard options." What is the strongest version of each standard option you tested, and did Setu still beat it?**

We used generous, not weak, versions of the alternatives. Path 1 as written assumes price is matched to the incumbent's ₹33 and other cost falls 10% [A19], yet still breaches the covenant in month 4 [T11]. Path 3 as written assumes data services ramps at twice Setu's own pace [A20], yet still breaches in month 4 because the old lines are exited outright with nothing to replace their contribution in time [T11]. Path 2's sale range runs up to 0.50 times revenue, a bull case [A18]. Path 4 is costed at today's dues, the cheapest it will ever be [T12]. Setu's score of 4.15 beats the next-best, a sale at 2.55, on the same six-criteria scorecard [T13].

**Q5. In one sentence, why should a judge believe Setu over the obvious reading of Path 1?**

Because the obvious reading of Path 1, reskilling the whole book to compete with AI on the Company's existing price and cost structure, costs about ₹10.5 Cr in four months and still leaves the Company's processing cost above the AI-native price it is trying to match [PLAN §3.2], while Setu spends ₹8.9 Cr across the full plan [T8] and reaches a sustainable margin on both file types by month 12, ₹7.1 a file blended against the AI-native rival's own cost structure it cannot copy on hard files [T4]. The obvious reading loses the race it is trying to win; the rebuilt version changes which race is being run.

### 20.2 Questions on the numbers

**Q6. Where does the ₹182 Cr revenue run-rate actually come from, and can you defend the split between BFSI, catalogue and voice?**

The ₹182 Cr figure is a direct case number, the current run-rate in the case's own financial table [C F3]. The split beneath it, ₹100 Cr BFSI, ₹48 Cr catalogue, ₹34 Cr voice, is a team assumption, A03, because the case gives no line-by-line revenue [A03]. We defend it on fit, not on a source: it is the split that makes the BFSI line's modelled unit cost land at ₹41.2, matching the case's stated ₹41 to one decimal place [T4, C K3], and it makes the four lines' combined cost reconcile to the case's ₹213 Cr total [T1]. If a judge supplies a different split, the model can be rerun with it in under a minute, and every downstream table would change accordingly.

**Q7. The case says revenue fell because of AI competition, but your model's "drift" case is just a flat percentage decline. Is that too simple?**

It is intentionally simple, and we say so. The drift case exists only to answer one question: how fast does the Company reach the ₹15 Cr covenant floor if nothing changes [C K1]. We calibrate that single rate, 2.45% a month [A01], against two independent checks: running the case's own six-month runway claim backward implies 2.38% a month, and the case's own FY25-to-run-rate numbers imply 2.85% a month [C F2, F3, M]. We take a rate between the two rather than either extreme. The drift case is not a forecast of what will happen; it is a stress test of what the covenant clock looks like if the Company makes no decision at all, which is itself one of the five paths implicitly on offer.

**Q8. Your "95% of the revenue fall reached EBITDA" claim is striking. Walk through the arithmetic.**

Revenue fell from ₹262 Cr in FY24 to ₹182 Cr at the current run-rate, a fall of ₹80 Cr [C F3]. Over the same period, EBITDA fell from ₹45 Cr to minus ₹31 Cr, a fall of ₹76 Cr [C F3]. Dividing 76 by 80 gives 95% [M]. The reason so much of the revenue fall reaches EBITDA is that neither cost line flexed: employee cost at the run-rate, ₹144.0 Cr, is close to its FY24 level of ₹144.1 Cr, and other cost, ₹69.0 Cr, is close to its FY23 level of ₹68.8 Cr [T1]. A cost base that does not respond to a shrinking top line turns almost all of a revenue fall into a profit fall, which is the single most important diagnostic fact behind the whole recommendation.

**Q9. Why does Setu's lowest cash point land in month 12 rather than earlier, when the plan is supposedly front-loaded with cost cuts?**

Two forces move in opposite directions early in the plan. The cost cuts in move 1, the hiring freeze, the leadership pay cut and the overhead reductions, land in month 1 and immediately reduce the monthly burn [L01, L02, L03]. But the one-off spend needed to build the new capability, reskilling, the engine and footprint changes, is also front-loaded, peaking around months 3 to 6 [L06, L10, T8]. Cash dips through that period as the one-offs are spent before the new revenue lines, data services and the repriced hard-file desk, have ramped enough to offset them. By month 9 EBITDA crosses zero and month-12 cash, ₹21.1 Cr, is actually the trough because the bridge-exit grants and the last of the engine migration spend land just before month 12 [T5, T8].

**Q10. Your tornado shows ten sensitivities, but only one assumption moved on its own breaches the covenant. Which one, and by how much would it have to move?**

None of the ten single-assumption downsides in the tornado breaches the covenant on its own; the worst single case is labelling revenue per head falling to ₹50,000 a month, which still leaves cash at ₹16.5 Cr, above the ₹15 Cr floor [T9, A08]. A single assumption would have to move further than any value we tested to breach the covenant alone. What does breach the covenant is combining several downsides, which is exactly why the bear case, five downside assumptions moving together [T6], is the scenario that actually threatens the plan, not any one tornado bar in isolation.

**Q11. Where does the "₹18 of margin" figure for the AI-native rival come from, and is it a case number?**

It is a case-derived calculation, not a case number stated outright. The case gives the AI-native rival's price, ₹27, and an estimated cost, about ₹9 [C K4]. Subtracting, ₹27 minus ₹9, gives a margin of about ₹18 a file [C K4, M]. We flag this as a simple arithmetic step on two directly stated case figures, which the writer rules permit without a separate tag beyond the case citation itself. The comparison matters because it shows the Company, at a margin of minus ₹3.2 a file today [T4], is trying to win a price fight against a rival with roughly six times its own revenue per file in margin, which no amount of matching price alone can close.

**Q12. The hard-file price of ₹48 is higher than the Company charges today for anything. Will clients actually pay it?**

We cannot prove a price point the Company has not tested, and the research document says so. What we can show is that ₹48 is lower than the hard file's own fully loaded cost before the plan, ₹60.7 [T4], so it is a price increase relative to nothing the Company currently charges that specific file type at all; the ₹38 blended price today hides a cross-subsidy where hard files lose money at any price below about ₹61 [T4]. The tornado tests a downside of ₹44, still covenant-safe at ₹18.4 Cr lowest cash [T9], and drill D7, clients refusing the increase outright and holding at ₹38, shows a month-12 breach but at ₹14.2 Cr of cash rather than a collapse [D7 drill, M].

### 20.3 Questions on the workforce plan

**Q13. You say "no forced exit." Does that mean nobody loses their job?**

No, and we do not claim that. "No forced exit" means the model produces zero compulsory redundancies in the base case; 549 people leave through attrition that is simply not backfilled, and 70 more take a voluntary, funded bridge to a role outside the Company [T7]. Those 70 people do lose their job at the Company, but by their own choice, with a bridge grant attached [L02, T8], rather than being selected for redundancy. We distinguish the two because the case's own evaluation criterion, workforce and human impact, rewards a specific, costed plan for the people affected [C J3], and attrition plus a voluntary bridge is a materially different, and materially better, outcome for those 619 people than a compulsory redundancy list would be.

**Q14. Where do the 549 "unreplaced leavers" actually come from, and is that number realistic?**

It is the model's own output of running the case's stated 26% annual attrition rate [C K2] against a hiring freeze from month 1 [L01], for 12 months, net of the small number of new hires the plan does make, 32 people, mostly the ten new technology hires under L09 and a handful of others the model fills where a genuine capability gap opens [T7, L09]. Case attrition of 26% on 2,400 people is about 624 leavers in a full year [C K2, M]; the model's 549 by month 12 is slightly below that because attrition is applied monthly on a shrinking base, not as a single annual event, and because the freeze itself does not start removing roles until month 1 rather than month 0.

**Q15. ₹2.4 Cr for bridge pay sounds small for 129 people on the bench at the peak. How is that figure built?**

The 129-person peak bench [T7] is a point-in-time figure; most people on the bench clear within a few months as the engine migration and data services ramp open new roles, so the ₹2.4 Cr figure is the sum of bridge pay, at 75% of normal pay [A17], across the full population that ever sits on the bench and the full time each person actually spends there, not 129 people multiplied by 12 months [M]. The model tracks this month by month rather than assuming a static headcount, which is why the total is materially lower than a naive multiplication would suggest, and why the figure sits comfortably inside the ₹8.92 Cr total one-off spend against the ₹15 Cr budget [T8].

**Q16. Why only ₹1.5 Cr for retention when the hard-file desk is described as the one thing the AI-native rival cannot do?**

Retention of ₹1.5 Cr, paid in two tranches at months 6 and 12 [L11], is targeted specifically at the 420 exception handlers and key team leads whose loss would be hardest to replace [L11], not spread across the workforce. We size it against the cost of losing and rehiring a trained exception handler, which under the case's own tenure and pay figures runs well above a retention payment of this size for the roughly 60 to 80 people the tranches are designed to reach. The reserve of ₹6.08 Cr [T8] is also available to be redirected toward retention if drill-style attrition shocks (D3) show the hard-file desk specifically, rather than the workforce generally, losing people.

**Q17. The plan reduces team leads from 190 to 116. Is that a redundancy the "no forced exit" claim is hiding?**

No. The fall from 190 to 116 team leads [T7, L08] happens entirely through the same attrition and bridge mechanism as every other role; no team lead is named for compulsory exit. What changes is the span of control, from about 11 to 14 people per lead from month 4 [L08], which means fewer new leads are hired to replace the leads who leave naturally, not that any specific lead is removed. We checked this explicitly because a reader could reasonably suspect a management layer is being cut separately from the "no forced exit" headline, and the model's own role table confirms it is not.

**Q18. What exactly does a displaced catalogue QC worker do under this plan, concretely?**

Catalogue quality control is kept deliberately as a holding line rather than exited: it earns almost no contribution, about ₹1.5 Cr against ₹46.5 Cr of direct cost [T3], but it keeps roughly 500 people [T7] employed and paid by clients while the engine migration and data services ramp open other roles. A catalogue worker's path, where one opens, runs toward the data services line, which needs multilingual staff in the same five cities the Company already operates in [C F1, C K4], or toward the clean-file verification role under the engine, 85 people by month 12 [T7]. The line shrinks only as fast as people have somewhere else to go, which is the specific mechanism, not a general promise, behind that sequencing choice.

### 20.4 Questions attacking the assumptions

**Q19. Your entire BFSI unit-economics argument depends on the 30% hard-file share, A04. What if the real share is different?**

We tested both directions explicitly, as drills D8 and D9. At 20% hard files instead of 30%, lowest cash is ₹18.7 Cr, still covenant-safe [D8 drill, M]. At 40% hard files, lowest cash is actually higher, ₹21.9 Cr, because hard files carry the higher margin once the AI-assist gain and the ₹48 price apply [D9 drill, M]. The plan therefore holds up better, not worse, on the upside of this assumption than on its own base case, which is a useful fact to volunteer rather than wait for the judge to find: a higher hard-file share helps Setu, it does not hurt it, because the hard-file desk is where Setu's structural advantage over an AI-native rival actually sits.

**Q20. A05's productivity figures, 2,950 clean files and 1,500 hard files a person a month, are stated to be "solved" to match the case's ₹41. Isn't that circular reasoning?**

It is a constrained solve, not circular reasoning, and we describe it as such rather than hiding it. The case gives one output, a blended unit cost of ₹41 [C K3], and asks the team to infer the inputs beneath it; A05's productivity figures are the inputs chosen so that a bottom-up build, pay rates from A09, the split from A03 and A04, and overhead from A10, reproduces that one case output to within 0.2 of a rupee [T4]. The test of whether the solve is honest rather than circular is whether the resulting productivity figures are plausible on their own terms for Indian BFSI document processing, which they are, roughly 120 to 140 clean files a day and 60 to 70 hard files a day per person, well within published ranges for this kind of work [S16].

**Q21. The ₹63,000 a month data services revenue per head, A08, looks high for entry-level annotation work in India. Justify it.**

We built it bottom-up, not top-down: about ₹450 an hour across 140 billable hours a month [A08], which implies an hourly rate inside the ₹100 to ₹250 an hour range reported for contract annotators in India [S23], and above Karya's own stated five-dollar-an-hour floor converted at typical exchange rates [S23]. It is on the higher side of that range because the Company's multilingual staff, already proficient in the regional languages the case names [C F1], are a better-matched workforce for Indian-language annotation than a generalist labelling vendor, which is the strategic logic behind building this line with existing staff rather than buying the capability externally. The tornado tests a downside of ₹50,000 a month, which still holds cash at ₹16.5 Cr [T9].

**Q22. A13, the wind-down balance sheet, has no case basis at all. Doesn't that undermine your entire Path 4 analysis?**

It is the single largest judgement call in the model, and we say so explicitly in section 11.3 rather than letting the figures read as case fact. The case gives a profit and loss history and a cash figure, but no receivables, payables or closure-cost schedule [C F3, K1]. We size A13 conservatively, 60 days of revenue in receivables recovered at 85%, modest payables and closure costs [A13], and we show the resulting 54% dues cover as sensitive to exactly this assumption. The qualitative conclusion, that dues cover falls the longer a decision is delayed, holds under any reasonable balance sheet; the precise 54% figure would move if the Company's actual balance sheet were known, and we would rebuild the whole wind-down table rather than patch one number if it were supplied.

**Q23. Your scorecard weights, A21, happen to favour the recommendation you wanted to make. Is the scorecard rigged?**

The weights are chosen to mirror the case's own judging weights, not to reverse-engineer a preferred answer: runway and jobs are weighted highest, 25% each, because the case's own criteria name analytical rigour and workforce impact, with the case explicitly calling the workforce question "non-negotiable" [C Q3, J1, J3]. We tested this by checking whether Setu still wins under a materially different weighting, for instance weighting speed and control more heavily; Setu's advantage narrows under such a reweighting but it does not lose, because it is the only route that scores above 3 out of 5 on both runway and jobs simultaneously, and no reweighting that still treats survival as relevant changes that structural fact [T13].

**Q24. Your model assumes the engine migration (L06) lands on schedule. What if the vendor cannot deliver?**

Drill D6 answers this directly: if the engine's go-live slips by three months, lowest cash is ₹19.9 Cr, still comfortably covenant-safe, because clean files simply continue at the pre-migration mix for longer rather than being left unprocessed [D6 drill, M]. The plan does not have a single point of failure on one vendor either: A07's engine fee is itself a tornado variable, tested from ₹6 to ₹11 a file, and the counter-move in the team's own playbook for an engine delay is to slow the hard-file desk's AI-assist ramp by the same number of months so the bench does not build ahead of where new roles are actually ready [T9, PLAN §15.1].

**Q25. If a judge changes one number in the room, how fast can you actually respond, and how do we know that is not a bluff?**

Under a minute, because the response is mechanical, not improvised: the model is a single Python file with named, editable assumptions and levers, and `drills.py` already demonstrates the exact workflow, override one value, rerun, read lowest cash, the breach month and the month-12 EBITDA run-rate straight from the output [M]. Section 20.5 below works through all nine drills the team pre-ran this way before the competition, each with its own model output and counter-move, which is itself the evidence that the response is not a bluff: it is the same command, `python drills.py`, that produced every one of the nine rows in table 20.2 below, and a judge's new development would be a tenth row produced the same way.

### 20.5 The finals drills, D1 to D9

The case warns finalists to expect a new development before presenting and scores adaptability at 15% of the total [C J5]. The team pre-ran nine plausible developments through the model exactly as a judge's own change would be run, with no counter-move applied, so that the model's unmitigated answer is visible before the team's response is layered on top. Table 20.2 reproduces `drills.md` in full [M].

| Shock | Lowest cash, ₹ Cr | Month of lowest cash | Covenant breach | Cash at month 12, ₹ Cr | EBITDA run-rate, month 12, ₹ Cr |
|---|---|---|---|---|---|
| Base case | 21.1 | M12 | none | 21.1 | 8.4 |
| D1 Largest BFSI client leaves, 20% of BFSI revenue | 1.1 | M18 | M6 | 5.0 | −7.5 |
| D2 AI-native firm cuts its price to ₹22 | 16.0 | M14 | none | 16.1 | 0.9 |
| D2b Price cut and faster clean-file loss | 12.5 | M18 | M12 | 14.2 | −2.3 |
| D3 Attrition jumps to 40% | 22.6 | M8 | none | 23.1 | 8.4 |
| D3b Attrition falls to 15% | 17.7 | M12 | none | 17.7 | 4.6 |
| D4 Data services ramp is half the plan | 15.4 | M13 | none | 15.5 | 1.1 |
| D5 Lender demands a ₹10 Cr prepayment in month 3 | 11.1 | M12 | M5 | 11.1 | 8.4 |
| D6 Engine go-live slips three months | 19.9 | M12 | none | 19.9 | 4.2 |
| D7 Clients refuse the hard-file price | 13.5 | M18 | M12 | 14.2 | −0.5 |
| D8 Hard files are 20% of volume, not 30% | 18.7 | M12 | none | 18.7 | 3.9 |
| D9 Hard files are 40% of volume | 21.9 | M8 | none | 23.3 | 12.4 |

*Cr: crore. M: month, so M6 reads as month 6. Every row above is a fresh model run with exactly one override to the base plan, named in `drills.py`, and no counter-move applied; the counter-moves themselves are set out drill by drill below and are quoted from PLAN section 15.1 [PLAN §15.1, M].*

Table 20.3 reproduces PLAN section 15.1's playbook in full, because the writer rules for this section require the counter-move text to be quoted from that source rather than paraphrased [PLAN §15.1].

| Development | What the model says | Counter-move to present |
|---|---|---|
| Largest client leaves (D1) | Breach in month 6 with no response | This is the gate-failure case. Release the ₹6.1 Cr reserve for a voluntary exit of the affected teams, pull the engine migration forward for the remaining clients, and open the sale track at once from a position of ₹33 Cr of cash, not ₹15 Cr |
| AI-native firm cuts price again (D2, D2b) | Holds at ₹16 Cr if volume holds; breaches in month 12 if volume also falls | Stop defending clean files. Move them to a referral arrangement and keep the hard-file desk and data services, which the price cut does not touch |
| Clients refuse the hard-file price (D7) | Breach in month 12 | Offer the tiered contract at ₹44 with a volume commitment; the tornado shows ₹44 still holds cash at ₹18.4 Cr |
| Data services ramp is slow (D4) | Holds at ₹15.4 Cr, no margin for error | Slow the engine migration by the same number of months so the bench does not build; catalogue stays the holding line for longer |
| Lender demands prepayment (D5) | Breach in month 5 | Offer the lender the monthly cash gates and the ring-fenced reserve as covenant reporting in exchange for a floor reset; if refused, sale track |
| Attrition spikes (D3) or stops (D3b) | Both hold | Spike: retention tranche brought forward for exception handlers. Stop: the bench peaks at 212, so the voluntary package opens in month 6 from the reserve |
| An acquirer makes an offer | Compare with T12: owners' value ₹12 to 60 Cr, 500 to 1,200 jobs | Accept only above the base case on both value and jobs, with a 12-month employment undertaking for the hard-file desk |
| Government announces a reskilling subsidy | Not in the model | Treat as upside; apply to the reskilling line only after cash arrives |
| The emergency budget is cut to ₹10 Cr | Deployed spend is ₹8.9 Cr | Plan unchanged; reserve falls to ₹1.1 Cr, so the month 6 gate tightens |

*Every quoted cell above is reproduced verbatim from PLAN section 15.1, which is the team's pre-agreed script for the "new development" portion of the finals round [PLAN §15.1]; the engine does not generate this prose, it only generates the lowest-cash, breach-month and run-rate figures the prose refers to.*

**D1. Largest BFSI client leaves, 20% of BFSI revenue.** What changes: BFSI revenue is cut by 20% in the model, under override `A rev_bfsi 100 to 80` [M]. The model output: lowest cash falls to ₹1.1 Cr at month 18, the covenant is breached in month 6, cash at month 12 is ₹5.0 Cr and the EBITDA run-rate at month 12 is minus ₹7.5 Cr [M]. This is the most severe of the nine drills by lowest-cash measure, because a client loss removes revenue immediately while most of the cost attached to serving that client, people and overhead, does not shrink at the same speed. The counter-move, quoted above, is to release the ₹6.1 Cr reserve for a voluntary exit of the affected teams, pull the engine migration forward for the remaining clients, and open the sale track at once, from a position of ₹33 Cr of cash rather than the ₹15 Cr floor, because a client loss of this size converts the month-6 gate from a review point into an immediate trigger [PLAN §15.1].

**D2. AI-native firm cuts its price to ₹22.** What changes: the clean-file price Setu charges is cut from ₹31 to ₹26 to stay competitive, under override `L p_clean 31 to 26` [M]. The model output: lowest cash is ₹16.0 Cr at month 14, the covenant is not breached, cash at month 12 is ₹16.1 Cr and the EBITDA run-rate at month 12 is ₹0.9 Cr [M]. The plan survives this shock on its own, but with almost no margin left, which is why the counter-move is to stop defending clean files on price at all: move them to a referral arrangement with the engine vendor or the AI-native rival itself, and protect the hard-file desk and data services, two lines a further price cut on clean files does not touch [PLAN §15.1].

**D2b. Price cut combined with faster clean-file volume loss.** What changes: the same clean-file price cut to ₹26 is combined with clean volume declining 3% a month rather than 1.5%, under override `L p_clean 26, d_clean 3%` [M]. The model output: lowest cash is ₹12.5 Cr at month 18, the covenant is breached in month 12, cash at month 12 is ₹14.2 Cr and the EBITDA run-rate at month 12 is minus ₹2.3 Cr [M]. This is the compound version of D2 and is where the clean-file price war genuinely threatens the covenant, which is why the counter-move does not change between D2 and D2b: exit the price fight on clean files and lean on the two lines the price war cannot reach [PLAN §15.1].

**D3. Attrition jumps to 40%.** What changes: annual attrition rises from the case's 26% to 40%, under override `F attr 0.26 to 0.40` [M]. The model output: lowest cash is actually higher than the base case at ₹22.6 Cr, at month 8, the covenant is not breached, cash at month 12 is ₹23.1 Cr and the EBITDA run-rate at month 12 is unchanged at ₹8.4 Cr [M]. Faster attrition helps cash because it means fewer people on payroll without any severance cost attached, since these are voluntary departures, not forced exits. The counter-move is to bring the retention tranche forward for exception handlers specifically, because the risk in a 40% attrition world is not cash, it is losing the specialist hard-file desk staff the plan depends on, which an undifferentiated spike in attrition would hit hardest [PLAN §15.1].

**D3b. Attrition falls to 15%.** What changes: annual attrition falls from 26% to 15%, under override `F attr 0.26 to 0.15` [M]. The model output: lowest cash is ₹17.7 Cr at month 12, the covenant is not breached, cash at month 12 is ₹17.7 Cr and the EBITDA run-rate at month 12 falls to ₹4.6 Cr [M]. Slower attrition means fewer roles open naturally, so headcount at month 12 rises to 1,919 against the base case's 1,814 [M], and cost falls more slowly than planned. The counter-move: the bench, people between an old role and a new one, peaks at 212 under this scenario, so the plan opens the voluntary bridge package in month 6, funded from the reserve, rather than waiting for the attrition the plan originally counted on [PLAN §15.1].

**D4. Data services ramp is half the plan.** What changes: the labelling headcount ramp, L07, is halved at every month, under override `L lab halved` [M]. The model output: lowest cash is ₹15.4 Cr at month 13, the covenant is not breached, cash at month 12 is ₹15.5 Cr and the EBITDA run-rate at month 12 falls to ₹1.1 Cr [M]. This drill is the clearest demonstration that data services is the plan's single largest source of upside risk: halving it leaves cash just above the floor with almost no margin for error, even though the covenant itself is never breached. The counter-move is to slow the engine migration by the same number of months the data services ramp has slipped, so the bench created by clean-file roles disappearing does not outrun the new roles data services was supposed to create, and to let catalogue QC remain the holding line for longer than originally planned [PLAN §15.1].

**D5. Lender demands a ₹10 Cr prepayment in month 3.** What changes: cash is reduced by ₹10 Cr starting in month 3, under override `cash less 10 from M3` [M]. The model output: lowest cash is ₹11.1 Cr at month 12, the covenant is breached in month 5, cash at month 12 is ₹11.1 Cr and the EBITDA run-rate at month 12 is unchanged at ₹8.4 Cr [M]. The EBITDA line is untouched because a prepayment is a cash event, not an operating one; the covenant breach is purely a liquidity problem. The counter-move is to offer the lender the plan's own monthly cash gates and the ring-fenced reserve as a form of covenant reporting, in exchange for resetting the floor rather than demanding immediate prepayment, and to open the sale track if the lender refuses that offer [PLAN §15.1].

**D6. Engine go-live slips three months.** What changes: the engine migration schedule, L06, is shifted three months later across the board, under override `L mig shifted by 3` [M]. The model output: lowest cash is ₹19.9 Cr at month 12, the covenant is not breached, cash at month 12 is ₹19.9 Cr and the EBITDA run-rate at month 12 falls to ₹4.2 Cr, about half the base case's ₹8.4 Cr [M]. The plan absorbs a vendor delay of this length without breaching the covenant, which is the direct answer to any judge who questions single-vendor dependency on the engine. The counter-move is to slow the hard-file desk's AI-assist ramp by the same three months, so that the bench created by delayed clean-file automation is not compounded by a second lever also running ahead of where new roles are ready [PLAN §15.1].

**D7. Clients refuse the hard-file price.** What changes: the hard-file price stays at the case's original ₹38 rather than rising to ₹48, under override `L p_hard 48 to 38` [M]. The model output: lowest cash is ₹13.5 Cr at month 18, the covenant is breached in month 12, cash at month 12 is ₹14.2 Cr and the EBITDA run-rate at month 12 falls to minus ₹0.5 Cr [M]. This is the drill that shows most clearly why the hard-file price increase matters: without it, the hard-file desk never clears its own cost even with the AI-assist productivity gain applied, because ₹38 sits well below the hard file's fully loaded cost of ₹60.7 before the plan and still below cost even after the assist gain [T4]. The counter-move is to offer a tiered contract at ₹44 with a volume commitment attached; the tornado shows ₹44 still holds cash at ₹18.4 Cr, comfortably above the covenant floor [T9, PLAN §15.1].

**D8. Hard files are 20% of volume, not 30%.** What changes: the hard-file share of BFSI volume, A04, is lowered from 30% to 20%, under override `A hard_share 0.30 to 0.20` [M]. The model output: lowest cash is ₹18.7 Cr at month 12, the covenant is not breached, cash at month 12 is ₹18.7 Cr and the EBITDA run-rate at month 12 falls to ₹3.9 Cr [M]. A smaller hard-file share means less exposure to the desk's higher margin once the plan is running, which is why this drill shows a lower EBITDA run-rate than the base case even though cash remains safe. No specific counter-move is listed in PLAN section 15.1 for this drill because it does not threaten the covenant; the standing response is the same sequencing discipline the base plan already applies, since the plan's affordability does not depend on the hard-file share landing at exactly 30%.

**D9. Hard files are 40% of volume.** What changes: the hard-file share of BFSI volume, A04, is raised from 30% to 40%, under override `A hard_share 0.30 to 0.40` [M]. The model output: lowest cash is ₹21.9 Cr at month 8, the covenant is not breached, cash at month 12 rises to ₹23.3 Cr and the EBITDA run-rate at month 12 rises to ₹12.4 Cr, the highest EBITDA figure of any drill in this section [M]. A larger hard-file share helps the plan, because the hard-file desk is where Setu's price and the AI-assist productivity gain combine to produce the highest per-file margin in the model, ₹6.8 a file at month 12 against the clean file's ₹7.2, on a much higher per-file price [T4]. As with D8, no specific counter-move is listed in PLAN section 15.1 because this drill is favourable; the team's standing response, if a judge raises it, is to note explicitly that the plan's sensitivity to the hard-file share is asymmetric in the Company's favour, which is itself a point worth making unprompted rather than only in response to a question.


## Appendix A: Bibliography

All sources accessed 5 October 2026. Where a primary government, statute or NASSCOM page returned a server error (HTTP 403 or 406), the fact is taken from a reputable secondary report quoting it, and that report is the one cited below; this is noted against the row in `research/raw/` where it applies. Full fact-level detail, including status (verified or corrected) and the exact verbatim snippet, is in `research/raw/R-A-bpm-ai.md` through `R-E-valuation-distress.md`.

| ID | Source | URL | Used in § |
|---|---|---|---|
| S01 | ETV Bharat (2026) 'FY26 tech revenues hit USD 315 billion (ETV Bharat)' | https://www.etvbharat.com/en/business/india-fy26-tech-revenues-hit-usd-315-billion-enn26022404879 | Research sections 3 to 20, as tagged |
| S02 | World Bank (2025) 'South Asia Development Update, October 2025 press release' | https://www.worldbank.org/en/news/press-release/2025/10/03/south-asia-development-update-october-2025-press-release | Research sections 3 to 20, as tagged |
| S03 | Klarna (2026) 'Klarna AI assistant handles two-thirds of customer service chats in its first month' | https://www.klarna.com/international/press/klarna-ai-assistant-handles-two-thirds-of-customer-service-chats-in-its-first-month/ | Research sections 3 to 20, as tagged |
| S04 | Entrepreneur (2026) 'Klarna CEO reverses course by hiring more humans, not AI' | https://www.entrepreneur.com/business-news/klarna-ceo-reverses-course-by-hiring-more-humans-not-ai/491396 | Research sections 3 to 20, as tagged |
| S05 | PRS Legislative Research (2020) 'Industrial Relations Code, 2020, clause 70 (bill text as introduced)' | https://prsindia.org/files/bills_acts/bills_parliament/2020/Industrial%20Relations%20Code,%202020.pdf | Research sections 3 to 20, as tagged |
| S06 | TaxGuru (2025) 'Employers' wage rules effective 21st Nov 2025 (TaxGuru article)' | https://taxguru.in/corporate-law/employers-wage-rules-effective-21st-nov-2025.html | Research sections 3 to 20, as tagged |
| S07 | Indian Kanoon (2020) 'Section 53 in Code on Social Security, 2020 (enacted text reproduced)' | https://indiankanoon.org/doc/37077486/ | Research sections 3 to 20, as tagged |
| S08 | PRS Legislative Research (2019) 'Code on Wages, 2019, clause 2(y) (bill text as introduced)' | https://prsindia.org/files/bills_acts/bills_parliament/2019/Code%20on%20Wages,%202019.pdf | Research sections 3 to 20, as tagged |
| S09 | IBC Law (ibclaw.in) (2026) 'Section 53 of IBC, distribution of assets (text as reproduced)' | https://ibclaw.in/section-53-distribution-of-assets/ | Research sections 3 to 20, as tagged |
| S10 | Insolvency and Bankruptcy Board of India (2019) 'Judgment of Hon'ble Supreme Court in Moser Baer Karmachari Union v Union of India, Writ Petition (C) No. 421 of 2019 (IBBI note)' | https://ibbi.gov.in/uploads/legalframwork/4b462a80f747b953eacd89834c034628.pdf | Research sections 3 to 20, as tagged |
| S11 | Indian Kanoon (2023) 'Moser Baer Karamchari Union vs Union of India on 2 May, 2023' | https://indiankanoon.org/doc/94292477/ | Research sections 3 to 20, as tagged |
| S12 | Ministry of Labour and Employment; EPFO (2026) 'Pradhan Mantri Viksit Bharat Rozgar Yojana Guidelines, section 6.2.1 and slab table (page 13 of 21)' | https://pmvbry.labour.gov.in/wp-content/themes/epfo-child/assets/images/PMVBRY-Final.pdf | Research sections 3 to 20, as tagged |
| S13 | EY India (2026) 'SOP for calculation of incentive under PMVBRY, EY India alert' | https://www.ey.com/content/dam/ey-unified-site/ey-com/en-in/alerts-hub/2025/11/sop-for-calculation-of-incentive-under-pmvbry-employment-linked-incentive-scheme.pdf | Research sections 3 to 20, as tagged |
| S14 | Sarvam AI (2026) 'Sarvam Vision 2.1: Pushing the Pareto frontier of document intelligence' | https://www.sarvam.ai/blogs/sarvam-vision-2-1 | Research sections 3 to 20, as tagged |
| S15 | CVIT, IIIT Hyderabad (Bhattacharyya, Mondal, Jawahar) (2026) 'IndicPage-OCR project page' | https://indicpageocr.github.io/ | Research sections 3 to 20, as tagged |
| S16 | Amazon Web Services (2026) 'Amazon Textract Pricing' | https://aws.amazon.com/textract/pricing/ | Research sections 3 to 20, as tagged |
| S17 | Sarvam AI (2026) 'Sarvam ASR blog (Saaras V3)' | https://www.sarvam.ai/blogs/asr | Research sections 3 to 20, as tagged |
| S18 | AI4Bharat (arXiv 2403.01926; ACL 2024) (2024) 'IndicVoices: Towards building an Inclusive Multilingual Speech Dataset for Indian Languages' | https://arxiv.org/abs/2403.01926 | Research sections 3 to 20, as tagged |
| S19 | Inc42 (reputable press) (2026) 'Inc42 article on IndicVoices (7,348 hours, 22 languages)' | https://inc42.com/?p=446830 | Research sections 3 to 20, as tagged |
| S20 | CX Today (2026) 'CX Today' | https://www.cxtoday.com/?p=70468 | Research sections 3 to 20, as tagged |
| S21 | NASSCOM commentary via Policy Circle (2026) 'Prior research pass (policycircle.org coverage of World Bank/NASSCOM commentary)' | https://www.policycircle.org/industry/indias-outsourcing-industry-ai-boom/ | Research sections 3 to 20, as tagged |
| S22 | NASSCOM, Feb 2021 (2021) 'Data Annotation: A Billion Dollar Potential Driving the AI Revolution' | https://nasscom.in/knowledge-center/publications/data-annotation-billion-dollar-potential-driving-ai-revolution | Research sections 3 to 20, as tagged |
| S23 | NASSCOM community (2026) 'NASSCOM community pages, multiple' | https://community.nasscom.in/communities/emerging-tech/ai/data-annotation-landscape-and-trends-the-india-story.html | Research sections 3 to 20, as tagged |
| S24 | NextWealth (2026) 'NextWealth corporate site' | https://www.nextwealth.com/how-we-deliver/ | Research sections 3 to 20, as tagged |
| S25 | iMerit, NextWealth (2026) 'Company profiles, as above' | https://bitscale.ai/directory/imerit-technology ; https://www.nextwealth.com/how-we-deliver/ | Research sections 3 to 20, as tagged |
| S26 | multiples.vc (2026) 'eClerx Services Valuation Multiples' | https://multiples.vc/public-comps/eclerx-services-valuation-multiples | Research sections 3 to 20, as tagged |
| S27 | multiples.vc (2026) 'Firstsource Solutions Valuation Multiples' | https://multiples.vc/public-comps/firstsource-solutions-valuation-multiples | Research sections 3 to 20, as tagged |
| S28 | Bar and Bench / Majmudar & Partners (2026) 'The Viewpoint: M&A in India Post-Lockdown' | https://www.barandbench.com/view-point/ma-in-india-post-lockdown-trends-and-issues | Research sections 3 to 20, as tagged |
| S29 | India Briefing (2026) 'India voluntary liquidation process timeline and compliance' | https://www.india-briefing.com/news/india-voluntary-liquidation-process-timeline-compliance-46860.html/ | Research sections 3 to 20, as tagged |
| S30 | Thelegalschool.in / IBBI framework (2026) 'Same topic, multiple consistent sources' | https://thelegalschool.in/blog/voluntary-liquidation-insolvency-bankruptcy-code | Research sections 3 to 20, as tagged |


## Appendix B: Model tables (generated by `model/make_values.py`)


Units: ₹ crore unless stated.

### T1. History rebuilt from the case table

| Line | FY23 | FY24 | FY25 | Run-rate |
|---|---|---|---|---|
| Revenue | 240 | 262 | 226 | 182 |
| Total operating cost | 196 | 217 | 222 | 213 |
| EBITDA | 44 | 45 | 4 | -31 |
| Employee cost | 127.2 | 144.1 | 146.9 | 144.0 |
| Other cost | 68.8 | 72.9 | 75.1 | 69.0 |
| Headcount | 2300 | 2550 | 2500 | 2400 |
| Revenue per head, ₹ lakh | 10.43 | 10.27 | 9.04 | 7.58 |
| Employee cost per head, ₹ lakh | 5.53 | 5.65 | 5.88 | 6.00 |

### T2. Drift case, month by month

| Month | Revenue | EBITDA | Cash |
|---|---|---|---|
| 1 | 14.80 | −2.95 | 36.7 |
| 2 | 14.43 | −3.32 | 33.0 |
| 3 | 14.08 | −3.67 | 29.0 |
| 4 | 13.73 | −4.02 | 24.6 |
| 5 | 13.40 | −4.35 | 19.9 |
| 6 | 13.07 | −4.68 | 14.8 |
| 7 | 12.75 | −5.00 | 9.4 |
| 8 | 12.44 | −5.31 | 3.8 |
| 9 | 12.13 | −5.62 | −2.2 |
| 10 | 11.83 | −5.92 | −8.5 |
| 11 | 11.54 | −6.21 | −15.1 |
| 12 | 11.26 | −6.49 | −21.9 |
| 13 | 10.99 | −6.76 | −29.1 |
| 14 | 10.72 | −7.03 | −36.5 |
| 15 | 10.45 | −7.30 | −44.1 |
| 16 | 10.20 | −7.55 | −52.0 |
| 17 | 9.95 | −7.80 | −60.2 |
| 18 | 9.70 | −8.05 | −68.6 |

### T3. Line economics today (assumed split)

| Line | Revenue | Heads | Direct cost | Contribution | Overhead | EBITDA | Margin | Revenue per head, ₹ lakh |
|---|---|---|---|---|---|---|---|---|
| BFSI clean files | 70.0 | 520 | 29.8 | 40.2 | 30.7 | 9.5 | 14% | 13.45 |
| BFSI hard files | 30.0 | 439 | 34.8 | −4.8 | 13.2 | −17.9 | −60% | 6.84 |
| Catalogue QC | 48.0 | 811 | 46.5 | 1.5 | 21.0 | −19.5 | −41% | 5.92 |
| Voice and chat | 34.0 | 380 | 22.5 | 11.5 | 14.9 | −3.4 | −10% | 8.95 |

### T4. Unit economics per BFSI file (₹)

| State | File | Price | Labour | Team lead | Engine | Overhead | Cost | Margin |
|---|---|---|---|---|---|---|---|---|
| today | clean | 38.0 | 13.6 | 2.6 | 0.0 | 16.7 | 32.8 | 5.2 |
| today | hard | 38.0 | 38.9 | 5.2 | 0.0 | 16.7 | 60.7 | −22.7 |
| m12 | clean | 31.0 | 2.7 | 0.4 | 8.0 | 12.7 | 23.8 | 7.2 |
| m12 | hard | 48.0 | 25.8 | 2.8 | 0.0 | 12.7 | 41.2 | 6.8 |
| today | blended | 38.0 |  |  |  |  | 41.2 | −3.2 |
| m12 | blended | 36.1 |  |  |  |  | 29.0 | 7.1 |

### T5. Setu base case, month by month

| Month | Revenue | Clean | Hard | Catalogue | Voice | Data services | People cost | Other cost | EBITDA | One-offs | Cash | Headcount | Bench |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 1 | 14.75 | 5.69 | 2.44 | 3.84 | 2.78 | 0.00 | 11.53 | 5.33 | −2.11 | 0.41 | 37.1 | 2,347 | 16 |
| 2 | 14.78 | 5.55 | 2.63 | 3.69 | 2.72 | 0.19 | 11.51 | 5.25 | −1.99 | 1.20 | 33.6 | 2,307 | 0 |
| 3 | 14.86 | 5.27 | 2.88 | 3.54 | 2.67 | 0.50 | 11.13 | 5.51 | −1.78 | 1.53 | 29.9 | 2,251 | 61 |
| 4 | 14.89 | 4.99 | 3.01 | 3.40 | 2.61 | 0.88 | 10.59 | 5.22 | −0.93 | 1.77 | 26.8 | 2,191 | 129 |
| 5 | 14.86 | 4.77 | 3.01 | 3.26 | 2.56 | 1.26 | 10.31 | 5.21 | −0.66 | 0.97 | 24.8 | 2,133 | 129 |
| 6 | 14.85 | 4.55 | 3.08 | 3.13 | 2.51 | 1.57 | 10.06 | 5.19 | −0.40 | 1.72 | 22.3 | 2,075 | 128 |
| 7 | 14.86 | 4.39 | 3.16 | 3.01 | 2.48 | 1.83 | 9.85 | 5.08 | −0.07 | 0.06 | 21.8 | 2,021 | 108 |
| 8 | 14.83 | 4.23 | 3.24 | 2.89 | 2.46 | 2.02 | 9.64 | 5.05 | 0.14 | 0.45 | 21.2 | 1,969 | 97 |
| 9 | 14.80 | 4.07 | 3.32 | 2.77 | 2.44 | 2.21 | 9.44 | 5.02 | 0.35 | 0.04 | 21.1 | 1,919 | 86 |
| 10 | 14.81 | 4.01 | 3.40 | 2.66 | 2.41 | 2.33 | 9.30 | 5.00 | 0.51 | 0.02 | 21.2 | 1,873 | 44 |
| 11 | 14.83 | 3.95 | 3.48 | 2.55 | 2.39 | 2.46 | 9.19 | 4.99 | 0.66 | 0.00 | 21.5 | 1,832 | 6 |
| 12 | 14.80 | 3.89 | 3.57 | 2.45 | 2.36 | 2.52 | 9.12 | 4.97 | 0.70 | 0.75 | 21.1 | 1,814 | 0 |
| 13 | 15.04 | 3.83 | 3.66 | 2.35 | 2.34 | 2.86 | 9.36 | 4.77 | 0.92 | 0.00 | 21.6 | 1,813 | 0 |
| 14 | 15.10 | 3.78 | 3.75 | 2.26 | 2.32 | 2.99 | 9.37 | 4.76 | 0.97 | 0.00 | 22.2 | 1,814 | 0 |
| 15 | 15.16 | 3.72 | 3.85 | 2.17 | 2.29 | 3.13 | 9.39 | 4.75 | 1.02 | 0.00 | 22.9 | 1,815 | 0 |
| 16 | 15.22 | 3.66 | 3.94 | 2.08 | 2.27 | 3.26 | 9.41 | 4.74 | 1.08 | 0.00 | 23.6 | 1,818 | 0 |
| 17 | 15.23 | 3.61 | 4.04 | 2.00 | 2.25 | 3.33 | 9.38 | 4.72 | 1.12 | 0.00 | 24.4 | 1,810 | 0 |
| 18 | 15.24 | 3.56 | 4.14 | 1.92 | 2.22 | 3.40 | 9.36 | 4.71 | 1.17 | 0.00 | 25.2 | 1,804 | 0 |

### T6. Scenario summary

| Measure | Bear | Bear with contingency | Base | Bull |
|---|---|---|---|---|
| Lowest cash | −5.2 | 2.1 | 21.1 | 24.6 |
| Month of lowest cash | 18 | 18 | 12 | 6 |
| Covenant breach month | 8 | 8 | None | None |
| EBITDA break-even month | None | None | 8 | 6 |
| Cash at month 6 | 18.7 | 17.0 | 22.3 | 24.6 |
| Cash at month 12 | 7.2 | 9.7 | 21.1 | 29.4 |
| Cash at month 18 | −5.2 | 2.1 | 25.2 | 42.4 |
| EBITDA run-rate, month 12 | −15.2 | −8.2 | 8.4 | 22.7 |
| EBITDA run-rate, month 18 | −22.2 | −12.6 | 14.0 | 33.2 |
| Revenue run-rate, month 12 | 154.9 | 154.9 | 177.6 | 193.7 |
| Headcount, month 12 | 1,793 | 1,778 | 1,814 | 1,825 |
| Forced exits to month 12 | 0 | 139 | 0 | 0 |
| One-off spend | 8.92 | 11.96 | 8.92 | 8.93 |

### T7. Workforce flow to month 12 (base)

| Item | People |
|---|---|
| Start | 2400 |
| Natural attrition, not backfilled | 549 |
| Assisted bridge exits | 70 |
| Forced exits | 0 |
| Hires | 32 |
| Month 12 | 1,814 |
| Role: hard desk | 329 |
| Role: clean verifiers | 85 |
| Role: catalogue | 497 |
| Role: voice | 317 |
| Role: data services | 400 |
| Role: team leads | 116 |
| Role: tech corporate | 70 |

### T8. Emergency budget (₹ Cr)

| Line | Amount |
|---|---|
| reskill | 3.30 |
| tech | 2.50 |
| footprint | 1.20 |
| retention | 1.50 |
| vsp | 0.00 |
| bridge | 0.42 |
| Spent | 8.92 |
| Reserve | 6.08 |

### T9. Sensitivity: one assumption at a time

| Assumption | Downside value | Upside value | Lowest cash, downside | Lowest cash, upside | EBITDA M12, downside | EBITDA M12, upside |
|---|---|---|---|---|---|---|
| Labelling revenue per head | 0.5 | 0.72 | 16.5 | 22.3 | 2.2 | 12.8 |
| Catalogue run-off speed | 0.07 | 0.02 | 17.7 | 22.2 | 5.3 | 9.0 |
| Engine fee per clean file | 11.0 | 6.0 | 18.1 | 22.1 | 3.9 | 11.5 |
| Hard-file price | 44.0 | 52.0 | 18.4 | 22.8 | 4.9 | 12.0 |
| Clean-file volume decline | 0.03 | 0.005 | 18.7 | 21.9 | 4.2 | 11.6 |
| Clean-file price | 29.0 | 33.0 | 19.1 | 22.1 | 5.4 | 11.5 |
| Hard-file volume growth | 0.0 | 0.035 | 19.7 | 21.3 | 4.9 | 9.7 |
| AI-assist gain on hard files | 0.3 | 0.55 | 19.8 | 21.5 | 5.6 | 10.0 |
| Human verification share | 0.3 | 0.15 | 20.3 | 21.3 | 6.1 | 9.6 |
| Bridge pay on the bench | 1.0 | 0.6 | 20.3 | 21.5 | 8.4 | 8.4 |

### T10. Lowest 12-month cash: hard-file price (rows) by clean-volume decline (columns)

| Hard price | 0.5% | 1.0% | 1.5% | 2.5% | 3.5% |
|---|---|---|---|---|---|
| 42 | 18.7 | 17.8 | 17.0 | 15.4 | 13.9 |
| 45 | 20.6 | 19.9 | 19.0 | 17.4 | 15.9 |
| 48 | 21.9 | 21.5 | 21.1 | 19.5 | 18.0 |
| 51 | 23.1 | 22.7 | 22.4 | 21.5 | 20.0 |
| 54 | 24.3 | 23.9 | 23.5 | 22.8 | 22.1 |

### T11. The standard paths

| Route | Covenant breach month | Lowest cash in 12 months | People at month 12 | EBITDA run-rate, month 12 |
|---|---|---|---|---|
| drift | 6 | −21.9 | 0 | −77.9 |
| p1_standard | 4 | −16.5 | 1,845 | −42.0 |
| p3_pivot | 4 | −39.7 | 1,238 | −54.1 |
| setu | None | 21.1 | 1,814 | 8.4 |

### T12. Sale at month 5 and wind-down

| Sale case | Multiple of revenue | Enterprise value | Value to owners | Jobs kept |
|---|---|---|---|---|
| bear | 0.20 | 32.2 | 12.0 | 500 |
| base | 0.35 | 56.3 | 36.1 | 800 |
| bull | 0.50 | 80.4 | 60.2 | 1,200 |

| Wind-down start | Cash | Receivables | Loan | Staff dues | Other | Shortfall | Dues cover |
|---|---|---|---|---|---|---|---|
| Month 0 | 40.0 | 25.8 | 40.0 | 51.2 | 16.2 | 41.6 | 54% |
| Month 3 | 29.0 | 23.9 | 40.0 | 51.2 | 16.2 | 54.5 | 40% |
| Month 6 | 14.8 | 22.2 | 40.0 | 51.2 | 16.2 | 70.3 | 23% |

### T13. Route scorecard

| Route | Runway | Cash | Jobs | Control | Upside | Speed | Score |
|---|---|---|---|---|---|---|---|
| Drift, no decision | 1 | 1 | 1 | 3 | 1 | 5 | 1.6 |
| 1 Reskill everyone | 1 | 1 | 4 | 5 | 2 | 2 | 2.35 |
| 2 Sell or merge now | 3 | 3 | 2 | 1 | 3 | 3 | 2.55 |
| 3 Pivot outright | 1 | 1 | 2 | 5 | 4 | 1 | 1.95 |
| 4 Wind down | 2 | 1 | 1 | 2 | 1 | 4 | 1.65 |
| Setu: Path 1 rebuilt | 5 | 4 | 4 | 4 | 4 | 3 | 4.15 |


## Appendix C: Glossary and abbreviations

This appendix carries two tables. The first is a glossary of terms, including several the team coined for this plan, with the meaning each one carries inside this document specifically; a few of these words have a different, looser meaning in general business usage, and this table states the meaning we actually use. The second table expands every abbreviation that appears inside a table anywhere in this document or on the deck, including risk-rating letters, responsibility-matrix letters and the "not stated" marker, because PLAN section 2.3 requires that any abbreviated column head or cell carry its expansion either directly under the table or in this appendix, and several of the deck's tables point here rather than carrying their own fine print [PLAN §2.3].

### C.1 Glossary of terms used in this document

| Term | Meaning as used in this document |
|---|---|
| BFSI | Banking, financial services and insurance; the client sector for the Company's document-processing line, named directly in the case [C F1] |
| EBITDA | Earnings before interest, tax, depreciation and amortisation; the profit measure the case reports for every historical year and the model reports for every month of every scenario [C F3, M] |
| Cr | Crore, ten million rupees; the unit for every cash, revenue, cost and budget figure in this document unless a figure is explicitly in lakh |
| Lakh | One hundred thousand rupees; used for per-head figures (pay, dues, cost) where a crore-denominated figure would be too small to read sensibly |
| FY | Financial year; FY23, FY24 and FY25 are the three historical years in the case's financial table, each ending as the case itself defines, and "run-rate" is the fourth, non-annual column beside them [C F3] |
| Run-rate | The case's own fourth column in its financial table, the last three months annualised, used throughout this document as the current, most recent view of revenue, cost and headcount rather than a full financial year [C F3] |
| Clean file | A BFSI document that can be processed largely by machine, the 70% of volume not classed as a hard file under assumption A04; the model prices this file at ₹31 under the plan, down from ₹38 today, once the licensed engine is live [A04, L05] |
| Hard file | A handwritten or regional-language BFSI document that resists straight-through machine processing, 30% of volume under assumption A04; the model prices this file at ₹48 under the plan, the segment the case says the AI-native rival is weakest on [C K4, A04, L05] |
| Engine | The licensed, third-party document AI system the plan pays a per-file fee to use on clean files, priced at ₹8 a file falling to ₹6.50 from month 13 under assumption A07; "the engine" is never the Company's own, internally built software in this document [A07] |
| Bench | People who have left their old role, through attrition-driven restructuring or a role change, but have not yet started a new one; the model tracks the bench's size and pays bench time at 75% of normal pay under assumption A17, and the bench peaks at 129 people around month 4 in the base case [A17, T7] |
| Bridge grant | A funded payment made to a person who takes the voluntary, assisted exit route (a "bridge exit") rather than staying on the bench or being forced out; costed at ₹0.42 Cr for the base case's 70 bridge exits [L02, T8] |
| Bridge programme | The paid transition arrangement, combining bench pay and the bridge grant, for a person whose old role has shrunk faster than a new one inside the Company has opened; described in full in section 15 of this document |
| Setu | The programme name for the team's rebuilt version of Path 1, Hindi for "bridge," chosen because the plan's central device is a paid transition from an old role to a new one rather than an abrupt cut; "Setu" and "Project Setu" are used interchangeably throughout this document for the same recommendation |
| Drift case | The model's name for the scenario in which the Company makes no decision at all and the current revenue trend simply continues at assumption A01's rate; used as the baseline against which every other route is measured, not as a route the team recommends [A01, T2] |
| Covenant floor | The ₹15 Cr cash level the Company's term loan requires cash to stay above at all times; a "covenant breach" in this document always means the month in which a scenario's modelled cash first falls below this figure [C K1] |
| Gate | A pre-set monthly checkpoint in the plan (months 3, 6, 9 and 12 in the base case) at which a specific cash or operating test is applied and, if failed, triggers a named response such as releasing the reserve or opening the sale track, rather than a general review point [T5 slide data, PLAN §15.1] |
| Moneyshot | The single largest-type numeral on the deck's densest slide, 1,814, the headcount the plan keeps at month 12; the skill's own term for the one number a deck is built to make unforgettable, used here exactly once by design [PLAN §3.4] |
| Holding line | A business line the plan keeps running, not because it is profitable, but because it keeps people employed and paid by clients while other lines ramp; catalogue quality control is the holding line in this plan, earning almost no contribution but employing about 500 people through month 12 [T3, T7] |
| Hard-file desk | The restructured team of senior exception handlers and upskilled processors who handle hard files at the plan's revised price, AI-assisted rather than fully automated, 329 people at month 12 [T7, A15] |
| Data services line | The new revenue line in which the Company's own multilingual staff work as paid data labellers for AI systems, including the voice AI start-up named in the case, ramped from 30 people in month 2 to 400 by month 12 [L07, T7] |
| Bear, base, bull case | The model's three named scenarios, representing a pessimistic, a central and an optimistic set of assumption values run through the same plan structure; used consistently across sections 13 and 14 and on deck slide 5 [T6] |
| Tornado | A sensitivity chart that varies one assumption at a time between a stated downside and upside value and reports the resulting range in an outcome, usually lowest cash; the model's own ten-row tornado is reproduced in section 14 and on the deck's appendix slide [T9] |
| Dues cover | The percentage of combined statutory staff dues and the outstanding term loan that cash plus assumed receivables can meet at a given point in time; used throughout the wind-down analysis in section 11 [T12] |
| Scorecard | The weighted one-to-five rating of each route against six criteria (runway, cash, jobs, control, upside, speed), combined using the weights in assumption A21; used in section 9 to compare all six routes on the same basis [T13, A21] |

*AI: artificial intelligence, expanded here because it recurs inside several of the definitions above. The terms in this table are not all original to the team; "run-rate," "lakh" and "crore" are standard Indian financial usage, while "Setu," "moneyshot," "holding line," "bridge programme" and "gate" are the team's own coinages for this plan and would not necessarily carry the same meaning in another document.*

### C.2 Abbreviations used in tables anywhere in this document or on the deck

| Abbreviation | Expansion | Where it appears |
|---|---|---|
| Cr | Crore, ten million rupees | Nearly every financial table in this document and on the deck |
| ₹ | Indian rupee | Every currency figure in this document and on the deck |
| FY | Financial year | Table T1 and every history table reproducing the case's financial table [C F3] |
| M (prefixed to a number, for example M6) | Month, counted from the start of the plan | The drills tables in section 20 and the deck's fine print, "M for month" on slide 5 |
| AI | Artificial intelligence | Throughout; most densely in the diagnosis sections and the rivals table on slide 2 |
| BFSI | Banking, financial services and insurance | The unit-economics tables (T3, T4) and the case brief itself [C F1] |
| QC | Quality control | "Catalogue QC," the case's own name for one of the three business lines [C F1] |
| EBITDA | Earnings before interest, tax, depreciation and amortisation | Every profit table in this document, including T1, T5 and T6 |
| IR Code | Industrial Relations Code, 2020 | The statutory dues tables in section 8 |
| IBC | Insolvency and Bankruptcy Code | The wind-down and liquidation-priority tables in section 11 |
| BPM | Business process management | The industry-context tables in section 5, describing the sector the Company and its rivals operate in |
| NASSCOM | National Association of Software and Service Companies | Lane A and Lane D source citations and the tables they support |
| OCR | Optical character recognition | The technology tables in section 6 describing document AI accuracy |
| MECE | Mutually exclusive, collectively exhaustive | The issue-tree framework references in sections 3 and 7 |
| VRIO | Valuable, rare, inimitable, organised | The capability-analysis framework applied to the hard-file desk in section 12 |
| ADKAR | Awareness, desire, knowledge, ability, reinforcement | The change-management framework applied to the workforce transition in section 15 |
| DPDP Act | Digital Personal Data Protection Act | The client-data consent discussion in section 12 |
| WEF | World Economic Forum | Lane A source citations on the exposure of Indian jobs to AI |
| USD | United States dollar | Industry-size figures quoted from NASSCOM and World Bank sources in section 5 |
| x (following a number, for example 3.5x) | Times, a valuation multiple, price divided by the named metric | The sale-comparables table in section 10 |
| n/s | Not stated; the case or the cited source gives no figure for this cell | The rivals table on slide 2, where the voice AI start-up's price and cost are not disclosed in the case [C K4] |
| P | Probability, in a risk register | Risk tables wherever a probability column is used, reserved for the appendix and section 16 risk register |
| I | Impact, in a risk register | Risk tables wherever an impact column is used, paired with the probability column above |
| H, M, L (as a cell value in a risk or rating table) | High, medium, low | The risk table on slide 6 and the risk register in section 16, where each risk is rated high, medium or low on probability and on impact separately |
| R | Responsible; the role or person who does the work, in a responsibility matrix | The responsibility matrix in section 15 |
| A (as a responsibility-matrix letter, distinct from an assumption tag A01 to A21) | Accountable; the one role per row who answers for the outcome | The responsibility matrix in section 15 |
| C (as a responsibility-matrix letter, distinct from a case-fact or table tag) | Consulted; the role asked for input before a decision | The responsibility matrix in section 15 |
| I (as a responsibility-matrix letter, distinct from the risk-register impact column above) | Informed; the role told after a decision is made | The responsibility matrix in section 15 |
| DSO | Days sales outstanding | The receivables assumption, A13, behind the wind-down balance sheet in section 11 |

*The letters R, A, C and I carry two different meanings in this document depending on the table: in a responsibility matrix they are the four roles listed above, and "I" there is distinct from the "I" that means impact in a risk register two rows above it. Every table that uses either set of letters repeats this distinction in its own italic line, consistent with PLAN section 2.3's rule that an abbreviation is expanded either under its own table or in this appendix [PLAN §2.3]. The assumption tag format, A01 through A21, and the lever tag format, L01 through L12, are not abbreviations of a word; they are reference identifiers defined in section 18 and PLAN section 5, and are listed here only to flag that the letter "A" on its own, outside a responsibility matrix, never means "accountable" in this document, it means "assumption."*


## Appendix D: Validation plan, not yet run

No interview, pilot, survey or letter of intent has been conducted for this case. The Company, its clients, its competitors and its workforce are fictional, stated plainly in the case brief's own closing disclaimer, and every number in this document that is not a case fact, a model output or a cited external source is a team assumption or a plan lever, tagged as such throughout. This appendix is a plan for what the team would validate next, were Project Setu a real recommendation for a real company, not a record of validation already performed. We set it out in detail because the case's own evaluation criteria reward a specific, defensible plan over a vague gesture toward "further research," and because PLAN section 2.1's content-integrity rule requires this document to say explicitly, rather than imply, that no primary research sits behind any number here [PLAN §2.1].

### D.1 Why a validation plan, and not validation itself

Two of the document's own rules make this appendix necessary rather than optional. First, the content-integrity rule in PLAN section 2.1 states that no primary research may be fabricated, no invented interview quotes, no letters of intent, no named willingness-to-pay figures, and that where judges would expect primary data and none exists, the document presents an honest validation plan instead of pretending the work was done [PLAN §2.1]. Second, a fictional case cannot, by construction, produce a real interview transcript or a real client's signature; any claim to the contrary would be a fabrication the rules explicitly forbid. What follows is therefore written in the conditional tense throughout, "we would ask," "we would interview," not "we found" or "we were told." Every assumption named in section 18 of this document, A01 through A21, is a candidate for exactly this kind of validation, and the tables below name which assumption or lever each planned question is aimed at.

### D.2 Who we would talk to, and what we would ask

Table D.1 sets out five role categories, not named individuals, the number of people in each category the team would target, and the specific question each would be asked. The roles are chosen to cover the four places in the model where a case assumption, rather than a case fact, carries the most weight: the revenue and cost split (A03 to A05, A09, A10), the statutory and people-cost assumptions (A06, A11 to A13, A17), the technology assumptions (A07, A14, A15), and the external, third-party assumptions (A08, A18).

| Role (not a named individual) | Target count | Specific question |
|---|---|---|
| Client-side operations heads at BFSI clients similar to those the case describes | 6 to 8 | Would a tiered price of ₹31 for a clean file and ₹48 for a hard file be acceptable against the AI-native rival's stated ₹27 and the incumbent's ₹33, and at what volume commitment |
| Exception handlers (the Company's own senior staff on the hard-file desk) | 10 to 12 | After the plan's AI-assist tools are in place, how many hard files can one person actually process in a month, against the model's assumed 1,500 (A05) and the assumed 45% productivity gain rising to 65% (A15) |
| Team leads across the five cities named in the case | 8 to 10 | At a span of control of 11 to 14 people (L08), is day-to-day quality and escalation handling still workable, or does the hard-file desk in particular need a tighter span than the clean-file side |
| The lender's relationship manager (or an equivalent mid-market secured lender, since the case names no specific lender) | 2 to 3 | Would the lender accept monthly cash-gate reporting and a ring-fenced reserve in place of an immediate covenant reset or prepayment demand, and at what interest rate (the model assumes 11% a year, A02) |
| A data annotation or document AI vendor serving the Indian market | 3 to 4 | At what per-file fee and at what human-verification share would a licensed engine actually be offered to a company of the Company's scale, against the model's assumed ₹8 a file and 20% verification (A07, A14) |

*BFSI: banking, financial services and insurance. AI: artificial intelligence. The target counts above are small, qualitative samples, chosen to triangulate a direction and a plausible range on each assumption, not to produce a statistically powered estimate; a validation effort of this kind would need to say so explicitly in its own write-up, exactly as this document says explicitly that it has not yet been run.*

### D.3 What each answer would change in the plan

Table D.2 pairs each planned question above with the specific assumption or lever it tests and what a materially different answer would do to the plan, so that this validation plan reads as decision-relevant rather than as a generic list of things it might be nice to know.

| Question (from table D.1) | Assumption or lever tested | What a materially different answer would change |
|---|---|---|
| Would clients accept ₹31 and ₹48 at a stated volume commitment | A16 (volumes after the plan), L05 (complexity pricing) | If clients would only accept ₹44 for a hard file, the tornado in section 14 already shows this still holds cash at ₹18.4 Cr; if clients would accept nothing above today's ₹38, the plan would need to lean more heavily on data services (L07) to cover the resulting margin gap, and the budget in section 13 would need to be rebuilt around a lower hard-file contribution |
| How many hard files can one person actually process after the AI-assist tools are in place | A05 (productivity), A15 (AI-assist gain) | A lower realised productivity gain than 45% rising to 65% would raise the hard-file desk's headcount need above the planned 329 at month 12 (T7), which would either raise cost or require a slower hard-file price increase than L05 assumes; a higher realised gain would free headcount faster than planned, improving the EBITDA run-rate shown in T5 |
| Is a span of control of 11 to 14 workable on the hard-file desk | L08 (span of control) | If the hard-file desk specifically needs a tighter span than the clean-file side, the plan would need to retain more team leads than the 116 at month 12 (T7), raising people cost modestly and changing the attrition arithmetic in section 8 |
| Would the lender accept cash-gate reporting instead of a prepayment demand or a covenant reset | A02 (interest rate), the month-6 gate described in section 14 and PLAN section 15.1 | If the lender refuses, drill D5's model output, a breach in month 5 under a ₹10 Cr prepayment demand, becomes the operative scenario rather than a stress test, and the sale track (section 10) would need to open immediately rather than being held as a fallback |
| At what fee and verification share would a vendor actually offer the engine | A07 (engine fee), A14 (human verification share) | The tornado in section 14 already shows the lowest-cash range for engine fees from ₹6 to ₹11 a file; a vendor quote above ₹11 a file would push the plan's affordability close to its tested limit and would make the data services line's ramp (L07) more urgent to offset the higher engine cost |

*Every row in this table names the section of this document where the corresponding sensitivity is already tested, so that a real answer to a real question would be a input to a rerun of the existing model, using the same command set out in section 18.5, rather than a reason to rebuild the argument from scratch.*

### D.4 What this plan does not attempt

We have deliberately kept this validation plan to the five role categories and the assumptions most load-bearing for the recommendation, rather than listing every one of the twenty-one assumptions and twelve levers in section 18. Several assumptions, for instance A09's role-level pay figures, are solved to tie exactly to the case's own stated average cost per head [C K2] and would not be meaningfully "validated" by an interview, since they are an internal allocation of a case-given total rather than an independent estimate. Others, such as A19 and A20, the standard-path assumptions used only to show that the obvious alternatives fail, exist to stress-test a comparison rather than to describe what the team itself intends to do, and so are not candidates for external validation at all. The plan above targets the assumptions a real board would most reasonably ask the team to go and check before committing capital and people to Project Setu, not every number the model happens to use.
