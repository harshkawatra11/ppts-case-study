# URJAGRID for Yuva Yodha (Schneider Electric): research document, impact model and an 11-slide native Figma deck

Plan file: `C:\Users\harsh\.claude\plans\pasted-content-id-123f-working-folder-drifting-cascade.md`
Repo root (all relative paths start here): `C:\Users\harsh\Desktop\HARSH\PPTS-CASE-STUDY\nsut-innovators-court`
Working folder: `yuva-yodha/` (exists, empty)
Product code (read-only): `C:\Users\harsh\Desktop\HARSH\WEB-DEV-PROJECTS\yuvayodha-hack`

> **DEADLINE FLAG (found at planning time, re-check first).** The official FAQ at `https://www.yuvayodhatech.com/faq` lists idea submission as closing **4 October 2026, 11:59 PM IST**. If that is still true when execution starts, run the critical path in §13.2 first (deck plus the 500-word pitch). The research document follows.
>
> **What gets submitted.** Only two things: **the pitch deck** and **the 500-word pitch** (§13.5). No GitHub link, no live URL and no repository goes into either. The product is at prototype stage, and both submitted items say so honestly. The research document is the evidence base that both are written from, so it is held to the same standard.
>
> **What this plan produces.** Four deliverables for Team IdeaForge's entry to Schneider Electric's Yuva Yodha Energy Tech Hackathon, Challenge 03 (Grid Reliability: Renewable Intermittency), for the product **UrjaGrid**, which is already built:
> 1. a long research document (Markdown and PDF) that solves the case in full;
> 2. a small, auditable impact and unit-economics model whose numbers feed both the document and the deck;
> 3. an 11-slide native Figma Slides deck (1 cover, 8 core, 1 appendix, 1 thank you), consulting grade, dense, built with the `case-competition-deck` skill (**submitted**);
> 4. a 500-word pitch covering the problem, why it matters, the solution, what is new about it, and the expected impact and beneficiaries. An **Opus-class** model writes it, never a Sonnet sub-agent (§13.5) (**submitted**).
>
> **What the user locked.** Working folder `yuva-yodha`. Depth reference `mandamasterminds/`. Skill `case-competition-deck` used throughout. Deck system: `CLAUDE.md`, `.claude/`, `deck-system/`. Inspiration: `hOJVMGv9nIhDmayTT7DmOt` (Paytm, prime: the consulting density), `H3Zr4ESaceYlV54zvpkgZi` (Hisaab) and `e5VEexsLMhDampx7gvhFmM` (SwasthyaGrid) for the hackathon skeleton, and the Hisaab cover mind map redrawn here as a grid. Team IdeaForge: Harsh Kawatra and Gursimran Kaur. No hooks, no em dashes, no AI-sounding copy. Heatmaps, tables, bars, lines and graphs on every core slide. The organisers ask for an 8 to 12 slide deck covering nine named topics (§1.3). Sub-agents are used wherever work can run in parallel (§13).

---

## 0. How to read this plan

| Part | Sections | What it is |
|---|---|---|
| Ground rules | §0 to §2 | Roles, the brief with IDs, the organisers' format, integrity and language rules |
| Part I: the argument | §3 | The recommendation, the moneyshot and the eleven action titles, engineered with the skill. Not to be changed |
| Part II: facts and model | §4 to §6 | Product facts audited from the code, the external fact base with sources, the model code and its reference output |
| Part III: the research document | §7 | Section outline, writer assignments, assembly and PDF build |
| Part IV: the deck | §8 to §12 | Design system, tested preamble and slide code, Figma setup, validators, fix rules |
| Part V: execution | §13 to §15 | Step table, sub-agent prompts, recovery table, Q&A sheet, final report |

**Roles**

| Role | Model | Does | Never does |
|---|---|---|---|
| Main agent | whatever the session runs | Orchestrates, runs every shell step, applies corrections, dispatches sub-agents, writes the final report | Rewrites the argument in §3 |
| Verifiers V-A to V-D | `general-purpose`, `model: "sonnet"`, four in parallel | Re-open every source behind the fact tables in §5 and mark each row | Add claims, edit any file but their own report |
| Writers W-A to W-E | `general-purpose`, `model: "sonnet"`, five in parallel | One part of the research document each (§7) | Browse the web, change a number |
| Pitch writer P500 | `general-purpose`, **`model: "opus"`** (or the main agent itself if the session runs an Opus-class model) | The 500-word pitch, after verification and the model run (§13.5) | Run on Sonnet, invent a number, mention a link |
| Critic CR | `general-purpose`, `model: "sonnet"` | Skill critique mode on the slide screenshots | Edit layout or numbers |

Every Figma call is made by the main agent, one at a time, never in parallel and never delegated. Builds are sequential either way, and the main agent already holds the slide ids and the fix history.

**The Sonnet execution contract**

DO
1. Follow the step table in §13.1 in order and confirm each "done when" before moving on.
2. Take every code block from this file through the generator in §12.2. Do not retype code.
3. Use the slide copy exactly as written in §10. A string changes only through a fix rule (§11.6) or a verified correction (§5.6).
4. Take every displayed number from `yuva-yodha/deck/values.js`, which the model exporter builds (§6.6).
5. Log every step in `yuva-yodha/deck/build-log.md` with a `STATUS: PASS` or `STATUS: FAIL` line.
6. Use the `case-competition-deck` skill at the five touchpoints in §3.9 and log one line each.

DO NOT
1. Do not change the recommendation, the moneyshot, a FINDING sentence or a panel title, except through §11.6 or §5.6.
2. Do not add, remove, reorder or rename slides.
3. Do not invent interviews, pilots, user counts, letters of intent or quotes. UrjaGrid has not run on a real feeder. Every reliability figure is a simulation result or a model estimate, and the slide says which.
4. Do not present a WIRED or PILOT capability as LIVE (§4.3).
5. Do not write an em dash, an en dash, a hook, a rhetorical question, an exclamation mark or a banned word (§2.2).
6. Do not set `x` or `y` before `appendChild`, do not rotate rectangles to draw lines, do not use `loadAllPagesAsync`, `setPluginData` or `createImageAsync`.
7. Do not add decoration to fill space. If a slide looks thin, report it.
8. Do not modify anything under `C:\Users\harsh\Desktop\HARSH\WEB-DEV-PROJECTS\yuvayodha-hack`. The product repository is read-only for this job. Do not commit anything anywhere.

---

## 1. Context

### 1.1 Why this work exists

Team IdeaForge built UrjaGrid for Challenge 03 of the Yuva Yodha Energy Tech Hackathon run by Schneider Electric. The software is finished as a prototype (FastAPI backend, Next.js dashboard, live at `https://urjagrid-virid.vercel.app`, code at `https://github.com/harshkawatra11/urjagrid`). What is missing is the case for it: a research document that proves the problem, the fit to the brief and the numbers, and a deck in the organisers' format. The product's own `docs/IMPACT.md` is candid that its Scenario Lab reports mixed results on the metric it chose (unserved kWh). This plan therefore measures the thing the brief actually asks for, outage hours per household against a defined baseline, with a transparent model fed by the product's own network and demand engine (§6).

### 1.2 The brief, verbatim, with IDs

**Challenge 03: Grid Reliability. Renewable Intermittency.** "Making clean power dependable, neighbourhood by neighbourhood."

"The opportunity is to create affordable, neighbourhood-scale flexibility tools that combine forecasting, smart load management, demand response, shared storage and local coordination to keep electricity dependable when renewable supply falls below demand."

| ID | What the solution should achieve, as written |
|---|---|
| G1 | **Bridge Intermittency Gaps.** Ensure reliable electricity access during periods when renewable-energy supply falls below demand |
| G2 | **Stay Local and Manageable.** Create a solution that can be deployed and operated at neighbourhood or district level with minimal grid-level intervention |
| G3 | **Be Genuinely Affordable.** Make the solution viable for low-income urban and peri-urban communities, not only for well-resourced users |
| G4 | **Support the DISCOM.** Provide data, forecasting or demand-response signals that help distribution utilities manage feeder loads and reduce technical losses |

| ID | What the team should deliver, as written |
|---|---|
| D1 | A detailed solution write-up explaining how the solution works, its key assumptions and why it is suited to Indian distribution-grid conditions |
| D2 | A system or architecture diagram showing the principal components and the relevant data, energy or money flows between them |
| D3 | Supporting design artefacts such as UX wireframes or mockups, process and service designs, or data and model designs |
| D4 | A software prototype or simulation is encouraged, but not mandatory. No physical hardware build is expected |
| D5 | A measurable reliability improvement, such as a reduction in outage hours or increased supply availability during intermittency windows, measured against a defined baseline |
| D6 | An ownership, operations and maintenance model explaining who operates the solution locally, together with unit economics demonstrating affordability for low-income communities |

| ID | Ideas to get started (illustrative), as written |
|---|---|
| I1 | Software and ownership models for community or shared energy storage, including second-life batteries, with fair-access, pricing and dispatch rules |
| I2 | Local microgrid or mini-grid control software with smart load management, demand response and prioritisation of critical loads |
| I3 | Peer-to-peer energy sharing, aggregation or cooperative ownership models that pool reliability across multiple users |
| I4 | Low-cost forecasting, control or scheduling tools that anticipate renewable-energy gaps and shift flexible loads accordingly |
| I5 | DISCOM-facing analytics dashboards that predict feeder stress, identify voltage violations and recommend local demand-response actions |

| ID | Full problem context, as written |
|---|---|
| X1 | India's clean-energy future depends on scaling renewable generation many times over by 2047. However, solar and wind generation are inherently intermittent: their output changes with clouds, nightfall and weather conditions |
| X2 | As the electricity system becomes greener, millions of households and small businesses could face unreliable electricity precisely when they have become increasingly dependent on it. The challenge is no longer only to generate clean power, but to make that power dependable around the clock |
| X3 | These reliability gaps are particularly damaging at the edges of the system, including low-income urban and peri-urban neighbourhoods where outages disrupt livelihoods, education, refrigeration and small enterprises. Expensive grid-scale improvements may take considerable time to reach these communities |
| X4 | Distribution-system operators and DISCOMs therefore need local, low-cost flexibility tools, including demand response, community storage and peer-to-peer coordination, that can absorb renewable variability at feeder level without requiring major capital investment in grid reinforcement |

Key statistics printed in the brief: "Renewable generation must scale significantly by 2047", "Millions of households and businesses need dependable power", "Feeder-level flexibility solutions can balance variability". The brief gives no numbers of its own, so every number in the deck is ours and carries a source.

The three phrases that decide the argument are the brief's own: **"affordable"**, **"without requiring major capital investment"** and **"measured against a defined baseline"**.

### 1.3 The organisers' deck format

"Submit an 8 to 12 slide presentation outlining the problem statement, proposed solution, alignment to the selected challenge, key features or user journey, technical approach, innovation, expected impact, implementation roadmap, and team introduction."

| ID | Organisers' topic | Slide that answers it | Ribbon tag |
|---|---|---|---|
| O1 | Problem statement | 2 | PROBLEM |
| O2 | Proposed solution | 3 | SOLUTION |
| O3 | Alignment to the selected challenge | 4 | CHALLENGE FIT |
| O4 | Key features or user journey | 5 | FEATURES |
| O5 | Technical approach | 6 | TECH |
| O6 | Innovation | 7 | INNOVATION |
| O7 | Expected impact | 8 | IMPACT |
| O8 | Implementation roadmap | 9 | ROADMAP |
| O9 | Team introduction | 1 (team table), 9 (who runs what), 11 (team table) | none |

Eleven slides sit inside the 8 to 12 limit. The ribbon across the top of every core slide carries the organisers' own eight topic words in their order, so a judge scoring against the list finds each topic by its tag. No judging criteria or weights were published in what the team received; §5.5 records what the planning-time search found, and step V0 re-checks it.

### 1.4 Deliverables

```
yuva-yodha/
  case/01-brief.md                      §1.2 and §1.3 copied verbatim
  case/02-product-facts.md              §4 copied
  research/raw/R-A-grid-and-reliability.md
  research/raw/R-B-meters-and-regulation.md
  research/raw/R-C-flexibility-and-precedents.md
  research/raw/R-D-competition-and-costs.md
  research/raw/R-*-verification.md      written by the verifiers
  research/parts/part-A.md ... part-E.md, appendix-D-glossary.md
  research/assemble.py  build_pdf.py
  research/urjagrid-research.md  .html  .pdf
  model/extract_engine.py               reads the product repo, writes engine_dump.json
  model/engine_dump.json
  model/urjagrid_impact_model.py        the model
  model/check_values.py                 locks deck numbers to the model, writes model_tables.md
  model/model_outputs.json  model_tables.md
  submission/urjagrid-500-words.md  .txt   the 500-word pitch (submitted)
  deck/gen.py  setup.js  preamble.js  mock_figma.js  values.js  slide-ids.json
  deck/slides/s01.js ... s11.js
  deck/build/  deck/shots/  deck/photos/
  deck/build-log.md
  deck/TeamIdeaForge_UrjaGrid_preview.pdf
  qa/qa-defence.md
```
Plus one Figma Slides file named `URJAGRID | Team IdeaForge | Yuva Yodha`.

### 1.5 Locked decisions (defaults chosen at planning time; the user can change any of them before approving)

| # | Decision | Why |
|---|---|---|
| L1 | Eleven slides: cover, eight core in the organisers' order, appendix, thank you | The user's shape, inside the organisers' limit |
| L2 | The deck pitches the built product honestly: LIVE, WIRED and PILOT tags exactly as in the code | The product's own rule, and Schneider engineers will check |
| L3 | The impact number is outage hours per household against a rotational-shedding baseline, from a model fed by the product's engine, labelled as a simulation estimate | Deliverable D5, and the product's own Scenario Lab metric is not fit for this purpose (§4.5) |
| L4 | The product repository is read-only. Nothing is fixed, committed or redeployed | The deck must describe what exists |
| L5 | Real screenshots of the live dashboard go on slide 5 as photos; every chart and diagram is native Figma | `CLAUDE.md` §6 step 7 |
| L6 | Team table shows Harsh Kawatra (Delhi Technological University, Team Leader) and Gursimran Kaur (Guru Gobind Singh Indraprastha University, Member) | The user named these two; institutions and roles as on the SwasthyaGrid deck |
| L7 | Palette: deep green, electric lime and ink, with amber for "lifeline" and red for "blackout" | Reads as energy, sits beside Schneider's green without copying its logo colour, and gives the brownout-versus-blackout story its own colour code |
| L8 | No user interviews are claimed. Slide 9 carries a Customer Validation Plan | `CLAUDE.md` §5 |
| L9 | Submission = deck + 500-word pitch only. No repository link, live URL or "deployed" claim appears in either; the product is described as a working prototype | The user's instruction of 4 Oct 2026 |
| L10 | The 500-word pitch is written by an Opus-class model after the facts are verified and the model has run | The user's instruction of 4 Oct 2026: the pitch carries the whole presentation |

---

## 2. Ground rules

### 2.1 Content integrity (`CLAUDE.md` §5, binding)

1. **Three kinds of number, never mixed.** `[P]` product fact read from the code or its committed data (§4). `[S##]` external source (§5). `[M]` model output, built from `[P]` inputs and `[A##]` stated assumptions (§6). A model output is always called an estimate or a simulation result on the slide.
2. **No fabricated primary research.** No interview, survey, pilot, letter of intent or willingness-to-pay figure exists. The deck shows a Customer Validation Plan.
3. **India-first numbers** in ₹, lakh and crore, from Indian sources. Foreign precedents are named as precedents and never converted into Indian results.
4. **Every number has a source line** on its slide, bottom right, 14pt.
5. **A corrected figure is corrected everywhere.** After any change, grep `yuva-yodha/` for the old value.
6. **Competitor cells** in the parity matrix come only from the vendor's own public page. A silent page gives `n/s` (not stated), never `No`.
7. **Build status is never inflated.** The only source for a LIVE, WIRED or PILOT tag is §4.3.
8. **The honest limits go in the deck, not only the document.** Slide 10 states that the reliability gain is simulated, that the adapters are simulators, that the backend is not yet deployed and that the product's own Scenario Lab showed mixed results on unserved energy.

### 2.2 Language standard (standing rule, applies to the plan's outputs: deck, document, Q&A sheet)

- Zero em dashes (U+2014) and zero en dashes (U+2013). Ranges use "to". Negatives use `−` (U+2212).
- No hooks: no question in the deck's own voice, no "imagine", no teaser, no exclamation mark. The only allowed question is reported speech in the Q&A sheet ("The panel will ask: ...").
- Banned, case-insensitive, 0 hits: delve, landscape, unlock, game-changer, here's, let's, bottom line, it's not just, make no mistake, in today's, fast-paced, seamless, leverage (verb), robust, tapestry, testament, navigate the, realm, holistic, synergy, paradigm, cutting-edge, revolutioniz, revolutionis, crucial, pivotal, furthermore, moreover, in conclusion, it is worth noting, empower, supercharge, reimagine, next-gen, world-class, best-in-class, transformative, harness, journey.
- Voice: the way a consultant writes to a utility's Director (Distribution). Plain verbs, concrete nouns, the number next to the claim, varied sentence length.
- FINDING sentences and panel titles are findings, with a number wherever one exists.
- Hindi words used on slides are transliterated in Latin script (for example "bijli mausam") so that Poppins and Inter render them. No Devanagari text is placed in Figma.

### 2.3 Standing memory that applies

- `feedback_no_em_dash_no_hooks.md`: §2.2, and four to six distinct visual forms on every content slide.
- `feedback_cover_style.md`: no KPI-card row on the cover; the team is a table with Team Members, Institution, Role; the same table repeats, centred, on the thank-you slide.
- `feedback_no_coauthor_trailer.md`: nothing is committed in this job; if the user later commits, no Co-Authored-By line.
- `project_swasthyagrid_gcp.md`: the LIVE, WIRED, PILOT honesty rule and the two-member team carry over.
- `design_schema_innovators_court.md` (python-pptx route) does not apply; the user asked for Figma native slides.

### 2.4 Files to read before starting (main agent)

1. This plan, whole.
2. `CLAUDE.md` §0 to §8 and `deck-system/slide-archetypes.md`.
3. `.claude/skills/case-competition-deck/SKILL.md`, `references/structure.md`, `references/archetypes.md`, `references/rhetoric.md`, `references/critique_rubric.md`, `references/case_types/social_impact.md`, `references/case_types/operations.md`.
4. `fintechstico-submission/deck/preamble.js` and `fintechstico-submission/deck/mock_figma.js` (the helper library and the offline pre-flight this deck reuses).
5. `mandamasterminds/research/satoshi-gate-research.md`, the first 160 lines and the section list (the depth bar for the research document).
6. In the product repository, read-only: `README.md`, `docs/WRITEUP.md`, `docs/IMPACT.md`, `docs/DEPLOYMENT.md`.

---

# PART I: THE ARGUMENT (engineered with the `case-competition-deck` skill; do not change)

## 3. The argument

### 3.1 Case type and audience

The skill has no energy-utility guide. The nearest fits are **social impact** (low-income beneficiaries, cost per outcome, theory of change, counterfactual) and **operations** (a closed control loop, throughput, change management). This plan uses both and labels the adaptation honestly, as the skill's "Calibration honesty" section asks. The audience is a Schneider Electric panel of grid and energy engineers, scoring against the published weights: Problem and idea 20%, Architecture and design 20%, **Impact and measurability 25%**, Feasibility and affordability 20%, Sustainability 15% [S32]. The register is a consultant writing to a utility's Director (Distribution): engineering-literate, number-first and plain about what is simulated.

### 3.2 The contrarian recommendation

| | The obvious answer the brief invites | Our answer |
|---|---|---|
| What fills the evening gap | Add assets: a community battery, a microgrid, a peer-to-peer market | Use the asset already paid for: the load-limit switch inside every RDSS smart meter [S17, S16], driven by software |
| What happens when supply is short | Rotational feeder shedding: the whole lane goes dark | A ladder of softer levers, then a time-boxed lifeline limit (300 W per home, 500 W per shop) for the few homes that still have to give, and a blackout only as the last step |
| Who decides | A roster, or an algorithm | A named Junior Engineer approves every plan; the engines compute and a language model only phrases |
| What it costs a low-income home | Battery or inverter capex, or a tariff for storage | ₹0. The DISCOM pays ₹383 a meter a year (base case, est.) |
| Where storage goes | First | Lever 4: it plugs in when it exists, and storage dispatch is coded today against a simulator |

**Why the contrarian line holds.** The brief itself asks for tools that work "without requiring major capital investment in grid reinforcement" [X4] and says "no physical hardware build is expected" [D4]. India awarded 10.4 GW of standalone storage in 2025, but only about 1.8 GWh was installed by March 2026 [S45]. Smart meters are already on 7.24 crore walls [S16]. Eskom showed limiting beats cutting on 9,000 homes, with 15.3 MW of relief [S33].

**Where the line is weak, said before a judge says it.**
- Grid-scale storage is now cheap: ₹2.1 to 2.8 per kWh cycled [S46].
- Storage already serves low-income homes. Kilokari serves over 12,000 low-income consumers [S47].
- The brief lists dashboards and forecasting tools too, so it is not storage-led. We never say the brief is wrong. We say the cheapest flexible asset in a low-income lane is already installed, and storage becomes a lever rather than a prerequisite.
- In real meters a limit trips the relay when a home stays above it. Two hours' notice, the rebate and auto-reconnect are the answer (§14 Q3).

### 3.3 The moneyshot (exactly one; it lives on slide 8)

**"4.2 h to 0.4 h"**: hours without supply per home on the simulated heatwave day, today against UrjaGrid (base case). That is a 90% cut, on 48 transformers and 7,000 connections [M]. The decomposition sits on the same slide: bear 0.83 h, base 0.40 h, bull 0.00 h; three day types; a 0 to 40% evening-dip stress line; and the cost of ₹383 a meter a year with ₹0 to the home. Every appearance of the moneyshot carries "simulated" or "est.".

### 3.4 Foreshadowing, symmetry, double synthesis

- **Seed.** Slide 2, panel B3, "A LIMITER ON EVERY WALL, UNUSED", plants the alternative six slides before the payoff on slide 8. The cover's thesis card states it once in plain words.
- **Symmetric treatment.**
  - Slide 4 A2 scores six options on one row set of five tests.
  - Slide 7 A1 scores six products on one row set of six features.
  - Slide 8 shows the same three day types for "today" and "UrjaGrid".
- **Double synthesis.** Slide 6 so-what opens "Conclusively:". Slide 8 so-what opens "Therefore:".
- **Third-party validation**, named and quoted only from read sources:
  - IEA on cost [S37]
  - Eskom's customer finding [S33]
  - Germany's §14a law [S35]

### 3.5 Frameworks, each visible where listed

| Framework | Where |
|---|---|
| Issue tree / root cause | Slide 2 B1 |
| Weighted option filter (MECE) | Slide 4 A2 |
| Theory of change (inputs to impact) | Slide 3 (levers, tiers, timeline); research doc §10 |
| Feature-parity matrix | Slide 7 A1 |
| Counterfactual comparison (today vs solution, same rules) | Slide 8 A2, A3 |
| Scenario analysis (bear, base, bull) and sensitivity | Slide 8, slide 10 A2 |
| Unit economics, cost per outcome | Slide 8 B2, B3 |
| RACI | Slide 9 A2 |
| Risk register, P × I with 1:1 mitigation | Slide 9 B2 |
| People, Process, Technology / honest status | Slide 6 |
| Customer Validation Plan | Slide 9 B3 |

### 3.6 Slide list, archetypes and action titles (final; the FINDING text lives in `values.js`)

| # | Ribbon | Archetype (skill / `deck-system`) | FINDING (headline) |
|---|---|---|---|
| 1 | none | Cover; Hisaab-style mind map redrawn as a 3 × 3 grid with the loop's eight steps around an UrjaGrid hub | none (thesis card: "Brownout, never blackout.") |
| 2 | PROBLEM | Context funnel: two charts + KPI tiles + issue tree + heatmap + table | V.s2.finding |
| 3 | SOLUTION | Deep dive on the alternative: lever table + meter wall + tier table and cap heatmap + timeline + badge list | V.s3.finding |
| 4 | CHALLENGE FIT | Brief map + weighted option filter + criteria bar + precedent table + timing bars | V.s4.finding |
| 5 | FEATURES | Product mockups (3 real screenshots) + phone + role table + role-by-channel heatmap + count tiles | V.s5.finding |
| 6 | TECH | Six-layer architecture with flows + engine table + status bar + thermal table + formulas | V.s6.finding |
| 7 | INNOVATION | Parity heatmap + equity bars + badge list + stack diagram + borrowed-and-changed table | V.s7.finding |
| 8 | IMPACT | **Moneyshot** card + counterfactual bars + stress line + cap mix + cost waterfall + ₹/kW bars | V.s8.finding |
| 9 | ROADMAP | Gantt + RACI heatmap + WIRED-to-LIVE table + risk register + validation plan | V.s9.finding |
| 10 | (appendix, no active tag) | Assumptions table + results table + limits + definitions + sources | V.s10.finding |
| 11 | (no active tag) | Thank you, centred, same team table as the cover | none |

Read in order, the FINDING sentences must run: problem, answer, fit, use, build, novelty, proof, path, evidence. Step V8 in §13.1 prints them as one paragraph to check this.

### 3.7 Headline numbers (the only values that may appear in the deck or the 500-word pitch)

| Number | Meaning | Tag |
|---|---|---|
| 2.57 GW vs 0.18 GW; 270.8 GW | Shortage after sunset vs in solar hours, on the 21 May 2026 record-demand day | [S02] |
| 36 vs 6 days; 36 GW to 74 GW | Days short after sunset vs in solar hours (Apr to May 2026); evening ramp, May 2023 to May 2026 | [S03] |
| about 2 h a day; 3.5 h in small towns; 1.3 h at district HQ; feeder log 3.5 h and 4.8 h a month | Measured household outage in Mathura and Bareilly, 2019 | [S07] |
| about 10%, 1.3 million | Distribution transformers that fail in a year, as reported from a CEA meeting | [S10] |
| 70% | Areas outside 230 V ±6% for over half the time | [S07] |
| 19.54% vs 15.04% | UP vs national AT&C loss, FY25 | [S11] |
| 7.24 crore installed; 20.33 crore sanctioned | Smart meters, 30 Jun 2026 | [S16] |
| 83 lakh | UP prepaid meters switched to postpaid, May 2026 | [S20] |
| 15.3 MW, 9,000 homes, 10 A | Eskom load-limiting pilot, 2023 | [S33] |
| 4.2 kW; 1 Jan 2024 | Germany §14a dimming limit | [S35] |
| 3 kW, 20% | Enedis test, Feb 2024 | [S36] |
| up to 3 times lower | IEA cost of flexibility vs new capacity | [S37] |
| 10.4 GW awarded, about 1.8 GWh installed | Indian standalone storage, 2025 to Mar 2026 | [S45] |
| ₹3,591 and ₹5,700 per kW a year | DERC-approved distribution battery capacity tariffs (Shivalik 2026, Kilokari 2024) | [S48, S47] |
| ₹2,800 to ₹3,800 a year | A home inverter and battery (₹14,000 to 19,000 over five years) | [S51], [A10, A11] |
| 20 / 20 / 25 / 20 / 15 | Judging weights | [S32] |
| 48 DTs, 12 feeders, 5 sub-divisions, 7,000 connections, 69 T0 | The product's network | [P] |
| 300 W, 500 W; 1,000/2,000 W; 500/1,000 W | Lifeline floors and cap ladder | [P] |
| 30 minutes; T−120, T−30, T−15, T+15 | Notice rule and dispatch timeline | [P] |
| 6 safety rules; 28 screens; 54 API routes; 352 + 162 = 514 tests; 15 tools | Prototype facts | [P] |
| 110.0 °C / 1.0x; 146.1 °C / 29x | Thermal model reference points | [P] |
| ₹8 a meter a month; ₹2 a unit | Fee and rebate | [P] |
| 4.2 h to 0.4 h; 90%; 0.83 / 0.40 / 0.00 | Moneyshot and its cases | [M] |
| 3.71 → 0.00; 3.58 → 0.00 | Monsoon and mild day, base | [M] |
| 62 → 9 per 100 homes; 49 capped | Meter-wall shares on the heatwave day | [M] |
| 3,402 capped; 1,751 must trim | Peak-slot caps, base | [M] |
| 27 of 48 over rating; 20 over 130%; 265% max | Exposure, heatwave day | [M] |
| ₹96 + ₹188 + ₹99 = ₹383; ₹309 / ₹547 | Cost per meter a year: fee, rebates, messages | [M], [A07, A08] |
| ₹0.29 per outage hour avoided | Base | [M] |
| ₹1,448 per kW of peak relief a year | Base | [M] |
| 1,345 / 152 / 18 / 0 hours a year | Annual outage per home: today, bear, base, bull | [M] |
| −79% | DT-hours above rating in a year, base | [M] |
| 54%; 0% for fan-and-lights and fridge-and-TV homes | Who the comfort cap constrains at the peak | [M] |
| 4 of 48 | Transformers still cut in the base case (need an upgrade) | [M] |
| 10 / 12 / 6 | LIVE / WIRED / PILOT capabilities (§4.3) | [P] |

Numbers that must never appear, because they are hand-written fixture values or stale:
- 97.2% lifeline availability; SAIDI 42.5; SAIFI 1.8; BCR 3.1; payback 7.4 months; WAPE 8.4%
- Scenario relief +607.6 and the other fixture scenario values
- "5.28 crore" and "3.90 crore" (stale meter counts)
- Any repository URL or live URL (L9)

### 3.8 Third-party anchors (quote only these, word for word)

1. IEA (Dec 2025): demand flexibility "can also deliver capacity to the grid at a cost up to three times lower than building new capacity" [S37].
2. Eskom, via SEA and GIZ (Sep 2024): load limiting was "well received and favoured by customers over loadshedding" [S33].
3. REC AMISP tender, Annexure H: "load curtailment in place of load shedding" [S18].
4. MoP Resource Adequacy guidelines (2023): "load shedding is not an option" [S22].
5. IEA, the opposing voice (Dec 2025): flexibility programmes "risk excluding these groups, reinforcing inequalities" [S37]. The fairness ledger and the lifeline floor answer it.

### 3.9 Skill touchpoints (one log line each in `yuva-yodha/deck/build-log.md`)

| TP | When | Call | What is checked |
|---|---|---|---|
| A | Step 0 | `Skill("case-competition-deck")`, generate mode; read `references/structure.md`, `references/rhetoric.md`, `case_types/social_impact.md`, `case_types/operations.md` | §3.2 to §3.6 match the skill: contrarian, seed, symmetric, three scenarios, one moneyshot, double synthesis, action titles. Log 5 lines |
| B | Before the 500-word pitch (P500 does it) | Skill in slide mode; read `references/rhetoric.md` | Quantification, pre-empted weakness, third-party validation, no hooks |
| C | After the sweeps | Critique mode by CR on the 11 screenshots with `references/critique_rubric.md` | Scores per dimension; at most five wording fixes |
| D | Writers W-A to W-E, before writing | Skill; read `references/frameworks.md` and `rhetoric.md` | Each section uses the frameworks in §3.5 and opens with an action title |
| E | Before the final report | Polish search across `yuva-yodha/` for `TODO`, `TBD`, `Insert`, `Placeholder`, `Lorem`, `xyz`, `Hisaab`, `Dream11`, `Paytm`, `Liminal`, `github`, `vercel` | 0 hits in deck files, research parts and the submission |

---

# PART II: FACTS AND MODEL

## 4. Product facts (audited from the code on 3 Oct 2026; the deck may state only these)

### 4.1 What the prototype is

- **Backend.** FastAPI, Python 3.12, 54 operations under `/api/v1` (39 GET, 15 POST). One SSE stream (`tick, event, plan, plans, risk, kpis`) and one WebSocket (`/ws/voice`).
- **Frontend.** Next.js 16, 29 `page.tsx` files, which are 28 screens and a redirect.
- **Tests.** 352 backend test functions and 162 frontend tests, all counted from code. "335" in older docs is stale.
- **Network.** The seed network is 2 DISCOMs (MVVNL Bareilly, DVVNL Mathura), 5 sub-divisions, 12 feeders, 48 DTs and 7,000 connections.
  - DT ratings: 9 × 100, 14 × 160, 14 × 250 and 11 × 315 kVA, 10,105 kVA in total.
  - Tiers: T0 69, T1 4,863, T2 1,463, T3 605.
  - Five load archetypes, each about 20%.
  - The coordinates are approximations ("fallback" geocode), so call it "a simulated network on real Bareilly and Mathura localities".
- **Weather.** Three real archive days from Open-Meteo: 2024-05-28 (44.2 °C), 2024-07-15 and 2024-10-10. `re_2047` is synthetic and uses the same 15% RE share as the others, so the deck does not use it.
- **Constants.**
  - Lifeline floors: T1 300 W, T2 500 W.
  - Cap ladder: 1,000/2,000, 500/1,000 and 300/500 W.
  - Notice: at least 30 minutes.
  - Dispatch: notify T−120, signal T−30, HES T−15, start, end, verify T+15.
  - Trip rule: above 130% for 2 intervals means 8 intervals (2 h) out.
  - Fee ₹8 a meter a month; rebate ₹2 a kWh; P2P charge ₹0.42 a kWh.
- **Six safety invariants and 13 tests:**
  - T0 is never capped.
  - No cap goes below 300 W.
  - Every cap carries an expiry.
  - Every cap gets at least 30 minutes of notice.
  - Nothing dispatches without a named approver.
  - No LLM SDK is imported in any engine.
- **Roles.** Six roles. Only JE and AE can approve a plan, and the approver's name comes from the token.
- **Tools.** 15 read-only grid tools and 4 consumer tools.
- **Engines.**
  - Thermal (IEEE C57.91): 110.0 °C and 1.0x at rated load and 30 °C; 146.1 °C and about 29x at 1.2 pu and 42 °C.
  - Optimiser: HiGHS MILP with a tested greedy fallback.
  - Forecaster: LightGBM, 3 quantiles, 13 features, trained on synthetic data.
  - Power flow: radial sweep.
  - DR learning: Beta-Bernoulli.
  - Fairness: Jain, Gini and Lorenz.
- **Adapters.** DLMS class 71 limiter (OBIS 0.0.17.0.0.255), OCPP 1.6J `SetChargingProfile` (schema-validated), OpenADR 3 events, Beckn/UEI, WhatsApp, IVR and SMS. Templates are in Hindi (Latin script) and English.

### 4.2 Soft spots the deck must not trip over

- The live site runs only on hand-written fixtures. Fixture numbers are never quoted (§3.7).
- The backend is not deployed. That is no longer relevant to the submission (L9), but it is never denied either.
- The product's Scenario Lab shows mixed relief on unserved energy (−333.7, −142.7, +2,143.8 and +2,733.7 kW-intervals at 96 intervals). The reason: its planner targets only the supply gap, not transformer overload. This plan's model (§6) measures outage hours with the lever ladder applied to each DT's shortfall, including the thermal limit, and says so on slide 10.
- The dispatcher, the adapters, the forecaster, the power flow and the DR model are coded and unit-tested but not called by the running simulator. That is exactly why they are tagged WIRED.
- A DLMS limiter trips the relay when a home stays above the limit, then auto-reconnects. The deck says "must trim load" and never "nothing is switched off".

### 4.3 Build-status audit (the only source for LIVE, WIRED and PILOT)

| # | Capability | Status |
|---|---|---|
| 1 | Dashboard, 28 screens | LIVE |
| 2 | Home (consumer) phone view | LIVE |
| 3 | Field-worker app | LIVE |
| 4 | REST API, 54 routes | LIVE |
| 5 | Live event stream (SSE) | LIVE |
| 6 | Sign-in with 6 roles (JWT) | LIVE |
| 7 | Load model on real weather days | LIVE |
| 8 | Thermal model | LIVE |
| 9 | Optimiser with fallback | LIVE |
| 10 | Two-track simulator: baseline cut and trips | LIVE |
| 11 | Quantile forecaster | WIRED |
| 12 | Power-flow solver | WIRED |
| 13 | DR learning model | WIRED |
| 14 | Fairness indices | WIRED |
| 15 | Dispatcher timeline | WIRED |
| 16 | DLMS / HES limiter adapter | WIRED |
| 17 | OCPP adapter | WIRED |
| 18 | OpenADR adapter | WIRED |
| 19 | Beckn / UEI adapter | WIRED |
| 20 | WhatsApp, IVR, SMS channels | WIRED |
| 21 | Voice and typed ask (grounded tools) | WIRED |
| 22 | Protocol ledger | WIRED |
| 23 | Real head-end (HES/MDM) link | PILOT |
| 24 | Real charger links | PILOT |
| 25 | Production messaging contract | PILOT |
| 26 | India Energy Stack consent | PILOT |
| 27 | Hosted backend with persistence | PILOT |
| 28 | Forecaster trained on real meter data | PILOT |

Totals: **10 LIVE, 12 WIRED, 6 PILOT**. These are the numbers on slide 6.

---

## 5. Fact base

### 5.1 Source hierarchy and tags

Primary documents (CEA, MoP, regulators, official sites, the product code) come first, then research institutions (CEEW, Prayas, IEA, IGC), then trade press. A row marked "secondary" was read in a news report that quotes the primary source. Confidence is High, Med or Low as the planning-time researchers marked it. Every row is re-opened in step V0 (§5.6).

### 5.2 to 5.5 Raw fact files (the generator writes each block below verbatim)

<!-- FILE: research/raw/R-A-grid-and-reliability.md -->
# R-A Grid and reliability (planning-time research, 3 Oct 2026; verify in V0)

| ID | Claim | Value | As of | Source | URL | Conf |
|---|---|---|---|---|---|---|
| S01 | All-India installed capacity; non-fossil share; solar; wind | 5,54,544 MW; 54.88%; 1,68,040 MW; 58,520 MW | 31 Aug 2026 | CEA, Installed Capacity Report, Aug 2026 | https://cea.nic.in/wp-content/uploads/installed/2026/08/IC_Aug_2026.pdf | High |
| S02 | Record peak; shortage in solar vs non-solar hours that day | 270.82 GW at 15:45 on 21 May 2026; 0.18 GW vs 2.57 GW | 21 May 2026 | MoP data via Down To Earth power demand tracker (secondary) | https://www.downtoearth.org.in/amp/story/energy/power-demand-tracker-india-meets-all-time-high-power-demand-of-2708-gw-renewable-energy-share-34 | High |
| S03 | Days short of non-solar vs solar peak; evening ramp | 36 vs 6 days, Apr to May 2026; 36 GW (May 2023) to 74 GW (May 2026) | Jul 2026 | EAC-PM working paper "The Duck and The Camel", via ThePrint (secondary) | https://theprint.in/economy/indias-rising-solar-penetration-is-stressing-the-power-grid-its-a-storage-problem/2980770/ | Med-High |
| S04 | FY26 shortage and cause | 508 MU not supplied (0.0%); gap "on account of the factors other than inadequate availability of power e.g. constraints in distribution network, commercial reasons, forced outage of generating units etc." | FY 2025-26 | CEA, Load Generation Balance Report 2026-27 | https://cea.nic.in/wp-content/uploads/l_g_b_r_reports/2025/LGBR_2026_27.pdf | High |
| S05 | UP night peak and storage need | "the night peak is significantly higher than the day peak throughout the year"; 25,437 MW / 1,01,748 MWh storage by FY34 | Jul 2024 | CEA, Resource Adequacy Plan for UPPCL | https://cea.nic.in/wp-content/uploads/irp/2024/07/Resource_Adequacy_Report_Uttar_Pradesh_UPPCL-1.pdf | High |
| S06 | Average supply hours, rural and urban | 22.6 h and 23.4 h (2014: 12.5 h and 22.1 h) | 2025 | MoP note hosted on PIB | https://static.pib.gov.in/WriteReadData/specificdocs/documents/2025/jun/doc2025610568001.pdf | High |
| S07 | Meter-measured outage in Mathura and Bareilly; feeder log; voltage; income | About 2 h a day (30 min to 5 h); small towns 3.5 h and 6 interruptions a day; district HQ 1.3 h; feeder log 3.5 h (Bareilly) and 4.8 h (Mathura) for all of July 2019; 70% of areas outside 230 V ±6% over half the time; 60% of sample under ₹20,000 a month | May to Oct 2019, pub. Feb 2020 | CEEW, What Smart Meters Can Tell Us | https://www.ceew.in/sites/default/files/ceew-study-on-what-can-smart-meters-tell-us-report.pdf | High |
| S08 | IRES 2020 supply and outages | 20.6 h average; two-thirds of rural and two-fifths of urban homes see a daily outage; 76% unannounced | 2020 | CEEW, State of Electricity Access in India (secondary) | https://www.ceew.in/publications/state-electricity-access-india | Med |
| S09 | DTs, feeders, consumers | 1,53,60,382 DTs (42.30% metered); 2,58,927 11 kV feeders; 36.7 crore consumers | 31 Mar 2025 | CEA, Report on Status of Metering | https://cea.nic.in/wp-content/uploads/2025/05/DPT-Report-on-status-of-Metering-as-on-31st-March-2025.pdf | High |
| S10 | DT failures | About 10% a year, roughly 1.3 million failures; some northern states above 20%; moisture ingress cited for "nearly 90%" | Meeting 29 Oct 2025 | CEA Standardization Cell meeting, via Mercom (secondary) | https://mercomindia.com/cea-steps-in-as-distribution-transformer-failures-hit-1-3-million-a-year | Med |
| S11 | AT&C loss | National 15.04% (FY25); UP 19.54% (FY25), up from 16.39% | FY 2024-25 | MoP/PFC 14th Integrated Rating, via Powerline and SolarQuarter (secondary) | https://solarquarter.com/2026/01/31/uttar-pradesh-power-discoms-show-gains-in-fy25-ratings-but-atc-losses-remain-a-challenge/ | Med-High |
| S12 | Value of lost load | USD 1.50 per kWh, over 25 times the average grid price | Pub. 2024 | Khanna and Rowe, Resource and Energy Economics | https://spiral.imperial.ac.uk/entities/publication/6a570d96-6fdd-4998-bb22-93221b9a5e30 | Med-High |
| S13 | UP lifeline category LMV-1 | Up to 1 kW and 100 units a month; ₹50 per kW a month fixed; ₹3.00 per kWh | FY18 to FY27 | Prayas, Lifeline electricity in Uttar Pradesh | https://energy.prayaspune.org/power-perspectives/lifeline-electricity-consumption-in-uttar-pradesh-what-does-regulatory-data-say | Med-High |
| S14 | Homes with backup | 44% have an inverter or similar | May 2022 | LocalCircles via Business Today (secondary, online urban sample) | https://businesstoday.in/latest/story/2-in-3-indian-households-are-facing-power-outages-amid-heatwave-survey-331981-2022-05-01 | Low-Med |
| S15 | UP supply roster | Rural 18 h; district HQ 24 h | FY 2024-25 | Rajya Sabha reply, 16 Mar 2026 (open in a browser) | https://powermin.gov.in/sites/default/files/uploads/RS16032026_Eng.pdf | Med |
<!-- END FILE -->

<!-- FILE: research/raw/R-B-meters-and-regulation.md -->
# R-B Smart meters and regulation (planning-time research, 3 Oct 2026; verify in V0)

| ID | Claim | Value | As of | Source | URL | Conf |
|---|---|---|---|---|---|---|
| S16 | Smart meters installed and sanctioned | 7.24 crore installed (5.73 crore under RDSS); 20.33 crore sanctioned (19.79 crore consumer, 52.53 lakh DT, 2.05 lakh feeder) | 30 Jun 2026 | Rajya Sabha reply via T&D India (secondary) | https://www.tndindia.com/indias-smart-meter-population-at-7-24-crore-parliament/amp/ | High |
| S17 | Load limiter is a required meter feature | "Integrated Load limiting /connect/disconnect switch"; load control as per IS 16444 Part 1 and IS 15959 | Feb 2020 | CEA, Technical Specification of Smart Meters | https://cea.nic.in/old/reports/others/god/dpt/Tech.%20Specification%20of%20Smart%20Meters-%201-Ph%20and%203%20Ph%20-%20Feb%202020.pdf | High |
| S18 | Tender use case | "load curtailment in place of load shedding" (Annexure H, for reference) | 15 Jul 2022 | REC PDCL, AMISP RFP for Ladakh, Revised Amendment 3 | https://www.recpdcl.in/assets/data/tenders/RevisedAmendment3ToLadakhRFPGeM.pdf | High (this tender) |
| S19 | Meter economics and communication | Consumer meter median ₹8,839; service charge ₹60 to 167 a meter a month; DT meters about 3% communicating, feeder meters about 28% | May 2025 | Prayas, Smart metering in India: a work in progress | https://energy.prayaspune.org/power-perspectives/smart-metering-in-india-a-work-in-progress | Med-High |
| S20 | UP prepaid reversal | About 83 lakh smart prepaid meters moved to postpaid, announced 4 May 2026 | May 2026 | Business Today (secondary) | https://www.businesstoday.in/india/story/up-smart-electricity-meters-postpaid-mode-after-consumer-complaints-529732-2026-05-05 | High (event) |
| S21 | Prepaid mode no longer mandatory | CEA Metering Amendment Regulations 2026 removed the prepayment requirement | 1 Apr 2026 | JSA law firm note (secondary) | https://www.jsalaw.com/?p=57682 | Med-High |
| S22 | Policy on load shedding; reliability standard | "gratuitous load shedding entails penalties as per the present Rules-therefore load shedding is not an option"; LOLP 0.2%, NENS 0.05% | Jun 2023 | MoP, Resource Adequacy Guidelines | https://static.pib.gov.in/WriteReadData/specificdocs/documents/2023/jun/doc2023628218801.pdf | High |
| S23 | Consumer rights | 24x7 supply duty; automatic compensation where monitored | Dec 2020 | Electricity (Rights of Consumers) Rules 2020 | https://vikaspedia.in/energy/policy-support/electricity-(rights-of-consumers)-rules-2020 | Med-High |
| S24 | Draft DR framework | Draft Amendment Rules 2026 add a demand response framework; draft only | 12 Mar 2026 | Powerline (secondary) | https://powerline.net.in/2026/03/17/ministry-of-power-issues-draft-electricity-rights-of-consumers-amendment-rules-2026/ | Med |
| S25 | India Energy Stack | Pilots in Delhi, Gujarat, Andhra Pradesh, Uttar Pradesh and Mumbai in FY 2026-27; ₹51.3 crore budget | Mar 2026 | Outlook Business (secondary) | https://www.outlookbusiness.com/news/govt-to-roll-out-india-energy-stack-after-pilot-launches-in-five-states-in-fy27 | Med-High |
| S26 | P2P pilot | UPERC approved PVVNL interstate pilot; ₹0.42 a kWh incl. GST | Feb 2026 | SolarQuarter (secondary) | https://solarquarter.com/2026/02/23/uperc-approves-interstate-p2p-renewable-energy-trading-pilot-with-delhi-discoms/ | Med-High |
| S27 | Data protection | DPDP Rules 2025 notified 13 Nov 2025; most obligations from about May 2027 | Nov 2025 | KPMG summary (secondary) | https://assets.kpmg.com/content/dam/kpmgsites/in/pdf/2025/11/dpdp-rules-2025-guidance-to-dpdp-act-implementation.pdf | Med-High |
| S28 | Data under-use | Advanced utilities use "less than a quarter of the available data" (attributed remark) | 21 Jan 2026 | Down To Earth (secondary) | https://www.downtoearth.org.in/amp/story/energy/smart-meters-promise-power-sector-turnaround-but-data-gaps-skills-consumer-trust-hurdles-remain | Med |
| S29 | E-rickshaws in UP | 11.47 lakh e-rickshaws; most charge through theft | 15 Aug 2026 | Down To Earth | https://www.downtoearth.org.in/air/india-on-e-wheels-evs-are-making-their-presence-felt-strongly-on-uttar-pradeshs-roads-but-are-yet-to-become-personal-choices | Med-High |
| S30 | Rooftop solar | PM Surya Ghar: 50.06 lakh households | Aug 2026 | News On Air (secondary) | https://newsonair.gov.in/union-minister-pralhad-joshi-says-pm-surya-ghar-muft-bijli-yojana-crosses-50-lakh-beneficiary-households/ | Med-High |
| S31 | Storage VGF | Tranche 2: ₹5,400 crore for 30 GWh; UP 1.5 GWh | Jun 2025 | pv magazine India (secondary) | https://www.pv-magazine-india.com/2025/06/10/power-ministry-announces-inr-5400-crore-viability-gap-funding-to-support-30-gwh-bess-development | Med-High |
<!-- END FILE -->

<!-- FILE: research/raw/R-C-flexibility-and-precedents.md -->
# R-C Flexibility, precedents and the hackathon (planning-time research, 3 Oct 2026; verify in V0)

| ID | Claim | Value | As of | Source | URL | Conf |
|---|---|---|---|---|---|---|
| S32 | Hackathon facts | Judging weights: Problem and idea 20%, Architecture and design 20%, Impact and measurability 25%, Feasibility and affordability 20%, Sustainability 15%; idea submission closes 4 Oct 2026; prototype round 11 Oct to 22 Nov; prizes ₹45 lakh | Oct 2026 | Yuva Yodha official site, FAQ and challenges | https://www.yuvayodhatech.com/faq | High |
| S33 | Eskom load limiting | About 9,000 smart meters (12,506 by Sep 2023); 10 A limit at stages 1 to 4; 15.3 MW average over 7 events; 1 kW relied on per meter; response at least 70% after fixes; R2.4 to 3.5 million per MW; "well received and favoured by customers over loadshedding"; national rollout Jan 2024; non-compliant meters disconnect; advise all-smart feeders | Sep 2024 | SEA and GIZ SAGEN with Eskom, Smart Load Management case study | https://www.cityenergy.org.za/wp-content/uploads/2025/03/Eskom-Load-limiting-pilot.pdf | High |
| S34 | Eskom paid consent | R90 a month for accepting remote limiting; up to 10 events a month, 2 h each | Oct 2025 | IOL (secondary) | https://iol.co.za/news/south-africa/2025-10-16-what-you-need-to-know-about-eskoms-smart-meter-rollout/ | Med |
| S35 | Germany §14a EnWG | Since 1 Jan 2024 operators may dim controllable devices to 4.2 kW and may not refuse connection for local congestion; household base load unaffected | Oct 2026 | Bundesnetzagentur | https://www.bundesnetzagentur.de/DE/Vportal/Energie/SteuerbareVBE/start.html | High |
| S36 | France Linky test | About 115,000 homes limited to 3 kW for 2 h; use fell 20%; at-risk customers excluded | Feb 2024 | Enedis test via expertise-energie.fr (secondary) | https://www.expertise-energie.fr/resultat-du-test-de-delestage-des-compteurs-linky-par-enedis/ | Med |
| S37 | IEA on flexibility | "can also deliver capacity to the grid at a cost up to three times lower than building new capacity"; programmes "risk excluding these groups, reinforcing inequalities" | Dec 2025 | IEA, The Value of Demand Flexibility | https://iea.blob.core.windows.net/assets/4f11d63f-ebb0-44a4-9a53-ed98f264dc38/TheValueofDemandFlexibility.pdf | High |
| S38 | Indian household response | 930 Delhi and Mumbai homes; 8.5% cut during automated events, 15% in the evening; higher rewards did not raise response | Jul 2024 | IGC, Khanna, Martin and Muûls | https://www.theigc.org/sites/default/files/2024-10/Khanna%20et%20al.%20Policy%20Brief%20October%202024.pdf | High |
| S39 | Tata Power-DDL behavioural DR | Over 100,000 customers by FY25; ₹50 or ₹100 per event; alerts by SMS, calls, WhatsApp | 2023 to 2024 | Tata Power-DDL programme page | https://www.tatapower-ddl.com/Behavioral-Demand-Response/Overview | High |
| S40 | Tata Power Mumbai DR | Target 200 MW by summer 2025 with AutoGrid; achieved results not published | Feb 2023 | Tata Power release | https://www.tatapower.com/news-and-media/media-releases/tata-power-joins-hands-with-autogrid-to-expand-ai-enabled-smart-energy-management-system-in-mumbai | High (targets) |
| S41 | UK Demand Flexibility Service | 1.98 million registered; 3,917.7 MWh in winter 2024/25 | Jul 2025 | NESO | https://www.neso.energy/nearly-2-million-households-and-businesses-registered-demand-flexibility-service-dfs-last-winter | High |
| S42 | AutoGrid ownership | Uplight acquired AutoGrid from Schneider Electric; Schneider remains an investor in Uplight | Dec 2023 | Uplight | https://www.uplight.com/uplight-acquires-autogrid | High |
| S43 | Schneider with an Indian DISCOM | South Bihar: command centre, 305 RMUs, 550 fault passage indicators, EcoStruxure Grid | Mar 2025 | T&D India (secondary) | https://www.tndindia.com/schneider-electric-joins-forces-with-south-bihar-discom-for-grid-modernization/ | Med |
| S44 | Schneider DERMS scope | "automates peak load management, load relief, voltage optimization and VAR support" | n/d | Schneider Electric press release | https://www.se.com/ww/en/about-us/newsroom/news/press-releases/schneider-electric-provides-grid-flexibility-with-the-release-of-ecostruxure-derms-5dcc1d628217ef65154cb3c3 | Med |
<!-- END FILE -->

<!-- FILE: research/raw/R-D-competition-and-costs.md -->
# R-D Competition and costs (planning-time research, 3 Oct 2026; verify in V0)

| ID | Claim | Value | As of | Source | URL | Conf |
|---|---|---|---|---|---|---|
| S45 | Storage awarded vs built | 10.4 GW awarded in 2025; about 1.8 GWh installed by Mar 2026; 75% of 2-hour capacity "at-risk"; record ₹1.48 lakh per MW a month | May 2026 | IEEFA-JMK via pv magazine India (secondary) | https://www.pv-magazine-india.com/2026/05/19/india-awards-10-4-gw-of-standalone-bess-capacity-in-2025-but-tariff-viability-remains-a-concern-ieefa-jmk-report/ | High |
| S46 | Storage cost per kWh cycled | ₹2.1 a kWh at two cycles, ₹2.8 at 1.5 cycles (₹10.18 in 2022-23) | Dec 2025 | MoP via ESS News (secondary) | https://www.ess-news.com/2025/12/15/india-sees-dramatic-plunge-in-battery-storage-costs-ministry-reports/ | High |
| S47 | Kilokari distribution battery | 20 MW / 40 MWh; ₹57 lakh per MW a year capacity charge; serves over 12,000 low-income consumers | May 2024 | SolarQuarter on DERC order (secondary) | https://solarquarter.com/2024/05/15/derc-approves-bses-rajdhani-powers-20mw-40mwh-battery-energy-storage-project/ | Med |
| S48 | Shivalik distribution battery | 12.5 MW / 25 MWh; ₹35.91 lakh per MW a year | Sep 2026 | SolarQuarter on DERC order (secondary) | https://solarquarter.com/2026/09/11/derc-approves-%e2%82%b935-91-lakh-mw-tariff-for-12-5-mw-25-mwh-battery-storage-project-in-delhi/ | Med |
| S49 | Mini-grid tariff | About ₹10 to 20 a kWh against ₹3 to 6.5 rural grid tariffs | n/d | CSE | https://www.cseindia.org/content/downloadreports/13073 | Med |
| S50 | WhatsApp utility message | ₹0.115 plus 18% GST | 2026 | Provider rate cards (secondary; check Meta's card) | https://whautomate.com/whatsapp-business-api-pricing-india | Med |
| S51 | Home inverter and battery | ₹14,000 to 19,000 for an 1,100 VA inverter with a 150 Ah battery | 2026 | Retail listings | https://zoutons.com/news/best-inverter-battery-combo-under-15000-amazon | Low |
| S52 | Fluentgrid | "Automated Demand Response (DR)"; notify consumers by portals, apps or SMS | Oct 2026 | Fluentgrid product page | https://fluentgrid.com/?p=37163 | Med |
| S53 | Itron DERMS | "AI-driven forecasting"; DR; "IEEE 2030.5, OCPP, OpenADR"; storage | Oct 2026 | Itron product page | https://na.itron.com/what-we-offer/derms-overview | Med |
| S54 | Bidgely | "See what's behind every transformer"; TOU, DR, load shifting; "You set the rules and approve what matters" | Oct 2026 | Bidgely site | https://www.bidgely.com/ | Med |
| S55 | Kimbal | Meters, HES, MDM; "demand response, automated power trading on IEX" | Oct 2026 | Kimbal site | https://www.kimbal.io/ | Med |
| S56 | Goa AMISP fee | ₹117.50 a meter a month for 93 months | n/d | The Goan (secondary) | https://www.thegoan.net/goa-news/monthly-smart-meter-charges-to-be-added-to-power-bills/134305.html | Med |
| S57 | DT purchase price | 25 kVA ₹95,549; 100 kVA ₹2,12,520; 250 kVA ₹3,28,020 (cost data book, edition unclear) | n/d | UP cost data book (secondary) | https://puvvnl.in/Download/Cost_Data_Book.pdf | Low |
<!-- END FILE -->

### 5.5 Known conflicts and how they are resolved

<!-- FILE: research/raw/conflicts.md -->
| # | Conflict | Resolution |
|---|---|---|
| 1 | Smart meters: 5.28 crore (31 Dec 2025), 5.83 crore (15 Feb 2026), 7.24 crore (30 Jun 2026) | Use 7.24 crore [S16]; the older figures in the product docs are stale |
| 2 | UP postpaid switch dated 4, 6 or 8 May 2026 | "Announced 4 May 2026" [S20] |
| 3 | Solar curtailment: MNRE 8,133 GWh (Apr to Jun 2026) vs EAC-PM about 24 GWh a day in May | Not used anywhere until the reply is opened |
| 4 | DTs: 1.54 crore (CEA, Mar 2025) vs "nearly 1.82 crore" (trade press, 2026) | Quote the failure claim as reported [S10]; derive no rate from either base |
| 5 | 2025 peak: 241 GW vs 242.77 GW | Not used; the 2026 record of 270.8 GW is used [S02] |
| 6 | National supply hours (22.6 / 23.4) are roster hours; CEEW meters show more outage | Use both and say which is which [S06, S07] |
| 7 | Product docs say 5 vs 6 safety invariants; 335 vs 352 tests; 26 to 29 pages | Code: 6 invariants, 352 + 162 tests, 28 screens (§4.1) |
| 8 | Product fixtures show reliability, fairness, BCR and payback numbers no engine produces | Never quoted (§3.7) |
| 9 | Product Scenario Lab: mixed relief on unserved energy | Disclosed on slide 10 and in the doc; the impact model measures outage hours with the planner acting on thermal limits too (§6.1) |
| 10 | Eskom's limit disconnects a home that stays over 10 A | Stated plainly; UrjaGrid adds notice, a floor, an expiry and a named approver (§14 Q3) |
| 11 | "Brief is storage-led" framing | Not used; the brief lists software tools too. The deck argues storage is a lever, not a prerequisite |
| 12 | The hackathon's "8 to 12 slides" wording was not on public pages; it came from the organisers' message to the team | Follow the organisers' message |
<!-- END FILE -->

### 5.6 Step V0: verification (four Sonnet verifiers in parallel; corrections protocol)

Each verifier takes one raw file. For every row it:
1. Re-opens the URL with WebFetch, or WebSearch if the URL fails.
2. Marks the row VERIFIED, CORRECTED (new figure, a verbatim snippet of at most 25 words, and the date) or UNVERIFIABLE (what was tried).

**Correction protocol (main agent).**
- A CORRECTED value that appears in §3.7 is changed in `values.js` or the slide file, then `gen.py mock` and `bind`, and the slide is rebuilt.
- Grep `yuva-yodha/` for the old value.
- If a correction changes the meaning of a FINDING sentence, rewrite only the number and keep the sentence's length within 10 characters.
- An UNVERIFIABLE value on a slide stays only if its confidence was High; otherwise it is removed with the matching fix rule and the panel caption says "est.". Log every change under "Corrections" in `build-log.md`.

**Priority rows** (on a slide or in the 500-word pitch): S02, S03, S07, S10, S11, S16, S17, S18, S20, S32, S33, S35, S36, S37, S45, S47, S48, S51. Verifiers do these first and report them in a separate list, so the critical path is not blocked by the rest.

---

## 6. The impact model

### 6.1 Method (what the model is, and why it is not the product's Scenario Lab)

**Inputs, from the product, unchanged** (`extract_engine.py`, §6.2):
- the 48-DT, 7,000-connection network;
- every connection's 96-slot demand curve from the product's own `LoadModel(seed=0)` on three real weather days (asserted equal to the product's own DT totals to 1e-9);
- each sub-division's supply fraction from the product's own `supply.py` (15% RE share, 5% grid storage, firm shares 0.88 / 0.78 / 0.68);
- for each DT and slot, the load that each cap level would trim and the number of T1/T2 connections above each cap.

**Two tracks over 96 fifteen-minute slots.**
1. **Today (baseline).**
   - Available power at a DT is the lower of its supply share and its thermal rating (rated kVA × 0.9 pf).
   - A DT short by more than 3% of demand is a shedding candidate. In each sub-division, half the candidates (rounded up, least-burdened first) are cut to critical load for that slot.
   - Any DT left running above 130% for two slots trips for two hours.
   - These are the product's own shadow-baseline rules, with one change. Here the thermal rating counts as a limit, because a DISCOM sheds to protect an overloaded transformer, and the product's own `docs/IMPACT.md` describes overload as the reason shedding happens.
2. **UrjaGrid (solution).** Before the same shedding and trip rules run, each short DT gets the lever ladder in order:
   - voluntary ask (A01 share of T1 and T2 load);
   - flexible-load deferral (A02 share of T3 load);
   - then the lowest cap level whose trimmed load (× A03 compliance) closes the gap.
   - 30% of every lever's relief returns later as rebound, released at 15% a slot (product constants).
   - T0 is never touched. A DT still short after the ladder is shed or trips exactly as today.

**Outputs:**
- outage home-hours (non-critical connections × 0.25 h for every slot their DT is out);
- homes and DTs hit, trips, SAIFI-style interruptions and supply availability;
- capped home-hours by level, and the number of capped homes actually above their cap ("must trim load");
- a stress test adding 0 to 40% extra evening shortfall (18:00 to 23:00);
- a year built from 45 heatwave, 75 monsoon and 245 mild days (A04);
- unit economics: fee + rebates + messages, ₹ per avoided outage hour, ₹ per kW of peak relief against two DERC battery tariffs;
- the share of each load archetype the comfort cap constrains at the peak.

**What the model is not.**
- It is not a power-flow study and not a forecast-error study.
- It assumes the plan is approved and the meter command lands. That is why A03 compliance sits at 85% in the bear case, close to Eskom's "at least 70%" response once faults were fixed [S33].
- The network is deliberately tight: 27 of 48 DTs exceed rating on the heatwave day.
- Results are simulation estimates for a pilot to test, not measurements. Every slide says so.

### 6.4 Run (step M1; Bash from the repo root, after `gen.py init`)

```bash
cd "/c/Users/harsh/Desktop/HARSH/PPTS-CASE-STUDY/nsut-innovators-court/yuva-yodha/model" && "/c/Users/harsh/Desktop/HARSH/WEB-DEV-PROJECTS/yuvayodha-hack/backend/.venv/Scripts/python.exe" -B extract_engine.py && python -B urjagrid_impact_model.py && python -B check_values.py
```

- `extract_engine.py` must run on the product's own venv (numpy and the product modules). It writes nothing outside `yuva-yodha/model`.
- The model and the checker need only the standard library.
- Expected: `wrote ... engine_dump.json`, `wrote model_outputs.json`, `LOCK CHECK: 51 values, 0 mismatches`, `wrote model_tables.md 83 lines`.
- Any mismatch means the product code or data changed since planning. Stop and report the mismatch lines; do not edit `values.js` to match.

### 6.5 Reference output (planning-time dry run, 4 Oct 2026; must match)

| Day | Case | Outage h per home | Homes cut | DTs cut | Trips | Capped at peak | Must trim at peak |
|---|---|---|---|---|---|---|---|
| Heatwave (44.2 °C) | today | 4.21 | 4,309 | 30 | 32 | 0 | 0 |
| Heatwave | bear | 0.83 | 1,244 | 9 | 0 | 3,171 | 1,804 |
| Heatwave | base | 0.40 | 593 | 4 | 0 | 3,402 | 1,751 |
| Heatwave | bull | 0.00 | 0 | 0 | 0 | 2,777 | 1,593 |
| Monsoon | today / base | 3.71 / 0.00 | 4,584 / 0 | | 23 / 0 | | |
| Mild (October) | today / base | 3.58 / 0.00 | 4,584 / 0 | | 21 / 0 | | |

- **Stress, heatwave, base:** 0.40 h at 0 to 30% extra evening shortfall and 1.00 h at 40%. Today: 6.35 h at 10% or more.
- **Year:** 1,345 h per home today; 152 (bear), 18 (base), 0 (bull). DT-hours above rating 23,896 today against 5,011 in the base case (−79%).
- **Economics, base, 7,000 meters:**

| Line | ₹ a year | ₹ per meter a year |
|---|---|---|
| Fee | 6,72,000 | 96 |
| Rebates | 13,17,145 | 188 |
| Messages | 6,94,960 | 99 |
| Total | 26,84,105 | 383 |

  That is ₹0.29 per outage hour avoided and ₹1,448 per kW of peak relief, against ₹3,591 and ₹5,700 for the two DERC battery tariffs. Bear: ₹309 per meter. Bull: ₹547 per meter.
- **Comfort cap at the peak:** constrains 54% of T1 and T2 connections. That is 0% of fan-and-lights and fridge-and-TV homes, 70% of small shops and 100% of cooler or AC and cold-chain users.

---

# PART II (code): THE MODEL

## 6. The impact model (code)

### 6.2 Engine extract (the generator writes this block to `yuva-yodha/model/extract_engine.py`)

It imports the product's own network loader, load model, weather and supply functions, read-only, and rebuilds every consumer's 96-slot demand curve with the same seed and the same order the product uses, so the DT totals equal the product's own. It writes one JSON file and never touches the product repository.

```python
# ===== URJAGRID ENGINE EXTRACT =====
"""Read-only dump of the UrjaGrid engine's inputs for the impact model. Run with the product's own venv:
   <backend>/.venv/Scripts/python.exe -B extract_engine.py  ->  engine_dump.json (same folder)
   Set URJA_STDOUT=1 to print the JSON instead of writing it."""
import sys, json, os, pathlib
sys.dont_write_bytecode = True
BACKEND = os.environ.get("URJA_BACKEND", r"C:\Users\harsh\Desktop\HARSH\WEB-DEV-PROJECTS\yuvayodha-hack\backend")
sys.path.insert(0, BACKEND)
import numpy as np
from app.grid.network import real_network
from app.grid.loadgen import LoadModel
from app.grid.weather import BUILTIN_SCENARIOS
from app.grid.supply import supply_fraction_for_subdivision, SUBDIVISION_KIND
CAPS = {1: {"t1": 1.0, "t2": 2.0}, 2: {"t1": 0.5, "t2": 1.0}, 3: {"t1": 0.3, "t2": 0.5}}  # kW, product constants CAP_LEVEL_WATTS
net = real_network(); C = net.consumers; n = len(C)
ix = {d: i for i, d in enumerate(net.dt_ids)}; nd = len(net.dt_ids)
tier = [str(x) for x in C.tier]; arch = [str(x) for x in C.archetype]; cdt = [ix[str(x)] for x in C.dt_ids]
dts = []
for d in net.dt_ids:
    j = ix[d]; cnt = {k: 0 for k in ("t0", "t1", "t2", "t3")}
    for i in range(n):
        if cdt[i] == j: cnt[tier[i]] += 1
    dts.append({"id": d, "sub": net.dt_subdivision[d], "kind": SUBDIVISION_KIND[net.dt_subdivision[d]], "feeder": net.dt_feeder[d],
                "rating_kva": float(net.dt_rating_kva[d]), "n": cnt})
out = {"meta": {"consumers": n, "dts": nd, "seed": 0, "archetype_share": {a: arch.count(a) for a in sorted(set(arch))}}, "dts": dts, "scenarios": {}}
r3 = lambda a: [[round(float(v), 3) for v in row] for row in a]
for name in ("heatwave_evening", "monsoon_cloud", "solar_noon"):
    sc = BUILTIN_SCENARIOS[name]; w = sc.to_series(); lm = LoadModel(seed=0)
    D = np.zeros((nd, 96)); T0 = np.zeros((nd, 96)); T3 = np.zeros((nd, 96)); T12 = np.zeros((nd, 96))
    R = np.zeros((3, nd, 96)); B = np.zeros((3, nd, 96)); AB = {a: np.zeros((3, 96)) for a in set(arch)}; AN = {a: 0 for a in set(arch)}
    for i in range(n):
        cur = lm.consumer_demand_kw(arch[i], w.temp_c); j = cdt[i]; D[j] += cur
        if tier[i] == "t0": T0[j] += cur
        elif tier[i] == "t3": T3[j] += cur
        else:
            T12[j] += cur; AN[arch[i]] += 1
            for L in (1, 2, 3):
                over = np.clip(cur - CAPS[L][tier[i]], 0, None); R[L - 1, j] += over; B[L - 1, j] += (over > 0); AB[arch[i]][L - 1] += (over > 0)
    chk = LoadModel(seed=0).generate_network_demand(C, w)
    assert all(abs(chk[d] - D[ix[d]]).max() < 1e-9 for d in net.dt_ids), "demand does not match the engine"
    frac = {sd: [round(float(v), 4) for v in supply_fraction_for_subdivision(sd, 0.15, w.solar_cf, w.wind_cf, 0.05)] for sd in SUBDIVISION_KIND}
    out["scenarios"][name] = {"label": sc.label, "town": sc.town, "source": sc.source, "temp_c": [round(float(v), 2) for v in w.temp_c],
        "solar_cf": [round(float(v), 3) for v in w.solar_cf], "demand": r3(D), "t0": r3(T0), "t3": r3(T3), "t12": r3(T12),
        "relief": [r3(R[k]) for k in range(3)], "bite": [r3(B[k]) for k in range(3)], "frac": frac,
        "arch_bite": {a: r3(AB[a]) for a in AB}, "arch_n12": AN}
txt = json.dumps(out, separators=(",", ":"))
if os.environ.get("URJA_STDOUT"): sys.stdout.write(txt)
else:
    p = pathlib.Path(__file__).resolve().parent / "engine_dump.json"; p.write_text(txt, encoding="utf-8"); print("wrote", p, len(txt), "chars")
```

### 6.3 Model code (the generator writes this block to `yuva-yodha/model/urjagrid_impact_model.py`)

```python
# ===== URJAGRID IMPACT MODEL =====
"""UrjaGrid impact model. Inputs: engine_dump.json (the product's own network, demand and supply arrays).
Two tracks over 96 fifteen-minute slots, per distribution transformer (DT):
  baseline  status quo: rotational shedding of short DTs plus thermal trips (the product's own shadow rules)
  solution  the UrjaGrid lever ladder, softest first, then the same shedding and trip rules on whatever is left
Outputs: model_outputs.json, model_tables.md. Set URJA_DRY=1 to print a summary and write nothing; URJA_STDIN=1 reads the dump from stdin."""
import json, math, os, sys, pathlib
HERE = pathlib.Path(__file__).resolve().parent if "__file__" in globals() else pathlib.Path(".")
E = json.loads(sys.stdin.read() if os.environ.get("URJA_STDIN") else (HERE / "engine_dump.json").read_text(encoding="utf-8"))
# ---------------- P: product constants (never modify) ----------------
P = dict(pf=0.9, tol=0.03, shed_frac=0.5, trip_pu=1.30, trip_slots=2, trip_out=8, rebound=0.30, release=0.15,
         fee_rs_meter_month=8.0, rebate_rs_kwh=2.0, cap_w={1: (1000, 2000), 2: (500, 1000), 3: (300, 500)})
# ---------------- A: team assumptions (change only through plan section 5.6) ----------------
A = dict(
    A01_dr_share=dict(bear=0.03, base=0.05, bull=0.10),      # share of T1+T2 load shifted on a voluntary ask
    A02_flex_share=dict(bear=0.30, base=0.50, bull=0.70),    # share of T3 (flexible) load deferred in a window
    A03_cap_comply=dict(bear=0.85, base=0.92, bull=0.97),    # share of capped load that actually comes off
    A04_days=dict(heatwave_evening=45, monsoon_cloud=75, solar_noon=245),  # day-type mix for a year
    A05_dip_window=(18.0, 23.0),                              # evening hours for the supply-dip stress
    A06_dips=(0.0, 0.10, 0.20, 0.30, 0.40),                   # extra evening shortfall as a share of demand
    A07_msg_rs=0.136,                                         # WhatsApp utility message, Rs 0.115 plus 18% GST
    A08_msgs_per_hh_event=2,                                  # notice and confirmation
    A09_storage_rs_kw_year=(3591.0, 5700.0),                  # DERC-approved distribution BESS tariffs, Rs per kW per year
    A10_inverter_rs=(14000.0, 19000.0), A11_inverter_life_years=5)
DAYS = ("heatwave_evening", "monsoon_cloud", "solar_noon"); CASES = ("bear", "base", "bull")
dts = E["dts"]; ND = len(dts); RATED = [d["rating_kva"] * P["pf"] for d in dts]
NC = [d["n"]["t1"] + d["n"]["t2"] + d["n"]["t3"] for d in dts]; N12 = [d["n"]["t1"] + d["n"]["t2"] for d in dts]
NHH = sum(NC); NALL = sum(sum(d["n"].values()) for d in dts)
SUBS = sorted(set(d["sub"] for d in dts))

def run(day, levers, case="base", dip=0.0):
    S = E["scenarios"][day]; peak = [max(S["demand"][i]) for i in range(ND)]
    dr, fx, cp = A["A01_dr_share"][case], A["A02_flex_share"][case], A["A03_cap_comply"][case]
    reb = [0.0] * ND; strike = [0] * ND; trip = [0] * ND; burden = [0.0] * ND; was_out = [False] * ND; hit = [False] * ND
    r = dict(out_hh_h=0.0, cap_hh_h=[0.0, 0.0, 0.0], bite_hh_h=[0.0, 0.0, 0.0], trips=0, shed_dt_slots=0, over_dt_h=0.0, interruptions=0.0,
             dr_kwh=0.0, flex_kwh=0.0, cap_kwh=0.0, lost_kwh=0.0, demand_kwh=0.0, peak_cap_hh=0, peak_bite_hh=0, max_loading=0.0,
             out_by_slot=[0.0] * 96, cap_by_slot=[0.0] * 96, load_by_slot=[0.0] * 96, level_by_dt=[0] * ND, out_h_by_dt=[0.0] * ND)
    for t in range(96):
        hr = t / 4.0; nd_ = [0.0] * ND; av = [0.0] * ND; lvl = [0] * ND; cand = {s: [] for s in SUBS}
        for i, d in enumerate(dts):
            dem = S["demand"][i][t]; avail = min(RATED[i], S["frac"][d["sub"]][t] * peak[i])
            if dip and A["A05_dip_window"][0] <= hr < A["A05_dip_window"][1]: avail = min(avail, (1.0 - dip) * dem)
            rel = reb[i] * P["release"]; reb[i] -= rel; x = dem + rel; r["demand_kwh"] += dem * 0.25
            if levers and trip[i] == 0 and x - avail > P["tol"] * x:
                need = x - avail; r1 = min(need, dr * S["t12"][i][t]); r2 = min(need - r1, fx * S["t3"][i][t]); need -= r1 + r2; rc = 0.0
                if need > 1e-9:
                    for L in (1, 2, 3):
                        rc = cp * S["relief"][L - 1][i][t]; lvl[i] = L
                        if rc >= need: break
                x -= r1 + r2 + rc; reb[i] += P["rebound"] * (r1 + r2 + rc)
                r["dr_kwh"] += r1 * 0.25; r["flex_kwh"] += r2 * 0.25; r["cap_kwh"] += rc * 0.25
            nd_[i] = x; av[i] = avail
            if trip[i] == 0 and x - avail > P["tol"] * x: cand[d["sub"]].append(i)
        shed = set()
        for s in SUBS:
            c = cand[s]
            if c:
                k = max(1, math.ceil(len(c) * P["shed_frac"])); shed.update(sorted(c, key=lambda i: (burden[i], dts[i]["id"]))[:k])
        capn = 0; biten = 0
        for i, d in enumerate(dts):
            out = False
            if trip[i] > 0: trip[i] -= 1; out = True
            elif i in shed: out = True; burden[i] += 0.25; r["shed_dt_slots"] += 1; strike[i] = 0
            else:
                k = nd_[i] / RATED[i]; r["max_loading"] = max(r["max_loading"], k)
                strike[i] = strike[i] + 1 if k > P["trip_pu"] else 0
                if strike[i] >= P["trip_slots"]: trip[i] = P["trip_out"]; strike[i] = 0; out = True; r["trips"] += 1
                elif k > 1.0: r["over_dt_h"] += 0.25
            if out:
                r["out_hh_h"] += NC[i] * 0.25; r["out_by_slot"][t] += NC[i]; r["out_h_by_dt"][i] += 0.25; hit[i] = True
                r["lost_kwh"] += max(nd_[i] - S["t0"][i][t], 0.0) * 0.25
                if not was_out[i]: r["interruptions"] += NC[i]
            else:
                r["load_by_slot"][t] += nd_[i]
                if lvl[i]:
                    L = lvl[i]; b = S["bite"][L - 1][i][t]; r["cap_hh_h"][L - 1] += N12[i] * 0.25; r["bite_hh_h"][L - 1] += b * 0.25
                    r["cap_by_slot"][t] += N12[i]; capn += N12[i]; biten += b; r["level_by_dt"][i] = max(r["level_by_dt"][i], L)
            was_out[i] = out
        if capn > r["peak_cap_hh"]: r["peak_cap_hh"] = capn; r["peak_bite_hh"] = biten
    r["hh_hit"] = sum(NC[i] for i in range(ND) if hit[i]); r["dts_hit"] = sum(hit); r["out_h_per_hh"] = r["out_hh_h"] / NHH
    r["saifi"] = r["interruptions"] / NHH; r["supply_avail_pct"] = 100.0 * (1.0 - r["out_hh_h"] / (NHH * 24.0))
    return r

def rnd(x, d=2):
    if isinstance(x, float): return round(x, d)
    if isinstance(x, (list, tuple)): return [rnd(v, d) for v in x]
    if isinstance(x, dict): return {k: rnd(v, d) for k, v in x.items()}
    return x

O = dict(meta=dict(consumers=NALL, households_non_critical=NHH, t0=NALL - NHH, dts=ND, capacity_kva=sum(d["rating_kva"] for d in dts)), P=P, A=A, days={}, dip={}, annual={}, econ={}, equity={}, network={})
for day in DAYS:
    S = E["scenarios"][day]; tot = [sum(S["demand"][i][t] for i in range(ND)) for t in range(96)]
    pk = [max(S["demand"][i]) / RATED[i] for i in range(ND)]
    O["network"][day] = dict(label=S["label"], town=S["town"], source=S["source"], peak_temp_c=max(S["temp_c"]), peak_kw=max(tot), peak_slot=tot.index(max(tot)),
        demand_kwh=sum(tot) * 0.25, dts_over_100=sum(k > 1.0 for k in pk), dts_over_130=sum(k > 1.3 for k in pk), max_pu=max(pk),
        over_kwh=sum(max(S["demand"][i][t] - RATED[i], 0.0) for i in range(ND) for t in range(96)) * 0.25, total_by_slot=tot, peak_pu_by_dt=pk,
        rated_kw=sum(RATED), temp_c=S["temp_c"], solar_cf=S["solar_cf"])
    O["days"][day] = dict(baseline=run(day, False), **{c: run(day, True, c) for c in CASES})
for dip in A["A06_dips"]:
    O["dip"][str(dip)] = dict(baseline=run("heatwave_evening", False, "base", dip), **{c: run("heatwave_evening", True, c, dip) for c in CASES})
dm = A["A04_days"]; ann = {}
for key in ("baseline",) + CASES:
    g = lambda f: sum(dm[d] * O["days"][d][key][f] for d in DAYS)
    ann[key] = dict(out_hh_h=g("out_hh_h"), out_h_per_hh=g("out_hh_h") / NHH, trips=g("trips"), over_dt_h=g("over_dt_h"), lost_kwh=g("lost_kwh"), dr_kwh=g("dr_kwh"),
                    flex_kwh=g("flex_kwh"), cap_kwh=g("cap_kwh"), cap_hh_h=[sum(dm[d] * O["days"][d][key]["cap_hh_h"][k] for d in DAYS) for k in range(3)],
                    event_days=sum(dm[d] for d in DAYS if O["days"][d][key]["out_hh_h"] + sum(O["days"][d][key]["cap_hh_h"]) > 0))
O["annual"] = ann
fee = P["fee_rs_meter_month"] * 12 * NALL
for c in CASES:
    a = ann[c]; b = ann["baseline"]; avoided = b["out_hh_h"] - a["out_hh_h"]
    rebate = a["dr_kwh"] * P["rebate_rs_kwh"]; msgs = A["A07_msg_rs"] * A["A08_msgs_per_hh_event"] * NALL * a["event_days"]
    cost = fee + rebate + msgs; hd = O["days"]["heatwave_evening"][c]; relief_kw = max((O["network"]["heatwave_evening"]["total_by_slot"][t] - hd["load_by_slot"][t]) if hd["out_by_slot"][t] == 0 else 0.0 for t in range(96))
    O["econ"][c] = dict(fee_rs=fee, rebate_rs=rebate, msg_rs=msgs, cost_rs=cost, cost_per_meter_year=cost / NALL, avoided_hh_h=avoided, cut_pct=100.0 * avoided / b["out_hh_h"] if b["out_hh_h"] else 0.0,
        rs_per_avoided_hh_h=cost / avoided if avoided > 0 else None, peak_relief_kw=relief_kw, rs_per_kw_year=cost / relief_kw if relief_kw else None,
        storage_ratio=[A["A09_storage_rs_kw_year"][k] / (cost / relief_kw) for k in (0, 1)] if relief_kw else None, energy_kept_kwh=b["lost_kwh"] - a["lost_kwh"] - a["cap_kwh"] * (1 - P["rebound"]))
O["econ"]["inverter_rs_year"] = [v / A["A11_inverter_life_years"] for v in A["A10_inverter_rs"]]
S = E["scenarios"]["heatwave_evening"]; tp = O["network"]["heatwave_evening"]["peak_slot"]
O["equity"] = dict(slot=tp, by_archetype={a: dict(n=S["arch_n12"][a], bite_pct=[100.0 * S["arch_bite"][a][L][tp] / S["arch_n12"][a] for L in range(3)]) for a in sorted(S["arch_n12"])},
    all_pct=[100.0 * sum(S["bite"][L][i][tp] for i in range(ND)) / sum(N12) for L in range(3)],
    relief_share_pct=[100.0 * sum(S["relief"][L][i][tp] for i in range(ND)) / sum(S["demand"][i][tp] for i in range(ND)) for L in range(3)])
O = rnd(O, 3)
if os.environ.get("URJA_JSON"): sys.stdout.write(json.dumps(O))
elif os.environ.get("URJA_DRY"):
    for d in DAYS:
        nw = O["network"][d]; print(d, {k: nw[k] for k in ("peak_temp_c", "peak_kw", "peak_slot", "demand_kwh", "dts_over_100", "dts_over_130", "max_pu", "over_kwh")})
        for k in ("baseline",) + CASES:
            x = O["days"][d][k]; print("   ", k, {f: x[f] for f in ("out_hh_h", "out_h_per_hh", "hh_hit", "dts_hit", "trips", "shed_dt_slots", "over_dt_h", "saifi", "cap_hh_h", "bite_hh_h", "peak_cap_hh", "peak_bite_hh", "dr_kwh", "flex_kwh", "cap_kwh", "lost_kwh", "max_loading", "supply_avail_pct")})
    for dip in O["dip"]: print("dip", dip, {k: (O["dip"][dip][k]["out_h_per_hh"], O["dip"][dip][k]["hh_hit"], sum(O["dip"][dip][k]["cap_hh_h"])) for k in ("baseline",) + CASES})
    print("annual", {k: {f: O["annual"][k][f] for f in ("out_hh_h", "out_h_per_hh", "trips", "over_dt_h", "lost_kwh", "dr_kwh", "cap_kwh", "event_days")} for k in O["annual"]})
    print("econ", O["econ"]); print("equity", O["equity"]); print("meta", O["meta"])
else:
    (HERE / "model_outputs.json").write_text(json.dumps(O, ensure_ascii=False, indent=1), encoding="utf-8"); print("wrote model_outputs.json")
```

### 6.6 Lock check and tables (the generator writes this block to `yuva-yodha/model/check_values.py`)

Every model number printed on a slide is listed here with the value the slide carries. The script fails loudly if the model no longer produces it, and writes `model_tables.md` for the research document.

```python
# ===== URJAGRID CHECK VALUES =====
"""Compare model_outputs.json with the numbers locked into the deck, then write model_tables.md.
Set URJA_STDIN=1 to read the model JSON from stdin and URJA_DRY=1 to write nothing."""
import json, os, sys, pathlib
HERE = pathlib.Path(__file__).resolve().parent if "__file__" in globals() else pathlib.Path(".")
O = json.loads(sys.stdin.read() if os.environ.get("URJA_STDIN") else (HERE / "model_outputs.json").read_text(encoding="utf-8"))
D = O["days"]; hw = D["heatwave_evening"]; mo = D["monsoon_cloud"]; mi = D["solar_noon"]; E = O["econ"]; A = O["annual"]; N = O["meta"]["consumers"]; NH = O["meta"]["households_non_critical"]
LOCK = [("outage h per home, heatwave, today", hw["baseline"]["out_h_per_hh"], 4.21, 2), ("bear", hw["bear"]["out_h_per_hh"], 0.83, 2), ("base", hw["base"]["out_h_per_hh"], 0.40, 2), ("bull", hw["bull"]["out_h_per_hh"], 0.0, 2),
    ("monsoon today", mo["baseline"]["out_h_per_hh"], 3.71, 2), ("monsoon base", mo["base"]["out_h_per_hh"], 0.0, 2), ("mild today", mi["baseline"]["out_h_per_hh"], 3.58, 2), ("mild base", mi["base"]["out_h_per_hh"], 0.0, 2),
    ("homes cut today", hw["baseline"]["hh_hit"], 4309, 0), ("homes cut bear", hw["bear"]["hh_hit"], 1244, 0), ("homes cut base", hw["base"]["hh_hit"], 593, 0), ("DTs still cut, base", hw["base"]["dts_hit"], 4, 0),
    ("trips today", hw["baseline"]["trips"], 32, 0), ("trips base", hw["base"]["trips"], 0, 0), ("capped at peak", hw["base"]["peak_cap_hh"], 3402, 0), ("constrained at peak", hw["base"]["peak_bite_hh"], 1751, 0),
    ("cap hh-h L1", hw["base"]["cap_hh_h"][0], 18224, 0), ("cap hh-h L2", hw["base"]["cap_hh_h"][1], 7033, 0), ("cap hh-h L3", hw["base"]["cap_hh_h"][2], 8065, 0),
    ("pct homes cut today", 100.0 * hw["baseline"]["hh_hit"] / NH, 62, 0), ("pct homes cut base", 100.0 * hw["base"]["hh_hit"] / NH, 9, 0), ("pct capped at peak", 100.0 * hw["base"]["peak_cap_hh"] / NH, 49, 0),
    ("cut pct", 100.0 * (1 - hw["base"]["out_h_per_hh"] / hw["baseline"]["out_h_per_hh"]), 90, 0),
    ("dip 10 today", O["dip"]["0.1"]["baseline"]["out_h_per_hh"], 6.35, 2), ("dip 30 base", O["dip"]["0.3"]["base"]["out_h_per_hh"], 0.40, 2), ("dip 40 base", O["dip"]["0.4"]["base"]["out_h_per_hh"], 1.00, 2),
    ("annual h today", A["baseline"]["out_h_per_hh"], 1345, 0), ("annual h bear", A["bear"]["out_h_per_hh"], 152, 0), ("annual h base", A["base"]["out_h_per_hh"], 18, 0), ("annual h bull", A["bull"]["out_h_per_hh"], 0, 0),
    ("overload DT-h today", A["baseline"]["over_dt_h"], 23896, 0), ("overload DT-h base", A["base"]["over_dt_h"], 5011, 0), ("overload cut pct", 100.0 * (1 - A["base"]["over_dt_h"] / A["baseline"]["over_dt_h"]), 79, 0),
    ("fee per meter", E["base"]["fee_rs"] / N, 96, 0), ("rebate per meter", E["base"]["rebate_rs"] / N, 188, 0), ("messages per meter", E["base"]["msg_rs"] / N, 99, 0),
    ("cost per meter base", E["base"]["cost_per_meter_year"], 383, 0), ("cost per meter bear", E["bear"]["cost_per_meter_year"], 309, 0), ("cost per meter bull", E["bull"]["cost_per_meter_year"], 547, 0),
    ("Rs per avoided hour base", E["base"]["rs_per_avoided_hh_h"], 0.29, 2), ("bear", E["bear"]["rs_per_avoided_hh_h"], 0.26, 2), ("bull", E["bull"]["rs_per_avoided_hh_h"], 0.41, 2),
    ("Rs per kW-year", E["base"]["rs_per_kw_year"], 1448, 0), ("DTs over rating", O["network"]["heatwave_evening"]["dts_over_100"], 27, 0), ("DTs over 130%", O["network"]["heatwave_evening"]["dts_over_130"], 20, 0),
    ("peak kW", O["network"]["heatwave_evening"]["peak_kw"], 9715, 0), ("max loading pct", 100.0 * O["network"]["heatwave_evening"]["max_pu"], 265, 0),
    ("comfort cap, all connections pct", O["equity"]["all_pct"][0], 54, 0), ("comfort cap, small shop pct", O["equity"]["by_archetype"]["shop_small"]["bite_pct"][0], 70, 0),
    ("comfort cap, fan and lights pct", O["equity"]["by_archetype"]["lighting_fan"]["bite_pct"][0], 0, 0), ("comfort cap, fridge and TV pct", O["equity"]["by_archetype"]["fridge_tv"]["bite_pct"][0], 0, 0)]
bad = [(l, m, v) for l, m, v, n in LOCK if round(float(m), n) != float(v)]
print("LOCK CHECK:", len(LOCK), "values,", len(bad), "mismatches"); [print("  MISMATCH", b) for b in bad]
f = lambda x, n=2: format(x, ",." + str(n) + "f")
T = ["# UrjaGrid impact model tables", "", "Generated by `check_values.py` from `model_outputs.json`. Every row is a simulation result or an estimate.", ""]
T += ["## T1. Network and exposure by day type", "", "| Day type | Peak temp (C) | Peak demand (kW) | Demand (kWh) | DTs over rating | DTs over 130% | Max loading | Energy above rating (kWh) |", "|---|---|---|---|---|---|---|---|"]
for d in D:
    n = O["network"][d]; T.append("| %s | %s | %s | %s | %d of %d | %d | %s%% | %s |" % (n["label"], n["peak_temp_c"], f(n["peak_kw"], 0), f(n["demand_kwh"], 0), n["dts_over_100"], O["meta"]["dts"], n["dts_over_130"], f(100 * n["max_pu"], 0), f(n["over_kwh"], 0)))
T += ["", "## T2. Outage and caps by day type and case", "", "| Day type | Case | Outage h per home | Homes cut | DTs cut | Trips | Supply availability | Cap home-hours (1,000 W / 500 W / 300 W) | Capped at peak | Constrained at peak |", "|---|---|---|---|---|---|---|---|---|---|"]
for d in D:
    for k in ("baseline", "bear", "base", "bull"):
        x = D[d][k]; T.append("| %s | %s | %s | %s | %d | %d | %s%% | %s / %s / %s | %s | %s |" % (O["network"][d]["label"], "today" if k == "baseline" else k, f(x["out_h_per_hh"]), f(x["hh_hit"], 0), x["dts_hit"], x["trips"], f(x["supply_avail_pct"], 1), f(x["cap_hh_h"][0], 0), f(x["cap_hh_h"][1], 0), f(x["cap_hh_h"][2], 0), f(x["peak_cap_hh"], 0), f(x["peak_bite_hh"], 0)))
T += ["", "## T3. Extra evening shortfall, heatwave day (outage h per home)", "", "| Extra shortfall | Today | Bear | Base | Bull |", "|---|---|---|---|---|"]
for k in O["dip"]: T.append("| %d%% | %s | %s | %s | %s |" % (round(100 * float(k)), *[f(O["dip"][k][c]["out_h_per_hh"]) for c in ("baseline", "bear", "base", "bull")]))
T += ["", "## T4. A year (45 heatwave, 75 monsoon, 245 mild days)", "", "| Case | Outage h per home | Trips | DT-hours above rating | Energy lost in outages (kWh) | DR energy (kWh) | Energy trimmed by caps (kWh) |", "|---|---|---|---|---|---|---|"]
for k in A: T.append("| %s | %s | %s | %s | %s | %s | %s |" % ("today" if k == "baseline" else k, f(A[k]["out_h_per_hh"], 0), f(A[k]["trips"], 0), f(A[k]["over_dt_h"], 0), f(A[k]["lost_kwh"], 0), f(A[k]["dr_kwh"], 0), f(A[k]["cap_kwh"], 0)))
T += ["", "## T5. Unit economics (Rs a year, 7,000 meters)", "", "| Case | Software fee | Rebates to homes | Messages | Total | Per meter | Rs per outage hour avoided | Peak relief (kW) | Rs per kW of relief | Energy kept (kWh) |", "|---|---|---|---|---|---|---|---|---|---|"]
for k in ("bear", "base", "bull"):
    e = E[k]; T.append("| %s | %s | %s | %s | %s | %s | %s | %s | %s | %s |" % (k, f(e["fee_rs"], 0), f(e["rebate_rs"], 0), f(e["msg_rs"], 0), f(e["cost_rs"], 0), f(e["cost_per_meter_year"], 0), f(e["rs_per_avoided_hh_h"]), f(e["peak_relief_kw"], 0), f(e["rs_per_kw_year"], 0), f(e["energy_kept_kwh"], 0)))
T += ["", "## T6. Who a cap constrains at the heatwave peak (share of T1 and T2 connections above the cap)", "", "| Connection type | Count | Comfort 1,000 W | Essential 500 W | Lifeline 300 W |", "|---|---|---|---|---|"]
for a, v in O["equity"]["by_archetype"].items(): T.append("| %s | %s | %s%% | %s%% | %s%% |" % (a, f(v["n"], 0), f(v["bite_pct"][0], 0), f(v["bite_pct"][1], 0), f(v["bite_pct"][2], 0)))
T.append("| all | | %s%% | %s%% | %s%% |" % tuple(f(x, 0) for x in O["equity"]["all_pct"]))
T += ["", "## T7. Assumptions", "", "| ID | Value |", "|---|---|"] + ["| %s | %s |" % (k, json.dumps(v)) for k, v in O["A"].items()] + ["| P (product constants) | %s |" % json.dumps(O["P"])]
if os.environ.get("URJA_DRY"): print("tables lines", len(T)); print("\n".join(T[:14]))
else: (HERE / "model_tables.md").write_text("\n".join(T) + "\n", encoding="utf-8"); print("wrote model_tables.md", len(T), "lines")
if bad: sys.exit(1)
```

---

# PART III: THE RESEARCH DOCUMENT

## 7. Research document spec (`yuva-yodha/research/urjagrid-research.md` and `.pdf`)

### 7.1 Format and rules

- **Length.** At least 30,000 words, with no ceiling, and at least 70 tables. Depth bar: `mandamasterminds/research/satoshi-gate-research.md` (21,000 words, 74 tables) and `iim-lucknow-pivot/research/dream11-pivot-research.md` (49,800 words, 99 tables).
- **Header.** `assemble.py` writes the title, team and "Prepared for" lines. Writers start at their first `## N.` heading.
- **Tags on every number:**

| Tag | Meaning |
|---|---|
| `[S##]` | External source (§5) |
| `[P]` | Product fact from §4 |
| `[M]` | Model output (`model_outputs.json`, `model_tables.md`) |
| `[A##]` | Assumption (§6.3, block `A`) |
| `[X#]`, `[G#]`, `[D#]`, `[I#]` | The brief's own text (§1.2) |

- **Section headings** are declarative findings with a number where one exists. Example: "## 4. The edge: homes in Mathura and Bareilly lose about two hours a day, more than the feeder log admits".
- **Section openers.** Each section opens with a bold **Answer.** paragraph of two to four sentences, then the evidence.
- **Figures.** The PDF is text and tables. Where a section matches a slide, add a line such as "Exhibit: slide 8, counterfactual bars by day type".
- **Language.** §2.2 in full. Humanised analytical prose: concrete, varied sentence length, no hooks, no rhetorical questions, zero em and en dashes.
- **Honesty.** Every model number says "simulated" or "est." at least once per paragraph. The product is a prototype. No repository or live URL appears (L9). No interview is claimed.

### 7.2 Section outline (headings final in meaning; writers may tighten the wording; {…} filled from the model)

| § | Heading | Must contain | Words | Writer |
|---|---|---|---|---|
| 0 | Document control | Purpose; how to read (tag legend table); source hierarchy; model version (the run date); AI-use disclosure (Claude by Anthropic for research, drafting, the model code and the Figma build; every figure checked against its source by the team) | 700 | A |
| 1 | Brief coverage: four goals, six deliverables, five judging criteria, one place each | Tables mapping G1 to G4, D1 to D6, I1 to I5 and the five criteria to document sections and slides | 900 | A |
| 2 | The answer on one page: brownout, never blackout | Recommendation; the contrarian table (§3.2); moneyshot with bear, base and bull; cost per meter; the four honest limits; a 120-word version | 1,300 | A |
| 3 | India's clean power is short after sunset, not at noon | Capacity mix [S01]; record peak and the solar vs non-solar shortage [S02]; ramp and days short [S03]; LGBR on distribution constraints [S04]; UP night peak [S05]; the 2047 framing [X1]; table of the evening gap | 2,500 | A |
| 4 | The edge: homes lose more than the feeder log admits | Roster hours [S06, S15] vs meter-measured hours [S07, S08]; voltage; transformer failures [S10]; AT&C [S11]; value of lost load [S12]; lifeline tariff [S13]; coping with inverters [S14, S51]; who suffers (heatmap as a table) | 2,600 | A |
| 5 | Root cause: the feeder is the unit of control, so a fan and an idle AC are cut alike | Issue tree as nested tables; 5-Whys; MECE split of supply-side, network-side and control-side causes; why rotational shedding is unfair by design; MoP "load shedding is not an option" [S22] | 2,000 | B |
| 6 | The rails are already paid for: 7.24 crore meters with a limiter inside | RDSS numbers [S16]; meter spec [S17]; tender use case [S18]; meter economics and communication gaps [S19]; data under-use [S28]; the UP prepaid reversal and what it teaches about trust [S20, S21] | 2,400 | B |
| 7 | The rules already allow a softer lever | Consumer rights [S23]; resource adequacy [S22]; draft DR framework [S24]; India Energy Stack with UP as a pilot state [S25]; P2P [S26]; DPDP [S27]; what still needs a regulator's sandbox | 2,000 | B |
| 8 | Options appraisal: storage is a lever, not a prerequisite | The five suggested directions plus UrjaGrid scored on five tests (the slide 4 heatmap with reasons per cell); storage economics both ways [S45, S46, S47, S48, S31]; mini-grid cost [S49]; why the timing argument wins for a low-income lane; what would change our mind | 2,800 | B |
| 9 | Precedents: limiting beats cutting where it has been tried | Eskom in full detail, including its failures [S33, S34]; Germany §14a [S35]; France [S36]; Indian DR evidence [S38, S39, S40]; UK DFS [S41]; IEA [S37]; a table of what we borrow and what we change | 2,600 | B |
| 10 | UrjaGrid: the loop, the six levers, four tiers and one floor | Theory of change; the seven-step loop; lever table; tier and cap tables; dispatch timeline; the six safety invariants with their tests [P]; user journeys for the five roles; sample notices in Hindi (Latin script) and English | 3,200 | C |
| 11 | Architecture and technology: engines decide, a model only phrases | Six-layer architecture as a table; data, energy and money flows; every engine with method and status; adapter payloads (DLMS class 71, OCPP, OpenADR); the build-status audit (§4.3) in full; thermal reference points; known soft spots (§4.2) stated plainly | 3,200 | C |
| 12 | Where UrjaGrid sits: beside ADMS and DERMS, below the transformer | Parity matrix with evidence per cell [S44, S52 to S55] and "n/s" meaning; Schneider portfolio context [S42, S43, S44]; Porter's five forces for DISCOM software in India; what UrjaGrid would never build | 2,200 | C |
| 13 | The impact model: {4.2} hours to {0.4} hours per home on the heatwave day (simulated) | Method (§6.1) in prose; network exposure (T1); results by day and case (T2); stress test (T3); a year (T4); why the product's Scenario Lab differs (§4.2) and why this model measures outage hours; sensitivity; limits | 3,400 | D |
| 14 | Affordability: ₹{383} a meter a year to the DISCOM, ₹0 to the home | Unit economics (T5); ₹ per outage hour avoided; ₹ per kW against battery tariffs; the home's coping cost; fee against AMISP charges [S19, S56]; message cost [S50] | 2,200 | D |
| 15 | Ownership, operations and maintenance: the DISCOM owns, a named engineer decides | Who operates locally; RACI; field-worker role; O&M tasks and cadence; data ownership; procurement path (AMISP add-on or DISCOM software line); the business model and why the home pays nothing | 2,200 | D |
| 16 | Fairness: who the cap touches, and how the burden rotates | Equity table (T6); the fairness ledger; the IEA inequality warning [S37] and our answer; protections for T0 and life-support homes; the trust lessons from UP | 1,800 | D |
| 17 | Sustainability: energy, emissions and avoided steel | No new hardware; overload hours −79% (simulated); DT failure context [S10]; evening fossil dependence [S02, S03]; how flexibility lets more solar be used; honest limits | 1,500 | D |
| 18 | The six-week pilot and the road to scale | Gantt as a table; gates; the WIRED-to-LIVE links; what is measured in the pilot; scale path by sub-division, DISCOM and state | 2,000 | E |
| 19 | Risks and mitigations | Register: risk, P, I, score, mitigation, owner, early signal (at least 10 risks) | 1,400 | E |
| 20 | Assumptions register | A01 to A11 and the product constants, with bear, base and bull and the reason for each | 1,000 | E |
| 21 | Research method, limits and the validation still to run | Desk-research method and source count; model limits; the Customer Validation Plan (who, how many, the question, how it changes the design); "no interview has been run" | 1,500 | E |
| 22 | Anticipated judge questions | 20 Q&As, each question as reported speech ("The panel will ask: ..."), answers of two to four sentences with numbers; build on §14 | 2,600 | E |
| 23 | Slide blueprint | Every deck panel mapped to a document section and its source tags | 900 | E |
| App C | Glossary | 40+ terms (DISCOM, DT, AT&C, RDSS, AMISP, HES, MDM, DLMS/COSEM, OBIS, OCPP, OpenADR, Beckn, UEI, SAIDI, SAIFI, LOLP, VoLL, ToD, DR, DERMS, ADMS, BESS, VGF, T0 to T3, lifeline, cap level, rebound, trip, pu, kVA, IEEE C57.91, hot-spot, MILP, quantile, conformal, Jain, Gini, Lorenz, RACI, LGBR, MNRE, CEA, PFC, SERC) | 1,200 | E (file `research/parts/appendix-C-glossary.md`) |

Appendix A (bibliography), Appendix B (model tables) and Appendix D (conflicts) are generated by `assemble.py`.

### 7.3 Writer assignment

| Writer | Sections | Target words |
|---|---|---|
| W-A | §0 to §4 | 8,000 |
| W-B | §5 to §9 | 11,800 |
| W-C | §10 to §12 | 8,600 |
| W-D | §13 to §17 | 11,100 |
| W-E | §18 to §23 and the glossary | 10,600 |

---

## 8. Deck design system

### 8.1 Palette (`C` in §9.1; structure follows `CLAUDE.md` §2, hues changed for this deck)

| Role | Hex | Used for |
|---|---|---|
| primary | `#0B7A3E` | Active ribbon tag, panel titles, numerals, FINDING chip |
| primaryDeep | `#0A2A1C` | Cover background, moneyshot card, so-what bar, counter chip |
| accent | `#B7E34A` | Back-card layer, inactive ribbon tags, chips on dark |
| orange | `#F59E0B` | Lifeline and cap (amber means "limited"), WIRED tag |
| alert | `#D92D20` | Blackout, "today", risks |
| good | `#12805C` | UrjaGrid outcomes, LIVE tag |
| rival | `#1D4E89` | PILOT tag, battery comparison |
| tint / cream / surfaceAlt | `#E3F5C4` / `#F6FAF0` / `#F3F8EA` | Header rows, slide background, zebra rows |
| ink / white | `#0A0A0A` / `#FFFFFF` | All strokes and body text / text on dark |

Colour code that the whole deck keeps: **ink = cut off, amber = capped, green = normal**. It appears on the slide 3 meter wall and is never reused for anything else.

### 8.2 Type and skeleton (fixed by the extras block, §9.2)

- **Fonts.** Poppins Bold and ExtraBold; Inter Semi Bold and Bold.
- **Sizes.** Floor of 22pt for all content text. Source and bibliography text is 14 to 16pt. KPI numerals 34 to 64pt. Cover title 112pt.
- **Core-slide skeleton:**

| Element | Position |
|---|---|
| Ribbon (eight tags = the organisers' eight topics) | x64, y36, h56; counter chip `NN / 11` at x1730 |
| FINDING band | y112, h92 |
| Content zone | y224 to y954 |
| So-what bar | y966, h64 |
| Source line | y1046, 14pt, right-aligned |

- Every panel is white, has a 2px ink outline, a caps title and a rule. Layered cards carry an accent back-card offset by 7px.
- `cornerRadius = 0` everywhere.

### 8.3 Density contract (from the Paytm and Hisaab decks measured at planning time)

| Deck | Node totals on core slides |
|---|---|
| Paytm prime inspiration (`hOJVMGv9nIhDmayTT7DmOt`) | 131 to 302 |
| Hisaab (`H3Zr4ESaceYlV54zvpkgZi`) | 186 to 245 |
| This deck (mock) | 198 to 436 |

Every core slide has five or six distinct visual forms. The slide-by-slide form list is in §3.6.

---

# PART IV: THE DECK CODE (tested blocks; the generator in §12 reads them from this file)

## 9. Preamble

### 9.1 Palette block (replaces the `const C = {...}` and heat-scale lines of the Hisaab preamble)

```js
// ===== URJAGRID PALETTE =====
const C = {
  primary:{r:0.043,g:0.478,b:0.243}, orange:{r:0.961,g:0.620,b:0.043}, primaryDeep:{r:0.039,g:0.165,b:0.110},
  accent:{r:0.718,g:0.890,b:0.290}, alert:{r:0.851,g:0.176,b:0.125}, alertTint:{r:0.992,g:0.894,b:0.882},
  rival:{r:0.114,g:0.306,b:0.537}, rivalTint:{r:0.863,g:0.902,b:0.969},
  good:{r:0.071,g:0.502,b:0.361}, goodTint:{r:0.847,g:0.941,b:0.902}, amberTint:{r:0.996,g:0.925,b:0.784},
  tint:{r:0.890,g:0.961,b:0.769}, cream:{r:0.965,g:0.980,b:0.941}, ink:{r:0.039,g:0.039,b:0.039}, surface:{r:0.929,g:0.929,b:0.929},
  surfaceAlt:{r:0.953,g:0.973,b:0.918}, white:{r:1,g:1,b:1}
};
const HO=[{r:0.996,g:0.953,b:0.851},{r:0.992,g:0.851,b:0.541},{r:0.976,g:0.722,b:0.239},{r:0.851,g:0.494,b:0.027},{r:0.573,g:0.318,b:0.012}];
const HG=[{r:0.918,g:0.965,b:0.941},{r:0.749,g:0.898,b:0.827},{r:0.486,g:0.788,b:0.651},{r:0.180,g:0.620,b:0.431},{r:0.043,g:0.420,b:0.278}];
const HR=[{r:0.992,g:0.886,b:0.886},{r:0.961,g:0.639,b:0.639},{r:0.906,g:0.357,b:0.357},{r:0.784,g:0.118,b:0.118},{r:0.498,g:0.063,b:0.063}];
```

### 9.2 Extras block (appended after the trimmed Hisaab preamble)

```js
// ===== URJAGRID EXTRAS v1 =====
const TEAM=[["Harsh Kawatra","Delhi Technological University","Team Leader"],["Gursimran Kaur","Guru Gobind Singh Indraprastha University","Member"]];
function teamTable(p, x, y, cw) { cw = cw || [300, 660, 160]; const X = [0, cw[0], cw[0] + cw[1]], rh = 76, hh = 50, tw = cw[0] + cw[1] + cw[2], nr = TEAM.length;
  const t = addFrame(p, x, y, tw, hh + rh * nr, C.white, C.ink, 2, "TABLE: team");
  const h = addFrame(t, 0, 0, tw, hh, C.tint, C.ink, 2, "HEAD");
  ["Team Members", "Institution", "Role"].forEach((l, i) => addText(h, "Poppins", "Bold", 22, C.ink, l, X[i] + 16, 0, cw[i] - 24, hh, "LEFT", "CENTER"));
  TEAM.forEach((m, i) => { const r = addFrame(t, 0, hh + rh * i, tw, rh, i % 2 ? C.surfaceAlt : C.white, C.ink, 2, "ROW");
    m.forEach((v, j) => addText(r, "Inter", j === 0 ? "Bold" : "Semi Bold", 22, C.ink, v, X[j] + 16, 0, cw[j] - 24, rh, "LEFT", "CENTER")); });
  [cw[0], cw[0] + cw[1]].forEach(vx => addRect(t, vx - 1, 0, 2, hh + rh * nr, C.ink)); return t; }
const RIB8 = { labels: ["PROBLEM", "SOLUTION", "CHALLENGE FIT", "FEATURES", "TECH", "INNOVATION", "IMPACT", "ROADMAP"], widths: [166, 182, 262, 182, 116, 224, 150, 166] };
const TOTAL = 11;
function tplClear(s) { s.children.slice().forEach(c => c.remove()); s.fills = [{ type: "SOLID", color: C.cream }]; }
function head(s, n) { const act = n >= 2 && n <= 9 ? n - 2 : -1;
  const endX = buildRibbon(s, act, RIB8.labels, RIB8.widths, 64, 36, 56); addWireH(s, endX - 10, 1730, 64, C.ink, 2.5);
  addChip(s, 1730, 36, 126, 56, (n < 10 ? "0" : "") + n + " / " + TOTAL, C.primaryDeep, C.white, 24); }
function finding(s, y, text) { const f = layered(s, 64, y, 1792, 92, C.white, "CARD: finding");
  addChip(f, 16, 24, 150, 44, "FINDING", C.primary, C.white, 22);
  const t = addText(f, "Poppins", "Bold", 28, C.ink, text, 186, 0, 1590, 80, "LEFT", undefined, true); t.name = "HEADLINE";
  while (t.height > 86 && t.fontSize > 24) { t.fontSize = t.fontSize - 1; }
  if (t.height > 86) warnings.push("finding over 2 lines: " + text.slice(0, 40));
  t.y = Math.max(3, (92 - t.height) / 2); return f; }
function hdr(s, n, findingText, source) { tplClear(s); head(s, n); finding(s, 112, findingText);
  const src = addText(s, "Inter", "Semi Bold", 14, C.primary, source, 64, 1046, 1792, 20, "RIGHT", undefined, true); src.name = "SOURCE"; return 224; }
function browser(p, x, y, w, h, title) { const f = addFrame(p, x, y, w, h, C.white, C.ink, 2.5, "CARD: mock " + title);
  addRect(f, 0, 0, w, 40, C.primaryDeep, C.ink, 2);
  [16, 40, 64].forEach((cx, i) => addEllipse(f, cx, 12, 16, 16, [C.alert, C.orange, C.accent][i], C.ink, 1.5));
  addText(f, "Inter", "Bold", 22, C.white, title, 96, 0, w - 112, 40, "LEFT", "CENTER", false); return f; }
function statusTag(p, x, y, kind, w) { w = w || 104; const fill = kind === "LIVE" ? C.good : (kind === "WIRED" ? C.orange : C.rival);
  const f = addFrame(p, x, y, w, 36, fill, C.ink, 1.5, "TAG: " + kind);
  addText(f, "Poppins", "Bold", 22, kind === "WIRED" ? C.ink : C.white, kind, 2, 0, w - 4, 36, "CENTER", "CENTER", false); return f; }
function meterWall(p, x, y, cols, rows, cell, gap, fn) { for (let r = 0; r < rows; r++) for (let c = 0; c < cols; c++)
  addRect(p, x + c * (cell + gap), y + r * (cell + gap), cell, cell, fn(r * cols + c, r, c), C.ink, 1.5); }
function legend(p, x, y, items, o) { o = o || {}; let cx = x; items.forEach(it => { addRect(p, cx, y + 6, 20, 20, it[0], C.ink, 1.5);
  const t = TL(p, cx + 28, y, 22, it[1], { family: "Inter", style: "Bold" }); cx += 28 + t.width + (o.gap || 22); }); return cx; }
function cs(x, y, w, h, n, o) { const L = x + (o.padL || 70), R = x + w - (o.padR || 120), Tp = y + 16, B = y + h - 40;
  return { X: i => L + (R - L) * i / (n - 1), Y: v => B - (B - Tp) * (v - o.yMin) / (o.yMax - o.yMin), L, R, Tp, B }; }
function band(p, sc, lo, hi, fill) { const pts = hi.map((v, i) => [sc.X(i), sc.Y(v)]).concat(lo.map((v, i) => [sc.X(i), sc.Y(v)]).reverse()); return addPoly(p, pts, fill); }
function photo(p, x, y, w, h, name) { const f = addFrame(p, x, y, w, h, C.surface, C.ink, 2.5, "PHOTO: " + name); f.clipsContent = true; return f; }
function mapNode(p, x, y, w, h, num, title, sub, o) { o = o || {}; const f = layered(p, x, y, w, h, o.fill || C.white, "CARD: node " + title);
  addBadge(f, 10, 9, 36, num, o.badge || C.primary, C.white); TL(f, 54, 8, 22, title, { color: o.titleColor || C.primary, maxW: w - 62 });
  TB(f, 12, 48, w - 24, h - 52, 22, sub); return f; }
// ===== END URJAGRID EXTRAS =====
```

### 9.3 `values.js` (the generator writes this block verbatim; §6.6 checks every model number in it against `model_outputs.json`)

```js
const V = {
  s2: { finding: "On India's record-demand day the grid was short 2.57 GW after sunset against 0.18 GW in solar hours, and the edge still copes by switching whole neighbourhoods off",
    sowhat: "the limiter sits inside every smart meter, and it is used for billing, not for keeping the lights on",
    source: "Source: MoP data via Down To Earth (21 May 2026) | EAC-PM working paper (Jul 2026) | CEEW smart meter study (2020) | CEA meeting via Mercom (Nov 2025) | PFC 14th rating | Rajya Sabha reply (Jul 2026) | CEA meter specification (2020)" },
  s3: { finding: "UrjaGrid forecasts each transformer's shortfall and tries five softer levers before a blackout: a 300 W lifeline replaces a dark home, and a named engineer approves every plan",
    sowhat: "the engineer opens a ranked plan, not a shedding roster, and a capped home keeps 300 W for its fan, lights and phone",
    source: "Source: UrjaGrid code (constants, dispatcher, safety tests) | Team IdeaForge impact model, heatwave day, base case (simulated) | Tags follow the status audit on slide 6" },
  s4: { finding: "UrjaGrid answers all 4 goals and all 6 deliverables of Challenge 03 with software on meters already installed, so storage and peer trading plug in later as levers, not prerequisites",
    sowhat: "the brief asks for affordable, local flexibility without major capital; the cheapest flexible asset in a low-income lane is already on the wall",
    source: "Source: Yuva Yodha Challenge 03 brief and FAQ | SEA and GIZ with Eskom (Sep 2024) | Bundesnetzagentur, Section 14a | Enedis test via expertise-energie (2024) | IEEFA-JMK (May 2026) | IEA, The Value of Demand Flexibility (Dec 2025)" },
  s5: { finding: "Five roles work from one forecast: the home gets a notice two hours ahead, the engineer approves by name, and the prototype already has 28 screens and 514 tests",
    sowhat: "nothing reaches a meter until a Junior or Assistant Engineer approves, and the approver's name is read from the login, not typed",
    source: "Source: UrjaGrid prototype code, audited 3 Oct 2026 | Prototype screens show illustrative data | Message text is the product's own template" },
  s6: { finding: "Deterministic engines compute every number and a language model only phrases it: 10 capabilities run today, 12 are coded and unit-tested against simulators, and 6 wait for a pilot",
    sowhat: "the numbers come from tested engines, and every protocol stays a simulator until a DISCOM connects a head-end",
    source: "Source: Team IdeaForge audit of the UrjaGrid prototype code, 3 Oct 2026 | IEEE C57.91 reference points asserted in the product's own tests | LIVE, WIRED, PILOT as defined on this slide" },
  s7: { finding: "No vendor page we read states meter-level load limiting for reliability or fairness accounting; UrjaGrid adds both, with a named approver, on rails India has already paid for",
    sowhat: "the lifeline is a floor the software guarantees, and the burden rotates so the same lane is not first every time",
    source: "Source: Vendor public pages read Oct 2026 (n/s: not stated on the page) | Team IdeaForge impact model (simulated) | SEA and GIZ with Eskom (2024) | Bundesnetzagentur | Tata Power-DDL programme page | UrjaGrid column is a prototype" },
  s8: { finding: "On the simulated heatwave day, household outage falls from 4.2 hours to 0.4 hours, a 90% cut, at ₹383 per meter a year paid by the DISCOM and ₹0 by the home",
    sowhat: "a simulated estimate on a deliberately tight network, with the same shedding rules on both sides; the six-week pilot turns it into a measurement",
    source: "Source: Team IdeaForge impact model on the UrjaGrid engine's network and demand (assumptions A01 to A11, est.) | DERC tariff orders via SolarQuarter (2024, 2026) | Prayas (May 2025) | Retail listings (2026)" },
  s9: { finding: "Six weeks take one sub-division from read-only shadow mode to live: the DISCOM owns and operates it, the fee is ₹8 a meter a month, and 4 of 48 transformers still need steel",
    sowhat: "one MoU, one sub-division, read-only for two weeks; the pilot's own meters then replace this deck's simulation",
    source: "Source: UrjaGrid pilot plan | Team IdeaForge impact model (simulated) | Prayas, UP prepaid rollback reports (2026) | No interview has been run; the validation plan is a plan" },
  s10: { finding: "Every figure is a product fact, a named source or a model output with stated assumptions; the reliability gain is simulated, the adapters are simulators and no user research is claimed",
    sowhat: "the assumptions move the base case between 0.0 and 0.8 hours; none of them brings back the 4.2 hours of the status quo",
    source: "Source: Team IdeaForge research document and impact model, 4 Oct 2026 | UrjaGrid prototype code | AI tools assisted research, drafting and layout; every figure was checked against its source" },
  net: { dts: 48, feeders: 12, subs: 5, consumers: "7,000", t0: 69, kva: "10,105", over100: 27, over130: 20, maxPu: "265%", peakKw: "9,715", peakTemp: "44.2" },
  out: { base: 4.21, bear: 0.83, mid: 0.40, bull: 0.00, cut: "90%", monsoon: [3.71, 0.00], mild: [3.58, 0.00], hitSq: 62, hitUg: 9, capPeak: 49 },
  dip: { labels: ["0%", "10%", "20%", "30%", "40%"], sq: [4.21, 6.35, 6.35, 6.35, 6.35], ug: [0.40, 0.40, 0.40, 0.40, 1.00] },
  caps: { hh: [18224, 7033, 8065], peak: "3,402", bitten: "1,751" },
  econ: { fee: 96, rebate: 188, msg: 99, total: 383, perHour: "₹0.29", kw: 1448, bess: [3591, 5700], inverter: "₹2,800 to ₹3,800" },
  annual: { sq: "1,345", bear: "152", mid: "18", bull: "0", overSq: "23,896", overUg: "5,011" },
  equity: [["Fan and lights", 0], ["Fridge and TV", 0], ["Small shop", 70], ["Cooler or AC", 100], ["Cold-chain shop", 100]],
  status: { live: 10, wired: 12, pilot: 6 }
};
```

## 10. Slide code

### Slide 2: Problem

```js
{ const s = await figma.getNodeByIdAsync("S2");
hdr(s, 2, V.s2.finding, V.s2.source);
const a1 = panel(s, 64, 224, 600, 350, "THE GAP HAS MOVED TO THE EVENING");
hBars(a1, 16, 62, 568, [{ label: "Solar hours", value: 0.18, text: "0.18 GW", color: C.good }, { label: "After sunset", value: 2.57, text: "2.57 GW", color: C.alert }], { labelW: 170, rowH: 46, barH: 30, valueW: 120, max: 2.6 });
T(a1, 16, 160, 568, 22, "Shortage on 21 May 2026, the day demand hit a record 270.8 GW");
RT(a1, 16, 222, 568, 22, [["36 days ", "R"], ["short after sunset against ", ""], ["6 days", "B"], [" in solar hours, April to May 2026", ""]]);
RT(a1, 16, 284, 568, 22, [["Evening ramp: ", "B"], ["36 GW in May 2023, ", ""], ["74 GW", "R"], [" in May 2026", ""]]);
const a2 = panel(s, 680, 224, 580, 350, "THE FEEDER LOG HIDES THE HOME");
vBars(a2, 16, 52, 548, 204, [{ label: "District HQ", value: 1.3, text: "1.3 h", color: C.orange }, { label: "All homes", value: 2.0, text: "2.0 h", color: C.orange }, { label: "Small towns", value: 3.5, text: "3.5 h", color: C.alert }], { labelH: 40, max: 4, valSize: 22 });
RT(a2, 16, 262, 548, 22, [["Outage hours a day, read from meters. ", ""], ["The feeder log for all of July 2019 showed 3.5 h in Bareilly and 4.8 h in Mathura", "B"]]);
const a3 = panel(s, 1276, 224, 580, 350, "THE TRANSFORMER IS THE WEAK LINK");
[["about 10%", "of transformers fail in a year"], ["1.3 million", "failures a year, CEA meeting"], ["70%", "of areas outside 230 V ±6%"], ["19.54%", "UP loss, 15.04% for India"]].forEach((k, i) => {
  const f = addFrame(a3, 16 + (i % 2) * 278, 62 + Math.floor(i / 2) * 142, 270, 132, i === 0 ? C.alertTint : C.surfaceAlt, C.ink, 1.5, "CELL");
  TL(f, 12, 6, 34, k[0], { family: "Poppins", style: "ExtraBold", color: i === 0 ? C.alert : C.primary, maxW: 246 }); T(f, 12, 62, 246, 22, k[1]); });
const b1 = panel(s, 64, 588, 700, 366, "3 CAUSES, ONE BLUNT TOOL");
[116, 350, 584].forEach(x => addLine(b1, x, 154, 350, 190, C.ink, 2.5));
[["Evening supply dips as solar falls", 16], ["Transformer overheats at the peak", 250], ["No view below the feeder", 484]].forEach(q => { const f = addFrame(b1, q[1], 62, 200, 92, C.white, C.ink, 2, "CARD: cause"); TB(f, 8, 0, 184, 92, 22, q[0], { family: "Inter", style: "Bold", align: "CENTER" }); });
const hub = addFrame(b1, 200, 190, 300, 52, C.primaryDeep, C.ink, 2, "CARD: hub"); TB(hub, 6, 0, 288, 52, 22, "Feeder switched off", { family: "Poppins", style: "Bold", color: C.white, align: "CENTER" });
addArrow(b1, 350, 242, 350, 266, C.ink, 3, 10);
const gap = addFrame(b1, 16, 266, 668, 88, C.tint, C.primary, 3, "CARD: gap"); TB(gap, 10, 0, 648, 88, 22, "The unit of control is the feeder, so a fan, a fridge of insulin and an idle AC are cut alike", { family: "Poppins", style: "Bold", color: C.primary, align: "CENTER" });
const b2 = panel(s, 780, 588, 520, 366, "WHO LOSES WHAT IN A CUT");
heatmap(b2, 16, 62, ["Low-income home", "Small shop", "Clinic", "Student"], ["Light", "Cooling", "Income", "Health"], [[4, 5, 3, 4], [3, 3, 5, 2], [2, 5, 4, 5], [5, 3, 1, 2]], { labelW: 212, colW: 69, rowH: 48, headH: 48, scale: HR, min: 1, max: 5, name: "TABLE: pain" });
T(b2, 16, 312, 488, 22, "Team reading, 1 low to 5 high");
const b3 = panel(s, 1316, 588, 540, 366, "A LIMITER ON EVERY WALL, UNUSED");
addTable(b3, 16, 62, [300, 208], ["Smart meters", "Status"], [["Installed, Jun 2026", "7.24 crore"], ["Sanctioned, RDSS", "20.33 crore"], ["Load-limit switch", "Required"], ["Used for reliability", "None found"], ["UP prepaid reversed", "83 lakh"]], { headerH: 40, rowH: 44, name: "TABLE: meters", align: ["LEFT", "RIGHT"] });
T(b3, 16, 330, 508, 22, "RDSS tenders name the use case");
soWhat(s, 966, 64, [["The gap: ", "A"], [V.s2.sowhat, "W"]]);
results.push({ slide: s.id, total: s.findAll(() => true).length, top: s.children.length }); }
```

### Slide 3: Solution

```js
{ const s = await figma.getNodeByIdAsync("S3");
hdr(s, 3, V.s3.finding, V.s3.source);
const a1 = panel(s, 64, 224, 1100, 350, "SIX LEVERS, ALWAYS IN THIS ORDER, SOFTEST FIRST");
addTable(a1, 16, 62, [60, 230, 450, 220, 108], ["#", "Lever", "What happens", "Rail", "Status"], [
  ["L1", "Voluntary ask", "WhatsApp or IVR ask, ₹2 a unit", "Channels", "WIRED"], ["L2", "Managed charging", "E-rickshaw and EV hubs slowed", "OCPP 1.6J", "WIRED"],
  ["L3", "Shiftable loads", "Pumps and towers moved off peak", "OpenADR 3", "WIRED"], ["L4", "Existing storage", "Batteries already on the network", "Beckn, UEI", "WIRED"],
  ["L5", "Lifeline limit", "Cap with expiry, floor of 300 W", "DLMS via HES", "WIRED"], ["L6", "Rotational cut", "Status quo, the last resort only", "Feeder", "LIVE"]],
  { headerH: 40, rowH: 40, name: "TABLE: levers", align: ["LEFT", "LEFT", "LEFT", "LEFT", "CENTER"], rowFills: [null, null, null, null, C.amberTint, C.alertTint], cellColor: (r, c) => c === 4 ? (r === 5 ? C.good : C.primaryDeep) : C.ink, boldCols: [1, 4] });
const a2 = panel(s, 1180, 224, 676, 350, "100 HOMES ON THE HEATWAVE DAY");
const wall = (x, n) => meterWall(a2, x, 100, 10, 10, 20, 3, i => i < n[0] ? C.ink : (i < n[0] + n[1] ? C.orange : C.good));
TL(a2, 16, 62, 22, "Status quo", { family: "Inter", style: "Bold" }); wall(16, [V.out.hitSq, 0]);
TL(a2, 270, 62, 22, "UrjaGrid", { family: "Inter", style: "Bold" }); wall(270, [V.out.hitUg, V.out.capPeak]);
legend(a2, 520, 104, [[C.ink, "Cut off"]]); legend(a2, 520, 140, [[C.orange, "Capped"]]); legend(a2, 520, 176, [[C.good, "Normal"]]);
RT(a2, 520, 220, 140, 22, [["62 cut", "R"], [" to ", ""], ["9", "G"]]);
T(a2, 520, 262, 140, 22, "Simulated, base case");
const b1 = panel(s, 64, 588, 560, 366, "4 TIERS, 3 CAP LEVELS, 1 FLOOR");
addTable(b1, 16, 62, [70, 230, 228], ["Tier", "Who", "Rule"], [["T0", "Critical loads", "Never capped"], ["T1", "Homes", "Floor of 300 W"], ["T2", "Shops", "Floor of 500 W"], ["T3", "Flexible loads", "Shifted first"]], { headerH: 34, rowH: 30, name: "TABLE: tiers", align: ["LEFT", "LEFT", "LEFT"] });
heatmap(b1, 16, 224, ["Comfort", "Essential", "Lifeline"], ["Home", "Shop"], [[1000, 2000], [500, 1000], [300, 500]], { labelW: 228, colW: 150, rowH: 34, headH: 34, scale: HO, levels: v => v >= 1000 ? 0 : (v >= 500 ? 2 : 3), fmt: v => fmtN(v) + " W", name: "TABLE: caps" });
const b2 = panel(s, 640, 588, 600, 366, "ONE EVENING, SIX TIMED STEPS");
addWireH(b2, 48, 552, 122, C.ink, 3);
[["T−120", "Notice to homes"], ["T−30", "Signal chargers"], ["T−15", "Limit set in meter"], ["T", "Window starts"], ["End", "Limit expires"], ["T+15", "Reads verify"]].forEach((q, i) => { const x = 48 + i * 100.8;
  addEllipse(b2, x - 12, 110, 24, 24, i === 2 ? C.orange : C.primary, C.ink, 2);
  TL(b2, 0, 70, 22, q[0], { family: "Poppins", style: "Bold", color: C.primary, centerAt: x });
  const f = addFrame(b2, 16 + (i % 3) * 192, 152 + Math.floor(i / 3) * 62, 184, 54, i === 2 ? C.amberTint : C.surfaceAlt, C.ink, 1.5, "CELL"); TB(f, 6, 0, 172, 54, 22, (i + 1) + ". " + q[1], { family: "Inter", style: "Bold" }); });
formulaBox(b2, 16, 284, 568, 64, "No cap command with under 30 minutes of notice", { chip: "RULE", chipW: 100 });
const b3 = panel(s, 1256, 588, 600, 366, "SIX SAFETY RULES, EACH WITH A TEST");
badgeList(b3, 16, 62, 568, ["T0 sites and homes are never capped", "No cap goes below 300 W", "Every cap carries an expiry time", "At least 30 minutes of notice", "No dispatch without a named approver", "No language model inside an engine"], { d: 38, pitch: 49 });
soWhat(s, 966, 64, [["Day one: ", "A"], [V.s3.sowhat, "W"]]);
results.push({ slide: s.id, total: s.findAll(() => true).length, top: s.children.length }); }
```

### Slide 4: Challenge fit

```js
{ const s = await figma.getNodeByIdAsync("S4");
hdr(s, 4, V.s4.finding, V.s4.source);
const a1 = panel(s, 64, 224, 880, 350, "THE BRIEF, LINE BY LINE");
addTable(a1, 16, 62, [348, 400, 100], ["The brief asks", "UrjaGrid answers", "Slide"], [
  ["Bridge intermittency gaps", "36 h forecast, lever ladder", "3, 8"], ["Stay local, manageable", "Runs transformer by transformer", "5, 6"],
  ["Be affordable", "Home pays ₹0, fee ₹8 a month", "8"], ["Support the DISCOM", "Risk ranking, DR signals", "5, 6"],
  ["Measured reliability gain", "4.2 h to 0.4 h (simulated)", "8"], ["Ownership, O&M, economics", "DISCOM-run, engineer approves", "9"]],
  { headerH: 40, rowH: 40, name: "TABLE: brief map", align: ["LEFT", "LEFT", "CENTER"] });
const a2 = panel(s, 960, 224, 896, 350, "5 SUGGESTED DIRECTIONS, 5 TESTS (TEAM VIEW, 1 TO 5)");
heatmap(a2, 16, 62, ["Community storage", "Microgrid control", "Peer-to-peer", "Forecast and shift", "DISCOM dashboards", "UrjaGrid"], ["No capex", "Weeks", "Reach", "DISCOM", "Proof"],
  [[1, 2, 3, 3, 4], [2, 2, 2, 3, 4], [3, 2, 2, 3, 3], [5, 4, 3, 4, 3], [5, 4, 3, 5, 3], [5, 4, 5, 5, 5]], { labelW: 264, colW: 120, rowH: 38, headH: 40, scale: HG, min: 1, max: 5, name: "TABLE: options" });
const ol = addRect(a2, 16, 62 + 40 + 5 * 38, 864, 38, null, C.primary, 4); ol.name = "OUTLINE";
const b1 = panel(s, 64, 588, 560, 366, "JUDGED ON FIVE CRITERIA");
stackH(b1, 16, 62, 528, 44, [{ value: 20, color: C.tint, text: "20" }, { value: 20, color: C.accent, text: "20" }, { value: 25, color: C.primary, text: "25", textColor: C.white }, { value: 20, color: C.accent, text: "20" }, { value: 15, color: C.tint, text: "15" }], { minInside: 40 });
addTable(b1, 16, 118, [330, 80, 118], ["Criterion", "%", "Slide"], [["Problem and idea", "20", "2, 7"], ["Architecture, design", "20", "5, 6"], ["Impact, measurability", "25", "8"], ["Feasibility, cost", "20", "8, 9"], ["Sustainability", "15", "8"]],
  { headerH: 36, rowH: 38, name: "TABLE: criteria", align: ["LEFT", "CENTER", "CENTER"], rowFills: [null, null, C.tint, null, null] });
const b2 = panel(s, 640, 588, 640, 366, "LIMIT, DO NOT CUT: 3 PRECEDENTS");
addTable(b2, 16, 62, [150, 250, 208], ["Where", "The rule", "Reported result"], [["South Africa", "10 A limit by meter", "15.3 MW, 9,000 homes"], ["Germany", "Dim devices to 4.2 kW", "Law since Jan 2024"], ["France", "3 kW for two hours", "Use fell 20% in test"]],
  { headerH: 40, rowH: 56, name: "TABLE: precedents", align: ["LEFT", "LEFT", "LEFT"] });
RT(b2, 16, 280, 608, 22, [["Eskom: ", "B"], ["customers favoured load limiting over load shedding; national rollout approved in January 2024", ""]]);
const b3 = panel(s, 1296, 588, 560, 366, "SOFTWARE ARRIVES BEFORE STEEL");
hBars(b3, 16, 62, 528, [{ label: "Awarded, GW", value: 10.4, text: "10.4", color: C.orange }, { label: "Built, GWh", value: 1.8, text: "1.8", color: C.alert }], { labelW: 190, rowH: 44, barH: 28, valueW: 70, max: 10.4 });
T(b3, 16, 154, 528, 22, "Standalone storage awarded in 2025 and installed by March 2026");
const q = addFrame(b3, 16, 220, 528, 132, C.tint, C.primary, 3, "CARD: iea"); T(q, 12, 8, 504, 22, "Flexibility delivers capacity \"at a cost up to three times lower than building new capacity\". IEA, December 2025", { family: "Inter", style: "Bold" });
soWhat(s, 966, 64, [["Fit: ", "A"], [V.s4.sowhat, "W"]]);
results.push({ slide: s.id, total: s.findAll(() => true).length, top: s.children.length }); }
```

### Slide 5: Features

```js
{ const s = await figma.getNodeByIdAsync("S5");
hdr(s, 5, V.s5.finding, V.s5.source);
const a1 = panel(s, 64, 224, 1100, 350, "PROTOTYPE SCREENS (ILLUSTRATIVE DATA)");
[["command", "Command centre"], ["plans", "Flex Plans desk"], ["consumer", "Home view"]].forEach((q, i) => { photo(a1, 16 + i * 360, 62, 348, 218, q[0]); TL(a1, 16 + i * 360, 290, 22, q[1], { family: "Inter", style: "Bold" }); });
const a2 = panel(s, 1180, 224, 676, 350, "WHAT THE HOME RECEIVES");
const ph = phone(a2, 16, 62, 330, 276, "UrjaGrid"); const bub = addFrame(ph, 12, 98, 306, 172, C.goodTint, C.ink, 1.5, "CELL");
T(bub, 10, 6, 286, 22, "From 18:00, your connection will be limited to 300W until 20:00. Essential appliances will keep working.");
[["Channels", "WhatsApp, IVR, SMS"], ["Languages", "Hindi and English"], ["First notice", "2 hours ahead"], ["Rebate", "₹2 a unit shifted"]].forEach((q, i) => { const f = addFrame(a2, 362, 62 + i * 70, 298, 62, i === 2 ? C.tint : C.surfaceAlt, C.ink, 1.5, "CELL");
  TL(f, 10, 0, 22, q[0], { color: C.primary, maxW: 278 }); TL(f, 10, 33, 22, q[1], { family: "Inter", style: "Bold", maxW: 278 }); });
const b1 = panel(s, 64, 588, 660, 366, "FIVE ROLES, ONE SCREEN EACH");
addTable(b1, 16, 62, [216, 204, 208], ["Role", "Surface", "Job"], [["Home or shop", "Phone, chat", "Sees notice"], ["Field worker", "Field app", "Registers T0"], ["Junior Engineer", "Plans desk", "Approves, edits"], ["Asst Engineer", "Command centre", "Watches health"], ["Regulator", "Regulator view", "Aggregates only"]],
  { headerH: 40, rowH: 48, name: "TABLE: roles", align: ["LEFT", "LEFT", "LEFT"] });
const b2 = panel(s, 740, 588, 540, 366, "ROLE BY CHANNEL");
const ch = [[1, 5, 5, 3], [1, 5, 3, 1], [5, 1, 1, 1], [5, 1, 1, 3], [5, 1, 1, 1]];
heatmap(b2, 16, 62, ["Home", "Field", "JE", "AE", "Regulator"], ["Desk", "Phone", "Chat", "Voice"], ch, { labelW: 152, colW: 89, rowH: 44, headH: 44, scale: HG, min: 1, max: 5, fmt: v => v === 5 ? "Main" : (v === 3 ? "Also" : "No"), name: "TABLE: channels" });
T(b2, 16, 334, 508, 22, "Chat: WhatsApp or IVR");
const b3 = panel(s, 1296, 588, 560, 366, "BUILT AND COUNTED");
[["28", "screens"], ["54", "API routes"], ["352", "backend tests"], ["162", "frontend tests"], ["6", "safety rules"], ["15", "read-only tools"]].forEach((k, i) => {
  const f = addFrame(b3, 16 + (i % 2) * 268, 62 + Math.floor(i / 2) * 98, 260, 90, i === 4 ? C.tint : C.surfaceAlt, C.ink, 1.5, "CELL");
  TL(f, 12, 2, 34, k[0], { family: "Poppins", style: "ExtraBold", color: C.primary }); T(f, 12, 54, 236, 22, k[1]); });
soWhat(s, 966, 64, [["In use: ", "A"], [V.s5.sowhat, "W"]]);
results.push({ slide: s.id, total: s.findAll(() => true).length, top: s.children.length }); }
```

### Slide 6: Tech

```js
{ const s = await figma.getNodeByIdAsync("S6");
hdr(s, 6, V.s6.finding, V.s6.source);
const a = panel(s, 64, 224, 1792, 310, "SIX LAYERS: DATA GOES UP, COMMANDS COME DOWN ONLY AFTER A HUMAN APPROVES");
[["PEOPLE", ["Home, shop", "Field worker", "JE, AE, regulator"], "LIVE"], ["SURFACES", ["Next.js dashboard", "Two phone apps", "Voice and text ask"], "LIVE"], ["SERVICES", ["FastAPI, 54 routes", "Live event stream", "6 roles, signed login"], "LIVE"],
 ["ENGINES", ["Thermal, optimiser", "Forecast, power flow", "Baseline, fairness"], "LIVE"], ["ADAPTERS", ["DLMS, OCPP", "OpenADR, Beckn", "WhatsApp, IVR, SMS"], "WIRED"], ["RAILS", ["Smart meters", "Chargers, pumps", "Phones"], "PILOT"]].forEach((q, i) => {
  const f = addFrame(a, 16 + i * 296, 60, 280, 186, i === 3 ? C.tint : C.white, C.ink, 2, "CARD: layer " + q[0]);
  TL(f, 12, 4, 24, q[0], { color: C.primary, maxW: 150 }); statusTag(f, 164, 8, q[2]); q[1].forEach((ln, j) => T(f, 12, 56 + j * 40, 256, 22, ln));
  if (i < 5) addArrow(a, 16 + i * 296 + 281, 153, 16 + (i + 1) * 296 - 1, 153, C.ink, 3, 9); });
const st = addFrame(a, 16, 256, 1760, 44, C.surfaceAlt, C.ink, 2, "CARD: flows"); TB(st, 12, 0, 1736, 44, 22, "Money: the DISCOM pays ₹8 a meter a month and a ₹2 a unit rebate to homes that shift; the home pays nothing", { family: "Inter", style: "Bold" });
const b1 = panel(s, 64, 548, 700, 406, "8 ENGINES, EACH WITH ITS OWN TESTS");
const eng = [["Load model", "5 archetypes, weather", "LIVE"], ["Thermal", "IEEE C57.91, steady state", "LIVE"], ["Optimiser", "MILP on HiGHS, fallback", "LIVE"], ["Baseline", "Rotational cut, trips", "LIVE"], ["Forecaster", "LightGBM, 3 quantiles", "WIRED"], ["Power flow", "Radial sweep solver", "WIRED"], ["DR learning", "Beta-Bernoulli", "WIRED"], ["Fairness", "Jain, Gini, Lorenz", "WIRED"]];
addTable(b1, 16, 62, [190, 340, 138], ["Engine", "Method", "Status"], eng, { headerH: 36, rowH: 37, name: "TABLE: engines", align: ["LEFT", "LEFT", "CENTER"], cellColor: (r, c) => c === 2 ? (eng[r][2] === "LIVE" ? C.good : C.primaryDeep) : C.ink, boldCols: [2] });
const b2 = panel(s, 780, 548, 500, 406, "STATUS, COUNTED HONESTLY");
stackH(b2, 16, 62, 468, 50, [{ value: V.status.live, color: C.good, text: "10", textColor: C.white }, { value: V.status.wired, color: C.orange, text: "12" }, { value: V.status.pilot, color: C.rival, text: "6", textColor: C.white }], { minInside: 40 });
[["LIVE", "Runs in the prototype today"], ["WIRED", "Coded, tested on a simulator"], ["PILOT", "Not built: needs a DISCOM"]].forEach((q, i) => { statusTag(b2, 16, 130 + i * 62, q[0]); T(b2, 132, 126 + i * 62, 352, 22, q[1], { family: "Inter", style: "Bold" }); });
T(b2, 16, 322, 468, 22, "Prototype stage: the screens run on illustrative data");
const b3 = panel(s, 1296, 548, 560, 406, "THERMAL MODEL MEETS THE STANDARD");
addTable(b3, 16, 62, [132, 132, 132, 132], ["Load", "Ambient", "Hot-spot", "Ageing"], [["100%", "30 °C", "110.0 °C", "1.0x"], ["120%", "42 °C", "146.1 °C", "29x"]], { headerH: 40, rowH: 44, name: "TABLE: thermal", align: ["LEFT", "RIGHT", "RIGHT", "RIGHT"] });
formulaBox(b3, 16, 204, 528, 84, "Hot-spot = ambient + oil rise + winding rise", { chip: "MODEL", chipW: 120 });
formulaBox(b3, 16, 300, 528, 84, "Over 130% for 30 minutes: out for 2 hours", { chip: "TRIP", chipW: 120 });
soWhat(s, 966, 64, [["Conclusively: ", "A"], [V.s6.sowhat, "W"]]);
results.push({ slide: s.id, total: s.findAll(() => true).length, top: s.children.length }); }
```

### Slide 7: Innovation

```js
{ const s = await figma.getNodeByIdAsync("S7");
hdr(s, 7, V.s7.finding, V.s7.source);
const a1 = panel(s, 64, 224, 1040, 350, "6 FEATURES, 6 PRODUCTS, ONE SET OF ROWS");
const P7 = [["n/s", "n/s", "Yes", "Yes", "n/s", "Part"], ["Part", "Yes", "Yes", "Yes", "Yes", "Yes"], ["n/s", "n/s", "n/s", "n/s", "n/s", "Yes"], ["n/s", "n/s", "n/s", "n/s", "n/s", "Part"], ["n/s", "n/s", "n/s", "Yes", "n/s", "Yes"], ["n/s", "Part", "n/s", "n/s", "n/s", "Yes"]];
const lv = w => w === "Yes" ? 5 : (w === "Part" ? 3 : 1);
heatmap(a1, 16, 62, ["Transformer forecast", "Automated DR", "Meter limit, not a cut", "Fairness accounting", "Human approval gate", "WhatsApp or IVR to home"], ["DERMS", "Fluentgrid", "Itron", "Bidgely", "Kimbal", "UrjaGrid"], P7.map(r => r.map(lv)),
  { labelW: 318, colW: 115, rowH: 38, headH: 40, scale: HG, min: 1, max: 5, fmt: (v, i, j) => P7[i][j], name: "TABLE: parity" });
const ol = addRect(a1, 16 + 318 + 5 * 115, 62, 115, 268, null, C.primary, 4); ol.name = "OUTLINE";
const a2 = panel(s, 1120, 224, 736, 350, "WHO THE COMFORT CAP ACTUALLY TOUCHES");
hBars(a2, 16, 62, 704, V.equity.map(e => ({ label: e[0], value: Math.max(e[1], 1), text: e[1] + "%", color: e[1] === 0 ? C.good : C.orange })), { labelW: 220, rowH: 42, barH: 26, valueW: 90, max: 100 });
RT(a2, 16, 278, 704, 22, [["54% of connections ", "B"], ["are constrained at the peak; ", ""], ["none of the two lowest-use home types", "G"], [" (simulated)", ""]]);
const b1 = panel(s, 64, 588, 560, 366, "FIVE CHOICES, NEW TOGETHER");
badgeList(b1, 16, 62, 528, ["Limit, do not cut: the home keeps 300 W", "The meter is the unit of fairness", "Softest lever first, by rule", "A named engineer signs each plan", "Engines decide, the model phrases"], { d: 40, pitch: 58 });
const b2 = panel(s, 640, 588, 600, 366, "BESIDE THE GRID STACK, NOT OVER IT");
[["ADMS", "Feeders, switching, restoration", C.surfaceAlt, C.ink], ["DERMS", "Solar, storage, load relief", C.surfaceAlt, C.ink], ["URJAGRID", "Below the transformer: homes, shops", C.tint, C.primary]].forEach((q, i) => {
  const f = addFrame(b2, 16, 62 + i * 88, 568, 72, q[2], q[3], i === 2 ? 3 : 2, "CARD: stack " + q[0]); TL(f, 12, 2, 22, q[0], { color: C.primary, maxW: 200 }); TL(f, 12, 34, 22, q[1], { family: "Inter", style: "Bold", maxW: 544 });
  if (i < 2) addArrow(b2, 300, 62 + i * 88 + 73, 300, 62 + (i + 1) * 88 - 1, C.ink, 3, 8); });
T(b2, 16, 326, 568, 22, "Team view: complements, does not replace");
const b3 = panel(s, 1256, 588, 600, 366, "BORROWED, THEN CHANGED");
addTable(b3, 16, 62, [130, 216, 222], ["From", "Their rule", "Ours"], [["Eskom", "Meter cuts if over 10 A", "300 W floor, approver"], ["Germany", "Dim large devices", "Dim by tier, with expiry"], ["Delhi DR", "₹50 to ₹100 an event", "₹2 a unit, by WhatsApp"]], { headerH: 40, rowH: 62, name: "TABLE: borrowed", align: ["LEFT", "LEFT", "LEFT"] });
T(b3, 16, 300, 568, 22, "No Indian DISCOM use of the limiter for reliability was found");
soWhat(s, 966, 64, [["New here: ", "A"], [V.s7.sowhat, "W"]]);
results.push({ slide: s.id, total: s.findAll(() => true).length, top: s.children.length }); }
```

### Slide 8: Impact (the moneyshot)

```js
{ const s = await figma.getNodeByIdAsync("S8");
hdr(s, 8, V.s8.finding, V.s8.source);
const m = layered(s, 64, 224, 600, 350, C.primaryDeep, "CARD: moneyshot");
addChip(m, 20, 16, 520, 44, "OUTAGE PER HOME, HEATWAVE DAY", C.accent, C.ink, 22);
nm(TL(m, 20, 70, 64, "4.2 h to 0.4 h", { family: "Poppins", style: "ExtraBold", color: C.accent, maxW: 560, min: 48 }), "MONEYSHOT");
T(m, 20, 170, 560, 22, "90% fewer hours without supply, simulated on 48 transformers and 7,000 connections", { color: C.white });
[["Bear", "0.83 h"], ["Base", "0.40 h"], ["Bull", "0.00 h"]].forEach((q, i) => { const f = addFrame(m, 20 + i * 190, 244, 180, 88, i === 1 ? C.accent : C.white, C.ink, 2, "CELL");
  TL(f, 12, 2, 22, q[0], { family: "Inter", style: "Bold" }); TL(f, 12, 34, 30, q[1], { family: "Poppins", style: "ExtraBold", color: C.primaryDeep }); });
const a2 = panel(s, 680, 224, 600, 350, "HOURS WITHOUT SUPPLY, 3 DAY TYPES");
hBars(a2, 16, 62, 568, [{ label: "Heatwave, today", value: V.out.base, text: "4.21", color: C.alert }, { label: "Heatwave, UrjaGrid", value: V.out.mid, text: "0.40", color: C.good },
  { label: "Monsoon, today", value: V.out.monsoon[0], text: "3.71", color: C.alert }, { label: "Monsoon, UrjaGrid", value: 0.03, text: "0.00", color: C.good },
  { label: "October, today", value: V.out.mild[0], text: "3.58", color: C.alert }, { label: "October, UrjaGrid", value: 0.03, text: "0.00", color: C.good }], { labelW: 250, rowH: 42, barH: 26, valueW: 80, max: 4.4 });
T(a2, 16, 318, 568, 22, "Hours per home per day");
const a3 = panel(s, 1296, 224, 560, 350, "A 30% EVENING DIP IS ABSORBED");
lineChart(a3, 16, 56, 528, 230, [{ values: V.dip.sq, color: C.alert, label: "Today" }, { values: V.dip.ug, color: C.good, label: "UrjaGrid" }], V.dip.labels, { yMin: 0, yMax: 7, yTicks: [2, 4, 6], padL: 44, padR: 130 });
T(a3, 16, 290, 528, 22, "Hours cut per home against extra evening shortfall");
const b1 = panel(s, 64, 588, 560, 366, "WHAT THE HOME GIVES UP INSTEAD");
stackH(b1, 16, 62, 528, 50, [{ value: V.caps.hh[0], color: C.amberTint, text: "Comfort" }, { value: V.caps.hh[1], color: C.orange, text: "" }, { value: V.caps.hh[2], color: C.alert, text: "", textColor: C.white }], { minInside: 120 });
legend(b1, 16, 120, [[C.amberTint, "1,000 W"], [C.orange, "500 W"], [C.alert, "300 W"]]);
addTable(b1, 16, 164, [338, 190], ["Heatwave day, base case", "Value"], [["Capped at the peak", "3,402"], ["Must trim load", "1,751"], ["Minimum kept", "300 W"]], { headerH: 36, rowH: 38, name: "TABLE: caps", align: ["LEFT", "RIGHT"] });
T(b1, 16, 326, 528, 22, "A cap is a limit, not a cut");
const b2 = panel(s, 640, 588, 600, 366, "₹383 A METER A YEAR, ₹0 TO THE HOME");
waterfall(b2, 16, 56, 568, 216, [{ label: "Fee", value: V.econ.fee, color: C.primary, text: "₹96" }, { label: "Rebates", value: V.econ.rebate, color: C.accent, text: "₹188" }, { label: "Messages", value: V.econ.msg, color: C.orange, text: "₹99" }, { label: "Total", kind: "total", value: V.econ.total, color: C.primaryDeep, text: "₹383" }], { max: 420, min: 0, labelH: 40 });
RT(b2, 16, 280, 568, 22, [["Rebates go to homes. ", "B"], ["An inverter costs a home " + V.econ.inverter + " a year", ""]]);
const b3 = panel(s, 1256, 588, 600, 366, "₹ PER KW OF PEAK RELIEF, A YEAR");
hBars(b3, 16, 62, 568, [{ label: "UrjaGrid", value: V.econ.kw, text: "₹1,448", color: C.good }, { label: "Battery, 2026", value: V.econ.bess[0], text: "₹3,591", color: C.orange }, { label: "Battery, 2024", value: V.econ.bess[1], text: "₹5,700", color: C.orange }], { labelW: 190, rowH: 44, barH: 28, valueW: 110, max: 5700 });
addTable(b3, 16, 204, [330, 238], ["Sustainability", "A year"], [["New hardware", "None"], ["Transformer overload", "−79% hours"], ["Storage", "Plugs in, lever 4"]], { headerH: 36, rowH: 38, name: "TABLE: sustain", align: ["LEFT", "RIGHT"] });
soWhat(s, 966, 64, [["Therefore: ", "A"], [V.s8.sowhat, "W"]]);
results.push({ slide: s.id, total: s.findAll(() => true).length, top: s.children.length }); }
```

### Slide 9: Roadmap

```js
{ const s = await figma.getNodeByIdAsync("S9");
hdr(s, 9, V.s9.finding, V.s9.source);
const a1 = panel(s, 64, 224, 1100, 350, "SIX WEEKS: SHADOW, SOFT LEVERS, LIFELINE, WAVES");
gantt(a1, 16, 62, 330, 123, ["W1", "W2", "W3", "W4", "W5", "W6"], [
  { label: "Shadow mode, read only", bars: [{ s: 0, e: 2, text: "No dispatch" }] }, { label: "Levers 1 to 3 live", bars: [{ s: 2, e: 4, text: "DR, charging" }] },
  { label: "Lifeline caps live", bars: [{ s: 4, e: 5, color: C.orange, text: "L5", textColor: C.ink }], marks: [{ at: 4 }] }, { label: "Four more sub-divisions", bars: [{ s: 5, e: 6, text: "Waves" }], marks: [{ at: 5 }] },
  { label: "T0 registry, field staff", bars: [{ s: 0, e: 5, color: C.good, text: "Verified before caps" }] }, { label: "Regulator view", bars: [{ s: 0, e: 6, color: C.rival, text: "Aggregates only" }] }], { headH: 40, rowH: 40, name: "TABLE: pilot" });
const a2 = panel(s, 1180, 224, 676, 350, "WHO OWNS, RUNS AND PAYS");
const R9 = [["A", "C", "I", "C", "I"], ["A", "R", "I", "C", "I"], ["A", "I", "R", "C", "I"], ["A", "I", "I", "I", "C"], ["C", "I", "I", "R", "A"]];
heatmap(a2, 16, 62, ["Approve a plan", "Keep T0 registry", "Connect head-end", "Pay fee, rebates", "Audit outcomes"], ["DISCOM", "Field", "AMISP", "Team", "SERC"], R9.map(r => r.map(c => c === "A" ? 5 : (c === "R" ? 4 : (c === "C" ? 2 : 1)))),
  { labelW: 244, colW: 80, rowH: 42, headH: 44, scale: HG, min: 1, max: 5, fmt: (v, i, j) => R9[i][j], name: "TABLE: raci" });
T(a2, 16, 322, 644, 22, "A accountable, R does it, C consulted, I informed");
const b1 = panel(s, 64, 588, 560, 366, "FROM WIRED TO LIVE: 5 LINKS");
addTable(b1, 16, 62, [196, 150, 182], ["Rail", "Today", "Pilot needs"], [["Head-end", "Simulator", "Vendor API"], ["Chargers", "Simulator", "OCPP to hubs"], ["Public loads", "Simulator", "OpenADR link"], ["Messaging", "Mock", "Business API"], ["Backend", "Not live", "Cloud host"]], { headerH: 40, rowH: 48, name: "TABLE: links", align: ["LEFT", "LEFT", "LEFT"] });
const b2 = panel(s, 640, 588, 640, 366, "6 RISKS, EACH WITH ONE MITIGATION");
addTable(b2, 16, 62, [250, 44, 44, 270], ["Risk", "P", "I", "Mitigation"], [["Cap seen as ration", "M", "H", "Floor, rotation"], ["Missed command", "H", "H", "Ack check, shadow"], ["Partial coverage", "H", "M", "Saturated DTs first"], ["Unlisted T0 home", "M", "H", "Field registry, JE"], ["Prepaid mistrust", "M", "H", "Postpaid, 2 h notice"], ["Model is wrong", "M", "M", "Pilot measures first"]],
  { headerH: 36, rowH: 42, name: "TABLE: risks", align: ["LEFT", "CENTER", "CENTER", "LEFT"], cellColor: (r, c) => (c === 1 || c === 2) ? C.alert : C.ink, boldCols: [1, 2] });
const b3 = panel(s, 1296, 588, 560, 366, "VALIDATION PLAN, NOT YET RUN");
addTable(b3, 16, 62, [200, 60, 268], ["Who", "n", "The question"], [["JE and AE", "6", "Would you approve it"], ["Households", "20", "Is 300 W for 2 h fair"], ["Shop owners", "10", "What must stay on"], ["HES vendor", "2", "The command path"]], { headerH: 40, rowH: 46, name: "TABLE: validation", align: ["LEFT", "CENTER", "LEFT"] });
RT(b3, 16, 300, 528, 22, [["No interview is claimed as done. ", "R"], ["4 of 48 transformers still need an upgrade", "B"]]);
soWhat(s, 966, 64, [["Next: ", "A"], [V.s9.sowhat, "W"]]);
results.push({ slide: s.id, total: s.findAll(() => true).length, top: s.children.length }); }
```

### Slide 10: Appendix

```js
{ const s = await figma.getNodeByIdAsync("S10");
hdr(s, 10, V.s10.finding, V.s10.source);
const a1 = panel(s, 64, 224, 900, 350, "ASSUMPTIONS BEHIND THE 4.2 H TO 0.4 H");
addTable(a1, 16, 62, [70, 498, 300], ["ID", "Assumption", "Bear, base, bull"], [["A01", "Load shifted on a voluntary ask", "3%, 5%, 10%"], ["A02", "Flexible load deferred", "30%, 50%, 70%"], ["A03", "Capped load that comes off", "85%, 92%, 97%"], ["A04", "Heat, monsoon, mild days", "45, 75, 245"],
  ["P", "Short DTs cut each 15 minutes", "Half, in rotation"], ["P", "Trip rule", "130%, 30 min, 2 h"], ["P", "Load that returns after a cap", "30%"]], { headerH: 36, rowH: 35, name: "TABLE: assumptions", align: ["LEFT", "LEFT", "RIGHT"] });
const a2 = panel(s, 980, 224, 876, 350, "THE RESULT, BEAR TO BULL (SIMULATED)");
addTable(a2, 16, 62, [320, 136, 126, 126, 136], ["Line", "Today", "Bear", "Base", "Bull"], [["Outage h, heatwave day", "4.21", "0.83", "0.40", "0.00"], ["Outage h a year", V.annual.sq, V.annual.bear, V.annual.mid, V.annual.bull], ["Homes cut, heat day", "4,309", "1,244", "593", "0"], ["Transformer trips, day", "32", "0", "0", "0"], ["Cost, ₹ a meter a year", "0", "309", "383", "547"], ["₹ per outage hour avoided", "n/a", "0.26", "0.29", "0.41"]],
  { headerH: 36, rowH: 41, name: "TABLE: results", align: ["LEFT", "RIGHT", "RIGHT", "RIGHT", "RIGHT"], rowFills: [C.tint, null, null, null, null, null] });
const b1 = panel(s, 64, 588, 700, 366, "FIVE HONEST LIMITS");
badgeList(b1, 16, 62, 668, ["The gain is a model estimate on a simulated network", "The product's own Scenario Lab is mixed on unserved energy", "Adapters are simulators; no DISCOM system is connected", "Prototype screens show illustrative data", "No interview, pilot or letter of intent exists"], { d: 40, pitch: 58, bg: C.alert });
const b2 = panel(s, 780, 588, 520, 366, "DEFINITIONS");
addTable(b2, 16, 62, [170, 318], ["Term", "Meaning"], [["Outage hour", "A home with no supply"], ["Cap", "A limit, with an expiry"], ["T0", "Critical, never capped"], ["DT", "Distribution transformer"], ["HES", "Meter head-end system"], ["DR", "Demand response"]], { headerH: 36, rowH: 42, name: "TABLE: terms", align: ["LEFT", "LEFT"] });
const b3 = panel(s, 1316, 588, 540, 366, "SOURCES");
const bib = addText(b3, "Inter", "Semi Bold", 16, C.ink, ["1 CEA, Installed Capacity and LGBR 2026-27", "2 MoP data via Down To Earth, 21 May 2026", "3 EAC-PM working paper, July 2026", "4 CEEW, What Smart Meters Can Tell Us, 2020", "5 CEA smart meter specification, Feb 2020", "6 Rajya Sabha reply on RDSS, July 2026", "7 SEA and GIZ with Eskom, Sept 2024", "8 Bundesnetzagentur, Section 14a EnWG", "9 IEA, Value of Demand Flexibility, Dec 2025", "10 IEEFA-JMK via pv magazine, May 2026", "11 DERC storage tariff orders, 2024 and 2026", "12 Yuva Yodha brief and FAQ, 2026"].join("\n"), 16, 60, 508, 290, "LEFT", undefined, true); bib.name = "BIBLIO";
soWhat(s, 966, 64, [["Sensitivity: ", "A"], [V.s10.sowhat, "W"]]);
results.push({ slide: s.id, total: s.findAll(() => true).length, top: s.children.length }); }
```

### Slide 11: Thank you

```js
{ const s = await figma.getNodeByIdAsync("S11"); tplClear(s); head(s, 11);
nm(TL(s, 0, 190, 72, "THANK YOU", { family: "Poppins", style: "ExtraBold", color: C.primaryDeep, centerAt: 960 }), "TITLE");
nm(addText(s, "Poppins", "Bold", 30, C.primary, "UrjaGrid: brownout, never blackout. The flexibility is already on the wall.", 260, 330, 1400, 50, "CENTER", undefined, true), "THESIS");
addChip(s, 780, 430, 360, 50, "TEAM IDEAFORGE", C.primary, C.white, 24);
teamTable(s, 400, 510);
nm(addText(s, "Inter", "Semi Bold", 24, C.ink, "Built by Team IdeaForge for Challenge 03, Grid Reliability", 260, 760, 1400, 40, "CENTER", undefined, true), "LINKS");
nm(addText(s, "Inter", "Semi Bold", 24, C.ink, "Questions welcome.", 260, 820, 1400, 40, "CENTER", undefined, true), "CLOSE");
results.push({ slide: s.id, total: s.findAll(() => true).length, top: s.children.length }); }
```

### Slide 1: Cover

```js
{ const s = await figma.getNodeByIdAsync("S1"); s.children.slice().forEach(c => c.remove()); s.fills = [{ type: "SOLID", color: C.primaryDeep }];
addChip(s, 64, 56, 860, 56, "YUVA YODHA ENERGY TECH HACKATHON | SCHNEIDER ELECTRIC", C.accent, C.ink, 22);
nm(TL(s, 64, 130, 112, "URJAGRID", { family: "Poppins", style: "ExtraBold", color: C.white }), "TITLE");
nm(TL(s, 64, 296, 28, "Challenge 03: Grid Reliability and Renewable Intermittency", { color: C.accent }), "SUBTITLE");
const v = layered(s, 64, 362, 840, 262, C.white, "CARD: thesis");
addChip(v, 24, 20, 230, 44, "OUR ANSWER", C.primary, C.white, 22);
T(v, 24, 80, 792, 30, "Brownout, never blackout.", { family: "Poppins", style: "Bold", color: C.primary });
T(v, 24, 134, 792, 22, "The flexibility is already on the wall: smart meters with a remote load limit. UrjaGrid forecasts the shortfall at each transformer and replaces feeder blackouts with a plan an engineer approves.");
nm(TL(s, 64, 664, 26, "TEAM IDEAFORGE", { color: C.accent }), "TEAM LABEL");
teamTable(s, 64, 712, [240, 440, 160]);
T(s, 64, 944, 840, 22, "A working software prototype: every capability is tagged LIVE, WIRED or PILOT.", { color: C.white });
const GX = [976, 1296, 1616], GY = [150, 450, 750], NW = 240, NH = 104;
const wire = C.accent;
[0, 2].forEach(r => { addWireH(s, GX[0] + NW, GX[1], GY[r] + NH / 2, wire, 3); addWireH(s, GX[1] + NW, GX[2], GY[r] + NH / 2, wire, 3); });
[0, 2].forEach(c => { addWireV(s, GX[c] + NW / 2, GY[0] + NH, GY[1], wire, 3); addWireV(s, GX[c] + NW / 2, GY[1] + NH, GY[2], wire, 3); });
addWireV(s, GX[1] + NW / 2, GY[0] + NH, GY[1] - 20, wire, 3); addWireV(s, GX[1] + NW / 2, GY[1] + NH + 20, GY[2], wire, 3);
addWireH(s, GX[0] + NW, GX[1], GY[1] + NH / 2, wire, 3); addWireH(s, GX[1] + NW, GX[2], GY[1] + NH / 2, wire, 3);
const N = [[0, 0, 1, "SENSE", "Meters, weather"], [1, 0, 2, "FORECAST", "36 h, per DT"], [2, 0, 3, "PROPOSE", "Softest lever first"], [2, 1, 4, "APPROVE", "A named engineer"],
  [2, 2, 5, "DISPATCH", "Notice, then limit"], [1, 2, 6, "CONFIRM", "Meter reads verify"], [0, 2, 7, "LEARN", "Fairness rotates"], [0, 1, 8, "PROTECT", "T0 never touched"]];
N.forEach(q => mapNode(s, GX[q[0]], GY[q[1]], NW, NH, q[2], q[3], q[4], q[2] === 4 ? { fill: C.accent, badge: C.primaryDeep, titleColor: C.primaryDeep } : {}));
const hub = layered(s, GX[1], GY[1] - 20, NW, NH + 40, C.accent, "CARD: hub");
TB(hub, 8, 14, NW - 16, 40, 26, "URJAGRID", { family: "Poppins", style: "ExtraBold", align: "CENTER" });
TB(hub, 8, 60, NW - 16, 70, 22, "one loop, a human at step 4", { family: "Inter", style: "Bold", align: "CENTER" });
const src = addText(s, "Inter", "Semi Bold", 14, C.accent, "Source: Yuva Yodha Energy Tech Hackathon brief, Challenge 03 | Team IdeaForge prototype", 64, 1046, 1792, 20, "RIGHT", undefined, true); src.name = "SOURCE";
results.push({ slide: s.id, total: s.findAll(() => true).length, top: s.children.length }); }
```

**Planning-time test result (4 Oct 2026).** All eleven slide blocks above, with the palette, extras and values blocks, were run through `fintechstico-submission/deck/mock_figma.js` straight from this file. Every slide printed `warnings: []` and `ISSUES 0`. Build size per slide: 37,903 to 41,000 characters (limit 50,000). Node totals: S1 94, S2 198, S3 436, S4 268, S5 208, S6 219, S7 236, S8 214, S9 294, S10 214, S11 65. The mock's text metrics are approximate, so the Figma validator V1 (§11.4) is still the final check.

---

## 11. Figma: setup, build loop, validators, photos, fix rules

### 11.1 Setup script (main agent; one write call on the new file)

```js
// ===== URJAGRID SETUP =====
const grid = figma.currentPage.children.find(c => c.type === "SLIDE_GRID");
const flat = () => { const a = []; for (const r of grid.children) for (const s of r.children) a.push(s); return a; };
for (let k = flat().length; k < 11; k++) figma.createSlide();
let all = flat();
while (all.length > 11) { const e = all.slice().reverse().find(s => s.children.length === 0); if (!e) break; e.remove(); all = flat(); }
const names = ["01 Cover", "02 Problem", "03 Solution", "04 Challenge Fit", "05 Features", "06 Tech", "07 Innovation", "08 Impact", "09 Roadmap", "10 Appendix", "11 Thank You"];
all.forEach((s, i) => { if (names[i]) s.name = names[i]; });
const fonts = await figma.listAvailableFontsAsync();
const need = [["Poppins", "Bold"], ["Poppins", "ExtraBold"], ["Inter", "Semi Bold"], ["Inter", "Bold"]];
return { count: all.length, ids: all.map(s => s.id), fontsOk: need.map(([f, st]) => fonts.some(x => x.fontName.family === f && x.fontName.style === st)) };
```
Expected: `count` 11 and `fontsOk` all true. Write `yuva-yodha/deck/slide-ids.json` as `{"S1": ids[0], ..., "S11": ids[10]}`.

### 11.2 Validator V1 (the generator binds `IDS`; read-only apart from a throwaway clone)

```js
// ===== URJAGRID V1 =====
await Promise.all([{family:"Poppins",style:"Bold"},{family:"Poppins",style:"ExtraBold"},{family:"Inter",style:"Semi Bold"},{family:"Inter",style:"Bold"}].map(f=>figma.loadFontAsync(f)));
const ids=IDS; const issues=[]; const KEY=/^(PANEL|CARD|KPI|TABLE):/;
for (const id of ids) { const s = await figma.getNodeByIdAsync(id);
  for(const c of s.children){ if(c.x<-1||c.y<-1||c.x+c.width>1921||c.y+c.height>1081) issues.push({s:s.name,t:"bounds",n:c.name});
    if(KEY.test(c.name) && c.y+c.height>1040) issues.push({s:s.name,t:"belowContent",n:c.name,bottom:Math.round(c.y+c.height)}); }
  const ch=s.children.filter(c=>KEY.test(c.name)).map(c=>({n:c.name,x:c.x,y:c.y,w:c.width,h:c.height}));
  for(let i=0;i<ch.length;i++)for(let j=i+1;j<ch.length;j++){ const a=ch[i],b=ch[j];
    const ox=Math.min(a.x+a.w,b.x+b.w)-Math.max(a.x,b.x), oy=Math.min(a.y+a.h,b.y+b.h)-Math.max(a.y,b.y);
    if(ox>=4&&oy>=4) issues.push({s:s.name,t:"overlap",a:a.n,b:b.n}); }
  const hl=s.findOne(n=>n.name==="HEADLINE"); if(hl&&hl.height>88) issues.push({s:s.name,t:"finding3lines",h:Math.round(hl.height)});
  const so=s.findOne(n=>n.name==="SOWHAT TEXT"); if(so&&so.height>62) issues.push({s:s.name,t:"sowhat3lines",h:Math.round(so.height)});
  const sr=s.children.find(c=>c.name==="SOURCE"); if(sr&&sr.height>36) issues.push({s:s.name,t:"source3lines",h:Math.round(sr.height)});
  for(const t of s.findAllWithCriteria({types:["TEXT"]})){ const p=t.parent; if(!p||p.type==="SLIDE") continue;
    const tb=t.absoluteBoundingBox, pb=p.absoluteBoundingBox; if(!tb||!pb) continue;
    if(tb.x+tb.width>pb.x+pb.width+1||tb.y+tb.height>pb.y+pb.height+1) issues.push({s:s.name,t:"textOut",chars:t.characters.slice(0,40),parent:p.name});
    if(t.textAutoResize==="NONE"){ const k=t.clone(); p.appendChild(k); k.textAutoResize="HEIGHT";
      if(k.height>t.height+2) issues.push({s:s.name,t:"cellWrap",chars:t.characters.slice(0,40),parent:p.name}); k.remove(); } } }
return {clean:issues.length===0,count:issues.length,issues:issues.slice(0,60)};
```
Known false positive, by design: a layered card's `BACK:` rectangle against its own front (not reported, because `BACK:` names are outside `KEY`).

### 11.3 Whole-deck sweeps (the generator binds `IDS`; V2 writes, the rest read)

```js
// ===== URJAGRID SWEEPS =====
await Promise.all([{family:"Poppins",style:"Bold"},{family:"Poppins",style:"ExtraBold"},{family:"Inter",style:"Semi Bold"},{family:"Inter",style:"Bold"}].map(f=>figma.loadFontAsync(f)));
const ids=IDS;
const BAN=["here's","let's","bottom line","delve","game-changer","unlock","it's not just","make no mistake","landscape","robust","seamless","holistic","tapestry","paradigm","navigate the","revolutionis","revolutioniz","cutting-edge","leverage","empower","transformative","journey","synergy","world-class","best-in-class","next-gen","reimagine","supercharge","harness","crucial","pivotal","furthermore","moreover"];
const MUST=["4.2 h to 0.4 h","₹383","0.83 h","0.40 h","0.00 h","7.24 crore","20.33 crore","2.57 GW","0.18 GW","15.3 MW","10.4","₹1,448","₹3,591","₹5,700","3,402","1,751","352","162","1,345","Harsh Kawatra","Gursimran Kaur","Delhi Technological University","Guru Gobind Singh Indraprastha University","LIVE","WIRED","PILOT","No interview is claimed as done"];
const ABSENT=["Hisaab","HISAAB","GSTR","Paytm","Dream11","Dayita","Anuj","LifelineGrid","TODO","TBD","Lorem","Insert","97.2","42.5","7.4 months","Sarvam 105B","5.28 crore","3.90 crore","github","vercel","urjagrid-virid"];
let radiusFixed=0; const fontLow=[]; const copy=[]; const density=[]; let all=""; let money=null;
for(const id of ids){ const s=await figma.getNodeByIdAsync(id);
  const nodes=s.findAll(()=>true); density.push({slide:s.name,nodes:nodes.length,forms:s.children.filter(c=>/^(PANEL|CARD|TABLE):/.test(c.name)).length});
  for(const nd of nodes){ if("cornerRadius" in nd && typeof nd.cornerRadius==="number" && nd.cornerRadius!==0){ nd.cornerRadius=0; radiusFixed++; } if(nd.name==="MONEYSHOT") money={slide:s.name,chars:nd.characters}; }
  for(const t of s.findAllWithCriteria({types:["TEXT"]})){ const c=t.characters; all+=" "+c;
    if(typeof t.fontSize==="number" && t.fontSize<22 && !(t.name==="SOURCE"||t.name==="BIBLIO")) fontLow.push({slide:s.name,size:t.fontSize,chars:c.slice(0,40)});
    if(/[\u2014\u2013]/.test(c)) copy.push({slide:s.name,issue:"dash",chars:c.slice(0,60)});
    if(c.includes("?")||c.includes("!")) copy.push({slide:s.name,issue:"question or exclamation",chars:c.slice(0,60)});
    const low=c.toLowerCase(); for(const b of BAN) if(low.includes(b)) copy.push({slide:s.name,issue:"banned: "+b,chars:c.slice(0,60)}); } }
return {radiusFixed, fontLow, copy, missing:MUST.filter(m=>!all.includes(m)), presentBad:ABSENT.filter(a=>all.includes(a)), money, density};
```
Expected: `radiusFixed` 0, `fontLow` empty, `copy` empty, `missing` empty, `presentBad` empty, `money` is `4.2 h to 0.4 h` on `08 Impact`, node counts within 25% of the planning-time totals above.

### 11.4 Build loop (main agent; one slide per `use_figma` call; never two calls at once)

1. Load tools once: `ToolSearch` with `select:mcp__figma-mcp__use_figma,mcp__figma-mcp__get_screenshot,mcp__figma-mcp__whoami,mcp__figma-mcp__create_new_file,mcp__figma-mcp__upload_assets,ReadMcpResourceTool`. Read with `ReadMcpResourceTool`, server `figma-mcp`: `skill://figma/figma-use/SKILL.md`, `skill://figma/figma-use-slides/SKILL.md`, `skill://figma/figma-generate-design/SKILL.md`. Pass `skillNames: "resource:figma-use,resource:figma-use-slides,resource:figma-generate-design"` on every `use_figma` call. This deck positions nodes absolutely on a fixed canvas through the preamble helpers; that is deliberate and overrides the skills' auto-layout advice.
2. For slide N: Read `yuva-yodha/deck/build/slide_NN.js` and pass its whole content as `code` (description: `Build slide N`). The result must have `warnings: []`.
3. Read `yuva-yodha/deck/build/v1_NN.js` and run it. Expect `{"clean":true,"count":0,"issues":[]}`.
4. `get_screenshot` at `maxDimension: 1600`; save with the printed curl command to `yuva-yodha/deck/shots/sN.png`; Read the file. Tick: ribbon with the right tag active; counter chip `0N / 11`; FINDING at most two lines; every panel has a caps title, a rule and an ink outline; no rounded corner; values on the charts; so-what bar at most two lines; source line present; no text touching text, a bar or a line; no child drawn outside its panel; no empty region larger than a quarter of a panel.
5. On an issue, apply exactly one fix rule from §11.6 by editing `yuva-yodha/deck/slides/sNN.js`, then `python yuva-yodha/deck/gen.py mock`, `python yuva-yodha/deck/gen.py bind`, rebuild that slide (the slide script clears the slide first), re-run V1, re-screenshot. At most three attempts per slide, then log the residual and move on.
6. After slide 1 and slide 2 are built, compare both screenshots with the prime inspiration (`get_screenshot` on file `hOJVMGv9nIhDmayTT7DmOt`, nodes `5:8` and `5:4`, and on `H3Zr4ESaceYlV54zvpkgZi`, node `6:2`). One log line each: card look, density, forms. If the visual system reads wrong (outlines missing, text under 22pt, cards without back layers), stop and report before building more.

### 11.5 Photos (main agent, after slide 5 is built)

Slide 5 has three frames named `PHOTO: command`, `PHOTO: plans`, `PHOTO: consumer`, each 348 by 218 (aspect 1.60). Capture real screenshots of the deployed prototype at 1440 by 900 (aspect 1.60) with headless Chrome:
```bash
cd "/c/Users/harsh/Desktop/HARSH/PPTS-CASE-STUDY/nsut-innovators-court/yuva-yodha/deck/photos" && CH="/c/Program Files/Google/Chrome/Application/chrome.exe" && for r in command plans consumer; do "$CH" --headless=new --disable-gpu --hide-scrollbars --window-size=1440,900 --virtual-time-budget=20000 --screenshot="$(cygpath -w "$PWD")\\$r.png" "https://urjagrid-virid.vercel.app/$r"; done; ls -la
```
Read each PNG. A usable image shows the page chrome and content, not a blank or an error page. Then find the frame ids with a read-only script (`s.findAll(n => n.name.startsWith("PHOTO: ")).map(n => ({id: n.id, name: n.name}))` on slide 5), call `upload_assets` once per image (`count: 1`, the frame's `nodeId`, `scaleMode: "FILL"`), and POST the bytes to the returned URL with curl. Screenshot slide 5 again. **Fallback:** if a capture is blank or the site is unreachable, leave that frame grey and add the route as centred 22pt text inside it (`/command`, `/plans`, `/consumer`) with one small `use_figma` call; log it as a residual. Never resize a photo frame after upload.

### 11.6 Fix rules (apply exactly the one for the issue; nothing broader)

| Issue | Fix in `slides/sNN.js` or `values.js` |
|---|---|
| `finding3lines`, a FINDING warning | Cut the two weakest words in `V.sN.finding`; keep every number; never below 24pt |
| `sowhat3lines` | Cut a clause from `V.sN.sowhat`; keep its meaning |
| `source3lines` | Drop the least important source name from `V.sN.source`; never the model or product attribution |
| A panel title over one line | Cut a word that carries no number; never below 22pt |
| `textOut`, `cellWrap`, an overflow warning | Shorten the string with the same meaning; never below 22pt; keep numbers. If impossible, widen that column by at most 40px, taking the width from the widest other column of the same table |
| `overlap` of PANEL, CARD or TABLE | Move the later-drawn node down or right by the overlap plus 8px if it stays inside y 224 to 954; otherwise report |
| `bounds`, `belowContent` | Move the node up inside the zone; if no room, reduce that table's `rowH` by at most 4px, never below 30 |
| A child chart or table taller than its panel (seen in the screenshot) | Reduce `rowH` or `headH` by at most 4px, or drop the caption line under it |
| Label on a bar, text on a line, arrow through text | Nudge that label or arrow by at most 24px |
| A vector line missing or misplaced | Re-run the slide once; if still wrong and the line is axis-aligned, use `addWireH` or `addWireV`; otherwise report |
| Slide names reset to plain numbers | Re-run only the naming lines of §11.1 |

After any fix: `gen.py mock`, `gen.py bind`, rebuild that slide, re-run V1, re-screenshot. A fix edits the generated file under `yuva-yodha/deck/`, never this plan.

---

## 12. Generator and helper scripts

### 12.1 Bootstrap (main agent, one Bash command from the repo root; it extracts `gen.py` from this plan byte for byte)

```bash
cd "/c/Users/harsh/Desktop/HARSH/PPTS-CASE-STUDY/nsut-innovators-court" && mkdir -p yuva-yodha/deck && python -c "import io;F=chr(96)*3;N=chr(10);t=io.open(r'C:\Users\harsh\.claude\plans\pasted-content-id-123f-working-folder-drifting-cascade.md',encoding='utf-8').read();b=[x.split(N+F)[0] for x in t.split(F+'python'+N)[1:]];c=[x for x in b if 'URJAGRID GEN' in x.split(N)[0]];assert len(c)==1;io.open('yuva-yodha/deck/gen.py','w',encoding='utf-8',newline=N).write(c[0]+N);print('gen.py',len(c[0]))" && python yuva-yodha/deck/gen.py init && python yuva-yodha/deck/gen.py mock
```
Expected: a list of `wrote ...` lines, `preamble chars 31097`, then eleven lines `sNN OK | warnings: [] | ISSUES 0`. If the preamble length differs by more than a few characters, stop and report (the Hisaab preamble has changed since planning).

### 12.2 `gen.py`

```python
# ===== URJAGRID GEN =====
"""Generator: reads code and file blocks from the plan and writes the working files. Run from the repo root:
  python yuva-yodha/deck/gen.py init   write every file under yuva-yodha/ from the plan
  python yuva-yodha/deck/gen.py mock   run the offline mock on all 11 slides
  python yuva-yodha/deck/gen.py bind   write build/slide_NN.js, build/v1_NN.js and build/sweeps.js with the real slide ids"""
import io, json, re, subprocess, sys, pathlib, shutil
PLAN = pathlib.Path(r"C:\Users\harsh\.claude\plans\pasted-content-id-123f-working-folder-drifting-cascade.md")
ROOT = pathlib.Path(__file__).resolve().parents[2] if "__file__" in globals() else pathlib.Path(".").resolve()
YY = ROOT / "yuva-yodha"; DECK = YY / "deck"; F = chr(96) * 3; N = "\n"

def plan(): return io.open(PLAN, encoding="utf-8").read().replace("\r", "")
def blocks(t, lang): return [x.split(N + F)[0] for x in t.split(F + lang + N)[1:]]
def pick(bl, key):
    c = [b for b in bl if key in b.split(N)[0]]; assert len(c) == 1, (key, len(c)); return c[0]
def files(t):
    return {m.group(1).strip(): m.group(2).strip(N) + N for m in re.finditer(r"<!-- FILE: ([^\n]+?) -->\n(.*?)\n<!-- END FILE -->", t, re.S)}
def w(path, text):
    path.parent.mkdir(parents=True, exist_ok=True); io.open(path, "w", encoding="utf-8", newline=N).write(text); print("wrote", path.relative_to(ROOT).as_posix(), len(text))
def make_preamble(src, palette, extras):
    t = src.replace("\r", ""); END = "// ===== END PREAMBLE ====="; assert t.count(END) == 1
    t = t[:t.index(END)]; c0 = t.index("const C = {"); c1 = t.index("await Promise.all("); assert c1 > c0
    t = t[:c0] + palette + N + t[c1:]
    drop = tuple("function " + f + "(" for f in ("rs", "rsp", "r1", "r1p", "n1", "n1p", "cr", "crp", "pc", "pv"))
    lines = t.split(N); kept = [l for l in lines if not l.startswith(drop)]; assert len(lines) - len(kept) == 10, len(lines) - len(kept)
    t = N.join(kept)
    for a, b in (("function logoSlot(", "function hBars("), ("function quoteCard(", "function formulaBox("), ("const TEAM=", "function lineChart(")):
        i = t.index(a); j = t.index(b); assert j > i; t = t[:i] + t[j:]
    return t + extras
def slide_blocks(js):
    d = {}
    for b in js:
        m = re.match(r'\{ const s = await figma\.getNodeByIdAsync\("S(\d+)"\)', b)
        if m: d[int(m.group(1))] = b
    assert sorted(d) == list(range(1, 12)), sorted(d); return d

def init():
    t = plan(); js = blocks(t, "js"); py = blocks(t, "python"); fl = files(t)
    for d in ("case", "research/raw", "research/parts", "model", "deck/slides", "deck/build", "deck/shots", "deck/photos", "qa"): (YY / d).mkdir(parents=True, exist_ok=True)
    for key, rel in (("URJAGRID ENGINE EXTRACT", "model/extract_engine.py"), ("URJAGRID IMPACT MODEL", "model/urjagrid_impact_model.py"), ("URJAGRID CHECK VALUES", "model/check_values.py"),
                     ("URJAGRID ASSEMBLE", "research/assemble.py"), ("URJAGRID PDF PATCH", "research/patch_pdf.py")): w(YY / rel, pick(py, key) + N)
    src = io.open(ROOT / "fintechstico-submission/deck/preamble.js", encoding="utf-8").read()
    pre = make_preamble(src, pick(js, "URJAGRID PALETTE"), pick(js, "URJAGRID EXTRAS v1")); print("preamble chars", len(pre))
    w(DECK / "preamble.js", pre); w(DECK / "values.js", pick(js, "const V = {") + N)
    shutil.copyfile(ROOT / "fintechstico-submission/deck/mock_figma.js", DECK / "mock_figma.js")
    for n, b in slide_blocks(js).items(): w(DECK / "slides" / ("s%02d.js" % n), b + N)
    w(DECK / "setup.js", pick(js, "URJAGRID SETUP") + N)
    for name, body in fl.items(): w(YY / name, body)

def mock():
    ok = True
    for n in range(1, 12):
        r = subprocess.run(["node", "mock_figma.js", "preamble.js", "values.js", "slides/s%02d.js" % n], cwd=DECK, capture_output=True, text=True, encoding="utf-8")
        good = "warnings: []" in r.stdout and "ISSUES 0" in r.stdout; ok = ok and good
        print("s%02d" % n, "OK" if good else "FAIL", "|", " | ".join(l.strip() for l in r.stdout.splitlines() if l.startswith(("warnings", "ISSUES", "  [", "RUNTIME"))).encode("ascii", "replace").decode())
    sys.exit(0 if ok else 1)

def bind():
    t = plan(); js = blocks(t, "js"); ids = json.loads((DECK / "slide-ids.json").read_text(encoding="utf-8"))
    pre = (DECK / "preamble.js").read_text(encoding="utf-8"); vals = (DECK / "values.js").read_text(encoding="utf-8")
    v1 = pick(js, "URJAGRID V1"); sw = pick(js, "URJAGRID SWEEPS"); assert v1.count("const ids=IDS;") == 1 and sw.count("const ids=IDS;") == 1
    for n in range(1, 12):
        s = (DECK / "slides" / ("s%02d.js" % n)).read_text(encoding="utf-8"); old = 'getNodeByIdAsync("S%d")' % n; assert s.count(old) == 1, n
        code = pre + N + vals + N + "const results=[];" + N + s.replace(old, 'getNodeByIdAsync("%s")' % ids["S%d" % n]) + N + "return {results,warnings};" + N
        assert len(code) < 50000, (n, len(code)); w(DECK / "build" / ("slide_%02d.js" % n), code)
        w(DECK / "build" / ("v1_%02d.js" % n), v1.replace("const ids=IDS;", "const ids=%s;" % json.dumps([ids["S%d" % n]])) + N)
    allids = json.dumps([ids["S%d" % n] for n in range(1, 12)])
    w(DECK / "build" / "v1_all.js", v1.replace("const ids=IDS;", "const ids=%s;" % allids) + N)
    w(DECK / "build" / "sweeps.js", sw.replace("const ids=IDS;", "const ids=%s;" % allids) + N)

if __name__ == "__main__": {"init": init, "mock": mock, "bind": bind}[sys.argv[1]]()
```

### 12.3 Research assembly (the generator writes this to `yuva-yodha/research/assemble.py`)

```python
# ===== URJAGRID ASSEMBLE =====
"""Assemble urjagrid-research.md from the five writer parts plus generated appendices, then print the checks."""
import re, json, pathlib
ROOT = pathlib.Path(__file__).resolve().parents[1]; R = ROOT / "research"
rd = lambda p: pathlib.Path(p).read_text(encoding="utf-8")
HEADER = ("# UrjaGrid: Brownout, Never Blackout\n\n**A software answer to Challenge 03, Grid Reliability: keeping the lights on at the edge with the smart meters India has already installed**\n\n"
          "Team: Harsh Kawatra (Delhi Technological University, Team Leader) \u00b7 Gursimran Kaur (Guru Gobind Singh Indraprastha University)\n\n"
          "Prepared for: Schneider Electric, Yuva Yodha Energy Tech Hackathon, Challenge 03, October 2026\n\n---\n\n")
body = "\n\n".join(rd(R / "parts" / ("part-%s.md" % x)).strip() for x in "ABCDE")
reg = {}
for f in sorted((R / "raw").glob("R-*.md")):
    if "verification" in f.name: continue
    for ln in rd(f).splitlines():
        c = [x.strip() for x in ln.split("|")]
        if len(c) > 7 and re.fullmatch(r"S\d+", c[1]): reg[c[1]] = (c[5], c[4], c[6])   # source, as of, url
cited = sorted({"S" + n for g in re.findall(r"\[([^\]]*S\d+[^\]]*)\]", body) for n in re.findall(r"S(\d+)", g)}, key=lambda s: int(s[1:]))
missing = [c for c in cited if c not in reg]
bib = ["| ID | Source | As of | Available at | Accessed |", "|---|---|---|---|---|"] + ["| %s | %s | %s | %s | 4 October 2026 |" % (s, reg[s][0], reg[s][1], reg[s][2]) for s in cited if s in reg]
tables = re.sub(r"^# .*\n", "", rd(ROOT / "model" / "model_tables.md"), count=1).replace("\n## ", "\n### ")
gl = R / "parts" / "appendix-C-glossary.md"; conf = R / "raw" / "conflicts.md"
doc = (HEADER + body + "\n\n## Appendix A: Bibliography\n\n" + "\n".join(bib) + "\n\n## Appendix B: Model tables\n" + tables +
       "\n\n## Appendix C: Glossary\n\n" + (rd(gl).strip() if gl.exists() else "(missing)") + "\n\n## Appendix D: Data conflicts and resolutions\n\n" + (rd(conf).strip() if conf.exists() else "(missing)") + "\n")
(R / "urjagrid-research.md").write_text(doc, encoding="utf-8")
heads = re.findall(r"^#{2,3} (.+)$", doc, re.M); dup = sorted({h for h in heads if heads.count(h) > 1})
bad = ["delve", "landscape", "unlock", "game-changer", "here's", "let's", "bottom line", "it's not just", "make no mistake", "in today's", "fast-paced", "seamless", "robust", "tapestry", "testament", "realm", "holistic", "synergy", "paradigm", "cutting-edge", "revolutioniz", "revolutionis", "journey", "crucial", "pivotal", "furthermore", "moreover", "empower", "harness"]
print(json.dumps(dict(words=len(doc.split()), tables=len(re.findall(r"^\|[-| :]+\|$", doc, re.M)), dashes=doc.count("\u2014") + doc.count("\u2013"), dup_headings=dup[:10],
      cited_S=len(cited), missing_S=missing, banned={b: len(re.findall(re.escape(b), doc, re.I)) for b in bad if re.search(re.escape(b), doc, re.I)}), indent=1))
```

### 12.4 PDF build (the generator writes this to `yuva-yodha/research/patch_pdf.py`; it copies the proven Dream11 script and swaps nine strings, each confirmed present at planning time)

```python
# ===== URJAGRID PDF PATCH =====
"""Create build_pdf.py for the UrjaGrid research document from iim-lucknow-pivot/research/build_pdf.py."""
import io, pathlib
HERE = pathlib.Path(__file__).resolve().parent; SRC = HERE.parents[1] / "iim-lucknow-pivot" / "research" / "build_pdf.py"
t = io.open(SRC, encoding="utf-8").read()
REPL = [('dream11-pivot-research.md"', 'urjagrid-research.md"'), ('dream11-pivot-research.html"', 'urjagrid-research.html"'), ('dream11-pivot-research.pdf"', 'urjagrid-research.pdf"'),
    ('content: "Dream11: Life After the Ban  |  Team IdeaForge"', 'content: "UrjaGrid: Brownout, Never Blackout  |  Team IdeaForge"'),
    ("--p:#C4161C; --pd:#5E0A0E; --a:#F5C518; --tint:#FDE0E0;", "--p:#0B7A3E; --pd:#0A2A1C; --a:#B7E34A; --tint:#E3F5C4;"), ("color: #C4161C;", "color: #0B7A3E;"),
    ("IIM Lucknow  |  PIVOT '26  |  Round 1 research deliverable", "Schneider Electric  |  Yuva Yodha Energy Tech Hackathon  |  Challenge 03 research deliverable"),
    ("else 'Dream11: Life After the Ban'}</h1>", "else 'UrjaGrid: Brownout, Never Blackout'}</h1>"), ("<br>Dayita Arora, Ramjas College, University of Delhi", ""), ("|M|A", "|M|P|A")]
miss = [a for a, b in REPL if a not in t]
for a, b in REPL: t = t.replace(a, b)
io.open(HERE / "build_pdf.py", "w", encoding="utf-8").write(t); print("build_pdf.py written; strings not found:", miss)
```
Run `python patch_pdf.py` then `python build_pdf.py` from `yuva-yodha/research` (Python 3.14, the default `python`, has `markdown_it`; Chrome is at `C:\Program Files\Google\Chrome\Application\chrome.exe`; be online for the fonts). `miss` must be empty; if it is not, open `build_pdf.py` and make the listed swaps by hand. Render pages 1, 2, 3 and the last page with PyMuPDF at 60 dpi and Read them.

---

# PART V: EXECUTION

## 13. Execution

### 13.1 Step table

| Step | Who | Action | Done when |
|---|---|---|---|
| 0 | main | Read §2.4. Open `https://www.yuvayodhatech.com/faq` and confirm the submission deadline; log it. **Touchpoint A** (§3.9). Run the §12.1 bootstrap. Write `yuva-yodha/case/01-brief.md` (§1.2 and §1.3 verbatim) and `case/02-product-facts.md` (§4 verbatim) with the Write tool | `gen.py mock` prints 11 OK lines; deadline logged |
| M1 | main | §6.4 model run | `LOCK CHECK: 51 values, 0 mismatches` |
| V0 | **V-A, V-B, V-C, V-D in parallel** (one message, four Agent calls, `general-purpose`, `model: "sonnet"`, `run_in_background: true`) | §13.3 prompt, one raw file each | Four `R-*-verification.md` files; priority lists returned first |
| F0 | main (runs while V0 works) | Figma: tools and skills (§11.4.1); `whoami`; `create_new_file` with `editorType: "slides"`, `fileName: "URJAGRID \| Team IdeaForge \| Yuva Yodha"`, and the `planKey` of the team where the user is admin (if there is more than one candidate, ask the user); run `deck/setup.js` (§11.1); write `slide-ids.json`; `python yuva-yodha/deck/gen.py bind` | 11 slides, fonts all true, 11 build files under 50,000 characters |
| F1 | main | Build slides 1 and 2 (§11.4 steps 2 to 4), then the inspiration comparison (§11.4.6) | Both V1 clean; visual system confirmed |
| F2 | main | Build slides 3 to 11 in order, one per call, V1 and a screenshot each; photos for slide 5 (§11.5) as soon as slide 5 passes | All 11 built; residuals logged |
| C0 | main | Apply V0 corrections (§5.6) to `values.js` or slide files; `gen.py mock`, `bind`; rebuild only the affected slides; re-run V1 on them | Corrections log written; every touched slide V1 clean |
| P | **P500 (Opus-class)**, background | §13.5: the 500-word pitch | `submission/urjagrid-500-words.md` and `.txt` exist; check script clean |
| W | **W-A to W-E in parallel** (same message as P; five Agent calls, `model: "sonnet"`, background) | §13.4 prompt | Five parts and the glossary returned with word and table counts |
| S | main | Sweeps (§11.3, `build/sweeps.js`), V1 on all slides (`build/v1_all.js`); V8: print the ten FINDING sentences in order into the build log | Sweeps at expected values; story reads in order |
| CR | CR (`sonnet`), then main | **Touchpoint C**: §13.6 prompt on `shots/s1.png` to `s11.png`; main accepts only wording fixes of the same length or shorter that keep every number, then re-runs V1 and the sweeps | Scores logged |
| R500 | main | Review the pitch against §13.5.5 line by line; trace every number to §3.7 | Every check ticked |
| D | main | `python yuva-yodha/research/assemble.py`; if under 30,000 words or 70 tables, re-dispatch the shortest writer with "expand <sections> by <n> words with more evidence tables from the raw files, no new facts"; then `patch_pdf.py` and `build_pdf.py` (§12.4) | Words ≥ 30,000, tables ≥ 70, dashes 0, `missing_S` empty, PDF opens |
| X | main | Raster fallback PDF: `get_screenshot` each slide at `maxDimension: 3840`, curl to `deck/shots/hi_sN.png`, then PyMuPDF (`python`) builds `deck/TeamIdeaForge_UrjaGrid_preview.pdf`, one 1920 × 1080 page per slide (JPEG quality 85 if over 25 MB); write `qa/qa-defence.md` is already done by `gen.py init`; **Touchpoint E** | Preview PDF has 11 pages; polish search 0 hits |
| Z | main | Final report (§15) | Sent |

**Parallelism rules.**
- Figma calls are made only by the main agent, one at a time.
- Sub-agents write only their own files. They never edit this plan, `values.js`, the slide files or another agent's file.
- V0 runs during F0 to F2.
- P and W start together as soon as C0's corrections are logged. If C0 has no corrections, they start as soon as the V0 priority lists come back.

### 13.2 Critical path if the deadline is tonight

0, M1, V0 (priority rows only), F0, F1, F2, C0, P, R500, then sweeps and a quick critique. Everything for the research document (W, D) and the raster PDF (X) continues after the deck and the pitch are submitted.

Planning-time estimate:
- Bootstrap and model: 10 minutes.
- Figma build of 11 slides with V1 and screenshots: 90 to 120 minutes.
- Pitch: 20 to 30 minutes, written in the background during the build.

Tell the user how long remains at step 0. Neither the critique nor the research document may push the deck or the pitch past the deadline.

### 13.3 Verifier prompt (V0; fill X = A, B, C or D)

> You are verifying a research fact base for a hackathon submission. Read `C:\Users\harsh\.claude\plans\pasted-content-id-123f-working-folder-drifting-cascade.md` §1, §2, §3.7 and §5, then `C:\Users\harsh\Desktop\HARSH\PPTS-CASE-STUDY\nsut-innovators-court\yuva-yodha\research\raw\R-X-*.md`.
> For every row: open the URL with WebFetch (load it with ToolSearch `select:WebFetch,WebSearch` if needed; use WebSearch if the URL fails) and check the value, the date and any quoted words. Mark the row VERIFIED, CORRECTED (give the new exact value, a verbatim snippet of at most 25 words and the publication date) or UNVERIFIABLE (say what you tried). Quotes must match word for word; if they do not, give the exact words.
> Do the priority rows listed in plan §5.6 first and send them as a short list in your reply before the rest. Never invent a figure. Prefer primary documents. No em dashes or en dashes in anything you write.
> Write `yuva-yodha/research/raw/R-X-verification.md` as a table `| Row ID | Status | Original | Verified | Snippet | URL | Date |`, followed by a "Changed numbers" list. Edit no other file. Reply with the counts and the "Changed numbers" list.

### 13.4 Writer prompt (W; fill X, sections and words from §7.3)

> You are writing part X of a consulting-grade research document for Team IdeaForge's entry to Schneider Electric's Yuva Yodha Energy Tech Hackathon, Challenge 03, for the product UrjaGrid. First call `Skill("case-competition-deck")` and read `references/frameworks.md` and `references/rhetoric.md` (Touchpoint D). Then read, in full:
> - the plan `C:\Users\harsh\.claude\plans\pasted-content-id-123f-working-folder-drifting-cascade.md`, especially §1 to §8;
> - every file in `yuva-yodha/research/raw/`, including the `*-verification.md` files (where a verification corrects a value, use the corrected value; drop UNVERIFIABLE rows unless marked High);
> - `yuva-yodha/model/model_tables.md` and `model_outputs.json`;
> - `yuva-yodha/deck/values.js`;
> - `yuva-yodha/case/02-product-facts.md`.
>
> Write sections <list> into `yuva-yodha/research/parts/part-X.md` (W-E also writes `appendix-C-glossary.md`). Use `## N. Heading` and `### N.M` subsections. Target <words> words and at least 14 tables. Cover every "Must contain" item in §7.2. Open each section with a bold **Answer.** paragraph.
>
> Content rules:
> - Use only facts from the raw files, the model files and §4.
> - Tag every number `[S##]`, `[P]`, `[M]` or `[A##]`.
> - Do not browse the web and add no new facts.
> - Never invent interviews, users, pilots, quotes or results.
> - Every model number is called simulated or est.
> - No repository or live URL.
> - Keep to the argument in §3; do not change the recommendation or any number.
>
> Style rules:
> - §2.2 in full.
> - Humanised analytical prose: concrete, varied sentence length.
> - Zero em dashes and en dashes (ranges use "to"). Negatives use "−". ₹ uses Indian grouping.
> - No question headings, no rhetorical questions.
>
> When done, run:
> `python -c "import re,io,sys;t=io.open(sys.argv[1],encoding='utf-8').read();print('dashes',t.count(chr(8212))+t.count(chr(8211)),'words',len(t.split()),'tables',len(re.findall(r'^\|[-| :]+\|$',t,re.M)));b=['delve','landscape','unlock','game-changer',chr(104)+'ere\'s','let\'s','bottom line','it\'s not just','make no mistake','in today\'s','seamless','robust','tapestry','testament','realm','holistic','synergy','paradigm','cutting-edge','revolutioni','journey','crucial','pivotal','furthermore','moreover','empower','harness','github','vercel'];print({x:len(re.findall(re.escape(x),t,re.I)) for x in b if re.search(re.escape(x),t,re.I)})" yuva-yodha/research/parts/part-X.md`
>
> Fix every hit until dashes are 0 and no banned word remains. Reply with the word count, table count, sections written, and any fact you needed but did not have. Edit no other file.

### 13.5 The 500-word pitch (task P500: an Opus-class model only)

**13.5.1 Why it is separate.** The organisers receive only the deck and this pitch. The pitch is the first thing a judge reads and the thing most likely to be read in full, so it gets the strongest writer. Dispatch it with `Agent`, `subagent_type: "general-purpose"`, **`model: "opus"`**, `run_in_background: true`. If the main session itself runs an Opus-class model and the deadline is near, the main agent may write it directly. It must never run on a Sonnet or Haiku model.

**13.5.2 When.** After M1 (model locked), after the V0 priority lists and C0 corrections, and after F2 (so the deck's numbers are final). It runs alongside the research writers.

**13.5.3 Prompt (pass verbatim):**

> You are writing the single most important text in Team IdeaForge's submission to Schneider Electric's Yuva Yodha Energy Tech Hackathon, Challenge 03, Grid Reliability: Renewable Intermittency. The organisers receive two things: an 11-slide deck and this pitch. Judges score Problem and idea 20%, Architecture and design 20%, Impact and measurability 25%, Feasibility and affordability 20%, Sustainability 15%.
>
> **Your task.** Describe UrjaGrid in 500 words or fewer, covering, in this order:
> 1. the problem being addressed;
> 2. why it matters;
> 3. the proposed solution;
> 4. its unique or innovative aspects;
> 5. the expected impact and beneficiaries.
>
> **Read first, in full:**
> - the plan `C:\Users\harsh\.claude\plans\pasted-content-id-123f-working-folder-drifting-cascade.md`: §1.2, §1.5, §2, §3 (all of it, especially §3.2, §3.3, §3.7 and §3.8), §4, §6.1 and §6.5;
> - `yuva-yodha/deck/values.js` (the ten FINDING sentences are the deck's spine; the pitch must agree with them exactly);
> - `yuva-yodha/research/raw/*-verification.md` (use corrected values; drop anything UNVERIFIABLE);
> - `yuva-yodha/model/model_tables.md`.
>
> Then call `Skill("case-competition-deck")` and read `references/rhetoric.md` (Touchpoint B).
>
> **Form.**
> - Plain prose in exactly five paragraphs, one per topic above, in that order.
> - No headings, no bullets, no bold, no emoji, no links, no hashtags.
> - Between 440 and 490 words counted by `len(text.split())`, never above 500.
> - The first sentence of paragraph 1 states the problem in concrete terms. Name UrjaGrid by the first sentence of paragraph 3 at the latest.
>
> **Voice.**
> - Humanised, grounded storytelling in the way a senior consultant writes to a utility's Director, not a speech.
> - Paragraph 1 may open on a measured scene built only from sourced fact: the CEEW meters in Mathura and Bareilly recorded homes losing about two hours a day while the feeder log showed a few hours a month. No invented people, names, quotes or anecdotes.
> - Declarative sentences of varied length. Plain verbs and concrete nouns, with the number next to the claim.
> - No hooks, no rhetorical questions, no "imagine", no exclamation marks, no em dashes (U+2014), no en dashes (U+2013); ranges use "to".
> - None of the banned words in plan §2.2, and none of these patterns: "not just X but Y", "here is the thing", one-line dramatic reveals, triads for rhythm's sake, closing slogans.
>
> **Content that must be in it:**
> - The evening gap (2.57 GW short after sunset against 0.18 GW in solar hours on the 21 May 2026 record day) and why it hits low-income urban and peri-urban lanes first.
> - That the control point already exists: a load-limit switch in every smart meter, 7.24 crore installed.
> - The loop in one or two sentences: forecast each transformer's shortfall, try softer levers first (voluntary shift with a ₹2 a unit rebate, managed charging, shiftable loads, storage), then a time-boxed 300 W lifeline limit in place of a blackout, approved by a named engineer, with two hours' notice and critical homes never touched.
> - What is new: limit rather than cut, the meter as the unit of fairness, a rotating burden, engines that decide while a language model only explains, and no new hardware.
> - The impact as a simulated estimate: outage per home on the heatwave day from 4.2 hours to 0.4 hours (90%), on a 48-transformer, 7,000-connection network, at ₹383 a meter a year to the DISCOM and nothing to the home.
> - The beneficiaries: low-income homes, small shops, clinics and life-support homes, the DISCOM's engineers and the DISCOM's transformers.
> - The honest status in one sentence: a working prototype; the reliability gain is simulated and a six-week pilot on one sub-division would measure it.
>
> **Numbers.** Use at most 12 distinct numbers, every one from plan §3.7 exactly as written there. No other number may appear, and none of the "must never appear" values.
>
> **Must not appear:** any URL, GitHub, Vercel, "deployed", "live site", "users", "customers love", "we tested with", "pilot showed", any competitor name, any claim that the brief is wrong, and any Schneider product claim not in §3.8 or S44.
>
> **Process:**
> 1. Write a 5-line outline (one line per paragraph, with the numbers each will carry).
> 2. Draft.
> 3. Run the check script in plan §13.5.4 on the draft and fix every hit.
> 4. Critique the draft against `rhetoric.md` and the five judging criteria, and write down the three weakest sentences.
> 5. Revise those sentences.
> 6. Run the check again.
> 7. Read it aloud in your head once more for rhythm, cutting any sentence that only decorates.
>
> **Write two files:**
> - `yuva-yodha/submission/urjagrid-500-words.md`: the final text only.
> - `yuva-yodha/submission/urjagrid-500-words-notes.md`: the outline, the check output, the critique and a numbered trace of every number in the text to its §3.7 row.
>
> Then copy the final text, unchanged, to `yuva-yodha/submission/urjagrid-500-words.txt`. Edit no other file. Reply with the final text, its word count and the check output.

**13.5.4 Check script (P500 and the main agent run it):**
```bash
cd "/c/Users/harsh/Desktop/HARSH/PPTS-CASE-STUDY/nsut-innovators-court/yuva-yodha/submission" && python - <<'PYEOF'
import io, re
t = io.open("urjagrid-500-words.md", encoding="utf-8").read().strip()
paras = [p for p in t.split("\n\n") if p.strip()]
bad = ["delve", "landscape", "unlock", "game-changer", "here's", "let's", "bottom line", "not just", "make no mistake", "in today's", "fast-paced", "seamless", "leverage", "robust", "tapestry", "testament", "navigate", "realm", "holistic", "synergy", "paradigm", "cutting-edge", "revolutioni", "crucial", "pivotal", "furthermore", "moreover", "in conclusion", "empower", "supercharge", "reimagine", "next-gen", "world-class", "best-in-class", "transformative", "harness", "journey", "imagine", "github", "vercel", "http", "deployed", "live site"]
print("words", len(t.split()), "| paragraphs", len(paras), "| dashes", t.count("\u2014") + t.count("\u2013"), "| ? or !", t.count("?") + t.count("!"))
print("banned", {b: len(re.findall(re.escape(b), t, re.I)) for b in bad if re.search(re.escape(b), t, re.I)})
print("markdown", bool(re.search(r"^[#*-] |\*\*|\[", t, re.M)), "| numbers", sorted(set(re.findall(r"₹?\d[\d,.]*(?:\s?(?:%|GW|h|hours|crore|lakh|W))?", t))))
PYEOF
```
Pass when all of these hold:
- words between 440 and 490;
- paragraphs 5;
- dashes 0;
- `? or !` 0;
- banned `{}`;
- markdown `False`;
- every number in the list appears in §3.7.

**13.5.5 Main agent's review (step R500).** Tick each line in `build-log.md`:
1. The check script passes.
2. Every number traces to §3.7, and the trace in the notes file is complete.
3. "Simulated" or "estimate" sits next to the 4.2 h to 0.4 h figure.
4. The five topics appear in order, one per paragraph.
5. The words match the deck: brownout, never blackout; 300 W; a named engineer; ₹383; ₹0 to the home.
6. No link, competitor or repository.
7. It reads as a person wrote it: no sentence starts with "In a world", "At its core", "Ultimately" or "This is where".

If a line fails, return the draft to P500 with the failing lines. Do not rewrite it with a Sonnet model.

### 13.6 Critic prompt (CR; Touchpoint C)

> Invoke the `case-competition-deck` skill in critique mode. Read `references/critique_rubric.md` and `references/rhetoric.md`, plan §3 and §8, then the screenshots `yuva-yodha/deck/shots/s1.png` to `s11.png`. This is an 11-slide hackathon deck in the organisers' format (cover, 8 core slides in their order, appendix, thank you). Mark these as not applicable: table of contents, abbreviations, section dividers, multi-slide appendix, bibliography slides, 100-slide structure. Lead with two things the deck does well. Score the remaining dimensions out of 5 and also against the hackathon's five criteria. Give at most five fixes, each a wording change of the same length or shorter that keeps every number. Flag any line that reads as a measured result when it is simulated, and any build-status word that overstates the §4.3 audit. Edit no file.

### 13.7 Recovery table

| Symptom | Action |
|---|---|
| `gen.py init` fails on `make_preamble` asserts | The Hisaab preamble changed. Restore it with `git -C . show HEAD:fintechstico-submission/deck/preamble.js` into the scratchpad and pass that path instead; report |
| Lock check mismatch | Stop; report the lines; the product changed since planning |
| A node lands 240px off | A helper set x or y before `appendChild`; the preamble helpers never do, so check for hand-written code; never compensate |
| `Cannot use unloaded font` | Rebuild through `build/slide_NN.js` (it loads all four fonts) |
| A `use_figma` call errors with `safeToRetryWithoutCanvasRead: true` | Fix and rerun the same file; each slide script clears its slide first |
| Slide names reset to "1" to "11" | Re-run the naming lines of §11.1 |
| Photo capture blank | §11.5 fallback |
| Writer under target | Re-dispatch that writer with the expansion instruction in step D |
| Pitch over 490 words | Cut decorative clauses first, then merge two sentences; never drop the honesty sentence or the impact numbers |

---

## 14. Q&A defence sheet (`gen.py init` writes it)

<!-- FILE: qa/qa-defence.md -->
# UrjaGrid: judge questions and answers (Team IdeaForge)

Each question is the panel's, as reported speech. Answers use only facts from the research document.

**Q1. The panel will ask: is the 90% cut measured or simulated?**
Simulated. It comes from our model on the prototype's own 48-transformer, 7,000-connection network, real 2024 weather days and the same shedding and trip rules on both sides. The six-week pilot is designed to measure it on one sub-division before anyone quotes it as a result.

**Q2. The panel will ask: why not a community battery?**
A battery is lever 4 in our ladder, and storage dispatch is coded today against a simulator. On cost, our base case is ₹1,448 per kW of peak relief a year against ₹3,591 to ₹5,700 in Delhi's approved distribution battery tariffs. On timing, 10.4 GW of storage was awarded in 2025 and about 1.8 GWh was installed by March 2026. The meters are already on the wall.

**Q3. The panel will ask: does a 300 W limit not switch people off anyway?**
If a home stays above its limit, the meter's relay trips and reconnects automatically after a set delay; Eskom saw the same. That is why every limit has two hours' notice, an expiry and a ₹2 a unit rebate for shifting first. In the simulated base case, 1,751 of the 3,402 capped connections at the peak have to trim load, and the fan-and-lights and fridge-and-TV homes are not constrained by the comfort cap at all.

**Q4. The panel will ask: is this the DISCOM rationing the poor?**
Today the poor are rationed by a feeder switch, with no floor at all. UrjaGrid gives every home a guaranteed floor, never touches critical loads, rotates the burden through a fairness ledger and needs a named engineer's approval for every plan. The comfort cap mostly constrains cooler, AC and cold-chain loads.

**Q5. The panel will ask: what about homes on life support?**
They are tier T0 with hospitals and are never capped, asked or shed. That is a coded invariant with its own tests. Field workers register them, and the engineer's approval is the backstop for anyone not yet registered.

**Q6. The panel will ask: is any of this connected to a real meter?**
No. The DLMS limiter, OCPP, OpenADR, Beckn and messaging adapters are coded and unit-tested against simulators (WIRED). Connecting a real head-end is the pilot's first task. The deck counts 10 LIVE, 12 WIRED and 6 PILOT capabilities.

**Q7. The panel will ask: where do the forecasts come from?**
A LightGBM quantile forecaster with 13 features and three quantiles is coded and trained on synthetic data, so it is tagged WIRED. Training on real meter history is a pilot item. The planner today works from the scenario's demand.

**Q8. The panel will ask: why would a DISCOM pay?**
At ₹383 a meter a year in the base case, against AMISP service charges of ₹60 to ₹167 a meter a month already paid for the meters, the DISCOM buys fewer transformer failures (overload hours fall 79% in the simulated year), better reliability reporting and a way to meet a regulator who says load shedding is not an option.

**Q9. The panel will ask: who operates it locally?**
The DISCOM. A Junior Engineer approves plans for their sub-division, an Assistant Engineer watches health across sub-divisions, field staff keep the critical-load registry, and the regulator sees aggregates only.

**Q10. The panel will ask: what does Schneider's own stack already do?**
ADMS runs feeders and DERMS manages distributed resources and load relief. UrjaGrid works below the transformer, at the meter, with a human approval gate and a home-facing channel, so it complements that stack rather than replacing it.

**Q11. The panel will ask: the UP prepaid rollback shows people distrust remote meter control. Why will this land?**
That rollback is why the design is postpaid-compatible, gives two hours' notice, explains itself in Hindi and English, pays a rebate, sets a floor and needs a named approver. The pilot starts in read-only shadow mode for two weeks.

**Q12. The panel will ask: is the network realistic?**
It is a simulated network on real Bareilly and Mathura localities, sized tight on purpose: 27 of 48 transformers exceed rating on the heatwave day. Today's track loses 4.2 hours per home that day, close to the 3.5 hours CEEW's meters recorded in small towns of the same districts.

**Q13. The panel will ask: what if supply falls further in the evening?**
In the stress test the base case holds at 0.4 hours up to a 30% extra evening shortfall and rises to 1.0 hour at 40%, while today's track sits at 6.35 hours from 10% upward.

**Q14. The panel will ask: what still needs steel?**
In the base case, 4 of 48 transformers are still cut on the heatwave day. Those need an upgrade, and UrjaGrid's risk ranking says which four.

**Q15. The panel will ask: did you talk to engineers or households?**
Not yet, and we do not claim to have. The validation plan covers 6 JEs and AEs, 20 households, 10 shop owners and 2 head-end vendors, each with one question that would change the design.
<!-- END FILE -->

---

## 15. Final report and verification

**End-to-end checks before reporting done**
1. Model: lock check 0 mismatches; `model_tables.md` present.
2. Deck: V1 clean on all 11 slides (residuals listed); sweeps at expected values; V8 story reads in order; critique scores logged; 11 screenshots read.
3. Pitch: §13.5.4 passes; §13.5.5 all ticked; the text appears in the final message.
4. Research document: ≥ 30,000 words, ≥ 70 tables, 0 dashes, 0 missing source IDs, PDF built and its pages checked.
5. Honesty: grep the deck text, the pitch and the document for "achieved", "we tested", "our users", "pilot showed", "deployed", "live"; each hit must be in a status tag or beside "simulated", "est." or "pilot", or be removed.
6. Polish: Touchpoint E 0 hits.

**The final report contains:**
- the Figma URL;
- the full 500-word pitch with its word count;
- the paths of the research PDF, the model tables, the Q&A sheet and the preview PDF;
- validator results, critique scores and residuals.

**It ends with four plain reminders:**
- Export the deck from Figma (File, Export) in the format the form asks for.
- The 4.2 h to 0.4 h figure is a simulation estimate and must be presented as one.
- Adapters are simulators and no interview has been run.
- Check the deadline on the official FAQ.
