## Appendix C. Glossary

**Answer.** The terms below are the ones the document uses, grouped by what they describe: the grid and its reliability, the meter and the data it sends, the control and the protocols, the model and its statistics, and the regulation and the money. Each entry says what the term means in this document. Where the product uses a term, the entry says whether the product's code is LIVE, WIRED or PILOT for it, using the status audit in §4.3. Where a term is named by a source but is not part of the product, the entry says so.

### C.1 Grid, reliability and the network

| Term | Meaning in this document |
|---|---|
| AT&C loss | Aggregate technical and commercial loss: the share of energy a distribution utility puts into its network that it does not bill and collect. The UP figure for FY25 is 19.54% and the national figure is 15.04% [S11] |
| Blackout | A complete loss of supply to a home. The document's position is brownout, never blackout: a capped home keeps a floor of supply |
| Brownout | A reduced supply, for example a home held to 300 W, that keeps the lights and a fan on |
| Cap level | One of the three limits on a home or shop's supply: comfort, essential or lifeline. The home and shop values are 1,000 and 2,000 W, 500 and 1,000 W, and 300 and 500 W [P] |
| DISCOM | Distribution company: the utility that buys power and runs the wires to homes. The two DISCOMs in the seed network are MVVNL in Bareilly and DVVNL in Mathura [P] |
| DT | Distribution transformer: the pole or plinth transformer that steps supply down to the homes on its feeder. The seed network has 48 DTs with 10,105 kVA in total [P] |
| Feeder | The 11 kV line from a substation that serves a group of DTs. The seed network has 12 feeders [P] |
| Lifeline | The minimum supply a home keeps under a cap. In the product it is 300 W for a home and 500 W for a shop, and T0 connections are never capped [P] |
| Load shedding | Cutting a block of consumers' supply to keep a network within its limit. In UrjaGrid it is the last step, after the levers in §10 |
| Outage hour | One hour in which a home has no supply. The model counts an outage slot as 0.25 hours for each 15-minute slot [M] |
| Rebound | The part of a lever's relief that returns later. The product's rebound is 30% and it is released at 15% a slot [P] |
| Sub-division | A group of feeders and DTs under one DISCOM engineer. The seed network has five sub-divisions [P] |
| Supply availability | The share of connections with supply over a period. The simulated heatwave day shows 82.5% today and 98.3% in the base case [M] |
| Thermal limit | The load at which a transformer's winding runs hot enough to age faster. The product uses IEEE C57.91 reference points: 110.0 °C at rated load and 1.0x, and 146.1 °C at about 29x at 1.2 pu and 42 °C [P] |
| Trip | The automatic opening of a DT or a home's relay when the load stays too high. The product's rule is a load above 130% for two slots, which takes the DT out for eight slots, or two hours [P] |

### C.2 Meters, data and the head-end

| Term | Meaning in this document |
|---|---|
| AMISP | Advanced metering infrastructure service provider: the company that installs, communicates with and maintains smart meters for a DISCOM, usually for a monthly fee per meter. The state-average fee ranges from ₹60 to ₹146 a meter a month [S19] |
| DLMS / COSEM | The standard protocol family for smart meters. The product's limiter adapter uses DLMS class 71 for the load-limit object [P] |
| HES | Head-end system: the server that sends commands to meters and collects their reads. The pilot's first link is a real HES [P] |
| IS 16444 | An Indian standard for smart meter communication. The CEA meter specification refers to it for the meter's communication with the HES [S17] |
| IS 15959 | An Indian standard for electricity meters, cited with IS 16444 in the CEA meter specification [S17] |
| Load limiter | A switch in the meter that can cap or disconnect load. The CEA specification lists an integrated load limiting and connect or disconnect switch as a basic feature [S17] |
| MDM | Meter data management: the system that stores and validates the reads from meters. The link to a real HES and MDM is a PILOT item in the status audit [P] |
| OBIS | Object identification system: the code that names each value in a DLMS meter, such as the load-limit object [P] |
| RDSS | Revamped Distribution Sector Scheme: the government scheme under which most of the smart meters in this document are being installed. Installed meters are 7.24 crore, of which 5.73 crore are under RDSS [S16] |
| Smart meter | A meter that records reads at intervals and can be read or controlled remotely. The count installed on 30 June 2026 was 7.24 crore [S16] |

### C.3 Control, protocols and flexibility

| Term | Meaning in this document |
|---|---|
| Beckn | An open protocol for discovery and transactions across networks. The product's Beckn and UEI adapter is WIRED [P] |
| Cap | A limit with an expiry on a home's or a shop's supply. Every cap has at least 30 minutes of notice in the product's rule [P] |
| Demand response (DR) | A change in a consumer's load in response to a signal, paid or rewarded. The product's DR learning model is WIRED, and the simulated base case shifts 658,572 kWh a year [M] |
| DERMS | Distributed energy resource management system: software that coordinates distributed generation, storage and flexible loads. Schneider's DERMS product covers peak load management and load relief [S44] |
| ADMS | Advanced distribution management system: software that runs a feeder's switching and monitoring. It sits above the meter in the grid stack, and UrjaGrid works below the transformer [S44] |
| India Energy Stack | A government digital platform for energy services, with pilots in five states in FY 2026-27, including Uttar Pradesh [S25] |
| OCPP | Open Charge Point Protocol: the standard for communication between EV chargers and a central system. The product uses OCPP 1.6J and the charging profile command, schema-validated [P] |
| OpenADR | An open standard for automated demand response events between utilities and customers. The product's adapter is OpenADR 3 [P] |
| P2P | Peer-to-peer energy trading between users. A UPERC-approved interstate pilot sets a ₹0.42 a kWh transaction charge including GST [S26] |
| Shared storage | Battery storage owned or used by a group of consumers. In the research it is lever 4, and the product's dispatch for storage is WIRED [P] |
| UEI | The India Energy Stack interface term that the product's Beckn/UEI adapter follows. The adapter is WIRED and runs against a simulator [P] |
| VGF | Viability gap funding: a government grant that makes a project viable where its revenues fall short. Tranche 2 offers ₹5,400 crore for 30 GWh of battery storage [S31] |
| Lever | One step in the ladder for a short DT, in order: voluntary ask (lever 1), flexible-load deferral (lever 2), and the lowest cap level that closes the gap (lever 3). Lever 4 is shared storage, which is coded but is not part of the simulated ladder (§3.2, §21.3). Each lever is applied only to the DT that is short [P, M] |
| Tier T0 to T3 | The product's four classes of connection. T0 is critical and is never capped, asked or shed. T1 and T2 are the connections the voluntary ask and the caps act on, and T3 is the flexible group whose load can be deferred. The seed network has 69, 4,863, 1,463 and 605 connections [P, M] |

### C.4 Model, statistics and software

| Term | Meaning in this document |
|---|---|
| Bear, base, bull | The three cases of the model, from the least to the most favourable assumptions. The base case is the one the deck quotes [M] |
| Beta-Bernoulli | A simple model of a yes or no response that updates a probability as results arrive. The product's DR learning uses it [P] |
| BESS | Battery energy storage system: a battery and its power electronics as one asset |
| Conformal prediction | A way of wrapping a forecast in an interval with a stated coverage. It is not part of the audited product and is named here only because it may be asked about |
| Gini coefficient | A measure of inequality between 0 and 1, where 0 is equal shares. The product computes it in its fairness indices, which are WIRED [P] |
| Jain's index | A fairness index between 0 and 1, where 1 is an equal distribution of the burden. The product computes it, and it is WIRED [P] |
| Lorenz curve | A plot of the cumulative share of a burden against the cumulative share of people. It shows how unequal the burden is, and the product computes it, WIRED [P] |
| LightGBM | A gradient-boosted tree library. The product's forecaster is a LightGBM quantile model with three quantiles and 13 features, trained on synthetic data [P] |
| MILP | Mixed-integer linear programme: an optimisation with both whole-number and continuous variables. The product's optimiser uses HiGHS MILP with a tested greedy fallback [P] |
| Pu | Per unit: a value divided by a base value. The product's trip rule and the overload stress test use per-unit loading, for example 1.2 pu [P] |
| Quantile | A value below which a stated share of outcomes fall. The forecaster predicts three quantiles so that it gives a range, not a single figure [P] |
| Rebate | The payment that a home receives for shifting load before a cap. In the product it is ₹2 a kWh [P] |
| Simulated | A model output produced by running the model on the seed network and assumptions. Every result of the impact model is simulated or an estimate [M] |
| Shortfall | The gap between the power a DT can supply and the demand on it, in kW or as a share of demand. A DT is a shedding candidate when the shortfall is above 3% [P] |
| Estimate (est.) | A number built from stated assumptions and not measured. The document labels every model output as simulated or est. |
| Hot-spot | The point in a transformer where the winding temperature is highest. The IEEE C57.91 model estimates it from the load and the ambient temperature [P] |
| kVA | Kilovolt-ampere: the apparent power rating of a transformer. The seed network's DT ratings are 9 units of 100 kVA, 14 of 160 kVA, 14 of 250 kVA and 11 of 315 kVA [P] |
| SAIDI | System average interruption duration index: the average outage minutes per customer in a year. The product's fixture values for SAIDI are never quoted in this document (§3.7) |
| SAIFI | System average interruption frequency index: the average number of interruptions per customer in a year. Its fixture values are never quoted (§3.7) |
| LOLP | Loss of load probability: the chance in a year that demand exceeds supply. The Ministry's target, as reported, is 0.2%; the figure is marked for re-check (§21.2) [S22] |
| NENS | Normalised expected non-served energy: the share of demand expected to go unserved. The Ministry's target, as reported, is 0.05%; the figure is marked for re-check (§21.2) [S22] |
| VoLL | Value of lost load: what consumers would pay to avoid an outage of energy. The published figure for Delhi is USD 1.50 per kWh of lost consumption [S12] |
| ToD | Time of day: a tariff that charges more at peak hours |

### C.5 Regulation, bodies and programmes

| Term | Meaning in this document |
|---|---|
| CEA | Central Electricity Authority: the statutory body that publishes the installed capacity, the metering reports and the meter specification [S01, S09, S17] |
| DPDP Act and Rules | The Digital Personal Data Protection Act and its Rules, notified on 13 November 2025, with most obligations from about May 2027 [S27] |
| DR framework | The draft amendment rules that add demand response to the consumer rights rules. They are a draft as of March 2026 [S24] |
| Electricity (Rights of Consumers) Rules, 2020 | The rules that require a 24 by 7 supply duty and automatic compensation where performance is monitored [S23] |
| LGBR | Load generation balance report: the CEA's yearly report on supply and demand, which records any shortage and its cause. Its FY26 figures are not used in this document (§21.2) |
| MNRE | Ministry of New and Renewable Energy: the ministry that reports on renewable capacity and rooftop programmes [S30] |
| MoP | Ministry of Power, which issues the resource-adequacy guidelines and the national data on supply [S22] |
| PFC | Power Finance Corporation: the public lender that publishes the integrated rating of DISCOMs [S11] |
| RACI | Responsible, accountable, consulted, informed: a table that sets out who does each task. The pilot's RACI is in §15 |
| SERC | State electricity regulatory commission: the state body that approves tariffs and sets the rules for DISCOMs and distributed resources [S24] |
| T&D | Transmission and distribution, the two grid segments that the research separates |
| UPERC | Uttar Pradesh Electricity Regulatory Commission, which approved the P2P pilot in February 2026 [S26] |
| DERC | Delhi Electricity Regulatory Commission, which approved the two distribution battery tariffs [S47, S48] |
| IES | India Energy Stack, see C.3 |
| Lifeline tariff | A low tariff for households with a small connected load and low use. In Uttar Pradesh the FY18 to FY21 rates were ₹50 per kW a month and ₹3.00 per kWh [S13] |
| Resource adequacy | The planning standard that a grid holds enough capacity to meet demand, measured by LOLP and NENS [S22] |
| Customer Validation Plan | The plan to interview engineers, households, shop owners and vendors before the pilot. No interview has been run (§21.4) |
| T0 registry | The field register of homes that depend on life support and must never be capped. It is verified before any cap is sent (gate G3, §18.2) [P] |
| Sandbox | A regulator-approved test space in which a new service runs under relaxed rules. The pilot needs one for the demand-response rules that are still in draft [S24] |

### C.6 Abbreviations used in tables

| Abbreviation | Meaning |
|---|---|
| CEEW | Council on Energy, Environment and Water, the research body behind the 2019 smart meter study [S07] |
| DLMS | Device language message specification, see C.2 |
| GW, MW, kW, GWh, kWh, MWh | Units of power and energy: gigawatt, megawatt, kilowatt, gigawatt-hour, kilowatt-hour, megawatt-hour |
| ₹, lakh, crore | Indian rupee, one hundred thousand, and ten million. Figures use Indian grouping: 6,94,960 is six lakh ninety-four thousand nine hundred and sixty |
| LIVE, WIRED, PILOT | The three status tags in the product audit (§4.3): LIVE runs in the prototype, WIRED is coded and unit-tested but not run by the simulator, and PILOT needs a real system connection before it can run on live equipment |
| n/s | Not stated on the vendor's public page. It is used in the parity matrix and is never read as "no" |
| h | Hours |
| est. | Estimate, see C.4 |
