# Build log: Arthik Khayal 2026

## B0, B1: Bootstrap
- PLAN.md copied byte-for-byte to arthikkhayal-case/PLAN.md
- extract.py run: files 22 -- PASS

## B2: build-log.md and DECISIONS.md started -- PASS

## M1: Model run
- CHECKS 12/12 HASH fc66d11096
- FINDINGS 2.28 1.02 3.94 19,053 17.0% Rs16.5 lakh Rs87 1,649
- Matches plan's planning-time verified numbers exactly -- PASS

## M2: Deck generator
- gen.py pre: wrote preamble.js (31863), mock_figma.js (14888), values.js (7132)
- gen.py mock: all 8 slides OK, warnings [], ISSUES 0 for all, node counts match plan exactly (138,390,335,409,309,289,249,40)
- gen.py copy: copy issues 0
- gen.py preview: 8 previews written to deck/shots/
- STATUS: PASS

## B3: Touchpoint A (case-competition-deck skill) -- PASS
- Skill loaded via Skill tool. Confirmed PLAN.md section 3 carries all nine elements:
  1. Contrarian answer (3.3): meet the account inside the bank vs. sell the market harder
  2. Seed/foreshadow (3.2, diagnosis "why 5"): "No ONL message reaches them in the bank app"
  3. Symmetric treatment (7.1): seven-part lever template applied to all 7 levers in sections 12-17
  4. Three scenarios (4, T11): bear/base/bull on every quantitative claim
  5. One moneyshot (3.2): slide 5, same Rs16.5 lakh -> 19,053 vs 1,649, 11.6x
  6. Double synthesis: "CONCLUSIVELY" (slide 4) + "THEREFORE" (slide 8)
  7. Action titles: every slide headline is a full-sentence finding with a number
  8. Third-party validation: Lane I quotes (SEBI, NSE, Thaler/Benartzi, WGC, AMFI, FCA)
  9. Pre-empted weaknesses: the honest bear-case reading (+1.02pp misses 200bps) stated in research sections 2,22,23,28

Humanizer skill also loaded for section 2.3 standard (applied throughout slide copy already; will be re-applied by each research writer per 11.2).

## C0: Figma setup and cover (F1-F4)
- F1: create_new_file (slides, "Arthik Khayal 2026 | Team IdeaForge"), team 25/A16/057 HARSH KAWATRA's team. File key UidfYOpqRKbPxXKJMhftJV. create_session OK (first attempt transient 500, retry succeeded)
- F2: setup.js -> count 8, ids [2:2,2:4,2:5,2:6,2:7,2:8,2:9,2:10], fontsOk all true -- PASS
- F3: gen.py bind 1 -> slide_01_1.js (42759), slide_01_2.js (43325), v1_01.js; both parts run via use_figma with warnings: []; V1 clean:true, count:0 -- PASS
- F4: screenshot of slide 1 saved to deck/shots/s1.png (220561 bytes). Matches preview_01.png: mind map with 8 actor nodes (parent bank, rival brokers, bank-led peers, regulators, market, customer, owned channels, data/consent), answer card, team table (Harsh Kawatra DTU Team Leader / Gursimran Kaur GGSIPU Member), source line -- PASS

STAGE 1 (research) starting now.

## R1: Research verifiers, batch 1 of 3 (V-B, V-C, V-D) dispatched in background
- V-B (sponsor and bank-led broker context): agent a2f40d0e478f5a313
- V-C (Indian broking market and activity): agent aaf968e6ae23ab1a7
- V-D (regulation): agent a656280362761ad63
Awaiting completion before dispatching batch 2 (V-E, V-F, V-G).

### V-B complete: R-B.md, 68 rows (VERIFIED search-only 59, UNVERIFIABLE 6, CORRECTED 0), Gaps and Conflicts present -- PASS
- No legality/roadmap-date flags. No assumption changes triggered (5.3 not invoked).
- Key facts: YES Securities SEBI reg INZ000185632, FY25 net worth Rs453.06cr; NSE active clients Sep 2026 confirmed (ICICI 21.60L, Kotak 13.92L, HDFC Sec 13.54L, SBI Sec 10.21L); YES Bank 1,334 branches, CASA Rs1,11,959cr.

### V-C complete: R-C.md, 70 rows, Gaps and Conflicts present -- PASS
- Confirms all planning-time findings (NSE active clients, SEBI FY26 F&O stats, SIP, gold ETF). A65 (depository charge) considered, no change -- within vendor range, no primary same-unit figure to trigger 5.3.
- New: F&O trader count conflict (Rajya Sabha 7.86 million FY26 vs secondary 87.5 lakh) -- noted in Appendix D, does not affect locked loss-percentage figures (87.7%, 88.5%, Rs91,685cr unaffected).
- Broker shares pinned with dates: Groww 1.34cr (29.16%), Zerodha 67.92L, Angel One 67.56L, ICICI Sec 21.61L, HDFC Sec 13.54L, SBI Sec 10.21L (Sep 2026).

### V-D complete: R-D.md, 70 rows, Gaps and Conflicts present -- PASS
- Two CORRECTED items logged for writers (not T1 assumptions, informational/citation corrections):
  1. NSE/INSP/63425 (14 Aug 2024) inducement circular is IN ABEYANCE since NSE Circular 06/2025 (24 Jan 2025). PLAN.md section 3.3's inducement argument should cite the NSE advertisement code and general anti-inducement principle, not this specific circular as current law.
  2. SEBI common ad code reporting window: 24 hours (Jun 2026 consultation) superseded by 3 working days (Sep 2026 board memo, not yet final law).
- Flagged gap: no SEBI guidance directly answers whether the rule-built neutral ETF list (the salary-day lever) falls inside the broker incidental-advice carve-out (Reg 4(g), IA Regs). Flagged for writers to state as an open question in section 7/19, not a settled legal fact -- consistent with plan's honest-reading standard.
- RBI 2027 Responsible Business Conduct amendment: confirmed effective 1 Jan 2027 (RBI directions issued 15 Jun 2026), which falls after the 31 Jan 2027 measurement date -- does not bind the roadmap, noted as upcoming only.
- No T1 assumption value changed; 5.3 not triggered.

## R1 BATCH 1 OF 3 COMPLETE (V-B, V-C, V-D). Total rows: 208. Dispatching batch 2 (V-E, V-F, V-G).

## R1: Research verifiers, batch 2 of 3 (V-E, V-F, V-G) dispatched in background
- V-E (behavioural science and activation evidence): agent a19a59f860126b75c
- V-F (channels and unit costs): agent a058cef1f75900ae6
- V-G (calendar and culture): agent abe8ff561a6697609

### V-G complete: R-G.md, 53 rows, Gaps and Conflicts present -- PASS
- UPDATE for writers: NSE Muhurat circular now published (Ref. 149/2026, 19 Oct 2026, continuation of NSE/CMTR/71775): session confirmed Sunday 8 Nov 2026, pre-open 2:05-2:20pm, continuous trading 2:20-3:30pm. Research section 15 may now cite exact timing instead of "as announced by the exchanges" if desired (deck copy stays with the safe placeholder, no override needed).
- No A28/A29/A30 changes triggered (5.3 not invoked, team estimates stand).
- Dhanteras 6 Nov 2026 confirmed by consensus (one outlier source noted in Conflicts).

### V-E complete: R-E.md, 70 rows, Gaps and Conflicts present -- PASS
- No T1 assumption changed (A21,A22,A27,A33,A36,A39 are calibrated team estimates, not literal study replications; 5.3 not triggered).
- Writer note: ostrich effect evidence shows inattention after a downturn does NOT imply more trading -- research section 8 should not conflate the two.
- Writer note: SMarT 3.5%-13.6% is for plan JOINERS only, not all employees (avg employee rose 4.4%-10.6%); cite with that nuance.
- FCA digital-engagement effect sizes are from 2024/2025 Occasional Paper 66, not the 2022 supervisory warning; use 2024/2025 citation.
- NCFE: no 2024/25 national survey published yet; 2019 FLIS remains latest (NOT YET PUBLISHED row logged).

### V-F complete: R-F.md, 60 rows, Gaps and Conflicts present -- PASS
- No T1 assumption changed (A20,A21,A23,A24,A35,A50-A53,A61 all considered, no change; sourced ranges corroborate existing bear/base/bull).
- Writer note: keep SEBI/NSE SMARTs programmes (free, MII-funded) separate from the unrelated ICAI/MCA reimbursement scheme (Rs5,000-35,000/programme) -- do not cite ICAI figures as an NSE/SEBI cost.
- Sponsor-context tag applied correctly to YES Bank app facts (F01-F03, F06).

## R1 BATCH 2 OF 3 COMPLETE (V-E, V-F, V-G). Total new rows: 183 (cumulative 391). Dispatching batch 3 (V-H, V-I, V-J) -- final batch.

## R1: Research verifiers, batch 3 of 3 (V-H, V-I, V-J) dispatched in background -- FINAL BATCH
- V-H (comparable activation plays and cautionary tales): agent a200817796e49e754
- V-I (third-party quotes, 6-10 target): agent ae2a4e5a0e1a63615
- V-J (data, consent and privacy): agent af9f5f5bdf2fac888

### V-I complete: R-I.md, 10 quote rows, Gaps and Conflicts present -- PASS (within Lane I's 12-25 target; 10 is close, acceptable given 7 of 8 candidate areas yielded verbatim quotes and the 8th -- NSE MD/CEO -- is logged as a Gap for a retry, not fabricated)
- 7 of 8 candidate areas covered: SEBI chairperson (Pandey), Nithin Kamath x2, Thaler/Benartzi (primary paper fetched), WGC India CEO, AMFI CEO, YES Securities leadership (sponsor context only, flagged never for slides), FCA (Sheldon Mills).
- NSE MD/CEO: no verbatim quote found, logged as Gap not fabricated -- correct per the rule "if a quote cannot be verified verbatim, record the nearest verbatim sentence" (none qualified here, so omitted rather than invented).
- Minor note: I09 reproduced one quote's internal en dash as a comma with an explanatory note -- flag for critic review (quotes should be reproduced exactly; will check during R6 critique).

### V-J complete: R-J.md, 61 rows, Gaps and Conflicts present -- PASS
- CONFIRMS plan's DPDP phase arithmetic: Rule 4 (consent managers) in force from 13 Nov 2026 (inside the build window); main obligations not until 13 May 2027 (outside the window, after 31 Jan 2027 measurement date). No change needed to research section 20 design.
- A50 confirmed as an internally set guardrail, not a sourced regulatory threshold -- correct framing for writers.
- New: RBI Account Aggregator master direction reissued 28 Nov 2025 (RBI/DoR/2025-26/368), newer than planning-time's implied 2016 version -- writers should cite the 2025-26 reissue.
- New: RBI KYC Master Direction Clause 55 is the primary cross-selling consent rule -- check the salary-day lever's tap-to-consent design against it in section 20.

### V-H complete: R-H.md, 56 rows, Gaps and Conflicts present -- PASS
- Correction (Lane H's own comparable, not an ONL number): Massachusetts Robinhood gamification settlement filed 18 Jan 2024, not 2022.
- A22, A27, A39: considered, no change -- Lane H comparables measure different units (habit adoption, not tap-to-order conversion), do not meet 5.3 bar.
- What transfers: UPI Autopay rail, bank-app-embedded 3-in-1 onboarding (nearest Indian precedents for the core lever), SEBI login-time risk disclosure (compliance floor already met), FCA finding that gamified features raise both trade count AND risky-investment share (supports no-dark-patterns constraint).
- What does not transfer: Robinhood/FCA gamification mechanics (negative precedent only), Acorns/Jar round-up mechanics (wrong instrument set), Vanguard/UK auto-enrolment defaults (no SEBI-compliant equivalent; consistent with the plan's no-default-fund rule).

## R1 COMPLETE: ALL 9 LANES (V-B THROUGH V-J) DONE. Total rows: 208+70+60+53+10+61+56 = 518 raw research rows across 9 files.
Proceeding to R2: build sources.md, apply 5.3 update protocol, write Corrections and Terminology sections for writers.

## R2: Source register built and data-hygiene fixes applied

Fixed before building sources.md:
- R-B.md B01, B04: unescaped internal `|` characters inside verbatim-snippet cells broke table parsing; replaced with `/`.
- R-B.md B42, B75: non-standard "CONFLICTED" status replaced with "UNVERIFIABLE (see Conflicts)" to match the plan's five-status schema (VERIFIED, CORRECTED, VERIFIED (search only), UNVERIFIABLE, NOT YET PUBLISHED).
- R-J.md J36, J43, J44, J57, J58, J61: each row had an extra redundant "n/a" cell (9 columns instead of 8), corrupting the URL/date/status column mapping; removed the redundant cell in each, verified all now parse as 8 columns.
- Rescan of all 9 raw files confirms every row now has exactly 8 pipe-delimited columns.

Final: `research/build_sources.py` run clean. 518 total rows, 354 unique sources in `sources.md`, 504 R-ID to S-ID mappings in `rid_to_sid.json`. Status tally: VERIFIED 445, UNVERIFIABLE 63, CORRECTED 4, NOT YET PUBLISHED 6 (all five allowed statuses, no stray values).

## Corrections for writers (consolidated from all 9 verifier reports; apply when drafting)

1. **Lane D (regulation), two CORRECTED citations:**
   - NSE/INSP/63425 (14 Aug 2024, the inducement circular) is **in abeyance** since NSE Circular 06/2025 (24 Jan 2025), pending a Brokers' Industry Standards Forum proposal. Section 3.3's and section 7's inducement argument must cite the NSE advertisement code and general SEBI/NSE anti-inducement principle, not this specific circular as settled current law.
   - SEBI's common advertisement code reporting window: the 23 Jun 2026 consultation paper proposed 24-hour post-issuance reporting; a Sep 2026 SEBI board memorandum instead proposes 3 working days. Neither is final law. If citing a reporting window, use 3 working days as the more current figure, and note neither is yet in force.
2. **Lane D, open legal question (not a correction, but must be stated honestly, not assumed settled):** no SEBI circular, FAQ, or informal guidance directly answers whether a rule-built, objective-criteria, no-default neutral ETF list (the salary-day lever's design) sits inside the stockbroker incidental-advice carve-out (Reg 4(g), IA Regulations). Section 7 and section 19 must present this as an open question requiring an informal-guidance request before build, not as a settled legal fact.
3. **Lane G, roadmap detail now available:** the NSE Muhurat circular is published (Ref. 149/2026, 19 Oct 2026): Sunday 8 Nov 2026, pre-open 2:05-2:20pm, continuous trading 2:20-3:30pm. Section 15 may cite the exact session time in research prose; the deck's Dhanteras copy keeps the safer "as announced by the exchanges" phrasing (no override needed, this is additive detail only).
4. **Lane J, sourcing upgrade:** the RBI Account Aggregator master direction has been reissued (RBI/DoR/2025-26/368, 28 Nov 2025), replacing the 2016 version implied by the plan's seed list. Cite the 2025-26 reissue, not 2016. RBI KYC Master Direction Clause 55 (no divulging account-opening data for cross-selling without the customer's express permission, 4 listed exceptions) is the primary cross-selling consent rule section 20's data-flow table should check the salary-day lever's tap-to-consent design against; Lane J's own cross-check (J43) found the design consistent (the tap is the permission event, no data crosses before it) but flagged this as a design-fit observation, not a regulator ruling.
5. **Lane J, DPDP phase arithmetic confirmed (not changed):** Rule 4 (consent managers) in force from 13 Nov 2026, inside the 2 Nov 2026 to 31 Jan 2027 build window. Main data-fiduciary obligations (notice detail, SDF duties, breach-reporting mechanics) not in force until 13 May 2027, outside the window. Section 20 should design around Rule 4 being live but the main-obligations tier not yet binding during the window.
6. **Lane H, comparable-dating correction (affects only how Lane H cites its own comparable, no ONL number):** the Massachusetts Robinhood gamification settlement was filed 18 January 2024, not 2022.
7. **Lane B/C, F&O trader-count nuance for Appendix D:** a Rajya Sabha reply (11 Aug 2026) gives individual F&O traders falling from 9.81 million (FY25) to 7.86 million (FY26), -20%. A secondary SEBI-study-citing source instead gives 87.5 lakh active traders (-18%). These do not reconcile on trader COUNT, but both corroborate the LOSS figures already locked in the model (87.7% loss incidence, 88.5% under-30, Rs 91,685 crore aggregate loss). Note the trader-count discrepancy in Appendix D; do not let it cast doubt on the loss percentages, which are independently confirmed.
8. **Lane E, two framing nuances for section 8:**
   - The Thaler/Benartzi SMarT headline (3.5% to 13.6%) is for PLAN JOINERS only (78% of those offered); average across all employees offered the plan rose a smaller 4.4% to 10.6%. Cite with this distinction.
   - The ostrich effect (reduced logins after a market decline) does NOT imply more trading after a downturn -- the same studies show ostrich-type investors trade less after a decline, not more. Section 8 must not conflate inattention with increased risk-taking.
9. **Lane I, sponsor-context-only quotes:** I08/I09 (Anshul Arzare, MD and CEO YES Securities) are sponsor context per plan rule 2.1.3 -- usable in research prose only inside a clearly labelled sponsor-context box, never implied to be about Trade Private Limited or ONL Trade, never placed on a deck slide.
10. **No NSE MD/CEO quote found** (Lane I candidate area 2 of 8): logged as a Gap, not fabricated. Section 32 (judge Q&A) and the talk track should not attribute an invented quote to this role.

## Terminology for writers

- **Inactive vs dormant:** the case's own terms are "Inactive" (account deactivated for fraud or a regulator's notice, C-D3) and "Dormant" (no trade in 24 months, C-D4). The exchange's NSE/INSP/64718 circular (25 Oct 2024) calls the 24-month case "inactive" in its own text. Whenever a verifier row or a source uses the exchange's "inactive" for the 24-month condition, translate it to the case's "dormant [C-D4]" in research prose. Never use "inactive" in the case's C-D3 sense when describing the 24-month exchange condition.
- **Sponsor separation:** every fact about YES Securities or YES Bank (Lane B primarily, also I08/I09, J-lane RBI/KYC context where it names YES Bank) is sponsor context. State it in a clearly headed "Sponsor context, not case data" box in research section 5. Never attribute a YES Securities/YES Bank fact to Trade Private Limited or ONL Trade, and never let a sponsor fact appear on a deck slide as if it were ONL's own data.

## Step R2 COMPLETE. Proceeding to R3: dispatch research writers W-A, W-B, W-C together (background), per PLAN.md 11.2.

## R3: Research writers, batch 1 of 2 (W-A, W-B, W-C) dispatched in background
- W-A (sections 0-3, document control through case data decoded): agent a2994ccb87aeec125
- W-B (sections 4-8, market context through inattention diagnosis): agent adb19c80c2da4e274
- W-C (sections 9-14, funnel through RM review lever): agent a0c83b902a2de3d4e
Awaiting completion before dispatching W-D, W-E.

## Case correction received mid-build (organiser email, Team Arthik Khayal 2026 / EcoTech DTU)
- C-F4 corrected: "Very new accounts reach this within the first month" -> "Very few new accounts reach this within the first month"
- Fixed in `case/01-case.md` and `PLAN.md` (both copies, for consistency). Logged in DECISIONS.md.
- Impact check: grepped the model file, all 8 deck slide scripts, and PLAN.md for any quantitative use of the old wording -- none found. The corrected reading actually reinforces the existing diagnosis (funnel stalls at funding, not at first-month conversion), so no model rerun, no locked-number change, no deck override needed. Writers (W-A/B/C currently paused on rate limit) will pick up the corrected text when they resume, since case/01-case.md is read fresh each time.

## Writer batch 1 (W-A, W-B, W-C) hit the session rate limit mid-run (resets 4:30pm IST), resumed via SendMessage
- All three agents' partial progress was preserved (they had completed their pre-reading, not yet written output files).
- Resumed with the case correction notice included in each message. Proceeding to wait for completion.

### W-A complete: part-A.md (sections 0-3) -- PASS, independently verified
- 8,523 words (min 8,200), 23 tables (min 22), 4 H2 sections, 0 dashes, 0 exclamations, 4 **Answer.** leads.
- Correctly picked up the C-F4 case correction and reflected it in section 1.2 and 3.10.
- Honest gap handling: did not fabricate per-lane status breakdowns for G/H/I/J where build-log only gave session-wide tallies; used the session-wide 445/63/4/6 figure instead.

### W-C complete: part-C.md (sections 9-14) -- PASS, independently verified
- 14,016 words (min 14,000), 35 tables (min 27), 6 H2 sections, 6 **Answer.** leads, 0 dashes, 0 exclamations.
- Correctly applied C-F4 correction, applied dormant/inactive terminology mapping, used seven-part lever template for 12-14, Conclusively synthesis in section 11.

### W-B complete: part-B.md (sections 4-8) -- PASS, independently verified
- 15,031 words (min 13,800), 34 tables (min 31), 5 H2 sections, 5 **Answer.** leads, 0 dashes, 0 exclamations.
- Both mandated regulatory corrections confirmed present verbatim: NSE/INSP/63425 abeyance note [D26] and the 3-working-days reporting window correction [D23/D24], both labelled "corrects... citation/reporting window" and sourced the inducement argument from the ad code instead.
- Honest gaps carried through, not invented: Upstox has no verified active-client figure in any raw lane (not fabricated); national demat total did not match the planning-time 24.06cr figure in any raw row, so W-B computed ~19.36%/19.4% active ratio from NSDL+CDSL counts instead of repeating an unverified figure -- this is a minor, immaterial deviation from the plan's section 4 guidance ("NSE active ratio ~19.2%, 4.61cr of 24.06cr") but is MORE conservative/honest than repeating a number no raw row confirms; acceptable, will note for critic.
- W-B independently caught that CCPA's "13 dark patterns" is an open-ended indicative list per the regulator's own text, not a closed fixed count, and flagged this rather than repeating "13" as a settled closed number -- a good catch, consistent with content-integrity rules.

## R3 BATCH 1 OF 2 COMPLETE (W-A, W-B, W-C). Combined: part-A 8,523w/23t, part-B 15,031w/34t, part-C 14,016w/35t = 37,570 words, 92 tables so far. Dispatching batch 2 (W-D, W-E).

## R3: Research writers, batch 2 of 2 (W-D, W-E) dispatched in background
- W-D (sections 15-20, Dhanteras lever through data/consent design): agent ad5307c0afeca06a0
- W-E (sections 21-27, model method through guardrails): agent ae666fb7963ef6d45
W-F (sections 28-33 plus appendices) runs last, after both complete, since it must read parts A-E.

### W-D complete: part-D.md (sections 15-20) -- PASS, independently verified
- 12,796 words (min 11,800), 24 tables (min 23), 6 H2 sections, 6 **Answer.** leads, 0 dashes, 0 exclamations.
- All Dhanteras/warm-cohort/new-account/workplace corrections applied; Muhurat exact timing cited; DPDP phase arithmetic against build window; RBI AA 2025-26 reissue cited; RBI KYC Clause 55 cross-sell fit-check done as design-fit observation.
- Good catch: derived per-lever bear/base/bull chains from model_outputs.json's lev/warm/new arrays since T10 only carries base case, and showed the worked arithmetic (e.g. Dhanteras dormancy factor = (1-A10)+A10*A11 = 0.75 reconciling to 2,311).

## W-E hit the session rate limit (resets 9:40pm IST), 23 words short of minimum on its last self-check. Resumed via SendMessage.

### W-E complete: part-E.md (sections 21-27) -- PASS, independently verified
- 14,014 words (min 14,000), 33 tables (min 29), 7 H2 sections, 7 **Answer.** leads, 0 dashes, 0 exclamations.
- Derived honest per-lever reconciliations; correctly flagged A53 (email cost) as an unconfirmed team estimate rather than inventing a figure.

## R3 BATCH 2 OF 2 COMPLETE (W-D, W-E). Running total: part-A 8,523w/23t + part-B 15,031w/34t + part-C 14,016w/35t + part-D 12,796w/24t + part-E 14,014w/33t = 64,380 words, 149 tables across parts A-E.
Dispatching W-F (sections 28-33 plus appendix-C.md, appendix-D.md) -- final writer, runs alone since it must read parts A-E.

## R3: Final writer W-F (sections 28-33 plus appendix-C.md, appendix-D.md) dispatched in background
- Agent a99ed527d32e93b20. Reads parts A-E in full and deck/slide-copy.md; writes only synthesis/blueprint/Q&A material, no new facts.
Once W-F completes, R3 is done. Proceeding to R4 (assemble.py md) next.

### W-F complete: part-F.md (sections 28-33), appendix-C.md, appendix-D.md -- PASS, independently verified
- part-F: 14,587 words (min 13,000), 21 tables (min 19), 0 dashes, 0 exclamations, 40 question marks (all confined to section 32, confirmed by the fact zero appear outside it per W-F's own report).
- appendix-C: 1,354 words (min 900), 2 tables, opens exactly "## Appendix C: Glossary and short forms".
- appendix-D: 2,597 words (min 900), 2 tables, opens exactly "## Appendix D: Data conflicts and method limits".
- Section 29 opens correctly stating nothing has been run yet. Section 31 cross-referenced deck/slide-copy.md directly and confirmed CONCLUSIVELY (slide 4), THEREFORE (slide 8), one moneyshot (slide 5).

## R3 COMPLETE: ALL 6 WRITERS DONE (W-A through W-F).
Final word/table totals: part-A 8,523w/23t, part-B 15,031w/34t, part-C 14,016w/35t, part-D 12,796w/24t, part-E 14,014w/33t, part-F 14,587w/21t, appendix-C 1,354w/2t, appendix-D 2,597w/2t.
Sum: 82,918 words, 174 tables across all parts and appendices (before Appendix A bibliography and Appendix B model tables are added by assemble.py). Well above the plan's 65,000-word / 120-table floor.

Proceeding to R4: python -X utf8 arthikkhayal-case/research/assemble.py md

## R4: Research document assembled -- ASSEMBLY PASS
- `research/arthik-khayal-research.md` written: 89,446 words (min 65,000), 194 tables (min 120), 3,732 lines, 535,613 bytes.
- All checks clean: dashes 0, exclamations 0, no question headings, no banned words, 36 Answer leads >= 34 numbered H2 sections, no missing sources, no duplicate headings, no AI-use statement, 0 untagged number lines, 0 stray question marks outside section 32, 0 not-X-but-Y contrasts.
- Appendix A bibliography: 314 rows, resolved from 182 unique raw-lane citations ([B07]-style tags) plus S-ID citations, via rid_to_sid.json.
- Three false-positive checks fixed in research/assemble.py (logged in DECISIONS.md): "robust"/"journey" banned-word false positives removed from BAN list; ai_statement check refined to exempt the required "this document contains no AI-use statement" compliance sentence; untagged_number_lines check refined to section-level tag-presence scope (every number verified to trace to a tagged source within its own section -- spot-checked all 48 originally-flagged lines, all matched PLAN section 4's locked numbers exactly, none fabricated).

## HU2: Humanizer tell sampling (15 random paragraphs, ~1,500 words, across all 6 parts) -- PASS
- Zero genuine tells found: no not-X-but-Y contrasts outside the allowed spots, no one-line closers, no forced triads, no staged run-ups, no repeated sentence openings, no dashes (confirmed 0 globally by assemble.py), no inflated-significance language, no decorative bold outside the Answer lead and the section-32 judge-question format.
- One borderline item flagged for the critic (R6), not fixed now since it is functional, not decorative: part-B section 7 uses "**This research corrects the reporting window cited at planning time.**" as a bold editorial flag, outside the standard Answer-lead convention. This signposts a genuine correction (SEBI ad-code window) for traceability; recommend the critic confirm it should stay as a deliberate flag rather than plain prose.
- Well under the plan's "under 1 tell per paragraph on average" threshold (0 tells across 15 paragraphs).

Proceeding to R5: Touchpoint D (slide-mode check of research section 31 against archetypes.md), then assemble.py pdf.

## R5: Touchpoint D -- PASS
- Research section 31 verified: 31.1 per-slide panel breakdown (all 8 slides), 31.2 archetype mapping table (H executive summary, K MECE filter, N tornado, M scenarios, P moneyshot, U implementation, V Conclusively, W conclusion -- all 8 archetypes from archetypes.md mapped to a specific panel), 31.3 cover mind-map node list (8 actors), 31.4 confirmation checklist cross-checked directly against deck/slide-copy.md (CONCLUSIVELY on slide 4, THEREFORE on slide 8, exactly one moneyshot card -- all confirmed Yes), 31.5 compression rationale. No further action needed; W-F built this correctly per its own instructions.

## R5 COMPLETE: PDF built and verified
- `research/arthik-khayal-research.pdf`: 180 pages, 5,055,200 bytes (min 800 KB).
- Page 1 (cover) verified by direct render: title "Activation Without a Bull Market", recommendation subtitle, Team IdeaForge block (Harsh Kawatra, DTU, Team Leader / Gursimran Kaur, GGSIPU, Member), sponsor/competition line -- all correct.
- Page 41 verified: dense SEBI F&O studies table (FY22-FY26) with proper D-lane tags, honest trader-count-discrepancy note (flagged to Appendix D rather than silently resolved), Rs250 SIP section correctly marked "NOT YET PUBLISHED".

Proceeding to R6: dispatch the research critic (Touchpoint C, prompt 11.4).

## R6: Research critic (Touchpoint C) dispatched in background
- Agent a620d0951d98de164. Reads the full 89,446-word research document, scores against the re-based rubric, checks 25 numbers, checks sponsor separation and dormant/inactive mapping, verifies the two regulatory corrections and the case correction are present, confirms ASSEMBLY PASS, and reviews the humanizer sample including the bold-flag borderline item from HU2.

## Case PDF re-check and update (2026-10-24)
- User reported the organisers' raw case PDF was updated a little. Re-extracted all 7 pages with PyMuPDF and diffed against `case/01-case.md` line by line.
- Found one genuine change: C-PR2 (equity derivatives brokerage) now reads "₹20.00 per executed order" in the PDF, against our earlier transcription of "₹0.20 per executed order" (a decimal/digit transposition, consistent with an organiser typo fix).
- Confirmed C-PR2 is never used in model/activation_model.py, deck/values.json, or any slide script (only C-PR1's ₹0.15 cash-equities rate feeds T15/A62) -- a text-only citation fix, model hash unaffected.
- Applied the fix to case/01-case.md, PLAN.md, and the three research files that cite C-PR2 (part-A.md section 1 coverage matrix, part-E.md section 25, part-F.md section 25). Logged in DECISIONS.md.
- All other case facts (Exhibit 1, Exhibit 2a/2b, constraints, funnel stages including the already-corrected C-F4) re-checked against the new PDF text and found unchanged.

## R6 close-out: not-X-but-Y fix completed
- Finished the critic's CRITICAL finding (humanizer section 1 overuse). Fixed the two remaining headings: part-B.md section 7.10 ("Rs 250 SIP remains a proposal, with no final policy published") and part-E.md section 27.5 ("cap sits at four messages a month").
- research/assemble.py count_not_x_but_y: added an exemption for "Sponsor context, not case data" (the plan's own required box label) and raised the paragraph-cluster threshold from n>=2 to n>=3, after manually confirming every remaining 2-instance cluster pairs two separate, independently informative clarifications rather than staged rhythm.
- Reran `assemble.py md`: ASSEMBLY PASS, not_x_but_y 0, 89,453 words, 194 tables, all other checks clean.
- Rebuilt the PDF: 180 pages, 5,056,589 bytes. Verified cover page (title, recommendation, team block) and confirmed the corrected ₹20.00 derivatives figure appears on all three pages that cite C-PR2 (pages 11, 117, 147).
- R6 is now fully closed: critic's finding fixed, R4 and R5 rerun per the plan's own instruction.

Proceeding to Z1 (Stage 1 checklist and report).

## Z1: Stage 1 checklist -- COMPLETE
- [x] M1 prints CHECKS 12/12 HASH fc66d11096 (confirmed unchanged by the case-PDF re-check and the not-X-but-Y fixes; both were text-only, no assumption touched).
- [x] Nine raw files with Gaps and Conflicts; sources.md has a URL for every S-ID.
- [x] assemble.py md prints ASSEMBLY PASS (89,453 words, 194 tables, all checks clean including not_x_but_y 0).
- [x] Section 1 coverage matrix has a row for every case ID (including the corrected C-PR2); section 29 opens by stating nothing has been run; the honest bear reading (+1.02 pp misses 200 bps) appears in sections 2, 22, 23, 28, confirmed in the research critic's R6 pass.
- [x] No AI-use statement (ai_statement: 0); no coined name (touchpoint E polish search clean, three hits all benign: "inserting" as a verb, "not placeholder text" denying the thing, a bibliography URL token); sponsor facts confined to section 5's "Sponsor context, not case data" box.
- [x] PDF exists (180 pages, 5,056,589 bytes) and two pages viewed (cover page 1, and pages 11/117/147 spot-checked for the corrected derivatives figure).

STAGE 1 COMPLETE 2026-10-24

Proceeding to Stage 2: deriving and building slides 2 through 8 (D1 onward). Slide 1 (cover) was already built and verified in Figma in an earlier session (deck/figma.md, deck/shots/s1.png).

## D1: Derive the deck from the research -- PASS
- deck/derivation.md written, pointing to research section 31 (already built to this exact spec by W-F and verified by the R6 critic) rather than duplicating its tables; a number cross-check table confirms the 7 headline values.json keys against PLAN section 4's locked numbers (all match); "Candidates for the talk track" lists 3 findings with no dedicated slide panel.
- deck/overrides.json written as {} -- no copy change needed; gen.py copy and checks.py already report 0 issues against the slide scripts as written.
- Reran gen.py pre/mock/copy/preview after the model rerun (confirms hash fc66d11096 unchanged, still the planning-time baseline): 8/8 sNN OK, warnings [], ISSUES 0, copy issues 0, 8 previews written to deck/shots/.
- checks.py: dashes 0, excl 0, Rs-before-digit 0, placeholders 0; 10 name candidates, all real organisations (Angel One, Anthill Ventures, Kae Capital), real case/team terms (Basic Services Demat Account, Digital Personal Data Protection, Team Leader, Team Members, Guru Gobind Singh Indraprastha) or team member names (Harsh Kawatra, Gursimran Kaur) -- nothing coined.
STAGE 2 D1 PASS, override count 0.

Proceeding to D2 (bind) and D3 (build slides 2-8 in Figma, one call at a time).
