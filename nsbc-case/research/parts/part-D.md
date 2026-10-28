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

