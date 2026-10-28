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
