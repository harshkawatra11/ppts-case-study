# R-B: incidents, case studies and the coded dataset
Collected 28 to 29 September 2026 for Team IdeaForge's Maudrik v7.0 submission. Source IDs refer to the
source register in the plan (section 3) and to Appendix A of the research document. [snip] = snippet-only source.

| F# | Fact | Source |
|---|---|---|
| F-B01 | NEET-UG 2026: held 3 May 2026 for about 22.7 lakh; cancelled 12 May 2026; CBI probe; re-exam 21 Jun 2026; results 16 Jul 2026 | S05, S06 |
| F-B02 | Mechanism: up to 120 of 180 questions matched a pre-circulated "guess paper" (one report said nearly 140). Arrested insiders included a Pune chemistry professor with NTA translator credentials, a biology professor, a Pune school headmistress who was an NTA physics subject expert, and a physics teacher at a Pune medical coaching academy; a Latur coaching-institute owner was also arrested. Material spread through WhatsApp and coaching centres; families paid ₹2 lakh to ₹10 lakh; one distributor paid ₹15 lakh. A Bihar police report alleged a ₹32 lakh deal [snip] | S05, S07 |
| F-B03 | The CBI found that the NEET-UG 2025 paper had also been compromised by the same racket | S05 |
| F-B04 | Aftermath: at least 12 student suicides reported by 20 Jun 2026; retest attendance fell from 96.72% to 87.72% (over 2.7 lakh skipped); Telegram blocked nationally until 22 Jun 2026 (upheld by the Delhi High Court on 19 Jun); retest setters and translators sequestered and papers flown by Indian Air Force aircraft; the Education Minister resigned on 25 Jul 2026 | S05 |
| F-B05 | NEET-UG 2024 (5 May 2024, about 24 lakh): at Oasis Public School, Hazaribagh, a strong-room back door was left open; the paper was photographed at 8:02 am, reached conspirators by 9:23 am and was solved by MBBS students by 10:40 am; trunks moved by open e-rickshaw; at 12 centres Canara Bank papers were issued instead of SBI papers. The CBI identified 155 beneficiaries; 36 arrested; candidates paid ₹30 lakh to ₹50 lakh; at Godhra a deputy superintendent charged ₹10 lakh per student to fill answers later; 67 perfect scores; the NTA Director General was removed on 22 Jun 2024 | S04, S12 |
| F-B06 | 1,563 NEET-UG 2024 candidates received grace marks, later withdrawn with a retest | S15 |
| F-B07 | UGC-NET June 2024 (OMR mode, 9.08 lakh) cancelled after an I4C threat-analytics input. The CBI later closed the case: a school student had doctored and backdated a screenshot and sold it for ₹2,000 to ₹3,000 | S10, S11 |
| F-B08 | UP Police Constable 2024: the paper leaked from a TCI Express warehouse in Ahmedabad, where logistics staff and a doctor opened a sealed consignment and scanned it; the exam agency Edutest was blacklisted | S38 |
| F-B09 | BPSC TRE-3 (15 Mar 2024): 3.75 lakh at 415 centres; the paper leaked before bar-coding at a Kolkata printing press; ₹10 lakh or more per candidate; 266 arrested | S39 |
| F-B10 | JEE Main 2021: Affinity Education solved candidates' papers by remote access at a Sonepat centre for ₹12 lakh to ₹15 lakh per admission; a Russian national was arrested in Oct 2022 for hacking the iLeon exam software; over 820 beneficiaries reported | S43 |
| F-B11 | Other CBT and remote-access cases: Rajasthan Police Constable 2018 (remote access software), RRB JE 2019 (remote access device), GUVNL 2020 (screen-splitter software at 8 centres, 2,156 candidates), Punjab Police SI 2021 (remote screen manipulation), MP TET 2022 (remote screen sharing from a Sagar centre) | S02 |
| F-B12 | SSC Selection Post Phase 13 (24 Jul to 1 Aug 2025): frozen screens, server crashes, biometric failures; cancelled at some centres; vendor Eduquity had earlier been accused over MP TET 2022 outsourcing | S44 |
| F-B13 | GPSSB Junior Clerk (29 Jan 2023): 9.53 lakh applicants for 1,181 posts; an employee of KL Hitech printing press, Hyderabad, handed over a copy; 19 arrested | S40 |
| F-B14 | RPSC Senior Teacher GK (Dec 2022): RPSC member Babulal Katara, assigned to set the paper, shared it before printing for ₹60 lakh; resold at ₹5 lakh or more per candidate; ED attached assets of about ₹3.11 Cr | S41 |
| F-B15 | TSPSC (2023): 15 papers leaked; an assistant section officer and a system administrator retrieved papers from commission computers; 14 arrested including 4 staff; Group-I prelims cancelled | S42 |
| F-B16 | REET 2021 (about 16 lakh candidates): paper leaked from a district strong room two days before; mobile internet shut in several districts on exam day | S02, S58 |
| F-B17 | Indian Express (8 Feb 2024): 41 documented leaks in 15 states over five years; 1.4 crore applicants affected; 1.04 lakh posts stalled | S01 |
| F-B18 | Other counts: 65 paper leaks since 2019 (data analysis cited by Wikipedia); 50 cases since 2015 (Tribune) [snip]; 34 leaks in Gujarat over 10 years [snip] | S03, S69, S66 |
| F-B19 | Coded dataset: 49 incidents, 2015 to 2026, coded by lifecycle stage and risk type (list in §6.1, `INC`; counts in model table T7). Insider 31, Cyber 8, Physical 7, Operations 3. Of 115.81 lakh candidates in cancelled incidents with known counts, 100.73 lakh (87.0%) lost the exam before the paper reached a centre | Model |

**Coding rules (write these into the file under the table):**
- Stages: QC question creation (setters, moderators, translators); QS question storage (printing presses, strong
  rooms, servers, vaults); PA personnel access (officials or staff misusing privileged access outside a setting
  or printing role); TR transmission (logistics, digital transfer); EC examination centre (centre staff, centre
  strong rooms); CA candidate authentication (impersonation, dummy candidates); EX examination (devices, solver
  gangs, remote access, platform failure, false alarms); ER evaluation and results (OMR tampering, marks
  manipulation).
- Types: INS insider (an authorised person misusing access), PHY physical (devices, theft, impersonation without
  an insider), CYB cyber (compromise of digital systems), OPS operational (process failure, error, false alarm).
- Where the record shows an insider using a computer (TSPSC 2023), the type is INS; the cyber element is noted
  in the text.
- Candidate counts are recorded only where the source states them; otherwise "not stated".
- The dataset is a documented sample, not a census. Say so every time it is used.
