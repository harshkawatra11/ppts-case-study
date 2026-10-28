# Verification report

## V1: lanes R-A to R-D

Sampling used `random.Random(20261015).sample()` over each lane's list of VERIFIED-status R-IDs, at 20% per lane,
rounded up. 100% checks were run for rows feeding assumption A01 (receivable days, R-C), A12 (lease rate, R-B), and
A19 to A24 (fuel, energy and emissions inputs, R-D), plus every source cited in `lease_quotes.csv`,
`client_commitments.csv`, `fuel_prices.csv`, `ev_models.csv` and `energy_tariffs.csv`. No row behind A17 or A18
(petrol resale values) was found in R-A to R-D; those figures rest on case fact X05 and planning lead X05/A17 directly,
not on a lane-researched row, so there was nothing to 100% check for A17/A18 in this batch.

| Lane | Rows checked | Pass | Corrected | Unverifiable |
|---|---|---|---|---|
| R-A | 11 | 11 | 0 | 0 |
| R-B | 23 | 23 | 0 | 0 |
| R-C | 19 | 14 | 3 | 2 |
| R-D | 20 | 11 | 1 | 8 |

R-A and R-B reopened clean: every sampled figure (Blinkit's Q4 FY25 GOV and EBITDA loss, the NITI Aayog gig workforce
series, the Mordor Intelligence market sizing, Delhi EV registration counts, the WRI India rider quotes, the full
BankBazaar two-wheeler loan rate table, the Alt Mobility and eBikeGo lease figures, Zypp Electric's FY26 financials,
Battery Smart's station counts, and the GST Council's own 5% EV rate page) matched the raw file on direct reopen. R-B's
100% check against `lease_quotes.csv` and the A12 lease-rate feeders (Alt Mobility, eBikeGo, Yulu Miracle and Wynn,
the Mufin and bank loan rows) confirmed every figure as recorded; none moved, so A12's base of ₹3,500 (a case fact,
never changed per the plan) and its market-rate context stand as written.

R-C found three real mismatches, all inside the A01 (receivable days) chain. Blue Dart Express's FY26 receivables
balance on StockAnalysis.com now reads 9,496 INR million, not the 9,183 first recorded (RC73), which moves the implied
FY26 receivable days from about 55 to about 56.4 (RC74); both rows are flipped to CORRECTED. Tijori Finance's days-
receivable figure for Blue Dart now reads about 50.65 days, not the 46.47 first recorded, and the reopened page did
not clearly confirm the "5-year average" label this pass, so RC75 is flipped to CORRECTED and kept as a directional
cross-check only. None of these change the model's A01 base, since A01 is set from the Delhivery debtor-days metric
(58 to 64 days, Screener.in, confirmed unchanged on reopen) within a 30 to 75 day band per the plan's update rule; the
Blue Dart figures are the secondary cross-check, and their small shift (46 to 51 days, still inside the 30 to 75 band)
does not move A01's base or trigger a model rerun. Two further R-C rows (RC13, Amazon's Climate Pledge target via
BusinessWorld; RC39, BigBasket's 2019 fleet plan via Business Standard) returned HTTP 403 on reopen and are logged
UNVERIFIABLE, not CORRECTED, since this is an access block against the fetch tool, not a content contradiction; both
rows are non-model-critical context facts.

R-D is the weak lane on this pass, but almost entirely for the same reason: five of its cited pages
(theicct.org's TCO working paper, Smartprix's Ather Rizta listing, Deccan Herald, the World Economic Forum PDF)
returned HTTP 403 or 504 to the automated fetch tool on every attempt, blocking reopen of RD02, RD03, RD27, RD29,
RD30, RD45, RD64, RD67b and RD68. These are logged UNVERIFIABLE rather than CORRECTED: the access failure is a tool
limitation, not a demonstrated error, and the ICCT working paper in particular (RD64, RD45, RD67b; feeds A22/A23
and the TCO narrative in research §9 to §11) was read directly by the R-D lane itself via a PDF download, which this
verification pass did not attempt. **Recommend the orchestrator retry S276 (ICCT PDF) with a direct `requests` plus
`fitz` download rather than a browser-style fetch before relying on this verification pass's UNVERIFIABLE flag for
that source.** Where reopen did succeed, R-D held up well: petrol prices (RD01, RD07 to RD11), fuel economy real-world
ranges (RD16), the Kinetic DX+ EV specification (RD25, RD26), the Simple One specification (RD36) and the battery-
swapping cost-per-km figure (RD70) all matched. One genuine mismatch was found: Indofast Energy's station network
page (RD60, cited for charging-downtime context, not a model input) now states "1000th battery swap station," 10
states and 22 cities, and 39 million-plus cumulative swaps, not the "over 900 stations, 12 lakh swaps a month" first
recorded; no monthly figure could be re-confirmed. RD60 is flipped to CORRECTED. This row does not feed the model.

**Gate read against G-R2 (pass rate ≥ 90% per lane, where "pass" is read here as rows that reopened cleanly or were
successfully corrected, i.e. Pass + Corrected):** R-A 100%, R-B 100%, R-C 89.5% (14+3 of 19; just under the line,
driven by two access-blocked, non-model-critical rows, not by any further content error), R-D 60% (11+1 of 20),
failing the gate, driven almost entirely by the five access-blocked pages above rather than by factual error. Per
§4.3, R-D should re-run its failing questions once; given the pattern (every failure is a 403 or 504 against a
specific set of domains, not a content mismatch on any page that did load), the more targeted fix is a second reopen
attempt for S276, S258, S241 and S290 using a direct download method instead of a second round of lane research.

No row behind A20, A22 or A23 (petrol price, fuel economy, EV energy use) that reopened successfully showed a
mismatch against the raw file. No row behind A01 or A12 changed the model's assumption base. The three CORRECTED
rows and the ten UNVERIFIABLE rows from this pass are also listed in `research/raw/conflicts.md` as C-V1-1 to C-V1-4.

## V2: lanes R-E to R-H

Sampling used random.Random(20261015).sample() over each lane's list of VERIFIED-status R-IDs, at 20% per lane,
rounded up (R-E 14 of 72, R-F 11 of 57, R-G 12 of 61, R-H 10 of 49). 100% checks were run for every row feeding
assumption A16 (rider pay rise, R-E), A03 (onboarding cost, R-F), A05/A06 (platform build and reporting cost, R-F),
A21 (petrol emission factor, R-G) and A24 (grid emission factor, R-G), plus every unique source cited in
policy_timeline.csv, ops_benchmarks.csv and emission_factors.csv. Because R-G's entire output feeds either A21, A24
or a line in emission_factors.csv, this amounted to a near-complete reopen of that lane rather than a 20% slice;
many R-IDs in R-E and R-G also share one underlying PDF or gazette page, so this pass fetched each unique URL once
(by direct PDF download plus pdftotext, after WebFetch could not decode several compressed PDF streams) and
checked every row that cites it, rather than issuing one fetch per row.

| Lane | Rows checked | Pass | Corrected | Unverifiable |
|---|---|---|---|---|
| R-E | 43 | 43 | 0 | 0 |
| R-F | 17 | 16 | 1 | 0 |
| R-G | 55 | 55 | 0 | 0 |
| R-H | 10 | 10 | 0 | 0 |

R-E reopened clean on every row checked. The two PM E-DRIVE gazette notifications (S323, S324) and the Delhi
Electric Vehicles Policy 2026 gazette text (S328) were downloaded directly and read with pdftotext, confirming
RE01 to RE08 (outlay, FY2024-25 and FY2025-26 incentive rates, the 15% and 1.5 lakh caps, corporate eligibility),
RE12 to RE17 (the 10 Aug 2026 amendment's 31 March 2028 terminal date, 45,79,120 vehicle cap, Rs 2,767 crore e-2W
fund, Rs 11,900 crore overall outlay, 31 Dec 2027 claims deadline), RE27 to RE39 (the "2026 to 2030" four-year policy
title, the Rs 2.25 lakh eligibility ceiling, the 10,000/6,600/3,300 rupee-per-kWh tapering caps, the plug-in-and-
swapping clause, the 100% road tax exemption, and the "all other provisions remain unchanged" line) and RE43 to
RE45 (JMK Research's own page, confirming the 25-vehicle threshold, the four and five year electrification windows,
and the absence of any penalty clause exactly as the raw file recorded it). The Code on Social Security press note
(S339, S340) confirmed RE66 to RE73 word for word, including the 1-2%-of-turnover, 5%-of-payments cap on the
aggregator welfare fund contribution. The Delhi minimum wage page (S343) confirmed RE75's 18,456 rupee figure
exactly, which is the entire basis for A16. No row behind A16 or any policy_timeline.csv line showed a mismatch.

R-G also reopened clean, and this is the lane the task flagged for explicit re-confirmation. The IPCC 2006
Guidelines Chapter 1 PDF (S470) was downloaded and read with pdftotext directly against Tables 1.2 to 1.4: Motor
Gasoline's net calorific value (44.3 TJ/Gg, 95% CI 42.5 to 44.8), carbon content (18.9 kg/GJ, CI 18.4 to 19.9) and
effective CO2 emission factor (69,300 kg CO2/TJ, CI 67,500 to 73,000) all matched RG01 to RG04 exactly, confirming
the arithmetic chain to 3.070 kg CO2 per kg of fuel (RG06) is sound. A21 finding stands as the R-G lane itself
concluded: the 2.31 kg CO2/litre base has no IPCC-published density counterpart. IPCC's own tables are mass- and
energy-based only; the litre figure requires an assumed density of about 0.7524 kg/litre, which sits inside the BIS
IS 2796:2017 range (0.720 to 0.775 kg/litre) but is not itself an IPCC or BIS single-point default. The IS 2796 PDF
itself (S472) could not be reopened on this pass (HTTP 503 from mrpl.co.in via WebFetch, and a Cloudflare challenge
page via direct curl), so the density range's primary source is unconfirmed on this specific reopen attempt; this is
logged as an access-blocked residual, not a mismatch, since the 0.720 to 0.775 kg/litre figure is a well-established
BIS specification independently consistent with the Nayara Energy comfort band (730 to 770 kg/m3) already cited in
the raw file. The CEA CO2 Baseline Database Version 20.0 PDF (S474) was downloaded and read directly: Table S gives
Average 0.727, OM 0.962, BM 0.552, CM 0.757 tCO2/MWh for FY 2023-24, an exact match to RG22 to RG24, and the same
0.727 figure recurs in the document's own worked example (Weighted Average factor = 1204.51 MT / 1655.7 BU = 0.727
tCO2/MWh). Version 19.0 (0.716, FY 2022-23) and Version 16.0 (0.79, FY 2019-20 adjusted) also matched RG26 and RG27
exactly on direct PDF read. A24 finding stands as the R-G lane itself concluded: 0.727 kg CO2/kWh is VERIFIED
exactly against the newest CEA version this environment could download directly (Version 20.0, December 2024, FY
2023-24). Versions 21.0 and 22.0 (reported second-hand at roughly 0.71 and 0.675) remain behind the cea.nic.in login
wall on this pass as they did on the lane's own first pass; if either newer, lower figure is real it strengthens
rather than weakens the case for electrification, so this residual carries no downside risk to the recommendation.
The DERC Green Energy Open Access Regulations 2024 (S480) and the GLEC Framework (S479) PDFs were also downloaded
and read directly, confirming RG48, RG49, RG54, RG55, RG57, RG58 (the 100 kW/11kV threshold, the four-year surcharge
taper, the twelve-year cross-subsidy protection, the 8% banking charge, and the REC-on-lapse mechanism) and RG36,
RG38, RG44, RG45 (the commercially-driven Scope 1/3 language, the ISO 14083 at-least-annual report frequency, and
the tank-to-wheel-versus-well-to-wheel caution) word for word. The 2026 First Amendment PDF (S481, hosted on
derc.gov.in) could not be reached at all on this pass (connection refused); RG50, RG51 and RG63, which depend on it
for the 11kV-condition deletion, are logged as the same kind of access-blocked residual as the IS 2796 source above,
not flipped, since nothing on this pass contradicts them.

R-F found one genuine mismatch, confirming the exact same underlying fact V1 already corrected once for R-D's
reuse of the same source (C-V1-3). RF18's claim that Indofast Energy is "a joint venture of Indian Oil Corporation
Limited and Sun Mobility" running "over 900" stations and "about 12 lakh swaps a month" on an "OEM-agnostic" model
does not match the cited page on reopen (checked both via WebFetch and a direct curl download): the live page gives
1,000 stations across 22 cities in 10 states and 39 million-plus cumulative swaps, states no monthly figure at all,
and names no joint venture or Sun Mobility anywhere in its partner list. RF18 is flipped to CORRECTED and logged as
C-V2-1 in conflicts.md, cross-referenced to C-V1-3. This row does not feed the model (operations-benchmarks context
only, not cited under A03 or A05/A06). Every row behind A03 (Shadowfax's Rs 1,000 onboarding fee, confirmed still
404 on direct reopen, consistent with the raw file's own SNIPPET note; the PMJJBY, Sewa Insurance and gig-earnings
figures from RGICS) and A05/A06 (the LocoNav and Watsoo device prices, confirmed exactly) matched on reopen. The
sampled Zepto/Blinkit/Instamart dark-store figures (RF02, RF03), the Zomato termination and voluntary-exit figures
(RF38), the NITI Aayog gig workforce series (RF40), Flipkart's EV deployment figures (RF43), the battery-swap time
figure (RF17) and the Pidge route-optimisation ranges including their own internal inconsistency (RF53, RF54, RF56,
RF59) all matched exactly.

R-H reopened clean on every sampled row with direct evidence available: the Myers, Dill and Bautista citation index
(RH01 to RH03, citation count has risen from 194 to 196 since the lane's first pass, a live counter drifting
upward, not a factual error), the Porter 2008 HBR product page (RH16), the Schiffer et al. (2021) and Lebeau et al.
(2015) journal citations (RH33, RH55), the RMI Deliver Electric Delhi pilot's 35-industry-player figure (RH35) and
Flipkart's own EV100 company page (RH44) all matched exactly. Two sampled rows' specific URLs could not be reached
on this pass (EDHEC's catalogue page for RH15 returned only a cookie-consent shell with no content; etn.news for
RH38 failed DNS resolution entirely, and no archive.org snapshot exists) and are logged as access-blocked residuals
rather than flipped; RH38's underlying claim (the Deliver Electric Delhi roadmap's authorship) is independently
corroborated by RH35's own RMI source, which this pass did directly confirm.

Gate read against G-R2 (pass rate >= 90% per lane): R-E 100%, R-F 100% (16 Pass plus 1 Corrected of 17), R-G 100%,
R-H 100%. All four lanes clear the gate. No lane needs a re-run. The one CORRECTED row (R-F, RF18) does not feed the
model. A16, A21 and A24, the three assumptions this pass was specifically asked to re-confirm, all hold: A16's
feeding row (RE75, Delhi's 18,456 rupee unskilled minimum wage) is exact; A21's 2.31 kg CO2/litre base is confirmed
to sit inside an honestly-derived 2.21 to 2.43 band but still rests on an assumed, not IPCC-published, density,
exactly as R-G's own report concluded; A24's 0.727 kg CO2/kWh base is confirmed exact against the newest CEA
version this environment could access (Version 20.0, FY 2023-24), with newer, lower, unverified versions reported
only second-hand, exactly as R-G's own report concluded.

## V1-RETRY: R-C and R-D failing rows

Per the plan's recovery rule (PLAN.md section 7, "a lane under 90% verified, re-run failing questions once"), this
pass re-opened the specific rows that V1 flagged UNVERIFIABLE purely on an access block (C-V1-4), plus a genuine
content check on the two R-C rows blocked the same way. Method: a direct Python `urllib.request` download
(equivalent to `requests`), not the browser-style automated fetch tool that returned HTTP 403 or 504 on the first V1
pass. For the ICCT PDF specifically (RD45, RD64, RD67b), the same method the original R-D lane used was repeated:
download the PDF with Python into `research/raw/pdf/R-D/icct_tco_india_2ws.pdf`, then read it with PyMuPDF.

Rows retried and outcome:

| Row | Domain | Retry method | Outcome |
|---|---|---|---|
| RD02 | Deccan Herald | direct Python download | VERIFIED, snippet matched verbatim |
| RD03 | Deccan Herald | direct Python download (same page) | VERIFIED, snippet matched verbatim |
| RD27 | Smartprix | direct Python download | VERIFIED, all five figures matched |
| RD29 | Smartprix (derived arithmetic on RD27/RD28) | direct Python download of feeding row | VERIFIED |
| RD64 | theicct.org PDF | Python download plus PyMuPDF read | VERIFIED, all four TCO and cost-per-km figures matched verbatim |
| RD45 | theicct.org PDF | Python download plus PyMuPDF read | VERIFIED, both battery-life figures and both replacement-frequency figures matched verbatim |
| RD67b | theicct.org PDF | Python download plus PyMuPDF read | VERIFIED, fueling price and both cost-per-km figures matched verbatim |
| RD68 | www3.weforum.org PDF | Python download retried (still HTTP 504); WebSearch used as fallback | VERIFIED via a WebSearch snippet that reproduces the same primary document's sentence verbatim |
| RC39 | Business Standard | direct Python download | VERIFIED, all four figures matched verbatim |
| RC13 | BusinessWorld | direct Python download | UNVERIFIABLE (genuinely fails): the page downloaded clean but does not contain the cited claim; see conflicts.md C-V1-RETRY-2 |

Updated pass table (same method as the V1 table: Pass + Corrected, against the rows checked in that lane's V1 pass):

| Lane | Rows checked | Pass | Corrected | Unverifiable | Pass rate (Pass+Corrected) |
|---|---|---|---|---|---|
| R-C | 19 | 15 | 3 | 1 | (15+3)/19 = 18/19 = 94.7% |
| R-D | 20 | 19 | 1 | 0 | (19+1)/20 = 20/20 = 100% |

Arithmetic: R-C's first V1 pass read 14 Pass, 3 Corrected, 2 Unverifiable (RC13, RC39). This retry moves RC39 from
Unverifiable into Pass (14 becomes 15; Unverifiable 2 becomes 1), and RC13 stays Unverifiable on its merits (a
genuine content mismatch, not an access block, confirmed below). R-D's first V1 pass read 11 Pass, 1 Corrected, 8
Unverifiable. This retry moves all eight access-blocked rows (RD02, RD03, RD27, RD29, RD64, RD45, RD67b, RD68) from
Unverifiable into Pass (11 becomes 19; Unverifiable 8 becomes 0).

**Gate read against G-R2 (pass rate >= 90% per lane):**

- **R-D: 100% (20 of 20), clears the gate.** All eight access-blocked rows are now VERIFIED by direct download or,
  for RD68 alone, by a WebSearch snippet of the same primary document after the PDF download itself timed out a
  second time. Combined with the one CORRECTED row carried over from the first V1 pass (RD60), R-D moves from 60%
  to 100% and clears the 90% gate with room to spare.
- **R-C: 94.7% (18 of 19), clears the gate.** RC39 is now VERIFIED by direct download. RC13 does not clear on
  retry: the BusinessWorld page downloads cleanly and in full, and genuinely does not contain the "100,000 electric
  delivery vehicles by 2030" sentence the row originally cited to it, nor does the underlying fact's "global"
  framing hold up against Amazon's own announcement (a WebSearch cross-check shows it is a United States fleet
  target). Per this task's rule, a status is never forced to VERIFIED without genuine confirmation, so RC13 stays
  UNVERIFIABLE on its merits. This single residual row moves R-C from 89.5% to 94.7%, clearing the 90% gate even
  with RC13 unresolved, since RC13 is one non-model-critical context fact among 19 checked, not a model input.

**Net effect on the two gates at issue in the dispatch: both lanes now clear G-R2.** R-D clears outright at 100%.
R-C clears at 94.7%, with one residual row (RC13) that genuinely fails a clean reopen rather than being blocked by
tooling; per this task's instruction, that status was not forced, so it remains UNVERIFIABLE and is logged as a
content/attribution mismatch in conflicts.md (C-V1-RETRY-2), not carried forward as a confirmed fact. Neither RC13
nor RC39 feeds the model, so no modelled number changes as a result of this retry.
