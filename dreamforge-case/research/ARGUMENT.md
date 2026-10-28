# SwiftKart: the solved argument

Confirmed through the case-competition-deck skill (generate mode, Steps 1 to 2), per PLAN.md section 2, section 0.4
touchpoints T1 and T2. This file is the final wording writers and the orchestrator take as locked unless a lane
verification trips a kill criterion (section 2.8 of the plan). Numbers in this version are the FINAL post-M1 figures
(model hash effb9a66e6), after two verified assumption updates from the research lanes: contract receivable days
(A01) moved from 45 to 57 days (median of eight verified points from Delhivery and Blue Dart), and the Delhi petrol
price (A20) moved from ₹100 to ₹102 a litre (latest verified rate, two independent sources). The recommendation,
the ranking of all six options and every model check are unchanged by these updates; a few numbers moved by small
amounts, and one, the cash reserve inside the ₹1 crore, moved by a larger amount because more realistic payment
terms tie up more working capital. All three are reported honestly below.

## Case type and calibration

This is a strategy case (case_types/strategy.md: how should X grow, capital allocation across options) with a
finance core (case_types/mna_finance.md: NPV, financing, scenario discipline over a 48-month horizon) and an
operations core (case_types/operations.md: fleet uptime, service level, capacity). The case-competition-deck skill
corpus is three M&A decks from the Global Case Competition at Harvard. Strategy and operations patterns in the
skill are themselves flagged as extrapolated, not corpus-derived (strategy.md own calibration note). We extrapolate
one layer further: the structural and rhetorical patterns transfer with confidence (contrarian recommendation,
action titles, one moneyshot, foreshadowing, symmetric treatment, three scenarios, defensive depth, double
synthesis); the M&A-specific frameworks (trading comparables, football field, EPS accretion) do not apply to a
100-bike delivery fleet and are replaced by NPV over 48 months, lease-versus-buy total cost of ownership, scenario
and sensitivity analysis, real options, and a weighted scorecard, as named in the Frameworks and where section
below. The skill says to produce a .pptx; that mechanical step does not apply here, since the deck is native Figma
Slides per the root CLAUDE.md.

## The obvious answers and why each falls short

| Route | The obvious version | Why it falls short |
|---|---|---|
| Buy EVs for both fleets (option 4) | Do both: buy EVs for the existing fleet, borrow for the contract | Buying the 185 EVs both jobs need (including 10 spares) costs ₹2.04 crore after subsidy, twice the crore. It needs ₹1.10 crore of bank debt at 11%, cash dips to ₹12.4 lakh, and it is worth ₹4.66 crore over 48 months against ₹5.76 crore for leasing both. In the bear case it needs ₹1.40 crore of debt |
| Electrify first by buying (option 2) | Fuel is the problem, so buy 100 EVs | Uses most of the crore net of petrol sales, leaves nothing for the contract working capital, and forgoes the contract: NPV ₹2.94 crore |
| Grow first by buying (option 3) | Take the contract, keep petrol for now | Needs ₹35 lakh of debt, keeps 100 petrol bikes exposed to fuel prices, and fails the low-emission preference clients state in the brief, on the existing fleet: NPV ₹3.36 crore |
| Stay petrol (option 1) | Wait for EV prices to fall | Contribution stays at ₹42.2 lakh a year; petrol resale value falls as Delhi 1 April 2028 electric-only registration rule approaches, and Delhi now bars NCR fleet aggregators from inducting any new petrol vehicle, including two-wheelers, after 31 December 2026; clients move volume away: NPV ₹1.45 crore |
| The running-cost comparison every buy option leans on | A bought EV runs at ₹3,000 a month, cheaper than the ₹3,500 lease | Running cost is not the full cost. A bought EV costs ₹5,684 a month all-in (₹2,843 capital at 11% over 48 months, plus ₹258 charging share, minus ₹417 resale credit, plus ₹3,000 running). The EMI alone on a financed EV, ₹3,601, is above the all-in lease |

## The recommendation and three reasons

Governing thought: do both, lease every bike, and spend the crore on what a lease cannot buy.

Lease every bike. Convert the existing 100 petrol bikes to leased EVs in three waves (50 in month 2, 40 in month 4,
the last 10 in month 12 as a fallback while the contract ramps), with 4 spares. On contract award, add 25 leased EVs
in each of months 4, 6 and 8 with 2 spares per tranche, 75 riders hired. Electrify before the contract so the EV
operation, charging and emissions reporting are proven before contract volume arrives, since the contract itself
asks for a low-emission share and monthly emissions data. Spend the ₹1 crore on: ₹44.5 lakh contract working
capital (up from an earlier estimate of ₹35.1 lakh once the verified 57-day receivable terms, not the original
45-day planning estimate, are used), ₹18.5 lakh charging hub, ₹12.9 lakh lease deposits, ₹13.0 lakh reporting
and pooled dispatch platform, ₹5.2 lakh hiring and training riders, and ₹5.8 lakh reserve, with nothing on
vehicles. No bank debt is drawn; the 11% line stays undrawn as contingency. If the contract is not won, lease the
100 bikes anyway: NPV ₹3.34 crore, ₹1.88 crore above staying petrol. At lease renewal (month 36), buy only if
the lease is repriced above ₹5,153 a month, the fleet-level switch point.

Three reasons for leasing both fleets against buying both:

| Side | Value | Liquidity | Resilience |
|---|---|---|---|
| Against buying both | ₹4.66 crore NPV, ₹1.10 crore below leasing | ₹1.10 crore of debt, cash floor ₹12.4 lakh | carries battery, subsidy and resale risk |
| For leasing both | ₹5.76 crore NPV, the highest of six options | no debt, cash never below ₹1.02 crore | fuel, subsidy, electricity and resale shocks move it by small amounts each |

## The moneyshot

Contribution rises from ₹42.2 lakh to ₹2.06 crore a year by month 24, a 4.9 times increase, with zero debt
drawn. Paired figures: NPV plus ₹4.31 crore over staying petrol; NPV plus ₹1.10 crore over buying both fleets.

## The seed and where it appears

Cover slide seed line: A leased EV costs ₹3,500 a month all-in. A bought one costs ₹5,684. The Situation slide
(S2) challenge card foreshadows with: a cheaper way to get vehicles than owning them. In the research document,
section 4 (reading the case closely) and section 9 (vehicle economics) seed the lease-versus-buy answer before
section 16 names option 6 as the recommendation.

## Frameworks and where

Unit economics per bike-month (contribution, margin): research sections 3 and 9; slide S2. Total cost of ownership
and lease-versus-buy (annuity method at 11%): sections 9, 10, 20; slides S3 and S6. NPV over 48 months with monthly
cash and debt sizing to a cash floor: sections 17 and 18; slides S3 and S4. MECE option filter and weighted
scorecard with its formula: section 13; slide S3. Porter five forces and strategic groups: section 7; no slide
(research only). PESTLE compressed to a policy clock: section 8; slide S2. Scenario analysis, tornado, switch
points: section 19; slide S6. An uncertainty exposure matrix built directly from the case own U01 to U07 list
against each option: section 19; slide S3. Real options (the option to buy at lease renewal; the no-award branch):
sections 20 and 22; slide S5. Risk register with probability and impact, pre-mortem: section 21; slide S5. Stage
gates and RACI: sections 22 and 23; slide S5. KPI tree and monthly reporting pack: section 24; slide S5. GHG
Protocol scopes, ISO 14083 and the GLEC Framework: section 12; slide S6. People, planet, profit: section 25; slide
S5.

## Kill criteria

1. Verified B2B all-in EV lease quotes in Delhi-NCR for delivery fleets sit consistently above ₹5,153 a month and
   no lessor offers a 36-month fixed rate below it. NOT TRIGGERED: lane R-B verified an Alt Mobility quote starting
   around ₹2,800 a month (bundled, 3 to 5 year term), well below both the case figure and the switch point.
2. PM E-DRIVE or Delhi EV Policy 2.0 gives a fleet operator ₹90,000 or more per purchased EV. NOT TRIGGERED: lane
   R-E verified, from the primary gazette texts, a maximum stackable incentive of about ₹35,000 to ₹40,000 per
   vehicle (PM E-DRIVE ₹5,000 plus Delhi EV Policy 2026 year-1 cap of ₹30,000, plus a non-applicable scrapping
   incentive), far below the threshold and the model's own ₹94,521 subsidy switch point.
3. A verified client term sheet norm requires owned vehicles. NOT TRIGGERED: no such norm was found across lane
   R-C's review of client commitments and service-level research.

## Locked numbers (post-M1, model hash effb9a66e6)

Options, NPV over 48 months at 11%, ₹ crore: stay petrol 1.45, electrify buy 2.94, grow buy 3.36, both buy 4.66,
grow lease 3.80, both lease 5.76, no award 3.34. Run-rate contribution at month 24, ₹ lakh a year, same order:
42.2, 114.2, 150.6, 220.7, 143.6, 206.0, 104.7. Debt needed, ₹ lakh, same order: 0, 0, 35, 110, 0, 0, 0. Cash at
month 24, ₹ crore, same order: 1.84, 2.31, 1.89, 2.32, 2.54, 3.74, 2.97. Lowest cash, ₹ lakh, same order: 103.5,
21.5, 12.0, 12.4, 67.9, 101.6, 103.5. Grams CO2 per delivery at month 24, same order: 240, 114, 173, 106, 173, 106,
114. Scorecard, out of 5: 1.95, 3.15, 3.00, 3.65, 3.60, 5.00 (options 1 to 6).

Per bike-month at 85 percent utilisation: revenue ₹26,520, rider pay ₹14,000, petrol ₹9,000, contribution
₹3,520, margin 13.3 percent (unchanged by M1, since these depend only on case facts). Bought EV all-in a month
₹5,684 (capital ₹2,843, charging ₹258, resale credit minus ₹417, running ₹3,000). Leased EV all-in a
month ₹3,500; EMI on a financed EV ₹3,601.

Uses of the ₹1 crore, ₹ lakh: contract working capital 44.5, charging hub 18.5, lease deposits 12.9, reporting
and dispatch 13.0, riders 5.2, reserve 5.8. These sum to ₹100.0 lakh exactly (model check passes).

Contribution bridge, today to month 24, ₹ lakh a year: today (petrol) 42.2, plus fuel to lease (100 bikes) 66.0,
minus spares on the existing fleet 1.7, plus contract margin (75 bikes) 123.3, minus spares on the contract 2.5,
minus contract overhead 18.0, minus reporting running cost 3.3, equals month 24 run-rate 206.0.

Scenarios, recommended (bear, base, bull): NPV ₹ crore 1.50, 5.76, 6.80; run-rate ₹ lakh 67.6, 206.0, 229.4;
lowest cash ₹ lakh 63.0, 101.6, 105.1; debt ₹ lakh 0, 0, 0 in every scenario. Scenarios, buy both (bear, base,
bull): NPV ₹ crore 1.35, 4.66, 5.67; debt ₹ lakh 140, 110, 65.

Tornado, NPV over 48 months ₹ crore, sorted by swing: price per delivery 3.95 to 7.58 (swing 3.62); contract
volume 4.21 to 5.76 (1.55); all-in lease rate 4.76 to 6.10 (1.33); utilisation now 5.16 to 6.37 (1.22); rider pay
rise 4.75 to 5.76 (1.02); discount rate 5.30 to 6.02 (0.72); EV availability 5.38 to 5.76 (0.38); award month 5.55
to 5.84 (0.29); receivable days 5.72 to 5.83 (0.10, now the smallest swing, since the model's own base already
reflects the verified 57-day figure).

Switch points: lease ₹5,153 a month (fleet level, was ₹5,151 before M1); subsidy ₹94,521; contract volume
70 percent; one-bike contract utilisation break-even 60 percent; price per delivery for zero 48-month NPV ₹27.3;
EMI on a financed EV ₹3,601.

Emissions: 240 grams to 106 grams CO2 per delivery (minus 56 percent, materially the same percentage cut as before
M1, though the absolute grams moved slightly because the higher verified petrol price changes the litres bought for
the same rupee running-cost budget in the model, a modelling mechanic, not a change in real fuel efficiency); 190.8
tonnes to 158.9 tonnes CO2 a year; deliveries 66,300 to 124,800 a month.

## The honest reading

1. The ₹3,500 all-in lease is a case figure. Real fleet quotes may be higher; leasing still wins up to ₹5,153,
   and the bear case already uses ₹5,000. If a lessor will not hold ₹5,153 or less for 36 months, the answer for
   the contract fleet flips to buying with debt, and the document says so.
2. The recommended plan month-24 run-rate (₹2.06 crore) is below buying both (₹2.21 crore): owning is cheaper
   to run once paid for. Leasing wins on value over 48 months, on liquidity and on resilience, not on monthly
   margin. In the bear case the gap in run-rate is larger (₹68 lakh against ₹1.16 crore) and leasing still wins
   on NPV (₹1.50 crore against ₹1.35 crore) because buying then needs ₹1.40 crore of debt.
3. The contract is half the value. Awarding it is the client decision, not ours to control; the no-award branch is
   worth ₹3.34 crore and is still the best non-contract option.
4. Contribution is not profit: the case gives no fixed overhead, so the document never claims EBITDA or net profit.
5. The emissions figures rest on assumed fuel economy (42 km a litre) and EV energy use (0.036 kWh a km), both of
   which lane R-D confirmed sit on the conservative side of the real-world evidence found (no figure specific to a
   loaded, stop-start delivery duty cycle exists for either, so the model's own conservative values were kept rather
   than averaged against unrelated commuter-riding figures), and the CEA grid factor (0.727 kg CO2 per kWh, CEA's
   latest directly verifiable version, v20.0), which lane R-G and the V2 verification pass both confirmed exactly
   against the primary documents.
6. The cash reserve inside the ₹1 crore is thinner than first estimated: ₹5.8 lakh, not the ₹15.2 lakh of the
   planning-time draft, because the verified 57-day receivable terms (lane R-C, two named comparables) tie up more
   working capital than the original 45-day planning estimate. The plan still needs no debt and still keeps cash
   above the ₹10 lakh floor in every scenario including bear, but the margin for a further shock is smaller than
   the earlier draft implied, and the document says so plainly rather than keeping the more comfortable, less
   accurate number.
