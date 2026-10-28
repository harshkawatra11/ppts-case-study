# Toing: Swiggy's ₹99 Problem

**A Board recommendation on Toing: keep it, but stop paying for ₹99 trips**

Team: Harsh Kawatra (Delhi Technological University) · Gursimran Kaur (GGSIPU) · Dayita Arora
(Ramjas College, University of Delhi)

Prepared for: NSBC, Consilium'26, NSUT, September 2026

---

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

## 6. Triangulation: Toing's loss is about ₹81 Cr a quarter, two-thirds of it in the orders

**Answer.** Swiggy does not report Toing's numbers, so we rebuild them from the one public segment that contains Toing. Platform Innovations lost ₹131 Cr in Q1 FY27 [S01] [F: SW06]; after removing an assumed ₹50 Cr loss from its other businesses, Toing's share is about ₹81 Cr a quarter [Est], on roughly 2.4 lakh orders a day [Est]. About two-thirds of that loss (₹54.7 Cr) sits in the orders themselves and one-third (₹26.3 Cr) in paid installs, and the ranking of the options does not change anywhere in the range of the two assumed inputs.

### 6.1 The chain in eight steps

The method is deliberately short so a judge can redo it on a calculator. Every step uses one public figure, one assumption or the output of the step before it. The unit-economics stack used in steps 4 and 5 is the one built in section 5, with the item total moved from ₹99 to a ₹120 mix because Toing meals sit mostly between ₹100 and ₹150 [A11].

| Step | Calculation | Result | Tag |
|---|---|---|---|
| 1. Segment revenue | Platform Innovations adjusted revenue, Q1 FY27 | ₹69 Cr (₹13 Cr in Q4 FY26) | [S01] [F: SW06] |
| 2. Toing revenue | ₹69 Cr less ₹13 Cr assumed for the other businesses | ₹56 Cr | [Est] [A12] |
| 3. Toing loss | Segment adjusted EBITDA −₹131 Cr less −₹50 Cr assumed for the others | −₹81 Cr | [Est] [A12] |
| 4. Revenue per order | Commission ₹14.40 + net platform fee ₹10.17 + ads ₹1.20, at a ₹120 item total | ₹25.77 | [M] [A11] |
| 5. Contribution per order | ₹25.77 revenue less ₹50.93 of variable cost (rider ₹40, insurance ₹1, CoSS ₹0.39, payments ₹1.24, support ₹3.30, coupons ₹4, tech ₹1) | −₹25.16 | [M] |
| 6. Orders in the quarter | ₹56 Cr ÷ ₹25.77 | 2.17 Cr orders, or 2.39 lakh a day over 91 days | [Est] |
| 7. Per-order loss | 2.17 Cr orders × −₹25.16 | −₹54.7 Cr, 67% of the ₹81 Cr | [Est] |
| 8. Install spend | ₹81 Cr less ₹54.7 Cr, over 14.5 M downloads [S05] | ₹26.3 Cr, about ₹18 a download | [Est] |

Two features of the chain are worth stating. First, it divides revenue rather than loss by the per-order economics, because revenue is the only quantity Swiggy reports that scales cleanly with order count. Second, the install line is a residual: whatever loss the orders cannot explain is assigned to acquisition. That matches how Swiggy describes the spend. The letter says "the initial investment in Toing is largely on new user acquisition which is discretionary in nature and can be quickly scaled or cut-back" [S01] [F: SW08], and our residual is the piece of the loss that a freeze on paid installs can remove inside one quarter.

### 6.2 What is public and what is assumed

| Input | Value | Basis | Tag |
|---|---|---|---|
| Platform Innovations adjusted revenue, Q1 FY27 | ₹69 Cr | Swiggy Q1 FY27 shareholder letter | [S01] [F: SW06] |
| Platform Innovations adjusted EBITDA, Q1 FY27 | −₹131 Cr (−₹58 Cr in Q4 FY26, −₹40 Cr in Q3 FY26) | Same letter | [S01] [F: SW06] |
| Toing downloads in the quarter | 14.5 M (Zomato 12.4 M, Swiggy 10.1 M) | Sensor Tower via CLSA | [S05] [F: SW17] |
| Other businesses' revenue | ₹13 Cr | Q4 FY26 segment level, taken as the level before Toing reached about 50 cities [F: SW07] | [A12] |
| Other businesses' loss | −₹50 Cr | Assumed; the segment also houses Snacc, Crew and Minis | [A12] |
| Toing item total for triangulation | ₹120 | Meals mostly ₹100 to ₹150 | [A11] |
| Toing commission, fees, rider pay, coupons | 12%, ₹12, ₹40, ₹4 | Team assumptions; Swiggy says commissions "do need to be different" from the core rate [S04] [F: SW13] | [A02] [A03] [A05] [A09] |

The "other" revenue of ₹13 Cr deserves a sentence. Segment revenue rose from ₹13 Cr in Q4 FY26 to ₹69 Cr in Q1 FY27, the quarter in which Toing "expanded to about 50 cities" [S01] [F: SW07]. Treating the whole ₹13 Cr as non-Toing means Toing's own revenue was close to zero in Q4 FY26. That is generous to the residual businesses, so the sensitivity below tests a lower and a higher value.

### 6.3 Sensitivity to the two assumed inputs

Only two inputs in the chain are assumed rather than published: the other businesses' revenue and their loss. We recomputed the chain with the formulas in `triangulate()` in the model, across −₹30 to −₹70 Cr of other loss and ₹5 to ₹30 Cr of other revenue. Three results follow from the arithmetic before any table is read. Other loss moves Toing's total loss one for one. Other revenue moves the order count, because it changes the revenue that the per-order stack has to explain. And the per-order loss depends only on other revenue, since the unit economics stay at −₹25.16.

**Table 6.3a. Toing's quarterly loss, by assumed loss of the other businesses [Est]**

| Other businesses' loss, ₹ Cr | −30 | −40 | −50 (base) | −60 | −70 |
|---|---|---|---|---|---|
| Toing loss, ₹ Cr | −101 | −91 | −81 | −71 | −61 |
| Annualised, ₹ Cr | −404 | −364 | −324 | −284 | −244 |

**Table 6.3b. Toing's revenue, orders and per-order loss, by assumed revenue of the other businesses [Est]**

| Other businesses' revenue, ₹ Cr | 5 | 13 (base) | 20 | 30 |
|---|---|---|---|---|
| Toing revenue, ₹ Cr | 64 | 56 | 49 | 39 |
| Orders a day, lakh | 2.73 | 2.39 | 2.09 | 1.66 |
| Per-order loss, ₹ Cr a quarter | −62.5 | −54.7 | −47.8 | −38.1 |

**Table 6.3c. Share of Toing's loss that sits in the orders, %, by both inputs [Est]**

| Other loss, ₹ Cr | Other revenue 5 | 13 (base) | 20 | 30 |
|---|---|---|---|---|
| −30 | 62 | 54 | 47 | 38 |
| −40 | 69 | 60 | 53 | 42 |
| −50 | 77 | **67** | 59 | 47 |
| −60 | 88 | 77 | 67 | 54 |
| −70 | 102 | 90 | 78 | 62 |

**Table 6.3d. Implied install cost per download, ₹, by both inputs [Est]**

| Other loss, ₹ Cr | Other revenue 5 | 13 (base) | 20 | 30 |
|---|---|---|---|---|
| −30 | 26.6 | 31.9 | 36.7 | 43.4 |
| −40 | 19.7 | 25.1 | 29.8 | 36.5 |
| −50 | 12.8 | **18.2** | 22.9 | 29.6 |
| −60 | 5.9 | 11.3 | 16.0 | 22.7 |
| −70 | −1.0 | 4.4 | 9.1 | 15.8 |

Reading the tables together, Toing's loss lies between ₹61 and ₹101 Cr a quarter, orders between 1.66 and 2.73 lakh a day, and the per-order share of the loss between 38% and 102%. The base case sits in the middle of every range. One corner is impossible on its face: at −₹70 Cr of other loss and ₹5 Cr of other revenue the install residual turns negative (−₹1.0 a download), which would mean Toing spends nothing on acquisition, and Swiggy says the opposite [F: SW08]. We discard that corner. At the other end, if "largely on new user acquisition" is read as more than half of the loss, the cells below 50% (47, 38, 42 and 47, all with other revenue of ₹20 Cr or more) fit the letter better than our 67%. We keep 67% as the central estimate and say plainly that the letter's wording points toward a larger install share than we assume.

**Table 6.3e. Sensitivity to the Toing item total used for the orders estimate [M] [Est]**

| Item total, ₹ | 99 | 110 | 120 (base) | 130 | 149 |
|---|---|---|---|---|---|
| Revenue per order, ₹ | 23.04 | 24.47 | 25.77 | 27.07 | 29.54 |
| Contribution per order, ₹ | −27.33 | −26.20 | −25.16 | −24.12 | −22.15 |
| Orders a day, lakh | 2.67 | 2.51 | 2.39 | 2.27 | 2.08 |
| Per-order share of loss, % | 82 | 74 | 67 | 62 | 52 |
| Install cost per download, ₹ | 10.0 | 14.5 | 18.2 | 21.4 | 26.9 |

### 6.4 Why the ranking of the options survives the uncertainty

Only one path in the model reads the triangulation: Kill. Its first year charges one more quarter of Toing's loss (₹81 Cr in the base case), a ₹25 Cr wind-down, and a recapture of trade-down margin that scales with the daily order count [A37 to A41]. Scale, Funnel and Rebuild run on their own volume paths and do not use the estimate. We therefore re-ran the three-year Kill total across the grid.

**Table 6.4. Kill's three-year total, ₹ Cr, by both assumed inputs [M] (Rebuild's base result is +1 in every cell)**

| Other loss, ₹ Cr | Other revenue 5 | 13 (base) | 20 | 30 |
|---|---|---|---|---|
| −30 | −51 | −60 | −69 | −80 |
| −50 | −31 | **−40** | −49 | −60 |
| −70 | −11 | −20 | −29 | −40 |

Rebuild's base result is +₹1 Cr in all twelve cells, so it stays ahead of Kill by between ₹12 and ₹81 Cr. The triangulation cannot overturn the ranking. What it sets is the size of the prize for stopping: at the base case Toing burns ₹324 Cr a year [Est], which is 27.7% of a quarter's food delivery adjusted EBITDA of ₹292 Cr [S01] [F: SW02], while the whole segment loss equals 44.9% of it.

### 6.5 Limits of the triangulation

| Limit | Why it matters | How we handle it |
|---|---|---|
| The split of the segment is assumed | Snacc, Crew and Minis share the ₹131 Cr and Swiggy gives no breakdown | Two-way grid, Tables 6.3a to 6.3d |
| Unit economics are modelled, not disclosed | Rider pay, commission and coupons are team assumptions [A02] [A05] [A09] | Tornado and flip points in sections 7 and 15 |
| 33 M weekly users [S05] [F: SW17] against 16.7 lakh orders a week | One order for every twenty weekly users; the user count probably includes app opens, not only buyers | We do not use it for orders; the order count comes from revenue |
| Adjusted revenue is a segment line | It can include items that are not Toing order revenue | Column of ₹5 to ₹30 Cr in Table 6.3b |
| One quarter of data | Toing reached about 50 cities inside the quarter, so volume rose through it | Read 2.4 lakh a day as a quarterly average, not an exit rate |
| Public reading of "largely acquisition" | Points to more than half the loss in installs | Tables 6.3c and 6.3d show the cells where that holds |

A fair reading is that the triangulation is good for the order of magnitude and the direction of the split, not for the second digit. The evidence base in section 10 does not touch this chain; it bears on the price, mix and fee inputs of the unit-economics model, and the triangulation is refreshed only if Swiggy publishes a Toing-specific figure.


## 7. Levers: seven levers take the order from −₹27 to +₹6, and four sit in Swiggy's hands

**Answer.** Seven levers move the blended contribution of a ₹99 Toing order from −₹27.33 to +₹5.73, a swing of ₹33.06 an order [M]. Four of them (slot batching, pooled Drops, the door fee and the coupon budget) are set by Swiggy and account for ₹27.16 of the swing, or 82%. Two depend on restaurants accepting a fixed menu and more ads (₹4.88), and one depends on customers opting in to a monthly pass (₹1.02). At 2.4 lakh orders a day [Est], each ₹1 an order is worth about ₹8.8 Cr a year, so the full swing is worth about ₹290 Cr a year at today's volume, before any growth.

### 7.1 The bridge

The bridge adds the levers one at a time in the order Swiggy would switch them on. Order matters for the size of each step, because several levers act on the same trip, but not for the total. Section 7.9 shows each lever on its own.

| Lever | Who sets it | Step, ₹ an order | Contribution after, ₹ | Illustrative ₹ Cr a year at 2.4 lakh a day |
|---|---|---|---|---|
| Today | | | −27.33 | −239 |
| 1. Slot batching of door orders | Swiggy | +7.20 | −20.13 | +63 |
| 2. Pooled Drops (pickup runs) | Swiggy with a Drop host | +9.70 | −10.43 | +85 |
| 3. Door fee outside Drops | Swiggy sets, customer pays | +8.26 | −2.18 | +72 |
| 4. Fixed menus and kitchen partners | Restaurants | +3.42 | +1.24 | +30 |
| 5. Ad load, 1% to 2.5% | Restaurants | +1.46 | +2.71 | +13 |
| 6. Everyday low price, fewer coupons | Swiggy with restaurants | +2.00 | +4.71 | +18 |
| 7. Toing Pass, ₹49 a month | Customer opts in | +1.02 | +5.73 | +9 |

The last column multiplies each step by 8.76 Cr orders a year (2.4 lakh × 365) and is an illustration of scale, not a forecast; the three-year paths in section 11 use their own volume assumptions [A37 to A41]. The end state has two kinds of order: a Drop order at +₹7.17 and a door order at +₹4.29, blended 50:50 [A17 to A26] into +₹5.73.

### 7.2 Lever 1: slot batching of door orders (+₹7.20)

| Attribute | Detail |
|---|---|
| Mechanism | Door orders wait in a slot of 8 to 12 extra minutes so two orders can share one trip. The second drop-off costs a rider less than a second trip. |
| Formula | Rider cost per door order = share batched × solo pay × (1 + k) ÷ 2 + (1 − share batched) × solo pay = 0.6 × ₹40 × 1.40 ÷ 2 + 0.4 × ₹40 = ₹32.80 [A05] [A17 to A26] |
| ₹ effect | ₹40.00 − ₹32.80 = +₹7.20 a door order, +₹7.20 on the blend when applied first |
| Who controls it | Swiggy, through dispatch settings and the slot menu |
| What must be accepted | The customer accepts a longer, scheduled wait; the rider accepts a two-drop trip paid at ₹28 an order |
| Evidence | Dunzo pushed customers to a 60-minute batched option and saved ₹8 to ₹10 an order [S13] [F: CR13], against ₹7.20 here |

### 7.3 Lever 2: pooled Drops (+₹9.70)

| Attribute | Detail |
|---|---|
| Mechanism | Orders from one kitchen cluster are pooled into a single pickup run to a Drop point (a hostel gate, a PG lobby or an office desk) where a host hands the meals over. One rider trip serves many meals. |
| Formula | Rider cost per meal = solo pay × (1 + 0.15 × (n − 1)) ÷ n; at n = 10 that is ₹40 × 2.35 ÷ 10 = ₹9.40, plus ₹4 host fee = ₹13.40 [A05] [A17 to A26] |
| ₹ effect | ₹32.80 (batched door) − ₹13.40 = ₹19.40 saved a Drop order; at a 50% Drop share, +₹9.70 on the blend |
| Who controls it | Swiggy designs the network and runs the dispatch; the host decides to take part |
| What must be accepted | The customer walks up to 5 minutes and collects; the host takes on a hand-off task for ₹4 a meal |
| Evidence | Eternal is piloting Zomato Now vending pods in Gurugram offices, which is a pickup point with no doorstep trip [S06] [F: CR04]; Swiggy's own Instamart found densification worth ₹5 an order [S01] [F: SW19] |

A Drop is the only lever whose saving grows with volume: each extra meal in the run lowers the cost of every other meal. Section 8 sets out the curve.

### 7.4 Lever 3: door fee outside Drops (+₹8.26)

| Attribute | Detail |
|---|---|
| Mechanism | A customer who wants the trip to the door pays for it. Drop customers, who take the meal from a host, pay nothing extra. This is the lever that moves the trip cost off the basket and onto the person who asks for the trip. |
| Formula | Net revenue = ₹20 ÷ 1.18 = ₹16.95 (₹3.05 of the fee is 18% GST [S10] [F: CR09]); less payments (0.9%) and the added CoSS levy = +₹16.51 a door order; × 50% door share = +₹8.26 [A17 to A26] |
| ₹ effect | A ₹99 door order now costs the customer ₹135.95 (item ₹99, GST ₹4.95, platform fee ₹12, door fee ₹20) against ₹115.95 today. A Drop order stays at ₹115.95. |
| Who controls it | Swiggy sets and times the fee; the customer decides whether to pay it or switch to a Drop |
| What must be accepted | A 17% higher bill for door delivery; Toing's price advantage narrows for anyone who refuses to collect |
| Evidence | Rapido Ownly charges a flat ₹30 customer trip fee at 0% commission and runs 50,000 to 60,000 orders a day in Bengaluru [S08] [F: CR07]; the core app charges ₹15 platform fee and ₹14.5 delivery fee on a ₹700 order [A13]; a same-basket comparison shows ₹346 on Toing against ₹486 on Swiggy [S03] [F: SW16], so the gap that pays for a ₹20 fee exists |

The door fee is the lever a customer can see, which is why it appears on the flip list. The fee at which Rebuild equals Kill is ₹16.6 against ₹20 assumed [M].

### 7.5 Lever 4: fixed menus and kitchen partners (+₹3.42)

| Attribute | Detail |
|---|---|
| Mechanism | Toing restaurants offer a compact fixed menu with less choice. In exchange for predictable volume they pay 3 points more commission, and fewer wrong or cancelled items cut refunds by 0.5 points of the basket. |
| Formula | 0.03 × ₹99 = ₹2.97 of commission + 0.005 × ₹99 = ₹0.50 of refunds, less ₹0.05 of added CoSS = +₹3.42 [A02] [A17 to A26] |
| ₹ effect | Commission rises from 12% to 15% of the item total; refunds fall from 1.5% to 1.0% |
| Who controls it | Restaurants, by accepting the menu and the rate |
| What must be accepted | Restaurants give up choice and 3 points of margin; customers see a shorter menu |
| Evidence | Swiggy's core base commission is 17% to 25% [S12] [F: CR12], so 15% is still below it, and its CEO says Toing commissions "do need to be different" [S04] [F: SW13]; "a significant minority of restaurants on Toing have already reached more than half of the volumes generated on the Swiggy platform" [S01] [F: SW07], which is the volume Swiggy is offering in exchange |

### 7.6 Lever 5: ad load from 1% to 2.5% (+₹1.46)

| Attribute | Detail |
|---|---|
| Mechanism | Toing is a new app with a thin ad load. As traffic builds, restaurants pay for placement, moving ads from 1% to 2.5% of the item total. |
| Formula | 0.015 × ₹99 = ₹1.49, less ₹0.02 of added CoSS = +₹1.46 [A04] [A17 to A26] |
| ₹ effect | ₹0.99 an order today rises to ₹2.48 |
| Who controls it | Restaurants decide whether to buy placement; Swiggy sets the inventory |
| What must be accepted | Restaurants pay for visibility on a low-margin basket; customers see sponsored slots |
| Evidence | The core order carries ads at 3% of the item total [A13 to A14], so 2.5% sits below the core level |

### 7.7 Lever 6: everyday low price, fewer coupons (+₹2.00)

| Attribute | Detail |
|---|---|
| Mechanism | Toing already sells at a low everyday price, so the platform-funded coupon per order is cut from ₹4 to ₹2. Price does the work that coupons did. |
| Formula | ₹4.00 − ₹2.00 = +₹2.00 [A09] [A17 to A26] |
| ₹ effect | +₹2.00 an order, with no second-order effects in the model |
| Who controls it | Swiggy, with restaurants agreeing to hold their prices |
| What must be accepted | Customers lose ₹2 of coupon on each order; restaurants keep their menu prices flat |
| Evidence | Core orders carry ₹22 of coupon on ₹700 [A13 to A14]; Swiggy's 99 Store on the core app already runs a flat-price proposition [S01] [F: SW11] |

### 7.8 Lever 7: Toing Pass at ₹49 a month (+₹1.02)

| Attribute | Detail |
|---|---|
| Mechanism | Regular users pay a monthly fee that is booked as revenue and spread over their orders. |
| Formula | 20% take-up × ₹49 ÷ 1.18 ÷ 8 orders a month = ₹1.04, less ₹0.02 of CoSS = +₹1.02 [A17 to A26] |
| ₹ effect | +₹1.02 an order on the blend |
| Who controls it | The customer, by opting in |
| What must be accepted | A ₹49 commitment; whether the holder also gets a fee waiver is a design choice the model does not credit |
| Evidence | None from Toing itself; this is the least evidenced lever and the smallest, so it is a pilot item and not part of the case for Rebuild |

### 7.9 Levers on their own and together

Each lever applied alone to today's ₹99 order gives a different number from its step in the bridge, because the first three act on overlapping trips. A Drop replaces a door order that batching and the door fee would have fixed, so those two levers are worth less once Drops exist.

| Lever | On its own, ₹ an order | In the bridge, ₹ an order |
|---|---|---|
| Slot batching | +7.20 | +7.20 |
| Pooled Drops | +13.30 | +9.70 |
| Door fee outside Drops | +16.51 | +8.26 |
| Fixed menus and kitchen partners | +3.42 | +3.42 |
| Ad load | +1.46 | +1.46 |
| Fewer coupons | +2.00 | +2.00 |
| Toing Pass | +1.02 | +1.02 |
| Sum | +44.91 | +33.06 |

The gap of ₹11.85 between the two sums is the overlap [M]. The door fee alone (+₹16.51 on every order) would come closest to fixing the order but would price Toing out of its segment; the design uses it only on the door orders that a Drop could not take.

### 7.10 Control matrix

| Lever | Swiggy sets | Restaurants set | Customer decides | ₹ an order | Share of the ₹33.06 swing |
|---|---|---|---|---|---|
| Slot batching | Yes, dispatch | | Accepts the wait | 7.20 | 22% |
| Pooled Drops | Yes, network and host fee | | Walks to collect | 9.70 | 29% |
| Door fee | Yes, level and timing | | Pays or switches to a Drop | 8.26 | 25% |
| Coupon budget | Yes | Hold menu prices | Loses ₹2 of coupon | 2.00 | 6% |
| Fixed menus | | Yes, accept rate and menu | Sees fewer choices | 3.42 | 10% |
| Ad load | | Yes, buy placement | Sees sponsored slots | 1.46 | 4% |
| Toing Pass | Designs it | | Yes, opts in | 1.02 | 3% |
| Total (shares rounded) | 27.16 (82%) | 4.88 (15%) | 1.02 (3%) | 33.06 | 100% |

Two reading rules follow. Swiggy can switch on 82% of the swing by decision, but every one of those four levers costs the customer time, walking or money, so acceptance is tested in the pilots and not assumed. And the restaurant-side levers are small enough (₹4.88) that Toing does not depend on them: if both restaurant levers fail, the blend falls from +₹5.73 to +₹0.85, still positive, and a failure of the menu lever alone leaves +₹2.31.

### 7.11 Tornado: which assumptions move the blend most

The tornado varies one input at a time around the base blended contribution of +₹5.73 [M]. Rider pay and the door fee dominate, each swinging the result by more than ₹8 an order.

| Driver | Low case | High case | Blend at low, ₹ | Blend at high, ₹ | Swing, ₹ | Zero point, one at a time [M] |
|---|---|---|---|---|---|---|
| Rider pay per solo trip | ₹48 | ₹32 | 1.5 | 9.9 | 8.44 | ₹50.9 |
| Door fee outside Drops | ₹10 | ₹30 | 1.6 | 9.9 | 8.26 | ₹6.1 |
| Base commission | 9% | 15% | 2.8 | 8.7 | 5.85 | 6.1% |
| Door orders batched | 30% | 80% | 3.9 | 6.9 | 3.00 | not reached |
| Drop host fee | ₹7 | ₹2 | 4.2 | 6.7 | 2.50 | ₹15.5 |
| Orders per Drop run | 5 | 14 | 4.0 | 6.2 | 2.19 | 2.3 |
| Share of orders at Drops | 30% | 70% | 5.2 | 6.3 | 1.15 | not reached |

No single driver at its low case pushes the blend below zero, and the smallest cushion is rider pay: at ₹48 a solo trip the blend is +₹1.5, and at ₹50.9 it reaches zero. The two large swings differ in one respect that matters for the Board. Swiggy sets the door fee; nobody at Swiggy sets the price of a rider's time. Rider pay is a market price, and it is the first flip point: the recommendation equals Kill over three years at ₹42.4 a solo trip against ₹40 assumed [M]. The section 15 scorecard puts a rider-pay reading in the first three months for that reason. Base commission in the table is the rate before the 3-point step, so a 9% base means 12% after it. The trip levers alone (batching, Drops and the door fee) bring the order to −₹2.18; the four commercial levers, worth ₹7.90 together, are what carry it past zero, which is why a failed menu or ad negotiation matters more than its ₹4.88 suggests.


## 8. Density: a Drop run must carry at least four meals, and ten earn +₹7 a meal

**Answer.** A Drop's economics are a density curve. Rider cost per meal falls from ₹40.0 for a run of one to ₹9.4 for a run of ten, and contribution per Drop meal climbs from −₹23.4 to +₹7.2 [M]. The run breaks even at 3.3 meals, so the operating floor is four; a rider on a 45-minute run of ten earns about ₹125 an hour against about ₹80 solo [A43] [A44]. That only works if a host receives the meals at the pickup point, which is why a Drop without a host does not exist in this design.

### 8.1 The density curve

Rider pay for a run is the solo trip fee plus 15% of it for every extra meal: ₹40 × (1 + 0.15 × (n − 1)) [A05] [A17 to A26]. Divided by the meals carried, it gives the per-meal cost in the table. Contribution uses the redesigned Drop order (commission 15%, ads 2.5%, coupon ₹2, no door fee, ₹4 host fee), which is why a run of one shows −₹23.4 and not today's −₹27.3.

| Meals per run | Rider cost per meal, ₹ | With ₹4 host fee, ₹ | Contribution per Drop meal, ₹ | Reading |
|---|---|---|---|---|
| 1 | 40.0 | 44.0 | −23.4 | A solo trip with a host attached |
| 2 | 23.0 | 27.0 | −6.4 | Loses money |
| 3 | 17.3 | 21.3 | −0.8 | Just below breakeven |
| 4 | 14.5 | 18.5 | +2.1 | Operating floor |
| 5 | 12.8 | 16.8 | +3.8 | |
| 6 | 11.7 | 15.7 | +4.9 | |
| 7 | 10.9 | 14.9 | +5.7 | Equals the blended target of +5.73 |
| 8 | 10.2 | 14.2 | +6.3 | |
| 9 | 9.8 | 13.8 | +6.8 | |
| 10 | 9.4 | 13.4 | +7.2 | Design point |
| 11 | 9.1 | 13.1 | +7.5 | |
| 12 | 8.8 | 12.8 | +7.7 | |
| 13 | 8.6 | 12.6 | +8.0 | |
| 14 | 8.4 | 12.4 | +8.1 | |
| 15 | 8.3 | 12.3 | +8.3 | Diminishing returns |

The curve has a steep part and a flat part. Going from one meal to four adds ₹25.5 of contribution a meal; going from four to ten adds ₹5.1, and from ten to fifteen only ₹1.1. The design point of ten therefore sits at the start of the flat section: pushing runs above ten buys little, while runs below four destroy the case. Breakeven is 3.3 meals a run [M].

### 8.2 How sensitive the breakeven is

The breakeven run size rises quickly once the host fee or the per-extra-meal pay premium move against Swiggy. Each row below changes one input and holds the rest at base [M].

| Change | Breakeven meals per run |
|---|---|
| Host fee ₹0 | 2.4 |
| Host fee ₹2 | 2.8 |
| Host fee ₹4 (base) | 3.3 |
| Host fee ₹7 | 4.5 |
| Host fee ₹10 | 7.5 |
| Extra-meal pay premium 10% | 2.9 |
| Extra-meal pay premium 15% (base) | 3.3 |
| Extra-meal pay premium 25% | 4.6 |
| Extra-meal pay premium 35% | 10.2 |
| Solo rider pay ₹32 | 2.4 |
| Solo rider pay ₹48 | 4.4 |

Two inputs deserve attention. A host fee of ₹10 would push breakeven to 7.5 meals, so the host fee is capped at ₹4 in the pilots and tested at ₹2 to ₹7. And if riders demand a 35% premium for each extra meal, breakeven moves to 10.2 meals, beyond the design run. The premium is an assumption [A17 to A26] that the first 40 pilot sites will measure directly.

### 8.3 What riders earn

The rider side of the Drop is the part most likely to be doubted, so the model tracks it. A solo rider completes two door deliveries an hour [A44]. A Drop run is a kitchen-cluster pickup and one hand-off, and takes 45 minutes [A43], so a rider makes 1.33 runs an hour. Pay per hour is therefore 1.33 × ₹40 × (1 + 0.15 × (n − 1)), which rises with the run size.

| Meals per run | Runs an hour | Meals an hour | Rider pay a run, ₹ | Rider pay an hour, ₹ | Versus solo (₹80) |
|---|---|---|---|---|---|
| Solo door trips | n/a | 2.0 | 40 | 80 | base |
| 1 | 1.33 | 1.3 | 40 | 53 | −33% |
| 2 | 1.33 | 2.7 | 46 | 61 | −23% |
| 4 | 1.33 | 5.3 | 58 | 77 | −3% |
| 5 | 1.33 | 6.7 | 64 | 85 | +7% |
| 8 | 1.33 | 10.7 | 82 | 109 | +37% |
| 10 | 1.33 | 13.3 | 94 | 125 | +57% |
| 15 | 1.33 | 20.0 | 124 | 165 | +107% |

At the design point a rider makes ₹94 a run, ₹125 an hour and delivers 13.3 meals an hour, against ₹80 and 2.0 meals solo. Both sides gain because the trip is shared: Swiggy pays ₹9.40 a meal rather than ₹40, and the rider earns 57% more an hour. The parity point is 4.3 meals a run, since ₹53.33 × (1 + 0.15 × (n − 1)) equals ₹80 at n = 4.33. A run of four leaves the rider 3% below solo earnings, so any run under five needs a rider incentive, or the network loses the people who carry it. We flag this as a limit: hourly pay uses assumed run time and solo pace, and neither is public.

### 8.4 Why a Drop needs a host

A Drop point without a host is a pile of meals on a pavement. The host does three jobs that cannot be automated at this order value.

| Job | What happens without a host | Cost of the host |
|---|---|---|
| Receives and holds the run | The rider waits for each customer or leaves meals unattended, and dwell time returns to the trip | ₹4 a meal, or ₹40 on a run of ten [A17 to A26] |
| Hands over to the right customer | Misdelivery and theft claims fall on Swiggy support (₹3 an order already [A08]) | Same fee |
| Makes the pickup a place | Customers need a fixed, near spot (5 minutes' walk) for the habit to form | Same fee |

The host fee is small against what it removes: ₹4 buys the drop from ₹40 to ₹9.40 of rider cost. It is also the lever with the clearest external precedent, since Eternal is piloting vending pods in Gurugram offices that work as a hosted pickup point with no doorstep trip [S06] [F: CR04]. Candidate hosts are hostel gate shops, PG lobbies and office desks, the same sites named in section 12.

### 8.5 Why the minimum run is four

Three separate tests land on the same number.

| Test | Threshold | Result at four meals |
|---|---|---|
| Contribution floor: contribution ≥ 0 | 3.3 meals | +₹2.1 a meal, a ₹2.1 cushion |
| Rider parity: hourly pay ≥ solo | 4.3 meals | ₹77 an hour, 3% short, closed by a small incentive |
| Whole meals: a run cannot carry 3.3 | Round up to 4 | Four is the smallest run that clears the first test |

So the dispatch rule is: no Drop run leaves the kitchen cluster with fewer than four meals; the fifth and later meals are what earn the margin. At n = 4 the three-year result is −₹75 Cr against Kill's −₹40 Cr, so four is a floor and not a target; the plan needs an average near ten, and the flip point where Rebuild equals Kill is 5.5 meals a run [M]. Scale is easy to picture: in the first rebuild year the path carries 1.8 lakh orders a day [A37 to A41]; with half of them on Drops [A17 to A26] and ten meals a run, that is about 9,000 runs a day, or 6,750 rider-hours a day at 45 minutes a run. Each of those runs needs a host.


## 9. The funnel test: paid marketing is nine times cheaper per migrated user

**Answer.** Running Toing as a funnel means accepting that each order loses money and asking whether the users it brings become ₹700-type customers fast enough to repay the loss. They do not. A Toing user costs Swiggy about ₹451 in 12 months [M]; with 2 in 3 new users incremental [S01] [F: SW07], the case's own lens (compared with what Swiggy would pay in paid marketing, ₹500 [A27 to A36]) needs 135% of them to migrate in a year, which is impossible. The lifetime-value lens needs 25% against a likely 15%, and a migrated user costs about ₹4,485, or 9.0 times the paid CAC.

### 9.1 Building the cost of one Toing user

The build has two parts: a one-off acquisition cost and a monthly loss that decays as users leave. Every figure is from the model [M] with its assumption tag.

| Step | Calculation | Result | Tag |
|---|---|---|---|
| 1. Acquisition | Toing install and onboarding cost per user | ₹60 | [A27 to A36] |
| 2. Orders a month | Toing user frequency | 2.5 | [A27 to A36] |
| 3. Loss a month | 2.5 orders × −₹27.33 per order | −₹68.34 | [M] |
| 4. Months active in a year | Sum of 0.85^t for t = 0 to 11, at 85% monthly retention | 5.72 months | [A27 to A36] |
| 5. Order losses in 12 months | ₹68.34 × 5.72 | ₹390.8 | [M] |
| 6. Cost per user, 12 months | ₹60 + ₹390.8 | ₹451 | [M] |

Order losses are 87% of that cost; acquisition is 13%. The funnel is therefore a bet on the trip, not on the install, which is the same finding as the triangulation in section 6 seen from the user's side. Cost per user builds over time as follows [M].

| Horizon, months | 1 | 3 | 6 | 12 | 24 | 36 |
|---|---|---|---|---|---|---|
| Cost per user, ₹ | 128 | 236 | 344 | 451 | 506 | 514 |

The curve flattens because retention of 85% a month shrinks the user base. Most of the loss is booked in the first year, and the cost at 36 months (₹514) is only 14% above the cost at 12.

### 9.2 Two lenses, and what each needs

The case asks what share of users must migrate, over what period, and how that compares with the cost of acquiring a customer through marketing (Board expectation B3). We answer under two lenses.

- **CAC lens (the case's own).** A migrated incremental user is worth what Swiggy would otherwise pay to acquire one, ₹500 [A27 to A36] [F: SW18]. Migration needed = cost per user ÷ (incremental share × paid CAC) = ₹451 ÷ (0.67 × ₹500) = 135%.
- **LTV lens (more generous).** A migrated user is worth the lifetime contribution of a core customer: 3 orders a month × ₹53.20 contribution per core order [S02] [F: SW03] × 16.84 months of expected life (95% monthly retention over 36 months) = ₹2,688. Migration needed = ₹451 ÷ (0.67 × ₹2,688) = 25%.

| Horizon, months | Cost per user, ₹ | Migration needed, CAC lens, % | Migration needed, LTV lens, % |
|---|---|---|---|
| 12 | 451 | 135 | 25 |
| 24 | 506 | 151 | 28 |
| 36 | 514 | 154 | 29 |

More than 100% cannot happen, so under the case's own lens no length of horizon rescues the funnel: waiting longer raises the requirement from 135% to 154%. The likely migration is 15% in 12 months [A27 to A36], which is our assumption and is tested in Section 9.6. Under the LTV lens the requirement is 25%, two-thirds above the likely 15%.

### 9.3 Migration needed, by paid CAC and incremental share

The result depends on two inputs Swiggy does not publish: what a paid acquisition costs it, and how many Toing users it would not otherwise have had. Swiggy's CAC is reported in analyst summaries at ₹400 to ₹500 [F: SW18]; that is a snippet-level source, so the grid runs to ₹900. The incremental share is 33% to 100% around the 67% Swiggy reports [F: SW07].

| Paid CAC, ₹ | 33% incremental | 50% | 67% (base) | 100% |
|---|---|---|---|---|
| 400 | 341 | 225 | 168 | 113 |
| 500 | 273 | 180 | **135** | 90 |
| 700 | 195 | 129 | 96 | 64 |
| 900 | 152 | 100 | 75 | 50 |

Migration needed, % of Toing users, 12-month horizon, CAC lens [M]. Across the reported CAC range of ₹400 to ₹500, every cell is above 100% except one (₹500 with all users incremental, 90%), and no cell is below 50%, which would already be an extraordinary conversion rate. Extending the CAC range in steps shows where the requirement becomes conceivable.

| Paid CAC, ₹ | 33% incremental | 67% incremental | 100% incremental |
|---|---|---|---|
| 300 | 455 | 224 | 150 |
| 500 | 273 | 135 | 90 |
| 700 | 195 | 96 | 64 |
| 900 | 152 | 75 | 50 |
| 1,100 | 124 | 61 | 41 |
| 1,200 | 114 | 56 | 38 |

Even at a CAC of ₹1,200, more than double the reported range, a 67% incremental base needs 56% of users to migrate in a year.

### 9.4 The value of a migrated user

A user who moves from Toing to ordering ₹700 baskets on the core app is worth the core order's contribution. At 7.6% of GOV [S02] [F: SW03], a ₹700 order contributes ₹53.20, and a user placing 3 a month with 95% monthly retention [A27 to A36] is worth the amounts below.

| Horizon, months | Expected life, months | Lifetime contribution per migrated user, ₹ |
|---|---|---|
| 12 | 9.2 | 1,467 |
| 24 | 14.2 | 2,260 |
| 36 | 16.8 | 2,688 |

Now turn it around. At 15% migration among the 67% of users who are incremental, each 100 Toing users cost ₹45,078 in 12 months and produce 10 migrants. That is ₹4,485 a migrated user [M]. To justify it, a migrant would need a lifetime value of ₹4,485, which is 1.67 times the modelled ₹2,688. On the same 100 users Swiggy could buy 10 migrated users through paid marketing for about ₹5,025 (10 × ₹500), so the funnel costs 9.0 times more per migrant. Cost per incremental migrated user is ₹4,485 against a paid CAC of ₹500.

### 9.5 Generous assumptions, one at a time and all together

A fair test gives the funnel every reasonable benefit of the doubt. We move five inputs in the funnel's favour, first singly and then all at once. The last row combines full incrementality, a ₹900 paid CAC, 70% monthly retention (which shrinks the loss base), 2 orders a month, and a ₹30 acquisition cost [M].

| Case | Cost per user, ₹ | CAC lens, % needed | LTV lens, % needed | Cost per migrant ÷ paid CAC |
|---|---|---|---|---|
| Base | 451 | 135 | 25 | 9.0 |
| Retention 70% a month | 285 | 85 | 16 | 5.7 |
| 2 orders a month | 373 | 111 | 21 | 7.4 |
| 100% of users incremental | 451 | 90 | 17 | 6.0 |
| 100% incremental and ₹900 CAC | 451 | 50 | 17 | 3.3 |
| All five generous inputs | 210 | 23 | 8 | 1.6 |

Even the last row, which is not a plausible state of the world, needs 23% of users to migrate under the case's own lens against the 15% we expect, and still costs 1.6 times the paid alternative per migrant. The LTV lens does pass in that row (8% needed). We say so plainly: the funnel clears the bar only under the LTV lens and only when several favourable inputs hold together. Under the lens the Board set, it fails in every row.

### 9.6 Why the funnel loses on money as well

The funnel path keeps volume flat at 2.4 lakh orders a day and leaves the per-order loss untouched at −₹27.33, with ₹100 Cr a year of paid installs and ₹15 Cr of overhead [A37 to A41]. Its three-year result is −₹1,140 Cr with the CAC credit and −₹950 Cr with the LTV credit, against Rebuild's +₹1 Cr [M]. We tested whether more generous inputs change the ordering.

| Input changed | Value | Funnel (LTV credit), ₹ Cr | Rebuild, ₹ Cr | Scale, ₹ Cr |
|---|---|---|---|---|
| Base | | −950 | +1 | −1,744 |
| 12-month migration | 35% | −639 | +70 | −1,624 |
| Incremental share | 100% | −835 | +26 | −1,700 |
| Rider pay per solo trip | ₹32 | −740 | +139 | −1,744 |
| Customer-paid fees | ₹25 | −668 | +338 | −1,744 |
| Paid CAC | ₹1,200 | −950 | +73 | −1,618 |

The best funnel result in the table is −₹639 Cr, and Rebuild beats Funnel and Scale in every row, and in every one of the 45 sensitivity cells the model tests [M]. The reason is structural. A funnel pays the trip cost on every order and hopes a small share of users repay it later; Rebuild removes most of the trip cost from the order and lets the same users arrive at a small profit. Paid marketing is the cheaper way to buy a ₹700 customer, and Toing's install spend is the part of the loss Swiggy can cut back quickly [F: SW08], and Toing's job is to serve the under-₹150 customer at a cost that stands on its own.

## 10. Evidence base: public data in place of fieldwork, and how Swiggy validates in 90 days

**Answer.** This document rests on fifteen public sources, read in full where the source allows it, plus the case and the model. No fielded instrument and no store visit was run: the team judged that the trip-cost arithmetic in sections 5 to 9 does not need stated preferences to hold, and that the four inputs public data cannot reach are better handled as assumptions, tested across their full plausible range, than as a small convenience sample dressed up as evidence. Every number that rests on judgment rather than a citation is labelled [Est] or carries an assumption ID, and section 10.4 sets out the four-city test Swiggy would run in the first 90 days to replace those assumptions with its own data.

### 10.1 What we used

Fifteen sources carry the numbers in this document. Nine were read in full; the rest are quoted from a snippet or a prior citation, and are marked accordingly wherever they appear.

| ID | Source | What it supports | Confidence |
|---|---|---|---|
| S01 | Swiggy Q1 FY27 shareholder letter | GOV, adjusted EBITDA, Platform Innovations loss of ₹131 Cr, the Toing description, and the CEO's own quotes on commissions and discipline | Read in full |
| S02 | Inc42, "Swiggy's money map" | Food contribution margin 7.6% of GOV, revenue ₹2,208 Cr | Read, cross-checked against S01 |
| S03 | MediaNama, Toing app bill review | The ₹12 platform fee, waived packaging, and the ₹346 versus ₹486 bill on identical items | Read in full |
| S04 | MediaNama, earnings-call takeaways | Majety and Kapoor's remarks on Toing commissions and category growth | Read in full |
| S05 | Storyboard18 citing CLSA and Sensor Tower | 33M weekly users, 14.5M downloads, the CLSA rating change | Read in full |
| S06 | MediaNama, Eternal tests Zomato Now pods | Goyal's quotes on rivals' price-driven traction, the pod pilot | Read in full |
| S07 | Entrackr and MediaNama, Snacc shutdown | The wording of Swiggy's own shutdown rationale | Read in full |
| S08 | MediaNama and Business Today, Rapido Ownly | Zero commission, ₹30 fee, 60,000 orders a day, planned Pune launch | Read in full |
| S09 | Deccan Herald, Karnataka gig-worker fee | The 1% fee capped at ₹0.50 an order | Read in full |
| S10 | Inc42 and Angel One, GST on delivery | 18% GST on delivery fees from 22 September 2025 | Read in full |
| S11 | Delivery-partner pay guides, 2026 | Base pay ₹20 to ₹35 an order, ₹15 to ₹90 a trip | Snippet only |
| S12 | Commission guides, 2026 | Swiggy base commission 17 to 25% | Snippet only |
| S13 | IIFL, Dunzo batching (2022) | The ₹8 to ₹10 saving from 60-minute batching | Read in a prior project |
| S14 | Eternal Q1 FY27 results | Food adjusted EBITDA 5.6% of NOV, used only as a rival benchmark | Snippet only |
| S15 | Morwitz, Steckel and Gupta (2007), International Journal of Forecasting | The finding that stated purchase intent overstates purchase behaviour | Textbook citation |

Two gaps sit outside this register and stay unfilled rather than guessed at: Toing's own order count, AOV, commission rate and rider payout are not published anywhere, and neither is a measured batching rate for any Indian food-delivery app. Both gaps are carried as numbered assumptions (A01 to A44) and stress tested in section 15, not asserted as fact.

### 10.2 What public data cannot show

Three behaviours drive the model and none of them can be read off a public filing: how many Toing orders would actually go through a Drop, how many ₹700-type orders would trade down to ₹99, and how many Toing users would migrate to core ordering within a year. Each is carried as an assumption with a base value, and each is tested across a wide range in the model's stress tables, so the recommendation does not rest on getting the exact figure right.

| Behaviour | Assumption | Base value | Range tested | Does Rebuild still beat Scale and Funnel across the range? |
|---|---|---|---|---|
| Drop take-up (share of orders that go through a pooled run) | DROP_SHARE [A17 to A26] | 50% | 20% to 80% | Yes, at every value; the three-year result for Rebuild runs from −₹25 Cr to +₹27 Cr while Scale stays at −₹1,744 Cr and Funnel at −₹950 Cr [M: T10] |
| Trade-down (₹700-type orders that switch to a ₹99 order) | CANNIB [A27 to A36] | 20% | 0% to 40% | Yes against Scale and Funnel; against Kill the two paths cross at 26% trade-down, the flip point in table T9 |
| Migration to core ordering within 12 months | MIGRATE_12M [A27 to A36] | 15% | 5% to 35% | Yes, at every value tested [M: T10] |

The honest reading of that table is that the direction of the call (Rebuild over Scale and Funnel) holds firm across the full range tested, but the size of the win does not, and there is exactly one soft spot: trade-down above 26% would make a shutdown as good as a rebuild on money alone. Section 15.1 carries that flip point alongside six others, and it is the one measurement worth running before the rest.

### 10.3 Public proxies used instead of fieldwork

Where a fact could not be observed directly, the model uses a proxy already in the public record, on the logic that a real number beats an invented one even when it is not a perfect match.

| Proxy | What it stands in for | Reading |
|---|---|---|
| MediaNama bill review, ₹346 on Toing versus ₹486 on Swiggy for the same items [S03] | The fee structure a Toing customer actually sees | Shows the ₹12 platform fee and waived packaging are real, not modelled; used only to confirm the fee stack, not to set the item price |
| Swiggy's own "2 in 3 new users on Toing being new to platform or having been dormant" [F: SW07] | Incrementality of the Toing customer base | Sets NEW_TO_CAT at 0.67, tested from 0.2 to 1.0 in table T10 |
| Sensor Tower downloads and weekly users via CLSA [S05] | Demand and reach, since Toing does not publish an order count | Used only as evidence of interest; no unit-economics figure is derived from it |
| Rapido Ownly, ₹30 customer-paid fee at 60,000 orders a day in Bengaluru [S08] | Whether customers will pay for the trip directly | Supports the door-fee lever's assumption that a ₹20 charge is payable, since a rival already charges more and clears volume |
| Dunzo's 60-minute batching, saving ₹8 to ₹10 an order [S13] | Whether batching lowers cost to serve in Indian food delivery | Anchors the lever size for slot batching, at the low end of Dunzo's own range |
| Instamart's densification, worth about ₹5 an order [F: SW19] | Whether density alone can close a per-order loss | Anchors the order of magnitude for the Drop-run saving, cross-checked against the model's own per-meal arithmetic |

### 10.4 How Swiggy validates within 90 days

None of this replaces a real test once Swiggy controls the app. The cheapest test is a four-city A/B, because it uses the same dispatch and payment logs already built for the core app, and it can start before any slide is drawn.

| Test | Design | Metric read | Source system | Day read | Threshold |
|---|---|---|---|---|---|
| Door fee | ₹10, ₹15 and ₹20 door fees run in parallel across four cities, one fee per city | Checkout conversion at each fee level | Checkout logs | Day 30 | Conversion at ₹15 within 5 points of the no-fee baseline |
| Drops on or off | Drops switched on in two of the four cities, off in the other two, matched by campus density | Meals per Drop run where Drops are on | Dispatch logs | Day 60 | At least 4 meals a run (the parity point where a rider earns as much as solo) |
| Core-app holdout | A holdout cohort of core-app users sees no Toing promotion; the rest can see it | Trade-down into ₹99 orders, holdout versus exposed | Order history, core app | Day 180 | At most 26% (the flip point against Kill) |
| Scale-up run rate | Dispatch logs across all switched-on cities | Meals per Drop run at scale | Dispatch logs | Day 90 | At least 6 (the month-6 gate in section 16) |

The same four rows are the month-3, month-6 and month-12 gates in section 16's roadmap: this section states what produces the number, and section 16 states what Swiggy does with it. A design this cheap exists because Swiggy already owns the logs; the team's own constraint was time and the case's rule that no one inside Swiggy or Eternal could be approached for non-public data [C: rule R1], which a Google Form or a checkout screenshot would not have escaped either.

### 10.5 Honest limits

| Limit | What it means | How we handle it |
|---|---|---|
| No fieldwork was run | Every behavioural input (Drop take-up, trade-down, migration) is a team assumption, not a measurement | Each is tested across a wide range in table T10, and the recommendation's direction survives every value tested; only the trade-down flip point at 26% is close enough to watch first |
| Estimates are triangulated, not disclosed | Toing's ₹81 Cr quarterly loss, its order count and its AOV are derived from Swiggy's segment-level figures, not stated by Swiggy | Every such figure is marked [Est] with its method shown in section 6 |
| Public sources vary in depth | Nine of fifteen sources were read in full; the rest are snippets or a prior citation [S11, S12, S13, S14] | None of the snippet-grade sources carries a number the recommendation depends on alone; each is cross-checked where the case or another source overlaps it |
| Two limits that would apply to a fielded instrument do not apply here | With none run, there is no Delhi-versus-Pune sampling question to answer, and no stated-intent bias to correct for | Not applicable; both are noted only so a reader does not look for them |

## 11. Options compared: Scale, Funnel, Kill and Rebuild on the same five tests

**Answer.** Scored on five tests with weights of 0.35 for value, 0.20 for downside, 0.20 for customer, 0.15 for fence and 0.10 for speed, Rebuild scores 4.25, Kill 3.85, Funnel 2.70 and Scale 2.25 out of 5 [M]. Scale and Funnel lose on money by a wide margin: −₹1,744 Cr and −₹1,140 Cr (−₹950 Cr on the lifetime-value credit) over three years, against −₹40 Cr for Kill and +₹1 Cr for Rebuild [M: T6]. Rebuild beats Kill by only about ₹41 Cr on money, a gap smaller than the error in several inputs, and it wins the ranking on optionality and the customer, not on arithmetic.

### 11.1 The four options, defined so they can be compared

The case names three options and allows a fourth [C: O1 to O4]. Each is modelled as a distinct operating path over three years from October 2026, using the same order-economics engine so that the differences come from the choices and not from the modelling.

| Path | What Swiggy does | Orders a day (lakh), Y1 to Y3 | Contribution per order | Paid install spend a year | Overhead a year |
|---|---|---|---|---|---|
| Scale (O1) | Grow Toing as it runs, keep free-delivery pricing and paid acquisition | 3.5, 5.0, 6.5 [A37 to A41] | −₹24, −₹20, −₹17 [A37 to A41] | ₹150 Cr | ₹20 Cr |
| Funnel (O2) | Hold Toing near today's size and accept the loss as acquisition spend | 2.4, 2.4, 2.4 [A37 to A41] | −₹27.3 (today) [M] | ₹100 Cr | ₹15 Cr |
| Kill (O3) | Shut Toing; wind-down cost ₹25 Cr; win back part of the trade-down | 0 | n/a | 0 | 0 |
| Rebuild (O4) | Door fee, batching, Drops, menus, pass, fewer coupons; installs cut sharply | 1.8, 2.8, 4.0 [A37 to A41] | Ramps from −₹27.3 toward +₹5.7 [M] | ₹20 Cr | ₹15 Cr |

Three modelling choices apply to every path. Each path that keeps Toing users earns the same migration credit, at ₹500 of avoided paid acquisition per incremental user who moves to ₹700-type ordering (the case's own lens [C: B3]). Each path pays for the core orders its Toing orders replace, at a trade-down rate of 20% of Toing orders [A27 to A36] times ₹22.8 of core small-basket contribution (7.6% margin on a ₹300 basket) [A27 to A36]. Kill recaptures 60% of that trade-down once Toing is gone [A37 to A41]. The base rows of the table use today's order count of about 2.4 lakh a day as the starting point for Kill [Est].

### 11.2 The five tests and why they carry these weights

| Test | Question asked | Weight | Why this weight |
|---|---|---|---|
| Value | What is the three-year contribution after path costs? | 0.35 | The Board's first ask is unit economics and a path to breakeven [C: B1], and the judges give unit economics 30% [C: J1] |
| Downside | What is the worst case over the bear scenario, and can Swiggy stop it? | 0.20 | Shareholders bought on a path to profitability [C14]; consolidated adjusted EBITDA was already −₹651 Cr in Q1 FY27 [F: SW21] |
| Customer | Does the option serve the under-₹150 customer, who is real? | 0.20 | The case asks what Swiggy should do for that customer under Kill [C: O3]; Toing has 33M weekly users [F: SW17] |
| Fence | Does the option stop ₹700 orders trading down to ₹99? | 0.15 | Cannibalisation is the hidden cost of any cheap offer; the model prices it at ₹178 Cr under Scale [M: T7] |
| Speed | How fast does the option stop the loss or produce a signal? | 0.10 | The Board wants to know within 12 months whether the call was right [C: B5] |

Weights are a judgment, and we say so. A stress test: cutting value to 0.25, raising customer to 0.25 and fence to 0.20 (downside 0.20, speed 0.10) gives Rebuild 4.15 and Kill 3.75 [M: recomputed from the scores]. Rebuild scores at least 4 on every test except speed (3), so it stays first under most reasonable weightings.

### 11.3 Scores, with the reason for each

Scores run from 1 (worst) to 5 (best) and each carries the model evidence behind it.

| Test | Scale | Funnel | Kill | Rebuild | Evidence for the scores |
|---|---|---|---|---|---|
| Value (0.35) | 1 | 2 | 4 | 5 | Three-year totals −₹1,744 Cr, −₹1,140 Cr (CAC credit) or −₹950 Cr (LTV credit), −₹40 Cr, +₹1 Cr [M: T6]. Kill scores 4 and not 5 because it ends with a negative total and no asset |
| Downside (0.20) | 1 | 2 | 5 | 4 | Bear case −₹1,673 Cr, −₹1,065 Cr (or −₹913 Cr), −₹40 Cr, −₹121 Cr [M: T6]. Kill is fixed by design; Rebuild has a gate that caps the bear case |
| Customer (0.20) | 5 | 4 | 1 | 4 | Scale serves the most users. Funnel serves today's. Kill serves none through Toing. Rebuild keeps the under-₹150 customer at a price the trip can carry |
| Fence (0.15) | 2 | 2 | 5 | 4 | Kill has no cheap offer to trade down to. Scale and Funnel run at 20% trade-down; Rebuild halves it through a separate app and pickup-based pricing [A27 to A36] |
| Speed (0.10) | 4 | 5 | 5 | 3 | Funnel and Kill act at once. Scale reaches volume in 3 years. Rebuild needs 6 months for the density signal |

Weighted scores are computed as the sum of weight times score.

| Option | Value | Downside | Customer | Fence | Speed | Weighted score |
|---|---|---|---|---|---|---|
| Scale | 0.35 | 0.20 | 1.00 | 0.30 | 0.40 | 2.25 |
| Funnel | 0.70 | 0.40 | 0.80 | 0.30 | 0.50 | 2.70 |
| Kill | 1.40 | 1.00 | 0.20 | 0.75 | 0.50 | 3.85 |
| Rebuild | 1.75 | 0.80 | 0.80 | 0.60 | 0.30 | 4.25 |

The margin between Rebuild and Kill is 0.40 on a 5-point scale. Rebuild leads on value (1.75 against 1.40) and customer (0.80 against 0.20), and Kill leads on downside and fence, which is what one expects from an option that removes the exposure. A Board member who puts 0.40 on downside and 0.15 on value ties the two at 4.05, and any more weight on downside puts Kill first; we would not argue with that reader [M: recomputed from the scores above]. The recommendation is a claim that the customer and the option value deserve more weight than that.

### 11.4 Three scenarios: base, bear and bull

The scenarios change order volume and contribution per order. Bear applies volume × 0.8 and −₹4 an order; bull applies × 1.2 and +₹3 an order [A37 to A41]. All figures are three-year totals in ₹ Cr.

| Scenario | Scale | Funnel (CAC credit) | Funnel (LTV credit) | Kill | Rebuild | Rebuild, gate fails |
|---|---|---|---|---|---|---|
| Bear | −1,673 | −1,065 | −913 | −40 | −121 | −2 |
| Base | −1,744 | −1,140 | −950 | −40 | +1 | +7 |
| Bull | −1,794 | −1,204 | −976 | −40 | +135 | +16 |

Two features of this table matter. Scale and Funnel do worse in the bull case than the bear case, because a larger business at a loss per order loses more; there is no scenario in which growing a ₹99 order that costs ₹27 to carry helps. And Rebuild is the only path with a spread that includes profit: −₹121 Cr to +₹135 Cr, against a fixed −₹40 Cr for Kill.

Year-by-year in the base case, the timing shows why Rebuild is not a bet that pays quickly.

| Path, base | Year 1 | Year 2 | Year 3 | Three-year total | Year 3 exit rate |
|---|---|---|---|---|---|
| Scale | −514 | −588 | −642 | −1,744 | −642 |
| Funnel (CAC credit) | −380 | −380 | −380 | −1,140 | −380 |
| Kill | −88 | +24 | +24 | −40 | +24 |
| Rebuild | −56 | +17 | +39 | +1 | +39 |

Rebuild loses ₹56 Cr in year 1 against ₹88 Cr for Kill, is ahead of the break-even line by year 2, and exits year 3 at +₹39 Cr a year against Kill's +₹24 Cr. Kill's positive years come from recapturing core orders that Toing had displaced, not from any income of its own [A37 to A41]. Rebuild's year 2 (+₹17 Cr) is below Kill's (+₹24 Cr); the lead is built in year 1 and year 3.

### 11.5 Rebuild against Kill: the plain reading

Rebuild beats Kill by ₹41.2 Cr over three years in the base case, which is +₹0.8 Cr against −₹40.4 Cr [M]. In the bear case it loses to Kill by about ₹80 Cr (−₹120.8 Cr against −₹40.4 Cr), and in the bull case it wins by about ₹175 Cr. With the 6-month gate, its expected value is +₹3.2 Cr at a 60% probability of passing [A42], about ₹44 Cr ahead of Kill's −₹40.4 Cr. If the gate fails, the path becomes Rebuild-then-Kill and finishes at +₹7 Cr in the base case, since the first six months already run at lower volume and lower loss than Kill's own final quarter at today's rate.

| Measure | Rebuild | Kill | Rebuild minus Kill |
|---|---|---|---|
| Base three-year total, ₹ Cr | +1 | −40 | +41 |
| Bear three-year total, ₹ Cr | −121 | −40 | −81 |
| Bull three-year total, ₹ Cr | +135 | −40 | +175 |
| Expected value with 60% gate pass, base, ₹ Cr | +3 | −40 | +44 |
| Gate fails, base, ₹ Cr | +7 | −40 | +47 |
| Year 3 exit rate, base, ₹ Cr a year | +39 | +24 | +15 |

We say plainly what this table means. On the money alone, Rebuild is a small improvement on Kill with a wider spread. A Board that wants the smallest possible loss with no execution risk should choose Kill, and the model gives it a defensible number. The case for Rebuild over Kill rests on three things that the money does not capture. Toing brings in 2 in 3 of its new users as new or dormant to Swiggy [F: SW07], and 33M weekly users is an audience Swiggy would give up [F: SW17]. A fence that keeps ₹700 orders from trading down needs a live cheap offer to sit behind it, and Kill removes the offer and leaves Swiggy's 99 Store on the core app as the only place to catch the demand [F: SW11]. And Rebuild keeps the option to grow if the density signal is good, at a cost of ₹56 Cr in year 1 [M].

The flip points below are the inputs at which Rebuild equals Kill. The three closest to the base are the ones to watch.

| Input | Base value | Flip value | Distance from base | Verdict |
|---|---|---|---|---|
| Rider cost per solo trip | ₹40 [A05] | ₹42.4 | 6% | Close: a ₹2.4 rise erases the lead |
| Meals per Drop run | 10 [A17 to A26] | 5.5 | 45% | Comfortable |
| Trade-down rate | 20% [A27 to A36] | 26% | 30% | Moderate |
| Base commission (plus 3 points) | 12% [A02] | 10.8% | 10% | Close |
| Door fee | ₹20 [A17 to A26] | ₹16.6 | 17% | Moderate |
| Customer-paid fees | ₹12 [A03] | ₹10.5 | 12% | Close |
| Share of orders at Drops | 50% [A17 to A26] | 2% | 96% | Not a concern |

### 11.6 The decision tree

The choice can be written as four questions in order. Each maps to a test, an input and a date by which Swiggy will know.

| Node | Question | If yes | If no | Evidence and date |
|---|---|---|---|---|
| 1 | Can a ₹99 order cover its own trip at any realistic density? | Go to node 2 | Kill | Drop run of 4 meals earns +₹2.1 a meal, breakeven 3.3 [M: T3]; known in 3 months from pilot runs |
| 2 | Will students accept pickup, slots and a door fee? | Go to node 3 | Kill, or Funnel only if the ₹700 conversion beats 25% | The 90-day A/B in section 10.4 and pilot sign-ups; known in 3 months |
| 3 | Does the trip cost hold with real riders (₹42.4 or less per solo trip, 5.5 meals or more per run)? | Go to node 4 | Fall back to Kill at the month-6 gate | Rider payout audit and run logs; known in 6 months |
| 4 | Is trade-down below 26% and the blended contribution positive per order? | Grow Toing only where Drops and the door fee are live | Fall back to Kill | Cohort tracking of ₹250+ orders; known in 12 months |

Scale and Funnel never appear as an exit. Funnel needs 135% of Toing users to move to ₹700-type ordering in 12 months on the case's lens, which is impossible, and 25% on the lifetime-value lens against about 15% likely [M: T5; A27 to A36]. Scale fails node 1 by construction, since it grows the order that fails the test.

## 12. The recommendation: rebuild Toing around the trip, with a six-month gate

**Answer.** Keep Toing but stop paying for ₹99 trips: rebuild it around pooled Drops and slot batching, and grow it only where the trip pays for itself. The three-year gap between this path and scaling Toing as it runs is ₹1,745 Cr, and 69% of it is order losses [M]. Rebuild is a small improvement on Kill in money, so it carries a gate at month 6 that returns Swiggy to a clean shutdown if density does not appear.

### 12.1 The moneyshot: ₹1,745 Cr between Rebuild and Scale

The gap has five components. Each is a difference between two paths in the base case, in ₹ Cr over three years.

| Component | ₹ Cr | Share of gap | What it is |
|---|---|---|---|
| Order losses | 1,200 | 69% | Scale runs 3.5 to 6.5 lakh orders a day at −₹24 to −₹17 each; Rebuild runs 1.8 to 4.0 lakh a day on a path toward +₹5.7 [M] |
| Paid installs | 390 | 22% | Scale spends ₹150 Cr a year on acquisition; Rebuild spends ₹20 Cr [M] |
| Trade-down | 178 | 10% | Scale runs more orders at a 20% trade-down rate; Rebuild runs fewer at half that rate [M] |
| Overhead | 15 | 1% | ₹20 Cr a year against ₹15 Cr [M] |
| Migration credit | −39 | −2% | Scale earns more credit for users who move to ₹700-type ordering, so the gap narrows [M] |
| Total | 1,745 | 100% | Rebuild +₹1 Cr against Scale −₹1,744 Cr [M: T7] |

The sentence for the Board is this: ₹1,590 Cr of the gap is the cost of orders and installs Swiggy would choose to buy, and the remaining ₹155 Cr net is trade-down, overhead and the migration credit.

### 12.2 The phased design: five moves in three phases

The seven levers in Section 7 are sequenced by who controls them and how fast they can move. The first phase uses only levers Swiggy holds; the second builds the physical network; the third asks customers to commit.

| Phase | Move | What changes for the customer | Effect per ₹99 order (model sequence) | Who controls |
|---|---|---|---|---|
| Days 0 to 30 | Door fee of ₹20 outside Drops | Pays ₹20 more for a doorstep trip | +₹8.3 | Customer decides |
| Days 0 to 30 | Slot batching of door orders | Waits 8 to 12 minutes more | +₹7.2 | Swiggy |
| Days 0 to 30 | Fewer coupons, everyday low price | Smaller coupons, lower list prices | +₹2.0 | Swiggy and restaurants |
| Days 0 to 30 | Freeze on paid installs | None | Installs at ₹20 Cr a year against Scale's ₹150 Cr [A37 to A41] | Swiggy |
| Days 30 to 90 | Pooled Drops: 40 pilot sites (hostel gates, PG lobbies, office desks) in four cities | Walks up to 5 minutes to collect | +₹9.7 | Swiggy and Drop host |
| Days 30 to 90 | Fixed menus and kitchen partners | Less choice, cheaper meals | +₹3.4 | Restaurants |
| Days 30 to 90 | Ad load from 1% to 2.5% | None | +₹1.5 | Restaurants |
| Days 90 to 180 | Toing Pass at ₹49 a month | Free delivery on unlimited meals under ₹150 | +₹1.0 | Customer decides |

Together the levers take the order from −₹27.3 to +₹5.7 blended [M: T2]. In that sequence the phase-one moves supply ₹17.5 of the ₹33.1 improvement, or 53%, so the levers Swiggy can move without anyone's permission do a little over half the work. The Drop economics carry the rest. A run of 10 meals costs ₹9.4 of rider per meal plus a ₹4 host fee and earns +₹7.2 a meal; breakeven is 3.3 meals a run; rider earnings per hour rise from about ₹80 on solo trips to about ₹125 on Drop runs [M: T3, rider hourly; A43, A44]. That last number matters for supply: a rider who earns more per hour at a Drop has a reason to accept the run.

### 12.3 Why the moves come in this order

The order follows two rules. First, fix what Swiggy can change without anyone's permission before asking restaurants or customers to accept a worse experience [C: B2]. Second, start the physical network only after the door economics have stopped the loss, so that Drops are a growth lever and not a rescue.

| Constraint | Consequence for the design |
|---|---|
| Rider pay is roughly fixed per trip [C01] | Only density (meals per run) or a fee can change the trip cost per order |
| A Drop is a walk, not a wait | Drops go where 5-minute walks exist: hostels, PG lobbies, offices |
| Restaurants set menus and ads | These levers wait until day 30, when the pilot volume gives restaurants a reason to agree |
| Customers pick Drops, door fee and pass | The design offers a cheaper option and a costlier one, so nobody is forced |

### 12.4 The fence argument: keep a separate app, and say why

The question a judge will ask is why a separate app, when Swiggy's own 99 Store shows a flat-price offer inside the core app [F: SW11]. There are three answers, and one is a concession.

The first is trade-down. The model prices each ₹300 basket that shifts to ₹99 at a loss of ₹22.8 of core contribution (7.6% of GOV on ₹300) [A27 to A36]. Inside the core app, 19.2M monthly transacting users [F: SW04] see the same ₹99 option next to their usual ₹700 dinner. A separate app makes the cheap offer a deliberate choice. The model halves the trade-down rate for that reason (20% becomes 10%). On Rebuild's own volume of 8.6 lakh order-days a year summed over three years, the halving is worth about ₹72 Cr (₹143 Cr at 20% against ₹72 Cr at 10%) [Est: recomputed from model inputs]. The trade-down assumption is the one input worth testing first through the core-app holdout in section 10.4, which reads the switch directly rather than a stated preference.

The second is the pricing rules. Toing can run a different commission (the CEO said commissions "need to be different from the Swiggy platform" [F: SW13]), a door fee and a pass, and a pickup-based model, without changing the core app's terms for 265.8k restaurants [F: SW04].

The third is the framework. In Ansoff's terms, this is market penetration into a segment Swiggy under-serves: the same delivery service and the same restaurants, sold to students and young earners who order often but not at ₹700 [C02]. It needs no new capability, unlike Snacc, which needed micro-kitchens [F: SW10]. The separate app is how the cheap offer stays a distinct choice and does not become the default price inside the core app.

| Ansoff cell | How Toing fits | Judgment |
|---|---|---|
| Market penetration | Same delivery service and same restaurants, sold to a segment Swiggy under-serves, through a separate offer | Closest fit; needs no new capability |
| Market development | About 50 cities today [F: SW07]; the plan adds cities only where Drops pay | A later step, gated by density |
| Product development | Drops are a delivery format, not a new product line | Adds a format only |
| Diversification | Snacc needed micro-kitchens and was shut [F: SW10] | Not pursued |

The concession is that the fence has a cost. A separate app cannot cross-sell to the core app as cheaply as an in-app tile, and a user who never opens the core app never sees a ₹700 menu. If Swiggy's own holdout data show students strongly prefer an in-app option, the fence argument weakens, and the gate should test a version inside the core app instead of assuming the separate app is right.

### 12.5 The month-6 gate: numbers, dates and the fallback to Kill

The gate is what makes Rebuild a defensible choice over Kill. It sets thresholds from the flip points, so that a pass means the path still beats Kill and a failure means it does not.

| Signal | Base assumption | Gate threshold (Rebuild still beats Kill) | Month checked | If missed |
|---|---|---|---|---|
| Rider cost per solo trip | ₹40 | ₹42.4 or less | 3 | Hold the door fee, delay Drops |
| Meals per Drop run | 10 | 5.5 or more | 3 and 6 | Fall back to Kill at month 6 |
| Trade-down of ₹250+ orders | 20% | 26% or less | 6 | Fall back to Kill |
| Customer-paid fees per order | ₹12 | ₹10.5 or more | 3 | Repair fee design |
| Door fee accepted outside Drops | ₹20 | ₹16.6 or more, with volume held | 3 | Reduce ₹20 to ₹17, re-test |
| Drop-run contribution per meal | +₹7.2 at 10 meals | Above zero (breakeven 3.3 meals a run) | 3 and 6 | Fall back to Kill |

Two of these thresholds sit close to the base. Rider cost per solo trip has 6% of room (₹2.4), and customer-paid fees 12% (₹1.5), so those are the first two lines Swiggy audits, using its own payout data. The behavioural inputs (trade-down, pickup, fee tolerance) will read faster from the four-city A/B in section 10.4 than from any external study.

The fallback is a clean shutdown along the Kill path: wind-down cost ₹25 Cr, and recapture of 60% of the displaced core orders [A37 to A41]. In the model the gate-fail path finishes at +₹7 Cr in the base case (−₹2 Cr bear, +₹16 Cr bull), because the first six months already run at lower volume than today's [M: T6]. We do not rely on that number. The floor we rely on is that the gate stops the path before year 2 spending begins, so the exposure at the point of exit is bounded. In the base case the gate-fail path loses ₹41 Cr in year 1 against ₹88 Cr for Kill [M: T6].

| Outcome at month 6 | Probability | Three-year result, base, ₹ Cr | Weighted |
|---|---|---|---|
| Gate passed, continue | 60% [A42] | +1 | +0.5 |
| Gate failed, shut down | 40% | +7 | +2.7 |
| Expected value | | | +3.2 |

The base-case table needs a plain reading: continuing after the gate (+₹1 Cr) scores below stopping at the gate (+₹7 Cr) inside the three-year window, because the first six months already run at lower volume than today's. What continuing buys is the year-3 exit rate of +₹39 Cr a year against Kill's +₹24 Cr, the bull case of +₹135 Cr, and the customer. The 60% is an assumption for the option value only and is not used in any other number. If the pass probability is 30%, the expected value stays near +₹5 Cr, because the fallback pays about the same as the pass in the base case, and that is the sense in which the gate caps the downside [M: recomputed].

## 13. Competition: Eternal holds back today, Rapido Ownly is the sharper threat

**Answer.** Eternal's dominant response to a rebuilt Toing is to keep holding back and to copy the Drop idea through office pods and lower Gold thresholds, because a Toing clone would import the same ₹27 trip that Swiggy is trying to remove. Rapido Ownly is the sharper threat, because at 0% commission and a ₹30 trip fee it moves the trip cost onto the customer, which is our door-fee lever, and it is planning Pune, Toing's launch city. Swiggy's position against Eternal is better after Rebuild than before, mainly because the loss that CLSA and shareholders read as Toing's drag falls from about ₹81 Cr a quarter toward a break-even trip.

### 13.1 What Eternal has said and done

Eternal has not launched a Toing rival [C: Eternal has no Toing rival]. The public record on its position is consistent, and some of it is thin, which we label.

| Evidence | What it says | Confidence |
|---|---|---|
| Zomato Everyday (₹89 meals) and Zomato Quick shut in May 2025 [C11] | It could not see either turning profitable without hurting the customer experience | Case fact |
| Goyal on rivals' traction: "purely price-driven" [S06] | Eternal reads cheap-app growth as bought with lower commissions and delivery fees | Read in full |
| Goyal on Quick: "The current restaurant density and kitchen infrastructure is not set up for delivering orders in 10 minutes" [S06] | Eternal exits when density does not carry the cost | Read in full |
| Zomato Now pilot: vending pods in Gurugram offices with external food brands, no doorstep trip [F: CR04] | Eternal is testing a delivery format with no last-mile trip | Read in full |
| Eternal CFO: not convinced a Toing-like platform solves a clear problem; Bistro used instead [F: CR02] | No separate budget app is planned | Snippet only |
| Gold free-delivery threshold cut to ₹99 from ₹199, more sub-₹250 options [F: CR06] | The same customer is being pursued inside the main app | Snippet only; verify before quoting |
| Eternal Q1 FY27: food delivery NOV ₹10,769 Cr, adjusted EBITDA 5.6% of NOV [F: CR01] | It is profitable enough to wait | Snippet only |

The pattern is that Eternal builds cheap formats that carry no rider trip and shuts the ones that do. Pods and Gold thresholds fit that pattern. A Toing clone does not.

### 13.2 The payoff matrix: Swiggy's three paths against Eternal's three responses

We have no data on Eternal's internal economics, so the payoffs below are ordinal rankings from 1 (worst) to 4 (best) for each side, and they express our judgment and not a model output [Est: ordinal judgment]. The point of the matrix is which response dominates, not how much it is worth.

| Swiggy path, Eternal response | Hold back and copy the format (pods, Gold ₹99) | Launch a budget clone | Cut core prices to defend |
|---|---|---|---|
| Rebuild | Swiggy 3, Eternal 3 | Swiggy 4, Eternal 1 | Swiggy 3, Eternal 2 |
| Scale as it runs | Swiggy 1, Eternal 4 | Swiggy 1, Eternal 2 | Swiggy 1, Eternal 3 |
| Kill | Swiggy 2, Eternal 4 | Swiggy 2, Eternal 3 | Swiggy 2, Eternal 3 |

The reasoning for each cell follows one logic. Against Rebuild, a clone hurts Eternal most, since it would import trips costing ₹40 for a ₹99 basket and meet a Swiggy that has already found the fix, so Swiggy ranks 4 there and Eternal 1. Against Scale, Eternal's best move is to do nothing and watch Swiggy lose about ₹1,744 Cr over three years [M: T6]; that is the "hold back" ranking of 4. Against Kill, Eternal gains most from a Swiggy that has left the under-₹150 customer to it. On this matrix hold back and copy strictly dominates Eternal's other two responses: it scores 3 against 1 and 2 when Swiggy rebuilds, 4 against 2 and 3 when Swiggy scales, and 4 against 3 and 3 when Swiggy kills. Rebuild is also Swiggy's best reply to each of Eternal's three responses (3, 4 and 3 against 1 or 2 for the alternatives).

What this means for the recommendation: a rebuilt Toing does not provoke the response that would hurt, and Scale and Kill both leave Eternal better off than Rebuild does. If Eternal copies Drops through pods, it validates the density thesis and competes for the same office and hostel desks, which is a reason to move to those 40 pilot sites first.

### 13.3 Rapido Ownly is the sharper threat

Ownly launched citywide in Bengaluru on 3 March 2026, runs at zero commission and a flat ₹30 delivery fee to the customer, does 50,000 to 60,000 orders a day in Bengaluru, launched in Hyderabad with 10,000 restaurants, lists Pune among planned cities, and now sits inside the Rapido app [F: CR07]. It is sharper than Eternal for three reasons.

| Dimension | Toing (today) | Toing (rebuilt) | Rapido Ownly |
|---|---|---|---|
| Who pays for the trip | Swiggy, ₹40 a trip [A05] | Customer via ₹20 door fee outside Drops; Drop hosts and density inside | Customer, ₹30 flat fee |
| Restaurant commission | 12% base [A02] | 12% plus 3 points at the redesign [A17 to A26] | 0% |
| Customer-paid fees on ₹99 | ₹12 platform fee | ₹12 plus ₹20 door fee outside Drops | ₹30 |
| Pune | Launch city | Pilot city | Planned |

First, Ownly's model matches our lever. Its ₹30 fee on a ₹99 meal is what a customer-paid trip looks like, and it shows that customers will pay it, at least in Bengaluru. That helps our door-fee assumption of ₹20 and hurts our position, because we are making the same move a year later against a rival with no commission at all. Second, restaurants gain from Ownly's zero commission, and the commission input has little room: the flip point where Rebuild equals Kill is a base commission of 10.8% against 12% assumed [M: T9], so a concession of 1.2 points erases the ₹41 Cr lead. Third, Ownly is planning Pune, where Toing launched.

Ownly is also less certain than it looks. A 0% commission model invites the question Rohit Kapoor put about zero commission on Toing: "If it is zero commission, then who pays for platform costs? Somebody has to pay." [F: SW15]. Its 50,000 to 60,000 orders a day in Bengaluru [F: CR07] is a fraction of Toing's estimated 2.4 lakh a day [M: T4], though Toing's figure spans about 50 cities [F: SW07]. And Eternal's own view of such traction is "purely price-driven" [S06].

| Ownly move | What it does to Rebuild | Our reply |
|---|---|---|
| Enters Pune | Puts a ₹30 competitor on the same campuses | Drops and pickup are cheaper for the customer than ₹30 at the door; hold the door fee at ₹20 or lower |
| Recruits Toing's restaurants at 0% | Commission flip point at 10.8% comes into play | Offer volume through Drops and fixed menus instead of matching zero; drop the 3-point uplift for the top kitchens |
| Wins on delivery speed | Slot batching adds 8 to 12 minutes | Position slots as the cheaper option, keep an express option at the door fee |

### 13.4 Swiggy's position against Eternal, before and after

The table sets out what changes for Swiggy under Rebuild. The before column uses public figures and the model's estimate; the after column uses model paths.

| Dimension | Before (Toing as it runs) | After Rebuild | After Kill |
|---|---|---|---|
| Platform Innovations adjusted EBITDA | −₹131 Cr in Q1 FY27, against −₹58 Cr in Q4 FY26 [F: SW06] | Toing's part shrinks; year-1 total for Toing −₹56 Cr, against about −₹324 Cr a year at today's rate [M: T4, T6] | Toing's part ends after a ₹25 Cr wind-down |
| Toing's estimated quarterly loss | About ₹81 Cr [Est] | Falling toward a break-even order | Zero after wind-down |
| Audience | 33M weekly users; 14.5M downloads in the quarter against 12.4M Zomato and 10.1M Swiggy [F: SW17] | Smaller, paying for its own trips | Lost, except through the core 99 Store [F: SW11] |
| New users | 2 in 3 new to platform or dormant [F: SW07] | Kept, at a lower install spend | Lost |
| Analyst read | CLSA downgraded Swiggy to Hold citing Toing's effect on contribution margin [F: SW17] | The drag on contribution margin shrinks | The drag ends |
| Versus Eternal | Eternal profitable at 5.6% of NOV [F: CR01]; Swiggy food delivery at 3.1% of GOV [F: SW02] | Swiggy keeps the budget segment without buying it | Swiggy leaves the segment to Eternal and Ownly |

The two margins are not like for like: Eternal's 5.6% is on net order value and Swiggy's 3.1% is on gross order value [F: CR01, SW02]. We show both because a Board member will see them side by side.

The competitive claim is limited. Rebuild does not beat Eternal in the core; it removes the option for Eternal to watch Swiggy lose money on a segment it does not have to serve. The Board asked what Eternal's most likely response is [C: B4]. Ours is that it holds back, copies the format through pods and Gold, and does not clone the app, and the signals that would change that read are an Eternal budget app or a Gold threshold below ₹99, both visible in public announcements.

## 14. Regulation: the labour codes and Karnataka add under 1% of a ₹99 basket

**Answer.** Regulation adds about ₹0.35 an order on Toing in Pune under the Code on Social Security, and about ₹0.85 where Karnataka's ₹0.50 fee also applies, which is 0.35% to 0.85% of a ₹99 basket [M]. Even on the harshest reading of the Code (the levy applied to customer-paid turnover) the cost is ₹1.74 an order, against a trip-cost problem of ₹27.3 an order. Regulation changes the margin of safety, not the decision, but a compounded regulatory shock can erase Rebuild's ₹41 Cr lead over Kill, so we size it and watch it.

### 14.1 What the Code on Social Security requires, and how we model it

The Code has been in force since 21 November 2025 [C12]. Aggregators contribute 1 to 2% of annual turnover to gig-worker welfare, and the contribution is capped at 5% of what the aggregator pays those workers [C12]. Swiggy booked a one-time Labour Code impact of ₹10 Cr in Q4 FY26 as an exceptional item [F: CR10][S01], which tells us the company already treats the Code as a cost line, and a small one against a food delivery adjusted EBITDA of ₹292 Cr a quarter [F: SW02].

Two readings of "annual turnover" matter, and the case does not settle them. Our base reads turnover as Swiggy's revenue (commission, fees and ads), because that is what an aggregator books as its own turnover [A20]. The harsher reading treats turnover as everything the customer pays, including the restaurant's food value. We model both and show the second as an upper bound, not a forecast. The 5% cap is the same in both readings and is what keeps the harsh case bounded.

| Parameter | Value used | Basis |
|---|---|---|
| Levy rate, base | 1.5% (midpoint of 1 to 2%) | [C12][A20] |
| Turnover, base | Swiggy revenue per order: ₹23.04 (Toing), ₹166.34 (core) | [M] |
| Turnover, upper bound | Customer-paid total: ₹115.95 (Toing), ₹700 (core) | [M] |
| Cap | 5% of rider pay: ₹2.00 on a ₹40 trip, ₹2.10 on a ₹42 trip | [C12][A05] |
| Rider pay per solo trip | ₹40 Toing, ₹42 core | [A05][M] |

### 14.2 Per-order cost across the full range of the Code

The table crosses the three legal rates with the two turnover bases. Every cell is the model's arithmetic: rate times turnover, then the 5% cap [M]. The core order hits its cap under almost every reading, because a ₹700 order generates far more turnover than its ₹42 rider trip can support under a 5% ceiling. The Toing order does not, until the levy is applied to customer-paid turnover at 2%.

| Reading | Toing ₹99, revenue basis | Toing ₹99, customer-paid basis | Core ₹700, revenue basis | Core ₹700, customer-paid basis |
|---|---|---|---|---|
| 1.0% of turnover | ₹0.23 | ₹1.16 | ₹1.66 | ₹2.10 (cap; uncapped ₹7.00) |
| 1.5% of turnover (base) | ₹0.35 | ₹1.74 | ₹2.10 (cap; uncapped ₹2.49) | ₹2.10 (cap; uncapped ₹10.50) |
| 2.0% of turnover | ₹0.46 | ₹2.00 (cap; uncapped ₹2.32) | ₹2.10 (cap; uncapped ₹3.33) | ₹2.10 (cap; uncapped ₹14.00) |
| Ceiling under the 5% cap | ₹2.00 | ₹2.00 | ₹2.10 | ₹2.10 |

Read the last row first. Whatever the Code's turnover definition, no Toing order can carry more than ₹2.00 of levy while the rider is paid ₹40, which is 2.0% of a ₹99 basket [M]. The redesign lowers that ceiling. A Drop meal carries about ₹9.40 of rider cost [M], so a cap on rider pay alone would be about ₹0.47 a meal. The model conservatively passes the ₹4 host fee through the same cap, which gives ₹0.67 [M]. Pooled Drops shrink the regulatory base along with the trip cost, a point the Board can use when Legal asks whether the new format raises Code exposure (it lowers it).

### 14.3 Karnataka, Maharashtra and the state-by-state picture

Karnataka has legislated its own per-transaction welfare fee [C13]. The Platform-Based Gig Workers (Social Security and Welfare) Act sets the fee at 1% per transaction, capped at ₹0.50 per food or grocery order, effective 13 February 2026, and the Karnataka High Court directed deposit within three weeks in July 2026 [F: CR08][S09]. At a ₹99 basket 1% would be ₹0.99, so the cap binds and the fee is ₹0.50.

Toing launched in select Pune areas [F: SW16]. Pune is in Maharashtra, and we found no per-transaction gig-worker fee for Maharashtra in the public sources we collected [F: CR08]. That is an open item, not a finding that none exists. We handle it three ways. The base case charges Toing's Pune orders only the Code levy. The sensitivity in section 14.6 charges ₹0.50 on every Toing order as if Maharashtra copied Karnataka. And the 30-day roadmap in section 16 gives Legal and Public Policy the task of confirming Maharashtra's status in writing before day 30.

| Jurisdiction | Instrument | Rate and cap | Applies to Toing in Pune today | Cost per ₹99 order |
|---|---|---|---|---|
| Union of India | Code on Social Security, from 21 Nov 2025 [C12] | 1 to 2% of turnover, capped at 5% of rider pay | Yes | ₹0.35 (base), ₹2.00 (ceiling) [M] |
| Karnataka | Gig Workers Act, effective 13 Feb 2026 [F: CR08][S09] | 1% per transaction, capped at ₹0.50 a food order | No for Pune orders; yes for any Bengaluru order | ₹0.50 [M] |
| Maharashtra (Pune) | No per-transaction fee found in our sources | Unknown | Open item | ₹0 in base; ₹0.50 tested |
| Union of India | GST at 18% on local delivery services, section 9(5), from 22 Sep 2025 [F: CR09][S10] | 18% of the fee | Yes, on every customer-paid fee | Already inside the ₹12 platform fee [M] |

### 14.4 GST on delivery fees: already in the model, and it shapes the door fee

GST at 18% has applied to local delivery services supplied through e-commerce operators since 22 September 2025, adding about ₹2 an order at Zomato and ₹2.6 at Swiggy on fees of about ₹11 to ₹12 and ₹14.5 respectively [F: CR09][S10]. Our model treats every customer-paid fee as GST-inclusive and strips the tax before it books revenue [A03][M]. The ₹12 platform fee nets to ₹10.17 of revenue with ₹1.83 to the exchequer, and the ₹20 door fee nets to ₹16.95 with ₹3.05 to the exchequer. Restaurants bear GST on commission too: on a ₹99 order the restaurant keeps about ₹84 after commission, the 18% on that commission, and ads [M].

This matters for the door fee lever in section 7. The +₹8.26 that the door fee adds to the blended order is already net of GST [M]. The flip value of ₹16.64 [M] is also a gross figure, so the door fee can slip about ₹3.4 (17%) before Rebuild loses to Kill, and every rupee of that slip costs about ₹12 Cr over three years [M]. A fee displayed excluding GST would be an upside of about ₹1.5 on the blended order (half of ₹3.05, since about half of orders are door orders [A17 to A26]), but the customer would then see ₹23.6, and we do not bank it.

| GST item | Rate | Where it sits in a ₹99 order | Amount [M] |
|---|---|---|---|
| Food, collected by the platform | 5% | On the item total | ₹4.95 |
| Platform fee ₹12, inclusive | 18% | Inside the customer fee | ₹1.83 |
| Door fee ₹20 outside Drops, inclusive | 18% | Inside the customer fee | ₹3.05 |
| Commission (12% today, 15% redesigned) | 18% | Charged to the restaurant | ₹2.14 today |
| Government take on today's ₹99 order | n/a | Sum of the first, second and fourth rows | ₹8.92 |

### 14.5 Regulation against the trip-cost problem

The right comparison for the Board is the size of each cost line against the loss it sits inside. Regulation is real and growing, but at these orders of magnitude it cannot be the reason to kill Toing, and it cannot be the reason to keep scaling it either.

| Cost line on a ₹99 Toing order | ₹ per order [M] | % of ₹99 basket | Share of the ₹27.3 loss |
|---|---|---|---|
| Rider pay | 40.00 | 40.4% | 146% (larger than the loss) |
| Platform-funded discount | 4.00 | 4.0% | 15% |
| Support and refunds | 2.99 | 3.0% | 11% |
| CoSS, base | 0.35 | 0.35% | 1.3% |
| Karnataka fee cap | 0.50 | 0.51% | 1.8% |
| CoSS, customer-paid basis | 1.74 | 1.76% | 6.4% |
| CoSS ceiling (5% of rider pay) | 2.00 | 2.02% | 7.3% |

The rider line is 40.4% of the basket [M], the number behind the case's first sentence [C01]. Regulation's base cost is about a hundredth of it.

### 14.6 Regulatory sensitivity: what if the levy widens, what if a per-order fee doubles

We ran each shock through the full three-year model. Each extra ₹1 of per-order cost on Rebuild's volumes (1.8, 2.8 and 4.0 lakh orders a day over three years [A37 to A41]) costs about ₹31.4 Cr, because those volumes add up to 31.4 Cr orders. The same ₹1 costs Scale about ₹54.8 Cr on its larger volumes, so a rising fee schedule hurts the Scale path 1.7 times as much per rupee.

| Scenario | Extra cost on a Toing order | Rebuild 3-year total, ₹ Cr [M] | Kill, ₹ Cr | Rebuild minus Kill, ₹ Cr | Verdict |
|---|---|---|---|---|---|
| Base: CoSS 1.5% of revenue, no state fee in Pune | none | +1 | −40 | +41 | Rebuild ahead |
| CoSS at 1% of revenue | −₹0.11 | +6 | −40 | +46 | Rebuild ahead |
| CoSS at 2% of revenue | +₹0.11 | −5 | −40 | +35 | Rebuild ahead |
| CoSS at 1.5% of customer-paid turnover | +₹1.39 | −19 | −40 | +21 | Rebuild ahead, lead halved |
| CoSS at 2% of customer-paid turnover (cap binds) | +₹1.65 | −20 | −40 | +21 | Rebuild ahead, lead halved |
| Maharashtra copies Karnataka: ₹0.50 on every Toing order | ₹0.50 | −15 | −40 | +26 | Rebuild ahead |
| A per-order fee doubles to ₹1.00 on every order | ₹1.00 | −31 | −40 | +10 | Rebuild ahead, thin |
| Customer-paid CoSS at 1.5% plus ₹0.50 on every order | ₹1.89 | −35 | −40 | +5 | Near tie |
| Customer-paid CoSS at 1.5% plus ₹1.00 on every order | ₹2.39 | −51 | −40 | −10 | Kill ahead |

The extra cost column is measured on today's order for the CoSS rows and is a flat add-on for the fee rows; the totals come from re-running the paths with the changed input [M]. Two readings follow. First, no single regulatory shock flips the answer, and the worst single shock (the levy on customer-paid turnover) halves the lead without removing it. Second, the compound case (customer-paid levy plus a doubled per-order fee) does flip it, by about ₹10 Cr, and that is the case where the month-6 gate matters most. If the Code's final rules or a state's gig-worker fee move toward it before month 6, the gate should be read against the shifted totals. Because a flat per-order fee costs Scale ₹55 Cr for every ₹1 against ₹31 Cr for Rebuild, regulation widens the ranking of Rebuild over Scale even as it narrows Rebuild's lead over Kill.

**What we do about it.** Legal and Public Policy tracks three things through the roadmap: the Code's final rules on the turnover definition, Maharashtra's status, and any change to Karnataka's ₹0.50 cap. The Board's decision rule is simple. A regulatory move that costs more than about ₹1.30 an order on Toing (₹41 Cr divided by 31.4 Cr orders) needs a fresh Rebuild versus Kill comparison, and one that costs less is absorbed inside the plan.

*Sources: Karnataka Act [S09]; GST rules [S10]; Swiggy Q1 FY27 letter [S01]; model outputs [M].*


## 15. What would change our mind: three flip points, each visible within 90 to 180 days

**Answer.** The recommendation flips to a shutdown if any one of three assumptions breaks: the rider cost of a solo trip is above about ₹42 (assumed ₹40), Drop runs average fewer than about 5.5 meals (assumed 10), or the share of Toing orders that replace a ₹700-type core order is above about 26% (assumed 20%). Swiggy can measure the first two from its own dispatch logs within 90 days and the third from a holdout cohort within 180 days. A fourth condition, restaurants refusing a higher commission, moves the result but does not flip it alone [M, T9].

### 15.1 Flip-point table

A flip point is the value of one input at which the three-year result of the rebuild equals the three-year result of a shutdown (Kill), holding every other input at its base value. It is found by bisection in `toing_model.py` (`flip_points`) [M].

| Input | Assumed value | Flip value | Headroom | Read |
|---|---|---|---|---|
| Rider pay per solo trip [A05] | ₹40 | ₹42.4 | +6% | Thinnest cushion. A 6% rise in rider cost erases the edge over Kill |
| Meals per Drop run [A21] | 10 | 5.5 | −45% | Wide cushion. Runs can be half as full as planned |
| Trade-down share of Toing orders [A35] | 20% | 26% | +6 points | Moderate. Needs a holdout to measure |
| Base commission on Toing [A02] | 12% (plus 3 points from menus) | 10.8% | −1.2 points | Close. A restaurant refusal of the uplift alone is not fatal, a cut below 10.8% is |
| Door fee outside Drops [A24] | ₹20 | ₹16.6 | −₹3.4 | Moderate. Ownly already charges ₹30 [S08] |
| Customer-paid fees per order [A03] | ₹12 | ₹10.5 | −₹1.5 | Close. A fee waiver war removes the edge |
| Share of orders at Drops [A17] | 50% | 2% | −48 points | Very wide. Drops matter little to the flip, they matter to the size of the win |

Two things follow. First, the rebuild is fragile on the price side (rider cost, commission and fees each have under 10% of headroom) and well protected on the density side (Drop share and run size have wide cushions). That is the honest reading of "Rebuild beats Kill by only ₹41 Cr". Second, the fragile inputs are exactly the ones Swiggy can observe fastest, because they sit in payout logs and the checkout, not in customer behaviour.

### 15.2 Three-year result across the ranges of each flip input

| Input | Low value | R at low | High value | R at high | Kill (K) |
|---|---|---|---|---|---|
| Rider pay per solo trip | ₹32 | +139 | ₹48 | −138 | −40 |
| Base commission | 8% | −122 | 18% | +184 | −25 to −55 |
| Trade-down share | 0% | +72 | 40% | −71 | −106 to +25 |
| Meals per Drop run | 4 | −75 | 12 | +9 | −40 |
| Customer-paid fees | ₹0 | −310 | ₹25 | +338 | +2 to −60 |
| Share of orders at Drops | 20% | −25 | 80% | +27 | −40 |

All figures ₹ Cr over three years from October 2026 [M, T10]. Kill moves with trade-down and fees because a shutdown also recaptures core orders or forfeits fee income.

### 15.3 The 3, 6 and 12-month scorecard

Each gate names the metric, its source inside Swiggy, the pass threshold and what happens on a miss. Thresholds are set slightly inside the flip points so a miss triggers action before value is destroyed.

| Gate | Metric | Source | Pass | On a miss |
|---|---|---|---|---|
| Month 3 | Share of door orders batched in pairs [A18] | Dispatch logs | At least 50% | Widen the slot window, add a ₹5 batch credit |
| Month 3 | Meals per Drop run | Dispatch logs | At least 4 (breakeven 3.3, rider parity 4.3) | Merge low-volume sites, raise host fee to ₹6 |
| Month 3 | Solo rider cost per trip | Payout ledger | At most ₹42 | Rebase incentives, cap peak-hour bonuses |
| Month 6 | Meals per Drop run | Dispatch logs | At least 6 (flip 5.5) | Kill decision meeting; default is shutdown |
| Month 6 | Blended contribution per order | Finance | At least −₹5 (base path averages −₹2.5 across year 1) | Kill decision meeting |
| Month 6 | Trade-down from a core-app holdout cohort | Experiment platform | At most 26% | Add a minimum-basket rule for core users, else shut |
| Month 12 | Blended contribution per order | Finance | At least +₹3 | Freeze expansion, stay in current cities |
| Month 12 | Toing users who place a ₹400+ order on the core app within 12 months | CRM | At least 10% (assumed 15%) | Stop counting migration in the case for Toing |
| Month 12 | Toing orders per day | Finance | At least 2.8 lakh (base plan) | Cut paid installs to zero |

### 15.4 The kill rule

The month-6 gate is a hard rule. If either the Drop-run metric or the contribution metric misses, the Board reviews a shutdown and the default is to shut. The cost of the fallback is small: the gate-failure path in the model finishes at +₹7 Cr over three years in the base case, because the app is wound down after six months of the rebuild at a one-time cost of ₹25 Cr [M, `R_fail`]. This is the sense in which the recommendation caps its own downside near the Kill path: the maximum regret from trying is about the ₹56 Cr of year-one loss on the rebuild path, against ₹514 Cr of year-one loss if Toing is scaled as it runs [M].

### 15.5 What would not change our mind

| Evidence | Why it does not flip the call |
|---|---|
| Toing's weekly users keep growing | Reach is not the problem. Every additional ₹99 order at today's trip cost adds a ₹27 loss [M] |
| A rival cuts its price further | Ownly's model shifts the trip cost to the customer (₹30 fee), which supports the door-fee lever rather than contradicting it [S08] |
| The share of new-to-platform users rises above two-thirds | It lowers the cost of the funnel argument but not the per-order loss, and the funnel still costs 9.0 times paid CAC per migrated user at 15% migration [M, T5] |
| Higher paid CAC (₹700 or ₹900) | Helps the funnel but not enough: at ₹900 and all users new, 50% must still migrate in twelve months [M, T5] |

---

## 16. Implementation roadmap: switch on four levers in 30 days, prove Drops by day 90, decide at month 6

**Answer.** The plan has three horizons: 30 days for the levers Swiggy controls alone (door fee, slot batching, coupon reduction, install freeze), 90 days to prove pooled Drops at 40 sites in four cities, and 365 days for the gate decisions and controlled expansion. Owners are named by role. The first-year investment is small because installs are frozen: paid acquisition falls from an estimated ₹150 Cr under scaling to ₹20 Cr under the rebuild [A38, A41].

### 16.1 Horizon plan

| Horizon | Action | Owner (role) | KPI | Gate |
|---|---|---|---|---|
| Days 1 to 30 | Introduce a ₹20 door fee outside Drops | Toing product lead | Fee take rate, order drop-off | Order loss under 15% |
| Days 1 to 30 | Turn on slot batching (two-order windows) | Head of delivery operations | Batched share of door orders | 50% by day 60 |
| Days 1 to 30 | Cut platform-funded coupons from ₹4 to ₹2 an order | Growth lead | Coupon cost per order | Retention drop under 3 points |
| Days 1 to 30 | Freeze paid installs, keep organic and referral | CMO | Paid CAC spend | Zero paid Toing installs |
| Days 15 to 45 | Sign 40 pilot Drop sites: hostel gates, PG lobbies, office desks | City heads (four) | Sites signed, host fee | 40 signed by day 45 |
| Days 30 to 90 | Run pooled Drop runs at lunch and dinner | Head of delivery operations | Meals per run, rider pay per hour | 4 or more by day 90 |
| Days 30 to 90 | Fixed menus with 15 kitchen partners per city | Supply lead | Commission, refund rate | 15% commission, 1% refunds |
| Days 60 to 120 | Launch Toing Pass at ₹49 a month | Product lead | Pass share, orders per pass holder | 20% of active users |
| Day 180 | Month-6 gate: Board review | CFO and Toing lead | Runs of 6 or more, contribution at least −₹5, trade-down at most 26% | Continue or shut |
| Days 180 to 365 | Expand Drops to 150 sites in four cities if the gate passes | COO | Orders per day, contribution | Contribution at least +₹3 by month 12 |
| Day 365 | Month-12 review | CEO and CFO | Toing orders, migration, contribution | Expand, hold or sunset |

### 16.2 Text Gantt (quarters from October 2026)

```
                       Q4 26      Q1 27      Q2 27      Q3 27
Door fee, batching     [=======]
Coupon cut, install freeze [====]
40 pilot Drop sites       [=========]
Fixed menus, kitchens        [==========]
Toing Pass                        [=======]
Gate at month 3            *
Gate at month 6                       *
Scale Drops to 150 sites                  [============]
Month 12 review                                       *
```

### 16.3 Budget and cash view (₹ Cr, base path)

| Line | Year 1 | Year 2 | Year 3 |
|---|---|---|---|
| Toing orders a day (lakh) [A41] | 1.8 | 2.8 | 4.0 |
| Blended contribution per order (₹) | −2.5 | +5.7 | +5.7 |
| Paid installs [A41] | 20 | 20 | 20 |
| Overheads [A41] | 15 | 15 | 15 |
| Net result after trade-down and migration credit | −56 | +17 | +39 |
| Cumulative | −56 | −39 | 0 |

The cumulative line ends at about zero over three years (+₹1 Cr in the model) and the run rate turns positive in year 2 [M, `paths`]. Peak cash at risk is about ₹56 Cr, or about 0.4% of Swiggy's ₹14,367 Cr cash balance at the end of Q1 FY27 [S01].

### 16.4 Dependencies that sit outside Swiggy's control

| Dependency | Who decides | If it goes wrong |
|---|---|---|
| Host sites accept a ₹4 fee and a pickup shelf | Hostel wardens, PG owners, office managers | Use campus canteens and Swiggy-owned lockers as fallback |
| Restaurants accept 15% commission and a fixed menu | Restaurant partners (a significant minority already reach half of Swiggy volume through Toing [S01]) | Lift only for partners above a volume threshold |
| Students accept a 45-minute order-ahead window and a walk | Customers | The four-city A/B test will show the accepted share (section 10.4) |
| Rider supply on Drop runs | Riders | Pay ₹125 an hour against ₹80 solo [M], the reason Drops attract riders |

## 17. Risk register: twelve risks, each paired with one mitigation and one early signal

**Answer.** The largest risks are rider supply at Drops, restaurants refusing the commission uplift, and a price war started by Rapido Ownly. All three have a mitigation Swiggy controls and an early signal that shows up in its own logs within 90 days. Scores are probability (P) and impact (I) on a 1 to 5 scale, with severity as P times I; they are team judgments, labelled as such.

### 17.1 Risk register

| # | Risk | P | I | Sev. | Mitigation (paired) | Early signal |
|---|---|---|---|---|---|---|
| R1 | Riders decline Drop runs because runs feel like unpaid waiting | 3 | 4 | 12 | Pay per run with a floor equal to solo pay for a run of 4 (₹77 vs ₹80 an hour at 4 meals, ₹125 at 10) [M] | Run acceptance under 80% |
| R2 | Restaurants refuse the 3-point commission uplift | 3 | 4 | 12 | Offer volume, not price: fixed menus raise per-restaurant orders; apply the uplift only above a volume threshold | Partner opt-outs above 15% |
| R3 | Rapido Ownly enters Pune with a 0% commission and ₹30 fee | 4 | 3 | 12 | Compete on trip cost, not commission: Drops and batching lower cost to serve, and the door fee already prices the trip [S08] | Ownly launch in Pune, Toing daily orders down over 10% |
| R4 | Trade-down: core ₹700 users switch to ₹99 orders | 3 | 4 | 12 | Separate app plus minimum-basket rule for core-app users plus a holdout cohort test; flip point 26% [M] | Holdout cohort trade-down above 20% |
| R5 | Eternal copies Drops through Zomato Now pods and Gold thresholds | 3 | 3 | 9 | Lock host sites with 12-month agreements; move first to hostel and PG clusters where pods do not reach | Eternal pilots in Pune or Delhi NCR campuses |
| R6 | Students refuse a 45-minute order-ahead window or a walk | 3 | 3 | 9 | The A/B test (section 10.4) sets the size of the Drop share; keep door orders as the fallback | Drop share of orders under 30% at month 3 |
| R7 | Regulatory fee creep: Code on Social Security rules or state cess rise | 3 | 2 | 6 | Model shows about 0.4 to 0.9% of a ₹99 basket [M, T11]; pass through via the door fee | New state law with per-order cess above ₹1 |
| R8 | Food safety and hygiene at unattended Drop shelves | 2 | 4 | 8 | Sealed, tamper-evident packaging; hosted, not unattended; FSSAI-compliant kitchen partners | Complaint rate above core app by 2x |
| R9 | Brand dilution: Swiggy is seen as a "cheap" brand | 2 | 3 | 6 | Keep Toing as a separate app and brand; no Toing marks in the core app | Core-app NPS drop above 2 points in Toing cities |
| R10 | Data privacy at Drop sites (order names, pickup lists) | 2 | 3 | 6 | Pickup by code, not by name; DPDP-aligned consent notice | Any privacy complaint at a host site |
| R11 | Execution slip on 40 pilot sites in 45 days | 3 | 3 | 9 | City heads own site targets; fall back to canteen and locker sites; weekly review | Fewer than 25 sites signed by day 45 |
| R12 | Loss of the customer if the door fee is too high | 3 | 3 | 9 | Test ₹10, ₹15, ₹20 in cohorts; flip point is ₹16.6 so the fee must stay above it on average [M] | Door orders down over 20% after fee |

### 17.2 Risk heat map

| Impact / Probability | P2 | P3 | P4 |
|---|---|---|---|
| I4 | R8 | R1, R2, R4 | |
| I3 | R9, R10 | R5, R6, R11, R12 | R3 |
| I2 | | R7 | |

### 17.3 Pre-mortem: why Toing fails in twelve months

| Failure story | Root cause | What we would have seen earlier |
|---|---|---|
| "Runs never filled" | Drop sites signed but unused | Meals per run under 4 at month 3 |
| "Restaurants left" | Commission uplift applied to everyone | Opt-outs above 15% at day 60 |
| "Core users switched" | No fence, no holdout | Trade-down above 20% in the holdout |
| "Ownly undercut us" | Only price, not trip cost, was defended | Toing orders down over 10% after Ownly's Pune launch |

---

## 18. Anticipated judge and Board questions: twenty answers with numbers

**Answer.** The twenty questions below are the hardest we expect on unit economics, decision quality, insight, competition and regulation. Each answer is two to four sentences and uses only figures already sourced above. Questions are reported speech: "The panel will ask" introduces each.

**Unit economics**

1. *The panel will ask: how do you know a rider trip costs ₹40 on a ₹99 order?* We do not know it exactly. The case says rider pay is roughly the same for a ₹79 thali and a ₹700 dinner [C01]; public rider guides put base pay at ₹20 to ₹35 an order before distance and incentives [S11]. We use ₹40, and the flip point is ₹42.4, so we show the result at ₹32 to ₹48: +₹139 Cr to −₹138 Cr over three years [M].
2. *The panel will ask: why is the contribution of a ₹99 order −₹27 when Swiggy says its food segment earns 7.6%?* Because 7.6% of a ₹700 order is ₹53 and the trip cost is nearly the same, while revenue at ₹99 is ₹23 against about ₹166 at ₹700. The model reproduces the 7.6% at ₹700 by calibration and applies the same cost logic at ₹99 [M, T1].
3. *The panel will ask: is the ₹81 Cr quarterly loss on Toing real?* It is our estimate from Platform Innovations' ₹131 Cr loss less ₹50 Cr for other businesses, checked against Swiggy's statement that spend is "largely on new user acquisition". Our split is two-thirds orders and one-third installs; if the split is reversed, the recommendation holds because both parts fall under the rebuild [Est, S01].
4. *The panel will ask: what is the breakeven basket?* About ₹363 at today's Toing terms, from the model run in section 5. Below that a solo trip loses money; the rebuild lowers the effective trip cost so a ₹99 order breaks even at 3.3 meals per run [M].
5. *The panel will ask: the case says AOV is ₹700 but public data imply about ₹500. Does that change your answer?* The case governs, so slides use ₹700. At ₹500 core EBITDA is ₹15.5 an order rather than ₹21.7, and one Toing order erases the EBITDA of about 1.8 core orders, which strengthens the case for fixing the trip [M, A13].

**Decision quality**

6. *The panel will ask: Rebuild beats Kill by only ₹41 Cr. Why not shut it?* On money alone the two are close. Rebuild keeps 2 in 3 new-or-dormant users, a separate price point that fences the core, and an option worth +₹135 Cr in the bull case, while the month-6 gate limits the downside near the ₹56 Cr of year-one loss [S01, M].
7. *The panel will ask: why not scale it with free delivery, as management is doing?* Scaling costs −₹1,744 Cr over three years because each extra ₹99 order adds a ₹27 loss and volume rises to 6.5 lakh orders a day [M, T6]. The case's own lens says the loss has to be justified by acquisition, and it is not (question 9).
8. *The panel will ask: why a separate app and not the 99 Store inside the main app?* A separate app is the fence: it keeps ₹700 users from trading down and lets Toing run different commissions and menus. Swiggy already says the two products are distinct and that some inter-play is hard to predict [S01].
9. *The panel will ask: is the funnel not simply a marketing cost?* It is, and it is nine times dearer than paid marketing per migrated user: ₹4,485 against a ₹500 CAC at a 15% migration rate. The case's lens needs 135% migration, which is impossible; the more generous lifetime-value lens needs 25% [M, T5].
10. *The panel will ask: what did Snacc teach you?* Snacc bought speed with cost (a solo trip per snack in micro-kitchens) and was shut within a year; Swiggy says the category was too small for the complexity [S01, S07]. Toing repeats the cost structure at a low price, which is why we change the trip rather than the price.

**Insight and primary research**

11. *The panel will ask: why no survey?* Time and the case's rule that non-public data cannot be sought from Swiggy or Eternal staff [C: rule R1] made a fieldwork instrument the wrong use of the hours available. The answer rests on trip arithmetic that does not depend on stated preferences, and the behavioural inputs it does need are stress-tested across their full plausible range [Section 10].
12. *The panel will ask: what would primary data change?* The size of the win, not the direction. Moving Drop share from 20% to 80% moves the three-year result for Rebuild from −₹25 Cr to +₹27 Cr, while Rebuild stays ahead of Scale and Funnel at every value tested [M, T10].
13. *The panel will ask: is the ₹346 versus ₹486 bill representative?* It is one public bill, used only to show the fee structure, not as a sample. The model uses the ₹12 platform fee and no delivery fee as Swiggy has disclosed them [S03].
14. *The panel will ask: what is the insight Swiggy's own team does not have?* That the loss is in the trip, not the price, and that a run of 10 meals turns −₹23 into +₹7 an order; that the funnel's 9.0x cost premium follows from the trip cost; and, from Swiggy's own disclosures, how much of Toing's audience already uses Swiggy or Zomato [S01].

**Competition and regulation**

15. *The panel will ask: what will Eternal do?* Its best reply is to hold back while Toing loses money and copy the pickup idea through Zomato Now pods and Gold free-delivery thresholds; its CFO has said it is not convinced Toing solves a clear problem [S06, CR02].
16. *The panel will ask: is Rapido Ownly the bigger threat?* Yes. It runs zero commission with a ₹30 trip fee, 50,000 to 60,000 orders a day in Bengaluru, and plans Pune [S08]. That model puts the trip cost on the customer, which supports our door fee; the risk is a lower fee war, so we track the flip point of ₹16.6.
17. *The panel will ask: what do the labour codes do to Toing?* The Code on Social Security levy is about ₹0.35 an order on a revenue basis and up to ₹1.74 on customer-paid turnover, plus a Karnataka fee capped at ₹0.50 in Bengaluru; together 0.4 to 0.9% of a ₹99 basket, an order of magnitude below the trip problem [M, T11].
18. *The panel will ask: is GST on delivery a problem?* Delivery fees carry 18% GST since 22 Sep 2025; on a ₹20 door fee that is ₹3.05, already inside the model's net fee [S10, M].

**Execution**

19. *The panel will ask: what if students will not walk to a Drop?* The Drop share falls, and the result falls slowly: at 20% Drop share three-year value is −₹25 Cr against +₹1 Cr at 50%, so the door path (batched pairs and a fee) carries the base [M, T10].
20. *The panel will ask: how will Swiggy know in twelve months whether the call was right?* Three numbers: meals per Drop run (at least 6 at month 6), blended contribution per order (at least +₹3 at month 12), and trade-down in a core holdout (at most 26%). Any miss at month 6 triggers a shutdown review [Section 15.3].

## Appendix A: Bibliography

- **S01** Swiggy Limited (2026) Q1 FY27 shareholder letter. Available at: https://www.swiggy.com/corporate/ (Accessed: 29 September 2026)
- **S02** Inc42 (2026) Swiggy's money map: the verticals built around the food delivery core. Available at: https://inc42.com/features/swiggys-money-map-the-verticals-built-around-food-delivery-core/ (Accessed: 29 September 2026)
- **S03** MediaNama (2025) Toing app: Swiggy's budget meals cost more after platform fees, GST. Available at: https://www.medianama.com/2025/09/223-toing-app-swiggy-save-money-on-meals/ (Accessed: 29 September 2026)
- **S04** MediaNama (2026) Swiggy says zero-commission food delivery is unsustainable, bets on Toing to grow the market. Available at: https://www.medianama.com/2026/08/223-swiggy-earnings-call-key-takeaways/ (Accessed: 29 September 2026)
- **S05** Storyboard18 (2026) Swiggy's Toing user base closes in on Zomato, reaches 33 million weekly users: CLSA. Available at: https://www.storyboard18.com/brand-marketing/swiggys-toing-user-base-closes-in-on-zomato-reaches-33-million-weekly-users-clsa-ws-o-110238.htm (Accessed: 29 September 2026)
- **S06** MediaNama (2026) Eternal tests Zomato Now food vending pods in Gurugram offices. Available at: https://www.medianama.com/2026/08/223-eternal-food-delivery-zomato-now/ (Accessed: 29 September 2026)
- **S07** Entrackr (2026) Swiggy shuts down 15-min food delivery app Snacc; MediaNama (2026) Swiggy shuts down SNACC. Available at: https://entrackr.com/news/swiggy-shuts-down-15-min-food-delivery-app-snacc-11133594 (Accessed: 29 September 2026)
- **S08** MediaNama (2026) Rapido rolls out Ownly in Bengaluru with zero-commission model; Business Today (2026) Rapido's Ownly goes live within the main app. Available at: https://www.medianama.com/2026/03/223-rapido-ownly-bengaluru-zero-commission-model-sustain-without-charging-restaurants/ (Accessed: 29 September 2026)
- **S09** Deccan Herald (2026) Gig workers welfare fee: Karnataka notifies 1% levy on aggregators. Available at: https://www.deccanherald.com/india/karnataka/swiggy-zomato-to-pay-welfare-fee-to-gig-workers-as-karnataka-notifies-1-levy-on-aggregators-3900681 (Accessed: 29 September 2026)
- **S10** Inc42 (2025) Zomato, Swiggy deliveries to get costlier with new 18% GST; Angel One (2025) 18% GST on e-commerce delivery from 22 Sep. Available at: https://inc42.com/buzz/zomato-swiggy-deliveries-to-get-costlier-with-new-18-gst/ (Accessed: 29 September 2026)
- **S11** Delivery-partner pay guides (2026) Swiggy delivery partner earnings, base pay and distance pay. Secondary source, snippet only (Accessed: 29 September 2026)
- **S12** Restaurant commission guides (2026) Zomato and Swiggy commission rates. Secondary source, snippet only (Accessed: 29 September 2026)
- **S13** IIFL (2022) To cut costs, Dunzo encouraging users to choose the 60-minute delivery option. Available at: https://www.indiainfoline.com/news/markets/to-cut-costs-dunzo-encouraging-users-to-choose-the-60-minute-delivery-option (Accessed: 29 September 2026)
- **S14** Eternal Limited (2026) Q1 FY27 results. Secondary summaries, snippet only (Accessed: 29 September 2026)
- **S15** Morwitz, V., Steckel, J. and Gupta, S. (2007) When do purchase intentions predict sales? International Journal of Forecasting, 23(3), pp. 347 to 364.

## Appendix B: Model tables

Generated by `model/toing_model.py` and `model/make_tables.py` on 29 September 2026.

### T1 Per-order stack today, ₹ (Toing ₹99 vs core ₹700)

| Line | Toing ₹99 | Core ₹700 |
|---|---|---|
| Customer pays | 116.0 | 700.0 |
| Restaurant keeps (after commission, GST on commission, ads) | 84.0 | n/a |
| Swiggy revenue | 23.0 | 166.3 |
| Rider pay | −40.0 | −42.0 |
| Insurance | −1.0 | −1.0 |
| CoSS contribution | −0.3 | −2.1 |
| Payments | −1.0 | −6.3 |
| Support and refunds | −3.0 | −10.7 |
| Coupons | −4.0 | −22.0 |
| Tech | −1.0 | −1.0 |
| Contribution | −27.3 | 53.2 |
| Overheads | n/a | −31.5 |
| Adjusted EBITDA | n/a | 21.7 |

### T2 Lever bridge, contribution per ₹99 order, ₹

| Lever | Who controls | Change | After |
|---|---|---|---|
| Today | | | −27.33 |
| Slot batching of door orders | Swiggy | +7.20 | −20.13 |
| Pooled Drops (pickup runs) | Swiggy + Drop host | +9.70 | −10.43 |
| Door fee outside Drops | Customer | +8.26 | −2.18 |
| Fixed menus, kitchen partners | Restaurants | +3.42 | 1.24 |
| Ad load 1% to 2.5% | Restaurants | +1.46 | 2.71 |
| Everyday low price, fewer coupons | Swiggy + restaurants | +2.00 | 4.71 |
| Toing Pass Rs 49 a month | Customer | +1.02 | 5.73 |

### T3 Density curve, ₹ per Drop order

| Meals per run | Rider cost per meal | Contribution |
|---|---|---|
| 1 | 40.0 | −23.4 |
| 2 | 23.0 | −6.4 |
| 3 | 17.3 | −0.8 |
| 4 | 14.5 | 2.1 |
| 5 | 12.8 | 3.8 |
| 6 | 11.7 | 4.9 |
| 7 | 10.9 | 5.7 |
| 8 | 10.2 | 6.3 |
| 9 | 9.8 | 6.8 |
| 10 | 9.4 | 7.2 |
| 11 | 9.1 | 7.5 |
| 12 | 8.8 | 7.7 |
| 13 | 8.6 | 8.0 |
| 14 | 8.4 | 8.1 |
| 15 | 8.3 | 8.3 |

### T4 Triangulation of Toing's quarter

| Item | Value |
|---|---|
| t_rev_q | 56.00 |
| t_loss_q | −81.00 |
| rev_per_order | 25.77 |
| contrib_per_order | −25.16 |
| orders_q_cr | 2.17 |
| orders_lakh_day | 2.39 |
| contrib_loss_q | −54.67 |
| acq_q | −26.33 |
| acq_share | 0.33 |
| contrib_share | 0.67 |
| acq_per_download | −18.16 |
| annual_loss | −324.00 |
| pct_of_food_ebitda | 27.74 |
| pi_pct_of_food_ebitda | 44.86 |

### T5 Funnel

| Horizon (months) | Cost per user ₹ | Migration needed, CAC lens % | LTV lens % |
|---|---|---|---|
| 12 | 451 | 135 | 25 |
| 24 | 506 | 151 | 28 |
| 36 | 514 | 154 | 29 |

Loss a month per user ₹68; core LTV ₹2,688; cost per incremental user ₹4,485; 9.0x paid CAC.

### Migration needed (%) by paid CAC and incremental share

| CAC ₹ | 33% new | 50% | 67% | 100% |
|---|---|---|---|---|
| 400 | 341 | 225 | 168 | 113 |
| 500 | 273 | 180 | 135 | 90 |
| 700 | 195 | 129 | 96 | 64 |
| 900 | 152 | 100 | 75 | 50 |

### T6 Three-year paths, ₹ Cr

| Scenario | Path | Y1 | Y2 | Y3 | Total |
|---|---|---|---|---|---|
| bear | Scale as it runs | −486 | −563 | −624 | −1,673 |
| bear | Funnel (CAC credit) | −355 | −355 | −355 | −1,065 |
| bear | Funnel (LTV credit) | −304 | −304 | −304 | −913 |
| bear | Kill | −88 | 24 | 24 | −40 |
| bear | Rebuild | −73 | −26 | −22 | −121 |
| bear | Rebuild, gate fails | −49 | 24 | 24 | −2 |
| base | Scale as it runs | −514 | −588 | −642 | −1,744 |
| base | Funnel (CAC credit) | −380 | −380 | −380 | −1,140 |
| base | Funnel (LTV credit) | −317 | −317 | −317 | −950 |
| base | Kill | −88 | 24 | 24 | −40 |
| base | Rebuild | −56 | 17 | 39 | 1 |
| base | Rebuild, gate fails | −41 | 24 | 24 | 7 |
| bull | Scale as it runs | −537 | −606 | −651 | −1,794 |
| bull | Funnel (CAC credit) | −401 | −401 | −401 | −1,204 |
| bull | Funnel (LTV credit) | −325 | −325 | −325 | −976 |
| bull | Kill | −88 | 24 | 24 | −40 |
| bull | Rebuild | −36 | 64 | 107 | 135 |
| bull | Rebuild, gate fails | −31 | 24 | 24 | 16 |

### T7 Decomposition of the gap, Rebuild vs Scale (base), ₹ Cr

| Component | ₹ Cr |
|---|---|
| order_losses | 1,200 |
| acquisition | 390 |
| overhead | 15 |
| tradedown | 178 |
| migration | −39 |
| total | 1,745 |

### T8 Tornado on blended contribution per order (base 5.73)

| Driver | Low case | High case |
|---|---|---|
| Rider pay per solo trip (48 / 32) | 1.5 | 9.9 |
| Door fee outside Drops (10 / 30) | 1.6 | 9.9 |
| Base commission (0.09 / 0.15) | 2.8 | 8.7 |
| Door orders batched (0.3 / 0.8) | 3.9 | 6.9 |
| Drop host fee (7 / 2) | 4.2 | 6.7 |
| Orders per Drop run (5 / 14) | 4.0 | 6.2 |
| Share of orders at Drops (0.3 / 0.7) | 5.2 | 6.3 |

### T9 Flip points (Rebuild equals Kill over 3 years)

| Input | Flip value |
|---|---|
| T_RIDER | 42.378 |
| RUN_N | 5.509 |
| CANNIB | 0.26 |
| T_COMM | 0.108 |
| DROP_SHARE | 0.02 |
| DOOR_FEE | 16.644 |
| T_FEES_CUST | 10.538 |

### T10 Stress tests: 3-year totals ₹ Cr (Rebuild R, Scale S, Funnel with LTV credit F, Kill K)

| Input | Value | R | S | F | K | R beats S and F |
|---|---|---|---|---|---|---|
| DROP_SHARE | 0.2 | -25 | -1744 | -950 | -40 | True |
| DROP_SHARE | 0.35 | -12 | -1744 | -950 | -40 | True |
| DROP_SHARE | 0.5 | 1 | -1744 | -950 | -40 | True |
| DROP_SHARE | 0.65 | 14 | -1744 | -950 | -40 | True |
| DROP_SHARE | 0.8 | 27 | -1744 | -950 | -40 | True |
| T_RIDER | 32 | 139 | -1744 | -740 | -40 | True |
| T_RIDER | 36 | 70 | -1744 | -845 | -40 | True |
| T_RIDER | 40 | 1 | -1744 | -950 | -40 | True |
| T_RIDER | 44 | -69 | -1744 | -1055 | -40 | True |
| T_RIDER | 48 | -138 | -1744 | -1160 | -40 | True |
| T_COMM | 0.08 | -122 | -1744 | -1052 | -25 | True |
| T_COMM | 0.1 | -60 | -1744 | -1001 | -34 | True |
| T_COMM | 0.12 | 1 | -1744 | -950 | -40 | True |
| T_COMM | 0.15 | 93 | -1744 | -873 | -48 | True |
| T_COMM | 0.18 | 184 | -1744 | -796 | -55 | True |
| CANNIB | 0.0 | 72 | -1494 | -830 | -106 | True |
| CANNIB | 0.1 | 37 | -1619 | -890 | -73 | True |
| CANNIB | 0.2 | 1 | -1744 | -950 | -40 | True |
| CANNIB | 0.3 | -35 | -1869 | -1010 | -8 | True |
| CANNIB | 0.4 | -71 | -1994 | -1070 | 25 | True |
| NEW_TO_CAT | 0.2 | -36 | -1808 | -1114 | -40 | True |
| NEW_TO_CAT | 0.4 | -20 | -1781 | -1044 | -40 | True |
| NEW_TO_CAT | 0.67 | 1 | -1744 | -950 | -40 | True |
| NEW_TO_CAT | 0.8 | 11 | -1727 | -904 | -40 | True |
| NEW_TO_CAT | 1.0 | 26 | -1700 | -835 | -40 | True |
| CAC_PAID | 400 | -10 | -1762 | -950 | -40 | True |
| CAC_PAID | 500 | 1 | -1744 | -950 | -40 | True |
| CAC_PAID | 700 | 22 | -1708 | -950 | -40 | True |
| CAC_PAID | 900 | 42 | -1672 | -950 | -40 | True |
| CAC_PAID | 1200 | 73 | -1618 | -950 | -40 | True |
| T_FEES_CUST | 0 | -310 | -1744 | -1210 | 2 | True |
| T_FEES_CUST | 6 | -155 | -1744 | -1080 | -24 | True |
| T_FEES_CUST | 12 | 1 | -1744 | -950 | -40 | True |
| T_FEES_CUST | 18 | 156 | -1744 | -820 | -51 | True |
| T_FEES_CUST | 25 | 338 | -1744 | -668 | -60 | True |
| RUN_N | 4 | -75 | -1744 | -950 | -40 | True |
| RUN_N | 6 | -33 | -1744 | -950 | -40 | True |
| RUN_N | 8 | -12 | -1744 | -950 | -40 | True |
| RUN_N | 10 | 1 | -1744 | -950 | -40 | True |
| RUN_N | 12 | 9 | -1744 | -950 | -40 | True |
| MIGRATE_12M | 0.05 | -34 | -1804 | -1105 | -40 | True |
| MIGRATE_12M | 0.1 | -16 | -1774 | -1028 | -40 | True |
| MIGRATE_12M | 0.15 | 1 | -1744 | -950 | -40 | True |
| MIGRATE_12M | 0.25 | 35 | -1684 | -794 | -40 | True |
| MIGRATE_12M | 0.35 | 70 | -1624 | -639 | -40 | True |

### T11 Regulatory cost per order, ₹

| Item | Toing ₹99 | Core ₹700 |
|---|---|---|
| CoSS contribution (1.5% of revenue, cap 5% of rider pay) | 0.35 | 2.10 |
| Karnataka fee (cap) | 0.50 | 0.50 |
| As % of basket | 0.85 | 0.37 |
| CoSS if levied on customer-paid turnover (upper bound) | 1.74 | n/a |

## Appendix C: Assumption register

IDs and bases as commented in `model/toing_model.py`. A15 stands for the GST rates and A16 for the Karnataka fee cap, which are public inputs shown in the model header.

| ID | Inputs | Basis |
|---|---|---|
| A01 | T_AOV | item total; case title and C02 band; P2 may update |
| A02 | T_COMM | commission on Toing (core 17 to 25%; Swiggy: commissions "need to be different") |
| A03 | T_FEES_CUST | platform fee incl. GST; no delivery or packaging fee (MediaNama, Sep 2025); P1 may update |
| A04 | T_ADS | ads as % of item total (new app, thin ad load) |
| A05 | T_RIDER | rider payout incl. incentives per order (base Rs 20 to 35 + distance; C01) |
| A06 | INS | rider insurance per order |
| A07 | PG | payment processing, % of customer-paid total (UPI heavy) |
| A08 | SUP_FIX, REF_PCT | support per order + refunds % of item total |
| A09 | T_DISC | platform-funded discount per order; P1 may update |
| A10 | TECH | maps, SMS, cloud per order |
| A11 | T_AOV_MIX | Toing mix item total (meals mostly Rs 100 to 150) used for triangulation |
| A12 | OTHER_PI_LOSS_Q | Platform Innovations loss excluding Toing, per quarter |
| A12 | OTHER_PI_REV_Q | Platform Innovations revenue excluding Toing (Q4FY26 level) |
| A42 | P_DENSITY | probability the 6-month density gate is passed (used only for the option value) |
| A43 | RUN_MIN | minutes per Drop run (kitchen cluster pickup, one hand-off) |
| A44 | SOLO_ORDERS_HR | solo door deliveries a rider completes per hour |

## Appendix D: Glossary

| Term | Meaning |
|---|---|
| AOV | Average order value: gross order value divided by completed orders |
| GOV | Gross order value: value of completed orders including fees, taxes and packaging, before discounts |
| Contribution margin | Revenue less variable costs of an order, before overheads |
| Adjusted EBITDA | Earnings before interest, tax, depreciation and amortisation, adjusted as Swiggy defines it |
| Take rate | Swiggy revenue as a share of GOV |
| Toing | Swiggy's standalone app for meals from ₹49 to ₹150, launched August 2025 |
| Snacc | Swiggy's 10 to 15-minute snacks app, launched January 2025, shut February 2026 |
| Drop | A pickup point (hostel gate, PG lobby, office desk) served by a pooled rider run |
| Run | One rider trip that collects several meals for one Drop |
| Slot batching | Grouping two door orders into one trip inside a delivery window |
| Door fee | Fee charged when a Toing order is delivered to the door instead of a Drop |
| Toing Pass | Proposed ₹49 a month subscription for free Drop delivery |
| CAC | Customer acquisition cost: spend to acquire one new transacting user |
| LTV | Lifetime value: contribution a user generates over a horizon |
| Migration | A Toing user who begins placing ₹700-type orders on the core app |
| Trade-down | A core-app order replaced by a cheaper Toing order |
| Incremental share | Share of Toing users who are new to Swiggy or dormant |
| CoSS | Code on Social Security, 2020, in force 21 November 2025 |
| Platform Innovations | Swiggy's segment that houses Toing and other early-stage products |
| MTU | Monthly transacting users |
| WAU | Weekly active users |
| EDLP | Everyday low price: fixed low prices in place of coupons |
| NOV | Net order value: gross order value less discounts |
| Instamart | Swiggy's quick-commerce business |
| Eternal | Formerly Zomato, the market leader in food delivery |
| Rapido Ownly | Rapido's zero-commission food delivery service |
| Bolt | Swiggy's faster food delivery proposition inside the core app |
| 99 Store | Swiggy's flat-price value offer inside the core app |
| Flip point | Value of one input at which the rebuild and a shutdown have equal three-year results |
| Gate | A pre-set metric threshold at which the Board continues or shuts Toing |
| Tornado | Chart ranking inputs by the swing they cause in a result |
| Kill, Scale, Funnel, Rebuild | The four paths compared: shut Toing; grow it as it runs; run it as an acquisition funnel; rebuild it around the trip |

## Appendix E: Data conflicts and resolutions

| Topic | Conflict | Resolution |
|---|---|---|
| Core AOV | Case says about ₹700; Q1 FY27 figures imply about ₹500 | Case figure used on slides; conclusion tested at ₹500 (EBITDA ₹15.5 an order) |
| Toing footprint | Case: starting in Pune; Swiggy letter: about 50 cities | Case framing kept for the order economics; public scale cited as public |
| Toing loss split | Swiggy: spend "largely" on acquisition; our triangulation: two-thirds per-order | Shown as an estimate with a sensitivity grid in section 6 |
| Eternal margin basis | Eternal reports adjusted EBITDA on NOV (5.6%), Swiggy on GOV (3.1%) | Not compared directly; noted in section 13 |
| CAC | Analyst ranges ₹400 to ₹500 (Swiggy); snippet-only sources | Tested across ₹400 to ₹1,200; conclusion unchanged |
