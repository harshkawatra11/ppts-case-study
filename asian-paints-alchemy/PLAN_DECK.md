# Asian Paints Alchemy, Case Study 1: the dense, consulting-grade deck (Stage 2, version 2)

> **Who executes this.** A main agent (Sonnet class is enough) that makes every Figma call itself, plus at most two Sonnet
> sub-agents (`Agent` tool, `subagent_type: "general-purpose"`, `model: "sonnet"`) for the deck critic and, if needed, a
> logo fetcher. **Everything that needs judgement has already been decided and tested in this plan.** The six redesigned
> slide scripts below were run through the offline Figma mock at planning time and pass with zero issues. The executor
> extracts files, runs commands, pastes build files into Figma one call at a time, checks each result against the
> "Done when" column, and reports. Do not redesign, re-word or re-number anything outside the fix rules in section 9.
>
> **Repo root:** `C:\Users\harsh\Desktop\HARSH\PPTS-CASE-STUDY\nsut-innovators-court`. Working folder:
> `asian-paints-alchemy/`. Master Figma file: `KJQkGsLgbeLU9vNy24p78y` (Figma Slides). Run every Python command from the
> repo root with `python -X utf8`. The earlier plan survives as `asian-paints-alchemy/PLAN.md`; it stays the authority for
> the model, the research and every rule this plan does not restate.

## 0. Context

**Why this plan exists.** Stage 1 (the research deliverable) is complete: `research/alchemy-whiteness-research.md`,
89,863 words, 185 tables, `ASSEMBLY PASS`, PDF 5.15 MB, critic issues fixed, `STAGE 1 COMPLETE` logged on 18 Oct 2026.
In Figma, slide 1 (`1:42`, the organisers' cover) is untouched, slide 2 (`2:40`, our cover) is built and validated
clean, and slides 3 to 9 exist as empty duplicates of the organisers' background (`13:2` to `13:14`). The original core
slide scripts were drafted before the research existed. The user has now asked for the deck to be planned again: a
professional, content-heavy, consulting-grade deck in humanised analytical language, with heat maps, tables, bars,
charts and lines, one cover, one thank-you, one appendix and five core slides, built so Sonnet agents only execute.

**What this plan delivers.**
1. Seven redesigned slide scripts (`deck/slides/s03.js` to `s09.js`) that carry far more of the research: 8 to 11
   exhibits per core slide, 7 to 10 distinct exhibit forms per slide, at least one heat-coloured exhibit on every core
   slide, every chart paired with a table or scored grid, and an executive summary built on the winning BeyondTech
   storyline pattern. Slide 2 keeps its script; two cover fixes go in through `deck/overrides.json`.
2. A research errata script that brings nine passages and one table of the research into line with the deck (a
   miscounted "0 of 6", a misattributed quote, a porosity pass band, the risk heat map, an incomplete waterfall
   sentence, a demand-versus-imports slip), and replaces research section 27 with the new slide blueprint.
3. The full Figma build, validation, logo and image filling, deck critique through the `case-competition-deck` skill,
   final sweeps, screenshots, report and memory update.

**Re-audit against the benchmark decks (18 Oct 2026).** The user asked for every slide to be re-audited against the
winning decks. Screenshots were taken and studied of SwiftKart (`7N3v6bAfmXYRrte0zChFDg`, slides 2:5 and 2:8),
BeyondTech (`cpcsN7ytWMJputcohXOMgz`, executive summary 2:4 and thank-you 2:13), HarvestBox (`jpMw7czN5ujU0xJ4xdqPAg`,
recommendation 2:5), the prime deck (`hOJVMGv9nIhDmayTT7DmOt`, moneyshot 5:8) and our live cover (`2:40`). Changes that
came out of the audit: slide 3 rebuilt on BeyondTech's storyline-matrix executive summary (answer bar; brief asks,
obvious move struck through with a cross, our recommendation with a check, a mini proof chart and a result numeral per
row; a totals band; a "first step" card); slide 6 moneyshot given bear, base and bull boxes inside the card (prime deck
pattern); slide 8 assumptions turned into a bear-red, bull-green heat grid (SwiftKart annexure pattern); slide 9 given a
recap card and a research chip (BeyondTech thank-you pattern); slide 2 fixed where the live render showed the duty fact
card's third line touching its border and a "1.5x" that disagrees with the 1.52x elsewhere (both through
`deck/overrides.json`, so slide 2 is rebuilt from its own unchanged script).

**Verified at planning time (18 Oct 2026, in memory, nothing written to the repo).** With the new scripts and
`overrides.json` loaded over the existing `deck/` folder, `gen.py mock` printed `OK` for slides 2 to 9 with
`warnings: []` and `ISSUES 0`; `gen.py copy` printed `copy issues 0`; every value in `MUST` appears in the slide copy;
exactly one node is named `CARD: MONEYSHOT`. Part lengths (characters, all under 49,900): s02 48,682; s03 47,709 /
48,040 / 47,216; s04 46,185 / 45,079 / 46,281 / 46,004; s05 48,467 / 45,386 / 46,036; s06 46,256 / 46,100 / 45,546 /
45,289; s07 46,062 / 47,461 / 45,069 / 45,032; s08 46,324 / 47,464; s09 45,923. Mock node totals: S2 116, S3 456,
S4 271, S5 389, S6 386, S7 345, S8 221, S9 51. Offline previews of slides 2 to 9 over the real template were inspected.

## 1. Standing rules (all from the user; none may be relaxed)

| Rule | What it means in practice |
|---|---|
| Slide count | 9 slides: slide 1 organisers' cover (never touched), 2 our cover, 3 to 7 five core slides, 8 annexure, 9 thank-you |
| Template | Every slide after slide 1 keeps exactly one locked node named `TPL: background`, at the back. Never delete, move, restyle or unlock it. Nothing may cover the Asian Paints logo, the Alchemy mark, the Unstop mark or the purple foot bar (`KEEP` zones in `_ap.js`) |
| Language | Humanised analytical storytelling: declarative, plain words, a number in most lines. No hooks, no rhetorical questions, no exclamation marks, no em dashes or en dashes anywhere (deck, research, logs, reports), no banned words (`BANW` in `deck/gen.py`) |
| Names | Never coin a name for the solution, programme or product. It is "a two-coat white with an air-network base coat and a seal coat" |
| Integrity | Every model result is "in our model". Nothing has been measured on a panel; the lab plan is a plan. Real company names appear only with verified facts; brand logos on the cover are context and the cover source line says "no partnership implied" |
| AI disclosure | None on the deck or research, by the user's choice; mention the conflict with the briefs once in the final report |
| Team | Team IdeaForge: Harsh Kawatra (Delhi Technological University (DTU), Team Leader), Anuj Gambhir (Delhi Technological University (DTU), Member). No other names anywhere |
| Type | Headlines 36 pt, panel titles 22 pt, card text 22 pt, numerals 26 to 64 pt. Secondary text (table cells, chart labels, notes, bullets) may be 18 pt and is always named `SEC` by the helpers; nothing below 18 pt except the 14 pt `SOURCE` line, 16 pt `BIBLIO` list and logo or image captions. This user decision overrides the 22 pt floor in the root `CLAUDE.md` |
| Git | Do not commit or push. If the user later asks for a commit, never add a `Co-Authored-By: Claude` trailer (standing user rule) |
| Scope | Modify nothing outside `asian-paints-alchemy/`. Read anything |

## 2. The argument the deck makes (how the `case-competition-deck` skill was applied)

The skill's eight-section logic is compressed into five dense core slides, each one EY-style page with three bands.

| Skill section | Slide | What the judge takes away |
|---|---|---|
| I Executive summary, do-not against do | 3, 1/5 THE TECHNOLOGY | Answer bar; three brief asks (whiter, cheaper, at scale), each with the obvious move struck through, our recommendation, a proof chart and a result (39%, ₹298 Cr, 12 months); three cases; why Case Study 1 (4.50 against 3.30, 3.25, 3.05); the first step |
| II Context, ending on the seed | 4, 2/5 THE CHALLENGE | TiO2 is a ₹2,998 Cr bill, 24 times the R&D budget, 57% sourced from China with the duty in dispute; the binder caps whiteness (66% of air, minus 9% crowding); the usual fixes stall; seed card: "So the air has to live in the film, not in the particle." |
| III Actors | 2 (cover mind map), 4 (five forces) | Pigment makers, opacifier makers, paint makers, rules; supplier power and rivalry rated High |
| IV Quantitative analysis, MECE filter | 5, 3/5 WHY IT IS UNIQUE | Twelve designs, one test, heat-coloured screen; how far each miss falls short; prior art scored piece by piece |
| V Feasibility, first synthesis | 5 | "CONCLUSIVELY" card plus third-party quote (Lemcoff et al. 2023) |
| VI Recommended alternative, moneyshot | 6, 4/5 MECHANISM AND PROOF | Film section, what the rutile sees by scenario, nature's precedent (Burresi 2014 quote), one-coat hiding curve, `CARD: MONEYSHOT` "39% LESS TiO2", the same spectrum, the targets, four production steps, the lab plan by challenge |
| VII Conclusion, second synthesis | 7, 5/5 COST AND SCALE | Cost waterfall, handling, three scenarios, funnel from tonnes bought to tonnes avoided, tornado, readiness by segment, roadmap with gates, 5 by 5 risk heat map, "Therefore" note |
| Appendix | 8 annexure (A1 to A4 ribbon) | Model chain and checks; assumptions bear to bull; what would change our mind; sensitivity, near-infrared, one-input moves; sources and short forms |

Rhetorical checks already built into the scripts: every headline is a full-sentence finding with a number; foreshadowing
(slide 4 seed card) precedes the design on slide 6; symmetric treatment (all twelve designs on one test, three routes on
one grid, four tests on both sides of the executive summary); three scenarios printed wherever the base case is;
exactly one moneyshot; double synthesis ("CONCLUSIVELY" on slide 5, "Therefore" on slide 7); two named third-party
quotes; pre-empted weaknesses (bear case, "not yet run" lab plan, "what would change our mind" panel, team-judgement
labels on scores).

### 2.1 Skill touchpoints for this stage (log each in `build-log.md` as `Touchpoint X: PASS` plus two lines of evidence)

| Touchpoint | Step | Exactly what to do | Pass test |
|---|---|---|---|
| D | E2 | Invoke the Skill tool with `skill: "case-competition-deck"`, read `references/archetypes.md`, and confirm the new research section 27.4 maps slides 3 to 7 to archetypes H, J+K, K+V, P+U, N+M+W | Mapping present after the errata step |
| F | E3 | Invoke the skill, read `references/archetypes.md` and `references/rhetoric.md`. Check in `deck/slide-copy.md`: five core headlines are findings with numbers; "CONCLUSIVELY" appears on S5; "Therefore" on S7; the seed sentence on S4; one MONEYSHOT | All five true |
| G | E8 | Dispatch the deck critic (prompt 10.1), which invokes the skill and `references/critique_rubric.md` | `deck/critique.md` written; allowed fixes applied |
| H | E9 | Polish search on `deck/slide-copy.md` and the final research file for: TODO, TBD, Lorem, xyz, Placeholder, Insert, SwiftKart, SwasthyaGrid, HarvestBox, Dream11, Paytm, Liminal, Setu, Gursimran, Dayita, "0 of 6", "Palmer et al. 2023" | No hit (the research's own search-gap table may keep "Palmer et al. 2018 and 2020", which is a correct statement of what was not found) |

## 3. Visual system and density

Canvas 1920 by 1080 inside the organisers' template. Fixed skeleton from `skelAP` in `deck/_ap.js`: ribbon of the brief's
five questionnaire headings (y 30 to 84, between the two logos), counter chip (x 1590), section chip (y 130), two-line
36 pt headline (y 190), three bands with 40 px rotated rails at x 40 (y 312 to 528, 540 to 756, 768 to 988), panels from
x 92 to 1880 with 12 px gutters, 14 pt source line at y 1032. The annexure uses its own A1 to A4 ribbon and no rails.

| Slide | Panels | Distinct exhibit forms | Heat-coloured exhibits | Charts | Tables or grids |
|---|---|---|---|---|---|
| 3 THE TECHNOLOGY | answer bar, 3 by 5 storyline matrix, 4 totals panels | 9: answer bar, numbered storyline matrix with cross and check icons and struck-through obvious moves, three mini bar charts, three result numerals, column chart, heat-coloured scenario grid, weighted bar ranking, first-step card | 1 | 5 | 1 |
| 4 THE CHALLENGE | 10 | 10: KPI numerals, column chart, timeline, bar chart, highlighted column chart, line chart, five-forces scorecard, table, two-line chart, seed card | 1 | 5 | 2 |
| 5 WHY IT IS UNIQUE | 6 plus MECE tally strip | 7: heat-coloured 12-row screen, model chips, shortfall bars, routes heat grid, prior-art heat grid, tally strip, synthesis card with quote | 3 | 1 | 3 |
| 6 MECHANISM AND PROOF | 9 | 9: film section with numbered mechanism, scenario heat grid, nature card with image and quote, hiding curve, moneyshot, spectrum line chart, targets table, step cards, test table | 1 | 2 | 3 |
| 7 COST AND SCALE | 9 | 9: waterfall, handling table, scenario table with per-litre note, funnel, tornado, readiness heat table, Gantt, 5 by 5 risk heat map, risk table with "Therefore" | 2 | 3 | 4 |
| 6 moneyshot detail | | The card carries "39% LESS TiO2", the grams line and bear 15%, base 39%, bull 65% boxes | | | |
| 8 ANNEXURE | 5 | 7: model chain boxes, check bullets, bear-to-bull heat grid, trigger list, tornado, two tables, source list | 1 | 1 | 3 |
| 9 THANK YOU | 4 | title, one-line recommendation, recap card (39%, ₹298 Cr, 13 of 13), research chip, team table | 0 | 0 | 1 |

Colour roles (`deck/_palette.js`): purple `primary` and `primaryDeep` for our design and structure, amber `accent` for
back cards and the moneyshot, red `alert` for problems and misses, green `good` only for "meets target", purple heat
scale `HG` for scores, red heat scale `HR` for shortfalls and risk.

## 4. Slide-by-slide content (what each panel says, and where each number comes from)

Every model number is read from `deck/values.json` at build time (`V.` keys); every external fact is a VERIFIED or
CORRECTED research row. The full panel tables also go into research section 27 (file `research/parts/section27_v2.md`
below) and `deck/derivation.md`.

**Slide 3, 1/5 THE TECHNOLOGY (executive summary, BeyondTech storyline pattern).** Headline: "Keep rutile and hold it
in sealed air: a two-coat white that matches a premium finish with 39% less TiO2 and 34% lower material cost per m²".
- Answer bar (dark, full width): "Keep the rutile, move it into a network of air and seal the air in, inside the two
  coats painters already apply."
- Storyline matrix, five columns (THE BRIEF ASKS, THE OBVIOUS MOVE, WHAT WE RECOMMEND, THE PROOF, THE RESULT), three
  numbered rows separated by dashed rules:
  1. MAKE IT WHITER (opacity, W-K1; slides 2 to 4). Obvious move, struck through: "Find a new pigment": 0 of 5 TiO2-free
     designs reach Y 90.7; zinc sulfide, the closest, gets 90.4 `[T8]`. We recommend "Move the TiO2 into air": a base
     coat above its critical PVC is 35% air, so rutile sees index 1.18, not 1.49 `[T9]`. Proof: scattering per µm³ of
     rutile, binder 8.2, ours 10.9, air 12.6 `[T4]`. Result: 39% less TiO2 per m² at Y 90.7 and CR 0.998, in our model.
  2. CUT THE BILL (supply and economics, W-K4; slides 4 and 7). Obvious move: "Wait for cheap TiO2": 57% of Indian
     demand came from China; a duty of $460 to $681 a tonne is recommended again `[B07]`, `[B03]`. We recommend "Buy less
     of it": 16.1 g less TiO2 and 17.5 g less binder per m²; finer chalk adds back ₹1.2 `[T12]`, `[M]`. Proof: material
     cost per m² ₹18.4 against ₹12.0; 34% lower, 16% to 51% across cases. Result: ₹298 Cr a year at 40% adoption;
     7,551 t of TiO2 not bought, estimate `[T13]`.
  3. MAKE IT AT SCALE (manufacturing, W-K5; W-Q4 to Q7; slides 6 and 7). Obvious move: "Build a new particle":
     yolk-shell and hollow particles need a new synthesis line and save at most 20% `[T8]`. We recommend "Same plant,
     same coats": base coat and seal coat run on today's dispersers; painters apply two coats as now (research §18).
     Proof: TiO2 saved under one test, hollow polymer 9%, nano-air binder 11%, hollow rutile 20%, ours 39% `[T8]`.
     Result: 12 months to an interior pilot; lab panels and Gate 0 by month 6 (research §23).
- IN TOTAL band: TiO2 per m² premium 40.8 g against bear 34.5 g, base 24.8 g, bull 14.3 g `[T12]`; heat-coloured grid
  "three cases, one answer" (TiO2 saved, material cost cut, net saving a year, TiO2 avoided a year) `[T9]`, `[T12]`,
  `[T13]`; "why Case Study 1" weighted ranking 4.50, 3.30, 3.25, 3.05 (team judgement, research §8); "the first step"
  card (27 panels in a 3 by 3 porosity and infiltration test, read for Y 90.7 and CR 0.998 at Gate 0, research §22).

**Slide 4, 2/5 THE CHALLENGE.** Headline: "Rutile in binder scatters only 66% of the light it would in air, and crowding
at 18% costs another 9%: the binder, not the pigment, caps whiteness".
- THE BILL: ₹2,998 Cr a year, 1,19,919 t, 40.8 g per m² (estimates, A13, A21 to A23) `[T13]`; column chart ₹2,998 Cr TiO2
  bill against ₹125 Cr R&D (FY26, ₹124.9 Cr `[A17]`) and our ₹298 Cr saving; duty clock Feb 2025 findings, May 2025 duty,
  Sep 2025 Calcutta High Court quashes, Dec 2025 CBIC halts collection, Aug 2026 remand findings `[B01]`, `[B12]`,
  `[B18]`, `[B15]`, `[B02]`; 57% of Indian demand from China `[B07]`; recommended duty by producer $460, $510, $563,
  $609, $681 a tonne, not yet in force `[B04]` to `[B06]`, `[B17]`.
- THE PHYSICS: scattering per µm³ of rutile by host index 12.6 at 1.00 to 7.6 at 1.55, binder bar highlighted `[T4]`;
  crowding efficiency in binder and in air `[T6]`; five forces scorecard (supplier power High, new entrants High: Birla
  Opus over 21% of capacity `[A62]`, rivalry High: JSW to buy up to 74.76% of Akzo Nobel India `[A58]`, buyer power
  Medium: repaint 78% of demand `[F45]`, substitutes Low: 0 of 5 TiO2-free whites reach Y 90.7 `[T8]`), ratings labelled
  team judgement.
- THE TRAP: usual fixes (hollow polymer 9%, nano-air binder 11%, hollow rutile 20%, yolk-shell misses Y at 86.1, high
  BaSO4 none) `[T8]`; air gap line chart per µm³ of TiO2 against per µm³ of film `[T5]`; seed card ending "So the air has
  to live in the film, not in the particle."

**Slide 5, 3/5 WHY IT IS UNIQUE.** Headline: "We ran 12 white-film designs through one model: no TiO2-free design reaches
premium brightness, and only an air network under a seal coat saves more than 30% of TiO2".
- THE SCREEN: heat-coloured T8 for all twelve designs (family, TiO2 a m², saved, Y, CR, verdict) with a MECE tally strip
  (reference 1, commercial 2: 0 kept, particle 2: 0 kept, substitute 4: 0 kept, film 3: 2 kept) `[T8]`; the test and the
  four-step model; shortfall bars in Y points (BaSO4 27.5, no-TiO2 network 7.8, organic 6.6, yolk-shell 4.6, zirconia 2.7,
  zinc sulfide 0.3) with "BaSO4, the brief's own example, misses by the most" `[T8]`, `[W-S5]`.
- THE VERDICT: five challenges by three routes grid `[W-K1]` to `[W-K5]`; prior art scored on air, seal, TiO2 kept and
  design rule (hollow polymer `[D01]`, Dow spacer `[D11]`, above-CPVC extenders `[D47]`, porous cooling paint `[D25]`,
  multilayer TiO2-free patent `[D49]`, this design); "CONCLUSIVELY" card with the Lemcoff et al. 2023 quote `[D36]`.

**Slide 6, 4/5 MECHANISM AND PROOF.** Headline: "A porous first coat holds 9.1% TiO2 in 35% air under a 16.4 µm seal
coat, and matches the premium white with 24.8 g of TiO2 per m² against 40.8 g".
- HOW IT WORKS: film section with four numbered mechanism lines `[T9]`; what the rutile sees by scenario (air 25/35/45%,
  index 1.38/1.18/1.00, gain 1.12x/1.33x/1.52x, saved 15/39/65%) `[T9]`, `[T4]`; nature card (Cyphochilus chitin
  filaments in air about 5 µm thick `[D30]`, Burresi 2014 quote `[D32]`) with image slot.
- THE PROOF: one coat, 6 g in air hides like 18 g in binder `[T11]`; `CARD: MONEYSHOT` 39% LESS TiO2, 40.8 g to 24.8 g at
  CR 0.998 and Y 90.7, 15% to 65% `[T12]`; the same spectrum 440 to 720 nm `[T10]`; against the targets CR, Y, L*, b*,
  TiO2, NIR at 1,500 nm `[T7]`, `[T9]`, `[T15]`.
- HOW IT IS MADE: four steps on existing equipment (fine chalk from Indian PCC makers `[E04]`, base coat, seal coat,
  two coats as today); the lab plan, not yet run, one test and pass mark per brief challenge (research Table 22.1).

**Slide 7, 5/5 COST AND SCALE.** Headline: "At 40% adoption in interior emulsions the system saves about ₹298 Cr a year
in materials and 7,551 t of TiO2, with no new plant or painter training".
- COST: waterfall ₹18.4, TiO2 minus 4.0, binder minus 3.3, fine chalk plus 1.2, coarse chalk minus 0.2, ₹12.0 (model
  components `V.cost_ref`, `V.cost_prop`) `[T12]`; raw materials and handling (OSHA 15 mg/m³ `[E34]`, NIOSH 2.4 mg/m³ fine
  `[E36]`, PCC not GHS-classified `[E43]`, silane diluted in water `[E29]`); three scenarios ₹38 Cr, ₹298 Cr, ₹1,021 Cr and
  928 t, 7,551 t, 25,934 t with per-litre view ₹123.5 to ₹80.5 at 13.42 m² a litre a coat `[T13]`, `[F07]`.
- SCALE: funnel 1,19,919 t to 40% addressable to 40% adoption (19,187 t) to 470 mn m² to 7,551 t avoided (research Table
  21.2) `[T13]`; tornado with all five inputs `[T14]`; readiness heat table by segment and roadmap phase (research
  Tables 19.4 and 23.1).
- ROLL-OUT: Gantt of four phases with gates 0, 1, 2 (research Table 23.1); 5 by 5 risk heat map of all twelve register
  risks (research Table 24.1, placed by the register's own ratings); top three risks with early signal and response and
  the "Therefore" note.

**Slide 8, annexure.** Headline: "Annexure: one optical model behind every number; 13 of 13 checks pass, and the answer
holds from 15% to 65% of TiO2 saved". A1 model chain and checks `[T3]`; A2 eight assumptions bear, base, bull `[T1]`;
A2 what would change our mind (research §2.5); A3 tornado with low and high labels, near-infrared table, one-input moves
(adoption 20% ₹149 Cr, 60% ₹447 Cr, TiO2 at ₹200 ₹151 Cr, at ₹300 ₹227 Cr on TiO2; research Tables 21.5 and 20.4);
A4 thirteen sources and short forms.

## 5. Number integrity decisions made at planning time

| Item | Decision | Why |
|---|---|---|
| "0 of 6" | Replaced by "0 of 5 TiO2-free designs" (S06, S07, S08, S09, S11) plus "particle-level air saves at most 20%" | In T8, the six rows that miss brightness include S04 (yolk-shell), which is not TiO2-free; the research counted it two different ways |
| Palmer quote | Attributed to "Lemcoff et al., Nature Photonics, 2023" | The verified paper's first author is Lemcoff (Palmer group) `[D35]`, `[D36]` |
| Porosity pass band | 25 to 45% everywhere | Matches the model's bear-to-bull range and research Table 22.1; one research line said 30 to 40% |
| Risk heat map | Each risk placed by the register's own probability and impact | Research Table 24.2 placed risks 1, 3, 7, 9, 12 differently from its own register |
| Waterfall | Four steps from model components: −4.0, −3.3, +1.2, −0.2 (₹18.36 to ₹12.04, shown 18.4 to 12.0) | One research sentence omitted the coarse-chalk step |
| T4 labels | Printed values from `V.host_rows` (8.2, 11.7, 7.6), not re-rounded `host_num` | Re-rounding gave 8.3, 11.8, 7.5, which disagree with T4 |
| 57% | "57% of Indian demand" | The DGTR figure is a share of demand `[B07]`, not of imports |
| Headline, slide 7 | "7,551 t of TiO2" (not "imported TiO2") | Avoided tonnes are total TiO2, not only imports |
| Horizons | Readiness table uses roadmap phases 2 to 4 | Research Table 23.2 defines H1 as today's business, so labelling interior emulsions "H1" was wrong |
| Beetle text | "chitin filaments in air, about 5 µm thick" | Matches the verified row `[D30]`; an unverified "thin skin" phrase was dropped |

## 5A. Execution steps

| Step | Who | Action | Done when |
|---|---|---|---|
| E0 | Main | Copy this plan byte for byte to `asian-paints-alchemy/PLAN_DECK.md`: `python -c "import shutil; shutil.copyfile(r'C:\Users\harsh\.claude\plans\working-folder-asian-paints-alchemy-bubbly-prism.md', r'asian-paints-alchemy\PLAN_DECK.md')"`. Then create `asian-paints-alchemy/extract_v2.py` with the Write tool from the block in section X, and run `python -X utf8 asian-paints-alchemy/extract_v2.py` | Prints `files 11` (seven slide scripts, `deck/overrides.json`, errata script, section 27 file, derivation file) |
| E1 | Main | `python -X utf8 asian-paints-alchemy/deck/gen.py mock` then `python -X utf8 asian-paints-alchemy/deck/gen.py copy` | Eight lines `sNN OK` with the part lengths in section 0; `copy issues 0` |
| E2 | Main | `python -X utf8 asian-paints-alchemy/research/errata_v2.py`, then `python -X utf8 asian-paints-alchemy/research/assemble.py md`, then `... assemble.py pdf`. Touchpoint D | `errata 11 applied`; `ASSEMBLY PASS`; PDF written; Read page 1 of the PDF render to confirm the team block still shows only Harsh Kawatra and Anuj Gambhir |
| E3 | Main | Touchpoint F on `deck/slide-copy.md`; confirm `deck/derivation.md` exists | Logged |
| E4 | Main | `python -X utf8 asian-paints-alchemy/deck/gen.py bind 2 3 4 5 6 7 8 9` | Files `build/slide_02.js`, `slide_03_1.js` to `_3`, `slide_04_1` to `_4`, `slide_05_1` to `_3`, `slide_06_1` to `_4`, `slide_07_1` to `_4`, `slide_08_1` and `_2`, `slide_09.js`, plus `v1_02.js` to `v1_09.js`, `v1_all.js`, `sweeps.js`, `slots.js` |
| E5 | Main | Figma build, section 6: slide 3 first, then the checkpoint, then 4, 5, 6, 7, 8, 9, then slide 2 again (it already exists; part 1 clears and redraws it with the two cover fixes) | Every part returns `warnings: []`; every `v1_NN` returns `clean: true` or a logged residual; screenshots viewed |
| E6 | Main | Run `build/sweeps.js`, then `build/v1_all.js` | `fontLow`, `copy`, `missing`, `presentBad` empty; `moneyshot` 1; every `template` 1; `slides` 8; V1 clean |
| E7 | Main (optional sub-agent for downloads) | Logos and images, section 7 | `deck/figma.md` lists each slot as filled or placeholder with a reason |
| E8 | Critic sub-agent | Touchpoint G, prompt 10.1; apply allowed fixes (section 9), rebuild only affected slides from part 1 | `deck/critique.md`; fixes logged |
| E9 | Main | Touchpoint H; screenshots of slides 1 to 9; confirm slide 1 unchanged | Nine images viewed; nothing found |
| E10 | Main | Report (section 11), export instruction, memory (section 12); write `STAGE 2 COMPLETE` with the date in `build-log.md` | Done |

Log every step in `asian-paints-alchemy/build-log.md` as `## Stage 2 v2, step EN` with `STATUS: PASS` or `FAIL` and any
fix. Log every decision outside this plan in `DECISIONS.md` (`date | step | decision | why`).

## 6. The Figma build, exactly

**Tools.** One ToolSearch: `select:mcp__figma-mcp__whoami,mcp__figma-mcp__use_figma,mcp__figma-mcp__get_screenshot,mcp__figma-mcp__upload_assets,ReadMcpResourceTool`.
Load the guidance before the first `use_figma` call: Skill `figma-use` if it is listed; otherwise `ReadMcpResourceTool`
with server `figma-mcp` and uri `skill://figma/figma-use/SKILL.md`, then `skill://figma/figma-use-slides/SKILL.md` if it
exists. Pass `skillNames` accordingly (`"figma-use"` or `"resource:figma-use,resource:figma-use-slides"`) on every call.
The deck positions nodes absolutely through the helper library; that overrides any auto-layout advice in the guidance.
Note from the tool itself: `setPluginData`, `loadAllPagesAsync` and `createImageAsync` are not supported; nothing in our
scripts uses them. `get_metadata` does not work on Slides files.

**How to pass a build file.** Each `use_figma` call takes one complete build file as `code` (all under 50,000 characters).
Never send a fragment: every part file already contains the full helper library, the values it needs and one slide part.
The Read tool adds line-number prefixes and the Bash tool truncates output at 30,000 characters, so print each file in
two halves without prefixes and paste the two halves together, in order, exactly:
```
python -X utf8 -c "t=open(r'asian-paints-alchemy/deck/build/slide_03_1.js',encoding='utf-8').read(); print(len(t)); print(t[:24000])"
python -X utf8 -c "t=open(r'asian-paints-alchemy/deck/build/slide_03_1.js',encoding='utf-8').read(); print(t[24000:])"
```
The first number printed is the file length; the code you send must have exactly that length (allow a difference of at
most the trailing newline). Use `fileKey: "KJQkGsLgbeLU9vNy24p78y"` and a one-line `description` such as "Build slide 3
part 1 of 3". The slide ids are already substituted inside the build files (S3 = `13:2`, S4 = `13:4`, S5 = `13:6`,
S6 = `13:8`, S7 = `13:10`, S8 = `13:12`, S9 = `13:14`).

**Order per slide N.** Part 1 (it clears only the slide's own non-template nodes, so a rerun is safe), then part 2, 3, 4
in order; each must return `warnings: []`. Then `build/v1_NN.js`. Then `get_screenshot` of the slide node at
`maxDimension: 1600`; if it returns a URL, save it with `curl -sL -o asian-paints-alchemy/deck/shots/sN.png "<url>"` and
Read it. Also run `python -X utf8 asian-paints-alchemy/deck/gen.py preview N` and Read `deck/shots/preview_NN.png` to
compare layout. Describe each screenshot in two lines in `deck/figma.md`.

**Checkpoint after slide 3.** Compare the slide 3 screenshot with the winning deck's dense slide: `get_screenshot` of
node `2:5` in file `7N3v6bAfmXYRrte0zChFDg`. Check: three bands with rails, no empty region larger than about 150 by 150
px inside a panel, ink outlines everywhere, the layered back card visible, panel titles readable, nothing over the
template logos. If the system reads wrong, stop and apply section 9; do not continue to slide 4 on a broken system.

**Expected results.** Every part prints `{results:[...], warnings:[]}`. Typical total node counts (mock): S2 116, S3 456,
S4 271, S5 389, S6 386, S7 345, S8 221, S9 51. Slide 2's id is `2:40`. Live Figma measures text slightly differently from the mock, so `v1_NN` may report
a `textOut` or `cellWrap` the mock missed; fix it with section 9 and rebuild that slide from part 1.

## 7. Logos and images

Run `build/slots.js` once (via `use_figma`) to list every `LOGO:` and `IMG:` slot with its node id and size. Expected:
slide 2 logo slots Chemours, Tronox, KMML, Dow, Omya, Imerys, Asian Paints, Berger, Birla Opus, DGTR, BIS, CPCB and image
slots Beetle, TiO2, Cyphochilus scale; slide 6 image slot Cyphochilus scale.

For each brand: search Wikimedia Commons
(`https://commons.wikimedia.org/w/api.php?action=query&list=search&srnamespace=6&srlimit=10&format=json&srsearch=<brand>%20logo`,
with a descriptive User-Agent), download with
`curl -sL -A "IdeaForge-deck/1.0" -o "asian-paints-alchemy/deck/logos/<slug>.png" "https://commons.wikimedia.org/wiki/Special:FilePath/<File>?width=600"`,
Read the PNG to confirm it is the right brand, then `upload_assets` with `count: 1`, `nodeId` = the slot id and
`scaleMode: "FIT"`, POST the bytes to the returned URL, then remove the slot's caption text and dash pattern with a short
`use_figma` call. Marks carrying the State Emblem of India (DGTR, BIS, CPCB) stay placeholders. For the beetle images use
only an openly licensed Commons image (CC BY or CC BY-SA, or public domain) and record the credit in `deck/figma.md`; if
none is found, leave the slot. Never resize a slot after upload. Log each slot as filled or placeholder with the reason.
Tell the user which slots remain.

## 8. Research errata and the new section 27 (step E2)

`research/errata_v2.py` (section R) applies ten exact replacements, each asserted to match once (verified against the
real parts at planning time: 10 of 10 matched once), and replaces the whole of research section 27 with
`research/parts/section27_v2.md` (2,397 words, 9 tables, no dashes, no banned words). It is idempotent only in the sense that a second run
fails loudly (the old strings are gone); never edit the parts by hand for these items. After it runs:
`assemble.py md` must print `ASSEMBLY PASS`, then `assemble.py pdf`.

## 9. Fix rules (the only edits allowed during the build)

A fix goes into `deck/slides/sNN.js` (geometry or wording), then `gen.py mock N`, `gen.py copy`, `gen.py bind N`, and the
slide is rebuilt from part 1. Never edit a `build/` file by hand. Never add 240 to a coordinate. Log every fix in
`DECISIONS.md`.

| Issue | Fix |
|---|---|
| `textOut` or `cellWrap` in a table cell | Shorten the cell text: drop an article, use a shorter word or a short form already on the annexure; never drop a number; never go below 18 pt |
| `textOut` of a wrapped note or body | Shorten it by a clause, or move the next element down by the overflow if the panel has room |
| `overflow:` from a title | Shorten the title; titles never shrink below 22 pt |
| `headline 3 lines` | Remove the two weakest words; keep every number |
| `source 2 lines` | Drop the least important source group |
| `keepOut` or `belowContent` | Move or shrink the named node inside x 40 to 1880 and y 130 to 988 (right of x 1605 nothing below y 990) |
| `templateLayer` or `templateNotAtBack` | Stop. Read the slide's children; never rebuild the background; ask the user |
| A label touches a line in a screenshot | Nudge it by at most 24 px |
| `Cannot use unloaded font` | A fragment was sent; resend the whole part file |
| Rotated rail label not centred | After `gen.py pre`, set `const RAILROT=false;` in `deck/_x2.js`, run `bind` (not `pre`), rebuild; log it |
| Part over 49,900 characters after a fix | Move the last panel of that part into the next part (split marker `// ===== PART =====`), keeping the `getNodeByIdAsync("SN")` line at the top of the new part |

Known false positives: ribbon punch-holes over their tags, `BACK:` rectangles under cards, the layered back card
touching y 995 on slides 4 and 5.

## 10. Prompts

### 10.1 Deck critic (touchpoint G)

> You are the deck critic for a case-competition deck. Invoke the `case-competition-deck` skill with the Skill tool and
> read its `references/critique_rubric.md`, `references/archetypes.md` and `references/rhetoric.md`. Then read
> `asian-paints-alchemy/PLAN_DECK.md` sections 1 to 5, `asian-paints-alchemy/deck/slide-copy.md`,
> `asian-paints-alchemy/deck/derivation.md`, and the nine screenshots in `asian-paints-alchemy/deck/shots/` (s1.png to
> s9.png). Score the deck with the rubric, re-based for five core slides: "8 sections present" means the mapping in
> PLAN_DECK section 2; "action titles" means all seven headlines; "appendix depth" means every number on a slide is in
> `deck/values.json` or a VERIFIED research row named in PLAN_DECK section 4. Also check: slide 1 untouched; every other
> slide shows the Asian Paints logo, Alchemy mark, Unstop mark and purple foot bar unobstructed; no empty region larger
> than about 150 by 150 px inside a panel; every core slide has at least one heat-coloured exhibit; no text below 18 pt
> except sources and the bibliography. Lead with the two strongest things. Give at most five issues; none may change a
> number, the case, the recommendation or the slide count; each fix must be doable under PLAN_DECK section 9. No em
> dashes or en dashes. Write `asian-paints-alchemy/deck/critique.md` and reply with the two strengths, the issues and
> the scores.

## 11. Final report to the user (step E10)

Give: the Figma URL `https://www.figma.com/slides/KJQkGsLgbeLU9vNy24p78y`; what changed from the earlier draft (density
table in section 3); the critic's scores and what was fixed; logo and image slots filled and still open; any residual
V1 issue; the research errata applied (count and the five most important); the export instruction (Figma Slides: File,
Export, PDF; the deck is slide 1 plus our eight slides; check the organisers' naming rule on Unstop); and one sentence
that all four briefs ask for an AI-content disclosure and the deck carries none by the user's choice.

## 12. Memory

Update `C:\Users\harsh\.claude\projects\c--Users-harsh-Desktop-HARSH-PPTS-CASE-STUDY-nsut-innovators-court\memory\`:
write `project_asian_paints_alchemy.md` (type project: folder, Case Study 1 chosen, recommendation in one line, model
hash `b377745d37`, master file key, slide 1 untouched rule, team, `PLAN.md` and `PLAN_DECK.md` as the surviving plans,
deck status) and `feedback_template_background.md` (type feedback: when organisers supply a template in the master
Figma file, the first slide stays as given and every other slide is a duplicate of the supplied background, which is
never removed; why: user instruction, 15 Oct 2026). Add both one-line pointers to `MEMORY.md`.

## 13. Recovery

| Symptom | Action |
|---|---|
| `extract_v2.py` prints fewer than 9 files | `PLAN_DECK.md` is not a byte copy; redo E0 |
| `gen.py mock` differs from section 0 | A file was retyped or `values.json` changed; re-extract. If `values.json` changed, stop and report |
| `errata_v2.py` assertion fails | Report the failing old string; do not hand-edit around it (the research may already have been changed); compare with `research/parts/` and ask |
| `ASSEMBLY FAIL` after errata | Read the printed check; banned word or dash in `section27_v2.md` means the plan file was altered; re-extract |
| Figma rate limit or not authorised | Run `whoami`; on a rate limit wait for the stated reset; if not authorised, ask the user to authorise the Figma connector |
| A part returns an error mid-way | Rebuild that slide from part 1 (part 1 clears it) |
| Sub-agent session limit | The sub-agent's file may already be complete; check the file before relaunching; resume with SendMessage after the reset time |

## 14. Stage 2 checklist

- [ ] Slide 1 (`1:42`) unchanged; slides 2 to 9 each keep exactly one `TPL: background` at the back.
- [ ] `gen.py mock` all OK, `copy issues 0`, errata applied, `ASSEMBLY PASS`, PDF rebuilt.
- [ ] Slides 3 to 9 built, every part `warnings: []`, V1 clean or residuals logged, screenshots viewed.
- [ ] Sweeps empty; one `CARD: MONEYSHOT`; `slides` 8.
- [ ] Logo and image slots logged; touchpoints D, F, G, H logged; `deck/critique.md` exists.
- [ ] Report given; memory written; `STAGE 2 COMPLETE` logged.

# PART X. EMBEDDED FILES (extracted byte for byte by extract_v2.py; never retype)

<!-- FILE: extract_v2.py -->
```python
import re, io, pathlib
CF = pathlib.Path(__file__).resolve().parent
t = io.open(CF / "PLAN_DECK.md", encoding="utf-8").read().replace("\r", "")
n = 0
for m in re.finditer(r"<!-- FILE: ([^\n]+?) -->\n```[a-z]*\n(.*?)\n```\n<!-- END FILE -->", t, re.S):
    name = m.group(1).strip()
    if name == "extract_v2.py": continue
    p = CF / name; p.parent.mkdir(parents=True, exist_ok=True)
    io.open(p, "w", encoding="utf-8", newline="\n").write(m.group(2) + "\n"); n += 1; print("wrote", name, len(m.group(2)))
print("files", n)
```
<!-- END FILE -->

## S. Slide scripts (slides 3 to 9; slide 2 keeps its file and is corrected by `deck/overrides.json`)

<!-- FILE: deck/slides/s03.js -->
```js
{ const s = await figma.getNodeByIdAsync("S3");
skelAP(s,0,"1 / 5","THE TECHNOLOGY",300,"Keep rutile and hold it in sealed air: a two-coat white that matches a premium finish with "+V.sav+" less TiO2 and "+V.inr_cut+" lower material cost per m²",
  "Source: team optical model "+V.hash+" (T4, T8, T9, T12, T13) | DGTR findings 2025, 2026 | case scores are team judgement, research section 8 | research sections 2, 8 and 12 to 23");
const a=layered(s,40,306,1840,56,C.primaryDeep,"CARD: our answer");
TL(a,16,10,22,"OUR ANSWER",{color:C.accent}); T(a,190,12,1630,22,"Keep the rutile, move it into a network of air and seal the air in, inside the two coats painters already apply.",{color:C.white});
[["THE BRIEF ASKS",100,C.primaryDeep],["THE OBVIOUS MOVE",345,C.alert],["WHAT WE RECOMMEND",715,C.good],["THE PROOF",1095,C.primaryDeep],["THE RESULT",1545,C.primaryDeep]].forEach(h=>TL(s,h[1],374,22,h[0],{color:h[2]}));
addRect(s,60,410,1820,2,C.ink); addRect(s,73,424,2.5,330,C.primaryDeep);
const NO=(x,y)=>{ const f=addFrame(s,x,y,28,28,null,null,0,"ICON: no"); addEllipse(f,0,0,28,28,C.alert,C.ink,1.5); addDiagonalWire(f,9,9,19,19,C.white,3); addDiagonalWire(f,19,9,9,19,C.white,3); };
const YES=(x,y)=>{ const f=addFrame(s,x,y,28,28,null,null,0,"ICON: yes"); addEllipse(f,0,0,28,28,C.good,C.ink,1.5); addDiagonalWire(f,7,15,12,20,C.white,3); addDiagonalWire(f,12,20,21,9,C.white,3); };
const ROW=(yR,n,A,B,Cc,E)=>{ addBadge(s,60,yR+4,28,n,C.primaryDeep,C.white);
  TL(s,100,yR,22,A[0],{color:C.primaryDeep,maxW:232}); sT(s,100,yR+36,232,18,A[1],{family:"Inter",style:"Bold",color:C.alert}); sT(s,100,yR+82,232,18,A[2],{family:"Inter",style:"Semi Bold"});
  NO(345,yR+4); const b=TL(s,381,yR,22,B[0],{color:C.alert,maxW:320}); addRect(s,b.x,b.y+b.height/2,b.width,2.5,C.alert); sT(s,345,yR+38,350,18,B[1],{family:"Inter",style:"Semi Bold"});
  YES(715,yR+4); TL(s,751,yR,22,Cc[0],{color:C.good,maxW:330}); sT(s,715,yR+38,362,18,Cc[1],{family:"Inter",style:"Semi Bold"});
  TL(s,1545,yR-4,44,E[0],{family:"Poppins",style:"ExtraBold",color:C.alert,maxW:330,min:30}); sT(s,1545,yR+62,330,18,E[1],{family:"Inter",style:"Bold"}); };
const bar=(x,y,lab,v,max,col,txt)=>{ sTL(s,x,y,18,lab,{family:"Inter",style:"Bold",maxW:150}); const w=Math.max(3,Math.round(190*v/max)); addRect(s,x+156,y+3,w,16,col,C.ink,1); sTL(s,x+164+w,y,18,txt,{family:"Inter",style:"Bold"}); };
const SN=Object.fromEntries(V.screen_num.map(r=>[r[0],r])), reach=["S06","S07","S08","S09","S11"].filter(k=>SN[k][1]!==null).length;
ROW(420,1,["MAKE IT WHITER","Opacity, challenge W-K1","Slides 2 to 4"],["Find a new pigment",reach+" of 5 TiO2-free designs reach Y "+V.Y_target+"; zinc sulfide, the closest, gets "+SN.S06[2]+"."],
  ["Move the TiO2 into air","A base coat above its critical PVC is "+V.P+" air, so rutile sees index "+V.nh+", not 1.49."],[V.sav,"less TiO2 per m² at Y "+V.Y_target+" and CR "+V.CR_min+", in our model"]);
sTL(s,1095,422,18,"Scattering per µm³ of rutile",{family:"Inter",style:"Bold",color:C.primaryDeep});
[["Binder, 1.49",V.host_rows[5][1],C.alert],["Ours, "+V.nh,V.host_rows[2][1],C.primary],["Air, 1.00",V.host_rows[0][1],C.primaryDeep]].forEach((r,i)=>bar(1095,450+26*i,r[0],parseFloat(r[1]),13,r[2],r[1]));
}
// ===== PART =====
{ const s = await figma.getNodeByIdAsync("S3");
const NO=(x,y)=>{ const f=addFrame(s,x,y,28,28,null,null,0,"ICON: no"); addEllipse(f,0,0,28,28,C.alert,C.ink,1.5); addDiagonalWire(f,9,9,19,19,C.white,3); addDiagonalWire(f,19,9,9,19,C.white,3); };
const YES=(x,y)=>{ const f=addFrame(s,x,y,28,28,null,null,0,"ICON: yes"); addEllipse(f,0,0,28,28,C.good,C.ink,1.5); addDiagonalWire(f,7,15,12,20,C.white,3); addDiagonalWire(f,12,20,21,9,C.white,3); };
const ROW=(yR,n,A,B,Cc,E)=>{ addBadge(s,60,yR+4,28,n,C.primaryDeep,C.white);
  TL(s,100,yR,22,A[0],{color:C.primaryDeep,maxW:232}); sT(s,100,yR+36,232,18,A[1],{family:"Inter",style:"Bold",color:C.alert}); sT(s,100,yR+82,232,18,A[2],{family:"Inter",style:"Semi Bold"});
  NO(345,yR+4); const b=TL(s,381,yR,22,B[0],{color:C.alert,maxW:320}); addRect(s,b.x,b.y+b.height/2,b.width,2.5,C.alert); sT(s,345,yR+38,350,18,B[1],{family:"Inter",style:"Semi Bold"});
  YES(715,yR+4); TL(s,751,yR,22,Cc[0],{color:C.good,maxW:330}); sT(s,715,yR+38,362,18,Cc[1],{family:"Inter",style:"Semi Bold"});
  TL(s,1545,yR-4,44,E[0],{family:"Poppins",style:"ExtraBold",color:C.alert,maxW:330,min:30}); sT(s,1545,yR+62,330,18,E[1],{family:"Inter",style:"Bold"}); };
const bar=(x,y,lab,v,max,col,txt)=>{ sTL(s,x,y,18,lab,{family:"Inter",style:"Bold",maxW:150}); const w=Math.max(3,Math.round(190*v/max)); addRect(s,x+156,y+3,w,16,col,C.ink,1); sTL(s,x+164+w,y,18,txt,{family:"Inter",style:"Bold"}); };
[542,666,792].forEach(y=>dashedH(s,60,y,1820,C.ink,2));
ROW(546,2,["CUT THE BILL","Supply, economics, W-K4","Slides 4 and 7"],["Wait for cheap TiO2","57% of Indian demand came from China; a duty of $460 to $681 a tonne is recommended again."],
  ["Buy less of it",V.g_cut+" less TiO2 and "+(parseFloat(V.binder_ref)-parseFloat(V.binder_prop)).toFixed(1)+" g less binder per m²; finer chalk adds back ₹"+V.cost_prop.PCC.toFixed(1)+"."],[V.ap.base.net_cr,"a year at 40% adoption; "+V.ap.base.avoided+" of TiO2 not bought, estimate"]);
sTL(s,1095,548,18,"Material cost per m², two coats, ₹",{family:"Inter",style:"Bold",color:C.primaryDeep});
bar(1095,576,"Premium",parseFloat(V.inr_ref.replace("₹","")),20,C.alert,V.inr_ref); bar(1095,602,"Ours",parseFloat(V.inr_prop.replace("₹","")),20,C.primary,V.inr_prop);
sTL(s,1095,632,18,V.inr_cut+" lower, "+V.inr_cut_bear+" to "+V.inr_cut_bull+" across cases",{family:"Inter",style:"Bold",color:C.good});
const SN=Object.fromEntries(V.screen_num.map(r=>[r[0],r]));
ROW(670,3,["MAKE IT AT SCALE","Manufacturing, W-K5; W-Q4 to Q7","Slides 6 and 7"],["Build a new particle","Yolk-shell and hollow particles need a new synthesis line and save at most "+SN.S05[1]+"% of TiO2."],
  ["Same plant, same coats","Base coat and seal coat run on today's dispersers; painters apply two coats as now."],["12 months","to an interior pilot; lab panels and Gate 0 by month 6"]);
sTL(s,1095,672,18,"TiO2 saved under the same test",{family:"Inter",style:"Bold",color:C.primaryDeep});
[["Hollow polymer","S02",C.tint],["Nano-air binder","S03",C.tint],["Hollow rutile","S05",C.tint],["Ours","S10",C.primary]].forEach((r,i)=>bar(1095,698+22*i,r[0],SN[r[1]][1],40,r[2],SN[r[1]][1]+"%"));
}
// ===== PART =====
{ const s = await figma.getNodeByIdAsync("S3");
rail(s,40,800,188,"IN TOTAL",C.primary);
const p1=pnl(s,92,800,500,188,"TiO2 PER m², TWO COATS, g");
const gb=parseFloat(V.g_prop_bear), gu=parseFloat(V.g_prop_bull);
cols(p1,14,44,472,136,["Premium","Bear","Base","Bull"],[{values:[V.g_tio2_ref,0,0,0],color:C.alert},{values:[0,gb,0,gu],color:C.primary},{values:[0,0,V.g_tio2_prop,0],color:C.primaryDeep}],{max:46,bw:62,totals:[V.g_ref,V.g_prop_bear,V.g_prop,V.g_prop_bull]});
const p2=pnl(s,604,800,640,188,"THREE CASES, ONE ANSWER");
const K=["bear","base","bull"], CF=[{f:C.alertTint,tc:C.alert},{f:C.primaryDeep,tc:C.accent},{f:C.goodTint,tc:C.good}];
hgrid(p2,14,46,["TiO2 saved","Material cost cut","Net saving a year","TiO2 avoided a year"],["Bear","Base","Bull"],
  [K.map(k=>V.scen[k].sav),K.map(k=>V.econ[k].cut),K.map(k=>V.ap[k].net_cr),K.map(k=>V.ap[k].avoided)].map(r=>r.map((t,j)=>({t,f:CF[j].f,tc:CF[j].tc}))),{lw:228,cw:128,rh:26,hh:26,corner:"Case",name:"cases"});
const p3=pnl(s,1256,800,300,188,"WHY CASE STUDY 1");
[["1 Whiteness",4.5],["2 Thermal",3.3],["3 Bio-based",3.25],["4 AI, data",3.05]].forEach((r,i)=>{ const y=46+26*i, w=Math.round(76*r[1]/4.5);
  sTL(p3,14,y,18,r[0],{family:"Inter",style:"Bold",maxW:128}); addRect(p3,146,y+3,w,16,i===0?C.primaryDeep:C.tint,C.ink,1); sTL(p3,152+w,y,18,r[1].toFixed(2),{family:"Inter",style:"Bold"}); });
sT(p3,14,152,272,18,"Weighted, team judgement",{family:"Inter",style:"Bold",color:C.primaryDeep});
const f=layered(s,1568,800,312,188,C.primaryDeep,"CARD: first step");
TL(f,14,6,22,"THE FIRST STEP",{color:C.accent,maxW:284});
const f1=sT(f,14,42,284,18,"By month 6: 27 panels in a 3 by 3 test of porosity and seal infiltration, read for Y "+V.Y_target+" and CR "+V.CR_min+" at Gate 0.",{family:"Inter",style:"Bold",color:C.white});
sT(f,14,f1.y+f1.height+6,284,18,"Then a pilot batch on existing lines.",{family:"Inter",style:"Bold",color:C.accent});
guardAP(s); results.push({slide:s.id,total:s.findAll(()=>true).length,top:s.children.length}); }
```
<!-- END FILE -->

<!-- FILE: deck/slides/s04.js -->
```js
{ const s = await figma.getNodeByIdAsync("S4");
const share=Math.round(100/parseFloat(V.host_rows[0][2])), crowd=100-pctN(V.eff_bind_18);
skelAP(s,1,"2 / 5","THE CHALLENGE",290,"Rutile in binder scatters only "+share+"% of the light it would in air, and crowding at "+V.prem_pvc+" costs another "+crowd+"%: the binder, not the pigment, caps whiteness",
  "Source: team optical model "+V.hash+" (T4 to T8) | Asian Paints FY26 | DGTR Feb 2025, Aug 2026 | Calcutta HC Sep 2025 | CBIC 33/2025 | estimates A13, A21 to A23 | force ratings are team judgement");
rail(s,40,312,216,"THE BILL",C.alert); rail(s,40,540,216,"THE PHYSICS",C.primaryDeep); rail(s,40,768,220,"THE TRAP",C.primary);
const p1=pnl(s,92,312,440,216,"WHAT TiO2 COSTS ASIAN PAINTS",{tc:C.alert});
[[V.ap.base.spend,"a year at 15% of raw materials, estimate"],[V.ap.base.tonnes,"of TiO2 a year at ₹250 a kg, estimate"],[V.g_ref,"of TiO2 in each m² of premium white"]].forEach((r,i)=>{ const y=46+56*i;
  TL(p1,14,y,28,r[0],{family:"Poppins",style:"ExtraBold",color:C.alert,maxW:180,min:22}); sT(p1,200,y+2,226,18,r[1],{family:"Inter",style:"Semi Bold"}); });
const p2=pnl(s,544,312,380,216,"₹ CR A YEAR, AGAINST R&D");
cols(p2,14,46,352,160,["TiO2 bill","R&D","Our saving"],[{values:[2998,0,0],color:C.alert},{values:[0,124.9,0],color:C.primaryDeep},{values:[0,0,pctN(V.ap.base.net_cr.replace("₹","").replace(" Cr",""))],color:C.good}],{max:3300,bw:70,totals:["2,998","125",V.ap.base.net_cr.replace("₹","").replace(" Cr","")]});
}
// ===== PART =====
{ const s = await figma.getNodeByIdAsync("S4");
const p3=pnl(s,936,312,560,216,"THE DUTY CLOCK ON CHINESE TiO2");
addWireH(p3,40,520,102,C.ink,2.5);
[["Feb 2025","DGTR findings"],["May 2025","duty imposed"],["Sep 2025","court quashes"],["Dec 2025","CBIC halts duty"],["Aug 2026","new findings"]].forEach((r,i)=>{ const cx=56+112*i, hot=i===2||i===3;
  addEllipse(p3,cx-9,93,18,18,hot?C.alert:C.primary,C.ink,2); sTL(p3,0,60,18,r[0],{family:"Inter",style:"Bold",color:hot?C.alert:C.ink,centerAt:cx});
  sT(p3,cx-52,118,104,18,r[1],{family:"Inter",style:"Semi Bold",align:"CENTER"}); });
note(p3,14,172,532,"So what: ","57% of Indian demand came from China.");
const p4=pnl(s,1508,312,372,216,"DUTY ASKED, $ A TONNE");
[["LB Group",460],["12 others",510],["Shandong",563],["Gold Star",609],["All others",681]].forEach((r,i)=>{ const y=48+26*i, w=Math.round(124*r[1]/681);
  sTL(p4,14,y,18,r[0],{family:"Inter",style:"Bold",maxW:136}); addRect(p4,156,y+3,w,18,i===4?C.alert:C.primary,C.ink,1);
  sTL(p4,164+w,y,18,"$"+r[1],{family:"Inter",style:"Bold"}); });
sT(p4,14,184,344,18,"Recommended, not yet in force",{family:"Inter",style:"Bold",color:C.alert});
}
// ===== PART =====
{ const s = await figma.getNodeByIdAsync("S4");
const p5=pnl(s,92,540,520,216,"THE MEDIUM SETS THE SCATTERING");
const hv=V.host_num.map(r=>r[1]);
cols(p5,14,44,492,142,V.host_num.map(r=>r[0].toFixed(2)),[{values:hv.map((v,i)=>i===5?0:v),color:C.primary},{values:hv.map((v,i)=>i===5?v:0),color:C.alert}],{max:14,bw:46,totals:V.host_rows.map(r=>r[1])});
sT(p5,14,188,492,18,"Per µm³ of rutile: air 1.00, binder 1.49",{family:"Inter",style:"Bold",color:C.primaryDeep});
const p6=pnl(s,624,540,520,216,"CROWDING COSTS EFFICIENCY, %");
const cr=V.crowd_num.filter(r=>r[2]!==null);
lcS(p6,14,46,492,160,[{values:cr.map(r=>r[1]),color:C.primary,label:"in binder",dy:-14},{values:cr.map(r=>r[2]),color:C.alert,label:"in air",dy:4}],cr.map(r=>r[0]+"%"),{yMin:75,yMax:100,yTicks:[80,90,100],padR:110});
const SN=Object.fromEntries(V.screen_num.map(r=>[r[0],r]));
const reach=["S06","S07","S08","S09","S11"].filter(k=>SN[k][1]!==null).length;
const p7=pnl(s,1156,540,724,216,"FIVE FORCES ON A PAINT MAKER'S TiO2");
const RF={High:{f:HR[4],tc:C.white},Medium:{f:HR[2],tc:C.ink},Low:{f:HG[2],tc:C.ink}};
[["Supplier power","High","57% from China; duty in dispute"],["New entrants","High","Birla Opus: over 21% of capacity"],["Rivalry","High","JSW to buy up to 74.76% of Akzo India"],
 ["Buyer power","Medium","Repaint is 78% of decorative demand"],["Substitutes","Low",reach+" of 5 TiO2-free whites reach Y "+V.Y_target]].forEach((r,i)=>{ const y=48+33*i;
  sTL(p7,14,y+2,18,r[0],{family:"Inter",style:"Bold",maxW:186}); bx(p7,206,y,96,26,r[1],{fill:RF[r[1]].f,color:RF[r[1]].tc,fam:"Poppins",st:"Bold"});
  sTL(p7,316,y+2,18,r[2],{family:"Inter",style:"Semi Bold",maxW:394}); });
}
// ===== PART =====
{ const s = await figma.getNodeByIdAsync("S4");
const SN=Object.fromEntries(V.screen_num.map(r=>[r[0],r]));
const p8=pnl(s,92,768,480,220,"THE USUAL FIXES, UNDER ONE TEST");
tbl(p8,14,46,[176,92,184],["Fix","Saved","Why it stops"],[["Hollow polymer",SN.S02[1]+"%","air sits in a shell"],["Nano-air binder",SN.S03[1]+"%","index barely falls"],["Hollow rutile",SN.S05[1]+"%","walls too thin"],["Yolk-shell TiO2","none","misses Y: "+SN.S04[2]],["High BaSO4","none","1.64, near binder"]],{hh:26,rh:28,name:"fixes",align:["LEFT","CENTER","LEFT"]});
const p9=pnl(s,584,768,600,220,"AIR GAP: TiO2 GAINS, THE FILM LOSES");
lcS(p9,14,44,572,172,[{values:V.halo_rows.map(r=>parseFloat(r[1])),color:C.primary,label:"per µm³ TiO2",dy:0},{values:V.halo_rows.map(r=>parseFloat(r[2])),color:C.alert,label:"per µm³ film",dy:-10}],V.halo_rows.map(r=>r[0].replace(" nm","")),{yMin:0,yMax:30,yTicks:[0,10,20,30],padR:140,padL:44});
const c=layered(s,1196,768,684,220,C.primaryDeep,"CARD: where the air lives");
TL(c,14,6,22,"WHERE SHOULD THE AIR LIVE",{color:C.accent,maxW:656});
const halo=Math.round(parseFloat(V.halo_rows[0][2])/parseFloat(V.halo_rows[4][2]));
[["Inside each particle: ","its own pocket costs "+halo+"x the film"],["In the binder: ","closed nano-air saves only "+SN.S03[1]+"% of TiO2"],["In the film: ","one shared air network costs nothing"]].forEach((r,i)=>sRT(c,14,44+30*i,656,18,r[0],r[1],{color:C.white,leadColor:C.accent}));
T(c,14,140,656,22,"So the air has to live in the film, not in the particle.",{family:"Poppins",style:"Bold",color:C.accent});
guardAP(s); results.push({slide:s.id,total:s.findAll(()=>true).length,top:s.children.length}); }
```
<!-- END FILE -->

<!-- FILE: deck/slides/s05.js -->
```js
{ const s = await figma.getNodeByIdAsync("S5");
skelAP(s,2,"3 / 5","WHY IT IS UNIQUE",320,"We ran 12 white-film designs through one model: no TiO2-free design reaches premium brightness, and only an air network under a seal coat saves more than 30% of TiO2",
  "Source: team optical model "+V.hash+" (T8, same targets for all 12) | prior art: US5147940A, Dow EVOQUE, Imerys Celtix, Mandal et al. 2018, US9636706B2 | Lemcoff et al. 2023 | research sections 11 to 13");
rail(s,40,312,444,"THE SCREEN",C.primaryDeep); rail(s,40,768,220,"THE VERDICT",C.alert);
const NAME={S01:"Rutile in binder (premium today)",S02:"Rutile plus hollow polymer spheres",S03:"Rutile in a nano-air binder",S04:"Rutile in its own air pocket",S05:"Hollow rutile spheres",S06:"Zinc sulfide, no TiO2",S07:"Zirconia, no TiO2",S08:"Barium sulfate, high loading",S09:"Organic crystals (shrimp-eye type)",S10:"Air network under a seal coat (ours)",S11:"Air network, no TiO2 at all",S12:"Air network with organic crystals"};
const FAM={S01:"Reference",S02:"Commercial",S03:"Commercial",S04:"Particle",S05:"Particle",S06:"Substitute",S07:"Substitute",S08:"Substitute",S09:"Substitute",S10:"Film",S11:"Film",S12:"Film"};
const yt=parseFloat(V.Y_target), cm=parseFloat(V.CR_min);
const cells=V.screen_rows.map(r=>{ const miss=r[4]==="not reached", y=parseFloat(r[6]), cr=parseFloat(r[7]);
  const sv=miss?{t:"n/a",f:C.alertTint,tc:C.alert}:Object.assign(heatG(pctN(r[5]),0,80,r[0]==="S10"),{t:r[5]});
  const vd=r[0]==="S01"?{t:"Reference",f:C.tint}:(r[0]==="S10"?{t:"Keep",f:C.primaryDeep,tc:C.accent}:(r[0]==="S12"?{t:"Later",f:C.accentTint}:{t:"Drop",f:C.alertTint,tc:C.alert}));
  return [{t:FAM[r[0]],f:FAM[r[0]]==="Film"?C.tint:C.white},miss?{t:"misses",f:C.alertTint,tc:C.alert}:{t:r[4],f:C.white},sv,
    y>=yt-0.05?{t:r[6],f:C.goodTint,tc:C.good}:{t:r[6],f:HR[Math.min(4,1+Math.floor((yt-y)/7))],tc:yt-y>=21?C.white:C.ink},
    cr>=cm?{t:r[7],f:C.goodTint,tc:C.good}:{t:r[7],f:C.alertTint,tc:C.alert},vd]; });
const p1=pnl(s,92,312,1180,444,"TWELVE DESIGNS, ONE TEST, LEAST TiO2 WINS");
hgrid(p1,14,46,V.screen_rows.map((r,i)=>(i+1)+"  "+NAME[r[0]]),["Family","TiO2 a m²","Saved","Y","CR","Verdict"],cells,{lw:440,cw:118,rh:28,hh:28,corner:"Design",name:"screen"});
[["Reference: 1",170],["Commercial 2: 0 kept",240],["Particle 2: 0 kept",230],["Substitute 4: 0 kept",250],["Film 3: 2 kept",210]].reduce((x,b,i)=>{ bx(p1,x,412,b[1],26,b[0],{fill:i===4?C.goodTint:C.surfaceAlt}); return x+b[1]+12; },14);
}
// ===== PART =====
{ const s = await figma.getNodeByIdAsync("S5");
const p2=pnl(s,1284,312,596,196,"THE TEST AND THE MODEL");
sRT(p2,14,46,568,18,"Pass: ","Y "+V.Y_target+" or more and CR "+V.CR_min+" or more, two 30 µm coats over black and white; the least TiO2 wins.",{leadColor:C.alert});
[["Mie: each particle",0,0],["Percus-Yevick: crowding",1,0],["Kubelka-Munk: two coats",0,1],["CIE D65: colour and CR",1,1]].forEach(r=>bx(p2,14+290*r[1],100+48*r[2],278,40,r[0],{fill:C.primaryDeep,color:C.white}));
const SN=Object.fromEntries(V.screen_num.map(r=>[r[0],r]));
const yt=parseFloat(V.Y_target);
const p3=pnl(s,1284,520,596,236,"HOW FAR EACH MISS FALLS SHORT, Y");
[["Barium sulfate","S08"],["Air, no TiO2","S11"],["Organic crystals","S09"],["Yolk-shell","S04"],["Zirconia","S07"],["Zinc sulfide","S06"]].forEach((r,i)=>{ const y=46+25*i, gap=Math.round((yt-SN[r[1]][2])*10)/10, w=Math.max(3,Math.round(300*gap/30));
  sTL(p3,14,y,18,r[0],{family:"Inter",style:"Bold",maxW:166}); addRect(p3,190,y+3,w,18,C.alert,C.ink,1); sTL(p3,198+w,y,18,gap.toFixed(1),{family:"Inter",style:"Bold",color:C.alert}); });
note(p3,14,200,568,"BaSO4, ","the brief's own example, misses by the most.");
}
// ===== PART =====
{ const s = await figma.getNodeByIdAsync("S5");
const SN=Object.fromEntries(V.screen_num.map(r=>[r[0],r]));
const p4=pnl(s,92,768,600,220,"FIVE CHALLENGES, THREE ROUTES");
const cell=t=>t==="Yes"?{t,f:C.goodTint,tc:C.good}:(t==="Part"?{t,f:C.accentTint,tc:C.ink}:(t==="Test"?{t,f:C.tint,tc:C.primaryDeep}:{t,f:C.alertTint,tc:C.alert}));
hgrid(p4,14,46,["Opacity","Durability, yellowing","Dispersion","Supply, economics","Manufacturing"],["Pigment","In particle","In film"],
  [["No","Part","Yes"],["Part","Part","Test"],["No","Part","Yes"],["No","Part","Yes"],["No","No","Yes"]].map(r=>r.map(cell)),{lw:212,cw:120,rh:28,hh:28,corner:"Route for",name:"routes"});
const p5=pnl(s,704,768,610,220,"PRIOR ART: WHO HAS WHICH PIECE");
hgrid(p5,14,46,["Hollow polymer spheres","Spacer-coated TiO2, Dow","Above-CPVC extenders","Porous cooling paint","Multilayer, TiO2-free","This design"],["Air","Seal","TiO2","Rule"],
  [["Part","No","Yes","No"],["No","No","Yes","No"],["Yes","No","Yes","No"],["Yes","No","No","No"],["Part","Yes","No","No"],["own","own","own","own"]].map(r=>r.map(ynCell)),{lw:250,cw:83,rh:24,hh:24,corner:"Prior art",name:"prior"});
const c=layered(s,1326,768,554,220,C.primaryDeep,"CARD: conclusively");
TL(c,14,6,24,"CONCLUSIVELY",{color:C.accent,maxW:526});
sT(c,14,46,526,18,"No new pigment out-scatters rutile in binder: zinc sulfide, the closest, misses brightness ("+SN.S06[2]+" against "+V.Y_target+"). Air inside each particle costs too much film. The gain is in where the film keeps its air.",{family:"Inter",style:"Semi Bold",color:C.white});
sT(c,14,144,526,18,"“biologically benign replacements for artificial scatterers like TiO2” Lemcoff et al., Nature Photonics, 2023",{family:"Inter",style:"Bold",color:C.accent});
guardAP(s); results.push({slide:s.id,total:s.findAll(()=>true).length,top:s.children.length}); }
```
<!-- END FILE -->

<!-- FILE: deck/slides/s06.js -->
```js
{ const s = await figma.getNodeByIdAsync("S6");
skelAP(s,3,"4 / 5","MECHANISM AND PROOF",380,"A porous first coat holds "+V.base_pvc+" TiO2 in "+V.P+" air under a "+V.X2+" seal coat, and matches the premium white with "+V.g_prop+" of TiO2 per m² against "+V.g_ref,
  "Source: team optical model "+V.hash+" (T7, T9 to T11, T15) | Burresi et al. 2014, Sci. Rep. 4, 6075 | ISO 6504-3, ASTM D2486 | lab plan not yet run, research section 22 | research sections 14 to 18");
rail(s,40,312,216,"HOW IT WORKS",C.primaryDeep); rail(s,40,540,216,"THE PROOF",C.alert); rail(s,40,768,220,"HOW IT IS MADE",C.primary);
const p1=pnl(s,92,312,780,216,"THE FILM, IN SECTION");
film(p1,14,46,300,{hs:34,hb:110,hp:22});
[["Seal "+V.X2+": latex bigger than pores"],["Base "+V.X1+": "+V.P+" air, rutile, chalk"],["Rutile sees index "+V.nh+", not 1.49"],["Same wet film; air is free volume"]].forEach((r,i)=>{
  addBadge(p1,330,48+40*i,28,i+1,C.primary,C.white); sTL(p1,368,50+40*i,18,r[0],{family:"Inter",style:"Bold",maxW:398}); });
const p2=pnl(s,884,312,440,216,"WHAT THE RUTILE SEES");
const gain=nh=>{ const r=V.host_rows.reduce((a,b)=>Math.abs(parseFloat(b[0])-nh)<Math.abs(parseFloat(a[0])-nh)?b:a); return r[2]; };
hgrid(p2,14,46,["Bear","Base","Bull"],["Air","Index","Gain","Saved"],["bear","base","bull"].map(k=>{ const hl=k==="base", f=hl?C.primaryDeep:(k==="bull"?HG[3]:HG[1]), tc=hl?C.accent:C.ink;
  return [V.scen[k].P,V.scen[k].nh,gain(parseFloat(V.scen[k].nh)),V.scen[k].sav].map(t=>({t,f,tc})); }),{lw:90,cw:80,rh:34,hh:28,corner:"Case",name:"scenarios"});
sT(p2,14,184,412,18,"Gain: scattering against rutile in binder",{family:"Inter",style:"Bold",color:C.primaryDeep});
}
// ===== PART =====
{ const s = await figma.getNodeByIdAsync("S6");
const p3=layered(s,1336,312,544,216,C.white,"CARD: nature");
imgSlot(p3,14,14,130,186,"Cyphochilus scale");
TL(p3,158,8,22,"NATURE GOT HERE FIRST",{color:C.primaryDeep,maxW:372});
const tx=sT(p3,158,44,372,18,"Cyphochilus scale: chitin filaments in air, about 5 µm thick, white with no pigment. Our base coat copies the network; the seal coat closes it.",{family:"Inter",style:"Semi Bold"});
sT(p3,158,tx.y+tx.height+6,372,18,"“the beetle scales exhibit the lowest transport mean free path length” Burresi et al., 2014",{family:"Inter",style:"Bold",color:C.primary});
const g0=V.hiding_base[3], g1=V.hiding_air[1];
const p4=pnl(s,92,540,540,216,g1[0].toFixed(0)+" g IN AIR HIDES LIKE "+g0[0].toFixed(0)+" g IN BINDER");
xyS(p4,14,46,512,164,[{pts:V.hiding_base,color:C.alert},{pts:V.hiding_air,color:C.primary}],
  {xMin:0,xMax:36,yMin:0.95,yMax:1.0,yTicks:[0.95,0.97,0.99],xTicks:[0,6,12,18,24,30,36],yFmt:v=>v.toFixed(2),padL:60});
lgS(p4,300,128,C.primary,"air network, CR"); lgS(p4,300,152,C.alert,"conventional coat, CR");
const m=layered(s,644,540,470,216,C.primaryDeep,"CARD: MONEYSHOT");
TL(m,16,6,22,"TWO COATS, THE SAME WHITE",{color:C.accent,maxW:438});
TL(m,16,36,60,V.sav+" LESS TiO2",{family:"Poppins",style:"ExtraBold",color:C.accent,maxW:438,min:40});
sTL(m,16,126,18,V.g_ref+" to "+V.g_prop+" a m² at CR "+V.CR_min+" and Y "+V.Y_target,{family:"Inter",style:"Bold",color:C.white,maxW:438});
[["Bear",V.sav_bear,C.surfaceAlt],["Base",V.sav,C.accent],["Bull",V.sav_bull,C.surfaceAlt]].forEach((r,i)=>{ const b=addFrame(m,16+148*i,152,138,60,r[2],C.ink,1.5,"CASE");
  sTL(b,10,19,18,r[0],{family:"Inter",style:"Bold"}); TL(b,0,10,28,r[1],{family:"Poppins",style:"ExtraBold",color:i===1?C.primaryDeep:C.primary,rightAt:128}); });
}
// ===== PART =====
{ const s = await figma.getNodeByIdAsync("S6");
const p6=pnl(s,1126,540,372,216,"THE SAME SPECTRUM");
const lx=lgS(p6,14,46,C.alert,"premium"); lgS(p6,lx,46,C.primary,"ours");
const sp=V.spectral.filter(r=>r[0]>=440);
xyS(p6,14,72,344,140,[{pts:sp.map(r=>[r[0],r[1]]),color:C.alert},{pts:sp.map(r=>[r[0],r[2]]),color:C.primary}],{xMin:440,xMax:720,yMin:0.88,yMax:0.92,yTicks:[0.88,0.9,0.92],xTicks:[450,550,650],yFmt:v=>v.toFixed(2),padL:56});
const p7=pnl(s,1510,540,370,216,"AGAINST THE TARGETS");
tbl(p7,14,46,[154,104,84],["Measure","Premium","Ours"],[["Contrast ratio",V.CR_ref,V.CR_prop],["Brightness Y",V.Y_ref,V.Y_prop],["L*",V.L_ref,V.L_prop],
  ["b*, yellowness",V.b_ref,V.b_prop],["TiO2 a m²",V.g_ref,V.g_prop],["NIR, 1,500 nm",V.nir_rows[3][1],V.nir_rows[3][2]]],{hh:24,rh:24,name:"targets",align:["LEFT","CENTER","CENTER"],fills:[null,null,null,null,C.goodTint,null]});
}
// ===== PART =====
{ const s = await figma.getNodeByIdAsync("S6");
const p8=pnl(s,92,768,880,220,"FOUR STEPS ON EQUIPMENT ASIAN PAINTS ALREADY RUNS");
[["1  FINE CHALK","Indian PCC makers","0.6 µm precipitated chalk from lime and CO2"],["2  BASE COAT","plant dispersers","TiO2 and chalk above critical PVC, binder 25% of solids"],
 ["3  SEAL COAT","letdown tanks","acrylic latex larger than the pores, plus "+V.seal_pvc+" TiO2"],["4  ON THE WALL","painters, as today","coat 1, let it dry, coat 2; same rollers and rate"]].forEach((r,i)=>
  step(p8,14+212*i,46,204,164,r[0],r[1],r[2],{hs:20,hfill:i===3?C.primary:C.primaryDeep}));
const p9=pnl(s,984,768,896,220,"THE LAB PLAN, NOT YET RUN: ONE TEST PER CHALLENGE");
tbl(p9,14,46,[200,300,368],["Brief challenge","Test","Pass mark"],[["Opacity","ISO 6504-3, contrast ratio","Y "+V.Y_target+" and CR "+V.CR_min+" or more"],["Durability, yellowing","QUV weathering, ASTM D2486","b* near 1.4; scrub as premium"],
  ["Dispersion","porosimetry after storage","porosity stays 25 to 45%"],["Supply, economics","pilot batch costing","materials near "+V.inr_prop+" a m²"],["Manufacturing","pilot on existing lines","no new unit operation"]],{hh:26,rh:28,name:"tests"});
guardAP(s); results.push({slide:s.id,total:s.findAll(()=>true).length,top:s.children.length}); }
```
<!-- END FILE -->

<!-- FILE: deck/slides/s07.js -->
```js
{ const s = await figma.getNodeByIdAsync("S7");
skelAP(s,4,"5 / 5","COST AND SCALE",270,"At 40% adoption in interior emulsions the system saves about "+V.ap.base.net_cr+" a year in materials and "+V.ap.base.avoided+" of TiO2, with no new plant or painter training",
  "Source: team model "+V.hash+" (T12 to T14) | Asian Paints FY26 | Apcolite TDS coverage | TiO2 price, share and adoption are team assumptions A13, A23 to A25 | risk register, research section 24");
rail(s,40,312,216,"COST",C.alert); rail(s,40,540,216,"SCALE",C.primaryDeep); rail(s,40,768,220,"ROLL-OUT",C.primary);
const R=V.cost_ref, P=V.cost_prop, d=k=>Math.round((P[k]-R[k])*100)/100, tot=o=>Object.values(o).reduce((a,b)=>a+b,0);
const p1=pnl(s,92,312,540,216,"MATERIAL COST PER m², TWO COATS, ₹");
wf(p1,14,44,512,166,[["Premium",Math.round(tot(R)*10)/10],["TiO2",d("TiO2")],["Binder",d("binder")],["Fine chalk",d("PCC")],["Coarse chalk",d("GCC")],["Ours",Math.round(tot(P)*10)/10]],{min:0,max:21,dp:1});
const p2=pnl(s,644,312,620,216,"RAW MATERIALS AND HANDLING");
tbl(p2,14,46,[190,200,202],["Material","What changes","Handling"],[["Rutile TiO2","less of it","same dust controls"],["Fine chalk (PCC)","lime plus CO2","not GHS-classified"],
  ["Acrylic latex","larger latex","closed storage, PPE"],["Silane, exterior","keeps pores dry","diluted in water"]],{hh:26,rh:28,name:"materials"});
sT(p2,14,188,592,18,"TiO2 limits: OSHA 15 mg/m³; NIOSH 2.4 mg/m³ fine",{family:"Inter",style:"Bold",color:C.primaryDeep});
}
// ===== PART =====
{ const s = await figma.getNodeByIdAsync("S7");
const p3=pnl(s,1276,312,604,216,"THREE SCENARIOS");
tbl(p3,14,46,[96,100,96,150,134],["Case","TiO2 cut","₹ a m²","₹ a year","TiO2 a year"],["bear","base","bull"].map(k=>[k[0].toUpperCase()+k.slice(1),V.scen[k].sav,V.econ[k].prop,V.ap[k].net_cr,V.ap[k].avoided]),
  {hh:26,rh:26,name:"scenarios",align:["LEFT","CENTER","CENTER","CENTER","CENTER"],fills:[null,C.tint,null]});
const lt=v=>(parseFloat(v.replace("₹",""))*6.71).toFixed(1);
note(p3,14,154,576,"Per litre, two coats: ","₹"+lt(V.inr_ref)+" to ₹"+lt(V.inr_prop)+" at 13.42 m² a litre a coat.");
const tn=parseFloat(V.ap.base.tonnes.replace(/[^0-9.]/g,"")), touched=Math.round(tn*0.4*0.4);
const p4=pnl(s,92,540,470,216,"FROM TiO2 BOUGHT TO TiO2 AVOIDED");
fun(p4,14,46,442,[{t:V.ap.base.tonnes+" TiO2 a year, estimate",size:20,f:HG[5]},{t:"40% sits in interior emulsions",size:18,f:HG[4]},{t:"40% adopt: "+fmtN(touched)+" t",size:18,f:HG[3],tc:C.ink},{t:V.ap.base.m2+" a year",size:18,f:HG[2],tc:C.ink},{t:V.ap.base.avoided+" TiO2 avoided",size:18,f:C.accent,tc:C.ink}],{th:28,gap:4,minW:250});
const p5=pnl(s,574,540,560,216,"WHAT MOVES THE SAVING MOST, % SAVED");
const X0=240, W=280, X=v=>X0+W*v/70, TLB={"What surrounds base-coat particles":"What surrounds rutile","Base-coat porosity":"Base-coat porosity","Seal-coat infiltration into pores":"Seal coat in pores","Minimum seal-coat film":"Seal coat minimum","Base-coat extender size":"Extender size"};
V.tornado_num.forEach((r,i)=>{ const y=48+28*i, lo=Math.min(r[3],r[4]), hi=Math.max(r[3],r[4]);
  sTL(p5,14,y,18,TLB[r[0]]||r[0],{family:"Inter",style:"Bold",maxW:222});
  addRect(p5,X(lo),y+2,Math.max(3,X(hi)-X(lo)),20,i===0?C.alert:C.tint,C.ink,1.5);
  sTL(p5,X(lo)-44,y,18,lo+"%",{family:"Inter",style:"Bold",color:C.primaryDeep}); sTL(p5,X(hi)+6,y,18,hi+"%",{family:"Inter",style:"Bold"}); });
addRect(p5,X(V.sav_num)-1,44,2,144,C.primaryDeep);
sTL(p5,14,190,18,"Base "+V.sav+"; bars span low to high setting",{family:"Inter",style:"Bold",color:C.primaryDeep,maxW:532});
}
// ===== PART =====
{ const s = await figma.getNodeByIdAsync("S7");
const p6=pnl(s,1146,540,734,216,"WHERE IT APPLIES, AND HOW READY");
const RD={Highest:{f:HG[4],tc:C.white},Medium:{f:HG[2],tc:C.ink},Lower:{f:C.accentTint,tc:C.ink},Lowest:{f:C.alertTint,tc:C.alert}};
const SEG=[["Interior, white, new walls","water","Phase 2","Highest"],["Repaint, 78% of demand","water","Phase 3","Medium"],["Interior, tinted","water","Phase 3","Medium"],["Exterior emulsions","water","Phase 3","Lower"],["Industrial, automotive","solvent","Phase 4","Lowest"]];
hgrid(p6,14,46,SEG.map(r=>r[0]),["Medium","Phase","Ready"],SEG.map(r=>[{t:r[1],f:C.white},{t:r[2],f:C.white},{t:r[3],f:RD[r[3]].f,tc:RD[r[3]].tc}]),{lw:322,cw:128,rh:28,hh:26,corner:"Segment",name:"segments"});
const p7=pnl(s,92,768,620,220,"THREE HORIZONS, THREE GATES, BY MONTH");
gnt(p7,14,48,222,60,26,["0","6","12","18","24","36"],[{label:"Lab panels, gate 0",s:0,e:0,color:C.accent},{label:"Interior pilot, gate 1",s:1,e:2,color:C.primary},
  {label:"H2 interior, gate 2",s:3,e:4,color:C.primaryDeep},{label:"Exterior adaptation",s:3,e:4,color:C.primary},{label:"H3 organic crystals",s:5,e:5,color:C.alert}]);
}
// ===== PART =====
{ const s = await figma.getNodeByIdAsync("S7");
const p8=pnl(s,724,768,516,220,"12 RISKS, IMPACT BY PROBABILITY");
const RG=[["","","1 2 4 10","",""],["","","","",""],["","7 11","5 6 8","3",""],["","","9","",""],["12","","","",""]];
hgrid(p8,14,46,["High","4","Med","2","Low"],["Low","2","Med","4","High"],RG.map((r,i)=>r.map((t,j)=>{ const sc=(5-i)*(j+1); return {t,f:sc>=15?C.alert:(sc>=10?HR[2]:(sc>=6?C.accentTint:C.white)),tc:sc>=15?C.white:C.ink}; })),{lw:76,cw:82,rh:28,hh:26,corner:"",name:"risk heat"});
const p9=pnl(s,1252,768,628,220,"TOP RISKS, EARLY SIGNAL, RESPONSE");
tbl(p9,14,46,[210,190,200],["Risk","Early signal","Response"],[["Binder wets rutile","FIB-SEM at gate 0","leaner base binder"],["Seal fills pores","interface FIB-SEM","latex 2x pore size"],
  ["Thin seal coat","film below 15 µm","enforce 15 µm floor"]],{hh:26,rh:28,name:"risks"});
note(p9,14,162,600,"Therefore: ","panels in 6 months, an interior pilot by month 12; no new pigment, plant or painter skill.",{lc:C.primaryDeep});
guardAP(s); results.push({slide:s.id,total:s.findAll(()=>true).length,top:s.children.length}); }
```
<!-- END FILE -->

<!-- FILE: deck/slides/s08.js -->
```js
{ const s = await figma.getNodeByIdAsync("S8");
skelAP(s,-1,"A / 1","ANNEXURE",220,"Annexure: one optical model behind every number; "+V.checks+" checks pass, and the answer holds from "+V.sav_bear+" to "+V.sav_bull+" of TiO2 saved",
  "Source: model tables T1 to T16 | research Appendix A bibliography and Appendix B tables | model "+V.hash,{labels:RIBANX});
const p1=pnl(s,40,312,600,330,"A1 MODEL CHAIN AND CHECKS");
[["Mie, multilayer","particles"],["Percus-Yevick","crowding"],["Kubelka-Munk","two coats"],["CIE D65, 2 degree","colour"],["Optimiser","least TiO2"]].forEach((r,i)=>{
  bx(p1,14,48+52*i,190,40,r[0],{fill:i===4?C.accent:C.primaryDeep,color:i===4?C.ink:C.white,fam:"Poppins",st:"Bold"});
  sTL(p1,212,56+52*i,18,r[1],{family:"Inter",style:"Semi Bold",maxW:104}); });
bl18(p1,322,48,264,[["Mie: ","Bohren and Huffman benchmark within 0.1%"],["Layers: ","two-layer sphere equals a solid one"],["Crowding: ","Percus-Yevick limit reproduced"],
  ["Films: ","Kubelka-Munk thick-film limit exact"],["Run: ","hash "+V.hash+", "+V.checks+" pass"]],{gap:6});
const p2=pnl(s,652,312,760,330,"A2 ASSUMPTIONS, BEAR TO BULL");
const AS=[["A05  Base-coat porosity","25%","35%","45%"],["A07  Seal coat in the pores","25%","10%","0%"],["A08  What surrounds rutile","binder-wetted","air, binder","air"],["A28  Minimum seal coat","20 µm","15 µm","12 µm"],
  ["A13  TiO2 price a kg","₹200","₹250","₹300"],["A23  TiO2 share, materials","10%","15%","20%"],["A24  Addressable share","30%","40%","50%"],["A25  Adoption by year 5","20%","40%","60%"]];
hgrid(p2,14,46,AS.map(r=>r[0]),["Bear","Base","Bull"],AS.map(r=>[{t:r[1],f:C.alertTint,tc:C.alert},{t:r[2],f:C.white,tc:C.ink},{t:r[3],f:C.goodTint,tc:C.good}]),{lw:300,cw:140,rh:28,hh:26,corner:"ID and assumption",name:"assumptions"});
sT(p2,14,302,732,18,"Bear is the value least favourable to the recommendation.",{family:"Inter",style:"Bold",color:C.primaryDeep});
const p3=pnl(s,1424,312,456,330,"A2 WHAT WOULD CHANGE OUR MIND");
bl18(p3,14,48,428,[["Porosity: ","measured outside 25 to 45%"],["Surroundings: ","binder wets rutile; saving falls to about a fifth"],["Seal coat: ","under 12 to 20 µm fails to form a skin"],
  ["Patent: ","our exact combination already claimed"],["Prices: ","TiO2 price or share outside bear to bull"]],{gap:8,dot:C.alert,lc:C.alert});
}
// ===== PART =====
{ const s = await figma.getNodeByIdAsync("S8");
const p4=pnl(s,40,654,920,334,"A3 SENSITIVITY, NEAR-INFRARED AND ONE-INPUT MOVES");
const X0=240, W=280, X=v=>X0+W*v/70;
V.tornado_num.forEach((r,i)=>{ const y=56+40*i, lo=Math.min(r[3],r[4]), hi=Math.max(r[3],r[4]);
  sTL(p4,14,y,18,r[0].replace("What surrounds base-coat particles","What surrounds rutile").replace("Seal-coat infiltration into pores","Seal coat in pores"),{family:"Inter",style:"Bold",maxW:220});
  addRect(p4,X(lo),y+2,Math.max(3,X(hi)-X(lo)),20,C.tint,C.ink,1.5); sTL(p4,X(lo)-44,y,18,lo+"%",{family:"Inter",style:"Bold",color:C.primaryDeep}); sTL(p4,X(hi)+6,y,18,hi+"%",{family:"Inter",style:"Bold",color:C.primaryDeep}); });
addRect(p4,X(V.sav_num)-1,48,2,206,C.alert);
sTL(p4,14,264,18,"Base "+V.sav+"; bars span one input, low to high",{family:"Inter",style:"Bold",color:C.alert,maxW:540});
tbl(p4,574,46,[130,95,95],["Wavelength","Premium","Ours"],V.nir_rows,{hh:26,rh:26,name:"nir",align:["LEFT","CENTER","CENTER"]});
const net=parseFloat(V.ap.base.net_cr.replace(/[^0-9.]/g,""));
tbl(p4,574,190,[190,130],["If this moves","₹ Cr a year"],[["Adoption 20%",Math.round(net*0.5)+" net"],["Adoption 60%",Math.round(net*1.5)+" net"],["TiO2 at ₹200 a kg","151 on TiO2"],["TiO2 at ₹300 a kg","227 on TiO2"]],{hh:26,rh:26,name:"moves",align:["LEFT","CENTER"]});
const p5=pnl(s,972,654,908,334,"A4 SOURCES AND SHORT FORMS");
nm(T(p5,14,46,500,16,"1. Alchemy Case Study 1 brief and references\n2. Bohren and Huffman, 1983 (Mie benchmark)\n3. Wertheim, Phys. Rev. Lett. 10, 321, 1963\n4. Kubelka and Munk 1931; Saunderson, JOSA 32, 727, 1942\n5. Devore, JOSA 41, 416, 1951; Sultanova et al. 2009\n6. CIE 15:2018 colorimetry\n7. Burresi et al., Sci. Rep. 4, 6075, 2014\n8. Lemcoff et al., Nature Photonics, 2023\n9. Asian Paints Annual Report FY2025-26\n10. DGTR final findings, TiO2 from China, 2025 and 2026\n11. Calcutta High Court WPO 148 of 2025; CBIC 33/2025\n12. US5147940A, US9636706B2, EP0538411\n13. Team IdeaForge research and model "+V.hash,{family:"Inter",style:"Semi Bold"}),"BIBLIO");
sT(p5,528,46,366,18,"TiO2 titanium dioxide; PVC pigment volume concentration; CPVC critical PVC; PCC precipitated calcium carbonate; CR contrast ratio; Y luminous reflectance; L*, b* CIELAB lightness, yellowness; NIR near-infrared; µm micrometre; DGTR Directorate General of Trade Remedies; FIB-SEM focused-ion-beam microscopy; H1 to H3 horizons",{family:"Inter",style:"Semi Bold"});
guardAP(s); results.push({slide:s.id,total:s.findAll(()=>true).length,top:s.children.length}); }
```
<!-- END FILE -->

<!-- FILE: deck/slides/s09.js -->
```js
{ const s = await figma.getNodeByIdAsync("S9"); wipeTpl(s);
addChip(s,182,30,780,54,"ASIAN PAINTS ALCHEMY  |  CASE STUDY 1: WHITENESS",C.primaryDeep,C.white,22);
addChip(s,1430,30,300,54,V.team.name,C.primaryDeep,C.white,22);
TL(s,0,140,96,"THANK YOU",{family:"Poppins",style:"ExtraBold",color:C.primary,centerAt:960});
TL(s,0,298,30,"Whiter with less TiO2: keep the rutile, hold it in air, seal the air in",{family:"Poppins",style:"Bold",color:C.primaryDeep,centerAt:960,maxW:1500,min:24});
const c=layered(s,260,360,1400,186,C.primaryDeep,"CARD: recap");
[[V.sav,"less TiO2 per m² at contrast ratio "+V.CR_min+" and brightness "+V.Y_target+", in our model"],[V.ap.base.net_cr,"a year in materials at 40% adoption, with "+V.ap.base.avoided+" of TiO2 not bought, estimate"],
 [V.checks,"model checks pass; a lab plan with pass marks is ready for Gate 0"]].forEach((r,i)=>{ const x=24+466*i;
  TL(c,x,14,44,r[0],{family:"Poppins",style:"ExtraBold",color:C.accent,maxW:420,min:30}); sT(c,x,88,420,18,r[1],{family:"Inter",style:"Bold",color:C.white}); if(i>0) dashedV(c,x-24,20,146,C.white,2); });
addChip(s,410,578,1100,50,"FULL RESEARCH DOCUMENT: ALL FOUR ALCHEMY CASE STUDIES, EVERY NUMBER SOURCED",C.accent,C.ink,22);
TL(s,0,652,32,V.team.name,{family:"Poppins",style:"Bold",color:C.primary,centerAt:960});
teamBT(s,380,706,[300,640,220]);
guardAP(s); results.push({slide:s.id,total:s.findAll(()=>true).length,top:s.children.length}); }
```
<!-- END FILE -->

<!-- FILE: deck/overrides.json -->
```json
{
 "\"Rutile scatters \"+V.air_gain+\" more light": "\"Rutile scatters \"+V.host_rows[0][2]+\" more light",
 "57% of Indian TiO2 demand came from China in DGTR's probe; a duty of $460 to $681 a tonne was recommended again in 2026": "57% of Indian TiO2 demand came from China; a duty of $460 to $681 a tonne is recommended again"
}
```
<!-- END FILE -->

## R. Research errata, the new section 27 and the deck derivation record

<!-- FILE: research/errata_v2.py -->
```python
# ===== ALCHEMY RESEARCH ERRATA v2 (deck version 2) =====
"""Bring the research document into line with deck version 2. Each replacement must match exactly once.
  python -X utf8 asian-paints-alchemy/research/errata_v2.py"""
import io, pathlib, sys
R = pathlib.Path(__file__).resolve().parent; P = R / "parts"
def rd(p): return io.open(p, encoding="utf-8").read().replace("\r", "")
def wr(p, t): io.open(p, "w", encoding="utf-8", newline="\n").write(t)
OPS = [
 ("part-A.md", "zero of six substitute pigments or particle-level air designs reach premium brightness at a practical loading `[T8]`",
  "zero of the five TiO2-free designs reach premium brightness at a practical loading, and nor does rutile in its own air pocket (yolk-shell) `[T8]`"),
 ("part-C.md", "Zero of the six genuinely particle-level or substitute-pigment designs (S02 through S09) both reach premium brightness and save a competitively large share of TiO2",
  "None of the eight commercial, particle-level or substitute-pigment designs (S02 through S09) both reaches premium brightness and saves more than 30% of TiO2"),
 ("part-C.md", "This \"0 of 6\" framing, stated once here and carried into the deck's own moneyshot language, is the quantitative backbone",
  "This framing, carried into the deck as \"0 of 5 TiO2-free designs reach premium brightness\" and \"particle-level air saves at most 20%\", is the quantitative backbone"),
 ("part-C.md", "the Palmer 2023 quote on slide 3/5", "the Lemcoff et al. 2023 quote (Palmer group) on slide 3/5"),
 ("part-E.md", "| High | | | 2, 4, 10 | 3 | 1 |\n| Medium-high | | | | | |\n| Medium | 7, 12 | 11 | 5, 6, 8, 9 | | |\n| Low-medium | | | | | |\n| Low | | | | | |",
  "| High | | | 1, 2, 4, 10 | | |\n| Medium-high | | | | | |\n| Medium | | 7, 11 | 5, 6, 8 | 3 | |\n| Low-medium | | | 9 | | |\n| Low | 12 | | | | |"),
 ("part-E.md", "The heat map's top-right corner, which the risk-management literature treats as the priority zone for mitigation, holds risk 1 (the surroundings assumption) alone at the highest impact-and-elevated-probability cell, with risk 3 (seal-coat infiltration) immediately beside it; this is the same conclusion the model's own tornado table reaches independently, and the two methods (a physics-based sensitivity sweep and a qualitative risk-register exercise) agreeing with each other is itself a useful check that neither is an artefact of its own method.",
  "Each risk sits in the cell its own register row gives it. The highest-scoring cell, high impact at medium probability, holds four risks together: risk 1 (binder wets the rutile), risk 2 (porosity falls short), risk 4 (painters thin the seal coat) and risk 10 (adoption proves optimistic). Risk 3 (seal-coat infiltration) carries the register's highest probability, medium to high, at medium impact. Risk 1 is also the single biggest swing in the model's own tornado table `[T14]`, so the physics-based sensitivity sweep and the qualitative register agree on where the first panels should look, and the deck's 5 by 5 heat map on slide 7 draws exactly these placements."),
 ("part-F.md", "mercury porosimetry with a 30 to 40% pass band", "mercury porosimetry with a 25 to 45% pass band, the model's own bear-to-bull porosity range"),
 ("part-F.md", "offset by ₹1.2 more fine chalk, for a net ₹6.4 fall `[T12]`",
  "offset by ₹1.2 more fine chalk and ₹0.2 less coarse chalk, for a net ₹6.4 fall (₹18.36 to ₹12.04 before rounding) `[T12]`"),
 ("part-F.md", "and zero of six TiO2-free or particle-level ideas reach premium brightness at any loading.\" | 0 of 6 `[T8]` |",
  "and none of the five TiO2-free designs reaches premium brightness at any loading.\" | 0 of 5 `[T8]` |"),
 ("part-F.md", "fifty seven percent of India's import volume came from China during the government's own investigation.",
  "fifty seven percent of India's TiO2 demand was met by Chinese imports during the government's own investigation."),
]
done = 0
for f, old, new in OPS:
    p = P / f; t = rd(p); c = t.count(old)
    if c != 1: sys.exit("ERRATA FAIL: %s matches %d times: %s" % (f, c, old[:80]))
    wr(p, t.replace(old, new)); done += 1
p = P / "part-F.md"; t = rd(p); a = t.find("## 27. Slide blueprint for the deck"); b = t.find("## 28. Forty questions")
if a < 0 or b < 0 or b < a: sys.exit("ERRATA FAIL: section 27 boundaries not found")
wr(p, t[:a] + rd(P / "section27_v2.md").strip() + "\n\n" + t[b:]); done += 1
print("errata %d applied" % done)
```
<!-- END FILE -->

<!-- FILE: research/parts/section27_v2.md -->
```markdown
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
```
<!-- END FILE -->

<!-- FILE: deck/derivation.md -->
```markdown
# Deck derivation record (Stage 2, version 2)

Every panel, number and tag of slides 2 to 9 is listed in research section 27 (version 2, applied by
`research/errata_v2.py`). That table is the derivation record; it is not repeated here.

- Overrides: 0. Version 2 changed the slide scripts directly at planning time (PLAN_DECK.md, section 5 lists every
  number-integrity decision); `deck/overrides.json` is not used.
- Every model number on a slide is read at build time from `deck/values.json` (model hash b377745d37).
- Every external fact on a slide is a VERIFIED or CORRECTED research row, tagged in research section 27.

## Candidates for the talk track (central findings no slide carries as a headline)

| Finding | Where in the research |
|---|---|
| The fine chalk itself becomes a scatterer once it sits in air: the calcite index contrast rises 3.8 times (0.42 against 0.11) | §15, Table 15.3 |
| Repaint is 78% of Indian decorative demand, so repaint adhesion over an aged film is the commercially urgent open question | §19, Table 19.4 |
| At the bull case the TiO2 avoided equals 11.4% of the Chinese import volume | §21, Table 21.4 |
| The model leaves flocculation out of the baseline, which flatters the conventional film and makes the 39% conservative on that count | §16.6 |
```
<!-- END FILE -->
