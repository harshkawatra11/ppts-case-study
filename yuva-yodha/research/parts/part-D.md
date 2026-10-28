## 13. The impact model: 4.2 hours to 0.4 hours per home on the heatwave day (simulated)

**Answer.** On the simulated heatwave evening, a home on the seed network is without supply for 4.21 hours under today's rotational shedding [M]. With the base-case lever ladder it is without supply for 0.40 hours [M], a cut of 90%. The bear case gives 0.83 hours and the bull case 0.00 hours [M]. The model runs the product's own network and demand over 96 fifteen-minute slots and measures outage hours per home, which is the reliability measure the brief asks for [D5]. These are simulation results on a deliberately tight network. A six-week pilot on one sub-division would test them against measured outages.

### 13.1 What the brief asks the model to measure

The brief asks for "a measurable reliability improvement, such as a reduction in outage hours or increased supply availability during intermittency windows, measured against a defined baseline" [D5]. Two things follow from that sentence. The baseline must be defined, and it must run under the same rules as the solution. The output must also be a number that a DISCOM can check against its own logs.

The model keeps the shedding and trip rules of the product's shadow baseline unchanged on both tracks. It changes one thing. The thermal rating of each distribution transformer counts as a limit. A DISCOM sheds load to protect an overloaded transformer, and the product's own IMPACT document describes overload as the reason shedding happens [P]. Without that change, the baseline would not reproduce the overload that drives shedding in the product's own account [P].

The model does not measure unserved energy. That is the metric the product's own Scenario Lab reports, and it is the reason §13.8 explains the difference. Unserved energy weighs a large outage in one lane the same as many short ones, and it says nothing about how many homes went dark. Outage hours per home answers the question the brief asks: how long does a household go without power.

Exhibit: slide 8, moneyshot card and counterfactual bars.

### 13.2 Method: two tracks over 96 slots

The model has two tracks run on the same 48 distribution transformers (DTs) and the same 7,000 connections [P].

**Track 1, today.** Available power at a DT is the lower of its supply share and its thermal rating, rated kVA multiplied by a power factor of 0.9 [P]. A DT that is short by more than 3% of its demand is a shedding candidate. In each sub-division, half the candidates, rounded up and least-burdened first, are cut to critical load for that slot [P]. Any DT that stays above 130% of rating for two slots trips and stays out for eight slots, which is two hours [P].

**Track 2, UrjaGrid.** Before the same shedding and trip rules run, each short DT receives the lever ladder in order. The first lever is a voluntary ask to T1 and T2 homes, at the share set by A01. The second is deferral of flexible T3 load, at the share set by A02. The third is the lowest cap level whose trimmed load, after compliance under A03, closes the gap. Thirty per cent of every lever's relief returns later as rebound, released at 15% a slot [P]. T0 homes are never touched. A DT that is still short after the ladder is shed or trips exactly as it does today [P].

**Table 1. Assumptions and product constants used by the model (simulated inputs)**

| ID | What it sets | Bear | Base | Bull | Tag |
|---|---|---|---|---|---|
| A01 | Voluntary ask, share of T1 and T2 load | 3% | 5% | 10% | [A01] |
| A02 | Flexible-load deferral, share of T3 load | 30% | 50% | 70% | [A02] |
| A03 | Compliance with a cap command | 85% | 92% | 97% | [A03] |
| A04 | Days modelled: heatwave, monsoon, mild | 45, 75, 245 | 45, 75, 245 | 45, 75, 245 | [A04] |
| A05 | Evening dip window | 18:00 to 23:00 | 18:00 to 23:00 | 18:00 to 23:00 | [A05] |
| A06 | Extra evening shortfall tested | 0% to 40% | 0% to 40% | 0% to 40% | [A06] |
| A07 | Cost of one utility message | ₹0.136 | ₹0.136 | ₹0.136 | [A07], [S50] |
| A08 | Messages per home per event | 2 | 2 | 2 | [A08] |
| A09 | DERC battery capacity tariffs, ₹ per kW a year | 3,591 to 5,700 | 3,591 to 5,700 | 3,591 to 5,700 | [A09], [S47], [S48] |
| A10 | Home inverter and battery, ₹ upfront | 14,000 to 19,000 | 14,000 to 19,000 | 14,000 to 19,000 | [A10], [S51] |
| A11 | Inverter life, years | 5 | 5 | 5 | [A11] |
| P | Product constants: power factor 0.9, tolerance 3%, half of candidates shed, trip above 130% for two slots, eight slots out, rebound 30% released at 15% a slot | Fixed | Fixed | Fixed | [P] |

The three cases move A01, A02 and A03 together. The bear case uses the lowest voluntary response, the least flexible deferral and the weakest compliance. The bull case uses the highest of each. A03 at 85% in the bear case sits close to Eskom's finding that load limiting reached a response of at least 70% once faults were fixed [S33]. The model does not simulate forecast errors, power flow or the meter command path. It assumes the plan is approved and the command lands.

Outage home-hours are counted as the non-critical connections of a DT multiplied by 0.25 hours for every slot in which that DT is out [P]. Each home therefore inherits the outage of its own transformer, and the model does not separate homes within one DT. That is a simplification. A DT with mostly lighting-and-fan homes counts the same as a DT with coolers, although the caps treat the two groups very differently [M].

### 13.3 Network exposure before any lever is applied

The network is tight by design. The seed network has 48 DTs with a combined rating of 10,105 kVA, serving 7,000 connections across 12 feeders and 5 sub-divisions [P]. On the heatwave evening the demand is 9,715 kW at a peak temperature of 44.2 °C, from a real archive day [P]. Before any lever is applied, 27 of the 48 DTs run above their rating [M].

**Table 2. Network exposure by day type, before any lever (simulated)**

| Day type | Peak temp (°C) | Peak demand (kW) | Demand (kWh) | DTs over rating | DTs over 130% | Max loading | Energy above rating (kWh) |
|---|---|---|---|---|---|---|---|
| Heatwave evening peak | 44.2 | 9,715 | 1,43,610 | 27 of 48 | 20 | 265% | 13,760 |
| Monsoon cloud cover | 32.8 | 7,764 | 1,27,412 | 21 of 48 | 10 | 208% | 7,307 |
| Clear solar noon | 31.2 | 7,590 | 1,25,650 | 20 of 48 | 10 | 203% | 6,712 |

Sources for the table: weather from three real Open-Meteo archive days [P]; loading and exposure from the model [M]. A loading of 265% means a DT carries 2.65 times its rated power at the heatwave peak [M]. That is why the today track trips 32 DTs on that evening, and why shedding alone does not protect the transformers. The heatwave is the stress case, and the monsoon and clear-noon days show the same pattern at a lower level.

### 13.4 Outage by day type and case

The core result is in Table 3. Each row is one day type under one case. The outage column is the number the moneyshot uses. Homes cut and DTs cut count the connections and transformers that lose supply at least once. Trips count DTs that trip for two hours. Capped at peak counts the homes above their cap in the evening peak slot. Must trim at peak counts the homes that are above their cap and so must trim load to keep supply.

**Table 3. Outage and caps by day type and case (simulated)**

| Day type | Case | Outage h per home | Homes cut | DTs cut | Trips | Supply availability | Capped at peak | Must trim at peak |
|---|---|---|---|---|---|---|---|---|
| Heatwave | Today | 4.21 | 4,309 | 30 | 32 | 82.5% | 0 | 0 |
| Heatwave | Bear | 0.83 | 1,244 | 9 | 0 | 96.5% | 3,171 | 1,804 |
| Heatwave | Base | 0.40 | 593 | 4 | 0 | 98.3% | 3,402 | 1,751 |
| Heatwave | Bull | 0.00 | 0 | 0 | 0 | 100.0% | 2,777 | 1,593 |
| Monsoon | Today | 3.71 | 4,584 | 32 | 23 | 84.5% | 0 | 0 |
| Monsoon | Bear | 0.38 | 459 | 3 | 0 | 98.4% | 3,805 | 2,025 |
| Monsoon | Base | 0.00 | 0 | 0 | 0 | 100.0% | 3,303 | 1,807 |
| Monsoon | Bull | 0.00 | 0 | 0 | 0 | 100.0% | 2,888 | 1,463 |
| Mild, clear noon | Today | 3.58 | 4,584 | 32 | 21 | 85.1% | 0 | 0 |
| Mild, clear noon | Bear | 0.35 | 459 | 3 | 0 | 98.5% | 3,651 | 1,779 |
| Mild, clear noon | Base | 0.00 | 0 | 0 | 0 | 100.0% | 3,564 | 1,649 |
| Mild, clear noon | Bull | 0.00 | 0 | 0 | 0 | 100.0% | 2,751 | 1,457 |

The base case takes the heatwave outage from 4.21 hours to 0.40 hours per home, and the monsoon outage from 3.71 hours to 0.00 hours [M]. On the mild October day the base case goes from 3.58 hours to 0.00 hours [M]. Supply availability rises from 82.5% to 98.3% on the heatwave day [M]. Four DTs still cut in the base case on the heatwave evening [M]. Those four are the transformers that need an upgrade, and §17 returns to them. Each of the four is a DT that the ladder cannot close, so it falls back to the shedding and trip rules [M]. The bear case cuts 9 DTs on the same evening and the bull case cuts none [M], which shows how the three compliance and response levels change the number of transformers the ladder must leave to the shedding rules.

### 13.5 Who is cut: 62 homes per 100 today, 9 in the base case

The outage hours per home average over all homes. The share of homes that lose supply is easier to read for a judge. The model has 6,931 non-critical connections, because the 69 T0 homes are never cut [P]. Table 4 divides each count by 6,931 and rounds to whole numbers. The shares are derived from the model counts, not separate model outputs.

**Table 4. Share of non-critical homes hit on the heatwave evening, per 100 homes (simulated)**

| Case | Homes cut | Cut, per 100 homes | Capped at peak | Capped, per 100 homes | Must trim, per 100 homes |
|---|---|---|---|---|---|
| Today | 4,309 | 62 | 0 | 0 | 0 |
| Bear | 1,244 | 18 | 3,171 | 46 | 26 |
| Base | 593 | 9 | 3,402 | 49 | 25 |
| Bull | 0 | 0 | 2,777 | 40 | 23 |

The base case cuts 9 homes in every 100 on the heatwave evening, against 62 today [M]. It caps 49 in every 100 at the peak, and 25 of them must trim load to keep supply. Those 25 are the homes the product's plan must actually reach. The rest keep supply within their cap without action.

The energy side of the same day is in Table 5. The three lever columns show how much each lever carries. The cap column is the largest by far, which matches the design. Caps are the first resource after the voluntary ask and the deferral, and they carry most of the relief.

**Table 5. Heatwave evening, model fields by case (simulated; kWh unless stated)**

| Case | Energy lost in outages | Voluntary demand response | Flexible deferral | Energy trimmed by caps | DT-hours above rating | Interruptions per home (SAIFI-style) |
|---|---|---|---|---|---|---|
| Today | 34,624 | 0 | 0 | 0 | 85.3 | 5.63 |
| Bear | 4,019 | 1,400 | 1,270 | 21,177 | 38.0 | 1.23 |
| Base | 1,781 | 2,314 | 1,983 | 20,312 | 24.3 | 0.27 |
| Bull | 0 | 4,440 | 2,379 | 18,178 | 17.0 | 0.00 |

Energy lost in outages falls from 34,624 kWh to 1,781 kWh in the base case [M]. DT-hours above rating fall from 85.3 to 24.3 on the same evening [M]. The interruption count falls from 5.63 per home to 0.27 [M]. The SAIFI-style figure is the model's own name for interruptions per home, and it is not the regulator's reported index.

### 13.6 Stress test: what a worse evening does

The brief describes a grid where renewable supply can fall below demand, and not every evening is the same. The stress test adds an extra shortfall between 18:00 and 23:00, from 0% to 40% [A05, A06]. Table 6 shows the heatwave outage at each level.

**Table 6. Heatwave outage hours per home at extra evening shortfall (simulated)**

| Extra shortfall | Today | Bear | Base | Bull |
|---|---|---|---|---|
| 0% | 4.21 | 0.83 | 0.40 | 0.00 |
| 10% | 6.35 | 0.83 | 0.40 | 0.00 |
| 20% | 6.35 | 0.83 | 0.40 | 0.00 |
| 30% | 6.35 | 0.90 | 0.40 | 0.00 |
| 40% | 6.35 | 2.08 | 1.00 | 0.06 |

The base case holds at 0.40 hours up to a 30% extra shortfall and rises to 1.00 hours at 40% [M]. Today's outage is already 6.35 hours at a 10% extra shortfall, and it does not rise further in this model [M]. The honest reading is that the lever ladder has a limit. Past about a third more shortfall, the bear case starts to show outages, and the base case reaches one hour. Those are the conditions a pilot should test first.

The shape of the stress test matters more than its level. The base case stays flat up to a 30% extra shortfall and then rises to 1.00 hours at 40% [M]. That step is where the ladder runs out of headroom, and the planner falls back to the shedding and trip rules for the DTs it cannot close [M]. The model does not report how many homes would need a cap at 40%, and the document does not estimate it.

### 13.7 A year, not a day

A single heatwave evening can mislead, so the model runs a year built from 45 heatwave days, 75 monsoon days and 245 mild days [A04]. Table 7 gives the annual result.

**Table 7. Annual result from 365 modelled days (simulated)**

| Case | Outage h per home a year | Trips | DT-hours above rating | Energy lost in outages (kWh) | Voluntary DR energy (kWh) | Energy trimmed by caps (kWh) |
|---|---|---|---|---|---|---|
| Today | 1,345 | 8,310 | 23,896 | 94,77,958 | 0 | 0 |
| Bear | 152 | 0 | 7,102 | 6,71,413 | 3,99,300 | 49,64,107 |
| Base | 18 | 0 | 5,011 | 80,167 | 6,58,572 | 46,12,788 |
| Bull | 0 | 0 | 4,789 | 0 | 12,29,609 | 39,08,534 |

A home loses 1,345 hours a year on today's track and 18 hours in the base case [M]. DT-hours above rating fall by 79%, from 23,896 to 5,011 [M]. That result is the strongest argument in the model for the transformers, and §17 returns to it. The energy numbers are kept in their own columns and are not added to the outage figure. The trimmed energy is larger than the DR energy because caps carry most of the relief, as Table 5 showed.

The annual figures also reconcile with the three day types. Table 7b multiplies each day type's outage from Table 3 by its number of days under A04 [A04, M]. The sums match Table 7 to within rounding, which checks the arithmetic and adds no new result.

**Table 7b. Reconciliation of the annual outage from the three day types (derived from simulated outputs)**

| Case | Heatwave: 45 days × h per home | Monsoon: 75 days × h per home | Mild: 245 days × h per home | Sum, h per home a year | Table 7 annual figure |
|---|---|---|---|---|---|
| Today | 45 × 4.21 = 189 | 75 × 3.71 = 278 | 245 × 3.58 = 877 | 1,344 | 1,345 |
| Bear | 45 × 0.83 = 37 | 75 × 0.38 = 29 | 245 × 0.35 = 86 | 152 | 152 |
| Base | 45 × 0.40 = 18 | 75 × 0.00 = 0 | 245 × 0.00 = 0 | 18 | 18 |
| Bull | 45 × 0.00 = 0 | 75 × 0.00 = 0 | 245 × 0.00 = 0 | 0 | 0 |

### 13.8 Why this model measures outage hours, not the Scenario Lab's unserved energy

The product's Scenario Lab reports mixed results on unserved energy. At 96 intervals, the four scenarios show −333.7, −142.7, +2,143.8 and +2,733.7 kW-intervals [P]. The reason is structural. The Scenario Lab's planner targets only the supply gap. It does not target transformer overload, so it cannot see transformer overload [P]. This model adds the thermal limit to the planner's view, and it applies the same shedding and trip rules to both tracks, so the comparison is fair.

The result is a change of measure as well as a change of rule. A DISCOM reading the two results would see the product's own lab, which is candid about its mixed relief, and this model, which is built on the same engine and network and measures a different thing. Slide 10 states the Scenario Lab's mixed result as a limit, so the mixed result is not hidden.

### 13.9 Sensitivity and limits

The sensitivity in this model comes from three sources. The first is the three cases, which move A01, A02 and A03 together. The second is the stress test in Table 6. The third is the year in Table 7. No separate tornado chart of each assumption was run, and the team does not claim one. The next model run should vary each of A01 to A03 on its own to show which assumption carries the result.

The model has four limits that a reader must weigh:

- It is not a power-flow study. The product has a radial power-flow solver, but this model does not run it [P].
- It is not a forecast-error study. The forecaster in the product is trained on synthetic data, so the model assumes the evening shortfall is known [P].
- It assumes the plan is approved and the meter command lands. A03 gives the share of commands that comply, and the bear case sets it at 85% [A03].
- It is a simulation on a seed network with approximate coordinates. The product's own notes describe the coordinates as a fallback geocode, so the network is "a simulated network on real Bareilly and Mathura localities" [P].

Every result in this section is a simulation estimate for a pilot to test. None is a measurement.

## 14. Affordability: ₹383 a meter a year to the DISCOM, ₹0 to the home (est.)

**Answer.** In the base case the DISCOM pays ₹26,84,105 a year across 7,000 meters, which is ₹383 a meter a year (est.) [M]. Of that, ₹96 is the software fee [P], ₹188 is rebates for demand response delivered [P, M], and ₹99 is utility messages [A07, A08]. The home pays nothing. The cost is ₹0.29 per outage hour avoided and ₹1,448 per kW of peak relief a year (est.) [M]. Two distribution battery tariffs approved by the Delhi regulator sit at ₹3,591 and ₹5,700 per kW a year [S48, S47]. The bear and bull cases cost ₹309 and ₹547 a meter a year (est.) [M].

### 14.1 Unit economics across the three cases

Table 8 gives the annual economics for 7,000 meters. The software fee is fixed by the product at ₹8 a meter a month [P], which is ₹96 a meter a year and ₹6,72,000 across the network. The rebate is ₹2 for each kWh of demand response delivered [P]. The model's rebate line equals the voluntary DR energy in Table 7 multiplied by ₹2, to within rounding [M]. The message line is the model's count of messages multiplied by ₹0.136 [A07].

**Table 8. Annual unit economics for 7,000 meters (est.)**

| Case | Software fee (₹) | Rebates to homes (₹) | Messages (₹) | Total (₹) | Per meter (₹) | Per outage hour avoided (₹) | Peak relief (kW) | ₹ per kW of relief | Energy kept (kWh) |
|---|---|---|---|---|---|---|---|---|---|
| Bear | 6,72,000 | 7,98,600 | 6,94,960 | 21,65,560 | 309 | 0.26 | 1,184 | 1,829 | 53,31,670 |
| Base | 6,72,000 | 13,17,145 | 6,94,960 | 26,84,105 | 383 | 0.29 | 1,854 | 1,448 | 61,68,839 |
| Bull | 6,72,000 | 24,59,217 | 6,94,960 | 38,26,177 | 547 | 0.41 | 2,295 | 1,667 | 67,41,984 |

The software fee does not change across the cases, because the product's fee is fixed. Rebates and messages drive the spread. The bull case pays the most per meter, because it delivers the most demand response and so pays the most rebates. That is a good outcome for the homes and a higher cost for the DISCOM, and the model shows both sides of it. A DISCOM that wants to pay less must buy less flexibility, and the bear case shows the price of that choice.

### 14.2 What the DISCOM pays per meter and why the home pays nothing

Table 9 splits the base-case cost into its three lines and states the basis of each. The per-meter figure is the annual total divided by 7,000 meters, rounded to the nearest rupee.

**Table 9. Base case: cost per meter a year, by line (est.)**

| Line | DISCOM, ₹ a year | Per meter a year (₹) | Basis | Tag |
|---|---|---|---|---|
| Software fee | 6,72,000 | 96 | ₹8 a meter a month, 12 months | [P] |
| Rebates to homes | 13,17,145 | 188 | ₹2 for each of 6,58,572 kWh of demand response | [P], [M] |
| Utility messages | 6,94,960 | 99 | ₹0.136 a message, 51.1 lakh messages a year (derived) | [A07], [A08], [S50] |
| Total | 26,84,105 | 383 | Sum of the three lines | [M] |

The home pays nothing because the fee sits with the DISCOM and the rebate flows to the home. The model carries no charge to the home. The rebate is an income to the home, not a cost, and so the home's net cost is zero on this basis. In the model the message cost sits with the DISCOM.

The message unit price is derived from a published rate. The WhatsApp utility message base rate is ₹0.115 plus 18% GST [S50], which is ₹0.136 once rounded [A07]. That is a provider rate card and not a DISCOM contract, so the message line can move with the tender.

### 14.3 Price against the battery alternatives

The brief asks whether the solution is affordable for low-income communities [G3] and whether it avoids major capital investment in grid reinforcement [X4]. The fairest comparison is a flexibility product against a storage product sold to a DISCOM for the same job, which is peak relief. Table 10 sets the base case against the two Delhi distribution battery tariffs approved by the regulator.

**Table 10. Cost per kW of peak relief a year, UrjaGrid base against two distribution batteries**

| Option | ₹ per kW a year | Comparison | Source | Tag |
|---|---|---|---|---|
| UrjaGrid, base case | 1,448 | Software and rebates, no hardware | Model, Table 8 | [M] |
| UrjaGrid, bear case | 1,829 | Lowest voluntary response | Model, Table 8 | [M] |
| Shivalik distribution battery, 12.5 MW and 25 MWh, 2026 | 3,591 | Capacity charge, ₹35.91 lakh a MW a year | DERC order via SolarQuarter | [S48], [A09] |
| Kilokari distribution battery, 20 MW and 40 MWh, 2024 | 5,700 | Capacity charge, ₹57 lakh a MW a year | DERC order via SolarQuarter | [S47], [A09] |

The base case is about 40% of the cheaper battery tariff and about 25% of the dearer one (est.) [M], [S47], [S48]. Two cautions apply. First, the battery tariffs are capacity charges for a full storage asset, and the battery also delivers energy, which the UrjaGrid comparison does not. Second, the storage cost per kWh cycled is ₹2.1 at two cycles and ₹2.8 at 1.5 cycles [S46]. That figure is a national ministry estimate and is not comparable with a capacity tariff, so the document does not set the two side by side. Storage remains a lever in the plan, and its economics are discussed in §8.

India awarded 10.4 GW of standalone storage in 2025, and about 1.8 GWh was installed by March 2026 [S45]. Nearly 75% of the two-hour capacity is classed as at risk [S45]. That is the reason the plan does not make storage a prerequisite for a low-income lane.

The comparison is not like for like, and the document says so. A battery sells energy and capacity, and the capacity charge is only one of its revenue lines. The UrjaGrid figure covers peak relief only and carries no value for energy shifted by a battery. The comparison shows that a software-led relief product costs a fraction of a capacity tariff for the same kilowatt of peak relief in the base case (est.) [M], [S47], [S48].

### 14.4 The home's coping cost

A home that has no supply during an outage has to cope somehow. Table 11 lists the coping routes, their cost to the home, and how confident the team is in each figure.

**Table 11. What a low-income home pays to cope with outages, by route**

| Route | Cost to the home | Source | Confidence in the figure |
|---|---|---|---|
| UrjaGrid cap and lifeline | ₹0 | [P] | Product rule |
| Inverter and battery, upfront | ₹14,000 to ₹19,000 | [A10], [S51] | Low. Listing could not be re-confirmed; see note |
| Inverter and battery, per year over five years | ₹2,800 to ₹3,800 | [A10], [A11] | est., derived from the upfront range |
| UP lifeline tariff, ₹3.00 a kWh (FY18 to FY21) | Energy charge only | [S13] | Med-High; confirmed for FY18 to FY21 only |
| Mini-grid tariff, ₹10 to ₹20 a kWh | Against ₹3 to ₹6.5 rural grid tariffs | [S49] | Med; corroborated by secondary sources |
| Share of surveyed households with an inverter or similar | 44% | [S14] | Low-Med; online urban sample, May 2022 |

The inverter range needs a warning. The retail listing that carries the ₹14,000 to ₹19,000 figure no longer shows it when checked, and current retail prices found for a 1,100 VA inverter with a 150 Ah battery run from ₹19,490 to ₹30,498 [S51]. The ₹2,800 to ₹3,800 a year figure is therefore an estimate, and it must be re-priced before the document is final. It is used here only to show the order of magnitude a home faces. The lifeline tariff is a fact for FY18 to FY21 only, and the document does not claim it for later years [S13].

A mini-grid tariff of ₹10 to ₹20 a kWh [S49] is well above the ₹3 to ₹6.5 rural grid tariffs. That gap is one reason the solution does not build a mini-grid. The brief lists mini-grid control software as an idea [I2], and §8 sets out the trade-off.

A home that delivers demand response earns ₹2 a kWh [P], which is two-thirds of the ₹3.00 a kWh lifeline energy charge in UP for FY18 to FY21 [S13]. The comparison is a ratio, and the document presents it as one.

The home's own outcome is the one the brief cares about. In the base case a home that would lose 4.21 hours on the heatwave evening loses 0.40 hours [M], and it pays nothing under the model's cost lines [M], [P]. The coping routes in Table 11 are what a home buys when it has no other protection. The model does not put their cost into the DISCOM's comparison, because the cost is not the DISCOM's.

### 14.5 Setting the fee against the metering contractors' charges

Smart-metering service providers charge a fee per meter, which the Indian literature calls an AMISP service charge. Table 12 sets the product fee against the published charges.

**Table 12. Monthly and annual fee per meter: UrjaGrid against published AMISP charges**

| Fee | Per meter a month (₹) | Per meter a year (₹, derived) | Source | Tag |
|---|---|---|---|---|
| UrjaGrid software fee | 8 | 96 | Product constant | [P] |
| West Bengal AMISP, lowest reported | 60 | 720 | Prayas, May 2025 | [S19] |
| Goa AMISP, per meter for 93 months | 117.50 | 1,410 | The Goan, Aug 2025 | [S56] |
| Madhya Pradesh AMISP, state average | 146 | 1,752 | Prayas, May 2025 | [S19] |

The Prayas study reports a range from ₹60 in West Bengal to ₹146 in Madhya Pradesh as a state average [S19]. The same study also quotes a single Madhya Pradesh discom at ₹167. The document uses the state average as the upper end of the range, and it notes the ₹167 figure as a discom-level quote. The annual column is derived by multiplying the monthly fee by 12 and is not reported by the sources. A DISCOM that buys the product as an add-on would pay ₹8 a meter a month for the software.

On a monthly basis the fee is 13% of the lowest reported AMISP charge of ₹60 (est.) [P], [S19].

### 14.6 What would move the per-meter cost

Four drivers set the per-meter cost. Table 12b shows how far each one moves it. The effects are derived from the base case by simple arithmetic on the model's volumes, so they are estimates and not new model runs. The rebate row holds the base-case demand response volume fixed. A higher rebate that drew less response would give a different answer, and the model would need a new run to show it [M].

**Table 12b. What moves the base-case cost per meter a year (derived; est.)**

| Driver | Base value | Change tested | Effect on cost per meter a year (₹) | Source |
|---|---|---|---|---|
| Software fee | ₹8 a meter a month | Plus ₹1 a month | +12 | [P] |
| Rebate per kWh delivered | ₹2 a kWh | Plus ₹1 a kWh, same volume | +94 (6,58,572 kWh divided by 7,000 meters) | [P], [M] |
| Message price | ₹0.136 a message | Plus ₹0.10 a message, same count | +73 (51.1 lakh messages, divided by 7,000) | [A07], [S50] |
| Voluntary share | 5% of T1 and T2 load | Any change | Not estimated; needs a model run | [A01], [M] |

## 15. Ownership, operations and maintenance: the DISCOM owns, a named engineer decides

**Answer.** The DISCOM owns the software, the fee and the approval. A Junior Engineer or an Assistant Engineer approves each plan by name, and the field team keeps the T0 registry. The AMISP connects the head-end, the team audits outcomes with the regulator, and the regulator sees aggregates only. The product's code enforces the approval rule: only a Junior Engineer or an Assistant Engineer can approve a plan, and the approver's name is read from the login [P]. Five rails must be connected before the lever goes live, and each is a named link in the pilot plan [P].

### 15.1 Who does what

The RACI below comes from the pilot plan's responsibility matrix. A is accountable, R does the work, C is consulted and I is informed [P]. It follows the five activities a pilot must carry, and it names the five parties that carry them.

**Table 13. RACI for the five pilot activities**

| Activity | DISCOM | Field | AMISP | Team | SERC |
|---|---|---|---|---|---|
| Approve a plan | A | C | I | C | I |
| Keep the T0 registry | A | R | I | C | I |
| Connect the head-end | A | I | R | C | I |
| Pay the fee and rebates | A | I | I | I | C |
| Audit outcomes | C | I | I | R | A |

The DISCOM is accountable for four of the five activities, because it owns the decision, the registry, the head-end contract and the fee. The field team does the registry work, which is the step that stops an unlisted T0 home from being capped [P]. The AMISP does the head-end connection, and the team does the audit. The regulator is accountable for the audit, so the audit does not rest with the team that built the tool.

The escalation path follows the same lines. When a DT is still short after the lever ladder, the product sheds or trips it exactly as it does today [P], and the approval for that action still sits with the named engineer [P]. The team builds and runs the software, and it does not decide on any single home.

### 15.2 Control rules the software enforces

The product enforces six safety invariants in code and in its tests [P]. A DISCOM does not need to trust the team's word on them, because each one is a test. Table 14 lists them with the operational meaning for a DISCOM engineer.

**Table 14. Six safety invariants and what they mean on the ground (product rules)**

| Invariant | What it means for the DISCOM | Status |
|---|---|---|
| T0 is never capped | A registered critical home keeps full supply during any plan | Tested in code [P] |
| No cap goes below 300 W | Every capped home keeps a lifeline floor | Tested in code [P] |
| Every cap carries an expiry | No cap runs on without an end time | Tested in code [P] |
| Every cap gets at least 30 minutes of notice | The home is told before a cap starts | Tested in code [P] |
| Nothing dispatches without a named approver | A Junior or Assistant Engineer signs each plan | Tested in code [P] |
| No LLM SDK is imported in any engine | A language model phrases results and never decides | Tested in code [P] |

The dispatch timeline makes the notice rule concrete. The home is notified at T−120 minutes, the signal goes out at T−30, the head-end (HES) is commanded at T−15, the plan starts and ends, and the outcome is verified at T+15 [P]. The product's notice is therefore two hours ahead for the message and 30 minutes at the least for the cap itself [P]. Slide 5 quotes the two-hour message.

The rules also apply in a fixed order. The T0 check runs before any cap is applied [P], the notice runs before the cap starts [P], and the approver's name is recorded for each plan [P]. A DISCOM auditor can therefore follow one plan from registry check to notice to approval to outcome. That audit trail is what the RACI in Table 13 depends on.

### 15.3 Operations and maintenance tasks, with a proposed cadence

The O&M model below is a proposal. The fact base holds the dispatch timing and the roles, but it does not hold a measured cadence, because no pilot has run. The cadence is therefore a design choice, and it is labelled as one. The pilot's six weeks will test whether the cadence is enough.

**Table 15. O&M tasks, owner and proposed cadence (proposal; not yet validated)**

| Task | Owner | Proposed cadence | Basis |
|---|---|---|---|
| Approve each plan by name | DISCOM Junior or Assistant Engineer | Each dispatch, at T−120 or earlier | Dispatch timeline [P] |
| Check the T0 registry and add unlisted homes | Field team | Weekly, and at each new sub-division | RACI [P]; risk "unlisted T0 home" |
| Check head-end command acknowledgements | AMISP | Each dispatch, and a daily summary | Risk "missed command" [P] |
| Review the saturated DTs and the next sub-division | Team with the DISCOM | Weekly during the pilot | Pilot Gantt [P] |
| Audit outcomes against the baseline | Team and regulator | Monthly, and at the end of each wave | RACI [P] |
| Pay the fee and rebates | DISCOM | Monthly | Fee and rebate constants [P] |

The weekly and monthly cadences are proposals. The dispatch timeline is fixed by the product [P]. The risks named in the table are the six pilot risks that slide 9 sets out [P], and §19 treats them in full.

### 15.4 Data ownership and the law

In the pilot design the DISCOM owns the meter data, and the team holds only what the DISCOM passes on. The rules that govern the data are the Digital Personal Data Protection Rules, which were notified on 13 November 2025, and whose main obligations take effect about 18 months later, by May 2027 [S27]. The document gives no legal view on each party's role under those rules. Table 16 summarises the data rules that the pilot must respect.

**Table 16. Data ownership and rules for the pilot**

| Data | Owner | Rule for the pilot | Source |
|---|---|---|---|
| Meter readings and load per connection | DISCOM | Used only for the plan and the audit | Pilot design [P] |
| T0 registry | DISCOM, kept by field team | Verified before any cap is applied | [P] |
| Household contact for messages | DISCOM | Sent under the DISCOM's messaging contract | [S50] |
| Regulator view | SERC | Aggregates only | Pilot Gantt [P] |
| Use of the data | DISCOM | Advanced utilities use less than a quarter of the data they hold, as one researcher put it; the pilot uses the fields the plan needs | [S28] |

The last row comes from an attributed remark that the data is under-used [S28]. The document reports it as a remark by one researcher and does not treat it as a survey. The meters are already installed, so the pilot's data question is one of access and purpose, not of new collection. The pilot's six weeks fall well before the main DPDP obligations apply, which the source puts at about May 2027 [S27]. The document does not claim those obligations apply to the pilot in its current form. It recommends that the DISCOM's legal team confirms the position before any household data is used, and that the pilot uses only the fields in Table 16.

### 15.5 Procurement path and the business model

A DISCOM can buy the product through three routes. Each has a cost reference, and each is a real choice in the pilot.

**Table 17. Procurement routes for a DISCOM**

| Route | What the DISCOM buys | Cost reference | Source |
|---|---|---|---|
| AMISP add-on | The software on top of an existing metering contract | ₹60 to ₹146 a meter a month for the AMISP service, against the product's ₹8 | [S19], [P] |
| DISCOM software line | A direct licence and the fee | ₹8 a meter a month, ₹96 a year | [P], [M] |
| India Energy Stack pilot | A state pilot under the national stack | ₹51.3 crore total budget; UP is one of five pilot states for FY 2026-27 | [S25] |

The business model follows from Table 17. The DISCOM pays because the model prices the cost against outage hours avoided and against peak relief (Table 8). The rebate is paid only when the home delivers demand response [P]. The model's costs and the DISCOM's value are reported in §14.

A DISCOM chooses between the routes on cost and control. The AMISP add-on keeps the metering service with an existing contractor, but it carries the AMISP fee range of ₹60 to ₹146 a meter a month [S19]. The direct licence costs ₹8 a meter a month for the software [P]. The state pilot route depends on a national budget, and it sets the timing more than the cost [S25]. The document does not pick one route over the others. The pilot should test the direct licence first, because it is the cheapest per meter in Table 12.

### 15.6 Exit and handover

If the pilot misses the measures set out in §21, the DISCOM can stop the lever ladder and return to today's rotational shedding. The shadow mode in the pilot plan lets the software run for two weeks without dispatching anything [P], which gives the DISCOM a read-only record before any command is sent. The fallback is a pilot design choice and not a product fact, and the DISCOM decides it before the pilot starts.

Table 18 lists the five links the pilot must connect before the lever goes live. Each one is WIRED in the code today and LIVE only in the simulator, which the status audit records [P].

**Table 18. The five WIRED-to-LIVE links and what the pilot needs (status from the audit)**

| Link | Status today | What the pilot needs | Status tag |
|---|---|---|---|
| Head-end (HES or MDM) | Simulator | A vendor API | PILOT [P] |
| Chargers | Simulator | OCPP to the charging hubs | PILOT [P] |
| Public loads | Simulator | An OpenADR link | PILOT [P] |
| Messaging | Mock | A business messaging API | PILOT [P] |
| Backend | Not live | A cloud host with persistence | PILOT [P] |

The product's audit counts 10 capabilities LIVE, 12 WIRED and 6 PILOT [P]. Those six are the pilot's work. The DISCOM owns the decision to connect them, and the team builds the connections.

## 16. Fairness: the comfort cap touches 54% of T1 and T2 connections at the peak (est.), and never a fan-and-light home

**Answer.** At the heatwave peak, 54% of T1 and T2 connections sit above the 1,000 W comfort cap [M]. The cap does not touch a lighting-and-fan home or a fridge-and-TV home at that level, though a fridge-and-TV home is capped at the 300 W lifeline in 43% of cases [M]. Shops with cold chains and homes with a cooler or AC are constrained at all three levels [M]. A lifeline floor of 300 W holds for every capped home, and T0 is never capped [P]. The IEA warns that flexibility programmes can exclude some groups [S37], and the fairness design answers that warning with a floor, a rotation and a named approver. The trust record in India and South Africa is short and sharp, and the document reports it as it is.

### 16.1 Who the cap constrains

The equity question is who the cap touches. Table 19 gives the share of each connection type that sits above each cap at the heatwave peak. The denominator is the share of T1 and T2 connections above the cap, so it is a share of the connections the cap can touch.

**Table 19. Share of each connection type above the cap at the heatwave peak (simulated)**

| Connection type | Connections | Comfort 1,000 W | Essential 500 W | Lifeline 300 W |
|---|---|---|---|---|
| Cooler or AC | 1,260 | 100% | 100% | 100% |
| Fridge and TV | 1,304 | 0% | 0% | 43% |
| Lighting and fan | 1,268 | 0% | 0% | 0% |
| Cold-chain shop | 1,292 | 100% | 100% | 100% |
| Small shop | 1,202 | 70% | 97% | 100% |
| All T1 and T2 | 6,326 | 54% | 59% | 68% |

The table shows where the burden lands. Lighting-and-fan homes are never above any cap at the peak [M]. Fridge-and-TV homes are not touched at the comfort or essential levels, but 43% of them are above the 300 W lifeline [M]. That is the hardest finding in this section: in the model, the lifeline floor cuts into the load of many fridge-and-TV homes at the peak. The pilot should test that case first. Cold-chain shops and cooler or AC homes are above every level, so they are the group the DISCOM must talk to first.

### 16.2 Protections that hold in every case

The product's protections are rules, not averages. Table 20 lists them with their status. Each one is a test in the product, which is what makes the fairness claim checkable.

**Table 20. Protections for capped homes and what each one guarantees**

| Protection | What it guarantees | Status |
|---|---|---|
| T0 never capped | Registered critical homes, including life-support homes, keep full supply | Tested in code [P] |
| 300 W lifeline floor | No capped home falls below 300 W | Tested in code [P] |
| Expiry on every cap | A cap ends at a stated time and does not persist | Tested in code [P] |
| Notice of two hours for the message | The home is told two hours ahead, at notification T−120 | Dispatch timeline [P] |
| Named approver | A Junior or Assistant Engineer approves each plan | Tested in code [P] |
| Rebate of ₹2 a kWh | A home that delivers demand response is paid for it | Product constant [P] |
| Automatic reconnect after a trip | A tripped DT's homes return to supply after two hours | Trip rule [P] |

The automatic reconnect is the protection the trip rule depends on. The product's notes say a DLMS limiter trips the relay when a home stays above its limit, then reconnects automatically [P]. The document never describes a cap as "nothing is switched off". A trip is a switch-off, even a short one, and the document says so.

### 16.3 Measuring fairness: the indices the product carries

The product carries three fairness measures: the Jain index, the Gini coefficient and the Lorenz curve [P]. Table 21 says what each one shows and where it stands.

**Table 21. Fairness measures in the product**

| Measure | What it shows | Status |
|---|---|---|
| Jain index | How evenly a burden falls across the connections capped in a plan | WIRED [P] |
| Gini coefficient | The concentration of the burden across homes | WIRED [P] |
| Lorenz curve | The cumulative share of the burden against the cumulative share of homes | WIRED [P] |

Those three measures are coded and tested, and the status audit places them at WIRED [P]. They are not yet a pilot result. The rotation the product applies is designed to spread the burden across lanes over a period, so a single evening's cap does not fall on the same lane every time [P]. The document does not give a rotation statistic, because no run of the rotation over a year has been reported.

### 16.4 What the precedents say about the cap

Four precedents show what limiting did and did not do. They are foreign precedents, and the document names them as precedents and does not convert their figures into Indian results.

**Table 22. Precedents for limiting, and what they show about fairness**

| Precedent | What was done | What it shows | Source |
|---|---|---|---|
| Eskom, South Africa, 2023 to 2024 | Load limit of 10 A on about 9,000 smart meters, with 12,506 by September 2023 | Customers favoured limiting over load shedding; response was at least 70% after faults were fixed | [S33] |
| Eskom consent payment | R90 a month, South African rand, for accepting remote limiting, up to 10 events a month of up to two hours | Eskom paid customers for accepting remote limiting | [S34] |
| France, Enedis, February 2024 | About 115,000 homes limited to 3 kW for two hours; use fell 20%; at-risk customers excluded | Limiting cut use, and high-risk patients were excluded from the test | [S36] |
| Germany, §14a, from 1 January 2024 | Dimming to 4.2 kW allowed; household base load unaffected; no refusal of connection for local congestion | The law protects household base load by rule | [S35] |

The Eskom pilot also had failures, which the precedent section in §9 records. The customer finding is quoted as it appears in the source: limiting was "well received and favoured by customers over loadshedding" [S33]. The 15.3 MW average relief over seven events is in the source [S33], but one verification pass could not reproduce it, so §9 treats it as reported. The French and German precedents show that a DISCOM can protect the critical loads by rule and still deliver relief.

### 16.5 The IEA's warning, and the answer to it

The International Energy Agency makes two statements about flexibility that belong together. The first is that flexibility "can also deliver capacity to the grid at a cost up to three times lower than building new capacity" [S37]. The second is a warning that programmes can exclude some groups, and that unequal access to the enabling technology can undermine fairness and trust [S37]. Two verification passes disagreed on the exact wording of the warning, so the document paraphrases it and does not quote it until the wording is confirmed against the report.

The answer to the warning is in the design. A lifeline floor means no capped home falls below 300 W. The rotation means the burden moves across lanes. The notice means a home is told before it is capped. The named approver means a person answers for each plan. None of these needs the home to own a battery or an inverter, which is the access problem the IEA describes [S37].

The fairness design does not remove every inequality. The cap binds cold-chain shops and cooler homes harder than other homes at the peak [M], and a lifeline floor still means a capped home runs at 300 W. The main fairness risk the pilot faces is a missed T0 home. The pilot plan records that risk as medium probability and high impact, with a field registry as the mitigation [P]. A capped life-support home would be the clearest failure, so the registry check in §15 comes before any cap.

### 16.6 Trust lessons from India

Trust in a metering scheme can be lost quickly. Table 23 gives the Indian events that show how fast, and what each one teaches the pilot.

**Table 23. Trust events in India, and what each teaches the pilot**

| Event | Figure | Lesson for the pilot | Source |
|---|---|---|---|
| UP prepaid to postpaid reversal, announced 5 May 2026 | About 83 lakh smart prepaid meters moved to postpaid | Prepaid mistrust is a real risk, and the pilot uses postpaid with two hours' notice | [S20], [P] |
| CEA removes the prepayment requirement, 1 April 2026 | The mandate for prepaid mode is removed | The regulator has already opened the door to a postpaid design | [S21] |
| Demand response in Delhi and Mumbai, 930 homes | 8.5% cut in automated events; 15% in the evening; higher rewards did not raise response | Voluntary asks respond to automation, not to larger rewards | [S38] |

The UP reversal is the most direct warning in the record. The UP government moved about 83 lakh smart prepaid meters to postpaid after consumer complaints [S20]. The Delhi and Mumbai study shows that a voluntary ask works best when it is automated and that a bigger reward does not add response [S38]. The base case keeps the voluntary share at 5%, and the model does not raise response with a bigger reward [A01].

## 17. Sustainability: no new hardware, and overload hours fall 79% (est.) in the base case

**Answer.** UrjaGrid installs no new equipment in the model, so it adds no manufacturing footprint to count. Its environmental effect comes from how existing transformers and evening generation are used. In the base case, DT-hours above rating fall by 79% over a year (est.), and 4 of 48 transformers still need an upgrade in the same run (est.) [M]. Evening supply is the weak point: the shortage in non-solar hours on the record day was 2.57 GW, against 0.18 GW in solar hours [S02]. The model does not compute emissions, because the fact base holds no grid emission factor, and the document says so.

### 17.1 No new hardware is installed

The sustainability case starts from what is not built. Table 24 lists the assets the solution reuses.

**Table 24. Assets the solution reuses, and whether any new one is needed**

| Asset | Quantity or status | Use in UrjaGrid | Source |
|---|---|---|---|
| Smart meters installed in India | 7.24 crore, as of 30 June 2026 | The load-limit switch is already in the meter | [S16] |
| Load-limit switch in the meter specification | Required feature, per the 2020 CEA specification | Software drives the switch; no new switch is fitted | [S17] |
| Distribution transformers in the seed network | 48, with a combined rating of 10,105 kVA | Ranked by shortfall and overload; no new DT is installed | [P] |
| Grid-scale or distribution storage | Optional lever, not required | Plugs in when it exists; not a prerequisite | [P], §8 |

The meter is the important row. Its load-limit switch is a required feature of the national specification [S17], and the rollout has reached 7.24 crore installed meters [S16]. The solution therefore reuses an installed base. The emissions case for a solution that needs no new hardware is that no new hardware is made, shipped or installed.

### 17.2 Overload hours and transformer stress

Transformer stress is the main physical benefit that the model measures. Table 25 gives the DT-hours above rating for each case, both on the heatwave evening and across the year.

**Table 25. Transformer stress by case: DT-hours above rating (simulated)**

| Case | Heatwave evening, DT-hours above rating | Year, DT-hours above rating | Change in the year against today | DTs cut on the heatwave evening |
|---|---|---|---|---|
| Today | 85.3 | 23,896 | 0% | 30 of 48 |
| Bear | 38.0 | 7,102 | −70% | 9 of 48 |
| Base | 24.3 | 5,011 | −79% | 4 of 48 |
| Bull | 17.0 | 4,789 | −80% | 0 of 48 |

The base-case year gives 5,011 DT-hours above rating against 23,896 today, a fall of 79% [M]. The bull case falls by 80% [M]. The product's thermal model uses IEEE C57.91 reference points, with 110.0 °C at rated load and 146.1 °C at 1.2 pu [P]. The overload result is the model's strongest physical result, but the model does not convert overload into failures, so the document claims no failure reduction. The failure context in §17.3 is the reason the overload result matters, and it is not a result of the model.

The bear case already removes 70% of the annual DT-hours above rating, the base case 79% and the bull case 80% [M]. Most of the reduction is therefore present even at the bear case's compliance and voluntary levels. The base case adds the rest, and the bull case adds one point more.

Four of the 48 transformers still cut in the base case on the heatwave evening [M]. Those four still need an upgrade, as slide 9 says. The other 44 are not cut in that case [M].

### 17.3 Why transformers fail, and what the failures cost

Distribution transformer failures are a large and reported problem. The CEA Standardization Cell told a meeting in October 2025 that about 10% of distribution transformers fail each year, which is roughly 1.3 million failures [S10]. That figure comes from a secondary trade report, and it has a medium confidence rating. The same report says some northern states are above 20% [S10]. It attributes moisture ingress to 90% of failures [S10]. The verification pass found that the source says "90%" and not "nearly 90%", so the document uses the exact figure.

Table 26 sets the failure context against the model's overload result. The two are separate. The model does not turn overload into failures, so the link between them is a reason to care, and not a number the model reports.

**Table 26. Transformer failure context and the model's overload result**

| Item | Figure | Use in this document | Source and confidence |
|---|---|---|---|
| Share of DTs that fail each year | About 10% | Context for the overload result | [S10], Med |
| Failures per year | Roughly 1.3 million | Context only | [S10], Med |
| Northern states above 20% | Some northern states above 20% | Shows the problem is regional | [S10], Med |
| Moisture ingress as a cause | 90% of failures | Not an overload finding; cited for context | [S10], Med |
| DT-hours above rating, base, annual | 5,011 against 23,896 today | The model's overload result | [M] |

The moisture figure matters because it shows that the transformer failure problem is not only about overload. The solution reduces overload, and it does not address moisture. A DISCOM reading this document should see that boundary clearly, and §17.5 lists it among the limits.

### 17.4 The evening fossil dependence and the solar build-out

The case for flexibility rests on the evening gap. Table 27 sets the record-day numbers against the wider trend and the capacity mix.

**Table 27. The evening gap and the capacity mix behind it**

| Item | Figure | Source |
|---|---|---|
| Record peak demand, 21 May 2026 | 270.82 GW at 15:45 | [S02] |
| Shortage in solar hours, that day | 0.18 GW | [S02] |
| Shortage in non-solar hours, that day | 2.57 GW | [S02] |
| Days short in non-solar hours, April to May 2026 | 36, against 6 in solar hours | [S03] |
| Evening climb, May 2023 to May 2026 | About 36 GW to 74 GW | [S03] |
| Non-fossil share of installed capacity, 31 August 2026 | 54.88% | [S01] |
| Solar capacity, 31 August 2026 | 1,68,040 MW | [S01] |
| PM Surya Ghar rooftop households, August 2026 | 50.06 lakh | [S30] |

The table shows the paradox that the sustainability argument needs. India's non-fossil share of installed capacity is 54.88% [S01], and the solar build-out is fast, with 50.06 lakh rooftop households [S30]. The shortage is still in non-solar hours, when solar output is absent [S02, S03]. Flexibility that moves a flexible load into solar hours uses more of the solar output that already exists. The model does not simulate curtailment of solar, so the document makes that point as a mechanism and not as a result.

### 17.5 Honest limits of the sustainability case

The sustainability case is the weakest-measured part of the document, and it says so. Table 28 lists what is not measured and why.

**Table 28. What the sustainability case does not measure**

| Item | Why it is not measured | What would measure it |
|---|---|---|
| Emissions in tonnes of CO2 | The fact base holds no grid emission factor for the period | A factor from the national grid authority, applied to the model's energy shifted |
| Solar curtailment avoided | The model does not simulate solar output or curtailment | A solar and demand profile for the sub-division |
| Hardware footprint | No new hardware is in the model, so there is none to count | Not needed unless a storage lever is added |
| Transformer failure avoided | The model reports overload hours, not failures | A pilot with failure logs over at least one year |
| Moisture-related failures | Outside the solution's scope | DISCOM maintenance and sealing programme |

Two of the rows are structural. The solution does not add hardware, so it cannot be blamed for hardware footprint, and it does not address moisture, so it cannot claim the moisture share. The other rows are honest gaps in the evidence. A reader who sees a sustainability number in this document should check whether it is one of the model's overload results or one of the reported context figures. The emissions figure is not in this document, and the team did not estimate one.
