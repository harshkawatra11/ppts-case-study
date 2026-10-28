# Chapter 6 — HAZOP: The Decommissioning-Phase Study That Should Have Been Performed

## Confidence & Provenance

**This chapter is our own authored analytical work product, not a record of any HAZOP
Catalyst Refiners actually performed.** No source in this dossier's research base — CSB,
OSHA, WVDEP, or press — reports that a HAZOP, PHA, job hazard analysis, or any formal
hazard-identification exercise was conducted for the vessel-decontamination task that
released H2S on April 22, 2026 [VERIFIED — absence confirmed, per `03-incident-
reconstruction.md` §3.1]. Nothing is known about what pre-task review, if any, the
facility actually carried out. What follows is a **prescriptive, retrospective HAZOP** —
the node-by-node study a competent process-safety team should have run before authorizing
acid-based cleaning of a legacy silver-refining vessel — constructed using the verified
incident facts (`03-incident-reconstruction.md`), the reaction chemistry and numeric
bounds established in `04-chemistry.md`, and the structural precedent of CSB Safety
Bulletin 2003-03-B and CSB Investigation Report 2002-01-I-AL (Georgia-Pacific Naheola)
[`_research/lane6-precedent-tech.md`]. Every deviation, cause, consequence, and safeguard
entry below is engineering judgment applied to a real hazard class (acid-on-sulfide H2S
generation during cleaning/decommissioning operations), not a claim about specific
Catalyst Refiners documents, personnel, or decisions. Where an entry states a safeguard
as "assumed absent," that is an inference from the Tier II hazard-communication gap
[VERIFIED, search-synthesis, `03-incident-reconstruction.md` §5] and the general absence
of any reported detection/interlock system for this task — not a confirmed negative
finding about the facility's actual equipment inventory, which remains unknown.

All node/deviation entries use the epistemic tags defined in the dossier baseline where a
factual claim underlies the entry; entries that are purely our HAZOP judgment are marked
**[ANALYTICAL]** and are not evidentiary claims about the historical event.

---

## 1. HAZOP Scope, Method, and Node Definition

### 1.1 Why a decommissioning-specific HAZOP, not a standard operating-phase HAZOP

Standard operating-phase HAZOPs at a working silver-refining plant would reasonably treat
vessel contents, temperatures, and flows as characterized, instrumented process streams.
Decommissioning inverts nearly every one of those assumptions: process instrumentation is
being progressively de-energized or removed, operating crews are frequently thinned or
reassigned ahead of a closure date, standard operating procedures written for production
no longer describe the task being performed, and legacy vessels hold residues that were
never chemically characterized because they were never meant to be handled again
[ANALYTICAL, consistent with the general decommissioning-risk-category literature cited
in `_research/lane6-precedent-tech.md` §3 — IChemE Hazards 29, ASME decommissioning-risk
paper, IAEA decommissioning-safety-assessment guidance]. The IAEA's guidance on this point
is explicit and directly transferable outside the nuclear sector: decommissioning-phase
hazard reviews are treated as a **mandatory, standalone exercise**, not an inheritance
from the operating-phase PHA. CSB's own Georgia-Pacific Naheola finding — "no management
system to incorporate hazard warnings about mixing [sulfide] with acid into process
safety information," and no MOC review ever performed on the connection that ultimately
killed two contractors — is the closest documented precedent for exactly this failure
mode: a hazard that was chemically well-understood in the abstract (sulfide + acid → H2S)
but never subjected to a site-specific review at the point where it actually became
possible [VERIFIED, CSB Investigation Report 2002-01-I-AL].

Because the facility was scheduled for closure in June 2026 and workers had been informed
months in advance [VERIFIED, `03-incident-reconstruction.md` §1.1], this incident sits
squarely inside the decommissioning-risk category identified as a distinct hazard class
in the precedent literature, and the HAZOP below is scoped to that category specifically —
not to Catalyst Refiners' (unknown) steady-state process HAZOP, which may or may not have
existed and is outside this chapter's scope.

### 1.2 Method

This study follows standard HAZOP methodology (IEC 61882 / CCPS *Guidelines for Hazard
Evaluation Procedures*): a **guideword** (No/Not, More, Less, As Well As, Part Of,
Reverse, Other Than) is applied systematically to each relevant **process parameter**
(flow, composition, concentration, temperature, pressure, level, detection/instrument
signal) at each defined **node**, generating a **deviation**. For each deviation with a
credible cause, the study records existing/assumed safeguards, the resulting consequence,
and a recommended action. Consequence severity is qualitatively ranked (Minor / Serious /
Major / Catastrophic) using the toxicological outcome established elsewhere in this
dossier (H2S acute lethality; the confirmed 2-fatality, 19–30+-injured outcome band per
`03-incident-reconstruction.md`) as the calibration anchor for "Catastrophic."

### 1.3 Node definitions

| Node | Boundary | Design intent |
|---|---|---|
| **Node 1 — Chemical selection and staging** | From procurement/storage of nitric acid and Bonderite M2000A through their positioning at the decommissioning worksite, up to but not including introduction into the vessel | Ensure the correct, characterized cleaning chemistry is selected, verified compatible with actual vessel contents, and staged with appropriate containment before any addition begins |
| **Node 2 — Introduction of cleaning agent(s) to the legacy vessel** | From the point acid and/or M2000A are added to the vessel through initial contact with residual vessel contents | Deliver cleaning chemistry into the vessel at a controlled rate, composition, and quantity matched to a known, bounded reaction potential |
| **Node 3 — Reaction and venting inside the vessel** | From initial chemical contact through gas generation, pressurization, and venting/relief behavior at the vessel boundary | Contain or safely relieve any reaction products without uncontrolled, undirected release to the work area |
| **Node 4 — Atmospheric release into the occupied building** | From the vessel boundary (hatch, seal, relief path, rupture) into the general building atmosphere occupied by workers | Detect, alarm, and evacuate before occupied-space toxic concentrations are reached; this node is where injury/fatality outcomes are actually determined |

---

## 2. Node 1 — Chemical Selection and Staging

| # | Guideword | Parameter | Deviation | Cause(s) | Consequence | Existing/Assumed Safeguard | Recommended Action |
|---|---|---|---|---|---|---|---|
| 1.1 | No/Not | Characterization | No characterization of vessel residual contents performed before chemical selection | Legacy vessel from a closed process line; residue ("silver mud") never sampled/assayed because it was never scheduled for re-processing [INFERRED, consistent with the physical/chemical description of Ag2S-bearing residue as a legacy byproduct, `04-chemistry.md` §4.1] | Cleaning chemistry selected without knowledge that vessel contains Ag2S — sets up Node 2's central hazard | **Assumed absent** — no evidence of a pre-task sampling/assay step [ANALYTICAL] | Mandatory residue sampling and reactive-hazard screening (CAMEO/CCPS Chemical Reactivity Worksheet cross-check, per `04-chemistry.md` §4.10) before any cleaning chemical is approved for a legacy vessel |
| 1.2 | Other Than | Chemical selected | Nitric acid (a strong mineral acid and oxidizer) selected as a cleaning/dissolution agent for a vessel with unassessed sulfide content | Nitric acid is a standard, routinely available reagent elsewhere in this plant's normal silver-refining process (dissolving base metal from feedstock) [INFERRED, `03-incident-reconstruction.md` §3.2.1], making its selection for decommissioning cleaning unsurprising and procedurally "normal" even though the vessel's specific contents were different in kind from routine process material | Introduces a strong acid/oxidizer into a vessel later found to contain acid-reactive sulfide — the root cause of the entire top event | **Assumed absent**: no reactive-hazard screening step distinguishing "acid used on known process streams" from "acid used on unassessed legacy residue" [ANALYTICAL] | Require a documented compatibility check against CAMEO's "Sulfides, Inorganic" reactive-group data (`04-chemistry.md` §4.10) any time a strong acid is proposed for use on unsampled legacy residue |
| 1.3 | As Well As | Chemicals present | Nitric acid **and** Bonderite M2000A staged/introduced together (or in close sequence) rather than one chemistry alone | Cleaning task plausibly called for a two-step acid-rinse-plus-surfactant-degrease sequence [INFERRED, `03-incident-reconstruction.md` §3.2.2] | Co-presence of an alkaline surfactant cleaner and concentrated acid creates an additional exothermic neutralization pathway (`04-chemistry.md` §4.6.1) layered on top of the acid-sulfide reaction, raising net exotherm and unpredictability | **Assumed absent** — no evidence a combined-chemical compatibility review was performed | Sequence acid and alkaline-cleaner steps with mandatory neutralization/rinse/verification between them; never co-introduce both into an unsampled vessel |
| 1.4 | No/Not | Hazard documentation (Tier II) | Bonderite M2000A not listed on the facility's EPCRA Tier II Emergency and Hazardous Chemical Inventory | Regulatory/administrative gap in hazard communication [VERIFIED, search-synthesis, WV Gazette-Mail 5/7/2026, `03-incident-reconstruction.md` §5] | On-site personnel, and later first responders, lacked ready access to M2000A's hazard data; plausibly extends upstream to absent pre-task hazard review (§3.2.3 of the incident-reconstruction chapter) [INFERRED] | **Confirmed absent** [VERIFIED] | Close the Tier II gap; extend EPCRA §312 compliance audits to every product used in decommissioning work, not only steady-state process chemicals |
| 1.5 | Less | Supervisory/engineering review | Reduced procedural rigor and supervisory attention typical of a facility approaching a announced closure date | Decommissioning-phase staffing and attention patterns [INFERRED — general process-safety literature pattern, not incident-specific, `03-incident-reconstruction.md` §3.2.3(b)] | Selection and staging decisions made with less independent check than would occur in steady-state operations | **Assumed reduced, not absent** [ANALYTICAL] | Formal decommissioning PHA/HAZOP requirement (this chapter) triggered automatically by closure announcement, independent of routine operating-phase review cadence |

---

## 3. Node 2 — Introduction of Cleaning Agent(s) to the Vessel

| # | Guideword | Parameter | Deviation | Cause(s) | Consequence | Existing/Assumed Safeguard | Recommended Action |
|---|---|---|---|---|---|---|---|
| 2.1 | **Other Than** | Chemical introduced to vessel | **Concentrated nitric acid and M2000A introduced into a vessel actually containing Ag2S-bearing "silver mud," rather than the vessel content the cleaning task assumed** | Node 1's characterization failure; central deviation of this HAZOP | **Uncontrolled exothermic acid-sulfide reaction, generating H2S (Pathway B, `04-chemistry.md` §4.3) and, in locally hot/concentrated pockets, NO/NO2 and elemental sulfur/sulfate via the oxidative pathway (Pathway A, §4.2)**; adiabatic ΔT bounded at 48–714 °C depending on local mixing (§4.6.2); stoichiometric H2S yield up to ≈99 L/kg Ag2S reacted, realistic working range 10–100 L/kg (§4.7.1) | **None identified** — no vessel-content verification step is evidenced anywhere in the record | Positive vessel-content verification (sampling + CAMEO/CCPS reactive-hazard cross-check) as a hard hold point before any chemical addition; treat as equivalent to a line-break/confined-space permit prerequisite |
| 2.2 | More | Concentration (acid) | Acid introduced at full/undiluted concentration rather than a diluted, controlled-addition protocol | No engineered dilution/quench step (`04-chemistry.md` §4.8, "no dilution/quench step" as a driver of violent reaction rate) | Higher local exotherm and faster reaction rate; pushes local chemistry toward the oxidative, NO2-forming, higher-heat-release pathway (§4.4) | **Assumed absent** | Engineered metered/diluted addition with rate limiting, analogous to controlled hydrometallurgical leach conditions (150 °C/11 atm/2× stoichiometric excess under process control, per Holloway et al. 2004, `04-chemistry.md` §4.2) — or, if that level of control is infeasible for a decommissioning task, do not perform in-vessel acid cleaning on unsampled sulfide-bearing residue at all |
| 2.3 | More | Rate of addition | Acid added faster than any local mixing/heat-dissipation capacity of the static, unstirred legacy vessel | No forced mixing or temperature control in a legacy tank not engineered for this reaction (`04-chemistry.md` §4.3, factor 2) | Sharp local concentration/temperature gradients; "patchy," localized violent reaction fronts rather than a slow, even reaction (§4.8) | **Assumed absent** | Rate-limited addition (e.g., metered pump with a maximum flow interlock) rather than bulk/gravity addition into a static vessel |
| 2.4 | Less | Mixing | No forced mixing/agitation during chemical addition | Legacy vessel not equipped/engineered for a controlled leach reaction (§4.2, contrasted against Holloway et al.'s stirred-reactor conditions) | Local hot pockets reach the high end of the adiabatic ΔT range (up to ≈714 °C) even while bulk vessel temperature stays low; favors NO2-forming chemistry locally and unpredictable, patchy H2S release | **Assumed absent** | Do not perform acid-based in-vessel cleaning without engineered mixing where sulfide content cannot be excluded |
| 2.5 | Part Of | Reaction extent | Only part of the sulfide inventory reacts via the oxidative (non-H2S) pathway; the remainder reacts via direct protonation, releasing H2S | Mixed-pathway chemistry inherent to an uncontrolled, poorly mixed introduction (`04-chemistry.md` §4.3, "mixed-pathway model") | Even partial conversion via Pathway B releases meaningful H2S volume — 10–100 L/kg is described as a "realistic working range," not a worst case | **None** | Treat *any* nonzero sulfide content as sufficient for a credible H2S-release scenario; do not rely on assumptions that only "complete" reaction is hazardous |

---

## 4. Node 3 — Reaction and Venting Inside the Vessel

| # | Guideword | Parameter | Deviation | Cause(s) | Consequence | Existing/Assumed Safeguard | Recommended Action |
|---|---|---|---|---|---|---|---|
| 3.1 | More | Pressure | Headspace pressure rises faster than the vessel's passive venting capacity | Gas generation (H2S plus steam/NOx) outpaces any venting a legacy, non-instrumented tank provides (`04-chemistry.md` §4.7.2 — illustrative case: 5 kg Ag2S reacted into a 1 m³ headspace at 350 K yields ≈0.58 atm of H2S partial pressure alone, before steam/NOx contribution) | Forceful, undirected venting through a hatch, seal, or rupture — consistent with press characterization of a "violent reaction" (`03-incident-reconstruction.md` §1.2) | **Assumed absent** — no evidence of engineered relief sizing for this reaction scenario, because the reaction itself was not anticipated (Node 1 failure) | Any legacy vessel proposed for acid-based cleaning should have relief/venting capacity re-evaluated against a bounding acid-sulfide reaction scenario, not merely inherited from its original process design basis |
| 3.2 | More | Temperature | Runaway/self-accelerating local heating | Positive-feedback loop: exothermic neutralization and oxidative sulfide chemistry raise local temperature, which favors the more exothermic oxidative pathway, which releases more heat (`04-chemistry.md` §4.8, "autocatalytic/self-accelerating heating," [HYPOTHESIS/ANALYTICAL] general reaction-engineering pattern) | Accelerating reaction rate and gas evolution rate, compressing the time available for any manual intervention | **Assumed absent** | Time-temperature or pressure-rate trip (even a simple mechanical/pneumatic relief-plus-alarm) as a minimum passive safeguard on any vessel undergoing chemical cleaning of uncharacterized residue |
| 3.3 | As Well As | Secondary reaction | H2S generated in the vessel reacts further with residual/fuming HNO3 "with incandescence" (a self-sustaining, light- and heat-producing reaction, per CAMEO's nitric acid datasheet) as it evolves past liquid-phase acid on its way out | Both reactants co-present in a single confined space with no separation (`04-chemistry.md` §4.9) [HYPOTHESIS/INFERRED — general chemical fact about the HNO3/H2S pair, applicability to this vessel's internal gas-phase chemistry inferred, not measured] | A further, independent contributor to reaction violence and to NO2 generation, beyond the primary sulfide chemistry | **None identified** | Reactive-hazard screening (Node 1) should explicitly flag gas-phase HNO3/H2S incompatibility, not only the liquid-phase acid/sulfide reaction |
| 3.4 | No/Not | Containment | No secondary containment or scrubbing capacity between the vessel headspace and the general building atmosphere | Vessel was a legacy piece of process equipment, not a unit engineered with a dedicated vent scrubber or flare for this task | Any gas that vents from the vessel enters the occupied building directly — this deviation is what converts a contained chemical incident (Node 3) into a mass-casualty toxic-release incident (Node 4) | **Assumed absent** | Portable/temporary local exhaust ventilation and, ideally, a wet scrubber or carbon capture stage should be a standard control for any acid-cleaning task on sulfide-bearing legacy vessels, not an optional add-on |

---

## 5. Node 4 — Atmospheric Release into the Occupied Building

| # | Guideword | Parameter | Deviation | Cause(s) | Consequence | Existing/Assumed Safeguard | Recommended Action |
|---|---|---|---|---|---|---|---|
| 4.1 | **No/Not** | Detection | **No detection of the resulting toxic atmosphere before workers were exposed** — per the case brief, "the facility lacked continuous online toxic gas detection for this transient phase" | Decommissioning-phase instrumentation stand-down (a general pattern in this hazard class, `_research/lane6-precedent-tech.md` §3) combined with the reaction itself not being anticipated (Node 1); no fixed H2S monitors evidenced for this task-specific, transient operation | Workers received no advance warning; onset was reported as rapid ("unresponsive," CPR administered on arrival — `03-incident-reconstruction.md` §1.2, §1.3) consistent with acute, high-concentration H2S exposure with essentially no detection lead time | **Confirmed absent for this transient phase**, per case brief framing; extent of any fixed building-wide detection is otherwise unreported | Continuous online toxic-gas (H2S, and general VOC/oxidizer) detection specifically scoped to cover transient, non-routine decommissioning tasks — not only the steady-state process areas a legacy fixed-detector network may have been designed for. Full SIL-selection discussion carried to Chapter 7 §5 and instrumentation design to Chapter 9 |
| 4.2 | Less | Warning time | Warning time approaches zero given the "violent"/rapid characterization of the reaction and the absence of any detection instrument to shorten the human-perception-to-response gap | Combination of 3.1–3.3 (fast, self-accelerating reaction) and 4.1 (no detection) | Workers and nearby co-workers exposed to acutely toxic concentrations before evacuation could begin; consistent with the confirmed 2-fatality outcome and 7 first-responders among the injured (secondary exposure during rescue/response) [VERIFIED, `03-incident-reconstruction.md` Confidence & Provenance section] | **Assumed absent/inadequate** | Detection-to-alarm latency must be engineered to precede the fastest credible reaction rate identified in Node 3, not merely meet a generic facility-wide response time |
| 4.3 | More | Occupancy | Building occupied by workers and co-workers at the time of release, with no exclusion zone established for the cleaning task | Standard workplace occupancy pattern; no evidence a restricted/controlled-access zone was established around the decommissioning task | Widens the population exposed beyond the immediate task crew — consistent with the reported hospitalized/treated range of 19–30+ persons, not only the two fatalities [VERIFIED, range per `03-incident-reconstruction.md` §Confidence & Provenance] | **Assumed absent** | Establish a controlled-access/exclusion zone with restricted occupancy for any acid-based cleaning task on unsampled legacy vessel content, sized to the plausible worst-case gas volume estimated in Node 3 |
| 4.4 | As Well As | Secondary exposure | First responders and rescuing co-workers exposed in addition to the initial task crew | Absence of scene decontamination protocols before rescue entry — the same "second responder becomes a second victim" pattern documented at Georgia-Pacific Naheola (paramedics exposed transporting undecontaminated victims) and in multiple H2S precedent cases (`_research/lane6-precedent-tech.md` §1, §2.2) [ANALYTICAL, precedent-based inference — not a specific finding about this incident's responder protocols] | 7 first-responders/EMS personnel among the injured [VERIFIED, well-corroborated across sources] | **Unknown/not evidenced** | Emergency response plan should mandate scene decontamination and respiratory protection for entering rescuers before contact with exposed victims, per CSB's own Naheola-driven recommendation that ATSDR/medical-response guidance recognize secondary off-gassing risk |
| 4.5 | Other Than | Hazard information available to responders | Responders reportedly located M2000A's safety data sheet via an approximately 20-minute internet search during the active release, rather than from facility hazard documentation | Tier II omission (§1.4 above) [VERIFIED, search-synthesis, `03-incident-reconstruction.md` §5] | Delayed responder situational awareness — affects triage, PPE selection, and decontamination protocol decisions during the response window | **Confirmed absent** | EPCRA Tier II compliance audit and a facility-held, pre-staged hazard data package for every decommissioning-task chemical, cross-referenced to local emergency planning committee records |

---

## 6. Cross-Node Synthesis — The Two Central Deviations

Two deviations, one at Node 2 and one at Node 4, are the load-bearing findings of this
HAZOP, and this dossier treats them as the central analytical contribution of the chapter:

**Deviation 2.1 — "Other Than intended chemical introduced to vessel."** The entire
consequence chain downstream of this deviation — the H2S generation chemistry bounded in
`04-chemistry.md`, the pressurization and venting behavior in Node 3, and the ultimate
toxic release in Node 4 — is a direct function of a single upstream failure: nitric acid
and M2000A were introduced into a vessel whose actual contents (Ag2S-bearing silver mud)
did not match the content the cleaning task's chemistry was suited for. This is precisely
CSB's own root-cause language from Georgia-Pacific Naheola — "good engineering and process
safety practices were not followed" when an acid stream and a sulfide-bearing stream were
allowed to meet without a hazard review ever having assessed that specific pathway
[VERIFIED, CSB Investigation Report 2002-01-I-AL]. Every downstream safeguard in Nodes 3
and 4 is, in HAZOP terms, a **layer of protection against a hazard that should have been
prevented at Node 1/2 in the first place** — which is exactly the LOPA framing carried
into Chapter 7.

**Deviation 4.1 — "No detection of toxic atmosphere."** Per the case brief's own framing,
adopted here as the load-bearing instrumentation gap: the facility lacked continuous
online toxic gas detection for this transient decommissioning phase. This deviation is
independently significant even if Deviation 2.1 had somehow been caught later, because it
is the layer that determines whether an in-vessel chemical incident stays a contained
chemical incident or becomes a building-wide mass-casualty toxic release. The absence of
this detection layer, combined with the "violent"/rapid reaction-rate characterization
established in `04-chemistry.md` §4.8, is why the outcome scaled to the reported range of
2 fatalities and 19–30+ hospitalized/treated persons rather than a contained, no-injury
chemical release. Chapter 7 develops this deviation into a formal LOPA scenario with IPL
credit and a SIL-selection recommendation for the detection/interlock layer it implies was
needed.

---

## 7. Recommendations Summary (Carried to Chapter 8)

| Priority | Recommendation | Node(s) addressed |
|---|---|---|
| 1 | Mandatory decommissioning-specific PHA/HAZOP, triggered automatically upon closure announcement, independent of any operating-phase review cadence | All |
| 2 | Residue sampling/characterization and CAMEO/CCPS reactive-hazard screening before any chemical is approved for legacy-vessel cleaning | Node 1 |
| 3 | EPCRA Tier II compliance audit extended to all decommissioning-task chemicals, with pre-staged hazard data packages held on-site and shared with the local emergency planning committee | Node 1, Node 4 |
| 4 | Engineered, rate-limited, diluted chemical addition with mixing, for any acid-based cleaning of unsampled legacy vessels; prohibit bulk/gravity addition | Node 2 |
| 5 | Relief/venting and local exhaust/scrubbing re-evaluation for legacy vessels repurposed for chemical cleaning tasks | Node 3 |
| 6 | Continuous online toxic-gas detection scoped explicitly to transient, non-routine decommissioning operations, with alarm-to-evacuation latency engineered against worst-case reaction rate | Node 4 |
| 7 | Exclusion-zone/controlled-access protocol and mandatory rescuer decontamination procedure for any acid-based cleaning task on unsampled legacy content | Node 4 |

---

## Sources

[S-01] `optimizeit/case1-ames-goldsmith/_research/FACTS-BASELINE.md` — shared facts baseline and epistemic tagging convention.
[S-02] `optimizeit/case1-ames-goldsmith/03-incident-reconstruction.md` — timeline, casualty framing, work-permit/decision-sequence reconstruction (§3.2, §5).
[S-03] `optimizeit/case1-ames-goldsmith/04-chemistry.md` — reaction pathways, thermochemical bounds, H2S yield and pressurization estimates (§4.2–4.9).
[S-04] `optimizeit/case1-ames-goldsmith/_research/lane6-precedent-tech.md` — CSB Safety Bulletin No. 2003-03-B, "Sodium Hydrosulfide: Preventing Harm" (Nov 2004); CSB Investigation Report No. 2002-01-I-AL, Georgia-Pacific Naheola Mill (Jan 2003); decommissioning-risk-category literature (§3).
[S-05] `optimizeit/case1-ames-goldsmith/_research/lane7-gapfill.md` — Tier II/M2000A EPCRA hazard-communication gap finding.
[S-06] CAMEO Chemicals, "Sulfides, Inorganic" reactive group, https://cameochemicals.noaa.gov/react/33 — as cited in `04-chemistry.md` §4.10.
[S-07] CAMEO Chemicals, "Nitric Acid, Other Than Red Fuming," https://cameochemicals.noaa.gov/chemical/19337 — as cited in `04-chemistry.md` §4.4, §4.9.
[S-08] IChemE, "Managing Process Safety in a Decommissioning Project" (Hazards 29), https://www.icheme.org/media/19415/hazards-29-paper-35.pdf — as cited in `_research/lane6-precedent-tech.md` §3.
[S-09] IAEA, "Safety Assessment for Decommissioning," https://www-pub.iaea.org/MTCD/Publications/PDF/Pub1604_web.pdf — as cited in `_research/lane6-precedent-tech.md` §3.
[S-10] CCPS, *Guidelines for Hazard Evaluation Procedures* — standard HAZOP methodology reference (general professional knowledge, not re-fetched this pass).
[S-11] IEC 61882, *Hazard and operability studies (HAZOP studies) — Application guide* — standard methodology reference (general professional knowledge, not re-fetched this pass).
