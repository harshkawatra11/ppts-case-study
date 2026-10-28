# Critique: beyondtech-gtm-research.md (touchpoint C)

Scope: this is a critique of the research document, which is the evidence base for a deck that has
not been built yet (Stage 2 opens after this gate). Where the rubric asks about slides, nav bars or
charts, I score the document's own slide blueprint (section 25) as the stand-in plan, and I say so
each time rather than pretending the deck already exists.

The known, already-disclosed limitations (societies.csv at 16 of 30 rows, Lane I's student-voice
skew to NSUT and NIT Surathkal, "Prism" unidentified, CrackNonTech and NextLeap prices
unconfirmable) are not re-flagged below. The document already states each of these plainly in
section 0.1, section 1.3, section 10.1, section 27.2 and the relevant risk-register row. Repeating
them here would not be a new finding.

---

## Phase 1: pass/fail (critique_rubric.md)

### Structure

- Deck has 100 or fewer slides: PASS. The planned deck is 12 slides (cover, 9 core, appendix,
  thank-you), well inside the brief's own 8-12 core-slide limit.
- 8 main sections present: PASS, adapted. Section 0 explicitly maps the skill's 8-section blueprint
  onto this document's 27 sections and the deck's 12 slides; this is a marketing case compressed per
  the skill's own guidance, not an M&A deck, so the section set is Exec Summary / Context / Actors /
  Quantitative / Feasibility / Alternative / Conclusion / Appendix in substance, not in literal
  section titles.
- Cover slide with team, members, school, date: PASS (planned). Slide 1 carries the Members,
  Institution, Role table per this project's standing cover style.
- Table of contents with page numbers: PASS. The document's own Contents list doubles as this; the
  deck itself uses ribbon nav instead of a literal TOC slide, which is consistent with the brief's
  8-12 slide ceiling and is not a format the brief requires.
- Abbreviations table with 30+ acronyms: PASS. Appendix E's glossary runs to roughly 50 entries.
- Section dividers for each main section: PASS (planned), via the ribbon tag that changes per slide
  group (SUMMARY, DIAGNOSE, DTU PLAN, PICK, LAUNCH, PROVE IT).
- Appendix with deep dives (10+ slides equivalent): PASS, and by a wide margin. Appendices A-F cover
  the full model tables, the 32-college raw dataset, both society/competitor datasets, the glossary
  and the conflicts-and-rulings ledger.
- Bibliography with Harvard-style references (5+ slides equivalent): FAIL, see Top Issue 1 below.
  Appendix A: Bibliography contains exactly three rows (S409, S645, S646) despite the document citing
  hundreds of RA/RB/RC/RD/RE/RG/RH/RI tags and claiming 397 to 421 total sources (section 27.1). The
  appendix that is supposed to let a judge resolve a citation in under a minute (the document's own
  stated promise, section 0.1) cannot actually do that for the overwhelming majority of what it
  cites.

### Recommendation

- Recommendation in the executive-summary headline: PASS. Slide 2's title and section 2 both lead
  with "distribute proof, not buy awareness" before any supporting analysis.
- Two-sided structure with reasons per side: PASS, adapted. This is not an acquire/don't-acquire
  decision, so the rubric's literal for/against table does not apply; the structural equivalent is
  section 2.2's three-row table of obvious answer vs. why it falls short vs. the argued answer, which
  does the same rhetorical job.
- The contrarian side wins: PASS. Organic-first (as a sequencing logic, not a literal majority of
  cash) over paid-awareness; a mechanical scorecard over brand-name colleges; borrowed trust over
  cold ambassadors.
- An alternative is named, not "wait": PASS. Four named colleges with dossiers.
- The alternative gets the same rigor: PASS. Same scorecard, same stability test, same per-pick P&L
  template (deliberately held identical, section 20.10).
- The alternative is foreshadowed before being named: PASS, adapted. In a 100-slide M&A deck this
  rubric item means "don't surprise the reader 30 slides from the end." In this 12-slide compressed
  deck the four picks are named on slide 1-2 as part of the one-page answer and then detailed on
  slide 7; this is the right adaptation for a deck this short, not a foreshadowing failure.

### Quantitative analysis

- MECE option-filter table: PASS. Section 9.1's five-leak issue tree and section 13's four-filter
  screen both do real MECE work (section 13.3's screen literally drops colleges before they can be
  scored).
- Quantitative methodology applied (market sizing / CAC for a marketing case): PASS. T1's SAM/SOM
  bottom-up build and T3/T4's CAC-ranked channel funding are the case-appropriate equivalents.
- Core model with explicit assumptions: PASS. 34 assumptions (A01-A34), each bear/base/bull with a
  one-line basis (section 24).
- Three-scenario projection: PASS, applied consistently from T1 through T16, never a single point
  estimate.
- Range-based synthesis: PASS.
- Cost decomposition with named components: PASS. Eleven named channels with individual CAC, not a
  single blended "marketing budget" line.
- Moneyshot: PASS, exactly one, locked and reused verbatim (section 2.5, section 12.5).
- Multi-component cost/synergy categorization: PASS. Organic/paid layers; founding-cohort discount
  vs. case-league cost vs. ambassador payout vs. referral reward, each separately modelled.

### Rhetorical

- Action titles on content slides: PASS, strongly. Sampled all 9 core slide titles in section 25.1;
  every one is a full-sentence finding carrying at least one number (see Phase 2, Dimension 4).
- Source citations on content slides: PASS, by design (the tag legend in section 0.2 and the 14pt
  source-line convention), though this can only be verified in full once the deck itself exists.
- Section-closer before a pivot: PASS, adapted. "CONCLUSIVELY" and "THEREFORE" closing cards are
  specified for slides 7 and 10 in the blueprint.
- Conclusion with no new content: PARTIAL. Slide 10 folds the roadmap, the KPI tree, the risk
  register and the dated first step into one closing slide. The risk register is arguably new
  content rather than pure recap. This is a reasonable compression choice for an 8-12 slide deck
  (there is no spare slide to isolate a pure-recap conclusion), not a structural error, but it is
  worth naming rather than silently passing.
- Persistent navigation bar: PASS (planned), the ribbon re-scoped per section exactly as
  `ROOT/CLAUDE.md` section 1 specifies.

### Polish

- No placeholder text (TODO, TBD, Lorem): PASS. "NOT FOUND" and "est." appear constantly, but these
  are the document's own honesty markers, not placeholders; no banned string was found.
- No copy-paste artifacts from an unrelated template: PASS. Every company and campus name checked
  against the case is genuinely case-relevant; no stray template residue found.
- Consistent navigation bar across slides: PASS (planned).
- No slides without source citations: PASS as designed, not yet independently verifiable since the
  deck does not exist.
- Additional polish defects found that the rubric's checklist doesn't name directly but that belong
  here: a broken markdown table in section 4 (prose runs into a table cell with no line break,
  twice, around W13-W15 and the eight-PDF table) and a duplicated, inconsistently punctuated
  "Appendix E: Glossary" / "Appendix E. Glossary" heading. See Top Issues 3 and the note after Top
  Issue 5.

---

## Phase 2: quality dimensions

Dimension 5 is scored against table and citation discipline, not visual discipline, because this
document is prose and tables with no charts or diagrams; the deck that will carry visuals does not
exist yet.

| # | Dimension | Score /5 | Why |
|---|---|---|---|
| 1 | Strength of recommendation | 5 | Contrarian, named and foreshadowed at the one-page-answer level; the alternative (four picks) gets a full scorecard, a stability test and an identical launch-economics template, not a hand-wave. |
| 2 | Industry analysis funnel | 4 | Funnels cleanly from the IT-fresher freeze and branch lock-out (section 5) down to DTU's own five funnel leaks (section 9) and the recruiter-overlap screen (section 13-14). Docked one point because the funnel's "gap the alternative fills" is carried mostly by the scorecard mechanics rather than a narrative bridge connecting demand-side findings in section 5-7 directly to why these four specific campuses, as opposed to any screen-passing campus, were the ones demand pointed toward. |
| 3 | Quantitative rigor | 5 | Screen, three scenarios, a 2,000-draw stability test, a sensitivity tornado, range-based synthesis, cost decomposition and a single moneyshot are all present and cross-checked against each other (the DTU calibration check in 14.6 is a genuinely sophisticated self-audit most decks never run). |
| 4 | Action titles and quantification | 5 (19/20 on the 10-slide sample) | Sampled the 9 core slide titles plus the cover: all but the cover and thank-you carry a full-sentence finding, and 8 of 9 core titles carry a specific number (slide 8's title is the one full-sentence title without its own number, since its numbers live in the symmetric table beside it). |
| 5 | Table and citation discipline (substituted for visual discipline) | 3 | The tag legend, source-tier hierarchy and per-number "assumption" labelling are genuinely disciplined in design. Execution has real lapses: a markdown table breaks mid-row in section 4 (twice), the Bibliography appendix resolves only 3 of hundreds of cited tags, and criterion C1 is described as "of 20" in one table and "of 19 (Prism excluded)" in the very next one. Good design, imperfect execution; the gap between the two is what a careful proofreading pass would close. |
| 6 | Defensive depth (appendix quality) | 4 | Appendices A-F are extensive and every main-deck number traces to a model table, a raw dataset row or a named assumption. Docked one point for the same Bibliography gap that drives Dimension 5 and Top Issue 1: "defensive depth" should mean a judge can chase any claim to its source from the appendix alone, and for most claims in this document that chase currently dead-ends at a lane-file tag the appendix itself does not resolve. |
| 7 | Polish | 3 | No placeholder text, no copy-paste artifacts, consistent tagging discipline throughout 4,200+ lines is a real achievement at this length. But the broken table (section 4), the duplicated Appendix E heading, and the internal contradiction in section 20.6 (detailed in Top Issue 2) are concrete, checkable defects a self-review pass should have caught before this reached a critique gate. |

---

## Organiser's 9-dimension self-score (PLAN.md section 16.3)

| # | Dimension | Score /5 | Justification |
|---|---|---|---|
| 1 | Client understanding | 5 | Section 4's seventeen findings from the brief's own three links, the founder-hours model, and the funnel-as-it-exists-today section (3.4) show a depth of understanding of BeyondTech's actual operating mechanics that goes well past restating the brief. |
| 2 | Insight | 5 | The ambassador-vs-intern-post engagement gap (I4), the DCG-competition-as-launch-mechanism-in-miniature finding (I5), and the recruiter-overlap index are all outside-in exhibits specific to this founder, exactly what playbook rule P01 rewards, not generic consulting observations. |
| 3 | Storyline | 4 | The governing thought is stated once and carried consistently, and the ghost-deck test in section 25.2 shows the 12 slide titles read as one argument top to bottom. Docked one point because this document's own internal proofreading (see Top Issue 2's 20.6 contradiction) shows the throughline has not yet survived a full, careful re-read end to end. |
| 4 | Evidence | 4 | The tag legend, the eight-tier source hierarchy, and the verification-status tally (section 0.4) are a genuinely disciplined evidence system. Docked one point because the Bibliography appendix, which is supposed to be where that discipline cashes out for a reader, is nearly empty (Top Issue 1). |
| 5 | Slide clarity | 4 | The slide blueprint (section 25) gives every slide a distinct architecture with no repeated form and a named exhibit list. Can only be scored on the plan, not the execution, since the Figma deck does not exist yet; the table-formatting lapses already found in this prose document are a reason to watch closely at build time, not a reason to assume the deck will repeat them. |
| 6 | Credibility | 5 | The DTU calibration check scoring DTU highest of all 32 colleges, the honest IIT non-result, the openly logged F2 screen relaxation, and the explicit "what would change our mind" falsification table (section 2.8) are exactly the self-skeptical moves that make a scorecard worth trusting rather than suspecting. |
| 7 | Scope and options | 5 | The reserve bench with named promotion conditions, the portfolio constraints, the kill/scale thresholds at three checkpoints, and a fully designed (if not yet run) Customer Validation Plan together give the plan real optionality rather than a single brittle path. |
| 8 | Call to action | 4 | Slide 10 closes on a dated first step per P08, and the kill/scale gates are specific numbers, not vague monitoring language. Docked one point because the actual first action named (approach a named society role in days 1-30) is correct but reads as a process step rather than the single, vivid, unmistakable next action the playbook's own ideal calls for. |
| 9 | Delivery readiness | 3 | The research base is gate-disciplined and Stage-1-complete, but the deck itself (Stage 2) has not been built, the Bibliography needs a real pass before this is judge-facing, and the section 20.6 contradiction and the section 4 table break would both need fixing first. "Ready to start the Figma build" and "ready to present" are not the same state, and this document is honestly the former. |

**Total: 39 / 45.**

---

## Phase 3: what the document does well, then the top 5 issues

### What this document does well

1. **The calibration check is the single strongest piece of craft in the document.** Section 14.6
   runs the scorecard against DTU, NSUT, Thapar and BIT Mesra, the four campuses BeyondTech already
   works at, specifically to check whether the formula finds its own best-known example. DTU scoring
   the highest Fit of all 32 colleges, and the document saying so instead of treating it as an
   embarrassing anomaly, is exactly the kind of self-check that makes a judge trust a scorecard they
   cannot independently re-run themselves.

2. **The document is honest about its own uncomfortable findings rather than smoothing them over.**
   The F2 screen relaxation (5 to 4 anchor recruiters, logged plainly in 13.3.1), the fact that no
   IIT reaches the final four, and BITS Pilani Goa scoring higher than two of the actual four picks
   (excluded only by the one-institute portfolio rule, not by merit) are all reported as findings,
   not managed around. Section 2.8's "what would change our mind" table commits to falsification
   criteria in advance, which is rare discipline at this level.

3. **The founder-hours model turns a soft claim ("the founder is overloaded") into a checkable
   number.** 220 hours today, 196 after the plan across five campuses, against a 1,040-hour annual
   capacity, is the kind of artefact-not-slogan evidence the organiser playbook explicitly rewards
   (P07, P11), and it is used consistently as the real constraint on how fast new campuses can be
   added (section 20.7, section 20.10).

### Top 5 issues

**1. CRITICAL: Appendix A's Bibliography resolves almost none of what the document actually cites.**
Location: Appendix A: Bibliography (around line 2387-2396), compared against the tag legend in
section 0.2 and the 397-to-421-source tally in section 27.1.
Current state: Appendix A contains exactly three rows (S409, the BITS Pilani statistics PDF; S645
and S646, the two IIT placement-calendar sources). Every other citation in the document (hundreds of
RA##, RB##, RC##, RD##, RE##, RG##, RH##, RI## tags) resolves only to a lane raw-file that is not
reproduced or indexed in this appendix.
Fix: either pull the full cited subset of `research/raw/sources.md` into Appendix A (even a few
hundred rows is still a real bibliography), or rename and reframe the appendix honestly: state that
Appendix A carries only the three S-tagged secondary/official sources cited by that tag format, and
point the reader explicitly to each lane's own raw file for every RA/RB/RC/etc. citation, the way a
multi-tier citation system in an academic paper would. The current state, a "Bibliography" heading
over three rows, reads as an assembler bug, not a deliberate design choice, and a judge who tries to
use it the way section 0.1 promises ("check any claim in under a minute") will hit a dead end on the
very first unfamiliar tag they try to look up.

**2. CRITICAL: Section 20.6 misstates the founder-hours rate behind its own headline number.**
Location: section 20.6, "Founder hours: the time budget this plan actually fits inside."
Current state: the table in 20.6 reports the base-case roll-up (220 hours today, 132 after the plan
at DTU, 88 hours freed), which requires the base-case per-enrolment rates of 2.0 hours (A22) falling
to 0.8 hours (A23) per section 9.7 and the assumptions register (24.1). But the prose directly under
that table says the 88 hours are freed "through moving from a 3.0-hours-per-enrolment founder cost
today, A22, to a 1.2-hours-per-enrolment cost after the plan, A23" — those are the bear-case figures,
not the base-case figures the table and the 88-hour claim actually rest on.
Fix: change "3.0-hours-per-enrolment... to a 1.2-hours-per-enrolment" to "2.0-hours-per-enrolment...
to a 0.8-hours-per-enrolment" so the sentence matches both the table above it and the identical,
correctly-stated version of this same claim in section 12.6. This is exactly the kind of
cross-section numeric drift that `ROOT/CLAUDE.md` section 5 warns about ("a stale figure on one
slide is worse than a round number everywhere") — the fix should include a grep for "3.0" and "1.2"
elsewhere in the document to confirm this is the only place the bear-case rate was mistakenly
narrated as the base case.

**3. IMPORTANT: A markdown table breaks mid-row in section 4, twice, in a way that will render as a
garbled table in the assembled PDF.**
Location: section 4.2 (the ambassador-post-vs-intern-post table, around the DCG competition row) and
section 4.3 (the eight-ungated-PDFs table, immediately after "confirmed open at RA24").
Current state: in both places, the last cell of a table row runs directly into unrelated explanatory
prose with no paragraph break and no closing of the table, for example: "...| 49 | 19 | [RA38, W15] |
The implication for the launch plan (section 17 to 19) is direct: ..." sitting inside what should be
the table's final cell, and similarly "...found no 'Request access' wall anywhere [RA24]. | Resource
| What it covers | Gate status |" immediately opening the next table with no blank line separating
it from the preceding paragraph.
Fix: insert a blank line (required by markdown to close one block and open the next) after the DCG
competition row in 4.2 before the "The implication..." sentence, and after "[RA24]." in 4.3 before
the "| Resource | What it covers | Gate status |" header row. This is a mechanical fix, but it
matters because a judge reading the assembled PDF, not this raw markdown, will see a visibly broken
table at two of the document's own strongest insight sections (I4 and I2), which undercuts exactly
the content those two sections are trying to land cleanly.

**4. IMPORTANT: Criterion C1's denominator is stated inconsistently across three adjacent tables.**
Location: section 14.2 ("Count of the 20 fixed anchor recruiters"), section 14.2.1 ("C1 (anchors
visited, of 20)"), versus section 14.3 ("every C1 raw cell... is therefore explicitly labelled 'of 19
(Prism excluded)' rather than 'of 20'") and section 14.4's own column header ("C1 raw (of 19)").
Current state: the criterion description and the band-definition table both still say "of 20," while
the actual scoring mechanics, correctly, run on 19 (Prism is on the fixed list but never counted,
per section 14.3). A judge trying to hand-check a single college's C1 band against the band table in
14.2.1 would compute the wrong band if they used the stated "of 20" denominator instead of the 19 the
model actually used.
Fix: change "of 20" to "of 19 (Prism excluded)" in both section 14.2's criterion description and
section 14.2.1's band-table header, so every table that touches C1's denominator says the same thing
the scorecard itself does.

**5. NICE-TO-HAVE: The founder-hours table (220 / 132 / 64 / 196 / 88 / 1,040 / True) is repeated
verbatim four times with no cross-reference in three of the four instances.**
Location: section 9.7, section 12.6, section 20.6, and Appendix B's T11, each carrying the identical
six-row table.
Current state: each section restates the full table from scratch rather than stating the number once
and pointing back ("see section 9.7") from the later three. At 96,000 words with several genuinely
thin spots elsewhere in the document (the Lane C CTC gaps in section 5.7, the follower-count gaps in
the pick dossiers), this is length that is not buying new information the second, third or fourth
time it appears.
Fix: keep the full table at its first appearance (section 9.7, where it is introduced as the cost of
the funnel as it stands) and reduce the section 12.6 and 20.6 instances to a one-line restatement of
the headline number with an explicit "see section 9.7" cross-reference; Appendix B's T11 can stay as
the appendix's own machine-generated copy, since that one serves a different purpose (the single
source-of-truth model table, not a narrative repeat).

*(A smaller polish item not among the top 5 but worth a one-line mention: the heading before
Appendix E reads "## Appendix E: Glossary" immediately followed by a second, differently punctuated
"## Appendix E. Glossary" — one of the two should be deleted.)*
