# Build log: CaseQuest 2026

## Bootstrap
- B0: branch `casequest-usme-build` created. Repo push access refused for this session (GitHub App not installed for this org). Will attempt push at Z1; fallback is SendUserFile delivery.
- B1 PASS: old research/model/deck moved to `_superseded/` per user instruction (scrap).
- B2 PASS: `files 3` (case/01-case.md, model/cq_model.py, HUMANIZER.md).
- B3: touchpoint A below. humanizer skill not in Skill list (only `case-competition-deck` listed) -> using `casequest-usme/HUMANIZER.md` fallback per PLAN 2.3.
- M1 PASS: `CHECKS 11/11 HASH 8fe043dc97`, `FINDINGS ₹640 ₹1,038 ₹892 ₹398 ₹1,531 ₹959 50 ₹3,57,72,000 960 10` — matches planning-time hash exactly.

## Corrections for writers
1. MSME export share: cite as "about 46% (SBI estimate 45.79%; a separate press figure gives 48.55%)" whenever used; never state one figure as settled.
2. Exporting-MSME count FY25: cite as "about 1.73 lakh (Lok Sabha reply 1,73,350; SBI-sourced reporting gives 1,76,315)".
3. GTRI's $350bn-by-2030 e-commerce export target: state the baseline is contested ($2bn per the 2023 GTRI report, $5bn per a 2024 update); never assert a single baseline.
4. CRITICAL: the pooled-return-point-abroad and single-monthly-re-import-bill mechanism (A29/A31, used in the Strategy/Pilot argument and on deck slide 3's returns panel) has NO confirmed legal basis in current Indian customs law. Existing re-import law is consignment-wise (one export invoice + one AWB per re-import). Every research section that describes this mechanism (13, 17, 23, 30) and the deck's returns-flow caption MUST present it as "not yet permitted; a policy ask for the compact to take to CBIC and DGFT", never as something already legally available. This is the single most important correction in this build.
5. A10 return rate: use the CBIC-cited 20% to 25% range for e-commerce export returns as the primary seed (vs under 5% for traditional exports); note a 2025 Lok Sabha reply gives a lower 15% to 20% range as a conflicting secondary source.
6. US postal duty basis for an India-origin parcel (used in research §8, Lane E): present a range, not a single rate. Sources conflict between ad valorem at the IEEPA effective rate, a flat $80 to $200 per item, a reported flat 10% Section 122 surcharge, and a 50% of FOB value figure specific to India from the October 2025 resumption. CBP's 28 February 2026 notice (most authoritative, E11) says only ad valorem is now permitted; lead with that and footnote the others as superseded or unconfirmed.
7. Notification numbers for the courier cap removal and the EOR framework are cited inconsistently across sources (CBIC Circular 17/2026 and Notification 33/2026-Cus NT / 34/2026-Cus NT for the cap removal; DGFT Notification 27/2026-27 and Public Notice 25/2026-27, with one conflicting citation of 30/2026-27, for the EOR framework). Cite the most-repeated numbers (Circular 17/2026; Notification 27/2026-27 / PN 25/2026-27) as primary and note the conflict once in research §4, not on every mention.
8. Districts as Export Hubs / ECEH coverage count is unresolved (120 vs 770+ vs 734+ across sources); state "coverage count is disputed across sources" rather than picking one number.
9. Do not use "USPS Ground Advantage" as an India-to-US international comparator; it is domestic-only. Use "First-Class Package International Service" or "Priority Mail International" instead (Lane D finding).

## Terminology for writers
- "Inactive" (case/NSE usage, 24 months no trade) is not used in this case; this case has no dormant/inactive distinction to translate (that correction applied to a different prior case, Arthik Khayal; does not apply here).
- Use "cluster export desk" (never a coined name), "seller tiers" (tier 1/2/3, never named), "pooled rate card", "pooled return point abroad" (always flagged as a policy ask per correction 4 above, never presented as current law).
- EOR = Exporter-on-Record (the DGFT August 2026 inventory-based framework term); do not confuse with "Exporter of Record" used generically in trade law — use the DGFT's own capitalisation and expansion on first use.
- DNK = Dak Ghar Niryat Kendra (India Post export facilitation centre); 1,013 centres cited per the 2025 India Post year-end review (Lane C, confirm against any 2026 PIB figure if a writer finds one; log as a correction if the number changes).

## Touchpoint A (case-competition-deck skill, step B3)
Skill loaded via Skill tool. Nine patterns located and already encoded in PLAN.md section 3 (contrarian answer 3.3,
foreshadow 3.3, symmetric treatment 3.4, three scenarios T5, one moneyshot slide 2, double synthesis CONCLUSIVELY/THEREFORE,
action titles slide headlines 15.3, third-party validation Lane G quotes, pre-empted weaknesses PLAN 2.1/12). Calibration
note: policy and trade case type; skill calibrated on M&A corpus; structural patterns applied with confidence, frameworks
by reasoned extrapolation (per case_types/policy_and_trade.md "Calibration note"). STATUS: PASS.

## D0 / D0b: Figma setup
- File key: GUWUkQ9gxWF1P9NeaBCgez (plan team::1564294484048272772). Session: 34a1c76a-7e55-45f4-8275-e4c2a0adfb9f.
- F2 PASS: count 6, fontsOk [true,true,true,true]. slide-ids.json written.

## Lane D (research verifier) complete
R-D.md written, 40 rows (D01-D40), VERIFIED (search only) 20, UNVERIFIABLE 10, NOT YET PUBLISHED 5, CORRECTED 0.
Environment note: WebFetch returns ENOTFOUND for every host in this container (network allowlist blocks direct page
fetches); WebSearch (standard/extended) is the only working channel for all verifiers. Flagged to lanes B, C via this log.
Flags: (1) USPS Ground Advantage is domestic-only US service, not valid as an international last-mile comparator for a
US-bound parcel from India; use First-Class Package International / Priority Mail International instead on any slide.
(2) RBI reference rate for 28 Oct 2026 (A01) not found; nearest dated prints 96.2948 (18 May 2026) and 94.68 close
(22 Jun 2026), neither usable. A01 stays an assumption, not corrected. (3) A28 (pooled rate-card tender precedent) has
no confirmed Indian cluster-tender precedent; LIFT freight-reimbursement scheme (20 Feb 2026) and an Aramex-FIEO MoU are
adjacent but not pooled-rate tenders — note this honestly in research §13/§23/§30.

## Lane B complete
R-B.md, 57 rows B01-B57. VERIFIED(search only) 39, CORRECTED 8, UNVERIFIABLE 8, NOT YET PUBLISHED 2.
Key conflicts to carry into research with both figures shown: MSME export share 45.79% vs 48.55%; exporting-MSME count
1,73,350 vs 1,76,315 FY25; GTRI $350bn-by-2030 baseline $2bn(2023) vs $5bn(2024); Moradabad brass export value and GI
year conflict; Varanasi weaver counts vary by 10x by scope; Tripura cane/bamboo GI status unresolved. No Amazon US
listing found for the 6 named items (A02 price evidence weak, flagged not corrected); no official ex-works price list
(A04 gap). A06=0.15 matches Amazon Handmade US Home referral fee exactly, confirmed.

## Lane C complete
R-C.md, 58 rows C01-C58. VERIFIED(search only) 49, CORRECTED 2, UNVERIFIABLE 8, NOT YET PUBLISHED 1.
CRITICAL FINDING (C57, C58): no legal basis exists in current Indian customs law for a pooled return point abroad with
one monthly consolidated re-import bill (the A29/A31 mechanism in PLAN section 3.3/13). Existing re-import law
(Notification 45/2017-Customs as amended by 08/2026-Customs) is consignment-wise: one export invoice + one AWB per
re-import. No CBIC/DGFT provision or Amazon FBA program supports pooling/monthly consolidation. ACTION: research
sections 13, 17, 23, 30 and deck slide 3's returns panel must present the pooled-return mechanism as "not yet
permitted, a policy ask for the compact" rather than implying it already has legal cover. This changes deck slide 3's
returns-flow caption; log as a correction for writers and for deck derivation.
Other findings: A10 return rate 20-25% (CBIC via Upstox) kept as primary seed; a 2025 Lok Sabha reply gives 15-20%
(conflict, both noted). Notification numbers for the cap removal and EOR framework have multiple conflicting citations
(both kept, neither definitively resolved); Districts as Export Hubs coverage count unresolved (120 vs 770+ vs 734+).
FEMA export realisation period possibly changed 15 to 9 months (5 Jun 2026 amendment) - needs a clean citation in
research §4/§7 if used.

## Lanes E, F, G complete (confirmed on disk after container restart; hand-back messages were lost in the restart but files survived)
R-E.md: 43 rows (destination rules). Key flag: no confirmed single duty basis for US postal shipments from India in Oct
2026 (ad valorem vs flat $80-200 vs 50% FOB vs 10% Section 122 all cited by different sources) - research must present
a range, never a single rate, and cite CBP's 28 Feb 2026 notice as the most authoritative (ad valorem only permitted).
R-F.md: 45 rows (precedents, China 9610/9710/9810, WCO risk management, Brazil/Peru Exporta Facil).
R-G.md: 13 rows (stakeholder quotes), within the 12-25 range.

## R2: source register

## Writers W-D, W-E complete (confirmed on disk after another restart)
part-D.md: 9358 words, 17 tables, sections 14-18. part-E.md: 10312 words, 22 tables, sections 19-24. Both clean on
dashes/exclamations/question marks. Running total: parts A-E = 6486+9300+9870+9358+10312 = 45,326 words (already
clears the 45,000 floor before W-F and appendices are even added); tables so far 10+16+17+17+22=82 (close to the 90
floor, W-F's remaining sections and appendices will clear it).
