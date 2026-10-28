# Model tables

Model b1125880f5, run 2026-10-18T12:05:39.

## T1. Case 4: four ways to count the mechanic and puncture-shop universe (lakh outlets)

| Method | Kind | Low | Base | High |
|---|---|---|---|---|
| Enterprise survey | estimate | 2.7 | 5.0 | 7.5 |
| Two-wheeler parc | estimate | 7.7 | 10.5 | 15.0 |
| Rival programmes | floor | 1.5 | 1.5 | 1.5 |
| Eurogrip partners | floor | 0.3 | 0.3 | 0.3 |
| Model universe | bear / base / bull | 2.7 | 7.8 | 15.0 |

*Source: research/data/universe_methods.csv; base = mean of the two estimates, floored at the larger programme count*

## T2. Case 4: the three segments (base universe)

| Segment | Share | Lakh outlets |
|---|---|---|
| S-A | 25% | 1.9 |
| S-B | 40% | 3.1 |
| S-C | 35% | 2.7 |

*Source: A05a to A05c; T1*

## T3. Case 4: cost per member per year (₹)

| Component | bear | base | bull |
|---|---|---|---|
| tools | 1,470 | 1,042 | 741 |
| visibility | 456 | 304 | 202 |
| training | 185 | 125 | 75 |
| field | 158 | 96 | 58 |
| tech | 80 | 60 | 30 |
| Total | 2,350 | 1,628 | 1,105 |

*Source: A07 to A20, A33, A19m*

## T4. Case 4: annual budget by line (₹ crore) and members

| Line | bear | base | bull |
|---|---|---|---|
| Tools, refills | 3.97 | 12.12 | 17.98 |
| Visibility kits | 1.23 | 3.54 | 4.90 |
| Training, meets | 0.50 | 1.45 | 1.82 |
| Field teams | 2.93 | 3.12 | 3.01 |
| Tech and audits | 1.67 | 1.77 | 1.49 |
| Spend | 10.29 | 21.99 | 29.20 |
| Envelope | 18.60 | 23.62 | 29.20 |
| Share of BU revenue | 0.83% | 1.63% | 2.00% |
| Members (lakh) | 0.27 | 1.16 | 2.43 |

*Source: A01, A02 and T3*

## T5. Case 4: contribution per tyre and break-even

| Item | bear | base | bull |
|---|---|---|---|
| Net realisation per tyre (₹) | 1,256 | 1,425 | 1,585 |
| Contribution per tyre (₹) | 327 | 427 | 539 |
| Break-even extra tyres per member a year | 11.7 | 4.4 | 2.2 |
| One tyre every (weeks) | 4.5 | 11.7 | 23.3 |

*Source: A27 to A30; T4*

## T6. Case 4: what moves break-even most (base case, one assumption at a time)

| Assumption | Label | Break-even low | Break-even high | Swing |
|---|---|---|---|---|
| A30 | Contribution margin on the company's net realisation | 3.9 | 5.1 | 1.2 |
| A27 | Weighted average replacement tyre MRP | 4.1 | 4.8 | 0.7 |
| A20 | Tool credit per logged referral | 4.3 | 4.7 | 0.4 |
| A29 | Channel margin (distributor and retailer) on the ex-GST price | 4.3 | 4.7 | 0.4 |
| A06 | Coverage cap: members divided by universe at steady state | 4.4 | 4.7 | 0.4 |
| A09 | One-time tools per member, Tier 2 (Eurogrip's share) | 4.3 | 4.6 | 0.3 |

*Source: assumption register; model tornado*

## T7. Case 4: rollout by quarter (base)

| Quarter | Members (lakh) | Spend (₹ crore) |
|---|---|---|
| Q1 | 0.03 | 0.91 |
| Q2 | 0.07 | 1.05 |
| Q3 | 0.29 | 1.95 |
| Q4 | 0.52 | 2.90 |
| Q5 | 0.76 | 3.84 |
| Q6 | 0.93 | 4.55 |
| Q7 | 1.10 | 5.26 |
| Q8 | 1.16 | 5.50 |
| Year 1 |  | 6.81 |
| Year 2 |  | 19.15 |

*Source: A37a to A37h; T4*

## T8. Case 4: mystery-rider audit design

| Item | Value |
|---|---|
| Shops per arm per round | 140 |
| Audits per year | 560.0 |
| Audit cost per year (₹ lakh) | 3.92 |

*Source: A24, A25, A31, A31n; two-proportion formula*

## T9. Case 4: the obvious cash-per-tyre scheme (base)

| Item | Value |
|---|---|
| Tyres rewarded (lakh) | 52.1 |
| Cost (₹ crore) | 41.70 |
| Share spent on tyres that would sell anyway | 91% |

*Source: A27 to A29, A34 to A36*

## T10. Case 4: benchmark programmes as scored

| Programme | Category | Cash | Tools | Visibility | Skill | Credits advice | Tracks |
|---|---|---|---|---|---|---|---|
| Castrol, lubes | lubricants | Yes | No | No | No | No | Yes |
| Schaeffler | auto parts | No | No | No | Yes | n/a | n/a |
| Pidilite, adh | adhesives | n/a | Yes | n/a | Part | No | Yes |
| Havells, elec | electricals | n/a | Yes | n/a | n/a | No | Yes |
| Amaron, batt | batteries | n/a | n/a | n/a | n/a | No | Yes |
| JK Tyre, tyres | tyres | n/a | n/a | n/a | n/a | No | Yes |
| Our design | tyres | No | Yes | Yes | Yes | Yes | Yes |

*Source: research/data/benchmarks.csv*

## T11. Case 4: tiers

| Tier | Entry | Referrals a year |
|---|---|---|
| Tier 1 | free | 2.0 |
| Tier 2 | 6 referrals in 6 months or the course | 12.0 |
| Tier 3 | 40 referrals a year or core-size stock | 40.0 |

*Source: A14 to A16*

## T12. Case 4: risks and controls

| ID | Risk | P | I | Control |
|---|---|---|---|---|
| R03 | Initial sign-up enthusiasm fades once the starter kit is in hand and no further engagement follows. | 3 | 3 | Quarterly consumable refills create a recurring reason to log codes; the six-month tier review risks loss of status and tools, which behavioural evidence shows is a stronger motivator than a one-off gift; WhatsApp tips keep the programme visible between refills. |
| R02 | The retailer has no strong incentive to take the extra step of entering the mechanic code at the point of sale, so the loop breaks at step 3. | 3 | 2 | The retailer earns a small logging credit inside its own existing loyalty scheme for every code entered, giving it a reason to log; the programme is piloted with retailer training before scale. |
| R08 | If the retailer app is not live, has limited reach, or goes down, code logging has no reliable channel. | 2 | 3 | A22 reserves a one-time build or extension cost if no live app exists; a manual WhatsApp or SMS fallback for logging during outages; the pilot confirms the app's real capacity before scale. |
| R01 | Mechanics could log codes for tyres riders did not actually buy, or collude with retailers to fabricate recommendations. | 2 | 2 | One credit per tyre serial; a monthly cap per member; random IVR call-backs to riders named on the sale; a distance flag between retailer and mechanic beyond A21 km; distributor audit of the top earners each quarter. |
| R04 | Distributors who are asked to enrol mechanics may deprioritise it against their core stocking and selling work. | 2 | 2 | A per-enrolment incentive (A17) paid to distributor sales staff; a missed-call or WhatsApp self-enrolment path that does not depend on a distributor visit; monthly enrolment targets reviewed with distributors. |
| R05 | A competitor could launch a similar tools-and-status programme once ours is visible in the market. | 2 | 2 | The stock-independent design is harder for a rival with purchase-linked schemes to copy without cannibalising its own programme (7 Powers counter-positioning); the pilot-to-scale timeline aims to build a lead in enrolled shops before a copy can match it. |
| R07 | Shops could learn to recognise mystery riders and behave differently only during audits, biasing the measurement. | 2 | 2 | Audits are unannounced and run by a third-party agency with rotating personnel; the sample is drawn randomly each round from the full member list, not announced in advance; results are compared against the matched control districts, which the shops do not know are being tracked. |
| R09 | Costs per member, especially Tier 3 hardware, could run above the assumption register's bear case. | 2 | 2 | Spend is capped at the 1.5% to 2% envelope in every quarter (model check spend_within_envelope); member growth is phased (rollout table) so costs are visible before national scale; Tier 3 hardware can move to lease-only if the bear case breaches the cap. |
| R06 | Members could resell tools or branded merchandise rather than using them, defeating the engagement purpose. | 2 | 1 | Items are chosen to have low resale value relative to their utility to the shop (branded, sized to the shop, consumable-dependent); audits flag members with high redemption but low subsequent referral activity. |
| R10 | Without the annual brand-track re-survey, Eurogrip cannot confirm whether stocking and recommendation actually moved. | 1 | 2 | A32 reserves an annual budget line for the re-survey; G3 at the end of Q8 is explicitly gated on this re-run, making it a condition for calling the national phase complete. |

*Source: model/inputs/risks.csv*

## T13. Case 1: budget by segment and channel (₹ crore, base)

| Segment | Digital | Retail | On-ground |
|---|---|---|---|
| Commuter | 8.93 | 10.20 | 6.38 |
| Gig | 3.98 | 3.98 | 7.97 |
| Premium | 5.74 | 1.91 | 5.10 |
| Brand platform | 5.74 | 1.91 | 1.91 |

*Source: A1-01 to A1-18*

## T14. Case 1: what the budget buys (base)

| Item | Value |
|---|---|
| impressions_crore | 203.2 |
| unique_reach_lakh | 5080.3 |
| outlets_branded | 72040.3 |
| events | 267.8 |
| event_reach_lakh | 8.0 |
| gig_riders_enrolled_lakh | 3.2 |
| Share where the tyre is chosen (retail + on-ground) | 62% |

*Source: A1-19 to A1-24*

## T15. Case 1: budget by scenario (₹ crore)

| Scenario | Budget |
|---|---|
| bear | 54.65 |
| base | 63.75 |
| bull | 73.16 |

*Source: A1-01, A1-02*

## T16. Case 2: compound cost (₹ per kg)

| Item | bear | base | bull |
|---|---|---|---|
| Petrol-scooter tread compound | 166.3 | 166.3 | 166.3 |
| EV-ready cap compound incl. extra mixing | 178.5 | 173.5 | 168.5 |
| Cap mass per tyre (kg) | 0.55 | 0.42 | 0.29 |

*Source: materials_prices.csv; A2-02 to A2-22*

## T17. Case 2: cost delta and range gain

| Item | bear | base | bull |
|---|---|---|---|
| Cost delta per tyre (₹) | 97 | 68 | 46 |
| Cost delta (%) | 10.2 | 8.0 | 6.1 |
| Range gain (%) | 2.3 | 4.2 | 6.7 |
| Range gain (km per charge) | 2.8 | 6.3 | 13.0 |

*Source: A2-06 to A2-08, A2-23 to A2-25*

## T18. Case 3: rear-tyre sets replaced a year by segment (base)

| Segment | Sets a year (lakh) |
|---|---|
| Commercial | 6.82 |
| Smallholder | 13.12 |
| Hiring centre | 7.50 |

*Source: A3-03 to A3-09*

## T19. Case 3: budget lines (₹ crore, base)

| Line | ₹ crore |
|---|---|
| Dealer programme | 1.60 |
| Village mechanics | 0.42 |
| Field days | 0.38 |
| Harvest credit | 0.80 |
| Tyre-life assurance | 0.11 |
| Measurement and contingency | 1.16 |

*Source: A3-14 to A3-25*

## T20. Case 3: cost per hour, payback and share points

| Item | bear | base | bull |
|---|---|---|---|
| Rear pair cost per hour, commercial (₹) | 17.4 | 11.3 | 8.2 |
| Contribution per set (₹) | 5,847 | 7,661 | 9,346 |
| Sets to pay back the budget | 5,131 | 5,825 | 6,634 |
| Share points that implies | 0.26 | 0.21 | 0.17 |

*Source: A3-10 to A3-27*
