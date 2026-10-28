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
