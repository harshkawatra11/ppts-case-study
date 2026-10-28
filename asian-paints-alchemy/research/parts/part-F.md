## 26. Assumptions register and model summary

**Answer.** The model runs on thirty one named assumptions, A01 to A31, each carrying a base, a bear and a bull value with its basis stated in table T1 `[T1]`. Nine of the thirty one decide almost everything a judge will probe: what sits around the rutile particle in the base coat, how porous that base coat is, how much of it the seal coat fills in, how thin the seal coat can be, what rutile costs landed in India, what share of Asian Paints' raw material bill is TiO2, what share of that TiO2 goes into interior emulsions, how fast the market would adopt the system, and TiO2's own carbon footprint. Every other assumption either fixes a physical constant that is not in dispute (particle size, density, dry film thickness) or feeds the scale arithmetic in a smaller way. Changing any one of them means editing exactly one dictionary entry in `model/whiteness_model.py`, rerunning the model, and propagating the result through `deck/gen.py`, never hand editing a number anywhere else.

### 26.1 The full register in prose

Table 26.1 reproduces assumptions register T1 in full `[T1]`. Four groups sit inside it. The first group is the film the model compares everything against: a 30 µm dry film per coat over two coats `[A01]`, 18% TiO2 by film volume in the premium baseline `[A02]`, 20% coarse ground calcium carbonate `[A03]`, and a 250 nm median rutile crystal with a lognormal spread `[A04]`. The second group is the proposal's own architecture: base coat porosity at 35% base case `[A05]`, 25% of base coat solids as binder `[A06]`, 10% of the pore volume filled by the seal coat on infiltration `[A07]`, the Bruggeman optical surroundings rule `[A08]`, a 600 nm precipitated calcium carbonate particle `[A09]`, a small background absorption term that sets the baseline's ceiling near 91% reflectance `[A10]`, the brightness tolerance band `[A11]`, and the minimum two-coat contrast ratio of 0.998 `[A12]`. The third group prices and weighs the materials: rutile at ₹250 a kg `[A13]`, rutile density 4.0 g per cm³ `[A14]`, fine precipitated calcium carbonate at ₹25 a kg `[A15]`, coarse ground calcium carbonate at ₹8 a kg `[A16]`, acrylic binder solids at ₹190 a kg `[A17]`, TiO2's cradle-to-gate footprint at 3.0 kg CO2e a kg `[A18]`, and the densities of calcium carbonate and binder `[A19]`, `[A20]`. The fourth group scales the saving to Asian Paints: FY26 consolidated revenue of ₹35,500 Cr `[A21]`, raw material and packaging cost at 56.3% of revenue, the complement of a 43.7% gross margin `[A22]`, TiO2 at 15% of the raw material bill `[A23]`, 40% of TiO2 use sitting in interior emulsions and their primers `[A24]`, 40% adoption of the addressable volume by year five `[A25]`, acrylic binder's footprint at 2.5 kg CO2e a kg `[A26]`, precipitated calcium carbonate's footprint at 0.6 kg CO2e a kg `[A27]`, a minimum 15 µm seal coat so it forms a continuous skin `[A28]`, and three climate-specific evaporation rates for the drying physics behind a possible one-coat version `[A29]`, `[A30]`, `[A31]`.

| Group | IDs | What it fixes |
|---|---|---|
| Baseline film | A01 to A04 | The premium white everything is measured against |
| Proposal architecture | A05 to A12 | Porosity, infiltration, surroundings, seal thickness, targets |
| Material prices and footprints | A13 to A20 | Rupee cost and carbon cost per kilogram |
| Scale to Asian Paints | A21 to A31 | Revenue, cost share, addressable volume, adoption, drying |

*Short forms: PVC pigment volume concentration; CO2e carbon dioxide equivalent.*

| ID | Base | Bear | Bull | Unit | Basis |
|---|---|---|---|---|---|
| A01 | 30.0 | 30.0 | 30.0 | µm | Dry film per coat of a premium interior emulsion, two coats, same spreading rate for every system compared |
| A02 | 0.18 | 0.18 | 0.18 | fraction | TiO2 pigment volume concentration of the premium baseline film |
| A03 | 0.2 | 0.2 | 0.2 | fraction | Coarse ground calcium carbonate volume fraction in the baseline film |
| A04 | 250 nm | 250 nm | 250 nm | nm | Rutile median crystal diameter, geometric standard deviation 1.35 |
| A05 | 0.35 | 0.25 | 0.45 | fraction | Porosity of the air network base coat |
| A06 | 0.25 | 0.25 | 0.25 | fraction | Binder share of base coat solids by volume |
| A07 | 0.1 | 0.25 | 0.0 | fraction | Share of base coat pore volume the seal coat fills during application |
| A08 | Bruggeman | binder wetted | air | rule | Optical surroundings of base coat particles |
| A09 | 600 nm | 600 nm | 600 nm | nm | Median precipitated calcium carbonate diameter |
| A10 | 0.00015 | 0.00015 | 0.00015 | 1/µm | Background absorption, sets ceiling reflectance near 91% |
| A11 | 0.2 | 0.2 | 0.2 | Y units | Brightness tolerance band |
| A12 | 0.998 | 0.998 | 0.998 | ratio | Minimum two coat contrast ratio |
| A13 | ₹250 | ₹200 | ₹300 | INR per kg | Landed price of rutile TiO2 in India |
| A14 | 4.0 | 4.0 | 4.0 | g per cm³ | Density of pigment grade rutile |
| A15 | ₹25 | ₹30 | ₹20 | INR per kg | Price of fine precipitated calcium carbonate |
| A16 | ₹8 | ₹8 | ₹8 | INR per kg | Price of coarse ground calcium carbonate |
| A17 | ₹190 | ₹190 | ₹190 | INR per kg | Price of acrylic binder solids |
| A18 | 3.0 | 2.5 | 3.5 | kg CO2e per kg | TiO2 cradle to gate footprint |
| A19 | 2.7 | 2.7 | 2.7 | g per cm³ | Density of calcium carbonate |
| A20 | 1.1 | 1.1 | 1.1 | g per cm³ | Density of acrylic binder solids |
| A21 | ₹35,500 Cr | ₹35,500 Cr | ₹35,500 Cr | INR Cr | Asian Paints consolidated revenue FY26 |
| A22 | 0.563 | 0.563 | 0.563 | share | Raw material and packaging cost as a share of revenue |
| A23 | 0.15 | 0.1 | 0.2 | share | TiO2 share of the raw material bill |
| A24 | 0.4 | 0.3 | 0.5 | share | Share of TiO2 use in interior emulsions and primers |
| A25 | 0.4 | 0.2 | 0.6 | share | Adoption across the addressable volume by year five |
| A26 | 2.5 | 2.5 | 2.5 | kg CO2e per kg | Acrylic binder solids footprint |
| A27 | 0.6 | 0.8 | 0.4 | kg CO2e per kg | Precipitated calcium carbonate footprint |
| A28 | 15 µm | 20 µm | 12 µm | µm | Minimum dry film of the seal coat |
| A29 | 0.5 | 0.5 | 0.5 | µm per s | Evaporation, hot and dry interior |
| A30 | 0.25 | 0.25 | 0.25 | µm per s | Evaporation, composite climate interior |
| A31 | 0.1 | 0.1 | 0.1 | µm per s | Evaporation, warm and humid interior |

This table shows that only nine assumptions carry a bear-to-bull spread wide enough to move the headline number by more than a rounding error: A05, A07, A08, A13, A18, A23, A24, A25 and A28. The other twenty two assumptions either hold a single value across all three scenarios (A01 to A04, A06, A09 to A12, A14, A16, A17, A19, A20, A26, A29 to A31) or move only the drying physics of a horizon-two idea, not the headline saving.

### 26.2 The nine assumptions that matter most

Table 26.2 lists the nine, why each matters, and what verified evidence would move it.

| ID | What it sets | Why it moves the headline | What would move it |
|---|---|---|---|
| A05 | Base coat porosity, 35% base case | Tornado sensitivity T14 shows the saving moves from 33% at the bear setting to 45% at the bull setting from this input alone | A published porosity for pigment layers above the critical PVC outside 25% to 45% `[S101]` |
| A07 | Seal coat infiltration into the pores | Moves the saving from 34% at 25% infiltration to 43% at zero infiltration `[T14]` | A measured infiltration depth for a specific seal latex and base coat pair, from the panel programme in section 22 |
| A08 | Optical surroundings rule, Bruggeman base case | The single biggest lever in T14: 21% saving if binder wets the particle, 65% if the particle sits in pure air | A direct scattering measurement on a real porous film, which only the panel programme can supply |
| A13 | TiO2 landed price, ₹250 a kg base case | Sets both sides of every rupee figure in section 20 and 21 equally, so it moves absolute rupees, not the percentage saving | A verified Indian landed price for rutile TiO2 in 2025 or 2026 outside ₹200 to ₹300 a kg |
| A18 | TiO2 cradle to gate footprint, 3.0 kg CO2e a kg | Sets the carbon saving in section 20 and 25 directly | A published cradle to gate footprint for pigment grade, not nanoparticle, TiO2 |
| A23 | TiO2 share of the raw material bill, 15% base case | Sets the size of the bill the saving is taken against; lane A found both an approximately 20% and an approximately 40% figure for different scopes, neither matching this base case precisely, so it is kept as the team's own estimate `[S33]`, `[S34]` | A published, dated, scope-matched figure for TiO2 alone as a share of Indian paint raw materials |
| A24 | Addressable share of TiO2 in interior emulsions, 40% base case | Shrinks or grows the addressable base before adoption is even applied | A published split of Asian Paints' TiO2 use by segment |
| A25 | Adoption by year five, 40% base case | The single business assumption, separate from the physics, that decides how much of the saving is actually realised | A comparable adoption curve for a reformulated interior product at Asian Paints' scale |
| A28 | Minimum seal coat film, 15 µm base case | Moves the saving from 37% at 20 µm to 39% at 12 µm `[T14]`; this is the smallest of the nine levers but the one most directly under the team's own formulation control | A measured minimum continuous film thickness for the specific seal latex chosen in the panel programme |

### 26.3 How to change one input

The update protocol in `PLAN.md` section 5.3 is the only path, and it has three steps. First, a verifier's VERIFIED or CORRECTED row must put a value outside the named assumption's bear-to-bull range, or must replace a base value with a better sourced figure in the same unit; a value that merely sits inside the existing range, or that is UNVERIFIABLE, does not trigger a change. Second, the main agent edits exactly one entry of the dictionary `A` in `model/whiteness_model.py`, records the change in `DECISIONS.md` as `date | step | ID old to new | why`, and reruns the model end to end so that `model_outputs.json`, `model_tables.md` and `deck/values.json` all regenerate from the one edited input, never by hand editing any of those three output files. Third, if the change moves any number printed in section 4 of this plan, the main agent updates that locked table, greps every research part and every slide script for the old figure, and reruns `gen.py mock` and `gen.py copy` before calling the change complete. Six candidate changes were considered during verification and left unchanged because none cleared the bar: A15 to A18 and A21 to A23, A26 and A27, each logged in `DECISIONS.md` as "considered, no change." This discipline keeps every number in this document, the deck and the annexure tied to one source: the model's own dictionary, never a document edited by hand in isolation.

## 27. Slide blueprint for the deck

**Answer.** The deck carries nine slides inside the organisers' master file: slide 1 is the Asian Paints cover exactly as supplied and untouched, slide 2 is our cover, slides 3 to 7 are five dense core slides that each answer one layer of the brief's own questionnaire, slide 8 is the annexure and slide 9 the thank-you slide. Each core slide runs three labelled bands with eight to eleven panels and at least one heat-coloured exhibit, so every chart sits beside a table or a scored grid and every number traces to a model table, a model output or a verified research row. The deck carries exactly one moneyshot, "39% LESS TiO2" on slide 6 `[T12]`, one "CONCLUSIVELY" card on slide 5 and one "Therefore" note on slide 7.

### 27.1 Slide 2: our cover

The cover keeps its two-word title, "WHITER WITH LESS TiO2", a one-line answer card, two fact cards, a mind map titled "WHO SHAPES A WHITE WALL" with four nodes (the pigment, the opacifiers, the paint makers, the rules) each holding brand logo slots shown for context only, a hub numeral of 40.8 g of TiO2 per m² today `[T7]`, an "OUR ROUTE" callout, and the team table (Harsh Kawatra, Team Leader; Anuj Gambhir, Member; both Delhi Technological University, DTU).

| Panel | Text or number | Research section | Tag |
|---|---|---|---|
| Answer card | Keep rutile, hold it in a network of air, seal the air in with the second coat | §2 | `[T9]` |
| Fact card, beetle | Cyphochilus scale white from a chitin network in air | §11 | `[S132]`, `[S133]` |
| Fact card, duty | 57% of Indian TiO2 demand from China; duty of $460 to $681 a tonne recommended again in 2026 | §9 | `[B07]`, `[B03]` |
| Mind map hub | 40.8 g of TiO2 a m² today | §16 | `[T7]` |
| Our route | 39% less TiO2 per m² at contrast ratio 0.998 and brightness 90.7 | §16 | `[T12]` |

### 27.2 Slides 3 to 7, panel by panel

The ribbon on all five core slides reads THE TECHNOLOGY, THE CHALLENGE, WHY IT IS UNIQUE, MECHANISM AND PROOF, COST AND SCALE, the brief's own questionnaire in plain words, with the active tag carrying the layered back card and the counter "N / 5". The five tables below list every panel; the deck's build scripts read every model number from the model's own output file, so a number on a slide cannot drift from the tables in Appendix B.

Slide 3, THE TECHNOLOGY (1/5). Headline: "Keep rutile and hold it in sealed air: a two-coat white that matches a premium finish with 39% less TiO2 and 34% lower material cost per m²".

| Band | Panel | Exhibit | Key numbers | Section | Tags |
|---|---|---|---|---|---|
| Answer bar | Our answer | Full-width dark bar | n/a | §2 | `[W-S1]` |
| Row 1, make it whiter | Obvious move struck through, recommendation, proof, result | Storyline row with a mini bar chart | 0 of 5 TiO2-free designs reach Y 90.7; index 1.18; 8.2, 10.9, 12.6; 39% | §2, §9, §12, §15 | `[W-K1]`, `[T8]`, `[T9]`, `[T4]` |
| Row 2, cut the bill | Same | Storyline row with a mini bar chart | 57% of demand; $460 to $681; 16.1 g and 17.5 g less; ₹18.4 to ₹12.0; ₹298 Cr; 7,551 t | §3, §9, §20, §21 | `[W-K4]`, `[B07]`, `[B03]`, `[T12]`, `[M]`, `[T13]` |
| Row 3, make it at scale | Same | Storyline row with a mini bar chart | at most 20%; 9%, 11%, 20%, 39%; 12 months | §12, §18, §23 | `[W-K5]`, `[T8]` |
| In total | TiO2 per m², two coats | Column chart | 40.8 g, 34.5 g, 24.8 g, 14.3 g | §16 | `[T12]` |
| In total | Three cases, one answer | Heat-coloured grid | 15/39/65%; 16/34/51%; ₹38/298/1,021 Cr; 928/7,551/25,934 t | §20, §21 | `[T9]`, `[T12]`, `[T13]` |
| In total | Why Case Study 1 | Weighted bar ranking | 4.50, 3.30, 3.25, 3.05 | §8 | team judgement |
| In total | The first step | Card | 27 panels, Gate 0 at month 6 | §22, §23 | `[A11]`, `[A12]` |

Slide 4, THE CHALLENGE (2/5). Headline: "Rutile in binder scatters only 66% of the light it would in air, and crowding at 18% costs another 9%: the binder, not the pigment, caps whiteness".

| Band | Panel | Exhibit | Key numbers | Section | Tags |
|---|---|---|---|---|---|
| The bill | What TiO2 costs Asian Paints | Three numerals | ₹2,998 Cr, 1,19,919 t, 40.8 g (estimates) | §3 | `[T13]`, `[A13]`, `[A23]` |
| The bill | ₹ Cr a year, against R&D | Column chart | 2,998 against 125 against 298 | §3, §21 | `[T13]`, R&D ₹124.9 Cr FY26 |
| The bill | The duty clock on Chinese TiO2 | Timeline | Feb 2025, May 2025, Sep 2025, Dec 2025, Aug 2026; 57% of demand | §4, §9 | `[B01]`, `[B12]`, `[B18]`, `[B15]`, `[B02]`, `[B07]` |
| The bill | Duty asked, $ a tonne | Bar chart | 460, 510, 563, 609, 681; not yet in force | §9 | `[B04]` to `[B06]`, `[B17]` |
| The physics | The medium sets the scattering | Column chart, binder bar highlighted | 12.6 at index 1.00 to 7.6 at 1.55 | §9 | `[T4]` |
| The physics | Crowding costs efficiency | Line chart | 91% in binder, 80% in air at 18% | §9 | `[T6]` |
| The physics | Five forces on a paint maker's TiO2 | Rated scorecard | supplier power, new entrants and rivalry High; buyer power Medium; substitutes Low | §3, §9 | `[B07]`, `[A62]`, `[A58]`, `[F45]`, `[T8]` |
| The trap | The usual fixes, under one test | Table | 9%, 11%, 20%, none, none | §12 | `[T8]` |
| The trap | Air gap: TiO2 gains, the film loses | Two-line chart | 11.7 to 28.1 per µm³ TiO2; 11.7 to 0.8 per µm³ film | §13 | `[T5]` |
| The trap | Where should the air live (seed) | Card | "So the air has to live in the film, not in the particle." | §13 | `[T5]`, `[T8]` |

Slide 5, WHY IT IS UNIQUE (3/5). Headline: "We ran 12 white-film designs through one model: no TiO2-free design reaches premium brightness, and only an air network under a seal coat saves more than 30% of TiO2".

| Band | Panel | Exhibit | Key numbers | Section | Tags |
|---|---|---|---|---|---|
| The screen | Twelve designs, one test, least TiO2 wins | Heat-coloured screen with MECE tally strip | all twelve rows of T8 | §12 | `[T8]` |
| The screen | The test and the model | Pass rule and four model steps | Y 90.7, CR 0.998 | §10 | `[T3]`, `[A11]`, `[A12]` |
| The screen | How far each miss falls short | Bar chart in Y points | 27.5, 7.8, 6.6, 4.6, 2.7, 0.3 | §12 | `[T8]`, `[W-S5]` |
| The verdict | Five challenges, three routes | Heat grid | pigment, in particle, in film | §12, §17 | `[W-K1]` to `[W-K5]` |
| The verdict | Prior art: who has which piece | Heat grid, four pieces by six designs | only this design holds all four | §11 | `[D01]`, `[D11]`, `[D47]`, `[D25]`, `[D49]` |
| The verdict | Conclusively | Synthesis card and quote | zinc sulfide 90.4 against 90.7 | §11, §12 | `[T8]`, `[D36]` |

Slide 6, MECHANISM AND PROOF (4/5). Headline: "A porous first coat holds 9.1% TiO2 in 35% air under a 16.4 µm seal coat, and matches the premium white with 24.8 g of TiO2 per m² against 40.8 g".

| Band | Panel | Exhibit | Key numbers | Section | Tags |
|---|---|---|---|---|---|
| How it works | The film, in section | Diagram and four numbered lines | index 1.18 against 1.49 | §15 | `[T9]` |
| How it works | What the rutile sees | Scenario heat grid | 1.38, 1.18, 1.00; 1.12x, 1.33x, 1.52x | §15 | `[T9]`, `[T4]` |
| How it works | Nature got here first | Image slot, text and quote | about 5 µm, chitin filaments in air | §11 | `[D30]`, `[D32]` |
| The proof | 6 g in air hides like 18 g in binder | Hiding curves | CR 0.990 against 0.990 | §16 | `[T11]` |
| The proof | Two coats, the same white (moneyshot) | Card with bear, base and bull boxes | 39% less TiO2, 40.8 g to 24.8 g; 15%, 39%, 65% | §16 | `[T12]`, `[T9]` |
| The proof | The same spectrum | Line chart, 440 to 720 nm | within about half a point at every wavelength | §16 | `[T10]` |
| The proof | Against the targets | Table | CR, Y, L*, b*, TiO2, NIR at 1,500 nm | §16, §25 | `[T7]`, `[T9]`, `[T15]` |
| How it is made | Four steps on equipment Asian Paints already runs | Step cards | 0.6 µm chalk, 25% binder, 12% seal TiO2 | §18 | `[E04]`, `[T9]` |
| How it is made | The lab plan, not yet run | Table, one test per challenge | pass marks of Table 22.1 | §22 | `[A11]`, `[A12]`, `[A05]` |

Slide 7, COST AND SCALE (5/5). Headline: "At 40% adoption in interior emulsions the system saves about ₹298 Cr a year in materials and 7,551 t of TiO2, with no new plant or painter training".

| Band | Panel | Exhibit | Key numbers | Section | Tags |
|---|---|---|---|---|---|
| Cost | Material cost per m², two coats | Waterfall | 18.4, minus 4.0, minus 3.3, plus 1.2, minus 0.2, 12.0 | §20 | `[T12]` |
| Cost | Raw materials and handling | Table | OSHA 15 mg/m³, NIOSH 2.4 mg/m³ | §18 | `[E34]`, `[E36]`, `[E43]`, `[E29]` |
| Cost | Three scenarios | Table and per-litre note | ₹38 Cr, ₹298 Cr, ₹1,021 Cr; ₹123.5 to ₹80.5 a litre | §20, §21 | `[T13]`, `[F07]` |
| Scale | From TiO2 bought to TiO2 avoided | Funnel | 1,19,919 t, 19,187 t, 470 mn m², 7,551 t | §21 | `[T13]`, `[A24]`, `[A25]` |
| Scale | What moves the saving most | Tornado | 21% to 65%, 33% to 45%, 34% to 43% | §21 | `[T14]` |
| Scale | Where it applies, and how ready | Readiness heat table | five segments, phases 2 to 4 | §19, §23 | `[F45]` |
| Roll-out | Three horizons, three gates, by month | Gantt | months 0 to 36 and beyond | §23 | n/a |
| Roll-out | 12 risks, impact by probability | 5 by 5 heat map | register placements of Table 24.2 | §24 | n/a |
| Roll-out | Top risks, early signal, response, and "Therefore" | Table and note | 15 µm floor; pilot by month 12 | §24 | `[A28]` |

### 27.3 Slide 8, the annexure, and slide 9, thank you

Slide 8 carries its own four-tag ribbon, A1 MODEL, A2 ASSUMPTIONS, A3 SENSITIVITY, A4 SOURCES, distinct from the five-tag main ribbon, following the convention that an appendix gets a section-scoped ribbon of its own.

| Annexure panel | What it carries | Backed by |
|---|---|---|
| A1 Model chain and checks | Mie, Percus-Yevick, Kubelka-Munk, CIE D65, optimiser; five checks named and 13 of 13 passing | §10, `[T3]` |
| A2 Assumptions, bear to bull | The eight inputs that move the answer most | §26, `[T1]` |
| A2 What would change our mind | Porosity, surroundings, seal coat, patent, prices | §2.5 |
| A3 Sensitivity and one-input moves | Tornado with low and high values, near-infrared table, adoption at 20% and 60% (₹149 Cr and ₹447 Cr), TiO2 at ₹200 and ₹300 a kg (₹151 Cr and ₹227 Cr on TiO2) | §20.4, §21.5, `[T14]`, `[T15]` |
| A4 Sources and short forms | Thirteen numbered sources and every short form | Appendix A, Appendix C |

Slide 9 repeats the recommendation in one line, a recap card (39% less TiO2, ₹298 Cr a year, 13 of 13 checks), a note that this research document covers all four case studies, and the same team table as the cover.

### 27.4 Archetype mapping and density (touchpoint D)

Table 27.4 maps each core slide to the skill's named archetypes, re-based for a five-core-slide deck, and records the density each slide carries.

| Slide | Primary archetype | Secondary archetype | Panels | Distinct exhibit forms | Heat-coloured exhibits |
|---|---|---|---|---|---|
| 3 THE TECHNOLOGY | H executive summary (do not against do, as a storyline matrix) | M scenarios | 12 exhibits | 9 | 1 |
| 4 THE CHALLENGE | J multi-chart | K MECE filter (five forces, usual fixes) | 10 | 10 | 1 |
| 5 WHY IT IS UNIQUE | K MECE filter | V conclusively | 6 plus tally strip | 7 | 3 |
| 6 MECHANISM AND PROOF | P moneyshot | U implementation | 9 | 9 | 1 |
| 7 COST AND SCALE | N sensitivity | W conclusion, M scenarios | 9 | 9 | 2 |

### 27.5 Where the deck and this document were reconciled

Building the dense deck surfaced six places where this document had stated a figure two ways; each was settled in favour of the model tables and the verified rows, and the text above and in sections 2, 12, 24, 28 and 29 now matches the slides.

| Item | Settled as | Why |
|---|---|---|
| Designs missing brightness | 0 of 5 TiO2-free designs, plus particle-level air saving at most 20% | Table T8: S06, S07, S08, S09 and S11 miss; S04 also misses but keeps TiO2 `[T8]` |
| Shrimp-whiteness quote | Lemcoff et al., Nature Photonics, 2023 (Palmer group) | First author of the verified paper `[D35]`, `[D36]` |
| Porosity pass band | 25 to 45% | The model's bear-to-bull range `[A05]` |
| Risk heat map | Register placements | Table 24.1 is the primary record |
| Cost waterfall | Four steps, coarse chalk included | ₹18.36 to ₹12.04 before rounding `[T12]` |
| Share from China | 57% of demand, not of imports | `[B07]` |

## 28. Forty questions the judges could ask, answered

**Answer.** We grouped the forty questions the judges are most likely to raise into the ten hardest, which attack the model's honesty and the recommendation's defensibility, followed by thirty questions mapped one to one against the brief's own seven questionnaire items (W-Q1 to W-Q7) and its five named challenges (W-K1 to W-K5) `[W-Q0]`, `[W-K0]`. Every answer below cites at least one tagged number so that no answer is a bare assertion. Where the honest answer is a gap or a limit rather than a result, we say so plainly, because the briefs themselves score original thinking and penalise simply reproducing an idea without it `[G2]`.

Table 28.0 sets out the grouping before the questions themselves, so a judge can jump straight to the group they want to probe.

| Group | Questions | Count | What the group tests |
|---|---|---|---|
| Hardest ten | Q1 to Q10 | 10 | Model honesty, novelty risk, defensibility under a weak scenario |
| W-Q1, the technology | Q11 to Q13 | 3 | What the proposal is, in plain words |
| W-Q2, uniqueness | Q14 to Q16 | 3 | What is new against the brief's own named conventional routes |
| W-Q3, mechanism | Q17 to Q20 | 4 | The optics and the physics of the design |
| W-Q4, production | Q21 to Q23 | 3 | How it is made and quality-controlled |
| W-Q5, application | Q24 to Q26 | 3 | How it is applied and where it is not yet tested |
| W-Q6, cost | Q27 to Q29 | 3 | Rupee and carbon cost, including the bear case |
| W-Q7, handling and scale | Q30 to Q32 | 3 | Raw material safety and scale-up |
| W-K1, opacity | Q33 to Q35 | 3 | Whether whiteness holds under real conditions |
| W-K2, durability and yellowing | Q36 to Q37 | 2 | Colour stability and abrasion |
| W-K3, dispersion | Q38 | 1 | Formulation stability above the critical PVC |
| W-K4, supply and economics | Q39 | 1 | Exposure to the TiO2 duty's legal status |
| W-K5, manufacturing complexity | Q40 | 1 | Whether a new unit operation is required |

### 28.1 The ten hardest questions

**Q1.** "If a lab panel disagrees with the model, what single assumption is most likely wrong, and how would you know within a day?"
The tornado sensitivity names the answer before any panel is poured: what surrounds the base-coat rutile particle, assumption A08, moves the saving from 21% at its bear setting to 65% at its bull setting, the widest swing of any input `[T14]`. A single porosimetry and FIB-SEM read after the first panel, per the method in section 22, would show whether the particle sits closer to air or to binder and would answer the question the same day the panel is sectioned.

**Q2.** "You have not run a single physical test. Why should we trust a computational model over demonstrated hollow-sphere technology already saving 20%?"
The model's claims do not ask to be taken on trust. They are checked against the same hollow-sphere technology, on the same test we use for our own design. Hollow rutile spheres save 20% of TiO2 under our model's own rules `[T8]`, which is why we report that number alongside our own 39%, not instead of it. The model passes thirteen independent checks against known physics benchmarks before either number is trusted `[T3]`, and the honest reading in section 16 states plainly that nothing has been measured on a panel yet.

**Q3.** "What stops Dow or another opacifier maker from fixing their own hollow-sphere particle to get the same 39% instead of needing your air-network film?"
Particle-level air is bounded by the film's own volume budget: giving every rutile particle its own air pocket costs nine times the film volume per gram of TiO2 compared with one shared network `[T5]`, which is why hollow rutile stalls at 20% under the same test `[T8]`. A particle maker cannot escape that volume penalty without changing where the air sits, which is exactly the design rule we propose at the film level, not the particle level.

**Q4.** "Your bear case only saves 15%. If the real world lands in bear, is this still worth building?"
Yes: the bear case still delivers ₹38 Cr a year and 928 t of TiO2 avoided at Asian Paints' scale with no new plant and no new painter training `[T13]`. Even the bear scenario beats every substitute pigment screened, none of which reaches premium brightness at any loading `[T8]`, so the downside case still comes out ahead of every other option tested.

**Q5.** "How do you know the seal coat will not crack or craze over a porous, 35% air base coat during Indian summers?"
We do not know yet; this is why section 22's lab programme names scrub resistance under ASTM D2486 and a FIB-SEM section check as pass marks before any claim of durability is made `[W-K2]`. The design rule keeps the seal coat at or above a 15 µm minimum film specifically so it forms a continuous, scrubbable skin rather than a cracked one `[A28]`, but that rule is a model assumption, not yet a measured outcome.

**Q6.** "Your novelty claim rests on a patent search done without professional claim-level tools. Could a patent you missed already claim this?"
We state that limit directly in section 11: the patent search used Google Patents' own ranking and secondary citation chains, not a professional claim-level clearance search, and the research document says so wherever the novelty claim appears. What we found across ten prior-art items, from yolk-shell TiO2 to hollow polymer-silica pigments to porous radiative-cooling coatings, is that every individual piece is known, but no source found combines an above-CPVC air-continuous base coat with a size-excluding seal coat specifically to cut TiO2 at fixed whiteness `[R-D]`.

**Q7.** "Exterior durability under monsoon humidity is untested. How confident are you that silane treatment keeps the pores dry for years, not months?"
Not confident yet, and section 19 scopes exteriors into horizon 2, after the interior pilot, precisely because this question is open `[W-K2]`. Silane and siloxane water repellents are an established, dosed treatment for masonry pores, not a new chemistry `[S166]`, `[S168]`, but their multi-year performance on our specific porous base coat has not been tested and the roadmap in section 23 gates exterior launch on that test, not on an assumption.

**Q8.** "The brief says cost will not be a barrier to selection, so why does your pitch lead with a cost number instead of a technical one?"
Our lead number is technical: 39% less TiO2 at the same contrast ratio of 0.998 and the same brightness of 90.7 `[T9]`. The cost figure of ₹298 Cr a year is reported because it is the honest consequence of the physics, at Asian Paints' own disclosed scale `[T13]`, not because cost decided the idea; the brief itself asks for a cost perspective as one of its seven questions `[W-Q6]`.

**Q9.** "Why does the model's own honest reading say the saving could fall to about a fifth? Doesn't that undercut your headline 39% number?"
It bounds the number honestly rather than undercutting it. The base case rests on a Bruggeman mix of air and binder around the rutile particle `[A08]`; if binder instead preferentially wets the particle, the saving falls toward the bear case of 15 to 21% `[T9]`, `[T14]`, and we report that on every slide that carries the base case, not in a footnote. Even at its worst case, the recommendation still beats every substitute pigment screened `[T8]`.

**Q10.** "If Asian Paints already knows rutile scatters better in air, why hasn't an above-CPVC base-coat-plus-seal-coat architecture for TiO2 reduction already been commercialised?"
The physics of air-versus-binder scattering is decades old and is not our claim `[T4]`; dry hiding above the critical PVC is likewise an established mechanism in paper coatings `[S101]`. What appears not to have been combined and quantified, on the evidence our own search could find, is using that above-CPVC porosity specifically as a TiO2-reduction lever, sealed by a size-excluding topcoat, inside the two coats painters already apply, with one model proving the saving against every realistic alternative on one test `[T8]`. That gap between known physics and an unclaimed combination is exactly what section 11's prior-art table addresses.

### 28.2 Questionnaire item W-Q1: the technology or concept

**Q11.** "Describe the proposed technology in one sentence a non-chemist would understand." `[W-Q1]`
Keep the same white pigment the industry already uses, but put a share of it in a network of air inside the first coat, and seal that air in with a thin second coat so the surface stays washable `[T9]`. The two coats are the same two coats a painter applies today; only what sits inside the first coat changes, going from 18% TiO2 by film volume in a conventional coat to 9.1% TiO2 and 35% air in the base case `[A02]`, `[T9]`.

**Q12.** "Is this a new pigment, a new process, or a new formulation rule?" `[W-Q1]`
It is a formulation and process rule, not a new pigment. The pigment stays rutile titanium dioxide at the same refractive index of 2.75 at 550 nm `[T2]`; what changes is the rule for how much air and how much binder surround it in the first coat, and what the second coat's latex particle size must be relative to the first coat's pore size `[T9]`.

**Q13.** "Does this work for both water-borne and solvent-borne systems, as the brief asks?" `[W-Q1]`
Section 19 maps both: interior and exterior emulsions are water-borne and use the architecture directly in horizons one and two, while industrial and automotive solvent-borne systems need a fast-skinning seal so the solvent itself does not re-wet the base coat's pores, placed in horizons two and three `[W-S1]`. Automotive's existing basecoat-and-clearcoat structure already separates a base layer from a sealing layer, which is the closest existing analogue to our proposal `[T9]`.

### 28.3 Questionnaire item W-Q2: what makes it unique

**Q14.** "What specifically is unique, given that porous coatings and TiO2 spacing are both known ideas?" `[W-Q2]`
The uniqueness is the combination and the quantification, not either idea alone: an air-continuous base coat built deliberately above the critical PVC, sealed by a latex sized larger than the base coat's pore throat, tuned specifically to cut TiO2 at a fixed whiteness target, and checked against eleven alternative architectures on one model `[T8]`. Section 11's prior-art table could not find that specific combination claimed in the patents and papers searched.

**Q15.** "The brief explicitly warns against TiO2 spacers and high barium sulfate loading. Does your idea avoid both?" `[W-Q2]`, `[W-S5]`
Yes on both counts. High barium sulfate loading reaches only 63.2 brightness against a 90.7 target, far short, because its refractive index of 1.64 sits close to binder's 1.49 `[T8]`, `[T2]`; and we do not add a per-particle spacer at all, because a thin per-particle air gap of 20 to 40 nm actually lowers scattering per unit TiO2 volume, from 11.7 down to 9.9, before any gain appears `[T5]`.

**Q16.** "How does this differ from Dow's EVOQUE pre-composite polymer, which also claims TiO2 reduction?" `[W-Q2]`
EVOQUE pins individual TiO2 particles onto a polymer particle to improve distribution, a particle-level fix reported to save up to 20% TiO2 for that specific product `[S118]`, close to our model's 20% figure for hollow rutile under the same test `[T8]`. Our architecture instead changes what surrounds the particle at the film level across the whole base coat, which is why it reaches 39% rather than roughly 20% under the same rules.

### 28.4 Questionnaire item W-Q3: the scientific mechanism

**Q17.** "Explain, in physics terms, why air around rutile scatters more light than binder does." `[W-Q3]`
Light scattering from a small particle rises with the contrast between the particle's refractive index and its surrounding medium's index; rutile's index of about 2.75 against air's index of 1.00 is a bigger step than rutile against acrylic binder's index of about 1.49, so the same particle scatters 12.6 units per µm³ in air against 8.2 in binder, a 1.52 times gain `[T4]`, `[T2]`.

**Q18.** "Why does the air have to live in the film rather than wrapped around each individual particle?" `[W-Q3]`
Because particle-level air costs film volume nine times faster than it helps: wrapping a 225 nm rutile core in a 250 nm air gap raises scattering per gram of TiO2 to 28.1 but drops scattering per µm³ of the whole film to 0.8, from 11.7 bare `[T5]`. A shared air network in the film, instead, costs nothing extra in film volume because the air is simply the space the particles do not fill.

**Q19.** "What keeps the seal coat from simply filling in the air network and undoing the whole effect?" `[W-Q3]`
Size exclusion: the seal coat's latex particles are formulated larger than the base coat's pore throat diameter, so capillarity draws the seal coat's water into the surface pores without the latex itself penetrating deep into the network, leaving the base case's seal coat filling only about 10% of the pore volume `[A07]`; the bear and bull scenarios bound this at 25% filled and fully unfilled respectively `[T9]`.

**Q20.** "How does crowding at realistic TiO2 loadings change this physics?" `[W-Q3]`
Crowding lowers every particle's individual scattering efficiency as neighbours start shadowing each other: at 18% TiO2 by volume, a particle in binder keeps 91% of its lone-particle scattering while the same particle in air keeps only 80%, because the particles sit relatively closer together as a fraction of the larger spacing air allows `[T6]`. The model applies this Percus-Yevick correction to every architecture screened, so the comparison in table T8 already accounts for crowding, not just dilute-particle physics.

### 28.5 Questionnaire item W-Q4: production

**Q21.** "How is the base coat actually made, step by step?" `[W-Q4]`
Four steps, each on equipment Asian Paints already runs: fine precipitated calcium carbonate is made from lime and captured CO2 `[S150]`; it is dispersed with rutile and binder above the critical PVC on today's high-speed dispersers, keeping binder at 25% of the base coat's solids by volume `[A06]`; the seal coat's acrylic latex is produced on existing emulsion reactors with a particle size set larger than the base coat's pore throat; and the two coats are applied by painters with the same rollers and spreading rate as today `[T9]`.

**Q22.** "Does producing this require any new raw material Asian Paints does not already buy?" `[W-Q4]`
No single raw material is new. Precipitated calcium carbonate, acrylic binder and rutile TiO2 are all materials the company already sources `[A15]`, `[A17]`, `[A13]`; the only addition is silane or siloxane dosing for exterior pore-sealing, a known masonry water-repellent chemistry at small, closed dosing `[S166]`.

**Q23.** "What quality control step catches a batch where the porosity target is missed?" `[W-Q4]`
Section 22's lab programme names mercury porosimetry with a 25 to 45% pass band, the model's own bear-to-bull porosity range as the direct porosity check, alongside a FIB-SEM section scan to confirm the air network is visibly continuous rather than isolated pockets `[W-K5]`. Neither check has been run on a real batch yet; both are proposed, not demonstrated, pass marks.

### 28.6 Questionnaire item W-Q5: application

**Q24.** "Does the painter need any new tool, training or step to apply this?" `[W-Q5]`
No. The application sequence is coat one, let it dry, coat two, the same two-coat sequence and the same spreading rate Asian Paints' own Apcolite Premium Emulsion technical data sheet specifies today `[S103]`; what changes is only what is inside each can, not how either coat is rolled on.

**Q25.** "How does drying behaviour differ across India's climate zones?" `[W-Q5]`
Evaporation rates run from 0.5 µm per second in a hot, dry interior to 0.1 µm per second in a warm, humid coastal interior `[A29]`, `[A31]`; for a future one-coat version, these translate to drying Peclet numbers of 43.3 for the pigment and 5.8 for the binder latex in a hot, dry climate, against 8.7 and 1.2 in a humid one `[T16]`, which is why the two-coat version, not a one-coat version, is the base case: it does not depend on drying-driven stratification at all.

**Q26.** "Can this be tinted the way premium emulsions are tinted today in-store?" `[W-Q5]`
The research and the model do not test tinting directly; this sits in section 19 as an open question for the lab programme, since tinting adds a third pigment into a film whose optics were optimised for a white base coat and a near-clear seal coat, and the honest answer is that colourant interaction with the air network has not yet been modelled or tested `[W-K1]`.

### 28.7 Questionnaire item W-Q6: cost

**Q27.** "What is the per square metre cost difference, and where does it come from?" `[W-Q6]`
Material cost per m² falls from ₹18.4 to ₹12.0 in the base case, a drop driven by ₹4.0 less TiO2 and ₹3.3 less binder, offset by ₹1.2 more fine chalk and ₹0.2 less coarse chalk, for a net ₹6.4 fall (₹18.36 to ₹12.04 before rounding) `[T12]`. Binder falls because less TiO2 means a thinner demand for binder to wet it, even as fine chalk rises to build the air network's structure.

**Q28.** "Does the cost case hold even in the bear scenario?" `[W-Q6]`
Yes: even the bear case, where binder wets the rutile and porosity sits at 25%, still cuts material cost per m² from ₹18.4 to ₹13.7, a 16% fall `[T12]`, which at Asian Paints' scale is still ₹38 Cr a year and 928 t of TiO2 avoided `[T13]`.

**Q29.** "What is the carbon-cost story alongside the rupee story?" `[W-Q6]`
CO2e per m² falls from 0.23 kg to 0.16 kg in the base case, a 28% cut `[T12]`, which at scale is 29.7 kt of CO2e avoided a year `[T13]`; this draws on TiO2's own 3.0 kg CO2e per kg footprint `[A18]` and binder's 2.5 kg CO2e per kg `[A26]`, both of which fall in absolute use even as fine chalk's smaller footprint of 0.6 kg CO2e per kg rises slightly in use `[A27]`.

### 28.8 Questionnaire item W-Q7: raw material handling and scalability

**Q30.** "Does handling rutile TiO2 change at all under this proposal?" `[W-Q7]`
No: the same dust controls apply, because the only change is using less of the same material, not a different material with a different hazard profile `[R-E]`. TiO2 remains an IARC Group 2B substance, possibly carcinogenic to humans, under existing OSHA, ACGIH and NIOSH exposure limits, none of which this proposal alters `[R-E]`.

**Q31.** "What new handling risk, if any, does the seal coat's larger latex particle introduce?" `[W-Q7]`
None identified: larger acrylic latex particles are produced on the same emulsion reactors as today's binder, with the same safety data profile as any acrylic dispersion `[S162]`; the only new handling step across the whole system is silane or siloxane dosing for exteriors, applied in small, closed volumes with standard supplier safety data `[S166]`, `[S168]`.

**Q32.** "How does the saving scale if Asian Paints adopted this across 100% of the addressable base instead of 40%?" `[W-Q7]`
The bull scenario already models a wider addressable and adoption combination, reaching ₹1,021 Cr a year and 25,934 t of TiO2 avoided at 65% of TiO2 saved per m² `[T13]`; full adoption at the bull architecture would scale further still, but we report the 40% base case because it is the team's own judged, not measured, estimate of a realistic five-year adoption curve `[A25]`.

### 28.9 Challenge W-K1: maintaining high opacity

**Q33.** "How certain are you that opacity holds across both coats, not just in the model's idealised two-layer calculation?" `[W-K1]`
The model's own check C7 confirms the base-case proposal meets brightness, contrast ratio and seal thickness targets together, not independently `[T3]`; the honest limit is that this is a Kubelka-Munk two-flux calculation of light transport through two coats, not a measurement of a real painted wall, which is exactly what section 22's panel programme exists to close.

**Q34.** "Does opacity hold over both black and white substrates, as real contrast ratio testing requires?" `[W-K1]`
Yes in the model: both the premium reference and the proposal are checked against ISO-style contrast ratio over 1% black and 80% white substrates together, reaching 0.9984 and 0.9980 respectively `[T7]`, `[T9]`, both above the 0.998 minimum target `[A12]`.

**Q35.** "What happens to opacity if the base coat's porosity falls short of the 35% target during real production?" `[W-K1]`
The bear scenario already answers this directly: at 25% porosity, the base coat PVC rises to 11.9% TiO2 and the saving falls to 15%, still meeting the same brightness and contrast ratio targets, just with less TiO2 saved, not with opacity lost `[T9]`.

### 28.10 Challenge W-K2: durability and yellowing resistance

**Q36.** "Why should a porous base coat not yellow faster than a conventional one?" `[W-K2]`
The model's colour calculation already includes yellowness: the proposal's b* of 1.5 sits close to the premium reference's 1.4 `[T9]`, `[T7]`, because the pigments involved, rutile and calcium carbonate, are the same chemically stable, non-yellowing pigments used today; no new chromophore or binder chemistry is introduced that would change UV-driven yellowing behaviour, but this remains unverified without QUV accelerated weathering, named explicitly in section 22's exterior test plan.

**Q37.** "Is there a durability test specific to the porous structure itself, beyond colour?" `[W-K2]`
Yes: scrub resistance under ASTM D2486 is named with a pass mark of premium-or-better performance, precisely because a porous film is the structure most at risk of abrasion damage opening the air network to the surface `[W-K2]`; this has not yet been run.

### 28.11 Challenge W-K3: dispersion challenges

**Q38.** "Does moving to a higher-porosity, above-CPVC formulation create any new dispersion difficulty?" `[W-K3]`
The base coat is dispersed on the same high-speed dispersers Asian Paints already runs, with binder held at a fixed 25% share of solids by volume `[A06]`; the model does not simulate dispersion stability directly, so this remains an assumption carried from standard above-CPVC coating practice, not a dispersion-rheology result, and is named as an open item for the lab programme in section 22.

### 28.12 Challenge W-K4: supply and economic challenges

**Q39.** "Given the TiO2 duty's uncertain legal status, how does that risk affect your economics?" `[W-K4]`
It strengthens rather than weakens the case for using less TiO2: the Calcutta High Court quashed the May 2025 notification implementing the duty, and no primary source confirms the August 2026 remand findings have been notified into legal force, so the duty is best stated as recommended, not currently in force `[S48]`, `[S52]`; either way, 57% of Indian TiO2 demand traced to China during DGTR's investigation `[S48]`, and using less TiO2 per m² reduces exposure to that import concentration regardless of which way the duty eventually lands.

### 28.13 Challenge W-K5: manufacturing complexity

**Q40.** "Does this add a manufacturing step, or change the number of coats a customer applies?" `[W-K5]`
Neither: production stays at four steps on existing equipment, from fine chalk through base coat, seal coat and application `[T9]`, and the customer still applies exactly two coats, the same number as today `[A01]`; the complexity that does exist is formulation discipline, holding porosity, infiltration and seal latex size within their modelled ranges, which is a recipe-control question for the lab programme, not a new unit operation on the factory floor.

### 28.14 Where each answer traces back to

Table 28.1 shows which research section carries the full working behind each group of answers, so a judge who wants more depth than sixty to one hundred and twenty words can go straight to the source.

| Group | Full working in | Slide carrying the summary |
|---|---|---|
| Hardest ten | §4, §11, §13, §16, §21 | Slides 4, 5, 6, 7, 8 |
| W-Q1 to W-Q3 | §14, §15, §19 | Slides 3, 6 |
| W-Q4 to W-Q5 | §18, §19, §22 | Slide 6 |
| W-Q6 to W-Q7 | §20, §21 | Slide 7 |
| W-K1 to W-K5 | §17, §22, §24 | Slides 4, 5, 7 |

## 29. A talk track for two speakers

**Answer.** The talk track below assumes a timed pitch of roughly seven minutes across the nine slides, split so that Speaker 1 opens and closes and Speaker 2 carries the technical middle, with every block landing exactly one number so the audience always leaves a block holding something concrete. Lines are plain statements, read in the order the slides appear; no block depends on a line from a later block, so either speaker can be cut short without losing the thread.

| Slide | Time | Speaker | What is said | The one number landed |
|---|---|---|---|---|
| 2 (cover) | 0:00 to 0:45 | Speaker 1 | "Our answer: keep the rutile, hold it in a network of air, and seal the air in with the second coat. A premium white wall carries 40.8 grams of TiO2 in every square metre today." | 40.8 g `[T7]` |
| 2 (cover) | 0:45 to 1:00 | Speaker 1 | "The Cyphochilus beetle gets the same brilliant white from a chitin network in air, five to fifteen microns thick, using no pigment at all." | 5 to 15 µm `[S132]` |
| 3 (1/5 THE TECHNOLOGY) | 1:00 to 1:30 | Speaker 1 | "We are not chasing a new white pigment. We modelled twelve designs, and none of the five TiO2-free designs reaches premium brightness at any loading." | 0 of 5 `[T8]` |
| 3 (1/5 THE TECHNOLOGY) | 1:30 to 2:00 | Speaker 2 | "Our own route, under the same test, saves thirty nine percent of the TiO2, cuts material cost thirty four percent, and uses forty two percent less binder, all in the same two coats a painter already applies." | 39% `[T9]` |
| 4 (2/5 THE CHALLENGE) | 2:00 to 2:30 | Speaker 2 | "Here is why: rutile in binder scatters only eight point two units of light per cubic micron. The same rutile in air scatters twelve point six, one and a half times more, because of the bigger jump in refractive index." | 1.52x `[T4]` |
| 4 (2/5 THE CHALLENGE) | 2:30 to 3:00 | Speaker 2 | "Asian Paints spends an estimated two thousand nine hundred ninety eight crore rupees a year on TiO2, and fifty seven percent of India's TiO2 demand was met by Chinese imports during the government's own investigation." | ₹2,998 Cr `[T13]` |
| 5 (3/5 WHY IT IS UNIQUE) | 3:00 to 3:30 | Speaker 1 | "We put twelve architectures through one model on one test. The best commercial fix, hollow rutile spheres, saves twenty percent. Ours saves thirty nine." | 20% `[T8]` |
| 5 (3/5 WHY IT IS UNIQUE) | 3:30 to 3:45 | Speaker 1 | "Conclusively: a new pigment cannot out-scatter rutile in binder. Zinc sulfide gets closest and still misses brightness, ninety point four against our ninety point seven target." | 90.4 `[T8]` |
| 6 (4/5 MECHANISM AND PROOF) | 3:45 to 4:30 | Speaker 2 | "A porous first coat, forty six point two microns, holds nine point one percent TiO2 in thirty five percent air. A sixteen point four micron seal coat, with latex too large to enter the pores, keeps that air in." | 35% `[T9]` |
| 6 (4/5 MECHANISM AND PROOF) | 4:30 to 5:00 | Speaker 2 | "The result: thirty nine percent less TiO2, forty point eight grams down to twenty four point eight grams per square metre, at the same contrast ratio, zero point nine nine eight, and the same brightness, ninety point seven." | 24.8 g `[T12]` |
| 7 (5/5 COST AND SCALE) | 5:00 to 5:30 | Speaker 1 | "At forty percent adoption across interior emulsions, this is worth about two hundred ninety eight crore rupees a year in materials and seven thousand five hundred fifty one tonnes of TiO2 not bought." | ₹298 Cr `[T13]` |
| 7 (5/5 COST AND SCALE) | 5:30 to 5:50 | Speaker 1 | "Even in our most conservative scenario, where binder wets the rutile instead of air, we still save fifteen percent and thirty eight crore rupees a year." | 15% `[T9]` |
| 7 (5/5 COST AND SCALE) | 5:50 to 6:10 | Speaker 2 | "No new plant, no new painter training. Therefore: pilot it in twelve months." | 12 months `§23` |
| 8 (annexure, if asked) | 6:10 to 6:30 | Speaker 2 | "Thirteen of thirteen model checks pass against known physics benchmarks, and the thirty nine percent figure holds from fifteen to sixty five percent across our bear to bull range." | 13 of 13 `[T3]` |
| 9 (thank you) | 6:30 to 7:00 | Speaker 1 | "Whiter with less TiO2: keep the rutile, hold it in air, seal the air in. Thirty nine percent less TiO2 per square metre, same contrast ratio, same brightness, in the two coats painters already apply. Thank you." | 39% `[T9]` |

Two notes on delivery. First, the honest-reading caveat (the saving could fall toward a fifth if binder wets the particle, named in slide 7's bear-case line) is built into the 5:30 block rather than held back for a judge's question, so the team raises it before anyone else does, per the pre-empted-weaknesses pattern. Second, if time runs short, the annexure block at 6:10 is the one to cut; every number in it also appears earlier on slides 3 or 7, so cutting it loses no new information, only a repetition.

Table 29.1 gives the same track as a cut-to-time guide, so either speaker knows exactly what to drop first if the room signals time is running out.

| If time runs to | Cut this block first | Why it is safe to cut |
|---|---|---|
| 7:00, full track | Nothing | Full track as timed above |
| 6:10 | The annexure block (6:10 to 6:30) | Every number repeats a slide 3 or slide 7 figure |
| 5:50 | The bear-case line (5:30 to 5:50) | The base-case number at 5:00 still stands alone |
| 5:00 | The beetle line on the cover (0:45 to 1:00) | The cover's answer card and the 40.8 g number carry the opening without it |


