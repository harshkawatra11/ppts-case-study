# SwiftKart model tables (model hash effb9a66e6)

## T1. Case facts used by the model

| Key | Brief ID | Value |
|---|---|---|
| fleet | D01 | 100 |
| rev_del | D02 | 40 |
| del_day | D03 | 30 |
| days | D04 | 26 |
| rider | D05 | 14000 |
| petrol_run | D06 | 9000 |
| ev_run | D07 | 3000 |
| util | D08 | 0.85 |
| capital | D09 | 10000000.0 |
| ev_price | D10 | 120000 |
| ev_life | D13 | 48 |
| ev_resale | D14 | 25000 |
| lease | D12 | 3500 |
| lease_life | D13 | 36 |
| petrol_resale | X05 | 30000 |
| charge_100 | X01 | 1000000.0 |
| subsidy | X06 | 10000 |
| loan_rate | X08 | 0.11 |
| loan_term | X08 | 36 |
| c_veh | O02 | 75 |
| c_rev | O07 | 28000000.0 |
| fulfil | O03 | 0.95 |
| scale_m | O06 | 12 |
| ev_range_del | X02 | 30 |

## T2. Unit economics per bike-month

| Configuration | Utilisation | Deliveries | Revenue, Rs | Rider, Rs | Vehicle, Rs | Contribution, Rs | Margin |
|---|---|---|---|---|---|---|---|
| Petrol bike | 85% | 663 | 26,520 | 14,000 | 9,000 | 3,520 | 13.3% |
| EV bought, running cost only | 85% | 663 | 26,520 | 14,000 | 3,000 | 9,520 | 35.9% |
| EV bought, all-in | 85% | 663 | 26,520 | 14,000 | 5,684 | 6,836 | 25.8% |
| EV leased | 85% | 663 | 26,520 | 14,000 | 3,500 | 9,020 | 34.0% |
| EV leased, contract at full volume | 100% | 780 | 31,200 | 14,000 | 3,500 | 13,700 | 43.9% |

## T3. A bought EV, monthly equivalent at 11% over 48 months, against the lease

| Component | Rs a month |
|---|---|
| Capital (Rs 1,20,000 less Rs 10,000 subsidy) | 2,843 |
| Resale credit (Rs 25,000 at month 48) | −417 |
| Charging hub share (Rs 10,000) | 258 |
| Running cost | 3,000 |
| Total, bought | 5,684 |
| Lease, all-in | 3,500 |
| EMI alone on a 3-year 11% loan | 3,601 |

## T4. The options, as modelled

| ID | Option | Contract | Existing fleet | Contract fleet |
|---|---|---|---|---|
| O0 | Stay petrol, no contract | No | petrol | none |
| O1 | Buy 100 EVs, no contract | No | bought in month 2 | none |
| O2 | Buy EVs for the contract, keep petrol | Yes | petrol | bought in months 4, 6, 8 |
| O3 | Buy EVs for both | Yes | bought in waves (months 2, 4, 12) | bought in months 4, 6, 8 |
| O4 | Lease EVs for the contract, keep petrol | Yes | petrol | leased in months 4, 6, 8 |
| O5 | Lease EVs for both, electrify first | Yes | leased in waves (months 2, 4, 12) | leased in months 4, 6, 8 |
| O6 | Lease EVs for the existing fleet, contract not won | No | leased in waves (months 2, 4, 12) | none |

## T5. Options compared (base case)

| ID | Option | NPV 48m, Rs Cr | vs petrol, Rs Cr | Contribution 24m, Rs L | Run-rate M24, Rs L a year | Cash M24, Rs Cr | Lowest cash, Rs L | Debt, Rs L | Capex 24m, Rs L | g CO2 per delivery M24 |
|---|---|---|---|---|---|---|---|---|---|---|
| O0 | Stay petrol, no contract | 1.45 | 0.00 | 84.5 | 42.2 | 1.84 | 103.5 | 0.0 | 0.0 | 240 |
| O1 | Buy 100 EVs, no contract | 2.94 | 1.48 | 222.5 | 114.2 | 2.31 | 21.5 | 0.0 | 110.0 | 114 |
| O2 | Buy EVs for the contract, keep petrol | 3.36 | 1.90 | 239.8 | 150.6 | 1.89 | 12.0 | 35.0 | 89.1 | 173 |
| O3 | Buy EVs for both | 4.66 | 3.21 | 363.6 | 220.7 | 2.32 | 12.4 | 110.0 | 203.5 | 106 |
| O4 | Lease EVs for the contract, keep petrol | 3.80 | 2.35 | 228.6 | 143.6 | 2.54 | 67.9 | 0.0 | 0.0 | 173 |
| O5 | Lease EVs for both, electrify first | 5.76 | 4.31 | 338.7 | 206.0 | 3.74 | 101.6 | 0.0 | 0.0 | 106 |
| O6 | Lease EVs for the existing fleet, contract not won | 3.34 | 1.88 | 194.5 | 104.7 | 2.97 | 103.5 | 0.0 | 0.0 | 114 |

## T6. Scorecard

Score = 0.35 Value + 0.20 Liquidity + 0.20 Resilience + 0.15 Emissions + 0.10 Growth

| ID | Value | Liquidity | Resilience | Emissions | Growth | Value at risk | Score |
|---|---|---|---|---|---|---|---|
| O0 | 1 | 5 | 1 | 2 | 1 | 130% | 1.95 |
| O1 | 2 | 4 | 4 | 5 | 1 | 42% | 3.15 |
| O2 | 3 | 3 | 2 | 3 | 5 | 91% | 3.00 |
| O3 | 4 | 1 | 4 | 5 | 5 | 52% | 3.65 |
| O4 | 3 | 5 | 3 | 3 | 5 | 76% | 3.60 |
| O5 | 5 | 5 | 5 | 5 | 5 | 35% | 5.00 |

## T7. Recommended plan, month by month (Rs lakh)

| Month | Petrol | EV | Spares | Revenue | Contribution | Investment | Working capital | Petrol sales | Cash flow | Cash |
|---|---|---|---|---|---|---|---|---|---|---|
| 1 | 100 | 0 | 0 | 26.5 | 3.5 | 0.0 | 0.0 | 0.0 | 3.5 | 103.5 |
| 2 | 50 | 50 | 4 | 26.5 | 6.0 | 22.9 | 0.0 | 15.0 | −1.9 | 101.6 |
| 3 | 50 | 50 | 4 | 26.5 | 6.0 | 0.0 | 0.0 | 0.0 | 6.0 | 107.7 |
| 4 | 10 | 115 | 6 | 32.0 | 7.7 | 13.2 | 10.4 | 12.0 | −4.0 | 103.7 |
| 5 | 10 | 115 | 6 | 32.4 | 8.1 | 0.0 | 0.7 | 0.0 | 7.3 | 111.0 |
| 6 | 10 | 140 | 8 | 39.0 | 10.2 | 5.8 | 12.6 | 0.0 | −8.2 | 102.8 |
| 7 | 10 | 140 | 8 | 39.8 | 11.0 | 0.0 | 1.5 | 0.0 | 9.5 | 112.3 |
| 8 | 10 | 165 | 10 | 47.6 | 14.3 | 5.8 | 14.8 | 0.0 | −6.4 | 105.9 |
| 9 | 10 | 165 | 10 | 48.8 | 15.5 | 0.0 | 2.2 | 0.0 | 13.2 | 119.2 |
| 10 | 10 | 165 | 10 | 49.9 | 16.6 | 0.0 | 2.2 | 0.0 | 14.4 | 133.6 |
| 11 | 10 | 165 | 10 | 49.9 | 16.6 | 0.0 | 0.0 | 0.0 | 16.6 | 150.2 |
| 12 | 0 | 175 | 10 | 49.9 | 17.2 | 1.9 | 0.0 | 2.7 | 18.0 | 168.2 |
| 13 | 0 | 175 | 10 | 49.9 | 17.2 | 0.0 | 0.0 | 0.0 | 17.2 | 185.4 |
| 14 | 0 | 175 | 10 | 49.9 | 17.2 | 0.0 | 0.0 | 0.0 | 17.2 | 202.6 |
| 15 | 0 | 175 | 10 | 49.9 | 17.2 | 0.0 | 0.0 | 0.0 | 17.2 | 219.7 |
| 16 | 0 | 175 | 10 | 49.9 | 17.2 | 0.0 | 0.0 | 0.0 | 17.2 | 236.9 |
| 17 | 0 | 175 | 10 | 49.9 | 17.2 | 0.0 | 0.0 | 0.0 | 17.2 | 254.1 |
| 18 | 0 | 175 | 10 | 49.9 | 17.2 | 0.0 | 0.0 | 0.0 | 17.2 | 271.2 |
| 19 | 0 | 175 | 10 | 49.9 | 17.2 | 0.0 | 0.0 | 0.0 | 17.2 | 288.4 |
| 20 | 0 | 175 | 10 | 49.9 | 17.2 | 0.0 | 0.0 | 0.0 | 17.2 | 305.6 |
| 21 | 0 | 175 | 10 | 49.9 | 17.2 | 0.0 | 0.0 | 0.0 | 17.2 | 322.7 |
| 22 | 0 | 175 | 10 | 49.9 | 17.2 | 0.0 | 0.0 | 0.0 | 17.2 | 339.9 |
| 23 | 0 | 175 | 10 | 49.9 | 17.2 | 0.0 | 0.0 | 0.0 | 17.2 | 357.1 |
| 24 | 0 | 175 | 10 | 49.9 | 17.2 | 0.0 | 0.0 | 0.0 | 17.2 | 374.2 |

## T8. Recommended plan by quarter

| Quarter | Revenue, Rs L | Contribution, Rs L | Cash at end, Rs L | Petrol bikes | EVs existing | EVs contract | Spares |
|---|---|---|---|---|---|---|---|
| Q1 | 79.6 | 15.6 | 107.7 | 50 | 50 | 0 | 4 |
| Q2 | 103.3 | 25.9 | 102.8 | 10 | 90 | 50 | 8 |
| Q3 | 136.1 | 40.7 | 119.2 | 10 | 90 | 75 | 10 |
| Q4 | 149.8 | 50.4 | 168.2 | 0 | 100 | 75 | 10 |
| Q5 | 149.8 | 51.5 | 219.7 | 0 | 100 | 75 | 10 |
| Q6 | 149.8 | 51.5 | 271.2 | 0 | 100 | 75 | 10 |
| Q7 | 149.8 | 51.5 | 322.7 | 0 | 100 | 75 | 10 |
| Q8 | 149.8 | 51.5 | 374.2 | 0 | 100 | 75 | 10 |

## T9. Uses of the Rs 1 crore, months 1 to 24

| Use | Rs lakh | Share | When |
|---|---|---|---|
| Contract working capital | 44.5 | 44% | months 4 to 10 |
| Charging hub | 18.5 | 18% | months 2 to 8 |
| Lease deposits | 12.9 | 13% | months 2 to 8 |
| Reporting and dispatch | 13.0 | 13% | month 2 |
| Riders: hiring and EV training | 5.2 | 5% | months 2 to 12 |
| Reserve | 5.8 | 6% | held |

## T10. Scenarios

| Option | Measure | bear | base | bull |
|---|---|---|---|---|
| O0 | NPV, Rs Cr | 0.41 | 1.45 | 2.08 |
| O0 | Run-rate M24, Rs L | 6.7 | 42.2 | 61.0 |
| O0 | Lowest cash, Rs L | 102.0 | 103.5 | 105.1 |
| O0 | Debt, Rs L | 0.0 | 0.0 | 0.0 |
| O3 | NPV, Rs Cr | 1.35 | 4.66 | 5.67 |
| O3 | Run-rate M24, Rs L | 115.6 | 220.7 | 244.1 |
| O3 | Lowest cash, Rs L | 10.3 | 12.4 | 13.1 |
| O3 | Debt, Rs L | 140.0 | 110.0 | 65.0 |
| O5 | NPV, Rs Cr | 1.50 | 5.76 | 6.80 |
| O5 | Run-rate M24, Rs L | 67.6 | 206.0 | 229.4 |
| O5 | Lowest cash, Rs L | 63.0 | 101.6 | 105.1 |
| O5 | Debt, Rs L | 0.0 | 0.0 | 0.0 |
| O6 | NPV, Rs Cr | 1.55 | 3.34 | 4.00 |
| O6 | Run-rate M24, Rs L | 49.2 | 104.7 | 124.0 |
| O6 | Lowest cash, Rs L | 95.4 | 103.5 | 105.1 |
| O6 | Debt, Rs L | 0.0 | 0.0 | 0.0 |

## T11. Sensitivity of the recommended plan (NPV over 48 months, Rs Cr)

| Input | Low case | High case | NPV low | NPV high | Swing |
|---|---|---|---|---|---|
| Price per delivery | Rs 36 | Rs 44 | 3.95 | 7.58 | 3.62 |
| Contract volume | 80% | 100% | 4.21 | 5.76 | 1.55 |
| All-in lease rate | Rs 5,000 | Rs 3,000 | 4.76 | 6.10 | 1.33 |
| Utilisation now | 80% | 90% | 5.16 | 6.37 | 1.22 |
| Rider pay rise | +15% from month 13 | flat | 4.75 | 5.76 | 1.02 |
| Discount rate | 15% | 9% | 5.30 | 6.02 | 0.72 |
| EV availability | 88% | 98% | 5.38 | 5.76 | 0.38 |
| Award month | month 6 | month 2 | 5.55 | 5.84 | 0.29 |
| Receivable days | 75 days | 30 days | 5.72 | 5.83 | 0.10 |

## T12. The seven uncertainties in the case, against each option (change in NPV, Rs lakh)

| Uncertainty | O0 | O1 | O2 | O3 | O4 | O5 |
|---|---|---|---|---|---|---|
| Petrol up 20% from month 7 | −59.9 | 0.0 | −59.9 | −0.8 | −59.9 | −0.8 |
| EV prices fall 15% | 0.0 | −2.4 | −1.8 | −4.2 | 0.0 | 0.0 |
| Delivery demand down 10% | −103.6 | −103.6 | −181.6 | −181.6 | −181.1 | −181.1 |
| Electricity up 25% | 0.0 | −8.6 | −5.8 | −14.0 | 0.0 | 0.0 |
| Charging downtime doubles | 0.0 | 0.0 | −21.7 | −21.7 | −21.7 | −21.7 |
| EV subsidy withdrawn | 0.0 | −9.8 | −7.9 | −18.2 | 0.0 | 0.0 |
| Clients shift volume by emissions | −26.0 | 26.0 | −26.0 | 26.0 | −26.0 | 26.0 |

Exposure (sum of losses), Rs lakh: O0 189.5, O1 124.4, O2 304.7, O3 240.5, O4 288.7, O5 203.6

## T13. Switch points and break-evens

| Question | Answer |
|---|---|
| Lease rate at which buying one bike matches leasing | Rs 5,684 a month |
| Lease rate at which buying both fleets matches leasing both (NPV) | Rs 5,153 a month |
| Subsidy per EV at which buying matches the Rs 3,500 lease | Rs 94,521 |
| Contract utilisation at which one leased bike breaks even | 56.1% |
| Contract volume at which the leased contract adds no value over petrol | 69.7% |
| Revenue per delivery at which the recommended plan is worth zero over 48 months | Rs 27.3 |
| EMI on a financed EV, 3 years at 11% | Rs 3,601 |

## T14. Emissions

| Measure | Today | Month 12 | Month 24 |
|---|---|---|---|
| Tonnes CO2 a year | 190.8 | 158.9 | 158.9 |
| Grams CO2 per delivery | 240 | 106 | 106 |
| Deliveries a month | 66,300 | 1,24,800 | 1,24,800 |

## T15. Contribution bridge, today to month 24 (Rs lakh a year)

| Step | Rs lakh |
|---|---|
| Today, petrol | 42.2 |
| Fuel to lease, 100 bikes | 66.0 |
| Spares, existing fleet | −1.7 |
| Contract margin, 75 bikes | 123.3 |
| Spares, contract | −2.5 |
| Contract overhead | −18.0 |
| Reporting running cost | −3.3 |
| Month 24, run-rate | 206.0 |

## T16. Assumptions register

| ID | Assumption | Base | Bear | Bull | Unit | Basis |
|---|---|---|---|---|---|---|
| A01 | Contract receivable days | 57 | 60 | 30 | days | M1 update from lane R-C verified data: Delhivery 58 to 67 days (Screener and StockAnalysis, FY24 to FY25) and Blue Dart 48 to 56 days (StockAnalysis, FY24 to FY26), median of the eight verified points (48, 50.65, 53, 56.4, 58, 61, 64, 67) is 57.2 days, rounded to 57 |
| A02 | Lease security deposit | 2 | 3 | 1 | months | EV fleet leases ask one to three months of rent as a refundable deposit (lane R-B) |
| A03 | New rider onboarding | 5000 | 7000 | 4000 | Rs per rider | Recruitment, police verification, training, kit and first-month insurance (lane R-F) |
| A04 | EV training for existing riders | 1500 | 2500 | 1000 | Rs per rider | Half-day course on EV handling, charging discipline and battery safety |
| A05 | Reporting and dispatch platform build | 1300000 | 1700000 | 1000000 | Rs | Telematics integration, GHG Protocol method, emissions dashboard, external review, pooled dispatch (lanes R-D, R-F) |
| A06 | Telematics and reporting running cost | 150 | 250 | 100 | Rs per vehicle-month | Software and data per connected vehicle (lane R-F) |
| A07 | Contract operations overhead | 150000 | 200000 | 120000 | Rs per month | Two hub supervisors, one fleet and energy manager, one reporting analyst |
| A08 | Contract award month | 3 | 5 | 2 | month | Negotiation, audit and onboarding take two to four months |
| A09 | Contract volume in the first month of supply | 0.7 | 0.6 | 0.8 | share | The case says investment comes before full utilisation (O08) |
| A10 | Months from first supply to plateau volume | 6 | 9 | 4 | months | Inside the 12-month scaling window (O06) |
| A11 | Plateau volume as a share of the Rs 2.8 crore capacity | 1.0 | 0.85 | 1.0 | share | The case revenue implies 100% utilisation; bear holds the 85% SwiftKart achieves today |
| A12 | All-in EV lease rate | 3500 | 5000 | 3500 | Rs per month | The case gives Rs 3,500 (D12); bear is a market rate if the case rate cannot be secured (lane R-B) |
| A13 | Existing-fleet utilisation | 0.85 | 0.8 | 0.9 | share | Case 85% (D08) |
| A14 | Discount rate | 0.11 | 0.15 | 0.11 | per year | Bank rate of 11% (X08) as the cost of capital; bear adds an equity premium |
| A15 | EV availability after charging downtime | 0.95 | 0.9 | 0.98 | share | The case flags charging downtime (X03); spares absorb it |
| A16 | Rider pay rise from month 13 | 0.0 | 0.1 | 0.0 | share | Minimum wage revisions and the labour codes (lane R-E) |
| A17 | Value of a petrol bike still held in month 48 | 12000 | 8000 | 15000 | Rs | Delhi makes new two-wheeler registrations electric-only from 1 April 2028 (lane R-E), so used petrol values fall |
| A18 | Resale of petrol bikes sold in month 12 | 27000 | 24000 | 30000 | Rs | Case Rs 30,000 today (X05), about 10% lower a year on |
| A19 | Fuel share of petrol running cost | 0.78 | 0.78 | 0.78 | share | The rest is servicing, oil and tyres (lane R-D) |
| A20 | Delhi petrol price | 102.0 | 102.0 | 102.0 | Rs per litre | M1 update from lane R-D verified data: 102.12 a litre, confirmed as the live rate as of 15 Oct 2026 by two independent sources (Upstox RD11, Business Today RD12), rounded to 102.0 |
| A21 | Petrol emission factor | 2.31 | 2.31 | 2.31 | kg CO2 per litre | IPCC 2006 default for motor gasoline (lane R-G) |
| A22 | Delivery-bike fuel economy | 42.0 | 42.0 | 42.0 | km per litre | 110 to 125 cc bike in stop-start city delivery (lane R-D) |
| A23 | EV energy use including charging losses | 0.036 | 0.036 | 0.036 | kWh per km | Cargo e-scooter energy use (lane R-D) |
| A24 | Grid emission factor | 0.727 | 0.727 | 0.727 | kg CO2 per kWh | CEA CO2 Baseline Database, latest version (lane R-G) |
| A25 | Minimum cash balance | 1000000 | 1000000 | 1000000 | Rs | About one month of rider pay for the contract fleet |
| A26 | Resale multiplier on owned EVs | 1.0 | 0.85 | 1.0 | multiplier | Falling new-EV prices pull used values down (case U02) |

## T17. Checks

| Check | Result |
|---|---|
| contract revenue ties to 75 x 30 x 26 x Rs 40 x 12 | PASS |
| current contribution is Rs 3,520 a bike-month | PASS |
| lease beats bought all-in at case values | PASS |
| financed EMI alone exceeds the lease | PASS |
| recommended has the highest NPV of the six | PASS |
| recommended needs no debt | PASS |
| buying both needs debt | PASS |
| uses of the Rs 1 crore sum to Rs 1 crore | PASS |
| reserve is positive | PASS |
| bridge sums to the month 24 run-rate | PASS |
| recommended stays above the cash floor in bear without debt | PASS |
| recommended beats buying both in bear and in bull | PASS |
| no petrol bikes at month 24 | PASS |
| contract fleet complete within 12 months | PASS |
| emissions per delivery fall | PASS |
| scorecard ranks the recommendation first | PASS |
| no-award branch still beats staying petrol | PASS |
| lease switch point above the case lease | PASS |
