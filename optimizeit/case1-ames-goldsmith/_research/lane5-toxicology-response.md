# Lane 5 — Toxicology, Industrial Hygiene & Emergency Response Reference Dossier

**Scope:** Factual reference data only (no incident-specific speculation/reconstruction). Compiled for the technical investigation dossier on the April 22, 2026 chemical release at the Ames Goldsmith / Catalyst Refiners plant, Institute, West Virginia.

---

## 0. Incident Anchor Facts (for context — not analysis)

- **Date/time:** Wednesday, April 22, 2026, ~9:30 a.m.; first responders on scene ~9:50 a.m.
- **Location:** Ames Goldsmith Catalyst Refiners, 1580 1st Avenue South, Institute, WV (between Institute and Nitro, Kanawha County), adjacent to the former Union Carbide site.
- **Activity underway:** Planned decommissioning/shutdown (facility announced closure for June 2026); workers were cleaning/decontaminating a tank in a pump area.
- **Chemical mechanism reported:** Nitric acid reacted with a metal-surface-treatment product identified as **Bonderite M2000A**, generating **hydrogen sulfide (H2S)** gas (reporting on NO2 co-release is not independently confirmed in open sources reviewed — see note in §6).
- **Casualties:** 2 fatalities on site; ≥19–21 hospitalized; 1 in critical condition; total ~30–45 people evaluated/treated, including **7 ambulance/EMS crew members** sickened while responding.
- **Response:** One-mile shelter-in-place order, lifted after ~5+ hours; large-scale field decontamination (clothing removal, water spray-down); air monitoring by WV Dept. of Environmental Protection; OSHA investigation opened; company (Ames Goldsmith, President Frank Barber) confirmed the fumes were contained within one building.
- **Company safety history:** ≥5 OSHA citations since 2018 across facilities (2018 Institute citation for inadequate powered-industrial-vehicle operator evaluation, no fine; 2022 New York facility citation for unlabeled gas pipelines, $6,700 paid); 2013 nitric acid tank leak (50 gal) injured 2 workers at this facility; 1,310 lb of nitric acid released to air 2014–2024 per facility reporting.

---

## 1. Hydrogen Sulfide (H2S) Toxicology

### 1.1 Mechanism of toxicity
H2S is a **chemical/cellular asphyxiant**. Its acute toxicity is attributed primarily to **inhibition of mitochondrial Complex IV (cytochrome c oxidase)** — H2S binds the ferric (Fe³⁺) heme a3/CuB site of the enzyme, blocking the terminal step of the electron transport chain and halting aerobic ATP production. This forces cells into anaerobic metabolism, causing lactic acidosis and acid-base derangement. Tissues with the highest oxygen demand — **brain and heart** — are affected first and most severely (Nature Scientific Reports, "Hydrogen Sulfide — Mechanisms of Toxicity and Development of an Antidote").

### 1.2 "Knockdown" phenomenon
At high airborne concentrations (roughly **≥500 ppm**, with some literature citing onset near 700–1000 ppm), H2S causes **sudden loss of consciousness within one or two breaths** — colloquially "knockdown," and historically associated with rapid collapse in sewer, oilfield, and slaughterhouse/rendering settings (sometimes called "sewer gas" or "slaughterhouse sulfide" deaths in occupational-medicine literature). Mechanistically this reflects near-instantaneous cytochrome oxidase blockade in the CNS respiratory centers, producing apnea and collapse before the victim can react or self-rescue. Apparent rapid recovery after removal from exposure can occur, but knockdown may leave **lasting neurologic injury** (hypoxic encephalopathy) even in survivors. Knockdown is the dominant cause of death in confined-space/high-concentration H2S incidents because it removes the victim's ability to self-evacuate, and a second responder entering without SCBA to rescue a downed worker is a classically documented secondary-fatality pattern (WikEM; ATSDR MMG).

### 1.3 Olfactory fatigue — critical safety detail
H2S has a strong "rotten egg" odor at very low concentrations (odor threshold ~0.01–0.5 ppb–ppm range depending on source; EPA's "level of odor awareness" is cited at **0.01 ppm**). However, **at concentrations above roughly 100 ppm, H2S rapidly paralyzes the olfactory nerve**, and the odor can disappear within a few inhalations (ATSDR: olfactory nerve fatigue occurs in **2–15 minutes at concentrations over 100 ppm**; other sources cite paralysis at 100–150 ppm after "a few inhalations"). This is a well-documented, high-stakes hazard: **the absence of smell at high concentration does not indicate the gas is absent or has dissipated — it indicates the opposite**, that concentrations may be high enough to have disabled the warning-odor mechanism. This is a leading contributor to fatal/near-fatal H2S exposures where victims and would-be rescuers do not perceive danger despite lethal ambient concentrations.

### 1.4 Delayed pulmonary effects
Beyond acute knockdown/asphyxiation, H2S at sub-lethal-but-high concentrations causes **irritant injury to the respiratory tract** — bronchitis, chemical pneumonitis — and can produce **pulmonary edema that is immediate or delayed up to ~72 hours** post-exposure (ATSDR Medical Management Guidelines). This is the basis for the standard clinical recommendation that **seriously exposed patients be observed/monitored for at least 24 hours** even if they appear to recover quickly, since edema may not manifest until later. Other reported delayed/persistent effects include reactive airways dysfunction syndrome (RADS) and, after knockdown-associated hypoxia, persistent neurocognitive/neuropsychiatric sequelae.

### 1.5 Exposure limits and guideline values
See consolidated Table in §3. Historical note: OSHA's 1989 PEL revision (10 ppm TWA / 15 ppm STEL) was vacated by court order in *AFL-CIO v. OSHA* (1992); the **currently enforceable OSHA general-industry PEL reverted to the original 1971 standard: 20 ppm ceiling, with a 50 ppm 10-minute maximum peak** (permitted once per 8-hour shift if no other measurable exposure occurs). ACGIH separately lowered its TLV in 2010 from 10 ppm TWA/15 ppm STEL to **1 ppm TWA / 5 ppm STEL**, a substantially more conservative voluntary guideline that is not itself an OSHA-enforceable limit but is widely referenced in industrial hygiene practice.

### 1.6 Flammability (LEL/UEL)
H2S is also a **flammable gas**, relevant to co-located ignition risk during a release:
- **Lower Explosive Limit (LEL): ~4.3% by volume** (43,000 ppm)
- **Upper Explosive Limit (UEL): ~45.5–46% by volume**
- Flash point: gas (autoignition ~260°C/500°F range per safety data sheets)
These LEL/UEL thresholds are **far above** the toxicological IDLH/AEGL-3 concentrations (100 ppm and ~50–76 ppm respectively) — meaning at concentrations that are already lethal to humans, the atmosphere is still ~2–3 orders of magnitude below the flammable range. Practically, this means H2S at life-threatening toxic concentrations in an industrial release is not simultaneously at explosive concentrations unless a very large, poorly ventilated accumulation occurs; toxicity, not explosion, is the dominant near-field hazard, though ignition risk cannot be excluded in enclosed/poorly ventilated spaces with prolonged accumulation.

---

## 2. Nitrogen Dioxide (NO2) Toxicology

### 2.1 Mechanism of toxicity
NO2 is a **pulmonary irritant gas** with relatively **low water solubility** compared to gases like ammonia or chlorine. Low solubility means it does not react immediately and extensively with moisture in the upper airway (nose, throat), so it penetrates deep into the **lower respiratory tract and alveoli before reacting** — producing nitrous/nitric acid in situ, which damages the alveolar-capillary membrane. Critically, **low solubility also means NO2 does not reliably produce immediate warning symptoms (irritation, coughing) at the point of exposure**, unlike highly soluble irritant gases — a person can inhale a dangerous dose with minimal early sensory warning.

### 2.2 Delayed-onset pulmonary edema — "silo-filler's disease"
The classic clinical model for NO2 inhalation injury is **silo-filler's disease**, first well-characterized in farmworkers exposed to NO2 generated by fermenting freshly stored silage. Clinical course:
- **Immediate/early phase:** mild cough, nausea, fatigue, sometimes minimal symptoms — may appear to resolve ("symptom-free latent period").
- **Delayed phase:** pulmonary edema and acute respiratory distress can develop **6–12 hours after exposure**, with some literature describing onset up to ~30 hours later — occurring *after* the patient may have been discharged or believed themselves unaffected.
- **Second delayed phase (in some cases):** **bronchiolitis obliterans** can develop **2–6 weeks post-exposure**, sometimes after an apparent initial recovery, representing a distinct second wave of respiratory deterioration.
- Corticosteroid therapy has been used with reported benefit; pulmonary function (except diffusing capacity, DLCO) can normalize with treatment in follow-up literature. (Sources: PubMed/Annals of Internal Medicine "Silo-Filler's Disease: Nitrogen Dioxide-Induced Lung Injury — Long-Term Follow-up"; StatPearls "Nitrogen Dioxide Toxicity.")

This latent-injury profile is the single most operationally important NO2 fact for a mass-casualty response: **patients who appear stable/asymptomatic at the scene or in early ED triage cannot be medically cleared quickly** — the standard of care is extended observation (commonly 24–48 hours, consistent with the H2S 24-hour-observation standard above) because clinically significant pulmonary edema can present after apparent recovery.

### 2.3 Co-exposure complexity (H2S + NO2)
No dedicated toxicology literature specific to *combined* H2S/NO2 co-exposure was located in the sources reviewed (the EPA/NAS AEGL nitrogen-oxides technical support documents reviewed address NO2/N2O4/NO as a chemical family, not H2S interaction). However, general toxicological/triage reasoning applies and is worth stating as reference context rather than site-specific conclusion:
- H2S produces a **rapid-onset, potentially instantaneous** life-threat (knockdown, cardiorespiratory arrest) that dominates initial triage and can mask or be confused with a co-occurring NO2 exposure that has **no early symptoms** but a delayed lethal trajectory (pulmonary edema hours later).
- A triage team focused on immediately life-threatening H2S knockdown casualties may under-triage an NO2-co-exposed patient who looks asymptomatic at the scene — a documented general principle in toxic industrial gas mixed-exposure incidents, reinforcing why extended medical observation protocols exist for any patient in the exposure zone, not just those with acute symptoms.
- Clinically, H2S poisoning and NO2/methemoglobin-forming agents can both cause cyanosis/hypoxia-mimicking presentations, complicating field differentiation without confirmed air-monitoring data.

### 2.4 Exposure limits and guideline values
See Table in §3.

---

## 3. Exposure Limit Reference Table — H2S vs. NO2

| Guideline | Hydrogen Sulfide (H2S), CAS 7783-06-4 | Nitrogen Dioxide (NO2), CAS 10102-44-0 |
|---|---|---|
| **OSHA PEL** (current, enforceable) | **20 ppm ceiling**; 50 ppm 10-min maximum peak (once/8-hr shift, no other measurable exposure)¹ | **5 ppm ceiling** |
| **OSHA PEL** (1989 revision — vacated, historical reference only) | 10 ppm TWA / 15 ppm STEL | — |
| **NIOSH REL** | **10 ppm (15 mg/m³), 10-minute ceiling** | **1 ppm (1.8 mg/m³), STEL** |
| **ACGIH TLV** (post-2010) | **1 ppm TWA / 5 ppm STEL** | 3 ppm TWA / 5 ppm STEL (ACGIH; not independently re-verified in this pass — cross-check before dossier finalization) |
| **NIOSH IDLH** | **100 ppm** (revised value; basis: acute inhalation toxicity/lethality data in humans) | **20 ppm** (original SCP IDLH; some historical AIHA 30-min Emergency Exposure Limit cited at 20 ppm as well) |
| **AEGL-1** (10 / 30 / 60 min) | 0.75 / 0.60 / 0.51 ppm | 0.50 / 0.50 / 0.50 ppm |
| **AEGL-2** (10 / 30 / 60 min) | 41 / 32 / 27 ppm | 20 / 15 / 12 ppm |
| **AEGL-3** (10 / 30 / 60 min) | 76 / 59 / 50 ppm | 34 / 25 / 20 ppm |
| **AEGL-1/2/3 at 4 hr** | 0.36 / 20 / 37 ppm | 0.50 / 8.2 / 14 ppm |
| **AEGL-1/2/3 at 8 hr** | 0.33 / 17 / 31 ppm | 0.50 / 6.7 / 11 ppm |
| **Odor threshold / awareness level** | "Level of odor awareness" ~0.01 ppm; odor **paralyzed/lost above ~100–150 ppm** (olfactory fatigue) | Pungent/acrid odor; adaptation occurs but no formal EPA "level of odor awareness" figure located in sources reviewed |
| **ERPG (AIHA, 1991, 60-min)** | ERPG-1: 0.1 ppm · ERPG-2: 30 ppm · ERPG-3: 100 ppm | Not retrieved in this pass |
| **LEL / UEL (flammability)** | LEL ~4.3% vol · UEL ~45.5–46% vol | Not flammable (supports combustion as strong oxidizer; not itself flammable) |

¹ The 20 ppm ceiling / 50 ppm peak is OSHA's currently enforceable general industry PEL (29 CFR 1910.1000 Table Z-2), reverted after the 1989 PEL update was vacated by the Eleventh Circuit in *AFL-CIO v. OSHA*, 965 F.2d 962 (1992).

**AEGL definitions** (EPA/National Academies standard):
- **AEGL-1:** concentration above which notable discomfort, irritation, or certain non-disabling asymptomatic effects may occur (transient, reversible on cessation of exposure).
- **AEGL-2:** concentration above which irreversible or other serious, long-lasting adverse health effects, or impaired ability to escape, may occur.
- **AEGL-3:** concentration above which life-threatening health effects or death may occur.

---

## 4. Dispersion / Diffusion Reference Basics

*(General reference literature only — no site-specific modeling performed here.)*

- **Gaussian plume model:** the standard EPA-endorsed approach for estimating downwind concentration from a continuous point-source release under steady-state meteorological conditions (wind speed/direction, atmospheric stability class). Widely used for **outdoor** dispersion from stacks, vents, or open-air spills; concentration falls off with distance following a Gaussian (bell-curve) distribution in the crosswind and vertical directions, modulated by atmospheric stability (Pasquill-Gifford classes) and surface roughness.
- **Indoor / enclosed-space dispersion — well-mixed box model:** for a release inside a building, the standard simplified approach is a **well-mixed (single-compartment) box model**, which assumes the released gas mixes instantaneously and uniformly through the room/building volume, with concentration governed by source generation rate, room volume, and air exchange rate (ACH — air changes per hour) via ventilation. This is a common simplification for indoor industrial-hygiene and emergency-planning calculations (mass balance: dC/dt = generation rate/volume − (ventilation rate/volume)×C). Real enclosed releases deviate from perfect mixing — near-source concentrations can be much higher than the well-mixed average, especially for a dense gas released close to the floor or from a rapid, violent reaction, and stratification/pooling can occur depending on gas density relative to air (H2S is denser than air, molecular weight ~34 vs. air ~29, so it can pool at low points, in pits, tanks, and near floor level in poorly ventilated enclosed spaces).
- Research literature has also applied Gaussian-plume-type formulations to **indoor gas-source localization** (e.g., using concentration sensor arrays and a Gaussian plume approximation without needing airflow/anemometry data), suggesting the plume framework has some indoor applicability under specific mixing assumptions, though the well-mixed box model remains the standard simplified tool for regulatory/emergency-planning indoor dispersion estimates.
- For enclosed industrial buildings specifically, guidance typically stresses that **ventilation rate and the location/geometry of exhaust and building openings dominate outcome** far more than for open-air Gaussian dispersion, and that a violent/rapid chemical reaction (as opposed to a slow leak) can produce transient near-source concentrations far exceeding the time-averaged well-mixed estimate before the room reaches a mixed state — relevant to why individuals very close to a reaction source can be affected far more severely and rapidly than the room-average model would predict.

---

## 5. Emergency Response Doctrine

### 5.1 HAZWOPER
OSHA's Hazardous Waste Operations and Emergency Response standard (29 CFR 1910.120) governs training and procedures for responders to hazardous substance releases. Relevant elements: tiered training levels (First Responder Awareness, First Responder Operations, Hazmat Technician, Hazmat Specialist, On-Scene Incident Commander), each with defined competencies; requirement for a written Emergency Response Plan; site safety and control zones (hot/warm/cold); air monitoring before entry.

### 5.2 PPE selection logic (Level A/B/C/D)
- **Level A** — fully encapsulating, vapor-tight suit with positive-pressure SCBA (or supplied-air respirator with escape SCBA); used when the atmosphere is **unknown, oxygen-deficient, IDLH, or the substance poses a severe skin-absorption/vapor hazard**. Appropriate default posture for initial entry into an unknown or confirmed-IDLH H2S/NOx atmosphere.
- **Level B** — highest level of *respiratory* protection (positive-pressure SCBA/supplied air) with a lower level of skin protection (chemical-resistant suit, not fully vapor-encapsulating); used when the airborne hazard is known/identified and requires independent air supply, but skin-absorption risk is assessed as low. Both H2S and NO2 are primarily inhalation hazards with low dermal-absorption risk, so **Level B with SCBA** is a commonly appropriate response posture once the atmosphere and substance are confirmed (vs. Level A for fully unknown conditions).
- **Level C** — air-purifying respirator (APR/PAPR with appropriate cartridge) plus lesser skin protection; used only when the contaminant(s) and concentration are **known**, oxygen is adequate, and a fitted APR cartridge is rated for the specific gas/concentration. **Level C is explicitly inappropriate for unknown atmospheres, oxygen-deficient environments, or IDLH conditions** — both H2S at knockdown-range concentrations and NO2 above its 20 ppm IDLH exceed the safe operating envelope for APR-based Level C protection; the ATSDR Medical Management Guideline explicitly warns that fatalities have occurred among rescuers entering H2S "hot zones" without SCBA.
- **Level D** — standard work uniform, no respiratory protection; appropriate only where no inhalation or skin hazard is present (e.g., outer perimeter/cold zone with confirmed clean air).

### 5.3 Incident Command System (ICS) structure
Standard HAZMAT ICS establishes an Incident Commander (IC) who develops and implements the Incident Action Plan (IAP), sets operational objectives (containment, evacuation/shelter boundaries, decon), and directs functional groups (Operations — including the HAZMAT entry/decon teams and EMS branch; Planning; Logistics; Finance/Admin). Unified Command is typical for multi-agency response (fire/HAZMAT, law enforcement, EMS, public health, environmental agency, and often the facility's own emergency response team) — consistent with the reported multi-agency (Kanawha County Emergency Management, state, and federal) coordination at this incident.

### 5.4 Decontamination procedures
Standard field decon for toxic gas/chemical exposure (per ATSDR Medical Management Guidelines and general HAZMAT practice): remove contaminated clothing; flush exposed skin/hair with water for several minutes; irrigate eyes for at least 5 minutes with water or saline; establish a decon corridor between hot and warm zones before transport; mass-casualty scenarios typically require **field triage plus mass decon lines** (multiple people processed simultaneously, often with minimal privacy, prioritizing rapid gross decontamination over thoroughness for ambulatory casualties). Reported field response at this incident is consistent with this doctrine (clothing removal, water spray-down for a large number of patients).

### 5.5 Shelter-in-place vs. evacuation
Standard emergency-planning doctrine (FEMA/NRC/EPA): the decision must often be made rapidly without complete information. General principle: **shelter-in-place is favored close to the release / in the immediate probable plume path** where evacuation time would exceed the time-to-exposure, since buildings provide meaningful (though imperfect and time-limited) protection against an outdoor toxic cloud; **evacuation is favored farther out** where there is more lead time before the plume could arrive, and for exposures expected to persist beyond the practical shelter-in-place duration (building air exchange will eventually equilibrate indoor with outdoor concentration). Combined approaches (SIP near-field, evacuate far-field or after plume passage) are common. This matches the reported one-mile shelter-in-place order at this incident.

### 5.6 Hospital mass-casualty / surge protocols for inhalation injury
General principles from EMS/hospital HAZMAT literature: hospitals maintain mass-casualty incident (MCI) activation plans that include decontamination capability at the ED entrance (to prevent secondary contamination of the facility and staff), surge staffing activation, and — specific to inhalation-injury MCIs — **extended observation protocols** for apparently well patients, given the delayed-pulmonary-edema profile of irritant gases like NO2 (and the up-to-72-hour delayed edema risk with high-dose H2S). Patients who self-present (walk-in, personal vehicle) without field decontamination pose a secondary-contamination risk to the ED if off-gassing or contaminated clothing/skin is not addressed on arrival — a documented recurring problem in real-world HAZMAT hospital responses.

### 5.7 Why first responders/EMS get exposed — common causal patterns
NIOSH/CDC surveillance literature on acute chemical incidents with injured first responders (2002–2012 dataset) identifies recurring patterns:
- **Firefighters were the responder group most frequently injured overall**, commonly from incidents involving fires/explosions tied to human error or equipment failure.
- **Police and EMS personnel most commonly sustained respiratory irritation** as their primary injury type — consistent with entering or working near an active toxic-gas atmosphere without adequate respiratory protection, often because the hazard was not yet identified/confirmed at the time of entry (a known "recognition lag" problem — early-arriving responders frequently do not yet have air-monitoring data or a confirmed chemical identity).
- **Secondary/delayed exposure** has been documented among responders not physically on scene during the release — e.g., a transport provider becoming ill from off-gassing/contaminated clothing during patient transport, or a responder becoming symptomatic later while cleaning contaminated equipment.
- **Training gaps** are a recurring causal factor: some responders (e.g., volunteer firefighters in cited case reviews) lacked HAZMAT awareness-level training and were unaware of the specific hazard (e.g., explosion potential) they were approaching.
- General pattern relevant to reference (not this-incident-specific): **early responders arriving before hazard identification and air monitoring are systematically the highest-risk group**, because Level C/D-appropriate assumptions may be made before the atmosphere is actually confirmed safe, or because rescue of a downed victim is attempted without SCBA (the classic "second casualty" pattern in H2S knockdown incidents, explicitly flagged in ATSDR guidance).

---

## 6. This-Incident-Specific Emergency Response Facts Found

- **Hospitals confirmed treating patients:**
  - **Vandalia Health Charleston Area Medical Center (CAMC)**, Charleston, WV — treated multiple patients, both ambulance-transported and self-presenting community members; reported ED symptoms: cough, shortness of breath, sore throat, itchy eyes.
  - **WVU Medicine Thomas Memorial Hospital**, South Charleston, WV — treated a dozen patients, including 8 who arrived by personal vehicle (had not been at the plant site itself but were in the surrounding area); injuries characterized as non-life-threatening.
- **First responder/EMS casualties:** **7 ambulance/EMS crew members** were sickened/injured while responding to and assisting victims; the sourced reporting does not specify the precise exposure mechanism (i.e., whether via direct atmospheric exposure at the scene, secondary off-gassing from patients/contaminated clothing during transport/treatment, or both) — this remains an open fact-gap in open-source reporting reviewed.
- **Casualty count (consolidated across sources):** 2 fatalities (identities not released in sources reviewed); 1 in critical condition; total hospitalized figures reported inconsistently across outlets as **19–21**, with **~30–45** total individuals receiving some form of treatment/evaluation (including on-site field treatment not requiring hospital transport).
- **Timeline:** Reaction/release ~9:30 a.m.; first responders on scene ~9:50 a.m.; one-mile shelter-in-place order issued and in effect for **more than five hours** before being lifted.
- **Field response:** Large-scale decontamination lines requiring patients to remove clothing and be sprayed down; coworkers reportedly dragged injured colleagues out of the building before first responders arrived (a bystander-rescue pattern consistent with the "second casualty" risk noted in §5.7, though no bystander injuries from this specific act were reported in sources reviewed).
- **Official statements:**
  - WV Governor Patrick Morrisey, on responders: "They always run to the fire. They put themselves in harm's way."
  - Ames Goldsmith President Frank Barber: company "deeply saddened by the deaths of two of our colleagues," cooperating with authorities on cause determination; confirmed fumes were contained within one building at the facility.
- **Chemical identity caveat:** Open-source reporting reviewed (WV MetroNews, Mountain State Spotlight, NBC/ABC/NPR coverage) consistently attributes the release to a reaction between **nitric acid and Bonderite M2000A** generating **hydrogen sulfide**. This research pass did **not** find independent open-source confirmation of an NO2 component to the release chemistry specifically — the task brief's framing of an "H2S and NO2 release" should be cross-checked against the primary incident/technical lanes of this investigation (e.g., CSB preliminary findings, if available) before the dossier asserts NO2 as a confirmed co-released agent; NO2 toxicology above is included per the task brief as reference material regardless.
- **Regulatory response:** U.S. Chemical Safety Board (CSB) opened an investigation ("CSB Probes Fatal H2S Release at Catalyst Refiners" — Alliance Chemical trade coverage); OSHA also opened an investigation per Mountain State Spotlight reporting.

---

## 7. Source List

**Toxicology / exposure limits — H2S:**
- NIOSH, IDLH documentation for Hydrogen Sulfide (CAS 7783-06-4) — https://www.cdc.gov/niosh/idlh/7783064.html
- NIOSH, 1988 OSHA PEL Project — Hydrogen Sulfide — https://www.cdc.gov/niosh/chemicals/pel88/pell-pages/7783-06.html
- OSHA, Hydrogen Sulfide — Standards — https://www.osha.gov/hydrogen-sulfide/standards
- OSHA, Hydrogen Sulfide — Hazards — https://www.osha.gov/hydrogen-sulfide/hazards
- ATSDR, Toxicological Profile for Hydrogen Sulfide and Carbonyl Sulfide, Table 8-1 (NCBI Bookshelf) — https://www.ncbi.nlm.nih.gov/books/NBK591614/table/ch8.tab1/
- ATSDR, Medical Management Guidelines for Hydrogen Sulfide — https://wwwn.cdc.gov/TSP/MMG/MMGDetails.aspx?mmgid=385&toxid=67
- EPA AEGL Program, Hydrogen Sulfide Results — https://www.epa.gov/aegl/hydrogen-sulfide-results-aegl-program
- NAS/NRC, Hydrogen Sulfide Acute Exposure Guideline Levels (NCBI Bookshelf) — https://www.ncbi.nlm.nih.gov/books/NBK208170/
- ACGIH, Hydrogen Sulfide TLV page — https://www.acgih.org/hydrogen-sulfide/
- OnePetro/ASSP, "The Impact of the Hydrogen Sulfide (H2S) TLV/STEL Reduction of 2010" — https://onepetro.org/ASSPPDCE/proceedings/ASSE14/All-ASSE14/ASSE-14-609/78040
- Nature Scientific Reports, "Hydrogen Sulfide — Mechanisms of Toxicity and Development of an Antidote" — https://www.nature.com/articles/srep20831
- NIH/PMC, "Regulation of mitochondrial bioenergetic function by hydrogen sulfide" — https://pmc.ncbi.nlm.nih.gov/articles/PMC3976625/
- WikEM, Hydrogen Sulfide Toxicity — https://wikem.org/wiki/Hydrogen_sulfide_toxicity
- OSHA, Confined Space Handout — Effects of Hydrogen Sulfide — https://www.osha.gov/sites/default/files/2018-12/fy15_sh-27664-sh5_Confined_Space_Handout_Effects_of_H2S.pdf

**Toxicology / exposure limits — NO2:**
- NIOSH, IDLH documentation for Nitrogen Dioxide (CAS 10102-44-0) — https://www.cdc.gov/niosh/idlh/10102440.html
- NIOSH Pocket Guide to Chemical Hazards, Nitrogen Dioxide — https://www.cdc.gov/niosh/npg/npgd0448.html
- National Research Council, "Nitrogen Dioxide, Nitrogen Tetroxide, and Nitric Oxide" — 18th Interim Report of the Committee on AEGLs (NCBI Bookshelf) — https://www.ncbi.nlm.nih.gov/books/NBK208177/
- National Academies Press, Acute Exposure Guideline Levels for Selected Airborne Chemicals: Volume 11, Ch. on Nitrogen Oxides (Table 4-1 AEGL values) — https://www.nationalacademies.org/read/13374/chapter/8
- National Research Council, "Comments on Nitrogen Dioxide" — 15th Interim Report of the Committee on AEGLs — https://www.ncbi.nlm.nih.gov/books/NBK214712/
- PubMed, "Silo-Filler's disease" — https://pubmed.ncbi.nlm.nih.gov/1118673/
- Annals of Internal Medicine, "Silo-Filler's Disease: Nitrogen Dioxide-Induced Lung Injury — Long-Term Follow-up and Review of the Literature" — https://doi.org/10.7326/0003-4819-74-4-569
- StatPearls/NCBI Bookshelf, "Nitrogen Dioxide Toxicity" — https://www.ncbi.nlm.nih.gov/books/NBK554539/
- PMC, "Successful treatment of pulmonary injury after nitrogen oxide exposure with corticosteroid therapy" — https://pmc.ncbi.nlm.nih.gov/articles/PMC5257191/
- Iowa HHS, Epi Manual — Silo Filler's Disease — https://hhs.iowa.gov/epi-manual-guide-surveillance-investigation-and-reporting/environmental-disease/silo-fillers

**Flammability:**
- Wermac, "What is %LEL / %UEL and PID and PPM?" — https://www.wermac.org/safety/safety_what_is_lel_and_uel.html
- RLS Human Care, "H2S LEL and UEL" — https://rlsdhamal.com/h2s-lel-and-uel/

**Dispersion / modeling:**
- ResearchGate, "Application of the Gaussian Plume Model to Simulate Industrial Air Pollutant Dispersion" — https://www.researchgate.net/publication/398624134
- PMC, "An Application of the Gaussian Plume Model to Localization of an Indoor Gas Source with a Mobile Robot" — https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6308790/

**Emergency response doctrine:**
- OSHAcode, "HAZWOPER PPE Levels" — https://oshacode.com/hazwoper-ppe-levels/
- OSHAcode, "Understanding Level A PPE for Hazardous Operations" — https://oshacode.com/what-is-level-a-ppe/
- OSHAcode, "Respirator Comparison for HAZWOPER Levels A, B and C" — https://oshacode.com/respirator-comparison-for-hazwoper-levels-a-b-and-c/
- FEMA, "Planning and Decision Framework for Chemical Incident Consequence Management" (2022) — https://www.fema.gov/sites/default/files/documents/fema_planning-framework-for-chemical-incident-consequence-management-2022.pdf
- NRC, "Shelter in Place as a Public Protective Action" — https://www.nrc.gov/docs/ml1233/ML12339A626.pdf
- FEMA, "4.1 Evacuation/Sheltering," Key Planning Factors for Chemical Incidents — https://www.fema.gov/cbrn-tools/key-planning-factors-chemical-incident/kpf4/4/4-1
- NCBI Bookshelf/StatPearls, "EMS Hazardous Waste Response" — https://www.ncbi.nlm.nih.gov/books/NBK482193/
- CDC/NIOSH, "Acute Chemical Incidents With Injured First Responders, 2002–2012" — https://stacks.cdc.gov/view/cdc/51311/cdc_51311_DS1.pdf (also PubMed: https://pubmed.ncbi.nlm.nih.gov/28760164/)
- CDC/NIOSH, Emergency Responders topic page — https://archive.cdc.gov/www_cdc_gov/niosh/topics/emres/responders.html

**This-incident-specific:**
- Wikipedia, "2026 Institute, West Virginia chemical leak" — https://en.wikipedia.org/wiki/2026_Institute,_West_Virginia_chemical_leak
- NBC News, "2 dead in 'chemical release' at West Virginia manufacturing facility" — https://www.nbcnews.com/news/us-news/2-dead-chemical-release-west-virginia-manufacturing-facility-rcna341515
- ABC News, "2 dead, at least 19 injured following chemical leak at West Virginia industrial plant" — https://abcnews.com/US/2-dead-19-injured-chemical-leak-west-virginia/story?id=132281627
- WCHS-TV, "Two dead after chemical incident in Institute area; investigations underway" — https://wchstv.com/news/local/shelter-in-place-ordered-in-institute-after-reported-incident-at-catalyst-refiners
- WV MetroNews, "Ames Goldsmith confirms fatal tragedy in Kanawha County plant occurred during decommissioning work" — https://wvmetronews.com/2026/04/22/ames-goldsmith-confirms-fatal-tragedy-in-kanawha-county-plant-occurred-during-decommissioning-work/
- Mountain State Spotlight, "Fatal Institute chemical leak latest in Kanawha Valley plant disasters" — https://mountainstatespotlight.org/2026/04/22/kanawha-county-chemical-leak-institute/
- NPR, "Chemical leak at a W.Va. plant kills 2 people, sends 30 more to hospitals" — https://www.npr.org/2026/04/22/g-s1-118416/chemical-leak-west-virginia-institute
- West Virginia Public Broadcasting, "Two Dead, 19 Injured Following Chemical Leak In Institute" — https://wvpublic.org/story/energy-environment/shelter-in-place-order-in-effect-following-chemical-leak-in-institute/
- FireRescue1, "West Virginia chemical leak kills 2, sickens dozens including 7 EMS providers at Catalyst Refiners plant" — https://www.firerescue1.com/hazards-hazmat/7-ems-providers-among-at-least-30-sickened-at-fatal-w-va-chemical-leak
- Alliance Chemical, "CSB Probes Fatal H2S Release at Catalyst Refiners" — https://alliancechemical.com/blogs/news/csb-launches-investigation-into-fatal-hydrogen-sulfide-release-at-west-virginia
- Bailey, Javins & Carter L.C., "Chemical Disaster in Institute, WV" — https://www.baileyjavinscarter.com/chemical-disaster-in-institute-wv/
- WSAZ, "Several people receiving treatment after chemical emergency" — https://www.wsaz.com/2026/04/22/several-people-receiving-treatment-after-chemical-emergency/

---

## 8. Flags for the Investigation Team

1. **NO2 co-release is not independently confirmed** in the open-source incident reporting reviewed in this pass — all consolidated reporting attributes the release to nitric acid + Bonderite M2000A → H2S. Cross-check against CSB preliminary findings or other technical lanes before the dossier treats NO2 as a confirmed released agent at this specific incident (the toxicology in §2 remains valid general reference material either way).
2. ACGIH TLV for NO2 (3 ppm TWA / 5 ppm STEL) in the table above was not independently re-verified against a primary ACGIH source in this pass — flagged for confirmation.
3. Exact mechanism of the 7 EMS responders' exposure (direct atmospheric vs. secondary/patient off-gassing) was not specified in sources reviewed — worth an additional targeted FOIA/CSB-report pull if the dossier needs to characterize responder-safety failure modes for this specific incident.
