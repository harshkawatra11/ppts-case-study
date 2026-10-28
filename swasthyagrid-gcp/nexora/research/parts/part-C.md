## 8. The solution: one morning view, a ranked transfer and a named officer's sign-off

**Answer.** SwasthyaGrid gives a district a single morning view of every facility's medicine stock, bed occupancy and staff roster, flags any item that is about to run out, ranks the nearest facility holding surplus of that item, and proposes a transfer sized to cover the gap; a named officer approves, edits or rejects the proposal before anything moves, and the receiving facility confirms delivery before the record updates again [S31]. Nothing in this section describes software, a vendor or an engineering choice: it describes a behaviour, a five-step loop that is run once a day on data a district already produces. A prototype demonstrates the loop on simulated data for 40 facilities across 5 Rajasthan districts, including one run at a facility called PHC Kota-4 that moved antiretroviral cover from 1.2 days to 21.0 days in a single approved transfer [S31]; no live district, no customer and no interview exists yet, and this section states that limit at every point where a reader could otherwise mistake a demonstration for a deployment.

### 8.1 The five-step loop

SwasthyaGrid's mechanism is a repeating daily loop, not a one-time dashboard. Table 8.1 sets out each step, who acts at that step, what that person or facility sees, and what gets recorded as a result, so the loop can be read start to finish without reference to any other section.

| Step | Who acts | What they see | What is recorded |
|---|---|---|---|
| 1. See | The district officer, once each morning | A single view of every facility's medicine stock by item, bed occupancy by facility, and staff roster by facility, assembled from the data the district already produces [S31] | Nothing new; this step only displays what facilities already reported |
| 2. Flag | No person; the system itself | Any item whose days of cover (units in stock divided by average daily use) falls under 3 days, or under 5 days for a named emergency drug, is marked for attention [S31] | A flagged-item list, dated and facility-tagged |
| 3. Propose | No person; the system itself | For each flagged item, the system proposes the nearest facility in the district holding surplus of that item, and sizes a transfer, or a refill from district buffer, intended to bring the receiving facility back up to 21 days of cover [S31] | A ranked proposal, one line per flagged item, with the sending facility, receiving facility and quantity named |
| 4. Approve | A named district officer | Every pending proposal, one at a time, with the facility names, the quantity and the days-of-cover numbers behind it | The officer's decision: approved, edited (a different quantity or route) or rejected, with the officer's name and the time of the decision |
| 5. Confirm | The receiving facility's staff | The quantity that actually arrived, checked against the approved proposal | A single, final stock update at the receiving facility once delivery is confirmed; stock is never updated twice for the same movement |

*Table 8.1's step 4 is the design's hinge: every proposal reaches a named person before it changes anything, and the record of that person's decision is permanent. Step 5 closes the loop by tying the paper trail to a physical confirmation rather than to the proposal alone, so a transfer that is approved but never actually delivered does not silently appear as completed in the record.*

### 8.2 The rules behind the flag and the proposal, in plain words

Section 8.1's steps 2 and 3 are governed by a small set of fixed thresholds, not by a model the officer cannot inspect. Table 8.2 states each rule in the words an officer would use, with the source for each number.

| Rule | What it means in practice | Tag |
|---|---|---|
| Days of cover | Units currently in stock, divided by the average number of units used per day at that facility over a recent period | [S31] |
| Critical threshold, ordinary items | Any item with fewer than 3 days of cover is flagged | [S31] |
| Critical threshold, named emergency drugs | For a named list of emergency drugs (for example, antirabies and antivenom serum), the threshold is widened to 5 days of cover, because a shortfall in these items has a faster and more severe consequence than a shortfall in a routine medicine | [S31] |
| Refill target | A proposed refill or transfer is sized to bring the receiving facility up to 21 days of cover, not simply to clear the immediate flag | [S31] |
| Transfer radius | A lateral transfer between facilities is only proposed within 40 kilometres, so that the time and cost of moving physical stock does not exceed the value of closing the gap | [S31] |
| Bed redirect threshold | A bed-occupancy flag is raised once a facility crosses 90% occupancy, proposing redirection of the next incoming case to a facility under that threshold | [S31] |

*Every threshold in Table 8.2 is fixed and visible to the approving officer at the moment of decision; none of them is described to the officer as a model score or a probability, consistent with the honesty rule that a reader, and an officer, should be able to see exactly why a proposal was made.*

### 8.3 The four move types

Not every flagged shortage has an answer inside the district on a given day, and the design is built to say so rather than to force a move. Table 8.3 sets out the four outcomes a flagged item can reach.

| Move type | What happens | When it is used |
|---|---|---|
| Refill from district buffer | The district's own reserve stock, where one exists, tops up the facility to 21 days of cover | The district holds surplus of the flagged item centrally |
| Lateral transfer | Stock moves from one facility with surplus to one facility with a shortfall, within the 40 km radius [S31] | No central buffer exists, but a nearby facility holds enough surplus of the same item |
| Bed redirect | An incoming case is routed to a facility under 90% occupancy rather than the nearest full facility | The flag is a bed-occupancy flag, not a stock flag |
| Escalation, no internal move available | The item stays flagged and is marked for procurement attention rather than transfer | No facility in the district holds surplus of the flagged item; the shortage is a district-wide shortage, not a misallocation |

*Table 8.3's fourth row is the honest edge of the mechanism: SwasthyaGrid moves what a district already owns, and it says plainly when a district owns nothing to move, rather than manufacturing a proposal where none is justified. Section 2 of this document states the same point at the level of the whole thesis: move first, buy only for what remains.*

### 8.4 A district officer's first twenty minutes, read as a workflow

The value of the five-step loop is easiest to see as a single morning's use, described here as a workflow analysis rather than a narrative scene. A district health officer opens the morning view and sees, in one place, every facility's flagged items from step 2, already ranked by how severe the shortfall is and how close a proposed fix sits. For each flagged item the officer sees three things side by side: the facility and quantity short, the facility and quantity proposed to cover it, and the distance the proposed transfer would travel. The officer's work is reduced to a single decision per flagged item: approve the proposal as shown, change the quantity or source facility, or reject it and leave the item for a procurement conversation instead. Before SwasthyaGrid's prototype, the same twenty minutes would be spent, at best, telephoning two or three facilities to ask what they currently hold, a process that does not scale past a handful of calls and that produces no permanent record of who was asked, what they said, or what was decided. The twenty-minute figure is a description of the number of decisions involved, not a measured time-and-motion result, and this document does not claim it as a measured saving anywhere in the sections that follow.

### 8.5 The PHC Kota-4 run, step by step

The single concrete example behind this section's claims is a prototype run at a facility named PHC Kota-4, inside the simulated-data environment covering 40 facilities in 5 Rajasthan districts [S31]. Table 8.4 walks the run through the five-step loop exactly as Table 8.1 defines it, so the example can be checked step by step rather than taken as a single before-and-after number.

| Step | What happened at PHC Kota-4 (simulated run) |
|---|---|
| 1. See | The morning view showed PHC Kota-4 holding 7 vials of antiretroviral (ARV) medicine, against its recent average daily use, giving 1.2 days of cover [S31] |
| 2. Flag | 1.2 days of cover is well under the 3-day ordinary threshold, so the item was flagged for attention [S31] |
| 3. Propose | The system proposed a transfer of 119 vials, sized to bring PHC Kota-4 to 21 days of cover, sourced from the district drug warehouse (DDW) at Kota, to travel by a refrigerated van given the item's cold-chain requirement [S31] |
| 4. Approve | A named officer approved the proposal as shown, with no edit to quantity or route [S31] |
| 5. Confirm | PHC Kota-4 confirmed receipt of 126 vials (119 transferred plus 7 already on hand), recalculated against the same average daily use to 21.0 days of cover [S31] |

*The run in Table 8.4 is a simulated-data demonstration, not a measured result from a live district; it shows the mechanism operating correctly on a single item at a single facility, nothing more. Section 14 of this document builds the deck's actual impact estimate from a modelled scenario range across all 38,241 PHCs and CHCs [S01][M], never from this one facility's run, which is included here only as the mechanism's worked example.*

### 8.6 What is built today, and what is still planned

A reader evaluating this section's claims needs to know exactly which parts of the five-step loop exist today and which parts are still ahead. Table 8.5 reproduces that distinction in full, matching the product-facts register this entire document is built against.

| Capability | Status | How this document and the deck word it |
|---|---|---|
| District view of stock, beds, staff, diagnostics and footfall across 40 facilities (30 PHCs, 10 CHCs) in 5 Rajasthan districts (Jaipur Rural, Alwar, Bikaner, Udaipur, Kota) | Prototype, on simulated data | "A working prototype runs on simulated data" [S31] |
| The days-of-cover warning rule, with the 3-day and 5-day thresholds | Prototype | "Flags any item under 3 days of cover" [S31] |
| Ranked proposals: refills to 21 days of cover, lateral transfers within 40 km for critical items | Prototype | "Ranks the nearest surplus and sizes the move" [S31] |
| The named-officer approval step: every proposal starts pending, a human approves, edits or rejects | Prototype | "A named officer approves" [S31] |
| Receiving-facility confirmation, with a single stock update | Prototype | "The receiving PHC confirms" [S31] |
| Bed redirect above 90% occupancy | Prototype | "To a facility under 90% full" [S31] |
| The PHC Kota-4 run itself | Prototype run on simulated data | A labelled proof case, not a live result [S31] |
| A live district pilot, a state data-sharing agreement, and real facility logins | **Planned** | "Six weeks from a signed agreement to a live district" [A16] |
| Customer interviews with district and state staff | **Planned; none done** | "None done yet"; Appendix E of this document names who, how many and what would be asked |

*This document, like the deck it supports, never writes "deployed," "live in," "used by," "customers," "pilots running" or "partners" about SwasthyaGrid, because none of those words is true of a prototype running on simulated data for a demonstration set of facilities.*

### 8.7 Why the design rejects a running alert feed, and chooses one ranked proposal instead

A reasonable alternative design would surface every flagged item as a continuous stream of alerts to the officer, the way many clinical software systems do. SwasthyaGrid's design deliberately rejects that pattern, and the reason is a documented failure mode in a closely related field rather than a guess. A peer-reviewed study of clinical decision-support alerting found that, across the literature it reviewed, between 49% and 96% of clinical alerts were overridden by the clinician receiving them, and in the study's own cohort the rate of overriding a repeated alert for the same patient rose to 87.9% once the first instance of that alert had already been overridden once [S63]. The pattern that study documents, alert volume producing habitual dismissal rather than attention, is precisely the failure SwasthyaGrid's step 4 is built to avoid: instead of a running feed, each day's flagged items resolve into one ranked proposal per item, shown once, with a single decision required, so that the officer's attention is spent on a decision rather than on filtering a stream.

### 8.8 Guardrails

Four design choices sit outside the five-step loop itself and apply across every step. Table 8.6 names each one and the reason it is treated as non-negotiable rather than as a configurable option.

| Guardrail | What it means in practice | Why it matters |
|---|---|---|
| Human approval, always | No proposal from step 3 becomes a movement without step 4's named sign-off; there is no automatic-approval mode | A district officer, not the system, carries accountability for every stock movement, consistent with how public health supply decisions are governed today |
| No patient data in scope | SwasthyaGrid's view covers stock, bed occupancy and staff rosters at a facility level; it does not collect, store or display any individually identifiable patient record | Keeps the system outside the scope the Digital Personal Data Protection Act, 2023 governs for personal data [S14], and avoids a consent and security burden the solution does not need to carry to do its job |
| State data stays with the state | The district and state's own stock, bed and roster data is read for the district view; it is not pooled into a cross-state or national dataset | Respects health as a State List subject under the Seventh Schedule of the Constitution [S13], and matches the state-by-state adoption path every existing Indian public health information system in section 7 of this document already follows |
| A permanent audit trail | Every flag, proposal, approval decision and confirmation from Table 8.1 is timestamped and attributed to a named facility or officer | Makes every movement traceable after the fact, which matters for the same reason the CAG's own expired-drug audits in Telangana and Odisha, discussed in section 6, matter: a district's stock history should be checkable, not just actionable |

*Table 8.6's four guardrails are not a feature list; they are the conditions under which the five-step loop in Table 8.1 is allowed to operate at all. A version of this design without any one of them would be a materially different, and less defensible, product.*

### 8.9 Why ambient medicine coordination is a different, and harder, problem than eVIN's

Section 7 of this document already named eVIN as the strongest precedent for the mechanism class SwasthyaGrid proposes, and also named the limit on that precedent: eVIN is a vaccine-specific system, built around a dedicated cold chain [S12][S27]. That distinction matters enough to this section's design choices that it is worth stating in industry terms, not only in this document's own words. Independent industry commentary on India's medicine supply chain states plainly that "a doctor or a patient often has no way of knowing whether a medicine is sitting in a warehouse two states away or genuinely out of stock nationwide," and that most apparent scarcity reflects a coordination failure rather than a true shortage [S65]. The same commentary draws the same distinction this document draws between a temperature-controlled, cold-chain network, which is what eVIN digitises, and the high-volume, ambient-temperature medicine distribution network SwasthyaGrid's prototype addresses [S65]. Table 8.7 sets the two kinds of coordination problem side by side, because the difference is a design constraint, not a footnote.

| Dimension | Cold-chain vaccine distribution (eVIN's domain) | Ambient-temperature medicine distribution (SwasthyaGrid's domain) |
|---|---|---|
| Product count in scope | A small, standardised set of named vaccines | A far larger and more heterogeneous catalogue; SwasthyaGrid's prototype tracks 7 tracer items as a starting set, not the full catalogue [S31] |
| Storage requirement | Continuous, monitored refrigeration at every cold-chain point [S12] | Ordinary shelf storage at most facilities, with no temperature monitoring built into the existing data a district already produces |
| Transfer urgency | High, and visible: a temperature excursion itself is a monitored, alarmed event | Lower and less visible: a shelf running low produces no alarm of its own, which is the specific coordination gap section 8.1's step 2 is built to close |
| Shelf-life pattern | Narrow and closely tracked by the cold-chain system itself | Wide and heterogeneous; the Telangana CAG finding of ₹17.13 Cr in drugs issued with only 1 to 89 days of shelf life left shows how unevenly shelf life is tracked today [S16] |

*Table 8.7 is the reason this section treats eVIN as a precedent for the mechanism, never as a precedent for the result: the two domains share the goal of visibility-driven coordination, but ambient medicine distribution carries a larger product catalogue, a less monitored storage condition, and a quieter failure signal than a cold-chain excursion, each of which is a reason the design in sections 8.1 and 8.2 leans on a daily, fixed-threshold check rather than on a continuous alarm.*

### 8.10 What this section establishes, and what it does not

This section has described a behaviour: a daily loop that sees, flags, proposes, requires approval and confirms, running on data a district already produces, demonstrated once on simulated data at one facility. It has not established that the loop performs this way at scale, across a live district's real data, under the operational pressure of an actual working day; section 13 treats that gap directly as a feasibility question, and section 14 treats it as a modelling question, never substituting the Kota-4 demonstration for either. Section 9 now turns to who would buy this behaviour, at what price, and why now.

---

## 9. Target market: about 780 districts and a ₹93.6 Cr licence pool, entered through 112 aspirational districts

**Answer.** State health departments are the buyer for SwasthyaGrid, purchasing one annual licence per district; across about 780 districts nationally [S23][A04] at a ₹12 lakh (L) annual licence [A05], that is a ₹93.6 Cr-a-year total addressable market [M]. SwasthyaGrid's serviceable segment is the 112 NITI Aayog aspirational districts, where health and nutrition already carries 30% weight in a district's own composite score and a District Collector is already accountable for moving it [S19][S20], worth ₹13.44 Cr a year [M]; the obtainable segment by the end of year 3, on the base case path, is 80 districts at ₹9.6 Cr a year [M], entered through a Rajasthan beachhead of 41 districts worth ₹4.92 Cr [S24][M], matching the five Rajasthan districts the prototype already runs on [S31]. A top-down check against the Union National Health Mission's own 2025-26 allocation of ₹37,227 Cr shows the licence costs the average district 0.25% of its ₹47.73 Cr central NHM allocation [S18][M], a cross-check this section treats as a sanity bound, not as an independent sizing method.

### 9.1 Segmentation, targeting and positioning

Table 9.1 sets out SwasthyaGrid's STP (segmentation, targeting, positioning) in one place before the sizing arithmetic that follows builds on it.

| Element | SwasthyaGrid's answer |
|---|---|
| Segmentation | India's roughly 780 districts [S23], segmented by whether the district already carries a central accountability structure for a composite performance score (the 112 aspirational districts [S19]), and by whether the state already produces a facility-level stock export (e-Aushadhi or an equivalent HMIS feed [S15][S35]) |
| Targeting | Aspirational districts first, because they already have a named accountable actor (the District Collector) and an existing scoring mechanism that rewards exactly the kind of improvement SwasthyaGrid produces [S19][S20]; a Rajasthan beachhead within that segment, because the prototype already runs on Rajasthan's own facility data [S31] |
| Positioning | Not a new system to learn, but a layer that reads a district's existing stock, bed and staff data and proposes what to do with it; positioned against "buy more" (procurement) and "hire more" (staffing), not against any existing information system, consistent with section 7's finding that no existing system does this specific job |

*Table 9.1's positioning row is the market-facing version of the contrarian thesis this document opens with in section 2: the pitch is not "we see what you cannot," it is "we move what you already have."*

### 9.2 The buying centre

A state-government sale moves through more than one named role, and SwasthyaGrid's design in section 8 is built to give each of those roles a specific, different thing to look at. Table 9.2 maps the buying centre.

| Role | Named actor | What they need from SwasthyaGrid |
|---|---|---|
| Signs | The State NHM Mission Director | A licence agreement priced within an existing NHM budget line, at a cost that is a small, defensible fraction of the district's own central allocation (Table 9.6 below) |
| Champions | The District Collector | A visible, attributable improvement to the district's own composite performance score, in which health and nutrition already carries 30% weight under the aspirational-district framework [S20] |
| Uses | The District Health Officer (DHO) | The daily morning view and the approval step described in section 8, requiring no new hardware and reading from data the district already produces [S31][A16] |
| Reports into the system | The facility pharmacist and medical officer | A single, low-friction confirmation step (section 8's step 5) added to a reporting routine they already run |
| Benefits | Patients at the facility level | Medicine, beds and staff available when needed, the outcome every number in sections 4 through 8 of this document is ultimately in service of |

*Table 9.2's second row, the champion, is the commercial reason the aspirational-district segment is targeted first in Table 9.1: the District Collector already has a personal, scored incentive to want the outcome SwasthyaGrid produces, before a single sales conversation happens.*

The five rows of Table 9.2 also set the order a sales motion has to follow, which matters because treating them out of order is a common failure mode in a government sale. A conversation that opens with the District Health Officer, the role that actually uses the product daily, before the State NHM Mission Director has agreed the budget line exists, risks building enthusiasm at a level of the buying centre that cannot itself authorise payment. Conversely, a conversation that opens only with the state level, without first having a specific district's Collector already asking for the tool, gives the Mission Director no concrete, locally championed case to point to when approving a new licence line. The sales motion this document assumes, consistent with the beachhead logic in section 9.6, is to secure a Collector's interest in a specific aspirational district first, using that interest to bring the conversation to the state level with a named champion already attached, rather than approaching the state level cold.

### 9.3 The ideal customer profile

Table 9.3 names the specific, checkable attributes a first customer district should have, distinct from the broader segmentation in Table 9.1.

| Attribute | What it looks like | Why it matters |
|---|---|---|
| Aspirational-district status | One of the 112 districts on NITI Aayog's own list [S19] | A named, incentivised champion (Table 9.2) already exists |
| An existing digital stock export | A live e-Aushadhi/DVDMS feed, or an equivalent HMIS export, that SwasthyaGrid can read without new hardware [S15][S35][A16] | Matches the six-week, no-new-hardware rollout claim examined in full in section 13 |
| A state willing to sign a data-sharing agreement | A state health department that has already run some form of digital reporting pilot, lowering the political cost of a new agreement | Reduces the single largest feasibility risk named in section 13's risk register |
| Geographic match to the prototype | A Rajasthan district, ideally one of the five the prototype already models (Jaipur Rural, Alwar, Bikaner, Udaipur, Kota) [S31] | The prototype's own facility data and the Kota-4 run (section 8.5) transfer directly, with no new data-modelling work |

*An aspirational district inside Rajasthan, matching every row of Table 9.3 at once, is the single strongest first-customer profile available, and it is the basis for the beachhead argument in section 9.6 below.*

Table 9.3's four attributes are deliberately written as checkable facts about a district, not as a soft description of a good cultural fit, because a state-level sale depends on a specific official being able to confirm each one before a conversation about price even begins. A state health department evaluating a new vendor relationship for the first time, with no existing digital-reporting history, faces an internal approval burden a state that has already run one or more digital pilots does not face to the same degree; this is why the third row of Table 9.3 is phrased around an existing pilot specifically, rather than around general technological capacity. The fourth row, geographic match to the prototype, is the single attribute unique to SwasthyaGrid at this early stage rather than transferable to any future customer: once a pilot runs in a non-Rajasthan district, this specific profile attribute stops mattering for that later district, which is consistent with Table 9.3 being read as a profile for the first customer, not as a permanent requirement for every customer that follows.

### 9.4 Bottom-up sizing, every step shown

Table 9.4 reproduces the NEXORA model's market-sizing block exactly as the model itself produces it [M], so every multiplication in this document's TAM, SAM, SOM and beachhead figures can be checked line by line.

| Segment | Districts | Annual licence | Annual value |
|---|---|---|---|
| TAM, all districts | 780 [S23][A04] | ₹12.0 L [A05] | ₹93.60 Cr a year [M] |
| SAM, aspirational districts | 112 [S19] | ₹12.0 L [A05] | ₹13.44 Cr a year [M] |
| SOM, year 3, base case | 80 [M] | ₹12.0 L [A05] | ₹9.60 Cr a year [M] |
| Beachhead, Rajasthan | 41 [S24] | ₹12.0 L [A05] | ₹4.92 Cr a year [M] |

*The ₹12.0 L annual licence behind every row of Table 9.4 is itself built from three components: a ₹4 L base, a per-facility tier of ₹14,000 across an assumed 50 facilities per district (₹7.0 L), and ₹1 L of support, for a district averaging 49.0 facilities in practice (38,241 facilities across 780 districts) [S01][S23][M]. SOM's 80-district year-3 figure is 10.3% of the 780-district TAM [M], a share this document treats as what the model derives from the revenue path in section 11, not as an independently sized target.*

### 9.5 Bottom-up sizing checked against a top-down figure

A bottom-up number built entirely from the firm's own assumed pricing can look circular unless it is checked against an outside figure the firm does not control. Table 9.5 runs that check against the Union government's own published health budget.

| Step | Figure | Tag |
|---|---|---|
| Union NHM allocation, 2025-26 | ₹37,227 Cr (37% of the Health and Family Welfare Ministry's ₹99,859 Cr budget) | [S18] |
| Divided across 780 districts | ₹47.73 Cr of central NHM allocation per district, on average | [S18][M] |
| SwasthyaGrid's ₹12 L annual licence, as a share of that per-district allocation | 0.25% | [A05][S18][M] |

*A licence costing a quarter of one percent of the central health allocation a district already receives each year is a small enough figure that it does not need the state to find a new budget line; it needs the state to redirect an existing one. This cross-check is a sanity bound on the bottom-up sizing in Table 9.4, not a second, independent method of sizing the market: both figures ultimately rest on the same ₹12 L licence assumption, so Table 9.5 confirms the licence is affordable at the stated price, it does not independently confirm the price itself.*

### 9.5a How sensitive the sizing is to its own inputs

Every figure in Table 9.4 depends on three inputs this document has treated as fixed: the district count, the annual licence price, and the number of facilities a district licence covers. None of the three is certain, so Table 9.5a reports how far the year-3 ARR (annual recurring revenue) figure moves if each input is varied on its own, holding the others at the base case, using the NEXORA model's own sensitivity block [M].

| Input varied | Low end | Base case | High end | Resulting year-3 ARR range |
|---|---|---|---|---|
| Districts licensed by year 3 | 50 | 80 | 105 | ₹6.00 Cr to ₹12.60 Cr [M] |
| Annual licence price (ACV) | ₹9 L | ₹12.0 L | ₹15 L | ₹7.20 Cr to ₹12.00 Cr [M] |
| Facilities per district (feeding the ACV build) | 35 (ACV ₹9.9 L) | 49.0 (ACV ₹12.0 L) | 65 (ACV ₹14.1 L) | ₹7.92 Cr to ₹11.28 Cr [M] |

*Table 9.5a shows that the district-count input moves the year-3 figure the furthest of the three, from ₹6.00 Cr to ₹12.60 Cr, which is the reason section 13's feasibility analysis and section 15's roadmap both treat the pace of district signing, not the price itself, as the single most consequential unknown in the revenue path. The licence price and the facility-count input each move the result by a narrower band, because both are already bounded by the external pricing evidence in Table 9.7 below, rather than left open-ended.*

### 9.6 Why Rajasthan, and why now

Table 9.6 sets out the beachhead logic and the market-timing argument together, because both rest on the same underlying facts.

| Factor | Evidence | Tag |
|---|---|---|
| Rajasthan's size | 41 districts, after the state's 2024 decision to scrap 12 newly created districts and 3 divisions | [S24] |
| Rajasthan's aspirational-district count | 5 of Rajasthan's 41 districts (Baran, Dholpur, Jaisalmer, Karauli, Sirohi) sit on the national 112-district list | [S19] |
| Prototype geography match | The prototype already models 5 Rajasthan districts (Jaipur Rural, Alwar, Bikaner, Udaipur, Kota) | [S31] |
| A near-universal digital patient identity now exists | 95.99 crore ABHA (Ayushman Bharat Health Account) IDs created as of 31 July 2026 | [S21] |
| The national health budget line SwasthyaGrid rides is large and growing | NHM allocation ₹37,227 Cr in 2025-26, 37% of the ministry's total budget | [S18] |
| An existing digital stock ledger already covers most states | 31 States and Union Territories already monitored through the e-Aushadhi central dashboard | [S15][S35] |

*Table 9.6's last three rows answer "why now" independently of the Rajasthan-specific beachhead argument: a licensable digital identity layer, a growing dedicated health budget line, and an already-widespread stock ledger are each a precondition SwasthyaGrid's own layer depends on, and each became true only in roughly the last several years, not a decade ago.*

The Rajasthan beachhead argument rests on more than convenience. A state-level buyer evaluates a new district-level tool against the cost of a failed pilot, not only against the cost of a successful one, and a state where the prototype's own facility data, roster structure and transfer rules already match the ground reality lowers that failure cost specifically, rather than generally. Choosing a state where the product already works on that state's own simulated geography means the first real pilot tests whether the mechanism holds up against real, not simulated, data, rather than testing the mechanism and the product's basic geography fit at the same time. This is also why the beachhead argument in Table 9.6 is built narrower than "start somewhere easy": it is built as "start where the single largest unknown, does the mechanism transfer from simulated to real data, is isolated from a second unknown, does the mechanism work in an unfamiliar facility network at all."

A further reason the aspirational-district segment specifically, rather than any arbitrary subset of 112 districts nationally, is targeted first is that the segment already carries an external, recurring measurement cadence SwasthyaGrid's own pitch depends on. NITI Aayog has published Delta Rankings for the Aspirational Districts Programme on a regular cycle since the programme's January 2018 launch across 112 districts, ranking districts on incremental, month-on-month change across 81 data points spanning six themes [S64]. That cadence means a District Collector in an aspirational district is already accustomed to being measured on short-interval improvement, not only on an annual review, which is the exact rhythm a daily coordination tool like SwasthyaGrid is built to support. Section 10.6 below returns to the Delta Ranking as a specific example of an existing public measurement system that records and ranks improvement without itself moving any resource between districts, which is the precise gap this document argues SwasthyaGrid fills.

### 9.7 Price positioning against the existing Indian HMIS and EHR market

SwasthyaGrid's ₹12 L licence does not exist in a vacuum; Table 9.7 places it inside the observed Indian pricing range for comparable hospital-management and electronic health record software.

| Price point | What it buys | Tag |
|---|---|---|
| ₹3 L a year, lower band | Entry-level Indian HMIS or EHR software, typically single-facility | [S25][A17] |
| ₹12 L a year | SwasthyaGrid's district licence, covering an average of 49.0 facilities | [A05] |
| ₹25 L a year, upper band | Enterprise-tier Indian EHR deployments | [S25][A17] |

*SwasthyaGrid sits inside the observed Indian market band, not above or below it, which this document treats as evidence the ₹12 L figure is a defensible price rather than an invented one; it is not evidence that any state has agreed to pay it, which section 13's feasibility analysis addresses directly as an unresolved risk.*

### 9.8 A labelled, later option: adjacent expansion beyond health

The aspirational-district structure SwasthyaGrid enters through is not unique to health, and this document names the adjacent possibility explicitly, as a later option rather than as a claim about today's product. The aspirational-geography concept is already being extended below the district level: the Aspirational Blocks Programme, launched 7 January 2023, covers 500 blocks across 27 states and 4 Union Territories, with the World Health Organization specifically supporting 52 blocks across 10 states on seven health indicators including institutional deliveries and antenatal care registration [S60]. The same District Collector who champions SwasthyaGrid's health licence (Table 9.2) is also the accountable actor for a district's nutrition and agriculture budget lines under the same aspirational-district scoring structure [S19][S20], which is the specific adjacency this document flags, not a commitment to build it. Separately, the procurement route a district licence would travel through already exists at scale: the Government e-Marketplace (GeM) serves about 138,000 sellers and 27,000 buyer organisations, processing 730,000 orders worth roughly ₹1,15,000 Cr to date, and has cut a sampled state purchase's delivery time from 30 to 60 days down to 10 to 15 days [S61]. Neither fact changes SwasthyaGrid's product scope today; both are recorded here because section 15's roadmap references the same aspirational-geography logic when it discusses what comes after the first 80 districts, and a reader checking that later claim should find its basis stated plainly here rather than asserted without support.

The Aspirational Blocks Programme matters to this document for a second, more specific reason beyond simply naming a later option. It is direct, recent evidence that the Indian government's own aspirational-geography model, the same model SwasthyaGrid's beachhead strategy in Table 9.6 rides into its first 112 districts, is actively being extended rather than left static: a programme launched in January 2023 at the sub-district, block level, already running in 500 blocks with a named multilateral partner supporting a specific subset on specific health indicators [S60], is evidence that the institutional appetite for this kind of targeted, scored geography is growing, not shrinking, at the exact moment SwasthyaGrid is entering the market. A reader sceptical that a single licensing model can expand meaningfully beyond its first 112 districts should read the Aspirational Blocks Programme's own growth, from a 2018 district-level programme covering 112 units to a 2023 block-level programme covering 500 units within five years, as the single clearest piece of outside evidence that the geography SwasthyaGrid is built around is not a one-time policy experiment but a structure the Indian government keeps choosing to re-apply.

The GeM figures in this section serve a narrower, more mechanical purpose: they describe the channel a district licence agreement would actually travel through once a state decides to buy, not a reason to buy in the first place. A district or state government does not typically negotiate and pay a vendor outside its existing procurement infrastructure, and GeM's own reported improvement, cutting a sampled state purchase's delivery time from a 30-to-60-day range down to 10 to 15 days [S61], is relevant to section 13's six-week rollout claim specifically: if the procurement step itself can complete inside two to three weeks on a platform that already serves 27,000 buyer organisations [S61], the six-week plan's own schedule, which assumes a signed agreement in its first week, is consistent with how a comparable government purchase is reported to move today, rather than resting on an optimistic guess about procurement speed.

Both of this section's two outside data points, the Aspirational Blocks Programme and GeM's own reported processing times, are deliberately treated as corroboration for a claim made elsewhere in this document, not as new, independent sizing inputs. Neither figure feeds the TAM, SAM, SOM or sensitivity arithmetic in Tables 9.4 and 9.5a, and neither figure changes the ₹12 L licence price or the district counts behind it. Their only role in this document is to show that the two structural assumptions the beachhead and rollout arguments depend on, a growing aspirational-geography model and a workable state-level procurement channel, are independently observable facts about how Indian public-sector administration already operates, rather than assumptions this document is asking a reader to accept on faith.

### 9.9 What this section establishes, and what it does not

This section's close deliberately separates two claims a less careful sizing exercise would run together: the claim that the market opportunity is large enough to justify building the product, and the claim that any specific district, state or official has agreed to pay for it. Tables 9.4 through 9.7 establish only the first claim, built bottom-up from a district count and a licence price this document can defend line by line, and checked against the state's own NHM allocation so the price itself is shown to be affordable rather than merely large on paper.

This section has sized a market bottom-up, checked it against a top-down figure that does not depend on the firm's own pricing, and named the specific buying centre and ideal customer profile the beachhead strategy targets. It has not established that any state health department has agreed to pay the stated price, signed a data-sharing agreement, or committed to a pilot; section 13's feasibility analysis and Appendix E's validation plan both treat that gap as open, and this document never states otherwise. Section 10 turns to why, specifically, this layer is the one none of India's existing public health information systems has built.

---

## 10. Innovation: rebalancing before procuring is the layer nobody has built

**Answer.** SwasthyaGrid's contribution is narrow and specific: it is the only layer in India's current public health information architecture that combines a cross-facility, cross-category stock and capacity view with a ranked transfer proposal and a human sign-off, a gap section 7 of this document already showed no existing system fills [S12][S15][S35]. Measured against the ERRC grid (eliminate, reduce, raise, create) [S28], the 7 Powers framework [S29] and a VRIO test, the honest finding is that SwasthyaGrid's advantage today sits almost entirely in process power and a first-mover data position, not yet in a defensible moat; this section names that limitation itself, before a judge raises it, and sets out the three strongest objections to the innovation claim together with the specific answer to each.

### 10.1 The ERRC grid

Table 10.1 applies Kim and Mauborgne's Eliminate-Reduce-Raise-Create grid [S28] to SwasthyaGrid's design against the two most comparable existing approaches: a manual, phone-based coordination routine, and a passive recording ledger such as e-Aushadhi/DVDMS [S15].

| Action | What SwasthyaGrid does |
|---|---|
| Eliminate | The phone call as the only way a district officer learns what a neighbouring facility currently holds |
| Reduce | The number of decisions an officer must make each morning, from one judgement call per facility checked manually to one approval per flagged item, ranked and sized already |
| Raise | The speed from a flagged shortage to a sized, actionable proposal, and the permanence of the record once a decision is made (Table 8.6's audit trail) |
| Create | A transfer proposal that crosses facility boundaries inside a district automatically, something no existing recording or monitoring system in section 7's matrix generates on its own |

*Table 10.1's "create" row is the specific innovation claim this section defends: no existing system in the capability matrix built in section 7 generates a cross-facility transfer proposal; every one of them records or reports, and none of them proposes a move.*

### 10.2 A strategy canvas against the two closest comparisons

Table 10.2 scores SwasthyaGrid against a passive ledger system (e-Aushadhi/DVDMS) and against eVIN, the vaccine-specific precedent this document leans on, across six factors, each scored 1 to 5, with the reason for each score stated so no number stands alone.

| Factor | Ledger system (e-Aushadhi/DVDMS) | eVIN | SwasthyaGrid | Reason |
|---|---|---|---|---|
| Cross-facility visibility | 4 | 4 | 4 | All three give a cross-facility view within their scope; this is a shared capability, not a differentiator [S15][S12][S31] |
| Scope beyond a single product category | 4 | 1 | 4 | The ledger covers all medicines; eVIN is vaccine-only; SwasthyaGrid covers medicines, beds and staff together [S15][S12][S31] |
| Automated transfer proposal | 1 | 1 | 4 | Neither comparison system proposes a specific move between facilities; this is SwasthyaGrid's narrowest and strongest point of difference [S15][S12][S31] |
| Human sign-off workflow | 1 | 2 | 4 | eVIN's cold-chain logistics include some human steps, but neither system is built around a named officer approving a specific proposed transfer [S12][S31] |
| Proven result at scale | 2 | 5 | 1 | eVIN has a measured, reported result (over 80% fewer vaccine stock-outs) across 733 districts [S12]; SwasthyaGrid has one simulated-data run at one facility [S31] |
| Resourcing behind the rollout | 3 | 5 | 1 | eVIN scaled with UNDP, Gavi and Logistimo as named partners [S27]; SwasthyaGrid today is a single-founder prototype with no funding claimed |

*Table 10.2's bottom two rows are the honest counterweight to the top four: SwasthyaGrid scores well on design novelty and scores poorly on proof and resourcing, exactly the two things eVIN scores highest on. The innovation claim in this section rests on the top four rows; the feasibility case in section 13 and the validation plan in Appendix E exist specifically to close the gap in the bottom two.*

### 10.3 The 7 Powers test

Hamilton Helmer's 7 Powers framework asks which of seven sources of sustainable differential returns applies to a business, and when each would start to take effect [S29]. Table 10.3 runs SwasthyaGrid through all seven, naming the evidence that would prove each one rather than asserting it already holds.

| Power | Applies to SwasthyaGrid? | When it would start | Evidence that would prove it |
|---|---|---|---|
| Scale economies | Not yet | After several dozen districts are live, if per-district support cost falls as the customer base grows | A falling support cost per district, tracked district by district |
| Network economies | No | Never, in this design: one district's data does not make another district's view better | Not applicable; flagged here for completeness |
| Counter-positioning | Partially | From the first signed district onward | An incumbent ledger system choosing not to add a transfer-proposal feature, because doing so would require it to accept the approval-workflow and audit-trail commitments Table 8.6 names |
| Switching costs | Not yet | After a district has a full year of audit-trail history built up in the system | A district renewing its licence specifically because starting over elsewhere would mean losing that history |
| Branding | No | Not a relevant power for a government buyer | Not applicable |
| Cornered resource | Partially | Today, narrowly | The simulated-data prototype and the Kota-4 run are a resource no competitor currently has, though they are a demonstration, not a dataset of real operational value yet [S31] |
| Process power | Yes, the strongest candidate today | Already, in the specific design choices in sections 8.1, 8.2 and 8.7 | The daily five-step loop, the fixed thresholds, and the single-ranked-proposal pattern (chosen specifically against the alert-fatigue evidence in section 8.7 [S63]) are a process a competitor would need time to copy correctly, not just announce |

*Table 10.3's honest conclusion is that process power is the one source of advantage SwasthyaGrid can claim today with a straight face; every other power in the framework is either not applicable to this business or depends on evidence that does not exist yet. This is a materially more modest claim than "a seven powers moat," and it is the claim this document makes.*

### 10.4 A VRIO test on the core capability

Table 10.4 runs the VRIO test (Valuable, Rare, Inimitable, Organized) against the single capability this section has defended throughout: the cross-facility, cross-category transfer-proposal-with-sign-off loop described in section 8.

| VRIO question | Answer | Why |
|---|---|---|
| Valuable? | Yes | Section 9's buying-centre analysis shows a named champion (the District Collector) with a scored incentive to want exactly this outcome [S20] |
| Rare? | Yes, today | Section 7's capability matrix found no existing Indian public health information system combines this capability [S12][S15][S35] |
| Inimitable? | Not yet proven | Nothing in the design (daily thresholds, a ranking rule, an approval screen) is technically difficult to copy once it is known to work; the claim rests on being first to prove it works at district scale, not on a hard-to-replicate mechanism |
| Organized to capture it? | Partially | A single-founder team today, with a stated hiring sequence tied to pilot fees (section 13), is organized enough to run a pilot, not yet organized at the scale a multi-state rollout would require |

*Table 10.4's third row is the section's central honesty: the capability is rare today because no one has built it and proven it yet, not because it is hard to build once someone has. The business case for moving quickly, described in section 13's roadmap, rests on this exact point.*

Read together, Tables 10.3 and 10.4 point to the same conclusion from two different frameworks: neither the 7 Powers test nor the VRIO test finds a durable technical moat behind SwasthyaGrid's mechanism. What both tests do find is a time-bounded advantage tied to being the first to run the mechanism successfully, at district scale, on real rather than simulated data. That is a materially weaker claim than most strategy decks make for their own innovation argument, and this document states it as weaker on purpose, because an inflated claim would not survive the same scrutiny this section applies to the contrarian thesis in section 10.5 below.

### 10.5 The contrarian thesis against its three strongest objections

Table 10.5 states the three objections most likely to be raised against the contrarian thesis in section 2 (misplacement, not absence, explains much of the shortage) and answers each directly, before a judge raises it.

| Objection | The answer |
|---|---|
| "The CAG's expiry findings and the availability studies measure different things, in different places and years; you cannot infer one from the other." | This document agrees, explicitly, in section 6: the paradox is stated as an inference from two independent evidence sets, not as a measured link between the same items in the same months at the same facilities. The honest limit is named, not hidden, and the case for SwasthyaGrid does not require the two figures to describe the identical stock-keeping unit, only that both a shortage and a surplus exist inside the same state's supply chain at overlapping times |
| "eVIN's 80% result is for vaccines, inside a differently resourced, donor-backed rollout; it will not transfer to medicines run by a single-founder start-up." | Section 7.3 of this document makes the same point before this objection is raised: eVIN is a precedent for the mechanism class, not a forecast for this specific implementation. Section 14's impact model uses a bear, base and bull range, with the base case at half of eVIN's reported reduction rate, precisely so no single number borrows eVIN's result wholesale |
| "If the mechanism is this straightforward, an existing vendor (e-Aushadhi's operator, or a state's own IT department) could build the transfer-proposal layer itself, at lower switching cost to the state than adopting a new product." | This is the most serious objection, and Table 10.3's counter-positioning row names the actual reason it has not happened: adding a transfer-proposal workflow requires the incumbent to accept a named-officer approval step and a permanent audit trail (Table 8.6) that a passive recording system was never built to carry, which is an organizational and accountability commitment, not a small software change. SwasthyaGrid is not betting that the feature is hard to build; it is betting that committing to the accountability structure around it is the harder step for an incumbent whose current product is a ledger, not a decision-support workflow |

*Table 10.5's third row is the objection this document takes most seriously, because it is the one future competitors are most likely to act on; section 13's roadmap and stop rules exist in part because of this specific risk.*

### 10.6 A precedent for measurement without rebalancing

Section 9.6 of this document flagged that NITI Aayog's Delta Ranking already gives aspirational-district officials a recurring, short-interval measurement cadence, published since the Aspirational Districts Programme's January 2018 launch across its 112 districts, ranking incremental month-on-month change across 81 data points in six themes [S64]. That ranking is itself a useful, independent illustration of this section's core finding, stated at the level of India's wider public-sector measurement apparatus rather than only its health-specific systems: the Delta Ranking identifies which districts and which indicators are lagging, in public, on a recurring schedule, and is explicitly intended to spur competitive federalism between states and districts [S64]. It does not, and is not designed to, move a single rupee, bed or unit of medicine between the districts it ranks. A district that falls in the ranking learns that it is falling; it does not receive, from the ranking itself, a specific, actionable proposal for what to do about it the next morning. This is the same structural gap section 7's capability matrix found inside India's public health information systems specifically, restated here at the level of a parallel, non-health public measurement system, which strengthens rather than narrows the innovation claim: the pattern of recording and ranking without rebalancing is not an accident specific to the health sector's five systems, it is a more general feature of how Indian public-sector performance measurement is typically built, and SwasthyaGrid's narrow contribution, a ranked, actionable transfer proposal with a human sign-off, is the layer that pattern is missing wherever it appears.

### 10.7 What SwasthyaGrid will not build

A claim about what a product will not do is as much a part of an honest innovation argument as a claim about what it will do. Table 10.6 states four explicit exclusions.

| What SwasthyaGrid will not build | Why |
|---|---|
| A new national health database | Health is a State List subject under the Seventh Schedule of the Constitution [S13]; a single national database would duplicate, and likely conflict with, the state-by-state architecture every existing system in section 7 already follows |
| Any patient record | Section 8.8's guardrail keeps personal data out of scope entirely, avoiding the consent and security obligations the Digital Personal Data Protection Act, 2023 attaches to personal data [S14] |
| Automatic ordering, without a human sign-off | Section 8.8's human-approval guardrail is treated as permanent, not as an interim step toward automation; section 8.7's alert-fatigue evidence [S63] is itself an argument against ever removing the sign-off step |
| New hardware for any facility | The design reads a stock export a district already produces [S15][S35][A16]; a hardware requirement would contradict the six-week, no-new-purchase-line rollout claim examined fully in section 13 |

*Table 10.6's exclusions are not a roadmap of features deferred to a later release; they are boundaries this document treats as part of the product's identity, consistent with the guardrails in section 8.8 and the "move first, buy for the gaps that remain" thesis in section 2.*

Each row in Table 10.6 is also, read the other way round, a reason a buyer might trust SwasthyaGrid faster than a broader, harder-to-scope product: a state evaluating a vendor that promises a national database, patient records, automatic ordering or new hardware is evaluating a larger, slower, more expensive commitment than a state evaluating a narrow layer that reads existing exports and stops short of automation. The narrowness this table states is therefore not only an ethical and legal boundary; it is also, independently, part of the feasibility case section 13 builds in full.

### 10.8 What this section establishes, and what it does not

This section has shown, using three named strategy frameworks, that SwasthyaGrid's narrowest and most defensible claim is a process-power advantage in a specific, previously unbuilt capability, not a broad, already-proven moat. It has not established that the capability is hard for a well-resourced incumbent to copy once SwasthyaGrid proves it works, and Table 10.5's third row names that risk directly rather than minimising it. Part D of this document takes up the business's durability on three further dimensions, People, Planet and Profit, together with the business model canvas that ties section 9's buying centre to section 11's unit economics.
