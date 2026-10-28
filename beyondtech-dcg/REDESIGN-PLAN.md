> Slide 2 is superseded by SLIDE2-PLAN.md (11 Oct 2026); slides 3 and 5 stand.

# BeyondTech x DCG: redesign plan for slides 2, 3 and 5

Working folder `BT/` = `C:\Users\harsh\Desktop\HARSH\PPTS-CASE-STUDY\nsut-innovators-court\beyondtech-dcg\`. `ROOT/` = its parent.
`PY` = `"C:\Users\harsh\AppData\Local\Programs\Python\Python312\python.exe" -X utf8`. Run every command from `BT/`.
Figma file `cpcsN7ytWMJputcohXOMgz` ("BeyondTech GTM | Team IdeaForge | BeyondTech x DCG 2026"). Slide nodes rebuilt here:
**S2 `2:4`**, **S3 `2:5`**, **S5 `2:7`**. The other eight slides are not touched.

Written 10 Oct 2026 by the lead (Opus). Executed by one Sonnet session, top to bottom, with no subagents. Every file this
plan needs is embedded at the end and has already been run: all three new slides pass the offline Figma mock with 0
issues and 0 warnings, measured with the real Poppins and Inter glyph widths, and the eight untouched slides compose to
build files byte-identical to the ones live in Figma today (section 9). The executor pastes and verifies; it does not
design, and it never writes slide code by hand.

## 0. Context: why this redesign exists

The 11-slide deck was built and published from the Stage 2 plan (`BT/DECK-PLAN.md`). The user reviewed it and rejected
slides 2, 3 and 5: "too boxy", "text put into boxes", "not consulting grade". The DTU funnel on slide 3 was explicitly
approved and stays. The ask: rebuild those three from scratch as content-heavy consulting exhibits (mind maps, tables,
charts, graphs, lines, bars, heat maps), planned with the `case-competition-deck` skill, so a Sonnet executor can build
them by copy-paste.

What was wrong, concretely (see `BT/deck/_backup_v1/s02.png`, `s03.png`, `s05.png` once R2 has run):
- Slide 2 was nine bordered boxes: a four-box SCQA strip, two pillar cards, five KPI tiles. Every number sat alone in a
  tile with no comparison, so nothing on the slide argued anything.
- Slide 3 was three bordered panels of equal weight; the issue tree was a list with badges, the LinkedIn bars and two
  empty screenshot slots took a third of the slide, and nothing showed *who* the engine misses.
- Slide 5 put the moneyshot in a sentence band, then three equal panels: tiny CAC bars (the cheapest channels were
  invisible slivers on a ₹33,333 scale), two donuts, a table, a cramped tornado.

What replaces it, in one line each:
- **Slide 2, executive summary:** skill archetype H (should NOT / should, three reasons each) with a live exhibit in the
  middle that proves why neither organic nor paid alone reaches 165, then a band of three charts: an enrolment bridge
  110 to 245, the spend split with the bear/base/bull table, and the four picks against the longlist median.
- **Slide 3, diagnosis:** the approved funnel with conversion annotations, a year-of-study by quarter intent heat map
  showing where referral reaches, a branch-package bar chart, and a five-stage purchase path with one leak per stage,
  closing on a seed card that foreshadows the campus launch without naming it.
- **Slide 5, the moneyshot:** a variable-width cost curve (bar width = enrolments a channel adds, height = its CAC,
  funding line at 165, the two unfunded channels broken off the scale) beside its funding-order table, then the
  moneyshot card (21% of cash → 39% of enrolments at 60 pt), the three-scenario table and the sensitivity tornado.

The visual grammar that removes the boxiness, used on all three: content sits on invisible `ZONE:` frames (no fill, no
stroke); each band is marked by a rotated EY rail (section 1 of `ROOT/CLAUDE.md`); zones are separated by dashed ink
dividers, not borders; every zone opens with a one-sentence finding in navy Poppins 24 (`lead`/`TL`), then a chart or
table, then at most one line of commentary. The only filled cards left are the ones that carry rhetorical weight:
`CARD: MONEYSHOT` (slide 5) and `CARD: seed` (slide 3).

## 1. Locked decisions and constraints (do not change)

| Topic | Rule |
|---|---|
| Scope | Rebuild nodes `2:4`, `2:5`, `2:7` only. Slides 1, 4, 6 to 11 are never rebuilt, re-bound or edited |
| Headlines | Unchanged: `V.f2`, `V.f3`, `V.f5` from `make_values.py`. The titles-only read of the deck is therefore unchanged |
| Approved element | The 4-tier DTU funnel on slide 3 (`stepFunnel`, tiers 7,823 / 1,956 / 110 (5.6%) / 50+ selections) |
| Moneyshot | Exactly one node named `CARD: MONEYSHOT` in the deck, on slide 5. Its sentence is the locked moneyshot: "₹3.5 lakh at DTU buys 165 enrolments at a blended ₹2,131 each" plus "21% → 39%" as the largest text on the slide (60 pt) |
| Design system | Palette `_palette.js` (orange `#E8590C`, navy `#0B1F4D`, gold `#FFC72C`); `cornerRadius` 0; ink strokes on every bar, cell and card; Poppins Bold/ExtraBold and Inter Semi Bold/Bold; 22 pt floor (source line 14 pt, `FINEPRINT` 16 pt exempt); ribbon, section chip, counter chip, headline and source line from `skelBT` exactly as before |
| Copy | No em or en dashes, no `?` or `!`, no banned words (list in `_sweeps.js`), no coined names or labels, never a bare "Harsh", no hooks |
| Numbers | Every number comes from `model_outputs.json` through `make_values.py` or `values_ext.py`, or is a constant already ruled in `DECK-PLAN.md` section 3 (50+ selections, 8 PDFs, 15 January, branch packages from research 8.2). A number is never typed into a slide to make it fit |
| Evidence honesty | The heat map is labelled as estimated (research 6.2 says so); branch packages are labelled aggregator-reported; enrolled-today is labelled an estimate (A04, A29); the fee is labelled an assumption (A01) |
| Commits | None unless the user asks; if asked, never a Co-Authored-By trailer |

## 2. The argument, engineered with the skill (already done; the executor verifies it in K2)

Case type: **marketing / go-to-market** (`references/case_types/marketing.md`), with a strategy flavour for campus
selection. Audience: DCG judges reading a leave-behind deck (organiser playbook P03, P04: answer first, titles tell the
story).

**Contrarian recommendation (rhetoric section 1).** The brief's framing ("no repeatable paid marketing, no ambassador
flywheel") invites the obvious answer: buy reach, run an awareness campaign, add paid channels. The deck argues the
opposite: BeyondTech has a proof-distribution problem, not an awareness problem. The three reasons each side, in the
skill's required order (quantitative, strategic fit, feasibility), are exactly the six rows of slide 2's band 1:

| | Quantitative | Strategic fit | Feasibility / implementation |
|---|---|---|---|
| NOT: buy reach first | Cold Meta costs ₹12,963 per enrolment and LinkedIn ₹33,333, above the assumed ₹12,000 fee | 80% already arrive by referral and the brief calls recall strong, so awareness is not the gap | All four paid channels together reach only 131 of 165 enrolments, at ₹5,877 each |
| THIS: distribute proof first | The gated library costs ₹126 per enrolment; organic is 21% of cash and 39% of enrolments | 50+ selections are proof that travels where the same recruiters hire: 4 of 28 colleges fit | ₹45,000 opens a campus, cash positive in season 1; founder hours fall from 220 to 196 |

**Foreshadowing (rhetoric section 2; structure.md "the seed slide").** Slide 3 is the context section's seed slide. It
ends on `CARD: seed`, "THE GAP THIS LEAVES": proof of 50+ selections travels only as far as the seniors who earned it,
and no channel carries it to earlier years, other branches or other campuses. It does not name the picks; slide 6
(selection) and slide 7 (launch) pay it off.

**Moneyshot (archetype P, rhetoric section 12, marketing moneyshot "channel reallocation impact").** Slide 5. The
number is the largest text on the slide, gold on navy, and its decomposition (P-supplement) is drawn right above it:
the cost curve shows 7 organic channels deliver 63.8 enrolments for ₹74,246, and Meta retargeting takes 76% of the cash
to close the last 42% of the target. The sentence below the number repeats the locked moneyshot and adds the
comparison to the obvious path (all four paid channels: ₹5,877 each, stopping at 131).

**Three scenarios (rhetoric section 5)** on slides 2 (12-month bear/base/bull) and 5 (one DTU season), with the bear
case called a stress test on both. **Sensitivity (archetype N)**: slide 5 tornado. **Pre-empting weakness (rhetoric
section 6)**: fee labelled an assumption, heat map labelled estimated, packages labelled aggregator-reported.
**Quantification (rhetoric section 11)**: every zone's lead line carries a number.

Frameworks visible on the three slides (frameworks.md): MECE issue decomposition and customer journey (slide 3 band 2),
STP-style behavioural segmentation by year of study (slide 3 heat map), funnel / AARRR acquisition (slide 3 funnel),
marginal CAC ordering and unit economics (slide 5 cost curve), scenario planning and sensitivity (slide 5 band 2),
Pyramid Principle answer-first (slide 2).

## 3. Mandatory skill protocol for the executor (`case-competition-deck`)

The skill is mandatory. It is used three times, at fixed points, each with a written output. The skill does not
redesign anything here: the slides were engineered with it at planning time (section 2), and the executor's job is to
load it, check the built slides against it, and score them. If a check fails, the fix goes through section 7, never
through improvised slide code.

### K1. Load the skill (step R1)
1. Call the Skill tool with `skill: "case-competition-deck"`. Read the loaded `SKILL.md` text in full.
2. Read these reference files with the Read tool (paths under `ROOT/.claude/skills/case-competition-deck/references/`):
   `archetypes.md` sections H (Executive Summary), I (two-chart workhorse), M (three-scenario), N (sensitivity),
   P and P-supplement (moneyshot, decomposition) and "Reusable patterns across all archetypes";
   `rhetoric.md` sections 1, 2, 5, 6, 10, 11, 12; `structure.md` sections "I. Executive Summary", "II. Context" (the
   seed slide) and "THE MONEYSHOT"; `case_types/marketing.md` in full; `critique_rubric.md` in full.
3. Pass test: you can state, without looking, the three reason types of archetype H, what a seed slide does, and the
   five visual rules of the moneyshot (rhetoric section 12). Write those three answers as the first lines of the
   build-log block in R11.

### K2. Slide-mode check, before Figma (step R5) and again on the Figma screenshots (step R8)
For each slide, open its preview image (`deck/shots/preview_0N.png`, later the Figma screenshot `deck/shots/s0N.png`)
and fill this card in `BT/build-log.md`, one line per field, PASS or FAIL with what you saw:

| Field | Slide 2 must show | Slide 3 must show | Slide 5 must show |
|---|---|---|---|
| Archetype | H: NOT column (red chip) and THIS column (green chip), three numbered reasons each, quant / fit / feasibility order | Context seed slide: funnel, behaviour heat map, segment bars, MECE leak path, seed card | P: moneyshot card with the number as the largest text, decomposition chart above it, M and N beside it |
| Action title | `V.f2`, full sentence with ₹5.3 lakh, 110, 165 | `V.f3` with 5.6% | `V.f5` with ₹3.5 lakh, 21%, 39%, 165 |
| Exhibits | three-path stacked bars with dashed "missing" segments; waterfall 110, +55, +80, 245; spend bar + 3x3 scenario table; 4 pick bars with dashed median line | funnel with 3 conversion call-outs; 4x4 intent heat map with reach markers and legend; 8 branch bars; 5 stage boxes with arrows, red leak stems, numbered badges, chips, body lines; navy seed card | 11-bar cost curve with numbered pins, blended-CAC dashed line, funding-stop dashed line, two broken unfunded bars; 12-row funding table; navy moneyshot card; scenario table; 6-row tornado with axis values |
| In-chart annotation | "target met" / "N short of 165" next to each path bar; "median 2.15" on the pick chart | "25% of them", "5.6% of pool", "45% selected" on the funnel | "Blended ₹2,131", "Funding stops at 165", "Off the scale and unfunded", the Meta retargeting call-out inside its bar |
| So-what line | "Organic alone runs out of reach at 64. Paid alone costs 2.8 times more per head and still stops at 131." | "THE GAP THIS LEAVES" card | "Bear stacks three weak conversion rates at once…" and the moneyshot sentence |
| Skill pattern | contrarian, answer first, three scenarios | foreshadowing, MECE, honesty labels | moneyshot, decomposition, three scenarios, sensitivity |
| Source line | 14 pt orange, bottom right, one line | same | same |
| Type levels | 60 pt is not on this slide; 34 pt reason numerals, 24 pt leads, 22 pt body, 16 pt fine print, 14 pt source | 26 pt funnel, 24 pt leads, 22 pt body, 16 pt fine print, 14 pt source | 60 pt moneyshot, 24 pt leads, 22 pt body, 14 pt source |
| Dead space | no empty region larger than about 150 x 150 px | same | same |

### K3. Critique mode, after Figma (step R10)
1. With the skill loaded, follow `SKILL.md` "Critique mode workflow": read `critique_rubric.md`, `case_types/marketing.md`
   and `BT/case/03-organiser-playbook-digest.md` (the DCG rubric, P01 to P12).
2. View all 11 Figma screenshots in `deck/shots/` (three new, eight from the original build) in order.
3. Score the deck on the seven rubric dimensions (1 to 5) and the nine DCG dimensions (0 to 5), leading with what works.
   Then give the top three issues, each with slide, location and a fix that keeps every number.
4. Write the result as a new section "Redesign of slides 2, 3 and 5 (date)" appended to `BT/deck/critique.md`. Do not
   delete the earlier critique.
5. Pass test: Dimension 4 (action titles) 5; Dimension 5 (visual discipline) 4 or more; no dimension under 4. If a
   dimension scores under 4 because of slides 2, 3 or 5, fix under section 7 (one round), rebuild that slide, rescore.
   If it is under 4 because of a slide outside scope, log it as a residual for the user; do not touch that slide.

## 4. The three slides, zone by zone

Coordinates are slide pixels (1920 x 1080). Content runs y 316 to 1030, x 64 to 1856. Each band: a 40 px rail at x 64,
then zones from x 116. Names are the Figma layer names the scripts create.

### 4.1 Slide 2, executive summary (`slides/s02.js`)

| Band / zone | Box | Contents |
|---|---|---|
| `RAIL: THE CHOICE` | 64, 316, 40 x 348 | navy rail, label rotated |
| `ZONE: choice` | 116, 316, 1740 x 348 | task line (Inter Bold 22, navy): the brief's task restated |
| NOT column | zone x 0 to 520 | red chip "NOT THIS: BUY REACH FIRST"; rows: **₹12,963** (cold Meta CAC; LinkedIn ₹33,333; fee ₹12,000), **80%** (referral, recall strong), **131** (paid reach cap at ₹5,877 each). Numerals Poppins ExtraBold 34 red |
| Centre exhibit | zone x 552 to 1188 | lead "Neither layer alone reaches 165"; three stacked bars on one scale (240 px = 165): Organic only 63.8 (orange) + dashed red ghost to 165; Paid only 131.1 (navy) + ghost; Cheapest first 63.8 + 101.2 = 165; dashed red target line; right labels: ₹1,163 / ₹5,877 / ₹2,131 each and "101 short of 165" / "34 short of 165" / "target met"; so-what sentence; fine print "Paid only: four paid channels at full modelled reach, ₹7,70,280 (T3)" |
| THIS column | zone x 1220 to 1740 | green chip "THIS: DISTRIBUTE PROOF FIRST"; rows: **₹126**, **50+**, **₹45,000**. Numerals green |
| dividers | dashed verticals at x 652 and 1320; dashed horizontal at y 673 | |
| `RAIL: THE PLAN IN NUMBERS` | 64, 684, 40 x 346 | orange rail |
| `ZONE: enrolment bridge` | 116, 684, 560 x 346 | lead "From 110 to 245 enrolments in twelve months"; `waterfall`: DTU today 110, DTU plan +55, 4 cohorts of 20 +80, Month 12 = 245 |
| `ZONE: spend and scenarios` | 708, 684, 620 x 346 | lead "₹5.3 lakh in total, two thirds of it at DTU"; `segBar` DTU ₹3.5 lakh / 4 × ₹45,000; `TABLE: twelve months` (12 months / Bear / Base / Bull x Enrolments, Spend, Contribution; bear red, base navy, bull green); line "Each campus costs ₹45,000 to open and nets ₹99,000 in season 1, base case."; fine print "Bear is a stress case, not a budget (T6, T12)." |
| `ZONE: picks` | 1360, 684, 496 x 346 | lead "4 of 28 colleges clear the screen"; `hBars` of the four picks' Fit (3.00, 2.65, 2.40, 2.40; navy = Jan 2027, orange = summer 2027); dashed red median line at 2.15 with label; legend; "First step by 31 October 2026: gate the 8 PDFs and publish a fee band." |

### 4.2 Slide 3, diagnosis (`slides/s03.js`)

| Band / zone | Box | Contents |
|---|---|---|
| `RAIL: WHO IS REACHED` | 64, 316, 40 x 380 | navy rail |
| `ZONE: funnel` | 116, 316, 600 x 380 | lead "About 5.6% of the non-tech pool enrols today"; the **approved funnel** (4 tiers, 400 wide, 50 high); three call-out leaders at the tier joints: "25% of them" (1,956 of 7,823), "5.6% of pool", "45% selected" (A29); fine print with the bear-to-bull ranges and the A04/A29 estimate note; orange line "The brief calls DTU recall strong (B11)." |
| `ZONE: intent heat map` | 748, 316, 618 x 380 | lead "Referral reaches fourth years in season and misses the earlier years"; `TABLE: intent`, rows Second year / Third year / Fourth year / Off-campus, columns Oct-Dec / Jan-Mar / Apr-Jun / Jul-Sep, cells Low / Med. / High on the orange heat scale (values transcribed from research 6.2); navy dots = reached by referral today (Fourth year Oct-Dec and Jul-Sep), hollow dot = reached in part (Third year Jul-Sep), from research 6.3; legend; fine print "Every cell is an estimate… Second-year share of enrolments today: 0% (T13)." |
| `ZONE: branch gap` | 1398, 316, 458 x 380 | lead "Every circuital branch out-earns every other branch"; `hBars` of average package, ₹ LPA, 2025: Computer 19.85, Software 18.46, IT 16.62, ECE 15.82 (orange), Electrical 12.89, Biotech 11.00, Mechanical 9.58, Civil 9.20 (navy); fine print source |
| `RAIL: WHERE IT LEAKS` | 64, 716, 40 x 314 | orange rail |
| `ZONE: path` | 116, 716, 1400 x 314 | lead "Between hearing and paying, the path leaks at five points"; five stage boxes (Hears of it, Free resources, WhatsApp chat, Fit interview, Pays and enrols; the last one orange) joined by arrows; under each: a red leak stem, the leak title, a numbered red badge, an evidence chip (80% by referral, 8 of 8 links open, 220 hours a year, no fee shown, 0% second years) and one body sentence. These are the five leaks of research 9.1 in funnel order (MECE) |
| `CARD: seed` | 1548, 716, 301 x 307 (layered, navy) | "THE GAP THIS LEAVES" and the foreshadowing sentence |

### 4.3 Slide 5, DTU budget and moneyshot (`slides/s05.js`)

| Band / zone | Box | Contents |
|---|---|---|
| `RAIL: WHERE THE CASH GOES` | 64, 316, 40 x 400 | navy rail |
| `ZONE: cost curve` | 116, 316, 1040 x 400 | lead "Cheapest first: nine channels reach 165 enrolments, two get ₹0"; axis label and legend; the cost curve: 11 bars left to right in CAC order, width = 5 px per enrolment the channel adds (funded enrolments; for the two unfunded, the enrolments they could add), height = CAC on a ₹0 to ₹5,000 scale, orange organic, navy paid funded, pale red unfunded with a white "scale break" band; numbered pins 1 to 11 (pin 9 sits inside the Meta retargeting bar); red dashed blended-CAC line at ₹2,131; red dashed funding-stop line at 165; annotations "Organic: 7 channels at ₹1,163 each / 63.8 enrolments for ₹74,246", the Meta retargeting call-out (68.8 enrolments for ₹2,67,405: 76% of the cash closes the last 42% of the target), "Off the scale and unfunded: 10 at ₹12,963, 11 at ₹33,333"; x ticks 0, 50, 100 and "Funding stops at 165"; reading note "Bar width: enrolments the channel adds. Bar height: its CAC." |
| `TABLE: funding order` | 1196, 316, 656 x 396 | # / Channel / Enrol. / Cash / CAC, 11 rows plus "Total, base case 165.0 ₹3,51,650 ₹2,131"; organic rows white/grey, paid funded gold tint, unfunded red tint, total row orange tint. The numbers in the table are the pins on the chart |
| `RAIL: WHAT IT BUYS` | 64, 736, 40 x 294 | orange rail |
| `CARD: MONEYSHOT` | 116, 736, 520 x 280 (layered, navy) | **21% → 39%** in gold Poppins ExtraBold 60 with a white arrow; captions "of the cash, spent on organic" / "of the 165 enrolments"; gold dashed rule; "₹3.5 lakh at DTU buys 165 enrolments at a blended ₹2,131 each. All four paid channels alone would cost ₹5,877 each and stop at 131." |
| `ZONE: scenarios` | 668, 736, 676 x 294 | lead "Bear is a stress test, never a budget"; `TABLE: scenarios` (DTU season / Bear / Base / Bull x Enrolments, Spend, Blended CAC, Contribution); line on why bear explodes |
| `ZONE: sensitivity` | 1376, 736, 480 x 294 | lead "The fee moves contribution most"; unit line; `tornado` of six assumptions (T7) with axis values 5.1, base 9.4, 15.8 |

## 5. New values (`deck/values_ext.py`) and where each number comes from

`values_ext.py` only adds keys; `gen.py pre` asserts that no existing key changes, which is why the other eight slides
compose byte-identical build files.

| Key | Value at hash `3a53e3745f` | Derivation |
|---|---|---|
| `curve` | 11 rows, cheapest first | T3 sorted by CAC, funded figures from T4. Asserts 9 funded then 2 unfunded, first = Gated library, ninth = Meta retargeting, funded enrolments sum to 165 |
| `cac_raw` | 2131.21 | T6 base blended CAC (the y of the dashed line) |
| `rt_cash`, `rt_tail` | 76%, 42% | Meta retargeting funded cash / ₹3,51,650; its 68.8 enrolments / 165 |
| `cold` | ₹12,963, ₹33,333 | CAC of the two unfunded paid channels (T3) |
| `paths` | Organic only 63.8 for ₹74,246 (₹1,163 each); Paid only 131.1 for ₹7,70,280 (₹5,877 each); Cheapest first 165.0 for ₹3,51,650 (₹2,131 each) | Sums over T3 rows by layer; organic sum asserted equal to T4's organic cash and enrolments |
| `org_cap`, `paid_cap`, `paid_each`, `paid_cash`, `paid_x` | 64, 131, ₹5,877, ₹7,70,280, 2.8 | From `paths`; 2.8 = ₹5,877 / ₹2,131 |
| `fee` | ₹12,000 | T6 base fee (A01, an assumption) |
| `open_pct`, `sel_pct` | 25%, 45% | T1 SAM / TAM; T2 implied selection rate (A29) |
| `bridge` | 110, 55, 80, 245 | T2 enrolled today; 165 − 110; T12 campus enrolments; T12 total. Asserts the parts sum |
| `spend_parts`, `ncamp` | 3,51,650 and 1,80,000; 4 | T4 total cash; T12 total spend minus it (asserted 64 to 68% DTU); count of picks |

Constants typed into the new slide files, all already ruled in `DECK-PLAN.md` section 3 or the research: 50+
selections (B05); 8 PDFs and 8 of 8 open (W08, research 9.3); 15 January (W05); 31 October 2026 first step (DECK-PLAN
section 3); branch packages (research 8.2, RB17, aggregator); heat-map Low/Med./High cells and reach markers (research
6.2 and 6.3, both estimated); "4 cohorts of 20" uses `V.cohort20`.

## 6. Files

| File | Status | Role |
|---|---|---|
| `deck/metrics.json` | new | Real advance widths (em) of Poppins Bold/ExtraBold and Inter Semi Bold/Bold, measured from the font files. Checked against every width the first build saw in Figma ("Reach" 72 vs wraps at 70, "₹33,333" 89 vs overflow at 84 and fit at 90, "Ambassadors" 160 vs overflow at 150) |
| `deck/gen.py` | v2, replaces v1 | Same commands. Adds: `bind` and `mock` take a slide list; `values_ext.py` hook; `_x2.js` appended for slides 2, 3, 5; mock uses `metrics.json` × 1.02 for those slides and emulates rotated text |
| `deck/values_ext.py` | new | Section 5 |
| `deck/_x2.js` | new | `zone`, `rail`, `lead`, `ghost`, `RAILROT` |
| `deck/slides/s02.js`, `s03.js`, `s05.js` | replaced | The three slides |
| `deck/preview.py` | new | Renders `deck/shots/preview_0N.png` from the mock: the reference picture of what Figma must show |
| `deck/names.js` | new | Re-applies the 11 slide names |
| `extract_redesign.py` | new | Writes only the nine files above into `BT/` from `BT/REDESIGN-PLAN.md`, after backing up everything it replaces (and the current build files, values, mock and screenshots of slides 2, 3, 5) into `deck/_backup_v1/` |

Not touched: `DECK-PLAN.md` content (one warning line is added at its top in R11), `extract_deck.py` (never run again),
`make_values.py`, `_extras.js`, `_palette.js`, `_v1.js`, `_sweeps.js`, `setup.js`, every other slide file.

## 7. Execution sequence

| Step | Action | Done when |
|---|---|---|
| R0 | Read this whole plan once. Read `ROOT/CLAUDE.md` section 7 (Figma failure modes) | |
| R1 | Skill touchpoint K1 (section 3) | K1 pass test written down |
| R2 | Copy this plan to `BT/REDESIGN-PLAN.md`: `cp "C:/Users/harsh/.claude/plans/working-folder-beyondtech-dcg-dapper-axolotl.md" REDESIGN-PLAN.md`. Create `BT/extract_redesign.py` with the Write tool, content = the `extract_redesign.py` block at the end of this plan, character for character. Run `PY extract_redesign.py` | Prints "backed up …" lines, nine "wrote …" lines and `files 9` |
| R3 | `PY deck/gen.py pre`, then `PY deck/gen.py mock` | `wrote preamble.js 28773`, `values.js` about 10,990; then 11 lines `OK`, exit 0. Slides 2, 3, 5 sizes about 38,675, 36,113 and 38,082 characters (section 9) |
| R4 | `PY deck/preview.py 2 3 5`, then Read each `deck/shots/preview_0N.png` | Three PNGs that match section 4. Boxed glyphs in a font fallback are a renderer limit, not a fault |
| R5 | Skill touchpoint K2 on the three previews | Three cards in `build-log.md`, all PASS |
| R6 | `PY deck/gen.py bind 2 3 5` | Writes `build/slide_02.js`, `slide_03.js`, `slide_05.js`, their `v1_NN.js`, plus `v1_all.js`, `sweeps.js`, `slots.js`. Nothing else in `build/` changes |
| R7 | Figma build of slides 2, 3, 5 (section 8) | Each: `warnings: []`, V1 `clean: true`, screenshot saved |
| R8 | Skill touchpoint K2 again, now on `deck/shots/s02.png`, `s03.png`, `s05.png` against the previews | All PASS, or fixed under section 10 |
| R9 | `use_figma` with `deck/names.js`; then `build/sweeps.js`; then `build/v1_all.js` | Names "02 Executive Summary", "03 Diagnosis", "05 DTU Budget" back. Sweeps: `moneyshot` 1, `fontLow` [], `copy` [], `missing` [], `presentBad` [], `slides` 11. V1 all `clean: true` |
| R10 | Skill touchpoint K3 (critique) | New section in `deck/critique.md`; pass test met |
| R11 | Logs (section 12) | `build-log.md`, `figma.md`, `DECK-PLAN.md` top line, memory updated |
| R12 | Report to the user (section 12) | |

## 8. Figma build procedure (step R7)

Tools: `ToolSearch` with query
`select:mcp__figma-mcp__use_figma,mcp__figma-mcp__get_screenshot,mcp__figma-mcp__whoami`. Before the first `use_figma`
call load the Figma guidance: Skill `figma-use` if it is listed, otherwise `ReadMcpResourceTool` with server
`figma-mcp`, uri `skill://figma/figma-use/SKILL.md`. Pass `skillNames: "resource:figma-use"` on every `use_figma` call.
File key `cpcsN7ytWMJputcohXOMgz`. `get_metadata` does not work on Slides files.

Order: slide 5 first (it carries the moneyshot and the most geometry, so problems show early), then 2, then 3.

For each slide N with node id (5 → `2:7`, 2 → `2:4`, 3 → `2:5`):
1. Read-only check: `use_figma` with `const s=await figma.getNodeByIdAsync("<id>"); return {name:s.name,children:s.children.length};`
2. Get the build file text. The files are 36k to 39k characters with some long lines, so print them with Bash in two
   halves and join them exactly: `sed -n '1,260p' deck/build/slide_0N.js` and `sed -n '261,$p' deck/build/slide_0N.js`
   (check `wc -l` first: about 404 to 414 lines; the longest line is about 2,100 characters, which is why the Read tool is not used here). The last line must be `return {results,warnings};`. Pass the full text, unchanged, as `code`.
   The script wipes the slide first, so a rerun is always safe.
3. Expect a result with `results: [{slide:"<id>", total:…, top:…}]` and `warnings: []`. Node totals should be close to
   section 9 (S2 331, S3 345, S5 436). Any warning: section 10.
4. `use_figma` with the full text of `deck/build/v1_0N.js`. Expect `clean: true`.
5. `get_screenshot` of node `<id>` with `maxDimension: 1920`. Download the returned URL with curl to
   `deck/shots/s0N.png`, Read it and compare it with `deck/shots/preview_0N.png` region by region: rails and rotated
   labels, every zone's lead line, every chart, every annotation. Note any difference in `build-log.md`.
6. Fix only under section 10, at most three attempts per slide, then log the residual.

Things to look at hardest in the screenshot, because the mock cannot see them:
- Rail labels: white text, rotated, reading bottom to top, centred in the 40 px bar (fix F5 if not).
- Slide 5 cost curve: pins sit above their bars; pin 9 sits inside the navy bar; the two unfunded bars show a white
  break band; both red dashed lines are visible; no label touches a bar.
- Slide 2 centre exhibit: dashed red ghost segments are visible (dash pattern), the target line lines up with the end of
  the "Cheapest first" bar.
- Slide 3 heat map: the dots sit at the right edge of their cells and do not cover the cell word.

## 9. Offline results at planning time (10 Oct 2026)

Run twice: in memory from this plan's embedded files, and end to end on disk in a scratch copy of `BT/` and `ROOT/verdict-mnc/deck/` following R2 to R6 exactly (extractor `files 9`, `pre`, 11 OK, previews, `bind 2 3 5`, `slide_04.js` byte-identical afterwards):

| Slide | Nodes | Script size | Mock result |
|---|---|---|---|
| s01 | 138 | 32.9k | OK, build file byte-identical to the live one |
| **s02 executive summary** | 331 | 38.7k | **OK, 0 issues, 0 warnings, real glyph widths** |
| **s03 diagnosis** | 345 | 36.1k | **OK, 0 issues, 0 warnings, real glyph widths** |
| s04 | 256 | 33.2k | OK, byte-identical |
| **s05 DTU budget** | 436 | 38.1k | **OK, 0 issues, 0 warnings, real glyph widths** |
| s06 to s11 | 417 / 601 / 302 / 209 / 240 / 43 | 32.5k to 34.4k | OK, all byte-identical |

Copy check on the string literals of the three new slides: no dashes, no `?` or `!`, no banned word. The previews were
rendered and reviewed at planning time; R4 regenerates the same pictures on disk.

## 10. Fix rules (the only edits allowed)

| Code | Issue | Fix |
|---|---|---|
| F1 | `textOut`, `cellWrap`, `wrapTable overflow`, `overflow:` warning, or a label wrapping in the screenshot | Shorten the copy: add `{"exact old text": "new text"}` to `deck/overrides.json` (create it if missing; the key must match text in `slides/s0N.js` exactly). Drop an article, use a shorter synonym, drop the least important clause. Never below 22 pt, never drop a number, never coin a label. Then `PY deck/gen.py mock N`, `PY deck/preview.py N`, `PY deck/gen.py bind N`, rebuild slide N |
| F2 | `overlap`, `bounds`, `belowContent` from V1 | Should not happen (mock-clean). If it does, move the later node by the overlap plus 8 px with an override on its coordinates, staying inside y 316 to 1030; else log it |
| F3 | A label touches a bar or line in the screenshot | Nudge that label by at most 24 px through an override |
| F4 | A node 240 px off its place | A fragment was run or a line set x/y before append. Rerun the full build file |
| F5 | Rail label not rotated, mirrored, or off the bar | Override `const RAILROT=true;` to `const RAILROT=false;` (it lives in `_x2.js`, so edit `deck/_x2.js` directly, then `bind N` and rebuild). The fallback rotates with `rotation=90` and recentres on the bar using measured boxes |
| F6 | A zone clips its content (text cut at a zone edge) | The zone's `clipsContent` was not set: in Figma run `const s=await figma.getNodeByIdAsync("<id>"); s.findAll(n=>n.name.startsWith("ZONE: ")).forEach(z=>z.clipsContent=false); return "ok";` |
| F7 | Dashed outlines show solid | Cosmetic; log it. Do not replace the shape |
| F8 | `Cannot use unloaded font` | A fragment was run; run the whole build file |
| F9 | Any number looks wrong, or `values_ext.py` asserts | Stop. Numbers change only through the model; report to the user with the assertion text |
| F10 | Sweeps `moneyshot` is not 1 | Search all slides for nodes named `CARD: MONEYSHOT`; slide 5 must hold the only one. Report any other |

Known false positives: ribbon punch-holes over tags; `BACK:` rectangles under layered cards; the white scale-break
band over the unfunded bars on slide 5; the white backing rectangle behind the organic annotation on slide 5.

## 11. Verification (the redesign is done when all hold)

1. `gen.py mock` prints 11 OK lines; the eight untouched build files in `deck/build/` have the same modified time as
   before R6 (only `slide_02/03/05`, their `v1_0N`, `v1_all`, `sweeps`, `slots` changed).
2. In Figma: slides 2, 3, 5 built with `warnings: []`, V1 clean; `v1_all.js` clean; sweeps clean with `moneyshot` 1;
   slide names restored.
3. Screenshots `s02.png`, `s03.png`, `s05.png` match their previews (section 8 step 5) and pass K2.
4. Critique K3 pass test met, written to `deck/critique.md`.
5. No bordered text box remains on the three slides except chips, table cells, the five stage boxes on slide 3 and the
   two rhetorical cards (`CARD: MONEYSHOT`, `CARD: seed`).

## 12. Logs, report, memory, recovery

**Logs (R11).** Append to `BT/build-log.md` a block "Redesign of slides 2, 3 and 5": the K1 answers, the K2 cards
(previews and screenshots), node counts, V1 and sweep results, every fix with before and after text, residuals. In
`BT/deck/figma.md` replace the S2, S3 and S5 lines under "Slide screenshots" with two-line descriptions of the new
slides. Insert as the first line of `BT/DECK-PLAN.md`: `> Slides 2, 3 and 5 and deck/gen.py are superseded by
REDESIGN-PLAN.md (10 Oct 2026). Never rerun extract_deck.py: it would restore the rejected designs.` Update memory file
`project_beyondtech_dcg.md` with one line: slides 2, 3 and 5 were redesigned on 10 Oct 2026 per `REDESIGN-PLAN.md`
(rails, invisible zones, charts instead of text boxes), and `extract_deck.py` must not be rerun.

**Report to the user (R12).** The Figma URL https://www.figma.com/slides/cpcsN7ytWMJputcohXOMgz; one line per
redesigned slide saying what it now shows; the critique scores; any residual; a reminder that logo and screenshot slots
elsewhere in the deck are still placeholders (unchanged by this work).

**Recovery.**

| Symptom | Action |
|---|---|
| `values_ext.py` assertion | The model was re-run or changed. Stop and report (F9) |
| `gen.py mock` FAIL after an override | Shorten the override further; rerun |
| `use_figma` timeout | Run the read-only check; rerun the same build file |
| A rebuilt slide looks worse than expected and cannot be fixed in three attempts | Restore it: `use_figma` with the backup `deck/_backup_v1/slide_0N.js` (the old build, ids already bound), then report |
| Slide count above 11 | Delete only extra slides with 0 children, by id |

---

# Embedded files

<!-- FILE: deck/metrics.json -->
```json
{"Poppins|Bold":{" ":0.212,"!":0.392,"\"":0.411,"#":0.904,"$":0.658,"%":0.87,"&":0.798,"'":0.221,"(":0.477,")":0.477,"*":0.534,"+":0.628,",":0.287,"-":0.58,".":0.282,"/":0.453,"0":0.652,"1":0.376,"2":0.571,"3":0.605,"4":0.677,"5":0.65,"6":0.637,"7":0.535,"8":0.648,"9":0.615,":":0.284,";":0.347,"<":0.551,"=":0.696,">":0.541,"?":0.538,"@":1.08,"A":0.737,"B":0.659,"C":0.762,"D":0.727,"E":0.541,"F":0.547,"G":0.762,"H":0.731,"I":0.295,"J":0.578,"K":0.697,"L":0.477,"M":0.918,"N":0.752,"O":0.786,"P":0.624,"Q":0.788,"R":0.652,"S":0.615,"T":0.591,"U":0.705,"V":0.73,"W":1.052,"X":0.715,"Y":0.671,"Z":0.596,"[":0.51,"\\":0.802,"]":0.51,"^":0.709,"_":0.78,"`":0.291,"a":0.679,"b":0.679,"c":0.605,"d":0.679,"e":0.616,"f":0.36,"g":0.679,"h":0.674,"i":0.295,"j":0.294,"k":0.618,"l":0.295,"m":1.059,"n":0.674,"o":0.637,"p":0.679,"q":0.679,"r":0.428,"s":0.558,"t":0.406,"u":0.674,"v":0.626,"w":0.866,"x":0.588,"y":0.632,"z":0.496,"{":0.499,"|":0.291,"}":0.499,"~":0.636,"₹":0.598,"−":0.543,"÷":0.611,"×":0.637,"“":0.541,"”":0.541,"‘":0.314,"’":0.314,"·":0.299,"•":0.501,"…":0.76},"Poppins|ExtraBold":{" ":0.191,"!":0.423,"\"":0.451,"#":0.919,"$":0.661,"%":0.904,"&":0.814,"'":0.243,"(":0.47,")":0.47,"*":0.548,"+":0.589,",":0.314,"-":0.578,".":0.301,"/":0.426,"0":0.657,"1":0.387,"2":0.569,"3":0.61,"4":0.691,"5":0.655,"6":0.635,"7":0.523,"8":0.653,"9":0.606,":":0.302,";":0.366,"<":0.524,"=":0.661,">":0.519,"?":0.538,"@":1.104,"A":0.755,"B":0.671,"C":0.758,"D":0.735,"E":0.548,"F":0.561,"G":0.757,"H":0.743,"I":0.308,"J":0.584,"K":0.726,"L":0.491,"M":0.935,"N":0.765,"O":0.787,"P":0.636,"Q":0.788,"R":0.661,"S":0.62,"T":0.604,"U":0.712,"V":0.747,"W":1.076,"X":0.739,"Y":0.701,"Z":0.613,"[":0.522,"\\":0.84,"]":0.521,"^":0.733,"_":0.772,"`":0.307,"a":0.68,"b":0.68,"c":0.607,"d":0.68,"e":0.616,"f":0.373,"g":0.68,"h":0.686,"i":0.308,"j":0.307,"k":0.647,"l":0.308,"m":1.067,"n":0.686,"o":0.636,"p":0.68,"q":0.68,"r":0.447,"s":0.568,"t":0.421,"u":0.686,"v":0.649,"w":0.885,"x":0.628,"y":0.655,"z":0.507,"{":0.492,"|":0.277,"}":0.492,"~":0.674,"₹":0.588,"−":0.525,"÷":0.581,"×":0.609,"“":0.595,"”":0.595,"‘":0.346,"’":0.346,"·":0.324,"•":0.519,"…":0.815},"Inter|Semi Bold":{" ":0.252,"!":0.321,"\"":0.523,"#":0.644,"$":0.65,"%":1.004,"&":0.663,"'":0.326,"(":0.373,")":0.373,"*":0.54,"+":0.673,",":0.319,"-":0.465,".":0.319,"/":0.379,"0":0.66,"1":0.423,"2":0.623,"3":0.636,"4":0.666,"5":0.612,"6":0.64,"7":0.576,"8":0.64,"9":0.64,":":0.319,";":0.329,"<":0.673,"=":0.673,">":0.673,"?":0.543,"@":0.999,"A":0.728,"B":0.659,"C":0.737,"D":0.722,"E":0.605,"F":0.588,"G":0.749,"H":0.746,"I":0.277,"J":0.58,"K":0.703,"L":0.565,"M":0.922,"N":0.759,"O":0.769,"P":0.645,"Q":0.773,"R":0.652,"S":0.65,"T":0.66,"U":0.736,"V":0.728,"W":1.02,"X":0.72,"Y":0.713,"Z":0.652,"[":0.373,"\\":0.379,"]":0.373,"^":0.481,"_":0.469,"`":0.351,"a":0.574,"b":0.624,"c":0.583,"d":0.624,"e":0.591,"f":0.389,"g":0.625,"h":0.612,"i":0.262,"j":0.262,"k":0.569,"l":0.262,"m":0.9,"n":0.612,"o":0.609,"p":0.624,"q":0.624,"r":0.397,"s":0.549,"t":0.353,"u":0.612,"v":0.587,"w":0.839,"x":0.569,"y":0.588,"z":0.566,"{":0.455,"|":0.359,"}":0.455,"~":0.673,"−":0.673,"÷":0.673,"×":0.673,"“":0.507,"”":0.501,"‘":0.294,"’":0.294,"·":0.319,"•":0.503,"…":0.956,"₹":0.562},"Inter|Bold":{" ":0.237,"!":0.338,"\"":0.551,"#":0.649,"$":0.655,"%":1.016,"&":0.672,"'":0.339,"(":0.377,")":0.377,"*":0.559,"+":0.679,",":0.334,"-":0.468,".":0.334,"/":0.388,"0":0.674,"1":0.431,"2":0.629,"3":0.646,"4":0.676,"5":0.622,"6":0.649,"7":0.582,"8":0.651,"9":0.649,":":0.334,";":0.343,"<":0.679,"=":0.679,">":0.679,"?":0.56,"@":1.016,"A":0.747,"B":0.662,"C":0.74,"D":0.722,"E":0.607,"F":0.587,"G":0.75,"H":0.747,"I":0.281,"J":0.584,"K":0.719,"L":0.565,"M":0.932,"N":0.762,"O":0.771,"P":0.648,"Q":0.777,"R":0.657,"S":0.655,"T":0.667,"U":0.732,"V":0.747,"W":1.038,"X":0.738,"Y":0.731,"Z":0.664,"[":0.377,"\\":0.388,"]":0.377,"^":0.487,"_":0.476,"`":0.365,"a":0.581,"b":0.63,"c":0.588,"d":0.63,"e":0.596,"f":0.398,"g":0.632,"h":0.623,"i":0.271,"j":0.271,"k":0.58,"l":0.271,"m":0.913,"n":0.623,"o":0.613,"p":0.63,"q":0.63,"r":0.407,"s":0.56,"t":0.366,"u":0.623,"v":0.6,"w":0.85,"x":0.58,"y":0.602,"z":0.573,"{":0.469,"|":0.372,"}":0.469,"~":0.679,"−":0.679,"÷":0.679,"×":0.679,"“":0.54,"”":0.532,"‘":0.311,"’":0.311,"·":0.334,"•":0.474,"…":1.002,"₹":0.571}}
```
<!-- END FILE -->

<!-- FILE: deck/gen.py -->
```python
# ===== BEYONDTECH DECK GEN v2 =====
"""Deck generator, version 2. Every v1 command still works; v2 adds the redesign pipeline for slides 2, 3 and 5.
PY is "C:\\Users\\harsh\\AppData\\Local\\Programs\\Python\\Python312\\python.exe" -X utf8. Run from anywhere:
  PY beyondtech-dcg/deck/gen.py pre          build preamble.js, mock_figma.js and values.js
  PY beyondtech-dcg/deck/gen.py mock 2 3 5   dry-run the listed slides on the offline mock; exit 1 on any issue (no list = all 11)
  PY beyondtech-dcg/deck/gen.py bind 2 3 5   write build/slide_NN.js and build/v1_NN.js for the listed slides (no list = all 11),
                                             and always rewrite build/v1_all.js, build/sweeps.js and build/slots.js
Slides listed in X2 get deck/_x2.js appended after the preamble, and the mock measures their text with the real glyph
advance widths in deck/metrics.json (times 1.02) instead of the v1 class averages."""
import io, json, re, subprocess, sys, pathlib
DECK = pathlib.Path(__file__).resolve().parent; BT = DECK.parent; ROOT = BT.parent; N = "\n"; NS = 11
LIB = ROOT / "verdict-mnc" / "deck" / "preamble.js"; MOCKSRC = ROOT / "verdict-mnc" / "deck" / "mock_figma.js"
X2 = (2, 3, 5)  # the redesigned slides
ROT = ('Object.defineProperty(Node.prototype, "relativeTransform", { set(m) { this._rt = m; '
       'if (this.type === "TEXT" && Math.abs(m[0][0]) < 1e-6) { const w = this.width, h = this.height; this.x = m[0][2]; this.y = m[1][2] - w; this.width = h; this.height = w; } }, '
       'get() { return this._rt; } });')
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
    adv = rd("metrics.json").strip(); assert set(json.loads(adv)) == {"Poppins|Bold", "Poppins|ExtraBold", "Inter|Semi Bold", "Inter|Bold"}
    c3 = m.count("function cw(ch, fam) {"); c4 = m.count("let warnings_global = [];")
    m = m.replace("function cw(ch, fam) {", "const ADV = " + adv + ";\nfunction cw(ch, fam) { const a = EXACT_FLAG ? ADV[fam] : null; if (a && a[ch] !== undefined) return a[ch] * 1.02;")
    m = m.replace("let warnings_global = [];", ROT + "\nlet warnings_global = [];")
    assert c1 == 1 and c2 == 1 and c3 == 1 and c4 == 1 and "for (let i = 1; i <= 11; i++)" in m, (c1, c2, c3, c4); wr("mock_figma.js", m)
    g = {"__name__": "make_values"}; exec(compile(rd("make_values.py"), "make_values.py", "exec"), g)
    O = json.loads(rdx(BT / "model" / "model_outputs.json")); V = g["build"](O)
    if has("values_ext.py"):
        e = {"__name__": "values_ext"}; exec(compile(rd("values_ext.py"), "values_ext.py", "exec"), e); old = json.dumps(V, ensure_ascii=False, sort_keys=True); keys = set(V)
        e["extend"](V, O, g); assert json.dumps({k: V[k] for k in keys}, ensure_ascii=False, sort_keys=True) == old, "values_ext.py changed an existing key"
    wr("values.js", "const V = " + json.dumps(V, ensure_ascii=False) + ";")
def derive(only=None):
    """Apply deck/overrides.json ({"exact old string": "new string"}) to the slide files and write deck/derived/sNN.js."""
    ov = json.loads(rd("overrides.json")) if has("overrides.json") else {}; used = set()
    for n in range(1, NS + 1):
        s = rd("slides/s%02d.js" % n)
        for a, b in ov.items():
            if a in s: s = s.replace(a, b); used.add(a)
        wr("derived/s%02d.js" % n, s, True)
    miss = [a for a in ov if a not in used]; print("overrides", len(ov), "unused", miss); assert not miss, "an override key matches no slide text"
def compose(n, sid):
    p = rd("preamble.js") + ((N + rd("_x2.js")) if n in X2 else ""); s = rd("derived/s%02d.js" % n); old = 'getNodeByIdAsync("S%d")' % n; assert s.count(old) == 1, n
    V = vals(); keys = set(re.findall(r"\bV\.([A-Za-z_][A-Za-z0-9_]*)", p + s)); miss = keys - set(V); assert not miss, ("unknown V keys", n, miss)
    sub = "const V = " + json.dumps({k: V[k] for k in V if k in keys}, ensure_ascii=False) + ";"
    return p + N + sub + N + "const results=[];" + N + s.replace(old, 'getNodeByIdAsync("%s")' % sid) + N + "return {results,warnings};" + N
def mock(only=None):
    derive(only); ok = True; m = rd("mock_figma.js")
    for n in range(1, NS + 1):
        if only and n not in only: continue
        code = compose(n, "S%d" % n)
        r = subprocess.run(["node", "-"], input=m.replace("EXACT_FLAG", "true" if n in X2 else "false").replace("CODE_JSON", json.dumps(code)), capture_output=True, text=True, encoding="utf-8")
        out = r.stdout + r.stderr; good = "warnings: []" in out and "ISSUES 0" in out and len(code) < 49900; ok = ok and good
        print("s%02d" % n, "OK" if good else "FAIL", len(code), "|", " | ".join(l.strip() for l in out.splitlines() if l.strip())[:(200 if good else 6000)].encode("ascii", "replace").decode())
    return ok
def bind(only=None):
    derive(); ids = json.loads(rd("slide-ids.json")); V = vals(); v1 = rd("_v1.js"); sw = rd("_sweeps.js")
    assert v1.count("const ids=IDS;") == 1 and sw.count("const ids=IDS;") == 1 and sw.count("MUSTLIST") == 1 and len(ids) == NS
    for n in range(1, NS + 1):
        if only and n not in only: continue
        code = compose(n, ids["S%d" % n]); assert len(code) < 50000, (n, len(code)); wr("build/slide_%02d.js" % n, code)
        wr("build/v1_%02d.js" % n, v1.replace("const ids=IDS;", "const ids=%s;" % json.dumps([ids["S%d" % n]])))
    allids = json.dumps([ids["S%d" % n] for n in range(1, NS + 1)])
    wr("build/v1_all.js", v1.replace("const ids=IDS;", "const ids=%s;" % allids))
    wr("build/sweeps.js", sw.replace("const ids=IDS;", "const ids=%s;" % allids).replace("MUSTLIST", json.dumps(V["must"], ensure_ascii=False)))
    wr("build/slots.js", "const ids=%s; const out=[]; for(const id of ids){ const s=await figma.getNodeByIdAsync(id); s.findAll(n=>n.name.startsWith('LOGO: ')||n.name.startsWith('IMG: ')).forEach(n=>out.push({slide:s.name,id:n.id,name:n.name,w:Math.round(n.width),h:Math.round(n.height)})); } return out;" % allids)
def main(a):
    only = set(int(x) for x in a[1:]) or None
    if a[0] == "pre": pre()
    elif a[0] == "mock": sys.exit(0 if mock(only) else 1)
    elif a[0] == "bind": bind(only)
if __name__ == "__main__": main(sys.argv[1:])
```
<!-- END FILE -->

<!-- FILE: deck/values_ext.py -->
```python
"""Extra V keys for the redesigned slides 2, 3 and 5. gen.py pre() calls extend(V, O, G) straight after make_values.build(O).
G is the make_values namespace, so the rupee and digit formatters are shared. Nothing here may change an existing key
(gen.py asserts it). Every number is arithmetic on model_outputs.json; nothing is typed in."""
def extend(V, O, G):
    rs, lk, n1, inr, CH = G["rs"], G["lk"], G["n1"], G["inr"], G["CH"]
    t3 = O["T3"]; t4 = O["T4"]; b6 = O["T6"]["base"]; t1 = O["T1"]["base"]; t2 = O["T2"]["base"]; b12 = O["T12"]["base"]
    fund = {r["ch"]: r for r in t4["rows"]}; te = t4["total_enrol"]; tc = t4["total_cash"]
    # Slide 5 cost curve: one row per channel, cheapest first.
    # [name, CAC number, CAC text, funded, organic, bar width in enrolments, funded enrolments text, funded cash text]
    curve = []
    for r in sorted(t3, key=lambda r: r["cac"]):
        f = fund[r["ch"]]; on = f["funded_cash"] > 0
        curve.append([CH[r["ch"]], round(r["cac"]), rs(r["cac"]), on, bool(r["organic"]), round(f["funded_enrol"] if on else r["enrol"], 2), n1(f["funded_enrol"]), rs(f["funded_cash"])])
    assert [c[3] for c in curve] == [True] * 9 + [False] * 2 and abs(sum(c[5] for c in curve if c[3]) - te) < 0.2, "funding order changed: re-read REDESIGN-PLAN.md section 5 before building slide 5"
    assert curve[8][0] == "Meta retargeting" and curve[0][0] == "Gated library", [c[0] for c in curve]
    rt = fund["C-PD-1"]
    # Three ways to spend at DTU (slide 2 exhibit, slide 5 card): every organic channel, every paid channel, the funded mix.
    org = [r for r in t3 if r["organic"]]; paid = [r for r in t3 if not r["organic"]]
    oe, oc = sum(r["enrol"] for r in org), sum(r["cash"] for r in org); pe, pc = sum(r["enrol"] for r in paid), sum(r["cash"] for r in paid)
    fo = sum(f["funded_enrol"] for f in t4["rows"] if f["organic"])
    assert abs(oc - t4["organic_cash"]) < 2 and abs(oe - fo) < 0.05 and pe < te and oe < te, (oc, oe, pe)
    share = tc / b12["total_spend"]; assert 0.64 < share < 0.68, share
    V.update(
        curve=curve, cac_raw=round(b6["blended_cac"], 2), rt_cash=f"{round(rt['funded_cash'] / tc * 100)}%", rt_tail=f"{round(rt['funded_enrol'] / te * 100)}%",
        cold=[curve[9][2], curve[10][2]],
        paths=[["Organic only", n1(oe), rs(oc), V["layer"][0][3] + " each", round(oe, 1), 0, f"{round(te - oe)} short of {inr(te)}"],
               ["Paid only", n1(pe), rs(pc), rs(pc / pe) + " each", 0, round(pe, 1), f"{round(te - pe)} short of {inr(te)}"],
               ["Cheapest first", n1(te), rs(tc), V["cac"] + " each", round(fo, 1), round(te - fo, 1), "target met"]],
        org_cap=str(round(oe)), paid_cap=str(round(pe)), paid_each=rs(pc / pe), paid_cash=rs(pc), paid_x=f"{(pc / pe) / b6['blended_cac']:.1f}",
        fee=rs(b6["fee"]), open_pct=f"{round(t1['sam'] / t1['tam'] * 100)}%", sel_pct=f"{round(t2['implied_selection_rate'] * 100)}%",
        bridge=[t2["enrolments_today"], round(te - t2["enrolments_today"]), b12["campus_enrolments"], round(b12["total_enrolments"])],
        spend_parts=[tc, b12["total_spend"] - tc], ncamp=str(len(O["final4"])))
    assert V["bridge"][0] + V["bridge"][1] + V["bridge"][2] == V["bridge"][3], V["bridge"]
    return V
```
<!-- END FILE -->

<!-- FILE: deck/_x2.js -->
```js
// ===== REDESIGN HELPERS: appended after the preamble for slides 2, 3 and 5 only =====
const RAILROT=true; // fix rule F5: set to false only if a rail label is not drawn bottom-to-top, centred inside its bar, in Figma
// A zone is an invisible frame: no fill, no stroke. It groups one exhibit so nothing but text and charts shows.
function zone(s,x,y,w,h,name){ const f=addFrame(s,x,y,w,h,null,null,0,"ZONE: "+name); try{ f.clipsContent=false; }catch(e){} return f; }
// EY rail: a 40 px filled bar on the left edge of a band with its label rotated 90 degrees, reading bottom to top.
function rail(s,x,y,h,label,color,fg){ const r=addRect(s,x,y,40,h,color||C.primaryDeep,C.ink,2); r.name="RAIL: "+label;
  const t=addText(s,"Poppins","Bold",22,fg||C.white,label,0,0); t.name="RAILTEXT";
  if(t.width>h-12) warnings.push("rail label too long: "+label);
  const tw=t.width, th=t.height;
  if(RAILROT){ t.relativeTransform=[[0,1,x+(40-th)/2],[-1,0,y+h/2+tw/2]]; return r; }
  // fallback: rotate with the rotation property, then centre the rotated box on the bar using measured boxes
  t.x=x; t.y=y; t.rotation=90; const b=t.absoluteBoundingBox, rb=r.absoluteBoundingBox;
  t.x+=(rb.x+20)-(b.x+b.width/2); t.y+=(rb.y+h/2)-(b.y+b.height/2); return r; }
// Lead line of a zone: the one-sentence finding of the exhibit under it. Wraps.
function lead(p,x,y,w,text,o){ o=o||{}; return T(p,x,y,w,o.size||24,text,{family:"Poppins",style:"Bold",color:o.color||C.primaryDeep}); }
// Dashed outline with no fill: the part of a bar that is missing.
function ghost(p,x,y,w,h,color){ const r=addRect(p,x,y,w,h,null,color||C.alert,2); try{ r.dashPattern=[6,4]; }catch(e){} return r; }
// ===== END REDESIGN HELPERS =====
```
<!-- END FILE -->

<!-- FILE: deck/slides/s02.js -->
```js
{ const s = await figma.getNodeByIdAsync("S2");
skelBT(s,0,"1 / 8","EXECUTIVE SUMMARY",380,V.f2,"Source: case brief B04 to B19 | beyondtech.org.in, Oct 2026 | college_scorecard.csv (32 colleges) | model "+V.hash+", tables T3, T4, T6, T8, T10, T11, T12 | the fee (A01) is an assumption");
// ---- BAND 1: THE CHOICE (skill archetype H: should NOT do the obvious, should do the alternative, three numbered reasons each) ----
rail(s,64,316,348,"THE CHOICE",C.primaryDeep);
const zt=zone(s,116,316,1740,348,"choice");
TL(zt,0,0,22,"The task: grow DTU on a stated organic and paid budget, then enter 3 to 4 Tier-1 campuses with no founder on the ground.",{family:"Inter",style:"Bold",color:C.primaryDeep,maxW:1740});
const col=(x,head,fill,num,rows)=>{ addChip(zt,x,40,520,44,head,fill,C.white,22);
  rows.forEach((r,i)=>{ const y=98+i*84; TL(zt,x,y+12,34,r[0],{family:"Poppins",style:"ExtraBold",color:num,maxW:160,min:26});
    T(zt,x+172,y,348,22,r[1]); if(i<2) addRect(zt,x,y+81,520,1.5,C.surface); }); };
col(0,"NOT THIS: BUY REACH FIRST",C.alert,C.alert,[
 [V.cold[0],"per enrolment on cold Meta ads; LinkedIn costs "+V.cold[1]+". The assumed fee is "+V.fee+"."],
 [V.ref,"already arrive by referral and the brief calls recall strong, so awareness is not the gap."],
 [V.paid_cap,"of "+V.enrol+" enrolments is all four paid channels can reach, at "+V.paid_each+" each."]]);
col(1220,"THIS: DISTRIBUTE PROOF FIRST",C.good,C.good,[
 [V.curve[0][2],"per enrolment from the gated library. Organic: "+V.org_pct0+" of cash, "+V.org_e_pct0+" of enrolments."],
 ["50+","selections are proof that travels where the same recruiters hire: "+V.screen[3]+" of "+V.screen[0]+" colleges fit."],
 [V.cost1,"opens a campus, cash positive in season 1. Founder hours fall from "+V.hours[0]+" to "+V.hours[3]+"."]]);
// centre exhibit: three ways to spend at DTU against the 165 target
const cx=552, B0=cx+170, BW=240, sc=BW/parseFloat(V.paths[2][1]);
TL(zt,cx,40,24,"Neither layer alone reaches "+V.enrol,{color:C.primaryDeep,maxW:636});
V.paths.forEach((p,i)=>{ const y=92+i*56; TL(zt,cx,y+12,22,p[0],{family:"Inter",style:"Bold",maxW:160});
  let bx=B0; [[p[4],C.primary],[p[5],C.primaryDeep]].forEach(sg=>{ if(sg[0]<=0) return; const w=sg[0]*sc; addRect(zt,bx,y+8,w,36,sg[1],C.ink,2);
    const t=TL(zt,0,y+9,22,sg[0].toFixed(1),{color:C.white}); t.x=bx+w/2-t.width/2; bx+=w; });
  if(bx<B0+BW-2) ghost(zt,bx,y+8,B0+BW-bx,36,C.alert);
  TL(zt,B0+BW+14,y,22,p[3],{family:"Inter",style:"Bold"}); TL(zt,B0+BW+14,y+26,22,p[6],{family:"Inter",style:"Semi Bold",color:i===2?C.good:C.alert}); });
dashedV(zt,B0+BW,86,174,C.alert,3);
T(zt,cx,268,636,22,"Organic alone runs out of reach at "+V.org_cap+". Paid alone costs "+V.paid_x+" times more per head and still stops at "+V.paid_cap+".",{family:"Inter",style:"Bold"});
fine(zt,cx,326,636,"Paid only: four paid channels at full modelled reach, "+V.paid_cash+" (T3).");
dashedV(s,652,360,300,C.ink,2); dashedV(s,1320,360,300,C.ink,2);
// ---- BAND 2: THE PLAN IN NUMBERS ----
dashedH(s,64,673,1792,C.ink,2);
rail(s,64,684,346,"THE PLAN IN NUMBERS",C.primary);
const z1=zone(s,116,684,560,346,"enrolment bridge");
TL(z1,0,0,24,"From "+V.now+" to "+V.total_enrol+" enrolments in twelve months",{color:C.primaryDeep,maxW:560});
waterfall(z1,0,36,560,310,[["a",V.bridge[0]],["b",V.bridge[1]],["c",V.bridge[2]],["d",V.bridge[3]]],{min:0,max:270,dp:0,labelH:66,labelDy:8,labels:["DTU today","DTU plan","4 cohorts of "+V.cohort20,"Month 12"]});
dashedV(s,692,692,330,C.ink,2);
const z2=zone(s,708,684,620,346,"spend and scenarios");
TL(z2,0,0,24,V.total_spend+" in total, two thirds of it at DTU",{color:C.primaryDeep,maxW:620});
segBar(z2,0,44,620,44,[{v:V.spend_parts[0],c:C.primaryDeep,t:"DTU "+V.budget_lk},{v:V.spend_parts[1],c:C.primary,t:V.ncamp+" × "+V.cost1}]);
wrapTable(z2,0,104,[164,152,152,152],["12 months","Bear","Base","Bull"],[["Enrolments"].concat(V.t12.map(r=>r[1])),["Spend"].concat(V.t12.map(r=>r[2])),["Contribution"].concat(V.t12.map(r=>r[3]))],{rowH:38,headerH:40,colors:[C.ink,C.alert,C.primaryDeep,C.good],name:"twelve months"});
T(z2,0,268,620,22,"Each campus costs "+V.cost1+" to open and nets "+V.t10[1][4]+" in season 1, base case.",{family:"Inter",style:"Bold",color:C.primaryDeep});
fine(z2,0,326,620,"Bear is a stress case, not a budget (T6, T12).");
dashedV(s,1344,692,330,C.ink,2);
const z3=zone(s,1360,684,496,346,"picks");
TL(z3,0,0,24,V.screen[3]+" of "+V.screen[0]+" colleges clear the screen",{color:C.primaryDeep,maxW:496});
const PK=V.grid.filter(r=>r[4].indexOf("PICK")===0);
hBars(z3,0,44,496,PK.map((r,i)=>({label:r[0],value:parseFloat(r[2]),text:r[2],color:i<2?C.primaryDeep:C.primary})),{labelW:236,rowH:40,barH:26,valueW:64,max:3.2});
const mx=248+184*parseFloat(V.median)/3.2; dashedV(z3,mx,40,168,C.alert,2.5);
TL(z3,0,206,22,"median "+V.median,{family:"Inter",style:"Bold",color:C.alert,centerAt:mx});
let lx=lg(z3,0,236,C.primaryDeep,"Jan 2027"); lg(z3,lx,236,C.primary,"Summer 2027");
rt(z3,0,272,496,22,"First step by 31 October 2026: ","gate the 8 PDFs and publish a fee band.",{leadColor:C.primary});
results.push({slide:s.id,total:s.findAll(()=>true).length,top:s.children.length}); }
```
<!-- END FILE -->

<!-- FILE: deck/slides/s03.js -->
```js
{ const s = await figma.getNodeByIdAsync("S3");
skelBT(s,1,"2 / 8","DIAGNOSIS",300,V.f3,"Source: case brief B05, B10 to B13 | beyondtech.org.in, Oct 2026 (W06 to W11) | DTU NIRF 2025 | branch packages: Getmyuni, 2025 season | research 6.2, 8.2, 9 | model "+V.hash+", T1, T2, T11, T13");
// ---- BAND 1: WHO IS REACHED ----
rail(s,64,316,380,"WHO IS REACHED",C.primaryDeep);
const za=zone(s,116,316,600,380,"funnel");
TL(za,0,0,24,"About "+V.pen+" of the non-tech pool enrols today",{color:C.primaryDeep,maxW:600});
stepFunnel(za,0,46,400,[{t:V.tam+" in years 2 to 4"},{t:V.sam+" open to non-tech"},{t:V.now+" enrolled ("+V.pen+")",tc:C.ink},{t:"50+ selections",tc:C.ink}],{tierH:50,gap:10,minW:250,size:22});
[[V.open_pct+" of them",387],[V.pen+" of pool",362],[V.sel_pct+" selected",337]].forEach((f,i)=>{ const y=101+i*60;
  addWireH(za,f[1]+6,416,y,C.ink,2); addEllipse(za,f[1],y-5,10,10,C.primary,C.ink,1.5); TL(za,422,y-17,22,f[0],{color:C.primary,maxW:178}); });
fine(za,0,284,600,"Bear to bull: pool "+V.sam3[0]+" to "+V.sam3[2]+", enrolled "+V.now3[0]+" to "+V.now3[2]+", share "+V.pen3[0]+" to "+V.pen3[2]+" (T1, T2). Enrolled is an estimate: 50+ selections at an assumed "+V.sel_pct+" selection rate (A29).");
TL(za,0,350,22,"The brief calls DTU recall strong (B11).",{family:"Inter",style:"Bold",color:C.primary,maxW:600});
dashedV(s,732,324,364,C.ink,2);
const zb=zone(s,748,316,618,380,"intent heat map");
lead(zb,0,0,618,"Referral reaches fourth years in season and misses the earlier years");
const L=1,M=3,H=5, hm=[[L,M,L,L],[M,H,M,H],[H,M,L,H],[M,H,M,H]], hc=v=>({t:v===H?"High":(v===M?"Med.":"Low"),f:HG[v],tc:v>=4?C.white:C.ink});
const g=grid(zb,0,78,["Second year","Third year","Fourth year","Off-campus"],["Oct-Dec","Jan-Mar","Apr-Jun","Jul-Sep"],hm.map(r=>r.map(hc)),{labelW:170,cellW:112,rowH:42,headH:44,corner:"Intent",name:"TABLE: intent"});
[[2,0,1],[2,3,1],[1,3,0]].forEach(d=>addEllipse(g,170+112*d[1]+86,44+42*d[0]+10,22,22,d[2]?C.primaryDeep:C.white,d[2]?C.white:C.primaryDeep,d[2]?2.5:4));
addEllipse(zb,0,301,22,22,C.primaryDeep,C.white,2.5); TL(zb,30,298,22,"reached by referral today",{family:"Inter",style:"Bold"});
addEllipse(zb,340,301,22,22,C.white,C.primaryDeep,4); TL(zb,370,298,22,"reached in part",{family:"Inter",style:"Bold"});
fine(zb,0,332,618,"Every cell is an estimate from four calendar anchors (research 6.2, 6.3). Second-year share of enrolments today: 0% (T13).");
dashedV(s,1382,324,364,C.ink,2);
const zc=zone(s,1398,316,458,380,"branch gap");
lead(zc,0,0,458,"Every circuital branch out-earns every other branch");
hBars(zc,0,76,458,[["Computer",19.85,1],["Software",18.46,1],["IT",16.62,1],["ECE",15.82,1],["Electrical",12.89,0],["Biotech",11,0],["Mechanical",9.58,0],["Civil",9.2,0]].map(b=>({label:b[0],value:b[1],text:b[1].toFixed(2),color:b[2]?C.primary:C.primaryDeep})),{labelW:140,rowH:32,barH:20,valueW:72,max:19.85});
fine(zc,0,336,458,"Average package, ₹ LPA, 2025 season, Getmyuni (aggregator-reported). Orange: circuital branches.");
// ---- BAND 2: WHERE IT LEAKS (five-stage purchase path, one leak per stage, then the seed card) ----
dashedH(s,64,705,1792,C.ink,2);
rail(s,64,716,314,"WHERE IT LEAKS",C.primary);
const zj=zone(s,116,716,1400,314,"path");
TL(zj,0,0,24,"Between hearing and paying, the path leaks at five points",{color:C.primaryDeep,maxW:1400});
[["Hears of it","Referral skips most",V.ref+" by referral","Proof moves through placed seniors, so other branches and earlier years rarely see it."],
 ["Free resources","No net at the top","8 of 8 links open","Eight free PDFs and the sampler are open links that capture no name or number."],
 ["WhatsApp chat","One chat at a time",V.hours[0]+" hours a year","Every enquiry goes to one WhatsApp number, and the founder answers each one."],
 ["Fit interview","Price behind a gate","no fee shown","Application, review and a fit interview come before any fee is shown."],
 ["Pays and enrols","No early-year entry","0% second years","Nothing is built for second or third years before the 15 January batch."]]
.forEach((k,i)=>{ const x=i*284, f=addFrame(zj,x,44,240,52,i===4?C.primary:C.primaryDeep,C.ink,2,"STAGE "+(i+1));
  addText(f,"Poppins","Bold",22,C.white,k[0],6,0,228,52,"CENTER","CENTER"); if(i<4) arrow(zj,x+246,70,x+278,70,C.ink,3);
  addRect(zj,x+16.5,96,3,48,C.alert); TL(zj,x+28,104,22,k[1],{color:C.primaryDeep,maxW:236});
  addBadge(zj,x,144,36,i+1,C.alert,C.white);
  const ch=addFrame(zj,x+44,144,220,36,i===0||i===3?C.surface:C.alertTint,C.ink,1.5,"CHIP"); addText(ch,"Inter","Bold",22,C.ink,k[2],4,0,212,36,"CENTER","CENTER");
  T(zj,x,190,264,22,k[3]); });
const c=layered(s,1548,716,301,307,C.primaryDeep,"CARD: seed");
TL(c,18,10,22,"THE GAP THIS LEAVES",{color:C.accent,maxW:265});
T(c,18,50,265,22,"Proof of 50+ selections travels only as far as the seniors who earned it. No channel yet carries it to earlier years, other branches or other campuses.",{color:C.white});
results.push({slide:s.id,total:s.findAll(()=>true).length,top:s.children.length}); }
```
<!-- END FILE -->

<!-- FILE: deck/slides/s05.js -->
```js
{ const s = await figma.getNodeByIdAsync("S5");
skelBT(s,3,"4 / 8","DTU BUDGET",300,V.f5,"Source: model "+V.hash+", tables T3, T4, T6, T7 | Meta and LinkedIn India cost benchmarks, research section 12 | fee (A01) and margin (A24) are assumptions: BeyondTech publishes no fee");
// ---- BAND 1: WHERE THE CASH GOES (cost curve + its key table) ----
rail(s,64,316,400,"WHERE THE CASH GOES",C.primaryDeep);
const z=zone(s,116,316,1040,400,"cost curve");
TL(z,0,0,24,"Cheapest first: nine channels reach "+V.enrol+" enrolments, two get ₹0",{color:C.primaryDeep,maxW:1040});
TL(z,0,42,22,"CAC, ₹ per enrolment",{family:"Inter",style:"Bold"});
let lx=lg(z,330,42,C.primary,"Organic"); lx=lg(z,lx,42,C.primaryDeep,"Paid, funded"); lg(z,lx,42,C.alertTint,"Paid, ₹0");
const X0=90, K=5, PT=84, PB=334, PH=PB-PT, YM=5000, Y=v=>PB-PH*Math.min(v,YM)/YM, PW=K*V.curve.reduce((a,r)=>a+r[5],0);
[1000,2000,3000,4000].forEach(v=>{ addRect(z,X0,Y(v),PW,1,C.surface); TL(z,0,Y(v)-14,22,"₹"+fmtN(v),{family:"Inter",style:"Semi Bold",rightAt:X0-8}); });
let cum=0; const G=V.curve.map(r=>{ const o={x:X0+cum*K,w:r[5]*K,top:r[3]?Y(r[1]):PT}; cum+=r[5]; return o; });
V.curve.forEach((r,i)=>{ const g=G[i]; addRect(z,g.x,g.top,g.w,PB-g.top,r[3]?(r[4]?C.primary:C.primaryDeep):C.alertTint,C.ink,2);
  if(!r[3]){ addRect(z,g.x-3,PT+70,g.w+6,12,C.white); addRect(z,g.x-3,PT+70,g.w+6,2,C.ink); addRect(z,g.x-3,PT+80,g.w+6,2,C.ink); } });
addRect(z,X0,PT,2.5,PH,C.ink); addRect(z,X0,PB-1,PW,2.5,C.ink);
const big=V.curve.findIndex(r=>r[0]==="Meta retargeting"), fu=V.curve.findIndex(r=>!r[3]), gb=G[big], sx=G[fu].x, yb=Y(V.cac_raw);
dashedH(z,X0,yb-1,gb.x-X0,C.alert,2.5); TL(z,X0+8,yb-34,22,"Blended "+V.cac,{color:C.alert});
dashedV(z,sx,PT-8,PH+16,C.alert,3);
G.forEach((g,i)=>{ const r=V.curve[i]; if(i===big) return; pin(z,g.x+g.w/2,r[3]?g.top-20:PT+26,32,String(i+1),r[3]?C.white:C.alert,r[3]?C.ink:C.white); });
pin(z,gb.x+28,gb.top+28,32,String(big+1),C.white,C.ink);
TL(z,gb.x+54,gb.top+12,22,V.curve[big][0],{color:C.accent,maxW:gb.w-66});
T(z,gb.x+14,gb.top+52,gb.w-28,22,V.curve[big][6]+" enrolments for "+V.curve[big][7]+": "+V.rt_cash+" of the cash closes the last "+V.rt_tail+" of the target",{color:C.white});
addRect(z,X0+4,116,440,70,C.white);
TL(z,X0+10,120,22,"Organic: 7 channels at "+V.layer[0][3]+" each",{color:C.primary});
TL(z,X0+10,154,22,V.layer[0][2]+" enrolments for "+V.layer[0][1],{family:"Inter",style:"Bold"});
TL(z,0,PT+4,22,"Off the scale and unfunded: "+(fu+1)+" at "+V.curve[fu][2]+", "+(fu+2)+" at "+V.curve[fu+1][2],{family:"Inter",style:"Bold",color:C.alert,rightAt:sx-10});
[0,50,100].forEach(v=>TL(z,0,PB+8,22,String(v),{family:"Inter",style:"Bold",centerAt:X0+v*K}));
TL(z,0,PB+8,22,"Funding stops at "+V.enrol,{color:C.alert,rightAt:sx-8});
TL(z,X0,PB+38,22,"Bar width: enrolments the channel adds. Bar height: its CAC.",{family:"Inter",style:"Semi Bold",maxW:940});
const rows=V.curve.map((r,i)=>[String(i+1),r[0],r[6],r[7],r[2]]).concat([["","Total, base case",V.layer[2][2],V.budget,V.cac]]);
const fills=V.curve.map((r,i)=>r[3]?(r[4]?(i%2?C.surfaceAlt:C.white):C.accentTint):C.alertTint).concat([C.tint]);
wrapTable(s,1196,316,[52,264,84,138,118],["#","Channel","Enrol.","Cash","CAC"],rows,{rowH:30,headerH:36,fills,name:"funding order"});
// ---- BAND 2: WHAT IT BUYS (the moneyshot, three scenarios, sensitivity) ----
dashedH(s,64,725,1792,C.ink,2);
rail(s,64,736,294,"WHAT IT BUYS",C.primary);
const m=layered(s,116,736,520,280,C.primaryDeep,"CARD: MONEYSHOT");
const n1=TL(m,24,0,60,V.org_pct0,{family:"Poppins",style:"ExtraBold",color:C.accent});
arrow(m,24+n1.width+14,46,252,46,C.white,5);
const n2=TL(m,270,0,60,V.org_e_pct0,{family:"Poppins",style:"ExtraBold",color:C.accent});
T(m,24,92,230,22,"of the cash, spent on organic",{family:"Inter",style:"Bold",color:C.white});
T(m,270,92,226,22,"of the "+V.enrol+" enrolments",{family:"Inter",style:"Bold",color:C.white});
addDashedRow(m,24,152,472,C.accent,14,9,2);
T(m,24,162,472,22,V.budget_lk+" at DTU buys "+V.enrol+" enrolments at a blended "+V.cac+" each. All four paid channels alone would cost "+V.paid_each+" each and stop at "+V.paid_cap+".",{family:"Inter",style:"Bold",color:C.white});
const zb=zone(s,668,736,676,294,"scenarios");
TL(zb,0,0,24,"Bear is a stress test, never a budget",{color:C.primaryDeep,maxW:676});
wrapTable(zb,0,44,[196,160,160,160],["DTU season","Bear","Base","Bull"],[["Enrolments"].concat(V.t6.map(r=>r[1])),["Spend"].concat(V.t6.map(r=>r[2])),["Blended CAC"].concat(V.t6.map(r=>r[3])),["Contribution"].concat(V.t6.map(r=>r[4]))],{rowH:36,headerH:38,colors:[C.ink,C.alert,C.primaryDeep,C.good],name:"scenarios"});
T(zb,0,234,676,22,"Bear stacks three weak conversion rates at once; spend is stopped at the gates long before "+V.t6[0][2]+".",{family:"Inter",style:"Bold"});
dashedV(s,1360,744,280,C.ink,2);
const zc=zone(s,1376,736,480,294,"sensitivity");
TL(zc,0,0,24,"The fee moves contribution most",{color:C.primaryDeep,maxW:480});
TL(zc,0,40,22,"Swing in DTU contribution, ₹ lakh",{family:"Inter",style:"Bold",maxW:480});
const TX=tornado(zc,0,80,480,V.t7.map(r=>({label:r[0],lo:r[1],hi:r[2]})),V.t7base,{labelW:252,rowH:28,min:4.5,max:16.5});
TL(zc,0,254,22,V.t7[0][1].toFixed(1),{family:"Inter",style:"Bold",centerAt:TX(V.t7[0][1])});
TL(zc,0,254,22,"base "+V.t7base.toFixed(1),{family:"Inter",style:"Bold",color:C.primaryDeep,centerAt:TX(V.t7base)});
TL(zc,0,254,22,V.t7[0][2].toFixed(1),{family:"Inter",style:"Bold",rightAt:480});
results.push({slide:s.id,total:s.findAll(()=>true).length,top:s.children.length}); }
```
<!-- END FILE -->

<!-- FILE: deck/preview.py -->
```python
"""Offline preview of a slide script, drawn from the mock's node tree with the real Poppins and Inter glyph widths.
  PY beyondtech-dcg/deck/preview.py 2 3 5     writes deck/shots/preview_02.png, preview_03.png, preview_05.png
It is a layout check only: no kerning, slightly different hinting; colours and positions are exact. Compare it with the
Figma screenshot of the same slide. A shape or label more than about 10 px away from its preview position is a real
build difference; small differences in where a line of body text wraps are not."""
import io, json, os, sys, pathlib, subprocess, importlib.util
from PIL import Image, ImageDraw, ImageFont
from fontTools.ttLib import TTFont
DECK = pathlib.Path(__file__).resolve().parent
UF = pathlib.Path(os.environ.get("LOCALAPPDATA", "")) / "Microsoft" / "Windows" / "Fonts"
FS = pathlib.Path(r"C:\Users\harsh\Desktop\HARSH\WEB-DEV-PROJECTS\open-video\node_modules\.pnpm\@fontsource+inter@5.1.1\node_modules\@fontsource\inter\files")
FILES = {"Poppins|Bold": [UF / "Poppins-Bold.ttf"], "Poppins|ExtraBold": [UF / "Poppins-ExtraBold.ttf"],
         "Inter|Semi Bold": [FS / "inter-latin-600-normal.woff", FS / "inter-latin-ext-600-normal.woff"],
         "Inter|Bold": [FS / "inter-latin-700-normal.woff", FS / "inter-latin-ext-700-normal.woff"]}
DUMP = """
  const dump=n=>({t:n.type,x:n.x,y:n.y,w:n.width,h:n.height,n:n.name,f:(n.fills&&n.fills[0]&&n.fills[0].color)||null,s:(n.strokes&&n.strokes[0]&&n.strokes[0].color)||null,sw:n.strokeWeight||0,
    c:n.type==="TEXT"?n.characters:undefined,fn:n.fontName,fs:n.fontSize,ah:n.textAlignHorizontal,av:n.textAlignVertical,ar:n.type==="TEXT"?n.textAutoResize:undefined,rt:n._rt,dp:n.dashPattern,k:n.children.map(dump)});
  for (const [sid, s] of Object.entries(slides)) if (s.children.length) console.log("TREE_JSON"+JSON.stringify(dump(s)));
"""
class Fonts:
    def __init__(s, adv):
        s.adv = adv; s.cache = {}; s.cmaps = {}
        for k, fl in FILES.items():
            ok = [f for f in fl if f.exists()] or [FILES["Poppins|Bold"][0]]
            s.cmaps[k] = [(str(f), set(TTFont(str(f)).getBestCmap())) for f in ok]
    def pick(s, fam, ch, size):
        f = s.cmaps[fam][0][0]
        for ff, cm in s.cmaps[fam]:
            if ord(ch) in cm: f = ff; break
        key = (f, round(size))
        if key not in s.cache: s.cache[key] = ImageFont.truetype(f, round(size))
        return s.cache[key]
    def w(s, text, fam, size): return sum(s.adv[fam].get(c, 0.6) for c in text) * size * 1.02
def wrap(F, text, width, fam, size):
    out = []
    for para in text.split("\n"):
        line = ""
        for wd in para.split(" "):
            cand = (line + " " + wd) if line else wd
            if F.w(cand, fam, size) <= width or not line: line = cand
            else: out.append(line); line = wd
        out.append(line)
    return out
def col(c): return tuple(round(255 * c[k]) for k in "rgb") if c else None
def run(img, F, x, y, text, fam, size, fill):
    d = ImageDraw.Draw(img)
    for ch in text:
        d.text((x, y), ch, font=F.pick(fam, ch, size), fill=fill); x += F.adv[fam].get(ch, 0.6) * size * 1.02
def draw_text(img, F, n, ax, ay):
    fam = n["fn"]["family"] + "|" + n["fn"]["style"]; size = n["fs"]; lh = (1.5 if fam.startswith("Poppins") else 1.21) * size; c = col(n["f"]) or (0, 0, 0)
    dy = (lh - size * 1.22) / 2
    if n.get("rt") is not None and abs(n["rt"][0][0]) < 1e-6:
        tmp = Image.new("RGBA", (int(F.w(n["c"], fam, size)) + 6, int(lh) + 4), (0, 0, 0, 0)); run(tmp, F, 0, dy, n["c"], fam, size, c)
        tmp = tmp.rotate(90, expand=True); img.paste(tmp, (int(ax), int(ay)), tmp); return
    W = None if n["ar"] == "WIDTH_AND_HEIGHT" else n["w"]
    lines = n["c"].split("\n") if W is None else wrap(F, n["c"], W, fam, size)
    y0 = ay + ((n["h"] - len(lines) * lh) / 2 if n["ar"] == "NONE" and n.get("av") == "CENTER" else 0)
    for i, l in enumerate(lines):
        lw = F.w(l, fam, size); x = ax
        if W is not None and n.get("ah") == "CENTER": x = ax + (W - lw) / 2
        if W is not None and n.get("ah") == "RIGHT": x = ax + W - lw
        run(img, F, x, y0 + i * lh + dy, l, fam, size, c)
def draw(img, F, n, ox, oy):
    d = ImageDraw.Draw(img); ax, ay = ox + n["x"], oy + n["y"]
    if n["t"] == "TEXT": draw_text(img, F, n, ax, ay); return
    f = col(n["f"]); s = col(n["s"]); sw = max(1, round(n["sw"])) if s else 0
    if n.get("rt") is not None and n["t"] == "RECTANGLE":
        m = n["rt"]; o = (ox + m[0][2], oy + m[1][2]); ux = (m[0][0], m[1][0]); uy = (m[0][1], m[1][1]); w, h = n["w"], n["h"]
        d.polygon([o, (o[0] + ux[0] * w, o[1] + ux[1] * w), (o[0] + ux[0] * w + uy[0] * h, o[1] + ux[1] * w + uy[1] * h), (o[0] + uy[0] * h, o[1] + uy[1] * h)], fill=f, outline=s); return
    x0, y0, x1, y1 = ax, ay, ax + n["w"], ay + n["h"]
    if n["t"] == "ELLIPSE": d.ellipse([x0, y0, x1, y1], fill=f, outline=s, width=sw)
    elif n["t"] in ("RECTANGLE", "FRAME") and (f or s):
        if n.get("dp") and s and not f:
            for xx in range(int(x0), int(x1), 10): d.line([xx, y0, min(xx + 6, x1), y0], fill=s, width=sw); d.line([xx, y1, min(xx + 6, x1), y1], fill=s, width=sw)
            for yy in range(int(y0), int(y1), 10): d.line([x0, yy, x0, min(yy + 6, y1)], fill=s, width=sw); d.line([x1, yy, x1, min(yy + 6, y1)], fill=s, width=sw)
        else: d.rectangle([x0, y0, x1, y1], fill=f, outline=s, width=sw)
    for k in n["k"]: draw(img, F, k, ax, ay)
def render(gen, only, outdir):
    F = Fonts(json.loads(gen.rd("metrics.json"))); m = gen.rd("mock_figma.js"); i = m.rindex("})();"); m = m[:i] + DUMP + m[i:]; gen.derive(); out = []
    for n in only:
        code = gen.compose(n, "S%d" % n)
        r = subprocess.run(["node", "-"], input=m.replace("EXACT_FLAG", "true").replace("CODE_JSON", json.dumps(code)), capture_output=True, text=True, encoding="utf-8")
        tj = [l for l in r.stdout.splitlines() if l.startswith("TREE_JSON")]
        if not tj: print("no tree for slide", n, r.stdout[-400:], r.stderr[-600:]); continue
        img = Image.new("RGB", (1920, 1080), (255, 255, 255))
        for k in json.loads(tj[0][9:])["k"]: draw(img, F, k, 0, 0)
        p = pathlib.Path(outdir) / ("preview_%02d.png" % n); p.parent.mkdir(parents=True, exist_ok=True); img.save(p); out.append(str(p)); print("wrote", p)
    return out
if __name__ == "__main__":
    spec = importlib.util.spec_from_file_location("gen", DECK / "gen.py"); gen = importlib.util.module_from_spec(spec); spec.loader.exec_module(gen)
    render(gen, [int(a) for a in sys.argv[1:]] or [2, 3, 5], DECK / "shots")
```
<!-- END FILE -->

<!-- FILE: deck/names.js -->
```js
// Re-applies the eleven slide names (Figma Slides resets them to numbers after a rebuild). Read-safe to rerun.
const ids={"2:2":"01 Cover","2:4":"02 Executive Summary","2:5":"03 Diagnosis","2:6":"04 DTU Plan","2:7":"05 DTU Budget","2:8":"06 College Selection","2:9":"07 Pan-India Launch","2:10":"08 Launch Playbook","2:11":"09 Roadmap and Risks","2:12":"10 Appendix","2:13":"11 Thank You"};
const out=[]; for(const [id,name] of Object.entries(ids)){ const s=await figma.getNodeByIdAsync(id); if(!s){ out.push({id,missing:true}); continue; } s.name=name; out.push({id,name:s.name}); }
return out;
```
<!-- END FILE -->

<!-- FILE: extract_redesign.py -->
```python
"""Writes only the redesign files embedded in REDESIGN-PLAN.md, after backing up any file it replaces into deck/_backup_v1/.
It never reads or writes DECK-PLAN.md. Run from anywhere: PY beyondtech-dcg/extract_redesign.py"""
import re, io, pathlib, shutil
BT = pathlib.Path(__file__).resolve().parent
t = io.open(BT / "REDESIGN-PLAN.md", encoding="utf-8").read().replace("\r", "")
ALLOWED = {"deck/metrics.json", "deck/gen.py", "deck/values_ext.py", "deck/_x2.js", "deck/slides/s02.js", "deck/slides/s03.js", "deck/slides/s05.js", "deck/preview.py", "deck/names.js"}
bk = BT / "deck" / "_backup_v1"; bk.mkdir(parents=True, exist_ok=True); n = 0
for rel in ("deck/build/slide_02.js", "deck/build/slide_03.js", "deck/build/slide_05.js", "deck/shots/s02.png", "deck/shots/s03.png", "deck/shots/s05.png", "deck/values.js", "deck/mock_figma.js"):
    p = BT / rel
    if p.exists() and not (bk / p.name).exists(): shutil.copy2(p, bk / p.name); print("backed up", rel)
for m in re.finditer(r"<!-- FILE: ([^\n]+?) -->\n```[a-z]*\n(.*?)\n```\n<!-- END FILE -->", t, re.S):
    rel = m.group(1).strip()
    if rel == "extract_redesign.py": continue
    assert rel in ALLOWED, "unexpected block: " + rel
    p = BT / rel
    if p.exists() and not (bk / p.name).exists(): shutil.copy2(p, bk / p.name); print("backed up", rel)
    p.parent.mkdir(parents=True, exist_ok=True); io.open(p, "w", encoding="utf-8", newline="\n").write(m.group(2) + "\n"); n += 1; print("wrote", rel, len(m.group(2)))
print("files", n)
```
<!-- END FILE -->
