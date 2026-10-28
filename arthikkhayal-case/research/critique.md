# Critique: Arthik Khayal 2026 research document (critic CR, research stage)

Scope note. The case-competition-deck rubric is calibrated on a 100-slide, eight-section M&A deck. This is a
65,000-plus-word research document that carries the argument the eight-slide deck compresses, so every rubric item
below is re-based onto that document rather than onto a slide count: "8 main sections present" becomes the 8-section
logic mapped onto this document's 34 numbered sections (summary section 2; industry sections 4 to 7; company sections
3 and 5; fit and diagnosis sections 8 to 10; option filter section 11; alternative sections 12 to 17; quantitative
sections 21 to 25; feasibility sections 18 to 20 and 26 to 28; conclusion sections 2 and 31). "Sample 10 action
titles" becomes all 34 H2 titles. "Appendix depth" becomes "every number has a tag that resolves." The marketing
case-type guide (operations-hybrid calibration per the plan's own section 3.1) and the critique rubric's quality
dimensions are applied throughout; the pass or fail items stay pass or fail.

## The two strongest things

**1. The honest bear case is stated, not buried, in all four places the task asked for.** Section 2.4's scenario
table is followed immediately by section 2.4's own sentence: "The honest reading of this table is that the bear
case does not clear the floor the case sets... misses the 200 basis point floor by about 98 basis points." Section
22.5 is headed "The honest reading: the bear case misses the 200 bps floor." Section 23.1 and 23.3 show that every
single assumption, moved to its bear value alone, still clears 2.00 pp, and states plainly that it is the full bear
scenario, all twenty-two assumptions at once, that falls to +1.02 pp and misses the floor. Section 28's risk register
puts "the market falls further than the bear case assumes" first by probability and impact, with the week 6
checkpoint named as the early-warning trigger. This is rhetoric pattern 6 (pre-empting your own weaknesses) executed
at document scale rather than as a single disclaimer, and it is rare for a team to let its own bear case fail a
target this visibly four separate times instead of once in a footnote.

**2. The foreshadow is engineered correctly and the "Conclusively" payoff lands on the first read.** Section 4 ends
on "What the national data shows working, and what ONL's own account base is already built to receive, point at the
same kind of answer. This section does not name that answer; sections 9 through 18 of this document do." Section 10
is headed "Five whys trace the flat 14.74% to one root cause" and its subsection 10.4 is titled "Naming the gap,
without naming the fix," closing with "We name this gap here deliberately without naming any of the seven levers
that close it." Section 11 opens its Answer paragraph with the word "Conclusively," exactly as the task specified,
and section 11.5 repeats the word as a subsection heading. A reader who reaches section 12 already expects the fix
to put ONL "somewhere the customer already is," and that is exactly what the salary day, holdings check, RM review
and Dhanteras levers do. This is the single most powerful corpus pattern (rhetoric reference 2) and it is the
cleanest execution of it anywhere in this document.

## Re-based rubric scores

### Pass or fail

- Recommendation in the opening headline: PASS (section 2's own H2 carries the recommendation and the number).
- Contrarian framing against the obvious answer: PASS (section 2.2's do-not column is "selling the market harder,"
  which is what the case's own company already tried for a year at +0.04 pp).
- Foreshadow 20-plus sections before the alternative is named: PASS (section 4 and section 10, against section 12).
- Alternative gets the same rigor as the rejected option: PASS (T17/T18 option screen scores both; sections 12 to 17
  give the alternative the full seven-part lever template, symmetric across all seven levers).
- MECE option filter with retain or discard verdicts: PASS (T17, eight options, five weighted criteria; T18 robustness
  under three further weight sets).
- Three-scenario projection on every uncertain number: PASS (bear, base, bull on every quantitative claim in T9
  through T19, applied consistently).
- One moneyshot: PASS (14.74% to 17.02%, 19,053 against 1,649, 11.6 times, repeated at sections 2.3, 2.8, 22, 24, and
  the appendix, always the same figures).
- Double synthesis ("Conclusively" and "Therefore"): PASS for "Conclusively" (section 11); section 31 confirms
  "Therefore" lands on slide 8, outside this document's own numbered sections, so this document itself only carries
  the first half of the pair, which is correct given the plan's own slide/document split.
- Action titles on all 34 H2s: PASS, see the full count below.
- Source citations: PASS (every quantitative claim tagged; assemble.py reports 0 untagged number lines).
- No placeholder text, no copy-paste artifacts: PASS (assemble.py's banned-word and duplicate-heading checks are
  both empty).

### Quality dimensions, scored 1 to 5

- Strength of the recommendation: 5. Contrarian, foreshadowed, full alternative analysis with a seven-part lever
  model and a 13-week implementation plan.
- Industry analysis funnel: 5. Section 4 funnels from the national active ratio down to ONL's own 14.74% and closes
  on the specific gap, without naming the fix.
- Quantitative rigor: 5. Option filter (T17), core model (section 21), three scenarios on every output, decomposed
  lever-by-lever cost, one moneyshot, plus a tornado sensitivity (T16) and a holdout-detectability table (T19) as
  the sophistication signals the rubric asks for beyond the load-bearing minimum.
- Action titles and quantification (all 34 H2s, 2 points each, 68 possible): every one of the 34 numbered H2 titles
  is a full sentence finding; 31 of 34 carry at least one specific number in the title itself. The three without a
  bare number in the title (sections 18, 19, 29) still carry a specific quantity in the first clause of their own
  Answer paragraph (seven features, ten checks, 30 interviews). Score: 65/68, rubric band 5.
- Defensive depth: 5. Appendix A (314-row bibliography), Appendix B (T1 to T19), Appendix C (glossary) and Appendix D
  (data conflicts and method limits) are all present, and the 25-number spot check below did not find a main-body
  claim without a resolving tag.
- Polish: 4. assemble.py's own checks are all clean (see the quoted JSON below), but the humanizer sample below
  found a systemic tell the automated check does not catch, which is the basis for issue 1.

## Test 1: every PLAN section 7.0 brief line (C-X to C-N) answered in the body, not only listed in section 1

Section 1's coverage matrix lists all 42 case IDs against a document section, which satisfies the rubric's minimum.
Spot-checking the IDs least likely to get real treatment beyond that list (the ones with no obvious model number
attached): C-T1 to C-T3 (cover and sponsor marks) map to section 0.9's naming rule and section 5's sponsor box, both
of which discuss the IDs substantively rather than restating them. C-D3 (the case's own "inactive" definition) gets
a full paragraph of its own translation logic in section 0.10 and section 7.5, and reappears in Appendix D.3. C-PR1
to C-PR6 (the product and pricing table) are each used in a real calculation: C-PR1 drives the ₹2.40 brokerage line
in section 25's revenue build, C-PR3 drives the zero-brokerage design choice behind the salary day instalment in
section 12, C-PR5 and C-PR6 drive the BSDA annual-charge line and the "what ONL already tried" diagnosis in section
10. C-N1 and C-N2 (the appendix's rounding and definition notes) govern the rounding reconciliation in section 3 and
the glossary in Appendix C. None of the 42 IDs sampled stops at the section 1 listing; every one checked carries into
a body section that does something with it. PASS.

## Test 2: the honest bear case appears in sections 2, 22, 23 and 28

Confirmed in all four locations, quoted above under "strongest things." PASS.

## Test 3: every Message copy block against the section 19 ten-point test

Five message copy blocks exist (sections 12, 13, 15, 16, 17 twice counting the guided-order walkthrough), each
inside a labelled `Message copy (draft, subject to compliance review):` blockquote. Scored against table 19.2's ten
points: no block implies a return, names a fund as better than another, rewards a trade, or uses urgency or fear
language. Every block carries the standard risk line. The salary day card (section 12) carries one open flag, not a
fail: point 1 ("no advice") is scored "open question" rather than "pass," because section 7.1 and 19.2's own footnote
honestly state that no SEBI circular settles whether a rule-built, no-default, alphabetically-ordered exchange-traded
fund list sits inside the broker's incidental-advice carve-out. That is the document doing exactly what the content-
integrity rule requires (not presenting an unsettled legal question as a settled fact), not a drafting failure. No
copy block fails any of the ten points. PASS, with the one honestly-flagged open item noted rather than hidden.

## Test 4: the foreshadow mechanics

Confirmed above. Section 4 and section 10 both name the gap ("a gap before login") without naming any of the seven
levers; section 11's Answer paragraph opens "Conclusively," and section 11.5 repeats it as a heading. PASS.

## Test 5: 25 numbers checked against model_tables.md and case/01-case.md

Twenty-five load-bearing figures were checked by direct comparison against T1 to T19 in `model/model_tables.md` and
against `case/01-case.md`'s own exhibit rows: 14.74% and 1,19,339 of 8,09,746 (C-E1, matches exactly); 14.70% and
1,07,889 of 7,33,855 (C-E1, matches); 6,89,375 idle and 5,39,954 salary-idle, 78% (T2, matches, 5,39,954 divided by
6,89,375 is 78.3%, correctly rounded); the seven lever figures 5,661, 3,081, 4,083, 2,311, 413, 1,607, 1,897 summing
to 19,053 (T10, matches, and section 2.5 shows the running addition); 9,783 and 32,037 (T11, matches); 15.76%,
17.02%, 18.68% and +1.02, +2.28, +3.94 pp (T11, matches); 8,887 to 14,072, midpoint 11,479 (T7, matches); 8,35,042 and
1,23,067 (T8, matches); 16,701 and 25,051 (T8, matches); ₹16,49,357 and ₹87 (T13, T11, matches); 1,649 and the 11.6
times gap (T14, matches, 19,053 divided by 1,649 is 11.56, correctly rounded to 11.6); ₹62, ₹2.40, ₹15, ₹45 (T15,
matches); 4.40 and 2.60 (T17, matches); 24.1% salary growth and negative 33.6% credit card (T4, matches the locked
"24% / 34%" rounding in PLAN section 4); 47% and 40% (T6, matches); and the case's own C-F4 "very few new accounts"
corrected wording (confirmed present verbatim at the research document's section 9.1 table and section 17.1).

One rounding note, not a mismatch: the research document states the cash payback period as "about 17 months"
(sections 25 heading, 25.4, 25's exhibit line, and question 31) while T15 and the Appendix B reproduction of T15 both
carry the precise figure "16.6" months. 16.6 rounds to 17 under ordinary rounding, and PLAN section 4's own locked-
number table already states "17 months" as the rounded figure, so this is consistent with the plan rather than an
error, but a reader who checks T15 against the prose will notice the two numbers differ by 0.4 months without an
explanation of the rounding. No other mismatch was found across the 25 numbers checked.

## Test 6: sponsor separation and the dormant/inactive mapping hold everywhere

Sponsor separation: every YES Securities and YES Bank fact appears inside section 5's clearly labelled "Sponsor
context, not case data" box, or is explicitly re-labelled "sponsor context, not case data" inline where it recurs
(for example the strategic group map in section 6.1). No sentence anywhere in the document attributes a YES
Securities or YES Bank fact to Trade Private Limited or ONL Trade. The two Lane I sponsor quotes (I08, I09) were kept
out of the assembled research document entirely, which is the correct, stricter-than-required outcome.

Dormant/inactive mapping: section 0.10 states the rule, section 7.5 applies it to the exchange circular, and
Appendix D.3 restates it for a reader who skipped section 0. Every one of the 17 occurrences of the case's own term
"dormant [C-D4]" checked resolves correctly. One minor exception: Appendix B's reproduction of T1's row for
assumption A10 (copied verbatim from `model/model_tables.md`) reads "flagged inactive under the Oct 2024 exchange
circular," using the exchange's own word without the [C-D4] translation or a footnote, because this text is
generated from the model file rather than written by a research-section author. This is the one place in the
document where the stated "translate every time" rule does not literally apply, since the model file predates the
translation convention. See issue 2 below.

## Test 7: section 29 and no fabricated primary research anywhere

Section 29 opens exactly as required: "Customer validation plan (not yet run)" is the section's own H2, and its
Answer paragraph states plainly that nothing has been run. A full-document search for "interview," "usability
round," "survey result," "test result," "customer quote" and "focus group" found every occurrence either inside
section 29's own plan (framed as what interviews "would test"), inside the content-integrity statement in section
0.2 ("No interview, survey, test result or letter of intent exists behind any lever"), or inside the Q&A table at
section 8.3 explicitly noting that the jobs-to-be-done table draws "only on the case's own facts... not an invented
customer quote." No fabricated interview, quote or test result appears anywhere in the main body. PASS.

## Test 8: humanizer sample across 15 paragraphs, all parts

Fifteen paragraphs were read across sections 2, 2.3, 4.10, 10.1, 10.4, 11.5, 19 (three paragraphs), 22.5, 25, Appendix
D.3, and two from the middle sections (7.4, 14). Counting tells by the humanizer's sections 1, 2, 3, 4, 5, 6, 8, 13
and 19:

- Section 8 (dashes): 0 across all 15 paragraphs, matching assemble.py's own dashes:0 result.
- Section 2 (one-line closers), 3 (sayings that sound deep), 4 (staged run-ups), 6 (forced triads), 13 (inflated
  significance), 19 (bold as decoration): 0 across all 15 paragraphs. The document's declarative, numbers-first
  register genuinely avoids these.
- Section 5 (arguing with no one): 0. Every "this is not a claim that..." style sentence found (for example section
  10.4's "It is worth stating plainly what this diagnosis does not claim") answers a real, specific objection the
  text itself just raised, rather than a strawman, so this does not count as a tell under the rule's own
  "weak alone, needs company" standard, and here it has no company.
- Section 1 (not X but Y): the genuine finding. Counting strictly, the 15 sampled paragraphs contain 2 instances
  (section 10.1's "a gap before login, not a gap in investor confidence or market sentiment," and section 7.1's
  heading "an open question, not a settled fact"). A document-wide grep for the same construction found it repeated
  roughly 20 to 25 times outside the two locations PLAN section 2.3 permits (the section 2 do/do-not table and the
  section 11 Conclusively paragraph), including inside four subsection headings (7.1, 7.15, 14.3a, 14.8). Per-
  paragraph count: 2 tells in 15 paragraphs sampled, 0.13 tells a paragraph, which is still under the plan's own
  "under 1 tell per paragraph on average" threshold restated in HU2, but it is not the "zero genuine tells" HU2
  reported, because HU2's own sample evidently did not land on this specific construction. See issue 1 below for why
  this escaped both the automated check and the humanizer pass.

Worst three paragraphs quoted: (1) section 10.1, "This is a gap before login, not a gap in investor confidence or
market sentiment"; the fix is "This is a gap before login. It is not a gap in investor confidence or market
sentiment" only if the plan's rule is read strictly, or no fix at all if the rule is read as intending to ban the
staged "not just X but Y" emphasis construction specifically rather than any clause containing the word "not." (2)
Section 7.1's heading, "Investment advice and the incidental-advice carve-out: an open question, not a settled
fact"; headings were likely not in scope when HU2 sampled body prose. (3) Section 14.8's heading, "Why a conversation,
not a card, is the right shape for this group," the same pattern, again in a heading rather than body prose.

**The bold flag in part-B section 7, specifically asked about.** "**This research corrects the reporting window
cited at planning time.**" sits outside the standard `**Answer.**` lead convention. It should stay, not convert to
plain prose. The humanizer's own section 19 bans bold used as decoration, a label with no information of its own;
this bold sentence is the opposite case, a functional flag marking exactly where this document's own number departs
from a number stated at an earlier point in the project, which is precisely the kind of signal the "answering the
judges' hardest questions" standard (section 32, question 3 area) depends on being easy to find. Converting it to
plain prose would bury a correction a judge or a verifier might specifically search for. Keep it as a bold flag;
it is functional, not decorative.

## Up to eight issues

1. **CRITICAL. The "A, not B" contrastive construction (humanizer section 1) is used roughly 20 to 25 times outside
   the two sections PLAN 2.3 permits, including in four subsection headings.** Current state: section 2.3's rule
   restricts this construction to the section 2 do/do-not table and the section 11 Conclusively paragraph, "where
   both halves carry numbers." Section 10.1 ("a gap before login, not a gap in investor confidence or market
   sentiment"), section 7.1's own heading ("an open question, not a settled fact"), section 7.15's heading ("an
   open-ended list, not a fixed count"), section 14.3a's heading ("why coverage, not a single RM relationship"),
   section 14.8's heading ("why a conversation, not a card"), and a further 15 to 20 body sentences across sections
   5 through 20 all use the same pattern with neither half carrying a number, which the rule does not permit outside
   its two named exceptions. `assemble.py`'s `not_x_but_y` check reports 0 and HU2's sample also reported zero,
   because both evidently test only the literal "not just X but Y" or "it's not X, it's Y" phrasing, not this
   reversed, single-clause form. Fix: either amend `research/assemble.py`'s check to also flag the "X, not Y" form
   outside the two permitted sections so this is caught automatically on the next pass, or run one more targeted
   humanizer pass across the document that specifically hunts this construction and either drops the negative half
   or moves it into two sentences, as the humanizer's own before/after example shows ("This does not mean every
   choice is equal. It means..."). Why it matters: section 2.3 is one of the plan's explicit, named rules, and the
   gap between HU2's reported "zero genuine tells" and what a five-minute grep finds means the automated QA for this
   specific rule cannot currently be trusted on its own.

2. **IMPORTANT. Appendix B's reproduction of assumption A10 does not carry the [C-D4] dormant translation.**
   Current state: `model/model_tables.md`'s T1 row for A10 reads "flagged inactive under the Oct 2024 exchange
   circular," using the exchange's own word with no [C-D4] tag, and this text is copied verbatim into the research
   document's Appendix B by `assemble.py`, so the "translate every time" rule in section 0.10 has exactly one
   silent exception. Fix: add one clause to A10's basis string in `model/activation_model.py` or `model_tables.md`,
   for example "flagged inactive under the Oct 2024 exchange circular (the case's dormant [C-D4])," and rerun the
   model and `assemble.py` so the fix propagates automatically; this does not touch the locked numeric values (0.5,
   0.55, 0.45), only the basis text, so it does not trigger the section 5.3 update protocol. Why it matters: the
   test specifically asks whether the mapping "holds everywhere," and a generated appendix table is exactly the kind
   of place a manual translation rule quietly stops applying once content moves from hand-written prose to a script
   output.

3. **NICE TO HAVE. The ₹62-a-year, 17-month payback figure in prose is a rounded form of T15's precise 16.6 months,
   stated without the rounding being shown.** Current state: sections 25's heading, 25.4's table, the exhibit line
   and judge question 31 all say "17 months" or "about 17 months"; T15 and its Appendix B reproduction both carry
   "16.6." Fix: add one clause the first time the figure appears in section 25, for example "about 17 months (16.6
   months precisely, T15)," so a reader checking the appendix table against the headline number sees the rounding
   stated rather than a silent 0.4-month gap. Why it matters: section 2.2 of the plan requires statistics to stay at
   the precision the source supports; this is the one figure in the 25 checked where the prose's rounded form and
   the table's precise form are not bridged by an explicit statement that one is a rounding of the other.

4. **NICE TO HAVE. Lane I's own house style note on quote fidelity (R-I.md's preamble, "reproduced exactly as
   published, including any punctuation") is contradicted once, inside I09, by the no-dash rule, and the resolution
   (substituting a comma for the source's en dash, flagged by the verifier for critic review) was handled correctly
   by simply excluding I08 and I09 from the assembled document rather than deciding the fidelity-versus-house-style
   conflict.** Current state: this is not currently a defect in the research document, since neither quote appears
   in it. Fix: none needed for this document; if a future pass ever needs a sponsor-context quote inside the
   assembled document (it should not, per the sponsor-separation rule), resolve the fidelity-versus-dash-rule
   conflict explicitly in section 2.2 rather than leaving it as an unresolved tension between two standing rules.
   Why it matters: flagged by the research team itself for critic attention; recorded here so it is closed rather
   than silently dropped.

## Verification: regulatory corrections, case correction, and assembly checks

**The two mandated regulatory corrections** are both present and correctly stated. Section 7.4 states, in a bolded
flag, that NSE/INSP/63425 (14 August 2024) "is in abeyance," suspended by NSE Circular 06/2025 (24 January 2025)
pending a Brokers' Industry Standards Forum proposal, and correctly redirects the document's inducement argument to
the NSE advertisement code and the general anti-inducement principle rather than citing the suspended circular as
current law. The same section states, also under a bolded flag, that the SEBI ad-code reporting window correction
stands at "three working days" (the September 2026 board memorandum), superseding the 24-hour figure from the June
2026 consultation paper, with an explicit note that neither figure is yet final law. Both corrections are also
carried into table 19.3's approval-path row.

**The case correction (C-F4)** is correctly reflected: `case/01-case.md` and the research document both read "Very
few new accounts reach this within the first month," and the research document's own coverage matrix (section 1),
funnel table (section 9.1) and new-account lever section (section 17.1) all cite the corrected wording with the
[C-F4] tag, consistent with build-log.md's own note that no quantitative model use of the old wording was found when
the correction landed.

**`research/assemble.py`'s acceptance checks all passed.** Rerunning `python -X utf8 arthikkhayal-case/research/assemble.py md` reproduces the build log's own PASS result exactly:

```
{
 "words": 89446,
 "tables": 194,
 "dashes": 0,
 "exclamations": 0,
 "question_headings": [],
 "banned": {},
 "q_outside_32": 0,
 "not_x_but_y": 0,
 "h2_numbered": 34,
 "answers": 36,
 "cited_S": 1,
 "missing_S": [],
 "dup_headings": [],
 "ai_statement": 0,
 "untagged_number_lines": 0
}
ASSEMBLY PASS
```

Every field the task asked about is confirmed: dashes, exclamations, untagged_number_lines, ai_statement, not_x_but_y
and q_outside_32 all 0; banned, missing_S and dup_headings all empty; question_headings empty, so no stray question
mark outside section 32. The `not_x_but_y:0` result is accurate to what the check actually tests (see issue 1); it
is not evidence against issue 1, only evidence that the check and the rule are currently testing different things.

## The single highest-leverage suggestion

Fix issue 1 before the next pass touches this document, and fix it by widening `assemble.py`'s check rather than
only hand-editing the flagged sentences, because a document this size will keep reintroducing the same construction
under revision pressure unless the automated gate actually catches it. Everything else here is either already
correct (sponsor separation, dormant mapping except one generated table, the two regulatory corrections, the case
correction, the honest bear case, the foreshadow, the message-copy discipline, the validation-plan honesty) or a
one-clause fix (issues 2 and 3) that does not touch a locked number, the recommendation, a lever or an H2 title.
