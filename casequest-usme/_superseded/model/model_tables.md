# CaseQuest model tables

All economics are illustrative team assumptions except the cited postal quote. Pilot budget is a proposed estimate, not sanctioned funding.

### T01. Assumption register
| Input | Downside | Base | Upside |
| --- | --- | --- | --- |
| sale | 2600 | 3000 | 3400 |
| product | 1100 | 1000 | 950 |
| pack | 100 | 80 | 70 |
| platform | 0.15 | 0.12 | 0.1 |
| payment_fx | 0.04 | 0.03 | 0.025 |
| seller_duty | 180 | 0 | 0 |
| minutes_before | 50 | 40 | 35 |
| minutes_after | 35 | 20 | 15 |
| hourly | 140 | 120 | 100 |
| freight_saving | 0 | 0.15 | 0.25 |
| service | 50 | 30 | 25 |
| collection | 40 | 22 | 15 |
| return_before | 0.16 | 0.1 | 0.07 |
| return_after | 0.16 | 0.09 | 0.05 |
| lost | 0.02 | 0.01 | 0.005 |
| reimport_share | 0.7 | 0.55 | 0.4 |
| resale_share | 0.15 | 0.25 | 0.4 |
| refund_no_return_share | 0.15 | 0.2 | 0.2 |
| reimport_cost | 900 | 700 | 550 |
| resale_recovery | 0.5 | 0.7 | 0.8 |
| fixed_monthly | 500 | 300 | 200 |
| orders_month | 5 | 10 | 16 |
| activation_m9 | 0.35 | 0.6 | 0.75 |
| retention_m12 | 0.4 | 0.65 | 0.8 |

### T02. Baseline economics
| Scenario | Expected contribution ₹/order | Monthly ₹ |
| --- | --- | --- |
| downside | -507.55 | -2537.73 |
| base | 460.5 | 4605.0 |
| upside | 1074.37 | 17189.87 |

### T03. Proposed economics
| Scenario | Expected contribution ₹/order | Monthly ₹ |
| --- | --- | --- |
| downside | -562.55 | -3312.73 |
| base | 570.35 | 5403.5 |
| upside | 1275.0 | 20200.0 |

### T04. Cost decomposition
| Component | Before ₹ | After ₹ |
| --- | --- | --- |
| product | 1000 | 1000 |
| packaging | 80 | 80 |
| freight | 638 | 542.3 |
| platform | 360.0 | 360.0 |
| payment_fx | 90.0 | 90.0 |
| seller_destination | 0 | 0 |
| compliance | 80.0 | 40.0 |
| service | 0 | 30 |
| collection | 0 | 22 |

### T05. Return decision tree
| Outcome | Probability | Contribution ₹ |
| --- | --- | --- |
| delivered | 0.9 | 835.7 |
| reimported | 0.0495 | -2364.3 |
| overseas_resale | 0.0225 | -184.3 |
| refund_no_return | 0.018 | -2164.3 |
| lost | 0.01 | -2164.3 |

### T06. Monthly seller contribution
| Scenario | Before ₹ | After ₹ | Change ₹ |
| --- | --- | --- | --- |
| downside | -2537.73 | -3312.73 | -775.0 |
| base | 4605.0 | 5403.5 | 798.5 |
| upside | 17189.87 | 20200.0 | 3010.13 |

### T07. Pooling threshold
| Scenario | Freight saving ₹ | Service + collection ₹ | Net ₹ |
| --- | --- | --- | --- |
| downside | 0 | 90 | -90 |
| base | 95.7 | 52 | 43.7 |
| upside | 159.5 | 40 | 119.5 |

### T08. Pilot budget
| Item | ₹ |
| --- | --- |
| local_desks | 3600000 |
| training | 1200000 |
| technology | 2400000 |
| evaluation | 1200000 |
| contingency | 1200000 |
| Total | 9600000 |

### T09. Monthly activation
| Month | Active early sellers | Retained early sellers | Incremental contribution ₹ |
| --- | --- | --- | --- |
| 1 | 0 | 0 | 0.0 |
| 2 | 0 | 0 | 0.0 |
| 3 | 51 | 0 | 56023.5 |
| 4 | 103 | 0 | 113145.5 |
| 5 | 154 | 0 | 169169.0 |
| 6 | 206 | 0 | 226291.0 |
| 7 | 257 | 0 | 282314.5 |
| 8 | 309 | 0 | 339436.5 |
| 9 | 360 | 234 | 395460.0 |
| 10 | 360 | 234 | 395460.0 |
| 11 | 360 | 234 | 395460.0 |
| 12 | 360 | 234 | 395460.0 |

### T10. Scenario summary
| Scenario | Before ₹/order | After ₹/order | Change ₹/order |
| --- | --- | --- | --- |
| downside | -507.55 | -562.55 | -55.0 |
| base | 460.5 | 570.35 | 109.85 |
| upside | 1074.37 | 1275.0 | 200.63 |

### T11. Freight sensitivity
| Freight saving | Return rate | Expected contribution ₹ | Pool saving ₹ |
| --- | --- | --- | --- |
| 0 | 0.05 | 579.25 | -52 |
| 0 | 0.09 | 474.65 | -52 |
| 0 | 0.16 | 291.6 | -52 |
| 0.1 | 0.05 | 643.05 | 11.8 |
| 0.1 | 0.09 | 538.45 | 11.8 |
| 0.1 | 0.16 | 355.4 | 11.8 |
| 0.2 | 0.05 | 706.85 | 75.6 |
| 0.2 | 0.09 | 602.25 | 75.6 |
| 0.2 | 0.16 | 419.2 | 75.6 |
| 0.25 | 0.05 | 738.75 | 107.5 |
| 0.25 | 0.09 | 634.15 | 107.5 |
| 0.25 | 0.16 | 451.1 | 107.5 |

### T12. Adoption and service cost
| Active sellers | Service cost ₹/order | Expected contribution ₹ | Budget per active ₹ |
| --- | --- | --- | --- |
| 150 | 50 | 550.35 | 64000.0 |
| 300 | 40 | 560.35 | 32000.0 |
| 600 | 30 | 570.35 | 16000.0 |
| 900 | 25 | 575.35 | 10666.67 |

### T13. Fiscal and resource accounts
| Account | Base ₹ | Treatment |
| --- | --- | --- |
| Government cash budget | 9600000 | Cost |
| Seller change/order | 109.85 | Private benefit estimate |
| Tax and subsidies | 0 | Transfer; not new resource benefit |

### T14. Option scoring inputs
| Option | Status |
| --- | --- |
| Outreach only | Evidence review required |
| New central portal | Evidence review required |
| Broad shipping subsidy | Evidence review required |
| Single-platform partnership | Evidence review required |
| Cluster Export Compact | Working hypothesis, not automatically preferred |

### T15. Pilot KPI definitions
| KPI | Target | Status |
| --- | --- | --- |
| Controllable service cost | -20% | Proposed test target |
| Seller admin time | -50% | Proposed test target |
| Return resolution time | -30% | Proposed test target |
