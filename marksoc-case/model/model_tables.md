# Model tables

Model 9b3628d94d, run 2026-10-27T13:10:48.

## T1. Assumptions register

| ID | Assumption | Basis |
|---|---|---|
| A01 | Lever A's ₹10 lakh of extra performance ads is counted once, as growth money in the month spent, and is not added again to the performance-ads fixed spend | C-E6H3 says count each growth item once |
| A02 | Each channel's fixed spend (₹99 lakh in all) stays as today in every plan and every month | No lever in Exhibit 6 changes it |
| A03 | Commission, coupons and every per-phone cost apply only to delivered orders; an order that cannot be delivered earns and costs nothing | C-E6H4: undelivered orders are lost |
| A04 | Rationing includes trade in orders: Superb first, pro rata across all channels, then all orders pro rata to the lab limit | C-E6H4 read literally |
| A05 | Return-rate cuts from B1 and B2 multiply each channel's own rate, including the website rate that trade in buyers pay | C-E6H2: multiply effects on return rates |
| A06 | The 15% trade in failure rate applies equally to each arriving grade | C-E6TI2 gives one rate |
| A07 | 30% of all trade ins, failed or passed, also buy a Tikau phone | C-E6TI4: 30% of people who trade in |
| A08 | From February the Superb rule (85% or more) is applied to Tikau's own lab reading; with no failure rate in the case, no Superb phone changes grade | C-E5a, C-E6B1; no data on Superb readings |
| A09 | January is today's month in every plan, so doing nothing earns today's result in each of the three months | C-E6H1 and FAQ 15 |
| A10 | A third shift adds 1,800 sellable phones, so the limit becomes 9,000; its ₹9 lakh is growth money in each month it runs | C-E6SH, C-E6H3 |
| A11 | B2's 4% price rise raises MegaKart's 12% commission on those phones, because the commission is a share of the selling price | C-E3N2 |
| A12 | The ₹120 report cost and the B2 battery costs apply to trade in buyers' phones too | C-E6H2: cost changes apply to every phone sold |
| A13 | Weekly figures use 4.33 weeks a month | Team convention |
| A14 | The November spot check (22 of 200 Good phones below 80%) applies to all Good phones sold, so about 351 a month carry an untrue battery claim today | C-E4c, an indicative scale-up only |
| A15 | In April Tikau has new growth money for the next quarter and the trade in ramp restarts at 1,000, then 1,800, then 800 more a month to 4,000 | C-E6TI1 pattern; April is outside the board tests |
| A16 | Stress tests move only what Tikau does not control (the order rise, the return cut, battery shares, claim rates) 25% worse or better; prices and the ₹120 report cost are Tikau's decisions and stay as printed; the plan uses the printed values | Team convention for Q5 trigger levels |
| A17 | Revenue in the reconciliation is gross selling price before commission; the case's ₹139 crore is read as that figure | C-CO3 |
| A18 | Month figures are averages of August to October 2026 and stand for November 2026 to January 2027 as well | C-E3 title, C-E6H1 |
| A19 | Store, creator and MegaKart return multipliers stay as today when B1 and B2 apply | C-E3 notes |
| A20 | Trade in savings count only for traded phones that pass the check; a failed traded phone is sold as parts at cost, like a failed lab phone | C-E6TI2, C-E4a |

*Source: team assumptions, stated on the slide where each is used (C-R3)*

## T2. Contribution per phone by grade, website rates (₹ per phone)

| Line | Superb | Good | Fair |
|---|---|---|---|
| Average selling price | ₹24,000 | ₹16,000 | ₹10,000 |
| Price paid to the trader | −₹17,800 | −₹11,600 | −₹7,000 |
| Testing and repair | −₹800 | −₹1,000 | −₹1,200 |
| Packing, delivery, payment | −₹600 | −₹600 | −₹600 |
| Warranty: claim rate x ₹2,500 | −₹75 | −₹150 | −₹250 |
| Returns: return rate x ₹1,800 | −₹72 | −₹126 | −₹234 |
| Contribution per phone | ₹4,653 | ₹2,524 | ₹716 |
| Contribution as a share of price | 19.4% | 15.8% | 7.2% |

*Source: case Exhibit 2 (C-E2, C-E2N1 to C-E2N3); team model*

## T3. Contribution per phone by return regime (₹)

| Grade | Stores (0.5x returns) | Website, ads, MegaKart, referrals (1x) | Creators (1.5x) |
|---|---|---|---|
| Superb | ₹4,689 | ₹4,653 | ₹4,617 |
| Good | ₹2,587 | ₹2,524 | ₹2,461 |
| Fair | ₹833 | ₹716 | ₹599 |

*Source: case Exhibits 2 and 3 (C-E3N3, C-E3N4); before commission, fixed spend and coupons*

## T4. Contribution after marketing by channel, a month today (₹ lakh unless stated)

| Channel | Orders | Superb / Good / Fair | Contribution of phones | MegaKart commission | Fixed spend | Coupons | After marketing | Per order (₹) | Dashboard cost per order (₹) | True cost per order (₹) | Return rate |
|---|---|---|---|---|---|---|---|---|---|---|---|
| Performance ads | 2,600 | 20 / 40 / 40% | 57.9 | 0.0 | −60.0 | 0.0 | −2.1 | −₹81 | ₹2,308 | ₹2,308 | 8.80% |
| MegaKart | 2,000 | 10 / 45 / 45% | 38.5 | −33.8 | 0.0 | 0.0 | 4.6 | ₹231 | ₹0 | ₹1,692 | 9.40% |
| Creators | 900 | 40 / 50 / 10% | 28.2 | 0.0 | −18.0 | 0.0 | 10.2 | ₹1,137 | ₹2,000 | ₹2,000 | 9.60% |
| Stores | 1,000 | 45 / 45 / 10% | 33.6 | 0.0 | −21.0 | 0.0 | 12.6 | ₹1,258 | ₹2,100 | ₹2,100 | 3.12% |
| Referrals | 700 | 35 / 50 / 15% | 21.0 | 0.0 | 0.0 | −2.4 | 18.5 | ₹2,648 | ₹350 | ₹350 | 6.85% |
| Total | 7,200 |  | 179.2 | −33.8 | −99.0 | −2.4 | 43.9 | ₹609 |  |  | 8.09% |

*Source: case Exhibits 2 and 3; true cost per order = (fixed spend + commission + coupons) / orders; team model*

## T5. Tikau's month today and the reconciliation with the last twelve months

| Line | Value |
|---|---|
| Contribution after marketing, all channels | ₹43.9 lakh |
| Fixed costs | −₹58.0 lakh |
| Monthly EBITDA | −₹14.1 lakh |
| Monthly EBITDA x 12 | −₹169.6 lakh |
| Case: EBITDA, Nov 2025 to Oct 2026 | −₹170.0 lakh |
| Gross sales a month | ₹1159.9 lakh |
| Gross sales x 12 | ₹139.2 crore |
| Case: net revenue, last twelve months | ₹139 crore |
| Phones sold a month | 7,200 |
| Phones returned a month | 582 |
| Return rate | 8.09% |
| Warranty claims a month | 468 |
| Cost of claims | ₹11.7 lakh |
| Cost of returns | ₹10.5 lakh |
| Distrust costs a month (claims plus returns) | ₹22.2 lakh |

*Source: case page 3 (C-CO3, C-CO4), Exhibits 2 and 3; team model*

## T6. Phones sold and contribution by grade, a month today

| Grade | Phones | Share | Contribution per phone | Contribution, ₹ lakh |
|---|---|---|---|---|
| Superb | 1,775 | 24.7% | ₹4,653 | 82.6 |
| Good | 3,190 | 44.3% | ₹2,524 | 80.5 |
| Fair | 2,235 | 31.0% | ₹716 | 16.0 |

*Source: case Exhibits 2 and 3; contribution at website rates before channel effects*

## T7. Website funnel, October 2026

| Step | People | Conversion from the step before |
|---|---|---|
| Visited the website | 9,60,000 |  |
| Opened a product page | 3,10,000 | 32.3% |
| Added a phone to cart | 26,000 | 8.4% |
| Placed an order | 4,200 | 16.2% |
| Visit to order |  | 0.44% |
| Store: picks up a phone to buys |  | 33.3% |

*Source: case Exhibit 1D (C-E1D)*

## T8. The lab, Superb supply and the battery spot check

| Measure | Value |
|---|---|
| Phones tested a month | 8,000 |
| Fail the final check | 10% |
| Sellable phones a month | 7,200 |
| Phones sold a month | 7,200 |
| Lab use | 100% |
| Superb sold a month | 1,775 |
| Superb available from traders | 2,000 |
| Superb headroom | 225 |
| Good phones below their printed 80% (spot check) | 22 of 200, 11% |
| Good phones a month with an untrue battery line (A14) | 351 |
| Repair time | 9 days |
| Claims needing a second visit | 38% |

*Source: case Exhibit 4 (C-E4a to C-E4d); A14*

## T9. Why visitors did not buy, and the option that answers each reason

| Reason (Exhibit 1A) | Share | Answered by |
|---|---|---|
| Worried the battery will not last | 46% | B2 (85% battery) with B1 (lab reading) |
| Cannot tell the real condition from photos | 41% | B1 (real photos, condition report) |
| 6 month warranty is too short | 31% | B2 (12 month warranty) |
| Wanted to see the phone in person | 28% | Stores (existing channel) |
| Price not low enough compared with a local shop | 24% | A (Fair price cut only) |
| Phone might be stolen or locked | 22% | B1 (IMEI check) |
| Worried about the previous owner's data | 12% | B1 (data wipe certificate) |

*Source: case Exhibit 1A (C-E1A), Exhibit 6; team mapping*

## T10. Segment scorecard (1 weak to 5 strong; team judgement on case data)

| Segment | Size: share of buyers | Contribution a phone after the plan | Room to grow in Q1 | Return risk of the grade | Their worry is what B1 + B2 fix | A lever that passes the board tests reaches them | Total |
|---|---|---|---|---|---|---|---|
| Flagship on a budget | 5 (34%) | 5 (Superb ₹5,500) | 1 (Superb capped at 2,000) | 5 (Superb 4%) | 3 (photos and condition (41%)) | 3 (B1 + B2, but Superb is rationed) | 22 |
| Value seekers | 4 (29%) | 1 (Fair ₹164) | 5 (no cap) | 1 (Fair 13%) | 1 (price (24%)) | 1 (only A, which fails tests 2 to 4) | 13 |
| Family buyers | 3 (21%) | 3 (Good ₹2,699) | 5 (no cap) | 3 (Good 7%) | 5 (who will fix it: 12 months (39%), battery (46%)) | 5 (B1 + B2) | 24 |
| Upgraders | 2 (16%) | 4 (Superb and Good) | 3 (half capped) | 4 (4% to 7%) | 2 (part payment (31%)) | 1 (C, which does not fit the ₹80 lakh with B1 + B2) | 16 |

*Source: case Exhibit 1C (C-E1C), Exhibits 2, 4 and 6; team model T11 for contribution after the plan*

## T11. Contribution per phone under each lever, website rates (₹)

| Case | Superb | Good | Fair |
|---|---|---|---|
| Today | ₹4,653 | ₹2,524 | ₹716 |
| A | ₹4,653 | ₹2,524 | ₹416 |
| B1 | ₹4,555 | ₹2,442 | ₹666 |
| B2 | ₹5,602 | ₹2,789 | ₹228 |
| B1 + B2 | ₹5,500 | ₹2,699 | ₹164 |
| A + B1 + B2 | ₹5,500 | ₹2,699 | −₹136 |

*Source: case Exhibits 2 and 6; per-phone costs and return cuts as printed*

## T12. Every plan the options allow: 28 lever sets x 3 shift choices (₹ lakh)

| Plan | Growth money | Jan EBITDA | Feb EBITDA | Mar EBITDA | Q1 EBITDA | Q1 vs doing nothing | Mar return rate | Tests 1 to 4 | Verdict |
|---|---|---|---|---|---|---|---|---|---|
| Do nothing | 0.0 | −14.1 | −14.1 | −14.1 | −42.4 | 0.0 | 8.09% | PFFF |  |
| Do nothing + shift from Feb | 18.0 | −14.1 | −23.1 | −23.1 | −60.4 | −18.0 | 8.09% | PFFF |  |
| Do nothing + shift from Mar | 9.0 | −14.1 | −14.1 | −23.1 | −51.4 | −9.0 | 8.09% | PFFF |  |
| A | 20.0 | −14.1 | −55.7 | −55.7 | −125.6 | −83.2 | 8.87% | PFFF |  |
| A + shift from Feb | 38.0 | −14.1 | −36.9 | −36.9 | −88.0 | −45.6 | 8.87% | PFFF |  |
| A + shift from Mar | 29.0 | −14.1 | −55.7 | −36.9 | −106.8 | −64.4 | 8.87% | PFFF |  |
| B1 | 15.0 | −29.1 | −19.6 | −19.6 | −68.4 | −26.0 | 5.66% | PFPP |  |
| B1 + shift from Feb | 33.0 | −29.1 | −17.6 | −17.6 | −64.4 | −22.0 | 5.66% | PFPP |  |
| B1 + shift from Mar | 24.0 | −29.1 | −19.6 | −17.6 | −66.4 | −24.0 | 5.66% | PFPP |  |
| B2 | 25.0 | −39.1 | −0.7 | −0.7 | −40.5 | +1.9 | 6.47% | PFFF |  |
| B2 + shift from Feb | 43.0 | −39.1 | 2.8 | 2.8 | −33.5 | +9.0 | 6.47% | PPFF |  |
| B2 + shift from Mar | 34.0 | −39.1 | −0.7 | 2.8 | −37.0 | +5.4 | 6.47% | PPFF |  |
| C | 35.0 | −49.1 | −9.0 | −4.9 | −63.1 | −20.7 | 7.97% | PFFF |  |
| C + shift from Feb | 53.0 | −49.1 | −12.0 | −3.1 | −64.3 | −21.9 | 7.97% | PFFF |  |
| C + shift from Mar | 44.0 | −49.1 | −9.0 | −3.1 | −61.3 | −18.9 | 7.97% | PFFF |  |
| A + B1 | 35.0 | −29.1 | −60.9 | −60.9 | −151.0 | −108.6 | 6.21% | PFFP |  |
| A + B1 + shift from Feb | 53.0 | −29.1 | −43.4 | −43.4 | −115.9 | −73.5 | 6.21% | PFFP |  |
| A + B1 + shift from Mar | 44.0 | −29.1 | −60.9 | −43.4 | −133.5 | −91.1 | 6.21% | PFFP |  |
| A + B2 | 45.0 | −39.1 | −50.4 | −50.4 | −140.0 | −97.6 | 7.10% | PFFF |  |
| A + B2 + shift from Feb | 63.0 | −39.1 | −30.3 | −30.3 | −99.7 | −57.3 | 7.10% | PFFF |  |
| A + B2 + shift from Mar | 54.0 | −39.1 | −50.4 | −30.3 | −119.9 | −77.5 | 7.10% | PFFF |  |
| A + C | 55.0 | −49.1 | −49.8 | −45.2 | −144.2 | −101.8 | 8.74% | PFFF |  |
| A + C + shift from Feb | 73.0 | −49.1 | −30.7 | −25.8 | −105.6 | −63.2 | 8.74% | PFFF |  |
| A + C + shift from Mar | 64.0 | −49.1 | −49.8 | −25.8 | −124.7 | −82.3 | 8.74% | PFFF |  |
| B1 + B2 | 40.0 | −54.1 | −8.6 | −8.6 | −71.4 | −29.0 | 4.55% | PFPP |  |
| B1 + B2 + shift from Feb | 58.0 | −54.1 | 5.6 | 5.6 | −42.9 | −0.5 | 4.55% | PPPP | Passes |
| B1 + B2 + shift from Mar | 49.0 | −54.1 | −8.6 | 5.6 | −57.2 | −14.8 | 4.55% | PPPP | Passes |
| B1 + B3 | 45.0 | −29.1 | −33.0 | −33.0 | −95.1 | −52.7 | 5.65% | PFPP |  |
| B1 + B3 + shift from Feb | 63.0 | −29.1 | −25.5 | −25.5 | −80.1 | −37.7 | 5.65% | PFPP |  |
| B1 + B3 + shift from Mar | 54.0 | −29.1 | −33.0 | −25.5 | −87.6 | −45.2 | 5.65% | PFPP |  |
| B1 + C | 50.0 | −64.1 | −14.6 | −10.5 | −89.2 | −46.8 | 5.59% | PFPP |  |
| B1 + C + shift from Feb | 68.0 | −64.1 | −6.8 | 1.9 | −69.0 | −26.6 | 5.59% | PPPP | Passes |
| B1 + C + shift from Mar | 59.0 | −64.1 | −14.6 | 1.9 | −76.8 | −34.4 | 5.59% | PPPP | Passes |
| B2 + B3 | 55.0 | −39.1 | −13.8 | −13.8 | −66.7 | −24.3 | 6.46% | PFFF |  |
| B2 + B3 + shift from Feb | 73.0 | −39.1 | −4.0 | −4.0 | −47.2 | −4.8 | 6.46% | PFFF |  |
| B2 + B3 + shift from Mar | 64.0 | −39.1 | −13.8 | −4.0 | −57.0 | −14.5 | 6.46% | PFFF |  |
| B2 + C | 60.0 | −74.1 | 5.2 | 9.8 | −59.2 | −16.8 | 6.38% | PPFF |  |
| B2 + C + shift from Feb | 78.0 | −74.1 | 15.3 | 25.3 | −33.5 | +9.0 | 6.38% | PPFF |  |
| B2 + C + shift from Mar | 69.0 | −74.1 | 5.2 | 25.3 | −43.6 | −1.2 | 6.38% | PPFF |  |
| A + B1 + B2 | 60.0 | −54.1 | −58.4 | −58.4 | −171.0 | −128.6 | 4.99% | PFPP |  |
| A + B1 + B2 + shift from Feb | 78.0 | −54.1 | −40.3 | −40.3 | −134.7 | −92.3 | 4.99% | PFPP |  |
| A + B1 + B2 + shift from Mar | 69.0 | −54.1 | −58.4 | −40.3 | −152.8 | −110.4 | 4.99% | PFPP |  |
| A + B1 + B3 | 65.0 | −29.1 | −74.6 | −74.6 | −178.2 | −135.8 | 6.20% | PFFP |  |
| A + B1 + B3 + shift from Feb | 83.0 | −29.1 | −56.7 | −56.7 | −142.5 | −100.1 | 6.20% | FFFP |  |
| A + B1 + B3 + shift from Mar | 74.0 | −29.1 | −74.6 | −56.7 | −160.4 | −118.0 | 6.20% | PFFP |  |
| A + B1 + C | 70.0 | −64.1 | −55.2 | −50.6 | −169.9 | −127.5 | 6.12% | PFFP |  |
| A + B1 + C + shift from Feb | 88.0 | −64.1 | −37.3 | −32.5 | −134.0 | −91.6 | 6.12% | FFFP |  |
| A + B1 + C + shift from Mar | 79.0 | −64.1 | −55.2 | −32.5 | −151.8 | −109.4 | 6.12% | PFFP |  |
| A + B2 + B3 | 75.0 | −39.1 | −63.9 | −63.9 | −167.0 | −124.6 | 7.09% | PFFF |  |
| A + B2 + B3 + shift from Feb | 93.0 | −39.1 | −43.4 | −43.4 | −126.0 | −83.6 | 7.09% | FFFF |  |
| A + B2 + B3 + shift from Mar | 84.0 | −39.1 | −63.9 | −43.4 | −146.5 | −104.1 | 7.09% | FFFF |  |
| A + B2 + C | 80.0 | −74.1 | −43.8 | −38.7 | −156.6 | −114.2 | 7.00% | PFFF |  |
| A + B2 + C + shift from Feb | 98.0 | −74.1 | −23.2 | −17.6 | −114.9 | −72.5 | 7.00% | FFFF |  |
| A + B2 + C + shift from Mar | 89.0 | −74.1 | −43.8 | −17.6 | −135.6 | −93.2 | 7.00% | FFFF |  |
| B1 + B2 + B3 | 70.0 | −54.1 | −24.0 | −24.0 | −102.1 | −59.7 | 4.56% | PFPP |  |
| B1 + B2 + B3 + shift from Feb | 88.0 | −54.1 | −5.5 | −5.5 | −65.1 | −22.7 | 4.56% | FFPP |  |
| B1 + B2 + B3 + shift from Mar | 79.0 | −54.1 | −24.0 | −5.5 | −83.6 | −41.2 | 4.56% | PFPP |  |
| B1 + B2 + C | 75.0 | −89.1 | −1.1 | 3.4 | −86.8 | −44.4 | 4.47% | PPPP | Passes |
| B1 + B2 + C + shift from Feb | 93.0 | −89.1 | 21.4 | 31.2 | −36.5 | +5.9 | 4.47% | FPPP |  |
| B1 + B2 + C + shift from Mar | 84.0 | −89.1 | −1.1 | 31.2 | −59.0 | −16.6 | 4.47% | FPPP |  |
| B1 + B3 + C | 80.0 | −64.1 | −28.0 | −24.0 | −116.1 | −73.7 | 5.58% | PFPP |  |
| B1 + B3 + C + shift from Feb | 98.0 | −64.1 | −14.5 | −5.9 | −84.5 | −42.1 | 5.58% | FFPP |  |
| B1 + B3 + C + shift from Mar | 89.0 | −64.1 | −28.0 | −5.9 | −98.0 | −55.5 | 5.58% | FFPP |  |
| B2 + B3 + C | 90.0 | −74.1 | −8.0 | −3.5 | −85.7 | −43.3 | 6.37% | FFFF |  |
| B2 + B3 + C + shift from Feb | 108.0 | −74.1 | 8.6 | 18.6 | −47.0 | −4.5 | 6.37% | FPFF |  |
| B2 + B3 + C + shift from Mar | 99.0 | −74.1 | −8.0 | 18.6 | −63.6 | −21.2 | 6.37% | FPFF |  |
| A + B1 + B2 + B3 | 90.0 | −54.1 | −73.6 | −73.6 | −201.3 | −158.8 | 5.00% | FFPP |  |
| A + B1 + B2 + B3 + shift from Feb | 108.0 | −54.1 | −55.4 | −55.4 | −165.0 | −122.6 | 5.00% | FFPP |  |
| A + B1 + B2 + B3 + shift from Mar | 99.0 | −54.1 | −73.6 | −55.4 | −183.1 | −140.7 | 5.00% | FFPP |  |
| A + B1 + B2 + C | 95.0 | −89.1 | −49.9 | −44.8 | −183.9 | −141.4 | 4.90% | FFPP |  |
| A + B1 + B2 + C + shift from Feb | 113.0 | −89.1 | −30.7 | −25.3 | −145.2 | −102.8 | 4.90% | FFPP |  |
| A + B1 + B2 + C + shift from Mar | 104.0 | −89.1 | −49.9 | −25.3 | −164.3 | −121.9 | 4.90% | FFPP |  |
| A + B1 + B3 + C | 100.0 | −64.1 | −68.5 | −64.0 | −196.6 | −154.2 | 6.11% | FFFP |  |
| A + B1 + B3 + C + shift from Feb | 118.0 | −64.1 | −50.2 | −45.5 | −159.8 | −117.4 | 6.11% | FFFP |  |
| A + B1 + B3 + C + shift from Mar | 109.0 | −64.1 | −68.5 | −45.5 | −178.1 | −135.7 | 6.11% | FFFP |  |
| A + B2 + B3 + C | 110.0 | −74.1 | −56.9 | −51.8 | −182.9 | −140.5 | 6.98% | FFFF |  |
| A + B2 + B3 + C + shift from Feb | 128.0 | −74.1 | −35.8 | −30.3 | −140.3 | −97.8 | 6.98% | FFFF |  |
| A + B2 + B3 + C + shift from Mar | 119.0 | −74.1 | −56.9 | −30.3 | −161.4 | −119.0 | 6.98% | FFFF |  |
| B1 + B2 + B3 + C | 105.0 | −89.1 | −14.9 | −9.8 | −113.9 | −71.5 | 4.47% | FFPP |  |
| B1 + B2 + B3 + C + shift from Feb | 123.0 | −89.1 | 13.7 | 19.7 | −55.8 | −13.4 | 4.47% | FPPP |  |
| B1 + B2 + B3 + C + shift from Mar | 114.0 | −89.1 | −14.9 | 19.7 | −84.4 | −41.9 | 4.47% | FPPP |  |
| A + B1 + B2 + B3 + C | 125.0 | −89.1 | −64.0 | −58.0 | −211.2 | −168.8 | 4.89% | FFPP |  |
| A + B1 + B2 + B3 + C + shift from Feb | 143.0 | −89.1 | −44.7 | −38.0 | −171.9 | −129.4 | 4.89% | FFPP |  |
| A + B1 + B2 + B3 + C + shift from Mar | 134.0 | −89.1 | −64.0 | −38.0 | −191.2 | −148.8 | 4.89% | FFPP |  |

*Source: team model; test 4 needs B1, because a battery claim needs a reading taken in Tikau's own lab (C-E5a) and today's readings come from the trader's tool (C-E4c)*

## T13. The five plans that pass all four board tests (₹ lakh)

| Plan | Growth money | Mar EBITDA | Q1 EBITDA | Q1 vs doing nothing | Mar return rate |
|---|---|---|---|---|---|
| B1 + B2 + shift from Feb | 58.0 | 5.6 | −42.9 | −0.5 | 4.55% |
| B1 + B2 + shift from Mar | 49.0 | 5.6 | −57.2 | −14.8 | 4.55% |
| B1 + C + shift from Feb | 68.0 | 1.9 | −69.0 | −26.6 | 5.59% |
| B1 + C + shift from Mar | 59.0 | 1.9 | −76.8 | −34.4 | 5.59% |
| B1 + B2 + C | 75.0 | 3.4 | −86.8 | −44.4 | 4.47% |

*Source: team model*

## T14. The plans each camp proposed, on the board's tests (₹ lakh)

| Plan | Levers | Growth money | Mar EBITDA | Q1 vs doing nothing | Mar return rate | Tests failed |
|---|---|---|---|---|---|---|
| Do nothing | Do nothing | 0.0 | −14.1 | 0.0 | 8.09% | 2, 3, 4 |
| Rohan: price push | A | 20.0 | −55.7 | −83.2 | 8.87% | 2, 3, 4 |
| Rohan with a third shift | A + shift from Feb | 38.0 | −36.9 | −45.6 | 8.87% | 2, 3, 4 |
| Kabir: certify and warranty | B1 + B2 | 40.0 | −8.6 | −29.0 | 4.55% | 2 |
| Store managers: trade in | C | 35.0 | −4.9 | −20.7 | 7.97% | 2, 3, 4 |
| Battery promise without the report | B2 + shift from Feb | 43.0 | 2.8 | +9.0 | 6.47% | 3, 4 |
| Everything that fits on paper | B1 + B2 + C + shift from Feb | 93.0 | 31.2 | +5.9 | 4.47% | 1 |
| Trade in instead of the shift | B1 + B2 + C | 75.0 | 3.4 | −44.4 | 4.47% | none |
| Our plan | B1 + B2 + shift from Feb | 58.0 | 5.6 | −0.5 | 4.55% | none |

*Source: team model; case page 3 (C-B4 to C-B6)*

## T15. The decision table for our plan

| Your plan | January | February | March |
|---|---|---|---|
| Options live | None live; ₹40 lakh of B1 and B2 setup paid | B1, B2, third shift | B1, B2, third shift |
| Phones sold | 7,200 | 8,328 | 8,328 |
| Contribution after marketing (₹ lakh) | 43.9 | 72.6 | 72.6 |
| Growth money spent (₹ lakh) | 40.0 | 9.0 | 9.0 |
| EBITDA (₹ lakh) | −54.1 | 5.6 | 5.6 |
| Return rate | 8.1% | 4.5% | 4.5% |

*Source: team model; format from case page 7 (C-D3)*

## T16. March EBITDA, doing nothing to our plan, one effect at a time (₹ lakh)

| Step | Change | Running total |
|---|---|---|
| March EBITDA if Tikau does nothing |  | −14.1 |
| More phones sold | +20.8 | 6.6 |
| Superb and Good prices up 4% | +41.9 | 48.6 |
| New batteries (B2) | −29.5 | 19.1 |
| Tikau Report, ₹120 a phone | −10.0 | 9.1 |
| Warranty claim rates | +0.2 | 9.2 |
| Fewer returns | +5.4 | 14.6 |
| Third shift, ₹9 lakh of growth money | −9.0 | 5.6 |
| March EBITDA, our plan |  | 5.6 |

*Source: team model; steps applied in this order so that they add up exactly*

## T17. Break-even points for March EBITDA under our plan

| Input | Plan value | March EBITDA reaches zero at |
|---|---|---|
| Order rise from B1 and B2 together | 16.6% | 10.5% (7,957 phones) |
| Good phones needing a new battery | 40% | 55% |
| Fair phones needing a new battery | 70% | 97% |
| Return rate kept by B1 and B2 together (March return rate 6.0%) | 56% of today's rate | 74% of today's rate |

*Source: team model*

## T18. Stress test: each Exhibit 6 effect at 75% and 125% (A16), March EBITDA (₹ lakh)

| Input | Bear | Bull | Swing |
|---|---|---|---|
| Good battery swaps | 1.9 | 9.3 | 7.4 |
| Fair battery swaps | 2.0 | 9.3 | 7.3 |
| Claim rates after B2 | 2.2 | 9.0 | 6.7 |
| Order rise | 2.8 | 8.2 | 5.4 |
| Return cut | 4.4 | 6.7 | 2.3 |

*Source: team model; plan value 5.6*

## T19. Three scenarios for our plan (₹ lakh)

| Scenario | Feb EBITDA | Mar EBITDA | Q1 vs doing nothing | Mar return rate | Phones in March | All four tests |
|---|---|---|---|---|---|---|
| Bear | −8.7 | −8.7 | −29.2 | 5.33% | 8,090 | Fail |
| Base | 5.6 | 5.6 | −0.5 | 4.55% | 8,328 | Pass |
| Bull | 20.5 | 20.5 | +29.2 | 3.83% | 8,564 | Pass |

*Source: team model; A16*

## T20. April: the options we did not choose, on top of our plan (₹ lakh a month)

| Option | Trade ins | Phones sold | Demand | EBITDA before setup | Change vs keeping the plan | Return rate |
|---|---|---|---|---|---|---|
| Keep the plan | 0 | 8,328 | 8,398 | 5.6 | 0.0 | 4.55% |
| Add B3 trust campaign | 0 | 8,539 | 8,701 | −5.5 | −11.1 | 4.56% |
| Add A price push | 0 | 9,000 | 11,081 | −40.3 | −45.9 | 4.99% |
| Add C trade in, month 1 | 1,000 | 8,698 | 8,698 | 21.4 | +15.8 | 4.50% |
| Add C trade in, month 2 | 1,800 | 8,938 | 8,938 | 31.2 | +25.6 | 4.47% |
| Add C trade in, month 3 | 2,600 | 9,000 | 9,178 | 37.2 | +31.6 | 4.45% |
| Add C trade in, month 4 | 3,400 | 9,000 | 9,418 | 41.8 | +36.2 | 4.43% |
| Add C trade in, month 5 | 4,000 | 9,000 | 9,598 | 45.3 | +39.7 | 4.41% |

*Source: team model; A15; trade in setup of ₹35 lakh is paid once in its first month*

## T21. Channels in March under our plan

| Channel | Phones | After marketing, ₹ lakh | Per order (₹) | Today per order (₹) | Return rate |
|---|---|---|---|---|---|
| Performance ads | 3,012 | 7.0 | ₹231 | −₹81 | 4.95% |
| MegaKart | 2,325 | 2.1 | ₹92 | ₹231 | 5.27% |
| Creators | 1,035 | 18.3 | ₹1,769 | ₹1,137 | 5.40% |
| Stores | 1,149 | 21.6 | ₹1,881 | ₹1,258 | 1.76% |
| Referrals | 807 | 23.6 | ₹2,923 | ₹2,648 | 3.86% |

*Source: team model*
