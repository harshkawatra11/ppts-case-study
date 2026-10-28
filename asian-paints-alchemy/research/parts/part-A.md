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
