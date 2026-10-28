# SwasthyaGrid, Space & Beyond Innovation Ideathon 2026 (NSUT): master execution plan for a 9-slide consulting-grade Figma deck

> **Who executes this.** A Sonnet-class orchestrator (the main agent) plus at most two Sonnet sub-agents dispatched with the
> Agent tool (`subagent_type: "general-purpose"`, `model: "sonnet"`). The argument, every slide headline, every exhibit,
> every string, every coordinate, the helper library, the generator and the checks are fixed in this plan. **Your job is
> execution, not design.** When this plan conflicts with your instinct, follow the plan. When something is genuinely
> missing, apply §0.7. Never stop to redesign, never change a number, never touch the research.
>
> **Deadline.** Round 2 (prototype and final presentation) is on **17 October 2026**. Today is 16 October 2026. The deck
> must be built, checked and exported as a PDF tonight. The critical path is §5 (Figma build, about 3 to 4 hours of tool
> calls). Nothing in this plan writes new research.
>
> **Verified at planning time (16 Oct 2026), in memory, nothing written to the project** (harness in Q.0, run against this
> exact file):
> 1. `files 21` extracted blocks; every Python block compiles.
> 2. `gen.py pre`: every model line in `LOCK` is printed by `NX\model\model_output.txt`; headlines h2 to h8 are 148, 149,
>    147, 141, 142, 141, 139 characters; source lines 120 to 190 characters.
> 3. `gen.py mock` (with the added child-inside-parent check `CHK`): `s01 OK` to `s09 OK`, `warnings: []`, `ISSUES 0` on all
>    nine. Node counts S1 120, S2 261, S3 273, S4 346, S5 284, S6 297, S7 264, S8 298, S9 38. Figma script parts 40,030 to
>    41,850 characters (limit 50,000); S1 to S8 run as two parts each, S9 as one.
> 4. `gen.py copy`: `copy issues 0` (no dash, no `?` or `!`, no banned word, no absent word).
> 5. `preview.py` rendered all nine slides with real glyph widths; each was read and corrected until no panel spilled,
>    no text collided and no region was empty.
> 6. Hashes of the files the harness read (md5): `dreamforge-case\deck\_x2.js` edaecc18…, `_x3.js` 78665caa…, `_v1.js`
>    d72b3ff6…, `metrics.json` 010e284f…, `preview.py` a97a41bc…; `verdict-mnc\deck\preamble.js` 7682d2da…,
>    `mock_figma.js` 664c19a1…; `nexora\model\model_output.txt` 108ac885….
>
> If a first run does not reproduce this, a block was retyped or a file it reads changed: stop and use §7.

**Contents.** §0 Context, decisions, rules, skill touchpoints, contract · §1 The brief decoded · §2 The solved case (argument,
locked numbers, slide architecture) · §3 Sequence and dispatch · §4 Phase P: preparation (no new research) · §5 Phase D:
Figma build · §6 Verification · §7 Risks and recovery · §8 Open items · §9 Hand-off and memory · Part VI embedded files
(Q.0 harness, Q.1 extractor, Q.2 generator and tooling, Q.3 values, Q.4 to Q.12 slide scripts, Q.13 Figma utility scripts,
Q.14 Round 2 Q&A brief).

---

## §0 CONTEXT AND HOW TO USE THIS PLAN

### §0.1 Why this work exists

Team IdeaForge (Harsh Kawatra, Delhi Technological University, Team Leader; Gursimran Kaur, Guru Gobind Singh Indraprastha
University, Member) is in **Space & Beyond, Innovation Ideathon 2026 at NSUT**. The organiser's brief is reproduced verbatim
in §1.1. Round 1 (PPT) closed on 15 Oct; Round 2 on 17 Oct asks for a prototype plus a final PPT presented to a judging
panel. The prototype is demonstrated separately; **this deck presents SwasthyaGrid as a software idea, not as a built
app**: no app screenshots, no technology stack, no vendor names, no claim of deployment.

SwasthyaGrid has been pitched three times before, always from one research base:

| Earlier deck | Figma key | What it was | Use in this build |
|---|---|---|---|
| Google Build with AI hackathon deck | `APbOstO4SSU7iAjYIgEeSd` | 12 slides, technical, LIVE/WIRED/PILOT tags | visual model only; its tech content is excluded |
| Startup pitch (9 slides) | `e5VEexsLMhDampx7gvhFmM` | idea-stage pitch, green and gold | visual model only |
| NEXORA idea pitch (10 slides), later relabelled for Innovation Odyssey | `O0YlsAbRsIqQqSugUDWrxJ` | idea-stage, research-backed, real logos on its cover | **logo source** (§5.10); never edited |

The research base is fixed and complete: `swasthyagrid-gcp\nexora\research\swasthyagrid-nexora-research.md` (54,456
words, 102 tables, sections 0 to 17 plus Appendices A to E), its model `swasthyagrid-gcp\nexora\model\nexora_model.py` and
output `model_output.txt`, and the source register in its Appendix A. **The user said "absolutely no change in research".**
Every number on this deck is taken from that document or that model output, with its section named in §2.4.

The user asked for: a completely new native Figma Slides deck, consulting grade, extremely dense, laced with charts, bars,
heat maps, tables, graphs and diagrams; built with maximum use of the `case-competition-deck` skill; a real mind-map cover
with logos; 9 slides (1 cover, 6 core: executive summary, problem, solution, market, feasibility, impact; 1 appendix;
1 thank-you); humanised analytical language with no hooks, no AI phrasing and no em dashes; and this plan, detailed enough
that Sonnet executors only execute.

### §0.2 Deliverables, locations, done-when

`ROOT` = `C:\Users\harsh\Desktop\HARSH\PPTS-CASE-STUDY\nsut-innovators-court`. `SB` = `ROOT\swasthyagrid-gcp\space-beyond`
(new folder, created in B1). `NX` = `ROOT\swasthyagrid-gcp\nexora`. `DF` = `ROOT\dreamforge-case` (tooling source, read-only).

| # | Deliverable | Location | Done when |
|---|---|---|---|
| 1 | Plan copy and extracted tooling | `SB\PLAN.md`, `SB\deck\*` | `extract.py` prints `files 21`; `gen.py mock` prints nine `OK` lines |
| 2 | Figma Slides deck, 9 slides | new file `SwasthyaGrid \| Team IdeaForge \| Space & Beyond 2026` | V1 clean on all 9, sweeps clean, critique ≥ 40/45, logos placed or listed |
| 3 | Submission PDF | `SB\deck\TeamIdeaForge_SpaceAndBeyond.pdf` (organiser's suggested file name) | 9 pages, every page viewed |
| 4 | Slide copy and derivation | `SB\deck\slide-copy.md`, `SB\deck\derivation.md` | every number row says `Matches Y` |
| 5 | Round 2 Q&A brief | `SB\qa\round2-qa.md` (Q.14 verbatim) | present |
| 6 | Build log, decisions | `SB\build-log.md`, `SB\DECISIONS.md` | every step logged with pasted output |
| 7 | Memory | `project_swasthyagrid_space_beyond.md` + `MEMORY.md` line | written (§9) |

### §0.3 User decisions (AskUserQuestion, 16 Oct 2026; do not reopen)

| # | Question | Answer | Consequence |
|---|---|---|---|
| U1 | Slide count | **9 slides**: cover, 6 core (Executive Summary, Problem, Solution, Market, Feasibility, Impact), Appendix, Thank-you | inside the brief's 8 to 10 cap |
| U2 | Event | **Space & Beyond : NSUT** (brief in §1.1) | cover chip, logo slots, file name `TeamIdeaForge_SpaceAndBeyond` |
| U3 | Team | **Harsh Kawatra + Gursimran Kaur** | team table on cover and thank-you; no other name anywhere |
| U4 | Type floor | **18 pt for secondary text** (the SwiftKart R2 rule) | headlines, panel titles, numerals, rails, card text ≥ 22 pt; table cells, chart labels, notes may be 18 pt and are named `SEC`; source line 14 pt, fine print and bibliography 16 pt. Log in `SB\DECISIONS.md` |
| U5 | Research | **No change.** No new research is written | every number from NX research or model; §4 only prepares |
| U6 | Framing | idea, not a built app; no screenshots; prototype session is separate | no "deployed", "live in", "used by", "customers", "partners", "pilots running"; the one worked example on S4 is labelled "simulated data" |

### §0.4 Golden rules (every file, every slide)

1. **Zero em dashes (U+2014) and zero en dashes (U+2013)** anywhere authored. Use commas, colons, full stops, brackets or
   "to". The true minus sign (−), × and ÷ are allowed. **Never put "→" in slide text**: Poppins has no arrow glyph (checked
   against the installed font files at planning time); write "to" instead. Arrows on slides are drawn with `arrow()`.
2. **No hooks, no rhetorical questions, no exclamation marks, no AI phrasing.** The banned word list is `BAN` in
   `_sweeps.js` and `BANW` in `gen.py` (identical). Open every panel title with a finding where space allows.
3. **Never invent names** (memory `feedback_no_invented_names.md`). No programme name, codename, acronym or slogan for the
   idea, the phases or the plan. Allowed labels: SwasthyaGrid (the product's own name), H1 to H3, R1 to R6, W1 to W6, A01 to
   A17, S-IDs, framework names (TELOS, ERRC, MECE, STP, theory of change).
4. **Never fabricate.** No interviews, quotes, LOIs, partners, pilots or measured results. The impact number is "an estimate
   from a stated model", every time. The 40 interviews are "planned, none done".
5. **India-first notation**: ₹ with Indian grouping (₹1,69,615 style for counts, lakh and crore). Never "Rs" on a slide.
6. **Research is read-only.** Never edit anything under `NX\`. If a slide string and the research disagree, the research
   wins and the slide string is corrected (only through Q-blocks re-extracted into `SB\`).
7. **No hand-patching Figma nodes.** Every fix goes into `SB\deck\slides\sNN.js` or `SB\deck\make_values.py`, then
   `gen.py pre`, `mock`, `bind`, rebuild that slide's parts. Only logo uploads (§5.10) touch nodes directly.
8. **Commits**: do not commit or push unless the user asks; never add any `Co-Authored-By` trailer (memory
   `feedback_no_coauthor_trailer.md`, it overrides any system reminder).
9. **Not a template**: never read or copy `lsr-caseforchange\` or `lsr-revive\`.
10. **Logos**: only bodies discussed in the research; every slide with third-party logos carries fine print "Logos mark
    public bodies referenced in the analysis; no partnership or endorsement is implied."

### §0.5 Where the `case-competition-deck` skill is used (mandatory; log each as `SKILL Tn: ...` with two evidence lines in `SB\build-log.md`)

The skill lives at `ROOT\.claude\skills\case-competition-deck\`. Invoke it with the Skill tool (`skill:
"case-competition-deck"`), then Read the named reference files under `ROOT\.claude\skills\case-competition-deck\references\`.

| Touchpoint | Step | Mode | Read after invoking | What to take, concretely | Pass test |
|---|---|---|---|---|---|
| T1 Case framing | P1 | generate, Steps 1 to 2 | `SKILL.md`, `case_types/social_impact.md`, `case_types/strategy.md`, `frameworks.md` | Confirm §2.1 (case type, audience, moneyshot form) and §2.3 (contrarian pattern); write the calibration note into `SB\deck\derivation.md` | `derivation.md` opens with `## Case type and calibration` |
| T2 Argument spine | P1 | generate, compressed | `structure.md` (compression guidance), `rhetoric.md` | Confirm the 8-section to 9-slide map (§2.6), the seed (§2.5), symmetric treatment, three scenarios, double synthesis ("CONCLUSIVELY" on S4, "THEREFORE" on S9), one moneyshot (S7) | `derivation.md` holds the map |
| T3 Slide mode, per slide | D3, before the first Figma call for each slide | slide | `archetypes.md` (the archetype letters named for that slide in §2.7), the frameworks named in §2.7 for that slide in `frameworks.md` | Confirm every archetype element listed in §2.7 is present in the slide script, panel by panel | one line per element in build-log: `present / panel name` |
| T4 Deck critique | D6 | critique | `critique_rubric.md`, `case_types/social_impact.md`, `case_types/strategy.md` | Score dimensions 1 to 7 on S2 to S8 plus the pass/fail items in §5.8; at most five issues; fixes only through §5.9 | `SB\deck\critique.md`; total ≥ 40/45 equivalent |
| T5 Q&A check | P3 | critique-lite | `rhetoric.md` (pre-empting weaknesses, defensive depth) | Check that Q.14 answers every judge angle the brief names (idea, prototype, implementation, feasibility, future scope) | `round2-qa.md` written; build-log line |

**Calibration note (write once into `derivation.md`):** the skill's corpus is three M&A decks from the Global Case
Competition at Harvard. This is an idea-stage social-impact start-up pitch argued with strategy-case rigour. The structural
and rhetorical patterns transfer (contrarian recommendation, action titles, one moneyshot, foreshadowing, symmetric
treatment, three scenarios, defensive depth, double synthesis). The M&A frameworks (DCF, football field, accretion) do not
apply; TAM/SAM/SOM, unit economics, TELOS, theory of change, scenario and sensitivity analysis replace them. The skill's
".pptx" step does not apply: the deck is native Figma Slides per `ROOT\CLAUDE.md`.

### §0.6 Writing style contract (every slide string is already written in Part VI; this governs any fix)

Declarative findings with a number; first person plural only where a sentence needs a subject ("we enter through");
plain words; no adjectives that a number could replace; no question marks; abbreviations defined on S8 (A4). Uncertain
numbers appear as bear, base and bull. When a string must be shortened, use the ladder in §5.9, never a vaguer claim.

### §0.7 Default when unspecified

(a) Copy the nearest pattern in this plan, then in `DF\PLAN-R2.md`; (b) choose the simplest option that keeps every golden
rule; (c) append `YYYY-MM-DD | step | decision | why` to `SB\DECISIONS.md`. Ask the user only for destructive or
outward-facing actions (submitting the PDF, posting anywhere) or a missing credential. Creating the one Figma file is
pre-approved.

### §0.8 The Sonnet execution contract (read twice)

DO
1. Read §0 to §2 and the sections named for your step in full before acting.
2. Extract files with `extract.py` (Q.1). Never retype a code block from this plan. A fix is made in the extracted file
   under `SB\`, never in the plan, and is logged.
3. Run every self-check and paste its output into `SB\build-log.md`.
4. Make every Figma call yourself, one at a time, in the order §5.7 gives.
5. Report in at most 12 lines ending with `STATUS: PASS`, `PASS WITH RESIDUALS` or `FAIL`.

DO NOT
1. Change a headline's numbers, a slide layout, a palette value, the slide count, the team or the research.
2. Add a framework §2.7 did not choose, browse for new facts, or invent a number to fill a gap.
3. Run two Figma calls at once, create a second Figma file, or edit the three earlier SwasthyaGrid Figma files.
4. Treat a V1 `cellWrap` or `textOut` flag as a false positive (SwiftKart lesson): fix it.

### §0.9 Roles

| Role | Model | Does | Never does |
|---|---|---|---|
| Orchestrator (main agent) | Sonnet | Bootstrap, every Figma call, logos, sweeps, previews, PDF, final report | Edit research, change a number |
| Critic CR (one dispatch, D6) | Sonnet | Skill touchpoint T4 on the nine screenshots | Rewrite slides |
| Copy reviewer CW (one dispatch, D6, parallel with CR) | Sonnet | Reads `slide-copy.md` line by line for AI phrasing, invented names, wrong notation | Edit Figma |

---

## §1 THE BRIEF, DECODED

### §1.1 The organiser's brief, verbatim (as pasted by the user on 16 Oct 2026)

> **Space & Beyond, Innovation Ideathon 2026.** An idea-based innovation challenge where participants identify real-world
> problems and propose creative, practical and impactful solutions. Themes (choose one): **Beyond Earth** (space
> exploration, habitats, satellites, space technology); **Smart World, Better Future** (ideas that use technology and
> innovation to solve real-world problems and improve everyday life); **Future without Limits** (open-ended ideas).
> Teams of 2 to 4. **Round 1**: registration and PPT, maximum 8 to 10 slides, explaining the problem, proposed solution,
> innovation, implementation, feasibility, impact and future scope; last date 15 October 2026; results 16 October 2026.
> **Round 2**: shortlisted teams develop a prototype (Figma or any tool; a clickable mock-up is sufficient) and prepare a
> PPT to explain their solution and prototype, presented to the judging panel on 17 October 2026; judges may ask about
> the idea, prototype, implementation, feasibility and future scope. **PPT guidelines**: maximum 8 to 10 slides; clear,
> concise, visually appealing; use diagrams, flowcharts, images and visuals; avoid excessive text; original or properly
> credited; PPTX or PDF; suggested file name `TeamName_SpaceAndBeyond`. **Suggested structure**: title and team details,
> problem statement, proposed solution, innovation and uniqueness, working or implementation, technology or resources
> required, feasibility and scalability, expected impact, future scope, conclusion.

Theme chosen: **Smart World, Better Future** (shown on the cover chip).

### §1.2 Requirements traceability (every brief item lands on a named panel)

| # | Brief item | Slide and panel |
|---|---|---|
| B1 | Title and team details | S1 title, theme chip, team table; S9 team table |
| B2 | Problem statement | S2 "SHORT AND WASTED AT ONCE"; all of S3 |
| B3 | Proposed solution | S2 idea card; S4 "THE DAILY LOOP", "THE RULES", "FOUR OUTCOMES" |
| B4 | Innovation and uniqueness | S4 "FIVE PUBLIC SYSTEMS RECORD; NONE PROPOSES A MOVE", "ERRC", "CONCLUSIVELY" card; S2 "FIVE SYSTEMS RECORD, NONE MOVES" |
| B5 | Working or implementation | S4 loop and worked example; S6 Gantt and twelve-month timeline |
| B6 | Technology or resources required | S6 "RESOURCES REQUIRED: NO NEW HARDWARE"; S5 licence build |
| B7 | Feasibility and scalability | S6 TELOS, law, risks, stop rules; S5 sizing; S7 three horizons |
| B8 | Expected impact | S7 moneyshot, model, scenarios, sensitivity, theory of change, people/planet/profit |
| B9 | Future scope | S7 "FUTURE SCOPE: THREE HORIZONS", "BEYOND YEAR 3" |
| B10 | Conclusion | S4 "CONCLUSIVELY" card; S9 "THEREFORE" card |
| B11 | 8 to 10 slides | 9 |
| B12 | Diagrams, flowcharts, visuals; avoid excessive text | every core slide carries 7 to 9 exhibits, at least 5 of them charts, grids or diagrams |
| B13 | Properly credited | source line on every slide; S8 A4 bibliography; logo fine print |
| B14 | File name | `TeamIdeaForge_SpaceAndBeyond.pdf` |
| B15 | Prototype shown separately | S1 verdict card and S9 footer say so; no screenshot anywhere |

### §1.3 What the judges score (inferred from the brief's own words) and where we win

| Judge question (from the brief) | Where the deck answers it | The evidence they see |
|---|---|---|
| Is it a real problem? | S3 | four availability studies, CAG expiry in four states, five whys, issue tree |
| Is the solution creative and practical? | S4 | the five-step loop, fixed rules, four outcomes, a worked transfer |
| Is it unique? | S4, S2 | 6 × 5 capability grid against five named public systems; ERRC |
| Can it be implemented and scaled? | S6, S5, S7 | TELOS with two honest ambers, six-week Gantt, resources table, three horizons |
| Is the impact meaningful? | S7 | 1.36 crore stock-out days a year (estimate), 72.2% to 86.1%, sensitivity grid |
| What is the future scope? | S7 | three horizons, wider basket, aspirational blocks, adjacent departments |

---

## §2 THE SOLVED CASE (skill generate mode, compressed; decided at planning time)

### §2.1 Case type, audience, moneyshot

| Item | Decision |
|---|---|
| Skill case type | Social impact (`case_types/social_impact.md`) argued with strategy rigour (`case_types/strategy.md`) |
| Audience | NSUT ideathon judging panel: engineering and management faculty, possibly industry; they reward clarity, feasibility and honest scoping |
| Moneyshot form | Social impact: "X reached at Y". Ours: **an estimated 1.36 crore stock-out days avoided a year (base case), availability 72.2% → 86.1%**, in `CARD: MONEYSHOT` on S7, the largest numeral in the deck |
| Calibration | Extrapolated from M&A corpus (§0.5 note) |

### §2.2 The obvious answers and why each stalls (research §2.1, Table 2.1)

| Obvious answer | Why it stalls |
|---|---|
| Hire more specialists | 79.9% of CHC specialist posts already sit empty (4,413 of 21,964 in place) [S01]; hiring is a multi-year lever (§4.10) |
| Buy more medicine | Telangana wrote off ₹390.26 Cr (2016-22) [S16], Odisha ₹168 Cr (Apr 2019 to Jan 2025) [S17]; buying feeds the same waste |
| One national supply database | Health is a State subject (Seventh Schedule, List II, Entry 6) [S13] |
| Another dashboard | Five public systems already record supply; none proposes a move (§7.1) |

### §2.3 The recommendation (contrarian pattern)

**Governing thought (verbatim on S1 and S9):** "Before India buys more medicine, move what each district already owns."
Mechanism (research §2.2, §8): **see** (days of cover under 3, or 5 for emergency drugs, flagged each morning), **propose**
(nearest surplus within 40 km ranked, sized to refill 21 days of cover), **approve** (a named officer approves, edits or
rejects; the receiving facility confirms). Buyer: State Health Department, one ₹12 L licence per district (§9, §11).

### §2.4 Locked numbers (every number on the deck, its source, and its slide)

The model is `NX\model\nexora_model.py`; its printed output is `NX\model\model_output.txt`, reproduced in research Appendix
B. `make_values.py` (Q.3) asserts that every model line used on a slide is printed by the model (`LOCK`), so a changed model
fails `gen.py pre` instead of leaving a stale slide.

| Number | Meaning | Source (research §, tag) | Slides |
|---|---|---|---|
| 38,241 | PHCs 31,882 + CHCs 6,359, 31 Mar 2023 | §4.1 [S01] | S1, S3, S7 |
| 1,69,615; 1,340; 714 | sub-centres; sub-divisional hospitals; district hospitals | §4.1 [S01] | S3 |
| 45.2%, 51.1%, 72.2%, 74.2%, 77% | availability: Punjab, Haryana [S44]; Puducherry state PHC [S02]; Gadag [S03]; Puducherry central PHC [S02] | §4.2 | S3 |
| 66 to 80% | Puducherry state PHC range | §4.2 [S02] | S2 |
| 60% for 3 to 6 months | Haryana missing items' duration | §4.4 [S44][S04] | S3 |
| 58,000; 5,726; MMR 93; 4 to 6 weeks | snakebite deaths; rabies deaths (WHO); maternal mortality ratio; dengue signal | §4.3 [S06][S07][S08][S09] | S3, S7 |
| 79.9% | CHC specialist posts unfilled | §4.5 [S01] | S2, S3 |
| 64.2% → 43.4% | out-of-pocket share of total health spending, 2013-14 → 2022-23 | §4.6 [S10] | S2, S3, S7 |
| 19.35% → 21.19% | pharmacy share of current health expenditure | §4.6 [S43] | S3 |
| over 70% | Odisha public patients buying prescribed drugs privately | §4.7 [S45] | S3 |
| ₹390.26 Cr; ₹168 Cr; ₹558 Cr | expired drugs Telangana, Odisha; sum | §6.1 [S16][S17] | S1, S2, S3 |
| ₹23.03 Cr; ₹14.52 Cr | expired drugs Karnataka, Haryana | §6.2 [S40][S41] | S3 |
| ₹17.13 Cr | Telangana drugs issued with 1 to 89 days of shelf life | §6.1 [S16] | S3 |
| ₹65.04 Cr, ₹28.80 Cr; ₹1.97 Cr, ₹0.96 Cr | expiry a year; per district a year (TG over 6.00 yrs, 33 districts; OD over 5.83 yrs, 30) | §6.3 [M][A14] | S3, S8 |
| 6.1%, 12.5% | share of yearly expiry that repays a ₹12 L licence | §6.3 Table 6.4 [M] | S2, S6, S8 |
| 80%, 29,000+, 12 to 36 states and UTs | eVIN results and scale | §7.1, §7.3 [S12] | S2 |
| 3 days, 5 days, 21 days, 40 km, 90% | design rules | §8.2 [S31] | S2, S4 |
| 7 → 119 → 126 vials; 1.2 → 21.0 days | worked example, simulated data | §8.5 [S31] | S4 |
| 780; 112; 80; 41; 5 | districts; aspirational; SOM Y3; Rajasthan; Rajasthan's aspirational | §9.4, §9.6 [S23][S19][S24][M] | S5 |
| ₹93.6 Cr; ₹13.44 Cr; ₹9.6 Cr; ₹4.92 Cr; 10.3% | TAM; SAM; SOM Y3; beachhead; SOM share of TAM | §9.4 [M] | S2, S5, S8 |
| ₹12 L = ₹4 L + 50 × ₹14,000 + ₹1 L; 49.0 | licence build; facilities per district | §11.1 Table 11.1 [A05][A07][M] | S5, S8 |
| ₹37,227 Cr; ₹47.73 Cr; 0.25% | NHM 2025-26; per district; licence share | §9.5 [S18][M] | S2, S5, S6 |
| ₹28,859 / ₹29,085 / ₹36,000 / ₹37,227 Cr | NHM 2022-23 to 2025-26 | §11.5 [S82][S18] | S5 |
| 95.99 Cr; 31; 1 lakh+ | ABHA IDs (31 Jul 2026); States and UTs on e-Aushadhi dashboard; ABDM registry facilities | §9.6, §13.3 [S21][S15][S100] | S5, S6 |
| ₹3 L to ₹25 L | Indian HMIS/EHR price band (vendor scan) | §9.7 [S25][A17] | S5 |
| 71% (62/76%); ₹4 L; 5.6 months; ₹42.6 L; 10.65x | gross margin; CAC; payback; LTV; LTV:CAC | §11.1 [A08][A09][M] | S2, S5, S7, S8 |
| ARR 1.44 / 5.40 / 9.60; onboarding 0.36 / 0.99 / 1.05; billings 1.80 / 6.39 / 10.65; 90.1% | base revenue path, ₹ Cr | §11.1 Table 11.3 [M] | S5, S8 |
| bear 12/30/50, ARR Y3 6.00, billings 6.60; bull 12/60/105, 12.60, 13.95 | other cases | Table 11.3 [M] | S5, S8 |
| 6.00 to 12.60; 7.20 to 12.00; 7.92 to 11.28 | Y3 ARR sensitivity | §11.1 Table 11.4 [M] | S8 |
| 2.72 crore; 27.8% | baseline stock-out days; baseline unavailability | §14.1 [M][S02] | S7 |
| 81.5 lakh / 1.36 crore / 2.17 crore; 80.5% / 86.1% / 94.4% | scenarios; availability after | §14.2 [M] | S2, S7 |
| 355; 17,412 | days avoided per facility, per district, base | §14.4 [M] | S7 |
| 99.7 … 58.6 grid | sensitivity, lakh days | §14.3 [M] | S7, S8 |
| 4.4%; 71% | health care share of global net emissions; supply-chain share | §11.3 [S22] | S7 |
| 82.1% | Odisha households binning unused medicine | §11.3 [S34] | S7 |
| 500 blocks, Jan 2023 | Aspirational Blocks Programme | §9.8 [S60] | S7 |
| ₹65 lakh | AIM digital-health grant ceiling | §15.4 [S105] | S6 |
| 6 weeks; 40 interviews (5/8/10/9/8) | MoU to live district (plan); planned interviews | §13.2, App. E [A16][S31] | S2, S6 |

**Notation decision (log in DECISIONS):** research §8.5 expands ARV as "antiretroviral" while §4.3 and §5.2 use
"anti-rabies vaccine (ARV)" and §8.5 itself describes a refrigerated van. The deck writes "ARV" unexpanded on S4 and
defines it on S8 as "anti-rabies vaccine" (§4.3). If a judge asks, the answer is the tracer item in the worked example.

### §2.5 Rhetorical engineering (skill `rhetoric.md`)

- **Action titles**: every core headline (`V.h2` to `V.h8`) is a full-sentence finding with a number, at most 150 characters.
- **Foreshadowing**: the cover seed ("₹558 Cr of medicine expired in two audited states while PHC shelves ran short") and
  S2's "FIVE SYSTEMS RECORD, NONE MOVES" grid seed the answer; S3's issue tree marks branches 2 and 5 as "Fixed" by a
  district view before S4 names the loop.
- **Symmetric treatment**: the same six systems on identical columns (S2 compressed, S4 full); bear/base/bull in the same
  order and colours everywhere (S2, S5, S7, S8).
- **Three scenarios**: impact (S2, S7), revenue (S5, S8), sensitivity grid (S7) and tornado (S8).
- **One moneyshot**: `CARD: MONEYSHOT` on S7 only (the sweep counts it: `moneyshot 1`).
- **Pre-empting weaknesses**: TELOS ambers (S6), "planned, none done" interviews (S6), "simulated data" on the worked
  example (S4), "a logistics estimate, not lives saved" (S7), "a vendor-price scan, not a signed price" (S5), stop rules (S6).
- **Third-party validation**: only named, verified sources (eVIN via UNDP, CAG audits, NITI Aayog). No quotes.
- **Double synthesis**: "CONCLUSIVELY" card on S4; "THEREFORE" card on S9.
- **Defensive depth**: S8 appendix (workings, assumptions, sensitivity, sources, short forms) plus the research document.

### §2.6 The skill's 8 sections, compressed to 9 slides

| Skill section | Slide |
|---|---|
| Front matter | S1 cover (title, theme, verdict card, team table, mind map with eight logos) |
| I Executive summary | S2 (paradox, obvious fixes, the idea in pyramid form, three reasons each side, payoff) |
| II Context + seed | S3 (shelf, waste, root cause) and the S1 seed line |
| III Actors, symmetric | S1 mind map (eight public bodies); S4 capability grid (six systems); S5 buying centre |
| IV Quantitative analysis + moneyshot | S5 sizing and unit economics; S7 model, scenarios, sensitivity, moneyshot |
| V Feasibility | S6 (TELOS, resources, law, Gantt, timeline, risks, stop rules, validation) |
| VI Recommended alternative | S4 (loop, rules, outcomes, worked example, before and after, ERRC) |
| VII Conclusion | S4 "CONCLUSIVELY"; S9 "THEREFORE" |
| Appendix | S8 (A1 workings, A2 assumptions, A3 sensitivity, A4 sources and short forms) |

### §2.7 Slide architecture (what the judge sees; code in Q.4 to Q.12)

Grid for every core slide: ribbon y 40, section chip and counter y 118, headline y 188 (40 pt, two lines max), three bands
with EY rails at x 64 (40 px wide): band 1 y 310 h 240, band 2 y 562 h 232, band 3 y 806 h 226; panels from x 116 to 1856;
source line y 1046 (14 pt). Panel titles 22 pt Poppins Bold, rule at y 39, content from y 46.

| Slide | Headline (`make_values.py`) | Rails | Panels and forms (left to right, band by band) | Archetypes and frameworks (T3) |
|---|---|---|---|---|
| S1 Cover | none ("SWASTHYAGRID") | none | top band: event chip, NSUT and Space & Beyond logo slots, team chip, punch-hole wire; title; theme chip "THEME: SMART WORLD, BETTER FUTURE"; subtitle; dark verdict card (gold governing thought + white estimate and "prototype shown separately" line); TEAM IDEAFORGE; team table (2 rows); contact line; mind-map panel "ONE DISTRICT VIEW, EIGHT ACTORS IT CONNECTS": seed line, hub "DISTRICT VIEW / SwasthyaGrid", eight actor nodes each with a logo slot (State NHM, District officer, PHCs and CHCs, e-Aushadhi, eVIN precedent, ABDM registry, NITI Aayog, Rajasthan), SEE → PROPOSE → APPROVE strip, fine print | A cover; III actors (hub and spoke) |
| S2 Executive summary | `V.h2` | THE PARADOX / THE ANSWER / THE PAYOFF | `SHORT AND WASTED AT ONCE` (4 red numerals); `WHY THE OBVIOUS FIXES STALL` (4-row table + so-what); `FIVE SYSTEMS RECORD, NONE MOVES` (6 × 3 heat grid); `CARD: idea` (pyramid: governing thought + 3 pillars SEE / PROPOSE / APPROVE); `THREE REASONS EACH SIDE` (for/against table); `THE PRECEDENT: eVIN` (2 logo slots + 3 numerals); `THREE SCENARIOS, DAYS AVOIDED` (bar chart); `WHAT A DISTRICT PAYS, AND GETS BACK` (4 KPI tiles); `WHERE EACH ASK IS ANSWERED` (brief coverage table) | H executive summary (recommendation in headline, for/against, 3+ reasons each side); pyramid principle; feature-parity grid |
| S3 Problem | `V.h3` | THE SHELF / THE WASTE / ROOT CAUSE | `AVAILABILITY OF KEY MEDICINES, FOUR STUDIES, %` (horizontal bars + range note); `38,241 PHCs AND CHCs ARE THE SHELF` (facility pyramid); `WHERE A MISSING DRUG COSTS MOST` (tracer table + duration note); `CAG: EXPIRED IN STATE STORES, ₹ CR` (columns + callout); `PER DISTRICT, EVERY YEAR` (workings table + so-what); `WHO PAYS WHEN THE SHELF IS EMPTY` (donut 43.4% + table); `FIVE BRANCHES, AND WHAT A DISTRICT VIEW FIXES` (MECE issue tree with verdict chips); `FIVE WHYS ON ONE STOCK-OUT` (chain + root-cause note) | I two-chart workhorse; MECE issue tree; 5 whys; evidence triangulation |
| S4 Solution | `V.h4` | THE LOOP / HOW IT DECIDES / WHY IT IS NEW | `THE DAILY LOOP` (5-step flow with return loop); `THE RULES, IN AN OFFICER'S WORDS` (7-row table); `FOUR OUTCOMES FOR EVERY FLAG` (2 × 2); `ONE TRANSFER, WORKED THROUGH` (before/after columns + 5-step list, "simulated data"); `BEFORE AND AFTER, FOR THE DISTRICT OFFICER` (table); `FIVE PUBLIC SYSTEMS RECORD; NONE PROPOSES A MOVE` (6 × 5 capability heat grid); `ERRC: WHAT CHANGES FOR THE OFFICER` (2 × 2); `CARD: conclusively` (section closer + 3 guardrail chips) | T deep dive on alternative; L symmetric grid; V section closer; value-chain loop; Blue Ocean ERRC |
| S5 Market | `V.h5` | SIZE / BUYER / MONEY | `BOTTOM-UP: DISTRICTS × ₹12 L LICENCE` (bars + basis table); `THE ₹12 L LICENCE, BUILT UP, ₹ L` (waterfall + 3 notes); `TOP-DOWN CHECK: 0.25% OF A DISTRICT'S NHM SHARE` (NHM line chart + numerals); `WHO DECIDES: THE BUYING CENTRE` (5-role table); `STP: SEGMENT, TARGET, POSITION` (table + beachhead note); `WHY NOW: FOUR RAILS ALREADY EXIST` (4 tiles); `REVENUE PATH, ₹ CR, BASE` (stacked columns + bear/base/bull table); `UNIT ECONOMICS, ONE DISTRICT` (4 KPI tiles + LTV formula callout); `PRICE AGAINST INDIAN HEALTH SOFTWARE` (price band with marker) | market sizing (bottom-up TAM/SAM/SOM + top-down check); buying-centre map; STP; unit economics; price benchmarking; three scenarios |
| S6 Feasibility | `V.h6` | CAN IT RUN / THE PLAN / RISKS | `TELOS: THREE GREEN, TWO AMBER` (table + RAG chips); `RESOURCES REQUIRED: NO NEW HARDWARE` (6-row table); `WHY A STATE CAN SAY YES: THE LAW` (table + note); `SIX WEEKS FROM MoU TO A LIVE DISTRICT` (Gantt + gate diamond); `TWELVE MONTHS: 1 TO 12 DISTRICTS, THREE GATES` (timeline with quarterly diamonds); `SIX RISKS, EACH WITH A FIX` (3 × 3 heat map + mitigation list); `THREE STOP RULES, WRITTEN IN ADVANCE` (table + funding note); `VALIDATION: 40 INTERVIEWS PLANNED, NONE DONE` (bars by role) | U implementation plan; TELOS; Gantt with gates; risk heat map with 1:1 mitigations; stop rules; customer validation plan |
| S7 Impact | `V.h7` | THE NUMBER / HOW IT HAPPENS / FUTURE SCOPE | `CARD: MONEYSHOT` (1.36 crore at 72 pt + 3 mini KPIs); `THE MODEL, ONE LINE AT A TIME` (7-step table); `SENSITIVITY: EVERY CELL CLEARS 58.6 LAKH` (3 × 3 heat grid); `THEORY OF CHANGE` (5-stage flow); `THREE SCENARIOS AND WHAT EACH ASSUMES` (table + scale and limit lines); `PEOPLE, PLANET, PROFIT` (3 columns × 2 numerals); `FUTURE SCOPE: THREE HORIZONS` (3 cards + gate line); `BEYOND YEAR 3` (4 lines + SDG chips) | P moneyshot; M three scenarios; N sensitivity; theory of change; Three Horizons; triple bottom line; SDG mapping |
| S8 Appendix | `V.h8` | A1 MODEL / A2 ASSUMPTIONS / A4 SOURCES | `A1 MARKET AND UNIT ECONOMICS WORKINGS` (table); `A1 CUSTOMER PAYBACK FROM AUDITED EXPIRY` (bars + formula callout); `A1 REVENUE PATH, ₹ CR, THREE CASES` (table); `A2 THE ASSUMPTIONS THAT MOVE THE ANSWER` (7-row register); `A3 YEAR-3 ARR SENSITIVITY` (tornado); `A4 SOURCES THE DECK LEANS ON` (16 bibliography lines); `A4 SHORT FORMS USED ON THIS DECK` (14 pairs) | X appendix; defensive depth; formula callouts |
| S9 Thank you | none | none | "THANK YOU"; `CARD: therefore`; TEAM IDEAFORGE; team table; 4 logo slots (NSUT, Space & Beyond, DTU, GGSIPU); prototype line; contact; source line | VII conclusion synthesis |

Density bar: core slides should land at 230 to 420 nodes each (the SwiftKart R2 range 251 to 466). Do not add decoration to
reach a count; do not remove an exhibit.

---

## §3 SEQUENCE AND DISPATCH

### §3.1 Bootstrap (orchestrator, first actions, in order)

B0. Create folders (PowerShell): `New-Item -ItemType Directory -Force "<ROOT>\swasthyagrid-gcp\space-beyond\deck\slides","<ROOT>\swasthyagrid-gcp\space-beyond\deck\shots","<ROOT>\swasthyagrid-gcp\space-beyond\deck\logos","<ROOT>\swasthyagrid-gcp\space-beyond\deck\build","<ROOT>\swasthyagrid-gcp\space-beyond\model","<ROOT>\swasthyagrid-gcp\space-beyond\qa"`.

B1. Copy this plan byte for byte: `Copy-Item -LiteralPath "C:\Users\harsh\.claude\plans\working-folder-swasthyagrid-gcp-precious-emerson.md" -Destination "<ROOT>\swasthyagrid-gcp\space-beyond\PLAN.md"`. Executors read `SB\PLAN.md` from now on.

B2. Open `SB\PLAN.md`, find the block under `<!-- FILE: extract.py -->` (Q.1), create `SB\extract.py` with exactly that block's
content (Write tool), run `PY SB\extract.py`. Done when it prints `files 21` and lists the twenty-one paths (extract.py itself, 6 tooling files, 9 slide scripts,
`logo_probe.js`, `logo_rects.js`, `make_pdf.py`, `checks.py`, `qa/round2-qa.md`).

B3. Copy read-only tooling and the model (PowerShell, one line each):
```
Copy-Item "<ROOT>\dreamforge-case\deck\_x2.js","<ROOT>\dreamforge-case\deck\_x3.js","<ROOT>\dreamforge-case\deck\_v1.js","<ROOT>\dreamforge-case\deck\metrics.json","<ROOT>\dreamforge-case\deck\preview.py" "<ROOT>\swasthyagrid-gcp\space-beyond\deck\"
Copy-Item "<ROOT>\swasthyagrid-gcp\nexora\model\nexora_model.py","<ROOT>\swasthyagrid-gcp\nexora\model\model_output.txt" "<ROOT>\swasthyagrid-gcp\space-beyond\model\"
```
Do **not** copy SwiftKart's `_palette.js`, `_extras.js`, `_sweeps.js`, `setup.js`, `make_values.py`, `values_ext.py`,
`gen.py` or `slides\` (ours come from the extractor).

B4. Create `SB\build-log.md` (`# Build log, SwasthyaGrid Space & Beyond deck` + date) and `SB\DECISIONS.md`
(`date | step | decision | why`), and log decisions U4 and the ARV notation (§2.4).

B5. Run `PY SB\deck\gen.py pre`, then `PY SB\deck\gen.py mock`. Done when nine lines read `s01 OK` to `s09 OK` with
part lengths under 49,900. Then `PY SB\deck\gen.py copy`; done when it prints `copy issues 0`. Paste all output into the log.

`PY` = `"C:\Users\harsh\AppData\Local\Programs\Python\Python312\python.exe" -X utf8` (has `fitz`, `PIL`, `fontTools`).
Node is on PATH. PowerShell 5.1: chain with `;`, never `&&`.

### §3.2 Order and gates

| Order | Step | Who | Output | Gate |
|---|---|---|---|---|
| 1 | B0 to B5 | orchestrator | folders, tooling, mock OK ×9, copy 0 | G-B |
| 2 | P1 skill T1, T2; `derivation.md` skeleton | orchestrator | `SB\deck\derivation.md` | G-P1 |
| 3 | P2 offline previews | orchestrator | `SB\deck\shots\preview_0N.png` ×9, viewed | G-P2 |
| 4 | P3 Q&A file, skill T5 | orchestrator | `SB\qa\round2-qa.md` | |
| 5 | D1 Figma setup, D2 logo harvest | orchestrator | file, ids, fonts, logo PNGs | G-D1 |
| 6 | D3 build S2 first, compare with the prime inspo, then S1, S3 to S9 | orchestrator | 9 slides, V1 per slide, screenshots | G-D3 |
| 7 | D4 logos | orchestrator | slots filled | |
| 8 | D5 sweeps and V1 all | orchestrator | clean | |
| 9 | D6 critique (CR) and copy review (CW) in parallel; fixes | 2 sub-agents, then orchestrator | `critique.md`, `copy-review.md` | G-D6 |
| 10 | D7 derivation complete | orchestrator | `derivation.md` all `Y` | |
| 11 | D8 hi-res screenshots, PDF | orchestrator | `TeamIdeaForge_SpaceAndBeyond.pdf` | G-D |
| 12 | §6 final checks, §9 hand-off and memory | orchestrator | report | DONE |

### §3.3 Dispatch rules

Agent tool, `subagent_type: "general-purpose"`, `model: "sonnet"`. Only D6 uses sub-agents (two, in parallel, both
read-only on Figma). Every dispatch prompt starts with:
```
You are executor <CR | CW> for the SwasthyaGrid Space & Beyond deck build. Working folder:
C:\Users\harsh\Desktop\HARSH\PPTS-CASE-STUDY\nsut-innovators-court\swasthyagrid-gcp\space-beyond
Read space-beyond\PLAN.md sections §0, §1, §2 and <§5.8 and §5.9 for CR | §0.4, §0.6 and §5.9 for CW> in full before acting.
Do not call any Figma tool that writes. Do not edit any slide file. Write only <deck\critique.md | deck\copy-review.md>.
Report in at most 12 lines, ending with STATUS: PASS | PASS WITH RESIDUALS | FAIL.
```
CR additionally: "Invoke the case-competition-deck skill in critique mode (touchpoint T4), read references/critique_rubric.md,
case_types/social_impact.md and case_types/strategy.md, then Read deck\shots\s01.png to s09.png and deck\slide-copy.md.
Score dimensions 1 to 7 (1 to 5 each) and the pass/fail items in PLAN §5.8. List at most five issues, each with the exact
string or panel to change and the §5.9 rule that fixes it. No issue may change a number, the recommendation, the slide
count or the team. Log SKILL T4 in build-log.md."
CW additionally: "Read deck\slide-copy.md line by line. Flag only: AI-sounding phrasing, hooks, invented names (capitalised
multi-word phrases not in research or this plan's allow-list §6.3), wrong notation (Rs, missing ₹, non-Indian grouping), a
claim of deployment or measurement, and anything contradicting the research numbers in PLAN §2.4. For each flag give
old → new, same length or shorter."

---

## §4 PHASE P: PREPARATION (no new research)

### §4.1 Step P1: skill touchpoints T1 and T2, derivation skeleton

1. Invoke the skill (T1); read the files listed in §0.5. Confirm §2.1 and §2.3 hold; write `SB\deck\derivation.md` with
   H2s: `## Case type and calibration` (the §0.5 note), `## Obvious answers` (§2.2), `## Recommendation` (§2.3),
   `## Moneyshot` (§2.1), `## Section map` (§2.6), `## Rhetoric` (§2.5). Log `SKILL T1`.
2. Invoke T2; read `structure.md` and `rhetoric.md`; confirm the map; log `SKILL T2`.
3. Append `## Number derivation`: one table per slide `| Panel | Text or number | Research § | Tag | Matches (Y/N) |`, filled
   from §2.4 (every number in `slide-copy.md` must appear). At P1 the `Matches` column is filled by reading the research
   section named; any `N` is a stop-and-report (it would mean this plan mistyped a number).

### §4.2 Step P2: offline previews (look before building)

Run `PY SB\deck\preview.py 1 2 3 4 5 6 7 8 9`. It writes `SB\deck\shots\preview_01.png` to `preview_09.png` from the mock's
node tree with real glyph widths. Read each PNG. Check the K-card (§5.8, items 1, 2, 6 to 10). Known preview limits: donuts
draw as full discs, rotated rail text may sit a few px off, logo slots are dashed boxes. Log two lines per slide.

### §4.3 Step P3: Round 2 Q&A brief (skill T5)

Extract already wrote `SB\qa\round2-qa.md` (Q.14). Invoke the skill (T5), read `rhetoric.md`, and confirm that the file
answers every judge angle the brief names (idea, prototype, implementation, feasibility, future scope); log `SKILL T5`.
Do not add facts; every answer cites a research section.

---

## §5 PHASE D: THE FIGMA SLIDES DECK

### §5.0 Doctrine

`ROOT\CLAUDE.md` §1 to §7 apply (zero dead space, bands and rails, 4 to 5 type levels, charts paired with tables, in-chart
annotations, sources bottom right, cornerRadius 0, ink outlines, layered sticker cards, Poppins and Inter), with decision U4
replacing the 22 pt floor for secondary text. The slide scripts already implement this and pass the offline mock; the work
is to build them, verify them in Figma, fill logos and check them against the research.

### §5.1 Visual models (D1: screenshot each, read-only, `get_screenshot` maxDimension 1600, Read before building)

| File | Slides | Take |
|---|---|---|
| Prime inspo `hOJVMGv9nIhDmayTT7DmOt` | `5:4` (executive summary), `5:7` (valuation) | ribbon with one filled active tag, section chip, two-line action headline, outlined panels with uppercase coloured titles and a rule, heat-celled tables, dashed in-chart lines, source line bottom right |
| SwiftKart `7N3v6bAfmXYRrte0zChFDg` | `2:2` cover, `2:5` (densest core slide) | cover layout (title left, team table, mind map right); three bands with rails, nine panels, 18 pt secondary text |
| NEXORA `O0YlsAbRsIqQqSugUDWrxJ` | `2:2` | the SwasthyaGrid green and gold identity and the eight real logos our cover reuses |
| Dream11 `YoiazGGOribfg69EjEDIlP`, Toing `JLOOyohkQPUrwXEsxDKz4m`, PRAMAAN `vAIyXmljHlFDuwQo6RsoIN`, startup pitch `e5VEexsLMhDampx7gvhFmM` | `2:2` each | cover and density references |

Never copy the Satoshi Gate cover (plain "case in numbers" text card).

### §5.2 Tooling (what B3 and the extractor set up)

`SB\deck\gen.py` (Q.2) reads `ROOT\verdict-mnc\deck\preamble.js` and `mock_figma.js` read-only by path, swaps in our palette
(`_palette.js`), appends our helpers (`_extras.js`) to the preamble, appends `_x2.js` (rails) and `_x3.js` (18 pt helpers)
for every slide, builds `values.js` from `make_values.py` and the model output, and splits a slide at
`// ===== PART 2 =====` into two Figma calls when needed. `gen.py copy` writes `slide-copy.md` and checks it.

### §5.3 Palette (SwasthyaGrid green and gold, unchanged from NEXORA)

`primary` #1B7F3B green (panel titles, numerals); `primaryDeep` #0E4D25 (active ribbon tag, dark cards, hub, chips);
`accent` #FFC72C gold (back cards, inactive tags, gold headlines on dark); `alert` #E03A1E red (problem numerals, ambers'
opposite, risks); `tint` #D5EFDC (table heads); `accentTint` #FFF4D1; `alertTint` #FCE4DE. Heat scale `HG` light to deep
green. Text on `primaryDeep` is white or gold.

### §5.4 Content lock (already done at planning time; re-verify in B5)

All strings are in Part VI. `make_values.py` asserts headline length ≤ 150, source line ≤ 230 and every model line in
`LOCK`. If any assert fails, the model or a block changed: stop (§7).

### §5.5 Figma setup (D1)

1. `ToolSearch` with `select:mcp__figma-mcp__whoami,mcp__figma-mcp__create_new_file,mcp__figma-mcp__use_figma,mcp__figma-mcp__get_screenshot,mcp__figma-mcp__upload_assets,ReadMcpResourceTool`.
2. Load figma-use guidance: Skill `figma-use` if listed, else `ReadMcpResourceTool` (server `figma-mcp`, uri
   `skill://figma/figma-use/SKILL.md`); if neither exists, log it as a residual and proceed (the helper library already
   encodes the gotchas). Pass `skillNames: "resource:figma-use"` on every `use_figma` call. This deck positions nodes
   absolutely through the helper library, which deliberately overrides the skill's auto-layout advice.
3. `whoami`; use plan key `team::1564294484048272772` ("25/A16/057 HARSH KAWATRA's team"). If it is absent, ask the user.
4. `create_new_file`, `editorType: "slides"`, name `SwasthyaGrid | Team IdeaForge | Space & Beyond 2026`.
5. `use_figma` with the full text of `SB\deck\setup.js`. Done when it returns `count: 9` (or more, with `extra` listing
   empty slides: delete those by id with `(await figma.getNodeByIdAsync("<id>")).remove()`), nine ids, `fontsOk` all true.
   Write `SB\deck\slide-ids.json` as `{"S1":"<id>",...,"S9":"<id>"}` and `SB\deck\figma.md` (file key, URL, ids, fonts).
6. Screenshot the §5.1 visual models (read-only), save to `SB\deck\shots\inspo_*.png`, Read them.
7. `PY SB\deck\gen.py bind`. Done when `build\slide_01.js` (or `_1`/`_2` parts) to `slide_09*.js`, `v1_0N.js`, `v1_all.js`,
   `sweeps.js` and `slots.js` exist, each under 50,000 characters.

### §5.6 Logo harvest (D2, before D3 so the logos are ready)

1. **From the NEXORA file (read-only).** `use_figma` on `O0YlsAbRsIqQqSugUDWrxJ` with the full text of
   `SB\deck\logo_probe.js` (Q.13). It returns each image node on the NEXORA cover with the text of its parent node (for
   example `["23:20", "State NHM buys the licence"]`). Map by keyword: "NHM" → National Health Mission; "District officer"
   → District officer; "PHCs" → Ayushman Bharat; "e-Aushadhi" → e-Aushadhi; "eVIN" → eVIN; "ABDM" → ABDM; "NITI" → NITI
   Aayog; "Rajasthan" → Government of Rajasthan. For each, `get_screenshot` (fileKey `O0YlsAbRsIqQqSugUDWrxJ`, that
   nodeId, `contentsOnly: true`, maxDimension 600), download with `curl -L -o SB\deck\logos\<slug>.png "<url>"`, Read the
   PNG to confirm it shows that body's mark. Record `{brand, file, source: "NEXORA Figma O0Yl… node <id>", w, h}` in
   `SB\deck\logos\manifest.json`.
2. **On disk.** UNDP `NX\deck\logos\undp.png`; C-DAC `NX\deck\logos\cdac.png` (not slotted; keep for a fallback);
   DTU `ROOT\beyondtech-dcg\deck\assets\logos\dtu.png`. Copy into `SB\deck\logos\`.
3. **Wikimedia Commons** for NSUT and GGSIPU: query
   `https://commons.wikimedia.org/w/api.php?action=query&list=search&srnamespace=6&srlimit=10&format=json&srsearch=<name>%20logo`
   with a descriptive `User-Agent` header (names: `Netaji Subhas University of Technology`, `Guru Gobind Singh Indraprastha University`);
   take a `File:` title that names the institution and "logo"; download via
   `https://commons.wikimedia.org/wiki/Special:FilePath/<file>?width=600`; Read it to confirm. SVG → PNG via PIL is not
   possible; use the `?width=600` PNG render. Save the downloaded file in its own folder `SB\deck\logos\` and never run
   anything downloaded.
4. **Space & Beyond** has no public mark: leave its slot as a labelled placeholder and list it in §8 (ask the user for the
   organiser's logo).

### §5.7 Build procedure (D3 to D8)

| Step | What | Done when |
|---|---|---|
| D3 | For N = 2, then 1, 3, 4, 5, 6, 7, 8, 9: invoke the skill in slide mode (T3) for that slide and log the archetype elements; `use_figma` with the exact contents of `build\slide_0N.js` (or `_1` then `_2`); check the return has `warnings: []`; `use_figma` with `build\v1_0N.js`; `get_screenshot` (maxDimension 1600) → `curl` to `SB\deck\shots\s0N.png`; Read it; check the K-card (§5.8); fix by §5.9 (edit `slides\s0N.js`, `gen.py mock N`, `gen.py bind N`, rebuild that slide's parts, at most three rounds). **After S2, compare it with `inspo_prime_5_4.png` on four points (findings as panel titles, ink outlines, layered back cards, no empty region over 150 × 150) and log PASS/FAIL per point before building the rest** | every slide V1 `clean: true`; every screenshot described in two lines in `figma.md` |
| D4 | Logos (§5.10) | every slot filled at the right aspect or listed in §8 |
| D5 | `use_figma` with `build\sweeps.js`, then `build\v1_all.js` | `radiusFixed` 0 on a second run, `moneyshot` 1, `fontLow []`, `copy []`, `missing []`, `presentBad []`, V1 clean |
| D6 | Dispatch CR and CW in parallel (§3.3) with the nine `shots\s0N.png`, `slide-copy.md`; apply fixes that fall under §5.9; rebuild touched slides; re-run D5 | `critique.md` ≥ 40/45 equivalent; `copy-review.md` flags resolved or logged |
| D7 | Complete `derivation.md` against `slide-copy.md` (re-run `gen.py copy` after any fix) | every number row `Matches Y` |
| D8 | `get_screenshot` maxDimension 3840 of each slide → `SB\deck\shots\hi_s0N.png`; run `PY SB\deck\make_pdf.py` (Q.13) | `TeamIdeaForge_SpaceAndBeyond.pdf` has 9 pages; Read pages 1, 2, 7 and 9 |

Every slide script starts by clearing its slide (`wipe` via `skelBT`, or directly on S1 and S9), so rerunning part 1 of a
slide is always safe; part 2 never wipes, so after any rerun of part 1 always rerun part 2.

### §5.8 K-card: what to check on every screenshot

1. No empty region inside the content zone larger than about 120 × 120 px.
2. Every text sits inside its panel or card; nothing touches a border; no text below 18 pt except the source line (14),
   fine print and bibliography (16) and logo captions (14).
3. Ribbon: six tags evenly spaced, wires connect punch holes, the correct tag is active (S2 SUMMARY ... S7 IMPACT); S8 uses
   the A1 to A4 ribbon with no active tag; S1 and S9 have no ribbon.
4. Rails: labels read bottom to top, centred in their bars (if not, set `RAILROT=false` in `_x2.js` per its comment, rebuild).
5. S7: "1.36 crore" is the largest numeral on any slide and sits in gold on the dark card.
6. S2: the obvious-fix table has a red strip on each row; the systems grid's SwasthyaGrid row is dark green with gold "Yes".
7. S3: the CAG columns are red; the issue tree's elbow wires reach all five branches; the five-whys boxes are joined by arrows.
8. S4: the APPROVE box is gold; the dashed return line runs under the five boxes; the worked example says "simulated data".
9. S6: TELOS shows three green and two amber chips; the gate diamond sits at the end of the shadow-mode bar; the risk grid's
   reddest cell is top right (high probability, high impact) and holds no risk.
10. S1: eight spokes reach eight nodes; every node has a logo slot; the hub sits centred over the spokes.
11. S8: 16 bibliography lines in two columns, none clipped.
12. S3 donut: one red arc of 43.4% starting at 12 o'clock. If it renders as a full disc, set `ARCS=false` in `_extras.js`
    and rebuild S3 (documented fallback: stacked rectangles).

### §5.9 Fix rules (one rule per issue type)

| Issue | Fix (in `slides\s0N.js` or `make_values.py`, then mock, bind, rebuild that slide) |
|---|---|
| `overlap` between two named panels | move the lower panel down by the overlap + 12, or reduce the upper panel's height |
| `bounds`, `belowContent` | shrink width or height; never below 24 px per 18 pt table row |
| `headline3lines` | shorten the headline in `make_values.py`: drop an adjective, turn an "and" clause into a comma clause; keep every number |
| `source2lines` | shorten publisher names in `SRC` |
| `textOut`, `cellWrap`, overflow warning | shortening ladder: drop articles; shorter synonym; an abbreviation defined on S8; drop the least important clause; widen the column by taking width from the widest other column. Never below 18 pt, never drop a number |
| `textCollision` | move the later text by the overlap + 6 px inside its panel |
| A node 240 px off | a line set x or y before `appendChild`; never add 240; use the helpers |
| `Cannot use unloaded font` | a fragment was run; always run the full `build\slide_0N*.js` |
| Font sweep hit | raise to 18 pt and name it `SEC` (use `sT`/`sTL`); if it then overflows, shorten |
| Copy hit (dash, `?`, `!`, banned word, absent word) | rewrite the string |
| `ribbon too wide` | the helper drops to 22 pt; if still too wide, shorten "FEASIBILITY" to "FEASIBLE" in `_extras.js` `RIBN` and log |
| Dead space larger than about 200 × 200 | report it; do not add decoration |

Known false positives: ribbon punch holes over their tags, `BACK:` rectangles under their cards, logo-slot captions at
14 pt, `BIBLIO` lines at 16 pt, `FINEPRINT` at 16 pt.

### §5.10 Logos (D4)

1. `use_figma` with `build\slots.js`; save the returned list (`slide, id, name, w, h`) to `SB\deck\slots.json`.
2. Slots and files: S1 `LOGO: National Health Mission`, `LOGO: District officer`, `LOGO: Ayushman Bharat`,
   `LOGO: e-Aushadhi`, `LOGO: eVIN`, `LOGO: ABDM`, `LOGO: NITI Aayog`, `LOGO: Government of Rajasthan` (from §5.6 step 1),
   `LOGO: NSUT`, `LOGO: Space and Beyond`; S2 `LOGO: eVIN`, `LOGO: UNDP`; S9 `LOGO: NSUT`, `LOGO: Space and Beyond`,
   `LOGO: DTU`, `LOGO: GGSIPU`.
3. For each slot with a file: `use_figma` with `SB\deck\logo_rects.js` (Q.13) after replacing `MAP` with
   `{"<slot id>": [<png w>, <png h>], ...}` for up to 8 slots per call. It creates inside each slot a child rectangle named
   `IMG` fitted to the PNG's aspect within the slot minus 6 px, centred, removes the caption text and the dash pattern, and
   returns the new rectangle ids. Then for each rectangle: `upload_assets` (`count: 1`, `nodeId` = that rectangle id,
   `scaleMode: "FIT"`) and POST the PNG bytes to the returned URL
   (`curl -X POST -H "Content-Type: image/png" --data-binary "@<file>" "<url>"`). Never resize a slot (`CLAUDE.md` §7.4, §7.5).
4. Re-run `build\sweeps.js` (caption removal changes text content) and screenshot S1, S2 and S9 again.

### §5.11 Rate limits and recovery

On HTTP 429 or a timeout: wait 60 s, read the slide's child count with a read-only `use_figma`
(`return (await figma.getNodeByIdAsync("<id>")).children.length`), then rerun that slide's part 1 and part 2. Never run two
Figma calls at once. Never create a second file; `setup.js` is idempotent.

---

## §6 VERIFICATION

### §6.1 Gate table

| Gate | Check | Command or method |
|---|---|---|
| G-B | 21 files; mock OK ×9; copy 0 | `extract.py`; `gen.py mock`; `gen.py copy` |
| G-P1 | derivation skeleton; SKILL T1, T2 | Read; grep build-log |
| G-P2 | nine previews viewed | build-log lines |
| G-D1 | file, ids, fonts, logos harvested | `figma.md`, `logos\manifest.json` |
| G-D3 | V1 clean ×9; screenshots viewed; S2 inspo comparison logged | build-log |
| G-D6 | sweeps clean; critique ≥ 40/45; copy review resolved | `critique.md`, `copy-review.md` |
| G-D | PDF 9 pages; derivation all `Y` | Read PDF |

### §6.2 Cross-checks (run before G-D)

1. `PY SB\deck\gen.py copy` → `copy issues 0`.
2. Every number in `slide-copy.md` appears in §2.4 (the derivation table proves it).
3. The deck never says "deployed", "live in", "used by", "customers", "partners" or "pilots running" (the sweep's
   `presentBad` and `gen.py copy` both check).

### §6.3 Invented-name sweep

List every capitalised multi-word phrase in `slide-copy.md` (`re.findall(r"\b(?:[A-Z][a-z]+\s){1,3}[A-Z][a-z]+\b", text)`)
not in the research or this allow-list: {Team IdeaForge, Delhi Technological University, Guru Gobind Singh Indraprastha
University, Space & Beyond, Smart World, Better Future, National Health Mission, Ayushman Bharat, Government of Rajasthan,
District Collector, Mission Director, State List, Seventh Schedule, Health Dynamics, National Health Accounts, Medical
Dialogues, Delta Ranking, Aspirational Blocks, Atal Innovation Mission, Theory of Change}. Remove any coined label.

### §6.4 Final check by the orchestrator (before reporting)

1. Read all nine pages of the PDF.
2. Re-run `build\sweeps.js` and `build\v1_all.js` on the live file.
3. Confirm build-log has SKILL T1 to T5 and T3 for all nine slides.
4. Confirm the logo fine print is on S1 and S2 (and S9 if third-party logos were placed there).

---

## §7 RISKS AND RECOVERY

| Symptom | Action |
|---|---|
| `extract.py` prints fewer than 21 files | `PLAN.md` is not a byte copy; redo B1 |
| `gen.py pre` assertion `model output changed` | `SB\model\model_output.txt` differs from NX; re-copy it from `NX\model\` (never re-run or edit the model) |
| `gen.py pre` fails on a missing preamble function | `ROOT\verdict-mnc\deck\preamble.js` changed since 16 Oct; report the failing name |
| Mock FAIL on first run | a block was retyped or `_x3.js`/`metrics.json` changed in `DF\deck\`; re-copy (B3) and re-extract (B2); if it still fails, fix by §5.9 and log |
| Figma not authorised | stop; tell the user to authorise the Figma connector |
| A logo cannot be harvested or found | leave the labelled dashed slot; list it in §8 |
| Running out of time before 17 Oct | priority order: S2, S3, S4, S7, S1, S6, S5, S9, S8; export what is built; list the rest |
| Plan overwritten by a later session | B1 copied it to `SB\PLAN.md` |

---

## §8 OPEN ITEMS FOR THE USER (list in every hand-off until resolved)

1. **Space & Beyond organiser logo** (and the exact event wordmark) for the cover and thank-you slots.
2. **Submission format**: the brief allows PPTX or PDF "as specified by the organisers"; default is the PDF from §5.7 D8.
   If PPTX is required, export from Figma Slides (File, Export, PowerPoint) and check fonts.
3. **Theme**: the cover says "Smart World, Better Future"; change in `slides\s01.js` if the team registered another theme.
4. **Round 2 prototype**: the deck says the prototype is shown separately; confirm the walkthrough link if the team wants a
   clickable line on S9 (add it in Figma by hand only after the user gives the link).
5. **Team details**: confirm Gursimran Kaur's institution line ("Guru Gobind Singh Indraprastha University") and roles.

---

## §9 HAND-OFF AND MEMORY

- Final message to the user: the Figma URL from `figma.md`; the PDF path; the nine-slide map; gate results; critique
  score; logos placed and still open; open items (§8). Plain language, no hooks.
- Memory (after G-D): create `project_swasthyagrid_space_beyond.md` in
  `C:\Users\harsh\.claude\projects\c--Users-harsh-Desktop-HARSH-PPTS-CASE-STUDY-nsut-innovators-court\memory\` with
  frontmatter (`name: project-swasthyagrid-space-beyond`, one-line description, `metadata: type: project`): folder
  `swasthyagrid-gcp\space-beyond\`; Space & Beyond Innovation Ideathon 2026 at NSUT, Round 2 on 17 Oct 2026; team Harsh
  Kawatra and Gursimran Kaur; 9 slides; idea framing with no screenshots; research unchanged from NEXORA; the Figma key;
  `SB\PLAN.md` is the surviving copy of this plan; logos reused from the NEXORA file. Link `[[project-swasthyagrid-gcp]]`.
  Add one line to `MEMORY.md`: `- [SwasthyaGrid Space & Beyond](project_swasthyagrid_space_beyond.md) — NSUT ideathon,
  9-slide Figma idea deck, Figma key <key>`.
- No git commit unless the user asks; never add a co-author trailer.

---

# PART VI. EMBEDDED FILES (source of truth; extract with Q.1, never retype)

Every block marked `<!-- FILE: path -->` is extracted byte for byte by `extract.py` into `SB\<path>`. Q.0 is a
planning-time harness, never extracted; an executor may run it only as a diagnostic (it reads this plan at its `.claude`
path and the tooling on disk, and writes nothing).

## Q.0 Planning-time harness (never extracted)

<!-- HARNESS: planning-time only, never extracted -->
```python
import io, re, json, sys, types, pathlib, importlib.util
ROOT = pathlib.Path(r"C:\Users\harsh\Desktop\HARSH\PPTS-CASE-STUDY\nsut-innovators-court")
PLAN = sys.argv[1] if len(sys.argv) > 1 and sys.argv[1].endswith(".md") else r"C:\Users\harsh\.claude\plans\working-folder-swasthyagrid-gcp-precious-emerson.md"
args = [a for a in sys.argv[1:] if not a.endswith(".md")]
t = io.open(PLAN, encoding="utf-8").read()
B = dict(re.findall(r"<!-- FILE: ([^\n]+?) -->\n```[a-z]*\n(.*?)\n```\n", t, re.S))
print("files", len(B))
DF = ROOT / "dreamforge-case" / "deck"
MEM = {r: io.open(DF / r, encoding="utf-8").read().replace("\r", "") for r in ("_x2.js", "_x3.js", "_v1.js", "metrics.json")}
for k, v in B.items():
    if k.startswith("deck/"): MEM[k[5:]] = v
MEM["@model"] = io.open(ROOT / "swasthyagrid-gcp" / "nexora" / "model" / "model_output.txt", encoding="utf-8").read().replace("\r", "")
SBD = ROOT / "swasthyagrid-gcp" / "space-beyond" / "deck"
gg = {"__name__": "gen", "__file__": str(SBD / "gen.py")}; exec(compile(MEM["gen.py"], "gen", "exec"), gg); gg["MEM"] = MEM
gg["pre"](); V = gg["vals"]()
print("headlines", {k: len(V[k]) for k in V if re.match(r"h\d$", k)}, "src", [len(s) for s in V["src"]])
only = set(int(a) for a in args if a.isdigit()) or None
ok = gg["mock"](only)
if "copy" in args: ok = gg["copy"]() and ok
if "preview" in args:
    out = args[args.index("preview") + 1] if len(args) > args.index("preview") + 1 and not args[args.index("preview") + 1].isdigit() else str(pathlib.Path.cwd())
    spec = importlib.util.spec_from_file_location("pv", DF / "preview.py"); pv = importlib.util.module_from_spec(spec); spec.loader.exec_module(pv)
    g = types.SimpleNamespace(rd=gg["rd"], derive=gg["derive"], compose=gg["compose"]); pv.render(g, sorted(only or range(1, 10)), out)
print("ALL OK" if ok else "SOME FAIL")
```

## Q.1 Extractor

<!-- FILE: extract.py -->
```python
"""Extract every <!-- FILE: path --> block of SB/PLAN.md into SB/<path>. Run: PY swasthyagrid-gcp/space-beyond/extract.py"""
import io, re, pathlib
SB = pathlib.Path(__file__).resolve().parent
t = io.open(SB / "PLAN.md", encoding="utf-8").read()
B = re.findall(r"<!-- FILE: ([^\n]+?) -->\n```[a-z]*\n(.*?)\n```\n", t, re.S)
for name, body in B:
    p = SB / name; p.parent.mkdir(parents=True, exist_ok=True)
    io.open(p, "w", encoding="utf-8", newline="\n").write(body + "\n"); print("wrote", name, len(body))
print("files", len(B))
```

## Q.2 Generator and tooling

<!-- FILE: deck/gen.py -->
```python
# ===== SWASTHYAGRID SPACE & BEYOND DECK GEN v1 (from the SwiftKart gen v1 + R2) =====
"""Deck generator. PY is "C:\\Users\\harsh\\AppData\\Local\\Programs\\Python\\Python312\\python.exe" -X utf8.
  PY deck/gen.py pre          build preamble.js, mock_figma.js and values.js
  PY deck/gen.py mock 2 3     dry-run the listed slides on the offline mock (no list = all 9); exit 1 on any issue
  PY deck/gen.py bind 2 3     write build/slide_NN.js (or _1, _2 parts) and build/v1_NN.js; always rewrite v1_all.js,
                              sweeps.js and slots.js
  PY deck/gen.py copy         write deck/slide-copy.md (every text node on every slide, from the mock) and check it"""
import io, json, re, subprocess, sys, pathlib
DECK = pathlib.Path(__file__).resolve().parent; BT = DECK.parent; ROOT = BT.parent.parent; N = "\n"; NS = 9
LIB = ROOT / "verdict-mnc" / "deck" / "preamble.js"; MOCKSRC = ROOT / "verdict-mnc" / "deck" / "mock_figma.js"
X2 = tuple(range(1, NS + 1)); X3 = tuple(range(1, NS + 1))
ROT = ('Object.defineProperty(Node.prototype, "relativeTransform", { set(m) { this._rt = m; '
       'if (this.type === "TEXT" && Math.abs(m[0][0]) < 1e-6) { const w = this.width, h = this.height; this.x = m[0][2]; this.y = m[1][2] - w; this.width = h; this.height = w; } }, '
       'get() { return this._rt; } });')
BANW = ["here's", "let's", "bottom line", "delve", "game-changer", "game changer", "unlock", "it's not just", "make no mistake", "landscape",
        "robust", "seamless", "holistic", "tapestry", "paradigm", "navigate", "revolutioni", "cutting-edge", "leverage", "empower",
        "transformative", "journey", "synergy", "world-class", "best-in-class", "next-gen", "reimagine", "supercharge", "harness",
        "crucial", "pivotal", "furthermore", "moreover", "in today's", "ever-evolving", "imagine", "ecosystem", "testament", "elevate",
        "what if", "picture this", "dive into", "groundbreaking", "state-of-the-art", "plethora", "myriad", "underscore", "showcase",
        "foster", "bolster", "spearhead", "nuanced", "intricate", "meticulous", "realm", "fast-paced", "in conclusion",
        "it is important to note"]
ABSENT = ["Dayita", "Anuj", "Aakriti", "Ranvir", "Gemini", "Vertex", "BigQuery", "Google", "Sarvam", "₹960", "960 Cr", "480 Cr",
          "deployed", "live in ", "used by", "customers", "pilots running", "TODO", "TBD", "Lorem", "xyz", "undefined", "NaN", "Rs ", "Rs."]
MEM = None  # the planning-time harness sets this to a dict so that nothing touches the disk
def rdx(p): return io.open(p, encoding="utf-8").read().replace("\r", "")
def has(rel): return (MEM is not None and rel in MEM) or (DECK / rel).exists()
def rd(rel): return MEM[rel] if (MEM is not None and rel in MEM) else rdx(DECK / rel)
def wr(rel, t, quiet=False):
    if MEM is not None: MEM[rel] = t
    else:
        p = DECK / rel; p.parent.mkdir(parents=True, exist_ok=True); io.open(p, "w", encoding="utf-8", newline=N).write(t)
    if not quiet: print("wrote", rel, len(t))
def model_text(): return MEM["@model"] if (MEM is not None and "@model" in MEM) else rdx(BT / "model" / "model_output.txt")
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
    for f in ("const C = {", "const HG=[", "function skeleton2(", "function lineChart(", "function grid(", "function gantt(", "function tornado(", "function logoSlot(", "function layered(",
              "function panel(", "function vBars(", "function hBars(", "function wrapTable(", "function waterfall(", "function teamTableN(", "function segBar(", "function rt(", "function wipe(", "function srcLine("):
        assert t.count(f) == 1, f
    pal = rd("_palette.js").strip(); k = pal.index("const HG=["); a = t.index("const C = {"); b = t.index("};", a) + 2; h0 = t.index("const HG=["); h1 = t.index("];", h0) + 2
    wr("preamble.js", t[:a] + pal[:k].strip() + t[b:h0] + pal[k:] + t[h1:] + N + rd("_extras.js"))
    m, c1 = re.subn(r"const \[pre, vals, slide, num\] = process\.argv\.slice\(2\);\nconst code = [^\n]*\n", "const code = CODE_JSON;\n", rdx(MOCKSRC))
    c2 = m.count("/LOGO:/.test("); m = m.replace("/LOGO:/.test(", "/LOGO:|IMG:/.test(")
    adv = rd("metrics.json").strip(); assert set(json.loads(adv)) == {"Poppins|Bold", "Poppins|ExtraBold", "Inter|Semi Bold", "Inter|Bold"}
    c3 = m.count("function cw(ch, fam) {"); c4 = m.count("let warnings_global = [];")
    m = m.replace("function cw(ch, fam) {", "const ADV = " + adv + ";\nfunction cw(ch, fam) { const a = EXACT_FLAG ? ADV[fam] : null; if (a && a[ch] !== undefined) return a[ch] * 1.02;")
    m = m.replace("let warnings_global = [];", ROT + "\nlet warnings_global = [];")
    assert c1 == 1 and c2 == 1 and c3 == 1 and c4 == 1 and "for (let i = 1; i <= 11; i++)" in m, (c1, c2, c3, c4); m = r2mock(m); wr("mock_figma.js", m)
    g = {"__name__": "make_values"}; exec(compile(rd("make_values.py"), "make_values.py", "exec"), g)
    V = g["build"](model_text())
    wr("values.js", "const V = " + json.dumps(V, ensure_ascii=False) + ";")
def derive(only=None):
    """Apply deck/overrides.json ({"exact old string": "new string"}) to the slide files and write deck/derived/sNN.js."""
    ov = json.loads(rd("overrides.json")) if has("overrides.json") else {}; used = set()
    for n in range(1, NS + 1):
        s = rd("slides/s%02d.js" % n)
        for a, b in ov.items():
            if a in s: s = s.replace(a, b); used.add(a)
        wr("derived/s%02d.js" % n, s, True)
    miss = [a for a in ov if a not in used]; assert not miss, "an override key matches no slide text"
def compose(n, sid, part=None):
    p = rd("preamble.js") + ((N + rd("_x2.js")) if n in X2 else "") + ((N + rd("_x3.js")) if n in X3 else ""); s = rd("derived/s%02d.js" % n); old = 'getNodeByIdAsync("S%d")' % n; assert s.count(old) >= 1, n
    if part is not None: s = s.split(SPLIT)[part]
    V = vals(); keys = set(re.findall(r"\bV\.([A-Za-z_][A-Za-z0-9_]*)", p + s)); miss = keys - set(V); assert not miss, ("unknown V keys", n, miss)
    sub = "const V = " + json.dumps({k: V[k] for k in V if k in keys}, ensure_ascii=False) + ";"
    return p + N + sub + N + "const results=[];" + N + s.replace(old, 'getNodeByIdAsync("%s")' % sid) + N + "return {results,warnings};" + N
SPLIT = "// ===== PART 2 ====="
def parts(n, sid):
    s = rd("derived/s%02d.js" % n)
    return [compose(n, sid, i) for i in range(2)] if SPLIT in s else [compose(n, sid)]
# Planning-time lesson: a note() frame grows to fit its text, so a wrapped note can spill out of its panel while every text
# still sits inside its own frame. CHK flags any node (not rotated) that leaves its parent frame by more than 1 px.
CHK = ("const __S=await figma.getNodeByIdAsync('S%d'); for(const q of __S.findAll(()=>true)){ const p=q.parent; if(!p||p.type==='SLIDE'||q._rt) continue; "
       "if(q.x<-1||q.y<-1||q.x+q.width>p.width+1||q.y+q.height>p.height+1) warnings.push('childOut: '+String(q.name||q.type).slice(0,30)+' in '+String(p.name||'').slice(0,40)+' at '+Math.round(q.x)+','+Math.round(q.y)+' size '+Math.round(q.width)+'x'+Math.round(q.height)+' parent '+Math.round(p.width)+'x'+Math.round(p.height)); }")
def mock(only=None):
    derive(only); ok = True; m = rd("mock_figma.js")
    for n in range(1, NS + 1):
        if only and n not in only: continue
        code = compose(n, "S%d" % n).replace("return {results,warnings};", (CHK % n) + N + "return {results,warnings};")
        r = subprocess.run(["node", "-"], input=m.replace("EXACT_FLAG", "true" if n in X2 else "false").replace("CODE_JSON", json.dumps(code)), capture_output=True, text=True, encoding="utf-8")
        out = r.stdout + r.stderr; lens = [len(c) for c in parts(n, "S%d" % n)]; good = "warnings: []" in out and "ISSUES 0" in out and max(lens) < 49900; ok = ok and good
        print("s%02d" % n, "OK" if good else "FAIL", lens, "|", " | ".join(l.strip() for l in out.splitlines() if l.strip())[:(200 if good else 6000)].encode("ascii", "replace").decode())
    return ok
def bind(only=None):
    derive(); ids = json.loads(rd("slide-ids.json")); V = vals(); v1 = rd("_v1.js"); sw = rd("_sweeps.js")
    assert v1.count("const ids=IDS;") == 1 and sw.count("const ids=IDS;") == 1 and sw.count("MUSTLIST") == 1 and len(ids) == NS
    for n in range(1, NS + 1):
        if only and n not in only: continue
        cs = parts(n, ids["S%d" % n])
        for i, code in enumerate(cs):
            assert len(code) < 50000, (n, i, len(code)); wr(("build/slide_%02d.js" % n) if len(cs) == 1 else ("build/slide_%02d_%d.js" % (n, i + 1)), code)
        wr("build/v1_%02d.js" % n, v1.replace("const ids=IDS;", "const ids=%s;" % json.dumps([ids["S%d" % n]])))
    allids = json.dumps([ids["S%d" % n] for n in range(1, NS + 1)])
    wr("build/v1_all.js", v1.replace("const ids=IDS;", "const ids=%s;" % allids))
    wr("build/sweeps.js", sw.replace("const ids=IDS;", "const ids=%s;" % allids).replace("MUSTLIST", json.dumps(V["must"], ensure_ascii=False)))
    wr("build/slots.js", "const ids=%s; const out=[]; for(const id of ids){ const s=await figma.getNodeByIdAsync(id); s.findAll(n=>n.name.startsWith('LOGO: ')||n.name.startsWith('IMG: ')).forEach(n=>out.push({slide:s.name,id:n.id,name:n.name,w:Math.round(n.width),h:Math.round(n.height)})); } return out;" % allids)
def copy():
    derive(); m = rd("mock_figma.js"); out = ["# Slide copy: every text node on every slide, read from the offline mock", ""]; bad = []
    for n in range(1, NS + 1):
        dump = "const __s=await figma.getNodeByIdAsync('S%d'); console.log('@@T'+JSON.stringify(__s.findAll(q=>q.type==='TEXT').map(t=>t.characters)));" % n
        code = compose(n, "S%d" % n).replace("return {results,warnings};", dump + N + "return {results,warnings};")
        r = subprocess.run(["node", "-"], input=m.replace("EXACT_FLAG", "true").replace("CODE_JSON", json.dumps(code)), capture_output=True, text=True, encoding="utf-8")
        tl = [l for l in r.stdout.splitlines() if l.startswith("@@T")]; texts = json.loads(tl[0][3:]) if tl else ["(no output)"]
        out += ["## S%d" % n, ""] + ["%d. %s" % (i + 1, x.replace("\n", " / ")) for i, x in enumerate(texts)] + [""]
        for x in texts:
            low = x.lower()
            if re.search("[\u2014\u2013]", x): bad.append((n, "dash", x[:60]))
            if "?" in x or "!" in x: bad.append((n, "question or exclamation", x[:60]))
            bad += [(n, "banned " + b, x[:60]) for b in BANW if b in low]
            bad += [(n, "absent " + a, x[:60]) for a in ABSENT if a in x]
    wr("slide-copy.md", N.join(out) + N); print("copy issues", len(bad))
    for b in bad: print("  ", b)
    return not bad
def main(a):
    only = set(int(x) for x in a[1:]) or None
    if a[0] == "pre": pre()
    elif a[0] == "mock": sys.exit(0 if mock(only) else 1)
    elif a[0] == "bind": bind(only)
    elif a[0] == "copy": sys.exit(0 if copy() else 1)
if __name__ == "__main__": main(sys.argv[1:])
```

<!-- FILE: deck/_palette.js -->
```js
const C = {
  primary:{r:0.106,g:0.498,b:0.231}, primaryDeep:{r:0.055,g:0.302,b:0.145},
  accent:{r:1,g:0.780,b:0.173}, alert:{r:0.878,g:0.227,b:0.118},
  tint:{r:0.835,g:0.937,b:0.863}, alertTint:{r:0.988,g:0.894,b:0.871},
  blue:{r:0.145,g:0.388,b:0.922}, blueDeep:{r:0.114,g:0.306,b:0.722}, blueTint:{r:0.859,g:0.914,b:0.996},
  good:{r:0.180,g:0.620,b:0.310}, goodTint:{r:0.878,g:0.957,b:0.898}, accentTint:{r:1,g:0.957,b:0.820},
  ink:{r:0.039,g:0.039,b:0.039}, surface:{r:0.929,g:0.929,b:0.929},
  surfaceAlt:{r:0.965,g:0.965,b:0.965}, white:{r:1,g:1,b:1}
};
const HG=[null,{r:0.918,g:0.965,b:0.925},{r:0.749,g:0.890,b:0.784},{r:0.525,g:0.796,b:0.596},{r:0.247,g:0.639,b:0.361},{r:0.055,g:0.302,b:0.145}];
const HR=[null,{r:1,g:0.957,b:0.945},{r:0.988,g:0.820,b:0.780},{r:0.957,g:0.553,b:0.471},{r:0.878,g:0.227,b:0.118}];
```

<!-- FILE: deck/_extras.js -->
```js
// ===== SWASTHYAGRID SPACE & BEYOND DECK EXTRAS =====
const RIBN=["SUMMARY","PROBLEM","SOLUTION","MARKET","FEASIBILITY","IMPACT"];
const RIBAP=["A1 MODEL","A2 ASSUMPTIONS","A3 SENSITIVITY","A4 SOURCES AND SHORT FORMS"];
const ARCS=true; // set to false if the S3 donut renders as a full disc in Figma
function ribbonBT(s,active,labels){ const y=40,h=60,n=labels.length; let size=24;
  let tw=labels.map(l=>measureW(s,"Poppins","Bold",size,l));
  const fits=pad=>tw.reduce((a,b)=>a+b,0)+pad*n+26*(n-1)<=1792;
  let pad=64; while(!fits(pad)&&pad>44) pad-=4;
  if(!fits(pad)){ size=22; tw=labels.map(l=>measureW(s,"Poppins","Bold",size,l)); pad=64; while(!fits(pad)&&pad>44) pad-=4; }
  if(!fits(pad)) warnings.push("ribbon too wide");
  const widths=tw.map(w=>Math.ceil(w+pad)), used=widths.reduce((a,b)=>a+b,0), gap=n>1?Math.min(80,Math.max(26,(1792-used)/(n-1))):0;
  let x=64; const bxs=[];
  for(let i=0;i<n;i++){ const w=widths[i], act=i===active;
    if(act) addRect(s,x+8,y+8,w,h,C.accent,C.ink,2.5);
    addRect(s,x,y,w,h,act?C.primaryDeep:C.accent,C.ink,2);
    addText(s,"Poppins","Bold",size,act?C.white:C.ink,labels[i],x,y+Math.round((h-size*1.5)/2),w,Math.round(size*1.5),"CENTER","CENTER");
    addEllipse(s,x+3,y+h/2-7,14,14,C.white,C.ink,2); addEllipse(s,x+w-17,y+h/2-7,14,14,C.white,C.ink,2);
    bxs.push({x,w}); x+=w+gap; }
  for(let i=0;i<n-1;i++) addWireH(s,bxs[i].x+bxs[i].w-10,bxs[i+1].x+10,y+h/2,C.ink,2.5); }
function skelBT(s,active,counter,chip,chipW,title,source,o){ o=o||{}; wipe(s);
  ribbonBT(s,active,o.labels||RIBN);
  addChip(s,64,118,chipW,56,chip,C.primary,C.white,22);
  const cw=o.counterW||156; addChip(s,1856-cw,118,cw,56,counter,C.primaryDeep,C.white,24);
  const t=addText(s,"Poppins","Bold",40,C.ink,title,64,188,1792,100,"LEFT",undefined,true); t.name="HEADLINE";
  while(t.height>112 && t.fontSize>34){ t.fontSize=t.fontSize-1; }
  if(t.height>112) warnings.push("headline 3 lines: "+counter);
  srcLine(s,source); return t; }
function arc(p,cx,cy,d,a0,a1,fill,inner){ const e=addEllipse(p,cx-d/2,cy-d/2,d,d,fill,C.ink,2);
  try{ e.arcData={startingAngle:a0,endingAngle:a1,innerRadius:inner||0}; }catch(err){ warnings.push("arc failed"); } return e; }
function donut(p,cx,cy,d,segs,inner){ const tot=segs.reduce((a,s)=>a+s.v,0);
  if(!ARCS){ let yy=cy-d/2; segs.forEach(sg=>{ const hh=d*sg.v/tot; addRect(p,cx-d/2,yy,d,hh,sg.c,C.ink,2); yy+=hh; }); return; }
  let a=-Math.PI/2; segs.forEach(sg=>{ const b=a+2*Math.PI*sg.v/tot; arc(p,cx,cy,d,a,b,sg.c,inner===undefined?0.55:inner); a=b; }); }
function arrow(p,x1,y1,x2,y2,color,th){ color=color||C.ink; th=th||2.5; addDiagonalWire(p,x1,y1,x2,y2,color,th);
  const a=Math.atan2(y2-y1,x2-x1); [a+2.6,a-2.6].forEach(b=>addDiagonalWire(p,x2,y2,x2+10*Math.cos(b),y2+10*Math.sin(b),color,th)); }
function diamond(p,cx,cy,r,fill){ const sd=r*Math.SQRT2, q=Math.SQRT1_2; const d=figma.createRectangle(); p.appendChild(d); d.resize(sd,sd);
  d.fills=[{type:"SOLID",color:fill}]; d.strokes=[{type:"SOLID",color:C.ink}]; d.strokeWeight=2; d.cornerRadius=0;
  d.relativeTransform=[[q,-q,cx],[q,q,cy-r]]; return d; }
function callout(p,x,y,w,h,lead,text,o){ o=o||{}; const f=addFrame(p,x,y,w,h,o.fill||C.accentTint,C.ink,2,"CALLOUT");
  rt(f,14,o.py===undefined?10:o.py,w-28,22,lead,text,{color:o.color,leadColor:o.leadColor||C.primaryDeep}); return f; }
function teamBT(p,x,y,cw){ const X=[0,cw[0],cw[0]+cw[1]], rh=54, hh=50, tw=cw[0]+cw[1]+cw[2], rows=V.team.rows;
  const t=addFrame(p,x,y,tw,hh+rh*rows.length,C.white,C.ink,2,"TABLE: team");
  const h=addFrame(t,0,0,tw,hh,C.tint,C.ink,2,"HEAD");
  ["Team Members","Institution","Role"].forEach((l,i)=>addText(h,"Poppins","Bold",22,C.ink,l,X[i]+16,0,cw[i]-24,hh,"LEFT","CENTER"));
  rows.forEach((m,i)=>{ const r=addFrame(t,0,hh+rh*i,tw,rh,i%2?C.surfaceAlt:C.white,C.ink,2,"ROW");
    m.forEach((v,j)=>addText(r,"Inter",j===0?"Bold":"Semi Bold",22,C.ink,v,X[j]+16,0,cw[j]-24,rh,"LEFT","CENTER")); });
  [X[1],X[2]].forEach(vx=>addRect(t,vx-1,0,2,hh+rh*rows.length,C.ink)); return t; }
function coverTop(s){ addChip(s,64,48,780,56,"SPACE & BEYOND  |  NSUT  |  INNOVATION IDEATHON 2026",C.primaryDeep,C.white,22);
  logoSlot(s,868,40,72,72,"NSUT"); logoSlot(s,956,40,180,72,"Space and Beyond");
  addChip(s,1556,48,300,56,V.team.name,C.primaryDeep,C.white,22);
  addWireH(s,64,1856,140,C.ink,2.5); [64,512,960,1408,1856].forEach(cx=>addEllipse(s,cx-8,132,16,16,C.white,C.ink,2)); }
// Heat cells for capability grids: Yes, Part, No, and the SwasthyaGrid row ("SG").
function ynCell(v){ if(v==="Yes") return {t:"Yes",f:HG[3],tc:C.ink}; if(v==="Part") return {t:"Part",f:C.accentTint,tc:C.ink};
  if(v==="No") return {t:"No",f:C.alertTint,tc:C.alert}; return {t:"Yes",f:C.primaryDeep,tc:C.accent}; }
// Sequential green heat cell between lo and hi; hl marks the base cell.
function heatG(v,lo,hi,hl){ if(hl) return {t:String(v),f:C.primaryDeep,tc:C.accent}; const k=Math.max(1,Math.min(4,1+Math.round(3*(v-lo)/(hi-lo))));
  return {t:String(v),f:HG[k],tc:k>=4?C.white:C.ink}; }
// RAG chip.
function rag(p,x,y,w,h,t){ const f=t==="GREEN"?C.primary:(t==="AMBER"?C.accent:C.alert);
  return bx(p,x,y,w,h,t,{fill:f,color:t==="AMBER"?C.ink:C.white,fam:"Poppins",st:"Bold",size:18}); }
// Cover mind-map node: logo slot on top, title, one-line role.
function actor(p,x,y,w,h,brand,title,sub){ const f=addFrame(p,x,y,w,h,C.white,C.ink,2,"NODE "+title); addRect(f,0,0,6,h,C.accent);
  logoSlot(f,16,8,w-32,56,brand); TL(f,16,66,22,title,{color:C.primaryDeep,maxW:w-28}); sTL(f,16,100,18,sub,{family:"Inter",style:"Semi Bold",maxW:w-28}); return f; }
// A numbered step card with a dark header strip and a wrapped body (18 pt).
function step(p,x,y,w,h,head,who,body,o){ o=o||{}; const f=addFrame(p,x,y,w,h,o.fill||C.white,C.ink,2,"STEP "+head);
  const hz=o.hs||22, hf=addFrame(f,0,0,w,34,o.hfill||C.primaryDeep,C.ink,1.5,"HEAD"); (hz<22?sTL:TL)(hf,10,Math.round((34-hz*1.5)/2),hz,head,{color:o.hc||C.white,maxW:w-20});
  let y2=40; if(who){ const a=sT(f,8,y2,w-16,18,who,{family:"Inter",style:"Bold",color:C.primaryDeep}); y2+=a.height+2; }
  sT(f,8,y2,w-16,18,body,{family:"Inter",style:"Semi Bold"}); return f; }
// Bullet line with a bold lead at 18 pt; returns the next y.
function bl18(p,x,y,w,items,o){ o=o||{}; let cy=y; items.forEach(it=>{ addRect(p,x,cy+6,9,9,o.dot||C.primary,C.ink,1);
  const t=sRT(p,x+18,cy,w-18,18,it[0],it[1],{leadColor:o.lc||C.primaryDeep}); cy+=t.height+(o.gap===undefined?6:o.gap); }); return cy; }
// Small numeral + label tile.
function tile(p,x,y,w,h,num,label,o){ o=o||{}; const f=addFrame(p,x,y,w,h,o.fill||C.white,C.ink,1.5,"TILE");
  TL(f,10,o.ny===undefined?2:o.ny,o.size||26,num,{family:"Poppins",style:"ExtraBold",color:o.color||C.primary,maxW:w-20,min:18});
  sT(f,10,o.ly||40,w-20,18,label,{family:"Inter",style:"Bold",color:o.tc||C.ink}); return f; }
// ===== END SWASTHYAGRID SPACE & BEYOND DECK EXTRAS =====
```

<!-- FILE: deck/_sweeps.js -->
```js
await Promise.all([{family:"Poppins",style:"Bold"},{family:"Poppins",style:"ExtraBold"},{family:"Inter",style:"Semi Bold"},{family:"Inter",style:"Bold"}].map(f=>figma.loadFontAsync(f)));
const ids=IDS; const MUST=MUSTLIST;
const BAN=["here's","let's","bottom line","delve","game-changer","unlock","it's not just","make no mistake","landscape","robust","seamless","holistic","tapestry","paradigm","navigate","revolutioni","cutting-edge","leverage","empower","transformative","journey","synergy","world-class","best-in-class","next-gen","reimagine","supercharge","harness","crucial","pivotal","furthermore","moreover","in today's","ever-evolving","imagine","ecosystem","testament","elevate","what if","picture this","dive into","groundbreaking","state-of-the-art","plethora","myriad","underscore","showcase","foster","bolster","spearhead","nuanced","intricate","meticulous","realm","fast-paced","in conclusion","it is important to note","game changer"];
const ABSENT=["Dayita","Anuj","Aakriti","Ranvir","Gemini","Vertex","BigQuery","Google","Sarvam","₹960","960 Cr","480 Cr","deployed","live in ","used by","customers","pilots running","TODO","TBD","Lorem","xyz","undefined","NaN","Rs ","Rs."];
let radiusFixed=0, money=0; const fontLow=[]; const copy=[]; const density=[]; let all="";
for(const id of ids){ const s=await figma.getNodeByIdAsync(id);
  const nodes=s.findAll(()=>true); density.push({slide:s.name,nodes:nodes.length});
  for(const nd of nodes){ if(nd.name==="CARD: MONEYSHOT") money++; if("cornerRadius" in nd && typeof nd.cornerRadius==="number" && nd.cornerRadius!==0){ nd.cornerRadius=0; radiusFixed++; } }
  for(const t of s.findAllWithCriteria({types:["TEXT"]})){ const c=t.characters; all+=" "+c;
    if(typeof t.fontSize==="number" && t.fontSize<22){ let ok=t.name==="SOURCE"||t.name==="FINEPRINT"||t.name==="BIBLIO"||c.startsWith("Source:")||(t.name==="SEC"&&t.fontSize>=18); let p=t.parent;
      while(p && !ok){ if(p.name && (p.name.startsWith("LOGO:")||p.name.startsWith("IMG:"))) ok=true; p=p.parent; }
      if(!ok) fontLow.push({slide:s.name,size:t.fontSize,chars:c.slice(0,40)}); }
    if(/[—–]/.test(c)) copy.push({slide:s.name,issue:"dash",chars:c.slice(0,60)});
    if(c.includes("?")||c.includes("!")) copy.push({slide:s.name,issue:"question or exclamation",chars:c.slice(0,60)});
    const low=c.toLowerCase(); for(const b of BAN) if(low.includes(b)) copy.push({slide:s.name,issue:"banned: "+b,chars:c.slice(0,60)}); } }
return {radiusFixed, moneyshot:money, fontLow, copy, missing:MUST.filter(m=>!all.includes(m)), presentBad:ABSENT.filter(a=>all.includes(a)), density, slides:ids.length};
```

<!-- FILE: deck/setup.js -->
```js
// Creates (or finds) exactly nine slides, names them, checks fonts. Safe to rerun: it never makes a second set.
let grid = figma.currentPage.children.find(c => c.type === "SLIDE_GRID");
if (grid === undefined) { figma.createSlide(); grid = figma.currentPage.children.find(c => c.type === "SLIDE_GRID"); }
const all = () => grid.children.flatMap(r => r.children);
let guard = 0; while (all().length < 9 && guard++ < 12) figma.createSlide();
const names = ["01 Cover", "02 Executive Summary", "03 Problem", "04 Solution", "05 Market", "06 Feasibility", "07 Impact", "08 Appendix", "09 Thank You"];
const slides = all(); slides.slice(0, 9).forEach((s, i) => { s.name = names[i]; });
const fonts = await figma.listAvailableFontsAsync();
const need = [["Poppins", "Bold"], ["Poppins", "ExtraBold"], ["Inter", "Semi Bold"], ["Inter", "Bold"]];
return { count: slides.length, ids: slides.slice(0, 9).map(s => s.id), extra: slides.slice(9).map(s => ({ id: s.id, children: s.children.length })),
  fontsOk: need.map(n => fonts.some(f => f.fontName.family === n[0] && f.fontName.style === n[1])) };
```

## Q.3 Values

<!-- FILE: deck/make_values.py -->
```python
"""Build V for the SwasthyaGrid Space & Beyond deck. gen.py calls build(text) with model/model_output.txt, the unchanged
NEXORA model output (research Appendix B). Every model line a slide uses is in LOCK, and build() asserts each one is printed,
so a changed model fails loudly instead of leaving a stale slide. Slide strings live in slides/sNN.js; their numbers are the
§2.4 table of PLAN.md."""
TEAM = [["Harsh Kawatra", "Delhi Technological University (DTU)", "Team Leader"],
        ["Gursimran Kaur", "Guru Gobind Singh Indraprastha University", "Member"]]
LOCK = ["facilities 38,241", "= 2.72 crore", "base 50% avoided 1,35,81,100 = 135.8 lakh = 1.36 crore | availability after 86.1%",
        "bear 30% avoided 81,48,660 = 81.5 lakh", "availability after 80.5%", "bull 80% avoided 2,17,29,760 = 217.3 lakh = 2.17 crore",
        "availability after 94.4%", "per facility a year 355.1", "per district a year 17,412", "72.2% 81.5 135.8 217.3",
        "66% 99.7 166.1 265.8", "80% 58.6 97.7 156.3", "ACV 12.0 L = base 4 + per-facility 7.0 (50 x Rs 14,000) + support 1",
        "facilities per district 49.0", "Rs 93.60 Cr", "Rs 13.44 Cr", "Rs 4.92 Cr", "Rs 9.60 Cr", "SOM share of TAM 10.3%",
        "Rs 47.73 Cr | ACV share 0.25%", "CAC payback 5.6 months", "LTV (5 yrs) 42.6 L | LTV:CAC 10.65x",
        "ARR 1.44 5.40 9.60 | onboarding 0.36 0.99 1.05 | billings 1.80 6.39 10.65 | Y3 recurring 90.1% | GM 71%",
        "ARR 1.44 3.60 6.00 | onboarding 0.36 0.54 0.60 | billings 1.80 4.14 6.60", "GM 62%",
        "ARR 1.44 7.20 12.60 | onboarding 0.36 1.44 1.35 | billings 1.80 8.64 13.95", "GM 76%",
        "50 to 105: 6.00 to 12.60", "ACV Rs 9 L to Rs 15 L: 7.20 to 12.00", "(ACV 9.9 to 14.1 L): 7.92 to 11.28",
        "Rs 390.26 Cr over 6.00 yrs = Rs 65.04 Cr a year = Rs 1.97 Cr per district a year | licence pays back at 6.1% redeployed",
        "Rs 168.00 Cr over 5.83 yrs = Rs 28.80 Cr a year = Rs 0.96 Cr per district a year | licence pays back at 12.5% redeployed"]
H = {
    "h2": "Districts run short and write off expired medicine at once; moving what a district already owns avoids an estimated 1.36 crore stock-out days a year",
    "h3": "A third of key medicines can be missing from a PHC shelf while state stores write off crores in expired stock: no one sees a district's supply as one",
    "h4": "SwasthyaGrid adds what five public systems lack: a morning view of every shelf, the nearest surplus ranked, and an officer's sign-off on every move",
    "h5": "State health departments buy for about 780 districts, a ₹93.6 Cr licence pool; we enter through 112 aspirational districts and Rajasthan's 41",
    "h6": "A district can go live six weeks after a data MoU, on exports the state already produces: three feasibility tests are green and two stay amber",
    "h7": "Across 38,241 PHCs and CHCs, SwasthyaGrid would avoid an estimated 1.36 crore stock-out days a year, lifting availability from 72.2% to 86.1%",
    "h8": "Every number traces to a named source or one stated model; even the weakest mix of assumptions still avoids 58.6 lakh stock-out days a year",
}
SRC = [
    "Source: research sections 2, 6, 7, 8 | CAG audits (Telangana 2024, Odisha 2026) | UNDP eVIN | MoHFW HDI 2022-23 | NITI Aayog | Team IdeaForge model (NEXORA model, unchanged)",
    "Source: MoHFW HDI 2022-23 | PMC8654139 | CAG via Medical Dialogues and UNI | NHA 2022-23 | UNDP eVIN | PRS DFG 2025-26 | research sections 2, 7, 9, 11, 14 | model",
    "Source: MoHFW HDI 2022-23 | PMC8654139, PMC10292169, Kotwani 2015 | eLife 2020 | WHO India | SRS 2019-21 | CAG via Medical Dialogues, UNI, Deccan Herald, Tribune | NHA 2022-23 | PMC11836861",
    "Source: research section 8 (design rules; worked example on simulated data) | C-DAC e-Aushadhi | UNDP eVIN | ABDM HFR | IHIP | Kim and Mauborgne (2005) | research section 7 capability matrix",
    "Source: LGD (about 780 districts) | NITI Aayog list and ADP 2018 | Scroll (Rajasthan 41) | PRS DFG 2024-25, 2025-26 | PIB ABDM Jul 2026 | C-DAC | Codingclave, upGrowth 2026 | model",
    "Source: research sections 13 and 15 | Constitution, List II, Entry 6 | DPDP Act 2023 | CDSCO May 2025 | ABDM HFR | NITI Delta Ranking | AIM INDovation | Appendix E validation plan",
    "Source: NEXORA model (impact, unit economics) | MoHFW HDI 2022-23 | PMC8654139 | UNDP eVIN | NHA 2022-23 | eLife 2020 | HCWH and Arup 2019 | PMC10867696 | WHO | UN SDG metadata",
    "Source: NEXORA model output (research Appendix B) | assumptions register (Appendix D) | bibliography of 70+ sources (Appendix A) | Team IdeaForge",
    "Source: Team IdeaForge, Space & Beyond Innovation Ideathon 2026, NSUT | research and model: swasthyagrid-nexora-research",
]
def build(text):
    miss = [k for k in LOCK if k not in text]; assert not miss, ("model output changed", miss)
    V = {"team": {"name": "TEAM IDEAFORGE", "rows": TEAM}, "src": SRC}
    V.update(H)
    V["must"] = ["TEAM IDEAFORGE", "Harsh Kawatra", "Gursimran Kaur", "THANK YOU", "THEREFORE", "CONCLUSIVELY", "1.36 crore",
                 "₹93.6 Cr", "72.2%", "86.1%", "SMART WORLD, BETTER FUTURE", "SPACE & BEYOND", "simulated data", "none done"]
    for k in H: assert len(H[k]) <= 150, (k, len(H[k]))
    assert len(SRC) == 9 and all(len(s) <= 230 for s in SRC), [len(s) for s in SRC]
    return V
```

## Q.4 Slide 1, Cover

<!-- FILE: deck/slides/s01.js -->
```js
{ const s = await figma.getNodeByIdAsync("S1"); wipe(s);
coverTop(s);
TL(s,64,150,112,"SWASTHYAGRID",{family:"Poppins",style:"ExtraBold",maxW:930,min:80});
addChip(s,64,322,600,50,"THEME: SMART WORLD, BETTER FUTURE",C.accent,C.ink,22);
T(s,64,388,920,28,"Moves the medicine a district already owns, before the state buys more",{family:"Poppins",style:"Bold",color:C.primary});
const v=layered(s,64,492,920,250,C.primaryDeep,"CARD: verdict");
T(v,24,16,872,26,"OUR IDEA: BEFORE INDIA BUYS MORE MEDICINE, MOVE WHAT EACH DISTRICT ALREADY OWNS. ONE MORNING VIEW, ONE RANKED TRANSFER, ONE OFFICER'S SIGN-OFF.",{family:"Poppins",style:"Bold",color:C.accent});
T(v,24,150,872,22,"An estimated 1.36 crore stock-out days avoided a year across India's 38,241 PHCs and CHCs in the base case, from a stated model. This deck presents the idea; the prototype is shown separately in Round 2.",{family:"Inter",style:"Semi Bold",color:C.white});
TL(s,64,764,40,V.team.name,{family:"Poppins",style:"ExtraBold",color:C.primary});
teamBT(s,64,830,[250,500,170]);
sT(s,64,994,920,18,"harshkawatra11@gmail.com  |  file: TeamIdeaForge_SpaceAndBeyond",{family:"Inter",style:"Bold",color:C.primaryDeep});
srcLine(s,V.src[0]);
}
// ===== PART 2 =====
{ const s = await figma.getNodeByIdAsync("S1");
const m=addFrame(s,1016,150,840,882,C.white,C.ink,2,"PANEL: mind map");
TL(m,16,10,24,"ONE DISTRICT VIEW, EIGHT ACTORS IT CONNECTS",{color:C.primary,maxW:808}); addRect(m,16,50,808,2,C.ink);
T(m,16,60,808,22,"₹558 Cr of medicine expired in two audited states while PHC shelves ran short: the fix sits inside each district.",{family:"Poppins",style:"Bold",color:C.primaryDeep});
const A=[["National Health Mission","State NHM","signs the licence"],["District officer","District officer","approves each move"],["Ayushman Bharat","PHCs and CHCs","38,241 facilities"],
  ["e-Aushadhi","e-Aushadhi","stock ledger we read"],["eVIN","eVIN precedent","80% fewer stock-outs"],
  ["ABDM","ABDM registry","1 lakh+ facility IDs"],["NITI Aayog","NITI Aayog","aspirational list: 112"],["Government of Rajasthan","Rajasthan","41-district beachhead"]];
const P=[[16,140],[294,140],[572,140],[16,410],[572,410],[16,680],[294,680],[572,680]], W=252, Hh=124, HX=420, HY=472;
P.forEach(q=>addDiagonalWire(m,HX,HY,q[0]+W/2,q[1]+Hh/2,C.ink,2.5));
A.forEach((a,i)=>actor(m,P[i][0],P[i][1],W,Hh,a[0],a[1],a[2]));
addEllipse(m,HX-105,HY-105,210,210,C.primaryDeep,C.ink,2.5);
TL(m,0,HY-62,26,"DISTRICT",{color:C.white,centerAt:HX}); TL(m,0,HY-24,26,"VIEW",{color:C.white,centerAt:HX});
TL(m,0,HY+20,22,"SwasthyaGrid",{color:C.accent,centerAt:HX});
[["SEE","under 3 days"],["PROPOSE","nearest stock"],["APPROVE","one officer"]].forEach((r,i)=>{ const x=16+278*i;
  const f=addFrame(m,x,816,252,36,i===2?C.accent:C.tint,C.ink,1.5,"CHIP"); sRT(f,10,7,232,18,r[0]+": ",r[1],{leadColor:C.primaryDeep});
  if(i<2) arrow(m,x+254,834,x+276,834,C.ink,2); });
fine(m,16,858,808,"Logos mark public bodies referenced in the analysis; no partnership or endorsement is implied.");
results.push({slide:s.id,total:s.findAll(()=>true).length,top:s.children.length}); }
```

## Q.5 Slide 2, Executive Summary

<!-- FILE: deck/slides/s02.js -->
```js
{ const s = await figma.getNodeByIdAsync("S2");
skelBT(s,0,"1 / 6","EXECUTIVE SUMMARY",400,V.h2,V.src[1]);
rail(s,64,310,240,"THE PARADOX",C.alert); rail(s,64,562,232,"THE ANSWER",C.primaryDeep); rail(s,64,806,226,"THE PAYOFF",C.primary);
// band 1: the paradox, the obvious fixes, the systems grid
const p1=pnl(s,116,310,560,240,"SHORT AND WASTED AT ONCE",{tc:C.alert});
[["66 to 80%","key-medicine availability at PHCs in two state studies"],["₹558 Cr","of medicine expired in Telangana and Odisha (CAG)"],
 ["79.9%","of CHC specialist posts unfilled, 4,413 of 21,964 in place"],["43.4%","of health spending paid out of pocket, 2022-23"]].forEach((r,i)=>{ const y=48+47*i;
  TL(p1,14,y,28,r[0],{family:"Poppins",style:"ExtraBold",color:C.alert,maxW:180,min:22});
  sT(p1,204,y,342,18,r[1],{family:"Inter",style:"Semi Bold"}); });
const p2=pnl(s,688,310,640,240,"WHY THE OBVIOUS FIXES STALL",{tc:C.alert});
tbl(p2,14,46,[170,442],["Obvious fix","Why it stalls"],[["Hire more","79.9% of CHC specialist posts already empty"],["Buy more","₹558 Cr already expired in two audited states"],
  ["One database","health is a State subject (List II, Entry 6)"],["New dashboard","five systems record stock; none moves it"]],{hh:26,rh:30,name:"obvious",strip:[C.alert,C.alert,C.alert,C.alert]});
note(p2,14,200,612,"So what: ","none uses what a district already holds.");
const p3=pnl(s,1340,310,516,240,"FIVE SYSTEMS RECORD, NONE MOVES");
hgrid(p3,14,46,["HMIS","e-Aushadhi","eVIN (vaccines)","IHIP / IDSP","ABDM registry","SwasthyaGrid"],["Records","Medicine","Moves"],
  [["Part","Part","No"],["Yes","Yes","No"],["Yes","No","No"],["No","No","No"],["No","No","No"],["SG","SG","SG"]].map(r=>r.map(ynCell)),{lw:188,cw:100,rh:26,hh:26,corner:"System",name:"systems"});
}
// ===== PART 2 =====
{ const s = await figma.getNodeByIdAsync("S2");
// band 2: the idea as a pyramid, three reasons each side, the precedent
const c1=layered(s,116,562,600,225,C.primaryDeep,"CARD: idea");
TL(c1,16,8,22,"MOVE FIRST, BUY ONLY FOR THE GAPS",{color:C.accent,maxW:568});
[["1  SEE","Each morning, any item under 3 days of cover is flagged; 5 days for emergency drugs"],["2  PROPOSE","The nearest surplus within 40 km is ranked and sized to refill 21 days of cover"],
 ["3  APPROVE","A named officer approves, edits or rejects; the receiving PHC confirms delivery"]].forEach((r,i)=>{ const f=addFrame(c1,14+192*i,50,182,168,i===2?C.accent:C.white,C.ink,2,"PILLAR");
  TL(f,10,2,22,r[0],{color:C.primaryDeep,maxW:162}); sT(f,10,36,162,18,r[1],{family:"Inter",style:"Semi Bold"}); });
const p4=pnl(s,728,562,760,232,"THREE REASONS EACH SIDE");
tbl(p4,14,46,[120,306,306],["Reason","Against buy or hire","For move first"],[["Numbers","79.9% of specialist posts already empty","up to 1 in 3 key medicines missing on a day"],
  ["Fit","buying feeds ₹558 Cr of audited expiry","eVIN cut vaccine stock-outs by 80%"],["Delivery","a national database clashes with the State List","reads exports states already produce"]],{hh:26,rh:46,name:"reasons"});
const p5=pnl(s,1500,562,356,232,"THE PRECEDENT: eVIN");
logoSlot(p5,14,48,150,48,"eVIN"); logoSlot(p5,176,48,150,48,"UNDP");
[["80%","fewer stock-outs"],["29,000+","cold-chain points"],["12 to 36","states and UTs"]].forEach((r,i)=>{ const y=104+40*i;
  TL(p5,14,y,26,r[0],{family:"Poppins",style:"ExtraBold",color:C.primary,maxW:140}); sTL(p5,166,y+8,18,r[1],{family:"Inter",style:"Bold",maxW:176}); });
// band 3: the payoff
const p6=pnl(s,116,806,520,226,"THREE SCENARIOS, DAYS AVOIDED");
hBars(p6,14,48,492,[{label:"Bear, 30%",value:81.5,text:"81.5 lakh",color:C.tint},{label:"Base, 50%",value:135.8,text:"1.36 crore",color:C.primary},{label:"Bull, 80%",value:217.3,text:"2.17 crore",color:C.primaryDeep}],{labelW:150,rowH:40,barH:26,valueW:130});
sT(p6,14,172,492,18,"Base case assumes half of eVIN's 80% cut; availability rises from 72.2% to 86.1%",{family:"Inter",style:"Bold",color:C.primaryDeep});
const p7=pnl(s,648,806,600,226,"WHAT A DISTRICT PAYS, AND GETS BACK");
[["₹12 L","licence a district a year"],["0.25%","of the district's central NHM share"],["6.1 to 12.5%","of yearly expiry rescued repays it"],["10.65x","lifetime value to acquisition cost"]].forEach((r,i)=>{
  tile(p7,14+290*(i%2),48+88*Math.floor(i/2),280,84,r[0],r[1],{fill:i%3===0?C.accentTint:C.white}); });
const p8=pnl(s,1260,806,596,226,"WHERE EACH ASK IS ANSWERED");
tbl(p8,14,46,[250,252,66],["Ask in the brief","Where on the deck","Slide"],[["Problem","shelf, waste, root cause","3"],["Solution, innovation","loop, rules, system grid","4"],["Market, business model","sizing, buyer, price","5"],
  ["Implementation","six-week plan, risks","6"],["Impact, future scope","model, horizons","7"],["Assumptions, sources","workings, register","8"]],{hh:26,rh:24,name:"brief",align:["LEFT","LEFT","CENTER"]});
results.push({slide:s.id,total:s.findAll(()=>true).length,top:s.children.length}); }
```

## Q.6 Slide 3, Problem

<!-- FILE: deck/slides/s03.js -->
```js
{ const s = await figma.getNodeByIdAsync("S3");
skelBT(s,1,"2 / 6","THE PROBLEM",330,V.h3,V.src[2]);
rail(s,64,310,240,"THE SHELF",C.alert); rail(s,64,562,232,"THE WASTE",C.primaryDeep); rail(s,64,806,226,"ROOT CAUSE",C.primary);
// band 1: availability, the facility pyramid, tracer conditions
const p1=pnl(s,116,310,600,240,"AVAILABILITY OF KEY MEDICINES, FOUR STUDIES, %");
const BW=290, BX=250;
[["Punjab, 80 facilities",45.2,C.alert],["Haryana, same survey",51.1,C.alert],["Puducherry state PHCs",72.2,C.accent],["Gadag, Karnataka",74.2,C.accent],["Puducherry central PHCs",77,C.primary]].forEach((r,i)=>{ const y=50+30*i;
  sTL(p1,14,y,18,r[0],{family:"Inter",style:"Bold",maxW:226}); addRect(p1,BX,y+3,BW*r[1]/100,18,r[2],C.ink,1);
  sTL(p1,BX+BW*r[1]/100+6,y,18,r[1]+"%",{family:"Inter",style:"Bold"}); });
note(p1,14,204,572,"Range: ","45% to 80% by state; up to 1 in 3 items missing");
const p2=pnl(s,728,310,520,240,"38,241 PHCs AND CHCs ARE THE SHELF");
[["714","District hospitals",70,HG[2],C.ink],["1,340","Sub-divisional hospitals",110,HG[2],C.ink],["6,359","CHCs, first referral",150,C.accent,C.ink],["31,882","PHCs, main medicine shelf",190,C.accent,C.ink],["1,69,615","Sub-centres, basic list",230,HG[4],C.white]].forEach((r,i)=>{
  const y=50+36*i; bx(p2,129-r[2]/2,y,r[2],32,r[0],{fill:r[3],color:r[4],size:18,pad:2}); sTL(p2,260,y+5,18,r[1],{family:"Inter",style:"Bold",maxW:246}); });
const p3=pnl(s,1260,310,596,240,"WHERE A MISSING DRUG COSTS MOST");
tbl(p3,14,46,[130,130,308],["Condition","Tracer drug","Burden in India"],[["Snakebite","Antivenom","58,000 deaths a year (eLife)"],["Rabies","Anti-rabies","5,726 deaths a year (WHO)"],["Childbirth","Oxytocin","MMR 93 per 1,00,000 births"],["Dengue","Fluids","signal 4 to 6 weeks pre-peak"]],{hh:26,rh:30,name:"tracer"});
note(p3,14,200,568,"Duration: ","60% of Haryana's gaps last 3 to 6 months");
}
// ===== PART 2 =====
{ const s = await figma.getNodeByIdAsync("S3");
// band 2: audited expiry, per-district arithmetic, who pays
const p4=pnl(s,116,562,560,232,"CAG: EXPIRED IN STATE STORES, ₹ CR");
cols(p4,14,46,440,180,["Telangana","Odisha","Karnataka","Haryana"],[{color:C.alert,values:[390.26,168,23.03,14.52]}],{max:420,bw:56,totals:["390.26","168","23.03","14.52"]});
note(p4,250,52,296,"","Telangana also issued ₹17.13 Cr of drugs with 1 to 89 days of shelf life left",{fill:C.alertTint});
const p5=pnl(s,688,562,520,232,"PER DISTRICT, EVERY YEAR");
tbl(p5,14,46,[180,140,172],["Step","Telangana","Odisha"],[["Expired (audited)","₹390.26 Cr","₹168.00 Cr"],["Years audited","6.00","5.83"],["Per year","₹65.04 Cr","₹28.80 Cr"],["Districts","33","30"],["Per district a year","₹1.97 Cr","₹0.96 Cr"]],
  {hh:26,rh:24,name:"perdistrict",align:["LEFT","RIGHT","RIGHT"],fills:[null,null,null,null,C.tint]});
note(p5,14,198,492,"So what: ","₹12 L repays at 6.1% to 12.5% of this");
const p6=pnl(s,1220,562,636,232,"WHO PAYS WHEN THE SHELF IS EMPTY");
donut(p6,90,135,130,[{v:43.4,c:C.alert},{v:56.6,c:C.tint}],0.55);
TL(p6,0,121,22,"43.4%",{color:C.alert,centerAt:90}); sTL(p6,0,204,18,"out of pocket",{family:"Inter",style:"Bold",centerAt:90});
tbl(p6,180,46,[250,172],["Measure","Value"],[["Out of pocket, 2013-14","64.2%"],["Out of pocket, 2022-23","43.4%"],["Pharmacy share of CHE","19.35% to 21.19%"],["Buy privately, Odisha","over 70%"],["CHC specialists missing","79.9%"]],{hh:26,rh:26,name:"oop",align:["LEFT","RIGHT"]});
// band 3: issue tree and five whys
const p7=pnl(s,116,806,860,226,"FIVE BRANCHES, AND WHAT A DISTRICT VIEW FIXES");
const r=addFrame(p7,14,46,170,170,C.primaryDeep,C.ink,2,"ROOT"); sT(r,10,10,150,18,"Why is a tracer drug missing when the officer checks the shelf",{family:"Inter",style:"Bold",color:C.white});
[["Supply undersized or late at the source","Not fixed",C.alertTint],["Supply exists, but in the wrong facility","Fixed",HG[3]],["Records lag the physical shelf by days","Partly",C.accentTint],
 ["Demand spikes the plan did not expect","Partly",C.accentTint],["Nobody with authority sees it in time","Fixed",HG[3]]].forEach((b,i)=>{ const y=46+36*i;
  elb(p7,184,131,214,y+15,C.ink,2); bx(p7,214,y,470,30,(i+1)+". "+b[0],{fill:C.white,align:"LEFT",pad:10}); bx(p7,696,y,150,30,b[1],{fill:b[2]}); });
const p8=pnl(s,988,806,868,226,"FIVE WHYS ON ONE STOCK-OUT");
["ARV ran out: three bites in a week drained the stock","The register is paper, checked when there is time","The store cannot see which of 49 PHCs runs low","Facility records are never added up district-wide","Adding them up each morning is nobody's job"].forEach((w,i)=>{
  const x=14+168*i; const f=addFrame(p8,x,48,156,140,i===4?C.accent:C.white,C.ink,2,"WHY");
  TL(f,8,2,22,"WHY "+(i+1),{color:C.primaryDeep}); sT(f,8,36,140,18,w,{family:"Inter",style:"Semi Bold"});
  if(i<4) arrow(p8,x+157,118,x+167,118,C.ink,2); });
note(p8,14,194,840,"Root cause: ","the medicine is often already inside the district; no one is tasked to see it.");
results.push({slide:s.id,total:s.findAll(()=>true).length,top:s.children.length}); }
```

## Q.7 Slide 4, Solution

<!-- FILE: deck/slides/s04.js -->
```js
{ const s = await figma.getNodeByIdAsync("S4");
skelBT(s,2,"3 / 6","THE SOLUTION AND INNOVATION",520,V.h4,V.src[3]);
rail(s,64,310,240,"THE LOOP",C.primaryDeep); rail(s,64,562,232,"HOW IT DECIDES",C.primary); rail(s,64,806,226,"WHY IT IS NEW",C.alert);
// band 1: the daily loop, the rules
const p1=pnl(s,116,310,1080,240,"THE DAILY LOOP: SEE, FLAG, PROPOSE, APPROVE, CONFIRM");
[["1 SEE","District officer","one view of stock, beds and staff in every facility"],["2 FLAG","No person","any item under 3 days of cover is marked"],["3 PROPOSE","No person","nearest surplus ranked; move sized to 21 days"],
 ["4 APPROVE","Named officer","approve, edit or reject; name and time logged"],["5 CONFIRM","Receiving PHC","delivery confirmed; stock updates once"]].forEach((r,i)=>{ const x=14+212*i;
  step(p1,x,46,196,156,r[0],r[1],r[2],i===3?{hfill:C.accent,hc:C.ink,fill:C.accentTint}:{}); if(i<4) arrow(p1,x+198,124,x+210,124,C.ink,2.5); });
dashedH(p1,112,212,856,C.primaryDeep,2.5); addRect(p1,112,202,2.5,12,C.primaryDeep); addRect(p1,966,202,2.5,12,C.primaryDeep);
sTL(p1,0,214,18,"Every confirmed delivery feeds the next morning's view",{family:"Inter",style:"Bold",color:C.primaryDeep,centerAt:540});
const p2=pnl(s,1208,310,648,240,"THE RULES, IN AN OFFICER'S WORDS");
tbl(p2,14,46,[250,370],["Rule","Value"],[["Days of cover","units in stock ÷ average daily use"],["Flag, routine items","under 3 days of cover"],["Flag, emergency drugs","under 5 days (antivenom, anti-rabies)"],
  ["Refill target","21 days of cover"],["Transfer radius","within 40 km"],["Bed redirect","next case to a facility under 90% full"],["Patient data","none, by design"]],{hh:26,rh:23,name:"rules"});
}
// ===== PART 2 =====
{ const s = await figma.getNodeByIdAsync("S4");
// band 2: four outcomes, the worked example, before and after
const p3=pnl(s,116,562,500,232,"FOUR OUTCOMES FOR EVERY FLAG");
[["Refill from buffer","district store tops the PHC up to 21 days",C.white],["Lateral transfer","a PHC within 40 km sends its surplus",C.white],
 ["Bed redirect","next case goes to a facility under 90% full",C.white],["Escalate","no surplus anywhere: flagged for purchase",C.alertTint]].forEach((r,i)=>{
  const f=addFrame(p3,14+236*(i%2),48+92*Math.floor(i/2),230,86,r[2],C.ink,1.5,"OUTCOME");
  sTL(f,10,4,20,r[0],{family:"Poppins",style:"Bold",color:i===3?C.alert:C.primaryDeep,maxW:210}); sT(f,10,36,210,18,r[1],{family:"Inter",style:"Semi Bold"}); });
const p4=pnl(s,628,562,600,232,"ONE TRANSFER, WORKED THROUGH");
cols(p4,14,46,180,180,["Before","After"],[{color:C.alert,values:[1.2,0]},{color:C.primary,values:[0,21]}],{max:24,bw:60,totals:["1.2 days","21.0 days"]});
[["See: ","7 ARV vials, 1.2 days of cover"],["Flag: ","under the 3-day line"],["Propose: ","119 vials, district store"],["Approve: ","officer signs, no edit"],["Confirm: ","126 vials, 21.0 days"]].forEach((r,i)=>{
  addBadge(p4,210,48+30*i,24,i+1,C.primaryDeep,C.white); sRT(p4,242,49+30*i,344,18,r[0],r[1],{leadColor:C.primaryDeep}); });
sT(p4,210,202,376,18,"Worked example on simulated data",{family:"Inter",style:"Bold",color:C.alert});
const p5=pnl(s,1240,562,616,232,"BEFORE AND AFTER, FOR THE DISTRICT OFFICER");
tbl(p5,14,46,[176,200,212],["Task","Today","With SwasthyaGrid"],[["Find a shortage","by phone, too late","flagged that morning"],["Pick a source","calls 2 or 3 PHCs","one ranked proposal"],["Record it","nothing kept","name, time logged"],
  ["Expiring stock","written off later","flagged weeks early"],["Daily decisions","one per call","one per flagged item"]],{hh:26,rh:28,name:"beforeafter",bold:[2]});
// band 3: capability grid, ERRC, conclusively
const p6=pnl(s,116,806,700,226,"FIVE PUBLIC SYSTEMS RECORD; NONE PROPOSES A MOVE");
hgrid(p6,14,46,["HMIS","e-Aushadhi","eVIN","IHIP / IDSP","ABDM registry","SwasthyaGrid"],["Stock","District","Medicine","Proposes","Sign-off"],
  [["Part","No","Part","No","No"],["Yes","Part","Yes","No","No"],["Yes","Yes","No","No","No"],["No","Part","No","No","No"],["No","Part","No","No","No"],["SG","SG","SG","SG","SG"]].map(r=>r.map(ynCell)),{lw:170,cw:100,rh:25,hh:25,corner:"System",name:"capability"});
const p7=pnl(s,828,806,500,226,"ERRC: WHAT CHANGES FOR THE OFFICER");
[["ELIMINATE","phone calls to find surplus"],["REDUCE","one approval per flagged item"],["RAISE","speed from flag to sized move"],["CREATE","a move proposed across facilities"]].forEach((r,i)=>{
  const f=addFrame(p7,14+236*(i%2),48+90*Math.floor(i/2),230,84,i===3?C.tint:C.white,C.ink,1.5,"ERRC");
  sTL(f,10,4,20,r[0],{family:"Poppins",style:"Bold",color:C.primaryDeep}); sT(f,10,36,210,18,r[1],{family:"Inter",style:"Semi Bold"}); });
const c=layered(s,1340,806,516,219,C.primaryDeep,"CARD: conclusively");
TL(c,18,8,22,"CONCLUSIVELY",{color:C.accent});
T(c,18,44,480,22,"The medicine is often already inside the district. The missing piece is a daily, ranked proposal a named officer signs, with no patient data and no new hardware.",{family:"Inter",style:"Semi Bold",color:C.white});
["Officer signs","No patient data","Data stays home"].forEach((g,i)=>bx(c,18+162*i,180,156,28,g,{fill:C.accent,size:18,pad:3}));
results.push({slide:s.id,total:s.findAll(()=>true).length,top:s.children.length}); }
```

## Q.8 Slide 5, Market

<!-- FILE: deck/slides/s05.js -->
```js
{ const s = await figma.getNodeByIdAsync("S5");
skelBT(s,3,"4 / 6","TARGET MARKET AND BUSINESS MODEL",600,V.h5,V.src[4]);
rail(s,64,310,240,"SIZE",C.primaryDeep); rail(s,64,562,232,"BUYER",C.primary); rail(s,64,806,226,"MONEY",C.alert);
// band 1: bottom-up sizing, licence build, top-down check
const p1=pnl(s,116,310,620,240,"BOTTOM-UP: DISTRICTS × ₹12 L LICENCE");
[["TAM 780",780,"₹93.6 Cr",C.primaryDeep],["SAM 112",112,"₹13.44 Cr",C.primary],["SOM 80",80,"₹9.6 Cr",C.accent],["Rajasthan 41",41,"₹4.92 Cr",C.alert]].forEach((r,i)=>{ const y=50+40*i, w=Math.max(4,110*r[1]/780);
  sTL(p1,14,y+2,18,r[0],{family:"Inter",style:"Bold",maxW:120}); addRect(p1,140,y,w,26,r[3],C.ink,1.5); sTL(p1,140+w+6,y+2,18,r[2],{family:"Inter",style:"Bold"}); });
tbl(p1,346,46,[110,150],["Segment","Basis"],[["TAM","LGD, about 780"],["SAM","NITI list, 112"],["SOM","base path, Y3"],["Entry","Rajasthan, 41"]],{hh:26,rh:28,name:"basis"});
note(p1,14,206,592,"","SOM: 10.3% of TAM. Rajasthan: 5 of 41 aspirational");
const p2=pnl(s,748,310,520,240,"THE ₹12 L LICENCE, BUILT UP, ₹ L");
wf(p2,14,46,320,190,[["Base",4],["PHCs",7],["Support",1],["Licence",12]],{min:0,max:13,dp:0,lh:40,bw:46});
bl18(p2,344,52,162,[["₹4 L ","base platform"],["₹7 L ","= 50 × ₹14,000"],["49.0 ","facilities per district"]],{gap:14});
const p3=pnl(s,1280,310,576,240,"TOP-DOWN CHECK: 0.25% OF NHM SHARE");
sTL(p3,14,46,18,"Union NHM, ₹ '000 Cr",{family:"Inter",style:"Bold",color:C.primaryDeep});
lcS(p3,14,72,330,160,[{values:[28.9,29.1,36.0,37.2],color:C.primary,label:"₹37,227 Cr"}],["FY23","FY24","FY25","FY26"],{yMin:25,yMax:40,yTicks:[30,35,40],padL:44,padR:110});
TL(p3,362,52,26,"₹47.73 Cr",{family:"Poppins",style:"ExtraBold",color:C.primaryDeep,maxW:200});
sT(p3,362,92,200,18,"central NHM share per district",{family:"Inter",style:"Bold"});
TL(p3,362,138,40,"0.25%",{family:"Poppins",style:"ExtraBold",color:C.primary,maxW:200});
sT(p3,362,200,200,18,"of it pays the licence",{family:"Inter",style:"Bold"});
}
// ===== PART 2 =====
{ const s = await figma.getNodeByIdAsync("S5");
// band 2: buying centre, STP, why now
const p4=pnl(s,116,562,560,232,"WHO DECIDES: THE BUYING CENTRE");
tbl(p4,14,46,[120,200,212],["Role","Who","What they need"],[["Signs","State NHM director","an NHM budget line"],["Champions","District Collector","health weighs 30%"],["Uses daily","DHO","one approval per flag"],["Reports","Pharmacist, MO","one confirmation"],["Benefits","Patients","drug on the shelf"]],
  {hh:26,rh:30,name:"buying",strip:[C.primaryDeep,C.primary,C.accent,HG[3],HG[2]]});
const p5=pnl(s,688,562,560,232,"STP: SEGMENT, TARGET, POSITION");
tbl(p5,14,46,[140,392],["Step","Our choice"],[["Segment","about 780 districts, split by a scored health goal and a digital stock export"],["Target","112 aspirational districts first; Rajasthan's 41 as the beachhead"],
  ["Position","not a new system to learn: a layer that moves what a district owns"]],{hh:26,rh:42,name:"stp"});
note(p5,14,200,532,"Rajasthan: ","the design models 5 of its districts");
const p6=pnl(s,1260,562,596,232,"WHY NOW: FOUR RAILS ALREADY EXIST");
[["95.99 Cr","ABHA IDs created by 31 Jul 2026"],["31","States and UTs on the e-Aushadhi dashboard"],["1 lakh+","facilities with an ABDM registry ID"],["₹37,227 Cr","NHM budget 2025-26, up every year"]].forEach((r,i)=>{
  tile(p6,14+284*(i%2),48+90*Math.floor(i/2),276,84,r[0],r[1],{fill:i%3===0?C.tint:C.white}); });
// band 3: revenue path, unit economics, price band
const p7=pnl(s,116,806,620,226,"REVENUE PATH, ₹ CR, BASE CASE");
let lx=lgS(p7,14,46,C.primary,"Recurring"); lgS(p7,lx,46,C.accent,"Onboarding");
cols(p7,14,70,300,150,["Year 1","Year 2","Year 3"],[{color:C.primary,values:[1.44,5.40,9.60]},{color:C.accent,values:[0.36,0.99,1.05]}],{max:11.5,bw:60,totals:["1.80","6.39","10.65"]});
tbl(p7,326,46,[70,100,110],["Case","Districts","ARR Y3"],[["Bear","50","₹6.0 Cr"],["Base","80","₹9.6 Cr"],["Bull","105","₹12.6 Cr"]],{hh:26,rh:26,name:"cases",fills:[null,C.tint,null],align:["LEFT","RIGHT","RIGHT"]});
sT(p7,326,158,280,18,"Year 3: 90.1% of billings recur; ₹3 L onboarding per new district",{family:"Inter",style:"Semi Bold"});
const p8=pnl(s,748,806,560,226,"UNIT ECONOMICS, ONE DISTRICT, BASE");
[["71%","gross margin"],["₹4 L","cost to win"],["5.6 mo","payback"],["10.65x","LTV to CAC"]].forEach((r,i)=>tile(p8,14+132*i,48,126,96,r[0],r[1],{fill:i===3?C.accentTint:C.white}));
callout(p8,14,154,532,64,"LTV: ","₹12 L × 71% × 5 years = ₹42.6 L, against ₹4 L to win the district");
const p9=pnl(s,1320,806,536,226,"PRICE AGAINST INDIAN HEALTH SOFTWARE");
addRect(p9,14,112,508,28,C.tint,C.ink,1.5); addRect(p9,14,112,4,28,C.primaryDeep); addRect(p9,518,112,4,28,C.primaryDeep);
const mx=14+508*(12-3)/(25-3); diamond(p9,mx,126,16,C.accent);
TL(p9,0,62,22,"₹12 L a district",{color:C.primaryDeep,centerAt:mx});
sTL(p9,14,148,18,"₹3 L, entry HMIS",{family:"Inter",style:"Bold"}); sTL(p9,0,148,18,"₹25 L, enterprise EHR",{family:"Inter",style:"Bold",rightAt:522});
note(p9,14,184,508,"","A vendor-price scan, not a signed price");
results.push({slide:s.id,total:s.findAll(()=>true).length,top:s.children.length}); }
```

## Q.9 Slide 6, Feasibility

<!-- FILE: deck/slides/s06.js -->
```js
{ const s = await figma.getNodeByIdAsync("S6");
skelBT(s,4,"5 / 6","IMPLEMENTATION AND FEASIBILITY",560,V.h6,V.src[5]);
rail(s,64,310,240,"CAN IT RUN",C.primaryDeep); rail(s,64,562,232,"THE PLAN",C.primary); rail(s,64,806,226,"RISKS",C.alert);
// band 1: TELOS, resources, law
const p1=pnl(s,116,310,600,240,"TELOS: THREE GREEN, TWO AMBER");
const TE=[["Technical","reads exports states already run","GREEN"],["Economic","licence is 0.25% of NHM share","GREEN"],["Legal","no patient data in scope","GREEN"],["Operational","needs a daily officer habit","AMBER"],["Schedule","MoU must land in week 1","AMBER"]];
tbl(p1,14,46,[140,300,132],["Test","Evidence","Rating"],TE.map(r=>[r[0],r[1],""]),{hh:26,rh:33,name:"telos"});
TE.forEach((r,i)=>rag(p1,14+440+8,46+26+33*i+4,116,25,r[2]));
const p2=pnl(s,728,310,560,240,"RESOURCES REQUIRED: NO NEW HARDWARE");
tbl(p2,14,46,[150,382],["Resource","What it takes"],[["Data","nightly stock export the state makes"],["Facility IDs","ABDM registry IDs, 1 lakh+ facilities"],["People","nodal officer; DHO signs off daily"],["Devices","phones and PCs in use; offline entry"],["Money","₹12 L licence, ₹3 L onboarding"],["Team","first hire paid by first fee"]],{hh:26,rh:27,name:"resources"});
const p3=pnl(s,1300,310,556,240,"WHY A STATE CAN SAY YES: THE LAW");
tbl(p3,14,46,[170,358],["Instrument","What it means here"],[["State List","each state licenses; data stays home"],["DPDP Act, 2023","no patient data in scope"],["CDSCO 2025","governs stock that could not move"],["GeM","a standing route to buy software"]],{hh:26,rh:30,name:"law"});
note(p3,14,198,528,"Our reading: ","counsel confirms before any contract");
}
// ===== PART 2 =====
{ const s = await figma.getNodeByIdAsync("S6");
// band 2: six-week Gantt, twelve-month timeline
const p4=pnl(s,116,562,760,232,"SIX WEEKS FROM MoU TO A LIVE DISTRICT");
const y0=gnt(p4,14,46,220,85,26,["W1","W2","W3","W4","W5","W6"],[{label:"Data MoU signed",s:0,e:0,color:C.primaryDeep},{label:"Map nightly export",s:0,e:1},{label:"Facility logins",s:1,e:2},
  {label:"Train staff",s:2,e:3},{label:"Shadow mode",s:3,e:4,color:C.accent},{label:"Go live, 2 districts",s:5,e:5,color:C.primaryDeep}]);
diamond(p4,14+220+85*5,y0+26*4+13,11,C.alert);
const p5=pnl(s,888,562,968,232,"TWELVE MONTHS: FROM 1 TO 12 DISTRICTS");
addRect(p5,30,70,904,2.5,C.ink);
[["M1","Data MoU signed, first district"],["M1.5","First district live"],["M2 to 3","Shadow review: adoption gate"],["M4 to 6","Districts 2 and 3, same state"],["M7 to 9","Second state MoU: data gate"],["M10 to 12","Districts 4 to 12 live"]].forEach((r,i)=>{
  const x=14+158*i; addEllipse(p5,x+74-7,64,14,14,i%2?C.accent:C.primaryDeep,C.ink,1.5); addRect(p5,x+73,78,2,14,C.ink);
  const f=addFrame(p5,x,92,148,104,i===2||i===4?C.accentTint:C.white,C.ink,1.5,"MILESTONE"); sTL(f,8,2,20,r[0],{color:C.primaryDeep,maxW:132}); sT(f,8,34,132,18,r[1],{family:"Inter",style:"Semi Bold"}); });
[2,4,5].forEach(i=>diamond(p5,14+158*i+104,71,9,C.alert));
diamond(p5,24,214,8,C.alert); sTL(p5,40,203,18,"NITI Aayog's quarterly Delta Ranking: three outside checks in year 1",{family:"Inter",style:"Bold",color:C.primaryDeep});
// band 3: risk heat map, stop rules, validation plan
const p6=pnl(s,116,806,560,226,"SIX RISKS, EACH WITH A FIX");
["I low","I med","I high"].forEach((l,j)=>sTL(p6,0,48,18,l,{family:"Inter",style:"Bold",centerAt:122+64*j}));
const RG=[["R5","R1",""],["","R3 R6","R2"],["","","R4"]], RF=[[C.accentTint,C.accent,C.alert],[HG[1],C.accentTint,C.accent],[HG[1],HG[1],C.accentTint]];
["P high","P med","P low"].forEach((l,i)=>{ sTL(p6,14,74+48*i+13,18,l,{family:"Inter",style:"Bold",maxW:72});
  RG[i].forEach((c,j)=>bx(p6,90+64*j,74+48*i,64,48,c,{fill:RF[i][j],size:18,pad:2})); });
bl18(p6,296,50,250,[["R1 ","freshness flag on data"],["R2 ","buffer when use rises"],["R3 ","alert on an idle queue"],["R4 ","one keen district first"],["R5 ","offline entry, sync"],["R6 ","hire from pilot fees"]],{gap:7});
const p7=pnl(s,688,806,560,226,"THREE STOP RULES, WRITTEN IN ADVANCE");
tbl(p7,14,46,[140,392],["Rule","Stop if"],[["Adoption","under 50% approved after 4 weeks"],["Data","no MoU in 8 weeks, in two states"],["Expiry","pilot expiry share under 6.1%"]],{hh:26,rh:30,name:"stop",strip:[C.alert,C.alert,C.alert]});
note(p7,14,170,532,"Funding: ","no investment asked; a paid pilot, or an AIM digital-health grant of up to ₹65 lakh");
const p8=pnl(s,1260,806,596,226,"40 INTERVIEWS PLANNED, NONE DONE");
[["District health officers",10],["Medical officers",9],["District Collectors",8],["Pharmacists",8],["State NHM officials",5]].forEach((r,i)=>{ const y=48+30*i;
  sTL(p8,14,y,18,r[0],{family:"Inter",style:"Bold",maxW:220}); addRect(p8,240,y+3,28*r[1],18,i===0?C.primaryDeep:C.primary,C.ink,1); sTL(p8,240+28*r[1]+6,y,18,String(r[1]),{family:"Inter",style:"Bold"}); });
sT(p8,14,200,568,18,"A plan, not a result: none done yet",{family:"Inter",style:"Bold",color:C.alert});
results.push({slide:s.id,total:s.findAll(()=>true).length,top:s.children.length}); }
```

## Q.10 Slide 7, Impact

<!-- FILE: deck/slides/s07.js -->
```js
{ const s = await figma.getNodeByIdAsync("S7");
skelBT(s,5,"6 / 6","IMPACT AND FUTURE SCOPE",460,V.h7,V.src[6]);
rail(s,64,310,240,"THE NUMBER",C.primaryDeep); rail(s,64,562,232,"HOW IT HAPPENS",C.primary); rail(s,64,806,226,"FUTURE SCOPE",C.alert);
// band 1: the moneyshot, the model, sensitivity
const m=layered(s,116,310,620,233,C.primaryDeep,"CARD: MONEYSHOT");
TL(m,18,8,22,"STOCK-OUT DAYS AVOIDED A YEAR, BASE CASE",{color:C.accent,maxW:584});
TL(m,18,40,72,"1.36 crore",{family:"Poppins",style:"ExtraBold",color:C.accent,maxW:584});
[["72.2% to 86.1%","availability",18,224],["17,412","a district a year",262,166],["355","a facility a year",438,164]].forEach(r=>{
  TL(m,r[2],152,24,r[0],{family:"Poppins",style:"Bold",color:C.white,maxW:r[3]}); sTL(m,r[2],190,18,r[1],{family:"Inter",style:"Bold",color:C.tint,maxW:r[3]}); });
const p1=pnl(s,748,310,560,240,"THE MODEL, ONE LINE AT A TIME");
tbl(p1,14,46,[40,330,162],["#","Step","Value"],[["1","PHCs + CHCs","38,241"],["2","× tracer medicines","7"],["3","× days in a year","365"],["4","× share of days out (1 − 72.2%)","27.8%"],["5","= baseline stock-out days","2.72 crore"],["6","× share removed (base)","50%"],["7","= days avoided a year","1.36 crore"]],
  {hh:26,rh:23,name:"model",align:["LEFT","LEFT","RIGHT"],fills:[null,null,null,null,C.surface,null,C.tint]});
const p2=pnl(s,1320,310,536,240,"SENSITIVITY: EVERY CELL CLEARS 58.6 LAKH");
hgrid(p2,14,46,["66% today","72.2% (mid)","80% today"],["30% cut","50% cut","80% cut"],[[99.7,166.1,265.8],[81.5,135.8,217.3],[58.6,97.7,156.3]].map((r,i)=>r.map((v,j)=>heatG(v,58.6,265.8,i===1&&j===1))),{lw:150,cw:110,rh:40,hh:30,corner:"Availability",name:"sens"});
note(p2,14,204,508,"","Lakh stock-out days avoided a year; base cell 135.8");
}
// ===== PART 2 =====
{ const s = await figma.getNodeByIdAsync("S7");
// band 2: theory of change, scenarios
const p3=pnl(s,116,562,760,232,"THEORY OF CHANGE: FROM A DATA READ TO A STOCKED SHELF");
[["INPUTS","daily stock, bed and staff data states hold"],["ACTIVITIES","flag, propose, approve, move, confirm"],["OUTPUTS","transfers approved the day they are proposed"],["OUTCOMES","fewer stock-out days and less expiry"],["IMPACT","emergency drugs on the shelf when needed"]].forEach((r,i)=>{
  const x=14+146*i; step(p3,x,48,136,160,r[0],null,r[1],i===4?{hfill:C.accent,hc:C.ink,fill:C.accentTint,hs:18}:{hs:18}); if(i<4) arrow(p3,x+137,128,x+145,128,C.ink,2); });
const p4=pnl(s,888,562,968,232,"THREE SCENARIOS AND WHAT EACH ONE ASSUMES");
tbl(p4,14,46,[110,150,130,550],["Case","Days avoided","Availability","Why this cut"],[["Bear, 30%","81.5 lakh","80.5%","a floor well below any reported result"],["Base, 50%","1.36 crore","86.1%","half of eVIN's reported 80% cut in stock-outs"],["Bull, 80%","2.17 crore","94.4%","eVIN's own result, used as a ceiling"]],
  {hh:26,rh:32,name:"scen",fills:[null,C.tint,null]});
sRT(p4,14,178,912,18,"Per district: ","17,412 days a year across about 49 facilities; per facility, 355 days",{leadColor:C.primaryDeep});
sRT(p4,14,204,912,18,"Limit: ","a logistics estimate for 7 tracer medicines, not a count of lives saved",{leadColor:C.alert});
// band 3: people planet profit, horizons, beyond year 3
const p5=pnl(s,116,806,600,226,"PEOPLE, PLANET, PROFIT");
[["PEOPLE",[["43.4%","health spend paid out of pocket"],["58,000","snakebite deaths"]]],["PLANET",[["4.4%","of global emissions, 71% supply chain"],["82.1%","bin unused drugs"]]],["PROFIT",[["71%","gross margin, base case"],["10.65x","LTV to CAC"]]]].forEach((c,i)=>{ const x=14+190*i;
  bx(p5,x,48,184,30,c[0],{fill:i===0?C.primaryDeep:(i===1?C.primary:C.accent),color:i===2?C.ink:C.white,fam:"Poppins",st:"Bold",size:20});
  TL(p5,x,82,24,c[1][0][0],{family:"Poppins",style:"ExtraBold",color:C.primary,maxW:184}); sT(p5,x,118,184,18,c[1][0][1],{family:"Inter",style:"Semi Bold"});
  TL(p5,x,164,24,c[1][1][0],{family:"Poppins",style:"ExtraBold",color:C.primary,maxW:184}); sTL(p5,x,200,18,c[1][1][1],{family:"Inter",style:"Semi Bold",maxW:184}); });
const p6=pnl(s,728,806,600,226,"FUTURE SCOPE: THREE HORIZONS");
[["H1 CORE","0 to 12 months","12 districts, ₹1.44 Cr ARR"],["H2 EMERGING","12 to 36 months","80 districts, base ₹9.6 Cr ARR"],["H3 FUTURE","36 months on","about 780 districts, not projected"]].forEach((r,i)=>{ const x=14+194*i;
  step(p6,x,48,184,140,r[0],r[1],r[2],i===0?{hfill:C.accent,hc:C.ink}:{}); if(i<2) arrow(p6,x+185,118,x+193,118,C.ink,2); });
sRT(p6,14,196,572,18,"Gate: ","each horizon opens only when the last one's gate is met",{leadColor:C.alert});
const p7=pnl(s,1340,806,516,226,"BEYOND YEAR 3: THE SAME LAYER, WIDER");
const ny=bl18(p7,14,48,488,[["Wider basket: ","beyond 7 tracer drugs to full lists"],["Blocks: ","500 aspirational blocks since Jan 2023"],["Same buyer: ","nutrition and agriculture, later"]],{gap:8});
["SDG 3.8","SDG 10.2","SDG 12.3"].forEach((g,i)=>bx(p7,14+164*i,ny+6,156,30,g,{fill:i===0?C.tint:C.white,size:18}));
sT(p7,14,ny+44,488,18,"A contribution to each target, not a measured change",{family:"Inter",style:"Semi Bold"});
results.push({slide:s.id,total:s.findAll(()=>true).length,top:s.children.length}); }
```

## Q.11 Slide 8, Appendix

<!-- FILE: deck/slides/s08.js -->
```js
{ const s = await figma.getNodeByIdAsync("S8");
skelBT(s,-1,"A1 TO A4","APPENDIX",260,V.h8,V.src[7],{labels:RIBAP,counterW:200});
rail(s,64,310,240,"A1 MODEL",C.primaryDeep); rail(s,64,562,232,"A2, A3",C.primary); rail(s,64,806,226,"A4 SOURCES",C.alert);
const p1=pnl(s,116,310,600,240,"A1 MARKET AND UNIT ECONOMICS WORKINGS");
tbl(p1,14,46,[230,342],["Line","Working"],[["TAM","780 × ₹12 L = ₹93.60 Cr"],["SAM","112 × ₹12 L = ₹13.44 Cr"],["SOM, Y3 base","80 × ₹12 L = ₹9.60 Cr"],["Beachhead","41 × ₹12 L = ₹4.92 Cr"],["Gross profit a month","₹12 L × 71% ÷ 12 = ₹0.71 L"],["CAC payback","₹4 L ÷ ₹0.71 L = 5.6 months"],["LTV : CAC","₹42.6 L ÷ ₹4 L = 10.65x"]],{hh:26,rh:23,name:"workings"});
const p2=pnl(s,728,310,560,240,"A1 CUSTOMER PAYBACK FROM AUDITED EXPIRY");
hBars(p2,14,50,532,[{label:"Telangana",value:6.1,text:"6.1%",color:C.primary},{label:"Odisha",value:12.5,text:"12.5%",color:C.accent}],{labelW:150,rowH:46,barH:28,valueW:90,max:15});
callout(p2,14,150,532,76,"Share = ","₹12 L ÷ (audited expiry ÷ years ÷ districts)");
const p3=pnl(s,1300,310,556,240,"A1 REVENUE PATH, ₹ CR, THREE CASES");
tbl(p3,14,46,[150,64,64,70,100,80],["Line","Y1","Y2","Y3","Bill Y3","GM"],[["Bear ARR","1.44","3.60","6.00","6.60","62%"],["Base ARR","1.44","5.40","9.60","10.65","71%"],["Bull ARR","1.44","7.20","12.60","13.95","76%"],["Bear districts","12","30","50","",""],["Base districts","12","45","80","",""],["Bull districts","12","60","105","",""]],
  {hh:26,rh:26,name:"path",align:["LEFT","RIGHT","RIGHT","RIGHT","RIGHT","RIGHT"],fills:[null,C.tint,null,null,C.tint,null]});
}
// ===== PART 2 =====
{ const s = await figma.getNodeByIdAsync("S8");
const p4=pnl(s,116,562,1100,232,"A2 THE ASSUMPTIONS THAT MOVE THE ANSWER");
tbl(p4,14,46,[70,300,200,502],["ID","Assumption","Value","Basis, and how a pilot tests it"],[["A01","Survey-day availability proxy","72.2%","standard proxy; replaced by daily logs"],["A02","Stock-out days removed","30, 50, 80%","eVIN reported 80%; base is half"],
  ["A05","Licence a district a year","₹12 L","₹4 L + ₹7 L + ₹1 L; first signed price"],["A08","Gross margin","62, 71, 76%","Indian SaaS benchmarks; real delivery cost"],["A09","Cost to win a district","₹4 L","team estimate; cost of the first close"],
  ["A12","Districts at year end","12, 45, 80","base path; pace of sign-ups"],["A16","MoU to a live district","6 weeks","a plan; the first district's real time"]],{hh:26,rh:22,name:"assume"});
const p5=pnl(s,1228,562,628,232,"A3 YEAR-3 ARR SENSITIVITY, ₹ CR");
const TX=v=>260+(v-5)*300/8;
dashedV(p5,TX(9.6),70,140,C.ink,2); sTL(p5,0,46,18,"base 9.6",{family:"Inter",style:"Bold",centerAt:TX(9.6)});
[["Districts, 50 to 105",6.00,12.60],["Licence, ₹9 L to ₹15 L",7.20,12.00],["Facilities, 35 to 65",7.92,11.28]].forEach((r,i)=>{ const y=76+46*i;
  sTL(p5,14,y+4,18,r[0],{family:"Inter",style:"Bold",maxW:230}); addRect(p5,TX(r[1]),y,TX(9.6)-TX(r[1]),30,C.accent,C.ink,1.5); addRect(p5,TX(9.6),y,TX(r[2])-TX(9.6),30,C.primary,C.ink,1.5);
  sTL(p5,0,y+4,18,r[1].toFixed(2),{family:"Inter",style:"Bold",rightAt:TX(r[1])-6}); sTL(p5,TX(r[2])+6,y+4,18,r[2].toFixed(2),{family:"Inter",style:"Bold"}); });
sRT(p5,14,206,600,18,"Reading: ","the pace of district signing moves Y3 ARR most",{leadColor:C.primaryDeep});
const p6=pnl(s,116,806,860,226,"A4 SOURCES THE DECK LEANS ON");
const BIB=["S01 MoHFW, Health Dynamics of India 2022-23","S02 PMC8654139, Puducherry availability study","S03 PMC10292169, Gadag Taluk availability","S44 Kotwani et al. 2015, Punjab and Haryana",
  "S06 Suraweera et al. 2020, eLife, snakebite","S10 MoHFW, National Health Accounts 2022-23","S12 UNDP India, eVIN programme page","S13 Constitution, Seventh Schedule, List II",
  "S14 Digital Personal Data Protection Act 2023","S15 C-DAC, e-Aushadhi (DVDMS)","S16 CAG Telangana via Medical Dialogues 2024","S17 CAG Odisha via UNI, Oct 2026",
  "S18 PRS, Demand for Grants 2025-26, Health","S19, S20 NITI Aayog, aspirational districts","S21 PIB, ABDM statistics, Jul 2026","S25, S26 Codingclave, upGrowth, 2026"];
BIB.forEach((b,i)=>{ const t=addText(p6,"Inter","Semi Bold",16,C.ink,b,14+420*Math.floor(i/8),48+21*(i%8),412,21,"LEFT","CENTER",false); t.name="BIBLIO"; });
const p7=pnl(s,988,806,868,226,"A4 SHORT FORMS USED ON THIS DECK");
tbl(p7,14,46,[84,336,84,336],["Short","Meaning","Short","Meaning"],[["PHC","primary health centre","CHC","community health centre"],["NHM","National Health Mission","DHO","district health officer"],["CAG","Comptroller and Auditor General","OOP","out-of-pocket spending"],
  ["ABDM","Ayushman Bharat Digital Mission","ABHA","Ayushman Bharat Health Account"],["eVIN","electronic vaccine network","DVDMS","drug and vaccine ledger"],["ARR","annual recurring revenue","CAC","cost to win a customer"],["MoU","memorandum of understanding","ARV","anti-rabies vaccine"]],{hh:26,rh:22,name:"short",bold:[2]});
results.push({slide:s.id,total:s.findAll(()=>true).length,top:s.children.length}); }
```

## Q.12 Slide 9, Thank you

<!-- FILE: deck/slides/s09.js -->
```js
{ const s = await figma.getNodeByIdAsync("S9"); wipe(s);
TL(s,0,96,112,"THANK YOU",{family:"Poppins",style:"ExtraBold",color:C.ink,centerAt:960});
const c=layered(s,260,300,1400,214,C.primaryDeep,"CARD: therefore");
TL(c,28,14,26,"THEREFORE",{color:C.accent});
T(c,28,62,1344,24,"Before India buys more medicine, it should move what each district already owns: one morning view, one ranked transfer, one officer's sign-off, and an estimated 1.36 crore stock-out days avoided a year in the base case.",{family:"Inter",style:"Semi Bold",color:C.white});
["1.36 crore days a year, an estimate","₹12 L a district, 0.25% of its NHM share","6 weeks from MoU to a live district"].forEach((g,i)=>bx(c,28+448*i,138,430,48,g,{fill:C.accent,fam:"Poppins",st:"Bold",size:20}));
TL(s,0,552,40,V.team.name,{family:"Poppins",style:"ExtraBold",color:C.primary,centerAt:960});
teamBT(s,440,620,[300,560,180]);
[["NSUT",150],["Space and Beyond",180],["DTU",150],["GGSIPU",150]].reduce((x,l)=>{ logoSlot(s,x,800,l[1],72,l[0]); return x+l[1]+24; },960-(630+72)/2);
TL(s,0,900,22,"The prototype and its user flow are demonstrated in Round 2",{family:"Inter",style:"Bold",color:C.primaryDeep,centerAt:960});
sTL(s,0,940,18,"harshkawatra11@gmail.com  |  Team IdeaForge  |  Space & Beyond 2026, NSUT",{family:"Inter",style:"Bold",centerAt:960});
srcLine(s,V.src[8]);
results.push({slide:s.id,total:s.findAll(()=>true).length,top:s.children.length}); }
```

## Q.13 Figma utility scripts and the PDF builder

<!-- FILE: deck/logo_probe.js -->
```js
// Read-only. Run on the NEXORA file O0YlsAbRsIqQqSugUDWrxJ. Lists every image node on its cover with its parent node's text.
const s = await figma.getNodeByIdAsync("2:2"); const out = [];
for (const n of s.findAll(q => "fills" in q && Array.isArray(q.fills) && q.fills.some(f => f.type === "IMAGE"))) {
  const p = n.parent; const txt = p && p.findAll ? p.findAll(q => q.type === "TEXT").map(t => t.characters).join(" ") : "";
  out.push([n.id, txt.slice(0, 80), Math.round(n.width), Math.round(n.height)]); }
return out;
```

<!-- FILE: deck/logo_rects.js -->
```js
// Replace MAP with {"<slot id>": [pngWidth, pngHeight], ...} (at most 8 slots a call). Creates an IMG rectangle fitted to the
// PNG's aspect inside each LOGO slot, removes the slot's caption and dash pattern, and returns the rectangle ids for upload_assets.
await figma.loadFontAsync({family:"Inter",style:"Semi Bold"});
const MAP = {}; const out = [];
for (const [id, wh] of Object.entries(MAP)) { const slot = await figma.getNodeByIdAsync(id); if (!slot) { out.push({id, error: "missing"}); continue; }
  slot.children.filter(c => c.type === "TEXT").forEach(c => c.remove()); try { slot.dashPattern = []; } catch (e) {}
  const W = slot.width - 6, H = slot.height - 6, k = Math.min(W / wh[0], H / wh[1]), w = Math.max(4, wh[0] * k), h = Math.max(4, wh[1] * k);
  const r = figma.createRectangle(); slot.appendChild(r); r.resize(w, h); r.x = (slot.width - w) / 2; r.y = (slot.height - h) / 2;
  r.fills = []; r.strokes = []; r.name = "IMG"; out.push({slot: slot.name, rect: r.id, w: Math.round(w), h: Math.round(h)}); }
return out;
```

<!-- FILE: deck/make_pdf.py -->
```python
"""Build deck/TeamIdeaForge_SpaceAndBeyond.pdf from deck/shots/hi_s01.png .. hi_s09.png, one 1920 x 1080 page each."""
import pathlib, fitz
D = pathlib.Path(__file__).resolve().parent; doc = fitz.open()
for n in range(1, 10):
    p = D / "shots" / ("hi_s%02d.png" % n); assert p.exists(), p
    page = doc.new_page(width=1920, height=1080); page.insert_image(page.rect, filename=str(p))
out = D / "TeamIdeaForge_SpaceAndBeyond.pdf"; doc.save(str(out)); print("pages", doc.page_count, "->", out)
```

<!-- FILE: deck/checks.py -->
```python
"""Cross-checks before G-D: dashes, '!', 'Rs' before a digit, placeholders and invented-name candidates in slide-copy.md."""
import io, re, pathlib
D = pathlib.Path(__file__).resolve().parent; t = io.open(D / "slide-copy.md", encoding="utf-8").read()
print("dashes", len(re.findall("[\u2014\u2013]", t)), "excl", t.count("!"), "rs", len(re.findall(r"\bRs\.? ?\d", t)),
      "placeholders", len(re.findall(r"TODO|TBD|Lorem|Insert|xyz|PLACEHOLDER", t)))
ALLOW = {"Team IdeaForge", "Delhi Technological University", "Guru Gobind Singh Indraprastha University", "National Health Mission",
         "Ayushman Bharat", "Government of Rajasthan", "District Collector", "State List", "Seventh Schedule", "Health Dynamics",
         "National Health Accounts", "Medical Dialogues", "Delta Ranking", "Digital Personal Data Protection Act", "Puducherry",
         "Ayushman Bharat Digital Mission", "Ayushman Bharat Health Account", "Comptroller and Auditor General", "Space and Beyond",
         "Demand for Grants", "Constitution", "Round"}
cands = sorted(set(re.findall(r"\b(?:[A-Z][a-z]+\s){1,3}[A-Z][a-z]+\b", t)) - ALLOW)
print("name candidates to review", len(cands)); [print("  ", c) for c in cands]
```

## Q.14 Round 2 Q&A brief

<!-- FILE: qa/round2-qa.md -->
```markdown
# SwasthyaGrid, Round 2 Q&A brief (Space & Beyond 2026, NSUT)

Every answer below is drawn from `swasthyagrid-gcp/nexora/research/swasthyagrid-nexora-research.md` (section in brackets).
Keep the fixed fact in each answer; change the opening words to match the judge's question.

## The idea

1. **Why a state would pay when e-Aushadhi exists.** e-Aushadhi records what was bought and issued; it does not rank which
   facility should send stock to which or put a proposal in front of an officer. ₹12 L is 0.25% of an average district's
   central NHM share, and in the two audited states a district loses ₹0.96 Cr to ₹1.97 Cr a year to expiry; the licence
   repays itself at 6.1% to 12.5% of that (§17 Q1, §6.3, §9.5).
2. **Whether a ₹93.6 Cr market is too small.** It is the honest bottom-up number, about 780 districts at ₹12 L; 80 districts
   by year 3 earn ₹9.6 Cr of recurring revenue on a 71% gross margin (§9.4, §11.1).
3. **Whether 1.36 crore stock-out days is measured.** No. It is an estimate from a stated model: 38,241 facilities × 7 tracer
   medicines × 365 days × 27.8% baseline unavailability, cut by 30%, 50% or 80% (§14.1, §14.2).
4. **What stops a large vendor copying the feature.** Nothing stops the attempt. A ledger product would have to take on a
   named-officer approval step and a permanent audit trail, an accountability commitment rather than a small software
   change; our advantage today is process, not a moat, and we say so (§10.3 to §10.5).

## The prototype

5. **How the prototype relates to the deck.** The deck presents the idea; the prototype demonstrates the user flow (morning
   view, flag, ranked proposal, approve, confirm) on simulated data for 40 facilities in 5 Rajasthan districts. No district is
   live and no interview has been done (§8.6, §0.4).
6. **How the prototype becomes a real product.** A signed data MoU, a nightly read of the state's existing e-Aushadhi or HMIS
   export, facility logins, training, two weeks of shadow mode, then go-live in two districts: six weeks (§13.2, §13.3).

## Implementation and feasibility

7. **Why an officer would open another tool.** It removes the phone calls officers already make to find surplus; shadow mode
   tests trust first, with a stop rule if fewer than half of proposals are approved after four weeks (§13.2, §15.2).
8. **Whether states will share data.** The data is stock, bed and roster counts with no patient identity, so the DPDP Act's
   core duties are not triggered; health is a State subject, so each state's data stays with that state (§13.4).
9. **Why two ambers.** Operational (a daily habit no district has formed yet) and schedule (the MoU must land in week 1) are
   the two tests another organisation controls; rating them green would claim evidence we do not have (§13.1, §13.9).
10. **Who is responsible if a transfer leaves the sender short.** The officer who approved it, as with a paper indent today;
    the system never moves stock by itself (§17 Q5, §8.8).

## Future scope

11. **What comes after year 3.** Horizon 3 opens only when three states each run at least five districts with stable renewals;
    no revenue is projected past year 3 because the model is built to year 3 (§15.1, §15.5).
12. **Where the same layer goes next.** A wider basket beyond the 7 tracer medicines, the 500 aspirational blocks launched in
    January 2023, and the same District Collector's nutrition and agriculture lines, as later options (§9.8, §14.9).
13. **Why not wait for a national system.** eVIN started in 12 states in 2015 and reached 36 States and UTs only after a second
    funded round; state-by-state is how comparable systems have scaled in India (§15.1, §17 Q25).
```
