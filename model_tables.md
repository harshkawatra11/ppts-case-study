# PRAMAAN model tables

## T1. Annual high-stakes sittings (lakh)
| Line | Lakh |
|---|---|
| NTA CBT exams | 100.0 |
| NEET-UG | 22.76 |
| SSC CGL and GD | 53.36 |
| RRB NTPC and Group D (half a cycle a year) | 114.95 |
| UPSC CSE | 9.38 |
| Central subtotal | 300.45 |
| State exams (A02) | 200.0 |
| Total | 500.45 |

## T2. Expected annual loss, 2026 baseline (Rs Cr)
| Line | Value |
|---|---|
| Candidates hit by cancellations a year (lakh) | 38.59 |
| Cost per affected candidate (Rs) | 7300 |
| Direct candidate and re-conduct loss | 2,817.3 |
| Stalled posts: 20,800 a year x 8 months x Rs 30,000 | 499.2 |
| Expected annual loss (EAL) | 3,316.5 |
| EAL, cash only (no candidate time) | 1,386.8 |
| Gordon-Loeb ceiling (EAL / e) | 1,220.1 |

## T3. Cost components (Rs Cr)
| ID | Component | Capex | Opex a year |
|---|---|---|---|
| C01 | NEIAA: statutory standards, accreditation, audit and incident authority | 150 | 120 |
| C02 | National Item Bank Vault and 45,000 calibrated items | 172.5 | 38 |
| C03 | Split-key cryptography: HSMs, PKI, threshold key release | 40 | 8 |
| C04 | Forensic watermarking, custody ledger, smart-lock boxes | 50 | 17.5 |
| C05 | Hardening 2,500 existing government labs as secure centres | 75 | 25 |
| C06 | Identity at the gate: 1:1 face-match devices | 100 | 15 |
| C07 | CERT-Exam SOC and AI forensics | 80 | 60 |
| C08 | Insider programme: vetting, sequestration, rotation | 0 | 50 |
| C09 | Independent audits and red teams | 0 | 50 |
| C10 | 36 State Examination Security Cells | 72 | 180 |
| C11 | Candidate Protection Fund | 0 | 50 |
| C12 | Exam-crime investigation and forensic labs | 40 | 60 |
|  | Total | 779.5 | 673.5 |

## T4. Base case by year (Rs Cr)
| Year | Cost | EAL | Avoided loss | Cum. benefit | Cum. cost |
|---|---|---|---|---|---|
| 2027 | 581.2 | 3,316.5 | 265.3 | 265.3 | 581.2 |
| 2028 | 783.2 | 3,416.0 | 956.5 | 1,221.8 | 1,364.5 |
| 2029 | 829.4 | 3,518.5 | 1,688.9 | 2,910.7 | 2,193.8 |
| 2030 | 673.5 | 3,624.0 | 2,319.4 | 5,230.1 | 2,867.3 |
| 2031 | 673.5 | 3,732.8 | 2,986.2 | 8,216.3 | 3,540.8 |
| 2032 | 857.5 | 3,844.7 | 3,075.8 | 11,292.1 | 4,398.4 |
| 2033 | 673.5 | 3,960.1 | 3,168.1 | 14,460.1 | 5,071.9 |
| 2034 | 673.5 | 4,078.9 | 3,263.1 | 17,723.3 | 5,745.4 |
| 2035 | 673.5 | 4,201.3 | 3,361.0 | 21,084.3 | 6,418.9 |
| 2036 | 673.5 | 4,327.3 | 3,461.8 | 24,546.1 | 7,092.4 |

## T5. Scenarios (Rs Cr, PV at 8% real)
| Scenario | Loss cut | PV benefit | PV cost | NPV | BCR | Payback |
|---|---|---|---|---|---|---|
| bear | 58% | 10,859.2 | 4,767.6 | 6,091.6 | 2.28 | 2030 |
| base | 80% | 14,978.2 | 4,767.6 | 10,210.6 | 3.14 | 2029 |
| bull | 91% | 17,084.5 | 4,767.6 | 12,316.9 | 3.58 | 2028 |
| base, cash only | 80% | 6,263.3 | 4,767.6 | 1,495.8 | 1.31 | 2032 |

## T6. Tornado on base NPV (Rs Cr)
| Input | Low | High |
|---|---|---|
| Candidate time per re-sit, Rs 0 to Rs 10,000 | 1,495.8 | 18,925.4 |
| Candidates hit a year, -30% to +30% | 6,393.5 | 14,027.7 |
| Effectiveness, bear to bull | 6,091.6 | 12,316.9 |
| Discount rate, 12% to 6% | 7,991.2 | 11,605.0 |
| Programme cost, +30% to -30% | 8,780.3 | 11,640.9 |
| Appointment delay, 4 to 12 months | 9,083.3 | 11,337.9 |
| Re-conduct cost, Rs 500 to Rs 1,200 | 9,687.7 | 10,907.8 |

## T7. Coded incidents by stage and risk type (49, 2015 to 2026)
| Stage | INS | PHY | CYB | OPS | Total |
|---|---|---|---|---|---|
| Question creation | 4 | 0 | 0 | 0 | 4 |
| Question storage | 10 | 1 | 1 | 0 | 12 |
| Personnel access | 6 | 0 | 0 | 0 | 6 |
| Transmission | 3 | 0 | 0 | 0 | 3 |
| Examination centre | 2 | 2 | 0 | 0 | 4 |
| Candidate authentication | 0 | 3 | 0 | 0 | 3 |
| Examination | 0 | 1 | 7 | 2 | 10 |
| Evaluation & results | 6 | 0 | 0 | 1 | 7 |

## T8. Risk heat map (likelihood x impact)
| Stage | INS | PHY | CYB | OPS |
|---|---|---|---|---|
| Question creation | 20 | 5 | 10 | 6 |
| Question storage | 20 | 15 | 15 | 8 |
| Personnel access | 16 | 6 | 12 | 9 |
| Transmission | 15 | 12 | 8 | 6 |
| Examination centre | 12 | 9 | 6 | 6 |
| Candidate authentication | 4 | 6 | 4 | 4 |
| Examination | 9 | 8 | 16 | 12 |
| Evaluation & results | 9 | 2 | 8 | 9 |

## T9. Blast radius and attacker economics
| Metric | Today | PRAMAAN |
|---|---|---|
| Candidates exposed by one NEET-UG compromise | 2,270,000 | 23,646 (96 forms); 94,583 (24 forms, 2027 to 2028) |
| Government CBT plan, one form a shift (20 shifts) | 113,500 |  |
| Share of a paper one insider can expose | 67% | 2.5% expected, 5% cap |
| Leak revenue (Rs Cr) | 15.0 | 0.6 |
| Seller's expected value (Rs Cr) | 14.0 | −5.4 |

## T10. Funding, steady state (Rs Cr a year)
| Source | Rs Cr | Share |
|---|---|---|
| Union budget | 351.3 | 52% |
| Integrity levy (Rs 50 a sitting) | 250.2 | 37% |
| States (40% of C10) | 72.0 | 11% |
| Total | 673.5 | 100% |

## T11. Coded incident list
| # | Year | Exam | State | Stage | Type | Candidates | Cancelled |
|---|---|---|---|---|---|---|---|
| 1 | 2015 | Punjab DLG JE/SDE | Punjab | Question storage | INS | not stated | yes |
| 2 | 2015 | AIPMT | All India | Examination | PHY | not stated | yes |
| 3 | 2016 | TS EAMCET-II Medical | Telangana | Question storage | INS | not stated | yes |
| 4 | 2017 | BSSC Clerical | Bihar | Personnel access | INS | not stated | yes |
| 5 | 2017 | HCS Judicial | Haryana | Personnel access | INS | not stated | yes |
| 6 | 2017 | UP Police Inspector (online) | Uttar Pradesh | Examination | CYB | not stated | yes |
| 7 | 2017 | TNPSC Group II-A | Tamil Nadu | Transmission | INS | not stated | no |
| 8 | 2017 | TRB Polytechnic Lecturer | Tamil Nadu | Evaluation & results | INS | 200 | yes |
| 9 | 2018 | Rajasthan Police Constable | Rajasthan | Examination | CYB | not stated | yes |
| 10 | 2018 | UPPSC LT Grade | Uttar Pradesh | Question storage | INS | not stated | no |
| 11 | 2018 | UP BTC 4th Semester | Uttar Pradesh | Examination centre | INS | not stated | yes |
| 12 | 2018 | UPSSSC VDO | Uttar Pradesh | Evaluation & results | INS | not stated | yes |
| 13 | 2019 | RRB JE Stage-2 | Maharashtra | Examination | CYB | not stated | no |
| 14 | 2019 | TNPSC Group-4 | Tamil Nadu | Transmission | INS | not stated | no |
| 15 | 2019 | GSSSB Binsachivalay Clerk | Gujarat | Examination centre | PHY | 600,000 | yes |
| 16 | 2020 | MAHA-TET | Maharashtra | Evaluation & results | INS | not stated | no |
| 17 | 2020 | GUVNL Vidyut Sahayak | Gujarat | Examination | CYB | 2,156 | no |
| 18 | 2020 | RSMSSB Junior Engineer | Rajasthan | Question storage | INS | not stated | yes |
| 19 | 2020 | APPSC Group-I Mains | Andhra Pradesh | Evaluation & results | OPS | not stated | yes |
| 20 | 2020 | APSSB LDC and JSA | Arunachal Pradesh | Evaluation & results | INS | not stated | yes |
| 21 | 2021 | HSSC Gram Sachiv | Haryana | Candidate authentication | PHY | not stated | yes |
| 22 | 2021 | ITBP Constable Tradesmen | All India | Personnel access | INS | 46,174 | no |
| 23 | 2021 | MPPEB Group-1 and Group-5 | Madhya Pradesh | Question storage | CYB | not stated | yes |
| 24 | 2021 | Army CEE Soldier GD | All India | Personnel access | INS | not stated | yes |
| 25 | 2021 | Punjab Police SI | Punjab | Examination | CYB | not stated | yes |
| 26 | 2021 | JEE Main | All India | Examination | CYB | not stated | no |
| 27 | 2021 | NEET-UG impersonation | All India | Candidate authentication | PHY | not stated | no |
| 28 | 2021 | REET Level 2 | Rajasthan | Question storage | INS | 1,600,000 | yes |
| 29 | 2021 | Karnataka Police SI | Karnataka | Evaluation & results | INS | not stated | yes |
| 30 | 2021 | GSSSB Head Clerk | Gujarat | Question storage | INS | not stated | yes |
| 31 | 2021 | MHADA staff recruitment | Maharashtra | Question creation | INS | not stated | yes |
| 32 | 2022 | KEA Assistant Professor | Karnataka | Question creation | INS | not stated | no |
| 33 | 2022 | JKSSB Finance Accounts Assistant | J&K | Question storage | INS | not stated | yes |
| 34 | 2022 | MP TET Varg-3 | Madhya Pradesh | Examination | CYB | not stated | no |
| 35 | 2022 | HP Police Constable | Himachal Pradesh | Question storage | PHY | 75,000 | yes |
| 36 | 2022 | PPSC Naib Tehsildar | Punjab | Candidate authentication | PHY | not stated | yes |
| 37 | 2022 | KPTCL Junior Assistant | Karnataka | Examination centre | PHY | not stated | no |
| 38 | 2023 | TSPSC Group-I and 14 other papers | Telangana | Question storage | INS | not stated | yes |
| 39 | 2022 | HPSSC JE and JOA-IT | Himachal Pradesh | Personnel access | INS | not stated | yes |
| 40 | 2022 | RPSC Senior Teacher GK | Rajasthan | Question creation | INS | not stated | yes |
| 41 | 2023 | UKPSC Patwari/Lekhpal | Uttarakhand | Personnel access | INS | not stated | yes |
| 42 | 2023 | GPSSB Junior Clerk | Gujarat | Question storage | INS | 953,000 | yes |
| 43 | 2024 | UP Police Constable | Uttar Pradesh | Transmission | INS | 4,800,000 | yes |
| 44 | 2024 | BPSC TRE-3 | Bihar | Question storage | INS | 375,000 | yes |
| 45 | 2024 | NEET-UG (Hazaribagh strong room) | All India | Examination centre | INS | 2,406,079 | no |
| 46 | 2024 | NEET-UG (Godhra centre) | Gujarat | Evaluation & results | INS | not stated | no |
| 47 | 2024 | UGC-NET June (doctored-screenshot alarm) | All India | Examination | OPS | 908,000 | yes |
| 48 | 2025 | SSC Selection Post Phase 13 | All India | Examination | OPS | not stated | no |
| 49 | 2026 | NEET-UG (setters and translators) | All India | Question creation | INS | 2,270,000 | yes |
