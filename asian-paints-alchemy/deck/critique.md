# Deck critique, step E8 (touchpoint G)

Scored against `case-competition-deck` references `critique_rubric.md`, `archetypes.md` and `rhetoric.md`, re-based
for five core slides per PLAN_DECK.md section 2's archetype table. Inputs: PLAN_DECK.md sections 1 to 5,
deck/slide-copy.md, deck/derivation.md, and deck/shots/s1.png to s9.png.

## Two strongest things

1. **Every core headline is a genuine action title and the contrarian pattern is fully built out.** All five core
   slide headlines (S3 to S7) are full sentences carrying a number: "39% less TiO2 and 34% lower material cost per
   m²" (S3), "scatters only 66% of the light... crowding at 18% costs another 9%" (S4), "12 white film designs
   through one model" (S5), "24.8 g of TiO2 per m² against 40.8 g" (S6), "saves about ₹298 Cr a year... 7,551 t of
   TiO2" (S7). On S3 the storyline matrix strikes through the obvious move in each of the three rows (find a new
   pigment, wait for cheap TiO2, build a new particle) against a checked recommendation, proof chart and result
   numeral, which is the GCCH contrarian pattern executed almost by the book and compressed cleanly into one slide.
2. **Density with real rigor, not just density for its own sake.** The twelve-design MECE screen on S5 is heat
   coloured with a retain/discard verdict on every row and a tally strip by family; bear, base, bull scenario
   thinking repeats with the same three names across S3, S6, S7 and S8; the double synthesis pattern is present
   (CONCLUSIVELY on S5, Therefore on S7) with two named third party quotes (Lemcoff et al. 2023, Burresi et al.
   2014); and per deck/derivation.md every model number traces to values.json and every external fact is a
   VERIFIED or CORRECTED research row. Few decks at this slide count carry this much defensible weight per page.

## Checks specific to this build

- Slide 1 (s1.png): untouched organiser cover, Asian Paints and Alchemy marks and the Unstop platform-partner mark
  present as supplied. Confirmed, not flagged.
- Logos, marks and the purple foot bar: checked all four corners on s2 through s9. Asian Paints logo (top left),
  Alchemy mark (top right), Unstop mark (bottom right) and the purple foot bar (bottom edge) are unobstructed on
  every slide.
- No empty region over about 150 by 150 px inside a panel on any slide, including the unfilled "Cyphochilus scale"
  image slot on S6 (dashed box is narrower than 150 px), which is expected pending E7's image fill and not a
  critique-stage defect.
- Heat-coloured exhibit on every core slide: S3 (three cases, one answer grid), S4 (five forces scorecard), S5
  (twelve-row screen, prior-art grid), S6 (what-the-rutile-sees scenario table), S7 (readiness table, 5x5 risk
  heat map). All present.
- No text visibly under 18 pt; source lines (14 pt) and the S8 short-forms list (16 pt) are the only sub-18 pt
  text, both allowed exemptions per PLAN_DECK.md section 1.

## Rubric scores (five-core-slide basis)

Pass/fail items: all load-bearing items pass. The usual 100-slide items (table of contents, abbreviations table,
section dividers, a multi-slide appendix, a multi-slide bibliography) are compressed by design into the ribbon nav,
the S8 annexure, and the A4 short-forms list, which is the correct adaptation for a 9-slide deck per the skill's own
scope guidance, not a gap.

| Dimension | Score /5 | Note |
|---|---|---|
| 1. Strength of recommendation | 5 | Contrarian, foreshadowed (S4 seed card into S6 mechanism), full alternative with implementation plan |
| 2. Industry analysis funnel | 5 | S4 ends on "so the air has to live in the film, not in the particle," naming the gap without naming the mechanism |
| 3. Quantitative rigor | 5 | MECE filter, core model, three scenarios, decomposed cost waterfall, one moneyshot, plus sensitivity and tornado on S7 and S8 |
| 4. Action titles and quantification | 5 | All five core headlines are full-sentence findings with numbers; the cover title and the thank-you recap line are thematic by design, consistent with the cover and conclusion archetypes |
| 5. Visual discipline | 4 | Consistent nav bar and citations; one cross-label inconsistency on S7 (below) keeps this off a 5 |
| 6. Defensive depth | 4 | One annexure slide, but derivation.md confirms every number traces to values.json or a VERIFIED research row; slide count is compressed by design for a 9-slide deck |
| 7. Polish | 4 | No placeholder text, no copy-paste artifacts; the issues below are small, specific defensibility points, not visible errors |

## Issues (4)

1. **S7: the roll-out panel and the readiness panel use two different roadmap labels for what reads as the same
   timeline.**
   Current state: "THREE HORIZONS, THREE GATES, BY MONTH" lists "H2 interior, gate 2" and "H3 organic crystals,"
   while the adjacent "WHERE IT APPLIES, AND HOW READY" table on the same slide labels its column "Phase" and
   shows Phase 2, Phase 3 and Phase 4. A reader cannot tell on this slide whether "H2" lines up with "Phase 3" or
   with something else.
   Fix: in `deck/slides/s07.js`, rename the two "H2"/"H3" row labels in the roll-out panel to the same phase
   numbering already used in the readiness table (for example "Phase 3 interior, gate 2" and "Phase 4 organic
   crystals"), so the slide carries one roadmap vocabulary, not two.
   Why it matters: PLAN_DECK.md section 5 already records that the readiness table was deliberately moved off
   "H1" labelling to avoid exactly this kind of roadmap-label confusion (research Table 23.2 defines H1 as
   today's business). The roll-out panel was not brought into the same fix, so the same confusion reappears one
   panel over on the same slide.

2. **S5: the design that saves the most TiO2 is marked "Later" with no reason given on the slide.**
   Current state: Design 12 ("Air network with organic crystals") shows 81% TiO2 saved, more than double
   Design 10's 39%, the design actually recommended. The verdict column marks it "Later" with no accompanying
   text anywhere on S5 explaining why the higher-saving design is deferred rather than chosen.
   Fix: in `deck/slides/s05.js`, add a short clause to the "Later" cell or to the THE VERDICT band, for example
   "Later: organic crystals not yet characterised at scale" (if that is the correct research reason) or the
   equivalent short reason already in the research file for deferring Design 12.
   Why it matters: this is exactly the kind of question a judge asks first. Rhetoric reference, tactic 6
   ("pre-empt your own weaknesses"), is otherwise well executed in this deck (bear case boxes, "lab plan not yet
   run" labels, "what would change our mind" panel on S8); this one spot leaves an obvious opening unaddressed.

3. **S6: the deck's own yellowness figure misses its own lab-plan pass mark, and the slide does not say so.**
   Current state: "AGAINST THE TARGETS" shows b*, yellowness: Premium 1.4, Ours 1.5. The lab plan panel on the
   same slide sets the pass mark for the durability and yellowing test as "b* near 1.4." The result column is
   therefore 0.1 off its own stated target, with no annotation anywhere on S6 acknowledging the gap.
   Fix: in `deck/slides/s06.js`, add a short qualifier next to the b* row or the lab-plan pass mark, for example
   "b* 1.5, within the near-1.4 band" or a footnote such as "b* gap of 0.1 to be closed in the panel test," using
   language already consistent with the deck's "not yet run" framing elsewhere on the same slide.
   Why it matters: the headline claims the system "matches the premium white." A single unacknowledged number
   that sits just outside the deck's own pass mark is the kind of detail a technical judge checks first, and the
   deck's existing habit of acknowledging limits (rhetoric reference, tactic 6) would normally cover this.

4. **S7: the cost waterfall's displayed deltas do not sum by hand to the displayed total.**
   Current state: 18.4 minus 4.0 minus 3.3 plus 1.2 minus 0.2 equals 12.1 by hand arithmetic on the rounded
   figures shown on the slide, one tenth off the displayed "12.0." PLAN_DECK.md section 5 records that the
   underlying unrounded values (₹18.36 to ₹12.04) do sum correctly and that the displayed figures are a rounding
   presentation choice, but the slide itself carries no note saying so.
   Fix: in `deck/slides/s07.js`, add "(rounded)" or an equivalent short qualifier next to the waterfall's final
   "12.0" bar label, so a reader doing the same hand arithmetic is not left wondering whether a step was dropped.
   Why it matters: CLAUDE.md section 5 requires that cost figures "sum correctly and be defensible under viva
   questioning." The figures do sum correctly before rounding; without the note, the deck is vulnerable to a viva
   question it has already, correctly, worked out the answer to.

None of these issues touch a number, the case choice, the recommendation, or the slide count. All four are single
short wording additions inside an existing `deck/slides/sNN.js` file, which fits PLAN_DECK.md section 9's fix
rules exactly.

## Highest-leverage suggestion

Of the four, issue 3 (the unacknowledged b* gap on S6) is the one most likely to surface in a live Q&A, because it
sits directly under the headline's own claim of a match. Fixing that one first gets the most defensive value for
the smallest edit.
