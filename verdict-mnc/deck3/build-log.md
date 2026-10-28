# HarvestBox deck v3 build log

## Stage R

### R-model (orchestrator edits to model/harvestbox_model.py)

- M1: split the bundled "Proposal A: referral, win-back, conversion" bridge step into three steps (referral on the
  third box, win-back of lapsed customers, website conversion). Values: +2.21, +0.50, +1.07 Cr, summing to +3.77 Cr
  (matches the old bundled value). Bridge now has 12 rows (was 10); "bridge sums" check still PASS.
- M2: KPI stop trigger for "Boxes skipped" changed from "over 10% for 2 months" to "over 6% for 2 months" (research
  repair R4: base case sits 0.6 points from the 5.6% run-rate break-even skip rate, so a 10% trigger was far too loose).
- M3: KPI day-90 cells: "pilot 62%" (impossible, a week-3/4 pilot cohort cannot be 3 months old at day 90) -> "M2: 81%"
  (model's own month-2 survival at 65% three-month retention); "Boxes skipped" day-90 cell -> "from M4" (the feature
  launches month 4, so 0% at day 90 was misleading as a KPI reading rather than a fact about the feature not existing yet).
- M4: T9 scorecard table gets a new "Year-1 revenue vs no decision" column ahead of the existing 24-month column, so
  the table no longer mixes time bases silently (research defect D1). Year-1 / 24-month, Rs Cr: A +0.0 / +4.7,
  B +7.6 / +18.0, C +5.4 / +13.2, A rebuilt -0.7 / +5.1. Scores unchanged (2.80, 3.20, 3.00, 3.70).

Rerun: 14/14 PASS, HASH 06111c6c33 (unchanged, confirming these are string/table edits only, no number changed).
STATUS: PASS.

## Stage D1: pipeline

- Base library: `nsbc-case/deck/preamble.js` (Toing, 58 helpers) swapped to the HarvestBox palette and team via
  `deck3/gen3.py pre`; appended `deck3/lib/extras3.js` (skeleton3, funnel, matrix2x2, issueTree, waffle, legendV,
  planCard, skipStrip, kv, teamTable3, fine, wipe). Preamble: 37,599 characters. All 34 required functions present
  exactly once.
- `deck3/mock_figma.js`: copied from `deck/mock_figma.js` with three patches applied (MOCK_K scale factor read from
  env, wordBreak check for a single word wider than its box, childOut check for any panel child escaping its own
  panel frame). Default MOCK_K 1.10 pending real-Figma calibration after the file is created.
- `deck3/make_values.py` run: `values.json` written, 7,584 characters, 53 keys, every assertion passed (wf, pay,
  score, cashq, zero, ladder, bridge/split sum to 3.77, gate, kpi post-repair strings, budget sums to 1.80, uses sums
  to 15.00). Hand-keyed research constants (forces, routes, dark stores, reports, India and global precedents, gantt,
  budget) traced to the sections named in plan section 8.
- Helper smoke test (`slides/s99_test.js` on mock slide S9): 295 nodes, 0 runtime errors, every new helper function
  executed successfully (funnel, 2x2 matrix, issue tree, waffle, legend, plan cards, skip strip, heatmap, gantt,
  table, so-what bar). 36 layout-fit issues logged, all from the test script's own rushed geometry (narrow test boxes),
  not from a helper defect; real slide scripts use plan section 9's tuned coordinates. Test slide is not built in Figma.
STATUS: PASS.

## Stage R-text (SA-R) and D0 (SA-C) complete

SA-R applied R1-R10 text repairs (R10 found out of scope: dates come from research/raw/sources.md, not parts/*.md;
left unmodified pending a separate pass) and the R11 text plus R12 scan across all of research/parts/*.md, going
beyond the two sections literally named where grep found the same stale framing echoed elsewhere (6-8 additional
files) so the document does not contradict itself between sections. `research/assemble.py md`: ASSEMBLY PASS,
89,211 words, 193 tables, 0 dashes/exclamations/banned phrases/missing sources/duplicate headings. PDF rebuilt,
5,428,190 bytes. Model rerun: 14/14 PASS, HASH 06111c6c33 unchanged. Grep for Perennial/Flex on the regenerated
research document: 0 hits.

SA-C wrote `deck3/slide-copy.md` and `deck3/derivation.md`, confirmed the archetype mapping (plan section 6) and
that all four core headlines carry a full-sentence finding with a number. Two non-blocking notes logged in
derivation.md: (1) model_tables.md's T13 "bear" row is itself mislabelled (prints bear_cont values) -- values.json
was already built directly from model_outputs.json's monthly dict, bypassing this markdown bug; (2) a 0.1 Cr rounding
artifact between the three split bridge steps' sum (3.78) and the model's rounded total (3.77), not deck-visible.
STATUS: PASS.

## Final native Figma build and verification, 10 October 2026

Built all eight slides in O7oWkJR37V0H8IDKnt2Ed7. Four core content slides and two appendices sit between cover and thank-you. Charts, tables and diagrams use editable native nodes. Genuine organiser and brand assets fill logo frames; unavailable sub-brand marks use native nameplates. Cover and thank-you organiser logos have no outlines and 10 px gaps, per the user's final request. All cover logo outlines are removed.

Corrected 2.70x forecast versus 3.0x target, chart text contrast, risk-grid counts, daily-order chart units, scenario labelling, model table T13 and acquisition rounding. Research distinguishes 12.6% retention-gain cancellation from 5.6% full run-rate profitability, and uses a consistent rolling shipping floor.

Validation: 14/14 model checks; hash 06111c6c33. Figma text wrapping and bounds validator: zero issues. Corner, content font floor, punctuation, vocabulary and required-claim sweeps: zero findings. Exactly one MONEYSHOT. All eight slides reviewed visually. Research assembly passes: 89,206 words, 193 tables. Rebuilt searchable research PDF: 100 pages, 5,431,537 bytes; first, middle and final pages reviewed.

Sources and assumptions remain explicit. No primary interviews or pilots are claimed. The two excluded scale metrics require organiser clarification before an operational forecast can be treated as validated.
