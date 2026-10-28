# BeyondTech GTM build log

All execution from here reads `BT/PLAN.md` only, never the `.claude\plans` path (plan section 0.4).

## Step B0 (10 Oct 2026)

- Created folders: `case/`, `case/inspo/`, `inputs/`, `research/raw/`, `research/data/`,
  `research/parts/`, `model/`, `deck/`, `deck/assets/logos/`, `deck/assets/shots/`.
- Copied `C:\Users\harsh\.claude\plans\working-folder-beyondtech-dcg-dapper-axolotl.md` to
  `BT/PLAN.md` byte for byte (verified with `diff`, 1260 lines, no differences).
- Wrote this build log.
- Wrote `BT/inputs/INPUTS-FROM-HARSH.md` as an empty template (plan step B0).

Next: step B1, transcribe the case brief and the public-footprint and playbook-digest files.
## Step B1 (10 Oct 2026)

- Wrote case/01-beyondtech-brief.md: full verbatim transcription of the 4-page case PDF with B01-B21
  IDs, including the B21 hyperlink block.
- Wrote case/02-beyondtech-public-footprint.md: W01-W17 findings from the three hyperlinks plus the
  founder's Topmate page, all marked status PLAN pending V-A re-verification in Lane A.
- Wrote case/03-organiser-playbook-digest.md: P01-P12 rules extracted from the DCG-authored
  Consulting Pitch Deck Playbook, with each rule's playbook source cited and how this plan obeys it.
- Confirmed the founder is 'Harsh Agarwal', distinct from an unrelated person 'Harsh Agrawal' (ML
  researcher) surfaced in a web search; this distinction is logged so no later file confuses them.

Next: step B2, re-render the six inspiration PDFs and write the inspo deck study (dispatched to a
background sub-agent). In parallel, lead proceeds to touchpoint A (skill, section 10) and then opens
lanes A-C (step B4).

## Touchpoint A (10 Oct 2026, skill case-competition-deck, generate mode steps 1-7)

Read `references/structure.md`, `case_types/strategy.md`, `references/rhetoric.md` (marketing.md and
frameworks.md sections were already folded into PLAN.md section 4 by the planning session; confirmed
consistent on this pass, not re-read in full).

Confirmed: the contrarian-move construction (PLAN.md 4.3) matches rhetoric.md's 5-step pattern; the
governing thought (4.2) functions as the seed/foreshadow per structure.md section II, paid off on
slide 8; symmetric treatment (identical 4-pick-card structure, slide 7-8) matches rhetoric.md pattern
3; three-scenario thinking (bear/base/bull throughout the assumptions register and model) matches
pattern 5; double synthesis (CONCLUSIVELY on slide 7, THEREFORE on slide 10) matches pattern 9;
defensive depth (appendix slide 11) matches pattern 8; action titles throughout section 14.4 match
pattern 10 and 1; moneyshot visual climax rules (pattern 12) match slide 6's design.

Two refinements added as PLAN.md section 4.7: (1) Lane G gets an explicit instruction to capture 2-4
named third-party quotes validating the trust-before-ads mechanism (rhetoric.md pattern 7, previously
under-specified); (2) confirmed the moneyshot's CAC figure is already decomposed by channel via the
slide 6 waterfall, so rhetoric.md pattern 4 needs no separate slide.

No change to the core argument (governing thought, three contrarian moves, moneyshot format, 12-slide
structure). Touchpoint A: PASS.

## Step B2 dispatched (10 Oct 2026)

Dispatched a background Sonnet sub-agent to re-render the six inspiration PDFs into `case/inspo/` and
write `case/04-inspo-deck-study.md` (71 pages across 6 decks; the two not yet studied in depth, IIM A
Winning deck and InnovatED, get full page-by-page coverage; the other four get a spot-check against
the seed diagram-grammar table in PLAN.md section 14.3). Running in parallel with lane dispatch below.

## Step B4 dispatched (10 Oct 2026): Lanes A, B, C

Dispatched three parallel Sonnet verifiers:
- V-A: Lane A, BeyondTech and its founder, re-verifying W01-W17 and the seed facts.
- V-B: Lane B, DTU (intake, placements, non-tech recruiters, calendar, societies.csv).
- V-C: Lane C, demand for non-tech roles from engineering campuses.

## Step B4 complete (10 Oct 2026): Lanes A, B, C

All three verifiers reported back and all cleared the 25-row lane floor:
- **V-A (Lane A):** 50 rows (RA01-RA50) in `research/raw/R-A-beyondtech.md`, 26 sources (S001-S026).
  37 VERIFIED, 4 CORRECTED, 5 NOT FOUND, 2 NOT FETCHED (founder's personal LinkedIn, Drive-link
  access), plus 2 partial FAQ rows. 5 unresolved conflicts logged (WhatsApp message text, callback
  CTA location, follower-count drift, Topmate ratings inconsistency, Suhani Sharma's employer).
- **V-B (Lane B):** 47 rows (RB01-RB47) in `research/raw/R-B-dtu.md`, 19 sources (S050-S068). Found
  DTU's official NIRF 2025 data-submission PDF directly (sanctioned UG intake 2,529/yr, three years of
  placement cohorts), which outranks every aggregator figure per the source hierarchy. societies.csv
  filled to 16 of a 30-row target (4 with verified follower counts, 4 with partial detail, 8 bare
  names only). 4 unresolved conflicts logged, the most consequential being a 3-way mismatch between
  seed F01, the NIRF PDF and Getmyuni on DTU's placement numbers and median package.
- **V-C (Lane C):** 76 rows (RC01-RC76) in `research/raw/R-C-demand.md`, 50 sources (S100-S149), well
  above the 35-60 target. 10 of the 11 brief-named anchor recruiters got real process detail; "Prism"
  (from brief B06) could not be identified as a specific company after 3 search attempts across 4
  candidate companies, logged as a genuine gap for the lead to resolve (possibly needs a direct
  question to the organisers, or NSUT's own placement notices). All facts are status "VERIFIED
  (search result only)" since the lane leaned on WebSearch's own snippets rather than separate
  WebFetch calls; the lane itself flags this as something a follow-up WebFetch pass could upgrade.

**Lead follow-up work on Lane A's two unfinished items (10 Oct 2026):**
- Re-checked all 8 Drive resource links by curl-fetching each page's actual HTML content (not just
  HTTP status) and found a populated `og:title` public-preview meta tag on all 8, with no
  "Request access" text anywhere, which is the genuine signature of an openly shared Drive file as
  distinct from an access-gated one (both return HTTP 200, so status code alone was not sufficient,
  which is why the sub-agent correctly declined to confirm from status alone). Updated RA24 from
  NOT FETCHED to CORRECTED.
- Captured the 4 real-artefact screenshots Lane A's step 8 called for (home hero, admission process
  panel, resources page, LinkedIn company page) via the Chrome browser tools, saved to
  `deck/assets/shots/01-home-hero.jpg` through `04-linkedin-company-page.jpg`. Logged as RA54.
- Two new findings surfaced during the screenshot pass, logged as RA51 (the testimonial strip in fact
  shows 5 people, not 3: adds Soumya Raj at ExxonMobil and Vidhi Balyan at ZS) and RA52 (a second,
  separate "Beyond Tech" LinkedIn page exists with 922 followers, distinct from the 3,017-follower
  page used throughout the lane). Both added to the Conflicts table for Gate G1 to rule on.
- RA53 records an approximate, non-hex description of the visible brand palette (warm orange accent,
  near-black panels, white background) from the screenshots, resolving RA46's "not found" into a
  usable Stage-2 starting point.

Next: Gate G1. Read all three lane files plus `case/04-inspo-deck-study.md`, rule on every logged
conflict (the pre-existing X1-X6 in PLAN.md section 3.3 plus the new ones from Lane A and Lane B),
decide on the Prism gap and the ExxonMobil/"Prism" anchor-recruiter question, update
`02-beyondtech-public-footprint.md` statuses, and write `research/raw/conflicts.md`.

## Gate G1 complete (10 Oct 2026)

Read all three lane files plus `case/04-inspo-deck-study.md` in full. Wrote
`research/raw/conflicts.md`, ruling on all 6 pre-existing conflicts (X1-X6) plus 8 new conflicts from
Lane A, 4 new conflicts from Lane B and 3 from Lane C, plus 2 gaps-carried-forward notes and a
same-ruling note on ExxonMobil (new testimonial evidence, not added to the fixed anchor-recruiter
list, to avoid reopening Lane C's completed work for one data point). Key rulings:
- Seed facts F01 and F02 (DTU placement averages, Eternal's highest package) are retired outright;
  neither independently reconciles to any single source. DTU's own official NIRF 2025 submission
  (RB07) is now the primary source for the graduated/placed/median triplet, named to its specific
  cohort year; Getmyuni (aggregator-reported, "est.") supplies average/highest/branch detail the NIRF
  submission does not carry. The two are never blended into one sentence.
- F03's eight-firm recruiter list is retired as a single claim; each name is now attributed to its
  specific source (Careers360 or CollegeSearch.in, both aggregators) rather than presented as one
  confirmed list.
- "Prism" (brief B06) stays quoted verbatim with no analytical weight: not added to the anchor list,
  not scored in any college's recruiter overlap, since 6 search attempts across two lanes could not
  identify the company.
- The two India test-prep market-size estimates (47x apart) and two of three India Skills Report
  sample-size figures are dropped entirely; only the 2025 Wheebox edition (RC73) is cited, and no
  market-size figure is used as the deck's sizing method (the scorecard stays bottom-up, per the
  plan's original design).
- The testimonial count corrects from 3 to 5 (adds Soumya Raj at ExxonMobil, Vidhi Balyan at ZS).
- The duplicate-LinkedIn-page question (3K followers vs 922) is resolved by using only the page the
  case brief's own hyperlink resolves to.

Updated `PLAN.md` section 14.3: corrected the Street Boyz G3 citation (the traffic-light-dot device is
in that deck's appendix, 3-state, no dashed winner, not on body page 6 as originally written) and
added a summary table of 8 new diagram devices (ND1-ND8) found in the two newly-studied inspiration
decks, with a pointer to the full recipes in `case/04-inspo-deck-study.md`.

Updated `case/02-beyondtech-public-footprint.md` to point readers to `R-A-beyondtech.md` and
`conflicts.md` as the superseding, authoritative sources.

Next: step B5, dispatch Lanes D (competitors), F (channel benchmarks) and G (expansion precedents) in
parallel, the second batch of three verifiers per the plan's max-3-parallel rule.

## Step B5 complete (10 Oct 2026): Lanes D, F, G

- **V-D (Lane D):** 57 rows (RD01-RD57) in `research/raw/R-D-competition.md`, 43 sources (S150-S192),
  `research/data/competitors.csv` with 29 rows across 7 type groups (re-validated with a Python csv
  parser after an initial quoting bug). Key finding: both seed prices (CrackNonTech ₹8,999, NextLeap
  ₹1,322/month EMI) could not be reconfirmed on the live sites and are retired from citation. PM
  School is confirmed acquired by NextLeap (Feb 2025); treated as one competitor, not two.
- **V-F (Lane F):** 58 rows (RF01-RF58) in `research/raw/R-F-channels.md`, 33 sources (S200-S232, plus
  2 slightly out of strict sequence, flagged not fixed). Meta CPM/CPC/CPL figures disagree across every
  2026 source found, including the seed; LinkedIn's general CPC is independently confirmed. The
  WhatsApp 90-98%/45-60% conversion claims trace to one uncredited circa-2021 source and are not usable.
  A25's follower bands need recalibrating to the real nano/micro split (10,000, not 5,000/20,000).
- **V-G (Lane G):** 64 rows (RG01-RG64) in `research/raw/R-G-precedents.md`, 50 sources (S250-S299).
  Found and directly verified the 2 named third-party quotes the touchpoint-A refinement asked for
  (Ghazal Alagh/Mamaearth, Nithin Kamath/Zerodha), both on trust-before-paid-acquisition. Coding
  Ninjas' seed ambassador count (4,000+) is corrected to approximately 1,000 (the 4,000 figure appears
  to be a separate, larger teaching-assistant programme). Flagged that a "Scaler campus ambassador"
  page found is actually a school-level programme, not comparable to a college-level precedent.

**Gate G1, continued:** appended rulings for all new conflicts from this batch to
`research/raw/conflicts.md` (5 from Lane D, 5 from Lane F, 5 from Lane G), plus confirmation of the 2
third-party quotes and the Rogers/Moore/Cialdini/Granovetter citation years. Per PLAN.md section 12,
G1 formally gates on all 9 lanes (A-J); this is the second of three rulings passes, with the third and
final pass due after Lanes H, I, J.

Next: step B6, dispatch Lanes H (rules/claims), I (public student voice) and J (map/logo assets), the
third and final batch of verifiers.

## Step B6 complete (10 Oct 2026): Lanes H, I, J. All nine research lanes now done.

- **V-H (Lane H):** 60 rows (RH01-RH60) in `research/raw/R-H-rules.md`, 30 sources (S300-S329), plus
  the required "claims we can/cannot make" table for slide 10. Primary CCPA/ASCI regulation text could
  not be fetched as readable content anywhere; every clause is sourced to a secondary summary and
  flagged as such throughout.
- **V-I (Lane I):** 37 verbatim quotes (VI01-VI37) in `research/raw/R-I-student-voice.md`, clearing the
  15-quote usability floor but short of the 40 target (a platform-access limit: Reddit and YouTube
  comments were unreachable through this session's tools; Quora was the only workable source). Coverage
  is skewed to NSUT (6 quotes); DTU itself got zero quotes under this lane's anonymous-attribution
  rules. A named, consenting, published DTU-alumnus interview (180DC DTU Substack, 6 Jun 2025) was
  correctly excluded from the anonymous table and flagged for separate, named citation instead.
- **V-J (Lane J):** 66 rows (RJ01-RJ66) in `research/raw/R-J-assets.md`, 20 sources (S380-S399).
  All 32 institutions (28 longlist/core plus 4 IIT contrast) got verified coordinates. India outline
  downloaded as a 760-feature GeoJSON, verified by the lead to include all 36 states and union
  territories (Jammu and Kashmir, Ladakh, Andaman and Nicobar Islands and Lakshadweep confirmed
  present). 26 of 29 logo targets saved to `deck/assets/logos/`; DCG and 180DC-DTU logos remain
  MISSING (added as an open item to `inputs/INPUTS-FROM-HARSH.md`); "Eternal" logo is actually Zomato's
  (no distinct Eternal mark exists publicly), flagged for correct labelling wherever used.

**Gate G1, final pass:** appended rulings for the last 11 findings (4 from Lane H, 2 from Lane I, 5
from Lane J) to `research/raw/conflicts.md`. Notable: recommended at step D1 that the India map use the
native GeoJSON fallback rather than the hybrid generated-art approach, since the GeoJSON's political
accuracy is now independently verified and removes the acceptance risk the hybrid approach was
designed to manage; the hybrid approach stays in place for the road ribbon only. Gate G1 is now closed
across all nine lanes.

Next: step B7, dispatch the three college scorers (SC-1, SC-2, SC-3) to fill the regional scorecard
CSVs per PLAN.md section 7.1's longlist and section 7.4's seven weighted criteria.

## Step B7 complete (10 Oct 2026): college scorers SC-1, SC-2, SC-3

- **SC-1 (North/Delhi NCR, 13 rows incl. 4 calibration):** `college_scorecard_north.csv`, sources
  S400-S447. Calibration check passed on all 3 meaningful criteria (C1, C3, C7): DTU/NSUT/Thapar/BIT
  Mesra all score at or above the longlist median.
- **SC-2 (South, 9 rows):** `college_scorecard_south.csv`, sources S500-S540. Flagged IIIT Hyderabad as
  likely to fail the screen outright (177 placed vs the 600-batch F1 threshold).
- **SC-3 (West/East + IIT contrast, 10 rows):** `college_scorecard_west_east.csv`, sources S600-S649.
  Important finding: the plan's "IITs win C1 (recruiter overlap), lose C5 (prep vacuum)" thesis only
  half-confirmed by public search. C1 held clearly (IITs cluster 4-6 anchors vs longlist's 1-5). C5
  came back murky for everyone, including IIT Delhi (0 of 3 sub-criteria found, same as Jadavpur
  University), flagged as an absence-of-web-evidence problem, not a confident finding of a small
  IIT-side vacuum. The doc must not overstate this half of the argument.

## Step B8 complete (10 Oct 2026): merge and consolidate

- Fixed a CSV-escaping bug in `college_scorecard_south.csv`: 7 of 9 rows had an unquoted comma inside a
  parenthetical unit description (e.g. "B.Tech eligible cohort, 2025-26)"), breaking column counts.
  Repaired with a paren-balance merge heuristic, verified all 9 rows parse to exactly 39 columns.
- Merged all three regional CSVs into `research/data/college_scorecard.csv`: 32 rows (4 calibration + 9
  North + 9 South + 6 West/East + 4 IIT contrast), zero duplicate colleges, zero header mismatches.
- Consolidated all 12 source files into `research/raw/sources.md`: 421 unique sources (S001-S699
  range), zero duplicate S-IDs, zero range violations.

## Gate G2 (10 Oct 2026): evidence screen

Computed per-college sourced/est./not-found counts against PLAN.md section 7.2's F1 (batch >= 600) and
F4 (at least 5 of 7 criteria genuinely sourced) screens. Refinement to the plan's mechanical
"source/est./NOT FOUND" classification: a cell whose source is "n/a" but whose note gives a complete,
reasoned confirmation of a genuine zero (for example, C7's access sub-criteria, properly checked and
found absent) counts as a sourced negative finding, not an evidence gap, since the criterion was
actually checked, not skipped.

Results: 3 colleges fail F1 outright regardless of any rescue (IIIT Delhi 480, IIIT Allahabad 428,
IIIT Hyderabad 177, all under the 600-student threshold) and are screened out, consistent with what
SC-1 and SC-2 already flagged. After the C7 reclassification, 4 colleges remain genuinely evidence-thin
(fewer than 5 of 7 criteria sourced): NIT Calicut, VIT Vellore, Manipal Institute of Technology,
Jadavpur University. Dispatched one targeted-rescue agent per PLAN.md's G2 instruction ("any college
with more than 2 of 7 cells est. or NOT FOUND gets one targeted re-search"), covering the specific weak
cells for all 4 colleges in a single pass since they are a handful of narrow, well-defined gaps (C3, C4,
C5, C6 specifically, never C1, C2 or C7 for any of the 4).

Next: once the rescue lands, finalise the F4 screen pass/fail for these 4 colleges, then proceed to
step B9 (the modeller builds and runs `beyondtech_gtm_model.py`).

## Gate G2 closed (10 Oct 2026)

The targeted-rescue sub-agent hit a session rate limit mid-task (status reported "failed"), but its
actual work was already saved before the cutoff: `research/data/college_scorecard.csv` was correctly
updated for all 4 target colleges and `research/raw/sources-G2-rescue.md` (S700-S704, 5 sources) is
complete and well-formed. Verified the CSV still parses to exactly 32 rows x 39 columns with zero
corruption from the interrupted run.

Applying the same reasoned-zero rule used earlier (C7's access sub-criteria, when fully checked and
confirmed absent, count as a sourced negative finding) plus the rescue's new citations:

| College | Newly sourced | Still a gap | Sourced count | F4 result |
|---|---|---|---|---|
| NIT Calicut | C5 (S700, a prep-brand/casebook check) | C4, C6 | 5 of 7 | PASSES |
| VIT Vellore | C3 (S703, VIT's own NIRF submission), C6 (already had 3 sources) | C4, C5 | 5 of 7 | PASSES |
| Manipal Institute of Technology | C3 (S702, MIT's own NIRF submission), C5 (S701) | C6 | 6 of 7 | PASSES |
| Jadavpur University | C4 (S704, FinClub JU) | C5, C6 | 5 of 7 | PASSES |

All four colleges now clear the evidence floor. Combined with the earlier F1 screen (section above),
the final screen result: **3 colleges fail outright** (IIIT Delhi, IIIT Allahabad, IIIT Hyderabad, all
on batch size under 600) and are excluded from ranking; **all other 29 colleges pass both F1 and F4**
and proceed to scoring. Gate G2 is closed.

Next: step B9, the modeller writes and runs `model/beyondtech_gtm_model.py` per PLAN.md section 8,
using the full research base (9 lanes, 3 regional scorecards merged, 421 sources, conflicts.md's
rulings) now assembled.

## Step B9 complete and Gate G3 closed (10 Oct 2026)

### Model build

`model/beyondtech_gtm_model.py` written and run. All checks pass (T1 branch sums, T4 budget-split
sums to 100%, T8 calibration-at-or-above-median, T5 calendar sums to T4, T12 equals T6 plus T10).
Every Gate G1 ruling applied correctly (F01/F02/F03/F08/F09/F10/F12 retired or corrected, Prism
excluded from every anchor count, A25 recalibrated to nano/micro bands). `model/model_outputs.json`
and `model/model_tables.md` (T1-T16) written.

### Four new assumptions reviewed and approved

A31 founder hours per week (15/20/25), A32 cohorts run per year (2/3/4), A33 DTU in-house event cash
cost (₹12,000/8,000/5,000), A34 paid-channel reachable share of campus population (3%/5%/8%). All four
are well-justified, narrow, and necessary (PLAN.md section 5.3 did not anticipate them). Approved
without change. The modeller's own engineering safeguard (capping the gated-library channel's bull
case at 60 enrolments, since an unbounded compounding of 4 conversion rates produced an implausible
result) is also approved; it is a sound guard against the model producing a number no one would
believe, not a data integrity problem.

### Gate G3: section 4.6 falsification rules applied

- **Fewer than 4 non-IIT colleges pass the screen at F2>=5:** true (only 2 passed). Relaxed F2 to >=4
  per the rule, widening the pool to 6 non-IIT passers. F1 was never relaxed. Correctly logged by the
  model itself (`screen_relaxed_f2_per_4_6: true`).
- **An old IIT scores in the top 4:** did not happen. No IIT reached the final 4; the closest is IIT
  Roorkee in the reserve bench (Fit 2.2, stability 5.3%). This is reported honestly, exactly as the
  rule requires, not engineered either way. It is itself a usable, honest talking point: the scorecard
  was not built to produce this result, and it still didn't happen.
- **DTU's non-tech aspirant pool cannot be sized within a factor of 2:** T1's SAM ranges from 1,304
  (bear) to 2,608 (bull), exactly a factor of 2. Treated as passing (at the boundary, not exceeding
  it); the doc still presents this as a range, never a point estimate, consistent with the plan's
  three-scenario discipline regardless.
- **Paid CAC lower than organic CAC at base:** did not happen. Every organic channel is individually
  far cheaper than every paid channel (T3: organic CAC ₹126 to ₹2,469; paid CAC ₹309 to ₹33,333,
  with the one paid outlier at ₹309 being campus micro-influencers, a borderline-organic channel by
  feel though correctly coded as paid cash spend). The "organic-first" framing stands. The nuance the
  model surfaced is adopted for the doc and slide 6: organic channels are cheap but reach-capped (they
  exhaust at 63.8 of the 165 base-case target), so the blended CAC still shows paid at 78.9% of total
  cash. This is framed as "organic is the efficient floor, paid is the volume ceiling," not as a
  contradiction of the thesis.
- **A recommended society turns out inactive:** not yet applicable; no society has been locked into a
  specific slide-5 partner row yet (that happens when doc section 10 is written from `societies.csv`).

### The four picks, locked

| College | Fit | Screen | Stability |
|---|---|---|---|
| BITS Pilani (Pilani campus) | 3.00 | Pass | 100.0% |
| NIT Tiruchirappalli | 2.65 | Pass | 100.0% |
| PEC Chandigarh | 2.40 | Pass | 97.5% |
| COEP Technological University, Pune | 2.40 | Pass | 97.2% |

Reserve bench: BITS Pilani Goa campus (2.80 Fit, excluded only by the one-campus-per-institute
portfolio rule since the Pilani campus already won), NIT Warangal (2.20), IIT Roorkee (2.20, 5.3%
stability), IIT Delhi (2.15, 0.0% stability). Portfolio constraints (<=2 within 300km of Delhi, >=1
South, >=1 West/East, <=1 campus per institute) were all satisfied naturally by fit ranking; no forced
swap was needed.

Two colleges that scored competitively on overall fit (Manipal Institute of Technology, 2.75; BITS
Pilani Hyderabad campus, 2.65) are correctly screened OUT because their recruiter-overlap evidence
(C1) could not clear even the relaxed 4-anchor floor (both had only 1 confirmed anchor, KPMG for
Manipal, none independently reconfirmed for BITS Hyderabad beyond what's shared with other BITS
campuses). This is the screen doing its intended job: a college cannot buy its way onto the shortlist
on other criteria alone if BeyondTech's actual asset, the recruiter-aligned question bank, is not
demonstrably present there.

### Moneyshot locked (PLAN.md section 4.4)

Real figures from T3/T4: base-case organic channels deliver 63.8 of 165 total funded enrolments
(38.7%) on 21.1% of the ₹3,51,650 total cash. Moneyshot sentence for slide 6:

> "₹3.5 lakh at DTU buys 165 enrolments at a blended ₹2,131 each, and the 21% of the budget spent
> organically delivers 39% of them."

Supporting exhibit on the same slide (already planned via the CAC-bar-chart-with-funding-cutoff
device, G9): two of the four paid channels (Meta campus geofence, LinkedIn school-targeted) earn zero
funded budget in the base case because the two cheaper channels (Meta retargeting, campus
micro-influencers) already cover the enrolment target. This is a sharper, more surprising version of
the same point and belongs in the chart's own annotation, not as a separate callout.

### One interpretive flag for the writers

T6's bear-case spend (₹19,84,811 for only 120 enrolments, CAC ₹16,540, contribution −₹14,56,811) is a
real, defensible model output, not a bug: bear-case conversion rates compound badly across several
funnel stages, so hitting even a reduced target costs far more per head. This number must never be
presented as a recommended or likely spend. Doc section 12 (the DTU budget section) frames it
explicitly as a stress case: a demonstration of why the kill-threshold checkpoints in T14 exist, not a
second budget option. Writer W-C (assigned doc section 12) is briefed on this via the WRITER-BRIEF.md
late-corrections block at Gate G4.

Gate G3 is closed. Next: step B10, dispatch the college dossiers for the 4 locked picks plus the 4
reserve-bench colleges (8 dossiers total, split across SC-1 for North, SC-2 for South, SC-3 for
West/East and the contrast set, matching each scorer's existing regional assignment).

## Step B10 complete (10 Oct 2026): 8 pick dossiers

All 8 dossiers written (4 locked picks + 4 reserve bench), each 25+ rows, sourced via S750-S899:
- `R-E-bits-pilani.md` (40 rows), `R-E-pec-chandigarh.md` (38 rows) — SC-1
- `R-E-nit-trichy.md` (36 rows), `R-E-nit-warangal.md` (32 rows) — SC-2
- `R-E-coep-pune.md` (27), `R-E-bits-goa.md` (27), `R-E-iit-roorkee.md` (26), `R-E-iit-delhi.md` (26) — SC-3

Entry wedges locked for all 4 picks (each names a specific society, a specific event window, and a
specific leadership role to approach, never a private contact). Notable findings:
- Previously NOT FOUND follower counts recovered for NIT Trichy's societies (180DC 2,902, ProfNITT
  2,004, E-Cell 4,359) and NIT Warangal's 180DC (699, with named leadership roles).
- IIT Delhi's calendar fit, already the worst band in the scorecard, is confirmed even worse on direct
  evidence: its own Office of Career Services states the season runs through end-May, meaning a live
  season would overlap BeyondTech's entire Jan-to-May window, not just clash at the start.
- IIT Delhi's DMS (the graduate management programme, not the B.Tech faculty) runs named consulting
  and finance clubs (Consulere, FINAZARDS); whether these reach undergraduates is unconfirmed. This
  nuance is kept, not resolved, consistent with the scorecard's own honest "C5 is murkier than the
  plan's thesis assumed" finding from Gate G3.
- Confirmed structurally: no competitor in `competitors.csv` names COEP, BITS Goa, IIT Roorkee or IIT
  Delhi as a target college; no anchor-recruiter role title or CTC figure exists for any firm at any
  of the 8 colleges (both IITs confirmed under an All-IITs Placement Committee non-disclosure policy),
  so no slide may pair a specific recruiter name with a specific CTC figure for these campuses.
- "Consul-T" vs "BFC" naming conflict at NIT Trichy logged, not resolved by the scorer, correctly
  deferred to the lead.

Next: step B11 (dispatched), the modeller applies the dossier-sourced C4/C6 refinements, re-runs the
model, builds the Excel workbook, and generates deck/values.js.

## Step B11 complete (10 Oct 2026): model re-run, Excel, values.js

Dossier-sourced C4 refinements applied to the model (NIT Tiruchirappalli's society count and follower
sum, NIT Warangal's 180DC follower count). Per PLAN.md section 7.4's "lower of the two bands" rule,
neither refinement changed the final C4 score (NIT Trichy stayed at 3, Warangal at 1), so the four
locked picks and their Fit scores and stability percentages are confirmed unchanged from Gate G3. All
checks still pass. IIT Roorkee and IIT Delhi's C6 findings required no code change, only a documentation
note confirming the dossier evidence strengthens, not weakens, their existing worst-band score.

Produced: `model/BeyondTech_GTM_Model.xlsx` (README, Inputs, T1-T16 sheets, a Checks sheet with live
re-derivations of the budget split, base contribution and calibration check against the JSON),
`model/build_excel.py`, `deck/make_values.py`, `deck/values.js`. All verified present and non-trivial.

Model build (steps B9 and B11) is fully closed. Next: Gate G4, the lead locks every number into
`research/parts/WRITER-BRIEF.md`, then dispatches the six writers (steps B12-B13).

## Gate G4 closed (10 Oct 2026)

Wrote `research/parts/WRITER-BRIEF.md`: the full read-first list, content and style rules, every
locked number from the model pre-filled into prose (so writers do not have to compute anything
themselves), the per-section assignment table mapping all 27 doc sections to their writer and key
source lanes, and a consolidated "Late corrections" block summarising every Gate G1/G3 ruling that
retires or corrects a seed fact. From this point, no writer may change a number; any apparent
conflict between a raw lane file and the brief's locked figure resolves in favour of the brief.

Next: steps B12 and B13, dispatch all six writers in two batches of three.

## Step B12 complete (10 Oct 2026): writers W-A, W-B, W-C (sections 0-12)

- **W-A** (`part-A.md`, sections 0-4): 8,967 words, 19 tables, 5 Answer leads, 0 dashes, 0 banned
  words. Correctly caught and rewrote a verbatim-quote exclamation mark rather than claiming a false
  exemption.
- **W-B** (`part-B.md`, sections 5-7): 8,105 words, 17 tables, 3 Answer leads, 0 dashes, 0 banned
  words. "Prism" quoted verbatim per ruling C-C1; PM School/NextLeap treated as one competitor per
  ruling D-C5; CrackNonTech's and NextLeap's prices never cited per rulings D-C1/D-C3.
- **W-C** (`part-C.md`, sections 8-12): 11,978 words, 28 tables, 5 Answer leads, 0 dashes, 0 banned
  words. The mandatory bear-scenario interpretive flag is present in section 12. The one exclamation
  mark present is inside a verbatim-required WhatsApp CTA quote, correctly distinguished from the
  writer's own prose.

Combined so far: 29,050 words, 64 tables across 13 of 27 sections. All three writers independently
reported the same honest gaps (DTU branch-wise intake, the 25-firm recruiter detail table, the
official 2026-27 calendar, societies.csv's 16-of-30 shortfall) without padding or inventing around
any of them, consistent with the brief's content-integrity rules.

Next: step B13, dispatch the second batch of three writers (W-D, W-E, W-F, sections 13-27 plus the
glossary).

## Step B13 complete (10 Oct 2026): writers W-D, W-E, W-F (sections 13-27 + glossary)

- **W-D** (`part-D.md`, sections 13-16): 13,313 words, 26 tables, 4 Answer leads, 0 dashes, 0 banned
  words (caught and fixed one "robust"). Section 16's four pick dossiers use identical structure
  (symmetric treatment). Clearly states DTU scores highest of all 32 colleges yet is ineligible to be
  picked, as the calibration check working as intended.
- **W-E** (`part-E.md`, sections 17-20): 8,861 words, 22 tables, 4 Answer leads, 0 dashes, 0 banned
  words. Both verified third-party quotes (Alagh, Kamath) included with full attribution; honestly
  reports that no third or fourth quote was found despite 5 further attempts.
- **W-F** (`part-F.md`, sections 21-27, 13,795 words, 19 tables, 7 Answer leads, 0 dashes, 0 banned
  words; plus `appendix-E-glossary.md`, 63 entries): caught and corrected two fabricated R-ID citations
  during its own self-check before finalising, replacing them with the real supporting R-IDs. Derived
  4 slide-title figures from already-locked model tables with full citation, and explicitly declined
  to invent a "total students reached" figure when the underlying units (direct contact vs social
  impressions) were not comparable.

**Combined totals across all six parts**: approximately 65,019 words, 150 tables (pre-assembly count;
the assembler will do the authoritative count against the full concatenated file). Every writer
independently applied the Gate G1/G3 rulings correctly and flagged genuine gaps honestly rather than
inventing around them.

Next: step B14, build `research/assemble.py` and `research/build_pdf.py` (adapted from
`verdict-mnc/research/assemble.py` and `build_pdf.py`), run the assembler, apply touchpoint C
(critique), and build the final PDF.

## Step B14 complete (10 Oct 2026): assembler and PDF

Wrote `research/assemble.py` (adapted from `verdict-mnc/research/assemble.py` per PLAN.md section
9.3) and ran it. Two style violations found and fixed:
- A verbatim-quote exclamation mark in part-C.md ("Hi! I'm interested..."), rewritten to a comma per
  the same precedent W-A already set (the punctuation inside a short CTA quote is not load-bearing;
  the wording itself, already corrected per ruling A-C1, is what matters).
- One em dash in the lead's own `conflicts.md` prose, rewritten to a comma clause.

**ASSEMBLY PASS** on the re-run: 96,343 words (floor 45,000), 164 tables (floor 110), 0 dashes, 0
exclamations, 0 question headings, 0 banned words, 28 Answer leads (floor 26), 0 missing sources, 0
duplicate headings. Final document: `research/beyondtech-gtm-research.md`.

One known, accepted characteristic: only 3 S-IDs are cited in direct `[S###]` form, since the writer
brief directed writers to use the lane's own R-ID as the primary citation tag (each R-ID traces to an
S-ID inside its lane file's own Facts table), consistent with how the reference decks in this project
tag review-mining and assumption IDs separately from source IDs. This is a deliberate design choice,
not a gap; Appendix A's bibliography is correspondingly short, and the full 421-source register
remains available as `research/raw/sources.md` for anyone who wants to trace further.

Built the PDF: installed `markdown-it-py` (missing), adapted `build_pdf.py` from
`iim-lucknow-pivot/research/build_pdf.py` with the project's palette (primary #1F4BD8, deep #0B1F66,
accent gold #F5C518) and cover text. Output: `research/beyondtech-gtm-research.pdf`, 143 pages, 5.5 MB.
Verified by rendering the cover and a mid-document page (page 72, the roadmap table) with PyMuPDF:
both render cleanly, dense, well-formatted, citations visible, matching the project's design doctrine.

Next: touchpoint C (skill critique mode) on the finished document, apply the top 5 fixes, then
present Stage 1 at Gate G5.

## Touchpoint C complete, fixes applied (10 Oct 2026)

Critic scored the assembled document against both rubrics: phase 1 all pass except Appendix A
(bibliography near-empty); phase 2 dimension scores 5/4/5/5/3/4/3; organiser 9-dimension self-score
39/45 (target 40, all dimensions at or above 3). Five issues identified, all fixed:

1. **CRITICAL, fixed.** Appendix A's bibliography resolved almost nothing it cited (3 rows against
   hundreds of R-ID tags). Rewrote `research/assemble.py`'s Appendix A builder to resolve every
   cited R-ID through its lane file's own Facts table to the Source ID it rests on, not just the rare
   direct `[S###]` tags, with a "Cited via" column showing which R-IDs resolve to each source. This
   surfaced a real second gap: the dossier-pass and Gate G2 rescue-pass source files (S700-S899,
   97 sources) had never been merged into the master `sources.md` after step B8. Merged them (now 518
   unique sources). Bibliography now lists 203 of 203 resolved sources, 0 missing.
2. **CRITICAL, fixed.** Section 20.6 (part-E.md) narrated the bear-case A22/A23 values (3.0/1.2
   hours per enrolment) while describing the base-case T11 table (220 to 196 hours, 88 freed), a real
   cross-section numeric contradiction. Corrected to the base-case values (2.0/0.8).
3. **IMPORTANT, fixed.** Two tables in section 4 (part-A.md) had prose bleeding into a table cell or
   a missing blank line before a table header, which would render as garbled tables. Both fixed with
   a clean paragraph break.
4. **IMPORTANT, fixed.** Criterion C1's denominator was inconsistently stated as "of 20" in sections
   14.1 to 14.2 and "of 19 (Prism excluded)" from 14.3 onward. Standardised every instance (6 total)
   to "of 19 countable (of a 20-firm named list, Prism excluded)".
5. **NICE-TO-HAVE, not yet applied.** The founder-hours table is repeated verbatim four times with no
   cross-reference in three of the four. Left as is for now (each repetition serves that section's own
   argument, per the project's defensive-depth doctrine); a cross-reference pass can be added in a
   later polish round if time allows.

Also fixed, flagged alongside the top 5: the duplicated "Appendix E: Glossary" heading (the glossary
file's own H2 was colliding with the one `assemble.py` adds; now stripped before concatenation).

Re-ran the assembler: **ASSEMBLY PASS**, 100,328 words, 164 tables, 0 dashes, 0 exclamations, 28
Answer leads, 203 of 203 sources resolved, 0 missing, 0 duplicate headings. Rebuilt the PDF (151
pages, 5.9 MB). Verified by rendering the two previously-broken table pages and the new bibliography
page with PyMuPDF: all three render cleanly.

**Stage 1 (the research deliverable) is complete.** Final files: `research/beyondtech-gtm-research.md`,
`research/beyondtech-gtm-research.pdf`, `research/critique.md`, `model/BeyondTech_GTM_Model.xlsx`,
`deck/values.js`, plus the full research trail (9 lanes, conflicts.md, 8 dossiers, college_scorecard,
competitors.csv, societies.csv, 518 sources). Gate G5 is next: present Stage 1 to the user; Stage 2
(the Figma deck) does not begin until that gate opens, per PLAN.md section 0.1.

## Stage 2 begins (10 Oct 2026)

D0: `DECK-PLAN.md` copied from the approved plan. `extract_deck.py` run: 19 files written (palette, extras,
make_values.py, gen.py, 11 slide scripts, setup.js, _v1.js, _sweeps.js, swap_map.js).

D1: `gen.py pre` built `preamble.js` (28,773 chars), `mock_figma.js`, `values.js` (9,615 chars, hash `3a53e3745f`
asserted). `gen.py mock`: all 11 slides OK, 0 issues, 0 warnings, exit 0.

D2, touchpoint F (ghost deck): the nine action titles (f2 to fA) read top to bottom as one argument: summary with
the five-leak diagnosis foreshadowed, DTU plan, the moneyshot on budget (slide 5, the only CARD: MONEYSHOT node),
selection, pan-India launch, playbook, roadmap and risks, appendix. Every title is a full sentence with a number.
Exactly one moneyshot. Logged as PASS.

## Stage 2 build complete (10 Oct 2026)

D3 to D6: Figma file created ("BeyondTech GTM | Team IdeaForge | BeyondTech x DCG 2026",
`cpcsN7ytWMJputcohXOMgz`), 11 slides created and named. All 11 slide scripts built in Figma, each
matching its offline-mock node count exactly. Five real-metrics overflow issues surfaced only once
real Figma font rendering replaced the mock's approximate metrics (expected per DECK-PLAN.md section
9's own caveat); all five fixed via column-width, node-height and one-word-shorthand changes, synced
back into `deck/slides/*.js`, `DECK-PLAN.md`, and `C:\Users\harsh\.claude\plans\working-folder-
beyondtech-dcg-dapper-axolotl.md` (the source of truth), re-mocked, rebound, and re-verified against
Figma. Full list in `deck/critique.md`.

D8: `build/sweeps.js` run across all 11 slides: radiusFixed 0, moneyshot count 1, fontLow empty, copy
(dash/question/exclamation/bare-Harsh/banned-word) empty, MUST list (every locked number, all 4 picks,
team names, CONCLUSIVELY, THEREFORE) fully present, ABSENT list (other decks' names, Rs-prefix,
placeholder tokens) fully absent. V1 all-slides structural validator: clean, 0 issues after the slide
9 panel-height fix.

D9, touchpoint G critique: 41/45 on the organiser 9-dimension rubric, no dimension under 4. Full
writeup in `deck/critique.md`.

D10: all 11 slides screenshotted to `deck/shots/s01.png` to `s11.png` and visually reviewed.

**Open before final export:** logo slots (BeyondTech, DTU, DCG, Bain, ZS, Eternal, JP Morgan,
WhatsApp, LinkedIn, E-Cell DTU, TEDxDTU, all 4 host-society and pick-campus crests) and 2 screenshot
slots on slide 3 remain dashed placeholders; DCG and 180DC DTU logos were never sourced during Stage 1
research (flagged MISSING) and need the user. Generated India map and road images were not produced
this session; the deck ships with the native dot-grid map and native stepped road, both already
verified and in place.

---

## Redesign of slides 2, 3 and 5 (10 Oct 2026, per `REDESIGN-PLAN.md`)

### K1: skill pass test (R1)

1. Archetype H's three reasons per column: quantitative (the number-based case), then strategic fit, then
   feasibility/implementation.
2. A seed slide ends the Context section on a slide that surfaces the specific gap the alternative fills, without
   naming the alternative, so the reader infers the recommendation before it is stated.
3. Moneyshot's five visual rules: the number is the largest text on the slide; it is centred or the visual focal
   point; strong colour (red, orange or gold); the surrounding chart stays clean, no clutter near the number; the
   number repeats on the next section-closer slide.

### R2 to R4 on disk

`extract_redesign.py`: backed up `build/slide_02.js`, `slide_03.js`, `slide_05.js`, `shots/s02.png`, `s03.png`,
`s05.png`, `values.js`, `mock_figma.js`, `slides/s02.js`, `s03.js`, `s05.js`, `gen.py` into `deck/_backup_v1/`;
wrote `metrics.json` (4,275 chars), `gen.py` (7,721), `values_ext.py` (3,246), `_x2.js` (1,704), `slides/s02.js`
(5,162), `s03.js` (5,008), `s05.js` (5,538), `preview.py` (6,578), `names.js` (596). `files 9`.

`gen.py pre`: `preamble.js` 28,773, `mock_figma.js` 14,635, `values.js` 10,991 (matches the planning-time run).

`gen.py mock`: all 11 slides OK, 0 issues, 0 warnings. Sizes: s02 38,675, s03 36,113, s05 38,082 (within a few
hundred characters of the planning-time numbers, from the on-disk model run producing the identical hash
`3a53e3745f`). s01, s04, s06 to s11 unchanged in size from the live build.

`preview.py 2 3 5`: wrote `preview_02.png`, `preview_03.png`, `preview_05.png`.

### K2 card, round 1 (previews, step R5)

| Field | Slide 2 | Slide 3 | Slide 5 |
|---|---|---|---|
| Archetype | PASS: red NOT column / green THIS column, three numbered reasons each in quant/fit/feasibility order | PASS: funnel, heat map, branch bars, five-stage MECE path, seed card all present | PASS: moneyshot card with 21% -> 39% as the largest text, decomposition chart above it, scenario table and tornado beside it |
| Action title | PASS: full sentence, ₹5.3 lakh, 110, 165 | PASS: full sentence, 5.6% | PASS: full sentence, ₹3.5 lakh, 21%, 39%, 165 |
| Exhibits | PASS: three-path stacked bars with dashed ghost segments, waterfall 110/+55/+80/245, spend bar plus 3x3 table, 4 pick bars with dashed median | PASS: funnel with 3 call-outs, 4x4 heat grid with reach markers and legend, 8 branch bars | PASS: 11-bar cost curve with pins, blended-CAC dashed line, funding-stop dashed line, two broken unfunded bars, 12-row table |
| In-chart annotation | PASS: "target met" / "N short of 165" per path, "median 2.15" | PASS: "25% of them", "5.6% of pool", "45% selected" | PASS: "Blended ₹2,131", "Funding stops at 165", "Off the scale and unfunded", Meta retargeting call-out inside its bar |
| So-what line | PASS | PASS: "THE GAP THIS LEAVES" card | PASS: bear line and the moneyshot sentence |
| Skill pattern | PASS: contrarian, answer first, three scenarios | PASS: foreshadowing, MECE, honesty labels (estimate, aggregator-reported) | PASS: moneyshot, decomposition, three scenarios, sensitivity |
| Source line | PASS: one line, bottom right | PASS | PASS |
| Type levels | PASS: 34 pt numerals, 24 pt leads, 22 pt body, 16 pt fine print, 14 pt source | PASS: 26 pt funnel tiers, 24 pt leads, 22 pt body, 16 pt fine, 14 pt source | PASS: 60 pt moneyshot, 24 pt leads, 22 pt body, 14 pt source |
| Dead space | PASS: no empty region over 150x150 px | PASS | PASS |

All PASS at the preview stage. Proceeding to Figma build (R6, R7).

### R6: bind

`gen.py bind 2 3 5` wrote `build/slide_02.js` (38,676), `slide_03.js` (36,114), `slide_05.js` (38,083),
their `v1_0N.js`, plus `v1_all.js`, `sweeps.js`, `slots.js`. Identical byte counts to the scratch
rehearsal run during planning.

### R7: Figma build

Order per plan: slide 5 first, then 2, then 3.

| Slide | Node id | Paste result | V1 | Screenshot |
|---|---|---|---|---|
| 5, DTU Budget | `2:7` | `total 436, top 148`, `warnings: []` (matches planned 436/148) | `clean: true, count: 0` | `deck/shots/s05.png`, matches `preview_05.png` |
| 2, Executive Summary | `2:4` | `total 331, top 196`, `warnings: []` (matches planned 331/196) | `clean: true, count: 0` | `deck/shots/s02.png`, matches `preview_02.png` |
| 3, Diagnosis | `2:5` | `total 345, top 172`, `warnings: []` (matches planned 345/172) | `clean: true, count: 0` | `deck/shots/s03.png`, matches `preview_03.png` |

No fix-rule invocations were needed; zero attempts used of the three allowed per slide.

### K2 card, round 2 (Figma screenshots, step R8)

All fields PASS on all three slides, matching round 1 exactly: rail labels rotate bottom-to-top and
sit centred in their 40px bars in the real Figma render (not just the mock); slide 5's numbered pins
sit correctly above/inside their bars with pin 9 inside the Meta retargeting bar; the two unfunded
bars show their white scale-break band; both dashed lines (blended CAC, funding-stop) are visible and
do not touch any label; slide 2's dashed ghost segments and target line are visible; slide 3's heat
map dots sit at the cell edge without covering the Low/Med./High text. No difference from the preview
exceeded a few pixels (font hinting only).

### R9: names, sweeps, v1_all

`deck/names.js`: all 11 slides renamed back to "01 Cover" through "11 Thank You".

`build/sweeps.js`: `radiusFixed: 0, moneyshot: 1, fontLow: [], copy: [], missing: [], presentBad: [],
slides: 11`. Node density: 01 Cover 138, 02 Executive Summary 331, 03 Diagnosis 345, 04 DTU Plan 256,
05 DTU Budget 436, 06 College Selection 417, 07 Pan-India Launch 601, 08 Launch Playbook 302,
09 Roadmap and Risks 209, 10 Appendix 240, 11 Thank You 43.

`build/v1_all.js`: `clean: true, count: 0` across all 11 slides.

### R10: critique (K3)

New section appended to `deck/critique.md`: "Redesign of slides 2, 3 and 5 (10 Oct 2026, per
REDESIGN-PLAN.md)". Rescored full deck 42/45 (up from 41/45), no dimension under 4. Pass test met.

### R11 status

Redesign complete. All verification criteria in section 11 of `REDESIGN-PLAN.md` hold:
1. `gen.py mock` 11 OK lines; only `slide_02/03/05`, their `v1_0N`, `v1_all`, `sweeps`, `slots` changed
   on disk (confirmed against the pre-redesign `deck/_backup_v1/` copies).
2. Figma: all three warnings-free, V1 clean, `v1_all` clean, sweeps clean with `moneyshot` 1, names
   restored.
3. Screenshots match previews, K2 passed both rounds.
4. K3 critique pass test met (42/45).
5. No bordered text box remains on the three slides except chips, table cells, the five stage boxes
   on slide 3 and the two rhetorical cards.

---

## Slide 2, version 3 (11 Oct 2026, per SLIDE2-PLAN.md)

User feedback: slide 2 "still somewhat just doesn't feel right and structured about the gut of the
slide", and as the deck's first impression it has to be the best one. Rebuilt from scratch as a
storyline matrix answering all three scored parts of the brief (30/25/25), with a Pyramid-Principle
governing-thought strip and an issue-tree spine, instead of arguing only the DTU budget question.

### K1: skill pass test (S1)

1. Archetype H's required elements: opposite verdicts in two columns, three reasons each, each a
   finding with a number.
2. Symmetric treatment: identical structure for comparable things. Used here across the three scored
   rows (badge, question, weight, pointer, rejected move, recommendation, proof chart, result), each in
   the same five column positions.
3. Every rejected move must carry a number because a bare assertion ("ads don't work") is not
   persuasive; the number (₹12,963, 11 months, 15 and 9 reactions) is what makes the rejection a
   finding rather than an opinion.

### S2 to S5 on disk

`extract_s02.py`: backed up `deck/slides/s02.js`, `deck/build/slide_02.js`, `deck/shots/s02.png` into
`deck/_backup_v2/`; wrote `deck/slides/s02.js` (6,729 chars). `files 1`.

`gen.py pre` / `mock`: all 11 slides OK, 0 issues, 0 warnings. s02 38,253 chars, 467 nodes (407 top).
Matches the planning-time scratch rehearsal exactly (byte-identical sizes).

`preview.py 2`: wrote `preview_02.png`. K2 round 1 (preview): all fields PASS — navy OUR ANSWER strip,
issue-tree spine with three ticks, three symmetric rows with cross/tick marks and struck-through
rejected moves, three distinct proof charts (100% bars, screen bars, two-line chart), orange ExtraBold
results (165, 4 of 28, ₹45,000), IN TOTAL band with waterfall/table/hours/first-step card intact.

`gen.py bind 2`: wrote `build/slide_02.js` (38,254), `v1_02.js`, `v1_all.js`, `sweeps.js`, `slots.js`.
Byte-identical to the scratch rehearsal.

### S6: Figma build

Read-only check: node `2:4`, 196 children (the live slide 2 before rebuild). Pasted the full build
file. Result: `{"slide":"2:4","total":467,"top":407}`, `warnings: []` — exact match to plan. V1:
`clean: true, count: 0`. Screenshot `deck/shots/s02.png` downloaded and reviewed: matches the preview
closely, and confirms the strikethrough renders correctly in real Figma (not just estimated by the
mock) on all three rejected-move titles.

### K2 round 2 (Figma screenshot, S7)

All fields PASS, matching round 1. No fix-rule invocations needed; zero of three allowed attempts used.

### S8: names, sweeps, v1_all

Slide names re-applied (all 11, "01 Cover" through "11 Thank You"). `build/sweeps.js`:
`radiusFixed: 0, moneyshot: 1, fontLow: [], copy: [], missing: [], presentBad: [], slides: 11`. Node
density: 01 Cover 138, 02 Executive Summary 467, 03 Diagnosis 345, 04 DTU Plan 256, 05 DTU Budget 436,
06 College Selection 417, 07 Pan-India Launch 601, 08 Launch Playbook 302, 09 Roadmap and Risks 209,
10 Appendix 240, 11 Thank You 43. `build/v1_all.js`: `clean: true, count: 0` across all 11 slides.

### S9: critique (K3)

New section appended to `deck/critique.md`: "Slide 2, version 3 (11 Oct 2026, per SLIDE2-PLAN.md)".
Rescored full deck 43/45 (up from 42/45), storyline and slide clarity and credibility all at 5, no
dimension under 4. Pass test met.

### S10/S11 status

Redesign of slide 2 complete. All verification criteria in SLIDE2-PLAN.md section 8 hold: mock 11 OK
with only slide 2's five build files changed; Figma warnings-free and V1 clean on slide 2 and the whole
deck; sweeps clean with moneyshot 1; names restored; K2 passed both rounds; K3 pass test met (43/45);
the slide now answers all three scored asks of the brief in one storyline matrix with the governing
thought stated once above them.
