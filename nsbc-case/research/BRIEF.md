# Writer brief: Toing research document (do not change the argument)

## Job
Write part of `toing-research.md`, a consulting-grade research document answering the NSBC case
(Consilium'26, NSUT): Swiggy's strategy team must give the Board ONE recommendation on Toing (Scale,
Funnel, Kill or a hybrid) with numbers. Audience: Swiggy's Board and the competition judges.

## Read first (all of it)
1. `nsbc-case/case/01-nsbc-toing-case.md` (the case, with IDs C01 to C14, O1 to O4, B1 to B5, J1 to J5)
2. `nsbc-case/research/raw/R-A-swiggy.md`, `R-B-rivals-regulation.md`, `R-C-economics-market.md`
3. `nsbc-case/model/model_tables.md` and `nsbc-case/model/toing_model.py` (the comments name every assumption A01 to A44 and its basis)
4. `C:\Users\harsh\.claude\plans\working-folder-nsbc-case-polished-backus.md`, sections 1 to 3, 5 to 7

## The argument (fixed)
**Recommendation (use these exact words):** Keep Toing but stop paying for ₹99 trips: rebuild it
around pooled Drops and slot batching, and grow it only where the trip pays for itself.

- The case's first line is the thesis: rider pay is roughly the same for a ₹79 thali and a ₹700
  dinner. The problem is the trip, not the price.
- Today's ₹99 Toing order (model): customer pays ₹115.95 (item ₹99, 5% GST on food, ₹12 platform
  fee, no delivery or packaging fee); restaurant keeps about ₹84; Swiggy revenue ₹23.04; rider ₹40;
  other variable costs about ₹10.4; contribution −₹27.33. A ₹700 core order earns about ₹53 of
  contribution and ₹21.7 of adjusted EBITDA (3.1% of GOV), so one Toing order erases the EBITDA of
  1.26 core orders.
- Triangulation from Swiggy's public segment data: Platform Innovations lost ₹131 Cr in Q1 FY27;
  our estimate puts Toing's share at about ₹81 Cr a quarter, roughly two-thirds per-order losses
  and one-third installs, on about 2.4 lakh orders a day. Label every such figure "estimate".
- Seven levers take the order from −₹27.3 to +₹5.7 (blended): slot batching +7.2, pooled Drops
  +9.7, door fee outside Drops +8.3, fixed menus and kitchen partners +3.4, ad load +1.5, fewer
  coupons +2.0, a ₹49 monthly Toing Pass +1.0. Swiggy controls batching, coupons and the door fee
  timing; restaurants control menus and ads; customers decide Drops, door fee tolerance and the
  pass. A Drop run of 10 meals costs ₹9.4 of rider per meal plus a ₹4 host fee; breakeven is 3.3
  meals a run; rider earnings per hour rise from about ₹80 (solo) to about ₹125 (Drop runs).
- Funnel (B3): a Toing user costs Swiggy about ₹451 in 12 months (₹60 acquisition plus ₹68 a
  month of order losses, decaying at 85% retention). With 2 in 3 new users incremental, the case's
  own lens (loss versus what Swiggy would pay for paid acquisition, ₹500) needs 135% migration to
  ₹700-type ordering in 12 months, which is impossible; the LTV lens needs 25% against a likely
  15%. Cost per incremental migrated user is about ₹4,485, 9.0 times paid CAC.
- Three-year result, base, ₹ Cr: Scale −1,744; Funnel −1,140 (CAC credit) or −950 (LTV credit);
  Kill −40; Rebuild +1 (expected value +3 with the 6-month gate; bear −121, bull +135).
  The moneyshot is the ₹1,745 Cr gap between Rebuild and Scale: order losses 1,200, paid installs
  390, trade-down 178, overhead 15, migration credit −39.
- Rebuild only barely beats Kill on money (+₹41 Cr), and this must be said plainly. The case for
  Rebuild over Kill is optionality and the customer: Toing brings 2 in 3 new-or-dormant users, 33M
  weekly users, and a fence that stops ₹700 orders from trading down. A gate at month 6 falls back
  to a clean shutdown, capping the downside near Kill.
- Flip points (Rebuild equals Kill): rider cost per solo trip ₹42.4 (vs ₹40 assumed), 5.5 meals
  per Drop run (vs 10), trade-down 26% (vs 20%), commission 10.8% (vs 12% plus 3 points), door fee
  ₹16.6, customer-paid fees ₹10.5. Say which are close and how Swiggy would learn within 3, 6 and
  12 months.
- Competition (B4): Eternal has refused a Toing clone, pilots Zomato Now office pods, and
  Goyal says rivals' traction is "purely price-driven". Its dominant response to a rebuild is to
  hold back and copy the Drop idea through pods and Gold thresholds. Rapido Ownly (0% commission,
  ₹30 trip fee, 60k orders a day in Bengaluru, Pune planned) is the sharper threat because it shifts
  the trip cost to the customer, which is our door-fee lever.
- Regulation (J4): Code on Social Security 1 to 2% of turnover capped at 5% of rider pay costs about
  ₹0.35 an order on Toing (revenue basis) and up to ₹1.74 on a customer-paid basis; Karnataka's fee
  is capped at ₹0.50 an order; 18% GST on delivery fees since 22 Sep 2025. Regulation adds roughly
  0.4 to 0.9% of a ₹99 basket: real, but an order of magnitude below the trip-cost problem.
- Primary research (J3): survey (14 questions) and cart sampling (Pune addresses) are being run by
  the team; results are NOT yet in. In section 10, present the instruments, sample-size targets
  (n ≥ 120 survey, ≥ 40 carts), the method, its limits, the mapping of each result to a model input,
  and placeholders written as "[to be filled from primary_outputs.json]". NEVER invent a result.

## Tags on every number
`[C##]` case fact; `[S##]` source (register in plan §5.1); `[F: SW01]` raw-fact ID; `[A##]`
assumption (see the comments in toing_model.py); `[M]` model output; `[Est]` triangulated estimate.

## Style (hard rules, checked by script)
- Zero em dashes and zero en dashes. Write ranges as "to". Negatives use "−" (U+2212).
- Banned words and phrases (case-insensitive): delve, landscape, unlock, game-changer, here's,
  let's, bottom line, it's not just, make no mistake, in today's, fast-paced, seamless, leverage
  (as a verb), robust, tapestry, testament, navigate the, realm, holistic, synergy, paradigm,
  cutting-edge, revolutionize, crucial, pivotal, furthermore, moreover, in conclusion, it is worth
  noting.
- No rhetorical-question headings or hooks. Headings are declarative findings with a number where
  possible. Voice: humanised analytical prose, the way a strong consultant writes a Board memo;
  concrete, specific, varied sentence length. Tables wherever numbers compare. At least 12 tables
  in your part. ₹ with lakh and crore grouping.
- Open each `##` section with a bold **Answer.** paragraph of 2 to 4 sentences.
- Use only facts in the raw files, the case, the model tables and this brief. Do not browse. Do not
  invent numbers, quotes or survey results. Quotes must be the exact short quotes in the raw files.
- Company facts come from the case; outside data is cited. Where public data differs from the case
  (core AOV about ₹500 implied vs ₹700 stated) say so and keep the case figure.

## Section outline and assignment (headings final; write `## N. Heading` and `### N.M` subsections)
| § | Heading | Writer |
|---|---|---|
| 0 | Document control | A |
| 1 | Case coverage matrix | A |
| 2 | The answer in one page: keep Toing, but stop paying for ₹99 trips | A |
| 3 | The situation: a ₹99 order is carried by a trip priced for a ₹700 order | A |
| 4 | The under-₹150 customer is real, and the models that lasted moved the trip cost off the order | A |
| 5 | Unit economics today: a ₹99 Toing order loses about ₹27 before marketing | A |
| 6 | Triangulation: Toing's loss is about ₹81 Cr a quarter, two-thirds of it in the orders | B |
| 7 | Levers: seven levers take the order from −₹27 to +₹6, and four sit in Swiggy's hands | B |
| 8 | Density: a Drop run must carry at least four meals, and ten earn +₹7 a meal | B |
| 9 | The funnel test: paid marketing is nine times cheaper per migrated user | B |
| 10 | Primary research: instruments, method, limits and how results enter the model | C |
| 11 | Options compared: Scale, Funnel, Kill and Rebuild on the same five tests | C |
| 12 | The recommendation: rebuild Toing around the trip, with a six-month gate | C |
| 13 | Competition: Eternal holds back today, Rapido Ownly is the sharper threat | C |
| 14 | Regulation: the labour codes and Karnataka add under 1% of a ₹99 basket | D |
| 15 | What would change our mind: flip points, signals and a 3, 6 and 12-month scorecard | D |
| 16 | Implementation roadmap: 30, 90 and 365 days | D |
| 17 | Risk register with paired mitigations | D |
| 18 | Anticipated judge and Board questions (20, each answered in 2 to 4 sentences with numbers) | D |

Frameworks to use where they fit (from the case-competition-deck skill): issue tree and MECE for
the problem; value chain and unit-economics waterfall; Porter's Five Forces on Indian food
delivery; game tree for Eternal's response; scenario planning (bear, base, bull); tornado
sensitivity; Ansoff (market penetration into a new segment through a separate offer); stakeholder
power-interest grid (riders, restaurants, students, regulators); pre-mortem; KPI tree.

## Output
Write ONLY your part to `nsbc-case/research/parts/part-X.md` (X = your letter). Word targets: A
about 6,500; B about 6,000; C about 6,500; D about 6,500. Then run this check and fix every hit:

```python
import re,io; t=io.open(r"nsbc-case/research/parts/part-X.md",encoding="utf-8").read()
print("dashes",t.count("\u2014")+t.count("\u2013")); print("words",len(t.split())); print("tables",t.count("|---"))
bad=["delve","landscape","unlock","game-changer","here's","let's","bottom line","it's not just","make no mistake","in today's","fast-paced","seamless","robust","tapestry","testament","realm","holistic","synergy","paradigm","cutting-edge","revolutioniz","crucial","pivotal","furthermore","moreover","in conclusion","it is worth noting"]
print({b:len(re.findall(re.escape(b),t,re.I)) for b in bad if re.search(re.escape(b),t,re.I)})
```
Reply with word count, table count, sections written and any fact you needed but could not find.
Do not edit any other file.
