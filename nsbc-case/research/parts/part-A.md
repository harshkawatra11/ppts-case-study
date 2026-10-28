## 0. Document control

**Answer.** This document is the evidence file behind Team IdeaForge's Board recommendation on Toing: keep Toing but stop paying for ₹99 trips, rebuild it around pooled Drops and slot batching, and grow it only where the trip pays for itself. Every number carries a tag that says where it came from, the case governs every fact about Swiggy, and every figure that Swiggy has not published is an estimate with its working shown. Sections 0 to 5 set out the case, the answer, the situation, the precedents and today's unit economics; later sections build the levers, the funnel test, the options and the risks.

### 0.1 Tag legend

Each number in the text is followed by one tag. A reader can therefore separate what the case states, what a public source says, what the team assumed and what the model computed.

| Tag | Meaning | Example | Where to check it |
|---|---|---|---|
| [C##] | Fact stated in the case text (C01 to C14) | Core AOV about ₹700 [C04] | `case/01-nsbc-toing-case.md` |
| [S##] | Public source in the register (S01 to S15) | Platform Innovations adjusted EBITDA −₹131 Cr [S01] | Appendix bibliography |
| [F: SW01] | Raw-fact row in the research files (SW, CR, EC prefixes) | 33M weekly users [F: SW17] | `research/raw/R-A`, `R-B`, `R-C` |
| [A##] | Team assumption, listed with its basis in section 5.5 | Rider pay ₹40 an order [A05] | `model/toing_model.py` comments |
| [M] | Output of the model at base inputs | Contribution −₹27.33 an order [M] | `model/model_tables.md` |
| [Est] | Estimate triangulated from public data plus assumptions | Toing loss about ₹81 Cr a quarter [Est] | Section 6 |

### 0.2 Source hierarchy

The case sets the rule in its own guideline G4: facts about the company come only from the case, and outside market data is welcome if cited [C: G4]. We read that rule as a hierarchy with four tiers.

| Tier | What it governs | Rule in this document | Example |
|---|---|---|---|
| 1. The case | Every fact about Swiggy and Toing | Used as stated, even where public data differ | Core AOV ₹700, adjusted EBITDA 3.1% of GOV [C04, C05] |
| 2. Swiggy's public disclosures | Decomposition only | Used to split or triangulate a case fact, labelled [Est] where we derive from them | Platform Innovations loss ₹131 Cr [S01] used to size Toing's share |
| 3. Outside data | Competitors, regulation, market anchors | Cited with a source ID and a confidence note | Rapido Ownly ₹30 fee [S08]; Karnataka fee cap ₹0.50 [S09] |
| 4. Team assumptions | Anything Swiggy has not published | Numbered A01 to A44, with basis, range and a stress test | Toing commission 12% [A02] |

Where tiers 1 and 2 disagree we keep the case figure and say so. The one material disagreement is core AOV: the case says about ₹700, while Swiggy's Q1 FY27 letter implies about ₹500 (₹9,490 Cr of food GOV over roughly 188M orders) [F: EC05]. Section 5.6 shows that the answer survives at ₹500.

### 0.3 Model version

| Item | Value |
|---|---|
| Model file | `nsbc-case/model/toing_model.py`, single source of truth for every [M] figure |
| Run date | 29 September 2026 |
| Outputs | `model/model_outputs.json`, `model/model_tables.md` |
| Inputs | 44 numbered assumptions, A01 to A44, all listed in the model file with their basis |
| Base scenario | Three years from October 2026, in ₹ Cr, with bear and bull cases beside it |
| Stress tests | Nine inputs varied over five values each, seven flip points, a seven-driver tornado |
| Prelims deadline | 30 September 2026, 11:59 PM [C: Format] |

The model has no hidden inputs. If a number in this document cannot be traced to a tag, that is a defect and should be read as one.

### 0.4 Honest limits

The case tells the Board that Toing is "a small business inside a large one" and that the strategy team is expected to estimate its metrics and show its work [C: Rules]. These are the places where our work is weakest.

| # | Limit | Consequence | How we handle it |
|---|---|---|---|
| 1 | Swiggy has not published Toing's order count, AOV, commission or rider payout [F: EC gaps] | Every Toing unit figure is modelled | Assumptions A01 to A12, each stress tested in section 15 |
| 2 | Platform Innovations mixes Toing with Snacc, Crew and Minis [F: SW06] | Toing's ₹81 Cr quarterly loss is our split, not a disclosure | Labelled [Est]; the split assumes ₹50 Cr of non-Toing loss [A12] |
| 3 | The case's ₹700 core AOV is higher than the roughly ₹500 the letter implies | Core EBITDA per order could be ₹15.5 rather than ₹21.7 | Case figure kept; both shown in section 5.6 |
| 4 | No fieldwork was run; behavioural shares are assumptions tested across their ranges | Drop take-up, trade-down and migration rest on judgment, not measurement | Section 10 gives the range tested for each and the four-city test Swiggy would run to replace it |
| 5 | Several competitor and pay facts rest on search snippets [F: CR01, CR06, CR11, CR12] | Lower confidence on those rows | Marked in the register; none carries a headline number |
| 6 | The three-year paths use assumed volume ramps [A37 to A41] | Totals move with volume, not only with unit economics | Bear and bull runs, and flip points, shown in section 11 and section 15 |
| 7 | Rebuild beats Kill by only ₹41 Cr over three years in the base case [M] | The money alone does not decide between them | Said plainly in section 2; the case for Rebuild is optionality and the customer |
| 8 | Dunzo, Snacc and Everyday are read from public statements, not from their books | Precedents show a pattern, not a proof | Section 4 states what each precedent does and does not show |

## 1. Case coverage matrix

**Answer.** All 19 requirements the case sets are answered, each in a named section and on a named slide. The five Board expectations (B1 to B5) get a full section each, the four options (O1 to O4) are scored on one common set of tests, and the judging criteria (J1 to J5) and rules (R1 to R4) are mapped to the place where a judge can verify them. Insight (J3) rests on public data and the model: the trip-cost thesis, the density breakeven and the funnel identity, triangulated against Swiggy's own segment figures, with no fieldwork run.

### 1.1 Board expectations, options, judging criteria, rules

Slide numbers refer to the 11-slide prelims deck: 1 cover, 2 summary, 3 unit math, 4 customer, 5 levers, 6 options and funnel, 7 the call, 8 rivals and rules, 9 signals and roadmap, 10 appendix, 11 thank-you.

| ID | Requirement | One-line answer | Document section | Slide |
|---|---|---|---|---|
| B1 | Per-order unit economics today, every assumption sourced | A ₹99 order: customer pays ₹115.95, restaurant keeps about ₹84, rider costs ₹40, Swiggy is left with −₹27.33 of contribution [M] | 5 | 3 |
| B2 | Levers, size of each, who controls it | Seven levers take the order from −₹27.3 to +₹5.7; Swiggy controls batching, coupons and door-fee timing, restaurants control menus and ads, customers decide Drops, the door fee and the pass [M] | 7, 8 | 5 |
| B3 | Funnel: migration share, period, comparison with paid CAC | A Toing user costs about ₹451 in 12 months; payback on the case's lens needs 135% migration, the LTV lens needs 25% against a likely 15%; cost per migrated user is 9.0 times paid CAC [M] | 9 | 6 |
| B4 | Competitive reading and Eternal's likely response | Eternal holds back and copies the Drop idea through pods and Gold thresholds; Rapido Ownly is the sharper threat [F: CR03, CR04, CR07] | 13 | 8 |
| B5 | What would change our mind, 12-month signals | Six flip points (rider cost ₹42.4, 5.5 meals a run, 26% trade-down, 10.8% commission, ₹16.6 door fee, ₹10.5 customer fees), read at months 3, 6 and 12 [M] | 15 | 9 |
| O1 | Scale | Three-year base result −₹1,744 Cr [M]; rejected | 11 | 6, 7 |
| O2 | Funnel | −₹1,140 Cr on the CAC credit, −₹950 Cr on the LTV credit [M]; rejected | 9, 11 | 6 |
| O3 | Kill | −₹40 Cr [M]; the fallback if the month-6 gate fails | 11, 12 | 6, 7 |
| O4 | Hybrid or fourth path | Rebuild: +₹1 Cr base, +₹3 Cr expected with the gate [M]; the primary recommendation | 12 | 2, 7 |
| J1 | Unit economics: rigour, transparency, realism (30%) | Full order stacks at ₹99, ₹149 and ₹700, 44 numbered assumptions, a tornado and flip points | 5, 7, 15 | 3, 10 |
| J2 | Decision quality: one recommendation, weighed honestly (25%) | One call, five tests on four options, and a plain statement that Rebuild beats Kill by only ₹41 Cr | 2, 11, 12 | 2, 6, 7 |
| J3 | Insight, primary research counts (20%) | Insight from public data and our model: trip cost, density breakeven, funnel identity, triangulated loss; no fieldwork run (section 10) | 4, 8, 10 | 4, 7 |
| J4 | Competitive and regulatory reading (15%) | Game tree for Eternal; labour codes and Karnataka add 0.4 to 0.9% of a ₹99 basket [M] | 13, 14 | 8 |
| J5 | Communication (10%) | Action titles with a number, one moneyshot, one page per Board question | 2, 18 | 2 to 11 |
| R1 | Public information only | No approach to Swiggy or Eternal staff; sources S01 to S15 are public | 0.2 | 10 |
| R2 | Primary research with sample size and method | Insight from public data and our model: trip cost, density breakeven, funnel identity, triangulated loss; no fieldwork run (section 10) | 10 | 4, 10 |
| R3 | Assumptions allowed if stated | A01 to A44, each with basis and range | 5.5, Appendix | 3, 10 |
| R4 | Estimate internal metrics, show the work | Toing orders, loss split and unit stack estimated step by step | 5, 6 | 3, 10 |
| G4 | Company facts only from the case | Case figures kept; public disclosures used only to decompose, labelled [Est] | 0.2 | 10 |

### 1.2 How to read the matrix

Two rows deserve a note. First, B5 asks for "two or three assumptions" that flip the answer. We give six flip points because the model produces them at no extra cost, but three of them (rider cost, meals per run and trade-down) are the ones a Board should watch, since each sits within about 6% to 45% of its assumed value. Second, J3 is the row with the most exposure: the case says insight from primary research "counts here" [C: Metric for judgement], and this document earns that credit from public data and the model rather than fieldwork. Section 10 sets out what was used, what public data cannot show, and how Swiggy would close that gap in its first 90 days.

## 2. The answer in one page: keep Toing, but stop paying for ₹99 trips

**Answer.** Keep Toing but stop paying for ₹99 trips: rebuild it around pooled Drops and slot batching, and grow it only where the trip pays for itself. Today a ₹99 order loses ₹27.33 before any marketing [M], because a rider is paid about ₹40 for a trip that a ₹700 dinner would fund at ₹42 [A05, A13]. Scaling Toing as it runs costs ₹1,744 Cr over three years, the funnel costs ₹950 Cr to ₹1,140 Cr, a shutdown costs ₹40 Cr, and the rebuild returns about ₹1 Cr with a gate at month 6 that turns a failed test into a clean shutdown [M].

### 2.1 The thesis in the case's first line

The case opens with the fact that a delivery partner is paid roughly the same to carry a ₹79 thali across Pune as a ₹700 family dinner across Bengaluru, and calls that "the whole case" [C01]. We take it literally. Price is what the customer sees, but the loss sits in the trip. Rider pay is 40.4% of a ₹99 item total and 6.0% of a ₹700 order [M]. Swiggy's take rate is almost the same on both: ₹23.04 on ₹99 is 23.3%, and ₹166.34 on ₹700 is 23.8% [M]. The percentage is right; the rupee amount is not enough to pay for a trip that costs the same.

That reading points to a different remedy from the two the Board has heard. Management's reach strategy tries to add orders; analysts and Eternal say shut the app. Both treat the ₹99 price as the fault. If the fault is the trip, the fix is to change how the trip is made: carry ten meals in one run to a pickup point (a Drop) instead of one meal to one door, and charge for the door when a customer wants one.

### 2.2 The numbers that carry the argument

| Question | Answer | Tag |
|---|---|---|
| Contribution per ₹99 Toing order today | −₹27.33 | [M] |
| Contribution per ₹700 core order | +₹53.2 | [M] |
| Adjusted EBITDA per ₹700 core order (3.1% of GOV) | ₹21.7 | [C05, M] |
| Core orders whose EBITDA one Toing order erases | 1.26 | [M] |
| Toing's estimated loss a quarter | about ₹81 Cr, roughly two-thirds in orders and one-third in installs | [Est] |
| Toing's estimated orders a day | about 2.4 lakh | [Est] |
| Contribution per order after seven levers | +₹5.7 (Drop order +₹7.2, door order +₹4.3) | [M] |
| Meals per Drop run at breakeven | 3.3 | [M] |
| Rider earnings an hour, solo versus Drop runs | about ₹80 versus about ₹125 | [M] |
| Cost of a Toing user over 12 months | about ₹451 | [M] |
| Cost per incremental migrated user against paid CAC | about ₹4,485, 9.0 times ₹500 | [M] |

### 2.3 Four options on the same three-year base case

| Option | Y1 | Y2 | Y3 | Three-year total, ₹ Cr | Verdict |
|---|---|---|---|---|---|
| O1 Scale as it runs | −514 | −588 | −642 | −1,744 | Losses grow with volume |
| O2 Funnel (CAC credit) | −380 | −380 | −380 | −1,140 | Needs 135% migration to pay back |
| O2 Funnel (LTV credit) | −317 | −317 | −317 | −950 | Needs 25% against a likely 15% |
| O3 Kill | −88 | 24 | 24 | −40 | Cheap exit, gives up the customer |
| O4 Rebuild, the recommendation | −56 | 17 | 39 | +1 | Barely positive, with upside |
| O4 Rebuild if the month-6 gate fails | −41 | 24 | 24 | +7 | Falls back to the Kill path |

All figures are [M], in ₹ Cr, base case, three years from October 2026. Rebuild carries a bear case of −₹121 Cr and a bull case of +₹135 Cr; the expected value with a 60% chance of passing the density gate is +₹3 Cr [A42, M].

### 2.4 The moneyshot: a ₹1,745 Cr gap

The distance between rebuilding Toing and scaling it as it runs is ₹1,745 Cr over three years [M]. Most of it is not a matter of forecasting skill; it is the order loss that Scale keeps paying and Rebuild stops.

| Component of the gap (Rebuild versus Scale, base) | ₹ Cr | Share of gap |
|---|---|---|
| Order losses avoided | 1,200 | 69% |
| Paid installs avoided | 390 | 22% |
| Trade-down avoided (₹700 orders that turn into small orders) | 178 | 10% |
| Overhead avoided | 15 | 1% |
| Migration credit given up (fewer users to migrate) | −39 | −2% |
| Total | 1,745 | 100% |

Shares are rounded and sum to about 100%. The rebuild wins by a very large margin against Scale and by a small one against Kill, and both statements are true.

### 2.5 What we are not claiming

Rebuild beats Kill by ₹41 Cr over three years, from −₹40 Cr to +₹1 Cr [M]. On money alone that is a rounding difference, and the flip points below show how easily it can reverse. We do not hide this. The case for Rebuild over Kill rests on three things that the three-year cash line does not price. Toing brings in 2 in 3 of its new users as new or dormant on the platform [F: SW07]. It reaches 33M weekly users [F: SW17]. And it acts as a fence: a cheap separate offer that pays for its own trip halves the trade-down of ₹700 orders into small orders inside the core app, worth ₹178 Cr in the gap above [A: trade-down inputs, M].

The month-6 gate is what makes the choice defensible. If density fails, Swiggy shuts Toing having spent about ₹41 Cr in the transition year rather than ₹88 Cr, and the result is +₹7 Cr against −₹40 Cr [M]. The rebuild's downside is capped near the Kill line; its upside is not.

### 2.6 What the Board is asked to approve

| When | Decision | What it costs or earns |
|---|---|---|
| Within 30 days | Introduce a ₹20 door fee outside Drops, start slot batching, cut coupons from ₹4 to ₹2, freeze paid installs | Batching (+₹7.2), the door fee (+₹8.3) and fewer coupons (+₹2.0) are the levers Swiggy can start alone; the bridge sizes them in sequence [M] |
| Within 90 days | Open 40 pilot Drop sites (hostel gates, PG lobbies, office desks) in four cities | Tests whether runs reach at least 5.5 meals [M] |
| Month 3 and month 6 | Two gates on density and cost per order | Failure triggers the clean shutdown |
| Month 12 | Scale only in cities where contribution per order is positive | Growth is earned by the trip paying for itself |

The three flip points closest to the base case are rider cost per solo trip (₹42.4 against ₹40), trade-down (26% against 20%) and commission (10.8% against 12% plus a 3-point uplift) [M]. Section 15 sets out how Swiggy would learn each one within 3, 6 and 12 months.

## 3. The situation: a ₹99 order is carried by a trip priced for a ₹700 order

**Answer.** Toing sells a meal at ₹49 to ₹150 through a delivery system whose cost per trip does not fall with the basket. On our model a ₹99 order brings Swiggy ₹23.04 of revenue against ₹50.37 of variable cost, and ₹40 of that cost is the rider [M]. The public record says Toing is growing fast (33M weekly users, about 50 cities) while its parent segment lost ₹131 Cr in one quarter, so the question is no longer whether the app has customers but who pays for their trips [F: SW17, SW07, SW06].

### 3.1 What the case establishes

| ID | Case fact | Why it matters for the answer |
|---|---|---|
| C01 | A delivery partner is paid roughly the same for a ₹79 thali as for a ₹700 dinner | Trip cost is per order, not per rupee of basket |
| C02, C03 | Toing launched in August 2025, meals ₹49 to ₹150, students and young earners, starting in Pune; the logic was volume and compact menus | The customer is price-bound and orders often |
| C04 | Core AOV about ₹700 | Sets the funding capacity of a normal trip |
| C05 | Core adjusted EBITDA about 3.1% of GOV | Sets the margin a Toing loss must be measured against |
| C06, C07 | Rider payouts, insurance and payment processing are largely fixed per order; at ₹99 Swiggy's take "does not come close" | Small baskets carry the same cost stack |
| C08, C09 | Snacc launched January 2025 and was wound down within about a year; it was a speed bet, Toing a price bet | The precedent is close but not exact, and the case asks for a position |
| C10, C11 | Eternal has not launched a rival; it shut Zomato Everyday (₹89) and Zomato Quick in May 2025 | Eternal has been here and left |
| C12, C13 | Code on Social Security from 21 November 2025, 1 to 2% of turnover capped at 5% of worker pay; Karnataka per-transaction fee | Cost line rises, though modestly (section 14) |
| C14 | Swiggy listed in November 2024 on a path to profitability | Shareholders read the loss in the same quarter as the guidance |

The case's own summary of the arithmetic is worth quoting: at ₹700, "Swiggy's take covers them with a thin margin to spare. At ₹99, it does not come close" [C07].

### 3.2 Where the ₹115.95 goes

Our model traces one ₹99 Toing order end to end. The customer pays the item, 5% GST on food, and a ₹12 platform fee that includes 18% GST; there is no delivery or packaging fee [A03, F: SW16].

| Recipient | ₹ per order | Share of customer's ₹115.95 | Composition |
|---|---|---|---|
| Restaurant keeps | 83.99 | 72.4% | Item ₹99 less 12% commission (₹11.88), GST on commission (₹2.14) and ads (₹0.99) [A02, A04] |
| Government (GST) | 8.92 | 7.7% | Food GST ₹4.95, GST inside the fee ₹1.83, GST on commission ₹2.14 |
| Swiggy revenue | 23.04 | 19.9% | Commission ₹11.88, net platform fee ₹10.17, ads ₹0.99 |
| Total | 115.95 | 100% | Customer pays item ₹99, food GST ₹4.95, fee ₹12 |

All figures are [M]. Swiggy's ₹23.04 must then pay for the trip and everything else.

| Swiggy cost line | ₹ per order | Basis |
|---|---|---|
| Rider payout incl. incentives | 40.00 | A05, base pay ₹20 to ₹35 plus distance [F: CR11] |
| Rider insurance | 1.00 | A06 |
| CoSS contribution | 0.35 | 1.5% of revenue, within the 5% cap [C12] |
| Payment processing | 1.04 | 0.9% of customer-paid total [A07] |
| Support and refunds | 2.98 | ₹1.50 plus 1.5% of item [A08] |
| Platform-funded discount | 4.00 | A09 |
| Tech (maps, SMS, cloud) | 1.00 | A10 |
| Total variable cost | 50.37 | |
| Contribution | −27.33 | Revenue ₹23.04 less cost ₹50.37 |

### 3.3 Issue tree: why a ₹99 order loses money

The tree below splits the loss of ₹27.33 into branches that do not overlap and together cover it. Each leaf carries its rupee value and the lever, if any, that acts on it.

| Branch | Leaf | ₹ per order | Cause | Lever (section) |
|---|---|---|---|---|
| A. Revenue is too small | A1 Commission | 11.88 | 12% of ₹99, against 20% of ₹614.5 (₹122.9) on a core order | Fixed menus and kitchen partners, +3 points (7) |
| | A2 Platform fee | 10.17 | Flat ₹12 fee, ₹15 on the main app [F: SW16] | Kept; door fee added outside Drops (7) |
| | A3 Advertising | 0.99 | 1% ad load on a new app | Ad load to 2.5% (7) |
| | A4 Delivery fee | 0.00 | None charged; core order nets ₹12.29 | Door fee ₹20 outside Drops (7) |
| B. The trip costs too much | B1 Rider payout | 40.00 | A solo trip costs the same as on a ₹700 order | Slot batching, pooled Drops (7, 8) |
| | B2 Trip-linked items | 1.35 | Insurance ₹1.00 and CoSS ₹0.35 | Spread across Drop runs |
| C. Order-linked costs are not covered | C1 Discounts | 4.00 | Coupons to acquire users | Fewer coupons (7) |
| | C2 Support, refunds, payments, tech | 5.02 | Fixed ₹1.50 plus percentages | Lower refund rate with fixed menus (7) |

Taken together, branch B is ₹41.35 of the ₹50.37 cost, so 82% of what Swiggy pays out per order is the trip [M]. Branch A is a revenue gap of about ₹143 against a core order, and no plausible price change on ₹99 closes it. The tree therefore gives the same answer as the case's first line: the problem is the trip.

A useful test is how far basket size alone would get. Holding Toing's own terms fixed, our model's contribution per order is −₹27.33 at ₹99, −₹22.15 at ₹149 (the top of the band), −₹6.51 at ₹300, and it crosses zero near ₹363 [M]. A model that needs a basket two and a half times the top of the price band is not fixed by growth inside the ₹49 to ₹150 range.

### 3.4 Porter's Five Forces on Indian food delivery

| Force | Intensity | Evidence | Implication for Toing |
|---|---|---|---|
| Rivalry | High | Eternal food delivery adjusted EBITDA is 5.6% of NOV (₹606 Cr) [F: CR01]; Swiggy is at 3.1% of GOV [F: SW02]; Ownly enters at zero commission [F: CR07] | Rivals compete on price, but Eternal has declined to fund a sub-₹150 tier |
| Buyer power | High | Students switch freely; the same two items were billed ₹346 on Toing against ₹486 on Swiggy [F: SW16]; Toing downloads of 14.5M against 12.4M for Zomato and 10.1M for Swiggy in the quarter [F: SW17] | Price cuts win installs, not loyalty |
| Restaurant supply | Medium to high | Base commission 17 to 25%, with high-volume partners negotiating 3 to 5 points lower [F: CR12]; a significant minority of Toing restaurants already reach more than half their Swiggy volumes [F: SW07] | Restaurants accept lower prices for volume; fixed menus can lift commission by about 3 points [A: commission uplift input] |
| Rider supply | Medium | Base pay ₹20 to ₹35 an order plus distance, about ₹1,154 a day [F: CR11]; Code on Social Security adds cost [C12] | Trip cost is a floor Swiggy cannot negotiate down per order; it can spread it |
| Threat of entry | Medium to high | Ownly: 0% commission, ₹30 trip fee, 50,000 to 60,000 orders a day in Bengaluru, Pune planned [F: CR07] | Entry is priced against the trip cost, which is our door-fee lever |
| Substitutes | Medium | Zomato Now office pods with no doorstep trip [F: CR04]; Gold free-delivery threshold cut to ₹99 [F: CR06, snippet only]; hostel mess and canteen (team judgement, unsourced) | Pickup without a trip is a viable substitute, which supports pooled Drops |

The forces reward one skill above the rest: covering the cost of the trip. Buyers are price-led, restaurants will trade commission for volume, and riders cost what they cost. The player who moves the trip cost off the order, or onto someone willing to pay it, holds the margin.

### 3.5 What Swiggy's own disclosures add

| Q1 FY27 metric (April to June 2026) | Value | Tag |
|---|---|---|
| Food delivery GOV | ₹9,490 Cr, +17.4% YoY | [F: SW01] |
| Food delivery adjusted EBITDA | ₹292 Cr, 3.1% of GOV | [F: SW02] |
| Food delivery contribution margin | 7.6% of GOV | [F: SW03] |
| Platform Innovations adjusted EBITDA | −₹131 Cr (−₹58 Cr in Q4 FY26, −₹40 Cr in Q3 FY26) | [F: SW06] |
| Toing scale | About 50 cities; weekly users 33M | [F: SW07, SW17] |
| New Toing users new or dormant on Swiggy | 2 in 3 | [F: SW07] |
| Consolidated cash | ₹14,367 Cr | [F: SW21] |
| User delivery charges in adjusted revenue | ₹141 Cr (₹238 Cr a year earlier) | [F: SW12] |
| Fees from users in adjusted revenue | ₹159 Cr (₹109 Cr a year earlier) | [F: SW12] |

Three readings follow. First, Platform Innovations' loss is 44.9% of food delivery's adjusted EBITDA (₹131 Cr against ₹292 Cr) [M]. One line item now consumes almost half of the profit of the business that funds it. Second, Swiggy says the initial investment in Toing is "largely on new user acquisition which is discretionary in nature and can be quickly scaled or cut-back" [F: SW08]. That is true of installs and false of trips: a rider paid ₹40 on every order is not discretionary while the order exists. Third, Swiggy's own revenue mix shows the direction of travel. Delivery charges paid by users fell from ₹238 Cr to ₹141 Cr in a year while fees rose from ₹109 Cr to ₹159 Cr [F: SW12]. Revenue has moved from the trip to the platform, which is the wrong direction for a ₹99 basket, whose trip is the whole problem.

## 4. The under-₹150 customer is real, and the models that lasted moved the trip cost off the order

**Answer.** Demand for a sub-₹150 meal is not in doubt: Swiggy reports that 2 in 3 new Toing users are new or dormant on the platform, and third-party data put Toing at 33M weekly users [F: SW07, SW17]. What separates the low-basket models that survive from those that closed is where the trip cost sits. Instamart, Rapido Ownly, Dunzo's 60-minute tier and Zomato's office pods all moved it off the order; Snacc, Zomato Everyday and Zomato Quick kept it on the order and were shut.

### 4.1 Evidence that the customer exists

| Evidence | Figure | Tag | Reading |
|---|---|---|---|
| New Toing users who are new or dormant on Swiggy | 2 in 3 | [F: SW07] | Toing reaches people the core app does not |
| Toing weekly users | 33M, up 1.8M in the last week of August 2026 | [F: SW17] | Growth is not slowing; the source is third-party |
| Downloads in the quarter | Toing 14.5M, Zomato 12.4M, Swiggy 10.1M | [F: SW17] | Toing out-downloads both main apps |
| Same two items, Toing versus Swiggy | ₹346 versus ₹486, a ₹140 gap (28.8% lower) | [F: SW16] | The gap comes from fees waived and lower prices |
| Restaurants on Toing near half of Swiggy volume | A significant minority | [F: SW07] | Partners get real volume from a small basket |
| Pune institutional base | About 612 to 700+ colleges plus research institutes, 14,000+ international students | [F: EC01] | Order of magnitude only; snippet source |
| Eternal's own response | Gold free-delivery threshold cut to ₹99 from ₹199, more sub-₹250 options | [F: CR06] | The leader is fighting for the same customer; snippet only, verify before quoting |
| Rival's reading | Traction is "purely price-driven" | [F: CR03] | Eternal does not deny demand, it denies profitability |

Two cautions apply. The 33M weekly-user figure is a Sensor Tower estimate quoted by CLSA and exceeds the 19.2M monthly transacting users Swiggy reports for food delivery [F: SW04]; the two are different measures, and neither says how many users order. Zomato also still has more daily users [F: SW17]. We use 33M as evidence of interest, and none of our unit economics depends on it. Second, the case tells teams to treat stated intent with care, and the literature agrees that stated purchase intentions overstate behaviour [F: EC02]. Section 10 applies that discount wherever a behavioural assumption stands in for a measurement.

### 4.2 Who moves and who resists

The rebuild changes something for four groups. The grid below rates each group's power over the outcome and its interest in it.

| Stakeholder | Power | Interest | Effect of the rebuild | Stance we expect |
|---|---|---|---|---|
| Riders | Medium | High | Earnings an hour rise from about ₹80 (solo, 2 orders an hour) to about ₹125 (Drop runs of 10 meals) [A44, M] | Supportive if runs are steady |
| Restaurants | High | High | Fixed menus, kitchen-partner batches, commission about 3 points higher and ads at 2.5% [M] | Split; the volume-hungry accept |
| Students and young earners | High | High | A pickup walk of up to 5 minutes or a ₹20 door fee; coupons reduced | Sensitive to the door fee; tested in section 10 |
| Regulators | Medium | Medium | Welfare contributions and GST apply to any model | Neutral; cost is under 1% of the basket (section 14) |

### 4.3 Seven precedents, one pattern

| Precedent | What it tried | Where the trip cost sat (team reading) | Outcome | Tag |
|---|---|---|---|---|
| Snacc (Swiggy) | Snacks and quick bites in 10 to 15 minutes, micro-kitchens, Bengaluru, then Gurugram and Noida | On the order; speed made each trip more expensive | Shut February 2026: "the broader economics made it challenging to scale" | [C08, F: CR14, SW10] |
| Zomato Everyday | ₹89 home-style meals | On the order; ₹89 basket, full trip | Shut May 2025; profit not visible without hurting the customer experience | [C11] |
| Zomato Quick | 15-minute delivery | On the order; speed plus density not present | Shut May 2025; "restaurant density and kitchen infrastructure is not set up" for 10-minute orders | [C11, F: CR05] |
| Dunzo 60-minute tier | Nudged customers to a batched option | Off the order, spread across several orders in one trip | Saved ₹8 to ₹10 an order (2022) | [F: CR13] |
| Instamart densification | More orders per store and per route | Off the order, spread by density | Worth ₹5 an order; contribution margin −0.2% of GOV, contribution breakeven in May 2026; store utilisation still about 40% | [F: SW19] |
| Rapido Ownly | Zero commission, flat ₹30 customer trip fee | On the customer, as a visible fee | 50,000 to 60,000 orders a day in Bengaluru; Hyderabad launched, Pune planned | [F: CR07] |
| Zomato Now pods | Vending pods in Gurugram offices, external food brands | Removed; no doorstep trip | Pilot, results unpublished | [F: CR04] |

### 4.4 The seed finding

Read down the third column and a pattern appears. The three models that kept the full trip cost on each order and sold either a low price or speed (Snacc, Everyday, Quick) were shut: Snacc within about a year of launch, and the two Zomato services in May 2025. The four that did something different about the trip (Dunzo's tier, Instamart, Ownly, the pods) either spread it across several orders, charged for it openly, or removed it. **Lasting models moved the trip cost off the order.**

We present this as a pattern, not a proof, for three reasons. The sample is seven cases and their outcomes are read from public statements. Two of the four (Ownly and the pods) are too young to call lasting; Ownly launched citywide in March 2026 [F: CR07] and the pods are a pilot [F: CR04]. And the Dunzo saving is a size of lever, not a verdict on Dunzo. What the precedents do support is a sharper question than the one the case poses. It is not whether Toing is a price bet or a speed bet. It is whether the trip on a ₹99 order is carried by the order, by the customer, or by a batch.

Our slot-batching lever (+₹7.20 an order) sits inside the ₹8 to ₹10 an order that Dunzo reported for batching, which is a useful consistency check on its size [M, F: CR13]. Instamart's ₹5 an order from densification is a smaller effect than a Drop run, because a Drop run puts ten meals on one trip rather than raising utilisation on existing routes [F: SW19, M].

### 4.5 What this means for the Ansoff question

Toing is an existing service (delivery of restaurant food) taken to a customer the core app prices out. The rebuild does not add a new product line; it adds a new way of making the trip, the Drop, and confines it to the segment where the old way cannot pay. That places the recommendation on the penetration and development side of the Ansoff grid rather than diversification, which is why the downside can be capped by a gate. Snacc changed the product and the kitchen at once; Toing's rebuild changes the trip and keeps the restaurants.

## 5. Unit economics today: a ₹99 Toing order loses about ₹27 before marketing

**Answer.** On the model's base inputs a ₹99 Toing order loses ₹27.33 of contribution, a ₹149 order loses ₹22.15, and a ₹700 core order earns ₹53.2 of contribution and ₹21.7 of adjusted EBITDA [M]. Basket size barely helps inside the ₹49 to ₹150 band: each extra ₹100 of basket adds about ₹10.6 of contribution, and Toing's terms would only break even near ₹363 [M]. One Toing order erases the EBITDA of 1.26 core orders, and if core AOV is nearer the ₹500 that public data imply, it erases 1.76 [M].

### 5.1 The per-order stack at ₹99, ₹149 and ₹700

| Line, ₹ per order | Toing ₹99 | Toing ₹149 | Core ₹700 |
|---|---|---|---|
| Customer pays | 115.95 | 168.45 | 700.00 |
| Restaurant keeps (after commission, GST on commission, ads) | 83.99 | 126.41 | n/a |
| GST collected for government | 8.92 | 12.50 | n/a |
| Commission | 11.88 | 17.88 | 122.90 |
| Platform fee (net of GST) | 10.17 | 10.17 | 12.71 |
| Delivery fee (net of GST) | 0.00 | 0.00 | 12.29 |
| Advertising | 0.99 | 1.49 | 18.43 |
| **Swiggy revenue** | **23.04** | **29.54** | **166.34** |
| Rider payout | −40.00 | −40.00 | −42.00 |
| Insurance | −1.00 | −1.00 | −1.00 |
| CoSS contribution | −0.35 | −0.44 | −2.10 |
| Payment processing | −1.04 | −1.52 | −6.30 |
| Support and refunds | −2.98 | −3.74 | −10.72 |
| Platform-funded discounts | −4.00 | −4.00 | −22.00 |
| Tech | −1.00 | −1.00 | −1.00 |
| Other variable cost (calibration residual, core only) | 0.00 | 0.00 | −28.02 |
| **Contribution** | **−27.33** | **−22.15** | **+53.20** |
| Overheads | n/a | n/a | −31.50 |
| **Adjusted EBITDA** | n/a | n/a | **+21.70** |

All figures are [M]. The ₹700 column is calibrated to two disclosed figures: contribution of 7.6% of GOV [F: SW03] and adjusted EBITDA of 3.1% of GOV [C05]. The ₹28.02 of other variable cost is the amount needed for the core stack to hit 7.6%; Swiggy does not itemise it, so we show it as a residual and do not pretend to know what it holds. Toing has no such residual because we built its stack line by line.

### 5.2 Ratios that carry the argument

| Measure | Toing ₹99 | Toing ₹149 | Core ₹700 |
|---|---|---|---|
| Rider payout as % of item total (GOV for core) | 40.4% | 26.8% | 6.0% |
| Swiggy revenue as % of item total (GOV for core) | 23.3% | 19.8% | 23.8% |
| Contribution as % of item total (GOV for core) | −27.6% | −14.9% | +7.6% |
| Share of variable cost that is trip-linked (rider, insurance, CoSS) | 82% | 80% | 40% (₹45.10 of ₹113.14) |

The first three rows are [M]; the fourth is computed from the stack above (rider, insurance and CoSS over total variable cost). The revenue row is the surprise. A ₹99 order earns a take rate similar to a ₹700 order, so a pricing team that only looked at percentages would see nothing wrong. The loss shows up when the percentage is turned into rupees and set against a trip that costs ₹40 whatever the basket.

### 5.3 What a bigger basket would do

To test whether the answer is simply more rupees per order, we ran the Toing stack at other basket sizes, holding the ₹12 fee, 12% commission and ₹40 rider payout fixed.

| Item total | Contribution, ₹ per order | Rider payout as % of item |
|---|---|---|
| ₹49 | −32.51 | 81.6% |
| ₹99 | −27.33 | 40.4% |
| ₹149 | −22.15 | 26.8% |
| ₹200 | −16.87 | 20.0% |
| ₹300 | −6.51 | 13.3% |
| ₹400 | +3.85 | 10.0% |
| ₹500 | +14.21 | 8.0% |

All figures are [M]. The slope is about ₹0.106 of contribution per extra rupee of basket, which is why the line crosses zero near ₹363. The Toing customer would need to order roughly two and a half times the top of the ₹49 to ₹150 band, at Toing's terms, for the trip to pay. Most of the band, in the model's terms, is therefore a structural loss and the case's price points cannot be growth-fixed.

### 5.4 Reading the ₹99 order against the core

Three comparisons help the Board place the number.

| Comparison | Result | Tag |
|---|---|---|
| One Toing order's loss against one core order's contribution | −₹27.33 against +₹53.20, so one core order's contribution funds about 1.95 Toing orders | [M] |
| One Toing order's loss against one core order's adjusted EBITDA | −₹27.33 against +₹21.70, so one Toing order erases 1.26 core orders' EBITDA | [M] |
| Toing revenue as a share of the cost of the trip alone | ₹23.04 against ₹40.00, so revenue covers 58% of the rider | [M] |

The second row is the sharpest. Overheads of ₹31.50 an order are already absorbed by the core, so the relevant comparison for the Board is the EBITDA that core orders make after overheads. Each Toing order at today's terms wipes out the profit of more than one of them.

### 5.5 Assumption register, A01 to A16

Each assumption is a labelled input in `toing_model.py`. Ranges and flip points are tested in section 15; the ones that matter most are A05 (rider payout) and A02 (commission).

| ID | Input | Base value | Basis | Status |
|---|---|---|---|---|
| A01 | Toing item total | ₹99 | Case title and the ₹49 to ₹150 band [C02] | Fixed; no fieldwork run |
| A02 | Toing commission | 12% | Core base 17 to 25% [F: CR12]; Swiggy says Toing commissions "need to be different" and will not be zero [F: SW13] | Stressed 8% to 18% |
| A03 | Customer platform fee | ₹12 incl. 18% GST; no delivery or packaging fee | MediaNama bill review [F: SW16, S03] | Fixed; no fieldwork run |
| A04 | Advertising | 1% of item total | New app with thin ad load | Team estimate |
| A05 | Rider payout incl. incentives | ₹40 an order | Base pay ₹20 to ₹35 plus distance, ₹15 to ₹90 a trip [F: CR11]; case says pay is near equal at ₹79 and ₹700 [C01] | Stressed ₹32 to ₹48 |
| A06 | Rider insurance | ₹1.00 an order | Case names insurance as a per-order cost [C06] | Team estimate |
| A07 | Payment processing | 0.9% of customer-paid total | UPI-heavy student mix [C06] | Team estimate |
| A08 | Support and refunds | ₹1.50 plus 1.5% of item | Team estimate; core calibrated separately | Team estimate |
| A09 | Platform-funded discount | ₹4.00 an order | Toing's user-acquisition posture [F: SW08] | Fixed; no fieldwork run |
| A10 | Tech (maps, SMS, cloud) | ₹1.00 an order | Team estimate | Small effect |
| A11 | Toing mix item total | ₹120 | Meals mostly ₹100 to ₹150; used only for triangulation | Section 6 |
| A12 | Platform Innovations excluding Toing | −₹50 Cr loss, ₹13 Cr revenue a quarter | Q4 FY26 revenue level [F: SW06] | Section 6 |
| A13 | Core order, customer side | Item ₹614.5, packaging ₹25, platform fee ₹15, delivery fee ₹14.5 | Main-app fees from bill review and GST analysis [F: SW16, CR09] | Calibrated |
| A14 | Core order, Swiggy side | Commission 20%, ads 3%, rider ₹42, discount ₹22 | Core base commission 17 to 25% [F: CR12]; stack calibrated to CM 7.6% and EBITDA 3.1% [F: SW03, C05] | Calibrated |
| A15 | GST rates | 5% on food, 18% on fees and delivery | Section 9(5) from 22 September 2025 [F: CR09, S10] | Public rule |
| A16 | Karnataka fee | ₹0.50 an order cap | 1% per transaction, capped [F: CR08] | Public rule; regulatory test only |

The model file numbers levers from A17, funnel inputs from A27 and path inputs from A37; the CoSS turnover reading (1.5%, the midpoint of the 1 to 2% range in [C12], applied to revenue) is A20 in the file's own comments. We list GST and the Karnataka cap here as A15 and A16 because the file carries them without a number. On a customer-paid basis the CoSS charge on a ₹99 order would be ₹1.74, not ₹0.35; the effect on the answer is an order of magnitude below the trip cost (section 14) [M].

### 5.6 Honest note on core AOV

The case states core AOV of about ₹700 [C04], and the model uses it. Swiggy's Q1 FY27 letter points elsewhere. Food delivery GOV of ₹9,490 Cr [F: SW01] over roughly 188M food orders implies about ₹500 an order; the 188M figure is our derivation (total B2C orders of 308M less quick commerce of 114.5M and out-of-home) and carries that uncertainty [F: EC04, EC05]. Under G4 the case governs, so ₹700 stays on every slide. The answer does not depend on it.

| Measure | Core at ₹700 (case) | Core at ₹500 (public implied) |
|---|---|---|
| Swiggy revenue per order | ₹166.34 | ₹125.97 |
| Take rate | 23.8% | 25.2% |
| Contribution per order (7.6% of GOV) | ₹53.20 | ₹38.00 |
| Overheads per order | ₹31.50 | ₹22.50 |
| Adjusted EBITDA per order (3.1% of GOV) | ₹21.70 | ₹15.50 |
| Toing ₹99 contribution per order | −₹27.33 | −₹27.33 |
| Core orders whose EBITDA one Toing order erases | 1.26 | 1.76 |

All figures are [M]. Core EBITDA per order is still positive at ₹15.5, and it agrees with a simple check: food delivery adjusted EBITDA of ₹292 Cr [F: SW02] over 188M orders is about ₹15.5. The Toing loss per order does not depend on core AOV at all, because Toing's stack is built from its own inputs. A lower core AOV makes the comparison worse for Toing (1.76 core orders erased rather than 1.26) and leaves the ₹27.33 unchanged.

