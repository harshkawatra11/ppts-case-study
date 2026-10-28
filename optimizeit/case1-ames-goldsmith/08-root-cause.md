# Chapter 8 — Root Cause Analysis: Technical, Organizational, and Latent Failure

## Confidence & Provenance

This chapter builds directly on the verified factual record established in Chapter 3
(Incident Reconstruction) and the regulatory history in `_research/lane2-regulatory.md`.
**No CSB final report, OSHA citation, or coroner's report has been published as of the most
recent research date (2026-08-02).** Every causal claim below beyond the narrow set of
verified facts — the release mechanism, the Tier II omission, the prior citation history —
is this dossier's own engineering reconstruction, not an adjudicated finding of any agency.
Every claim is tagged **[VERIFIED]**, **[VERIFIED, search-synthesis]**, **[INFERRED]**, or
**[HYPOTHESIS]** per the dossier's standing convention (see `_research/FACTS-BASELINE.md`).
Where this chapter reasons past what is confirmed — which is most of the organizational and
latent-cause analysis, by the nature of root-cause work performed without an agency's
subpoena power or interview access — that reasoning is flagged plainly as **this dossier's
reconstruction**, built on named analytical frameworks (5-Why, fishbone, fault tree, Swiss
Cheese, STAMP-lite) applied to the verified fact pattern, and explicitly cross-checked
against the single closest documented structural analog: CSB's own investigation of the
2002 Georgia-Pacific Naheola Mill incident. No operator names, internal documents, permit
numbers, or dialogue are invented anywhere in this chapter.

Casualty framing used throughout, per Chapter 3: **2 fatalities** (uncontested)
**[VERIFIED]**; hospitalized/treated figures reported across five variants — 19, 21, 22,
~30, "30+" — with an unreconciled CSB case-page figure of "4 additional injuries"
**[VERIFIED, range not point estimate]**; **7 first responders/EMS personnel among the
injured**, well-corroborated **[VERIFIED]**.

---

## 1. The 5-Why Analysis

The 5-Why method is used here not as a single linear chain but as the organizing spine for
the fishbone and fault-tree sections that follow — each "why" surfaces a branch point where
more than one contributing factor could independently sustain the escalation to the next
level. **[INFERRED — this dossier's reconstruction throughout, grounded in verified facts
cited inline]**

**Why 1 — Why did workers die?**
Toxic gas — hydrogen sulfide (H2S) — was released into an occupied indoor workspace in
concentrations sufficient to cause rapid loss of consciousness and death. **[VERIFIED]**
A physician interviewed in post-incident coverage assessed the presentation as consistent
with "acute toxicity from hydrogen sulfide," noting workers "were unresponsive" and
required immediate CPR. **[VERIFIED]**

**Why 2 — Why was H2S released?**
Concentrated nitric acid (HNO3) contacted silver-sulfide-bearing residue ("silver mud,"
Ag2S) inside a legacy processing vessel, and/or a sulfur-bearing component of the
cleaning product "M2000A" contacted the acid; both are chemically sufficient, independently
or jointly, to generate H2S at the volumes and rate implied by the reported "violent
reaction." **[VERIFIED for the acid-and-sulfide-residue contact having occurred; INFERRED
for the exact stoichiometric split between the two candidate mechanisms — see Chapter 4]**
This is not novel or exotic chemistry: CSB's own 2004 Safety Bulletin (No. 2003-03-B)
documents 45 acid-on-sulfide H2S incidents from 1971–2004 alone, 32 of them fatal.
**[VERIFIED, CSB primary source]**

**Why 3 — Why were an acid and a sulfide-bearing residue brought into contact in the same
vessel?**
The vessel was undergoing cleaning/decontamination as part of decommissioning work; nitric
acid and the M2000A cleaning product were introduced into it as part of that task.
**[VERIFIED]** The vessel's residual "silver mud" content is the expected byproduct of the
plant's decades of EO-catalyst silver reclamation (Chapter 2, §2.3) — sulfur-poisoned
catalyst arriving as routine feedstock converts surface silver to Ag2S, which settles as
anode slime/legacy sludge in process vessels over the plant's operating life.
**[VERIFIED, general process chemistry]** Whether the specific vessel's residue content had
been characterized, quantified, or verified removed before the cleaning task began is
**not publicly reported** — no source names a job hazard analysis, a residue assay, or a
work permit for this specific task. **[VERIFIED absence of reporting — a genuine
information gap, not evidence either way]**

**Why 4 — Why was a chemical-compatibility review not performed (or not effective) before
the acid and cleaning agent were introduced to a vessel with unquantified sulfide-bearing
residue?**
This is the chapter's first genuinely organizational "why," and it cannot be answered from
public reporting with certainty. Three converging, independently verified facts make an
absent or inadequate pre-task hazard review a plausible — arguably the most parsimonious —
explanation, without requiring any invented narrative:

- (a) The cleaning product's own safety data sheet was **not available to first responders
  through facility hazard documentation** during the actual emergency — it had to be
  located via an approximately 20-minute Google search while the release was
  active. **[VERIFIED, search-synthesis, WV Gazette-Mail, May 7 2026]** A documentation
  regime capable of failing at the moment of highest operational stress (active emergency
  response) is not strong evidence that the same regime reliably surfaced the product's
  hazard profile at the comparatively lower-stress moment of routine pre-task planning.
- (b) The facility was roughly two months from permanent closure at the time of the
  incident, with workers informed of the closure schedule months in advance.
  **[VERIFIED]** Decommissioning is process-safety literature's recognized hazard blind
  spot: normal operating safeguards (interlocks, trained operating crews, live
  instrumentation) are progressively stood down while legacy residues remain in place,
  and schedule pressure to complete wind-down work before a fixed closure date creates a
  structural incentive to treat vessel-cleaning tasks as routine work orders rather than as
  the elevated-hazard activity they actually are. **[INFERRED — general decommissioning
  risk-literature pattern, e.g. IChemE Hazards 29, ASME J. Risk & Uncertainty; not a
  site-specific reported fact]**
- (c) The facility's own regulatory history shows a materially identical failure mode had
  already occurred once, in 2007: an employee pumping hydrogen peroxide into a vat was
  unaware a valve to a silver-oxide vat was open; the resulting uncontrolled reaction
  produced steam and hydrogen gas, hospitalizing four workers. **[VERIFIED, single-sourced
  pending cross-confirmation, per WCHS-TV]** The same causal pattern — uncontrolled mixing
  of a reactive stream into a silver-process vessel during vessel-adjacent work — recurred
  nearly two decades later with a different chemistry and a fatal outcome. A prior incident
  of the same structural type is evidence the facility's hazard-review process (whatever it
  was) did not durably close this failure mode after 2007.

**Why 5 — Why did the facility's safety-management system not durably close this recurring
failure mode after 2007, and not extend a decommissioning-specific hazard review to this
task in 2026?**
This is the terminal "why" for this analysis, and it is answered as an [INFERRED]
organizational-latent-cause hypothesis, not a proven fact: **the facility's
management-of-change and process-hazard-analysis practices, to the extent they existed,
were not structured to treat (i) legacy/decommissioning-phase vessel work, or (ii)
introduction of a new chemical agent to a vessel with unquantified residue content, as
triggers requiring a formal, documented chemical-compatibility review before work proceeded.**
This root-cause hypothesis is supported by, but not proven by:
- the Tier II hazard-communication gap for M2000A (a compliance failure of the same general
  character — hazard information not reaching the point where it was needed);
- the absence of any RMP filing found for this facility, on a substance class (H2S as a
  reaction byproduct of an unlisted precursor) that structurally evades RMP's threshold-
  quantity trigger — the same regulatory blind spot CSB identified nationally for NaHS/
  sulfide chemistry;
- the prior citation record showing repeated safety findings (2007 DOL inspection, 8
  violations; 2013 nitric acid spill; 2018 OSHA citation) without evidence of a
  facility-wide programmatic response that reached decommissioning-phase planning
  specifically.

**What this 5-Why analysis does not claim:** it does not identify who made the decision to
introduce the two chemicals, whether a written procedure existed and was or was not
followed, or whether any hazard review was attempted and simply failed. Those facts are not
publicly available. The terminal root cause stated above is this dossier's structural
hypothesis, explicitly labeled **[INFERRED]**, and should be revised if CSB's eventual final
report states otherwise.

---

## 2. Fishbone (Ishikawa) Diagram

Presented as a categorized causal-factor list rather than a literal drawn diagram, per the
"structured categorized list" format. Each factor is tagged for its evidentiary status.

```
                                   TOXIC GAS RELEASE INTO
                                   OCCUPIED WORKSPACE (2 dead,
                                   19-30+ treated, 7 responders injured)
                                            |
   PEOPLE ----------------------------------+
   - No named individual, supervisor, or permit-issuer publicly identified [VERIFIED absence]
   - [INFERRED] Reduced supervisory/procedural rigor plausible in a facility ~2 months from
     permanent closure (general decommissioning-phase pattern, not site-specific fact)
   - [VERIFIED] 2007 precedent: an employee "unaware a valve... was open" caused an
     uncontrolled reaction in a silver-process vessel — a human-factors/awareness failure
     of the same structural class

   PROCESS / PROCEDURE ---------------------+
   - [INFERRED] No evidence of a documented pre-task chemical-compatibility review for this
     specific cleaning task (absence of reporting, not a confirmed "no procedure existed")
   - [VERIFIED] Coverage states mixing nitric acid with M2000A during tank decommissioning
     was "not an unusual part of decontamination procedures" at the site historically —
     i.e., a routine, familiar task, which independently raises the risk that it was
     work-order-classified rather than treated as an elevated-hazard non-routine activity
   - [INFERRED] No decommissioning-specific PHA/HAZOP evidenced, as distinct from
     operating-phase procedures (see §5 STAMP-lite discussion below)

   EQUIPMENT ------------------------------+
   - [VERIFIED, from Chapter 2's engineering approximation] No confirmed gas detection,
     scrubber, or emergency vent on the legacy vessel — flagged as an unconfirmed-but-
     plausible equipment gap, not a proven absence
   - [VERIFIED] Case brief's premise of "no continuous gas detection" is consistent with
     the observed emergency-response timeline: first responders, not facility instruments,
     appear to have driven detection and evacuation timing
   - [INFERRED] Legacy vessel's age, materials, and internal condition undocumented at a
     facility in decommissioning — consistent with reduced engineering-control confidence
     for equipment nearing end of service life

   MATERIALS -------------------------------+
   - [VERIFIED] Silver mud (Ag2S-bearing residue) was present in the vessel; its specific
     quantity and characterization at time of task is not publicly reported [VERIFIED
     absence of reporting = unquantified legacy residue]
   - [VERIFIED, product-identity caveat noted] M2000A's exact formulation is not publicly
     disclosed; whether it contributed sulfur-bearing content to the reaction, or was
     simply co-present, is an open chemistry question (Chapter 4)
   - [VERIFIED] Concentrated nitric acid, a standard reagent at this facility, was
     introduced to the vessel

   ENVIRONMENT ------------------------------+
   - [VERIFIED] Reaction occurred inside an occupied building, not open ground — unlike the
     Naheola precedent (below), where the release occurred in unconfined outdoor space and
     still killed two contractors near a manway, indicating the hazard mode is dangerous in
     both confined and unconfined settings
   - [INFERRED] Whether the vessel/task area had forced ventilation is not confirmed

   MANAGEMENT SYSTEMS -----------------------+
   - [VERIFIED] Bonderite M2000A was not listed on the facility's federally required EPCRA
     Tier II Emergency and Hazardous Chemical Inventory — a hazard-communication management
     failure with a direct, documented operational consequence (20-minute emergency SDS
     search)
   - [VERIFIED] No RMP filing confirmed for this facility either way (open research gap,
     not proof of absence); nitric acid itself is not RMP-listed and H2S as a reaction
     byproduct structurally evades RMP's threshold-quantity trigger
   - [VERIFIED] Prior citation/incident pattern: 2007 DOL inspection (8 violations, 5
     serious, following a structurally similar silver-vessel mixing incident); 2013 nitric
     acid spill; 2018 OSHA citation ($0 penalty); 2015 corporate license revocation
     (administrative, not safety) — a pattern of repeated regulatory contact without
     publicly evidenced systemic remediation
   - [INFERRED] No evidence of a decommissioning-specific safety-management overlay distinct
     from steady-state operating procedures
```

---

## 3. Fault Tree Analysis (Text Form)

**Top event: Toxic gas (H2S) released into occupied workspace.**

```
TOP EVENT: H2S released into occupied workspace
  = Event A (acid contacts sulfide-bearing material)
    AND Event B (release not contained/controlled before reaching occupied space)

  EVENT A — Acid contacts sulfide-bearing material           [OR gate]
    A1: Nitric acid contacts unremoved/unquantified Ag2S "silver mud" residue
        in the legacy vessel [VERIFIED occurred; INFERRED as primary/sole
        mechanism vs. A2]
      A1 requires (AND):
        a. Residue not fully characterized or verified removed before task
           [VERIFIED absence of reporting on this point]
        b. No compatibility check flagged the acid-sulfide reaction risk before
           acid introduction [INFERRED]
    A2: M2000A itself contains sulfur-bearing component reacting directly with
        HNO3, independent of vessel residue [HYPOTHESIS — reporter inference,
        not a confirmed ingredient disclosure per Chapter 2 §2.7]
      A2 requires (AND):
        a. M2000A formulation includes reactive sulfur species [HYPOTHESIS,
           unconfirmed — SDS not publicly available]
        b. No compatibility check flagged this before combined use
           [INFERRED]
    (A1 and A2 are not mutually exclusive — both could contribute)

  EVENT B — Release not contained/controlled                 [OR gate]
    B1: No/inadequate local ventilation or scrubber capacity on the vessel
        headspace [INFERRED — unconfirmed equipment state, Chapter 2 sketch]
    B2: No continuous gas detection triggering early automated alarm/evacuation
        [VERIFIED per case-brief framing and response-timeline consistency —
        detection/evacuation appears driven by workers' own senses and
        self-evacuation, not instrumented alarm]
    B3: Reaction rate/volume exceeded any passive containment that did exist
        (a "violent reaction" per multiple sources) [VERIFIED characterization
        of reaction violence; INFERRED that this necessarily exceeded any
        engineering controls present]

  UNDERLYING BASE EVENTS (feeding both A and B branches):
    U1: No formal decommissioning-specific chemical-compatibility/PHA gate
        existed or was triggered for this task [INFERRED — root organizational
        cause, §1 above]
    U2: Tier II/hazard-communication gap for M2000A — a documentation failure
        of the same systemic character as U1, evidenced independently
        [VERIFIED]
    U3: Facility operating under schedule pressure of imminent permanent
        closure [VERIFIED closure timing; INFERRED causal link to reduced
        procedural rigor]
    U4: Prior structurally identical near-miss/incident (2007) did not produce
        a durable systemic fix [VERIFIED prior incident; INFERRED non-fix,
        from recurrence]
```

The fault tree makes explicit what the 5-Why narrative implies: the top event required
*both* a chemical-contact event (A) *and* a containment failure (B) — meaning at least two
independent layers of protection were absent or defeated simultaneously, not one. This is
the direct analytical bridge to the Swiss Cheese framing in §4.

---

## 4. Swiss Cheese Model — Aligned Holes

Reason's Swiss Cheese Model treats an accident as the alignment of failures across
independent defensive layers, none of which is individually sufficient to cause harm.
Mapped onto the verified fact pattern:

| Layer | Intended function | Status at Catalyst Refiners (2026-04-22) | Tag |
|---|---|---|---|
| **Chemical inventory / hazard communication** | Ensure responders and workers know what reactive substances are present and their hazards before/during an incident | M2000A absent from the required EPCRA Tier II inventory; responders sourced the SDS via a 20-minute internet search during the active release | [VERIFIED] |
| **Chemical-compatibility review before introducing a new agent to a legacy vessel** | Catch the acid-on-sulfide reaction risk before chemicals are combined | No evidence of a documented review for this task; residue characterization status unreported | [INFERRED — absence of evidence, structural gap] |
| **Continuous/automated gas detection** | Trigger early alarm and evacuation ahead of human sensory detection | No confirmed detection system on the vessel; response timeline consistent with worker self-evacuation and CPR by arriving responders, not instrumented pre-warning | [INFERRED, consistent with case-brief framing] |
| **Decommissioning-specific PHA/HAZOP** | Re-assess hazards specifically because operating-phase safeguards are being wound down | No evidence a decommissioning-phase-specific hazard review process existed or applied to this task, distinct from routine operating procedures | [INFERRED] |
| **Regulatory/programmatic correction after prior incidents** | Prevent recurrence of a previously-identified failure mode | 2007 incident (structurally identical: uncontrolled reactive mixing into a silver-process vessel) preceded the 2026 event by ~19 years without evident systemic closure | [VERIFIED prior incident; INFERRED non-closure] |

Any single intact layer above — a current Tier II listing that trained responders on
M2000A's hazards in advance; a documented compatibility check before acid introduction; a
functioning gas detector triggering automated evacuation; a decommissioning-specific hazard
review flagging the unquantified residue — could plausibly have interrupted the sequence
before it reached two fatalities. **That all were simultaneously absent or ineffective is
the Swiss Cheese finding: this was not a single-point failure, but a systemic one.**
**[INFERRED — synthesis of verified facts through this framework]**

---

## 5. STAMP-Lite: Control-Structure View

A compressed systems-theoretic framing, not a full STAMP/CAST analysis (which would require
interview access and internal documentation this dossier does not have):

- **Regulatory level (OSHA, EPA, CSB).** Safety constraint intended: hazardous-chemical
  facilities maintain current Tier II inventories, operate within PSM/RMP frameworks where
  applicable, and correct citation-identified deficiencies. **Control gap:** H2S as a
  reaction byproduct of an unlisted precursor (nitric acid, not itself RMP-listed) falls
  outside RMP's structural trigger — the same national-level gap CSB identified in its 2004
  NaHS bulletin and its Naheola report, where NaSH (the sulfide precursor) is not a
  PSM-listed "highly hazardous chemical" despite demonstrated reactive lethality.
  **[VERIFIED, CSB primary-source finding, applied by structural analogy to this incident —
  INFERRED as applicable here]**
- **Corporate level (Ames Goldsmith).** Safety constraint intended: consistent
  process-safety standards applied across all sites, including a WV subsidiary approaching
  closure. **Control gap:** a 2022 citation at a separate Ames Goldsmith New York facility
  for unlabeled pipelines creating nitric-acid/toxic-gas exposure risk for ~70 employees
  suggests the hazard-communication weakness may not be site-specific to WV but a broader
  corporate pattern. **[VERIFIED, separate facility, treated as corroborating pattern not
  proof of a common cause]**
- **Facility level (Catalyst Refiners plant management).** Safety constraint intended:
  site-specific procedures translate corporate/regulatory requirements into task-level
  controls, including Tier II filing accuracy and pre-task hazard review. **Control gap:**
  the Tier II omission and the apparent absence of a decommissioning-specific hazard-review
  gate are both facility-level control failures, evidenced directly (Tier II) or inferred
  from absence of contrary reporting (hazard review). **[VERIFIED for Tier II; INFERRED for
  hazard-review absence]**
- **Worker level.** Safety constraint intended: task execution follows verified-safe
  procedure; workers have current hazard information for materials they handle.
  **Control gap:** whoever introduced the two chemicals did so, per the available record,
  without documented evidence of a compatibility check — but this is the level with the
  least autonomy to have generated the gap; workers act on the information and procedures
  the levels above provide them. Placing primary responsibility at the worker level would
  be inconsistent with the systemic pattern documented above. **[INFERRED — analytical
  judgment, not a factual claim about any individual]**

**Where control was lost, in this dossier's reading:** predominantly at the facility level
(the immediate, proximate control gaps — Tier II, compatibility review, decommissioning PHA)
compounded by a regulatory-level structural gap (RMP's threshold-trigger blind spot for
reaction byproducts) that is not unique to this facility and has been flagged by CSB itself
in the 2004 bulletin as a national pattern.

---

## 6. The Georgia-Pacific Naheola Precedent — A Direct Structural Analog

CSB's Investigation Report No. 2002-01-I-AL (Georgia-Pacific Naheola Mill, Pennington, AL,
January 16, 2002 — 2 killed, 8 injured) is the closest documented precedent to this incident
in the entire comparative database, and its CSB-stated root causes map almost point-for-point
onto this dossier's inferred causal structure. **[VERIFIED, CSB primary source for the
Naheola findings themselves; the mapping to Ames Goldsmith is this dossier's own analysis]**

CSB's own language on Naheola: *"Good engineering and process safety practices were not
followed when joining the drain from the truck unloading station and the oil pit to the
acid sewer"* — no hazard review or management-of-change analysis was ever performed when an
acid stream and a sulfide-bearing (NaSH) stream were connected, years before the fatal
release. CSB's second finding: *"There was no management system to incorporate hazard
warnings about mixing [NaSH] with acid into process safety information"* — the
manufacturer's own MSDS warned explicitly of the acid-sulfide H2S hazard, but this
information never reached mill operating procedures or worker training.

The structural parallel to Catalyst Refiners: an acid stream (nitric acid) and a
sulfide-bearing material (Ag2S "silver mud") were brought into contact **without any
publicly evidenced hazard review specific to that pathway**, and hazard information about
one of the two reactive substances (M2000A) **did not reach the point where it was needed**
— in this case, emergency responders during the active release, rather than mill operators
during routine unloading at Naheola. Both incidents also occurred during non-routine,
maintenance-adjacent activity (a decommissioning-phase cleaning task here; routine tank-truck
unloading and oil-pit draining at Naheola) rather than steady-state production — reinforcing
the broader pattern this dossier's precedent research (Chapter 6/lane6) identifies across the
CSB's 45-incident NaHS/acid-sulfide dataset: this hazard mode concentrates in transitional,
maintenance, and cleaning operations, precisely because these are the operations most likely
to fall outside a facility's routine, already-reviewed process-safety envelope.

One further Naheola finding is directly relevant and should inform Chapter 13's framework:
the incident area at Naheola was **not covered by OSHA's PSM standard** — H2S is PSM-listed
but was not present in threshold quantity at the point of release, and NaSH (the precursor)
is not PSM-listed at all. The same regulatory blind spot applies to silver sulfide, nitric
acid at sub-threshold quantities, and a proprietary cleaner like M2000A at Catalyst Refiners.
**[VERIFIED for the Naheola regulatory finding; INFERRED as directly applicable to this
incident by structural analogy, not a confirmed regulatory-status finding for this specific
facility]**

---

## 7. Technical vs. Organizational/Latent Causes vs. Genuinely Unknown

**Technical (proximate) causes — [VERIFIED core mechanism, INFERRED exact mechanism split]:**
- Concentrated nitric acid contacted sulfide-bearing "silver mud" residue and/or a
  sulfur-bearing component of M2000A inside a legacy vessel, generating H2S at a rate/volume
  that overwhelmed whatever containment existed and reached an occupied workspace.

**Organizational and latent causes — [INFERRED, this dossier's reconstruction]:**
- Absence (or ineffectiveness) of a formal chemical-compatibility review before combining a
  new chemical agent with unquantified legacy vessel residue.
- Absence of a decommissioning-phase-specific hazard-review gate distinct from routine
  operating procedures, during a period of documented schedule pressure (closure ~2 months
  out).
- A hazard-communication management system that failed to keep M2000A on the required Tier
  II inventory — a failure with a directly observed operational consequence during the
  emergency response itself.
- A prior, structurally identical incident (2007) that did not produce durable programmatic
  closure of the underlying failure mode (uncontrolled reactive mixing into a silver-process
  vessel during vessel-adjacent work).
- A regulatory structure (RMP's threshold-quantity trigger) that structurally does not
  capture H2S generated as a reaction byproduct of two individually sub-threshold or
  unlisted precursors — a national-level gap CSB itself has flagged, not unique to this
  facility.

**What remains genuinely unknown, pending CSB's actual final report:**
- Who authorized the task, and what written procedure (if any) governed it.
- Whether a job hazard analysis or work permit existed and was or was not followed.
- The vessel's actual residue quantity/characterization status at the time the chemicals
  were introduced.
- M2000A's actual chemical formulation and whether it played a direct reactive role beyond
  co-presence.
- Whether the vessel had any gas detection, ventilation, or scrubber capacity.
- Whether NO2 was actually co-released (treated in this dossier as [INFERRED]/chemically
  expected only, never as confirmed — see Chapter 3 §4 and Chapter 4).
- Whether an RMP-triggering substance was present at this facility on any basis independent
  of this incident.

This chapter's root-cause conclusions should be understood as a structured, evidence-grounded
hypothesis built for the purposes of this case-competition dossier — directly useful for the
prescriptive framework in Chapter 13 — and not as a substitute for CSB's eventual
investigative findings, which carry subpoena power and interview access this analysis does
not have.

---

## Sources

[S-01] `_research/FACTS-BASELINE.md`, this dossier's shared facts baseline.
[S-02] `03-incident-reconstruction.md`, Chapter 3 — timeline, Contradiction Register, and
work-permit/decision-sequence reconstruction (primary internal source for this chapter).
[S-03] `_research/lane2-regulatory.md` — OSHA IMIS record 1359924.015 (directly fetched);
2007 DOL inspection detail (WCHS-TV, single-sourced); 2013 nitric acid spill (WVDEP
inspection-report account); 2015 license revocation; 2018 citation; RMP/Tier II findings.
[S-04] `_research/lane6-precedent-tech.md` — CSB Safety Bulletin No. 2003-03-B, "Sodium
Hydrosulfide: Preventing Harm" (Nov. 2004); CSB Investigation Report No. 2002-01-I-AL,
Georgia-Pacific Naheola Mill (Jan. 2003).
[S-05] `_research/lane7-gapfill.md` — Tier II/M2000A hazard-communication gap, WV
Gazette-Mail, published May 7, 2026 (search-synthesis; direct fetch returned HTTP 429).
[S-06] `02-plant-overview.md` — Chapter 2, silver/EO-catalyst refining process chemistry,
Ag2S "silver mud" formation mechanism, and the engineering-approximation vessel sketch.
[S-07] WV Public Broadcasting, physician interview on occupational safety, April 27, 2026
(as cited in Chapter 3, §1.2).
