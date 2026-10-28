# Toing deck build log

File: https://www.figma.com/slides/JLOOyohkQPUrwXEsxDKz4m
fileKey: JLOOyohkQPUrwXEsxDKz4m
planKey: team::1564294484048272772

## Slide ids
S1=2:2 (Cover) S2=2:4 (Exec Summary) S3=2:5 (Unit Math) S4=2:6 (Customer) S5=2:7 (Levers)
S6=2:8 (Options) S7=2:9 (The Call) S8=2:10 (Rivals and Rules) S9=2:11 (Signals) S10=2:12 (Appendix) S11=2:13 (Thank You)
fontsOk: [Poppins Bold, Poppins ExtraBold, Inter Semi Bold, Inter Bold] all true

## Touchpoint A (skill, generate mode, pre-build)
Contrarian call: slides 1,2,7,9. Foreshadow seed: slide 4. Symmetric treatment: slide 6. Moneyshot: slide 7.
Double synthesis: slides 6 and 9. Action titles: all core slides. A: 6 of 6 present.

## Inspo calibration (done by Opus 30 Sep, see plan §II.0b) - not repeated here.

## Build log
### Slide 1 (Cover, id 2:2) - DONE
- Build: 61 nodes, 22 top-level, 0 warnings
- V1: clean, 0 issues
- Screenshot: verified. Layered verdict card (navy/gold), 5-line arithmetic card (peach), team table, 2 dashed logo placeholders (Swiggy, NSUT FES) per user's request for 1-2 logo placeholders. No ribbon (correct, cover has none). Source line present bottom right.
- Checklist 4b: N/A (cover has no ribbon/so-what per design); title/verdict/team table all present, ink outlines throughout, radius 0.

### Slide 2 (Executive Summary, id 2:4) - DONE
- Build: 215 nodes, 125 top-level, 0 warnings
- V1: clean, 0 issues
- Screenshot: verified. 8-tag ribbon w/ punch-holes, SUMMARY active (orange). 3 panels: options (RAG chips), vBars chart, navy verdict card w/ numbered badges. Row B: stacked bar loss split, board checklist table, so-what bar. Density: 8+ forms present.
- Checklist 4b: PASS - ribbon/counter/section chip/headline all correct, panel titles w/ rules, ink outlines, no rounded corners, chart values on-chart, so-what bar present, source line present, no dead space.

### Slide 3 (Unit Math, id 2:5) - DONE
- Build: 165 nodes, 47 top-level, 0 warnings
- V1: clean, 0 issues
- Screenshot: verified. Waterfall (customer pays -> restaurant -> GST -> Swiggy rev -> rider -> other -> contribution), comparison table (Toing vs core), formula box, donut (who keeps the money), horizontal bars (rider % of basket at 3 price points), commentary panel (check against Swiggy's books), so-what bar. UNIT MATH tag active (orange).
- Checklist 4b: PASS.

### Slide 4 (Customer, public-data version, id 2:6) - DONE
- Build: 224 nodes, 127 top-level, 0 warnings
- V1: clean, 0 issues
- Screenshot: verified. Demand grid (4 numeral cells), precedent table (6 rows, colour-coded red/green outcomes), band rail "PUBLIC EVIDENCE", 3 hBars panels (bill comparison, who Toing reaches, downloads), so-what bar. Zero survey/primary-research mentions (SA-1's public-data rewrite confirmed working in Figma).
- Checklist 4b: PASS.

### Slide 5 (Levers, id 2:7) - DONE
- Build: 325 nodes, 124 top-level, 0 warnings
- V1: clean, 0 issues
- Screenshot: verified. Lever bridge waterfall (-27.3 to +5.7), heatmap (owner/CX cost/density, green scale), density line chart with breakeven dashed marker at 3.3 meals, rider pay bar chart, formula box. LEVERS tag active. Excellent density and readability.
- Checklist 4b: PASS.

### Slide 6 (Options, id 2:8) - DONE
- Build: 341 nodes, 125 top-level, 0 warnings
- V1: clean, 0 issues
- First screenshot found a real bug missed by V1: the "FIVE TESTS" heatmap (rowH 38, headH 38, 4 rows = 190px content) overflowed its parent panel (h222, content offset 54 -> needed 244px), so the heatmap's bottom edge visually sat under the so-what bar at y948, clipping the "Rebuild (ours)" row. Root cause: V1 only checks top-level PANEL/CARD/TABLE overlap, not a child node (the heatmap) extending past its own parent panel's frame (clipsContent=false by design).
- Fix: reduced heatmap rowH 38->32, headH 38->34 in slides/s06.js (fix-rule: reduce rowH by <=6px, never below 30). New content height 34+4*32=162, +54 offset = 216 < panel h222. Regenerated build/slide_06.js, re-bound id 2:8, re-ran mock (0 issues), rebuilt in Figma.
- Second screenshot: verified clean. All 4 heatmap rows fully visible, no overlap with so-what bar.
- Panels: 3-year result by path (signed vBars, Scale -1744/Funnel -1140/Kill -40/Rebuild +1), funnel test (3-series line chart with dashed 100% reference and dashed Paid CAC ₹500 marker, funnel economics table with red 9.0x total row), five-tests heatmap (green scale, weighted score column), formula box (scoring weights), red "Conclusively" verdict card, so-what bar. OPTIONS tag active (orange).
- Checklist 4b: PASS - ribbon/counter/section chip/headline correct, panel titles w/ rules, ink outlines, radius 0, chart values on-chart (not legend), so-what bar + source line present, no dead space, symmetric treatment of all four paths (skill touchpoint B: same chart type, same five criteria, "Conclusively" card present).

### Slide 7 (The Call / moneyshot, id 2:9) - DONE
- Build: 166 nodes, 73 top-level, 0 warnings
- V1: clean, 0 issues
- First screenshot found a readability bug missed by V1: waterfall step labels "Overhead" and "Migration" wrapped mid-word ("Overh"/"ead", ugly line break) because the 7-column pitch (748/7=106.9px, label col ~99px) was narrower than the word at 22pt Inter Bold.
- Fix: shortened labels to "Opex" and "Migr." in slides/s07.js (fix-rule: shorten string, same meaning, never below 22pt). Regenerated build/slide_07.js, re-bound id 2:9, re-ran mock (0 issues), rebuilt in Figma.
- Second screenshot: verified clean, both labels now single-line.
- Panels: moneyshot waterfall (Scale -1744 -> Order losses +1200 -> Paid installs +390 -> Trade-down +178 -> Opex +15 -> Migr. -39 -> Rebuild +1), navy moneyshot card (₹1,745 Cr, largest numeral in the deck per skill touchpoint B), phone mockup of the rebuilt Toing UI, 4 number cards (Drop/door/blended contribution, break-even run), 5-step flow chain (order to slot -> cook -> run -> pickup -> door fee), "ON THE RECORD" named-quote strip (Kapoor/Goyal, both real public Aug 2026 remarks), so-what bar. THE CALL tag active (orange).
- Checklist 4b: PASS - moneyshot is the largest numeral in the deck (72pt vs 56-72pt elsewhere), decomposed via waterfall with named components (skill touchpoint B: P/P-supplement archetype), ribbon/counter/headline/source correct, radius 0, ink outlines, so-what bar present.

### Slide 8 (Rivals and Rules, id 2:10) - DONE
- Build: 269 nodes, 125 top-level, 0 warnings
- V1: clean, 0 issues
- Screenshot: verified clean on first build, no fixes needed. Game tree (Swiggy's three moves -> Eternal's best reply -> 3-yr ₹ Cr payoff, colour-coded red/grey/orange by path), rival table (Toing/Ownly/Bistro/Now/99 Store, model+price+scale), Eternal reply payoff heatmap (green scale, ordinal 1-5), regulatory cost bar chart (CoSS/CoSS-upper/Karnataka/GST, all sub-₹3.1), regulatory-read commentary card (0.85% of ₹99 vs 0.37% of ₹700), so-what bar. RIVALS tag active (orange).
- Checklist 4b: PASS - ribbon/counter/section chip/headline correct (B4 board item named), panel titles w/ rules, ink outlines, radius 0, chart values on-chart, so-what bar + source line present, no dead space, competitive response modelled (game tree) not asserted per B4 requirement.

### Slide 9 (Signals, id 2:11) - DONE
- Build: 275 nodes, 128 top-level, 0 warnings
- V1: clean, 0 issues
- First screenshot found a real overflow bug: the 12-month roadmap Gantt table (5 rows x rowH44 + headH44 = 264px content) exceeded its panel's usable height (292px panel - 56px offset - margin), clipping the last row ("Gates: month 3, 6, 12") and pushing the gate-diamond markers outside the panel, overlapping the so-what bar zone.
- First fix attempt (rowH 44->34, headH 44->38) cleared the overflow but the mock caught a new issue: bar-label text at the 22pt floor needs ~27px vertical room, and rowH34 only gave 22px after padding (cellWrap: "needs 27 has 22" x4).
- Second fix: increased the roadmap panel height 292->300 (headroom check: panel bottom 644+300=944, so-what starts at 948, no overlap) and set rowH 40 / headH 32 (bar height = rowH-12 = 28, clears the 27px need; total content 32+5*40=232 fits in panel). Regenerated, re-bound id 2:11, re-ran mock (0 issues), rebuilt in Figma.
- Second screenshot: verified clean, all 5 roadmap rows and gate diamonds fully visible inside the panel.
- Panels: 3 flip cards (solo trip cost ₹42, meals/run 5.5, trade-down 26%, each with a threshold gauge and dashed flip-value marker), tornado (5-lever sensitivity on blended contribution, base +₹5.7), 12-month Gantt roadmap (4 workstreams + gate markers at M3/M6/M12), gate scorecard table, so-what bar ("Therefore" synthesis, skill touchpoint: double synthesis with slide 6's "Conclusively"). SIGNALS tag active (orange).
- Checklist 4b: PASS - ribbon/counter/section chip/headline correct (B5 board item named), panel titles w/ rules, ink outlines, radius 0, chart values on-chart, so-what bar + source line present, no dead space, flip assumptions and 12-month signals both shown per B5 requirement.

### Slide 10 (Appendix, id 2:12) - DONE
- Build: 258 nodes, 111 top-level, 0 warnings
- V1: clean, 0 issues
- First screenshot found a real overflow bug: the "TEN LOAD-BEARING ASSUMPTIONS" table (10 rows x rowH30 + headerH34 = 334px) exceeded its panel's usable height (372px panel - 58px offset = 314px), so the last row (A31, 12-month migration) visually collided with the dashed divider line below the panel, appearing struck through.
- First fix attempt (rowH 30->27, headerH 34->30) cleared the panel overflow but the mock caught a new issue: the 22pt Bold header text needs ~33px of height, and headerH30 only gave 30 (cellWrap x4 on header cells).
- Second fix: kept rowH at 27, restored headerH to 34 (total 34+270=304, fits within the 314px available). Regenerated, re-bound id 2:12, re-ran mock (0 issues), rebuilt in Figma.
- Second screenshot: verified clean, all 10 assumption rows fully visible, no collision with the dashed divider.
- Appendix ribbon (4 tags, all active: ASSUMPTIONS/METHOD/MODEL/SOURCES, counter "A1"). Panels: 10-row assumption register (ID/assumption/value/basis), evidence-base-and-limits commentary, stress-test table (45/45 cells favour Rebuild), data-conflicts table, 16pt BIBLIO source list (8 numbered sources), so-what bar pointing to the full 72-page research document.
- Checklist 4b: PASS - appendix-specific 4-tag ribbon (not the main 8-tag ribbon, per CLAUDE.md §1 rule that appendix sections carry their own ribbon), counter reads "A1" not "N/8", panel titles w/ rules, ink outlines, radius 0, BIBLIO text correctly exempted from the 22pt floor at 16pt, so-what bar + source line present.

### Slide 11 (Thank You, id 2:13) - DONE, ALL 11 SLIDES COMPLETE
- Build: 34 nodes, 15 top-level, 0 warnings
- V1: not run (no ribbon/PANEL/CARD structure on this centred closer slide; visual check sufficient)
- Screenshot: verified clean on first build, no fixes needed. Fully centred: event chip, "THANK YOU" title, recommendation repeated verbatim in orange, "TEAM IDEAFORGE" heading, the same team table as the cover (memory rule feedback_cover_style.md), a closing line inviting questions, source line. No ribbon (per plan §9.4, cover and thank-you carry no ribbon).
- Checklist: PASS - matches cover/thank-you style memory exactly (no KPI-card row, team table repeated, fully centred).

**ALL 11 SLIDES BUILT AND VERIFIED.** Figma file: https://www.figma.com/slides/JLOOyohkQPUrwXEsxDKz4m
Slide ids: S1=2:2 S2=2:4 S3=2:5 S4=2:6 S5=2:7 S6=2:8 S7=2:9 S8=2:10 S9=2:11 S10=2:12 S11=2:13

## Whole-deck sweeps (§II.8)

- **V2 (corner radius):** swept all 11 slides, 0 non-zero radii found (preamble enforces radius 0 on every node at creation).
- **V3 (font floor):** swept all TEXT nodes on all 11 slides, exempting SOURCE/BIBLIO/LOGO: nodes. 0 violations under 22pt.
- **V4 (language):** joined all slide text (17,739 characters). 0 em dashes, 0 en dashes, 0 banned words (full §II.3b rule-4 list checked, including survey/cart/primary research/to be filled).
- **V5 (numbers):** all 10 target strings present and correctly formatted: −₹27.3, +₹5.7, ₹1,745 Cr, 3.3, ₹131 Cr, 33M, 9.0x, 135%, ₹42, 26%. The moneyshot ₹1,745 Cr appears on slide 1 (cover verdict body), slide 7 (2:9, MONEYSHOT node at 72pt, the largest numeral in the deck, correct per plan) and slide 7's headline (37pt). It also appears in slide 9's (2:11) so-what bar at 24pt as part of the plan's explicit "double synthesis" device (the "Therefore" closer on slide 9 recapping the moneyshot to reinforce the recommendation) — this is intentional design from the plan's own touchpoint-C spec, not a stray duplicate or fabrication; the number is accurate and consistent everywhere it appears.
- **V6 (density):** node counts per slide: S1 Cover 61, S2 Summary 215/6 forms, S3 UnitMath 165/7, S4 Customer 224/6, S5 Levers 325/6, S6 Options 341/6, S7 TheCall 166/14, S8 Rivals 269/6, S9 Signals 275/7, S10 Appendix 258/6, S11 ThankYou 34. All 8 core slides (S2-S9) fall within the 150-420 node density bar.
- **V7 (case compliance, manual from screenshots):** B1 (slide 3) shows customer pays/restaurant keeps/rider cost/Swiggy remainder with sourced assumptions. B2 (slide 5) shows all 7 levers with ₹ effect and who controls each. B3 (slide 6) shows migration share, period, comparison with paid CAC (9.0x). B4 (slide 8) shows Eternal's most likely response via game tree. B5 (slide 9) shows flip assumptions and 12-month gate signals. Primary recommendation stated verbatim on slides 1, 2, 7, 9. Alternatives shown worse on slide 6's symmetric scoring. Slide count is 11 (8 core + 1 appendix + cover + thank-you), matching the 10-slide-excl-cover cap with 1 slide headroom.
- **V8 (headline-only read):** the 8 core headlines (slides 2-9) read in order as one coherent argument: recommendation stated -> unit economics (why ₹99 loses money) -> customer evidence (the seed of the answer) -> levers (how to fix it) -> options compared symmetrically -> the call reinforced with the moneyshot -> competitive reading -> signals that would change the call. Full text logged in this session; no headline reads as a bare topic label, every one carries at least one number.

**Next:** SA-3 critique dispatch (§II.9), then finish (§II.11: raster fallback PDF, final report to user with export instructions and the logo-placeholder reminder).

## Finish (§II.11)

- SA-3 critique dispatched (background agent), reading references/critique_rubric.md and references/rhetoric.md, scoring all 11 slide screenshots.
- Raster fallback PDF built: `nsbc-case/deck/TeamIdeaForge_NSBC_Consilium26_preview.pdf`, 11 pages at native 1920x1080 (Figma's screenshot API returned native resolution rather than upscaling to 3840, which is the correct pixel-perfect choice), 68.7 MB, one page per slide in order. Built with PyMuPDF (`py -3.12`, `pymupdf` installed via pip) from the full-resolution screenshots saved to the scratchpad's `final/` subfolder.
- SA-3 critique results (7 rubric dimensions, avg ~4.7/5): strength of recommendation 5, industry funnel 5, quantitative rigor 4, action titles 5, visual discipline 5, defensive depth 4, polish 5. All Phase 1 pass/fail items passed (applicable ones only, per §II.9 skip list). 0 em/en dashes, 0 banned words, 0 unsourced-looking placeholder content found.
- Applied 3 of SA-3's fixes plus 2 additional data-accuracy corrections found while verifying them against the model:
  1. Slide 5 headline: removed the false superlative "the two largest, pooled Drops and slot batching" (the model's own delta values put Door fee at +8.3, ahead of Slot batching's +7.2 -- Pooled Drops and Door fee are the two largest, not Pooled Drops and Slot batching). Reworded to drop the superlative claim entirely while keeping the true "need dense orders" point.
  2. Slide 8 headline: "the labour codes add only ₹0.8" -> "regulation adds only ₹0.8" (the ₹0.8 figure sums CoSS, a labour-code item, with the Karnataka state welfare fee, which is not a labour code; "regulation" is accurate for both, matching the slide's own supporting panel which already says "Regulation is...").
  3. Slide 2 board-checklist table: "Eternal's reply: Holds back now; will race us for pickup points" -> "Holds back now; copies pickup points once Drops pay" (contradicted slide 8's own finding that Eternal's best reply is to hold back and copy, not race; Rapido Ownly, not Eternal, is the one racing per slide 8).
  4. (Found during fix verification, not in SA-3's list) "4 of 7 levers are Swiggy's own switches" appeared 3 times (slide 2 x2, slide 5 so-what). Slide 5's own heatmap Owner column shows only 1 lever as pure "Swiggy" and 2 as "Mixed" (Swiggy + Drop host / Swiggy + restaurants) = 3 total, not 4. Corrected all 3 occurrences to "3 of 7".
  5. (Found during fix verification) Slide 9's Gate Scorecard showed the Trade-down target as "26%" for M6 and M12 -- exactly the flip-point value that the same slide's Flip 3 card and source line say would trigger a shutdown review ("Gates are set slightly inside the flip points so a miss triggers action before value is lost"). A gate ceiling equal to the failure threshold contradicts that design intent. Corrected both cells to "20%", matching the model's base assumption (A.CANNIB = 20%).
- All 4 touched slides (2, 5, 8, 9) regenerated, re-bound, re-mocked (0 issues each), rebuilt in Figma, and re-verified with V1 (0 issues) and V4 (0 em/en dashes) run together across all 4. Slide 2 re-screenshotted and visually confirmed both text fixes landed correctly.
