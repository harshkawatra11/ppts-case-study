## 11. Sustainability: a 71% margin business that also cuts expiry and out-of-pocket spending

**Answer.** SwasthyaGrid's sustainability case rests on four legs, not one. The licence itself runs at a 71% gross margin in the base case, pays back customer acquisition cost in 5.6 months, and returns a lifetime value of ₹42.6 L against a ₹4 L cost, a 10.65x ratio [A05][A08][A09][M]. The same licence pays for itself for the buyer: a district that redeploys just 6.1% of Telangana's own audited annual expiry write-off, or 12.5% of Odisha's, toward higher-turnover facilities covers the entire ₹12 L fee [S16][S17][M][A14]. On the planet side, the model does not claim an emissions number it cannot measure, but it sits inside a health sector that Health Care Without Harm and Arup put at 4.4% of global net emissions, 71% of it supply chain [S22], and it displaces a disposal problem that CDSCO guidance and two state audits confirm is real and growing [S16][S17][S81]. On the people side, a stocked PHC shelf closes part of the 43.4% out-of-pocket share of India's health spending [S10], concentrated first in the 112 districts the government itself has flagged as most in need [S19][S20]. Institutionally, the licence rides a budget line that has grown every year since 2022-23 [S18][S82], sits inside a constitutional boundary that keeps every district's data with its own state [S13], and touches no personal data at all [S14]. Table 11.6 names the six conditions that would break this case and the signal that would show each one early.

### 11.1 Profit: how a ₹12 L licence becomes a 71% margin business

The licence price is not a round number chosen to look clean. It is built from three named components, each with its own basis, and Table 11.1 shows the build exactly as the model computes it.

**Table 11.1: Annual contract value build, base case**

| Component | Value | Basis |
|---|---|---|
| Base platform fee | ₹4 L | Covers the district-level dashboard, the morning view and the approval workflow [A05] |
| Per-facility tier | ₹7.0 L (50 facilities × ₹14,000) | Priced at the facility level because a district's cost to serve scales with the number of PHCs and CHCs it runs, not with its population [A07] |
| Support retainer | ₹1 L | One named support contact per district, phone and email, no on-site staff [A05] |
| **Total ACV** | **₹12.0 L** | ₹4 L + ₹7.0 L + ₹1 L [M] |

*ACV: annual contract value. PHC: primary health centre. CHC: community health centre.*

A district in the model's facility universe runs 49.0 facilities on average (38,241 facilities across 780 districts) [S01][S23][M], close enough to the 50-facility tier that the pricing band holds without a special case for most districts; the Appendix D sensitivity (section 12.3 of this document) shows what happens at 35 and 65 facilities.

Table 11.2 shows the unit economics that follow from this ACV, worked step by step rather than asserted.

**Table 11.2: Unit economics, base case, worked**

| Step | Calculation | Result |
|---|---|---|
| Gross margin | Benchmark-based assumption for Indian B2B SaaS [A08] | 71% |
| Gross profit per district per month | ₹12.0 L × 71% ÷ 12 | ₹0.710 L a month [M] |
| Customer acquisition cost (CAC) | Team estimate, state-level sales cycle [A09] | ₹4 L |
| CAC payback | ₹4 L ÷ ₹0.710 L | 5.6 months [M] |
| District licence life | Team estimate; government software contracts renew in multi-year cycles [A10] | 5 years |
| Lifetime value (LTV) | ₹12.0 L × 71% × 5 years | ₹42.6 L [M] |
| LTV : CAC | ₹42.6 L ÷ ₹4 L | 10.65x [M] |

A 10.65x LTV:CAC ratio and a 5.6-month payback both clear the rule-of-thumb bar investors and boards use for a healthy subscription business (a ratio above 3x and a payback under 12 months), and they do so even though the licence price itself is modest in absolute terms. The margin assumption is the single most load-bearing number in this table and it is labelled as an assumption rather than a measured result (A08 draws on Indian SaaS benchmark reporting, not on SwasthyaGrid's own billing history, because none exists yet) [S26].

Table 11.3 extends the unit economics to a three-year revenue path, scored on the bear, base and bull district counts the deck already carries, so the margin story and the growth story sit on the same page rather than in separate sections.

**Table 11.3: Revenue path, Rs crore, three scenarios [M]**

| Scenario | Districts (Y1, Y2, Y3) | ARR (Y1, Y2, Y3) | Onboarding fee (Y1, Y2, Y3) | Billings (Y1, Y2, Y3) | Y3 recurring share | Gross margin | Y3 gross profit |
|---|---|---|---|---|---|---|---|
| Bear | 12, 30, 50 | ₹1.44, ₹3.60, ₹6.00 Cr | ₹0.36, ₹0.54, ₹0.60 Cr | ₹1.80, ₹4.14, ₹6.60 Cr | 90.9% | 62% | ₹3.72 Cr |
| Base | 12, 45, 80 | ₹1.44, ₹5.40, ₹9.60 Cr | ₹0.36, ₹0.99, ₹1.05 Cr | ₹1.80, ₹6.39, ₹10.65 Cr | 90.1% | 71% | ₹6.82 Cr |
| Bull | 12, 60, 105 | ₹1.44, ₹7.20, ₹12.60 Cr | ₹0.36, ₹1.44, ₹1.35 Cr | ₹1.80, ₹8.64, ₹13.95 Cr | 90.3% | 76% | ₹9.58 Cr |

*ARR: annual recurring revenue, the year-end licensed districts multiplied by ACV [A13]. Billings: ARR plus the one-time ₹3 L onboarding fee charged on every newly licensed district in that year [A11]. Y3: the third full year of operation.*

The gap between ARR and billings is deliberate and the model never lets the two collapse into one another, a correction over deck B's own numbers that section 3 of this document documents in full. By Year 3, onboarding is a small fraction of total billings in every scenario (9.1% to 9.9%), which is the right shape for a business whose durable value is the recurring licence, not the one-time setup fee. The gross margin itself widens from 62% in the bear case to 76% in the bull case because a larger district base spreads the fixed cost of the support retainer and the platform engineering team across more licences, the standard SaaS mechanism, applied here to a public-sector buyer rather than a private one.

Table 11.4 shows how far the Year 3 result moves if any one input is wrong, because a sustainability case that only survives at the exact assumed values is not a sustainability case at all.

**Table 11.4: Sensitivity, Year 3 ARR, Rs crore (base case 9.60) [M]**

| Driver flexed | Low end | High end | Result range |
|---|---|---|---|
| Districts licensed by Year 3 | 50 | 105 | ₹6.00 Cr to ₹12.60 Cr |
| ACV | ₹9 L | ₹15 L | ₹7.20 Cr to ₹12.00 Cr |
| Facilities per district (and the ACV this implies) | 35 (₹9.9 L) | 65 (₹14.1 L) | ₹7.92 Cr to ₹11.28 Cr |

Every one of these three ranges keeps Year 3 ARR above ₹6 Cr, which is the bear-case floor in Table 11.3; the model's three levers do not have a combination inside the stated bounds that erases the business, though a joint shock (fewer districts and a lower ACV at the same time) would come closer, and the risk register in section 13 of this document treats that joint scenario explicitly.

A district-level break-even view completes the profit leg. A single district's ₹12 L annual fee is a fixed, known cost to the state; what it buys is not abstract, because the same district already loses multiples of that figure to expiry (section 11.2 below). Framed this way, the licence is not primarily a cost line competing against hiring or drug purchase, it is a cost line that pays for itself out of waste the district is already incurring, before any benefit from avoided stock-outs (quantified separately in section 14 of this document) is even counted.

### 11.2 Customer payback: the share of expired stock SwasthyaGrid must rescue to pay for itself

The clearest sustainability argument available to SwasthyaGrid is not a projection, it is an audited fact already on two state governments' own books. Telangana's state medical services corporation wrote off ₹390.26 Cr of expired drugs between 2016 and 2022, and separately issued ₹17.13 Cr of drugs to facilities with only 1 to 89 days of shelf life left [S16]. Odisha's state medical corporation wrote off ₹168 Cr of expired medicine between April 2019 and January 2025, including ₹47 Cr of unused COVID-19 medicines [S17]. Table 11.5 turns both audits into a per-district, per-year figure and then into the share of that figure a single SwasthyaGrid licence would need to redeploy to pay for itself.

**Table 11.5: Customer payback arithmetic, Telangana and Odisha [S16][S17][M][A14]**

| Step | Telangana | Odisha |
|---|---|---|
| Total expiry write-off (audited) | ₹390.26 Cr | ₹168.00 Cr |
| Period audited | 2016-22 (6.00 years) | Apr 2019 to Jan 2025 (5.83 years) |
| Write-off a year | ₹65.04 Cr | ₹28.80 Cr |
| Districts in the state | 33 | 30 |
| Write-off per district a year | ₹1.97 Cr | ₹0.96 Cr |
| SwasthyaGrid licence a year | ₹12 L | ₹12 L |
| Share of annual expiry the licence must redeploy to break even | 6.1% | 12.5% |

*The district counts behind this table are the two states' own administrative district totals at the time of the respective audits, used only as the denominator for a per-district average; this is a planning approximation, not a claim that every district in either state wastes an identical amount.*

Even at the more conservative Odisha ratio, a district officer only needs to move about one-eighth of the medicine that would otherwise sit on a shelf until it expires toward a facility that will actually use it before the fee pays for itself, with every stock-out day avoided after that an additional, uncounted return. This is the single strongest "why now" argument available to a pitch built around moving stock rather than buying more of it, because it does not depend on any number SwasthyaGrid itself produces; it depends only on numbers the Comptroller and Auditor General of India has already published.

Two limits deserve to be stated plainly rather than left for a judge to find. First, neither audit reports stock-outs for the same items in the same months as the expiry figures, so the "paradox" argued in section 2 and section 6 of this document is an inference from two independent evidence sets, not a single matched dataset. Second, the per-district average write-off understates the opportunity for the worst-affected districts and overstates it for the best-run ones; a district that already manages its stock well will recover less than ₹1.97 Cr or ₹0.96 Cr a year, and the pitch does not depend on every district matching the state average, only on the state average clearing the 6.1% to 12.5% bar.

### 11.3 Planet: SwasthyaGrid displaces waste, it does not claim an emissions number it cannot measure

Health care's own environmental footprint is large enough that the sector is now tracked as a climate actor in its own right rather than only as a service. Health Care Without Harm and Arup's global analysis puts health care at 4.4% of global net emissions, with 71% of that coming from its supply chain (medicines, medical devices, food, and other goods and services the sector buys), 17% from direct facility operations and 12% from purchased energy [S22]. This document uses the confirmed global figure rather than a country-specific share, because an India-specific "share of national footprint" claim sometimes attributed to the same report could not be located in it on verification and is not repeated here (a residual the deliverable's verification log records in full) [S22].

SwasthyaGrid sits inside the supply-chain slice of that footprint, specifically inside the waste sub-component of it: a drug that expires unused on a district shelf has already been manufactured, packaged, transported and stored, and its entire embedded environmental cost is realised with zero health benefit delivered. Every vial or strip SwasthyaGrid helps redeploy to a facility that will actually dispense it before expiry avoids that same embedded cost being incurred twice, once for the wasted unit and again for its eventual replacement. The model deliberately does not convert this into an avoided-emissions number, because no measured baseline exists for how much of the ₹390.26 Cr (Telangana) or ₹168 Cr (Odisha) write-off would actually have been reused versus simply over-procured regardless of visibility; stating a tonnes-of-carbon figure without that baseline would be exactly the kind of fabricated precision section 5 of the standing project rules prohibits.

Disposal of what does expire carries its own, separate environmental and governance risk, and current practice is uneven. India's Bio-Medical Waste Management Rules, 2016 govern facility-level disposal, and the Central Drugs Standard Control Organisation's May 2025 guidance requires distributors and stockists to return expired stock to manufacturers or dispose of it under those rules; unregulated disposal of expired medicine risks contaminating water supplies and feeding informal resale markets [S81]. At the household level, a mixed-method study in Bhubaneswar, Odisha found that 82.1% of surveyed households simply throw unused or expired medicine in the household dustbin rather than returning it through any regulated channel [S34], which is the household-level mirror of the same disposal gap at the institutional level. Table 11.6 sets these facts out as a before-and-after of what a visible, transferable stock position changes about this disposal picture.

**Table 11.6: What planned transfers replace in the disposal chain**

| Without district-wide visibility | With SwasthyaGrid's morning view |
|---|---|
| A facility holds near-expiry stock it cannot use quickly enough; it expires in place and is later written off and disposed of under the Bio-Medical Waste Management Rules, 2016 [S81] | The same near-expiry stock is flagged and a transfer to a higher-turnover facility within the district is proposed before expiry, so it is dispensed rather than disposed of |
| A state-level write-off (Telangana ₹390.26 Cr, Odisha ₹168 Cr) [S16][S17] is the only point at which the waste becomes visible to anyone outside the warehouse | A district officer sees the near-expiry risk weeks earlier, at the facility level, before it becomes an unavoidable write-off |
| Disposal volume and its associated cost and environmental burden track total procurement, largely independent of how well-matched that procurement is to local demand | Disposal volume tracks only genuinely surplus or genuinely unusable stock, after redistribution has had a chance to work |

A national policy benchmark helps size how far India still has to go on waste reduction generally, outside the health sector specifically. The UNEP Food Waste Index Report 2024 estimates about 50 kilograms of food is wasted per person a year in India, and India has not yet adopted a national target aligned to Sustainable Development Goal 12.3, which calls for halving food and retail waste by 2030 [S86]. This is cited here only to make a scope point: a medicine-specific waste target, which SwasthyaGrid's model implicitly works toward at the district level, sits one level below a national waste-reduction target that itself is still forming, so the deck's planet claim is deliberately narrow and deliberately modest rather than an appeal to a policy framework that does not yet exist for this sector.

### 11.4 People: a stocked shelf closes part of the 43.4% out-of-pocket gap

The people case for SwasthyaGrid starts from a single, well-established fact: out-of-pocket expenditure made up 43.4% of India's total health expenditure in 2022-23 [S10], and a material share of that spending happens because a public facility's shelf was empty on the day a patient needed something on it, pushing the patient to a private chemist at full market price. Every item SwasthyaGrid helps keep in stock at the public facility that is supposed to carry it is one fewer item a household has to buy out of pocket at the private alternative. The model does not attempt to convert this into a rupee figure saved per household, because no study ties SwasthyaGrid's specific stock-out reduction to private substitution spending; the 43.4% figure is cited as the scale of the problem this mechanism works against, not as a number SwasthyaGrid claims to move by a stated amount.

The first set of people who gain are concentrated by design rather than spread evenly. NITI Aayog's list of 112 aspirational districts [S19] is the segment SwasthyaGrid enters through first (section 9 of this document works the arithmetic in full), and health and nutrition carries a 30% weight inside the 49-indicator composite score NITI Aayog uses to rank these districts [S20], meaning the districts SwasthyaGrid is likeliest to reach early are also the districts where a stocked shelf moves the official development scorecard the most, not only patient experience.

A second, narrower group of people benefit disproportionately from one specific category of item: emergency and tracer medicines. India records about 58,000 snakebite deaths a year, with 70% concentrated in eight states (Bihar, Jharkhand, Madhya Pradesh, Odisha, Uttar Pradesh, Andhra Pradesh and Telangana combined, Rajasthan and Gujarat) [S06]. Anti-snake venom is one of the seven tracer medicines the SwasthyaGrid prototype catalogue tracks (plan section 5.4, assumption A03), and a facility that runs out of it on the day a bite patient arrives has no substitute available in the time that matters. Table 11.7 sets out who gains and on what basis, so the people argument reads as a named set of beneficiaries rather than an unspecific appeal to "communities."

**Table 11.7: Who gains when a district's shelf is reliably stocked**

| Beneficiary group | Why they gain | Evidence |
|---|---|---|
| Households who would otherwise buy from a private chemist | A stocked public facility substitutes for an out-of-pocket purchase | OOPE 43.4% of total health expenditure [S10] |
| Patients in the 112 aspirational districts | SwasthyaGrid's own entry sequencing concentrates coverage here first, and health is already 30% of how these districts are scored | 112 districts; health/nutrition 30% weight [S19][S20] |
| Snakebite patients in the eight worst-affected states | Antivenom is a tracer medicine with no substitute and a narrow treatment window | 58,000 deaths a year, 70% in 8 states [S06] |
| District health officers and medical officers | A visible district picture replaces the phone-calling described in section 5 of this document with a ranked, pre-computed proposal | Plan section 4 (what exists and what is planned) [S31] |
| Pharmacists and warehouse staff | Near-expiry stock is flagged before it becomes a forced write-off, reducing the share of their job that is disposal paperwork | Section 11.3 above [S81][S16][S17] |

The honesty rule that governs every claim in this document applies with particular force here: SwasthyaGrid has run no patient interviews, no household surveys and no measurement of avoided out-of-pocket spending. The people case above is a reasoned mechanism (visible stock reduces stock-outs reduces substitution spending), supported by independently sourced facts about the scale of each piece, not a measured outcome. Section 8 of appendix E sets out the interview plan that would begin to test it, and states plainly that none of it has been run.

### 11.5 Institutional durability: the licence rides a budget line, a constitutional boundary and a law already written

A social-impact pitch that depends on a donor grant or a one-time hackathon prize is not a durable business; the question a sustainability section has to answer honestly is what makes the revenue keep arriving after the first year. SwasthyaGrid's answer has four parts, and each rests on an institution that already exists rather than one the team would have to build.

First, the budget line. The National Health Mission's allocation has risen every year for which recent data exists: ₹28,859 Cr in 2022-23, ₹29,085 Cr in 2023-24, a ₹36,000 Cr budget estimate for 2024-25 [S82], and ₹37,227 Cr in 2025-26, 37% of the health ministry's total ₹99,859 Cr budget [S18]. A ₹12 L district licence is 0.25% of an average district's central NHM allocation of ₹47.73 Cr (₹37,227 Cr divided across 780 districts) [S18][M], small enough to sit inside existing digital-health or programme-support budget lines without requiring a new line item, and the line itself has not shrunk in any of the four years for which this document has data.

Second, the constitutional boundary. Health and hospitals sit in the State List under Entry 6 of the Seventh Schedule to the Constitution of India [S13], which is precisely why a single national supply database (the obvious answer this deck argues against in section 2) keeps stalling: no central authority can mandate it on a state that does not want it. SwasthyaGrid's model sells to one state health department for one district's use of its own data, which fits inside the constitutional boundary rather than fighting it; each state remains the owner and controller of its own district's data, both legally and in the product's own design.

Third, the data protection boundary. SwasthyaGrid's scope is deliberately narrow: stock, bed and roster data at the facility level, never a patient-identifiable record. The Digital Personal Data Protection Act, 2023 [S14] governs personal data; because no patient data is in scope, SwasthyaGrid's compliance burden is a fraction of what a patient-record system would carry, and a human officer's approval sits on every proposed transfer regardless.

Fourth, the financing-model lesson from the one precedent system that has already been through this exact transition. The eVIN vaccine cold-chain system was built with Gavi funding of USD 67 million between January 2014 and December 2022, routed through UNDP [S83]. Gavi's own 2023 programme audit of India found no comprehensive plan to transition all Gavi-funded eVIN costs, at both national and sub-national level, onto government budgets [S83], a donor-dependency risk the audit itself flags rather than one this document infers. UNDP's own account of the same programme states that built-in state-government ownership and continuous feedback from health officials helped transition the running cost of eVIN onto government budgets, specifically the National Health Mission, after donor funding ended [S84]. SwasthyaGrid draws the opposite-order lesson from this precedent: rather than build on donor funding first and attempt a government handover later (the sequence eVIN's own audit flags as incomplete), SwasthyaGrid charges a state health department from its very first district, so there is no donor-to-government transition to manage because no donor financing exists in the model at all.

A fifth, supporting fact completes the institutional picture without being load-bearing on its own: the Government e-Marketplace (GeM) is the standing central and state government procurement channel through which software and other recurring services are bought and renewed without a fresh one-off tender each cycle [S85]. This is cited only to establish that an institutional channel for a state to buy and renew a software licence already exists; it is not a claim that SwasthyaGrid is listed on GeM today. Table 11.8 draws all four institutional supports together against the risk each one answers.

**Table 11.8: Institutional durability, four supports and the risk each answers**

| Support | What it is | Risk it answers |
|---|---|---|
| NHM budget line, rising every year on record [S18][S82] | A standing, growing central health budget that already funds digital-health and programme-support spending | "The money runs out when the grant does" |
| Health as a State subject [S13] | A constitutional boundary that keeps data ownership and purchase decisions at state level | "A national mandate could override or duplicate this" |
| DPDP Act, 2023, no patient data in scope [S14] | A narrow data footprint and a human-approval design that sits below the compliance bar a patient-record system would face | "A data-protection ruling forces a redesign" |
| No donor financing in the model, charged from district one [S83][S84] | A revenue model that never depended on a donor-to-government transition in the first place | The exact transition gap Gavi's own audit found in eVIN [S83] |

Each of the four supports in Table 11.8 answers a named worry rather than asserting durability in general terms, which is the same discipline the risk table in section 11.7 applies in the opposite direction.

### 11.6 People, Planet and Profit, read together

Sections 11.1 to 11.5 each argue one leg of the sustainability case on its own terms, with its own tables and its own tags. Table 11.10 pulls the headline result from each leg onto a single page, so a reader who has only time for one table can still see the whole argument, with a pointer back to the full working behind each figure.

**Table 11.10: The three legs and institutional durability, one row per result**

| Leg | Headline result | Full working |
|---|---|---|
| Profit | 71% gross margin, 5.6-month CAC payback, 10.65x LTV:CAC, base case [A08][A09][M] | Section 11.1, Tables 11.1 to 11.4 |
| Customer payback | A district breaks even on its ₹12 L licence by redeploying 6.1% (Telangana) to 12.5% (Odisha) of its own annual expiry write-off [S16][S17][M][A14] | Section 11.2, Table 11.5 |
| Planet | Sits inside a sector that is 4.4% of global net emissions, 71% of it supply chain [S22]; displaces waste without claiming an unmeasured emissions figure | Section 11.3, Table 11.6 |
| People | Works against a 43.4% out-of-pocket share [S10], entered first through 112 districts where health already carries 30% of the composite score [S19][S20] | Section 11.4, Table 11.7 |
| Institutional durability | Rides an NHM budget line that has grown every year on record [S18][S82], inside a constitutional boundary that keeps data at state level [S13], with no donor-financing transition risk [S83][S84] | Section 11.5, Table 11.8 |

No single leg of this table is sufficient on its own to justify the pitch; a strong margin on a business nobody can durably fund would not survive, and a durable institutional fit on a business that loses money would not either. The case for sustainability is that all five rows hold at once, on the same ₹12 L licence, for the same district.

### 11.7 Sustainability risks: six conditions that would break this case, and the signal that would show it

No sustainability case is complete without naming, before a judge does, the specific ways it could fail. Table 11.9 lists six risks, each paired with the earliest observable signal that would show the risk is materialising, so the risks are falsifiable rather than rhetorical.

**Table 11.9: Sustainability risks and early signals**

| Risk | What would go wrong | Early signal |
|---|---|---|
| Data-sharing refusal | A state agrees in principle but will not sign a data-sharing MoU for its nightly stock export | No MoU signed by week two of a pilot engagement (plan section 11.14, assumption A16) |
| Adoption stalls | Officers see proposed transfers but decline to approve most of them | Approval rate below 50% of proposed transfers during a shadow-mode trial period |
| Budget line reversal | NHM or state digital-health allocation shrinks instead of growing | A year-on-year fall in the NHM allocation, which has not happened in any of the four years recorded here [S18][S82] |
| Expiry pattern does not generalise | Telangana and Odisha's audited expiry share (6.1% to 12.5%) overstates what a new state actually wastes | A pilot state's own facility audit shows an expiry write-off share below the lower end of that range [S16][S17][M] |
| Donor dependency creeps back in | A state or partner proposes routing payment through grant or donor funds rather than its own NHM-tagged budget line | Any proposed payment structure that resembles the unresolved Gavi-to-government transition gap found in eVIN [S83][S84] |
| Disposal regulation tightens | New facility-level disposal reporting requirements raise the operating cost assumed in the margin model | CDSCO or a state issues a new reporting rule for expired-stock returns beyond the existing Bio-Medical Waste Management Rules, 2016 [S81] |

Three of these six risks (adoption stalls, data-sharing refusal, expiry pattern non-generalisation) are directly testable inside the first six weeks of a pilot engagement, which is itself a sustainability argument: a business that can tell within six weeks whether its core mechanism is working in a new district carries much less downside than one that only finds out at renewal time a year later.

---

## 12. Business model canvas: one buyer, one budget line, one ₹12 L licence

**Answer.** SwasthyaGrid's business model has one buyer type (a state health department), one budget line it rides (the NHM-tagged digital-health allocation), and one priced product (a ₹12 L a year district licence, built from a ₹4 L base, a ₹7.0 L facility tier and a ₹1 L support retainer) [A05][M]. Table 12.1 lays out all nine blocks of the business model canvas with SwasthyaGrid's specific content in each, and Table 12.2 separates revenue streams from cost drivers with the assumption tag standing behind every figure, so a reader can see at a glance which numbers are fixed by a named source and which are the team's own estimate.

### 12.1 The nine blocks

**Table 12.1: Business model canvas**

| Block | SwasthyaGrid's content |
|---|---|
| Customer segments | State health departments, entered first through the 112 NITI Aayog aspirational districts [S19] and a Rajasthan beachhead of 41 districts [S24], then the remaining aspirational and general districts across about 780 districts nationally [S23] |
| Value propositions | A single morning view of every facility's stock, beds and roster across a district; a ranked transfer proposal sized to the nearest surplus; a named officer's sign-off before anything moves; no new hardware or purchase line required [S31] |
| Channels | Direct engagement with the State NHM mission director and the District Collector as the signing and championing authorities; data exchange through the state's existing e-Aushadhi or HMIS nightly export, not a new data feed [S15][S35] |
| Customer relationships | A named support retainer per district (one support contact, phone and email, no on-site staff) [A05]; renewal tied to the state's own multi-year government software contracting cycle [A10] |
| Revenue streams | Annual district licence (₹12 L) [A05][M]; one-time onboarding fee on every newly licensed district (₹3 L) [A11][M] |
| Key resources | The district-level visibility and transfer-ranking logic validated on simulated data for 40 facilities across five Rajasthan districts [S31]; the relationships with State NHM mission directors and District Collectors that a sales cycle builds over time |
| Key activities | Reading nightly stock, bed and roster exports; computing days-of-cover and ranking transfer proposals; routing proposals to a named officer for approval; confirming delivery at the receiving facility [S31] |
| Key partnerships | State health departments as the direct buyer and data partner; no vendor, cloud or model partnership named on any public-facing slide, consistent with the technology-near-zero framing of this pitch (plan section 1.2, decision D3) |
| Cost structure | Customer acquisition cost of ₹4 L per district, mostly a state-level sales cycle [A09]; a support retainer cost implicit in the 29% (base case) cost share against the 71% gross margin [A08]; onboarding delivery cost against the ₹3 L onboarding fee [A11] |

All nine blocks in Table 12.1 resolve to the same one buyer and one priced product named in this section's opening paragraph, which is itself the finding: a simple business model is being argued, not assumed.

### 12.2 Revenue streams and cost drivers, tagged

Table 12.2 restates the revenue and cost side of the canvas as a single ledger, so every rupee figure anywhere in this document traces back to the same small set of tagged inputs.

**Table 12.2: Revenue streams and cost drivers**

| Line | Value | Assumption tag | What it depends on |
|---|---|---|---|
| Annual district licence (ACV) | ₹12.0 L | A05 | ₹4 L base + ₹7.0 L facility tier (50 × ₹14,000) + ₹1 L support [M] |
| Facility price component | ₹14,000 per facility a year | A07 | Deck B's own pricing, inside the ₹3 L to ₹25 L Indian HMIS/EHR price band [S25] |
| One-time onboarding fee | ₹3 L per new district | A11 | Team estimate; chosen to reproduce deck B's own Year 1 and Year 2 billings exactly |
| Customer acquisition cost | ₹4 L per district | A09 | Team estimate for a state-level government sales cycle |
| Gross margin | 71% (base), 62% (bear), 76% (bull) | A08 | Indian SaaS benchmark reporting, not SwasthyaGrid's own billing history [S26] |
| District licence life | 5 years | A10 | Team estimate; government software contracts typically renew in multi-year cycles |
| Districts licensed by Year 3 | 50 (bear), 80 (base), 105 (bull) | A12 | Deck B's own district path, carried forward unchanged |

Two cost lines on this ledger are explicitly labelled team estimates rather than sourced benchmarks (A09, A11), because no comparable Indian district-level government software deal is publicly priced in enough detail to source them independently; this is stated here rather than left implicit, consistent with this document's rule that an assumption is never dressed up as a fact. The pricing component that is sourced (A07, inside the A17 band) [S25] and the margin benchmark (A08) [S26] are the two figures in this table that a buyer or a judge could independently check against the cited pages, and the self-check in section 0 of this document records both as directionally, not word-for-word, confirmed.

### 12.3 Why one buyer, one price, and no second revenue line

A canvas this narrow is a deliberate choice, not an unfinished one, and it is worth naming the alternatives considered and set aside rather than letting a judge assume they were never raised. Table 12.3 lists three revenue lines a comparable product could plausibly add, and the specific reason each was rejected for this pitch.

**Table 12.3: Alternative revenue lines considered and rejected**

| Alternative considered | Why it was rejected |
|---|---|
| Transaction fee on each transfer approved | Would create a perverse incentive to approve more transfers regardless of need, working against the human-approval guardrail that keeps the officer's judgement, not the vendor's revenue, in control of what moves [S31] |
| Data monetisation (selling aggregated stock or demand patterns to a third party) | SwasthyaGrid's guardrail is that state data stays with the state [S14]; a data-resale line would directly contradict that guardrail and would also require a patient-data compliance posture the product deliberately avoids |
| Per-seat or per-user licence (charging by number of officer logins rather than by district) | Would penalise exactly the behaviour the product wants to encourage, more officers checking the morning view rather than fewer, and complicates a single state buyer's procurement decision with a variable the buyer cannot forecast in advance |

Each rejected line would have added revenue on paper but at the cost of one of the four institutional supports in Table 11.8 (the data-protection boundary) or the product's own core guardrail (human approval, not automated action). A single annual district licence, flat regardless of how many officers log in or how many transfers get approved in a given month, is the only structure in this comparison that keeps the buyer's procurement decision simple, keeps the product's guardrails intact, and keeps the revenue line fully inside the NHM-tagged budget pattern described in section 11.5 of this document.

This narrowness is itself a sustainability argument, not a limitation to apologise for. A state procurement officer evaluating a new digital-health vendor has to clear fewer objections when the pricing is a single flat number per district per year than when it carries usage-based variables, a data-sharing clause beyond the nightly stock export already in place, or a seat count that changes the bill mid-year. The business model canvas in Table 12.1 and the revenue ledger in Table 12.2 are both, in effect, a case for why the simplest version of this business is also the most fundable one inside a state government's own procurement rules.

### 12.4 How the canvas changes as the buyer moves from pilot to scale

The nine blocks in Table 12.1 describe SwasthyaGrid at any point in its life, but three of them are worded for the state buying stage and are worth restating for the two earlier and later stages the roadmap in section 15 of this document works through in full. At the pilot stage (the first 12 districts in every scenario in Table 11.3), the channel block narrows further: the District Collector, who already carries 30% of the aspirational-district score on health and nutrition [S20], is frequently also the first point of contact rather than a mid-point in a longer sales cycle, because a pilot district's own leadership has a direct, personal incentive to show an early result. At scale (80 districts by Year 3, base case), the channel shifts toward the State NHM mission director as the primary relationship, because a state buying its fortieth or fiftieth district licence is renewing and expanding an existing procurement relationship rather than approving a new one, and the customer acquisition cost of ₹4 L per district [A09] is itself an assumption that should fall, not hold constant, once a state has already approved one district and is adding a second; this document does not build that falling-CAC effect into the model, because no evidence yet exists for how much it would fall, and overstating it would be the same kind of invented precision this document's honesty rules forbid elsewhere.

The cost structure block is the other one that moves. In the pilot stage, the ₹4 L CAC line in Table 12.2 is close to its full value because the sales cycle has to establish the product category itself, not just the vendor, to a buyer who has not seen anything like it before. At scale, the same conversation inside a state that already runs SwasthyaGrid in several districts is closer to a renewal and an expansion request than a new sale, which is the mechanism behind the margin widening from 62% in the bear case to 76% in the bull case shown in Table 11.3; the bull case is, in effect, the scenario in which this falling-CAC, falling-marginal-cost pattern plays out fastest.

A canvas built this way is deliberately conservative about what it assumes improves with scale. The licence price itself does not fall with volume (every district pays the same ₹12 L regardless of whether it is the state's first or fiftieth), because a state-level buyer values predictability in its own budget line over a volume discount it would have to renegotiate annually, and because the per-district cost SwasthyaGrid carries to support a district (the ₹1 L support retainer in Table 11.1) does not meaningfully fall with the number of other districts in the same state. What does fall is the cost of winning the next district, not the cost of serving one, and the model's three scenarios already capture that difference through the margin spread rather than through a separate pricing curve.
