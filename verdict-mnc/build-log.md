# Build log: Project Perennial (HarvestBox, Verdict 2.0)

Plan: `verdict-mnc/PLAN.md` (byte copy of `C:\Users\harsh\.claude\plans\working-folder-verdict-mnc-binary-pizza.md`).
Build started: 9 Oct 2026.

## B0, B1: Bootstrap

STATUS: PASS. `extract.py` wrote 17 files (model, deck palette/extras/slides/gen/setup/validators for Stage 2, review
miner, assembler, case brief).

## B3: Touchpoint A (skill, generate mode)

`case-competition-deck` skill loaded. Checked against PLAN.md section 3: contrarian recommendation present (A rebuilt
against A/B/C as written, section 3.2), foreshadowing seed present (dinner map in sections 9-10, named in 2, paid off in
17), symmetric treatment present (sections 13-15 one template per proposal, section 11 one template per precedent),
three scenarios present (bear/base/bull, section 20), one moneyshot present (break-even month 21, section 19), double
synthesis present (section 16 "Conclusively", section 24 "Therefore"), action titles present (all H2 titles in 8.2 are
findings with numbers). The skill has no turnaround/cohort finance method; the model (section 17) supplies it. This note
goes into document section 0 verbatim.
STATUS: PASS.

## R3: Writers (batch 1: W-A, W-B, W-C)

W-A (sections 0-4): STATUS PASS. `research/parts/part-A.md`. Self-check: 9,025 words, 22 tables, 0 dashes, 0
exclamations (total exceeds the part's combined minimum of 8,000 words / 21 tables). Section 1 covers all 74 case IDs.
Honest reading from plan section 4 included in full at §2.7, restated at §4.6.

W-C (sections 9-12): STATUS PASS, after one rate-limit resume (agent built on its own partial file, no restart). Self-
check: 12,191 words, 24 tables, 0 dashes, 0 exclamations (min 11,000/24). Per-section: §9 3,497w/6t, §10 2,533w/5t,
§11 3,641w/8t, §12 2,512w/5t, all above floor. Used Gousto's CORRECTED 55% margin throughout. Never cited the dropped
HelloFresh figure. Four India RTE market reports presented side by side, not averaged. Gaps logged honestly (per-meal
cook-from-scratch cost, cooking-only time-use split, Indian meal-kit-specific private-label share, Gousto/Home
Chef/Factor75 standalone marketing %, any Indian chilled RTE brand at scale, exact Indian modern-trade listing terms).

W-B (sections 5-8): STATUS PASS, after one rate-limit resume (agent built on its own partial file, no restart). Self-
check: 10,418 words, 23 tables, 0 dashes, 0 exclamations (min 10,200/23). Per-section: §5 2,490w/5t, §6 2,658w/6t,
§7 3,029w/7t, §8 2,233w/5t, all above floor. Three-way retention conflict presented with provider/date/caveats; the
unverifiable 1010data ~10% figure deliberately left untagged (no S-ID exists) rather than given a fabricated tag, with
its status stated in prose. HelloFresh dropped figure never cited.

## R3 batch 1 complete: parts A, B, C all pass

Dispatching batch 2: W-D (13-16), W-E (17-20), W-F (21-24).

## R3: Writers (batch 2: W-D, W-E, W-F)

W-F (sections 21-24): STATUS PASS. `research/parts/part-F.md`. Self-check: 11,640 words, 23 tables, 0 dashes, 0
exclamations (min 9,800/23). Per-section: §21 3,642w/5t, §22 3,077w/7t, §23 2,312w/5t, §24 2,601w/6t, all above floor.
§21 and §24 use the FSSAI revised 1 Apr 2026 turnover thresholds, tagged `[S64]`. §24 closes with "Therefore". Gap
logged: no FSSAI-sourced cold-chain unit-cost benchmark found, stated explicitly rather than cited unverified. §22's
90-day ₹1.8 Cr line-item split flagged as a team planning assumption (model gives only the ₹1.8 Cr total), arithmetic
shown summing exactly.

## R1: Verifiers (batch 1: V-A, V-B, V-G)

V-B (global meal-kit precedents): STATUS PASS. `research/raw/R-B.md`, 54 rows (RB01-RB54). VERIFIED 33, CORRECTED 1,
UNVERIFIABLE 20. Changed numbers: Gousto gross margin corrected 53% (seed, blog) to 55% (Grocery Gazette, 13 May 2026,
primary trade press). HelloFresh "18.2% marketing / 7.6M subscribers / EUR10.72bn revenue" conflict resolved by dropping
it entirely (no verified HelloFresh FY reaches EUR10.72bn; FY2025 prelim is EUR6.76bn); flagged in `## Conflicts`, not to
be cited. Factor75 "EUR2,000m in 2023" blog claim flagged unreliable against verified group RTE segment of EUR1.4bn
FY2023. Blue Apron six-month retention conflict (Second Measure 28% vs 1010data ~10%) recorded, flagged for Lane C to
reconcile since the 10% figure is a Lane C seed. Gaps: Home Chef B1-B4 unfetched, no B7 quote for Blue Apron/Gousto/Home
Chef.

V-G (review mining, Lane G): STATUS PASS. `research/raw/R-G-review-mining.md`. 8,052 reviews across 6 apps (HelloFresh
4,000, CookUnity 2,546, Home Chef 650, EveryPlate 611, Green Chef 168, Dinnerly 77); four apps above the 300 floor.
Seven precisions: W1 90%, W2 70%, W3 80% (after one permitted codebook fix), W4 70%, W5 65% (indicative), X1 95%, X2 85%.
Section 7.3 fix applied once, to W3 only (dropped the bare `|selection` alternative; precision 50%→80%, measured share
moved away from the case's figure, not toward it). Review mix vs case: W1 42.5% vs 34% (+8.5), W2 16.2% vs 27% (−10.8),
W3 1.8% vs 18% (−16.2, largest gap), W4 12.4% vs 11% (+1.4, closest), W5 27.1% vs 10% (+17.1). Confirms rigidity as the
top reason; does not support the case's menu-repetition weight; delivery problems far more prominent among real
customers than the case implies for HarvestBox.

V-A (Indian convenience-food market): STATUS PASS. `research/raw/R-A.md`, 36 rows (RA01-RA36). VERIFIED 31, CORRECTED 1,
UNVERIFIABLE 4. Changed numbers: RA01 corrected. Seed claimed IMARC RTE meals market $5.75bn (2024) to $11.74bn (2033),
CAGR 8.26%; live IMARC page (9 Oct 2026) shows $6.2bn (2025), $6.8bn (2026), $12.3bn by 2034, CAGR 7.61% (2026-2034).
Key finding: A1 (market size) has a severe conflict, four named reports (IMARC, Ken Research, Technavio, GlobalData)
disagree 4-25x on size and 7.6%-28.8% on CAGR due to differing product scope; writers must not average or pick one as
"the" figure, section 9 must state the spread. A2: no credible meal-kit-specific (narrower than RTE) India market-size
figure exists; flagged as a gap. A6: only combined "domestic work" time exists (NSO 2019), not a cooking-only or
working-couples split; two secondary summaries conflict (25 vs 97 min for men). A7: only generic grocery private-label
share found (4.5-6%), nothing meal-kit-specific. No figure for "Snacc" found.

## R1: Verifiers (batch 2: V-C, V-D, V-E)

V-D (Indian meal kits and fresh-food subscriptions): STATUS PASS. `research/raw/R-D.md`, 49 rows (RD01-RD49). VERIFIED
42, CORRECTED 1, UNVERIFIABLE 6. Changed numbers: RD20 Licious FY24 net loss corrected from an Inc42 headline figure of
₹294 Cr to the article's own body figure of ₹298.6 Cr (own-source discrepancy, not a plan seed). All four plan seeds
(Chef's Basket, Burgundy Box, iChef, EatFresh) checked out as stated. Extended with Licious, FreshToHome, Country
Delight, iD Fresh, FreshMenu, EatFit, Rebel Foods (D2); Licious ready-to-eat line and ITC Kitchens of India (D3, no
chilled-RTE Indian precedent found, logged as a gap); general-trade vs modern-trade margin figures (D4). Conflicts
logged: Licious FY25 revenue (₹795 Cr vs ₹797.2 Cr across two articles), Country Delight valuation ($731.1M vs $758M).

V-E (food safety, cold chain, operations): STATUS PASS. `research/raw/R-E.md`, 58 rows (RE01-RE58). VERIFIED 17,
CORRECTED 2, UNVERIFIABLE 39 (fssai.gov.in FAQ pages returned HTTP 403 on every direct-fetch attempt; Schedule 4 hygiene
facts could only be sourced as [blog] paraphrases). Changed numbers: RE02 FSSAI turnover thresholds revised effective
1 Apr 2026 (registration to ₹1.5 Cr, state licence ₹1.5 Cr to ₹50 Cr, central licence above ₹50 Cr, superseding the old
₹12 lakh/₹20 Cr bands) — writers must use the revised figures for HarvestBox's proposed kitchen. RE33 refrigerated-truck
market corrected from a search-summary ₹6.4 bn (2023) to the directly-fetched IMARC report's ₹7.4 bn (2024). Seed "4°C
or below" chilled storage refined to a 1-5°C refrigeration / 0-8°C distribution range with a 5°C danger-zone threshold,
but this refinement itself is UNVERIFIABLE (no FSSAI-direct confirmation). Seed 30%/45-day e-commerce shelf-life rule
VERIFIED via a government-broadcaster source. Gap flagged: no source resolves whether the 45-day rule applies to
short-life chilled ready-to-eat food specifically, a real tension for HarvestBox's Proposal C.

V-C (retention, CAC, referral benchmarks): STATUS PASS. `research/raw/R-C.md`, 37 rows (RC01-RC37). VERIFIED 10,
UNVERIFIABLE 27, CORRECTED 0 (primary pages for several seeds, mckinsey.com, fastcompany.com, thefern.org, returned
403 or timed out; figures carried as UNVERIFIABLE rather than upgraded). Schmitt/Skiera/Van den Bulte 2011 Journal of
Marketing paper read directly (RC20-26); David Skok's original 3:1 LTV:CAC rule article read directly (RC30-31, C7).
Three-way retention conflict recorded: 1010data ~10% at 6 months (Oct 2016, UNVERIFIABLE, press-only); Bloomberg Second
Measure 28% for Blue Apron at 6 months (May 2016, VERIFIED by V-B, direct read); HarvestBox's own case figure 34%
`[C R3]`. V-C recommends writers present the 1010data and Second Measure figures side by side with provider, date and
caveats rather than using either as sole support for "HarvestBox leaks less than its peers." Separate conflict: McKinsey
cross-category 38%/62% churn vs Eightx's meal-kit-specific 8-15%/month estimate, different category definitions.

## R1: Verifiers (batch 3: V-F, dispatched after batch 2)

V-F (retail and private label): STATUS PASS. `research/raw/R-F.md`, 38 rows (RF01-RF38). VERIFIED 21, UNVERIFIABLE 17,
CORRECTED 0. Kroger/Home Chef ($1bn milestone, 118% 2020 growth), Walmart's 2018 launch and quiet Aug 2024
discontinuation (no stated reason, confirmed on Walmart's own page), M&S "In the Bag" UK trial all VERIFIED direct-fetch.
Albertsons/Plated rows (acquisition $219.5m Sept 2017, home-delivery phase-out Nov 2019) UNVERIFIABLE, primary pages all
403'd; no stated reason for the wind-down found anywhere (same "no stated reason found" convention as Lane D). India
private-label: three data points (2012/13 baseline 4.5% overall/30-50% staples; 2025 EY Future Consumer Index attitudes;
BigBasket's own ~40% FY24 private-label share) all VERIFIED but flagged as measuring different things, must not be
combined into one figure. F2 (brand dilution) and F5 (chilled-product store velocity) are near-total gaps, no
meal-kit-specific or India-specific quantified study found for either.

## R1 complete: all six lanes and review mining verified

R-A through R-F and R-G-review-mining.md all written. Proceeding to R2 (source register).

## R2: Source register

`research/raw/build_sources.py` written and run. Parsed all six lane files, kept only VERIFIED and CORRECTED rows,
deduped by URL. `research/raw/sources.md` written: 75 sources, S01 reserved for the case PDF, S02 to S76 assigned in
lane order (A, B, C, D, E, F), each row carrying its R-IDs for traceability.

### Corrections for writers

None of the six verifiers' corrections touch a locked number in PLAN.md sections 3 to 5 (all locked numbers are from the
HarvestBox model, which is independent of these lanes). The corrections that matter for writers are already carried in
the R-*.md files themselves, which the writer prompt tells writers to read directly rather than this plan's seed text.
Flagged for writer attention regardless:
- Use Gousto's CORRECTED 55% gross margin (R-B, RB17), not the 53% seed.
- Do not cite the HelloFresh "18.2% marketing / 7.6M subscribers / EUR10.72bn revenue" figure under any circumstance
  (R-B flags it unreliable; no verified HelloFresh fiscal year matches that revenue figure).
- Use FSSAI's revised turnover thresholds effective 1 Apr 2026 (R-E, RE02) for any discussion of licensing for
  HarvestBox's proposed ready-to-eat kitchen, not the pre-amendment bands.
- Section 9 (market context) must present the four India RTE/ready-meals market-size reports (IMARC, Ken Research,
  Technavio, GlobalData) side by side with their differing scopes, never averaged or presented as one figure (R-A
  Conflict 1).
- Section 6 (unit economics) should present the three-way retention conflict (1010data ~10%, Bloomberg Second Measure
  28% for Blue Apron, HarvestBox's own 34%) with provider, date and caveats rather than treating any one as "the"
  benchmark (R-C, cross-referencing R-B).
STATUS: PASS.

## M1: Model

`python -X utf8 verdict-mnc/model/harvestbox_model.py` — 14/14 PASS, `HASH 06111c6c33` (matches plan section 4 exactly),
`FINDINGS [135, 146, 134, 146, 150]` (matches plan exactly). Wrote `model_outputs.json`, `model_tables.md`,
`deck/values.js`.
STATUS: PASS.

W-D (sections 13-16): STATUS PASS. `research/parts/part-D.md`. Self-check: 10,574 words, 24 tables, 0 dashes, 0
exclamations (min 10,000/23). Per-section: §13 2,452w/6t, §14 2,651w/6t, §15 2,848w/6t, §16 2,622w/6t, all above floor.
Sections 13-15 use one identical symmetric template. §16 closes with "Conclusively". Self-correction during drafting:
first pass on §15.5 cited unverified vendor-page shelf-life/MAP/HPP day-counts (RE24-28, no S-ID); writer caught this
against its own rule and rewrote the passage to state the gap qualitatively instead, using only VERIFIED FSSAI
30%/45-day rule and refrigerated-truck market size. Other gaps logged honestly: no modern-trade listing-fee/credit-day
figure, no quantified brand-dilution study.

W-E (sections 17-20): STATUS PASS. `research/parts/part-E.md`. Self-check: 13,241 words, 35 tables, 0 dashes, 0
exclamations (min 12,600/32). Per-section: §17 3,524w, §18 3,286w, §19 3,416w, §20 3,011w, all above floor. Full honest
reading from plan section 4 carried without softening in §19.6 and §20 (break-even not profit; every sensitivity
downside turns the run-rate negative; bear survives 24 months only with the month-7 contingency; referral/win-back/
conversion, the largest bridge step at +₹3.77 Cr, rests on A10 and A14, the thinnest-evidence assumptions). Disclosed
that the model bundles referral/win-back/conversion into one step rather than splitting them, stated rather than
invented.

## R3 complete: all seven writer parts pass

Parts A through F done; dispatching W-G (sections 25-28 plus appendices D, E, F), which also reads parts A-F.

W-G (sections 25-28 plus appendices D, E, F): STATUS PASS. `research/parts/part-G.md`, `appendix-D.md`, `appendix-E.md`,
`appendix-F.md`. Self-check: 15,458 words, 23 tables, 0 dashes, 0 exclamations (min 11,200/17). Per-section: §25
2,923w/5t, §26 1,439w/4t, §27 4,974w/2t, §28 1,040w/2t (under its own 1,200 floor by ~160 words; combined total
comfortably clears), appendix D 1,585w/5t, appendix E 1,366w/2t, appendix F 2,128w/3t. Main agent fixed §28 directly:
added section 28.4 (rehearsal method), now 1,269 words, 0 new dashes/exclamations. Section 27's 40 questions each
formatted `**Q#.** "..."`, quoted question mark the sole exception to the no-question-mark rule, grep-verified clean.
Appendix E opens stating no interview/survey/pilot has been run. Appendix F reproduces every `## Conflicts` entry from
R-A through R-F.

## R3 complete: all seven writer parts and three appendix files pass

Proceeding to R4 (assembly).

## R4: Assembly

`python -X utf8 verdict-mnc/research/assemble.py md` — first run FAILED on 3 banned-word hits: "leverage" (part-C.md,
legitimate Porter's-forces usage), "revolutioniz" and "realm" (both verbatim substrings inside real external source
titles/company names in the bibliography and a precedent table: "How Licious revolutionized meat sales in India",
"FreshRealm"). Fixed: reworded the one "leverage" usage in part-C.md to "bargaining power"; edited `assemble.py` so the
dash/exclamation/banned-word voice checks scan only the team's own authored prose (parts A-G plus appendices D, E, F),
never Appendix A's verbatim external source titles (never rewrite a cited article's actual title to dodge a house-style
rule) or the code-generated Appendices B and C; added a word-boundary to the banned-word regex so it cannot match
inside a compound proper noun like "FreshRealm". Word and table minimums still count the whole document. Rerun:
**ASSEMBLY PASS**. 87,206 words (min 50,000), 193 tables (min 110), 0 dashes, 0 exclamations, 0 banned words, 29
`**Answer.**` leads (min 24), 65 sources cited and all resolved (missing_S empty), 0 duplicate headings.
`research/harvestbox-research.md` written.
STATUS: PASS.

## R5: Touchpoint D and PDF export

Touchpoint D: slide mode check of section 26 against `references/archetypes.md`. W-G already built the mapping table
at section 26.2 during R3, mapping each of the 7 slides to named archetypes. Verified the vocabulary used
(hub-and-spoke, dashboard-grid, quadrant-hero, KPI-hero, timeline-hero, table-wall, band and rail) against
`CLAUDE.md` section 3 and `deck-system/slide-archetypes.md`: all seven terms confirmed as the project's actual named
catalogue, not invented terms.
STATUS: PASS.

`assemble.py` patched from `iim-lucknow-pivot/research/build_pdf.py` (all 6 string replacements matched exactly as
predicted at planning time) and run: `research/harvestbox-research.pdf` written, 130 pages, 5,293,204 bytes (well
above the 500 KB floor). Rendered with PyMuPDF and viewed page 1 (cover, correct green/gold palette, team, event
branding) and page 21 (dense content page: tagged arithmetic shown inline, three tables, source citations) — both
render correctly.
STATUS: PASS.

## R6: Critique (touchpoint C) and fixes

Critic CR dispatched with prompt 12.4. Result: all phase-1 pass/fail items PASS. Dimension scores: recommendation
strength 5, industry funnel 5, quantitative rigor 5, action titles 5, visual discipline (adapted) 5, defensive depth
5, polish 4. Added tests (i) all D1-D4 deliverables answered PASS, (ii) honest reading present in §19/§20 without
softening PASS. 25/25 spot-checked numbers matched `model_tables.md` and the case brief exactly. `research/critique.md`
written. 4 issues found (1 important, 2 moderate, 1 minor), all fixed directly (mechanical/disclosure fixes, no locked
number, recommendation or H2 title touched):
1. IMPORTANT: T9's "24-month revenue vs no decision" column silently mixed year-1-only and 24-month-cumulative bases
   across its four rows, apparently contradicting §13.2's own +₹4.6 Cr year-2 figure for Proposal A. Fixed: added a
   disclosure paragraph to §16.2 (part-D.md) stating which basis each row uses and that it does not change any score,
   plus a cross-reference note at the end of §13.2 pointing to it.
2. MODERATE: ~a third of citation tags used plain brackets instead of the stated backtick convention. Fixed: wrote a
   script that backtick-wraps every plain-bracket case/assumption/model/source/review tag across all ten part and
   appendix files (code-span aware, skipped already-wrapped tags). 525 tags wrapped (234 in part-B.md, 291 in
   part-E.md; the critic's sample under-counted part-E.md's share). Verified no double-backtick artifacts.
3. MODERATE: no standalone table of contents for a ~130-page document. Fixed: `assemble.py` now generates a Contents
   section (all 29 section headings plus the 6 appendix titles) inserted into the .md before section 1. Noted that
   the PDF renderer (`build_pdf.py`, reused from the Dream11 build) already auto-builds its own cover-style contents
   page from every `##` heading, so the PDF had a TOC even before this fix; the .md source did not, and now does too.
4. MINOR: sections 25-28 carry topic-label headings, an unflagged exception to the "every H2 is a locked finding"
   rule. Fixed: added one sentence to part-A.md section 0.5 scoping the action-title rule to sections 2-24 and naming
   25-28 as reference/rehearsal material.

Rerun R4: `assemble.py md` — **ASSEMBLY PASS**, 87,917 words, 193 tables, 0 dashes, 0 exclamations, 0 banned words,
0 missing sources, 0 duplicate headings.
Rerun R5: `assemble.py pdf` — 131 pages, 5,490,956 bytes. Verified the new Contents page renders (viewed with
PyMuPDF).
STATUS: PASS.

## Z1: Stage 1 final checklist (plan section 15.1)

Model: [x] 14/14 PASS, HASH 06111c6c33 matches plan exactly. [x] model_tables.md has T1-T13, spot-checked (25/25 by
the critic) against section 4.
Research inputs: [x] Six R-A to R-F files, each with Gaps and Conflicts (210 total rows: A36, B54, C37, D49, E58,
F38). [x] R-G-review-mining.md with 7 precisions. [x] sources.md has a URL for every S-ID (75 sources, 0 missing).
Research document: [x] ASSEMBLY PASS, 87,917 words (min 50,000), 193 tables (min 110), 0 dashes. [x] Section 1 has a
row for every case ID (74 IDs covered). [x] Sections 13-15 use one template; section 16 ends "Conclusively", section
24 ends "Therefore". [x] Sections 19-20 carry the honest reading without softening. [x] Section 4 states the three
unreconciled case figures. [x] Appendix E opens stating no interview/survey/pilot has been run. [x] No real-company
figure attributed to HarvestBox (critic's check, clean). [x] harvestbox-research.pdf exists, 131 pages, cover and
content pages viewed.
Skill and language: [x] Touchpoints A, D, C, E logged. [x] 0 em/en dashes, 0 exclamations, 0 banned words; question
marks only in section 27's quoted judge questions.

## Z1: Touchpoint E (polish search)

Grepped `research/harvestbox-research.md` for TODO, Insert, Placeholder, TBD, Lorem, xyz, and names from other cases
in this folder (Dream11, Paytm, Liminal, Setu, Maudrik, SwasthyaGrid, FanCode). Zero hits for TODO/TBD/Lorem/xyz and
zero hits for every other-case name. "Placeholder" appears 3 times, all in sections 26.2/26.3/26.4 describing the
deck's own intentional logo-slot design (the plan's own fix-rule table names this exact pattern as a known false
positive, by design, not an error). Document is clean.
STATUS: PASS.

**STAGE 1 COMPLETE** — 9 Oct 2026.

## Stage 2

### D0, D1: Bootstrap and memory

STATUS: PASS. `extract_deck.py` wrote 3 files (`research/rename_labels.py`, `model/patch_labels.py`,
`deck/derive_v2.py`). Memory saved: new file `feedback_no_invented_names.md`, `project_verdict_harvestbox.md`
updated to remove the coined names and record the naming correction, `MEMORY.md` pointers added, before any
further Stage 2 work.

### D2: Research rename

`rename_labels.py` run: 188 lines changed across the seven parts, `changed_lines.json` written. Main agent applied
the research correction from plan section 4 directly to `research/parts/part-F.md`: section 21.2's heat map table
was missing risk 4 (skip rate, probability 2, impact 5 per section 21.1); added it to the "5 (severe)" row and to
the prose naming the four nearest-corner risks (now five).

### D2b: Copy editors (three in parallel)

Copy editor 1 (part-A, part-B, part-C): STATUS PASS. 16 lines edited (9 in A, 6 in B, 1 in C): duplicate naming,
subject-verb agreement after "the operational improvements" (plural), and one "left" entry fixed. Confirmed via
grep: zero reset/Flex/Perennial remain in these three files.

Copy editor 2 (part-F, part-G, appendix-D, appendix-E, appendix-F): STATUS PASS. 13 lines edited (7 in F, 5 in G,
1 in appendix-E; appendix-D and appendix-F needed no edits). Fixed doubled "the", repeated "rebuild" roots, plural
agreement, a lower-case sentence start in a quoted judge question, and both required "left" entries (hyphenated
"operating-reset lever" to "operational-improvement lever", twice). Confirmed via grep: zero reset/Flex/Perennial
and zero "the the" remain in these five files.

Copy editor 3 (part-D, part-E): STATUS PASS. 25 lines edited (9 in D, 16 in E): leftover "reset" phrases, plural
agreement, dropped possessives from the mechanical swap, one broken word order, and both required "left" entries.
Flagged 4 remaining "Reset lever" table cells in part-E.md that fell outside its given line scope (not in either
the "changed" or "left" lists); main agent fixed these directly (1 header, 3 cell references).

### D2b acceptance grep (plan 6.2)

All five greps across all ten part/appendix files return 0: `Perennial`, `\bFlex\b`, `reset` (case-insensitive,
including hyphenated forms), `the the`, and a heading starting with a lower-case word. Clean on the first full
pass after the fixes above.
STATUS: PASS.

### D3: Model relabel, reassembly, PDF

`patch_labels.py` run: labels replaced, model rerun. 14/14 PASS, `HASH 06111c6c33` unchanged (confirms only strings
moved, no number changed), `FINDINGS [135, 146, 134, 148, 150]` matches the plan's prediction exactly. Wrote
`model_outputs.json`, `model_tables.md`, `deck/values.js`.
`assemble.py md`: **ASSEMBLY PASS**, 88,317 words (up from 87,917 after the copy-edit expansions), 193 tables, 0
dashes, 0 exclamations, 0 banned words, 65 sources cited and resolved, 0 duplicate headings.
`assemble.py pdf`: `harvestbox-research.pdf` rebuilt, 5,391,343 bytes.
`grep -c "Perennial"` and `grep -cE "\bFlex\b"` on the final assembled document: both 0.
STATUS: PASS.

### D4: Deck conversion

`derive_v2.py` run: `v2 written 14 files`. `gen.py pre` built `preamble.js` (21,882 chars). `gen.py mock`: all eight
slides print `OK` with `warnings: []` and `ISSUES 0`. Node counts match the plan's prediction exactly: 103, 393,
173, 265, 191, 249, 143, 49.
STATUS: PASS.

### D5: Derivation check

`deck/derivation.md` written: every panel on all eight slides checked against `deck/values.js` and the research
sections named in DECK-PLAN.md section 2. All rows marked "yes", no overrides needed (`deck/overrides.json` stays
empty). Confirmed the four hand-written constants separately: dinner-map prices (§9.2), the Gousto/Blue Apron
precedent lines (§11.9), the risk heat map's twelve risks including the §21.2 fix (risk 4 now at probability
2/impact 5), and the gate thresholds (§24.2). Three research findings with no room on a core slide logged under
"For the talk track": the three unreconciled case figures, the full honest reading (break-even not profit), and
the dropped HelloFresh marketing figure. `gen.py mock` rerun after the check: still eight OK lines, no changes
needed.
STATUS: PASS.

### D6: Touchpoint F

`case-competition-deck` skill (already loaded earlier this session). Checked `f2` to `f5` in `values.js`: all four
are full-sentence findings carrying a number (loss figures, LTV to CAC, break-even month, ₹1.8 Cr / 90 days / 7
KPIs). Confirmed via grep: exactly one `MONEYSHOT` node (slide 4), "CONCLUSIVELY" on slide 3, "THEREFORE" on
slide 5.
STATUS: PASS.

### D7: Figma setup

`whoami` confirmed planKey `team::1564294484048272772`. Calibration: viewed `YoiazGGOribfg69EjEDIlP` nodes `2:2`
(cover) and `2:7` (dense slide) before building. `create_new_file` created "HarvestBox: Growing Without Burning
Out | Team IdeaForge | Verdict 2.0", file key `jpMw7czN5ujU0xJ4xdqPAg`. `setup.js` created and named exactly 8
slides (S1 `2:2` to S8 `2:10`), all four required fonts present. `deck/slide-ids.json` and `deck/figma.md` written.
`gen.py bind`: 8 slide/v1 file pairs plus `v1_all.js`, `sweeps.js`, `logos.js`, all slide files under 50,000
characters.
STATUS: PASS.

### D8: Build slides (in order 2, 3, 4, 5, 6, 7, 1, 8)

Slide 2 (Diagnosis and Evaluation): built, 393 nodes, 0 warnings. V1 found 7 real issues the offline mock missed
(the mock's text-metric approximation under-measures real Figma font width): "Revenue"/"Gone by M3"/"Growth"
headers wrapped into the row below, and "Change"/"−7 pts"/"+8 pts"/"−5 pts" cells wrapped similarly. Fixed at the
source (not via override, since these are durable layout fixes): shortened "Revenue"→"Rev", "Gone by M3"→"By M3",
"Stay past M3"→"Past M3", "Growth"→"Grw" in `deck/slides/s02.js`; shortened the model's `pts()` formatter from
"%d pts" to "%dp" in `model/harvestbox_model.py` (matching the "31p/38p/49p" convention already used on the same
slide) and the hist row label "Change"→"Chg". Reran model (14/14 PASS, hash unchanged `06111c6c33`), confirmed
neither string appears in the research document, reran `gen.py pre`/`mock`/`bind`, rebuilt slide 2. V1 now clean.
Screenshot saved to `deck/shots/s2.png` and viewed: dense, six distinct visual forms, no dead space, comparable to
the Dream11 calibration slide.
STATUS: PASS.

Slide 3 (Strategic Recommendation): built, 173 nodes, 0 warnings, matching the offline mock prediction exactly.
V1 validator returned clean on the first attempt (`clean: true, count: 0`), no fixes needed. Screenshot saved to
`deck/shots/s3.png` and viewed: do-not/do two-card split, skip-rate heat grid, five-feature table, LTV-to-CAC
bar ladder to the 3.0x benchmark, dark "Conclusively" synthesis card. Six distinct visual forms, no dead space.
STATUS: PASS.
