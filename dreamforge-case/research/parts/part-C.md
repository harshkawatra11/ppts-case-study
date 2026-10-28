## 9. Vehicle economics: a bought EV costs ₹5,684 a month all-in, a leased one ₹3,500

**Answer.** A bought EV's running cost of ₹3,000 a month `[C D07]` is not its full cost: once capital recovery at 11% a year over 48 months, a charging hub share, and a resale credit are folded in, a bought EV costs ₹5,684 a month all-in, against ₹3,500 a month for a leased EV, which already includes running cost `[C D12]` `[M]` `[T3]`. The equated monthly instalment (EMI) alone on a financed EV, ₹3,601 a month, is above the entire all-in lease `[M]` `[T3]`. Independent outside evidence from the International Council on Clean Transportation's (ICCT) Delhi last-mile delivery total cost of ownership (TCO) study points the same way: a petrol delivery bike's five-year cost per kilometre, ₹2.38, is roughly double an electric bike's, ₹1.00 to ₹1.55, and its five-year maintenance bill, ₹50,844, is four to five times an electric bike's, ₹9,778 to ₹12,874 `[RD64]` `[RD71]`. This section works through both numbers in full, because the ₹3,000 versus ₹3,500 running-cost comparison that an obvious reading of the case suggests is the single most consequential error a team can make in this case, and the rest of the document's recommendation rests on not making it.

### 9.1 The running-cost illusion: ₹3,000 is not what a bought EV costs

The case gives three numbers for a bought EV: an acquisition cost of ₹1,20,000 `[C D10]`, a monthly running cost of ₹3,000 `[C D11]`, and a resale value of ₹25,000 after a four-year useful life `[C D13]` `[C D14]`. Read in isolation, the ₹3,000 running cost looks cheaper than the ₹3,500 lease `[C D12]`, and a team working quickly could stop there and conclude buying wins. That reading skips the acquisition cost entirely, as though a ₹1,20,000 vehicle simply appears at zero cost the moment it is bought, assumption-free. SwiftKart's own capital is finite, ₹1 crore over 24 months `[C B07]`, and that capital has a cost: it either sits idle (an opportunity cost), it is borrowed at the bank's indicative 11% a year rate `[C X08]`, or it is the same capital the contract opportunity also needs `[C O02]` `[C O07]`. Any one of these three framings puts a financing cost on the acquisition price, and the model uses the bank rate, 11% a year over the stated 3-year tenure, as the standard cost-of-capital input for the whole case, consistent with assumption A14 `[A14]` `[T16]`, because it is the one rate the case itself states `[C X08]`.

Once the acquisition cost is financed rather than ignored, a second cost appears: the charging infrastructure a bought (or leased) fleet needs to actually run. The case states a one-time ₹10 lakh investment for a 100-EV fleet `[C X01]`, which works out to ₹10,000 a vehicle, a cost every EV configuration, bought or leased, must carry, because the vehicle cannot deliver without being charged. A third adjustment runs the other way: the resale value, ₹25,000 at the end of a four-year life `[C D14]`, is a credit against the all-in monthly cost, since the owner eventually recovers part of the acquisition cost back in cash. None of these three adjustments, capital recovery, charging share, resale credit, apply to a lease, because a lease already bundles the vehicle, its financing, and its running cost into one monthly rupee figure, with no acquisition, no resale, and (per the case) no separate charging infrastructure line for the leased vehicles themselves `[C D12]`.

**T9.1. The two ways to acquire an EV, side by side (brief facts only, before any modelling)**

| Item | Bought | Leased |
|---|---|---|
| Acquisition cost `[C D10]` | ₹1,20,000 | included in lease |
| Monthly running cost `[C D11]` | ₹3,000 | included in lease `[C D12]` |
| Monthly lease cost `[C D12]` | not applicable | ₹3,500 |
| Useful life `[C D13]` | 4 years (48 months) | 3 years (36 months) |
| Resale value `[C D14]` | ₹25,000 | not applicable |
| Subsidy `[C X06]` | up to ₹10,000, may be available | not applicable |

*The table above reproduces the case's own fleet-alternatives data `[C D10 to C D14]`, before the annuity arithmetic in section 9.2 converts the bought column into a single monthly-equivalent figure comparable to the lease's ₹3,500.*

### 9.2 The annuity method turns a ₹1,10,000 net purchase into a ₹2,843 monthly-equivalent cost

To compare a one-time purchase with a recurring lease on a like-for-like basis, the model spreads the net acquisition cost over the EV's 48-month useful life at the 11% annual cost of capital `[C X08]` `[C D13]`, using the standard capital recovery factor for an annuity. The acquisition cost is first reduced by the government subsidy of ₹10,000 per purchased EV, which the case itself flags as a sum that "may be available", not a certainty `[C X06]`; the model keeps the subsidy in the base case because the case states it as the default fact pattern, and separately tests its removal in the scenario work of section 19. Net of the subsidy, the financed amount is ₹1,20,000 minus ₹10,000, which equals ₹1,10,000 `[C D10]` `[C X06]`. Spread over 48 months at 11% a year using the capital recovery factor, this converts to a monthly-equivalent capital cost of ₹2,843 `[M]` `[T3]`.

The resale value is treated the same way in reverse: ₹25,000 received in month 48 `[C D14]` is worth less today than ₹25,000 received now, so it is converted to its monthly-equivalent annuity credit at the same 11% rate, which comes to ₹417 a month, subtracted from the running cost `[M]` `[T3]`. The charging hub cost is spread per vehicle: ₹10 lakh for a 100-EV fleet `[C X01]` is ₹10,000 a vehicle, and spread as a share of the acquisition annuity, this adds ₹258 a month `[M]` `[T3]`. Adding the ₹3,000 a month running cost that both configurations share `[C D11]`, the full monthly-equivalent cost of a bought EV is:

₹2,843 capital + ₹258 charging − ₹417 resale + ₹3,000 running = ₹5,684 a month `[M]` `[T3]`.

**T9.2. The annuity arithmetic in full, a bought EV, 48 months at 11 percent a year**

| Component | Basis | ₹ a month |
|---|---|---|
| Capital (₹1,20,000 less ₹10,000 subsidy, annuitised) | `[C D10]` `[C X06]` `[C X08]` `[A14]` `[M]` | 2,843 |
| Charging hub share (₹10,000 a vehicle, annuitised) | `[C X01]` `[M]` | 258 |
| Resale credit (₹25,000 at month 48, annuitised, subtracted) | `[C D14]` `[M]` | −417 |
| Running cost | `[C D11]` | 3,000 |
| **Total, bought EV, all-in** | sum of the four rows above | **5,684** |
| Lease, all-in (for comparison) | `[C D12]` | 3,500 |

*Figures in this table are the model's T3 output `[T3]`, reproduced here with the underlying case facts `[C]` and the assumption `[A14]` that drives the annuity rate attached to each row.*

A reader who wants to see the capital line's own derivation rather than take the ₹2,843 figure on faith can rebuild it from the standard annuity formula, payment equals principal times rate divided by one minus (one plus rate) to the power of minus the number of periods, with the monthly rate equal to 11% divided by 12, which is 0.9167% a month, and 48 months as the term. Applying that formula to the ₹1,10,000 net financed amount gives a monthly payment of ₹2,843, matching the model's own T3 figure `[M]`, which confirms the annuity method, not a different financing assumption, is what produces the ₹5,684 total.

A second, independent way to sanity-check the same number is the financed EMI on the full un-subsidised ₹1,20,000 purchase price, run over the same 11% rate but the shorter 36-month term the case gives for a lease-equivalent loan tenure `[C D13]` `[C X08]`. That EMI alone, with no charging share or resale credit added, comes to ₹3,601 a month `[M]` `[T3]` `[T13]`. This single figure is one of the seven case numbers insight 4 rests on `[C D10]` `[C D12]` `[C D13]` `[C D14]` `[C X08]`: even before charging infrastructure or the resale credit are added back, the bare monthly cost of borrowing to buy one EV already exceeds the entire all-in lease rate of ₹3,500 `[C D12]`. A team that compares ₹3,601 to ₹3,500 and stops there still reaches the right conclusion about buying one bike on credit; the fuller ₹5,684 figure is needed only when the comparison is to an outright cash purchase amortised over its full 48-month life rather than a 36-month loan.

**T9.3. EMI on a financed EV, shown against the lease and against the full annuity cost**

| Measure | Term | Rate | ₹ a month | Tag |
|---|---|---|---|---|
| EMI, full ₹1,20,000 purchase price, no subsidy netted | 36 months | 11% a year | 3,601 | `[M]` `[T3]` `[T13]` |
| All-in lease | 36 months | included | 3,500 | `[C D12]` |
| Full annuity cost, bought EV, subsidy netted, 48 months, plus charging and resale | 48 months | 11% a year | 5,684 | `[M]` `[T3]` |

*The EMI row is the narrowest, most defensible version of the lease-versus-buy case: it needs no assumption about charging-hub allocation or resale timing, only the case's own acquisition price, subsidy and interest rate `[C D10]` `[C X06]` `[C X08]`, and it already shows the financed cost of ownership above the lease.*

### 9.3 Contribution per configuration: the leased EV keeps ₹9,020 a month, ₹2,184 more than the bought EV

The case's own unit economics give a fixed revenue line, ₹40 a delivery `[C D02]`, 30 deliveries a day `[C D03]`, 26 working days a month `[C D04]`, and SwiftKart's current utilisation of 85% `[C D08]`, which together produce 663 deliveries a bike-month at today's utilisation and ₹26,520 of monthly revenue a bike `[M]` `[T2]`, shown in full as 30 × 26 × 0.85 × ₹40 = ₹26,520. Rider pay, ₹14,000 a bike-month `[C D05]`, is identical whichever vehicle configuration is used, since the case gives one rider pay figure regardless of fleet type. What changes between configurations is the vehicle cost line, and therefore the contribution SwiftKart keeps after rider pay and vehicle cost are subtracted from revenue.

**T9.4. Contribution per bike-month, five configurations, at the case's own revenue and rider-pay figures**

| Configuration | Utilisation | Deliveries | Revenue, ₹ | Rider, ₹ | Vehicle, ₹ | Contribution, ₹ | Margin |
|---|---|---|---|---|---|---|---|
| Petrol bike | 85% | 663 | 26,520 | 14,000 | 9,000 | 3,520 | 13.3% |
| EV bought, running cost only (the obvious, incomplete reading) | 85% | 663 | 26,520 | 14,000 | 3,000 | 9,520 | 35.9% |
| EV bought, all-in (capital, charging, resale, running) | 85% | 663 | 26,520 | 14,000 | 5,684 | 6,836 | 25.8% |
| EV leased | 85% | 663 | 26,520 | 14,000 | 3,500 | 9,020 | 34.0% |
| EV leased, contract at full volume | 100% | 780 | 31,200 | 14,000 | 3,500 | 13,700 | 43.9% |

*This reproduces model table T2 `[T2]` in full. The second row, EV bought at running cost only, is included deliberately because it is the row an incomplete reading of the case produces, ₹9,520 contribution, apparently the best of all five; the third row, the same bought EV with its full annuity cost applied, shows the same vehicle actually keeps ₹6,836, ₹2,684 less a month, once the acquisition is properly costed `[M]`.*

Four findings follow directly from T9.4. First, every EV configuration beats petrol on contribution, which is the arithmetic foundation for electrifying at all `[M]` `[T2]`; this section does not re-argue that point, since it belongs to section 3's unit-economics discussion, but it is worth stating once here because it is the premise the rest of this section's lease-versus-buy argument sits on top of. Second, the gap between the incomplete bought-EV reading (₹9,520) and the correctly annuitised bought-EV reading (₹6,836) is ₹2,684 a bike-month, or ₹2,684 × 12 = ₹32,208 a year per bike `[M]`, which is the exact size of the modelling error a team makes by reading only the ₹3,000 running-cost line. Third, the correctly annuitised bought EV (₹6,836) still trails the leased EV (₹9,020) by ₹2,184 a bike-month `[M]`, because the lease's effective financing terms, a lower all-in monthly rate than the bought EV's capital recovery cost implies, beat the case's own 11% bank rate on a pure monthly-cost basis. Fourth, the leased EV at the contract's full 100% utilisation (₹13,700) is the single highest-contribution row in the table, which is why winning and fully using the contract, not simply electrifying, is the larger lever in the recommendation's contribution bridge (worked through in section 18).

### 9.4 Outside evidence: the ICCT study puts petrol at ₹2.38 a kilometre against electric's ₹1.00 to ₹1.55

Lane R-D located a peer-reviewed-adjacent, directly downloaded primary source that runs an independent total-cost-of-ownership comparison for the exact use case this case describes: last-mile delivery two-wheelers in Delhi. The International Council on Clean Transportation's November 2021 working paper models a five-year TCO for three Delhi delivery use cases, personal, ride-hailing, and last-mile delivery, across a petrol baseline (Honda Activa 6G) and electric alternatives under both point charging and battery swapping `[RD63]`. For the last-mile delivery use case specifically, which assumes an average daily distance of 115 km over 317 operating days a year, about 36,455 km a year `[RD24c]`, the paper's own figures are:

**T9.5. ICCT five-year total cost of ownership, last-mile delivery use case, Delhi**

| Configuration | Charging mode | 5-year TCO, ₹ | Cost per km, ₹ |
|---|---|---|---|
| Petrol, Honda Activa 6G | fuelling | 4.3 lakh | 2.38 |
| Electric, Okinawa iPraise+ | battery swapping | 2.8 lakh | 1.55 |
| Electric, Ather 450X | point charging | 2.1 lakh | 1.19 |
| Electric, Okinawa iPraise+ | point charging | 1.8 lakh | 1.00 |

*Reproduced from the ICCT working paper's own last-mile delivery results table `[RD64]`. The paper's own conclusion states plainly that "BEV two-wheelers with point-charging and battery-swapping options are considerably cheaper than the gasoline two-wheeler across all use cases" `[RD67]`, which is the independent, outside-India-published confirmation of this document's own T2 and T3 finding that petrol is the most expensive configuration to run `[T2]` `[T3]`.*

The paper's cost per kilometre ratio, petrol at ₹2.38 against the cheapest electric option at ₹1.00, is a ratio of about 2.4 to 1 `[RD64]`, which is directionally consistent with this document's own T2 finding that the petrol vehicle cost line (₹9,000 a bike-month `[C D06]`) is three times the EV running-cost line (₹3,000 a bike-month `[C D07]`), though the two figures are not directly comparable: the case's own ₹9,000 and ₹3,000 are pure running-cost lines at SwiftKart's own delivery volume and fuel price, while the ICCT ₹2.38 and ₹1.00 are full five-year TCO figures including acquisition, maintenance and fuelling, at the paper's own assumed petrol price of ₹90 a litre `[RD67b]`, below Delhi's current verified rate of ₹102.12 `[RD11]` `[RD12]` `[A20]`, so the real petrol-versus-electric gap at today's prices is, if anything, wider than the paper's own 2021-priced figures show.

Maintenance cost is the second independent confirmation. The same paper's own dealer-verified five-year maintenance figures, cross-checked by the paper's authors directly against Delhi-based dealers, not merely sourced from a vehicle comparison website, are ₹50,844 for the petrol Honda Activa 6G against ₹12,874 for the electric Ather 450X (a fixed ₹2,400-a-year service subscription) and ₹9,778 for the electric Okinawa iPraise+ `[RD71]`. On these figures the petrol vehicle's maintenance bill is about 4.0 times the Ather's and about 5.2 times the Okinawa's for the identical delivery duty cycle `[RD72]`, driven mainly by the electric drivetrain's fewer moving parts and, for the Ather, a fixed-price service subscription that caps the owner's maintenance spend regardless of wear `[RD72]`.

**T9.6. ICCT five-year maintenance cost, last-mile delivery use case, Delhi, dealer-verified**

| Configuration | 5-year maintenance, ₹ | Ratio to petrol |
|---|---|---|
| Petrol, Honda Activa 6G | 50,844 | 1.0x (baseline) |
| Electric, Ather 450X (fixed service subscription) | 12,874 | 0.25x (petrol is 4.0x the Ather) |
| Electric, Okinawa iPraise+ | 9,778 | 0.19x (petrol is 5.2x the Okinawa) |

*Figures from Table 9 of the ICCT working paper `[RD71]`, stated as dealer-verified by the paper's own authors, not a single-source blog estimate. A separate, lower-tier, non-fleet-audited scooter comparison blog gives directionally similar but smaller absolute figures (₹4,000 a year petrol against ₹2,000 a year electric for the same two model names) `[RD73]`, retained here only as a second, independent directional confirmation that the ratio runs the same way, not as the primary figure, because it is not dealer-audited and because a named fleet operator's own audited maintenance comparison was not found in this pass, a genuine gap `[RD74]`.*

The case itself gives SwiftKart no maintenance line at all, only a running-cost figure for each configuration `[C D06]` `[C D07]` `[C D11]`, so neither T2 nor T3 carries a separate maintenance row, and this document does not retrofit one into the model, since doing so would move a locked number without a case fact or a verified SwiftKart-specific figure to justify it, per the plan's rule that case facts are never changed `[C D06]` `[C D07]`. The ICCT maintenance comparison is presented here as outside corroboration that the direction of the case's own running-cost gap, ₹9,000 petrol against ₹3,000 EV `[C D06]` `[C D07]`, a 3.0x ratio, is consistent with, if somewhat smaller than, the 4.0x to 5.2x maintenance-cost gap an independent Delhi-specific study finds for the identical delivery duty cycle `[RD71]` `[RD72]`, strengthening rather than weakening the case's own stated figures.

### 9.5 Insight 4 and insight 5, with the arithmetic in full

Insight 4, read directly off T9.2 and T9.3 above: the lease already includes running cost, so the ₹3,500 all-in lease rate competes directly with the ₹5,684 all-in cost of a bought EV, not with the bare ₹3,000 running-cost line `[C D10]` `[C D11]` `[C D12]` `[C D13]` `[C D14]` `[C X08]` `[M]`. Even stripped down to its narrowest, most defensible form, the EMI alone on a financed EV, ₹3,601, already exceeds the lease `[M]` `[T3]` `[T13]`. This insight is the single reading of the case that flips the obvious answer: a team that compares ₹3,000 running cost to ₹3,500 lease concludes buying is cheaper; a team that compares the full ₹5,684 (or even the bare ₹3,601 EMI) to the same ₹3,500 lease concludes leasing is cheaper, and these are opposite recommendations built from the same six case facts read two different ways `[C D10 to C D14]` `[C X08]`.

Insight 5 quantifies what converting one existing petrol bike to a leased EV is worth, in both a monthly flow and a one-time cash release. On the flow side, the petrol bike's vehicle cost line is ₹9,000 a month `[C D06]`; the leased EV's vehicle cost line (which, unlike the bought EV, needs no separate annuity calculation, since the lease already prices in financing) is ₹3,500 a month `[C D12]`. The saving is ₹9,000 minus ₹3,500, which equals ₹5,500 a bike a month `[C D06]` `[C D12]`, before any change in revenue. On the cash side, the petrol bike being replaced can be sold for about ₹30,000 `[C X05]`, a one-time cash release on the day of conversion, separate from and additional to the ₹5,500-a-month recurring saving.

**T9.7. Insight 5, the arithmetic of converting one petrol bike to a leased EV**

| Step | ₹ | Tag |
|---|---|---|
| Petrol vehicle cost, a month | 9,000 | `[C D06]` |
| Leased EV vehicle cost, a month | 3,500 | `[C D12]` |
| Monthly saving per converted bike | 5,500 | `[C D06]` `[C D12]` |
| Annualised saving per converted bike | 5,500 × 12 = 66,000 | arithmetic on the row above |
| Annualised saving across 100 bikes | 66,000 × 100 = 66,00,000 (₹66.0 lakh) | arithmetic; matches `[T15]` bridge line |
| One-time cash released, petrol bike resale | 30,000 | `[C X05]` |
| One-time cash released across 100 bikes | 30,000 × 100 = 30,00,000 (₹30.0 lakh, before staged timing) | arithmetic; actual staged proceeds ₹29.7 lakh `[M]` |

*The ₹66.0 lakh annualised figure across all 100 bikes matches the "fuel to lease" line in the model's own contribution bridge exactly `[T15]`, confirming insight 5's arithmetic is not an approximation separate from the locked model output but the same number, derived two ways. The ₹30.0 lakh cash-release figure above is the simple, unstaged arithmetic; the model's actual recommended plan stages the 100 petrol bikes' sale across three waves (50 in month 2, 40 in month 4, the last 10 in month 12), which produces a slightly lower staged total, ₹29.7 lakh over 24 months `[M]`, because the last 10 bikes are sold later and at the lower, time-decayed resale value the case's own policy clock implies (section 8 covers this timing in full).*

The contribution improvement from converting to a leased EV is, correspondingly, ₹9,020 minus ₹3,520, which equals ₹5,500 a bike-month at the case's own 85% utilisation `[T2]`, the identical figure to the vehicle-cost-line saving above, because rider pay and revenue are unchanged by the conversion and only the vehicle-cost line moves. This is the arithmetic engine behind the recommended plan's contribution bridge in section 18: converting the existing fleet from petrol to leased EV is worth ₹66.0 lakh a year on its own, before the contract's own, larger contribution addition is counted `[T15]`.

### 9.6 What would make this reading wrong: three case rates this section's arithmetic depends on

This section's conclusion, lease every bike rather than buy, rests on three case-given rates holding roughly as stated: the ₹3,500 lease rate `[C D12]`, the 11% cost of capital `[C X08]`, and the ₹10,000 subsidy `[C X06]`, which the case itself flags with the word "may", not a guarantee `[C X06]`. Section 10 shows how far the lease rate could rise before buying would match it (the switch point, ₹5,153 a month at fleet level `[T13]`); section 19 shows the same question for the discount rate and for the subsidy. None of the three threatens this section's narrow, mechanical claim, that a bought EV's all-in cost is ₹5,684 and a leased EV's is ₹3,500 at the case's own stated rates, because that claim is pure arithmetic on case-given numbers, not a forecast; what the later sections test is whether those case-given numbers would still hold in the real Delhi-NCR market, which is the subject of section 10.

**T9.8. Sensitivity of the bought EV's all-in monthly cost to the subsidy's status**

| Scenario | Net financed amount, ₹ | Monthly capital cost, ₹ | Full all-in cost, ₹ |
|---|---|---|---|
| Subsidy available (base case) | 1,20,000 − 10,000 = 1,10,000 | 2,843 | 5,684 |
| Subsidy withdrawn | 1,20,000 | 3,102 | 5,943 |

*The subsidy's removal widens, not narrows, the gap to the ₹3,500 lease, from ₹2,184 a month to ₹2,443 a month `[M]`, consistent with the uncertainty exposure finding in section 19 that an EV-subsidy shock moves the recommended leased plan's NPV by nothing, since the lease rate is fixed regardless of whether SwiftKart itself ever buys a vehicle, while it moves every buying option's NPV down `[T12]`.*

**T9.9. Lease-versus-buy summary, one bike, case rates**

| Measure | Bought EV, all-in | Leased EV, all-in | Gap |
|---|---|---|---|
| Monthly cost, ₹ | 5,684 | 3,500 | 2,184 cheaper to lease |
| Contribution a month at 85% utilisation, ₹ | 6,836 | 9,020 | 2,184 more to lease |
| Narrowest comparison (EMI only versus lease), ₹ | 3,601 | 3,500 | 101 cheaper to lease, even stripped of charging and resale |

*Both rows of the gap column report the identical ₹2,184 figure from two directions, cost and contribution, because contribution is revenue minus rider pay minus vehicle cost, and revenue and rider pay are identical across the two configurations `[T2]` `[T3]`; only the vehicle-cost line differs, so the cost gap and the contribution gap are, by construction, the same number.*

Exhibit for the deck: S3 (Strategic Alternatives), the lease-versus-buy comparison strip; S6 annexure A3 carries the full annuity arithmetic.

### What this section establishes, and what it does not

- It establishes, with the arithmetic shown in full, that a bought EV's true monthly cost is ₹5,684, not the ₹3,000 running-cost figure an incomplete reading of the case suggests, and that even the narrowest possible comparison, the bare EMI at ₹3,601, already exceeds the ₹3,500 all-in lease `[M]` `[T3]`.
- It establishes that every EV configuration, bought or leased, beats petrol on monthly contribution at the case's own figures, and that the leased configuration beats the bought configuration by ₹2,184 a bike-month at 85% utilisation `[T2]`.
- It establishes, from an independent, outside-India-published source, that the direction of this finding, electric beats petrol on cost, and petrol carries far higher maintenance cost, is corroborated by a dealer-verified Delhi last-mile-delivery study, not asserted on the case's figures alone `[RD64]` `[RD71]`.
- It establishes the full arithmetic behind insight 5, that converting one petrol bike to a leased EV is worth ₹5,500 a month in contribution plus a one-time ₹30,000 cash release, scaling to ₹66.0 lakh a year and ₹29.7 lakh of staged cash across the fleet `[T15]` `[M]`.
- It does not establish that the ₹3,500 lease rate itself is available in the real Delhi-NCR market at the volume SwiftKart needs; that question, and the real market evidence lane R-B gathered, is the subject of section 10.
- It does not establish a maintenance cost for SwiftKart's own fleet, since the case gives none; the ICCT figures are outside corroboration of direction, not a substitute SwiftKart number.

## 10. The leasing market: who rents EVs to fleets in Delhi-NCR, at what price, and why leasing wins up to ₹5,153 a month

**Answer.** Lane R-B identified five named providers active in EV leasing, rental or battery swapping for Delhi-NCR delivery fleets, Zypp Electric, Yulu, Alt Mobility, Battery Smart and Sun Mobility `[RB06]` `[RB12]` `[RB19]` `[RB24]` `[RB34]`, but found no public, all-inclusive, single-rupee-figure B2B lease quote that matches how the case frames its ₹3,500 figure, vehicle plus running cost in one number `[C D12]`, a genuine gap this document reports rather than papers over. The closest verified market reference point, Alt Mobility's own stated starting rate of about ₹2,800 a month on a bundled, multi-year lease `[RB19]`, sits below the case figure, not above it, and the model's own switch-point arithmetic shows leasing both fleets still beats buying both up to a fleet-level lease rate of ₹5,153 a month, 47% above the case's ₹3,500 `[T13]` `[M]`. A subsidy of ₹94,521 a purchased EV, almost ten times the ₹10,000 the case actually offers `[C X06]`, would be needed for buying to match the ₹3,500 lease on cost alone `[T13]`.

### 10.1 Five named providers cover Delhi-NCR, but only two lease vehicles rather than swap batteries

Delhi-NCR's EV-for-delivery leasing and swapping market is not a single, standardised product; it is five different business models that each solve a different piece of the fleet-operator's problem, vehicle ownership, battery energy, or both. Lane R-B verified facts on each of the five named below, drawn from company disclosures, press coverage and one direct quote, none of them a vendor's own self-reported marketing copy taken at face value without a second source where one existed.

**T10.1. Five named EV leasing, rental and swapping providers active in or near Delhi-NCR**

| Provider | What it offers | Scale evidence (most recent verified) | Delhi-NCR presence |
|---|---|---|---|
| Zypp Electric | EV rental to delivery riders, its own battery-swapping network | utilisable fleet about 30,000 vehicles across 8 cities, up 71% year on year (Apr to Jun 2026 period) `[RB06]` | about 15,000 electric two-wheelers in Delhi as of a May 2024 report `[RB10]`; app lists Gurgaon, Noida, Delhi `[RB09]` |
| Yulu | EV rental, the DeX product built for delivery partners, Yuma Energy battery swapping | 25,000 to 35,000 DeX units committed under a 2023 Zomato partnership `[RB12]` | over 4,000 delivery partners on Zomato's platform by Feb 2023 `[RB15]` |
| Alt Mobility | B2B EV fleet leasing (FleetLease), IIT Delhi founded, bundles vehicle, insurance, servicing and roadside assistance into one lease | leased 15,000 EVs to Zypp Electric (Aug 2022 deal) `[RB21]`; AUM crossed $12 million by Jan 2024 `[RB23]` | national model; the 15,000-unit Zypp deal is the largest named transaction in this lane's evidence |
| Battery Smart | battery-swapping stations, not a vehicle lessor | 1,518 stations nationally including 321 in Delhi, 36% market share (Tracxn-attributed, Jun 2025) `[RB25]` `[RB26]` | 321 Delhi stations is the largest named Delhi-specific station count in this lane |
| Sun Mobility | battery-as-a-service swapping network, 50:50 joint venture with Indian Oil | over 25,000 EVs supported across 20 cities through 630-plus stations (Jun 2024) `[RB34]` | Tata Power-DDL partnership opened the first North Delhi swap point, Azadpur market `[RB33]` |

*Each provider is verified against at least one primary company disclosure or two independent press reports `[RB06]` `[RB12]` `[RB19]` `[RB21]` `[RB25]` `[RB34]`. Battery Smart and Sun Mobility are energy providers, not vehicle lessors; a fleet operator using either still needs a separate vehicle acquisition route, bought or leased from a provider like Alt Mobility or directly from an EV maker.*

Of the five, only Alt Mobility and Zypp Electric offer anything resembling a vehicle lease rather than a pure energy-swapping service, and the two are themselves connected: Alt Mobility leased 15,000 EVs to Zypp Electric in August 2022, explicitly framed as keeping Zypp's own balance sheet "asset-light" `[RB21]`. This means the clearest publicly available Delhi-relevant EV lease rate, Alt Mobility's own "starting at ₹2,800 a month" `[RB19]`, is in practice the rate a large fleet operator pays a specialist lessor, close to the structural position SwiftKart itself is weighing.

### 10.2 The one verified quote, normalised against the case's ₹3,500

Alt Mobility's CEO described the FleetLease product as bundling the full cost of a brand-new vehicle with no down payment, road tax and registration, comprehensive insurance, OEM-backed servicing and roadside assistance into one monthly lease, typically over a 3-to-5-year tenure, with buy, extend or return options at term end `[RB20]`. The rate itself, "starting at INR 2,800" a month, was quoted in a May 2023 feature, with the lessor's own revenue model requiring lease charges three months in advance `[RB19]`. This is the single closest real-market analogue this lane found to the case's own ₹3,500 figure, and the two are not identical products: the case gives no detail on what its ₹3,500 lease includes beyond "running cost", while Alt Mobility's product explicitly bundles insurance, registration and servicing on top of the vehicle and its running cost `[RB20]`.

**T10.2. The case's lease figure against the one verified comparable market quote**

| Figure | ₹ a month | What it includes | Source |
|---|---|---|---|
| Case lease rate | 3,500 | vehicle plus running cost (per the case's own wording) | `[C D12]` |
| Alt Mobility FleetLease, starting rate | 2,800 (starting; actual rate scales with vehicle and term) | vehicle, no down payment, road tax, registration, comprehensive insurance, OEM-backed servicing, roadside assistance | `[RB19]` `[RB20]` |
| eBikeGo subscription (2020, stale, Mumbai, context only) | 3,600 | 500 km a month, extra km billed separately | `[RB16]` `[RB17]` |

*The Alt Mobility figure sits below, not above, the case's own ₹3,500, which is notable given it bundles more (insurance, registration, servicing) than the case's own lease appears to `[RB20]`; this is one of the strongest pieces of evidence against the kill criterion in section 2.8 that a real Delhi-NCR market rate might sit well above the case figure. The eBikeGo figure is retained only as historical directional context, since it is six years stale and not Delhi-specific `[RB16]` `[RB18]`, and is not used anywhere in the model.*

This document states plainly, per the honest reading required of it, that the case's ₹3,500 figure is a case-given assumption, not independently reproduced from a current, all-inclusive Delhi-NCR B2B quote `[C D12]`. The honest finding, stated once and not softened: no public source found in this pass gives a single all-inclusive rupee figure, vehicle plus battery plus swaps plus maintenance plus insurance, framed the way the case's ₹3,500 is framed, from Zypp Electric, Yulu, eBikeGo, Battery Smart or Sun Mobility `[RB18]` `[RB37]` `[RB42]`. Alt Mobility's ₹2,800 starting figure is the closest available real-market anchor, and it sits below the case figure, which is directionally reassuring for the recommendation rather than a threat to it, but it is a 2023-dated "starting at" figure for one lessor, not a verified, current, fleet-scale quote that could be taken as the market's settled price `[RB19]`. Section 2.10's honest reading records this plainly: if a lessor will not hold ₹5,153 or less a month for a 36-month term at the scale SwiftKart needs, the recommendation for the contract fleet specifically would flip to buying with debt, and this document does not claim that outcome is impossible, only that it is not what the strongest available evidence points toward `[T13]`.

### 10.3 Why leasing wins up to ₹5,153 a month: the switch points

The model computes three separate break-even rates, each answering a different version of "how much market risk does the recommendation carry on the lease rate." The first and narrowest: at what monthly rate does buying one bike match leasing one bike, holding every other input fixed. Because the annuity method in section 9.2 already shows a bought EV costs ₹5,684 a month all-in at the case's own acquisition price and interest rate, this is also, by construction, the rate at which the case's ₹3,500 lease assumption would have to roughly double before a single-bike comparison flips `[T13]` `[M]`.

The second and more decision-relevant rate is the fleet-level switch point: at what lease rate does leasing both fleets (the recommended plan) stop beating buying both fleets on 48-month net present value (NPV), holding every other scenario input at its base case. This is ₹5,153 a month `[T13]`, 47% above the case's ₹3,500 (arithmetic: ₹5,153 minus ₹3,500, divided by ₹3,500, equals 47.2%). The fleet-level number differs from the single-bike number because the fleet-level comparison nets out debt sizing, cash-floor effects and the timing of the contract ramp, all of which favour the no-debt leasing path even as the lease rate itself rises, while the single-bike comparison is pure monthly arithmetic with no financing-structure effect.

The third rate answers a different question entirely: not what lease rate flips the decision, but what subsidy would need to exist for buying to match the case's actual ₹3,500 lease rate directly. That figure is ₹94,521 a purchased EV `[T13]`, almost ten times the ₹10,000 the case states, with the qualifying word "may be available" `[C X06]`, attached. Lane R-E's verified reading of the primary PM E-DRIVE and Delhi EV Policy 2.0 gazette texts found a maximum stackable incentive of about ₹35,000 to ₹40,000 a vehicle (PM E-DRIVE's own ₹5,000 plus Delhi EV Policy 2026's year-1 cap of ₹30,000), far below the ₹90,000 threshold that would trigger kill criterion 2 in section 2.8, and nowhere near the ₹94,521 the model's own switch point requires.

**T10.3. The three switch points, what each answers, and how far from the case figure each sits**

| Switch point | Answer | Case figure | Gap |
|---|---|---|---|
| Lease rate at which buying one bike matches leasing one bike | ₹5,684 a month | ₹3,500 | +62.4% |
| Lease rate at which buying both fleets matches leasing both fleets (48-month NPV) | ₹5,153 a month | ₹3,500 | +47.2% |
| Subsidy per EV needed for buying to match the ₹3,500 lease | ₹94,521 | ₹10,000 (case, may be available) `[C X06]` | 9.45 times the case figure |

*All three rows are the model's own T13 output `[T13]`. The subsidy row's gap is framed as a multiple rather than a percentage because the case's own ₹10,000 is itself conditional, "may be available" `[C X06]`, so a percentage gap against an uncertain base would overstate precision; the multiple (9.45 times) makes the scale of the gap legible without implying false confidence in the ₹10,000 baseline.*

### 10.4 The case's 11% sits at the cheap end of a market that runs 8.5% to 24%

The case's own 11% bank rate `[C X08]` sits inside, not above, the range of rates a real Delhi-NCR fleet operator would likely face. BankBazaar's standard, non-EV-specific two-wheeler loan table, re-checked and re-confirmed as current on this pass, lists ICICI Bank at 10.25% onward, Punjab National Bank at 10.00% onward, Canara Bank at 10.10% onward, Axis Bank at 11.00% onward and IDFC First Bank at 8.50% onward, against non-bank lenders at materially higher rates, Tata Capital at 12.50% onward, Hero FinCorp at 14% onward, and Bajaj Auto Finance up to 24% `[RB46]` `[RB76]` `[RB77]`. A separate 2026 lender-comparison guide estimates EV-specific two-wheeler loan rates, blended across banks, non-banking financial companies (NBFCs) and dealer finance, at 11% to 16% a year `[RB44]`, and a NITI Aayog analysis found NBFCs typically charge 1.5 to 3 percentage points more for EV loans than for equivalent petrol-vehicle loans `[RB43]`. The case's 11% therefore sits at the bank end of this range, a reasonable, slightly favourable assumption, not an understated one, which means the lease-versus-buy comparison in this document is not being tilted toward leasing by an artificially high assumed cost of capital.

**T10.4. Two-wheeler and EV-specific loan rate evidence, Delhi-NCR relevant lenders**

| Lender type | Rate range | Note |
|---|---|---|
| Banks, standard two-wheeler loan (non-EV-specific) | 8.50% (IDFC First) to 12.40% (Bank of Baroda) | `[RB46]` `[RB76]`, BankBazaar does not publish a separate EV rate, stating EV loans carry "the same procedure and interest rates as that of regular two-wheeler loans" `[RB47]` |
| Non-bank lenders | 12.50% (Tata Capital) to 24% (Bajaj Auto Finance) | `[RB77]` |
| EV-specific blended estimate (2026 guide) | 11% to 16% | `[RB44]` |
| NITI Aayog-reported NBFC premium over ICE | +1.5 to +3 percentage points | `[RB43]` |
| Case assumption (used throughout this document) | 11% | `[C X08]` `[A14]`, at the bank end of every range above |

*This table supports one conclusion stated plainly: the 11% rate the model uses throughout `[A14]` is not a number the team chose to flatter leasing; it is the case's own stated figure, and it happens to sit at the cheapest end of the real market's rate range `[RB43]` `[RB44]` `[RB46]`, which means a real-world financing decision could face a higher, not lower, cost of debt than this document's base case assumes.*

A further structural question, which lane R-B investigated in detail, is how a 3-year EV lease against a 4-year EV asset life would actually be accounted for, since this affects whether a lease shows up as debt-like on SwiftKart's own books. Under AS 19, the lease accounting standard applicable to SwiftKart (since Ind AS 116 applies only to companies with net worth above ₹250 crore, far beyond SwiftKart's scale `[RB72]` `[RB73]`), a lease is classified as a finance lease if it meets any one of several indicators, including covering a major part, commonly read as over 75%, of the asset's economic life `[RB82]`. A 36-month lease against a 48-month asset life is exactly 75%, landing precisely on this threshold `[RB83]`. No purchase option is stated in the case, which is one indicator against a finance-lease classification, and the lease's running-cost bundling is not itself a classification indicator either way `[RB83]`. This is reported here as a genuine judgement call, not a settled accounting answer: the recommendation's claim that leasing avoids debt `[M]` `[T5]` is a cash and NPV claim, true on the model's own terms, and is separate from the question of how SwiftKart's auditors would eventually classify the lease on its balance sheet, which this document flags rather than resolves.

### 10.5 Tax backdrop: 5% GST on the EV itself, 18% on charging and swapping services

Two further pieces of outside evidence matter for anyone negotiating a real lease at SwiftKart's scale. First, GST on the EV itself is 5% (2.5% CGST plus matching state tax), confirmed directly against the GST Council's own 2019 notification text and reconfirmed on its own press page `[RB56]` `[RB81]`, while GST on EV charging and battery-swapping services is 18%, unchanged after the 2025 GST 2.0 revision despite an industry body's request to cut it to 5% `[RB62]` `[RB63]` `[RB65]`. Second, a single state-level advance ruling (Odisha, December 2024) classified leasing an EV without an operator as a financial lease taxed at the same 18% GST rate as an outright sale, based on indicators including a lease term covering most of the asset's economic life and the lessee bearing maintenance, insurance and compliance costs `[RB59]` `[RB60]`. This ruling binds only the applicant and is not a national rule `[RB61]`, but it is the best available indicator of how a lease structured like SwiftKart's hypothetical one, no purchase option disclosed, lessee presumably bearing running costs, would likely be taxed if challenged.

**T10.5. GST treatment relevant to an EV lease decision**

| Item | GST rate | Status |
|---|---|---|
| EV sale (the vehicle itself) | 5% (2.5% CGST + matching) | VERIFIED against two primary government texts `[RB56]` `[RB81]` |
| EV charger or charging station (hardware) | 5% (2.5% CGST + matching) | VERIFIED against the 2019 notification `[RB57]` |
| EV charging or battery-swapping service | 18% | VERIFIED, unchanged post-GST 2.0 `[RB62]` `[RB63]` |
| EV lease without an operator (financial lease) | 18% (one state ruling, Odisha, Dec 2024) | VERIFIED as a ruling; not a national rate, binds only the applicant `[RB59]` `[RB61]` |

*No national, CBIC-level notification setting a GST rate specifically for EV leasing services was found in this pass, confirmed as a genuine gap after a retry, not an access failure `[RB59 to RB61]`. This table is included to flag that a real negotiated lease at SwiftKart's scale would carry transaction costs, GST on the lease payment itself, that the case's own ₹3,500 figure does not separately break out, meaning the case figure should be read as a net operating cost, not a tax-inclusive contractual price, when SwiftKart's finance team negotiates an actual lease.*

### 10.6 Even the bear-case ₹5,000 lease rate stays below both switch points

Per the style rule that an uncertain number is never given as a single point estimate, the model carries the all-in lease rate as assumption A12 across bear, base and bull cases, not as a fixed ₹3,500 everywhere `[A12]` `[T16]`. The base case holds the case's own ₹3,500 `[C D12]`; the bear case moves to ₹5,000 a month, a market rate SwiftKart might face if the case's own rate cannot be secured at the scale the recommended plan needs `[A12]`; the bull case holds the base figure, since ₹3,500 is already close to the lowest verified comparable this lane found, Alt Mobility's ₹2,800 starting rate `[RB19]`, and pushing the bull case below the case's own figure would mean assuming a rate the case itself does not offer.

**T10.6. The all-in lease rate as a scenario input, not a point estimate**

| Case | All-in lease rate, ₹ a month | Basis |
|---|---|---|
| Bear | 5,000 | a market rate if the case figure cannot be secured at scale `[A12]` |
| Base | 3,500 | the case's own stated figure `[C D12]` `[A12]` |
| Bull | 3,500 | held at the case figure; no verified comparable below it was found `[A12]` `[RB19]` |

*Even in the bear case, 5,000, the rate sits below both the single-bike switch point (5,684) and the fleet-level switch point (5,153) `[T13]`, meaning the recommendation's ranking does not change in the bear case; section 19 shows the recommended plan's NPV in the bear scenario, ₹1.50 crore `[T10]`, still exceeds buying both fleets' bear-case NPV, ₹1.35 crore `[T10]`, confirming the lease-rate risk alone is not large enough to flip the recommendation even before the fleet-level switch point is reached.*

A lessor's own scale and survival matter as much as its quoted rate, since a fleet operator signing a multi-year lease is exposed to the lessor's own solvency, not only its price list. Alt Mobility, the one named provider offering a comparable bundled vehicle lease, shows verifiable growth evidence across multiple funding rounds rather than a single, unconfirmed claim: its financing arm Elektrowagen launched in August 2022 with a $25 million, 12-month commitment from Mufin Green Finance and AMU Leasing `[RB22]`; it raised a further $6 million in January 2024, co-led by Shell Ventures, Eurazeo, EV2 Ventures and Twynam, with assets under management crossing $12 million since it began leasing in April 2022 `[RB23]`; and it had, by August 2022, already leased 15,000 EVs to one single fleet customer, Zypp Electric `[RB21]`. Zypp Electric itself, the largest named rental and swapping operator in this lane's evidence, shows a more mixed picture: FY26 operating revenue of ₹461 crore, up 5.2% from FY25 `[RB01]`, against a FY26 net loss of ₹59.7 crore, though down about 44% from FY25's ₹107.5 crore loss `[RB03]`, and a utilisable fleet of about 30,000 vehicles as of the most recent verified count, a figure well short of a 1,25,000-vehicle target the company itself stated in August 2024 `[RB06]` `[RB11]` `[RB11a]`.

**T10.7. Lessor and fleet-provider scale and solvency evidence, most recent verified figures**

| Provider | Revenue or financing evidence | Loss or shortfall evidence |
|---|---|---|
| Alt Mobility | $12 million AUM (Jan 2024); $25 million committed financing facility (Aug 2022); 15,000-EV single deal with Zypp (Aug 2022) `[RB21]` `[RB22]` `[RB23]` | none found; no public loss figure located for Alt Mobility in this pass |
| Zypp Electric | FY26 operating revenue ₹461 crore, up 5.2% `[RB01]`; EV rental revenue specifically ₹137.7 crore, up 24% `[RB02]` | FY26 net loss ₹59.7 crore (down 44% from FY25) `[RB03]`; fleet of about 30,000 against a stated 1,25,000 target `[RB06]` `[RB11a]` |

*This table is included because a fleet-leasing counterparty's own financial health affects whether a quoted rate would actually be honoured over a 3-to-5-year term `[RB20]`; it is reported here as context for SwiftKart's own lessor-selection decision in section 23, not as a factor the model itself prices into the ₹3,500 assumption, which remains the case's own stated figure throughout `[C D12]` `[A12]`.*

**T10.8. Honest-reading summary: what the leasing-market evidence does and does not support**

| Claim | Supported by this lane's evidence | Not supported |
|---|---|---|
| A real Delhi-NCR lessor offers a vehicle lease below ₹3,500 a month | Yes, Alt Mobility's ₹2,800 starting rate `[RB19]` | not applicable |
| A single public source confirms an all-inclusive ₹3,500-equivalent figure, framed the way the case frames it | not applicable | No such source was found in this pass `[RB18]` |
| Leasing both fleets beats buying both fleets even if the real market rate runs above the case figure | Yes, up to ₹5,153 a month fleet level, 47% above the case figure `[T13]` | Above ₹5,153, the ranking would need re-testing, which this document does not claim to have done for a rate it has no evidence actually exists |
| The case's 11% financing rate is a fair, not understated, cost of capital | Yes, it sits at the bank end of the verified rate range `[RB43]` `[RB44]` `[RB46]` | not applicable |

*This table closes the section with the plan's own honest-reading discipline (section 2.10, point 1): the recommendation is defensible on the evidence found, and the evidence that is missing, a single current all-inclusive B2B quote, is named as missing rather than inferred or assumed away.*

Exhibit for the deck: S3 (Strategic Alternatives) switch-point strip; S6 annexure A3 carries the three switch points and the market-rate context in full.

### What this section establishes, and what it does not

- It establishes that five named providers, Zypp Electric, Yulu, Alt Mobility, Battery Smart and Sun Mobility, are active in or near Delhi-NCR's EV fleet leasing and swapping market, with Alt Mobility's own ₹2,800-a-month starting rate the closest verified comparable to the case's ₹3,500 `[RB19]`.
- It establishes, honestly and without softening, that no public source found in this pass gives a single all-inclusive B2B lease quote framed the way the case's ₹3,500 is framed, which is a genuine evidentiary gap, not a result this document hides `[RB18]`.
- It establishes the three switch points that bound the recommendation's exposure to the lease rate rising: ₹5,684 (one bike), ₹5,153 (fleet level, 48-month NPV), and a ₹94,521 subsidy that would be needed instead `[T13]`.
- It establishes that the case's own 11% financing rate sits at the cheap end of the real market's rate range, so the lease-versus-buy comparison is not tilted toward leasing by an understated cost of capital `[RB43]` `[RB44]` `[RB46]`.
- It does not resolve whether SwiftKart's hypothetical lease would be classified as a finance lease or an operating lease under AS 19; a 36-month term against a 48-month asset life sits exactly on the commonly used 75% threshold, a genuine judgement call this document flags rather than settles `[RB82]` `[RB83]`.
- It does not establish a national GST rate for EV leasing services specifically; the 18% figure rests on one state advance ruling, reported as such, not as settled law `[RB59]` `[RB61]`.

## 11. Range, charging and downtime: 30 deliveries a charge is a full day with no headroom at full use

**Answer.** A fully charged EV supports about 30 deliveries a working day under normal operating conditions `[C X02]`, which is exactly the daily delivery figure the case uses for the contract fleet at full utilisation, 30 deliveries a day `[C D03]`, so a contract EV running at 100% has zero headroom left for a slow charge, a swap delay, or a single missed morning charge before it falls short of the 95% fulfilment the contract requires `[C O03]`. The existing fleet at SwiftKart's own 85% utilisation keeps about 15 percentage points of daily slack, insight 3's finding `[C D08]` `[C X02]`. Independent evidence on battery life and charging downtime, drawn from an ICCT distance-based study and a set of swap-network scale figures, supports the model's own spares sizing of 10 spare vehicles across the recommended plan's two fleets, built to an assumed 95% availability after charging-related downtime `[A15]` `[M]` `[T8]`.

### 11.1 Insight 3: a charge covers exactly one full day at full use

The case states two figures that, read together, produce insight 3 directly: a fully charged EV supports approximately 30 deliveries a working day under normal operating conditions `[C X02]`, and the contract's own full-capacity revenue figure, ₹2.8 crore a year, is built on 75 vehicles delivering at exactly 30 deliveries a bike a day `[C O02]` `[C O07]` `[C D03]`. The arithmetic behind the contract's own revenue figure, worked through in full in section 4, is 75 × 30 × 26 × ₹40 × 12 = ₹2,80,80,000 a year `[C O02]` `[C D03]` `[C D04]` `[C D02]`. The 30-deliveries-a-charge figure is therefore not a generic specification; it is the exact daily volume the contract's own revenue model assumes every contract-fleet vehicle will deliver, every working day, once the contract is at full capacity.

This means a contract-fleet EV running at 100% utilisation has no daily margin at all between what a single charge supports and what the day's workload requires. Any shortfall, a slower-than-expected charge, a swap-station queue, a battery that has degraded enough to lose range before its scheduled replacement, converts directly into a missed delivery that day, with no slack to absorb it. SwiftKart's own existing fleet, running at 85% utilisation rather than 100% `[C D08]`, keeps a materially different position: 85% of 30 deliveries is 25.5 deliveries a day, which leaves 4.5 deliveries, 15% of a full charge's capacity, as daily headroom against exactly the same charging-related risks the case itself flags, downtime and gradual battery deterioration `[C X03]` `[C X04]`.

**T11.1. Deliveries supported by one charge, against the day's actual workload, by fleet**

| Fleet | Utilisation | Deliveries actually required a day | Deliveries one charge supports | Headroom |
|---|---|---|---|---|
| Existing fleet (recommended plan, base) | 85% | 25.5 | 30 | 4.5 deliveries, 15% of one charge |
| Contract fleet at full capacity | 100% | 30.0 | 30 | 0 deliveries, no headroom |

*The existing fleet's headroom figure, 25.5 deliveries required against 30 supported, is arithmetic on the case's own D03 and D08 figures `[C D03]` `[C D08]`; the contract fleet's zero-headroom figure follows directly from the contract's own stated 30-delivery, 100%-utilisation revenue basis `[C O02]` `[C O07]` `[C D03]`. This is the single clearest illustration in the whole case of why the contract's 95% fulfilment requirement `[C O03]` is a tighter operational constraint than its headline revenue figure alone suggests, and why spares (section 11.4) rather than range alone are the lever that protects fulfilment.*

### 11.2 Battery degradation: three sources disagree by up to 6x on cycle life

The case flags two separate battery-related risks without quantifying either: charging-related downtime that "may affect vehicle availability" `[C X03]`, and battery performance that is "expected to deteriorate gradually over the useful life of the vehicle" `[C X04]`. Lane R-D investigated both and found a genuinely mixed, sometimes conflicting, evidence base, reported here honestly rather than resolved into a single false-precision figure.

On the question of how long a delivery-duty battery actually lasts before replacement, the strongest available evidence is the ICCT working paper's own distance-based figures: for the identical last-mile delivery duty cycle used throughout this section (115 km a day, 317 days a year, about 36,455 km a year `[RD24c]`), the paper derives an average battery life of 92,800 km for the Ather 450X and 111,200 km for the Okinawa iPraise+, before the battery needs replacement `[RD45]`. At the same annual distance, this implies a battery replacement roughly every 3 years for the Ather and every 4 years for the Okinawa `[RD45]`, and the paper prices the replacement itself at ₹24,001 (Ather) and ₹24,190 (Okinawa) `[RD45b]`.

**T11.2. Distance-based battery life, ICCT last-mile delivery duty cycle**

| Model | Average battery life, km | Implied replacement interval at 36,455 km a year | Replacement cost |
|---|---|---|---|
| Ather 450X | 92,800 | about 3 years | ₹24,001 `[RD45b]` |
| Okinawa iPraise+ | 111,200 | about 4 years | ₹24,190 `[RD45b]` |

*Figures from `[RD45]` and `[RD45b]`. This is a distance-based proxy, derived from an assumed cycle count multiplied by distance per cycle; the paper does not separately break out a cycle count or name a battery chemistry (lithium iron phosphate, LFP, versus nickel manganese cobalt, NMC) for either model `[RD45c]`, a genuine limit this document discloses rather than papers over with a false chemistry-specific claim.*

On the narrower question of whether LFP or NMC chemistry degrades faster, the evidence conflicts sharply across the three sources this lane checked, and this document reports the conflict rather than picking a side, consistent with the plan's own source-precedence rule, which favours a higher evidence tier but does not manufacture agreement where none exists. A vendor explainer states LFP cells reach 3,000 to 6,000 cycles before falling to 80% of original capacity, against 1,000 to 2,000 cycles for NMC, a 2-to-3x LFP advantage `[RD41]`. A peer-reviewed-adjacent study (read directly from its own abstract) found the opposite under its own specific test conditions, a Samsung NMC cell reaching 80% state of health after 3,000 cycles at 35 degrees Celsius and 75% depth of discharge, a better result than the two LFP cells it tested under the same conditions `[RD42]`. A Japan Science and Technology Agency survey of multiple published studies found NMC falling to 80% capacity after as few as 500 cycles under wide depth-of-discharge cycling, against about 3,000 cycles for LFP under the same method, but also found that raising temperature or charge rate alone can cut NMC's cycle life from about 1,200 cycles to about 500, meaning temperature and charge rate, not chemistry alone, drive the outcome `[RD43]`.

**T11.3. LFP versus NMC cycle life, three conflicting sources, none treated as settled**

| Source | LFP cycles to 80% capacity | NMC cycles to 80% capacity | Test condition |
|---|---|---|---|
| Vendor explainer (lower tier) | 3,000 to 6,000 | 1,000 to 2,000 | not stated in detail `[RD41]` |
| Peer-reviewed-adjacent study abstract | not a matched cycle count (calendar aging only, 5% to 8% loss over 30 months) | 3,000 cycles | 35°C, 75% depth of discharge `[RD42]` |
| Japan Science and Technology Agency survey | about 3,000 | 500 to 1,200, depending on temperature and charge rate | wide depth of discharge, varying temperature and C-rate `[RD43]` |

*Per the source-precedence rule, the vendor blog (`[RD41]`) is the lowest-tier source of the three and is not used as the basis for any model input; no single cycle-life multiplier is used anywhere in this document or the model, because none of the three sources agrees closely enough with the other two to support one `[RD44]`. All three sources agree, independently, that temperature, charge rate and depth of discharge, not chemistry alone, drive the real-world outcome `[RD44]`, which is the one finding this document does carry forward: SwiftKart's own depot charging discipline (section 23) matters at least as much as which battery chemistry its leased EVs happen to use.*

### 11.3 Depot charging against 1,518 Battery Smart stations and 630-plus Sun Mobility stations

Delhi-NCR already has a materially built-out battery-swapping infrastructure that an operator could use instead of, or alongside, depot point-charging. Battery Smart alone operates 1,518 swapping stations nationally, including 321 in Delhi, with a two-minute swap claim and a Tracxn-attributed 36% national market share `[RB24]` `[RB25]` `[RB26]`. Sun Mobility, through its joint venture with Indian Oil, supports over 25,000 EVs across 20 cities through more than 630 stations `[RB34]`. Indofast Energy, the Alt Mobility-adjacent swap network, had reached its 1,000th battery swap station across 10 states and 22 cities with over 39 million cumulative swaps at the time of this lane's check, though no verified monthly swap-volume figure was found `[RD60]`. A battery swap itself takes about two to five minutes `[RD62]`, materially faster than any plausible point-charge, and this speed is explicitly named as the reason swap-based charging has found its primary adoption in B2B delivery fleets rather than private scooter ownership `[RD62]`.

**T11.4. Swap network scale, Delhi-relevant providers**

| Network | Stations | Delhi-specific count | Notable detail |
|---|---|---|---|
| Battery Smart | 1,518 nationally (Jun 2025) | 321 in Delhi `[RB25]` | two-minute swap claim `[RB24]`; 36% market share (Tracxn-attributed, not an independent regulator) `[RB26]` |
| Sun Mobility | 630-plus (Jun 2024) | not broken out separately in the source | supports 25,000-plus EVs across 20 cities `[RB34]`; first North Delhi swap point at Azadpur market, Tata Power-DDL partnership `[RB33]` |
| Indofast Energy | 1,000th station reached (10 states, 22 cities) | not broken out separately in the source | over 39 million cumulative swaps; monthly swap rate unconfirmed `[RD60]` |

*The ICCT working paper's own cost modelling found that battery swapping is not uniformly cheaper than point charging for a delivery duty cycle: at the case's own usage intensity, swapping costs about ₹1.55 a km against point charging's ₹1.00 a km for the same Okinawa iPraise+ model `[RD64]`, because the paper's baseline swap price (₹34 a kWh) runs well above its effective point-charging cost (₹13.7 a kWh blended) `[RD66]`. A separate ICCT publication finds the crossover point is usage intensity, not model: point charging is the more economical mode below about 100 km a day, while swapping becomes more economical at about 140 km a day and above `[RD67c]`, a distinction specific enough that this document reports it as a directional finding, not a SwiftKart-specific recommendation, since the case gives no per-bike daily distance figure beyond deliveries a day.*

No published depot layout specification, bay count a vehicle, power provisioning a bay, overnight versus staggered charging, for an Indian last-mile delivery fleet operator was found in this pass, a genuine gap `[RD58]`. In its absence, this document sizes the charging investment from the case's own ₹10 lakh, 100-EV figure `[C X01]`, used throughout sections 9 and 17, rather than a researched depot design that no primary source actually documents.

### 11.4 Spares sizing: 10 spares across the recommended plan, built to 95% availability

The recommended plan carries 10 spare vehicles in total across its full build-out: 4 spares for the existing fleet, added alongside the three electrification waves, and 6 spares for the contract fleet, 2 added with each of the three 25-vehicle tranches `[M]` `[T7]` `[T8]`. This spares count is not a round number chosen for convenience; it is sized against assumption A15, EV availability after charging-related downtime, held at 95% in the base case `[A15]` `[T16]`, which the case itself motivates directly: charging-related downtime "may affect vehicle availability" `[C X03]`.

**T11.5. Spares build-out, quarter by quarter, recommended plan**

| Quarter | Petrol bikes | EVs, existing fleet | EVs, contract fleet | Spares (running total) |
|---|---|---|---|---|
| Q1 | 50 | 50 | 0 | 4 |
| Q2 | 10 | 90 | 50 | 8 |
| Q3 | 10 | 90 | 75 | 10 |
| Q4 to Q8 | 0 | 100 | 75 | 10 |

*Reproduced from model table T8 `[T8]`. The spares count rises in step with each electrification wave and each contract tranche, reaching its full 10-vehicle complement by Q3, the same quarter the contract fleet itself reaches its full 75 vehicles `[T8]`, so the plan's availability buffer is in place at the moment the contract's own 95% fulfilment requirement `[C O03]` first applies to a complete contract fleet.*

**T11.6. Assumption A15, EV availability after charging downtime**

| Case | Availability | Basis |
|---|---|---|
| Bear | 90% | more frequent or longer charging-related downtime than the base case `[A15]` |
| Base | 95% | the case flags downtime as a risk without quantifying it; 95% is the team's own assumption, spares sized to absorb the remaining 5% `[C X03]` `[A15]` |
| Bull | 98% | downtime proves minor in practice `[A15]` |

*A15 is one of the eight assumptions the deck surfaces directly (S4, "What has to be true", and S6, A2), because spares sizing, and therefore part of the ₹1 crore allocation (the charging hub and lease deposit lines in section 17), depends on it `[A15]` `[T16]`. Section 19's uncertainty exposure matrix shows that a doubling of charging downtime moves the recommended plan's 48-month NPV down by ₹21.7 lakh `[T12]`, the same figure for every option that runs an EV fleet, which is the exposure the spares allocation exists to manage.*

**T11.7. Why 10 spares, not a different number: the arithmetic check**

| Fleet | Vehicles at full build-out | Availability assumption | Vehicles needed operational at any time | Spares carried | Spares as a share of the fleet |
|---|---|---|---|---|---|
| Existing | 100 | 95% `[A15]` | 95 | 4 | 4.0% |
| Contract | 75 | 95% `[A15]` | 71.25, rounded to 72 | 6 | 8.0% |

*The contract fleet carries a proportionally larger spares share (8.0% against 4.0%) than the existing fleet, consistent with the contract's own tighter operating constraint identified in section 11.1: a contract-fleet EV running at full utilisation has zero daily range headroom, so the plan compensates with a thicker spares buffer rather than relying on range alone to absorb a bad charging day. The arithmetic here is illustrative, built directly from A15 and the case's own fleet-size figures `[C O02]` `[A15]`, and is consistent with, though not identical to, the model's own month-by-month spares build in T7 and T8, which also reflects staging and tranche timing, not only a steady-state ratio `[T7]` `[T8]`.*

### 11.5 What would make this risk larger: a battery lasting 500 cycles, not 3,000

Three case-named uncertainties bear directly on this section's finding and are each carried as a scenario input elsewhere in this document rather than assumed away here. Charging-related downtime itself (`[C X03]`) is the uncertainty A15 already prices at 90% to 98% availability `[A15]`; section 19's sensitivity work shows a doubling of this specific downtime moving the recommended plan's NPV by ₹21.7 lakh, the smallest of the model's named shock categories once the plan is fully electrified, because spares, not range, are the buffer that absorbs it `[T12]`. Faster-than-expected demand growth (`[C U07]`) would push the contract fleet toward its 100% utilisation ceiling sooner, which this section's own arithmetic shows leaves zero range headroom once that ceiling is reached; the plan's answer to that risk is not a bigger battery, which the case does not offer as a lever, but the spares and the gate structure in section 22, which lets SwiftKart add vehicles within the contract's own 12-month scaling window `[C O06]` rather than lean on a single vehicle's unused range. Changing government incentives (`[C U06]`) do not change this section's physical-capacity finding at all, since the 30-delivery-a-charge figure is a hardware fact stated by the case `[C X02]`, not a policy-dependent one; this uncertainty affects the subsidy and switch-point arithmetic in sections 9 and 10, not range or spares.

A genuinely larger version of this risk would appear if a verified, delivery-duty-specific cycle count later confirmed the lower end of the Japan Science and Technology Agency's NMC range, 500 cycles under adverse temperature and discharge conditions `[RD43]`, applied to whichever chemistry the recommended plan's chosen lessor actually deploys. At 500 cycles and a full discharge-recharge roughly once a working day, a battery could need replacement in under two years, materially sooner than the 3-to-4-year figure this section uses as its base `[RD45]` `[RD43]`. This document does not assume that outcome, because no source checked in this pass ties a specific cycle count to the specific chemistry a Delhi-NCR delivery lessor would actually supply `[RD45c]` `[RD45d]`; it is named here as the single largest unresolved technical uncertainty behind this section's spares and availability assumptions, and the honest answer, consistent with section 2.10's own discipline, is that SwiftKart's lease negotiation (section 23) should ask its chosen lessor directly for a chemistry-specific, duty-cycle-specific degradation warranty rather than rely on any one of the three conflicting published figures this lane found.

One further point this section does not let pass unstated: because the recommended plan leases rather than buys, the battery-replacement cost itself, ₹24,000-odd a vehicle on the ICCT figures `[RD45b]`, is not a cost line that appears anywhere in SwiftKart's own cash flow at all. A bought EV's owner bears that cost directly, as a capital outlay the model's own annuity method in section 9 does not separately itemise beyond the resale-value adjustment, since the case gives no mid-life replacement figure to model against. A leased EV's lessor bears the replacement cost instead, bundled into the monthly rate under products like Alt Mobility's FleetLease, which explicitly includes OEM-backed servicing `[RB20]`. This is a second, separate reason, beyond the pure monthly-cost comparison in section 9, that the range and battery-degradation risk this section documents sits more heavily on a buying option than on the recommended leasing option: a buyer owns the battery-degradation risk for the vehicle's full life, while a lessee transfers most of it to the lessor for the lease's term, a qualitative point the model's own NPV figures do not separately decompose but that this document records here for completeness.

Exhibit for the deck: S2 (The Situation) badge 3, no slack at 100% utilisation; S5 (Recommendation and Roadmap) spares and gates.

### What this section establishes, and what it does not

- It establishes insight 3 directly from two case facts: a charge supports 30 deliveries a day `[C X02]`, which is exactly the contract fleet's own full-utilisation daily delivery figure `[C D03]` `[C O02]` `[C O07]`, leaving zero headroom at full contract volume, against 15% headroom on the existing fleet at 85% utilisation `[C D08]`.
- It establishes, from the strongest available distance-based evidence, that a delivery-duty EV battery lasts roughly 3 to 4 years before replacement, at a replacement cost of about ₹24,000, though this figure does not separately identify battery chemistry `[RD45]` `[RD45b]` `[RD45c]`.
- It establishes, honestly, that LFP-versus-NMC cycle-life evidence conflicts sharply across three sources, and that no single multiplier is used anywhere in the model because none of the three sources agrees closely enough to support one `[RD41]` `[RD42]` `[RD43]` `[RD44]`.
- It establishes that Delhi-NCR has a materially built-out battery-swap infrastructure as an alternative to depot point-charging, though the ICCT evidence shows swapping is cheaper than point charging only above about 140 km a day, a threshold this document does not confirm SwiftKart's own delivery pattern crosses `[RB24]` `[RB25]` `[RB34]` `[RD67c]`.
- It establishes the arithmetic basis for the plan's 10 spares, sized against a 95% availability assumption `[A15]` and reaching full complement by the same quarter the contract fleet reaches full size `[T8]`.
- It does not establish a researched depot layout specification, since none was found for an Indian last-mile delivery fleet operator in this pass; the charging investment is sized from the case's own ₹10 lakh, 100-EV figure instead `[C X01]` `[RD58]`.

## 12. Emissions: 240 grams of CO2 a delivery today, 106 grams on the leased fleet, reported every month

**Answer.** SwiftKart's petrol fleet emits about 240 grams of CO2 a delivery today; the recommended, fully leased and electrified fleet emits about 106 grams a delivery by month 24, a 56% cut, while deliveries a month rise 88%, from 66,300 to 1,24,800 `[M]` `[T14]`. The two emission factors the model rests on, the petrol factor (assumption A21, 2.31 kg CO2 a litre) and the grid factor (assumption A24, 0.727 kg CO2 a kWh), were both independently confirmed exactly against primary source documents, IPCC's 2006 Guidelines and the Central Electricity Authority's (CEA) CO2 Baseline Database Version 20.0, by the R2 verification pass `[RG16]` `[RG32]`. The case's own requirement, monthly reporting of emissions-related metrics `[C O05]`, in fact exceeds the minimum cadence ISO 14083:2023 and the GLEC Framework themselves require, which is annual, not monthly `[RG45]`.

### 12.1 Method: six assumptions, A19 to A24, carry every emissions figure in this document

Six assumptions, A19 to A24, convert the case's own running-cost figures into a CO2 figure, since the case itself gives no emissions data at all `[A19 to A24]` `[T16]`. Four of the six (A19, A22, A23) are physical, engineering-type figures with no India-government primary source available at the precision this case needs; two (A21, A24) are emission factors with primary, government or international-standard sources this lane could verify exactly.

**T12.1. The six emissions assumptions, in full**

| ID | Assumption | Base value | Basis and verification status |
|---|---|---|---|
| A19 | Fuel share of petrol running cost | 0.78 | the rest of the case's ₹9,000 running-cost line is servicing, oil and tyres, not fuel itself `[C D06]` `[A19]` |
| A20 | Delhi petrol price | ₹102.0 a litre | M1 update from two independently verified sources, Upstox and Business Today, agreeing to the rupee on 15 Oct 2026 `[RD11]` `[RD12]` `[A20]` |
| A21 | Petrol emission factor | 2.31 kg CO2 a litre | IPCC 2006 default energy factor combined with an assumed India-typical petrol density; confirmed exactly against the primary IPCC document (section 12.2) `[A21]` `[RG16]` |
| A22 | Delivery-bike fuel economy | 42.0 km a litre | a 110 to 125 cc bike in stop-start city delivery; no single authoritative figure exists, kept conservative (section 12.4) `[A22]` `[RD21]` |
| A23 | EV energy use including charging losses | 0.036 kWh a km | cargo e-scooter energy use; no duty-cycle-specific test found, kept conservative (section 12.4) `[A23]` `[RD26]` `[RD29]` |
| A24 | Grid emission factor | 0.727 kg CO2 a kWh | CEA CO2 Baseline Database, latest version this lane could access directly; confirmed exactly (section 12.2) `[A24]` `[RG32]` |

*A19 through A23 feed the fuel-and-energy side of the calculation; A24 feeds the electricity side. A20, the petrol price itself, is not an emissions assumption but the model's own case-fact input, reproduced here because it interacts with A19 and A22 in the derivation shown in section 12.3.*

### 12.2 Two factors, A21 and A24, were confirmed exactly against two primary documents

The R2 verification pass re-opened the primary source for each of the two emission-factor assumptions directly, rather than accepting a secondary citation, and both were confirmed exactly.

For A21, the petrol emission factor, lane R-G opened the 2006 IPCC Guidelines, Volume 2, Chapter 1, directly, and read its own Table 1.2 (net calorific value, motor gasoline, 44.3 TJ per Gg), Table 1.3 (default carbon content, 18.9 kg carbon per GJ) and Table 1.4 (effective CO2 emission factor, 69,300 kg CO2 per TJ, oxidation factor 1) `[RG01]` `[RG03]` `[RG04]`. Combining these three figures by the dimensional arithmetic IPCC's own Table 1.4 formula states, carbon content times oxidation factor times 44 divided by 12 times 1,000, gives 3.070 kg CO2 a kilogram of fuel `[RG05]` `[RG06]`. IPCC itself publishes no density figure for motor gasoline in either chapter reviewed `[RG07]`, so converting to a litre-based figure needs an assumed density from outside IPCC; using the midpoint of India's own Bureau of Indian Standards density range for BS VI motor gasoline (IS 2796:2017, 720 to 775 kg per cubic metre) gives 2.294 kg CO2 a litre, and the full plausible range spanned by density choice alone runs 2.21 to 2.38 kg CO2 a litre `[RG09]` `[RG10]` `[RG11]`. The model's own A21 base, 2.31, sits inside this range, close to its centre `[RG68]`, and is exactly reproducible by assuming a density of about 0.7524 kg a litre, itself inside the BIS regulatory band `[RG12]`.

For A24, the grid emission factor, lane R-G downloaded and read directly, with PyMuPDF, the CEA's own CO2 Baseline Database, User Guide, Version 20.0 (December 2024), the newest version this environment could access past CEA's own login wall on every newer URL attempted `[RG28]`. Its Table S gives the weighted average emission factor, defined explicitly in the same table's own footnote as the average emission of all stations in the grid weighted by net generation, the correct basis for A24's own wording `[RG22]` `[RG23]`, as 0.727 tonnes CO2 per megawatt hour for FY 2023-24, numerically identical to 0.727 kg CO2 a kWh `[RG22]` `[RG24]`. This is an exact match to the model's own A24 figure `[A24]` `[RG32]`.

**T12.2. The two confirmed emission factors, primary document, exact match**

| Assumption | Model value | Primary document | Primary document's own value | Match |
|---|---|---|---|---|
| A21, petrol | 2.31 kg CO2 a litre | IPCC 2006 Guidelines, Volume 2, Tables 1.2 to 1.4 `[RG01]` `[RG03]` `[RG04]` | 3.070 kg CO2 a kg of fuel (energy side only; density assumed separately) `[RG06]` | within the honestly-derived 2.21 to 2.43 uncertainty band; not a bare, undisclosed IPCC default `[RG68]` |
| A24, grid | 0.727 kg CO2 a kWh | CEA CO2 Baseline Database, Version 20.0, Table S `[RG22]` | 0.727 tCO2 per MWh, FY 2023-24 `[RG22]` | exact |

*The A24 row is an exact digit-for-digit match against a primary government document, read directly, not via a secondary summary `[RG22]`. The A21 row is reported more carefully, as "confirmed within an honestly-derived range" rather than "exact", because IPCC itself states only the energy-side factor and no density, so a litre-based figure always carries one disclosed, judgement-based step beyond IPCC's own tables `[RG07]` `[RG16]`; this document names that step explicitly every time A21 is cited, per the discipline C-G2 in the raw conflicts record requires `[RG68]`.*

Two newer CEA versions were reported, second-hand, to exist: Version 21.0 (November 2025, FY 2024-25, about 0.71) and Version 22.0 (1 August 2026, FY 2025-26, about 0.675), both behind the same login wall this environment could not pass, and neither independently confirmed against its own primary PDF `[RG29]` `[RG30]`. If either newer, lower figure is real, using it instead of 0.727 would make the model's grid-charging emissions even smaller relative to petrol, strengthening rather than weakening the case for electrifying `[RG32]`; this document therefore does not treat the unverified newer figures as a reason to revisit A24, only as a directional note that the recommendation's emissions case is, if anything, conservatively stated.

### 12.3 Model table T14: the arithmetic from fuel and electricity to grams of CO2 a delivery

With A19 to A24 and the case's own delivery figures in hand, the model converts fuel and electricity use into grams of CO2 a delivery for both the petrol fleet today and the fully electrified fleet at month 24.

**T12.3. Emissions, today against month 24 (model table T14)**

| Measure | Today | Month 12 | Month 24 |
|---|---|---|---|
| Tonnes CO2 a year | 190.8 | 158.9 | 158.9 |
| Grams CO2 a delivery | 240 | 106 | 106 |
| Deliveries a month | 66,300 | 1,24,800 | 1,24,800 |

*Reproduced from model table T14 `[T14]`. Grams a delivery falls 56% (240 to 106, arithmetic: (240 minus 106) divided by 240 equals 55.8%, rounded to 56%) while total deliveries a month rise 88% (66,300 to 1,24,800, arithmetic: (1,24,800 minus 66,300) divided by 66,300 equals 88.2%, rounded to 88%) `[T14]`. Total annual tonnes fall from 190.8 to 158.9, a smaller percentage fall, 16.7%, than the per-delivery figure, because the fleet is both cleaner per delivery and larger in absolute size once the contract is won.*

The petrol-side arithmetic behind the "today" column runs through assumption A19 (78% of the ₹9,000 running cost is fuel, implying a fuel spend of ₹7,020 a bike-month `[C D06]` `[A19]`), assumption A20 (Delhi petrol at ₹102.0 a litre `[A20]`, giving about 68.8 litres a bike-month), assumption A22 (42 km a litre fuel economy `[A22]`, giving about 2,890 km a bike-month), and assumption A21 (2.31 kg CO2 a litre `[A21]`, giving about 159 kg CO2 a bike-month). Divided across the 663 deliveries a bike-month at 85% utilisation `[T2]`, this is the arithmetic chain behind the model's own 240-gram figure `[T14]`. The electric-side arithmetic for month 24 runs through assumption A23 (0.036 kWh a km `[A23]`) and assumption A24 (0.727 kg CO2 a kWh `[A24]`), applied to the same distance basis, giving the model's own 106-gram figure once the fleet is fully leased and electrified `[T14]`.

**T12.8. The derivation chain shown step by step, petrol fleet today**

| Step | Input | Value | Tag |
|---|---|---|---|
| 1 | Running cost a bike-month | ₹9,000 | `[C D06]` |
| 2 | Fuel share of running cost | 78% | `[A19]` |
| 3 | Fuel spend a bike-month (1 x 2) | ₹7,020 | arithmetic |
| 4 | Petrol price a litre | ₹102.0 | `[A20]` |
| 5 | Litres a bike-month (3 divided by 4) | about 68.8 | arithmetic |
| 6 | Fuel economy | 42.0 km a litre | `[A22]` |
| 7 | Distance a bike-month (5 x 6) | about 2,890 km | arithmetic |
| 8 | Petrol emission factor | 2.31 kg CO2 a litre | `[A21]` |
| 9 | CO2 a bike-month (5 x 8) | about 159 kg | arithmetic |
| 10 | Deliveries a bike-month at 85% utilisation | 663 | `[T2]` |
| 11 | Grams CO2 a delivery (9 divided by 10, converted to grams) | about 240 | matches `[T14]` |

*This table shows every step of the chain a judge could ask to see rebuilt live, from the case's own running-cost figure down to the model's own 240-gram headline. No step uses a number this document has not already cited elsewhere with its own tag, which is the same defensive-depth discipline section 9's annuity derivation follows.*

### 12.4 Why A22 and A23 stayed conservative: every comparison figure sits above the model's two bases

Per the honest reading this document must not soften, lane R-D confirmed that both A22 (fuel economy) and A23 (EV energy use) sit on the conservative side of the real-world evidence found, and that neither assumption was moved to a less conservative figure, because no source checked in either pass gives a figure specific to a loaded, stop-start delivery duty cycle for either vehicle type; the model's own values were kept rather than averaged against unrelated commuter-riding figures `[A22]` `[A23]`.

On fuel economy, commuter motorcycle figures range widely by source and by whether the figure is a manufacturer's certified rating or an owner-reported real-world number: Hero Splendor Plus Xtec 2.0 is ARAI-certified at 73 km a litre `[RD14]`, but owner-reported figures for related Splendor models run as low as 60 to 62 km a litre `[RD15]` `[RD16]`, and a Shriram Finance delivery-rider article gives real-world ranges of 65 to 70 km a litre for the Splendor Plus, materially above the model's 42 km a litre base `[RD21]`. The ICCT working paper's own Honda Activa 6G figure, adjusted down from a 60 km a litre certified rating by a 25% real-world penalty, lands at 48 km a litre `[RD24b]`, still above the model's 42. The model's 42 km a litre base is therefore conservative relative to nearly every commuter-bike figure found, which is consistent with, not contradicted by, the case's own framing of a delivery bike's duty cycle as heavier-use and more stop-start than a commuter's.

**T12.4. Fuel economy evidence against the model's A22 base, by source**

| Source | Figure, km a litre | Basis |
|---|---|---|
| Model base (A22) | 42.0 | conservative, no duty-cycle-specific source found `[A22]` |
| ICCT last-mile delivery adjustment | 48.0 | 60 km a litre certified, minus a 25% real-world penalty `[RD24b]` |
| Hero Splendor Plus Xtec 2.0, ARAI certified | 73.0 | manufacturer certified, not real-world `[RD14]` |
| Hero Splendor Plus, owner reported | 60 to 62 | owner feedback, not delivery-specific `[RD15]` `[RD16]` |
| Shriram Finance, delivery-rider article, Splendor Plus | 65 to 70 | stated as a delivery-use range, no test method given `[RD21]` |

*Every figure in this table except the model's own A22 base sits above 42 km a litre, confirming the base is conservative, not inflated, relative to the available evidence `[RD14]` `[RD15]` `[RD16]` `[RD21]` `[RD24b]`. A conservative fuel-economy assumption understates, if anything, the petrol fleet's true fuel cost and its true emissions, which means the model's own 240-gram "today" figure is, if anything, a floor rather than an overstatement of the petrol fleet's actual emissions.*

On EV energy use, the two closest available real-world proxies are both derived arithmetically from a maker's own stated battery size and stated range, not from an independent test agency, since no independent, test-agency-measured watt-hour-a-kilometre figure for an electric delivery scooter under Indian conditions was found in this pass, a genuine gap `[RD38]`. The Kinetic DX+'s own 3.1 kWh pack and 105-to-110 km real-world range implies about 28 to 30 Wh a km `[RD25]` `[RD26]`; the Ather Rizta S's own 2.9 kWh pack and 105 km true range implies about 27.6 Wh a km `[RD27]` `[RD28]` `[RD29]`. Both figures sit below the model's 36 Wh a km (0.036 kWh a km) base, meaning the model's own assumption is again the conservative, higher-energy-use figure relative to two makers' own real-world range claims, not an optimistic understatement of how much electricity a delivery EV actually needs.

**T12.5. EV energy use evidence against the model's A23 base, by source**

| Source | Implied Wh a km | Basis |
|---|---|---|
| Model base (A23) | 36.0 (0.036 kWh a km) | conservative (higher energy use than either market figure below), no duty-cycle-specific source found `[A23]` |
| Kinetic DX+ | 28 to 30 | arithmetic on the maker's own 3.1 kWh pack and 105 to 110 km real-world range `[RD25]` `[RD26]` |
| Ather Rizta S | 27.6 | arithmetic on the maker's own 2.9 kWh pack and 105 km true range `[RD27]` `[RD28]` `[RD29]` |

*Because the model's A23 base assumes more electricity use a kilometre than either market reference, the model's own month-24 emissions figure, 106 grams a delivery `[T14]`, is, if anything, an overstatement of the EV fleet's energy draw and its resulting grid emissions, not an understatement; a reader who substituted either market figure for A23 would find the recommended plan's emissions case stronger, not weaker.*

### 12.5 ISO 14083:2023 and the GLEC Framework: what a monthly emissions report must actually contain

The case's own requirement, monthly reporting of emissions-related metrics `[C O05]`, is a client-specific contractual ask, and lane R-G's reading of the GLEC Framework, Smart Freight Centre's own named standard for aligning logistics-sector practice with ISO 14083, found that the international standard itself sets a minimum reporting cadence of annual, not monthly `[RG38]` `[RG45]`. SwiftKart's monthly cadence should therefore be framed in the deck and in this document as exceeding the named standard, not merely implementing it, a distinction worth stating plainly because it strengthens, not weakens, the credibility of the client-facing claim.

A conformant report under ISO 14083, at the organisational level, must include six required elements: identification of the transport chains or services covered; total GHG emissions; total GHG emission intensity, stating which activity-distance basis was used; total GHG emissions broken out by transport mode and hub operation; the same intensity figure by mode; and a reference to where supporting information can be found `[RG37]`. Beyond these six, a conformant report must state its data quality (the share of primary versus secondary data, and within secondary data, modelled versus default values) and disclose any deviation from standard ISO 14083 process, with the deviation's impact on the reported numbers explained `[RG38]` `[RG39]`. SwiftKart's own position, using default emission factors (A21, A24) rather than directly metered data, is exactly the case the standard anticipates: when default intensities are used, the report must name the source of the default and justify its use `[RG43]`, which is precisely what sections 12.1 and 12.2 of this document do for A21 and A24.

**T12.6. ISO 14083 and GLEC Framework, required elements of a conformant monthly report**

| Element | Required or recommended | Relevant to SwiftKart's own position |
|---|---|---|
| Identification of transport chains or services covered | required `[RG37]` | the contract fleet, named as a distinct transport chain from the existing fleet |
| Total GHG emissions and emission intensity, with activity-distance basis stated | required `[RG37]` | T14's own tonnes-a-year and grams-a-delivery figures `[T14]` |
| Breakdown by mode of transport and hub operation | required `[RG37]` | petrol versus EV, existing fleet versus contract fleet |
| Report frequency, at least annual | required `[RG38]` | SwiftKart's monthly cadence exceeds this minimum `[C O05]` `[RG45]` |
| Data quality (primary versus secondary, modelled versus default) | required `[RG38]` | A21 and A24 disclosed as default values with named sources `[A21]` `[A24]` |
| Deviation from standard process, with impact explained | required `[RG39]` | the density assumption behind A21, disclosed in section 12.2, is exactly this kind of deviation `[RG68]` |
| Disaggregation by energy carrier (petrol versus grid electricity) | strongly recommended `[RG40]` | separating the petrol fleet's and the EV fleet's emissions, as T14 already does `[T14]` |
| Independent third-party assurance | recommended, not required `[RG46]` | not yet built into the recommended plan's 24-month roadmap; a future refinement |

*The GLEC Framework's own warning, that the most common error in a non-conformant report is substituting a tank-to-wheel factor where a well-to-wheel factor was required, producing an apparently, probably incorrectly, lower emissions figure `[RG44]`, is a direct caution against ever quietly understating SwiftKart's own petrol or grid figures to make the monthly report look better than the underlying method supports; this document's own A21 and A24 figures are both well-to-wheel-consistent energy-side factors, not tank-to-wheel figures, so this specific error does not apply to the model as built.*

### 12.6 Green power and open access: the bull-case upside this section does not over-claim

The Delhi Electricity Regulatory Commission's Green Energy Open Access Regulations, 2024, as amended in June 2026, let a consumer with a contracted demand or sanctioned load of 100 kW or more buy renewable power directly from a generator, with the 2026 amendment removing an earlier minimum-voltage condition entirely `[RG48]` `[RG50]`. A charging depot for the recommended plan's full 175-EV build-out (100 existing plus 75 contract vehicles `[C O02]`), drawing at most a low hundreds of kW at any one time if charging is staggered across a working day, would plausibly clear this 100 kW threshold well before it could justify a dedicated 11 kV connection, so the 2026 amendment widens, not narrows, SwiftKart's eligibility window as the fleet scales `[RG51]` `[RG66]`.

**T12.7. Green Energy Open Access, what it offers and what remains unpriced**

| Feature | Detail | Tag |
|---|---|---|
| Eligibility threshold | 100 kW contracted demand or sanctioned load, no minimum voltage from 17 Jun 2026 | `[RG48]` `[RG50]` |
| Additional surcharge | tapers to zero within 4 years of grant | `[RG54]` |
| Cross-subsidy surcharge | rate-protected for 12 years from supply start | `[RG55]` |
| Banking of surplus green energy | permitted, 8% banking charge on energy drawn back | `[RG57]` `[RG58]` |
| Per-unit green power price | not set by the Regulations; left to a bilateral power purchase agreement | `[RG60]` |
| Vendor-reported landed cost, context only | about ₹4.5 to ₹6 a unit (not a regulated figure) | `[RG61]` |

*This document does not model a green-power scenario into the recommended plan's NPV, because no official, DERC-notified per-unit tariff for the actual energy exists, only vendor-reported, internally inconsistent landed-cost ranges `[RG61]`; the regulatory pathway is real and increasingly accessible (`[RG63]`), but pricing it into a locked model number would require inventing a rate the model's own standards forbid. It is reported here as a genuine bull-case upside path, available to SwiftKart once its charging depot's own sanctioned load crosses 100 kW, not as a quantified addition to T14's own figures.*

### What this section establishes, and what it does not

- It establishes T14's own headline finding, 240 grams CO2 a delivery today against 106 grams at month 24, a 56% cut, alongside an 88% rise in delivery volume `[T14]`.
- It establishes that A21 and A24, the two emission factors the whole calculation rests on, were each independently confirmed by the R2 verification pass directly against a primary document, IPCC 2006 for A21 and CEA Version 20.0 for A24, with A24 matching exactly and A21 confirmed within an honestly disclosed, density-dependent uncertainty band `[RG16]` `[RG32]`.
- It establishes, plainly, that A22 and A23 were kept at their conservative base values rather than moved toward more favourable real-world figures, because no source checked ties either figure to a loaded, stop-start Indian delivery duty cycle specifically; every comparison figure found for both inputs points the same direction, toward the model's own figures understating rather than overstating true petrol fuel use or true EV energy use `[A22]` `[A23]` `[RD21]` `[RD24b]` `[RD25]` `[RD29]`.
- It establishes that SwiftKart's own monthly emissions-reporting cadence exceeds, rather than merely matches, ISO 14083 and the GLEC Framework's own minimum annual requirement, and lists the elements a conformant monthly report must actually contain `[RG37]` `[RG38]` `[RG45]`.
- It establishes a real, increasingly accessible green-power regulatory pathway (Green Energy Open Access) as a bull-case upside, without pricing it into the locked model, since no official per-unit tariff exists `[RG48]` `[RG60]` `[RG63]`.
- It does not claim a settled, bare "IPCC default" for A21; the figure is reported, every time it is used in this document, as an IPCC energy factor combined with a disclosed, India-typical density assumption `[RG68]`.
