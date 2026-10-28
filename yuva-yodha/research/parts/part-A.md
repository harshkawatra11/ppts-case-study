## 0. Document control

**Answer.** This part sets the rules for reading the research document. Every number carries one of five tags, every research figure traces to a numbered source row, and every model output is called a simulation result or an estimate. The verification pass confirmed 42 of the 57 source rows, corrected five and could not confirm ten. The unconfirmed rows appear only where the planning record marked them High, and each one is flagged where it is used. The product is a working prototype, and no interview, survey, pilot or willingness-to-pay figure exists.

### 0.1 Purpose and reader

This document is the research case for UrjaGrid, the software prototype that Team IdeaForge built for Challenge 03 of the Yuva Yodha Energy Tech Hackathon run by Schneider Electric. The reader is a panel of grid and energy engineers, and the team, who must defend each figure under questioning. The document makes three claims. The problem is real and measurable on Indian distribution grids. The solution answers the brief's four goals and six deliverables. The impact and cost figures follow from stated assumptions and can be traced to a source or to the model.

| Item | Value |
|---|---|
| Title | UrjaGrid research document |
| Prepared by | Team IdeaForge: Harsh Kawatra (Delhi Technological University, Team Leader) and Gursimran Kaur (Guru Gobind Singh Indraprastha University, Member) |
| Prepared for | Schneider Electric, Yuva Yodha Energy Tech Hackathon, Challenge 03 (Grid Reliability, Renewable Intermittency) |
| Evidence date | Desk research and product audit as of 3 and 4 Oct 2026 |
| Status | Working prototype. The backend is not yet deployed (Section 0.6). |

### 0.2 How to read the tags

Every number in the document carries a tag. The tag tells the reader where the number came from and how far it can be trusted. Tags sit in the number's own cell when a number appears in a table.

| Tag | Meaning | Where it comes from | Example |
|---|---|---|---|
| [S##] | External source | Research rows S01 to S57, checked in the verification pass | [S02] record peak of 270.82 GW |
| [P] | Product fact | Product code audit of 3 Oct 2026, the only basis for LIVE, WIRED and PILOT | [P] 48 distribution transformers |
| [M] | Model output | Impact model outputs (model_outputs.json and model_tables.md) | [M] 0.40 hours per home, base case |
| [A##] | Stated assumption | Model assumptions A01 to A11 | [A03] 92% cap compliance, base case |
| [X#], [G#], [D#], [I#] | The brief's own text | Brief IDs X1 to X4, G1 to G4, D1 to D6 and I1 to I5 | [X4] "without requiring major capital investment" |

The organisers' topic IDs (O1 to O9) appear only as row keys in Section 1. A model output is always called "simulated" or "est." in the same paragraph where it appears. A source that was read through a news report is labelled secondary in Section 0.3.

### 0.3 Source hierarchy and confidence

Primary documents come first. These are the CEA, the Ministry of Power, regulators, official government releases and the product code. Research institutions come next, including CEEW, Prayas, the IEA and the IGC. Operator publications and trade press come last. A row read through a news report is secondary. The planning research marked each row High, Med or Low, and the verification pass re-opened every row in the four owning files.

| Tier | Type | Examples used here | Rule applied |
|---|---|---|---|
| 1 | Primary government or regulator | CEA installed-capacity report, Ministry of Power and PIB notes, Bundesnetzagentur, CEA meter specification [S01, S06, S17, S35] | Quoted only where verified |
| 2 | Research and institutions | CEEW, Prayas, IEA, IGC, NESO, SEA and GIZ with Eskom [S07, S19, S37, S38, S41, S33] | Quoted only where verified |
| 3 | Operator and company publications | Tata Power-DDL, Tata Power, Uplight, Schneider Electric [S39, S40, S42, S44] | Stated as the operator's own claim |
| 4 | Trade press and news | Down To Earth, ThePrint, pv magazine India, Business Today, SolarQuarter [S02, S03, S20, S25] | A number is used only where it matches a primary source or verification confirmed it |
| 5 | Product code audit | Section 4 of the plan, audited on 3 Oct 2026 [P] | Sole source for LIVE, WIRED and PILOT tags |

The confidence labels in the raw files are High, Med and Low. A Low row is never used for a headline figure. A Med row is used only with its source named in the text.

### 0.4 Verification outcomes

Each owning verification file re-opened its own rows. The table counts the result for each group of rows. S07 is counted as verified, but three of its sub-figures were not confirmed.

| Owning file | Rows | Verified | Corrected | Unverifiable |
|---|---|---|---|---|
| R-A grid and reliability (S01 to S15) | 15 | 8 (S07 in part) | 2 (S10, S11) | 5 (S04, S05, S08, S09, S15) |
| R-B meters and regulation (S16 to S31) | 16 | 11 | 3 (S20, S24, S29) | 2 (S18, S22) |
| R-C flexibility and precedents (S32 to S44) | 13 | 12 | 0 | 1 (S32) |
| R-D competition and costs (S45 to S57) | 13 | 11 | 0 | 2 (S51, S57) |
| Total | 57 | 42 | 5 | 10 |

The R-D verification file also re-checked rows from the other three groups, and on several rows it reached a different result. The document follows the owning file for each row. Where the cross-check disagrees, the row is flagged and the treatment is recorded below.

| Row | Owning file | Cross-check (R-D file) | Treatment in this document |
|---|---|---|---|
| S07 | Three sub-figures unconfirmed | Verified in full | Headline outage figures used; feeder-log, voltage and income figures flagged |
| S08 | 20.6 h average not confirmed; two-thirds and 76% confirmed | 20.6 h confirmed; breakdown not confirmed | Dropped from the figures; mentioned as an open item only |
| S09 | Unverifiable (FY 2024-25 digits not found) | Verified | Not used |
| S13 | Rates confirmed for FY 2024-25 | Rates confirmed only for FY18 to FY21 | Both periods stated; coverage to FY27 not claimed |
| S15 | Unverifiable (cited reply unreadable) | Verified through a secondary report | Used with a flag |
| S19 | Verified at ₹60 to ₹167 | Corrected to ₹60 to ₹146 | Section 0.5 correction applied |
| S33 | Verified (15.3 MW and cost figures) | Unverifiable | Used with a flag |
| S37 | Both quotations verified | Equity quotation differs from the source | Paraphrased without quotation marks (Section 0.5) |

### 0.5 Corrections applied in this part

Where a verification pass corrected a value, the corrected value is used everywhere in this part. The original wording is recorded here so that the team can grep for it.

| Row | Original wording or value | Applied value | Reason |
|---|---|---|---|
| S10 | Moisture ingress "nearly 90%" | 90% [S10] | The source states 90% |
| S11 | National and UP AT&C figures cited to one article | UP figure from the UP article; national figure from the MoP and PFC 14th Integrated Rating, reported separately [S11] | The article covers UP only |
| S13 | Lifeline rates "FY18 to FY27" | FY18 to FY21 table and FY 2024-25 approved tariff, same rates [S13] | Coverage to FY27 is not confirmed |
| S19 | Service charge "₹60 to 167 a meter a month" | ₹60 (West Bengal) to ₹146 (Madhya Pradesh average) [S19] | The ₹167 figure is attributed in another snippet to one Madhya Pradesh discom, so it is not used as a range |
| S20 | Announced 4 May 2026 | "May 2026" [S20] | The article is dated 5 May 2026 and the announcement day is not settled |
| S24 | Dated 12 Mar 2026 | 17 Mar 2026 [S24] | The article's own date |
| S29 | Dated 15 Aug 2026 | 23 Aug 2026 [S29] | The article's own date |
| S37 | "risk excluding these groups, reinforcing inequalities" | Paraphrase, no quotation marks [S37] | The cross-check reports different wording |

### 0.6 Model version and run

The impact model is a transparent Python model fed by the product's own network and demand engine. It measures outage hours per home against a rotational-shedding baseline. It does not reproduce the product's Scenario Lab, which measures unserved energy. The model files are listed below with their present status.

| File | Role | Status at drafting |
|---|---|---|
| urjagrid_impact_model.py | Model code | No version string in the file |
| model_outputs.json | All model outputs, including the cases, days, annual totals and economics | No run date recorded in the file |
| model_tables.md | Tables T1 to T7 rendered from the outputs | Generated from the outputs |
| check_values.py | Lock check that every deck and pitch number matches the outputs | Must pass before submission |

The run date and version must be recorded before submission. The planning-time dry run is dated 4 Oct 2026, but the outputs file itself does not carry the date. Until the lock check records the run date, this document cites the planning-time dry run date of 4 Oct 2026.

### 0.7 AI-use disclosure and honesty limits

Claude, by Anthropic, supported the research, the drafting, the model code and the Figma deck build. Every figure is checked against its source by the team before submission. The verification pass re-opened every research row, and a row that could not be read is flagged where it appears. The product is a working prototype. Its live dashboard runs on hand-written fixtures, its backend is not yet deployed, and no interview, survey, pilot or willingness-to-pay figure has been collected. The Customer Validation Plan in the deck sets out the validation still to run. The impact result is simulated, and the adapters are simulators.

## 1. Brief coverage: four goals, six deliverables, five judging criteria, one place each

**Answer.** Every goal, deliverable and illustrative idea in the brief has one home in this document and one slide in the deck. The four goals (G1 to G4), six deliverables (D1 to D6), five ideas (I1 to I5) and five judging criteria are mapped below, with the product status that each claim depends on. The judging weights were not confirmed by verification, so the criteria are listed without weights.

### 1.1 The four goals

The brief sets its test in its own words. The three phrases that decide the argument are "affordable", "without requiring major capital investment" and "measured against a defined baseline" [X4, D5]. The four goals restate what the solution must achieve. G1 asks for reliable electricity when renewable supply falls below demand. G2 asks for a solution that works at neighbourhood or district level with minimal grid-level intervention. G3 asks that it be viable for low-income urban and peri-urban communities. G4 asks for data, forecasting or demand-response signals that help the DISCOM manage feeder loads and reduce technical losses.

| ID | Goal, in the brief's terms | Document sections | Deck slides | Product status behind the claim |
|---|---|---|---|---|
| G1 | Bridge intermittency gaps | 2, 3, 10, 13 | 2, 3, 8 | Two-track simulator LIVE; dispatcher timeline WIRED [P] |
| G2 | Stay local and manageable | 10, 11, 15 | 3, 6, 9 | Load model on real weather days LIVE; field-worker app LIVE [P] |
| G3 | Be genuinely affordable | 14, 16 | 8, 9 | Fee of ₹8 a meter a month and rebate of ₹2 a kWh [P] |
| G4 | Support the DISCOM | 10, 11, 12 | 5, 6, 7 | Quantile forecaster and power-flow solver WIRED; dashboard of 28 screens LIVE [P] |

G1 is answered by the simulation result in Section 2 and the day-type breakdown in Section 13. G3 is answered by the cost per meter in Section 14, which is an estimate and is labelled as one. G4 depends on capabilities that are coded and unit-tested but not yet called by the running simulator. The deck says so.

### 1.2 The six deliverables

The brief asks for six deliverables. D4 is encouraged but not mandatory, and the brief states that no physical hardware build is expected [D4]. The prototype is therefore a supporting asset, and the document claims only what the product audit supports.

| ID | Deliverable, in the brief's terms | Document sections | Deck slides | Note |
|---|---|---|---|---|
| D1 | Solution write-up: how it works, key assumptions, fit to Indian distribution conditions | 2 to 10 | 2, 3, 4 | Assumptions are listed in Section 20 |
| D2 | Architecture diagram with the principal components and the data, energy and money flows | 11 | 6 | Six layers, shown as a table and as a diagram in the deck |
| D3 | Supporting design artefacts such as UX, process, service, data or model designs | 10, 23 | 5 | Five role flows and sample notices in Hindi (Latin script) and English |
| D4 | Software prototype or simulation (encouraged, not mandatory) | 11 | 6 | Status per capability in Section 11 |
| D5 | Measurable reliability improvement against a defined baseline | 13, 21 | 8 | Outage hours per home, simulated |
| D6 | Ownership, operations and maintenance model with unit economics for low-income communities | 14, 15 | 8, 9 | ₹383 a meter a year to the DISCOM, est., and ₹0 to the home |

The baseline for D5 is the present rotational shedding, reproduced in the model as the "today" case. On the heatwave day that case gives 4.21 hours without supply per home [M]. Every improvement in this document is measured against that baseline, on the same day types and the same network.

### 1.3 The five illustrative ideas

The brief lists five ideas to get started. They are illustrative, so the solution does not have to be all five. The table shows where each idea is answered and what UrjaGrid does with it.

| ID | Idea, in the brief's terms | Document sections | Deck slides | Position taken by UrjaGrid |
|---|---|---|---|---|
| I1 | Software and ownership models for community or shared storage, including second-life batteries, with fair-access, pricing and dispatch rules | 8, 15 | 3, 9 | Storage is lever 4. It plugs in when it exists. Its dispatch is coded and unit-tested but not yet called by the running simulator [P] |
| I2 | Microgrid or mini-grid control with smart load management, demand response and prioritisation of critical loads | 10, 11 | 3, 6 | Engines enforce six safety invariants; T0 homes are never capped [P] |
| I3 | Peer-to-peer sharing, aggregation or cooperative ownership | 7, 12 | 7 | Protocol ledger WIRED [P]; UPERC approved an interstate peer-to-peer pilot with PVVNL at ₹0.42 a kWh including GST [S26] |
| I4 | Low-cost forecasting, control or scheduling that anticipates renewable gaps | 11 | 6 | Quantile forecaster WIRED, trained on synthetic data [P] |
| I5 | DISCOM-facing analytics that predict feeder stress and recommend local demand response | 10, 11 | 5, 6 | Dashboard of 28 screens LIVE [P]; the feeder-stress forecast is WIRED [P] |

### 1.4 The five judging criteria

The five criteria are Problem and idea, Architecture and design, Impact and measurability, Feasibility and affordability, and Sustainability. The planning research recorded weights of 20, 20, 25, 20 and 15 per cent [S32]. The verification pass confirmed the deadline, the prototype window and the ₹45 lakh prize pool, but could not confirm the weights on the official page or in any other source. The document therefore lists the criteria without weights. If the weights are confirmed later, the table below changes only in its weight column.

| Criterion | Weight status | Document sections | Deck slides |
|---|---|---|---|
| Problem and idea | Not confirmed | 2, 3, 4 | 2, 3 |
| Architecture and design | Not confirmed | 10, 11, 12 | 6, 7 |
| Impact and measurability | Not confirmed | 13, 16, 21 | 8 |
| Feasibility and affordability | Not confirmed | 14, 15, 18 | 8, 9 |
| Sustainability | Not confirmed | 17 | 8, 10 |

Impact and measurability is the criterion the model is built for. Feasibility and affordability is carried by the cost per meter and the pilot plan in Section 18. Sustainability is answered in Section 17 with the overload hours in the model and the honest limits.

### 1.5 The organisers' eight topics

The organisers asked for a presentation of 8 to 12 slides covering eight topics. The deck has 11 slides: a cover, eight core slides in the organisers' order, an appendix and a thank-you slide. The ribbon across each core slide carries the organisers' own topic words, so a judge scoring against the list can find each topic by its tag.

| ID | Organisers' topic | Deck slide | Ribbon tag |
|---|---|---|---|
| O1 | Problem statement | 2 | PROBLEM |
| O2 | Proposed solution | 3 | SOLUTION |
| O3 | Alignment to the selected challenge | 4 | CHALLENGE FIT |
| O4 | Key features, and how a user moves through the product | 5 | FEATURES |
| O5 | Technical approach | 6 | TECH |
| O6 | Innovation | 7 | INNOVATION |
| O7 | Expected impact | 8 | IMPACT |
| O8 | Implementation roadmap | 9 | ROADMAP |
| O9 | Team introduction | 1, 9 and 11 | none |

The "8 to 12 slides" wording did not appear on the public pages. It came from the organisers' message to the team, and the deck follows that message.

### 1.6 What the brief does not give

The brief gives no numbers of its own. Its statements are the frame: renewable generation must scale significantly by 2047, millions of households and businesses need dependable power, and feeder-level flexibility can balance variability [X1]. Every figure in this document is therefore sourced separately. The brief also lists software tools, such as forecasting, load management and DISCOM dashboards, alongside storage. This document does not argue that the brief is storage-led. It argues that storage is one lever among several, which Section 8 tests.

## 2. The answer on one page: brownout, never blackout

**Answer.** UrjaGrid keeps homes supplied through the evening shortfall by limiting load at feeder level, not by cutting whole lanes. The software applies a ladder of softer levers first, then a time-boxed lifeline limit for the few homes that must give, and blackout only as the last step. In the simulated heatwave day, the model reduces hours without supply per home from 4.21 to 0.40 in the base case, a cut of about 90 per cent [M]. The DISCOM pays ₹383 a meter a year (est.) and the home pays nothing [M, A07, A08].

### 2.1 The recommendation

The recommendation is software that runs on the feeder the DISCOM already owns. It uses the load-limit switch that the CEA smart meter specification requires in every meter [S17]. A named Junior Engineer or Assistant Engineer approves every plan, and the approver's name comes from the sign-in token [P]. The engines compute the plan, and a language model only phrases the notice to the consumer. Every cap carries at least 30 minutes of notice and an expiry [P]. The dispatch sequence is notify, signal, head-end, start, end and verify, at offsets of T−120, T−30, T−15 and T+15 minutes [P].

The product has six safety invariants: T0 homes are never capped, no cap goes below 300 W, every cap carries an expiry, every cap gets at least 30 minutes of notice, nothing dispatches without a named approver, and no LLM SDK is imported in any engine [P]. These rules, not the model, decide what a home can lose.

### 2.2 The contrarian answer

The brief invites an obvious answer: add assets, such as a community battery, a microgrid or a peer-to-peer market. The table sets that answer against UrjaGrid's answer on five questions. The contrarian line is the reason the deck argues a software answer, and the table states what each side costs.

| Question | The obvious answer the brief invites | Our answer | Tags |
|---|---|---|---|
| What fills the evening gap | Add assets: a community battery, a microgrid, a peer-to-peer market | Use the asset already paid for: the load-limit switch inside the smart meter, driven by software | [S17], [S16] |
| What happens when supply is short | Rotational feeder shedding, so the whole lane goes dark | A ladder of softer levers, then a time-boxed lifeline limit of 300 W per home and 500 W per shop for the few homes that still have to give, and a blackout only as the last step | [P] |
| Who decides | A roster, or an algorithm | A named engineer approves every plan; the engines compute and a language model only phrases | [P] |
| What it costs a low-income home | Battery or inverter capex, or a tariff for storage | ₹0. The DISCOM pays ₹383 a meter a year (base case, est.) | [M], [A07], [A08] |
| Where storage goes | First | Lever 4: it plugs in when it exists. Its dispatch is coded and unit-tested, and is not yet called by the running simulator | [P] |

### 2.3 Why the contrarian line holds, and where it is weak

The brief itself asks for tools that work "without requiring major capital investment in grid reinforcement" [X4] and states that "no physical hardware build is expected" [D4]. India awarded 10.4 GW of standalone battery storage in 2025, but only about 1.8 GWh was installed by March 2026 [S45]. Smart meters are already installed in large numbers, with 7.24 crore installed as of 30 June 2026 [S16]. Eskom limited the load of about 9,000 homes in its pilot, with 15.3 MW of average relief over seven events, and customers preferred limiting to shedding [S33]. The 15.3 MW figure was confirmed in one verification pass and not in the other (Section 0.4), so it is flagged. The cheapest flexible asset in a low-income lane is therefore already in the meter. Storage becomes a lever rather than a prerequisite.

The line is weak in four places, and the document says so before a judge does.

- Grid-scale storage is getting cheap. The Ministry of Power puts the cost at ₹2.1 to 2.8 per kWh cycled, against ₹10.18 in 2022-23 [S46].
- Storage already serves low-income homes. The Kilokari distribution battery serves over 12,000 low-income consumers [S47].
- The brief lists dashboards and forecasting tools too. The document never says the brief is wrong. It says the cheapest flexible asset is already installed.
- A limit trips the relay when a home stays above it. The product's rule is that a home above 130 per cent of its limit for two intervals is out for eight intervals, which is two hours [P]. The deck therefore says "must trim load" and never "nothing is switched off". The Eskom limit disconnects a home that stays above 10 A [S33], and UrjaGrid adds notice, a floor, an expiry and a named approver to that design (Section 14).

### 2.4 The headline result

The headline result compares today's rotational shedding with UrjaGrid on the same network and the same three day types. The heatwave evening peak is the case that matters, because it is where the outage is concentrated. The bear, base and bull cases change three assumptions: the share of homes in demand response (A01, 3, 5 and 10 per cent), the share of flexible connections (A02, 30, 50 and 70 per cent) and the share of homes that comply with a cap (A03, 85, 92 and 97 per cent). All results are simulated.

| Case, heatwave evening peak | Hours without supply per home [M] | Homes cut [M] | Supply availability [M] | Annual hours per home [M] |
|---|---|---|---|---|
| Today (rotational shedding) | 4.21 | 4,309 | 82.5% | 1,345 |
| Bear (A01 3%, A02 30%, A03 85%) | 0.83 | 1,244 | 96.5% | 152 |
| Base (A01 5%, A02 50%, A03 92%) | 0.40 | 593 | 98.3% | 18 |
| Bull (A01 10%, A02 70%, A03 97%) | 0.00 | 0 | 100.0% | 0 |

The base case cuts the heatwave-day outage by about 90 per cent (simulated). The model also cuts the annual outage from 1,345 hours per home to 18 (simulated). That annual figure comes from 45 heatwave days, 75 monsoon days and 245 mild days [A04]. The 18 hours is a simulated result and is not a forecast of a particular year.

The headline is not a single day's result. The table below shows the same comparison on the other two day types. Monsoon and solar-noon days show the same direction, with a smaller starting outage.

| Day type | Today, hours per home [M] | Bear [M] | Base [M] | Bull [M] |
|---|---|---|---|---|
| Heatwave evening peak | 4.21 | 0.83 | 0.40 | 0.00 |
| Monsoon cloud cover | 3.71 | 0.38 | 0.00 | 0.00 |
| Clear solar noon | 3.58 | 0.35 | 0.00 | 0.00 |

Exhibit: slide 8, counterfactual bars by day type, which uses these same figures.

The stress line tests the headline against a larger evening shortfall. The shortfall is applied in the 18:00 to 23:00 window [A05] at 0 to 40 per cent [A06]. Today's system gives 6.35 hours at 10 per cent extra shortfall and above. The base case holds at 0.40 hours up to 30 per cent and rises to 1.00 hours at 40 per cent (simulated).

| Extra evening shortfall [A06] | Today [M] | Bear [M] | Base [M] | Bull [M] |
|---|---|---|---|---|
| 0% | 4.21 | 0.83 | 0.40 | 0.00 |
| 10% | 6.35 | 0.83 | 0.40 | 0.00 |
| 30% | 6.35 | 0.90 | 0.40 | 0.00 |
| 40% | 6.35 | 2.08 | 1.00 | 0.06 |

### 2.5 Cost per meter

The cost per meter is an estimate built from the product's fee and rebate, the message cost and the assumed message count. The fee is ₹8 a meter a month, which is ₹96 a year [P]. The rebate is ₹2 a kWh given to homes that trim load [P]. The message cost is ₹0.136 a message, which is the ₹0.115 base rate plus 18 per cent GST [S50, A07], with two messages per home per event [A08]. The DISCOM pays the total, and the home pays nothing.

| Component, base case [M] | Total, ₹ lakh a year | Per meter a year, ₹ | Tag |
|---|---|---|---|
| Software fee | 6.72 | 96 | [P] |
| Rebates to homes | 13.17 | 188 | [P] |
| Messages | 6.95 | 99 | [S50], [A07], [A08] |
| Total, base (est.) | 26.84 | 383 | [M] |
| Bear (est.) | 21.66 | 309 | [M], [A01 to A03] |
| Bull (est.) | 38.26 | 547 | [M], [A01 to A03] |

The base case costs ₹0.29 per outage hour avoided and ₹1,448 per kW of peak relief in a year, both simulated (est.). The peak relief in the base case is 1,854 kW [M]. The cost is set against the battery tariffs in Section 14, where a distribution battery in Delhi is priced at ₹5,700 per kW a year [S47] and at ₹3,591 per kW a year [S48].

### 2.6 The four honest limits

The deck states four limits on its last content slide. They are repeated here because they apply to every number in this document.

| Limit | What it means | Where it is stated | Tag |
|---|---|---|---|
| The reliability gain is simulated | Outage hours come from the model on three archived weather days and a simulated network on real Bareilly and Mathura localities | Section 13; slide 10 | [M], [P] |
| The adapters are simulators | The DLMS limiter, OCPP, OpenADR, Beckn and messaging adapters are coded and tested, but no live head-end or charger is connected | Section 11; slide 6 | [P] WIRED and PILOT |
| The backend is not yet deployed | Hosted backend with persistence is a PILOT item | Section 11; slide 10 | [P] |
| The product's own Scenario Lab is mixed | Its planner targets only the supply gap. It gave −333.7, −142.7, +2,143.8 and +2,733.7 kW-intervals on unserved energy at 96 intervals | Section 13; slide 10 | [P] |

The model is built to avoid the last problem. It applies the lever ladder to each transformer's shortfall, including the thermal limit, and it measures outage hours per home rather than unserved energy. That choice is a method decision and is explained in Section 13.

### 2.7 The 120-word version

India's evening grid is short when solar output falls. On 21 May 2026, the record day with a 270.82 GW peak, the grid was 2.57 GW short in non-solar hours against 0.18 GW in solar hours [S02]. UrjaGrid uses the load-limit switch that smart meters already carry [S17], installed in 7.24 crore meters [S16], and a software ladder of softer levers before any cap. In the simulated heatwave day, homes lose 4.21 hours of supply today and 0.40 hours in the base case [M]. The DISCOM pays about ₹383 a meter a year (est.), and the home pays nothing [M]. The gain is simulated, the adapters are simulators, the backend is not yet deployed, and the product's own Scenario Lab is mixed on unserved energy.
## 3. India's clean power is short after sunset, not at noon

**Answer.** India's installed capacity is now more than half non-fossil, so the shortage is not a lack of clean megawatts. On the record demand day of 21 May 2026, the shortage in non-solar hours was 2.57 GW against 0.18 GW in solar hours [S02]. Peak demand in non-solar hours fell short on 36 days in April and May 2026, against 6 days for solar-hour peaks [S03]. The gap that UrjaGrid addresses is the hours after sunset, when solar output has gone and a home still wants cooling.

### 3.1 The capacity mix is clean

The installed base as of 31 August 2026 was 5,54,544 MW, of which 54.88 per cent was non-fossil [S01]. Solar was 1,68,040 MW and wind 58,520 MW [S01]. The figures were confirmed through secondary reporting of the CEA report, because the primary PDF could not be read as text during verification. The capacity stock therefore supports the case that the supply side is largely clean. The problem is when that capacity produces, not how much of it exists.

| Source, 31 Aug 2026 [S01] | MW | Share of installed capacity |
|---|---|---|
| Total installed | 5,54,544 | 100% |
| Non-fossil, all sources | 3,04,334 | 54.88%, as reported |
| Solar | 1,68,040 | about 30%, derived |
| Wind | 58,520 | about 11%, derived |

### 3.2 The record day

India's all-time peak demand was 270.82 GW, reached at 15:45 on 21 May 2026 [S02]. The record came in the afternoon, when solar output is high. The shortage pattern on the same day is the more useful fact. The shortage was 0.18 GW in solar hours and 2.57 GW in non-solar hours [S02], so the non-solar shortage was about 14 times the solar one (derived). The verification pass confirmed these figures against the Down To Earth tracker, which cites Ministry of Power data.

| Measure, 21 May 2026 [S02] | Value |
|---|---|
| All-India peak demand | 270.82 GW |
| Time of the peak | 15:45 hours |
| Shortage in solar hours | 0.18 GW |
| Shortage in non-solar hours | 2.57 GW, about 14 times the solar shortage (derived) |

### 3.3 Days short and the evening ramp

The Economic Advisory Council to the Prime Minister's working paper "The Duck and The Camel", reported through ThePrint, finds that the grid fell short of non-solar-hour peak demand on 36 days during April and May 2026 [S03]. Solar-hour peak demand was short on only 6 days in the same period [S03]. The evening ramp, the rise in demand that solar cannot meet as it fades, grew from about 36 GW in May 2023 to 74 GW in May 2026 [S03]. The verification pass confirmed both figures against the report as reported by ThePrint. The report is a working paper, so the figures carry a Med-High confidence in the research file and are used here as reported.

| Measure [S03] | Earlier or solar | Later or evening | Change |
|---|---|---|---|
| Days short of peak demand, April and May 2026 | 6 days (solar hours) | 36 days (non-solar hours) | 6 times as many (derived) |
| Evening ramp, May | 36 GW (May 2023) | 74 GW (May 2026) | about 2.1 times in three years (derived) |

### 3.4 The shortage in the national balance report

The Load Generation Balance Report for FY 2025-26 records 508 MU of energy not supplied [S04]. Its stated cause is "the factors other than inadequate availability of power", which the research file quotes as constraints in the distribution network, commercial reasons and forced outages of generating units. The verification pass could not read the report or confirm the figure and the quotation. The row is High confidence in the planning file, so it is kept as a flagged finding, and the wording is paraphrased here rather than quoted.

| Cause named in the record [S04] | Status |
|---|---|
| Inadequate availability of power | Excluded by the report as the stated cause of the gap |
| Constraints in the distribution network | Named as a cause; not confirmed by verification |
| Commercial reasons | Named as a cause; not confirmed by verification |
| Forced outage of generating units | Named as a cause; not confirmed by verification |

The reading matters for UrjaGrid. If the residual gap sits in the distribution network, the lever belongs at feeder level, which is where the product works. The document does not quantify that share, because the verification pass could not confirm the 508 MU figure or its split.

### 3.5 Uttar Pradesh's night peak

The CEA Resource Adequacy Plan for UPPCL, from July 2024, records that the night peak in Uttar Pradesh is significantly higher than the day peak throughout the year [S05]. The planning file gives storage needs for FY 2033-34 as well, but the verification pass could not read the report, so those figures are not quoted here. The qualitative claim is kept with a flag. The product's own network sits in the same state, with the two DISCOMs MVVNL in Bareilly and DVVNL in Mathura [P]. A night peak in UP is therefore the operating condition the product is built to handle.

### 3.6 The 2047 framing and what the evidence cannot say

The brief frames the problem against 2047. India's clean-energy future "depends on scaling renewable generation many times over by 2047", and solar and wind output "changes with clouds, nightfall and weather conditions" [X1]. This document accepts that framing and does not forecast the evening gap to 2047. The evidence in this section is about 2026, and the trend in the ramp (Section 3.3) is three years long.

The evidence cannot say everything. The table lists what the sources do and do not support, so that no judge has to find the gap first.

| Topic | What the evidence supports | What it does not support |
|---|---|---|
| Whether the evening gap is growing | The ramp doubled from about 36 GW to 74 GW between May 2023 and May 2026 [S03] | A forecast of the ramp to 2047 |
| The size of the national shortage | The record shortage in non-solar hours was 2.57 GW on 21 May 2026 [S02] | An hourly national shortfall series, which the research did not find |
| Solar curtailment | Nothing used. Two sources disagree and the cited reply has not been opened | Any curtailment figure (conflict 3 in the planning record) |
| The 2025 peak | Nothing used. Two figures, 241 GW and 242.77 GW, conflict | Any 2025 peak figure (conflict 5) |

The honest reading is that the record and the ramp are two-year and three-year facts from named sources. They are strong enough to justify a feeder-level tool, but they do not show what the grid will look like in 2047.

### 3.7 The evening gap in one table

The evening gap is the central fact of this section. The table brings the three measures together. Each one points the same way: the shortfall sits after sunset, and it is growing.

| Measure | Solar hours or earlier | Evening or non-solar | Change | Tag |
|---|---|---|---|---|
| Shortage on 21 May 2026 | 0.18 GW | 2.57 GW | about 14 times | [S02] |
| Days short of peak demand, April and May 2026 | 6 days | 36 days | 6 times | [S03] |
| Evening ramp | 36 GW (May 2023) | 74 GW (May 2026) | about 2.1 times | [S03] |

Exhibit: slide 2, the two charts and KPI tiles of the problem slide, which use the figures above.

## 4. The edge: homes lose about two hours a day, and averages hide who loses most

**Answer.** In the Mathura and Bareilly sample, homes had supply for about 22 hours a day on average in 2019, so about two hours a day were lost [S07]. Averages hide the spread: notified town homes reported about 3.5 hours a day with six interruptions, and district headquarters about 1.3 hours [S07]. Rural homes on the UP roster are scheduled to receive 18 hours of supply [S15]. The simulated heatwave day puts 27 of the 48 transformers in the product's network above rating [M]. The homes most exposed are cooling loads, cold-chain shops, lifeline households and fridge-and-TV homes at the lifeline floor [M].

### 4.1 Roster hours and measured hours

The national averages describe supply over a year, the UP roster sets a schedule, and the Mathura and Bareilly study measured outages in homes. They are different measures from different years and populations. The table sets them side by side for scale, and it does not merge them into one series. The schedule in the UP roster and the measured sample cannot be netted against each other.

| Measure | Value | Period | Tag | Note |
|---|---|---|---|---|
| Average supply, rural | 22.6 hours a day | 2025 | [S06] | Up from 12.5 hours in 2014 |
| Average supply, urban | 23.4 hours a day | 2025 | [S06] | The 2014 urban figure was not re-confirmed |
| UP roster, rural | 18 hours a day | FY 2024-25 | [S15] | Cited reply unreadable; figures corroborated in an Assembly answer of August 2026 |
| UP roster, district headquarters | 24 hours a day | FY 2024-25 | [S15] | Same as above |
| Measured supply in the sample | about 22 hours a day on average | May to October 2019 | [S07] | Outage of about 2 hours a day, with a range of 30 minutes to 5 hours |

A rural roster of 18 hours leaves 6 hours a day unscheduled by design (derived from 24 hours less 18 hours). That schedule implies more loss than the 2019 sample measured, but the two are different years and populations, so the comparison is indicative only. The document uses the roster to show what households are scheduled to receive, and the sample to show what they reported receiving.

### 4.2 Where the outages fall

The study found that outages were not evenly spread across the sample. Notified town areas reported the longest and most frequent outages. District headquarters reported the shortest. The gap between the two is the point of the table.

| Place, 2019 sample [S07] | Outage per day | Interruptions per day | Ratio to district headquarters (derived) |
|---|---|---|---|
| Notified town areas | about 3.5 hours | about 6 | 2.7 times the outage |
| District headquarters | about 1.3 hours | about 3.5 | 1 |
| Whole sample | about 2 hours | not stated | not applicable |

The average of about 2 hours hides a town-level outage of 3.5 hours and six interruptions a day. Interruptions are reported alongside hours in the model and in the study. The model reports 39,003 interruptions on the heatwave day under today's shedding and 1,889 in the base case (simulated) [M]. Those counts are model outputs, not survey results.

The same study also cites feeder-log figures of 3.5 hours for Bareilly and 4.8 hours for Mathura, for July 2019. The verification pass could not confirm these figures, and the basis of the comparison, whether the figure is a monthly total or a daily one, must be checked against the study before it is quoted. The document therefore does not claim that homes lose more than the feeder log shows. It states only that the measured sample lost about two hours a day, and that averages hide the towns.

### 4.3 Voltage and the transformer

The study reports that 70 per cent of areas were outside the 230 V band of plus or minus 6 per cent for over half the time [S07]. The band runs from 216.2 V to 243.8 V (derived). The verification pass could not confirm the 70 per cent figure, so it is reported here as a finding of the study and flagged. It is not used as a headline.

| Indicator | Value | Status | Tag |
|---|---|---|---|
| Areas outside 230 V ±6% for over half the time | 70% | Reported in the study; not confirmed | [S07] |
| Voltage band | 216.2 V to 243.8 V | Derived from the 230 V band | [S07] |
| Distribution transformer failures a year | about 10%, roughly 1.3 million | CEA meeting, reported in trade press | [S10] |
| Failures from moisture ingress | 90% | Corrected from "nearly 90%" | [S10] |
| States with failure rates above 20% | some northern states | Reported; not quantified | [S10] |

The transformer is where the voltage problem becomes an outage problem. The model tracks each transformer's loading against its rating. On the heatwave day, 27 of the 48 transformers run above rating, 20 of them above 130 per cent of rating, with a maximum loading of 265 per cent [M]. The energy above rating is 13,760 kWh on that day (simulated) [M]. The model's base case brings the count of transformers still cut down to 4 of 48, and reduces overload hours by 79 per cent over the year (simulated) [M].

### 4.4 Losses at the DISCOM

Aggregate technical and commercial losses are the DISCOM's own measure of what it bills against what it supplies. The Uttar Pradesh figure rose in FY 2024-25 while the national figure fell [S11]. The national figure is confirmed through the Ministry of Power and PFC 14th Integrated Rating, which the verification pass traced to a separate report.

| Measure, AT&C loss | FY 2024-25 | FY 2023-24 | Source |
|---|---|---|---|
| Uttar Pradesh | 19.54% | 16.39% | [S11] UP article |
| National | 15.04% | 15.97% | [S11] MoP and PFC 14th Integrated Rating |
| Gap, UP above national (derived) | 4.50 points | 0.42 points | derived from [S11] |

UP's loss was 4.5 percentage points above the national figure in FY 2024-25, against a gap of 0.42 percentage points a year earlier (derived). The figure matters to UrjaGrid in two ways. The DISCOM's technical losses are the ones feeder-level flexibility can reduce, as G4 asks. Commercial losses are the other half of the same measure.

### 4.5 What lost hours cost households

The willingness-to-pay studies give a value for an hour without power. A study using Delhi billing and outage records for over one million customers, from 2015 to 2019, finds that households would pay USD 1.50 per kWh of lost consumption, more than 25 times the average price they pay for grid electricity [S12]. The figure is a Delhi precedent. It is not converted to rupees here, because no exchange rate is part of the research, and the document does not present a foreign result as an Indian one.

The lifeline tariff sets the floor that protects the lowest-use homes. In Uttar Pradesh the lifeline category LMV-1 covers a connected load of up to 1 kW and up to 100 units a month [S13]. The fixed charge and energy charge in the FY 2024-25 approved tariff match the FY18 to FY21 table [S13].

| Lifeline category LMV-1, Uttar Pradesh [S13] | Value | Period |
|---|---|---|
| Connected load | up to 1 kW | FY18 to FY21 table; FY 2024-25 approved tariff |
| Monthly consumption | up to 100 units | Same |
| Fixed charge | ₹50 per kW a month | Same |
| Energy charge | ₹3.00 per kWh | Same |
| Coverage to FY27 | Not confirmed | Not claimed |

Lifeline homes keep a 300 W floor in tier T1 and a 500 W floor in tier T2 [P]. The product tiers 4,863 homes as T1 and 1,463 as T2, and 69 homes as T0, which is never capped [P]. 

### 4.6 Coping with inverters and batteries

Households already cope with outages in their own way. A May 2022 online survey of urban households found that 44 per cent had an inverter or a similar device [S14]. The sample is online and urban, and its confidence is Low to Med, so the figure describes that sample only. The remaining 56 per cent did not report one (derived).

The cost of that coping is not settled. The model assumes an inverter and battery at ₹14,000 to ₹19,000 with a five-year life [A10, A11], which gives about ₹2,800 to ₹3,800 a year (derived). The verification pass could not confirm the source of that price range. A later search found comparable listings above the range, and the assumption is kept in the model because the outputs are locked to it. It is an open item in the assumptions register (Section 20).

| Item | Value | Status | Tag |
|---|---|---|---|
| Households with an inverter or similar | 44% | Online urban sample, May 2022 | [S14] |
| Inverter and battery price, model assumption | ₹14,000 to ₹19,000 | Kept in the model; source not confirmed | [A10] |
| Assumed life | 5 years | Model assumption | [A11] |
| Implied annual cost (derived) | about ₹2,800 to ₹3,800 a year | Open item | [A10], [A11] |

### 4.7 Theft and non-technical losses

Uttar Pradesh has 11.47 lakh registered e-rickshaws, or 1.147 million vehicles [S29]. An enforcement official said that most of them charge through electricity theft, and called it a challenge [S29]. The official's remark is a qualitative finding, and the document does not turn it into a theft rate. Theft is a commercial loss, and the AT&C measure counts commercial losses alongside technical ones [S11]. The source does not quantify how much of the UP loss this accounts for, and this document does not estimate it.

### 4.8 Who suffers: the heatwave cap by connection type

The cap on the heatwave day constrains different connections in different ways. The table gives the share of each connection type above each cap at the peak. The comfort cap is 1,000 W, the essential cap 500 W and the lifeline cap 300 W [P]. The shares come from the model and are simulated.

| Connection type (count of connections) [M] | Comfort, 1,000 W | Essential, 500 W | Lifeline, 300 W |
|---|---|---|---|
| Cooler or air conditioner (1,260) | 100% | 100% | 100% |
| Fridge and TV (1,304) | 0% | 0% | 43% |
| Lighting and fan (1,268) | 0% | 0% | 0% |
| Shop with cold chain (1,292) | 100% | 100% | 100% |
| Small shop (1,202) | 70% | 97% | 100% |
| All T1 and T2 connections | 54% | 59% | 68% |

The cap bites hardest on cooling and cold-chain loads. At the comfort cap, fridge-and-TV and lighting-and-fan homes are not constrained at all. At the lifeline floor, 43 per cent of fridge-and-TV connections are constrained (simulated). In practice, the cap constrains cooling and cold-chain loads first.

The heatmap below sets the groups side by side. The "level" column is our reading of the evidence and is not a measured value.

| Group | Exposure measure | Level (our reading) | Tag |
|---|---|---|---|
| Notified town homes | 3.5 hours a day; 6 interruptions | High | [S07] |
| District headquarters homes | 1.3 hours a day; 3.5 interruptions | Lower | [S07] |
| Rural homes on the UP roster | 18 hours a day scheduled | High | [S15] |
| Lifeline households (LMV-1) | Fixed ₹50 per kW a month; ₹3.00 per kWh | High sensitivity to tariff | [S13] |
| Cooling loads at the peak | 100% above the comfort cap | High | [M] |
| Cold-chain shops at the peak | 100% above the comfort cap | High | [M] |
| Fridge-and-TV homes at the lifeline floor | 43% above the floor | Medium | [M] |
| Homes with backup | 44% in the online sample | Lower exposure | [S14] |
| Lighting-and-fan homes | 0% above the comfort cap | Low | [M] |

### 4.9 What remains unconfirmed

The edge section relies on several figures that the verification pass could not confirm, or that conflict between passes. The table records each one and what this document does with it. A figure that could not be confirmed is never used as a headline.

| Item | Row | Status | Treatment in this section |
|---|---|---|---|
| Feeder-log figures of 3.5 hours and 4.8 hours, July 2019 | [S07] | Not confirmed | Cited; not used for a comparison |
| Voltage share of 70% | [S07] | Not confirmed | Reported and flagged |
| Income share of 60% under ₹20,000 a month | [S07] | Not confirmed | Not used |
| 20.6 hours average supply and the rural and urban outage shares | [S08] | Passes conflict | Dropped |
| Lifeline coverage to FY27 | [S13] | Not confirmed | Not claimed |
| UP roster figures from the cited reply | [S15] | Cited document unreadable; figures corroborated elsewhere | Used with a flag |
| Inverter and battery price range | [A10] from a source row that failed verification | Not confirmed | Kept in the model; flagged |
| Moisture-ingress share of 90% | [S10] | Corrected | Used as corrected |
