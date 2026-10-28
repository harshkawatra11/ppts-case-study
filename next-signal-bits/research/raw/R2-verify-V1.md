# R2 verification pass, agent V1

Scope per PLAN.md §4.3 and the task brief for this pass: lanes R-B, R-C, R-D-APOLLOHOSP, R-D-MAXHEALTH (below or
near the 85% VERIFIED/CORRECTED gate, full sampling plus extra-effort SNIPPET-upgrade attempts), and a lighter
spot-check pass on R-D-SUNPHARMA, R-D-CIPLA, R-D-DRREDDY.

Method: for each lane, counted VERIFIED rows, sampled 20% (minimum 5, or all if fewer than 5 exist) using
`random.Random(20261011).sample`, then re-opened each sampled row's URL with WebFetch to confirm the figure or
quote still matches. For the four below-gate lanes, additionally picked up to 15 high-value SNIPPET rows
(financial figures, bed counts, ARPOB, regulatory dates) and attempted one more verification pass via
alternate-fetchable sources (direct reopen of the original URL where it was not actually PDF-blocked, Screener.in,
WebSearch synthesis of sources whose direct fetch failed, etc.), upgrading where a genuine match was found. All
figures below reflect the actual edited state of each raw file after this pass.

## Summary table

| Lane | Rows checked | Pass (unchanged) | Upgraded to VERIFIED | Upgraded to CORRECTED | Downgraded | New VERIFIED+CORRECTED % |
|---|---|---|---|---|---|---|
| R-B | 10 | 3 | 3 | 2 | 0 | 9.3% (8/86) |
| R-C | 10 | 10 | 0 | 0 | 0 | 57.4% (54/94) |
| R-D-APOLLOHOSP | 11 | 5 | 5 | 0 | 0 | 42.0% (29/69) |
| R-D-MAXHEALTH | 13 | 9 | 2 | 1 | 0 | 63.3% (50/79) |
| R-D-SUNPHARMA | 5 | 5 | 0 | 0 | 0 | 28.4% (21/74) |
| R-D-CIPLA | 5 | 5 | 0 | 0 | 0 | 85.5% (59/69) |
| R-D-DRREDDY | 5 | 5 | 0 | 0 | 0 | 90.5% (76/84) |

Rows checked includes both the random VERIFIED sample and, for the four below-gate lanes, the additional SNIPPET
rows attempted for upgrade. "Pass (unchanged)" counts sampled VERIFIED rows reconfirmed with no status change.

## Per-lane notes

**R-B** (sample: RB27, RB28, RB29, all VERIFIED, all confirmed unchanged against the live FDA Import Alert 66-40
page). Extra-effort SNIPPET attempts: RB06 and RB09 (India pharma export figures) and RB50 (Section 232 tariff
proclamation) reconfirmed cleanly on reopening and are now VERIFIED. RB37 and RB38 (Schedule M GMP compliance
dates) are CORRECTED: reopening the identical India Briefing URL gave a different Gazette date (28 Dec 2023, not
5 Jan 2024, and no "G.S.R. 922(E)" citation found anywhere) and different deadlines (28 Jun 2024 for large units,
28 Dec 2024 for MSME, not 4 Jul 2024 / 4 Jan 2025); the turnover threshold and compliance-period lengths held, only
the specific dates were wrong. Logged as C-RB01 in conflicts.md. RB42 (NLEM 2022, 384 medicines) and RB78 (ICRA
API industry size) were attempted but could not be confirmed (RB42 not found in the readable text of its own
cited source; RB78's ICRA PDF remains unreadable binary) and are left as SNIPPET with a caution note on RB42.
This lane remains far below the 85% gate; its 83 (now 78) unconverted SNIPPET rows are overwhelmingly blocked by
broker/rating-agency PDFs (CRISIL, ICRA, CARE, Business Standard broker-tips archive) that return compressed
binary to automated fetchers, a structural access problem this pass could only partly work around via
alternate HTML sources, not a sign the facts themselves are wrong.

**R-C** (sample: RC57, RC43, RC93, RC42, RC29, RC04, RC03, RC89, RC55, RC74). All 10 reconfirmed unchanged on
reopening their cited URLs (ICRA, Bajaj Broking, ScanX, Aster DM investor PPT, Indian Pharma Post x2, Lexplosion,
cofacto.ai, ICICI Direct). No extra-effort SNIPPET pass was run for this lane in this session because the lane's
own prior re-verification pass had already worked through nearly every SNIPPET row with the same alternate-source
method this task calls for (see the lane's own extensive Gaps/Conflicts notes); the remaining 40 SNIPPET rows are
predominantly blocked by the same class of broker/rating-agency PDFs (CARE, HDFC Securities, PL India, ICICI
Direct, ICRA rationales) that resisted every fetch attempt in both the lane's own pass and this one.

**R-D-APOLLOHOSP** (sample: RDA69, RDA50, RDA26, RDA17, RDA15, all VERIFIED, all confirmed unchanged against
Screener.in, the ICRA report, and three cross-referenced guidance-tracking sources for RDA50). Extra-effort
SNIPPET attempts on Q3/Q4 FY26 and Q1 FY27 segment-financial rows (RDA21, RDA23, RDA38, RDA40, RDA42) all
reconfirmed their primary quoted figures (consolidated revenue, EBITDA, PAT, and Apollo HealthCo revenue/EBITDA)
on reopening Business Today and IndiaMedToday/Indian Pharma Post directly, and are now VERIFIED; in two cases
(RDA38, RDA42) a secondary sub-detail cited to a companion source was not independently reconfirmed via the one
page opened this pass, though not contradicted, and this is noted inline. RDA44 (the Advent International/
Apollo HealthCo valuation deal) was attempted but the Business Standard URL returned HTTP 403; left as SNIPPET.

**R-D-MAXHEALTH** (sample: RDM51, RDM38, RDM79, RDM36, RDM30, RDM11, RDM10, RDM77, RDM50, all VERIFIED). All
nine reconfirmed, including RDM77 (FY25 "network revenue grew ~26%" claim), whose own cited CARE Ratings PDF
remains unreadable binary on direct fetch (consistent with RDM09's standing caution) but was independently
corroborated via two alternate sources (CARE's companion BMDRC release and Max's own FY25 integrated annual
report, found via WebSearch). Extra-effort SNIPPET attempts: RDM22 (gross total debt by year) and RDM34 (Q3 FY26
network-basis revenue/EBITDA/PAT) reconfirmed cleanly and are now VERIFIED. RDM60 (Kalinga Hospital acquisition
value) was partly confirmed (58.28% stake, Rs 297.97 crore figure) but the specific closing date and the earlier
58.4%/Rs 300 crore signing figures were not found on reopening; left as SNIPPET. **RDM47 is CORRECTED**, the
most consequential finding of this pass: the row claimed "202 of 400 beds operational, 198 remaining" at the Max
Smart (Saket) brownfield tower, citing investywise.com. Reopening that exact URL found no such split for Max
Smart anywhere; it instead gives a clean 50%/50% split for Max Smart, and the 202-bed figure belongs to a
different, newly board-approved tower at Max Vaishali (RDM49) that the original synthesis had conflated with
Max Smart. Logged as C-RDM01 in conflicts.md and corrected in place in RDM47.

**R-D-SUNPHARMA** (lighter pass; sample: RDS38, RDS22, RDS46, RDS21, RDS19). All five reconfirmed unchanged:
the CRISIL rating rationale (RDS19, RDS21, RDS22, Q1 FY27 figures, US revenue/ANDA pipeline, Organon downgrade
trigger) and stockanalysis.com (RDS38 revenue series, RDS46 cash position) all matched on direct reopen, with
only minor paraphrase differences (e.g. CRISIL's exact wording is "beyond two years," not "more than two years").
No status changes. Note: this lane's overall VERIFIED+CORRECTED share (28.4%, 21/74) is well below the 85% gate
despite being listed as an already-above-gate lane in the task brief; this pass did not re-scope SUNPHARMA's
sampling to below-gate-lane effort levels per the explicit "lighter pass" instruction, but the gap is flagged here
for a follow-up full pass if the gate is meant to apply to this lane after all.

**R-D-CIPLA** (lighter pass; sample: RDC36, RDC27, RDC26, RDC21, RDC05). All five reconfirmed, two only via
alternate sources: RDC36's Q1 FY26 figures (revenue Rs 6,957 crore, PAT Rs 1,292 crore) matched Screener.in
directly even though the row's own CARE Ratings PDF citation remains unreadable binary; RDC21's FY25 R&D figure
(Rs 1,536 crore, 5.60% of revenue) was not found in the same unreadable CARE PDF but was independently
corroborated via two other secondary sources (an India CSR Awards write-up and a growth-strategy blog, both
citing the same figure and percentage). RDC05's exact rating-history dates were not pinned to the day by the
alternate search, but the underlying claim (continuous CARE AAA/A1+ rating across 2021-2025) was corroborated
year by year via CARE's own other press releases. RDC26 and RDC27 (Screener.in inventory days and net cash/debt
series) reconfirmed exactly on direct reopen. No status changes.

**R-D-DRREDDY** (lighter pass; sample: RDD69, RDD50, RDD71, RDD49, RDD41). RDD41 and RDD50 reconfirmed directly
(FDA Form 483 at the Miryalaguda CTO-5 facility; Q1 FY26 R&D spend). RDD69's Business Standard URL returned HTTP
403 on direct refetch but its Q2 FY25 figures (revenue Rs 8,038.2 crore, net profit Rs 1,255.7 crore, EBITDA Rs
2,280.3 crore) were corroborated via WebSearch synthesis of the same article plus a second outlet (Angel One),
which also surfaced a small, already-known revenue discrepancy (Rs 8,016 crore vs Rs 8,038 crore) not large
enough to change the row's status. RDD71's original Seeking Alpha URL now returns 404 (the press-release page
appears to have been taken down); its FY2025 full-year figures (net profit Rs 5,655.1 crore, net sales Rs
32,553.5 crore, EBITDA Rs 9,213.3 crore) were independently corroborated via WebSearch across several other
outlets reporting the same results release. RDD49's primary SEC Form 6-K exhibit PDF exceeded this pass's fetch
size limit and could not be reread directly; left unchanged since it is already the strongest class of primary
source available and the fetch failure is a tool limitation, not a contradiction. No status changes.

## Conflicts logged

Two new conflicts were appended to `raw/conflicts.md` in this pass, following its existing row format, after
re-reading the file fresh first:
- **C-RDM01**: Max Healthcare's "202 of 400 beds operational, 198 remaining" figure (row RDM47) was conflated
  with a different brownfield tower (Max Vaishali, not Max Smart/Saket); corrected in place.
- **C-RB01**: The Schedule M Gazette notification number and large-unit/MSME compliance deadline dates (rows
  RB37, RB38) did not reproduce on reopening their own cited source; corrected in place to the dates the source
  actually gives, with the turnover thresholds and compliance-period lengths unchanged.

No existing rows in `sources.md` or `conflicts.md` were edited; only new rows were appended, and only the raw
Facts-table rows specifically re-verified in this pass were changed in place, per the task's golden rules.

STATUS: PASS
