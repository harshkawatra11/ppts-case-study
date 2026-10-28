# Writer G task: remaining plan

Plan mode activated mid-task, after sections 26 and 27 of part-G.md were already written, self-checked, and
passing. This file records what is done and what remains, since further Write/Edit/Bash calls are blocked until
plan mode is exited.

## Done so far (before plan mode activated)

- Read in full: PLAN.md (relevant sections 0, 1, 2, 4.5, 4.6, 5.4, 5.5), research/ARGUMENT.md, WRITER-BRIEF.md,
  build-log.md (all 432 lines), model/model_tables.md, case/01-case-brief.md, deck/make_values.py,
  deck/slides/s01.js through s07.js, headers of all six completed parts (A-F), rhetoric.md section 6-8.
- Invoked the case-competition-deck skill (generate-mode overview read).
- Wrote `research/parts/part-G.md`:
  - Section 26 ("The deck: four slides and an annexure...") — complete. Self-check: words 2750 (min 1800, PASS),
    tables 4 (min 4, PASS), dashes 0, excl 0, ph 0, rs 0.
  - Section 27 ("Forty questions the judges are likely to ask...") — complete, all 40 Q&As written, hardest ten
    first, plus two cross-reference tables and a closing "how to use this bank" subsection. Self-check after last
    edit was in progress when plan mode activated (file was last confirmed at ~5000+ words for section 27 alone
    after the final addition, dashes 0, excl 0, ph 0, rs 0 — this needs re-confirmation once execution resumes).

## Remaining steps (blocked until plan mode exits)

1. Re-run the self-check script to confirm section 27's word count now clears 5000 words (it was at 4477 before
   the last addition of roughly 550 words in subsection 27.3; needs a final verification run).
2. Write section 28 ("Method, limits and the validation we would run next") to part-G.md:
   - Opens with "**Answer.**" per the format rule.
   - First sentence distinguishes desk research vs model output vs assumptions.
   - Explicit "Limits" subsection.
   - Validation plan whose first sentence states plainly that none of it has been run yet, covering at minimum:
     a lessor RFP, a client SLA term review, a rider time-and-motion study on a pilot of EVs, and an
     emissions-reporting pilot — each with what it would test and roughly how long it would take.
   - At least 4 tables, at least 2,200 words.
   - Closes with "### What this section establishes, and what it does not" (3-6 bullets).
   - Self-check after writing (dashes/excl/ph/rs must all be 0).
3. Write `research/parts/appendix-E-glossary.md`:
   - Starts with `## Appendix E: Glossary`.
   - At least 70 one-line glossary entries in the form `**TERM** — one-sentence definition.`
   - Must include the named terms (3PL, AIS-156, BRSR, CEA, contribution, DERC, DRHP, EMI, EV, EV100, GHG, GLEC,
     Ind AS 116, ISO 14083, kWh, LFP, MHI, NPV, PM E-DRIVE, PPAC, QC, RACI, Scope 1/2/3, SLA, SoH, TCO, VAHAN) plus
     other terms drawn from parts A-F (e.g. AS 19, BIS, CAQM, CBIC, DERC, GNCTD, GST, IPCC, MECE, NBFC, Odisha
     AAAR, PESTLE, Porter's Five Forces, RAG status, real options, SEBI, stage gate, tornado chart, WACC-adjacent
     discount rate, etc.)
   - Self-check for em/en dashes, exclamation marks, placeholders, "Rs" instances.
4. Re-invoke the case-competition-deck skill (or confirm prior invocation suffices) and verify section 26's and
   section 28's headlines are declarative action titles with numbers (touchpoint T3), per task instructions.
5. Append a log entry to `dreamforge-case/build-log.md` under a new "## R3 writer G" heading, covering: what was
   done, per-section self-check output for sections 26, 27, 28 and the glossary file, any number discrepancies
   found vs PLAN.md (none expected beyond what prior writers already logged, since writer G only reads and cites
   the already-corrected model/ARGUMENT.md numbers), and a note that this completes R3 (all writers A-G done).
6. Final full-file self-check on part-G.md (word count, table count per section, dashes/excl/ph/rs all 0) and on
   appendix-E-glossary.md.
7. Report back to caller via SubagentHandback with the final self-check outputs and STATUS line.

## Notes for resuming

- Self-check script used throughout (saved as a .py file to avoid PowerShell/Git-Bash quoting issues):
  reads the target file, prints word count, table-separator-row count, count of em/en dashes, exclamation marks,
  unfilled `<...>` placeholders, and `Rs` currency-marker instances. All of dashes/excl/ph/rs must print 0.
- No case fact, model number, or ARGUMENT.md figure needs to change; writer G only cites existing model_tables.md
  (hash effb9a66e6) and research/ARGUMENT.md figures, already final post-M1.
- Style rules to keep enforcing: zero em/en dashes (use commas/colons/"to"), ₹ with Indian grouping (never "Rs"),
  no exclamation marks, no question-mark headings, options always "option 1" to "option 6" or "the no-award
  branch", every number tagged.
