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

