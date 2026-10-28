# Chapter 9 — Continuous Online Gas Detection and Monitoring Protocol

## Confidence & Provenance

This chapter is the dossier's response to the case brief's explicit deliverable
requirement: a "Continuous Online Gas Detection and Monitoring Protocol," anchored to
the case brief's own root-gap framing that "the facility lacked continuous online toxic
gas detection for this transient phase." That absence-of-detection statement is treated
here as **[VERIFIED]** to the extent it is the case brief's own framing of the incident;
no source independently reviewed in this dossier's research base (CSB press materials,
OSHA IMIS, WVDEP statements, press coverage) confirms or details what gas-detection
infrastructure, if any, existed at Catalyst Refiners at the time of the April 22, 2026
release, so this chapter does not assert a specific negative fact about the facility's
actual equipment beyond what the case brief itself states. Everything else in this
chapter — sensor selection, setpoints, placement logic, SIS tie-ins, alarm philosophy,
and the deployment protocol — is this dossier's own **prescriptive engineering work
product**, built from (a) the exposure-limit data established in Chapter 5
(§5.5's OSHA PEL/NIOSH REL/IDLH/AEGL table), (b) the gas-generation and pressurization
estimates in Chapter 4 (§4.7), and (c) standard, publicly documented industry practice
for combustible/toxic gas detection system design (ISA/ANSI gas-detection guidance,
general SIS/interlock and alarm-management practice per ISA-18.2). Every prescriptive
recommendation below is tagged **[HYPOTHESIS — prescriptive]** where it is this
dossier's own proposed design rather than a documented industry-standard figure quoted
directly, and **[VERIFIED]** where it restates an established exposure limit or general
engineering principle already sourced in an earlier chapter. No claim is made that any
of the equipment or procedures described below existed at Catalyst Refiners; this
chapter proposes what should exist, using the incident as the motivating case.

---

## 9.1 Why this specific gap mattered — the "transient phase" problem

Continuous online toxic-gas detection is a mature, standard control in process
industries — but it is conventionally deployed, budgeted, and maintained against
**routine process-area hazard zoning**: fixed detector heads at known leak points on
pressurized process equipment that operates continuously, day after day, under a
documented Process Hazard Analysis (PHA). The Catalyst Refiners release did not occur in
that kind of area. It occurred during **decommissioning/decontamination work on a
legacy vessel** — a one-time, transient task on equipment that had likely not been
actively disturbed, and had certainly not been chemically dosed with new reagents, in
years [INFERRED, per Chapter 4 §4.1's discussion of "silver mud" as legacy,
uncharacterized residue]. Three structural reasons make this exact phase the highest-risk,
lowest-coverage moment in a facility's life cycle:

1. **Fixed gas detection, where it exists, is zoned to the process it was designed for.**
   A PHA-driven detector layout protects against leaks from equipment *as it normally
   operates*. It is not automatically extended to cover a temporary task — introducing
   two new chemicals into a legacy vessel that was never part of the original process
   flow the detection system was designed around. **[INFERRED, standard PHA/detector-zoning
   practice applied to this incident]**
2. **Decommissioning is precisely when legacy hazards are disturbed for the first time
   in years.** Chapter 4 established that "silver mud" residues are Ag2S-bearing
   sediment that had been sitting, uncharacterized, in the vessel — exactly the kind of
   material a permanent-closure cleanout project is designed to remove, and exactly the
   kind of material that is least likely to have current safety-data-sheet-level
   characterization (§4.1, §3.2 of Chapter 3). The hazard is highest at the moment the
   vessel's contents are first actively worked in years — which is also the moment least
   likely to be covered by a mature, tested detection zone. **[INFERRED]**
3. **Decommissioning-phase organizational attention is structurally lower.** Chapter 3
   §3.2 notes, as a general (not incident-specific) pattern in process-safety literature,
   that staffing, supervisory attention, and procedural rigor at industrial sites are
   frequently reduced during a wind-down period ahead of a scheduled closure — here,
   the plant was months from its scheduled June 2026 closure. A gas-detection program
   designed for steady-state operations is least likely to be re-scoped, re-budgeted, or
   re-verified for a short-lived decommissioning task at exactly the point in the
   facility's life when that re-scoping matters most. **[INFERRED, general pattern, not
   site-specific finding]**

The design implication carried through the rest of this chapter: **decommissioning and
legacy-vessel work needs its own detection protocol, procedurally distinct from
whatever fixed process-area detection a facility already runs**, stood up and verified
*before* any chemical is introduced to a legacy vessel, not retrofitted after a release
demonstrates the gap. This reframes "continuous online detection" away from a purely
capital-equipment question (permanently wire more detector heads into the DCS) and
toward a **task-based deployment discipline** — the same instrumentation types, applied
on a temporary, redeployable basis to wherever legacy-vessel work is actually happening.

---

## 9.2 Sensor technology selection

### 9.2.1 Electrochemical (EC) sensors — the primary H2S technology

Electrochemical sensors are the industry-standard choice for point/personal H2S
detection and are the correct primary technology for this application. **[VERIFIED,
general sensor-technology practice]**

| Property | Electrochemical H2S sensor | Engineering justification for this application |
|---|---|---|
| Response time | Typically T90 < 30–60 seconds | Matches the "knockdown" hazard profile from Chapter 5 §5.1 — onset of incapacitation can occur within one or two breaths at high concentration; a slow-responding sensor provides no useful warning against a fast-venting release |
| Sensitivity range | Sub-ppm to low hundreds of ppm | Directly spans the exposure-limit band from Chapter 5 Table 5.5 — NIOSH REL (10 ppm ceiling) through IDLH (100 ppm) |
| Selectivity | Good specificity to H2S among common industrial gases; some cross-sensitivity to other reducing/sulfur-bearing gases exists and should be checked against the specific sensor's cross-sensitivity table | Appropriate for a facility where H2S is the [VERIFIED] released agent (Chapter 4/5) |
| Power/duty | Low power draw; compatible with battery-powered portables and loop-powered fixed heads | Enables both fixed-point and personal-monitor deployment from the same underlying sensing technology |
| Sensor life / maintenance | Finite electrochemical cell life (commonly 1–3 years depending on exposure history); requires periodic bump-testing and calibration | Drives the calibration-cadence requirement in §9.6 below — a sensor that has drifted or expired is functionally equivalent to no detection at all |

**Setpoint logic**, derived directly from the Chapter 5 §5.5 exposure-limit table and
standard three-tier IH alarm practice (low/high/high-high), consistent with general
ISA/ANSI gas-detection guidance for tiered alarm setpoints referenced to recognized
occupational exposure limits:

| Alarm tier | Setpoint (H2S) | Basis | Required response |
|---|---|---|---|
| Low (advisory) | 10 ppm | NIOSH REL 10-min ceiling (Ch.5 Table 5.5) | Investigate, don PPE, prepare to evacuate area |
| High (action) | 20 ppm | OSHA PEL ceiling (Ch.5 Table 5.5) | Evacuate immediate work area; stop task; don SCBA for any re-entry |
| High-high (emergency/SIS-initiating) | 50–100 ppm (site-specific target: 50 ppm, a fraction of the 100 ppm IDLH, consistent with standard practice of setting the emergency setpoint at a conservative margin below IDLH rather than at the IDLH value itself) | IDLH = 100 ppm (Ch.5 Table 5.5); standard practice targets 50% of IDLH as a safety margin | Automatic area evacuation alarm, forced ventilation activation, work-permit interlock (§9.4) |

**[HYPOTHESIS — prescriptive]** for the specific setpoint values chosen (10/20/50 ppm);
**[VERIFIED]** for the underlying exposure limits they are referenced to.

### 9.2.2 NDIR (non-dispersive infrared) sensors — the NO2/broad-range secondary layer

NDIR technology is the better-justified choice for NO2 and for broader-range,
lower-cross-sensitivity monitoring, for three engineering reasons:

- **Electrochemical NO2 sensors exist but are more prone to cross-sensitivity and
  drift** against other oxidizing/acidic-gas species that would plausibly be present in
  the same atmosphere as concentrated nitric acid vapor — exactly the co-contaminant mix
  implied by Chapter 4's chemistry (HNO3 fumes, NOx, and H2S potentially present
  simultaneously). NDIR's optical absorption measurement is inherently less susceptible
  to this class of interference. **[VERIFIED, general sensor-technology principle]**
- **NDIR sensors do not consume a reactive electrochemical cell**, giving them longer
  service life and more stable long-term calibration — relevant for a facility that
  would want a detection layer that survives the multi-week/multi-month duration of a
  full decommissioning project without repeated cell replacement. **[VERIFIED, general
  principle]**
- **NDIR covers a broader concentration range** without saturation at the levels
  relevant to a "violent reaction" release, consistent with Chapter 4 §4.7's
  pressurization estimates showing meaningful fractional-atmosphere gas generation is
  plausible within seconds to minutes.

Given Chapter 4/5's explicit and repeated caveat that **NO2 is [INFERRED], not
[VERIFIED], as an actually released agent at this incident**, this protocol recommends
NDIR NO2 monitoring as a **precautionary secondary layer** for any future nitric-acid/
sulfide-residue decommissioning task, not because NO2 release is confirmed here, but
because the reaction chemistry in Chapter 4 makes NO2 a chemically expected co-product
whenever concentrated HNO3 contacts a reducing residue under uncontrolled conditions.
**[HYPOTHESIS — prescriptive, consistent with but going beyond the confirmed incident
record]**

**Setpoint logic (NO2)**, again derived from Chapter 5 Table 5.5:

| Alarm tier | Setpoint (NO2) | Basis |
|---|---|---|
| Low (advisory) | 1 ppm | NIOSH REL STEL |
| High (action) | 3 ppm | ACGIH TLV-TWA (Ch.5, flagged as not independently re-verified against a primary ACGIH source — carried forward with the same caveat) |
| High-high (emergency/SIS-initiating) | 10 ppm | Approx. 50% of NIOSH IDLH (20 ppm) |

### 9.2.3 Summary technology matrix

| Hazard | Primary sensor | Secondary/cross-check sensor | Deployment form factor |
|---|---|---|---|
| H2S | Electrochemical | — | Fixed point, portable personal, perimeter |
| NO2 (precautionary) | NDIR | Electrochemical (cross-check only) | Fixed point near acid-introduction zone, portable personal |
| General oxygen displacement/confined-space | Electrochemical O2 cell | — | Portable 4-gas personal monitor (standard confined-space instrument alongside H2S/NO2 channels) |

---

## 9.3 Sensor placement logic for this hazard geometry

Placement must answer three distinct spatial questions that a single fixed-perimeter
system cannot answer alone: (1) is gas being generated *at the vessel being worked*,
(2) is a *person* carrying an unsafe atmosphere with them as they move, and (3) has gas
*escaped the immediate work area into the wider enclosed building*, consistent with the
case brief's description of fumes venting "into the enclosed workplace atmosphere."

### 9.3.1 Layer 1 — task-based point/area detection around the vessel being worked

- **Temporary, redeployable detector heads**, not permanently wired process-area
  instruments, positioned within 1–2 meters of the active work point (vessel opening,
  manway, drain point) — the exact location where Chapter 4 §4.7 estimates the highest
  local gas-generation rate and where Chapter 5 §5.7 identifies the "transient
  near-source spike" as the dominant near-field hazard.
- Deployed **before** any chemical is introduced to the vessel (see the pre-task
  checklist, §9.6), not after work begins.
- Positioned low, near floor/vessel-opening level given H2S's density relative to air
  (MW ~34 vs. air ~29, per Chapter 5 §5.7) — dense gas will pool at low points rather
  than rise and disperse.
- Redeployed with the work — as decommissioning progresses vessel-to-vessel across the
  facility, the temporary monitoring stand moves with it. This directly answers the
  §9.1 "transient phase" problem: coverage tracks the hazard, not a fixed process
  footprint. **[HYPOTHESIS — prescriptive]**

### 9.3.2 Layer 2 — personal/portable multi-gas monitors for entry crews

- Every individual performing hands-on work on a legacy vessel, and every member of an
  entry or rescue team, wears a **personal 4-gas monitor** (H2S, O2, LEL combustibles,
  and a fourth channel configurable to NO2 or CO depending on task) as a redundant layer
  independent of the fixed/temporary area monitors.
- This directly targets the responder-exposure pattern identified in Chapter 5 §5.9 —
  the NIOSH/CDC-documented "recognition lag" pattern in which responders enter an
  unconfirmed atmosphere without SCBA because no real-time reading was available to
  them. A personal monitor removes the dependency on a fixed detector being in the
  right place; the wearer carries their own confirmation instrument. **[INFERRED,
  directly addressing the ch.05-documented responder-exposure mechanism]**
- Personal monitors should be **networked/telemetric where technology and budget allow**
  (a personal monitor that also transmits its reading to a central point adds no new
  sensor technology — it simply routes the same electrochemical/NDIR reading to the
  alarm-routing layer in §9.5) but must function as a standalone audible/vibrating
  alarm even if telemetry fails, since a rescuer's own monitor going into alarm is the
  single most important real-time signal to prevent a repeat of the "second casualty"
  pattern described in Chapter 5 §5.1.

### 9.3.3 Layer 3 — perimeter/building-level detection

- Fixed detector heads at building egress points, HVAC intakes, and along the perimeter
  of the enclosed structure housing the decommissioning work, to detect the scenario the
  case brief specifically frames: gas venting from the immediate work area into the
  broader enclosed workplace atmosphere, potentially reaching personnel who are not
  part of the work crew and have no reason to be wearing a personal monitor.
- This layer's alarm should be distinguishable (different tone/color) from the
  task-based Layer 1 alarm, so that a building-wide evacuation signal is not confused
  with a localized work-area stop-work signal — a standard alarm-management
  differentiation principle (§9.5).

### 9.3.4 Placement summary table

| Layer | Location | Trigger scope | Primary purpose |
|---|---|---|---|
| 1 — Task point | 1–2 m from active work point, low/floor-level | Work-area stop-work + local ventilation | Catch the near-source spike at its origin |
| 2 — Personal | Worn by every entry-team member | Individual alarm, evacuate self | Redundant, non-fixed-location coverage; targets responder-exposure pattern |
| 3 — Perimeter/building | Egress points, HVAC intakes, structure perimeter | Building-wide evacuation | Catch gas that has left the immediate work zone |

---

## 9.4 Safety Instrumented System (SIS) tie-in

A high-high gas alarm (§9.2's third tier) should not be advisory-only; it should
function as an **Instrumented Protective Function (IPF)**, tying into automatic
responses rather than relying solely on human reaction under the same knockdown
conditions Chapter 5 describes as removing the option of self-rescue.

**Proposed SIS actions on high-high alarm:**

1. **Area evacuation alarm** — audible/visual, distinct signal per §9.3.4, triggered
   automatically, not gated on an operator confirming the reading first (a confirmation
   step reintroduces exactly the delay that knockdown-speed exposure does not allow).
2. **Forced ventilation activation** — any local exhaust/dilution ventilation available
   for the work area switches to maximum rate automatically. This is the direct control
   response to Chapter 5 §5.7's well-mixed-box model: increasing the ventilation-rate
   term in the mass-balance equation (dC/dt = generation/volume − (ventilation/volume)×C)
   is the fastest available lever to bring concentration down once generation has
   started.
3. **Work stoppage / interlock** — the chemical-addition step of the task (e.g., valve
   or pump supplying acid/cleaning agent to the vessel, if the task involves any
   mechanized dosing) is interlocked to stop on high-high alarm. Where the task is
   manual (workers physically pouring/applying reagent, as is plausible for a legacy-
   vessel cleanout — Chapter 3 §3.2), the interlock instead gates the **work permit**:
   the high-high alarm automatically suspends the active hot-work/confined-space permit
   for that task, requiring positive re-authorization before work resumes.

This SIS logic is a natural companion to — but does not require — the LOPA-style
Independent Protection Layer (IPL) analysis referenced elsewhere in this dossier's
regulatory-gap chapter (Chapter 7): a continuous gas-detection-triggered evacuation/
ventilation/interlock function is precisely the kind of IPL a LOPA study for this task
would be expected to credit, and its absence is consistent with the case brief's stated
root gap. This chapter's SIS proposal stands on its own IH/exposure-limit justification
(§9.2) independent of whether a LOPA was formally documented for this task.
**[HYPOTHESIS — prescriptive]**

---

## 9.5 Alarm philosophy

### 9.5.1 Alarm rationalization — avoiding nuisance alarms and alarm fatigue

Any tiered alarm system risks alarm fatigue if setpoints are set too conservatively or
if nuisance alarms (from sensor drift, calibration lag, or genuinely low-consequence
transient readings) are not actively managed. Standard alarm-management practice per the
ISA-18.2 framework — documented setpoint rationale, alarm prioritization, and periodic
alarm-performance review — should govern this system:

- Each alarm setpoint in §9.2 must have a **documented basis** (as shown in the tables
  above) reviewable by IH/process-safety personnel, not an arbitrary round number.
- **Advisory-tier alarms should not sound the same audible signal as emergency-tier
  alarms** — a facility that trains personnel to associate every alarm chirp with "false
  alarm, ignore it" recreates the same false-safety-signal problem Chapter 5 §5.2
  identifies in olfactory fatigue, but at the instrumentation level instead of the
  biological level. **[INFERRED — cross-reference to Ch.5's olfactory-fatigue mechanism]**
- Sensor drift and expired calibration must be tracked as a distinct, non-suppressible
  system-health alarm, separate from a gas-concentration alarm, so that a technician
  cannot silence a "sensor needs calibration" notice by treating it the same as a
  low-priority gas reading.

### 9.5.2 Escalation levels

| Level | Trigger | Audience | Channel |
|---|---|---|---|
| Advisory | Low-tier setpoint | Task supervisor, work crew | Local audible/visual on the temporary monitoring stand |
| Action | High-tier setpoint | Task supervisor, site EHS/safety officer, area personnel | Local alarm + facility-wide paging/radio |
| Emergency | High-high (SIS-initiating) | Entire facility, facility ERT, external emergency responders (see below) | Building-wide evacuation alarm + automatic external notification |

### 9.5.3 Routing to external emergency responders — the direct Tier II fix

This is the point at which this chapter directly addresses the Chapter 3 §5 /
Chapter 3 lane-7 finding: Bonderite M2000A was not listed on Catalyst Refiners' EPCRA
Tier II inventory, and responders reportedly spent approximately 20 minutes locating
the product's data sheet via an ad hoc internet search during the active release
**[VERIFIED, search-synthesis, per Chapter 3 §5 / lane7-gapfill.md]**. A gas-detection
system that only alarms internally does not close this gap; the gap is a
hazard-communication failure at the moment of external response, not merely a paperwork
omission discovered afterward.

**Proposal:** the emergency-tier alarm (§9.5.2) should trigger an **automatic,
real-time data push to local emergency dispatch / county 911 CAD systems**, carrying
at minimum: gas species detected, concentration/tier, location within the facility, and
a pointer to (or embedded copy of) the SDS for the specific chemicals in active use for
the decommissioning task at that location — precisely the M2000A/HNO3 information
responders had to Google under active-release time pressure in the actual incident. This
does not require new sensor technology; it requires the emergency-tier SIS output in
§9.4 to include a dispatch-system notification action alongside the internal evacuation
and ventilation actions. **[HYPOTHESIS — prescriptive; this is this dossier's proposed
fix, not a documented industry-standard system]**

---

## 9.6 Pre-task gas-detection deployment protocol for decommissioning/legacy-vessel work

The core discipline this protocol enforces: **temporary monitoring is stood up and
verified before any chemical is introduced to a legacy vessel — not after work begins,
and not only after an incident demonstrates the gap.**

**Pre-task checklist (to be completed and signed off before any work-permit for
legacy-vessel chemical cleaning/decontamination is activated):**

1. **Hazard characterization review.** Confirm what is known and unknown about the
   vessel's residual contents (e.g., "silver mud" composition) and the chemicals to be
   introduced. Any unknown/uncharacterized residue triggers the conservative assumption
   that a sulfide-bearing or otherwise gas-generating reaction is possible, per Chapter 4's
   incompatibility-matrix logic (§4.10) — this review should explicitly consult that kind
   of chemical-incompatibility screening, which Chapter 4 notes is "buildable from public
   CAMEO data in minutes."
2. **Detector deployment — Layer 1 (task point).** Temporary H2S (and, given any
   nitric-acid involvement, NDIR NO2) detector heads physically placed at the work point,
   powered, and functioning, with alarm setpoints per §9.2 confirmed and logged.
3. **Detector deployment — Layer 2 (personal).** Every individual assigned to the task
   issued a bump-tested, in-calibration personal 4-gas monitor; bump-test result logged
   with date/time/technician.
4. **Detector deployment — Layer 3 (perimeter).** Confirm building-level/egress
   detection is active and its alarm is distinguishable from Layer 1's local alarm.
5. **Ventilation readiness.** Confirm forced-ventilation equipment for the work area is
   present, functional, and tied into the SIS high-high trigger (§9.4) — not merely
   available for manual activation.
6. **SIS/interlock verification.** Functional test of the high-high alarm chain: alarm
   → evacuation signal → ventilation activation → work-permit interlock → dispatch
   notification (§9.5.3), tested end-to-end, not sensor-only.
7. **Communication check.** Confirm the emergency-tier alarm's external dispatch/CAD
   notification path is live and includes current SDS references for every chemical
   listed for the task — the direct, task-level enforcement of Tier II completeness that
   the facility-wide EPCRA filing process should also be catching, functioning as a
   second, task-specific check rather than relying solely on the annual Tier II filing
   cycle.
8. **Sign-off.** Task supervisor and site EHS/safety officer jointly sign off that items
   1–7 are complete before the work permit authorizing chemical introduction is
   activated. No chemical is introduced to the vessel until this sign-off exists.

This checklist structure directly targets the §9.1 "transient phase" gap: it makes
gas-detection deployment a **gating condition of the work permit** for exactly the kind
of task — legacy-vessel decommissioning cleaning — that routine, steady-state process-area
detection zoning would not automatically cover. **[HYPOTHESIS — prescriptive, this
dossier's proposed protocol]**

---

## Sources

[S-01] Case brief (`optimizeit/6a631bb1abda5_OptimizeIT_problem_statements.pdf`) —
stated root gap: absence of continuous online toxic gas detection for the decommissioning/
transient phase; explicit deliverable requirement for a "Continuous Online Gas Detection
and Monitoring Protocol."
[S-02] `optimizeit/case1-ames-goldsmith/04-chemistry.md` — H2S/NO2 formation chemistry,
gas-yield and pressurization estimates (§4.7), chemical incompatibility matrix (§4.10).
[S-03] `optimizeit/case1-ames-goldsmith/05-toxicology-ih.md` — exposure-limit table
(§5.5), knockdown mechanism (§5.1), olfactory fatigue (§5.2), enclosed-space dispersion
and near-source spike modeling (§5.7), responder-exposure pattern (§5.9).
[S-04] `optimizeit/case1-ames-goldsmith/03-incident-reconstruction.md` §5 — Tier II /
M2000A hazard-communication gap finding.
[S-05] `optimizeit/case1-ames-goldsmith/_research/lane7-gapfill.md` — Tier II omission
detail, 20-minute Google-search finding [VERIFIED, search-synthesis].
[S-06] General industry practice reference points (not independently re-verified in this
research pass, cited as standard practice per common process-safety engineering
convention): ISA-18.2, "Management of Alarm Systems for the Process Industries" (alarm
rationalization framework); ISA/ANSI general gas-detection system design guidance
(setpoint tiering referenced to recognized occupational exposure limits; electrochemical
vs. NDIR sensor selection principles). These are cited as general, widely documented
engineering conventions, not as directly-fetched primary-source quotations in this
research pass.
