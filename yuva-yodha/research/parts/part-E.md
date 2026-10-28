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
