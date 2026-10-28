# Chapter 10 — Emergency Response and Containment for Non-Routine Chemical Releases

## Confidence & Provenance

This chapter answers the case brief's Key Question #3: how should emergency response
and containment be managed for non-routine chemical releases. It builds directly on
three prior chapters — the verified timeline and shelter-in-place facts in Chapter 3,
the toxicological mechanisms (knockdown, olfactory fatigue, delayed pulmonary injury,
near-source concentration spikes, and the documented responder-exposure pattern) in
Chapter 5, and the Tier II/M2000A hazard-communication gap established in Chapter 3 §5
and `lane7-gapfill.md`. Incident-specific facts (timeline, casualty framing, shelter-
in-place details, hospitals) are carried forward with the same **[VERIFIED]** /
**[VERIFIED, search-synthesis]** tags used in those chapters — see `FACTS-BASELINE.md`
for the governing casualty-count framing (2 fatalities, uncontested; hospitalized/
treated counts a range across 19/21/22/~30/"30+" plus an unreconciled CSB "4 additional
injuries" figure; 7 first responders well-corroborated). Everything prescriptive in this
chapter — the ICS structure, PPE-level recommendations, decontamination procedure, and
the proposed CAD-integration fix — is this dossier's own analytical work product,
tagged **[HYPOTHESIS — prescriptive]**, grounded in standard HAZMAT/ICS doctrine and
NIOSH/CDC first-responder literature rather than in any confirmed record of what the
actual responding agencies did procedurally at this incident (which is not publicly
detailed in any source reviewed).

---

## 10.1 Incident Command System structure for a toxic-gas release with community shelter-in-place implications

A confirmed toxic-gas release inside an enclosed industrial building, with fumes
threatening to migrate into the surrounding community, is a textbook case for a
**Unified Command** structure under the U.S. National Incident Management System (NIMS)
— not a single-agency response, because the facility, county HAZMAT, EMS, and state
environmental regulator each hold distinct legal authority and technical expertise that
no single agency possesses alone. **[HYPOTHESIS — prescriptive, standard ICS/NIMS
doctrine applied to this incident type]**

**Proposed Unified Command composition:**

| Role/Agency | Responsibility | Incident-specific anchor |
|---|---|---|
| Facility Emergency Response Team (ERT) / Incident Commander (facility) | Site access control, process knowledge, initial containment actions, hazard information (SDS, Tier II data) | Ames Goldsmith/Catalyst Refiners personnel; per Chapter 3 §1.2, plant employees were already self-evacuating and extracting injured coworkers with respirators before first responders arrived |
| County HAZMAT team | Atmospheric monitoring, entry-team command, decontamination line command | Kanawha County; per Chapter 3 §1.2 the county Emergency Operations Center (EOC) activated 9:46–9:50 a.m. |
| EMS/Fire | Triage, treatment, transport, rescuer safety | 7 EMS/first-responder personnel became casualties themselves per FACTS-BASELINE — a direct signal that EMS command needs its own PPE-discipline authority, not just a role under HAZMAT |
| WVDEP | Environmental monitoring (perimeter/offsite air quality), regulatory liaison | Per Chapter 3 §1.3, WVDEP/EPA ran joint air monitoring (11–12 monitors) from April 23 onward, reporting non-detect readings offsite through late April |
| County/state emergency management, schools/WVSU liaison | Community notification, shelter-in-place issuance and lifting, traffic control | Per Chapter 3 §1.2: Kanawha County schools and West Virginia State University issued independent shelter-in-place orders; road closures on 1st Avenue South, MacCorkle Avenue, and Route 25 |

Unified Command's core function here is resolving exactly the coordination gap the
Tier II failure exposed: the facility held hazard information (or should have) that
HAZMAT/EMS needed in real time to make PPE, entry, and decontamination decisions. A
Unified Command structure with the facility ERT physically co-located with the HAZMAT
Incident Commander from the first minutes of response — not contacted after the fact —
is the organizational fix that makes the technical fix in §10.6 below actually usable in
practice.

---

## 10.2 PPE/SCBA selection logic for H2S/NOx atmospheres

### 10.2.1 EPA/OSHA protection-level framework applied to this hazard

| Level | Respiratory/skin protection | When appropriate for this incident type |
|---|---|---|
| Level A | Fully encapsulated suit, SCBA (positive-pressure) | Entry into a confirmed or suspected IDLH atmosphere with unknown concentration, unknown chemical identity, or skin-hazard potential — the correct level for the *first* entry into an active or just-secured release area before atmospheric characterization is complete |
| Level B | SCBA (positive-pressure), chemical-resistant clothing (not fully encapsulating) | Once atmospheric monitoring confirms respiratory hazard exists but skin/splash hazard is limited or already addressed |
| Level C | Air-purifying respirator (APR) with appropriate cartridge, chemical-resistant clothing | Only once continuous, confirmed monitoring shows concentration reliably below IDLH and cartridge-appropriate for the specific contaminant(s) present |
| Level D | Standard work clothes, no respiratory protection | Not appropriate for any personnel inside the building envelope until atmospheric monitoring confirms clearance |

**Why entry without confirmed atmospheric characterization is dangerous — the direct
link to why 7 responders were injured.** Chapter 5 §5.9 documents the general
NIOSH/CDC-surveilled pattern for injured first responders in chemical-release
incidents: police and EMS personnel most commonly sustain respiratory irritation from
entering or working near an active toxic-gas atmosphere **without adequate respiratory
protection**, often because the specific hazard had not yet been identified or
confirmed at the time of entry — a documented "recognition lag." At this incident, the
20-minute interval during which responders reportedly did not know the identity of one
of the two reactive chemicals (§10.6 below) is precisely the kind of information gap
that produces exactly this failure mode: a responder cannot select the correct PPE level
or the correct APR cartridge for a chemical they cannot identify, and defaulting to
Level A/SCBA on arrival — before, not after, chemical identity and concentration are
confirmed — is the standard doctrinal answer to that uncertainty. **[HYPOTHESIS —
prescriptive doctrine; INFERRED link to the specific 7-responder pattern, since no
source reviewed specifies the exact PPE these seven responders were or were not wearing
at the moment of their exposure]**

Chapter 5 §5.1 separately documents a second, distinct mechanism relevant here: the
"second casualty" pattern, in which a co-worker or first responder sees a downed
colleague and enters the same atmosphere without SCBA specifically to attempt a rescue.
This is an emotionally understandable but doctrinally prohibited action under HAZMAT
protocol — the correct response to a downed victim in an unconfirmed IDLH atmosphere is
a properly-PPE'd rescue team, not an ad hoc entry by whoever is nearest. Pre-incident
training and drilled discipline against this specific instinct is a standard, low-cost
intervention directly targeted at this documented failure mode.

**Secondary/off-gassing exposure.** Chapter 5 §5.9 also flags that the exact exposure
mechanism for the 7 sickened EMS personnel is not specified in any source reviewed, and
notes the general literature documents secondary exposure among responders not
physically present during the initial release — for example, a transport provider
becoming symptomatic from off-gassing or contaminated clothing during patient transport.
This is a distinct PPE/procedure implication: **patient decontamination (§10.3) must
occur before transport**, not en route, and transport crews handling a patient who has
not been through decon should themselves be in respiratory protection, not just the
entry team.

### 10.2.2 Recommended PPE protocol for this incident type

1. First-arriving units default to **Level A** for any entry into the building envelope
   until air monitoring (Chapter 9's fixed/portable detection layers) confirms
   concentration and chemical identity.
2. **No entry, including rescue entry, without a functioning personal gas monitor**
   (Chapter 9 §9.3.2) and a designated safety officer tracking entry-team time and
   monitor readings from outside the hazard area.
3. Downgrade to Level B only on confirmed, continuous (not single-point) monitoring data
   showing the atmosphere below IDLH with margin, communicated through the Unified
   Command structure (§10.1), not by individual responder judgment.
4. Transport/EMS personnel handling any patient who has not completed decontamination
   wear, at minimum, respiratory protection appropriate to the confirmed or suspected
   contaminant, consistent with the off-gassing exposure pathway above.

---

## 10.3 Decontamination for a gas-phase HAZMAT event

Gas-phase HAZMAT decontamination differs structurally from the liquid-spill decon
protocol most HAZMAT teams train on by default, and this distinction matters directly
for this incident type:

- **Primary contamination is respiratory/systemic, not surface/dermal.** For a patient
  exposed to H2S vapor with no direct liquid-chemical contact, the dominant clinical
  problem is the toxicological mechanism described in Chapter 5 §5.1 (cellular
  asphyxiation), not skin absorption. Decontamination priority is therefore **removal
  from the contaminated atmosphere and immediate high-flow oxygen**, not an extended
  water-wash procedure — over-triaging every patient through a full liquid-spill decon
  line delays this higher-priority intervention. **[HYPOTHESIS — prescriptive, standard
  HAZMAT/EMS gas-exposure decon doctrine]**
- **Clothing removal remains standard practice** even for a pure vapor exposure, because
  fabric can retain adsorbed gas and continue to off-gas near the patient's airway and
  near responders — directly relevant to the secondary/off-gassing exposure pathway
  flagged in §10.2.1 and Chapter 5 §5.9. Clothing removal and bagging (as a contaminated
  item, sealed, not simply set aside) should occur at the edge of the hot zone before
  transport.
- **Surface/skin decon (soap-and-water wash) is still indicated** where there is any
  possibility of liquid-phase contact — plausible here given that the release mechanism
  involved liquid nitric acid and a liquid cleaning agent (Chapter 4), not a pure gas
  release from origin. Decon teams should not assume "gas release" means "no liquid
  contact possible" for personnel who were near the vessel itself.
- **Decon line should be positioned upwind/uphill of the hot zone**, consistent with
  standard HAZMAT siting practice, and staffed by personnel in PPE appropriate to
  potential off-gassing exposure per §10.2.

---

## 10.4 Shelter-in-place vs. evacuation — the decision criteria

Chapter 3 §1.2 records that shelter-in-place, not evacuation, was ordered for a roughly
one-mile radius around the plant, plus a wider corridor, with Kanawha County schools and
West Virginia State University issuing their own independent shelter-in-place orders.
The St. Albans/South Charleston portion of the order was lifted around 10:30 a.m., with
the Institute-area order remaining active into the afternoon, and the full order lifted
by evening (Chapter 3 §1.2). **[VERIFIED]**

**Why shelter-in-place was the appropriate call, per the toxicology and dispersion logic
in Chapter 5:**

- Chapter 5 §5.7 establishes that H2S is denser than air and that the near-source
  concentration spike from a violent, fast-generating release is far higher close to the
  source than at distance — concentration falls off with distance and time as the gas
  mixes and dilutes into the ambient outdoor atmosphere. A community more than a few
  hundred meters from the release point is, per this dispersion logic, exposed to a
  concentration many orders of magnitude below what personnel at the vessel itself
  experienced.
- Moving a sheltering population outdoors and onto roads to evacuate can, under some
  release-and-dispersion conditions, briefly increase individual exposure relative to
  staying indoors with doors/windows closed and HVAC intake secured — the standard
  general rationale for shelter-in-place over evacuation for a short-duration,
  already-dissipating release, as opposed to a sustained, growing plume. **[HYPOTHESIS
  — general shelter-in-place doctrine, not incident-specific measured data]**
- WVDEP's own post-incident air monitoring reported non-detect/no offsite H2S detection
  through at least April 29, 2026 (Chapter 3 §1.3), which is consistent after the fact
  with shelter-in-place having been a defensible call for the community — though this
  monitoring data describes conditions after the acute release, not the decision-making
  moment itself, and this chapter does not claim the monitoring data was available in
  real time to the officials who made the initial shelter-in-place call.

**Why entry personnel needed full respiratory protection despite the community-level
shelter-in-place logic:** the two exposure zones are not the same problem. Community
shelter-in-place is a distance-and-dilution argument; entry-team PPE is a near-source,
undiluted-concentration argument (§10.2). A decision framework that correctly protects
the community with shelter-in-place does not, and should not, imply that entry personnel
can rely on anything less than full SCBA/Level A protection at the source.

---

## 10.5 Hospital mass-casualty and surge protocol

CAMC Charleston and WVU Medicine Thomas Memorial (South Charleston) treated the incident's
casualties (Chapter 3 §1.2, FACTS-BASELINE). Chapter 5 §5.3, §5.4, and §5.8 establish two
independent delayed-injury pathways relevant to hospital protocol design:

- **H2S**: pulmonary edema that can be immediate or delayed up to approximately 72
  hours post-exposure — the toxicological basis for standard practice of observing
  seriously exposed patients for at least 24 hours even after apparent recovery.
- **NO2** (if present — [INFERRED]/not confirmed for this incident, per Chapter 4/5):
  a symptom-free latent period followed by delayed pulmonary edema at 6–12 (up to ~30)
  hours post-exposure, with a second bronchiolitis-obliterans wave possible at 2–6 weeks.

Chapter 5 §5.8 draws the operational conclusion directly relevant to hospital surge
protocol: **a mass-casualty inhalation-injury response cannot triage on presenting
symptoms alone**, because a patient who is ambulatory and reports only mild symptoms at
the scene may be hours away from clinically significant pulmonary edema, and field
differentiation between the H2S and NO2 clinical pictures is genuinely difficult in real
time.

**Recommended extended-observation protocol** (this dossier's prescriptive
recommendation, consistent with but formalizing the general standard described in
Chapter 5 §5.3/§5.4/§5.8): every patient with **any confirmed or plausible exposure
history** — not only those symptomatic at triage — should be held for a minimum
**24-hour observation period**, with a documented re-assessment at that interval before
discharge is authorized, and clear discharge instructions describing delayed-symptom
warning signs (worsening shortness of breath, cough) given to any patient released
before the full 24–48 hour window some literature describes for NO2-pattern injury.
**[HYPOTHESIS — prescriptive]** This is directly responsive to Chapter 5 §5.8's
observation that the reported hospitalized/treated count range (19 to "30+" per
FACTS-BASELINE) plausibly reflects a mix of acutely symptomatic patients and
precautionary-observation admissions — an extended, uniformly-applied observation
protocol converts that ad hoc mix into a standardized clinical policy rather than
leaving delayed-symptom risk to individual triage judgment.

Surge planning implications: a facility release of this scale (a hospitalized/treated
count in the range of dozens, per FACTS-BASELINE's multi-source range) should trigger
each receiving hospital's mass-casualty incident (MCI) activation, including surge
staffing for pulmonology/respiratory therapy specifically, given the delayed-onset
pulmonary injury profile common to both candidate toxicants.

---

## 10.6 Fixing the Tier II/M2000A gap as an emergency-response-readiness issue

Chapter 3 §5 and `lane7-gapfill.md` establish, **[VERIFIED, search-synthesis]**, that
Bonderite M2000A was not listed on Catalyst Refiners' EPCRA Tier II Emergency and
Hazardous Chemical Inventory form, and that responders reportedly located the product's
data sheet via an approximately 20-minute Google search conducted during the active,
ongoing toxic release, rather than from facility hazard documentation.

This dossier's regulatory-gap chapter (Chapter 7) treats this as a compliance failure.
This chapter treats it as something narrower and more urgent: **an emergency-response-
readiness failure**, because EPCRA Tier II reporting exists specifically to make
hazardous-chemical inventories available to Local Emergency Planning Committees (LEPCs)
and responders *in advance* of an incident — not to be retrieved reactively during one.
A correct annual paper filing that responders cannot access in real time at 9:38 a.m. on
the morning of a release provides essentially the same practical protection as no filing
at all.

**Proposed fix:** facility hazardous-chemical inventories — Tier II data plus any
task-specific chemical information for active work (e.g., decommissioning-task
chemicals like M2000A and nitric acid, per Chapter 9 §9.5.3's proposed task-level SDS
push) — should be integrated into local dispatch and HAZMAT teams' **Computer-Aided
Dispatch (CAD) systems**, queryable by facility address or automatically surfaced to
responding units the moment a hazmat/chemical-release call is dispatched to that
address. This closes the loop with Chapter 9's proposed automatic dispatch notification
on a high-high gas alarm (§9.5.3): the CAD integration is the standing, always-current
inventory a responder can query on arrival even absent an active gas-detection alarm
feed, while Chapter 9's real-time push is the incident-triggered version of the same
underlying data. Together they replace the 20-minute reactive search with information
available before or at the moment of dispatch. **[HYPOTHESIS — prescriptive, this
dossier's proposed fix]**

This reframing matters for how the LEPC (Chapter 3 §1.3 records a May 3 Kanawha-Putnam
LEPC meeting evaluating the response, with administrator Thomas Keefer characterizing it
as "largely successful") and similar county planning bodies elsewhere should prioritize
Tier II compliance: not as an annual paperwork exercise scored on filing completeness,
but as a live emergency-response input whose value is entirely contingent on real-time
accessibility during an active incident.

---

## 10.7 Community notification and public communication — what worked, and what the delay cost

**What worked, per Chapter 3's timeline:** shelter-in-place orders reached Kanawha
County schools and West Virginia State University independently and promptly on the
morning of the incident (Chapter 3 §1.2); road closures were implemented on the
relevant corridors; the order was scoped and lifted in stages (St. Albans/South
Charleston portion lifted ~10:30 a.m., Institute-area portion held longer, full lift by
evening) rather than as a single blunt instrument — consistent with a response that was
actively re-assessing conditions rather than issuing a single static order. The
Kanawha-Putnam LEPC's own May 3 post-incident review characterized the response as
"largely successful" (Chapter 3 §1.3), which this chapter does not dispute but also does
not independently verify beyond that single quoted characterization.

**What the ~20-minute chemical-identification delay cost, specifically:** the community-
facing shelter-in-place decision does not appear to have depended on knowing M2000A's
identity — it is a distance/dilution-based decision that can reasonably be made on
"a chemical release has occurred at this facility" alone, and Chapter 3's timeline shows
it was issued promptly. The cost of the Tier II gap fell almost entirely on the
**entry-team and EMS decision-making layer** — the PPE-level, decontamination-approach,
and antidote/treatment-protocol decisions discussed in §10.2–10.3 and §10.5 that do
depend on knowing exactly which chemicals are involved. This is a useful distinction for
any post-incident review: **not every emergency-response gap manifests at the community-
communication layer** — this one manifested specifically as risk to entry personnel and
as a delay in giving hospitals a confirmed chemical identity to guide treatment, which
is consistent with, though not proof of, the pattern of injured first responders
documented in Chapter 5 §5.9. **[INFERRED — this chapter's own synthesis connecting the
Tier II delay to the specific point in the response chain where it plausibly mattered
most]**

---

## Sources

[S-01] `optimizeit/case1-ames-goldsmith/_research/FACTS-BASELINE.md` — governing
casualty-count framing, shelter-in-place facts, epistemic-tagging convention.
[S-02] `optimizeit/case1-ames-goldsmith/03-incident-reconstruction.md` — full timeline
(§1.2, §1.3), shelter-in-place details, Tier II/M2000A gap (§5).
[S-03] `optimizeit/case1-ames-goldsmith/04-chemistry.md` — reaction mechanism informing
decon and PPE-hazard-class reasoning.
[S-04] `optimizeit/case1-ames-goldsmith/05-toxicology-ih.md` — knockdown mechanism
(§5.1), olfactory fatigue (§5.2), delayed pulmonary effects (§5.3, §5.4), exposure-limit
table (§5.5), enclosed-space dispersion (§5.7), clinical/triage picture (§5.8),
responder-exposure pattern and NIOSH/CDC citation (§5.9).
[S-05] `optimizeit/case1-ames-goldsmith/_research/lane7-gapfill.md` — Tier II omission
detail, 20-minute Google-search finding [VERIFIED, search-synthesis].
[S-06] General doctrinal references (standard, widely documented practice, not
independently re-verified via direct primary fetch in this research pass): FEMA/NIMS
Incident Command System and Unified Command doctrine; EPA/OSHA HAZWOPER PPE Level A–D
framework (29 CFR 1910.120); standard HAZMAT gas-phase vs. liquid-phase decontamination
doctrine; general hospital mass-casualty-incident (MCI) activation practice for
inhalation-injury events.
