
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
