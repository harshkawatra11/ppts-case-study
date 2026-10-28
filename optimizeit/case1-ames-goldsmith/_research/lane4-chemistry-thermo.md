# Lane 4 — Chemistry & Thermodynamic Reference Data
## Ag2S "silver mud" + HNO3 (+ Bonderite M2000A cleaner) → H2S / NO2 release

Purpose: pure chemistry/thermo reference gathering to underpin a reaction-modeling
chapter. No incident-specific speculation — general reaction science only, fully cited.
All values below are commodity/textbook thermochemical data cross-checked across
multiple tertiary sources where NIST WebBook's own numeric tables were not directly
machine-readable (see §7 "Access notes / gaps"). Treat single-source numbers as
provisional until spot-checked against a primary handbook (CRC, NIST-JANAF) by hand.

---

## 1. Ag2S + HNO3 reaction chemistry (silver sulfide nitric-acid leaching)

### 1.1 Why Ag2S is not chemically inert to HNO3 despite its extreme insolubility
Silver sulfide has one of the lowest solubility products of any common inorganic
solid: **Ksp(Ag2S) ≈ 8.0 × 10⁻⁵¹** (commonly cited undergraduate/CRC-derived value;
molar solubility ≈ 1 × 10⁻¹⁷ M, mass solubility ≈ 3 × 10⁻¹⁵ g/L in pure water)
[Brainly/Chegg-transcribed problem sets citing standard CRC-style Ksp tables;
University of Sydney CHEM1612 problem set: https://scilearn.sydney.edu.au/firstyear/exams/chem1612/topic92_answers.pdf].
This means simple acid-dissociation dissolution (Ag2S + 2H+ → 2Ag+ + H2S) is
thermodynamically negligible at the Ksp level alone — a non-oxidizing acid essentially
cannot pull meaningful Ag+ into solution from bulk Ag2S. **The mechanism that actually
mobilizes Ag2S is oxidative attack on the sulfide (S²⁻) by the nitrate ion**, which
removes S²⁻ from the equilibrium by oxidizing it to a different species and pulls the
dissolution equilibrium forward — this is a standard "solubility via redox destruction
of the counter-ion" pathway, not simple acid-base dissolution.

### 1.2 Documented stoichiometric pathway (mining/hydrometallurgy literature)
The primary literature source located is:
**Holloway, P.C.; Merriam, K.P.; Etsell, T.H., "Nitric acid leaching of silver
sulphide precipitates," Hydrometallurgy 74(3–4), 2004, pp. 213–220.**
DOI: 10.1016/j.hydromet.2004.05.003.
ScienceDirect: https://www.sciencedirect.com/science/article/abs/pii/S0304386X04001082
(abstract-level access only — full text paywalled; ADS mirror:
https://ui.adsabs.harvard.edu/abs/2004HydMe..74..213H/abstract).

Findings reported (via search-engine-indexed abstract text, corroborated by the
Habashi review below):
- Ag2S precipitate (from photographic-industry silver recovery) leached with HNO3
  across a range of temperature, pressure, acid concentration, and solids loading.
- **Maximum silver extraction of 96.1%** achieved at **150 °C, 1100 kPa(g) pressure,
  9.6% solids, with 2× stoichiometric HNO3**.
- The oxidative dissolution net reaction reported elsewhere for this system (general
  hydrometallurgical nitrate-oxidation-of-sulfide stoichiometry, consistent with the
  Habashi review below) is:

  **3 Ag2S + 8 H+ + 2 NO3⁻ → 6 Ag+ + 3 S⁰ + 2 NO + 4 H2O**

  i.e., nitrate oxidizes sulfide (S²⁻ → S⁰, a 2-electron transfer) while nitrate itself
  is reduced N(+5) → N(+2) (NO), a 3-electron transfer, giving the 3:2 Ag2S:NO3⁻ ratio.
  This pathway deposits **elemental sulfur**, not sulfate and not H2S, under these
  hydrometallurgical leaching conditions.

- Second reference located: **Habashi, F., "Nitric acid in the hydrometallurgy of
  sulfides,"** (review article/chapter, sulfide-hydrometallurgy literature) — indexed at
  ResearchGate (https://www.researchgate.net/publication/287661305) but the direct PDF
  (hosted on researchgate.net author-profile links) returned **HTTP 403 Forbidden** on
  fetch attempts and could not be read in full; only search-engine-indexed excerpts were
  retrievable. Excerpts confirm the same class of reaction (nitrate oxidizing sulfide
  sulfur, competing elemental-S vs. sulfate pathways) and note the Sunshine Mine
  (Kellogg, Idaho) industrial precedent: a nitric+sulfuric acid mixed-leach process run
  at **155 °C, 620 kPa** to solubilize copper and silver from sulfide concentrate.
  **Gap: full mechanistic text of the Habashi review was not accessible; only
  secondary excerpts confirm it.**

### 1.3 Competing pathways depending on concentration/temperature
Multiple corroborating (textbook/technical) sources converge on the following
concentration/temperature dependence for sulfide + HNO3 oxidation chemistry generally
(not Ag2S-specific, but directly applicable since the sulfide ion is the reactive
center regardless of the parent metal):

- **Elemental sulfur (S⁰) formation is favored** under conditions used in dilute/warm
  leaching — search-engine-summarized hydrometallurgy literature states "oxidation of
  the sulfides to elemental sulfur rather than sulfate represents approximately a
  four-fold savings in [acid] reagent required," implying process operators
  deliberately hold conditions (moderate acid excess, moderate temperature) to stop
  oxidation at S⁰ rather than driving it all the way to sulfate, because full oxidation
  to SO4²⁻ consumes roughly 4× more oxidizing equivalents per sulfur atom (S²⁻→S⁰ is a
  2-electron step; S²⁻→SO4²⁻ is an 8-electron step).
- **Sulfate (SO4²⁻) formation is favored** by hot, concentrated HNO3 — "hot,
  concentrated nitric acid oxidises sulfur to sulfuric acid," with **NO2 as the
  nitrogen reduction product** under concentrated/hot conditions, versus **NO as the
  reduction product in dilute HNO3** (classic general-chemistry redox-couple behavior:
  concentrated HNO3 is reduced only 1 electron per N, N(+5)→N(+4)/NO2; dilute HNO3 is
  reduced 3 electrons per N, N(+5)→N(+2)/NO, because the more dilute/slower reaction
  allows further reduction before the intermediate escapes solution).
  [Source: search-engine-summarized general-chemistry/ScienceDirect Topics "Nitric
  Acid" overview page, https://www.sciencedirect.com/topics/chemical-engineering/nitric-acid,
  and standard redox textbook statements — this NO-vs-NO2 concentration dependence is
  well-established inorganic chemistry, reproduced consistently across every source
  checked.]
- **This creates a direct mechanistic link to both toxic gases named in the incident
  scenario**: at lower effective acid strength/temperature (e.g., after significant
  dilution or local depletion), the sulfide-oxidation pathway can fail to fully engage
  the oxidative route and instead run through simple non-oxidative acid-sulfide
  chemistry releasing **H2S gas directly** (see §2) — while the HNO3 itself,
  especially where locally concentrated/hot/catalyzed by the reaction's own exotherm,
  decomposes or is reduced to **NO2** (see §3). In other words: the same event can
  plausibly generate *both* gases simultaneously if the vessel contents were
  non-uniform in acid concentration/local temperature — concentrated/hot pockets near
  the point of acid addition driving NO2 evolution and sulfate/sulfur oxidation, while
  poorly-mixed or acid-depleted zones let unreacted or already-freed sulfide encounter
  acid under non-oxidizing-equivalent conditions and evolve H2S. **This mixed-pathway
  framing is an inference from the two independently documented single-pathway
  mechanisms, not itself found stated in the literature as a combined H2S+NO2
  co-release pathway for Ag2S+HNO3 specifically — flagged as an inference for the
  reaction-modeling chapter to test, not a cited fact.**

### 1.4 Ag2S dissolution kinetics data found
- Ferricyanide–cyanide leaching of Ag2S: diffusion-controlled, **activation energy
  6.7 kJ/mol** [ScienceDirect: https://www.sciencedirect.com/science/article/abs/pii/S0304386X07000783].
- Thiosulfate-based Ag2S leaching: chemical-reaction-controlled, **apparent activation
  energy 43.49 kJ/mol** [search-engine-summarized, source paper on Ag2S extraction with
  copper sulfate/sodium thiosulfate/sodium metabisulfite/ascorbic acid,
  https://www.sciencedirect.com/science/article/abs/pii/S0892687522002175].
- **Gap: no activation energy specifically for the HNO3–Ag2S system was located.**
  These two values are for different (non-nitric-acid) leaching chemistries and are
  included only as order-of-magnitude context for how fast Ag2S dissolution kinetics
  can be under favorable leaching agents; they should NOT be used directly as a rate
  constant for the HNO3 pathway without a caveat in the modeling chapter.

---

## 2. General mechanism: metal sulfide + strong acid → H2S

### 2.1 The general inorganic-chemistry rule
CAMEO Chemicals' reactive-group profile for **"Sulfides, Inorganic"**
(https://cameochemicals.noaa.gov/react/33) states directly:

> "Simple salts of sulfides... react vigorously with acids to release hydrogen sulfide
> gas."

The same NOAA datasheet documents this reactivity as occurring across essentially the
full acid spectrum tested in CAMEO's compatibility framework: **strong non-oxidizing
acids, strong oxidizing acids, weak acids, and carboxylic acids** are all listed as
generating H2S from inorganic sulfides — i.e., H2S evolution from a metal-sulfide +
acid contact is not conditional on the acid being weak/non-oxidizing; it is the default
outcome of simple proton attack on S²⁻, and it can occur **in parallel with** (not only
instead of) any oxidative pathway, especially if the oxidizer (nitrate) is locally
depleted, poorly mixed, or kinetically slower than the acid-base proton-transfer step.
Sulfides are also flagged generically as **reducing agents that react vigorously with
oxidizing substances** (a second, separate hazard axis from simple acid attack) — this
is the basis for the oxidative pathways in §1.

### 2.2 Toxicological threshold context (for later risk-magnitude framing)
Per the same CAMEO reactive-group sheet: H2S "irritates the eyes and mucous membranes
at concentrations of around 50 ppm" and is lethal at approximately **1,000 ppm**.
[https://cameochemicals.noaa.gov/react/33] Also see CAMEO's dedicated Hydrogen Sulfide
chemical datasheet: https://cameochemicals.noaa.gov/chemical/3625.

### 2.3 Condition-dependence: which pathway dominates
Cross-referencing §1.3 and §2.1: the literature supports a **two-competing-pathway
model** for any metal sulfide contacted by nitric acid:
1. **Non-oxidative (Brønsted acid-base) pathway**: 2H+ + S²⁻ → H2S(g). Always
   thermodynamically and kinetically available wherever free/accessible H+ meets
   accessible S²⁻ — favored when the oxidizing capacity of the local HNO3 pool is
   already consumed (spent acid), or where reaction is too fast/local for the
   oxidative electron-transfer mechanism to out-compete simple protonation, or where
   the sulfide is presented in a form (e.g., loosely bound in a wet sludge/"mud" matrix
   with abundant free sulfide/bisulfide, rather than a dense crystalline Ag2S lattice)
   that is kinetically more accessible to protons than to the slower oxidative
   dissolution mechanism.
2. **Oxidative pathway** (§1.2–1.3): nitrate ion attacks S²⁻ directly, bypassing free
   H2S formation entirely and instead forming S⁰ or SO4²⁻, with HNO3 itself reduced to
   NO or NO2. Favored by excess strong/hot HNO3 in good contact with the sulfide.
- **Gap: no single source quantifies a concentration/temperature threshold ("below X M
  HNO3 or above Y°C, pathway 1 dominates") for Ag2S or any silver-bearing sulfide
  specifically.** This threshold, if needed quantitatively for the modeling chapter,
  would need to be estimated/bounded rather than cited — flagged as a gap for that
  later chapter, per task instructions.

---

## 3. Nitric acid → NO2 (NOx) generation pathways

### 3.1 Simple thermal/photolytic decomposition
Standard inorganic chemistry reaction (widely reproduced in general-chemistry course
material, e.g. CBSE Class 11 curriculum sources found via search):

**4 HNO3 → 4 NO2 + O2 + 2 H2O**

Concentrated nitric acid is thermodynamically unstable and undergoes slow
photolytic/thermal decomposition even at room temperature in sunlight, turning the
solution yellow/brown from dissolved NO2; heating strongly accelerates this
decomposition. [Multiple general-chemistry sources via WebSearch, e.g.
https://www.vedantu.com/question-answer/concentrated-nitric-acid-is-heated-it-decomposes-class-11-chemistry-cbse-5f9168c7bba7ee61564406ab;
kinetics detail in Johnston/Giauque-type "Kinetics of the Thermal Decomposition of
Nitric Acid Vapor" series, e.g. https://pubs.acs.org/doi/10.1021/j150505a002 — this is
a classic J. Phys. Chem. mechanistic study of HNO3 vapor decomposition kinetics;
**full text not fetched, abstract/indexing only**.]

### 3.2 NO2 as the reduction product when HNO3 oxidizes a reducing agent
As established in §1.3: **concentrated/hot HNO3 acting as an oxidizer is reduced to
NO2** (1-electron N(+5)→N(+4) step), versus **dilute HNO3 being reduced to NO**
(3-electron N(+5)→N(+2) step). This is the general rule for HNO3 oxidizing any
reducing agent — sulfur, sulfide, metals, organics — not unique to the Ag2S system.
Applied to this scenario: if the reaction ran hot (exothermic oxidative sulfide attack
raising local temperature) and/or the HNO3 was concentrated at the point of contact
(e.g., before significant dilution/consumption), **NO2 is the expected nitrogen
reduction product**, consistent with the incident's reported "NO2 fumes."
[ScienceDirect Topics "Nitric Acid" overview: https://www.sciencedirect.com/topics/chemical-engineering/nitric-acid]

### 3.3 CAMEO incompatibility confirmation
CAMEO Chemicals' datasheet for **"Nitric Acid, Other Than Red Fuming"**
(https://cameochemicals.noaa.gov/chemical/19337) classifies nitric acid as a
**"Strong Oxidizing Agent" with "Known Catalytic Activity,"** and separately documents
that fuming nitric acid reacts with hydrogen sulfide **"with incandescence"** — i.e., a
self-sustaining, light-and-heat-producing vigorous reaction, not a mild fizz. The same
datasheet lists broad incompatibility with reducing agents generally (alcohols, amines,
ammonia, hydrocarbons, hydrogen, powdered metals — especially magnesium, phosphine/
phosphorus compounds) and states HNO3 produces "corrosive and/or toxic fumes" and
"toxic, corrosive, or flammable gases" on reaction with incompatible materials or even
water. **The datasheet's automated/summarized text did not explicitly enumerate NO2 by
name as the specific fume product in the excerpt retrieved — flagged as a minor gap;
the NO2 identification instead rests on §3.1–3.2's general inorganic chemistry, which is
unambiguous and textbook-standard.**

### 3.4 Bretherick's-type incompatibility corroboration
Bretherick's Handbook of Reactive Chemical Hazards (indexed via search, full text not
directly fetched — 7th ed. PDF located at
https://chemcraft.su/sites/chemcraft.su/files/field/file/bretherick_s_handbook_of_reactive_chemical_hazards_7th_ed.pdf
but not read in full in this pass) is search-engine-summarized as documenting that
nitric acid "ignites upon contact with alcohols, amines, ammonia, beryllium alkyls,
boranes, dicyanogen, hydrazines, hydrocarbons, hydrogen, nitroalkanes, powdered metals,
silanes, or thiols" and separately confirms the "incandescence" reaction with H2S/H2Se
also carried in the CAMEO sheet — cross-source agreement between CAMEO and Bretherick's
strengthens confidence in the H2S+HNO3 vigorous-reaction claim specifically.
**Gap: did not obtain primary-text confirmation of Bretherick's exact wording; relying
on search-engine paraphrase of the handbook, corroborated by CAMEO's independent
sourcing of the same underlying fact.**

---

## 4. Thermochemical data table

All values are standard-state (298.15 K, 1 bar/1 atm) standard enthalpies of formation
unless noted. Sourcing quality is marked: **[NIST]** = read directly off a NIST
WebBook page in this session; **[Xtab]** = cross-tabulated/multiply-corroborated
textbook value (CRC/JANAF-derived, reproduced consistently across ≥2 independent
search-indexed sources); **[1-src]** = single-source, not independently corroborated
in this pass — treat as provisional.

| Species | State | ΔfH° (kJ/mol) | Other data | Source quality | Citation |
|---|---|---|---|---|---|
| HNO3 | gas | **−134.31** | S° = 266.39 J/mol·K; Shomate Cp coefficients captured (298–1200 K and 1200–6000 K ranges) | **[NIST]** | NIST WebBook, https://webbook.nist.gov/cgi/cbook.cgi?ID=C7697372&Mask=FFF (data reviewed June 1963, ref. Chase 1998/NIST-JANAF) |
| HNO3 | liquid | *not retrieved* | — | **GAP** | NIST WebBook page exists but liquid-phase table not machine-readable in this session; commonly cited literature value is ≈ −174 kJ/mol but this was **not independently confirmed** here — do not cite without a second check |
| HNO3 | aqueous | *not retrieved* | — | **GAP** | same as above |
| H2S | gas | **−20.6** (also seen as −20.5, −20.2 in rounding variants) | — | **[Xtab]** | Reproduced across CK-12 (https://www.ck12.org/flexi/chemistry/heat-of-reaction/...), multiple Brainly/Chegg problem-set transcriptions of standard CRC-style tables, and ANL Active Thermochemical Tables entry (https://atct.anl.gov/Thermochemical%20Data/version%201.122/species/?species_number=238) |
| H2S | aqueous | *not retrieved* (commonly cited ≈ −39.7 kJ/mol in general use, but **not confirmed** in this session) | — | **GAP** | search did not surface a source stating this value directly — flagged, do not cite the −39.7 figure without independent verification |
| NO2 | gas | **+33.2** | — | **[Xtab]** | NIST-JANAF-attributed value, reproduced consistently across multiple general-chemistry references found via search; NIST WebBook page confirmed to host JANAFG table (https://webbook.nist.gov/cgi/cbook.cgi?ID=C7727379...) but numeric table itself not machine-read in this pass |
| NO | gas | *not retrieved numerically this session* (well-known standard value ≈ +90.25 kJ/mol from general chemistry, but **not independently re-confirmed** here) | — | **GAP (unconfirmed)** | flagged — use with caution until re-checked |
| H2O | liquid | **−285.8** (textbook standard; repeatedly used as a known input value across multiple problem-set sources cross-checked, e.g. CK-12 H2S reaction problem) | — | **[Xtab]** | Universally standard CODATA/CRC value; NIST WebBook water page located (https://webbook.nist.gov/cgi/cbook.cgi?ID=C7732185&Mask=2) but not machine-read numerically — value used here is the well-established literature constant, not a fresh NIST read |
| S | solid, rhombic (reference state) | **0** (by convention, standard reference state of the element) | — | **[Xtab]** | Standard thermodynamic convention |
| Ag2S | solid | **≈ −31.8 to −33** kJ/mol (range across sources: Wikidata −33 kJ/mol; other tabulations −31.8 kJ/mol and −32.6 kJ/mol) | Heat capacity 5–1000 K and phase-transition data available in a dedicated study | **[1-src, inconsistent]** | Wikidata (https://www.wikidata.org/wiki/Q421085); heat-capacity/phase-transition source: "Silver(I) sulfide: Ag2S Heat capacity from 5 to 1000 K, thermodynamic properties, and transitions," ScienceDirect, https://www.sciencedirect.com/science/article/abs/pii/0021961486900844 (abstract-level only — **full Cp data table not extracted, flagged as a gap** for the adiabatic-temperature-rise estimate; the paper exists and is the right primary source to chase down for that chapter) |
| AgNO3 | solid | **−124.4** (also cited −123.02 kJ/mol in one homework-transcribed source; discrepancy ~1.4 kJ/mol likely reflects different compilations/rounding) | — | **[Xtab, minor spread]** | Multiple homework/reference sources converge near −123 to −124.4 kJ/mol |
| AgNO3 | aqueous | *not retrieved* | — | **GAP** | Search did not surface a direct CRC/NIST aqueous value in this session |
| Ag+ | aqueous ion | **+105.6 to +105.79** | — | **[Xtab]** | Consistent across multiple standard-enthalpy compilation pages found via search (e.g. mrbigler.com energy-of-formation table, conradnaleway.net ThermoData.PDF — both textbook-standard compilations, not independently re-derived here) |
| NO3− | aqueous ion | *not retrieved numerically* (commonly cited standard value ≈ −207 kJ/mol, but **not confirmed** in this session's searches) | — | **GAP (unconfirmed)** | flagged |
| SO4²− | aqueous ion | **−909.27** (one source shows "907.5" without sign, treat as a transcription artifact of the same value) | — | **[Xtab]** | Cross-referenced via CK-12 problem source and general compilation table (conradnaleway.net ThermoData.PDF, sistemas.eel.usp.br standard-enthalpy PDF) — both are standard textbook/CRC-style values, not independently re-derived |
| H2SO4 | aqueous | **−909.3** | — | **[Xtab]** | Same source family as SO4²−(aq); consistent with the SO4²− value since H2SO4(aq) is essentially fully dissociated |
| O2 | gas | **0** (reference state) | — | **[Xtab]** | Standard convention |
| Ksp, Ag2S | — | **8.00 × 10⁻⁵¹** | molar solubility ≈ 1×10⁻¹⁷ M; mass solubility ≈ 3.12×10⁻¹⁵ g/L | **[Xtab]** | Reproduced across multiple standard general-chemistry problem sets (Chegg/Brainly transcriptions of a common CRC-style Ksp table) and University of Sydney CHEM1612 exam solutions PDF: https://scilearn.sydney.edu.au/firstyear/exams/chem1612/topic92_answers.pdf |

**Heat capacity (Cp) data found:** only HNO3(g) Shomate coefficients were
successfully extracted from a live NIST WebBook fetch (see table row above). No Cp
data for H2S(g), NO2(g), Ag2S(s) beyond the abstract-level mention of a dedicated
5–1000 K Ag2S heat-capacity study (not extracted), AgNO3, or aqueous species was
obtained in this pass. **This is the single largest data gap for the later adiabatic
temperature-rise / reaction-calorimetry estimate** — the modeling chapter will need
either a direct NIST-JANAF table pull (not accessible via this session's WebFetch
tooling, which could not render NIST's dynamically-generated numeric tables or the
PDF-format compiled tables encountered) or Cp estimation via group-contribution /
Kopp's rule as a fallback, explicitly flagged as an estimate.

---

## 5. Chemical incompatibility references (CAMEO / CCPS)

### 5.1 CAMEO Chemicals — direct findings
- **Sulfides, Inorganic reactive group** (https://cameochemicals.noaa.gov/react/33):
  reacts vigorously with acids (all classes: strong non-oxidizing, strong oxidizing,
  weak, carboxylic) to release H2S; separately reacts vigorously with oxidizing agents
  as sulfides are reducing agents; some members can spontaneously heat/ignite with
  moisture; H2S itself has wide flammability limits, adding a secondary fire/explosion
  hazard axis beyond toxicity.
- **Nitric Acid, Other Than Red Fuming** (https://cameochemicals.noaa.gov/chemical/19337):
  classified Strong Oxidizing Agent with Known Catalytic Activity; reacts with hydrogen
  sulfide "with incandescence" (and identically with hydrogen selenide); broad
  incompatibility list includes alcohols, amines, ammonia, hydrocarbons, hydrogen,
  powdered metals (esp. magnesium), phosphine/phosphorus compounds, acetone mixtures;
  produces corrosive/toxic fumes and toxic/corrosive/flammable gases on reaction with
  incompatible materials or water.
- **Nitric Acid, Red Fuming** (https://cameochemicals.noaa.gov/chemical/4044) — located
  but not separately fetched in detail this session; likely to carry the same or more
  severe reactivity flags than the non-fuming grade. **Not read — flag for a follow-up
  pass if red-fuming-grade specifics become relevant** (unlikely for this scenario,
  which almost certainly involved technical/concentrated but non-fuming HNO3).
- **Hydrogen Sulfide chemical datasheet** (https://cameochemicals.noaa.gov/chemical/3625):
  confirmed incompatible with strong oxidizers, metals, strong nitric acid, and several
  halogen/interhalogen oxidizers (bromine pentafluoride, chlorine trifluoride, nitrogen
  triiodide, nitrogen trichloride, oxygen difluoride, phenyl diazonium chloride) —
  consistent, independently-sourced confirmation of the nitric acid/H2S incompatibility
  from the "other side" of the reaction pair.

### 5.2 Bonderite M2000A (unknown surfactant/acid-adjacent cleaner)
**Gap — no composition-specific reactivity data located.** Bonderite M2000A is a
Henkel-branded industrial metal-cleaning/conditioning product; its exact formulation is
proprietary and was not disclosed in any source surfaced by this search pass (no SDS
was fetched in this lane — that would be a natural follow-up for whichever lane handles
incident-specific facts). Generically, acid-based industrial cleaners/conditioners are
well-documented in CCPS-type guidance as a common contributor to **unintended gas
generation when mixed with unrelated process residues** — the clearest documented
analog found is the well-known **acid-cleaner + sodium hypochlorite → chlorine gas**
mixing hazard cited in CCPS-adjacent literature ("even residual acid in a container can
release chlorine gas when bleach is added" — search-summarized from AIChE/CCPS-adjacent
sourcing). This is offered only as a **structural analogy** (acid-type cleaning
chemical unexpectedly contacting a reactive residue in a vessel triggers gas
evolution), not as evidence about M2000A's actual chemistry, which remains unknown.

### 5.3 CCPS / CRW framework
The Center for Chemical Process Safety maintains the **Chemical Reactivity Worksheet
(CRW4)** and companion guidance (*Essential Practices for Managing Chemical Reactivity
Hazards*; *Guidelines for Risk-Based Process Safety*), which classify chemical-pair
interactions as benign / exothermic / gas-evolving / potentially violent by comparing
against a reactive-group database — the same underlying database CAMEO Chemicals draws
on. [Source: search-summarized from
https://synbioconference.org/sites/default/files/docs/pages/Davis_REST_Paper1.pdf and
https://www.ijert.org/chemical-reactive-risk-identify-by-using-chemical-reactive-worksheet-crw4-software]
**Gap: did not run the actual CRW4 tool or fetch its full guidance documents — this
section is a signpost to the right tool/framework for later verification, not a
direct data pull.**

---

## 6. Precedent incidents (acid + sulfide residue → H2S) outside this case

- **Silver-recovery-industry hazard (photographic/precious-metal reclamation)**:
  search-engine-summarized patent-literature sources (multiple US patents on silver
  recovery from photographic waste, e.g.
  https://image-ppubs.uspto.gov/dirsearch-public/print/downloadPdf/4437889 and related)
  explicitly flag that **sulfide-based silver-recovery processes carry a known H2S
  generation hazard**, and separately note that if H2S is generated in the presence of
  silver ions, it will immediately re-precipitate as fine-particulate Ag2S (a chemical
  detail relevant to why "silver mud" sediment accumulates as Ag2S in spent-catalyst/
  photographic-refining vessels in the first place — it is the thermodynamically
  favored sink whenever Ag+ and any sulfide species are both present, consistent with
  the Ksp value in §1.1/§4).
  **This is the most directly on-point precedent found** — same industry family
  (silver reclamation), same core hazard (H2S from sulfide+acid), though not a
  citable "incident report," just process-hazard literature embedded in patent
  prior-art discussion.
- **Wastewater/sewer H2S generation**: extensive literature exists
  (e.g. https://iwaponline.com/jwcc/article/14/10/3713/97600/,
  https://www.ncbi.nlm.nih.gov/pmc/articles/PMC10641707/ — a case report of H2S
  poisoning at a waste treatment plant) but this pathway is **biogenic** (sulfate-
  reducing bacteria under anaerobic conditions producing H2S over time), not acid-
  triggered chemical release — **mechanistically different from this incident** and
  only useful as generic H2S toxicity/exposure context (consistent with the same
  ~50 ppm irritation / ~1,000 ppm lethal thresholds noted in §2.2), not as a reaction
  mechanism precedent.
- **CSB case study search**: no CSB (U.S. Chemical Safety and Hazard Investigation
  Board) case study specifically matching "acid + metal-sulfide sludge → H2S release"
  was located in this search pass. **Gap — flagged explicitly.** A targeted follow-up
  directly on csb.gov (rather than general web search) is recommended if a close CSB
  precedent is needed; general search did not surface one, though CSB has covered
  numerous other reactive-chemical/uncontrolled-reaction incidents (see
  https://www.csb.gov/file.aspx?DocumentId=5606 — a CSB reactive-hazards document
  found but not confirmed to be on-topic; not fetched in detail).

---

## 7. Access notes / explicit gaps summary

For the modeling chapter's benefit, consolidated list of what could **not** be pulled
in this pass and would need a targeted follow-up:

1. **NIST WebBook numeric tables for H2S(g), NO2(g), HNO3(l/aq), NO(g), NO3−(aq)** —
   WebFetch could retrieve the HNO3(g) Shomate/ΔfH° table successfully but could not
   render the equivalent numeric tables for the other species (pages returned
   navigation/link text only, not the embedded data tables). A follow-up should try
   NIST WebBook's plain-text/ASCII table export endpoints if available, or a different
   fetch tool.
2. **Ag2S(s) and AgNO3(s/aq) Cp / heat-capacity data** — a directly relevant paper
   exists (ScienceDirect 0021961486900844, "Ag2S Heat capacity from 5 to 1000 K") but
   is paywalled beyond the abstract; needed for any serious adiabatic ΔT calculation.
3. **Habashi's full "Nitric acid in the hydrometallurgy of sulfides" text** —
   ResearchGate-hosted PDF returned HTTP 403; only search-indexed excerpts obtained.
4. **Holloway/Merriam/Etsell 2004 Hydrometallurgy paper full text** — ScienceDirect
   abstract page returned HTTP 403 on direct fetch; only search-engine-cached
   abstract summary obtained. The exact stoichiometric equation attributed to this
   leaching system in §1.2 should be treated as **corroborated but not verbatim-quoted
   from the primary source** — it is the standard nitrate-oxidizes-sulfide-to-S⁰
   stoichiometry consistent with the paper's reported conditions/yields, not a
   sentence lifted directly from the PDF.
5. **Bonderite M2000A composition/SDS** — not sourced in this lane at all; explicitly
   out of scope per the task's framing ("treat as an unknown surfactant/acid-adjacent
   cleaner") but flagged again here in case another lane has SDS access.
6. **A direct CSB or OSHA incident report matching this precise mechanism** — not
   found; the closest precedent is the silver-reclamation-industry hazard note in §6.
7. **Quantitative HNO3 concentration/temperature threshold separating the H2S-dominant
   vs. oxidative(S⁰/SO4²⁻)-dominant pathway for a silver-sulfide system specifically**
   — not found in the literature; will need to be bounded/estimated by the modeling
   chapter using the general redox thermodynamics assembled here (§1.3, §2.3) rather
   than cited from a source.

---

## 8. Source list (all URLs referenced above)

- NIST WebBook, Nitric acid: https://webbook.nist.gov/cgi/cbook.cgi?ID=C7697372&Mask=FFF
- NIST WebBook, Hydrogen sulfide: https://webbook.nist.gov/cgi/cbook.cgi?ID=C7783064&Mask=1
- NIST WebBook, Nitrogen (NO2 JANAF table pointer): https://webbook.nist.gov/cgi/cbook.cgi?ID=C7727379&Mask=1
- NIST WebBook, Water: https://webbook.nist.gov/cgi/cbook.cgi?ID=C7732185&Mask=2
- NIST WebBook, Sulfur: https://webbook.nist.gov/cgi/cbook.cgi?ID=C7704349&Mask=1EFF
- ANL Active Thermochemical Tables, H2S: https://atct.anl.gov/Thermochemical%20Data/version%201.122/species/?species_number=238
- ANL ATcT, Nitric acid: https://atct.anl.gov/Thermochemical%20Data/version%201.122/species/?species_number=267
- Holloway, Merriam, Etsell (2004), Hydrometallurgy 74: https://www.sciencedirect.com/science/article/abs/pii/S0304386X04001082 ; ADS mirror https://ui.adsabs.harvard.edu/abs/2004HydMe..74..213H/abstract
- Habashi, "Nitric acid in the hydrometallurgy of sulfides": https://www.researchgate.net/publication/287661305_Nitric_acid_in_the_hydrometallurgy_of_sulfides
- Pressure leaching Pb-Zn-Ag concentrate with HNO3: https://www.sciencedirect.com/science/article/abs/pii/S0304386X10000897
- Ag2S ferricyanide-cyanide leaching kinetics: https://www.sciencedirect.com/science/article/abs/pii/S0304386X07000783
- Ag2S extraction with thiosulfate/metabisulfite/ascorbic acid: https://www.sciencedirect.com/science/article/abs/pii/S0892687522002175
- CAMEO Chemicals, Sulfides Inorganic reactive group: https://cameochemicals.noaa.gov/react/33
- CAMEO Chemicals, Nitric Acid (other than red fuming): https://cameochemicals.noaa.gov/chemical/19337
- CAMEO Chemicals, Nitric Acid (red fuming): https://cameochemicals.noaa.gov/chemical/4044
- CAMEO Chemicals, Hydrogen Sulfide: https://cameochemicals.noaa.gov/chemical/3625
- ScienceDirect Topics, Nitric Acid overview: https://www.sciencedirect.com/topics/chemical-engineering/nitric-acid
- Ag2S heat capacity 5-1000K study: https://www.sciencedirect.com/science/article/abs/pii/0021961486900844
- Ag2S Ksp problem set (Univ. Sydney CHEM1612): https://scilearn.sydney.edu.au/firstyear/exams/chem1612/topic92_answers.pdf
- Wikidata, Silver sulfide: https://www.wikidata.org/wiki/Q421085
- Bretherick's Handbook (7th ed., indexed only): https://chemcraft.su/sites/chemcraft.su/files/field/file/bretherick_s_handbook_of_reactive_chemical_hazards_7th_ed.pdf
- CSB reactive-hazards document (unconfirmed relevance): https://www.csb.gov/file.aspx?DocumentId=5606
- CCPS CRW4 background: https://synbioconference.org/sites/default/files/docs/pages/Davis_REST_Paper1.pdf ; https://www.ijert.org/chemical-reactive-risk-identify-by-using-chemical-reactive-worksheet-crw4-software
- H2S poisoning case report, waste treatment plant: https://www.ncbi.nlm.nih.gov/pmc/articles/PMC10641707/
