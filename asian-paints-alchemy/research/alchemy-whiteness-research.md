# Whiter with Less TiO2: Asian Paints Alchemy, Case Study 1

**Keep the rutile, hold it in a network of air, and seal the air in: a two-coat white that needs 39% less TiO2 per m² in our optical model, with the four Alchemy problem statements researched side by side**

Team IdeaForge: Harsh Kawatra (Delhi Technological University, Team Leader) · Anuj Gambhir (Delhi Technological University, Member)

Prepared for: Asian Paints Alchemy, case study round, October 2026

---

## 0. Document control

**Answer.** This document is the research base behind Team IdeaForge's submission to Asian Paints Alchemy. We research all four problem statements the organisers set and solve Case Study 1, Future of Whiteness Development through Material Science, in depth. The recommendation is to keep rutile titanium dioxide (TiO2) as the white pigment, move the air that today sits inside engineered particles into the film itself, and seal that air in with a thin topcoat, on model hash `b377745d37` [M]. Every number in this document carries a bracketed tag that says exactly where it came from, so a judge who challenges a figure in cross-questioning can trace it back to a single place rather than to our word alone.

### 0.1 Purpose and reader

The reader is the Alchemy judging panel, acting as Asian Paints' research and development (R&D) board for this innovation challenge. The organisers ask, across the four case files, for a non-conventional and scalable whiteness solution (Case 1), a thermal management solution with measurable energy savings (Case 2), a renewable-carbon material or process (Case 3), and a characterisation, modelling, simulation or artificial intelligence (AI) method validated on literature, simulation or experimental data, not assumed numbers (Case 4) `[G1]`. We answer Case 1 with a dense, numbered argument and answer Cases 2 to 4 with a shorter survey section each plus an eight-idea screen, so the panel can see that Case 1 was chosen on evidence rather than by default. The accompanying deck carries five core slides built on Case 1 alone; this document carries the full derivation behind every slide number, the case against the obvious alternatives, the conflicts between outside sources, and the complete assumptions register, so a judge who presses on any figure during the pitch can find the working here.

The document answers what each brief asks for, mapped job by job.

| Job the brief sets | What it means here | Case reference | Where in this document |
|---|---|---|---|
| Describe the technology and its mechanism | State what we propose and why it works physically | W-Q1 to W-Q3 | Sections 9, 14, 15 |
| Show it is non-conventional and unique | Show no substitute pigment and no particle-level air design beats it | W-Q2, W-S5 | Sections 11, 12, 13 |
| Show production, application, cost and scale | Four production steps, where it applies, cost per m², company-wide scale | W-Q4 to W-Q7 | Sections 18, 19, 20, 21 |
| Cover all four cases honestly | A survey and an eight-idea screen for Cases 2, 3 and 4 | T, B, A series | Sections 5, 6, 7 |

### 0.2 Tag legend

Every number in this document ends with a bracketed tag that tells the reader how far to trust the figure and exactly where to check it.

| Tag | Meaning | Resolves to |
|---|---|---|
| `[W-Q3]`, `[T-K2]`, `[B-Q6]`, `[A-K4]` | A line of one of the four briefs, by its own reference ID (Case 1 uses the letter W, Case 2 T, Case 3 B, Case 4 A) | `case/01-briefs.md` |
| `[A05]` | A team assumption in the model's assumptions register, numbered A01 to A31, each with a base, bear and bull value | `model/model_tables.md`, table T1, and section 5 of this plan |
| `[M]` | A number produced directly by one pinned run of the optical model | `model/model_outputs.json` |
| `[T8]` | A table produced by the same model run | `model/model_tables.md`, reproduced in Appendix B |
| `[S12]` | An external source, numbered in the source register | `research/raw/sources.md`, Appendix A |

*Short forms: TiO2, titanium dioxide; AI, artificial intelligence.*

Money in this document is written as rupees (₹), with lakh (one hundred thousand) and crore (ten million) and Indian digit grouping, for example ₹2,998 Cr `[T13]`. Foreign prices keep their own currency, for example USD 460 to USD 681 a tonne `[B03]`, because relabelling a dollar figure in rupees at an assumed exchange rate would misstate it. Ranges use the word "to", never a dash. Where a source gives a rounded figure, the rounding is kept rather than sharpened, because a cleaner decimal than the source supports would overstate what is actually known.

### 0.3 Source hierarchy

Where two sources disagree, or an outside figure differs from a brief figure, this document follows a fixed order rather than averaging or choosing whichever number is more convenient to the argument.

| Tier | Source type | How it is used here |
|---|---|---|
| 1 | The four case briefs themselves | Never overwritten. A brief line is a fixed premise of the exercise |
| 2 | The pinned model run (`model_outputs.json`, `model_tables.md`) | The only source for optical, cost and scale numbers that are not brief facts |
| 3 | A VERIFIED or CORRECTED row in a lane's raw file, sourced to a regulator, filing, standard or peer-reviewed paper | Preferred for every external fact about Asian Paints, TiO2, the Indian market, or prior art |
| 4 | A VERIFIED (search only) row, where the verifier located the figure through a search summary rather than a direct fetch of the primary page | Used, but marked by its own row status, never silently promoted to tier 3 |
| 5 | A row flagged `[blog]` or `[vendor]` | Used only for directional context, never as the sole support for a number inside the argument |

A row marked UNVERIFIABLE is never used as a finding; it is reported, if at all, as a stated gap. Where a lane's raw file records a `## Conflicts` entry, that conflict is carried into this document as a named disagreement rather than resolved by picking the more convenient number.

### 0.4 Model version, hash and how to rerun

Every modelled number in this document comes from one pinned run of the whiteness model.

| Item | Value |
|---|---|
| Model file | `model/whiteness_model.py`, writing `model_outputs.json`, `model_tables.md` and `deck/values.json` |
| Model hash | `b377745d37` [M] |
| Checks passed | 13 of 13, model table T3 [T3] |
| Headline finding line printed by the run | `FINDINGS [15.5, 39.4, 64.9] 298 18.36 12.03`, read as the bear, base and bull TiO2 saving in percent, the base-case net materials saving in ₹ crore a year, and the baseline and proposal material cost per m² in rupees [M] |
| Assumption updates applied since the plan was locked | None. Every verifier candidate for an update was reviewed against the update protocol (section 5.3 of this plan) and none cleared the bar; see `DECISIONS.md` |

To rerun the model, a reader runs `python -X utf8 asian-paints-alchemy/model/whiteness_model.py` from the repository root. The script is deterministic given its assumptions register: unchanged, it reprints the same hash and the same thirteen passing checks every time. Changing one assumption and rerunning moves every downstream table; the rule this document follows is that a changed number is propagated to every sentence that uses it, never patched in one place (section 5.3 of this plan).

### 0.5 What is brief fact, assumption, model output and outside evidence

Four different kinds of number appear in this document, and treating them as interchangeable is the fastest way for an argument to collapse under cross-questioning.

| Kind | What it is | Can it be disputed | Example |
|---|---|---|---|
| Brief fact | Stated directly in one of the four Alchemy case files | No. It is a premise of the exercise | TiO2 has dominated whiteness for more than a century on its refractive index `[W-B1]` |
| Model assumption | A value the team chose where the physics needs an input the briefs do not state, numbered A01 to A31, each with a base, bear and bull range | Yes, and the nine that matter most are named in section 5.1 of this plan | Porosity of the air-network base coat, base 35%, bear 25%, bull 45% `[A05]` |
| Model output | Arithmetic performed on brief facts and assumptions by the pinned model run | Only by changing an input and rerunning; the arithmetic itself is mechanical | TiO2 per m² falls from 40.8 g to 24.8 g in the base case `[T12]` |
| Outside evidence | A fact about a real company, market or regulation, checked by a verifier against a primary or credible secondary source | Yes, and several outside sources disagree with each other, flagged throughout | Chinese imports were 57% of Indian TiO2 demand during the Directorate General of Trade Remedies (DGTR) investigation period `[B07]` |

No sentence in this document reports a model result as a measurement. Every sentence that carries a model number says "in our model" or "the model shows", because nothing proposed here has been run on a panel, a spectrophotometer or a scrub-resistance rig. Section 16 and section 21 of this document carry the honest reading of the model's own limits in full, and section 22 opens by stating plainly that nothing has yet been measured.

### 0.6 The skill's calibration note

Building this document's argument used the `case-competition-deck` skill's structural playbook: a contrarian recommendation defended against the obvious answer the brief invites, one moneyshot number, foreshadowing across sections, symmetric treatment of the twelve architectures screened in section 12, scenario discipline on every uncertain figure, and a double synthesis that closes the case-against and then the whole deck. Case Study 1 is closest to the skill's `case_types/strategy.md` guide (a material and formulation invention, then production, cost and scale) with an operations core (cost-benefit per m², throughput on equipment Asian Paints already runs). The skill's own corpus is three merger-and-acquisition decks from a case competition at Harvard; the structural and rhetorical patterns (contrarian answer, foreshadowing, symmetric treatment, scenario naming, the moneyshot, pre-empted weaknesses, third-party validation, action titles) transfer with confidence, because they describe how an argument is sequenced rather than what a particular industry looks like. The case-specific frameworks in the skill (market sizing by TAM, SAM and SOM; a competitive positioning matrix; unit economics) are treated here as reasoned extrapolation from an R&D pitch, not as corpus-derived certainty, and this document says so wherever one is used rather than presenting it as proven practice for a material-science case.

### 0.7 Verification tally per lane

Ten research lanes (A to J) fed this document, each built by a verifier reading the plan's seed sources and adding rows until it reached the plan's row count, marking each row VERIFIED, VERIFIED (search only), CORRECTED, or UNVERIFIABLE. VERIFIED (search only) means the verifier located and confirmed the fact through a search summary of the primary page rather than a direct fetch of it; it is still treated as a checked fact, not a guess, but it carries its own status so a reader can see the difference.

| Lane | Scope | VERIFIED | VERIFIED (search only) | CORRECTED | UNVERIFIABLE |
|---|---|---|---|---|---|
| A | Asian Paints and the Indian decorative market | 20 | 42 | 0 | 7 |
| B | TiO2 market, Indian supply, prices, duties, footprint and regulation | 19 | 35 | 1 | 4 |
| C | Optics, physics and the model's inputs | 11 | 25 | 0 | 7 |
| D | Prior art, novelty and patents | 11 | 42 | 2 | 5 |
| E | Materials, production and handling | 2 | 42 | 0 | 10 |
| F | Indian painting practice and standards | 21 | 21 | 0 | 4 |
| G | Case Study 2 survey (thermal management) | 14 | 35 | 1 | 7 |
| H | Case Study 3 survey (bio-based and circular) | 4 | 39 | 0 | 7 |
| I | Case Study 4 survey (characterisation, modelling and AI) | 9 | 24 | 1 | 9 |
| J | Third-party quotes for the deck and research | 6 | 1 | 0 | 0 |

*Short forms: none in this table beyond the lane letters defined in section 6 of this plan.*

### 0.8 A note on section titles

Most of this document's thirty section titles are action titles, a declarative finding with a number, matching the deck's own headline style. A minority are not: sections that are themselves reference material rather than an argument step, among them the model method walkthrough (section 10), the Indian-practice standards survey (section 19), and the assumptions register (section 26), carry a descriptive title naming what the section is, because the thing being delivered there is a method, a standard or a register, not a single findable number to lead with. Sections whose job is to document rather than to argue get a descriptive title on purpose. Every section title in this document is fixed by the execution plan and changes only through that plan's own update protocol.

No lane fell under the plan's gap-reporting requirement without a stated reason; every `## Gaps` and `## Conflicts` section a lane wrote is carried into the relevant content section of this document rather than silently dropped. Lane J's single row is a carry-over: both of the deck's two verbatim quotes were originally located and checked inside lane D (rows D32 and D36) and are repeated in lane J only to collect them next to the deck's third-party-validation use, so lane J's tally undercounts its real evidential weight; the quotes themselves are VERIFIED. Two of lane J's working notes (the Burresi and Palmer wording) corrected the plan's own seed phrasing before either quote was built into the deck; see the exact wording in build-log.md's "Corrections for writers" section, and use that corrected wording, not the plan's original paraphrase, anywhere this document quotes either paper.

Two material corrections surfaced during verification and are carried forward rather than smoothed into the numbers: lane B could not confirm that the 3 August 2026 DGTR remand recommendation has been given legal force by a Central Board of Indirect Taxes and Customs (CBIC) notification as of the access date `[B17]`, so this document states the anti-dumping duty as recommended, not as currently in force, anywhere the DGTR timeline is discussed; and lane G corrected the plan's seed citation for a cool-roof soiling study, which resolves to a different but still relevant paper than the one originally named `[S-G27]`. Neither correction changes a locked number in section 4 of this plan.

## 1. Coverage matrix: every line of the four briefs mapped to a section

**Answer.** Every reference ID across the four Alchemy case files, and the three general rules that apply to all of them, is answered somewhere in this document or in the deck, and the table below says exactly where. One hundred and forty-one brief lines are mapped: twenty-nine for Case 1 (whiteness), twenty-six for Case 2 (thermal), thirty-six for Case 3 (bio-based) and forty-seven for Case 4 (AI and characterisation), plus the three general rules. Case 1 lines map mostly onto our five core slides and sections 9 to 25; Case 2, 3 and 4 lines map onto their own survey sections (5, 6 and 7) and the eight-idea screens there, because the deck itself argues Case 1 alone.

### 1.1 The three general rules

| ID | What the brief says | How we answer it | Section | Slide |
|---|---|---|---|---|
| G1 | The submission template has a purple front cover and a white inside page carrying the Asian Paints logo, the Alchemy mark and the Unstop mark | The deck is built inside the organisers' own master file on this exact template; slide 1 is left untouched | n/a (deck build) | cover |
| G2 | Original ideas score higher; reproducing an AI-generated idea without original thinking lowers the chance of qualification; AI-generated content should be mentioned | Our combination (an air-network base coat sealed by a size-excluding topcoat) is checked against patent and literature prior art in section 11 and found not claimed in combination; the team's own decision on AI disclosure is recorded in section 1.3 of this plan and not restated as a content finding here | §11 | none |
| G3 | A proof of concept or prototype is preferred and earns extra points; an idea from a different industry or area of science is also welcomed | Our proof of concept is a computational optical model, always named as such; its checks, inputs and limits are in sections 10 and 16, and a lab programme that would prove it on real panels, not yet run, is in section 22 | §10, §16, §22 | 4/5 |

### 1.2 Case Study 1 (whiteness), series W

| ID | What the brief says | How we answer it | Section | Slide |
|---|---|---|---|---|
| W-B1 | Whiteness drives brightness, opacity, hiding and perceived quality; TiO2 has been the benchmark pigment for over a century on refractive index, scattering and durability | We keep rutile TiO2 for exactly this reason: no substitute pigment reaches premium brightness at practical loading `[T8]` | §9 | 1/5 |
| W-B2 | Sustainability pressure, volatile raw-material costs and carbon rules are pushing the industry to explore alternatives to TiO2; other industries already commercialise benign substitutes; polymeric opacifiers, engineered fillers and hollow particles are emerging | Lane A and B evidence on Asian Paints' raw-material exposure and the TiO2 duty timeline frames the problem; the twelve-design screen in section 12 tests the named emerging categories on one rubric | §3, §4, §12 | 2/5 |
| W-O1 | The future of whiteness may extend beyond conventional TiO2 toward multifunctional, bio-inspired and structurally white systems that also manage heat and resist yellowing | Our design is structural (an air network, not a new pigment) and section 25 shows it also reflects more near-infrared light, a link to Case 2 | §14, §25 | 4/5 |
| W-K0 | Despite the opportunity, several technical and commercial challenges remain | The five named challenges (W-K1 to W-K5) are each answered one by one in section 17 | §17 | 5/5 |
| W-K1 | Maintaining high opacity with the alternate material or solution | The model shows the proposal meets the same contrast ratio target as the premium baseline, 0.998, at both brightness and hiding `[T7]`, `[T9]` | §16, §17 | 3/5 |
| W-K2 | Long-term durability and yellowing resistance | Addressed as a residual risk with a named test (quick ultraviolet, QUV) in sections 17 and 22, since nothing has been measured yet | §17, §22 | 5/5 |
| W-K3 | Dispersion challenges | Addressed in section 14 (formulation rules for base-coat porosity and extender size) and section 17 as a residual risk | §14, §17 | 4/5 |
| W-K4 | Supply and economic challenges | Directly answered by section 9 and section 20 to 21: the design uses less TiO2, so it reduces exposure to the TiO2 duty cycle described in sections 3 to 4 | §9, §20, §21 | 2/5, 5/5 |
| W-K5 | Manufacturing complexity | Section 18 shows the production steps use equipment and raw materials Asian Paints already runs, named step by step | §18 | 5/5 |
| W-S1 | Develop a scalable whiteness solution for architectural, automotive and industrial coatings, water or solvent borne, from any of a list of named domains including structural whiteness and nature-inspired materials | Our answer sits in the structural-whiteness and nature-inspired categories named in the brief itself; section 19 states where it applies by segment and binder type | §14, §19 | 4/5 |
| W-S2 | The solution may involve material, product, process or design innovation | Ours is primarily a design innovation (where the air sits in the film), described in section 14 | §14 | 4/5 |
| W-S3 | Do not restrict ideas to the coatings industry only | The seed precedent for the design is not coatings at all: a beetle's and a shrimp's structural whiteness, named in section 11 | §11 | 4/5 |
| W-S4 | A proof of concept or prototype is preferred and earns extra points | Answered by G3 above; see sections 10, 16 and 22 | §10, §16, §22 | 4/5 |
| W-S5 | Spacers for TiO2 and high-loading barium sulphate are already widely reported; do not restrict ideas to these conventional approaches | Section 12's twelve-design screen tests spacer-type and barium-sulphate-type designs explicitly and shows both save less TiO2 than our proposal `[T8]` | §12 | 3/5 |
| W-Q0 | The solution should be non-conventional; participants should address seven named questions | The seven questions (W-Q1 to W-Q7) are each answered in turn below | §9 to §21 | 1/5 to 5/5 |
| W-Q1 | Describe the proposed technology or concept to impart and enhance whiteness | An air-continuous base coat holding the same rutile at the same crystal size, sealed by a thin topcoat whose latex is too large to enter the base coat's pores | §14 | 1/5 |
| W-Q2 | What makes the solution unique | Not a new pigment; the design rule itself (air-continuous base coat under a size-excluding seal coat, quantified against every known alternative on one model) is not claimed in combination by the prior art we found `[S-D]` | §11, §12 | 3/5 |
| W-Q3 | Explain the scientific or engineering mechanism; how does the solution impart whiteness | Rutile scatters 1.52 times more light per unit volume in air than in binder `[T4]`; the air network lowers the medium index around each particle, and fine chalk above its critical pigment volume concentration becomes a second scatterer | §9, §15 | 4/5 |
| W-Q4 | How will the material or solution be produced | Four steps on equipment Asian Paints already runs: a precipitated-chalk route, the base-paint mix, the seal-coat latex, then two-coat application | §18 | 5/5 |
| W-Q5 | How will it be applied or integrated into the target application | Interior emulsions first, in the same two-coat painter practice already standard in India, then exteriors and other segments | §19 | 5/5 |
| W-Q6 | Give a perspective on cost | Material cost per m² falls from ₹18.4 to ₹12.0 in the model's base case, a 34% cut `[T12]` | §20 | 5/5 |
| W-Q7 | Give a perspective on raw-material handling and scalability | At 40% adoption across the addressable interior-emulsion volume, the model's base case avoids about 7,551 t of TiO2 a year `[T13]`; handling of each raw material is covered in section 18 | §18, §21 | 5/5 |
| W-R1 | Philippe et al. 2025, extraction and characterisation of TiO2 pigments from commercial paints for environmental studies | A reference the organisers supplied; not independently re-verified by this team, used only as context in section 11's prior-art discussion where relevant | §11 | none |
| W-R2 | Kamble et al. 2018, characterisation of paint formulated using secondary TiO2 pigments | As W-R1; context only | §11 | none |
| W-R3 | Sánchez et al. 2025, accessible high-reflectance TiO2-barium sulphate white coatings | Context for the barium-sulphate route scored in section 12's screen `[T8]` | §12 | none |
| W-R4 | Curado et al. 2023, high-performance exterior coatings with cool pigments | Context for the exterior and near-infrared discussion in section 25 | §25 | none |
| W-R5 | Zhang et al. 2023, composite coatings for improving TiO2 pigment performance | Context for the particle-spacing and composite routes screened in section 12 | §12 | none |
| W-R6 | SpecialChem 2022, highly treated TiO2 confronts sustainability and circularity issues | Context for the sustainability framing in section 4 | §4 | none |
| W-R7 | Scientific Reports 2025, optimising TiO2 nanopowder in water-based paint formulations | Context for the water-borne application discussion in section 19 | §19 | none |

### 1.3 Case Study 2 (thermal management), series T

| ID | What the brief says | How we answer it | Section | Slide |
|---|---|---|---|---|
| T-B1 | Rising temperatures and urbanisation are pushing up cooling-related electricity use across buildings, transport and data centres | Section 5 opens with India's own cooling-policy context, drawn from lane G | §5 | none |
| T-O1 | Future thermal management may come from coatings, smart materials, radiative cooling, phase-change materials and nature-inspired regulation | Section 5's eight-idea screen covers each named category | §5 | none |
| T-O2 | Participants are encouraged to think beyond conventional solutions, from any scientific domain with commercial potential | The eight-idea screen explicitly ranks each idea's originality `[T-idea-screen]` | §5 | none |
| T-K1 | Deliver measurable energy savings | The best-if-chosen idea names a test protocol (ASTM E903, C1549, E1980 and a roof-temperature protocol) that would measure this | §5 | none |
| T-K2 | Be economically viable | Each of the eight ideas is scored on Asian Paints fit, a proxy for commercial viability | §5 | none |
| T-K3 | Be scalable for large-scale adoption | Each idea is scored on scale in India | §5 | none |
| T-K4 | Should perform under diverse environmental conditions | The humidity-recharged idea is chosen as best-if-chosen specifically because it answers India's humid-climate limit on radiative cooling | §5 | none |
| T-K5 | Contribute to sustainability and carbon reduction goals | Addressed qualitatively for each idea; the chosen idea reduces cooling electricity demand | §5 | none |
| T-K6 | Create a competitive advantage through technological innovation | The originality score in the eight-idea screen addresses this directly | §5 | none |
| T-S1 | Develop a thermal management solution for buildings, facades, windows, roofs, transport, data centres, EV batteries, industrial infrastructure or urban environments | The eight ideas span roofs, facades and EV battery packs; the humidity-recharged roof layer is the one named best-if-chosen | §5 | none |
| T-S2 | The solution may involve material, product, process or design innovation | Each idea is classified by type in the screen's note column | §5 | none |
| T-S3 | As G2 (originality and AI-disclosure rule) | As G2 above | §5 | none |
| T-S4 | As G3 (proof of concept preferred) | The best-if-chosen idea is explicitly marked as needing a stated test protocol before it could be called a proof of concept | §5 | none |
| T-Q0 | The solution should show clear technical differentiation and measurable energy impact; eight questions follow | The eight questions below are each addressed at survey depth, since the deck itself argues Case 1 | §5 | none |
| T-Q1 | What specific thermal challenge and target application area | Each of the eight screened ideas states its target application area in the screen's idea column | §5 | none |
| T-Q2 | Describe the proposed technology or concept | Described in one line per idea in the screen | §5 | none |
| T-Q3 | What makes the solution unique | The originality score in the screen addresses this per idea | §5 | none |
| T-Q4 | Explain the mechanism; how does it maintain temperature neutrality or save energy | Described briefly per idea; our own Case 1 film's near-infrared reflectance gain is explained with the model's physics in section 25 | §5, §25 | none |
| T-Q5 | Raw-material handling, scalability and production | Scored per idea on the "scale" column of the screen | §5 | none |
| T-Q6 | How will it be applied or integrated | Named per idea, for example "vertical facades" or "two- and three-wheeler EV battery packs" | §5 | none |
| T-Q7 | Define measurable success criteria and test protocol; share durability detail | The best-if-chosen idea names ASTM E903, C1549, E1980 and a roof-temperature protocol as its test plan | §5 | none |
| T-Q8 | Give a perspective on cost | Addressed qualitatively; not modelled, since Case 2 is survey depth only in this submission | §5 | none |
| T-R1 | Zhou et al. 2026, recent advances in energy-saving materials for building cooling | Could not be independently located as a standalone document by lane G; cited honestly as unconfirmed | §5 | none |
| T-R2 | Santamouris (ed.) 2019, minimising energy consumption and climate change in the built environment | Context reference; not independently re-verified | §5 | none |
| T-R3 | Levinson, Akbari and Berdahl, cool roofs and pavements | Could not be independently located as a standalone document by lane G; cited honestly as unconfirmed | §5 | none |
| T-R4 | Alkrush et al. 2024, data centre cooling techniques | Context for the data-centre cooling idea in the screen | §5 | none |

### 1.4 Case Study 3 (bio-based and circular), series B

| ID | What the brief says | How we answer it | Section | Slide |
|---|---|---|---|---|
| B-B1 | The chemical industry has relied on fossil-derived resources for over a century; supply shocks and net-zero pressure now push toward renewable carbon | Section 6 opens with this framing, drawn from lane H | §6 | none |
| B-B2 | Asian Paints has already moved on this with Nilaya Naturals, renewable-content and waterborne products; the next step is new bio-based materials at scale | Section 6 names Nilaya Naturals and frames the eight-idea screen around what would extend it | §6 | none |
| B-O1 | Green chemistry, biotechnology and materials engineering now enable bio-based polymers, additives, pigments and specialty materials from biomass, residues, algae and carbon dioxide | Each of the eight ideas in the screen draws on one of these feedstock categories | §6 | none |
| B-O2 | A future where wall paints use renewable-carbon polymers, buildings store carbon, and waste streams become high-value materials | The paddy-straw idea, named best-if-chosen, turns an India-specific waste stream (burnt paddy straw) into a feedstock | §6 | none |
| B-O3 | The future belongs to ideas combining performance, affordability, scale and sustainability | Each idea is scored on exactly these axes in the screen | §6 | none |
| B-K0 | Several barriers hinder large-scale adoption of renewable materials | The ten named barriers (B-K1 to B-K10) are reflected in the screen's headroom and proof columns | §6 | none |
| B-K1 | Inconsistent feedstock quality | Addressed qualitatively per idea; paddy straw's seasonal variability is named as a residual risk | §6 | none |
| B-K2 | Limited scalability | Scored directly in the screen's "scale" column | §6 | none |
| B-K3 | Higher cost | Scored directly in the screen's "proof" and fit columns, where cost parity is a named factor | §6 | none |
| B-K4 | Performance limitations | Scored in the screen's "headroom" column | §6 | none |
| B-K5 | Durability concerns | Named per idea where relevant, for example the lignin idea's colour limit | §6 | none |
| B-K6 | Limited industrial infrastructure | Reflected in the "AP fit" column, since an idea using Asian Paints' existing vinyl acetate monomer (VAM) and vinyl acetate ethylene (VAE) chain scores higher | §6 | none |
| B-K7 | Supply chain constraints | Addressed per idea, for example cardanol's Indian cashew-nut-shell supply | §6 | none |
| B-K8 | Competition with food resources | Directly why paddy straw and lignin are preferred over food-linked feedstocks in the screen | §6 | none |
| B-K9 | Complex processing technologies | Scored in the "proof" column per idea | §6 | none |
| B-K10 | Solutions must be technically feasible, economically attractive, environmentally beneficial and scalable | This is the exact rubric the eight-idea screen uses | §6 | none |
| B-S1 | Develop an innovative renewable-carbon material, technology, product or process across named categories (monomers, additives, pigments, fillers, coatings) | The eight ideas span each named category | §6 | none |
| B-S2 | The case challenges participants to propose a new generation of renewable and circular materials | Answered by the eight-idea screen and the best-if-chosen idea's outline | §6 | none |
| B-S3 | As G2 | As G2 above | §6 | none |
| B-S4 | As G3 | The best-if-chosen idea's life-cycle-assessment outline is explicitly marked as not yet run | §6 | none |
| B-Q1 | Is the idea a raw material, monomer, polymer, additive or coating, and what is its end application | Classified per idea in the screen's idea column | §6 | none |
| B-Q2 | How will the material be sourced, synthesised, processed or manufactured | Described briefly per idea, for example paddy-straw silica matting and cellulose rheology modifiers | §6 | none |
| B-Q3 | Is it equivalent to conventional fossil-derived materials; what performance benefit; replacement or new function | Addressed qualitatively per idea in the screen's note column | §6 | none |
| B-Q4 | Give a perspective on cost | Addressed qualitatively; not modelled, since Case 3 is survey depth only in this submission | §6 | none |
| B-Q5 | What technical, economic, regulatory and supply chain challenges must be addressed | Reflected in the screen's columns and the best-if-chosen idea's named barriers | §6 | none |
| B-Q6 | Give the cradle-to-grave life cycle analysis | The best-if-chosen idea is explicitly given an LCA outline, not a completed assessment, and section 6 says so plainly | §6 | none |
| B-R1 | Meier et al. 2007, Chemical Society Reviews | Context reference for renewable monomers; not independently re-verified | §6 | none |
| B-R2 | Auvergne et al. 2014, Chemical Reviews | Context reference for bio-based polymer chemistry | §6 | none |
| B-R3 | Petrović 2008, Polymer Reviews | Context reference for vegetable-oil-based polymers | §6 | none |
| B-R4 | Laurichesse and Avérous 2014, Progress in Polymer Science | Context reference for lignin chemistry, relevant to the lignin idea in the screen | §6 | none |
| B-R5 | Xia et al. 2025, Polymers | Context reference | §6 | none |
| B-R6 | Klemm et al. 2011, Angewandte Chemie International Edition | Context reference for cellulose, relevant to the paddy-straw idea | §6 | none |
| B-R7 | Hu et al. 2023, Green Chemistry | Context reference | §6 | none |
| B-R8 | Carrère et al. 2025, Progress in Organic Coatings | Context reference | §6 | none |
| B-R9 | Lam et al. 2026, ACS Sustainable Chemistry and Engineering | Context reference | §6 | none |
| B-R10 | Torgal 2026, Resources | Context reference | §6 | none |

### 1.5 Case Study 4 (characterisation, modelling, simulation and AI), series A

| ID | What the brief says | How we answer it | Section | Slide |
|---|---|---|---|---|
| A-B1 | Polymer and coating development has relied on slow, iterative experiments; advanced characterisation and AI now create new opportunities | Section 7 opens with this framing; our own Case 1 optical pipeline is itself an example, flagged there | §7 | none |
| A-B2 | Integrating characterisation with modelling, simulation and AI can accelerate understanding of rheology, film formation, durability and optical appearance | The eight-idea screen in section 7 covers each named property category | §7 | none |
| A-O1 | Materials innovation will increasingly depend on predicting performance before lab work, moving from empirical to predictive and digitally enabled | Our optical model, described fully in section 10, already does this for one property (hiding and whiteness) | §7, §10 | none |
| A-O2 | A future where polymers are designed virtually, formulations are AI-optimised, and digital twins predict lifecycle performance | Addressed per idea in the screen, for example the weathering digital twin idea | §7 | none |
| A-O3 | High-throughput screening, multiscale modelling, generative AI and autonomous experimentation are creating opportunities to change how materials are discovered | Each idea in the screen draws on one of these named approaches | §7 | none |
| A-K1 | Available instrumental facility for microstructure analysis | Reflected in the screen's "proof" column, since a student team's access to instruments bounds what is feasible | §7 | none |
| A-K2 | Availability of high-quality, representative experimental data | Directly why the best-if-chosen idea is validated only on literature data, per the brief's own rule | §7 | none |
| A-K3 | Inaccurate predictions from incomplete, noisy or biased data | Addressed as a residual risk for the Bayesian-optimisation idea in the screen | §7 | none |
| A-K4 | Bridging length and time scales from molecular structure to coating performance | This is exactly what our optical pipeline does, from a single particle's Mie scattering to a two-coat film's contrast ratio, described in section 10 | §10 | none |
| A-K5 | Complexity from many formulation variables, raw materials and interactions | Reflected in the "headroom" column of the screen | §7 | none |
| A-K6 | Limited availability of validated models for complex polymer and coating systems | Our model's thirteen checks against known benchmarks (section 10) are offered as one example of how a model earns validation | §10 | none |
| A-K7 | Difficulty correlating characterisation data with coating properties and field performance | Addressed as a residual risk per idea in the screen | §7 | none |
| A-K8 | Model validation, experimental verification and reproducibility | Our model's checks, in model table T3, are exactly this kind of validation, reported in full in section 10 | §10 | none |
| A-K9 | Managing uncertainty and reliability outside the trained data space | Addressed by the tornado sensitivity in section 21 and model table T14 for our own model, and as a residual risk for the AI ideas in the screen | §21 | none |
| A-K10 | Scalability and industrial implementation barriers | Scored in the "scale" column of the screen | §7 | none |
| A-K11 | Solutions must be scientifically sound, computationally efficient, commercially viable and applicable to real materials development | This is the exact rubric the eight-idea screen uses | §7 | none |
| A-S1 | Develop a technology, methodology, platform, workflow, model, digital tool or framework using modelling, simulation, AI, machine learning, data science or advanced characterisation | The eight ideas and our own optical model both sit inside this scope | §7, §10 | none |
| A-S2 | As G2 | As G2 above | §7 | none |
| A-S3 | As G3, with emphasis on literature-reading over a built proof of concept | Our optical model is itself a built proof of concept for this case, flagged as such in section 7 | §7, §10 | none |
| A-S4 | The idea may focus on architectural, industrial, automotive, protective, powder, wood, floor or specialty coatings, waterproofing, adhesives or construction chemicals | Our optical model is built for architectural interior emulsions specifically, named in section 10 | §10 | none |
| A-Q0 | The solution should accelerate discovery, prediction or formulation development; nine questions follow | The nine questions below are addressed at survey depth plus one direct example (our own model) | §7, §10 | none |
| A-Q1 | Which category of characterisation, modelling, simulation or AI does the solution belong to | Our model is a physics-based optical and colour model, not a machine-learning model, named explicitly as such | §10 | none |
| A-Q2 | What specific material or process challenge or structure-property prediction is addressed | Predicting a film's contrast ratio and luminous reflectance from its pigment loading and film architecture | §10 | none |
| A-Q3 | Describe the proposed characterisation techniques or methodology | Mie scattering theory, Percus-Yevick structure factor, Kubelka-Munk and Saunderson film optics, described in plain words then equations in section 10 | §10 | none |
| A-Q4 | What makes the solution unique compared with existing approaches | It joins particle-level optics to a two-coat film and colour pipeline in one script, with its own checks, rather than treating each step separately | §10 | none |
| A-Q5 | What scientific principles or computational methods underpin the solution | Listed in A-Q3's answer; full equations are in section 10 | §10 | none |
| A-Q6 | How will the solution be validated; use literature, simulation or experimental data only, not assumed numbers | Thirteen checks against published benchmarks, for example the Bohren and Huffman Mie-scattering reference value, reported in model table T3 | §10 | none |
| A-Q7 | What measurable success criteria will be used | The model's own pass or fail checks and its agreement with the premium baseline's known optical range (contrast ratio, luminous reflectance) in model table T3 | §10 | none |
| A-Q8 | How will data confidentiality and security be ensured | Not directly applicable to our open, literature-based model; addressed qualitatively for the federated-learning idea in the screen | §7 | none |
| A-Q9 | How can the technology be integrated into industrial R&D | Our model is a single deterministic script a formulator could run alongside existing lab protocols, described in section 10 | §10 | none |
| A-T1 | A list of named characterisation techniques (Fourier-transform infrared spectroscopy, Raman, nuclear magnetic resonance, and others) | Reflected per idea in the screen where a technique is specifically relevant | §7 | none |
| A-T2 | Polymer structure-property relationships | Reflected in the Bayesian-optimisation and graph-neural-network ideas in the screen | §7 | none |
| A-T3 | Paints and coatings structure-property-performance relationships, including optical properties such as colour, gloss and opacity | Our own model directly answers the optical-property case of this list | §10 | none |
| A-T4 | Application of modelling, simulation, AI and characterisation to formulation and material design | Reflected across all eight screened ideas and our model | §7, §10 | none |
| A-R1 | Harvard Digital Innovation and Transformation case, Asian Paints: India's biggest data-science company that sells paint | Used as context for Asian Paints' own data-science capability in section 3 | §3 | none |
| A-R2 | American Coatings Association, leveraging big data, AI and machine learning in coatings | Context reference | §7 | none |
| A-R3 | Martin and Audus, ACS Polymers Au, emerging trends in machine learning, a polymer perspective | Context reference; the brief's own A-R3 and A-R8 citations appear to be the same paper under two IDs, noted once here, not silently merged | §7 | none |
| A-R4 | Intellegens, machine learning, polymers white paper | Context reference | §7 | none |
| A-R5 | ACS Applied Polymer Materials article | Context reference | §7 | none |
| A-R6 | Nature Reviews Materials, design of functional and sustainable polymers assisted by AI | Context reference | §7 | none |
| A-R7 | Polymer Journal, data-driven approaches for structure-property relationships | Context reference | §7 | none |
| A-R8 | ACS Applied Polymer Materials article (see A-R3 note on the brief's own duplicate citation) | Context reference | §7 | none |
| A-R9 | npj Computational Materials, explainable machine learning in materials science | Context reference | §7 | none |
| A-R10 | npj Computational Materials, accelerating materials discovery with AI, high-performance computing and robotics | Context reference for the self-driving-lab idea in the screen | §7 | none |
| A-R11 | Frontiers in Materials article | Context reference | §7 | none |
| A-R12 | Nature Computational Science, advancements and challenges of digital twins in industry | Context reference for the weathering digital-twin idea | §7 | none |
| A-R13 | Archives of Computational Methods in Engineering, AI in materials by design | Context reference | §7 | none |

## 2. The answer on one page: keep rutile, move it into air, seal the air in, and use 39% less TiO2

**Answer.** Our recommendation for Case Study 1 is to keep rutile TiO2 exactly as it is, stop looking for a new white pigment, and instead change where the air sits: put it in the film, as a porous base coat above its critical pigment volume concentration, then seal that air in with a thin topcoat whose latex particles are too large to enter the base coat's pores. In the model's base case this reaches the same whiteness and hiding target as a premium interior emulsion, contrast ratio at least 0.998 and luminous reflectance at least 90.7, with 24.8 g of TiO2 per m² against 40.8 g today, a 39% cut `[T12]`. Nothing here has been measured on a real panel; the number is a model result, stated honestly as one throughout this document, and a lab programme that would prove it is planned, not run, in section 22.

### 2.1 The obvious answer, and why it fails

The brief itself invites a search for a new white pigment: it names polymeric opacifiers, novel pigments, nano-engineered pigments, photonic band-gap materials and nature-inspired materials as domains to explore `[W-S1]`, and it specifically warns against the already-reported route of spacers for TiO2 and high loading of barium sulphate `[W-S5]`. Asian Paints needs less TiO2 per m² of painted wall without losing whiteness, durability or the two-coat practice India's painters already use, and without building a new supply chain for an unproven pigment. We tested every obvious particle-level and substitute-pigment answer under one model and one test, summarised in table T8 of the model and explained row by row in section 12 of this document: zero of the five TiO2-free designs reach premium brightness at a practical loading, and nor does rutile in its own air pocket (yolk-shell) `[T8]`. Zinc sulfide reaches 90.4, zirconia 88.0, organic crystal spheres 84.1, and barium sulfate at high loading only 63.2, each against a target of 90.7 `[T8]`. The two commercial particle-level ideas that do reach brightness, a hollow polymer opacifier and a nano-air binder, save only 9% and 11% of TiO2 respectively, and hollow rutile spheres save 20%, each under the same test `[T8]`. The limit is a volume budget rather than a chemistry problem: a thin air gap around a rutile particle actually lowers its scattering (10.5, 9.9 and 10.4 units per cubic micrometre for 20, 40 and 80 nanometre gaps, against 11.7 bare) `[T5]`, and a thick air gap that does raise scattering per gram of TiO2 costs nine times the film volume per particle `[T5]`. The same arithmetic limits every design that gives a particle its own air pocket.

| Do not | Do |
|---|---|
| Chase a new white pigment to replace rutile TiO2 | Keep rutile TiO2, and change what surrounds it in the film |
| Give each particle its own air pocket (yolk-shell, hollow rutile, hollow polymer) | Put the air between particles, in a base coat formulated above its critical pigment volume concentration |
| Promise a brand-new supply chain, plant or raw material | Use the same rutile, the same mills, the same two-coat painter practice already standard in India |

### 2.2 The recommendation and the design rule

The recommendation is a two-coat system. The base coat is formulated above its critical pigment volume concentration, so it is 35% air by volume in the model's base case `[A05]`, `[T9]`; it carries the same rutile TiO2, at a lower pigment volume concentration than today's premium film (9.1% against 18%), plus a fine chalk extender that, sitting in air rather than binder, becomes a scatterer in its own right `[T9]`. The medium each rutile particle sees is no longer pure binder at an optical index of 1.49; it is a Bruggeman mix of air and the little binder that remains, at an index of 1.18 in the base case `[T9]`. A thin seal coat, at least 15 micrometres under the model's floor assumption `[A28]`, then sits on top; its latex particles are deliberately sized too large to infiltrate the base coat's open pores, so the porous structure survives application rather than collapsing into a conventional film `[T9]`. Painters apply this exactly as they apply any premium two-coat system today: no new tool, no new training, no third coat.

### 2.3 Three reasons each side

| Side | Quantitative reason | Strategic-fit reason | Feasibility reason |
|---|---|---|---|
| Do not chase a new pigment | No substitute reaches 90.7 at practical loading; the best particle-level ideas save only 9% to 20% of TiO2 `[T8]` | A new pigment means a new raw-material qualification, a new supplier relationship and a new regulatory file, none of which Asian Paints needs | A particle-level air design fights a volume budget that worsens, not improves, as the air pocket grows `[T5]` |
| Do move the air into the film | The air-network design saves 39% of TiO2 in the base case, two to four times the best substitute `[T12]`, `[T8]` | Same rutile, same mills, same raw-material suppliers, same TiO2 duty exposure reduced rather than restructured | Same two-coat practice, interior emulsions first, no painter retraining, no new plant `[T9]` |

### 2.4 The moneyshot

| Figure | Base case | Bear case | Bull case |
|---|---|---|---|
| TiO2 saving per m² of two coats | 39% | 15% | 65% |
| TiO2 per m², reference to proposal | 40.8 g to 24.8 g `[T12]` | 40.8 g to 34.5 g `[T12]` | 40.8 g to 14.3 g `[T12]` |
| Materials cost per m², reference to proposal | ₹18.4 to ₹12.0, −34% `[T12]` | ₹16.3 to ₹13.7, −16% `[T12]` | ₹20.4 to ₹10.0, −51% `[T12]` |
| Asian Paints scale, TiO2 avoided a year (estimate) | 7,551 t `[T13]` | 928 t `[T13]` | 25,934 t `[T13]` |
| Asian Paints scale, net materials saving a year (estimate) | ₹298 Cr `[T13]` | ₹38 Cr `[T13]` | ₹1,021 Cr `[T13]` |

The single number we lead with on the deck is **39% less TiO2**: 40.8 g to 24.8 g of TiO2 per m² of two-coat film, at the same contrast ratio of 0.998 and the same luminous reflectance of 90.7 as the premium baseline `[T12]`, `[T7]`. The arithmetic behind the percentage is direct: a cut of 16.1 g (40.8 g minus 24.8 g) over a base of 40.8 g is 0.394, rounded to 39%. At Asian Paints' estimated scale (section 21 derives the estimate in full), this base case is about ₹298 Cr a year in net materials saving and about 7,551 t of TiO2 not bought `[T13]`, a figure we also treat honestly as an estimate carrying its own bear-to-bull range, ₹38 Cr to ₹1,021 Cr `[T13]`, because the biggest uncertainty in the whole model is what actually surrounds the rutile particle once the paint dries, a tornado-sensitivity finding detailed in section 21 and model table T14.

### 2.5 What would change our mind

| Trigger | What it would mean | Where it is tested |
|---|---|---|
| Measured porosity of a real air-network base coat falls well outside 25% to 45% | The base-case saving would move toward the bear case or below it, since porosity is one of the two biggest sensitivities in table T14 | §21, §22 |
| What surrounds the rutile turns out to be mostly binder-wetted rather than a Bruggeman air-binder mix | The saving falls to about a fifth, the single biggest swing in the sensitivity table `[T14]` | §4 (honest reading), §16, §21 |
| A seal coat thinner than about 12 to 20 micrometres fails to form a continuous, scrubbable skin over the porous base | The two-coat practice itself would need a third coat, undermining the "no new step for the painter" claim | §14, §18 |
| A verified patent search finds our exact combination (air-continuous base coat under a size-excluding seal coat for whiteness) already claimed | The uniqueness claim in section 11 would need to be withdrawn or narrowed, per the update protocol in section 5.3 of this plan | §11 |
| A published, India-specific TiO2 landed price or raw-material cost share moves well outside the model's bear-to-bull assumption ranges | The cost and scale figures in sections 20 and 21 would be rerun, and every slide quoting them updated together, never patched in one place | §20, §21 |

### 2.6 The 150-word version

Asian Paints' costliest raw material is rutile titanium dioxide, and most entrants to this challenge will spend their effort looking for a replacement pigment. In our model, no replacement reaches premium whiteness at a practical loading, and no particle-level air trick, hollow spheres, yolk-shells or a nano-air binder, saves more than a fifth of the TiO2 a premium white film needs. What surrounds the particle turns out to matter more than the particle itself. Rutile scatters more light per unit volume in a low-index medium than in binder. Our proposal keeps the same rutile, at the same crystal size, in a base coat formulated above its critical pigment volume concentration so the medium around each particle is mostly air, then seals that air in with a topcoat whose latex cannot infiltrate the pores. In our model this matches premium brightness and hiding with 39% less TiO2, using the same mills, the same rutile, and the two coats painters already apply.

## 3. Asian Paints spends about ₹3,000 Cr a year on TiO2, its single most exposed raw material

**Answer.** Asian Paints Limited, India's largest decorative paint company, reported consolidated revenue of about ₹35,500 Cr in FY26. In our model, about 56.3% of that revenue goes to raw materials and packaging, and titanium dioxide (TiO2) takes a 15% base-case share of that spend [A21], [A22], [A23]. Multiplying the three figures gives a TiO2 bill of about ₹2,998 Cr a year [T13], larger than the entire revenue of many mid-sized Indian chemical companies and about 24 times Asian Paints' own FY2025-26 research and development (R&D) spend of ₹124.9 Cr [A17]. Few raw materials carry this much balance-sheet exposure to a single country's export policy: 57% of India's titanium dioxide demand during the Directorate General of Trade Remedies (DGTR) investigation period came from China [B07]. The rest of this section lays out the revenue base, the TiO2 bill arithmetic, Asian Paints' white and near-white product range and painting system, its direct competitors, and the R&D context Alchemy sits inside.

### 3.1 Revenue and gross margin, FY24 to FY26

Asian Paints' consolidated revenue line moved only modestly across the three years our model's assumptions are benchmarked against, while gross margin compressed. The table below uses the income-statement series that gives revenue, cost of revenue and gross profit on one consistent basis, so that FY24 and FY25 can be compared like for like, and adds the FY26 figure from a separate results release that uses a different revenue line ("revenue from operations").

| Fiscal year | Consolidated revenue (₹ Cr) | Cost of revenue (₹ Cr) | Gross profit (₹ Cr) | Gross margin |
|---|---|---|---|---|
| FY24 | 35,437.5 | 20,261.1 | 15,176.4 | 42.83% |
| FY25 | 33,905.6 | 19,709.0 | 14,196.7 | 41.87% |
| FY26 | about 35,583.5 (revenue from operations) | not independently confirmed | not independently confirmed | not independently confirmed |

*FY: fiscal year, the twelve months ending 31 March of the stated year. Cr: crore, 1,00,00,000 (ten million).*

Two things follow from this. Revenue fell in FY25 and only partially recovered in FY26, consistent with the "subdued demand environment" Asian Paints cited for the first quarter of FY26 [A11]. And gross margin fell by about one percentage point from FY24 to FY25 (42.83% to 41.87%) [A06], [A05], before FY26's raw-material trend is even confirmed, in the same direction a rising TiO2 cost would push it. We did not find a clean, single, dated raw-material cost line, in rupees or as a percentage of sales, for FY24, FY25 or FY26 in any source opened for this research [A10]; one aggregator carries an unlabelled "Raw Material Consumed" figure whose basis could not be confirmed, so we do not use it. Instead we rely on the model's own assumption, A22, that raw material and packaging cost is 56.3% of revenue, derived from a one-minus-gross-margin relationship, and we treat this as a modelled estimate, not a measured figure. The FY26 gross margin A22 is benchmarked to was not independently reconfirmed in Lane A's search. We flag that gap rather than paper over it, and it is one reason we present the TiO2 bill as a labelled estimate with a bear, base and bull range rather than a single number.

### 3.2 The TiO2 bill: an estimate, with its arithmetic

The model estimates Asian Paints' annual TiO2 bill by multiplying three figures: consolidated revenue, the raw-material-and-packaging share of revenue, and TiO2's share of that raw-material bill. In the base case:

₹35,500 Cr (revenue) [A21] × 0.563 (raw material and packaging share) [A22] × 0.15 (TiO2 share of the raw-material bill) [A23] = ₹2,998 Cr [T13]

(35,500 × 0.563 = 19,986.5; 19,986.5 × 0.15 = 2,997.98, rounded to ₹2,998 Cr in the model's own table.)

Dividing this bill by the landed price assumption of ₹250 per kilogram (kg) [A13] gives the tonnage: ₹2,998 Cr equals ₹29,98,00,00,000; divided by ₹250 per kg, that is 1,19,92,00,000 grams of price-weighted spend, or about 1,19,920 tonnes (t) of TiO2. The model's own run states this more precisely as 1,19,919 t [T13]; the small difference comes from the model's more granular, per-category calculation rather than this single division. We present only the base-case arithmetic here. The bear (₹1,999 Cr, 99,932 t) and bull (₹3,997 Cr, 1,33,243 t) figures in the table below come directly from the model's own scenario run, not from repeating this division with different inputs, because the model varies several assumptions together (A13 price, A23 TiO2 share, A24 addressable share, A25 adoption), not one at a time.

The next table sets out all three scenarios, which we carry through the rest of this document and the deck under the naming convention used throughout: bear, base and bull.

| Scenario | TiO2 bill | TiO2 tonnes | TiO2 saving (₹, base-case comparison) |
|---|---|---|---|
| Bear | ₹1,999 Cr | 99,932 t | ₹19 Cr |
| Base | ₹2,998 Cr | 1,19,919 t | ₹189 Cr |
| Bull | ₹3,997 Cr | 1,33,243 t | ₹778 Cr |

*Cr: crore. t: tonnes. "TiO2 saving" is the modelled TiO2 cost avoided at the stated scenario's adoption level, explained in full in section 21.*

Even the bear case puts almost ₹2,000 Cr a year through the TiO2 line. That is why we call TiO2 "the single most exposed raw material" in this section's title: no other single input to a decorative paint carries comparable rupee exposure to one country's trade-remedy cycle, which section 4 discusses in full.

Three cross-checks temper this estimate. First, two secondary sources give a materially different scope for TiO2's cost share: one piece puts TiO2 alone at roughly 20% of raw-material cost [A56], while a 2022 article puts all crude-oil-linked inputs, of which TiO2 is one, at about 40% of input costs [A54]. These are different scopes (TiO2 alone against all crude-linked materials) from different years, and we do not conflate them; our model's base-case 15% sits inside the lower end of this range, and our range runs 10% to 20% bear to bull [A23]. Second, we found no current (FY24 to FY26) management statement specifically on TiO2 price inflation from a primary earnings call or investor presentation; the most recent such statements we located are from 2011, 2019 and 2022 [A53], [A54], [A55], so we do not claim a current company-stated figure, only a modelled one. Third, Asian Paints' own decorative market-share figures, needed to size the addressable TiO2 volume in section 21, conflict across secondary sources by as much as twelve percentage points (a range from 47% to 59%) [A61], [A63]. Any scale estimate in this document should be read as resting on that range, not on a single point figure.

### 3.3 Products and process: putty, primer and two coats, not one

Asian Paints sells white and near-white interior paints across three price tiers: Tractor Emulsion at the value end, Apcolite in the middle, and Royale at the premium end, each adding washability, finish and stain resistance as the price rises [A25], [A26], [A27]. Even the value tier calls for more than a single coat. The recommended system is a water-thinnable interior primer, two coats of acrylic wall putty, a second primer coat, then two coats of the topcoat emulsion [A28]. Our model's two-coat, 30 micron (µm)-per-coat assumption [A01] is built against this exact system, which is why our recommendation in section 2 works inside the painter's existing practice rather than asking for a third coat or a new tool.

Warranty tiers track the price ladder: up to ten years for super-luxury lime-based paints, eight years for luxury emulsions, six years for premium emulsions and four years for economy emulsions [A29]. Several FY2025-26 product launches sit directly in the white and near-white space our recommendation targets. Nilaya Arc is a lime-based, silicon-reinforced paint. The "Ultraa" range (Ace Ultraa, Apex Dust Proof Ultraa, Tractor Emulsion Ultraa) is claimed by the company to give 10% additional coverage per litre over the prior formulation [A30]. And APEX Ultima, Suprema Air-O-Clean is an exterior coating that uses photocatalytic technology to cut airborne sulphur oxides (SOx) and nitrogen oxides (NOx), and won the FICCI Chemicals and Petrochemicals Award 2025 for Best Green Product of the Year [A31]. None of these products is described, in any source we opened, as using an air-network base coat of the kind this document proposes. Our search found no evidence that Asian Paints has already built the specific architecture in section 14, which supports, without proving, the novelty claim we return to in section 11.

Two upstream investments matter to any solution that touches TiO2 or binder volumes. The first is a white cement plant in Fujairah, United Arab Emirates (UAE), commissioned through the company's subsidiary Asian White Inc. FZE with a designed clinker capacity of 800 tonnes per day; it began commercial production in October 2025, about a year later than an earlier-reported October 2024 target [A33], [A36], [A38]. White cement feeds the company's wall-putty business rather than emulsion paint directly, but it signals a willingness to integrate backward into white, mineral-based inputs. The second is vinyl acetate-ethylene (VAE) emulsion polymer, where commercial production began at the Dahej, Gujarat facility on 17 September 2026, at an installed capacity of 1,50,000 tonnes per annum (t.p.a.) intended mainly for the company's own paint plants; a parallel vinyl acetate monomer (VAM) plant of 1,00,000 t.p.a. was still under construction at the same filing date [A39], [A40], [A41]. This is the binder backward-integration context our recommendation's acrylic seal coat (section 14) would eventually sit alongside. An earlier-reported, larger-scope plan for the same site (3,60,000 t.p.a. VAE, 2,20,000 t.p.a. VAM) appears to be a pre-revision figure; the FY2025-26 annual report's 1,50,000 / 1,00,000 figures are the more authoritative, filed numbers [A41], [A43].

### 3.4 Competitors and market structure

The Indian decorative paint market is best described, cautiously, as a concentrated oligopoly now under structural pressure. One 2025 brokerage commentary, predating the two deals below, put four incumbents (Asian Paints, Kansai Nerolac, Berger and Akzo Nobel India) at a combined 70% share, with the remaining 30% spread across nearly 3,000 smaller manufacturers [A64]. Two events since have reshaped that picture.

| Event | Detail | Tag |
|---|---|---|
| Birla Opus entry | Grasim's Birla Opus reports a decorative revenue share of "over 10%" (May 2025); by installed capacity, a different metric, it reports over 21% of total industry capacity and about 24% of India's installed paint-making capacity across five plants, becoming the second-largest player by capacity | [A61], [A62] |
| JSW Paints to acquire Akzo Nobel India | 27 June 2025: JSW Paints agreed to acquire up to 74.76% of Akzo Nobel India for up to ₹8,986.1 Cr (enterprise value about €1.4 billion, an EV/EBITDA multiple of about 22x), which coverage says would make JSW Paints the fourth-largest player in India by market share, subject to Competition Commission of India approval | [A58], [A59], [A60] |

*EV/EBITDA: enterprise value divided by earnings before interest, tax, depreciation and amortisation, a valuation multiple.*

Two separate, large capital events, a conglomerate-backed new entrant and a strategic acquisition of a multinational's Indian unit, are compressing the incumbents' combined share inside an eighteen-month window. That is the backdrop against which Asian Paints must defend margin on its single largest raw-material line. Asian Paints' own decorative share estimates range from about 47% to about 59% across secondary sources, none of them an audited company disclosure or an independent syndicated market tracker [A61], [A63], [A67]; Kansai Nerolac is given at 15% to 17% depending on source and date [A65]; and we found no company-sourced share percentage at all for Berger Paints or Indigo Paints in the decorative segment for FY24 to FY26 [A66]. We present these as ranges with their sources named, per the gap note in Lane A, rather than as single point figures.

Asian Paints' structural advantage, independent of any product innovation, is distribution economics. A Harvard Digital Innovation and Transformation (D3) platform submission states that traditional wholesaler and distributor margins "typically ate into ~20% of the margins" that Asian Paints avoids through direct, data-driven distribution, and that competitors "typically spend 30 to 40% of the retail price on logistics and distribution" against about 3% for Asian Paints [A68]. A related secondary account gives operational colour: about 70,000 dealers restocked several times a day, with about 90% of stock selling within three hours of delivery [I02]. This matters to our recommendation, because a TiO2-saving formulation that keeps the same two-coat system, the same mills and the same dealer network inherits this distribution advantage at zero additional cost. A formulation that required a new coat count or a new application tool would not.

### 3.5 R&D context: where Alchemy sits inside the company

Asian Paints' FY2025-26 "Innovation and Manufacturing Excellence" annual-report section states 181 patents filed to date (22 filed in FY2025-26 alone), 91 patents granted to date (6 granted in FY2025-26), ten international research papers published, more than 250 scientists, ₹124.9 Cr spent on R&D, three "breakthrough" projects, and 25 new decorative-paint products plus 61 new industrial-paint products developed in the year [A17]. New products contributed 16% of FY2025-26 revenue [A18]. The table below places this against two earlier years to show the trend.

| Fiscal year | R&D spend (₹ Cr) | Patents filed that year | Context |
|---|---|---|---|
| FY2020-21 | 82.6 | 20 | 200+ "highly qualified experts" [A20] |
| FY2022-23 | 108.0 | 25 | not stated in the source |
| FY2025-26 | 124.9 | 22 | 250+ scientists, 181 filed to date [A17], [A19] |

*Cr: crore. "Not stated in the source" marks a cell the cited source did not give a figure for.*

R&D spend has grown by about 51% since FY2020-21 (82.6 to 124.9), but the company's scale and complexity, eight manufacturing facilities, a new white-cement plant, a new VAE/VAM facility, appear to have grown faster still, consistent with an R&D function under pressure to do more with a budget that is not keeping pace. The function itself spans polymer science, formulation chemistry, surface physics, instrumentation and data modelling, and draws on a Technology Council of external experts [A21]; its largest facility, the Research & Technology Centre at Turbhe, Navi Mumbai, is described in an earlier case study as the largest dedicated paint-company R&D facility in India [A23]. Alchemy itself, the open-innovation challenge this document responds to, was launched on 16 December 2025 with a keynote from Dr S. Somanath, former Indian Space Research Organisation (ISRO) Chairman; the company reports registrations and submissions up two to three times year on year, including international and doctoral-level entrants [A22]. A non-conventional whiteness solution that needs no new plant, and that uses the company's own forthcoming VAE/VAM capacity, sits inside this innovation agenda rather than alongside it. That strategic-fit argument returns in section 2 and is developed in full in section 23.

### 3.6 Sustainability reporting: a second lens on raw-material intensity

Asian Paints' own Business Responsibility and Sustainability Report (BRSR, the mandatory Indian disclosure format covering environmental, social and governance performance) gives a second, independent reason to expect pressure on raw-material cost and footprint, even where the exact TiO2 line is not broken out. The table below sets out what we could verify.

| Metric | Figure | Status |
|---|---|---|
| Scope 1 emissions reduction since FY2013-14 baseline (decorative manufacturing units) | 34% | One secondary summary states this; a second summary gives 41% for what appears to be the same metric, unreconciled [A46], [A47] |
| Scope 2 emissions reduction since FY2013-14 baseline | 33% | Same source as above; a separate figure of 47% appears elsewhere, unreconciled [A46], [A47] |
| Scope 1 emissions, absolute (one reporting year) | 79,686 tonnes | A standalone FY2025-26 BRSR summary; the same figure pair appears elsewhere labelled FY25, so the exact reporting year is inconsistent across sources [A48] |
| Scope 2 emissions, absolute (same reporting year) | 55,660 tonnes | Same source and same year-labelling caveat as above [A48] |
| Scope 3, largest category (purchased goods and services) | about 2.73 million tonnes of CO2e, FY2023-24 | No stated Scope 3 reduction target or net-zero commitment with a target year was found in any source opened [A49], [A50] |

*BRSR: Business Responsibility and Sustainability Report. CO2e: carbon dioxide equivalent, a unit that expresses the warming effect of a mix of greenhouse gases as the equivalent mass of carbon dioxide alone. FY: fiscal year.*

Two things here matter to our recommendation. First, Scope 1 and Scope 2 reduction percentages are reported inconsistently even within the company's own disclosure materials (34%/33% against 41%/47% for what appears to be the same underlying metric), which is why we do not quote a single Scope 1/2 figure anywhere else in this document without this caveat attached. Second, purchased goods and services, the Scope 3 category TiO2 and other raw materials sit inside, is already the company's largest indirect emissions category at about 2.73 million tonnes of CO2e, with no stated reduction target. A raw-material substitution that lowers both cost and footprint, as our recommendation does in our model (section 20's 28% CO2e-per-square-metre cut), speaks directly to this largest, currently untargeted Scope 3 category, though we did not find a published figure letting us state what share of that 2.73 million tonnes TiO2 itself represents.

### 3.7 Dahej capacity: the filed figures against the earlier, larger-scope plan

Section 3.3 noted a conflict between an earlier-reported, larger-scope plan for Asian Paints' Dahej VAE and VAM capacity and the figures the company has since filed. The table below lays that conflict out explicitly, since it bears on how much in-house binder capacity will actually be available to a seal-coat formulation of the kind section 14 proposes.

| Source and date | VAE capacity | VAM capacity | Redispersible polymer (RDP) capacity | Status |
|---|---|---|---|---|
| Indian Chemical News, pre-revision scope | 3,60,000 t.p.a. | 2,20,000 t.p.a. | 25,000 t.p.a. | Earlier, larger-scope plan; likely superseded [A43] |
| FY2025-26 Annual Report and Regulation 30 filing | 1,50,000 t.p.a. | 1,00,000 t.p.a. (planned; construction in progress at filing date) | Not stated in the FY2025-26 filing | Primary, filed figures; the more authoritative source [A39], [A40], [A41] |

*VAE: vinyl acetate-ethylene. VAM: vinyl acetate monomer. RDP: redispersible polymer, a powder form of a polymer binder. t.p.a.: tonnes per annum.*

The company's actual, filed binder capacity, 1,50,000 t.p.a. VAE, with VAM still under construction, is well under half the earlier-reported plan's VAE figure. We read this as the project having been phased or rescoped rather than abandoned, since the facility itself is confirmed operating as of the Regulation 30 filing [A39]. We use the filed figures, not the earlier plan, wherever this document discusses Dahej capacity, consistent with the correction logged after Lane A's verification pass.

Exhibit for the deck: the ₹2,998 Cr TiO2 bill, the 57% China-import-share figure and the two-coat system (primer, putty, two topcoats) feed slide 2/5 ("THE CHALLENGE") and the cover's hub numeral.

---

## 4. Case Study 1 landscape: whiteness is a scattering problem, and rutile has no equal per unit volume

**Answer.** Whiteness in a coating is fundamentally a scattering problem: light must be bounced back out of the film before the film's own binder or the substrate beneath it can absorb it, and no commercially available pigment scatters more light per unit volume than rutile titanium dioxide (TiO2) [T4]. Rutile's advantage comes from a refractive-index mismatch against whatever surrounds it, not from any special chemistry. That is why, in our model, moving the same rutile into a lower-index surrounding, air rather than binder, raises its scattering by a factor that reaches 1.52 times at a pure-air limit [T4]. India's titanium dioxide market sits inside an active trade-remedy cycle, with 57% of demand met by Chinese imports during the investigation period and an anti-dumping duty that has been imposed, quashed by a court, and re-recommended within an eighteen-month span [B07], [B19], [B02]. This section works through the physics in plain words, then the regulatory and supply timeline, then the brief's five named challenges (W-K1 to W-K5), one by one.

### 4.1 The physics of whiteness, in plain words

A white coating looks white because it scatters incoming visible light back out in all directions without absorbing much of it. What sets how much scattering a pigment particle produces comes down to three things: the mismatch between the particle's refractive index and the surrounding medium's refractive index, the particle's size relative to the wavelength of light (around 400 to 700 nanometres (nm) for the visible range), and how crowded the particles are, since a particle's neighbours interfere with its own scattered field once particles sit closer than roughly one wavelength apart. Rutile TiO2 has an unusually high refractive index, around 2.75 at the middle (550 nm) of the visible spectrum against acrylic binder's roughly 1.49 [T2]. More than a century after it entered commercial use, it remains what the brief itself calls "the dominant white pigment" [W-B1].

In our model, we compute how much light a single rutile particle scatters per unit of its own volume, at several different surrounding-medium refractive indices, using Mie scattering theory (the exact electromagnetic solution for a sphere in a uniform medium), benchmarked against a published reference value within 0.1% [T3]. The table below reports the result.

| Host medium's refractive index | Scattering per unit TiO2 volume (inverse micrometre, 1/µm) | Ratio to acrylic binder |
|---|---|---|
| 1.00 (air) | 12.6 | 1.52x |
| 1.10 | 11.7 | 1.42x |
| 1.20 | 10.9 | 1.33x |
| 1.33 | 10.0 | 1.22x |
| 1.40 | 9.2 | 1.12x |
| 1.49 (acrylic binder) | 8.2 | 1.00x |
| 1.55 | 7.6 | 0.92x |

*µm: micrometre, one millionth of a metre. 1/µm: the unit for the model's transport scattering coefficient, interpreted as scattering events per micrometre of path length.*

The same rutile particle, with no change to its own chemistry, scatters 52% more light per unit of its own volume when its surroundings are air rather than binder, and the gain is smooth and monotonic as the surrounding index falls, not a step change at any one value [T4]. This single relationship is the physical lever behind our recommendation in section 2; we return to it in full in sections 9 and 15.

A second effect works against any attempt to simply add more TiO2: crowding. As the volume fraction of TiO2 in a film rises, each particle's neighbours increasingly interfere with its scattered light, so the gain from adding one more unit of TiO2 falls. The table below shows this effect across the full range of loadings our model computes, in both binder and air.

| TiO2 volume fraction | Scattering per unit TiO2 volume, in binder (1/µm) | Efficiency kept, in binder | Scattering per unit TiO2 volume, in air (1/µm) | Efficiency kept, in air |
|---|---|---|---|---|
| 5% | 0.40 | 97% | 0.60 | 95% |
| 10% | 0.78 | 95% | 1.13 | 90% |
| 15% | 1.14 | 92% | 1.58 | 84% |
| 18% (the baseline) | 1.35 | 91% | 1.81 | 80% |
| 20% | 1.48 | 90% | 1.95 | 78% |
| 25% | 1.81 | 88% | not computed above this loading in air | not computed |

*1/µm: inverse micrometre, the unit for the model's transport scattering coefficient. "Efficiency kept" is the share of a lone particle's scattering a particle still achieves once crowded by its neighbours [T6].*

Crowding costs more in air than in binder at every loading shown: at 18%, a particle in binder keeps 91% of its lone-particle scattering, while a particle in air keeps only 80%, nine percentage points more lost to crowding. This is why our recommendation in section 14 does not simply disperse the same 18% TiO2 loading into an air-filled film; it lowers the TiO2 loading inside the air-network base coat (to about 9.1% in the base case, shown in full in section 16) specifically to keep crowding losses manageable while still capturing the 1.52x per-particle gain from section 4.1's table. In our model, at the baseline's 18% TiO2 by film volume, a particle in binder keeps 91% of the scattering efficiency it would have alone in an infinite medium; in air it keeps only 80% [T6]. A premium interior emulsion, at this 18% loading and two coats of 30 µm each, is modelled to hold 40.8 grams (g) of TiO2 per square metre (m²) to reach a contrast ratio (the fraction of incident light reflected back through the film over black, divided by the fraction reflected over white; a value of 1.0 is perfect hiding) of 0.998 and a luminous reflectance (Y, the fraction of visible light reflected, weighted by how the human eye perceives brightness) of 90.9 [T7]. These two numbers, 0.998 contrast ratio and about 90.7 to 90.9 Y, are the targets every alternative architecture in section 12 is held to.

### 4.2 TiO2 market, supply, the DGTR timeline, footprint and regulation

Titanium dioxide reached India's trade-remedy system twice within eighteen months, and the sequence matters because it shows the duty currently sits in a recommended, not a legally enforced, state. The table below sets out the full timeline we could independently verify.

| Date | Event | Tag |
|---|---|---|
| 12 Feb 2025 | DGTR issues its original final findings on TiO2 from China, under Case No. AD (OI)-03/2024 | [B01] |
| 10 May 2025 | Notification No. 12/2025-Customs (ADD) imposes the original anti-dumping duty, covering tariff items 2823 00 10, 3206 11 10 and 3206 11 90 | [B12], [B13] |
| 22 Sep 2025 | The Calcutta High Court, in India Paint Association v. Union of India & Ors (WPO 148 of 2025), quashes Notification No. 12/2025-Customs for a failure of natural justice in the DGTR's disclosure process, and remands the matter to DGTR | [B18], [B19], [B20], [B21] |
| 5 Dec 2025 | CBIC Instruction No. 33/2025 directs field formations to stop collecting the anti-dumping duty on Chinese TiO2 "with immediate effect" | [B15] |
| 3 Aug 2026 | DGTR issues remand final findings, again under Case No. AD (OI)-03/2024, recommending a duty of USD 460 to USD 681 per tonne depending on the named Chinese producer | [B02], [B03] |

*DGTR: Directorate General of Trade Remedies, the Indian government body that investigates and recommends anti-dumping duties. CBIC: Central Board of Indirect Taxes and Customs, which notifies and administers duties. WPO: writ petition order.*

The sequence amounts to a duty that has already been imposed once, struck down by a court on procedural grounds, and then re-recommended at essentially the same rate: the remand findings propose USD 460 per tonne for LB Group's Indian entities, USD 563 for Shandong Jinhai and Shandong Xianghai, USD 609 for Anhui Gold Star, USD 510 for twelve other named cooperating producers, and USD 681 for all other Chinese exporters [B04], [B05], [B06]. We found no primary source confirming that the Ministry of Finance has notified this 3 August 2026 recommendation into legal force as of this document's access date [B17]; the research and the deck both therefore describe the duty as "recommended," not "in force," per the correction logged after Lane B's search.

The scale of China's role in Indian TiO2 supply is large on any reading. Chinese imports totalled 226,869 t during the DGTR investigation period, equal to 57% of Indian demand [B07]; one source separately states India's domestic capacity for rutile-sulphate grade, the grade paint companies use, is "negligible," at about 3,500 to 4,000 t against demand near 3,00,000 t for that grade [B08]. A separate 2023 source states "over 70% of India's TiO2 requirement is being imported" [B31], a figure using a different base year and possibly a different grade mix than the 57% DGTR figure; we keep both rather than averaging them, since the 57% figure is tied specifically to the investigation period's import volume against total demand, while the 70% figure is undated to a specific investigation window [B07], [B08], [B31]. India's named domestic producers together run small plants by global standards. The table below sets out every capacity figure we could verify, each with its date and caveat, because several of these figures are old and none is confirmed current as of this document's access date.

| Producer | Product | Capacity | Caveat | Tag |
|---|---|---|---|---|
| Kerala Minerals and Metals (KMML) | TiO2 pigment | 40,000 t.p.a. | From a 2013 notice; no verified post-2013 figure located | [B23], [B24] |
| Travancore Titanium Products | TiO2 pigment | 45 metric tonnes a day (stated on the company's own site); expansion target of 20,000 t.p.a. | Company-stated, undated within the page | [B25] |
| V.V. Titanium Pigments (formerly Kilburn Chemicals) | TiO2 pigment | 3,960 t.p.a. (an older Kilburn-era figure, sulphate route, anatase grade) | A planned ₹100 Cr investment targeted a coated-rutile line by 2016; current capacity not confirmed | [B27], [B28] |
| Cochin Minerals and Rutile (CMRL) | Synthetic rutile (a pigment feedstock, not finished TiO2 pigment) | 50,000 t.p.a. licensed and installed at its Aluva plant | Feedstock capacity, not comparable to finished-pigment capacity in the rows above | [B32] |

*t.p.a.: tonnes per annum. Cr: crore. "Synthetic rutile" is an upgraded titanium mineral concentrate used as feedstock for pigment-grade TiO2 production, not the finished white pigment itself.*

Every Indian producer's most recent confirmed capacity figure sits well under the roughly 3,00,000 t a year of rutile-sulphate-grade demand the paint, ink and masterbatch sector alone is reported to need [B08], which is the structural reason behind the 57% China-import-share figure this section opened with, and the reason a separate 2023 source states "over 70% of India's TiO2 requirement is being imported" [B31]. None of these four capacity figures changed any assumption in our model, which treats India's TiO2 supply constraint through the price assumption A13 (₹200 to ₹300 per kg bear to bull) rather than through a tonnage-balance calculation, since the available capacity figures are too dated and too inconsistently defined (pigment against feedstock, licensed against installed) to support a reliable balance.

Cradle-to-gate (the environmental footprint from raw-material extraction to the factory gate, before use or disposal) carbon dioxide-equivalent (CO2e) footprint data for TiO2 is thin. The Titanium Dioxide Manufacturers Association (TDMA) reports a 19% decrease in "climate change impact" among its member companies (Chemours, Cinkarna, Kronos, Lomon Billions, Precheza, Tayca and Tronox) between 2012 and 2021, but publishes no absolute CO2e-per-tonne figure, and full life-cycle assessment (LCA) results sit behind member-company access [B45], [B46]. A 2024 Chinese study found the chloride manufacturing route outperforms the sulphate route on most environmental measures except global warming, again without a clean per-tonne figure in the abstract we could open [B47]. Our model's own assumption, A18, sets TiO2's cradle-to-gate footprint at 3.0 kg CO2e per kg (bear 2.5, bull 3.5), a modelled input rather than a figure traced to one named study, and we flag this as a genuine data gap rather than compute a false precision [A18].

Two regulatory developments outside India, while not directly governing the Indian market, are relevant context because they shape the global pigment supply this market imports into. First, the European Union's classification of TiO2 powder as a suspected carcinogen by inhalation was partially annulled by the EU General Court on 23 November 2022 (Case T-279/20), on the finding that the European Commission had erred in assessing the reliability of the underlying study; France's and the Commission's appeals were dismissed by the Court of Justice of the European Union on 1 August 2025, upholding the annulment [B50], [B51], [B52], [B53]. Second, the European Union's food-additive ban on TiO2 (E171), approved 8 October 2021 on the European Food Safety Authority's finding that genotoxicity concerns could not be ruled out, remains in force for the food sector, though it does not apply to the paint and coatings use this document addresses [B56], [B57]. The table below sets out this European timeline in full, since the two developments are easy to conflate but rest on different legal questions (how TiO2 powder is classified as a possible health hazard, against whether it may be used in food).

| Date | Development | Tag |
|---|---|---|
| 8 Oct 2021 | European Union (EU) Member States approve the European Commission's proposal to ban TiO2 (E171) as a food additive, on a European Food Safety Authority finding that genotoxicity concerns could not be ruled out | [B56], [B57] |
| 23 Nov 2022 | The EU General Court partially annuls the Commission's classification of TiO2 powder as a suspected carcinogen by inhalation (Case T-279/20), finding the Commission erred in assessing the reliability of the underlying study | [B50], [B51] |
| 1 Aug 2025 | The Court of Justice of the EU dismisses France's and the Commission's appeals (Joined Cases C-71/23 P and C-82/23 P), upholding the General Court's annulment | [B52], [B53] |
| 10 Dec 2025 | An EUR-Lex notice confirms the relevant row of the EU's harmonised classification table is annulled, so TiO2 powder is no longer classified as a Category 2 carcinogen via inhalation | [B54] |

*EU: European Union. The exact date the European Chemicals Agency (ECHA) removed the classification from its own inventory is itself disputed between two secondary sources (29 August 2025 and 11 September 2025), a conflict we do not resolve [B55].*

The carcinogen classification and the food-additive ban are two separate and separately timed regulatory actions, and that the carcinogen classification has since been annulled on appeal while the food ban remains in force; neither development changes our model's inputs, but both are relevant to the brief's own framing that "the food, cosmetics, and pharmaceutical industries have begun exploring and commercializing benign substitutes for titanium dioxide in response to concerns over its potential health hazards" [W-B2]; our recommendation keeps TiO2 rather than substituting it, so this regulatory pressure is context for why the brief raises the question at all, not a constraint our design must satisfy.

### 4.3 The brief's five challenges, unpacked

The brief names five challenges any whiteness solution must address (W-K1 to W-K5) [W-K0]. We unpack each here in the landscape; section 17 answers each one specifically against our recommendation.

| Challenge | Brief wording | What the landscape shows |
|---|---|---|
| W-K1 | Maintaining high opacity with the alternate material or solution | Section 12's twelve-design screen shows no substitute pigment reaches the premium's brightness target at a practical loading; this is the central physics constraint the whole document works around [T8] |
| W-K2 | Long-term durability and yellowing resistance | TiO2 itself is durable and does not yellow under normal interior exposure; any design that changes the surrounding medium (porosity, seal-coat chemistry) must not create a new durability failure mode, discussed in sections 15 and 24 |
| W-K3 | Dispersion challenges | A porous base coat and a size-excluding seal coat both depend on controlled particle-size distributions (rutile, fine chalk, seal latex); dispersion stability at these size ratios is a real formulation risk, discussed in section 18 |
| W-K4 | Supply and economic challenges | Section 4.2's DGTR timeline and 57% China-import-share figure are the direct evidence for this challenge; section 21 quantifies the TiO2 volume our recommendation removes from this exposure |
| W-K5 | Manufacturing complexity | A base coat and seal coat applied in the two coats painters already apply, on equipment Asian Paints already runs, is the complexity answer we give in section 18, against the alternative of a wholly new particle-synthesis line |

*Each row's "What the landscape shows" cell previews, rather than fully answers, the challenge; section 17 gives the complete claim-evidence-risk-test answer for each.*

Four of the five challenges (W-K1, W-K3, W-K4, W-K5) are directly addressed by evidence already assembled in this landscape section, while W-K2 (durability and yellowing) is a claim about absence of a new failure mode that only a laboratory programme, set out honestly as a plan in section 22, can actually confirm. We do not claim durability data we do not have; this is the honest reading this document carries throughout, first stated in full in section 4 of the plan this research follows and repeated at every point a model result could be mistaken for a measurement.

The honest reading, carried forward from the model's own documentation: our base-case 39% TiO2 saving rests on a Bruggeman mixing-rule assumption for what surrounds the base-coat's rutile particles (a blend of the air and binder that remain after porosity and partial seal-coat infiltration); if the binder instead preferentially wets the pigment surface rather than leaving it in a true mixed medium, the saving falls to about a fifth, the bear-case figure of 15% [T9], [T14]. Nothing in this section or anywhere in this document has been measured on a physical paint panel; every number in this section that comes from the model is a model result, stated as such. Section 22 sets out, honestly and in full, the laboratory programme that would be needed to move any of these five challenges from a modelled answer to a measured one, with named standards, pass marks and decision rules; nothing in that programme has been run, and the research says so in its first sentence, exactly as the plan this document follows requires.

A reader who wants the single sentence this whole section builds toward can take it from the plain-language physics primer alone: whiteness is not a property of a chemical, it is a property of a mismatch, between a pigment's refractive index and whatever sits around it, and every other fact in this section (the DGTR timeline, the producer-capacity table, the European regulatory record) describes the market and policy conditions under which Asian Paints must keep buying the one pigment that wins that mismatch most decisively, titanium dioxide, rather than a reason to look for a different pigment altogether.

Exhibit for the deck: the DGTR timeline table and the 1.52x air-versus-binder scattering ratio feed slide 2/5 ("THE CHALLENGE") and the annexure's A1 model-chain panel.

---

## 5. Case Study 2 landscape: India's cooling problem is humid and dusty, which caps radiative-cooling paints

**Answer.** India's thermal-management problem is large and growing fast: the India Cooling Action Plan (ICAP) projects nationwide cooling demand to grow around eight times its 2017-18 baseline by 2037-38, with building-sector space cooling, the fastest-growing segment, projected to grow nearly eleven times [G01], [G02]. The specific technology class the brief gestures toward most often, radiative-cooling paint, has a real and quantified limit in Indian conditions: a 2024 study using Indian field data found subambient cooling occurred only before 9 a.m., after 4 p.m. and at night at a humid Mumbai test site, not during peak sun hours [G22]. We screen eight candidate ideas on one rubric, name the idea we would choose if Case Study 2 had been our focus, and show, honestly, how our Case Study 1 recommendation offers a secondary benefit relevant to this case.

### 5.1 The India Cooling Action Plan and the scale of the problem

ICAP's reference scenario projects aggregated cooling demand (measured in tonnes of refrigeration, a unit for cooling capacity) to grow around eight times the 2017-18 baseline by 2037-38, with building-sector space cooling growing nearly eleven times, the fastest of any tracked segment [G01], [G02]. Room air conditioners already account for about 80% of installed refrigerant-based space-cooling capacity in the baseline year, rising to about 87% by 2037-38 [G03]. ICAP's stated goals are to cut cooling demand across sectors by 20% to 25%, refrigerant demand by 25% to 30%, and cooling energy requirements by 25% to 40%, all by 2037-38, against a reference-scenario refrigerant-demand growth of five to eight times [G04], [G06]. One secondary account gives India's per-capita cooling energy consumption as about 69 kilowatt-hours (kWh) a person, against a global average of about 272 kWh [G07].

State and city policy is already active in this space. Telangana's Cool Roof Policy, in force from 1 April 2023 to 31 March 2028, targets up to 300 square kilometres (sq km) of cool-roof area statewide, mandatory for government and new non-residential or commercial buildings, and the policy paper estimates this could cut about 20% of the extra energy cost of cooling and lower indoor temperatures by 2.1°C to 4.3°C [G09], [G12], [G14]. Secondary sources disagree on whether the 200/100 sq km Hyderabad-versus-rest-of-state split inside that 300 sq km target is a 2028-29 or a 2030 figure, and on whether the state's own electricity-saving projection is a stated "about 20% of extra cost" or a separately reported 600 million units a year after five years; we keep both without reconciling them [G10], [G11], [G13]. Ahmedabad's Heat Action Plan added a cool-roofs component in 2017, piloted on more than 3,000 low-income homes, with mortality-benefit estimates that range from "nearly 2,300 premature deaths" prevented to "about 1,190 deaths" averted a year, figures that use different bases (a cumulative total against an annual rate) and are not directly comparable [G15], [G16].

### 5.2 Radiative-cooling paint's humidity ceiling, with Indian field data

The single most relevant published study for this landscape is an Indian Institute of Technology (IIT) Bombay paper, Mishra, Sundaram and Sasihithlu, "Cooling Performance of TiO2-Based Radiative Cooling Coating in Tropical Conditions," ACS Omega 2024 [G17]. A 280-micron TiO2/polydimethylsiloxane (PDMS, a silicone polymer) coating at 15% pigment volume reflects over 94% of incident light in the visible and near-infrared range, with a solar-weighted reflectivity of 88.2% once ultraviolet absorption is accounted for, and a weighted atmospheric-window emissivity (the fraction of heat the coating radiates away through the 8 to 13 micron "window" where the atmosphere is relatively transparent) of 92.4% [G18]. In field tests, the coating performed very differently by city and humidity.

| City test date | Average relative humidity | Maximum temperature reduction versus bare aluminium |
|---|---|---|
| Mumbai, 25 Apr 2023 | 83.77% | 7.9°C |
| Nagpur, 12 Jun 2023 | 42% | 9.2°C |
| Prayagraj, 22 Jun 2023 | 45% | 8.1°C |

*PDMS: polydimethylsiloxane, a silicone polymer binder used in the tested coating.*

The coating's peak cooling performance is not simply "better in India" or "worse in India": it is lowest at the most humid site (Mumbai) despite that site having the highest baseline temperature pressure, and the paper's own modelling explains why: higher relative humidity reduces atmospheric transmittance in the 8 to 13 micron radiative window, weakening the mechanism the whole coating depends on [G22]. At the humid Mumbai site specifically, subambient cooling (the coating running cooler than the surrounding air) occurred only before 9 a.m., after 4 p.m. and at night, not during the hours of peak solar load when cooling is most wanted [G22]. The paper's own abstract states there is "a dearth of comprehensive studies examining their performance under tropical conditions" [G23], and a separate 2020 Indian study on passive daytime photonic radiative coolers found the technology performs best at drier sites (Jaisalmer, Delhi), with a 36% cooling-load reduction at low-humidity sites, and explicitly advised against recommending it for monsoon seasons or highly humid cities [G24]. A Hong Kong-tested coating with 95% solar reflectivity and 98% emissivity, both higher than the IIT Bombay coating's figures, still failed to achieve any daytime subambient cooling, evidence that humid environments need an even higher bar than dry-climate studies suggest [G25].

Soiling (dust, pollution and organic buildup on the painted surface) compounds the humidity problem over time, though the strongest published evidence for this is from China, not India. A 2022 Nature Communications paper (the seed reference for this question resolved to this paper, not an India-specific soiling study, a correction logged in Lane G) found a conventional commercial white paint's solar reflectance fell from 0.866 to 0.788 (a 9.0% relative drop) under accelerated soiling simulating about three years of exposure, while the paper's own anti-ageing coating fell only from 0.930 to 0.926 (0.4%) [G27], [G28]. Real six-month outdoor exposure in Chengdu cost the conventional paint 7.6% to 12.9% of its solar reflectance depending on whether the surface was washed, against 0.4% to 1.7% for the anti-ageing coating [G30]. India's own national standard for this product category, IS 17218:2019, "Solar Thermo-Reflective Exterior Coating for Cooling of Roof Top," is currently under revision by a Bureau of Indian Standards working group that lists Asian Paints and Shalimar Paints among its industry members, direct evidence that Asian Paints already participates in setting this specific standard [G39], [G40].

Threshold-setting for cool roofs is itself unsettled across the two most-cited Indian references. The table below sets out the conflict.

| Source | Solar reflectance threshold | Thermal emittance threshold | Likely edition |
|---|---|---|---|
| One secondary source, quoting the Energy Conservation Building Code (ECBC) text directly | at least 0.70 | at least 0.75 | Likely ECBC 2008 (the older edition) [G35], [G37] |
| A second secondary source, mirroring a Bureau of Energy Efficiency training deck, citing ASTM E903-96 and ASTM E408-71 | at least 0.60 | at least 0.90 | Likely ECBC 2017 (the newer edition) [G36], [G37] |
| For comparison, the United States standard ASTM C1483 | at least 0.80 | at least 0.80 | Not an Indian standard; shown for scale | [G41] |

*ECBC: Energy Conservation Building Code, India's national building-energy standard. ASTM: American Society for Testing and Materials. No primary ECBC 2008 or 2017 clause text was independently opened to confirm either row; both rest on secondary quotation.*

The ECBC's own reflectance threshold may have been deliberately lowered between its 2008 and 2017 editions (0.70 to 0.60) while the emittance threshold was raised (0.75 to 0.90), a trade-off consistent with manufacturers finding very high reflectance harder to sustain in Indian field conditions than very high emittance, though we could not confirm this reasoning against either edition's primary text, so we state it as an inference, not a verified fact.

A separate, often-cited thermal-management application, data-centre cooling, illustrates how easily a single headline percentage can mislead once the underlying denominator changes. The table below sets out four different published figures for cooling's share of data-centre energy use.

| Source | Cooling's reported share | Denominator used | Tag |
|---|---|---|---|
| Iyengar and Schmidt, a widely cited breakdown | roughly 30% to 40% | Total facility power | [G42] |
| A 2015 Politecnico di Torino review | up to 40% "in inefficient facilities" | Total facility power | [G43] |
| An older Lawrence Berkeley National Laboratory study of twelve facilities | 23% on average | Total facility power | [G44] |
| An IBM Research paper | about 50% | Information-technology (IT) load specifically, not total facility power | [G45] |

*IT: information technology. These four figures use different facility samples and, in the IBM case, a different denominator (IT load rather than total facility power), so they should never be collapsed into one number.*

The spread is also why we do not quote a single data-centre cooling-share figure anywhere in this document: the four most-cited published figures range from 23% to 50% depending on which facilities were sampled and which base the percentage is measured against, a clear illustration of the "different denominators" caution we apply throughout this document whenever a market-share or energy-share figure is quoted from a secondary source.

Finally, we checked the brief's own four named references for Case Study 2 (T-R1 to T-R4) against what we could independently confirm, since a case brief's own citations should be at least as verifiable as any external claim we make.

| Reference | Brief's citation | What we confirmed |
|---|---|---|
| T-R1 | Zhou, Liu, Liang, Lai, Yan, Renewable and Sustainable Energy Reviews, volume 239, 2026 | Could not be matched to an exact article by this author list and title in this journal; related reviews on the same theme by different authors were found instead [G53] |
| T-R2 | Santamouris (Ed.), "Minimizing Energy Consumption, Energy Poverty and Global and Local Climate Change in the Built Environment," Elsevier, 2019 | Confirmed to exist as a real, findable Elsevier title in bibliographic form; its content was not independently opened [G54] |
| T-R3 | Levinson, Akbari and Berdahl, "Cool Roofs and Pavements: Increasing Solar Reflectance to Reduce Urban Heat Islands" | Could not be located as a standalone document; closely related Lawrence Berkeley National Laboratory Heat Island Group work by the same research group was found instead, including a finding that converting roofs to cool roofs cuts air-conditioning energy use by roughly 20% to 30% on average | [G55], [G56] |
| T-R4 | Alkrush, Salem, Abdelrehim and Hegazi, International Journal of Refrigeration, volume 160, 2024 | Fully confirmed: matching title, journal, volume, pages (246 to 262) and digital object identifier | [G47], [G57] |

Two of the brief's own four Case Study 2 references (T-R1 and T-R3) could not be independently located as standalone, citable documents in our search, while the other two (T-R2, T-R4) were confirmed, T-R4 fully and T-R2 only bibliographically. We state this plainly, as the Lane G verifier's gap notes direct, rather than imply a confidence in the brief's own source list that our search did not support.

### 5.3 Eight ideas for Case Study 2, screened on one rubric

We score eight candidate ideas 1 to 5 on originality, physics or chemistry headroom, proof-of-concept feasibility for a student team, fit with Asian Paints, and scale potential in India, following the same scoring convention used to choose among the four cases in section 8. These scores are the team's judgement, informed by the landscape evidence above, and are labelled as such.

| Idea | Originality | Headroom | Proof feasibility | Asian Paints fit | Scale | Note |
|---|---|---|---|---|---|---|
| Radiative-cooling roof paint (barium sulphate (BaSO4) or porous polymer) | 2 | 3 | 4 | 5 | 4 | A crowded field; the humid Indian sky narrows the atmospheric window this mechanism depends on [G22] |
| Anti-soiling cool roof that keeps its reflectance | 3 | 3 | 4 | 5 | 5 | India's dust and monsoon season decide aged, real-world performance, as the Chengdu data shows [G30] |
| Humidity-recharged evaporative and radiative roof layer | 5 | 4 | 3 | 3 | 3 | Turns coastal humidity into a coolant instead of a liability; a millimetre-scale layer, not a conventional paint film |
| Angle-selective emitter for vertical facades | 4 | 3 | 2 | 2 | 2 | Still at research stage in the published literature we found |
| Temperature-adaptive (thermochromic, vanadium dioxide) coating | 3 | 3 | 2 | 2 | 2 | Cost and complexity; the benefit is strongest only where winters are genuinely cold |
| Phase-change wall putty | 3 | 2 | 3 | 4 | 3 | Latent-heat storage is limited by how thick a putty layer can practically be |
| Cooling coat for two- and three-wheeler electric-vehicle battery packs | 4 | 3 | 3 | 2 | 3 | A real problem, but a niche application for a company whose core business is decorative coatings |
| Our Case 1 air-network white as a near-infrared reflective wall coating | 4 | 3 | 5 | 5 | 4 | T15 shows the same air-network film reflects more near-infrared than the conventional baseline, discussed below |

*BaSO4: barium sulphate. The scoring scale runs 1 (weak) to 5 (strong) on each axis; scores are the team's judgement, not a measured result.*

The humidity-recharged evaporative and radiative layer scores highest on originality and headroom precisely because it does not try to win the atmospheric-window game that humidity already narrows; instead it uses ambient humidity as the cooling fuel. If Case Study 2 had been this team's chosen focus, this is the idea we would develop, tested against American Society for Testing and Materials (ASTM) E903 (solar reflectance), ASTM C1549 (portable solar reflectometer method), ASTM E1980 (solar reflectance index calculation) and a roof-temperature field protocol modelled on the IIT Bombay study's own three-city method [G17].

### 5.4 How our Case 1 film helps here, honestly

Our Case Study 1 recommendation (section 2) was not designed for thermal performance, and we did not run a solar reflectance index test or any near-infrared solar measurement; the figure below is an indicator from the same optical model used throughout this document, computed over a grey substrate rather than under a full solar spectrum, and should be read as a secondary observation, not a thermal-management result.

| Wavelength (nm) | Reference film reflectance | Proposal film reflectance |
|---|---|---|
| 800 | 87.0% | 87.9% |
| 1,000 | 82.8% | 86.3% |
| 1,200 | 73.3% | 79.4% |
| 1,500 | 63.7% | 71.1% |

*nm: nanometre. Reflectance is modelled over a 25% grey substrate, an indicator of near-infrared behaviour, not a solar reflectance index measurement [T15].*

The air-network proposal reflects more near-infrared light than the conventional two-coat baseline at every wavelength shown, with the gap widening from 0.9 percentage points at 800 nm to 7.4 percentage points at 1,500 nm [T15]. The mechanism is the same one driving the whiteness saving: a lower-index, air-rich medium around the rutile scatters more light across a wider part of the spectrum, not only in the visible range the contrast-ratio target is set against. We caveat this heavily: near-infrared reflectance is only one input to a full solar reflectance index, which also depends on ultraviolet and visible-band behaviour and on thermal emittance, none of which this model computes; a genuine thermal-management claim would need the ASTM E1980 test protocol named in section 5.3, not this indicator. We flag this as a bonus worth a dedicated appendix note (section 25) rather than build it into the main Case Study 1 recommendation.

Taken together, this landscape section supports a specific, honest conclusion: India's thermal-management problem is real and large, the published evidence for radiative-cooling paint in Indian conditions is thinner and more humidity-limited than marketing materials for the category generally suggest, and the single most scalable idea in our own eight-idea screen, a humidity-recharged evaporative and radiative layer, works precisely because it does not fight the humidity that defeats the TiO2-based coating this section opened with, and instead treats the same moisture load the IIT Bombay study found weakening the atmospheric window as a resource to be captured rather than a condition to be endured, which is the kind of reframing a genuinely non-conventional idea for this case would need to show, consistent with the brief's own call to look beyond conventional reflective-coating approaches.

Exhibit for the deck: not used on a core slide; the eight-idea screen and the T15 near-infrared indicator are candidates for the talk track per step D1's "Candidates for the talk track" rule.

---

## 6. Case Study 3 landscape: India's renewable carbon is in waste streams and ethanol, not new crops

**Answer.** India's most abundant renewable-carbon feedstocks for a coatings company are not purpose-grown energy crops but waste and co-product streams already being generated at scale: paddy straw that would otherwise be burned, cashew nut shell liquid (CNSL) left over from cashew processing, and the second-generation (2G) ethanol infrastructure being built for fuel blending [H13], [H08], [H33]. Asian Paints has already started down this path with Nilaya Naturals, reporting 6.8% to 7.2% of its raw materials, by two different and unreconciled measures, sourced from renewable or bio-based origins [H04], [H05]. We screen eight candidate ideas for this case, name the one we would choose, and sketch its cradle-to-grave life cycle assessment (LCA) outline.

### 6.1 Asian Paints' own renewable-content position

Asian Paints' technology leadership describes Nilaya Naturals, an interior paint line, as containing "more than 90% content from natural origins" [H01], while a company-affiliated magazine separately describes the same or a related line's ingredients as about 95% natural [H02]; both figures are company-affiliated and neither is independently lab-verified, so we keep both without resolving them. The table below collects every renewable or bio-based content claim we found, each with its own scope, since the claims use at least three different measurement bases.

| Claim | Figure | Scope | Status |
|---|---|---|---|
| Nilaya Naturals natural-origin content | more than 90% | Stated by the company's technology leadership | Company-affiliated, not independently verified [H01] |
| Nilaya Naturals natural-origin content (second figure) | about 95% | Stated in a company-affiliated magazine | Company-affiliated, not independently verified; conflicts with the row above [H02] |
| Whole-portfolio renewable or bio-based content, FY2023-24 | 7.2% | "By volume," excluding water | Primary company disclosure [H04] |
| Whole-portfolio renewable or bio-based content, FY2024-25 | 6.8% | "Of the raw materials used across our product range," excluding water | Primary company disclosure; a different measurement basis from the row above, not reconciled on the company's own pages [H05], [H06] |

*The two whole-portfolio figures (7.2% and 6.8%) are both primary, company-stated disclosures, but for different fiscal years and on two different stated bases ("by volume" against "of raw materials used"), so a reader should not read the year-on-year change as a measured decline.*

At least three distinct renewable-content claims circulate for the same general product family, none directly comparable to the others, which is exactly the kind of statistic our content-integrity rule (section 2.1 of the plan this research follows) asks us to present with its precision and scope intact rather than collapse into one headline figure. The company states it has no published numeric or dated target for renewable or bio-based content, and that "adoption will follow commercial feasibility assessments" [H07]. Nilaya Naturals' packaging is made of ocean-recycled plastic, described as a first for an Indian paint company [H03].

### 6.2 Feedstock availability: straw, shells and ethanol infrastructure

Paddy straw is the largest-volume candidate feedstock by far. Punjab and Haryana together are reported to produce about 29 million tonnes of paddy straw a year, though we found no primary Central Pollution Control Board (CPCB) tonnage table to corroborate this figure, which traces instead to a Commission for Air Quality Management (CAQM) right-to-information reply reported by a newspaper [H18]. The table below sets out the full picture this single CAQM reply gives for Punjab and Haryana together, since the trend (less burning, more utilisation) is itself relevant to how reliably a paddy-straw feedstock stream could be sourced.

| Metric | 2024 | 2025 | Change | Tag |
|---|---|---|---|---|
| Stubble-burning first-information-reports (FIRs), Punjab and Haryana | 6,469 cases | 2,193 cases | down 66% | [H13] |
| Stubble-burning cases, wider National Capital Region | 12,750 cases | 6,080 cases | down about 52% | [H14] |
| Punjab stubble utilisation | 5.96 million tonnes | 7.06 million tonnes | up about 18% | [H16] |
| Haryana stubble utilisation | 1.55 million tonnes | 1.91 million tonnes | up about 23% | [H17] |
| Stubble-burning penalties, Punjab | ₹21.80 Cr | ₹12.58 Cr | down about 42% | [H19] |
| Stubble-burning penalties, Haryana | ₹21.87 Cr | ₹12.65 Cr | down about 42% | [H19] |

*Cr: crore. All figures in this table trace to one CAQM right-to-information reply, reported by a single newspaper, not an independently corroborated primary CPCB dataset.*

Utilisation, straw diverted to productive use rather than burned, rose by double digits in both states even as enforcement penalties fell, which is at least consistent with more straw genuinely being diverted rather than simply going undetected, though a satellite-based estimate in the same source puts the actual fall in burning at only about 30%, against the roughly 90% drop in reported cases for 2025 against 2022, a gap the source itself flags without resolving [H20]. We read this gap as a reason to treat "stubble burning has fallen" as a directionally supported but imprecisely quantified claim, not a settled statistic, when this document or the deck cites it.

Cashew nut shell liquid (CNSL), the oily extract from cashew shells, is a smaller but established Indian feedstock. India's cardanol (a CNSL derivative) exports were about 7,526 t, worth about United States dollars (USD) 6.41 million, in FY2024-25, with major destinations including the United Kingdom, Italy, Japan, South Korea and Belgium [H09]; a patent filing (undated within the filing) states India is "the second largest producer" of CNSL, with annual production "more than 20,000 tonnes" [H10]. We found no reliable, dated, India-specific domestic production tonnage beyond this undated patent claim and the export figures above, which is a genuine data gap.

India's ethanol-blending programme, built for fuel, is the infrastructure a bio-based vinyl acetate monomer (VAM) or vinyl acetate-ethylene (VAE) strategy would ride on. A government minister states average ethanol blending in petrol rose from about 1.53% in 2013-14 to 20% during the 2025-26 ethanol supply year, reaching the "E20" (20% ethanol blend) milestone the Case 3 brief implicitly references in naming this as a feedstock route [H21]. As of mid-2026, the Ministry of Petroleum and Natural Gas states no decision has been taken to raise the blend beyond E20 [H23]. A separate, unreconciled account instead cites 8.1% as the blending rate for 2020-21, a different baseline year than the 1.53% figure above uses, so the exact year-by-year trajectory is not fully settled across sources [H24].

### 6.3 Bio-based binder precedents: three different positions

The three named global binder makers in the Case 3 brief's own domain occupy three different positions on bio-based vinyl-class monomers, worth distinguishing precisely because they are often conflated.

| Company | Confirmed position | Tag |
|---|---|---|
| Braskem | Produces bio-based polyethylene (a different polymer family from VAM/VAE) at commercial scale from sugarcane ethanol in Brazil; completed a 30% capacity increase (200,000 to 260,000 t.p.a.) at its Triunfo plant in June 2023; targets one million tonnes a year of biopolymer by 2030 | [H25], [H27] |
| Wacker | Produces commercial quantities of bio-based VAE dispersions using bio-acetic acid recovered from the woodworking industry, certified in 2018 to a biomass-balance standard, marketed under the VINNECO brand; states renewable resources account for "a limited share" of its global VAE output | [H28], [H29] |
| Celanese | No commercial bio-based VAM product was found; a 2020 "Green Technology" recognition cited for Celanese's VAM relates to low emissions and energy use from a conventional ethylene-based process, not a renewable feedstock | [H30] |

*VAM: vinyl acetate monomer. VAE: vinyl acetate-ethylene, a copolymer emulsion used as a paint binder.*

Only Wacker, of the three, has a confirmed, named, commercial bio-based product in the exact VAE family Asian Paints itself uses as a binder, and even there the company describes renewable resources as a limited share of total output, not the norm. A review article (cited secondhand, attributed to Amann and Minge) proposes that VAM production, whose feedstocks (ethylene and acetic acid) are currently fossil-based, "could be switched to bio-ethanol based renewable, sustainable and CO2-neutral production" as a forward-looking proposal, not an implemented product [H31]. A third-party supplier listing separately describes a bio-based VAM "derived from renewable sources, such as sugar cane or waste materials," country of origin China, unrelated to Celanese [H32]. We flag the Celanese "Green Technology" claim specifically as a case where a sustainability-sounding label does not mean a renewable feedstock, a distinction we think judges would specifically probe.

### 6.4 Lignin and itaconic acid: smaller, more uncertain routes

Indian Oil Corporation Limited's (IOCL) second-generation ethanol bio-refinery at Panipat, built on Praj Industries' technology and inaugurated in August 2022, is stated to process 2 lakh (2,00,000) tonnes of rice straw a year to generate around 3 crore (3,00,00,000) litres of ethanol on a 35-acre site, with bioethanol, lignosulphonates (a lignin derivative) and bio-bitumen named as co-products, though no separately quantified lignin tonnage was found [H33], [H34], [H35]. Itaconic acid, a fermentation-derived monomer sometimes proposed as a renewable substitute for acrylic or methacrylic acid, shows a genuinely unreconciled market-size picture across the three figures we found.

| Estimate | Figure | Basis |
|---|---|---|
| Current global output, one review | about 40,000 tonnes a year | Cited as "nowadays the acid production is around 40,000 tons/year" [H37] |
| Projected output by 2025, same review | 52,000 tonnes a year | Projection within the same source as the row above [H37] |
| An earlier review's market-size estimate | roughly 15,000 tonnes a year | No stated common baseline year against the 40,000-tonne figure above [H39] |
| A separate market-research projection | up to 1,70,000 tonnes a year by 2025 "if specialty-polymer demand rises" | Vendor-adjacent market-research framing, conditional on demand growth that itself is not confirmed [H40] |

A more than tenfold spread (15,000 to 1,70,000 tonnes) separates the four published figures for the same chemical's market size, with no single figure clearly superseding the others; we treat itaconic acid's actual market scale as genuinely unsettled in the published sources we opened, rather than resolve it to a single number. Itaconic acid is produced mainly by fermentation using Aspergillus terreus and related fungal genera; chemical synthesis from citric acid is noted in the literature as not economically or ecologically favourable at scale [H38]. We found no Indian producer names, capacities or prices for cardanol, paddy-straw-derived silica, or itaconic acid specific to the Indian market in this lane, a gap that would need Lane E-style sourcing (materials and production) to close.

We also checked the Case 3 brief's own ten named references (B-R1 to B-R10) for how far each one could be independently confirmed beyond its digital object identifier (DOI, the unique citation string that resolves to a publisher's page) resolving to the correct publisher.

| Reference | Resolves to the correct publisher and journal | Full title, authors confirmed beyond the DOI | Note |
|---|---|---|---|
| B-R1 (Meier et al., 2007) | Yes, Royal Society of Chemistry, Chem Soc Rev | No; publisher page returned an access error | [H41] |
| B-R2 (Auvergne et al.) | Yes, American Chemical Society | Partially; a secondary citation gives 2013 for the same DOI, while the brief cites 2014 | [H42] |
| B-R3 (Petrović, 2008) | Not checked by DOI; confirmed instead by multiple citing papers | Yes, by cross-citation | [H43] |
| B-R6 (Klemm et al., 2011) | Yes, Wiley, Angewandte Chemie International Edition | Yes, matching the brief's citation exactly | [H46] |
| B-R10 (Torgal) | Yes, Taylor & Francis | No; the author name could not be matched to any other source | [H50] |

*DOI: digital object identifier. The table above gives only a sample of the ten references for brevity; the remaining four (B-R4, B-R5, B-R7, B-R8, B-R9) each resolved to the correct publisher and plausible journal/volume but were blocked from full title confirmation by an access error on the publisher's page, the same pattern as B-R1.*

Most of the Case 3 brief's own references resolve correctly at the DOI level but could not be fully confirmed at the title-and-author level because research-publisher pages routinely block automated access; we treat this as a tooling limit of this research pass, not as evidence against the brief's own citations, and we do not use any of these ten references ourselves to support a factual claim beyond what Lane H's own rows (H01 to H40) already establish.

### 6.5 Eight ideas for Case Study 3, screened on one rubric

| Idea | Originality | Headroom | Proof feasibility | Asian Paints fit | Scale | Note |
|---|---|---|---|---|---|---|
| Bio-VAM from India's E20 ethanol, for Asian Paints' own VAM and VAE chain | 2 | 3 | 3 | 5 | 5 | A drop-in route with a mass-balance precedent abroad (Wacker's VINNECO) [H28] |
| Paddy straw to biogenic silica matting and a cellulose rheology modifier | 4 | 3 | 3 | 4 | 4 | Carries an avoided-burning credit in the life cycle assessment, discussed below |
| Cardanol (cashew nut shell liquid) polyols and hardeners | 2 | 3 | 3 | 3 | 4 | Known chemistry with an established Indian supply base [H09] |
| Lignin from 2G ethanol, as an ultraviolet absorber for wood finishes | 3 | 3 | 3 | 3 | 3 | Colour (lignin's natural brown tint) is the limiting factor for a white-coatings company |
| Itaconic acid in place of (meth)acrylic acid in latex | 2 | 2 | 3 | 4 | 3 | Fermentation cost, and an unreconciled market-size picture [H37], [H39] |
| Precipitated calcium carbonate (PCC) made from captured carbon dioxide, as an extender | 3 | 3 | 4 | 5 | 4 | This is the same fine chalk our Case 1 base coat already uses, discussed in section 14 |
| Microbial pigments | 4 | 2 | 2 | 2 | 2 | Light-fastness (resistance to fading under sunlight) is a known limitation |
| Guanine-type organic crystals as whiteners | 5 | 2 | 3 | 3 | 2 | Weak when dispersed in binder (row S09 of our twelve-design screen, section 12), but potentially useful inside an air network (row S12) |

*PCC: precipitated calcium carbonate. The scoring scale runs 1 (weak) to 5 (strong) on each axis; scores are the team's judgement.*

Paddy straw silica and cellulose scores well across originality, Asian Paints fit and scale precisely because it converts an existing environmental liability (stubble burning) into a material input, and because the feedstock volume (29 million tonnes a year in Punjab and Haryana alone) dwarfs cashew-shell or itaconic-acid supply. If Case Study 3 had been this team's chosen focus, this is the idea we would develop.

### 6.6 LCA outline for paddy straw silica and cellulose, if chosen

A cradle-to-grave life cycle assessment for this route would need to cover, at minimum: feedstock sourcing (collection logistics from fields that currently burn the straw, with an avoided-burning emissions credit, since burning itself releases carbon dioxide, particulate matter and black carbon); processing (thermal or chemical extraction of silica and cellulose fractions from the straw, with its own energy input); the use phase (as a matting agent or rheology modifier substituting for a fossil-derived or mined equivalent, likely fine ground calcium carbonate or a synthetic silica, so the comparison baseline must be stated); and end of life (biodegradability of the cellulose fraction, and the silica fraction's fate at a coating's eventual demolition or repainting). We state this as an outline, not a completed LCA; no panel, pilot or laboratory measurement for this route exists in this document, consistent with the brief's own request for "life cycle analysis (cradle to grave)" being a forward-looking deliverable, not a retrospective one, for any idea at this stage [B-Q6].

A final, honest observation on scale: nothing in this landscape section points to a renewable-carbon feedstock that approaches TiO2's roughly 1,19,919-tonne annual Asian Paints demand in volume terms; even the largest candidate stream, paddy straw at about 29 million tonnes a year across just two states, would need to clear processing, logistics and cost hurdles this document has not tested before it could substitute for even a fraction of a fossil-derived or mined input at Asian Paints' own scale. We state this limit plainly rather than imply Case Study 3's idea screen offers a comparably sized opportunity to the one we develop in depth for Case Study 1, and we would rather report this honestly than claim a scale advantage the sourced figures above do not support.

Exhibit for the deck: not used on a core slide; the eight-idea screen is a candidate for the talk track, per step D1's rule.

---

## 7. Case Study 4 landscape: the bottleneck is clean data, not a bigger model

**Answer.** The published evidence in this landscape points to one consistent bottleneck across structure-property prediction for polymers and coatings: not model architecture, which is mature and widely available, but the availability of clean, representative, non-proprietary data at the scale modern machine learning needs [I06], [A-K2], [A-K3]. The largest public polymer database, the National Institute for Materials Science's PoLyInfo, holds more than 500,000 manually curated data points built over several decades, a scale that itself signals how expensive clean polymer data is to produce [I17]. Where industrial competitors have solved the confidentiality half of this problem, as in the pharmaceutical sector's MELLODDY project, they did it by pooling model gradients across ten companies rather than pooling raw data, a precedent directly relevant to Asian Paints' own position relative to its competitors [I38]. We screen eight ideas for this case, name the one we would choose, and show how our own Case 1 optical model is itself a structure-property prediction tool, in the sense the brief asks for.

### 7.1 Public polymer and materials datasets

The table below sets out the three named public resources we investigated.

| Resource | Scale and scope | Access constraint | Tag |
|---|---|---|---|
| PoLyInfo (NIMS) | More than 500,000 data points, manually collected over several decades | No reproduction, republication or distribution to third parties without written permission from the Japanese National Institute for Materials Science (NIMS) | [I17], [I19] |
| Polymer Genome | A web-based prediction platform (not a static database) for band gap, dielectric constant, refractive index, glass transition temperature, density and solubility parameter, with models trained on density functional theory (DFT, a computational quantum-chemistry method) calculations and experiments | Access is through the platform's own prediction service, not a downloadable raw dataset | [I20], [I21] |
| NeurIPS 2025 Open Polymer Challenge | 10,000 polymers labelled on five properties (thermal conductivity, radius of gyration, density, fractional free volume, glass transition temperature); a companion simulator, ADEPT, can generate more than 25 properties | Hosted openly on Kaggle for the competition; ran 16 June to 15 September 2025, drawing about 2,000 teams and 50,000 submissions | [I22], [I23], [I24] |

*NIMS: National Institute for Materials Science (Japan). DFT: density functional theory. NeurIPS: Neural Information Processing Systems, a major machine-learning conference.*

The three resources span a spectrum from a large but legally closed Japanese database, through a platform that serves predictions rather than raw data, to a genuinely open 2025 benchmark competition. The Open Polymer Challenge's own post-competition report is instructive: the strongest entries relied on "careful domain-specific data curation, fingerprint- and descriptor-based feature engineering" with gradient-boosted decision trees, not larger deep-learning architectures, and the report explicitly frames the task as prediction "under realistic constraints that include small data, label imbalance, and heterogeneous simulation sources" [I24], [I25]. This is direct, recent, competition-grade evidence for our central claim: the limiting factor is data engineering and curation, not a bigger or more sophisticated model.

We also checked the Case 4 brief's own thirteen named references (A-R1 to A-R13) for how far each resolved to a confirmed, specific source. The table below gives a sample of what we found, including one notable duplication inside the brief's own list.

| Reference | What we found |
|---|---|
| A-R1 | A Harvard Digital Innovation and Transformation (D3) student-course submission on Asian Paints' data science, not a Harvard Business School case or a peer-reviewed study [I01] |
| A-R3 and A-R8 | Both resolve to the identical American Chemical Society (ACS) Polymers Au volume, issue and page string (3/3/239) and the same digital object identifier suffix; they appear to be the same Martin and Audus 2023 paper cited twice in the brief under two separate reference identifiers, not two distinct sources [I05], [I10] |
| A-R6 | Fully confirmed: Tran, Gurnani, Kim, Pilania, Kwon, Lively and Ramprasad, "Design of functional and sustainable polymers assisted by artificial intelligence," Nature Reviews Materials, 2024 [I08] |
| A-R4, A-R5, A-R7, A-R11, A-R12, A-R13 | Each could not be matched with confidence to a specific confirmed title, author list and digital object identifier; search results return either a different-but-adjacent paper, a title mismatch, or a dead end [I06], [I07], [I09], [I13], [I14], [I15] |

Six of the brief's own thirteen references in this case could not be independently confirmed, and that two of the thirteen (A-R3 and A-R8) appear to be the same paper counted twice; we note this once here, as the correction log instructs, rather than silently correct the organisers' own transcription.

### 7.2 Self-driving labs: a real gap for pigmented coatings

We searched specifically for a self-driving laboratory (an automated, closed-loop system that formulates, tests and iterates with minimal human intervention) built for architectural or decorative paint formulation, and found none [I26]. The closest published work is in adjacent thin-film domains, set out in the table below.

| System | Domain | What it automates | Reported result | Tag |
|---|---|---|---|---|
| A 2025 preprint (Dahms et al.) | Solution-processed electrochromic (colour-changing under voltage) thin films | Spin-coating process optimisation, in a closed loop of data acquisition, image processing, spectral analysis and Bayesian optimisation | Not stated as a single headline number in the abstract | [I27] |
| "Ada" (University of British Columbia) | Ultrasonic spray-coated palladium films | Seven process variables tuned by Bayesian optimisation | Matched vacuum-sputtered conductivity; scaled to an area eight times larger without re-optimisation | [I28] |
| RAISE (2025) | Surface wettability for coatings and textiles | Liquid-formulation mixing linked in a closed loop to contact-angle measurement | The nearest published match to formulation work, though not a pigmented paint system | [I29] |

The underlying automation techniques, closed-loop process control, Bayesian optimisation, automated optical measurement, are already demonstrated across three adjacent coating-like domains, which is why we state the absence of a pigmented-architectural-coating self-driving lab as a real, addressable gap in the literature as searched, not merely a search failure: the building blocks exist and have simply not yet been assembled for this specific product category.

### 7.3 Bayesian optimisation and physics-informed modelling, with numbers

Bayesian optimisation (an optimisation method that builds a statistical model, typically a Gaussian process, of an unknown function and uses it to choose the next experiment that is most informative) is the clearest quantified success story in this landscape for finding good formulations with few experiments. A foundational 2015 paper frames the method's goal plainly: to "find good material designs with the fewest possible experiments," using two acquisition strategies, expected improvement for noise-free evaluations and the knowledge-gradient method for noisy ones [I30], [I31]. A 2021 preprint on covalent-organic frameworks (COFs, a class of porous crystalline materials) for methane storage reports the method finding the optimal material and acquiring 30% of the top 100 ranked candidates after evaluating only about 120 total, out of a much larger design space [I34]. A 2025 Digital Discovery paper applying the same approach to metal-organic and covalent-organic frameworks argues that ranking-focused metrics (recall at N, normalised discounted cumulative gain) are more informative for this kind of screening task than average predictive metrics such as R-squared or mean squared error [I32]; a co-author's secondary account (not independently confirmed against the paper's own results table) claims the pipeline recovers two to three times more top candidates than random machine-learning sampling across multiple datasets [I33].

Physics-informed approaches, which build known physical constraints directly into a model rather than learning them purely from data, show gains specifically in data efficiency rather than in accuracy alone. A 2025 preprint reports a graph neural network trained on physically sampled phonon (lattice-vibration) configurations consistently outperforming the same architecture trained on randomly sampled configurations, despite using fewer data points [I35]. We found two further results (an F1-score of 0.83 across 2,112 inorganic materials for a stability-constrained physics-informed network, and an R-squared above 0.960 with a training-epoch reduction from about 2,400 to about 42 using transfer learning) that we could not independently confirm against a fully identified source, and we mark both UNVERIFIABLE rather than present them as confirmed [I36], [I37]. This caution matters here specifically because the Case 4 brief states explicitly: "Use only literature, simulation, or experimental data. Do not use assumed numerical values" [A-Q6]; an unverifiable secondary-source number is not literature data in the sense the brief means, and we do not present it as such. The table below summarises the confidence level we assign to each Bayesian-optimisation and physics-informed result in this subsection, so a reader can see at a glance which numbers meet the brief's own evidentiary bar.

| Result | Confidence | Why |
|---|---|---|
| Frazier et al. 2015: expected improvement and knowledge-gradient acquisition functions | Confirmed | Primary preprint, methodology description, not a disputed numerical claim [I30], [I31] |
| ChemRxiv 2021: 30% of top 100 covalent-organic frameworks found in about 120 evaluations | Confirmed | Primary preprint with a stated, specific numerical result [I34] |
| Krokidas et al. 2025: ranking metrics preferred over R-squared/mean squared error | Confirmed | Primary journal article's own stated argument [I32] |
| "2 to 3 times more top candidates," attributed to a co-author of the Krokidas et al. paper | Secondary, unconfirmed | Sourced only to a professional-network post, not independently checked against the paper's own results table [I33] |
| F1-score of 0.83 for a stability-constrained physics-informed neural network | Unverifiable | Source title and full context could not be confirmed [I36] |
| R-squared above 0.960 with an epoch count reduced from about 2,400 to about 42 | Unverifiable | Source title and full context could not be confirmed [I37] |

Two of six results in this subsection carry a confidence flag below "confirmed," and we repeat both flags here rather than let the earlier narrative paragraph's caution get lost in the detail.

### 7.4 Data confidentiality: federated learning as the proven industrial precedent

The clearest, largest, most directly relevant precedent for how a company can benefit from pooled data without exposing its own proprietary formulations is MELLODDY, a pharmaceutical-sector federated-learning project. MELLODDY pooled confidential assay data from ten pharmaceutical companies (Amgen, Astellas, AstraZeneca, Bayer, Boehringer Ingelheim, GSK, Janssen, Merck KGaA, Novartis, Servier), covering more than 2.6 billion confidential experimental activity data points across more than 21 million compounds and more than 40,000 assays [I38]. The platform works by cryptographically and securely aggregating the model gradients of all contributing partners after each federated-learning training round, so no partner's raw data ever leaves its own infrastructure, only the mathematical summary of what the local model learned [I39]. A follow-on 2025 method, FLuID, instead has each company train a private local model and use it to annotate a shared public dataset, validated in a real collaboration among eight pharmaceutical companies, though the paper itself names model alignment with each partner's specific chemical domain as a continuing challenge [I40]. A 2025 preprint proposes the same gradient-exchange principle specifically for the chemical industry, with four companies each holding private data on different regions of chemical space jointly training a shared model [I41]. The table below compares the four confidentiality-preserving approaches found in this lane, since they differ in an important practical way: what exactly leaves a company's own infrastructure.

| Approach | What is shared across partners | Scale demonstrated | Tag |
|---|---|---|---|
| MELLODDY | Cryptographically aggregated model gradients only, after each training round | Ten pharmaceutical companies, 2.6 billion-plus data points, 21 million-plus compounds | [I38], [I39] |
| FLuID (2025) | A locally trained private model's annotations added to a shared public dataset, not raw data | Eight pharmaceutical companies, in a real-world collaboration | [I40] |
| Chemical-industry proposal (2025 preprint) | Trained model parameters only | Four companies, proposed, not yet demonstrated at MELLODDY's scale | [I41] |
| On-premises patent approach | Nothing leaves the company's own on-premises system; a local model is trained in place | A single-company patent filing, not a multi-party collaboration | [I42] |

The four approaches span a spectrum from fully multi-party gradient-sharing (MELLODDY, FLuID, the chemical-industry proposal) to a single-company, no-sharing-at-all approach (the on-premises patent). This matters directly to the Case 4 brief's own question on data confidentiality (A-Q8): a federated approach would let Asian Paints benefit from pooled formulation insight across, in principle, several paint companies or raw-material suppliers, without any partner seeing another's actual formulations, the same guarantee MELLODDY already gives ten competing pharmaceutical companies.

### 7.5 Eight ideas for Case Study 4, screened on one rubric

| Idea | Originality | Headroom | Proof feasibility | Asian Paints fit | Scale | Note |
|---|---|---|---|---|---|---|
| Physics-informed Bayesian optimisation for formulations | 3 | 4 | 4 | 5 | 4 | A small-data route; the brief explicitly forbids assumed numerical values [A-Q6] |
| Optical structure-property model of hiding (our own Case 1 pipeline) | 4 | 4 | 5 | 5 | 4 | Already built and checked against a published Mie-scattering benchmark [T3] |
| Weathering digital twin from accelerated and outdoor exposure data | 4 | 3 | 3 | 4 | 3 | Public accelerated-weathering data exists through standards bodies such as the National Institute of Standards and Technology |
| Graph neural network for glass transition temperature and film formation | 2 | 3 | 4 | 3 | 3 | A common entry type in this space, per the breadth of published work found in Lane I |
| Automated ingestion of Fourier-transform infrared spectroscopy, differential scanning calorimetry and gel permeation chromatography data into a lab data model | 2 | 3 | 3 | 4 | 4 | Useful plumbing, not itself a scientific advance |
| Federated learning across R&D sites | 3 | 2 | 2 | 3 | 3 | Answers only the brief's data-confidentiality question (A-Q8), not its core prediction question |
| Literature-mining language model for formulation knowledge | 2 | 2 | 3 | 3 | 3 | A common entry type; the brief specifically warns against reproducing an "AI generated idea without original thinking" [G2] |
| Self-driving lab for dispersion and rheology | 3 | 4 | 1 | 4 | 3 | Hardware-heavy for a student team to prototype credibly |

*The scoring scale runs 1 (weak) to 5 (strong) on each axis; scores are the team's judgement.*

Our own optical structure-property model scores highest on proof-of-concept feasibility, because, unlike every other idea in the table, it is already built, checked against a published benchmark, and demonstrated on a real design problem (the twelve-design screen in section 12), not merely proposed. If Case Study 4 had been this team's chosen focus, this is the idea we would develop further: the optical model joined to Bayesian optimisation, validated against literature, simulation or experimental data, exactly as the brief's own validation requirement specifies [A-Q6].

### 7.6 Our optical model as its own structure-property tool

Section 10 describes our model's full method; here we note, specifically for this landscape section, that the model already does what Case Study 4 asks for in miniature. It takes molecular and formulation-level structure (pigment refractive index and size, pigment volume concentration, binder index, porosity, layer thickness) and predicts coating-level performance (contrast ratio, luminous reflectance, colour coordinates), which is precisely the structure-property relationship the brief's A-Q2 and A-T2/A-T3 ask for, applied to optical rather than mechanical or rheological properties [A-Q2], [A-T2], [A-T3]. It is validated against a named, published benchmark (a Mie-scattering value for a sphere of refractive index 1.55 and size parameter 5.213, matched within 0.1% of the published reference of 3.10543) [T3], which is exactly the kind of literature-based validation the brief's A-Q6 requires and explicitly prefers over "assumed numerical values" [A-Q6]. We do not claim this makes our document a complete Case 4 submission; it is offered here as evidence that the structural pattern Case 4 asks for (characterisation or simulation data in, validated property prediction out) is one this team has already practised, not merely read about.

Exhibit for the deck: not used on a core slide; the eight-idea screen and the model-as-structure-property-tool observation are candidates for the talk track, per step D1's rule.

---

## 8. Choosing the case: Case Study 1 scores highest on headroom, proof and value to Asian Paints

**Answer.** Scoring the four Alchemy problem statements on a single weighted rubric, five criteria carrying weights of 25%, 25%, 25%, 15% and 10%, Case Study 1 (Future of Whiteness Development) scores 4.50, ahead of Case Study 2 (Thermal Management) at 3.30, Case Study 3 (Bio-Based Materials) at 3.25, and Case Study 4 (Advanced Characterisation and AI) at 3.05. The gap between Case 1 and its nearest rival is 1.20 points, driven mainly by Case 1's top marks on proof-of-concept feasibility and value to Asian Paints, both criteria where a computational optical model could be built and checked honestly inside this team's own resources. This section states the rule, shows the arithmetic for all four cases, and explains why the gap is real rather than an artefact of the weights chosen.

### 8.1 The weighted scoring rule

We score each of the four cases 1 to 5 on five criteria. The table below defines each criterion and states its weight, so the rule in section 8.2 can be checked against a plain-language definition rather than a bare label.

| Criterion | Weight | What it measures | Direction |
|---|---|---|---|
| Originality headroom | 25% | How much genuine scientific or engineering room for a non-obvious contribution the case leaves | Higher score is better |
| Proof-of-concept feasibility | 25% | Whether a student team can build and honestly check a demonstration inside a competition timeline | Higher score is better |
| Value to Asian Paints | 25% | How directly the case's best idea would matter to the company's own cost base or strategy | Higher score is better |
| Team capability | 15% | How well this team's own background matches the case's demands | Higher score is better |
| Crowding risk | 10% | How many rival entrants are likely to attempt the same or a similar idea | Higher score means fewer rivals expected (the opposite direction from the other four criteria) |

The three equally weighted criteria, headroom, proof feasibility, value, carry 75% of the total score between them, with team capability and crowding risk together making up the remaining 25%; this weighting choice reflects a judgement that what the case itself allows (headroom, feasibility, value) should matter more than who happens to be scoring it (team capability) or how many other entrants might choose it (crowding risk), though we acknowledge a different, defensible weighting could shift the smaller gaps between Cases 2, 3 and 4. The weighted score is:

weighted score = 0.25 × headroom + 0.25 × proof feasibility + 0.25 × value to Asian Paints + 0.15 × team capability + 0.10 × crowding risk

All five scores are the team's own judgement, informed by the landscape evidence in sections 4 through 7, and are labelled as judgement throughout, not as a measured or externally audited result.

### 8.2 The four cases, scored and shown in full

| Case | Headroom | Proof feasibility | Value to Asian Paints | Team capability | Crowding risk | Weighted score | Arithmetic |
|---|---|---|---|---|---|---|---|
| 1. Whiteness | 4 | 5 | 5 | 4 | 4 | 4.50 | 0.25×4 + 0.25×5 + 0.25×5 + 0.15×4 + 0.10×4 = 1.00 + 1.25 + 1.25 + 0.60 + 0.40 = 4.50 |
| 2. Thermal | 3 | 4 | 3 | 4 | 2 | 3.30 | 0.25×3 + 0.25×4 + 0.25×3 + 0.15×4 + 0.10×2 = 0.75 + 1.00 + 0.75 + 0.60 + 0.20 = 3.30 |
| 3. Bio-based | 3 | 3 | 4 | 3 | 3 | 3.25 | 0.25×3 + 0.25×3 + 0.25×4 + 0.15×3 + 0.10×3 = 0.75 + 0.75 + 1.00 + 0.45 + 0.30 = 3.25 |
| 4. AI and characterisation | 2 | 3 | 4 | 4 | 2 | 3.05 | 0.25×2 + 0.25×3 + 0.25×4 + 0.15×4 + 0.10×2 = 0.50 + 0.75 + 1.00 + 0.60 + 0.20 = 3.05 |

The arithmetic is laid out in full for each case so the ranking can be checked line by line rather than taken on trust. Case 1's advantage comes from two criteria specifically: proof-of-concept feasibility (5, against 3 to 4 for the other three cases) and value to Asian Paints (5, tied only by Case 3's bio-based materials at 4, but still a point behind). The feasibility gap is the more decisive one in practice: a student team can build and genuinely check an optics and radiative-transfer model (Mie scattering, Kubelka-Munk, dependent-scattering corrections) against published benchmarks inside a competition timeline, as section 10 demonstrates; a genuinely new polymer synthesis route (Case 3) or a validated self-driving laboratory (Case 4) cannot realistically be built and tested to the same standard of honesty in the same time, which is exactly why Case 4's own proof-feasibility score (3) sits below Case 1's (5), even though Case 4's headroom and value scores are respectable.

Case 1's value-to-Asian-Paints score of 5 is grounded directly in section 3's ₹2,998 Cr base-case TiO2 bill estimate [T13] and section 4's active DGTR trade-remedy cycle [B02]; no other case's best idea touches a cost line this large or this currently contested inside Asian Paints' own supply chain. Case 1's crowding-risk score of 4 reflects the brief's own text, which explicitly steers entrants away from "conventionally available approaches" such as "whiteness enhancement using spacers for titanium dioxide and use of a high loading of barium sulphate" [W-S5], a signal that the organisers expect many entrants to propose exactly those conventional approaches; our recommendation (section 2) is neither of those two named conventional approaches, which is why we score our own idea's crowding risk favourably rather than assuming it, a judgement call we state plainly rather than hide inside a single number.

The ranking is not close to a tie: the 1.20-point gap between Case 1 (4.50) and the next-highest case, Case 2 (3.30), is larger than the gap between Case 2, Case 3 (3.25) and Case 4 (3.05) combined (0.25 points), which tells us Case 1's advantage comes from a structural difference in what this specific case allows a team to honestly demonstrate, not from a narrow scoring preference that a small weight change would reverse. We checked this by inspection: even equalising the two 25%-weighted criteria where Case 1 leads most (proof feasibility and value) down to Case 2's scores (4 and 3) while keeping Case 1's other three scores unchanged would still leave Case 1 at 0.25×4 + 0.25×4 + 0.25×3 + 0.15×4 + 0.10×4 = 1.00+1.00+0.75+0.60+0.40 = 3.75, still ahead of every other case's actual score, confirming the ranking is not driven by a single fragile input.

The table below sets out this sensitivity check against all three rival cases, each time holding Case 1's weakened score against that rival's own actual score, to confirm the ranking survives a reasonably pessimistic reading of Case 1's advantage.

| Comparison | Case 1's score under the pessimistic adjustment | Rival's actual score | Case 1 still leads? |
|---|---|---|---|
| Against Case 2 (proof feasibility and value lowered to Case 2's 4 and 3) | 3.75 | 3.30 | Yes, by 0.45 |
| Against Case 3 (proof feasibility and value lowered to Case 3's 3 and 4) | 0.25×4 + 0.25×3 + 0.25×4 + 0.15×4 + 0.10×4 = 1.00+0.75+1.00+0.60+0.40 = 3.75 | 3.25 | Yes, by 0.50 |
| Against Case 4 (proof feasibility and value lowered to Case 4's 3 and 4) | 0.25×4 + 0.25×3 + 0.25×4 + 0.15×4 + 0.10×4 = 1.00+0.75+1.00+0.60+0.40 = 3.75 | 3.05 | Yes, by 0.70 |

Case 1 stays ahead of every rival by at least 0.45 points even after deliberately weakening its two strongest criteria down to each rival's own actual level in turn, which is the strongest evidence we can offer, short of an independent judge's rescoring, that the case choice in section 1.2 was not an artefact of a few generously chosen numbers.

Exhibit for the deck: the weighted-matrix table and its 4.50-versus-3.30/3.25/3.05 ranking feed research section 8 and the cover's framing of why Case Study 1 was chosen; it is not a core-slide panel, since the deck's five core slides are dedicated entirely to solving Case Study 1 in depth, per the deck scope locked in section 1.3.

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

## 20. Cost: material cost falls from ₹18.4 to ₹12.0 per m² and footprint by 28%

**Answer.** In our model, the materials cost of hiding one square metre of wall with two coats falls from ₹18.4 to ₹12.0, a cut of 34 percent [T12], because the air-network base coat needs 16.1 grams less titanium dioxide [T12] and 17.5 grams less binder per square metre than the premium baseline [M], even after paying more for the finer chalk the base coat uses. The carbon footprint of that same square metre falls by 28 percent in the model's own reported figure, from 0.23 to 0.16 kilograms of carbon dioxide equivalent, with the rounded table values giving a slightly larger 30 percent when recomputed from their two-decimal display [T12]. Converted to a litre basis using Asian Paints' own published coverage rate for a comparable premium emulsion, the same cut appears as roughly ₹43 saved on the materials embedded in every litre applied over two coats [F07, T12]. The saving is not free: it depends on a titanium dioxide price that itself moves, so this section also tests what happens to the rupee figure if that price sits at the bear or bull end of its own range [A13].

### 20.1 The per-square-metre cost bridge, by scenario

Table 20.1 reproduces the model's own cost-and-footprint table for two coats of wall, at bear, base and bull settings of the surrounding-medium assumption that drives the whole proposal [T9, T12].

| Scenario | TiO2, reference | TiO2, proposal | Materials cost, reference | Materials cost, proposal | Cost cut | CO2e, reference | CO2e, proposal |
|---|---|---|---|---|---|---|---|
| Bear | 40.8 g | 34.5 g | ₹16.3 | ₹13.7 | 16% | 0.21 kg | 0.19 kg |
| Base | 40.8 g | 24.8 g | ₹18.4 | ₹12.0 | 34% | 0.23 kg | 0.16 kg |
| Bull | 40.8 g | 14.3 g | ₹20.4 | ₹10.0 | 51% | 0.25 kg | 0.13 kg |

*TiO2 = titanium dioxide. CO2e = carbon dioxide equivalent.*

Working through the base case in full: ₹18.4 minus ₹12.0 is ₹6.4 saved on every square metre, and ₹6.4 divided by ₹18.4 is 0.3478, which rounds to the 34 percent the model prints [T12]. The footprint row for the same case subtracts to 0.07 kilograms (0.23 minus 0.16), and 0.07 divided by 0.23 is 0.3043, a 30 percent cut on the rounded display values. The model's own headline figure is 28 percent, computed internally on unrounded inputs before the table rounds each cell to two decimal places. The one-to-three-point gap between the two numbers is a rounding artefact of the table's display precision, not a second, inconsistent model output, so this document follows the model's own stated figure (28 percent) wherever the footprint cut is quoted as a single number, and shows the rounded-table arithmetic (30 percent) alongside it so the gap stays visible. The reference materials cost is not fixed either: it rises from ₹16.3 at bear to ₹20.4 at bull, because the bear and bull scenarios also change the host-index assumption the reference film is implicitly compared against inside the same model run. The saving, in every scenario, is a difference between two moving numbers, not a fixed baseline against a moving proposal.

### 20.2 Where the saving comes from: a per-ingredient arithmetic check

The model's materials cost line bundles titanium dioxide, binder and extender into one rupee figure per square metre. The two headline ingredients can be pulled apart, though, using the assumption register's own prices and the physical masses the model reports (TiO2 mass is a column of table T12; binder mass is a direct model output, `[M]`, not printed in T12). Checking how close that partial sum comes to the full figure is a useful check on the arithmetic, not a new model output.

| Ingredient | Reference mass | Proposal mass | Price | Reference cost | Proposal cost | Saved |
|---|---|---|---|---|---|---|
| Titanium dioxide | 40.8 g | 24.8 g | ₹250 per kg | ₹10.20 | ₹6.20 | ₹4.00 |
| Acrylic binder | 41.6 g | 24.1 g | ₹190 per kg | ₹7.90 | ₹4.58 | ₹3.32 |
| Sum of these two | | | | ₹18.10 | ₹10.78 | ₹7.32 |
| Full model figure | | | | ₹18.4 | ₹12.0 | ₹6.4 |
| Gap (extenders) | | | | ₹0.30 | ₹1.22 | minus ₹0.92 |

*TiO2 = titanium dioxide.*

The arithmetic behind the table: titanium dioxide reference cost is 40.8 grams converted to kilograms (0.0408 kg) multiplied by ₹250, which is ₹10.20; the proposal figure is 0.0248 kilograms multiplied by ₹250, which is ₹6.20; the difference is ₹4.00 saved on pigment alone [A13, T12]. Binder reference cost is 0.0416 kilograms multiplied by ₹190, which is ₹7.904, rounded to ₹7.90; the proposal figure is 0.0241 kilograms multiplied by ₹190, which is ₹4.579, rounded to ₹4.58; the difference is ₹3.32 saved on binder alone [A17, M]. Adding the two reference costs gives ₹18.10, close to but 30 paise under the model's stated ₹18.4 reference figure; adding the two proposal costs gives ₹10.78, a full ₹1.22 under the model's stated ₹12.0 proposal figure. Both gaps point the same way and both are consistent with the formulation itself: the air-network base coat is built above its critical pigment volume concentration with a fine, 0.6 micron precipitated calcium carbonate extender priced at roughly ₹25 per kilogram [A15], in place of some of the coarse, 3 micron ground calcium carbonate the reference film uses at roughly ₹8 per kilogram [A16]. The fine extender does more optical work (it becomes part of the air-network scattering, not just a filler) but it costs three times as much per kilogram as the coarse chalk it displaces, so it eats into the pigment-and-binder saving. Summing the titanium-dioxide-and-binder saving (₹7.32) against the model's full net saving (₹6.4) implies an extender cost increase of ₹0.92 per square metre, which is the price paid for the fine chalk that makes the whole architecture work. Section 14 of this document gives the formulation rules behind that choice in full; this section only reconciles the rupees.

### 20.3 A per-litre view, for a reader who thinks in cans, not square metres

The model works entirely in grams and square metres of dry film, because that is the unit the optics run in. Asian Paints' own technical data sheet for a comparable premium interior emulsion gives a real, published coverage rate that lets the cost figures above be re-expressed per litre of paint applied, as an illustration rather than a model output. Apcolite Premium Emulsion's theoretical coverage is 13.42 square metres per litre at a 30 micron dry film, for a single coat [F07]. The model's own two-coat system runs at 30 microns per coat, 60 microns total [A01], so halving the one-coat coverage gives a two-coat coverage of 13.42 divided by 2, which is 6.71 square metres per litre.

| Basis | Materials cost per m² | Coverage (two coats) | Materials cost per litre |
|---|---|---|---|
| Reference | ₹18.4 | 6.71 m²/l | ₹123.46 |
| Proposal | ₹12.0 | 6.71 m²/l | ₹80.52 |
| Saved | ₹6.4 | | ₹42.94 |

*m² = square metres. l = litres.*

The arithmetic: ₹18.4 per square metre multiplied by 6.71 square metres per litre gives ₹123.46 of materials cost embedded in every litre applied over two coats; the same multiplication on ₹12.0 gives ₹80.52; the difference, ₹42.94, divided by ₹123.46, is 34.8 percent, matching the per-square-metre cut to within rounding, exactly as it should, since a constant coverage factor cannot change a percentage cut, only its rupee scale. This per-litre figure covers only the titanium dioxide, binder and extender cost the model tracks; it is not a retail price, does not include packaging, other additives, labour, margin or distribution, and should never be read as "Asian Paints would sell this paint ₹43 cheaper a litre." It is offered only so a reader who thinks in cans of paint, rather than square metres of wall, has a bridge between the two.

### 20.4 Price sensitivity: what happens if titanium dioxide gets cheaper or dearer

The rupee saving is a product of a fixed physical quantity (the titanium dioxide mass avoided) and a price that itself has a bear-to-bull range in the assumption register [A13]. Section 4's locked numbers give the mass saved as 16.1 grams per square metre at the base case; multiplying that fixed mass by each of the three prices isolates how much of the saving is price risk, holding every physical assumption at its base setting.

| TiO2 price scenario | Price | TiO2-only saving per m² | Arithmetic |
|---|---|---|---|
| Bear | ₹200 per kg | ₹3.22 | 0.0161 kg × ₹200 |
| Base | ₹250 per kg | ₹4.03 | 0.0161 kg × ₹250 |
| Bull | ₹300 per kg | ₹4.83 | 0.0161 kg × ₹300 |

*TiO2 = titanium dioxide. m² = square metres.*

At the model's base price of ₹250 per kilogram [A13], the titanium-dioxide-only slice of the saving is ₹4.03 per square metre; scaled by the base-case area of 470 million square metres from section 21's scale table [T13], that alone is 4.03 multiplied by 470,000,000, which is ₹1,894,100,000, or ₹189.4 crore, a figure that lands within a rounding width of the model's own stated base-case "TiO2 saving" of ₹189 crore [T13] and serves as an internal consistency check on both tables rather than a new, independent finding. Holding the same area fixed but swinging only the titanium dioxide price to its bear and bull settings moves this one component of the saving to ₹151.3 crore and ₹227.0 crore respectively (3.22 and 4.83 multiplied by 470,000,000). This price-only band is narrower than the full bear-to-bull range the research document quotes elsewhere (₹38 crore to ₹1,021 crore, section 21 and section 4), because that wider range also moves the porosity, adoption and area assumptions at the same time; the price-only exercise here isolates a single lever, consistent with the tornado-sensitivity method applied to the physical assumptions in table T14 and carried into section 21. Titanium dioxide price risk cuts both ways: if the price rises, as it has in past years on the company's own historical statements [A53, A55], the rupee case for cutting its use only gets stronger; if the price falls, the physical saving (the 16.1 grams avoided, the 39 percent cut in our model) is unchanged, and only its rupee value shrinks. No published rupee-denominated Indian landed price for titanium dioxide in 2025 or 2026 could be confirmed by the research lane that tried to find one [B37]. The model's ₹250-per-kilogram base case and its ₹200-to-₹300 range therefore remain an assumption, not a measured 2025-to-2026 market quote, and that limit is stated here rather than glossed over.

### 20.5 The cost bridge as a waterfall

Sections 20.1 and 20.2 already give every number this waterfall needs; table 20.5 only re-orders them so the base-case cost bridge reads as a single sequence of additions and subtractions, starting from the premium baseline and ending at the proposal.

| Step | Cost per m² | Running total |
|---|---|---|
| Start: premium baseline materials cost | ₹18.4 | ₹18.4 |
| Minus titanium dioxide saved (0.0161 kg × ₹250 per kg) | minus ₹4.00 | ₹14.4 |
| Minus binder saved (0.0175 kg × ₹190 per kg) | minus ₹3.32 | ₹11.08 |
| Plus the extender cost increase (fine chalk replacing coarse chalk) | plus ₹0.92 | ₹12.0 |
| End: air-network proposal materials cost | | ₹12.0 |

*m² = square metres. kg = kilograms.*

Reading the waterfall this way makes a point the scenario table in section 20.1 states only as a single net number: two of the three moves (the titanium dioxide saving and the binder saving) pull the cost down, and one move (the extender cost increase) pushes it back up, and the three together land at exactly the ₹12.0 the model's own run reports, which is itself the same consistency check performed in section 20.2, presented here as a sequence rather than a reconciliation table.

---

## 21. Scale: about ₹298 Cr a year and 7,551 t of TiO2 at 40% adoption, with a range of ₹38 Cr to ₹1,021 Cr

**Answer.** In our model, if the air-network system reached 40 percent of the titanium dioxide that currently goes into Asian Paints' interior emulsions and their primers, the company would avoid buying about 7,551 tonnes of titanium dioxide a year, worth ₹189 crore, and save ₹298 crore a year net of the extra chalk the system needs, with the bear-to-bull range running from ₹38 crore to ₹1,021 crore depending on how the underlying physics and the pace of adoption actually land [T13]. That scale case is built entirely from Asian Paints' own disclosed revenue and gross margin [A21, A22] combined with three further assumptions the research lanes could not independently verify against a published company figure: titanium dioxide's 15 percent share of the raw material bill [A23], the 40 percent of that spend sitting in interior emulsions and primers [A24], and 40 percent adoption of the new system across that addressable volume within five years [A25]. The same scale sits inside a titanium dioxide supply chain that is import-dependent, duty-contested and, as of the access date, carries a recommended but not yet confirmed-notified anti-dumping duty on Chinese imports [B02, B03, B17], a fact this section states plainly rather than assuming the duty is already in force.

### 21.1 Rebuilding the TiO2 bill from the company's own disclosed numbers

Table 21.1 reproduces the model's scale table in full, across the three scenarios [T13].

| Scenario | TiO2 bill | TiO2 tonnes | Area on the new system | TiO2 avoided | TiO2 saving | Net materials saving | CO2e avoided |
|---|---|---|---|---|---|---|---|
| Bear | ₹1,999 Cr | 99,932 t | 147 mn m² | 928 t | ₹19 Cr | ₹38 Cr | 1.8 kt |
| Base | ₹2,998 Cr | 1,19,919 t | 470 mn m² | 7,551 t | ₹189 Cr | ₹298 Cr | 29.7 kt |
| Bull | ₹3,997 Cr | 1,33,243 t | 979 mn m² | 25,934 t | ₹778 Cr | ₹1,021 Cr | 113.1 kt |

*TiO2 = titanium dioxide. mn = million. CO2e = carbon dioxide equivalent. kt = kilotonnes.*

The base-case titanium dioxide bill is not an invented number; it is a direct product of three disclosed-or-assumed figures, worked out here in full so the arithmetic is checkable rather than asserted. Asian Paints' FY26 consolidated revenue is ₹35,500 crore [A21]. Raw material and packaging cost is 56.3 percent of revenue, the complement of the company's 43.7 percent FY26 gross margin [A22]; ₹35,500 crore multiplied by 0.563 is ₹19,986.5 crore of raw material cost. Titanium dioxide's assumed share of that raw material bill is 15 percent [A23]; ₹19,986.5 crore multiplied by 0.15 is ₹2,997.975 crore, which rounds to the ₹2,998 crore the model prints exactly [T13]. Converting that rupee bill into tonnes uses the same ₹250-per-kilogram price used throughout section 20 [A13]: ₹2,998 crore is ₹29,980,000,000, divided by ₹250 per kilogram is 119,920,000 kilograms, which is 1,19,920 tonnes, a one-tonne rounding width from the model's stated 1,19,919 tonnes [T13]. Every step of that chain is a verified or assumed number multiplied against another; none of it is a new, independently sourced fact, and the research lane assigned to check the inputs could not find a single, dated, company-stated figure for titanium dioxide's specific share of the raw material bill in FY24 to FY26, only older and differently-scoped estimates ranging from about 20 percent to about 40 percent of crude-linked materials generally [A55, A56]. The model's 15 percent base case sits inside that broader range but below its upper estimates, and the bear-to-bull band (10 percent to 20 percent) is deliberately wide to reflect that this is the single most consequential unverified input in the whole scale case.

### 21.2 From tonnage to area: the addressable-and-adoption chain, worked in full

The jump from a titanium dioxide bill to an area of wall covered by the new system runs through two further assumptions: the addressable share of titanium dioxide use that sits in interior emulsions and primers, 40 percent at the base case [A24], and the adoption rate across that addressable volume by year five, also 40 percent at the base case [A25]. Multiplying the two gives the overall penetration of the new system into Asian Paints' total titanium dioxide use: 0.40 multiplied by 0.40 is 0.16, or 16 percent of the company's total titanium dioxide tonnage. Applying that 16 percent to the base-case tonnage of 1,19,919 tonnes gives 19,187 tonnes of titanium dioxide use that the new system would actually touch. Converting that touched tonnage into an area of wall uses the premium baseline's own titanium dioxide intensity, 40.8 grams per square metre [T7]: 19,187,000 kilograms divided by 0.0408 kilograms per square metre is 470,269,608 square metres, which rounds to the model's stated 470 million square metres [T13], a match close enough to confirm the chain of reasoning behind the headline area figure rather than merely assert it.

| Step | Value | Arithmetic | Tag |
|---|---|---|---|
| Addressable share | 40% | n/a | [A24] |
| Adoption by year 5 | 40% | n/a | [A25] |
| Combined penetration of total TiO2 use | 16% | 0.40 × 0.40 | derived |
| Total TiO2 tonnage touched | 19,187 t | 1,19,919 t × 0.16 | derived |
| Area on the new system | 470 mn m² | 19,187,000 kg ÷ 0.0408 kg/m² | derived |

*TiO2 = titanium dioxide. mn = million. m² = square metres.*

Carrying the area figure forward to the avoided tonnage and the saving gives a second, independent consistency check on the scale table. The titanium dioxide saved per square metre is the reference-minus-proposal mass, 40.8 grams minus 24.8 grams, which is 16.0 grams per the rounded table figures, or 16.1 grams per the model's own unrounded figure quoted in section 4; multiplying 470,000,000 square metres by 16.1 grams per square metre gives 7,567,000,000 grams, which is 7,567 tonnes, a 16-tonne width (0.2 percent) from the model's stated 7,551 tonnes [T13], the gap again attributable to the area figure's own rounding from its unrounded 470.27 million to a flat 470 million before the multiplication. The titanium dioxide saving in rupees, 7,551 tonnes multiplied by ₹250 per kilogram, is ₹1,887,750,000, or ₹188.8 crore, matching the model's stated ₹189 crore [T13]. The net materials saving, which also folds in the binder saving and the extender cost increase worked out in section 20.2, is ₹298 crore against a titanium-dioxide-only saving of ₹189 crore; the difference, ₹109 crore, is the net contribution of the binder-and-extender side of the formulation at full scale, consistent with the per-square-metre reconciliation in section 20.2 where the net saving (₹6.4) sat below the sum of the titanium-dioxide-only and binder-only savings (₹7.32) because of the extender cost increase. Scaling the per-square-metre net saving directly, ₹6.4 multiplied by 470,000,000 square metres, gives ₹3,008,000,000, or ₹300.8 crore, within a one-percent width of the model's stated ₹298 crore, again confirming the chain rather than contradicting it.

### 21.3 The three-scenario story, named

Each of the three scenarios in table 21.1 differs on every assumption at once, not one at a time, following the scenario-analysis convention used throughout this document [A05 through A25, model dictionary]. Table 21.3 names what moves between the scenarios, so the ₹38-crore-to-₹1,021-crore range is read as a story, not three disconnected numbers.

| Scenario | Porosity | Host index | Addressable share | Adoption | TiO2 price | What this combination represents |
|---|---|---|---|---|---|---|
| Bear | 25% | 1.38 (mostly binder-wetted) | 30% | 20% | ₹200/kg | The physics underdelivers and the business is cautious: binder preferentially wets the pores, few product lines convert, and TiO2 happens to be cheap when it matters least |
| Base | 35% | 1.18 | 40% | 40% | ₹250/kg | The model's central, most-likely combination across every assumption |
| Bull | 45% | 1.00 (pure air) | 50% | 60% | ₹300/kg | The physics performs at its theoretical best, the business commits broadly, and TiO2 happens to be expensive when it matters most |

*TiO2 = titanium dioxide.*

The width of the range, ₹38 crore to ₹1,021 crore, a 27-fold spread, comes from multiplying five uncertain inputs together, each with its own bear-to-bull range, rather than from a sloppy model or a single point estimate dressed up as a forecast. Section 4's caveat applies here without qualification: nothing in this range has been measured on a panel, and the single biggest driver of where the business actually lands inside it is the physical surroundings assumption (table T14, discussed further in section 24), not the business assumptions, since the physical assumption alone swings the TiO2 saving from 21 percent to 65 percent before a single rupee or tonne of area is even considered.

### 21.4 Supply resilience: a duty-contested, import-dependent raw material

The scale case sits inside a titanium dioxide supply chain that is unusually exposed to trade policy, a fact the research lanes confirmed in detail. Chinese imports supplied 226,869 tonnes during the Directorate General of Trade Remedies' period of investigation, equal to 57 percent of Indian demand [B07]. Domestic capacity for the specific rutile-sulphate grade used in architectural coatings is negligible, roughly 3,500 to 4,000 tonnes against demand near 300,000 tonnes for that grade [B08], a shortfall of roughly 296,000 to 296,500 tonnes that domestic producers cannot presently fill. The Directorate's original final findings, issued 12 February 2025, led to a Customs notification on 10 May 2025 imposing anti-dumping duty [B01, B12]; the Calcutta High Court quashed that notification on 22 September 2025 for a failure of natural justice in how the investigation disclosed non-confidential information to interested parties [B18, B19, B20], and the matter was remanded to the Directorate [B21]. A new, remand final finding was issued 3 August 2026, recommending a duty of USD 460 to USD 681 per tonne depending on the named Chinese producer [B02, B03]. As of the access date for this research, no primary source could confirm that the Ministry of Finance has notified this remand recommendation into legal force [B17]; the duty therefore sits at the recommended stage, not the in-force stage, and this document follows that distinction throughout rather than stating the duty as currently collected.

| Supply-chain fact | Figure | Tag |
|---|---|---|
| Chinese import share of Indian demand (DGTR period of investigation) | 57% | [B07] |
| Domestic rutile-sulphate capacity vs demand for that grade | 3,500 to 4,000 t vs ~300,000 t | [B08] |
| Recommended anti-dumping duty range (3 Aug 2026 remand findings) | USD 460 to USD 681 per tonne | [B03] |
| Status of that duty as of the access date | Recommended, not confirmed notified into force | [B17] |
| TiO2 avoided at base case, as a share of the Chinese import volume | 3.3% (7,551 ÷ 226,869) | derived |
| TiO2 avoided at bull case, as a share of the Chinese import volume | 11.4% (25,934 ÷ 226,869) | derived |
| TiO2 avoided at bull case, as a share of the domestic capacity shortfall | 8.7% (25,934 ÷ 296,500) | derived |

The resilience argument does not depend on the duty ever being notified. At the base case, the 7,551 tonnes avoided is a modest 3.3 percent of the Chinese import volume that feeds the whole Indian market (7,551 divided by 226,869); at the bull case, the 25,934 tonnes avoided reaches 11.4 percent of that same import volume, and 8.7 percent of the entire domestic capacity shortfall (25,934 divided by 296,500). Neither figure makes Asian Paints independent of imported titanium dioxide, and this section does not claim it does. What the figures show is a direction: every tonne the air-network system avoids buying is a tonne the company does not have to source through a supply chain that has already been reshaped once by a quashed duty and once by a remand finding inside eighteen months, and would not have to source again if a future duty, tariff or supply disruption raised the landed price further. The case for the architecture therefore strengthens, rather than weakens, under supply-chain stress, which is the opposite of how a cost-reduction idea that depended on buying more of a volatile import would behave.

### 21.5 Why the scale case rests on assumption, not a verified company figure, and what moves it besides the physics

Section 21.3's three-scenario story already names the physical assumptions that move the scale case. Two further, purely business assumptions move it just as much, and holding every physical assumption at its base setting while varying only the adoption pace shows how much of the range in table 21.1 is a business choice rather than a physics result.

| Adoption by year 5 | Net materials saving (base physics held fixed) | Arithmetic |
|---|---|---|
| 20% (half of base) | ₹149 Cr | ₹298 Cr × (20 ÷ 40) |
| 40% (base case) | ₹298 Cr | n/a, this is the base case |
| 60% (1.5 times base) | ₹447 Cr | ₹298 Cr × (60 ÷ 40) |

The saving scales linearly with the adoption share, because adoption multiplies the addressable tonnage directly, with no interaction against the physical assumptions in this particular cut; a reader can therefore read any adoption figure between the bear and bull settings directly off this line, without rerunning the full model. This matters because no research lane could find a single, dated, company-stated figure for Asian Paints' own decorative or interior-emulsion-specific market share, let alone an addressable-share or adoption-rate figure for a product that does not yet exist: the clearest statement from this project's own research is that "no clean, single, dated raw-material (or TiO2-specific) cost line as a percentage of sales was found for FY24, FY25 or FY26 in any source opened" [A10, A57 gap], and that decorative market-share percentages for every named competitor "are inconsistent across secondary sources and none trace to an audited company disclosure or an independent syndicated market-share report" [A61 to A67 gap]. The 40 percent base-case adoption figure in this document is therefore the team's own judgement, stated as such, not a verified projection, and table 21.5 exists so a reader who disagrees with that judgement can rescale the headline ₹298 crore figure to whatever adoption pace they find more credible, without needing to rerun the underlying model.

---

## 22. The lab programme that would prove it, with pass marks (not yet run)

**Answer.** None of what follows in this section has been measured: no panel has been cast, no instrument has been read, and no laboratory has touched this formulation. What follows is a plan, with the pass marks the plan would be judged against, built from the same assumptions and uncertainty ranges the model already carries, most importantly the five inputs the model's own sensitivity table flags as the biggest drivers of the result [T14]. The plan uses named, real standards wherever the research lanes could confirm one applies (ISO 6504-3, ISO 7724, ASTM D2486, porosimetry, focused-ion-beam scanning electron microscopy, QUV accelerated weathering), and it states honestly where a standard's own text is contested or where a figure the model needs has no published source, because a plan that hides its own gaps is not a credible plan.

### 22.1 What the five challenges in the brief require the lab to answer

The brief asks for whiteness enhancement that survives five named challenges [W-K1 to W-K5]. Table 22.1 maps each challenge to the specific test the lab programme would run and the pass mark that test would be judged against, drawn from the model's own targets wherever one exists.

| Brief challenge | What must be demonstrated | Test | Pass mark |
|---|---|---|---|
| Opacity (W-K1) | The air-network system matches or exceeds the premium baseline's hiding | Hiding power, contrast ratio | Luminous reflectance Y at least 90.7, two-coat contrast ratio at least 0.998 [A11, A12] |
| Durability and yellowing resistance (W-K2) | The system does not develop a visible yellow cast faster than the baseline | Accelerated weathering, colour measurement before and after | b* (yellowness) after exposure within the same band the baseline shows unexposed, about 1.4 [T7], and markedly below the proposal's as-made 1.5 [T9] |
| Dispersion (W-K3) | The fine extender and the seal latex disperse and remain stable, no settling or flocculation that changes porosity | Particle-size distribution, viscosity stability, storage stability | Porosity after storage within the bear-to-bull band already used in the model, 25 to 45 percent [A05] |
| Supply and economics (W-K4) | The cost case in section 20 holds in a real batch, not only on paper | Batch costing against the model's per-kilogram inputs | Materials cost within a stated tolerance of the model's ₹12.0 per square metre base case [T12] |
| Manufacturing complexity (W-K5) | The system can be made on Asian Paints' existing equipment, no new plant | Pilot batch on existing mixing and filling lines | Pass if no new unit operation or equipment class is required beyond what section 18 already names |

Every pass mark in the right-hand column traces back to a number already in this document rather than a figure invented for this section alone: the test criteria are the model's own targets, restated as what a physical measurement would need to show to confirm the model, not as results that already exist.

### 22.2 The design of experiments: the five inputs the physics itself says matter most

Table T14, already introduced in section 4's locked numbers, ranks what moves the titanium dioxide saving most when every other input is held at its base case. That table is also the design of experiments the lab programme would run, because the inputs it names are exactly the inputs a physical test needs to pin down before the model's base case can be called confirmed rather than merely plausible.

| Factor | Low setting to test | High setting to test | Saving at low (model) | Saving at high (model) | What the physical measurement would be |
|---|---|---|---|---|---|
| What surrounds base-coat particles | Binder-wetted | Pure air | 21% | 65% | FIB-SEM cross-sections at the particle scale, to see directly whether binder films the pigment or leaves it in open air |
| Base-coat porosity | 25% | 45% | 33% | 45% | Mercury or gas-adsorption porosimetry on cured base-coat films |
| Seal-coat infiltration into pores | 25% | 0% | 34% | 43% | FIB-SEM cross-sections at the base-coat-to-seal-coat interface, measuring how deep the seal latex actually penetrates |
| Minimum seal-coat film | 20 µm | 12 µm | 37% | 39% | Dry film thickness gauge on cured panels, cross-checked against hiding and scrub performance |
| Base-coat extender size | 0.8 µm | 0.4 µm | 37% | 38% | Particle-size distribution of the fine extender as milled and as dispersed in the wet base coat |

*FIB-SEM = focused-ion-beam scanning electron microscopy. µm = micron.*

The design of experiments this table implies is not a simple one-factor-at-a-time sweep; because the model's own tornado analysis already shows that the surroundings assumption and the porosity assumption interact (both describe the same physical pore network from different angles), the actual test plan would build a small factorial across porosity (three levels, bear-base-bull) and infiltration (three levels), with the surroundings question answered directly by FIB-SEM imaging on whichever porosity-and-infiltration combination the factorial points to as most representative, rather than inferred indirectly from an optical measurement alone. A minimum of three independently prepared panels per cell of the factorial, cast on separate days, would be needed before any cell's result could be treated as repeatable rather than a single data point; this is a planned specimen count, not a reported outcome, and nothing about naming it in advance commits the team to a result it has not yet produced.

### 22.3 Standards and methods, and where their own text is contested

Not every standard named in the plan is as settled as it first appears, and the research lanes found real disagreement inside the standards literature itself that the lab programme has to navigate rather than assume away.

| Standard or method | What it measures | Status found by the research lanes |
|---|---|---|
| ISO 6504-3 | Hiding power or opacity of white and light-coloured paints | Two incompatible editions exist: the current 2019 edition measures hiding power by a tristimulus Y and Y10 method for films above Y 25 [C38]; the withdrawn 2006 edition measured opacity by contrast ratio at a fixed 20 square-metres-per-litre spreading rate [C39]. This document's own working language, "contrast ratio," matches the withdrawn 2006 method's concept, not the current 2019 method's, a terminology gap the lab programme would need to resolve by stating explicitly which edition's protocol a reported contrast ratio actually followed |
| ISO 7724 | Colorimetry for paints: principles, measurement by spectrophotometer, and small colour-difference calculation | All three parts are withdrawn, the 1984 edition, with Parts 2 and 3 withdrawn specifically on 18 November 2013 [C40]; a current replacement standard was not identified in this lane's search, so any colour-difference reporting would need to name whichever current standard a chosen instrument vendor actually certifies against |
| ASTM D2486 | Scrub resistance and washability of paint films | Named directly in the brief's own list of possible test protocols for Case Study 2 and carried here by analogy for washability testing; this verifier's lanes did not independently retrieve or confirm the standard's own numeric pass criteria, so the plan names the method but does not assert a specific cycle count as a pass mark until the standard itself is read in full |
| Mercury or gas-adsorption porosimetry | Pore-size distribution and total porosity of a cured film | A generic, well-established laboratory technique; no India-specific or paint-specific porosity figure for a paper-coating-style layer could be independently confirmed by the research lanes beyond the general critical-pigment-volume-concentration literature [C28 to C31], which is exactly why the plan treats porosity as something to measure, not assume |
| FIB-SEM | Cross-sectional imaging of the pore network and the seal-coat-to-base-coat interface at nanometre resolution | Standard materials-characterisation instrumentation, not paint-specific; availability depends on access to a shared characterisation facility, a constraint named honestly rather than assumed solved |
| QUV accelerated weathering | Simulated ultraviolet exposure and condensation cycling, for yellowing and durability | Standard accelerated-weathering equipment; the exposure duration needed to represent a stated number of years of real exterior service was not independently sourced in this project's research lanes and would need to follow the chamber manufacturer's own correlation tables or an ASTM G154-class cycle, named here as the intended method rather than a confirmed duration |

A plan that simply listed test names without checking them would have missed the ISO 6504-3 edition conflict entirely, and would have reported a "contrast ratio" result against a standard that, in its current 2019 form, no longer uses that term the same way the withdrawn 2006 edition did. The lab programme, when it runs, states on its first page which edition of each standard its own measurements actually followed.

### 22.4 BIS standards and the Indian practice context the lab must respect

India's own standards for emulsion paints provide a separate, independent check on what a real pass mark should look like, and the research lanes found a gap worth stating plainly. The current plastic-emulsion-paint standard is IS 15489:2024, which merged the older interior and exterior emulsion standards into one document [F14]; its 2024 revision removed the optional requirements for spreading capacity, hiding power and spreading time that an earlier edition carried [F16]. Neither this standard nor the washable-distemper standard IS 428, nor the cement-paint standard IS 5410 that was read in full for this project, carries a clause-level contrast-ratio or hiding-power numeric requirement of its own [F25, F29]; Indian practice evidently leaves hiding-power verification to the product's own technical data sheet and to the international standards (ISO 6504-3 in whichever edition) rather than to a BIS numeric clause. The lab programme's pass marks in table 22.1 therefore rest on the model's own targets and on the international standard, not on a BIS numeric threshold, because no such threshold could be found to exist for this specific property in the Indian standards actually read.

### 22.5 Decision rules: what a failed cell does to the plan

A design of experiments is only useful if it is paired with a stated rule for what happens when a cell fails, so the pass marks of table 22.1 are not read for the first time after the panels are already cast.

| If the measurement shows | The decision is | Why |
|---|---|---|
| Measured Y below 90.5 (90.7 minus the stated 0.2 tolerance [A11]) at the base-case porosity and infiltration setting | Move the porosity and infiltration settings toward the bull direction and retest, before concluding the architecture itself has failed | The tornado table shows porosity and infiltration are the two inputs most under the formulator's own control, so a shortfall there is a formulation fix, not evidence against the underlying optics |
| Measured contrast ratio below 0.998 [A12] after a porosity-and-infiltration retest | Increase the seal-coat thickness toward its bear-case setting (20 micron, [A28]) and retest once more | A thicker seal coat trades a small amount of the air-network's porosity advantage for hiding margin, a known, bounded cost already quantified in table T14 |
| b* after accelerated weathering exceeds the unexposed baseline's 1.4 by more than a stated margin | Hold the proposal at the Gate 1 stage (section 23) until the seal-latex chemistry is adjusted | Durability and yellowing resistance (W-K2) is a named brief challenge, not a secondary concern, and a formulation that trades whiteness for durability has not actually solved the brief |
| Batch cost exceeds the model's ₹12.0 per square metre base case by more than a stated tolerance | Re-cost against the actual batch's extender and latex grades before concluding the economics have failed | Section 20.2 already shows the model's own cost bridge leaves a reconciliation gap attributable to extender choice; a real batch's specific supplier prices would move the figure in ways the model, built on assumption-register prices, cannot anticipate exactly |
| Any unit operation beyond mixing, milling and filling is required at pilot scale | Treat W-K5 (manufacturing complexity) as unresolved and escalate to process engineering before any Gate 1 decision | The entire premise of the proposal, stated throughout this document, is that nothing changes for the painter and nothing new is required of the plant; a pilot that needs new equipment has quietly broken that premise |

These rules are themselves a plan, stated now so the eventual lab programme has a decision structure to run against rather than discovering, panel by panel, what a given result should mean. Section 23 picks up from here and places these decision points onto a calendar.

### 22.6 Handling the raw materials safely while the lab programme runs

The brief itself asks for a perspective on raw-material handling [W-Q7], and the fine titanium dioxide and fine precipitated calcium carbonate powders this architecture depends on both carry published exposure limits the lab programme has to respect, independently confirmed by the research lanes rather than assumed.

| Material | Exposure limit | Source | Status |
|---|---|---|---|
| Titanium dioxide, total dust | 15 mg/m³, 8-hour time-weighted average | OSHA permissible exposure limit | Enforceable in the United States; used here as the most conservative widely cited figure [R-E34] |
| Titanium dioxide, respirable, nanoscale particles | 0.2 mg/m³, 8-hour time-weighted average | ACGIH, 2021 | Recommended, not a US enforceable limit [R-E35] |
| Titanium dioxide, fine (2011 recommendation) | 2.4 mg/m³, time-weighted average | NIOSH Current Intelligence Bulletin 63 | Recommended [R-E36] |
| Titanium dioxide, ultrafine (2011 recommendation) | 0.3 mg/m³, time-weighted average | NIOSH Current Intelligence Bulletin 63 | Recommended [R-E36] |
| Titanium dioxide carcinogenicity | Group 2B, possibly carcinogenic to humans | IARC Monograph Volume 93 | Based on animal inhalation studies; ACGIH separately classifies the same material A4, not classifiable as a human carcinogen [R-E38, R-E40] |
| Precipitated calcium carbonate | Not classified under GHS | Two independent safety data sheets (Univar, Mississippi Lime) | Both note mechanical irritation of eyes, skin and the upper respiratory tract from dust, short of a formal hazard classification [R-E43 to R-E46] |

This table makes the same point section 22.3 makes about the optical standards: the exposure-limit literature does not speak with one voice. OSHA's enforceable figure and NIOSH's recommended figures differ by an order of magnitude because they are scoped differently (total dust against respirable fraction, enforceable against recommended), and the lab programme's own handling protocol states which figure it is working to rather than quoting the most convenient one. None of this changes the chemistry of the proposal; the fine extender and fine pigment this architecture needs are the same materials conventional premium emulsions already use, at a different particle size and a different film architecture, not a new category of hazard.

### 22.7 The specimen plan, stated as a plan

Table 22.7 states, in advance of any work starting, how many panels the design of experiments in section 22.2 would need and how long each measurement would take, so the lab programme has a sized plan to run against rather than an open-ended list of tests. These are planned counts, not a report of specimens already made.

| Test | Planned specimen count | Planned duration | Feeds which Gate |
|---|---|---|---|
| Porosity-and-infiltration factorial (3 × 3 cells) | 3 panels per cell, 27 panels in total | 4 to 6 weeks, including cure time | Gate 0 |
| FIB-SEM cross-sections, at the factorial cell closest to the base case | 3 cross-sections | 2 to 3 weeks, subject to shared-facility access | Gate 0 |
| Hiding and contrast ratio (ISO 6504-3, stating which edition) | 3 panels per factorial cell, drawn from the same panels above | Concurrent with the factorial | Gate 0 |
| QUV accelerated weathering | 6 panels (3 baseline, 3 proposal), run continuously from month zero | Several months, running in parallel with every other phase | Gate 1 |
| Pilot-batch costing | 1 full production-scale batch | Within phase 2 of the roadmap (section 23.1) | Gate 1 |

---

## 23. Roadmap: lab in six months, interior pilot in twelve, three horizons with gates

**Answer.** The roadmap runs lab validation first, at six months, an interior-emulsion pilot at twelve to eighteen months, and a staged scale decision after that, following the stage-gate discipline of naming a kill or proceed decision at each boundary rather than assuming continuation [Cooper, stage-gate]. The three McKinsey time horizons frame what the company is doing at each stage: horizon one defends the current premium-emulsion business unchanged; horizon two is the air-network base-coat system itself, the base case of this whole document; horizon three is the organic-crystal variant that the twelve-design screen already flagged as reaching an 81 percent saving under the same test [T8, S12]. A VRIO read of the proposal shows it is valuable and, on the prior-art search conducted for this project, rare, but only moderately inimitable on its own, which is exactly why the roadmap pairs a patent-filing step with the pilot stage rather than leaving the idea undefended once it becomes visible outside the company.

### 23.1 The roadmap as a Gantt, in table form

| Phase | Months | What happens | Gate at the end |
|---|---|---|---|
| Phase 1: Lab validation | 0 to 6 | Bench-scale base-coat and seal-coat panels built per the design of experiments in section 22.2; hiding, contrast ratio, porosimetry and FIB-SEM measurements run; accelerated weathering (QUV) begun in parallel, running through later phases since it needs months of exposure regardless of when it starts | Gate 0: does the base case reproduce the model's pass marks (table 22.1) in a real panel |
| Phase 2: Interior pilot | 6 to 18 | A limited pilot production run on existing mixing, milling and filling lines, in one interior-emulsion product line and one or two cities, with the batch costing check from section 22.5 run against the actual pilot batch; QUV exposure results from phase 1 become available partway through this phase | Gate 1: does the pilot batch meet the pass marks at pilot scale, hold its cost within tolerance, and show no new equipment requirement |
| Phase 3: Horizon 2 scale-up | 18 to 36 | Roll-out across the interior-emulsion portfolio named in section 19 (Apcolite, Tractor, Royale tiers); exterior-formulation adaptation work (hydrophobic pore treatment, section 15) begins in parallel; patent filing on the specific combination (section 23.3) completed before this phase opens, not after | Gate 2: does the adoption curve and the realised cost saving track the model's base case within the stated tolerance of sections 20 and 21 |
| Phase 4: Horizon 3 research | 36 and onward | Organic-crystal substitution research toward the 81 percent screen result [S12]; industrial and automotive coating adaptation begins, drawing on the water-and-solvent-borne scope the brief itself asks for [W-S1] | No gate yet defined; horizon 3 is deliberately run as an option, not a committed programme, per the three-horizons discipline below |

The staging deliberately keeps the accelerated weathering test running continuously from month zero, because it is the one test in the whole plan whose duration cannot be compressed by adding resources; every other phase's timeline is sized around waiting for that one clock rather than the other way round.

### 23.2 Three horizons, mapped onto what already exists and what the roadmap adds

| Horizon | Timeframe | What it is here | Status |
|---|---|---|---|
| Horizon 1: core | 0 to 2 years | The current premium-emulsion business, built on the conventional rutile-in-binder film the model calls the reference case throughout [T7] | Already exists, unchanged, and continues generating the cash the rest of the roadmap is funded from |
| Horizon 2: emerging | 2 to 5 years | The air-network base coat under a seal coat, this document's base case, a 39 percent titanium dioxide saving at base settings [T9] | The subject of phases 1 to 3 above; not yet built, but built on existing equipment and existing raw-material categories |
| Horizon 3: future | 5 years and beyond | The organic-crystal-in-air-network variant, reaching 81 percent saving in the twelve-design screen under the same test as every other design [S12, T8] | An option being kept open, not a committed investment; organic crystal whiteners are themselves a known but weak-in-binder material (table T8, row 9, at 84.1 brightness), and their 81 percent figure only works because they ride on the same air-network architecture horizon 2 would already have proven out |

The point of naming all three horizons explicitly, rather than only describing horizon 2, is the discipline the framework itself insists on: a company that only ever funds its horizon-one core starves its own future, and a company that chases horizon three before horizon two is proven has skipped the step that would actually de-risk it. Horizon 3's organic-crystal variant is not evaluated on its own merits here; it inherits whatever confidence horizon 2's lab and pilot results eventually earn.

### 23.3 VRIO: is the advantage sustainable, stated honestly

| VRIO test | Verdict | Reasoning |
|---|---|---|
| Valuable | Yes | ₹298 crore a year net materials saving at the base case [T13], a 39 percent titanium dioxide cut at base settings [T9], and a near-infrared reflectance gain with a link to Case Study 2 [T15] |
| Rare | Yes, on the evidence this project could find | The prior-art lane searched ten named precedents, from hollow polymer opacifiers to yolk-shell titanium dioxide to porous radiative-cooling paints to self-stratifying coatings, and found no single patent or paper claiming the specific combination of an above-critical-pigment-volume-concentration, air-continuous base coat sealed by a size-excluding topcoat, calibrated to titanium dioxide reduction at fixed whiteness, in the way this document proposes. Every individual piece of the idea is independently known; the combination, as searched, is not |
| Inimitable | Only moderately | The barrier is tacit process know-how in porosity control and seal-latex particle-size-to-pore-throat matching, not a hard-to-source input or a patent on any individual mechanism, since the individual mechanisms (hollow latex opacifiers, pigment spacing, size-exclusion sealing) are themselves already patented by others [D01 to D56]. A competitor with comparable formulation talent could in principle reproduce the specific combination once it is public, which is the honest reason the roadmap pairs this stage with a patent-filing step rather than relying on tacit knowledge alone |
| Organized | Yes | Asian Paints already runs in-house vinyl acetate monomer and vinyl acetate-ethylene manufacturing at Dahej, commissioned in 2026, which gives the company direct control over the latex particle-size tuning the seal coat depends on [A39, A41]; eight manufacturing facilities already exist to roll the system out on [A24]; a Research and Technology Centre described as the largest dedicated paint-company research and development facility in India [A23] and 250-plus scientists on a ₹124.9 crore annual research and development budget [A17] give the company the formulation capacity the lab programme in section 22 would need |

What this table shows is that the sustainable-competitive-advantage verdict depends on moving quickly on the "Inimitable" row's weak point, not on assuming the other three rows carry the advantage by themselves. A company with the resources to run the lab programme in section 22 and the manufacturing scale to roll it out, but without a filed patent, is one published research paper or one careful reverse-engineering effort away from losing the "Rare" row's advantage as well.

### 23.4 IP strategy, scoped honestly

Because the prior-art search in section 23.3 found every individual mechanism already claimed by someone else, a patent filing on this proposal has to be scoped narrowly to the specific combination and design rule, not to any individual component. The claim this roadmap anticipates filing covers the specific pairing of an above-critical-pigment-volume-concentration base coat, formulated with a defined porosity range and a fine-chalk extender that itself participates in scattering, sealed within the same two-coat system by a topcoat whose latex particle size is deliberately sized larger than the base coat's pore throats, with the combination calibrated against a stated titanium dioxide reduction at a stated brightness target. This document does not claim that search constitutes a professional patentability or freedom-to-operate opinion; the research lane's search covered ten named categories of prior art and a set of patent-database keyword searches, which is the right first screen for a student team but not a substitute for patent counsel before any filing, a limit this section states rather than skips past. The filing, if pursued, happens before phase 3 of the roadmap opens, per table 23.1, on the reasoning that the idea becomes substantially more visible once it is rolled out across a product portfolio than while it sits inside a pilot in one or two cities.

### 23.5 Capability already in place against capability still needed

The "Organized" row of the VRIO test in section 23.3 claims Asian Paints already has much of what the roadmap needs; table 23.5 separates what is already true from what the roadmap still has to add, so that claim is checkable rather than asserted once and left alone.

| Capability | Already in place | Still needed |
|---|---|---|
| In-house latex manufacturing, for seal-coat particle-size control | Yes: vinyl acetate-ethylene capacity at Dahej, 150,000 tonnes per annum, commercial production commenced 17 September 2026 [A39, A41] | Qualifying a specific particle-size grade against the pore-throat target in section 22.2 |
| Manufacturing scale to roll the system out | Yes: eight manufacturing facilities across the decorative portfolio [A24] | Confirming no new unit operation is required at each site (the Gate-1 test in table 22.5) |
| Formulation and research capacity | Yes: a Research and Technology Centre described as the largest dedicated paint-company facility in India [A23], 250-plus scientists and a ₹124.9 crore annual research and development budget [A17] | Allocating that capacity specifically to the design of experiments in section 22.2, which has not yet been done |
| Characterisation instrumentation (FIB-SEM, porosimetry) | Not confirmed by this project's research; likely available through a shared or university facility, not confirmed as in-house | Securing access, and the lead time that access takes, before Gate 0 can begin |
| Patent filing capacity | Not assessed in this project's research | Engaging patent counsel for a freedom-to-operate opinion beyond the research lane's own keyword search, per section 23.4 |

### 23.6 The gates, at a glance

Table 23.6 pulls the decision rules already stated in section 22.5 together with the calendar in section 23.1, so a reader can see, in one place, which specific pass mark opens which specific gate.

| Gate | Opens after | Closes on | Pass marks that must hold (section 22.1 and 22.5) |
|---|---|---|---|
| Gate 0 | Phase 1 (lab validation) | Month 6 | Y at least 90.7, contrast ratio at least 0.998, porosity and infiltration within the tested factorial's base cell |
| Gate 1 | Phase 2 (interior pilot) | Month 18 | Field-applied seal-coat thickness within tolerance, batch cost within tolerance of ₹12.0 per square metre, no new equipment required, QUV results available and within the stated b* tolerance |
| Gate 2 | Phase 3 (horizon 2 scale-up) | Month 36 | Realised adoption and realised cost saving tracking the base case within the stated tolerance of sections 20 and 21, patent filing complete |

---

## 24. Risks: what surrounds the rutile decides most of the answer

**Answer.** The single largest risk to this whole proposal is physical, not commercial: whether binder actually wets and films the rutile pigment inside the base coat, or whether the pigment genuinely sits in open air, moves the titanium dioxide saving from 21 percent to 65 percent in the model's own tornado analysis, a wider swing than every other risk in this section combined [T14]. Around that central risk sit eleven further risks this section registers with a probability, an impact, an early-warning signal and a named response, plus a pre-mortem exercise that asks what a failure eighteen months from now would actually look like, and a short account of which risks the roadmap's gates (section 23) already defuse before they can compound.

### 24.1 The risk register

| # | Risk | Probability | Impact | Early signal | Response | Owner |
|---|---|---|---|---|---|---|
| 1 | Binder preferentially wets the rutile, collapsing the surroundings advantage toward the bear case | Medium | High | FIB-SEM cross-sections show binder films penetrating the pore walls beyond the model's bear-case assumption | Adjust seal-coat chemistry or reduce base-coat binder share before Gate 1 | Formulation R&D |
| 2 | Base-coat porosity falls short of the 25 to 45 percent target range | Medium | High | Porosimetry on pilot panels reads below 25 percent | Adjust extender particle-size distribution and packing | Process engineering |
| 3 | Seal-coat infiltration into the base coat exceeds the 25 percent bear-case setting under real painter application technique | Medium to high | Medium | FIB-SEM shows deeper-than-planned seal-latex penetration at the interface | Increase seal-latex particle size relative to the pore throat | Formulation R&D |
| 4 | Painters apply a thinner seal coat than the 12 to 20 micron plan to save material or time | Medium | High | Field dry-film-thickness checks during the pilot show under-thickness coats | Enforce technical-data-sheet minimums through the painting-services channel and installer training | Technical services, painting services division |
| 5 | The proposal's b* (1.5) drifts further from the baseline (1.4) under exterior ultraviolet exposure, a visible yellow cast | Medium | Medium | QUV accelerated weathering shows b* rising faster than the baseline's own weathering curve | Hold at Gate 1 until seal-latex chemistry is adjusted for ultraviolet stability | R&D |
| 6 | Fine precipitated calcium carbonate at the specific paint grade needed (0.6 micron) cannot be sourced at a confirmed, dated Indian price | Medium | Medium | Supplier qualification trials come back above the model's ₹25-per-kilogram assumption | Direct qualification with named Indian producers (Gulshan Polyols and others) ahead of Gate 1 | Procurement |
| 7 | The model's acrylic-binder footprint assumption (2.5 kilograms of carbon dioxide equivalent per kilogram) sits roughly half of the one directly sourced figure found in this project's own research, 5.2 kilograms per kilogram on a solids basis, with the two figures on different system boundaries | Low to medium | Medium | A boundary-matched life-cycle assessment, commissioned before the footprint claim is used in any external communication, confirms a figure closer to the higher estimate | Commission a properly scoped life-cycle assessment before quoting the footprint externally | Sustainability team |
| 8 | Titanium dioxide price moves against the ₹250-per-kilogram base case | Medium | Medium | Market price data moves outside the ₹200-to-₹300 bear-to-bull band | Index-linked procurement contracts; the physical saving (grams avoided) is unaffected either way, only its rupee value | Finance, procurement |
| 9 | The anti-dumping duty on Chinese titanium dioxide is never notified, or is notified at a different rate than recommended | Medium | Low to medium | CBIC notification tracker shows no action, or a different duty figure, within the expected window | Track CBIC notifications; the direction of the cost case does not depend on the duty, only its baseline magnitude | Regulatory affairs |
| 10 | The addressable-share (40 percent) and adoption-rate (40 percent) assumptions, both team judgement rather than externally verified figures, prove too optimistic | Medium | High | Pilot-phase uptake (section 23, phase 2) tracks below the bear-case 20 percent adoption pace | Phase capital commitment through Gate 1 and Gate 2 rather than committing to full scale-up before pilot data exists | Business unit lead |
| 11 | A competitor files on, or publishes, a similar architecture before this project's own patent filing (section 23.4) | Low to medium | Medium | A competing patent application or peer-reviewed paper surfaces describing a comparable combination | Expedite the narrowly scoped patent filing ahead of the horizon-2 roll-out, per section 23.4 | Legal, intellectual property |
| 12 | Titanium dioxide's own carcinogenicity classification shifts (it already carries a contested status, Group 2B under IARC against A4 under ACGIH) | Low | Low | A regulator reclassifies titanium dioxide, as the European Union has already done for its powder form on procedural grounds [B50 to B54] | Treat as upside optionality: a solution that reduces titanium dioxide mass is reputationally positive under either classification outcome | Regulatory affairs |

### 24.2 A 5-by-5 heat map, as a table

| Impact \ Probability | Low | Low-medium | Medium | Medium-high | High |
|---|---|---|---|---|---|
| High | | | 1, 2, 4, 10 | | |
| Medium-high | | | | | |
| Medium | | 7, 11 | 5, 6, 8 | 3 | |
| Low-medium | | | 9 | | |
| Low | 12 | | | | |

Each risk sits in the cell its own register row gives it. The highest-scoring cell, high impact at medium probability, holds four risks together: risk 1 (binder wets the rutile), risk 2 (porosity falls short), risk 4 (painters thin the seal coat) and risk 10 (adoption proves optimistic). Risk 3 (seal-coat infiltration) carries the register's highest probability, medium to high, at medium impact. Risk 1 is also the single biggest swing in the model's own tornado table `[T14]`, so the physics-based sensitivity sweep and the qualitative register agree on where the first panels should look, and the deck's 5 by 5 heat map on slide 7 draws exactly these placements.

### 24.3 Pre-mortem: imagining the failure before it happens

Following Gary Klein's pre-mortem method, the team imagined, before any lab work begins, that eighteen months from now the programme has failed, and asked why.

- **Story one: the panels never matched the model.** The lab ran the design of experiments in section 22.2, and every cell came back closer to the bear case than the base case; binder wetted the pigment more thoroughly than assumed, porosity settled lower than planned, and the realised saving landed near 20 percent rather than 39 percent. This maps directly to risk 1 and risk 2, and is the single most consequential failure mode this document can imagine, because it would mean the core physical premise, not merely an execution detail, was optimistic.
- **Story two: it worked in the lab and failed in the field.** The pilot's panels passed every pass mark in table 22.1, but once painters applied the seal coat with their own technique rather than a lab's controlled application, the real seal-coat thickness and infiltration drifted outside the tested range, and field complaints about durability or appearance surfaced within a year. This maps to risk 3 and risk 4, and is the reason the roadmap's Gate 1 specifically tests a pilot batch under field application conditions, not only a lab-cast panel.
- **Story three: the economics never held at scale.** The lab and pilot both passed, but when procurement went to source the fine precipitated calcium carbonate and the specialised seal latex at the volumes horizon 2 would need, prices came in well above the assumption register, and the ₹298 crore base-case saving shrank to something closer to the bear case's ₹38 crore once real supplier quotes replaced assumed prices. This maps to risk 6 and risk 8, and is why Gate 2 in section 23.1 specifically re-tests the realised cost saving against the model's tolerance before full roll-out.
- **Story four: someone else got there first.** A competitor or an academic group published a closely related combination before this project's patent filing was complete, and the narrow but real novelty this document claims in section 23.3 evaporated. This maps to risk 11, and is the reason the roadmap places the filing before phase 3's wider visibility, not after.

Each of these four stories traces back to a risk already named in table 24.1, which is the point of running the exercise after building the register rather than instead of it: the pre-mortem did not surface a new category of failure the register had missed, but it did make the two highest-stakes stories (one and three) feel concrete enough that the roadmap's gates were built specifically to catch them early rather than at the end of a capital commitment.

### 24.4 Residual risk after the roadmap's gates

| Risk | Rating before mitigation | Mitigation (from section 23) | Rating after mitigation |
|---|---|---|---|
| 1. Surroundings assumption | High impact, medium probability | Gate 0 lab validation specifically targets this via FIB-SEM before any pilot capital is spent | High impact, lower probability once Gate 0 passes |
| 3. Seal-coat infiltration | High impact, medium-high probability | Gate 1 pilot specifically tests field application, not only lab panels | High impact, lower probability once Gate 1 passes |
| 10. Adoption assumption | High impact, medium probability | Capital phased through Gate 1 and Gate 2 rather than committed up front | Lower impact, since a shortfall is caught before full-scale capital is spent, not after |
| 11. Competitive filing | Medium impact, low-medium probability | Patent filing scheduled before phase 3's wider visibility | Lower probability once filed |

No gate removes risk 1 entirely; it can only be tested earlier and more cheaply than it would otherwise be discovered, which is the actual purpose of a stage-gate roadmap under uncertainty, not a guarantee that the physics will cooperate.

### 24.5 Quantified trigger thresholds for the top four risks

Where the model's own tornado table already gives a numeric range, the trigger for a risk response can be stated as a number rather than only as a qualitative early signal, tightening the register in table 24.1 for the risks that matter most.

| Risk | Quantified trigger | Tag |
|---|---|---|
| 1. Surroundings assumption | Measured titanium dioxide saving at Gate 0 falls below 25% (closer to the bear-case 21% than the base-case 39%) | [T14] |
| 2. Base-coat porosity | Porosimetry reads below 30% (below the midpoint of the 25% to 45% range) | [A05] |
| 3. Seal-coat infiltration | FIB-SEM shows infiltration above 15% of pore volume (above the base-case 10%, approaching the bear-case 25%) | [A07] |
| 4. Seal-coat thickness under-application | Field dry-film-thickness readings average below 15 microns (below the base-case 16.4 micron target) | [T9] |

### 24.6 Ownership and reporting cadence

A risk register that is never reopened is only a document; table 24.6 states how often each risk category is reviewed and against what, so the register in table 24.1 is a living input to the roadmap's gates rather than a one-time exercise.

| Risk category | Review cadence | Reviewed against |
|---|---|---|
| Physical and formulation risks (1, 2, 3, 5) | At every gate (section 23.6), and monthly during Phase 1 | The quantified triggers in table 24.5 |
| Supply and sourcing risks (6, 8, 9) | Quarterly | Supplier quotes and the CBIC notification tracker |
| Business and adoption risk (10) | At Gate 1 and Gate 2 | Realised pilot uptake against the bear-case adoption floor |
| Intellectual property risk (11) | Continuous, via a standing patent and literature watch | New filings or publications matching the combination in section 23.4 |
| Regulatory and reputational risk (7, 12) | Annually, or on any external reclassification event | Published regulator or standards-body text, not secondary commentary |

### 24.7 A tally of the register, by category

Table 24.7 counts the twelve risks in table 24.1 by the category each one belongs to, so the shape of the register is visible at a glance: this proposal's risk is weighted toward the physics itself, not toward commercial or regulatory exposure, which is consistent with section 24's own opening finding that the surroundings assumption alone outweighs every other risk in the register.

| Category | Risks (by number) | Count |
|---|---|---|
| Physical and formulation | 1, 2, 3, 4, 5 | 5 |
| Supply and sourcing | 6, 8, 9 | 3 |
| Business and adoption | 10 | 1 |
| Intellectual property and competitive | 11 | 1 |
| Regulatory and reputational | 7, 12 | 2 |
| Total | | 12 |

Five of the twelve risks, nearly half the register, sit in the physical-and-formulation category, and two of those five (risks 1 and 3) are also the two cells the heat map in table 24.2 places closest to its highest-priority corner. A reader auditing where this programme's effort should go first can read that answer directly off tables 24.2 and 24.7 together, without needing to re-derive it from the model.

---

## 25. A bonus for Case Study 2: the air network sends back more near-infrared

**Answer.** In our model, the same air-network architecture that cuts titanium dioxide for whiteness also reflects more near-infrared light than the premium baseline, 71.1 percent against 63.7 percent at 1,500 nanometres over a 25 percent grey substrate [T15], a link worth stating because Case Study 2 (thermal management) asks for exactly this kind of solar-heat-reflection effect. The figure is an indicator computed on four discrete wavelengths over one substrate inside the same optical model built for Case Study 1, not a measured solar reflectance index, not an emissivity measurement in the atmospheric window that actually drives radiative cooling, and not a claim that this architecture would perform as a cool-roof coating in India's humid climate, where the research lane for Case Study 2 found that high humidity specifically undermines radiative cooling's physical mechanism [G22].

### 25.1 What the model actually shows

| Wavelength | Reference reflectance | Proposal reflectance | Gain |
|---|---|---|---|
| 800 nm | 87.0% | 87.9% | 0.9 points |
| 1000 nm | 82.8% | 86.3% | 3.5 points |
| 1200 nm | 73.3% | 79.4% | 6.1 points |
| 1500 nm | 63.7% | 71.1% | 7.4 points |

*nm = nanometres.*

The gain grows with wavelength, from under one point at 800 nanometres to 7.4 points at 1,500 nanometres, consistent with the same mechanism driving the whiteness result: an air-continuous medium scatters more efficiently than a binder-continuous one across the spectrum, and the effect compounds as the wavelength grows relative to the particle and pore scale, because that is the same reasoning that drives table T4's finding that rutile scatters 1.52 times more per unit volume in air than in binder, carried here into a part of the spectrum visible-light optics does not normally cover. That is the full extent of the finding: a reflectance table at four points, over one grey substrate, inside the same model built and checked for Case Study 1. It is not a solar reflectance index, which is a standardised, solar-spectrum-weighted average across the full 300 to 2,500 nanometre range under a defined test method [S91, S92, model_tables T2]; it is not a thermal emittance figure, which is the second, equally important half of any cool-roof or cool-wall claim; and it was not measured outdoors, on a roof, under India's own climate.

### 25.2 Why this cannot be read as a cool-roof claim

The research lane dedicated to Case Study 2's landscape found the strongest, most India-relevant evidence available on this exact question, and it cuts directly against over-reading the figures in table 25.1. A peer-reviewed study tested a titanium-dioxide-based radiative-cooling coating on rooftops in Mumbai, Nagpur and Prayagraj, and found that high relative humidity specifically reduces atmospheric transmittance in the 8-to-13-micron thermal window that radiative cooling depends on, so the Mumbai site, at 83.77 percent average relative humidity on the test day, achieved subambient cooling only before 9 a.m., after 4 p.m., and at night, not during the hours when a cool-roof claim would matter most [G17 to G22]. The same paper's own abstract states there is "a dearth of comprehensive studies examining their performance under tropical conditions" [G23], a finding this document takes as a caution against assuming any reflectance gain translates cleanly into a cooling benefit in India's climate. A separate, unrelated 2022 paper found that a conventional commercial white paint's solar reflectance can fall from 0.866 to 0.788, a 9.0 percent drop, under accelerated soiling that simulates about three years of real exposure, while a purpose-built anti-aging cooling paint held almost steady, from 0.930 to 0.926 [G27, G28]; nothing in this project's own model accounts for soiling, ageing, or any time-dependent loss of the near-infrared gain shown in table 25.1, which is itself computed only for a fresh, as-made film.

Table 25.2 sets the model's own four-point indicator beside the specific humidity and cooling-differential figures the Mumbai, Nagpur and Prayagraj study actually measured, so the gap between an indoor spectral number and an outdoor field result is visible rather than asserted.

| City (ACS Omega study) | Average relative humidity on the test day | Measured maximum cooling differential | What table 25.1 alone cannot show |
|---|---|---|---|
| Mumbai | 83.77% | Up to 7.9 degrees C cooler than a bare box, but only outside peak sun hours | Whether this architecture's near-infrared gain would survive Mumbai's humidity at all, since the limiting factor there is atmospheric-window emissivity, which this model does not compute |
| Nagpur | 42% | Up to 9.2 degrees C cooler than a bare box | A drier site where radiative cooling performs better in the cited study; this model has no location-specific humidity term to say whether the same would hold here |
| Prayagraj | 45% | Up to 8.1 degrees C cooler than a bare box | Same limitation as Nagpur |

*Source: [G19, G20, G21].*

India's own standard for this product category, IS 17218:2019, "Solar Thermo-Reflective Exterior Coating for Cooling of Roof Top," exists and is currently under a Bureau of Indian Standards working-group revision whose industry members include Asian Paints itself [G39, G40], which is the strongest direct evidence this project's research found that the company is already active in this specific standards conversation, separate from and prior to anything in this document. No named Asian Paints cool-roof product could be confirmed in the research lanes [G49]; the company's own public material describes a generic "cool roof coating" formulated for high solar reflectivity and infrared emissivity without naming a specific stock-keeping unit [G50]. The near-infrared figures in table 25.1 are offered to that existing conversation as one data point from a model built for a different case, not as a submission to Case Study 2 and not as evidence that Asian Paints' committee work should change direction.

### 25.3 What a full solar test would actually need

| Requirement | What it adds beyond this document's T15 | Reference |
|---|---|---|
| Solar-weighted reflectance across the full solar spectrum (roughly 300 to 2,500 nanometres), not four discrete points | A single, standardised number (solar reflectance) comparable across products and climates, following ASTM E903 or ASTM C1549-style integration against a standard solar spectrum | [G35, G36, G41] |
| Thermal emittance in the 8-to-13-micron atmospheric window | The second half of any cooling claim; a high-reflectance, low-emittance surface still heats under some conditions, and this project's model computes neither emittance nor the atmospheric window at all | [G22, S91/S92 model optics] |
| Accelerated soiling (for example, ASTM D7897-style cycling) | A check on whether the near-infrared gain survives realistic dust and dirt accumulation over roughly three years of simulated exposure, which the Nature Communications anti-aging study found can erase most of a conventional white paint's advantage [G27 to G30] | [G27 to G32] |
| Outdoor field testing across humidity regimes, following the ACS Omega Mumbai, Nagpur and Prayagraj protocol | A direct measurement of subambient cooling (or its absence) under India's own range of humid and dry climates, rather than an indoor spectral reflectance number alone | [G17 to G26] |
| Comparison against IS 17218:2019's own numeric thresholds, once read in full | A check against the specific Indian standard Asian Paints already participates in revising, rather than against the differently-scoped and internally conflicting ECBC thresholds (0.70/0.75 in one cited edition, 0.60/0.90 in another) or the higher American ASTM C1483 threshold (reflectance and emittance both at least 0.8) | [G35 to G41] |

None of these five tests has been run, and this section does not claim otherwise; it names them so that if this architecture's near-infrared behaviour is ever pursued further, it is pursued through the same stated-in-advance test plan this document applies to Case Study 1's own lab programme in section 22, rather than through an unverified extrapolation from a four-point indoor spectral table built for a different case.

The purpose of including this bonus section at all is narrower than it might first appear. This document does not submit a Case Study 2 solution; sections 5 and 6 of this research already give Case Study 2 its own full landscape treatment and its own eight-idea screen, with a different recommendation (a humidity-recharged evaporative and radiative layer) named as the best idea if that case were the one chosen. What this section adds is a single, carefully caveated observation that falls directly out of the Case Study 1 optical model without any extra work: an architecture built to save titanium dioxide for whiteness happens, as a side effect of the same physics, to reflect more of the near-infrared spectrum too. A judge reading both case treatments in this document can see that the two are connected by one underlying mechanism, reducing how much of the film's optical budget goes into the pigment and how much goes into air, rather than treating whiteness and thermal management as two unrelated problems that happened to be solved by the same team.

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

## Appendix A: Bibliography

Sources were opened and checked in October 2026. Only sources cited in the text are listed.

| ID | Source | Available at |
|---|---|---|
| S12 | Asian Paints Ltd (primary filing, via search summary) Intellectual Capital, FY2022-23 Annual Report | https://www.asianpaints.com/content/dam/annual-report-2023/pdf/Asian Paints 22-23_Intellectual Capital.pdf |
| S33 | Business Standard Asian Paints 2019 earnings coverage on TiO2 costs | https://www.business-standard.com/article/companies/higher-costs-take-colour-off-asian-paints-117072601839_1.html |
| S34 | Business Standard Asian Paints Q2 FY23 margin commentary | https://www.business-standard.com/amp/article/companies/easing-raw-material-prices-likely-to-aid-margins-of-asian-paints-stocks-122113000973_1.html |
| S48 | ChemAnalyst Indian Paint Association Loses Ground as TiO2 Duty Comes Back | https://www.chemanalyst.com/NewsAndDeals/NewsDetails/indian-paint-association-loses-ground-as-tio2-duty-comes-43706 |
| S49 | European Coatings (quoting the underlying notification) India withdraws anti-dumping duty on titanium dioxide imports from China | https://www.european-coatings.com/news/markets-companies/india-withdraws-anti-dumping-duty-on-titanium-dioxide-imports-from-china/ |
| S50 | StudyCafe (search summary of underlying notification) CBIC imposes Additional Custom Duty on Titanium Dioxide | https://studycafe.in/?p=376927 |
| S52 | a2ztaxcorp.net Collection of Anti-Dumping Duty on Titanium Dioxide Imports from China PR Stopped Following High Court Order | https://a2ztaxcorp.net/collection-of-anti-dumping-duty-on-titanium-dioxide-imports-from-china-pr-stopped-following-high-court-order/ |
| S53 | taxguru.in (title not given on fetched page; case caption) | https://taxguru.in/?p=1007174 |
| S55 | KMML KMML right-to-information disclosure | https://www.kmml.com/uploads/righttoinfo/19031915529884702115452289.pdf |
| S56 | KMML KMML right-to-information disclosure | https://www.kmml.com/uploads/righttoinfo/09012617679556342020141312.pdf |
| S57 | travancoretitanium.com Travancore Titanium Products Ltd website | https://travancoretitanium.com/?page_id=81 |
| S58 | Wikipedia Travancore Titanium Products | https://en.wikipedia.org/wiki/Travancore_Titanium_Products |
| S59 | Newswire VV Titanium Pigments Looks To Invest Rs 100 Crore In New Facility | https://www.newswire.com/news/vv-titanium-pigments-looks-to-invest-rs-100-crore-in-new |
| S60 | Indiainfoline Kilburn Chemicals Ltd summary | https://www.indiainfoline.com/company/kilburn-chemicals-ltd/summary |
| S61 | BSE India BSE corporate filing | https://bseindia.com/xml-data/corpfiling/AttachHis/2325661f-c35f-4654-832b-020cc3b231b7.pdf |
| S62 | ICIS (headline only, page body inaccessible) and Ken Research (search summary) India's MOL to double TIO2 capacity by Dec 2023 / Ken Research summary | https://icis.com/explore/resources/news/2023/01/31/10849419/india-s-mol-to-double-tio2-capacity-by-dec-2023 |
| S63 | Ken Research (search summary) Ken Research industry summary (India pigments market) | https://www.kenresearch.com/industry-reports/india-pigments-market |
| S64 | Indiainfoline Cochin Minerals and Rutile Ltd management discussions | https://live-next.indiainfoline.com/company/cochin-minerals-rutile-ltd/management-discussions |
| S65 | Wikipedia Cochin Minerals and Rutile Limited | https://en.wikipedia.org/wiki/Cochin_Minerals_and_Rutile_Limited |
| S69 | MarketsandMarkets (search summary) Titanium Dioxide Companies | https://www.marketsandmarkets.com/ResearchInsight/titanium-dioxide-market.asp |
| S70 | Motley Fool (search summary) titanium stocks | https://fool.com/investing/stock-market/market-sectors/materials/metal-stocks/titanium-stocks |
| S71 | CNChemicals (search summary) Major Developments in the Titanium Dioxide Industry: 2024 | https://www.cnchemicals.com/Press/92156-Major%20Developments%20in%20the%20Titanium%20Dioxide%20Industry:%202024.html |
| S72 | SunSirs (search summary) SunSirs commodity news | https://www.sunsirs.com/commodity-news/petail-35171.html |
| S73 | TDMA Life cycle inventory | https://www.tdma.info/sustainability/life-cycle-inventory/ |
| S74 | AGRIS/FAO-indexed study (search summary) Life cycle assessment comparison of emerging and traditional Titanium dioxide manufacturing processes | https://agris.fao.org/search/en/records/65df7e900f3e94b9e5d92cd6 |
| S76 | Traceone (citing CJEU/General Court press release) EU General Court judgment on titanium dioxide | https://www.traceone.com/resources/plm-compliance-blog/eu-general-court-judgment-on-titanium-dioxide |
| S77 | Selerant (search summary citing curia.europa.eu press release) EU General Court judgment on titanium dioxide | https://selerant.com/resources/ehs-blog-en/eu-general-court-judgment-on-titanium-dioxide |
| S78 | Court of Justice of the European Union curia.europa.eu press release (cp250099en.pdf) | https://curia.europa.eu/jcms/upload/docs/application/pdf/2025-08/cp250099en.pdf |
| S79 | Mondaq (search summary) EU General Court judgment on titanium dioxide | https://www.mondaq.com/france/healthcare/1675474/titanium-dioxide-general-court-strikes-down-classification-as-human-carcinogen-and-ecj-now-confirms |
| S80 | EUR-Lex This document is an excerpt from the EUR-Lex website | https://eur-lex.europa.eu/eli/C/2025/6670/oj |
| S81 | ChemRadar (search summary) Update EU GHS Classification - Revocation of Titanium Dioxide Carcinogen Classification | https://www.chemradar.com/en/service/detail/fq2v1gv1vcw0 |
| S82 | Mondaq (search summary) EU bans whitening food additive E171 as of January 1 2022 | https://mondaq.com/uk/food-and-drugs-law/1144952/eu-bans-whitening-food-additive-e171-as-of-january-1-2022 |
| S83 | European Commission representation in Cyprus (search summary) food safety: EU to ban the use of titanium dioxide (E171) as a food additive in 2022 | https://cyprus.representation.ec.europa.eu/news/food-safety-eu-ban-use-titanium-dioxide-e171-food-additive-2022-2021-10-08_en |
| S86 | refractiveindex.info TiO2 (Devore) data page | https://refractiveindex.info/?shelf=main&book=TiO2&page=Devore-o |
| S89 | refractiveindex.info Poly(methyl methacrylate) (Sultanova) data page | https://refractiveindex.info/?shelf=organic&book=poly(methyl_methacrylate)&page=Sultanova |
| S91 | Princeton (B. T. Draine) bhmie.f | https://www.astro.princeton.edu/~draine/scat/bhmie/bhmie.f |
| S92 | miepython.readthedocs.io miepython documentation | https://miepython.readthedocs.io/en/latest/02_efficiencies.html |
| S96 | USPTO (ppubs image PDF) patent description of a multi-flux colour-matching method | https://image-ppubs.uspto.gov/dirsearch-public/print/downloadPdf/9830429 |
| S101 | stevenabbott.co.uk Critical Pigment Volume Concentration, CPVC | https://www.stevenabbott.co.uk/practical-coatings/CPVC.php |
| S102 | paint.org 1995 Journal of Coatings Technology review (Kavanagh, cited via paint.org) | https://www.paint.org/wp-content/uploads/2021/09/jctNOV95-Kavanagh.pdf |
| S103 | Asian Paints (professionals TDS, static.asianpaints.com) TDS Apcolite Premium Emulsion | https://static.asianpaints.com/content/dam/professionals/products/pdfs/tds/TDS_Apcolite_Premium_Emulsion.pdf |
| S107 | ISO Reference number 70903 | https://www.iso.org/standard/70903.html?browse=tc |
| S108 | ANSI Webstore preview ISO 6504-3-2006 | https://webstore.ansi.org/preview-pages/ISO/preview_ISO+6504-3-2006.pdf |
| S109 | ISO / evs.ee / ccn-scc.ca ISO 7724-1:1984, -2:1984, -3:1984 listings | https://evs.ee/en/iso-7724-2-1984 |
| S112 | Google Patents US5147940A | https://patents.google.com/patent/US5147940A/en |
| S113 | Google Patents EP2272923A1 | https://patents.google.com/patent/EP2272923A1/en |
| S114 | USPTO / Rohm and Haas Ropaque OP-96 citation (via USPTO downloadable record) | https://image-ppubs.uspto.gov/dirsearch-public/print/downloadPdf/6174938 |
| S117 | Google Patents US9234084B2 | https://patents.google.com/patent/US9234084/en |
| S118 | Coatings World Dow EVOQUE pre-composite polymer coverage | https://www.coatingsworld.com/contents/view_suppliers-news/2011-04-05/dow-breakthrough-enables-better-paint-with-less-ti |
| S119 | Univar Solutions (Dow distributor) Dow EVOQUE distributor literature | https://discover.univarsolutions.com/en-fr-ca/markets/coatings/titanium-dioxide/ |
| S120 | Google Patents / Justia Patents US10233329B2 family (via search summary of cited patent text) | https://patents.justia.com/patent/10233329 |
| S121 | Elsevier ScienceDirect article page | https://www.sciencedirect.com/science/article/abs/pii/S0927775717301802 |
| S122 | Scientific Reports (via PMC) Mesoporous TiO2 Yolk-Shell Microspheres for Dye-sensitized Solar Cells with a High Efficiency Exceeding 11% | https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4585661/ |
| S124 | Elsevier ScienceDirect article page | https://www.sciencedirect.com/science/article/abs/pii/S0927775725018126 |
| S125 | European Coatings (trade press, citing a Progress in Organic Coatings study) Hollow polymer-silica particles offer sustainable alternative to TiO2 in coatings | https://www.european-coatings.com/news/coatings-technologies/hollow-polymer-silica-particles-offer-sustainable-alternative-to-tio%e2%82%82-in-coatings/ |
| S126 | interempresas.net (trade press) hollow polymer-silica hybrid particles for coatings (Spanish trade coverage) | https://www.interempresas.net/Industria-Pintura/623382-Particulas-huecas-hibridas-polimero-silice-sustituyen-totalmente-TiO-recubrimientos-opacos.html |
| S128 | University of Warwick (WRAP repository) Anisotropic hollow silica particles thesis | https://wrap.warwick.ac.uk/59755/ |
| S129 | Science (AAAS), reported via Princeton/Columbia research pages Hierarchically porous polymer coatings for highly efficient passive daytime radiative cooling | https://collaborate.princeton.edu/en/publications/hierarchically-porous-polymer-coatings-for-highly-efficient-passi/ |
| S130 | Columbia University (Columbia Engineering) Columbia Engineering news release on the Mandal et al. 2018 paper | https://www.engineering.columbia.edu/about/news/polymer-coating-cools-down-buildings |
| S132 | Science (AAAS), via University of Exeter and press coverage Brilliant Whiteness in Ultrathin Beetle Scales | https://www.microscopy-uk.org.uk/mag/Vukusicetal_white_beetle_brevium.pdf |
| S133 | Scientific Reports (via PMC4133710) Bright-White Beetle Scales Optimise Multiple Scattering of Light | https://pmc.ncbi.nlm.nih.gov/articles/PMC4133710/ |
| S134 | Nature Photonics (via PMC10241642) Brilliant whiteness in shrimp from ultra-thin layers of birefringent nanospheres | https://pmc.ncbi.nlm.nih.gov/articles/PMC10241642/ |
| S135 | Physical Review Letters (reported via arXiv preprint page) Fortini et al. 2016, drying stratification of colloidal mixtures | https://arxiv.org/abs/1602.01106v1 |
| S136 | Royal Society of Chemistry Schulz et al., Soft Matter | https://pubs.rsc.org/en/content/articlehtml/2018/sm/c8sm01025k |
| S137 | EPO (data.epo.org publication server) EP0538411A4 | https://data.epo.org/gpi/EP0538411A4 |
| S138 | Imerys (via SpecialChem product page) Imerys Celtix technical datasheet | https://www.specialchem.com/coatings/product/imerys-celtix |
| S139 | Arkema Arkema opaque polymers product page | https://www.arkema.com/usa/en/product-range/coatingresins/opacifiers/ |
| S140 | Google Patents US9636706B2 | https://patents.google.com/patent/US9636706B2/en |
| S141 | Canadian Intellectual Property Office (brevets-patents.ic.gc.ca) CA2735861 | https://brevets-patents.ic.gc.ca/opic-cipo/cpd/eng/patent/2735861/summary.html |
| S142 | Google Patents US7150522B2 | https://patents.google.com/patent/US7150522/en |
| S145 | IndiaMART, ExportersIndia Precipitated calcium carbonate listings | https://m.indiamart.com |
| S146 | GlobalLinker Precipitated calcium carbonate | https://www.globallinker.com/products/precipitated-calcium-carbonate-8399396 |
| S147 | GlobalLinker Precipitated calcium carbonate powder IP BP grade | https://www.globallinker.com/products/precipitated-calcium-carbonate-powder-ip-bp-grade-8254018 |
| S148 | IndiaInfoline Gulshan Polyols Ltd company summary | https://www.indiainfoline.com/company/gulshan-polyols-ltd/summary |
| S149 | Aditya Birla Capital; BSE India Gulshan Polyols company background; BSE corporate filing | https://stocksandsecurities.adityabirlacapital.com/markets/company-background/22361 ; https://www.bseindia.com/xml-data/corpfiling/CorpAttachment/2015/12/59F1D21E_7D49_472D_9010_8B7AE82B0417_112936.pdf |
| S150 | EP1016628A1 (EPO) Process for the preparation of precipitated calcium carbonate | https://data.epo.org/gpi/EP1016628A1-Process-for-the-preparation-of-precipitated-calcium-carbonate |
| S151 | ajol.info (South African Journal of Chemistry) Academic study on PCC carbonation reactor (title not resolved from snippet) | https://www.ajol.info/index.php/sajc/article/view/154848 |
| S157 | IndiaMART (Shreeji Sunbond Enterprises) Styrene Acrylic Co-Polymer Emulsion Paint Binder | https://m.indiamart.com/shreejisunbondenterprises |
| S158 | IndiaMART (Lakshmi Colour Company) Styrene acrylic emulsion | https://m.indiamart.com/lakshmi-colour-company |
| S159 | IndiaMART Styrene Acrylic Emulsion | https://m.indiamart.com/impcat/styrene-acrylic-emulsion.html |
| S162 | US Patent 7906577 Latex binders, aqueous coatings and paints having freeze-thaw stability and methods for using same | https://image-ppubs.uspto.gov/dirsearch-public/print/downloadPdf/7906577 |
| S163 | PCI Magazine Surfactant Evaluation in Preparing Acrylic Ultrafine Latexes | https://pcimag.com/articles/93449-surfactant-evaluation-in-preparing-acrylic-ultrafine-latexes |
| S164 | Arkema Coating Resins TDS NEOCAR Acrylic 850 | https://coatingresins.arkema.com/assets/arkema/TDS_NEOCAR%C2%AE%20Acrylic%20850_MDM-26748-00-WW_en_WW.pdf |
| S165 | Springer (abstract) Journal of Coatings Technology (title per abstract, Kan 1999) | https://link.springer.com/doi/10.1007/BF02698388 |
| S166 | Evonik TDS Protectosil 60 SK | https://products.evonik.com/assets/39/25/TDS_PS60SK_EN_202412_EN_163925.pdf |
| S167 | Wacker Chemie SILRES BS SMK 1311 | https://www.wacker.com/h/zh-cn/medias/SILRES-BS-SMK-1311-en-2022.07.26.pdf |
| S168 | PROSOCO WS Siloxane WB PDS | https://prosoco.com/Content/Documents/Product/WS_Siloxane_WB_PDS.pdf |
| S169 | (manufacturer per architectureanddesign.com.au attachment) Solid Silane 40 PDS | https://architectureanddesign.com.au/getattachment/7cede3eb-4f34-44d8-b8e0-717a18a93e6c/attachment.aspx |
| S170 | PROSOCO Silane 100 product page | https://prosoco.com/product/silane-100/ |
| S172 | OSHA Titanium Dioxide chemical exposure data page | https://www.osha.gov/chemicaldata/246 |
| S173 | NIOSH / CDC Current Intelligence Bulletin 63: Occupational Exposure to Titanium Dioxide | https://stacks.cdc.gov/view/cdc/5922 |
| S175 | IARC / WHO IARC Monographs on the Evaluation of Carcinogenic Risks to Humans, Volume 93 | https://publications.iarc.who.int/111 |
| S179 | Univar Solutions SDS, precipitated calcium carbonate | https://www.univarsolutions.com/documents/file/view/code/sds_file/id/16141456/ |
| S180 | Mississippi Lime Company SDS US - Slurry Precipitated Calcium Carbonate (all) | https://mississippilime.com/wp-content/uploads/2018/07/SDS%20US%20-%20Slurry%20Precipitated%20Calcium%20Carbonate%20(all).pdf |
| S189 | asianpaints.com (blog) Importance of Primers and Putty in Painting | https://www.asianpaints.com/content/ap/en/home/blogs/importance-of-primers-and-putty-in-painting.html |
| S193 | BIS BIS document on IS 15489 (search summary) | https://services.bis.gov.in/tmp/1734839056.pdf |
| S195 | BIS BIS draft amendment document (search summary) | https://services.bis.gov.in/tmp/F1CHD18124048_23042024_2.docx |
| S197 | BIS BIS standard summary for IS 428 (search summary) | https://services.bis.gov.in/tmp/SR428.pdf |
| S200 | BIS, via law.resource.org IS 5410 (1992): Cement paint | https://law.resource.org/pub/in/bis/S02/is.5410.1992.pdf |
| S205 | asianpaints.com Beautiful Homes Painting Services: Overview, Process and FAQ | https://www.asianpaints.com/campaign/asian-paints-safe-painting-service/index-new-service.html |
| S208 | India Meteorological Department Climatological Table (Period 1991-2020), New Delhi (Safdarjung) | https://mausam.imd.gov.in/newdelhi/mcdata/safdarjung2.pdf |
| S209 | equityedgeresearch (Substack) industry report paint industry (search summary) | https://equityedgeresearch.substack.com/p/industry-report-paint-industry |
| S210 | Business Standard (reporting on Phillip Capital) Phillip Capital sector note (search summary) | https://www.business-standard.com/markets/news/phillip-capital-sees-brighter-colours-for-paints-sector-check-top-picks-125120900079_1.html |
| S211 | Business Standard search summary (Business Standard, 2015 article; undated recent estimate) | https://www.business-standard.com/article/companies/berger-s-premium-valuations-versus-asian-paints-unsustainable-115110500918_1.html |
| S212 | The Week (PTI wire) Aggressive pricing, discounting by new entrants intensifying competition in paint industry | https://www.theweek.in/wire-updates/business/2025/06/29/dcm7-biz-paint-competition.html |
| S213 | policy.asiapacificenergy.org (IEA-hosted policy database, text of ICAP goals) India Cooling Action Plan summary | https://policy.asiapacificenergy.org/node/4161 |
| S214 | PRS India (mirroring MoEFCC/PIB release) Press Release, Draft India Cooling Action Plan | https://prsindia.org/files/parliamentry-announcement/Press%20Release-%20Draft%20India%20Cooling%20Action%20Plan.pdf |
| S215 | NRDC / ICAP secondary coverage ICAP launch coverage (search summary) | https://www.nrdc.org/bio/anjali-jaiswal/indias-ambitious-plan-cool-growing-population |
| S216 | iamrenew.com Roof Cooling In Focus As Telangana Leads With Policy For Buildings | https://www.iamrenew.com/environment/roof-cooling-in-focus-as-telangana-leads-with-policy-for-buildings/ |
| S217 | plaksha.edu.in / secondary coverage Telangana cool roof coverage (search summary) | https://plaksha.edu.in/blog/summer-buffer-indias-first-cool-roof-policy-takes-off-in-t |
| S218 | Deccan Herald Telangana adopts cool roof policy to reduce heat stress in buildings | https://www.deccanherald.com/india/telangana-adopts-cool-roof-policy-to-reduce-heat-stress-in-buildings-1206440.html |
| S219 | secondary press coverage (via search aggregation) Telangana cool roof policy coverage (search summary) | https://www.nrdc.org/bio/prima-madan/telangana-announces-groundbreaking-cool-roof-policy |
| S220 | NRDC (secondary, via search summary) Ahmedabad Cool Roofs Initiative coverage | https://www.nrdc.org/bio/nehmat-kaur/ahmedabad-cool-roofs-initiative-5th-heat-action-plan |
| S221 | ACS Omega, via PMC mirror Cooling Performance of TiO2-Based Radiative Cooling Coating in Tropical Conditions | https://pmc.ncbi.nlm.nih.gov/articles/PMC11656601 |
| S222 | ACS Omega Cooling Performance of TiO2-Based Radiative Cooling Coating in Tropical Conditions (abstract) | https://pubs.acs.org/doi/10.1021/acsomega.4c07223 |
| S223 | Elsevier journal (via search aggregation) Climate change effect on the cooling performance and assessment of passive daytime photonic radiative cooler in India (search summary) | https://katalog.hcu-hamburg.de/vufind/Search2Record/ELV004893646 |
| S224 | secondary review literature (via search aggregation) Humid-climate radiative cooling literature (search summary) | https://pubs.rsc.org/en/content/articlehtml/2023/va/d3va00161j |
| S226 | Nature Communications Durable radiative cooling against environmental aging | https://pmc.ncbi.nlm.nih.gov/articles/PMC9381728/ |
| S228 | delhigreens.com (secondary, quoting the code text) Green Building as a Tool for Natural Cooling Amidst the Climate Crisis | https://delhigreens.com/2019/06/13/green-building-as-a-tool-for-natural-cooling-amidst-the-climate-crisis/ |
| S229 | Bureau of Energy Efficiency (via pdf4pro mirror) ECBC training materials (search summary, BEE deck mirror) | https://pdf4pro.com/view/energy-60c150.html |
| S230 | multiple secondary sources (BEE, delhigreens, coolrooftoolkit) ECBC edition comparison (search summary, not independently confirmed against either primary ECBC PDF) | https://beeindia.gov.in/sites/default/files/2019-10/ECBC%20Session%201.pdf |
| S231 | Bureau of Indian Standards (services.bis.gov.in) BIS standard listing, IS 17218:2019 | https://www.services.bis.gov.in/php/BIS_2.0/dgdashboard/published/sub_sub_grp_stn_list/71 |
| S232 | Bureau of Indian Standards (services.bis.gov.in) BIS committee composition listing | https://www.services.bis.gov.in/php/BIS_2.0/bisconnect/dgdashboard/committee_sso/composition/8671/5 |
| S233 | ASTM International (store.astm.org) Standard Specification for Exterior Solar Radiation Control Coatings on Buildings (ASTM C1483) | https://store.astm.org/c1483_c1483m-17.html |
| S234 | Electronics Cooling (Iyengar and Schmidt) Energy Consumption of Information Technology Data Centers | https://www.electronics-cooling.com/2010/12/energy-consumption-of-information-technology-data-centers/ |
| S235 | Politecnico di Torino (iris.polito.it) Data centre cooling review (search summary) | https://iris.polito.it/retrieve/handle/11583/2627125/80327/DC%20seb15.pdf |
| S236 | IBM Research Experimental characterization of an energy-efficient chiller-less data center test facility with warm-water-cooled servers | https://research.ibm.com/publications/experimental-characterization-of-an-energy-efficient-chiller-less-data-center-test-facility-with-warm-water-cooled-servers |
| S237 | International Journal of Refrigeration, via International Institute of Refrigeration (IIR) listing Data centers cooling: A critical review of techniques, challenges, and energy saving solutions | https://iifiir.org/en/fridoc/data-centers-cooling-a-critical-review-of-techniques-challenges-and-148553 |
| S238 | n/a Asian Paints product search (negative result) | https://www.asianpaints.com/content/ap/en/home/blogs/how-roof-waterproofing-helps-in-cooling-the-home.html |
| S240 | Renewable and Sustainable Energy Reviews (search attempt) T-R1 citation verification attempt | https://link.springer.com/article/10.1007/s42452-025-07360-z |
| S241 | Lawrence Berkeley National Laboratory (search attempt) T-R3 citation verification attempt | https://newscenter.lbl.gov/feature-stories/2008/12/11/cool-world/ |
| S242 | Green Seal Asian Paints on Integrating Sustainability into Business Objectives | https://greenseal.org/?p=6172 |
| S243 | Asian Paints Beautiful Homes magazine Finally, a collection of organic paints for the home | https://www.beautifulhomes.asianpaints.com/magazine/lifestyle/features/finally-a-collection-of-organic-paints-for-the-home.html |
| S244 | Asian Paints sustainability site Renewable content in product offerings | https://sustainability.asianpaints.com/sustainability/renewable-content-in-product-offerings.php |
| S245 | Asian Paints sustainability site Product stewardship, renewable content in product offerings | https://sustainability.asianpaints.com/sustainability/product-stewardship-renewable-content-in-product-offerings.php |
| S246 | APEDA Cashew export data (DGCIS) | https://apeda.gov.in/cashew |
| S247 | Google Patents / USPTO US10683317B2, Compounds and process for preparation of the same from cashew nut shell liquid (CNSL) | https://patents.google.com/patent/US10683317 |
| S250 | The Tribune 66% drop in stubble burning FIRs registered in a year: RTI | https://www.tribuneindia.com/news/delhi/66-drop-in-stubble-burning-firs-registered-in-a-year-rti |
| S252 | IANS Live Govt yet to decide on raising ethanol blending in petrol beyond 20 pc: MoS | https://ianslive.in/govt-yet-to-decide-on-raising-ethanol-blending-in-petrol-beyond-20-pc-mos--20260720184611 |
| S254 | IndianPSU MoPNG Debunks Myths Around E20 Fuel | https://indianpsu.com/?p=39532 |
| S255 | Hydrocarbon Engineering (reprinting Braskem release) Braskem expands its biopolymer production by 30% | https://www.hydrocarbonengineering.com/the-environment/25072023/braskem-expands-its-biopolymer-production-by-30/ |
| S256 | renewable-carbon.eu (reprinting Braskem release) Braskem invests US$61 million to increase biopolymer production | https://renewable-carbon.eu/news/braskem-invests-us61-million-to-increase-biopolymer-production/ |
| S257 | Wacker Chemie AG WACKER has biomass-balance method certified by TÜV SÜD | https://www.wacker.com/cms/en-de/online-magazin/detail-103808.html |
| S258 | Celanese Corporation / SEC EDGAR (search across Celanese press releases and SEC 10-K filings) | https://www.sec.gov/Archives/edgar/data/1306830/000130683022000017/ce-20211231.htm |
| S259 | arXiv preprint Lignocellulosic biomass: a sustainable platform for the production of bio-based chemicals and polymers | https://arxiv.org/pdf/1602.01684 |
| S260 | Gantrade Bio-based Vinyl Acetate Monomer (Bio-VAM) | https://www.gantrade.com/products/bio-based-vinyl-acetate-monomer-bio-vam |
| S261 | Praj Industries press release (via renewable-carbon.eu) IOCL's 2G Ethanol Bio-Refinery based on Praj's technology inaugurated by Prime Minister Modi | https://renewable-carbon.eu/news/iocls-2g-ethanol-bio-refinery-based-on-prajs-technology-inaugurated-by-prime-minister-modi/ |
| S262 | Praj Industries (official PDF press release) 20220816 Press Release, IOCL's 2G Ethanol Bio-Refinery | https://www.praj.net/wp-content/uploads/2022/08/20220816-Press-Release-IOCLs-2G-Ethanol-Bio-Refinery-based-on-Prajs-technology-inaugurated-by-Prime-Minister-Modi.pdf |
| S263 | Mobility Outlook Praj To Catalyse IOCL's Panipat Bio-Refinery To Produce 2G Ethanol | https://mobilityoutlook.com/news/praj-to-catalyse-iocls-panipat-biorefinery-to-produce-2g-ethanol |
| S265 | Teknoscienze Biobased itaconic acid market and research trends, is it really a promising chemical? | https://www.teknoscienze.com/tks_article/biobased-itaconic-acid-market-and-research-trends-is-it-really-a-promising-chemical/ |
| S266 | Royal Society of Chemistry Chem Soc Rev article page (doi resolution) | https://pubs.rsc.org/cs/article/36/11/1788-1802/100433 |
| S267 | ACS Publications / secondary citing source pubs.acs.org DOI resolution; secondary citation listing | https://pubs.acs.org/doi/10.1021/cr3001274 |
| S268 | Various, citing Petrović 2008 Multiple reference-list citations (e.g. vegetable-oil polyol review papers) | https://www.ocl-journal.org/articles/ocl/ref/2013/01/ocl2013201p16/ocl2013201p16.html |
| S271 | Fraunhofer-hosted PDF / Wiley (Angewandte Chemie) Nanocelluloses, A New Family of Nature Based Materials (PDF copy) | https://kompozit.org.tr/wp-content/uploads/2021/04/Nanocelluloses_A_New_Family_of_Nature_Ba.pdf |
| S275 | Taylor & Francis Taylor & Francis Online, DOI resolution | https://www.tandfonline.com/doi/full/10.1080/29965292.2025.2599796 |
| S276 | Harvard D3 Platform for Digital Innovation and Transformation Asian Paints: India's Biggest Data Science Company that Sells Paint | https://d3.harvard.edu/platform-digit/submission/asian-paints-indias-biggest-data-science-company-that-sells-paint/index.html |
| S277 | YourStory Asian Paints: India's Biggest Data Science Company that Sells Paint | https://yourstory.com/2023/08/asian-paints-data-science-revolution |
| S280 | ACS Polymers Au (American Chemical Society) Emerging Trends in Machine Learning: A Polymer Perspective | https://pmc.ncbi.nlm.nih.gov/articles/PMC10273415/ |
| S281 | Crunchbase / third-party startup directories Intellegens company profile | https://crunchbase.com/organization/intellegens |
| S282 | American Chemical Society ACS Polymers Au, vol. 2, issue 1 (article at page 8) | https://pubs.acs.org/apaccd/article-pdf/2/1/8/13897967/lg1c00035.pdf |
| S283 | Nature Reviews Materials (Springer Nature) Design of functional and sustainable polymers assisted by artificial intelligence | https://ramprasad.mse.gatech.edu/wp-content/uploads/2024/08/Tran_et_al-2024-Nature_Reviews_Materials.pdf |
| S284 | Brief citation versus search results A-R7 as given in the brief (title/journal combination not found) | https://research.buaa.edu.cn/en/publications/data-and-machine-learning-in-polymer-science/ |
| S285 | American Chemical Society (ACS Polymers Au) A-R3 and A-R8 cross-check: both resolve to the same page range (3/3/239) | https://pubs.acs.org/apaccd/article-pdf/3/3/239/3293341/lg2c00053.pdf |
| S288 | Frontiers Media Frontiers in Materials, DOI 10.3389/fmats.2022.818535 | https://www.frontiersin.org/articles/10.3389/fmats.2022.818535/full |
| S289 | Nature Computational Science (Springer Nature) The role of computational science in digital twins (closest match to A-R12's theme; exact brief title not found) | https://link.springer.com/article/10.1038/s43588-024-00609-4 |
| S290 | Archives of Computational Methods in Engineering (Springer) Artificial Intelligence in Materials Modeling and Design (closest match; exact brief title and "agentic intelligence" framing not found) | https://cronfa.swan.ac.uk/Record/cronfa55399 |
| S292 | Science and Technology of Advanced Materials: Methods NIMS polymer database PoLyInfo (I): an overarching view of half a million data points | https://mdr.nims.go.jp/datasets/c471047b-26ee-4d87-839b-e68c70573133 |
| S294 | National Institute for Materials Science (NIMS) Polymer Database (PoLyInfo) terms of use | https://polymer.nims.go.jp/ |
| S295 | Journal of Physical Chemistry C (2018), with 2020 follow-up in Journal of Applied Physics Polymer Genome: A Data-Powered Polymer Informatics Platform for Property Predictions | https://ramprasad.mse.gatech.edu/wp-content/uploads/2020/11/PG_JAP2020.pdf |
| S296 | Journal of Physical Chemistry C Polymer Genome: A Data-Powered Polymer Informatics Platform for Property Predictions | https://ramprasad.mse.gatech.edu/wp-content/uploads/2018/08/176.pdf |
| S297 | arXiv preprint (submitted 9 Dec 2025) Open Polymer Challenge: Post-Competition Report | https://arxiv.org/pdf/2512.08896 |
| S298 | arXiv preprint (Dahms et al.) A self-driving lab for solution-processed electrochromic thin films | https://arxiv.org/pdf/2512.05989 |
| S299 | 2022 MRS Fall Meeting Ada: closed-loop autonomous experimentation for spray-coated films (conference presentation) | https://mrs.org/meetings-events/presentation/2022_mrs_fall_meeting/2022_mrs_fall_meeting-3804927 |
| S300 | arXiv preprint (summarised via EmergentMind) RAISE: a closed-loop autonomous system for formulation and wettability optimisation | https://www.emergentmind.com/papers/2510.06546 |
| S301 | arXiv preprint (Frazier et al., 2015) Bayesian optimization for materials design | https://arxiv.org/abs/1506.01349 |
| S302 | Digital Discovery (Royal Society of Chemistry) Navigating materials design spaces with efficient Bayesian optimization: a case study in functionalized nanoporous materials | https://pubs.rsc.org/en/content/articlehtml/2025/dd/d5dd00237k |
| S303 | LinkedIn (co-author post, secondary to the paper) LinkedIn post summarising the Digital Discovery BO pipeline result | https://gr.linkedin.com/in/vgkatsis |
| S304 | ChemRxiv preprint Bayesian optimization of nanoporous materials | https://chemrxiv.org/engage/chemrxiv/article-details/60e8e7e4551cb02a05ae0c32 |
| S305 | arXiv preprint (2025) Why Physics Still Matters: Improving Machine Learning Prediction of Material Properties with Phonon-Informed Datasets | https://www.alphaxiv.org/abs/2511.15222 |
| S306 | Materials & Design (journal article indexed via DOAJ) Effective data sampling strategies and boundary condition constraints of physics-informed neural networks for identifying material properties in solid mechanics (closest matching PINN-with-stability-constraints result) | https://doaj.org/article/c7c7dee69a994de3b359f739216d10fb |
| S307 | ProgramMaster conference abstract system (title not confirmed in this pass; conference/programmaster abstract listing) | https://www.programmaster.org/PM/PM.nsf/ApprovedAbstracts/5E61627FF5D0EA7285258B1D000975D6 |
| S308 | Innovative Health Initiative (IHI, formerly IMI) Federated learning model allows competitors to pool data, identify promising drug candidates | https://www.ihi.europa.eu/news-events/newsroom/federated-learning-model-allows-competitors-pool-data-identify-promising |
| S309 | IHI / CORDIS (EU project factsheet) MELLODDY project factsheet | https://www.ihi.europa.eu/projects-results/project-factsheets/melloddy |
| S310 | Nature Machine Intelligence (2025) Federated learning with partner-specific model annotation for drug discovery (FLuID) | https://pmc.ncbi.nlm.nih.gov/articles/PMC11005050/ |
| S311 | arXiv preprint, 2506.18525 Federated learning proposal for chemical companies with private regional chemical-space data | https://web3.arxiv.org/pdf/2506.18525 |
| S312 | US Patent and Trademark Office Information processing system (on-premises industrial data confidentiality patent) | https://image-ppubs.uspto.gov/dirsearch-public/print/downloadPdf/12530019 |

Model assumptions (`[A05]` style tags) resolve to section 5 of `PLAN.md` and section 26 of this document, not to this bibliography; the raw Asian Paints facts cited as `[A##]` throughout are traceable directly in `research/raw/R-A.md`, shipped alongside this document.

## Appendix B: Model tables

Model hash `b377745d37`, checks 13 of 13, run 17 Oct 2026.

## T1. Assumptions register

| ID | Base | Bear | Bull | Unit | Basis |
|---|---|---|---|---|---|
| A01 | 30.0 | 30.0 | 30.0 | um | Dry film per coat of a premium interior emulsion; two coats; the same wet film and spreading rate for every system compared |
| A02 | 0.18 | 0.18 | 0.18 | fraction | TiO2 pigment volume concentration of the premium baseline film (about 20 percent TiO2 by weight in the can) |
| A03 | 0.2 | 0.2 | 0.2 | fraction | Coarse ground calcium carbonate (3 um) volume fraction in the baseline film |
| A04 | 250.0 | 250.0 | 250.0 | nm | Rutile pigment median crystal diameter, lognormal geometric standard deviation 1.35 |
| A05 | 0.35 | 0.25 | 0.45 | fraction | Porosity of the air-network base coat; pigment coating layers on paper run 25 to 45 percent |
| A06 | 0.25 | 0.25 | 0.25 | fraction | Binder share of base-coat solids by volume (the base coat is formulated above its critical PVC) |
| A07 | 0.1 | 0.25 | 0.0 | fraction | Share of base-coat pore volume filled by the seal coat during application (infiltration) |
| A08 | bruggeman | binder-wetted | air | rule | Optical surroundings of base-coat particles: Bruggeman mix of the air and binder that remain; bear halves the air share; bull is pure air |
| A09 | 600.0 | 600.0 | 600.0 | nm | Median diameter of the precipitated calcium carbonate in the base coat, lognormal geometric standard deviation 1.4 |
| A10 | 0.00015 | 0.00015 | 0.00015 | 1/um | Background absorption of binder and trace impurities per unit binder volume; sets baseline luminous reflectance at full hiding near 91 percent |
| A11 | 0.2 | 0.2 | 0.2 | Y units | Brightness tolerance: the proposal's luminous reflectance over white may sit at most this far below the baseline |
| A12 | 0.998 | 0.998 | 0.998 | ratio | Minimum two-coat contrast ratio over black (1 percent) and white (80 percent) substrates |
| A13 | 250.0 | 200.0 | 300.0 | INR/kg | Landed price of rutile TiO2 pigment in India |
| A14 | 4.0 | 4.0 | 4.0 | g/cm3 | Density of pigment-grade rutile |
| A15 | 25.0 | 30.0 | 20.0 | INR/kg | Price of fine precipitated calcium carbonate (0.6 um) |
| A16 | 8.0 | 8.0 | 8.0 | INR/kg | Price of coarse ground calcium carbonate |
| A17 | 190.0 | 190.0 | 190.0 | INR/kg | Price of acrylic binder solids |
| A18 | 3.0 | 2.5 | 3.5 | kg CO2e/kg | Cradle-to-gate footprint of TiO2 pigment |
| A19 | 2.7 | 2.7 | 2.7 | g/cm3 | Density of calcium carbonate |
| A20 | 1.1 | 1.1 | 1.1 | g/cm3 | Density of acrylic binder solids |
| A21 | 35500.0 | 35500.0 | 35500.0 | INR Cr | Asian Paints consolidated revenue, FY26 |
| A22 | 0.563 | 0.563 | 0.563 | share | Raw material and packaging cost as a share of revenue (one minus the 43.7 percent FY26 gross margin) |
| A23 | 0.15 | 0.1 | 0.2 | share | TiO2 share of the raw material bill |
| A24 | 0.4 | 0.3 | 0.5 | share | Share of TiO2 use that sits in interior emulsions and their primers (the addressable use) |
| A25 | 0.4 | 0.2 | 0.6 | share | Adoption across the addressable volume by year 5 |
| A26 | 2.5 | 2.5 | 2.5 | kg CO2e/kg | Cradle-to-gate footprint of acrylic binder solids |
| A27 | 0.6 | 0.8 | 0.4 | kg CO2e/kg | Cradle-to-gate footprint of precipitated calcium carbonate |
| A28 | 15.0 | 20.0 | 12.0 | um | Minimum dry film of the seal coat, so that it forms a continuous, scrubbable skin over a porous base |
| A29 | 0.5 | 0.5 | 0.5 | um/s | Water evaporation rate of a fresh film, hot and dry interior (north India summer) |
| A30 | 0.25 | 0.25 | 0.25 | um/s | Water evaporation rate of a fresh film, composite climate interior |
| A31 | 0.1 | 0.1 | 0.1 | um/s | Water evaporation rate of a fresh film, warm and humid interior (coastal monsoon) |

## T2. Optical constants used at three wavelengths

| Material | 450 nm | 550 nm | 650 nm | Source of the dispersion |
|---|---|---|---|---|
| Rutile TiO2 (isotropic average) | 2.930 | 2.750 | 2.669 | Devore 1951, Urbach edge assumed |
| Acrylic binder (PMMA) | 1.501 | 1.493 | 1.488 | Sultanova et al. 2009 |
| calcite | 1.6 | 1.6 | 1.6 | Constant, handbook value |
| ZnS | 2.37 | 2.37 | 2.37 | Constant, handbook value |
| ZrO2 | 2.17 | 2.17 | 2.17 | Constant, handbook value |
| BaSO4 | 1.64 | 1.64 | 1.64 | Constant, handbook value |
| PS | 1.59 | 1.59 | 1.59 | Constant, handbook value |
| organic | 1.96 | 1.96 | 1.96 | Constant, handbook value |
| air | 1.0 | 1.0 | 1.0 | Constant, handbook value |
| silica | 1.46 | 1.46 | 1.46 | Constant, handbook value |

## T3. Model checks

| Check | Result |
|---|---|
| C1 Mie benchmark m 1.55, x 5.213: Qsca within 0.1 percent of 3.10543 (Bohren and Huffman) | PASS |
| C2 a two-layer sphere with equal layers equals the homogeneous sphere | PASS |
| C3 an absorbing sphere has positive absorption | PASS |
| C4 Percus-Yevick S(q to 0) equals the compressibility limit within 3 percent | PASS |
| C5 Kubelka-Munk thick-film limit equals R infinity | PASS |
| C6 baseline is a plausible premium white (CR 0.995 to 0.9995, Y 88 to 93, b* 0.5 to 3) | PASS |
| C7 base-case proposal meets brightness, contrast ratio and seal thickness | PASS |
| C8 scenario order bear < base < bull | PASS |
| C9 contrast ratio rises with TiO2 in the baseline coat | PASS |
| C10 every reflectance lies between 0 and 1 | PASS |
| C11 rutile scatters more per unit volume in air than in binder | PASS |
| C12 the screen's baseline row reproduces the fair reference within 1 percent of TiO2 | PASS |
| C13 the fair reference needs between 85 and 100 percent of the premium's TiO2 | PASS |

## T4. Rutile scatters more per unit volume when the medium around it has a lower index

| Host index | Transport scattering per unit TiO2 volume (1/µm) | Ratio to binder (1.49) |
|---|---|---|
| 1.00 | 12.6 | 1.52x |
| 1.10 | 11.7 | 1.42x |
| 1.20 | 10.9 | 1.33x |
| 1.33 | 10.0 | 1.22x |
| 1.40 | 9.2 | 1.12x |
| 1.49 | 8.2 | 1.00x |
| 1.55 | 7.6 | 0.92x |

## T5. A thin air gap around rutile lowers its scattering; a thick one costs film volume

| Air gap around a 225 nm rutile core | Per unit TiO2 volume (1/µm) | Per unit particle volume (1/µm) |
|---|---|---|
| 0 nm | 11.7 | 11.7 |
| 20 nm | 10.5 | 6.4 |
| 40 nm | 9.9 | 4.0 |
| 80 nm | 10.4 | 2.1 |
| 150 nm | 16.2 | 1.3 |
| 250 nm | 28.1 | 0.8 |

## T6. Crowding: scattering efficiency of rutile falls as its volume fraction rises

| TiO2 volume fraction | In binder (1/µm) | Efficiency in binder | In air (1/µm) | Efficiency in air |
|---|---|---|---|---|
| 5% | 0.40 | 97% | 0.60 | 95% |
| 10% | 0.78 | 95% | 1.13 | 90% |
| 15% | 1.14 | 92% | 1.58 | 84% |
| 18% | 1.35 | 91% | 1.81 | 80% |
| 20% | 1.48 | 90% | 1.95 | 78% |
| 25% | 1.81 | 88% |  |  |

## T7. The premium baseline and the fair reference

| Film | TiO2 PVC | Contrast ratio | Y over white | L* | b* |
|---|---|---|---|---|---|
| Premium white, two coats of 30 µm | 18% | 0.9986 | 90.9 | 96.4 | 1.40 |
| Fair reference (least TiO2 meeting the same targets) | 17.0% | 0.9984 | 90.7 | 96.3 | 1.38 |

## T8. Architecture screen

| ID | Architecture | Family | Dilute scattering per unit volume (1/µm) | TiO2 per m² to match | Saving | Y | CR | Verdict |
|---|---|---|---|---|---|---|---|---|
| S01 | Rutile in binder (premium baseline) | Reference | 8.2 | 40.8 g | 0% | 90.7 | 0.998 | Reference |
| S02 | Rutile plus hollow polymer opacifier at 15 percent | Commercial today | 0.3 | 37.1 g | 9% | 90.8 | 0.998 | Discard: saves less than 30 percent of TiO2 |
| S03 | Rutile in a binder full of closed nano-air (30 percent) | Lower-index matrix | 9.0 | 36.3 g | 11% | 90.7 | 0.998 | Discard: saves less than 30 percent of TiO2 |
| S04 | Yolk-shell: rutile in an air gap inside a shell | Particle-level air | 0.8 | not reached | n/a | 86.1 | 0.983 | Discard: cannot match baseline brightness at maximum loading |
| S05 | Hollow rutile spheres | Particle-level air | 5.0 | 32.9 g | 20% | 90.7 | 0.998 | Discard: saves less than 30 percent of TiO2 |
| S06 | Zinc sulfide, no TiO2 | Substitute pigment | 4.6 | not reached | n/a | 90.4 | 0.997 | Discard: cannot match baseline brightness at maximum loading |
| S07 | Zirconia, no TiO2 | Substitute pigment | 3.0 | not reached | n/a | 88.0 | 0.993 | Discard: cannot match baseline brightness at maximum loading |
| S08 | Barium sulfate at high loading, no TiO2 | Substitute pigment | 0.1 | not reached | n/a | 63.2 | 0.489 | Discard: cannot match baseline brightness at maximum loading |
| S09 | Organic crystal spheres, n 1.96, no TiO2 | Nature-inspired | 1.4 | not reached | n/a | 84.1 | 0.975 | Discard: cannot match baseline brightness at maximum loading |
| S10 | Air network under a seal coat (this proposal, base case) | Film architecture | 11.1 | 24.8 g | 39% | 90.7 | 0.998 | Retain |
| S11 | Air network with no TiO2 in either coat | Film architecture | 1.2 | not reached | n/a | 82.9 | 0.973 | Discard: cannot match baseline brightness at maximum loading |
| S12 | Air network with organic crystals in place of base-coat TiO2 (horizon 3) | Film architecture | 4.6 | 7.9 g | 81% | 90.7 | 0.998 | Retain for horizon 3 |

## T9. The proposal by scenario

| Scenario | Porosity | Host index | Base-coat TiO2 PVC | Seal-coat TiO2 PVC | Seal coat (µm) | TiO2 saving |
|---|---|---|---|---|---|---|
| bear | 25% | 1.38 | 11.9% | 18% | 21.5 | 15% |
| base | 35% | 1.18 | 9.1% | 12% | 16.4 | 39% |
| bull | 45% | 1.00 | 2.6% | 12% | 18.0 | 65% |

## T10. Spectral reflectance over white (base case)

| Wavelength (nm) | Reference | Proposal |
|---|---|---|
| 380 | 0.000 | 0.000 |
| 400 | 0.168 | 0.170 |
| 420 | 0.760 | 0.762 |
| 440 | 0.910 | 0.906 |
| 460 | 0.910 | 0.907 |
| 480 | 0.910 | 0.906 |
| 500 | 0.913 | 0.910 |
| 520 | 0.911 | 0.913 |
| 540 | 0.908 | 0.906 |
| 560 | 0.907 | 0.903 |
| 580 | 0.908 | 0.909 |
| 600 | 0.910 | 0.909 |
| 620 | 0.908 | 0.908 |
| 640 | 0.906 | 0.907 |
| 660 | 0.903 | 0.906 |
| 680 | 0.899 | 0.904 |
| 700 | 0.896 | 0.901 |
| 720 | 0.893 | 0.900 |

## T11. Hiding of one coat against grams of TiO2 per m²

| Conventional coat: TiO2 g/m² | Contrast ratio | Air-network coat: TiO2 g/m² | Contrast ratio |
|---|---|---|---|
| 7.2 | 0.9541 | 0.0 | 0.9724 |
| 10.8 | 0.9759 | 6.0 | 0.9901 |
| 14.4 | 0.9851 | 12.0 | 0.9949 |
| 18.0 | 0.9898 | 18.0 | 0.9969 |
| 21.6 | 0.9926 | 24.0 | 0.9979 |
| 25.2 | 0.9943 | 30.0 | 0.9985 |
| 28.8 | 0.9955 | 36.0 | 0.9988 |

## T12. Materials, cost and footprint per m² (two coats)

| Scenario | TiO2 reference | TiO2 proposal | Materials reference | Materials proposal | Cost cut | kg CO2e reference | kg CO2e proposal |
|---|---|---|---|---|---|---|---|
| bear | 40.8 g | 34.5 g | ₹16.3 | ₹13.7 | 16% | 0.21 | 0.19 |
| base | 40.8 g | 24.8 g | ₹18.4 | ₹12.0 | 34% | 0.23 | 0.16 |
| bull | 40.8 g | 14.3 g | ₹20.4 | ₹10.0 | 51% | 0.25 | 0.13 |

## T13. Asian Paints scale by year 5

| Scenario | TiO2 bill | TiO2 tonnes | Area on the new system | TiO2 avoided | TiO2 saving | Net materials saving | CO2e avoided |
|---|---|---|---|---|---|---|---|
| bear | ₹1,999 Cr | 99,932 t | 147 mn m² | 928 t | ₹19 Cr | ₹38 Cr | 1.8 kt |
| base | ₹2,998 Cr | 1,19,919 t | 470 mn m² | 7,551 t | ₹189 Cr | ₹298 Cr | 29.7 kt |
| bull | ₹3,997 Cr | 1,33,243 t | 979 mn m² | 25,934 t | ₹778 Cr | ₹1,021 Cr | 113.1 kt |

## T14. What moves the TiO2 saving most (base case, one input at a time)

| Input | Low setting | High setting | Saving at low | Saving at high |
|---|---|---|---|---|
| What surrounds base-coat particles | binder-wetted | pure air | 21% | 65% |
| Base-coat porosity | 0.25 | 0.45 | 33% | 45% |
| Seal-coat infiltration into pores | 25 percent | none | 34% | 43% |
| Minimum seal-coat film | 20 um | 12 um | 37% | 39% |
| Base-coat extender size | 0.8 um | 0.4 um | 37% | 38% |

## T15. Near-infrared reflectance over a 25 percent grey substrate (indicator, not a solar reflectance index)

| Wavelength | Reference | Proposal |
|---|---|---|
| 800 nm | 87.0% | 87.9% |
| 1000 nm | 82.8% | 86.3% |
| 1200 nm | 73.3% | 79.4% |
| 1500 nm | 63.7% | 71.1% |

## T16. Drying Peclet numbers for the horizon 2 one-coat version

| Climate | Evaporation (µm/s) | Pe of 80 nm binder latex | Pe of 600 nm pigment |
|---|---|---|---|
| Hot and dry | 0.50 | 5.8 | 43.3 |
| Composite | 0.25 | 2.9 | 21.6 |
| Warm and humid | 0.10 | 1.2 | 8.7 |

## Appendix C: Glossary and short forms

**Answer.** This appendix expands every short form, acronym and technical term used anywhere in the research document, the model tables and the deck, in one place, so no reader has to hunt for a first-use expansion buried in an earlier section. It is organised into three tables: optics and model terms, materials and standards terms, and business and framework terms, because someone looking up a physics term is rarely the same reader looking up a market term.

### C.1 Optics, colour and model terms

Table C.1 expands every short form used in the model's own language, from the Mie-theory pipeline through to the colour metrics reported on every core slide. A reader who has not opened `model/model_tables.md` directly can use this table to follow any slide's chart labels without cross-referencing the model source.

| Short form | Expansion | Where it is used |
|---|---|---|
| TiO2 | Titanium dioxide, the white pigment at the centre of the whole case | Throughout |
| PVC | Pigment volume concentration, the share of a dry film's volume that is pigment | §9, §14, Appendix B |
| CPVC | Critical pigment volume concentration, the loading above which a film can no longer be fully wetted by its binder and becomes porous | §14, §15 |
| CR | Contrast ratio, the ratio of a film's reflectance over a black substrate to its reflectance over a white substrate, the standard hiding-power measure | §10, §16, Appendix B |
| Y | Luminous reflectance, the CIE tristimulus value that tracks how bright a white appears to the eye | §10, §16 |
| L*, a*, b* | CIELAB colour coordinates: L* is lightness, a* is the red-green axis, b* is the yellow-blue axis; this document uses b* as the yellowness indicator | §16 |
| CIE D65 | The international standard daylight illuminant used to compute colour from a spectral reflectance curve | §10, Appendix B |
| 1931 observer | The CIE standard colorimetric observer functions, the human-eye-response curves paired with D65 to compute colour | §10 |
| Mie theory | The exact electromagnetic solution for how a spherical particle scatters light, the innermost layer of the model | §10 |
| Percus-Yevick | A structure-factor theory used here to correct single-particle scattering for crowding between neighbouring particles | §9, §10 |
| Kubelka-Munk | A two-flux radiative-transfer theory used to combine particle-level scattering and absorption into a whole film's reflectance | §10 |
| Saunderson correction | A correction applied to Kubelka-Munk output to account for light reflecting at a film's own top surface | §10 |
| BHMIE | A reference Mie-scattering code (Bohren and Huffman) used as the model's own accuracy benchmark | §10, Appendix B |
| µm | Micrometre, one millionth of a metre, the unit for film thickness and particle size throughout | Throughout |
| nm | Nanometre, one billionth of a metre, the unit for particle diameters and light wavelengths | Throughout |
| NIR | Near-infrared, the wavelength band just beyond visible light, relevant to Case Study 2's thermal link | §25 |
| Pe | Peclet number, a dimensionless ratio of advective to diffusive transport, used here to judge whether a drying film's particles stratify | §19, Appendix B |

### C.2 Materials, standards and process terms

Table C.2 expands the short forms that describe the materials, test methods and standards named across the production, proof-of-concept and risk sections.

| Short form | Expansion | Where it is used |
|---|---|---|
| PCC | Precipitated calcium carbonate, the fine chalk made from lime and captured carbon dioxide that forms part of the base coat | §14, §18 |
| GCC | Ground calcium carbonate, the coarser, mechanically ground chalk used in the premium baseline | §9 |
| VAM | Vinyl acetate monomer, a feedstock for the binder chemistry Asian Paints manufactures in-house at Dahej | §3 |
| VAE | Vinyl acetate-ethylene, a binder family manufactured at the same Dahej facility | §3 |
| BRSR | Business Responsibility and Sustainability Report, the Indian disclosure format Asian Paints files for environmental and social metrics | §3 |
| DGTR | Directorate General of Trade Remedies, the Indian government body that investigates and recommends anti-dumping duties, including on TiO2 from China | §9 |
| CBIC | Central Board of Indirect Taxes and Customs, the body that would notify a DGTR-recommended duty into legal force | §9 |
| BIS | Bureau of Indian Standards, the standards body behind the Indian specifications named in the painting-practice sections | §6 |
| IARC | International Agency for Research on Cancer, whose Group 2B classification for TiO2 is discussed in the handling sections | §18, Appendix D |
| OSHA, ACGIH, NIOSH | United States Occupational Safety and Health Administration, American Conference of Governmental Industrial Hygienists, and National Institute for Occupational Safety and Health, the three bodies whose differently scoped TiO2 exposure limits are reconciled in §18 | §18 |
| ISO 6504-3, ISO 7724 | International standards for measuring a paint film's hiding power and colour respectively, named as pass-mark methods in the lab programme | §22 |
| ASTM D2486 | An American standard test method for a coating's scrub resistance, named as a durability pass mark | §22 |
| FIB-SEM | Focused ion beam scanning electron microscopy, a cross-sectioning and imaging method named to confirm the base coat's air network is physically continuous | §22 |
| LCA | Life cycle assessment, the cradle-to-gate or cradle-to-grave accounting of a material's environmental footprint | §20, §25 |
| CO2e | Carbon dioxide equivalent, the standard unit for comparing greenhouse gases on one scale | §20, §21 |
| CNSL | Cashew nut shell liquid, the renewable feedstock discussed in the Case Study 3 landscape | §6 |
| H1, H2, H3 | Horizon one, two and three, the three-stage roadmap naming interior emulsions first, then exterior and industrial, then automotive and a TiO2-free base | §23 |

### C.3 Business, strategy and framework terms

Table C.3 expands the consulting and business vocabulary used to frame the argument, for a reader less familiar with case-competition conventions.

| Short form | Expansion | Where it is used |
|---|---|---|
| MECE | Mutually exclusive, collectively exhaustive, the structuring discipline behind the twelve-design screen and the five-challenges grid | §12, §17 |
| VRIO | Valuable, rare, inimitable, organised, the framework used to argue why the design is hard to copy | §23 |
| TAM, SAM, SOM | Total addressable market, serviceable addressable market, serviceable obtainable market, the market-sizing hierarchy referenced in the case-choice framing | §8 |
| CAGR | Compound annual growth rate | §3 |
| Cr | Crore, ten million, the standard Indian large-number unit used throughout instead of a Western-style abbreviation | Throughout |
| ₹ | The Indian rupee symbol | Throughout |
| FY | Financial year, which for Asian Paints runs April to March | §3 |
| ICAP | India Cooling Action Plan, the government policy framework referenced in the Case Study 2 landscape | §5 |
| ECBC | Energy Conservation Building Code, the Indian building-energy standard referenced for cool-roof thresholds | §5 |
| PINN | Physics-informed neural network, a machine-learning architecture referenced in the Case Study 4 landscape | §7 |

### C.4 A note on precision

Every expansion above matches the exact wording the research document and the deck use; where a source used a slightly different expansion (for example, the India Cooling Action Plan versus an "ICAP" acronym some secondary sources write without expanding), this appendix gives the fuller, clearer form rather than the shorter one, consistent with the instruction that an italic expansion line sits under any table whose heads use a short form. A reader who meets a short form inside a table elsewhere in the document and does not find its expansion printed directly beneath that table should return here; every short form used more than once anywhere in this document appears in one of the three tables above.

## Appendix D: Data conflicts and method limits

**Answer.** Ten research lanes each logged a `## Conflicts` section where two credible sources disagreed and neither could be reconciled into one number, and this appendix reproduces every one of those entries with how it was resolved, which in most cases means stating both figures side by side instead of forcing them into one number. It then states the model's own honest limits, drawn from the model's own documentation and from the honest reading printed in this document's section 16 and section 21, so that the deck's confidence in its headline number is read against exactly how far that confidence actually extends.

### D.1 Conflicts from lane A: Asian Paints and the Indian decorative market

Table D.1 reproduces every conflict verifier V-A logged, none of which triggered the update protocol in section 5.3 because none replaced a model assumption with a better-sourced figure in the same unit.

| Conflict | Two figures found | How it is treated |
|---|---|---|
| FY24 revenue | ₹35,382.1 Cr "net sales" against ₹35,494.73 Cr "revenue from operations" `[S01]`, `[S02]` | Both kept; likely different revenue-line definitions, neither singled out as correct |
| Dahej VAE and VAM capacity | An original plan of 360,000 MTPA VAE and 220,000 MTPA VAM `[S25]` against the FY25-26 annual report and Regulation 30 filing both stating 150,000 MT VAE and a 100,000 MT VAM plan `[S11]`, `[S23]` | The primary filings are treated as authoritative; the larger figure is kept as the historical, pre-revision scope, not as current capacity |
| Fujairah white cement timeline | An October 2024 completion target reported in 2022 `[S20]` against confirmed commercial production beginning around October 2025 `[S21]`, `[S20]` | The later, confirmed date is used wherever this document states a completion date; the earlier target is noted as a since-revised plan |
| BRSR Scope 1 and 2 reduction percentages | 34% and 33% since an FY2013-14 baseline `[S26]` against 41% and 47% cited elsewhere for what appears to be the same metric `[S27]`, with a third tracker separately citing an 80% intensity-cut target by 2030 `[S27]` | Not reconciled; the primary BRSR document was not directly accessible in this research pass, so this document states the range rather than picking one figure |
| TiO2 share of raw-material cost | About 20% `[S35]`, `[S36]` against about 40% for all crude-linked materials including TiO2 `[S34]`, `[S36]` | Treated as two different scopes, TiO2 alone against all crude derivatives, and not conflated anywhere this document cites a TiO2-specific cost share |
| Decorative market share | Asian Paints at 52% down from 59%, or 55 to 59%, or 51% down to 47% in 2024-25 `[S41]`; Birla Opus at approximately 6.6 to 6.8%, "high single digit," or "over 10%" `[S39]`, `[S40]`, `[S41]` | All figures kept as a range with their specific source named; none is treated as authoritative, and no single-point market-share figure is used as a locked input anywhere in this document |

### D.2 Conflicts from lane B: the TiO2 market, duties and footprint

Table D.2 reproduces lane B's conflicts, the lane with the most load-bearing facts for the duty-clock narrative on slide 4.

| Conflict | Two figures found | How it is treated |
|---|---|---|
| DGTR remand timeline | One search summary stating remand proceedings began 17 October 2025 with a disclosure statement on 12 May 2026, against a separate June 2026 circular saying findings were still awaited `[S48]` | Left unreconciled; only the 12 February 2025 and 3 August 2026 dates, independently corroborated across multiple sources, are stated as fixed points in this document's duty-clock timeline |
| What the Calcutta High Court quashed | The Customs notification implementing the duty `[S53]`, `[S49]` against DGTR's underlying final findings themselves `[S54]` | Both versions are kept; this document states that secondary sources differ on whether the court quashed the notification alone or the findings beneath it |
| Dahej plant company attribution | A 16,500-to-33,000 MTPA expansion attributed to Kilburn Chemicals in one source against an identical figure attributed to Meghmani Organics in two others `[S61]`, `[S62]` | The Meghmani Organics attribution is used wherever this document names the plant; the Kilburn attribution is flagged as unconfirmed, per the correction already logged for writers in `build-log.md` |
| ECHA de-listing date | 29 August 2025 against 11 September 2025 for when the TiO2 carcinogen classification was removed `[S81]` | Both dates kept; neither confirmed directly against the ECHA inventory |
| EU E171 ban effective date | A staged 2022 phase-out against separate import-ban-then-sales-ban dates `[S82]`, `[S83]`, `[S85]` | Both versions kept pending a check of the final Commission regulation text, which this research pass did not open directly |
| China import-share denominator | The 57% figure tied to DGTR's 226,869 tonne investigation volume against a separate "near 300,000 tonnes" figure for Indian rutile-sulphate-grade demand alone `[S48]` | Both figures are stated with their own denominator named; this document never presents them as the same base |

### D.3 Conflicts from lane C: optics and physics inputs

| Conflict | Two figures found | How it is treated |
|---|---|---|
| Per-coat dry film thickness of premium interior emulsions | 30 micron per coat for the India-market Apcolite Premium Emulsion sheet `[S103]`; minimum 35, typical 50, maximum 60 micron for the UAE Apcolite Premium sheet `[S104]`; 30 to 50 micron, typical 40, for the Oman-market Royale Luxury Emulsion Silk `[S105]` | All three kept as different products in different regional markets; the India-market Apcolite figure, matching assumption A01, is the one used as the model's own input `[A01]` |
| ISO 6504-3 edition | The current 2019 edition's Y and Y10 tristimulus hiding-power method `[S201]` against the withdrawn 2006 edition's contrast-ratio method at a fixed spreading rate `[S202]` | This document's and the model's use of "contrast ratio" as the working concept matches the withdrawn 2006 method's language, and this appendix states that explicitly rather than implying the model follows the current standard |

### D.4 Conflicts from lane D: prior art and novelty

| Conflict | Two figures found | How it is treated |
|---|---|---|
| The Schulz and Keddie stratification citation | The plan's seed names "Schulz and Keddie 2018"; the paper located under that description is Schulz, Brinkhuis, Crean, Sear and Keddie, Soft Matter, 2022 `[S136]`; a separate, genuine 2018 Soft Matter review article also exists | Both are kept: the 2022 original-research paper under the Keddie group's name for the specific drying-stratification mechanism, and the 2018 item as a general review, since neither alone fully matches the original citation |
| US5147940A's assignee | Widely cited as a Rohm and Haas patent in secondary sources, while the patent's own front page lists Union Oil Company of California as the 1991 filing assignee, with Rohm and Haas appearing only via a 1992 assignment record `[S112]` | This document states the original-filing assignee and the later-assignment fact together, rather than repeating the "Rohm and Haas patent" shorthand uncorrected |

### D.5 Conflicts from lane E: materials, production and handling

| Conflict | Two figures found | How it is treated |
|---|---|---|
| TiO2 carcinogen classification | IARC Group 2B, possibly carcinogenic to humans `[S175]`, against ACGIH A4, not classifiable as a human carcinogen `[S172]` | Both stated side by side as current and differently scoped; neither is presented as superseding the other |
| TiO2 occupational exposure limits | NIOSH recommended 2.4 mg/m3 fine and 0.3 mg/m3 ultrafine time-weighted average `[S173]`, against OSHA's enforceable 15 mg/m3 total-dust permissible exposure limit `[S172]` and ACGIH's 2.5 and 0.2 mg/m3 respirable values `[S172]` | This document states which specific limit it is citing and why whenever an exposure limit is named, rather than quoting one number as "the" TiO2 limit |
| Acrylic binder cradle-to-gate footprint | The model's assumption A26 of 2.5 kg CO2e per kg of binder solids `[A26]` against a found figure of 1.76 kg CO2e per kg of a 34%-solids liquid product, converting to roughly 5.2 kg CO2e per kg of solids `[S184]` | Recorded as a conflict for the update protocol in section 5.3 rather than acted on, because the two figures' system boundaries and GWP-methodology vintage are not confirmed to match; A26 is kept at its base-case value pending a boundary-matched source |
| What counts as PCC in the marketplace | Some sellers label ground or natural calcite "PCC," while true precipitated calcium carbonate is a distinct, carbonation-route product `[S150]` | Any marketplace price or particle-size figure is read with this label confusion named explicitly |

### D.6 Conflicts from lane F: Indian painting practice and standards

| Conflict | Two figures found | How it is treated |
|---|---|---|
| Asian Paints' market share | About 34% of the total paints market against 53% of the decorative segment specifically, a 2015 analyst figure `[S211]` | Both kept, with their different bases, total market against decorative-only, and different years, stated explicitly |
| Decorative paints' share of the total Indian coatings market | About 70 to 75% from a 2019 Indian Paint Association-sourced estimate against "more than three-quarters" from an undated sector note `[S209]`, `[S210]` | Both kept as approximate, differently dated figures |

### D.7 Conflicts from lane G: Case Study 2 landscape

| Conflict | Two figures found | How it is treated |
|---|---|---|
| Telangana Cool Roof Policy area targets and year | 200 sq km Hyderabad and 100 sq km rest-of-state by 2028-29 `[S217]` against the same split attributed to 2030 `[S218]` | Both kept; the overall 300 sq km by 2028 headline figure `[S216]` is treated as the more stable figure, the split's exact year is not resolved |
| Telangana cool-roof electricity savings | "Around 20%" of extra cooling energy cost mitigated `[S216]` against a separate claim of 600 million units a year after five years `[S219]`, the latter not independently verifiable | Both stated; the second figure is marked as not independently confirmed |
| Ahmedabad Heat Action Plan mortality impact | Nearly 2,300 premature deaths prevented, a cumulative total, against about 1,190 deaths averted a year, an annual rate `[S220]` | Both kept with their different metrics, cumulative total against annual rate, named explicitly so they are not read as contradictory |
| ECBC cool-roof reflectance and emittance thresholds | 0.70 and 0.75 for the older ECBC 2008 code against 0.60 and 0.90 for ECBC 2017's lowered threshold | Both kept with their likely vintage noted, unconfirmed against either primary code PDF |
| Data-centre cooling's share of total energy use | A range from about 23% to 30 to 40% to about 40% in inefficient facilities to about 50% of IT load specifically | All kept with their different denominators and samples named; this document never collapses them into one figure |

### D.8 Conflicts from lane H: Case Study 3 landscape

| Conflict | Two figures found | How it is treated |
|---|---|---|
| Nilaya Naturals natural-content claim | More than 90%, from a Green Seal interview, against about 95%, from an Asian Paints magazine piece | Both kept, both company-affiliated, neither independently lab-verified |
| Asian Paints renewable raw-material content | 7.2% for FY2023-24 "by volume" against 6.8% for FY2024-25 "as a share of raw materials" | Both kept with their different stated bases, not reconciled by the company's own pages |
| Stubble-burning decline | About 30% on a satellite-based estimate against roughly 90% for 2025 versus 2022, both from the same RTI-based report | Both kept as reported |
| IOCL Panipat 2G ethanol plant investment | About ₹766 Cr per 2019 environmental-clearance reporting against about ₹900 Cr per a later report, apparently the same plant | Both kept, neither singled out |
| Itaconic acid market size | About 40,000 tonnes a year per one review against roughly 15,000 tonnes a year per an earlier review, no common baseline year stated | Both kept as approximate figures from different years |
| B-R2 publication year | 2014, as the Case 3 brief cites it `[B-R2]`, against 2013 for the same DOI, journal, volume and page in a secondary citation | Noted as the brief's own citation; this document does not silently correct the brief's transcription |
| E20 ethanol blending baseline | 1.53% in 2013-14 rising to 20% in 2025-26 per one ministerial statement against 8.1% for 2020-21 as a separate starting point | Both kept; the trajectories do not align on one baseline across sources |

### D.9 Conflicts from lane I: Case Study 4 landscape

| Conflict | Two figures found | How it is treated |
|---|---|---|
| A-R3 and A-R8 in the case brief | Identical ACS Polymers Au volume, issue and page string, and a matching DOI suffix, strongly suggesting both IDs name the same Martin and Audus 2023 paper | Noted once, per the correction already logged for writers, as the brief's own transcription rather than a research-lane error; not silently fixed |
| The Martin and Audus paper's title | NIST's bibliographic listing gives one title wording, while the published ACS Polymers Au and PMC record gives a slightly different wording, both resolving to the same DOI | The published-record title is used; the NIST variant is noted once, not treated as a separate source |
| Bayesian-optimisation-of-nanoporous-materials results | A 2025 Digital Discovery paper reporting a ranking metric with no clean percentage found, against a 2021 ChemRxiv preprint reporting "30% of the top 100 ranked COFs after about 120 evaluations" | Treated as two different studies and not conflated into one result anywhere this document cites Case 4 Bayesian-optimisation evidence |

### D.10 Conflicts from lane J: third-party quotes

| Conflict | Two figures found | How it is treated |
|---|---|---|
| Dow's TiO2-reduction figure for its opacifier line | A "20 to 35%" figure for Dow's opacifier category as a whole `[S119]` against an independently found "up to 20% less TiO2" figure specific to the EVOQUE product and its 2011 launch `[S118]` | Both kept: the narrower, older, product-specific EVOQUE figure, and the newer, broader claim covering the whole opacifier line including ROPAQUE; they are not treated as describing the same product or test basis |

### D.11 The model's own stated limits

Beyond the ten lanes' source conflicts, the model carries limits of its own, separate from any question of research verification, and this document states them wherever the base-case 39% figure is used, per the honest reading already printed in section 16 and section 21.

| Limit | What it means |
|---|---|
| The base case rests on a Bruggeman mix of air and binder around the rutile particle `[A08]` | If binder instead preferentially wets the particle in a real film, the saving falls toward the bear case of 15 to 21%, not the base case of 39% `[T9]`, `[T14]` |
| The baseline film is modelled without flocculation | A real conventional film likely flocculates its TiO2 somewhat, which would lower its real scattering efficiency below the model's ideal-packing assumption; this flatters the conventional baseline relative to reality, which makes the proposal's reported saving conservative, not inflated, on this specific count |
| Nothing in this document has been measured on a physical panel | Every contrast ratio, brightness and colour figure in sections 16, 20 and 21 is a model output, computed from Mie theory, Percus-Yevick crowding, Kubelka-Munk two-flux transport and CIE colorimetry, checked against thirteen internal physics benchmarks `[T3]`, not a laboratory measurement; section 22's lab programme is a plan with proposed pass marks, not a set of results |
| The patent and literature search behind the novelty claim was not a professional claim-level clearance search | It used Google Patents' own search ranking and secondary citation chains inside other patents' background sections; the novelty statement in section 11 is best read as "not found claimed in what this search could reach," not as a cleared freedom-to-operate opinion |
| Several model inputs rest on structural public-data gaps, not search failures | No published Indian climate-zone water-evaporation-rate data exists for assumptions A29 to A31, so the one-coat drying-physics discussion in section 19 and table T16 describes a plausible mechanism, not a locally measured one; no current Asian Paints management statement on TiO2 cost specifically, dated within FY24 to FY26, was found, so section 3's cost narrative rests on the model's own A23 estimate rather than a company statement |

### D.12 Image and logo credits for the deck

The deck's cover map and slide 6 use the files below from Wikimedia Commons. The logos identify organisations this document names; no partnership or endorsement is implied. Photos were cropped to fit their frames.

| Item in the deck | Commons file | Licence | Author |
|---|---|---|---|
| Cyphochilus beetle photo, cover and slide 6 | File:Cyphochilus beetle close up.jpg | CC BY-SA 4.0 | Andy Parnell |
| Titanium dioxide powder photo, cover | File:Titanium(IV) oxide.jpg | Public domain | Walkerma (English Wikipedia) |
| Chemours logo, cover | File:Chemours.svg | Public domain | Unknown author |
| Tronox logo, cover | File:Tronox logo.png | Public domain | Tronox |
| Dow logo, cover | File:Dow Chemical Company logo.svg | Public domain | Dow Chemical Company |
| Arkema logo, cover | File:Logo Arkema.svg | Public domain | Unknown author |
| Evonik logo, cover | File:Logo Evonik 2020.svg | Public domain | Evonik Industries AG |
| Imerys logo, cover | File:Imerys logo.png | CC BY-SA 4.0 | Guillaume Imerys |
| Berger Paints logo, cover | File:Berger Paints logo.png | Public domain | Berger Paints |
| JSW logo, cover | File:JSW Group logo.svg | Public domain | JSW Steel Ltd |
| Indigo Paints logo, cover | File:Indigo-logo.jpg | CC BY-SA 4.0 | Indigo Paints |
| Kansai Paint logo, cover | File:Kansai Paint Logo.svg | CC BY-SA 4.0 | Kansai Paint Co., Ltd |
| AkzoNobel logo, cover | File:AkzoNobel.svg | Public domain | AkzoNobel |
| University of Exeter logo, cover | File:Uni Exeter.svg | Public domain | Unknown author |
| Scientific Reports logo, cover | File:Scientific Reports logo 2023.svg | Public domain | Springer Nature |
| Bureau of Indian Standards logo, cover | File:Bureau of Indian Standards Logo.svg | Public domain | Unknown author |
| Central Pollution Control Board logo, cover | File:Logo of the Central Pollution Control Board.svg | Public domain | Government of India |
| ISO logo, cover | File:ISO logo red.svg | Public domain | Smartcom5 |
| ASTM International logo, cover | File:ASTM International logo.svg | Public domain | ASTM International |
| Asian Paints logo, cover hub | File:Asian Paints Logo.svg | Public domain | Asian Paints |
