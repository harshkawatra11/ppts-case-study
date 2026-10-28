# Model tables (hash fc66d11096)

### T1 Assumptions register

| ID | Base | Bear | Bull | Unit | Basis |
|---|---|---|---|---|---|
| A01 | 4 | 4 | 4 | months | Measurement on 31 Jan 2027, four months after the 30 Sep 2026 snapshot; programme runs 2 Nov 2026 to 31 Jan 2027 (13 weeks) |
| A02 | 0.1474 | 0.1459 | 0.1484 | share | Business-as-usual activation rate at measurement: flat at the Sep 2026 level (14.70% Sep 2025 to 14.74% Sep 2026, Exhibit 1); bear drifts 15 bps down, bull 10 bps up |
| A03 | 6324 | 6324 | 6324 | accounts a month | Net account growth, (8,09,746 minus 7,33,855) / 12, Exhibit 1 |
| A05 | 0.01 | 0.01 | 0.01 | share | Organic first-order rate among idle accounts over 13 weeks without any message; used only to size the holdout test (team estimate) |
| A10 | 0.5 | 0.55 | 0.45 | share | Share of idle accounts with no qualifying activity for 24 months, flagged inactive under the Oct 2024 exchange circular (the case's own term is dormant [C-D4]) (lane D, lane C) |
| A11 | 0.5 | 0.42 | 0.58 | multiplier | Conversion of a flagged account relative to an unflagged one, after re-KYC or video IPV; bank branches can do in-person verification (lane D) |
| A20 | 0.55 | 0.45 | 0.62 | share | Salary customers who open the parent bank's app in a month (lane F) |
| A21 | 0.08 | 0.06 | 0.1 | share | Tap-through on the salary-day card over three salary credits (lane F benchmarks for in-app cards) |
| A22 | 0.32 | 0.26 | 0.38 | share | First executed exchange order within the window after a tap, with single sign-on and a bank mandate (lane F, lane E) |
| A23 | 0.6 | 0.5 | 0.68 | share | Idle accounts reached through any owned channel with consent: bank app tile, email, statement, WhatsApp, SMS (lane F) |
| A24 | 0.04 | 0.03 | 0.05 | share | Tap-through on the account rediscovery message or tile (lane F) |
| A25 | 0.25 | 0.2 | 0.3 | share | First executed order after rediscovery (lane F) |
| A26 | 1.0 | 0.8 | 1.15 | multiplier | RM coverage multiplier on the base pattern: Prestige 80%, Elite 60%, Elevate 60%, Preferred 35% of idle clients get a review conversation in the window (lane B) |
| A27 | 0.15 | 0.11 | 0.19 | share | First executed order after an RM review conversation (lane B, lane E) |
| A28 | 0.5 | 0.42 | 0.56 | share | Idle accounts reached in Dhanteras and Diwali week (6 to 8 Nov 2026) through owned channels (lane G) |
| A29 | 0.03 | 0.022 | 0.04 | share | Tap-through on the factual gold ETF and Muhurat session notice (lane G, lane F) |
| A30 | 0.3 | 0.25 | 0.35 | share | First executed order after the tap (lane G) |
| A31 | 40 | 30 | 50 | sessions | Workplace financial-education sessions at employers that run salary accounts with the parent bank (lane B) |
| A32 | 120 | 100 | 140 | attendees | Attendees a session (lane B) |
| A33 | 0.1 | 0.07 | 0.13 | share | First executed order within the window among idle attendees (lane E) |
| A35 | 0.7 | 0.6 | 0.78 | share | Warm cohort (last trade 9 to 12 months ago) reached with a servicing message (lane F) |
| A36 | 0.2 | 0.15 | 0.25 | share | Incremental re-trade among the reached warm cohort, above business as usual (lane E) |
| A39 | 0.1 | 0.07 | 0.13 | share | Lift in 90-day first-order rate for accounts opened in the window, from guided onboarding (lane E, lane H) |
| A50 | 0.35 | 0.35 | 0.35 | share | Idle accounts with a WhatsApp opt-in (lane F) |
| A51 | 0.4 | 0.4 | 0.4 | rupees a message | Blended WhatsApp Business price, two utility (₹0.115) and one marketing (₹0.8631 from 1 Jan 2026) template a person is ₹0.36; ₹0.40 adds a margin (lane F) |
| A52 | 0.18 | 0.18 | 0.18 | rupees a message | SMS on DLT routes, vendor range ₹0.10 to ₹0.25 (lane F) |
| A53 | 0.025 | 0.025 | 0.025 | rupees a message | Email (lane F) |
| A54 | 400000 | 400000 | 400000 | rupees | Content production: explainers, in-app copy, creatives (team estimate) |
| A55 | 6000 | 6000 | 6000 | rupees a session | Workplace session cost: travel, material (team estimate) |
| A56 | 150000 | 150000 | 150000 | rupees | Compliance and exchange advertisement review support (team estimate) |
| A57 | 120000 | 120000 | 120000 | rupees | Customer validation research: 30 interviews and 2 usability rounds (team estimate) |
| A58 | 0.1 | 0.1 | 0.1 | share | Contingency on cash cost |
| A59 | 21 | 21 | 21 | FTE months | Internal product sprint: 7 people for 3 months (team estimate) |
| A60 | 180000 | 180000 | 180000 | rupees a FTE month | Loaded internal cost a person a month (team estimate) |
| A61 | 1000 | 700 | 1400 | rupees | Paid-media cost per activated trading account; Groww reported ₹616 to ₹1,374 per acquired customer (FY25 to H1 FY26) and an activated account costs more, so ₹1,000 favours paid media; bear is cheaper paid media, which is worse for our comparison (lane F) |
| A62 | 0.15 | 0.15 | 0.15 | rupees an order | Cash equities brokerage per executed order, case product table |
| A63 | 16 | 12 | 20 | orders a year | Orders a year by a newly activated account: 12 monthly ETF instalments plus 4 others (team estimate) |
| A64 | 1 | 1 | 1 | sells a year | Sell transactions a year (team estimate) |
| A65 | 15 | 15 | 15 | rupees a sell | Depository charge a sell (lane C) |
| A66 | 0.15 | 0.15 | 0.15 | share | Share of new actives on a regular demat account that pays an annual fee; BSDA is nil up to ₹4 lakh of holdings and ₹100 a year from ₹4 lakh to ₹10 lakh (SEBI, 28 Jun 2024) (lane D) |
| A67 | 300 | 300 | 300 | rupees a year | Annual maintenance charge outside BSDA (lane C) |

### T2 Cohorts, September 2026 (Exhibit 2a) with derived active and idle accounts

| Segment | Accounts | Share of base | T12 | T9 | T6 | T3 | T1 | Active (T12) | Idle |
|---|---|---|---|---|---|---|---|---|---|
| Prestige | 3,096 | 0.4% | 35% | 31% | 28% | 22% | 16% | 1,084 | 2,012 |
| Elite | 35,697 | 4.4% | 32% | 29% | 26% | 22% | 15% | 11,423 | 24,274 |
| Elevate | 9,471 | 1.2% | 37% | 34% | 31% | 27% | 13% | 3,504 | 5,967 |
| Preferred | 60,312 | 7.4% | 20% | 18% | 16% | 14% | 9% | 12,062 | 48,250 |
| Salary Account | 6,27,853 | 77.5% | 14% | 13% | 11% | 9% | 6% | 87,899 | 5,39,954 |
| Credit Card | 73,317 | 9.1% | 6% | 6% | 5% | 5% | 4% | 4,399 | 68,918 |
| Total | 8,09,746 | 100% | 15% | 13% | 12% | 10% | 6% | 1,20,372 | 6,89,375 |

### T3 Cohorts, September 2025 (Exhibit 2b)

| Segment | Accounts | Share of base | T12 | T9 | T6 | T3 | T1 | Active (T12) |
|---|---|---|---|---|---|---|---|---|
| Prestige | 2,999 | 0.4% | 38% | 34% | 30% | 24% | 17% | 1,140 |
| Elite | 34,865 | 4.8% | 36% | 33% | 28% | 24% | 17% | 12,551 |
| Elevate | 6,959 | 0.9% | 41% | 39% | 34% | 31% | 24% | 2,853 |
| Preferred | 72,826 | 9.9% | 21% | 19% | 14% | 12% | 9% | 15,293 |
| Salary Account | 5,05,823 | 68.9% | 13% | 12% | 10% | 8% | 7% | 65,757 |
| Credit Card | 1,10,383 | 15.0% | 9% | 9% | 4% | 4% | 4% | 9,934 |
| Total | 7,33,855 | 100% | 15% | 14% | 10% | 9% | 7% | 1,07,529 |

### T4 Year on year by segment

| Segment | Accounts 2025 | Accounts 2026 | Growth | T12 change | T3 change | T1 change |
|---|---|---|---|---|---|---|
| Prestige | 2,999 | 3,096 | 3.2% | −3 pp | −2 pp | −1 pp |
| Elite | 34,865 | 35,697 | 2.4% | −4 pp | −2 pp | −2 pp |
| Elevate | 6,959 | 9,471 | 36.1% | −4 pp | −4 pp | −11 pp |
| Preferred | 72,826 | 60,312 | −17.2% | −1 pp | +2 pp | +0 pp |
| Salary Account | 5,05,823 | 6,27,853 | 24.1% | +1 pp | +1 pp | −1 pp |
| Credit Card | 1,10,383 | 73,317 | −33.6% | −3 pp | +1 pp | +0 pp |

### T5 Mix and rate decomposition of the change in activation, 2025 to 2026 (cohort-weighted)

| Component | Effect |
|---|---|
| Mix effect: base shifted toward Salary Account, away from Credit Card and Preferred | +0.02 pp |
| Rate effect: segment activation rates moved | +0.19 pp |
| Interaction and rounding | −0.00 pp |
| Total cohort-weighted change | +0.21 pp |

### T6 Recency: share of the base trading in each trailing window

| Window | T12 | T9 | T6 | T3 | T1 |
|---|---|---|---|---|---|
| Sep 2025 | 15% | 14% | 10% | 9% | 7% |
| Sep 2026 | 15% | 13% | 12% | 10% | 6% |
| T1 as share of T12 | 47% |  |  |  | 40% |

### T7 Accounts that roll out of the 12-month active count in the next quarter

| Method | Accounts |
|---|---|
| Cohort rows: T12 minus T9, scaled to Exhibit 1 | 8,887 |
| Total row: 1,19,339 minus 13% of 8,09,746 | 14,072 |
| Midpoint used in the model | 11,479 |

### T8 Target arithmetic at 31 January 2027

| Item | Value |
|---|---|
| Accounts at measurement (8,09,746 + 4 x 6,324) | 8,35,042 |
| Active at business as usual (14.74%) | 1,23,067 |
| Extra active accounts for +200 bps | 16,701 |
| Extra active accounts for +300 bps | 25,051 |
| Accounts opened in the 13-week window | 18,972 |

### T9 Lever parameters by scenario

| ID | Base | Bear | Bull |
|---|---|---|---|
| A10 | 0.5 | 0.55 | 0.45 |
| A11 | 0.5 | 0.42 | 0.58 |
| A20 | 0.55 | 0.45 | 0.62 |
| A21 | 0.08 | 0.06 | 0.1 |
| A22 | 0.32 | 0.26 | 0.38 |
| A23 | 0.6 | 0.5 | 0.68 |
| A24 | 0.04 | 0.03 | 0.05 |
| A25 | 0.25 | 0.2 | 0.3 |
| A26 | 1.0 | 0.8 | 1.15 |
| A27 | 0.15 | 0.11 | 0.19 |
| A28 | 0.5 | 0.42 | 0.56 |
| A29 | 0.03 | 0.022 | 0.04 |
| A30 | 0.3 | 0.25 | 0.35 |
| A31 | 40 | 30 | 50 |
| A32 | 120 | 100 | 140 |
| A33 | 0.1 | 0.07 | 0.13 |
| A35 | 0.7 | 0.6 | 0.78 |
| A36 | 0.2 | 0.15 | 0.25 |
| A39 | 0.1 | 0.07 | 0.13 |

### T10 Incremental active accounts by segment and lever, base case

| Segment | Salary day | Rediscover | RM review | Dhanteras | Workplace | Total |
|---|---|---|---|---|---|---|
| Prestige | 0 | 9 | 179 | 7 | 0 | 195 |
| Elite | 0 | 108 | 1,623 | 81 | 0 | 1,812 |
| Elevate | 0 | 27 | 399 | 20 | 0 | 445 |
| Preferred | 0 | 215 | 1,882 | 161 | 0 | 2,259 |
| Salary Account | 5,661 | 2,413 | 0 | 1,809 | 413 | 10,296 |
| Credit Card | 0 | 309 | 0 | 232 | 0 | 541 |
| Warm cohort defence |  |  |  |  |  | 1,607 |
| New accounts, guided first order |  |  |  |  |  | 1,897 |
| Total | 5,661 | 3,081 | 4,083 | 2,311 | 413 | 19,053 |

### T11 Scenario summary

| Measure | Bear | Base | Bull |
|---|---|---|---|
| Extra active accounts | 9,783 | 19,053 | 32,037 |
| Activation rate at 31 Jan 2027 | 15.76% | 17.02% | 18.68% |
| Change from 14.74% | +1.02 pp | +2.28 pp | +3.94 pp |
| Highly active (T3) rate | 11.3% | 12.4% | 14.0% |
| Cash cost per extra active | ₹169 | ₹87 | ₹51 |

### T12 Weekly activation rate, % (week 1 starts 2 Nov 2026)

| Week | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Base | 14.99 | 15.20 | 15.35 | 15.48 | 15.82 | 15.94 | 16.06 | 16.18 | 16.53 | 16.64 | 16.69 | 16.74 | 17.02 |
| Bear | 14.71 | 14.82 | 14.90 | 14.97 | 15.14 | 15.20 | 15.27 | 15.33 | 15.51 | 15.57 | 15.60 | 15.63 | 15.76 |
| Bull | 15.28 | 15.65 | 15.89 | 16.11 | 16.68 | 16.88 | 17.07 | 17.25 | 17.86 | 18.03 | 18.11 | 18.18 | 18.68 |

### T13 Cash cost for the 13 weeks

| Item | Rupees |
|---|---|
| Email, 3 sends | ₹51,703 |
| SMS, 2 sends | ₹2,48,175 |
| WhatsApp, 3 sends to opted-in | ₹2,89,537 |
| Content production | ₹4,00,000 |
| Workplace sessions | ₹2,40,000 |
| Compliance and ad review | ₹1,50,000 |
| Validation research | ₹1,20,000 |
| Bank app card, tile, push | ₹0 |
| Contingency 10% | ₹1,49,942 |
| Total cash | ₹16,49,357 |
| Internal product sprint (not cash marketing) | ₹37,80,000 |

### T14 Owned rails against paid media for the same cash

| Measure | Bear | Base | Bull |
|---|---|---|---|
| Cash | ₹16.5 lakh | ₹16.5 lakh | ₹16.5 lakh |
| Extra actives, our plan | 9,783 | 19,053 | 32,037 |
| Paid cost per activated account | ₹700 | ₹1,000 | ₹1,400 |
| Extra actives, paid media | 2,356 | 1,649 | 1,178 |

### T15 Revenue a year per newly activated account and payback

| Item | Base |
|---|---|
| Brokerage: 16 orders x ₹0.15 | ₹2.40 |
| Depository charge: 1 sell x ₹15 | ₹15 |
| Annual charge: 15% on a regular account x ₹300 | ₹45 |
| Revenue a year | ₹62 |
| Cash payback, months | 16.6 |

### T16 Sensitivity of the base case (pp change from 14.74%)

| ID | At bear value | At bull value | Spread |
|---|---|---|---|
| A21 | 2.11 | 2.45 | 0.34 |
| A27 | 2.15 | 2.41 | 0.26 |
| A22 | 2.16 | 2.41 | 0.25 |
| A02 | 2.13 | 2.38 | 0.25 |
| A20 | 2.16 | 2.37 | 0.21 |
| A11 | 2.19 | 2.38 | 0.19 |
| A24 | 2.19 | 2.37 | 0.18 |
| A26 | 2.19 | 2.36 | 0.17 |
| A29 | 2.21 | 2.37 | 0.16 |
| A25 | 2.21 | 2.36 | 0.15 |
| A39 | 2.22 | 2.35 | 0.14 |
| A10 | 2.22 | 2.34 | 0.12 |
| A36 | 2.24 | 2.33 | 0.10 |

### T17 Option screen

| Option | 90-day lift (30%) | SEBI and ethics fit (25%) | Works in a falling market (20%) | Cash cost (15%) | Ships in a quarter (10%) | Score | Why |
|---|---|---|---|---|---|---|---|
| More market content and 'stay invested' messages | 1 | 4 | 1 | 4 | 5 | 2.60 | Run for 12 months; rate moved 14.70% to 14.74% |
| First-trade cash offers and zero brokerage | 3 | 2 | 2 | 2 | 5 | 2.60 | Already tried; reads as trade inducement under NSE rules |
| Trading contests and leaderboards | 3 | 1 | 2 | 3 | 3 | 2.30 | Gamified urgency; a dark pattern |
| Paid media and finfluencers | 2 | 2 | 2 | 1 | 4 | 2.05 | SEBI rules of Aug 2024 bar ties with unregistered finfluencers |
| Referral rewards | 2 | 3 | 2 | 3 | 4 | 2.60 | Pays for accounts, not first orders |
| F&O education push | 2 | 1 | 2 | 4 | 4 | 2.25 | 87.7% of individual F&O traders lost money in FY26 |
| New trading engine or app rebuild | 1 | 4 | 3 | 1 | 1 | 2.15 | Outside the brief: no engine rebuild |
| Bank moments: salary day, rediscovery, RM review, Dhanteras | 4 | 5 | 4 | 5 | 4 | 4.40 | Owned rails, no advice, no offers, no F&O |

### T18 Option scores under three other weight sets

| Option | Base weights | Equal weights | Rules first | Lift first |
|---|---|---|---|---|
| More market content and 'stay invested' messages | 2.60 | 3.00 | 3.05 | 2.30 |
| First-trade cash offers and zero brokerage | 2.60 | 2.80 | 2.50 | 2.75 |
| Trading contests and leaderboards | 2.30 | 2.40 | 2.05 | 2.45 |
| Paid media and finfluencers | 2.05 | 2.20 | 2.05 | 2.10 |
| Referral rewards | 2.60 | 2.80 | 2.75 | 2.50 |
| F&O education push | 2.25 | 2.60 | 2.10 | 2.20 |
| New trading engine or app rebuild | 2.15 | 2.00 | 2.50 | 1.90 |
| Bank moments: salary day, rediscovery, RM review, Dhanteras | 4.40 | 4.40 | 4.55 | 4.30 |

### T19 Holdout sizing: 10% of each reached pool, 80% power, 5% two-sided, organic rate 1.0%

| Lever | Reached | Holdout | Expected lift, pp | Minimum detectable, pp |
|---|---|---|---|---|
| Salary day | 2,96,975 | 29,697 | 1.92 | 0.17 |
| Rediscover | 4,13,625 | 41,362 | 0.75 | 0.14 |
| RM review | 36,642 | 3,664 | 11.25 | 0.49 |
| Dhanteras | 3,44,688 | 34,469 | 0.67 | 0.16 |
