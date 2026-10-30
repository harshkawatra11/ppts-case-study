## 9. One order, eleven steps: where a seller's ₹3,960 goes

**Answer.** We trace the representative order, a ₹3,960 handmade décor or textile item at 0.5 kg sold to an overseas buyer for $45 [A02], through eleven steps from listing to the seller's final contribution. In our model the seller keeps ₹640 of that ₹3,960 after accounting for returns, and ₹1,531 of the order's value is consumed by cost to serve before any return even happens [T2]. The paperwork, the freight and the chance of a return are the three places that value leaks; freight is the largest single line, but paperwork and the expected cost of a return together cost the seller almost as much as freight does. This section lays out the eleven steps as a service blueprint, reads T2 line by line, and splits the ₹1,531 cost to serve into its three components.

### 9.1 The service blueprint of one order

A service blueprint sets each step of the order against who performs it, what system records it and what it costs. We use it here, per the value stream mapping framework assigned to this section (section 3.7 of the plan), because the case names paperwork, freight and returns as the three places the process breaks for a small seller [C-E2, C-E3, C-E4], and a step-by-step map makes it possible to attach a rupee figure to each one instead of a general complaint.

| Step | What happens | Who acts | Cost or value touched (per order, base case) |
|---|---|---|---|
| 1 | Seller lists the item on a marketplace at $45 [A02], ₹3,960 at ₹88 to the dollar [A01] | Seller, platform | Price ₹3,960 [T2] |
| 2 | Platform takes its referral share on the sale | Platform | Fee ₹594, 15% of price [A06, T2] |
| 3 | Seller assembles or picks the item at its cluster cost | Seller | Product cost ₹800 [A04, T2] |
| 4 | Seller fills the export forms by hand, across the registrations, invoices, shipping bill and tax paperwork the case names, or pays an agent to do it | Seller, agent or customs house agent | 45 minutes of time at ₹150 an hour plus a ₹120 agent fee, ₹232 in all [A07, A08, A09, T2] |
| 5 | Seller books a direct parcel at the going small-parcel rate, since no seller alone can negotiate a bulk rate [C-E3] | Seller, courier or postal counter | Freight ₹1,000 for 0.5 kg [A05, T2] |
| 6 | The parcel is declared individually and risk-scored for examination | Customs | One of 10,000 declarations per 10,000 orders [T9] |
| 7 | The declaration, invoice and shipping bill are checked against the seller's incentive claims (duty drawback, RoDTEP, IGST refund) | Customs, GSTN, DGFT | Paperwork already counted in step 4 |
| 8 | The parcel transits and clears the destination country | Destination customs, postal or courier network | Held equal across lanes in the model [A25] |
| 9 | The parcel is delivered to the buyer | Carrier | Delivered value ₹1,334, price minus fee, freight, paperwork and product [T2] |
| 10 | The buyer may return the item; in our model this happens 20% of the time for a direct parcel [A10] | Buyer, carrier, customs | Expected return loss ₹2,132 if returned [T2] |
| 11 | The seller's books close on the order | Seller | Expected contribution ₹640 [T2] |

Eleven steps, and three actors beyond the seller: the platform, the carrier and customs. Only the platform touches the order before dispatch; the carrier and customs both touch it after dispatch, which is exactly where the case says the costs turn hidden [C-E3, C-E4]. Steps 4, 6 and 7 are all paperwork in different clothes: a form, a declaration or a claim. Step 10 does not happen on every order, but when it does, it costs more than the delivered value the order was ever worth, a point section 10.4 below sets out in full.

### 9.2 T2 read line by line

In our model, table T2 gives the full per-order account under today's direct parcel lane, in three scenarios. We reproduce it here and read every line.

| Line | bear | base | bull |
|---|---|---|---|
| price | ₹3,520 | ₹3,960 | ₹4,400 |
| fee | ₹528 | ₹594 | ₹660 |
| freight | ₹1,100 | ₹1,000 | ₹900 |
| admin | ₹300 | ₹232 | ₹188 |
| product | ₹900 | ₹800 | ₹750 |
| delivered | ₹692 | ₹1,334 | ₹1,902 |
| ret_loss | ₹2,390 | ₹2,132 | ₹1,950 |
| expected | ₹14 | ₹640 | ₹1,209 |
| cts | ₹1,758 | ₹1,531 | ₹1,337 |

[T2]

Price is the $40 to $50 retail price abroad [A02] converted at ₹88 to the dollar [A01]; the model holds the exchange rate fixed across scenarios, so the entire bear-to-bull spread in price comes from the retail-price assumption, not the rate. Fee is the platform's 15% referral share [A06], which moves in proportion to price. Freight is the direct parcel rate at 0.5 kg, ₹900 to ₹1,100 [A05]. Admin is paperwork time valued at ₹150 an hour [A08] plus an agent fee [A09]; at the base case, 45 minutes of paperwork [A07] cost ₹112.50 and the agent fee added ₹120, for ₹232.50 rounded to ₹232. Product is the cluster ex-works cost of the item, ₹750 to ₹900 [A04]. Delivered is what the order is worth to the seller if it is not returned: price minus fee, freight, admin and product, ₹1,334 in the base case. Ret_loss is what the order costs the seller if it is returned: in our model, a direct parcel return is either abandoned abroad, which loses the product plus both freight and admin legs, or brought home for clearance, which loses the inbound and outbound freight, the admin and the cost of bringing the parcel back while recovering the product; blending the two at an 80% abandonment share [A11] gives ₹2,132 in the base case. Expected is the probability-weighted outcome: delivered times the chance of no return, minus ret_loss times the chance of a return, at a 20% return rate [A10], giving ₹640. Cts, cost to serve, is the freight and admin the seller pays regardless of outcome plus the expected cost of handling a return, ₹1,531 in the base case; it excludes the product cost itself, which is cost of goods rather than cost to serve.

The bear case shows how thin the margin on a direct parcel already is: at a 22% return rate and a ₹900 product cost [A10, A04 bear], expected contribution falls to ₹14, close to a rounding error on a ₹3,960 sale. Even in the bull case, at an 18% return rate and the lowest paperwork and freight assumptions, the seller keeps only ₹1,209, less than a third of the order's retail price. In no scenario does a direct parcel pay the seller anything close to what the price tag suggests.

The bear-to-bull spread in expected contribution, ₹14 to ₹1,209, a range of ₹1,195, is wider than the base case's own contribution of ₹640 [T2]. That spread comes almost entirely from two inputs moving together: the return rate, 18% to 22% [A10], and the retail price, $40 to $50 [A02], since both admin and freight move only modestly across the three scenarios. A seller whose actual return rate sits nearer the bear end of CBIC's own cited range, 20% to 25% for e-commerce exports against under 5% for traditional exports [C11], is closer to the ₹14 outcome than to the ₹640 the base case reports, which is one reason the case's own framing, that the effort is often not worth the reward for a seller moving a handful of parcels a month [C-E2], reads as an accurate description of the bear case rather than an exaggeration of the base case.

The same nine lines recur, with different values, in T3 (the reformed parcel lane) and T4 (the consolidated warehouse lane), covered in full in sections 13 and 18. Holding the line items constant across all three lanes, price, fee, freight, admin, product, delivered, ret_loss, expected and cts, lets every later comparison in this report line up term for term rather than requiring a fresh account structure for each lane.

### 9.3 The cost-to-serve split

Cost to serve, ₹1,531 in the base case, splits into three parts: freight the seller pays on every order, paperwork the seller pays on every order, and the expected cost of handling a return, which lands on only some orders but lands hard when it does.

| Component | INR per order (base case) | Share of cost to serve |
|---|---|---|
| Freight | ₹1,000 [T2] | 65% |
| Paperwork and agent fee | ₹232 [T2] | 15% |
| Expected return-handling cost | ₹1,531 minus ₹1,000 minus ₹232 = ₹299 | 20% |

[T2, arithmetic on tagged figures]

Freight is the largest line in cost to serve, which is why a freight subsidy is the instinctive first answer to the case, and the obvious answer we argue against in section 2 (section 3.3). But freight is also the line hardest for a reform to change at the unit level without a fiscal cost the exchequer would carry forever on every parcel, since freight is a real payment to a real carrier. Paperwork, at ₹232, and the expected return-handling cost, at ₹299, together come to ₹531, more than half the size of the freight line itself, and both are costs the seller pays for process friction rather than for anything physically moving the parcel. This gap, more than freight, is where our recommendation starts: move the paperwork load from the seller to a cluster desk, and resolve returns closer to the buyer, before touching the freight line at all. The pooled rate card we propose in section 13 does eventually cut freight by 12% at the base assumption [A28], but it comes after the paperwork and returns levers in the reformed parcel's waterfall [T6], not before them.

The same split looks different once the seller moves to a different lane, and setting the three lanes side by side shows where each reform lever actually lands. T2 to T4 give the full line-by-line account for each lane; the row that matters most for this section is cost to serve itself.

| Lane | Freight | Paperwork and agent, or admin | Expected return-handling cost (cts minus freight minus paperwork) | Cost to serve |
|---|---|---|---|---|
| Today, direct parcel | ₹1,000 [T2] | ₹232 [T2] | ₹299 | ₹1,531 [T2] |
| Reformed parcel | ₹880 [T3] | ₹38 [T3] | ₹41 | ₹959 [T3] |
| Consolidated warehouse | ₹238 freight, plus ₹484 last mile and ₹396 fulfilment [T4] | ₹15 [T4] | not separable the same way; warehouse cts bundles working capital and write-off | ₹1,423 [T4] |

[T2, T3, T4, arithmetic on tagged figures]

Cost to serve falls from ₹1,531 to ₹959 between today's direct parcel and the reformed parcel lane, a fall of ₹572, or 37%, almost entirely from the paperwork line collapsing from ₹232 to ₹38 and the expected return-handling cost collapsing from ₹299 to ₹41 [T2, T3]; freight itself falls by only ₹120, the pooled rate card's share, inside that same ₹572. The warehouse lane's cost to serve, ₹1,423, sits between the two parcel lanes, but it is built from a different, longer list of cost lines, last-mile delivery, fulfilment, a consolidator margin and inventory write-off among them [T4], which is exactly why section 18 treats it as a separate lane requiring its own break-even test rather than a simple extension of the parcel lanes' logic.

A second way to read the same split is against time rather than rupees. Paperwork costs the seller 45 minutes of direct time at ₹150 an hour [A07, A08] before any agent fee is added, and that 45 minutes is time the seller cannot spend sourcing, producing or listing the next item. For a seller moving a handful of parcels a month, as the case describes [C-E2], 45 minutes per parcel is not a rounding error on a working day; at even ten parcels a month it is 7.5 hours, close to a full working day spent on forms rather than on the craft itself. The agent fee, ₹120 [A09], is what a seller pays instead to buy back that time, and both numbers disappear once the cluster desk files on the seller's behalf, which is the mechanism section 12 sets out. Neither the 45-minute paperwork time [A07] nor the ₹120 agent fee [A09] rests on a primary time study; both are team assumptions the case's own description of the barrier supports in direction, if not to the minute, and section 29's validation plan sets out how the pilot would measure both directly rather than continue to assume them.

Exhibit for the deck: the service blueprint table and the cost-to-serve split feed the slide 2 "where ₹3,960 goes" panel and the market tiles that foreshadow the paperwork-and-returns finding ahead of the recommendation (section 3.3).

## 10. Paperwork and returns, not freight, decide whether a parcel pays

**Answer.** Running a 5 Whys chain and an issue tree on why a direct parcel often fails to pay the seller leads past freight to paperwork and returns, and the T7 heat map confirms it: contribution turns negative within the ranges we modelled only when the return rate rises to 30% and freight to ₹1,400 together [T7]. Freight on its own, held at today's level, never turns the order loss-making in the range we modelled; a rising return rate does most of the damage by itself. The sharpest instance of this is a single returned parcel: bringing it home and clearing it costs more than the order was ever going to deliver for a low-value item like the representative ₹3,960 order [T2].

### 10.1 Five Whys on the direct parcel's thin margin

| Why | Question | Answer |
|---|---|---|
| 1 | Why the seller keeps only ₹640 of a ₹3,960 order [T2] | Because ₹1,531 of cost to serve and an expected return loss are both netted out of the price before the seller's contribution is counted [T2, A10]. |
| 2 | Why cost to serve runs to ₹1,531 | Because freight (₹1,000), paperwork (₹232) and the expected return-handling cost (₹299) are each paid in full, on every order, by the seller alone, with no pooling across orders or sellers [T2, section 9.3]. |
| 3 | Why the seller pays these alone | Because the case's barrier is structural: forms, portals and agents differ by route, and the effort is often not worth it for a handful of parcels a month, so no seller reaches the volume at which a carrier, a customs broker or a platform would negotiate on their behalf [C-E2]. |
| 4 | Why nothing has already pooled these costs | Because the unit of regulation and of commercial negotiation in the current system is the parcel and the seller, not the cluster; nothing aggregates many sellers' small volumes into one negotiating or declaring unit [C-E2, C-E3]. |
| 5 | Why a return costs so much more than a delivery | Because a returned parcel is treated as a fresh import under current rules [C-E4], carrying its own duties, forms and delays, so the seller pays customs cost twice, once going out and once coming back, while only being paid once. |

The fifth why is the one the case names directly as the biggest hidden cost [C-E4], and it is also the one our model shows costs the most relative to what it could ever recover, which section 10.4 below sets out in full.

The return-rate figure behind why 1 and why 5 is itself contested in the research, and we carry both readings rather than pick one. CBIC is cited as putting e-commerce export returns at 20% to 25%, against under 5% for traditional exports [C11], which is the figure the model's A10 assumption uses as its primary seed [A10]. A 2025 Lok Sabha reply from the Commerce Ministry instead gives a lower 15% to 20% range for the same statistic [C12]. Both are kept because neither this session's research nor the model's own checks could resolve which is current; what matters for the argument is that even the lower 15% to 20% range sits inside the top half of T7's return-rate rows, where contribution is already well below the no-return baseline, so the 5 Whys chain holds under either reading of A10.

### 10.2 Issue tree: why a parcel does not pay

An issue tree splits "a direct parcel often fails to pay the seller" into mutually exclusive, collectively exhaustive branches, per the MECE framework assigned to this section (section 3.7 of the plan).

| Branch | Sub-branch | Evidence |
|---|---|---|
| A. Price is fixed, cost is not | A1. Platform fee is a fixed 15% share [A06] | Not a lever at the unit level without renegotiating platform terms |
| | A2. Product cost is set by the cluster's ex-works price [A04] | Outside the scope of a customs or logistics reform |
| B. Cost to serve is too high | B1. Freight is unpooled, ₹1,000 a parcel [A05, T2] | Largest single line, but hardest to change without fiscal cost (section 9.3) |
| | B2. Paperwork is manual, ₹232 a parcel [A07, A09, T2] | Controllable through process redesign, not subsidy |
| | B3. Expected return-handling cost is ₹299 even before a return happens (section 9.3) | Driven by return rate and the cost of bringing a parcel home |
| C. A return, when it happens, costs more than it should | C1. A direct parcel return is treated as a fresh import [C-E4] | Duplicates customs cost on the same physical good |
| | C2. 80% of direct returns are abandoned abroad rather than brought home [A11] | The product and both freight legs are lost outright |
| | C3. The 20% brought home pay for clearance a second time | Clearance under general re-import rules costs ₹1,300 at base, even though a risk-based re-import module already exists for this [A12, C06] |

Branch A sits outside this reform's reach; it belongs to market access and platform negotiation, covered in sections 6 and 19 to 20. Branch B is where the cluster export desk and the pooled rate card act (sections 12 and 13). Branch C is where a pooled return point abroad and matched duty-free re-import act (section 17), with the honest caveat on their legal basis carried in section 13.3 and repeated here: no provision currently pools multiple sellers' re-imports into one bill [C57].

The tree is deliberately asymmetric in how much of the total uplift sits in each branch. Branch B's three sub-branches sum to the full ₹398 uplift from today's direct parcel to the reformed parcel lane [T6], while branch C's contribution runs through the same waterfall as the last of the three steps, worth ₹83 [T6]. Branch A carries no number at all in this model, because neither the platform fee nor the product cost moves between the direct, reformed or warehouse lanes; A06 and A04 are held fixed across all three [A04, A06]. A reader working from the issue tree alone should not expect it to balance evenly across its three branches; it balances against where the case itself places the barrier, which is overwhelmingly in branch B's paperwork and branch C's returns, not in branch A's pricing structure.

### 10.3 The T7 heat map, read in full

In our model, table T7 holds product and fee at the base case and lets return rate and freight both vary, to show what combination of the two actually turns a direct parcel loss-making for the seller.

| Return rate | ₹800 | ₹1,000 | ₹1,200 | ₹1,400 |
|---|---|---|---|---|
| 10% | ₹1,187 | ₹987 | ₹787 | ₹587 |
| 15% | ₹1,014 | ₹814 | ₹614 | ₹414 |
| 20% | ₹840 | ₹640 | ₹440 | ₹240 |
| 25% | ₹667 | ₹467 | ₹267 | ₹67 |
| 30% | ₹494 | ₹294 | ₹94 | −₹106 |

[T7]

Reading down any column shows that return rate alone is enough to erase the margin: at ₹1,000 freight, the column the base case uses, contribution falls from ₹987 at a 10% return rate to ₹294 at 30%, a drop of ₹693 from return rate alone, holding freight fixed [T7, arithmetic]. Reading across any row shows freight has a real but smaller effect: at a 20% return rate, moving freight from ₹800 to ₹1,400 costs the seller ₹600, close to the return-rate effect but only after freight moves across its entire plausible range, whereas the return rate CBIC itself cites for e-commerce exports, 20% to 25% [C11, A10], sits well inside the table without needing any extreme assumption at all. The single cell that turns negative, 30% return rate at ₹1,400 freight, at −₹106, needs both inputs at their worst simultaneously; freight alone at ₹1,400 with a 10% return rate still leaves the seller ₹587. The grid's message is that return rate, not freight, is the variable most likely to carry the order into loss on its own, within ranges the research lanes found cited for this sector.

### 10.4 A single return costs more than it recovers

The clearest instance of the point above sits inside T2 itself. If the representative order, a ₹3,960 handmade décor or textile item at 0.5 kg, is delivered and kept, the seller's delivered value is ₹1,334 in the base case [T2]. If that same order is returned, the expected loss is ₹2,132 [T2], which is ₹2,132 minus ₹1,334, or ₹798 worse than simply not having made the sale at all [arithmetic on T2]. In the bear case the gap is starker: delivered value is ₹692 against a return loss of ₹2,390, a difference of ₹1,698 [T2]. A single return on a low-value item like this one erases the margin and costs the seller more than the order would ever have earned.

The same comparison holds across every scenario the model runs, the base case included.

| Scenario | Delivered value if kept | Expected loss if returned | Gap, loss minus delivered |
|---|---|---|---|
| bear | ₹692 [T2] | ₹2,390 [T2] | ₹1,698 |
| base | ₹1,334 [T2] | ₹2,132 [T2] | ₹798 |
| bull | ₹1,902 [T2] | ₹1,950 [T2] | ₹48 |

[T2, arithmetic on tagged figures]

Even in the bull case, where product cost, paperwork and freight all sit at their most favourable assumption, a returned direct parcel still costs the seller slightly more than a kept one would have earned, ₹48 worse. The gap narrows sharply from bear to bull, which is consistent with branch C1 of the issue tree above: most of the bear-to-bull movement in the loss side comes from the abandonment share and the cost of bringing a parcel home [A11, A12], both of which improve in the bull case, while the delivered side improves for the unrelated reason that price and product cost both move favourably at the same time. The two sides of the comparison are driven by different assumptions, which is why the gap does not simply track the overall bear-to-bull spread in expected contribution.

This happens because a returned parcel pays customs cost twice over, once on the way out and again, under general re-import rules, on the way back [C-E4, C06], while the seller is paid only once, by one buyer, for one item. The implication for a reform is specific and narrow: resolving returns must happen as close to the buyer as possible, before the parcel re-crosses the border, because bringing a low-value item like this one home to India and clearing it again almost never recovers more value than it costs. Sections 13 and 17 build the pooled return point abroad on exactly this logic, with the honest caveat that its legal basis does not yet exist and must be sought from CBIC and DGFT rather than assumed.

The abandonment share in the model, 80% of direct returns abandoned abroad [A11], is itself evidence of the same arithmetic playing out in seller behaviour rather than policy design. A seller facing a ₹798 gap between what a kept order is worth and what a returned order costs [T2, section 10.4] has every reason to write the item off rather than pay to bring it home, and the case says as much directly: many sellers absorb the loss or avoid exporting altogether [C-E4]. Our reform does not try to change that incentive by making the home-clearance route cheaper; it changes it by giving the seller a third option, a pooled point abroad where the item can be resold without ever needing to justify the cost of a trip home. CBIC's own risk-based re-import framework, which replaced the older consignment-wise verification for returned goods from 1 April 2026 [C06], already cuts the cost of the home-clearance route somewhat; our proposal is additive to it, not a substitute, for the share of returns that do travel home under the pooled model's monthly consolidation.

Exhibit for the deck: the T7 heat map is slide 3's integrity and cost heat map; the single-return finding anchors the moneyshot card's note on why freight alone will not fix this (section 3.3, insight 7 of section 3.6).

## 11. Conclusively, a portal, a subsidy or an exemption each fail one test the committee cannot waive

**Answer.** We scored six options, including our own, against five weighted tests: seller cost per order, customs and tax integrity, fiscal cost, time to deliver and whether the option builds on the 2026 reforms already in place. Our package, a cluster export desk with seller tiers, pooled rates and pooled returns, scores 4.45 weighted against a next-best of 2.95 for overseas warehouses in every cluster; under equal weights the gap holds, 4.40 against 2.80 [T13]. Every score in this table is our own judgement, not a measured outcome, and we say so here rather than let the committee discover it on its own.

### 11.1 The option filter under both weightings

A MECE option filter scores every candidate against the same criteria, so the ranking cannot be an artefact of which criterion happened to be emphasised for one option and not another (the framework assigned to this section, section 3.7 of the plan). We score five criteria out of 5, weight them as shown, and also report the unweighted, equal-weight average for the same scores, so the ranking can be checked against a second, simpler rule.

| Option | Seller cost per order (30%) | Customs and tax integrity (25%) | Fiscal cost, 5 = cheapest (15%) | Time to deliver (15%) | Builds on the 2026 reforms (15%) | Weighted | Equal weights |
|---|---|---|---|---|---|---|---|
| New single-window export portal | 3 | 3 | 2 | 1 | 2 | 2.40 | 2.20 |
| Freight subsidy per parcel | 4 | 2 | 1 | 4 | 1 | 2.60 | 2.40 |
| Exempt low-value parcels from checks | 4 | 1 | 4 | 4 | 1 | 2.80 | 2.80 |
| Government export marketplace | 2 | 3 | 2 | 1 | 2 | 2.10 | 2.00 |
| Overseas warehouses for every cluster | 3 | 4 | 2 | 2 | 3 | 2.95 | 2.80 |
| Cluster desk, seller tiers, pooled rates and returns | 5 | 4 | 4 | 4 | 5 | 4.45 | 4.40 |

[T13]

The ranking is identical under both weighting schemes: our package first, overseas warehousing second, tied with the exemption option under equal weights at 2.80 each, and the government export marketplace last. This matters because weighting choices are the easiest part of a scoring exercise to contest; a committee member who disagrees with our 30% weight on seller cost can still check the equal-weight column and see the same order, with our package 1.60 points ahead of the next candidate either way.

We disclose plainly that these scores are the team's own judgement, not an independently measured outcome, per the content-integrity rule governing this exact table. No pilot, survey or third party scored these six options; we built the criteria from the case's own stated tests, feasibility and integrity under the 2026 reforms already in place [C-J3, C-E5], and scored each option against them as a team. A reader should treat the numbers as a structured argument for why our package beats the alternatives on the dimensions the brief itself names, not as a result anyone could reproduce from an external dataset.

Two features of the table are worth naming because they are easy to miss in a single read. First, our package is the only option that scores a 5, the maximum, on any criterion, and it does so on two: seller cost per order and whether the option builds on the 2026 reforms. The seller-cost 5 follows directly from the model, which shows the reformed parcel lane adding ₹398 to the seller's contribution with no freight subsidy at all [T5, T6]; no other option in the table changes seller cost by a modelled, cited figure of this kind, so the scores for the other five options on this criterion are comparative judgements, not outputs of a parallel model run for each one. Second, every option other than ours and overseas warehousing scores a 1 or 2 on "builds on the 2026 reforms," which reflects a real asymmetry: a new portal, a subsidy, an exemption and a government marketplace are each designed as though the courier cap removal, the returns module and the exporter-on-record framework [Lane C] had not already happened, while our package and overseas warehousing are both built to operate inside those reforms rather than around them.

### 11.2 What each criterion weighs and why

| Criterion | Weight | Why this weight |
|---|---|---|
| Seller cost per order | 30% | The case's core ask is to make exporting affordable for a seller moving a handful of parcels a month [C-E2]; this is the largest weight because it is the test closest to the case's own stated problem |
| Customs and tax integrity | 25% | The case states that authorities cannot simply relax controls [C-E5]; an option that scores well on cost but poorly here fails the brief's own second half |
| Fiscal cost | 15% | A reform the exchequer cannot sustain indefinitely is not a reform; this penalises options whose benefit is a recurring subsidy rather than a one-time process fix |
| Time to deliver | 15% | A pilot-ready option scores higher than one requiring new legislation or a multi-year system build |
| Builds on the 2026 reforms | 15% | The committee has already removed the courier cap and built the returns and exporter-on-record routes (Lane C); an option that duplicates or ignores this work wastes the reform already done |

### 11.3 Why each alternative option fails at least one test

| Option | Fails on | Why |
|---|---|---|
| New single-window export portal | Time to deliver (1 of 5) | A new portal duplicates ICEGATE, ECCS, the DNK network and DGFT's own systems rather than using them, and a system build of this kind runs for years before a seller sees it; it also scores only 2 on fiscal cost, since a new system is a standing cost on top of every system it duplicates |
| Freight subsidy per parcel | Customs and tax integrity (2 of 5) and fiscal cost (1 of 5) | A subsidy attacks only the freight line, ₹1,000 of the ₹1,531 cost to serve [T2], and does nothing for paperwork or returns; it is also a payment the exchequer makes on every parcel forever, with no mechanism to taper it as a seller's risk profile improves |
| Exempt low-value parcels from checks | Customs and tax integrity (1 of 5) | An exemption below a value line is the precise misuse channel the case warns against: under-invoicing and incentive misuse become easiest exactly where checks are lightest [C-E5]; this option scores the strongest fiscal-cost and time-to-deliver marks of any alternative, which is why it is the hardest obvious answer to argue against on cost grounds alone, but it cannot pass the integrity test the brief itself sets |
| Government export marketplace | Seller cost per order (2 of 5) and time to deliver (1 of 5) | Building and running a government-operated marketplace competes with, rather than improves, the private platforms sellers already use, and does nothing by itself about freight, paperwork or returns on an order placed through an existing channel |
| Overseas warehouses for every cluster | Builds on the 2026 reforms only partially (3 of 5) and fiscal cost (2 of 5) | This is the strongest alternative, and the only one that beats today's direct parcel at the unit level in our model, from about 10 orders a month per SKU [T12]; but it never beats the reformed parcel at the unit level in any scenario we modelled [T5, T12], and it requires inventory risk and working capital a seller moving a handful of parcels a month does not have [C-E2] |

The exemption option is worth pausing on, because it scores a respectable 2.80 under both weightings, second only to overseas warehousing, and higher than the portal, the subsidy or the marketplace. It fails on exactly one criterion, integrity, at the minimum score of 1 of 5. That single failure is disqualifying rather than a mere drag on the average, because the case frames integrity and access as one problem, not two to be traded against each other [C-E6]: too much control keeps small sellers out, too little control opens the door to misuse. An option that buys access by giving up control answers only half the brief.

The freight subsidy is worth a second look for the opposite reason: it is the option closest in spirit to what an exporter would ask for directly, cash to offset a real cost, and it scores a strong 4 of 5 on time to deliver, since paying a subsidy requires no new filing system and no new customs provision. But a subsidy only ever treats the ₹1,000 freight line [T2], leaving the ₹232 paperwork line and the ₹299 expected return-handling cost untouched (section 9.3), and every rupee of it is a recurring fiscal commitment with no mechanism to taper off as a seller's own risk record improves, which is why it scores only 1 of 5 on fiscal cost, the joint-lowest score any option receives on any criterion in the table alongside the exemption option's integrity score.

The government export marketplace scores worse than the portal on seller cost per order, 2 against 3, because it does more than duplicate an existing filing system; it also inserts a new intermediary between the seller and the buyer, competing for the same transaction the seller's existing platform already carries. A seller who already lists on a private marketplace gains nothing from a second, government-run listing channel unless that channel can also fix the paperwork, freight and returns problems this report traces through T2, and nothing in the case or in the research found suggests a government marketplace would carry lower platform fees, cheaper freight or a different returns regime than the private platforms already in use [C-R1]. The marketplace option's lowest score, 1 of 5 on time to deliver, follows the same logic as the portal's: building and populating a new transaction platform from nothing takes years, while the reforms already in place from 2026 took effect within months of being notified [C01, C17].

A fair reading of the table also has to say what our own package would need to go wrong for a different option to look better. If the pooled rate card's real-world saving turned out close to zero rather than the 5% to 18% range modelled [A28], our package's seller-cost score would still rest on the ₹195 paperwork step alone (section 12.4), which by itself already exceeds the freight subsidy's entire effect on the ₹1,000 freight line. The scenario in which overseas warehousing would overtake our package is narrower still: only a seller already selling at least 10 orders a month per SKU benefits from the warehouse lane at the unit level against today's parcel, and never against the reformed parcel at all [T12], so warehousing's apparent strength in the option table (section 11.1) is really a strength for a minority of established sellers, not for the case's stated target of a seller moving a handful of parcels a month [C-E2].

Exhibit for the deck: the T13 table, both weightings, is slide 2's "CONCLUSIVELY" option heat matrix (section 3.2); the per-option failure table backs the matrix's footnote referencing the appendix.

## 12. The cluster export desk takes the paperwork off the seller

**Answer.** The cluster export desk is a staffed counter, placed at or near a Dak Ghar Niryat Kendra or a district export hub, that files one pre-filled export declaration per order from the seller's own order data, so the seller no longer fills forms by hand or pays an agent for routine paperwork. In our model this single change, assisted filing in place of the seller's own 45 minutes plus an agent fee [A07, A09], is worth ₹195 of the ₹398 total uplift from today's direct parcel to the reformed parcel lane [T6]. The desk files; it does not clear goods, set duty or override a risk score, because customs retains that authority at every tier.

### 12.1 Desk design and staffing

In our model the pilot budgets six desks, one per cluster, each with four staff for twelve months [T10]. We set the design around four roles, because the paperwork the case names, registrations, invoices, shipping bills, customs declarations and tax paperwork across several offices and portals [C-E2], splits naturally into four jobs: intake, filing, dispatch coordination and incentive tracking.

| Role | What the role does | Linked to |
|---|---|---|
| Intake officer | Registers a new seller's identity documents, IEC, GSTIN or GST-exempt status, Udyam or artisan ID, at onboarding, and photographs and catalogues items for listing | Tier 1 entry requirements (section 3.5) |
| Filing officer | Pulls order data from the platform, pre-fills the single export declaration, and submits it on the relevant portal for each order | The ₹195 paperwork step [T6] |
| Dispatch coordinator | Books the parcel against the pooled rate card for the cluster, hands it to the chosen carrier, and tracks it to delivery | Section 13's pooled rate card |
| Incentive and records officer | Matches each order's payment realisation, eBRC and GST filing against the declaration so an incentive claim releases only on a matched record | Tier promotion and demotion rules (section 3.5), and the incentive-matching control in section 16 |

The desk sits within the reach of the 1,013 Dak Ghar Niryat Kendras already operating across 762 districts [C28, C29], rather than building a new site, because the case asks for a workable reform, not a new building programme, and the DNK network already has the hub-and-spoke structure postal exports use. Where a cluster is better served by a District Export Hub under the Districts as Export Hubs initiative [C31, C32], the desk sits there instead; either way, the desk is additive to an existing government facility, not a parallel one.

The pilot's six clusters are chosen for product-type spread rather than for geographic convenience alone, because a desk built around one product's paperwork pattern should still work for a different one before the reform scales nationally. Jaipur, Moradabad and Varanasi are named directly in the case as clusters of artisans, weavers and home-based producers [C-B2], and each carries a distinct paperwork profile: Moradabad's brassware is a metal-craft export with its own HS classification and packaging norms, Varanasi's Banarasi silk carries a textile GI tag that some buyers specifically request on the invoice, and Jaipur's handicrafts span several product categories under one Town of Export Excellence designation [B41, B43, B44]. Kutch's embroidered textiles and Channapatna's wooden toys add two more distinct product and packaging profiles to the pilot, and a north-eastern cluster, cane and bamboo goods from Tripura or a comparable state, tests the desk model furthest from the other five, both in distance from Delhi and in the export documentation a cane or bamboo product requires relative to a textile or metal one [PLAN section 6, Lane B]. A desk design validated only on textiles risks missing a packaging or classification step that only shows up on a different product; six clusters across six product archetypes are the minimum spread needed to find that out during the pilot rather than after it scales.

### 12.2 The desk and the seller tiers

The filing officer and the incentive and records officer are the two roles that connect the desk's day-to-day work to the three seller tiers set out in section 3.5. A tier 1 seller, new to export, gets every parcel declared and risk-scored with higher random examination, and the desk files for that seller at no charge, which is the ₹120 agent-fee saving inside the ₹195 waterfall step (section 12.4). A tier 2 seller, established after 25 clean parcels or three months with a full payment-realisation match and no discrepancy [section 3.5], still has every parcel filed through the desk, but the desk's incentive and records officer can batch that seller's monthly incentive claim rather than filing it order by order, since the seller's own record already shows a clean payment-realisation history. A tier 3 seller, trusted after twelve months clean and one physical verification, still files through the desk for every parcel, because the recommendation never removes a parcel from the declared count regardless of tier; what changes with tier is the random-examination rate the risk engine applies and how often an incentive claim is batched, not whether the desk or customs sees the parcel at all.

This is also why the desk's data-link role matters beyond convenience. The desk is the one point in the cluster that sees every seller's order, invoice, payment-realisation and return record in one place, which is exactly the record a tier promotion or demotion decision needs. Lane C's research found that the CBIC's Liberalised MSME AEO Package already shortens processing for AEO Tier 1 and Tier 2 applicants holding a valid MSME certificate [C46], and that AEO applications for every tier are filed online through a single portal [C48]; whether an existing AEO category can simply absorb our proposed tier 3, rather than requiring a new classification, is a question Lane C flags as unresolved on documentary thresholds [C47] and one the pilot's independent evaluator should test directly against a seller's actual record rather than assume either way.

### 12.3 What the desk may and may not do

| May do | May not do |
|---|---|
| Pre-fill the export declaration from the seller's order, invoice and shipping data | Grant customs clearance or release of goods; that stays with the customs officer and the risk engine |
| Photograph, catalogue and onboard a seller's listing | Set or waive duty, or decide a seller's tier outside the published entry and demotion rules (section 3.5) |
| Book freight against the cluster's pooled rate card | Negotiate or alter customs valuation; the declared value is the seller's own, checked by the risk engine like any other declaration |
| Track a seller's payment realisation and eBRC status for incentive matching | Release an incentive or GST refund itself; it submits the matched claim to the agency that actually pays it |
| Record discrepancies for the tier system | Waive a discrepancy finding; any flagged mismatch goes to the risk engine on its own terms |

This split matters because the case's own warning, that too little control opens the door to misuse [C-E6], applies as much to a well-meaning desk as to any other actor in the chain. A desk that could itself clear goods or waive a check would simply relocate the misuse risk from the seller to the desk; keeping clearance, valuation and incentive release with customs and the paying agencies means the desk removes only the mechanical burden of filing, not the substance of the check.

The same split answers a concern a committee reading this report is likely to raise directly: whether giving a desk access to every seller's order and payment data in one place creates a new single point of failure for fraud. The honest answer is that it creates a new single point of visibility, which is a different thing. The desk's incentive and records officer sees more about a seller's pattern of orders, returns and payment realisation than any single customs post sees on one parcel today, because today's system assesses each parcel on its own, with no cluster-level view linking one seller's twelve parcels in a month into one picture. That same visibility is what lets the risk engine score a seller rather than only a parcel, which section 15 develops as the core mechanism behind the three-tier system; the desk is the place that record is assembled, not the place that acts on it. Access to the data link itself, covering IEC, GSTIN, Udyam and eBRC records [T10], sits with the desk's incentive and records officer under the same audit trail customs already applies to any other declarant, so a discrepancy in the desk's own filing pattern would surface the same way a seller's discrepancy would.

### 12.4 The ₹195 paperwork step in the waterfall

In our model, table T6 sets out the sequence from today's direct parcel to the reformed parcel lane. The first step, and the largest, is the move from the seller's own paperwork to the desk's assisted filing.

| Step | INR per order |
|---|---|
| Today, direct parcel | ₹640 |
| Paperwork at the cluster desk | ₹195 |
| Pooled rate card | ₹120 |
| Returns pooled abroad | ₹83 |
| Reformed parcel lane | ₹1,038 |

[T6]

The ₹195 figure comes from cutting paperwork time from 45 minutes to 15 minutes [A07, A27] and removing the ₹120 agent fee entirely, since the desk files for free at tier 1 (section 3.5), leaving admin at ₹37.50, a fall of ₹195 from the base case's ₹232.50 [A07, A09, A27, T2, T3]. It is the single largest step in the waterfall, close to half the total ₹398 uplift, which is why the desk is the first lever in the recommendation rather than the pooled rate card or pooled returns. A07 and A27, the minutes of paperwork before and after the desk, and A09, the agent fee the desk removes, stay labelled as team assumptions, since no primary time study of seller paperwork exists; the validation plan in section 29 sets out how the pilot measures them directly rather than assumes them.

The four roles and six desks are a pilot-scale design, not a finished national blueprint. Section 25 sets out how the pilot's 2,400 sellers across the six clusters, 400 per cluster, test whether four staff per desk is enough at the order volumes a cluster the size of Jaipur or Moradabad would actually generate once more sellers enroll, and section 26's scale gates decide whether staffing as well as budget needs to grow before the model extends beyond these six clusters to the wider set of Towns of Export Excellence and export hubs the case implies a national reform would eventually reach [C31, C32].

Exhibit for the deck: the desk's role table and the ₹195 waterfall step feed slide 4's compact and pilot panel, and slide 2's access-levers card (section 3.2).

## 13. A pooled rate card and a pooled return point abroad cut the cost of each parcel

**Answer.** A pooled rate card lets one cluster's sellers tender their combined freight volume to carriers as a single buyer, rather than each seller negotiating alone at the going small-parcel rate; in our model this is worth ₹120 of the ₹398 uplift from today's direct parcel to the reformed parcel lane [T6], and it is also the single most uncertain lever in the model, the largest bar on the tornado chart [T8]. A pooled return point abroad, where returned parcels from many sellers in a cluster are collected and resolved before any of them re-cross the border, is worth a further ₹83 [T6], but we say plainly here that no legal basis currently exists for pooling multiple sellers' re-imports into one monthly bill: this is a policy ask we would take to CBIC and DGFT, not a mechanism already permitted under Indian customs law.

### 13.1 Tender design and competition guardrails

The rate card is built the way any pooled-buyer freight tender is built: the cluster desk aggregates the freight volume of every enrolled seller, sets a minimum service specification, invites bids from more than one carrier, and awards against a published scorecard rather than a single negotiated deal. We design three guardrails against the obvious risk of this kind of pooling, provider capture, where one carrier locks in the cluster's whole volume and then has no competitive pressure to hold its rate down.

| Guardrail | What it does |
|---|---|
| Multi-carrier award | The tender splits the cluster's volume across at least two carriers rather than awarding it all to one, so no single provider becomes indispensable to the desk |
| Fixed-term re-tender | The rate card is re-tendered on a fixed cycle rather than rolled over automatically, so a carrier cannot coast on an incumbency advantage |
| Published scorecard | Carrier performance, on-time delivery, damage rate and complaint volume, is tracked and published to the compact's monthly scorecard (sections 3.4 and 20), so a carrier's share of future volume depends on a measured record, not a relationship with desk staff |

No confirmed Indian precedent exists yet for a cluster-level, pooled-rate freight tender of this kind. The closest adjacent schemes found in the research are the Logistics Interventions for Freight and Transport scheme, which reimburses part of an MSME's freight cost from premises to a cargo hub rather than pooling a rate card [D37], and an Aramex-FIEO memorandum of understanding to support MSME exporters, which carries no published pooled-rate figures [D38]; no cluster-level or collective freight tender run by an Indian exporter cluster, export promotion council or government body was found in this research pass [D39]. We treat A28, the rate-card saving, as an assumption the pilot must test rather than a figure with an existing comparable to cite, and the next sub-section shows why that uncertainty matters more for this lever than for any other input in the model.

The carriers a cluster tender would invite are the same ones a seller already uses one parcel at a time: India Post's own international tracked service, and courier aggregators and operators such as Shiprocket X, DHL Express, Aramex and FedEx [D13, D15, D17, D18, D19]. None of these carriers' own published rate pages gave a clean, dated 0.5 kg India-to-destination figure that this research could independently confirm, and the aggregator quotes that were found conflict with each other even for the same carrier and route, for instance two figures from the same aggregator for DHL Express to the United States at 0.5 kg eight months apart [D15, D16]. That conflict is itself part of the case for pooling: a seller shopping these rates alone, one parcel at a time, faces exactly the kind of noisy, unverifiable pricing the research lanes ran into, while a cluster desk negotiating one tender for its whole cluster's volume can require a carrier to quote, and hold, one dated rate card rather than a changeable retail price.

### 13.2 The A28 rate-card saving is the model's largest uncertainty

Table T8 moves every input in the model to its bear and bull value, one at a time, holding everything else at base, and ranks the inputs by how much each one swings the ₹398 uplift from today's direct parcel to the reformed parcel lane.

| ID | Input | At bear | At bull |
|---|---|---|---|
| A28 | Pooled rate-card saving on direct parcel freight | −₹70 | +₹60 |
| A07 | Minutes of seller paperwork per direct parcel | +₹38 | −₹25 |
| A09 | INR agent or CHA fee per direct parcel | +₹30 | −₹20 |
| A27 | Minutes of seller paperwork with the cluster desk | −₹25 | +₹12 |
| A31 | Share of direct returns routed to the pooled return point abroad | −₹14 | +₹14 |

[T8, top five rows]

A28 is the longest bar in both directions, a ₹130 span from −₹70 to +₹60, wider than any other input in the model, including the two paperwork assumptions behind the largest single waterfall step in section 12. This is why the pilot design tests the rate card first, as section 23 sets out: if the real-world saving on a cluster tender turns out closer to the bear value of 5% than the base value of 12% [A28], the whole uplift narrows, though it does not disappear, since A07, A09 and A27 together are worth more than A28 even at its bull value. A committee asked to back one lever with the most scrutiny before scaling the pilot should pick this one.

### 13.3 Returns flow and the legal basis we are asking for

The returns side of the reformed lane works like this: a returned parcel is routed either to a pooled return point abroad, shared by multiple sellers in the same cluster, or it is abandoned, exactly as happens today. At the pooled point, a returned item that can be resold locally is resold there, recovering its value without ever re-crossing the border; an item that cannot be resold is consolidated with other unsold or returned stock from the same cluster and brought home once a month, under a single matched duty-free re-import bill, rather than the parcel-by-parcel re-import process a direct return uses today.

| Step | Today | Proposed | Legal status |
|---|---|---|---|
| Return is initiated | Treated as a fresh import on arrival, consignment-wise [C-E4] | Routed to a pooled return point abroad, shared across sellers in a cluster | No CBIC or DGFT provision currently covers a shared return point across sellers; this is new ground |
| Resold items | Not applicable; a direct parcel return is not resold abroad today | Resold at the pooled point, recovering value without re-import | Operationally similar to an existing 3PL return-processing service; no customs provision specific to pooling is required here, since nothing re-crosses the border |
| Unsold items | Each returned parcel files its own re-import, invoice and AWB pair, under Notification 45/2017-Customs as amended by Notification 08/2026-Customs [C06, C09] | Consolidated with other unsold stock from the same cluster and brought home on one monthly bill | No legal basis found: existing re-import law is written consignment-wise, one export invoice and one AWB per re-import [C57]; no CBIC, DGFT or Customs Act provision authorises pooling multiple sellers' re-imports into one bill |
| Benefit neutralisation | Export incentives claimed on the original sale must generally be reversed on a genuine-commercial-reason return within three years of export, extendable to five with approval [C09] | Same reversal rule applies per seller per item; pooling the physical shipment does not change whose incentive gets reversed | Reversal mechanism already exists [C09]; only the pooling of the physical re-import, not the benefit-reversal logic, is the open legal question |

We looked for a comparable mechanism elsewhere before concluding this gap is real. CBIC's own risk-based re-import framework, and the ECCS Return Module built for courier returns and rejects, both exist and both reduce the paperwork on a single returned parcel [C06, C07]; neither extends to pooling several sellers' returns into one declaration. Amazon's own FBA and Global Selling documentation describes free storage and a cross-border "SEND" option for outbound inventory to its overseas fulfilment centres, but no Amazon page describes a consolidated bulk-return shipping route back to a seller's home country for returned stock, and the one forum post touching the question suggests returns may route to a different country's fulfilment centre rather than home, which is not the mechanism we propose [C58]. The honest conclusion of both checks is that the pooled-return-point-abroad and single-monthly-re-import-bill mechanism, A29 and A31 in our model, is not yet permitted anywhere we found in Indian law or in a private-sector analogue we could point to.

We present it, therefore, as a policy ask the compact in section 20 would take to CBIC and DGFT: a new, explicit provision allowing a registered cluster desk or exporter-on-record to file one consolidated re-import bill for pooled, unsold returns from multiple sellers in the same cluster, keeping the existing per-item benefit-reversal rule intact. Until that provision exists, the ₹83 step in T6 and the A29 and A31 assumptions behind it are a modelled target for what the ask is worth, not a benefit any seller can claim today. The pilot in section 25 can test the resale and consolidation logistics now, under existing rules, item by item, while the policy ask for the consolidated bill proceeds in parallel; what the pilot cannot do is pool the actual customs filing before the provision exists.

We flag this gap plainly for a reason beyond honesty for its own sake: a committee that adopts our recommendation without reading this far could mistake the ₹83 step for an operational detail rather than a legislative one, and could tell a seller in the pilot that pooled, duty-free re-import is already available when it is not. The two items that stay true regardless of whether CBIC and DGFT grant the ask are the resale-abroad mechanism, which needs no new provision because nothing re-crosses the border, and the per-item benefit-reversal rule, which already exists and does not change under our proposal [C09]. Only the single consolidated bill of entry for pooled, unsold stock is new ground, and it is the one piece of the reformed parcel lane's ₹1,038 contribution that depends on a decision outside this report's control.

Exhibit for the deck: the tender guardrails and the A28 tornado bar feed slide 3's returns panel and the appendix's A2 tornado slide; the legal-status table is the source for slide 3's returns-flow caption, which must read "not yet permitted, a policy ask for the compact" rather than imply existing legal cover, per the Lane C finding logged in the build record.
