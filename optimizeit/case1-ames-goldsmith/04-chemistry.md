# Chapter 4 — Thermodynamic and Kinetic Reaction Modelling

> **Confidence & Provenance callout.** This chapter reconstructs *what chemistry is
> capable of producing the observed release*, not what was measured inside the vessel —
> no primary sampling data, vessel geometry, residue mass, or acid volume from the
> Institute/Nitro incident is in the public record. Every quantitative figure below is a
> **parameterized engineering estimate**, explicitly bounded by a stated assumption set,
> never a claim about the actual event. Qualitative chemistry (reaction pathways, the
> H2S release itself) is [VERIFIED] to the standard set in the dossier's baseline
> document; thermochemical inputs are tagged by source quality inline
> (**[NIST]** / **[Xtab]** / **[1-src]**); NO2 formation is explicitly [INFERRED] and
> flagged as *not* independently confirmed as an actual released species in open
> reporting — treat it as chemically expected, not evidentially established, everywhere
> it appears in this chapter. All reaction-modelling content below is our own
> reconstruction from general inorganic-chemistry and hydrometallurgical literature; it
> is not sourced to, or endorsed by, any CSB finding — the CSB investigation is ongoing
> and has published no cause determination [S-01].

---

## 4.1 The starting puzzle: Ag2S should not react easily with anything

Silver sulfide is one of the least soluble inorganic solids known. Its solubility
product, **Ksp(Ag2S) ≈ 8.0 × 10⁻⁵¹** [Xtab, S-02], corresponds to a molar solubility of
roughly 1 × 10⁻¹⁷ M — about 3 × 10⁻¹⁵ g/L in pure water. At the level of simple
acid-base dissociation,

**Ag2S(s) + 2 H⁺ → 2 Ag⁺(aq) + H2S(g)**  ... (Eq. 1, non-oxidative)

the equilibrium constant for this reaction is fixed by Ksp and the (very large)
protonation constants of S²⁻, and at the Ksp level alone the forward reaction is
essentially negligible — a non-oxidizing, non-complexing acid cannot mechanically pull
meaningful Ag⁺ into solution from bulk crystalline Ag2S just by mass-action dissolution
[Xtab, S-02, S-03]. This matters directly for the incident reconstruction: it means the
naive mental model — "nitric acid poured onto silver-sulfide sludge simply dissolves it
via Eq. 1" — is thermodynamically too weak to be the operative mechanism *if* the
mechanism required is exclusively equilibrium dissolution of a dense Ag2S solid. Two
resolutions exist, and the real event most likely involved a combination of both,
described in §4.2–§4.4 below.

It is worth stating plainly why Ag2S was present at all. Ames Goldsmith's Institute/Nitro
facility refined both silver and ethylene-oxide (EO) catalysts [S-04]. Silver EO
catalysts are irreversibly poisoned by trace sulfur species (H2S, COS, mercaptans) in
the ethylene feed, which chemisorb onto the silver surface and convert it to Ag2S
in situ — a well-documented catalyst-deactivation mechanism, essentially complete once
sulfur contacts silver, because of the same vanishingly small Ksp that makes Ag2S so
inert once formed [S-05]. A refiner receiving spent EO catalyst as routine feedstock
should therefore be expected, as a matter of ordinary process chemistry rather than any
site-specific finding, to carry Ag2S-bearing residues ("silver mud") in its tanks and
anode-slime streams [S-05, S-06] — this is the generic industrial explanation for why a
sulfide-bearing solid was sitting in a legacy vessel undergoing decommissioning at all,
independent of any accident-specific fact.

---

## 4.2 Pathway A — oxidative nitrate attack (the "controlled leaching" pathway)

The pathway that actually mobilizes bulk Ag2S in the hydrometallurgical literature is
not simple protonation but **oxidative destruction of the sulfide counter-ion by
nitrate**, which removes S²⁻ from the dissolution equilibrium by converting it to a
different chemical species (elemental sulfur or sulfate) rather than by chemically
attacking the Ag–S bond directly. This is a standard "solubility via redox destruction
of the counter-ion" mechanism, not classical acid-base dissolution [S-02].

The primary literature source is **Holloway, Merriam & Etsell (2004),
*Hydrometallurgy* 74(3–4):213–220**, "Nitric acid leaching of silver sulphide
precipitates" [S-07] (abstract-level access only — full text paywalled, flagged per the
epistemic rules). Their reported result: **maximum silver extraction of 96.1%** was
achieved at **150 °C, 1,100 kPa(g) pressure, 9.6% solids loading, with 2× stoichiometric
HNO3**. The net oxidative-dissolution stoichiometry consistent with these reported
conditions (corroborated by the companion Habashi review of nitric-acid sulfide
hydrometallurgy, also abstract-only access [S-08]) is:

**3 Ag2S(s) + 8 H⁺ + 2 NO3⁻ → 6 Ag⁺(aq) + 3 S⁰(s) + 2 NO(g) + 4 H2O(l)**  ... (Eq. 2, oxidative, elemental-S route)

Electron-balance check: sulfide sulfur is oxidized S(−II) → S(0), a 2-electron
transfer per sulfur, so 3 mol Ag2S (3 mol S²⁻) release 6 electrons; nitrogen is reduced
N(+5) → N(+2) (NO), a 3-electron transfer per nitrogen, so 2 mol NO3⁻ absorb 6 electrons
— the 3:2 Ag2S:NO3⁻ ratio balances exactly. This pathway deposits **elemental sulfur**,
not H2S and not sulfate, and is the industrially deliberate outcome: operators hold
moderate acid excess and moderate temperature specifically to stop oxidation at S⁰
rather than driving it to sulfate, because full oxidation to SO4²⁻ is an 8-electron step
per sulfur (four times the oxidizing-equivalent cost) [S-02]. Under hotter, more
concentrated conditions the sulfate pathway can dominate instead:

**3 Ag2S(s) + 20 H⁺ + 8 NO3⁻ → 6 Ag⁺(aq) + 3 SO4²⁻ + 8 NO2(g)↑ + 10 H2O(l)**  ... (Eq. 2b, oxidative, sulfate route, NO2-forming variant)

(Eq. 2b is our own balanced construction consistent with the general redox rule
documented in the literature — concentrated/hot HNO3 is reduced only one electron per N,
N(+5)→N(+4)/NO2, versus three electrons per N, N(+5)→N(+2)/NO, in dilute conditions
[S-09] — combined with the 8-electron S(−II)→S(+VI) sulfate oxidation step; it is not
itself lifted verbatim from a cited source and should be read as an inference, not a
quotation.)

**Why Pathway A is unlikely to have dominated the actual event.** The 96.1%-extraction
result was obtained under *sustained, controlled* process conditions — 150 °C,
elevated pressure (1,100 kPa(g), i.e. roughly 11 atm), a full two-fold stoichiometric
excess of acid, and 9.6% solids loading maintained in a stirred, temperature-regulated
reactor over a defined leach residence time [S-07]. An uncontrolled introduction of
nitric acid into a legacy decommissioning vessel — ambient temperature and pressure, no
forced mixing, unknown/likely sub-stoichiometric local acid-to-sulfide ratios, and no
process control — is a fundamentally different regime. This is an [INFERRED] engineering
judgment, not a cited fact: the oxidative pathway is kinetically and thermodynamically
*available* at ambient conditions but requires sustained heat and pressure to become the
*dominant* consumption route for the sulfide inventory; without that sustained forcing,
the nitrate-oxidation pathway competes with, but does not out-run, the pathway below.

---

## 4.3 Pathway B — simple Brønsted acid attack (the H2S-releasing pathway)

CAMEO Chemicals' reactive-group profile for **"Sulfides, Inorganic"** states directly
that simple metal sulfides "react vigorously with acids to release hydrogen sulfide
gas" [S-10], and — critically for this reconstruction — documents this outcome across
**the full acid spectrum tested**: strong non-oxidizing acids, strong oxidizing acids
(which includes nitric acid), weak acids, and carboxylic acids are *all* listed as
generating H2S from inorganic sulfides. In other words, H2S evolution from acid-sulfide
contact is not conditional on the acid being weak or non-oxidizing — it is the default
outcome of simple proton attack on S²⁻ (Eq. 1), and CAMEO explicitly frames it as
occurring **in parallel with**, not only instead of, any oxidative route, especially
where the oxidizer (nitrate) is locally depleted, poorly mixed, or kinetically slower
than the proton-transfer step [S-10].

**2 H⁺ + S²⁻ → H2S(g)**  ... (Eq. 1, restated)

or, written against the full Ag2S formula with a non-oxidizing/spent-acid proton source:

**Ag2S(s) + 2 H⁺ → 2 Ag⁺(aq) + H2S(g)**  ... (Eq. 1a)

**Why Pathway B is the better fit for an uncontrolled dump.** Four factors, each
[INFERRED] from the general chemistry assembled in §4.2–§4.3 rather than sourced to an
incident-specific finding, push an uncontrolled vessel event toward Pathway B rather
than Pathway A:

1. **No sustained temperature/pressure forcing.** Pathway A's 96% yield required 150 °C
   and ~11 atm sustained over a leach cycle. A vessel at ambient pressure and starting
   near room temperature has none of that forcing available at t=0; the reaction has to
   generate its own heat before the oxidative route can accelerate (see §4.5 kinetics),
   and by the time local heating is significant, gas has likely already been released
   via the always-available proton-transfer channel.
2. **Poor mixing / concentration gradients.** A "dump" (acid added to a static
   sludge-holding legacy tank, rather than a stirred reactor) produces sharp local
   concentration gradients. Near the point of acid addition, HNO3 is locally
   concentrated and hot (favoring Pathway A / Eq. 2b and NO2 formation, §4.4); away from
   that zone, acid is dilute, partially spent, or simply hasn't reached the sulfide yet
   — exactly the conditions CAMEO flags as favoring the non-oxidative H2S channel
   [S-10].
3. **Physical form of the sulfide.** "Silver mud" is described in the process
   literature as a loosely bound wet sludge/anode-slime matrix [S-06], not a dense
   crystalline Ag2S lattice. Loosely bound or surface-associated sulfide/bisulfide
   species are kinetically far more accessible to simple protonation than to the slower,
   diffusion/electron-transfer-limited oxidative dissolution mechanism — protonation is
   a fast elementary step; nitrate oxidation of a solid sulfide surface is a slower
   heterogeneous electron-transfer process.
4. **Stoichiometric acid supply.** Pathway A's 96% yield was achieved with a **full 2×
   stoichiometric excess** of acid maintained throughout the leach. An uncontrolled
   introduction event has no guarantee of that excess being available uniformly, and
   local depletion of the oxidizing nitrate pool (leaving behind spent, non-oxidizing
   acid still capable of simple protonation) is itself one of CAMEO's stated
   H2S-favoring conditions [S-10].

Reading these two pathways together (§4.2 + §4.3) supports a **mixed-pathway model**:
concentrated/hot pockets near the point of acid contact plausibly ran the oxidative
route (consuming sulfide to S⁰/SO4²⁻, generating NO/NO2), while poorly mixed or
acid-depleted zones let free/accessible sulfide meet non-oxidizing-equivalent acid and
evolve H2S directly. This mixed-pathway framing is our own synthesis of the two
independently documented single-pathway mechanisms in the literature — it is not itself
stated anywhere as a combined co-release mechanism for Ag2S + HNO3 specifically, and
should be read as the chapter's working hypothesis, not a cited finding. What is
[VERIFIED] independent of any pathway argument is the outcome: H2S release is confirmed
across essentially all open reporting on this incident [S-11], consistent with Pathway B
(or the H2S-generating fraction of the mixed pathway) having been the operative or
dominant channel.

---

## 4.4 NO2 formation chemistry [INFERRED — not independently confirmed as released]

Two independent HNO3 chemistries can generate NO2, both textbook-standard and both
consistent with the reaction having run hot:

**Thermal/photolytic decomposition of concentrated HNO3 itself:**

**4 HNO3(l) → 4 NO2(g) + O2(g) + 2 H2O(l)**  ... (Eq. 3)

Concentrated nitric acid is thermodynamically unstable and undergoes slow
thermal/photolytic decomposition even at room temperature (the characteristic
yellow-brown discoloration of aged concentrated HNO3 is dissolved NO2 from this
reaction); heating strongly accelerates it [S-12].

**HNO3 acting as an oxidizer, reduced to NO2 when concentrated/hot:** as noted in §4.2,
concentrated/hot HNO3 undergoes a 1-electron N(+5)→N(+4) reduction to NO2 when it
oxidizes a reducing agent (sulfide sulfur, elemental sulfur, metallic silver, or organic
material), versus the 3-electron N(+5)→N(+2) reduction to NO characteristic of dilute
HNO3 [S-09]. Applied here: if the reaction ran hot in concentrated-acid pockets near the
point of contact — which the exothermic oxidative sulfide attack of Eq. 2/2b would
itself help drive — **NO2 is the chemically expected nitrogen reduction product** in
those zones.

CAMEO's datasheet for nitric acid (other than red fuming) independently corroborates
that HNO3 is classified a "Strong Oxidizing Agent with Known Catalytic Activity" and
that it produces "corrosive and/or toxic fumes" on reaction with incompatible reducing
materials, though the retrieved excerpt did not explicitly name NO2 as the fume species
— the NO2 identification rests on the general inorganic chemistry above (Eq. 3 and the
concentration-dependent NO/NO2 reduction rule), which is unambiguous and standard, not
on a direct product-level citation [S-13].

**Evidentiary status — read this before using NO2 anywhere else in the dossier.**
Lane 7's dedicated search pass across WV Gazette-Mail, the CSB press release, WV
MetroNews, NPR, PBS, and legal-summary secondary sources found that open reporting
**consistently and exclusively characterizes the released agent as H2S**; no article
located independently reports an NO2 co-release, a measured NO2 concentration, or an
NO2-attributed symptom in any victim [S-14]. The case brief that framed this
investigation asserts both H2S **and** NO2 fumes, but that framing is not independently
corroborated in the open-source record assembled across two research passes. This
chapter's position, to be carried consistently into the toxicology and dispersion
chapters: **NO2 formation is chemically plausible and arguably expected** given
concentrated/hot HNO3 in local contact with reducing material (Eq. 2b, Eq. 3) — it is
tagged **[INFERRED]** throughout — but it must never be presented on the same
evidentiary footing as the **[VERIFIED]** H2S release. Any dispersion/toxicology
modelling of NO2 exposure must carry this same caveat forward explicitly, every time.

---

## 4.5 Thermochemical data

Standard-state (298.15 K, 1 bar) enthalpies of formation assembled from NIST WebBook
(direct reads where available) and cross-tabulated literature values, source quality
tagged inline. Two independent Ag2S ΔfH° tabulations disagree by roughly 1 kJ/mol
(−31.8 to −33 kJ/mol) — carried forward as a range, not resolved to false precision.

| Species | State | ΔfH° (kJ/mol) | Source quality | Note |
|---|---|---|---|---|
| HNO3 | gas | **−134.31** | **[NIST]** | S° = 266.39 J/mol·K; direct NIST WebBook read [S-15] |
| HNO3 | liquid | ≈ −174 (commonly cited, **not independently confirmed** this pass) | GAP | do not cite without a second check |
| H2S | gas | **−20.6** (range −20.2 to −20.6 across rounding variants) | **[Xtab]** | CK-12, ANL Active Thermochemical Tables [S-16] |
| NO2 | gas | **+33.2** | **[Xtab]** | NIST-JANAF-attributed, reproduced consistently [S-17] |
| NO | gas | ≈ +90.25 (standard textbook value, **not re-confirmed** this pass) | GAP | use with caution |
| H2O | liquid | **−285.8** | **[Xtab]** | universal CODATA/CRC constant |
| S | solid (rhombic, reference state) | **0** | **[Xtab]** | convention |
| Ag2S | solid | **−31.8 to −33** | **[1-src, inconsistent]** | Wikidata + secondary tabulations disagree by ~1 kJ/mol; range carried forward |
| AgNO3 | solid | **−124.4** (also cited −123.02) | **[Xtab, minor spread]** | ~1.4 kJ/mol compilation spread |
| Ag⁺ | aqueous ion | **+105.6 to +105.8** | **[Xtab]** | consistent across compilations |
| SO4²⁻ | aqueous ion | **−909.27** | **[Xtab]** | CK-12, general compilations |
| O2 | gas | **0** | **[Xtab]** | convention |

**The single largest data gap for what follows:** no heat-capacity (Cp) data was
recovered for H2S(g), NO2(g), or Ag2S(s) beyond HNO3(g)'s Shomate coefficients [S-18]. A
dedicated Ag2S Cp study (5–1000 K) exists but is paywalled beyond its abstract [S-19].
The adiabatic-temperature-rise estimate in §4.6 therefore uses a **bulk aqueous-system
Cp approximation (≈4.2 kJ/kg·K, water-dominated mixture)** rather than a
species-resolved Cp — explicitly flagged as an estimate, consistent with standard
engineering practice when full calorimetric data is unavailable.

---

## 4.6 Bounded reaction-enthalpy and adiabatic temperature-rise estimate

**Framing.** Vessel geometry, residue mass, and acid volume in the actual incident are
unpublished. What follows is therefore a **per-unit-reactant, parameterized sensitivity
estimate** — "if X kg of Ag2S reacted under assumption set Y, the enthalpy release and
adiabatic ΔT would fall in range Z" — never a claim about what temperature was actually
reached in the vessel.

### 4.6.1 Reaction enthalpy per kg Ag2S, Pathway A (oxidative, elemental-S route, Eq. 2)

Using Hess's law on Eq. 2, ΔHrxn = Σ ΔfH°(products) − Σ ΔfH°(reactants). Aqueous-ion
and NO(g) formation enthalpies carry gaps (Ag⁺(aq) is available; NO3⁻(aq) and NO(g) are
not independently confirmed this pass — flagged GAP in §4.5). A fully resolved Hess's
law calculation for Eq. 2 cannot therefore be completed to NIST-grade precision with the
data assembled in this research pass. We instead bound the estimate using the
well-anchored H2S-forming pathway (Eq. 1a), for which every species (Ag2S, H⁺
conventionally 0 by definition of the standard hydrogen reference, Ag⁺(aq), H2S(g)) has
at least an [Xtab]-quality value, and present Pathway A's likely order of magnitude by
analogy (oxidative sulfide chemistry is, in general, considerably more exothermic than
simple protonation because it also releases the reduction enthalpy of nitrate to
NO/NO2 — flagged explicitly as a qualitative, not quantitative, statement).

**Pathway B (Eq. 1a), per mole Ag2S:**

ΔHrxn = [2×ΔfH°(Ag⁺,aq) + ΔfH°(H2S,g)] − [ΔfH°(Ag2S,s)]

Using the midpoint of the Ag2S range (−32.4 kJ/mol) and Ag⁺(aq) midpoint (+105.7 kJ/mol):

ΔHrxn = [2×(+105.7) + (−20.6)] − (−32.4)
ΔHrxn = [211.4 − 20.6] − (−32.4)
ΔHrxn = 190.8 + 32.4 = **+223.2 kJ/mol Ag2S**

This is **endothermic** as written for the bare dissolution/protonation step in
isolation (consistent with the fact that Ag2S's extreme stability makes even its H2S-
releasing decomposition thermodynamically uphill at the level of formation enthalpies
alone) — but this figure only accounts for breaking the Ag2S lattice and forming
aqueous Ag⁺ and gaseous H2S; it does not include the strongly exothermic **acid-base
neutralization** and **dilution/mixing enthalpy** of concentrated HNO3 meeting water and
residual alkaline cleaner (Bonderite M2000A, described in adjacent literature as an
alkaline-based cleaner formulated with corrosion inhibitors and surfactants [S-20]),
nor any oxidative side-chemistry (Eq. 2/2b) occurring in parallel zones of the vessel.
Concentrated strong-acid/alkaline-cleaner neutralization is itself typically strongly
exothermic, on the order of tens of kJ per mole of acid neutralized (standard
strong-acid/strong-base neutralization enthalpy ≈ −57.3 kJ/mol H⁺, a well-established
general-chemistry constant, applied here only as an order-of-magnitude proxy since
M2000A's exact alkalinity/composition is undisclosed [S-21]) — meaning the **net
practical exotherm of the real multi-component mixing event is very plausibly strongly
exothermic overall**, even though the isolated Ag2S→H2S step above is mildly
endothermic on paper. We flag this explicitly: the reaction that mattered for
temperature rise in a real vessel was almost certainly the acid/cleaner/water mixing and
any oxidative sulfide chemistry running in parallel, not the bare sulfide-protonation
step alone.

### 4.6.2 Parameterized adiabatic ΔT — sensitivity table

Given the incomplete species-level Hess's-law closure above, we present a **bounded
sensitivity estimate** using a plausible net exotherm range per kg of Ag2S-bearing
residue reacted, spanning from "mildly exothermic, dissolution-step-only" to
"strongly exothermic, neutralization + oxidative-sulfide chemistry included" —
bracketing the real, unmeasured event rather than asserting a single number.

**Assumptions (stated explicitly, per standard engineering practice under
uncertainty):**
- Net reaction exotherm per kg Ag2S reacted: **low bound 200 kJ/kg** (dissolution-only,
  roughly matching the magnitude of the Eq. 1a Hess's-law figure per unit mass, treated
  as a floor even though the isolated step calculated above is technically endothermic —
  conservatively assumes some parallel exothermic chemistry offsets it) to **high bound
  3,000 kJ/kg** (acid/alkaline-cleaner neutralization plus oxidative Eq. 2/2b sulfide
  chemistry running concomitantly — order-of-magnitude estimate, not a literature value).
- Reacting mixture is water-dominated; bulk **Cp ≈ 4.2 kJ/kg·K** [assumption, flagged].
- Adiabatic (no heat loss to vessel walls or ambient) — a conservative *upper-bound*
  assumption; a real legacy vessel will lose heat to steel walls and ambient air, so
  actual ΔT will run below the adiabatic estimate, especially over longer timescales.
- Reacting mass basis: per kg of total aqueous mixture (acid + water + sludge), not per
  kg of pure Ag2S — i.e., the enthalpy is normalized against the mass it's heating, not
  just the reactant mass, consistent with how Q = m·Cp·ΔT is normally applied.

ΔT_adiabatic = Q / (m·Cp), and per unit mass this reduces to ΔT = q_specific / Cp, where
q_specific is the exotherm per kg of the total heated mixture:

| Scenario | q_specific (kJ/kg mixture) | ΔT_adiabatic (°C) | Interpretation |
|---|---|---|---|
| Low bound | 200 | ≈ **48 °C** | dissolution-step-only, heavily diluted mixture |
| Mid estimate | 1,000 | ≈ **238 °C** | moderate neutralization + partial oxidative chemistry |
| High bound | 3,000 | ≈ **714 °C** | concentrated-acid pocket, neutralization + oxidative sulfide attack concentrated in a small local volume |

**Reading this table correctly:** the low-bound scenario describes a well-diluted,
well-mixed vessel where the exotherm is spread through a large water mass — plausible
for the bulk of a legacy tank with residual water/wash liquor present. The high-bound
scenario describes a **local, poorly-mixed pocket** near the point of concentrated-acid
addition, where a small mass of concentrated acid contacts sludge directly with little
diluting water mass to absorb the heat — this is also the zone we would expect, per
§4.4, to run hot enough to favor the NO2-forming pathway (Eq. 2b/Eq. 3), since NO2
formation is favored by exactly this kind of locally concentrated, hot condition. The
mid-to-high end of this range is consistent, at least in order of magnitude, with
eyewitness/press characterization of the reaction as "violent" (§4.7) — a rise of
several hundred degrees Celsius in a local pocket is more than sufficient to flash
dissolved gas out of solution rapidly and drive vigorous, audible, visibly energetic
release, without requiring the entire vessel to reach that temperature uniformly.

---

## 4.7 Gas generation and pressurization potential — parameterized estimate

### 4.7.1 H2S volume per unit Ag2S reacted

Eq. 1a shows 1 mol Ag2S → 1 mol H2S. Molar mass Ag2S ≈ 247.8 g/mol. At standard
temperature and pressure (0 °C, 1 atm), 1 mol of ideal gas occupies 22.4 L; at a more
representative ambient condition (25 °C, 1 atm), 1 mol occupies ≈24.5 L (using
V = nRT/P, R = 8.314 J/mol·K, T = 298 K, P = 101,325 Pa).

**Per kg of Ag2S fully converted via Eq. 1a:**

n(Ag2S) = 1,000 g / 247.8 g/mol ≈ 4.04 mol → 4.04 mol H2S

V(H2S, 25°C, 1 atm) ≈ 4.04 mol × 24.5 L/mol ≈ **99 L (≈0.099 m³) of H2S gas per kg
Ag2S reacted**, if conversion via Pathway B (Eq. 1a) were complete.

This is a **theoretical stoichiometric ceiling**, not a real-world yield — actual gas
release will be lower to the extent Pathway A (oxidative, non-H2S-forming) consumed part
of the sulfide inventory, and to the extent conversion was incomplete (kinetically
limited, or the acid was locally exhausted before reaching all the sulfide). A
conservative working range for planning/hazard purposes might therefore be presented as
**10–100 L of H2S per kg Ag2S reacted**, spanning "mostly diverted to Pathway A, low
H2S yield" to "essentially complete Pathway B conversion."

### 4.7.2 Pressurization potential in an enclosed/legacy vessel

If gas generation occurs faster than a vessel's venting capacity (a plausible scenario
for a legacy tank not instrumented or vented for an unplanned exothermic gas-generating
reaction), pressure will rise. Using the ideal gas law in a fixed headspace volume V_hs,
holding T at the elevated post-reaction temperature estimated in §4.6:

P = nRT / V_hs

**Illustrative parameterization** (assumptions stated, not incident-specific):
- Assume 5 kg of Ag2S-bearing residue reacts via Pathway B, generating ≈4.04 mol/kg ×
  5 kg ≈ 20.2 mol H2S (using the stoichiometric ceiling from §4.7.1 as an upper case).
- Assume this gas is generated into a modest, partially sealed headspace of ~1 m³
  (a plausible order-of-magnitude for a legacy tank not fully open to atmosphere) at an
  elevated post-reaction temperature of, say, 350 K (consistent with the mid-range
  ΔT_adiabatic estimate in §4.6.2 applied to a local hot pocket, moderated by mixing with
  cooler bulk vessel contents).

P = (20.2 mol × 8.314 J/mol·K × 350 K) / 1 m³ ≈ 58,780 Pa ≈ **0.58 atm gauge-equivalent
partial pressure contribution from H2S alone**, added on top of any pre-existing
headspace pressure and any additional NOx/steam contribution from parallel Pathway
A/Eq. 3 chemistry.

**This is illustrative, not diagnostic.** Halving the assumed headspace volume roughly
doubles this pressure contribution; doubling the reacted mass does the same. The
qualitative conclusion that matters for the hazard-mechanism narrative is: **even a few
kilograms of sulfide reacting completely, into a headspace on the order of a cubic
meter, is sufficient to generate a meaningful fraction of an atmosphere of additional
gas pressure within seconds to minutes** — enough to explain a rapid, forceful venting
event (whether through a hatch, seal, or rupture) without requiring an implausibly large
residue mass. Combined with steam generation from the exotherm (§4.6) and any
NO/NO2/O2 contribution from Pathway A (Eq. 2, Eq. 2b, Eq. 3), the total pressurization
potential in a poorly vented legacy vessel is plausibly several-fold higher than the
H2S-only figure above — consistent, in direction if not exact magnitude, with a
"violent reaction" characterization (§4.8).

---

## 4.8 Kinetics — qualitative discussion

No activation-energy or rate-constant data specific to the HNO3–Ag2S system was located
in this research pass [gap, S-19/§7 of lane4]. Two adjacent Ag2S leaching-kinetics
datapoints exist but are for *different* leaching chemistries and are cited here only as
order-of-magnitude context, not as rate constants for this system: ferricyanide-cyanide
leaching of Ag2S is diffusion-controlled with activation energy **6.7 kJ/mol** [S-22];
thiosulfate-based Ag2S leaching is chemical-reaction-controlled with apparent activation
energy **43.5 kJ/mol** [S-23]. Neither should be used directly as a rate constant for
the nitric-acid system; they only illustrate that Ag2S leaching kinetics *can* span from
near-diffusion-limited (very fast once mass transport allows contact) to moderately
activated, depending on leaching agent and sulfide accessibility.

**What is [VERIFIED] independent of any kinetic modelling:** press coverage repeatedly
and directly characterizes the reaction as "violent" — this description recurs across
multiple independent outlets covering the incident [S-11]. Several factors, general and
[INFERRED]/[HYPOTHESIS] rather than incident-measured, would plausibly drive a fast,
violent rate consistent with that characterization:

- **Concentrated acid, no dilution/quench step.** An uncontrolled introduction of
  concentrated HNO3 into a static residue, with no engineered quench, dilution, or
  temperature control, removes the normal process safeguards (§4.2's controlled-leach
  conditions) that keep an industrial leach reaction slow and steady.
- **Loosely bound sulfide in a wet sludge matrix.** As discussed in §4.3, "silver mud"
  is not a dense crystalline solid — surface-accessible or loosely bound sulfide/
  bisulfide species react essentially as fast as acid can reach them, i.e., the reaction
  is plausibly **mass-transport-limited by mixing**, not intrinsically slow. Poor mixing
  in a legacy tank would not necessarily slow the *overall* release — it would instead
  produce localized, fast, "patchy" reaction fronts wherever fresh acid first contacted
  exposed sulfide, consistent with a sudden, localized, violent onset rather than a
  gradual bulk reaction.
- **Autocatalytic/self-accelerating heating.** Because both principal reaction channels
  (Eq. 1a's associated mixing/neutralization enthalpy, and Eq. 2/2b's oxidative
  chemistry) are net exothermic once neutralization and oxidative side-reactions are
  included (§4.6.1), local heating from the first material to react would raise local
  temperature, which — per the general redox rule in §4.2/§4.4 — pushes the system
  further toward the oxidative, NO2-forming, higher-heat-release pathway, which in turn
  releases more heat, a positive-feedback (self-accelerating) loop typical of runaway
  exothermic reactions. This is a standard runaway-reaction mechanism pattern
  [HYPOTHESIS, general reaction-engineering reasoning applied to this system, not a
  cited finding specific to Ag2S+HNO3].
- **Gas evolution itself accelerating apparent violence.** Once H2S (and any
  NO/NO2/steam) begins evolving into a liquid mixture, bubble nucleation and rapid gas
  disengagement can mechanically agitate the remaining liquid, improving mixing and
  further accelerating reaction rate in a second, non-thermal positive-feedback loop —
  a commonly observed phenomenon in gas-evolving exothermic reactions generally
  [HYPOTHESIS].

None of these mechanisms are independently confirmed for this specific event; they are
offered as the standard reaction-engineering explanations for how an "uncontrolled acid
onto sulfide sludge" scenario plausibly becomes fast and violent rather than a slow
fizz, consistent with — but not proof of — the repeated press characterization.

---

## 4.9 Competing and side reactions [HYPOTHESIS where not directly sourced]

- **Silver dissolution to AgNO3.** Any Ag⁺ mobilized by either pathway will associate
  with nitrate in solution as AgNO3 (ΔfH° −124.4 kJ/mol solid, aqueous value not
  recovered — GAP, §4.5); this is a straightforward, expected side product of both
  pathways and is consistent with silver nitrate's established role as the standard
  electrolyte species in this plant's own electrolytic (Moebius-type) refining process
  [S-06], i.e., silver ending up as AgNO3 in solution is not exotic chemistry for this
  facility — it is the same chemical species the plant normally manages in its
  electrolyte bath.
- **Surfactant/organic oxidation by HNO3.** Bonderite M2000A (or the similarly-named
  Bonderite M-AD 2000A product located in adjacent research, exact identity unconfirmed
  [S-20]) is described in the general Henkel Bonderite product-family literature as an
  alkaline-based metal cleaner formulated with corrosion inhibitors and
  detergents/surfactants. Concentrated HNO3 is a strong oxidizer of organic material
  generally; oxidation of surfactant/organic components of the cleaner by HNO3 is
  chemically plausible as a **secondary exotherm contributor** alongside the primary
  acid-sulfide chemistry, and would independently generate NOx species via the same
  N(+5) reduction chemistry discussed in §4.4. This is [HYPOTHESIS] — no
  composition-specific reactivity data for M2000A/M-AD 2000A was recovered in any
  research lane, and the exact identity match between the incident-named product and
  the located Henkel datasheet is itself unconfirmed [S-20].
- **Alkaline-cleaner/acid neutralization exotherm.** As noted in §4.6.1, if M2000A is in
  fact alkaline-formulated (consistent with the general Bonderite M-AD product family),
  its direct neutralization by concentrated HNO3 is itself a straightforward,
  significantly exothermic acid-base reaction independent of any sulfide chemistry at
  all — plausibly a first, fast heat source that helps trigger/accelerate the
  Ag2S-related chemistry discussed above, rather than being a separate isolated event.
  [HYPOTHESIS], consistent with but not confirmed by the general product-family
  literature.
- **H2S/HNO3 direct interaction ("incandescence").** CAMEO's nitric-acid datasheet
  separately documents that fuming nitric acid reacts with hydrogen sulfide "with
  incandescence" — a self-sustaining, light-and-heat-producing vigorous reaction, not a
  mild fizz [S-13]. This raises the possibility of a **secondary, self-sustaining
  reaction** between HNO3 and H2S gas as it evolves and contacts remaining
  liquid-phase acid on its way out of the vessel, rather than H2S simply escaping inertly
  once formed — a further contributor to the "violent" characterization, and a further,
  independent NO2-generating pathway (H2S being oxidized by HNO3 rather than HNO3
  merely decomposing thermally). [HYPOTHESIS/INFERRED — CAMEO's incandescence note is
  [VERIFIED] as a general chemical fact about the HNO3/H2S pair; its applicability to
  this specific vessel's internal gas-phase chemistry is inferred, not measured.]

---

## 4.10 Chemical incompatibility matrix

Summarizing CAMEO Chemicals and CCPS-adjacent guidance [S-10, S-13, S-24, S-25] as a
single reference table for downstream chapters (root-cause, regulatory, and process-
safety chapters should cite this table rather than re-deriving it).

| | **Nitric acid (HNO3)** | **Ag2S / metal sulfides** | **Bonderite M2000A (composition unknown — treat conservatively)** | **Water** |
|---|---|---|---|---|
| **Nitric acid (HNO3)** | — | **Violent — H2S release (all acid classes per CAMEO) [S-10]; oxidative pathway also active, generating S⁰/SO4²⁻ + NO/NO2 [S-02, S-07]** | **Unconfirmed composition — if alkaline (per general Bonderite M-AD family), expect strongly exothermic neutralization; if organic/surfactant-bearing, expect oxidative attack generating heat + possible NOx [HYPOTHESIS, S-20]** | Exothermic dilution; concentrated HNO3 can decompose/fume on heating (Eq. 3) [S-12] |
| **Ag2S / metal sulfides** | (see above) | — | No data located; sulfides are general reducing agents, react vigorously with oxidizers [S-10] | Effectively inert — Ksp ≈ 8×10⁻⁵¹ means negligible aqueous dissolution without acid or oxidizer present [S-02] |
| **Bonderite M2000A** | (see above) | No data | — | Presumed water-miscible/aqueous-compatible per general cleaner-product-family use (spray-washer, immersion cleaning systems) [S-20] |
| **Water** | (see above) | (see above) | (see above) | — |
| **H2S (as evolved gas)** | **"Incandescence" — self-sustaining vigorous reaction with fuming HNO3; broader incompatibility with strong oxidizers, metals, several halogen/interhalogen oxidizers [S-13, S-25]** | n/a (product, not reactant here) | No data | Soluble; not a hazard pair by itself |

**Key takeaway for the incompatibility matrix:** every cell involving nitric acid and a
sulfur-bearing or unknown-composition material carries an actionable hazard flag in the
existing CAMEO/CCPS reactive-chemical framework. None of this required site-specific
testing to identify — it is standard, publicly available reactive-group data
[S-10, S-13]. This is directly relevant to the regulatory-gap finding elsewhere in this
dossier: Bonderite M2000A was not listed on Catalyst Refiners' EPCRA Tier II inventory
[S-26], meaning this incompatibility matrix — buildable from public CAMEO data in
minutes — was not, on the available record, part of the facility's own documented
hazard communication for the specific product involved.

---

## 4.11 Summary of numeric ranges for cross-chapter reference

The following bounded estimates from this chapter should be used consistently by other
chapters (toxicology, dispersion, root-cause) rather than re-derived independently:

- **Reaction enthalpy, Pathway B (Eq. 1a) isolated dissolution step:** ≈ +223 kJ/mol
  Ag2S (endothermic in isolation; real mixture net exotherm is expected to be strongly
  positive once neutralization/oxidative side-chemistry is included — see below).
- **Net exotherm sensitivity range (parameterized, per kg of total reacting mixture):**
  **200–3,000 kJ/kg**, low bound = dilute/dissolution-dominated, high bound = concentrated
  local pocket with neutralization + oxidative sulfide chemistry.
- **Adiabatic ΔT range (same parameterization, Cp ≈ 4.2 kJ/kg·K assumed):**
  **≈48 °C (low bound) to ≈714 °C (high bound, local hot pocket)**; mid-estimate ≈238 °C.
- **H2S gas yield:** stoichiometric ceiling **≈99 L H2S per kg Ag2S** fully converted via
  Pathway B at 25 °C/1 atm; realistic working range **10–100 L/kg** depending on
  partition between Pathway A and Pathway B.
- **Illustrative pressurization example:** 5 kg Ag2S reacted into a 1 m³ headspace at
  350 K → **≈0.58 atm** of additional H2S partial pressure alone (excludes steam/NOx
  contribution) — order-of-magnitude illustration, not a vessel-specific prediction.
- **NO2 status:** [INFERRED]/chemically expected, **not [VERIFIED]** as an actually
  released or measured species in any open-source reporting found — carry this caveat
  into every other chapter that references NO2.

---

## Sources

- [S-01] CSB dedicated case page / press release, investigation opened April 23, 2026,
  status "ongoing," no cause determination published — per dossier baseline facts.
- [S-02] Lane 4 §1.1, §1.3; Ksp(Ag2S) ≈ 8.0×10⁻⁵¹, University of Sydney CHEM1612 problem
  set (https://scilearn.sydney.edu.au/firstyear/exams/chem1612/topic92_answers.pdf);
  concentration/temperature-dependence of sulfide oxidation pathway, ScienceDirect
  Topics "Nitric Acid" (https://www.sciencedirect.com/topics/chemical-engineering/nitric-acid).
- [S-03] Lane 4 §1.1, general acid-base/Ksp reasoning.
- [S-04] Lane 3 §1, Ames Goldsmith/Catalyst Refiners facility description
  (amesgoldsmith.com; mfg.marshall.edu b2bwv listing).
- [S-05] Lane 3 §2, EO catalyst sulfur-poisoning mechanism and Ag2S Ksp (ScienceDirect
  "Silver Sulfide" topic overview; PMC11385363).
- [S-06] Lane 3 §3b, Moebius electrolytic refining and "silver mud"/anode-slime
  terminology (machinemfg.com; noblegoldinvestments.com; US8282903B2).
- [S-07] Holloway, P.C.; Merriam, K.P.; Etsell, T.H., "Nitric acid leaching of silver
  sulphide precipitates," Hydrometallurgy 74(3–4), 2004, pp. 213–220, DOI
  10.1016/j.hydromet.2004.05.003 (abstract-level access only, per lane 4 §1.2).
- [S-08] Habashi, F., "Nitric acid in the hydrometallurgy of sulfides" (ResearchGate
  publication/287661305, excerpts only per lane 4 §1.2).
- [S-09] Lane 4 §1.3, §3.2, concentration-dependent NO/NO2 reduction-product rule,
  ScienceDirect Topics "Nitric Acid" overview.
- [S-10] CAMEO Chemicals, "Sulfides, Inorganic" reactive group,
  https://cameochemicals.noaa.gov/react/33.
- [S-11] Lane 7 §1 and dossier baseline: H2S release confirmed across essentially all
  open reporting; "violent reaction" characterization recurring across press coverage.
- [S-12] Lane 4 §3.1, HNO3 thermal/photolytic decomposition, general chemistry sources
  and Johnston/Giauque kinetics series (abstract only).
- [S-13] CAMEO Chemicals, "Nitric Acid, Other Than Red Fuming,"
  https://cameochemicals.noaa.gov/chemical/19337.
- [S-14] Lane 7 §1, NO2 co-release search-pass finding (no independent NO2 confirmation
  located across WV Gazette-Mail, CSB press release, WV MetroNews, NPR, PBS,
  alliancechemical.com, business-news-today.com, Powell & Majestro legal summary,
  Wikipedia).
- [S-15] NIST WebBook, Nitric acid, https://webbook.nist.gov/cgi/cbook.cgi?ID=C7697372&Mask=FFF.
- [S-16] CK-12 flexi chemistry heat-of-reaction reference; ANL Active Thermochemical
  Tables, H2S, https://atct.anl.gov/Thermochemical%20Data/version%201.122/species/?species_number=238.
- [S-17] NIST WebBook / JANAF pointer for NO2, https://webbook.nist.gov/cgi/cbook.cgi?ID=C7727379&Mask=1.
- [S-18] Lane 4 §4 heat-capacity gap note; HNO3(g) Shomate coefficients per NIST WebBook.
- [S-19] "Silver(I) sulfide: Ag2S Heat capacity from 5 to 1000 K, thermodynamic
  properties, and transitions," ScienceDirect 0021961486900844 (abstract only).
- [S-20] Lane 3 §4, Bonderite M2000A/M-AD 2000A product research, ChemPoint Henkel
  Bonderite Cleaners overview (https://www.chempoint.com/insights/henkel-bonderite-cleaners);
  exact SKU-to-incident-product identity unconfirmed.
- [S-21] Standard strong-acid/strong-base neutralization enthalpy (~−57.3 kJ/mol H+),
  general chemistry constant, applied here as an order-of-magnitude proxy only.
- [S-22] Ag2S ferricyanide-cyanide leaching kinetics, ScienceDirect
  https://www.sciencedirect.com/science/article/abs/pii/S0304386X07000783.
- [S-23] Ag2S thiosulfate/metabisulfite/ascorbic-acid leaching kinetics, ScienceDirect
  https://www.sciencedirect.com/science/article/abs/pii/S0892687522002175.
- [S-24] CCPS Chemical Reactivity Worksheet (CRW4) and companion guidance, signposted
  per lane 4 §5.3 (framework reference, not directly queried this pass).
- [S-25] CAMEO Chemicals, Hydrogen Sulfide datasheet,
  https://cameochemicals.noaa.gov/chemical/3625.
- [S-26] WV Gazette-Mail, "Officials were in the dark on key chemical in fatal Nitro
  industrial site incident," May 7, 2026 [VERIFIED, search-synthesis — direct fetch
  returned HTTP 429; content is search-engine-synthesized, per lane 7 §2].
