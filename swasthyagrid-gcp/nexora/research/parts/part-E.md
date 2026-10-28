## 13. Feasibility: six weeks to a live district, three green tests and two amber

**Answer.** SwasthyaGrid clears three of five feasibility tests green and carries two amber, matching slide 8 exactly: technical and economic feasibility are green because the prototype already runs and the licence costs 0.25% of a district's National Health Mission (NHM) share [M], legal is green because the product reads stock counts with no patient identity and health sits with the State under the Constitution [S13][S14], while operational and schedule feasibility are amber because they depend on an officer's daily habit and a data memorandum of understanding (MoU) landing inside the first week [A16]. A district can go live six weeks after that MoU is signed, using data exports the state already produces, with no new hardware or purchase line [S31]. Six named risks (R1 to R6) each carry a one-line fix, and a pre-mortem names the five most likely ways a 2029 review could still find the pilot failed, written before a judge can ask the question.

### 13.1 TELOS: the five tests and why two stay amber

The TELOS test (Technical, Economic, Legal, Operational, Schedule) is the right framework here because it separates "can this be built" from "will this actually run inside a government department," which is exactly where social-impact pitches most often overstate themselves. Table 13.1 reproduces slide 8's rating exactly, with the evidence behind each cell.

**Table 13.1: TELOS feasibility test**

| Test | Evidence | Rating |
|---|---|---|
| Technical | A working prototype already runs on simulated data for 40 facilities in 5 Rajasthan districts, including the PHC Kota-4 transfer run (1.2 to 21.0 days of antiretroviral cover) [S31] | Green |
| Economic | The ₹12 lakh (L) annual licence is 0.25% of an average district's ₹47.73 Cr central NHM allocation [S18][M], and the licence is designed to pay for itself by rescuing 6.1% to 12.5% of a district's audited annual expiry loss [S16][S17][M] | Green |
| Legal | The product reads stock, bed and roster counts, with no patient identity in scope, so the Digital Personal Data Protection Act, 2023 is not triggered [S14]; health and sanitation sit on the State List, so each state's data stays inside that state's own systems [S13] | Green |
| Operational | The product only works if a district officer opens it every morning and acts on a proposal; nothing moves without that human step, and no district has yet formed that habit [S31] | Amber |
| Schedule | The six-week rollout below only holds if the data-sharing MoU is signed inside week 1; any slippage there pushes every later week by the same amount [A16] | Amber |

*TELOS: Technical, Economic, Legal, Operational, Schedule.*

Three green ratings and two amber is a more defensible claim than five green ratings would be. A pitch that rated every test green would be asking a judge to believe that a one-founder team already has a government habit formed and a signed MoU in hand, neither of which is true yet; naming the two real amber tests is what lets the green tests be trusted.

### 13.2 The six-week rollout, week by week

The sequence below matches the Gantt chart on slide 8 exactly: six weeks from a signed data MoU to two districts live. Table 13.2 adds the owner and the exit test for each week, which the slide's Gantt bar does not have room to carry.

**Table 13.2: Six-week rollout plan**

| Week | What happens | Owner | Exit test to move to the next week |
|---|---|---|---|
| W1 | Data MoU signed; one nodal officer named by the state [A16] | State NHM mission director, counter-signed by Team IdeaForge | A signed MoU and a named officer's contact details are both on file |
| W1 to W2 | The nightly e-Aushadhi or HMIS export is read and mapped into the district view [S15] | Team IdeaForge (founder, this week) | A full week of nightly files parses without a schema error |
| W2 to W3 | Facilities are onboarded and given logins | Nodal officer, with Team IdeaForge support | Every facility in the pilot district has a working login |
| W3 to W4 | Pharmacists and medical officers are trained on reading a warning and on approving a proposal [S31] | Team IdeaForge | Every trained user can read a days-of-cover warning unprompted |
| W4 to W5 | Shadow mode: officers compare each system proposal with their own phone-call judgement before trusting it | District health officer | At least half of system proposals are judged "I would have made that call too" |
| W6 | Go live in 2 districts | District health officer, with the state's sign-off | The first transfer is approved and the receiving facility confirms delivery [S31] |

*MoU: memorandum of understanding. HMIS: health management information system.*

The shadow-mode week (W4 to W5) is the single highest-value week in this plan, because it is the only week that tests the operational amber rating directly rather than assuming it away. An officer who spends a week checking the system's proposals against calls they would have made anyway is being asked to validate the product with almost no switching cost, since they keep doing exactly what they already do and simply watch whether the system would have told them the same thing sooner.

### 13.3 Data access: what the state already produces, and what has to be agreed

SwasthyaGrid's central feasibility claim is that it needs no new data collection, only a read of something the state already generates. Table 13.3 sets out what that export contains and what still has to be agreed before SwasthyaGrid can read it.

**Table 13.3: Data access, what exists and what needs an agreement**

| Data source | What it already contains | What still needs to be agreed |
|---|---|---|
| e-Aushadhi / DVDMS (drug supply ledger) | Stock-in, stock-out and balance quantities for every item at every facility the state has onboarded to the Central Monitoring System, which already covers 31 States and UTs [S15][S35] | A nightly export file in a format SwasthyaGrid can parse, and a named technical point of contact at the state drug-supply corporation |
| State HMIS (bed, staff, footfall) | Facility-level bed occupancy, staff roster and patient footfall counts reported monthly under the national HMIS framework that has run since 2008 [S101] | A more frequent (ideally daily or weekly) export than the monthly HMIS cadence the system was designed for |
| ABDM Health Facility Registry | Over 1,00,000 government and private health facilities already carry a verified, standard facility ID in this national registry, about 97% of them government facilities [S100] | No new agreement; SwasthyaGrid can use the existing facility ID rather than ask a state to build a new facility list from scratch |
| District-level sign-off | Nothing automatic; a human officer at district level today only knows their own facility's stock, not the district's | The data-sharing MoU itself (Table 13.2, week 1), plus the named nodal officer who will receive and act on proposals |

*HMIS: health management information system. ABDM: Ayushman Bharat Digital Mission. DVDMS: Drug Vendor Delivery Monitoring System.*

The fact that a national facility registry already carries verified IDs for most of India's health facilities [S100] matters more than it first appears. It means SwasthyaGrid's first technical task in a new state, building a clean facility list, is largely already done by the ABDM Health Facility Registry; the product has to read and link to an identifier that already exists rather than construct one, which is a smaller technical task than the six-week plan would need if no such registry existed.

### 13.4 Regulatory feasibility: two statutes, read plainly

Table 13.4 sets out the two statutes that bound this product's legal feasibility, stated as our own reading, with a note on where that reading would need counsel's confirmation before a live contract is signed.

**Table 13.4: Regulatory table**

| Instrument | What it says | What it means for SwasthyaGrid |
|---|---|---|
| Constitution of India, Seventh Schedule, List II, Entry 6 | Public health and sanitation, hospitals and dispensaries sit on the State List [S13] | A national database or a central mandate is not the right instrument; each state licenses SwasthyaGrid separately and that state's data stays inside that state's own systems |
| Digital Personal Data Protection Act, 2023 | Governs processing of personal data that can identify a living individual [S14] | SwasthyaGrid's district view carries stock counts, bed counts and roster counts, with no patient name, ID or clinical record in scope, so the Act's core obligations are not triggered by the product as designed |
| CDSCO guidance on disposal of expired and unused drugs (27 May 2025) | A dedicated national guidance document now exists on how expired stock should be disposed of [S103] | SwasthyaGrid's transfer proposals aim to move near-expiry stock to a facility that will use it before it expires; this guidance governs what happens to the stock SwasthyaGrid's proposals could not move in time, a boundary condition worth stating rather than leaving implicit |

*CDSCO: Central Drugs Standard Control Organisation.*

This reading is the team's own, not a lawyer's opinion, and a live contract with any state would need counsel to confirm the Digital Personal Data Protection Act's applicability to a stock-only product before the state signs, consistent with this document's rule that a legal claim is always hedged until confirmed.

### 13.5 Organisation: one founder, two hires tied to pilot fees

Table 13.5 is deliberately short, because the honest organisational state of this pitch today is short: one founder, a working prototype, and no funding claimed or asked.

**Table 13.5: Hiring sequence, tied to pilot fees**

| Stage | Role | Trigger | Why this one first |
|---|---|---|---|
| Today | Founder (Harsh Kawatra, Delhi Technological University) [A per plan decision D2] | Already in place | Builds and operates the prototype across 5 Rajasthan districts [S31] |
| First hire | State implementation lead | First district's onboarding fee (₹3 L) [A11] | The six-week plan in Table 13.2 needs a dedicated person running the MoU, training and shadow-mode weeks while the founder keeps building |
| Second hire | Data operations lead | Second district's recurring licence revenue begins | Running the nightly export pipeline (Table 13.3) for more than one or two districts at once needs a dedicated operator, not founder time |

No investment is claimed or asked in this pitch (plan decision D3); the hiring sequence above is funded entirely from onboarding fees and licence revenue as districts come on, which is itself a feasibility argument, since it means the team does not need outside capital to reach the point where a second and third hire are affordable.

### 13.6 Six risks, each with a fix

Table 13.6 reproduces the risk register from slide 8 exactly, including the probability and impact rating shown on the slide's three-by-three grid, with its mitigation and an early-warning signal added for depth.

**Table 13.6: Risk register, R1 to R6**

| Risk | What it is | Probability | Impact | Mitigation | Early-warning signal |
|---|---|---|---|---|---|
| R1 | Stale data: a facility's export lags or breaks | High | Medium | A freshness flag on every data point; a warning displayed, not hidden, when data is late | Any facility's last-updated timestamp older than 48 hours |
| R2 | Outbreak surge: a sudden demand spike (for example a dengue cluster) outruns normal transfer sizing | Medium | High | A buffer rule that sizes transfers more conservatively when a facility's draw-down rate is itself rising, not flat | A facility's weekly consumption rate rising faster than its stock refill rate for two consecutive weeks |
| R3 | Queue ignored: an officer lets proposals pile up unread | Medium | Medium | A daily service-level-agreement (SLA) alert that escalates an unread proposal after a set number of hours | Proposal queue depth rising day over day without a matching rise in approvals |
| R4 | State says no: a state declines to sign the data MoU after serious engagement | Low | High | Start with one district inside a state that has already shown interest, rather than seeking a state-wide agreement first | A state's nodal contact going unresponsive for more than two weeks after a serious first meeting |
| R5 | Weak signal: poor network connectivity at a rural facility blocks real-time reporting | High | Low | Offline data entry with a sync-when-connected design, so a facility is never blocked by a bad signal | Any facility reporting more than one missed sync window in a week |
| R6 | Solo founder: one person cannot run sales, delivery and product work at once past a handful of districts | Medium | Medium | Hire from pilot fees exactly as Table 13.5 sets out, before taking on a third district | Founder-reported time on sales or support crowding out product work for more than one week |

The grid's own shape carries a finding worth stating plainly: the two risks rated highest on impact (R2, outbreak surge, and R4, a state's refusal) are both rated lower on probability than the risks that threaten day-to-day reliability (R1, stale data, and R5, weak signal). That ordering is itself a design choice; a team that spent its limited early engineering time hardening against a low-probability state refusal instead of a high-probability data-freshness problem would be solving the wrong risk first.

### 13.7 Pre-mortem: it is 2029 and the pilot failed

A pre-mortem (Kepner-Tregoe family) asks the team to imagine the failure has already happened, then work backward to the cause, which surfaces risks that a forward-looking plan tends to miss because it is busy describing success. Table 13.7 runs that exercise for SwasthyaGrid, naming the five most likely reasons a 2029 retrospective would give for why the pilot did not scale past its first two districts.

**Table 13.7: Pre-mortem, five likely reasons a 2029 review would give for failure**

| Reason | What it would look like | Which risk or test it traces back to |
|---|---|---|
| The habit never formed | Officers kept making phone calls alongside the system rather than instead of them, so adoption stayed below the 50% shadow-mode bar and never crossed into daily reliance | Operational amber (Table 13.1); risk R3 |
| Data quality mirrored HMIS's known weakness | The nightly exports the state produced for its own HMIS were themselves the kind of incomplete, poorly monitored data the national HMIS has been documented to produce since at least 2013, and SwasthyaGrid inherited that weakness rather than fixing it [S101] | Schedule amber (Table 13.1); risk R1 |
| A second state never signed | The first district proved the mechanism, but the founder's limited time, as a single person running sales and delivery at once, meant no second state's MoU closed within the hiring-trigger window in Table 13.5 | Risk R6 |
| The expiry paradox did not generalise | A pilot state's own facility audit showed an expiry write-off share below the 6.1% to 12.5% range the Telangana and Odisha audits implied, so the licence's self-funding case weakened in that state [S16][S17][M] | Economic green rating under renewed stress; sustainability risk table (part D, section 11.7) |
| The outbreak case broke trust early | A dengue-season surge (risk R2) outran the buffer rule in its first live test, moving stock too slowly during the one period officers most needed it, and the resulting distrust outlasted the fix | Risk R2 |

Two of these five reasons (data quality and the habit never forming) are the ones this feasibility section rates amber rather than green, which is the honest outcome of running a pre-mortem properly: the exercise should point back at the risks the team has already flagged as its weakest points, not surface an entirely new and more comfortable failure story.

### 13.8 What would move a rating from amber to green, or from green to red

Table 13.8 closes this section with the condition that would change each TELOS rating, so a reader can see exactly what evidence would need to arrive before the next pitch of this deck could claim a fully green feasibility page, and what evidence would force a downgrade.

**Table 13.8: What changes each TELOS rating**

| Test | Moves from amber to green when... | Would move toward red if... |
|---|---|---|
| Operational | A full shadow-mode period in one district shows at least half of proposals judged correct by the officer who would otherwise have made that call | A shadow-mode trial runs and approval stays below 50% after four weeks, which is itself the roadmap's stated stop rule (section 15) |
| Schedule | A signed data MoU exists in hand, with a named nodal officer and a confirmed export format, before the six-week clock starts | A state engages seriously for more than eight weeks without signing, which risk R4's mitigation (start with one interested district) is built to avoid |
| Technical (stays green, risk of slipping) | No change needed; remains conditional on R1 and R5's mitigations holding at scale beyond 40 facilities | A second pilot state's export format differs enough from the first that the nightly-parse exit test in Table 13.2 fails repeatedly |
| Economic (stays green, risk of slipping) | No change needed at current pricing | A pilot state's own audited expiry share falls below the lower end of the 6.1% to 12.5% range this document and part D both flag as the condition that would weaken the payback case [S16][S17][M] |

Every rating in Table 13.8 can move in either direction on a named, checkable event, which is what keeps the TELOS page from reading as a fixed verdict rather than a live assessment.

### 13.9 Why a feasibility section earns more trust with two ambers than with none

A reader who has seen enough case-competition pitches will recognise a specific pattern this section deliberately avoids: the feasibility slide that rates every test green because the team has not yet separated what it has built from what it hopes a government partner will do. The two amber ratings in Table 13.1, operational and schedule, are both ratings this team controls the least, because they depend on another organisation's officer forming a daily habit and another organisation's legal department signing a document inside a stated week. Rating either of those green would have required either inventing evidence that does not exist (a habit no officer has yet formed, because no district is live) or quietly redefining the test to mean something easier to satisfy. Neither path was taken. The amber rating is, in a sense, this section's own moneyshot: a single word, repeated twice, that tells a judge more about this team's self-assessment than any green rating could, because a green rating is what every pitch claims and an honestly placed amber is what almost none of them show.

This same discipline explains why the risk register in Table 13.6 assigns its highest-impact cells (R2, R4) lower probability than its highest-probability cells (R1, R5). A team under pressure to look thorough often inflates probability ratings across the board, since a long list of "high probability, high impact" risks reads as diligence. The register here instead keeps the two dimensions honestly separated, because collapsing them would make the register less useful precisely where it should be most useful: telling a district implementation lead which of six risks to check first on a Monday morning. The answer, read off the register correctly, is R1 and R5, the two risks rated high on probability regardless of their impact rating, not R2 or R4, which feel more dramatic but are rated far less likely to occur in any given week.

The same logic applies to how this section sequences its own defensive work. A weaker version of this feasibility section would have led with the risk register, because a long list of named risks with fixes attached reads as thorough on first glance. This section instead leads with TELOS, because TELOS forces the amber ratings to appear first, before any mitigation has had a chance to soften them, and only afterward does the risk register show exactly how each amber-adjacent risk is being managed day to day. Ordering the evidence this way means a reader who stops reading after Table 13.1 still has the single most important honest signal in the whole section; a reader who stops after the risk register alone, without having seen Table 13.1 first, would have seen six fixes without first seeing the two ratings those fixes are meant to protect. This is a small structural choice, but it is the same discipline that runs through every section of this document: state the honest limit first, and let the evidence that narrows it follow only afterward, rather than building confidence first and attaching the caveat as an afterthought a skeptical reader has to go looking for.

---

## 14. Impact: 1.36 crore stock-out days avoided a year in the base case, 81.5 lakh in the bear case

**Answer.** SwasthyaGrid's impact claim is a transparent estimate from a stated model, not a measured result: 38,241 facilities [S01] multiplied by 7 tracer medicines, 365 days a year and a 27.8% baseline unavailability rate taken from a published study [S02], cut by an assumed 30% (bear), 50% (base) or 80% (bull, matching eVIN's own reported vaccine result) [S12][A02], yields 81.5 lakh, 1.36 crore and 2.17 crore stock-out days avoided a year respectively [M]. The base case lifts modelled key-medicine availability from 72.2% to 86.1% and works out to 355.1 days avoided per facility and 17,412 days avoided per district a year [M]. This section sets out every step of that model, the theory of change connecting the mechanism to the number, how the estimate maps to three Sustainable Development Goal (SDG) targets, and, as plainly as the rest of this document insists on, exactly what the estimate cannot claim.

### 14.1 The model, step by step

Table 14.1 walks through the impact model's calculation in the same order the model code runs it, so a reader can check every multiplication without opening the Python file.

**Table 14.1: Impact model, step by step**

| Step | Input | Value | Source or tag |
|---|---|---|---|
| 1 | Facilities (PHCs + CHCs) | 31,882 + 6,359 = 38,241 | [S01] |
| 2 | Tracer medicines tracked in the prototype catalogue | 7: adrenaline, antiretroviral (ARV), anti-snake venom (ASV), oral rehydration salts (ORS), oxytocin, paracetamol, tetanus toxoid | [S31][A03] |
| 3 | Days in a year | 365 | Calendar |
| 4 | Baseline unavailability (mid case) | 1 − 0.722 = 27.8% | [S02][A01] |
| 5 | Baseline stock-out days a year | 38,241 × 7 × 365 × 0.278 = 2,71,62,200, or 2.72 crore | [M] |
| 6 | Share of stock-out days the system removes | 30% (bear), 50% (base), 80% (bull, matching eVIN's reported result) | [S12][A02] |
| 7 | Stock-out days avoided a year | Bear 81,48,660 (81.5 lakh); base 1,35,81,100 (1.36 crore); bull 2,17,29,760 (2.17 crore) | [M] |
| 8 | Availability after the cut | Bear 80.5%; base 86.1%; bull 94.4% | [M] |

Every number in Table 14.1 after step 6 is arithmetic on the inputs above it; nothing in this table is independently measured, which is exactly the hedge this document and plan section 11.1 both require stated before, not after, a judge asks for it.

### 14.2 Three scenarios, never a single number

Table 14.2 restates the three scenarios side by side with their full workings, so the model's single most important rhetorical choice, giving three cases rather than one point estimate, is visible in one place.

**Table 14.2: Scenario table**

| Scenario | Cut assumption | Stock-out days avoided a year | Availability after the cut | What justifies this cut |
|---|---|---|---|---|
| Bear | 30% | 81,48,660 (81.5 lakh) [M] | 80.5% | A conservative floor, well below any reported precedent, chosen so the bear case is not accused of being optimistic dressed as pessimistic |
| Base | 50% | 1,35,81,100 (1.36 crore) [M] | 86.1% | Half of eVIN's own reported 80% cut in vaccine stock-outs [S12], treating medicine logistics as harder to move than a dedicated cold-chain vaccine network |
| Bull | 80% | 2,17,29,760 (2.17 crore) [M] | 94.4% | eVIN's own reported result for vaccines [S12], used as an upper bound rather than a forecast, because medicines run through more varied storage and ordering rules than a single vaccine cold chain |

The base case is deliberately not the midpoint of eVIN's own number; it is half of it. That is a conscious discount applied because eVIN operates inside a dedicated, donor-funded cold chain with a single product category, while SwasthyaGrid's base case has to work across seven very different tracer medicines moving through ordinary state drug-supply corporations with none of eVIN's specialised infrastructure. The discount is a modelling choice this document states rather than hides.

### 14.3 Sensitivity: every combination still clears 58.6 lakh days

Table 14.3 reproduces the model's 3x3 sensitivity grid exactly, crossing three availability assumptions against the three cut scenarios, so a reader can see that even the single weakest combination in the whole model still clears 58.6 lakh stock-out days avoided a year.

**Table 14.3: Sensitivity, stock-out days avoided a year, in lakh**

| Baseline availability | 30% cut (bear) | 50% cut (base) | 80% cut (bull) |
|---|---|---|---|
| 66% (low end of the published range) | 99.7 | 166.1 | 265.8 |
| 72.2% (mid case, used everywhere else in this document) | 81.5 | 135.8 | 217.3 |
| 80% (high end of the published range) | 58.6 | 97.7 | 156.3 |

*Source: model output [M], reproduced exactly from `model/model_output.txt`, section "sensitivity, lakh days avoided."*

The grid's shape carries a defensive point worth naming directly: a reader who distrusts the 72.2% mid case and insists on the model's own most favourable baseline (80% availability, meaning the least room for the product to help) still arrives at a 50% cut yielding 97.7 lakh stock-out days avoided, which is itself larger than the bear case's headline 81.5 lakh built on the mid baseline. The claim still holds up against disagreement about the baseline in a way a single point estimate could never demonstrate.

### 14.4 Per-facility and per-district translations

The crore-scale headline number is hard for a reader to feel at the scale that matters to a district officer, so Table 14.4 translates the base case down to the two scales a reader can actually picture.

**Table 14.4: Per-facility and per-district translations, base case**

| Scale | Value | How it is derived |
|---|---|---|
| Per facility, a year | 355.1 days avoided | 1,35,81,100 ÷ 38,241 facilities [M] |
| Per district, a year | 17,412 days avoided | 1,35,81,100 ÷ 780 districts [M] |

A single district seeing 17,412 fewer stock-out days a year, spread across its roughly 49 facilities [M, part C section 9], is a number a district health officer can hold against their own district's complaint log in a way "1.36 crore" never could; both numbers describe the identical model output, and this document shows both because an audience of judges and an audience of district officers each need a different one to feel the claim.

### 14.5 Theory of change

The causal chain from a daily data read to fewer empty shelves runs through five stages, matching slide 9's theory-of-change stack exactly. The ASCII tree below shows the chain; Table 14.5 restates it as a logframe with an indicator, baseline, target and means of verification for each stage, which the slide itself has no room to carry.

```
INPUTS
  Daily stock, bed and staff data the state already holds [S15][S35]
      |
      v
ACTIVITIES
  Warn -> Propose -> Approve -> Move -> Confirm [S31]
      |
      v
OUTPUTS
  Transfers approved the same day they are proposed
      |
      v
OUTCOMES
  Fewer stock-out days; less stock expiring on the shelf
      |
      v
IMPACT
  Emergency drugs on the shelf when a patient arrives
```

**Table 14.5: Logframe**

| Stage | Indicator | Baseline | Target (base case) | Means of verification |
|---|---|---|---|---|
| Inputs | Facilities with a working nightly data feed | 0 (pilot not yet live) | 40 facilities, 5 districts, matching the prototype's existing footprint [S31] | Data pipeline logs |
| Activities | Proposals generated and acted on within 24 hours | 0 (not measured; no live district) | At least half of proposals approved within 24 hours during shadow mode (section 13.2) | Proposal queue timestamps |
| Outputs | Transfers completed, start to finish, same day as proposed | 0 | Majority of approved transfers confirmed received the same day | Delivery confirmation logs at the receiving facility [S31] |
| Outcomes | Days of cover below the 3-day (or 5-day for emergency items) warning threshold | Not yet measured in a live district | A measurable fall in the share of facility-days spent below threshold, compared with the district's own pre-pilot pattern | Before and after comparison inside the pilot district, once live |
| Impact | Stock-out days avoided a year | 0 (model estimate only, not yet measured) [M] | 1.36 crore nationally if rolled out to all 38,241 facilities (base case) [M]; the pilot's own number will be far smaller and is the number that actually tests the model | A live-district stock-out day count, compared against the model's predicted rate for that district (17,412 a year, Table 14.4) |

The impact row in Table 14.5 is the one that most needs its own caveat stated plainly: the 1.36 crore figure is a national projection if every facility behaved like the model assumes, and the pilot's actual job is not to produce that number but to produce a single district's real stock-out count, which the model can then be checked against.

### 14.6 SDG mapping

SwasthyaGrid's claim maps to three Sustainable Development Goal targets, each tested against its own official indicator definition rather than asserted loosely. Table 14.6 sets out the mapping and, critically, which indicator the product's own evidence actually speaks to and which it does not.

**Table 14.6: SDG mapping, tested against official indicator definitions**

| SDG target | Official indicator | What SwasthyaGrid's evidence shows | What it does not show |
|---|---|---|---|
| 3.8 (universal health coverage) | 3.8.1, coverage of essential health services; 3.8.2, proportion of the population with household health spending above 40% of discretionary budget [S104] | A modelled rise in key-medicine availability from 72.2% to 86.1% (base case) speaks directly to the service-coverage spirit of 3.8.1, and the 43.4% out-of-pocket share [S10] is the population-level context 3.8.2 measures | SwasthyaGrid does not measure the official 3.8.1 composite index itself, which spans services well beyond medicine availability, and does not measure a change in the 3.8.2 household-spending indicator directly |
| 10.2 (reduce inequality) | Indicators track income growth of the bottom 40% and various forms of inclusion | Prioritising aspirational districts (section 9, part C), which NITI Aayog itself selected as the country's most underdeveloped on 49 indicators with health and nutrition weighted 30% [S19][S20], targets exactly the population this target is written for | No household-level income or inclusion data is collected by the prototype; the link is a targeting argument, not a measured outcome |
| 12.3 (halve food and resource waste) | 12.3.1, food loss and food waste indices, drawn from the food system but structurally analogous to medicine-waste reduction | The expired-drug paradox (part B, section 6; part D, section 11) is the same structural waste this target addresses in food systems: usable stock destroyed instead of used | SwasthyaGrid's own waste reduction is not separately measured against the 12.3.1 methodology, which was built for food, not medicine, so the mapping is an analogy, not a direct indicator match |

The honest line to draw here, consistent with this document's rule against SDG-washing, is that SwasthyaGrid's current evidence supports a plausible contribution to all three targets without claiming to move any of their official indicators directly; a live pilot that tracked a district's own 3.8.1-relevant service coverage before and after would be the first evidence that closed that gap.

### 14.7 Pilot measurement plan: six indicators

If the pilot runs, the single most important job of the first measurement period is to replace the model's estimate with a measurement. Table 14.7 names the six indicators the pilot would track and how.

**Table 14.7: Pilot measurement plan**

| Indicator | How it is measured | What it replaces |
|---|---|---|
| Stock-out days per facility, before and after | Count days a tracer medicine shows zero stock, from the daily data feed, for 8 weeks before pilot launch and 8 weeks after | The model's 355.1 days-avoided-per-facility projection (Table 14.4) |
| Approval rate of proposed transfers | Share of proposals an officer approves versus edits or rejects, tracked weekly during and after shadow mode | The 50% shadow-mode bar (section 13.2) that is also the roadmap's stop rule (section 15) |
| Time from proposal to approval | Median hours between a transfer proposal and an officer's decision | Assumption that a daily SLA alert (risk R3 mitigation, Table 13.6) is enough to keep the queue moving |
| Near-expiry stock redeployed | Volume and value of stock moved while it still had more than 90 days of shelf life, versus the same facility's prior-year waste pattern | The 6.1% to 12.5% expiry-rescue thresholds this document and part D both use [S16][S17][M] |
| Facility-level availability of the 7 tracer medicines | Direct count at each facility, each week, matched against the pre-pilot availability study figures [S02] | The model's 72.2% baseline and 86.1% base-case target (Table 14.1) |
| Officer-reported trust | A short survey after each shadow-mode week asking whether the officer would have made the same call without the system | The feasibility section's operational amber rating (Table 13.1) |

Every row in Table 14.7 is paired, in the right-hand column, with the specific model assumption or feasibility rating it is designed to test, which is the measurement plan's whole purpose: a pilot that collected data without a stated link back to a specific number in this document would be collecting data for its own sake.

### 14.8 What this estimate cannot claim

Table 14.8 closes the impact section with the limits of the model, stated as plainly as the headline number itself, because a judge who finds these limits unstated will treat the whole model with more suspicion than the limits themselves deserve.

**Table 14.8: What this estimate cannot claim**

| The model does claim | The model cannot claim |
|---|---|
| An estimate of stock-out days avoided a year, built from a stated set of inputs and assumptions [M] | A count of deaths averted, disability-adjusted life years averted, or any other health-outcome measure; the model stops at a logistics indicator, not a clinical outcome |
| Three named scenarios bounding a range the team believes is defensible [A02] | A single "true" number; the base case is a modelling choice, not a measured central estimate |
| Coverage of 7 tracer medicines chosen from the prototype's existing catalogue [S31][A03] | Anything about the roughly 300 to 400 other medicines on a typical state essential-medicines list that the prototype does not yet track |
| A plausible contribution to three SDG targets, read against their own indicator definitions (Table 14.6) | A measured movement in any official SDG indicator, which only a tracked pilot, not a model, could produce |
| A theory of change with a stated indicator at every stage (Table 14.5) | Evidence, today, for any stage below "inputs," since no district is yet live |

Each row in Table 14.8 pairs a claim this document does make with the specific, larger claim it deliberately stops short of, so no reader has to guess where the model's confidence actually ends.

### 14.9 Reading the model's honesty as its own form of evidence

A model that produced only its base case, 1.36 crore, without the bear case, the bull case and the nine-cell sensitivity grid behind it, would be easier to present and harder to defend. The reason this document instead carries all four views of the same underlying calculation, the single point (Table 14.1), the three scenarios (Table 14.2), the full sensitivity grid (Table 14.3) and the two human-scale translations (Table 14.4), is that each view answers a different challenge a reader might raise, and no single view answers all of them. A reader who distrusts the mid-case availability figure needs the sensitivity grid, not the scenario table, because the scenario table holds availability fixed and only varies the cut assumption. A reader who distrusts the cut assumption needs the scenario table, not the sensitivity grid's row for 72.2% alone. A reader who simply cannot picture what 1.36 crore means at any human scale, because a crore is an unfamiliar unit outside an Indian audience and an abstraction even inside one, needs the per-facility and per-district translations, which neither of the other two tables provides. Building all four was not an exercise in padding the section with more tables than the brief requires; each one closes a specific gap the others leave open, and a reader who had only one of the four would still have a legitimate basis to distrust the number.

The theory of change in section 14.5 plays a different role again. It does not add rigor to the arithmetic in Table 14.1; it instead makes visible the five places where the whole chain could break even if the arithmetic is exactly right, because an impact model is only as strong as its weakest causal link, not its most precisely stated multiplication. The logframe in Table 14.5 names, for every stage from inputs to impact, what evidence exists today (almost none, since no district is yet live) and what evidence the pilot would produce. That honesty, that four of the five logframe rows currently read "not yet measured," is not a weakness this document is hiding. It is the entire reason section 14.7's pilot measurement plan exists: to convert exactly those four rows from an assumption into a number within the first measurement period after go-live.

A further honest point belongs here, about the seven tracer medicines the whole model is built on. The model does not claim these seven are representative of every medicine a district stocks; they are the seven the prototype's own catalogue already tracks, chosen for clinical urgency (adrenaline, antiretroviral therapy, anti-snake venom) and for volume (oral rehydration salts, paracetamol) rather than for statistical representativeness across a typical state essential-medicines list of several hundred items [S31][A03]. Extending the model to a wider basket of medicines is a natural next step once a pilot district is live and its data feed can be checked against a longer item list, but this document does not pretend that step has already been taken anywhere in the figures stated above, including the headline 1.36 crore figure itself, which covers only these seven items and no others.

---

## 15. Roadmap: three horizons from 2 districts to about 780, with gates and stop rules

**Answer.** SwasthyaGrid's roadmap runs three horizons matching slide 9 exactly: Horizon 1 (0 to 12 months) reaches 12 districts starting with the Rajasthan pilot then widening to other aspirational districts; Horizon 2 (12 to 36 months) reaches 80 districts and ₹9.6 Cr of annual recurring revenue (ARR) by Year 3, base case [M]; Horizon 3 (36 months on) reaches all about 780 districts and the full 38,241-facility footprint [M]. Three named stop rules, not one vague caution, gate every transition, and the cadence of those gates is deliberately built to match a reporting rhythm NITI Aayog already runs rather than an invented one [S106]. The staged, state-by-state shape of this roadmap has a direct precedent: eVIN itself launched in 12 named states in 2015 before a second funded round carried it to all 36 states and union territories [S102], and SwasthyaGrid's Horizon 1 count of 12 districts deliberately echoes that same staged logic at district rather than state scale.

### 15.1 Three horizons

Table 15.1 restates the three-horizons framework (McKinsey, Baghai, Coley and White, 1999) with SwasthyaGrid's own numbers in every cell, and the gate that has to be passed before the next horizon begins.

**Table 15.1: Three horizons**

| Horizon | Timeframe | Districts | Revenue (base case) [M] | Gate to pass before advancing |
|---|---|---|---|---|
| H1: core | 0 to 12 months | 12 | Year 1 annual recurring revenue (ARR) ₹1.44 Cr | Shadow-mode approval rate at or above 50% in the first live district, within four weeks of go-live (section 13.2) |
| H2: emerging | 12 to 36 months | 80 by Year 3 | Year 3 ARR ₹9.60 Cr, base case [M] | A second state's data MoU signed and its first district live, proving the model generalises beyond Rajasthan |
| H3: future | 36 months on | About 780 (all districts) [S23] | Beyond the three-year model horizon; not projected in this document | Three states each running at least 5 districts with a stable, positive renewal rate |

*ARR: annual recurring revenue. The Year 1, 2 and 3 district counts in the base case path are 12, 45 and 80 [A12][M].*

Horizon 1's twelve-district target is not an arbitrary round number; it matches the model's own base-case Year 1 district count exactly [A12][M], which means the roadmap and the financial model are reading from the same underlying assumption rather than two independently invented numbers that happen to look similar.

### 15.2 Stop rules

A roadmap without a stated stop rule is a roadmap that will keep going past the point where it should have stopped, simply because nobody wrote down in advance what "stop" would look like. Table 15.2 names three.

**Table 15.2: Stop rules**

| Stop rule | What triggers it | What it protects against |
|---|---|---|
| Adoption stop rule | Fewer than half of proposed transfers are approved in shadow mode after four weeks in the first district | Scaling a product that officers do not actually trust, which would waste every later hire and every later state's goodwill on a mechanism that has not been shown to work even once |
| Data-access stop rule | No state signs a data-sharing MoU within eight weeks of serious engagement in two separate states | Spending the founder's limited time (risk R6, Table 13.6) chasing a channel that government procurement timelines may not support inside the plan's own horizon |
| Expiry-generalisation stop rule | A pilot state's own facility audit shows an expiry write-off share below the lower end of the 6.1% to 12.5% range the Telangana and Odisha audits implied [S16][S17][M] | Continuing to price the licence against a self-funding case (section 13.1's economic green rating) that does not hold in a state where the underlying waste problem turns out to be smaller |

Each stop rule in Table 15.2 traces to a specific risk, test or assumption named earlier in this document (the operational amber rating in section 13.1, risk R4 in section 13.6, and the economic feasibility rating respectively), which is the point: a stop rule invented without that link would be a slogan, not a gate.

### 15.3 The first twelve months, month by month

Table 15.3 lays the six-week rollout plan (section 13.2) inside a fuller first-year calendar, showing where the second through twelfth districts are expected to land and where the NITI Aayog Delta Ranking's quarterly cadence [S106] gives a natural external checkpoint to compare progress against.

**Table 15.3: Twelve-month calendar**

| Month | Milestone | External checkpoint, if any |
|---|---|---|
| 1 | Data MoU signed, first district (Table 13.2, week 1) | None |
| 1.5 | First district live (six weeks from MoU, Table 13.2) | None |
| 2 to 3 | Shadow-mode results reviewed; adoption stop rule tested against the first district's real approval rate | NITI Aayog's quarterly Delta Ranking for aspirational districts falls inside this window and gives an independent read on the pilot district's own health and nutrition trajectory, separate from SwasthyaGrid's own metrics [S106] |
| 4 to 6 | Second and third districts onboarded inside the same state, reusing the first district's MoU and training materials | None |
| 7 to 9 | A second state's data MoU pursued; data-access stop rule's eight-week clock starts from first serious engagement | A further quarterly Delta Ranking cycle falls inside this window |
| 10 to 12 | Districts 4 through 12 onboarded, closing out Horizon 1's twelve-district target (Table 15.1) | A further quarterly Delta Ranking cycle falls inside this window, giving three independent external checkpoints across the first year |

Anchoring the calendar's checkpoints to NITI Aayog's own quarterly Delta Ranking cadence, rather than to a schedule this team invented, means a judge or a future state partner can independently verify the pilot districts' broader health trajectory on a public government timetable that already exists and will keep running whether or not SwasthyaGrid's own internal reporting is trusted [S106].

### 15.4 Funding the horizons without an investment ask

This pitch asks for no investment (plan decision D3), and Table 15.4 sets out the two funding paths that could carry the roadmap through Horizon 1 without one.

**Table 15.4: Funding paths for the roadmap, no investment ask**

| Path | What it provides | Evidence it exists |
|---|---|---|
| Paid pilot | The first state pays the ₹12 L licence and ₹3 L onboarding fee directly from its own NHM-tagged digital-health budget line [A05][A11][S18] | This is the default path and the one every revenue figure in part D of this document assumes |
| Innovation grant | A government or foundation innovation grant could cover a first district's costs while the product proves itself, as a substitute for the first paid licence rather than as venture capital | Atal Innovation Mission (NITI Aayog), together with Social Alpha and IIT-Delhi, already runs exactly this kind of grant for digital-health start-ups, up to ₹65 lakh per winner for product trials and pilot studies [S105] |

Neither path has been secured as of this document; naming both, with the grant path backed by a named, currently running government program rather than a hypothetical one, is this section's own defensive-depth answer to the question a judge is most likely to ask about funding before Horizon 2 begins.

### 15.5 Why the roadmap does not promise a national rollout date

A reader comparing this roadmap with a typical start-up growth slide will notice something missing: no date is attached to reaching all about 780 districts. Horizon 3 in Table 15.1 is stated as "36 months on," not as a specific month or year, and the district count there, about 780, carries no revenue projection at all. This is a deliberate choice, not an oversight, and it follows directly from the eVIN precedent this section leans on most heavily. eVIN itself did not reach all 36 states and union territories inside a planned window measured from its 2015 launch; it reached 12 states first, waited for a second funded round, and only then scaled to the rest of the country [S102]. A roadmap that promised a specific national completion date for SwasthyaGrid would be promising something even its own best precedent did not achieve on a fixed schedule, and stating the honest version, that Horizon 3 begins once Horizon 2's gate is passed but is not dated beyond that, is more defensible under questioning than a confident but invented date would be.

This same caution shapes why Table 15.1 states no revenue figure at all for Horizon 3. The financial model in part D of this document (and Table 14.1 of this document) is built and validated out to Year 3, the base case's 80-district, ₹9.6 Cr ARR point; projecting that same model mechanically out to 780 districts would multiply a three-year model's assumptions across a timeframe long enough that every one of its seventeen named assumptions (plan section 5.4, reproduced in Appendix D) could plausibly have shifted by the time Horizon 3 actually arrives. Stating "not projected in this document" in Table 15.1's Horizon 3 row is the same discipline section 14.8 applies to the impact model: a number this document has not actually modelled is not a number this document will state as if it had.

---

## 16. Slide blueprint: how 10 slides carry the argument

**Answer.** The ten-slide deck runs cover, eight core slides and an appendix, each slide's headline reproduced verbatim from plan section 2.6 below, each carrying a named skill archetype, a named framework set, and the single strongest piece of evidence on that slide, so a reader can check in one table that every slide does the specific analytical job this document's longer sections build toward. No slide on this list restates its own headline in its body, consistent with the standing rule in plan section 11.15.

### 16.1 The ten slides

**Table 16.1: Slide blueprint**

| Slide | Action title (verbatim, plan section 2.6) | Skill archetype | Frameworks on the slide | Strongest evidence | What a judge should remember |
|---|---|---|---|---|---|
| S1 Cover | SWASTHYAGRID | Cover slide with mind map and logo slots | None (orientation only) | Eight named public bodies drawn into one mind map, each with a logo slot | The deck opens on the institutions it has to work with, not on a product screenshot |
| S2 Executive Summary | Districts run short and write off expired medicine at the same time; SwasthyaGrid moves what a district already owns and avoids an estimated 1.36 crore stock-out days a year | Executive summary, recommendation plus for and against | Pyramid principle; obvious-versus-alternative; brief coverage matrix | The paradox stated in one sentence, with the moneyshot already foreshadowed in smaller type | The whole argument is in this one headline before any chart has been shown |
| S3 Problem | A third of key medicines can be missing from a PHC shelf on any day while warehouses write off crores in expired stock: nobody sees the district's supply as one | Two-chart action-title workhorse | MECE issue tree; 5 Whys; evidence triangulation | The Telangana (₹390.26 Cr) and Odisha (₹168 Cr) audit figures sitting beside the availability bars on the same slide [S16][S17] | Two independent evidence sets point at the same blind spot, which is the foreshadow for the whole deck |
| S4 Solution | SwasthyaGrid gives each district one morning view of every shelf, bed and roster, proposes the nearest transfer, and a named officer approves it before anything moves | Deep dive on the chosen alternative | Value chain loop; before and after comparison; product wireframe | The PHC Kota-4 proof card, 1.2 to 21.0 days of antiretroviral cover, labelled simulated [S31] | The mechanism is shown working once, honestly labelled as a prototype run, not claimed as a live deployment |
| S5 Target Market | State health departments buy for about 780 districts, a ₹93.6 Cr a year licence pool; we enter through 112 aspirational districts worth ₹13.4 Cr and a Rajasthan beachhead | Market sizing and actors | Bottom-up TAM/SAM/SOM; buying-centre map; price benchmarking; beachhead (Crossing the Chasm) | The bottom-up sizing arithmetic (780 x ₹12 L = ₹93.6 Cr), traceable to a named district count and a named licence price [M] | Every market number on this slide is built from a count times a price, not asserted as a round figure |
| S6 Innovation | Five public systems record India's health supply and none of them moves it; SwasthyaGrid adds the missing layer that rebalances stock across a district with a human sign-off | Symmetric comparison grid with foreshadow | Feature-parity heat grid; Blue Ocean ERRC; Helmer 7 Powers; precedent | eVIN's own reported 80% cut in vaccine stock-outs, used as the precedent that visibility changes behaviour [S12] | The contrarian thesis has a working precedent in a different but comparable system, not just a theory |
| S7 Sustainability | The model pays for itself three ways: a ₹12 L licence on a 71% gross margin, less medicine expiring on the shelf, and fewer families pushed to private chemists | Multi-chart dense slide; three-scenario projection | The People, Planet, Profit framework; unit economics; scenarios; customer return on investment | The 6.1% to 12.5% expiry-rescue threshold, which turns an abstract sustainability claim into a specific, checkable number [S16][S17][M] | Sustainability is argued in three independent currencies on one slide, not asserted once in general language |
| S8 Feasibility | A district can go live in six weeks with no new hardware or purchase line: SwasthyaGrid reads the stock exports states already produce, and one officer per district signs off | Implementation plan and risk | TELOS feasibility test; Gantt; probability times impact risk register; customer validation plan | The TELOS table's two named amber ratings, stated before a judge can raise them (section 13.1 of this document) | Feasibility is shown as three greens and two honest ambers, never five greens |
| S9 Impact | Rolled out over three years, SwasthyaGrid avoids an estimated 1.36 crore stock-out days a year and lifts key-medicine availability from 72.2% to 86.1% | The moneyshot, with scenarios and sensitivity | Moneyshot; theory of change; three scenarios; 3x3 sensitivity; Three Horizons; SDG mapping | The 3x3 sensitivity grid showing every combination of availability and cut assumption still clears 58.6 lakh days avoided (section 14.3 of this document) | The single largest number in the deck is backed by a grid showing it does not depend on any one assumption holding exactly |
| S10 Appendix | Every number on the deck traces to a named source or to one stated model, and each assumption below can be changed and re-run | Appendix deep dive | Defensive depth | The full assumptions register (plan section 5.4), which this document's Appendix D reproduces with two added columns | Nothing on the first nine slides is a number without a receipt somewhere in the appendix |

Table 16.1's ten rows show the same property section 16.2 below argues in prose: each slide carries a distinct archetype and a distinct piece of evidence, so no two rows of this table could be swapped without breaking the sequence.

### 16.2 What the sequence does, slide by slide

The ten-row table above answers what each slide carries; it is worth stating in one paragraph what the sequence does as a whole, because a list of ten rows can obscure the fact that each slide's job is strictly downstream of the one before it. S2 states the answer before any evidence has been shown, which is the Pyramid Principle applied at deck level: the governing thought comes first, and S3 through S9 exist to support it, not to build up to it. S3 proves the paradox with two independent evidence sets, which is also where the foreshadow for S6's precedent is planted, exactly as plan section 2.2 describes. S4 shows the mechanism works once, on simulated data, honestly labelled. S5 names who pays and how much. S6 answers why nobody else has built this, using a precedent rather than a bare assertion. S7 argues durability in three currencies at once. S8 shows the plan can start now, amber ratings included. S9 is the single climax the whole deck has been built toward, and its own sensitivity grid is what keeps the climax from reading as a confident guess. S10 exists so that any one of the preceding nine slides can be challenged and answered from the same document.

One more property of the sequence deserves naming: no two adjacent slides repeat the same archetype. S2's executive summary, S3's two-chart workhorse, S4's deep dive, S5's market sizing, S6's symmetric grid, S7's multi-chart dense slide, S8's implementation plan and S9's moneyshot are eight different shapes in a row, which is itself a design choice rather than an accident of what each section happened to need. A judge who has watched several decks in the same sitting notices immediately when two slides in a row look structurally identical, because the eye disengages from content and starts pattern-matching layout instead; varying the archetype on every slide, even inside a compressed eight-core-slide format, keeps a reader's attention on the argument rather than on the page.

---

## 17. Twenty-five judge questions and the answers we will give

**Answer.** This section carries twenty-five judge questions in one table: the eighteen drawn from plan section 13's defence sheet, restated here as statements rather than literal questions, plus seven new ones this document adds to extend coverage into ground the original eighteen do not reach, chiefly the data infrastructure SwasthyaGrid rides on top of, the funding paths available without an investment ask, and what the impact model's SDG mapping can and cannot claim. Every entry carries a short answer and the slide or section that backs it, so a reader checking any one row can verify it against the fuller treatment elsewhere in this document.

### 17.1 The twenty-five entries

**Table 17.1: Judge questions and answers**

| # | Judge question, as a statement | Short answer | Backing |
|---|---|---|---|
| 1 | Why a state would pay ₹12 L a district when e-Aushadhi already exists | e-Aushadhi records what was bought and issued; it does not rank which facility should send stock to which, or put a proposal in front of an officer. ₹12 L is 0.25% of an average district's central NHM allocation, and in the two audited states a district loses ₹0.96 Cr to ₹1.97 Cr a year to expiry; the licence pays for itself if it rescues 6.1% to 12.5% of that [S18][S16][S17][M] | S2, S7; section 13.1, 13.4 of this document |
| 2 | Whether a ₹93.6 Cr market is too small to be a real business | It is an honest number, about 780 districts at ₹12 L; at 80 districts the business earns ₹9.6 Cr of recurring revenue on a 71% gross margin, and the same buyer pattern repeats in nutrition and agriculture as a later option, not today's market [M] | S5, S10; part C section 9 |
| 3 | Whether 1.36 crore stock-out days avoided is a measured result | No; it is an estimate from a stated model with three named scenarios: 81.5 lakh bear, 1.36 crore base, 2.17 crore bull [M] | S9; section 14.2 of this document |
| 4 | Whether anyone has used the product | No; a prototype runs on simulated data for 40 facilities in 5 Rajasthan districts, no district is live and no interviews have been done [S31] | S4, S8; section 13.2 of this document |
| 5 | Who is responsible if a transfer leaves the sending facility short | The officer who approved it, exactly as with a paper indent today; the system never moves stock on its own, and a lateral transfer is only proposed when the sender keeps a safety buffer [S31] | S4; section 13.5 of this document |
| 6 | Why a district officer would open another tool every morning | Because it removes work officers already do, the phone calls to find surplus; adoption is tested first in a shadow period where officers compare proposals with their own calls before relying on them, with a stated stop rule if fewer than half are approved after four weeks | S8; section 13.2, 15.2 of this document |
| 7 | Whether states will share their data | The data is stock and counts, with no patient identity, so the Digital Personal Data Protection Act is not triggered; health is a State subject, so each state's data stays with that state [S13][S14] | S8; section 13.4 of this document |
| 8 | Why not ask government to extend eVIN to medicines | That may happen and would validate the idea; eVIN covers vaccines with a dedicated cold chain, while medicines run through state corporations with different catalogues and rules in every state, so a state-by-state layer reading existing exports can start in six weeks without waiting for a national programme [S12][S15] | S6, S8; section 15.1 of this document |
| 9 | What stops a large vendor such as C-DAC from adding this feature | Nothing stops the attempt; their products and contracts are built around recording transactions, while proposing moves needs district-specific transfer rules, officer workflows and trust built through shadow periods, which is process knowledge that accumulates district by district [S15] | S6; part C section 10 |
| 10 | Where the unit economics come from | The price is built from three lines inside the ₹3 L to ₹25 L band Indian health software already charges; the 71% margin is a benchmark-based assumption, not our own history; blended acquisition cost and contract life are team estimates, each shown with its own working [S25][S26][A08][A09][A10] | S7; part D section 11, 12 |
| 11 | Whether one founder can deliver this | Today the team is one founder and a working prototype; the first two hires, a state implementation lead and a data operations person, are tied to pilot fees and listed as risk R6 rather than hidden [S31] | S8; section 13.5, 13.6 of this document |
| 12 | How this is sustainable for the environment, and where the numbers are | No emissions figure is claimed because there is no measured baseline; what is sourced is that the supply chain is about 71% of health care's global footprint, and two audited states wrote off ₹558 Cr of expired medicine between them [S22][S16][S17] | S7; part D section 11 |
| 13 | How expiry per district was calculated | Audited total divided by audited years divided by number of districts: Telangana ₹390.26 Cr over 6 years and 33 districts is ₹1.97 Cr; Odisha ₹168 Cr over 5.83 years and 30 districts is ₹0.96 Cr; the arithmetic is the team's own, on CAG figures, and is labelled that way [S16][S17][M][A14] | S3, S7; part B section 6 |
| 14 | Whether the audits show stock-outs of the same medicines at the same time as the expiry | No, and this document says so plainly; availability studies and expiry audits are two independent evidence sets, and the claim is that both trace to the same blind spot, which a pilot would test directly by tracking near-expiry stock that gets redeployed | S3; part B section 6 |
| 15 | Why start with aspirational districts | Need is highest there; NITI Aayog scores them on 49 indicators with health and nutrition carrying 30% of the score, and the District Collector has a visible reason to improve it; Rajasthan is the beachhead because the prototype already models its districts and five of the 112 aspirational districts sit in the state [S19][S20][S24][S31] | S5; part C section 9 |
| 16 | Why price per district rather than per facility | The buyer signs for districts, and the decision is made at district level; a district price is easy to place in a budget, while the facility tier inside the price keeps it fair for larger districts [A05][A07] | S5, S7; part D section 12 |
| 17 | What would make the team stop | Three stated stop rules: states decline to share exports after serious effort in two states; officers approve fewer than half of proposals in shadow mode; or the pilot shows no change in stock-out days after three months | S9; section 15.2 of this document |
| 18 | Who funds the pilot | No investment is asked in this pitch; the plan is a paid pilot at the onboarding fee, or a state or foundation innovation grant if a state prefers, and neither has been secured | S10; section 15.4 of this document |
| 19 | Why an existing national facility registry does not make SwasthyaGrid redundant | The Ayushman Bharat Digital Mission's Health Facility Registry already carries verified IDs for more than 1,00,000 facilities, about 97% of them government, but a facility ID is not a transfer proposal; SwasthyaGrid reads that same registry rather than duplicating it, and builds the ranking and approval layer the registry itself does not provide [S100] | New; section 13.3 of this document |
| 20 | Why HMIS's documented data-quality problems do not sink this product | India's HMIS has carried known weaknesses in data quality and frontline training since at least a 2013 academic review, and this document names that precedent directly rather than assuming it away; SwasthyaGrid's freshness-flag mitigation (risk R1) and its pre-mortem (section 13.7) both treat stale or poor-quality data as the single most likely failure mode, not a remote risk [S101] | New; section 13.3, 13.7 of this document |
| 21 | How a quarterly government reporting cadence fits a six-week pilot gate | NITI Aayog already runs a quarterly Delta Ranking of aspirational districts on health and nutrition progress; the twelve-month calendar in this document times its own internal checkpoints to fall inside that existing quarterly rhythm, so a state partner can cross-check the pilot district's broader trajectory on a timetable that already exists independently of SwasthyaGrid's own reporting [S106] | New; section 15.3 of this document |
| 22 | Whether a government grant could replace the licence fee entirely | A named, currently running grant (Atal Innovation Mission, with Social Alpha and IIT-Delhi, up to ₹65 lakh per winning digital-health start-up) could fund a first district's pilot costs as a substitute for the first paid licence, but every revenue figure in this document still assumes the paid-pilot path as the default, because a grant is a bridge to prove the product, not a long-term revenue model for a business this document otherwise prices as a recurring licence [S105] | New; section 15.4 of this document |
| 23 | What happens to expired-drug disposal cost once stock moves faster | CDSCO issued a dedicated national guidance document on the disposal of expired and unused drugs in May 2025; this document treats that guidance as the boundary condition for stock SwasthyaGrid's transfer proposals could not move in time, not as a cost SwasthyaGrid itself changes, since disposal is a separate regulatory process from the transfer mechanism this product provides [S103] | New; section 13.4 of this document |
| 24 | Why the impact model does not count lives saved or disability-adjusted life years averted | The model stops at a logistics indicator, stock-out days avoided, because no measured baseline exists to convert that into a clinical outcome; checked against the official SDG 3.8.1 and 3.8.2 indicator definitions, SwasthyaGrid's evidence supports a plausible contribution to universal health coverage without claiming to move either official indicator directly [S104] | New; section 14.6, 14.8 of this document |
| 25 | What a state loses by waiting for a national data layer instead of piloting now | eVIN itself did not launch nationally; it started in 12 named states in 2015 and only reached all 36 states and union territories after a second funded round, so waiting for a single national launch would have meant waiting years even for the precedent this document cites most often; SwasthyaGrid's state-by-state roadmap deliberately follows the same staged logic rather than waiting for a national mandate that historically has not been how comparable systems actually scaled in India [S102] | New; section 15.1 of this document |

### 17.2 Reading the table as a whole

Three patterns are worth naming once, rather than leaving them implicit across twenty-five rows. First, questions 3, 12, 13, 14 and 24 are all variations on the same underlying challenge, that this document estimates rather than measures its central numbers, and every one of those five rows answers with the same discipline: name the model, name the assumption, name what would have to happen for the estimate to become a measurement. A judge who asks any one of these five in a different form should hear the same honest answer each time, not a different hedge depending on which specific number they picked. Second, questions 9, 19 and 20 are all variations on "why does an existing system not already do this," and each answer draws the same distinction: an existing system records or registers; SwasthyaGrid proposes and routes a decision to a named human. That distinction is the single sentence this entire pitch could be reduced to if a judge allowed only one. Third, the seven new questions (19 through 25) were chosen specifically to extend the eighteen inherited questions into exactly the ground this document's own research turned up that plan section 13 could not have anticipated when it was written: a national facility registry that already exists, a documented decade-old weakness in India's own HMIS, a quarterly government ranking cadence that gives the roadmap a free external check, a named grant program as a funding alternative, a dedicated 2025 disposal guideline, the official SDG indicator definitions, and eVIN's own staged, state-by-state history rather than a single national launch. None of these seven was available to state until the research for this document was done, which is itself the honest answer to a different, unasked question: why a research document this long is worth writing at all, rather than stopping at the ten-slide deck.

### 17.3 How this table should be used in a live round

A judge's panel rarely asks a question in the exact words this table uses, and a team that answered only by reciting a row verbatim would sound rehearsed rather than prepared. The table's real use is as a rehearsal map, not a script: each row names the single fact or number that has to stay fixed in the answer regardless of how the question is phrased, while the surrounding sentence can and should change to match the judge's actual wording. A judge who asks "isn't this just e-Aushadhi with a better interface" is asking question 1 in different words, and the answer should still land on the same two numbers, 0.25% of the NHM allocation and the 6.1% to 12.5% rescue threshold, even though the opening sentence will not start with "e-Aushadhi records what was bought and issued" verbatim.

It is also worth stating plainly which rows in Table 17.1 this team considers hardest to defend under sustained follow-up, because a defence sheet that pretended every row was equally solid would itself be a credibility risk. Questions 3, 13 and 24, all variations on how the headline impact number was built, are the rows most likely to draw a second and third follow-up question in a live round, precisely because they rest on a model rather than a measurement. The honest preparation for that follow-up is not a sharper rhetorical answer; it is having Table 14.1 through Table 14.5 of this document open and ready to walk through line by line, because the actual defence of an estimate is showing its full working, not asserting its confidence more firmly. A team that treats this document as a source of talking points rather than as the working itself will eventually be caught short by a fourth follow-up question; a team that treats it as the working, and simply turns to the right table live, will not. The same rule applies to question 2 and question 16, both about pricing: a confident restatement of ₹12 L will satisfy a first question, but only the facility-tier arithmetic in part D of this document will satisfy a second one that asks why a smaller district pays the same price as a larger one inside the same state.
