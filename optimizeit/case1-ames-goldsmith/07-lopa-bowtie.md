# Chapter 7 — LOPA and Bow-Tie: Quantifying the Missing Layers of Protection

## Confidence & Provenance

**This chapter is our own authored analytical work product.** It applies standard Layer
of Protection Analysis (LOPA) methodology, per CCPS's *Layer of Protection Analysis:
Simplified Process Risk Assessment* and IEC 61511's risk-reduction framework, to the
scenarios developed in Chapter 6's HAZOP. It is a **prescriptive reconstruction of what
LOPA credit and independent protection layers (IPLs) should have existed** for this hazard
class, not a record of any LOPA Catalyst Refiners actually performed — no such study is in
the public record, and none is claimed here. The probability of failure on demand (PFD)
values assigned to each IPL below are **standard industry benchmark ranges drawn from
CCPS/ISA convention** (e.g., a basic process control system alarm responded to by an
operator ≈ 1×10⁻¹, a safety instrumented function ≈ 1×10⁻¹ to 1×10⁻⁵ depending on SIL
level, physical/passive containment and procedural controls in the 1×10⁻¹ to 1×10⁻² range)
— they are **not** facility-specific measured figures, because no such figures exist in
the public record for Catalyst Refiners. The tolerable frequency criterion used
(1×10⁻⁴/yr for a single-fatality scenario) is likewise a standard, widely cited
industry-risk-tolerance benchmark, not a Catalyst Refiners- or CSB-stated figure. Every
consequence-severity claim ties back to the confirmed casualty framing in
`03-incident-reconstruction.md` (2 fatalities, uncontested; 19–30+ hospitalized/treated,
range not point estimate; 7 first responders among the injured, well-corroborated) and the
reaction-chemistry bounds in `04-chemistry.md`. As with Chapter 6, entries marked
**[ANALYTICAL]** are our own risk-assessment judgment, not evidentiary claims about the
historical event.

---

## 1. From HAZOP to LOPA — Scenario Selection

Chapter 6 identified two central deviations: **2.1**, "Other Than intended chemical
introduced to vessel" (nitric acid + M2000A meeting unquantified Ag2S residue), and
**4.1**, "No detection of toxic atmosphere" (per the case brief, the facility lacked
continuous online toxic gas detection for this transient decommissioning phase). LOPA
takes the worst credible deviations from a HAZOP and quantifies, scenario by scenario,
whether the layers of protection standing between an initiating event and a specified
consequence reduce risk to a tolerable frequency. Three scenarios are developed below,
in descending order of severity and dossier relevance:

- **Scenario A (primary):** Uncontrolled acid-sulfide reaction releases H2S into the
  occupied building — the scenario that matches the confirmed incident outcome.
- **Scenario B:** Concentrated-acid local hot pocket drives the oxidative pathway,
  releasing NO2 in addition to H2S — treated per the dossier's standing NO2 caveat
  ([INFERRED]/chemically expected, not [VERIFIED] as an actually released species,
  `04-chemistry.md` §4.11) as a lower-confidence secondary scenario.
- **Scenario C:** Secondary exposure of responders/rescuers during the uninstructed
  rescue phase, driven by the Tier II hazard-communication gap.

---

## 2. Scenario A — Uncontrolled H2S Release into Occupied Space

### 2.1 Scenario definition

| Element | Description |
|---|---|
| **Hazard** | Concentrated HNO3 staged/introduced for legacy-vessel decontamination in contact with unquantified Ag2S-bearing "silver mud" residue |
| **Initiating event** | Nitric acid (and/or M2000A) introduced into the vessel without prior verification that residual content is acid-reactive sulfide — corresponds to HAZOP Deviation 2.1 |
| **Initiating event frequency** | No facility-specific frequency data exists. As a standard LOPA convention for a manual task performed as a discrete, non-routine decommissioning activity (not a continuously repeated production step), we adopt an order-of-magnitude estimate of **1 occurrence per task performed**, i.e., initiating-event likelihood is treated as certain conditional on the task being executed without the safeguards below — consistent with LOPA practice of treating a "human-initiated chemical addition without verification" step as effectively 1/demand rather than a background frequency [ANALYTICAL, standard LOPA convention for procedural initiating events, CCPS] |
| **Unmitigated consequence** | Rapid exothermic reaction (adiabatic ΔT bounded 48–714 °C, `04-chemistry.md` §4.6.2) generating H2S at a stoichiometric ceiling of ≈99 L/kg Ag2S reacted, realistic working range 10–100 L/kg (§4.7.1); pressurized venting into the occupied building atmosphere |
| **Consequence severity** | **Catastrophic — multiple fatality potential.** H2S is rapidly fatal at high airborne concentrations (acute CNS/respiratory toxicity, per the toxicology discussion referenced in Chapter 5); the confirmed outcome of this exact unmitigated pathway was 2 fatalities and a reported 19–30+ hospitalized/treated persons, with 7 first responders among the injured [VERIFIED, `03-incident-reconstruction.md`] |

### 2.2 Independent Protection Layers (IPLs)

| # | IPL | Type | Description | PFD (standard benchmark) | Basis |
|---|---|---|---|---|---|
| 1 | Residue characterization / reactive-hazard screening before chemical selection | Procedural (administrative) | Sampling and CAMEO/CCPS-style compatibility check before any chemical is approved for legacy-vessel cleaning | **1×10⁻¹** | Standard PFD range for a procedural/administrative control, CCPS LOPA convention |
| 2 | Engineered, rate-limited, diluted chemical addition (no bulk/gravity dump) | Engineering/procedural | Metered addition with rate limiting, replacing uncontrolled bulk introduction | **1×10⁻¹** | Procedural-engineering hybrid control, upper end of procedural PFD range |
| 3 | Continuous online toxic-gas (H2S) detection with automatic alarm | Basic process control system (BPCS)-class alarm, operator response | Fixed or portable H2S monitor scoped to the transient task, alarming to evacuate before occupied-space lethal concentration is reached | **1×10⁻¹** | Standard BPCS-alarm-plus-operator-response PFD, CCPS/ISA convention |
| 4 | Safety instrumented function (SIF): automatic isolation/venting-to-scrubber interlock on high H2S/pressure signal | Safety instrumented system (SIS) | Automatic response (e.g., emergency ventilation activation, area isolation) independent of human response, triggered by the detection layer | **1×10⁻² (SIL 1)** to **1×10⁻³ (SIL 2)**, per §5 below | IEC 61511 SIL-banded PFD convention |
| 5 | Exclusion zone / restricted occupancy during the task | Procedural (administrative) | Controlled-access zone limiting the population present during the highest-risk work window | **1×10⁻¹** | Standard administrative-control PFD range |
| 6 | Local exhaust ventilation / vent scrubbing at the vessel boundary | Passive/active engineering | Captures and treats gas at the point of release rather than allowing free venting into the building | **1×10⁻¹** to **1×10⁻²** depending on design maturity | Standard engineered-mitigation PFD range, CCPS |

**Note on independence.** LOPA credits only IPLs that are genuinely independent of the
initiating event and of each other. IPLs 1–2 act *upstream* of the reaction (preventive);
IPLs 3–6 act *downstream* (mitigative, reducing consequence given that the reaction has
already occurred). Per standard LOPA convention, a scenario is normally built around **one
preventive path and, separately, a mitigated-consequence path** — the ledger below
presents both for completeness, consistent with §4's bow-tie structure, but the
frequency calculation in §2.3 credits only the layers that would plausibly have existed as
independent, auditable protections for *this specific* transient decommissioning task, not
a maximal, unrealistic stacking of every listed IPL.

### 2.3 Mitigated frequency vs. risk tolerance

Using a conservative credit set — IPL 1 (reactive-hazard screening, 1×10⁻¹) and IPL 3
(toxic-gas detection with alarm/evacuation, 1×10⁻¹) as the two layers most directly
implicated by this dossier's central HAZOP deviations, with the initiating-event
likelihood treated as 1 per task (a single decommissioning cleaning event, occurring once
in the facility's operating history at this specific vessel):

**Mitigated event likelihood ≈ 1 (initiating event) × 1×10⁻¹ (IPL 1) × 1×10⁻¹ (IPL 3) =
1×10⁻² per task performed.**

Converted to an annualized frequency under the standard LOPA assumption of one such
decommissioning cleaning task being performed (a reasonable approximation for a one-time,
end-of-life decommissioning activity rather than a recurring production step), this
mitigated frequency (**~1×10⁻²/yr** for the single task-year in which the work was
performed) is **two orders of magnitude above** the commonly cited industry tolerable
frequency benchmark of **1×10⁻⁴/yr for a single-fatality scenario** (a standard corporate
risk-tolerance criterion widely used in CCPS-aligned LOPA practice; treated here as an
industry benchmark, not a Catalyst-Refiners-specific or CSB-stated figure) [ANALYTICAL —
standard benchmark, cited per CCPS convention]. **This is the central LOPA finding of this
chapter: even crediting two independent layers that plausibly should have existed for this
task, the residual risk remains roughly 100× above a standard single-fatality tolerability
threshold — meaning at least one additional independent layer (the SIS-class automatic
interlock, IPL 4, or the exclusion-zone/occupancy control, IPL 5) would be required to
close the gap to tolerable risk**, consistent with the multi-layer recommendation set
carried forward from Chapter 6.

Given the case brief's framing that continuous online toxic gas detection was in fact
**absent** for this transient phase [VERIFIED per case brief and Chapter 6 §4.1], the
credit for IPL 3 should, in a strict as-found reading, be **removed entirely** — leaving
only IPL 1 (itself unconfirmed as having existed) at 1×10⁻¹, yielding a mitigated
likelihood of **~1×10⁻¹/yr**, three orders of magnitude above the 1×10⁻⁴/yr tolerability
benchmark. This "as-found" calculation is the quantitative expression of why the incident
occurred essentially unmitigated: **the record supports crediting zero to one independent
protection layers against a catastrophic-severity scenario**, against LOPA practice that
would typically require three to four independent layers to bring a scenario of this
severity into tolerable range.

---

## 3. Scenario B — Oxidative-Pathway NO2 Co-Release (Secondary, Lower-Confidence)

| Element | Description |
|---|---|
| **Hazard/initiating event** | Same as Scenario A, but specifically the locally concentrated/hot acid pocket driving the oxidative sulfide-attack pathway (`04-chemistry.md` Eq. 2b, Eq. 3) |
| **Consequence** | Co-release of NO2 alongside H2S in the same building atmosphere, compounding acute respiratory toxicity |
| **Evidentiary status** | NO2 is **[INFERRED]** — chemically expected given concentrated/hot HNO3 in contact with reducing material — but **not [VERIFIED]** as an actually measured or reported released species in any open-source reporting reviewed for this dossier (`03-incident-reconstruction.md` §4; `04-chemistry.md` §4.11). This scenario is retained in the LOPA ledger for completeness because the underlying chemistry is well-supported, but **no consequence-severity claim in this dossier should treat NO2 exposure as a confirmed contributor to the 2 fatalities or the hospitalized/treated count** — that outcome is attributed to H2S, which is [VERIFIED] |
| **IPLs and PFD** | Identical layer structure to Scenario A (detection and mitigation layers do not distinguish gas species); no separate quantification is offered here beyond flagging that Scenario A's mitigated-frequency conclusion already bounds this scenario's risk, since Scenario B is a subset of the same unmitigated event |

---

## 4. Scenario C — Secondary Responder/Rescuer Exposure

| Element | Description |
|---|---|
| **Hazard** | Undecontaminated exposed workers and an occupied building atmosphere entered by rescuers/first responders without confirmed knowledge of the released chemical |
| **Initiating event** | Emergency response and rescue entry proceeding without the M2000A hazard data sheet, which responders reportedly located via an approximately 20-minute internet search during the active release rather than facility hazard documentation [VERIFIED, search-synthesis, `03-incident-reconstruction.md` §5] |
| **Consequence** | 7 first responders/EMS personnel among the injured, well-corroborated across sources [VERIFIED] |
| **IPL that failed** | EPCRA Tier II Emergency and Hazardous Chemical Inventory listing — M2000A was **not listed** [VERIFIED, search-synthesis]. Tier II reporting functions as a procedural/informational IPL specifically for emergency responders; its absence removed a layer that would otherwise have supported faster, better-informed PPE selection and decontamination protocol decisions |
| **PFD if present** | A properly maintained and locally distributed Tier II inventory functions similarly to a procedural IPL, credited in the **1×10⁻¹ to 1×10⁻²** range depending on how tightly it is integrated into the local emergency planning committee's own response procedures — [ANALYTICAL] estimate, not a cited CCPS figure specific to Tier II reporting |
| **Recommended layer** | Pre-staged, Tier-II-compliant hazard data packages held both on-site and with the Kanawha-Putnam Local Emergency Planning Committee, cross-referenced at dispatch |

---

## 5. Bow-Tie Diagram — Scenario A

```
                                    THREATS                                                                CONSEQUENCES
  ┌───────────────────────────────────────────┐                                          ┌───────────────────────────────────────────────┐
  │ T1: No residue characterization before     │                                          │ C1: H2S release into occupied building          │
  │     chemical selection (HAZOP 1.1)         │──┐                                    ┌──▶│     → acute toxic exposure, 2 fatalities         │
  │     Barrier B1: mandatory sampling/         │  │                                    │   │     [VERIFIED outcome]                          │
  │     CAMEO reactive-hazard screening         │  │                                    │   └───────────────────────────────────────────────┘
  └───────────────────────────────────────────┘  │                                    │
                                                   │                                    │   ┌───────────────────────────────────────────────┐
  ┌───────────────────────────────────────────┐  │        ┌──────────────────┐        │──▶│ C2: 19–30+ hospitalized/treated persons          │
  │ T2: Nitric acid selected for cleaning      │  │        │     TOP EVENT     │        │   │     (range, not point estimate) [VERIFIED]       │
  │     without compatibility check (HAZOP 1.2)│──┼───────▶│  Uncontrolled     │────────┤   └───────────────────────────────────────────────┘
  │     Barrier B2: reactive-hazard screening   │  │        │  exothermic acid- │        │
  └───────────────────────────────────────────┘  │        │  sulfide reaction,│        │   ┌───────────────────────────────────────────────┐
                                                   │        │  H2S release      │        │──▶│ C3: 7 first responders/EMS injured               │
  ┌───────────────────────────────────────────┐  │        │  (Eq.1a, §4.3)    │        │   │     via secondary/undecontaminated exposure      │
  │ T3: Acid + M2000A co-introduced,           │──┤        └──────────────────┘        │   │     [VERIFIED]                                   │
  │     uncontrolled rate/mixing (HAZOP 2.2–2.4)│  │                ▲                   │   └───────────────────────────────────────────────┘
  │     Barrier B3: metered/diluted addition,   │  │                │                   │
  │     engineered mixing                       │  │                │                   │   ┌───────────────────────────────────────────────┐
  └───────────────────────────────────────────┘  │                │                   └──▶│ C4: Community shelter-in-place, ~1-mi radius     │
                                                   │        HAZARD: concentrated           │     (schools, WVSU) [VERIFIED]                   │
  ┌───────────────────────────────────────────┐  │        HNO3 + unquantified             └───────────────────────────────────────────────┘
  │ T4: No pre-task hazard review triggered    │──┘        Ag2S residue in legacy
  │     for decommissioning phase (HAZOP §1.1) │            vessel
  │     Barrier B4: mandatory decommissioning-  │
  │     phase PHA/HAZOP (this dossier, Ch.6)    │                          MITIGATIONS / RECOVERY (right-hand barriers)
  └───────────────────────────────────────────┘            ┌───────────────────────────────────────────────────────────────┐
                                                              │ M1: Continuous online toxic-gas detection + alarm             │
                                                              │     (ABSENT for this transient phase — case brief) [VERIFIED] │
                                                              ├───────────────────────────────────────────────────────────────┤
                                                              │ M2: SIS-class automatic isolation/ventilation interlock        │
                                                              │     (not evidenced) — see §6 SIL discussion below              │
                                                              ├───────────────────────────────────────────────────────────────┤
                                                              │ M3: Exclusion zone / restricted occupancy                      │
                                                              │     (not evidenced)                                            │
                                                              ├───────────────────────────────────────────────────────────────┤
                                                              │ M4: Emergency response w/ Tier II hazard data pre-staged       │
                                                              │     (FAILED — Tier II omission, 20-min search under fire)      │
                                                              ├───────────────────────────────────────────────────────────────┤
                                                              │ M5: Scene decontamination before rescuer entry                 │
                                                              │     (not evidenced — 7 responders injured, consistent with gap)│
                                                              └───────────────────────────────────────────────────────────────┘
```

Reading the diagram: every left-hand barrier (B1–B4) that should have prevented the top
event is assessed in this dossier as **assumed absent or unconfirmed** — none is evidenced
in the public record. Once the top event occurred, every right-hand mitigation (M1–M5) is
either **confirmed absent** (M1, per the case brief) or **not evidenced / failed** (M2–M5,
with M4 confirmed failed via the Tier II gap). This near-total absence of both preventive
and mitigative barriers is the structural explanation, independent of any specific person's
decisions, for why this scenario escalated from a contained chemical incident to a
2-fatality, 19–30+-injured mass-casualty event.

---

## 6. IPL Ledger (Consolidated)

| IPL ID | Layer | Class | Independent of initiating event? | PFD (benchmark) | Status in this incident |
|---|---|---|---|---|---|
| IPL-1 | Residue characterization / reactive-hazard screening | Procedural | Yes | 1×10⁻¹ | Not evidenced as having existed |
| IPL-2 | Engineered rate-limited/diluted chemical addition | Engineering/procedural | Yes | 1×10⁻¹ | Not evidenced |
| IPL-3 | Continuous online toxic-gas detection + alarm | BPCS-class alarm | Yes | 1×10⁻¹ | **Confirmed absent for this transient phase** [VERIFIED, case brief] |
| IPL-4 | Automatic SIS interlock (isolation/ventilation on high-gas/pressure signal) | SIS (SIL 1–2) | Yes | 1×10⁻² to 1×10⁻³ | Not evidenced; recommended (§7) |
| IPL-5 | Exclusion zone / restricted occupancy | Procedural | Yes | 1×10⁻¹ | Not evidenced |
| IPL-6 | Local exhaust ventilation / vent scrubbing | Engineering | Yes | 1×10⁻¹ to 1×10⁻² | Not evidenced |
| IPL-7 | EPCRA Tier II hazard communication to responders | Procedural/informational | Yes | 1×10⁻¹ to 1×10⁻² | **Confirmed failed** — M2000A not listed [VERIFIED, search-synthesis] |
| IPL-8 | Scene decontamination before rescuer entry | Procedural | Yes | 1×10⁻¹ | Not evidenced; 7 responders injured is consistent with this gap [ANALYTICAL] |

---

## 7. SIL-Selection Discussion — The Toxic-Gas-Detection Interlock

The case brief's central instrumentation finding — "the facility lacked continuous online
toxic gas detection for this transient phase" — implies a safety instrumented function
(SIF) that should have existed: a toxic-gas detector (H2S, and ideally a broader
sulfide/acidic-fume sensor suite given the multi-species reaction chemistry in
`04-chemistry.md`) wired to an automatic protective action (area evacuation alarm at
minimum; automatic isolation/ventilation activation for a higher-integrity design),
independent of manual operator response.

**Consequence severity driving SIL target.** Per IEC 61511's risk-graph/LOPA-based
SIL-selection convention, the required SIL is set by the gap between unmitigated
consequence frequency and tolerable frequency, after crediting only genuinely independent
non-SIS layers. Given:

- **Consequence severity:** Catastrophic (confirmed multiple-fatality outcome for this
  exact scenario) — the highest severity band in standard risk matrices.
- **Non-SIS layer credit available:** at most one or two procedural layers (IPL-1, IPL-5)
  at ≈1×10⁻¹ each, neither confirmed to have existed.
- **Residual risk gap** (per §2.3): roughly two to three orders of magnitude above the
  1×10⁻⁴/yr tolerability benchmark even under generous crediting.

A gap of this size — two to three orders of magnitude, against a catastrophic-severity
consequence — places the required SIF at **SIL 2** under standard IEC 61511 banding
(SIL 1: 1×10⁻¹ to 1×10⁻², one order of magnitude of risk reduction; SIL 2: 1×10⁻² to
1×10⁻³, two orders; SIL 3: 1×10⁻³ to 1×10⁻⁴, three orders) [ANALYTICAL — standard IEC
61511 convention applied to this dossier's own frequency estimate, not a facility-specific
certified SIL determination, which would require a full LOPA/risk-graph exercise with
facility-specific data this dossier does not have]. A SIL 3 target would be defensible if
the non-SIS layer credit is reduced further (i.e., if IPL-1 and IPL-5 are also treated as
absent, consistent with the "as-found" calculation in §2.3), given the demonstrated
catastrophic outcome.

**Design implication carried forward.** A SIL 2 (at minimum) toxic-gas detection and
automatic-response interlock, scoped specifically to cover transient, non-routine
decommissioning tasks — not only steady-state process areas a legacy detector network may
have been designed around — is the headline instrumentation recommendation of this
chapter. **Chapter 9 (Instrumentation and Control System Design) develops the specific
sensor placement, voting logic, response-action design, and verification/proof-test regime
for this interlock in full detail**; this chapter's role is limited to establishing *why*
a SIL 2-class function is the appropriate target, from the LOPA risk-gap analysis above,
not to specify the instrumentation itself.

---

## 8. Summary Findings

1. **The scenario that actually occurred (Scenario A) is quantifiably far outside
   tolerable risk** under standard LOPA benchmarks, even before accounting for the
   confirmed absence of the toxic-gas-detection layer — the "as-found" mitigated
   frequency (~1×10⁻¹/yr) is roughly three orders of magnitude above the 1×10⁻⁴/yr
   single-fatality tolerability benchmark.
2. **No single missing layer explains the outcome; the record is consistent with a
   near-total absence of the independent protection layer structure** a scenario of this
   severity requires — this dossier does not identify a single point of failure, but a
   systemic absence of preventive (Node 1–2) and mitigative (Node 3–4) layers together.
3. **The Tier II hazard-communication gap (IPL-7) is the one failure in this ledger that
   is independently and directly [VERIFIED]**, not inferred — it is also the layer most
   directly tied to Scenario C's confirmed outcome (7 first responders injured) and is
   flagged for priority regulatory-gap treatment in this dossier's later chapters.
4. **The toxic-gas-detection interlock implied by the case brief's own framing warrants a
   SIL 2 target at minimum**, per the standard IEC 61511 risk-gap convention applied
   above — full instrumentation design is deferred to Chapter 9.

---

## Sources

[S-01] `optimizeit/case1-ames-goldsmith/_research/FACTS-BASELINE.md` — shared facts baseline and epistemic tagging convention.
[S-02] `optimizeit/case1-ames-goldsmith/03-incident-reconstruction.md` — casualty framing, Tier II finding (§5), work-permit/decision-sequence reconstruction (§3).
[S-03] `optimizeit/case1-ames-goldsmith/04-chemistry.md` — reaction pathways and numeric bounds (§4.2–4.9, §4.11 summary table).
[S-04] `optimizeit/case1-ames-goldsmith/06-hazop.md` — node-by-node HAZOP deviations feeding this chapter's scenario selection.
[S-05] `optimizeit/case1-ames-goldsmith/_research/lane6-precedent-tech.md` — CSB Safety Bulletin No. 2003-03-B; CSB Investigation Report No. 2002-01-I-AL, Georgia-Pacific Naheola Mill.
[S-06] CCPS, *Layer of Protection Analysis: Simplified Process Risk Assessment*, Center for Chemical Process Safety, AIChE — standard LOPA methodology and PFD-convention reference (general professional knowledge, not re-fetched this pass).
[S-07] IEC 61511, *Functional safety — Safety instrumented systems for the process industry sector* — SIL-banding and risk-reduction-factor convention (general professional knowledge, not re-fetched this pass).
[S-08] ISA-84 / IEC 61508 general SIL/PFD banding convention, as commonly cross-referenced with IEC 61511 in process-industry practice (general professional knowledge, not re-fetched this pass).
