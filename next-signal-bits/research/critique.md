# Critique: Next Signal research deliverable

Reviewed `next-signal-research.md` (post-assembly, 99,434 words, 173 tables, ASSEMBLY PASS) against the
`case-competition-deck` skill's critique rubric, adapted per PLAN.md §0.4 touchpoint T6 to Dimensions 1
(recommendation strength), 3 (quantitative rigour), 4 (action titles and quantification), 6 (defensive
depth) and 7 (polish). This is a research document, not a slide deck, so slide-specific pass/fail items
(nav bar, cover slide, slide count) do not apply; the equivalent document-level checks are used instead.

## What the document does well

1. **The contrarian recommendation is in the headline and symmetric end to end.** Section 2's opening
   `**Answer.**` states the thesis in one sentence ("computes a ranked list of anomalies ... before any
   language model is allowed to form an opinion ... treats the company's own disclosures as the least
   independent evidence available"), followed by a genuinely symmetric three-reasons-each table (Axis:
   Quantitative, Strategic and evidentiary, Feasibility and trust) comparing the obvious build against
   Next Signal's design on identical axes. Section 2.5 ("What would change the team's mind") states four
   concrete falsifying conditions in advance, which is a stronger and more specific defensive move than
   most decks attempt even in their appendix.
2. **Every number traces to a real source or an honest placeholder, never a silent invention.** The
   assembler resolved 261 distinct sources against a 519-row register with zero missing citations, and
   115 `{{EVAL:...}}` placeholders mark every number that depends on a real engine run that has not
   happened yet (sections 19 and 21, explicitly two-pass by design). This discipline is visible
   throughout: section 2's moneyshot is a template with named components, not a fabricated figure.

## Top 5 issues

1. **IMPORTANT: Primary-source share is 11.2% over the whole register, well under a credible target.**
   Measured mechanically by the assembler (`assemble.py`'s `primary_source_share` check) over all 519
   register rows, only 58 resolve to a primary-source host (NSE/BSE/SEC/FDA/CDSCO/NPPA/SEBI/RBI/MCA/
   niftyindices/PIB). Most of the register is SNIPPET-grade secondary coverage gathered opportunistically
   by the research lanes, which is appropriate for breadth but is not representative of what the document
   actually leans on for its load-bearing claims. Fix: recompute this share over the ~261 sources actually
   *cited in the body* rather than the full register, since many uncited SNIPPET rows were gathered but
   never used; if the cited-only share is still materially below 55%, that is worth a sentence in section
   10 or 26 acknowledging it honestly, in the same register as the document's other self-critical notes
   (e.g. the "Thirty public sources" title-versus-20-rows gap already flagged in section 10's own body
   text).
2. **IMPORTANT: Two writer-flagged arbitration items are still open.** Writer D flagged, during drafting:
   (a) section 10's title says "Thirty public sources" but `source_catalogue.csv` has 20 verified rows
   (the body text already states this honestly, but the title itself still overclaims); (b) section 11's
   export/* LIVE/WIRED/PLANNED classification was set to built/tested based on build-log.md's record of a
   real PDF render, diverging from this session's own dispatch-prompt instruction. Neither is a
   fabrication, but both are unresolved inconsistencies a judge could reasonably needle on live. Fix:
   either retitle section 10 to match its own body ("Twenty public sources..." or "A twenty-source
   catalogue, on a path to thirty..."), or add one explicit sentence at the top of the section
   acknowledging the shortfall before the reader hits the number; confirm section 11's export/* status
   against the engine's actual current state one more time before the Round 1 submission, since that
   state has kept changing (254 tests passing as of the last build-log entry, likely more by submission).
3. **IMPORTANT: Section 19 (worked discoveries) and section 21 (evaluation) are necessarily thin until
   the orchestrator and eval harness produce real output.** This is correct and by design (the two-pass
   rule), not a drafting failure, but it is the single biggest remaining gap between this document and a
   complete deliverable: a judge reading section 19 today sees method and structure, not a single
   concrete discovery. Fix: this is a build-sequencing item, not an editing one. Prioritize finishing
   `pipeline/run.py`'s live source/LLM wiring and running the eval harness against at least the 5 NIFTY 50
   Track D companies before the Round 1 deadline, then re-run pass 2 on sections 19 and 21 per
   WRITER-BRIEF.md's own rule, and re-run `assemble.py md` to confirm the `{{EVAL:` placeholder count
   drops to zero.
4. **NICE-TO-HAVE: Appendix G (evaluation tables) is currently just an honest stub paragraph.** This is
   correct given the harness has not run, but it is visibly the thinnest of the seven appendices next to
   Appendix A's 5,645-word real bibliography and Appendix B's live-generated metric registry. Fix:
   regenerate Appendix G from `model/model_tables.md` once the eval harness runs (same two-pass
   dependency as item 3), per PLAN.md §4.4's appendix list.
5. **NICE-TO-HAVE: Appendix B's registry (36 metrics) undercounts the document's own stated design
   target.** Section 2.6's headline-numbers table and the metric-library sections both cite "more than
   40" formulas as the design target, while the live registry Appendix B generates from
   (`next_signal/metrics/library.py`) currently holds 36. The document is already honest about this (the
   appendix's own generated note states the registry will grow), so this is not a contradiction, just a
   gap worth closing before the number is repeated on a deck slide or in the Round 1 PDF, where there is
   less room for a footnote explaining the discrepancy.

## Single highest-leverage suggestion

Get a real end-to-end evaluation run (even on a handful of companies, even with most source clients still
partial) through `pipeline/run.py` before anything else. Every other open item in this critique either
resolves itself once real numbers exist (items 3 and 4) or becomes much easier to fix cleanly once the
team is working against real figures instead of design targets (items 2 and 5). The document's structure,
argument and defensive depth are already strong; what it is missing is the one thing only a live run can
supply.

STATUS: Critique complete. 2 IMPORTANT content-arbitration items and 1 IMPORTANT measurement item open;
2 NICE-TO-HAVE items tracked for the next pass-2 cycle. No CRITICAL issues found.
