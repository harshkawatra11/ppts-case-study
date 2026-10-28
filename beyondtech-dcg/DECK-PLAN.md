> Slides 2, 3 and 5 and deck/gen.py are superseded by REDESIGN-PLAN.md (10 Oct 2026). Never rerun
> extract_deck.py: it would restore the rejected designs.

# BeyondTech x DCG: Stage 2 plan, the Figma deck

Working folder `BT/` = `C:\Users\harsh\Desktop\HARSH\PPTS-CASE-STUDY\nsut-innovators-court\beyondtech-dcg\`. `ROOT/` = its parent.
Stage 1 (research, model, 151-page PDF) is complete and logged in `BT/build-log.md`. This plan covers Stage 2 only.
Written 10 Oct 2026 by the lead (Opus). Executed by Sonnet agents. Every slide script below has already passed the
offline Figma mock with 0 issues and 0 warnings (section 9), so builders paste and verify; they do not design.

## 0. Context

BeyondTech x DTU Consulting Group case: a GTM plan to deepen DTU and launch at 3 to 4 Tier-1 campuses, 8 to 12 slides
excluding title and appendix, scored 30 / 25 / 25 / 10 / 10. The research is done; every number is locked in
`BT/model/model_outputs.json` (run hash `3a53e3745f`). This stage turns it into a Figma-native, EY-dense deck: native
tables, heat grids, funnels, donuts, bars, tornado, Gantt, line chart, flywheel, India dot map and a road roadmap, with
zero imported chart images.

## 1. Decisions locked with the user

| Topic | Decision |
|---|---|
| Slides | 11: cover, 8 core, 1 appendix, thank-you (brief minimum of 8 core) |
| Palette | BeyondTech orange `#E8590C` primary, deep navy `#0B1F4D` dark bands and active ribbon tag, gold `#FFC72C` back cards, ink outlines; orange heat scale `HG` |
| Team table | Members, Institution, Role: Harsh Kawatra, Dept of ECE, DTU, Team Lead; Anuj Gambhir, Dept of Biotechnology, DTU, Member. On cover and thank-you. No KPI-card row on the cover |
| Images | Both base images are native by default (dot map from `india.geojson`, native road). Nano Banana prompts in section 7 for optional generated versions, swapped in only if they pass acceptance |
| Language | No hooks, no questions, no exclamation marks, no em or en dashes, no banned words, no coined names, never a bare "Harsh" |
| Tooling | `verdict-mnc/deck` pattern: preamble + values + slide file, offline mock, in-Figma validator, sweeps |

## 2. The deck, slide by slide

Ribbon on core slides: `SUMMARY | DIAGNOSIS | DTU PLAN | DTU BUDGET | SELECTION | LAUNCH | PLAYBOOK | ROADMAP`, active
tag navy with gold back card, counter `n / 8`. Appendix ribbon `A1 FULL SCORECARD | A2 ASSUMPTIONS | A3 SCENARIOS | A4 METHOD AND SOURCES`, counter `A1`.
Headlines are generated in `make_values.py` from the model (keys `f2` to `fA`); the text below is what the mock rendered.

| # | Skill section | Headline (action title) | Visual forms |
|---|---|---|---|
| 1 | Front | FROM A DTU HABIT / TO A TIER-1 SYSTEM | Verdict card, team table, mind map: hub, 4 nodes with 10 logo slots, dashed tree to 4 pick crests with Fit |
| 2 | Executive summary | ₹5.3 lakh takes BeyondTech from 110 to 165 DTU enrolments and opens four new campuses in twelve months, by distributing proof before buying reach | SCQA strip (answer card navy), two mirrored pillar cards with KPI numeral and 3 lines each, 5 KPI tiles |
| 3 | Context | Recall at DTU is strong, yet about 5.6% of the non-tech pool enrols, because five leaks sit between hearing of BeyondTech and paying | Funnel (7,823 to 1,956 to 110 to 50+), bear/base/bull table, referral split bar, issue tree of 5 leaks with number chips, LinkedIn reactions bars (269/49/15/9), 2 screenshot slots, founder-hours bars 220 to 132 |
| 4 | Actors and plan | Eleven channels in three layers close the five leaks in order, and the cheapest, a gated resource library, brings 16 enrolments at ₹126 each | 11-channel table colour-coded organic / paid funded / paid ₹0, partner table with 6 logo slots and months, 12-month spend bars |
| 5 | Quantitative (moneyshot) | ₹3.5 lakh funds nine of eleven channels, cheapest first: organic takes 21% of the cash and brings 39% of the 165 enrolments | `CARD: MONEYSHOT` band, CAC bars with dashed "funding stops" marker, two donuts (cash vs enrolments), layer table, CAC formula callout, scenario table, tornado |
| 6 | Quantitative (selection) | BITS Pilani, NIT Tiruchirappalli, PEC Chandigarh and COEP Pune top a seven-criterion scorecard of 28 candidate colleges and hold in 97% or more of 2,000 re-weightings | 14-row heat grid (10 screen-pass + 4 calibration), status chips, Fit formula callout, screen funnel 28 to 25 to 10 to 4, IIT note, CONCLUSIVELY card |
| 7 | Recommended alternative | Each new campus is entered in four steps: borrow a society's trust, seed 20 students, earn their offers, then hand over to ambassadors who were customers first | India dot map with 4 numbered pick pins and 3 existing-campus squares, leaders to 4 city cards, Kamath quote, rising 4-step ladder with named mechanisms, per-pick symmetric table |
| 8 | Feasibility | One campus costs ₹45,000 to open and turns cash positive in season 1 in the base case; checkpoints at days 30, 60 and 90 decide stop, hold or scale | 90-day Gantt with 3 gate diamonds, T14 gate table, flywheel (4 nodes, arrows, hub 60), ambassador ladder table, per-campus P&L table, cumulative cash line chart |
| 9 | Conclusion | Two waves add four campuses by September 2027 and lift base-case enrolments to 245, with every campus clearing three gates before more money is spent | Native road with 5 stops, north-star card, KPI table M3/M6/M12, can/cannot claims, 3x3 risk heat grid, 3 risk mitigations, THEREFORE card with dated first step |
| 10 | Appendix | Every number on the eight slides traces to the brief, a named source, the 32-college dataset or one model with 34 stated assumptions | 18 screened-out colleges in two tables, calibration line, roll-up line, 12-row assumptions table, 14pt method panel |
| 11 | Close | THANK YOU | Verdict card, team table, BeyondTech logo slot |

Skill patterns in place: contrarian answer on slides 2 and 5 (paid geofence and LinkedIn get ₹0; not awareness);
foreshadowing (slide 3 "50+ selections" and the recruiter-overlap idea pay off on slide 6); symmetric treatment (slide 7
city cards and pick table, slide 2 pillars); three scenarios (slides 3, 5, 8); exactly one moneyshot (slide 5);
double synthesis (CONCLUSIVELY slide 6, THEREFORE slide 9); third-party validation (Kamath quote, four named theories);
defensive depth (appendix).

## 3. Number and wording rulings (already applied in the files; do not undo)

| Topic | Ruling |
|---|---|
| ₹3.5 lakh vs ₹5.3 lakh | ₹3.5 lakh (₹3,51,650) is DTU only; ₹5.3 lakh is DTU plus four campuses (T12). Slide 2 headline uses ₹5.3 lakh |
| 165 vs 245 | 165 is the DTU season total (up from 110); 245 adds the four founding cohorts of 20 |
| Penetration | "about 5.6%" (T2 base 5.62%, range 5.37% to 6.14% shown on slide 3) |
| Organic share | 21% of cash, 39% of enrolments (38.7%) |
| Season 2 cash | T10 "Cash S2" is already cumulative: ₹8.03 lakh base, never add S1 again |
| Screen counts | 28 longlist, 25 pass F1, 10 pass F1 and relaxed F2, 4 picks; F2 relaxation stated in the slide 6 source line |
| IITs | Lose on C6 (next season 11 months away), not C5 |
| COEP | "the West pick", never "the only one that clears F4" |
| Ambassadors | 4 per campus base (T10), 4 enrolments each (A14) |
| 8x claim | Not used. Only the CAC values themselves appear |
| Student voice | No Quora quote is presented as DTU evidence; the only quote is Kamath (named, dated) |
| Dated first step | "By 31 October 2026: gate the 8 PDFs, publish the fee band, and sign DCG and 180DC DTU for the December and February workshops" |
| Constants typed into slide files (not from the model) | 50+ selections (B05), 20 anchor firms (PLAN 7.3), 8 PDFs (W08), 11 weeks (B07), 15 January (W05), society months and registrations (research 10.3, A06), 14,600 and 19,000 followers (societies.csv), pick reasons (research 15.2), host societies and anchors (research 16.5), 40% discount (A18), 40% selection (A19), 150 sign-ups (A06), risk numbers and RAG (research 23.1), claims (research 23.2), 518 and 203 sources (build-log) |

## 4. Files

All files live in the embedded blocks at the end of this plan and are extracted by `extract_deck.py`. Never retype one.

| File | Role |
|---|---|
| `deck/_palette.js`, `deck/_extras.js` | Palette and BeyondTech helpers (`ribbonBT`, `skelBT`, `stepFunnel`, `donut`, `harvey`, `pin`, `mapDots`, `geo`, `arrow`, `diamond`, `callout`, `kpi`, `bl`, `lg`, `teamBT`, `coverTop`, `imgSlot`) |
| `deck/make_values.py` | Builds `V` from `model_outputs.json`; asserts the model hash and all model checks |
| `deck/gen.py` | `pre` builds `preamble.js` (from `ROOT/verdict-mnc/deck/preamble.js` + palette + extras), `mock_figma.js` (patched copy of the verdict mock) and `values.js`; `mock` dry-runs; `bind` writes `build/` |
| `deck/slides/s01.js` to `s11.js` | Slide scripts |
| `deck/setup.js`, `deck/_v1.js`, `deck/_sweeps.js`, `deck/swap_map.js` | Figma setup, validator, sweeps, optional map swap |
| `extract_deck.py` | Bootstrap |

The existing `BT/deck/make_values.py` and `BT/deck/values.js` (Stage 1, "Rs" prefix) are overwritten by extraction and
by `gen.py pre`. That is intended.

## 5. Execution sequence

`PY` = `"C:\Users\harsh\AppData\Local\Programs\Python\Python312\python.exe" -X utf8`. Run from `BT/`.

| Step | Who | Action | Done when |
|---|---|---|---|
| D0 | Lead | Copy this plan to `BT/DECK-PLAN.md`. Create `BT/extract_deck.py` from the block in section 16 with the Write tool. Run `PY extract_deck.py` | Prints `files 19` |
| D1 | Lead | `PY deck/gen.py pre`, then `PY deck/gen.py mock` | 11 lines `OK`, exit 0. Matches section 9 |
| D2 | Lead | Skill touchpoint F (section 6) | Logged in `build-log.md` |
| D3 | Lead | Figma: load tools and guidance (section 8), `whoami`, `create_new_file` (`editorType: "slides"`, `planKey: "team::1564294484048272772"`, name `BeyondTech GTM | Team IdeaForge | BeyondTech x DCG 2026`), run `deck/setup.js` | `count` 11 or more, `fontsOk` all true. Write `deck/slide-ids.json` as `{"S1": id, ..., "S11": id}` and file key and URL into `deck/figma.md`. Delete any `extra` slide with 0 children |
| D4 | Lead | `PY deck/gen.py bind` | 11 `build/slide_NN.js`, 11 `v1_NN.js`, `v1_all.js`, `sweeps.js`, `slots.js`, each under 50,000 characters |
| D5 | FB-1 | Calibration: screenshot `YoiazGGOribfg69EjEDIlP` nodes `2:2` and `2:7`. Build S2 (section 8). **Stop. Lead compares S2 with the calibration images** | Lead approves the look |
| D6 | FB-1, then FB-2, then FB-3 | FB-1: S1, S3, S4. FB-2: S5, S6, S7. FB-3: S8, S9, S10, S11. One agent at a time | Each slide V1 clean, screenshot saved and described |
| D7 | Lead | Logos, screenshots, optional generated images (section 7) | Every slot uploaded or logged as a placeholder |
| D8 | Lead | Run `build/sweeps.js`, then `build/v1_all.js` | `fontLow`, `copy`, `missing`, `presentBad` empty; `moneyshot` 1; `slides` 11; V1 clean |
| D9 | Critic (Sonnet) | Touchpoint G, prompt 10.2 | `deck/critique.md`; every dimension 4 of 5 or better, else fix under section 11 |
| D10 | Lead | Screenshot all 11 to `deck/shots/sNN.png`; append the build log; report (section 13) | 11 PNGs on disk |

## 6. Skill touchpoints (`case-competition-deck`)

| Touchpoint | When | Mode | Pass test |
|---|---|---|---|
| F | D2 | Slide mode. Skill tool `case-competition-deck`; read `references/archetypes.md` and `references/rhetoric.md`. Print `f2` to `fA` from `deck/values.js` and read them top to bottom as a ghost deck | Each is a full sentence with a number; the nine read as one argument; slide 6 has CONCLUSIVELY, slide 9 THEREFORE; one moneyshot. Log the nine titles |
| G | D9 | Critique mode with `references/critique_rubric.md`, `case_types/marketing.md`, plus the DCG 9-dimension rubric (`BT/case/03-organiser-playbook-digest.md`) | `deck/critique.md` written; target 40 of 45 |
| H | Before D10 | Generate step 11 polish: grep `deck/slides` and the screenshots for TODO, TBD, Insert, Placeholder, Lorem, xyz and names of other decks | 0 hits (logo placeholders captioned "<Brand> logo" are expected) |

## 7. Images and logos (step D7)

### 7.1 Logo slots
Run `build/slots.js` to list every `LOGO:` and `IMG:` frame. Map each to a file in `BT/deck/assets/`:

| Slot | File | Slot | File |
|---|---|---|---|
| BeyondTech | `logos/beyondtech.png` | WhatsApp | `logos/whatsapp.svg` |
| DTU | `logos/dtu.png` | LinkedIn | `logos/linkedin.svg` |
| Bain | `logos/bain.svg` | E-Cell DTU | `logos/ecell-dtu.jpg` |
| ZS | `logos/zs-associates.svg` | TEDxDTU | `logos/tedx-dtu.jpg` |
| Eternal | `logos/eternal.png` | shot-resources | `shots/03-resources-page.jpg` |
| JP Morgan | `logos/jpmorgan.svg` | shot-admission | `shots/02-admission-process-and-testimonials.jpg` (Read it first; if a phone number is visible, crop it out with PyMuPDF/PIL into `shots/02-admission-crop.jpg`) |

Raster files: `upload_assets` with `count: 1` and `nodeId` = the slot, then POST the bytes; remove the slot's caption
text and dash pattern afterwards. SVG files: if `upload_assets` rejects SVG, read the SVG text and run a `use_figma`
script that calls `figma.createNodeFromSvg(svg)`, appends it to the slot, scales it to fit inside the slot keeping
aspect ratio, centres it, sets every `cornerRadius` it can to 0, and removes the caption. Never resize a slot.
Placeholders that stay dashed (tell the user): DCG, 180DC DTU, ASSETS DTU, and the four crests (BITS Pilani, NIT
Trichy, PEC, COEP Pune).

### 7.2 Generated base images (optional, Nano Banana)
The deck already carries a native dot map (slide 7) and a native road (slide 9). The user may generate these two images.
Use them only if they pass acceptance; otherwise keep the native versions.

**India base map.** Output 1926 x 2000 px PNG (aspect 0.963, matching the 420 x 436 map frame). Prompt:
> Flat vector map of India, front-facing, north up, no perspective or tilt, equirectangular framing from longitude 68.1 E
> to 97.4 E and latitude 6.7 N to 37.1 N, with the country touching the edges of that box. Solid pale peach fill
> (#FFD3B0), thin dark (#0A0A0A) 2 px state borders, 3 px dark outer outline. Full political extent as depicted by the
> Survey of India, including the complete territory of Jammu and Kashmir and Ladakh, the Andaman and Nicobar Islands and
> Lakshadweep. Pure white background. No text, no labels, no pins, no icons, no shadows, no gradients, no neighbouring
> countries, no sea colour.

Negative: text, labels, city names, compass, legend, 3D, shading, texture, neighbouring countries, cropped Kashmir.
Acceptance: (1) full J&K and Ladakh; (2) no text or artefacts; (3) place the image in a test frame 420 x 436 and check
that Delhi (28.61, 77.21), Mumbai (19.08, 72.88), Chennai (13.08, 80.27) and Kolkata (22.57, 88.36) from `geo()` fall
within 12 px of the right place. Two attempts, then keep the dots. If accepted: run `deck/swap_map.js` with S7's id, then
upload the PNG into the new `IMG: india-base` frame.

**Road.** Output 880 x 1280 px PNG (aspect of the 44 x 640 road band widened to the stop column). Prompt:
> Flat vector illustration of a single straight road seen from directly above, running vertically from bottom to top,
> deep navy surface (#0B1F4D), a dashed gold (#FFC72C) centre line, thin black outline. Five small round lay-bys evenly
> spaced along it. Pure white background. No text, no numbers, no vehicles, no trees, no scenery, no shadows, no
> gradients.

Use it only if the five lay-bys align within 12 px of the five pins on slide 9 when the image fills the road band;
then delete the node named `ROADSEG` and upload into a new frame at the same place. Otherwise keep the native road.

## 8. Figma build (steps D3 to D6)

Tools: `ToolSearch` with
`select:mcp__figma-mcp__whoami,mcp__figma-mcp__create_new_file,mcp__figma-mcp__use_figma,mcp__figma-mcp__get_screenshot,mcp__figma-mcp__upload_assets`.
Load the Figma guidance before any `use_figma` call: Skill `figma-use` if listed, otherwise `ReadMcpResourceTool`
(server `figma-mcp`, uri `skill://figma/figma-use/SKILL.md`). Pass `skillNames: "resource:figma-use"` on every
`use_figma` call. `get_metadata` does not work on Slides files.

Per slide N, in order:
1. Read-only check: `use_figma` with `const s=await figma.getNodeByIdAsync("<id>"); return s.children.length;`. A rerun is
   safe either way (each script wipes its slide first), but this tells you whether a timed-out call landed.
2. `use_figma` with the full text of `build/slide_NN.js`. Expect `warnings: []`.
3. `use_figma` with `build/v1_NN.js`. Expect `clean: true`.
4. `get_screenshot` of the slide node at `maxDimension: 1600`, save to `deck/shots/sNN.png`, Read it, describe it in two
   lines in `deck/figma.md`. Look for: text over a line or bar, a donut or Harvey shape drawn as a full disc
   (then set `const ARCS=false;` in `_extras.js`, rerun `gen.py pre`, `bind`, rebuild that slide), the map pins sitting
   off their city, anything clipped.
5. Fix only under section 11, at most three attempts per slide, then log the residual.

## 9. Offline mock result at planning time (10 Oct 2026)

Run in memory from this plan's embedded files with the real model outputs:

| Slide | Nodes | Script size | Result |
|---|---|---|---|
| s01 Cover | 138 | 32.9k | OK |
| s02 Summary | 111 | 32.3k | OK |
| s03 Diagnosis | 170 | 33.2k | OK |
| s04 DTU plan | 256 | 33.2k | OK |
| s05 DTU budget | 224 | 34.4k | OK |
| s06 Selection | 417 | 32.5k | OK |
| s07 Launch | 601 | 34.4k | OK |
| s08 Playbook | 302 | 32.9k | OK |
| s09 Roadmap | 209 | 33.1k | OK |
| s10 Appendix | 240 | 32.9k | OK |
| s11 Thank you | 43 | 30.0k | OK |

The mock's text metrics are approximate; the in-Figma V1 validator and the screenshot are final.

## 10. Agent prompts

Every Agent call: `subagent_type: "general-purpose"`, `model: "sonnet"`.

### 10.1 Figma builder (FB-1 to FB-3)
> You are Figma builder <FB-n>. Work only inside `C:\Users\harsh\Desktop\HARSH\PPTS-CASE-STUDY\nsut-innovators-court\beyondtech-dcg\`.
> Read first: `ROOT/CLAUDE.md` section 7; `deck/DECK-PLAN.md` sections 8 and 11 (DECK-PLAN is at `BT/DECK-PLAN.md`);
> `deck/figma.md` for the file key; `deck/slide-ids.json`. Load the Figma tools and guidance exactly as section 8 says.
> Build slides <list> in that order, following section 8 steps 1 to 5 for each. Paste each `build/` file's full text
> unchanged; never write slide code yourself, never set x or y before appendChild, never add 240 to a coordinate.
> A fix is allowed only under section 11: copy fixes go into `deck/overrides.json`, then run
> `PY deck/gen.py mock <n>` and `PY deck/gen.py bind`, then rebuild that slide. Append a block to `BT/build-log.md`
> per slide: node count, V1 result, fixes with before and after text, residuals, STATUS.
> Reply with one line per slide: id, V1 clean or not, screenshot path, residuals.

### 10.2 Critic (D9)
> You are the deck critic. Read `ROOT/.claude/skills/case-competition-deck/references/critique_rubric.md`,
> `references/case_types/marketing.md`, `BT/case/03-organiser-playbook-digest.md` (the DCG rubric) and `BT/case/01-beyondtech-brief.md`.
> Then view the 11 screenshots in `BT/deck/shots/` and read `BT/DECK-PLAN.md` sections 2 and 3.
> Score every pass or fail item, the seven quality dimensions and the nine DCG dimensions (0 to 5). Lead with what works.
> Give the top 5 issues, each with slide, location and a concrete fix that keeps every number. Do not rewrite slides.
> Check specifically: does a titles-only read tell the argument; is every number sourced on its slide; is the budget
> split realistic for a 2 to 10 person firm; is trust-from-scratch concrete. Write `BT/deck/critique.md`.

## 11. Fix rules (the only edits allowed during the build)

| Issue | Fix |
|---|---|
| `headline3lines` | Override in `overrides.json` dropping the two weakest words; keep every number |
| `source2lines` | Drop the least important source group |
| `textOut`, `cellWrap`, `wrapTable overflow` | Shorten: drop articles, shorter synonym, drop the least important clause. Never below 22pt, never drop a number, never coin a label |
| `overlap`, `bounds`, `belowContent` | Move the later node by the overlap plus 8 px in `slides/sNN.js` if it stays inside y 316 to 1030; else report |
| Label touches a line or bar in a screenshot | Nudge that label by at most 24 px |
| Node 240 px off | A line set x or y before appendChild; rerun the full build file |
| `Cannot use unloaded font` | A fragment was run; run the whole `build/slide_NN.js` |
| Arc shapes render wrong | `ARCS=false` (section 8 step 4) |
| A number looks wrong | Stop. Numbers change only through the model and `make_values.py`; tell the lead |

Known false positives: ribbon punch-holes over tags, `BACK:` rectangles under cards, map dots under pins.

## 12. Verification (Stage 2 is done when all hold)

1. `gen.py mock` prints 11 OK lines; sweeps: `radiusFixed` reported, `fontLow`, `copy`, `missing`, `presentBad` empty,
   `moneyshot` 1, `slides` 11; `v1_all.js` clean.
2. Exactly 11 slides named as in `setup.js`; cover has the mind map, logo slots and team table, no KPI row; the same
   table on slide 11.
3. Titles-only read of slides 2 to 9 passes touchpoint F; critique at 40 of 45 or better with no dimension under 4, or
   the gap logged with a reason.
4. Each core slide: source line, 4 to 5 type levels, at least one chart paired with a table, no empty region larger
   than about 150 by 150 px in the screenshot.
5. 11 screenshots saved and viewed.

## 13. Report, memory and recovery

Report to the user: Figma URL; slide list with headlines; logo slots filled and left as placeholders (and ask for DCG,
180DC DTU, ASSETS DTU and four crests); whether the generated images were used; residuals; reminder to export
File, Export, PDF from Figma. Save memory `project_beyondtech_dcg.md` (team Harsh Kawatra and Anuj Gambhir, DTU; 11-slide
orange and navy deck; desk-only research; plans are copied into the case folder first; Figma URL) and its pointer in
`MEMORY.md`. Commits only if asked, with no Co-Authored-By trailer.

| Symptom | Action |
|---|---|
| `make_values` assertion on the hash | The model was re-run. Re-check section 3 against `model_tables.md`, update `MODEL_HASH`, rerun D1 |
| `gen.py mock` FAIL after an override | Shorten the override further |
| `use_figma` timeout | Run the read-only child count; rerun the same build file |
| MCP connection drops | Rerun `setup.js` (never makes a second set) and re-read ids |
| Slide count above 11 | Delete only extras with 0 children, by id |
| Rate limit kills a builder | Start a new builder with the remaining slides only |

---

# Embedded files

Extracted by `extract_deck.py` (section 16). Never retype a block.

<!-- FILE: deck/_palette.js -->
```js
const C = {
  primary:{r:0.910,g:0.349,b:0.047}, primaryDeep:{r:0.043,g:0.122,b:0.302},
  accent:{r:1,g:0.780,b:0.173}, alert:{r:0.784,g:0.118,b:0.290},
  tint:{r:1,g:0.910,b:0.839}, alertTint:{r:0.984,g:0.867,b:0.894},
  blue:{r:0.122,g:0.306,b:0.620}, blueDeep:{r:0.043,g:0.122,b:0.302}, blueTint:{r:0.863,g:0.902,b:0.969},
  good:{r:0.118,g:0.541,b:0.298}, goodTint:{r:0.847,g:0.941,b:0.878}, accentTint:{r:1,g:0.949,b:0.800},
  ink:{r:0.039,g:0.039,b:0.039}, surface:{r:0.929,g:0.929,b:0.929},
  surfaceAlt:{r:0.965,g:0.965,b:0.965}, white:{r:1,g:1,b:1}
};
const HG=[null,{r:1,g:0.945,b:0.902},{r:1,g:0.827,b:0.690},{r:1,g:0.667,b:0.420},{r:0.941,g:0.478,b:0.169},{r:0.722,g:0.259,b:0.039}];
```
<!-- END FILE -->

<!-- FILE: deck/_extras.js -->
```js
// ===== BEYONDTECH DECK EXTRAS =====
const RIBN=["SUMMARY","DIAGNOSIS","DTU PLAN","DTU BUDGET","SELECTION","LAUNCH","PLAYBOOK","ROADMAP"];
const RIBAP=["A1 FULL SCORECARD","A2 ASSUMPTIONS","A3 SCENARIOS","A4 METHOD AND SOURCES"];
const ARCS=true; // set to false if a donut or Harvey ball renders as a full disc in Figma
function ribbonBT(s,active,labels){ const y=40,h=60,n=labels.length; let size=24;
  let tw=labels.map(l=>measureW(s,"Poppins","Bold",size,l));
  const fits=pad=>tw.reduce((a,b)=>a+b,0)+pad*n+26*(n-1)<=1792;
  let pad=64; while(!fits(pad)&&pad>44) pad-=4;
  if(!fits(pad)){ size=22; tw=labels.map(l=>measureW(s,"Poppins","Bold",size,l)); pad=64; while(!fits(pad)&&pad>44) pad-=4; }
  if(!fits(pad)) warnings.push("ribbon too wide");
  const widths=tw.map(w=>Math.ceil(w+pad)), used=widths.reduce((a,b)=>a+b,0), gap=n>1?Math.min(80,Math.max(26,(1792-used)/(n-1))):0;
  let x=64; const bx=[];
  for(let i=0;i<n;i++){ const w=widths[i], act=i===active;
    if(act) addRect(s,x+8,y+8,w,h,C.accent,C.ink,2.5);
    addRect(s,x,y,w,h,act?C.primaryDeep:C.accent,C.ink,2);
    addText(s,"Poppins","Bold",size,act?C.white:C.ink,labels[i],x,y+Math.round((h-size*1.5)/2),w,Math.round(size*1.5),"CENTER","CENTER");
    addEllipse(s,x+3,y+h/2-7,14,14,C.white,C.ink,2); addEllipse(s,x+w-17,y+h/2-7,14,14,C.white,C.ink,2);
    bx.push({x,w}); x+=w+gap; }
  for(let i=0;i<n-1;i++) addWireH(s,bx[i].x+bx[i].w-10,bx[i+1].x+10,y+h/2,C.ink,2.5); }
function skelBT(s,active,counter,chip,chipW,title,source,o){ o=o||{}; wipe(s);
  ribbonBT(s,active,o.labels||RIBN);
  addChip(s,64,118,chipW,56,chip,C.primary,C.white,22);
  const cw=o.counterW||156; addChip(s,1856-cw,118,cw,56,counter,C.primaryDeep,C.white,24);
  const t=addText(s,"Poppins","Bold",40,C.ink,title,64,188,1792,100,"LEFT",undefined,true); t.name="HEADLINE";
  while(t.height>112 && t.fontSize>34){ t.fontSize=t.fontSize-1; }
  if(t.height>112) warnings.push("headline 3 lines: "+counter);
  srcLine(s,source); return t; }
function imgSlot(p,x,y,w,h,name,cap){ const f=addFrame(p,x,y,w,h,C.surfaceAlt,C.primaryDeep,1.5,"IMG: "+name);
  try{ f.dashPattern=[6,4]; }catch(e){}
  addText(f,"Inter","Semi Bold",14,C.primaryDeep,cap||name,4,0,w-8,h,"CENTER","CENTER",false); return f; }
function stepFunnel(p,x,y,w,tiers,o){ o=o||{}; const th=o.tierH||64, gap=o.gap===undefined?8:o.gap, minW=o.minW||w*0.34, n=tiers.length;
  tiers.forEach((t,i)=>{ const tw=w-(w-minW)*i/Math.max(1,n-1), tx=x+(w-tw)/2, ty=y+i*(th+gap);
    const f=addFrame(p,tx,ty,tw,th,t.f||HG[5-Math.min(4,i)],C.ink,2,"TIER "+i);
    addText(f,"Poppins","Bold",t.size||26,t.tc||C.white,t.t,4,0,tw-8,th,"CENTER","CENTER");
    if(i<n-1&&gap>0) addRect(p,x+w/2-1.25,ty+th,2.5,gap,C.ink); }); }
function arc(p,cx,cy,d,a0,a1,fill,inner){ const e=addEllipse(p,cx-d/2,cy-d/2,d,d,fill,C.ink,2);
  try{ e.arcData={startingAngle:a0,endingAngle:a1,innerRadius:inner||0}; }catch(err){ warnings.push("arc failed"); } return e; }
function donut(p,cx,cy,d,segs,inner){ const tot=segs.reduce((a,s)=>a+s.v,0);
  if(!ARCS){ let yy=cy-d/2; segs.forEach(sg=>{ const hh=d*sg.v/tot; addRect(p,cx-d/2,yy,d,hh,sg.c,C.ink,2); yy+=hh; }); return; }
  let a=-Math.PI/2; segs.forEach(sg=>{ const b=a+2*Math.PI*sg.v/tot; arc(p,cx,cy,d,a,b,sg.c,inner===undefined?0.55:inner); a=b; }); }
function harvey(p,cx,cy,d,q){
  if(!ARCS){ for(let i=0;i<4;i++) addRect(p,cx-d/2+i*(d/4),cy-d/4,d/4-2,d/2,i<q?C.primaryDeep:C.white,C.ink,1.5); return; }
  addEllipse(p,cx-d/2,cy-d/2,d,d,q>=4?C.primaryDeep:C.white,C.ink,2);
  if(q>0&&q<4) arc(p,cx,cy,d,-Math.PI/2,-Math.PI/2+q*Math.PI/2,C.primaryDeep,0); }
function pin(p,cx,cy,d,label,fill,fg){ addEllipse(p,cx-d/2,cy-d/2,d,d,fill,C.ink,2);
  if(label){ const t=TL(p,0,0,22,label,{color:fg||C.white}); t.x=cx-t.width/2; t.y=cy-t.height/2; } }
function mapDots(p,x,y,w,h,rows,nc,fill){ const cw=w/nc, ch=h/rows.length, d=Math.min(cw,ch)*0.72;
  rows.forEach((runs,r)=>runs.forEach(u=>{ for(let k=u[0];k<u[0]+u[1];k++){ const e=addRect(p,x+k*cw+(cw-d)/2,y+r*ch+(ch-d)/2,d,d,fill); e.name="MAPDOT"; } })); }
function geo(x,y,w,h,lat,lon){ return [x+(lon-68.1)/29.3*w, y+(37.1-lat)/30.4*h]; }
function arrow(p,x1,y1,x2,y2,color,th){ color=color||C.ink; th=th||2.5; addDiagonalWire(p,x1,y1,x2,y2,color,th);
  const a=Math.atan2(y2-y1,x2-x1); [a+2.6,a-2.6].forEach(b=>addDiagonalWire(p,x2,y2,x2+12*Math.cos(b),y2+12*Math.sin(b),color,th)); }
function diamond(p,cx,cy,r,fill){ const sd=r*Math.SQRT2, q=Math.SQRT1_2; const d=figma.createRectangle(); p.appendChild(d); d.resize(sd,sd);
  d.fills=[{type:"SOLID",color:fill}]; d.strokes=[{type:"SOLID",color:C.ink}]; d.strokeWeight=2; d.cornerRadius=0;
  d.relativeTransform=[[q,-q,cx],[q,q,cy-r]]; return d; }
function callout(p,x,y,w,h,lead,text,o){ o=o||{}; const f=addFrame(p,x,y,w,h,o.fill||C.accentTint,C.ink,2,"CALLOUT");
  rt(f,14,o.py===undefined?10:o.py,w-28,22,lead,text,{color:o.color,leadColor:o.leadColor||C.primaryDeep}); return f; }
function kpi(s,x,y,w,h,num,label,o){ o=o||{}; const f=layered(s,x,y,w,h,o.fill||C.white,"KPI: "+label.slice(0,24),o.back);
  TL(f,16,o.ny===undefined?4:o.ny,o.size||48,num,{family:"Poppins",style:"ExtraBold",color:o.color||C.primary,maxW:w-32,min:30});
  T(f,16,o.ly||72,w-32,22,label,{family:"Inter",style:"Bold",color:o.tc||C.ink}); return f; }
function bl(p,x,y,w,items,o){ o=o||{}; let cy=y; items.forEach(it=>{ addRect(p,x,cy+9,10,10,o.dot||C.primary,C.ink,1.5);
  const t=Array.isArray(it)?rt(p,x+22,cy,w-22,22,it[0],it[1],{color:o.color,leadColor:o.leadColor}):T(p,x+22,cy,w-22,22,it,{color:o.color});
  cy+=t.height+(o.gap===undefined?10:o.gap); }); return cy; }
function lg(p,x,y,color,label){ addRect(p,x,y+6,18,18,color,C.ink,1.5); const t=TL(p,x+26,y,22,label,{family:"Inter",style:"Bold"}); return x+26+t.width+22; }
function teamBT(p,x,y,cw){ const X=[0,cw[0],cw[0]+cw[1]], rh=54, hh=50, tw=cw[0]+cw[1]+cw[2], rows=V.team.rows;
  const t=addFrame(p,x,y,tw,hh+rh*rows.length,C.white,C.ink,2,"TABLE: team");
  const h=addFrame(t,0,0,tw,hh,C.tint,C.ink,2,"HEAD");
  ["Members","Institution","Role"].forEach((l,i)=>addText(h,"Poppins","Bold",22,C.ink,l,X[i]+16,0,cw[i]-24,hh,"LEFT","CENTER"));
  rows.forEach((m,i)=>{ const r=addFrame(t,0,hh+rh*i,tw,rh,i%2?C.surfaceAlt:C.white,C.ink,2,"ROW");
    m.forEach((v,j)=>addText(r,"Inter",j===0?"Bold":"Semi Bold",22,C.ink,v,X[j]+16,0,cw[j]-24,rh,"LEFT","CENTER")); });
  [X[1],X[2]].forEach(vx=>addRect(t,vx-1,0,2,hh+rh*rows.length,C.ink)); return t; }
function coverTop(s){ addChip(s,64,48,560,56,"BEYONDTECH CASE COMPETITION 2026",C.primary,C.white,22);
  logoSlot(s,656,40,170,72,"BeyondTech"); logoSlot(s,842,40,72,72,"DTU"); logoSlot(s,930,40,72,72,"DCG");
  addChip(s,1556,48,300,56,V.team.name,C.primaryDeep,C.white,22);
  addWireH(s,64,1856,140,C.ink,2.5); [64,512,960,1408,1856].forEach(cx=>addEllipse(s,cx-8,132,16,16,C.white,C.ink,2)); }
// ===== END BEYONDTECH DECK EXTRAS =====
```
<!-- END FILE -->

<!-- FILE: deck/make_values.py -->
```python
"""Build the V object for the slide scripts from model/model_outputs.json. gen.py calls build(O); nothing here writes a file.
Every string is pre-formatted: rupee sign, Indian digit grouping, true minus sign. Model run hash is pinned: if the model
is re-run and the hash changes, stop and re-check the constants table in DECK-PLAN.md section 4 before building."""
MODEL_HASH = "3a53e3745f"
SC = ["bear", "base", "bull"]
def inr(x):
    n = abs(round(x)); s = str(n)
    if len(s) > 3:
        head, tail = s[:-3], s[-3:]; parts = []
        while len(head) > 2: parts.append(head[-2:]); head = head[:-2]
        if head: parts.append(head)
        s = ",".join(reversed(parts)) + "," + tail
    return ("\u2212" if round(x) < 0 else "") + s
def rs(x): return ("\u2212" if round(x) < 0 else "") + "\u20b9" + inr(abs(x))
def lk(x, dp=1): return ("\u2212" if x < 0 else "") + "\u20b9" + f"{abs(x) / 100000:.{dp}f}" + " lakh"
def n1(x): return f"{x:.1f}"
def pc(x): return f"{round(x * 100)}%"
NAME = {"DTU": "DTU", "NSUT": "NSUT", "Thapar Institute of Engineering and Technology": "Thapar Institute", "BIT Mesra": "BIT Mesra",
 "BITS Pilani (Pilani campus)": "BITS Pilani", "PEC Chandigarh": "PEC Chandigarh", "IIIT Delhi": "IIIT Delhi", "IGDTUW": "IGDTUW",
 "NIT Kurukshetra": "NIT Kurukshetra", "MNIT Jaipur": "MNIT Jaipur", "MNNIT Allahabad": "MNNIT", "IIIT Allahabad": "IIIT Allahabad",
 "NIT Jalandhar": "NIT Jalandhar", "NIT Tiruchirappalli": "NIT Tiruchirappalli", "NIT Karnataka Surathkal": "NIT Karnataka, Surathkal",
 "NIT Warangal": "NIT Warangal", "NIT Calicut": "NIT Calicut", "IIIT Hyderabad": "IIIT Hyderabad", "BITS Pilani Hyderabad campus": "BITS Pilani, Hyderabad",
 "VIT Vellore": "VIT Vellore", "Manipal Institute of Technology": "MIT Manipal", "RV College of Engineering Bengaluru": "RV College of Engineering",
 "BITS Pilani, Goa campus": "BITS Pilani, Goa", "VJTI Mumbai (Veermata Jijabai Technological Institute)": "VJTI Mumbai",
 "COEP Technological University, Pune": "COEP Pune", "VNIT Nagpur (Visvesvaraya National Institute of Technology)": "VNIT Nagpur",
 "NIT Rourkela (National Institute of Technology, Rourkela)": "NIT Rourkela", "Jadavpur University": "Jadavpur University",
 "IIT Delhi": "IIT Delhi", "IIT Roorkee": "IIT Roorkee", "IIT (BHU) Varanasi": "IIT (BHU) Varanasi", "IIT Guwahati": "IIT Guwahati"}
CH = {"C-ORG-1": "Society workshops", "C-ORG-2": "Branch reps", "C-ORG-3": "Mock placement drive", "C-ORG-4": "Gated library",
 "C-ORG-5": "Referral reward", "C-ORG-6": "Alumni stories", "C-ORG-7": "Placement cell talk", "C-PD-1": "Meta retargeting",
 "C-PD-2": "Meta geofence", "C-PD-3": "LinkedIn ads", "C-PD-4": "Micro-influencers"}
def sp(x): return f"{x:.0f}%" if float(x).is_integer() else f"{x:.1f}%"
def rk(x): return (f"{x // 1000}k" if x >= 10000 else inr(x))
T7L = {"A01_fee_inr": "Fee per student", "A09_application_to_enrolment": "Applicant conversion", "A11_meta_cpl_inr": "Meta cost per lead",
 "A08_lead_to_application": "Lead to application", "A26_gated_capture_rate": "Gated capture rate", "A06_event_registrants": "Event registrations"}
ASM = [("A01_fee_inr", "Fee per student", rs), ("A03_nontech_open_share", "Share open to non-tech", pc), ("A04_dtu_enrolments_12mo", "DTU enrolments today", inr),
 ("A05_referral_share", "Share arriving by referral", pc), ("A08_lead_to_application", "Lead to application", pc), ("A09_application_to_enrolment", "Application to enrolment", pc),
 ("A11_meta_cpl_inr", "Meta cost per lead", rs), ("A17_founding_cohort_size", "Founding cohort size", inr), ("A18_founding_cohort_discount", "Founding cohort discount", pc),
 ("A19_founding_cohort_selection_rate", "Cohort selection rate", pc), ("A20_season2_multiple", "Season 2 multiple", n1), ("A21_case_league_cost_inr", "Case competition cost", rs)]
MAP = [[[6,3]],[[5,6]],[[7,8]],[[7,7]],[[7,6]],[[8,6]],[[8,5]],[[8,6]],[[7,9]],[[6,9]],[[5,10],[32,3]],[[4,13],[25,1],[30,6]],[[2,18],[24,2],[29,5]],[[3,22],[26,7]],[[3,22],[27,6]],[[4,20],[30,2]],[[0,25],[28,3]],[[1,25],[30,1]],[[2,3],[6,20],[30,1]],[[2,3],[6,17]],[[6,17]],[[6,16]],[[6,14]],[[6,14]],[[6,12]],[[6,11]],[[7,9]],[[7,8]],[[8,7]],[[8,7]],[[8,7],[30,1]],[[9,5]],[[9,5]],[[10,4]],[[10,3]],[[11,1]],[],[[31,1]]]
def build(O):
    assert O["meta"]["hash"] == MODEL_HASH, "model re-run: re-check DECK-PLAN.md section 4 before building"
    assert all(O["checks"].values()), "a model check is failing"
    A = O["A"]; t1 = O["T1"]["base"]; t2 = O["T2"]; t4 = O["T4"]; t6 = O["T6"]; t8 = O["T8"]["colleges"]; t9 = O["T9"]; t10 = O["T10"][O["final4"][0]["college"]]
    t11 = O["T11"]; t12 = O["T12"]; t13 = O["T13"]; t14 = O["T14"]; F = O["F"]
    assert all(c["college"] in NAME for c in t8) and all(r["ch"] in CH for r in O["T3"])
    fund = {r["ch"]: r for r in t4["rows"]}; picks = [c["college"] for c in O["final4"]]; res = [c["college"] for c in O["reserve4"]]
    org_e = sum(r["funded_enrol"] for r in t4["rows"] if r["organic"]); paid_e = t4["total_enrol"] - org_e
    ch = [[r["ch"], CH[r["ch"]], rk(r["reach"]), n1(r["enrol_r"]), rs(r["cash_r"]), rs(r["cac"])] for r in O["T3"]]
    cac = [[CH[r["ch"]], round(r["cac"]), rs(r["cac"]), fund[r["ch"]]["funded_cash"] > 0, rs(fund[r["ch"]]["funded_cash"]), n1(fund[r["ch"]]["funded_enrol"]), r["organic"]]
           for r in sorted(O["T3"], key=lambda r: r["cac"])]
    def tag(c):
        if c["is_calibration"]: return "LIVE"
        if c["college"] in picks: return "PICK " + str(picks.index(c["college"]) + 1)
        return "BENCH" if c["college"] in res else "LOWER"
    def row(c): return [NAME[c["college"]], [c["scores"]["C%d" % i] for i in range(1, 8)], f"{c['fit']:.2f}", (sp(t9[c["college"]]) if c["college"] in t9 else "n/a"), tag(c)]
    ll = [c for c in t8 if not c["is_calibration"]]; ok = sorted([c for c in ll if c["screen_pass"]], key=lambda c: -c["fit"])
    cal = sorted([c for c in t8 if c["is_calibration"]], key=lambda c: -c["fit"])
    def why(c): return ("F1: batch of " + inr(c["raw"]["C3"])) if not c["pass_f1"] else ("F2: " + str(c["raw"]["C1"]) + " of 4 anchors")
    rest = [[NAME[c["college"]], f"{c['fit']:.2f}", why(c)] for c in sorted([c for c in ll if not c["screen_pass"]], key=lambda c: -c["fit"])]
    screen = [len(ll), sum(c["pass_f1"] for c in ll), sum(c["pass_f1"] and c["pass_f2_4"] for c in ll), len(picks)]
    assert screen == [28, 25, 10, 4] and len(rest) == 18 and len(ok) == 10, screen
    stab_min = int(min(c["stability_pct"] for c in O["final4"])); b6 = t6["base"]; b12 = t12["base"]; pen = t2["base"]["penetration_pct"]
    V = dict(
        hash=O["meta"]["hash"],
        team=dict(name="TEAM IDEAFORGE", rows=[["Harsh Kawatra", "Dept of ECE, DTU", "Team Lead"], ["Anuj Gambhir", "Dept of Biotechnology, DTU", "Member"]]),
        f2=f"{lk(b12['total_spend'])} takes BeyondTech from {t2['base']['enrolments_today']} to {inr(b6['enrolments'])} DTU enrolments and opens four new campuses in twelve months, by distributing proof before buying reach",
        f3=f"Recall at DTU is strong, yet about {pen:.1f}% of the non-tech pool enrols, because five leaks sit between hearing of BeyondTech and paying",
        f4=f"Eleven channels in three layers close the five leaks in order, and the cheapest, a gated resource library, brings {round(fund['C-ORG-4']['funded_enrol'])} enrolments at {rs(fund['C-ORG-4']['cac'])} each",
        f5=f"{lk(t4['total_cash'])} funds nine of eleven channels, cheapest first: organic takes {round(t4['organic_pct'])}% of the cash and brings {round(t4['organic_enrol_pct'])}% of the {inr(t4['total_enrol'])} enrolments",
        f6=f"BITS Pilani, NIT Tiruchirappalli, PEC Chandigarh and COEP Pune top a seven-criterion scorecard of {screen[0]} candidate colleges and hold in {stab_min}% or more of 2,000 re-weightings",
        f7=f"Each new campus is entered in four steps: borrow a society's trust, seed {t10['base']['founding_cohort']} students, earn their offers, then hand over to ambassadors who were customers first",
        f8=f"One campus costs {rs(t10['base']['cost_season1'])} to open and turns cash positive in season 1 in the base case; checkpoints at days 30, 60 and 90 decide stop, hold or scale",
        f9=f"Two waves add four campuses by September 2027 and lift base-case enrolments to {inr(b12['total_enrolments'])}, with every campus clearing three gates before more money is spent",
        fA=f"Every number on the eight slides traces to the brief, a named source, the {len(t8)}-college dataset or one model with {len(O['T16'])} stated assumptions",
        budget=rs(t4["total_cash"]), budget_lk=lk(t4["total_cash"]), enrol=inr(t4["total_enrol"]), cac=rs(b6["blended_cac"]),
        org_pct=f"{t4['organic_pct']:.1f}%", paid_pct=f"{t4['paid_pct']:.1f}%", org_pct0=f"{round(t4['organic_pct'])}%", org_e_pct0=f"{round(t4['organic_enrol_pct'])}%",
        org_e_pct=f"{t4['organic_enrol_pct']:.1f}%", paid_e_pct=f"{100 - t4['organic_enrol_pct']:.1f}%", split=[t4["organic_pct"], t4["paid_pct"], t4["organic_enrol_pct"], 100 - t4["organic_enrol_pct"]],
        layer=[["Organic", rs(t4["organic_cash"]), n1(org_e), rs(t4["organic_cash"] / org_e)], ["Paid", rs(t4["paid_cash"]), n1(paid_e), rs(t4["paid_cash"] / paid_e)],
               ["Total", rs(t4["total_cash"]), n1(t4["total_enrol"]), rs(b6["blended_cac"])]],
        tam=inr(t1["tam"]), sam=inr(t1["sam"]), cohort=inr(t1["year_cohort"]), now=inr(t2["base"]["enrolments_today"]), pen=f"{pen:.1f}%",
        pen3=[f"{t2[s]['penetration_pct']:.2f}%" for s in SC], sam3=[inr(O["T1"][s]["sam"]) for s in SC], now3=[inr(t2[s]["enrolments_today"]) for s in SC],
        ref=pc(A["A05_referral_share"]["base"]), posts=[["Intern post", F["foundersoffice_post_reactions"]], ["DCG case post", F["dcg_case_comp_post_reactions"]],
               ["Ambassador 1", F["ambassador_post1_reactions"]], ["Ambassador 2", F["ambassador_post2_reactions"]]],
        ladder=[["Enrolments"] + [str(A["A14_ambassador_enrolments_per_season"][s]) for s in SC], ["Payout each"] + [rs(A["A15_ambassador_payout_per_enrolment_inr"][s]) for s in SC],
                ["Referral"] + [rs(A["A16_referral_reward_per_enrolment_inr"][s]) for s in SC]],
        t10t=[["Founding cohort"] + [str(t10[s]["founding_cohort"]) for s in SC], ["Fee, season 1"] + [rs(t10[s]["fee_season1"]) for s in SC],
              ["League cost"] + [rs(t10[s]["cost_season1"]) for s in SC], ["Cash, season 1"] + [lk(t10[s]["cash_season1"], 2) for s in SC],
              ["Season 2 intake"] + [str(round(t10[s]["enrol_season2"])) for s in SC], ["Cash by end of S2"] + [lk(t10[s]["cash_season2"], 2) for s in SC],
              ["Breaks even"] + [t10[s]["breakeven"] for s in SC]],
        cash_line=[[0, t10[s]["cash_season1"] / 1e5, t10[s]["cash_season2"] / 1e5] for s in SC], median=f"{O['T8']['median_fit']:.2f}",
        ch=ch, cac_rows=cac, months=[r["month"][:3] for r in O["T5"]["rows"]], spend=[r["spend"] for r in O["T5"]["rows"]], menrol=[r["enrolments"] for r in O["T5"]["rows"]],
        t6=[[s.capitalize(), inr(t6[s]["enrolments"]), lk(t6[s]["spend"]), rs(t6[s]["blended_cac"]), lk(t6[s]["contribution"])] for s in SC],
        t7=[[T7L[r["assumption"]], r["contribution_bear"] / 1e5, r["contribution_bull"] / 1e5, lk(r["swing"])] for r in O["T7"]["rows"] if r["swing"] > 0], t7base=O["T7"]["base_contribution"] / 1e5,
        contrib=lk(b6["contribution"], 2), grid=[row(c) for c in ok], cal=[row(c) for c in cal], rest=rest, screen=screen, stab_min=f"{stab_min}%",
        t10=[[s.capitalize(), str(t10[s]["founding_cohort"]), rs(t10[s]["fee_season1"]), rs(t10[s]["cost_season1"]), rs(t10[s]["cash_season1"]), str(round(t10[s]["enrol_season2"])), rs(t10[s]["cash_season2"]), t10[s]["breakeven"]] for s in SC],
        cost1=rs(t10["base"]["cost_season1"]), cohort20=str(t10["base"]["founding_cohort"]), amb=str(t10["base"]["ambassadors"]), enrol2=str(round(t10["base"]["enrol_season2"])),
        offers=str(t13["m12"]["offers_per_campus"]), hours=[t11["hours_today"], -t11["hours_freed_dtu"], t11["hours_new_campuses"], t11["hours_after_total"]], cap=inr(t11["capacity_annual"]),
        t12=[[s.capitalize(), inr(t12[s]["total_enrolments"]), lk(t12[s]["total_spend"]), lk(t12[s]["total_contribution"])] for s in SC], t12e=[t12[s]["total_enrolments"] for s in SC],
        total_spend=lk(b12["total_spend"]), total_enrol=inr(b12["total_enrolments"]), total_contrib=lk(b12["total_contribution"]),
        t13=[["Leads"] + [inr(t13[m]["leads"]) for m in ("baseline", "m3", "m6", "m12")], ["Applications"] + [inr(t13[m]["applications"]) for m in ("baseline", "m3", "m6", "m12")],
             ["Second-year share"] + [pc(t13[m]["second_year_share"]) for m in ("baseline", "m3", "m6", "m12")], ["Founding cohort fill"] + [pc(t13[m]["founding_cohort_fill"]) for m in ("baseline", "m3", "m6", "m12")],
             ["Offers per new campus"] + [str(t13[m]["offers_per_campus"]) for m in ("baseline", "m3", "m6", "m12")]],
        t14=[[d.replace("day", "Day "), t14[d]["metric"].replace("founding-cohort ", "").capitalize(), str(t14[d]["stop_below"]), str(t14[d]["scale_above"])] for d in ("day30", "day60", "day90")],
        t15=[[rs(r["price_inr"]), r["breakeven_enrolments"]] for r in O["T15"]],
        asm=[[k[:3], lab] + [fn(A[k][s]) for s in SC] for k, lab, fn in ASM], n_asm=str(len(O["T16"])), map=MAP)
    V["must"] = [V["budget_lk"], V["enrol"], V["cac"], V["org_pct0"], V["org_e_pct0"], V["pen"], V["cost1"], V["total_enrol"], V["stab_min"], "BEYONDTECH", "THANK YOU", "TEAM IDEAFORGE",
                 "Harsh Kawatra", "Anuj Gambhir", "BITS Pilani", "NIT Tiruchirappalli", "PEC Chandigarh", "COEP", "CONCLUSIVELY", "THEREFORE", "15 January", "Fit = 0.25 C1"]
    return V
```
<!-- END FILE -->

<!-- FILE: deck/gen.py -->
```python
# ===== BEYONDTECH DECK GEN v1 =====
"""Deck generator. PY is "C:\\Users\\harsh\\AppData\\Local\\Programs\\Python\\Python312\\python.exe" -X utf8. Run from anywhere:
  PY beyondtech-dcg/deck/gen.py pre        build preamble.js, mock_figma.js and values.js
  PY beyondtech-dcg/deck/gen.py mock       apply overrides.json, dry-run all 11 slides on the offline mock; exit 1 on any issue
  PY beyondtech-dcg/deck/gen.py mock 3 5   the same for slides 3 and 5 only
  PY beyondtech-dcg/deck/gen.py bind       write build/slide_NN.js, v1_NN.js, v1_all.js, sweeps.js, slots.js from slide-ids.json"""
import io, json, re, subprocess, sys, pathlib
DECK = pathlib.Path(__file__).resolve().parent; BT = DECK.parent; ROOT = BT.parent; N = "\n"; NS = 11
LIB = ROOT / "verdict-mnc" / "deck" / "preamble.js"; MOCKSRC = ROOT / "verdict-mnc" / "deck" / "mock_figma.js"
MEM = None  # the planning-time dry run sets this to a dict so that nothing touches the disk
def rdx(p): return io.open(p, encoding="utf-8").read().replace("\r", "")
def has(rel): return (MEM is not None and rel in MEM) or (DECK / rel).exists()
def rd(rel): return MEM[rel] if (MEM is not None and rel in MEM) else rdx(DECK / rel)
def wr(rel, t, quiet=False):
    if MEM is not None: MEM[rel] = t
    else:
        p = DECK / rel; p.parent.mkdir(parents=True, exist_ok=True); io.open(p, "w", encoding="utf-8", newline=N).write(t)
    if not quiet: print("wrote", rel, len(t))
def vals(): return json.loads(rd("values.js")[len("const V = "):].rstrip().rstrip(";"))
def pre():
    t = rdx(LIB)
    for f in ("const C = {", "const HG=[", "function skeleton2(", "function lineChart(", "function grid(", "function gantt(", "function tornado(", "function logoSlot(", "function layered(",
              "function panel(", "function vBars(", "function hBars(", "function wrapTable(", "function waterfall(", "function teamTableN(", "function segBar(", "function rt(", "function wipe(", "function srcLine("):
        assert t.count(f) == 1, f
    pal = rd("_palette.js").strip(); k = pal.index("const HG=["); a = t.index("const C = {"); b = t.index("};", a) + 2; h0 = t.index("const HG=["); h1 = t.index("];", h0) + 2
    wr("preamble.js", t[:a] + pal[:k].strip() + t[b:h0] + pal[k:] + t[h1:] + N + rd("_extras.js"))
    m, c1 = re.subn(r"const \[pre, vals, slide, num\] = process\.argv\.slice\(2\);\nconst code = [^\n]*\n", "const code = CODE_JSON;\n", rdx(MOCKSRC))
    c2 = m.count("/LOGO:/.test("); m = m.replace("/LOGO:/.test(", "/LOGO:|IMG:/.test(")
    assert c1 == 1 and c2 == 1 and "for (let i = 1; i <= 11; i++)" in m, (c1, c2); wr("mock_figma.js", m)
    g = {"__name__": "make_values"}; exec(compile(rd("make_values.py"), "make_values.py", "exec"), g)
    wr("values.js", "const V = " + json.dumps(g["build"](json.loads(rdx(BT / "model" / "model_outputs.json"))), ensure_ascii=False) + ";")
def derive(only=None):
    """Apply deck/overrides.json ({"exact old string": "new string"}) to the slide files and write deck/derived/sNN.js."""
    ov = json.loads(rd("overrides.json")) if has("overrides.json") else {}; used = set()
    for n in range(1, NS + 1):
        if not has("slides/s%02d.js" % n) and only and n not in only: continue
        s = rd("slides/s%02d.js" % n)
        for a, b in ov.items():
            if a in s: s = s.replace(a, b); used.add(a)
        wr("derived/s%02d.js" % n, s, True)
    miss = [a for a in ov if a not in used]; print("overrides", len(ov), "unused", miss); assert not miss, "an override key matches no slide text"
def compose(n, sid):
    p = rd("preamble.js"); s = rd("derived/s%02d.js" % n); old = 'getNodeByIdAsync("S%d")' % n; assert s.count(old) == 1, n
    V = vals(); keys = set(re.findall(r"\bV\.([A-Za-z_][A-Za-z0-9_]*)", p + s)); miss = keys - set(V); assert not miss, ("unknown V keys", n, miss)
    sub = "const V = " + json.dumps({k: V[k] for k in V if k in keys}, ensure_ascii=False) + ";"
    return p + N + sub + N + "const results=[];" + N + s.replace(old, 'getNodeByIdAsync("%s")' % sid) + N + "return {results,warnings};" + N
def mock(only=None):
    derive(only); ok = True; m = rd("mock_figma.js")
    for n in range(1, NS + 1):
        if only and n not in only: continue
        code = compose(n, "S%d" % n)
        r = subprocess.run(["node", "-"], input=m.replace("CODE_JSON", json.dumps(code)), capture_output=True, text=True, encoding="utf-8")
        out = r.stdout + r.stderr; good = "warnings: []" in out and "ISSUES 0" in out and len(code) < 49900; ok = ok and good
        print("s%02d" % n, "OK" if good else "FAIL", len(code), "|", " | ".join(l.strip() for l in out.splitlines() if l.strip())[:(200 if good else 6000)].encode("ascii", "replace").decode())
    return ok
def bind():
    derive(); ids = json.loads(rd("slide-ids.json")); V = vals(); v1 = rd("_v1.js"); sw = rd("_sweeps.js")
    assert v1.count("const ids=IDS;") == 1 and sw.count("const ids=IDS;") == 1 and sw.count("MUSTLIST") == 1 and len(ids) == NS
    for n in range(1, NS + 1):
        code = compose(n, ids["S%d" % n]); assert len(code) < 50000, (n, len(code)); wr("build/slide_%02d.js" % n, code)
        wr("build/v1_%02d.js" % n, v1.replace("const ids=IDS;", "const ids=%s;" % json.dumps([ids["S%d" % n]])))
    allids = json.dumps([ids["S%d" % n] for n in range(1, NS + 1)])
    wr("build/v1_all.js", v1.replace("const ids=IDS;", "const ids=%s;" % allids))
    wr("build/sweeps.js", sw.replace("const ids=IDS;", "const ids=%s;" % allids).replace("MUSTLIST", json.dumps(V["must"], ensure_ascii=False)))
    wr("build/slots.js", "const ids=%s; const out=[]; for(const id of ids){ const s=await figma.getNodeByIdAsync(id); s.findAll(n=>n.name.startsWith('LOGO: ')||n.name.startsWith('IMG: ')).forEach(n=>out.push({slide:s.name,id:n.id,name:n.name,w:Math.round(n.width),h:Math.round(n.height)})); } return out;" % allids)
def main(a):
    if a[0] == "pre": pre()
    elif a[0] == "mock": sys.exit(0 if mock(set(int(x) for x in a[1:]) or None) else 1)
    elif a[0] == "bind": bind()
if __name__ == "__main__": main(sys.argv[1:])
```
<!-- END FILE -->

<!-- FILE: deck/slides/s01.js -->
```js
{ const s = await figma.getNodeByIdAsync("S1"); wipe(s); coverTop(s);
nm(TL(s,64,156,80,"FROM A DTU HABIT",{family:"Poppins",style:"ExtraBold",maxW:1100,min:60}),"TITLE");
nm(TL(s,64,276,80,"TO A TIER-1 SYSTEM",{family:"Poppins",style:"ExtraBold",color:C.primary,maxW:1100,min:60}),"TITLE 2");
nm(T(s,64,404,1100,26,"Deepen DTU, then launch at four new Tier-1 campuses in twelve months",{family:"Poppins",style:"Bold",color:C.primaryDeep}),"SUBTITLE");
const v=layered(s,64,460,1100,236,C.primaryDeep,"CARD: verdict");
T(v,28,18,1044,26,"OUR ANSWER: BEYONDTECH HAS A PROOF DISTRIBUTION PROBLEM, NOT AN AWARENESS PROBLEM.",{family:"Poppins",style:"Bold",color:C.accent});
T(v,28,112,1044,22,"Capture second and third years at DTU before referral reaches them. Then enter BITS Pilani, NIT Tiruchirappalli, PEC Chandigarh and COEP Pune by borrowing a society's trust and letting a founding cohort's offers do the selling.",{color:C.white});
nm(TL(s,64,716,28,V.team.name,{color:C.primary}),"TEAM LABEL");
teamBT(s,64,764,[300,500,300]);
T(s,64,944,1100,22,"Prepared for the BeyondTech x DTU Consulting Group Case Competition 2026",{family:"Inter",style:"Bold",color:C.primaryDeep});
const pm=panel(s,1200,160,656,836,"FIVE CAMPUSES, ONE PROOF LOOP",{fill:C.tint,layered:true});
T(pm,16,58,624,22,"The course is company-specific prep, so it travels only where the same recruiters visit.",{family:"Inter",style:"Bold"});
const HUB=[328,404];
[[161,164],[495,164],[161,568],[495,568]].forEach(q=>addDiagonalWire(pm,HUB[0],HUB[1],q[0],q[1],C.ink,2.5));
dashedV(pm,328,490,194,C.primaryDeep,2.5); dashedH(pm,91,684,470,C.primaryDeep,2.5);
[91,247,403,559].forEach(cx=>dashedV(pm,cx,684,12,C.primaryDeep,2.5));
node2(pm,16,128,290,72,"THE PROOF","50+ selections at DTU");
node2(pm,350,128,290,72,"THE RECRUITERS","20 anchor firms");
node2(pm,16,532,290,72,"THE DOOR IN","societies lend trust");
node2(pm,350,532,290,72,"TODAY'S ENGINE",V.ref+" arrive by referral",{fill:C.accentTint});
logoSlot(pm,16,210,90,60,"DTU"); [["Bain",350],["ZS",424],["Eternal",498],["JP Morgan",572]].forEach(l=>logoSlot(pm,l[1],210,66,60,l[0]));
logoSlot(pm,16,614,90,60,"DCG"); logoSlot(pm,114,614,130,60,"180DC DTU"); logoSlot(pm,350,614,66,60,"WhatsApp"); logoSlot(pm,424,614,66,60,"LinkedIn");
addEllipse(pm,HUB[0]-86,HUB[1]-86,172,172,C.primaryDeep,C.ink,2.5);
addText(pm,"Poppins","Bold",22,C.white,"BEYONDTECH",HUB[0]-80,HUB[1]-40,160,36,"CENTER","CENTER");
addText(pm,"Inter","Bold",22,C.accent,"11 weeks",HUB[0]-80,HUB[1]+4,160,30,"CENTER","CENTER");
const PK=V.grid.filter(r=>r[4].indexOf("PICK")===0);
["BITS Pilani","NIT Trichy","PEC","COEP Pune"].forEach((p,i)=>{ const x=16+i*156;
  logoSlot(pm,x,696,150,50,p); TL(pm,x,750,22,p,{family:"Inter",style:"Bold",maxW:150}); TL(pm,x,778,22,"Fit "+PK[i][2],{color:C.primary,maxW:150}); });
fine(pm,16,810,624,"Logos and crests mark firms and campuses; no partnership is implied.");
addWireH(s,64,1856,1012,C.ink,2.5);
srcLine(s,"Source: BeyondTech x DCG case brief 2026 | beyondtech.org.in, accessed Oct 2026 | Team IdeaForge research and model "+V.hash);
results.push({slide:s.id,total:s.findAll(()=>true).length,top:s.children.length}); }
```
<!-- END FILE -->

<!-- FILE: deck/slides/s02.js -->
```js
{ const s = await figma.getNodeByIdAsync("S2");
skelBT(s,0,"1 / 8","EXECUTIVE SUMMARY",380,V.f2,"Source: case brief B04 to B19 | beyondtech.org.in and LinkedIn, Oct 2026 | college_scorecard.csv (32 colleges) | model "+V.hash+", tables T4, T6, T8, T10, T11");
[["SITUATION","An 11-week course for non-tech roles has 50+ DTU selections this season and strong recall, and grows by word of mouth and the founder's own mentoring."],
 ["COMPLICATION","The engine is informal and tied to the founder: no repeatable paid channel, no ambassador flywheel, and outside DTU, NSUT, Thapar and BIT Mesra almost no one knows BeyondTech."],
 ["THE TASK","Grow DTU on a stated organic and paid budget, then pick 3 to 4 Tier-1 campuses and enter each one without a local founder or word of mouth."],
 ["OUR ANSWER","Distribute proof, not awareness: capture students earlier at DTU, then borrow a society's trust on four new campuses and let a founding cohort's offers do the selling."]]
.forEach((q,i)=>{ const x=64+i*452, last=i===3;
  const f=last?layered(s,x,316,436,236,C.primaryDeep,"CARD: "+q[0]):addFrame(s,x,316,436,236,C.white,C.ink,2,"CARD: "+q[0]);
  const hd=addFrame(f,0,0,436,46,last?C.accent:C.tint,C.ink,2,"HEAD"); TL(hd,16,6,22,q[0],{color:C.primaryDeep,maxW:404});
  T(f,16,58,404,22,q[1],{color:last?C.white:C.ink}); });
const pillar=(x,title,num,lab,items)=>{ const f=layered(s,x,568,880,266,C.white,"CARD: "+title);
  const hd=addFrame(f,0,0,880,46,C.primaryDeep,C.ink,2,"HEAD"); TL(hd,16,6,22,title,{color:C.white,maxW:848});
  TL(f,16,56,52,num,{family:"Poppins",style:"ExtraBold",color:C.primary,maxW:260,min:30});
  T(f,16,140,260,22,lab,{family:"Inter",style:"Bold"});
  addRect(f,292,58,2,164,C.ink); bl(f,310,58,554,items,{gap:8}); };
pillar(64,"PILLAR 1: DEEPEN DTU",V.budget_lk,"DTU budget for the season, "+V.org_pct0+" organic",
 [["Fix first: ","gate the 8 free PDFs and publish a fee band, two leaks closed at ₹0."],
  ["Reach early: ","societies, branch reps and a mock drive reach the years referral misses."],
  ["Pay last: ","only warm retargeting and micro-influencers get money."]]);
pillar(976,"PILLAR 2: LAUNCH AT FOUR CAMPUSES","4 of "+V.screen[0],"campuses picked on seven criteria",
 [["Where: ","BITS Pilani and NIT Tiruchirappalli in Jan 2027, PEC and COEP in summer."],
  ["How: ","a case competition co-branded with each campus's consulting society, then a cohort of "+V.cohort20+"."],
  ["Who sells: ","ambassadors drawn only from that cohort."]]);
[[V.enrol,"DTU enrolments in a season, up from "+V.now],[V.cac,"blended cost per enrolment at DTU"],
 [V.org_e_pct0,"of enrolments, from "+V.org_pct0+" of the cash"],["Season 1","when a new campus turns cash positive"],
 [String(-V.hours[1])+" hours","of founder time freed a year at DTU"]]
.forEach((k,i)=>kpi(s,64+i*362,850,342,152,k[0],k[1],{ly:74}));
results.push({slide:s.id,total:s.findAll(()=>true).length,top:s.children.length}); }
```
<!-- END FILE -->

<!-- FILE: deck/slides/s03.js -->
```js
{ const s = await figma.getNodeByIdAsync("S3");
skelBT(s,1,"2 / 8","DIAGNOSIS",300,V.f3,"Source: case brief B10 to B13 | beyondtech.org.in and LinkedIn, Oct 2026 (W06 to W14) | DTU NIRF 2025 | model "+V.hash+", T1, T2, T11, T13");
const fp=panel(s,64,316,560,714,"THE DTU FUNNEL TODAY");
stepFunnel(fp,16,64,528,[{t:V.tam+" in years 2 to 4"},{t:V.sam+" open to non-tech"},{t:V.now+" enrolled ("+V.pen+")",tc:C.ink},{t:"50+ selections",tc:C.ink}],{tierH:58,minW:270,size:24});
addTable(fp,16,336,[150,130,120,128],["Case","Pool","Enrolled","Share"],[0,1,2].map(i=>[["Bear","Base","Bull"][i],V.sam3[i],V.now3[i],V.pen3[i]]),{rowH:42,headerH:44});
fine(fp,16,512,528,"Pool: years 3 and 4 at the non-tech share, year 2 at half (A03, est.). Enrolled today: A04, est., from 50+ selections.");
TL(fp,16,566,22,"HOW ENROLMENTS ARRIVE TODAY",{color:C.primaryDeep,maxW:528});
const rf=parseInt(V.ref,10); segBar(fp,16,602,528,48,[{v:rf,c:C.primaryDeep,t:V.ref+" referral"},{v:100-rf,c:C.accent,t:(100-rf)+"%",tc:C.ink}]);
T(fp,16,658,528,22,"Recall is not the gap; the brief calls it strong (B11).",{family:"Inter",style:"Bold",color:C.primary});
const lp=panel(s,640,316,640,714,"FIVE LEAKS BETWEEN HEARING AND PAYING");
const rt0=addFrame(lp,16,62,608,48,C.primaryDeep,C.ink,2,"ROOT"); addText(rt0,"Poppins","Bold",22,C.white,"Has heard of BeyondTech, has not enrolled",16,0,576,48,"LEFT","CENTER");
addRect(lp,34,110,2.5,494,C.ink);
[["Referral misses most","Word of mouth runs through placed seniors, mostly circuital fourth years.","not measurable"],
 ["No net at the top","8 free PDFs and the sampler are open links that capture no contact.","8 of 8 open"],
 ["One founder, one chat","Every enquiry goes to one WhatsApp number; the founder runs each interview.",V.hours[0]+" hours a year"],
 ["Price hidden at the gate","Application, review, fit interview, payment; no fee shown anywhere.","no fee shown"],
 ["No early-year capture","No channel is built for second or third years before the January batch.","0% second years"]]
.forEach((l,i)=>{ const y=128+i*114; addRect(lp,34,y+19,22,2.5,C.ink); addBadge(lp,56,y,40,i+1,C.primary,C.white);
  TL(lp,108,y+4,22,l[0],{color:C.primaryDeep,maxW:300});
  const ch=addFrame(lp,424,y,200,36,(i===0||i===3)?C.surface:C.alertTint,C.ink,1.5,"CHIP"); addText(ch,"Inter","Bold",22,C.ink,l[2],6,0,188,36,"CENTER","CENTER");
  T(lp,108,y+42,516,22,l[1]); });
fine(lp,16,688,608,"Evidence: I1, W08, W11, W06, A28; research section 9.");
const ap=panel(s,1296,316,560,714,"WHAT THE THREE LINKS SHOW");
TL(ap,16,60,22,"LINKEDIN REACTIONS BY POST",{color:C.primaryDeep,maxW:528});
hBars(ap,16,94,528,V.posts.map((p,i)=>({label:p[0],value:p[1],text:String(p[1]),color:i===0?C.primary:(i===1?C.primaryDeep:C.alert)})),{labelW:180,rowH:42,valueW:60});
T(ap,16,270,528,22,"Students answer personal upside: the intern post drew "+V.posts[0][1]+", the cold ambassador call "+V.posts[2][1]+" (W13, W14).",{family:"Inter",style:"Bold"});
imgSlot(ap,16,360,256,132,"shot-resources","Screenshot: resources page"); imgSlot(ap,288,360,256,132,"shot-admission","Screenshot: admission steps");
TL(ap,16,498,22,"8 PDFs, open links",{family:"Inter",style:"Bold",maxW:256}); TL(ap,288,498,22,"Fit interview, no fee",{family:"Inter",style:"Bold",maxW:256});
TL(ap,16,540,22,"FOUNDER HOURS A YEAR",{color:C.primaryDeep,maxW:528});
hBars(ap,16,578,528,[{label:"Today",value:V.hours[0],text:V.hours[0]+" h, 2.0 each",color:C.alert},{label:"After plan",value:V.hours[0]+V.hours[1],text:(V.hours[0]+V.hours[1])+" h, 0.8 each",color:C.good}],{labelW:130,rowH:44,valueW:180,max:V.hours[0]});
fine(ap,16,676,528,"Hours: A22, A23 (est.). Shots: beyondtech.org.in, Oct 2026");
results.push({slide:s.id,total:s.findAll(()=>true).length,top:s.children.length}); }
```
<!-- END FILE -->

<!-- FILE: deck/slides/s04.js -->
```js
{ const s = await figma.getNodeByIdAsync("S4");
skelBT(s,2,"3 / 8","DTU PLAN",260,V.f4,"Source: model "+V.hash+", tables T3 and T5 | societies.csv, Instagram counts Oct 2026 | beyondtech.org.in (W05, W06, W08) | registrations: A06 benchmark, est.");
const cp=panel(s,64,316,740,714,"ELEVEN CHANNELS IN THREE LAYERS");
const fills=V.ch.map((r,i)=>i<7?(i%2?C.surfaceAlt:C.white):(V.cac_rows.find(c=>c[0]===r[1])[3]?C.accentTint:C.alertTint));
wrapTable(cp,16,60,[270,100,90,138,110],["Channel","Reach","Enrol.","Cash","CAC"],V.ch.map(r=>[r[1],r[2],r[3],r[4],r[5]]),{rowH:46,headerH:44,fills,name:"channels"});
let lx=lg(cp,16,620,C.white,"Organic"); lx=lg(cp,lx,620,C.accentTint,"Paid, funded"); lg(cp,lx,620,C.alertTint,"Paid, ₹0");
T(cp,16,656,708,22,"Layer 1 costs ₹0: gate the library, show a fee band, run group sessions.",{family:"Inter",style:"Bold",color:C.primaryDeep});
const pp=panel(s,820,316,560,714,"SIX DTU PARTNERS AND THEIR MONTH");
const PR=[["DCG","Workshop after this competition","Dec 2026","150","DCG"],["Placement cell","Info session before the batch","Jan 2027","200","DTU"],
 ["180DC DTU","Casebook session","Feb 2027","150","180DC DTU"],["TEDxDTU","Career segment at the event","Mar 2027","250","TEDxDTU"],
 ["ASSETS DTU","Numbers behind the offer","Apr 2027","80","ASSETS DTU"],["E-Cell DTU","Result stories to 14,600","Sep 2027","n/a","E-Cell DTU"]];
wrapTable(pp,88,60,[108,172,106,80],["Society","Activation","Month","Reg."],PR.map(r=>r.slice(0,4)),{rowH:84,headerH:44,name:"partners"});
PR.forEach((r,i)=>logoSlot(pp,16,60+44+i*84+11,62,62,r[4]));
callout(pp,16,620,528,82,"Order: ","borrow 180DC's relevance first, then the reach of E-Cell and DTU Times (19,000).");
const kp=panel(s,1396,316,460,714,"SPEND BY MONTH, BASE CASE");
hBars(kp,16,60,428,V.months.map((m,i)=>({label:m,value:V.spend[i],text:"₹"+fmtN(V.spend[i]),color:m==="Jan"?C.primary:(m==="Aug"?C.accent:C.primaryDeep)})),{labelW:56,rowH:32,barH:22,valueW:100,max:50000});
bl(kp,16,456,428,[["Oct: ","gate library, fee band"],["Nov: ","reps and mock drive"],["Jan: ","batch opens 15 January"],["Aug: ","placement push (est.)"]],{gap:6});
fine(kp,16,600,428,"Jan peak: batch start (W05). Aug: placement season, est. 1 August. Paid spend never starts before an organic list exists to retarget.");
results.push({slide:s.id,total:s.findAll(()=>true).length,top:s.children.length}); }
```
<!-- END FILE -->

<!-- FILE: deck/slides/s05.js -->
```js
{ const s = await figma.getNodeByIdAsync("S5");
skelBT(s,3,"4 / 8","DTU BUDGET",300,V.f5,"Source: model "+V.hash+", tables T3, T4, T6, T7 | Meta and LinkedIn India cost benchmarks, research section 12 | A01 fee is an assumption: BeyondTech publishes no fee");
const m=layered(s,64,316,1792,150,C.primaryDeep,"CARD: MONEYSHOT");
T(m,28,14,1000,28,V.budget_lk+" at DTU buys "+V.enrol+" enrolments at a blended "+V.cac+" each, and the "+V.org_pct0+" of the budget spent organically delivers "+V.org_e_pct0+" of them.",{family:"Poppins",style:"Bold",color:C.white});
[[V.budget,"total DTU cash"],[V.ch[3][5],"cheapest CAC, gated library"],["2 of 4","paid channels get ₹0"]].forEach((k,i)=>{ const x=1068+i*240;
  addRect(m,x-16,20,3,110,C.accent); TL(m,x,8,44,k[0],{family:"Poppins",style:"ExtraBold",color:C.accent,maxW:210,min:30}); T(m,x,82,210,22,k[1],{family:"Inter",style:"Bold",color:C.white}); });
const bp=panel(s,64,482,600,548,"CHEAPEST FIRST: CAC BY CHANNEL");
const items=V.cac_rows.map(r=>({label:r[0],value:r[1],text:r[2],color:r[3]?(r[6]?C.primary:C.primaryDeep):C.alertTint}));
hBars(bp,16,60,568,items.slice(0,9),{labelW:250,rowH:38,barH:24,valueW:100,max:33333});
dashedH(bp,16,408,568,C.alert,2.5);
TL(bp,16,414,22,"FUNDING STOPS: "+V.enrol+" ENROLMENTS REACHED",{color:C.alert,maxW:568});
hBars(bp,16,450,568,items.slice(9),{labelW:250,rowH:38,barH:24,valueW:100,max:33333});
const dp=panel(s,680,482,560,548,"CASH SHARE AGAINST RESULT SHARE");
donut(dp,150,150,160,[{v:V.split[0],c:C.primary},{v:V.split[1],c:C.primaryDeep}]); donut(dp,410,150,160,[{v:V.split[2],c:C.primary},{v:V.split[3],c:C.primaryDeep}]);
addText(dp,"Poppins","Bold",22,C.ink,"CASH",105,133,90,34,"CENTER","CENTER"); addText(dp,"Poppins","Bold",22,C.ink,"ENROL",365,133,90,34,"CENTER","CENTER");
TL(dp,0,236,22,V.org_pct0+" organic cash",{family:"Inter",style:"Bold",color:C.primary,centerAt:150}); TL(dp,0,236,22,V.org_e_pct0+" organic enrolments",{family:"Inter",style:"Bold",color:C.primary,centerAt:410});
let lx=lg(dp,16,270,C.primary,"Organic"); lg(dp,lx,270,C.primaryDeep,"Paid");
addTable(dp,16,306,[130,150,90,158],["Layer","Cash","Enrol.","Per head"],V.layer,{rowH:42,headerH:44});
callout(dp,16,486,528,46,"Blended CAC = ",V.budget+" ÷ "+V.enrol+" = "+V.cac,{py:8});
const rp=panel(s,1256,482,600,548,"BASE, BULL AND A BEAR STRESS TEST");
wrapTable(rp,16,60,[184,128,128,128],["₹ and count","Bear","Base","Bull"],[["Enrolments"].concat(V.t6.map(r=>r[1])),["Spend"].concat(V.t6.map(r=>r[2])),["Blended CAC"].concat(V.t6.map(r=>r[3])),["Contribution"].concat(V.t6.map(r=>r[4]))],{rowH:56,headerH:40,name:"scenarios"});
TL(rp,16,330,22,"SWING IN DTU CONTRIBUTION, ₹ LAKH",{color:C.primaryDeep,maxW:568});
tornado(rp,16,366,568,V.t7.map(r=>({label:r[0],lo:r[1],hi:r[2]})),V.t7base,{labelW:280,rowH:26,min:5,max:16});
fine(rp,16,528,568,"Bear is a stress case, never a budget option.");
results.push({slide:s.id,total:s.findAll(()=>true).length,top:s.children.length}); }
```
<!-- END FILE -->

<!-- FILE: deck/slides/s06.js -->
```js
{ const s = await figma.getNodeByIdAsync("S6");
skelBT(s,4,"5 / 8","COLLEGE SELECTION",380,V.f6,"Source: college_scorecard.csv, institute NIRF and placement reports first, Oct 2026 | model "+V.hash+", T8 and T9, 2,000 draws, seed 20261009 | F2 relaxed 5 to 4 under rule 4.6");
const gp=panel(s,64,316,1180,714,"TEN COLLEGES CLEAR THE SCREEN; FOUR EXISTING CAMPUSES CALIBRATE IT");
const rows=V.grid.concat(V.cal);
grid(gp,16,60,rows.map(r=>r[0]),["C1","C2","C3","C4","C5","C6","C7","Fit","Stab."],rows.map(r=>r[1].map(v=>hcell(v)).concat([{t:r[2],f:C.white},{t:r[3],f:C.white}])),{labelW:270,cellW:84,rowH:38,headH:44,name:"TABLE: scorecard"});
addRect(gp,16,60+44+V.grid.length*38-2,1026,4,C.primary);
TL(gp,1052,68,22,"STATUS",{color:C.primaryDeep,maxW:112});
rows.forEach((r,i)=>{ const pk=r[4].indexOf("PICK")===0, f=addFrame(gp,1052,60+44+i*38+3,112,32,pk?C.primary:(r[4]==="LIVE"?C.tint:(r[4]==="BENCH"?C.accentTint:C.surface)),C.ink,1.5,"CHIP");
  addText(f,"Poppins","Bold",22,pk?C.white:C.ink,r[4],2,0,108,32,"CENTER","CENTER"); });
fine(gp,16,642,1148,"C1 recruiters, C2 non-tech offers, C3 batch, C4 societies, C5 prep gap, C6 calendar, C7 access, each scored 1 to 5");
callout(gp,16,670,1148,36,"Fit = ","0.25 C1 + 0.15 C2 + 0.15 C3 + 0.15 C4 + 0.10 C5 + 0.10 C6 + 0.10 C7, maximum 5.00",{py:4});
const sp=panel(s,1260,316,596,380,"THE SCREEN");
stepFunnel(sp,16,60,564,[{t:V.screen[0]+" colleges scored"},{t:V.screen[1]+" pass F1: 600+ graduates"},{t:V.screen[2]+" pass F2: 4+ anchors",tc:C.ink},{t:V.screen[3]+" picks",tc:C.ink}],{tierH:50,minW:300,size:22});
T(sp,16,292,564,22,"IITs pass but lose on calendar: their next season is 11 months after 15 January, so C6 scores 1.",{family:"Inter",style:"Bold",color:C.primaryDeep});
const cc=layered(s,1260,712,596,311,C.primaryDeep,"CARD: conclusively");
TL(cc,20,12,26,"CONCLUSIVELY: FIT, NOT FAME",{color:C.accent,maxW:556});
bl(cc,20,58,556,[["BITS Pilani "+V.grid[0][2]+": ","its own 2024-25 report names Bain, Kearney, ZS, Deloitte USI, EY."],
 ["NIT Tiruchirappalli 2.65: ","no casebook, no rival prep, 1,029 graduates."],["PEC Chandigarh 2.40: ","ZS, JP Morgan Chase, Amex in PEC's own report."],
 ["COEP Pune 2.40: ","741 graduates (NIRF), five anchors, the West pick."]],{color:C.white,leadColor:C.accent,dot:C.accent,gap:6});
results.push({slide:s.id,total:s.findAll(()=>true).length,top:s.children.length}); }
```
<!-- END FILE -->

<!-- FILE: deck/slides/s07.js -->
```js
{ const s = await figma.getNodeByIdAsync("S7");
skelBT(s,5,"6 / 8","PAN-INDIA LAUNCH",360,V.f7,"Source: pick dossiers R-E | Cialdini 1984; Moore 1991; Rogers 1962; Granovetter 1973 | LinkedIn reactions W13, W14 | Business Today, 20 Jan 2025 | model "+V.hash+", T10");
const mp=panel(s,64,316,760,714,"WHERE: FOUR PICKS, FOUR CAMPUSES TODAY");
const MX=16,MY=60,MW=420,MH=436;
mapDots(mp,MX,MY,MW,MH,V.map,36,HG[2]);
[[28.68,77.08],[30.3564,76.3625],[23.4167,85.4403]].forEach(q=>{ const g=geo(MX,MY,MW,MH,q[0],q[1]); addRect(mp,g[0]-8,g[1]-8,16,16,C.primaryDeep,C.ink,1.5); });
const P=[[3,30.7667,76.7833,"PEC Chandigarh","Season 2","EIC, PEC"],[1,28.3639,75.587,"BITS Pilani","Season 1","180DC chapter"],
 [4,18.5306,73.8568,"COEP Pune","Season 2","Consulting Club"],[2,10.762,78.816,"NIT Tiruchirappalli","Season 1","BFC umbrella"]];
const FIT={1:V.grid[0][2]}; V.grid.filter(r=>r[4].indexOf("PICK")===0).forEach(r=>{ FIT[parseInt(r[4].slice(5),10)]=r[2]; });
P.forEach((p,i)=>{ const g=geo(MX,MY,MW,MH,p[1],p[2]), cy=60+i*112+50; addDiagonalWire(mp,g[0],g[1],452,cy,C.primary,2); });
P.forEach((p,i)=>{ const g=geo(MX,MY,MW,MH,p[1],p[2]), y=60+i*112; pin(mp,g[0],g[1],30,String(p[0]),C.primary,C.white); pin(mp,452,y+50,24,"",C.primary);
  const f=addFrame(mp,468,y,276,100,C.white,C.ink,2,"CITY "+p[0]);
  TL(f,12,6,22,p[3],{color:C.primaryDeep,maxW:252}); TL(f,12,40,22,p[0]+": Fit "+FIT[p[0]]+", "+p[4],{family:"Inter",style:"Bold",maxW:252}); TL(f,12,68,22,"Host: "+p[5],{family:"Inter",style:"Semi Bold",maxW:252}); });
addRect(mp,16,514,16,16,C.primaryDeep,C.ink,1.5); TL(mp,42,508,22,"Today: DTU, NSUT, Thapar, BIT Mesra",{family:"Inter",style:"Bold",maxW:700});
addEllipse(mp,16,544,16,16,C.primary,C.ink,1.5); TL(mp,42,538,22,"Picks 1 to 4, numbered by Fit; two in each season",{family:"Inter",style:"Bold",maxW:700});
fine(mp,16,572,728,"Dot map from district boundaries; full Jammu and Kashmir and Ladakh, north up.");
T(mp,16,604,728,22,"“You don't look at an ad and decide to invest in stocks... It's always a friend or family member who influences you.” Nithin Kamath, Zerodha, Business Today, 20 Jan 2025",{family:"Inter",style:"Semi Bold",color:C.primaryDeep});
const tp=panel(s,840,316,1016,714,"HOW: TRUST IN FOUR STEPS, CUSTOMERS BEFORE AMBASSADORS");
const BASE=384, PW=236, H=[230,260,290,320];
[["1 BORROW","A case competition co-branded with the campus consulting society","Social proof, Cialdini"],["2 SEED","A founding cohort of "+V.cohort20+" at 40% off the fee","Beachhead, Moore"],
 ["3 EARN","Their offers become named, consented local proof","Observability, Rogers"],["4 HAND OVER","Ambassadors only from the cohort, paid per enrolment","Weak ties, Granovetter"]]
.forEach((st,i)=>{ const x=16+i*(PW+12), h=H[i], dk=i===3, f=addFrame(tp,x,BASE-h,PW,h,dk?C.primaryDeep:C.white,C.ink,2,"STEP "+(i+1));
  const hd=addFrame(f,0,0,PW,44,dk?C.accent:C.primary,C.ink,2,"HEAD"); TL(hd,12,6,22,st[0],{color:dk?C.ink:C.white,maxW:PW-24});
  const b=T(f,12,54,PW-24,22,st[1],{color:dk?C.white:C.ink}); T(f,12,54+b.height+8,PW-24,22,st[2],{family:"Inter",style:"Bold",color:dk?C.accent:C.primary}); });
const bb=addFrame(tp,16,BASE,980,40,C.primaryDeep,C.ink,2,"BASE");
["Days 1 to 30","Days 31 to 60","Days 61 to 90","Season 2"].forEach((l,i)=>addText(bb,"Inter","Bold",22,C.white,l,i*(PW+12),0,PW,40,"CENTER","CENTER"));
wrapTable(tp,16,436,[214,200,316,164,86],["Pick","Host","Anchor recruiters","Season","Seats"],[
 ["BITS Pilani","180DC BITS Pilani","Bain, Kearney, ZS, Deloitte USI, EY","1, Jan 2027",V.cohort20],
 ["NIT Tiruchirappalli","180DC and ProfNITT","JP Morgan Chase, PwC, Deloitte, Eternal","1, Jan 2027",V.cohort20],
 ["PEC Chandigarh","EIC, PEC","ZS, JP Morgan Chase, American Express","2, summer 2027",V.cohort20],
 ["COEP Pune","Consulting Club","EY, Flipkart, KPMG, Deloitte, PwC","2, summer 2027",V.cohort20]],{rowH:56,headerH:40,name:"picks"});
results.push({slide:s.id,total:s.findAll(()=>true).length,top:s.children.length}); }
```
<!-- END FILE -->

<!-- FILE: deck/slides/s08.js -->
```js
{ const s = await figma.getNodeByIdAsync("S8");
skelBT(s,6,"7 / 8","LAUNCH PLAYBOOK",360,V.f8,"Source: model "+V.hash+", tables T10, T13, T14 | research sections 17 to 20 | precedents: Coding Ninjas, Internshala Student Partner, RiseUpp (R-G) | A14 to A21 are assumptions");
const gp=panel(s,64,316,760,714,"THE FIRST 90 DAYS ON ONE NEW CAMPUS");
gantt(gp,16,64,228,82,46,["D1","D16","D31","D46","D61","D76"],[
 {label:"Society outreach",s:0,e:1,text:"borrow",color:C.primary},{label:"Case competition",s:1,e:2,text:"run it",color:C.primary},
 {label:"Applications",s:2,e:3,text:"seed",color:C.primaryDeep},{label:"Fit interviews",s:3,e:4,text:"founder",color:C.primaryDeep},
 {label:"Mentoring, mocks",s:3,e:5,text:"earn",color:C.good},{label:"Ambassador kit",s:4,e:5,text:"prepare",color:C.accent,tc:C.ink}]);
[[408,"Day 30"],[572,"Day 60"],[736,"Day 90"]].forEach((g,i)=>{ dashedV(gp,g[0],100,288,C.alert,2.5); diamond(gp,g[0],402,12,C.alert);
  TL(gp,0,418,22,g[1],{family:"Inter",style:"Bold",color:C.alert,centerAt:i<2?g[0]:undefined,rightAt:i===2?744:undefined}); });
addTable(gp,16,452,[150,250,160,168],["Gate","Metric","Stop below","Scale above"],V.t14,{rowH:44,headerH:44});
callout(gp,16,640,728,64,"Below a gate: ","stop new spend on that campus; the enrolled cohort still finishes.");
const fp=panel(s,840,316,500,714,"THE FLYWHEEL: CUSTOMERS FIRST");
arrow(fp,350,112,399,232); arrow(fp,399,336,350,464); arrow(fp,150,468,101,336); arrow(fp,101,232,150,116);
[[150,64,200,"Competition","150 sign-ups, A06"],[314,236,170,"Cohort",V.cohort20+" seats, 40% off"],[150,420,200,"Offers","40% selected, A19"],[16,236,170,"Ambassadors",V.amb+" per campus"]]
.forEach(c=>{ const f=addFrame(fp,c[0],c[1],c[2],96,C.white,C.ink,2,"NODE "+c[3]); T(f,10,4,c[2]-20,22,c[3],{family:"Poppins",style:"Bold",color:C.primaryDeep}); T(f,10,40,c[2]-20,22,c[4]); });
addEllipse(fp,200,234,100,100,C.primaryDeep,C.ink,2.5);
addText(fp,"Poppins","ExtraBold",34,C.white,V.enrol2,200,240,100,54,"CENTER","CENTER"); addText(fp,"Inter","Bold",22,C.accent,"season 2",200,294,100,30,"CENTER","CENTER");
TL(fp,380,160,22,"apply",{family:"Inter",style:"Bold",color:C.primary}); TL(fp,380,388,22,"place",{family:"Inter",style:"Bold",color:C.primary});
TL(fp,0,388,22,"recruit",{family:"Inter",style:"Bold",color:C.primary,rightAt:118}); TL(fp,0,160,22,"refer",{family:"Inter",style:"Bold",color:C.primary,rightAt:118});
addTable(fp,16,532,[168,100,100,100],["Lever","Bear","Base","Bull"],V.ladder,{rowH:40,headerH:40});
const pp=panel(s,1356,316,500,714,"ONE CAMPUS, TWO SEASONS");
wrapTable(pp,16,60,[132,112,112,112],["Measure","Bear","Base","Bull"],V.t10t,{rowH:54,headerH:40,name:"pnl"});
TL(pp,16,484,22,"CUMULATIVE CASH, ₹ LAKH",{color:C.primaryDeep,maxW:468});
lineChart(pp,16,516,468,196,[{values:V.cash_line[0],color:C.alert,label:"Bear"},{values:V.cash_line[1],color:C.primary,label:"Base"}],["Start","Season 1","Season 2"],{yMin:-1,yMax:9,yTicks:[0,4,8],padL:60,padR:80});
results.push({slide:s.id,total:s.findAll(()=>true).length,top:s.children.length}); }
```
<!-- END FILE -->

<!-- FILE: deck/slides/s09.js -->
```js
{ const s = await figma.getNodeByIdAsync("S9");
skelBT(s,7,"8 / 8","ROADMAP AND RISKS",380,V.f9,"Source: research sections 21 to 23 | model "+V.hash+", T12, T13, T14 | claims: CCPA coaching guidelines 2024 and ASCI education code, secondary sources (R-H)");
const rp=panel(s,64,316,760,714,"TWELVE MONTHS, TWO WAVES, ONE ROAD");
nm(addRect(rp,24,60,44,640,C.primaryDeep,C.ink,2),"ROADSEG"); dashedV(rp,46,72,616,C.accent,3);
[["OCT TO DEC 2026: DTU FIRST","Gate the library, publish a fee band, start workshops and the mock drive."],
 ["JAN 2027: SEASON 1 OPENS","BITS Pilani and NIT Tiruchirappalli open with cohorts of "+V.cohort20+"; DTU batch on 15 January."],
 ["FEB TO APR 2027: SEASON 1 GATES","Day 30, 60 and 90 checks on applications, fill and offers decide scale, hold or stop."],
 ["MAY TO JUN 2027: SEASON 2 OPENS","PEC Chandigarh and COEP Pune, run on the playbook Season 1 has tested."],
 ["JUL TO SEP 2027: HAND OVER, REVIEW","Season 1 ambassadors start; year one closes near "+V.total_enrol+" enrolments, base case."]]
.forEach((st,i)=>{ const y=64+i*128; pin(rp,46,y+58,34,String(i+1),C.primary,C.white);
  const f=addFrame(rp,88,y,656,116,i===1||i===3?C.accentTint:C.white,C.ink,2,"STOP "+(i+1)); TL(f,16,8,22,st[0],{color:C.primary,maxW:624}); T(f,16,44,624,22,st[1]); });
const mp=panel(s,840,316,500,714,"ONE NORTH STAR, FIVE MEASURES");
const ns=addFrame(mp,16,60,468,84,C.primaryDeep,C.ink,2,"NORTH STAR");
TL(ns,14,6,22,"NORTH STAR: DTU ENROLMENTS",{color:C.accent,maxW:440}); TL(ns,14,44,22,V.now+" now, "+V.enrol+" by month 12 (base)",{family:"Inter",style:"Bold",color:C.white,maxW:440});
wrapTable(mp,16,156,[168,100,100,100],["By month","M3","M6","M12"],V.t13.map(r=>[r[0],r[2],r[3],r[4]]),{rowH:54,headerH:40,name:"kpi"});
[["CAN SAY","Named results, with consent after the offer",C.goodTint],["CANNOT SAY","Guaranteed selection or 100% placement",C.alertTint]]
.forEach((b,i)=>{ const f=addFrame(mp,16+i*240,478,228,120,b[2],C.ink,2,"CLAIM "+b[0]); TL(f,10,4,22,b[0],{color:C.primaryDeep}); T(f,10,36,208,22,b[1]); });
T(mp,16,612,468,22,"Tracked with a UTM link per channel, a referral code per ambassador and one shared lead sheet.",{family:"Inter",style:"Bold",color:C.primaryDeep});
const kp=panel(s,1356,316,500,530,"TWELVE RISKS, ONE MITIGATION EACH");
const e={t:"",f:C.white}, A=C.accentTint, G=C.goodTint;
grid(kp,16,60,["High","Medium","Low"],["Low","Med.","High"],[[e,{t:"1 2 4",f:A},e],[{t:"3 7 9 12",f:G},{t:"6 8 11",f:A},e],[{t:"5 10",f:G},e,e]],{labelW:120,cellW:116,rowH:44,headH:44,corner:"Impact",name:"TABLE: risk grid"});
fine(kp,16,242,468,"Rows: impact. Columns: probability. Amber: 1, 2, 4, 6, 8, 11. Green: the rest.");
bl(kp,16,290,468,[["1 Society dependency: ","sign co-host terms before any cash; name a second society."],["2 Founder overload: ","no Season 1 until DTU hours track toward "+(V.hours[0]+V.hours[1])+"."],
 ["4 Bear-case CAC: ","the gates stop spend; the "+V.t6[0][2]+" stress spend is never funded."]],{gap:8});
const c=layered(s,1356,852,500,170,C.primaryDeep,"CARD: therefore");
TL(c,18,10,24,"THEREFORE: THE FIRST STEP",{color:C.accent,maxW:464});
T(c,18,50,464,22,"By 31 October 2026: gate the 8 PDFs, publish the fee band, and sign DCG and 180DC DTU for the December and February workshops.",{color:C.white});
results.push({slide:s.id,total:s.findAll(()=>true).length,top:s.children.length}); }
```
<!-- END FILE -->

<!-- FILE: deck/slides/s10.js -->
```js
{ const s = await figma.getNodeByIdAsync("S10");
skelBT(s,0,"A1","APPENDIX",260,V.fA,"Source: college_scorecard.csv | model "+V.hash+", tables T8, T12, T16 | sources.md, 518 sources | research sections 13, 14, 24, 27",{labels:RIBAP,counterW:120});
const pa=panel(s,64,316,900,714,"THE 18 COLLEGES THAT FAIL THE SCREEN");
[0,1].forEach(k=>wrapTable(pa,16+k*434,60,[204,80,150],["College","Fit","Fails on"],V.rest.slice(k*9,k*9+9),{rowH:54,headerH:40,name:"fails "+k}));
const cal=V.cal.map(r=>r[0]+" "+r[2]).join(", ");
T(pa,16,598,868,22,"Calibration: "+cal+"; all at or above the "+V.median+" longlist median.",{family:"Inter",style:"Bold"});
T(pa,16,656,868,22,"Twelve months, DTU plus four campuses: "+V.t12.map(r=>r[0].toLowerCase()+" "+r[1]+" enrolments, "+r[3]).join("; ")+".",{family:"Inter",style:"Semi Bold"});
const pb=panel(s,980,316,876,570,"ASSUMPTIONS THAT MOVE THE ANSWER");
addTable(pb,16,60,[76,330,140,150,148],["ID","Assumption","Bear","Base","Bull"],V.asm,{rowH:38,headerH:40});
const pc=panel(s,980,902,876,128,"METHOD AND SOURCES");
nm(addText(pc,"Inter","Semi Bold",14,C.ink,"Desk research only: no surveys or interviews; a Customer Validation Plan with target counts by segment is in research section 27. 518 sources registered, 203 cited. Scorecard data: institute NIRF submissions and placement reports first, aggregators labelled as such. Model: Python, seed 20261009, "+V.n_asm+" assumptions, seven identity checks passing. Fee, enrolments today and every conversion rate are assumptions with bear, base and bull values.",16,56,844,60,"LEFT",undefined,true),"BIBLIO");
results.push({slide:s.id,total:s.findAll(()=>true).length,top:s.children.length}); }
```
<!-- END FILE -->

<!-- FILE: deck/slides/s11.js -->
```js
{ const s = await figma.getNodeByIdAsync("S11"); wipe(s); coverTop(s);
nm(TL(s,0,170,112,"THANK YOU",{family:"Poppins",style:"ExtraBold",centerAt:960}),"TITLE");
const v=layered(s,260,370,1400,150,C.primaryDeep,"CARD: verdict");
addText(v,"Poppins","Bold",26,C.accent,"Distribute proof, not awareness: "+V.budget_lk+" at DTU for "+V.enrol+" enrolments, and four new campuses entered through their own societies.",28,0,1344,150,"CENTER","CENTER");
nm(TL(s,0,556,28,V.team.name,{color:C.primary,centerAt:960}),"TEAM LABEL");
teamBT(s,410,604,[300,500,300]);
logoSlot(s,875,790,170,60,"BeyondTech");
addText(s,"Inter","Bold",22,C.primaryDeep,"The research document and the model workbook back every number on these slides.",260,880,1400,30,"CENTER","CENTER");
addWireH(s,64,1856,1012,C.ink,2.5);
srcLine(s,"Source: BeyondTech x DCG case brief 2026 | Team IdeaForge research document and model "+V.hash);
results.push({slide:s.id,total:s.findAll(()=>true).length,top:s.children.length}); }
```
<!-- END FILE -->

<!-- FILE: deck/setup.js -->
```js
// Creates (or finds) exactly eleven slides, names them, checks fonts. Safe to rerun: it never makes a second set.
const grid = figma.currentPage.children.find(c => c.type === "SLIDE_GRID");
const all = () => grid.children.flatMap(r => r.children);
let guard = 0; while (all().length < 11 && guard++ < 14) figma.createSlide();
const names = ["01 Cover", "02 Executive Summary", "03 Diagnosis", "04 DTU Plan", "05 DTU Budget", "06 College Selection", "07 Pan-India Launch", "08 Launch Playbook", "09 Roadmap and Risks", "10 Appendix", "11 Thank You"];
const slides = all(); slides.slice(0, 11).forEach((s, i) => { s.name = names[i]; });
const fonts = await figma.listAvailableFontsAsync();
const need = [["Poppins", "Bold"], ["Poppins", "ExtraBold"], ["Inter", "Semi Bold"], ["Inter", "Bold"]];
return { count: slides.length, ids: slides.slice(0, 11).map(s => s.id), extra: slides.slice(11).map(s => ({ id: s.id, children: s.children.length })),
  fontsOk: need.map(n => fonts.some(f => f.fontName.family === n[0] && f.fontName.style === n[1])) };
```
<!-- END FILE -->

<!-- FILE: deck/_v1.js -->
```js
await Promise.all([{family:"Poppins",style:"Bold"},{family:"Poppins",style:"ExtraBold"},{family:"Inter",style:"Semi Bold"},{family:"Inter",style:"Bold"}].map(f=>figma.loadFontAsync(f)));
const ids=IDS; const issues=[]; const KEY=/^(PANEL|CARD|KPI|TABLE):/;
for(const id of ids){ const s=await figma.getNodeByIdAsync(id);
  const ch=s.children.filter(c=>KEY.test(c.name)).map(c=>({n:c.name,x:c.x,y:c.y,w:c.width,h:c.height}));
  for(let i=0;i<ch.length;i++)for(let j=i+1;j<ch.length;j++){ const a=ch[i],b=ch[j];
    const ox=Math.min(a.x+a.w,b.x+b.w)-Math.max(a.x,b.x), oy=Math.min(a.y+a.h,b.y+b.h)-Math.max(a.y,b.y);
    if(ox>=4&&oy>=4) issues.push({s:s.name,t:"overlap",a:a.n,b:b.n}); }
  for(const c of s.children){ if(c.x<-1||c.y<-1||c.x+c.width>1921||c.y+c.height>1081) issues.push({s:s.name,t:"bounds",n:c.name,x:Math.round(c.x),y:Math.round(c.y),w:Math.round(c.width),h:Math.round(c.height)});
    if(KEY.test(c.name) && c.y+c.height>1038) issues.push({s:s.name,t:"belowContent",n:c.name}); }
  const hl=s.children.find(c=>c.name==="HEADLINE"); if(hl&&hl.height>113) issues.push({s:s.name,t:"headline3lines"});
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
const BAN=["here's","let's","bottom line","delve","game-changer","unlock","it's not just","make no mistake","landscape","robust","seamless","holistic","tapestry","paradigm","navigate","revolutioni","cutting-edge","leverage","empower","transformative","journey","synergy","world-class","best-in-class","next-gen","reimagine","supercharge","harness","crucial","pivotal","furthermore","moreover","in today's","ever-evolving","imagine if","ecosystem","testament","elevate"];
const ABSENT=["Dream11","FanCode","Paytm","Liminal","Setu","PRAMAAN","Maudrik","SwasthyaGrid","NEXORA","HarvestBox","Perennial","Gousto","Verdict","TODO","TBD","Lorem","Insert","xyz","undefined","NaN","Rs ","Beyond Tech"];
let radiusFixed=0, money=0; const fontLow=[]; const copy=[]; const density=[]; let all="";
for(const id of ids){ const s=await figma.getNodeByIdAsync(id);
  const nodes=s.findAll(()=>true); density.push({slide:s.name,nodes:nodes.length});
  for(const nd of nodes){ if(nd.name==="CARD: MONEYSHOT") money++; if("cornerRadius" in nd && typeof nd.cornerRadius==="number" && nd.cornerRadius!==0){ nd.cornerRadius=0; radiusFixed++; } }
  for(const t of s.findAllWithCriteria({types:["TEXT"]})){ const c=t.characters; all+=" "+c;
    if(typeof t.fontSize==="number" && t.fontSize<22){ let ok=t.name==="SOURCE"||t.name==="FINEPRINT"||t.name==="BIBLIO"||c.startsWith("Source:"); let p=t.parent;
      while(p && !ok){ if(p.name && (p.name.startsWith("LOGO:")||p.name.startsWith("IMG:"))) ok=true; p=p.parent; }
      if(!ok) fontLow.push({slide:s.name,size:t.fontSize,chars:c.slice(0,40)}); }
    if(/[—–]/.test(c)) copy.push({slide:s.name,issue:"dash",chars:c.slice(0,60)});
    if(c.includes("?")||c.includes("!")) copy.push({slide:s.name,issue:"question or exclamation",chars:c.slice(0,60)});
    if(/\bHarsh\b(?! (Kawatra|Agarwal))/.test(c)) copy.push({slide:s.name,issue:"bare Harsh",chars:c.slice(0,60)});
    const low=c.toLowerCase(); for(const b of BAN) if(low.includes(b)) copy.push({slide:s.name,issue:"banned: "+b,chars:c.slice(0,60)}); } }
return {radiusFixed, moneyshot:money, fontLow, copy, missing:MUST.filter(m=>!all.includes(m)), presentBad:ABSENT.filter(a=>all.includes(a)), density, slides:ids.length};
```
<!-- END FILE -->

<!-- FILE: deck/swap_map.js -->
```js
// Step D8 only, and only if the generated India map passed the acceptance test. Replace SLIDE_ID with the id of slide S7.
const s=await figma.getNodeByIdAsync("SLIDE_ID"); const panel=s.children.find(c=>c.name==="PANEL: WHERE: FOUR PICKS, FOUR CAMPUSES TODAY");
const dots=panel.children.filter(c=>c.name==="MAPDOT"); dots.forEach(d=>d.remove());
const f=figma.createFrame(); panel.appendChild(f); f.resize(420,436); f.fills=[]; f.cornerRadius=0; f.x=16; f.y=60; f.name="IMG: india-base";
panel.insertChild(0,f);
return {removed:dots.length, slot:f.id};
```
<!-- END FILE -->

<!-- FILE: extract_deck.py -->
```python
import re, io, pathlib
BT = pathlib.Path(__file__).resolve().parent
t = io.open(BT / "DECK-PLAN.md", encoding="utf-8").read().replace("\r", "")
n = 0
for m in re.finditer(r"<!-- FILE: ([^\n]+?) -->\n```[a-z]*\n(.*?)\n```\n<!-- END FILE -->", t, re.S):
    if m.group(1).strip() == "extract_deck.py": continue
    p = BT / m.group(1).strip(); p.parent.mkdir(parents=True, exist_ok=True)
    io.open(p, "w", encoding="utf-8", newline="\n").write(m.group(2) + "\n"); n += 1; print("wrote", p.relative_to(BT).as_posix(), len(m.group(2)))
for d in ("deck/build", "deck/shots", "deck/derived"): (BT / d).mkdir(parents=True, exist_ok=True)
print("files", n)
```
<!-- END FILE -->
