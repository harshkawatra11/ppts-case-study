## 5. Root cause: the feeder is the unit of control, so a fan and an idle AC are cut alike

**Answer.** Renewable intermittency becomes a household outage only because the control unit in use is the feeder, and the feeder is cut as one block. A transformer short of supply after sunset has no way to shed the cooler and keep the fan, so the whole lane goes dark or none of it does. The root cause is therefore a control problem at the distribution transformer, not a generation shortfall alone. The rest of this section tests that claim with the issue tree, the 5-Whys chain and a MECE split of causes.

### 5.1 The issue tree starts from one question and splits it without overlap

The governing issue for the whole document is stated here. A household loses power when clean supply falls short, and the document tests what could stop that loss without new grid capacity. The brief frames the same problem as a gap that must be bridged "during periods when renewable-energy supply falls below demand" [G1]. The tree below breaks that gap into branches that do not overlap, and each leaf is either a number we can cite or a question the simulation answers.

| Level | Branch | Leaf question | Evidence today |
|---|---|---|---|
| Top | Why do homes lose supply when clean power is short? | None | [X2], [X3] |
| 1a | Is there less power at the edge at the moment of need? | Does supply fall after sunset? | Yes. 2.57 GW short after sunset against 0.18 GW in solar hours on 21 May 2026 [S02] |
| 1b | Is the network unable to carry the power that does exist? | Do transformers exceed rating when neighbours draw together? | Yes in simulation. 27 of 48 DTs above rating on the heatwave day, base network [M] |
| 1c | Is the control process unable to choose who goes dark? | Can the utility cut selectively, or only by feeder? | Largely no. Rotation works by lane, not by load class [P], [S22] |
| 1d | Is the outage record unknown to the utility? | Does the utility see the outage the home sees? | Often no. Roster hours and meter-measured hours differ [S06], [S07] |

Branch 1a is the one the brief names. Branch 1b is where the physical damage sits: distribution transformers fail at a rate reported as about 10% a year, roughly 1.3 million failures [S10]. Branch 1c is the one this document argues about most, because it is the only branch that a software change can address without new steel. Branch 1d explains why the problem stays hidden: the outage is measured on the roster, not on the meter.

Each leaf is either a fact or a model output. None of the leaves is an interview. The tree is a planning tool and the impact model in §13 of the research document tests the leaves that can be simulated.

### 5.2 Five whys trace the outage from the home to the control room

The 5-Whys chain is a sequence of "why" questions asked of one outage, read from the home upward. It shows where the chain is cheapest to break. Each answer is tagged with its source.

| Why | Answer | Tag |
|---|---|---|
| 1. Why is a home dark after 18:00 on a hot day? | Its distribution transformer is short of supply, or it is cut to protect the transformer. | [S02], [M] |
| 2. Why is the transformer short? | Solar output has fallen away, and non-solar hours carry the peak. In May 2026 there were 36 days short in non-solar peak hours against 6 in solar peak hours. | [S03] |
| 3. Why does the cut hit the home regardless of what it uses? | The shedding roster works by feeder lane. A lane is cut whole, so the cooler and the fan are switched off together. | [P], [S22] |
| 4. Why is the roster used at all? | The utility cannot select individual loads, because the limiter in the meter is used for billing and not for dispatch. | [S17], [S28] |
| 5. Why is the limiter unused? | Meter programmes were designed for billing and metering rules, and data use is far below its potential. Advanced utilities use less than a quarter of the data they hold. | [S20], [S28] |

The fifth answer is the root. The limiter was specified in the meter from the start [S17], so the cheapest selective lever is already in the field. What is missing is software that uses it on a short window, with notice and a floor. That is the gap UrjaGrid fills, and it is why the chain breaks at the fifth why rather than at the first.

### 5.3 A MECE split puts every cause in one of three buckets

The causes of a neighbourhood outage are sorted below into supply-side, network-side and control-side. The three buckets do not overlap, and together they cover the causes the evidence supports. A fourth catch-all, "other causes", is not needed for the purpose of this document, because the CEA grid report lists its non-supply causes under distribution-network constraints, commercial reasons and forced outages [S04]. That report line could not be re-read in verification, so it is cited with that caveat.

| Bucket | Causes in the evidence | Can software act on it? | Source |
|---|---|---|---|
| Supply-side | Solar output drops after sunset; non-solar peak exceeds solar peak; storage is small relative to the evening ramp | Partly. Software moves flexible load into solar hours; it cannot create energy | [S02], [S03], [S31] |
| Network-side | Transformers loaded past rating; ageing or moisture-damaged units; low voltage on long feeders | Partly. Software caps the load that drives overload; it cannot repair a unit | [S10], [M] |
| Control-side | Feeder-level rotation with no load class; no notice; no feedback to the utility on who is dark; meter limiter unused | Yes. This is the bucket the product addresses | [S17], [S22], [P] |

The control-side bucket is the one a judge should look at first. It is the only one where a neighbourhood team, working with the utility, gets a result within a season and without a capital budget. The brief's own phrase, "without requiring major capital investment in grid reinforcement" [X4], points to the same bucket.

The MECE test has a limit that should be stated. The split assumes the three buckets are independent. In practice they interact: a transformer that is overloaded cannot be cured by control alone, and a control rule that sheds the wrong load makes the overload worse. The model handles that interaction by applying the thermal limit to every transformer and by letting the lever ladder work before the shedding rule runs [M].

### 5.4 Why rotational shedding is unfair by design

Rotational shedding is fair in one narrow sense: every lane takes its turn. It is unfair in the sense that matters to a low-income household, because the cut does not depend on what the household uses, how much it can absorb, or whether a power cut endangers anyone in the home.

**Answer.** Rotation treats a cooler and a fan alike, and it treats a home with a refrigerator and a shop with cold stock alike. The outcome is that the loads most able to shift get cut as often as the loads that cannot. Shedding is also a costly way to protect a transformer, because it removes the whole lane when only a few loads cause the overload.

The table below sets the two regimes side by side on the same network. The first row describes the cut as the utility runs it today. The second row describes the same network under the lever ladder and a lifeline floor. Model values are simulated results for the heatwave evening. The ladder depends on the voluntary ask share (A01), the flexible-load share (A02) and the compliance rate (A03), all stated in §13 of the research document.

| Measure | Rotational shedding today | Selective limit with a floor (simulated) | Source |
|---|---|---|---|
| Who is cut | Whole lane, all loads | Only loads above the cap, T0 never touched | [P] |
| Outage hours per home, heatwave evening | 4.21 h | 0.40 h (base) | [M] |
| Homes cut on the heatwave evening | 4,309 | 593 (base) | [M] |
| Transformers cut | 30 of 48 | 4 of 48 (base) | [M] |
| Protection for life-support or lifeline homes | None in the rule | Lifeline floor of 300 W for T1 and 500 W for T2 | [P] |
| Notice before a cut | Not defined in the rule | At least 30 minutes, with a named approver | [P] |

The fairness argument has a second part. Under rotation the burden falls on whoever is in the lane that day. A selective rule can be designed so that the burden rotates across homes that are above their cap, and so that the same lane is not first every time. That is the point of the fairness ledger described in §16 of the research document. Here the claim is narrower: the rotation rule as applied has no variable that protects the household, and the selective rule has several.

Two external anchors frame the point. The Ministry of Power's resource adequacy guidelines say that "load shedding is not an option" because gratuitous shedding carries penalties [S22]. The reliability metrics in the same guidelines, LOLP at 0.2% and NENS at 0.05%, are the standard the utility is held to [S22]. The quoted sentence could not be re-read in verification, so it is quoted here only as the planning-time reading and not as a checked line. The metrics are treated as confirmed.

### 5.5 The cost of a blackout falls on the lowest-income homes most

Outages carry an economic cost that is not carried by the utility's books. A study of Delhi households put the willingness to pay for avoided lost consumption at USD 1.50 per kWh, more than 25 times the average grid price [S12]. The figure is in dollars because the source states it in dollars, and this document does not convert it to rupees, because the fact base holds no exchange rate. The point survives the currency: the household values the avoided outage far above the price of the electricity it would have used.

The lifeline tariff in Uttar Pradesh shows how the state already prices the poorest users. The LMV-1 category covers a contracted load of up to 1 kW and up to 100 units a month, with a fixed charge of ₹50 per kW a month and an energy charge of ₹3.00 per kWh [S13]. The verification pass confirmed these rates for FY18 to FY21 only, so the category is cited for that period and not for later years.

| Household type | Monthly use ceiling | Fixed charge | Energy charge | Source |
|---|---|---|---|---|
| LMV-1 lifeline (UP) | 100 units, 1 kW load | ₹50 per kW a month | ₹3.00 per kWh | [S13], FY18 to FY21 confirmed |
| UrjaGrid lifeline floor, T1 | Cap never below 300 W | Nil; no charge for the floor | Nil | [P] |
| UrjaGrid lifeline floor, T2 | Cap never below 500 W | Nil; no charge for the floor | Nil | [P] |

The product floors are not tariffs. They are operating limits that the software must respect, and they are the reason a lifeline household keeps a fan, a light and a phone charger during a cut. That is a different claim from a cheaper tariff, and the document does not blur the two.

### 5.6 What the root cause means for the rest of the argument

The root analysis gives three working conclusions that the later sections use.

1. The cheapest lever sits in the control-side bucket, so the solution should be measured there first. The alternative of building storage at every DT is a supply-side and network-side answer, and it arrives later (§8).
2. Any tool must act on load classes, not on lanes. Otherwise it repeats rotation at a finer grain.
3. Outage hours must be measured on the meter, not the roster, because the roster is the figure that hides the problem [S06], [S07]. The same standard applies to the impact model in §13.

These are conclusions drawn from the evidence above. They are not new facts.

---

## 6. The rails are already paid for: 7.24 crore meters with a limiter inside

**Answer.** India has already installed 7.24 crore smart meters, and the specification of those meters includes an integrated load-limiting and connect-disconnect switch [S16], [S17]. The payment for that hardware is already in the system, so a load-limit tool uses an asset the utility owns. The honest gaps are operating ones: the meters are not yet used for dispatch, the communication links are thin at the transformer and feeder, and the public has seen the programme reversed in one large state. Those gaps set the scope of what the pilot must prove.

### 6.1 The installed base is large and still growing

The Rajya Sabha reply of 30 June 2026 gives the installed base and the sanctioned pipeline. The figures are the ones the deck uses, and older counts from product documentation are stale.

| Item | Count | As of | Source |
|---|---|---|---|
| Smart meters installed, all types | 7.24 crore | 30 Jun 2026 | [S16] |
| of which under RDSS | 5.73 crore | 30 Jun 2026 | [S16] |
| Smart meters sanctioned, all types | 20.33 crore | 30 Jun 2026 | [S16] |
| Sanctioned, consumer meters | 19.79 crore | 30 Jun 2026 | [S16] |
| Sanctioned, distribution transformer meters | 52.53 lakh | 30 Jun 2026 | [S16] |
| Sanctioned, feeder meters | 2.05 lakh | 30 Jun 2026 | [S16] |

Two figures in the product documentation, 5.28 crore and 5.83 crore, are earlier readings and are not used [S16]. The sanctioned pipeline is larger than the installed base by about 13 crore meters, which means the rails are still being laid. That matters for timing. A tool built on the installed base can start in a sub-division where meters are already live and grow as the pipeline lands.

Metering coverage at the transformer is much thinner than at the consumer. A CEA status report puts DT metering at 42.30% [S09], a figure that could not be re-read against the March 2025 report in verification and is cited with that caveat. The gap matters because the transformer is the unit the impact model controls, and a DT without a meter cannot report its own shortfall.

### 6.2 The meter specification already includes the switch

The CEA technical specification for smart meters, February 2020, lists an integrated load-limiting and connect-disconnect switch among the basic features, and it requires load control under the Indian standards IS 16444 Part 1 and IS 15959 [S17]. The switch is therefore a specification requirement, not an optional add-on. The verification pass confirmed the switch and the IS 16444 Part 1 reference, and it did not re-confirm the IS 15959 reference, so the document cites IS 16444 Part 1 alone where it matters.

| Meter feature | What the specification says | Use in UrjaGrid today | Status |
|---|---|---|---|
| Integrated load limiting | Built-in switch to limit load | DLMS class 71 limiter adapter, OBIS 0.0.17.0.0.255 | WIRED, simulator [P] |
| Connect and disconnect | Built-in switch to connect or disconnect | Relay trips when a home stays above 130% for two intervals; auto-reconnect | WIRED, simulator [P] |
| Communication with the head-end | Meter talks to the head-end system per IS 16444 Part 1 | Real head-end link not yet connected | PILOT [P] |
| Load control standards | IS 16444 Part 1 and IS 15959 | Protocol mapped in the adapter | WIRED [P], [S17] |

The table shows what the rails can do and what remains to prove. The switch exists, the adapter exists, and the head-end link does not yet exist in a live form. That is why the product marks the head-end link as PILOT and not LIVE (§4.3 of the plan).

### 6.3 Meter economics show who pays for the communication

The cost of a smart meter is a useful check on whether the rails are affordable. A May 2025 Prayas review reports a median award rate for a single-phase whole-current meter of about ₹8,839 [S19]. It also reports that the service charges that AMISPs bill for the meter run from ₹60 a meter a month in West Bengal to ₹146 in Madhya Pradesh [S19]. The verification pass corrected the upper bound from ₹167 to ₹146, and the corrected figure is the one used here.

| Item | Value | Source |
|---|---|---|
| Median award rate, single-phase whole-current meter | About ₹8,839 | [S19] |
| AMISP service charge, lowest | ₹60 a meter a month (West Bengal) | [S19] |
| AMISP service charge, highest | ₹146 a meter a month (Madhya Pradesh), corrected from ₹167 | [S19] |
| Goa AMISP fee for 93 months | ₹117.50 a meter a month | [S56] |
| Share of DTs with smart meters in communicating mode | About 3% | [S19] |
| Share of installed feeder meters in communicating mode | About 28% | [S19] |

The comparison with UrjaGrid is direct. The product's fee to the DISCOM is ₹8 a meter a month [P], which is far below the AMISP service charges in the table. The difference is that UrjaGrid does not replace the meter or the communication network. It uses the limiter and the data that the meter already sends. That is the reason the fee can be small, and it is also the reason the fee does not pay for communication that is missing. Where communication is missing, the product needs the DISCOM to fund it, and the document says so in §15.

The communication gap is the largest technical risk in this section. At the transformer, about 3% of DT meters are reported in communicating mode [S19]. At feeder level the share is about 28% [S19]. A DT that is not communicating cannot be controlled by the software, which means the impact model's DT-level results depend on how many DTs in a pilot sub-division are metered and reachable. The pilot plan in §18 is built around this point.

### 6.4 Data is held in quantity and used in part

A meter that records consumption every interval generates a large stream of data. The Down To Earth report of 21 January 2026 quotes the Council on Energy, Environment and Water as saying that even advanced utilities use "less than a quarter of the available data" [S28]. The remark is attributed, and it is cited as a secondary report.

The implication for UrjaGrid is practical. The product's forecaster is trained on synthetic data and listed as PILOT for real meter data [P]. A utility that uses less than a quarter of its data has the data but not the process to use it. The pilot's first deliverable is therefore a data process, not a forecast model.

| Data use | Status in the market | Status in UrjaGrid | Source |
|---|---|---|---|
| Consumption profiles per meter | Collected, used in part | Load model built on real weather days, LIVE | [S28], [P] |
| Forecast of feeder or DT stress | Not common at utilities | Quantile forecaster coded, trained on synthetic data, WIRED | [S28], [P] |
| Voltage and quality data | Used in part | Power-flow solver coded, WIRED | [S28], [P] |
| Limit and trip events | Not used for dispatch | Dispatcher timeline coded, WIRED | [S17], [P] |

### 6.5 The UP prepaid reversal is a lesson in trust

In early May 2026 the Uttar Pradesh government moved about 83 lakh smart prepaid meters to postpaid mode, out of 86.5 lakh smart meter consumers, after consumer complaints [S20]. The verification pass corrected the announcement date to 5 May 2026. The reversal followed a central change: the CEA Metering Amendment Regulations, notified 1 April 2026, removed the mandatory prepayment requirement [S21].

The reversal teaches a point that matters for limiters. A meter that cuts supply without a notice, or without a clear rule, creates a complaint that the utility then has to reverse. UrjaGrid's design answers that failure with three rules: at least 30 minutes of notice [P], a named approver for every plan [P], and an expiry on every cap [P]. These rules do not prove that the programme will not face complaints. They do mean that a complaint can be traced to a named person and a stated rule.

| Date | Event | Lesson for a limiter | Source |
|---|---|---|---|
| 1 Apr 2026 | CEA removes mandatory prepayment | Mode of billing is no longer fixed in regulation | [S21] |
| 5 May 2026 | UP moves about 83 lakh prepaid meters to postpaid after complaints | Consumer trust is a condition of use | [S20] |
| Design response | Notice of 30 minutes, named approver, expiry on every cap | Each cut must be explainable to a household | [P] |

The UP case is secondary-sourced, and the document treats it as a warning, not as a measured result. No claim is made about how many complaints arose or how the utility handled them.

### 6.6 The product rails in one table

The table below consolidates what the product already contains. It is the bridge between the installed meters and the software, and it lists what the product does not yet do. Statuses come from the build-status audit in §4.3 of the plan.

| Rail | What the product contains | Status | Source |
|---|---|---|---|
| Limiter adapter | DLMS class 71, OBIS 0.0.17.0.0.255 | WIRED | [P] |
| Charger adapter | OCPP 1.6J SetChargingProfile, schema validated | WIRED | [P] |
| Real head-end link | Not connected | PILOT | [P] |
| Consumer fee | ₹8 a meter a month | Product constant | [P] |
| Rebate to consumers | ₹2 a kWh | Product constant | [P] |
| Peer trade charge | ₹0.42 a kWh | Product constant | [P] |
| Simulated network | 48 DTs, 12 feeders, 5 sub-divisions, 7,000 connections | LIVE, simulated | [P] |

The product is a prototype. The rails are real hardware that the DISCOM already owns, and the software is a working simulator of the control path. The distinction is stated in every section of this document.

### 6.7 What the rails cannot do yet

A reader who has followed the section so far could reasonably conclude that the meters solve the problem. They do not, and the product's own status audit says so in plain terms. The gaps below are the ones a Schneider engineer would raise first, and each one sets a condition for the pilot.

| Gap | Why it matters | What the pilot must show | Source |
|---|---|---|---|
| No live head-end link | The limiter cannot be commanded from the software on a live feeder | A signed read and write path to one sub-division's head-end | [P], plan §4.3 item 23 |
| Real charger links not live | Charger profiles cannot be set on a real charger | One charger class under a real OCPP session | [P], plan §4.3 item 24 |
| Forecaster trained on synthetic data | Forecast accuracy on a real feeder is unknown | Forecast error on a real sub-division for at least one season | [P], plan §4.3 item 28 |
| Hosted backend without persistence | Live operation needs stored state and an audit trail | Persistent protocol ledger and approval record | [P], plan §4.3 item 27 |
| Simulated network on real localities | Coordinates are approximations, so DT positions are not surveyed | Survey of DT locations and meter mapping in the pilot area | [P], §4.1 of the plan |
| Dispatcher and adapters not called by the running simulator | The safety path is tested in code, not run end to end | An end-to-end dry run on the pilot network before any live command | [P], §4.2 of the plan |

The table has a practical use. Each gap becomes a pilot milestone in §18, and no milestone is claimed as done. The product's honest status is the reason the pilot exists. The team is not asking the DISCOM to trust a finished system. It is asking the DISCOM to test a prototype under strict rules and to measure the result.

The network data also has a limit that a judge should hear from the team. The product's network is a simulated network on real Bareilly and Mathura localities, with coordinates that are approximations. The simulation therefore tests the logic of the control loop, and it does not reproduce the exact electrical behaviour of a real feeder. The power-flow solver, which would address part of this, is coded and unit-tested but not called by the running simulator [P].

A second limit concerns the demand. The load model is built from three real weather days, and those days are the basis of every simulated result in §13 [P]. A year of simulated days is built from those three days in the proportions stated in the assumptions [A04]. The model is therefore sensitive to how representative those weather days are, and the pilot must measure the real demand before any claim is carried further.

---

## 7. The rules already allow a softer lever

**Answer.** Several rules already in force or in draft point to a softer lever than rotational shedding. The consumer rules require round-the-clock supply and automatic compensation where service can be monitored remotely [S23]. A draft amendment proposes a demand-response framework, but it is a draft and not a rule [S24]. What still needs a regulator's sandbox is the exact form of a time-boxed cap, the notice rule and the consumer rebate, and those are the points to test with the state commission before scale-up.

### 7.1 The consumer rules set a duty and a compensation right

The Electricity (Rights of Consumers) Rules, 2020, promulgated on 31 December 2020, require distribution licensees to supply 24 hours a day to all consumers. Where the performance standard can be monitored remotely, compensation is paid automatically [S23]. The two rules together set a duty to supply and a right to compensation, and they do not prescribe how the utility keeps supply up during a short fall.

That gap is important. A rule that requires 24-hour supply, read alongside a remote monitoring capability, creates a claim for compensation. A limiter does not break the duty if it is used under the rules and with notice. It can, however, be read as a failure to supply if it is used without notice or with no expiry. The product's safety invariants are designed for that reading.

| Rule | What it requires | Link to a softer lever | Source |
|---|---|---|---|
| 24-hour supply | Distribution licensee supplies 24 hours to all consumers | A cap is a partial supply, so it needs a documented reason and an expiry | [S23], [P] |
| Automatic compensation | Paid where standards are monitored remotely | Remote monitoring of the cap makes compensation traceable | [S23] |
| Resource adequacy | Reliability targets and a statement that shedding is not an option | Shedding carries penalties, so a tool that avoids shedding fits the policy direction | [S22] |

### 7.2 The resource adequacy guidelines set the reliability bar

The Ministry of Power's guidelines for resource adequacy planning were notified on 28 June 2023 [S22]. They set reliability metrics that the utility is held to: the loss of load probability at 0.2% and the normalised energy not served at 0.05% [S22]. The metrics were confirmed in verification. The quoted line on load shedding was not, so it is cited only as the planning-time reading.

The metrics are the right yardstick for the impact model. The model reports outage hours per home, which is the household-level translation of the same reliability idea. It does not report LOLP or NENS, because the model does not compute capacity adequacy. A judge may ask why, and the answer is that the document measures the household outcome the brief asks about, which is outage hours against a defined baseline [D5].

### 7.3 A draft demand-response framework is in the consultation stage

The Ministry of Power issued a draft Electricity (Rights of Consumers) Amendment Rules, 2026, which add provisions on demand response [S24]. The verification pass corrected the publication date to 17 March 2026, and the draft's status as a draft is unchanged. Under the draft, state commissions would set eligibility standards and incentives for demand response providers [S24].

The draft is important because it would make the softer lever a regulated one. It is not yet in force, so the document treats it as a direction and not as a legal basis. The product's demand-response learning model is coded and tested but not called by the running simulator [P], and that is consistent with a framework that has not yet been notified.

| Item | Status | Date | Source |
|---|---|---|---|
| Draft Amendment Rules 2026, demand response provisions | Draft, not in force | 17 Mar 2026 | [S24] |
| State commission role | Sets standards and incentives under the draft | 17 Mar 2026 | [S24] |
| Product demand-response model | Coded and unit-tested, not called by simulator | Oct 2026 | [P] |

### 7.4 The India Energy Stack is a pilot with a small budget

The India Energy Stack is a government programme for energy data. Distribution utilities in Delhi, Gujarat, Andhra Pradesh, Uttar Pradesh and Mumbai have been identified for pilot implementation in FY 2026-27 [S25]. The total fund for the stack is ₹51.3 crore, of which ₹3.88 crore had been released at the time of the report [S25]. The budget is small relative to the rollout the stack will need, and the document says so.

The stack matters for UrjaGrid because it is a potential data standard. The product's consent path is listed as PILOT in §4.3 of the plan, and it is the one adapter that depends on a national programme that has not yet completed its pilots. A pilot in Uttar Pradesh would be one of the five named states. That is a reason to plan the pilot there, but it is not a reason to claim the stack is available.

### 7.5 Peer-to-peer trade has a regulated pilot charge

The Uttar Pradesh Electricity Regulatory Commission approved an interstate peer-to-peer renewable trading pilot with the Paschim Vidyut Vitran Nigam in February 2026 [S26]. The approved transaction charge is ₹0.42 per unit including GST, split equally between buyer and seller. The wheeling charge for participants is ₹1.01 per unit [S26]. The product's peer charge is set at the same ₹0.42 per kWh [P].

A peer-trade pilot is a neighbour of the lever this document proposes. It is not the same lever. Peer trade moves energy between homes, and UrjaGrid moves load within a DT. The two can share a meter and a rule set, and the document treats peer trade as a later lever, not a first one.

### 7.6 Data protection sets a rule for every household record

The Digital Personal Data Protection Rules, 2025, were notified on 13 November 2025. Most substantive provisions, including notice and consent and breach reporting, take effect about 18 months later, by May 2027 [S27]. A limiter pilot will hold household consumption records, so the data rules apply to the pilot even though the national rules are not yet fully in force.

| Obligation | Date | What it means for a pilot | Source |
|---|---|---|---|
| Rules notified | 13 Nov 2025 | Pilot design must follow the notified rules | [S27] |
| Most obligations in force | About May 2027 | Pilot before that date should still meet the same standard | [S27] |
| Consent and breach reporting | About May 2027 | Consent screens and breach process are part of the pilot scope | [S27] |

### 7.7 What still needs a regulator's sandbox

The rules above support the lever but do not yet grant the specific powers a DISCOM would need. The table lists the points that need a sandbox, meaning a time-limited regulatory approval for a pilot, and the reason each one matters.

| Point | Why it needs a sandbox | Proposed approach | Source |
|---|---|---|---|
| Time-boxed cap below the normal supply level | The rules require 24-hour supply; a cap is a partial supply | Written approval for a pilot sub-division, with the lifeline floor and expiry | [S23], [P] |
| Notice of at least 30 minutes | No notice period is set in the rules | Pilot notice rule agreed with the state commission | [P] |
| Consumer rebate of ₹2 a kWh | Rebate rules are not in the rules | Pilot tariff order, as with the UPERC peer-trade order | [S26], [P] |
| Automatic reconnection after a trip | Not set in the rules | Pilot rule that reconnects within a set window | [P] |

The sandbox request is the first thing a Schneider engineer would ask about, and the deck and the document both answer it in the pilot section.

### 7.8 The product's safety invariants answer the rules

The rules above leave several points open. The product answers them with six safety invariants, each backed by a test in the codebase [P]. The table maps each invariant to the rule or regulatory point it addresses. It is the closest the document comes to a compliance matrix, and a regulator can check it line by line.

| Invariant | Rule or point it addresses | Why it is needed | Source |
|---|---|---|---|
| T0 is never capped | Critical loads and life-support homes | The sandbox request must show that critical supply is untouched | [P], [S23] |
| No cap goes below 300 W | Continuous supply duty | A cap is a partial supply, so it needs a floor | [P], [S23] |
| Every cap carries an expiry | Time-boxed partial supply | A cap that does not end is a permanent cut in practice | [P] |
| Every cap gets at least 30 minutes of notice | Notice rule, not set in the rules | A household needs time to change its use | [P] |
| Nothing dispatches without a named approver | Accountability for each cut | A complaint must trace to a person and a rule | [P], [S20] |
| No LLM SDK is imported in any engine | Auditability of the engines | Engines must compute the same result each time, so a regulator can rerun them | [P] |

The invariants are the answer to the sandbox list in §7.7. Each one can be offered to a state commission as a condition of the pilot. None of them is a claim that the regulator has accepted it, because no regulator has been asked yet. The six invariants are tested in code, and that is the strongest statement the document can make without a pilot.

The table also shows where the rules are silent. The rules say nothing about notice, floors or expiry, and the invariants fill those gaps. A judge who asks which rule the invariants implement will get a direct answer: none of them is required by a rule that exists today, and each one is a condition the pilot proposes to the commission.

### 7.9 Reading the rules as a sequence

The rules are best read in the order a pilot would meet them. First comes the duty to supply [S23]. Second comes the reliability target that the utility plans against [S22]. Third comes the draft that would give demand response a regulated footing [S24]. Fourth comes the data rule that governs every household record [S27]. The DISCOM must satisfy all four before a limit can run on a live feeder, and the order makes clear which approval comes first.

The order also shows what is missing. Nothing in the four rules says how a cap is noticed, how long it lasts, or how a household is protected while it is in force. Those are the design choices in the invariants, and they are the choices the commission will examine. The team's position is that the rules permit a pilot to be designed well, and that the design, not the rule, is what makes a limit fair.

The first approval is the one the pilot cannot skip. A DISCOM that agrees to a six-week shadow run, with no live command, needs no new rule to begin. The live stage needs the sandbox, and the draft framework would give state commissions a route to set eligibility and incentives for demand response if it is notified [S24]. Both stages are in the pilot plan in §18 of the research document.

---

## 8. Options appraisal: storage is a lever, not a prerequisite

**Answer.** The brief lists five directions that could help: community storage, microgrid control, peer trading, low-cost forecasting and DISCOM dashboards [I1 to I5]. Scored on five tests, the software lever is the only one that is both quick and free of new capital, while storage is the strongest supporting lever once it is built. Storage economics are falling, but India has awarded far more capacity than it has installed, so a storage-first plan carries a timing risk for a low-income lane that cannot wait. This section argues that storage should be the fourth lever, plugged in when it exists.

### 8.1 Five tests define the appraisal

The tests come from the brief and from the case itself. Each one can be checked against a source or a model output.

| Test | Question | Source of the test |
|---|---|---|
| T1 Time to first effect | Can it change outage hours within one season? | [D5] measured against a baseline |
| T2 Capital need | Does it need new grid or household capital? | [X4] "without requiring major capital investment" |
| T3 Low-income access | Can a low-income household use it without paying for hardware? | [G3] "Be Genuinely Affordable" |
| T4 Local operation | Can a neighbourhood or DISCOM operate it with minimal grid intervention? | [G2] "Stay Local and Manageable" |
| T5 Evidence today | Is there working evidence in India or abroad? | Plan §4.3 status audit and [S37] |

### 8.2 The five suggested directions and UrjaGrid, scored

The table scores the five suggested directions and UrjaGrid on the five tests. The scores are qualitative. Each cell gives a reason, and the reason is the thing a judge should test. No cell is a number, so no score is claimed to be more precise than the evidence allows.

| Option | T1 Time to effect | T2 Capital need | T3 Low-income access | T4 Local operation | T5 Evidence today |
|---|---|---|---|---|---|
| I1 Community storage, second-life batteries | Slow. Procurement of storage was 10.4 GW awarded in 2025 but about 1.8 GWh installed by March 2026 [S45] | High. Capacity tariffs are ₹3,591 to ₹5,700 per kW a year [S48], [S47] | Partial. Kilokari serves over 12,000 low-income consumers [S47], but at a regulated charge | Partial. Needs a DISCOM contract | Good in Delhi tariff orders [S47], [S48] |
| I2 Microgrid control software | Medium. Mini-grid rates are ₹10 to ₹20 a kWh against ₹3 to ₹6.5 rural grid tariffs [S49] | High. Needs generation and storage | Weak. Mini-grid power is priced above grid rates | Good, if it is built | Mixed in India; secondary sources only [S49] |
| I3 Peer-to-peer and cooperative sharing | Medium. Pilot charge of ₹0.42 a kWh approved in UP [S26] | Low to medium | Partial. Needs a meter with a trade record | Partial. Needs a regulatory pilot | Early; one interstate pilot approved [S26] |
| I4 Low-cost forecasting and scheduling | Fast to build, but no effect without a control path | Low | Good, if sold to the utility | Good | Coded, not called by the simulator [P] |
| I5 DISCOM analytics dashboards | Fast. Advice only, no outage change alone | Low | Indirect. Helps the utility, not the home | Good | Commercial products exist; Itron and Fluentgrid list such features [S52], [S53] |
| UrjaGrid, software on installed meters | Within a season, in a pilot sub-division | Low. Fee of ₹8 a meter a month [P] | Good. No hardware for the home; floor of 300 W for T1 [P] | Good. Named approver, DISCOM-operated [P] | Prototype LIVE for the simulator; head-end PILOT [P] |

The UrjaGrid row is the one a judge should test hardest. It scores well on the first, second and third tests because it uses hardware already in the field. It scores less well on the fifth test, because the head-end link is a pilot and not yet live. The honest reading is that UrjaGrid is quick and cheap but unproven on a real feeder. That is why the pilot is the first deliverable.

Dashboards (I5) and forecasting (I4) are not rejected. They are the inputs to the control loop. The product already includes both, as coded but unconnected engines [P]. The argument is that dashboards alone do not change outage hours, and so they are a component, not the solution.

### 8.3 Storage economics cut both ways

Storage is the obvious answer to the evening gap, so the economics are tested here in both directions. The case for storage is that the cost per kWh cycled has fallen sharply. The case against is that India has awarded more capacity than it has built, and that the capacity tariffs remain high relative to a software lever.

| Measure | Value | Date | Source |
|---|---|---|---|
| Standalone storage awarded in 2025 | 10.4 GW | 2025 | [S45] |
| Storage installed by March 2026 | About 1.8 GWh | Mar 2026 | [S45] |
| Share of 2-hour capacity at risk | Nearly 75% | May 2026 | [S45] |
| Cost per kWh cycled, two cycles a day | ₹2.1 | Dec 2025 | [S46] |
| Cost per kWh cycled, 1.5 cycles a day | ₹2.8 | Dec 2025 | [S46] |
| Cost per kWh cycled, 2022-23 | ₹10.18 | Dec 2025 | [S46] |
| Kilokari distribution battery, capacity charge | ₹57 lakh per MW a year, 20 MW and 40 MWh | May 2024 | [S47] |
| Shivalik distribution battery, capacity charge | ₹35.91 lakh per MW a year, 12.5 MW and 25 MWh | Sep 2026 | [S48] |
| Viability gap funding for 30 GWh | ₹5,400 crore, UP 1.5 GWh | Jun 2025 | [S31] |

The capacity charges convert to ₹3,591 and ₹5,700 per kW a year [S47], [S48], which is the figure the impact model uses as its battery comparison [A09]. UrjaGrid's base-case cost is ₹1,448 per kW of peak relief a year [M], est. The comparison is a simulation estimate and not a measured tariff, and it should be read that way. The software is cheaper per kW of relief than either battery tariff in the base case. In the bear case the cost is ₹1,829 per kW [M], est., which is still below the lower battery tariff.

The comparison has a limit. A battery provides energy as well as capacity, and the software provides only shifted or capped load. A judge who asks whether a battery could do more will be right. The answer is that the battery is the fourth lever in UrjaGrid's ladder, and the document does not claim that software replaces storage in every case.

### 8.4 Mini-grids cost more per unit than the grid

A mini-grid serves a neighbourhood with its own generation and storage. The CSE comparison puts mini-grid rates at about ₹10 to ₹20 a kWh, against rural grid tariffs of ₹3 to ₹6.5 a kWh [S49]. The source was corroborated only through secondary reporting, so the figure is cited at medium confidence.

The implication is that a mini-grid is an expensive answer for a household that already has a grid connection. It makes sense in places with no grid, which is not the case in the two districts of the simulated network. The product's microgrid control, if built, would sit on a grid that already reaches the homes.

### 8.5 What would change our mind

A balanced appraisal names the conditions under which the recommendation would be wrong. Three conditions are stated here, each with its measure.

1. If storage capacity tariffs fall well below ₹1,448 per kW a year, the battery becomes the cheaper relief per kW, and the lever order should change. The current tariffs are ₹3,591 and ₹5,700 [S47], [S48].
2. If the evening shortfall is much larger than in the heatwave day, the software ladder runs out of load to shift. The stress test shows this at 40% extra evening shortfall, where the base case rises from 0.40 hours to 1.00 hours per home [M], est.
3. If the pilot finds that DT-level communication is too thin to act on, the software cannot reach the transformers that need it. Communication at DT level is about 3% [S19].

The first condition would move storage up the ladder. The second would call for more storage in the same sub-division. The third would stop the rollout and move the work to the communication network. None of the three is observed today, and the document says so.

### 8.6 The timing argument decides the order for a low-income lane

The order of levers depends on time, and for a low-income lane time is the decisive factor. A storage asset takes years to procure, finance and commission. A software lever on installed meters takes a season. The brief itself stresses that expensive grid improvements "may take considerable time to reach these communities" [X3].

Put plainly, the household in the lane cannot wait for a battery to be built. It can wait for a pilot in a season. The option scored best on time and capital is therefore the first one deployed. Storage then arrives as a lever that the same software can dispatch, and the ladder in §10 of the research document shows where it fits.

### 8.7 Cost per home compared across the options

The brief asks for affordability to be proven, not asserted [G3], [D6]. The comparison below uses the only per-home and per-kW figures the document holds. Software costs come from the model. Storage costs come from the DERC tariffs. Home-side costs are shown as absent, because the design places no hardware on the home.

| Option | Who pays | Cost to the home | Cost per unit of relief | Source |
|---|---|---|---|---|
| UrjaGrid base case | DISCOM, about ₹383 a meter a year | ₹0 | ₹1,448 per kW of peak relief a year, est. | [M], [A07], [A08] |
| UrjaGrid bear case | DISCOM, about ₹309 a meter a year | ₹0 | ₹1,829 per kW a year, est. | [M] |
| Community storage at the Kilokari tariff | Charge to the consumer base | Passed through in tariff | ₹5,700 per kW a year | [S47] |
| Community storage at the Shivalik tariff | Charge to the consumer base | Passed through in tariff | ₹3,591 per kW a year | [S48] |
| Home inverter and battery | The household | Not used in the argument, see §8.8 | Not stated; price under re-check | [S51], [A10] |
| Mini-grid tariff | The consumer | Mini-grid rate of ₹10 to ₹20 a kWh | Not computed | [S49] |

The table is a comparison of kinds of cost, not a like-for-like tariff. The software cost is a DISCOM cost on the meter base, and the storage cost is a tariff paid through the consumer base. The document says so in the notes, and it does not add the two as if they were the same kind of money.

### 8.8 The home inverter comparator is withdrawn for now

The earlier version of the argument compared the software with a home inverter and battery at a cost of ₹2,800 to ₹3,800 a year. That comparator rested on a retail listing for a 1,100 VA inverter with a 150 Ah battery priced at ₹14,000 to ₹19,000 [S51], [A10], [A11]. The verification pass could not confirm the listing, because the page no longer carried the claim. Current retail listings for that specification were found at ₹19,490 to ₹30,498 [S51].

Under the corrections protocol, a figure that fails verification and is not High confidence must be removed from the argument. The home inverter comparison is therefore withdrawn from this document until a verified price is found. The consequence is small. The argument does not depend on the inverter comparison, because the home pays nothing under the design [P], and the comparison of the home's cost is made against zero. The inverter remains relevant as a coping measure, and the 44% figure below is cited for that purpose only [S14].

| Coping fact | Value | Date | Status | Source |
|---|---|---|---|---|
| Households with an inverter or similar device | 44% | May 2022 | Verified; online urban sample, low to medium confidence | [S14] |
| Home inverter and battery price | Not confirmed | 2026 | Withdrawn until re-priced | [S51] |

### 8.9 The lever order follows the cost and the time

The lever order in the product is the order a low-income lane can afford and a utility can approve. The table sets the order out, with the reason for each step. The order matters because the impact model applies the levers in sequence, and an earlier lever reduces what a later one must do [M].

| Order | Lever | Why this place | Source |
|---|---|---|---|
| 1 | Voluntary ask to T1 and T2 homes | Lowest cost and fastest to run; the share responding is an assumption | [A01], [M] |
| 2 | Deferral of flexible T3 load | Uses load that can wait without harm; share is an assumption | [A02], [M] |
| 3 | Cap at the lowest level that closes the gap | Used only after the first two. Levels 1 to 3 cap T1 homes at 1,000, 500 and 300 W, and T2 homes at 2,000, 1,000 and 500 W | [P], [M] |
| 4 | Storage dispatch when it exists | Plugs in only where a battery is already installed | [S45], [P] |
| Last | Blackout by the ordinary rule | Used only when the ladder cannot close the gap. A DT above 130% for two intervals is out for eight intervals, two hours | [P], [M] |

The order is an argument in its own right. The first lever spends no household money and no utility capital. The last lever is the one the brief most wants to avoid. The order makes the cost of each step visible, so the DISCOM can stop at any point it judges enough.

### 8.10 Where the appraisal could be wrong

The appraisal depends on five judgements, and the document names each one because a judge will look for them.

1. The scores on T1 assume a pilot can start in a sub-division within a season. A slower approval would move UrjaGrid's score down on the first test.
2. The scores on T2 treat the DISCOM fee as the only capital. A DISCOM that funds communication upgrades would raise the capital need, though the upgrades would be needed by any option that uses meters.
3. The scores on T3 assume a low-income household needs no hardware. That holds for the design, but a household with no meter or no connection is outside the lever.
4. The scores on T4 assume a named approver is available each day. A DISCOM with few engineers would find the approval step the bottleneck.
5. The scores on T5 rest on prototype evidence and on one approved interstate peer-trade pilot. They are weaker than the evidence for storage tariffs, and the document says so.

Each judgement is testable in the pilot, and each one is listed in the validation plan in §21 of the research document.

---

## 9. Precedents: limiting beats cutting where it has been tried

**Answer.** Three precedents show that a load limit can work when it is used in place of a cut: Eskom in South Africa, Germany's §14a rule and the French Linky test. Each one kept the household on supply at a reduced level, and each one reported customer acceptance or reduced use. None of them was a perfect model for India. The precedents also carry failures that the document states plainly, including a relay trip after a limit is exceeded and the exclusion of vulnerable customers from a test. The lesson for UrjaGrid is to borrow the limit and change the rules that made the precedents hard for customers.

### 9.1 Eskom load limiting, the closest precedent

Eskom's load-limiting pilot began with about 9,000 smart meters, and the number grew to 12,506 by September 2023 [S33]. Each meter limited the household's supply to a 10 A level during stages one to four of the shortage, rather than cutting the supply. The case study reports an average relief of 15.3 MW over seven events and a reliance of 1 kW per meter [S33]. Those figures were confirmed in one verification pass and were not re-confirmed in a second pass, so they are cited as reported.

Eskom's customers received the scheme better than a cut. The case study records that the limit was "well received and favoured by customers over loadshedding" [S33]. The second verification pass did not confirm the exact wording of that line, and the claim is therefore stated in the document as the case study's own finding. The national rollout began in January 2024, and the case study advises that all feeders should be smart before the scheme is used at scale [S33].

The consent figure is also relevant. Customers who agreed to remote limiting were paid R90 a month, and the limiting events could occur up to ten times a month and last no more than two hours each [S34]. The payment is a precedent for the rebate that UrjaGrid pays at ₹2 a kWh of reduced use [P]. The two schemes pay in different ways, and the document treats the Eskom payment as the reference for consent, not for price.

| Eskom fact | Value | Verification status | Source |
|---|---|---|---|
| Pilot meters | About 9,000; 12,506 by Sep 2023 | Confirmed in one pass | [S33] |
| Limit level | 10 A at stages one to four | Confirmed in one pass | [S33] |
| Average relief | 15.3 MW over seven events | Reported; not re-confirmed in second pass | [S33] |
| Load per meter relied on | 1 kW | Reported; not re-confirmed in second pass | [S33] |
| Response after fixes | At least 70% | Reported; not re-confirmed in second pass | [S33] |
| Consent payment | R90 a month | Confirmed | [S34] |
| Events | Up to 10 a month, no more than 2 hours each | Confirmed | [S34] |

### 9.2 Eskom's failures are part of the record

The case study does not describe a clean success. The response reached at least 70% only after faults were fixed, which means the first results were lower [S33]. Meters that did not comply were disconnected, and the case study advises that feeders should be all-smart before the scheme is used [S33]. These facts are the failures the document must name.

The limit itself has a known weakness. A home that stays above the limit for long enough is disconnected by the relay, and the same behaviour is designed into UrjaGrid's trip rule, where a DT above 130% for two intervals is out for eight intervals, two hours [P]. The difference is that UrjaGrid publishes the trip rule, gives notice before it applies, and names the person who approved it. The document says the trip exists and does not describe the limiter as a switch that never cuts a home off.

### 9.3 Germany's §14a rule sets a legal floor for a limit

Germany's Section 14a of the Energy Industry Act has applied since 1 January 2024. Under it, network operators may reduce the draw of controllable devices to 4.2 kW, and they may not refuse new connections on the ground of local congestion [S35]. The regular household supply is not affected [S35]. The Bundesnetzagentur confirms the rule on its own site, so the source is primary.

The German rule matters because it draws a line that UrjaGrid also draws. Only controllable devices are reduced, and the household's base load is left alone [S35]. The product's T0 class is the equivalent of that line: critical loads are never capped [P]. The German rule is a legal floor for a limit, and it is the model for the lifeline floor in India.

### 9.4 France's Linky test shows the effect and the exclusion

Enedis, the French distribution company, tested the limiting of Linky meters on about 115,000 homes. The homes were limited to 3 kW for two hours in the test windows. Their consumption fell by 20% during those windows [S36]. The test excluded every customer with a high vital risk, which the Enedis report calls patients at high vital risk [S36].

The French test is a double lesson. It shows that a limit can lower use at a predictable rate, and it shows that a responsible utility excludes the most vulnerable homes from the test. The verification pass confirmed both points. UrjaGrid's equivalent is the T0 class, which holds critical loads outside the cap [P], and the lifeline floor for T1 and T2 homes [P].

### 9.5 Indian demand response shows the effect of reward rates

Three Indian precedents are relevant to the behaviour side. The Indian Growth Centre study of 930 homes in Delhi and Mumbai found that automated switch-off events cut household demand by 8.5%, and that the cut rose to 15% in the late afternoon and evening [S38]. The study also found that higher rewards did not raise the response. The verification pass confirmed the rate-reward finding in substance, and the document paraphrases it without a quotation.

Tata Power-DDL runs a behavioural demand-response programme with incentives of ₹50 or ₹100 per event and alerts by SMS, call, WhatsApp and email [S39]. The company reports that it had enrolled over 100,000 customers by FY25 [S39], which was confirmed through a secondary report and not on the programme page itself. Tata Power also announced in February 2023 a plan to scale capacity reduction to 200 MW by the summer of 2025 with AutoGrid, but the achieved results were not published [S40].

| Indian precedent | Scale | Result | Confidence and status | Source |
|---|---|---|---|---|
| IGC automated switch-off study, Delhi and Mumbai | 930 homes | 8.5% cut at events; 15% in evening; no added response to higher rewards | High; policy brief Oct 2024 | [S38] |
| Tata Power-DDL behavioural demand response | Over 100,000 customers by FY25 | ₹50 or ₹100 per event; alerts by SMS, call, WhatsApp | Customer count secondary; incentives primary | [S39] |
| Tata Power Mumbai with AutoGrid | Target 200 MW by summer 2025 | Results not published | Target only | [S40] |

The Indian evidence is about behaviour and incentives, not about hard limits. It is the evidence that supports the notice and reward design in §10 of the research document. It is not evidence that a hard limit works in India, and the document says that the pilot must establish it.

### 9.6 The UK's Demand Flexibility Service shows scale

The UK's Demand Flexibility Service had 1.98 million consumers registered for winter 2024/25, up from 1.6 million two years earlier. Participants reduced or shifted 3,917.7 MWh in that winter [S41]. The NESO source is primary and was confirmed in verification.

The UK figure is evidence that a voluntary service can reach a large number of consumers when the rules are simple and the incentive is clear. It is not a limit, and the document does not present it as one. It supports the first lever, which is the voluntary ask, and it shows that enrolment can be counted in the same way the impact model counts response.

### 9.7 The IEA sets the cost claim and the equity warning

The International Energy Agency's December 2025 report on the value of demand flexibility says that flexibility "can also deliver capacity to the grid at a cost up to three times lower than building new capacity" [S37]. The quotation was confirmed word for word in both verification passes, and the document uses it exactly.

The same IEA report warns about equity. Two verification passes did not agree on the exact wording of that warning. One pass confirmed a sentence about flexibility programmes risking the exclusion of groups. The second pass, which quoted the report's own text, found different wording: limited public awareness and unequal access to enabling technologies risk excluding some groups, undermining fairness and trust. The document uses the second wording, which is the one with a verbatim source, and paraphrases the point rather than quoting it. The plan's own conflict log should resolve this before the pitch quotes the sentence.

### 9.8 What UrjaGrid borrows and what it changes

The table below states what the precedents give UrjaGrid and what UrjaGrid does differently. The right-hand column is the part a judge will test, and it is the part the document must keep honest.

| Precedent | What UrjaGrid borrows | What UrjaGrid changes | Source |
|---|---|---|---|
| Eskom load limit | The idea of a limit in place of a cut | Adds a 30-minute notice, a named approver and an expiry on every cap | [S33], [P] |
| Eskom consent payment | A consent-based design | Pays a rebate of ₹2 a kWh for reduced use, not a monthly fee | [S34], [P] |
| Germany §14a | Limit only controllable devices; base load is left alone | Adds a lifeline floor of 300 W for T1 and 500 W for T2 | [S35], [P] |
| France Linky test | Predictable reduction in use over a window | Excludes no vulnerable home; T0 is never capped | [S36], [P] |
| IGC Indian study | Notice and automated events raise response | Uses the lever ladder before any cap, so reward rate matters less | [S38], [M] |
| Tata Power-DDL | Incentives per event by SMS and WhatsApp | Adds a named approver and a printed trip rule | [S39], [P] |
| UK DFS | Voluntary enrolment at scale | Adds a hard cap as the last lever, with a stated expiry | [S41], [P] |
| IEA cost claim | Flexibility as a lower-cost route to capacity | Measures the claim on outage hours, not on capacity | [S37], [M] |

The changes are the argument. The precedents show that limits can be used, and the changes show how UrjaGrid avoids the failures the precedents recorded. Whether the changes work is the question the pilot in §18 is built to answer.

### 9.9 Precedents do not transfer as results

The precedents are foreign, and the document does not convert their results into Indian results. The Eskom relief of 15.3 MW does not become an Indian figure. The German limit does not become an Indian rule. The IEA cost claim is global, and the document cites it as a global estimate.

This is the standard the brief and the research document both require. The Indian results are the simulation results in §13 and the pilot results to come. The precedents are reasons to believe the design is worth testing, and nothing more.

### 9.10 A failure log across the precedents

The precedents are used in this document because they carry failures as well as results. The log below lists each failure that the sources record or that the design must avoid. A judge who asks what went wrong elsewhere should find the answer here, with a source for each line.

| Precedent | Failure recorded or implied | How UrjaGrid responds | Source |
|---|---|---|---|
| Eskom | Response reached 70% only after faults were fixed | Pilot starts with read-only shadow mode before any live command | [S33], [P] |
| Eskom | Non-compliant meters disconnected | Compliance rate is a stated assumption, 85% in the bear case | [S33], [A03] |
| Eskom | A home above the limit for long enough is disconnected | Trip rule is printed, has notice, and names an approver | [S33], [P] |
| Germany §14a | Local congestion used as a reason to refuse new connections, now barred | UrjaGrid does not refuse a connection on congestion | [S35] |
| France Linky | At-risk customers excluded from the test | T0 and life-support homes are excluded from every cap | [S36], [P] |
| Indian DR pilots | Higher rewards did not raise response | Notice and the lever order matter more than the reward rate | [S38], [M] |
| Tata Power Mumbai | Achieved results not published against a 200 MW target | Pilot publishes its own results, including misses | [S40], [D5] |
| Uttar Pradesh prepaid | 83 lakh meters moved back to postpaid after complaints | Notice, named approver and expiry are part of the design | [S20], [P] |

The log is the reason the pilot is built as a measurement and not a demonstration. Three of the failures are about trust, one is about payment, and the rest are about technical limits. The UrjaGrid design answers each one with a rule or a test that can be checked.

### 9.11 What the precedents leave open for India

The precedents answer some questions and leave others open, and the document lists the open ones so the pilot can close them.

1. No precedent above is an Indian feeder with Indian meters, Indian tariffs and Indian demand. The Eskom case is the nearest in size and in the use of a limit, but it is South African.
2. The precedent sources in the fact base do not report outage hours on a shortfall day, which is the metric this document uses [D5]. The impact model supplies that figure as a simulation, and only a pilot can measure it.
3. The precedents do not show how a lifeline floor behaves when a whole lane is short at once. The model shows the floor binding at the heatwave peak, and the pilot must confirm it [M], [P].
4. The Indian precedents measure behaviour under voluntary events. They do not measure a hard limit. The UK and Indian programmes support the voluntary lever, and only the Eskom and Linky tests support a hard limit.

The open questions do not weaken the argument. They define what the pilot is for, and they give the DISCOM a short list of results to check before any wider rollout.
