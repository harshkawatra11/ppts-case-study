# Asian Paints Alchemy, Case Study 1 (Whiteness): research deliverable and native Figma deck in the organisers' master file

> **Who executes this.** A main agent (Sonnet class is enough) plus Sonnet sub-agents dispatched with the Agent tool
> (`subagent_type: "general-purpose"`, `model: "sonnet"`). The case is already solved in this plan: the case chosen, the
> recommendation, the physics model and every locked number, every research section title, every slide script, every prompt
> and every check. **The job is execution, not design.** When a step has a "Done when" test, do not move on until it passes.
>
> **What this plan produces**, all under `asian-paints-alchemy/` (repo root `C:\Users\harsh\Desktop\HARSH\PPTS-CASE-STUDY\nsut-innovators-court`):
> (1) `model/whiteness_model.py` with `model_outputs.json`, `model_tables.md` and `deck/values.json` (the physics proof of
> concept); (2) ten verified raw research files and a source register; (3) `research/alchemy-whiteness-research.md` plus HTML
> and PDF, covering **all four Alchemy problem statements** and solving Case Study 1 in depth, at least 70,000 words and 130
> tables; (4) a 9-slide native Figma deck **inside the organisers' master file** `https://www.figma.com/slides/KJQkGsLgbeLU9vNy24p78y`:
> slide 1 is the Asian Paints cover exactly as supplied, slides 2 to 9 are duplicates of the supplied slide 2 background
> (Asian Paints logo, Alchemy mark, Unstop mark, purple foot bar) carrying our cover, five core slides, one annexure and a
> thank-you slide.
>
> **Order of work (user instructions, 14 to 17 Oct 2026).** Stage 0 runs the model and then **builds our cover slide first**
> in the master file, so the user sees the visual system early. Stage 1 is the deep research deliverable, built completely.
> Stage 2 derives the remaining slides from the finished research and builds them. No core-slide Figma build happens before
> Stage 1 is complete.
>
> **Verified at planning time (14 to 17 Oct 2026), in memory, with nothing written to the repo:** the model runs in about
> 2.5 minutes, passes 13 of 13 checks and prints `HASH b377745d37` and `FINDINGS [15.5, 39.4, 64.9] 298 18.36 12.03`; the
> deck generator `deck/gen.py` builds its preamble from the existing libraries; all eight slide scripts (slides 2 to 9) pass
> the offline Figma mock with `warnings: []` and `ISSUES 0` (nodes 116, 189, 218, 241, 264, 230, 175, 25), every build part
> stays under 49,900 characters, and `gen.py copy` reports `copy issues 0`; offline previews drawn over the real template
> image were inspected for slides 2 to 9. If a first run does not reproduce these, something was retyped or the environment
> changed: stop and use section 13.

## 0. How to read this plan

| Part | Sections | What it is |
|---|---|---|
| I | 1 to 2 | Context, the user's decisions, ground rules |
| II | 3 to 5 | The solved case: how the case-competition-deck skill was applied, the argument, locked numbers, assumptions |
| III | 6 to 7 | Ten research lanes with questions and seed sources; the research document specification |
| IV | 8 to 14 | Execution: skill touchpoints, environment, step table, prompts, calibration, recovery, final checks, memory |
| V | 15 | The Figma deck: master-file setup, cover-first build, derivation from research, build, validation, logos, export |
| VI | M, D, S, X | Embedded files: model, deck tooling, slide scripts, bootstrap, assembler, the four briefs transcribed with IDs |

### Roles

| Role | Model | Does | Never does |
|---|---|---|---|
| Main agent | Sonnet or better | Bootstrap, runs every script, every Figma call (one at a time), source register, dispatch, assembly, final report | Change the case choice, the recommendation, a locked number, a section title or a slide's geometry outside the fix rules |
| Verifiers V-A to V-J | Sonnet, at most three at once | Open the seed sources in section 6, confirm or correct each fact, add rows | Invent a figure, quote or URL; write prose; touch the model |
| Writers W-A to W-F | Sonnet, at most three at once | Write their sections into `research/parts/` | Browse the web, change a number, invent a test result, an interview or a lab measurement |
| Critic CR | Sonnet | Scores the research and later the deck with the skill's critique rubric | Rewrite sections or slides |

### The Sonnet execution contract

DO
1. Follow section 10 step by step. Log each step in `asian-paints-alchemy/build-log.md` with `STATUS: PASS` or `FAIL` and what was fixed.
2. Create files only by extraction (section 10, step B1). Never retype a code block from this plan.
3. Take every modelled number from `model/model_outputs.json`, `model/model_tables.md` or `deck/values.json`. Take every
   external fact from a VERIFIED or CORRECTED row in `research/raw/`.
4. Invoke the `case-competition-deck` skill with the Skill tool at the eight touchpoints in section 8 and log each one.
5. Load the Figma guidance before the first `use_figma` call (section 15.2) and pass `skillNames` on every call.

DO NOT
1. Do not change the case (Case Study 1), the recommendation, a locked number, an H2 title or an assumption value except
   through the update protocol in section 5.3.
2. Do not invent lab results, panel measurements, interviews, letters of intent, customer quotes or Asian Paints internal
   data. The proof of concept is a computational model and is always called that. The lab programme is a plan and says so.
3. Do not touch slide 1 (`1:42`, the Asian Paints cover) or any node named `TPL: background`. Never delete, move, restyle or
   unlock the background image on any slide.
4. Do not write an em dash, an en dash, a hook, a rhetorical question, an exclamation mark or a banned word (section 2.2).
5. Do not coin a name for the solution, the programme or the product (user rule). Describe it plainly: "a two-coat white with
   an air-network base coat and a seal coat".
6. Do not add an AI-use declaration to the deck or the research document (user decision, 14 Oct 2026; see section 1.3).
7. Do not commit or push. Do not modify anything outside `asian-paints-alchemy/` (reading other folders is fine).

---

# PART I. CONTEXT AND RULES

## 1. Context

### 1.1 What the organisers ask

Asian Paints runs **Alchemy**, an innovation challenge hosted on Unstop, with four problem statements (case files in
`asian-paints-alchemy/raw/`, transcribed with IDs in section X3):

| Case | Title | What must be delivered |
|---|---|---|
| 1 | Future of Whiteness Development through Material Science | A non-conventional, scalable solution that enhances whiteness in architectural, automotive and industrial coatings, water and solvent borne; answer seven questions (technology, uniqueness, mechanism, production, application, cost, raw-material handling and scalability) |
| 2 | Thermal Management: Innovative Solutions for an Energy-Efficient Future | A thermal management solution with measurable energy savings, test protocol and success criteria |
| 3 | Bio-Based Materials and Circular Solutions for a Net-Zero Future | A renewable-carbon material, process or product with sourcing, equivalence, cost, barriers and a cradle-to-grave LCA |
| 4 | Structure-Property Relationship via Advanced Characterization, Modelling, Simulation and AI | A method or platform that predicts polymer or coating properties, validated only on literature, simulation or experimental data |

Rules common to all four: original ideas score higher; ideas from other industries are welcome; a proof of concept or
prototype earns extra points; "simply reproducing an AI generated idea without original thinking will greatly reduce the
chance of qualification"; content taken from or generated by AI should be mentioned (see 1.3 for the user's decision).
The submission template (`raw/Case & Submission_Submission Front (2).jpg` and `... Inside (1).jpg`) is already loaded in the
master Figma file: slide 1 is the purple cover, slide 2 the white content background.

### 1.2 What we solve and why (decided with the user)

We research all four problem statements and solve **Case Study 1** in depth. The planning-time physics screen showed that
Case 1 has a real, quantifiable lever that most entrants will miss, TiO2 is Asian Paints' costliest raw material with 57% of
Indian demand coming from China during DGTR's investigation, and a computational proof of concept can be built and checked
honestly. Cases 2, 3 and 4 each get a full landscape section and an idea screen in the research document, so the judges and
the team can see the choice was made on evidence.

### 1.3 Decisions the user locked

| Item | Decision |
|---|---|
| Deck scope | One case solved deeply (Case Study 1). Research covers all four |
| Slides | 9: slide 1 Asian Paints cover (as supplied, untouched); slide 2 our cover; slides 3 to 7 five core slides; slide 8 annexure; slide 9 thank-you |
| Master file | `KJQkGsLgbeLU9vNy24p78y` ("our final master ppt"). Every slide after slide 1 is a duplicate of the supplied slide 2 and keeps its background |
| Cover first | Our cover (slide 2) is built first, right after the model run (step C0) |
| Team | Team IdeaForge: Harsh Kawatra (Delhi Technological University (DTU), Team Leader), Anuj Gambhir (Delhi Technological University (DTU), Member) |
| AI disclosure | The user chose no AI-use disclosure on the deck or in the research document, knowing all four briefs ask for one. Do not add one. Mention the conflict once to the user in the final report, in one sentence, and nothing more |
| Research length | No limit. Target 70,000 words and 130 tables or more |
| Language | Humanised analytical storytelling, no hooks, no AI-sounding phrasing, no em dashes (standing memory rule) |
| Names | No coined names for the solution or programme (standing memory rule) |
| Visual model | The user's winning Dream Forge 3.0 deck (`7N3v6bAfmXYRrte0zChFDg`, built in `dreamforge-case/`): ribbon of the brief's own section names, section chip, counter, a two-line action title, three bands per slide each with a rotated rail, 6 to 9 panels per slide, 18 pt secondary text in tables and charts, an annexure with an A1 to A4 ribbon, a cover with a mind map and real brand logos, a team table on cover and thank-you. Other references, read only: prime `hOJVMGv9nIhDmayTT7DmOt`, Dream11 `YoiazGGOribfg69EjEDIlP`, `e5VEexsLMhDampx7gvhFmM`, `vAIyXmljHlFDuwQo6RsoIN`, `APbOstO4SSU7iAjYIgEeSd`, `JLOOyohkQPUrwXEsxDKz4m`, `O7oWkJR37V0H8IDKnt2Ed7` |
| Cover | A real mind map with brand image placeholders (not plain text), no KPI-card row, team table |
| Not a template | `lsr-caseforchange/` (rejected entry). Do not read or copy it |

### 1.4 Folder layout after the build

```
asian-paints-alchemy/
  raw/ (exists, never modified)       PLAN.md  extract.py  build-log.md  DECISIONS.md
  case/01-briefs.md
  model/whiteness_model.py  model_outputs.json  model_tables.md
  research/raw/R-A..R-J.md  sources.md   parts/part-A..F.md  appendix-C.md  appendix-D.md
           assemble.py  build_pdf.py  alchemy-whiteness-research.md  .html  .pdf  critique.md
  deck/gen.py _palette.js _ap.js _v1.js _sweeps.js setup.js slides/s02..s09.js values.json
       (generated) preamble.js mock_figma.js values.js _x2.js _x3.js metrics.json derived/ build/ shots/ logos/
       slide-ids.json figma.md derivation.md overrides.json slide-copy.md critique.md
```

## 2. Ground rules

### 2.1 Content integrity

1. The optical model is a model. Every sentence that reports a model result says so ("in our model", "the model shows").
2. No lab, panel, porosimetry or microscopy result exists. Section 22 of the research and the "prove it on panels" table on
   slide 4/5 are a plan with pass marks, never results.
3. Asian Paints figures come only from its published results and reports (lane A). Estimates built from them (the TiO2 bill,
   tonnes, area) are labelled "estimate" with their assumption IDs.
4. Statistics keep the precision the source supports. An unverified seed fact is dropped or replaced, never softened.
5. Indian units: ₹, lakh, crore, Indian digit grouping (1,19,919). Foreign prices keep their currency ($460 to $681 a tonne).
6. A real company's name appears only with verified facts about it. Brand logos on the cover are context, and the cover's
   source line says "no partnership implied".
7. Prior art is stated honestly: yolk-shell TiO2 (2017), hollow polymer opacifiers (decades old), hollow silica pigments
   (2025), porous fluoropolymer coatings (2018) and dry hiding above the critical PVC are all known. What we claim as new is
   the combination and the design rule: an air-continuous scattering base coat that is sealed by a size-excluding topcoat in
   the two coats painters already apply, quantified with one model against all the alternatives. Lane D searches patents; if
   it finds the same combination claimed, the research says so and the deck's uniqueness wording is changed through
   `deck/overrides.json` (section 15.5).

### 2.2 Language standard

- Zero em dashes and en dashes. Use commas, colons, full stops or brackets. Ranges use "to". The minus sign is U+2212.
- No hooks, no rhetorical questions, no "imagine", no suspense. State the finding. No exclamation marks.
- Banned words (checked by `assemble.py` and `gen.py copy`): the lists `BAN` in section X2 and `BANW` in section D.
- First person plural, declarative, plain words, a number in most sentences, reasoning shown, as a consultant's memo.
- Research H2 titles are action titles fixed in section 7.2. Slide headlines are fixed in the slide scripts.

### 2.3 Tags (every number in the research carries one)

| Tag | Meaning | Resolves to |
|---|---|---|
| `[W-Q3]`, `[T-K2]`, `[B-Q6]`, `[A-K4]` | Brief line by ID (Case 1 W, Case 2 T, Case 3 B, Case 4 A) | `case/01-briefs.md` |
| `[A05]` | Model assumption | `model/model_tables.md` T1 and section 5 here |
| `[M]` | Model output | `model/model_outputs.json` |
| `[T8]` | Model table | `model/model_tables.md`, Appendix B |
| `[S12]` | External source | `research/raw/sources.md`, Appendix A |

### 2.4 Deck text sizes (user decision carried from the winning deck)

Headlines 36 pt, panel titles 22 pt, numerals 26 to 92 pt, card and lead text 22 pt. Secondary text (table cells, chart
labels, notes, bullets) may be 18 pt and is always named `SEC` (helpers `sT`, `sTL`, `sRT`, `tbl`, `note`, `bx` do this).
Only `SOURCE` (14 pt), `BIBLIO` (16 pt) and logo or image captions are smaller.

### 2.5 Files to read before starting (main agent)

1. This plan, fully.
2. `CLAUDE.md` at the repo root, sections 0, 5 and 7.
3. `.claude/skills/case-competition-deck/SKILL.md` through the Skill tool (touchpoint A).
4. `dreamforge-case/research/swiftkart-research.md` lines 1 to 150 (register and tag discipline of the winning entry).

---

# PART II. THE SOLVED CASE

## 3. The argument (how the case-competition-deck skill was applied)

### 3.1 Case type and calibration

Case Study 1 is an **R&D innovation pitch with a strategy and operations spine**: it asks for a material or formulation
invention, then for production, cost and scale. The skill's guides closest to it are `case_types/strategy.md` (market
sizing, options, capability, time to impact) and `case_types/operations.md` (cost-benefit, throughput, change management).
Per the skill's calibration note, its patterns come from M&A decks; the structural and rhetorical patterns (contrarian
answer, foreshadowing, symmetry, scenarios, moneyshot, double synthesis, action titles) are applied with confidence, the
case-specific frameworks as reasoned extrapolation. The research document says so in section 0.

### 3.2 The eight-section logic compressed into five core slides

| Skill section | Where it lives | Slide |
|---|---|---|
| I Executive summary (two columns: do not / do) | "DO NOT CHASE A NEW WHITE PIGMENT" against "MOVE THE TiO2 INTO AIR, THEN SEAL IT" | 1/5 THE TECHNOLOGY |
| II Context, ending on the seed slide | the TiO2 bill, the duty clock, the physics; seed card "So the air has to live in the film, not in the particle" | 2/5 THE CHALLENGE |
| III Actors | cover mind map (pigment makers, opacifier makers, paint makers, rules) and the research sections 3 to 4 | cover, research |
| IV Quantitative analysis | the twelve-design screen under one test (MECE option filter) | 3/5 WHY IT IS UNIQUE |
| V Feasibility, first synthesis | "CONCLUSIVELY" card: a new pigment cannot out-scatter rutile in binder | 3/5 |
| VI Recommended alternative, with its moneyshot | the film in section, nature's precedent, proof of concept, MONEYSHOT card, production steps, panel tests | 4/5 MECHANISM AND PROOF |
| VII Conclusion, second synthesis | cost, scale, raw materials, where it applies, horizons, risks, "Therefore" note | 5/5 COST AND SCALE |
| Appendix | A1 model chain and checks, A2 assumptions bear to bull, A3 sensitivity and near-infrared, A4 sources and short forms | annexure |

The ribbon labels are the brief's own questionnaire headings in plain words ("THE TECHNOLOGY", "THE CHALLENGE", "WHY IT IS
UNIQUE", "MECHANISM AND PROOF", "COST AND SCALE"), exactly as the winning deck used its brief's section names.

### 3.3 The contrarian recommendation (skill section A, rhetoric section 1)

| Step | Content |
|---|---|
| Obvious answer the brief invites | Find a new white pigment or particle: hollow spheres, nano-engineered pigments, photonic or bio-inspired crystals, TiO2 substitutes |
| The actor's real gap | Asian Paints needs less TiO2 per m² without losing whiteness, durability or the two-coat practice of India's painters, and without a new supply chain |
| Why the obvious answer fails | One model, one test: no TiO2-free or particle-level design reaches premium brightness (0 of 6); the best commercial and particle ideas save 9 to 20%; every particle that carries its own air pocket costs 9 times the film volume per gram of TiO2 |
| The less obvious answer | Keep rutile, change where the air lives: an air-continuous base coat (TiO2 plus fine chalk above the critical PVC, 35% air) under a thin seal coat whose latex is too large to enter the pores |
| Three reasons each side | Quantitative: 39% less TiO2 against 9 to 20%. Strategic fit: same pigment, same mills, same two coats. Feasibility: no new plant, no painter training, interior first |
| Foreshadowing | Slide 2/5 ends on "So the air has to live in the film, not in the particle" before slide 4/5 names the design |
| Moneyshot | "39% LESS TiO2" (card named `CARD: MONEYSHOT` on slide 4/5): 40.8 g to 24.8 g of TiO2 per m² at contrast ratio 0.998 and brightness 90.7; 15% to 65% across scenarios |
| Double synthesis | "CONCLUSIVELY" card on 3/5; "Therefore" note on 5/5 and the thank-you line |
| Symmetric treatment | All twelve designs face the same targets, the same film budget and the same model; the five challenges are scored for three routes on one grid |
| Pre-empting weaknesses | Bear case printed everywhere the base is (15%); "in our model" wording; the panel-test plan with pass marks; prior art named on the slide's source line |
| Third-party validation | Burresi et al. 2014 on Cyphochilus scales (slide 4/5), Palmer et al. 2023 on bio-inspired scatterers (slide 3/5); lane J verifies the verbatim wording and adds a Dow statement on spacer and hollow-sphere savings for the research |

### 3.4 The twelve insights the research must carry

1. Rutile scatters 1.52 times more light per unit volume in air than in binder; at a medium index of 1.20 it already gains 1.33x `[T4]`.
2. Crowding at 18% TiO2 costs 9% of rutile's scattering in binder under ideal packing; real flocculation costs more `[T6]`.
3. A thin air gap around a rutile particle lowers its scattering (10.5, 9.9 and 10.4 per µm³ for 20, 40 and 80 nm gaps against 11.7 bare) `[T5]`.
4. A thick air gap raises scattering per gram of TiO2 but cuts scattering per µm³ of film ninefold: the volume budget kills particle-level air `[T5]`.
5. No substitute pigment reaches premium brightness at practical loading: ZnS 90.4, zirconia 88.0, organic crystals 84.1, high BaSO4 63.2 against a 90.7 target `[T8]`.
6. Hollow polymer spheres save 9%, a nano-air binder 11%, hollow rutile 20% under the same test `[T8]`.
7. Above the critical PVC, fine chalk becomes a pigment because it sits in air; the base coat's hiding comes from both rutile and chalk `[T11]`.
8. One coat of the air network hides at 6 g of TiO2 per m² as well as a conventional coat does at 18 g `[T11]`.
9. The two-coat system matches the premium white with 24.8 g against 40.8 g per m², a 39% cut, and uses 42% less binder `[T9]`, `[T12]`.
10. What surrounds the rutile is the single biggest uncertainty (21% to 65% saving); porosity and seal-coat infiltration follow `[T14]`.
11. Material cost falls from ₹18.4 to ₹12.0 per m²; at 40% adoption in interior emulsions that is about ₹298 Cr a year and 7,551 t of TiO2 not bought `[T12]`, `[T13]`.
12. The air network also reflects more near-infrared (71.1% against 63.7% at 1,500 nm), a link to Case Study 2 `[T15]`.

### 3.5 Frameworks used and where

| Framework (skill `frameworks.md`) | Where |
|---|---|
| MECE option filter and issue tree | the twelve-design screen (§12, slide 3/5); the brief's five challenges (§17) |
| Value chain | TiO2 supply from ilmenite to the wall (§9) |
| Porter's five forces (supplier power) | TiO2 suppliers and duties (§9) |
| VRIO | why the design is hard to copy: know-how in porosity control and seal-latex design (§23) |
| Three horizons and stage-gate | roll-out (§23, slide 5/5) |
| Scenario analysis and tornado sensitivity | bear, base, bull and one-at-a-time (§21, slides 1/5, 5/5, annexure) |
| Risk register and pre-mortem | §24, slide 5/5 |
| Cost-benefit per m² (operations guide) | §20, slide 5/5 waterfall |
| Biomimicry precedent (nature as prior art) | Cyphochilus and shrimp (§11, slides 2, 4/5) |
| Weighted case selection matrix | choosing Case 1 among four (§8) |

### 3.6 Idea screens for Cases 2, 3 and 4 (fixed; writers explain them with lane evidence, they do not invent new ones)

Each screen scores eight ideas 1 to 5 on originality, physics or chemistry headroom, proof-of-concept feasibility for a
student team, fit with Asian Paints and scale in India, and names one "best if chosen" idea. Scores are the team's judgement
and are labelled so.

| Case | Idea | Orig. | Headroom | Proof | AP fit | Scale | Note |
|---|---|---|---|---|---|---|---|
| 2 | Radiative-cooling roof paint (BaSO4 or porous polymer) | 2 | 3 | 4 | 5 | 4 | Crowded field; humid sky narrows the atmospheric window |
| 2 | Anti-soiling cool roof that keeps its reflectance | 3 | 3 | 4 | 5 | 5 | India's dust and monsoon decide aged performance |
| 2 | Humidity-recharged evaporative and radiative roof layer | 5 | 4 | 3 | 3 | 3 | Turns coastal humidity into a coolant; millimetre layer, not a paint |
| 2 | Angle-selective emitter for vertical facades | 4 | 3 | 2 | 2 | 2 | Research stage |
| 2 | Temperature-adaptive (thermochromic, VO2) coating | 3 | 3 | 2 | 2 | 2 | Cost; benefit only where winters are cold |
| 2 | Phase-change wall putty | 3 | 2 | 3 | 4 | 3 | Latent heat limited by thickness |
| 2 | Cooling coat for two- and three-wheeler EV battery packs | 4 | 3 | 3 | 2 | 3 | Niche for a decorative major |
| 2 | Our Case 1 air-network white as a near-infrared reflective wall | 4 | 3 | 5 | 5 | 4 | T15 shows 63.7% to 71.1% at 1,500 nm |
| 2 | Best if chosen | | | | | | Humidity-recharged layer, tested to ASTM E903, C1549, E1980 and a roof-temperature protocol |
| 3 | Bio-VAM from India's E20 ethanol for Asian Paints' VAM and VAE chain | 2 | 3 | 3 | 5 | 5 | Drop-in, mass-balance precedent abroad |
| 3 | Paddy straw to biogenic silica matting and cellulose rheology modifier | 4 | 3 | 3 | 4 | 4 | Avoided burning in the LCA |
| 3 | Cardanol (cashew nut shell liquid) polyols and hardeners | 2 | 3 | 3 | 3 | 4 | Known chemistry, Indian supply |
| 3 | Lignin from 2G ethanol as UV absorber for wood finishes | 3 | 3 | 3 | 3 | 3 | Colour is the limit |
| 3 | Itaconic acid in place of (meth)acrylic acid in latex | 2 | 2 | 3 | 4 | 3 | Fermentation cost |
| 3 | PCC made from captured CO2 as extender | 3 | 3 | 4 | 5 | 4 | The fine chalk our Case 1 base coat uses |
| 3 | Microbial pigments | 4 | 2 | 2 | 2 | 2 | Light fastness |
| 3 | Guanine-type organic crystals as whiteners | 5 | 2 | 3 | 3 | 2 | Weak in binder (T8 row 9), useful in an air network (row 12) |
| 3 | Best if chosen | | | | | | Paddy straw silica and cellulose, with a cradle-to-grave LCA outline |
| 4 | Physics-informed Bayesian optimisation for formulations | 3 | 4 | 4 | 5 | 4 | Small-data route; brief forbids assumed numbers |
| 4 | Optical structure-property model of hiding (our Case 1 pipeline) | 4 | 4 | 5 | 5 | 4 | Already built and checked (T3) |
| 4 | Weathering digital twin from accelerated and outdoor data | 4 | 3 | 3 | 4 | 3 | Public data exists (NIST) |
| 4 | Graph neural network for Tg and film formation | 2 | 3 | 4 | 3 | 3 | Common entry |
| 4 | Automated ingestion of FTIR, DSC and GPC into a lab data model | 2 | 3 | 3 | 4 | 4 | Plumbing, not science |
| 4 | Federated learning across R&D sites | 3 | 2 | 2 | 3 | 3 | Answers A-Q8 only |
| 4 | Literature-mining language model for formulation knowledge | 2 | 2 | 3 | 3 | 3 | Common entry |
| 4 | Self-driving lab for dispersion and rheology | 3 | 4 | 1 | 4 | 3 | Hardware heavy |
| 4 | Best if chosen | | | | | | The optical model joined to Bayesian optimisation, validated on literature data |

### 3.7 Choosing among the four cases (section 8 of the research)

Rule: weighted score = 0.25 originality headroom + 0.25 proof-of-concept feasibility + 0.25 value to Asian Paints + 0.15 team
capability + 0.10 crowding risk (5 = few rival entries likely). Scores are the team's judgement.

| Case | Headroom | Proof | Value | Team | Crowding | Weighted |
|---|---|---|---|---|---|---|
| 1 Whiteness | 4 | 5 | 5 | 4 | 4 | 4.50 |
| 2 Thermal | 3 | 4 | 3 | 4 | 2 | 3.30 |
| 3 Bio-based | 3 | 3 | 4 | 3 | 3 | 3.25 |
| 4 AI and characterisation | 2 | 3 | 4 | 4 | 2 | 3.05 |

## 4. Locked numbers (reference output of the model, hash `b377745d37`)

| Quantity | Value | Source |
|---|---|---|
| Premium baseline (18% TiO2 PVC, two coats of 30 µm): contrast ratio, Y, L*, b* | 0.9986, 90.9, 96.4, 1.40 | T7 |
| Fair reference (least TiO2 meeting the same targets) | 17.0% PVC, 40.8 g TiO2 per m², CR 0.9984, Y 90.7 | T7 |
| Targets | Y at least 90.7, two-coat CR at least 0.998 | A11, A12 |
| Proposal, base case | base coat 46.2 µm, 35% air, 9.1% TiO2 by film volume; seal coat 16.4 µm with 12% TiO2; host index 1.18; CR 0.9980, Y 90.7, L* 96.3, b* 1.5 | T9 |
| TiO2 per m² | 40.8 g to 24.8 g (−16.1 g) | T12 |
| TiO2 saving, bear / base / bull | 15% / 39% / 65% | T9 |
| Binder per m² | 41.6 g to 24.1 g (−42%) | T12 |
| Materials cost per m², base | ₹18.4 to ₹12.0 (−34%); bear −16%, bull −51% | T12 |
| CO2e per m² | 0.23 kg to 0.16 kg (−28%) | T12 |
| Asian Paints scale, base (estimate) | TiO2 bill ₹2,998 Cr, 1,19,919 t; 470 mn m² on the new system; 7,551 t TiO2 avoided; ₹189 Cr TiO2 saving; ₹298 Cr net materials saving; 29.7 kt CO2e | T13 |
| Same, bear / bull | ₹38 Cr / ₹1,021 Cr net a year | T13 |
| Rutile, air against binder | 1.52x per unit volume | T4 |
| Crowding at 18% | efficiency 91% in binder, 80% in air | T6 |
| Screen savings | hollow polymer 9%, nano-air binder 11%, hollow rutile 20%, ours 39%, ours with organic crystals (horizon 3) 81% | T8 |
| One coat | 6.0 g in air hides like 18.0 g in binder (CR 0.990) | T11 |
| Near-infrared at 1,500 nm | 63.7% to 71.1% | T15 |
| Tornado (base 39%) | surroundings 21% to 65%; porosity 33% to 45%; infiltration 34% to 43%; seal minimum 37% to 39%; chalk size 37% to 38% | T14 |

The honest reading, to appear in research sections 16 and 21: the base case rests on the Bruggeman mix of air and binder
around the rutile; if binder preferentially wets the pigment the saving falls to about a fifth; the baseline is modelled
without flocculation, which flatters the conventional film and makes our saving conservative on that count; nothing here has
been measured on a panel.

## 5. Assumptions and the update protocol

### 5.1 Register

A01 to A31 are defined in the model (section M, dictionary `A`) with base, bear and bull values and their basis, and are
printed as table T1. The nine that matter most: A05 porosity, A07 infiltration, A08 surroundings rule, A28 minimum seal
coat, A13 TiO2 price, A23 TiO2 share of raw materials, A24 addressable share, A25 adoption, A18 TiO2 footprint.

### 5.2 Which assumptions verifiers test

| ID | Lane | What would change it |
|---|---|---|
| A05 | C | Published porosity of pigment layers above CPVC outside 25 to 45% |
| A13 | B | Verified Indian landed price of rutile in 2025 to 2026 outside ₹200 to ₹300 a kg |
| A15, A16, A17 | E | Verified Indian prices for fine PCC, GCC and acrylic binder solids |
| A18, A26, A27 | B, E | Published cradle-to-gate footprints |
| A21, A22 | A | Asian Paints FY26 consolidated revenue and gross margin (filing) |
| A23 | A, B | Any published TiO2 share of the raw material bill for Indian paint companies |
| A02, A01 | F | Published TiO2 content and dry film thickness of Indian premium interior emulsions |

### 5.3 Update protocol (the only way a locked number may change)

1. A verifier's VERIFIED or CORRECTED row puts a value outside the assumption's bear-to-bull range, or replaces a base with a
   better-sourced figure in the same unit.
2. The main agent edits only that entry of `A` in `model/whiteness_model.py`, records `date | step | ID old to new | why` in
   `DECISIONS.md`, reruns the model, and reruns `deck/gen.py pre`.
3. If any value in section 4 changes, the main agent updates `MUST` in `deck/gen.py` and every research part that quotes it
   (grep the old figure), then reruns `gen.py mock` and `copy`. Never patch one place.

---

# PART III. RESEARCH

## 6. Research lanes

Schema for every raw file `research/raw/R-X.md`: an H1, a two-line preamble with the access date, one H2 per question, then
a table `| R-ID | Fact | Source title | Publisher | URL | Date accessed | Verbatim snippet (max 25 words) | Status |` with
Status VERIFIED, CORRECTED (state the corrected figure), VERIFIED (search only) or UNVERIFIABLE; end with `## Gaps` and
`## Conflicts`. 35 to 70 rows a lane. Prefer filings, regulator text, peer-reviewed papers and standards. Flag blogs `[blog]`
and vendor claims `[vendor]`.

### Lane A: Asian Paints and the Indian decorative market
Questions: FY24, FY25, FY26 consolidated revenue, gross margin, raw-material cost share; decorative volume growth; R&D
centre, spend, patents, staff; products in whites and interiors (Royale, Apcolite, Tractor, primers, putty), the white
cement plant in Fujairah, VAM and VAE investment at Dahej, emulsion manufacturing in-house; published sustainability data
(BRSR scope 1 to 3, targets); any statement on TiO2 or raw-material inflation; competitors and shares (Birla Opus, Berger,
Kansai Nerolac, JSW Paints with Akzo Nobel India, Indigo).
Seeds: Asian Paints investor relations (asianpaints.com), FY26 results news (FilingReader, Business Standard), Asian Paints
BRSR, Harvard DIGIT case "Asian Paints: India's Biggest Data Science Company that Sells Paint", JSW-Akzo deal coverage.

### Lane B: TiO2 market, India supply, prices, duties, footprint and regulation
Questions: DGTR final findings of 12 Feb 2025 and of 3 Aug 2026 (duty range, import share from China, Indian demand); the
May 2025 notification; the Calcutta High Court order of 22 Sep 2025; CBIC notification status now; Indian producers and
capacities (KMML, Travancore Titanium Products, V.V. Titanium Pigments, Kilburn, Cochin Minerals and Rutile); landed prices
2025 to 2026; global producers (Chemours, Tronox, Kronos, Venator, LB Group); cradle-to-gate footprint by route (TDMA LCA);
EU carcinogen classification of TiO2 powder and its annulment; EU food ban (E171).
Seeds: zeebiz.com and upstox.com DGTR articles, chemanalyst.com TiO2 duty news, european-coatings.com, bizsolindia.com,
taxguru.in, titanos.com, TDMA (tdma.info), EU General Court judgment T-279/20, ECHA.

### Lane C: Optics, physics and the model's inputs
Questions: Devore 1951 rutile dispersion; rutile absorption edge and k in 380 to 420 nm; PMMA dispersion (Sultanova 2009);
calcite indices; BHMIE benchmark value for m 1.55, x 5.213; Percus-Yevick structure factor in paints and dependent
scattering literature (Fitzwater and Hook; Tiarks); Kubelka-Munk and Saunderson constants; CIE D65 and 1931 observer
tables (download the official CSVs from cie.co.at and compare with the embedded 10 nm tables, report every mismatch above
0.5%); critical PVC, dry hiding, porosity of pigment layers on paper (25 to 45%); typical TiO2 PVC, dry film per coat and
contrast ratio of premium interior emulsions; ISO 6504-3 and ISO 7724.
Seeds: refractiveindex.info entries for TiO2 (Devore), PMMA (Sultanova), calcite; Bohren and Huffman BHMIE listing;
miepython documentation; PCI Magazine "Hollow Latex Particles: Binders That Provide Opacity"; Coatings World "Reducing
Titanium Dioxide in Paints for a More Sustainable Future"; cie.co.at data tables.

### Lane D: Prior art, novelty and patents
Questions: what is published or patented on (i) hollow polymer opacifiers (Rohm and Haas US5147940A, EP2272923A1),
(ii) polymer-encapsulated TiO2 and pigment spacing (US20140011943A1, EVOQUE), (iii) yolk-shell TiO2@void (Colloids and
Surfaces A, 2017), (iv) hollow silica and polymer-silica pigments (Prog. Org. Coat. 2025; Colloids Surf. A 2025),
(v) porous polymer radiative cooling paints (Mandal et al., Science 2018), (vi) Cyphochilus scales (Vukusic 2007; Burresi
2014; synthetic mimics), (vii) shrimp isoxanthopterin and guanine whiteners (Palmer 2018, 2020, 2023; EcoCrystal),
(viii) self-stratifying coatings and drying stratification (Fortini 2016; Zhou, Jiang and Doi 2017; Schulz and Keddie
2018), (ix) any patent claiming a porous, above-CPVC base coat sealed by a topcoat for hiding with reduced TiO2 (search
Google Patents with combinations of "above CPVC", "porous", "sealer", "topcoat", "hiding", "titanium dioxide reduction"),
(x) microporous inkjet media as a precedent for porous layers under a sealing layer. Report for each: what it claims, year,
whether it overlaps our combination.
Seeds: sciencedirect.com S0927775717301802, S0300944025007660, S0927775725018126; PMC4133710 (Burresi); PMC10241642
(Palmer); advanced.onlinelibrary.wiley.com doi 10.1002/adom.202401983 (photonic whitener pigments); patents.google.com.

### Lane E: Materials, production and handling
Questions: precipitated calcium carbonate in India (producers, particle sizes, prices, CO2 route); ground calcium carbonate
prices; acrylic and styrene-acrylic binder prices; latex particle size ranges and minimum film formation; silane and siloxane
water repellents for masonry and their dosing; TiO2 dust exposure limits and IARC classification; PCC safety data; footprints
of PCC and acrylic binders.
Seeds: Indian PCC producers' sites, ChemAnalyst price pages, IARC monograph 93, OSHA and ACGIH limits, supplier safety data.

### Lane F: Indian painting practice and standards
Questions: putty, primer and two topcoats as standard practice; spreading rates and dry film per coat for premium and
economy interior emulsions; BIS standards for emulsions and distempers; contrast ratio requirements; Asian Paints painting
services; drying conditions by climate (evaporation rates for A29 to A31); market segments (premium, mid, economy) by value.
Seeds: Asian Paints product technical data sheets, BIS standards catalogue, IMD climate normals.

### Lane G: Case Study 2 landscape (thermal management)
Questions: India Cooling Action Plan figures; cool roof policies (Telangana Cool Roof Policy 2023 to 2028, Ahmedabad Heat
Action Plan); radiative cooling paints and their limits in humid tropics (including the Mumbai, Nagpur and Prayagraj study,
ACS Omega 2024); soiling and ageing of cool roofs; ECBC cool roof criteria; data centre cooling share; Asian Paints cool roof
products. Seeds: pubs.acs.org/doi/10.1021/acsomega.4c07223, PMC9381728, the brief's four references.

### Lane H: Case Study 3 landscape (bio-based and circular)
Questions: Asian Paints Nilaya Naturals and renewable-content claims; cashew nut shell liquid (cardanol) supply in India;
paddy straw volumes and burning; E20 ethanol capacity and bio-ethylene and bio-VAM precedents (Wacker, Celanese, Braskem);
lignin from 2G ethanol (IOCL Panipat); itaconic acid; LCA references from the brief.
Seeds: the brief's ten DOIs, MoPNG E20 releases, CPCB stubble data.

### Lane I: Case Study 4 landscape (characterisation, modelling and AI)
Questions: the brief's thirteen references; public polymer datasets (PoLyInfo, Polymer Genome, NeurIPS 2025 Open Polymer
Prediction); self-driving labs in coatings; physics-informed and Bayesian optimisation results with numbers; data
confidentiality methods (federated learning, on-premise). Seeds: the brief's references.

### Lane J: Third-party quotes for the deck and research
Collect 6 to 10 verbatim quotes of at most 40 words from named, credible sources that bear on the recommendation, each with
URL and date: Burresi et al. 2014 (the "lowest transport mean free path" line used on slide 4/5); Palmer et al. 2023 (the
"biologically inspired replacements for artificial scatterers like titanium dioxide" line used on slide 3/5); a Dow or
industry statement on TiO2 reduction with spacers and hollow spheres; TDMA or a peer-reviewed LCA on TiO2's footprint; any
Asian Paints management statement on TiO2 or raw-material costs. If either deck quote cannot be verified verbatim, record the
nearest verbatim sentence; the deck derivation step replaces the slide text through `overrides.json`.

### After the ten files exist (step R2)
The main agent builds `research/raw/sources.md` as `| S-ID | Publisher (date) Title | URL | Type | Accessed |`, one row per
unique URL (S01 upward), and adds a column `Lane rows` listing the R-IDs. It reads every "Changed numbers" list, applies the
update protocol in 5.3 where triggered, and writes `## Corrections for writers` in `build-log.md`.

## 7. Research document specification

### 7.1 Format
- File `research/alchemy-whiteness-research.md`, assembled by `assemble.py md` (section X2). Writers never write an H1.
- Each H2 is `## N. Title` with the exact title below and opens with a bold `**Answer.**` paragraph of two to four sentences.
- Tables are pipe tables introduced by a sentence and followed by what they show. Worked arithmetic is shown the first time a
  derived number appears. Every section that feeds a slide ends with `Exhibit for the deck: ...`.
- No images. Blockquotes only for verbatim quotes of at most 40 words with attribution.

### 7.2 Section outline, content and owner

| § | H2 title (use exactly) | Must contain | Tables (min) | Words (min) | Writer |
|---|---|---|---|---|---|
| 0 | Document control | Purpose and reader; tag legend; source hierarchy; model version, hash and rerun command; the skill's calibration note; what is brief fact, assumption, model output and outside evidence; verification tally per lane | 5 | 1,000 | W-A |
| 1 | Coverage matrix: every line of the four briefs mapped to a section | One row per ID in `case/01-briefs.md` (W, T, B, A series): what the brief says, how we answer it, section, slide | 4 | 1,500 | W-A |
| 2 | The answer on one page: keep rutile, move it into air, seal the air in, and use 39% less TiO2 | Recommendation; the do not and do table; three reasons each side; the moneyshot; what would change our mind (five triggers); a 150-word version | 5 | 2,000 | W-A |
| 3 | Asian Paints spends about ₹3,000 Cr a year on TiO2, its single most exposed raw material | Lane A facts; the estimate with its arithmetic and assumption IDs; products and process (putty, primer, two coats); competitors; R&D context | 6 | 2,800 | W-B |
| 4 | Case Study 1 landscape: whiteness is a scattering problem, and rutile has no equal per unit volume | Physics primer in plain words; TiO2 market, supply, DGTR timeline, CO2, regulation; the brief's five challenges unpacked | 6 | 3,200 | W-B |
| 5 | Case Study 2 landscape: India's cooling problem is humid and dusty, which caps radiative-cooling paints | Lane G; eight ideas screened on one rubric; the best Case 2 idea if it were chosen; how our Case 1 film helps (T15) | 6 | 2,800 | W-B |
| 6 | Case Study 3 landscape: India's renewable carbon is in waste streams and ethanol, not new crops | Lane H; eight ideas screened; the best Case 3 idea; LCA outline for it | 6 | 2,800 | W-B |
| 7 | Case Study 4 landscape: the bottleneck is clean data, not a bigger model | Lane I; eight ideas screened; the best Case 4 idea; how our optical model is itself a structure-property tool | 6 | 2,600 | W-B |
| 8 | Choosing the case: Case Study 1 scores highest on headroom, proof and value to Asian Paints | Weighted matrix of the four cases (originality headroom, proof-of-concept feasibility, value to Asian Paints, team capability, judge familiarity risk) with the rule stated | 3 | 1,400 | W-B |
| 9 | Rutile in binder scatters only 66% of what it would in air, and crowding takes another 9% | T4, T6; value chain of TiO2; supplier power; what the binder does to light | 6 | 2,800 | W-C |
| 10 | The model: Mie theory, crowding, two-coat optics and colour in one pipeline | Method in plain words then in equations; inputs T2; checks T3; limits; how to rerun | 6 | 3,200 | W-C |
| 11 | Prior art: every piece of the idea is known, and the combination is not claimed in what we found | Lane D table per item; patent search log; novelty statement; what nature already does (Cyphochilus, shrimp) | 7 | 3,200 | W-C |
| 12 | Twelve designs under one test: no substitute pigment reaches premium brightness | T8 explained row by row with physics reasons; MECE logic of the twelve; three routes by five challenges grid | 6 | 3,000 | W-C |
| 13 | The volume budget: a thin air gap backfires and a thick one costs nine times the film | T5; arithmetic; why yolk-shell and hollow rutile stall | 4 | 2,000 | W-C |
| 14 | The design: an air-network base coat under a seal coat, in the two coats painters already apply | Formulation rules (porosity, binder share, chalk size, TiO2 level, seal latex size against pore throat, seal TiO2, film thickness); what changes for the painter (nothing) | 7 | 3,000 | W-D |
| 15 | The mechanism: rutile sees a medium of index 1.18, chalk becomes a pigment, and the seal keeps the air | Optics, film formation above CPVC, size exclusion and capillarity, hydrophobic pores for exteriors, stratification physics for a one-coat version (T16) | 6 | 3,200 | W-D |
| 16 | Proof of concept: the model matches a premium white with 24.8 g of TiO2 per m² instead of 40.8 g | T7, T9, T10, T11; the honest reading from section 4 in full; what the model cannot see | 7 | 3,000 | W-D |
| 17 | The five challenges in the brief, answered one by one | Opacity, durability and yellowing, dispersion, supply and economics, manufacturing complexity: claim, evidence, residual risk, test | 5 | 2,600 | W-D |
| 18 | Production and raw materials: four steps on equipment Asian Paints already runs | PCC route, base paint, seal latex, application; handling and safety of each raw material; plant fit | 6 | 2,600 | W-D |
| 19 | Where it applies: interior emulsions first, then exteriors, industrial and automotive | Water and solvent borne; tinting and colour; touch-up; India's climates; segment table | 5 | 2,400 | W-D |
| 20 | Cost: material cost falls from ₹18.4 to ₹12.0 per m² and footprint by 28% | T12 with arithmetic per component; per litre view; price sensitivity | 5 | 2,200 | W-E |
| 21 | Scale: about ₹298 Cr a year and 7,551 t of TiO2 at 40% adoption, with a range of ₹38 Cr to ₹1,021 Cr | T13, T14; scenario assumptions; supply resilience against duties; three scenarios table | 6 | 2,600 | W-E |
| 22 | The lab programme that would prove it, with pass marks (not yet run) | First sentence says nothing has been measured; panels, methods (ISO 6504-3, ISO 7724, ASTM D2486, porosimetry, FIB-SEM, QUV for exteriors), design of experiments, pass marks, decision rules | 6 | 2,400 | W-E |
| 23 | Roadmap: lab in six months, interior pilot in twelve, three horizons with gates | Gantt as table; gates and tests; IP strategy; VRIO | 5 | 2,200 | W-E |
| 24 | Risks: what surrounds the rutile decides most of the answer | Register (probability, impact, early signal, response, owner); 5 by 5 heat map as table; pre-mortem | 5 | 2,200 | W-E |
| 25 | A bonus for Case Study 2: the air network sends back more near-infrared | T15; caveats (indicator only); what a full solar test would need | 3 | 1,200 | W-E |
| 26 | Assumptions register and model summary | T1 in prose; the nine that matter; how to change one input | 3 | 1,600 | W-F |
| 27 | Slide blueprint for the deck | Per slide and per panel: title, numbers, research section and tags; archetype mapping from the skill; logo and image slots | 4 | 1,800 | W-F |
| 28 | Forty questions the judges could ask, answered | Grouped by the seven questionnaire items and the five challenges; the ten hardest first; each 60 to 120 words with tags | 2 | 4,500 | W-F |
| 29 | A talk track for two speakers | Timed blocks per slide; the one number each block lands | 2 | 1,000 | W-F |
| App A | Appendix A: Bibliography | Built by `assemble.py` | 1 | n/a | Script |
| App B | Appendix B: Model tables | Inserted by `assemble.py` | 16 | n/a | Script |
| App C | Appendix C: Glossary and short forms | Every term and short form with its meaning here | 2 | 900 | W-F |
| App D | Appendix D: Data conflicts and method limits | Every `## Conflicts` entry and its resolution; model limits | 2 | 900 | W-F |

Part files: `part-A.md` §0 to 2; `part-B.md` §3 to 8; `part-C.md` §9 to 13; `part-D.md` §14 to 19; `part-E.md` §20 to 25;
`part-F.md` §26 to 29; `appendix-C.md`, `appendix-D.md` by W-F, each opening with its exact `## Appendix X: ...` heading.

Acceptance (printed by `assemble.py md`): words at least 70,000; tables at least 130; dashes 0; exclamations 0; banned
empty; question headings empty; `missing_S` empty; duplicate headings empty; `**Answer.**` leads at least 28.

---

# PART IV. EXECUTION

## 8. Using the case-competition-deck skill (mandatory touchpoints)

Invoke with the Skill tool (`skill: "case-competition-deck"`). Log each as `Touchpoint X: STATUS` with two lines of evidence.

| Touchpoint | When | What to do | Pass test |
|---|---|---|---|
| A | Step B3 | Load the skill. Read `references/structure.md`, `rhetoric.md`, `archetypes.md`, `case_types/strategy.md`, `case_types/operations.md`. Confirm section 3 carries: contrarian answer, seed, symmetric treatment, three scenarios, one moneyshot, double synthesis, action titles, third-party validation, pre-empted weaknesses | All nine located in section 3; calibration note logged |
| B | Every writer prompt | Writers read `references/rhetoric.md` and the `references/frameworks.md` entries assigned in 3.5 | Each part's H2s are the locked findings; each assigned framework appears |
| C | Step R6 | Critique mode on the research: critic CR with prompt 11.4 and `references/critique_rubric.md`, re-based for a research document | `research/critique.md` saved; every score under 4 fixed or reason logged |
| D | Step R5, on section 27 | Slide mode check of the blueprint against `references/archetypes.md` (H executive summary, J multi-chart, K MECE filter, M scenarios, N sensitivity, P moneyshot, U implementation, V conclusively, W conclusion) | Mapping table appended to section 27 |
| E | Step Z1 | Polish search: TODO, Insert, Placeholder, TBD, Lorem, xyz, and names from other cases (SwiftKart, SwasthyaGrid, HarvestBox, Dream11, Paytm, Liminal, Setu) | Grep of the research returns nothing outside the bibliography |
| F | Step D1 | Before deriving the deck: read `archetypes.md` and `rhetoric.md`; check the five core headlines are full-sentence findings with a number, slide 3/5 carries "CONCLUSIVELY" and 5/5 "Therefore", exactly one `CARD: MONEYSHOT` | Logged |
| G | Step D6 | Critique mode on the built deck: critic with the nine screenshots, `deck/slide-copy.md`, `deck/derivation.md` and the rubric re-based for a 5-core-slide deck. At most five issues; none may change a number, the case or the slide count | `deck/critique.md` saved; fixes within 15.6 applied |
| H | Step D7 | Final polish search on `deck/slide-copy.md` (same list as E) | Nothing found |

The skill's rubric assumes a 100-slide M&A deck. Re-base it and say so: "8 sections present" becomes the mapping in 3.2;
"sample 10 action titles" becomes all 30 research H2s or all 7 slide headlines; "appendix depth" becomes "every number has a
tag" (research) or "every number is in values.json or a VERIFIED row" (deck). The skill's .pptx step does not apply.

## 9. Environment (checked 14 to 17 Oct 2026)

Python 3.14.5 with numpy 2.4.6, scipy 1.17.1, matplotlib, PyMuPDF (`fitz`), pandas, scikit-learn; Node v24.15.0; Chrome at
`C:\Program Files\Google\Chrome\Application\chrome.exe`. Run every Python command from the repo root with `python -X utf8`.
In PowerShell chain with `;`, never `&&`; the Bash tool is also available. `markdown_it` is used by the PDF renderer
(`python -m pip install markdown-it-py` if missing). The deck generator reads, never writes: `verdict-mnc/deck/preamble.js`,
`verdict-mnc/deck/mock_figma.js` and `swasthyagrid-gcp/space-beyond/deck/{_extras.js,_x2.js,_x3.js,metrics.json}`.

## 10. Execution sequence

### 10.1 Bootstrap

Step B0. Copy this plan to `asian-paints-alchemy/PLAN.md` byte for byte:
```
python -c "import shutil; shutil.copyfile(r'C:\Users\harsh\.claude\plans\working-folder-asian-paints-alchemy-bubbly-prism.md', r'asian-paints-alchemy\PLAN.md')"
```
Step B1. Open `asian-paints-alchemy/PLAN.md`, find the block `<!-- FILE: extract.py -->` in section X1, create
`asian-paints-alchemy/extract.py` with exactly that block's content using the Write tool, and run
`python -X utf8 asian-paints-alchemy/extract.py`. Done when it prints `files 17`.

### 10.2 Step table

| Step | Who | Action | Done when |
|---|---|---|---|
| B0, B1 | Main | Bootstrap | `files 17` |
| B2 | Main | Start `build-log.md` and `DECISIONS.md` (header `date | step | decision | why`); read section 2.5 | Both exist |
| B3 | Main | Touchpoint A | Logged PASS |
| M1 | Main | `python -X utf8 asian-paints-alchemy/model/whiteness_model.py` (about 3 minutes) | 13 PASS lines, `CHECKS 13/13 HASH b377745d37`, `FINDINGS [15.5, 39.4, 64.9] 298 18.36 12.03`, three files written; spot-check five rows of section 4 against `model_tables.md` |
| M2 | Main | `python -X utf8 asian-paints-alchemy/deck/gen.py pre` then `... gen.py mock` then `... gen.py copy` | Eight lines `sNN OK`; `copy issues 0` |
| C0 | Main | **Cover first** (user instruction): section 15.2 steps F1 to F4 for slide 2 only, then show the user the cover screenshot and say the research stage is starting | Slide 2 built, V1 clean, screenshot viewed, user told |
| R1 | Verifiers, background, three at a time: A, B, C; then D, E, F; then G, H, I; then J | Prompt 11.1 with the lane text from section 6 | Ten `R-*.md` files with `## Gaps` and `## Conflicts`; replies give counts and "Changed numbers" |
| R2 | Main | Build `sources.md`; apply 5.3 where triggered; write `## Corrections for writers` | Every S-ID has a URL; corrections listed; if the model changed, M1 and M2 rerun and logged |
| R3 | Writers, background: W-A, W-B, W-C together; then W-D, W-E; then W-F | Prompt 11.2 | Each part meets its words and tables and passes its self-check |
| R4 | Main | `python -X utf8 asian-paints-alchemy/research/assemble.py md` | `ASSEMBLY PASS`; else re-dispatch the short writer with the expansion line in section 13 |
| R5 | Main | Touchpoint D; `python -X utf8 asian-paints-alchemy/research/assemble.py pdf` | PDF over 800 KB; first page and one table page viewed with Read |
| R6 | Critic CR | Touchpoint C, prompt 11.4 | `critique.md`; fixes applied by re-dispatching owners; R4 and R5 rerun |
| Z1 | Main | Touchpoint E; checklist 14.1; Stage 1 report to the user; write `STAGE 1 COMPLETE` with the date in `build-log.md` | All boxes ticked |
| D1 to D8 | Main | Stage 2, section 15 | Section 15.9 ticked |
| Z2 | Main | Memory, section 14.3 | Files and pointers exist |

### 10.3 Parallelism rules
- At most three sub-agents at once; on a rate limit, relaunch after the reset time in the error.
- Sub-agents write only their own files. Figma calls are made by the main agent only, one at a time.
- Writers start only after M1 (tables) and R2 (S-IDs). Writers save their file after the first two sections and extend it.

## 11. Prompts

### 11.1 Verifier prompt (fill LANE = A to J)

> You are verifier V-LANE for a case-competition research file. Read `asian-paints-alchemy/PLAN.md` section 6 (schema and
> "Lane LANE"), section 2.1 and `asian-paints-alchemy/case/01-briefs.md`. For each question and each seed: open the URL with
> WebFetch, or find the primary source with WebSearch (mode "standard"; "extended" only when a standard search comes back
> thin); record one row per fact in the schema; mark it VERIFIED, CORRECTED (give the corrected figure and date), VERIFIED
> (search only) or UNVERIFIABLE; quote at most 25 words verbatim. Add rows from better sources until you have 35 to 70.
> Prefer filings, regulators, peer-reviewed papers, standards and patents. Never invent a figure, date, quote or URL. Flag
> blogs `[blog]` and vendor claims `[vendor]`. Where sources disagree keep both and list them under `## Conflicts`. Do not
> write analysis. Do not convert foreign currency to rupees. No em dashes or en dashes. Write
> `asian-paints-alchemy/research/raw/R-LANE.md` (H1, a two-line preamble with today's access date, one H2 per question, the
> table, `## Gaps`, `## Conflicts`), saving after your first two questions and extending it. Reply with: rows verified,
> corrected, unverifiable and new; a list "Changed numbers" of every seed or assumption value you corrected, with its ID
> from PLAN section 5.2 where one applies.

### 11.2 Writer prompt (fill PART and SECTIONS)

> You are writer W-PART. Write sections SECTIONS of a consulting-grade research deliverable into
> `asian-paints-alchemy/research/parts/part-PART.md` (W-F also writes `appendix-C.md` and `appendix-D.md`). Read first,
> fully: `asian-paints-alchemy/PLAN.md` sections 1 to 5 and 7; `asian-paints-alchemy/case/01-briefs.md`;
> `asian-paints-alchemy/model/model_tables.md`; `research/raw/sources.md` and every `R-*.md`; `build-log.md` section
> "Corrections for writers"; `.claude/skills/case-competition-deck/references/rhetoric.md` and the `frameworks.md` entries
> assigned to your sections in PLAN 3.5; for register only, `dreamforge-case/research/swiftkart-research.md` lines 1 to 150.
> Rules. Use the exact H2 titles from PLAN 7.2 as `## N. Title`; `### N.M` for sub-sections; never an H1. Open every H2 with
> a bold `**Answer.**` paragraph of two to four sentences. Cover every "Must contain" item and meet the minimum words and
> tables; more is welcome when every paragraph carries evidence. Every number carries a tag: `[W-Q3]` style brief IDs,
> `[A05]`, `[M]`, `[T8]`, `[S12]`. Use only numbers from the briefs, the model tables, PLAN sections 4 and 5, or a VERIFIED
> or CORRECTED raw row. Do not browse. Do not compute new figures beyond sums, differences, ratios and products of tagged
> numbers, and show the arithmetic. Never present a model result as a measurement: write "in our model". Never invent a lab
> result, a test, an interview or an Asian Paints internal figure. Do not coin a name for the solution. Do not add any
> AI-use statement. Keep the recommendation and every locked number exactly as in PLAN section 4, and include the honest
> reading wherever your sections touch it.
> Style. First person plural, declarative, plain words, short sentences, reasoning shown, as a consultant's memo for an R&D
> board. No em dashes or en dashes, no rhetorical questions, no exclamation marks, no hooks, no banned words (PLAN 2.2).
> Expand each short form on first use in a section; put an italic expansion line under any table with short-form heads.
> Introduce every table with a sentence and follow it with what it shows.
> Save after your first two sections and extend. Self-check before replying:
> `python -X utf8 -c "import re,io;t=io.open(r'asian-paints-alchemy/research/parts/part-PART.md',encoding='utf-8').read();print(len(t.split()),len(re.findall(r'^\|[ :|-]+\|\s*$',t,re.M)),len(re.findall('[\u2014\u2013]',t)),t.count('!'))"`
> and fix until dashes and exclamations are 0 and words and tables meet the minimums. Reply with the four numbers, the
> sections written and any figure you wanted but could not find. Edit no other file.

Assignments: W-A §0 to 2; W-B §3 to 8; W-C §9 to 13; W-D §14 to 19; W-E §20 to 25; W-F §26 to 29 plus the two appendix
files. W-F runs last; add to its prompt: "Also read `parts/part-A.md` to `part-E.md` and `deck/slide-copy.md`."

### 11.3 Expansion line (when a part is short)
"Expand sections <list> by <n> words by adding worked examples from the model tables and the raw files and one more table a
section. Do not change any number."

### 11.4 Critic prompt (research)

> You are critic CR. Invoke the `case-competition-deck` skill and read `references/critique_rubric.md`. Read
> `asian-paints-alchemy/PLAN.md` sections 3, 4 and 8, then `research/alchemy-whiteness-research.md` in full. Score the
> argument with the rubric as re-based in PLAN section 8: pass or fail items, each quality dimension 1 to 5, plus two added
> tests: (i) is every questionnaire item W-Q1 to W-Q7 and every challenge W-K1 to W-K5 answered with evidence; (ii) is the
> honest reading present in sections 16 and 21. Check 25 numbers against `model/model_tables.md` and list every mismatch with
> its line. Lead with the two strongest things. At most eight issues, each with section, current state, fix and why. Do not
> propose changing a locked number, the case or an H2 title. No dashes. Write `research/critique.md`.

### 11.5 Deck critic prompt (touchpoint G)

> You are the deck critic. Invoke `case-competition-deck`, read `references/critique_rubric.md`, `archetypes.md` and
> `rhetoric.md`. Read the nine screenshots in `asian-paints-alchemy/deck/shots/`, `deck/slide-copy.md`, `deck/derivation.md`
> and PLAN sections 3 and 15. Score the deck with the rubric re-based for five core slides (PLAN 8). Check the template rule:
> slide 1 untouched and every other slide still shows the Asian Paints logo, the Alchemy mark, the Unstop mark and the foot
> bar unobstructed. Give at most five issues; none may change a number, the case or the slide count; each fix must be doable
> through `deck/overrides.json` or the fix rules in PLAN 15.6. No dashes. Write `deck/critique.md`.

## 12. What good looks like (calibration for writers and critics)

> The binder, not the pigment, sets the ceiling. In our model a rutile particle scatters 8.2 units of light per µm³ when it
> sits in acrylic binder and 12.6 when it sits in air, a factor of 1.52 `[T4]`. A premium white carries 18% rutile by film
> volume `[A02]`, and at that crowding each particle keeps 91% of its lone-particle scattering `[T6]`. Two coats of 30 µm
> therefore hold 40.8 g of TiO2 per m² to reach a contrast ratio of 0.998 and a luminous reflectance of 90.7 `[T7]`. Move the
> same rutile into a base coat that is 35% air and the medium around it falls to an index of 1.18 `[T9]`; the system reaches
> the same two targets with 24.8 g `[T12]`. The pigment is the same; the neighbours have changed.

Avoid: adjectives without numbers, a number without a tag, a table without a sentence before and after it, any sentence that
calls a model result a measurement, any sentence that could sit unchanged in a document about another company.

## 13. Recovery table

| Symptom | Action |
|---|---|
| `extract.py` prints fewer than 17 files | `PLAN.md` is not a byte copy. Redo B0 |
| Model hash differs or a check fails | A file was edited or a library changed. Re-extract and rerun. If `scipy` or `numpy` versions differ from section 9 and only the hash changes (numbers in section 4 identical to the shown precision), log it and continue; if a section 4 number changes, stop and report |
| Model runtime over 20 minutes | Normal on a slow machine up to 30 minutes; beyond that report |
| `gen.py pre` assertion | One of the read-only libraries in section 9 changed. Report the failing string; do not edit those libraries |
| `gen.py mock` shows a slide FAIL after an override | Shorten the override with the ladder in 15.6 and rerun |
| A verifier corrects a deck quote | Override the slide text with the verified wording through `overrides.json` |
| A lane has under 20 VERIFIED rows | Re-dispatch once: "Find 15 more rows from primary sources for questions <list>" |
| `ASSEMBLY FAIL` on banned or dashes | Replace the words in the named part by hand, rerun |
| `missing_S` not empty | A writer cited an S-ID not in `sources.md`: add the source or remove the claim |
| `ModuleNotFoundError: markdown_it` | `python -m pip install markdown-it-py` |
| Figma server not authorised or rate limited | Run `whoami`; if not authorised, stop and ask the user to authorise the Figma connector |
| `setup.js` returns `error` | Read the grid (15.2 F2 read script) and report; do not create slides by hand |

## 14. Final checks, report and memory

### 14.1 Stage 1 checklist
- [ ] M1 prints `CHECKS 13/13 HASH b377745d37` (or the logged new hash after a 5.3 update).
- [ ] Ten raw files with `## Gaps` and `## Conflicts`; `sources.md` has a URL for every S-ID.
- [ ] `assemble.py md` prints `ASSEMBLY PASS` (70,000 words, 130 tables, no dashes).
- [ ] Section 1 has a row for every brief ID; sections 5 to 7 each carry an eight-idea screen.
- [ ] Section 16 and 21 carry the honest reading; section 22 opens by saying nothing has been measured.
- [ ] No AI-use statement anywhere; no coined solution name.
- [ ] PDF exists and two pages were viewed; touchpoints A to E logged.

### 14.2 Reports to the user
Stage 1: paths, word and table counts, critic scores, every corrected seed, every conflict. Stage 2: the Figma URL, the
override count and the three biggest copy changes, logo slots filled and left, residuals, and one sentence that the briefs
ask for AI-content disclosure and the deck carries none by the user's choice.

### 14.3 Memory
Save `project_asian_paints_alchemy.md` (type project) in the memory directory: folder, the case chosen and why, the
recommendation in one line, model hash, the master file key and the slide-1-untouched rule, team, and that `PLAN.md` is the
surviving copy of this plan. Save `feedback_template_background.md` (type feedback): when organisers supply a template in the
master Figma file, the first slide stays as given and every other slide is a duplicate of the supplied background, which is
never removed. Add both pointers to `MEMORY.md`.

---

# PART V. STAGE 2: THE FIGMA DECK IN THE MASTER FILE

## 15. Stage 2

### 15.1 Gate (for slides 3 to 9; the cover was built in C0)
- [ ] `STAGE 1 COMPLETE` is in `build-log.md` with the date.
- [ ] `research/critique.md` fixes are applied.

### 15.2 Figma setup and the cover (steps F1 to F4, run in C0)

Tools: one ToolSearch with `select:mcp__figma-mcp__whoami,mcp__figma-mcp__use_figma,mcp__figma-mcp__get_screenshot,mcp__figma-mcp__upload_assets`.
Guidance: Skill `figma-use` if listed, otherwise `ReadMcpResourceTool` server `figma-mcp` uri `skill://figma/figma-use/SKILL.md`
and `skill://figma/figma-use-slides/SKILL.md`; pass `skillNames: "resource:figma-use,resource:figma-use-slides"` on every
`use_figma` call. The deck positions nodes absolutely through the helper library; that overrides the auto-layout advice.
`get_metadata` does not work on Slides files. File key `KJQkGsLgbeLU9vNy24p78y`.

| Step | Action | Done when |
|---|---|---|
| F1 | `whoami`. Read-only `use_figma`: `return figma.getSlideGrid().map(r=>r.map(s=>({id:s.id,name:s.name,kids:s.children.map(c=>c.name)})));` | Two slides `1:42` and `2:40`, each with one image rectangle (planning-time state). If more slides exist, list them in `deck/figma.md` and stop if any carries content: ask the user |
| F2 | `use_figma` with the full text of `deck/setup.js` | Returns `count: 9`, nine ids (first `1:42`, second `2:40`), `tplCheck` all 1, `fontsOk` all true. Write `deck/slide-ids.json` as `{"S1": id1, ..., "S9": id9}` and the method used into `deck/figma.md`. If `extra` lists slides, ask the user before removing anything |
| F3 | `python -X utf8 asian-paints-alchemy/deck/gen.py bind 2`; `use_figma` with `build/slide_02.js`; then `build/v1_02.js` | Return has `warnings: []`; V1 `clean: true` |
| F4 | `get_screenshot` of slide 2 at `maxDimension: 1600`, save to `deck/shots/s2.png` with curl, Read it; compare with `deck/shots/preview_02.png` if produced by `preview` | The template logos are visible and nothing covers them; mind map, answer card and team table as in the preview. Tell the user the cover is up |

### 15.3 Step D1: derive the deck from the research (touchpoint F first)
1. Read research sections 2, 4, 9, 11 to 18, 20 to 24 and 27, `research/critique.md`, and `build-log.md` "Corrections".
2. Create `deck/derivation.md`: one table per slide `| Panel | Text or number | Research section | Tag | Same (yes or no) | Change |`
   covering every panel title, row label, sentence and number in `deck/slides/sNN.js` and `values.json`.
3. Rules: a number from `values.json` must match the research (if not, fix the research sentence); wording the research
   states better, a verifier corrected (the DGTR timeline, the two quotes, Indian PCC, standards), or a claim the research
   could not support, goes into `deck/overrides.json` as `"exact old string": "new string"`, never more than 10% longer,
   with no dash, question mark, exclamation mark or banned word; a central research finding no slide carries is recorded
   under "Candidates for the talk track".
4. `gen.py mock` then `gen.py copy`. Done when eight `sNN OK` and `copy issues 0`. Write `STAGE 2 D1 PASS` with the override count.

### 15.4 Build (main agent only, one call at a time)

| Step | Action | Done when |
|---|---|---|
| D2 | `gen.py bind` (all) | `build/slide_NN.js` or `slide_NN_1.js` to `_3.js` for N = 2 to 9, `v1_NN.js`, `v1_all.js`, `sweeps.js`, `slots.js`, each under 50,000 characters |
| D3 | For N = 3, 4, 5, 6, 7, 8, 9 (and 2 again if it changed): run every part file of slide N in order (`_1`, `_2`, `_3`), each must return `warnings: []`; then `v1_NN.js`; then screenshot to `deck/shots/sN.png` and Read it | V1 `clean: true` or logged residuals; each screenshot described in two lines in `deck/figma.md`. **Stop after slide 3 and compare it with the Dream Forge slide `2:5` screenshot of `7N3v6bAfmXYRrte0zChFDg`; fix the system before building the rest** |
| D4 | `build/sweeps.js` then `build/v1_all.js` | `fontLow`, `copy`, `missing`, `presentBad` empty; `moneyshot` 1; every `template` value 1; `slides` 8 |
| D5 | Logos and images (15.7) | Log written |
| D6 | Touchpoint G (prompt 11.5) | `deck/critique.md`; allowed fixes applied, D3 rerun for those slides |
| D7 | Touchpoint H; final screenshots of slides 1 to 9 (slide 1 to confirm it is unchanged) | Nine images viewed |
| D8 | Export instruction (15.8) and the Stage 2 report | Report given |

Every slide script's first part clears only its own non-template nodes (`wipeTpl`), so a rerun is safe. A part after the
first never clears; if a later part fails, rerun the slide from part 1.

### 15.5 Novelty override rule
If lane D finds our exact combination already claimed, override on slide 3/5 "only an air network under a seal coat saves
more than 30% of TiO2" to keep the measured claim, and change the cover's "OUR ROUTE" card second line to name the closest
prior art and what we add (the design rule and the two-coat practice), through `overrides.json`.

### 15.6 Fix rules (the only edits allowed during the build)
A fix goes into `deck/overrides.json` (copy) or the slide file under `deck/slides/` (geometry), then `gen.py mock`, `bind`,
and the slide is rebuilt from part 1. Never edit a build file by hand and never add 240 to a coordinate.

| Issue | Fix |
|---|---|
| `headline 3 lines` | Remove the two weakest words through `overrides.json`, keep every number |
| `source 2 lines` | Drop the least important source group |
| `textOut`, `cellWrap`, overflow | Shortening ladder: drop articles; shorter word; a short form already defined on the annexure; drop the least important clause. Never below 18 pt for SEC text or 22 pt elsewhere; never drop a number |
| `keepOut` or `belowContent` | Move or shrink the named node inside x 40 to 1880 and y 130 to 988 (right of x 1605 nothing below y 990) |
| `templateLayer` or `templateNotAtBack` | Stop. Read the slide's children; never rebuild the background by hand; ask the user |
| A label touches a line in a screenshot | Nudge it by at most 24 px in the slide file |
| A node sits 240 px off | A hand-written line set x or y before `appendChild`; rerun the full slide |
| `Cannot use unloaded font` | A fragment was run; always run full part files |
| Rotated rail label not centred inside its bar | After `gen.py pre`, edit `deck/_x2.js` to `const RAILROT=false;`, then rerun `gen.py bind` (not `pre`, which would restore it) and rebuild; log in `DECISIONS.md` |

Known false positives: ribbon punch-holes over their tags, `BACK:` rectangles under cards.

### 15.7 Logos and image slots
Run `build/slots.js` to list slots. Expected on slide 2: logo slots Chemours, Tronox, KMML, Dow, Omya, Imerys, Asian
Paints, Berger, Birla Opus, DGTR, BIS, CPCB; image slots Beetle, TiO2, Cyphochilus scale; on slide 6 the Cyphochilus scale
image. For each brand try Wikimedia Commons (`https://commons.wikimedia.org/w/api.php?action=query&list=search&srnamespace=6&srlimit=10&format=json&srsearch=<brand>%20logo`
with a descriptive User-Agent), download with `curl -sL -o "asian-paints-alchemy/deck/logos/<slug>.png" "https://commons.wikimedia.org/wiki/Special:FilePath/<File>?width=600"`,
Read it to confirm the brand, upload with `upload_assets` (`count: 1`, `nodeId` = the slot, `scaleMode: "FIT"`), POST the
bytes, then remove the slot's caption and dash pattern. Marks with the State Emblem (DGTR, BIS, CPCB) stay placeholders;
tell the user. For the Cyphochilus images, use only an openly licensed image (Wikimedia Commons, CC BY or CC BY-SA) and add
its credit to the annexure source list through `overrides.json`; otherwise leave the slot and tell the user. Never resize a
slot after upload. Log each slot as uploaded or placeholder with the reason in `deck/figma.md`.

### 15.8 Export
Tell the user: in Figma Slides use File, Export, PDF; the deck is slide 1 (Asian Paints cover) plus our eight slides; check
the organisers' naming rule on Unstop before upload.

### 15.9 Stage 2 checklist
- [ ] Slide 1 (`1:42`) unchanged; slides 2 to 9 each keep exactly one `TPL: background` at the back.
- [ ] `derivation.md` covers every text and number; `overrides.json` holds every change; `gen.py mock` all OK after it.
- [ ] Sweeps empty; one `CARD: MONEYSHOT`; V1 clean or logged residuals; nine screenshots viewed.
- [ ] Cover: mind map with brand slots, no KPI-card row, team table; same table on slide 9.
- [ ] Touchpoints F, G and H logged; `deck/critique.md` exists.

---

# PART VI. EMBEDDED FILES (the source of truth for every script)

Every block below is extracted byte for byte by `extract.py`. Never retype a block. A fix is made in the extracted file,
never in this plan, and is logged in `DECISIONS.md`.

## M. Model

<!-- FILE: model/whiteness_model.py -->
```python
# ===== ALCHEMY WHITENESS MODEL v1 =====
"""Physics proof of concept and economics for Asian Paints Alchemy, Case Study 1 (whiteness).
Run from the repo root:
  python -X utf8 asian-paints-alchemy/model/whiteness_model.py          run, check, write outputs
  python -X utf8 asian-paints-alchemy/model/whiteness_model.py --dry    run and print, write nothing
Every optical result is computed here from first principles: multilayer Mie theory for single particles, the
Percus-Yevick hard-sphere structure factor for crowding, two-layer Kubelka-Munk with the Saunderson correction for films,
and CIE 1931 colorimetry under D65. Every assumption sits in A with an ID, base, bear and bull values and its basis.
Nothing in this file is a measurement of a real paint. Runtime is about 10 to 20 minutes."""
import sys, json, math, hashlib, io, pathlib, time
import numpy as np
from scipy.special import spherical_jn as _jn, spherical_yn as _yn
from scipy.optimize import brentq
DRY = "--dry" in sys.argv
try: HERE = pathlib.Path(__file__).resolve().parent
except NameError: HERE = pathlib.Path("asian-paints-alchemy/model").resolve()
T0 = time.time()
def log(*a): print(*a, "| t", round(time.time() - T0), "s", flush=True)

# ---------- spectral grid and CIE data: D65 relative SPD and CIE 1931 2 degree observer, 380 to 720 nm at 10 nm ----------
LAM = np.arange(380, 721, 10).astype(float)
D65 = np.array([49.98,54.65,82.75,91.49,93.43,86.68,104.86,117.01,117.81,114.86,115.92,108.81,109.35,107.80,104.79,107.69,104.41,104.05,
                100.00,96.33,95.79,88.69,90.01,89.60,87.70,83.29,83.70,80.03,80.21,82.28,78.28,69.72,71.61,74.35,61.60])
XB = np.array([0.001368,0.004243,0.014310,0.043510,0.134380,0.283900,0.348280,0.336200,0.290800,0.195360,0.095640,0.032010,0.004900,
               0.009300,0.063270,0.165500,0.290400,0.433450,0.594500,0.762100,0.916300,1.026300,1.062200,1.002600,0.854450,0.642400,
               0.447900,0.283500,0.164900,0.087400,0.046770,0.022700,0.011359,0.005790,0.002899])
YB = np.array([0.000039,0.000120,0.000396,0.001210,0.004000,0.011600,0.023000,0.038000,0.060000,0.090980,0.139020,0.208020,0.323000,
               0.503000,0.710000,0.862000,0.954000,0.994950,0.995000,0.952000,0.870000,0.757000,0.631000,0.503000,0.381000,0.265000,
               0.175000,0.107000,0.061000,0.032000,0.017000,0.008210,0.004102,0.002091,0.001047])
ZB = np.array([0.006450,0.020050,0.067850,0.207400,0.645600,1.385600,1.747060,1.772110,1.669200,1.287640,0.812950,0.465180,0.272000,
               0.158200,0.078250,0.042160,0.020300,0.008750,0.003900,0.002100,0.001650,0.001100,0.000800,0.000340,0.000190,0.000050,
               0.000020,0,0,0,0,0,0,0,0])

# ---------- assumptions: ID -> (base, bear, bull, unit, basis). Bear is the value least favourable to the proposal ----------
A = {
 "A01": (30.0, 30.0, 30.0, "um", "Dry film per coat of a premium interior emulsion; two coats; the same wet film and spreading rate for every system compared"),
 "A02": (0.18, 0.18, 0.18, "fraction", "TiO2 pigment volume concentration of the premium baseline film (about 20 percent TiO2 by weight in the can)"),
 "A03": (0.20, 0.20, 0.20, "fraction", "Coarse ground calcium carbonate (3 um) volume fraction in the baseline film"),
 "A04": (250.0, 250.0, 250.0, "nm", "Rutile pigment median crystal diameter, lognormal geometric standard deviation 1.35"),
 "A05": (0.35, 0.25, 0.45, "fraction", "Porosity of the air-network base coat; pigment coating layers on paper run 25 to 45 percent"),
 "A06": (0.25, 0.25, 0.25, "fraction", "Binder share of base-coat solids by volume (the base coat is formulated above its critical PVC)"),
 "A07": (0.10, 0.25, 0.0, "fraction", "Share of base-coat pore volume filled by the seal coat during application (infiltration)"),
 "A08": ("bruggeman", "binder-wetted", "air", "rule", "Optical surroundings of base-coat particles: Bruggeman mix of the air and binder that remain; bear halves the air share; bull is pure air"),
 "A09": (600.0, 600.0, 600.0, "nm", "Median diameter of the precipitated calcium carbonate in the base coat, lognormal geometric standard deviation 1.4"),
 "A10": (1.5e-4, 1.5e-4, 1.5e-4, "1/um", "Background absorption of binder and trace impurities per unit binder volume; sets baseline luminous reflectance at full hiding near 91 percent"),
 "A11": (0.2, 0.2, 0.2, "Y units", "Brightness tolerance: the proposal's luminous reflectance over white may sit at most this far below the baseline"),
 "A12": (0.998, 0.998, 0.998, "ratio", "Minimum two-coat contrast ratio over black (1 percent) and white (80 percent) substrates"),
 "A13": (250.0, 200.0, 300.0, "INR/kg", "Landed price of rutile TiO2 pigment in India"),
 "A14": (4.0, 4.0, 4.0, "g/cm3", "Density of pigment-grade rutile"),
 "A15": (25.0, 30.0, 20.0, "INR/kg", "Price of fine precipitated calcium carbonate (0.6 um)"),
 "A16": (8.0, 8.0, 8.0, "INR/kg", "Price of coarse ground calcium carbonate"),
 "A17": (190.0, 190.0, 190.0, "INR/kg", "Price of acrylic binder solids"),
 "A18": (3.0, 2.5, 3.5, "kg CO2e/kg", "Cradle-to-gate footprint of TiO2 pigment"),
 "A19": (2.7, 2.7, 2.7, "g/cm3", "Density of calcium carbonate"),
 "A20": (1.1, 1.1, 1.1, "g/cm3", "Density of acrylic binder solids"),
 "A21": (35500.0, 35500.0, 35500.0, "INR Cr", "Asian Paints consolidated revenue, FY26"),
 "A22": (0.563, 0.563, 0.563, "share", "Raw material and packaging cost as a share of revenue (one minus the 43.7 percent FY26 gross margin)"),
 "A23": (0.15, 0.10, 0.20, "share", "TiO2 share of the raw material bill"),
 "A24": (0.40, 0.30, 0.50, "share", "Share of TiO2 use that sits in interior emulsions and their primers (the addressable use)"),
 "A25": (0.40, 0.20, 0.60, "share", "Adoption across the addressable volume by year 5"),
 "A26": (2.5, 2.5, 2.5, "kg CO2e/kg", "Cradle-to-gate footprint of acrylic binder solids"),
 "A27": (0.6, 0.8, 0.4, "kg CO2e/kg", "Cradle-to-gate footprint of precipitated calcium carbonate"),
 "A28": (15.0, 20.0, 12.0, "um", "Minimum dry film of the seal coat, so that it forms a continuous, scrubbable skin over a porous base"),
 "A29": (0.50, 0.50, 0.50, "um/s", "Water evaporation rate of a fresh film, hot and dry interior (north India summer)"),
 "A30": (0.25, 0.25, 0.25, "um/s", "Water evaporation rate of a fresh film, composite climate interior"),
 "A31": (0.10, 0.10, 0.10, "um/s", "Water evaporation rate of a fresh film, warm and humid interior (coastal monsoon)"),
}
def av(i, s="base"): return A[i][{"base": 0, "bear": 1, "bull": 2}[s]]

# ---------- optical constants ----------
def n_rutile(l):
    """Devore (1951) ordinary and extraordinary dispersion, isotropic average (2 no + ne)/3; Urbach tail for the band edge"""
    u = l / 1000; no = math.sqrt(5.913 + 0.2441 / (u * u - 0.0803)); ne = math.sqrt(7.197 + 0.3322 / (u * u - 0.0843))
    E = 1239.84 / l; k = min(1.0, 3.3e-3 * math.exp((E - 3.05) / 0.03))
    return complex((2 * no + ne) / 3, k)
def n_binder(l):
    """acrylic binder approximated by PMMA (Sultanova et al. 2009 dispersion)"""
    u = l / 1000; return math.sqrt(1 + 1.1819 * u * u / (u * u - 0.011313))
CONST = {"calcite": 1.60, "ZnS": 2.37, "ZrO2": 2.17, "BaSO4": 1.64, "PS": 1.59, "organic": 1.96, "air": 1.0, "silica": 1.46}

# ---------- multilayer Mie theory ----------
TH = np.linspace(1e-4, np.pi, 361); MU = np.cos(TH); SINT = np.sin(TH)
def _psi(n, z): return z * _jn(n, z)
def _dpsi(n, z): return _jn(n, z) + z * _jn(n, z, derivative=True)
def _chi(n, z): return -z * _yn(n, z)
def _dchi(n, z): return -(_yn(n, z) + z * _yn(n, z, derivative=True))
def mie(radii, ms, nh, lam):
    """radii (nm): outer radius of each layer, inner to outer. ms: complex index of each layer. nh: host index.
    Returns Csca and Cabs (nm2), the differential scattering cross-section on TH (nm2/sr), and the host wavenumber."""
    k = 2 * np.pi * nh / lam; x = [k * r for r in radii]; m = [ml / nh for ml in ms] + [1.0]; xo = x[-1]
    N = int(xo + 4 * xo ** (1 / 3) + 2) + 2; ns = np.arange(1, N + 1); a = np.zeros(N, complex); b = np.zeros(N, complex)
    for i, n in enumerate(ns):
        for mode in (0, 1):
            Ac, Bc = 1 + 0j, 0j
            for l in range(len(x)):
                mi, mo, xl = m[l], m[l + 1], x[l]
                Ri = Ac * _psi(n, mi * xl) + Bc * _chi(n, mi * xl); dRi = Ac * _dpsi(n, mi * xl) + Bc * _dchi(n, mi * xl)
                v1, v2 = (Ri, dRi * mo / mi) if mode == 0 else (Ri * mo / mi, dRi)
                p, c, dp, dc = _psi(n, mo * xl), _chi(n, mo * xl), _dpsi(n, mo * xl), _dchi(n, mo * xl); det = p * dc - c * dp
                Ac, Bc = (v1 * dc - c * v2) / det, (p * v2 - dp * v1) / det
            (a if mode == 0 else b)[i] = Bc / (Bc + 1j * Ac)
    Cext = 2 * np.pi / k ** 2 * np.sum((2 * ns + 1) * np.real(a + b)); Csca = 2 * np.pi / k ** 2 * np.sum((2 * ns + 1) * (abs(a) ** 2 + abs(b) ** 2))
    S1 = np.zeros_like(TH, complex); S2 = np.zeros_like(TH, complex); pm1 = np.zeros_like(MU); pi_ = np.ones_like(MU)
    for n in ns:
        tau = n * MU * pi_ - (n + 1) * pm1; f = (2 * n + 1) / (n * (n + 1))
        S1 += f * (a[n - 1] * pi_ + b[n - 1] * tau); S2 += f * (a[n - 1] * tau + b[n - 1] * pi_)
        pm1, pi_ = pi_, ((2 * n + 1) * MU * pi_ - (n + 1) * pm1) / n
    return Csca, Cext - Csca, (abs(S1) ** 2 + abs(S2) ** 2) / (2 * k ** 2), k

# ---------- crowding: Percus-Yevick hard-sphere structure factor (Wertheim solution) ----------
def s_py(x, phi):
    if phi <= 0: return np.ones_like(x)
    al = (1 + 2 * phi) ** 2 / (1 - phi) ** 4; be = -6 * phi * (1 + phi / 2) ** 2 / (1 - phi) ** 4; ga = phi * al / 2
    nc = -24 * phi / x ** 6 * (al * x ** 3 * (np.sin(x) - x * np.cos(x)) + be * x ** 2 * (2 * x * np.sin(x) + (2 - x ** 2) * np.cos(x) - 2)
         + ga * (-x ** 4 * np.cos(x) + 4 * ((3 * x ** 2 - 6) * np.cos(x) + (x ** 3 - 6 * x) * np.sin(x) + 6)))
    return 1 / (1 - nc)

# ---------- particle species: geometry as a function of diameter d (nm) and wavelength l (nm) ----------
def solid(mat): return lambda d, l: ([d / 2], [n_rutile(l) if mat == "TiO2" else CONST[mat]])
SPEC = {
 "TiO2":    (solid("TiO2"), av("A04"), 1.35, "Rutile pigment, 250 nm"),
 "GCC3":    (solid("calcite"), 3000.0, 1.6, "Coarse ground calcium carbonate, 3 um"),
 "PCC":     (solid("calcite"), av("A09"), 1.4, "Fine precipitated calcium carbonate, 0.6 um"),
 "ZnS":     (solid("ZnS"), 300.0, 1.35, "Zinc sulfide, 300 nm"),
 "ZrO2":    (solid("ZrO2"), 300.0, 1.35, "Zirconia, 300 nm"),
 "BaSO4":   (solid("BaSO4"), 1000.0, 1.5, "Blanc fixe, 1 um"),
 "ORG":     (solid("organic"), 350.0, 1.35, "Organic crystal sphere, n 1.96 (isoxanthopterin proxy), 350 nm"),
 "HOLLOWP": (lambda d, l: ([0.275 * d, d / 2], [1.0, CONST["PS"]]), 400.0, 1.15, "Hollow polymer opacifier, 400 nm, void 55 percent of diameter"),
 "YOLK":    (lambda d, l: ([112.5, 262.5, 312.5], [n_rutile(l), 1.0, CONST["PS"]]), 625.0, 1.0001, "Rutile 225 nm inside a 150 nm air gap and a 50 nm polystyrene shell"),
 "HTIO2":   (lambda d, l: ([d / 2 - 40, d / 2], [1.0, n_rutile(l)]), 350.0, 1.15, "Hollow rutile sphere, 350 nm, 40 nm wall"),
}
TIO2_SHARE = {"TiO2": 1.0, "YOLK": (112.5 / 312.5) ** 3, "HTIO2": 1 - ((175 - 40) / 175) ** 3}
GHX, GHW = np.polynomial.hermite.hermgauss(5); CACHE = {}
def species(key, lam, nh):
    ck = (key, lam, round(nh, 4))
    if ck in CACHE: return CACHE[ck]
    geo, dg, sg, _ = SPEC[key]; dv = np.zeros_like(TH); ca = 0.0; vt = 0.0
    for xg, wg in zip(GHX, GHW):
        d = dg * math.exp(math.sqrt(2) * math.log(sg) * xg); w = wg / math.sqrt(math.pi); radii, ms = geo(d, lam)
        Cs, Ca, dcs, k = mie(radii, ms, nh, lam); v = 4 / 3 * math.pi * radii[-1] ** 3; dv += w * dcs; ca += w * Ca; vt += w * v
    CACHE[ck] = (dv / vt, ca / vt, 2 * np.pi * nh / lam, 2 * geo(dg, lam)[0][-1]); return CACHE[ck]
def mu_tr_a(key, phi, lam, nh):
    """transport scattering and absorption coefficients (1/um) of one species at volume fraction phi, crowding included"""
    dv, cav, k, dg = species(key, lam, nh); Sq = s_py(2 * k * np.sin(TH / 2) * dg, phi)
    return phi * np.trapezoid(dv * Sq * (1 - MU) * 2 * np.pi * SINT, TH) * 1e3, phi * cav * 1e3
def per_volume(key, nh, lams=None):
    """visible-averaged dilute transport scattering per unit particle volume (1/um)"""
    lams = LAM[2:33] if lams is None else lams
    return float(np.mean([mu_tr_a(key, 1e-4, l, nh(l) if callable(nh) else nh)[0] / 1e-4 for l in lams]))

# ---------- film optics ----------
def coat(comp, host, phib, X, alpha=None, lams=None):
    alpha = av("A10") if alpha is None else alpha; lams = LAM if lams is None else lams; S, K = [], []
    for l in lams:
        nh = host(l) if callable(host) else host; mt = 0.0; ma = alpha * phib
        for key, phi in comp.items():
            if phi > 1e-9: t, a_ = mu_tr_a(key, phi, l, nh); mt += t; ma += a_
        S.append(max(0.75 * mt - 0.25 * ma, 1e-6)); K.append(max(2 * ma, 1e-9))
    return np.array(S), np.array(K), X
def km(S, K, X, Rg):
    a = 1 + K / S; b = np.sqrt(a * a - 1); c = 1 / np.tanh(b * S * X); return (1 - Rg * (a - b * c)) / (a - Rg + b * c)
def saunderson(R, k1=0.04, k2=0.60): return (1 - k1) * (1 - k2) * R / (1 - k2 * R)
def xyz(R): kn = 100 / np.sum(D65 * YB); return kn * np.sum(D65 * XB * R), kn * np.sum(D65 * YB * R), kn * np.sum(D65 * ZB * R)
WN = xyz(np.ones_like(LAM))
def lab(X, Y, Z):
    f = lambda t: t ** (1 / 3) if t > (6 / 29) ** 3 else t / (3 * (6 / 29) ** 2) + 4 / 29
    return 116 * f(Y / WN[1]) - 16, 500 * (f(X / WN[0]) - f(Y / WN[1])), 200 * (f(Y / WN[1]) - f(Z / WN[2]))
def stack(layers, Rg):
    R = np.full(len(layers[0][0]), Rg)
    for (S, K, X) in reversed(layers): R = km(S, K, X, R)
    return saunderson(R)
def judge(layers):
    Rb = stack(layers, 0.01); Rw = stack(layers, 0.80); Xw, Yw, Zw = xyz(Rw); L, a_, b_ = lab(Xw, Yw, Zw)
    return {"CR": float(xyz(Rb)[1] / Yw), "Y": float(Yw), "L": float(L), "b": float(b_), "Rw": [float(v) for v in Rw]}
def bruggeman(f_air, nb=1.49):
    g = lambda e: f_air * (1 - e) / (1 + 2 * e) + (1 - f_air) * (nb * nb - e) / (nb * nb + 2 * e)
    return math.sqrt(brentq(g, 1.0, nb * nb))
def maxwell_garnett(em, ei, f): return em * (ei + 2 * em + 2 * f * (ei - em)) / (ei + 2 * em - f * (ei - em))

# ---------- the premium baseline ----------
DC = av("A01")
def base_coat(phiT, extra=None, host=n_binder):
    comp = {"TiO2": phiT, "GCC3": av("A03")}; comp.update(extra or {})
    return coat(comp, host, max(0.0, 1 - sum(comp.values())), DC)
BASE = judge([base_coat(av("A02"))] * 2)          # the premium white: it sets the brightness target
def ok(r, s="base"): return r["Y"] >= BASE["Y"] - av("A11", s) and r["CR"] >= av("A12", s)
# Fair reference: the least TiO2 the conventional architecture needs to meet the same targets (it has a little slack at 18 percent)
_lo, _hi = 0.05, av("A02")
for _ in range(16):
    _m = (_lo + _hi) / 2
    if ok(judge([base_coat(_m)] * 2)): _hi = _m
    else: _lo = _m
PHI_REF = _hi; REF = judge([base_coat(PHI_REF)] * 2); BASE_TIO2_UM = PHI_REF * 2 * DC

# ---------- the proposal: air-network base coat under a thin seal coat ----------
def proposal(vT1, vT2, X2f, s="base", over=None, base_species="TiO2"):
    o = dict(P=av("A05", s), vB=av("A06", s), finf=av("A07", s), host=av("A08", s)); o.update(over or {})
    P, vB, finf = o["P"], o["vB"], o["finf"]
    X1 = DC / (1 - P); Pe = P * (1 - finf); phiB1 = (1 - P) * vB + P * finf; fair = Pe / (Pe + phiB1)
    nh = 1.0 if o["host"] == "air" else bruggeman(fair * (0.5 if o["host"] == "binder-wetted" else 1.0))
    L1 = coat({base_species: (1 - P) * vT1, "PCC": (1 - P) * (1 - vB - vT1)}, nh, phiB1, X1)
    X2 = DC * X2f - P * finf * X1
    L2 = coat({"TiO2": vT2, "GCC3": 0.10}, n_binder, 1 - vT2 - 0.10, X2)
    r = judge([L2, L1])
    r.update(tio2_um=(1 - P) * vT1 * X1 * (base_species == "TiO2") + vT2 * X2, nh=nh, X1=X1, X2=X2, vT1=vT1, vT2=vT2, X2f=X2f, P=P,
             binder_um=phiB1 * X1 + (1 - vT2 - 0.10) * X2, pcc_um=(1 - P) * (1 - vB - vT1) * X1, gcc_um=0.10 * X2,
             base_TiO2_pvc=(1 - P) * vT1, CR_base_coat_alone=judge([L1])["CR"])
    return r
VT2 = [round(0.02 * i, 2) for i in range(0, 10)]; X2F = [0.6, 0.7, 0.8, 1.0]
def optimise(s="base", over=None, tol=None):
    """least TiO2 per m2 such that brightness and contrast ratio match the baseline and the seal coat is thick enough"""
    best = None; o = dict(over or {}); xmin = o.pop("X2min", av("A28", s))
    for X2f in X2F:
        for vT2 in VT2:
            f = lambda v: proposal(v, vT2, X2f, s, o)
            hi = f(0.6)
            if not ok(hi, s) or hi["X2"] < xmin: continue
            lo_v, hi_v = 0.0, 0.6
            if ok(f(0.0), s): hi_v = 0.0
            else:
                for _ in range(14):
                    mid = (lo_v + hi_v) / 2
                    if ok(f(mid), s): hi_v = mid
                    else: lo_v = mid
            r = f(hi_v)
            if best is None or r["tio2_um"] < best["tio2_um"] - 1e-9: best = r
    return best

# ---------- formatting helpers (Indian digit grouping, no dashes) ----------
def inr_group(n):
    s = str(int(round(abs(n)))); 
    if len(s) > 3:
        head, tail = s[:-3], s[-3:]; parts = []
        while len(head) > 2: parts.insert(0, head[-2:]); head = head[:-2]
        if head: parts.insert(0, head)
        s = ",".join(parts) + "," + tail
    return ("−" if n < 0 else "") + s
def f1(x): return ("%.1f" % x).replace("-", "−")
def f2(x): return ("%.2f" % x).replace("-", "−")
def pct(x, d=0): return (("%." + str(d) + "f") % (100 * x)).replace("-", "−") + "%"
def g_m2(um, rho): return um * rho            # 1 um over 1 m2 is 1 cm3

# ---------- runs: baseline and the three scenarios ----------
log("baseline", {k: round(v, 4) for k, v in BASE.items() if k != "Rw"})
SCEN = {s: optimise(s) for s in ("bear", "base", "bull")}
for s, r in SCEN.items():
    r["saving"] = 1 - r["tio2_um"] / BASE_TIO2_UM
    log(s, "TiO2 um %.3f saving %.1f%% vT1 %.3f vT2 %.2f X2f %.1f nh %.3f" % (r["tio2_um"], 100 * r["saving"], r["vT1"], r["vT2"], r["X2f"], r["nh"]))
PB = SCEN["base"]

# ---------- physics tables ----------
VIS = LAM[2:33:2]
HOSTS = [1.00, 1.10, 1.20, 1.33, 1.40, 1.49, 1.55]
T4 = [(h, per_volume("TiO2", h, VIS)) for h in HOSTS]
ref149 = dict(T4)[1.49]; T4 = [(h, v, v / ref149) for h, v in T4]
log("T4 host index table done")
def halo(t, nh=1.49):
    vals = []
    for l in VIS:
        Cs, Ca, dcs, k = mie([112.5, 112.5 + t], [n_rutile(l), 1.0], nh, l); g = np.trapezoid(dcs * MU * 2 * np.pi * SINT, TH) / np.trapezoid(dcs * 2 * np.pi * SINT, TH)
        vals.append(Cs * (1 - g))
    c = float(np.mean(vals)); vti = 4 / 3 * math.pi * 112.5 ** 3; vp = 4 / 3 * math.pi * (112.5 + t) ** 3
    return c / vti * 1e3, c / vp * 1e3
T5 = [(t,) + halo(t) for t in (0, 20, 40, 80, 150, 250)]
log("T5 halo table done")
def crowd(phi, nh):
    return float(np.mean([mu_tr_a("TiO2", phi, l, nh)[0] for l in VIS]))
d_bind = per_volume("TiO2", 1.49, VIS); d_air = per_volume("TiO2", 1.0, VIS)
T6 = [(phi, crowd(phi, 1.49), crowd(phi, 1.49) / phi / d_bind, crowd(phi, 1.0) if phi <= 0.2 else None,
       (crowd(phi, 1.0) / phi / d_air) if phi <= 0.2 else None) for phi in (0.05, 0.10, 0.15, 0.18, 0.20, 0.25)]
log("T6 crowding table done")

# ---------- architecture screen: two coats of one composition each, TiO2 cut until brightness or contrast fails ----------
EPS_HS = 1.580   # quasi-static permittivity of a hollow silica nanosphere (25 nm outer, 19 nm inner radius)
def host_nanoair(l): return math.sqrt(maxwell_garnett(n_binder(l) ** 2, EPS_HS, 0.30))
def solve_level(make, hi):
    """make(level) -> (judge result, TiO2 um). Smallest level meeting the baseline, or None"""
    r_hi, t_hi = make(hi)
    if not ok(r_hi): return None, r_hi, t_hi
    lo, h = 0.0, hi
    if ok(make(0.0)[0]): h = 0.0
    else:
        for _ in range(14):
            mid = (lo + h) / 2
            if ok(make(mid)[0]): h = mid
            else: lo = mid
    r, t = make(h); return h, r, t
def mk_tio2(extra=None, host=n_binder):
    def f(phi): c = base_coat(phi, extra, host); return judge([c, c]), phi * 2 * DC
    return f
def mk_alt(key, share=0.0, gcc=True):
    def f(phi):
        comp = {key: phi}
        if gcc: comp["GCC3"] = av("A03")
        c = coat(comp, n_binder, max(0.0, 1 - sum(comp.values())), DC); return judge([c, c]), phi * share * 2 * DC
    return f
SCREEN_DEF = [
 ("S01", "Rutile in binder (premium baseline)", "TiO2", mk_tio2(), 0.30, "Reference"),
 ("S02", "Rutile plus hollow polymer opacifier at 15 percent", "HOLLOWP", mk_tio2({"HOLLOWP": 0.15}), 0.30, "Commercial today"),
 ("S03", "Rutile in a binder full of closed nano-air (30 percent)", "TiO2", mk_tio2(None, host_nanoair), 0.30, "Lower-index matrix"),
 ("S04", "Yolk-shell: rutile in an air gap inside a shell", "YOLK", mk_alt("YOLK", TIO2_SHARE["YOLK"]), 0.50, "Particle-level air"),
 ("S05", "Hollow rutile spheres", "HTIO2", mk_alt("HTIO2", TIO2_SHARE["HTIO2"]), 0.40, "Particle-level air"),
 ("S06", "Zinc sulfide, no TiO2", "ZnS", mk_alt("ZnS"), 0.30, "Substitute pigment"),
 ("S07", "Zirconia, no TiO2", "ZrO2", mk_alt("ZrO2"), 0.30, "Substitute pigment"),
 ("S08", "Barium sulfate at high loading, no TiO2", "BaSO4", mk_alt("BaSO4", 0.0, False), 0.55, "Substitute pigment"),
 ("S09", "Organic crystal spheres, n 1.96, no TiO2", "ORG", mk_alt("ORG"), 0.40, "Nature-inspired"),
]
SCREEN = []
for sid, name, key, make, hi, family in SCREEN_DEF:
    lvl, r, t = solve_level(make, hi)
    host = host_nanoair if sid == "S03" else n_binder
    SCREEN.append(dict(id=sid, name=name, family=family, per_vol=per_volume(key, host, VIS), feasible=lvl is not None,
                       level=lvl if lvl is not None else hi, tio2_um=t if lvl is not None else None, Y=r["Y"], CR=r["CR"]))
    log("screen", sid, "feasible" if lvl is not None else "not reachable", round(r["Y"], 2))
r10 = PB
SCREEN.append(dict(id="S10", name="Air network under a seal coat (this proposal, base case)", family="Film architecture", per_vol=per_volume("TiO2", PB["nh"], VIS),
                   feasible=True, level=PB["vT1"], tio2_um=PB["tio2_um"], Y=PB["Y"], CR=PB["CR"]))
r11 = proposal(0.0, 0.0, 0.6)
SCREEN.append(dict(id="S11", name="Air network with no TiO2 in either coat", family="Film architecture", per_vol=per_volume("PCC", PB["nh"], VIS),
                   feasible=ok(r11), level=0.0, tio2_um=0.0 if ok(r11) else None, Y=r11["Y"], CR=r11["CR"]))
def mk12(v):
    r = proposal(v, 0.12, 0.6, "base", None, "ORG"); return r, r["tio2_um"]
lvl12, r12, t12 = solve_level(mk12, 0.6)
SCREEN.append(dict(id="S12", name="Air network with organic crystals in place of base-coat TiO2 (horizon 3)", family="Film architecture",
                   per_vol=per_volume("ORG", PB["nh"], VIS), feasible=lvl12 is not None, level=lvl12 if lvl12 is not None else 0.6,
                   tio2_um=t12 if lvl12 is not None else None, Y=r12["Y"], CR=r12["CR"]))
for row in SCREEN:
    row["saving"] = None if row["tio2_um"] is None else 1 - row["tio2_um"] / BASE_TIO2_UM
    if row["id"] == "S01": row["verdict"] = "Reference"
    elif not row["feasible"]: row["verdict"] = "Discard: cannot match baseline brightness at maximum loading"
    elif row["saving"] < 0.30: row["verdict"] = "Discard: saves less than 30 percent of TiO2"
    elif row["id"] == "S12": row["verdict"] = "Retain for horizon 3"
    else: row["verdict"] = "Retain"
log("screen done")

# ---------- hiding curves: one coat, contrast ratio against grams of TiO2 per m2 ----------
H_BASE = []
for phi in (0.06, 0.09, 0.12, 0.15, 0.18, 0.21, 0.24):
    c = base_coat(phi); H_BASE.append((g_m2(phi * DC, av("A14")), judge([c])["CR"]))
H_AIR = []
P0 = av("A05"); X10 = DC / (1 - P0); Pe0 = P0 * (1 - av("A07")); phiB0 = (1 - P0) * av("A06") + P0 * av("A07")
for v in (0.0, 0.05, 0.10, 0.15, 0.20, 0.25, 0.30):
    L1 = coat({"TiO2": (1 - P0) * v, "PCC": (1 - P0) * (1 - av("A06") - v)}, PB["nh"], phiB0, X10)
    H_AIR.append((g_m2((1 - P0) * v * X10, av("A14")), judge([L1])["CR"]))
log("hiding curves done")

# ---------- tornado on the base-case saving ----------
if "PCC400" not in SPEC:
    SPEC["PCC400"] = (solid("calcite"), 400.0, 1.4, "PCC 0.4 um"); SPEC["PCC800"] = (solid("calcite"), 800.0, 1.4, "PCC 0.8 um")
def opt_pcc(key):
    keep = SPEC["PCC"]; SPEC["PCC"] = SPEC[key]; CACHE_keys = [k for k in CACHE if k[0] == "PCC"]
    saved = {k: CACHE.pop(k) for k in CACHE_keys}
    try: r = optimise("base")
    finally:
        for k in [k for k in CACHE if k[0] == "PCC"]: CACHE.pop(k)
        CACHE.update(saved); SPEC["PCC"] = keep
    return r
TORN_DEF = [
 ("A05", "Base-coat porosity", "0.25", "0.45", lambda: optimise("base", {"P": 0.25}), lambda: optimise("base", {"P": 0.45})),
 ("A07", "Seal-coat infiltration into pores", "25 percent", "none", lambda: optimise("base", {"finf": 0.25}), lambda: optimise("base", {"finf": 0.0})),
 ("A08", "What surrounds base-coat particles", "binder-wetted", "pure air", lambda: optimise("base", {"host": "binder-wetted"}), lambda: optimise("base", {"host": "air"})),
 ("A09", "Base-coat extender size", "0.8 um", "0.4 um", lambda: opt_pcc("PCC800"), lambda: opt_pcc("PCC400")),
 ("A28", "Minimum seal-coat film", "20 um", "12 um", lambda: optimise("base", {"X2min": 20.0}), lambda: optimise("base", {"X2min": 12.0})),
]
TORN = []
for aid, label, lo_l, hi_l, f_lo, f_hi in TORN_DEF:
    r_lo, r_hi = f_lo(), f_hi()
    s_lo = None if r_lo is None else 1 - r_lo["tio2_um"] / BASE_TIO2_UM; s_hi = None if r_hi is None else 1 - r_hi["tio2_um"] / BASE_TIO2_UM
    TORN.append(dict(id=aid, label=label, low_label=lo_l, high_label=hi_l, low=s_lo, high=s_hi, swing=abs((s_hi or 0) - (s_lo or 0))))
    log("tornado", aid, s_lo, s_hi)
TORN.sort(key=lambda d: -d["swing"])

# ---------- per m2 economics and footprint (two coats) ----------
def materials(tio2_um, binder_um, pcc_um, gcc_um, s):
    g = dict(TiO2=g_m2(tio2_um, av("A14")), binder=g_m2(binder_um, av("A20")), PCC=g_m2(pcc_um, av("A19")), GCC=g_m2(gcc_um, av("A19")))
    inr = g["TiO2"] / 1000 * av("A13", s) + g["binder"] / 1000 * av("A17", s) + g["PCC"] / 1000 * av("A15", s) + g["GCC"] / 1000 * av("A16", s)
    co2 = (g["TiO2"] * av("A18", s) + g["binder"] * av("A26", s) + g["PCC"] * av("A27", s) + g["GCC"] * 0.03) / 1000
    return g, inr, co2
ECON = {}
for s in ("bear", "base", "bull"):
    gb, ib, cb = materials(BASE_TIO2_UM, 2 * DC * (1 - PHI_REF - av("A03")), 0.0, 2 * DC * av("A03"), s)
    r = SCEN[s]; gp, ip, cp = materials(r["tio2_um"], r["binder_um"], r["pcc_um"], r["gcc_um"], s)
    ECON[s] = dict(base_g=gb, prop_g=gp, base_inr=ib, prop_inr=ip, base_co2=cb, prop_co2=cp)

# ---------- Asian Paints scale: TiO2 bill, addressable share, adoption ----------
AP = {}
for s in ("bear", "base", "bull"):
    spend = av("A21") * av("A22") * av("A23", s)                         # INR Cr a year of TiO2
    tonnes = spend * 1e7 / av("A13", s) / 1000                            # tonnes a year
    addressed_t = tonnes * av("A24", s) * av("A25", s)
    m2 = addressed_t * 1e6 / ECON[s]["base_g"]["TiO2"]                    # m2 a year painted with the new system
    e = ECON[s]
    AP[s] = dict(tio2_spend_cr=spend, tio2_t=tonnes, m2_mn=m2 / 1e6, tio2_avoided_t=addressed_t * SCEN[s]["saving"],
                 tio2_saving_cr=addressed_t * SCEN[s]["saving"] * 1000 * av("A13", s) / 1e7,
                 net_saving_cr=m2 * (e["base_inr"] - e["prop_inr"]) / 1e7, co2_kt=m2 * (e["base_co2"] - e["prop_co2"]) / 1e6)

# ---------- spectral reflectance over white, and a near-infrared indicator ----------
SPECTRAL = [(int(l), BASE["Rw"][i], PB["Rw"][i]) for i, l in enumerate(LAM) if int(l) % 20 == 0]
NIRL = np.array([800.0, 1000.0, 1200.0, 1500.0])
def nir_pair():
    cb = coat({"TiO2": av("A02"), "GCC3": av("A03")}, n_binder, 1 - av("A02") - av("A03"), DC, lams=NIRL)
    rb = stack([cb, cb], 0.25)
    L1 = coat({"TiO2": (1 - P0) * PB["vT1"], "PCC": (1 - P0) * (1 - av("A06") - PB["vT1"])}, PB["nh"], phiB0, PB["X1"], lams=NIRL)
    L2 = coat({"TiO2": PB["vT2"], "GCC3": 0.10}, n_binder, 1 - PB["vT2"] - 0.10, PB["X2"], lams=NIRL)
    rp = stack([L2, L1], 0.25)
    return [(int(l), float(rb[i]), float(rp[i])) for i, l in enumerate(NIRL)]
NIR = nir_pair()

# ---------- drying Peclet numbers for the horizon 2 one-coat version ----------
kT = 1.380649e-23 * 303.0; ETA = 0.80e-3; HWET = 80e-6
def peclet(r_m, E_um_s): return HWET * E_um_s * 1e-6 / (kT / (6 * math.pi * ETA * r_m))
PECLET = [(name, av(aid), peclet(40e-9, av(aid)), peclet(300e-9, av(aid))) for name, aid in
          (("Hot and dry", "A29"), ("Composite", "A30"), ("Warm and humid", "A31"))]

# ---------- checks ----------
CHECKS = []
def check(name, cond): CHECKS.append((name, bool(cond))); print(("PASS " if cond else "FAIL ") + name)
lam0 = 632.8; r0 = 5.213 * lam0 / (2 * math.pi)
Cs, Ca, _, k0 = mie([r0], [1.55], 1.0, lam0); q0 = Cs / (math.pi * r0 * r0)
check("C1 Mie benchmark m 1.55, x 5.213: Qsca within 0.1 percent of 3.10543 (Bohren and Huffman)", abs(q0 - 3.10543) / 3.10543 < 1e-3)
Cs2, _, _, _ = mie([0.6 * r0, r0], [1.55, 1.55], 1.0, lam0)
check("C2 a two-layer sphere with equal layers equals the homogeneous sphere", abs(Cs2 - Cs) / Cs < 1e-9)
_, Ca3, _, _ = mie([200.0], [complex(1.5, 0.1)], 1.0, 550.0)
check("C3 an absorbing sphere has positive absorption", Ca3 > 0)
xs = np.array([0.15]); phi = 0.2
check("C4 Percus-Yevick S(q to 0) equals the compressibility limit within 3 percent", abs(s_py(xs, phi)[0] / ((1 - phi) ** 4 / (1 + 2 * phi) ** 2) - 1) < 0.03)
S_, K_ = 1.0, 0.01; a_ = 1 + K_ / S_; Rinf = a_ - math.sqrt(a_ * a_ - 1)
check("C5 Kubelka-Munk thick-film limit equals R infinity", abs(km(np.array([S_]), np.array([K_]), 1e4, np.array([0.0]))[0] - Rinf) < 1e-9)
check("C6 baseline is a plausible premium white (CR 0.995 to 0.9995, Y 88 to 93, b* 0.5 to 3)", 0.995 <= BASE["CR"] <= 0.9995 and 88 <= BASE["Y"] <= 93 and 0.5 <= BASE["b"] <= 3)
check("C7 base-case proposal meets brightness, contrast ratio and seal thickness", ok(PB) and PB["X2"] >= av("A28") - 1e-9)
check("C8 scenario order bear < base < bull", SCEN["bear"]["saving"] < SCEN["base"]["saving"] < SCEN["bull"]["saving"])
check("C9 contrast ratio rises with TiO2 in the baseline coat", all(H_BASE[i][1] < H_BASE[i + 1][1] for i in range(len(H_BASE) - 1)))
check("C10 every reflectance lies between 0 and 1", all(0 <= v <= 1 for v in BASE["Rw"] + PB["Rw"]))
check("C11 rutile scatters more per unit volume in air than in binder", T4[0][2] > 1.5)
check("C12 the screen's baseline row reproduces the fair reference within 1 percent of TiO2", abs(SCREEN[0]["tio2_um"] - BASE_TIO2_UM) / BASE_TIO2_UM < 0.01)
check("C13 the fair reference needs between 85 and 100 percent of the premium's TiO2", 0.85 <= PHI_REF / av("A02") <= 1.0)
NCHK = sum(1 for _, c in CHECKS if c)

# ---------- outputs ----------
def rnd(x, d=4):
    if isinstance(x, float): return round(x, d)
    if isinstance(x, dict): return {k: rnd(v, d) for k, v in x.items() if k != "Rw"}
    if isinstance(x, (list, tuple)): return [rnd(v, d) for v in x]
    return x
OUT = dict(assumptions={k: list(v) for k, v in A.items()}, baseline=rnd(BASE), reference=dict(phi=rnd(PHI_REF), **rnd(REF)), baseline_tio2_um=rnd(BASE_TIO2_UM),
           scenarios={s: rnd(r) for s, r in SCEN.items()}, host_index=rnd(T4), halo=rnd(T5), crowding=rnd(T6), screen=rnd(SCREEN),
           hiding=dict(baseline=rnd(H_BASE), air_network=rnd(H_AIR)), tornado=rnd(TORN), economics=rnd(ECON), ap_scale=rnd(AP),
           spectral=rnd(SPECTRAL), nir=rnd(NIR), peclet=rnd(PECLET), checks=[[n, c] for n, c in CHECKS])
HASH = hashlib.sha1(json.dumps(OUT, sort_keys=True).encode()).hexdigest()[:10]; OUT["hash"] = HASH
print("CHECKS %d/%d" % (NCHK, len(CHECKS)), "HASH", HASH)
print("FINDINGS", [round(100 * SCEN[s]["saving"], 1) for s in ("bear", "base", "bull")], round(AP["base"]["net_saving_cr"]), round(ECON["base"]["base_inr"], 2), round(ECON["base"]["prop_inr"], 2))

# ---------- values for the deck (every number on a slide comes from here) ----------
E, Eb, Eu = ECON["base"], ECON["bear"], ECON["bull"]
def gfmt(x): return f1(x) + " g"
def cut(a, b): return pct(1 - b / a)
V = dict(
 hash=HASH, checks="%d of %d" % (NCHK, len(CHECKS)),
 sav=pct(PB["saving"]), sav_bear=pct(SCEN["bear"]["saving"]), sav_bull=pct(SCEN["bull"]["saving"]),
 prem_pvc=pct(av("A02")), ref_pvc=pct(PHI_REF, 1),
 g_ref=gfmt(E["base_g"]["TiO2"]), g_prop=gfmt(E["prop_g"]["TiO2"]), g_cut=gfmt(E["base_g"]["TiO2"] - E["prop_g"]["TiO2"]),
 g_prop_bear=gfmt(Eb["prop_g"]["TiO2"]), g_prop_bull=gfmt(Eu["prop_g"]["TiO2"]),
 binder_ref=gfmt(E["base_g"]["binder"]), binder_prop=gfmt(E["prop_g"]["binder"]), binder_cut=cut(E["base_g"]["binder"], E["prop_g"]["binder"]),
 pcc_g=gfmt(E["prop_g"]["PCC"]),
 inr_ref="₹" + f1(E["base_inr"]), inr_prop="₹" + f1(E["prop_inr"]), inr_cut=cut(E["base_inr"], E["prop_inr"]),
 inr_cut_bear=cut(Eb["base_inr"], Eb["prop_inr"]), inr_cut_bull=cut(Eu["base_inr"], Eu["prop_inr"]),
 co2_ref=f2(E["base_co2"] * 1000 / 1000) + " kg", co2_prop=f2(E["prop_co2"]) + " kg", co2_cut=cut(E["base_co2"], E["prop_co2"]),
 CR_ref="%.4f" % REF["CR"], Y_ref=f1(REF["Y"]), L_ref=f1(REF["L"]), b_ref=f1(REF["b"]),
 CR_prop="%.4f" % PB["CR"], Y_prop=f1(PB["Y"]), L_prop=f1(PB["L"]), b_prop=f1(PB["b"]),
 CR_min="%.3f" % av("A12"), Y_target=f1(BASE["Y"] - av("A11")),
 P=pct(PB["P"]), X1=f1(PB["X1"]) + " µm", X2=f1(PB["X2"]) + " µm", dc="%d µm" % DC,
 base_pvc=pct(PB["base_TiO2_pvc"], 1), seal_pvc=pct(PB["vT2"]), nh="%.2f" % PB["nh"],
 cr_base_alone="%.3f" % PB["CR_base_coat_alone"],
 air_gain="%.1fx" % T4[0][2], host_rows=[["%.2f" % h, f1(v), "%.2fx" % r] for h, v, r in T4],
 halo_rows=[["%d nm" % t, f1(a), f1(b)] for t, a, b in T5],
 eff_bind_18=pct([r for r in T6 if abs(r[0] - 0.18) < 1e-9][0][2]), eff_air_18=pct([r for r in T6 if abs(r[0] - 0.18) < 1e-9][0][4]),
 crowd_rows=[[pct(p), f2(a), pct(b), "" if c is None else f2(c), "" if d is None else pct(d)] for p, a, b, c, d in T6],
 screen_rows=[[r["id"], r["name"], r["family"], f1(r["per_vol"]), ("not reached" if r["tio2_um"] is None else gfmt(g_m2(r["tio2_um"], av("A14")))),
               ("n/a" if r["saving"] is None else pct(r["saving"])), f1(r["Y"]), "%.3f" % r["CR"], r["verdict"]] for r in SCREEN],
 hiding_base=[[round(g, 1), round(c, 4)] for g, c in H_BASE], hiding_air=[[round(g, 1), round(c, 4)] for g, c in H_AIR],
 tornado_rows=[[t["label"], t["low_label"], t["high_label"], pct(t["low"]) if t["low"] is not None else "n/a", pct(t["high"]) if t["high"] is not None else "n/a"] for t in TORN],
 ap={s: dict(spend="₹" + inr_group(AP[s]["tio2_spend_cr"]) + " Cr", tonnes=inr_group(AP[s]["tio2_t"]) + " t", m2=inr_group(AP[s]["m2_mn"]) + " mn m²",
             avoided=inr_group(AP[s]["tio2_avoided_t"]) + " t", tio2_cr="₹" + inr_group(AP[s]["tio2_saving_cr"]) + " Cr",
             net_cr="₹" + inr_group(AP[s]["net_saving_cr"]) + " Cr", co2_kt=f1(AP[s]["co2_kt"]) + " kt") for s in AP},
 econ={s: dict(ref="₹" + f1(ECON[s]["base_inr"]), prop="₹" + f1(ECON[s]["prop_inr"]), cut=cut(ECON[s]["base_inr"], ECON[s]["prop_inr"]),
               g_ref=gfmt(ECON[s]["base_g"]["TiO2"]), g_prop=gfmt(ECON[s]["prop_g"]["TiO2"])) for s in ECON},
 scen={s: dict(sav=pct(SCEN[s]["saving"]), base_pvc=pct(SCEN[s]["base_TiO2_pvc"], 1), seal_pvc=pct(SCEN[s]["vT2"]), X2=f1(SCEN[s]["X2"]),
               nh="%.2f" % SCEN[s]["nh"], P=pct(SCEN[s]["P"])) for s in SCEN},
 nir_rows=[["%d nm" % l, pct(b, 1), pct(p, 1)] for l, b, p in NIR],
 peclet_rows=[[n, f2(e), f1(a), f1(b)] for n, e, a, b in PECLET],
 spectral=[[l, round(b, 4), round(p, 4)] for l, b, p in SPECTRAL],
 org_sav=pct(SCREEN[-1]["saving"]) if SCREEN[-1]["saving"] is not None else "n/a",
 cost_ref={k: round(v, 2) for k, v in dict(TiO2=E["base_g"]["TiO2"] / 1000 * av("A13"), binder=E["base_g"]["binder"] / 1000 * av("A17"),
           PCC=E["base_g"]["PCC"] / 1000 * av("A15"), GCC=E["base_g"]["GCC"] / 1000 * av("A16")).items()},
 cost_prop={k: round(v, 2) for k, v in dict(TiO2=E["prop_g"]["TiO2"] / 1000 * av("A13"), binder=E["prop_g"]["binder"] / 1000 * av("A17"),
           PCC=E["prop_g"]["PCC"] / 1000 * av("A15"), GCC=E["prop_g"]["GCC"] / 1000 * av("A16")).items()},
 g_tio2_ref=round(E["base_g"]["TiO2"], 1), g_tio2_prop=round(E["prop_g"]["TiO2"], 1),
 sav_num=round(100 * PB["saving"]), sav_bear_num=round(100 * SCEN["bear"]["saving"]), sav_bull_num=round(100 * SCEN["bull"]["saving"]),
 tornado_num=[[t["label"], t["low_label"], t["high_label"], round(100 * (t["low"] or 0)), round(100 * (t["high"] or 0))] for t in TORN],
 screen_num=[[r["id"], None if r["saving"] is None else round(100 * r["saving"]), round(r["Y"], 1)] for r in SCREEN],
 host_num=[[h, round(v, 2)] for h, v, _ in T4],
 crowd_num=[[round(100 * p), round(100 * b), None if d is None else round(100 * d)] for p, a, b, c, d in T6],
)

# ---------- tables for the research document (Appendix B) ----------
def table(head, rows): return "| " + " | ".join(head) + " |\n|" + "|".join("---" for _ in head) + "|\n" + "\n".join("| " + " | ".join(str(c) for c in r) + " |" for r in rows)
TT = ["# Model tables (generated by whiteness_model.py, do not edit by hand)", "",
 "Model hash `%s`, checks %s, run %s." % (HASH, V["checks"], time.strftime("%d %b %Y")), "",
 "## T1. Assumptions register", "", table(["ID", "Base", "Bear", "Bull", "Unit", "Basis"], [[k, v[0], v[1], v[2], v[3], v[4]] for k, v in A.items()]), "",
 "## T2. Optical constants used at three wavelengths", "",
 table(["Material", "450 nm", "550 nm", "650 nm", "Source of the dispersion"],
       [["Rutile TiO2 (isotropic average)"] + ["%.3f" % n_rutile(l).real for l in (450, 550, 650)] + ["Devore 1951, Urbach edge assumed"],
        ["Acrylic binder (PMMA)"] + ["%.3f" % n_binder(l) for l in (450, 550, 650)] + ["Sultanova et al. 2009"]] +
       [[k, CONST[k], CONST[k], CONST[k], "Constant, handbook value"] for k in CONST]), "",
 "## T3. Model checks", "", table(["Check", "Result"], [[n, "PASS" if c else "FAIL"] for n, c in CHECKS]), "",
 "## T4. Rutile scatters more per unit volume when the medium around it has a lower index", "",
 table(["Host index", "Transport scattering per unit TiO2 volume (1/µm)", "Ratio to binder (1.49)"], V["host_rows"]), "",
 "## T5. A thin air gap around rutile lowers its scattering; a thick one costs film volume", "",
 table(["Air gap around a 225 nm rutile core", "Per unit TiO2 volume (1/µm)", "Per unit particle volume (1/µm)"], V["halo_rows"]), "",
 "## T6. Crowding: scattering efficiency of rutile falls as its volume fraction rises", "",
 table(["TiO2 volume fraction", "In binder (1/µm)", "Efficiency in binder", "In air (1/µm)", "Efficiency in air"], V["crowd_rows"]), "",
 "## T7. The premium baseline and the fair reference", "",
 table(["Film", "TiO2 PVC", "Contrast ratio", "Y over white", "L*", "b*"],
       [["Premium white, two coats of 30 µm", pct(av("A02")), "%.4f" % BASE["CR"], f1(BASE["Y"]), f1(BASE["L"]), f2(BASE["b"])],
        ["Fair reference (least TiO2 meeting the same targets)", pct(PHI_REF, 1), "%.4f" % REF["CR"], f1(REF["Y"]), f1(REF["L"]), f2(REF["b"])]]), "",
 "## T8. Architecture screen", "",
 table(["ID", "Architecture", "Family", "Dilute scattering per unit volume (1/µm)", "TiO2 per m² to match", "Saving", "Y", "CR", "Verdict"], V["screen_rows"]), "",
 "## T9. The proposal by scenario", "",
 table(["Scenario", "Porosity", "Host index", "Base-coat TiO2 PVC", "Seal-coat TiO2 PVC", "Seal coat (µm)", "TiO2 saving"],
       [[s, V["scen"][s]["P"], V["scen"][s]["nh"], V["scen"][s]["base_pvc"], V["scen"][s]["seal_pvc"], V["scen"][s]["X2"], V["scen"][s]["sav"]] for s in ("bear", "base", "bull")]), "",
 "## T10. Spectral reflectance over white (base case)", "",
 table(["Wavelength (nm)", "Reference", "Proposal"], [[l, "%.3f" % b, "%.3f" % p] for l, b, p in SPECTRAL]), "",
 "## T11. Hiding of one coat against grams of TiO2 per m²", "",
 table(["Conventional coat: TiO2 g/m²", "Contrast ratio", "Air-network coat: TiO2 g/m²", "Contrast ratio"],
       [[a[0], "%.4f" % a[1], b[0], "%.4f" % b[1]] for a, b in zip(V["hiding_base"], V["hiding_air"])]), "",
 "## T12. Materials, cost and footprint per m² (two coats)", "",
 table(["Scenario", "TiO2 reference", "TiO2 proposal", "Materials reference", "Materials proposal", "Cost cut", "kg CO2e reference", "kg CO2e proposal"],
       [[s, V["econ"][s]["g_ref"], V["econ"][s]["g_prop"], V["econ"][s]["ref"], V["econ"][s]["prop"], V["econ"][s]["cut"], f2(ECON[s]["base_co2"]), f2(ECON[s]["prop_co2"])] for s in ECON]), "",
 "## T13. Asian Paints scale by year 5", "",
 table(["Scenario", "TiO2 bill", "TiO2 tonnes", "Area on the new system", "TiO2 avoided", "TiO2 saving", "Net materials saving", "CO2e avoided"],
       [[s, V["ap"][s]["spend"], V["ap"][s]["tonnes"], V["ap"][s]["m2"], V["ap"][s]["avoided"], V["ap"][s]["tio2_cr"], V["ap"][s]["net_cr"], V["ap"][s]["co2_kt"]] for s in AP]), "",
 "## T14. What moves the TiO2 saving most (base case, one input at a time)", "",
 table(["Input", "Low setting", "High setting", "Saving at low", "Saving at high"], V["tornado_rows"]), "",
 "## T15. Near-infrared reflectance over a 25 percent grey substrate (indicator, not a solar reflectance index)", "",
 table(["Wavelength", "Reference", "Proposal"], V["nir_rows"]), "",
 "## T16. Drying Peclet numbers for the horizon 2 one-coat version", "",
 table(["Climate", "Evaporation (µm/s)", "Pe of 80 nm binder latex", "Pe of 600 nm pigment"], V["peclet_rows"]), ""]
TABLES = "\n".join(TT)

if not DRY:
    io.open(HERE / "model_outputs.json", "w", encoding="utf-8").write(json.dumps(OUT, indent=1, ensure_ascii=False))
    io.open(HERE / "model_tables.md", "w", encoding="utf-8", newline="\n").write(TABLES + "\n")
    (HERE.parent / "deck").mkdir(exist_ok=True)
    io.open(HERE.parent / "deck" / "values.json", "w", encoding="utf-8").write(json.dumps(V, indent=1, ensure_ascii=False))
    print("WROTE model_outputs.json, model_tables.md, deck/values.json")
log("done")
```
<!-- END FILE -->

## D. Deck tooling (embedded; adapted from the SwiftKart winning deck and the Space and Beyond generator)

<!-- FILE: deck/gen.py -->
```python
# ===== ALCHEMY DECK GEN v1 (from the Space and Beyond gen, itself from the SwiftKart gen with R2) =====
"""Deck generator for the Asian Paints master file. Run from the repo root with python -X utf8.
  python -X utf8 asian-paints-alchemy/deck/gen.py pre          build preamble.js, mock_figma.js and values.js
  python -X utf8 asian-paints-alchemy/deck/gen.py mock 2 3     dry-run the listed slides on the offline mock (no list = slides 2 to 9)
  python -X utf8 asian-paints-alchemy/deck/gen.py bind 2 3     write build/slide_NN.js (or _1, _2 parts) and build/v1_NN.js; always
                                                               rewrite v1_all.js, sweeps.js and slots.js
  python -X utf8 asian-paints-alchemy/deck/gen.py copy         write deck/slide-copy.md (every text node on slides 2 to 9) and check it
  python -X utf8 asian-paints-alchemy/deck/gen.py preview 2 3  offline previews over the template image in deck/shots/ (needs Pillow and fontTools)
Slide 1 is the Asian Paints cover supplied by the organisers. It has no script and is never touched."""
import io, json, re, subprocess, sys, pathlib
try: DECK = pathlib.Path(__file__).resolve().parent
except NameError: DECK = pathlib.Path("asian-paints-alchemy/deck").resolve()
AP = DECK.parent; ROOT = AP.parent; N = "\n"; NS = 9; BUILT = tuple(range(2, NS + 1))
LIB = ROOT / "verdict-mnc" / "deck" / "preamble.js"; MOCKSRC = ROOT / "verdict-mnc" / "deck" / "mock_figma.js"
SB = ROOT / "swasthyagrid-gcp" / "space-beyond" / "deck"          # read-only source of _x2.js, _x3.js, _extras.js, metrics.json
ROT = ('Object.defineProperty(Node.prototype, "relativeTransform", { set(m) { this._rt = m; '
       'if (this.type === "TEXT" && Math.abs(m[0][0]) < 1e-6) { const w = this.width, h = this.height; this.x = m[0][2]; this.y = m[1][2] - w; this.width = h; this.height = w; } }, '
       'get() { return this._rt; } });')
BANW = ["here's", "let's", "bottom line", "delve", "game-changer", "game changer", "unlock", "it's not just", "make no mistake", "landscape",
        "robust", "seamless", "holistic", "tapestry", "paradigm", "navigate", "revolutioni", "cutting-edge", "leverage", "empower",
        "transformative", "journey", "synergy", "world-class", "best-in-class", "next-gen", "reimagine", "supercharge", "harness",
        "crucial", "pivotal", "furthermore", "moreover", "in today's", "ever-evolving", "imagine", "ecosystem", "testament", "elevate",
        "what if", "picture this", "dive into", "groundbreaking", "state-of-the-art", "plethora", "myriad", "underscore", "showcase",
        "foster", "bolster", "spearhead", "nuanced", "intricate", "meticulous", "realm", "fast-paced", "in conclusion",
        "it is important to note", "revolutionary", "breakthrough"]
ABSENT = ["Dayita", "Gursimran", "SwiftKart", "SwasthyaGrid", "HarvestBox", "Dream11", "Paytm", "Liminal", "Perennial", "Setu", "Satoshi",
          "TODO", "TBD", "Lorem", "xyz", "undefined", "NaN", "Rs ", "Rs.", "ChatGPT", "proven in the field", "commercially proven"]
TEAM = {"name": "TEAM IDEAFORGE", "rows": [["Harsh Kawatra", "Delhi Technological University (DTU)", "Team Leader"],
                                          ["Anuj Gambhir", "Delhi Technological University (DTU)", "Member"]]}
MUST = ["39%", "24.8 g", "40.8 g", "0.998", "90.7", "₹18.4", "₹12.0", "15%", "65%", "₹298 Cr", "7,551 t", "13 of 13", "b377745d37"]
MEM = None  # the planning-time harness sets this to a dict so that nothing touches the disk
def rdx(p): return io.open(p, encoding="utf-8").read().replace("\r", "")
def has(rel): return (MEM is not None and rel in MEM) or (DECK / rel).exists()
def rd(rel): return MEM[rel] if (MEM is not None and rel in MEM) else rdx(DECK / rel)
def wr(rel, t, quiet=False):
    if MEM is not None: MEM[rel] = t
    else:
        p = DECK / rel; p.parent.mkdir(parents=True, exist_ok=True); io.open(p, "w", encoding="utf-8", newline=N).write(t)
    if not quiet: print("wrote", rel, len(t))
def vals(): return json.loads(rd("values.js")[len("const V = "):].rstrip().rstrip(";"))
def r2mock(m):
    for a, b in [
        ('if (measure(cand, fam, size) <= width || !line) line = cand; else { out.push(line); line = wd; } }',
         'if (measure(cand, fam, size) <= width) line = cand; else { if (line) out.push(line); line = wd; let k = Math.ceil(measure(wd, fam, size) / Math.max(1, width)); while (k-- > 1) out.push(wd); } }'),
        ('setRangeFontName() {}', 'setRangeFontName(a, b, f) { if (f && f.style === "Bold") { this._bold = true; this._reflow(); } }'),
        ('_fam() { return this.fontName.family + "|" + this.fontName.style; }',
         '_fam() { return this.fontName.family + "|" + (this._bold && this.fontName.family === "Inter" ? "Bold" : this.fontName.style); }'),
        ('/BIBLIO|FINEPRINT/.test(t.name || "")', '/BIBLIO|FINEPRINT/.test(t.name || "") || (t.name === "SEC" && t.fontSize >= 18)')]:
        assert m.count(a) == 1, ("r2mock", a[:50], m.count(a)); m = m.replace(a, b)
    return m
def pre():
    t = rdx(LIB)
    for f in ("const C = {", "const HG=[", "function lineChart(", "function logoSlot(", "function layered(", "function panel(", "function vBars(",
              "function hBars(", "function waterfall(", "function rt(", "function wipe(", "function srcLine(", "function measureW("):
        assert t.count(f) == 1, f
    for f in ("_x2.js", "_x3.js", "metrics.json"): wr(f, rdx(SB / f), True)
    ext = rdx(SB / "_extras.js"); assert ext.count("function teamBT(") == 1 and ext.count("function actor(") == 1
    pal = rd("_palette.js").strip(); k = pal.index("const HG=["); a = t.index("const C = {"); b = t.index("};", a) + 2; h0 = t.index("const HG=["); h1 = t.index("];", h0) + 2
    wr("preamble.js", t[:a] + pal[:k].strip() + t[b:h0] + pal[k:] + t[h1:] + N + ext + N + rd("_ap.js"))
    m, c1 = re.subn(r"const \[pre, vals, slide, num\] = process\.argv\.slice\(2\);\nconst code = [^\n]*\n", "const code = CODE_JSON;\n", rdx(MOCKSRC))
    c2 = m.count("/LOGO:/.test("); m = m.replace("/LOGO:/.test(", "/LOGO:|IMG:/.test(")
    adv = rd("metrics.json").strip(); assert set(json.loads(adv)) == {"Poppins|Bold", "Poppins|ExtraBold", "Inter|Semi Bold", "Inter|Bold"}
    c3 = m.count("function cw(ch, fam) {"); c4 = m.count("let warnings_global = [];")
    m = m.replace("function cw(ch, fam) {", "const ADV = " + adv + ";\nfunction cw(ch, fam) { const a = ADV[fam]; if (a && a[ch] !== undefined) return a[ch] * 1.02;")
    m = m.replace("let warnings_global = [];", ROT + "\nlet warnings_global = [];")
    assert c1 == 1 and c2 == 1 and c3 == 1 and c4 == 1 and "for (let i = 1; i <= 11; i++)" in m, (c1, c2, c3, c4); m = r2mock(m); wr("mock_figma.js", m)
    V = json.loads(rd("values.json")); V["team"] = TEAM; V["must"] = MUST
    wr("values.js", "const V = " + json.dumps(V, ensure_ascii=False) + ";")
def derive(only=None):
    """Apply deck/overrides.json ({"exact old string": "new string"}) to the slide files and write deck/derived/sNN.js."""
    ov = json.loads(rd("overrides.json")) if has("overrides.json") else {}; used = set()
    for n in BUILT:
        s = rd("slides/s%02d.js" % n)
        for a, b in ov.items():
            if a in s: s = s.replace(a, b); used.add(a)
        wr("derived/s%02d.js" % n, s, True)
    miss = [a for a in ov if a not in used]; assert not miss, ("an override key matches no slide text", miss)
SPLIT = "// ===== PART ====="   # a slide may be split into any number of parts; each part re-reads the slide by id and never wipes
def compose(n, sid, part=None):
    p = rd("preamble.js") + N + rd("_x2.js") + N + rd("_x3.js"); s = rd("derived/s%02d.js" % n); old = 'getNodeByIdAsync("S%d")' % n; assert s.count(old) >= 1, n
    if part is not None: s = s.split(SPLIT)[part]
    V = vals(); keys = set(re.findall(r"\bV\.([A-Za-z_][A-Za-z0-9_]*)", p + s)); miss = keys - set(V); assert not miss, ("unknown V keys", n, miss)
    sub = "const V = " + json.dumps({k: V[k] for k in V if k in keys}, ensure_ascii=False) + ";"
    return p + N + sub + N + "const results=[];" + N + s.replace(old, 'getNodeByIdAsync("%s")' % sid) + N + "return {results,warnings};" + N
def parts(n, sid):
    s = rd("derived/s%02d.js" % n); k = s.count(SPLIT)
    return [compose(n, sid, i) for i in range(k + 1)] if k else [compose(n, sid)]
# A node that leaves its parent frame by more than 1 px is flagged (rotated rail labels excepted).
CHK = ("const __S=await figma.getNodeByIdAsync('S%d'); for(const q of __S.findAll(()=>true)){ const p=q.parent; if(!p||p.type==='SLIDE'||q._rt) continue; "
       "if(q.x<-1||q.y<-1||q.x+q.width>p.width+1||q.y+q.height>p.height+1) warnings.push('childOut: '+String(q.name||q.type).slice(0,30)+' in '+String(p.name||'').slice(0,40)+' at '+Math.round(q.x)+','+Math.round(q.y)+' size '+Math.round(q.width)+'x'+Math.round(q.height)+' parent '+Math.round(p.width)+'x'+Math.round(p.height)); }")
def mock(only=None):
    derive(only); ok = True; m = rd("mock_figma.js")
    for n in BUILT:
        if only and n not in only: continue
        code = compose(n, "S%d" % n).replace("return {results,warnings};", (CHK % n) + N + "return {results,warnings};")
        r = subprocess.run(["node", "-"], input=m.replace("CODE_JSON", json.dumps(code)), capture_output=True, text=True, encoding="utf-8")
        out = r.stdout + r.stderr; lens = [len(c) for c in parts(n, "S%d" % n)]; good = "warnings: []" in out and "ISSUES 0" in out and max(lens) < 49900; ok = ok and good
        print("s%02d" % n, "OK" if good else "FAIL", lens, "|", " | ".join(l.strip() for l in out.splitlines() if l.strip())[:(220 if good else 6000)].encode("ascii", "replace").decode())
    return ok
def bind(only=None):
    derive(); ids = json.loads(rd("slide-ids.json")); V = vals(); v1 = rd("_v1.js"); sw = rd("_sweeps.js")
    assert v1.count("const ids=IDS;") == 1 and sw.count("const ids=IDS;") == 1 and sw.count("MUSTLIST") == 1 and len(ids) == NS
    for n in BUILT:
        if only and n not in only: continue
        cs = parts(n, ids["S%d" % n])
        for i, code in enumerate(cs):
            assert len(code) < 50000, (n, i, len(code)); wr(("build/slide_%02d.js" % n) if len(cs) == 1 else ("build/slide_%02d_%d.js" % (n, i + 1)), code)
        wr("build/v1_%02d.js" % n, v1.replace("const ids=IDS;", "const ids=%s;" % json.dumps([ids["S%d" % n]])))
    allids = json.dumps([ids["S%d" % n] for n in BUILT])
    wr("build/v1_all.js", v1.replace("const ids=IDS;", "const ids=%s;" % allids))
    wr("build/sweeps.js", sw.replace("const ids=IDS;", "const ids=%s;" % allids).replace("MUSTLIST", json.dumps(V["must"], ensure_ascii=False)))
    wr("build/slots.js", "const ids=%s; const out=[]; for(const id of ids){ const s=await figma.getNodeByIdAsync(id); s.findAll(n=>n.name.startsWith('LOGO: ')||n.name.startsWith('IMG: ')).forEach(n=>out.push({slide:s.name,id:n.id,name:n.name,w:Math.round(n.width),h:Math.round(n.height)})); } return out;" % allids)
def copy():
    derive(); m = rd("mock_figma.js"); out = ["# Slide copy: every text node on slides 2 to 9, read from the offline mock", ""]; bad = []
    for n in BUILT:
        dump = "const __s=await figma.getNodeByIdAsync('S%d'); console.log('@@T'+JSON.stringify(__s.findAll(q=>q.type==='TEXT').map(t=>t.characters)));" % n
        code = compose(n, "S%d" % n).replace("return {results,warnings};", dump + N + "return {results,warnings};")
        r = subprocess.run(["node", "-"], input=m.replace("CODE_JSON", json.dumps(code)), capture_output=True, text=True, encoding="utf-8")
        tl = [l for l in r.stdout.splitlines() if l.startswith("@@T")]; texts = json.loads(tl[0][3:]) if tl else ["(no output)"]
        out += ["## S%d" % n, ""] + ["%d. %s" % (i + 1, x.replace("\n", " / ")) for i, x in enumerate(texts)] + [""]
        for x in texts:
            low = x.lower()
            if re.search("[—–]", x): bad.append((n, "dash", x[:60]))
            if "?" in x or "!" in x: bad.append((n, "question or exclamation", x[:60]))
            bad += [(n, "banned " + b, x[:60]) for b in BANW if b in low]
            bad += [(n, "absent " + a, x[:60]) for a in ABSENT if a in x]
    wr("slide-copy.md", N.join(out) + N); print("copy issues", len(bad))
    for b in bad: print("  ", b)
    return not bad
def preview(only=None):
    """Offline layout preview over the real template image: deck/shots/preview_NN.png (layout check only)."""
    import importlib.util, types
    from PIL import Image
    spec = importlib.util.spec_from_file_location("pv", SB / "preview.py"); pv = importlib.util.module_from_spec(spec); spec.loader.exec_module(pv)
    bg = Image.open(AP / "raw" / "Case & Submission_Submission Inside (1).jpg").convert("RGB").resize((1920, 1080))
    F = pv.Fonts(json.loads(rd("metrics.json"))); m = rd("mock_figma.js"); i = m.rindex("})();"); m = m[:i] + pv.DUMP + m[i:]; derive()
    for n in BUILT:
        if only and n not in only: continue
        r = subprocess.run(["node", "-"], input=m.replace("CODE_JSON", json.dumps(compose(n, "S%d" % n))), capture_output=True, text=True, encoding="utf-8")
        tj = [l for l in r.stdout.splitlines() if l.startswith("TREE_JSON")]
        if not tj: print("no tree for slide", n); continue
        img = bg.copy()
        for k in json.loads(tj[0][9:])["k"]: pv.draw(img, F, k, 0, 0)
        out = DECK / "shots" / ("preview_%02d.png" % n); out.parent.mkdir(parents=True, exist_ok=True); img.save(out); print("wrote", out)
def main(a):
    only = set(int(x) for x in a[1:]) or None
    if a[0] == "preview": preview(only)
    if a[0] == "pre": pre()
    elif a[0] == "mock": sys.exit(0 if mock(only) else 1)
    elif a[0] == "bind": bind(only)
    elif a[0] == "copy": sys.exit(0 if copy() else 1)
if __name__ == "__main__": main(sys.argv[1:])
```
<!-- END FILE -->

<!-- FILE: deck/_palette.js -->
```js
const C = {
  primary:{r:0.353,g:0.176,b:0.569}, primaryDeep:{r:0.200,g:0.090,b:0.369},
  accent:{r:0.973,g:0.690,b:0.102}, alert:{r:0.910,g:0.267,b:0.176},
  tint:{r:0.914,g:0.882,b:0.965}, alertTint:{r:0.984,g:0.878,b:0.859},
  blue:{r:0.114,g:0.306,b:0.537}, blueDeep:{r:0.075,g:0.200,b:0.400}, blueTint:{r:0.863,g:0.902,b:0.969},
  good:{r:0.118,g:0.541,b:0.369}, goodTint:{r:0.851,g:0.941,b:0.898}, accentTint:{r:1,g:0.953,b:0.839},
  ink:{r:0.039,g:0.039,b:0.039}, surface:{r:0.929,g:0.929,b:0.929},
  surfaceAlt:{r:0.965,g:0.965,b:0.965}, white:{r:1,g:1,b:1}
};
const HG=[null,{r:0.937,g:0.914,b:0.973},{r:0.808,g:0.749,b:0.910},{r:0.639,g:0.541,b:0.820},{r:0.459,g:0.318,b:0.690},{r:0.282,g:0.137,b:0.494}];
const HR=[null,{r:1,g:0.957,b:0.945},{r:0.988,g:0.820,b:0.780},{r:0.957,g:0.553,b:0.471},{r:0.910,g:0.267,b:0.176}];
```
<!-- END FILE -->

<!-- FILE: deck/_ap.js -->
```js
// ===== ASIAN PAINTS ALCHEMY TEMPLATE HELPERS =====
// Every built slide keeps the organisers' background: one locked image rectangle named "TPL: background" (Asian Paints logo top
// left, Alchemy mark top right, Unstop mark bottom right, purple bar at the foot). Nothing may be drawn on those zones.
const KEEP=[[0,0,165,122,"Asian Paints logo"],[1745,0,1920,118,"Alchemy mark"],[1605,995,1920,1080,"Unstop mark"],[0,1060,1920,1080,"purple foot bar"]];
const RIBAPC=["THE TECHNOLOGY","THE CHALLENGE","WHY IT IS UNIQUE","MECHANISM AND PROOF","COST AND SCALE"];
const RIBANX=["A1 MODEL","A2 ASSUMPTIONS","A3 SENSITIVITY","A4 SOURCES"];
function wipeTpl(s){ s.children.slice().forEach(c=>{ if(!String(c.name||"").startsWith("TPL:")) c.remove(); }); }
function ribbonAP(s,active,labels){ const y=30,h=54,n=labels.length,X0=182,ROOM=1378; let size=22;
  let tw=labels.map(l=>measureW(s,"Poppins","Bold",size,l));
  const fits=pad=>tw.reduce((a,b)=>a+b,0)+pad*n+26*(n-1)<=ROOM;
  let pad=56; while(!fits(pad)&&pad>36) pad-=4;
  if(!fits(pad)){ size=20; tw=labels.map(l=>measureW(s,"Poppins","Bold",size,l)); pad=56; while(!fits(pad)&&pad>36) pad-=4; }
  if(!fits(pad)) warnings.push("ribbon too wide");
  const widths=tw.map(w=>Math.ceil(w+pad)), used=widths.reduce((a,b)=>a+b,0), gap=n>1?Math.min(70,Math.max(26,(ROOM-used)/(n-1))):0;
  let x=X0; const bxs=[];
  for(let i=0;i<n;i++){ const w=widths[i], act=i===active;
    if(act) addRect(s,x+7,y+7,w,h,C.accent,C.ink,2.5);
    addRect(s,x,y,w,h,act?C.primary:C.accent,C.ink,2);
    addText(s,"Poppins","Bold",size,act?C.white:C.ink,labels[i],x,y+Math.round((h-size*1.5)/2),w,Math.round(size*1.5),"CENTER","CENTER");
    addEllipse(s,x+3,y+h/2-7,14,14,C.white,C.ink,2); addEllipse(s,x+w-17,y+h/2-7,14,14,C.white,C.ink,2);
    bxs.push({x,w}); x+=w+gap; }
  for(let i=0;i<n-1;i++) addWireH(s,bxs[i].x+bxs[i].w-10,bxs[i+1].x+10,y+h/2,C.ink,2.5); }
function srcAP(s,text){ const t=addText(s,"Inter","Semi Bold",14,C.primary,text,40,1032,1550,20,"LEFT",undefined,true); t.name="SOURCE";
  if(t.height>22) warnings.push("source 2 lines: "+s.name); return t; }
// Core-slide skeleton inside the template: ribbon between the two logos, section chip, counter, a two-line action title, source line.
function skelAP(s,active,counter,chip,chipW,title,source,o){ o=o||{}; wipeTpl(s); ribbonAP(s,active,o.labels||RIBAPC);
  addChip(s,1590,30,140,54,counter,C.primaryDeep,C.white,22);
  addChip(s,40,130,chipW,48,chip,C.primary,C.white,22);
  const t=addText(s,"Poppins","Bold",36,C.ink,title,40,190,1840,100,"LEFT",undefined,true); t.name="HEADLINE";
  while(t.height>110&&t.fontSize>32){ t.fontSize=t.fontSize-1; }
  if(t.height>110) warnings.push("headline 3 lines: "+counter);
  srcAP(s,source); return t; }
// Run at the end of every slide: nothing on a logo zone, and panels end above the source line.
function guardAP(s){ for(const c of s.children){ const n=String(c.name||""); if(n.startsWith("TPL:")) continue;
    for(const k of KEEP) if(c.x<k[2]&&c.x+c.width>k[0]&&c.y<k[3]&&c.y+c.height>k[1]) warnings.push("keepOut "+k[4]+": "+(n||c.type).slice(0,30));
    if(/^(PANEL|CARD|TABLE|ZONE|RAIL):/.test(n)&&c.y+c.height>1024) warnings.push("belowContent: "+n.slice(0,30)); } }
function imgSlot(p,x,y,w,h,label){ const f=addFrame(p,x,y,w,h,C.surfaceAlt,C.primaryDeep,1.5,"IMG: "+label); try{ f.dashPattern=[6,4]; }catch(e){}
  addText(f,"Inter","Semi Bold",14,C.primaryDeep,label,4,0,w-8,h,"CENTER","CENTER",false); return f; }
// Cross-section of the two-coat film: seal coat, air-network base coat with rutile and chalk, wall putty. Deterministic placement.
function film(p,x,y,w,o){ o=o||{}; const hs=o.hs||40, hb=o.hb||120, hp=o.hp||30; let seed=o.seed||11;
  const rnd=()=>{ seed=(seed*16807)%2147483647; return seed/2147483647; };
  const seal=addFrame(p,x,y,w,hs,C.tint,C.ink,2,"FILM: seal coat");
  for(let i=0;i<Math.round(w/(o.sealPitch||46));i++){ const d=7; addEllipse(seal,4+rnd()*(w-d-8),5+rnd()*(hs-d-10),d,d,C.primary,null,0); }
  const base=addFrame(p,x,y+hs,w,hb,C.white,C.ink,2,"FILM: base coat");
  const nP=Math.round(w*hb/(o.pccArea||1400)), nT=Math.round(w*hb/(o.tiArea||2600));
  for(let i=0;i<nP;i++){ const d=12+Math.round(rnd()*8); addEllipse(base,2+rnd()*(w-d-4),2+rnd()*(hb-d-4),d,d,C.surface,C.ink,1); }
  for(let i=0;i<nT;i++){ const d=7; addEllipse(base,2+rnd()*(w-d-4),2+rnd()*(hb-d-4),d,d,C.primary,null,0); }
  addRect(p,x,y+hs+hb,w,hp,C.accentTint,C.ink,2);
  return {ySeal:y,yBase:y+hs,yPutty:y+hs+hb,yEnd:y+hs+hb+hp}; }
// Line chart with a numeric x axis and 18 pt labels. series: [{pts:[[x,y],...],color,label,at,dx,dy}]
function xyS(p,x,y,w,h,series,o){ o=o||{}; const sz=o.size||18, L=x+(o.padL||64), R=x+w-(o.padR||20), Tp=y+8, B=y+h-Math.ceil(sz*1.3)-8;
  const X=v=>L+(R-L)*(v-o.xMin)/(o.xMax-o.xMin), Y=v=>B-(B-Tp)*(v-o.yMin)/(o.yMax-o.yMin);
  (o.yTicks||[]).forEach(v=>{ addRect(p,L,Y(v),R-L,1,C.surface); sTL(p,0,Y(v)-Math.round(sz*0.62),sz,o.yFmt?o.yFmt(v):String(v),{family:"Inter",style:"Semi Bold",rightAt:L-6}); });
  (o.xTicks||[]).forEach(v=>sTL(p,0,B+4,sz,o.xFmt?o.xFmt(v):String(v),{family:"Inter",style:"Bold",centerAt:X(v)}));
  addRect(p,L,B,R-L,2,C.ink); addRect(p,L,Tp,2,B-Tp,C.ink);
  series.forEach(se=>{ const pts=se.pts.map(q=>[X(q[0]),Y(q[1])]);
    for(let i=0;i<pts.length-1;i++) addDiagonalWire(p,pts[i][0],pts[i][1],pts[i+1][0],pts[i+1][1],se.color,3.5);
    pts.forEach(q=>addEllipse(p,q[0]-5,q[1]-5,10,10,se.color,C.ink,1.5));
    if(se.label){ const q=pts[se.at===undefined?pts.length-1:se.at]; sTL(p,q[0]+(se.dx||8),q[1]+(se.dy||-30),sz,se.label,{family:"Inter",style:"Bold",color:se.color}); } });
  return {X,Y,L,R,Tp,B}; }
function pctN(s){ return parseFloat(String(s).replace("%","")); }
// ===== END ASIAN PAINTS ALCHEMY TEMPLATE HELPERS =====
```
<!-- END FILE -->

## S. Slide scripts (starting layout; the deck derivation step may change copy only through deck/overrides.json)

<!-- FILE: deck/slides/s02.js -->
```js
{ const s = await figma.getNodeByIdAsync("S2"); wipeTpl(s);
// ===== top strip, between the two template logos =====
addChip(s,182,30,780,54,"ASIAN PAINTS ALCHEMY  |  CASE STUDY 1: WHITENESS",C.primaryDeep,C.white,22);
addChip(s,1430,30,300,54,V.team.name,C.primaryDeep,C.white,22);
addWireH(s,182,1730,118,C.ink,2.5); [182,569,956,1343,1730].forEach(cx=>addEllipse(s,cx-8,110,16,16,C.white,C.ink,2));
// ===== title block =====
nm(TL(s,40,130,92,"WHITER WITH",{family:"Poppins",style:"ExtraBold",color:C.ink,maxW:1160,min:60}),"TITLE");
TL(s,40,270,92,"LESS TiO2",{family:"Poppins",style:"ExtraBold",color:C.primary,maxW:1160,min:60});
TL(s,40,414,28,"Case Study 1: Future of Whiteness Development through Material Science",{family:"Poppins",style:"Bold",color:C.primaryDeep,maxW:1160,min:22});
// ===== the answer =====
const c=layered(s,40,470,1160,226,C.primaryDeep,"CARD: answer");
T(c,24,14,1112,26,"OUR ANSWER: KEEP THE RUTILE, HOLD IT IN A NETWORK OF AIR, AND SEAL THE AIR IN WITH THE SECOND COAT.",{family:"Poppins",style:"Bold",color:C.accent});
T(c,24,104,1112,22,"Rutile scatters "+V.air_gain+" more light per unit volume in air than in binder. A porous first coat holds "+V.base_pvc+" TiO2 in "+V.P+" air; a "+V.X2+" seal coat keeps the air in and gives the washable surface. Our optical model matches a premium white's contrast ratio and brightness with "+V.g_prop+" of TiO2 per m² instead of "+V.g_ref+".",{family:"Inter",style:"Semi Bold",color:C.white});
// ===== team =====
TL(s,40,712,32,V.team.name,{family:"Poppins",style:"Bold",color:C.primary});
teamBT(s,40,764,[300,640,220]);
// ===== two facts strip =====
const f1=layered(s,40,934,570,74,C.white,"CARD: nature");
imgSlot(f1,8,8,58,58,"Beetle");
sT(f1,76,6,484,18,"Nature does it first: Cyphochilus beetle scales are brilliant white at 5 to 15 µm, from a chitin network in air",{family:"Inter",style:"Bold"});
const f2=layered(s,630,934,570,74,C.white,"CARD: duty");
imgSlot(f2,8,8,58,58,"TiO2");
sT(f2,76,6,484,18,"57% of Indian TiO2 demand came from China in DGTR's probe; a duty of $460 to $681 a tonne was recommended again in 2026",{family:"Inter",style:"Bold"});
// ===== mind map: who shapes a white wall =====
const mm=panel(s,1236,140,644,846,"WHO SHAPES A WHITE WALL",{layered:true,fill:C.tint,titleColor:C.primaryDeep});
sT(mm,16,60,612,18,"Rutile scatters best and air is free; the film decides how the two meet.",{family:"Inter",style:"Bold",color:C.primaryDeep});
const HUB=[322,397];
[[164,187],[480,187],[164,607],[480,607]].forEach(q=>addDiagonalWire(mm,HUB[0],HUB[1],q[0],q[1],C.ink,2.5));
dashedV(mm,HUB[0],482,218,C.ink,2.5);
const NODES=[[16,112,"THE PIGMENT","rutile TiO2, refractive index 2.7",["Chemours","Tronox","KMML"],C.white],
  [332,112,"THE OPACIFIERS","hollow spheres, spacers, fine chalk",["Dow","Omya","Imerys"],C.white],
  [16,532,"THE PAINT MAKERS","premium whites, two coats",["Asian Paints","Berger","Birla Opus"],C.white],
  [332,532,"THE RULES","duty on Chinese TiO2, VOC limits",["DGTR","BIS","CPCB"],C.accentTint]];
NODES.forEach(nd=>{ const f=addFrame(mm,nd[0],nd[1],296,150,nd[5],C.ink,2,"NODE "+nd[2]); addRect(f,0,0,6,150,C.accent);
  TL(f,14,6,22,nd[2],{color:C.primaryDeep,maxW:272}); sT(f,14,40,272,18,nd[3],{family:"Inter",style:"Semi Bold"});
  nd[4].forEach((b,i)=>logoSlot(f,14+94*i,92,86,48,b)); });
addEllipse(mm,HUB[0]-85,HUB[1]-85,170,170,C.primaryDeep,C.ink,2.5);
addText(mm,"Poppins","Bold",22,C.white,"A WHITE WALL",HUB[0]-80,HUB[1]-46,160,34,"CENTER","CENTER");
addText(mm,"Poppins","Bold",22,C.accent,V.g_ref+" TiO2",HUB[0]-80,HUB[1]-8,160,34,"CENTER","CENTER");
addText(mm,"Inter","Bold",22,C.white,"a m² today",HUB[0]-80,HUB[1]+24,160,30,"CENTER","CENTER");
const our=layered(mm,16,700,612,134,C.accent,"CARD: our route");
TL(our,14,8,22,"OUR ROUTE: KEEP RUTILE, ADD AIR, SEAL IT",{family:"Poppins",style:"ExtraBold",color:C.primaryDeep,maxW:470});
sT(our,14,44,470,18,V.sav+" less TiO2 per m² in our model at contrast ratio "+V.CR_min+" and brightness "+V.Y_target+"; the layout copies the beetle's scale",{family:"Inter",style:"Bold"});
imgSlot(our,494,10,106,112,"Cyphochilus scale");
srcAP(s,"Source: Alchemy Case Study 1 | team optical model "+V.hash+" | Burresi et al. 2014, Sci. Rep. | DGTR TiO2 findings 2025, 2026 | brands shown for context, no partnership implied");
guardAP(s); results.push({slide:s.id,total:s.findAll(()=>true).length,top:s.children.length}); }
```
<!-- END FILE -->

<!-- FILE: deck/slides/s03.js -->
```js
{ const s = await figma.getNodeByIdAsync("S3");
skelAP(s,0,"1 / 5","THE TECHNOLOGY",300,"Keep rutile and hold it in sealed air: a two-coat white that matches a premium finish with "+V.sav+" less TiO2 and "+V.inr_cut+" lower material cost per m²",
  "Source: team optical model "+V.hash+" (tables T7 to T13) | Alchemy Case Study 1 brief and questionnaire | research sections 2, 14 and 19");
rail(s,40,312,216,"THE ANSWER",C.primaryDeep); rail(s,40,540,216,"WHY",C.alert); rail(s,40,768,220,"THE PAYOFF",C.primary);
const p1=pnl(s,92,312,600,216,"THE CASE ASKS, AND WHAT WE SAY");
note(p1,14,46,572,"The brief: ","a non-conventional, scalable way to make coatings whiter, water and solvent borne.",{lc:C.primaryDeep});
T(p1,14,116,572,22,"Do not replace TiO2. Move it into a network of air, and seal the air in with the second coat.",{family:"Poppins",style:"Bold",color:C.primary});
const c=layered(s,704,312,600,216,C.primaryDeep,"CARD: technology");
TL(c,14,6,22,"THE TECHNOLOGY IN ONE PICTURE",{color:C.accent,maxW:572});
film(c,14,46,250,{hs:30,hb:100,hp:24,tiArea:2000,pccArea:1300});
[["Seal coat, "+V.X2+", "+V.seal_pvc+" TiO2",50],["Base coat, "+V.X1+", "+V.P+" air, "+V.base_pvc+" TiO2",100],["Wall putty, as today",168]].forEach(r=>
  sT(c,280,r[1],306,18,r[0],{family:"Inter",style:"Bold",color:C.white}));
}
// ===== PART =====
{ const s = await figma.getNodeByIdAsync("S3");
const p3=pnl(s,1316,312,564,216,"THREE NUMBERS THAT DECIDE IT");
[[V.sav,"less TiO2 per m², same whiteness"],[V.inr_cut,"lower material cost per m²"],[V.binder_cut,"less binder in the two coats"]].forEach((r,i)=>
  tile(p3,14+180*i,48,170,156,r[0],r[1],{size:34,ly:52,fill:i===0?C.accentTint:C.white}));
const SR=Object.fromEntries(V.screen_rows.map(r=>[r[0],r]));
const reach=["S04","S06","S07","S08","S09","S11"].filter(k=>SR[k][4]!=="not reached").length;
const halo=Math.round(parseFloat(V.halo_rows[0][2])/parseFloat(V.halo_rows[4][2]));
const p4=pnl(s,92,540,880,216,"DO NOT CHASE A NEW WHITE PIGMENT",{tc:C.alert});
[[reach+" of 6","TiO2-free or particle-level designs we modelled reach a premium white's brightness at any loading"],
 [SR.S02[5].replace("%","")+" to "+SR.S05[5],"is all that hollow spheres, a nano-air binder or hollow rutile save under the same test"],
 [halo+"x","more film volume per gram of TiO2 when every rutile particle carries its own air pocket"]].forEach((r,i)=>{ const y=48+54*i;
  TL(p4,14,y,28,r[0],{family:"Poppins",style:"ExtraBold",color:C.alert,maxW:170,min:20}); sT(p4,196,y+2,670,18,r[1],{family:"Inter",style:"Semi Bold"}); });
const p5=pnl(s,984,540,896,216,"MOVE THE TiO2 INTO AIR, THEN SEAL IT",{tc:C.good});
[[V.sav,"less TiO2: "+V.g_ref+" to "+V.g_prop+" per m² at contrast ratio "+V.CR_min+" and brightness "+V.Y_target],
 [V.inr_cut,"lower material cost: "+V.inr_ref+" to "+V.inr_prop+" per m², and binder use falls "+V.binder_cut],
 ["2 coats","as painters apply today: coat 1 holds the air, coat 2 seals it, at the same spreading rate"]].forEach((r,i)=>{ const y=48+54*i;
  TL(p5,14,y,28,r[0],{family:"Poppins",style:"ExtraBold",color:C.good,maxW:170,min:20}); sT(p5,196,y+2,686,18,r[1],{family:"Inter",style:"Semi Bold"}); });
}
// ===== PART =====
{ const s = await figma.getNodeByIdAsync("S3");
const p6=pnl(s,92,768,560,220,"TiO2 SAVED, THREE SCENARIOS");
hBars(p6,14,50,532,[{label:"Bear",value:V.sav_bear_num,text:V.sav_bear,color:C.tint},{label:"Base",value:V.sav_num,text:V.sav,color:C.primary},{label:"Bull",value:V.sav_bull_num,text:V.sav_bull,color:C.primaryDeep}],{labelW:90,rowH:40,barH:26,valueW:90,max:70});
sT(p6,14,176,532,18,"Bear: binder wets the rutile. Bull: rutile sits in pure air.",{family:"Inter",style:"Bold",color:C.primaryDeep});
const p7=pnl(s,664,768,600,220,"WHAT IT IS WORTH TO ASIAN PAINTS");
[[V.ap.base.net_cr,"a year in materials"],[V.ap.base.avoided,"of TiO2 a year not bought"],[V.ap.base.co2_kt,"of CO2e a year avoided"],[V.checks,"model checks pass"]].forEach((r,i)=>
  tile(p7,14+290*(i%2),48+82*Math.floor(i/2),280,76,r[0],r[1],{size:26,ly:42,fill:i===0?C.accentTint:C.white}));
const p8=pnl(s,1276,768,604,220,"WHERE THE QUESTIONNAIRE IS ANSWERED");
tbl(p8,14,46,[262,250,64],["Question in the brief","Where on the deck","Slide"],[["Technology and concept","answer, film picture","1"],["What makes it unique","twelve designs screened","3"],
  ["Scientific mechanism","medium, crowding, seal","2, 4"],["How it is produced","four steps, existing plant","4"],["How it is applied","two coats, as today","4"],["Cost, handling, scale","per m², materials, roll-out","5"]],
  {hh:24,rh:24,name:"brief",align:["LEFT","LEFT","CENTER"]});
guardAP(s); results.push({slide:s.id,total:s.findAll(()=>true).length,top:s.children.length}); }
```
<!-- END FILE -->

<!-- FILE: deck/slides/s04.js -->
```js
{ const s = await figma.getNodeByIdAsync("S4");
const share=Math.round(100/parseFloat(V.host_rows[0][2])), crowd=100-pctN(V.eff_bind_18);
skelAP(s,1,"2 / 5","THE CHALLENGE",290,"Rutile in binder scatters only "+share+"% of the light it would in air, and crowding at "+V.prem_pvc+" costs another "+crowd+"%: the binder, not the pigment, caps whiteness",
  "Source: team optical model "+V.hash+" (T4 to T8) | Asian Paints FY26 results | DGTR TiO2 findings Feb 2025 and Aug 2026 | Calcutta High Court, Sep 2025 | estimates use A13, A21 to A23");
rail(s,40,312,216,"THE BILL",C.alert); rail(s,40,540,216,"THE PHYSICS",C.primaryDeep); rail(s,40,768,220,"THE TRAP",C.primary);
const p1=pnl(s,92,312,520,216,"WHAT TiO2 COSTS ASIAN PAINTS",{tc:C.alert});
[[V.ap.base.spend,"a year at 15% of the raw material bill (estimate)"],[V.ap.base.tonnes,"of TiO2 a year at ₹250 a kg (estimate)"],[V.g_ref,"of TiO2 in each m² of a premium white"]].forEach((r,i)=>{ const y=48+54*i;
  TL(p1,14,y,28,r[0],{family:"Poppins",style:"ExtraBold",color:C.alert,maxW:200,min:20}); sT(p1,224,y+2,282,18,r[1],{family:"Inter",style:"Semi Bold"}); });
const p2=pnl(s,624,312,640,216,"THE DUTY CLOCK ON CHINESE TiO2");
addWireH(p2,40,600,104,C.ink,2.5);
[["Feb 2025","DGTR final findings"],["May 2025","duty imposed"],["Sep 2025","High Court quashes it"],["Aug 2026","new findings, $460 to $681 a t"]].forEach((r,i)=>{ const cx=80+160*i;
  addEllipse(p2,cx-9,95,18,18,i===2?C.alert:C.primary,C.ink,2); sTL(p2,0,60,18,r[0],{family:"Inter",style:"Bold",color:i===2?C.alert:C.ink,centerAt:cx});
  sT(p2,cx-74,120,148,18,r[1],{family:"Inter",style:"Semi Bold",align:"CENTER"}); });
note(p2,14,174,612,"So what: ","57% of demand came from China; rulings move price.");
}
// ===== PART =====
{ const s = await figma.getNodeByIdAsync("S4");
const p3=pnl(s,1276,312,604,216,"FIVE CHALLENGES THE BRIEF NAMES");
bl18(p3,14,48,576,[["Opacity: ","the same hiding with less TiO2"],["Durability and yellowing: ","no new chalking or yellowing"],["Dispersion: ","no new grinding or mixing step"],
  ["Supply and economics: ","less imported pigment"],["Manufacturing: ","on existing mills and reactors"]],{gap:5});
const p4=pnl(s,92,540,600,216,"THE MEDIUM SETS THE SCATTERING");
const hv=V.host_num.map(r=>r[1]);
cols(p4,14,44,572,140,V.host_num.map(r=>r[0].toFixed(2)),[{values:hv,color:C.primary}],{max:14,bw:46,totals:hv.map(v=>v.toFixed(1))});
sT(p4,14,186,572,18,"Scattering per µm³ of rutile; air 1.00, binder 1.49",{family:"Inter",style:"Bold",color:C.primaryDeep});
const p5=pnl(s,704,540,560,216,"CROWDING COSTS EFFICIENCY");
const cr=V.crowd_num.filter(r=>r[2]!==null);
lcS(p5,14,46,532,160,[{values:cr.map(r=>r[1]),color:C.primary,label:"in binder",dy:-14},{values:cr.map(r=>r[2]),color:C.alert,label:"in air",dy:4}],cr.map(r=>r[0]+"%"),{yMin:75,yMax:100,yTicks:[80,90,100],padR:110});
}
// ===== PART =====
{ const s = await figma.getNodeByIdAsync("S4");
const SR=Object.fromEntries(V.screen_rows.map(r=>[r[0],r]));
const p6=pnl(s,1276,540,604,216,"THE USUAL FIXES, UNDER ONE TEST");
tbl(p6,14,46,[230,120,226],["Fix","TiO2 saved","Why it stops there"],[["Hollow polymer spheres",SR.S02[5],"air sits inside a shell"],["Nano-air binder",SR.S03[5],"index falls too little"],
  ["Hollow rutile",SR.S05[5],"thin walls scatter less"],["High barium sulfate","none","index 1.64, near binder"]],{hh:26,rh:30,name:"fixes",align:["LEFT","CENTER","LEFT"]});
const p7=pnl(s,92,768,900,220,"A THIN AIR GAP AROUND RUTILE BACKFIRES; A THICK ONE COSTS FILM");
tbl(p7,14,46,[330,270,272],["Air gap around a 225 nm rutile core","Scattering per µm³ of TiO2","Scattering per µm³ of film"],V.halo_rows,
  {hh:24,rh:24,name:"halo",align:["LEFT","CENTER","CENTER"],fills:[C.white,C.alertTint,C.alertTint,C.alertTint,C.accentTint,C.accentTint]});
const c=layered(s,1004,768,876,220,C.primaryDeep,"CARD: where the air lives");
TL(c,14,6,22,"WHERE SHOULD THE AIR LIVE",{color:C.accent,maxW:848});
const halo=Math.round(parseFloat(V.halo_rows[0][2])/parseFloat(V.halo_rows[4][2]));
[["Inside each particle: ","every rutile needs its own pocket, "+halo+"x the film volume"],["In the binder: ","closed nano-air lowers the index, worth only "+SR.S03[5]+" of TiO2"],
 ["In the film: ","one shared network of air costs nothing, because air is free"]].forEach((r,i)=>sRT(c,14,46+38*i,848,18,r[0],r[1],{color:C.white,leadColor:C.accent}));
TL(c,14,170,22,"So the air has to live in the film, not in the particle.",{family:"Poppins",style:"Bold",color:C.accent,maxW:848});
guardAP(s); results.push({slide:s.id,total:s.findAll(()=>true).length,top:s.children.length}); }
```
<!-- END FILE -->

<!-- FILE: deck/slides/s05.js -->
```js
{ const s = await figma.getNodeByIdAsync("S5");
skelAP(s,2,"3 / 5","WHY IT IS UNIQUE",320,"We ran 12 white-film designs through one model: no TiO2-free pigment reaches premium brightness, and only an air network under a seal coat saves more than 30% of TiO2",
  "Source: team optical model "+V.hash+" (table T8, same targets for all 12) | prior art: yolk-shell TiO2, Colloids Surf. A 2017; hollow polymer-silica, Prog. Org. Coat. 2025 | research section 13");
rail(s,40,312,444,"THE SCREEN",C.primaryDeep); rail(s,40,768,220,"THE VERDICT",C.alert);
const NAME={S01:"Rutile in binder (premium today)",S02:"Rutile plus hollow polymer spheres",S03:"Rutile in a nano-air binder",S04:"Rutile in its own air pocket (yolk-shell)",
  S05:"Hollow rutile spheres",S06:"Zinc sulfide, no TiO2",S07:"Zirconia, no TiO2",S08:"Barium sulfate, high loading",S09:"Organic crystals (shrimp-eye type)",
  S10:"Air network under a seal coat (ours)",S11:"Air network, no TiO2 at all",S12:"Air network with organic crystals (later)"};
const VERD=r=>r[0]==="S01"?"Reference":(r[0]==="S10"?"Keep":(r[0]==="S12"?"Later":"Drop"));
const rows=V.screen_rows.map((r,i)=>[String(i+1),NAME[r[0]],r[4],r[5],r[6],VERD(r)]);
const fills=V.screen_rows.map(r=>r[0]==="S10"?C.goodTint:(r[0]==="S12"?C.accentTint:(r[0]==="S01"?C.tint:null)));
const rc=V.screen_rows.map(r=>(r[4]==="not reached"?C.alert:C.ink));
const p1=pnl(s,92,312,1180,444,"TWELVE DESIGNS, ONE TEST, LEAST TiO2 WINS");
tbl(p1,14,46,[50,530,170,120,150,132],["#","Design","TiO2 a m²","Saved","Brightness Y","Verdict"],rows,{hh:26,rh:30,name:"screen",fills,rc,align:["CENTER","LEFT","CENTER","CENTER","CENTER","CENTER"]});
}
// ===== PART =====
{ const s = await figma.getNodeByIdAsync("S5");
const p2=pnl(s,1284,312,596,150,"THE TEST EVERY DESIGN SITS");
sRT(p2,14,48,568,18,"Pass: ","brightness Y of "+V.Y_target+" or more and contrast ratio of "+V.CR_min+" or more, two 30 µm coats over black and white. The design that passes with least TiO2 wins.",{leadColor:C.alert});
const p3=pnl(s,1284,474,596,282,"HOW EACH DESIGN IS SCORED");
[["Mie theory","light scattered by each particle, layer by layer"],["Percus-Yevick","crowding between neighbouring particles"],["Kubelka-Munk","two coats over black and white substrates"],["CIE D65","brightness, colour and contrast ratio"]].forEach((r,i)=>{
  bx(p3,14,50+56*i,190,44,r[0],{fill:C.primaryDeep,color:C.white,fam:"Poppins",st:"Bold",size:18});
  sT(p3,216,58+56*i,366,18,r[1],{family:"Inter",style:"Semi Bold"}); });
}
// ===== PART =====
{ const s = await figma.getNodeByIdAsync("S5");
const SR=Object.fromEntries(V.screen_rows.map(r=>[r[0],r]));
const p4=pnl(s,92,768,600,220,"TiO2 SAVED UNDER THE SAME TEST");
const it=[["Hollow spheres","S02",C.tint],["Nano-air binder","S03",C.tint],["Hollow rutile","S05",C.tint],["Air network (ours)","S10",C.primary],["Organic, later","S12",C.accent]];
hBars(p4,14,48,572,it.map(q=>({label:q[0],value:pctN(SR[q[1]][5]),text:SR[q[1]][5],color:q[2]})),{labelW:230,rowH:32,barH:22,valueW:70,max:90});
const p5=pnl(s,704,768,600,220,"FIVE CHALLENGES, THREE ROUTES");
const cell=t=>t==="Yes"?{t,f:C.goodTint,tc:C.good}:(t==="Part"?{t,f:C.accentTint,tc:C.ink}:(t==="Test"?{t,f:C.tint,tc:C.primaryDeep}:{t,f:C.alertTint,tc:C.alert}));
hgrid(p5,14,46,["Opacity","Durability, yellowing","Dispersion","Supply, economics","Manufacturing"],["Pigment","In particle","In film"],
  [["No","Part","Yes"],["Part","Part","Test"],["No","Part","Yes"],["No","Part","Yes"],["No","No","Yes"]].map(r=>r.map(cell)),{lw:212,cw:120,rh:28,hh:28,corner:"Route for",name:"routes"});
const c=layered(s,1316,768,564,220,C.primaryDeep,"CARD: conclusively");
TL(c,14,6,24,"CONCLUSIVELY",{color:C.accent,maxW:536});
sT(c,14,48,536,18,"A new pigment cannot out-scatter rutile in binder: zinc sulfide gets closest and still misses brightness ("+SR.S06[6]+" against "+V.Y_target+"). Air inside each particle costs too much film. The gain is in where the film keeps its air.",{family:"Inter",style:"Semi Bold",color:C.white});
sT(c,14,148,536,18,"“biologically inspired replacements for artificial scatterers like titanium dioxide” Palmer et al., 2023, on the route our row 12 takes later",{family:"Inter",style:"Bold",color:C.accent});
guardAP(s); results.push({slide:s.id,total:s.findAll(()=>true).length,top:s.children.length}); }
```
<!-- END FILE -->

<!-- FILE: deck/slides/s06.js -->
```js
{ const s = await figma.getNodeByIdAsync("S6");
skelAP(s,3,"4 / 5","MECHANISM AND PROOF",380,"A porous first coat holds "+V.base_pvc+" TiO2 in "+V.P+" air under a "+V.X2+" seal coat, and matches the premium white with "+V.g_prop+" of TiO2 per m² against "+V.g_ref,
  "Source: team optical model "+V.hash+" (T9 to T11, T15) | Burresi et al. 2014, Sci. Rep. 4, 6075 | ISO 6504-3, ISO 7724, ASTM D2486 | research sections 15 to 18");
rail(s,40,312,216,"HOW IT WORKS",C.primaryDeep); rail(s,40,540,216,"THE PROOF",C.alert); rail(s,40,768,220,"HOW IT IS MADE",C.primary);
const p1=pnl(s,92,312,900,216,"THE FILM, IN SECTION");
film(p1,14,46,360,{hs:34,hb:110,hp:22});
[["Seal coat "+V.X2+": latex too big to enter the pores"],["Base coat "+V.X1+": "+V.P+" air around rutile and chalk"],["Rutile sees a medium of index "+V.nh+", not 1.49"],["Same wet film: the air adds thickness for free"]].forEach((r,i)=>{
  addBadge(p1,390,48+40*i,28,i+1,C.primary,C.white); sTL(p1,428,50+40*i,18,r[0],{family:"Inter",style:"Bold",maxW:458}); });
}
// ===== PART =====
{ const s = await figma.getNodeByIdAsync("S6");
const p2=layered(s,1004,312,876,216,C.white,"CARD: nature");
imgSlot(p2,14,14,150,186,"Cyphochilus scale");
TL(p2,180,8,22,"NATURE GOT HERE FIRST",{color:C.primaryDeep,maxW:680});
sT(p2,180,44,680,18,"The Cyphochilus beetle's scale is a chitin network, 50 to 60% solid, inside a thin skin, and is brilliant white at 5 to 15 µm. Our base coat copies the network; our seal coat copies the skin.",{family:"Inter",style:"Semi Bold"});
sT(p2,180,140,680,18,"“the lowest transport mean free path reported to date for low-refractive-index systems” Burresi et al., Sci. Rep., 2014",{family:"Inter",style:"Bold",color:C.primary});
const g0=V.hiding_base[3], g1=V.hiding_air[1];
const p3=pnl(s,92,540,700,216,"ONE COAT: "+g1[0].toFixed(0)+" g IN AIR HIDES LIKE "+g0[0].toFixed(0)+" g IN BINDER");
xyS(p3,14,46,672,164,[{pts:V.hiding_base,color:C.alert,label:"conventional coat",at:1,dx:14,dy:4},{pts:V.hiding_air,color:C.primary,label:"air network",at:0,dx:14,dy:10}],
  {xMin:0,xMax:36,yMin:0.95,yMax:1.0,yTicks:[0.95,0.97,0.99],xTicks:[0,6,12,18,24,30,36],yFmt:v=>v.toFixed(2),padL:60});
}
// ===== PART =====
{ const s = await figma.getNodeByIdAsync("S6");
const m=layered(s,804,540,560,216,C.primaryDeep,"CARD: MONEYSHOT");
TL(m,16,6,22,"TWO COATS, THE SAME WHITE",{color:C.accent,maxW:528});
TL(m,16,38,64,V.sav+" LESS TiO2",{family:"Poppins",style:"ExtraBold",color:C.accent,maxW:528,min:40});
sT(m,16,140,528,18,V.g_ref+" to "+V.g_prop+" of TiO2 per m² at contrast ratio "+V.CR_min+" and brightness "+V.Y_target+"; "+V.sav_bear+" to "+V.sav_bull+" across scenarios",{family:"Inter",style:"Bold",color:C.white});
const p5=pnl(s,1376,540,504,216,"AGAINST THE TARGETS");
tbl(p5,14,46,[200,140,136],["Measure","Premium","Ours"],[["Contrast ratio",V.CR_ref,V.CR_prop],["Brightness Y",V.Y_ref,V.Y_prop],["L*",V.L_ref,V.L_prop],
  ["b*, yellowness",V.b_ref,V.b_prop],["TiO2 a m²",V.g_ref,V.g_prop],["Near-IR, 1,500 nm",V.nir_rows[3][1],V.nir_rows[3][2]]],{hh:24,rh:24,name:"targets",align:["LEFT","CENTER","CENTER"],fills:[null,null,null,null,C.goodTint,null]});
const p6=pnl(s,92,768,1180,220,"FOUR STEPS ON EQUIPMENT ASIAN PAINTS ALREADY RUNS");
[["1  FINE CHALK","lime plus CO2","Precipitated calcium carbonate at 0.6 µm, made in India from lime and captured CO2"],
 ["2  BASE COAT","high-speed dispersers","TiO2 and chalk above the critical PVC, binder 25% of solids, on today's mills"],
 ["3  SEAL COAT","emulsion reactors","Acrylic latex with particles larger than the base-coat pores, plus "+V.seal_pvc+" TiO2"],
 ["4  ON THE WALL","painters, as today","Coat 1, let it dry, coat 2: same rollers, same spreading rate, same two coats"]].forEach((r,i)=>
  step(p6,14+290*i,46,280,164,r[0],r[1],r[2],{hfill:i===3?C.primary:C.primaryDeep}));
const p7=pnl(s,1284,768,596,220,"HOW WE WOULD PROVE IT ON PANELS");
tbl(p7,14,46,[170,210,188],["Test","Method","Pass mark"],[["Contrast ratio","ISO 6504-3",V.CR_min+" or more"],["Brightness, b*","ISO 7724, CIELAB","Y "+V.Y_target+" or more"],
  ["Porosity","mercury porosimetry","30 to 40%"],["Scrub resistance","ASTM D2486","premium or better"],["Film section","FIB-SEM","network visible"]],{hh:24,rh:28,name:"tests"});
guardAP(s); results.push({slide:s.id,total:s.findAll(()=>true).length,top:s.children.length}); }
```
<!-- END FILE -->

<!-- FILE: deck/slides/s07.js -->
```js
{ const s = await figma.getNodeByIdAsync("S7");
skelAP(s,4,"5 / 5","COST AND SCALE",270,"At 40% adoption in interior emulsions the system saves about "+V.ap.base.net_cr+" a year in materials and "+V.ap.base.avoided+" of imported TiO2, with no new plant or painter training",
  "Source: team model "+V.hash+" (T12 to T14) | Asian Paints FY26 results | TiO2 price, TiO2 share and adoption are team assumptions A13, A23 to A25 | research sections 19 to 24");
rail(s,40,312,216,"COST",C.alert); rail(s,40,540,216,"SCALE",C.primaryDeep); rail(s,40,768,220,"ROLL-OUT",C.primary);
const R=V.cost_ref, P=V.cost_prop, d=k=>Math.round((P[k]-R[k])*100)/100, tot=k=>Object.values(k).reduce((a,b)=>a+b,0);
const p1=pnl(s,92,312,620,216,"MATERIAL COST PER m², TWO COATS, ₹");
wf(p1,14,44,592,166,[["Premium today",Math.round(tot(R)*10)/10],["TiO2",d("TiO2")],["Binder",d("binder")],["Fine chalk",d("PCC")],["Coarse chalk",d("GCC")],["Ours",Math.round(tot(P)*10)/10]],{min:0,max:21,dp:1});
const p2=pnl(s,724,312,560,216,"THREE SCENARIOS");
tbl(p2,14,46,[90,96,90,132,124],["Case","TiO2 cut","₹ a m²","₹ a year","TiO2 a year"],["bear","base","bull"].map(k=>[k[0].toUpperCase()+k.slice(1),V.scen[k].sav,V.econ[k].prop,V.ap[k].net_cr,V.ap[k].avoided]),
  {hh:26,rh:26,name:"scenarios",align:["LEFT","CENTER","CENTER","CENTER","CENTER"],fills:[null,C.tint,null]});
note(p2,14,156,532,"Bear: ","binder wets rutile, 25% porosity, 20% adoption. Bull: rutile in air, 60% adoption.");
}
// ===== PART =====
{ const s = await figma.getNodeByIdAsync("S7");
const p3=pnl(s,1296,312,584,216,"WHAT MOVES THE SAVING MOST");
const X0=250, W=300, X=v=>X0+W*v/70;
V.tornado_num.slice(0,3).forEach((r,i)=>{ const y=52+40*i;
  sTL(p3,14,y,18,r[0].replace("What surrounds base-coat particles","What surrounds rutile").replace("Seal-coat infiltration into pores","Seal coat entering pores"),{family:"Inter",style:"Bold",maxW:226});
  addRect(p3,X(Math.min(r[3],r[4])),y+2,Math.max(3,X(Math.max(r[3],r[4]))-X(Math.min(r[3],r[4]))),20,C.tint,C.ink,1.5); });
addRect(p3,X(V.sav_num)-1,46,2,130,C.alert);
sTL(p3,0,186,18,"base "+V.sav+"; bars span bear to bull",{family:"Inter",style:"Bold",color:C.alert,centerAt:X0+W/2});
const p4=pnl(s,92,540,700,216,"RAW MATERIALS AND HANDLING");
tbl(p4,14,46,[210,250,212],["Material","What changes","Handling"],[["Rutile TiO2","as today, less of it","same dust controls"],["Fine chalk (PCC)","made from lime and CO2","non-hazardous"],
  ["Acrylic latex","larger latex particles","on existing reactors"],["Silane, exterior only","keeps pores dry","small, closed dosing"]],{hh:26,rh:34,name:"materials"});
const p5=pnl(s,804,540,1076,216,"WHERE IT APPLIES, WATER BORNE AND SOLVENT BORNE");
tbl(p5,14,46,[250,110,100,588],["Segment","Medium","Horizon","What has to be true"],[["Interior emulsions","water","H1","the seal coat leaves the pores open; nothing new to buy"],
  ["Exterior emulsions","water","H2","silane-treated pores stay dry through the monsoon"],["Industrial coatings","solvent","H2","a fast-skinning seal so solvent cannot wet the pores"],
  ["Automotive white","solvent","H3","basecoat and clearcoat already act as base and seal"]],{hh:26,rh:34,name:"segments",align:["LEFT","CENTER","CENTER","LEFT"],fills:[C.goodTint,null,null,null]});
}
// ===== PART =====
{ const s = await figma.getNodeByIdAsync("S7");
const p6=pnl(s,92,768,1000,220,"THREE HORIZONS WITH GATES");
gnt(p6,14,48,330,130,28,["0 to 6 mo","6 to 12","12 to 24","24 to 36","36 to 60"],[{label:"Lab panels, model fit",s:0,e:0,color:C.accent},{label:"Interior pilot, two cities",s:1,e:1,color:C.primary},
  {label:"H1: interior launch",s:2,e:4,color:C.primaryDeep},{label:"H2: exterior, industrial",s:3,e:4,color:C.primary},{label:"H3: TiO2-free base, automotive",s:4,e:4,color:C.alert}]);
const p7=pnl(s,1104,768,776,220,"RISKS, AND THE EARLY SIGNAL");
tbl(p7,14,46,[250,230,268],["Risk","Early signal","Response"],[["Seal coat fills the pores","panel CR after coat 2","latex at twice pore size"],["Scrub and stain","ASTM D2486 cycles","seal coat 15 µm minimum"],
  ["Binder wets the rutile","porosimetry, CR","bear case still saves "+V.sav_bear]],{hh:26,rh:30,name:"risks"});
note(p7,14,170,748,"Therefore: ","pilot it in 12 months; no new pigment, plant or painter skill.",{lc:C.primaryDeep});
guardAP(s); results.push({slide:s.id,total:s.findAll(()=>true).length,top:s.children.length}); }
```
<!-- END FILE -->

<!-- FILE: deck/slides/s08.js -->
```js
{ const s = await figma.getNodeByIdAsync("S8");
skelAP(s,-1,"A / 1","ANNEXURE",220,"Annexure: one optical model behind every number; "+V.checks+" checks pass, and the answer holds from "+V.sav_bear+" to "+V.sav_bull+" of TiO2 saved",
  "Source: model tables T1 to T16 | research Appendix A bibliography and Appendix B tables | model "+V.hash,{labels:RIBANX});
const p1=pnl(s,40,312,910,330,"A1 MODEL CHAIN AND CHECKS");
[["Mie, multilayer","particles"],["Percus-Yevick","crowding"],["Kubelka-Munk","two coats"],["CIE D65, 2 degree","colour"],["Optimiser","least TiO2"]].forEach((r,i)=>{
  bx(p1,14,48+52*i,200,40,r[0],{fill:i===4?C.accent:C.primaryDeep,color:i===4?C.ink:C.white,fam:"Poppins",st:"Bold",size:18});
  sTL(p1,222,56+52*i,18,r[1],{family:"Inter",style:"Semi Bold",maxW:100}); });
bl18(p1,340,48,556,[["Mie: ","matches the Bohren and Huffman benchmark within 0.1%"],["Layers: ","a two-layer sphere of one material equals a solid one"],["Crowding: ","the Percus-Yevick long-wave limit is reproduced"],
  ["Films: ","the Kubelka-Munk thick-film limit is exact"],["Baseline: ","premium white CR "+V.CR_ref+", Y "+V.Y_ref+", b* "+V.b_ref],["Run: ","hash "+V.hash+", "+V.checks+" checks pass"]],{gap:6});
const p2=pnl(s,962,312,918,330,"A2 ASSUMPTIONS, BEAR TO BULL");
tbl(p2,14,46,[70,410,140,140,130],["ID","Assumption","Bear","Base","Bull"],[["A05","Base-coat porosity","25%","35%","45%"],["A07","Seal coat filling the pores","25%","10%","0%"],
  ["A08","What surrounds the rutile","binder-wetted","air and binder","air"],["A28","Minimum seal coat","20 µm","15 µm","12 µm"],["A13","TiO2 price a kg","₹200","₹250","₹300"],
  ["A23","TiO2 share of raw materials","10%","15%","20%"],["A24","Addressable share of TiO2 use","30%","40%","50%"],["A25","Adoption by year 5","20%","40%","60%"]],{hh:26,rh:32,name:"assumptions"});
}
// ===== PART =====
{ const s = await figma.getNodeByIdAsync("S8");
const p3=pnl(s,40,654,910,334,"A3 SENSITIVITY AND A NEAR-INFRARED BONUS");
const X0=250, W=300, X=v=>X0+W*v/70;
V.tornado_num.forEach((r,i)=>{ const y=56+40*i;
  sTL(p3,14,y,18,r[0].replace("What surrounds base-coat particles","What surrounds rutile").replace("Seal-coat infiltration into pores","Seal coat entering pores"),{family:"Inter",style:"Bold",maxW:226});
  addRect(p3,X(Math.min(r[3],r[4])),y+2,Math.max(3,X(Math.max(r[3],r[4]))-X(Math.min(r[3],r[4]))),20,C.tint,C.ink,1.5); });
addRect(p3,X(V.sav_num)-1,48,2,206,C.alert);
sTL(p3,14,264,18,"Base "+V.sav+"; bars span bear to bull of one input",{family:"Inter",style:"Bold",color:C.alert,maxW:540});
tbl(p3,574,46,[130,95,95],["Wavelength","Premium","Ours"],V.nir_rows,{hh:26,rh:28,name:"nir",align:["LEFT","CENTER","CENTER"]});
sT(p3,574,192,320,18,"More near-infrared sent back means a cooler wall: a link to Case Study 2.",{family:"Inter",style:"Bold",color:C.primaryDeep});
const p4=pnl(s,962,654,918,334,"A4 SOURCES AND SHORT FORMS");
nm(T(p4,14,46,520,16,"1. Alchemy Case Study 1 brief and references\n2. Bohren and Huffman, Absorption and Scattering of Light by Small Particles, 1983\n3. Wertheim, Phys. Rev. Lett. 10, 321, 1963 (Percus-Yevick)\n4. Kubelka and Munk, 1931; Saunderson, JOSA 32, 727, 1942\n5. Devore, JOSA 41, 416, 1951 (rutile); Sultanova et al., 2009 (PMMA)\n6. CIE 15:2018 colorimetry\n7. Burresi et al., Sci. Rep. 4, 6075, 2014\n8. Asian Paints FY26 results\n9. DGTR final findings on TiO2, 2025 and 2026\n10. Team IdeaForge research and model",{family:"Inter",style:"Semi Bold"}),"BIBLIO");
sT(p4,548,46,356,18,"TiO2 titanium dioxide; PVC pigment volume concentration; PCC precipitated calcium carbonate; CR contrast ratio; Y luminous reflectance; L* and b* CIELAB lightness and yellowness; µm micrometre; DGTR Directorate General of Trade Remedies; H1 to H3 horizons one to three",{family:"Inter",style:"Semi Bold"});
guardAP(s); results.push({slide:s.id,total:s.findAll(()=>true).length,top:s.children.length}); }
```
<!-- END FILE -->

<!-- FILE: deck/slides/s09.js -->
```js
{ const s = await figma.getNodeByIdAsync("S9"); wipeTpl(s);
addChip(s,182,30,780,54,"ASIAN PAINTS ALCHEMY  |  CASE STUDY 1: WHITENESS",C.primaryDeep,C.white,22);
addChip(s,1430,30,300,54,V.team.name,C.primaryDeep,C.white,22);
TL(s,0,250,104,"THANK YOU",{family:"Poppins",style:"ExtraBold",color:C.primary,centerAt:960});
TL(s,0,420,30,"Whiter with less TiO2: keep the rutile, hold it in air, seal the air in",{family:"Poppins",style:"Bold",color:C.primaryDeep,centerAt:960,maxW:1500,min:24});
TL(s,0,480,24,V.sav+" less TiO2 per m² at the same contrast ratio and brightness, in two coats painters already apply",{family:"Inter",style:"Bold",color:C.ink,centerAt:960,maxW:1500,min:22});
TL(s,0,600,32,V.team.name,{family:"Poppins",style:"Bold",color:C.primary,centerAt:960});
teamBT(s,380,656,[300,640,220]);
guardAP(s); results.push({slide:s.id,total:s.findAll(()=>true).length,top:s.children.length}); }
```
<!-- END FILE -->

## D2. Figma setup and validators

<!-- FILE: deck/setup.js -->
```js
// Prepares the master file KJQkGsLgbeLU9vNy24p78y. Slide 1 (1:42) is the Asian Paints cover and stays exactly as given.
// Slide 2 (2:40) is the template background; it becomes our cover, and seven clones of it become slides 3 to 9.
// Safe to rerun: it counts slides that already carry the template and never makes a second set.
await Promise.all([{family:"Poppins",style:"Bold"},{family:"Poppins",style:"ExtraBold"},{family:"Inter",style:"Semi Bold"},{family:"Inter",style:"Bold"}].map(f=>figma.loadFontAsync(f)));
const s1=await figma.getNodeByIdAsync("1:42"), s2=await figma.getNodeByIdAsync("2:40");
if(!s1||!s2) return {error:"slide 1:42 or 2:40 not found; read the grid and report"};
const isImg=n=>n.type==="RECTANGLE"&&Array.isArray(n.fills)&&n.fills.some(f=>f.type==="IMAGE");
const bg1=s1.children.find(isImg), bg2=s2.children.find(isImg);
if(!bg1||!bg2) return {error:"background image rectangle missing", s1:s1.children.map(c=>c.name), s2:s2.children.map(c=>c.name)};
bg1.name="TPL: background"; bg2.name="TPL: background"; bg1.locked=true; bg2.locked=true;
const grid=figma.currentPage.children.find(c=>c.type==="SLIDE_GRID");
const flat=()=>grid.children.flatMap(r=>r.children);
const tplSlides=()=>flat().filter(s=>s.id!==s1.id && s.children.some(c=>String(c.name||"").startsWith("TPL:")));
let guard=0, method="clone"; const fresh=[];
while(tplSlides().length<8 && guard++<10){
  let made=null;
  try{ made=s2.clone(); }catch(e){ made=null; }
  if(!made || !flat().some(s=>s.id===made.id)){
    if(made){ try{ made.remove(); }catch(e){} }
    method="createSlide";
    const ns=figma.createSlide(); const b=bg2.clone(); ns.appendChild(b); b.x=0; b.y=0; b.name="TPL: background"; b.locked=true; made=ns; }
  fresh.push(made.id);
}
// A clone of slide 2 made after our cover exists would copy the cover: a fresh clone keeps only its background.
// Slides made by an earlier run are never touched.
const ours=tplSlides().slice(0,8);
ours.filter(s=>fresh.includes(s.id)).forEach(s=>s.children.slice().forEach(c=>{ if(!String(c.name||"").startsWith("TPL:")) c.remove(); }));
if(s2.id!==ours[0].id) return {error:"slide 2:40 is not first after the cover; report the grid", ours:ours.map(s=>s.id)};
const extra=flat().filter(s=>s.id!==s1.id && !ours.some(o=>o.id===s.id));
figma.setSlideGrid([[s1,...ours,...extra]]);
const names=["01 Asian Paints cover","02 Our cover","03 The technology","04 The challenge","05 Why it is unique","06 Mechanism and proof","07 Cost and scale","08 Annexure","09 Thank you"];
[s1,...ours].forEach((s,i)=>{ s.name=names[i]; });
const fonts=await figma.listAvailableFontsAsync();
const need=[["Poppins","Bold"],["Poppins","ExtraBold"],["Inter","Semi Bold"],["Inter","Bold"]];
return {method, count:1+ours.length, ids:[s1.id,...ours.map(s=>s.id)], extra:extra.map(s=>({id:s.id,children:s.children.length})),
  tplCheck:ours.map(s=>s.children.filter(c=>String(c.name||"").startsWith("TPL:")).length),
  fontsOk:need.map(n=>fonts.some(f=>f.fontName.family===n[0]&&f.fontName.style===n[1]))};
```
<!-- END FILE -->

<!-- FILE: deck/_v1.js -->
```js
await Promise.all([{family:"Poppins",style:"Bold"},{family:"Poppins",style:"ExtraBold"},{family:"Inter",style:"Semi Bold"},{family:"Inter",style:"Bold"}].map(f=>figma.loadFontAsync(f)));
const ids=IDS; const issues=[]; const KEY=/^(PANEL|CARD|KPI|TABLE|ZONE):/;
const KEEP=[[0,0,165,122,"Asian Paints logo"],[1745,0,1920,118,"Alchemy mark"],[1605,995,1920,1080,"Unstop mark"],[0,1060,1920,1080,"purple foot bar"]];
for(const id of ids){ const s=await figma.getNodeByIdAsync(id);
  const tpl=s.children.filter(c=>String(c.name||"").startsWith("TPL:")); if(tpl.length!==1) issues.push({s:s.name,t:"templateLayer",count:tpl.length});
  else if(s.children.indexOf(tpl[0])!==0) issues.push({s:s.name,t:"templateNotAtBack"});
  const ch=s.children.filter(c=>KEY.test(c.name)).map(c=>({n:c.name,x:c.x,y:c.y,w:c.width,h:c.height}));
  for(let i=0;i<ch.length;i++)for(let j=i+1;j<ch.length;j++){ const a=ch[i],b=ch[j];
    const ox=Math.min(a.x+a.w,b.x+b.w)-Math.max(a.x,b.x), oy=Math.min(a.y+a.h,b.y+b.h)-Math.max(a.y,b.y);
    if(ox>=4&&oy>=4) issues.push({s:s.name,t:"overlap",a:a.n,b:b.n}); }
  for(const c of s.children){ const n=String(c.name||""); if(n.startsWith("TPL:")) continue;
    if(c.x<-1||c.y<-1||c.x+c.width>1921||c.y+c.height>1081) issues.push({s:s.name,t:"bounds",n,x:Math.round(c.x),y:Math.round(c.y)});
    for(const k of KEEP) if(c.x<k[2]&&c.x+c.width>k[0]&&c.y<k[3]&&c.y+c.height>k[1]) issues.push({s:s.name,t:"keepOut",zone:k[4],n:n.slice(0,30)});
    if(KEY.test(n) && c.y+c.height>1024) issues.push({s:s.name,t:"belowContent",n}); }
  const hl=s.children.find(c=>c.name==="HEADLINE"); if(hl&&hl.height>111) issues.push({s:s.name,t:"headline3lines"});
  const src=s.children.find(c=>c.name==="SOURCE"); if(src&&src.height>22) issues.push({s:s.name,t:"source2lines"});
  for(const t of s.findAllWithCriteria({types:["TEXT"]})){ const p=t.parent; if(!p||p.type==="SLIDE") continue;
    const tb=t.absoluteBoundingBox, pb=p.absoluteBoundingBox;
    if(tb.x+tb.width>pb.x+pb.width+1||tb.y+tb.height>pb.y+pb.height+1) issues.push({s:s.name,t:"textOut",chars:t.characters.slice(0,40),parent:p.name});
    if(t.textAutoResize==="NONE"){ const k=t.clone(); p.appendChild(k); k.textAutoResize="HEIGHT";
      if(k.height>t.height+2) issues.push({s:s.name,t:"cellWrap",chars:t.characters.slice(0,40),parent:p.name}); k.remove(); } } }
return {clean:issues.length===0,count:issues.length,issues:issues.slice(0,80)};
```
<!-- END FILE -->

<!-- FILE: deck/_sweeps.js -->
```js
await Promise.all([{family:"Poppins",style:"Bold"},{family:"Poppins",style:"ExtraBold"},{family:"Inter",style:"Semi Bold"},{family:"Inter",style:"Bold"}].map(f=>figma.loadFontAsync(f)));
const ids=IDS; const MUST=MUSTLIST;
const BAN=["here's","let's","bottom line","delve","game-changer","unlock","it's not just","make no mistake","landscape","robust","seamless","holistic","tapestry","paradigm","navigate","revolutioni","cutting-edge","leverage","empower","transformative","journey","synergy","world-class","best-in-class","next-gen","reimagine","supercharge","harness","crucial","pivotal","furthermore","moreover","in today's","ever-evolving","imagine","ecosystem","testament","elevate","what if","picture this","dive into","groundbreaking","state-of-the-art","plethora","myriad","underscore","showcase","foster","bolster","spearhead","nuanced","intricate","meticulous","realm","fast-paced","in conclusion","it is important to note","game changer","revolutionary","breakthrough"];
const ABSENT=["Dayita","Gursimran","SwiftKart","SwasthyaGrid","HarvestBox","Dream11","Paytm","Liminal","Perennial","Setu","Satoshi","TODO","TBD","Lorem","xyz","undefined","NaN","Rs ","Rs.","ChatGPT","proven in the field","commercially proven"];
let radiusFixed=0, money=0; const fontLow=[]; const copy=[]; const density=[]; let all=""; const tpl=[];
for(const id of ids){ const s=await figma.getNodeByIdAsync(id);
  tpl.push({slide:s.name,template:s.children.filter(c=>String(c.name||"").startsWith("TPL:")).length});
  const nodes=s.findAll(()=>true); density.push({slide:s.name,nodes:nodes.length});
  for(const nd of nodes){ if(nd.name==="CARD: MONEYSHOT") money++; if(String(nd.name||"").startsWith("TPL:")) continue;
    if(nd.type!=="ELLIPSE" && "cornerRadius" in nd && typeof nd.cornerRadius==="number" && nd.cornerRadius!==0){ nd.cornerRadius=0; radiusFixed++; } }
  for(const t of s.findAllWithCriteria({types:["TEXT"]})){ const c=t.characters; all+=" "+c;
    if(typeof t.fontSize==="number" && t.fontSize<22){ let ok=t.name==="SOURCE"||t.name==="FINEPRINT"||t.name==="BIBLIO"||c.startsWith("Source:")||(t.name==="SEC"&&t.fontSize>=18); let p=t.parent;
      while(p && !ok){ if(p.name && (p.name.startsWith("LOGO:")||p.name.startsWith("IMG:"))) ok=true; p=p.parent; }
      if(!ok) fontLow.push({slide:s.name,size:t.fontSize,chars:c.slice(0,40)}); }
    if(/[—–]/.test(c)) copy.push({slide:s.name,issue:"dash",chars:c.slice(0,60)});
    if(c.includes("?")||c.includes("!")) copy.push({slide:s.name,issue:"question or exclamation",chars:c.slice(0,60)});
    const low=c.toLowerCase(); for(const b of BAN) if(low.includes(b)) copy.push({slide:s.name,issue:"banned: "+b,chars:c.slice(0,60)}); } }
return {radiusFixed, moneyshot:money, fontLow, copy, missing:MUST.filter(m=>!all.includes(m)), presentBad:ABSENT.filter(a=>all.includes(a)), density, template:tpl, slides:ids.length};
```
<!-- END FILE -->

## X1. Bootstrap

<!-- FILE: extract.py -->
```python
import re, io, pathlib
CF = pathlib.Path(__file__).resolve().parent
t = io.open(CF / "PLAN.md", encoding="utf-8").read().replace("\r", "")
n = 0
for m in re.finditer(r"<!-- FILE: ([^\n]+?) -->\n```[a-z]*\n(.*?)\n```\n<!-- END FILE -->", t, re.S):
    if m.group(1).strip() == "extract.py": continue
    p = CF / m.group(1).strip(); p.parent.mkdir(parents=True, exist_ok=True)
    io.open(p, "w", encoding="utf-8", newline="\n").write(m.group(2) + "\n"); n += 1; print("wrote", p.relative_to(CF).as_posix(), len(m.group(2)))
for d in ("research/raw", "research/parts", "model", "deck/build", "deck/shots", "deck/logos", "deck/derived"): (CF / d).mkdir(parents=True, exist_ok=True)
print("files", n)
```
<!-- END FILE -->

## X2. Research assembly and PDF

<!-- FILE: research/assemble.py -->
```python
# ===== ALCHEMY ASSEMBLE v1 (from the HarvestBox assembler) =====
"""Assemble alchemy-whiteness-research.md from the writer parts and generated appendices, then run the acceptance checks.
  python -X utf8 asian-paints-alchemy/research/assemble.py md     assemble and check
  python -X utf8 asian-paints-alchemy/research/assemble.py pdf    build build_pdf.py from the Dream11 renderer and render the PDF"""
import re, sys, json, io, pathlib, subprocess
R = pathlib.Path(__file__).resolve().parent; AP = R.parent; ROOT = AP.parent
HEADER = """# Whiter with Less TiO2: Asian Paints Alchemy, Case Study 1

**Keep the rutile, hold it in a network of air, and seal the air in: a two-coat white that needs 39% less TiO2 per m² in our optical model, with the four Alchemy problem statements researched side by side**

Team IdeaForge: Harsh Kawatra (Delhi Technological University, Team Leader) · Anuj Gambhir (Delhi Technological University, Member)

Prepared for: Asian Paints Alchemy, case study round, October 2026

---

"""
BAN = ["here's", "let's", "bottom line", "delve", "game-changer", "unlock", "it's not just", "make no mistake", "landscape", "robust", "seamless",
       "holistic", "tapestry", "paradigm", "navigate the", "revolutionis", "revolutioniz", "cutting-edge", "leverage", "empower", "transformative",
       "journey", "synergy", "world-class", "best-in-class", "next-gen", "reimagine", "supercharge", "harness", "crucial", "pivotal", "furthermore",
       "moreover", "in today's", "ever-evolving", "imagine if", "testament", "realm", "fast-paced", "groundbreaking", "state-of-the-art", "plethora", "myriad"]
MIN_WORDS, MIN_TABLES, MIN_ANSWERS = 70000, 130, 28
def rd(p): return io.open(p, encoding="utf-8").read().replace("\r", "")
def demote(t): t = re.sub(r"^# .*\n", "", t, count=1); return t.strip()
def md():
    parts = [rd(R / "parts" / ("part-%s.md" % x)).strip() for x in "ABCDEF"]
    body = "\n\n".join(parts)
    reg = {}
    for ln in rd(R / "raw" / "sources.md").splitlines():
        m = re.match(r"^\| (S\d+) \| (.+?) \| (.+?) \| (.*?) \|", ln)
        if m: reg[m.group(1)] = (m.group(2), m.group(3))
    cited = sorted({"S" + n for grp in re.findall(r"\[([^\]]*S\d+[^\]]*)\]", body) for n in re.findall(r"S(\d+)", grp)}, key=lambda s: int(s[1:]))
    missing = [c for c in cited if c not in reg]
    app_a = "| ID | Source | Available at |\n|---|---|---|\n" + "\n".join("| %s | %s | %s |" % (s, reg[s][0], reg[s][1]) for s in cited if s in reg)
    app_b = demote(rd(AP / "model" / "model_tables.md"))
    doc = (HEADER + body + "\n\n## Appendix A: Bibliography\n\nSources were opened and checked in October 2026. Only sources cited in the text are listed.\n\n" + app_a +
           "\n\n## Appendix B: Model tables\n\n" + app_b + "\n\n" + rd(R / "parts" / "appendix-C.md").strip() + "\n\n" + rd(R / "parts" / "appendix-D.md").strip() + "\n")
    io.open(R / "alchemy-whiteness-research.md", "w", encoding="utf-8", newline="\n").write(doc)
    text = doc.split("\n---\n", 1)[1]
    heads = re.findall(r"^#{2,3} (.+)$", doc, re.M)
    res = dict(words=len(doc.split()), tables=len(re.findall(r"^\|[ :|-]+\|\s*$", doc, re.M)), dashes=len(re.findall("[—–]", doc)),
               exclamations=text.count("!"), question_headings=[h for h in heads if h.strip().endswith("?")],
               banned={b: len(re.findall(re.escape(b), doc, re.I)) for b in BAN if re.search(re.escape(b), doc, re.I)},
               answers=len(re.findall(r"^\*\*Answer\.\*\*", doc, re.M)), cited_S=len(cited), missing_S=missing,
               dup_headings=sorted({h for h in heads if heads.count(h) > 1})[:10],
               ai_statement=len(re.findall(r"generated (by|with|using) (AI|artificial intelligence)|AI-use|AI use disclosure", doc, re.I)),
               untagged_number_lines=sum(1 for ln in body.splitlines() if re.search(r"₹|\d%", ln) and not ln.startswith("|") and not ln.startswith("#") and not re.search(r"\[(W-|T-|B-|A-|A\d|M\]|T\d|S\d)", ln)))
    print(json.dumps(res, indent=1, ensure_ascii=False))
    ok = (res["words"] >= MIN_WORDS and res["tables"] >= MIN_TABLES and res["dashes"] == 0 and res["exclamations"] == 0 and not res["question_headings"]
          and not res["banned"] and res["answers"] >= MIN_ANSWERS and not res["missing_S"] and not res["dup_headings"] and res["ai_statement"] == 0)
    print("ASSEMBLY PASS" if ok else "ASSEMBLY FAIL"); sys.exit(0 if ok else 1)
def pdf():
    src = rd(ROOT / "iim-lucknow-pivot" / "research" / "build_pdf.py")
    def rep(a, b, n):
        nonlocal src
        assert src.count(a) == n, (a[:50], src.count(a)); src = src.replace(a, b)
    rep("dream11-pivot-research", "alchemy-whiteness-research", 4)
    rep("Dream11: Life After the Ban  |  Team IdeaForge", "Whiter with Less TiO2  |  Team IdeaForge", 1)
    rep("else 'Dream11: Life After the Ban'}", "else 'Whiter with Less TiO2'}", 1)
    rep("IIM Lucknow  |  PIVOT '26  |  Round 1 research deliverable", "Asian Paints Alchemy  |  Case Study 1  |  Research deliverable", 1)
    rep("--p:#C4161C; --pd:#5E0A0E; --a:#F5C518; --tint:#FDE0E0;", "--p:#5A2D91; --pd:#33175E; --a:#F8B01A; --tint:#E9E1F6;", 1)
    rep("color: #C4161C; }", "color: #5A2D91; }", 1)
    io.open(R / "build_pdf.py", "w", encoding="utf-8", newline="\n").write(src)
    r = subprocess.run([sys.executable, "-X", "utf8", str(R / "build_pdf.py")], capture_output=True, text=True, encoding="utf-8")
    print(r.stdout[-600:], r.stderr[-600:]); p = R / "alchemy-whiteness-research.pdf"
    print("PDF", p.exists() and p.stat().st_size)
if __name__ == "__main__": {"md": md, "pdf": pdf}[sys.argv[1]]()
```
<!-- END FILE -->

## X3. The four briefs, transcribed with IDs (verbatim)

<!-- FILE: case/01-briefs.md -->
```markdown
# Asian Paints Alchemy: the four case studies (verbatim transcription with reference IDs)

Source files: asian-paints-alchemy/raw/Asian_Paints_Alchemy_Case_Study_1 (2).pdf to _4 (2).pdf; submission template images
raw/Case & Submission_Submission Front (2).jpg and Inside (1).jpg. Platform partner: Unstop. Case IDs: W (Case 1, whiteness),
T (Case 2, thermal), B (Case 3, bio-based), A (Case 4, AI and characterisation), G (general).

## G. General
| ID | Text |
|---|---|
| G1 | The submission template has a front cover (purple, Asian Paints and Alchemy marks, Platform Partner Unstop) and an inside page (white, Asian Paints logo top left, Alchemy mark top right, Platform Partner Unstop bottom right, purple bar at the foot) |
| G2 | Each case: "Do not restrict your ideas to solutions from coatings industry only. Innovative and original ideas will be scored higher and will have a greater chance to be selected for the next round. Simply reproducing an AI generated idea without original thinking will greatly reduce the chance of qualification. Wherever any content is taken or generated via AI, it should be clearly mentioned." (Case 4 carries the AI sentences only.) |
| G3 | Each case: "While a proof of concept or prototype is preferred and will be given extra points, extensive reading and coming up with an innovative idea or solution from a different industry or different areas of science will also enable the selection to the next round." |

## Case Study 1: Future of Whiteness Development through Material Science
| ID | Text |
|---|---|
| W-B1 | Whiteness is one of the most important visual attributes in the paint and coatings industry. It directly impacts brightness, opacity, hiding power, aesthetics and perceived product quality. For more than a century, titanium dioxide has been the dominant white pigment due to its exceptionally high refractive index, excellent light scattering efficiency, and durability. Today, it remains the benchmark material for achieving superior whiteness and opacity in architectural, industrial, automotive, and specialty coatings. |
| W-B2 | However, the paint industry is experiencing significant changes driven by sustainability requirements, environmental regulations, volatile raw material costs, and increasing pressure to reduce carbon emissions. Titanium dioxide production is energy intensive, and fluctuations in raw material availability have encouraged both academia and industry to explore alternative approaches for achieving whiteness with reduced environmental impact. The food, cosmetics, and pharmaceutical industries have begun exploring and commercializing benign substitutes for titanium dioxide in response to concerns over its potential health hazards. Polymeric opacifiers, engineered fillers, hollow polymer particles, advanced extender technologies, and nanostructured materials are some of the emerging solutions. Multidisciplinary research involving material scientists, paint and coating formulators, polymer chemists will enable an innovative solution. |
| W-O1 | The future of whiteness development will likely extend beyond conventional titanium dioxide-based formulations and move toward multifunctional and sustainable material systems. Future coatings will not simply be "white"; they may become intelligent surfaces capable of reflecting solar radiation, maintaining self-cleaning performance, resisting yellowing, improving thermal management, and contributing to building energy efficiency. Polymeric opacifiers, advanced pigment surface engineering, enhanced dispersion techniques, material science advances in nanoparticles, hybrid organic-inorganic systems, structural and bio-inspired whiteness are some of the opportunities available. Nature provides examples of extreme whiteness through micro and nano-structured architectures rather than pigments alone. At the same time, advancements in nanotechnology, photonic materials, and functional coatings are transforming the traditional understanding of whiteness. Potential benefits include higher brightness and lower carbon footprint with improved optical efficiency. |
| W-K0 | Despite significant opportunities, several technical and commercial challenges remain. |
| W-K1 | Maintaining high opacity with the alternate material or solution |
| W-K2 | Long-term durability and yellowing resistance |
| W-K3 | Dispersion challenges |
| W-K4 | Supply and economic challenges |
| W-K5 | Manufacturing complexity |
| W-S1 | Develop an innovative and scalable solution capable of enhancing whiteness for architectural, automotive and industrial coatings both water borne and solvent borne. The idea or solution may be from any of the following domains: polymeric opacifiers, film forming opacifiers, novel pigments, nano-engineered pigments, photonic band-gap materials, surface-modified pigments and extenders, dispersion and formulation optimization, structural whiteness, nature-inspired materials, hierarchical light-scattering architectures, to name a few. |
| W-S2 | The solution may involve material innovation, product innovation, process innovation and/or design innovation. |
| W-S3 | Do not restrict your ideas to solutions from coatings industry only (full text as G2). |
| W-S4 | Proof of concept or prototype preferred (full text as G3). |
| W-S5 | For example, whiteness enhancement using spacers for titanium dioxide and use of a high loading of barium sulphate to prepare ultra white paints has been widely reported. Do not restrict your ideas to such conventionally available approaches. |
| W-Q0 | The proposed solution should demonstrate a non-conventional solution for enhanced whiteness applicable for use in paints and coatings. Participants should address the following questions: |
| W-Q1 | Describe the proposed technology or concept to impart and enhance whiteness. |
| W-Q2 | What makes the solution unique? |
| W-Q3 | Explain the scientific or engineering mechanism. How does the solution impart whiteness to the coating? |
| W-Q4 | How will the material or solution be produced? |
| W-Q5 | How will it be applied or integrated into the target application? |
| W-Q6 | Give a perspective on cost (although cost will not be a barrier for the idea selection). |
| W-Q7 | Give a perspective on the handling of the raw materials used and the scalability of the idea. |
| W-R1 | Philippe, A.; Ndoli-Kessie, S.; Fricke, C.; et al. Extraction and Characterization of TiO2 Pigments from Commercial Paints for Environmental Studies. Separations, 2025, 12, 91. |
| W-R2 | Kamble, R.; et al. Characterization of Paint Formulated Using Secondary TiO2 Pigments. Journal of Coatings Technology and Research, 2018. |
| W-R3 | Sánchez, D.; et al. Accessible High-Reflectance TiO2-BaSO4 Based White Coatings as an Alternative for Energy-Efficient Surfaces. MRS Energy & Sustainability, 2025. |
| W-R4 | Curado, A.; Figueiras, R.; Gonçalves, H.; et al. Novel High-Performance ETICS Coatings with Cool Pigments Incorporation. Sustainability, 2023, 15, 9644. |
| W-R5 | Zhang, J.; et al. Insights into Composite Coatings for Improving the Performance of TiO2 Pigments. Journal of Coatings Technology and Research, 2023. |
| W-R6 | SpecialChem Editorial Team. Highly Treated TiO2 Confronts Sustainability and Circularity Issues. SpecialChem Technical Review, 2022. |
| W-R7 | Scientific Reports. Optimizing the Effect of TiO2 Nanopowder in Water-Based Paint Formulations, 2025. |

## Case Study 2: Thermal Management, Innovative Solutions for an Energy-Efficient Future
| ID | Text |
|---|---|
| T-B1 | Rising global temperatures, increasing urbanization, and growing energy consumption are creating a challenge for sustainable development. Cooling and temperature control now account for a major portion of electricity consumption in residential, commercial, and industrial sectors. The demand for thermal management in buildings, transportation systems, electronic devices, data centres, and energy storage systems continues to grow, resulting in increased energy costs and carbon emissions. To address these challenges, researchers and industries worldwide are exploring innovative thermal management technologies that can reduce heat gain, improve energy efficiency, and support sustainability goals. |
| T-O1 | Imagine a future where buildings require minimal air conditioning, vehicles remain cooler under direct sunlight, data centres consume less energy for cooling, and heat islands are significantly reduced. The next generation of thermal management solutions may originate from advanced coatings and surface technologies, smart materials and adaptive systems, solar heat reflection systems, building-integrated cooling systems, glazing systems, smart windows, passive cooling technologies, reflective surfaces, radiative cooling systems, thermal energy storage materials, phase change materials, insulation technologies, novel architectural designs and nature-inspired thermal regulation concepts. |
| T-O2 | Participants are encouraged to think beyond conventional solutions and explore innovative technologies from any scientific or engineering domain that has commercial potential. |
| T-K1 | Deliver measurable energy savings |
| T-K2 | Be economically viable |
| T-K3 | Be scalable for large-scale adoption |
| T-K4 | Should perform under diverse environmental conditions |
| T-K5 | Contribute to sustainability and carbon reduction goals |
| T-K6 | Create a competitive advantage through technological innovation |
| T-S1 | Develop an innovative and scalable thermal management solution capable of reducing energy consumption, improving thermal comfort, or enhancing temperature control in one or more of the following application areas: Buildings and architectural facades, windows and glass systems, roofs and exterior surfaces, transportation (automobiles, railways, aerospace), consumer products, data centres, EV battery systems, industrial infrastructure, urban environments. |
| T-S2 | The solution may involve material innovation, product innovation, process innovation and/or design innovation. |
| T-S3 | As G2. |
| T-S4 | As G3. |
| T-Q0 | The proposed solution should demonstrate clear technical differentiation and a measurable impact on energy savings. Participants should address the following questions: |
| T-Q1 | What specific thermal management challenge is being addressed? Define your target application area and solution. |
| T-Q2 | Describe the proposed technology or concept. |
| T-Q3 | What makes the solution unique? |
| T-Q4 | Explain the scientific or engineering mechanism. How does the solution maintain temperature neutrality or save energy? |
| T-Q5 | Give a perspective on the handling of the raw materials used and the scalability of the idea. How will the solution be produced? |
| T-Q6 | How will it be applied or integrated into the target application? |
| T-Q7 | Define measurable success criteria such as ambient or surface temperature reduction, solar heat reflection, energy savings. Share test protocol and details on system durability. |
| T-Q8 | Give a perspective on cost (although cost will not be a barrier for the idea selection). |
| T-R1 | Yifan Zhou, Junwei Liu, Yan Liang, Junying Lai, Jinyue Yan, Recent advances in energy-saving materials for building cooling, insulation, and adaptive thermal regulation, Renewable and Sustainable Energy Reviews, Volume 239, 2026 |
| T-R2 | Santamouris, M. (Ed.). (2019). Minimizing Energy Consumption, Energy Poverty and Global and Local Climate Change in the Built Environment. Elsevier. |
| T-R3 | Levinson, R., Akbari, H., & Berdahl, P. Cool Roofs and Pavements: Increasing Solar Reflectance to Reduce Urban Heat Islands. Energy and Buildings. |
| T-R4 | Ahmed A. Alkrush, Mohamed S. Salem, O. Abdelrehim, A.A. Hegazi, Data centers cooling: A critical review of techniques, challenges, and energy saving solutions, International Journal of Refrigeration, Volume 160, 2024, Pages 246-262. |

## Case Study 3: Bio-Based Materials and Circular Solutions for a Net-Zero Future
| ID | Text |
|---|---|
| B-B1 | For more than a century, the chemical industry has relied heavily on fossil fuel-derived resources to manufacture paints, coatings, polymers, adhesives, and specialty chemicals. While these materials have driven significant technological advancements, they have also contributed to greenhouse gas emissions, resource depletion and environmental challenges. Recent global events, including pandemics, geopolitical conflicts, trade restrictions and supply chain disruptions, have further highlighted the risks associated with dependence on imported petroleum-based raw materials, resulting in shortages, price volatility and supply insecurity. As industries move toward a net-zero future, there is an increasing need to replace fossil derived carbon with renewable carbon while promoting locally sourced and sustainable feedstocks. Renewable resources such as vegetable oils, agricultural residues, lignin, cellulose, algae, microorganisms, enzymes and forestry biomass offer significant potential to develop high-performance, low-carbon materials that enhance circularity and supply-chain resilience. |
| B-B2 | Asian Paints Limited has already advanced this journey through innovations such as Nilaya Naturals, renewable-content products, recycled-content solutions, waterborne technologies and low-VOC formulations. The next challenge is to identify newer biobased or bioderived materials, develop scalable, commercially viable and high-performance renewable materials that can effectively replace conventional fossil-derived alternatives and accelerate the transition to a sustainable, net-zero economy. |
| B-O1 | The transition to a net-zero future offers an unprecedented opportunity to redesign the materials ecosystem using renewable and circular resources. Advances in green chemistry, biotechnology, synthetic biology, and materials engineering are enabling the development of bio-based polymers, additives, pigments, and specialty materials from renewable feedstocks such as biomass, agricultural residues, algae, and carbon dioxide. |
| B-O2 | Imagine a future where: wall paints contain polymers derived entirely from renewable carbon; bio-based resins outperform conventional petrochemical materials; buildings act as long-term carbon storage systems; products are designed for circularity, recyclability, renewability, and low-carbon impact; locally sourced renewable raw materials reduce dependence on imports and improve supply resilience; waste streams are transformed into high-value materials, creating both environmental and economic benefits. |
| B-O3 | The future belongs to innovations that successfully combine performance, affordability, scalability and sustainability to accelerate the transition toward a circular and net-zero economy. |
| B-K0 | Despite significant progress, several barriers continue to hinder large-scale adoption of renewable materials. Current bio-based solutions face several barriers: |
| B-K1 | Inconsistent feedstock quality |
| B-K2 | Limited scalability |
| B-K3 | Higher cost |
| B-K4 | Performance limitations |
| B-K5 | Durability concerns |
| B-K6 | Limited industrial infrastructure |
| B-K7 | Supply chain constraints |
| B-K8 | Competition with food resources |
| B-K9 | Complex processing technologies |
| B-K10 | Innovators must address these barriers while delivering solutions that are technically feasible, economically attractive, environmentally beneficial, and scalable. |
| B-S1 | Participants are invited to develop and propose an innovative material, technology, product or process that leverages renewable carbon resources to create sustainable and scalable solutions for the coatings, materials and specialty chemicals industry. The solution may address: Renewable monomers and polymers; Renewable Functional Additives; Novel Bio-Based Pigments and Fillers; Advanced Technologies; Coatings and Specialty Materials. |
| B-S2 | This case study challenges participants to envision and develop the next generation of renewable and circular materials that can accelerate the transition toward a resilient, low-carbon, and net-zero future. |
| B-S3 | As G2. |
| B-S4 | As G3. |
| B-Q1 | Is your idea or solution in the area of raw material, monomer, polymer, additive or coating? What is the end application? |
| B-Q2 | How will the material be sourced / synthesized, processed, or manufactured? |
| B-Q3 | Is it equivalent to conventional fossil-derived materials? What are the expected performance benefits? Will it be a replacement for an existing material or a new functionality. |
| B-Q4 | Give a perspective on cost (although cost will not be a barrier for the idea selection). |
| B-Q5 | What technical, economic, regulatory and supply chain challenges must be addressed to enable large-scale implementation? |
| B-Q6 | Give the life cycle analysis (cradle to grave) for the solution you have provided. |
| B-R1 | Meier et al., Chemical Society Reviews (2007), DOI: 10.1039/B703294C |
| B-R2 | Auvergne et al., Chemical Reviews (2014), DOI: 10.1021/CR3001274 |
| B-R3 | Petrović, Polymer Reviews (2008), DOI: 10.1080/15583720701834224 |
| B-R4 | Laurichesse & Avérous, Progress in Polymer Science (2014), DOI: 10.1016/j.progpolymsci.2013.11.004 |
| B-R5 | Xia et al., Polymers (2025), DOI: 10.3390/polym17243266 |
| B-R6 | Klemm et al., Angewandte Chemie International Edition (2011), DOI: 10.1002/anie.201001273 |
| B-R7 | Hu et al., Green Chemistry (2023), DOI: 10.1039/d3gc02927a |
| B-R8 | Carrère et al., Progress in Organic Coatings (2025), DOI: 10.1016/j.porgcoat.2025.109403 |
| B-R9 | Lam et al., ACS Sustainable Chemistry & Engineering (2026), DOI: 10.1021/acssuschemeng.6c00248 |
| B-R10 | Torgal., Resources (2026), DOI: 10.1080/29965292.2025.2599796 |

## Case Study 4: Structure-Property Relationship of Polymers and Coating Formulations via Advanced Characterization and/or Modelling, Simulation and Artificial Intelligence
| ID | Text |
|---|---|
| A-B1 | Traditionally, the development of polymers and coating formulations has relied heavily on iterative experimental approaches, making the process time-consuming and resource intensive. The growing availability of advanced characterization methods, computational tools, modelling and simulation techniques is creating new opportunities to accelerate innovation in polymers and coatings. Advanced characterization techniques allow researchers to probe polymer and coating architecture, morphology, interfaces, and microstructure with unprecedented detail. Artificial Intelligence (AI) and Machine Learning (ML) tools are increasingly being utilized to establish data-driven correlations between molecular structure, formulation parameters, processing conditions, and end-use performance. This enables scientists to gain a deeper understanding of structure-property relationships and predict material performance. |
| A-B2 | The integration of characterization techniques with modelling, simulation, and AI-based approaches is enabling a more scientific understanding of how molecular design and formulation variables influence coating properties such as rheology, film formation, adhesion, durability, weatherability, dirt pickup resistance, stain resistance, microbial resistance, corrosion resistance, optical appearance, and mechanical performance including scuff, scratch, abrasion and scrub resistance. This can accelerate material discovery, reducing development cycles, thus enabling the design of next-generation polymers and coating formulations with targeted performance characteristics. |
| A-O1 | The future of materials innovation will increasingly depend on the ability to predict material performance before extensive laboratory experimentation. It will present an unique opportunity to transform materials development from an empirical process into a predictive, knowledge-driven, and digitally enabled ecosystem. |
| A-O2 | Imagine a future where: new polymers and coatings can be designed virtually before synthesis; coating formulations are optimized using AI-assisted material selection; digital twins accurately predict coating performance throughout its lifecycle; virtual experimentation significantly reduces laboratory trials and development costs; characterization data automatically feeds predictive models to accelerate learning; material degradation, weathering, corrosion, and durability can be predicted before field exposure; researchers can rapidly identify optimal formulations from thousands of potential combinations using data-driven approaches; AI provides scientific insights rather than simply generating predictions. |
| A-O3 | Advances in high-throughput material screening, multiscale modelling, inverse material design, virtual experimentation, digital twins, explainable AI, and hybrid physics-based/data-driven predictive frameworks, high-performance computing, cloud-based simulation platforms, generative AI, digital materials design, autonomous experimentation, high- and advanced characterization are creating opportunities to revolutionize how materials are discovered, developed, and commercialized. The future belongs to innovations that successfully combine computational science, experimental data, characterization, and artificial intelligence to accelerate material discovery while improving prediction accuracy, reducing costs, and enabling breakthrough performance. |
| A-K1 | Available instrumental facility to carry out microstructure analysis |
| A-K2 | Availability of high-quality, reliable, and representative experimental data |
| A-K3 | Inaccurate predictions arising from incomplete, noisy, biased, or inconsistent datasets |
| A-K4 | Bridging multiple length and time scales, from molecular structure to end-use coating performance |
| A-K5 | Complexity arising from the large number of formulation variables, raw materials, and their interactions |
| A-K6 | Limited availability of validated models for complex polymer and coating systems |
| A-K7 | Difficulty in correlating characterization data with coating properties and field performance |
| A-K8 | Model validation, experimental verification, and reproducibility of results |
| A-K9 | Managing uncertainty and ensuring reliability of predictions outside the trained data space |
| A-K10 | Scalability and industrial implementation barriers |
| A-K11 | Innovators must address these challenges while creating solutions that are scientifically robust, computationally efficient, commercially viable, and applicable to real-world materials development. |
| A-S1 | Participants are invited to develop and propose an innovative technology, methodology, platform, workflow, model, digital tool, or integrated framework that utilizes modelling, simulation, artificial intelligence, machine learning, data science, and/or advanced characterization to accelerate the discovery, development, optimization, or performance prediction of polymers, coatings, materials, and specialty chemicals. |
| A-S2 | Simply reproducing an AI generated idea without original thinking will greatly reduce the chance of qualification. Wherever any content is taken or generated via AI, it should be clearly mentioned. |
| A-S3 | While a proof of concept or prototype is preferred, extensive reading and coming up with an innovative idea or solution from a different industry or different areas of science will also enable the selection to the next round. |
| A-S4 | The idea, solution, proof of concept or prototype may be focused on architectural coatings, industrial coatings, automotive coatings, protective coatings, powder coatings, wood coatings, floor coatings, specialty coatings, water proofing, adhesives, construction chemicals and related polymer systems. |
| A-Q0 | The proposed solution should demonstrate a clear strategy for accelerating materials discovery, predicting polymer or coating properties, formulation development, performance prediction, or scientific understanding through advanced characterization and/or modelling, simulation and artificial intelligence. Participants should address the following questions: |
| A-Q1 | Which category from advanced characterization and/or modelling, simulation and AI does your solution belong to? It can one or more than one. |
| A-Q2 | What specific materials (raw material, polymer, coating, additive, pigment or filler) and/or process development challenge or structure-property prediction is being addressed? |
| A-Q3 | Describe the proposed advanced characterization techniques, methodology. |
| A-Q4 | What makes the solution unique compared with existing approaches? |
| A-Q5 | What scientific principles or computational methods underpin the solution? |
| A-Q6 | How will the solution be validated experimentally? Include specific case studies wherever possible. Demonstrate validation using either experimental data, simulation, or data available in scientific literature (Use only literature, simulation, or experimental data. Do not use assumed numerical values). |
| A-Q7 | What measurable success criteria (prediction accuracy, reduction in experimental trials and development time) will be used to evaluate performance? |
| A-Q8 | How will you ensure data confidentiality and security? |
| A-Q9 | How can the technology be integrated and implemented in industrial R&D environments? |
| A-T1 | Advanced characterization-driven understanding: Utilize or propose advanced characterization techniques including but not limited to FTIR, Raman, NMR, gel permeation chromatography, differential scanning calorimetry, dynamic mechanical analysis, thermogravimetric analysis, X-ray diffraction, scanning electron microscopy, transmission electron microscopy, atomic force microscopy, X-ray photoelectron spectroscopy, small angle X-ray scattering, small angle neutron scattering, confocal microscopy, surface and interface characterization techniques to establish robust correlations between molecular structure, microstructure, formulation parameters, and coating performance. |
| A-T2 | Polymer structure-property relationships: Chemical structure and composition, molecular weight and distribution, molecular architecture, functionality, and crosslink density, thermal, optical, mechanical, and kinetic properties, surface morphology etc. |
| A-T3 | Paints and coatings structure-property-performance relationships: Rheology and flow behaviour, shelf stability, dispersion stability, drying and curing mechanisms, film formation, adhesion, mechanical performance, weatherability and durability, corrosion resistance, chemical, and stain resistance, optical properties such as colour, gloss, and opacity etc. |
| A-T4 | Application of modelling, simulation, AI, and characterization techniques for formulation and material design: Development of new polymers, binders, additives, pigments, and coating formulations, AI-assisted and simulation-guided formulation optimization, Integration of advanced characterization data into predictive models, inverse design of polymers and coatings with targeted performance attributes. |
| A-R1 | Asian Paints: India's Biggest Data Science Company that Sells Paint, Digital Innovation and Transformation (harvard.edu) |
| A-R2 | Leveraging Big Data, Artificial Intelligence, and Machine Learning in the Coatings Industry, American Coatings Association (paint.org) |
| A-R3 | Emerging Trends in Machine Learning: A Polymer Perspective, ACS Polymers Au |
| A-R4 | Machine learning, Polymers White Paper (intellegens.com) |
| A-R5 | https://pubs.acs.org/apaccd/article-pdf/2/1/8/13897967/lg1c00035.pdf |
| A-R6 | Design of functional and sustainable polymers assisted by artificial intelligence, Nature Reviews Materials |
| A-R7 | Data-driven approaches for structure-property relationships in polymer science for prediction and understanding, Polymer Journal |
| A-R8 | https://pubs.acs.org/apaccd/article-pdf/3/3/239/3293341/lg2c00053.pdf |
| A-R9 | Explainable machine learning in materials science, npj Computational Materials |
| A-R10 | Accelerating materials discovery using artificial intelligence, high performance computing and robotics, npj Computational Materials |
| A-R11 | https://www.frontiersin.org/journals/materials/articles/10.3389/fmats.2022.818535/full |
| A-R12 | Advancements and challenges of digital twins in industry, Nature Computational Science |
| A-R13 | Artificial Intelligence in Materials by Design: Critical Review And Perspectives on Materials Informatics to Generative and Agentic Intelligence, Archives of Computational Methods in Engineering, Springer Nature Link |
```
<!-- END FILE -->
