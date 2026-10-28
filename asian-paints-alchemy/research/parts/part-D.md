## 14. The design: an air-network base coat under a seal coat, in the two coats painters already apply

**Answer.** The proposed design is a two-coat system built entirely from materials Asian Paints already buys: a base coat formulated above its critical pigment volume concentration (critical PVC, the loading past which binder can no longer fill every gap between particles, so air voids form) so that rutile titanium dioxide (TiO2) sits in a film that is roughly a third air, under a thin seal coat whose own binder latex is sized to form a continuous skin rather than flood the base coat's pores. Six formulation parameters fix the design: base-coat porosity, the binder share of the base coat's own solids, the fine extender's particle size, the base coat's TiO2 loading, the seal coat's latex particle size relative to the base coat's pore network, and the seal coat's own TiO2 loading and minimum film thickness `[A05]`, `[A06]`, `[A09]`, `[T9]`, `[A28]`. All six sit inside ranges a formulator or a painter already works with, and the painter's own two-coat practice does not change `[F01]`, `[F03]`, `[F13]`.

### 14.1 The six formulation rules, in one table

Table 14.1 states the six formulation rules the design rests on, each one a named parameter in the model's own assumptions register (section 26 gives the full register in prose; this table isolates the subset that this section's design specifically turns on).

| Rule | Parameter | Base-case value | What it controls |
|---|---|---|---|
| 1. Base-coat porosity | A05 | 35% (25% to 45%, bear to bull) | How much of the base coat's own volume is air once dry, the single biggest lever on the whole design `[T14]` |
| 2. Binder share of base-coat solids | A06 | 25% of solids by volume | How little binder the base coat is allowed to carry, since every unit of binder fills a pore that would otherwise be air |
| 3. Fine extender particle size | A09 | 600 nm median diameter (lognormal geometric standard deviation 1.4) | The scale of the particle network that, together with the rutile, defines the base coat's own pore structure |
| 4. Base-coat TiO2 loading | A02-linked, reported in T9 | 9.1% of film volume (base case) | How much pigment sits inside that air network; deliberately low, for reasons given in section 14.3 |
| 5. Seal-coat latex size against the pore network | not a single named assumption; a design constraint built from lane E's particle-size data | 70 to 250 nm range of real, commercially available latexes `[E23]`, `[E24]`, `[E25]` | Whether the seal coat forms a continuous skin on top of the base coat rather than soaking all the way through it |
| 6. Seal-coat TiO2 loading and minimum film thickness | T9, A28 | 12% TiO2 PVC (pigment volume concentration); minimum 15 µm (bear 20 µm, bull 12 µm) | The seal coat's own hiding contribution and its mechanical integrity as a continuous, scrubbable skin `[A28]` |

*Table 14.1: the six formulation rules behind the proposed design, each tied to a named model parameter or a lane-E particle-size finding. "PVC" is pigment volume concentration throughout this section; "lognormal geometric standard deviation" describes how spread out a particle-size distribution is around its median, a standard way particle engineers report size variability rather than a single fixed diameter.*

### 14.2 The base coat: why porosity, not TiO2 loading, is the first dial a formulator turns

Section 9 and section 13 of this document have already shown the two failure modes a formulator must avoid: crowding rutile too densely erodes its own scattering efficiency (section 9.2), and wrapping air around one particle at a time runs into a volume-budget wall that gets worse, not better, as the air shell grows (section 13.1). The base-coat recipe in this section avoids both by spending its air at the film level, shared across every particle, rather than at the particle level, dedicated to one particle each.

Table 14.2 restates the model's own scenario table (T9, already introduced in section 13.3a) from the angle of a formulator reading it as a recipe rather than as a sensitivity result.

| Scenario | Base-coat porosity | Binder's effective host index around rutile | Base-coat TiO2 PVC | What this means for mixing |
|---|---|---|---|---|
| bear | 25% | 1.38 | 11.9% | A less porous base coat needs more TiO2 to hit the same brightness, because each particle sees a higher-index, more binder-rich medium |
| base | 35% | 1.18 | 9.1% | The recommended recipe: a third of the dry film is air, and rutile loading can fall below 10% of film volume while still meeting the target |
| bull | 45% | 1.00 | 2.6% | At the model's most optimistic porosity, almost no TiO2 is needed in the base coat at all, because the host medium approaches pure air |

*Table 14.2: in our model, the base-coat recipe by scenario, restating Table T9 as a mixing instruction rather than a sensitivity result `[T9]`.*

Reading the three rows together makes the point directly: porosity and TiO2 loading trade off against each other, and a formulator who turns only the TiO2 dial without also raising porosity captures none of the saving this design offers. The base case's 9.1% TiO2 PVC `[T9]` is roughly half the premium baseline's 18% `[A02]`, an arithmetic halving (18% divided by 9.1% equals 1.98, so the base coat alone carries slightly less than half the pigment fraction of the conventional film), but it only works because porosity has simultaneously risen from the conventional film's near-zero value to 35%.

### 14.3 Why the base coat is kept deliberately pigment-lean

The base coat does not simply push TiO2 loading back up toward the premium baseline's 18% once it already has the benefit of a low-index host, because of the crowding penalty worked through in section 9.2: crowding bites harder in a low-index, air-rich medium than in binder (80% scattering efficiency retained at 18% PVC in air, against 91% in binder, `[T6]`), so adding more pigment into an already-porous base coat gives back less marginal scattering than the same addition would in a dense binder film. The base case's 9.1% TiO2 PVC `[T9]` sits at the loading the model finds sufficient to reach the brightness target without paying that steeper crowding tax any further than necessary. This is a deliberate design choice, not an accident of the model's optimisation routine.

The base coat's remaining solids are the fine extender, precipitated calcium carbonate (PCC, calcium carbonate produced by a controlled chemical precipitation reaction rather than by grinding natural rock) at a median particle size of 600 nm `[A09]`, and the 25%-by-volume binder share `[A06]` that holds the dry film together without filling every pore. Section 14.4 covers the extender's own role as a true pigment, not a passive filler, once the film sits above critical PVC.

### 14.4 The extender's particle size, and the tornado's own verdict on it

The sensitivity table introduced in section 13 and reported in full in section 21 (T14) tests what happens if the base coat's fine extender were coarser or finer than its base-case 600 nm `[A09]`. Table 14.3 isolates that one row for this section's formulation discussion.

| Extender particle size | TiO2 saving at this setting | What this means for the recipe |
|---|---|---|
| 0.8 µm (800 nm, the "low" tornado setting) | 37% | A coarser extender still delivers most of the base case's saving |
| 0.6 µm (600 nm, the model's own base-case value) | 39% (the design's headline figure) | The recommended extender size |
| 0.4 µm (400 nm, the "high" tornado setting) | 38% | A finer extender gives almost the same result as the base case |

*Table 14.3: the TiO2 saving at three extender particle sizes, from the model's own one-input-at-a-time tornado analysis `[T14]`. The spread between the lowest and highest setting (37% to 38%, against a base case of 39%) is the narrowest of any input the tornado tests, meaning the design's performance is not acutely sensitive to getting this one particle-size specification exactly right.*

This matters for a formulator reading the recipe as a set of instructions rather than as a scientific finding: of the five inputs the tornado analysis tests (section 21 gives the full table), extender particle size is the one a plant can miss by a wide margin, 0.4 to 0.8 µm, a twofold range, and still land within a single percentage point of the design's own headline saving. The parameters that matter far more are porosity itself (33% to 45% saving across its own bear-to-bull range `[T14]`) and what surrounds the particle optically (21% to 65% `[T14]`), both covered in section 21's full tornado and restated here only to the extent they bear on this section's formulation rules.

### 14.5 The seal coat: a latex sized to skin over, not soak through

The seal coat's job is to form a continuous, scrubbable film over a base coat that is, by design, roughly a third air, without letting its own wet binder flood so far into that air network that the base coat loses the porosity it was built for. The model represents how much of the base coat's pore volume the seal coat actually fills with a single parameter, infiltration (A07), set at 10% in the base case, 25% in the bear scenario, and 0% in the bull scenario `[A07]`. The model does not compute a literal pore-throat diameter for the base coat's own air network. It represents the net effect of latex size, application technique and pore geometry together through this one infiltration share, and it carries no more precision than that.

What a formulator can specify directly is the seal coat's own latex particle size, and here lane E's survey of real, commercially available binder particles gives a concrete, checkable range. Table 14.4 lists what this lane found.

| Product or study | Latex particle size | Source |
|---|---|---|
| A US patent example for vinyl acetate paint binders | About 100 to 250 nm, preferred around 105 nm | `[E23]` |
| PCI Magazine trade article on ultrafine acrylic latexes | Target number-average diameter of 100 nm or less | `[E24]` |
| Arkema NEOCAR Acrylic 850 technical data sheet | 70 nm average particle size, minimum film-formation temperature (MFFT, the lowest temperature at which a wet latex film will coalesce into a continuous, non-porous skin) of 45 degrees C | `[E25]` |
| Vandezande and Rudin, 1996, an 85/15 vinyl acetate/butyl acrylate latex study | Studied particle size and surfactant effects on MFFT, drying rate and optical clarity directly | `[E27]` |

*Table 14.4: real, commercially documented latex particle sizes surveyed by this project's lane E, all in the 70 to 250 nm range this section's seal-coat recipe draws on. "MFFT" (minimum film-formation temperature) is the practical specification a formulator checks to confirm a given latex will actually coalesce into a continuous skin under site conditions, rather than remain a cracked or powdery film.*

The design rule this section states, consistent with what the model's own infiltration parameter (A07) already captures: a seal-coat latex in the 70 to 250 nm range sits comfortably below the base coat's own particle network (rutile at a 250 nm median `[A04]`, the fine extender at 600 nm `[A09]`), small enough to wet the base coat's surface pores on contact rather than bridging over them unevenly, yet the seal coat's own minimum film thickness requirement, 15 µm in the base case `[A28]`, is specified precisely so that a continuous skin forms at the top of the stack rather than the latex simply draining away into the porous base coat below it. Kan's 1999 finding, that the force needed to deform a drying latex film at its MFFT shows no dependence on particle size and sits an order of magnitude below what simple capillary-force theory predicts `[E26]`, is a relevant caution against over-stating how precisely particle size alone determines film continuity; this document accordingly treats the seal coat's latex size as one lever among several (MFFT, minimum film thickness, infiltration share) rather than as the single determining variable.

### 14.5a A note on the one gap this project could not close

Lane E's own gap list states plainly that none of the marketplace binder prices or particle-size listings it found states the solids content needed to convert a liquid-emulsion price into a per-kilogram-of-binder-solids figure comparable to the model's own A17 convention `[E22]`. This section's formulation rules rest on the particle-size and MFFT specifications in Table 14.4, which are independent of that pricing gap; the pricing question itself belongs to section 20's cost work, and is stated there, not glossed over here.

### 14.6 What changes for the painter: nothing

This is the design's single most important commercial fact, so it deserves spelling out in full. Asian Paints' own current, India-market technical data sheets already specify a one-primer, two-topcoat system for its premium interior emulsions `[F01]`, `[F03]`, and a 30 µm dry film thickness per coat for Apcolite Premium Emulsion that matches the model's own A01 assumption exactly `[F13]`. Table 14.5 crosswalks the proposed design against this existing, documented practice, coat by coat.

| Step a painter already performs | Conventional system | Proposed system | What changes |
|---|---|---|---|
| Primer | One coat | One coat | Nothing |
| First topcoat ("base coat" in this design's language) | Premium emulsion at 18% TiO2 PVC `[A02]`, 30 µm dry film `[A01]`, `[F13]` | The air-network base coat at 9.1% TiO2 PVC, 46.2 µm dry film (from the model's own base-case output) `[T9]` | The formulation inside the can; the painter's own brush or roller application does not change |
| Second topcoat ("seal coat" in this design's language) | A second coat of the same emulsion | The seal coat, 16.4 µm dry film in the base case `[T9]` | The formulation inside the can; the painter applies it exactly as a second coat today `[F03]` |
| Number of coats total | Two topcoats over one primer `[F01]`, `[F04]` | Two topcoats over one primer | Nothing |
| Application equipment | Brush, roller or spray, same as any emulsion | Brush, roller or spray, same as any emulsion | Nothing |

*Table 14.5: the proposed design crosswalked against Asian Paints' own documented, current two-coat practice. The only changes sit inside the can, in what each coat is formulated with, never in how many coats a painter applies or what tools they use.*

This crosswalk is also the direct answer to one of the brief's own seven questions, how the solution will be applied or integrated into the target application `[W-Q5]`: it integrates without any change to application practice at all, because the two-coat system this design proposes is the same two-coat system India's painters, and Asian Paints' own technical literature, already specify. Section 18 covers how the two coats are manufactured; section 19 covers where, across Asian Paints' product range, this two-coat crosswalk applies without modification and where it needs adjustment.

### 14.7 The raw-material price inputs the recipe is costed against

Every one of the six formulation rules in Table 14.1 draws on a raw material whose price the model's own assumptions register already fixes, because a formulation rule that cannot be costed is not yet a usable recipe. Table 14.6 collects those four price assumptions in one place, ahead of section 20's own full cost build, so this section's recipe is traceable to a price from the moment it is stated rather than only once section 20 is reached.

| Raw material | Price assumption | Base-case value | Bear / bull range |
|---|---|---|---|
| Rutile TiO2 | A13 | ₹250 per kg | ₹200 to ₹300 per kg |
| Fine PCC (0.6 µm) | A15 | ₹25 per kg | ₹20 to ₹30 per kg |
| Coarse GCC (ground calcium carbonate, 3 µm) | A16 | ₹8 per kg | Held fixed across scenarios |
| Acrylic binder solids | A17 | ₹190 per kg | Held fixed across scenarios |

*Table 14.6: the model's own raw-material price assumptions behind the base-coat and seal-coat recipes in this section, carried forward unchanged into section 20's cost build `[A13]`, `[A15]`, `[A16]`, `[A17]`. "GCC" is ground calcium carbonate, a coarser, mechanically milled calcium carbonate used in this document's baseline film alongside the finer, chemically precipitated PCC the proposed base coat relies on more heavily.*

Lane E's own marketplace survey gives a useful, independent sanity check against two of these four assumptions. Fine PCC marketplace listings cluster at roughly ₹15 to ₹21 per kilogram for bulk, ungraded material `[E01]`, below the model's own ₹25 per kilogram base-case assumption for the specific fine, 0.6 micron grade this design calls for `[A15]`. That gap is consistent with the documented finding (section 26) that no marketplace listing found in this search confirms the specific fine grade the model actually specifies, so a modest premium over the bulk, ungraded price is plausible rather than contradicted. Acrylic and styrene-acrylic binder emulsions were found listed at ₹90 to ₹130 per kilogram of liquid product `[E17]`, `[E18]`, `[E19]`, figures that cannot be compared directly against the model's own ₹190 per kilogram of binder solids assumption `[A17]` without knowing each listing's own solids content. That conversion gap is named plainly in this document's gap register, with no assumed solids percentage invented to paper over it `[E22]`.

### 14.8 Mapping the recipe against the brief's own innovation categories

The brief states that "the solution may involve material innovation, product innovation, process innovation and/or design innovation" `[W-S2]`. Table 14.7 maps this section's own recipe against that fourfold list, because a judge reading the brief's own checklist will look for exactly this mapping.

| Innovation category | Where this design fits it |
|---|---|
| Material innovation | None of the three raw materials (rutile, PCC, acrylic binder) is new; the innovation is not at the material level |
| Product innovation | The finished two-coat system is a new product configuration, a base coat and seal coat each formulated to a role neither coat plays in a conventional system |
| Process innovation | Formulating deliberately above critical PVC, and pairing it with a size-excluding seal coat, is a process-level choice (section 15.2), not a new chemical synthesis |
| Design innovation | The architecture itself, moving where the air sits from inside a particle to inside the film, and sealing that film-level air network with a second coat, is this design's own design-level contribution, the one Table 11.4's novelty synthesis identifies as not found elsewhere in the published record |

*Table 14.7: this section's recipe, mapped against the brief's own four named categories of innovation `[W-S2]`. The design's own contribution sits predominantly in the process and design categories, not in inventing a new material, a distinction this document states plainly because it is also the honest answer to why every individual raw material in Table 14.6 is already a known, priced, commercially available input.*

Exhibit for the deck: Table 14.1's six-rule summary and Table 14.5's painter-facing crosswalk are the backbone of slide 4/5 ("MECHANISM AND PROOF"), specifically the production-steps panel; Table 14.4's real latex particle-size survey supports the annexure's A2 assumptions panel as the evidentiary basis for the seal-coat specification.

## 15. The mechanism: rutile sees a medium of index 1.18, chalk becomes a pigment, and the seal keeps the air

**Answer.** Once the base coat is built above its critical PVC (critical pigment volume concentration, the loading past which binder cannot fill every gap, so air voids form), two things happen at once: the rutile particles, which sections 9 and 10 showed scatter more efficiently in a lower-index host, now sit in a Bruggeman-mixed medium of air and residual binder with an effective index of 1.18 in the base case, and the fine calcium carbonate extender, ordinarily an inert, low-index filler, starts to scatter light on its own because it too now sits in air rather than binder `[T9]`. The seal coat's job is purely mechanical and optical at once: it forms a continuous skin that keeps weather, scrubbing and dirt out, and because its own latex is sized well below the base coat's particle network, it does this without flooding the air network it is meant to protect `[A07]`, `[E23]`, `[E25]`.

### 15.1 The host index, derived once and used everywhere downstream

Section 10.2 of this document already gives the full equation the model solves for the effective host index around a base-coat particle: the self-consistent Bruggeman mixing rule, root-solved for an effective dielectric constant from the air fraction and the binder fraction that remain around the particle. This section does not re-derive that equation; it states what the equation returns at each of the three design scenarios, because this is the number every piece of this section's mechanism explanation (the extender's new optical role, the crowding behaviour, the near-infrared bonus in section 25) ultimately traces back to.

| Scenario | Porosity | Host index around base-coat particles | Where this index sits relative to the span of Table T4 |
|---|---|---|---|
| bear | 25% | 1.38 | Close to the binder-only end (1.49) of the host-index curve in section 9.1 |
| base | 35% | 1.18 | Roughly a third of the way from binder (1.49) toward pure air (1.00) |
| bull | 45% | 1.00 | Equal to pure air, the most favourable end of the same curve |

*Table 15.1: the effective host index around base-coat particles, by scenario, computed by the model's Bruggeman mixing rule described in full in section 10.2 `[T9]`.*

Reading Table 15.1 against Table T4 (section 9.1) directly: the base case's host index of 1.18 sits between the 1.10 and 1.20 rows of Table T4, where transport scattering per unit TiO2 volume runs 11.7 to 10.9 (1/µm), a 1.33x to 1.42x gain over the binder-only baseline `[T4]`. This is the arithmetic bridge between section 9's abstract host-index curve and this section's concrete design: the base coat's 35% porosity `[A05]` is not an arbitrary target, it is the porosity that lands the host index in the range of Table T4 where a meaningful fraction of rutile's 1.52x air-versus-binder scattering advantage is actually captured, without pushing porosity so high that the film loses structural integrity or the binder share falls below what is needed to hold the dry film together at all.

### 15.2 Film formation above critical PVC: what actually happens as the film dries

Critical PVC is the pigment loading at which binder, as it dries and shrinks, just barely fills every gap between particles, with no spare binder and no air voids `[C28]`. Below critical PVC, a drying film is fully dense: every particle is embedded in a continuous matrix of binder, which is exactly the premium baseline's own condition at 18% TiO2 PVC `[A02]`, comfortably below the roughly 64% theoretical critical PVC for uniform spherical pigment with no polymer adsorption `[C30]`. Above critical PVC, the same drying and shrinking process cannot fill every gap, because there is not enough binder volume to do so, and the shortfall becomes air: a true, dry-film porosity that was never filled with binder in the first place, not a defect or an entrapped bubble.

This is the mechanism the base coat deliberately engineers. By fixing the binder share of base-coat solids at 25% by volume `[A06]`, the base coat is formulated well above whatever critical PVC its own particle mixture would otherwise reach, and the 35% porosity reported in Table T9 `[T9]` is the direct, designed consequence: air voids that form because the formulation was built to leave them, not air voids that form by accident. The coatings literature this project's lane C surveyed confirms the general mechanism in both directions: porosity, rusting, dry hiding and stain susceptibility all rise once a film crosses above its own critical PVC `[C28]`, which is why above-CPVC formulation has historically been treated as a defect to avoid rather than a feature to engineer (a point section 11.4 returns to when asking why this combination has not already been commercialised). This document's own design inverts that historical caution deliberately: the base coat's porosity is not an unwanted side effect of an otherwise-conventional recipe, it is the entire point of the recipe, and the seal coat exists specifically to manage the one real downside (an open, porous surface) that formulating above critical PVC otherwise creates.

### 15.3 Chalk becomes a pigment: the extender's new optical role

In a conventional, below-critical-PVC film, a fine calcium carbonate extender does what its name implies: it extends the binder, occupying volume cheaply without contributing meaningfully to scattering, because its own refractive index (1.6, calcite, handbook value `[T2]`) is close enough to the surrounding binder's index (1.49 `[T2]`) that the index mismatch driving Mie scattering (section 9.1, section 10.2) is small. Once the same extender sits in the base coat's air-rich host instead, that mismatch changes completely: against air (index 1.00) rather than binder (index 1.49), calcite's own index mismatch (1.6 against 1.00, a ratio of 1.6, against 1.6 against 1.49, a ratio of 1.07) is far larger, and the extender begins to scatter light in its own right rather than merely occupying space. Table T11, already introduced in the model tables and restated here for this section's mechanism explanation, is the model's own direct demonstration of this effect.

| Conventional coat: TiO2 g/m² | Contrast ratio | Air-network coat: TiO2 g/m² | Contrast ratio |
|---|---|---|---|
| 7.2 | 0.9541 | 0.0 | 0.9724 |
| 10.8 | 0.9759 | 6.0 | 0.9901 |
| 14.4 | 0.9851 | 12.0 | 0.9949 |
| 18.0 | 0.9898 | 18.0 | 0.9969 |

*T11 (restated for this section): in our model, hiding of a single coat against grams of TiO2 per square metre, comparing a conventional binder-hosted film to the air-network host at matched TiO2 loading `[T11]`. "CR" throughout this document is contrast ratio, the ratio of a film's reflectance over a near-black substrate to its reflectance over a near-white substrate, the standard definition of a paint coat's hiding power.*

The first row is the sharpest demonstration available in this document's own tables: at zero TiO2 at all, the air-network coat still reaches a contrast ratio of 0.9724, higher than the conventional coat's contrast ratio of 0.9541 achieved with 7.2 grams per square metre of TiO2 already in it. This is the extender, and the air network itself, doing real optical work with no pigment present, exactly the physical mechanism this section's headline states: chalk becomes a pigment once it, too, sits in a low-index host. The remainder of the table shows the same gap narrowing but persisting as TiO2 is added back in: at the matched 18.0 grams per square metre, the air-network coat reaches 0.9969 against the conventional coat's 0.9898, a smaller but still real advantage, because both the extender and the rutile are now benefiting from the same low-index medium at once.

### 15.4 Size exclusion and capillarity: how the seal coat protects the air network it sits on

The seal coat's mechanical role, keeping weather, dirt and scrubbing out of a base coat that is deliberately porous, rests on two distinct physical effects working together rather than one vague "sealing" mechanism. The first is size exclusion: a seal-coat latex particle in the 70 to 250 nm range surveyed in section 14.5 `[E23]`, `[E25]` is too large to migrate deep into the base coat's own particle network (rutile at 250 nm median `[A04]`, the fine extender at 600 nm median `[A09]`) the way a true solution or a much smaller molecule would; instead, as the seal coat's water phase evaporates and its latex particles coalesce (a process governed by the latex's own minimum film-formation temperature, 45 degrees C for the Arkema example in Table 14.4 `[E25]`), the particles pack and fuse into a continuous skin largely at the surface, rather than dispersing uniformly throughout the base coat's full depth.

The second effect is capillarity: the wet seal coat, applied onto a porous, air-filled base coat, experiences capillary wicking into the base coat's own surface pores before the latex coalesces, which is exactly the physical process the model's infiltration parameter (A07) represents numerically, 10% of base-coat pore volume filled in the base case, 25% in the bear scenario (more infiltration, more of the air network lost to the seal coat invading it), and 0% in the bull scenario (an idealised seal coat that infiltrates not at all) `[A07]`. These two effects pull in opposite directions on the same question, how much of the base coat's porosity survives once the seal coat is applied over it, and the bear-to-bull range in Table T14 (21% to 65% TiO2 saving as the surroundings rule itself moves from binder-wetted to pure air `[T14]`) is this document's own honest statement of how much the final result depends on winning that balance in practice rather than merely specifying it on paper.

### 15.5 Hydrophobic pores for exteriors: an optional treatment, not yet part of the base design

The base coat's porosity, an asset for scattering, is a liability for water ingress once the same design is extended to an exterior facade exposed to rain and humidity (a question section 19 returns to directly). Lane E surveyed silane and siloxane water repellents specifically because this is a known, commercially available answer to that liability in masonry generally, not because this project has tested one on its own formulation. Table 15.2 lists what lane E found.

| Product | Dosing | Source |
|---|---|---|
| Evonik Protectosil 60 SK | Minimum recommended concentration 10% by weight (1 part product to 9 parts solvent) | `[E28]` |
| Wacker SILRES BS SMK 1311 | Diluted into water, applied in at least two wet-on-wet coats, used the same day it is diluted | `[E29]` |
| PROSOCO Sure Klean Weather Seal Siloxane WB | Dilutable up to 19 parts fresh water; roughly 4,000 square feet per gallon of concentrate | `[E30]` |
| A water-based silane cream (about 40% active) | 200 to 400 millilitres per square metre, one coat | `[E31]` |
| PROSOCO Silane 100 (100% active, solvent-free) | Markets coverage up to five times a 40%-active solvent-reduced product | `[E32]` |

*Table 15.2: silane and siloxane water-repellent products and their manufacturer-stated dosing, surveyed as a candidate treatment for an exterior variant of the porous base coat. None of these products has been trialled on this project's own formulation; this table reports what the commercial market offers, not a result this project has measured.*

The honest scope of this finding is narrow: a silane or siloxane hydrophobic treatment is a plausible, commercially mature answer to the exterior water-ingress question a porous base coat raises, listed here as a design option for the lab programme (section 22) to actually test, not as a claim that the exterior variant of this design already works. Section 19.1 revisits this when it addresses water-borne and solvent-borne application and the interior-first rollout sequence this honest gap motivates.

### 15.6 Stratification physics for a one-coat horizon-2 version

Section 13.3b already introduced the Peclet number (a dimensionless ratio of how fast a particle is carried toward a drying film's surface by evaporating water against how fast it diffuses randomly) as the test for whether a single wet film, left to dry on its own, might naturally sort itself into a pigment-rich lower layer and a binder-rich, size-excluding upper layer, collapsing this design's two coats into one. This section restates Table T16 from the mechanism side rather than the forward-looking design-note side, because the underlying physics belongs here as much as the horizon-2 ambition does.

| Climate | Evaporation rate (µm/s) | Peclet number, 80 nm binder latex | Peclet number, 600 nm pigment particle |
|---|---|---|---|
| Hot and dry (north India summer) | 0.50 | 5.8 | 43.3 |
| Composite climate | 0.25 | 2.9 | 21.6 |
| Warm and humid (coastal monsoon) | 0.10 | 1.2 | 8.7 |

*T16 (restated for this section's mechanism discussion): in our model, drying Peclet numbers for an 80 nm binder latex and a 600 nm pigment particle, by Indian climate zone `[T16]`, `[A29]`, `[A30]`, `[A31]`.*

The physical reading, stated once here in full: a Peclet number above 1 means the evaporating water's own upward flow at the drying surface sweeps a particle toward that surface faster than the particle's own random (Brownian) motion can redistribute it back into the bulk of the wet film; a Peclet number below 1 means diffusion wins, and the particle stays well-mixed instead. In every one of the three climate rows, the larger, 600 nm pigment particle's Peclet number sits well above 1 (from 8.7 in the slowest-drying, warm and humid case, to 43.3 in the fastest-drying, hot and dry case), meaning the pigment is swept toward the surface in every Indian climate this project modelled. The smaller, 80 nm binder latex's Peclet number is lower in every zone, and in the warm, humid case it drops to 1.2, barely above the diffusion-dominated threshold, meaning the binder particle's own tendency to stay well-mixed through diffusion is nearly as strong as the convective sweep pulling it toward the surface. This is the precise physical signature the stratification literature (section 11, thread 8) associates with "small-on-top" self-sorting: a larger, pigment-carrying particle convected toward one surface while a smaller, binder-carrying particle remains comparatively well-mixed, raising the prospect of a single wet film settling, on its own, into something resembling this design's own two-coat structure as it dries. It bears repeating in this precise mechanistic context: no drying trial has been run on this project's actual formulation. Table T16's Peclet numbers establish plausibility, not a demonstrated result, and the honest reading that governs section 16 and section 22 applies with full force to this horizon-2 note.

### 15.7 The index-mismatch arithmetic behind the extender's new role, worked in full

Section 15.3 states that calcite's index mismatch against air is "far larger" than its mismatch against binder, without showing the arithmetic; this subsection shows it, because a claim about why an inert filler becomes an active scatterer deserves the same worked-arithmetic standard this document applies to its headline TiO2-saving figure (section 16.5). Table 15.3 lays out the comparison using the model's own handbook index values.

| Host medium | Host index | Calcite index | Ratio (calcite over host) | Difference (calcite minus host) |
|---|---|---|---|---|
| Acrylic binder (conventional film) | 1.49 | 1.6 | 1.07 | 0.11 |
| Air (the base coat's host, bull case) | 1.00 | 1.6 | 1.60 | 0.60 |
| Base case's own Bruggeman-mixed host | 1.18 | 1.6 | 1.36 | 0.42 |

*Table 15.3: the refractive-index mismatch between calcite (the model's handbook value for calcium carbonate, `[T2]`) and three candidate host media, computed two ways (a ratio and a simple difference) so the scale of the change is visible either way `[T2]`, `[T9]`.*

The arithmetic: moving calcite from a binder host (ratio 1.07, difference 0.11) to the base case's own Bruggeman-mixed host (ratio 1.36, difference 0.42) multiplies the simple-difference mismatch by 0.42 divided by 0.11, which equals 3.8, nearly a fourfold increase in the raw index gap driving Mie scattering, before any of the model's own full multilayer Mie and Percus-Yevick crowding calculation (section 10.2) is even applied. This is the specific arithmetic behind section 15.3's qualitative claim, and it is the same physical lever, index mismatch against the surrounding medium, that section 9.1 already establishes for rutile; this section's finding is that the lever is not exclusive to rutile, it applies to any particle in the film once the surrounding medium's index falls, which is exactly why the fine PCC extender starts to behave as a pigment rather than a passive filler once it, too, sits inside the air network.

### 15.8 Reading the host-index table against Table T4's own curve

Table 15.1 (section 15.1) reports the host index the Bruggeman mixing rule returns at each scenario; Table 15.4 restates those same three host-index values directly against the nearest rows of Table T4 (introduced in section 9.1), to make the connection between this section's mechanism and section 9's physics fully explicit rather than leaving a reader to look the two tables up separately.

| Scenario | This design's host index | Nearest Table T4 row | Transport scattering per unit TiO2 volume at that row | Ratio to binder (1.49) at that row |
|---|---|---|---|---|
| bear | 1.38 | 1.40 | 9.2 (1/µm) | 1.12x |
| base | 1.18 | 1.20 | 10.9 (1/µm) | 1.33x |
| bull | 1.00 | 1.00 | 12.6 (1/µm) | 1.52x |

*Table 15.4: this design's own host index by scenario, read against the nearest matching row of Table T4's host-index scattering curve, to show how much of rutile's full 1.52x air-versus-binder scattering advantage each scenario actually captures `[T9]`, `[T4]`.*

The pattern this table makes visible: the bull scenario's host index (1.00) captures the entire 1.52x advantage Table T4 reports for pure air, because the bull scenario's own surroundings rule is pure air by construction `[A08]`; the base case's host index (1.18) captures a 1.33x advantage, a little under half of the dilute gain beyond 1.0x; and the bear scenario's host index (1.38) captures only a 1.12x advantage, closer to the binder-only baseline than to the air-only ideal. This table is the single clearest statement, in one place, of why this document's own honest reading (restated in full in section 16.6) ties the entire base-case saving claim to winning the Bruggeman-mix balance rather than to any fixed, guaranteed physical outcome. Stated as a single ratio: moving from the bear scenario's captured gain (1.12x) to the bull scenario's captured gain (1.52x) is itself a factor of 1.52 divided by 1.12, which equals 1.36, meaning the bull case captures 36% more of rutile's own scattering advantage than the bear case does, purely as a function of how completely the base coat's porosity translates into a genuinely air-dominated host rather than a binder-wetted one.

Exhibit for the deck: Table 15.1's host-index-by-scenario figures and the chalk-becomes-a-pigment finding in Table T11 are the mechanism panel's two headline numbers on slide 4/5 ("MECHANISM AND PROOF"); the hydrophobic-pore treatment in Table 15.2 and the stratification physics in Table T16 both feed the annexure's forward-looking A3 panel rather than the core slide, since neither is part of the base-case claim.

## 16. Proof of concept: the model matches a premium white with 24.8 g of TiO2 per m² instead of 40.8 g

**Answer.** Run through the same five-stage optical pipeline described in section 10, the proposed two-coat design reproduces the premium baseline's own brightness (Y of 90.7) and two-coat contrast ratio (0.998) while using 24.8 grams of TiO2 per square metre instead of the baseline's 40.8 grams, a reduction of 16.1 grams, or 39%, in the model's base case `[T9]`, `[T12]`. This is this document's proof of concept in the literal sense of the phrase: a computational demonstration that the design's own physics closes, not a measured result from a coated panel, and this section lays out that distinction, and every honest caveat that follows from it, in full.

### 16.1 The baseline and the fair reference, restated as the proof's own starting line

Before any saving can be claimed, the model first establishes what it is being compared against. Table T7 gives both reference points.

| Film | TiO2 PVC (pigment volume concentration) | Contrast ratio | Y (luminous reflectance) over white | L* | b* |
|---|---|---|---|---|---|
| Premium white, two coats of 30 µm | 18% | 0.9986 | 90.9 | 96.4 | 1.40 |
| Fair reference (least TiO2 meeting the same targets) | 17.0% | 0.9984 | 90.7 | 96.3 | 1.38 |

*T7: in our model, the premium baseline and the "fair reference," the least TiO2 a conventional film can carry while still meeting the brightness and contrast-ratio targets this project sets `[T7]`. "L*" and "b*" are two of the three CIE Lab colour coordinates (lightness, and yellow-blue position respectively); a positive b* close to zero describes a white with only a slight yellow cast, the kind a premium interior emulsion is expected to show.*

The fair reference, not the premium baseline itself, is the number this document's own saving claims are computed against, a distinction worth making explicit because it is the more conservative, more defensible choice: the premium baseline (18% TiO2 PVC) already has slightly more pigment than it strictly needs to meet the brightness target (Y 90.9 against a target of 90.7), so comparing the proposed design against the fair reference (17.0% TiO2 PVC, the leanest conventional film that still clears the same targets) means this document's saving figures understate, rather than overstate, the gap between the proposed design and a conventional film built with no slack at all.

### 16.2 The proposal's own numbers, scenario by scenario

Table T9, already used throughout sections 13, 14 and 15 for its formulation and mechanism content, is repeated here in full because this section's job is specifically to state it as a proof-of-concept result, not as a design recipe or a mechanism explanation.

| Scenario | Porosity | Host index | Base-coat TiO2 PVC | Seal-coat TiO2 PVC | Seal coat (µm) | TiO2 saving |
|---|---|---|---|---|---|---|
| bear | 25% | 1.38 | 11.9% | 18% | 21.5 | 15% |
| base | 35% | 1.18 | 9.1% | 12% | 16.4 | 39% |
| bull | 45% | 1.00 | 2.6% | 12% | 18.0 | 65% |

*T9 (restated for this section's proof-of-concept statement): in our model, the proposal's own film-level porosity, effective host index, base-coat and seal-coat TiO2 loading, and resulting TiO2 saving, by scenario `[T9]`.*

Stated as a proof-of-concept claim rather than a formulation table: in the model's base case, the proposed two-coat film meets the identical brightness (Y 90.7) and contrast-ratio (0.998) targets as the fair reference while needing 39% less TiO2 overall, and this result is not a single lucky scenario, because even the bear case (the model's most conservative set of optical assumptions, in which binder preferentially wets the rutile particle rather than leaving it in a cleaner air-dominated mix) still closes the brightness target at a 15% saving, and the bull case (the model's most optimistic set of assumptions) reaches a 65% saving `[T9]`.

### 16.3 How the model actually confirms the numbers close: the spectral curve

A single Y value and a single contrast ratio are summary statistics; Table T10 is the underlying evidence, the full spectral reflectance curve the model computes for both films across the visible range, which is what Y and contrast ratio are themselves computed from (section 10.2's colorimetry equations).

| Wavelength (nm) | Reference reflectance | Proposal reflectance |
|---|---|---|
| 380 | 0.000 | 0.000 |
| 420 | 0.760 | 0.762 |
| 460 | 0.910 | 0.907 |
| 500 | 0.913 | 0.910 |
| 540 | 0.908 | 0.906 |
| 580 | 0.908 | 0.909 |
| 620 | 0.908 | 0.908 |
| 660 | 0.903 | 0.906 |
| 700 | 0.896 | 0.901 |
| 720 | 0.893 | 0.900 |

*T10 (excerpted to ten rows for readability; the model's own output carries eighteen): in our model, spectral reflectance over a white backing, reference film against proposal, at ten representative wavelengths across the visible range `[T10]`.*

Two features of this curve matter for the proof-of-concept claim specifically. First, both curves sit near zero at 380 nm and climb sharply by 420 nm, the expected signature of rutile's own absorption edge (section 9.1, section 10.3) acting identically in both films, confirming the model is applying the same pigment physics to both the reference and the proposal rather than silently changing the underlying chemistry to make the comparison easier. Second, the two curves track each other within about half a percentage point of reflectance at every wavelength shown, and the proposal's curve runs very slightly higher than the reference's curve in the red end of the spectrum (700 nm: 0.901 against 0.896, a difference of 0.005, or about half a percent) while running very slightly lower in the green-yellow middle (460 nm: 0.907 against 0.910). This is consistent with the b* values in Table T7 (1.38 for the fair reference, 1.5 for the proposal per the locked-number register in section 4), a marginal, not visually significant, shift in the whiteness's own colour cast, which this document notes rather than smooths over.

### 16.4 Hiding power at matched TiO2, restated as the proof's single coat evidence

Table T11, already used in section 15.3 to show the extender's new optical role, is also direct proof-of-concept evidence in its own right: it demonstrates that at every matched TiO2 loading tested, a single coat of the air-network architecture hides better than a single conventional coat carrying the identical mass of pigment.

| Conventional coat: TiO2 g/m² | Contrast ratio | Air-network coat: TiO2 g/m² | Contrast ratio |
|---|---|---|---|
| 10.8 | 0.9759 | 6.0 | 0.9901 |
| 18.0 | 0.9898 | 18.0 | 0.9969 |
| 25.2 | 0.9943 | 30.0 | 0.9985 |
| 28.8 | 0.9955 | 36.0 | 0.9988 |

*T11 (restated for this section's proof-of-concept statement): in our model, one-coat hiding power against grams of TiO2 per square metre, conventional against air-network architecture `[T11]`.*

The headline comparison this document's locked-number register cites (section 4): one coat of the air-network architecture hides at 6.0 grams of TiO2 per square metre as well as a conventional coat does at 18.0 grams (both reach a contrast ratio near 0.99, 0.9901 against 0.9898), a threefold reduction in pigment mass for an equivalent single-coat hiding result `[T11]`. The arithmetic: 18.0 divided by 6.0 equals exactly 3.0, the clean threefold ratio this document's exhibit line to the deck (section 4) states.

### 16.5 The headline saving, with its own arithmetic shown in full

This document's most-quoted single figure, a 39% TiO2 saving at 24.8 grams per square metre against the fair reference's 40.8 grams per square metre `[T9]`, `[T12]`, is worked here with its full arithmetic, because the brief itself asks for a scientifically defensible mechanism, not a quoted percentage alone `[W-Q3]`.

| Step | Figure | Arithmetic |
|---|---|---|
| Fair reference, two coats | 40.8 g TiO2 per m² | Given, Table T7/T12 `[T12]` |
| Proposal, two coats, base case | 24.8 g TiO2 per m² | Given, Table T9/T12 `[T12]` |
| Reduction | 16.1 g TiO2 per m² | 40.8 minus 24.8 |
| Saving as a share of the reference | 39.5%, reported as 39% | 16.1 divided by 40.8, equals 0.3946 |
| Binder, two coats, reference | 41.6 g per m² | Model output, materials() `[M]` |
| Binder, two coats, proposal | 24.1 g per m² | Model output, materials() `[M]` |
| Binder reduction | 17.5 g per m² | 41.6 minus 24.1 |
| Binder saving as a share of the reference | 42.1%, reported as 42% | 17.5 divided by 41.6, equals 0.4207 |

*Table 16.1: the headline TiO2 and binder saving figures, with the subtraction and division behind each percentage shown in full `[T9]`, `[M]`. The binder-mass figures are a direct model output (`model_outputs.json`, economics.base.base_g/prop_g.binder) rather than a column of the printed Table T12, which reports binder only as part of the materials cost in rupees, not as a standalone mass; they are tagged `[M]` rather than `[T12]` for that reason.*

The binder saving (42%) is, perhaps counter-intuitively, larger in percentage terms than the TiO2 saving (39%), and the reason should be stated rather than left as an unexplained coincidence: the base coat's own binder share is deliberately held to 25% of its solids by volume `[A06]`, well below a conventional film's binder content, precisely because every additional unit of binder in the base coat fills a pore that the design wants left as air. The binder reduction is not a side effect of the TiO2 reduction; it is an equally deliberate feature of the same above-critical-PVC formulation choice described in section 15.2.

### 16.6 The honest reading, in full

This document's content-integrity rules (this project's plan, section 2.1) and its locked-number register (this project's plan, section 4) both commit to carrying one specific honest reading into this section and into section 21, in full, not abridged. It is restated here exactly as the plan locks it, because a reader who has reached this section deserves the full statement rather than a pointer to it: the base case rests on the Bruggeman mix of air and binder around the rutile particle; if binder preferentially wets the pigment instead of leaving it in a cleaner, more air-dominated surrounding, the saving falls to about a fifth, the bear scenario's own 15% figure `[T9]`; the baseline film itself is modelled without flocculation (particles clumping together rather than staying evenly, randomly dispersed), which flatters the conventional film's own modelled performance and, because of that, makes this project's own saving claim conservative on that specific count, not inflated; and nothing in this entire research document has been measured on an actual coated panel. Every one of these four statements is carried forward into section 21's own tornado-sensitivity discussion and into section 22's lab programme, which exists specifically to close the gap this honest reading describes.

### 16.7 What the model cannot see

Section 10.5 of this document already names the model's three structural limits in full (particle shape assumed spherical, crowding assumed statistically uniform rather than flocculated, and the model being a computational optics model rather than a measurement). This section adds two further, more specific statements of what the proof-of-concept result in this section specifically cannot see, because a proof-of-concept claim should name its own blind spots at least as carefully as it states its own result.

| What the model cannot see | Why it matters to this section's specific claim |
|---|---|
| Colour precision at a single wavelength for the handbook-constant materials | Zinc sulfide, zirconia, barium sulfate, polystyrene and the organic-crystal proxy are all treated as spectrally flat (section 10.3), adequate for the visible-light-averaged screening in section 12 but not for a colour-match claim at one wavelength, which this document never makes for any of these five materials |
| The acrylic binder's own true dispersion, as opposed to its PMMA (poly(methyl methacrylate)) proxy | The model's binder optics use Sultanova et al.'s 2009 PMMA data because both materials are non-absorbing, moderate-index organic polymers in the visible range, a reasonable stand-in, but this document flags it explicitly as a proxy, not a measurement of Asian Paints' own actual binder chemistry `[C07]`, `[C08]` |
| Any result from an actual coated, dried, measured panel | Repeated here because it is the single most important limit on this entire section: contrast ratio, Y, L*, b* and every spectral-reflectance figure in Tables T7, T9, T10 and T11 are model outputs, and every sentence in this document that reports one says "in our model" rather than reporting an observed laboratory result |

*Table 16.2: two specific, named extensions of section 10.5's structural limits, stated against this section's own proof-of-concept claim specifically, plus a restatement of the model's single most important general limit.*

A fourth point belongs in this table's discussion even though it does not earn its own row: the model's crowding treatment, the Percus-Yevick hard-sphere structure factor already introduced in section 9.2 and section 10.2, assumes every particle species in a layer is well mixed with every other species at the stated volume fractions. The base coat in this section's proof of concept carries three distinct solid species at once (rutile, fine PCC, and the binder's own solid fraction), and the model treats their mutual crowding as additive rather than explicitly modelling cross-species structure factors between a rutile particle and its nearest PCC neighbour specifically. This is a reasonable approximation for a screening-level comparison of this kind, consistent with how the model is used identically across every row of section 12's twelve-design screen, but it is one more respect in which "in our model" means a first-principles approximation of the real film's optics, not a particle-by-particle simulation of every possible neighbour pairing a real, milled dispersion would actually contain.

This section's own proof-of-concept claim is, in the end, a claim about internal consistency and physical plausibility, checked thirteen ways (Table T3, section 10.4) and cross-checked twice more against the twelve-design screen (section 12) and the volume-budget arithmetic (section 13), rather than a claim that has been externally validated against a measurement this project itself performed. That distinction is worth repeating here, in the section whose entire job is to state the proof of concept, because it is the single sentence a judge is most likely to test this document against, and the honest answer should be available in the section the question is most likely to be asked about, not only in the model's own limits section (10.5) several sections upstream.

### 16.9 Why "proof of concept" is the correct phrase, and not an understatement

The brief itself invites a proof of concept or a prototype, and states that either one earns extra credit over an idea alone `[W-S4]`, `[G3]`. This document's own use of the phrase "proof of concept" throughout sections 14 to 16 is deliberately the computational, not the physical, sense of that phrase: a demonstration that a design's own underlying physics is internally consistent and closes against a stated, checked target, run on the same model and the same checks (Table T3) that this document applies to every other design in section 12's twelve-row screen. This is a genuinely useful and, within the competition's own stated preference for original thinking over an untested assertion, a creditable form of evidence; it is not, and this document never allows a reader to mistake it for, a physical prototype of the kind a team with laboratory access and more time might bring instead. Stating this distinction one final time, in the section that most directly makes the proof-of-concept claim, is this document's own answer to the single most important question a judge could ask about this entire project: not "does the number check out" (it does, across thirteen internal checks and three independent scenarios), but "what kind of evidence is this number," a question this document answers the same way in every section that touches it, from the locked-number register in section 4 through this section's own honest reading in section 16.6.

### 16.8 The checks that specifically underwrite this section's claim

Section 10.4 of this document already lists all thirteen of the model's own internal self-checks in full; this section isolates the five whose specific job is to confirm that the proof-of-concept comparison this section reports is itself a fair, internally consistent one, rather than an artefact of how the model happens to be coded.

| Check | What it confirms for this section's specific claim |
|---|---|
| C6 | The premium baseline itself is a plausible premium white (contrast ratio 0.995 to 0.9995, Y 88 to 93, b* 0.5 to 3), meaning the number this section's proposal is matched against is itself a realistic target, not an artificially easy or hard one |
| C7 | The base-case proposal actually meets brightness, contrast ratio and the seal coat's own minimum-thickness requirement simultaneously, confirming the 39% saving figure is not computed against a design that secretly fails one of its own three targets |
| C8 | The scenario ordering holds (bear saving less than base saving less than bull saving), confirming the 15%, 39% and 65% figures in Table T9 move in the physically expected direction as the underlying assumptions move from conservative to optimistic |
| C9 | Contrast ratio rises with TiO2 in the baseline coat, confirming the model's own pigment-to-hiding relationship behaves correctly before it is trusted to compute the proposal's own hiding at a different TiO2 level |
| C12 and C13 | The twelve-design screen's own baseline row (section 12) reproduces this section's fair reference within 1% of TiO2, and the fair reference itself needs between 85% and 100% of the premium baseline's own TiO2, confirming the fair-reference comparison point used throughout sections 14 to 16 is internally consistent with the separate twelve-design screen in section 12 |

*Table 16.3: the five of the model's thirteen internal checks (full list in Table T3, section 10.4) most directly responsible for underwriting this section's own proof-of-concept comparison `[T3]`.*

Exhibit for the deck: Table T9's base-case row and Table 16.1's 39%-saving arithmetic are the card named `CARD: MONEYSHOT` on slide 4/5, exactly as this project's plan locks it (plan section 3.3); the full honest reading in section 16.6 is the defensive-depth footer on the same slide, pointing to the annexure's A2 and A3 panels for the full bear-to-bull range and tornado sensitivity.

## 17. The five challenges in the brief, answered one by one

**Answer.** The brief names five challenges any proposed solution must survive: maintaining high opacity with the alternative, long-term durability and yellowing resistance, dispersion, supply and economic challenges, and manufacturing complexity `[W-K1]`, `[W-K2]`, `[W-K3]`, `[W-K4]`, `[W-K5]`. This section answers each one in turn with a claim, the evidence behind it, the residual risk that remains honestly open, and the specific test that would close that risk, because a claim without a named test is not yet a defensible answer to a judge's follow-up question.

### 17.1 W-K1: maintaining high opacity with the alternative

| Element | Statement |
|---|---|
| Claim | In the model, the proposed two-coat design meets the identical brightness (Y 90.7) and contrast-ratio (0.998) targets as the fair-reference conventional film, using 39% less TiO2 in the base case `[T9]` |
| Evidence | Table T7 (the targets), Table T9 (the proposal meeting them by scenario), Table T10 (the full spectral curve matching within about half a percentage point of reflectance at every wavelength), Table T11 (one-coat hiding at matched TiO2) |
| Residual risk | The brightness and contrast-ratio match is a model result; a real coated panel could diverge due to flocculation, pigment dispersion quality, or substrate interactions the model does not simulate (section 16.7) |
| Test | ISO 6504-3 hiding-power measurement and a contrast-ratio read against a black-and-white chart (the withdrawn 2006 method's own convention, `[C39]`), on an actual drawn-down panel, against the lab programme's pass marks in section 22 |

*Table 17.1: W-K1 (maintaining high opacity), answered against the brief's own challenge language.*

### 17.2 W-K2: long-term durability and yellowing resistance

| Element | Statement |
|---|---|
| Claim | The pigment itself is unchanged (rutile, the same particle this document establishes in section 9.1 as having no equal in refractive index); the design question moves entirely to the seal coat's own durability as a continuous skin over a porous substrate, not to any new chemistry that could introduce a new yellowing mechanism |
| Evidence | The seal-coat latex candidates surveyed in section 14.5 are commercially established products with published minimum film-formation temperature specifications `[E25]`; Kan's 1999 finding that deforming-force-at-MFFT shows no particle-size dependence `[E26]` is evidence against one plausible failure mode (a size-dependent weak point in the seal film) |
| Residual risk | No exterior weathering trial has been run on this project's own formulation; a porous base coat is, by definition, more exposed if the seal coat's own integrity is ever breached (for example, by a deep scratch) than a fully dense conventional film would be at the same point |
| Test | ASTM D2486 scrub resistance and a QUV accelerated-weathering programme (named directly in section 22's lab plan), run against both the base-case and bear-case seal-coat specifications in Table T9 |

*Table 17.2: W-K2 (durability and yellowing resistance), answered against the brief's own challenge language.*

### 17.3 W-K3: dispersion

| Element | Statement |
|---|---|
| Claim | Both coats use standard rutile and standard extenders at concentrations well within the range Indian paint plants already disperse; no new, specialised particle (a hollow sphere, a yolk-shell structure, a substitute pigment) needs to be synthesised or dispersed |
| Evidence | Section 12.3's three-route grid states this directly: the particle-level-air and substitute-pigment families both require either a new particle-synthesis step or an unfamiliar powder, while the film-architecture route uses the same rutile and extenders Asian Paints already mills |
| Residual risk | The base coat's own lower binder share (25% of solids `[A06]`) could in principle change dispersion rheology (how the mix flows and resists settling) relative to a conventional, binder-rich formulation; this has not been tested in a real mill |
| Test | A standard dispersion quality check (grind gauge, Hegman fineness) on an actual milled batch of the base-coat formulation, included in section 22's lab plan's formulation-stability design of experiments |

*Table 17.3: W-K3 (dispersion), answered against the brief's own challenge language.*

### 17.4 W-K4: supply and economic challenges

| Element | Statement |
|---|---|
| Claim | The design uses less of Asian Paints' single most exposed, import-dependent raw material (TiO2, 57% of Indian demand sourced from China per the DGTR's own investigation period `[B07]`) and does not introduce a new raw material or a new supplier relationship anywhere in its recipe |
| Evidence | Section 9.4's duty-timeline analysis; section 20's cost work (owned by section 20, cited here only for its conclusion) shows materials cost falling from ₹18.4 to ₹12.0 per square metre in the base case `[T12]` |
| Residual risk | The design still uses TiO2, only less of it; it does not eliminate exposure to the duty dispute described in section 9.4, and the fine-extender (PCC) and acrylic-binder supply chains it leans on more heavily have their own price volatility, surveyed in lane E but not locked as model assumptions in every case (the binder footprint conflict noted in section 26) |
| Test | A supply-chain resilience exercise is not a laboratory test; the relevant check is a procurement review of PCC and acrylic binder sourcing at the volumes section 21's scale estimate implies, which this document recommends but has not itself performed |

*Table 17.4: W-K4 (supply and economic challenges), answered against the brief's own challenge language.*

### 17.5 W-K5: manufacturing complexity

| Element | Statement |
|---|---|
| Claim | The design adds no new unit operation to Asian Paints' existing plant: the base coat and seal coat are each mixed, milled and filled using the same four manufacturing steps (precipitated calcium carbonate preparation, base-paint letdown, seal-latex selection, application) described in full in section 18, on equipment the plant already runs |
| Evidence | Section 18's four-step production map; the painter-facing crosswalk in Table 14.5, which shows zero change to the number of coats or the application method |
| Residual risk | "No new unit operation" is a claim about the type of equipment needed, not a claim that the exact process parameters (mixing time, mill gap, letdown order) are already known for this specific, above-critical-PVC formulation; some process tuning should be expected even without new capital equipment |
| Test | A pilot-batch manufacturing run at production scale, the twelve-month pilot milestone named in section 23's roadmap, is the test that actually closes this residual risk, not a laboratory bench batch alone |

*Table 17.5: W-K5 (manufacturing complexity), answered against the brief's own challenge language.*

### 17.1a A closer look at the opacity claim's own weakest link

Table 17.1's residual-risk cell names flocculation and dispersion quality as the two mechanisms a real panel could diverge on; this is worth stating in more detail than the table itself allows, because it is also the single mechanism section 10.5 already flags as the model's own most consequential simplification. The model's crowding treatment (the Percus-Yevick hard-sphere structure factor, section 10.2) assumes particles are arranged in a disordered but statistically uniform way; a real dispersion that has not been perfectly milled can instead flocculate, clumping particles together in a way that reduces their combined scattering below what an evenly dispersed film of the same pigment loading would achieve. This document's own honest reading (restated in full in section 16.6) already states that this specific simplification flatters the conventional baseline more than it flatters the proposal, because the proposal's own base coat is formulated at a lower TiO2 loading (9.1% PVC) where flocculation has less pigment mass to act on in absolute terms; this is one of the few places in this document's own argument where a modelling simplification works in the proposal's favour rather than against it, and it is stated here precisely so that a sceptical reader cannot later claim this document only ever names simplifications that hurt its own case.

### 17.3a Why dispersion risk is judged low rather than zero

Table 17.3 scores dispersion risk as residual but real; this subsection explains the basis for that specific, calibrated judgement rather than a blanket "low risk" claim. Vandezande and Rudin's 1996 study of an 85/15 vinyl acetate/butyl acrylate latex found that particle size and surfactant type both measurably affect minimum film-formation temperature, drying rate and optical clarity `[E27]`, confirming that a formulation change of the kind this design makes (a lower binder share, a specific latex particle-size target for the seal coat) is the right category of change to expect some dispersion and film-formation tuning from, even though no new chemistry is introduced. Kan's 1999 finding, that the force needed to deform a drying latex film at its own minimum film-formation temperature showed no particle-size dependence and sat an order of magnitude below simple capillary-force theory's prediction `[E26]`, is independent evidence that the relationship between a latex's particle size and its real-world film-forming behaviour is more complicated than particle size alone would suggest, a nuance this document carries into its own dispersion-risk judgement rather than assuming particle size is the only lever that matters.

### 17.4a The duty dispute restated against this section's own supply claim

Table 17.4's claim, that the design reduces exposure to Asian Paints' single most import-dependent raw material without eliminating that exposure entirely, rests on the same duty timeline this document's section 9.4 already covers in full. Restated briefly here, against this section's own challenge-by-challenge framing specifically: the Directorate General of Trade Remedies' remand finding of 3 August 2026 recommends a duty range of USD 460 to USD 681 per tonne on Chinese titanium dioxide `[B03]`, a range this document's section 9.4c shows varies by 48% between its lowest and highest named rate; as of this document's own access date, no primary source confirms that recommended duty has actually been notified into force `[B17]`. A design that needs 39% less TiO2 in the base case `[T9]` is, by direct arithmetic, 39% less exposed to however that duty dispute ultimately resolves, on the portion of Asian Paints' TiO2 purchases the design's addressable rollout actually reaches; this is the precise, and appropriately bounded, version of the supply-security claim this section makes, stated without overstating it into a claim that the design removes TiO2 exposure altogether.

### 17.2a Why durability risk is judged open rather than low

Table 17.2 is deliberately less reassuring than Table 17.1 or Table 17.3, and this subsection states why, because a consulting-grade answer to a durability question should not borrow confidence from an adjacent, better-evidenced claim. The opacity claim (section 17.1) and the dispersion claim (section 17.3) both rest on the model's own direct, checked optical output, a form of evidence this document can quote with a precise number and a precise tag. The durability claim rests instead on an inference, that an unchanged pigment chemistry plus a commercially mature latex category implies no new yellowing mechanism, which is a reasonable engineering argument but not itself a measured result. Nothing in this project's own research lanes located an actual accelerated-weathering trial, of any kind, on a formulation built above critical PVC and sealed by a size-excluding topcoat of the specific kind this design proposes; the closest evidence this document has is the general coatings literature's own, decades-old finding that porosity above critical PVC raises dry hiding, rusting and stain susceptibility together `[C28]`, which is itself a reason for caution about durability, not a reassurance, since the same porosity this design relies on for scattering is also the porosity the literature already associates with faster substrate exposure once a seal coat's own integrity is breached. This document's own standard of honesty (section 2.1) requires naming this as the single challenge, among the brief's five, where this document's own confidence is lowest, and section 22's lab programme accordingly places QUV accelerated weathering and a direct yellowing-index measurement among its very first tests, not as a late-stage confirmation step.

### 17.5a Manufacturing complexity restated against the brief's own framing

The brief asks specifically how the solution will be produced and whether raw-material handling and scalability are credible `[W-Q4]`, `[W-Q7]`, framing manufacturing complexity and scalability as closely linked questions rather than separate ones. This document's own answer, worked through in full in section 18, treats them that way too: a design judged low-complexity in Table 17.5 only earns that judgement because section 18's own four-step production map (Table 18.0) shows no new unit operation anywhere in the chain, and because section 18.8's scale check confirms the PCC supply market this design leans on more heavily is not a cottage-scale, artisanal market but one that already includes at least one Indian producer (Gulshan Polyols) operating multiple industrial-scale satellite plants `[E04]`, `[E06]`. A design that required a new unit operation but drew on an abundant raw material would still carry real manufacturing-complexity risk; a design that drew on a scarce raw material but needed no new equipment would carry real scalability risk instead. This design's own claim, stated plainly, is that it avoids both of these failure modes at once, which is the specific reason this document scores manufacturing complexity as the lowest-risk item among the brief's own five challenges, Table 17.5's own residual risk notwithstanding.

### 17.6 Reading the five answers together

One pattern runs across all five tables and is worth calling out directly: every claim in this section traces to a specific, tagged model output or a specific, tagged lane-E or lane-D finding, and every residual risk names a specific gap between what has been modelled or surveyed and what has actually been measured on a real panel or a real plant. This is the same discipline section 9 through 16 apply throughout, restated here against the brief's own five named challenges specifically rather than against this document's own internal argument structure, because a judge reading this section is checking the brief's own checklist, not this document's chapter headings.

The second pattern runs in the opposite direction from what a defensive reading of this section might expect. The two challenges this document answers with the most confidence (opacity, in Table 17.1, and manufacturing complexity, in Table 17.5) are also the two the model and the production map most directly address with a checked, tagged number; the two challenges answered with the least confidence (durability in Table 17.2, and the open supply-chain-resilience question in Table 17.4) are precisely the two that sit outside what a computational optics model or a production-equipment map can settle on their own. This is not a coincidence this document glosses over: it is the honest shape of what a research-stage, pre-laboratory proof of concept can and cannot say, and it is the same shape the lab programme in section 22 and the roadmap in section 23 are both built around, front-loading exactly the tests (durability, dispersion rheology) that this section's own confidence ranking says matter most to close early.

One last point closes this section. The brief itself states that cost will not be a barrier to idea selection `[W-Q6]`, and none of this section's five tables name cost as a residual risk in its own right, because section 20's own cost work shows the design reducing, not raising, material cost per square metre in every scenario this document models `[T12]`. The five risks this section does name (model-versus-panel divergence, unproven exterior and durability performance, dispersion-rheology tuning, continued though reduced duty exposure, and process-parameter tuning without new capital equipment) are the honest, specific list this document stands behind, and each one already carries, in its own table above, the test that would close it.

Exhibit for the deck: this section's five claim-evidence-risk-test tables are the direct source for slide 5/5's risk register (section 24 restates the same five challenges in probability-impact language) and for the annexure's A3 panel, which carries the residual-risk column from each of the five tables above in condensed form.

## 18. Production and raw materials: four steps on equipment Asian Paints already runs

**Answer.** The design is manufactured in four steps, each one already a standard unit operation in a paint plant: preparing or sourcing the fine precipitated calcium carbonate (PCC) extender, letting down the base paint (mixing rutile, PCC and binder at the above-critical-PVC ratios set in section 14), selecting and qualifying a seal-coat latex within the particle-size range surveyed in section 14.5, and applying both coats with the same brush, roller or spray equipment painters already use `[F01]`, `[F03]`. No step requires a new reactor, a new synthesis process, or new handling infrastructure beyond what the raw materials involved (TiO2, PCC, acrylic binder) already require under existing safety practice.

### 18.0 The four steps, as a single overview

Before each step is covered in its own detail, Table 18.0 states all four as a single reference, naming what goes in, what comes out, and which equipment class handles it, so a reader can hold the whole production map in view before the detail sections below expand on each row.

| Step | Input | Output | Equipment class |
|---|---|---|---|
| 1. PCC sourcing | Limestone-derived milk of lime and CO2 (at the producer); a purchase order (at Asian Paints) | Fine, 0.6 micron median precipitated calcium carbonate `[A09]` | A carbonation reactor (at an external Indian PCC producer, Table 18.1); none on Asian Paints' own site |
| 2. Base-paint letdown | Rutile TiO2, fine PCC, acrylic binder, water and standard additives | The air-network base coat, 9.1% TiO2 PVC, 35% porosity (base case) `[T9]` | High-speed disperser and letdown tank, standard emulsion-plant equipment |
| 3. Seal-latex selection | A purchased, pre-formed acrylic latex (70 to 250 nm, Table 18.3) plus minor additives | The seal coat, 12% TiO2 PVC, minimum 15 µm dry film (base case) `[T9]`, `[A28]` | Letdown tank, the same class of equipment as step 2 |
| 4. Application | The base coat and seal coat, in cans | A painted wall, two topcoats over one primer | Brush, roller or spray; the painter's own existing equipment |

*Table 18.0: the four production steps restated as a single input-output-equipment map, ahead of the detailed treatment each step receives in sections 18.1 to 18.4.*

### 18.1 Step one: the PCC route

Precipitated calcium carbonate is manufactured, industrially, by lime-milk carbonation: milk of lime (a calcium hydroxide slurry) is reacted with carbon dioxide gas, Ca(OH)2 + CO2 to CaCO3 + H2O, with the carbonate ion forming via dissolved CO2 and carbonic acid in the alkaline slurry `[E07]`. Table 18.1 states the process parameters this project's lane E could verify.

| Parameter | Finding | Source |
|---|---|---|
| Reaction | Lime-milk carbonation, as above | `[E07]` |
| Particle size control | Milling the milk-of-lime slurry to a defined fineness before CO2 injection gives reproducible PCC particle properties | `[E09]` |
| Crystal morphology control | A lime concentration below 1.0 molar favours rhombohedral calcite crystals below 100 nm; lime feed concentration and CO2 flow rate are the controlling variables | `[E08]` |
| Indian producers | Gulshan Polyols Ltd operates on-site satellite PCC plants (its first, 10,000 tonnes per annum, commissioned May 2009; a sixth at Amlai, Madhya Pradesh, commissioned December 2015) `[E04]`, `[E06]`; Riddhi Metal and Chemicals (Mahesana, Gujarat) and SVN Bharat Minchem (Jaipur, Rajasthan) both manufacture and export PCC `[E02]`, `[E03]` |
| Indicative price | Marketplace listings cluster at roughly ₹15 to ₹21 per kilogram for bulk, ungraded PCC `[E01]` |

*Table 18.1: the precipitated calcium carbonate production route, as this project's lane E could verify it from public patent and industry sources.*

Asian Paints does not need to build a PCC plant of its own to use this route: Table 18.1's Indian producer list confirms a PCC supply market already exists at industrial scale, satellite plants purpose-built next to the demand they serve. What this design does require, and what no marketplace listing in Table 18.1 confirms, is PCC at the specific fine grade (0.6 micron median `[A09]`) the model's own base-case recipe calls for; this document's gap register (section 26) notes that lane E found marketplace prices for coarser or unspecified grades of PCC, not for this specific fine grade, so the price figures used in section 20's cost work carry that caveat forward.

### 18.2 Step two: the base-paint letdown

The base coat is let down (the industry term for the final mixing stage, where a pre-dispersed pigment grind is diluted with the remaining binder, water and additives to the finished paint's own formulation ratios) at the volume ratios Table 14.1 and Table T9 already specify: 9.1% TiO2, the balance split between PCC extender and a binder share held to 25% of total solids by volume `[T9]`, `[A06]`. This is a standard letdown operation, distinguished from a conventional premium-emulsion letdown only by its own target ratios, not by any new equipment. Table 18.2 restates the raw-material inputs this one step draws on, each already covered elsewhere in this document and brought together here as a single production-facing bill of materials.

| Input | Role in this step | Where this document covers it in full |
|---|---|---|
| Rutile TiO2 | Primary pigment | Section 9, section 14.3 |
| Fine PCC extender (0.6 µm) | Co-scattering extender once above critical PVC | Section 15.3, section 18.1 |
| Acrylic binder solids | Film-forming matrix, held deliberately lean | Section 14.3, section 14.5a |
| Water and standard additives (thickener, dispersant, biocide) | Carrier and process aids, unchanged from a conventional emulsion | Not separately modelled; assumed identical to a conventional premium emulsion |

*Table 18.2: the base-coat letdown's own bill of materials, with a cross-reference to where each input is covered in full elsewhere in this document.*

### 18.3 Step three: seal-latex selection and qualification

Unlike the base coat, which is a new formulation this project's own model specifies from first principles, the seal coat's core ingredient, an acrylic latex in the 70 to 250 nm particle-size range, is selected from an already-commercialised product category rather than synthesised new. Table 18.3 restates the candidate products from section 14.5's survey, framed here as a qualification shortlist rather than a mechanism explanation.

| Candidate | Particle size | Qualification note |
|---|---|---|
| Arkema NEOCAR Acrylic 850 | 70 nm | MFFT 45 degrees C; a hydrophobic, ambient-cross-linking latex, by the vendor's own technical data sheet `[E25]` |
| An ultrafine acrylic latex per PCI Magazine's own trade-article target | ≤ 100 nm | Surfactant load is a named tradeoff against scrub, adhesion and gloss `[E24]` |
| A vinyl acetate paint binder per a US patent example | 100 to 250 nm, preferred about 105 nm | Documented as a standard architectural paint binder particle-size range `[E23]` |

*Table 18.3: the seal-latex qualification shortlist, drawn from section 14.5's own particle-size survey, each candidate already a commercially available product category rather than a new synthesis target.*

Qualification, in this context, means confirming a chosen latex's own minimum film-formation temperature and infiltration behaviour against the base coat's own porosity (section 15.4) under real site drying conditions, the specific test named in section 22's lab plan; this step is a selection and testing exercise, not a new chemistry development project, which is the single biggest reason this document scores manufacturing complexity as a low residual risk in Table 17.5.

### 18.4 Step four: application

Section 14.6's crosswalk already shows this step in full: one primer coat, the base coat as the first topcoat, the seal coat as the second topcoat, applied by brush, roller or spray exactly as any current Asian Paints emulsion is applied today `[F01]`, `[F03]`. No new application step is introduced.

### 18.5 Handling and safety of each raw material

Table 18.4 collects the handling and safety findings this project's lanes B and E verified for the three raw materials this design's production steps actually touch, because the brief's own seventh question asks specifically for a perspective on the handling of the raw materials used `[W-Q7]`.

| Raw material | Classification or exposure limit | Handling note |
|---|---|---|
| Titanium dioxide | OSHA permissible exposure limit (PEL): 15 mg/m³, 8-hour time-weighted average (TWA), total dust `[E34]`; ACGIH 2021: 0.2 mg/m³ (nanoscale), 2.5 mg/m³ (finescale) `[E35]`; NIOSH recommended: 2.4 mg/m³ (fine), 0.3 mg/m³ (ultrafine) `[E36]`; IARC Group 2B, possibly carcinogenic to humans, based on animal inhalation studies `[E38]` | Standard dust-control (local exhaust ventilation, respiratory protection where TWA limits could be exceeded) already governs TiO2 handling at any paint plant; this design's base coat uses less TiO2 per unit film than a conventional coat, not a different grade or particle size of TiO2 |
| Precipitated calcium carbonate | A Univar safety data sheet and a Mississippi Lime safety data sheet both report PCC as "not classified" under the Globally Harmonised System (GHS) `[E43]`, `[E45]`; both separately note that PCC dust can mechanically irritate the eyes, skin and upper respiratory tract, a physical rather than a toxicological hazard `[E44]` | Standard dust-control measures apply; no special handling beyond what any inert mineral filler already requires at an Indian paint plant |
| Acrylic binder solids | No single, unambiguous safety classification was located in this search beyond standard latex-emulsion handling practice | Standard liquid-emulsion handling (closed storage, standard personal protective equipment) applies; this design does not change the binder's own chemistry, only the quantity used |

*Table 18.4: handling and safety findings for the three raw materials this design's production steps touch directly. "TWA" (time-weighted average) and "PEL" (permissible exposure limit) are standard occupational-exposure terms; a TWA limit is an average exposure over a working shift, while a PEL is OSHA's own enforceable ceiling for that average.*

This document states the one real classification conflict plainly rather than resolving it artificially: the International Agency for Research on Cancer (IARC) classifies TiO2 as Group 2B (possibly carcinogenic to humans), while the American Conference of Governmental Industrial Hygienists (ACGIH) classifies it as A4 (not classifiable as a human carcinogen) `[E38]`, `[E40]`; both classifications are current, scoped differently (hazard identification against occupational risk assessment), and this document carries both forward rather than picking one to quote and omitting the other. A second, related conflict sits one level below this one: NIOSH's own 2011 recommended exposure limits (2.4 mg/m³ fine, 0.3 mg/m³ ultrafine, time-weighted average) `[E36]` sit well below OSHA's enforceable permissible exposure limit (15 mg/m³ total dust) `[E34]`, and below ACGIH's 2021 respirable-fraction values (2.5 mg/m³ finescale, 0.2 mg/m³ nanoscale) `[E35]`. All three figures are legitimate and current, but they answer different questions (a recommended guideline against an enforceable ceiling; total dust against the respirable fraction that actually reaches the lung), and this design's own dust-control practice should state which of the three it is working to, rather than quoting the least restrictive figure as though it were the only one that exists.

### 18.6 Plant fit: which of Asian Paints' existing equipment handles each step

Table 18.5 maps the four production steps against the kind of equipment an Indian decorative-paint plant already operates, to state directly why this design requires no new capital equipment, a claim made throughout sections 14, 17 and 20 but stated here in its own dedicated table for the first time.

| Step | Equipment already in use at a conventional emulsion plant | New equipment this design would require |
|---|---|---|
| 1. PCC sourcing | None on Asian Paints' own site; PCC is purchased from the Indian producer market described in Table 18.1 | None; this is a procurement relationship, not a manufacturing step Asian Paints performs itself |
| 2. Base-paint letdown | Standard high-speed disperser and letdown tank, the same equipment used for any premium emulsion's own pigment-grind-to-letdown step | None; only the target ratios change, not the mixing hardware |
| 3. Seal-latex selection | Standard letdown tank, used to blend a purchased latex with the seal coat's own minor additive package | None; the latex is purchased pre-formed from an existing supplier, as Table 18.3's candidates already are |
| 4. Application | Standard filling, packaging and the painter's own brush, roller or spray equipment | None |

*Table 18.5: the four production steps mapped against existing plant equipment, confirming no new unit operation or capital equipment is required anywhere in the design.*

### 18.7 Why four steps, not more

A reader comparing this design's own four-step production map against a conventional premium emulsion's own production process (pigment dispersion, letdown, filling, application, three steps rather than four) might reasonably ask why this design adds a step at all. The honest answer is that it does not add a manufacturing step inside Asian Paints' own plant; it adds a fourth named step only because this document counts the external PCC-sourcing relationship (Table 18.1) as its own step for completeness, even though Asian Paints performs no chemistry of its own at that step, only a purchasing decision. Counted strictly by what happens inside an Asian Paints plant, the design is a three-step process, identical in step count to a conventional emulsion: a letdown (now split conceptually into a base-coat letdown and a seal-coat letdown, but using the identical equipment class for both, as Table 18.0 states), filling, and application. This document states the distinction plainly rather than letting a reader infer either that nothing changed inside the plant (true) or that nothing changed anywhere in the supply chain at all (not quite true, since the base coat's own lower binder share and the seal coat's own specific latex-size requirement are real, if modest, procurement and quality-control changes, named throughout sections 14.5, 14.7 and 18.3).

### 18.8 A scale check: does the supply market in Table 18.1 actually support Asian Paints' own volumes

Section 21's own scale estimate (not this section's to own in full, but relevant here as a sanity check on this section's production claim) puts Asian Paints' base-case TiO2 bill at roughly ₹2,998 Cr a year and 1,19,919 tonnes `[T13]`. This section's own job is to confirm, at least directionally, that the PCC supply market named in Table 18.1 is not a bottleneck that quietly undermines the production claim this section otherwise makes. Gulshan Polyols' own calcium carbonate capacity has reached 1,05,000 metric tonnes per annum across its full group of sites `[E04]`, a single Indian producer's capacity that is the same order of magnitude as, though smaller than, Asian Paints' own full-scale TiO2 tonnage; this is not, on its own, proof that Indian PCC supply can absorb a nationwide rollout of this design at full base-case adoption (40% of the addressable interior-emulsion volume by year five, per assumption A25 in section 21), but it is evidence that the PCC supply market is not a negligible or purely artisanal one, and that a procurement conversation with existing, already-scaled Indian producers is the right next step rather than a search for an entirely new supply source. This document states this as a scale sanity check, not as a confirmed capacity-matching exercise, because no study in this project's own research lanes directly tested whether Indian PCC capacity, summed across all named producers, could meet this design's own full projected demand. Two further, smaller Indian PCC producers named in lane E's own survey, Riddhi Metal and Chemicals (Mahesana, Gujarat) and SVN Bharat Minchem (Jaipur, Rajasthan), both manufacture and export PCC commercially `[E02]`, `[E03]`, which this document reads as evidence that PCC supply in India is distributed across more than one producer and more than one state, a mild diversification benefit relative to the concentrated, largely offshore TiO2 supply chain described in section 9.3 and section 9.4, even though neither smaller producer's own capacity figure was located in this search.

Exhibit for the deck: Table 18.1's PCC route and Table 18.5's plant-fit mapping are the production-steps panel on slide 4/5 ("MECHANISM AND PROOF"), directly answering the brief's own question on how the material will be produced `[W-Q4]`; Table 18.4's handling summary feeds the annexure's A2 panel.

## 19. Where it applies: interior emulsions first, then exteriors, industrial and automotive

**Answer.** This design is recommended for a staged rollout starting with water-borne interior emulsions, the segment the model's own baseline and proposal are both built and verified against, before extending to exteriors (where the hydrophobic-pore treatment from section 15.5 becomes necessary), industrial and automotive coatings (where solvent-borne systems and different durability standards apply), and tinted colours generally. This sequencing is not arbitrary: it follows directly from where this document's own model, lane E's materials survey, and lane F's painting-practice evidence carry the most direct support, and it states plainly where that support thins out as the design moves away from its best-evidenced starting point.

### 19.1 Water-borne and solvent-borne: what actually changes, and what does not

The model's own optical pipeline (section 10) is indifferent to whether the binder is water-borne (an acrylic emulsion, dispersed in water) or solvent-borne (an alkyd or acrylic resin, dissolved in an organic solvent), because Mie scattering, crowding and Kubelka-Munk radiative transfer depend on the dried film's own refractive-index structure, not on how the wet film was carried to the wall. What changes between the two is the production and application chemistry, not the optics this design's recommendation rests on. Table 19.1 states what is known and what remains open for each.

| System | What this document's evidence supports | What remains open |
|---|---|---|
| Water-borne (architectural interior and exterior emulsions) | The model's own baseline and proposal are both built on an acrylic (PMMA-proxy) binder index `[T2]`, and lane F's data (sheets F01 to F13) are all water-borne premium interior emulsions, the closest direct match to this design's own assumptions | Exterior durability under India's climates, covered in section 19.3 |
| Solvent-borne (industrial, automotive, some protective coatings) | The underlying optical mechanism (an above-critical-PVC base coat sealed by a size-excluding topcoat) does not depend on the binder being water- or solvent-carried, so the design's physics is not disqualified for this segment | No solvent-borne latex-size or minimum-film-formation-temperature data was surveyed in lane E; a solvent-borne seal coat would need its own particle-size (or equivalent film-continuity) specification, not yet established in this document |

*Table 19.1: water-borne and solvent-borne applicability, stated against this document's own available evidence rather than asserted uniformly across both.*

This table is this document's direct, honest answer to the brief's own requirement that the solution be "applicable for use in paints and coatings" both "water borne and solvent borne" `[W-S1]`: the underlying physical mechanism generalises to both, because nothing about Mie scattering or critical-PVC film formation cares which carrier fluid the binder arrived in, but this project's own evidence base (the model's acrylic optical constants, lane F's water-borne product data sheets) is strongest for the water-borne segment specifically, and this document states that asymmetry rather than implying equal confidence across both. A solvent-borne seal coat would, in practice, substitute an alkyd or solvent-acrylic resin for the water-dispersed latex this document surveys in section 14.5, and the same size-exclusion logic should still apply in principle, because the governing physical question (is the sealing resin's own dispersed or dissolved phase too large, or too slow-diffusing, to flood the base coat's pores before it sets) does not depend on water being the carrier; this document simply has not located or verified a specific solvent-borne particle-size or film-formation specification to state with the same confidence Table 14.4 states for the water-borne case, and names that absence here as a gap for the lab programme rather than filling it with an unverified number.

### 19.2 Tinting and colour

A premium interior emulsion is rarely sold or applied as pure white; tinting (adding coloured pigment to a white base to produce a finished shade) is the normal end use for the large majority of decorative paint volume. This document's model is built and verified entirely on a white (or near-white) film, and it states plainly that tinting is a genuine open question this research has not modelled: a lower base-coat TiO2 loading (9.1% PVC in the base case, against the conventional film's 18% `[T9]`, `[A02]`) changes the underlying white's own opacity and undertone, which in turn changes how much coloured tinting pigment is needed to reach a given tinted shade's own strength and hue. No figure in this document's locked-number register (section 4) covers tinted colour; this is named here as a structural gap for the lab programme (section 22) to close, not glossed over as a solved problem.

### 19.3 Touch-up and the repaint-dominated Indian market

One industry source lane F surveyed states that repainting constitutes 78% of total demand for decorative paints in India, meaning new construction is a minority driver of decorative-paint volume `[F45]`. This is directly relevant to this design's own rollout sequencing, because a repaint job is, by definition, a touch-up or a full recoat applied over an existing, already-painted wall, not a fresh substrate. Table 19.2 states what this means for the proposed two-coat system specifically.

| Scenario | What this design requires | Open question |
|---|---|---|
| Fresh construction (new wall, new primer) | The full three-step system already specified: primer, air-network base coat, seal coat, exactly as Table 14.5 crosswalks it | None beyond what sections 14 to 18 already cover |
| Full repaint over an existing conventional film | The existing film must itself accept the new base coat's adhesion and the base coat's own above-critical-PVC porosity must still develop correctly over a substrate that is not bare plaster | Not modelled; the model's own film-stack calculation (section 10.2) assumes the base coat is the first pigmented layer, not a recoat over an aged, pigmented substrate |
| Spot touch-up (a small area, not a full recoat) | Matching a two-coat system's own optical result with a single, small-area touch-up application is a known general challenge for any multi-coat architecture, not specific to this design | Not modelled; this is named as a limit, not resolved |

*Table 19.2: touch-up and repaint scenarios against the proposed design, stated against India's own repaint-dominated market (78% of demand per `[F45]`) rather than assuming a fresh-construction-only context.*

This document's honest statement here: a design that performs well on the fresh-construction case it was modelled against, but has an open question on the repaint case that dominates 78% of the actual Indian market it would be sold into `[F45]`, is not yet a complete go-to-market answer, and the lab programme in section 22 and the roadmap in section 23 both name repaint-substrate testing as an early priority specifically because of this market-share fact, not as an afterthought.

### 19.4 India's climates, restated for application sequencing

Section 13.3b and section 15.6 already cover the model's own climate-zone Peclet analysis (Table T16) for the horizon-2 stratification question; this section restates the climate point from the rollout-sequencing angle specifically. Table 19.3 crosswalks the three climate zones this document models against the application priority each one implies.

| Climate zone | Evaporation rate `[A29]`, `[A30]`, `[A31]` | IMD evidence | Application priority |
|---|---|---|---|
| Hot and dry (north India summer) | 0.50 µm/s | New Delhi (Safdarjung) June mean daily maximum 39.0°C, only 80.6 mm mean rainfall `[F36]` | Fastest drying; the clearest case for the horizon-2 one-coat version (section 15.6), but also the climate where Apcolite's own application guidance already restricts painting above certain temperature and humidity extremes `[F39]` |
| Composite climate | 0.25 µm/s | Not directly tied to one IMD station in this lane's search; treated as the model's own intermediate case | The baseline interior-first rollout's primary target climate |
| Warm and humid (coastal monsoon) | 0.10 µm/s | New Delhi (Safdarjung) August mean rainfall 226.8 mm, 10.2 mean rainy days `[F37]` | Slowest drying; the clearest case for prioritising the exterior hydrophobic-pore treatment (section 15.5) ahead of any one-coat ambition |

*Table 19.3: India's three modelled climate zones, crosswalked against which part of this design each zone's own drying behaviour makes the most urgent application priority.*

This document's gap register states plainly that no official Indian Meteorological Department (IMD) table, BIS (Bureau of Indian Standards) standard, or Asian Paints document found in this search gives a published water-evaporation rate in the specific unit (micron per second) the model's A29 to A31 assumptions use `[F38]`; the IMD evidence in Table 19.3 (temperature and rainfall) corroborates the general climate character of each zone, not the specific evaporation-rate figures the model assumes, and this document states that distinction rather than implying the model's own evaporation-rate assumptions have been independently measured.

### 19.4a The Indian decorative paint market's own value segments

Section 19.5's readiness tiers describe technical and evidentiary readiness; this subsection adds the commercial sizing context lane F surveyed, because a staged rollout plan needs to know not just which segment is most ready but how large each one is. Table 19.3a collects lane F's own market-segment findings, each stated with the caveat its own source carries, consistent with this document's own content-integrity rule that an unverified figure is dropped or replaced, never silently rounded into false precision.

| Finding | Figure | Caveat |
|---|---|---|
| Decorative paints' share of the overall Indian paints and coatings market | About 70% to 75% (one 2019 Indian Paint Association-sourced estimate) to "more than three-quarters" (a separate, undated sector note) | Two different sources, two different figures, both kept rather than reconciled `[F41]`, `[F42]` |
| Asian Paints' own market-share estimate | About 34% of the total paints market (a recent, undated figure) against 53% of the decorative-paints segment specifically (a 2015 analyst note) | The two figures use different bases (total market against decorative-only) and different years `[F43]` |
| Repainting's share of total decorative-paint demand | 78% | One industry source; already the basis for this section's own repaint-priority finding (section 19.3) `[F45]` |
| A current, India-specific premium/mid/economy value-tier breakdown | Not found | No source located in this search gives a quantified, current tier-level split; this is a structural gap in the available public data, not a search failure `[F46]` |

*Table 19.3a: Indian decorative-paint market-segment findings from lane F, each with the caveat or conflict its own source carries forward rather than resolved to one clean number.*

The practical implication for this section's own rollout sequencing: this document cannot state, with a quantified figure, what share of Asian Paints' revenue sits specifically in the premium interior-emulsion tier this design's own model is built against, because no source found in this search gives that breakdown `[F46]`. What this document can state, because lane F's finding is specific and sourced, is that new entrants (Birla Opus, JSW Paints with Akzo Nobel India, JK Cement) are pricing aggressively enough that Asian Paints has itself launched a budget-tier product, Neo Bharat Latex, in direct response `[F44]`; a design that cuts material cost by 34% in the base case (section 20) is directly relevant competitive ammunition in exactly the segment where that price pressure is sharpest, even though this document cannot quantify that segment's own precise share of Asian Paints' revenue. This is also, stated plainly, why this section's own staged rollout (section 19.5) begins with interior emulsions rather than with a segment this document cannot yet size: the premium interior-emulsion tier is both the segment the model is built and verified against (Table 19.4's own highest-readiness row) and the segment lane F's own technical data sheets document in the most direct, checkable detail, so the rollout's first stage is chosen on the strength of two independent kinds of evidence pointing the same way, not on either one alone.

### 19.5 The segment table: where this design sits today

Table 19.4 draws together this section's own findings into a single segment-by-segment readiness statement, the table this document's writers consider the single most useful reference for a judge asking "where does this actually apply right now."

| Segment | Readiness | What this document's evidence supports | What remains open |
|---|---|---|---|
| Interior emulsions, water-borne, white, fresh construction | Highest | The model's own full base case (sections 14 to 16); lane F's own technical data sheets as the closest direct comparator | Panel-level verification (section 22) |
| Interior emulsions, water-borne, tinted | Medium | The underlying mechanism generalises in principle (section 19.2) | Tinted-shade opacity and strength, not modelled |
| Interior emulsions, water-borne, full repaint over an existing film | Medium | Repaint dominates 78% of Indian decorative-paint demand `[F45]`, making this segment commercially urgent despite being technically less verified | Adhesion and film-formation over an aged, pigmented substrate, not modelled |
| Exteriors, water-borne | Lower | The core optical mechanism is identical to interiors; silane and siloxane hydrophobic treatments are a commercially mature, surveyed candidate answer to water ingress (section 15.5) | No exterior weathering trial of any kind has been run |
| Industrial, automotive and solvent-borne coatings generally | Lowest among the segments named in the brief | The underlying physics (above-critical-PVC film formation, size-excluding seal coat) does not depend on the carrier fluid (section 19.1) | No solvent-borne seal-latex specification exists in this document; durability standards for these segments were not surveyed |

*Table 19.4: a segment-by-segment readiness statement for the proposed design, stated as four tiers rather than as a single uniform claim of applicability across "architectural, automotive and industrial coatings" `[W-S1]`.*

This table is this document's direct, calibrated answer to the brief's own framing that the solution should apply to "architectural, automotive and industrial coatings" both "water borne and solvent borne" `[W-S1]`: the underlying mechanism is argued to generalise across all of these, on physical grounds stated in section 19.1, but this document's own actual evidence, the model's verified numbers and lane F's and lane E's survey findings, is concentrated almost entirely in the first row, and the honest, staged readiness statement in Table 19.4 is this document's way of answering the brief's full scope without overstating how far its own evidence currently reaches. The roadmap in section 23 turns this readiness table directly into a staged, gated rollout plan.

Exhibit for the deck: Table 19.4's segment-readiness tiers are the backbone of the annexure's A3 panel, restating this section's staged-applicability finding in the format the deck's own defensive-depth structure uses; the repaint-market fact in section 19.3 (78% of Indian demand `[F45]`) is a standalone callout available to either slide 2/5 ("THE CHALLENGE") or the annexure, depending on space, per the deck derivation step in this project's plan section 15.
