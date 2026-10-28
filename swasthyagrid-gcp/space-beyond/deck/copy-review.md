# Copy review: deck\slide-copy.md

Checked against PLAN §0.4, §0.6, §5.9. Scope: AI phrasing/hooks, invented names, Rs/notation, deployment or
measurement claims, internal number contradictions.

## Mechanical sweeps (scripted, full file)
- Em dash (U+2014): 0. En dash (U+2013): 0. Arrow glyph (U+2192): 0. Question marks: 0. Exclamation marks: 0.
- "Rs" before a digit: 0 matches. All currency uses ₹.
- Digit grouping: every grouped number checked (38,241; 1,69,615; 1,00,000; 4,413; 21,964; 1,340; 6,359; 31,882;
  58,000; 5,726; 14,000; 37,227; 17,412) is correct Indian or coincides with Western grouping at that digit count.
  No violation.
- Banned deployment/measurement terms ("deployed", "live in", "used by", "customers", "partners", "pilots
  running"): only one hit on "partners", inside the mandatory logo fine print on S1 ("no partnership or
  endorsement is implied") — this denies partnership, it does not claim one. Not a flag.
- "Go live" / "live district" phrasing on S6 describes the six-week onboarding plan, framed as future steps in a
  feasibility section, not a claim of present deployment. Consistent with idea-stage framing. Not a flag.

## Invented names
Checked every capitalised multi-word phrase against the allow-list and the "plainly drawn from research"
exception. e-Aushadhi, eVIN, ABDM, ABHA, NITI Aayog, GeM, CDSCO, DPDP Act, Delta Ranking, Health Dynamics of
India, National Health Accounts, Medical Dialogues, Aspirational Blocks, AIM / Atal Innovation Mission (incl.
its cited "INDovation" programme in the S6 source line), and the vendor-scan citations (Codingclave, upGrowth)
are all real bodies, programmes or source names drawn from the research, not coined for this deck. Panel
headlines like "MOVE FIRST, BUY ONLY FOR THE GAPS" and "THE DAILY LOOP" are action-title style summaries, not
programme codenames.

One item worth a note rather than a fix: "NEXORA" appears three times (S1 source line, S7 source line, S8 source
line) as the name of the underlying model (`nexora_model.py` / `model_output.txt` from the earlier NEXORA deck
per PLAN §0.1). It is not on the CW allow-list verbatim, but it names an already-existing model file this deck
is citing for traceability, not a new name invented for SwasthyaGrid itself. No change recommended; flagging for
the orchestrator's awareness only.

## Internal number contradictions
Cross-checked every repeated figure across slides: 1.36 crore / 72.2% to 86.1% (S1, S2, S7, S9); ₹558 Cr (S1, S2,
S3); 79.9% (S2, S3); 43.4% (S2, S3, S7); ₹12 L licence and its ₹4 L + ₹7 L + ₹1 L build (S5, S8); 10.65x and 71%
(S2, S5, S7, S8); TAM 780 / SAM 112 / SOM 80 / beachhead 41 and their ₹ Cr values (S1, S2, S5, S8); 17,412 /
355 days per district/facility (S7 twice); sensitivity grid floor 58.6 lakh matching the S7 headline and S8
source line. All consistent. The only near-miss is "49.0 facilities per district" (S5, S7) against the "50 ×
₹14,000" used in the ₹12 L licence build-up (S5) — same slide, not a cross-slide contradiction, and plausibly an
intentional average-vs-rounded-multiplier distinction from the model. Not flagged as an error; noting it so the
orchestrator can confirm against the model if there is any doubt.

## Result
No issues requiring a string change (old -> new). Two informational notes only (NEXORA citation, 49.0-vs-50
facility count), neither violates a golden rule as written.

STATUS: PASS
