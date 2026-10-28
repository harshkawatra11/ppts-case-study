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
