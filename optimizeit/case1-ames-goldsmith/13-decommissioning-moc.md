# Chapter 13 — A Decommissioning-Phase Management of Change (MOC) Framework

## Confidence & Provenance

This chapter is prescriptive: it proposes a Management of Change framework for the
decommissioning phase of hazardous chemical facilities, built to close the specific gaps
identified in Chapter 8's root-cause analysis. It does not claim the proposed framework
was, or was not, in place at Catalyst Refiners — no internal procedure, work permit, or MOC
document for this facility has been publicly reported, and none is invented here. Every
reference to "what happened at Catalyst Refiners" is drawn from the verified fact pattern in
Chapters 2, 3, and 8, tagged **[VERIFIED]** or **[INFERRED]** per the dossier's standing
convention (`_research/FACTS-BASELINE.md`). The framework itself is this dossier's own
proposed design, informed by the general CCPS Guidelines for Management of Change (a
recognized industry reference cited generically, not as a facility-specific compliance
record) and by CSB's own recommendations from the Georgia-Pacific Naheola investigation
(Report No. 2002-01-I-AL), which are the closest documented regulatory precedent for exactly
this failure mode. No CSB final report on the 2026 incident exists yet; nothing in this
chapter should be read as anticipating or substituting for that report's eventual findings.

---

## 1. Why Decommissioning Is a Distinct MOC Hazard Class

Standard MOC programs — including the CCPS framework most process-safety-managed facilities
use as their baseline — are built around a steady-state operating envelope: a defined
process, defined equipment, defined operating procedures, and a stable workforce that
carries institutional knowledge of what each vessel has historically contained. Every one of
those stabilizing assumptions inverts during decommissioning:

- **Normal operating procedures and permits are being wound down, not maintained.**
  Decommissioning work is disassembly and closeout, not continuation of a reviewed process —
  yet it is frequently executed using the same work-order and permitting infrastructure built
  for routine production tasks, which was never designed to flag "this vessel's contents are
  no longer fully characterized." **[INFERRED — general decommissioning risk-literature
  pattern, e.g. IChemE Hazards 29 "Managing Process Safety in a Decommissioning Project";
  ASME J. Risk & Uncertainty Pt. B, "Practical Experience From Risks of Decommissioning of
  Petrochemical Facilities"]**
- **Institutional knowledge is actively leaving the building.** Staff attrition ahead of a
  confirmed closure date is a well-documented pattern; the people who best remember a
  vessel's process history are frequently the first to depart. At Catalyst Refiners, workers
  had been informed of the June 2026 closure months in advance **[VERIFIED]** — creating
  exactly this attrition dynamic in the weeks before the April 22 incident.
- **Schedule pressure creates an incentive to move fast, not to pause for review.** A
  facility with a fixed closure date has every incentive to complete decommissioning tasks
  on schedule; a task that has been performed "not an unusual part of decontamination
  procedures" historically **[VERIFIED, single-source characterization, Chapter 2 §2.7]**
  is precisely the kind of task most likely to be waved through as routine rather than
  re-scrutinized as elevated-hazard, even though the underlying conditions (residue
  characterization, safeguard availability) have changed.
- **Legacy equipment and residues are frequently unquantified.** This is not a hypothetical
  for this case: the vessel involved contained "silver mud," an Ag2S-bearing residue that is
  the expected accumulation product of decades of EO-catalyst silver reclamation
  **[VERIFIED, general process chemistry, Chapter 2 §2.3]** — but whether its quantity or
  composition had been characterized, sampled, or verified before the cleaning task began is
  **not publicly reported**, a genuine information gap this framework is built to close
  going forward, at any facility, regardless of what the eventual finding is for this
  specific incident.

Standard MOC treats "a change to the process" as the trigger. Decommissioning-phase MOC must
treat **the phase itself** — and specifically, any task involving a legacy vessel or
uncharacterized residue — as an automatic trigger, because the phase's own conditions (wound-
down procedures, departing staff, schedule pressure, unquantified legacy content) are the
hazard, independent of any single discrete "change."

---

## 2. The Proposed Decommissioning MOC Framework

The framework is structured as six sequential gates. Each gate is mapped explicitly to the
specific failure mode identified in Chapter 8 that it is designed to catch.

### Gate 1 — Scope-Freeze / Change-Classification Trigger

**Requirement:** Any task involving a legacy vessel, a piece of equipment with unknown or
incompletely documented process history, or any residue whose composition/quantity has not
been verified within a defined recency window, **automatically triggers a formal
Decommissioning MOC** — it cannot be dispositioned as routine maintenance, a standard work
order, or "historical practice" (i.e., "this has been done before" is explicitly disqualified
as a basis for skipping the gate).

**Failure mode this closes:** Coverage indicates mixing nitric acid with M2000A during tank
decommissioning was characterized as "not an unusual part of decontamination procedures" at
the site historically **[VERIFIED, single-source]**. A scope-freeze trigger removes
"historical routine" as an escape hatch — the fact that a task has been performed before
does not substitute for verifying that the specific vessel, on the specific day, still
matches the assumptions under which it was previously performed safely.

### Gate 2 — Mandatory Chemical-Compatibility Review + Residue Characterization

**Requirement:** Before any cleaning agent, acid, solvent, or other reactive chemical is
introduced into a legacy vessel, two sub-steps are mandatory and sequenced:
1. **Residue sampling/characterization** — a documented assay (even a coarse one: pH,
   sulfide-test-strip screen, or equivalent) of the vessel's actual contents where
   composition is not already verified within the recency window set in Gate 1.
2. **Formal chemical-compatibility review** — cross-referencing the sampled/known residue
   composition against every chemical proposed for introduction, using SDS data for both the
   residue class and the cleaning/process chemical, with sign-off required before chemical
   introduction proceeds.

**Failure mode this closes:** This is the direct organizational-cause finding of Chapter 8 —
concentrated nitric acid was introduced to a vessel containing sulfide-bearing "silver mud"
without any publicly evidenced compatibility review **[INFERRED, absence of evidence]**. Acid
contacting metal sulfide releasing H2S is not novel or obscure chemistry — it is CSB's
single best-documented reactive-hazard mode, with 45 tracked incidents and 32 deaths as of a
2004 bulletin published specifically to warn industry away from it **[VERIFIED, CSB primary
source]**. A mandatory, gated compatibility-review step, applied specifically because Gate 1
flagged this as legacy-vessel work, would have required this exact reaction pathway to be
evaluated on paper before the chemicals were combined in reality.

### Gate 3 — PHA-Before-Entry / Before-Chemical-Introduction, Decommissioning-Scoped

**Requirement:** A Process Hazard Analysis (or equivalent structured hazard review — HAZOP,
What-If, or Job Hazard Analysis of sufficient rigor) specific to the decommissioning task,
not inherited from the operating-phase PHA, must be completed and signed off before entry to
the vessel or before any chemical introduction, whichever occurs first. The nuclear
decommissioning sector treats this as standard practice — decommissioning-specific HAZOPs
are a mandatory, separate hazard-identification exercise, not a carry-over from the
operating-phase HAZOP **[VERIFIED as general nuclear-sector practice, per IAEA "Safety
Assessment for Decommissioning" guidance; applied here by analogy to a non-nuclear
decommissioning setting, INFERRED as directly transferable]**.

**Failure mode this closes:** CSB's own finding on the closest structural precedent,
Georgia-Pacific Naheola, was that *"good engineering and process safety practices were not
followed when joining the drain from the truck unloading station and the oil pit to the acid
sewer"* — no hazard review or MOC analysis was ever performed on that specific acid/sulfide
pathway **[VERIFIED, CSB primary source]**. A decommissioning-scoped PHA gate, applied to
this facility, would have required someone to formally ask "what happens if an acid is
introduced to this specific legacy vessel's actual contents" before the task proceeded —
rather than relying on the task's superficial similarity to previously "routine"
decontamination work.

### Gate 4 — Tier II / Hazard-Communication Currency Check

**Requirement:** As a standing MOC checklist item (not a separate, optional compliance
task), every chemical proposed for use in a decommissioning task is checked against the
facility's current EPCRA Tier II Emergency and Hazardous Chemical Inventory. If the chemical
is not listed, the MOC cannot proceed to approval until the Tier II filing is updated and the
chemical's SDS is confirmed accessible to on-site personnel and local emergency responders.

**Failure mode this closes:** This closes the single most concretely evidenced gap in the
entire incident record. Bonderite M2000A was **not listed on Catalyst Refiners' federally
required EPCRA Tier II inventory** **[VERIFIED, search-synthesis, WV Gazette-Mail, May 7
2026]**, and emergency responders reportedly located the product's SDS via a roughly
20-minute Google search **during the active, ongoing toxic release** **[VERIFIED, same
source]**. Gate 4 is designed to make this specific failure structurally impossible to repeat
without an active MOC bypass: it forces the Tier II check to occur at the point a chemical is
introduced into a new task, not left as a passive annual-filing exercise disconnected from
day-to-day task planning.

### Gate 5 — Sign-Off Authority and Independent Review

**Requirement:** Decommissioning MOC approval requires two signatures from separate roles:
(a) the task supervisor/engineer proposing the work, and (b) an independent reviewer with no
operational stake in the task's schedule — ideally a site EHS/process-safety role reporting
outside the decommissioning project's own schedule pressure. Neither signatory may also be
the person executing the physical task.

**Rationale:** This directly targets the schedule-pressure dynamic discussed in §1. A
facility approximately two months from permanent closure has structural incentive to treat
gate reviews as friction to be minimized; requiring a reviewer whose role is explicitly
insulated from the closure schedule is the standard organizational countermeasure to this
incentive, consistent with general process-safety-management independent-review practice.
**[INFERRED — standard PSM design principle, not a site-specific finding]**

### Gate 6 — Decommissioning-Specific "Unknowns Register"

**Requirement:** A living register, maintained for the duration of the decommissioning
project, listing every piece of legacy equipment for which full process history is not
available — explicitly including vessels whose residue content, prior chemical exposure, or
maintenance history is incomplete. Every item on the register is, by definition, automatically
subject to Gate 1's MOC trigger; the register cannot be closed out item-by-item without formal
sign-off that Gates 2–4 were each completed for that item.

**Failure mode this closes:** "Silver mud" sitting in a legacy vessel at a plant scheduled
for decommissioning is not, per Chapter 2's analysis, an anomaly requiring special
explanation — it is the *expected* residue of the plant's normal decades-long function
**[VERIFIED, general process chemistry]**. A facility this dossier's research indicates
processed sulfur-poisoning EO catalyst for years would predictably accumulate multiple such
vessels. An unknowns register converts "we generally know this kind of residue exists
somewhere" into an itemized, trackable list that a decommissioning project cannot complete
without addressing — closing the gap between institutional-level awareness of a hazard class
and task-level verification of a specific vessel's actual condition.

---

## 3. The Six-Gate Framework at a Glance

| Gate | Trigger / requirement | Failure mode in this incident it addresses | Evidentiary basis |
|---|---|---|---|
| 1. Scope-freeze / classification | Any legacy-vessel or unquantified-residue task auto-triggers formal MOC; "historical routine" is not a valid exemption | Task reportedly treated as "not unusual" historical practice | [VERIFIED, single-source characterization] |
| 2. Compatibility review + residue characterization | Sample/characterize residue; formally cross-check against every chemical to be introduced, before introduction | No evidenced compatibility review before nitric acid + M2000A were introduced to the Ag2S-bearing vessel | [INFERRED, absence of evidence; chemistry itself VERIFIED as CSB's best-documented reactive-hazard mode] |
| 3. Decommissioning-scoped PHA before entry/introduction | Independent hazard review specific to the decommissioning task, not inherited from operating-phase procedures | Naheola precedent: no MOC/hazard review ever performed on the specific acid/sulfide contact pathway | [VERIFIED, CSB primary source, Naheola report] |
| 4. Tier II / hazard-communication currency check | Every chemical checked against current Tier II filing before MOC approval | M2000A absent from Tier II inventory; SDS located via 20-minute emergency Google search | [VERIFIED, search-synthesis, WV Gazette-Mail] |
| 5. Independent sign-off | Two-signature approval, one insulated from schedule pressure | Facility ~2 months from closure; general schedule-pressure risk pattern in decommissioning literature | [INFERRED, general PSM design principle] |
| 6. Unknowns register | Living inventory of legacy equipment with incomplete process history; drives Gate 1 triggers | "Silver mud" as expected but apparently untracked legacy residue class | [VERIFIED underlying process chemistry; INFERRED tracking-gap] |

---

## 4. Comparison to Standard MOC (CCPS Guidelines)

The CCPS Guidelines for Management of Change (the general industry reference for MOC
program design) structure MOC around evaluating a *proposed change* — to equipment,
process chemistry, procedures, or organization — against the facility's established, current
process safety information, with technical review, authorization, and communication/training
before implementation. This is a robust model for a steady-state operating facility, but it
carries three assumptions that decommissioning breaks:

| Dimension | Standard MOC (CCPS) | Decommissioning MOC (this framework) |
|---|---|---|
| **Baseline assumption** | Current, validated process safety information exists to compare the change against | Baseline process safety information for legacy vessels/residues is frequently incomplete or stale — the framework must generate current data (Gate 2's characterization step) rather than assume it exists |
| **What counts as "a change"** | A discrete, identifiable modification to an established process | The *phase itself* is the elevated-hazard condition; even a task identical to prior practice is re-triggered because the vessel's actual current state can no longer be assumed unchanged (Gate 1) |
| **Institutional memory** | Assumed present in the operating workforce reviewing the change | Actively eroding as staff depart ahead of a confirmed closure date — the framework compensates with an explicit written register (Gate 6) rather than relying on individuals' recall |
| **Time horizon / incentive structure** | Ongoing operations, no fixed end-date pressure | Fixed closure date creates active pressure to complete work quickly — the framework responds with mandatory independent review insulated from that schedule (Gate 5) |
| **Hazard communication scope** | Assumed current for an operating facility under existing regulatory filings | Explicitly re-verified at the point of task planning, not left as a passive annual filing exercise (Gate 4) |

The core CCPS discipline — documented review, defined authorization, and communication
before implementation — is retained throughout this framework; what changes is where the
burden of proof sits. Standard MOC asks "does this change deviate from what we know to be
safe?" Decommissioning MOC must first ask "do we actually know what is safe here anymore?"
before the compatibility question can even be answered.

---

## 5. Applying the Framework Retrospectively — What It Would Have Required

Mapped directly onto the reported facts of April 22, 2026: had this framework been in force,
the decontamination task would have first required Gate 1 classification as legacy-vessel
work (given the vessel's role in decades of EO-catalyst processing, Chapter 2 §2.3); would
then have required Gate 2 residue characterization before any chemical was introduced,
surfacing the vessel's Ag2S content on paper before it was ever exposed to nitric acid in
practice; would have required a decommissioning-scoped PHA (Gate 3) evaluating the specific
acid-on-legacy-residue pathway, the exact review CSB found missing at Naheola; would have
forced M2000A's Tier II status to be checked and corrected before task approval (Gate 4),
independently closing the gap that left responders searching Google mid-release; and would
have required sign-off from a reviewer with no stake in hitting the June 2026 closure date
(Gate 5). **This is this dossier's own structural claim about what the proposed framework
would have required, not a claim about what specifically failed at Catalyst Refiners on
April 22, 2026 — those specific facts (who authorized the task, what procedure existed, why
it was or was not followed) remain unpublished and are treated in Chapter 8 as genuinely
unknown pending CSB's final report.**

---

## Sources

[S-01] `_research/FACTS-BASELINE.md` — dossier shared facts baseline.
[S-02] `08-root-cause.md`, Chapter 8 — root-cause analysis this framework is built to close
(5-Why, fishbone, fault tree, Swiss Cheese, STAMP-lite, Naheola comparison).
[S-03] `02-plant-overview.md`, Chapter 2 — silver/EO-catalyst refining process chemistry and
the "silver mud"/Ag2S residue-formation mechanism (§2.3), and the illustrative vessel-train
sketch (§2.5) flagging unconfirmed equipment/detection status.
[S-04] `_research/lane6-precedent-tech.md` — CSB Investigation Report No. 2002-01-I-AL,
Georgia-Pacific Naheola Mill (Jan. 2003); CSB Safety Bulletin No. 2003-03-B, "Sodium
Hydrosulfide: Preventing Harm" (Nov. 2004); IChemE Hazards 29 paper, "Managing Process
Safety in a Decommissioning Project"; ASME J. Risk & Uncertainty Pt. B, "Practical
Experience From Risks of Decommissioning of Petrochemical Facilities"; IAEA "Safety
Assessment for Decommissioning" guidance.
[S-05] `_research/lane7-gapfill.md` — Tier II/M2000A hazard-communication gap, WV
Gazette-Mail, published May 7, 2026 (search-synthesis; direct fetch returned HTTP 429).
[S-06] CCPS (Center for Chemical Process Safety), Guidelines for Management of Change for
Process Safety — cited generically as the industry-standard MOC reference framework, not as
a facility-specific compliance record for Catalyst Refiners.
