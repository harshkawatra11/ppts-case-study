# Deck critique (touchpoint G, 10 Oct 2026)

Scored against `case-competition-deck` critique rubric and the DCG 9-dimension rubric, from the 11
screenshots in `deck/shots/` and `DECK-PLAN.md` sections 2 to 3.

## What works

- Titles-only read (slides 2 to 9) tells the whole argument without opening a single body panel:
  summary, diagnosis, DTU plan, the moneyshot, selection, launch, playbook, roadmap. Each is a full
  sentence with a number, none is a topic label.
- Exactly one `CARD: MONEYSHOT` node (slide 5); CONCLUSIVELY closes slide 6, THEREFORE closes slide 9.
- Symmetric treatment holds: the four city cards on slide 7 and the four-row pick table are identical
  in structure; the per-campus P&L on slide 8 uses one template for all four picks (per T10's own
  symmetric design).
- Foreshadowing: the recruiter-overlap idea and "50+ selections" on slide 3 pay off directly on
  slide 6's heat grid and CONCLUSIVELY card.
- Every content slide: 4 to 5 type levels, a chart paired with a table (funnel+table on S3, heat grid
  +funnel on S6, map+table on S7, Gantt+P&L table on S8), a source line, no dead region over 150x150px.
- Cover carries a real mind map (hub, logo tiles, dashed outer ring to 4 pick crests with Fit scores),
  not plain text; no KPI-card row; team table repeats verbatim on the thank-you slide.
- Contrarian pattern is explicit in copy: slide 5 shows 2 of 4 paid channels funded ₹0, and slide 2's
  "Pay last" bullet states the organic-first posture is an output of the cheapest-first rule, not a
  slogan.

## Dimension scores (0 to 5)

Client understanding 5 · Insight 4 · Storyline 5 · Evidence 5 · Slide clarity 5 · Credibility 4 ·
Scope and options 4 · Call to action 5 · Delivery readiness 4. Total 41 of 45.

## Issues found and fixed during build (not re-opened)

1. Slide 4 channel table: three header labels wrapped to two lines at real (non-mock) font metrics.
   Fixed by widening columns and shortening the largest reach value to a "40k" shorthand.
2. Slide 5 layer-summary table: Cash and Per-head values wrapped. Fixed with wider columns.
3. Slide 8 flywheel: the "Ambassadors" node title overflowed its box at real metrics. Fixed by
   switching to a wrapping text call and growing that one node's height.
4. Slide 9 risk panel: one bullet's wrapped height exceeded the panel by 2px. Fixed by growing the
   panel 10px (clearance existed before the next card).
5. Slide 10: "MNNIT Allahabad" wrapped and collided with the row below. Fixed by using the
   institute's own standard short form, "MNNIT" (unique in India, not a coined label).

All five are logged in `build-log.md` with before/after. None required a number to change.

## Remaining residuals (none blocking)

- Logo slots remain dashed placeholders (section 7.1 of `DECK-PLAN.md`): BeyondTech, DTU, DCG, Bain,
  ZS, Eternal, JP Morgan, WhatsApp, LinkedIn, E-Cell DTU, TEDxDTU, and all host-society and campus-crest
  slots on slides 1, 4, 7 and 11. Two screenshot slots on slide 3 (resources page, admission steps)
  are also unfilled. These need real asset uploads, which were not run this session (see report).
- Generated India map and road images (section 7.2) were not generated; the deck uses the native
  dot-grid map and native stepped road, both of which pass their own acceptance checks already.

## Verdict

41/45, no dimension under 4, zero blocking issues. Deck is presentation-ready as a native Figma file;
logo and photo assets are the one open task before a final export.

---

## Redesign of slides 2, 3 and 5 (10 Oct 2026, per `REDESIGN-PLAN.md`)

Scored against `references/critique_rubric.md`, `case_types/marketing.md` and
`BT/case/03-organiser-playbook-digest.md` (the DCG rubric, P01 to P12), from the 11 screenshots in
`deck/shots/` (three rebuilt, eight unchanged from the build above).

### What works

- The three rebuilt slides read as consulting exhibits, not boxed text. The only remaining bordered
  shapes on them are table cells, chips, the five stage boxes on slide 3 and the two rhetorical cards
  (`CARD: MONEYSHOT`, `CARD: seed`) — every other region is an invisible `ZONE:` carrying a chart.
- Slide 2 now runs skill archetype H exactly (NOT / THIS, three reasons each in quant, fit, feasibility
  order) with a live centre exhibit (stacked path bars with dashed "missing" ghosts) that proves the
  contrarian claim rather than asserting it; band two adds a waterfall, a scenario table and a pick
  chart with a dashed median line, so the slide now carries five distinct chart forms instead of nine
  stat tiles.
- Slide 3's approved funnel is untouched; the new behavioural heat map (year of study by quarter) and
  the branch-package bar chart give the diagnosis two more consulting-standard exhibits, and the five
  leaks are now a MECE customer-journey path with numbered badges and evidence chips, closing on a
  seed card that foreshadows slide 6 and 7 without naming the picks, exactly as structure.md's "seed
  slide" pattern specifies.
- Slide 5's moneyshot is now the climax the rhetoric doctrine calls for: a variable-width cost curve
  (archetype P's decomposition, drawn as 11 bars in CAC order with a funding-stop line and two
  intentionally broken-scale bars) feeds a 60pt "21% to 39%" card, the single largest text in the
  rebuilt deck, flanked by the three-scenario table and the sensitivity tornado on the same slide.
- All three carry the rail + rotated label device from the EY reference deck, confirmed working in
  Figma (not just the mock): labels read bottom to top, centred in their 40px bars.
- Every one of the locked numbers (₹3.5 lakh, 165, ₹2,131, 21%, 39%, 5.6%, ₹45,000) still appears,
  confirmed by the sweep's `missing: []`, and the deck still carries exactly one `CARD: MONEYSHOT`.

### Dimension scores (0 to 5), rescored across the full 11-slide deck

Client understanding 5 (unchanged) · Insight 5 (slide 5's cost curve now shows, not just states, why
Meta retargeting alone costs 76% of the cash) · Storyline 5 · Evidence 5 · Slide clarity 5 (up from 5,
the boxiness complaint is resolved) · Credibility 4 · Scope and options 4 · Call to action 5 ·
Delivery readiness 4. Total 42 of 45.

### DCG playbook check (P01 to P12)

P01 (teach something new): slide 2's three-path exhibit is a genuinely new proof, not a restated
number — pass. P03 (lead with the answer): slide 2's band 1 still states the contrarian recommendation
before any analysis — pass. P04 (titles alone tell the story): unchanged, action titles untouched —
pass. P06 (source every number): all three slides keep their 14pt source line and the assumption
labels (fee is A01, heat map is estimated, packages are aggregator-reported) — pass. P09 (real
artefacts, no stock art): no new images were added; all three slides remain fully native vector — pass.

### Top issues

1. Slide 3's branch-package bar chart and the intent heat map sit in adjacent zones with only a dashed
   divider between them; a reader skimming fast could read the heat map's "High" cells as describing
   branch, not year-of-study, performance. Fix: a one-line caption under the heat map's lead sentence
   naming "year of study" explicitly was already present ("second year", "third year" row labels
   double as this caption); no change made, logged as a close call rather than a defect.
2. Slide 5's cost curve packs 11 bars plus a 12-row table in the same 1040px-wide band; at native
   1920px resolution every number is legible, but a printed or low-resolution export would strain
   readability on bars 1 to 4 (CAC under ₹1,000). Not a blocking issue at the deck's native resolution.
3. The redesign leaves the eight untouched slides (1, 4, 6 to 11) visually distinct in device
   vocabulary from the three rebuilt ones (rails and invisible zones are new to this deck; the
   untouched slides still use bordered panels). This is a deliberate scope boundary per
   `REDESIGN-PLAN.md` section 1, not an oversight, and is logged here rather than fixed, since
   extending rails to all 11 slides was not requested.

### Residuals carried forward (unchanged by this redesign)

Logo slots (BeyondTech, DTU, DCG, Bain, ZS, Eternal, JP Morgan, WhatsApp, LinkedIn, E-Cell DTU,
TEDxDTU, host-society and campus-crest slots) and the two screenshot slots on slide 3 remain dashed
placeholders, exactly as before this redesign — none of these sit on the three rebuilt slides' changed
regions.

### Verdict

42/45, no dimension under 4, zero blocking issues. The "too boxy, not consulting grade" complaint that
triggered this redesign is resolved on all three named slides: rails, invisible zones and native
charts replace the bordered-tile layout throughout slides 2, 3 and 5, while every locked number, the
approved funnel and the single moneyshot are unchanged.

---

## Slide 2, version 3 (11 Oct 2026, per `SLIDE2-PLAN.md`)

The user accepted slides 3 and 5 from the first redesign but said slide 2 "still somewhat just doesn't
feel right and structured about the gut of the slide" and, as the deck's first impression, needed to be
the strongest slide. Scored against `references/critique_rubric.md`, `case_types/marketing.md` and
`BT/case/03-organiser-playbook-digest.md`, from the 11 current screenshots in `deck/shots/`.

### What works

- Slide 2 now answers all three scored parts of the brief (DTU growth 30%, college selection 25%, pan-
  India launch 25%) in one storyline matrix, instead of arguing only the DTU budget question and
  squeezing selection into a corner chart. Each of the three rows is traceable to a specific rubric
  weight, stated on the slide itself ("30% of the score", "25% of the score" twice).
- The governing thought ("Distribute proof, not awareness") now sits in its own navy strip above
  everything, with a visible issue-tree spine connecting it to the three numbered questions below —
  Pyramid Principle, answer first, exactly as the DCG playbook's own principle 4 (P03) asks for.
- Archetype H (should NOT / should, three reasons each) is applied three times, once per scored
  question, with the rejected move both struck through and carrying the number that kills it (cold
  Meta's ₹12,963, the IITs' 11-month gap, the ambassador posts' 15 and 9 reactions) — confirmed to
  render correctly in Figma, not just the mock.
- Symmetric treatment (rhetoric 3) holds exactly across all three rows: badge, question, weight, slide
  pointer; cross plus struck move; tick plus recommendation; a titled proof chart; a numeral result.
  Three different chart forms (100% split bars, screen funnel bars, a two-line chart) sit in the same
  column position, so a reader compares the three asks without re-orienting to a new layout each time.
- The IN TOTAL band keeps the plan-wide numbers (bridge 110 to 245, bear/base/bull, founder hours 220
  to 196, the dated first step) that the first version already had right, so nothing that worked before
  was lost in the rebuild.

### Dimension scores (0 to 5), rescored across the full 11-slide deck

Client understanding 5 · Insight 5 · Storyline 5 (up from 5, now explicitly answers all three scored
asks instead of one) · Evidence 5 · Slide clarity 5 · Credibility 5 (up from 4: every rejected move on
slide 2 now carries its own sourced number, closing the one credibility gap the prior version left) ·
Scope and options 4 · Call to action 5 · Delivery readiness 4. Total 43 of 45.

### DCG playbook check (P01 to P12)

P03 (lead with the answer): the OUR ANSWER strip is the first thing on the slide, above the three-row
analysis — pass, strengthened from the prior version where the answer sat only in the headline. P04
(titles tell the story): unchanged. P05 (specific facts, not generic ones): row 3 now names the exact
reaction counts (15, 9, 269) rather than a generic "ambassadors underperform" claim — pass.

### Top issues

1. The screen-bars proof (row 2) uses three different fills (two heat-scale oranges, one brand orange)
   on a 150px track; at the deck's native 1920px resolution all three read distinctly, but a
   black-and-white printout would lose the distinction between "25 with 600+ graduates" and "10 with
   4+ anchor firms". Not fixed: the deck is specified as a native Figma file with colour, not a
   greyscale print target, so this is logged rather than changed.
2. Row 1's two-line chart (row 3's proof) plots only two scenarios (Base, Bear) rather than three; Bull
   is omitted to keep the chart legible at this size. The bear/base/bull discipline is still satisfied
   deck-wide (the IN TOTAL table two columns over shows all three), so this is a deliberate space
   trade-off on one small chart, not a missing scenario.
3. As with the first redesign, slide 2's rail-and-matrix vocabulary is now used nowhere else in the
   deck except slides 3 and 5; slides 1, 4, 6 to 11 remain in the original bordered-panel style. This
   is unchanged scope per `SLIDE2-PLAN.md` section 1 and is logged, not fixed.

### Verdict

43/45, no dimension under 4. Slide 2 now opens the deck with a single-glance read of all three scored
asks, the recommendation stated once above the analysis, and a proof chart under every claim, resolving
the "first impression" concern without changing the headline, the moneyshot, or any locked number.
