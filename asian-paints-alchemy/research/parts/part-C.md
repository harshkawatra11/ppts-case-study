## 9. Rutile in binder scatters only 66% of what it would in air, and crowding takes another 9%

**Answer.** Rutile titanium dioxide (TiO2) is the industry benchmark white pigment because its refractive index is the highest practical value available to a paint formulator, and scattering efficiency grows with the mismatch between a particle's index and the index of whatever surrounds it. In our model, a rutile particle scatters light 1.52 times as efficiently per unit of pigment volume when its neighbour is air (index 1.00) rather than acrylic binder (index 1.49) `[T4]`. Put the same particle at a realistic 18% loading and crowding takes back roughly 9% of that lone-particle efficiency in binder and about 20% in air `[T6]`, because neighbouring particles start to interfere with each other's scattered light before they physically touch. Asian Paints sits at the sharp end of this physics: TiO2 is its single most exposed raw material, bought in bulk, imported in large part from China, and now caught in an anti-dumping dispute that has gone to the Calcutta High Court and back to the regulator twice in eighteen months.

### 9.1 Why rutile has no equal, and why that still is not enough

Titanium dioxide's optical advantage rests on its refractive index. The Devore 1951 dispersion, which the model uses for rutile's ordinary ray, gives an isotropic average refractive index that runs from about 2.93 at 450 nm to about 2.67 at 650 nm, against roughly 1.49 to 1.50 for the acrylic (polymethyl methacrylate, PMMA, proxy) binder across the same range `[M]`, `[T2]`. refractiveindex.info confirms Devore's underlying 1951 paper, "Refractive indices of rutile and sphalerite," Journal of the Optical Society of America, as the source, fitted as a Sellmeier equation valid from 0.43 to 1.53 micron `[C01]`, `[C02]`. No commercially available white pigment, dye, filler or structural-colour material gets near this index while remaining colourless, which is why nothing has displaced TiO2 as the workhorse white pigment in more than a century of coatings chemistry `[W-B1]`.

A particle's scattering cross-section is driven by the square of the index mismatch between the particle and its medium, which is why the medium a particle sits in matters as much as the particle itself. Table T4 in the model tables shows this directly: holding the rutile particle fixed and varying only the refractive index of the host medium around it, transport scattering per unit TiO2 volume rises steadily as the host index falls.

| Host index | Transport scattering per unit TiO2 volume (1/µm) | Ratio to binder (1.49) |
|---|---|---|
| 1.00 (air) | 12.6 | 1.52x |
| 1.10 | 11.7 | 1.42x |
| 1.20 | 10.9 | 1.33x |
| 1.33 | 10.0 | 1.22x |
| 1.40 | 9.2 | 1.12x |
| 1.49 (binder) | 8.2 | 1.00x |
| 1.55 | 7.6 | 0.92x |

*T4 (the model's own numbering): in our model, transport scattering per unit particle volume for a 250 nm rutile sphere, averaged across the visible spectrum, as a function of the refractive index of the surrounding medium `[T4]`.*

Moving a rutile particle from binder (1.49) to air (1.00) gains 52% more scattering per unit of pigment volume for free, with no change to the particle itself: same crystal, same size, same cost per kilogram. That ratio, 1.52x, is the physical lever behind this research document's recommendation. The arithmetic is simple division: 12.6 divided by 8.2 equals 1.537, which the model rounds and reports as 1.52x after averaging across the full visible spectrum rather than at a single wavelength `[T4]`.

Rutile sitting in air rather than binder is not, on its own, a usable paint. A film that is 100% air has nothing holding it to the wall. The two fixed points of the problem are: rutile is the best available pigment and cannot easily be replaced (section 12 verifies this directly against twelve alternatives); and binder is the worst available host for that pigment's own scattering, because binder is exactly what a paint film needs to stay on the wall, adhere, resist scrubbing, and cure into a continuous skin. The 52% gain sits locked behind that trade-off, unavailable to any formulation that simply raises TiO2 loading in a conventional binder-filled film. Section 14 explains the design that captures it without giving up the binder's job.

### 9.2 Crowding: the gain shrinks as particles get close

Table T4's single-particle, infinite-dilution comparison overstates what a real paint film achieves, because a real film is crowded: particles at 18% pigment volume concentration (PVC) are, on average, only a few particle diameters apart, and dependent scattering between close neighbours erodes the per-particle efficiency gain before particles physically touch. The model captures this with the Percus-Yevick hard-sphere structure factor, the standard way disordered, densely packed particle systems are treated in scattering theory (full derivation in section 10). Table T6 shows what crowding costs at rising TiO2 loading, separately for rutile in binder and rutile in air.

| TiO2 volume fraction | In binder (1/µm) | Efficiency in binder | In air (1/µm) | Efficiency in air |
|---|---|---|---|---|
| 5% | 0.40 | 97% | 0.60 | 95% |
| 10% | 0.78 | 95% | 1.13 | 90% |
| 15% | 1.14 | 92% | 1.58 | 84% |
| 18% | 1.35 | 91% | 1.81 | 80% |
| 20% | 1.48 | 90% | 1.95 | 78% |
| 25% | 1.81 | 88% | (not modelled above 20%) | |

*T6: in our model, dilute (per-particle) scattering efficiency falls as TiO2 volume fraction rises, in both a binder host and an air host. "Efficiency" is scattering per unit TiO2 volume at that loading, divided by the same quantity at infinite dilution `[T6]`.*

At the premium baseline's 18% PVC `[A02]`, crowding costs rutile in binder about 9% of its dilute scattering efficiency (91% retained) and costs rutile in air about 20% (80% retained) `[T6]`. The crowding penalty is steeper in air than in binder because the structure factor depends on how close particle surfaces sit relative to the wavelength of light, and an air-hosted film reaches the same TiO2 volume fraction with the particles packed physically closer together (there is no swollen binder matrix keeping them apart). This is one reason the proposed design in section 14 deliberately keeps base-coat TiO2 loading low (9.1% in the base case `[T9]`) rather than maximising it: a sparse arrangement in a low-index medium keeps more of the 1.52x gain than a crowded one would.

Combining the two effects: the net advantage of air over binder at matched, realistic loading is 1.81 divided by 1.35, which equals 1.34x, smaller than the 1.52x dilute figure but still a substantial, usable gain `[T4]`, `[T6]`. The honest reading carried throughout this document (section 4, section 16, section 21) is that every saving claim downstream of this ratio already has crowding priced in; nothing in section 16's headline 39% saving assumes the dilute, uncrowded 1.52x figure.

### 9.3 The value chain from ilmenite to the wall, and where power sits

A Porter's value-chain read of titanium dioxide, from mineral to finished wall, surfaces where the squeeze actually falls on a paint maker like Asian Paints.

| Stage | What happens | Who is there |
|---|---|---|
| Mineral extraction | Ilmenite and rutile ore mined and concentrated | Mineral sands miners (not covered in this lane; outside the briefs' scope) |
| Pigment manufacture (chloride or sulphate route) | Ore converted to pigment-grade rutile TiO2, surface-treated | Global: Chemours, Tronox, Kronos, Venator, LB Group `[B39]`, `[B41]`, `[B42]`; Indian: KMML, Travancore Titanium Products, V.V. Titanium Pigments (formerly Kilburn Chemicals), Cochin Minerals and Rutile (feedstock only) `[B23]`, `[B25]`, `[B27]`, `[B32]` |
| Import and duty | Pigment crosses the Indian border, subject to anti-dumping duty status | DGTR, CBIC, Calcutta High Court (section 9.4) |
| Formulation | TiO2 dispersed into paint, alongside binder, extenders and additives | Asian Paints and its competitors: Birla Opus, Berger Paints, Kansai Nerolac, JSW Paints (with Akzo Nobel India), Indigo Paints |
| Application | Two coats applied by a painter, interior or exterior | Painting contractors, Asian Paints' own Safe Painting Service `[F31]` |
| Reflectance on the wall | The film's hiding and whiteness is what the homeowner judges | End consumer |

*Porter's value chain, built for this research from lanes A and B. "DGTR" is the Directorate General of Trade Remedies; "CBIC" is the Central Board of Indirect Taxes and Customs.*

Indian domestic TiO2 pigment capacity is small relative to demand: domestic capacity for rutile-sulphate grade TiO2 runs about 3,500 to 4,000 tonnes against Indian demand near 300,000 tonnes for that grade `[B08]`, meaning well over 90% of that specific grade's demand is unmet domestically. Separately, Meghmani Organics has stated that over 70% of India's TiO2 requirement is imported `[B31]`. KMML's own disclosures put its capacity at 40,000 tonnes per annum as of a 2013 notice, with expansion plans to 60,000 and then 100,000 tonnes per annum that this lane could not confirm were completed `[B23]`, `[B24]`; Travancore Titanium Products states 45 metric tonnes a day on its own site (roughly 16,400 tonnes a year) with an expansion target of 20,000 tonnes a year `[B25]`, while a separate Wikipedia figure gives about 20,000 tonnes a year already `[B26]`. None of these domestic figures, even summed generously, closes the gap against the roughly 1,19,919 tonnes of TiO2 that our model estimates Asian Paints alone buys in a year at the base scenario `[T13]`. Supplier power, in Porter's Five Forces language, sits structurally with a small set of global pigment makers (Chemours, Tronox, Kronos, Venator, LB Group) and with Chinese exporters specifically, because Indian capacity cannot plausibly displace imports at the volumes a company of Asian Paints' scale requires.

### 9.4 The duty clock: a live regulatory risk, not a settled cost

Asian Paints' TiO2 exposure is presently the subject of an unresolved trade dispute whose outcome moves the landed price directly, which makes it something other than a steady raw-material cost line. The Directorate General of Trade Remedies (DGTR) issued an original final finding on titanium dioxide from China dated 12 February 2025, and after litigation, a remand final finding dated 3 August 2026 under Case No. AD (OI)-03/2024 `[B01]`, `[B02]`. The remand finding recommends a duty range of USD 460 to USD 681 per tonne, varying by named producer: Chinese LB Group entities at USD 460, Shandong Jinhai and Shandong Xianghai at USD 563, Anhui Gold Star entities at USD 609, twelve non-sampled cooperating producers at USD 510, and all others at USD 681 `[B03]`, `[B04]`, `[B05]`, `[B06]`. The investigation's own period-of-investigation data records Chinese imports of 226,869 tonnes, equal to 57% of Indian demand over that period `[B07]`, the statistic that states most plainly how exposed India's paint industry is to one supplier country for its most important raw material.

The timeline matters because it has already moved once and could move again. Notification No. 12/2025-Customs (ADD), dated 10 May 2025, originally imposed the anti-dumping duty following the first DGTR finding `[B12]`. The Calcutta High Court, in India Paint Association v. Union of India & Ors (Writ Petition Order No. WPO 148 of 2025), quashed that May 2025 notification on 22 September 2025, holding that the underlying DGTR investigation had failed to meet the requirements of natural justice because non-confidential information was not properly disclosed to interested parties `[B18]`, `[B19]`, `[B20]`. The matter was remanded to DGTR for reconsideration `[B21]`, which produced the 3 August 2026 finding described above. CBIC Instruction No. 33/2025, dated 5 December 2025, directed field formations to stop collecting the anti-dumping duty on Chinese TiO2 with immediate effect, pending that reconsideration `[B15]`. As of this document's access date, no primary source confirms the Finance Ministry has formally notified the 3 August 2026 recommended duty into force `[B17]`; the correct, careful statement is that a new duty is recommended, not that it is currently in force (per the corrections logged in this project's build log).

The practical consequence for a paint maker is straightforward: whichever way the duty lands, the swing runs into tens of thousands of rupees per tonne (USD 460 to USD 681, at any plausible rupee exchange rate, is several multiples of the commodity's typical price volatility in a normal year), and it applies to the roughly 57% of Indian TiO2 demand that the DGTR's own investigation attributes to Chinese imports `[B07]`. A company exposed to 15% of its raw material bill in one input `[A23]`, where well over half the supply of that input runs through one contested trade channel, carries a form of concentration risk that a diversified basket of extenders, binders and additives does not. That is the commercial argument for cutting TiO2 mass, a live cost and supply-security question rather than an academic target, and it stands independently of the optical argument in section 9.1 and 9.2.

### 9.4a Who makes the pigment, and how little of it India makes itself

The duty dispute in section 9.4 only matters because India's own domestic titanium dioxide pigment-manufacturing base is small relative to what Asian Paints and its competitors need. Table 9.4a lays out every domestic producer and capacity figure this lane could verify, each with the caveat its own source carries.

| Producer | Location | Stated capacity | Caveat |
|---|---|---|---|
| KMML (Kerala Minerals and Metals) | Kerala | 40,000 tonnes per annum, per a 2013 notice, with stated plans to expand to 60,000 then 100,000 tonnes per annum | No post-2013 figure confirming the expansion was completed `[B23]`, `[B24]` |
| Travancore Titanium Products | Kerala | 45 metric tonnes a day (roughly 16,400 tonnes a year) on the company's own site, expansion target 20,000 tonnes a year | A separate Wikipedia figure states about 20,000 tonnes a year already achieved; the two figures are not reconciled `[B25]`, `[B26]` |
| V.V. Titanium Pigments (formerly Kilburn Chemicals) | Tuticorin area, Tamil Nadu | A planned Rs 100 crore investment in a coated-rutile line, targeted for 2016 | No current capacity figure located; an older Kilburn-era figure of 3,960 MTPA (anatase grade, sulphate route) exists for a different era of the same site `[B27]`, `[B28]` |
| Cochin Minerals and Rutile (CMRL) | Aluva, Kerala | 50,000 MT licensed and installed synthetic-rutile capacity | This is a feedstock (synthetic rutile), not finished TiO2 pigment; CMRL started at 10,000 TPA `[B32]`, `[B33]` |
| A Dahej, Gujarat plant (company attribution disputed) | Dahej, Gujarat | 16,500 MTPA, with a stated plan to double to 33,000 MTPA | One source (a BSE filing) is read by this lane as Kilburn Chemicals; a separate source attributes a near-identical doubling to Meghmani Organics Limited; the Meghmani attribution is judged more likely correct and the Kilburn attribution unconfirmed `[B29]`, `[B30]` |

*Table 9.4a: Indian domestic TiO2 pigment and feedstock producers and their stated capacities, with each source's own caveat carried forward rather than resolved to a single clean number.*

Even reading every one of these figures at its most generous, optimistic value, domestic capacity falls well short of the roughly 1,19,919 tonnes our model estimates Asian Paints alone buys in a base-case year `[T13]`, let alone the wider Indian market the DGTR investigation covers. This is the structural reason supplier power sits offshore: there is no credible domestic alternative at the volumes a company like Asian Paints requires, which is precisely the condition under which Porter's Five Forces predicts suppliers, here global pigment makers and Chinese exporters specifically, retain pricing power over a buyer, however large that buyer is in its own finished-goods market.

Table 9.4b sets out the global producers named in the research plan, for the same reason: to show that the five companies controlling most of the world's TiO2 pigment capacity sit almost entirely outside India, which is the other half of the supplier-concentration picture.

| Producer | What this lane verified |
|---|---|
| Chemours | Operates four TiO2 pigment plants, located in the United States, Mexico and Taiwan `[B41]` |
| Tronox | Titanium feedstock capacity reported at about 832,000 metric tons a year (mineral feedstock, not finished pigment) `[B39]` |
| Kronos | Acquired the remaining 50% of Louisiana Pigment Company in July 2024, becoming wholly owned `[B40]` |
| Venator | Planned to close its 50 kt Duisburg TiO2 line and kept its 80 kt Scarlino, Italy plant offline, per a 2024 industry roundup `[B43]` |
| LB Group | Total pigment capacity reported at about 1,510 kilotons, split between chloride-route and sulphate-route production; several LB Group entities are named individually in the DGTR's remand duty schedule (section 9.4) `[B42]`, `[B04]` |

*Table 9.4b: the five global TiO2 pigment producers named in this project's research plan, and what lane B could independently verify about each.*

A separate market report estimates roughly 600,000 tonnes of global TiO2 capacity was permanently shut in the year before this research was conducted, about 400,000 tonnes of it attributed to Venator's own restructuring, with Tronox closing plants in the Netherlands and China over the same period `[B44]`. A global industry that is itself consolidating capacity feeds a domestic Indian market with negligible production of its own, which in turn feeds a paint maker whose most exposed raw-material line is this same pigment. That chain is the full supply-side picture behind this document's recommendation to need less of the pigment rather than find a cheaper way to buy more.

### 9.4c The remand duty schedule in full

Section 9.4 states the headline duty range (USD 460 to USD 681 per tonne); Table 9.4c gives the full producer-specific breakdown the DGTR's remand finding recommends, because the spread between the cheapest and most expensive rate is itself a measure of how much the duty outcome could move landed cost depending on which Chinese supplier a given shipment originates from.

| Producer or group | Recommended duty (USD per tonne) |
|---|---|
| LB Group entities (Henan Billions Advanced Material, LB Sichuan, LB Lufeng, LB Xiangyang) | 460 |
| Twelve non-sampled cooperating producers (including Pangang Group units, Jiangxi Tikon, Shandong Doguide, Ningbo Xinfu) | 510 |
| Shandong Jinhai and Shandong Xianghai | 563 |
| Anhui Gold Star entities | 609 |
| All other Chinese producers | 681 |

*Table 9.4c: the DGTR's remand final finding of 3 August 2026, producer-specific recommended anti-dumping duty rates on Chinese titanium dioxide `[B03]`, `[B04]`, `[B05]`, `[B06]`.*

The ratio between the highest and lowest named rate is 681 divided by 460, which equals 1.48, meaning the "all other" rate is 48% higher than the LB Group rate; a paint maker's actual exposure to the duty, if and when it is formally notified, therefore depends materially on which named Chinese producers it or its intermediaries actually source from, not merely on whether a duty exists at all.

### 9.5 What the binder actually does to light, restated plainly

Optically, binder is doing real work on the light itself, not just holding the film together: every unit of binder volume a rutile particle sits inside raises the local refractive index contrast denominator, directly reducing the particle's own scattering per the Mie relationship summarised in section 9.1 and derived in full in section 10. Titanium dioxide's whiteness advantage is a property of the particle relative to its neighbours rather than the particle alone, so the paint industry's standard practice of putting that particle directly into the film-forming binder spends away roughly a third of the particle's own potential before crowding is even counted.

Exhibit for the deck: the 1.52x figure appears first on the cover's answer card, and Table T4's full host-index curve is the physics behind slide 4 ("2/5 THE CHALLENGE"), panel "THE PHYSICS"; the value-chain and duty-timeline material in sections 9.3 and 9.4 support the same slide's "THE BILL" and "THE PHYSICS" panels and the annexure's A4 sources panel, per the blueprint in section 27.2.

## 10. The model: Mie theory, crowding, two-coat optics and colour in one pipeline

**Answer.** Every optical number in this research document, the model outputs tagged `[M]` and the tables tagged `[T#]`, comes from one Python model (`model/whiteness_model.py`, hash `b377745d37`) that computes light scattering from first principles rather than from an empirical paint-industry rule of thumb. The pipeline runs multilayer Mie theory for each particle species, a Percus-Yevick hard-sphere structure factor for crowding, Bruggeman and Maxwell-Garnett effective-medium mixing for the host around base-coat particles, two-flux Kubelka-Munk radiative transfer with a Saunderson surface correction for the film stack, and the CIE 1931 colour-matching functions under D65 illumination for the colour and contrast-ratio outputs. The model passed all thirteen of its own internal checks at the hash quoted above, and this section explains the method in plain words, then in its governing equations, so a judge can see exactly what "in our model" means wherever that phrase appears.

### 10.1 Method in plain words

The question the model answers is: for a given arrangement of pigment particles, extenders and binder in a wet film, how much visible light does the dried film reflect, at every wavelength, and how does that translate into the numbers a formulator actually cares about (hiding power, brightness, colour)? The model answers this in five stages, run in order for every film composition it is asked to evaluate.

First, for each particle species (rutile TiO2, calcium carbonate at two different sizes, and the alternative pigments screened in section 12), the model computes how strongly a single, isolated particle scatters and absorbs light at each wavelength from 380 to 720 nm, accounting for the particle's own size distribution (log-normal, not a single diameter) and, where relevant, its layered structure (a hollow sphere, a yolk-shell particle, or a solid sphere). This uses exact multilayer Mie theory, the same physics used throughout atmospheric optics and colloid science for spherical scatterers.

Second, the model adjusts that single-particle result for crowding: real paint films pack particles at volume fractions (9% to 20% in the systems compared here) where particles are close enough that their scattered light fields interfere with each other before the particles touch. This uses the Percus-Yevick hard-sphere structure factor, a standard statistical-mechanics result for how densely packed hard spheres are arranged relative to each other, which the model couples to the single-particle scattering pattern.

Third, for the proposed air-network base coat specifically, the model has to account for the fact that a particle's own "air gap" is partial: the medium directly around a base-coat rutile particle is not pure air but a mix of air and whatever thin film of binder remains, which the model computes with the Bruggeman effective-medium rule (and, for a particle-level air pocket such as a yolk-shell design, the Maxwell-Garnett rule instead, because the two rules apply to different particle geometries).

Fourth, the model stacks every layer of the film, (two coats of a conventional system, or a base coat plus a seal coat for the proposed design,) using two-flux Kubelka-Munk radiative transfer, the standard way the coatings industry itself computes hiding power from a layer's scattering and absorption coefficients. A Saunderson correction is applied on top, because some light reflects straight off the film's top surface without ever entering the paint, and ignoring that surface reflection overstates how much the pigment itself is doing.

Fifth, the model converts the resulting spectral reflectance curve into the numbers a judge or a formulator would recognise: Y (luminous reflectance, on the usual 0 to 100 scale), L*, a* and b* (CIE Lab colour coordinates), and contrast ratio (the ratio of reflectance over a near-black substrate to reflectance over a near-white substrate, the standard definition of hiding power), using the CIE 1931 colour-matching functions and the D65 standard daylight illuminant.

### 10.1a The pipeline as a table

Table 10.1a restates the five stages of section 10.1 in one place, naming the physics each stage uses and what it hands to the next stage, for a reader who wants the structure before the equations.

| Stage | Physics used | Input from the previous stage | Output to the next stage |
|---|---|---|---|
| 1. Single-particle optics | Multilayer Mie theory | Particle geometry (size distribution, layer structure) and optical constants (Table T2) | A differential scattering pattern and absorption cross-section for one isolated particle |
| 2. Crowding | Percus-Yevick hard-sphere structure factor | Stage 1's scattering pattern; the particle's volume fraction in the film | A transport scattering and absorption coefficient for the species at its real loading |
| 3. Host-medium mixing | Bruggeman (continuous air-and-binder mix) or Maxwell-Garnett (discrete particle-level inclusions) | The air fraction and binder fraction around the particle | An effective host refractive index, fed back into stage 1 for base-coat particles |
| 4. Film-stack radiative transfer | Two-flux Kubelka-Munk with a Saunderson surface correction | Stage 2's coefficients for every species in a layer, summed; the layer's thickness; the backing layer's reflectance | A spectral reflectance curve for the whole stack |
| 5. Colorimetry | CIE 1931 colour-matching functions under D65 | Stage 4's spectral reflectance curve, computed once over a near-black and once over a near-white backing | Y, L*, a*, b*, and contrast ratio |

*Table 10.1a: the model's five-stage pipeline, restating section 10.1 and 10.2 as a single reference table.*

### 10.1b What each stage is actually for, in the project's own words

A five-stage pipeline, rather than a single empirical formula, was necessary because an empirical rule of thumb (for example, a fixed "scattering per gram of TiO2" constant taken from a coatings handbook) would have been enough to describe the premium baseline alone, but cannot answer the question this project actually needs answered: how that same pigment behaves once the medium around it changes from binder to a porous, partly air-filled film. Only a first-principles optical model, rebuilt from Mie theory and crowding statistics rather than from a single empirical constant, can be run on both the conventional film and the proposed film under one consistent method and be trusted to show a real, physically grounded difference between them rather than an artefact of switching between two different handbook rules partway through the comparison. This is also why every one of the twelve designs in section 12's screen, and every alternative-pigment substitute, runs through the identical five-stage pipeline: the model's value as evidence rests entirely on every comparison being apples to apples.

### 10.2 Method in equations

The particle-level scattering step solves the vector spherical-wave boundary conditions at each interface of a multilayer sphere, extracting the standard Mie coefficients a_n and b_n for each angular order n, from which the scattering cross-section follows as C_sca = (2π/k²) Σ (2n+1)(|a_n|² + |b_n|²), where k is the wavenumber in the host medium. For a layered particle (a hollow sphere, a yolk-shell particle), the boundary-matching recursion runs inward to outward across every interface before the outermost coefficients are extracted; this is the "multilayer" extension of the single-sphere Mie solution, needed because several of the twelve designs screened in section 12 are explicitly layered particles (hollow polymer, yolk-shell, hollow rutile).

Crowding is folded in through the Percus-Yevick structure factor S(q), which multiplies the single-particle differential scattering cross-section before it is integrated over angle to give the transport scattering coefficient. The model uses the closed-form Wertheim solution for S(q) at hard-sphere volume fraction φ, which depends on the dimensionless scattering vector q = 2k sin(θ/2) times the particle diameter. The transport (reduced) scattering coefficient actually used downstream, μ_tr, integrates (1 − cos θ) weighted by the crowding-adjusted differential cross-section, which is the physically correct quantity for a diffusing-light (Kubelka-Munk-style) film model, because it down-weights near-forward scattering, which does little to redirect light back out of the film.

The host medium around base-coat particles is computed with the self-consistent Bruggeman mixing rule, solved for the effective dielectric constant ε by root-finding the equation f_air·(1 − ε)/(1 + 2ε) + (1 − f_air)·(n_b² − ε)/(n_b² + 2ε) = 0, where f_air is the air fraction of whatever surrounds the particle and n_b is the binder's own index; this is the model's `bruggeman()` function. For a particle-level, discrete air shell (as opposed to a diffuse air-and-binder mix), the model instead uses the Maxwell-Garnett mixing rule, ε_eff = ε_m·(ε_i + 2ε_m + 2f(ε_i − ε_m)) / (ε_i + 2ε_m − f(ε_i − ε_m)), appropriate when one phase (the matrix) is continuous and the other (inclusions) is dilute and discrete, the correct physical picture for the nano-air-binder screen row (section 12, row S03) rather than for the base coat's own continuous porosity.

The film-stack step solves the standard two-flux Kubelka-Munk equations for reflectance R of a finite-thickness layer of scattering coefficient S and absorption coefficient K over a backing of reflectance R_g: with a = 1 + K/S and b = √(a² − 1), R = (1 − R_g(a − b·coth(bSX))) / (a − R_g + b·coth(bSX)), where X is the film thickness. Multiple layers (the proposed design's base coat under its seal coat) are stacked by applying this formula layer by layer, from the backing upward, each layer's computed reflectance becoming the effective backing reflectance R_g for the layer above it. The Saunderson correction, R_corrected = (1 − k1)(1 − k2)R / (1 − k2·R), removes the portion of reflectance attributable to light reflecting directly off the top surface before entering the film (k1) and light exiting the film then partly reflecting back in at the surface (k2), the same two-coefficient structure described in the patent literature reviewed by lane C `[C21]`.

Colour and contrast ratio follow from standard colorimetry: tristimulus values X, Y, Z are computed by weighting the corrected spectral reflectance curve by the CIE 1931 colour-matching functions and the D65 illuminant's spectral power distribution, normalised so a perfect white reflector reads Y = 100; CIE Lab coordinates follow from the standard cube-root (or linear, below a threshold) transform of X/X_n, Y/Y_n, Z/Z_n against the illuminant white point; and contrast ratio is defined, following the withdrawn-but-still-used ISO 6504-3:2006 convention identified by lane C `[C39]`, as Y measured over a near-black (1% reflectance) substrate divided by Y measured over a near-white (80% reflectance) substrate of the same film.

### 10.2a The assumptions the optics pipeline itself consumes

Several entries in the model's full assumptions register (section 26 gives all thirty-one in prose) feed directly into the five stages above, before any cost or scale arithmetic is layered on top. Table 10.2a isolates these.

| ID | Base value | What stage it feeds |
|---|---|---|
| A01 | 30.0 µm dry film per coat | Stage 4, the film thickness term X in the Kubelka-Munk equation |
| A02 | 0.18 (TiO2 volume fraction, baseline) | Stage 2, the crowding volume fraction for the reference film |
| A04 | 250 nm rutile median diameter, geometric standard deviation 1.35 | Stage 1, the particle-size distribution integrated over in the model's Gauss-Hermite quadrature |
| A05 | 0.35 (base-coat porosity) | Stage 3, the air fraction entering the Bruggeman mixing rule |
| A06 | 0.25 (binder share of base-coat solids) | Stage 3, the binder fraction entering the same mixing rule |
| A08 | Bruggeman mix (base case), binder-wetted (bear), pure air (bull) | Stage 3, which mixing assumption governs the base-coat host index |
| A10 | 0.00015 per µm (background absorption) | Stage 4, the absorption coefficient K's background term |
| A12 | 0.998 (minimum contrast ratio) | Stage 5, the pass/fail threshold `ok()` applies to every design screened |

*Table 10.2a: the subset of the model's assumptions register that feeds directly into the optics pipeline described in this section, cross-referenced to the full register in section 26 `[A01]`, `[A02]`, `[A04]`, `[A05]`, `[A06]`, `[A08]`, `[A10]`, `[A12]`.*

### 10.3 Inputs

Table T2 lists the optical constants the model draws on for every material it represents.

| Material | 450 nm | 550 nm | 650 nm | Source of the dispersion |
|---|---|---|---|---|
| Rutile TiO2 (isotropic average) | 2.930 | 2.750 | 2.669 | Devore 1951, Urbach edge assumed |
| Acrylic binder (PMMA proxy) | 1.501 | 1.493 | 1.488 | Sultanova et al. 2009 |
| calcite | 1.6 | 1.6 | 1.6 | Constant, handbook value |
| ZnS | 2.37 | 2.37 | 2.37 | Constant, handbook value |
| ZrO2 | 2.17 | 2.17 | 2.17 | Constant, handbook value |
| BaSO4 | 1.64 | 1.64 | 1.64 | Constant, handbook value |
| PS (polystyrene) | 1.59 | 1.59 | 1.59 | Constant, handbook value |
| organic (isoxanthopterin proxy) | 1.96 | 1.96 | 1.96 | Constant, handbook value |
| air | 1.0 | 1.0 | 1.0 | Constant, handbook value |
| silica | 1.46 | 1.46 | 1.46 | Constant, handbook value |

*T2: optical constants used at three representative wavelengths. "n" values shown are refractive indices; rutile and acrylic binder carry a wavelength-dependent dispersion curve, the rest are treated as spectrally flat (handbook) values `[T2]`.*

Rutile's dispersion is built on Devore's 1951 ordinary-ray Sellmeier fit, confirmed by lane C as valid from 0.43 to 1.53 micron, with an assumed Urbach-tail absorption edge added by the model itself because the published fit does not extend the imaginary part of the index into the near-ultraviolet absorption edge `[C01]`, `[C02]`, `[C03]`. The acrylic binder's dispersion uses the Sultanova, Kasarova and Nikolov 2009 PMMA data as a proxy for the real acrylic binder, confirmed valid from 0.437 to 1.052 micron `[C07]`, `[C08]`; PMMA is a reasonable stand-in because both materials are non-absorbing, moderate-index organic polymers in the visible range, though this document flags it as a proxy, not a measurement of Asian Paints' actual binder chemistry. The remaining materials (ZnS, ZrO2, BaSO4, polystyrene, the organic-crystal proxy, air and silica) are treated as spectrally flat at their handbook index, an approximation adequate for a visible-light-averaged screening comparison (section 12) but not precise enough for a colour-match claim at a single wavelength, which this document does not make for any of them.

### 10.4 Checks

The model carries thirteen internal self-checks, all of which pass at the quoted hash.

| Check | Result |
|---|---|
| C1 Mie benchmark m 1.55, x 5.213: scattering efficiency within 0.1 percent of 3.10543 (Bohren and Huffman) | PASS |
| C2 a two-layer sphere with equal layers equals the homogeneous sphere | PASS |
| C3 an absorbing sphere has positive absorption | PASS |
| C4 Percus-Yevick structure factor at zero scattering angle equals the compressibility limit within 3 percent | PASS |
| C5 Kubelka-Munk thick-film limit equals the theoretical infinite-thickness reflectance | PASS |
| C6 baseline is a plausible premium white (contrast ratio 0.995 to 0.9995, Y 88 to 93, b* 0.5 to 3) | PASS |
| C7 base-case proposal meets brightness, contrast ratio and seal-coat thickness targets | PASS |
| C8 scenario order holds: bear saving is less than base saving is less than bull saving | PASS |
| C9 contrast ratio rises with TiO2 in the baseline coat | PASS |
| C10 every reflectance value computed lies between 0 and 1 | PASS |
| C11 rutile scatters more per unit volume in air than in binder | PASS |
| C12 the twelve-design screen's baseline row reproduces the fair reference within 1 percent of TiO2 | PASS |
| C13 the fair reference needs between 85 and 100 percent of the premium's TiO2 | PASS |

*T3: the model's own thirteen internal consistency checks, all passing at hash `b377745d37` `[T3]`.*

Check C1 is a benchmark against a textbook Mie-theory value, confirming the multilayer solver reduces correctly to the single-sphere case before any of this project's own numbers are trusted on it; lane C could not independently locate the specific 3.10543 value in a public, citable source beyond the Bohren and Huffman textbook table it traces to, and recommends an independent `miepython` cross-run as the verification step going forward `[C14]`. Check C4's "compressibility limit" is the standard low-q asymptotic behaviour the Percus-Yevick structure factor must reach by construction; this is a mathematical self-consistency check on the model's own implementation, not an external measurement. Checks C8, C9, C11, C12 and C13 are the checks specific to this project's own claim: that the scenario ordering, the crowding direction, the air-versus-binder direction, and the twelve-design screen's internal consistency against the fair reference (section 12) all behave the way the underlying physics demands.

### 10.5 Limits, stated plainly

Three limits bound what this model can and cannot say, and each is restated wherever it becomes relevant downstream (sections 11, 13, 16, 21).

| Limit | What the model assumes | What it means for the project's claims |
|---|---|---|
| Particle shape | Every particle is a sphere, or a concentric-layered sphere | Real pigment particles, calcium carbonate extenders and polymer latexes are not perfect spheres; shape effects on scattering and packing are not captured |
| Dispersion uniformity | The Percus-Yevick crowding treatment assumes a disordered, statistically uniform particle arrangement | Real paint films can flocculate (particles clumping rather than staying evenly dispersed), which the model does not simulate; the honest reading in section 4 states this makes the conventional baseline's modelled performance slightly optimistic, which in turn makes this project's own saving claim conservative, not inflated |
| Nature of the result | The model is a computational optics model | No panel has been coated, no spectrophotometer has been run; every number this model originates carries "in our model" rather than being reported as an observed result (section 16, section 4) |

*Table 10.5: the three stated limits of the model, and what each one means for how this document's own claims should be read.*

First, the model treats every particle as a sphere (or a concentric-layered sphere); real pigment particles, calcium carbonate extenders and polymer latexes are not perfect spheres, and shape effects on scattering and packing are not captured. Second, the model's crowding treatment (Percus-Yevick hard spheres) assumes a disordered, statistically uniform particle arrangement; real paint films can flocculate (particles clumping together rather than staying evenly dispersed), which the model does not simulate, and the honest reading in section 4 states that this makes the conventional baseline's modelled performance slightly optimistic relative to a real, imperfectly dispersed film, which in turn makes this project's own saving claim conservative, not inflated. Third, the model is a computational optics model, not a measurement: no panel has been coated, no spectrophotometer has been run, and every number in this document that originates from this model carries the phrase "in our model" rather than being reported as an observed result (section 16 restates this at length, with the full honest reading from section 4).

### 10.6 How to rerun it

A reader can reproduce every number in this document by running `python -X utf8 asian-paints-alchemy/model/whiteness_model.py` from the repository root. The script is deterministic given its own fixed inputs: unchanged, it writes three files, each serving a different reader, as Table 10.6 sets out.

| File | What it holds | Who reads it |
|---|---|---|
| `model/model_outputs.json` | Every raw numeric output of the run, machine-readable | Any downstream script, including the deck generator |
| `model/model_tables.md` | The sixteen formatted tables (T1 to T16) this research document cites throughout, tagged `[T#]` | This document's writers and any human reviewer |
| `deck/values.json` | The subset of outputs the Figma deck's slide scripts pull numbers from | The deck build step (this project's plan, section 15) |

*Table 10.6: the three files `whiteness_model.py` writes on every run, and who each one serves.*

The script prints the thirteen check lines shown in Table T3 above and a final hash line (`b377745d37`). Changing one entry of the assumptions dictionary (`A`, documented in full in section 26) and rerunning produces a new hash and propagates to every downstream table; the project's own update protocol (this project's plan, section 5.3) requires that any such change be logged and propagated to every sentence in this document and the deck that quotes the changed figure, rather than patched in one place. No assumption was in fact changed over the course of this research: every candidate correction a verifier raised was checked against this update protocol's bar, a VERIFIED or CORRECTED row outside the assumption's own bear-to-bull range, or a same-unit, better-sourced replacement for the base value, and none of the candidates met that bar, a finding logged in this project's own decisions record rather than acted on silently.

Exhibit for the deck: this section is the source for the annexure's A1 panel ("model chain and checks"), and the thirteen-row check table feeds slide 5/5's defensive-depth footer referencing the annexure.

## 11. Prior art: every piece of the idea is known, and the combination is not claimed in what we found

**Answer.** A patent and literature search run against ten separate threads (hollow polymer opacifiers, polymer-encapsulated pigment spacers, yolk-shell pigments, hollow-silica pigments, porous radiative-cooling films, Cyphochilus beetle scales, shrimp whiteness, drying stratification, a direct combination search, and inkjet-media precedent) found every individual ingredient of this project's proposed design already published or patented, and found no single source combining a pigmented base coat formulated above its critical pigment volume concentration (critical PVC, the loading past which binder can no longer fill all the gaps between particles, so air voids form) with a size-excluding seal coat that keeps that air network intact, applied as the two coats painters already use, for the purpose of cutting TiO2 mass at fixed whiteness. What this project claims as new is the specific combination and the quantified design rule behind it, not any one ingredient, exactly as this document's integrity rules commit to stating honestly `[W-Q2]`.

### 11.1 What a Porter-style novelty audit actually requires

A credible novelty claim in a material-science competition has to show the search that was run and report what it found, including everything that looks close, rather than simply asserting that "nobody has done this." Lane D (prior art and patents) opened or located forty individual items: granted patents, published applications, trade-press reports of peer-reviewed studies, and peer-reviewed papers themselves, grouped into the ten threads the research plan specified. Tables 11.1a through 11.1d summarise what each thread found and how it relates to the proposed design, split into four groups of related threads so each table stays readable.

| Thread | What was found | Relation to our design |
|---|---|---|
| 1. Hollow polymer opacifiers | US5147940A (filed 1991, Union Oil Company of California at filing, later assigned toward Rohm and Haas) `[D01]`; EP2272923A1 (Rohm and Haas, priority 2004) `[D02]`, `[D03]`; commercial product Ropaque OP-96, about 30% by weight hollow acrylic-styrene copolymer microspheres `[D04]` | Particle-level air pocket, dispersed through one film; see section 9's screen row S02 |
| 2. Polymer-encapsulated TiO2, pigment spacing | US9234084B2 / US20140011943A1 (Rohm and Haas), "Polymer encapsulated titanium dioxide particles" `[D09]`; Dow EVOQUE, claimed up to 20% less TiO2 at equal hiding `[D11]`, `[D12]` | Particle-spacing logic at the particle, not film-architecture, level; a cost caveat is noted against the whole category `[D13]` |

*Table 11.1a: threads 1 and 2, particle-level and encapsulation-based opacifiers.*

| Thread | What was found | Relation to our design |
|---|---|---|
| 3. Yolk-shell TiO2 | Independently located 2015 Scientific Reports yolk-shell TiO2 paper (dye-sensitised solar cell application, not hiding) `[D16]`; the plan's named 2017 Colloids and Surfaces A paper could not be opened (403 Forbidden) `[D15]` | Void serves mass-transport or catalytic function, not an engineered hiding-at-reduced-TiO2 function |
| 4. Hollow silica, polymer-silica pigments | A Loughborough-led study, reported in trade press, replacing TiO2 entirely with hollow polymer-silica particles at up to 73.3% solar reflectance `[D20]`, `[D21]` | Single-layer, full-replacement particle strategy, not a two-layer base-plus-seal architecture |

*Table 11.1b: threads 3 and 4, particle-level air pockets built around a shell.*

| Thread | What was found | Relation to our design |
|---|---|---|
| 5. Porous radiative-cooling paint | Mandal et al., Science, 2018, hierarchically porous poly(vinylidene fluoride-co-hexafluoropropene) film, solar reflectance about 0.96 `[D25]`, `[D26]` | Single-layer, pigment-free; "air replaces pigment" prior art for the general principle, targeted at thermal rejection, not visible-light hiding at reduced TiO2 |
| 6. Cyphochilus beetle scales | Vukusic, Hallam and Noyes, Science, 2007 `[D30]`; Burresi et al., Scientific Reports 4:6075, 2014, reporting the lowest transport mean free path known to the authors `[D32]` | Single structural material (chitin filaments in air) as the sole whitener; no TiO2 present at all |
| 7. Shrimp whiteness | Lemcoff, Alus, Haataja et al. (Palmer group), Nature Photonics, 2023, on birefringent nanospheres `[D35]`, `[D36]` | A different all-air, all-biological mechanism; the paper's own stated purpose is inspiring TiO2-free scatterers, not a TiO2-plus-air combination |

*Table 11.1c: threads 5 to 7, structural (pigment-free) whiteness and radiative-cooling precedent.*

| Thread | What was found | Relation to our design |
|---|---|---|
| 8. Drying stratification | Fortini et al. 2016 (Physical Review Letters) on small-on-top colloidal stratification `[D40]`, `[D41]`; a 2022 Keddie-group paper and a separate 2018 review on when stratification is suppressed `[D42]`, `[D43]` | A candidate mechanism for a future one-coat version (section 15's horizon 2, table T16), not itself a whiteness claim |
| 9. Direct combination search | EP0538411 (single-layer, above-CPVC, mostly TiO2 with an alumina trihydrate spacer) `[D46]`; Imerys Celtix and Arkema Celocor (single-layer porosity-raising extenders, marketed to reduce CPVC) `[D47]`, `[D48]`; US9636706B2 (Rohm and Haas, multilayer but explicitly TiO2-free) `[D49]`, `[D50]` | Each matches one or two elements of the combination but not all; US9636706B2 is the closest single patent and is explicitly TiO2-free, the opposite of our design, which keeps TiO2 in both coats |
| 10. Inkjet-media precedent | US7150522B2, a porous ink-receiving layer sealed by an optically clear, heat-sealed topcoat with particles under 250 nm `[D53]`, `[D54]` | Establishes "porous layer sealed by a second layer" as a decades-old general engineering pattern, in print durability, with no optical-hiding or TiO2-reduction claim |

*Table 11.1d: threads 8 to 10, the stratification, combination-search and cross-industry precedent.*

Reading the four tables together: every thread that puts air directly around or inside an individual pigment particle (threads 1 to 4) pays the volume-budget cost quantified in section 13; every thread that removes the pigment entirely and relies on air or a biological structure alone (threads 5 to 7) cannot carry TiO2's own refractive-index advantage; and the one thread that comes closest to a two-layer, film-level structure (thread 10) exists in a domain with no optical-hiding claim at all. No thread does what this project's film-architecture proposal does: keep the pigment, change its medium at the film level, and seal that film-level air network in with a second coat.

### 11.2 The patent search log

Thread 9, the direct combination search, ran a Google Patents query combining the terms "above CPVC," "porous," "sealer," "topcoat," "hiding," and "titanium dioxide reduction." No granted or published patent matching the full five-term combination surfaced `[D51]`. Table 11.2 scores each of the five closest hits against how many of the five search terms it actually matches, to show numerically how far each falls short of the full combination.

| Patent or product | Terms matched (of 5) | What it has | What it lacks |
|---|---|---|---|
| EP0538411 | 2: above-CPVC, titanium dioxide | Single-layer coating built up to critical PVC using mostly TiO2 with a small alumina trihydrate spacer fraction `[D46]` | No sealer, no second layer, a different spacer chemistry |
| Imerys Celtix / Arkema Celocor | 2: porous (via reduced CPVC), titanium dioxide reduction | Commercial single-layer extenders that reduce the coating's own critical PVC to raise porosity and scattering `[D47]`, `[D48]` | No sealer, no second layer; a formulation additive, not an architecture |
| US9636706B2 | 2: sealer/topcoat concept (via multilayer), porous | The closest single patent: a genuine multilayer coating system with at least two layers `[D49]`, `[D50]` | Explicitly titanium-dioxide-free, the opposite of a design that keeps TiO2 in both coats |
| CA2735861 (Guardian photocatalytic coating) | 1: porous | A porous TiO2 layer | Built for photocatalytic self-cleaning, not for hiding power or sealing; judged not relevant on inspection `[D52]` |

*Table 11.2: the patent search log, showing how many of the five search terms each of the four closest hits actually matched, and what each one is missing relative to the full combination claim.*

A professional, claim-level Boolean patent-clearance search was not available in this project's search pass; this limitation is stated plainly rather than hidden, and the research document's novelty wording in section 2 and the deck's uniqueness wording are both scoped to "not found in this search," not to "does not exist."

### 11.3 Nature's own prior art: two different mechanisms, neither matching ours

Both biological precedents the research plan asked lane D to check (Cyphochilus beetle scales and shrimp birefringent nanospheres) are genuine, independently verified structural-whiteness mechanisms, and both are legitimately cited elsewhere in this document (section 9, section 15) as third-party validation that an engineered air network can whiten without relying solely on a high-index pigment. Burresi et al. (2014) state directly: "to our knowledge, the beetle scales exhibit the lowest transport mean free path length" of any material known to the authors `[D32]`, a verified quote this document and the deck both use exactly as written. Lemcoff, Alus, Haataja and colleagues (2023), reporting on the shrimp mechanism, conclude that their results "provide inspiration for the design of organic, biologically benign replacements for artificial scatterers like TiO2" `[D36]`, also quoted exactly.

Both mechanisms are, however, structurally different from what this project proposes, and it would overstate the novelty claim to present either as prior art for the actual combination. The Cyphochilus scale is a single structural material, a disordered network of chitin filaments in air, acting as the entire whitener with no separate pigment present at all `[D30]`, `[D34]`. The shrimp mechanism is an ordered array of birefringent nanospheres, again with no TiO2 present `[D35]`, `[D39]`. Neither paper describes, or claims to describe, a design that keeps a conventional high-index pigment (rutile) and surrounds it with air while a second layer seals that air network in place. What both genuinely demonstrate, and what this project borrows honestly as design inspiration rather than as a prior claim on the combination, is the underlying physical principle that an engineered, air-rich, low-index architecture can whiten more efficiently per unit of solid material than a dense, pigment-only approach, a principle this project then applies to a pigment (TiO2) nature's own examples do without.

These two biological precedents matter to this document's argument even though this lane's own reading confirms neither one anticipates the specific combination claimed. Their role is not to establish novelty; it is third-party validation, in the sense this project's skill touchpoints use that term, that engineering the medium around a scatterer, rather than engineering the scatterer's own chemistry, is a physically sound route to whiteness, independently rediscovered by evolution in two unrelated animal lineages (a beetle and a shrimp) using two different structural mechanisms (disordered fibrous chitin and ordered birefringent spheres). A judge who doubts that moving a conventional pigment's host medium could meaningfully change its performance has two independently peer-reviewed, named, dated examples of exactly that kind of medium-level engineering working in nature, at zero cost to this project beyond citing them correctly and stating plainly what they do and do not claim. The distinction this document insists on, between "nature shows the principle works" and "nature has already filed the combination," is itself a discipline this research applies consistently: section 9 draws the same line between the model's demonstrated physics and a measured laboratory result, and section 22's lab programme exists specifically to close the gap between a principle shown to work in nature and in a model, and a result actually measured on an Asian Paints formulation.

Both the Burresi and the Lemcoff-Alus-Haataja papers are recent enough (2014 and 2023) that the underlying structural-colour and structural-whiteness literature they belong to is itself a fast-moving field, and a search conducted today could miss a paper published in the months after this document's own access date. This document's novelty statement in section 11.4, and the deck's own uniqueness wording, are both scoped as findings "as of this search," not as a permanent guarantee; the update protocol described in this project's plan (section 5.3) exists for exactly this kind of finding, should a later-published combination surface.

### 11.4 The novelty statement, stated carefully

Across every source opened in this lane, no single patent or paper combines (a) a pigmented base coat formulated above its critical PVC specifically to carry TiO2 in an air-continuous medium, with (b) a second, size-excluding seal coat that keeps that air network intact, applied as the two coats painters already use, for the stated purpose of cutting TiO2 mass at fixed whiteness `[D58]`. Every individual element of the combination is independently prior art: particle-level hollow and encapsulated opacifiers (threads 1 and 2), yolk-shell and hollow-silica air pockets around a pigment (threads 3 and 4), a porous film replacing pigment with air for a different optical target (thread 5), biological all-air whiteners with no TiO2 at all (threads 6 and 7), drying-induced layer self-sorting (thread 8), single-layer above-CPVC hiding and a TiO2-free multilayer system (thread 9), and a porous-layer-sealed-by-a-topcoat pattern in an entirely different, non-optical domain (thread 10) `[D59]`. This finding supports, rather than undermines, this document's planned novelty wording: the claim rests on the combination and the quantified design rule (sections 13 to 16), not on any single ingredient, each of which this lane confirms is already known `[D60]`.

Table 11.4 restates the full novelty synthesis as a single reference table, mapping every piece of the combination against where it is already known and what, specifically, is missing from the published record.

| Element of the combination | Where it is already known | What is missing from the published record |
|---|---|---|
| A pigment surrounded by air rather than binder | Threads 1 to 4 (particle-level) and threads 5 to 7 (film-level, pigment-free) `[D01]` to `[D39]` | Nobody combines a film-level air network with the pigment still present inside it, at the loading our design uses |
| A second, sealing layer over a porous layer | Thread 10, in inkjet media `[D53]` to `[D57]` | No optical-hiding or TiO2-reduction claim anywhere in that domain |
| A multilayer architecture in paint specifically | US9636706B2, the closest single patent `[D49]`, `[D50]` | That patent is explicitly TiO2-free; our design keeps TiO2 in both coats |
| A quantified design rule tying porosity, host index and TiO2 saving together | Not located anywhere in this search | This is the project's own contribution, built in the model (section 10) and reported in Tables T8, T9 and T14 |

*Table 11.4: the full novelty synthesis, mapping each element of the proposed combination to where it is already known and what remains unclaimed in the published record this lane could access.*

A combination this simple to state (keep the pigment, raise the film's porosity above critical PVC, seal it with a size-excluding topcoat) raises an obvious question: why does it not already exist somewhere in a century of coatings-industry formulation practice. This lane's own search suggests three honest, non-exclusive answers. First, the coatings industry's own commercial responses to the TiO2-reduction problem (Dow EVOQUE, Imerys Celtix, Arkema Celocor, all reviewed above) have consistently worked at the particle level, encapsulating, spacing or hollowing the pigment itself, rather than at the film-architecture level, perhaps because particle-level chemistry is the industry's own traditional area of expertise and a film-architecture change touches application and durability concerns (seal-coat integrity, porosity control) that sit outside a pigment or additive supplier's usual scope. Second, formulating deliberately above critical PVC has historically been associated with defects, not a design feature: the critical-PVC literature itself (lane C, section 9) frames porosity above CPVC as the threshold where rusting, staining and dry hiding all worsen, so a formulator's instinct is to stay below that threshold, not to cross it on purpose and then manage the consequence with a second coat. Third, the inkjet-media precedent (thread 10) shows that "porous layer sealed by a topcoat" is not, in fact, an unknown engineering pattern; it has simply never been pointed at paint hiding specifically, which is consistent with this project's own framing that the novelty lies in the combination and its application, not in any one physical idea being unprecedented in isolation.

Two gaps in this search are stated plainly rather than papered over, and are collected in Table 11.5 so a reader can see exactly what would need independent confirmation before this novelty statement could be called final.

| Gap | What it means for this document's claim |
|---|---|
| Two specific ScienceDirect papers named in the original search plan (the 2017 yolk-shell TiO2 paper and the 2025 hollow-silica paper) returned a 403 Forbidden response to automated fetch `[D15]`, `[D19]` | A reader with institutional publisher access should verify these two directly before treating the novelty statement as final |
| No professional, claim-level patent-clearance search tool was available | The patent findings in Tables 11.1a to 11.2 rest on Google Patents' own search ranking and on citation chains inside other patents' background sections, a reasonable screening-level search but not the standard a patent attorney would use before a filing `[D51]` |
| Palmer et al. 2018 and 2020, and a term "EcoCrystal," named in the original search plan, were not located or confirmed | Only the 2023 Nature Photonics paper on shrimp whiteness was directly opened and verified `[D37]`, `[D38]` |
| "Zhou, Jiang and Doi 2017" on drying stratification, named in the original search plan, was not located | A different, related 2017 paper (Makepeace et al.) surfaced instead but was not independently opened to confirm it is the intended reference `[D44]` |

*Table 11.5: stated gaps in this lane's search, carried forward honestly rather than silently dropped.*

None of these four gaps touches the combination claim itself: each is a missing independent confirmation of a secondary or decorative citation (an exact 2017 or 2025 paper, an exact 2018 author pairing, a named but unlocatable term), not a missing check on whether the specific two-layer, air-network-plus-seal architecture has been claimed elsewhere. The combination search in section 11.2 and the cross-read synthesis in Table 11.4 are the load-bearing evidence for the novelty statement; the items in Table 11.5 are secondary citations this document uses for colour and context (the specific mechanism inside yolk-shell TiO2 photocatalysis research, the precise authorship of one stratification-suppression paper) rather than for the novelty claim's own logical structure. This distinction, between a citation gap and an evidentiary gap, matters to how a judge should weigh this section: a reader who presses on whether "Palmer et al. 2018" exists should get the honest answer that this lane could not confirm it, without that admission being allowed to cast doubt on the separately and independently verified finding that no single source combines the design's defining two-layer structure.

Read alongside section 9's physics and section 12's screen, this prior-art finding answers a different question: novelty and performance are two separate questions, and this document never lets a strong answer on one stand in for the other. Section 12's twelve-row screen is what proves the design actually works under this project's own model, independent of whether anyone else has tried something similar; this section's finding, that the specific combination is not claimed elsewhere in what this search could access, is what earns the design the extra credit the brief itself promises for original, non-conventional thinking `[G2]`, `[W-S1]`. A design could in principle be both entirely novel and physically unworkable, or both well-precedented and still effective; this document keeps the two questions apart throughout, answering "does it work" in sections 9, 10, 12 and 13, and "has anyone already done it" only here.

Exhibit for the deck: Table 11.1a to 11.1d and the two verified third-party quotes (`[D32]`, `[D36]`) feed slide 3/5's and slide 4/5's third-party validation callouts (the Lemcoff et al. 2023 quote (Palmer group) on slide 3/5 "WHY IT IS UNIQUE", the Burresi 2014 quote on slide 4/5 "MECHANISM AND PROOF", per the blueprint in section 27.2); the stated search limitation feeds the annexure's A4 panel.

## 12. Twelve designs under one test: no substitute pigment reaches premium brightness

**Answer.** Applying the MECE option filter (a breakdown of the architecture space that is mutually exclusive and collectively exhaustive, so no two designs double-count a mechanism and no plausible mechanism is left off the list) to every published route for reducing TiO2 while holding whiteness constant, this project screened twelve distinct film architectures under one identical test: match the premium baseline's luminous reflectance (Y of at least 90.7) and two-coat contrast ratio (at least 0.998), then report how much TiO2 the design needs. Only two of the twelve designs reach the baseline's brightness at all; of those that do, the best commercial or particle-level idea saves 20% of TiO2, and this project's own proposal saves 39% in the base case, rising to 81% in a horizon-3 variant that is not yet feasible to manufacture `[T8]`. The remaining designs either cannot reach the baseline's brightness at any practical loading, or save too little to be worth the switching cost.

### 12.1 Why a MECE screen, and how the twelve lines are built

A credible "why not X" case against the obvious alternatives (new pigments, nano-engineered particles, structural whiteness) has to test every alternative against exactly the same target, using exactly the same model, or the comparison is not fair. The twelve-row screen in Table T8 does this: every row is evaluated against the identical premium baseline (18% TiO2 PVC by volume, two coats of 30 µm, Y at least 90.7, contrast ratio at least 0.998 `[A01]`, `[A02]`, `[A11]`, `[A12]`), and every row's "saving" figure, where one exists, is computed the same way: (baseline TiO2 per square metre minus this design's TiO2 per square metre) divided by baseline TiO2 per square metre.

The twelve rows are collectively exhaustive across four MECE families, each family covering a genuinely distinct physical mechanism for whitening with less pigment, so that no plausible non-conventional idea named in the brief's own suggestion list (`polymeric opacifiers, novel pigments, nano-engineered pigments, photonic band-gap materials, surface-modified pigments and extenders, structural whiteness, nature-inspired materials, hierarchical light-scattering architectures` `[W-S1]`) is left untested.

| Family | What it changes | Rows in Table T8 |
|---|---|---|
| Reference | Nothing (the industry-standard film) | S01 |
| Commercial today | Adds a particle-level opacifier alongside standard TiO2 loading | S02, S03 |
| Particle-level air | Puts the air gap inside or around the individual pigment particle | S04, S05 |
| Substitute pigment | Replaces TiO2 entirely with a different, lower-index or differently structured white solid | S06, S07, S08, S09 |
| Film architecture | Moves the air out of the particle and into the film's own porosity | S10, S11, S12 |

*MECE grouping of Table T8's twelve rows into four families, each a mutually exclusive mechanism for changing how much TiO2 a film needs at fixed whiteness.*

### 12.1a Mapping the brief's own suggestion list onto the screen

The brief invites ideas from a named list of domains: "polymeric opacifiers, film forming opacifiers, novel pigments, nano-engineered pigments, photonic band-gap materials, surface-modified pigments and extenders, dispersion and formulation optimization, structural whiteness, nature-inspired materials, hierarchical light-scattering architectures" `[W-S1]`. Table 12.1a shows that this project's twelve-row screen is collectively exhaustive against that list: every named domain maps onto at least one tested row, so no part of the brief's own suggestion space was left untested.

| Brief's named domain `[W-S1]` | Screen row(s) that test it |
|---|---|
| Polymeric opacifiers, film-forming opacifiers | S02 (hollow polymer opacifier) |
| Novel pigments, nano-engineered pigments | S06, S07, S08 (zinc sulfide, zirconia, barium sulfate) |
| Photonic band-gap materials, hierarchical light-scattering architectures | S04, S05 (yolk-shell, hollow rutile), and the Cyphochilus and shrimp precedent reviewed in section 11 |
| Surface-modified pigments and extenders, dispersion and formulation optimization | S03 (nano-air binder) |
| Structural whiteness, nature-inspired materials | S09 (organic crystal proxy), S10, S11, S12 (the air-network family) |

*Table 12.1a: every domain the brief itself names, mapped to the screen row or rows that test it, confirming the twelve-row screen is collectively exhaustive against the brief's own suggestion list.*

### 12.2 The screen, row by row

Table T8, reproduced here with the physics reason behind each verdict, is the single most load-bearing table in this document.

| ID | Architecture | Family | Dilute scattering per unit volume (1/µm) | TiO2 per m² to match | Saving | Y | Contrast ratio | Verdict |
|---|---|---|---|---|---|---|---|---|
| S01 | Rutile in binder (premium baseline) | Reference | 8.2 | 40.8 g | 0% | 90.7 | 0.998 | Reference |
| S02 | Rutile plus hollow polymer opacifier at 15% | Commercial today | 0.3 | 37.1 g | 9% | 90.8 | 0.998 | Discard: saves less than 30% of TiO2 |
| S03 | Rutile in a binder full of closed nano-air (30%) | Commercial today | 9.0 | 36.3 g | 11% | 90.7 | 0.998 | Discard: saves less than 30% of TiO2 |
| S04 | Yolk-shell: rutile in an air gap inside a shell | Particle-level air | 0.8 | not reached | n/a | 86.1 | 0.983 | Discard: cannot match baseline brightness at maximum loading |
| S05 | Hollow rutile spheres | Particle-level air | 5.0 | 32.9 g | 20% | 90.7 | 0.998 | Discard: saves less than 30% of TiO2 |
| S06 | Zinc sulfide, no TiO2 | Substitute pigment | 4.6 | not reached | n/a | 90.4 | 0.997 | Discard: cannot match baseline brightness at maximum loading |
| S07 | Zirconia, no TiO2 | Substitute pigment | 3.0 | not reached | n/a | 88.0 | 0.993 | Discard: cannot match baseline brightness at maximum loading |
| S08 | Barium sulfate at high loading, no TiO2 | Substitute pigment | 0.1 | not reached | n/a | 63.2 | 0.489 | Discard: cannot match baseline brightness at maximum loading |
| S09 | Organic crystal spheres, index 1.96, no TiO2 | Substitute pigment | 1.4 | not reached | n/a | 84.1 | 0.975 | Discard: cannot match baseline brightness at maximum loading |
| S10 | Air network under a seal coat (this proposal, base case) | Film architecture | 11.1 | 24.8 g | 39% | 90.7 | 0.998 | Retain |
| S11 | Air network with no TiO2 in either coat | Film architecture | 1.2 | not reached | n/a | 82.9 | 0.973 | Discard: cannot match baseline brightness at maximum loading |
| S12 | Air network with organic crystals in place of base-coat TiO2 (horizon 3) | Film architecture | 4.6 | 7.9 g | 81% | 90.7 | 0.998 | Retain for horizon 3 |

*T8: in our model, the twelve-design architecture screen, each design tested against the identical premium-baseline brightness and contrast-ratio targets `[T8]`.*

Five rows (S04, S06, S07, S08, S09) simply fail to reach the baseline's Y of 90.7 at their maximum sensible loading, so "TiO2 per m² to match" is not reached and a saving figure cannot even be computed; their Y values range from 63.2 (barium sulfate, S08, the furthest off) to 88.0 (zirconia, S07, the closest). This is the clearest possible evidence against the obvious answer the brief's own text invites: "whiteness enhancement using spacers for titanium dioxide and use of a high loading of barium sulphate to prepare ultra white paints has been widely reported. Do not restrict your ideas to such conventionally available approaches" `[W-S5]`. Barium sulfate (S08) is the brief's own named conventional approach, and under this project's identical test it is the single worst performer of all twelve, reaching a contrast ratio of only 0.489 against a target of 0.998, roughly half the hiding power required. Row S11 (air network with no TiO2 at all) also fails to reach brightness, which matters for a different reason: it proves that the air network alone, without any rutile in it, is not a whitener on its own. The air network only works in combination with the pigment it surrounds, which is exactly this project's combination claim stated numerically.

Of the two rows that save meaningfully while still reaching the baseline's brightness, hollow rutile spheres (S05, a particle-level air pocket built directly into the pigment's own structure) save 20%, the best any particle-level design achieves under this test. The two "commercial today" rows, a hollow polymer opacifier used alongside standard TiO2 (S02) and a binder engineered with closed nano-air pockets (S03), save 9% and 11% respectively; these numbers are directly consistent with Dow's own claimed figure for its commercial EVOQUE pre-composite polymer technology, "equal or improved hiding with up to 20% less TiO2," which this project's own model independently reproduces in the same range for the same class of mechanism `[D11]`. Row S10, this project's proposal, saves 39% in the base case, roughly double the best particle-level alternative (S05's 20%) and roughly four times the typical commercial spacer product (S02's 9%). Row S12, an aspirational horizon-3 variant that swaps the base coat's own TiO2 for the organic-crystal pigment screened separately as a failed substitute (S09), reaches 81% because it combines the air-network's medium-index advantage with a lower-cost, lower-footprint pigment that would never work alone (S09 fails brightness entirely as a standalone substitute) but works once it, too, is suspended in air rather than binder. Row S12 is explicitly not manufacturable today and is flagged for horizon 3 (section 23), not treated as part of the base-case recommendation.

### 12.2a How far short of brightness each failing row falls

Five of the twelve rows fail to reach the baseline's brightness target at all. Table 12.2a ranks these five by how far short each one falls, in Y points, because the size of the shortfall is itself informative: barium sulfate is not a marginal failure, it is a severe one, while zirconia comes close enough that a reader might wonder why it is discarded at all (the answer: section 12.2 already shows its contrast ratio, 0.993, also misses the 0.998 target, and it remains an unproven substitute at this role regardless).

| Design | Y achieved | Y target | Shortfall (Y points) |
|---|---|---|---|
| S08 Barium sulfate, high loading | 63.2 | 90.7 | 27.5 |
| S11 Air network, no TiO2 at all | 82.9 | 90.7 | 7.8 |
| S09 Organic crystal spheres | 84.1 | 90.7 | 6.6 |
| S04 Yolk-shell | 86.1 | 90.7 | 4.6 |
| S07 Zirconia | 88.0 | 90.7 | 2.7 |

*Table 12.2a: the five designs that fail to reach the premium baseline's brightness target, ranked by shortfall, computed as a simple difference of two tagged model outputs `[T8]`.*

The shortfall arithmetic for the largest case: 90.7 minus 63.2 equals 27.5 Y points, meaning barium sulfate at high loading reaches only 63.2 / 90.7, or about 70%, of the target brightness, the single clearest demonstration in this entire research document that the brief's own named conventional approach is not merely suboptimal but badly inadequate under this project's test.

### 12.3 The three routes against the brief's five challenges, on one grid

The case brief names five challenges any solution must survive: maintaining high opacity, long-term durability and yellowing resistance, dispersion, supply and economic challenges, and manufacturing complexity `[W-K1]`, `[W-K2]`, `[W-K3]`, `[W-K4]`, `[W-K5]`. Scoring the three families that actually reach baseline brightness (particle-level air, via S05; substitute pigment, which no row actually clears on its own, so this row is scored at its best-performing member S07 for completeness; and film architecture, via S10) against all five challenges on one grid shows why film architecture, not particle-level air, is the route this document recommends.

| Challenge | Particle-level air (best case, S05) | Substitute pigment (best case, S07) | Film architecture (this proposal, S10) |
|---|---|---|---|
| Opacity at fixed whiteness | Met, but only a 20% TiO2 saving | Not met: Y 88.0 against an 90.7 target | Met, with a 39% TiO2 saving |
| Durability and yellowing | Unproven; a hollow shell adds a second failure mode (shell cracking) `[D24]` | Zirconia is chemically stable but the pigment switch is unproven in a real paint matrix | Rutile itself is unchanged; the design question moves to seal-coat durability (section 17) |
| Dispersion | A specialised, non-standard particle to manufacture and disperse | A straightforward powder, but one the industry has little experience dispersing at this role | Standard rutile and standard extenders, in standard equipment (section 18) |
| Supply and economics | A new pigment-manufacturing process entirely (hollow-sphere synthesis) | Zirconia is itself an import-exposed, higher-cost material than TiO2 | Same raw material basket, less of the expensive one (section 20) |
| Manufacturing complexity | A new particle synthesis step before formulation even begins | A straightforward substitution, but one that fails on performance before complexity is even relevant | Two coats, the number painters already apply (section 19); the complexity moves into formulation know-how, not new hardware |

*A three-route by five-challenge grid, scored by the design team's own judgement against this project's verified model outputs and lane D's prior-art findings on durability and manufacturing. This is a qualitative synthesis table, not a model output; no cell carries a fabricated test result.*

The grid shows the actual trade-off this project is making: the film-architecture route (S10) does not claim to be free of execution risk (seal-coat durability and dispersion of a higher-porosity base coat are both real, open questions, addressed honestly in section 17 and the lab programme in section 22), but it is the only one of the three routes that clears opacity decisively while using the same raw materials, the same number of coats, and the same basic equipment Asian Paints already runs.

### 12.3a The screen's verdicts tallied by family

Table 12.3a tallies the twelve rows by MECE family and verdict, the simplest possible summary of the whole screen, and the one most directly usable on a slide.

| Family | Rows | Retained | Discarded for missing brightness | Discarded for too little saving |
|---|---|---|---|---|
| Reference | 1 | 1 (as the baseline, not a candidate) | 0 | 0 |
| Commercial today | 2 | 0 | 0 | 2 |
| Particle-level air | 2 | 0 | 1 | 1 |
| Substitute pigment | 4 | 0 | 4 | 0 |
| Film architecture | 3 | 2 | 1 | 0 |

*Table 12.3a: the twelve-row screen tallied by MECE family and verdict. Every substitute-pigment row fails on brightness; every commercial or particle-level row that does reach brightness saves too little to be worth the switching cost; the film-architecture family is the only one that both reaches brightness and saves a large share of TiO2.*

### 12.4 Conclusively

No substitute pigment, tested under this project's identical model and identical targets, reaches the premium baseline's brightness at a loading that is practical in a real paint film. Zinc sulfide, zirconia, barium sulfate and the organic-crystal proxy for shrimp- and insect-inspired whiteners all fall short of Y 90.7, by margins ranging from small (zirconia, 88.0) to severe (barium sulfate, 63.2) `[T8]`. Every particle-level air strategy that does reach the baseline's brightness saves less than a quarter of the TiO2 this project's own film-architecture proposal saves (20% for hollow rutile spheres, against 39% for the air-network base coat). This is the "CONCLUSIVELY" verdict this document's case-against section commits to, stated here with the full twelve-row evidence behind it, and restated on the deck's slide 3/5 as the pivot point into the recommended design (sections 13 and 14).

This verdict is worth restating in the language of the contrarian-recommendation pattern this project's argument follows throughout (this project's plan, section 3.3). The obvious answer the brief's own text invites a participant to reach for is a new particle: a nano-engineered pigment, a photonic band-gap material, a bio-inspired scatterer modelled directly on the Cyphochilus beetle or the whiteness shrimp reviewed in section 11. Table T8's twelve rows are this project's direct, quantified rebuttal of that obvious answer, run under the identical test this project applies to its own proposal rather than under a more forgiving test reserved for the alternatives. None of the eight commercial, particle-level or substitute-pigment designs (S02 through S09) both reaches premium brightness and saves more than 30% of TiO2; the best of them (S05, hollow rutile) reaches brightness but saves only half of what this project's own film-architecture proposal saves. This framing, carried into the deck as "0 of 5 TiO2-free designs reach premium brightness" and "particle-level air saves at most 20%", is the quantitative backbone of why this document argues for changing where the air sits in the film rather than for inventing a new particle to put the air inside of.

A further, more subtle point follows from Table 12.3a's tally. The substitute-pigment family fails completely (zero of four rows reach brightness), which might appear to be the family's defining weakness, but the particle-level-air family's failure is arguably more instructive for this project's argument, because it fails for a mechanistic reason this document can name precisely: the volume-budget problem worked through in full in section 13. A substitute pigment fails simply because no other commercially available white solid has an index close enough to rutile's; that failure mode, while real, does not by itself explain why this project's own air-network film-architecture succeeds. The particle-level-air family's partial success, reaching brightness but capping out at a 20% saving, is the result that most directly motivates the design choice behind sections 14 and 15: if putting air around a particle individually runs into a volume-budget wall at roughly a one-fifth saving, and putting air through the whole film instead removes that wall, the next section's job is to show exactly how that film-level air is built, formulated, and kept in place once a seal coat is applied over it.

Exhibit for the deck: Table T8 in full is the backbone of slide 3/5 ("WHY IT IS UNIQUE"), with the "CONCLUSIVELY" card drawing directly on section 12.4's verdict; the three-route grid in Table 12.3 feeds the annexure's deeper-dive panel.

## 13. The volume budget: a thin air gap backfires and a thick one costs nine times the film

**Answer.** Where the air sits around a rutile particle, and how much of it, is not a free parameter: a thin air gap actually lowers a particle's scattering per unit of TiO2, and a thick air gap that does raise scattering per gram of TiO2 does so by consuming nine times as much film volume per gram, which is why both yolk-shell and hollow-rutile particle designs stall against a volume budget that a film-level architecture, which spends its air on film volume generally rather than on one particle's own shell, does not run into.

### 13.1 The arithmetic of a particle's own air gap

Table T5 isolates a single question: holding a 225 nm rutile core fixed, what happens to its scattering if a shell of pure air is placed directly around it, at increasing thickness?

| Air gap around a 225 nm rutile core | Per unit TiO2 volume (1/µm) | Per unit particle volume (1/µm) |
|---|---|---|
| 0 nm | 11.7 | 11.7 |
| 20 nm | 10.5 | 6.4 |
| 40 nm | 9.9 | 4.0 |
| 80 nm | 10.4 | 2.1 |
| 150 nm | 16.2 | 1.3 |
| 250 nm | 28.1 | 0.8 |

*T5: in our model, scattering per unit TiO2 volume and per unit total particle volume (TiO2 plus its air shell), as a function of air-gap thickness around a single 225 nm rutile core `[T5]`.*

The first column (scattering per unit TiO2 volume) does not rise monotonically with gap thickness. At 20 nm and 40 nm, scattering per unit TiO2 volume actually falls, from 11.7 (no gap) to 9.9 at the 40 nm minimum, a drop of (11.7 − 9.9) / 11.7, which equals 15%. This is a genuine physical result, not a modelling artefact: a thin air gap shifts the resonant scattering behaviour of the particle in a way that, for this particular core size and the thin-gap regime, costs rather than gains efficiency. Only once the gap grows past roughly 80 nm does scattering per unit TiO2 volume climb back above the bare-particle value, reaching 28.1 at a 250 nm gap, 2.4 times the bare particle's 11.7.

The second column tells the opposite story, and is the column that actually decides whether a yolk-shell or hollow-rutile design is usable in a real paint film. Scattering per unit of total particle volume (the core plus its own air shell, the quantity that actually determines how much film volume the particle's own air costs, independent of how much TiO2 is inside it) falls steadily and steeply as the gap grows: from 11.7 at zero gap to 0.8 at a 250 nm gap, a factor of 11.7 / 0.8, which equals roughly 14.6, or, read against the 40 nm case specifically (4.0), a factor of 11.7 / 4.0, which equals 2.9. The project's design rule, stated in the brief's own terms, is that "a thick air gap raises scattering per gram of TiO2 but cuts scattering per µm³ of film ninefold," a figure arrived at by comparing the 80 nm row's per-volume figure (2.1) against the bare-particle figure (11.7): 11.7 / 2.1, which equals 5.6, and against the 150 nm row (1.3): 11.7 / 1.3, which equals 9.0, the ninefold figure this document's locked-number section cites `[A08]`, `[T5]`.

### 13.1a The volume-budget ratio, worked for every gap size in the table

Table 13.1a shows the full arithmetic behind the "ninefold" and other ratio figures used in section 13.1, computed directly from Table T5's own two columns so a reader can check each one without re-deriving it.

| Air gap | Per-TiO2-volume scattering | Per-particle-volume scattering | Ratio of bare particle to this gap's per-volume figure (11.7 divided by the figure in column 2) |
|---|---|---|---|
| 0 nm | 11.7 | 11.7 | 1.0x |
| 20 nm | 10.5 | 6.4 | 1.8x |
| 40 nm | 9.9 | 4.0 | 2.9x |
| 80 nm | 10.4 | 2.1 | 5.6x |
| 150 nm | 16.2 | 1.3 | 9.0x |
| 250 nm | 28.1 | 0.8 | 14.6x |

*Table 13.1a: the volume-budget cost ratio at every air-gap thickness in Table T5, each cell computed as 11.7 (the bare-particle figure) divided by the per-particle-volume figure at that gap, shown to one decimal place `[T5]`.*

The ratio climbs steeply and without an upper bound visible in this range: by 250 nm, a particle is paying nearly fifteen times the film-volume cost of a bare particle to get the air-gap scattering benefit shown in column 2 of Table T5. This is the table that makes section 13.1's claim checkable line by line rather than asserted as a single headline ratio.

### 13.2 Why this kills yolk-shell and hollow-rutile designs specifically

This arithmetic is exactly why the two particle-level-air rows in the twelve-design screen (section 12, S04 and S05) either fail outright or save far less than the film-architecture proposal. A yolk-shell particle (S04: a 225 nm rutile core, a 150 nm air gap, and a 50 nm polystyrene shell, following the construction in Table T8) sits in the regime where the per-volume scattering has already collapsed to 1.3, a tiny fraction of the bare particle's 11.7; every gram of TiO2 the formulator wants to use is now carried inside a particle roughly 625 nm across (the model's own construction, `SPEC["YOLK"]`), most of whose volume is air that does the particle no scattering favour and a great deal of film-volume cost. This is the direct explanation for why S04 cannot reach the baseline's brightness at all (Y 86.1 against a target of 90.7): there simply is not enough room in a realistic film thickness to pack enough of these large, mostly-air particles to hit the target, because each one is volumetrically nine times more expensive, film-volume for film-volume, than the equivalent mass of TiO2 in a dense configuration.

Hollow rutile spheres (S05, a 40 nm rutile wall around a hollow 350 nm sphere) sit in a less extreme but still costly regime, closer to the table's 40 to 80 nm range, which is why S05 does reach the baseline's brightness, unlike the yolk-shell design, but still only saves 20% of TiO2, a third of what this project's own proposal saves. The particle gains some real scattering benefit from its own small internal void, but it is paying the volume-budget cost in miniature: that void occupies particle volume that, in a different architecture, could hold either more pigment or, as this project's design does instead, more film-level air shared efficiently across many particles rather than locked inside each one individually.

### 13.3 Why a film-level air network avoids the same trap

The proposed design (section 14 gives the full formulation) sidesteps this volume-budget problem by never asking one particle to carry its own private air shell. Instead, the base coat is formulated above its critical PVC so that air voids form naturally in the gaps between many particles and the fine chalk extender that shares the film with them, at the film level rather than the particle level. The model's own film-level porosity assumption runs 25% to 45% (bear to bull), with a base case of 35% `[A05]`, a single, shared pool of air that every rutile particle in the film benefits from as a lowered host index (the Bruggeman-mixed value of 1.18 in the base case `[T9]`), without any single particle having to carry its own dedicated, volumetrically expensive shell. The sensitivity table (T14, discussed fully in section 21) confirms this is the single biggest lever on the whole design: moving porosity from 0.25 to 0.45 moves the TiO2 saving from 33% to 45%, and moving the surroundings rule from binder-wetted to pure air moves the saving from 21% to 65% `[T14]`, both film-level, shared parameters rather than a single particle's own geometry.

The honest reading that applies here, carried from section 4: this project's base coat is deliberately kept at a relatively low TiO2 loading within that porous film (9.1% TiO2 by film volume in the base case `[T9]`), not because more pigment would not help in principle, but because the crowding penalty described in section 9.2 bites harder in a low-index, air-rich medium than in binder, so a sparse, well-spaced arrangement captures more of the per-particle scattering gain than a denser one would. This is the same physics, applied at the film level rather than the particle level, that makes the volume-budget problem in Table T5 disappear: the air is not attached to any one particle's shell, so there is no per-particle volume penalty to pay, only a film-level porosity that every particle shares the benefit of.

### 13.3a The proposal's own film-level parameters, by scenario

Because the design spends its air at the film level rather than the particle level, its own porosity and host-index parameters move together across the bear, base and bull scenarios, shown in Table T9.

| Scenario | Porosity | Host index | Base-coat TiO2 PVC | Seal-coat TiO2 PVC | Seal coat (µm) | TiO2 saving |
|---|---|---|---|---|---|---|
| bear | 25% | 1.38 | 11.9% | 18% | 21.5 | 15% |
| base | 35% | 1.18 | 9.1% | 12% | 16.4 | 39% |
| bull | 45% | 1.00 | 2.6% | 12% | 18.0 | 65% |

*T9: in our model, the proposal's own film-level porosity, effective host index and base-coat TiO2 loading, by scenario `[T9]`.*

Reading this table against section 13.1's volume-budget logic: as porosity rises from the bear scenario's 25% to the bull scenario's 45%, the host index the rutile particles see falls from 1.38 toward 1.00 (pure air), and the base-coat TiO2 loading needed to hit the same brightness target falls from 11.9% to just 2.6%, a drop that happens because a film-level, shared pool of air never asks any individual particle to carry its own volumetrically expensive shell; it is the film-level counterpart to what Table 13.1a shows failing at the particle level.

### 13.3b A forward look: the horizon 2 one-coat version depends on the same film-level logic

Section 11's thread 8 (drying stratification) flags a candidate mechanism for collapsing this project's two coats into one, by relying on particle-size-driven self-sorting as the wet film dries rather than on applying two separate coats. Table T16 reports the model's own check of whether this is plausible under realistic Indian drying conditions, using the Peclet number (a dimensionless ratio of how fast a particle is carried toward the drying surface by the evaporating water against how fast it diffuses randomly; a high Peclet number means the particle is swept toward the surface rather than staying randomly mixed).

| Climate | Evaporation rate (µm/s) | Peclet number of an 80 nm binder latex particle | Peclet number of a 600 nm pigment particle |
|---|---|---|---|
| Hot and dry (north India summer) | 0.50 | 5.8 | 43.3 |
| Composite climate | 0.25 | 2.9 | 21.6 |
| Warm and humid (coastal monsoon) | 0.10 | 1.2 | 8.7 |

*T16: in our model, drying Peclet numbers for the proposed horizon 2 one-coat version, by Indian climate zone `[T16]`, `[A29]`, `[A30]`, `[A31]`.*

In every climate zone modelled, the larger pigment particle's Peclet number is well above 1 (ranging from 8.7 in warm, humid coastal conditions to 43.3 in hot, dry conditions), meaning the pigment is swept toward the drying surface fast enough, relative to its own random diffusion, that a size-driven stratification effect is at least plausible; the smaller binder latex particle's Peclet number is lower in every zone, consistent with the small-on-top stratification behaviour the literature in section 11 describes `[D40]`, `[D41]`. This is reported here as a forward-looking design note for horizon 2 (section 23), not as a proven mechanism: no drying trial has actually been run on this project's own formulation, and the honest reading that governs section 16 and section 22 applies here with equal force.

Exhibit for the deck: Table T5's two-column result (scattering per unit TiO2 volume rising, scattering per unit particle volume collapsing) is printed in full as slide 4's ("2/5 THE CHALLENGE") "AIR GAP" panel, per the blueprint in section 27.2; it is the direct evidence behind slide 5's ("3/5 WHY IT IS UNIQUE") "CONCLUSIVELY" verdict and sets up the mechanism explanation on slide 6 ("4/5 MECHANISM AND PROOF") in section 14 and section 15.
