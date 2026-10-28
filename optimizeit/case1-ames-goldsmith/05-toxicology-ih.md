# Chapter 5 — Toxicology & Industrial Hygiene

> **Confidence & Provenance callout.** This chapter draws on two source classes with
> different evidentiary weight. (1) **Established occupational-toxicology and IH
> literature** — ATSDR, NIOSH, OSHA, EPA AEGL/NAS documents, peer-reviewed mechanism
> papers — which is well-settled science, cited [VERIFIED] against its own sources
> regardless of this incident. (2) **Incident-specific facts** — casualty counts,
> hospitals, responder numbers — carried forward from `FACTS-BASELINE.md`, tagged per
> that document's tiers. Hydrogen sulfide (H2S) is [VERIFIED] as the released agent
> across essentially all open reporting on this incident. **Nitrogen dioxide (NO2) is
> NOT independently confirmed as a released agent at Catalyst Refiners** — no
> open-source outlet reviewed reports NO2 detection, monitoring, or clinical diagnosis
> tied to this event. NO2 toxicology is included below because (a) the case brief frames
> the incident as an "H2S and NO2" release and (b) Chapter 4's inferred reaction
> chemistry (nitric acid + a sulfide-bearing residue, in a system where nitrogen
> oxides are a chemically plausible co-product) makes NO2 a reasonable candidate agent
> to model for defensive/precautionary purposes. Every NO2 claim below is explicitly
> flagged [INFERRED] or "reference material" — never presented as confirmed exposure at
> this site. Do not let the density of the NO2 literature below imply confirmation it
> does not have.

## 5.1 Hydrogen sulfide: the mechanism behind "chemical knockdown"

The case brief states that two operators were "rapidly overcome and killed by chemical
knockdown." This is not loose language — "knockdown" is a defined term in occupational
toxicology, and the underlying mechanism explains both the speed of death and why
neither victim appears to have self-evacuated.

**Cellular asphyxiation, not simple suffocation.** H2S is classified as a chemical
(cellular) asphyxiant, mechanistically distinct from a simple asphyxiant like nitrogen
or CO2 that kills only by displacing oxygen. H2S's acute lethality is driven by
**inhibition of mitochondrial Complex IV — cytochrome c oxidase** — the terminal enzyme
of the electron transport chain. The sulfide ion binds the ferric (Fe³⁺) heme a3/CuB
active site of the enzyme, blocking the final electron-transfer step and halting
oxidative phosphorylation. Cells that cannot make ATP aerobically shift to anaerobic
glycolysis, producing a rapid systemic lactic acidosis. Because this is a cellular
blockade rather than an oxygen-supply problem, oxygen can be physically present in the
blood and lungs while tissue cannot use it — the exposure kills even in a room that is
not itself oxygen-deficient. The organs with the highest basal oxygen demand — the
**brain and the myocardium** — decompensate first and fastest [VERIFIED, S-1].

**Knockdown as a defined clinical event.** At high airborne concentrations — the
literature places onset in a band from roughly 500 ppm up to 700–1,000 ppm depending on
the source — H2S produces **sudden loss of consciousness within one or two breaths**.
This is "knockdown": a victim standing upright one moment and collapsed, apneic, and
unresponsive the next, with no intervening period of distress, warning symptoms, or
opportunity to move away from the source. The mechanism is near-instantaneous
cytochrome-oxidase blockade in the CNS respiratory control centers, producing central
apnea and collapse faster than the victim's own motor system can respond. This is the
specific toxicological event the case brief is describing when it says the two operators
were "rapidly overcome" [VERIFIED, S-1, S-2].

Two operational features of knockdown matter for the reconstruction:

- **It removes the option of self-rescue.** Unlike a slow-building irritant exposure,
  where a worker can smell, cough, and walk away, knockdown at these concentrations
  produces incapacitation before any evasive action is physically possible. A worker
  standing at or near the point of release when a violent acid–sulfide reaction vents
  H2S at high local concentration (see §5.5 on near-source spikes) has, functionally, no
  warning window [VERIFIED, S-2].
- **It creates a "second casualty" hazard for rescuers.** ATSDR's Medical Management
  Guidelines and occupational-medicine case reviews (WikEM) document a recurring pattern:
  a co-worker or first responder sees a downed colleague and enters the same atmosphere
  without SCBA to attempt a rescue, and is knocked down by the same mechanism. This
  pattern is explicitly named in the IH literature and is directly relevant to how the
  incident's injury count grew beyond the two people initially in the room — the facts
  base records that coworkers reportedly dragged injured colleagues out of the building
  before formal responders arrived, a bystander-rescue act consistent with (though not
  confirmed to have caused injury under) this exact hazard pattern [VERIFIED, S-2, S-3].

**Survivors are not necessarily unharmed.** Apparent rapid recovery after removal from
exposure can occur, but knockdown-associated hypoxia can leave lasting neurologic injury
(hypoxic encephalopathy) even in patients who regain consciousness quickly. This is
relevant to any post-incident characterization of "non-life-threatening" injuries among
the hospitalized cohort — non-life-threatening at triage does not equal fully reversible
[VERIFIED, S-1].

## 5.2 Olfactory fatigue — the false-safety-signal that matters most

Of everything in the H2S toxicology literature, the single fact most relevant to
explaining *why trained workers did not evacuate* is olfactory fatigue.

H2S has an extremely low odor threshold — EPA's "level of odor awareness" is cited at
roughly 0.01 ppm, meaning the characteristic rotten-egg smell is detectable at
concentrations thousands of times below anything hazardous. This is precisely why H2S
has a folk reputation as a gas you can "smell coming." That reputation is dangerous,
because it inverts at high concentration. **Above roughly 100–150 ppm, H2S rapidly
paralyzes the olfactory nerve itself.** ATSDR documents olfactory fatigue occurring
within 2–15 minutes at concentrations over 100 ppm; other sources describe paralysis
after only "a few inhalations" in that range. The practical result: a worker whose nose
correctly warned them at low concentration can lose that warning signal entirely at
exactly the concentration band where the hazard becomes lethal, and — critically — the
warning does not fade gradually in proportion to danger. It can vanish abruptly, at the
threshold where danger is increasing fastest [VERIFIED, S-1].

The operational consequence is a genuine false-safety signal: **the absence of smell at
high concentration does not indicate the gas is absent or has dissipated — it indicates
the opposite.** A worker in a room where a violent reaction has just generated H2S may
experience the smell intensifying, then abruptly disappearing, and reasonably (but
wrongly) interpret the disappearance as the atmosphere clearing. This is a documented,
named contributor to fatal and near-fatal H2S exposures across industries — sewer work,
oilfield production, rendering/slaughterhouse operations — precisely the settings where
"knockdown" entered the occupational-medicine vocabulary [VERIFIED, S-1, S-2]. For this
incident specifically, no source reviewed documents what, if anything, either deceased
operator perceived by smell in the seconds before collapse, and this chapter does not
speculate about that; the point of including the mechanism here is to explain why odor
perception cannot be assumed to have functioned as a warning system even if the gas was
present at detectable-by-nose concentrations moments earlier [INFERRED — mechanism
applied generically, not to named individuals].

## 5.3 Delayed pulmonary effects of H2S

Beyond acute knockdown, H2S at high-but-sub-lethal concentrations causes irritant injury
to the respiratory tract — bronchitis and chemical pneumonitis — and can produce
pulmonary edema that is either immediate or **delayed up to approximately 72 hours**
post-exposure. This delayed-edema profile is the toxicological basis for the standard
clinical practice of observing seriously exposed patients for at least 24 hours even
when they appear to have recovered quickly at the scene. Other reported delayed or
persistent sequelae include reactive airways dysfunction syndrome (RADS) and, following
knockdown-associated hypoxia, persistent neurocognitive or neuropsychiatric effects
[VERIFIED, S-1]. This detail matters directly for Chapter 6 (emergency response): it is
the toxicological justification for why hospitals could not simply discharge
ambulatory, apparently-stable patients from the scene.

## 5.4 Nitrogen dioxide toxicology (reference material — not confirmed to this incident)

**Reiterating the provenance point:** the following is standard NO2 toxicology,
presented because the case brief frames this as an H2S/NO2 incident and because NO2 is
a chemically plausible co-product of the inferred acid-driven reaction chemistry
(Chapter 4). No source in the incident-specific research base confirms NO2 was detected,
released, or diagnosed in any patient at Catalyst Refiners. Treat everything in this
section as "if NO2 was present, here is what it would mean" — not as a factual claim
about this incident's exposure.

**Mechanism.** NO2 is a pulmonary irritant gas with relatively low water solubility
compared to highly soluble irritants like ammonia or chlorine. Low solubility means it
does not react extensively with moisture in the upper airway on contact; instead it
penetrates deep into the lower respiratory tract and alveoli before reacting, where it
forms nitrous and nitric acid in situ and damages the alveolar-capillary membrane. The
same low solubility that lets NO2 travel deep into the lung also means it **does not
reliably produce immediate warning symptoms** — irritation, coughing, tearing — at the
point of contact the way a highly soluble gas would. A person can inhale a dangerous
dose of NO2 with minimal early sensory warning [VERIFIED, S-4].

**Silo-filler's disease — the delayed-onset model.** The classic clinical picture for
NO2 inhalation injury, first characterized in farmworkers exposed to NO2 generated by
fermenting silage, runs in stages:

1. **Immediate/early phase:** mild cough, nausea, fatigue — sometimes minimal or no
   symptoms — that can appear to resolve, producing a **symptom-free latent period**.
2. **Delayed phase:** pulmonary edema and acute respiratory distress can develop
   **6–12 hours after exposure**, with some case literature describing onset up to
   roughly 30 hours later — often after a patient has been discharged or has come to
   believe they were unaffected.
3. **Second delayed phase (in some cases):** bronchiolitis obliterans can develop
   **2–6 weeks post-exposure**, sometimes following an apparent initial recovery — a
   distinct second wave of respiratory deterioration [VERIFIED, S-4, S-5].

The single most operationally important fact in this section, if NO2 were present at
this incident, is that **patients who look stable and asymptomatic at the scene or in
early ED triage cannot be medically cleared quickly.** The standard of care is extended
observation, commonly framed as 24–48 hours, precisely because clinically significant
pulmonary edema can present well after apparent recovery — a pattern that converges with
the independent 24-hour observation standard for high-dose H2S exposure (§5.3) even
though the two gases act by different mechanisms [VERIFIED, S-4].

**Co-exposure complexity.** No dedicated toxicology literature on *combined* H2S/NO2
co-exposure was located in the research underlying this chapter. General triage
reasoning nonetheless applies, and is worth stating as reference framing rather than a
site-specific conclusion: H2S produces a rapid, potentially instantaneous life-threat
(knockdown, cardiorespiratory arrest) that dominates initial triage attention and could,
in principle, mask or overshadow a co-occurring NO2 exposure that presents with no early
symptoms but carries a delayed lethal trajectory. A triage team focused on immediately
life-threatening knockdown casualties could under-triage a co-exposed patient who looks
asymptomatic at the scene — a general principle documented for mixed toxic-industrial-gas
incidents broadly, and the reason extended medical observation protocols are applied to
everyone in an exposure zone, not only to patients with acute symptoms at first contact
[VERIFIED — general principle; INFERRED as applied to this incident, S-4].

## 5.5 Exposure limits and guideline values

The table below consolidates the regulatory and guideline exposure limits for both
gases. It is included in full because occupational exposure limits are not
interchangeable — PEL, REL, TLV, IDLH, and AEGL values answer different questions
(legally enforceable ceiling vs. recommended practice vs. life-threat threshold vs.
short-term emergency-planning guidance), and conflating them is a common analytical
error in incident reconstruction.

| Guideline | Hydrogen Sulfide (H2S), CAS 7783-06-4 | Nitrogen Dioxide (NO2), CAS 10102-44-0 |
|---|---|---|
| **OSHA PEL** (current, enforceable) | 20 ppm ceiling; 50 ppm 10-min max peak, once/8-hr shift¹ | 5 ppm ceiling |
| **OSHA PEL** (1989 revision — vacated, historical only) | 10 ppm TWA / 15 ppm STEL | — |
| **NIOSH REL** | 10 ppm (15 mg/m³), 10-min ceiling | 1 ppm (1.8 mg/m³), STEL |
| **ACGIH TLV** (post-2010) | 1 ppm TWA / 5 ppm STEL | 3 ppm TWA / 5 ppm STEL² |
| **NIOSH IDLH** | 100 ppm | 20 ppm |
| **AEGL-1** (10/30/60 min) | 0.75 / 0.60 / 0.51 ppm | 0.50 / 0.50 / 0.50 ppm |
| **AEGL-2** (10/30/60 min) | 41 / 32 / 27 ppm | 20 / 15 / 12 ppm |
| **AEGL-3** (10/30/60 min) | 76 / 59 / 50 ppm | 34 / 25 / 20 ppm |
| **AEGL-1/2/3 at 4 hr** | 0.36 / 20 / 37 ppm | 0.50 / 8.2 / 14 ppm |
| **AEGL-1/2/3 at 8 hr** | 0.33 / 17 / 31 ppm | 0.50 / 6.7 / 11 ppm |
| **Odor threshold / awareness** | ~0.01 ppm awareness; odor paralyzed above ~100–150 ppm | Pungent/acrid; no formal EPA awareness-level figure identified |
| **ERPG (AIHA, 1991, 60-min)** | ERPG-1: 0.1 ppm · ERPG-2: 30 ppm · ERPG-3: 100 ppm | not retrieved |
| **LEL / UEL** | LEL ~4.3% vol · UEL ~45.5–46% vol | not flammable (strong oxidizer) |

¹ 29 CFR 1910.1000 Table Z-2; the 1989 update was vacated by the Eleventh Circuit in
*AFL-CIO v. OSHA*, 965 F.2d 962 (1992), reverting enforcement to the 1971 standard
[VERIFIED, S-1].
² Not independently re-verified against a primary ACGIH source in the underlying
research pass — carried forward flagged, per source document [VERIFIED,
search-synthesis — flagged for confirmation, S-1].

**AEGL definitions**, per EPA/National Academies: AEGL-1 marks the threshold for
notable discomfort or transient, reversible non-disabling effects; AEGL-2 marks the
threshold above which irreversible or serious long-lasting effects, or impaired ability
to escape, may occur; AEGL-3 marks the threshold above which life-threatening effects
or death may occur [VERIFIED, S-6].

The table makes the concentration logic of §5.1–5.2 concrete: OSHA's enforceable
20 ppm ceiling for H2S sits nearly 25 times below the concentration band where knockdown
begins (roughly 500 ppm), and the olfactory-fatigue threshold (~100–150 ppm) sits
between the IDLH (100 ppm) and the AEGL-3 60-minute value (50 ppm) — meaning the
concentration at which a worker's nose stops warning them overlaps almost exactly with
the concentration range the guideline bodies classify as life-threatening.

## 5.6 Flammability: a toxic-exposure event, not primarily a fire/explosion event

H2S is also flammable — LEL approximately 4.3% by volume (43,000 ppm), UEL
approximately 45.5–46% by volume — but these thresholds sit far above the
toxicologically lethal range. At the IDLH (100 ppm) and AEGL-3 60-minute value
(~50 ppm), the atmosphere is roughly two to three orders of magnitude below the lower
explosive limit. In practical terms, an atmosphere already lethal to unprotected humans
is nowhere near an explosive concentration unless an unusually large, poorly ventilated
accumulation is allowed to build over time [VERIFIED, S-7]. This has a direct framing
consequence for the later HAZOP/LOPA analysis in this dossier: the dominant near-field
hazard mechanism in this reaction was **acute inhalation toxicity, not deflagration or
explosion risk**, and safeguard layers (ventilation, detection, evacuation, PPE) should
be evaluated against a toxic-release consequence model first, with ignition-source
control as a secondary, not primary, layer of protection for this specific hazard
scenario [INFERRED — standard IH sequencing logic applied to this incident's gas
chemistry].

## 5.7 Dispersion in an enclosed industrial building

Outdoor releases are typically modeled with a **Gaussian plume model** — the
EPA-endorsed approach for estimating downwind concentration from a continuous
point-source release under steady-state wind and atmospheric-stability conditions.
It is the right tool for a stack, vent, or open-air spill, but Catalyst Refiners'
release occurred inside a building (the company's own statement confirms fumes were
contained within one structure), which calls for a different simplified model
[VERIFIED, S-8].

The standard simplified approach for an enclosed release is the **well-mixed
(single-compartment) box model**: it assumes the released gas mixes instantaneously
and uniformly through the room or building volume, with concentration governed by a
mass-balance relationship — generation rate, room volume, and air-exchange rate (ACH)
via ventilation (dC/dt = generation rate/volume − (ventilation rate/volume) × C). This
is the standard tool for indoor industrial-hygiene and emergency-planning estimates
[VERIFIED, S-8].

The critical caveat, and the one that matters most for reconstructing this incident, is
that **real enclosed releases deviate substantially from perfect, instantaneous
mixing.** Near-source concentrations can run far above the well-mixed room-average,
especially for (a) a dense gas released close to floor level and (b) a rapid, violent
reaction rather than a slow leak. H2S is denser than air (molecular weight ~34 vs. ~29),
so it can pool at low points — pits, tank interiors, floor-level pockets — in poorly
ventilated spaces. A violent acid-driven reaction of the kind reconstructed in Chapter 4
generates gas far faster than a slow leak, producing a **transient near-source spike**
that can exceed the eventual room-average concentration by a wide margin before the
space reaches a mixed state [VERIFIED, S-8, S-9].

This is the toxicological explanation for the injury gradient observed at this
incident: operators working directly at or immediately adjacent to the reacting vessel
would have been exposed to near-instantaneous, near-source concentrations plausibly
in the knockdown range (≥500 ppm) even if a room-average or later area-monitoring
reading came back far lower — consistent with WVDEP's post-incident finding of
non-detect/no offsite H2S detection through late April, which describes conditions well
after the acute release and well outside the immediate reaction zone, not the
transient near-source concentration at the moment of release [VERIFIED for the
WVDEP finding, FACTS-BASELINE; INFERRED for the causal link between near-source spike
modeling and the specific two fatalities — no source directly measures concentration at
the point of the fatalities, and this chapter does not claim a specific ppm value was
present]. More distant personnel, and responders arriving roughly twenty minutes after
the release (~9:50 a.m. per the facts baseline against a ~9:30 a.m. release), would have
encountered a partially diluted, more mixed atmosphere — plausibly still hazardous
(consistent with 7 EMS personnel being sickened) but below the concentration required
for immediate knockdown. This gradient — lethal at the source, serious-but-survivable
with distance and time — is the toxicological logic underlying why the incident produced
2 fatalities among people at the immediate point of release against a much larger cohort
of hospitalized-but-surviving casualties [INFERRED, applying §5.7's general dispersion
principles to the incident's known injury pattern].

## 5.8 Clinical/triage picture: why "stable" does not mean "cleared"

Sections 5.3 and 5.4 establish two independent delayed-injury pathways — H2S pulmonary
edema up to ~72 hours, and NO2's silo-filler's-disease latent period of 6–30 hours
(if NO2 was present) with a second bronchiolitis-obliterans wave at 2–6 weeks. Both
converge on the same operational conclusion, which is the load-bearing handoff point
into Chapter 6's emergency-response analysis: **a mass-casualty inhalation-injury
response cannot triage on presenting symptoms alone.** A patient who is ambulatory,
talking, and reports only mild cough or throat irritation at the scene may be hours away
from clinically significant pulmonary edema. This is precisely why hospital
mass-casualty protocols for inhalation-injury incidents call for extended observation of
apparently well patients rather than same-day discharge [VERIFIED, S-1, S-4, S-10].

Field differentiation between the two toxicological pictures is genuinely difficult in
real time: both H2S poisoning and NO2/methemoglobin-forming exposure can produce
cyanosis and hypoxia-mimicking presentations, and no source reviewed indicates that
confirmed real-time air-monitoring data (as opposed to clinical judgment) was available
to responders at the point of initial triage decisions [VERIFIED — general clinical
principle, S-4]. The practical consequence for this incident is that the reported
injury/hospitalization figures — inconsistently reported across sources as 19, 21, 22,
~30, or "30+" per FACTS-BASELINE — plausibly include a mix of acutely symptomatic
patients and precautionary-observation admissions consistent with this delayed-injury
doctrine, though no source reviewed breaks the total down by triage category
[HYPOTHESIS — plausible explanation for the reported count variance, not independently
confirmed].

## 5.9 This-incident clinical and response facts, and the bridge to emergency response

The confirmed treating hospitals were **Vandalia Health Charleston Area Medical Center
(CAMC)**, Charleston, WV, and **WVU Medicine Thomas Memorial Hospital**, South
Charleston, WV. CAMC's reported ED presentations — cough, shortness of breath, sore
throat, itchy eyes — are consistent with acute mucosal/respiratory irritant exposure
generally and do not, on their own, distinguish an H2S-only picture from a mixed
H2S/NO2 picture. Thomas Memorial treated roughly a dozen patients, including eight who
arrived by personal vehicle and had not been at the plant site itself but were in the
surrounding area — injuries characterized as non-life-threatening [VERIFIED,
FACTS-BASELINE / lane5].

**Seven ambulance/EMS crew members were sickened while responding** — a figure
well-corroborated across multiple independent sources and one of the more solid
quantitative facts in this incident's record [VERIFIED, FACTS-BASELINE]. The exact
exposure mechanism for these seven — direct atmospheric exposure at the scene,
secondary off-gassing from patients or contaminated clothing during transport and
treatment, or a combination — is **not specified** in any source reviewed and is an open
fact-gap [VERIFIED as a gap, FACTS-BASELINE/lane5].

That gap is worth framing against the general NIOSH/CDC surveillance literature on
injured first responders (2002–2012 dataset), which documents recurring, generic
causal patterns relevant to interpreting it: police and EMS personnel most commonly
sustain respiratory irritation as their primary injury type in chemical-release
incidents, typically from entering or working near an active toxic-gas atmosphere
without adequate respiratory protection — often because the specific hazard had not yet
been identified or confirmed at the time of entry (a documented "recognition lag," since
early-arriving responders frequently lack air-monitoring data or a confirmed chemical
identity). Secondary or delayed exposure is also separately documented among responders
not physically present during the initial release — for example, a transport provider
becoming symptomatic from off-gassing or contaminated clothing during patient transport
[VERIFIED, general literature, S-11]. Neither pathway is confirmed as *the* mechanism
for this incident's seven EMS casualties; both remain plausible and are not mutually
exclusive.

This chapter's role is to establish the toxicological "why" — cellular asphyxiation and
its knockdown phenomenology, olfactory fatigue as a false-safety signal, delayed
pulmonary injury from both H2S and (if present) NO2, and near-source concentration
spikes in enclosed, violent releases — that explains the injury and fatality pattern
observed. Chapter 6 picks up the operational "how the response unfolded" thread: HAZWOPER
structure, PPE level selection under IDLH conditions, incident command, decontamination,
the shelter-in-place decision, and — building directly on §5.9 above — why first
responders became casualties themselves at this specific incident.

---

## Sources

- **S-1.** ATSDR, *Toxicological Profile for Hydrogen Sulfide and Carbonyl Sulfide* and
  *Medical Management Guidelines for Hydrogen Sulfide*; OSHA, Hydrogen Sulfide Standards
  and Hazards pages; NIOSH IDLH documentation (CAS 7783-06-4); NAS/NRC Hydrogen Sulfide
  AEGL technical support document; ACGIH TLV page for H2S; OnePetro/ASSP paper on the
  2010 H2S TLV/STEL reduction.
- **S-2.** Nature Scientific Reports, "Hydrogen Sulfide — Mechanisms of Toxicity and
  Development of an Antidote"; WikEM, Hydrogen Sulfide Toxicity; NIH/PMC, "Regulation of
  mitochondrial bioenergetic function by hydrogen sulfide."
- **S-3.** `_research/FACTS-BASELINE.md` and `_research/lane5-toxicology-response.md`,
  §6 — bystander-rescue detail (coworkers dragging injured colleagues from the building
  before responder arrival).
- **S-4.** NIOSH IDLH documentation and Pocket Guide entry for NO2 (CAS 10102-44-0);
  StatPearls/NCBI Bookshelf, "Nitrogen Dioxide Toxicity"; PubMed, "Silo-Filler's
  disease"; Annals of Internal Medicine, "Silo-Filler's Disease: Nitrogen
  Dioxide-Induced Lung Injury — Long-Term Follow-up"; Iowa HHS Epi Manual, Silo Filler's
  Disease.
- **S-5.** PMC, "Successful treatment of pulmonary injury after nitrogen oxide exposure
  with corticosteroid therapy."
- **S-6.** EPA AEGL Program (Hydrogen Sulfide Results); National Research Council/NAS,
  18th and 15th Interim Reports of the Committee on AEGLs (nitrogen oxides); National
  Academies Press, Acute Exposure Guideline Levels for Selected Airborne Chemicals,
  Vol. 11 (nitrogen oxides table).
- **S-7.** Wermac, "What is %LEL / %UEL and PID and PPM?"; RLS Human Care, "H2S LEL and
  UEL."
- **S-8.** ResearchGate, "Application of the Gaussian Plume Model to Simulate Industrial
  Air Pollutant Dispersion"; PMC, "An Application of the Gaussian Plume Model to
  Localization of an Indoor Gas Source with a Mobile Robot."
- **S-9.** `_research/lane5-toxicology-response.md` §4, synthesizing standard
  well-mixed-box IH/emergency-planning practice with gas-density and reaction-rate
  reasoning; WVDEP non-detect finding per `FACTS-BASELINE.md`.
- **S-10.** NCBI Bookshelf/StatPearls, "EMS Hazardous Waste Response"; general
  hospital HAZMAT mass-casualty literature as synthesized in
  `_research/lane5-toxicology-response.md` §5.6.
- **S-11.** CDC/NIOSH, "Acute Chemical Incidents With Injured First Responders,
  2002–2012" (stacks.cdc.gov/view/cdc/51311; PubMed 28760164); CDC/NIOSH Emergency
  Responders topic page.
- Incident-specific facts (hospitals, casualty figures, EMS count, timeline, official
  statements) per `_research/FACTS-BASELINE.md` and `_research/lane5-toxicology-response.md`
  §0 and §6, tagged per that document's epistemic tiers.
