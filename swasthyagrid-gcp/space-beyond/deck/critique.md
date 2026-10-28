# Critique: SwasthyaGrid, Space & Beyond deck (skill touchpoint T4)

Read: references/critique_rubric.md, case_types/social_impact.md, case_types/strategy.md (case-competition-deck skill);
deck/shots/s01-s04, s06-s09.png, deck/shots/hi_s01-hi_s09.png (full hi-res set, used because deck/shots/s05.png does not
exist and s02.png/s09.png are stale pre-logo captures), and deck/slide-copy.md.

## What the deck does well

The deck earns its EY density without padding: every core slide (S2-S8) carries 7-9 bordered panels across three
rail-labelled bands, each panel built from a distinct chart form (horizontal bars, waterfall, donut, heat grid, Gantt,
tornado, line chart, stacked columns) rather than one form repeated, and every numeral traces to a named source or the
locked model in PLAN §2.4 with nothing fabricated. The contrarian recommendation is genuinely contrarian and properly
foreshadowed at this deck's compressed scale: S1's seed line ("₹558 Cr of medicine expired... while PHC shelves ran
short") and S2's "FIVE SYSTEMS RECORD, NONE MOVES" grid both plant the "move, don't buy" answer well before S4 names the
loop, and S3's five-whys root cause ("the medicine is often already inside the district; no one is tasked to see it")
hands S4 its opening line almost verbatim. The moneyshot on S7 ("1.36 crore" in 72pt gold on the dark card) is
unambiguously the largest numeral in the deck, paired with a sensitivity grid where every cell still clears 58.6 lakh,
and S9's "THEREFORE" card recaps only numbers already seen (no new content on the conclusion slide). Scenario symmetry
(bear/base/bull, same colours and order) holds across S2, S5, S7 and S8 exactly as planned.

## Dimension scores (1-5 each, S2-S8)

| # | Dimension | Score | Why |
|---|---|---|---|
| 1 | Strength of recommendation | 5 | Contrarian, foreshadowed (S1 seed, S2 grid), alternative gets full quantitative model (S5) and implementation plan (S6) |
| 2 | Context/problem funnel | 5 | S3 funnels broad availability stats down to a five-whys root cause that directly seeds S4's loop |
| 3 | Quantitative rigor | 5 | Option-filter table (S2), bottom-up + top-down market sizing (S5), 3 scenarios everywhere, decomposed licence buildup, sensitivity grid + tornado (S7/S8), moneyshot |
| 4 | Action titles and quantification | 5 | Every sampled headline (S2-S4, S6-S8) is a full-sentence finding carrying at least one number |
| 5 | Visual discipline | 4 | Consistent rails/ribbon/sourcing throughout; S3's MECE issue tree renders as a verdict table rather than a branching tree with elbow wires |
| 6 | Defensive depth (appendix) | 5 | S8 packs A1 workings, A2 7-row assumptions register, A3 tornado sensitivity, A4 16-line bibliography and glossary into one dense, legible slide |
| 7 | Polish | 4 | No placeholder text or AI phrasing found; docked for the intermediate verification trail gap (below) |

**Total: 33/35**, equivalent to roughly 42/45 on the plan's scale. Above the §0.5 T4 gate of ≥40/45.

## K-card pass/fail (§5.8), checked across all 9 slides via the hi-res set

Ribbon correctness, rail labelling, 4-5 type levels, cornerRadius 0, ink outlines, charts paired with tables, sources
bottom-right on every slide, and the S7 moneyshot superlative all pass. S1's eight spokes reach eight logo-bearing
nodes with a centred hub; S6's risk grid holds no risk in its reddest (P high / I high) cell; S8 carries exactly 16
bibliography lines in two clean columns, none clipped.

## Issues (at most 5, none changes a number, the recommendation, the slide count, or the team)

1. **IMPORTANT — S5 has no dev-time verification record.** `deck\shots\s05.png` does not exist, and `build-log.md` has
   no `## S5 Market` section (it jumps from `## S4` to `## S6`), even though S5 itself is fully built and correct — the
   hi-res export (`deck\shots\hi_s05.png`, in the shipped PDF) shows all nine S5 panels (TAM/SAM/SOM bars, the ₹12 L
   licence waterfall, the NHM top-down check, the buying-centre table, STP, why-now tiles, revenue path, unit economics,
   price benchmark) built and legible with no overlaps. This is a verification-trail gap, not a content defect; §5.9 has
   no fix rule for a missing log entry because nothing in the slide needs changing. **Fix:** append a `## S5 Market`
   section to `build-log.md` with the K-card confirmation, and either re-run `get_screenshot` for S5 or copy/downscale
   `hi_s05.png` to `s05.png` so the per-slide dev record matches the other eight slides before the build is called done.

2. **NICE-TO-HAVE — s02.png and s09.png in deck\shots\ are stale pre-logo captures.** Both still show dashed
   placeholder boxes (S2: eVIN, UNDP; S9: NSUT, DTU, GGSIPU) that build-log.md's D4 section says were filled, and the
   hi-res set confirms they were (`hi_s02.png` and `hi_s09.png` both show the real logos in place; only the Space &
   Beyond organiser mark is still an honest placeholder, as logged). **Fix:** per §5.10 step 4 ("re-run sweeps... and
   screenshot S1, S2 and S9 again"), S1 was re-shot after logo placement but S2 and S9 were not — re-run
   `get_screenshot` for those two so `deck\shots\` matches the shipped state.

3. **NICE-TO-HAVE — S3's issue-tree panel doesn't use tree geometry.** "FIVE BRANCHES, AND WHAT A DISTRICT VIEW FIXES"
   is content-correct MECE (five branches, each marked Fixed/Partly/Not fixed) but renders as a flat table rather than
   a tree with elbow wires reaching each branch, which is what the K-card (§5.8 item 7) and the MECE-issue-tree
   archetype named for S3 in §2.7 describe. It reads cleanly as-is. **Fix (optional, cosmetic only):** add elbow-wire
   connectors from a single root box to the five rows in `slides\s03.js`; no text or number changes.

4. **Already self-flagged, no action needed.** The Space & Beyond organiser logo remains a labelled dashed placeholder
   on S1 and S9 (publicly searched, not found) — already covered by the existing fine print on both slides
   ("Logos mark public bodies referenced in the analysis; no partnership or endorsement is implied."). Listed here only
   so it isn't missed at final hand-off.

**Highest-leverage single fix:** close issue 1 — log and re-verify S5 the same way every other slide was, so the
build's own paper trail (not just the final PDF) shows all nine slides passed the K-card.
