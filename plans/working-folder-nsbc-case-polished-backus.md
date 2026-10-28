# Toing: Swiggy's ₹99 Problem (NSBC, Consilium'26, NSUT): research, primary research, model and Figma deck plan

> **Who executes this.** A Sonnet-class main agent, plus Sonnet sub-agents dispatched with the
> Agent tool (`subagent_type: "general-purpose"`, `model: "sonnet"`).
>
> **The job is execution, not design.** This plan fixes the following in advance:
> - the case answer, the argument and every headline
> - every number, or the formula plus inputs that produce it (the model is verbatim code with
>   reference outputs that were verified while planning)
> - the primary-research instruments (survey text, cart-sampling protocol, analysis code)
> - the research-document outline, its writers and their prompts
> - all slide copy, coordinates and helper calls
>
> Paste, run and validate. Do not rewrite the argument, re-derive numbers, invent layout or add
> slides.
>
> **When a validator flags something**, apply the fix rule in §14 for that issue type and nothing
> broader.
>
> **When research or primary data contradicts a default in this plan,** follow the update
> protocol in §5.5 (research) or §6.6 (primary data). It is mechanical: a sourced or measured
> figure replaces the plan's default only when the rule says so. The change is logged, the model
> is re-run, `deck/values.js` is regenerated, and the affected slides are rebuilt, so every
> downstream number moves together.
>
> **Skill usage is mandatory at six named touchpoints (§3.6).** The `case-competition-deck` skill
> engineered the argument in §3. Executors invoke it at those touchpoints to check their work, not
> to re-engineer it.
>
> **The clock is the hardest constraint.** The prelims PDF is due **30 Sep 2026, 11:59 PM IST**.
> The deck is the only thing judged at prelims. The critical path in §15 puts the deck first and
> the research document in parallel. Never let the document delay the deck.

---

# PART II: DECK EXECUTION PLAN (v2, 30 Sep 2026). READ THIS FIRST. IT OVERRIDES ANYTHING BELOW IT.

> **Deadline: prelims PDF due today, 30 Sep 2026, 11:59 PM IST.** Target: Figma deck built and
> checked by 8 PM, user exports and submits by 10 PM.
>
> **Executors are Sonnet-class.** Everything that needs judgment has already been decided below. Your
> job is to follow the steps in order, paste code exactly, run the checks, and apply only the fix
> rule that matches a flagged issue. When in doubt, stop and report; do not improvise content.

## II.0 Where things stand, and what changed today

**Done and verified (do not redo, do not rewrite):**
- Research deliverable: `nsbc-case/research/toing-research.md` and `.pdf` (72 pages, 33,742 words,
  118 tables, 0 dashes, 0 banned phrases). Built by `research/assemble.py` + `research/build_pdf.py`.
- Model: `nsbc-case/model/toing_model.py` → `model_outputs.json`; `make_tables.py` →
  `model_tables.md`; `export_values.py` → `deck/values.js`. Reference outputs in §7 of this plan.
- Deck code: `nsbc-case/deck/preamble.js` (the only helper library to use), `deck/values.js`,
  `deck/slides/s01.js` to `s11.js`, `deck/mock_figma.js` (offline pre-flight). All 11 slides passed
  the mock with 0 issues on 29 Sep.
- Figma connector: connected. `whoami` returns Harsh Kawatra with plan key
  **`team::1564294484048272772`** (his own team, admin). Use this key.

**User decision on 30 Sep: no survey and no cart audit.** Use public data only. Consequences:
1. No slide, table, source line or research-document section may mention a survey, cart audit,
   "primary research", "n =", respondents or placeholders. The words "survey", "cart",
   "primary research" and "to be filled" must appear **zero** times in the deck.
2. Slide 4's lower band and slide 10's method box are replaced by the tested code in §II.4.
3. The research document's §10 is rewritten as "Evidence base" and every survey reference in it is
   removed (§II.5).
4. The `P` object in `values.js` stays (empty) and is harmless; no slide may read from `P` after
   §II.4 is applied.
5. Insight (20% of the score) now rests on three analytical findings, not fieldwork: the trip, not
   the price, is the loss (slide 3); density turns a ₹99 order positive at 3.3 meals a run (slide
   5); the funnel costs 9.0 times paid CAC by construction (slide 6). Plus the triangulation of
   Toing's loss from Swiggy's own segment data (slides 2 and 3).

**Never:** change the recommendation, a number, a headline's meaning, the slide order or the slide
count (11); add slides; invent data or quotes; paste `deck-system/figma-deck-kit.js` (it is
superseded by `deck/preamble.js`, which carries four fixes the kit lacks); call Figma from more
than one agent at a time.

## II.0b Calibration against the inspiration decks (done by Opus on 30 Sep; results are binding)

Opus opened the reference decks read-only and compared them with our slide code. Sonnet does not
repeat this analysis; it only re-checks its built slides against the reference screenshots (§II.7
step 4b).

| Reference | File key | What was measured | Result |
|---|---|---|---|
| Satoshi Gate (M&A Masterminds, shortlisted; the prime inspo) | `hOJVMGv9nIhDmayTT7DmOt` | Core slides 5:4 to 5:16: 131 to 302 nodes (mean ~200). Slide 5:4 (exec summary): ribbon + section chip + 2-line action headline + Board-question strip + two red/green verdict panels with big numerals + three bottom panels (numbered approvals, scored bars, output map). Slide 5:7 (valuation): five panels, football field with in-chart dashed "Fair value" and "Price" markers, bar chart with dashed threshold, heat-shaded sensitivity grid, peer bars, precedent table, source line bottom right | Same structural system as ours (ribbon, punch-holes, sticker cards, ink strokes, radius 0, 22pt floor, panel titles in caps with rule). Our node counts: s02 215, s03 165, s04 224, s05 325, s06 341, s07 166, s08 269, s09 275, s10 258, so **at or above** Satoshi density. No structural rework needed |
| Second inspo | `e5VEexsLMhDampx7gvhFmM` | Slides 2:5 to 2:12: 99 to 147 nodes; big-numeral horizon cards, S-curve line, numbered list, bar chart, risk heatmap with 1:1 mitigations | Lighter than ours; confirms the forms we use (line, bars, heatmap, numbered badges, layered cards) |
| Earlier decks in this repo | ConsentGrid `2uKgT9OUWIhGR3qjn4IsnG`, NavSight `Bd2X2Akr7c4qm0ZogqvUcd` | Motif source for CLAUDE.md §2 and §3 | Motifs already encoded in `deck/preamble.js` |

**Language audit of all 11 slide scripts (Opus, 30 Sep):** 0 em or en dashes, 0 banned words, 0
question-form copy, 0 survey or primary-research words. Keep it that way: any text Sonnet changes must
be re-audited with the V4 sweep.

## II.0c The Sonnet execution contract (read twice; violations fail the task)

**DO**
1. Execute steps in the exact order of §II.4 to §II.11. One step at a time; confirm the expected
   output before moving on.
2. Paste code blocks from this plan byte for byte. Paste `deck/build_bound/slide_NN.js` whole into
   `use_figma`.
3. Change slide content only by editing `deck/slides/sNN.js`, then regenerating the build scripts
   (§II.4 f), re-binding ids (§II.6 step 6), re-running the mock (§II.4 g), then re-running that slide.
4. After every slide: run V1, take the screenshot, read it, compare it with the reference checklist in
   §II.7 step 4b, log the result in `deck/figma.md`.
5. Use the case-competition-deck skill at the touchpoints named in §II.9 and §II.12, and write one log
   line per touchpoint in `deck/figma.md`.
6. Keep every number exactly as produced by `values.js`. If a number looks wrong, stop and report; do
   not edit it.
7. When a validator flags something, apply only the matching fix rule in §II.7.

**DO NOT**
1. Do not rewrite headlines, the recommendation, or any claim. The only text changes allowed are the
   shortenings allowed by the fix rules and the SA-3 wording fixes the main agent accepts.
2. Do not add, remove or reorder slides; the deck is exactly 11.
3. Do not add charts, panels or decoration to "fill" space. If a slide looks thin, report it.
4. Do not use `deck-system/figma-deck-kit.js`, any other helper library, imported images, icons,
   screenshots or emoji. Everything is native vector from `preamble.js`.
5. Do not write em dashes (—), en dashes (–), hooks, rhetorical questions, or any banned word
   (§II.3b rule 4) anywhere: slides, logs shown to the user, or the research document.
6. Do not mention a survey, cart audit, respondents or "primary research" anywhere in the deck.
7. Do not set `x`/`y` before `appendChild`, do not rotate rectangles to draw lines, do not use
   `loadAllPagesAsync`, `setPluginData` or `createImageAsync` (Figma MCP limits).
8. Do not call `use_figma` from a sub-agent or in parallel. Do not create a second Slides file or a
   second set of slides; re-run Script B to recover ids instead.
9. Do not spend effort re-deriving the argument, re-researching facts or redesigning layouts. All of
   that is done. Execution only.

**Status update (30 Sep, 08:15 IST):** SA-1 (§II.4) and SA-2 (§II.5) are **complete and verified**.
All 11 slides are free of survey references and pass the mock with 0 issues (slide 2's source line was
also cleaned); the research document is reassembled (32,445 words, 113 tables, 0 dashes, 0 banned
words) and `toing-research.pdf` is rebuilt (70 pages). **Do not re-run §II.4 or §II.5.**

**Status update (30 Sep, live build in progress):** Figma file created and live:
`https://www.figma.com/slides/JLOOyohkQPUrwXEsxDKz4m` (fileKey `JLOOyohkQPUrwXEsxDKz4m`). 11 slides
created, named, ids recorded in `deck/slide_ids.json` and `deck/figma.md` (S1=2:2 ... S11=2:13). Fonts
verified. Ids bound into `deck/build_bound/slide_01.js` to `slide_11.js`.
- **Slide 1 (Cover, 2:2): DONE.** 61 nodes, V1 clean, screenshot verified against checklist. Two
  dashed `LOGO:` placeholders present (Swiggy, NSUT FES) satisfying the user's 1-2 logo placeholder
  request. Do not add more logo placeholders elsewhere.
- **Slide 2 (Executive Summary, 2:4): DONE.** 215 nodes, V1 clean, screenshot verified: 8-tag ribbon,
  RAG chips, vBars chart, layered verdict card, stacked bar, board checklist table, so-what bar. Matches
  Satoshi Gate density and structure.
- **Slides 3 to 11: NOT YET BUILT.** Resume at §II.7 step 1 for slide 3 (`build_bound/slide_03.js`,
  id `2:5`): paste its full contents into `use_figma` with `fileKey JLOOyohkQPUrwXEsxDKz4m`, run V1,
  screenshot, check against §II.7 step 4b, log in `deck/figma.md`, then proceed to slide 4, 5, ... 11
  in order. Do not skip the per-slide V1 + screenshot + checklist + log cycle for any remaining slide.
  After slide 11, run §II.8 whole-deck sweeps, then §II.9 (SA-3 critique), then §II.11 (finish).

## II.1 Roles and dispatch

| Agent | Type | Does | Never does |
|---|---|---|---|
| **Main (orchestrator)** | the session itself | Reads everything in §II.2; dispatches SA-1 and SA-2 in one message; does Figma setup (§II.6) while they run; builds all 11 slides in Figma (§II.7); runs sweeps (§II.8); dispatches SA-3; applies SA-3's wording fixes; final report | Delegates any `use_figma` call |
| **SA-1 Slide surgeon** | `general-purpose`, `model: "sonnet"` | §II.4: edits `s01`, `s04`, `s10`, `s11`; regenerates build scripts; runs the mock on all 11; reports issue counts | Touches Figma; changes other slides |
| **SA-2 Document reviser** | `general-purpose`, `model: "sonnet"` | §II.5: removes the survey from the research document, reassembles, rebuilds the PDF, runs checks | Touches the deck or the model |
| **SA-3 Critic** | `general-purpose`, `model: "sonnet"` | §II.9: critique mode of the skill on the 11 screenshots; returns at most 8 in-place wording fixes | Proposes layout, new content or new slides |

**Why Figma stays with the main agent:** MCP connector tools are bound to the main session and
concurrent writes to one Slides file interleave node creation. Only one agent calls `use_figma`.

Sub-agent prompts are in §II.10. Paste them verbatim.

## II.2 Mandatory reading (every agent reads its rows before acting)

| File | Who | What to take from it |
|---|---|---|
| `CLAUDE.md` (repo root) | Main, SA-1, SA-3 | §0 two-layer pipeline (content engineering then visual execution); §1 EY density doctrine (zero dead space, bands and rails, 4 to 5 type levels, charts paired with tables, in-chart annotations, commentary panels, formula callouts, sources bottom-right); §2 fixed rules (radius 0, 2 to 2.5px ink strokes, layered sticker cards, 22pt floor, Poppins/Inter style strings); §5 content integrity; §7 failure modes. `preamble.js` already handles §7.1 (append before positioning), §7.2 (text wrap via `textAutoResize`), §7.7 (font loads), §7.10 (lines drawn as vectors, never rotated rectangles). **The palette in CLAUDE.md §2 is replaced by this plan's §10.1 Swiggy-orange palette; the structure is unchanged.** |
| `deck-system/slide-archetypes.md` | Main, SA-1 | Recipes for each visual form. Map: waterfall = "Break-even line chart / stacked bar" family; heatmap = "Weighted scoring matrix"; game tree = "Decision / strategy tree"; flow = "Punch-hole + wire strip"; Gantt = "Alternating icon timeline" variant; tornado = "Tornado / sensitivity chart"; phone = "Native UI mockups" (text still ≥ 22pt). |
| `deck-system/figma-deck-kit.js` | Main (skim only) | Understand what each helper does. **Do not paste it.** `deck/preamble.js` is the kit plus fixes and new helpers (`RT`, `stackV`, `tornado`, `flow`, `gauge`, `numCard`, `soWhat`, `heatmap`, `gantt`, `vBars`, `lineChart` with vector lines). |
| `.claude/skills/case-competition-deck/SKILL.md` | Main, SA-3 | Invoke with the Skill tool (name `case-competition-deck`; if the listing shows `anthropic-skills:case-competition-deck`, use that). Meta-playbook A (contrarian), C (8 sections), E (10 rhetorical tactics). |
| `…/references/structure.md` | Main | The 8-section blueprint and the compression rules (see §II.3 for our mapping). |
| `…/references/rhetoric.md` | Main, SA-3 | §2 foreshadow, §3 symmetric treatment, §5 three scenarios, §6 pre-empt weaknesses, §7 named third-party validation, §9 double synthesis, §10 action titles, §12 moneyshot visual rules, §15 polish failures. |
| `…/references/archetypes.md` | Main | H (exec summary), I (two-chart workhorse), J (multi-chart dense), P and P-supplement (moneyshot with decomposition), R (3-path), V ("Conclusively" closer), W (conclusion synthesis). |
| `…/references/critique_rubric.md` | SA-3 | Phase 1 pass/fail, Phase 2 seven dimensions, Phase 3 top issues. Items that do not apply because of the case's 10-slide cap are listed in §II.9. |
| `…/references/case_types/strategy.md`, `operations.md`, `marketing.md` | Main | This case is a strategy decision (Board, one recommendation), whose arithmetic is an operations problem (cost per trip, density) and whose funnel option is a marketing problem (CAC, LTV). |
| Memory (auto-loaded): `feedback_no_em_dash_no_hooks.md`, `feedback_cover_style.md`, `feedback_no_coauthor_trailer.md` | All | Writing rules, cover rules, no co-author trailer on commits. |
| This plan: Part II, then §1, §3, §9, §10, §11 | All | The argument, the design system, the preamble. |
| `nsbc-case/research/toing-research.md` §2, §5, §7 to §9, §11 to §15 | SA-3 | The source for every claim on a slide. |

## II.3 How the skill maps onto an 11-slide deck (compression per structure.md)

The case caps the deck at 10 slides plus cover and a 5-slide appendix. structure.md says: keep the
8-section logic, compress each section to one dense slide, never cut the exec summary, the moneyshot,
the synthesis, or sources.

| Skill section | Our slide | Archetype | Board item | Skill tactic carried |
|---|---|---|---|---|
| Front matter | 1 Cover | A (cover) | none | No nav bar; verdict card; team table (memory rule) |
| I Executive summary | 2 Summary | H | all (checklist strip) | Recommendation in the headline; "why not the obvious options" vs "our call" columns; moneyshot repeated small |
| II Context (unit economics) | 3 Unit math | I (two-chart) | B1 | Action title with numbers; waterfall + table pairing (EY) |
| II Context (seed) + III Actors (customer) | 4 Customer | J (multi-chart) | J3 insight | **Foreshadow**: "every low-basket model that survived moved the trip cost off the order" |
| IV Quantitative analysis A | 5 Levers | I + heatmap | B2 | Formula callout; density curve with in-chart breakeven marker |
| IV Quantitative B + V Feasibility | 6 Options | L (symmetric grid) + K | B3 | **Symmetric treatment** of Scale, Funnel, Kill, Rebuild; three scenarios; "Conclusively" card (V) |
| VI Recommended alternative + moneyshot | 7 The call | P + P-supplement + T | O4 | **Moneyshot** ₹1,745 Cr, largest numeral in the deck, decomposed; named third-party quotes |
| III Actors (rivals) + V Feasibility (regulatory) | 8 Rivals | game tree + L | B4 | Competitive response modelled, not asserted |
| VII Conclusion + implementation | 9 Signals | U + W | B5 | Pre-empted weaknesses (flip points); "Therefore" synthesis in the so-what bar (**double synthesis** with slide 6) |
| Appendix | 10 Appendix | X (compressed) | R3 | Defensive depth; every assumption labelled |
| Close | 11 Thank you | none | none | Centred, same team table (memory rule) |

## II.3b Writing standard for every word on a slide (checked by V4 and by SA-3)

1. **Headlines are findings, never topics.** Full sentence, declarative, at least one number, at most
   2 lines at 34 to 40pt. Test: a Board member who reads only the headline knows the conclusion.
   - Bad: "Unit economics of Toing". Good: "A ₹99 Toing order loses about ₹27 before marketing,
     because a ₹40 rider trip sits on ₹23 of Swiggy revenue…"
2. **No hooks.** No questions in the slide's own voice, no "imagine", no suspense, no teasers. Hooks
   belong in speeches. A quoted question is allowed only as reported speech in the research doc's
   Q&A section, never on slides.
3. **Humanised analytical voice.** Write the way a consultant writes to a Board: plain verbs, concrete
   nouns, the number next to the claim, varied sentence length. Prefer "Swiggy can switch on four
   levers itself this month" over "Swiggy can leverage several controllable levers".
4. **Banned (0 hits allowed, case-insensitive):** delve, landscape, unlock, game-changer, here's,
   let's, bottom line, it's not just, make no mistake, in today's, fast-paced, seamless, leverage
   (verb), robust, tapestry, testament, navigate the, realm, holistic, synergy, paradigm,
   cutting-edge, revolutionize, crucial, pivotal, furthermore, moreover, in conclusion, it is worth
   noting, survey, cart, primary research, to be filled.
5. **Punctuation:** zero em dashes (—) and zero en dashes (–). Ranges are "to". Negatives use "−"
   (U+2212), which the preamble's `fmtN`, `n1`, `r1`, `cr` helpers already produce.
6. **Numbers:** ₹ with Indian grouping (₹1,745 Cr, ₹14,367 Cr); "lakh" and "Cr"; one decimal only
   where the model gives one (−₹27.3, +₹5.7); estimates say "est." or "(est.)"; assumptions carry
   their A-ID on slide 10.
7. **Every claim is research-backed.** Each number on a slide traces to one of: the case (C01 to
   C14), a source S01 to S15 (plan §5.1, research doc Appendix A), or `model_outputs.json`. Slide
   text is built from `V.*` values, never typed-in numbers, except the public figures already in the
   slide code (33M, 14.5M, ₹346, ₹486, ₹131 Cr, ₹30, 60k), each of which is in `research/raw/`.
8. **Every core slide ends with a so-what bar** (the `soWhat()` helper, y948, h82) stating the
   implication in one sentence, and a source line starting "Source:" (14pt, bottom right,
   pipe-separated).

## II.3c Density and design standard (Satoshi Gate level, the user's choice)

- 1920 × 1080 slides; content zone y318 to 1030; radius 0 everywhere; 2 to 2.5px ink strokes;
  layered sticker cards (gold back-card offset 7px); ribbon with punch-holes and wires on slides 2 to
  10; counter chip "N / 8" (appendix "A1").
- **22pt floor** for all text except: source lines (14pt), `LOGO:` labels (14pt), and `BIBLIO` lines
  on slide 10 (16pt).
- **At least 8 distinct forms per core slide, at least 3 of them data visualisations; 150 to 420
  nodes per core slide.** Current forms (keep them all):

| Slide | Hero exhibit | Other forms |
|---|---|---|
| 2 | 3-year result by path (signed bars) | RAG chips, RT commentary, layered verdict with badges, stacked bar (loss split), Board checklist table, dashed divider, so-what |
| 3 | Waterfall of the customer's ₹116 | comparison table, full-width formula, donut, horizontal bars, triangulation panel, so-what |
| 4 | Precedent table (the seed) | 2×2 numeral grid, band rail + chip, two horizontal-bar charts, stacked bar, RT, so-what |
| 5 | Lever waterfall | control heatmap, density line chart with breakeven marker, rider-pay bars, formula box, so-what |
| 6 | Signed bars by path + funnel line chart | funnel table with total row, weighted heatmap, formula (weights), "Conclusively" card, so-what |
| 7 | Moneyshot waterfall + ₹1,745 Cr card | phone mockup, 4 number cards, 5-step flow, named quote strip, so-what |
| 8 | Game tree | rival table, payoff heatmap, regulatory bars, commentary card, so-what |
| 9 | Three flip cards with gauges | tornado, Gantt roadmap, gate scorecard table, "Therefore" so-what |
| 10 | Assumption register table | evidence box, stress-test table, conflicts table, sources list |

- **Colour semantics fixed across slides:** Scale = alert red, Funnel = accent gold, Kill = surface
  grey, Rebuild = primary orange, core ₹700 business = slate `primaryDeep`, rivals = blue `rival`,
  positive = green `good`, negative = red `alert`.

## II.4 SA-1: slide edits (paste exactly; then regenerate and pre-flight)

Working folder `nsbc-case/deck`. All four edits were dry-run in the mock on 30 Sep with 0 issues.

**(a) Replace `slides/s04.js` entirely with:**
```js
{ const s = await figma.getNodeByIdAsync("S4"); s.children.slice().forEach(c => c.remove());
skeleton(s, 2, "3 / 8", "THE UNDER-₹150 CUSTOMER, FROM PUBLIC DATA", 760,
  "Toing found a real under-₹150 customer, 33 million weekly users in a year, and every low-basket model that survived did it by moving the trip cost off the order",
  "Source: Storyboard18 citing CLSA and Sensor Tower (Sep 2026) | Swiggy Q1 FY27 letter | Entrackr and MediaNama on Snacc (Feb 2026) | Case C11 | MediaNama on Ownly (Mar 2026) | Business Today (Jul 2026) | IIFL (Aug 2022) | MediaNama bill comparison (Sep 2025)");
// A1 demand grid
const a1 = panel(s, 64, 318, 620, 330, "DEMAND IS REAL: TOING IN YEAR ONE");
[["33M", "weekly users, Aug 2026"], ["14.5M", "downloads in a quarter"], ["~50", "cities by Q1 FY27"], ["2 in 3", "new users new or dormant"]]
  .forEach((k, i) => { const x = 16 + (i % 2) * 298, y = 62 + Math.floor(i / 2) * 134;
    const f = addFrame(a1, x, y, 286, 124, i === 3 ? C.tint : C.surfaceAlt, C.ink, 1.5, "CELL");
    TL(f, 12, 4, 40, k[0], { family: "Poppins", style: "ExtraBold", color: C.primary, maxW: 262 });
    T(f, 12, 64, 262, 22, k[1]); });
// A2 precedents table (the seed)
const a2 = panel(s, 708, 318, 1148, 330, "WHO LASTED AT LOW BASKET VALUES, AND HOW THEY PAID FOR THE TRIP");
addTable(a2, 16, 60, [300, 520, 296], ["Model", "How the trip was paid for", "Outcome"], [
  ["Snacc (Swiggy)", "A solo trip per snack, micro-kitchens", "Shut within a year"],
  ["Zomato Everyday, Quick", "A solo trip per ₹89 meal or 15-min order", "Both shut May 2025"],
  ["Dunzo 60-min tier", "Batched orders in a slower window", "Saved ₹8 to ₹10 an order"],
  ["Instamart", "Denser stores: ₹5 an order from density", "CM breakeven May 2026"],
  ["Rapido Ownly", "Customer pays ₹30 a trip, 0% commission", "60k orders a day, BLR"],
  ["Zomato Now pods", "Office pickup pods, no doorstep trip", "Pilot, Gurugram"]],
  { rowH: 36, headerH: 40, name: "TABLE: precedents", align: ["LEFT", "LEFT", "LEFT"],
    rowFills: [C.alertTint, C.alertTint, C.tint, C.goodTint, C.goodTint, C.tint] });
// Row B: public-evidence band with rail
dashedH(s, 64, 664, 1792);
addRect(s, 64, 680, 10, 250, C.primary, C.ink, 1.5);
addChip(s, 86, 680, 300, 44, "PUBLIC EVIDENCE", C.primary, C.white, 22);
const b1 = panel(s, 86, 736, 600, 196, "SAME TWO ITEMS, TWO APPS (SEP 2025)");
hBars(b1, 16, 58, 568, [
  { label: "Swiggy bill", value: 486, color: C.primaryDeep, text: "₹486" },
  { label: "Toing bill", value: 346, color: C.primary, text: "₹346" }],
  { labelW: 170, rowH: 40, barH: 28, valueW: 90, max: 500 });
RT(b1, 16, 140, 568, 22, [["29% cheaper: ", "B"], ["lower fee, no packaging or rain fee", ""]]);
const b2 = panel(s, 710, 736, 560, 196, "WHO TOING REACHES (SWIGGY, Q1 FY27)");
stackH(b2, 16, 60, 528, 44, [{ value: 67, color: C.primary, text: "New or dormant 2 in 3", textColor: C.white }, { value: 33, color: C.surface, text: "Active 1 in 3" }], { minInside: 70 });
RT(b2, 16, 116, 528, 22, [["1 in 3 new Toing users was already active on Swiggy, ", ""], ["so a price fence matters", "B"]]);
const b3 = panel(s, 1294, 736, 562, 196, "DOWNLOADS IN THE QUARTER (M)");
hBars(b3, 16, 56, 530, [
  { label: "Toing", value: 14.5, color: C.primary, text: "14.5" },
  { label: "Zomato", value: 12.4, color: C.rival, text: "12.4" },
  { label: "Swiggy", value: 10.1, color: C.primaryDeep, text: "10.1" }],
  { labelW: 120, rowH: 34, barH: 24, valueW: 70, max: 16 });
RT(b3, 16, 162, 530, 22, [["Zomato still has more daily users", ""]]);
soWhat(s, 948, 82, [["The seed of our answer: ", "A"], ["the models that lasted made the trip cheaper or made the customer pay for it; the ones that closed paid a full trip for a small basket", "W"]]);
results.push({ slide: s.id, total: s.findAll(() => true).length, top: s.children.length }); }
```

**(b) In `slides/s10.js`, make exactly these three changes:**
1. Replace the line `const A = V.A, sN = P.n_total || 0, cN = P.n_carts || 0;` with `const A = V.A;`
2. In the headline string, replace `a cited public source, our model or our primary research;` with
   `a cited public source or our model;`
3. Replace the A17 row basis `"Survey rule P6 updates it"` with `"Tested 20% to 80%"`.
4. Replace the whole block from `const a2 = panel(s, 1098, 318, 758, 372, "METHOD AND SAMPLE SIZES");`
   up to (not including) the line `// Row B` with:
```js
const a2 = panel(s, 1098, 318, 758, 372, "EVIDENCE BASE AND ITS LIMITS");
RT(a2, 16, 62, 726, 22, [["Public data only: ", "B"], ["Swiggy's Q1 FY27 letter read in full, plus 14 dated press and filing sources; no fieldwork was run", ""]]);
RT(a2, 16, 168, 726, 22, [["Behaviour we could not observe ", "B"], ["(Drop take-up, trade-down, migration) is an assumption, tested across its full range", ""]]);
RT(a2, 16, 274, 726, 22, [["How Swiggy validates in 90 days: ", "R"], ["a 4-city A/B of the door fee and Drops, plus a core-app holdout", ""]]);
```

**(c) `slides/s01.js`:** in the source line replace `Team IdeaForge model and primary research (appendix)`
with `Team IdeaForge model and research document (appendix)`.

**(d) `slides/s11.js`:** replace `our model or our primary research, listed in the appendix.` with
`or our model, listed in the appendix.`

**(e) Check no slide reads survey data or says the banned words:**
```bash
cd nsbc-case/deck && grep -n -i "P\.n_\|P\.k\|survey\|cart\|primary research\|to be filled" slides/*.js
```
Expected output: nothing. (`C.primary` is a colour token, not a hit; the grep above does not match it.)

**(f) Regenerate the build scripts** (this is the only way build scripts are made; never hand-edit them):
```bash
cd nsbc-case/deck && mkdir -p build && for n in 01 02 03 04 05 06 07 08 09 10 11; do { cat preamble.js; echo; cat values.js; echo "const results=[];"; cat slides/s$n.js; echo; echo "return {results,warnings};"; } > build/slide_$n.js; echo "slide_$n $(wc -c < build/slide_$n.js)"; done
```
Every file must be under 50,000 characters (they are about 40,000 to 45,000).

**(g) Pre-flight all 11:**
```bash
cd nsbc-case/deck && for n in 01 02 03 04 05 06 07 08 09 10 11; do echo -n "s$n: "; node mock_figma.js preamble.js values.js slides/s$n.js | grep -E "ISSUES|warnings" | tr '\n' ' '; echo; done
```
Every line must read `warnings: [] ISSUES 0`. If not, fix only the named text (shorten, or move
y by ≤ 20px) and re-run. Report the 11 lines.

## II.5 SA-2: remove the survey from the research document

Folder `nsbc-case/research`. Edit the **part files**, then reassemble. Never edit
`toing-research.md` directly (it is regenerated).

1. `grep -n -i "survey\|cart\|primary research\|to be filled\|respondent\|n = \|analyze_primary\|primary_outputs" parts/part-A.md parts/part-C.md parts/part-D-full.md parts/part-D3.md parts/part-B.md`
2. **Rewrite `parts/part-C.md` §10** (everything from `## 10.` up to `## 11.`) as
   `## 10. Evidence base: public data in place of fieldwork, and how Swiggy validates in 90 days`,
   about 1,500 words, opening with a bold **Answer.** paragraph. Content, in order:
   - 10.1 What we used: a table of the 15 sources S01 to S15 (plan §5.1) with what each supports and
     its confidence ("read in full" or "snippet only"), from `research/raw/*.md`.
   - 10.2 What public data cannot show: Drop take-up, door-fee tolerance, trade-down, migration,
     rider acceptance of runs. For each: the assumption ID and value, the range tested, and whether
     the recommendation survives across the range (from `model/model_tables.md` T10).
   - 10.3 Public proxies we used instead: the MediaNama bill (₹346 vs ₹486), Swiggy's "2 in 3 new
     or dormant", Sensor Tower downloads and weekly users, Ownly's ₹30 fee at 60k orders a day,
     Dunzo's ₹8 to ₹10 batching saving, Instamart's ₹5 an order from density.
   - 10.4 How Swiggy validates within 90 days: a four-city A/B test (door fee ₹10, ₹15, ₹20; Drops
     on/off by campus), a core-app holdout for trade-down, dispatch logs for meals per run. Table:
     metric, source system, day read, threshold (from §15.3).
   - 10.5 Honest limits: estimates labelled `[Est]`; no fieldwork; Delhi vs Pune not relevant any
     more; stated-intent bias not relevant.
3. In `parts/part-A.md`: change the coverage-matrix rows for J3 and R2 so the answer reads
   "Insight from public data and our model: trip cost, density breakeven, funnel identity,
   triangulated loss; no fieldwork run (section 10)". Remove survey/cart items from §0's limits list
   and replace them with "Behavioural shares are assumptions tested across their ranges".
4. In `parts/part-D3.md` §18: rewrite questions 11 to 14 as:
   - 11 "Why no survey?" answered: time and the case's public-information rule; the answer rests on
     trip arithmetic that does not depend on stated preferences; behavioural inputs are stress-tested.
   - 12 "What would primary data change?" answered: the size of the win (Drop share 20% to 80% moves
     the 3-year result from −₹25 Cr to +₹27 Cr), not the direction against Scale and Funnel.
   - 13 "Is the ₹346 vs ₹486 bill representative?" answered: one public bill, used only to show the
     fee structure; the model uses the ₹12 platform fee and no delivery fee as disclosed.
   - 14 keep as written. Keep "The panel will ask:" format.
   In `parts/part-D2.md` §16.4 replace "Survey and cart data will show the accepted share (section 10)"
   with "The four-city A/B test will show the accepted share (section 10.4)". In part-D3 risk R6
   replace "Survey and carts (section 10)" with "The A/B test (section 10.4)".
5. `cat parts/part-D.md parts/part-D2.md parts/part-D3.md > parts/part-D-full.md`
6. `python assemble.py` must print `dashes 0`, `banned {}`, no duplicate headings, nothing cited but
   not in the bibliography. Then run the grep in step 1 against `toing-research.md`: expected 0
   hits except the words "fieldwork" and reported questions in §18.
7. `python build_pdf.py`; then render pages 1, 2 and the first page of §10 at 55 dpi with PyMuPDF
   (use a Windows path for the PNG) and look at them.

## II.6 Main: Figma setup (while SA-1 and SA-2 run)

1. **Load tools:** `ToolSearch` with
   `select:mcp__claude_ai_Figma__whoami,mcp__claude_ai_Figma__create_new_file,mcp__claude_ai_Figma__use_figma,mcp__claude_ai_Figma__get_screenshot,mcp__claude_ai_Figma__get_figma_skill`.
2. **Load and read the Figma skills:** `get_figma_skill` with `skill://figma/figma-use/SKILL.md`, then
   `skill://figma/figma-use-slides/SKILL.md`. If the index lists a `figma-create-new-file` skill,
   read it too (the `create_new_file` tool requires it). On every `use_figma` call pass
   `skillNames: "resource:figma-use,resource:figma-use-slides"`. If the MCP ever says "not
   connected", tell the user to re-authorise Figma in claude.ai connector settings and stop.
3. **Calibrate against the inspiration decks (read-only, 10 minutes, do not copy content):**
   `get_screenshot` with `maxDimension: 1600` on file `hOJVMGv9nIhDmayTT7DmOt` (Satoshi Gate, the
   prime inspo; node `5:4` is a known dense slide) and on one slide of `e5VEexsLMhDampx7gvhFmM`
   (if you need a node id, run a read-only `use_figma` script that returns
   `figma.currentPage.children` ids, or the slide grid's first slide id). Download each URL with
   `curl -sL -o <scratchpad>\insp_N.png "<url>"` and Read it. Write one line each in
   `deck/figma.md`: ribbon look, card look, density.
4. **Create the file:** `create_new_file` with `editorType: "slides"`,
   `planKey: "team::1564294484048272772"`,
   `fileName: "Toing: Swiggy's ₹99 Problem | Team IdeaForge | NSBC Consilium'26"`. Record fileKey
   and URL in `nsbc-case/deck/figma.md`.
5. **Create 11 slides.** Script A: `for (let i=0;i<11;i++) figma.createSlide(); return "ok";`
   Script B (records ids, removes surplus empty slides, names them, checks fonts):
   ```js
   const grid = figma.currentPage.children.find(c=>c.type==="SLIDE_GRID");
   const row = grid.children[0]; let sl = row.children.slice();
   while (sl.length > 11) { const e = sl.find(x=>x.children.length===0); if(!e) break; e.remove(); sl = row.children.slice(); }
   const names = ["01 Cover","02 Executive Summary","03 Unit Math","04 Customer","05 Levers","06 Options","07 The Call","08 Rivals and Rules","09 Signals","10 Appendix","11 Thank You"];
   sl.forEach((s,i)=>{ if(names[i]) s.name = names[i]; });
   row.name = "Toing";
   const fonts = await figma.listAvailableFontsAsync();
   const need = [["Poppins","Bold"],["Poppins","ExtraBold"],["Inter","Semi Bold"],["Inter","Bold"]];
   return { ids: sl.map(s=>s.id), count: sl.length, fontsOk: need.map(([f,s])=>fonts.some(x=>x.fontName.family===f&&x.fontName.style===s)) };
   ```
   `count` must be 11 and `fontsOk` all true. Record the ids in `deck/figma.md` as S1 to S11. If the
   connection drops, re-run Script B only; never create a second set.
6. **Bind real ids into the build scripts** (after SA-1 has regenerated them). The slide code uses
   placeholders `"S1"` to `"S11"`. Create `deck/build_bound/` with:
   ```bash
   cd nsbc-case/deck && mkdir -p build_bound && python - <<'EOF'
   import io,json,re
   ids = json.load(open("slide_ids.json"))   # write this file first: {"S1":"<id>", ..., "S11":"<id>"}
   for n in range(1,12):
       t = io.open(f"build/slide_{n:02d}.js", encoding="utf-8").read()
       t = t.replace(f'getNodeByIdAsync("S{n}")', f'getNodeByIdAsync("{ids[f"S{n}"]}")')
       io.open(f"build_bound/slide_{n:02d}.js","w",encoding="utf-8").write(t)
   print("bound")
   EOF
   ```
   Check `grep -c 'getNodeByIdAsync("S' build_bound/*.js` prints 0 for every file.

## II.7 Main: build loop (one slide per `use_figma` call, in order 1 to 11)

For each N from 01 to 11:
1. Read `deck/build_bound/slide_N.js` and pass its **entire contents** as `code` to `use_figma`
   (fileKey from §II.6, description "Build slide N", skillNames as above). Do not edit, trim or
   reformat the code.
2. The call returns `{results, warnings}`. `warnings` must be empty; `results[0].total` must be within
   the node range (core slides 150 to 420).
3. Run the **V1 validator** (below) with that slide's id.
4. `get_screenshot` (nodeId = slide id, `maxDimension: 1600`), download with
   `curl -sL -o "<scratchpad>\s_N.png" "<url>"`, Read the PNG. Look for: clipped or overlapping text,
   labels sitting on bars, lines not joining their points, text running outside a card, anything
   below y1036 except the source line, empty regions larger than a card (dead space).
4b. **Reference checklist (compare your screenshot with Satoshi Gate slide 5:7; tick every line in
   `deck/figma.md`):**
   - Ribbon across the top with punch-holes and wires; the active tag is orange with a gold back-card;
     counter chip top right reads "N / 8" (or "A1").
   - Section chip under the ribbon; headline in 2 lines or fewer, starting at the left margin.
   - Every panel has an orange caps title with a thin ink rule under it; every panel and card has an
     ink outline; no rounded corners anywhere.
   - At least 3 real charts or data forms (bars, waterfall, line, heatmap, donut, tornado, Gantt,
     table) and at least 8 forms in total on core slides (list in §II.3c).
   - Every chart carries its values on the chart (numbers next to bars, labels on lines, dashed
     markers with a label), not in a separate legend.
   - Slate so-what bar across the bottom with a gold "SO WHAT" chip and one white sentence.
   - Source line bottom right, small orange text, starting "Source:".
   - No empty region larger than about a quarter of a panel; no text touching or crossing another text,
     a bar or a line; nothing below the so-what bar except the source line.
   If any line fails, it is a fix-rule case (§II.7 table) or it gets logged and reported. Never add new
   content to pass the checklist.
5. If V1 or the screenshot shows a problem, apply the matching **fix rule**, edit
   `deck/slides/sN.js` (the source), regenerate that slide's build and bound script (commands in
   §II.4 f and §II.6 step 6), re-run the mock, then re-run the slide (the script clears the slide
   first, so re-runs are safe). At most 3 attempts per slide; then log the residual and move on.
6. Log in `deck/figma.md`: slide, node total, V1 result, screenshot verdict, fixes.

**V1 validator** (read-only apart from a throwaway clone it removes):
```js
await Promise.all([{family:"Poppins",style:"Bold"},{family:"Poppins",style:"ExtraBold"},{family:"Inter",style:"Semi Bold"},{family:"Inter",style:"Bold"}].map(f=>figma.loadFontAsync(f)));
const ids=["<SLIDE_ID>"]; const issues=[]; const KEY=/^(PANEL|CARD|KPI|TABLE):/;
for (const id of ids) { const s = await figma.getNodeByIdAsync(id);
  const ch=s.children.filter(c=>KEY.test(c.name)).map(c=>({n:c.name,x:c.x,y:c.y,w:c.width,h:c.height}));
  for(let i=0;i<ch.length;i++)for(let j=i+1;j<ch.length;j++){ const a=ch[i],b=ch[j];
    const ox=Math.min(a.x+a.w,b.x+b.w)-Math.max(a.x,b.x), oy=Math.min(a.y+a.h,b.y+b.h)-Math.max(a.y,b.y);
    if(ox>=4&&oy>=4) issues.push({t:"overlap",a:a.n,b:b.n}); }
  for(const c of s.children){ if(c.x<-1||c.y<-1||c.x+c.width>1921||c.y+c.height>1081) issues.push({t:"bounds",n:c.name});
    if(KEY.test(c.name) && c.y+c.height>1036) issues.push({t:"belowContent",n:c.name,bottom:Math.round(c.y+c.height)}); }
  const hl=s.children.find(c=>c.name==="HEADLINE"); if(hl&&hl.height>113) issues.push({t:"headline3lines"});
  for(const t of s.findAllWithCriteria({types:["TEXT"]})){ const p=t.parent; if(!p||p.type==="SLIDE") continue;
    const tb=t.absoluteBoundingBox, pb=p.absoluteBoundingBox; if(!tb||!pb) continue;
    if(tb.x+tb.width>pb.x+pb.width+1||tb.y+tb.height>pb.y+pb.height+1) issues.push({t:"textOut",chars:t.characters.slice(0,40),parent:p.name});
    if(t.textAutoResize==="NONE"){ const k=t.clone(); p.appendChild(k); k.textAutoResize="HEIGHT";
      if(k.height>t.height+2) issues.push({t:"cellWrap",chars:t.characters.slice(0,40),parent:p.name}); k.remove(); } } }
return {clean:issues.length===0,count:issues.length,issues:issues.slice(0,60)};
```

**Fix rules (apply exactly the one for the issue type; nothing broader):**

| Issue | Fix in `slides/sN.js` |
|---|---|
| `headline3lines` | Cut the two weakest words (articles, adverbs); keep every number; never below 34pt |
| `textOut`, `cellWrap`, overflow warning | Shorten the string with the same meaning ("vs", "a day", "Cr", "est."); never shrink below 22pt; keep numbers. If impossible, widen that column by ≤ 40px, taking width from the widest other column of the same table |
| `overlap` of our own PANEL/CARD/TABLE | Move the later-drawn node down or right by the overlap + 8px if it stays in y318 to 1030; otherwise report |
| `bounds`, `belowContent` | Move the node up inside the zone; if no room, reduce that table's `rowH` by ≤ 6px (never below 30) |
| Label on a bar, text on a line, arrow through text (screenshot) | Nudge that label or arrow by ≤ 24px |
| A vector line missing or misplaced (screenshot) | Re-run the slide once; if still wrong and the line is horizontal or vertical, replace it with `addWireH`/`addWireV`; otherwise report |
| Real Figma text wider than the mock predicted | Same as `textOut` |

## II.8 Main: whole-deck sweeps (after all 11 slides)

- **V2 radius (write):** across all 11 ids, set `cornerRadius = 0` on every node where it exists and is
  non-zero; report the count.
- **V3 font floor (read):** list TEXT nodes under 22pt unless the name is `SOURCE` or `BIBLIO`, the
  characters start with "Source:", or an ancestor name starts with `LOGO:`. For mixed sizes use
  `getStyledTextSegments(["fontSize"])`. Expected 0.
- **V4 language (read):** join all TEXT characters; count `—` and `–` (expected 0) and every word in
  §II.3b rule 4 (expected 0). Fix by rewording in the slide source.
- **V5 numbers (read):** the joined text must contain `−₹27.3`, `+₹5.7`, `₹1,745 Cr`, `3.3`, `₹131 Cr`,
  `33M`, `9.0x`, `135%`, `₹42`, `26%`; the string `₹1,745 Cr` must appear on slides 1 (verdict body),
  2 or 7 only and in its largest size (the MONEYSHOT node, 56 to 72pt) only on slide 7.
- **V6 density (read):** per slide total nodes and count of `PANEL:`/`CARD:`/`TABLE:` nodes; core
  slides 150 to 420 nodes.
- **V7 case compliance (manual, from screenshots):** B1 slide 3 shows customer pays, restaurant
  keeps, rider cost, Swiggy's remainder, each with its assumption source; B2 slide 5 shows every lever
  with ₹ effect and who controls it; B3 slide 6 shows migration share, period and comparison with CAC;
  B4 slide 8 shows Eternal's most likely response; B5 slide 9 shows the flip assumptions and 12-month
  signals; one primary recommendation stated on 1, 2, 7 and 9; others shown worse on slide 6; slide
  count 11 (10 excluding cover, appendix 1).
- **V8 headline-only read:** print the eight core headlines (slides 2 to 9) in order into
  `deck/figma.md`. Read them as one paragraph: they must tell the whole argument (problem, cause,
  customer, levers, options, call, rivals, signals) without the bodies. If one does not advance the
  story, report it (do not rewrite beyond SA-3's fixes).

## II.9 SA-3 critique (touchpoint C) and final polish

Main downloads all 11 screenshots at `maxDimension: 1600` into the scratchpad and dispatches SA-3.
Rubric items that do **not** apply because of the case's slide cap (do not "fix"): TOC,
abbreviations table, section dividers, a 10+ slide appendix, bibliography slides, 100-slide
structure. Main applies only in-place wording changes SA-3 returns (same meaning, same numbers, fits
the same box), regenerates and re-runs only the touched slides, then re-runs V1 on them and V4.

## II.10 Sub-agent prompts (paste verbatim; one message with SA-1 and SA-2 together)

**SA-1:** "You are SA-1, slide surgeon. Working folder
C:\Users\harsh\Desktop\HARSH\PPTS-CASE-STUDY\nsut-innovators-court. Read
C:\Users\harsh\.claude\plans\working-folder-nsbc-case-polished-backus.md Part II, especially §II.0,
§II.3b and §II.4. Apply §II.4 steps (a) to (g) exactly, in order, using the Write tool for s04.js and
the Edit tool for the other files. Do not change any other slide or any number. Do not call Figma.
Reply with the output of step (e), the 11 build sizes from step (f) and the 11 pre-flight lines from
step (g)."

**SA-2:** "You are SA-2, document reviser. Working folder
C:\Users\harsh\Desktop\HARSH\PPTS-CASE-STUDY\nsut-innovators-court. Read
C:\Users\harsh\.claude\plans\working-folder-nsbc-case-polished-backus.md Part II (§II.0, §II.3b,
§II.5) and nsbc-case/research/BRIEF.md (style rules, tags). Apply §II.5 steps 1 to 7 exactly. Use only
facts in nsbc-case/research/raw/*.md, nsbc-case/model/model_tables.md and the case; do not browse; do
not invent. Zero em or en dashes, no banned words, humanised analytical prose, declarative headings.
Do not touch the deck or the model. Reply with the assemble.py output, the final grep count, the PDF
page count and any fact you needed but could not find."

**SA-3:** "You are SA-3, critic. Invoke the Skill tool with `case-competition-deck` (critique mode) and
read its references/critique_rubric.md and references/rhetoric.md. Read Part II of
C:\Users\harsh\.claude\plans\working-folder-nsbc-case-polished-backus.md (§II.3, §II.3b, §II.9). Then
Read the 11 PNG screenshots at <list of paths>. Score the deck on the rubric's seven quality
dimensions (1 to 5 each, with one line of evidence each), list pass/fail items (skipping those §II.9
says do not apply), and return at most 8 fixes, each as: slide number, exact current text, exact
replacement text, reason. Fixes may only reword text in place: same meaning, same numbers, same or
shorter length. Flag any em or en dash, banned word, hook, question in the slide's own voice, or
unsourced number you see. Do not propose new slides, new charts or layout changes."

## II.12 How and when to use the case-competition-deck skill (log each in `deck/figma.md`)

The skill already engineered the argument (plan §3). Executors use it to **check**, never to
re-engineer. Invoke it with the Skill tool; if the listing names it `anthropic-skills:case-competition-deck`,
use that exact name. After invoking, read only the reference files named below.

| Touchpoint | When | Invoke with args | Read | Check, then log one line |
|---|---|---|---|---|
| A | Before §II.6 | `generate mode; strategy case with operations arithmetic; Swiggy Toing, NSBC Consilium'26; 11 slides; argument already engineered in plan §3, do not change it` | `SKILL.md`, `references/structure.md`, `references/rhetoric.md` | The deck has: contrarian call (slides 1, 2, 7, 9), foreshadow seed (slide 4), symmetric treatment (slide 6), moneyshot (slide 7), double synthesis (slides 6 and 9), action titles (all). Log "A: 6 of 6 present" |
| B | Before building slides 6 and 7 | none (re-read) | `references/archetypes.md` sections P, P-supplement, R, V | Slide 7 waterfall decomposes the ₹1,745 Cr into named components; the numeral is the largest on the slide; slide 6 has a "Conclusively" card. Log "B: ok" |
| C | After all 11 are built (§II.9, run by SA-3) | `critique mode` | `references/critique_rubric.md`, `references/rhetoric.md` | Seven dimension scores, top issues, at most 8 wording fixes |
| D | After SA-3 fixes are applied | none | `references/rhetoric.md` §15 (polish failures) | Search the joined deck text for TODO, Insert, Placeholder, TBD, xyz, Lorem, and names of other cases in this repo (Dunzo, Satoshi, Liminal, Paytm, Dream11, SwasthyaGrid, ConsentGrid, NavSight, Maudrik). Expected 0 hits. Log the counts |

## II.11 Finish

1. **Raster fallback:** screenshot all 11 at `maxDimension: 3840`, download, and build
   `nsbc-case/deck/TeamIdeaForge_NSBC_Consilium26_preview.pdf` with PyMuPDF, one 1920 × 1080 pt page
   per slide (use Windows paths).
2. **Final report to the user:** the Figma URL; V1 to V8 results; per-slide node counts; SA-3 scores
   and fixes applied; paths of the research PDF, model and preview PDF; export steps: Figma Slides →
   File → Export → PDF, save as `TeamIdeaForge_NSBC_Consilium26_Prelims.pdf`, check it opens and has
   11 pages, submit before 11:59 PM; reminder to drop the Swiggy and NSUT FES logos into the two
   dashed `LOGO:` boxes on the cover (image fill "Fit", delete the label) or delete the boxes.

**Time budget:** SA-1 and SA-2 in parallel ~30 min; Figma setup ~20 min; build 11 slides with checks
~2 to 3 hours; sweeps and critique ~45 min; finish ~20 min.

---

## ARCHIVED STATUS AT 29 SEP 2026, 19:12 IST (superseded by Part II above; kept for history)

**Done and verified (do not redo):**
- `nsbc-case/case/01-nsbc-toing-case.md` (verbatim case with IDs).
- `nsbc-case/research/raw/R-A-swiggy.md`, `R-B-rivals-regulation.md`, `R-C-economics-market.md`
  (web-verified facts; Swiggy Q1 FY27 letter read in full).
- `nsbc-case/model/toing_model.py` → `model_outputs.json`, `ref_output.txt`; `make_tables.py` →
  `model_tables.md` (T1 to T11); `export_values.py` → `deck/values.js`. Reference outputs in §7.
- `nsbc-case/primary/`: `survey_form.md`, `cart_sampling_protocol.md`, `cart_log.csv`,
  `toing_menu_scan.csv`, `analyze_primary.py` (runs; n = 0 so far). Survey not yet posted by user.
- `nsbc-case/research/BRIEF.md` (writer brief); `research/build_pdf.py` (adapted, syntax OK).
- Research parts: `part-A.md` (§0 to §5, 7,922 words), `part-B.md` (§6 to §9, 7,541),
  `part-C.md` (§10 to §13, 8,951). All passed the dash and banned-phrase check.
- `part-D.md` has **§14 only** (2,059 words); the writer hit a rate limit.
- `nsbc-case/deck/preamble.js`, `mock_figma.js`, `values.js`; slides `s02.js` to `s07.js` all pass
  the mock harness with 0 issues (`node mock_figma.js preamble.js values.js slides/sNN.js`).

**Remaining, in order (research deliverable first, as the user asked):**
1. **Finish part D** (§15 to §18) by appending to `research/parts/part-D.md`, following
   `research/BRIEF.md` exactly (writer-D prompt: flip-point table with headroom, 3/6/12-month
   signals and kill rule; 30/90/365-day roadmap with owners, KPIs, gates and a text Gantt; risk
   register of 10+ risks with paired mitigations; 20 judge questions with numeric answers). Write it
   directly in the main session (no sub-agent) to avoid another rate-limit loss; append one section
   at a time. Run the BRIEF check script on it.
2. **Assemble** `research/toing-research.md`: header block (below), `---`, then parts A, B, C, D;
   append Appendix A bibliography (plan §5.1 S01 to S15 plus sources the parts cite), Appendix B
   (`model/model_tables.md`, H1 removed, H2 → H3), Appendix C assumption register (from the
   comments in `toing_model.py`, A01 to A44, renumber A15 = GST rates, A16 = Karnataka cap as part A
   did), Appendix D glossary (30+ terms), Appendix E data conflicts (plan §5.4).
   Header block (build_pdf.py parses it):
   ```
   # Toing: Swiggy's ₹99 Problem

   **A Board recommendation on Toing: keep it, but stop paying for ₹99 trips**

   Team: Harsh Kawatra (Delhi Technological University) · Gursimran Kaur (GGSIPU) · Dayita Arora
   (Ramjas College, University of Delhi)

   Prepared for: NSBC, Consilium'26, NSUT, September 2026
   ```
   Checks: unique headings (dedupe any repeated `##` between parts), 0 dashes, 0 banned phrases,
   every `[S##]` in Appendix A, word count ≥ 25,000.
3. **Build the PDF:** `cd nsbc-case/research && python build_pdf.py`; render pages 1, 2, 3, 10 at
   60 dpi with PyMuPDF and eyeball them.
4. **Deck code:** write `s01.js` (cover), `s08.js` (rivals and rules), `s09.js` (signals, roadmap,
   "Therefore"), `s10.js` (appendix), `s11.js` (thank you) per the layouts specified in §9 and the
   Slide 8 to 11 design notes below; pre-flight each in the mock harness to 0 issues.
5. **Figma build** (connector now available): load `use_figma`, `get_screenshot`,
   `create_new_file`, `whoami`, `get_figma_skill`; read the figma-use and figma-use-slides skills;
   create the Slides file on `team::1564294484048272772`; create 11 slides; each script =
   `preamble.js` + `values.js` + `const results=[];` + slide block + `return {results,warnings};`
   (check the size is under 50,000 characters; if over, strip comments and indentation from the
   preamble); after each slide run V1 and a screenshot; then radius, font-floor, dash and number
   sweeps (§14 of this plan, adapted from the Dream11 plan).
6. **Primary data** when the user says "carts in" or "survey in" (§6.6), then rebuild slides 2 to
   7 and 10.
7. Raster preview PDF; finals kit; final report. User exports the real PDF from Figma.

**Slide 8 to 11 design notes (use the preamble helpers; content zone y318 to 1030; so-what bar at
y948 h82 on 8 and 9):**
- **S8 RIVALS (B4):** headline "Eternal's best reply is to hold back while Toing burns cash; once
  Drops pay, expect a race for pickup points within 6 to 12 months, and regulation adds only ₹1 to
  ₹2 an order". Row A: game-tree panel x64 w1000 h372 (root "Swiggy" → Scale / Kill / Rebuild →
  Eternal's reply cards, `addLine` connectors, RAG chips); rival table x1088 w768 (Toing,
  Zomato + Bistro, Rapido Ownly, Zomato Now pods: model, price to customer, scale). Row B:
  Eternal payoff heatmap (Swiggy move × Eternal reply, ordinal 1 to 5, HG scale); regulation vBars
  (CoSS ₹0.35, CoSS on customer-paid ₹1.74, Karnataka ₹0.50, GST on ₹20 door fee ₹3.05) plus
  RT "0.85% of a ₹99 basket vs 0.37% of ₹700". So-what: the scarce asset is the pickup point.
- **S9 SIGNALS (B5):** headline "Three numbers would flip our call to a shutdown, and Swiggy will
  see each within 90 to 180 days: trip cost above ₹42, Drop runs under 6 meals, or trade-down above
  26%". Row A: three layered flip cards (numeral, meaning, how Swiggy would know, a `gauge` of base
  vs flip) x64 w1120 h282; tornado panel x1208 w648 (`V.tor.rows` top 5). Row B: `gantt` (Oct to
  Sep; switch-on levers, freeze installs, 40 pilot Drops, gates at months 3, 6, 12, scale Drops)
  x64 w1150 h310; KPI table (metric, today, M3, M6, M12) x1238 w618. So-what = "Therefore" recap.
- **S10 APPENDIX:** `skeleton(s,[0,1,2,3],"A1",...,RIB_APP)`; assumption register table (10
  load-bearing rows), primary-research method box (n values from `P`, "pending" if 0), model box
  (robustness: Rebuild beats Scale and Funnel in all 45 cells), data-conflicts table, and a
  `BIBLIO` 16pt source list.
- **S1 COVER / S11 THANK YOU:** as §9 and memory `feedback_cover_style.md`: caps title "TOING:
  SWIGGY'S ₹99 PROBLEM", verdict card with accent headline (the recommendation sentence), TEAM
  IDEAFORGE table, a right-hand "THE ARITHMETIC IN FIVE LINES" list card (not a KPI row), dashed
  LOGO placeholders; thank-you fully centred with the same team table.

---

## 0. Table of contents

1. Context: the case, locked decisions, the Dunzo post-mortem, deliverables
2. Reading list and ground rules (integrity, writing, standing memory)
3. The argument (engineered with the `case-competition-deck` skill; do not change)
4. Case transcription and coverage IDs
5. Research phase: source register, fact base, update protocol
6. Primary research: survey, cart sampling, analysis code, update protocol
7. The model (verbatim code, reference outputs, Excel twin, values export)
8. Research document spec (outline, writers, assembly, PDF build)
9. Deck architecture (11 slides, ribbon, skeleton, density contract, slide-by-slide spec)
10. Design system (palette, type, forms catalogue)
11. PREAMBLE (paste verbatim at the top of every `use_figma` build script)
12. Slide code (one fenced block per slide)
13. Figma setup (gate, skills, inspiration, file, slides, fonts)
14. Validators V1 to V8 and fix rules
15. Execution sequence (timeline, step table, sub-agent prompts, parallelism)
16. Finals kit (10-minute talk track and Q&A bank)
17. Final report to the user and verification checklist

---

## 1. Context

### 1.1 The case (source: `nsbc-case/6ab56a8061b52_nsbc.pdf`, 7 pages, Canva export)

**Competition.** NSBC, Consilium'26, the annual business conclave of NSUT (FES, NSUT). Event
leads: Aarushi, Yashwani, Akanksha. Contact fes@nsut.ac.in.

**Title.** "Toing: Swiggy's ₹99 problem."

**The opening line is the whole case** (case p.2, verbatim): "A delivery partner is paid roughly
the same to carry a ₹79 thali across Pune as to carry a ₹700 family dinner across Bengaluru. That
fact is the whole case. Everything below is context."

**Case facts (these are the only company facts allowed; case rule G4):**

| ID | Fact (verbatim meaning) | Page |
|---|---|---|
| C01 | Rider pay is roughly the same for a ₹79 thali in Pune and a ₹700 dinner in Bengaluru | 2 |
| C02 | Toing launched Aug 2025: a standalone app, meals ₹49 to ₹150, for students and young earners, starting in Pune | 2 |
| C03 | Toing's logic: students order often, just not at ₹700; compact menus, low prices and volume were meant to make it work for restaurants and the platform | 2 |
| C04 | Core food delivery AOV about ₹700 | 2 |
| C05 | Core adjusted EBITDA about 3.1% of GOV, as of the most recent shareholder letter | 2 |
| C06 | Rider payouts and incentives, insurance and payment processing are largely fixed per order | 2 |
| C07 | At ₹700 Swiggy's take covers them with a thin margin; at ₹99 it does not come close; every added order widens the loss unless the model changes | 2 |
| C08 | Snacc: separate app, snacks and quick bites in 10 to 15 minutes, launched Jan 2025 in Bengaluru, wound down within about a year | 2 |
| C09 | Snacc was a speed bet, Toing is a price bet; both were separate apps looking for economics the main app could not provide | 2 |
| C10 | Eternal (formerly Zomato), the market leader, has not launched a Toing rival | 3 |
| C11 | Zomato Everyday (₹89 home-style meals) and Zomato Quick (15-minute delivery) were both shut in May 2025; the company could not see either turning profitable without compromising customer experience | 3 |
| C12 | Code on Social Security in force since 21 Nov 2025: aggregators contribute 1 to 2% of annual turnover to gig-worker welfare, capped at 5% of what they pay those workers | 3 |
| C13 | Karnataka has legislated a per-transaction welfare fee of its own | 3 |
| C14 | Swiggy listed in Nov 2024 on the promise of a path to profitability | 3 |

**The mandate (case p.3 to 4).** We are Swiggy's internal strategy team. The Board wants **one**
recommendation on Toing, with numbers:

| ID | Option | What it requires |
|---|---|---|
| O1 | Scale it | Grow Toing as a business in its own right, with a credible path to contribution breakeven |
| O2 | Run it as a funnel | Accept a loss on every order; justify it as customer acquisition for the core app and Instamart, measured against what Swiggy would otherwise spend to acquire the same users |
| O3 | Kill it | Shut Toing as Snacc was shut, and say what, if anything, Swiggy should do instead for the under-₹150 customer |
| O4 | Hybrid or fourth path | Allowed, but the team must commit to one primary recommendation and explain why the others are worse |

**What the Board expects to see (every item gets its own slide region; coverage IDs B1 to B5):**

| ID | Board expectation |
|---|---|
| B1 | Per-order unit economics for a Toing order today: what the customer pays, what the restaurant keeps, what delivery costs, what Swiggy is left with. Every assumption stated with its source |
| B2 | The levers that change the arithmetic, and by how much: batching, campus pickup points, fixed menus and dedicated kitchens, a small delivery fee or subscription, advertising, anything else quantified. Which levers Swiggy controls, and which depend on restaurants or customers accepting a worse experience |
| B3 | If funnel: what share of Toing users must migrate to ₹700-type ordering, over what period, for the losses to pay back, and how that compares with Swiggy's current cost of acquiring a customer through marketing |
| B4 | The competitive reading: what the recommendation does to Swiggy's position against Eternal, and Eternal's most likely response |
| B5 | What would change our mind: the two or three assumptions that flip the answer, and how Swiggy would know within twelve months whether the call was right |

**Judging (case p.5).**

| ID | Criterion | Weight | Where the deck earns it |
|---|---|---|---|
| J1 | Unit economics: rigour, transparency and realism | 30% | Slides 3 and 5, appendix |
| J2 | Decision quality: one clear recommendation, honestly weighed against alternatives | 25% | Slides 2, 6, 7 |
| J3 | Insight Swiggy's own strategy team would not already have (primary research counts) | 20% | Slide 4 (primary research), slide 5 (the density finding), slide 6 (the funnel identity) |
| J4 | Competitive and regulatory reading | 15% | Slide 8 |
| J5 | Communication (prelims: the deck alone) | 10% | Every slide: headline-only read test (§9.3) |

**Rules (case p.6 to 7).**
- R1: Public information only (annual reports, shareholder letters, investor presentations,
  regulatory filings, credible press, own primary research). Never approach Swiggy, Eternal or
  their employees.
- R2: Primary research is encouraged; **disclose sample size and method**.
- R3: Assumptions are not penalised; unstated or unsourced assumptions are.
- R4: The Board does not expect Toing's internal metrics; estimate them sensibly and show the work.
- G4: **Facts about the company come only from the case document.** Outside market data is
  welcome and expected, provided it is cited. How this plan applies G4: the case figures C01 to
  C14 are never overwritten. Swiggy's public disclosures (shareholder letters, annual report) are
  used only to decompose and triangulate what the case leaves open (for example the cost stack
  behind the 3.1%), and every such number is labelled as a public-disclosure estimate. Where a
  public figure differs from the case (for example a reported food AOV that is not ₹700), the case
  figure is used on slides and the difference is logged in the data-conflicts table (§5.4).
- G5: There is no single right answer; judges score coherence, rigour and defensibility under
  questioning.
- **Format, prelims:** deck only, PDF, **at most 10 slides excluding cover and appendix, and an
  appendix of at most 5 slides**, due **30 Sep 2026, 11:59 PM**. There is no presentation;
  shortlisting is on the deck alone, so the deck must make the argument by itself.
- **Format, finals:** same problem, no new information; 10-minute presentation plus 5-minute
  Q&A; the deck may be revised; judges hold the prelims deck and may ask what changed.

### 1.2 Locked decisions (the user answered each; do not reopen)

1. **Deck shape: 11 slides.**

   | Slide | Content | Counts toward |
   |---|---|---|
   | 1 | Cover | excluded (cover) |
   | 2 to 9 | The 8 core slides | the 10-slide cap (8 used) |
   | 10 | One appendix slide | the 5-slide appendix cap (1 used) |
   | 11 | Thank-you | the 10-slide cap (9 used in total) |

   This is inside the limits with one slide of headroom. Do not add slides.
2. **Team IdeaForge** (cover and thank-you tables, columns Team Members | Institution | Role):
   - Harsh Kawatra, Delhi Technological University, Team Leader
   - Gursimran Kaur, Guru Gobind Singh Indraprastha University, Member
   - Dayita Arora, Ramjas College, University of Delhi, Member
3. **Primary research: YES, both instruments** (§6).
   - A 12-question anonymous Google Form survey of students and young earners, circulated by the
     team in DTU, NSUT, GGSIPU and DU WhatsApp groups, target n ≥ 120, closing **30 Sep 2026 at
     1:00 PM IST**.
   - A cart-sampling audit: the team builds (never places) carts on the Toing app and the Swiggy
     app at Pune addresses, and on Zomato for comparison, logging every fee line. Target 40 carts.
   - **Nothing is ever fabricated.** If the survey closes below n = 60, it is shown as
     "directional" with the n printed, and no slide claim rests on it alone (§6.6). If cart
     sampling cannot be done, the model runs on its researched defaults and the slides say so.
4. **Palette: Swiggy orange + ink** (§10.1), on the Satoshi Gate structural system: ribbon with
   punch-holes and wires, sticker cards, 2 to 2.5px ink strokes, radius 0. No Swiggy, Toing or
   Eternal logo artwork; logos go only in dashed `LOGO:` placeholders the user fills by hand.
5. **Density: Satoshi Gate level** (the user's explicit choice after the Dunzo result). Every core
   slide carries at least 8 distinct visual forms, at least 3 of them genuine data
   visualisations, 200 to 420 nodes, zero dead space. §9.3 adds the hierarchy rules that make that
   density readable without a presenter.
6. **Carry-over deck preferences** (standing memory `feedback_cover_style.md`):
   - The cover has **no KPI-card row**. It has a caps title, a verdict card with accent (gold)
     headline text, then a "TEAM IDEAFORGE" heading above the team table.
   - The thank-you slide is fully centred and repeats the same team table.
   - No speaker notes.
7. **Writing rules** (standing memory `feedback_no_em_dash_no_hooks.md`; applies to the deck,
   the research document, the model's markdown tables, the survey text and the finals kit):
   - Zero em dashes (—) and zero en dashes (–). Ranges are written "to" ("₹49 to ₹150").
     Negatives use "−" (U+2212).
   - No AI-voice phrasing. Banned list (case-insensitive): delve, landscape, unlock,
     game-changer, here's, let's, bottom line, it's not just, make no mistake, in today's,
     fast-paced, seamless, leverage (as a verb), robust, tapestry, testament, navigate the, realm,
     holistic, synergy, paradigm, cutting-edge, revolutionize, crucial, pivotal, furthermore,
     moreover, in conclusion, it is worth noting.
   - No rhetorical-question hooks in the document's or slides' own voice. The one exception is a
     judge's question reported as speech ("The panel will ask: ...").
   - Headlines and section headings are **declarative findings with a number**.
   - The voice is humanised analytical storytelling: concrete, specific, varied sentence length,
     no filler, the way a strong consultant writes a Board memo.
8. **Commits:** if anything is committed to git, write **no Co-Authored-By trailer** (standing
   memory `feedback_no_coauthor_trailer.md`, which overrides any session attribution reminder).
   Committing is not required by this plan.
9. **File name for submission:** `TeamIdeaForge_NSBC_Consilium26_Prelims.pdf` (the case sets no
   naming rule; this one is descriptive).

### 1.3 The Dunzo post-mortem: what changes in this plan and why

The previous deck built with this system (Dunzo Revival, LSR Samagam'26, plan
`C:\Users\harsh\.claude\plans\working-folder-is-immutable-reef.md`) was **not shortlisted**. The
organisers gave no feedback, and the exported deck is not on disk (`lsr-revive/deck/` is empty),
so the diagnosis below comes from reading that plan's slide code against the skill's
`references/critique_rubric.md`. These are hypotheses, and every one has a concrete counter-measure
here. The executor does not re-litigate them.

| # | What the Dunzo build did | Why it likely cost the shortlist | What this plan does instead |
|---|---|---|---|
| D1 | Every brief item became its own equal-weight panel; 12 to 17 panels per slide at 22pt | A judge skimming a PDF could not find the answer in 10 seconds; density read as a form, not an argument | Keep Satoshi Gate density, but every core slide has **one hero exhibit** that proves the headline and takes 30 to 45% of the content zone, plus a **so-what bar** that states the implication in one sentence (§9.3). Density lives in the supporting panels |
| D2 | Headlines were long two-line sentences that described rather than decided | The recommendation was not repeated in the same words across slides | A **headline-only read test**: the 8 headlines read in order must tell the whole argument (§9.3, V8). The recommendation sentence appears verbatim on slides 1, 2 and 7 |
| D3 | The core insight rested on a counterfactual model with 12 team assumptions | Insight looked assumed, not discovered; no proprietary evidence | **Primary research** (survey plus cart sampling) carries the insight slide, with n and method printed on the slide (§6). The model takes measured fees as inputs |
| D4 | Numbers appeared without their derivation on the slide | "Rigour, transparency and realism" is 30% here; a number without its formula reads as a guess | Every number on slides 3, 5 and 6 shows its formula or its source inline, and the appendix carries the full assumption register with IDs |
| D5 | No explicit map from the judging criteria to slides | Judges score against a rubric; making them hunt costs marks | The executive summary carries a **Board checklist strip** (B1 to B5 → slide numbers), and each core slide's section chip names the Board item it answers |
| D6 | The moneyshot competed with many panels of similar size | No single memorable number | Exactly one moneyshot (slide 7), the largest numeral in the deck, repeated in small type on slides 1 and 2 only |
| D7 | Brief compliance was complete but the "why this and not the others" was thin | Decision quality here is 25% and asks for honest weighing | Slide 6 treats Scale, Funnel and Kill symmetrically with the same five criteria, the same chart type and a scored heatmap, before slide 7 names the recommendation |

### 1.4 Deliverables (all under `nsbc-case/`)

| Path | What | Built in step (§15) |
|---|---|---|
| `case/01-nsbc-toing-case.md` | Verbatim case text with coverage IDs (§4) | 1 |
| `research/raw/R-A-swiggy.md`, `R-B-rivals-regulation.md`, `R-C-economics-market.md` | Fact tables (§5), copied from this plan, then verified | 1 to 2 |
| `research/raw/R-*-verification.md` | Verifier reports | 2 |
| `primary/survey_form.md` | Survey text the user pastes into Google Forms (§6.2) | 1 |
| `primary/cart_sampling_protocol.md`, `primary/cart_log.csv` | Cart-sampling instructions and the empty log the team fills (§6.3) | 1 |
| `primary/survey_responses.csv` | Google Forms export (the user downloads it) | user, 30 Sep |
| `primary/analyze_primary.py` → `primary_outputs.json`, `primary_tables.md` | Primary-research analysis (§6.4), verbatim code | 4, re-run 11 |
| `model/toing_model.py` → `model_outputs.json`, `model_tables.md` | Single source of truth for every modelled number (§7) | 3 |
| `model/build_excel.py` → `Toing_Unit_Economics_Model.xlsx` | Excel twin with a Checks sheet (§7.6) | 3 |
| `model/export_values.py` → `deck/values.js` | The `V` object pasted into every slide script (§7.7) | 3, re-run 11 |
| `research/parts/part-A.md` to `part-F.md` | Six writer parts | 6 |
| `research/toing-research.md` | The research document, 38,000 to 50,000 words, 90+ tables (§8) | 10 |
| `research/build_pdf.py` → `toing-research.html`, `.pdf` | Consulting-style PDF | 10 |
| Figma Slides file "Toing: Swiggy's ₹99 Problem \| Team IdeaForge \| NSBC Consilium'26" | The 11-slide native deck (§9 to §13) | 7 to 9 |
| `deck/figma.md` | File key, URL, slide IDs, build log, touchpoint log, model-change log | 7 onward |
| `deck/TeamIdeaForge_NSBC_Consilium26_preview.pdf` | Raster fallback from 3840px screenshots | 12 |
| `finals/talk-track.md`, `finals/qa-bank.md` | Finals kit (§16) | 13 |

The **real submission PDF** comes from Figma: File → Export → PDF, saved as
`TeamIdeaForge_NSBC_Consilium26_Prelims.pdf` (the user does this by hand).

---

## 2. Reading list and ground rules

### 2.1 Read before doing anything (main agent)

1. `CLAUDE.md` at the repo root, all of it. Pay particular attention to:
   - §0, the two-layer pipeline
   - §1, the EY density doctrine
   - §5, content integrity
   - §7, the failure modes. The preamble in §11 already handles §7.1, §7.2, §7.7 and §7.10.
2. This plan, all of it, once, before step 1.
3. The case PDF, extracted with PyMuPDF (§4).
4. `deck-system/slide-archetypes.md`. The forms in §10.3 come from here.
5. The skill: invoke `case-competition-deck` at Touchpoint A (§3.6) and read:
   - its `SKILL.md`
   - `references/structure.md`
   - `references/case_types/strategy.md`, `references/case_types/marketing.md` and
     `references/case_types/operations.md` (this case is a strategy decision whose arithmetic is
     an operations problem and whose funnel option is a marketing problem)
   - `references/rhetoric.md`
   - `references/archetypes.md`, sections H, I, K, L, M, N, P, P-supplement, R, S, T, U, V and W
   - `references/frameworks.md`, the entries named in §3.5

### 2.2 Content integrity (non-negotiable; CLAUDE.md §5 plus the case rules)

- **Never fabricate primary research.** No invented survey numbers, interview quotes, cart
  prices or "students told us" lines. Survey and cart figures come only from
  `primary/primary_outputs.json`, which is computed by code from the files the team fills.
- **Never overwrite a case fact** (C01 to C14). Conflicts go to §5.4.
- **Every quantitative claim carries a source.** A tag in the research document, and a
  pipe-separated source line on the slide.
- **India-first figures.** ₹ with lakh and crore grouping ("₹1,20,000 Cr"). Benchmarks are Indian
  where one exists. International evidence (Meituan, DoorDash, Grab) appears only as behavioural
  or operational evidence, never as a ₹ input.
- **Precision stays at what the source supports.** "About 1 in 3", not "33.4%", unless the
  source gives the decimal. Model outputs are shown to whole rupees per order and to ₹0.1 Cr for
  totals under ₹10 Cr, whole ₹ Cr above.
- **Assumptions are always labelled.** Every assumption has an ID (A01…) in the register (§7.2).
  On core slides, an assumed number carries "(A0x)" or "est." in its label; the appendix lists
  every load-bearing one with its basis.
- **Propagate every change.** If a number changes, re-run the model, regenerate `values.js`,
  rebuild the affected slides, and grep the deck text for the old value (V5).

### 2.3 Standing memory that applies (already loaded in your context; obey it)

- `feedback_no_em_dash_no_hooks.md`: writing rules and density.
- `feedback_cover_style.md`: cover and thank-you layout.
- `feedback_no_coauthor_trailer.md`: no AI trailer on commits.
- `design_schema_innovators_court.md` does **not** apply. It covers the python-pptx template deck
  for the Innovator's Court competition only; this deck is Figma-native.
- `india_market_research_context.md` does not apply (privacy-tech data), except its general rule:
  size markets bottom-up from counted units.

## 3. The argument (engineered with the `case-competition-deck` skill; do not change)

**Case type:** strategy decision whose arithmetic is an operations problem (last-mile cost per trip)
and whose funnel option is a marketing problem (CAC, LTV). Audience: Swiggy's Board.

**What the public record adds (cited, R1):** Toing is now in ~50 cities (Swiggy Q1 FY27 letter);
33M weekly users and 14.5M downloads in a quarter (Sensor Tower via CLSA, Storyboard18, Sep 2026);
Platform Innovations, which houses Toing, lost ₹131 Cr in Q1 FY27 vs ₹58 Cr in Q4 FY26; Swiggy says
2 in 3 new Toing users are new to the platform or dormant, and that Toing's spend is "largely new user
acquisition"; CLSA downgraded Swiggy citing Toing's drag on contribution margin; Eternal refuses to
clone Toing and pilots office pickup pods (Zomato Now); Rapido Ownly runs 0% commission with a ₹30
customer trip fee at 60k orders a day in Bengaluru; Karnataka's welfare fee is 1% capped at ₹0.50 a
food order (from 13 Feb 2026); GST at 18% applies to delivery fees under sec 9(5) from 22 Sep 2025.

**The recommendation (R\*), verbatim everywhere:** *Keep Toing but stop paying for ₹99 trips:
rebuild it around pooled Drops and slot batching, and grow it only where the trip pays for itself.*
Operationally: within 30 days a ₹20 door fee outside Drops, slot batching, fewer coupons, a freeze
on paid installs; within 90 days 40 pilot Drop sites (hostel gates, PG lobbies, office desks) in four
cities; gates at month 3 and month 6; if the gates fail, a clean shutdown (the Kill path).

**Why contrarian:** management scales reach with free delivery; analysts and Eternal say kill.
Both treat price as the problem. The case's first line says the problem is the trip. We change the
trip, not the price. Snacc bought speed with cost; Toing can buy cost with time.

**Foreshadow (slide 4):** "every low-basket model that survived did it by moving the trip cost off
the order" (Ownly, Instamart densification, Dunzo batching, Zomato Now pods vs Snacc, Everyday,
Quick). **Moneyshot (slide 7 only, repeated small on 1 and 2):** ₹1,745 Cr, the three-year gap
between the rebuild and scaling Toing as it runs, decomposed into order losses ₹1,200 Cr, paid
installs ₹390 Cr, trade-down ₹178 Cr, overhead ₹15 Cr, migration credit −₹39 Cr.
**Double synthesis:** "Conclusively" card on slide 6; "Therefore" so-what on slide 9.

### 3.6 Skill touchpoints
- A (step 0): invoke `case-competition-deck` in generate mode; confirm contrarian, foreshadow,
  symmetric, moneyshot, double synthesis map to slides 4, 6, 7, 9.
- B (before slides 6 and 7): re-read archetypes P, P-supplement, R, V.
- C (after build): critique mode on all screenshots; in-place wording fixes only.
- D (doc): rhetoric checklist on doc §2. E: polish search (TODO, Lorem, other-case names).
- F (finals kit): action-title test on the talk track.

## 5. Research phase

### 5.1 Source register (cite as [S##])
| ID | Source |
|---|---|
| S01 | Swiggy Q1 FY27 shareholder letter (Jul 2026), swiggy.com/corporate |
| S02 | Inc42, "Swiggy's money map" (2026): food CM 7.6% of GOV, revenue ₹2,208 Cr |
| S03 | MediaNama, "Toing app" (Sep 2025): ₹12 platform fee, no delivery or packaging fee, bills ₹346 vs ₹486 |
| S04 | MediaNama, Swiggy earnings call takeaways (Aug 2026): Majety and Kapoor remarks |
| S05 | Storyboard18 citing CLSA and Sensor Tower (Sep 2026): 33M WAU, 14.5M downloads |
| S06 | MediaNama, Eternal tests Zomato Now pods (Aug 2026): Goyal remarks |
| S07 | Entrackr and MediaNama (Feb 2026): Snacc shut |
| S08 | MediaNama (Mar 2026), Business Today (Jul 2026): Rapido Ownly |
| S09 | Deccan Herald (2026): Karnataka 1% fee capped ₹0.50 |
| S10 | Inc42, Angel One (Sep 2025): 18% GST on delivery, sec 9(5) |
| S11 | Delivery-partner pay guides 2026: base ₹20 to ₹35 per order plus distance |
| S12 | Commission guides 2026: Swiggy base 17 to 25% |
| S13 | IIFL (Aug 2022): Dunzo batching saved ₹8 to ₹10 an order |
| S14 | Eternal Q1 FY27 results: food adj. EBITDA 5.6% of NOV |
| S15 | Morwitz, Steckel and Gupta (2007), International Journal of Forecasting |

### 5.4 Data conflicts (appendix and doc App E)
| Topic | Conflict | Resolution |
|---|---|---|
| Core AOV | Case ₹700; Q1 FY27 implies ~₹500 (₹9,490 Cr over ~188M orders) | Case figure on slides; answer holds at ₹500 (EBITDA ₹15.5 an order) |
| Toing footprint | Case: starting in Pune; letter: ~50 cities | Case framing kept; public scale cited as public |
| Toing loss | Letter: spend "largely acquisition"; our triangulation: two-thirds per-order | Shown as estimate with method |

### 5.5 Update protocol
A verified figure replaces a model default only when a verifier marks it CORRECTED with a primary
source; log it, re-run the model, regenerate `values.js`, rebuild affected slides.

---

## 4. Case transcription and coverage IDs (step 1)

### 4.1 Extract the case verbatim

Run from `nsbc-case/`:
```python
import fitz, io
d = fitz.open("6ab56a8061b52_nsbc.pdf")
out = []
for i, p in enumerate(d):
    out.append(f"\n<!-- page {i+1} -->\n" + p.get_text())
io.open("case/_raw.txt", "w", encoding="utf-8").write("".join(out))
print(d.page_count)   # must print 7
```

### 4.2 Write `case/01-nsbc-toing-case.md`

- Title line: `# NSBC, Consilium'26 (NSUT): Toing, Swiggy's ₹99 problem (verbatim case text)`.
- Keep every sentence of pages 2 to 7 verbatim, in order, under the case's own headings
  (The Situation, Your mandate, Metric for judgement, Rules, Format, Guidelines for submission).
- Insert the IDs from §1.1 in bold before the sentence each covers: **C01** to **C14**, **O1** to
  **O4**, **B1** to **B5**, **J1** to **J5**, **R1** to **R4**, **G1** to **G5** (G1 to G5 are
  the five numbered submission guidelines on p.7, where G4 is "Facts about the company come only
  from this document" and G5 is "There is no single right answer").
- Reproduce the judging table as a Markdown table.
- Delete `case/_raw.txt` afterwards.

### 4.3 Coverage matrix (copy into the research document §1, and check it at V7)

| ID | Requirement | Answer in one line | Doc § | Slide and region |
|---|---|---|---|---|
| B1 | Per-order unit economics today | Customer pays {V.t_cust_total}; restaurant keeps {V.t_rest_keeps}; delivery costs {V.t_rider}; Swiggy is left with {V.t_contrib} per order (contribution) | 9 | 3, hero waterfall + assumption table |
| B2 | Levers and magnitudes, who controls them | Six levers quantified in ₹ per order; four need density and two need the customer to accept a worse experience | 11 | 5, lever waterfall + control heatmap |
| B3 | Funnel migration share, period, payback vs CAC | Break-even migration {V.fun_m_breakeven_pct} within 24 months against a paid-acquisition benchmark of {V.cac_paid}; the funnel is {V.fun_multiple}x dearer than paid marketing at realistic migration | 12 | 6, funnel identity chart + table |
| B4 | Competitive reading, Eternal's likely response | Eternal's dominant response is to stay out and let Swiggy carry the loss; our call removes that asymmetry | 14 | 8, game tree + response matrix |
| B5 | What would change our mind, 12-month signals | Three flip assumptions with thresholds and a 3/6/12-month gate dashboard | 16 | 9, flip cards + gate dashboard |
| O1 to O4 | One primary recommendation, others shown worse | Recommendation R* (§3.2) against Scale, Funnel and Kill-only on the same five criteria | 13 | 2, 6, 7 |
| J3 | Insight with primary research | Survey n = {P.n_total} and {P.n_carts} carts, method disclosed | 10 | 4, primary panels; 10, method box |
| R2 | Disclose sample size and method | Printed on slide 4 and slide 10 | 10 | 4, 10 |
| G4 | Company facts only from the case | Case figures on slides; public disclosures used only to decompose, labelled | 0, App E | 10 |

(The `{V.x}` and `{P.x}` placeholders are filled from `deck/values.js` in step 5; see §7.7.)

---

## 6. Primary research (the team runs it; the agent writes the instruments and the analysis)

### 6.1 Why and what

Insight is 20% of the score, and the case says primary research counts, provided sample size and
method are disclosed. Two instruments, both cheap and both fast:

| Instrument | What it measures | Feeds |
|---|---|---|
| **Survey** (Google Form, 14 questions, about 3 minutes) | Whether Toing's target user is already a Swiggy or Zomato customer (the funnel's incrementality), frequency at ₹99, willingness to walk to a pickup point or pre-order a slot (the density levers), fee tolerance, pass uptake, in-app versus separate-app preference, trade-down from ₹250+ orders (cannibalisation), expected ₹400+ ordering after the first salary (migration intent) | Slides 4, 5, 6, 9 and the appendix; model inputs under §6.6 |
| **Cart sampling** (no orders placed) | What the customer actually pays at checkout on Toing versus Swiggy versus Zomato, line by line, at ₹99, ₹149, ₹299 and ₹699 baskets, at four Pune addresses, lunch and dinner | Slide 3 (the "customer pays" line of B1), slide 5, the appendix; model inputs under §6.6 |

**Honest limits, printed on slide 10 and in doc §10.6:**
- The survey is a convenience sample of Delhi NCR students and young earners reached through
  college WhatsApp groups, used as a proxy for Pune's student market (both are multi-college
  student hubs). It is not a random sample of Toing users.
- Stated intentions overstate behaviour (Morwitz, Steckel and Gupta, 2007, International Journal
  of Forecasting), so migration intent is shown as an upper bound, never as a forecast.
- Cart sampling observes prices and fees at checkout. It does not observe Swiggy's costs,
  commissions or rider pay.

### 6.2 `primary/survey_form.md` (write verbatim; the user pastes it into Google Forms)

The agent writes this file exactly. The user creates the form (Google Forms, "Anyone with the link",
**do not collect email addresses**, one response per person not enforced), sets every question to
Required except Q5 (multi-select, still required), and circulates the link on the evening of
**28 Sep** or by **9 AM on 29 Sep** at the latest. The form closes at **1:00 PM IST on 30 Sep**.
Then: Responses → Download responses (.csv) → save as `nsbc-case/primary/survey_responses.csv`.

Every question title must begin with its number exactly as written ("Q1.", "Q2." …): the analysis
code matches columns on that prefix.

```text
FORM TITLE: Budget meals and food delivery: a 3-minute survey

FORM DESCRIPTION:
We are a student team from DTU, GGSIPU and DU working on a business case for Consilium'26 at NSUT.
This anonymous survey takes about 3 minutes. We do not collect names, emails or phone numbers.
Results are reported only as totals.

Q1. Which describes you best?
  - College student living in a hostel
  - College student living in a PG or rented flat
  - College student living with family
  - Working, in the first 3 years of my career
  - Other

Q2. In which city do you live most of the month?
  - Delhi NCR
  - Pune
  - Bengaluru
  - Mumbai
  - Hyderabad
  - Other

Q3. In the last 30 days, how many times did you order food online (any app)?
  - 0
  - 1 to 2
  - 3 to 5
  - 6 to 10
  - 11 to 20
  - More than 20

Q4. What is the item total (before fees) of your typical food delivery order?
  - Under ₹100
  - ₹100 to ₹150
  - ₹151 to ₹250
  - ₹251 to ₹400
  - ₹401 to ₹700
  - Above ₹700

Q5. Which of these did you order food from in the last 90 days? (select all that apply)
  - Swiggy
  - Zomato
  - Toing
  - Rapido Ownly
  - magicpin
  - EatSure
  - Zepto Café
  - Blinkit Bistro
  - Directly from a restaurant or mess (phone or WhatsApp)
  - None of these

Q6. Before today, had you heard of Toing, Swiggy's app for meals from ₹49 to ₹150?
  - Yes, and I have used it
  - Yes, but I have never used it
  - No

Q7. If a filling meal cost ₹99 delivered, how many times a month would you order it?
  - 0
  - 1 to 2
  - 3 to 5
  - 6 to 10
  - More than 10

Q8. For ₹30 off every meal, would you collect your order from a pickup point within a 5-minute walk (hostel gate, campus kiosk, PG lobby)?
  - Yes, always
  - Sometimes
  - No

Q9. For ₹20 off, would you order ahead for a fixed delivery slot (for example, order by 11:30 AM for a 1:00 PM delivery)?
  - Yes, always
  - Sometimes
  - No

Q10. On a ₹99 meal, the most you would pay as a delivery fee is:
  - ₹0
  - ₹5
  - ₹10
  - ₹15
  - ₹20 or more

Q11. Would you pay ₹49 a month for free delivery on unlimited meals under ₹150?
  - Yes
  - Maybe
  - No

Q12. Where would you rather order ₹99 meals?
  - Inside the Swiggy or Zomato app I already use
  - In a separate budget-meals app
  - No preference

Q13. Think of your last few food orders above ₹250. If a filling ₹99 option had been available for the same craving, how many of those would you have switched to it?
  - I had no orders above ₹250
  - None
  - A few
  - About half
  - Most
  - All

Q14. Once you earn ₹40,000 or more a month, how many food orders of ₹400 or more do you expect to place in a month?
  - 0
  - 1 to 2
  - 3 to 5
  - 6 or more
  - Not sure
```

**Circulation note for the user (write at the end of the file):** post in at least 8 groups
across the four institutions, plus 2 working-alumni groups; one reminder at 9 PM on 29 Sep; do not
offer rewards; do not answer on behalf of others; do not edit responses. Target n ≥ 120; n ≥ 60 is
the minimum for any survey number to feed the model (§6.6).

### 6.3 `primary/cart_sampling_protocol.md` and `primary/cart_log.csv`

**Protocol (write verbatim into the .md file):**

1. **Never place an order.** Build the cart, open the checkout or bill summary, record, screenshot,
   then empty the cart.
2. **Apps:** Toing (Play Store or App Store), Swiggy, Zomato. Log in with a team member's own
   account. If Toing is not installable or not serviceable at the addresses, log one row per
   address with `note = "Toing unavailable"` and continue with the other two apps.
3. **Addresses** (set the delivery location by searching the landmark; do not save a home
   address):

   | Code | Landmark to search | Why |
   |---|---|---|
   | P1 | Symbiosis Law School, Senapati Bapat Road, Pune | Dense college cluster, Toing's launch city |
   | P2 | Viman Nagar, Pune (Symbiosis International University, Viman Nagar campus) | Students plus young earners |
   | P3 | MIT World Peace University, Kothrud, Pune | Large single campus with hostels |
   | P4 | Rajiv Gandhi Infotech Park Phase 1, Hinjewadi, Pune | Young-earner office cluster |

4. **Slots:** lunch 12:30 PM to 2:00 PM and dinner 8:00 PM to 10:00 PM, both on 29 Sep 2026. If
   a slot is missed, 30 Sep lunch is the fallback (note it in the `date` column).
5. **Baskets per address and slot:**
   - Toing: B1 = the cheapest filling meal (a thali, rice bowl or combo, not a drink or dessert);
     B2 = an item total as close to ₹149 as possible.
   - Swiggy: B1 = a single meal as close to ₹99 as possible (use the app's "99 Store" or
     "Under ₹150" filter if shown); B3 = item total ₹280 to ₹320; B4 = item total ₹650 to ₹750.
   - Zomato (addresses P1 and P4 only): B1, B3 and B4 as for Swiggy.
   - Target: Toing 16 carts, Swiggy 24, Zomato 12, a total of 52. Minimum for use in the model:
     8 Toing carts (§6.6).
6. **Record every fee line exactly as the bill shows it**, one row per cart, in
   `cart_log.csv`. If a fee is struck through and shown as ₹0, record 0 in the fee column and the
   struck value in `struck_fees`. Record any auto-applied discount in `discount`. If the app shows
   a membership offer (Swiggy One, Zomato Gold), record its text in `note`.
7. **Also record per Toing address, once per slot:** the number of restaurants listed on the home
   screen (scroll to the end), and the prices of the first 20 meals shown. Put these in the
   separate file `primary/toing_menu_scan.csv`.
8. **Screenshot every checkout** to `primary/screens/<app>_<addr>_<slot>_<basket>.png`. The
   screenshots are evidence; they are not placed in the deck.

**`cart_log.csv` header (write exactly this single line; the team fills the rows):**
```text
cart_id,app,addr,date,time,slot,basket,restaurant,items,item_total,delivery_fee,platform_fee,packaging_fee,small_cart_fee,other_fees,taxes_shown,discount,grand_total,eta_min,distance_km,struck_fees,note
```
Conventions: `app` ∈ {Toing, Swiggy, Zomato}; `slot` ∈ {L, D}; `basket` ∈ {B1, B2, B3, B4}; money in
plain rupees without the ₹ sign (e.g. `99`, `12.5`); blank if not shown; `taxes_shown` is the
total of any GST or "taxes and charges" line the app shows separately.

**`toing_menu_scan.csv` header:**
```text
addr,date,slot,restaurants_listed,p1,p2,p3,p4,p5,p6,p7,p8,p9,p10,p11,p12,p13,p14,p15,p16,p17,p18,p19,p20
```

### 6.4 `primary/analyze_primary.py` (write verbatim, then run from `nsbc-case/primary`)

```python
"""Primary research analysis for the Toing case (Team IdeaForge).
Reads survey_responses.csv, cart_log.csv and toing_menu_scan.csv if present.
Writes primary_outputs.json and primary_tables.md. Never invents data: a missing
file or a column with no answers produces n = 0 and None values."""
import csv, json, math, pathlib, statistics as st
HERE = pathlib.Path(__file__).parent

def wilson(k, n, z=1.96):
    if n == 0: return (None, None)
    p = k / n; d = 1 + z*z/n
    c = (p + z*z/(2*n)) / d; h = z*math.sqrt(p*(1-p)/n + z*z/(4*n*n)) / d
    return (round(100*(c-h)), round(100*(c+h)))

def pct(k, n): return None if n == 0 else round(100*k/n)

def load_csv(name):
    f = HERE / name
    if not f.exists(): return []
    with open(f, encoding="utf-8-sig", newline="") as fh:
        return list(csv.DictReader(fh))

def qcol(row_keys, q):
    for k in row_keys:
        if k.strip().startswith(q + "."): return k
    return None

def survey():
    rows = load_csv("survey_responses.csv")
    O = {"n_total": len(rows)}
    if not rows: return O, {}
    keys = list(rows[0].keys()); col = {f"Q{i}": qcol(keys, f"Q{i}") for i in range(1, 15)}
    def ans(q): return [r[col[q]].strip() for r in rows if col[q] and r[col[q]].strip()]
    dist = {}
    for q in [f"Q{i}" for i in range(1, 15) if i != 5]:
        a = ans(q); d = {}
        for x in a: d[x] = d.get(x, 0) + 1
        dist[q] = {"n": len(a), "counts": d, "pct": {k: pct(v, len(a)) for k, v in d.items()}}
    q5 = ans("Q5"); apps = ["Swiggy","Zomato","Toing","Rapido Ownly","magicpin","EatSure","Zepto Café","Blinkit Bistro","Directly from a restaurant or mess (phone or WhatsApp)","None of these"]
    dist["Q5"] = {"n": len(q5), "pct": {a: pct(sum(1 for x in q5 if a in x), len(q5)) for a in apps}}
    n5 = len(q5); either = sum(1 for x in q5 if ("Swiggy" in x or "Zomato" in x))
    O["k1_uses_swiggy_or_zomato_pct"] = pct(either, n5); O["k1_ci"] = wilson(either, n5)
    O["k1_new_to_category_pct"] = None if n5 == 0 else 100 - O["k1_uses_swiggy_or_zomato_pct"]
    O["k1_uses_swiggy_pct"] = dist["Q5"]["pct"].get("Swiggy")
    def share(q, yes):
        a = ans(q); k = sum(1 for x in a if x in yes); return pct(k, len(a)), wilson(k, len(a)), len(a)
    O["k2_pickup_always_pct"], O["k2_ci"], O["k2_n"] = share("Q8", ["Yes, always"])
    O["k2_pickup_any_pct"], _, _ = share("Q8", ["Yes, always", "Sometimes"])
    O["k3_slot_always_pct"], O["k3_ci"], O["k3_n"] = share("Q9", ["Yes, always"])
    O["k3_slot_any_pct"], _, _ = share("Q9", ["Yes, always", "Sometimes"])
    fees = {"₹0": 0, "₹5": 5, "₹10": 10, "₹15": 15, "₹20 or more": 20}
    fv = sorted(fees[x] for x in ans("Q10") if x in fees)
    O["k4_fee_median"] = st.median(fv) if fv else None
    O["k4_fee_ge10_pct"] = pct(sum(1 for v in fv if v >= 10), len(fv))
    O["k5_pass_yes_pct"], O["k5_ci"], O["k5_n"] = share("Q11", ["Yes"])
    O["k5_pass_yes_maybe_pct"], _, _ = share("Q11", ["Yes", "Maybe"])
    O["k6_prefer_inapp_pct"], O["k6_ci"], O["k6_n"] = share("Q12", ["Inside the Swiggy or Zomato app I already use"])
    O["k6_prefer_separate_pct"], _, _ = share("Q12", ["In a separate budget-meals app"])
    w = {"None": 0, "A few": 0.2, "About half": 0.5, "Most": 0.75, "All": 1.0}
    tv = [w[x] for x in ans("Q13") if x in w]
    O["k7_tradedown_rate"] = round(sum(tv)/len(tv), 3) if tv else None
    O["k7_half_or_more_pct"] = pct(sum(1 for v in tv if v >= 0.5), len(tv)); O["k7_n"] = len(tv)
    mid = {"0": 0, "1 to 2": 1.5, "3 to 5": 4, "6 to 10": 8, "More than 10": 12}
    fq = [mid[x] for x in ans("Q7") if x in mid]
    O["k8_freq_at_99"] = round(sum(fq)/len(fq), 1) if fq else None
    mid3 = {"0": 0, "1 to 2": 1.5, "3 to 5": 4, "6 to 10": 8, "11 to 20": 15, "More than 20": 24}
    f3 = [mid3[x] for x in ans("Q3") if x in mid3]
    O["k8_freq_now"] = round(sum(f3)/len(f3), 1) if f3 else None
    mid14 = {"0": 0, "1 to 2": 1.5, "3 to 5": 4, "6 or more": 7}
    m14 = [mid14[x] for x in ans("Q14") if x in mid14]
    O["k9_future_400_orders"] = round(sum(m14)/len(m14), 1) if m14 else None
    O["k9_ge3_pct"] = pct(sum(1 for v in m14 if v >= 4), len(m14))
    O["k10_aware_toing_pct"], _, _ = share("Q6", ["Yes, and I have used it", "Yes, but I have never used it"])
    O["k10_used_toing_pct"], _, _ = share("Q6", ["Yes, and I have used it"])
    q1 = ans("Q1"); O["n_students"] = sum(1 for x in q1 if x.startswith("College student")); O["n_earners"] = sum(1 for x in q1 if x.startswith("Working"))
    q2 = ans("Q2"); O["n_pune"] = sum(1 for x in q2 if x == "Pune"); O["n_delhi"] = sum(1 for x in q2 if x == "Delhi NCR")
    O["under150_typical_pct"] = pct(sum(1 for x in ans("Q4") if x in ("Under ₹100", "₹100 to ₹150")), len(ans("Q4")))
    return O, dist

def num(x):
    try: return float(x)
    except Exception: return None

def carts():
    rows = load_csv("cart_log.csv"); O = {"n_carts": len(rows)}
    if not rows: return O
    def fees(r): return sum(num(r.get(k)) or 0 for k in ["delivery_fee","platform_fee","small_cart_fee","other_fees"])
    for app in ["Toing", "Swiggy", "Zomato"]:
        for b in ["B1", "B2", "B3", "B4"]:
            rs = [r for r in rows if r["app"] == app and r["basket"] == b and num(r.get("item_total"))]
            if not rs: continue
            key = f"{app.lower()}_{b}"
            O[key + "_n"] = len(rs)
            O[key + "_item_med"] = round(st.median(num(r["item_total"]) for r in rs), 1)
            O[key + "_fees_med"] = round(st.median(fees(r) for r in rs), 1)
            O[key + "_deliv_med"] = round(st.median(num(r.get("delivery_fee")) or 0 for r in rs), 1)
            O[key + "_platform_med"] = round(st.median(num(r.get("platform_fee")) or 0 for r in rs), 1)
            O[key + "_pack_med"] = round(st.median(num(r.get("packaging_fee")) or 0 for r in rs), 1)
            O[key + "_disc_med"] = round(st.median(num(r.get("discount")) or 0 for r in rs), 1)
            O[key + "_total_med"] = round(st.median(num(r.get("grand_total")) or 0 for r in rs), 1)
            O[key + "_fee_pct_item"] = round(100 * O[key + "_fees_med"] / O[key + "_item_med"])
            eta = [num(r.get("eta_min")) for r in rs if num(r.get("eta_min"))]
            O[key + "_eta_med"] = st.median(eta) if eta else None
    O["n_toing_carts"] = sum(1 for r in rows if r["app"] == "Toing" and num(r.get("item_total")))
    O["toing_unavailable_rows"] = sum(1 for r in rows if "unavailable" in (r.get("note") or "").lower())
    scan = load_csv("toing_menu_scan.csv")
    if scan:
        prices = [num(r[f"p{i}"]) for r in scan for i in range(1, 21) if num(r.get(f"p{i}"))]
        rl = [num(r["restaurants_listed"]) for r in scan if num(r.get("restaurants_listed"))]
        O["toing_menu_n"] = len(prices)
        O["toing_menu_median"] = st.median(prices) if prices else None
        O["toing_menu_p25"] = round(st.quantiles(prices, n=4)[0]) if len(prices) >= 4 else None
        O["toing_menu_p75"] = round(st.quantiles(prices, n=4)[2]) if len(prices) >= 4 else None
        O["toing_restaurants_median"] = st.median(rl) if rl else None
    return O

if __name__ == "__main__":
    S, dist = survey(); K = carts()
    O = {**S, **K, "dist": dist}
    (HERE / "primary_outputs.json").write_text(json.dumps(O, indent=1, ensure_ascii=False), encoding="utf-8")
    L = ["# Primary research tables (generated)", "", f"Survey n = {S.get('n_total', 0)}; carts n = {K.get('n_carts', 0)}", ""]
    for k, v in O.items():
        if k != "dist": L.append(f"- {k}: {v}")
    L += ["", "## Survey distributions", ""]
    for q, d in dist.items():
        L += [f"### {q} (n = {d['n']})", "", "| Answer | % |", "|---|---|"]
        for a, p in d["pct"].items(): L.append(f"| {a} | {p} |")
        L.append("")
    (HERE / "primary_tables.md").write_text("\n".join(L) + "\n", encoding="utf-8")
    print("survey n", S.get("n_total", 0), "carts n", K.get("n_carts", 0), "toing carts", K.get("n_toing_carts", 0))
```

Run it once in step 4 with no data files. It must print `survey n 0 carts n 0 toing carts 0`
and write a JSON with those zeros. That proves the pipeline before real data arrives.

### 6.5 Timeline for the team (put this at the top of `primary/survey_form.md` and `primary/cart_sampling_protocol.md`, and repeat it in the final report)

| When (IST) | Who | What |
|---|---|---|
| 28 Sep, by 11 PM | User | Create the Google Form from §6.2 and post the link in the first groups |
| 29 Sep, 9 AM | User | Post in the remaining groups (at least 8 in total plus 2 alumni groups) |
| 29 Sep, 12:30 to 2 PM | Two team members | Cart sampling, lunch slot, all four addresses |
| 29 Sep, 8 to 10 PM | Two team members | Cart sampling, dinner slot; one survey reminder at 9 PM |
| 29 Sep, 10:30 PM | User | Save `cart_log.csv`, `toing_menu_scan.csv` and the screenshots into `nsbc-case/primary/`; tell the agent "carts in" |
| 30 Sep, 1:00 PM | User | Close the form, download the CSV to `nsbc-case/primary/survey_responses.csv`, tell the agent "survey in" |
| 30 Sep, 1 to 6 PM | Agent | §6.6 update, model re-run, rebuild the affected slides, all validators |
| 30 Sep, by 9 PM | User | Figma → File → Export → PDF; review; submit well before 11:59 PM |

### 6.6 How primary data enters the model and the slides (mechanical; no judgment)

After each "carts in" or "survey in" signal, run `python analyze_primary.py`, then apply these
rules in order, log every change in `deck/figma.md` under "Primary-data updates" (old value, new
value, rule), re-run the model (§7), re-run `export_values.py`, and rebuild the slides listed.

| Rule | Condition | Model input changed | Slides to rebuild |
|---|---|---|---|
| P1 | `n_toing_carts ≥ 8` | `T_FEES_CUST` (the customer-paid delivery + platform + small-cart fees on a Toing order) := `toing_B1_fees_med`; `T_DISC` := `toing_B1_disc_med` | 2, 3, 5, 6, 7 |
| P2 | `toing_menu_n ≥ 40` | `T_AOV` := `toing_menu_median` rounded to the nearest rupee, but only if it lies within ₹49 to ₹150 (case C02); otherwise keep ₹99 and log | 2, 3, 5, 6, 7 |
| P3 | `swiggy_B4_n ≥ 6` | None (display only): slide 3's core-order "customer pays" line shows the measured `swiggy_B4_fees_med` next to the model's figure | 3 |
| P4 | `n_total ≥ 60` and `k1_new_to_category_pct` not None | `NEW_TO_CAT` (the share of Toing's target users who are not already Swiggy or Zomato customers) := `k1_new_to_category_pct / 100` | 2, 6, 7 |
| P5 | `n_total ≥ 60` and `k7_tradedown_rate` not None | `CANNIB` := `k7_tradedown_rate` × `CANNIB_SCALER` (0.5, assumption A27: half of a stated switch materialises) | 6, 7 |
| P6 | `n_total ≥ 60` | `PICKUP_ACCEPT` := `k2_pickup_always_pct/100 + 0.5 × (k2_pickup_any_pct − k2_pickup_always_pct)/100` | 5, 7 |
| P7 | any n | Slide 4's survey panels and slide 10's method box always show the measured values with n printed; if `n_total < 60` every survey chart carries the label "directional, n = X" in `C.alert` | 4, 10 |
| P8 | `n_total = 0` at 30 Sep 2 PM | Slide 4's survey band is replaced by the fallback band in §12 (slide 4, block `SURVEY_FALLBACK`), which shows the validation plan instead of numbers | 4, 10 |

**What never changes, whatever the data says:** the recommendation (§3.2). The survey can move
the numbers on slides 6 and 7; §3.4 already shows the recommendation holds across the full range
of each input the survey feeds (the model's `robust` table proves it, §7.5). If a measured value
falls outside the range tested in `robust`, stop and report to the user before rebuilding;
do not rewrite the argument.

## 7. The model

Verbatim code lives in `nsbc-case/model/toing_model.py` (copied from the planning scratchpad, run and
verified). Outputs: `model_outputs.json`; `export_values.py` writes `deck/values.js`.

**Reference outputs (base):** ₹99 order: customer pays ₹115.95, revenue ₹23.04, rider ₹40,
contribution −₹27.33; core ₹700: revenue ₹166.3, CM ₹53.2, EBITDA ₹21.7; ratio 1.26. Lever bridge
−27.33 → +7.20 batching, +9.70 Drops, +8.26 door fee, +3.42 menus, +1.46 ads, +2.00 coupons,
+1.02 pass → +5.73. Drop order +7.17, door +4.29; break-even 3.3 meals a run. Triangulation: 2.39
lakh orders a day, ₹81 Cr a quarter (67% per-order, 33% installs). Funnel: ₹68 a month, ₹451 a user
in 12 months, 135% needed (CAC lens), 25% (LTV lens), 9.0x paid CAC. Paths 3-yr base: Scale −1,744,
Funnel −1,140, Kill −40, Rebuild +1 (EV +3 with gate). Flip points: rider ₹42.4, 5.5 meals a run,
26% trade-down. Decomposition 1,200 / 390 / 178 / 15 / −39 = 1,745.

## 8. Research document

`nsbc-case/research/toing-research.md`, 25,000+ words, written in parts by sub-agents from the raw
fact file and model tables, assembled and rendered with `build_pdf.py` (copied from
`mandamasterminds/research/`). Sections: 0 document control; 1 coverage matrix; 2 the answer;
3 the situation; 4 the market and the under-₹150 customer; 5 unit economics today; 6 triangulation;
7 levers; 8 density; 9 funnel; 10 primary research; 11 options; 12 recommendation; 13 competition;
14 regulation; 15 what would change our mind; 16 roadmap; 17 risks; 18 judge Q&A; appendices
(bibliography, model tables, assumptions, glossary, data conflicts).

## 9. Deck architecture

11 slides: 1 cover; 2 exec summary; 3 unit math (B1); 4 customer and primary research (seed);
5 levers (B2); 6 options and funnel (B3, "Conclusively"); 7 the call and moneyshot; 8 rivals and
rules (B4); 9 signals and roadmap (B5, "Therefore"); 10 appendix; 11 thank you. Slide code is in
`nsbc-case/deck/slides/s01.js` to `s11.js`, each pre-flighted with `deck/mock_figma.js`.
Density bar: 150 to 420 nodes and at least 8 forms per core slide.

---

## 10. Design system

### 10.1 Palette: Swiggy orange + slate + ink (the Satoshi Gate structure, re-tinted)

| Role | Hex | RGB 0 to 1 | Use |
|---|---|---|---|
| primary | #D95F0E | 0.851, 0.373, 0.055 | active ribbon tag, panel titles, the recommended path, white-text chips (deep orange, so white text passes 3:1 at 22pt bold) |
| orange | #FC8019 | 0.988, 0.502, 0.098 | bars and fills that carry **ink** text (Swiggy's bright orange; never put white text on it) |
| primaryDeep | #282C3F | 0.157, 0.173, 0.247 | verdict and thesis cards, counter chips, the core ₹700 business, deep tier |
| accent | #F5C518 | 0.961, 0.773, 0.094 | back-cards, chips, gold headline text on slate cards |
| alert | #C81E1E | 0.784, 0.118, 0.118 | losses, negative contribution, rejected paths, "directional" warnings |
| alertTint | #FDE2E2 | 0.992, 0.886, 0.886 | pale red fills |
| rival | #1D4E89 | 0.114, 0.306, 0.537 | Eternal/Zomato, Rapido, other rivals |
| rivalTint | #DCE6F7 | 0.863, 0.902, 0.969 | pale blue fills |
| good | #12805C | 0.071, 0.502, 0.361 | positive contribution, pass marks, bull case |
| goodTint | #D8F0E6 | 0.847, 0.941, 0.902 | pale green fills |
| tint | #FFE8D6 | 1.000, 0.910, 0.839 | pale orange header rows and quiet panels |
| ink | #0A0A0A | 0.039, 0.039, 0.039 | every stroke and all body text |
| surface | #EDEDED | 0.929, 0.929, 0.929 | neutral bars, grid lines |
| surfaceAlt | #F6F4F1 | 0.965, 0.957, 0.945 | zebra rows |
| white | #FFFFFF | 1, 1, 1 | slide background |

**Heat scales** (used by `heatmap()`; cells at levels 4 and 5 get white text)

| Scale | L1 | L2 | L3 | L4 | L5 |
|---|---|---|---|---|---|
| HO (orange: intensity, exposure) | #FFF1E6 | #FDC9A0 | #FB9A55 | #D95F0E | #8A3A06 |
| HG (green: fit, score, pass) | #EAF6F0 | #BFE5D3 | #7CC9A6 | #2E9E6E | #0B6B47 |
| HR (red: risk, loss) | #FDE2E2 | #F5A3A3 | #E75B5B | #C81E1E | #7F1010 |

**Colour semantics are fixed across all 11 slides** (symmetric treatment, skill rhetoric §3):
core ₹700 business = `primaryDeep`; Toing today = `alert`; Toing with levers (door) = `orange`;
the recommended path = `primary`; Scale = `alert`; Funnel = `rival`… no: **Funnel = `accent`**;
Kill-only = `surface`; rivals = `rival`; positive values = `good`, negative = `alert`.
(Scale `alert`, Funnel `accent`, Kill-only `surface` with ink text, Recommended `primary`.)

### 10.2 Type, skeleton and ribbon

**Type**
- Poppins Bold and ExtraBold: display, headlines, chips, numerals, panel titles, chart values.
- Inter Semi Bold and Bold: body, table cells, labels, inline bold keywords (`RT()` helper).
- **Floor 22pt** for every text node, including chart labels and table cells. The only exemptions:
  - source lines (14pt; the text starts with "Source:")
  - `LOGO:` placeholder labels (14pt)
  - text inside nodes named `BIBLIO` or `FINEPRINT` on the appendix slide only (16pt minimum)
- **Five type levels on every core slide** (EY doctrine): headline 34 to 40pt; hero numerals 44
  to 72pt; panel titles 24pt; body 22pt with bold keywords; source 14pt.

**Skeleton (core slides 2 to 9 and appendix slide 10)**

| Element | Geometry |
|---|---|
| Ribbon | x64, y40, h60 (eight tags on core slides; four on the appendix) |
| Counter chip | x1720, y40, 136 × 60, text "N / 8" on core slides, "A1" on the appendix |
| Section chip | x64, y118, h56 (text and width per slide in §9.4); names the Board item (B1 to B5) where one applies |
| Headline | x64, y188, w1792, Poppins Bold 40pt, auto-steps down to 34pt, at most 2 lines (≤ 112px) |
| Content zone | y318 to 1030 |
| So-what bar | the last band of every core slide, a layered `primaryDeep` card with an accent "SO WHAT" chip and one sentence in white 24pt (§9.3) |
| Source line | x64, y1046, w1792, right-aligned, 14pt, text starts "Source:" |

**Main ribbon (core slides)**

| Index | Label | Width | Active on slide |
|---|---|---|---|
| 0 | SUMMARY | 172 | 2 |
| 1 | UNIT MATH | 208 | 3 |
| 2 | CUSTOMER | 192 | 4 |
| 3 | LEVERS | 160 | 5 |
| 4 | OPTIONS | 172 | 6 |
| 5 | THE CALL | 190 | 7 |
| 6 | RIVALS | 160 | 8 |
| 7 | SIGNALS | 172 | 9 |

The eight tags plus seven 26px gaps end at x = 64 + 1426 + 182 = 1672. A wire runs from there to the
counter chip at x1720.

**Appendix ribbon:** `ASSUMPTIONS` 260 · `METHOD` 190 · `MODEL` 170 · `SOURCES` 210, all four
active (`[0,1,2,3]`), because the one page covers all four.

The cover and thank-you slides have no ribbon.

### 10.3 Forms catalogue: every visual form and where it appears

This is the density contract. Each core slide must show **at least 8 forms**, at least 3 of them
data visualisations (marked ●), and the deck as a whole must show every row.

| Form | Helper(s) in §11 | Slide(s) |
|---|---|---|
| ● Waterfall | `waterfall()` | 3 (₹99 order, hero), 5 (lever bridge, hero), 7 (moneyshot, hero) |
| ● Stacked horizontal bar ("where each rupee goes") | `stackH()` | 3 (₹99 vs ₹700 split), 4 (app overlap), 7 (lane revenue mix) |
| ● Vertical bars (signed) | `vBars()` | 2 (per-order contribution by path), 6 (3-year value by path), 8 (per-order regulatory cost) |
| ● Stacked vertical bars | `stackV()` | 4 (under-₹150 demand pool), 6 (funnel cost build) |
| ● Line chart | `lineChart()` | 5 (contribution vs orders per run: the density curve), 6 (funnel break-even migration vs CAC), 9 (lane ramp against gates) |
| ● Horizontal bars | `hBars()` | 4 (survey: pickup, slot, fee, pass), 8 (rival low-AOV bets), 9 (flip thresholds) |
| ● Heatmap | `heatmap()` | 5 (levers × control × experience cost × density need), 6 (options × criteria scored), 8 (Eternal response payoffs) |
| ● Donut | `donut()` | 3 (who keeps the ₹99), 4 (in-app vs separate preference) |
| ● Tornado | `tornado()` | 9 (what moves lane contribution most) |
| ● Threshold gauges | `gauge()` | 9 (3/6/12-month gates) |
| Table | `addTable()` | 2, 3, 4, 5, 6, 7, 8, 9, 10 |
| Formula callout | `formulaBox()` | 3 (contribution formula), 5 (batching cost), 6 (funnel identity), 7 (lane contribution) |
| Game tree | nodes + `addLine()` | 8 (Swiggy move → Eternal response) |
| Flow chain (process) | `flow()` | 7 (how a DropPoint order moves), 9 (90-day sunset) |
| Gantt timeline | `gantt()` | 9 (12-month roadmap) |
| Phone mockup | `phone()` | 7 (the in-app ₹99 lane with DropPoint slot picker) |
| Timeline strip (precedents) | `addWireH()` + badges | 4 (Snacc, Everyday, Quick, Bolt, 99 Store, Toing) |
| Numbered badge list | `badgeList()` | 2, 6, 9 |
| Layered sticker cards | `layered()` | all core slides (verdicts, so-what bars) |
| RAG chips | `ragChip()` | 5, 6, 8, 9 |
| Quote cards (named third parties only) | `quoteCard()` | 7 (two named public statements) |
| Rich text with bold inline keywords | `RT()` | all core slides (commentary panels) |
| Dashed band dividers | `dashedH()` | 3, 5, 6, 8 |

---

## 11. PREAMBLE (paste verbatim at the top of every build script)

This block is self-contained; there is no need to open the kit. It is the tested Dunzo/Satoshi Gate
preamble as extended for Dream11, with these changes:
1. It is re-tinted per §10.1 (adds `orange`, `rival`, `rivalTint`, `HO`).
2. **All non-horizontal lines use vector paths** (`addLine`, `addArrow`, `addPoly`); rotated
   rectangles are never used (CLAUDE.md §7.10).
3. New helpers: `RT` (rich text with bold and coloured runs), `stackV`, `tornado`, `flow`,
   `gauge`, `numCard`, `soWhat`. The Dream11 `kpiTree` was never implemented and is not used.
4. `skeleton()` uses the 8-tag ribbon and the narrower counter chip.
5. `addFrame` sets `clipsContent = false` so a validator, not a clip, reveals overflow.

The `V` values object (§7.7) is pasted **after** the preamble in every script.

```js
// ===== TOING PREAMBLE v1 =====
const C = {
  primary:{r:0.851,g:0.373,b:0.055}, orange:{r:0.988,g:0.502,b:0.098}, primaryDeep:{r:0.157,g:0.173,b:0.247},
  accent:{r:0.961,g:0.773,b:0.094}, alert:{r:0.784,g:0.118,b:0.118}, alertTint:{r:0.992,g:0.886,b:0.886},
  rival:{r:0.114,g:0.306,b:0.537}, rivalTint:{r:0.863,g:0.902,b:0.969},
  good:{r:0.071,g:0.502,b:0.361}, goodTint:{r:0.847,g:0.941,b:0.902},
  tint:{r:1.000,g:0.910,b:0.839}, ink:{r:0.039,g:0.039,b:0.039}, surface:{r:0.929,g:0.929,b:0.929},
  surfaceAlt:{r:0.965,g:0.957,b:0.945}, white:{r:1,g:1,b:1}
};
const HO=[{r:1.000,g:0.945,b:0.902},{r:0.992,g:0.788,b:0.627},{r:0.984,g:0.604,b:0.333},{r:0.851,g:0.373,b:0.055},{r:0.541,g:0.227,b:0.024}];
const HG=[{r:0.918,g:0.965,b:0.941},{r:0.749,g:0.898,b:0.827},{r:0.486,g:0.788,b:0.651},{r:0.180,g:0.620,b:0.431},{r:0.043,g:0.420,b:0.278}];
const HR=[{r:0.992,g:0.886,b:0.886},{r:0.961,g:0.639,b:0.639},{r:0.906,g:0.357,b:0.357},{r:0.784,g:0.118,b:0.118},{r:0.498,g:0.063,b:0.063}];
await Promise.all([{family:"Poppins",style:"Bold"},{family:"Poppins",style:"ExtraBold"},
  {family:"Inter",style:"Semi Bold"},{family:"Inter",style:"Bold"}].map(f=>figma.loadFontAsync(f)));
const warnings = [];
function addFrame(parent, x, y, w, h, fill, strokeColor, strokeWeight, name) {
  const f = figma.createFrame(); parent.appendChild(f); f.resize(w, h);
  f.fills = fill ? [{ type: "SOLID", color: fill }] : [];
  if (strokeColor) { f.strokes = [{ type: "SOLID", color: strokeColor }]; f.strokeWeight = strokeWeight || 2; }
  f.cornerRadius = 0; f.clipsContent = false; f.x = x; f.y = y; if (name) f.name = name; return f; }
function addRect(parent, x, y, w, h, fill, strokeColor, strokeWeight) {
  const r = figma.createRectangle(); parent.appendChild(r); r.resize(Math.max(w,0.5), Math.max(h,0.5));
  r.fills = fill ? [{ type: "SOLID", color: fill }] : [];
  if (strokeColor) { r.strokes = [{ type: "SOLID", color: strokeColor }]; r.strokeWeight = strokeWeight || 2; }
  r.cornerRadius = 0; r.x = x; r.y = y; return r; }
function addEllipse(parent, x, y, w, h, fill, strokeColor, strokeWeight) {
  const e = figma.createEllipse(); parent.appendChild(e); e.resize(w, h);
  e.fills = fill ? [{ type: "SOLID", color: fill }] : [];
  if (strokeColor) { e.strokes = [{ type: "SOLID", color: strokeColor }]; e.strokeWeight = strokeWeight || 2; }
  e.x = x; e.y = y; return e; }
function addText(parent, family, style, size, color, chars, x, y, w, h, hAlign, vAlign, autoH) {
  const t = figma.createText(); parent.appendChild(t);
  t.fontName = { family, style }; t.fontSize = size; t.characters = chars; t.fills = [{ type: "SOLID", color }];
  if (w !== undefined) { t.resize(w, h || 10); t.textAutoResize = autoH ? "HEIGHT" : "NONE"; }
  if (hAlign) t.textAlignHorizontal = hAlign;
  if (vAlign && !autoH) t.textAlignVertical = vAlign;
  t.x = x; t.y = y; return t; }
function addWireH(parent, x1, x2, y, color, thickness) { thickness = thickness || 2.5;
  return addRect(parent, Math.min(x1, x2), y - thickness / 2, Math.abs(x2 - x1), thickness, color); }
function addWireV(parent, x, y1, y2, color, thickness) { thickness = thickness || 2.5;
  return addRect(parent, x - thickness / 2, Math.min(y1, y2), thickness, Math.abs(y2 - y1), color); }
function addLine(p, x1, y1, x2, y2, color, th, dash) { const v = figma.createVector(); p.appendChild(v);
  const mx = Math.min(x1, x2), my = Math.min(y1, y2);
  v.vectorPaths = [{ windingRule: "NONE", data: "M " + (x1 - mx) + " " + (y1 - my) + " L " + (x2 - mx) + " " + (y2 - my) }];
  v.fills = []; v.strokes = [{ type: "SOLID", color: color || C.ink }]; v.strokeWeight = th || 2.5; v.strokeCap = "NONE";
  if (dash) { try { v.dashPattern = dash; } catch (e) {} }
  v.x = mx; v.y = my; return v; }
function addPoly(p, pts, fill, stroke, sw) { const v = figma.createVector(); p.appendChild(v);
  const mx = Math.min(...pts.map(q => q[0])), my = Math.min(...pts.map(q => q[1]));
  const d = pts.map((q, i) => (i ? "L " : "M ") + (q[0] - mx) + " " + (q[1] - my)).join(" ") + " Z";
  v.vectorPaths = [{ windingRule: "NONZERO", data: d }];
  v.fills = fill ? [{ type: "SOLID", color: fill }] : [];
  if (stroke) { v.strokes = [{ type: "SOLID", color: stroke }]; v.strokeWeight = sw || 2; } else { v.strokes = []; }
  v.x = mx; v.y = my; return v; }
function addArrow(p, x1, y1, x2, y2, color, th, head) { head = head || 16; color = color || C.ink;
  const a = Math.atan2(y2 - y1, x2 - x1), bx = x2 - head * Math.cos(a), by = y2 - head * Math.sin(a), w = head * 0.55;
  addLine(p, x1, y1, bx, by, color, th || 3);
  return addPoly(p, [[x2, y2], [bx + w * Math.sin(a), by - w * Math.cos(a)], [bx - w * Math.sin(a), by + w * Math.cos(a)]], color); }
function addDashedRow(parent, x, y, totalW, color, dashW, gapW, thickness) {
  dashW = dashW || 16; gapW = gapW || 10; thickness = thickness || 3; let cx = x;
  while (cx < x + totalW) { const w = Math.min(dashW, x + totalW - cx); addRect(parent, cx, y, w, thickness, color); cx += dashW + gapW; } }
function addChip(slide, x, y, w, h, text, frontColor, textColor, size) {
  addRect(slide, x + 5, y + 5, w, h, C.accent, C.ink, 2);
  const f = addFrame(slide, x, y, w, h, frontColor, C.ink, 2, "CHIP: " + text.slice(0, 20));
  addText(f, "Poppins", "Bold", size || 22, textColor, text, 10, 0, w - 20, h, "CENTER", "CENTER"); return f; }
function buildRibbon(slide, active, labels, widths, startX, y, h) {
  const act = Array.isArray(active) ? active : [active];
  startX = startX === undefined ? 64 : startX; y = y === undefined ? 40 : y; h = h === undefined ? 60 : h;
  const gap = 26; let x = startX; const centers = [];
  for (let i = 0; i < labels.length; i++) { const w = widths[i]; const on = act.indexOf(i) >= 0;
    if (on) addRect(slide, x + 8, y + 8, w, h, C.accent, C.ink, 2.5);
    const tag = addFrame(slide, x, y, w, h, on ? C.primary : C.accent, C.ink, 2, "TAG: " + labels[i]);
    addText(tag, "Poppins", "Bold", 24, on ? C.white : C.ink, labels[i], 0, 12, w, 36, "CENTER", "CENTER");
    const holeR = 7, holeY = y + h / 2 - holeR;
    addEllipse(slide, x + 10 - holeR, holeY, holeR * 2, holeR * 2, C.white, C.ink, 2);
    addEllipse(slide, x + w - 10 - holeR, holeY, holeR * 2, holeR * 2, C.white, C.ink, 2);
    centers.push({ x, w, y, h }); x += w + gap; }
  for (let i = 0; i < centers.length - 1; i++) { const a = centers[i], b = centers[i + 1];
    addWireH(slide, a.x + a.w - 10, b.x + 10, a.y + a.h / 2, C.ink, 2.5); }
  return x - gap; }
function sectionChip(slide, text, w, x, y) { return addChip(slide, x === undefined ? 64 : x, y === undefined ? 118 : y, w || 440, 56, text, C.primary, C.white, 22); }
function addTable(parent, x, y, colWidths, headerLabels, rows, opts) {
  opts = opts || {}; const headerFill = opts.headerFill || C.tint; const rowH = opts.rowH || 52; const headerH = opts.headerH || 52; const cellSize = opts.cellSize || 22;
  const align = opts.align || colWidths.map((w, c) => c === 0 ? "LEFT" : (c === colWidths.length - 1 ? "RIGHT" : "LEFT"));
  const tableW = colWidths.reduce((a, w) => a + w, 0); const bodyH = rowH * rows.length; const totalH = headerH + bodyH + (opts.totalRow ? 56 : 0);
  const table = addFrame(parent, x, y, tableW, totalH, C.white, C.ink, 2.5, opts.name || "TABLE: t");
  const header = addFrame(table, 0, 0, tableW, headerH, headerFill, null, 0, "HEAD"); let cx = 0;
  for (let c = 0; c < headerLabels.length; c++) {
    addText(header, "Poppins", "Bold", cellSize, opts.headerText || C.ink, headerLabels[c], cx + 12, 0, colWidths[c] - 20, headerH, align[c], "CENTER"); cx += colWidths[c]; }
  addRect(table, 0, headerH - 1, tableW, 2, C.ink); let ry = headerH;
  for (let r = 0; r < rows.length; r++) { const bg = (opts.rowFills && opts.rowFills[r]) || (r % 2 === 0 ? C.white : C.surfaceAlt);
    const row = addFrame(table, 0, ry, tableW, rowH, bg, null, 0, "ROW"); let cx2 = 0;
    for (let c = 0; c < rows[r].length; c++) {
      const col = (opts.cellColor && opts.cellColor(r, c)) || C.ink;
      const bold = c === 0 || (opts.boldCols && opts.boldCols.indexOf(c) >= 0);
      addText(row, "Inter", bold ? "Bold" : "Semi Bold", cellSize, col, rows[r][c], cx2 + 12, 0, colWidths[c] - 20, rowH, align[c], "CENTER"); cx2 += colWidths[c]; }
    addRect(table, 0, ry - 1, tableW, 1.5, C.ink); ry += rowH; }
  if (opts.totalRow) { const tf = addFrame(table, 0, ry, tableW, 56, opts.totalFill || C.primary, null, 0, "TOTAL");
    addText(tf, "Poppins", "Bold", 22, C.white, opts.totalRow[0], 12, 0, tableW - colWidths[colWidths.length - 1] - 20, 56, "LEFT", "CENTER");
    const lastColStart = colWidths.slice(0, -1).reduce((a, w) => a + w, 0);
    addText(tf, "Poppins", "Bold", 24, C.white, opts.totalRow[1], lastColStart + 12, 0, colWidths[colWidths.length - 1] - 20, 56, "RIGHT", "CENTER"); }
  let vx = 0; for (let c = 0; c < colWidths.length - 1; c++) { vx += colWidths[c]; addRect(table, vx - 1, 0, 1.5, totalH, C.ink); }
  return table; }
// ===== EXTRAS =====
function nm(n, name) { n.name = name; return n; }
function fmtN(v) { const neg = v < 0; let s = String(Math.round(Math.abs(v)));
  if (s.length > 3) { const last = s.slice(-3); let rest = s.slice(0, -3); const parts = [];
    while (rest.length > 2) { parts.unshift(rest.slice(-2)); rest = rest.slice(0, -2); }
    if (rest) parts.unshift(rest); s = parts.join(",") + "," + last; }
  return (neg ? "−" : "") + s; }
function rs(v) { return (v < 0 ? "−₹" : "₹") + fmtN(Math.abs(v)); }          // signed rupees: −₹24, ₹12
function rsp(v) { return (v < 0 ? "−₹" : "+₹") + fmtN(Math.abs(v)); }        // explicit sign: +₹12
function r1(v) { return (v < 0 ? "−₹" : "₹") + Math.abs(v).toFixed(1); }      // one decimal: −₹27.3
function r1p(v) { return (v < 0 ? "−₹" : "+₹") + Math.abs(v).toFixed(1); }    // one decimal, explicit sign: +₹5.7
function n1(v) { return (v < 0 ? "−" : "") + Math.abs(v).toFixed(1); }        // bare one-decimal number: −27.3
function n1p(v) { return (v < 0 ? "−" : "+") + Math.abs(v).toFixed(1); }      // bare, explicit sign: +7.2
function cr(v) { return (v < 0 ? "−₹" : "₹") + fmtN(Math.abs(v)) + " Cr"; }   // crore: −₹1,744 Cr
function crp(v) { return (v < 0 ? "−₹" : "+₹") + fmtN(Math.abs(v)) + " Cr"; } // crore, explicit sign
function pc(v, d) { return (v * 100).toFixed(d || 0) + "%"; }                  // 0.67 -> "67%"
function pv(v, suffix) { return (v === null || v === undefined) ? "n/a" : String(v) + (suffix || ""); } // primary values may be null
function fitText(t, maxW, min) { min = min || 22; while (t.width > maxW && t.fontSize > min) { t.fontSize = t.fontSize - 1; }
  if (t.width > maxW + 1) warnings.push("overflow: " + t.characters.slice(0, 40)); return t; }
function TL(p, x, y, size, chars, o) { o = o || {}; const t = addText(p, o.family || "Poppins", o.style || "Bold", size, o.color || C.ink, chars, x, y);
  if (o.maxW) fitText(t, o.maxW, o.min);
  if (o.rightAt !== undefined) t.x = o.rightAt - t.width;
  if (o.centerAt !== undefined) t.x = o.centerAt - t.width / 2;
  return t; }
function T(p, x, y, w, size, chars, o) { o = o || {};
  return addText(p, o.family || "Inter", o.style || "Semi Bold", size, o.color || C.ink, chars, x, y, w, o.h || 30, o.align || "LEFT", undefined, true); }
function TB(p, x, y, w, h, size, chars, o) { o = o || {};
  return addText(p, o.family || "Inter", o.style || "Semi Bold", size, o.color || C.ink, chars, x, y, w, h, o.align || "LEFT", "CENTER", false); }
// Rich text: parts = [["plain ", ""], ["bold keyword", "B"], [" orange keyword", "O"], [" red", "R"], [" green", "G"]]
function RT(p, x, y, w, size, parts, o) { o = o || {}; const chars = parts.map(q => q[0]).join("");
  const t = addText(p, "Inter", "Semi Bold", size, o.color || C.ink, chars, x, y, w, o.h || 30, o.align || "LEFT", undefined, true);
  let i = 0; parts.forEach(q => { const n = q[0].length, s = q[1] || "";
    if (n && s) { t.setRangeFontName(i, i + n, { family: "Inter", style: "Bold" });
      const col = s === "O" ? C.primary : s === "R" ? C.alert : s === "G" ? C.good : s === "D" ? C.primaryDeep : s === "W" ? C.white : s === "A" ? C.accent : null;
      if (col) t.setRangeFills(i, i + n, [{ type: "SOLID", color: col }]); }
    i += n; }); return t; }
function layered(p, x, y, w, h, front, name, back) { const b = addRect(p, x + 7, y + 7, w, h, back || C.accent, C.ink, 2.5); b.name = "BACK: " + (name || "");
  return addFrame(p, x, y, w, h, front, C.ink, 2, name); }
function panel(s, x, y, w, h, title, o) { o = o || {}; let f;
  if (o.layered) f = layered(s, x, y, w, h, o.fill || C.white, "PANEL: " + title, o.back);
  else f = addFrame(s, x, y, w, h, o.fill || C.white, C.ink, 2, "PANEL: " + title);
  if (title) { TL(f, 16, 10, 24, title, { color: o.titleColor || C.primary, maxW: w - 32 - (o.reserve || 0) }); addRect(f, 16, 50, w - 32, 2, C.ink); }
  return f; }
function addBadge(p, x, y, d, num, bg, fg) { addEllipse(p, x, y, d, d, bg, C.ink, 2);
  const t = TL(p, 0, 0, 22, String(num), { family: "Poppins", style: "Bold", color: fg }); t.x = x + d / 2 - t.width / 2; t.y = y + d / 2 - t.height / 2; return t; }
function badgeList(p, x, y, w, items, o) { o = o || {}; const d = o.d || 40, pitch = o.pitch || 58;
  items.forEach((t, i) => { const ry = y + i * pitch; addBadge(p, x, ry, d, o.labels ? o.labels[i] : i + 1, o.bg || C.primary, o.fg || C.white);
    if (Array.isArray(t)) RT(p, x + d + 14, ry + Math.max(0, (d - 28) / 2), w - d - 14, 22, t);
    else T(p, x + d + 14, ry + Math.max(0, (d - 28) / 2), w - d - 14, 22, t, { family: "Inter", style: o.style || "Semi Bold" }); }); }
function dashedH(p, x, y, w, color, th) { addDashedRow(p, x, y, w, color || C.ink, 14, 9, th || 2.5); }
function logoSlot(p, x, y, w, h, brand) { const f = addFrame(p, x, y, w, h, C.white, C.primaryDeep, 1.5, "LOGO: " + brand);
  try { f.dashPattern = [6, 4]; } catch (e) {}
  addText(f, "Inter", "Semi Bold", 14, C.primaryDeep, brand + " logo", 0, 0, w, h, "CENTER", "CENTER", false); return f; }
function hBars(p, x, y, w, items, o) { o = o || {}; const lw = o.labelW || 180, rh = o.rowH || 48, bh = o.barH || 30, vw = o.valueW || 110;
  const max = o.max || Math.max(...items.map(i => i.value)); const span = w - lw - 12 - vw;
  items.forEach((it, i) => { const ry = y + i * rh;
    TL(p, x, ry + (rh - 30) / 2, 22, it.label, { family: "Inter", style: "Bold", maxW: lw - 8 });
    const bw = Math.max(4, span * it.value / max);
    addRect(p, x + lw + 12, ry + (rh - bh) / 2, bw, bh, it.color || C.primary, C.ink, 2);
    TL(p, x + lw + 12 + bw + 10, ry + (rh - 30) / 2, 22, it.text || String(it.value), { family: "Poppins", style: "Bold", color: it.textColor || C.ink }); }); }
function vBars(p, x, y, w, h, items, o) { o = o || {}; const n = items.length, pitch = w / n, bw = o.barW || Math.min(120, pitch * 0.6);
  const labH = o.labelH || 60, top = y + 40, base = y + h - labH;
  const max = o.max !== undefined ? o.max : Math.max(...items.map(i => i.value)); const min = o.min !== undefined ? o.min : 0;
  const Y = v => base - (base - top) * (v - min) / (max - min); const zero = Y(Math.max(min, 0));
  addRect(p, x, zero - 1.25, w, 2.5, C.ink);
  items.forEach((it, i) => { const cx = x + pitch * i + pitch / 2; const yv = Y(it.value); const top2 = Math.min(yv, zero), hgt = Math.max(3, Math.abs(zero - yv));
    addRect(p, cx - bw / 2, top2, bw, hgt, it.color || C.primary, C.ink, 2);
    const vt = TL(p, 0, 0, o.valSize || 24, it.text || String(it.value), { family: "Poppins", style: "Bold", color: it.textColor || C.ink, centerAt: cx });
    vt.y = it.value >= 0 ? top2 - 34 : top2 + hgt + 4;
    T(p, cx - pitch / 2 + 2, base + 8, pitch - 4, 22, it.label, { align: "CENTER", family: "Inter", style: "Bold" }); });
  return { Y, zero }; }
function stackH(p, x, y, w, h, segs, o) { o = o || {}; const tot = segs.reduce((a, s) => a + s.value, 0); let cx = x;
  segs.forEach((s, i) => { let sw = Math.round(w * s.value / tot); if (i === segs.length - 1) sw = x + w - cx;
    addRect(p, cx, y, sw, h, s.color, C.ink, 2);
    if (s.text && sw >= (o.minInside || 110)) TL(p, 0, y + (h - 32) / 2, 22, s.text, { family: "Poppins", style: "Bold", color: s.textColor || C.ink, centerAt: cx + sw / 2 });
    cx += sw; }); }
// Stacked vertical bars. cols = [{label, segs:[{value,color,text,textColor}], total}]
function stackV(p, x, y, w, h, cols, o) { o = o || {}; const n = cols.length, pitch = w / n, bw = o.barW || Math.min(130, pitch * 0.6);
  const labH = o.labelH || 60, top = y + 44, base = y + h - labH;
  const max = o.max || Math.max(...cols.map(c => c.segs.reduce((a, s) => a + s.value, 0)));
  addRect(p, x, base - 1.25, w, 2.5, C.ink);
  cols.forEach((c, i) => { const cx = x + pitch * i + pitch / 2; let yy = base;
    c.segs.forEach(s => { const hh = (base - top) * s.value / max; yy -= hh;
      addRect(p, cx - bw / 2, yy, bw, Math.max(2, hh), s.color, C.ink, 2);
      if (s.text && hh >= 34) TL(p, 0, yy + hh / 2 - 16, 22, s.text, { family: "Poppins", style: "Bold", color: s.textColor || C.ink, centerAt: cx }); });
    if (c.total) TL(p, 0, yy - 36, 24, c.total, { family: "Poppins", style: "Bold", centerAt: cx });
    T(p, cx - pitch / 2 + 2, base + 8, pitch - 4, 22, c.label, { align: "CENTER", family: "Inter", style: "Bold" }); }); }
function heatmap(p, x, y, rowLabels, colLabels, vals, o) { o = o || {}; const lw = o.labelW || 260, cw = o.colW || 120, rh = o.rowH || 48, hh = o.headH || 52;
  const sc = o.scale || HO; const flat = vals.reduce((a, r) => a.concat(r), []);
  const lo = o.min !== undefined ? o.min : Math.min(...flat), hi = o.max !== undefined ? o.max : Math.max(...flat);
  const lvl = v => { if (o.levels) return o.levels(v); const t = (v - lo) / ((hi - lo) || 1); return Math.min(4, Math.max(0, Math.floor(t * 5 - 1e-9))); };
  const W = lw + cw * colLabels.length, H = hh + rh * rowLabels.length;
  const f = addFrame(p, x, y, W, H, C.white, C.ink, 2.5, o.name || "TABLE: heatmap");
  const head = addFrame(f, 0, 0, W, hh, o.headFill || C.tint, null, 0, "HEAD");
  if (o.corner) addText(head, "Poppins", "Bold", 22, C.ink, o.corner, 12, 0, lw - 20, hh, "LEFT", "CENTER");
  colLabels.forEach((c, j) => addText(head, "Poppins", "Bold", 22, C.ink, c, lw + j * cw + 4, 0, cw - 8, hh, "CENTER", "CENTER"));
  addRect(f, 0, hh - 1, W, 2, C.ink);
  rowLabels.forEach((r, i) => { const ry = hh + i * rh;
    addText(f, "Inter", "Bold", 22, C.ink, r, 12, ry, lw - 20, rh, "LEFT", "CENTER");
    vals[i].forEach((v, j) => { const L = lvl(v); addRect(f, lw + j * cw, ry, cw, rh, sc[L], C.ink, 1.5);
      const txt = o.fmt ? o.fmt(v, i, j) : String(v);
      addText(f, "Poppins", "Bold", 22, L >= 3 ? C.white : C.ink, txt, lw + j * cw + 2, ry, cw - 4, rh, "CENTER", "CENTER"); });
    addRect(f, 0, ry + rh - 1, lw, 1.5, C.ink); });
  addRect(f, lw - 1, 0, 2, H, C.ink); return f; }
function gantt(p, x, y, labelW, colW, months, rows, o) { o = o || {}; const hh = o.headH || 46, rh = o.rowH || 50;
  const W = labelW + colW * months.length, H = hh + rh * rows.length;
  const f = addFrame(p, x, y, W, H, C.white, C.ink, 2.5, o.name || "TABLE: gantt");
  rows.forEach((r, i) => { if (i % 2) addRect(f, 0, hh + i * rh, W, rh, C.surfaceAlt); });
  for (let j = 1; j < months.length; j++) addRect(f, labelW + j * colW - 0.5, hh, 1, H - hh, C.surface);
  const head = addFrame(f, 0, 0, W, hh, C.tint, null, 0, "HEAD");
  if (o.corner) addText(head, "Poppins", "Bold", 22, C.ink, o.corner, 12, 0, labelW - 20, hh, "LEFT", "CENTER");
  months.forEach((m, j) => addText(head, "Poppins", "Bold", 22, C.ink, m, labelW + j * colW, 0, colW, hh, "CENTER", "CENTER"));
  addRect(f, 0, hh - 1, W, 2, C.ink);
  rows.forEach((r, i) => { const ry = hh + i * rh;
    addText(f, "Inter", "Bold", 22, r.labelColor || C.ink, r.label, 12, ry, labelW - 20, rh, "LEFT", "CENTER");
    (r.bars || []).forEach(b => { const bx = labelW + b.s * colW + 3, bw = (b.e - b.s) * colW - 6;
      addRect(f, bx, ry + 6, bw, rh - 12, b.color || C.primary, C.ink, 1.5);
      if (b.text) addText(f, "Inter", "Bold", 22, b.textColor || C.white, b.text, bx + 8, ry + 6, bw - 14, rh - 12, "LEFT", "CENTER"); });
    (r.marks || []).forEach(mk => { const mx = labelW + mk.at * colW, my = ry + rh / 2;
      addPoly(f, [[mx, my - 14], [mx + 14, my], [mx, my + 14], [mx - 14, my]], mk.color || C.accent, C.ink, 2); });
    addRect(f, 0, ry + rh - 1, W, 1, C.surface); });
  addRect(f, labelW - 1, 0, 2, H, C.ink); return f; }
function phone(p, x, y, w, h, title) { const f = addFrame(p, x, y, w, h, C.white, C.ink, 3, "CARD: phone " + title);
  addRect(f, 0, 0, w, 44, C.primaryDeep); addRect(f, w / 2 - 40, 14, 80, 12, C.ink);
  addText(f, "Poppins", "Bold", 22, C.ink, title, 12, 44, w - 24, 44, "LEFT", "CENTER", false);
  addRect(f, 0, 88, w, 2, C.ink); addRect(f, w / 2 - 50, h - 18, 100, 6, C.ink); return f; }
function quoteCard(p, x, y, w, h, text, meta, o) { o = o || {}; const f = layered(p, x, y, w, h, o.fill || C.white, "CARD: quote", o.back);
  TL(f, 14, -6, 72, "“", { family: "Poppins", style: "ExtraBold", color: C.primary });
  T(f, 60, 16, w - 76, 22, text, { family: "Inter", style: "Semi Bold" });
  TL(f, 60, h - 40, 22, meta, { family: "Inter", style: "Bold", color: C.primary, maxW: w - 76 }); return f; }
function formulaBox(p, x, y, w, h, formula, o) { o = o || {}; const f = addFrame(p, x, y, w, h, o.fill || C.surfaceAlt, C.ink, 2, "CARD: formula " + (o.chip || "FORMULA"));
  addChip(f, 12, (h - 44) / 2, o.chipW || 150, 44, o.chip || "FORMULA", C.primaryDeep, C.white, 22);
  TB(f, (o.chipW || 150) + 30, 0, w - (o.chipW || 150) - 46, h, 22, formula, { family: "Inter", style: "Bold" }); return f; }
function ragChip(p, x, y, w, h, label, lvl) { const fill = lvl === "G" ? C.good : (lvl === "A" ? C.accent : C.alert);
  const f = addFrame(p, x, y, w, h, fill, C.ink, 1.5, "RAG"); addText(f, "Poppins", "Bold", 22, lvl === "A" ? C.ink : C.white, label, 4, 0, w - 8, h, "CENTER", "CENTER", false); return f; }
// Tornado: items [{label, lo, hi, loText, hiText}] around base; left bars alert (downside), right bars good (upside)
function tornado(p, x, y, w, items, o) { o = o || {}; const lw = o.labelW || 300, rh = o.rowH || 52, bh = o.barH || 32;
  const span = Math.max(...items.map(it => Math.max(Math.abs(it.lo - o.base), Math.abs(it.hi - o.base)))) || 1;
  const cx = x + lw + (w - lw) / 2, half = (w - lw) / 2 - 90;
  addWireV(p, cx, y - 10, y + rh * items.length + 6, C.ink, 2.5);
  items.forEach((it, i) => { const ry = y + i * rh;
    TL(p, x, ry + (rh - 30) / 2, 22, it.label, { family: "Inter", style: "Bold", maxW: lw - 12 });
    const dl = (it.lo - o.base) / span * half, dh = (it.hi - o.base) / span * half;
    [[dl, it.loText], [dh, it.hiText]].forEach(([d, txt]) => { if (Math.abs(d) < 1) return;
      const bx = d < 0 ? cx + d : cx, col = d < 0 ? C.alert : C.good;
      addRect(p, bx, ry + (rh - bh) / 2, Math.abs(d), bh, col, C.ink, 1.5);
      const t = TL(p, 0, ry + (rh - 30) / 2, 22, txt, { family: "Poppins", style: "Bold", color: col });
      t.x = d < 0 ? bx - t.width - 8 : bx + Math.abs(d) + 8; }); });
  if (o.baseLabel) TL(p, 0, y - 44, 22, o.baseLabel, { family: "Poppins", style: "Bold", centerAt: cx }); }
// Flow chain: cards [{title, sub, fill, titleColor}] left to right with arrows between
function flow(p, x, y, w, h, cards, o) { o = o || {}; const n = cards.length, gap = o.gap || 44, cw = (w - gap * (n - 1)) / n;
  cards.forEach((c, i) => { const cx = x + i * (cw + gap);
    const f = layered(p, cx, y, cw, h, c.fill || C.white, "CARD: flow " + (i + 1));
    addBadge(f, 10, 10, 38, i + 1, c.badge || C.primary, C.white);
    TL(f, 56, 12, 22, c.title, { color: c.titleColor || C.primary, maxW: cw - 68 });
    T(f, 12, 58, cw - 24, 22, c.sub);
    if (i < n - 1) addArrow(p, cx + cw + 8, y + h / 2, cx + cw + gap - 4, y + h / 2, C.ink, 3, 14); }); }
// Threshold gauge: bar with fill to value, a dashed marker at the gate threshold
function gauge(p, x, y, w, h, value, max, gate, o) { o = o || {};
  addRect(p, x, y, w, h, C.white, C.ink, 2);
  const fw = Math.max(3, Math.min(w, w * value / max)); addRect(p, x, y, fw, h, o.color || (value >= gate ? C.good : C.alert), C.ink, 1.5);
  const gx = x + w * gate / max; addLine(p, gx, y - 10, gx, y + h + 10, C.ink, 3, [6, 4]);
  if (o.gateText) TL(p, 0, y + h + 12, 22, o.gateText, { family: "Inter", style: "Bold", centerAt: gx }); }
// Number card: big numeral + caption (allowed on core slides; never on the cover)
function numCard(p, x, y, w, h, big, cap, o) { o = o || {}; const f = layered(p, x, y, w, h, o.fill || C.white, "CARD: num " + big.slice(0, 12), o.back);
  TL(f, 16, 10, o.size || 48, big, { family: "Poppins", style: "ExtraBold", color: o.color || C.primary, maxW: w - 32, min: 30 });
  T(f, 16, 8 + (o.size || 48) * 1.5, w - 32, 22, cap); return f; }
// So-what bar: the last band of every core slide
function soWhat(s, y, h, text) { const f = layered(s, 64, y, 1792, h, C.primaryDeep, "CARD: so what");
  addChip(f, 16, (h - 44) / 2, 170, 44, "SO WHAT", C.accent, C.ink, 22);
  const t = Array.isArray(text) ? RT(f, 206, 0, 1566, 24, text, { color: C.white })
                                : T(f, 206, 0, 1566, 24, text, { family: "Poppins", style: "Bold", color: C.white });
  t.y = Math.max(6, (h - t.height) / 2); t.name = "SOWHAT TEXT";
  return f; }
const TEAM=[["Harsh Kawatra","Delhi Technological University","Team Leader"],["Gursimran Kaur","Guru Gobind Singh Indraprastha University","Member"],["Dayita Arora","Ramjas College, University of Delhi","Member"]];
function teamTable(p, x, y) { const cw = [330, 600, 190], X = [0, 330, 930], rh = 54, hh = 50, tw = 1120;
  const t = addFrame(p, x, y, tw, hh + rh * 3, C.white, C.ink, 2, "TABLE: team");
  const h = addFrame(t, 0, 0, tw, hh, C.tint, C.ink, 2, "HEAD");
  ["Team Members", "Institution", "Role"].forEach((l, i) => addText(h, "Poppins", "Bold", 22, C.ink, l, X[i] + 16, 0, cw[i] - 24, hh, "LEFT", "CENTER"));
  TEAM.forEach((m, i) => { const r = addFrame(t, 0, hh + rh * i, tw, rh, i % 2 ? C.surfaceAlt : C.white, C.ink, 2, "ROW");
    m.forEach((v, j) => addText(r, "Inter", j === 0 ? "Bold" : "Semi Bold", 22, C.ink, v, X[j] + 16, 0, cw[j] - 24, rh, "LEFT", "CENTER")); });
  [330, 930].forEach(vx => addRect(t, vx - 1, 0, 2, hh + rh * 3, C.ink)); return t; }
const RIB = { labels: ["SUMMARY", "UNIT MATH", "CUSTOMER", "LEVERS", "OPTIONS", "THE CALL", "RIVALS", "SIGNALS"], widths: [172, 208, 192, 160, 172, 190, 160, 172] };
const RIB_APP = { labels: ["ASSUMPTIONS", "METHOD", "MODEL", "SOURCES"], widths: [260, 190, 170, 210] };
function skeleton(s, active, counter, chip, chipW, title, source, rb) { rb = rb || RIB;
  s.fills = [{ type: "SOLID", color: C.white }];
  const endX = buildRibbon(s, active, rb.labels, rb.widths, 64, 40, 60);
  addWireH(s, endX - 10, 1720, 70, C.ink, 2.5);
  addChip(s, 1720, 40, 136, 60, counter, C.primaryDeep, C.white, 24);
  sectionChip(s, chip, chipW, 64, 118);
  const t = addText(s, "Poppins", "Bold", 40, C.ink, title, 64, 188, 1792, 100, "LEFT", undefined, true); t.name = "HEADLINE";
  while (t.height > 112 && t.fontSize > 34) { t.fontSize = t.fontSize - 1; }
  if (t.height > 112) warnings.push("headline 3 lines: " + counter);
  const src = addText(s, "Inter", "Semi Bold", 14, C.primary, source, 64, 1046, 1792, 20, "RIGHT", undefined, true); src.name = "SOURCE";
  return t; }
function lineChart(p, x, y, w, h, series, xLabels, o) { o = o || {}; const L = x + (o.padL || 70), R = x + w - (o.padR || 120), Tp = y + 16, B = y + h - 40;
  const X = i => L + (R - L) * i / (xLabels.length - 1); const Y = v => B - (B - Tp) * (v - o.yMin) / (o.yMax - o.yMin);
  (o.yTicks || []).forEach(v => { addRect(p, L, Y(v), R - L, 1, C.surface);
    TL(p, 0, Y(v) - 14, 22, o.yFmt ? o.yFmt(v) : String(v), { family: "Inter", style: "Semi Bold", rightAt: L - 8 }); });
  addRect(p, L, B, R - L, 2.5, C.ink); addRect(p, L, Tp, 2.5, B - Tp, C.ink);
  if (o.zeroLine && o.yMin < 0) addRect(p, L, Y(0) - 1.25, R - L, 2.5, C.ink);
  xLabels.forEach((lb, i) => { if (lb) TL(p, 0, B + 8, 22, lb, { family: "Inter", style: "Bold", centerAt: X(i) }); });
  series.forEach(se => { const pts = se.values.map((v, i) => v === null ? null : [X(i), Y(v)]);
    for (let i = 0; i < pts.length - 1; i++) if (pts[i] && pts[i + 1]) addLine(p, pts[i][0], pts[i][1], pts[i + 1][0], pts[i + 1][1], se.color, 4, se.dash);
    pts.forEach(pt => { if (pt) addEllipse(p, pt[0] - 6, pt[1] - 6, 12, 12, se.color, C.ink, 1.5); });
    if (se.label) { const last = pts.filter(Boolean).pop(); TL(p, last[0] + 12, last[1] - 15 + (se.labelDy || 0), 22, se.label, { family: "Poppins", style: "Bold", color: se.labelColor || se.color }); } });
  return { X, Y, L, R, Tp, B }; }
function waterfall(p, x, y, w, h, steps, o) { o = o || {}; const n = steps.length, pitch = w / n, bw = o.barW || Math.min(110, pitch * 0.62);
  const top = y + 40, base = y + h - (o.labelH || 64), span = base - top, max = o.max, min = o.min || 0;
  const Y = v => base - span * (Math.min(Math.max(v, min), max) - min) / (max - min);
  addRect(p, x, Y(0), w, 2.5, C.ink); let run = 0;
  steps.forEach((s, i) => { const cx = x + pitch * i + pitch / 2; let y0, y1;
    if (s.kind === "total") { y0 = 0; y1 = s.value; } else { y0 = run; y1 = run + s.value; }
    const lo = Math.min(y0, y1), hi = Math.max(y0, y1);
    addRect(p, cx - bw / 2, Y(hi), bw, Math.max(3, Y(lo) - Y(hi)), s.color, C.ink, 2);
    if (i > 0) { const lvl = s.kind === "total" ? s.value : run; addRect(p, cx - pitch + bw / 2, Y(lvl), pitch - bw, 1.5, C.ink); }
    run = (s.kind === "total") ? s.value : y1;
    const lab = TL(p, 0, 0, 22, s.text, { family: "Poppins", style: "Bold", color: s.textColor || C.ink, centerAt: cx });
    lab.y = (s.below ? Y(lo) + 6 : Y(hi) - 32);
    T(p, cx - pitch / 2 + 4, base + 8, pitch - 8, 22, s.label, { align: "CENTER", family: "Inter", style: "Bold" }); });
  return { Y }; }
function donut(p, cx, cy, r, segs, inner) { const tot = segs.reduce((a, s) => a + s.value, 0); let a0 = -Math.PI / 2;
  segs.forEach(s => { const a1 = a0 + 2 * Math.PI * s.value / tot; const e = figma.createEllipse(); p.appendChild(e); e.resize(2 * r, 2 * r);
    e.fills = [{ type: "SOLID", color: s.color }]; e.strokes = [{ type: "SOLID", color: C.ink }]; e.strokeWeight = 2;
    e.arcData = { startingAngle: a0, endingAngle: a1, innerRadius: inner || 0.56 }; e.x = cx - r; e.y = cy - r; a0 = a1; }); }
// ===== END PREAMBLE =====
```

**Batch script shape.** Every script is, in order:
1. The preamble (above).
2. The contents of `deck/values.js` (the `const V = {...}; const P = {...};` block, §7.7).
3. `const results=[];`
4. One slide block (two only for slides 1+11).
5. `return {results,warnings};`

Every slide block starts with `const s = await figma.getNodeByIdAsync("<ID>"); s.children.slice().forEach(c=>c.remove());`
(so a re-run is idempotent) and ends with
`results.push({slide:s.id,total:s.findAll(()=>true).length,top:s.children.length});`.

**Size limit.** Keep each call under 50,000 characters. The preamble is about 21,000 characters and
`values.js` about 4,000, so one core slide per call is the rule.

## 12 to 15. Build, validate, execute

1. Setup `nsbc-case/` folders; case markdown; primary instruments (§6) handed to the user first.
2. Model and values into `nsbc-case/model` and `nsbc-case/deck/values.js`.
3. Slide scripts pre-flighted in the mock harness until 0 issues.
4. Figma: load skills, create the Slides file, 11 slides, build one slide per `use_figma` call,
   V1 validator plus screenshot after each; then radius, font-floor, dash and number sweeps.
5. Research document via Sonnet sub-agents in parallel; assemble; PDF.
6. Primary data (§6.6) when the user says "carts in" or "survey in"; rebuild slides 2 to 7 and 10.
7. Finals kit (§16) after submission.

## 16. Finals kit
`finals/talk-track.md` (10 minutes, one beat per slide) and `finals/qa-bank.md` (20 hostile
questions with numeric answers).

## 17. Verification checklist
- 11 slides, counters 1/8 to 8/8, A1 on the appendix; every core slide has a 2-line action
  headline, a so-what bar and a source line.
- V1 clean, radius 0, font floor 0 breaches, 0 em or en dashes, moneyshot only on slide 7 in full.
- Model matches the reference outputs; no fabricated primary data.
