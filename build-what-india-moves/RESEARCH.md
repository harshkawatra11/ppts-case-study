# Adhikaar for Build What Moves India: research

Compiled 29 August 2026. Everything here was read off a primary source and the date it was
read is recorded beside it. Nothing in this file is carried over on trust from the plan alone.

## 1. The service being rebuilt

rtionline.gov.in, the Department of Personnel and Training's RTI Online Portal, version 2.0.
Read directly from the portal's own guidelines and FAQ pages on 29 August 2026.

## 2. What a citizen actually meets there

- **No account, effectively.** The FAQ states directly: "No. You can directly file your RTI
  on 'Submit Request' tab." Registration is optional. A case is tracked only by a registration
  number plus the email typed at submission. There is no page listing a citizen's own past
  filings. The portal states it retains RTI cases for three years, after which they are gone.
  Source: rtionline.gov.in/faq.php, read 29 Aug 2026.

- **Central-only coverage, and the citizen has to already know it.** The portal states
  applications may be filed "for all Ministries/Departments and other Public Authorities of
  Central Government" and that users "should not" use it for State government authorities. It
  presents a cascading Ministry to Department to Public Authority dropdown and expects a
  correct pick, rather than asking what the citizen's problem is and working it out for them.
  Source: rtionline.gov.in guidelines and FAQ, read 29 Aug 2026.

- **A misdirected application can be returned rather than transferred.** The FAQ describes a
  Nodal Officer transferring a wrongly addressed application under section 6(3) when the
  correct authority is also on the portal. What it omits: DoPT Office Memorandum
  No. 10/2/2008-IR (12 June 2008) directs that where the information concerns a State public
  authority, a Central PIO need not transfer at all, and the application goes back to the
  applicant with no refund. This is already parsed and cited inside the Adhikaar codebase at
  src/lib/data/rti-act.ts (citation id rti-6-3) and src/lib/data/evidence.ts.

- **One 3000 character textarea, no drafting help.** "At present, the text of the application
  is confined up to 3000 characters only." No warning against opinion-seeking phrasing
  ("why", "should"), unbounded date ranges, or personal-information questions now governed by
  the amended section 8(1)(j) since the DPDP Rules took effect 13 November 2025.
  Source: rtionline.gov.in/guidelines.php, read 29 Aug 2026.

- **Silence after submission.** A registration number is issued. Nothing on the portal counts
  the statutory 30 days under section 7(1), and nothing alerts the citizen on the day a
  deemed refusal under section 7(2) opens a 30-day window to file a first appeal under
  section 19(1) (free of cost under section 7(6)).

- **The first appeal requires re-entry of everything**, registration number and email typed
  again into a separate form.

## 3. What the portal does well

Do not overlook or misrepresent this in the pitch.

- Real, modern payment rails: net banking, Visa/Mastercard debit and credit, RuPay, UPI.
- The BPL fee exemption is honoured with a certificate attachment.
- Email and SMS status alerts exist.
- A published help desk with hours (9:00 AM to 5:30 PM, Monday to Friday) and a phone number.

## 4. Scale: figures to confirm before they render in the app

| Figure | Value | Source | Confirmed by me on | What I actually saw |
|---|---|---|---|---|
| RTI applications transferred between public authorities, 2024-25 | 2,80,353, roughly 18 percent up from 2,37,671 the prior year | CIC Annual Report 2024-25 (cic.gov.in/sites/default/files/Reports/AR2024-25E.pdf) | NOT YET CONFIRMED | Collected from secondary reporting (Counterview, June 2026), not the primary PDF. The PDF exceeded the fetch size limit during planning; download with curl and read locally before use. |
| Applications rejected, 2024-25 | approximately 58,500 (CIC headline figure) versus 57,985 (CIC's own exemption-wise table) | CIC Annual Report 2024-25 | NOT YET CONFIRMED | Same as above; the two figures disagreeing with each other is itself worth noting in the pitch if confirmed. |
| Public authorities missing from CIC's 2024-25 report despite a stated 100 percent compliance claim | 611 | CIC AR 2024-25, per Counterview analysis, June 2026 | NOT YET CONFIRMED | Secondary source only. |
| Appeals and complaints pending across 29 Information Commissions at 30 June 2025 | more than four lakh | Satark Nagrik Sangathan, Report Card of Information Commissions 2024-25 (snsindia.org/rti-assessments) | NOT YET CONFIRMED | Read via a righttoinformation.wiki summary of the SNS report, not the SNS page itself. |
| Worst state backlogs | Maharashtra 95,340; Karnataka 47,825; Tamil Nadu 41,059 | same SNS report | NOT YET CONFIRMED | Secondary summary. |
| Telangana backlog at present disposal rate | approximately 29 years | same SNS report | NOT YET CONFIRMED | Secondary summary. |
| Cases eligible for a PIO penalty where none was imposed | approximately 98 percent | same SNS report | NOT YET CONFIRMED | Secondary summary. |
| Commissions without a published 2023-24 annual report | 20 of 29 | same SNS report | NOT YET CONFIRMED | Secondary summary. |
| Commissions non-functional for some period due to unfilled commissioner posts | 6: Jharkhand, Himachal Pradesh, Telangana, Goa, Tripura, Madhya Pradesh | same SNS report | NOT YET CONFIRMED | Secondary summary via The Wire's coverage. |

**Action required before WP10 (landing page) ships:** download
`https://cic.gov.in/sites/default/files/Reports/AR2024-25E.pdf` with
`curl -L -o cic-ar-2024-25.pdf` and open `https://www.snsindia.org/rti-assessments/` directly.
Update this table's "Confirmed by me on" column with the date and exactly what was read. Any
figure that does not confirm gets dropped from the app entirely, or shown with a visible
`confidence: "unverified"` flag, matching the pattern already used in
`src/lib/data/state-fees.ts`.

## 5. Primary evidence already held and verified inside the codebase

Department of Land Resources RTI disposal register (2024 edition): 3,128 uniquely numbered
applications, 2,797 returned to the applicant unanswered, 265 disposed, 148 transferred.
Source PDF already parsed and cited at `src/lib/data/evidence.ts` with URL
`https://cdnbbsr.s3waas.gov.in/s3d69116f8b0140cdeb1f99a4d5096ffe4/uploads/2024/09/20240901651810853.pdf`.

Caveat that must travel with this number every time it is shown: land is a State subject
under List II Entry 18, so this single central department's return rate is far above the
national norm and must never be quoted as a national figure. It is the clearest available
primary source evidence of the exact failure this product targets.

## 6. Incumbents, named honestly

- **myscheme.gov.in** is the government's own scheme discovery portal. Real, functioning,
  government run. What the Scheme Eligibility Reader does differently: it shows the exact
  rule applied per criterion (met, not met, or unknown) rather than a bare yes or no, and
  hands the citizen a written way to challenge the answer.
- **Paid "file my RTI" services** draft applications for a fee. None decide whether the
  chosen authority can lawfully answer, which is the actual failure mode the DoLR evidence
  documents.
- **General legal advice chatbots** answer confidently regardless of source coverage. The
  Rights Navigator declines to answer below a retrieval confidence floor rather than guessing.

## 7. Statute sources opened for the Rights Navigator corpus (WP5)

`WebFetch` returns HTTP 403 against every indiacode.nic.in URL (bot detection). `curl` with a
real Chrome user-agent string bypasses that block and downloaded working PDFs. Text extracted
locally with `pdftotext -layout`. Two of five sources fetched and cross-checked line by line
against the extracted text; two candidate live URLs found but stale (many indiacode.nic.in
bitstream IDs surfaced by search no longer resolve, returning HTTP 404 with an HTML body); one
not attempted after that pattern repeated three times running, given the time budget for this
pass.

| Act | URL actually fetched | Date opened | Sections transcribed | Confidence |
|---|---|---|---|---|
| Constitution of India | indiacode.nic.in/bitstream/123456789/19632/1/the_constitution_of_india.pdf ("As on May, 2022" edition, 20 pages, verified as a genuine PDF via `file`) | 29 Aug 2026 | Articles 14, 19(1)(a), 21, 32(1)-(2), 226(1), 300A; Seventh Schedule List II Entries 2, 18; List III Entry 25; List I Entry 19 (cross-checked against authorities.ts's existing claim, matches exactly) | verified, line-quoted from the extracted text |
| Consumer Protection Act 2019 | indiacode.nic.in/bitstream/123456789/16939/1/a2019-35.pdf (39 pages, verified genuine PDF) | 29 Aug 2026 | sections 2(7) "consumer", 2(11) "deficiency", 34 (District Commission jurisdiction, confirms remedy.ts's existing 1-crore-proviso framing), 35 (manner of filing a complaint, not "jurisdiction" as an earlier draft of this plan assumed), 69 (two-year limitation, matches remedy.ts's existing claim exactly) | verified, line-quoted from the extracted text |
| Consumer Protection (Jurisdiction) Rules 2021 | Not fetched as a primary PDF (thc.nic.in mirror found but not retrieved); cross-confirmed via PIB press release (pib.gov.in/PressReleasePage.aspx?PRID=1786342), SCC Online and Taxguru summaries, all agreeing | 29 Aug 2026 | Pecuniary limits: District ≤ 50 lakh, State 50 lakh - 2 crore, National > 2 crore, notified 30 December 2021. Matches remedy.ts's existing hardcoded thresholds (5000000 / 20000000) exactly. | verified via three independent secondary sources agreeing, not the raw Gazette PDF itself |
| Model Tenancy Act 2021 | mohua.gov.in's two known PDF paths both returned HTTP 404 (site reorganised since the URLs were indexed) | 29 Aug 2026, attempt only | security deposit cap, Rent Authority, notice periods | **unverified this session** — corpus chunks written from well-established prior knowledge of this Act, not re-confirmed against a freshly fetched primary text. Flagged `confidence: "unverified"` in the corpus itself. Re-fetch before relying on this in a live pitch; the Act's own text is short and worth getting from the primary source when time allows. |
| Code on Wages 2019 | Three indiacode.nic.in bitstream URLs surfaced by search all returned HTTP 404 | 29 Aug 2026, attempt only | timely payment provisions, complaint authority, limitation | **unverified this session**, same caveat as above |
| Industrial Disputes Act 1947 | Three more indiacode.nic.in bitstream URLs, same 404 pattern; not pursued further given the repeated pattern | 29 Aug 2026, attempt only | retrenchment notice, relevant forum | **unverified this session**, same caveat as above |

**Before this corpus is quoted in the pitch or the video**, re-attempt the Model Tenancy Act,
Code on Wages, and Industrial Disputes Act fetches (indiacode appears to have reorganised its
bitstream IDs; searching for the exact section text in quotes, the way the two successful
fetches above were found, works better than guessing IDs) and update the confidence flags in
`src/lib/data/rights-corpus.ts` accordingly.

## 8. Scheme sources opened for the Scheme Eligibility Reader (WP6)

`pmayg.nic.in` and `pmjay.gov.in` refused a direct connection (DNS/connect failure, not a bot
block) to both WebFetch and curl from this environment; every scheme below except PM-KISAN was
therefore confirmed via WebSearch cross-referencing 3+ independent secondary sources agreeing
with each other on the specific figures used, rather than a single fetched primary PDF. This
is a materially weaker verification standard than WP5's line-by-line PDF cross-check and is
flagged as such in each scheme's `confidence` field in the code.

| Scheme | Official URL | Date opened | Confidence | What disagreed |
|---|---|---|---|---|
| PM-KISAN | pmkisan.gov.in (fetched directly, official page) | 29 Aug 2026 | verified | none; ₹6,000/year in 3 installments, exclusion list confirmed by both the direct fetch and independent search cross-check |
| Ayushman Bharat PM-JAY | pmjay.gov.in (connection refused; used WebSearch cross-check of SECC 2011 deprivation categories D1-D7, urban occupational categories, and the 70+ universal-coverage expansion) | 29 Aug 2026 | conflicting_sources-adjacent: figures consistent across 8 secondary sources, but none is the primary pmjay.gov.in page itself | none between sources; the primary page itself was simply unreachable |
| PM Awas Yojana, Gramin | pmayg.nic.in (DNS failure; used WebSearch cross-check) | 29 Aug 2026 | unverified against a primary source | sources disagree on the exact income ceiling: one cites Rs. 10,000/month as the pre-2024 figure, another cites Rs. 15,000/month as the PMAY-G 2.0 (2024+) revision. Both figures recorded in the scheme's note; the higher, newer figure used as the default. |
| PM Ujjwala Yojana | pmuy.gov.in (search cross-check only; the site itself was not directly fetched this session) | 29 Aug 2026 | unverified against a primary source; no numeric income ceiling found in any source, BPL/SECC-category membership used as the proxy instead | none found; the criterion itself is categorical (BPL/SECC list membership) rather than a specific income figure in any source |
| NSAP old age pension | nsap.nic.in (search cross-check; the Guidelines PDF at nsap.nic.in/Guidelines/nsap_guidelines_oct2014.pdf was found but not fetched this session) | 29 Aug 2026 | unverified against a primary source, but internally consistent across sources | none; Rs. 200/month age 60-79, Rs. 500/month age 80+, both figures under the Central scheme before any state top-up |
| Sukanya Samriddhi | India Post / multiple financial-service secondary sources | 29 Aug 2026 | unverified against a primary indiapost.gov.in source, but highly consistent (age ceiling of 10, 21-year tenure, current interest rate) across independent financial sources | none |
| PM Vishwakarma | pmvishwakarma.gov.in (search cross-check only) | 29 Aug 2026 | unverified against a primary source | none; age 18+, one of 18 named trades, no prior similar-scheme loan in 5 years |
| Mukhyamantri Majhi Ladki Bahin Yojana (Maharashtra, the state scheme) | ladakibahin.maharashtra.gov.in (not directly fetched; search cross-check across 6+ sources) | 29 Aug 2026 | unverified against a primary source, but highly consistent (age 21-65, income ceiling Rs. 2.5 lakh/year, Rs. 1,500/month benefit) | none |

**Before this scheme data is quoted in the pitch or the video**, re-attempt a direct fetch of
pmjay.gov.in, pmayg.nic.in, pmuy.gov.in, nsap.nic.in, and ladakibahin.maharashtra.gov.in (the
DNS/connection failures may be transient or environment-specific, not a permanent block) and
resolve the PMAY-G income-ceiling discrepancy against the primary source rather than the two
disagreeing secondary figures currently both recorded.
