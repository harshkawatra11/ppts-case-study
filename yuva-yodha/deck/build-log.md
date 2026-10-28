# UrjaGrid deck build log (Team IdeaForge)

Figma file: https://www.figma.com/slides/gQfxbzC6Fy5XEsXBO1TKHG

## Touchpoints (case-competition-deck skill)
- A (step 0): STATUS: PASS. Contrarian recommendation, seed on slide 2, symmetric treatment, three scenarios, one moneyshot, double synthesis, action titles all present in plan §3.
- B (pitch): STATUS: PASS. Pitch written by an Opus-class agent with the skill's rhetoric reference; no hooks, no rhetorical questions.
- C (critique): PENDING. Critic CR not yet dispatched; screenshots s1 to s11 are saved in deck/shots/.
- D (writers): STATUS: PASS for W-B (sections 5 to 9, 11,389 words, 27 tables). W-A, W-C, W-D, W-E still running at the time of this log.
- E (polish search): PENDING until final report.

## Figma build (slides 2:2 to 2:13)
- S1 cover (2:2): built in an earlier session, V1 clean.
- S2 to S6: built and V1 clean in an earlier session; screenshots s1 to s6 saved.
- S7 innovation (2:9): STATUS: PASS after two wrap fixes.
  - Header "Fluentgrid" wrapped at colW 117 (measured 117px, needs about 127px). Fixed by colW 127, labelW 262, parity panel widened to 1072 and the comfort-cap panel moved to x 1168 (width 688).
  - Row label "WhatsApp or IVR to home" (277px) shortened to "Message to home" (same meaning).
  - V1 clean; screenshot s7.png.
- S8 impact (2:10): STATUS: PASS. First build used an old inverter line from the plan; caught and rebuilt from the bound build file, which carries "Homes pay nothing for the service, and the rebate is paid in cash". V1 clean; s8.png.
- S9 roadmap (2:11): STATUS: PASS after two fixes.
  - RACI header "DISCOM" wrapped at colW 80 (measured 91px). Fixed by moving 40px from the gantt panel to the RACI panel (gantt colW 123 to 106; RACI panel x 1088, width 768; labelW 230, colW 102).
  - Milestone diamond on the "Lifeline caps live" row overlapped its "L5" label; removed (source and Figma both). V1 clean; s9.png.
- S10 appendix (2:12): STATUS: PASS. V1 clean; s10.png.
- S11 thank you (2:13): STATUS: PASS. V1 clean; s11.png. Residual: "Team Leader" wraps to two lines inside its row (readable).

## Sweeps (whole deck, 13 node ids)
- cornerRadius non-zero: 0.
- Content text under 22pt: none (SOURCE and BIBLIO exempt).
- Dashes, question or exclamation marks, banned words: none.
- Required strings: all present (moneyshot "4.2 h to 0.4 h", 7.24 crore, 2.57 GW, 0.18 GW, 15.3 MW, prices, team names, LIVE, WIRED, PILOT).
- Absent strings (Hisaab, Paytm, Dream11, TODO, TBD, stale meter counts, fixture values, github, vercel): none present.
- Node totals: S1 94, S2 198, S3 436, S4 268, S5 211, S6 219, S7 236, S8 214, S9 293, S10 214, S11 65. All within the planning-time range.

## Corrections (V0 and writer-review)
- S51 home inverter price (₹14,000 to 19,000): withdrawn. Removed from values.js and the slide 8 cost line. The ₹2,800 to ₹3,800 comparator is not on any slide. Model input A10 still carries the figure and must be re-priced before any use.
- S19 service charge upper bound: ₹146 (not ₹167) in research part B.
- S20 postpaid date: 5 May 2026 in research part B; deck says "83 lakh" without a date.
- S24 draft DR framework: dated 17 Mar 2026 in research part B.

## Residuals to report
1. Slide 5 photo frames are grey placeholders with "Screen to insert". Live-site captures were not taken, because the submission excludes deployed versions (L9). The frames stay grey.
2. IEA equity quote (S37): verifiers disagree on the exact wording. Slide 4 quotes "at a cost up to three times lower than building new capacity", which both passes confirmed. The "risk excluding these groups" line is not quoted on any slide.
3. Eskom figures (S33): 15.3 MW and the "well received" line are reported, not re-confirmed in a second pass.
4. Judging weights 20/20/25/20/15 (S32): shown on slide 4 as published in the FAQ. Not confirmed by the verifier. Check the FAQ before submission.
5. S07 feeder-log figures (3.5 h, 4.8 h) and the 70% voltage figure: unconfirmed in one pass. The slide 2 bars use the headline figures only; the feeder log appears as "3.5 h and 4.8 h" on slide 2 and must be checked.
6. S18 Ladakh tender quote: not quoted, paraphrased only.
7. S04, S05, S08, S09, S15 unverified: not used as hard quoted figures on slides.
8. Pitch (482 words): verified by main agent. Dashes 0, question or exclamation marks 0, no links, two files identical.

## Status at log time
- Deck: complete, 11 slides, sweeps clean.
- Pitch: complete.
- Research document: parts A, C, D and E pending. Part B complete. Assembly, PDF and preview PDF not yet run.
