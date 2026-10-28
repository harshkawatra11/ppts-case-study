### 2.4 Headline numbers (all from §3 or §5; never alter)

| Number | Meaning | Source tag | Slides |
|---|---|---|---|
| 38,241 | PHCs (31,882) + CHCs (6,359), 31 Mar 2023 | S01 | S1, S9, S10 |
| 66 to 80% | key-medicine availability range across studies | S02 | S2, S3 |
| 72.2% → 86.1% | availability before and after a 50% cut in stock-out days | S02, M | S9 |
| 1.36 crore | stock-out days avoided a year, base (50% cut) | M | S1, S2, S9 |
| 81.5 lakh / 2.17 crore | bear (30%) / bull (80%) | M | S2, S9 |
| 17,412 | stock-out days avoided per district a year, base | M | S9 |
| ₹390.26 Cr | expired drugs, Telangana (TSMSIDC), 2016-22 | S16 | S2, S3 |
| ₹168 Cr | expired drugs, Odisha (OSMCL), Apr 2019 to Jan 2025 | S17 | S2, S3 |
| ₹1.97 Cr / ₹0.96 Cr | expiry per district a year, Telangana / Odisha | S16, S17, M | S3, S7 |
| 6.1% / 12.5% | share of that expiry the ₹12 L licence must rescue to pay for itself | M | S7 |
| ₹17.13 Cr | Telangana drugs issued with 1 to 89 days of shelf life | S16 | S3 |
| 79.9% | CHC specialist posts unfilled | S01 | S2, S3 |
| 58,000 | snakebite deaths a year | S06 | S3 |
| 43.4% | out-of-pocket share of total health spending, 2022-23 | S10 | S3, S7 |
| ₹12 L | annual licence per district = ₹4 L base + 50 × ₹14,000 + ₹1 L support | M, A05 | S2, S5, S7, S10 |
| ₹93.6 Cr / ₹13.4 Cr / ₹9.6 Cr / ₹4.9 Cr | TAM / SAM / SOM Y3 / Rajasthan | M | S2, S5, S10 |
| 0.25% | ₹12 L as a share of an average district's central NHM allocation (₹47.73 Cr) | S18, M | S2, S5, S8 |
| ₹37,227 Cr | Union NHM allocation 2025-26 | S18 | S5 |
| 95.99 Cr | ABHA IDs created by 31 Jul 2026 | S21 | S1, S5 |
| 71% / 5.6 mo / 10.65x | gross margin / CAC payback / LTV:CAC, base | A08, M | S7, S10 |
| ₹1.80 / 6.39 / 10.65 Cr | billings Y1 / Y2 / Y3, base | M | S7 |
| ₹6.0 / 9.6 / 12.6 Cr | Y3 ARR bear / base / bull | M | S7 |
| 80%, 29,000+, 733, 12 → 36 | eVIN results and scale | S12 | S1, S6 |
| 1.2 → 21.0 days | ARV cover at PHC Kota-4 after one approved shipment (prototype, simulated) | S31 | S4 |
| 6 weeks | MoU to a live district (plan) | A16 | S2, S8 |
| 40 | planned interviews, none done | S31 | S8 |

## 3. Fact and source register

### 3.1 Base source register (P0 writes this table verbatim to `NX\research\sources-base.md`; R0 verifies each row)

Format is fixed: `| ID | Source | URL | Used for |`. Writers cite as `[S01]`. Rows marked *(R0 locates URL)* have a
known source but an unconfirmed exact URL; R0 finds it and writes it into `R0-verify.md`; assemble.py merges the
corrected URL.

| ID | Source | URL | Used for |
|---|---|---|---|
| S01 | MoHFW (2024) 'Health Dynamics of India (Infrastructure and Human Resources) 2022-23', PIB release PRID 2053070, data as of 31 Mar 2023 | https://pib.gov.in/PressReleasePage.aspx?PRID=2053070 | Facility counts; 79.9% CHC specialist shortfall (4,413 of 21,964 in place) |
| S02 | 'Availability of Key Essential Medicines in Public Health Facilities of a South Indian Union Territory' (Puducherry), PMC8654139 | https://pmc.ncbi.nlm.nih.gov/articles/PMC8654139/ | 66 to 80% range; 72.2% state PHC mean; 77% central PHC |
| S03 | 'An Assessment of the Availability of Essential Medicines in Gadag Taluk, Karnataka', PMC10292169 | https://pmc.ncbi.nlm.nih.gov/articles/PMC10292169/ | 74.2% |
| S04 | 'Factors Affecting the Availability and Utilization of Essential Medicines in India: A Systematic Review', PMC11174260 | https://pmc.ncbi.nlm.nih.gov/articles/PMC11174260/ | Haryana: 60% of medicines out of stock for 3 to 6 months |
| S05 | Chaudhury, Hammer, Kremer, Muralidharan, Rogers (2006) 'Missing in Action', Journal of Economic Perspectives 20(1) | https://www.aeaweb.org/articles?id=10.1257/089533006776526058 | 40% health-worker absence (research only) |
| S06 | Suraweera et al. (2020) 'Trends in snakebite deaths in India from 2000 to 2019', eLife 9:e54076 | https://elifesciences.org/articles/54076 | 58,000 deaths a year; 70% in 8 states |
| S07 | WHO, rabies burden in India; National Action Plan for Dog Mediated Rabies Elimination by 2030 *(R0 locates URL)* | https://www.who.int/india/health-topics/rabies | 18,000 to 20,000 rabies deaths a year |
| S08 | Registrar General of India, SRS Special Bulletin on Maternal Mortality 2019-21 *(R0 locates URL)* | https://censusindia.gov.in/census.website/data/SRSMMB | MMR 93 |
| S09 | 'Spatio-temporal analysis of dengue outbreaks in India (2021-2025): evidence from IDSP', PMC13479492 *(R0 verifies)* | https://pmc.ncbi.nlm.nih.gov/articles/PMC13479492/ | Dengue signal 4 to 6 weeks before peak |
| S10 | MoHFW (2026) 'National Health Accounts Estimates for India 2022-23', PIB PRID 2265816 | https://pib.gov.in/PressReleasePage.aspx?PRID=2265816 | OOPE 43.4% of total health expenditure |
| S11 | NHSRC 'National Health Accounts Estimates for India 2021-22' *(R0 locates URL)* | https://nhsrcindia.org/national-health-accounts-records | Pharmaceuticals 30.84% of current health expenditure |
| S12 | UNDP India 'Improving Vaccination Systems: eVIN' | https://www.undp.org/india/projects/improving-vaccination-systems-evin | 80% fewer stock-outs; 29,000+ cold chain points; 733 districts; 36 States/UTs; 12 states at 2015 launch |
| S13 | Constitution of India, Seventh Schedule, List II, Entry 6 | https://www.indiacode.nic.in/handle/123456789/15240 | Health is a State subject |
| S14 | Digital Personal Data Protection Act, 2023 | https://www.meity.gov.in/data-protection-framework | No patient data in scope |
| S15 | C-DAC 'Strengthening Free Drug Service Initiative' (e-Aushadhi / DVDMS) | https://cdac.in/index.aspx?id=lu_SFDI | Incumbent drug-supply ledger |
| S16 | CAG audit of public health infrastructure, Telangana (report tabled Aug 2024), reported by Medical Dialogues | https://medicaldialogues.in/news/health/doctors/rs-390-crore-loss-over-expired-drugs-shortage-of-hospital-beds-staff-cag-report-flags-health-sector-concerns-in-telangana-132815 | ₹390.26 Cr expired drugs 2016-22 (e-Aushadhi data); ₹17.13 Cr issued with 1 to 89 days of shelf life |
| S17 | CAG compliance audit, Odisha State Medical Corporation (Oct 2026), reported by UNI | https://www.uniindia.com/east-india/audit-odisha-cag-drugs-expiry/199282 | ₹168 Cr expired, Apr 2019 to Jan 2025; ₹47 Cr of COVID medicines |
| S18 | PRS Legislative Research 'Demand for Grants 2025-26 Analysis: Health and Family Welfare' | https://prsindia.org/budgets/parliament/demand-for-grants-2025-26-analysis-health-and-family-welfare | NHM ₹37,227 Cr (37% of the ministry's ₹99,859 Cr) |
| S19 | NITI Aayog 'List of 112 Aspirational Districts' | https://www.niti.gov.in/sites/default/files/2023-07/List-of-112-Aspirational-Districts%20%281%29.pdf | 112 districts; Rajasthan's five (Baran, Dholpur, Jaisalmer, Karauli, Sirohi) |
| S20 | NITI Aayog (2018) 'Transformation of Aspirational Districts: Baseline Ranking and Real-time Monitoring' | https://www.niti.gov.in/sites/default/files/2018-12/AspirationalDistricts-Book.pdf | 49 indicators; health and nutrition weight 30% |
| S21 | PIB (Jul 2026) ABDM statistics: 95.99 crore ABHA IDs as of 31 Jul 2026 | https://static.pib.gov.in/WriteReadData/specificdocs/documents/2026/jul/doc202676912801.pdf | 95.99 Cr ABHA IDs |
| S22 | Health Care Without Harm and Arup (2019) 'Health Care's Climate Footprint' | https://global.noharm.org/media/4366/download?inline=1 | Health care 4.4% of global net emissions; 71% of it from the supply chain; India's health share of national footprint |
| S23 | Ministry of Panchayati Raj, Local Government Directory (district count) *(R0 records the count on the day)* | https://lgdirectory.gov.in/ | About 780 districts |
| S24 | Scroll (Dec 2024) 'Rajasthan's BJP government scraps new districts' | https://scroll.in/latest/1077338/rajasthans-bjp-government-scraps-12-new-districts-and-3-divisions | Rajasthan: 41 districts |
| S25 | Codingclave (2026) Indian healthcare software (HMIS/EHR) pricing benchmarks *(R0 locates URL)* | to be located | ₹3 L to ₹25 L a year price band |
| S26 | upGrowth (2026) India SaaS unit-economics benchmarks *(R0 locates URL)* | to be located | Gross margin, CAC payback ranges |
| S27 | Sabin Vaccine Institute, 'Digitized supply chain delivers vaccines to the last mile' (eVIN, UNDP and Logistimo) | https://sabin.org/resources/digitized-supply-chain-delivers-vaccines-to-the-last-mile-2 | eVIN's design partners |
| S28 | Kim, W. C. and Mauborgne, R. (2005) Blue Ocean Strategy, Harvard Business School Press | n/a (book) | ERRC grid |
| S29 | Helmer, H. (2016) 7 Powers: The Foundations of Business Strategy, Deep Strategy | n/a (book) | Switching costs, process power, counter-positioning |
| S30 | United Nations, Sustainable Development Goals targets 3.8, 10.2, 12.3 | https://sdgs.un.org/goals | SDG mapping |
| S31 | SwasthyaGrid prototype audit (`swasthyagrid-gcp/case/02-facts.md` §4) and prototype run log for PHC Kota-4 (simulated data) | local file | 1.2 → 21.0 days; 40 facilities in 5 Rajasthan districts; transfer rules |
| S32 | ThePrint (Sep 2024) 'Rural India has an 80% shortfall of specialist doctors' | https://theprint.in/health/rural-india-has-an-80-shortfall-of-specialist-doctors-mp-gujarat-tamil-nadu-worst-off/2259874/ | Per-specialty shortfall: surgeons 83.2%, paediatricians 81.6%, physicians 79.1%, ObGyn 74.2% |
| S33 | 'Impact of electronic vaccine intelligence network application used in immunization sessions in Pune city', IJCMPH | https://www.ijcmph.com/index.php/ijcmph/article/view/9234 | Vaccine wastage changes after eVIN |
| S34 | 'Disposal Practices of Unused and Expired Medicines Among the General Public and Pharmacies: Odisha', PMC10867696 | https://www.ncbi.nlm.nih.gov/pmc/articles/PMC10867696/ | 82.1% of households bin unused drugs; pharmacy disposal |
| S35 | CAG ICISA IT audit report on e-Aushadhi *(R0 verifies the 31 States/UTs dashboard figure)* | https://cag.gov.in/uploads/icisa_it_reports/e-Aushadhi-063622732a5c9d1-91268077.pdf | e-Aushadhi coverage |
| S36 | Medical Dialogues / Deccan Herald (Sep 2024) reports on HDI 2022-23 specialist shortfall | https://deccanherald.com/india/rural-health-centres-see-70-shortage-of-specialist-doctors-says-report-3183530 | Cross-check of S01 and S32 |

Tags other than S-IDs: `[M]` = model output (§5), `[A01]`…`[A17]` = assumptions (§5.4).

### 3.2 Locked deck facts and R0 fallbacks

R0 verifies each row. If a row is CONFIRMED, nothing changes. If it fails, R0 writes the listed replacement pairs
into `NX\deck\overrides.json` (gen.py applies them to the slide code and the sweeps) and logs it. **Only the
fallbacks listed here may be used.** Any other failure is logged as a residual for the user and the deck keeps the
original value.

| Fact ID | Value on the deck | Source | R0 check | Fallback if it fails (exact override pairs) |
|---|---|---|---|---|
| F01 | 38,241 facilities; PHC 31,882; CHC 6,359 | S01 | PIB page states these counts | none (validated in Sep 2026 build) |
| F02 | 66 to 80%, 72.2%, 77%, 74.2% | S02, S03 | PMC pages | none (validated) |
| F03 | 79.9% CHC specialist shortfall | S01, S32 | numbers in either page | none (validated) |
| F04 | ₹390.26 Cr, 2016-22, Telangana; ₹17.13 Cr, 1 to 89 days | S16 | article text | none (verified 7 Oct 2026 during planning) |
| F05 | ₹168 Cr, Apr 2019 to Jan 2025, Odisha | S17 | article text | none (verified 7 Oct 2026) |
| F06 | NHM ₹37,227 Cr in 2025-26 | S18 | PRS page | none (verified) |
| F07 | 95.99 Cr ABHA IDs, 31 Jul 2026 | S21 | PIB PDF | `{"95.99 Cr ABHA IDs":"90 Cr+ ABHA IDs","95.99 Cr":"90 Cr+","ABHA IDs created by 31 Jul 2026":"ABHA IDs created by mid-2026"}` |
| F08 | 112 aspirational districts; Rajasthan has 5; 49 indicators; health 30% | S19, S20 | NITI PDFs | none |
| F09 | 41 Rajasthan districts | S24 | article | none |
| F10 | about 780 districts | S23 | LGD home page or any dated official count between 775 and 810 | none: the deck says "about 780"; log the day's count |
| F11 | 31 States and UTs on the e-Aushadhi central dashboard | S35 | the CAG ICISA PDF or any government page | `{"[\"31\",\"States and UTs on the e-Aushadhi dashboard\"]":"[\"29,000+\",\"eVIN cold chain points already digital\"]"}` |
| F12 | India's health sector = 1.5% of the national climate footprint | S22 | HCWH report country table | `{"[\"1.5%\",\"of India's climate footprint comes from health care\"]":"[\"4.4%\",\"of global net emissions come from health care\"]"}` |
| F13 | 71% of health care's global footprint is its supply chain | S22 | HCWH report | none (widely reported headline figure) |
| F14 | eVIN 80% fewer stock-outs; 29,000+; 733 districts; 12 → 36 | S12 | UNDP page | none (validated) |
| F15 | ₹3 L to ₹25 L Indian HMIS/EHR price band | S25 | Codingclave page | `{"Indian HMIS and EHR vendor pricing (2026)":"Indian HMIS and EHR vendor pricing (team scan, 2026)"}` and log a residual |
| F16 | 71% gross margin as a benchmark-based assumption | S26 | upGrowth page | none: it is labelled an assumption (A08) on the deck |
| F17 | Health and nutrition is 30% of the ADP composite score | S20 | NITI book | none |
| F18 | 8 states carry 70% of snakebite deaths | S06 | eLife abstract | none (validated) |

### 3.3 Strings that must never appear on a slide

`₹960`, `960 Cr`, `480 Cr`, `Rs 4.0`, `Ranvir`, `Gursimran`, `Gemini`, `Vertex`, `BigQuery`, `Google`, `Cloud Run`,
`Sarvam`, `p95`, `8,776`, `3+ days`, `20x`, `PRAMAAN`, `Maudrik`, `Dayita`, `TODO`, `TBD`, `Lorem`, `Insert`, `xyz`,
`API`. (The research document may mention ₹960 Cr only inside §3, the reconciliation log.)

## 4. Product facts: what exists and what is planned

The deck may state only these. Source: S31 (`ROOT\swasthyagrid-gcp\case\02-facts.md` §4, audited 30 Sep 2026).

| Capability | Status | How the deck words it |
|---|---|---|
| District view of stock, beds, staff, diagnostics, footfall for 40 facilities (30 PHCs, 10 CHCs) in 5 Rajasthan districts (Jaipur Rural, Alwar, Bikaner, Udaipur, Kota) | Prototype on **simulated data** | "a working prototype runs on simulated data" |
| Warning rule: days of cover = units ÷ average daily use; critical under 3 days (emergency drugs under 5) | Prototype | "Flags any item under 3 days of cover" |
| Ranked proposals: refills to 21 days of cover; lateral transfers within 40 km for critical items | Prototype | "Ranks the nearest surplus and sizes the move" |
| Every proposal starts pending; a human approves, edits or rejects | Prototype | "a named officer approves" |
| Receiving facility confirms delivery; stock updates once | Prototype | "The receiving PHC confirms" |
| Bed redirect above 90% occupancy | Prototype | "to a facility under 90% full" |
| PHC Kota-4 run: 7 ARV vials (1.2 days) → 119 vials sent from DDW Kota in a refrigerated van → 126 vials confirmed (21.0 days) | Prototype run on simulated data | proof card on S4 |
| Live district pilot, state data MoU, real facility logins | **Planned** | "six weeks from MoU to a live district" |
| Customer interviews (40) | **Planned; none done** | "none done yet" |
| Citizen layer (nearest PHC, first-aid guidance, always 108) | Prototype | not on slides (research only) |

Never write "deployed", "live in", "used by", "customers", "pilots running" or "partners" about SwasthyaGrid.
