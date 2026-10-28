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

