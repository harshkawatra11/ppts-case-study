## 13. Six options, one scorecard: how the alternatives are built and scored

**Answer.** The brief itself lists the menu, "buying EVs, leasing EVs, retaining petrol vehicles, phased electrification, expansion, or a combination of strategies" `[C T04]`, and this section turns that menu into six mutually exclusive, collectively exhaustive (MECE) options, numbered option 1 to option 6, plus one fallback branch, the no-award branch, using two decisions: what SwiftKart does with its existing 100 petrol bikes, and whether and how it pursues the contract `[T4]`. Every option is scored on the same five-criterion, weighted formula, Score = 0.35 Value + 0.20 Liquidity + 0.20 Resilience + 0.15 Emissions + 0.10 Growth, with every band a rule stated in advance, not a judgement made after the fact `[T6]`. Option 6, leasing both fleets and electrifying first, scores 5.00 out of 5, the maximum possible on every one of the five criteria, while option 1, staying petrol, scores 1.95 `[T6]`. The rest of this section shows exactly how those numbers are built, so a judge can recompute any option's score from the same model tables without taking the ranking on faith.

### 13.1 The MECE filter: two decisions produce six options, not nine

A list of named strategies, buy, lease, retain petrol, phase, expand, combine, is not yet a MECE set of options, because several of the words describe the same underlying choice from different angles, and "combination" by itself is not one option but an entire family of them. The model resolves this by reducing the brief's six verbs to two independent decisions that, taken together, are both mutually exclusive (no bike and no rupee can sit in two cells of the matrix at once) and collectively exhaustive (every verb in the brief's list maps into one of the two decisions) `[C T04]` `[T4]`.

**Decision 1, the existing fleet.** SwiftKart's 100 petrol bikes can be left as they are, converted to bought EVs, or converted to leased EVs. These three states are mutually exclusive for any single bike at any single month: a bike is petrol, bought-electric or leased-electric, never two of these at once, though the fleet as a whole can hold a mix across waves as the conversion rolls out `[C D01]` `[C D10 to C D14]`.

**Decision 2, the contract.** SwiftKart can decline to pursue the contract, pursue it and staff the new 75 vehicles with bought EVs, or pursue it and staff them with leased EVs. Buying the contract fleet with petrol bikes is not treated as a fourth sub-option here, because the contract itself asks for "a significant proportion of deliveries to be made using low-emission vehicles" `[C O04]`, which a new petrol fleet does not satisfy from day one, so a petrol-fuelled contract bid is excluded from the matrix as a non-starter against the client's own stated requirement, not merely an unexplored possibility `[C O04]`.

**T13.1. The full decision matrix, two axes, nine cells**

| Existing fleet \ Contract | Decline the contract | Win it, staff with bought EVs | Win it, staff with leased EVs |
|---|---|---|---|
| Stay petrol | option 1 | option 3 | option 5 |
| Buy EVs | option 2 | option 4 | not built (mixed, see 13.3) |
| Lease EVs | the no-award branch | not built (mixed, see 13.3) | option 6 |

*Seven of the matrix's nine cells are built into named options or the fallback branch; the remaining two, shaded in the source model as "not built", are the mixed cells where the existing fleet and the contract fleet would use different vehicle-acquisition methods. Section 13.3 explains why these two are excluded rather than silently dropped `[T4]`.*

This two-by-three matrix already satisfies collective exhaustiveness for the "existing fleet" axis and leaves one further decision inside the "win it" column: a contract can be won and staffed with bought EVs (giving option 4 when the existing fleet is also bought, or a mixed cell otherwise) or with leased EVs (giving option 6 when the existing fleet is also leased, or a mixed cell otherwise). Two further cells, buy for the contract while keeping petrol on the existing fleet, and lease for the contract while keeping petrol on the existing fleet, are genuinely useful, non-mixed options, because they hold the existing-fleet decision at "stay petrol" and only vary the contract-fleet method; these become option 3 and option 5 respectively, and they sit inside the matrix's middle column logic once the "decline" column is read as "stay petrol, no contract" and the matrix is read as a three-by-three on the contract axis alone (decline, buy-for-contract, lease-for-contract) crossed with the existing-fleet axis (stay petrol, buy, lease), filtered down to the seven non-dominated, non-mixed cells the model actually runs, the six named options plus the no-award branch `[T4]`.

**T13.2. Every verb in the brief's own alternatives list, mapped to where it lives**

| Brief's word `[C T04]` | Where it appears | Option(s) |
|---|---|---|
| Buying EVs | existing-fleet axis, "Buy", and contract-fleet axis, "bought" | options 2, 3, 4 |
| Leasing EVs | existing-fleet axis, "Lease", and contract-fleet axis, "leased" | options 5, 6, the no-award branch |
| Retaining petrol vehicles | existing-fleet axis, "Stay petrol" | option 1, and the "keep petrol" half of options 3 and 5 |
| Phased electrification | the wave and tranche structure inside every electrifying option, never a one-shot conversion | options 2 to 6 all phase, detailed in 13.2 below |
| Expansion | the contract axis, "win it" | options 3, 4, 5, 6 |
| A combination of strategies | any option that both electrifies and expands at once | options 3, 4, 5, 6, with option 6 combining the most (lease both, electrify first) |

*Every one of the brief's six words resolves into at least one option, and no option requires inventing a strategy outside the brief's own list, which is the test this document uses for "collectively exhaustive" `[C T04]` `[T4]`.*

### 13.2 The six options and the fallback branch, named in full

**T13.3. The options, as modelled, reproducing T4 in full with the option numbers this document uses throughout**

| Option | Contract pursued | Existing fleet | Contract fleet | NPV 48m `[T5]` |
|---|---|---|---|---|
| Option 1, stay petrol, no contract | No | petrol, unchanged | none | ₹1.45 crore |
| Option 2, buy 100 EVs, no contract | No | bought in month 2 | none | ₹2.94 crore |
| Option 3, buy EVs for the contract, keep petrol | Yes | petrol, unchanged | bought in months 4, 6, 8 | ₹3.36 crore |
| Option 4, buy EVs for both | Yes | bought in waves (months 2, 4, 12) | bought in months 4, 6, 8 | ₹4.66 crore |
| Option 5, lease EVs for the contract, keep petrol | Yes | petrol, unchanged | leased in months 4, 6, 8 | ₹3.80 crore |
| Option 6, lease EVs for both, electrify first | Yes | leased in waves (months 2, 4, 12) | leased in months 4, 6, 8 | ₹5.76 crore |
| The no-award branch, lease the existing fleet, contract not won | No | leased in waves (months 2, 4, 12) | none | ₹3.34 crore |

*The option numbers (1 to 6) are this document's own numbering, fixed for every section that follows; the model's internal IDs, O0 to O6, map one-to-one onto them in the order shown, and the no-award branch is never called "option 7", because it is a contingency inside option 6's own plan, not a seventh strategic choice management picks on day one `[T4]` `[T5]`.*

Phased electrification, the brief's own fourth word `[C T04]`, is not confined to one option: every electrifying option (2 to 6) converts the fleet in waves rather than in one month, because the case itself says a 100-EV fleet needs a one-time ₹10 lakh charging investment and flags charging downtime and battery wear as live risks `[C X01]` `[C X03]` `[C X04]`, both of which are easier to manage against a phased rollout than a single-month conversion of the whole fleet. The existing fleet's own three-wave schedule, 50 bikes in month 2, 40 in month 4, the last 10 in month 12, is identical in option 5 and option 6 and differs from option 2's single month-2 conversion only because options 5 and 6 also carry 4 spare vehicles that option 2 does not need at the same scale, reflecting the slightly higher availability bar the contract-adjacent options are built to `[T4]` `[T7]`. The contract fleet, where pursued, is always added in three tranches across months 4, 6 and 8, never all 75 vehicles at once, because the contract itself allows up to 12 months to scale and asks for 95% fulfilment throughout, which a staged build supports better than a single large delivery `[C O02]` `[C O03]` `[C O06]`.

### 13.3 Why a seventh, mixed option was not built

The three unbuilt cells in T13.1, buy the existing fleet while leasing the contract fleet, lease the existing fleet while buying the contract fleet, and stay petrol while winning the contract with either acquisition method, are not oversights. The petrol-and-contract cells are excluded because, as section 13.1 states, a new petrol contract fleet fails the client's own low-emission requirement outright `[C O04]`. The two cross-financed cells, buy one fleet and lease the other, are excluded on a dominance argument rather than an unexamined assumption: section 9's annuity arithmetic shows a bought EV costs ₹5,684 a month all-in against ₹3,500 for a leased EV at the case's own rates `[M]` `[T3]`, and section 10's switch-point analysis shows leasing stays cheaper up to a fleet-level rate of ₹5,153 a month, 47% above the case figure `[M]` `[T13]`. Because this cost relationship holds identically whether the vehicles in question belong to the existing fleet or the contract fleet, since the model applies the same per-vehicle annuity and lease formulas to both, there is no modelled scenario in which leasing one fleet and buying the other would beat leasing both fleets on cash, debt or NPV; a mixed option would sit strictly between option 4 (buy both) and option 6 (lease both) on every metric, never above either. Building and scoring a seventh option that is mathematically guaranteed to be dominated on every one of the scorecard's five criteria would not change the ranking and would not surface a genuinely new trade-off, so the model excludes it and this document states the exclusion plainly rather than letting a reader wonder why only six of nine matrix cells appear `[M]` `[T13]`.

This is a judgement call, flagged honestly rather than hidden: a reader who wants to see the cross-financed cells modelled explicitly can reconstruct them from T3's per-vehicle annuity figures and T5's per-fleet summaries, since the arithmetic is additive across the two fleets and does not require a new model run, only a different combination of the existing building blocks `[T3]` `[T5]`.

### 13.4 The scorecard: five criteria, one formula, every band stated in advance

The weighted-scorecard framework scores every option on five criteria, each on a 1-to-5 scale set by a fixed rule applied uniformly across all six options, then combines the five scores with fixed weights into one number out of 5 `[T6]`. The formula itself is:

Score = 0.35 × Value + 0.20 × Liquidity + 0.20 × Resilience + 0.15 × Emissions + 0.10 × Growth `[T6]`.

Value carries the largest weight because the brief's own task statement asks for "financial reasoning" to carry the most weight in judging the strength of a recommendation `[C T06]`; liquidity and resilience are weighted equally because a plan that is financially strong on paper but fails on cash or on exposure to the case's own named uncertainties is not "financially viable" as the brief requires `[C I06]`; emissions carries a real but smaller weight, consistent with sustainability being one of six judging criteria, not the only one `[C I08]`; growth carries the smallest weight because winning the contract is the client's decision, not SwiftKart's alone, so rewarding it too heavily would bias the scorecard toward an outcome the company cannot fully control `[C O01]`.

**T13.4. Value band: the NPV gain over staying petrol, scaled to the best option's own gain**

| Band | Rule | Options that land here |
|---|---|---|
| 5 | NPV gain over option 1 is at least 80% of the best option's own gain | option 6 (gain ₹4.31 crore, the best, so 100% of itself) |
| 4 | NPV gain is 60% to under 80% of the best gain | option 4 (gain ₹3.21 crore, 74% of ₹4.31 crore) |
| 3 | NPV gain is 40% to under 60% of the best gain | option 3 (gain ₹1.90 crore, 44%), option 5 (gain ₹2.35 crore, 55%) |
| 2 | NPV gain is 20% to under 40% of the best gain | option 2 (gain ₹1.48 crore, 34%) |
| 1 | NPV gain is under 20% of the best gain | option 1 itself (gain ₹0, 0% by definition) |

*The rule itself, cuts at 20%, 40%, 60% and 80% of the best option's own NPV gain over option 1, is fixed before any option is scored, which is what makes this a scorecard rule rather than a discretionary ranking `[T6]`.*

**T13.5. Liquidity band: debt drawn and the lowest cash point over 24 months**

| Band | Rule |
|---|---|
| 5 | No debt drawn, and the lowest cash point stays at or above ₹50 lakh |
| 4 | No debt drawn, but the lowest cash point falls below ₹50 lakh |
| 3 | Debt drawn, but no more than ₹50 lakh |
| 2 | Debt drawn, more than ₹50 lakh but no more than ₹1 crore |
| 1 | Debt drawn above ₹1 crore |

*Band 5 needs both conditions, zero debt and a comfortable cash floor, together; an option with zero debt but a cash point that dips below ₹50 lakh earns only band 4, which is exactly option 2's position, no debt but a lowest-cash point of ₹21.5 lakh `[T5]` `[T6]`.*

**T13.6. Resilience band: exposure to the seven case uncertainties, as a share of the option's own base-case NPV**

| Band | Rule (value at risk, exposure divided by base NPV in lakh) |
|---|---|
| 5 | 40% or less |
| 4 | 41% to 60% |
| 3 | 61% to 80% |
| 2 | 81% to 100% |
| 1 | over 100% |

*"Exposure" is the sum, across all seven of the case's own named uncertainties `[C U01 to C U07]`, of every uncertainty's downside move in that option's NPV, never netted against an uncertainty's upside move; this is the same exposure figure T12's heat map publishes for each option, and section 16 reproduces the full heat map `[T12]`. Dividing by the option's own base-case NPV, rather than a common denominator across options, means the rule asks "how much of this option's own value is at risk", not "how much value is at risk in absolute terms", which is why option 1, the smallest option in absolute NPV, still earns a low resilience band despite the smallest absolute exposure figure in the table `[T12]` `[T6]`.*

**T13.7. Emissions band: grams of CO2 a delivery at month 24**

| Band | Rule (grams CO2 per delivery, month 24) |
|---|---|
| 5 | 120 grams or less |
| 4 | 121 to 160 grams |
| 3 | 161 to 200 grams |
| 2 | 201 to 240 grams |
| 1 | over 240 grams |

*This band runs in the opposite direction to a plain "higher is better" read: a lower gram figure is better, so the rule's cut points award band 5 to the cleanest options and band 1 only to a figure above the case's own starting point, 240 grams today `[T14]` `[M]`. Growth is not banded on a sliding scale at all; it is binary, band 5 if the option pursues the contract, band 1 if it does not, because growth here means scale of operation, which either happens or does not, rather than a matter of degree `[T6]`.*

**T13.8. The scorecard, all six options, reproducing T6 in full**

| Option | Value | Liquidity | Resilience | Emissions | Growth | Value at risk | Score |
|---|---|---|---|---|---|---|---|
| Option 1, stay petrol | 1 | 5 | 1 | 2 | 1 | 130% | 1.95 |
| Option 2, buy, no contract | 2 | 4 | 4 | 5 | 1 | 42% | 3.15 |
| Option 3, buy for contract, keep petrol | 3 | 3 | 2 | 3 | 5 | 91% | 3.00 |
| Option 4, buy both | 4 | 1 | 4 | 5 | 5 | 52% | 3.65 |
| Option 5, lease for contract, keep petrol | 3 | 5 | 3 | 3 | 5 | 76% | 3.60 |
| Option 6, lease both | 5 | 5 | 5 | 5 | 5 | 35% | 5.00 |

*Reproduced from the model's own T6 output in full `[T6]`. The no-award branch is not scored on this table, because it is a contingency inside option 6's plan rather than a standalone choice management selects on day one; its own NPV, ₹3.34 crore, sits inside the model's T5 and T10 tables and is discussed on its own terms in section 16 `[T5]` `[T10]`.*

### 13.5 Worked example: option 6's score, built from the rule, not asserted

Option 6's own five band scores, each traceable to a single modelled figure: Value band 5, because its NPV gain over option 1, ₹4.31 crore, is the single largest gain of any option and so is, by definition, 100% of the best gain `[T5]` `[T6]`. Liquidity band 5, because it draws zero debt and its lowest cash point, ₹1.02 crore (reported as ₹101.6 lakh in T5, the same figure), clears the ₹50 lakh floor by a wide margin `[T5]` `[T6]`. Resilience band 5, because its exposure to the seven uncertainties, ₹203.6 lakh, is 35% of its own ₹576 lakh NPV, inside the 40% cut `[T12]` `[T6]`. Emissions band 5, because its month-24 figure, 106 grams a delivery, is well inside the 120-gram cut `[T14]` `[T6]`. Growth band 5, because it pursues and wins the contract `[T4]` `[T6]`. Every one of the five criteria lands at the maximum band, so the weighted score is 0.35×5 + 0.20×5 + 0.20×5 + 0.15×5 + 0.10×5, which is 5 multiplied by the sum of the weights, and the five weights sum to exactly 1.00, giving a score of 5.00, the maximum the formula can produce `[T6]` `[M]`.

Option 1 provides the opposite check. Its Value band is 1 by definition, since its own NPV gain over itself is zero. Its Liquidity band is 5, the one criterion where staying petrol looks strongest, because it draws no debt and never comes close to a cash shortfall, its lowest cash point, ₹103.5 lakh, is in fact the single highest lowest-cash figure of any option in the table, since an option that invests nothing also risks nothing on the downside `[T5]` `[T6]`. Its Resilience band is 1, because its exposure, ₹189.5 lakh, is 130% of its own small NPV, ₹145 lakh, over the 100% cut `[T12]` `[T6]`. Its Emissions band is 2, because 240 grams a delivery is the case's own unimproved starting figure `[T14]` `[T6]`. Its Growth band is 1, because it does not pursue the contract. The weighted sum is 0.35×1 + 0.20×5 + 0.20×1 + 0.15×2 + 0.10×1, which equals 0.35 + 1.00 + 0.20 + 0.30 + 0.10, or 1.95, matching T6's own published figure exactly `[T6]` `[M]`. The two worked examples show the scorecard is mechanical: anyone with T5, T12 and T14's own figures and the five band tables above can reproduce every score in T13.8 without needing the model's source code, which is the point of stating every rule in advance rather than ranking options by impression.

### What this section establishes, and what it does not

- The brief's six-word alternatives list `[C T04]` reduces to two independent decisions, the existing fleet's vehicle type and whether and how the contract is pursued, which together generate six built options plus one fallback branch, covering every word in the brief's list without inventing a strategy outside it `[T4]`.
- Three cells of the full nine-cell matrix are deliberately not built, because they are either excluded by the contract's own low-emission requirement or are mathematically dominated by an already-built option on every one of the scorecard's five criteria; this is stated as a judgement call, not hidden as an oversight.
- The scorecard's formula and every one of its five bands are fixed before any option is scored, and this section reproduces each band's exact cut points so a reader can recompute any option's score independently.
- Option 6 scores the maximum possible, 5.00, because it is the only option that lands in the top band on all five criteria at once; option 1 scores the lowest primary-option figure, 1.95, because it only lands in the top band on liquidity, the one criterion where investing nothing cannot fail.
- This section does not yet walk through each option's own cash, debt, run-rate, emissions and risk profile in narrative form; sections 14 to 16 take each option in turn, using the symmetric template, and build the qualitative case behind the numbers this section has already fixed.
- This section does not revisit the recommendation itself; option 6's status as the recommended plan is established in section 2 and is treated here only as the option whose scorecard arithmetic is shown in full, for verification, not as a fresh argument for choosing it.

Exhibit for the deck: S3 (Strategic Alternatives), the options table and score bars panel, and the formula callout box.

## 14. Options 1 and 2: staying petrol keeps ₹42.2 L a year, and buying 100 EVs spends ₹90 L of the crore on one job

**Answer.** Option 1, staying petrol and declining the contract, keeps SwiftKart's contribution flat at ₹42.2 lakh a year through month 24 and scores the lowest of the six options, 1.95 out of 5, because doing nothing protects cash while leaving value, resilience and emissions all unimproved `[T5]` `[T6]`. Option 2, buying 100 EVs for the existing fleet and still declining the contract, nearly doubles run-rate contribution to ₹114.2 lakh a year and cuts emissions by more than half, but it spends ₹90 lakh of the ₹1 crore net of petrol-sale proceeds on vehicles alone, leaves nothing for the contract's own working capital, and forgoes ₹2.35 crore of the recommended plan's NPV `[M]` `[T5]` `[T9]`. Both options share one structural weakness this section states plainly: neither touches the contract, which section 2 and section 16 show is half of the value on the table `[C O01]` `[T5]`.

### 14.1 Option 1: what it is

Option 1 is the do-nothing baseline against which every other option's NPV gain is measured in the scorecard's own Value band `[T6]`. SwiftKart keeps its 100 petrol two-wheelers exactly as they run today, 30 deliveries a bike a day, 26 working days a month, 85% utilisation, earning ₹26,520 revenue and ₹3,520 contribution a bike-month `[C D02 to C D04]` `[C D08]` `[T2]`. No capital is deployed, no debt is drawn, and the contract opportunity is not pursued `[T4]`. The ₹1 crore available for deployment `[C B07]` sits unused in this option, which is itself the clearest illustration of what "doing nothing" costs: the brief frames the capital as something management "must decide how" to deploy to "create the greatest value" `[C B08]`, and leaving it undeployed is, on the model's own terms, the single worst answer to that instruction of the six considered.

### 14.2 Option 1: cash and debt

With no capital deployed and no debt drawn, option 1's cash position is the simplest of the six: the business generates ₹3.5 lakh of contribution a month at today's volumes and that contribution simply accumulates `[T7]` `[M]`. Its lowest cash point over the 24-month horizon, ₹103.5 lakh, is in fact the single highest lowest-cash figure across all six options, because every other option spends some part of the crore `[T5]`. This is the one criterion, Liquidity, where option 1 earns the scorecard's top band, 5, alongside option 6 `[T6]`. The absence of debt is not a point in option 1's favour relative to the other zero-debt options, however, since options 2, 5 and 6 all also draw zero bank debt `[T5]`; what distinguishes option 1 is that it alone deploys none of the ₹1 crore at all, rather than deploying it without borrowing.

**T14.1. Option 1, cash position summary against the other zero-debt options**

| Measure | Option 1 | Option 2 | Option 5 | Option 6 |
|---|---|---|---|---|
| Debt drawn, ₹ lakh `[T5]` | 0.0 | 0.0 | 0.0 | 0.0 |
| Lowest cash point, ₹ lakh `[T5]` | 103.5 | 21.5 | 67.9 | 101.6 |
| Capital deployed, 24 months, ₹ lakh `[T5]` | 0.0 | 110.0 | 0.0 | 0.0 |
| Cash at month 24, ₹ crore `[T5]` | 1.84 | 2.31 | 2.54 | 3.74 |

*Option 1's own cash at month 24, ₹1.84 crore, is lower than every other zero-debt option's despite deploying no capital, because it alone fails to generate the contribution uplift leasing or buying would add; cash accumulates slowly when contribution itself stays at ₹42.2 lakh a year rather than growing `[T5]` `[T7]`.*

### 14.3 Option 1: value over 48 months

Option 1's 48-month NPV at the case's own 11% discount rate `[C X08]` `[A14]` is ₹1.45 crore, the lowest of the six options and the baseline every other option's "NPV gain over option 1" figure is measured against in the scorecard's Value band `[T5]` `[T6]`. The gap to the recommended plan, option 6, is ₹4.31 crore `[T5]`, which this document's section 2 states as the headline NPV gain of the recommendation over doing nothing `[C]` `[M]`. Because option 1 deploys no capital, its entire NPV comes from 48 months of unchanging contribution discounted back to the present, with no capex, no debt service and no financing cost of any kind entering the calculation, which is also why it is the simplest of the six options to audit: there is only one moving part, the discounted contribution stream itself.

### 14.4 Option 1: run-rate and margin

Run-rate contribution at month 24 is ₹42.2 lakh a year, identical to today's figure, because nothing in this option changes volume, price, rider pay or vehicle cost over the horizon `[T5]` `[T2]`. Margin on revenue stays at 13.3%, the same figure T2 shows for a petrol bike at 85% utilisation, since the brief gives SwiftKart no separate overhead line to subtract and therefore nothing for this option to erode `[T2]` `[C D08]`. The option's contribution never grows, not because the business deteriorates, but because option 1 is, by construction, the one option in which SwiftKart neither improves its unit economics (by converting to EV) nor grows its scale (by winning the contract); it is a pure continuation of the status quo described in section 3 of this document, carried forward 24 months unchanged.

### 14.5 Option 1: emissions and the contract test

Emissions stay at 240 grams of CO2 a delivery at month 24, the case's own unimproved starting figure, because no vehicle in the fleet is electrified `[T14]`. This earns option 1 an Emissions band of 2 out of 5, not the lowest band, because 240 grams is the baseline the other options are measured against falling below, not a figure the rule treats as a floor of zero `[T6]` `[T13.7 of section 13]`. On the contract test specifically, option 1 fails outright, not on a technicality but by design: it does not pursue the contract, so it cannot satisfy the contract's own 95% fulfilment, low-emission share, or monthly emissions-reporting requirements, because none of those requirements apply to a contract SwiftKart never bids for `[C O02 to O05]`.

### 14.6 Option 1: exposure to the seven uncertainties

Option 1's absolute exposure to the case's seven named uncertainties `[C U01 to C U07]`, summed across every uncertainty's downside move in NPV, is ₹189.5 lakh, the third-lowest absolute figure of the six options `[T12]`. But because option 1's own NPV, ₹145 lakh, is also the smallest of the six, that exposure is 130% of its own base-case value, the single worst value-at-risk ratio in the table and the reason option 1 earns the lowest possible Resilience band, 1 out of 5 `[T12]` `[T6]`. Two uncertainties account for almost all of this exposure: a 20% petrol price rise from month 7 costs option 1 ₹59.9 lakh of NPV, the full exposure any option still running petrol bikes carries, and a 10% fall in delivery demand costs it ₹103.6 lakh, identical to option 2's demand exposure because both options' NPV depends only on the existing fleet's own volume, with no contract volume to partly offset the swing `[T12]`. A third uncertainty, clients shifting volume toward lower-emission partners, costs option 1 ₹26.0 lakh, the only uncertainty in the list that moves every petrol-running option's NPV down and every EV-running option's NPV up by the identical ₹26.0 lakh, since it is modelled as a direct volume shift triggered by vehicle type rather than by cost `[T12]`.

**T14.2. Option 1's exposure to the seven uncertainties, in full**

| Uncertainty `[C U01 to C U07]` | Change in NPV, ₹ lakh `[T12]` |
|---|---|
| Petrol up 20% from month 7 | −59.9 |
| EV prices fall 15% | 0.0 |
| Delivery demand down 10% | −103.6 |
| Electricity up 25% | 0.0 |
| Charging downtime doubles | 0.0 |
| EV subsidy withdrawn | 0.0 |
| Clients shift volume by emissions | −26.0 |
| **Total exposure (sum of losses)** | **189.5** |

*Option 1 is the only option in the table unaffected by three of the seven uncertainties, EV prices, electricity and charging downtime, simply because it holds no EVs and no charging infrastructure to be exposed through; its exposure is concentrated entirely in the two uncertainties that touch a petrol-running fleet, plus the client-preference shift `[T12]`.*

### 14.7 Option 1: what would make it right

Option 1 would be the correct choice only under a narrow combination of conditions that the research in sections 5 to 8 and 10 of this document finds no evidence for today: if real-world B2B lease quotes in Delhi-NCR sat consistently above the fleet-level switch point of ₹5,153 a month with no lessor offering a lower fixed rate `[M]` `[T13]`, which kill criterion 1 in section 2 explicitly checked and did not find, since the verified Alt Mobility quote of about ₹2,800 a month sits well below both the case figure and the switch point `[RB19]`; or if Delhi's own regulatory clock were materially slower than verified, which lane R-E's direct reading of the primary gazette texts contradicts, since fleet aggregators are barred from inducting any new petrol vehicle after 31 December 2026, well inside this option's own 24-month horizon `[RE37]` `[RE38]`. Absent either condition, option 1 is dominated on value, resilience and emissions by every other option in the set, and its one advantage, the highest lowest-cash point, reflects spending nothing rather than managing risk well.

**T14.5. Option 1's own scorecard bands, reproduced from T6 for quick reference**

| Criterion | Band (out of 5) | Why |
|---|---|---|
| Value | 1 | NPV gain over itself is zero by definition `[T6]` |
| Liquidity | 5 | Zero debt, lowest cash point ₹103.5 lakh, the highest of any option `[T6]` |
| Resilience | 1 | Value at risk, 130%, over the 100% band-1 threshold `[T6]` |
| Emissions | 2 | 240 grams a delivery, the unimproved case baseline `[T6]` |
| Growth | 1 | The contract is not pursued `[T6]` |
| **Score** | **1.95** | 0.35×1 + 0.20×5 + 0.20×1 + 0.15×2 + 0.10×1 `[T6]` `[M]` |

### 14.8 Option 2: what it is

Option 2 buys all 100 EVs for the existing fleet in month 2, replacing the petrol bikes outright, and declines the contract `[T4]`. The acquisition price is ₹1,20,000 a vehicle before the government subsidy of ₹10,000 per purchased EV, which the case itself flags as a sum that "may be available" `[C D10]` `[C X06]`, and the model's base case keeps the subsidy, netting the acquisition to ₹1,10,000 a vehicle `[C X06]` `[T3]`. Across 100 vehicles this is ₹1.10 crore of gross capital commitment before any offsetting cash inflow `[M]`, against the one-time ₹10 lakh charging-infrastructure investment the case requires for a 100-EV fleet `[C X01]`, and against the ₹30,000 a bike SwiftKart can recover by selling the displaced petrol fleet `[C X05]`.

**T14.3. Option 2, uses of capital against the ₹1 crore available**

| Line | ₹ lakh | Tag |
|---|---|---|
| 100 EVs at ₹1,10,000 net of subsidy | 110.0 | `[C D10]` `[C X06]` `[M]` |
| Charging hub for a 100-EV fleet | 10.0 | `[C X01]` |
| Gross capital commitment | 120.0 | sum of the two rows above |
| Less: petrol fleet resale, 100 bikes at ₹30,000 | −30.0 | `[C X05]` |
| **Net draw on the ₹1 crore** | **90.0** | arithmetic; matches T5's own Capex 24m figure of ₹110.0 lakh gross before the resale credit is applied as a separate cash inflow `[T5]` `[M]` |

*The ₹90.0 lakh net figure is this option's single most consequential number for the "one job" framing in this section's own title: of the ₹1 crore available for deployment over 24 months `[C B07]`, option 2 commits ₹90 lakh of it, net of the one offsetting cash inflow the option generates, entirely to the existing fleet's own vehicles, with nothing left over for the contract's working capital, deposits, reporting platform or riders even if the contract were later won `[M]`.*

### 14.9 Option 2: cash and debt

Option 2 draws zero bank debt `[T5]`, because its ₹110 lakh of vehicle capex fits inside the ₹1 crore available once the petrol-fleet resale proceeds are counted as an inflow, even though it leaves little headroom. Its lowest cash point over the 24-month horizon is ₹21.5 lakh, the second-lowest of the six options after option 3, reflecting the month-2 concentration of the entire fleet's capital outlay in a single month rather than spread across waves `[T5]`. Cash recovers steadily thereafter as the EV fleet's higher contribution accumulates, reaching ₹2.31 crore by month 24, the second-highest cash figure among the zero-debt options after option 6 `[T5]`.

### 14.10 Option 2: value over 48 months

Option 2's 48-month NPV is ₹2.94 crore, a gain of ₹1.48 crore over option 1 `[T5]`. This gain comes entirely from the existing fleet's own improved unit economics, since option 2 pursues no growth: the vehicle cost line falls from ₹9,000 a month (petrol) to the bought EV's own ₹5,684 all-in figure once capital, charging and resale are properly annuitised, a saving of ₹3,316 a bike-month, smaller than the ₹5,500 a leased EV saves on the same comparison because the bought EV still carries its own financing cost inside that ₹5,684 figure `[T3]` `[C D06]` `[M]`. Measured against option 6, the recommended plan, option 2's NPV trails by ₹2.82 crore, almost twice its own total value, which is this section's clearest illustration of why electrifying the existing fleet alone, without also pursuing the contract, leaves the larger half of the opportunity on the table `[T5]`.

### 14.11 Option 2: run-rate and margin

Run-rate contribution at month 24 is ₹114.2 lakh a year, 2.7 times option 1's figure, driven entirely by the per-bike contribution improvement from ₹3,520 (petrol) to ₹6,836 (bought EV, all-in) `[T2]` `[T5]`. Margin on revenue rises correspondingly, from 13.3% to 25.8% at the bike level `[T2]`, though this document never claims this margin as net profit, since the brief gives no fixed-overhead figure and the model's contribution concept deliberately stops short of an EBITDA claim `[M]`. Option 2's run-rate is lower than every option that also pursues the contract, options 3 through 6, because it alone leaves the contract's own, larger per-bike contribution untapped.

### 14.12 Option 2: emissions and the contract test

Emissions fall to 114 grams of CO2 a delivery at month 24, a reduction of more than half from the petrol baseline and good enough for the scorecard's top Emissions band, 5 out of 5, tied with the other full-fleet-electrified options `[T14]` `[T6]`. On the contract test, option 2 fails for the same structural reason as option 1: it does not pursue the contract and so cannot be measured against the contract's own fulfilment, low-emission share or monthly reporting requirements `[C O02 to O05]`. Option 2's own emissions improvement is real and verifiable, but it answers only one of the case's two live questions, the fleet's environmental footprint, not the growth opportunity the brief also asks management to weigh `[C O09]` `[C T03]`.

### 14.13 Option 2: exposure to the seven uncertainties

Option 2's exposure is ₹124.4 lakh, the lowest absolute figure of the six options, and against its own ₹294 lakh NPV this is a value-at-risk ratio of 42%, just over the Resilience band's top cut of 40%, earning it band 4 rather than band 5 `[T12]` `[T6]`. Four of the seven uncertainties touch option 2 at all, since it holds EVs and charging infrastructure but no petrol vehicles and no contract exposure: EV prices falling 15% costs it ₹2.4 lakh (a smaller EV-resale credit on the owned fleet), electricity rising 25% costs ₹8.6 lakh, a subsidy withdrawal costs ₹9.8 lakh, and a 10% demand fall costs ₹103.6 lakh, the single largest line and identical in absolute terms to option 1's demand exposure, because neither option carries contract volume to partly absorb a demand shock `[T12]`. Uniquely among the EV-holding options, option 2 gains ₹26.0 lakh of NPV if clients shift volume toward low-emission partners, since it is the only non-contract option that is nonetheless fully electrified, the one upside line in its own exposure table `[T12]`.

**T14.4. Option 2's exposure to the seven uncertainties, in full**

| Uncertainty `[C U01 to C U07]` | Change in NPV, ₹ lakh `[T12]` |
|---|---|
| Petrol up 20% from month 7 | 0.0 |
| EV prices fall 15% | −2.4 |
| Delivery demand down 10% | −103.6 |
| Electricity up 25% | −8.6 |
| Charging downtime doubles | 0.0 |
| EV subsidy withdrawn | −9.8 |
| Clients shift volume by emissions | 26.0 |
| **Total exposure (sum of losses)** | **124.4** |

*Option 2's exposure table shows the mirror image of option 1's: it is immune to the petrol-price uncertainty that hurts option 1, but newly exposed to three EV-specific uncertainties, prices, electricity and the subsidy, that option 1 is immune to, and it is the only option in this pair that benefits from the client-preference shift `[T12]`.*

### 14.14 Option 2: what would make it right

Option 2 would be the stronger choice over option 6 only if the contract opportunity itself were materially less attractive than the case states, for instance if the ₹2.8 crore annual revenue figure `[C O07]` were overstated, or if winning the contract required a materially larger working-capital commitment than the ₹44.5 lakh the model finds `[T9]`, or if SwiftKart's management judged the operational risk of running two fleets at once (existing plus a new 75-vehicle contract fleet, scaling within 12 months `[C O02]` `[C O06]`) to be unacceptable regardless of the financial case. None of these conditions is supported by this document's own research: section 6 confirms large, real e-commerce buyers hold public EV commitments that make the contract's low-emission requirement plausible as stated `[RC]`, and section 11's spares and availability analysis shows the contract's own 95% fulfilment target is achievable with the model's 10-spare, two-lessor operating plan `[A15]`. Where option 2 is genuinely the right fallback is if the contract is bid for and lost: in that case, the no-award branch, which leases rather than buys the existing fleet, dominates option 2 on NPV (₹3.34 crore against ₹2.94 crore) precisely because leasing, not buying, is the cheaper way to electrify the existing fleet at the case's own rates, the central finding of section 9 `[T5]` `[T3]`.

**T14.5a. Option 2's own scorecard bands, reproduced from T6 for quick reference**

| Criterion | Band (out of 5) | Why |
|---|---|---|
| Value | 2 | NPV gain over option 1, ₹1.48 crore, is 34% of the best option's gain `[T6]` |
| Liquidity | 4 | Zero debt, but the lowest cash point, ₹21.5 lakh, is below the ₹50 lakh band-5 cut `[T6]` |
| Resilience | 4 | Value at risk, 42%, just over the 40% band-5 cut, inside the 41% to 60% band `[T6]` |
| Emissions | 5 | 114 grams a delivery, inside the 120-gram band-5 cut `[T6]` |
| Growth | 1 | The contract is not pursued `[T6]` |
| **Score** | **3.15** | 0.35×2 + 0.20×4 + 0.20×4 + 0.15×5 + 0.10×1 `[T6]` `[M]` |

**T14.6. Option 1 against option 2, every headline figure side by side**

| Measure | Option 1 | Option 2 |
|---|---|---|
| NPV 48m, ₹ crore `[T5]` | 1.45 | 2.94 |
| Run-rate M24, ₹ lakh a year `[T5]` | 42.2 | 114.2 |
| Debt, ₹ lakh `[T5]` | 0.0 | 0.0 |
| Lowest cash, ₹ lakh `[T5]` | 103.5 | 21.5 |
| g CO2 per delivery, M24 `[T5]` | 240 | 114 |
| Scorecard score `[T6]` | 1.95 | 3.15 |

**T14.7. What each option captures of the case's two live questions**

| Question the case poses `[C O09]` | Option 1 | Option 2 |
|---|---|---|
| Electrify the existing fleet | No | Yes, by buying |
| Pursue the growth opportunity (the contract) | No | No |
| Verdict | Captures neither of the case's two opportunities | Captures one of two, at the higher of the two financing costs |

### What this section establishes, and what it does not

- Option 1, doing nothing, is dominated on value, resilience and emissions by every other option; its only strength, the highest lowest-cash point, reflects spending nothing rather than managing risk well, and it scores 1.95 out of 5 `[T6]`.
- Option 2, buying 100 EVs for the existing fleet alone, roughly doubles run-rate contribution and halves emissions, but commits ₹90 lakh of the ₹1 crore to one job, vehicles, and forgoes the contract entirely, trailing the recommended plan's NPV by ₹2.82 crore `[T5]` `[M]`.
- Both options share the same structural gap: neither pursues the contract, which sections 2 and 16 establish is half of the total value available to SwiftKart.
- Option 2's own arithmetic independently confirms this document's central lease-versus-buy finding from section 9: even when buying is the only electrification route considered, it still underperforms the leased alternative (option 6) because the bought EV's own annuitised cost, ₹5,684 a month, exceeds the ₹3,500 lease `[T3]`.
- This section does not yet address options 3 and 4, which add the contract fleet on top of a buy-based existing-fleet strategy; section 15 takes these in the same symmetric template.
- This section does not revisit the full scorecard arithmetic, already shown in section 13; it uses the scorecard's published bands only to explain each option's own standing on each criterion.

Exhibit for the deck: S3 (Strategic Alternatives), the options table rows for option 1 and option 2, and the struck-through "obvious answer" callout for option 2's running-cost comparison.

## 15. Options 3 and 4: buying for the contract needs ₹35 L of debt, and buying both needs ₹1.10 crore

**Answer.** Option 3, buying EVs for the contract fleet while keeping the existing fleet on petrol, needs ₹35 lakh of bank debt at the case's 11% rate `[C X08]`, keeps 100 petrol bikes exposed to fuel prices, and scores 3.00 out of 5, held back mainly by a low Resilience band `[M]` `[T6]`. Option 4, buying EVs for both the existing fleet and the contract fleet, the plan a quick first read of the case would most likely propose, needs ₹1.10 crore of bank debt, pushes the lowest cash point to ₹12.4 lakh, and delivers an NPV of ₹4.66 crore, the second-highest of the six options and ₹1.10 crore below option 6 `[M]` `[T5]`. This section states option 4's case fairly, since it is a genuinely strong plan on four of the five scorecard criteria, before showing exactly where its reliance on debt and on owned assets costs it relative to the recommendation `[T6]`.

### 15.1 Option 3: what it is

Option 3 wins the contract and staffs its 75 new vehicles with bought EVs, added in three tranches across months 4, 6 and 8, while leaving the existing 100-bike fleet on petrol, unchanged `[T4]`. This is the case's own "grow first" framing taken literally: pursue the opportunity, defer the electrification decision on the fleet already in service. Each contract-fleet EV costs the same ₹1,10,000 net of subsidy as in option 2 `[C D10]` `[C X06]`, and the contract fleet needs its own share of the ₹10 lakh charging-infrastructure investment, since a contract vehicle cannot deliver without being charged any more than an existing-fleet vehicle can `[C X01]`. Option 3 also carries contract-side spares, sized to the same 95% fulfilment target as every contract-pursuing option `[C O03]` `[A15]`, discussed in full in section 11.

### 15.2 Option 3: cash and debt

Option 3's capital expenditure over 24 months is ₹89.1 lakh, almost entirely the 75-vehicle contract fleet's acquisition cost plus its share of the charging hub `[T5]`. Because the contract's own working capital requirement (receivables on 45- to 57-day terms against a ramping revenue line `[A01]`) arrives in the same window as the vehicle capex, the ₹1 crore available is not enough to cover both without borrowing, and the model draws ₹35 lakh of bank debt at the case's 11% rate over a 3-year tenure `[C X08]` `[M]`. This is the smallest debt draw of the two debt-needing options in this section, but it is still enough to push option 3's lowest cash point down to ₹12.0 lakh, the single lowest cash figure of any of the six options, lower even than option 4's `[T5]`. The reason option 3's cash trough is deeper than option 4's despite needing less total debt is that option 3 has no leased-EV cash-flow cushion on the existing fleet (it still runs petrol, which carries its own ₹9,000-a-month vehicle cost, higher than either a lease or an owned EV `[C D06]`), so less contribution is available in the critical ramp-up months to offset the contract fleet's own capital draw.

**T15.1. Option 3, uses of capital and the debt gap**

| Line | ₹ lakh | Tag |
|---|---|---|
| Contract fleet, 75 EVs at ₹1,10,000 net of subsidy, plus spares | included in capex figure below | `[C D10]` `[C X06]` |
| Contract fleet's share of the charging hub | included in capex figure below | `[C X01]` |
| **Total capital expenditure, 24 months** | **89.1** | `[T5]` |
| Contract working capital (45- to 57-day receivables) | drawn from the same ₹1 crore pool | `[A01]` `[T9]`-equivalent logic applied to this option |
| **Bank debt drawn to close the gap** | **35.0** | `[M]` `[T5]` |
| Rate and term on the debt | 11% a year, 3-year tenure | `[C X08]` |

*The ₹35.0 lakh debt figure is the model's current, post-verification output; an earlier planning-stage estimate of ₹25 lakh is superseded, as flagged at the top of this section `[M]`.*

### 15.3 Option 3: value over 48 months

Option 3's 48-month NPV is ₹3.36 crore, a gain of ₹1.90 crore over option 1 `[T5]`. This is the second-lowest NPV among the four contract-pursuing options (3 through 6), ahead only of the no-award branch's own contingency value, because option 3 captures the contract's own contribution while leaving the existing fleet's own petrol cost line unimproved, the mirror image of option 2's choice to improve the existing fleet while forgoing the contract `[T5]`. Measured against option 6, the gap is ₹2.40 crore, smaller than option 2's own gap to option 6 (₹2.82 crore) but still substantial, confirming that neither "electrify alone" nor "grow alone" captures as much value as doing both, the structural point sections 2 and 16 build the recommendation around `[T5]`.

### 15.4 Option 3: run-rate and margin

Run-rate contribution at month 24 is ₹150.6 lakh a year, the contract's own leverage visible even before the existing fleet is touched `[T5]`. This is higher than option 2's ₹114.2 lakh despite option 3 doing nothing to the existing fleet's own cost line, because the contract fleet's contribution per vehicle at full utilisation is the richest line in the entire model: a contract EV earns ₹13,700 a month at 100% utilisation against a petrol bike's ₹3,520 at 85%, a near-fourfold difference `[T2]`. The existing 100 petrol bikes continue to earn only ₹3,520 a bike-month throughout this option's horizon, meaning roughly 40% of option 3's fleet (100 of 175 vehicles once the contract is fully staffed) still runs at the case's own unimproved petrol economics even at month 24 `[T2]` `[T4]`.

**T15.5. Option 3, run-rate contribution split by fleet, month 24**

| Fleet | Vehicles `[T4]` `[A15]` | Contribution a vehicle-month, ₹ `[T2]` | Annualised contribution, ₹ lakh |
|---|---|---|---|
| Existing fleet, still petrol | 100 | 3,520 | 42.2 |
| Contract fleet, bought EV, near full utilisation | 75 plus spares | approaching 13,700 at full volume | balance of run-rate, roughly 108.4 |
| **Total run-rate, month 24** | 175 plus spares | blended | **150.6** |

*The split shows that almost three-quarters of option 3's own run-rate improvement over option 1 comes from the contract fleet alone, confirming that growth, not the existing fleet's own cost line, is the entire source of option 3's value over doing nothing `[T5]` `[T2]`.*

### 15.5 Option 3: emissions and the contract test

Emissions at month 24 are 173 grams of CO2 a delivery, an improvement over the petrol baseline but well short of the fully electrified options' 106 to 114 grams, because the 100 existing petrol bikes continue to run `[T14]`. This earns option 3 an Emissions band of 3 out of 5, the lowest band among the four contract-pursuing options `[T6]`. On the contract test itself, option 3 passes on the contract fleet's own terms, since every one of the 75 contract vehicles is an EV from month 4 onward, but the client's own stated preference for "logistics partners capable of providing low-emission delivery solutions" `[C B04]` is only half satisfied at the fleet level, since the existing fleet SwiftKart also operates for its other e-commerce and quick-commerce clients remains petrol throughout `[C B01]`. Section 6 of this document's own client-commitments research flags exactly this risk: large e-commerce buyers with public EV targets increasingly ask for supplier-wide emissions data under frameworks like BRSR Core's Scope 3, Category 4 reporting, not only for the specific contract's own dedicated fleet `[RC]`.

### 15.6 Option 3: exposure to the seven uncertainties

Option 3's exposure, ₹304.7 lakh, is the highest absolute figure of all six options, and against its own ₹336 lakh NPV this is a value-at-risk ratio of 91%, the second-worst in the table and the reason it earns a Resilience band of only 2 out of 5 `[T12]` `[T6]`. It is the only option exposed to all seven of the case's named uncertainties at once, since it holds petrol bikes (exposed to fuel prices), EVs (exposed to prices, electricity, the subsidy and charging downtime) and a contract (exposed to demand and the client-preference shift) simultaneously `[T12]`. The single largest line is the 10% demand fall, costing ₹181.6 lakh, nearly double option 1's or option 2's exposure to the same uncertainty, because option 3 has contract volume layered on top of existing-fleet volume, both of which move down together in a demand downturn `[T12]`.

**T15.2. Option 3's exposure to the seven uncertainties, in full**

| Uncertainty `[C U01 to C U07]` | Change in NPV, ₹ lakh `[T12]` |
|---|---|
| Petrol up 20% from month 7 | −59.9 |
| EV prices fall 15% | −1.8 |
| Delivery demand down 10% | −181.6 |
| Electricity up 25% | −5.8 |
| Charging downtime doubles | −21.7 |
| EV subsidy withdrawn | −7.9 |
| Clients shift volume by emissions | −26.0 |
| **Total exposure (sum of losses)** | **304.7** |

*Option 3 is the only option in the entire set that loses NPV on every single one of the seven uncertainties, including the client-preference shift, which every fully electrified option gains from; this is because option 3's existing fleet is still petrol at the moment that shift occurs, so it loses volume on that fleet with no offsetting gain `[T12]`.*

### 15.7 Option 3: what would make it right

Option 3 would be the stronger choice if the case's own window for electrifying the existing fleet were longer than 24 months, or if SwiftKart's own cash position were tighter than the ₹1 crore `[C B07]` the case describes, since option 3 defers the existing fleet's own capital need entirely. Neither condition is supported here: the ₹1 crore is a stated, available figure, not a constraint found to be binding before any option is run `[C B07]`, and Delhi's own regulatory clock, confirmed in section 8, bars new petrol vehicle induction for NCR fleet aggregators after 31 December 2026, well inside this option's horizon, meaning a "defer the existing fleet" strategy also defers into a period when petrol bikes may already need replacing on policy grounds, not only cost grounds `[RE37]` `[RE38]`.

**T15.6. Option 3's own scorecard bands, reproduced from T6 for quick reference**

| Criterion | Band (out of 5) | Why |
|---|---|---|
| Value | 3 | NPV gain over option 1, ₹1.90 crore, is 44% of the best option's gain `[T6]` |
| Liquidity | 3 | Debt drawn is ₹35.0 lakh, at or below the ₹50 lakh band-3 cut `[T6]` |
| Resilience | 2 | Value at risk is 91%, inside the 81% to 100% band `[T6]` |
| Emissions | 3 | 173 grams a delivery sits in the 161 to 200 gram band `[T6]` |
| Growth | 5 | The contract is pursued `[T6]` |
| **Score** | **3.00** | 0.35×3 + 0.20×3 + 0.20×2 + 0.15×3 + 0.10×5 `[T6]` `[M]` |

### 15.8 Option 4: what it is

Option 4 is the obvious answer the case's own task statement most directly invites: pursue the contract and electrify the existing fleet, both by buying `[C T04]` `[C O09]`. It is the only option besides option 6 that both grows and fully electrifies, and it deserves to be stated fairly, not struck down by assumption, because on four of the five scorecard criteria it genuinely performs well: Value band 4, Resilience band 4, Emissions band 5 and Growth band 5 `[T6]`. The existing fleet converts in the same three-wave schedule as option 6 (50 bikes month 2, 40 month 4, the last 10 month 12 `[T4]`), and the contract fleet adds in the same three tranches (months 4, 6, 8 `[T4]`); the two options share an almost identical operating choreography and differ only in how the vehicles themselves are financed, bought outright under option 4, leased under option 6.

### 15.9 Option 4: cash and debt

Option 4's capital expenditure over 24 months is ₹203.5 lakh, by far the largest of any option, because it buys all 185 vehicles both fleets need (100 existing plus 75 contract, plus 10 spares across both) rather than leasing any of them `[T5]` `[A15]`. After netting the ₹30 lakh (approximately, before staging) of petrol-fleet resale proceeds and applying the full ₹1 crore available `[C X05]` `[C B07]`, the shortfall still requires ₹1.10 crore of bank debt at 11% over 3 years `[C X08]` `[M]` `[T5]`, more than the entire capital the case makes available for the whole 24-month programme, meaning option 4 is, in a strict sense, not fundable from the ₹1 crore alone; it requires SwiftKart to take on new borrowing larger than its entire allocated capital pool. This pushes the lowest cash point to ₹12.4 lakh `[T5]`, close to the model's own ₹10 lakh minimum-cash floor (assumption A25) `[T16]`, and in the bear scenario the debt figure rises further still, to ₹1.40 crore, while cash falls to ₹10.3 lakh `[T10]`, a position with very little room for a further shock.

**T15.3. Option 4, capital and debt against option 3, side by side**

| Measure | Option 3 (contract fleet only, buy) | Option 4 (both fleets, buy) |
|---|---|---|
| Vehicles bought | 75 plus contract spares `[T4]` `[A15]` | 185 plus spares, both fleets `[T4]` `[A15]` |
| Capital expenditure, 24 months, ₹ lakh `[T5]` | 89.1 | 203.5 |
| Bank debt drawn, ₹ lakh `[T5]` | 35.0 | 110.0 |
| Lowest cash point, ₹ lakh `[T5]` | 12.0 | 12.4 |
| Debt, bear scenario, ₹ lakh `[T10]` | not separately modelled as a scenario in T10 | 140.0 |

*Option 4's debt figure, ₹110.0 lakh, is larger than option 3's by more than threefold, almost exactly the ratio of vehicles bought (185 against 75 plus spares), confirming the debt scales with the number of vehicles purchased rather than with any fixed cost `[T5]` `[T4]`.*

### 15.10 Option 4: value over 48 months

Option 4's 48-month NPV is ₹4.66 crore, a gain of ₹3.21 crore over option 1, the second-highest gain of any option and the clearest evidence that doing both, growing and electrifying, captures far more value than doing either alone `[T5]`. Against option 6, the gap is ₹1.10 crore, the single comparison this document returns to most often, because it is the clearest test of the lease-versus-buy question at the scale of an entire two-fleet operation, not just one bike `[T5]`. In the bear scenario, option 4's NPV falls to ₹1.35 crore, and in the bull scenario it rises to ₹5.67 crore `[T10]`; option 6's own bear and bull figures, ₹1.50 crore and ₹6.80 crore respectively, beat option 4 in both directions, a finding developed fully in section 19 of this document and restated in section 16 below `[T10]`.

### 15.11 Option 4: run-rate and margin

Run-rate contribution at month 24 is ₹220.7 lakh a year, the highest of any of the six options, higher even than option 6's ₹206.0 lakh `[T5]`. This is the honest reading this document commits to stating plainly, listed in section 2's own honesty points: owning is cheaper to run once paid for, because a bought EV's ongoing running cost, ₹3,000 a month, is lower than a leased EV's all-in rate, ₹3,500 a month, once the purchase is fully amortised and the financing cost has already been paid down `[C D07]` `[C D12]` `[T2]`. Option 4 wins on monthly margin; it loses on 48-month NPV because the debt it carries to get there, and the cash risk that debt creates, cost more in aggregate than the monthly running-cost advantage recovers over the model's own horizon, the trade-off this section's next two subsections quantify directly.

### 15.12 Option 4: emissions and the contract test

Emissions at month 24 are 106 grams of CO2 a delivery, tied with option 6 for the lowest figure of any option and earning the scorecard's top Emissions band, 5 out of 5 `[T14]` `[T6]`. On the contract test, option 4 passes cleanly: both fleets are fully electrified, satisfying the client's low-emission preference across the whole operation, not only the dedicated contract fleet, which is a genuine advantage option 4 holds over option 3 and shares only with option 6 `[C B04]` `[C O04]`.

### 15.13 Option 4: exposure to the seven uncertainties

Option 4's exposure is ₹240.5 lakh, the third-highest absolute figure of the six options, but against its own, much larger ₹466 lakh NPV this is a value-at-risk ratio of 52%, earning it a Resilience band of 4 out of 5, the second-best resilience score in the table after option 6 `[T12]` `[T6]`. The largest single line, as in every contract-pursuing option, is the 10% demand fall, costing ₹181.6 lakh, identical in absolute terms to option 3's exposure to the same uncertainty, because both options carry the same combined fleet volume once fully built out `[T12]`. Where option 4 differs sharply from option 3 is in the petrol-price line: because option 4's existing fleet is also electrified, a 20% petrol price rise costs it only ₹0.8 lakh, against ₹59.9 lakh for an option still running petrol, the single clearest illustration in this table of what electrifying the existing fleet buys in resilience terms, independent of which financing method is used to do it `[T12]`.

**T15.4. Option 4's exposure to the seven uncertainties, in full**

| Uncertainty `[C U01 to C U07]` | Change in NPV, ₹ lakh `[T12]` |
|---|---|
| Petrol up 20% from month 7 | −0.8 |
| EV prices fall 15% | −4.2 |
| Delivery demand down 10% | −181.6 |
| Electricity up 25% | −14.0 |
| Charging downtime doubles | −21.7 |
| EV subsidy withdrawn | −18.2 |
| Clients shift volume by emissions | 26.0 |
| **Total exposure (sum of losses)** | **240.5** |

*Option 4 carries the largest EV-subsidy exposure of any option, ₹18.2 lakh, because it owns the most EVs of any option in the set (185 against option 6's own 175 plus spares, since the exact spare count differs slightly by option), and a subsidy withdrawal raises the cost of every one of them; this is the one line where owning more vehicles is a strict liability relative to leasing the same count `[T12]` `[T4]`.*

### 15.14 Option 4: what would make it right

Option 4's case is genuinely strong and this document states its own honest reading plainly, rather than only the recommendation's case: in a world where SwiftKart's own cost of debt were materially below the case's 11% rate, where the EV subsidy were certain rather than a sum that "may be available" `[C X06]`, or where management placed a higher strategic value on owning its own fleet outright (for instance to avoid any future AS 19 finance-lease reclassification risk on a leased fleet, flagged as a genuine judgement call in section 20 `[RB83]` `[RB84]`), option 4 would close the ₹1.10 crore gap to option 6 and could overtake it. None of these conditions is verified in SwiftKart's favour today: the lowest verified bank rate for a two-wheeler EV loan found in this research, 8.50%, still sits well above a rate that would close the gap on its own, since the gap is driven more by the debt's absolute size, over ₹1 crore, than by its rate `[RB76]`; and the NBFC tier runs as high as 24%, which would widen, not close, the gap if SwiftKart's own borrowing capacity forced it toward that tier `[RB77]`. Where option 4 is unambiguously the right fallback is if a verified, binding B2B lease rate above the fleet-level switch point of ₹5,153 a month were found and held for a full 36-month term; kill criterion 1 tested for exactly this and did not find it `[M]` `[T13]`.

**T15.7. Financing costs that touch the buy options, verified market context against the case's own 11% rate**

| Item | Rate or figure | Tag |
|---|---|---|
| Case-stated bank loan rate, 3-year tenure (used as the model's base case) | 11% a year | `[C X08]` |
| Lowest verified bank rate, non-EV-specific two-wheeler loan | 8.50% a year onward (IDFC First) | `[RB46]` |
| Verified bank-tier range, re-accessed table | 8.50% to 12.40% a year onward | `[RB76]` |
| Verified NBFC-tier range, same table | 12.50% to 24% a year onward | `[RB77]` |
| GST on the EV itself, purchase | 5% (2.5% CGST plus 2.5% SGST, or equivalent IGST) | `[RB56]` `[RB81]` |
| Income tax deduction on EV loan interest (Section 80EEB) | not available to SwiftKart; the qualifying loan-sanction window closed 31 March 2023, before SwiftKart's 2026 decision | `[RB55]` |

*None of the verified bank rates found in this research sits low enough to close option 4's own ₹1.10 crore NPV gap to option 6 on its own, since that gap is driven by the debt's absolute size rather than a rate a few points above or below 11%; the model's own 11% base case is, if anything, close to the better end of the verified bank-tier range, not a pessimistic assumption `[RB76]` `[M]`.*

**T15.8. Option 4 against option 6, bear, base and bull, reproducing T10 for the two options this section and section 16 compare most directly**

| Option | Measure | Bear | Base | Bull |
|---|---|---|---|---|
| Option 4 | NPV, ₹ crore `[T10]` | 1.35 | 4.66 | 5.67 |
| Option 6 | NPV, ₹ crore `[T10]` | 1.50 | 5.76 | 6.80 |
| Option 4 | Debt, ₹ lakh `[T10]` | 140.0 | 110.0 | 65.0 |
| Option 6 | Debt, ₹ lakh `[T10]` | 0.0 | 0.0 | 0.0 |

*Option 6 beats option 4 on NPV in every one of the three scenarios, and does so while drawing zero debt in every one of them, against option 4's debt rising to ₹1.40 crore in the bear case precisely when SwiftKart's borrowing capacity and cash position are both under the most pressure `[T10]`; section 16 and section 19 both return to this table.*

### What this section establishes, and what it does not

- Option 3, buying for the contract while keeping the existing fleet on petrol, needs ₹35 lakh of debt, carries the highest exposure-to-NPV ratio of any option (91%), and loses the contract's own emissions credibility on the half of the operation still running petrol `[M]` `[T6]` `[T12]`.
- Option 4, buying for both fleets, is a genuinely strong plan stated fairly here: it has the highest run-rate contribution and the second-highest NPV of any option, but it needs ₹1.10 crore of debt, larger than the entire ₹1 crore available for deployment, and trails option 6 by ₹1.10 crore of NPV in every scenario tested `[M]` `[T5]` `[T10]`.
- Electrifying the existing fleet, independent of financing method, is what drives the sharp fall in petrol-price exposure between option 3 (₹59.9 lakh exposure to a petrol shock) and option 4 (₹0.8 lakh); this is a finding about electrification itself, not about buying versus leasing.
- This section does not yet compare option 4 against option 6 on every criterion side by side in one table; section 16 builds that comparison in full, using T5, and closes with the document's double-synthesis paragraph on the lease-versus-buy decision at full scale.
- This section does not argue that option 4 is a poor plan; it argues, with the same numbers option 4's own advocates would cite, that it is the second-best plan available, not the best, and states exactly where its own strength (lower running cost once paid for) is outweighed by its own weakness (the debt needed to get there).

Exhibit for the deck: S3 (Strategic Alternatives), the options table rows for option 3 and option 4, and the struck-through "obvious answer" callout for option 4 specifically, since option 4 is the plan the deck's own S3 panel names as the one a quick reading of the case would propose.

## 16. Options 5 and 6: leasing for both fleets is worth ₹5.76 crore over 48 months, ₹1.10 crore more than buying both

**Answer.** Option 5, leasing EVs for the contract fleet while keeping the existing fleet on petrol, delivers an NPV of ₹3.80 crore, ahead of its buy-based equivalent, option 3, by ₹0.44 crore, because the lease's own all-in rate already beats a bought EV's annuitised cost on every vehicle it touches `[M]` `[T5]`. Option 6, leasing EVs for both fleets and electrifying the existing fleet before the contract scales, is the recommended plan: an NPV of ₹5.76 crore over 48 months, the highest of the six options, ₹1.10 crore ahead of option 4 (buy both) and the only option that scores the scorecard's maximum band on all five criteria at once, 5.00 out of 5 `[M]` `[T5]` `[T6]`.

### 16.1 Option 5: what it is

Option 5 wins the contract and staffs its 75 new vehicles with leased EVs, added in the same three tranches as every other contract-pursuing option, months 4, 6 and 8, while leaving the existing 100-bike fleet on petrol `[T4]`. It is the direct leasing counterpart to option 3: the same two decisions, win the contract, defer the existing fleet, but financed through a lease rather than a purchase on the contract fleet alone. Each leased EV costs ₹3,500 a month all-in, already including running cost `[C D12]`, against a bought EV's annuitised ₹5,684 `[T3]`, so option 5's own improvement over option 3 comes entirely from this single per-vehicle cost difference, applied across the 75-vehicle contract fleet plus its spares `[A15]`.

### 16.2 Option 5: cash and debt

Option 5 draws zero bank debt `[T5]`, the first structural advantage leasing confers at the contract-fleet scale: because a lease requires only a security deposit, modelled at 2 months of rent `[A02]` `[T16]`, rather than a full acquisition cost, the ₹1 crore available covers the contract's own working capital and deposits without borrowing. Its lowest cash point over 24 months is ₹67.9 lakh, well above option 3's ₹12.0 lakh for the equivalent buy-based plan and above the model's own ₹10 lakh minimum-cash floor by a wide margin `[T5]` `[T16]`. Cash at month 24 reaches ₹2.54 crore, the third-highest of the six options `[T5]`.

**T16.1. Option 5 against option 3, the leasing-versus-buying comparison at the contract-fleet scale**

| Measure | Option 3 (contract fleet, bought) | Option 5 (contract fleet, leased) |
|---|---|---|
| Debt drawn, ₹ lakh `[T5]` | 35.0 | 0.0 |
| Lowest cash point, ₹ lakh `[T5]` | 12.0 | 67.9 |
| NPV 48m, ₹ crore `[T5]` | 3.36 | 3.80 |
| Run-rate M24, ₹ lakh a year `[T5]` | 150.6 | 143.6 |

*Option 5 beats option 3 on NPV, debt and cash, but trails it slightly on run-rate, ₹143.6 lakh against ₹150.6 lakh, the same honest trade-off section 15 identifies for option 4 against option 6 at full scale: a lease's own monthly rate, ₹3,500, is above a bought EV's bare running cost, ₹3,000, once the purchase is fully paid off, even though the lease wins on every other measure `[T5]` `[C D07]` `[C D12]`.*

### 16.3 Option 5: value over 48 months

Option 5's 48-month NPV is ₹3.80 crore, a gain of ₹2.35 crore over option 1 `[T5]`. Against option 6, the gap is ₹1.96 crore, the largest remaining gap among the four contract-pursuing options once option 4's own ₹1.10 crore gap is set aside, because option 5 still leaves the existing fleet's own ₹66.0 lakh-a-year conversion saving (section 9's insight 5) entirely unrealised `[T5]` `[T15]`-equivalent bridge logic.

### 16.4 Option 5: run-rate and margin

Run-rate contribution at month 24 is ₹143.6 lakh a year `[T5]`, narrowly below option 3's ₹150.6 lakh for the reason given in 16.2 above: a leased EV's all-in monthly rate sits above a bought EV's bare running cost once the bought EV's financing is fully amortised, so on a pure running-cost basis, ignoring the capital that got it there, the owned contract fleet edges ahead at the margin. Margin on the contract fleet's own revenue is not separately broken out from the existing fleet's petrol margin in the model's T2 table, but the underlying per-vehicle contribution figures (₹9,020 leased against ₹6,836 bought, all-in, at 85% utilisation, or ₹13,700 leased against the equivalent bought figure at 100% utilisation) carry through directly into this option's own blended run-rate `[T2]`.

### 16.5 Option 5: emissions and the contract test

Emissions at month 24 are 173 grams of CO2 a delivery, identical to option 3's figure, because emissions depend on which vehicles run, not on how they are financed, and option 5 electrifies the same 75 contract vehicles option 3 does `[T14]`. This earns option 5 an Emissions band of 3 out of 5, tied with option 3 `[T6]`. On the contract test, option 5 passes on the contract fleet's own terms exactly as option 3 does, and fails the same half-measure test on the existing fleet, still petrol, still exposed to the client's own stated preference for low-emission partners across the whole relationship, not only the dedicated contract vehicles `[C B04]`.

### 16.6 Option 5: exposure to the seven uncertainties

Option 5's exposure is ₹288.7 lakh, the second-highest absolute figure of the six options, and against its own ₹380 lakh NPV this is a value-at-risk ratio of 76%, earning a Resilience band of 3 out of 5 `[T12]` `[T6]`. Because the existing fleet is still petrol, option 5 carries the full ₹59.9 lakh petrol-price exposure that any petrol-running option carries, identical to option 1's and option 3's own figure for the same uncertainty `[T12]`. It is immune to the EV-price and electricity uncertainties specifically on the existing fleet (since that fleet holds no EVs), but it does carry the subsidy uncertainty at zero exposure as well, because option 5 leases rather than buys its EVs, and a lease's own rate does not move with the purchase subsidy's status `[T12]`.

**T16.2. Option 5's exposure to the seven uncertainties, in full**

| Uncertainty `[C U01 to C U07]` | Change in NPV, ₹ lakh `[T12]` |
|---|---|
| Petrol up 20% from month 7 | −59.9 |
| EV prices fall 15% | 0.0 |
| Delivery demand down 10% | −181.1 |
| Electricity up 25% | 0.0 |
| Charging downtime doubles | −21.7 |
| EV subsidy withdrawn | 0.0 |
| Clients shift volume by emissions | −26.0 |
| **Total exposure (sum of losses)** | **288.7** |

*Option 5 is immune to three of the seven uncertainties, EV prices, electricity and the subsidy, the same three a leasing-based plan is always immune to, because none of them touches a monthly lease rate that is fixed by contract rather than linked to a purchase, a charging tariff, or a government incentive `[T12]`.*

### 16.7 Option 5: what would make it right

Option 5 would be the stronger choice over option 6 only if SwiftKart's own management judged the existing fleet's petrol operation to be low-risk enough to defer, which the research in sections 8 and 14 of this document does not support, given Delhi's own 31 December 2026 ban on new petrol vehicle induction for NCR fleet aggregators `[RE37]` `[RE38]`, or if the existing fleet's own conversion carried a cost or operational risk this document has not identified. No such additional cost is found: the existing fleet's own conversion, detailed in section 9, is a straightforward application of the same lease terms option 5 already uses for the contract fleet, with no separate infrastructure, contractual or staffing barrier distinct from what option 5 itself must already build `[T3]` `[A02]`.

**T16.7. Option 5's own scorecard bands, reproduced from T6 for quick reference**

| Criterion | Band (out of 5) | Why |
|---|---|---|
| Value | 3 | NPV gain over option 1, ₹2.35 crore, is 55% of the best option's gain `[T6]` |
| Liquidity | 5 | Zero debt and a lowest cash point, ₹67.9 lakh, above the ₹50 lakh band-5 cut `[T6]` |
| Resilience | 3 | Value at risk, 76%, inside the 61% to 80% band `[T6]` |
| Emissions | 3 | 173 grams a delivery sits in the 161 to 200 gram band `[T6]` |
| Growth | 5 | The contract is pursued `[T6]` |
| **Score** | **3.60** | 0.35×3 + 0.20×5 + 0.20×3 + 0.15×3 + 0.10×5 `[T6]` `[M]` |

### 16.8 Option 6: what it is

Option 6 is the recommended plan, developed in full in section 2 of this document: lease every bike, for both the existing fleet and the contract fleet, and electrify the existing fleet first `[C]`. The existing 100 petrol bikes convert in three waves, 50 in month 2, 40 in month 4, the last 10 in month 12, held as a fallback while the contract ramps, with 4 spare EVs `[T4]` `[T7]`. On contract award, modelled at month 3 in the base case `[A08]`, 25 leased EVs are added in each of months 4, 6 and 8, with 2 spares per tranche, and 75 riders are hired `[T4]` `[A15]`. Electrifying before the contract scales is deliberate: the EV operation, its charging routine and its emissions-reporting method are all proven before contract volume arrives, which matters because the contract itself asks for a low-emission share and monthly emissions data from day one, not after a ramp-up period `[C O04]` `[C O05]`.

### 16.9 Option 6: cash and debt

Option 6 draws zero bank debt in every scenario tested, bear, base and bull alike `[T10]`. Its lowest cash point, ₹1.02 crore (₹101.6 lakh), occurs in month 2, the single month in which the first wave of 50 existing-fleet conversions and 4 spares draws capital fastest, before the petrol-fleet resale proceeds and the second wave's own contribution begin offsetting it `[T7]` `[M]`. Cash recovers immediately: by month 3 it has already returned to ₹107.7 lakh, and it climbs without interruption from month 9 onward once the contract fleet is substantially built out, reaching ₹3.74 crore by month 24 `[T7]` `[T8]`.

**T16.3. Option 6, cash position by quarter, reproducing T8 in full**

| Quarter | Revenue, ₹ lakh `[T8]` | Contribution, ₹ lakh `[T8]` | Cash at end, ₹ lakh `[T8]` | Petrol bikes `[T8]` | EVs, existing `[T8]` | EVs, contract `[T8]` | Spares `[T8]` |
|---|---|---|---|---|---|---|---|
| Q1 | 79.6 | 15.6 | 107.7 | 50 | 50 | 0 | 4 |
| Q2 | 103.3 | 25.9 | 102.8 | 10 | 90 | 50 | 8 |
| Q3 | 136.1 | 40.7 | 119.2 | 10 | 90 | 75 | 10 |
| Q4 | 149.8 | 50.4 | 168.2 | 0 | 100 | 75 | 10 |
| Q5 to Q8 | 149.8 each | 51.5 each | rising to 374.2 by Q8 | 0 | 100 | 75 | 10 |

*The fleet composition stabilises at 0 petrol, 100 existing-fleet EVs, 75 contract EVs and 10 spares by Q4, month 12, and holds unchanged through Q8, month 24, consistent with the "no petrol bikes at month 24" check the model itself runs and passes `[T8]` `[T17]`.*

### 16.10 Option 6: value over 48 months

Option 6's 48-month NPV is ₹5.76 crore, a gain of ₹4.31 crore over option 1 and the highest NPV of any of the six options `[T5]`. The gain over the nearest competitor, option 4 (buy both), is ₹1.10 crore, and the gain holds in every scenario tested: ₹0.15 crore ahead of option 4 in the bear case (₹1.50 crore against ₹1.35 crore) and ₹1.13 crore ahead in the bull case (₹6.80 crore against ₹5.67 crore) `[T10]`. This document's section 2.10 honest reading states plainly that leasing wins on value, liquidity and resilience, not on monthly margin, and this section's own T5 comparison below shows exactly where that trade-off sits.

**T16.4. The full options comparison, reproducing T5 in its entirety, all six options and the no-award branch**

| Option | NPV 48m, ₹ crore | vs option 1, ₹ crore | Contribution 24m, ₹ lakh | Run-rate M24, ₹ lakh a year | Cash M24, ₹ crore | Lowest cash, ₹ lakh | Debt, ₹ lakh | Capex 24m, ₹ lakh | g CO2 per delivery, M24 |
|---|---|---|---|---|---|---|---|---|---|
| Option 1, stay petrol | 1.45 | 0.00 | 84.5 | 42.2 | 1.84 | 103.5 | 0.0 | 0.0 | 240 |
| Option 2, buy, no contract | 2.94 | 1.48 | 222.5 | 114.2 | 2.31 | 21.5 | 0.0 | 110.0 | 114 |
| Option 3, buy for contract, keep petrol | 3.36 | 1.90 | 239.8 | 150.6 | 1.89 | 12.0 | 35.0 | 89.1 | 173 |
| Option 4, buy both | 4.66 | 3.21 | 363.6 | 220.7 | 2.32 | 12.4 | 110.0 | 203.5 | 106 |
| Option 5, lease for contract, keep petrol | 3.80 | 2.35 | 228.6 | 143.6 | 2.54 | 67.9 | 0.0 | 0.0 | 173 |
| Option 6, lease both | 5.76 | 4.31 | 338.7 | 206.0 | 3.74 | 101.6 | 0.0 | 0.0 | 106 |
| No-award branch, lease existing, contract not won | 3.34 | 1.88 | 194.5 | 104.7 | 2.97 | 103.5 | 0.0 | 0.0 | 114 |

*This is the single table every other number in sections 14 to 16 is drawn from or checked against `[T5]`. Reading down the NPV column confirms option 6's rank; reading down the debt column confirms that only the two buy-and-grow options, 3 and 4, need any bank debt at all; reading down the contribution column shows option 4's own ₹363.6 lakh is the single highest two-year contribution figure, the basis of its "cheaper to run once paid for" honest advantage stated throughout this document.*

### 16.11 Option 6: run-rate and margin

Run-rate contribution at month 24 is ₹206.0 lakh a year, a 4.9-times increase over option 1's ₹42.2 lakh, the recommended plan's own moneyshot figure, developed in full in section 18 `[T5]` `[T15]`. This run-rate is below option 4's ₹220.7 lakh, the one criterion on which the owned alternative genuinely beats the recommendation, and this document states that honestly rather than hiding it: a bought EV's bare running cost, once paid for, is lower than a leased EV's all-in rate, so owning is cheaper to run at the margin `[T5]` `[C D07]` `[C D12]`. The recommendation's case rests on value over 48 months, liquidity and resilience, not on this one monthly figure, as section 2's own three-reasons table states `[C]`.

### 16.12 Option 6: emissions and the contract test

Emissions at month 24 are 106 grams of CO2 a delivery, tied with option 4 for the lowest figure of any option, a fall of 56% from the petrol baseline of 240 grams `[T14]`. Absolute emissions fall from 190.8 tonnes a year today to 158.9 tonnes a year at month 24, even as deliveries rise from 66,300 to 1,24,800 a month, an 88% increase in volume alongside a fall in absolute emissions, the pairing this document's section 25 impact discussion builds on `[T14]`. On the contract test, option 6 passes without qualification: both fleets are fully electrified, the monthly emissions-reporting capability (built in month 2, per T9's own reporting-and-dispatch line `[T9]`) is proven on the existing fleet before the contract fleet's own volume arrives, and the low-emission share the contract asks for is satisfied across the entire operation, not only the dedicated contract vehicles `[C O04]` `[C O05]`.

### 16.13 Option 6: exposure to the seven uncertainties

Option 6's exposure is ₹203.6 lakh, the second-lowest absolute figure of the six options after option 2, and against its own, much larger ₹576 lakh NPV this is a value-at-risk ratio of 35%, the single best resilience figure in the table, earning the top Resilience band, 5 out of 5 `[T12]` `[T6]`.

**T16.5. The full uncertainty heat map, reproducing T12 in its entirety, all seven uncertainties against all six options**

| Uncertainty `[C U01 to C U07]` | Option 1 | Option 2 | Option 3 | Option 4 | Option 5 | Option 6 |
|---|---|---|---|---|---|---|
| Petrol up 20% from month 7 | −59.9 | 0.0 | −59.9 | −0.8 | −59.9 | −0.8 |
| EV prices fall 15% | 0.0 | −2.4 | −1.8 | −4.2 | 0.0 | 0.0 |
| Delivery demand down 10% | −103.6 | −103.6 | −181.6 | −181.6 | −181.1 | −181.1 |
| Electricity up 25% | 0.0 | −8.6 | −5.8 | −14.0 | 0.0 | 0.0 |
| Charging downtime doubles | 0.0 | 0.0 | −21.7 | −21.7 | −21.7 | −21.7 |
| EV subsidy withdrawn | 0.0 | −9.8 | −7.9 | −18.2 | 0.0 | 0.0 |
| Clients shift volume by emissions | −26.0 | 26.0 | −26.0 | 26.0 | −26.0 | 26.0 |
| **Exposure (sum of losses), ₹ lakh** | **189.5** | **124.4** | **304.7** | **240.5** | **288.7** | **203.6** |

*Reproduced from the model's own T12 output `[T12]`. Reading across the "clients shift volume by emissions" row shows that this is the one uncertainty every fully electrified option, 2, 4 and 6, gains from, and every petrol-exposed option, 1, 3 and 5, loses from; it is the clearest single line in the entire heat map for the proposition that the client-preference trend named in the case's own background `[C B04]` rewards electrification regardless of how the electrification is financed `[T12]`.*

**T16.6. Option 6's own scorecard bands, reproduced from T6 for completeness**

| Criterion | Band (out of 5) | Why |
|---|---|---|
| Value | 5 | NPV gain over option 1, ₹4.31 crore, is the best gain of any option, 100% of itself `[T6]` |
| Liquidity | 5 | Zero debt and a lowest cash point, ₹101.6 lakh, well above the ₹50 lakh band-5 cut `[T6]` |
| Resilience | 5 | Value at risk, 35%, inside the 40% band-5 cut `[T6]` |
| Emissions | 5 | 106 grams a delivery, inside the 120-gram band-5 cut `[T6]` |
| Growth | 5 | The contract is pursued `[T6]` |
| **Score** | **5.00** | The maximum the formula can produce `[T6]` `[M]` |

### 16.14 Option 6: what would make it right

Option 6's case rests on three case-given rates holding roughly as stated, named plainly in section 9: the ₹3,500 lease rate, the 11% cost of capital, and the ₹10,000 subsidy, which the case itself flags as uncertain `[C D12]` `[C X08]` `[C X06]`. None of the three is threatened by verified evidence found in this research: the verified Alt Mobility quote, about ₹2,800 a month, sits below the case figure, not above it `[RB19]`; the verified bank-rate range, 8.50% to 12.40%, brackets the case's own 11% `[RB76]`; and the maximum stackable subsidy found, ₹35,000 to ₹40,000 a vehicle across PM E-DRIVE and Delhi's own policy, is far below the ₹94,521 a vehicle that would be needed for buying to match the lease `[RE03]` `[RE14]` `[RE29]` `[T13]`. The one real vulnerability is the lease rate itself at renewal, month 36: the fleet-level switch point, ₹5,153 a month, is 47% above the case's own ₹3,500, and if a lessor will not hold a rate at or below that figure for a fresh 36-month term, the plan's own real option, buy at renewal only if the lease is repriced above the switch point, becomes the right next move, developed in full in section 20 `[T13]` `[M]`.

**T16.8. The three case-given rates option 6 depends on, each checked against verified evidence**

| Case-given rate | Value | Verified market evidence | Conclusion |
|---|---|---|---|
| EV lease, all-in | ₹3,500 a month `[C D12]` | Alt Mobility, about ₹2,800 a month `[RB19]` | Below the case rate; not a threat |
| Cost of capital | 11% a year `[C X08]` | Verified bank range, 8.50% to 12.40% `[RB76]` | Brackets the case rate; not a threat |
| EV purchase subsidy | up to ₹10,000, may be available `[C X06]` | Maximum stackable incentive found, ₹35,000 to ₹40,000 a vehicle `[RE03]` `[RE14]` `[RE29]` | Far below the ₹94,521 switch point; not a threat |

*None of the three case-given rates this recommendation depends on is contradicted by the verified evidence this research gathered; the one genuine open question, whether a lessor will hold a rate at or below the ₹5,153 switch point for a fresh term at month 36 renewal, is a forward-looking question this research cannot settle today and is treated as a real option, not a certainty, in section 20 `[T13]`.*

Conclusively, the choice between option 4 and option 6, buy both or lease both, is not a choice about which fleet to electrify or whether to pursue the contract: both options answer those two questions identically, electrify everything, win the contract. It is a choice about financing method alone, and on that narrower question the case's own numbers are unambiguous. Option 4 wins on one measure, monthly run-rate once the debt is paid down, ₹220.7 lakh against ₹206.0 lakh a year `[T5]`; option 6 wins on every measure that matters before that debt is paid down, ₹1.10 crore more value over 48 months, ₹1.10 crore less debt (zero against ₹1.10 crore), a cash floor more than eight times higher (₹101.6 lakh against ₹12.4 lakh), and a value-at-risk ratio less than half as large (35% against 52%) `[T5]` `[T6]` `[T12]`. A business with SwiftKart's own stated capital of exactly ₹1 crore `[C B07]` cannot, in fact, fund option 4 without borrowing more than that entire sum, while option 6 funds both fleets, the contract's own working capital, the charging hub, the reporting platform and a reserve, inside the ₹1 crore with no borrowing at all, which is the single fact this section's title states and the rest of this document's financial case, built out in sections 17 through 20, exists to support in full.

### What this section establishes, and what it does not

- Option 5, leasing for the contract fleet alone, beats its buy-based equivalent, option 3, on NPV, debt and cash, trailing only on run-rate, confirming the lease-versus-buy advantage holds at contract-fleet scale, not only for a single bike `[T5]`.
- Option 6, leasing both fleets and electrifying first, is the recommended plan: the highest NPV of any option, zero debt in every scenario, the best resilience and emissions bands, and the maximum possible scorecard score, 5.00 `[T5]` `[T6]` `[T10]`.
- The full T5 comparison and T12 heat map, reproduced in this section, let a reader check every claim in sections 13 to 16 against one source table and one source heat map without needing to re-run the model.
- This section does not argue that option 4 is a weak plan; section 15 and this section both state its genuine strength, the highest run-rate contribution of any option, plainly, and the recommendation's own case rests on 48-month value, liquidity and resilience outweighing that one advantage, not on option 4 having no advantage at all.
- This section does not yet walk through the ₹1 crore's own allocation across uses, the contribution bridge from ₹42.2 lakh to ₹2.06 crore, or the full scenario and sensitivity analysis; sections 17 to 19 build each of these in turn, using the same option 6 figures this section has already fixed.

Exhibit for the deck: S3 (Strategic Alternatives), the full options table, the score bars panel, the struck-through option 4 callout, and the "CONCLUSIVELY" closing card; S6 annexure A3 for the full heat map table.
