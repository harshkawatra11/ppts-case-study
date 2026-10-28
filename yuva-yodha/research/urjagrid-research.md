# UrjaGrid: Brownout, Never Blackout

**A software answer to Challenge 03, Grid Reliability: keeping the lights on at the edge with the smart meters India has already installed**

Team: Harsh Kawatra (Delhi Technological University, Team Leader) · Gursimran Kaur (Guru Gobind Singh Indraprastha University)

Prepared for: Schneider Electric, Yuva Yodha Energy Tech Hackathon, Challenge 03, October 2026

---

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

## 10. UrjaGrid: the loop, the ladder of levers, four tiers and one floor

**Answer.** UrjaGrid treats each distribution transformer (DT) that runs short of supply, or above its thermal rating, as a small control problem. It tries the softest lever first and moves down the ladder only while a shortfall remains. A named engineer approves each plan before a command leaves the system, and the 69 tier T0 connections are never capped [P]. On the simulated heatwave day, the same loop takes outage per home from 4.21 hours to 0.40 hours, a fall of about 90% [M, simulated].

### 10.1 Theory of change: from network data to outage hours

The chain begins with data the product already holds. It models 48 DTs and 7,000 connections on real Bareilly and Mathura localities, with five load archetypes of about 20% each [P]. Every connection carries a 96-slot demand curve for each of three real weather days, produced by the product's own load model [P]. Supply comes from the product's supply engine, which assumes a 15% renewable share, 5% grid storage and firm shares of 0.88, 0.78 and 0.68 [P]. Together these inputs show, for each DT and each 15-minute slot, whether a shortfall exists and how large it is.

Table 10.1 sets out each link in the chain, what enters it and what it produced in the simulation.

**Table 10.1 Theory of change, one row per link**

| Link | What enters | What it does | Result (simulated or est.) | Tag |
|---|---|---|---|---|
| Network and demand | 48 DTs, 7,000 connections, 96 slots on three weather days | Sets each DT's demand and rating | 143,610 kWh of demand on the heatwave day | [P], [M] |
| Supply | Supply share per sub-division; rating × 0.9 power factor | Sets available power at each DT, the lower of the two | A DT short by more than 3% of demand becomes a candidate | [P], [M] |
| Voluntary ask | A01 share of T1 and T2 load: 3%, 5%, 10% | Trims load for a ₹2 a kWh rebate | 658,572 kWh of DR energy a year, base case, est. | [A01], [P], [M] |
| Flexible deferral | A02 share of T3 load: 30%, 50%, 70% | Moves flexible load out of the slot | 557,924 kWh deferred a year, base case, est. | [A02], [M] |
| Cap ladder | Three levels; compliance A03 at 85%, 92%, 97% | Limits T1 and T2 homes to 1,000, 500 or 300 W | 3,402 homes capped at the peak, 1,751 of them must trim, base case, simulated | [P], [A03], [M] |
| Approval and notice | A named JE or AE; notice of at least 30 minutes | Authorises the plan and warns the home | Model assumes approval and that the command lands | [P], [A03] |
| Outcome | Outage home-hours, DT-hours above rating, cost | Scores the plan against today | 4.21 hours to 0.40 hours per home; ₹383 a meter a year, simulated | [M] |

The outcome measure is outage home-hours. A non-critical connection adds 0.25 hours for every slot its DT is out [M, simulated]. The brief asks for a measurable reliability gain against a defined baseline [D5]. The baseline here is the same network, with the same shedding and trip rules, run without the ladder. The only thing that changes between the two tracks is the ladder itself. That is what makes the 4.21 hours a comparison rather than a claim about the grid as a whole.

One link is not tested in the model run. The model reads each DT's shortfall directly from supply and rating. The quantile forecaster that would predict the shortfall ahead of time is WIRED, not called by the model run [P]. Section 10.8 lists every gap of this kind in one table, so no reader has to find it in the prose.

### 10.2 The seven-step loop

Each planning run follows seven steps. The first four are the levers, arranged in order of how much each asks of a home. Steps five and six are the controls that make the levers safe to use. Step seven returns part of the relief that a lever cannot keep, because shifted load comes back later as rebound.

**Table 10.2 The seven-step loop**

| Step | What happens | Rule and value | Status |
|---|---|---|---|
| 1. Rank the shortfall | Each DT is ranked in each 15-minute slot | A DT short by more than 3% of demand is a candidate [P], [M] | Simulator LIVE [P] |
| 2. Voluntary ask | T1 and T2 homes are asked to trim load | A01 share of 3%, 5%, 10%; rebate ₹2 a kWh [A01], [P] | Rebate constant in code [P]; ask modelled [M] |
| 3. Flexible deferral | Flexible T3 load is moved out of the slot | A02 share of 30%, 50%, 70% [A02] | Modelled [M] |
| 4. Cap ladder | Lowest cap level whose trimmed load, times A03, closes the gap | 1,000 and 2,000 W; 500 and 1,000 W; 300 and 500 W (T1 and T2) [P], [A03] | Optimiser LIVE with greedy fallback [P] |
| 5. Named approval | A JE or AE approves the plan | Only JE and AE may approve; the name comes from the login token [P] | Approval rule in code; model assumes approval [P], [M] |
| 6. Notify and dispatch | Consumers are told and the limit is sent | Timeline in Table 10.3 [P] | Dispatcher WIRED; head-end link PILOT [P] |
| 7. Release and rebound | Part of the relief returns later | 30% of relief returns, released at 15% a slot [P], [M] | Modelled, simulated |

A DT still short after step 4 is shed or trips exactly as it would today. The baseline uses the product's shadow-baseline rules, with one change: the thermal rating counts as a limit, because a DISCOM sheds to protect an overloaded transformer [M]. In each sub-division, half of the candidates, rounded up and least-burdened first, are cut to critical load for that slot [P], [M]. A DT above 130% of its rating for two slots trips and stays out for eight slots, which is two hours [P].

**Table 10.3 Dispatch timeline for one plan**

| Time | Event | Status |
|---|---|---|
| T−120 minutes | Consumers are notified | Dispatcher WIRED [P] |
| T−30 minutes | Signal sent to the control point | Dispatcher WIRED [P] |
| T−15 minutes | Command to the head-end system (HES) | WIRED; HES link PILOT [P] |
| Start | Limit or deferral begins | Simulated in the model [M] |
| End | Limit or deferral ends | Simulated in the model [M] |
| T+15 minutes | Result verified | Dispatcher WIRED [P] |

The product's floor on notice is 30 minutes [P]. The dispatch timeline starts earlier, with notification at T−120 minutes [P], so a home hears about a plan about two hours before the limit applies. Those two numbers are different rules, and this document keeps them apart: 30 minutes is the minimum, and 120 minutes is the planned notice.

### 10.3 Network and tiers: 48 DTs, 10,105 kVA and four tiers

The network is deliberately tight. On the heatwave day, 27 of 48 DTs exceed their rating, 20 exceed 130% of it, and the worst loading reaches 265% before any shedding [M, simulated]. Energy above rating totals 13,760 kWh that day [M, simulated]. A tight network is the reason the test matters. A loop that only works on a slack network proves very little about a neighbourhood where transformers are already near their limits.

**Table 10.4 DT ratings in the seed network**

| Rating (kVA) | DTs | Total (kVA) |
|---|---|---|
| 100 | 9 | 900 |
| 160 | 14 | 2,240 |
| 250 | 14 | 3,500 |
| 315 | 11 | 3,465 |
| **All** | **48** | **10,105** |

Source: [P], product network, audited 3 Oct 2026.

The network is a simulated network on real Bareilly and Mathura localities. The coordinates are approximations from a fallback geocode, so the map is not a surveyed one [P]. The DT count, the kVA totals and the feeder structure are the product's own and are not changed for this study [P].

Each connection sits in one of four tiers. The tier decides what the loop may do to it.

**Table 10.5 The four tiers and what the loop may do to each**

| Tier | Connections | What the loop may do | Tag |
|---|---|---|---|
| T0 | 69 | Never capped and never touched; a DT that is still short sheds or trips as it does today | [P] |
| T1 | 4,863 | Voluntary ask, then the cap ladder; floor 300 W | [P], [A01], [M] |
| T2 | 1,463 | Voluntary ask, then the cap ladder; floor 500 W | [P], [A01], [M] |
| T3 | 605 | Flexible-load deferral; caps are not applied to T3 in the model | [P], [A02], [M] |
| Total | 7,000 | Sums to the seed network's connections | [P] |

Five load archetypes sit across these tiers, each holding about a fifth of connections [P]. Among the T1 and T2 connections, the model counts 1,268 lighting-and-fan homes, 1,260 cooler or AC homes, 1,304 fridge-and-TV homes, 1,292 cold-chain shops and 1,202 small shops [P]. Those counts matter in Section 16, where the cap is tested against each archetype.

### 10.4 The cap ladder: three levels and one floor

When a shortfall survives the voluntary ask and the deferral, the loop applies the lowest cap level whose trimmed load, scaled by the compliance rate, closes the gap. Three levels exist, and each is a pair of limits, one for T1 and one for T2 [P], [M].

**Table 10.6 The cap ladder, with capped home-hours on the heatwave day**

| Level | Label | T1 limit | T2 limit | Capped home-hours, base case, simulated |
|---|---|---|---|---|
| 1 | Comfort | 1,000 W | 2,000 W | 18,224 |
| 2 | Essential | 500 W | 1,000 W | 7,033 |
| 3 | Lifeline | 300 W | 500 W | 8,065 |

Source: limits [P]; home-hours [M]. The T1 and T2 pairing is this document's reading of the product constants, and it matches the floors of 300 W for T1 and 500 W for T2 [P]. The exposure test in the model applies one line of 1,000, 500 or 300 W to all T1 and T2 connections [M], so the table above is read with that in mind.

At the heatwave peak in the base case, the model caps 3,402 homes. Of those, 1,751 are above their cap and must trim load [M, simulated]. The other capped homes are already within their limit. The comfort line alone constrains 54% of T1 and T2 connections at that peak [M, simulated]. None of the fan-and-lights homes or fridge-and-TV homes sits above that line [M, simulated].

The floor is the part the deck and this document both insist on. The product holds T1 at 300 W and T2 at 500 W [P]. No cap goes below 300 W, every cap carries an expiry, and every cap gets at least 30 minutes of notice [P]. A DLMS limiter trips the relay when a home stays above its limit, and it reconnects automatically [P]. A capped home therefore has to trim load to stay connected. Nothing in these documents says that nothing is switched off, because the meter does switch off a home that stays over its limit [P].

### 10.5 Six safety invariants that the code enforces

The product states six safety invariants and ships 13 tests that cover them [P]. The facts file does not map each test to one invariant, so Table 10.7 gives each invariant and its effect, and the test count is given once for the set.

**Table 10.7 Six safety invariants**

| # | Invariant | What it stops | Tag |
|---|---|---|---|
| 1 | T0 is never capped | A critical connection losing its limit | [P] |
| 2 | No cap goes below 300 W | A home with no usable supply at all | [P] |
| 3 | Every cap carries an expiry | A limit that stays on after the event | [P] |
| 4 | Every cap gets at least 30 minutes of notice | A surprise limit | [P] |
| 5 | Nothing dispatches without a named approver | An automated command with no person behind it | [P] |
| 6 | No LLM SDK is imported in any engine | A language model making a grid decision | [P] |

Two of the six concern people rather than meters: the named approver and the rule against a language model inside an engine. Both are enforced in code and both are covered by the 13 tests [P]. The approver rule is the reason a Schneider engineer can ask who authorised a plan and get a name back.

### 10.6 Roles, approvals and user paths

Sign-in with six roles is LIVE [P]. Only the Junior Engineer (JE) and the Assistant Engineer (AE) can approve a plan, and the approver's name is read from the login token rather than typed [P]. Table 10.8 lists the roles the facts file names, with the status of the screen or channel each one uses.

**Table 10.8 Roles and the status of their channels**

| Role | What it does in the loop | Status of its channel | Tag |
|---|---|---|---|
| Junior Engineer (JE) | Approves a plan by name | Dashboard LIVE | [P] |
| Assistant Engineer (AE) | Approves a plan by name | Dashboard LIVE | [P] |
| Field worker | Uses the field-worker app | App LIVE; its tasks are not described in the facts file | [P] |
| Consumer (home) | Sees the home view on a phone; receives notices | Phone view LIVE; WhatsApp, IVR and SMS WIRED | [P] |
| Four further roles | Not named in the facts file | Not described here; to be added from the product's role definitions | n/a |

The user paths follow from the roles. A Junior Engineer opens a ranked plan and approves it by name. The plan is a ranked list of actions, as the product's plan stream carries it, and not a shedding roster [P]. A field worker uses the field-worker app, which is LIVE [P]. A consumer sees the home view on a phone and receives the notice on WhatsApp, IVR or SMS, all of which are WIRED [P]. The facts file does not describe the four further roles, so their paths are left open here rather than guessed at.

### 10.7 What a home is told

The product's message templates are in Hindi, written in Latin script, and in English [P]. The facts file gives the templates' languages and channels but not their wording. This document therefore does not reproduce sample notices, because none are in the record. Table 10.9 lists the elements every notice carries and the rule that governs each one.

**Table 10.9 Elements of a consumer notice**

| Element | Rule | Tag |
|---|---|---|
| Timing | Notified at T−120 minutes; signal at T−30 | [P] |
| Minimum notice | At least 30 minutes for any cap | [P] |
| Language | Hindi in Latin script, and English | [P] |
| Channels | WhatsApp, IVR and SMS | [P] |
| Messages per home per event | 2 | [A08] |
| Cost per message | ₹0.136, from a WhatsApp base rate of ₹0.115 plus 18% GST | [A07], [S50] |
| Voluntary ask | Rebate of ₹2 a kWh for load moved | [P] |
| Fee | ₹8 a meter a month, paid by the DISCOM in the model | [P], [M] |

The message cost is an estimate built from a provider rate card. It is not a contract price, and the figure is re-checked before any pilot contract is signed [S50, A07].

### 10.8 Where the model stops short of the product

The model run is deliberately narrower than the product. Table 10.10 sets out each place where the model uses a simpler rule than the product's engines, so that a reader can see the gap before the results are read.

**Table 10.10 Model versus product, element by element**

| Element | In the model run | In the product | Product status | Tag |
|---|---|---|---|---|
| Shortfall forecast | Read straight from supply and rating | Quantile forecaster, 3 quantiles, 13 features | WIRED; trained on synthetic data | [P], [M] |
| Power flow | Not run | Radial sweep | WIRED | [P], [M] |
| Approval | Assumed | Named approver enforced in code | Dispatcher WIRED | [P], [M] |
| Command landing | Assumed, through A03 compliance | DLMS limiter adapter | WIRED; HES link PILOT | [P], [A03] |
| Thermal limit | Rated kVA × 0.9 power factor | IEEE C57.91 engine | LIVE | [P], [M] |
| Shedding baseline | Product rules, with the thermal rating as a limit | Shadow-baseline simulator | LIVE | [P], [M] |
| Scenario relief | Outage hours, measured per home | Scenario Lab reports mixed relief on unserved energy | Scenario Lab is not one of the 28 audited rows | [P] |

The last row matters most. The product's own Scenario Lab measures unserved energy, and its planner targets only the supply gap, not transformer overload [P]. This model measures outage hours and lets the ladder act on the thermal limit too, which is why its results differ from the Lab. The difference is a design choice that is stated here and again in Section 13, and the model does not hide it.

The model is also not a power-flow study and not a forecast-error study [M]. It assumes that a plan is approved and that the command lands. That is why the bear case uses 85% compliance, close to Eskom's reported response of at least 70% once faults were fixed [S33, A03]. The results are simulation estimates for a six-week pilot to test. They are not field measurements.

## 11. Architecture and technology: the engines decide, a model only phrases

**Answer.** UrjaGrid has a FastAPI backend with 54 routes, a Next.js 16 dashboard with 28 screens, and a set of engines and protocol adapters beneath them [P]. The engines compute every number, and none of them imports a language model SDK [P]. A language model appears only in the voice and typed ask, which calls grounded tools, and that channel is WIRED, not LIVE [P]. Of the 28 capabilities audited, 10 run live, 12 are coded and unit-tested against simulators, and 6 need a pilot before they run on real systems [P].

### 11.1 Six groups of components

The six groups below are this document's grouping of the facts file. They are not product-defined layers. Each group carries the status of its pieces, taken from the build audit in Section 11.5.

**Table 11.1 Six groups of components and their status**

| Group | Components | Status | Tag |
|---|---|---|---|
| 1. Network and demand | 48 DTs, 12 feeders, 5 sub-divisions, 7,000 connections; load model on three real weather days | Load model LIVE | [P] |
| 2. Engines | Thermal, optimiser, forecaster, power flow, DR learning, fairness | Thermal and optimiser LIVE; the other four WIRED | [P] |
| 3. Control and dispatch | Two-track simulator; dispatcher timeline; named-approver rule | Simulator LIVE; dispatcher WIRED | [P] |
| 4. Protocol adapters | DLMS class 71, OCPP 1.6J, OpenADR 3, Beckn/UEI | WIRED; HES and charger links PILOT | [P] |
| 5. User channels | Dashboard, consumer phone view, field-worker app; WhatsApp, IVR, SMS | Screens and apps LIVE; messaging WIRED | [P] |
| 6. Interface and service | FastAPI API, SSE stream, WebSocket, protocol ledger, voice and typed ask | API and stream LIVE; ledger and voice WIRED | [P] |

The groups hand work to one another in a fixed order. The load model and the supply engine produce the demand and supply for each slot. The optimiser turns the shortfalls into a ranked plan. The plan waits for a named approver, and only then does the dispatcher schedule it against the timeline in Table 10.3. The adapters carry each scheduled command to its device, and the notices go out through the messaging channels [P]. The server-sent event stream carries the tick, event, plan, plans, risk and KPI messages to the dashboard, so the approver sees the same plan that the dispatcher holds [P]. The order matters for one reason. No group downstream of the approver can create a command on its own, because the approver's name is a precondition the code checks [P].

### 11.2 Interfaces and code facts

The product's code gives the numbers that describe its size. Table 11.2 lists them with their tags. Where an older product document gives a different count, the code count governs and the older figure is not used [P].

**Table 11.2 Interfaces and code facts, counted from the code**

| Item | Value | Tag |
|---|---|---|
| API operations under /api/v1 | 54: 39 GET and 15 POST | [P] |
| Server-sent event stream | One stream: tick, event, plan, plans, risk, kpis | [P] |
| WebSocket | One socket at /ws/voice | [P] |
| Backend language | Python 3.12, FastAPI | [P] |
| Frontend | Next.js 16; 29 page files, which are 28 screens and a redirect | [P] |
| Backend tests | 352 test functions | [P] |
| Frontend tests | 162 tests | [P] |
| Grounded tools | 15 read-only grid tools and 4 consumer tools | [P] |
| Roles | Six, with JWT sign-in | [P] |
| Safety invariants | Six, with 13 tests | [P] |

Older product documents give 335 tests, 26 to 29 pages and five safety invariants. Those figures are stale and this document does not use them [P].

### 11.3 Engines: method and status

Each engine in the product has a named method and a status from the build audit. Table 11.3 gives them in one place. The statuses are the only ones this document uses [P].

**Table 11.3 Engines, method and status**

| Engine | Method | Input | Status | Tag |
|---|---|---|---|---|
| Thermal | IEEE C57.91 reference points | Load and ambient temperature | LIVE | [P] |
| Optimiser | HiGHS mixed-integer linear program, with a tested greedy fallback | Candidate actions and caps | LIVE | [P] |
| Quantile forecaster | LightGBM, 3 quantiles, 13 features | Its 13 features, as the product defines them | WIRED; trained on synthetic data; PILOT for real meter data | [P] |
| Power flow | Radial sweep | Network model | WIRED | [P] |
| DR learning | Beta-Bernoulli model of response | Past events and responses | WIRED | [P] |
| Fairness | Jain index, Gini coefficient, Lorenz curve | Burden per connection | WIRED | [P] |
| Dispatcher | Timeline of notice, signal, command and verification | An approved plan | WIRED | [P] |
| Supply | Supply share per sub-division: 15% renewable, 5% grid storage, firm shares 0.88, 0.78, 0.68 | Supply data | Product engine, used by the model | [P] |

The optimiser is the reason the loop can run in the LIVE simulator. Its greedy fallback is tested, so a solver failure falls back to a simpler plan rather than to no plan [P]. The forecaster is the piece the product most needs to earn in a pilot. It is trained on synthetic data today, and the audit records real meter data as PILOT [P].

The load model and the supply engine are the two inputs every result depends on, so they are worth describing on their own. The load model gives each connection a 96-slot demand curve for three real weather days: the heatwave day at 44.2 °C, a monsoon cloud-cover day and a clear solar-noon day [P]. The model run takes those curves from the product's own load model with a fixed seed, and it checks that the per-DT totals equal the product's own totals to within 1e-9 [P]. The supply engine gives each sub-division its share of the demand that can be met. The product's assumptions are a 15% renewable share, 5% grid storage and firm shares of 0.88, 0.78 and 0.68 [P]. These inputs carry much of the result, because each DT's shortfall is set by its supply share and its rating before any lever acts [M, simulated]. Section 13 therefore tests the stress separately from the levers.

### 11.4 Thermal engine reference points

The thermal engine follows IEEE C57.91. Its two reference points are asserted in the product's own tests, and they are the figures this document quotes [P]. The first point is a transformer at rated load and 30 °C, with a temperature of 110.0 °C and a factor of 1.0x. The second is a transformer at 1.2 per-unit load and 42 °C, with a temperature of 146.1 °C and a factor of about 29x, as the product reports it [P].

**Table 11.4 Thermal reference points, asserted in the product's tests**

| Case | Load | Ambient | Temperature | Factor | Tag |
|---|---|---|---|---|---|
| Rated | Rated load (1.0 pu) | 30 °C | 110.0 °C | 1.0x | [P] |
| Overload | 1.2 pu | 42 °C | 146.1 °C | about 29x | [P] |
| Limit used by the model | Rated kVA × 0.9 power factor | Not varied | Not reported in the model outputs | Not applicable | [P], [M] |

The simulation results in Section 13 are stated against the rating limit, not against hot-spot temperature [M, simulated]. The reference points show that the thermal engine behaves sensibly at two known conditions. They do not show that the model's results were computed at hot-spot temperature.

### 11.5 Build-status audit, all 28 rows

The build audit is the only source for the LIVE, WIRED and PILOT tags used in this document [P]. Table 11.5 reproduces it in full.

**Table 11.5 Build-status audit of the UrjaGrid prototype, 28 capabilities**

| # | Capability | Status |
|---|---|---|
| 1 | Dashboard, 28 screens | LIVE |
| 2 | Home (consumer) phone view | LIVE |
| 3 | Field-worker app | LIVE |
| 4 | REST API, 54 routes | LIVE |
| 5 | Live event stream (SSE) | LIVE |
| 6 | Sign-in with 6 roles (JWT) | LIVE |
| 7 | Load model on real weather days | LIVE |
| 8 | Thermal model | LIVE |
| 9 | Optimiser with fallback | LIVE |
| 10 | Two-track simulator: baseline cut and trips | LIVE |
| 11 | Quantile forecaster | WIRED |
| 12 | Power-flow solver | WIRED |
| 13 | DR learning model | WIRED |
| 14 | Fairness indices | WIRED |
| 15 | Dispatcher timeline | WIRED |
| 16 | DLMS / HES limiter adapter | WIRED |
| 17 | OCPP adapter | WIRED |
| 18 | OpenADR adapter | WIRED |
| 19 | Beckn / UEI adapter | WIRED |
| 20 | WhatsApp, IVR, SMS channels | WIRED |
| 21 | Voice and typed ask (grounded tools) | WIRED |
| 22 | Protocol ledger | WIRED |
| 23 | Real head-end (HES/MDM) link | PILOT |
| 24 | Real charger links | PILOT |
| 25 | Production messaging contract | PILOT |
| 26 | India Energy Stack consent | PILOT |
| 27 | Hosted backend with persistence | PILOT |
| 28 | Forecaster trained on real meter data | PILOT |

Totals: 10 LIVE, 12 WIRED and 6 PILOT [P]. A WIRED capability is coded and unit-tested but is not called by the running simulator. That is the whole meaning of the tag, and it is the reason a WIRED capability is never described as running [P].

### 11.6 Protocols and adapters

The adapters are how a plan reaches a device, or how a notice reaches a home. Table 11.6 names each adapter and the standard or identifier it uses. The meter specification comes first, because the limiter that the product relies on is a requirement of the meter itself, not an add-on [S17].

**Table 11.6 Protocols, adapters and the meter specification**

| Adapter or standard | Identifier | Function | Status | Tag |
|---|---|---|---|---|
| Smart meter specification | CEA, February 2020; IS 16444 Part 1 and IS 15959 | Requires an integrated load-limiting and connect or disconnect switch | Specification, February 2020 | [S17] |
| DLMS class 71 limiter | OBIS 0.0.17.0.0.255 | Sets the load limit on the meter | WIRED; HES link PILOT | [P] |
| OCPP 1.6J | SetChargingProfile, schema-validated | Caps a charger's output | WIRED; charger links PILOT | [P] |
| OpenADR 3 | Events | Carries demand-response events | WIRED | [P] |
| Beckn / UEI | Adapter | Interface adapter; its message flow is not described in the facts file | WIRED | [P] |
| WhatsApp, IVR, SMS | Hindi (Latin script) and English templates | Sends notices and takes replies | WIRED | [P] |
| India Energy Stack | Consent | Consent for the national stack, not yet in place | PILOT | [P] |

The DLMS limiter needs a specific comment. It trips the relay when a home stays above its limit, then reconnects automatically [P]. The product's rules, the notice period and the named approver sit above the adapter, so the limiter itself is never the only control [P]. The India Energy Stack is a PILOT item. The government has named Delhi, Gujarat, Andhra Pradesh, Uttar Pradesh and Mumbai as pilot utilities for FY 2026 to 27, with ₹51.3 crore allocated to the programme [S25].

The OCPP adapter follows version 1.6J. It builds a SetChargingProfile command and validates it against the protocol schema [P]. OpenADR 3 events carry demand-response signals, and the product's adapter for them is WIRED [P]. Beckn and UEI adapters are recorded as WIRED, and the facts file does not describe their message flow [P]. The adapters differ in what they can prove today. The OCPP and OpenADR adapters are coded and unit-tested, as WIRED means, while the head-end link and the charger links are PILOT items that need a real system to connect to [P]. A judge should read each adapter's status in Table 11.5 before reading its description here.

### 11.7 Data, energy and money flows

Four kinds of flow cross the system: data, energy, commands and money. Table 11.7 names each flow, where it starts and where it ends, and its status. Money flows are the model's assumptions, so each carries an estimate tag.

**Table 11.7 Data, energy and money flows**

| Flow | From | To | What it carries | Status | Tag |
|---|---|---|---|---|---|
| Data | Load model and supply engine | Optimiser and dispatcher | Demand per slot, supply share, rating | LIVE | [P] |
| Energy, voluntary | Homes that accept the ask | DT load | Trimmed kWh; 658,572 kWh a year, base | Modelled, est. | [M] |
| Energy, deferral | Flexible T3 load | Later slots | Deferred kWh; 557,924 kWh a year, base | Modelled, est. | [M] |
| Commands | Approved plan | Meter, charger or DR platform via adapters | Limits and signals | WIRED; HES and charger links PILOT | [P] |
| Notices | Approved plan | Consumer | Message in Hindi or English | WIRED | [P] |
| Money, fee | DISCOM | Software | ₹8 a meter a month | Constant in code; DISCOM payer modelled | [P], [M] |
| Money, rebate | DISCOM | Home | ₹2 a kWh for load moved | Constant in code; modelled | [P], [M] |
| Money, messages | DISCOM | Messaging provider | ₹0.136 a message, two per home per event | Estimate from rate card | [A07], [A08], [S50] |
| Money, peer trade | Buyer and seller | Transaction charge, split equally between them | ₹0.42 a kWh, including GST | Constant in code; no P2P row in the audit | [P], [S26] |

The money flows show who pays for what. The DISCOM carries the fee, the rebates and the messages in the model, and the home carries none of the cost [M, est.]. Each of these is a design choice, and the cost figures in Section 14 test it. The data flow carries personal data as well. The Digital Personal Data Protection Rules were notified on 13 November 2025, and most obligations take effect about May 2027 [S27]. A pilot therefore has to plan its consent and data handling against those dates, not against the prototype's current state.

### 11.8 Failure handling: what the product does when a part fails

A grid system is judged as much by what it does when a part fails as by its normal path. Table 11.9 lists the failure cases the product's facts describe, and the response to each. Where the facts file is silent on a case, this document says so rather than filling the gap.

**Table 11.9 Failure cases and the product's response**

| Failure | Response in the product | Status | Tag |
|---|---|---|---|
| Solver fails to return a plan | Tested greedy fallback produces a plan | LIVE | [P] |
| A home stays above its limit | Relay trips; the limiter reconnects automatically | WIRED; limiter in the adapter | [P] |
| No named approver | Nothing dispatches | Enforced in code | [P] |
| Forecaster used on real meter data | Trained on synthetic data today; the real-data step is PILOT | PILOT | [P] |
| Head-end system not connected | No live route to meters; the model assumes the command lands | PILOT | [P], [M] |
| Charger link not connected | No live charger caps; the charger link is PILOT | PILOT | [P] |
| Notice channel fails | Not described in the facts file | Not stated | n/a |

The last row is the honest gap. The facts file names the notice channels and their status, but it does not describe a fallback when a channel fails. A pilot would need that fallback designed and tested, and this document does not claim it exists [P].

### 11.9 Known soft spots, stated plainly

Some limits are built into the product as it stands. Table 11.8 lists them in the order a judge would test them, with the place each one bites in the results.

**Table 11.8 Known soft spots and what this document says about each**

| Soft spot | What this document says | Tag |
|---|---|---|
| Live site runs on hand-written fixtures | Fixture numbers are never quoted | [P] |
| Backend is not deployed | Stated as a fact about the prototype; not relevant to the submission and never denied | [P] |
| Scenario Lab shows mixed relief on unserved energy | Reported as recorded: −333.7, −142.7, +2,143.8 and +2,733.7 kW-intervals over 96 intervals; the reason is the planner's target | [P] |
| Dispatcher, adapters, forecaster, power flow and DR model are unit-tested but not called by the simulator | Tagged WIRED; never described as running | [P] |
| DLMS limiter trips the relay on a sustained overrun | The document says a capped home must trim load, and never that nothing is switched off | [P] |
| Eskom's limit disconnects non-compliant meters | Stated as a risk; UrjaGrid adds notice, a floor, an expiry and a named approver | [S33] |
| Eskom's relief figure of 15.3 MW | Confirmed in one check and not in another, so this document does not rely on it | [S33] |
| Forecaster trained on synthetic data | Shown as PILOT until trained on real meter data | [P] |
| Network coordinates are approximations | Called a simulated network on real localities | [P] |
| Model is not a power-flow or forecast-error study | Results are simulation estimates for a pilot to test | [M] |
| Synthetic 2047 weather day | Not used; its renewable share matches the other days | [P] |

The Eskom row needs a note. Two verification checks disagreed about the pilot's relief figure, so this document keeps the Eskom evidence to the general pattern and the customer finding, which both checks support, and it does not use the exact figures [S33]. Section 9 covers the precedent in full. Section 2 repeats the four honest limits of the answer.

The architecture therefore proves less than its diagram suggests, and this is the right place to say so. The engines are tested, and the optimiser runs in the live simulator [P]. The forecaster, the power flow, the DR model, the fairness indices, the dispatcher and the adapters are tested but not yet called by the running system, and six capabilities need a real system before they can run in the field [P]. A pilot in one sub-division is the step that would move the head-end link and the real meter data from PILOT toward LIVE. Until then, the architecture is a credible design with working code behind it, and it is not a deployed grid service.

## 12. UrjaGrid sits beside DERMS and below the transformer, and no vendor text we read states meter-level limiting

**Answer.** Five vendor sources were read for this section, and the text quoted from them does not state a meter-level limit paired with a lifeline floor or a fairness record [S44, S52 to S55]. Vendors cover forecasting, demand response and transformer-level visibility, which is where UrjaGrid also works in its engines. UrjaGrid differs on the control point it uses, the rules it enforces and the named person who approves each plan. Its weakness is proof at scale: no pilot has run, and Schneider's own DERMS product already claims peak load management and load relief [S44].

### 12.1 Parity matrix: what each vendor's own text states

A parity matrix compares products on the same capabilities. Each vendor cell below comes only from the text quoted in the verification log for that vendor's page [S44, S52 to S55]. A cell marked n/s means the capability was not stated in that text. It does not mean the vendor lacks it. The n/s mark is never read as No.

**Table 12.1 Parity matrix, one row per capability**

| Capability | Fluentgrid | Itron DERMS | Bidgely | Kimbal | EcoStruxure DERMS | UrjaGrid |
|---|---|---|---|---|---|---|
| Automated demand response | Stated: automated DR triggers pre-configured actions [S52] | Stated: DR named [S53] | Stated: DR and load shifting [S54] | Stated: demand response [S55] | Stated: peak load management and load relief [S44] | WIRED: DR learning model; voluntary ask in model [P], [M] |
| Forecasting | n/s | Stated: AI-driven forecasting [S53] | n/s | n/s | n/s | WIRED: quantile forecaster [P] |
| Consumer notice | Stated: portals, apps or SMS [S52] | n/s | n/s | n/s | n/s | WIRED: WhatsApp, IVR, SMS [P] |
| Named human approval | n/s | n/s | Stated: "You set the rules and approve what matters" [S54] | n/s | n/s | Dispatcher WIRED; roles LIVE [P] |
| Meter-level load limit | n/s | n/s | n/s | n/s | n/s | WIRED: DLMS adapter; HES link PILOT [P] |
| Lifeline floor | n/s | n/s | n/s | n/s | n/s | Floors of 300 W and 500 W, enforced by invariant [P] |
| Fairness accounting | n/s | n/s | n/s | n/s | n/s | WIRED: Jain, Gini, Lorenz [P] |
| Transformer-level view | n/s | n/s | Stated: "See what's behind every transformer" [S54] | n/s | n/s | DT-level plan against thermal rating [P] |
| Storage | n/s | Stated: storage named [S53] | n/s | n/s | n/s | A lever only; no storage row in the audit [P] |
| Standards named | n/s | Stated: IEEE 2030.5, OCPP, OpenADR [S53] | n/s | n/s | n/s | OCPP 1.6J, OpenADR 3, DLMS [P] |
| Metering and head-end | n/s | n/s | n/s | Stated: meters, HES and MDM [S55] | n/s | Uses a head-end link; PILOT [P] |
| Market trading | n/s | n/s | n/s | Stated: automated power trading on IEX [S55] | n/s | P2P charge of ₹0.42 a kWh in code; no P2P row in audit [P], [S26] |

The table makes one thing visible. The vendor text covers forecasting, demand response and storage, and it covers metering and trading. It does not cover the three items that make UrjaGrid's design distinctive: a lifeline floor, a meter-level limit that is paired with notice, and an accounting of who bears the burden. Those are the rows that show n/s across the board, and this document does not claim that any vendor lacks them. It claims only that their own text does not state them.

### 12.2 The vendor sources, and the dates they carry

Table 12.2 records each source and what it says, so that a reader can check the parity matrix against the original text.

**Table 12.2 Vendor sources read for the parity matrix**

| Source | Date | What the quoted text says | Tag |
|---|---|---|---|
| Fluentgrid product page | October 2026 | Automated DR; notice through portals, apps or SMS | [S52] |
| Itron DERMS overview | October 2026 | AI-driven forecasting; DR; IEEE 2030.5, OCPP and OpenADR; storage | [S53] |
| Bidgely site | October 2026 | "See what's behind every transformer"; "You set the rules and approve what matters" | [S54] |
| Kimbal site | October 2026 | Meters, HES and MDM; demand response; automated power trading on IEX | [S55] |
| Schneider EcoStruxure DERMS release | 13 November 2019, per the verification log | Automates peak load management, load relief, voltage optimisation and VAR support | [S44] |

The verification log notes that these vendor pages were read as excerpts. A page that was silent on a capability is marked n/s in Table 12.1, and no silent page has been read as a No [S44, S52 to S55].

### 12.3 Schneider's footprint: AutoGrid, South Bihar and DERMS

Schneider Electric is the organiser of the challenge, and its portfolio is part of the context a judge will bring to this section. The facts below are the ones the verification log confirms, and they are the only Schneider facts this document uses [S42, S43, S44].

**Table 12.3 Schneider's footprint in demand response and distribution**

| Item | Fact | Date | Tag |
|---|---|---|---|
| AutoGrid | Uplight acquired AutoGrid from Schneider Electric | December 2023 | [S42] |
| Continuing link | Schneider remains a strategic investor in Uplight | December 2023 | [S42] |
| South Bihar DISCOM | 305 ring main units and 550 fault passage indicators, with a command-and-control centre on EcoStruxure Grid | March 2025 | [S43] |
| EcoStruxure DERMS | Automates peak load management, load relief, voltage optimisation and VAR support | 2019 release | [S44] |

These facts matter for one reason. Schneider has sold its demand-response software line and kept a stake in the buyer. It has also built distribution-grid control in an Indian DISCOM. UrjaGrid is not a competitor to Schneider's grid hardware, and it is not a substitute for Schneider's DERMS. It sits at a different point: below the transformer, at the level where a lifeline floor and a named approver matter.

### 12.4 Porter's five forces for DISCOM software in India

Porter's five forces test whether an industry is attractive to enter. Table 12.4 applies them to software that manages DT and feeder loads for a DISCOM. Each row cites the evidence it rests on, and each row gives the reading that follows for UrjaGrid.

**Table 12.4 Porter's five forces applied to DISCOM demand-response software**

| Force | Evidence | Reading for UrjaGrid | Tag |
|---|---|---|---|
| Rivalry | Five vendor sources read; AutoGrid moved to Uplight | Moderate. Vendors name the same categories but not the same rules | [S42], [S44], [S52 to S55] |
| Buyer power | Few DISCOMs buy at scale. AMISP service charges run from ₹60 to ₹146 a meter a month. Goa's fee is ₹117.50 a meter a month for 93 months | High. The DISCOM decides, and it compares service charges | [S19], [S56] |
| Buyer trust | UP moved about 83 lakh smart prepaid meters to postpaid in May 2026 | A trust risk that the product's consent and notice rules address | [S20] |
| Supplier power | Median single-phase meter award about ₹8,839. About 3% of DTs and 28% of feeder meters communicate | Moderate. Meters are cheap but the communication link is the gap | [S19] |
| Substitutes: storage | 10.4 GW awarded and about 1.8 GWh installed by March 2026. Storage at ₹2.1 to ₹2.8 a kWh cycled | Storage is cheaper per kWh but slower to arrive. The IEA puts flexibility at a cost "up to three times lower than building new capacity" | [S45], [S46], [S37] |
| Substitutes: behavioural DR | Tata Power-DDL has over 100,000 customers, with ₹50 or ₹100 per event | A substitute for the consumer ask, and a precedent for it | [S39] |
| Entrants | India Energy Stack pilots in five states for FY 2026 to 27, ₹51.3 crore; UPERC P2P pilot at ₹0.42 a kWh | Entry is open to software, but a DISCOM has to sign the contract | [S25], [S26] |

The forces point to a clear conclusion for UrjaGrid. The main threat is not a rival product. It is a DISCOM that prefers a storage asset it can own, or a vendor that bundles a limiter into a service charge. The product answers the second with a design that asks nothing of the home beyond the rebate, and it answers the first by treating storage as a lever that plugs in later.

### 12.5 Where UrjaGrid sits among the categories

The categories in the vendor text overlap. Table 12.5 places each category against the scope it covers, and then places UrjaGrid among them.

**Table 12.5 Where UrjaGrid sits among the categories**

| Category | Typical scope in the cited text | Where UrjaGrid sits | Tag |
|---|---|---|---|
| DER management (DERMS) | Peak load, load relief, voltage and VAR; forecasting; storage | Beside DERMS, at the DT and feeder level, with a narrower control scope | [S44], [S53] |
| Behavioural demand response | Incentives per event; alerts by SMS, calls and WhatsApp | Uses the same channels, but adds a meter-level limit, a floor and a named approver | [S39] |
| Head-end, meter data and MDM | Meters, HES and MDM; trading on IEX | Uses a head-end link as a dependency; does not replace one | [S55], [P] |
| Transformer analytics | Transformer-level visibility; load shifting | Works from a DT-level shortfall and thermal rating | [S54], [P] |
| Storage | Battery capacity tariffs and cost per kWh | A lever that plugs in, with a dispatch rule already coded | [S45], [S47], [S48], [P] |

The table locates UrjaGrid below the transformer and beside the DERMS platforms. It does not place UrjaGrid above them. That is a deliberate choice, and it limits what the product claims. A DISCOM that wants forecasting for the whole network needs a platform, and UrjaGrid does not replace one.

### 12.6 What UrjaGrid would never build

A product's boundaries are part of its positioning. Table 12.6 lists what UrjaGrid would not build, with the reason for each, so that a judge can hold the team to them.

**Table 12.6 What UrjaGrid would never build, and why**

| Item | Why it is excluded | Tag |
|---|---|---|
| Physical hardware | No physical hardware build is expected for the challenge; the limiter is already in the meter | [D4], [S17] |
| Automatic switching with no person behind it | Nothing dispatches without a named approver | [P] |
| A charge on the home | The model books the fee, rebates and messages to the DISCOM; the home pays nothing | [P], [M] |
| A language model that decides dispatch | No LLM SDK is imported in any engine; the model only phrases | [P] |
| Ownership of batteries | Storage stays a lever that plugs in when assets exist; no storage row is in the audit | [P] |
| A replacement for a planning-grade power-flow study | The model is not one; the product's radial sweep is WIRED, not a planning tool | [P], [M] |
| A tariff or pricing scheme for storage | Tariffs are set by the regulator, as the DERC orders show; the product takes them as inputs | [S47], [S48] |

The last row needs a check against the regulator's role. The DERC orders set capacity charges for the two battery projects, and the product uses those charges as inputs [S47, S48]. The product does not set a tariff of its own, and this document does not claim one.

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

## 18. The six-week pilot and the road to scale

**Answer.** The pilot takes one of the five sub-divisions in the seed network from read-only shadow mode to live control in six weeks, and it does so on the DISCOM's terms. Each stage opens only after the previous gate is passed, and the first two weeks dispatch nothing. The pilot is the test that turns the simulated 4.2 hours to 0.4 hours [M] into a measured number, and it is the first place where the five WIRED adapters meet a real head-end. Scale follows the same gates: four more sub-divisions in week five, then the rest of the DISCOM, then other states that run the same meter fleet.

### 18.1 Six-week plan

The pilot has one sub-division, the 48-transformer network is the reference, and the network is a simulated model of real localities in Bareilly and Mathura [P]. The plan below is a proposal for the DISCOM to approve. The durations are the team's own design choice, not a figure taken from any source. Each row says what is switched on, and the bars say when.

| Track | W1 | W2 | W3 | W4 | W5 | W6 | What is switched on |
|---|---|---|---|---|---|---|---|
| Shadow mode, read only | Shadow | Shadow | | | | | Plans are computed and logged; nothing is sent to a meter |
| Levers 1 to 3 live | | | Live | Live | | | Voluntary ask, flexible-load deferral and demand response, with charging |
| Lifeline caps live | | | | | Caps | | The 300 W and 500 W floors go live only after the T0 registry check |
| Four more sub-divisions | | | | | Wave | Wave | Same playbook, one sub-division at a time |
| T0 registry and field staff | Registry | Registry | Registry | Registry | Verified | | Every T0 home is verified before any cap is sent |
| Regulator view | Aggregates | Aggregates | Aggregates | Aggregates | Aggregates | Aggregates | The regulator sees sub-division totals only |

The lever order is the product's own, softest first: voluntary ask, flexible-load deferral, then the lowest cap level that closes the gap [P]. Caps are not switched on until week five, because the lifeline floor is the one lever that touches a home's supply directly. Every cap carries an expiry and at least 30 minutes of notice under the product's rule [P]. The dispatch timeline in the code notifies at T minus 120 minutes, signals at T minus 30, sends the head-end command at T minus 15, and verifies at T plus 15 [P]. The pilot runs that timeline for real.

### 18.2 Gates between stages

A gate is a named review with the DISCOM engineer who approves plans. Nothing moves to the next row until its gate is signed. The thresholds for each gate are to be agreed with the DISCOM before week one, and the team has not set numeric thresholds in advance. A threshold chosen before the first meter is read would be a guess.

| Gate | When | Passes when | If it fails |
|---|---|---|---|
| G1, shadow reconciles | End of W2 | Logged plans match the meter reads that the head-end returns for the same slots | Stay in shadow; fix the reads before any command is sent |
| G2, levers accepted | End of W4 | Command acknowledgements and the logged load changes agree with each other for the DTs that were short | Keep levers 1 to 3 on the DTs that pass and hold the rest in shadow |
| G3, lifeline safe | End of W5 | Every T0 home in the sub-division is in the verified registry, and no cap has gone to a T0 meter | No caps go out; the field team completes the registry first |
| G4, scale | End of W6 | The sub-division's outage hours, trips and complaints are reviewed against the simulated base case | Pilot continues in one sub-division; the scale decision moves to the next review |

Gate G3 is the most important one in the plan. The product's own rule says T0 is never capped, and the field registry is the only way a home that depends on life support is known to the system before a cap is sent [P]. The engineer's approval is the backstop for any home that is not yet on the registry, but it is a backstop, not a substitute.

### 18.3 From WIRED to LIVE: the five links a pilot must close

The product counts 12 capabilities as WIRED. They are coded and unit-tested, but the running simulator does not call them [P]. Five rails separate WIRED from LIVE. Each row names the rail, what the code uses today, and what the pilot must supply.

| Rail | Today in the code | What the pilot needs | Status in the audit |
|---|---|---|---|
| Head-end (smart meter limiter) | DLMS class 71 limiter adapter, run against a simulator | A vendor head-end API that accepts the limit command and returns an acknowledgement | WIRED; real head-end link is PILOT [P] |
| EV chargers | OCPP 1.6J `SetChargingProfile` adapter, schema-validated, run against a simulator | OCPP connection to the hubs of the sub-division's chargers | WIRED; real charger links are PILOT [P] |
| Public loads | OpenADR 3 event adapter, run against a simulator | An OpenADR link to the public loads that the DISCOM can reach | WIRED [P] |
| Messaging | WhatsApp, IVR and SMS templates in Hindi (Latin script) and English, run as mocks | A production messaging contract with the business messaging provider | WIRED; production contract is PILOT [P] |
| Backend | The FastAPI service is not deployed | A hosted backend with persistence, so that a pilot's records survive a restart | PILOT [P] |

The product audit counts 10 LIVE capabilities, 12 WIRED and 6 PILOT [P]. The pilot is the step that moves the first five WIRED rows up one tier. The consumer messaging rate used in the cost model is ₹0.115 a message plus 18% GST [S50], which the model carries as ₹0.136 a message [A07]. A production contract may use a different rate, and the model's message line would change with it.

### 18.4 What the pilot measures

The pilot measures the same quantities that the impact model computes, with the same definitions, so that the simulation and the measurement can be compared line by line. The outage definition is the one in the model: a home with no supply in a 15-minute slot counts as an outage slot, and outage hours are the sum of those slots at 0.25 hours each [M].

| Measure | Definition | Compared with |
|---|---|---|
| Outage hours per home | Meter-recorded supply loss in each 15-minute slot, summed per home | Simulated 4.21 hours (today) and 0.40 hours (base), heatwave day [M] |
| Transformer trips | Relay trips recorded on the sub-division's DTs | Simulated 32 trips today and 0 in the base case [M] |
| DT-hours above rating | Hours each DT runs above its rated kVA at 0.9 power factor | Simulated 23,896 DT-hours a year today and 5,011 in the base case [M] |
| Command acknowledgements | Share of limit and lever commands acknowledged by the head-end | No simulated equivalent; a new measure, defined in the pilot |
| Caps honoured | Share of capped homes whose load came down within the cap | Simulated compliance of 85%, 92% and 97% in bear, base and bull [A03] |
| T0 homes capped | Count of T0 connections that received any cap | Must be zero; the product's invariant is tested in code [P] |
| Complaints per thousand homes | Consumer complaints about caps, reconnection and messages | No simulated equivalent; a new measure |

Two of these measures do not exist in the simulation at all: command acknowledgements and complaints. They are included because the UP postpaid reversal, announced in May 2026, shows that a remote-control scheme can fail on trust even when its engineering works [S20]. A pilot that reports only outage hours would miss that failure.

### 18.5 The road to scale

Scale runs in three steps, and each step needs a signed gate. The first step covers the four remaining sub-divisions of the two DISCOMs in the seed network, MVVNL in Bareilly and DVVNL in Mathura [P]. The second step covers the DISCOM as a whole, which means the full set of sub-divisions and feeders under its distribution network. The third step is a state: Uttar Pradesh is one of the five states named for the India Energy Stack pilots in FY 2026-27 [S25], and the state has the one-and-a-half gigawatt-hour battery allocation in the 2025 storage tranche [S31]. The team does not claim that UrjaGrid is part of either programme.

Scale economics follow the unit cost. At the base case, the DISCOM pays ₹383 a meter a year [M], and the fee is ₹8 a meter a month [P]. A sub-division of the seed network carries about 1,400 connections on average, so the cost of a wave is a fixed fraction of the sub-division's own budget. The fee and messaging lines scale with the number of meters, while the rebates depend on the load each home shifts in the simulation. The team has not modelled economies of scale in messaging or head-end licences, so a state-wide figure is not stated here.

The honest statement for the panel is short. The pilot gives the DISCOM one sub-division, six weeks, and a set of measured numbers to compare with the simulation. Everything beyond that depends on gate G4 and on the DISCOM's own review.

---

## 19. Risks and mitigations

**Answer.** The register holds fourteen risks. Two of them are high on both probability and impact: a limit command that is never acknowledged, and DT meters that do not communicate. Every risk has one named mitigation, one owner and one early signal that a field team can watch. Risks R01 to R06 are the six risks on slide 9, and the others come from the soft spots in §4.2 and the desk research.

### 19.1 Scoring scale

Probability and impact are rated on a three-point scale. The score is probability multiplied by impact, so the maximum is 9. Scores of 6 and above need a named owner before week one, and scores of 4 are watched at each gate.

| Rating | Probability (P) | Impact (I) | Points used in score |
|---|---|---|---|
| High | Expected in the six-week pilot or in the first year of scale | Homes lose supply or a DISCOM loses trust in the product | 3 |
| Medium | Plausible in the pilot | Visible complaints or a rework of one sub-division | 2 |
| Low | Unlikely in the pilot | A delay or a change to a message template | 1 |

### 19.2 Risk register

| ID | Risk | P | I | Score | Mitigation | Owner | Early signal |
|---|---|---|---|---|---|---|---|
| R01 | A cap is seen as rationing by another name | M | H | 6 | Lifeline floor of 300 W for a home and 500 W for a shop; rotation through the fairness ledger; the comfort cap does not touch fan-and-lights or fridge-and-TV homes at the peak [M] | DISCOM sub-division engineer | Complaints about caps per thousand homes, by sub-division |
| R02 | A limit command is sent and never acknowledged | H | H | 9 | Acknowledgement check on every command; shadow mode for two weeks before any dispatch (G1) | Head-end vendor and the pilot team | Share of commands acknowledged, daily |
| R03 | Meter coverage is partial, so the sub-division's worst DTs are not reached | H | M | 6 | The pilot starts on the most saturated DTs first; the seed network ranks DTs by simulated shortfall [M] | Field staff | Homes on DTs with a working meter link, weekly |
| R04 | A T0 home is not on the registry when a cap is sent | M | H | 6 | Field registry before any cap (G3); engineer approval is the backstop for unregistered homes; T0 is never capped in code [P] | Field staff and the approving JE | Registry count against the 69 T0 connections in the seed network [P] |
| R05 | Prepaid mistrust returns, as it did in UP | M | H | 6 | Postpaid-compatible design; two hours of notice from the dispatch timeline; the messages are explained in Hindi and English; ₹2 a kWh rebate for shifting first [P] | DISCOM communications | Complaints per thousand messages sent |
| R06 | The simulated gain does not survive the real network | M | M | 4 | The pilot measures outage hours with the same definition as the model; the model's bear case is 0.83 hours [M] | Team, with the DISCOM audit | Pilot outage hours against the simulated bands |
| R07 | A real relay trips on a sustained overload | M | M | 4 | Notice and expiry on every cap; a trip rule of 130% for two slots, which means 2 hours out [P]; the meter reconnects automatically | AMISP | Trips per week, by DT |
| R08 | The head-end integration slips past week three | H | M | 6 | Vendor API agreed before W1; the shadow phase still runs without it on the logged plans | DISCOM IT | Weeks from contract to first live read |
| R09 | The demand-response rules stay in draft | M | H | 6 | The sandbox request goes to the state regulator; the draft rules add a demand-response framework [S24] and are not yet final | Team with the state regulator | Date of the final rules |
| R10 | Consumer data is handled without consent under the new data law | M | H | 6 | Most obligations take effect from about May 2027 [S27]; the pilot records only the meter and connection data that the plan needs; a compliance review is a gate item | DISCOM data protection lead | Open findings from the compliance review |
| R11 | The forecaster is wrong because it was trained on synthetic data | H | L | 3 | The forecaster is WIRED, not LIVE; the planner works from scenario demand until real meter history is available [P] | Team | Forecast error against the meter reads, once the history exists |
| R12 | DT meters do not communicate, so the lever has nothing to read | H | H | 9 | Only about 3% of DTs with smart meters are in communicating mode, and about 28% of feeder meters [S19]; the pilot starts where the meters communicate | AMISP | Share of pilot DTs in communicating mode |
| R13 | The DISCOM asks for storage before the software is trusted | L | M | 2 | The contrarian line is stated before a judge raises it (§3.2); storage is lever 4, coded against a simulator | Team | Board questions about storage in the pilot review |
| R14 | Under-use of data means the pilot's logs are not read | H | L | 3 | Advanced utilities use less than a quarter of the data available to them [S28]; the pilot names one engineer who reads the logs at each gate | DISCOM engineer | Gate reviews held on schedule |

The six risks on slide 9 are R01 to R06 here: the cap seen as rationing, the missed command, partial coverage, the unlisted T0 home, prepaid mistrust, and the simulated model being wrong. The remaining rows come from the soft spots in §4.2, the verification results and the desk research.

### 19.3 Reading the register

The register puts the two highest scores on the link between the software and the meter. A missed command (R02) and a DT meter that does not communicate (R12) would both leave the lever with nothing to act on, and both show up in the first gate. The pilot is designed to find them early, when the cost of a miss is one sub-division and six weeks. The social risks (R01, R04, R05) carry the same score as the technical ones, because the UP reversal shows that a scheme can fail on trust in a single season [S20].

The legal and regulatory risks (R09, R10) are rated medium probability and high impact. The demand-response framework is still a draft, dated 17 March 2026 [S24], and the data protection obligations start from about May 2027 [S27]. Neither risk is closed by the pilot alone, so each has a named owner outside the team.

Two risks are rated low on impact. R11 is a forecasting risk and the forecaster is not on the live path. R13 is a debate risk and carries no physical consequence. The team lists both so that a reader can see what has been left out of the scoring and why.

---

## 20. Assumptions register

**Answer.** The model rests on eleven stated assumptions, A01 to A11, and on the product's own constants. Each assumption has a bear, base and bull value, or a single value where the case does not change it. The base case uses the middle values, and the bear case is the one a DISCOM engineer should test first. One assumption, the home inverter cost behind the coping comparison in §14, is not confirmed by the verification pass, and this section says so plainly. Every result that depends on the assumptions is simulated or an estimate.

### 20.1 Model assumptions A01 to A11

| ID | Assumption | Bear | Base | Bull | Reason for the value | Source |
|---|---|---|---|---|---|---|
| A01 | Share of T1 and T2 load shifted on a voluntary ask | 3% | 5% | 10% | Voluntary response is modest; the bull value assumes a stronger reward | [A01] |
| A02 | Share of T3 flexible load deferred | 30% | 50% | 70% | Flexible loads such as water heating can wait; the base value is half | [A02] |
| A03 | Share of capped load that comes off as commanded | 85% | 92% | 97% | Eskom saw response of at least 70% once faults were fixed [S33]; the bear value is set above that | [A03] |
| A04 | Days in the year: heatwave, monsoon cloud, mild | 45 | 75 | 245 | Fixed across cases; the split is the team's planning assumption for one year | [A04] |
| A05 | Evening dip window | 18:00 to 23:00 | 18:00 to 23:00 | 18:00 to 23:00 | Fixed; the window is where the grid's evening ramp sits [S03] | [A05] |
| A06 | Extra evening shortfall for the stress test | 0% to 40% | 0% to 40% | 0% to 40% | Fixed across cases; the stress test runs the same range for every case | [A06] |
| A07 | Cost of one message | ₹0.136 | ₹0.136 | ₹0.136 | ₹0.115 plus 18% GST [S50], rounded | [A07] |
| A08 | Messages per home per event | 2 | 2 | 2 | One message on notice and one on completion | [A08] |
| A09 | Battery capacity tariff, per kW a year | ₹3,591 | ₹5,700 | n/a | The two DERC orders, 2026 and 2024 [S48, S47]; used as comparators, not as cases | [A09] |
| A10 | Home inverter and battery cost | ₹14,000 | ₹19,000 | n/a | Retail listing [S51]; not confirmed by the verification pass (see 20.3) | [A10] |
| A11 | Inverter life, years | 5 | 5 | 5 | Planning assumption, the same in every case | [A11] |

The values for A01 to A03 are the only ones that change the result, and they are the three that a DISCOM can test in the pilot. A04 and A05 set the shape of the year and the stress test. A07 and A08 set the messaging line of the cost, which is ₹6,94,960 a year in every case [M].

### 20.2 Product constants

The product constants come from the code, not from a judgement, and they are the same in every case. Each one is listed with the rule it enforces.

| Constant | Value | What it does |
|---|---|---|
| Power factor | 0.9 | Converts a DT's rated kVA into the kW it can supply |
| Tolerance | 3% | A DT short by more than 3% of demand is a shedding candidate |
| Shedding share | 50% | Half of the candidates in each sub-division are cut in a slot, least burdened first |
| Trip threshold | 130% of rating | A DT above this for two slots trips |
| Trip length | 8 slots (2 hours) | The time a tripped DT stays out |
| Rebound | 30% | Share of each lever's relief that returns later |
| Release | 15% a slot | Speed at which the rebound returns |
| Fee | ₹8 a meter a month | The DISCOM's software fee, ₹96 a meter a year [P] |
| Rebate | ₹2 a kWh | Paid to a home that shifts load before a cap [P] |
| Cap levels | 1,000/2,000 W; 500/1,000 W; 300/500 W | Home and shop caps for comfort, essential and lifeline levels [P] |

The notice rule in the code is at least 30 minutes [P]. The dispatch timeline in the same code notifies at T minus 120 minutes [P]. The deck and the Q&A sheet say two hours' notice, which is the timeline's notification step, and the register uses the same meaning.

### 20.3 The assumption that is not confirmed

The inverter comparator in §14 rests on A10 and A11. The raw research gives a retail price of ₹14,000 to ₹19,000 for an 1,100 VA inverter with a 150 Ah battery [S51]. The verification pass could not reproduce that figure. The cited page no longer carries the claim, a search for the same product returned a different unit, and current retail listings for the same specification were in the range ₹19,490 to ₹30,498 [S51]. The row is rated low confidence in the raw file, so it cannot carry a claim without a caveat.

The effect is limited but real. If the comparator is re-priced at ₹19,490 to ₹30,498 and kept on the same five-year life, the annual cost is ₹3,898 to ₹6,100 a year (arithmetic on A11). That is above the ₹2,800 to ₹3,800 range the team used. The ₹383 a meter a year figure does not depend on A10, because the cost model uses the DISCOM's own fee, rebates and messages. The comparison of a home's coping cost is the only place where the inverter figure matters, and that comparison is labelled as an estimate in §14. The team will re-source the price before the figure is used again.

### 20.4 Why these values and not others

The team chose the bear value for A01 to A03 so that the bear case would still show a large gain. The bear case gives 0.83 hours a home on the heatwave day, against 4.21 hours today [M]. The base case is set at the middle of the range, and the bull case is the most favourable value the team thinks a DISCOM would accept. None of the three cases is a forecast.

The compliance value A03 has the most weight. At 85% in the bear case, the model assumes that about one command in seven does not produce the commanded load change. Eskom's pilot reached at least 70% response after its faults were fixed [S33], so the bear value sits above the lowest response that a utility has reported. The pilot's acknowledgement measure (§18.4) tests this value directly.

A02 is the most assumption-heavy number after A03. Deferring flexible load is a claim about which appliances can wait, and the team has no survey of Indian households that measures it. The base value of 50% is therefore a planning value, and the bear value of 30% is the one to test first in the pilot.

---

## 21. Research method, limits and the validation still to run

**Answer.** The research is desk research: 57 source rows in four raw files, checked by a second pass that opened each cited page and quoted only what it could read. The verification pass confirmed most rows, changed or qualified nine, and left some rows unconfirmed; the changes are listed here and applied in the document. The model has stated limits that the deck and the document both disclose, and no interview, pilot or letter of intent has been run. The validation plan that follows is a plan, and it is not reported as done.

### 21.1 Research method

The raw research is in four files, one for each of the four research questions: grid and reliability, meters and regulation, flexibility and precedents, and competition and costs. Each row gives an identifier from S01 to S57, the claim, the value, the date, the source, the URL and a confidence rating. A fifth file, the conflicts log, records twelve places where two sources disagreed and states which figure the document uses.

The verification pass was run as four parallel checks, one per raw file. Each check opened every URL it was given, or used a search as a fallback where the primary PDF could not be read as text. A row was marked VERIFIED when the value and any quoted words matched, CORRECTED when the value or a quoted word or date did not match and a replacement was found, and UNVERIFIABLE when neither could be confirmed. A correction changes the document. An unverifiable row stays only if its raw confidence was high, and otherwise it is dropped or marked as an estimate.

The research uses only the sources that the verification pass could open or search. Where a primary document could not be read, the research says so in the table below, and the claim is tagged with the secondary source that reports it.

### 21.2 Corrections applied and rows not used

The table lists each change made by the verification pass. Each correction is applied in every section that uses the row, and the old wording is removed.

| Row | Change | What the document now says |
|---|---|---|
| S10 | The source says "90%", not "nearly 90%" | Moisture ingress is responsible for 90% of transformer failures, as reported [S10] |
| S11 | The national 15.04% comes from a second source; the cited article covers Uttar Pradesh only | UP 19.54% for FY25 [S11]; national 15.04% for FY25 from the Ministry of Power and PFC rating, cited separately |
| S13 | The lifeline rates were confirmed for FY18 to FY21 only | The lifeline tariff of ₹50 a kW a month and ₹3.00 a kWh is confirmed for FY18 to FY21 [S13] |
| S19 | The state-average service fee ranges from ₹60 to ₹146 a meter a month | State averages run from ₹60 (West Bengal) to ₹146 (Madhya Pradesh) [S19] |
| S20 | The announcement date is 5 May 2026 in the source | About 83 lakh meters moved to postpaid, announced in May 2026 [S20] |
| S24 | The article is dated 17 March 2026 | Draft amendment rules add demand response; still draft [S24] |
| S29 | The article is dated 23 August 2026 | 11.47 lakh e-rickshaws in UP; most charge through theft, per an RTO official [S29] |
| S37 | The equity quote in the IEA report differs from the one in the raw file | Limited public awareness and unequal access risk excluding some groups, undermining fairness and trust [S37] |
| S51 | The inverter price could not be reproduced | Stated as an estimate, with the range in §20.3 |

Some rows are not used anywhere in the document. S04, S05, S08, S15 and S57 stayed unverified after a genuine attempt, and their values do not appear in any section. S09 has a conflict: the first pass found only the FY24 figures, and the second pass confirmed the FY25 figures from the CEA report. The document uses none of the S09 values in sections 18 to 23.

Four rows are used with a caveat. The quoted words in S18 (Annexure H, "load curtailment in place of load shedding") and S22 (the MoP guidelines, "load shedding is not an option") could not be read from the primary documents, although the rows are rated high in the raw file. The document quotes them only as the source's stated words, and the pitch and deck say so where they use them. The S33 figure of 15.3 MW was confirmed in one pass and not in the other, so it is marked for re-check against the Eskom report. S07 has three sub-figures that the verification could not confirm: the feeder-log hours of 3.5 and 4.8, the share of areas outside 230 V ±6%, and the share of the sample under ₹20,000 a month. The headline figures of about 2 hours a day, 3.5 hours in small towns and 1.3 hours at district headquarters were confirmed.

### 21.3 Model limits

The impact model measures outage hours, the metric that the brief asks for [X4, D5]. It does not measure everything a DISCOM cares about, and the limits below are stated in the deck on slide 10 and in §13.

| Limit | Effect on the result | How it is stated |
|---|---|---|
| The network is simulated, on real localities | The 48 DTs and 7,000 connections are a model, not a DISCOM's asset register [P] | "Simulated network on real Bareilly and Mathura localities" |
| The demand comes from the product's own load model, on three real weather days | The heatwave day is 44.2 °C, and the other two days are monsoon and mild [P] | Weather days named in §13 |
| The model assumes the plan is approved and the command lands | Compliance is A03; at 85% in the bear case the result is worse | Stated in §13 and in the stress test |
| The planner in the product targets supply gaps, and the Scenario Lab is mixed on unserved energy | The product's own Scenario Lab shows mixed relief on unserved kWh [P] | Disclosed on slide 10 and in §4.2 |
| The model applies the thermal rating as a limit | A DT that overheats is shed as well as one that is short of supply; this is a choice the team made | Stated in §13 with the reason |
| The model is not a power-flow study and not a forecast-error study | The radial power flow and the forecaster are WIRED, not in the model | Stated in §13 |
| Results are simulations | The 4.2 hours and 0.4 hours are model outputs | Labelled simulated or est. wherever they appear [M] |

The Scenario Lab limit is the most important, because it is the only place where the product's own tool gives an answer that does not favour the case. The team does not hide it. The model measures a different thing, outage hours with the lever ladder applied to every short DT, and the document says that the two measures differ.

### 21.4 Customer validation plan

No interview, survey, pilot or letter of intent has been run, and the document does not claim one. The validation plan below names who would be asked, how many, the question, and the design decision that the answer could change. The counts are the team's plan, and each one is a target, not a result.

| Who | Target n | The question | How the answer changes the design |
|---|---|---|---|
| Junior and Assistant Engineers, who approve plans | 6 | Would you approve a ranked plan with a named approver and a two-hour notice | If most would not approve, the approval step moves to the sub-division head and the plan format changes |
| Households on lifeline supply | 20 | Is a 300 W limit for two hours fair, and what would you need to keep the fan and phone on | If the answer is no, the lifeline floor rises, and the cap level moves to the 500 W step for homes |
| Shop owners, small and cold-chain | 10 | Which loads must stay on during a cap | If cold-chain owners cannot accept any cap, those loads move to the T0 list |
| Head-end vendors | 2 | What command path and acknowledgement do you support | If the acknowledgement is weaker than the design assumes, the gate G2 measure is rewritten |

The plan does not include households on the T0 list. Those homes are never capped in code, and the field registry, not a survey, is how they are identified [P]. The interviews are a plan to run before the pilot's first gate, and the team has not run any of them.

### 21.5 Still to run

Five items are still to run, and each is listed with the gate that depends on it. The first is the validation plan in §21.4, which must run before G1. The second is the head-end acknowledgement test, which must run before G2. The third is a readable copy of each primary document in §21.2, so that the four rows with a caveat can be checked against their original wording. The fourth is the DISCOM's own approval of the gates in §18.2. The fifth is the pilot itself, which is the only route to a measured reliability result. Until these run, every number in the document is a simulation, a source figure or an estimate, and the document says which.

---

## 22. Anticipated judge questions

**Answer.** The panel is likely to test five areas: whether the 90% cut is measured, why storage is not the lead answer, whether the lifeline cap harms the poor, whether the software can reach a real meter, and what a DISCOM pays. The answers below build on the defence sheet in §14, with three corrections: the service-fee range is ₹60 to ₹146, the inverter figure is an estimate, and the judging weights are not treated as confirmed. Each answer gives the number that backs it and states whether that number is simulated, sourced or a product fact.

### 22.1 Measurement and the model

**Q1. The panel will ask: is the 90% cut measured or simulated.**
It is simulated. The cut comes from the impact model on the prototype's 48-transformer, 7,000-connection network, on the heatwave day of 44.2 °C, under the same shedding and trip rules as today [M]. Outage hours fall from 4.21 to 0.40 per home, which is a cut of about 90% [M]. The six-week pilot is designed to measure it on one sub-division before the number is quoted as a result.

**Q2. The panel will ask: why is a community battery not the first answer.**
A battery is lever 4 in the ladder, and the dispatch code for storage is written and tested against a simulator [P]. On cost, the base case delivers peak relief at ₹1,448 per kW a year [M], against Delhi's approved distribution battery tariffs of ₹3,591 and ₹5,700 per kW a year [S48, S47]. On timing, India awarded 10.4 GW of standalone storage in 2025, and about 1.8 GWh was installed by March 2026 [S45]. The meters are already installed, and the battery is not a prerequisite for the first lever.

**Q3. The panel will ask: does a 300 W limit not switch people off anyway.**
A home that stays above its limit can trip, because the meter's relay opens when the load stays too high, and then it reconnects automatically [P]. Eskom's limiting pilot has the same behaviour, where a home over 10 A is disconnected [S33]. UrjaGrid adds two hours' notice, an expiry on every cap and a rebate of ₹2 a kWh for shifting first [P]. In the base case, 1,751 of the 3,402 capped connections at the peak must trim their load [M].

**Q4. The panel will ask: how does the model treat a DT that is still short after the ladder.**
The model applies the lever ladder to each short DT in order, and then applies the same shedding and trip rules as today to any DT that is still short [M]. Under the base case, four of the 48 DTs are still cut on the heatwave day. Those are the transformers that need an upgrade, and the model output lists which four [M]. The team does not hide the four DTs, and the document says that they need steel.

**Q5. The panel will ask: how much of the result depends on the assumptions.**
The result depends most on A03, the share of commanded load that comes off, and on A01 and A02, the voluntary ask and the flexible-load share [A01, A02, A03]. In the bear case, with all three at their low values, outage hours are 0.83 per home on the heatwave day [M]. Even that bear case removes most of the outage. The stress test shows the base case holds at 0.40 hours up to a 30% extra evening shortfall and rises to 1.00 hour at 40% [M].

### 22.2 Fairness, the poor and the homes on life support

**Q6. The panel will ask: is this the DISCOM rationing the poor.**
Today the poor are rationed by a feeder switch that has no floor. UrjaGrid gives each home a 300 W floor for a home and 500 W for a shop, never caps a T0 connection, rotates the burden through a fairness ledger, and needs a named engineer's approval for every plan [P]. Under the simulated peak, the comfort cap constrains cooler, AC and cold-chain loads, and it constrains none of the fan-and-lights or fridge-and-TV homes at the first cap level [M].

**Q7. The panel will ask: what about homes on life support.**
Those homes are in tier T0, and T0 is never capped, asked or shed. That rule is a coded invariant with its own test [P]. The field registry is how T0 homes are found, and gate G3 in §18.2 says no cap goes out until the registry for the sub-division is verified. The engineer's approval is the backstop for any home that is not yet on the registry.

**Q8. The panel will ask: is the cap rotated fairly across the lane.**
The fairness ledger records which homes were capped in each slot, and the rotation spreads the burden across the lane. The fairness measures are Jain's index, the Gini coefficient and the Lorenz curve, which are coded in the product and are WIRED rather than LIVE [P]. The impact model does not yet report those indices, so the team does not quote a fairness number. The pilot is where the ledger is first read on real homes.

**Q9. The panel will ask: is the comfort cap a cost to the low-income home.**
The cap costs a home comfort at the peak, not supply. In the simulated heatwave day, 54% of connections of type T1 and T2 are above the comfort cap and 68% are above the lifeline cap [M]. The home keeps its supply, and the rebate pays ₹2 a kWh for load shifted before the cap [P]. The team does not claim that a cap costs the home nothing.

### 22.3 Feasibility, the meter and the data

**Q10. The panel will ask: is any of this connected to a real meter.**
No. The DLMS limiter, OCPP, OpenADR, Beckn and messaging adapters are coded and unit-tested against simulators, which makes them WIRED [P]. The first task of the pilot is to connect a real head-end, and the five links in §18.3 are the list. The product counts 10 LIVE, 12 WIRED and 6 PILOT capabilities [P].

**Q11. The panel will ask: where do the forecasts come from.**
The forecaster is a LightGBM quantile model with three quantiles and 13 features. It is trained on synthetic data and is tagged WIRED [P]. Training on real meter history is a pilot item. Until then the planner works from the scenario's demand, which the model also uses for the simulated results [M].

**Q12. The panel will ask: how does the data law affect the pilot.**
The data protection rules were notified on 13 November 2025, and most of their obligations take effect from about May 2027 [S27]. The pilot runs within that window, so the team treats the obligations as a gate item. The pilot records only the meter and connection data the plan needs, and a compliance review is part of gate G4 (risk R10 in §19). The team does not make a compliance claim beyond that.

**Q13. The panel will ask: is the network realistic.**
It is a simulated network on real Bareilly and Mathura localities, sized tight on purpose. On the heatwave day, 27 of 48 transformers exceed their rating [M]. The simulated outage of 4.21 hours per home sits in the same range as the 3.5 hours a day that CEEW's meters recorded in notified town areas of the two districts [S07]. That comparison is a plausibility check only, because the CEEW figures are from 2019 and from a different day type.

**Q14. The panel will ask: did you talk to engineers or households.**
Not yet, and the team does not claim to have. The validation plan covers six JEs and AEs, 20 households, 10 shop owners and two head-end vendors, each with one question that would change the design [§21.4]. No interview has been run, and the deck says so on the validation panel.

### 22.4 The DISCOM, the cost and the market

**Q15. The panel will ask: why would a DISCOM pay.**
In the base case the DISCOM pays ₹383 a meter a year, which is about ₹32 a month, to cover the fee, rebates and messages [M]. Against that, the simulated base case buys each avoided outage hour for ₹0.29 [M], cuts transformer overload hours by 79% in a simulated year [M], and gives the DISCOM a software route to the reliability standard in the Ministry's guidelines, which say load shedding is not an option [S22]. The DISCOM's whole cost sits in the ₹383: one fee, the rebates and the messages.

**Q16. The panel will ask: is ₹383 a meter a year fair against the fees that AMISPs already charge.**
The state-average AMISP fee ranges from ₹60 to ₹146 a meter a month [S19]. That is ₹720 to ₹1,752 a meter a year, which is above the ₹383 a year in UrjaGrid's base case. The difference is that UrjaGrid's fee is ₹8 a meter a month [P], and the rest of the base case is rebates that go to homes and messages that go to the messaging provider. The comparison is between a software line and a metering service, so it is a comparison of scope, not of price alone.

**Q17. The panel will ask: why would a home pay nothing.**
The home pays nothing for the software, because the DISCOM pays the fee [P]. The rebates come back to the home, and the messages are paid by the DISCOM inside the ₹383. A home that wants its own inverter or battery pays for it, and the team's estimate of that cost is ₹2,800 to ₹3,800 a year, tagged as an estimate, because the inverter price is not confirmed (§20.3) [A10, A11].

**Q18. The panel will ask: what do the judging weights say about the impact case.**
The team's copy of the criteria lists impact and measurability as the heaviest criterion, but the weights were not confirmed on the official FAQ page during verification [S32]. The deck does not depend on the weights. Its case rests on the outage measure, the cost per home and the pilot's gates, and each of those can be read without the weights.

**Q19. The panel will ask: what does Schneider's own stack already do.**
Schneider's DERMS product automates peak load management, load relief, voltage optimisation and VAR support [S44], and its ADMS covers the feeder. UrjaGrid works below the transformer, at the meter, with a human approval gate and a channel to the home. It complements that stack rather than replacing it. Schneider's DER management is named in the research as a neighbour, not a competitor, and the parity matrix in §12 shows where each product sits.

**Q20. The panel will ask: why not a mini-grid.**
A mini-grid in India is priced at about ₹10 to ₹20 a kWh, against a rural grid tariff of ₹3 to ₹6.5 a kWh [S49]. Those figures come from a secondary source, not from the primary report, and the team uses them only to show the scale of the price gap. The brief asks for tools that work without major capital in grid reinforcement [X4], and a mini-grid is a capital build, so it is not the first answer. It remains a possible later step for a sub-division that the software cannot serve.

### 22.5 The numbers used in the answers

The table lists the numbers that the answers use, with the tag and the section that holds the full evidence.

| Number | Value | Tag | Where it is shown |
|---|---|---|---|
| Outage hours per home, heatwave day, today and base | 4.21 and 0.40 | [M] | §13, T2 |
| Cut in outage hours, heatwave day | About 90% | [M] | §13 |
| Outage hours per home a year, today and base | 1,345 and 18 | [M] | §13, T4 |
| Stress test, base, 0 to 30% and 40% extra shortfall | 0.40 and 1.00 | [M] | §13, T3 |
| Cost per meter a year, base | ₹383 | [M] | §14, T5 |
| Cost per outage hour avoided, base | ₹0.29 | [M] | §14, T5 |
| Cost per kW of peak relief a year, base | ₹1,448 | [M] | §14, T5 |
| Battery capacity tariffs | ₹3,591 and ₹5,700 per kW a year | [S48, S47] | §14 |
| AMISP fee range, state averages | ₹60 to ₹146 a meter a month | [S19] | §14 |
| Fee to the DISCOM | ₹8 a meter a month | [P] | §14 |
| Transformer overload hours, base against today | Down 79% | [M] | §13, T4 |

---

## 23. Slide blueprint

**Answer.** The eleven slides of the deck map onto the sections of this document one to one, and every panel on a core slide points to the section that holds its evidence. Every number on a panel carries the tag used in the document, so a judge can trace a claim from the slide to its source. The slide blueprint is the check that the deck does not state a number the document does not hold. Slide 10 is the appendix and holds the assumptions, the results, the limits and the sources.

### 23.1 Panel map

| Slide | Panel | Document section | Source tags |
|---|---|---|---|
| 2, Problem | The gap has moved to the evening | §3 | [S02] |
| 2, Problem | The feeder log hides the home | §4 | [S06], [S07] |
| 2, Problem | The transformer is the weak link | §4 | [S10], [S11] |
| 2, Problem | Three causes, one blunt tool | §5 | None; the cause framing is from §5, and S04 is not used |
| 2, Problem | Who loses what in a cut | §4 | [S07], [S14] |
| 2, Problem | A limiter on every wall, unused | §6 | [S16], [S17], [S19] |
| 3, Solution | Six levers, always in this order | §10 | [P] |
| 3, Solution | 100 homes on the heatwave day | §13 | [M] |
| 3, Solution | Four tiers, three cap levels, one floor | §10 | [P], [M] |
| 3, Solution | One evening, six timed steps | §10 | [P] |
| 3, Solution | Six safety rules, each with a test | §10 and §11 | [P] |
| 4, Challenge fit | The brief, line by line | §1 | [X1] to [X4], [D1] to [D6] |
| 4, Challenge fit | Five suggested directions, five tests | §8 | [S45], [S46], [S47] |
| 4, Challenge fit | Judged on five criteria | §1 | [S32], unconfirmed weights |
| 4, Challenge fit | Limit, do not cut: three precedents | §9 | [S33], [S35], [S36] |
| 4, Challenge fit | Software arrives before steel | §8 | [S45] |
| 5, Features | Prototype screens, illustrative data | §11 | [P] |
| 5, Features | What the home receives | §10 | [P] |
| 5, Features | Five roles, one screen each | §10 | [P] |
| 5, Features | Role by channel | §10 | [P] |
| 5, Features | Built and counted | §11 | [P] |
| 6, Tech | Six layers, data up and commands down | §11 | [P] |
| 6, Tech | Eight engines, each with its own tests | §11 | [P] |
| 6, Tech | Status, counted honestly | §11 and §4.3 | [P] |
| 6, Tech | Thermal model meets the standard | §11 | [P] |
| 7, Innovation | Six features, six products, one set of rows | §12 | [S44], [S52] to [S55] |
| 7, Innovation | Who the comfort cap touches | §16 | [M] |
| 7, Innovation | Five choices, new together | §12 | [P] |
| 7, Innovation | Beside the grid stack, not over it | §12 | [S42], [S43], [S44] |
| 7, Innovation | Borrowed, then changed | §9 | [S33], [S35], [S37] |
| 8, Impact | Outage per home, heatwave day | §13 | [M] |
| 8, Impact | Hours without supply, three day types | §13 | [M] |
| 8, Impact | A 30% evening dip is absorbed | §13 | [M] |
| 8, Impact | What the home gives up instead | §13 and §16 | [M] |
| 8, Impact | ₹383 a meter a year, ₹0 to the home | §14 | [M], [A07], [A08] |
| 8, Impact | ₹ per kW of peak relief, a year | §14 | [M], [S48], [S47] |
| 9, Roadmap | Six weeks: shadow, soft levers, lifeline, waves | §18 | [P] |
| 9, Roadmap | Who owns, runs and pays | §15 | [P] |
| 9, Roadmap | From WIRED to LIVE: five links | §18 | [P] |
| 9, Roadmap | Six risks, each with one mitigation | §19 | [P] |
| 9, Roadmap | Validation plan, not yet run | §21 | No interview is claimed |
| 10, Appendix | Assumptions behind the 4.2 h to 0.4 h | §20 | [A01] to [A11] |
| 10, Appendix | The result, bear to bull | §13 | [M] |
| 10, Appendix | Five honest limits | §21 | [M], [P] |
| 10, Appendix | Definitions | Appendix C | [P] |
| 10, Appendix | Sources | Appendix A | [S01] to [S57] as cited |
| 11, Thank you | No panel; the team table repeats the cover | §0 | None |

Slide 2 panel "Three causes, one blunt tool" uses the cause framing from §5 and carries no source number of its own, because the S04 figures were not confirmed.

### 23.2 Number tags on each slide

The tags follow the rules in §7.1. A number is tagged as a source, a product fact, a model output or an assumption, and it is never mixed with another kind. The table sets out which kind of number appears on which slide, so that the deck can be checked against the document in one pass.

| Slide | Source numbers | Product facts | Model outputs | Assumptions |
|---|---|---|---|---|
| 2, Problem | Grid, meter and transformer figures | None | None | None |
| 3, Solution | None | Lever order, caps, tiers, timeline, safety rules | Tier and cap shares on the heatwave day | None |
| 4, Challenge fit | Precedent and storage figures | None | None | None |
| 5, Features | None | Screens, roles, channels, counts | None | None |
| 6, Tech | None | Status counts, engine facts, thermal reference points | None | None |
| 7, Innovation | Vendor page wording, marked n/s where not stated | Prototype column | Equity shares at the peak | None |
| 8, Impact | Battery tariffs, fee and messaging rate | None | Outage hours, cost, relief and the year | A07, A08, A09 in the cost line |
| 9, Roadmap | Meter communication shares | Pilot plan, RACI, five links, risks | None | None |
| 10, Appendix | Source list | Definitions | Results and limits | A01 to A11 |

Two rules hold across the table. A model output on any slide is marked as simulated or an estimate, and a source figure always carries its citation in the bottom-right line of the slide. The slide blueprint is checked against the document each time a number changes, so that a corrected figure is changed in every place it appears.

## Appendix A: Bibliography

| ID | Source | As of | Available at | Accessed |
|---|---|---|---|---|
| S01 | CEA, Installed Capacity Report, Aug 2026 | 31 Aug 2026 | https://cea.nic.in/wp-content/uploads/installed/2026/08/IC_Aug_2026.pdf | 4 October 2026 |
| S02 | MoP data via Down To Earth power demand tracker (secondary) | 21 May 2026 | https://www.downtoearth.org.in/amp/story/energy/power-demand-tracker-india-meets-all-time-high-power-demand-of-2708-gw-renewable-energy-share-34 | 4 October 2026 |
| S03 | EAC-PM working paper "The Duck and The Camel", via ThePrint (secondary) | Jul 2026 | https://theprint.in/economy/indias-rising-solar-penetration-is-stressing-the-power-grid-its-a-storage-problem/2980770/ | 4 October 2026 |
| S04 | CEA, Load Generation Balance Report 2026-27 | FY 2025-26 | https://cea.nic.in/wp-content/uploads/l_g_b_r_reports/2025/LGBR_2026_27.pdf | 4 October 2026 |
| S05 | CEA, Resource Adequacy Plan for UPPCL | Jul 2024 | https://cea.nic.in/wp-content/uploads/irp/2024/07/Resource_Adequacy_Report_Uttar_Pradesh_UPPCL-1.pdf | 4 October 2026 |
| S06 | MoP note hosted on PIB | 2025 | https://static.pib.gov.in/WriteReadData/specificdocs/documents/2025/jun/doc2025610568001.pdf | 4 October 2026 |
| S07 | CEEW, What Smart Meters Can Tell Us | May to Oct 2019, pub. Feb 2020 | https://www.ceew.in/sites/default/files/ceew-study-on-what-can-smart-meters-tell-us-report.pdf | 4 October 2026 |
| S08 | CEEW, State of Electricity Access in India (secondary) | 2020 | https://www.ceew.in/publications/state-electricity-access-india | 4 October 2026 |
| S09 | CEA, Report on Status of Metering | 31 Mar 2025 | https://cea.nic.in/wp-content/uploads/2025/05/DPT-Report-on-status-of-Metering-as-on-31st-March-2025.pdf | 4 October 2026 |
| S10 | CEA Standardization Cell meeting, via Mercom (secondary) | Meeting 29 Oct 2025 | https://mercomindia.com/cea-steps-in-as-distribution-transformer-failures-hit-1-3-million-a-year | 4 October 2026 |
| S11 | MoP/PFC 14th Integrated Rating, via Powerline and SolarQuarter (secondary) | FY 2024-25 | https://solarquarter.com/2026/01/31/uttar-pradesh-power-discoms-show-gains-in-fy25-ratings-but-atc-losses-remain-a-challenge/ | 4 October 2026 |
| S12 | Khanna and Rowe, Resource and Energy Economics | Pub. 2024 | https://spiral.imperial.ac.uk/entities/publication/6a570d96-6fdd-4998-bb22-93221b9a5e30 | 4 October 2026 |
| S13 | Prayas, Lifeline electricity in Uttar Pradesh | FY18 to FY27 | https://energy.prayaspune.org/power-perspectives/lifeline-electricity-consumption-in-uttar-pradesh-what-does-regulatory-data-say | 4 October 2026 |
| S14 | LocalCircles via Business Today (secondary, online urban sample) | May 2022 | https://businesstoday.in/latest/story/2-in-3-indian-households-are-facing-power-outages-amid-heatwave-survey-331981-2022-05-01 | 4 October 2026 |
| S15 | Rajya Sabha reply, 16 Mar 2026 (open in a browser) | FY 2024-25 | https://powermin.gov.in/sites/default/files/uploads/RS16032026_Eng.pdf | 4 October 2026 |
| S16 | Rajya Sabha reply via T&D India (secondary) | 30 Jun 2026 | https://www.tndindia.com/indias-smart-meter-population-at-7-24-crore-parliament/amp/ | 4 October 2026 |
| S17 | CEA, Technical Specification of Smart Meters | Feb 2020 | https://cea.nic.in/old/reports/others/god/dpt/Tech.%20Specification%20of%20Smart%20Meters-%201-Ph%20and%203%20Ph%20-%20Feb%202020.pdf | 4 October 2026 |
| S19 | Prayas, Smart metering in India: a work in progress | May 2025 | https://energy.prayaspune.org/power-perspectives/smart-metering-in-india-a-work-in-progress | 4 October 2026 |
| S20 | Business Today (secondary) | May 2026 | https://www.businesstoday.in/india/story/up-smart-electricity-meters-postpaid-mode-after-consumer-complaints-529732-2026-05-05 | 4 October 2026 |
| S21 | JSA law firm note (secondary) | 1 Apr 2026 | https://www.jsalaw.com/?p=57682 | 4 October 2026 |
| S22 | MoP, Resource Adequacy Guidelines | Jun 2023 | https://static.pib.gov.in/WriteReadData/specificdocs/documents/2023/jun/doc2023628218801.pdf | 4 October 2026 |
| S23 | Electricity (Rights of Consumers) Rules 2020 | Dec 2020 | https://vikaspedia.in/energy/policy-support/electricity-(rights-of-consumers)-rules-2020 | 4 October 2026 |
| S24 | Powerline (secondary) | 12 Mar 2026 | https://powerline.net.in/2026/03/17/ministry-of-power-issues-draft-electricity-rights-of-consumers-amendment-rules-2026/ | 4 October 2026 |
| S25 | Outlook Business (secondary) | Mar 2026 | https://www.outlookbusiness.com/news/govt-to-roll-out-india-energy-stack-after-pilot-launches-in-five-states-in-fy27 | 4 October 2026 |
| S26 | SolarQuarter (secondary) | Feb 2026 | https://solarquarter.com/2026/02/23/uperc-approves-interstate-p2p-renewable-energy-trading-pilot-with-delhi-discoms/ | 4 October 2026 |
| S27 | KPMG summary (secondary) | Nov 2025 | https://assets.kpmg.com/content/dam/kpmgsites/in/pdf/2025/11/dpdp-rules-2025-guidance-to-dpdp-act-implementation.pdf | 4 October 2026 |
| S28 | Down To Earth (secondary) | 21 Jan 2026 | https://www.downtoearth.org.in/amp/story/energy/smart-meters-promise-power-sector-turnaround-but-data-gaps-skills-consumer-trust-hurdles-remain | 4 October 2026 |
| S29 | Down To Earth | 15 Aug 2026 | https://www.downtoearth.org.in/air/india-on-e-wheels-evs-are-making-their-presence-felt-strongly-on-uttar-pradeshs-roads-but-are-yet-to-become-personal-choices | 4 October 2026 |
| S30 | News On Air (secondary) | Aug 2026 | https://newsonair.gov.in/union-minister-pralhad-joshi-says-pm-surya-ghar-muft-bijli-yojana-crosses-50-lakh-beneficiary-households/ | 4 October 2026 |
| S31 | pv magazine India (secondary) | Jun 2025 | https://www.pv-magazine-india.com/2025/06/10/power-ministry-announces-inr-5400-crore-viability-gap-funding-to-support-30-gwh-bess-development | 4 October 2026 |
| S32 | Yuva Yodha official site, FAQ and challenges | Oct 2026 | https://www.yuvayodhatech.com/faq | 4 October 2026 |
| S33 | SEA and GIZ SAGEN with Eskom, Smart Load Management case study | Sep 2024 | https://www.cityenergy.org.za/wp-content/uploads/2025/03/Eskom-Load-limiting-pilot.pdf | 4 October 2026 |
| S34 | IOL (secondary) | Oct 2025 | https://iol.co.za/news/south-africa/2025-10-16-what-you-need-to-know-about-eskoms-smart-meter-rollout/ | 4 October 2026 |
| S35 | Bundesnetzagentur | Oct 2026 | https://www.bundesnetzagentur.de/DE/Vportal/Energie/SteuerbareVBE/start.html | 4 October 2026 |
| S36 | Enedis test via expertise-energie.fr (secondary) | Feb 2024 | https://www.expertise-energie.fr/resultat-du-test-de-delestage-des-compteurs-linky-par-enedis/ | 4 October 2026 |
| S37 | IEA, The Value of Demand Flexibility | Dec 2025 | https://iea.blob.core.windows.net/assets/4f11d63f-ebb0-44a4-9a53-ed98f264dc38/TheValueofDemandFlexibility.pdf | 4 October 2026 |
| S38 | IGC, Khanna, Martin and Muûls | Jul 2024 | https://www.theigc.org/sites/default/files/2024-10/Khanna%20et%20al.%20Policy%20Brief%20October%202024.pdf | 4 October 2026 |
| S39 | Tata Power-DDL programme page | 2023 to 2024 | https://www.tatapower-ddl.com/Behavioral-Demand-Response/Overview | 4 October 2026 |
| S40 | Tata Power release | Feb 2023 | https://www.tatapower.com/news-and-media/media-releases/tata-power-joins-hands-with-autogrid-to-expand-ai-enabled-smart-energy-management-system-in-mumbai | 4 October 2026 |
| S41 | NESO | Jul 2025 | https://www.neso.energy/nearly-2-million-households-and-businesses-registered-demand-flexibility-service-dfs-last-winter | 4 October 2026 |
| S42 | Uplight | Dec 2023 | https://www.uplight.com/uplight-acquires-autogrid | 4 October 2026 |
| S43 | T&D India (secondary) | Mar 2025 | https://www.tndindia.com/schneider-electric-joins-forces-with-south-bihar-discom-for-grid-modernization/ | 4 October 2026 |
| S44 | Schneider Electric press release | n/d | https://www.se.com/ww/en/about-us/newsroom/news/press-releases/schneider-electric-provides-grid-flexibility-with-the-release-of-ecostruxure-derms-5dcc1d628217ef65154cb3c3 | 4 October 2026 |
| S45 | IEEFA-JMK via pv magazine India (secondary) | May 2026 | https://www.pv-magazine-india.com/2026/05/19/india-awards-10-4-gw-of-standalone-bess-capacity-in-2025-but-tariff-viability-remains-a-concern-ieefa-jmk-report/ | 4 October 2026 |
| S46 | MoP via ESS News (secondary) | Dec 2025 | https://www.ess-news.com/2025/12/15/india-sees-dramatic-plunge-in-battery-storage-costs-ministry-reports/ | 4 October 2026 |
| S47 | SolarQuarter on DERC order (secondary) | May 2024 | https://solarquarter.com/2024/05/15/derc-approves-bses-rajdhani-powers-20mw-40mwh-battery-energy-storage-project/ | 4 October 2026 |
| S48 | SolarQuarter on DERC order (secondary) | Sep 2026 | https://solarquarter.com/2026/09/11/derc-approves-%e2%82%b935-91-lakh-mw-tariff-for-12-5-mw-25-mwh-battery-storage-project-in-delhi/ | 4 October 2026 |
| S49 | CSE | n/d | https://www.cseindia.org/content/downloadreports/13073 | 4 October 2026 |
| S50 | Provider rate cards (secondary; check Meta's card) | 2026 | https://whautomate.com/whatsapp-business-api-pricing-india | 4 October 2026 |
| S51 | Retail listings | 2026 | https://zoutons.com/news/best-inverter-battery-combo-under-15000-amazon | 4 October 2026 |
| S52 | Fluentgrid product page | Oct 2026 | https://fluentgrid.com/?p=37163 | 4 October 2026 |
| S53 | Itron product page | Oct 2026 | https://na.itron.com/what-we-offer/derms-overview | 4 October 2026 |
| S54 | Bidgely site | Oct 2026 | https://www.bidgely.com/ | 4 October 2026 |
| S55 | Kimbal site | Oct 2026 | https://www.kimbal.io/ | 4 October 2026 |
| S56 | The Goan (secondary) | n/d | https://www.thegoan.net/goa-news/monthly-smart-meter-charges-to-be-added-to-power-bills/134305.html | 4 October 2026 |
| S57 | UP cost data book (secondary) | n/d | https://puvvnl.in/Download/Cost_Data_Book.pdf | 4 October 2026 |

## Appendix B: Model tables

Generated by `check_values.py` from `model_outputs.json`. Every row is a simulation result or an estimate.

### T1. Network and exposure by day type

| Day type | Peak temp (C) | Peak demand (kW) | Demand (kWh) | DTs over rating | DTs over 130% | Max loading | Energy above rating (kWh) |
|---|---|---|---|---|---|---|---|
| Heatwave evening peak | 44.2 | 9,715 | 143,610 | 27 of 48 | 20 | 265% | 13,760 |
| Monsoon cloud cover | 32.8 | 7,764 | 127,412 | 21 of 48 | 10 | 208% | 7,307 |
| Clear solar noon | 31.2 | 7,590 | 125,650 | 20 of 48 | 10 | 203% | 6,712 |

### T2. Outage and caps by day type and case

| Day type | Case | Outage h per home | Homes cut | DTs cut | Trips | Supply availability | Cap home-hours (1,000 W / 500 W / 300 W) | Capped at peak | Constrained at peak |
|---|---|---|---|---|---|---|---|---|---|
| Heatwave evening peak | today | 4.21 | 4,309 | 30 | 32 | 82.5% | 0 / 0 / 0 | 0 | 0 |
| Heatwave evening peak | bear | 0.83 | 1,244 | 9 | 0 | 96.5% | 16,534 / 9,143 / 7,636 | 3,171 | 1,804 |
| Heatwave evening peak | base | 0.40 | 593 | 4 | 0 | 98.3% | 18,224 / 7,033 / 8,065 | 3,402 | 1,751 |
| Heatwave evening peak | bull | 0.00 | 0 | 0 | 0 | 100.0% | 15,215 / 9,245 / 6,267 | 2,777 | 1,593 |
| Monsoon cloud cover | today | 3.71 | 4,584 | 32 | 23 | 84.5% | 0 / 0 / 0 | 0 | 0 |
| Monsoon cloud cover | bear | 0.38 | 459 | 3 | 0 | 98.4% | 18,469 / 6,030 / 8,242 | 3,805 | 2,025 |
| Monsoon cloud cover | base | 0.00 | 0 | 0 | 0 | 100.0% | 16,307 / 8,560 / 6,569 | 3,303 | 1,807 |
| Monsoon cloud cover | bull | 0.00 | 0 | 0 | 0 | 100.0% | 11,487 / 10,932 / 2,757 | 2,888 | 1,463 |
| Clear solar noon | today | 3.58 | 4,584 | 32 | 21 | 85.1% | 0 / 0 / 0 | 0 | 0 |
| Clear solar noon | bear | 0.35 | 459 | 3 | 0 | 98.5% | 15,770 / 7,088 / 8,035 | 3,651 | 1,779 |
| Clear solar noon | base | 0.00 | 0 | 0 | 0 | 100.0% | 14,611 / 9,184 / 5,731 | 3,564 | 1,649 |
| Clear solar noon | bull | 0.00 | 0 | 0 | 0 | 100.0% | 9,058 / 10,802 / 2,615 | 2,751 | 1,457 |

### T3. Extra evening shortfall, heatwave day (outage h per home)

| Extra shortfall | Today | Bear | Base | Bull |
|---|---|---|---|---|
| 0% | 4.21 | 0.83 | 0.40 | 0.00 |
| 10% | 6.35 | 0.83 | 0.40 | 0.00 |
| 20% | 6.35 | 0.83 | 0.40 | 0.00 |
| 30% | 6.35 | 0.90 | 0.40 | 0.00 |
| 40% | 6.35 | 2.08 | 1.00 | 0.06 |

### T4. A year (45 heatwave, 75 monsoon, 245 mild days)

| Case | Outage h per home | Trips | DT-hours above rating | Energy lost in outages (kWh) | DR energy (kWh) | Energy trimmed by caps (kWh) |
|---|---|---|---|---|---|---|
| today | 1,345 | 8,310 | 23,896 | 9,477,958 | 0 | 0 |
| bear | 152 | 0 | 7,102 | 671,413 | 399,300 | 4,964,107 |
| base | 18 | 0 | 5,011 | 80,167 | 658,572 | 4,612,788 |
| bull | 0 | 0 | 4,789 | 0 | 1,229,609 | 3,908,534 |

### T5. Unit economics (Rs a year, 7,000 meters)

| Case | Software fee | Rebates to homes | Messages | Total | Per meter | Rs per outage hour avoided | Peak relief (kW) | Rs per kW of relief | Energy kept (kWh) |
|---|---|---|---|---|---|---|---|---|---|
| bear | 672,000 | 798,600 | 694,960 | 2,165,560 | 309 | 0.26 | 1,184 | 1,829 | 5,331,670 |
| base | 672,000 | 1,317,145 | 694,960 | 2,684,105 | 383 | 0.29 | 1,854 | 1,448 | 6,168,839 |
| bull | 672,000 | 2,459,217 | 694,960 | 3,826,177 | 547 | 0.41 | 2,295 | 1,667 | 6,741,984 |

### T6. Who a cap constrains at the heatwave peak (share of T1 and T2 connections above the cap)

| Connection type | Count | Comfort 1,000 W | Essential 500 W | Lifeline 300 W |
|---|---|---|---|---|
| cooler_ac | 1,260 | 100% | 100% | 100% |
| fridge_tv | 1,304 | 0% | 0% | 43% |
| lighting_fan | 1,268 | 0% | 0% | 0% |
| shop_cold_chain | 1,292 | 100% | 100% | 100% |
| shop_small | 1,202 | 70% | 97% | 100% |
| all | | 54% | 59% | 68% |

### T7. Assumptions

| ID | Value |
|---|---|
| A01_dr_share | {"bear": 0.03, "base": 0.05, "bull": 0.1} |
| A02_flex_share | {"bear": 0.3, "base": 0.5, "bull": 0.7} |
| A03_cap_comply | {"bear": 0.85, "base": 0.92, "bull": 0.97} |
| A04_days | {"heatwave_evening": 45, "monsoon_cloud": 75, "solar_noon": 245} |
| A05_dip_window | [18.0, 23.0] |
| A06_dips | [0.0, 0.1, 0.2, 0.3, 0.4] |
| A07_msg_rs | 0.136 |
| A08_msgs_per_hh_event | 2 |
| A09_storage_rs_kw_year | [3591.0, 5700.0] |
| A10_inverter_rs | [14000.0, 19000.0] |
| A11_inverter_life_years | 5 |
| P (product constants) | {"pf": 0.9, "tol": 0.03, "shed_frac": 0.5, "trip_pu": 1.3, "trip_slots": 2, "trip_out": 8, "rebound": 0.3, "release": 0.15, "fee_rs_meter_month": 8.0, "rebate_rs_kwh": 2.0, "cap_w": {"1": [1000, 2000], "2": [500, 1000], "3": [300, 500]}} |


## Appendix C: Glossary

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

## Appendix D: Data conflicts and resolutions

| # | Conflict | Resolution |
|---|---|---|
| 1 | Smart meters: 5.28 crore (31 Dec 2025), 5.83 crore (15 Feb 2026), 7.24 crore (30 Jun 2026) | Use 7.24 crore [S16]; the older figures in the product docs are stale |
| 2 | UP postpaid switch dated 4, 6 or 8 May 2026 | "Announced 4 May 2026" [S20] |
| 3 | Solar curtailment: MNRE 8,133 GWh (Apr to Jun 2026) vs EAC-PM about 24 GWh a day in May | Not used anywhere until the reply is opened |
| 4 | DTs: 1.54 crore (CEA, Mar 2025) vs "nearly 1.82 crore" (trade press, 2026) | Quote the failure claim as reported [S10]; derive no rate from either base |
| 5 | 2025 peak: 241 GW vs 242.77 GW | Not used; the 2026 record of 270.8 GW is used [S02] |
| 6 | National supply hours (22.6 / 23.4) are roster hours; CEEW meters show more outage | Use both and say which is which [S06, S07] |
| 7 | Product docs say 5 vs 6 safety invariants; 335 vs 352 tests; 26 to 29 pages | Code: 6 invariants, 352 + 162 tests, 28 screens (§4.1) |
| 8 | Product fixtures show reliability, fairness, BCR and payback numbers no engine produces | Never quoted (§3.7) |
| 9 | Product Scenario Lab: mixed relief on unserved energy | Disclosed on slide 10 and in the doc; the impact model measures outage hours with the planner acting on thermal limits too (§6.1) |
| 10 | Eskom's limit disconnects a home that stays over 10 A | Stated plainly; UrjaGrid adds notice, a floor, an expiry and a named approver (§14 Q3) |
| 11 | "Brief is storage-led" framing | Not used; the brief lists software tools too. The deck argues storage is a lever, not a prerequisite |
| 12 | The hackathon's "8 to 12 slides" wording was not on public pages; it came from the organisers' message to the team | Follow the organisers' message |
