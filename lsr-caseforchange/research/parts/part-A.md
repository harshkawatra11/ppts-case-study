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
