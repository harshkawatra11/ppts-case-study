# Project DOBAARA independent economics audit

Status: PASS for independent economics and T22 to T29. Original model hash: 9b3628d94d. This audit found no numerical disagreement requiring a change to the original model. All 84 valid plans match the independent calculation, with a largest floating-point difference of 3.637978807091713e-12 in the compared fields. The original thirteen checks pass, the independent calculator passes 31 checks, and the extension passes 13 checks.

The recommended plan remains B1 plus B2, with the third shift starting in February. Under the team's stated objective of maximising unrounded January to March EBITDA among plans passing the board screen, it ranks first. Its March EBITDA is ₹5.6 lakh and March returns are 4.5%. Q1 EBITDA remains ₹0.5 lakh below doing nothing. These are model forecasts from the fictional case, not observed commercial results. Board test 4 remains conditional on the controls described below.

## Scope and independence

I read all seven pages of the original case PDF and both FAQ pages, including both emails, every exhibit note and all five trade-in notes. I reconciled the numerical inputs and timing rules with the case transcription. No numerical transcription discrepancy was found in the audited economics inputs. Full case-to-report and case-to-slide coverage remains the coordinator's separate deliverable.

The independent script defines its own exhibit constants and constructs one record for each channel and grade. It calculates demand, post-Superb orders, delivered phones, expected costs and channel contributions from these records. It does not import the original model's constants or call its functions to produce independent results. It imports the original module only after calculating its own baseline and all plans, then compares outputs. Comparison covers each plan-month's EBITDA, contribution, deliveries, returns, sourcing savings, pickups, Superb and lab factors, demand and capacity, plus every channel's deliveries, contribution, commission, coupons, trade-in credit and grade volumes. Unit contributions, return regimes, baseline claim counts and expenses are also compared.

The original model was run with --dry. Its thirteen checks pass and its output hash is 9b3628d94d. The independent audit records the original source SHA-256. Both scripts write only beside themselves in the audit directory. The original calculator, original JSON, deck values and slide scripts remain unchanged by this work.

This is a marketing and operating-turnaround case. I used the case-deck marketing, operations and framework guidance to focus on channel contribution, capacity constraints, scenario analysis and explicit trade-offs. These guides adapt a playbook calibrated on M&A decks; they do not supply case evidence or numerical inputs.

## Baseline rebuilt from the exhibits

For a website-rate Superb phone, contribution is 24000 minus 17800 minus 800 minus 600 minus 3% times 2500 minus 4% times 1800, giving ₹4,653. The same calculation gives ₹2,524 for Good and ₹716 for Fair. Warranty rates are common across channels for each grade. Return rates change with the channel, so the grade contribution cannot be reused unchanged for stores or creators. [C-E2, C-E2N1 to C-E2N4, C-E3N3, C-E3N4]

| Return regime | Superb contribution ₹ | Good contribution ₹ | Fair contribution ₹ |
|---|---:|---:|---:|
| 0.5 times website | 4689 | 2587 | 833 |
| 1.0 times website | 4653 | 2524 | 716 |
| 1.5 times website | 4617 | 2461 | 599 |

Returns charge ₹1,800 for the expected returned share. The sale is recovered when the phone is resold and is not reversed. Warranty and return costs are separate expected expenses. [C-E2N1, C-E2N2]

| Channel | Delivered phones | Before channel costs ₹ lakh | Commission ₹ lakh | Fixed spend ₹ lakh | Coupon ₹ lakh | After marketing ₹ lakh | After marketing per phone ₹ |
|---|---:|---:|---:|---:|---:|---:|---:|
| ads | 2600 | 57.89160000 | 0.00000000 | 60 | 0.00000000 | -2.10840000 | -81.09230769 |
| mk | 2000 | 38.46600000 | 33.84000000 | 0 | 0.00000000 | 4.62600000 | 231.30000000 |
| cr | 900 | 28.23480000 | 0.00000000 | 18 | 0.00000000 | 10.23480000 | 1137.20000000 |
| st | 1000 | 33.57500000 | 0.00000000 | 21 | 0.00000000 | 12.57500000 | 1257.50000000 |
| rf | 700 | 20.98565000 | 0.00000000 | 0 | 2.45000000 | 18.53565000 | 2647.95000000 |

These audit tables retain more precision than the submitted deck. Company totals in the deck use one decimal lakh, and per-phone amounts use whole rupees. MegaKart's dashboard cost of zero omits its ₹33.84 lakh commission. Performance ads lose contribution after their existing ₹60 lakh fixed spend, despite the grade-level contributions being positive. [C-E3, C-E3N2, C-E3N6, C-E3N7]

The channels deliver 7,200 phones: 1,775 Superb, 3,190 Good and 2,235 Fair. Expected warranty claims are 468.15, costing ₹11.70375 lakh; expected returns are 582.4, costing ₹10.4832 lakh. The weighted return rate is 582.4 divided by 7200, or 8.088888889%. Contribution after marketing is ₹43.86305 lakh. Subtracting the separate ₹58 lakh company fixed-cost layer gives monthly EBITDA of minus ₹14.13695 lakh. [C-E2, C-E3, C-CO4, C-D1, C-D2]

The website-order reconciliation is 2600 ads plus 900 creators plus 700 referrals, or 4200. Adding 2000 MegaKart and 1000 stores gives the 7200 company total. Store and marketplace orders do not enter website conversion rates. The website visitor-to-order conversion is 4200 divided by 960000, or 0.4375%; cart-to-order conversion is 4200 divided by 26000, or 16.15384615%. [C-E1D, C-E3]

Annualising exhibit-built monthly EBITDA gives minus ₹169.6434 lakh, close to the rounded historical minus ₹170 lakh. The case's annual figure and monthly average do not need to be forced into exact agreement. [C-CO3, C-E3, A17, A18]

## Recommendation, timing and lost demand

B1 and B2 multiply demand by 1.08 times 1.08, giving 1.1664. Their return reductions multiply to 0.7 times 0.8, leaving 56% of the former return rates, equivalent to a 44% reduction. The 56% is not a 56% reduction. B2 raises Superb and Good prices by 4%, changes warranty claims, and adds expected battery costs of ₹400 per Good and ₹560 per Fair phone. B1 adds ₹120 per delivered phone. MegaKart commission rises with the increased selling prices. [C-E6B1, C-E6B2, C-E6H2, C-E3N2]

Raw demand is 7200 times 1.1664, or 8398.08. Superb demand is 1775 times 1.1664, or 2070.36. With only 2000 Superb phones, the first rationing step removes 70.36 Superb orders pro rata across channels. Total remaining demand is 8327.72, below the 9000 sellable capacity after the shift. All remaining orders are delivered. The shift adds 1800 sellable phones; applying another 10% failure deduction to that increase would contradict the case. [C-E4b, C-E6SH, C-E6H4]

| Metric | January | February | March |
|---|---:|---:|---:|
| Phones delivered | 7200.00000000 | 8327.72000000 | 8327.72000000 |
| Contribution after marketing ₹ lakh | 43.8630500000 | 72.6049980833 | 72.6049980833 |
| Growth money ₹ lakh | 40.0000000000 | 9.00000000000 | 9.00000000000 |
| EBITDA ₹ lakh | -54.1369500000 | 5.60499808329 | 5.60499808329 |
| Return rate | 0.0808888888889 | 0.0454960366285 | 0.0454960366285 |

January customer-facing operations stay unchanged. The ₹40 lakh B1 and B2 setup payment reduces January EBITDA. The shift costs ₹9 lakh in February and another ₹9 lakh in March, for ₹58 lakh total Q1 growth money. Per-phone reports and batteries reduce contribution and are not added to growth money. [C-E6H1, C-E6H3]

Unrounded Q1 EBITDA is minus ₹42.9269538334197 lakh, compared with minus ₹42.41085 lakh from doing nothing. The difference is minus ₹0.5161038334196633 lakh. The recommendation's advantage over the next feasible plan is ₹14.238339958414542 lakh. Presentation values are therefore minus ₹42.9 lakh, minus ₹42.4 lakh, minus ₹0.5 lakh and ₹14.2 lakh respectively. The next-best plan starts the shift in March; its February capacity loss outweighs the ₹9 lakh saved that month. T25 records the comparison. [C-F15, T23, T25]

## Trade-in mechanics checked separately

Replacement supply and incremental buyer orders are different flows. At 1000 trade-ins, 850 phones pass under the proportional-failure assumption. The passed mix is 255 Superb, 425 Good and 170 Fair. These replace wholesale phones and save 8% of the corresponding wholesale prices. They do not add lab capacity. The 255 Superb phones increase available Superb supply from 2000 to 2255. Separately, 30% of all participants create 300 incremental buyer orders with a 40/50/10 grade mix. Those orders consume lab capacity and receive a ₹1000 credit only if delivered. A, B1, B2 and B3 order uplifts do not multiply these 300 orders. [C-E6TI1 to C-E6TI5, C-E6H2, A06, A07]

Every pickup costs ₹400, including pickups of failed phones. Parts recovery creates no sourcing saving on failed phones and does not recover pickup cost. Savings and pickup costs sit outside the channel rows, so channel contribution alone must not be mistaken for total contribution when C is active. T22 records both rationing stages for every selected channel-grade cell. All 84 plan comparisons include the trade-in cases. [C-E6TI2, C-E6TI3, C-D1, A20]

## Sensitivities and April interpretation

The independent March EBITDA-zero boundaries are a combined order uplift of 10.51264298588438%, a Good swap share of 55.06389481041294%, and a Fair swap share of 96.87574074117291%, each holding the other base inputs fixed. These are local model boundaries, not guarantees. The two-input grid contains all sixteen intersections of the approved uplift and Good-swap values. Its combined uplift replaces the B1/B2 demand product once. The two independently calculated break-even inputs do not produce zero when combined with each other, because each root assumes the other input stays at its base value. [T24]

The 6% return boundary occurs when 73.85258692826979% of former channel return rates remain. It is a board limit and must not be described as EBITDA break-even. The proposed 5.5% return warning and 50% Good-swap warning are management conventions. Good-swap EBITDA break-even is about 55%, so 50% must retain its warning label. [C-T3t, T27]

The joint bear case changes only the declared uncertain demand effects, return reductions, battery shares and B2 claim rates. It keeps prices and report costs fixed. March EBITDA falls to minus ₹8.7435794038 lakh, although returns remain below 6%. The board's EBITDA test therefore fails in that case. [A16, independent-audit.json scenarios]

For April, T28 assumes new growth funding and restarts trade-in arrivals at 1000. Ongoing EBITDA is ₹21.4290092512 lakh before the C setup payment. Incremental ongoing EBITDA versus keeping the plan is ₹15.824011167909845 lakh. Paying the ₹35 lakh setup in April produces April EBITDA of minus ₹13.5709907488 lakh and incremental benefit after setup of minus ₹19.175988832090155 lakh. The inherited ₹21.4 lakh April figure must be labelled before setup. [A15, T28]

With the subsequent 1800, 2600, 3400 and 4000 ramp, cumulative incremental benefit recovers the ₹35 lakh in May. Linear within-month interpolation gives 1.7489408766967243 months from April launch. This replaces the inherited 2.2-month headline, which divides ₹35 lakh by the first month’s incremental ongoing benefit and holds that benefit constant. The ramp-aware calculation increases benefit as trade-in arrivals rise; it accumulates incremental benefit relative to keeping the plan, never total company EBITDA. This is a payback-method correction, not a disagreement with the inherited monthly engine. This interpolation uses an even-accrual convention and is not a cash-flow forecast. T29 also shows the consequence of continuing the calendar ramp at 2600 in April, which would require a separate assumption after deferring C in Q1. [T28, T29]

## Compliance and evidence limits

The model's fourth test checks whether B1 is selected. This is a conditional screening proxy. Paying for B1 does not demonstrate compliant execution. The final claims review must cover own-lab battery readings, refurbished wording, compatible batteries, warranty terms, IMEI status, completed data wipes, verified reviews, unconditional disclosed review rewards, creator advertisement labels, genuine reference pricing, absence of false urgency and evidence for named comparisons. The numerical screen cannot certify any of those operating records. [C-E5a to C-E5f, C-F16]

The survey allows multiple answers. Its percentages cannot be added into a customer share or treated as realised conversion uplift. Its 5% price offer also differs from A's 3% Fair-price cut. The November battery finding is 22 of 200 Good phones, a sample. Scaling it to 350.9 monthly Good phones is an indicative diagnostic under A14; it does not justify an invented downgrade cost. [C-E1A, C-E1B, C-E4c, C-E6A, C-F9]

Family buyers rank first under all three requested weighting schemes in T26, but the underlying six scores are team judgement. Doubling one weight does not validate those scores or prove segment-specific response. Existing channel spend is held fixed in every plan because Exhibit 6 provides no reallocation lever. The recommendation cannot assume ads are cut in Q1 while retaining its calculated demand. [T26, A02, C-F12]

## B6 acceptance ledger

| Required distinction | Evidence and result |
|---|---|
| January operation and setup | PASS: unchanged operating cells across all 84 plans; January setup separately reduces EBITDA |
| A advertising once | PASS: ₹10 lakh charged once in each live month; channel fixed spend unchanged |
| B3 eligibility and MegaKart | PASS: invalid standalone B3 actively rejected; MegaKart demand unchanged by B3 |
| B1/B2 multiplication | PASS: demand 1.1664 and return multiplier 0.56 |
| A channel mix and B2 price scope | PASS: A changes ads/MegaKart mix only; B2 prices Superb/Good only |
| Commission | PASS: 12% of changed delivered selling prices |
| Capacity limits and sequence | PASS: 7200/9000 sellable limits; Superb rationed before lab |
| Trade-in buyer uplift | PASS: incremental demand excluded from lever multiplication |
| Pickup, failures, credit | PASS: all pickups charged; passed phones alone save; delivered buyer credits only |
| Conservation | PASS: channel and grade totals reconcile for every plan-month |
| Ranking and bridge | PASS: full-precision Q1 ranking and independent additive March bridge |
| Scenarios | PASS: changes restricted to the seven declared uncertain input keys |
| Return boundary | PASS: explicitly a 6% board limit; its EBITDA is not zero |
| Presentation agreement | PASS for audit JSON and generated T22-T29 Markdown; final assembled report/deck comparison remains coordinator-owned |

## Corrections and unresolved work

Canonical corrections are ₹2,648 referral contribution per order from ₹2647.95; ₹1,258 store contribution from ₹1257.50; and ₹14.2 lakh next-best-plan advantage from ₹14.238339958414542 lakh. The April payback label also needs correction from a constant-first-month 2.2-month approximation to ramp-aware recovery during May, about 1.75 months under even accrual. Original files are protected, so old prose was not edited by this audit. The coordinator must propagate these values through the new manuscript and enriched deck. [independent-audit.json canonical]

There are no unresolved numerical discrepancies between the independent calculator and inherited model. Remaining limitations are claim-control implementation, April funding and ramp uncertainty, judgement-based segment scores, and final cross-artifact display checks. They do not prevent using the audited economics but must remain visible in the research and deck. The full case/FAQ coverage ledger, source verification, research rendering and final deck QA are outside this worker's write scope.

## Rebuild and editorial review

Run independent_audit.py first, then extend_model.py, using Python 3.12 or another Python 3 runtime. The scripts use only standard-library modules. Reading the PDFs during this audit used Python 3.12 with PyMuPDF; rebuilding these calculations does not require that package.

The humanizer process was applied to this report: I marked repeated conclusions, unnecessary contrast formulas and inflated assurance language, rewrote those passages into factual findings, and checked the final prose against the JSON for retained figures, signs, scope and conditions. No unsupported facts, invented research or altered inputs were added. Authored prose contains no em or en dashes.
