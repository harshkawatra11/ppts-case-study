# UrjaGrid: judge questions and answers (Team IdeaForge)

Each question is the panel's, as reported speech. Answers use only facts from the research document.

**Q1. The panel will ask: is the 90% cut measured or simulated?**
Simulated. It comes from our model on the prototype's own 48-transformer, 7,000-connection network, real 2024 weather days and the same shedding and trip rules on both sides. The six-week pilot is designed to measure it on one sub-division before anyone quotes it as a result.

**Q2. The panel will ask: why not a community battery?**
A battery is lever 4 in our ladder, and storage dispatch is coded today against a simulator. On cost, our base case is ₹1,448 per kW of peak relief a year against ₹3,591 to ₹5,700 in Delhi's approved distribution battery tariffs. On timing, 10.4 GW of storage was awarded in 2025 and about 1.8 GWh was installed by March 2026. The meters are already on the wall.

**Q3. The panel will ask: does a 300 W limit not switch people off anyway?**
If a home stays above its limit, the meter's relay trips and reconnects automatically after a set delay; Eskom saw the same. That is why every limit has two hours' notice, an expiry and a ₹2 a unit rebate for shifting first. In the simulated base case, 1,751 of the 3,402 capped connections at the peak have to trim load, and the fan-and-lights and fridge-and-TV homes are not constrained by the comfort cap at all.

**Q4. The panel will ask: is this the DISCOM rationing the poor?**
Today the poor are rationed by a feeder switch, with no floor at all. UrjaGrid gives every home a guaranteed floor, never touches critical loads, rotates the burden through a fairness ledger and needs a named engineer's approval for every plan. The comfort cap mostly constrains cooler, AC and cold-chain loads.

**Q5. The panel will ask: what about homes on life support?**
They are tier T0 with hospitals and are never capped, asked or shed. That is a coded invariant with its own tests. Field workers register them, and the engineer's approval is the backstop for anyone not yet registered.

**Q6. The panel will ask: is any of this connected to a real meter?**
No. The DLMS limiter, OCPP, OpenADR, Beckn and messaging adapters are coded and unit-tested against simulators (WIRED). Connecting a real head-end is the pilot's first task. The deck counts 10 LIVE, 12 WIRED and 6 PILOT capabilities.

**Q7. The panel will ask: where do the forecasts come from?**
A LightGBM quantile forecaster with 13 features and three quantiles is coded and trained on synthetic data, so it is tagged WIRED. Training on real meter history is a pilot item. The planner today works from the scenario's demand.

**Q8. The panel will ask: why would a DISCOM pay?**
At ₹383 a meter a year in the base case, against AMISP service charges of ₹60 to ₹146 a meter a month already paid for the meters, the DISCOM buys fewer transformer failures (overload hours fall 79% in the simulated year), better reliability reporting and a way to meet a regulator who says load shedding is not an option.

**Q9. The panel will ask: who operates it locally?**
The DISCOM. A Junior Engineer approves plans for their sub-division, an Assistant Engineer watches health across sub-divisions, field staff keep the critical-load registry, and the regulator sees aggregates only.

**Q10. The panel will ask: what does Schneider's own stack already do?**
ADMS runs feeders and DERMS manages distributed resources and load relief. UrjaGrid works below the transformer, at the meter, with a human approval gate and a home-facing channel, so it complements that stack rather than replacing it.

**Q11. The panel will ask: the UP prepaid rollback shows people distrust remote meter control. Why will this land?**
That rollback is why the design is postpaid-compatible, gives two hours' notice, explains itself in Hindi and English, pays a rebate, sets a floor and needs a named approver. The pilot starts in read-only shadow mode for two weeks.

**Q12. The panel will ask: is the network realistic?**
It is a simulated network on real Bareilly and Mathura localities, sized tight on purpose: 27 of 48 transformers exceed rating on the heatwave day. Today's track loses 4.2 hours per home that day, close to the 3.5 hours CEEW's meters recorded in small towns of the same districts.

**Q13. The panel will ask: what if supply falls further in the evening?**
In the stress test the base case holds at 0.4 hours up to a 30% extra evening shortfall and rises to 1.0 hour at 40%, while today's track sits at 6.35 hours from 10% upward.

**Q14. The panel will ask: what still needs steel?**
In the base case, 4 of 48 transformers are still cut on the heatwave day. Those need an upgrade, and UrjaGrid's risk ranking says which four.

**Q15. The panel will ask: did you talk to engineers or households?**
Not yet, and we do not claim to have. The validation plan covers 6 JEs and AEs, 20 households, 10 shop owners and 2 head-end vendors, each with one question that would change the design.
