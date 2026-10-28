## 0. Document control

### 0.1 Purpose and scope

This document is the research deliverable behind Team IdeaForge's submission to the Maudrik v7.0 Policy Case Competition. It supports the brief's single task, "Design a 10-Year National Examination Security Architecture for India" [B Q1], and it answers the six questions (Q1 to Q6) and six deliverables (D1 to D6) that the brief sets out on page 7 [B D1]. The recommendation is called PRAMAAN. The name is the Hindi word for proof (प्रमाण), and it is a name, not an acronym.

The document does three jobs. It records the evidence base in enough detail for a reader to check any number on the slides. It shows the reasoning that connects that evidence to the recommendation. It prepares the team for the jury's questions, which are answered in Section 21. The document runs in this order: document control, the brief coverage matrix, the answer on one page, the examination system, the incident record, root causes, law and policy, international practice, stakeholders, risk, options, the architecture, governance, technology, accountability, privacy and access, cost-benefit, the roadmap, resilience, reform risks, the slide blueprint and jury questions.

Three institutions are named throughout and are expanded here once. NEIAA is the National Examination Integrity and Assurance Authority, the statutory body PRAMAAN proposes. NESC is the National Examination Security Council, an apex body chaired by the Cabinet Secretary. NESS is the National Examination Security Standard, issued by NEIAA. All three are proposals of this document, not existing bodies.

### 0.2 Source hierarchy

Where sources disagree, the document applies one ordering. The brief governs scope: what must be answered and what counts as a deliverable [B R2]. Below the brief, official releases, court records and Parliament replies take precedence over press reporting. Press reporting takes precedence over material that the team could read only through a search snippet or a blocked page. Vendor blogs are used for corroboration only. Every conflict that the ordering had to settle is listed in Appendix F, and the resolutions are applied consistently.

Three markers travel with the source register in Appendix A. [snip] means the source was read only through a search snippet or a blocked page, so the document treats it as reported context and never as the sole support for a number on a slide. [via] means the primary article was not opened directly and its figures are quoted as the linked page reports them. [vendor] marks a vendor's own blog. Wherever the text relies on a [snip] source, the wording says "reported" or "as reported by".

### 0.3 Tag legend

Every number in the document carries a tag. The tags let a reader trace a figure to its origin without leaving the page.

| Tag | Meaning | Example | Where the origin sits |
|---|---|---|---|
| [B Q1] | An item in the brief, by the ID the team assigned (B, CS, ST, CH, SO, LS, Q, D, RS, R) | [B CH4] | `case/01-maudrik-brief.md` |
| [F-A01] to [F-A24] | Fact about the examination system, institutions, finances and staffing | [F-A12] | `R-A-exam-system.md` |
| [F-B01] to [F-B19] | Incident, case study or dataset fact | [F-B05] | `R-B-incidents.md` |
| [F-P01] to [F-P22] | Law, court, committee or policy fact | [F-P14] | `R-C-law-policy.md` |
| [F-D01] to [F-D17] | International benchmark, standard or economics fact | [F-D12] | `R-D-tech-benchmarks-economics.md` |
| [S01] to [S71] | Source in the register of 71 sources | [S28] | Appendix A |
| [A01] to [A16] | Team assumption | [A04] | Appendix E |
| [Model] | Output of the PRAMAAN model without a table number | [Model] | `model_outputs.json` |
| [T1] to [T11] | Numbered model table | [T7] | Appendix B and C |

Four numeric conventions apply. Rupee amounts use lakh and crore grouping (22,70,000; ₹3,317 Cr), and "Cr" stands for crore. Ranges are written with "to". Negative values use the minus sign (−). Statistics are stated at the precision the source supports, so "about 2.2%" is never rewritten as a decimal the source did not give.

### 0.4 Model version and run date

All model figures come from one script, `pramaan_model.py`, which writes `model_outputs.json` and `model_tables.md`. The script is the single source of truth for expected annual loss, cost, scenarios, the tornado, blast radius, attacker economics, the coded incident counts and the risk heat map. It was run once in its final form during September 2026, alongside the evidence collection of 28 to 29 September 2026, and its reference outputs were checked line by line before any figure was carried into this document. No figure in the text is hand-adjusted. Where a number is rounded for display, the model value appears beside it in the tables.

### 0.5 Two disclosures the reader should have first

**The deck runs to 11 slides by choice.** The brief's rule R4 states "Maximum 10 slides, including Intro/Appendix/Backup slides" [B R4]. The team submits 11 slides: a cover, eight core slides, one appendix and one thank-you slide. This was a deliberate decision, taken with the rule in view, and it carries the risk that a strict reading of R4 could count against the submission. The document does not treat the choice as neutral. It is disclosed here so that no reader discovers it later.

**The incident dataset is a documented sample, not a census.** The 49 coded incidents from 2015 to 2026 [F-B19] were assembled from public records: the Wikipedia list of paper leaks, and findings by the CBI, state special task forces, special investigation teams and economic offences units as reported in the press. Incidents that never reached the public record are absent, and large exams attract more coverage than small ones. The dataset is used to rank where breaches start and to weight likelihood in the risk framework. It is not used to estimate a national breach rate, and the loss model relies on the Indian Express count of 41 documented leaks in 15 states over five years [F-B17], which is the only source that also gives candidate totals [S01].

### 0.6 How to read the document

Sections open with a declarative finding. Tables carry the evidence and paragraphs carry the reasoning, and the two are meant to be read together. The slide blueprint in Section 20 maps every panel of the deck to a section and its sources. The appendices hold the bibliography, the model tables, the incident dataset, the glossary, the assumptions register and the data conflicts.

## 1. Brief coverage matrix

### 1.1 How the matrix works

The brief contains six questions, six deliverables, one closing instruction, eight lifecycle stages, seven challenge statements, seven strategic-option statements, the observation on shifting vulnerability, ten stakeholders and four rules that bear on the document's own conduct. The matrix below lists each, gives a one-line answer, and points to the section of this document and the slide panel where the answer sits. Slide numbers are S1 cover, S2 executive summary, S3 diagnosis, S4 risk framework, S5 governance, S6 technology, S7 accountability, S8 roadmap, S9 cost-benefit, S10 appendix and S11 thank you. Panel names are quoted as they appear on the slides. A reviewer who wants to test coverage can read down the first column against the brief's pages 2 to 8 [B B1].

### 1.2 The six questions and six deliverables

| ID | Requirement (short) | One-line answer | Doc § | Slide and panel |
|---|---|---|---|---|
| Q1 | Centralised, decentralised or hybrid | Hybrid by function: central trust plane, federated delivery plane | 10, 11, 12 | S5 "Q1: CENTRAL, FEDERAL OR HYBRID" and "THE PRAMAAN ARCHITECTURE: THREE PLANES"; S2 answers row 1 |
| Q2 | Reduce insider, physical, cyber, operational risk | Item banks, split keys, a sealed chain and zero-trust nodes, ranked by a 25-point risk score | 9, 11, 13 | S4 "TOP 10 RISKS WITH 1:1 MITIGATION"; S6 "CONTROLS BY STAGE"; S2 row 2 |
| Q3 | Role of AI, biometrics, encryption, surveillance | Encryption is the backbone, biometrics the gate, AI an analyst that flags and never decides, surveillance proportionate | 13, 15 | S6 role cards ENCRYPTION, BIOMETRICS, AI ANALYTICS, SURVEILLANCE; S2 row 3 |
| Q4 | Responsibility, audits, liability after a breach | Six-hour notification clock, strict vendor liability including subcontractors, a named officer per exam, public root-cause report in 30 days | 14 | S7 all panels; S2 row 4 |
| Q5 | Economically justified security spend | ₹673.5 Cr a year at steady state, 20% of expected annual loss and 55% of the Gordon-Loeb ceiling [Model] | 16 | S9 "SCENARIOS AND THE SPENDING TEST"; S2 row 5 |
| Q6 | Security without losing access and affordability | ₹135 a sitting, a ₹50 levy with waivers, centres within 50 km, Aadhaar optional, no internet shutdowns | 15, 17 | S8 "ACCESS AND AFFORDABILITY (Q6)"; S9 trade-off 1; S2 row 6 |
| D1 | Risk framework | 8 stages by 4 risk types, scored likelihood times impact, top 10 with a mitigation each | 9 | S4 |
| D2 | Governance model | NESC, NEIAA, exam bodies, 36 State Examination Security Cells, accredited vendors, RACI | 8, 10, 12 | S5 |
| D3 | Technology framework | Controls by stage (prevent, detect, respond) and four technology roles with limits | 13 | S6 |
| D4 | Accountability | Response clock, liability ladder, contract reform, audit calendar | 14 | S7 |
| D5 | 10-year roadmap | Three horizons: stabilise by 2028, scale by 2031, embed by 2036 | 17 | S8 |
| D6 | Cost-benefit | ₹7,092 Cr over ten years, NPV ₹10,211 Cr, BCR 3.14 in the base case [T5] | 16 | S9 |
| RS1 | Show resilience over the fragmented approach and the trade-offs | 21 of 24 on eight tests against 7 for today's model, with the trade-offs named | 18 | S9 "RESILIENCE VS TODAY'S MODEL" and "TRADE-OFFS WE ACCEPT" |

### 1.3 The eight lifecycle stages

The brief requires the framework to "address the entire chain of the examination lifecycle" and to identify vulnerabilities, access risks and points of failure "across each stage" [B LS1]. The eight stages appear in the same order on four slides: the chain of hands (S3), the heat-map rows (S4), the RACI rows (S5) and the controls rows (S6). The document's Sections 4, 5, 9 and 13 do the same.

| ID | Stage | One-line answer | Doc § | Slide and panel |
|---|---|---|---|---|
| LS1 | Question creation | A bank 20 times the paper length, no person sees more than 5% of it, setters sequestered, coaching conflict barred; 4 coded incidents and a top-2 risk [T7] [T8] | 4, 5, 9, 11 | S3 chain (Setter, Translator); S4 row 1; S5 RACI "Creation"; S6 "Creation" |
| LS2 | Question storage | Air-gapped vault with hardware security modules; 12 coded incidents, the largest stage [T7] | 4, 9, 11 | S3 chain (Press, Vault); S4 row 2; S5 "Storage"; S6 "Storage" |
| LS3 | Personnel access | Vetting, just-in-time access, two-person integrity, rotation; 6 coded incidents [T7] | 9, 12, 13 | S4 row 3; S5 "Personnel access"; S6 "Personnel" |
| LS4 | Transmission | Encrypted delivery with keys released at T−60 minutes; tamper seals and GPS for what stays physical; 3 coded incidents [T7] | 4, 11, 13 | S3 chain (Transport); S4 row 4; S5 "Transmission"; S6 "Transmission" |
| LS5 | Examination centre | Hardened labs, wired CCTV that flags, dual custody, cancellation of one centre only; 4 coded incidents [T7] | 4, 13, 14 | S3 chain (Strong room, Centre); S4 row 5; S5 "Exam centre"; S6 "Exam centre" |
| LS6 | Candidate authentication | 1:1 face match with liveness check and an alternate-ID desk; 3 coded incidents [T7] | 13, 15 | S4 row 6; S5 "Authentication"; S6 "Authentication" |
| LS7 | Examination | Locked node images, no remote ports, a network SOC and parallel forms so a compromise reaches one form; 10 coded incidents [T7] | 9, 13 | S4 row 7; S5 "Examination"; S6 "Examination" |
| LS8 | Evaluation and results | Encrypted responses, answer-similarity analytics and a human panel that decides; 7 coded incidents [T7] | 4, 13, 14 | S3 chain (Evaluator); S4 row 8; S5 "Evaluation"; S6 "Evaluation" |

### 1.4 The challenges, strategic options and the brief's own warning

| ID | Requirement (short) | One-line answer | Doc § | Slide and panel |
|---|---|---|---|---|
| CH0 | Strengthen security without prohibitive cost, inaccessibility or over-centralisation | A hybrid design at ₹135 a sitting, with keys held by five independent institutions | 2, 11, 15, 16 | S5 planes; S8 "ACCESS AND AFFORDABILITY (Q6)"; S9 all |
| CH1 | Insider risk | Insiders account for 31 of 49 coded incidents [T7]; the bank, the 5% cap and the coaching bar address it | 5, 9 | S4 Insider column; S3 |
| CH2 | Cyber-physical risk | Locked node images, wired cameras only, air-gapped vault and a network SOC | 9, 13 | S4 Physical and Cyber columns; S6 "CONTROLS BY STAGE" |
| CH3 | Centralisation risk | Blast radius falls 96 times and the vault holds only encrypted items under 3-of-5 keys | 10, 11 | S5 planes (federated delivery); S6 ENCRYPTION card |
| CH4 | Third-party dependence | Accreditation, a 40% national cap, reversal of the disclaimer in tender clause 11.3 [F-A20] | 3, 12, 14 | S5 vendor cap; S7 "TODAY VS PRAMAAN" |
| CH5 | Cost versus security | Spend stays at 55% of the Gordon-Loeb ceiling and returns ₹3.14 per rupee [Model] | 16 | S9 all; S2 payoff card |
| CH6 | Privacy versus surveillance | 1:1 matching only, deletion 90 days after results, a proportionality test, no shutdowns | 15 | S6 card limits; S9 trade-off 3 |
| SO0 | Reduce probability, contain impact, raise attacker cost | The three design principles map one to one: shrink the prize, split the keys, liability follows the breach | 2, 10, 14 | S6 moneyshot band; S7 "A LEAK STOPS PAYING (₹ CR)" |
| SO1 | AI-assisted security | An analyst layer that flags; a human panel decides | 13 | S6 AI ANALYTICS card |
| SO2 | Multi-layered authentication | Face match with liveness, alternate identity documents, custody ledger | 13 | S6 BIOMETRICS card and Authentication row |
| SO3 | Zero-trust architecture | NIST SP 800-207 applied to nodes, keys and sessions [F-D14] | 13 | S6 controls (locked nodes, keys at T−60); S2 row 2 |
| SO4 | Distributed question paper architecture | Item bank and 96 parallel forms; the paper does not exist until T−60 | 10, 11 | S6 moneyshot band |
| SO5 | Risk-based security | Three tiers by exam size, with controls scaled to each | 9, 11 | S5 "RISK TIERS AND BINDING RULES" |
| SO6 | Integrated governance | One statutory assurer, federated conductors, a single RACI | 10, 12 | S5 planes and RACI |
| CS10 | Technology shifts the point of vulnerability | The record confirms it: CBT moved leaks to remote access and platform failure [F-B10] [F-B12] | 3, 4, 5 | S2 "WHY THE OBVIOUS FIX FALLS SHORT"; S3 |
| ST | Ten stakeholders (ST1 to ST10) | Each has a role, a power and interest rating and a place in the RACI | 8, 12 | S5 RACI columns; doc §8 |

### 1.5 The rules that govern this document

| ID | Rule (short) | How the team complies | Doc § | Slide and panel |
|---|---|---|---|---|
| R2 | Cite sources for key data | 71 registered sources; every number tagged; a source line on every content slide | App A; all | Source line on S1 to S10; S10 "SOURCES" |
| R3 | Original work, no fabricated data | No invented interviews, quotes or figures; the incident dataset is coded from public records and listed row by row | 0, App C | S10 "INCIDENTS: STAGE x TYPE" |
| R5 | State assumptions clearly | 16 assumptions (A01 to A16) with a reason each; three scenarios and a cash-only stress | 16, App E | S10 "KEY ASSUMPTIONS" |
| R6 | Submit a PDF named TeamName.pdf | The deck is exported as `TeamIdeaForge.pdf` | 0 | Whole deck |

Rule R4 is handled in Section 0.5: the deck carries 11 slides by the team's choice.

### 1.6 Reading the matrix as a whole

Two patterns are visible. First, the questions and deliverables map onto slides one to one (D1 to D6 to S4 to S9), which lets a reader follow the brief's structure without translation. Second, the lifecycle stages recur across four slides, so a reader who follows a single stage, say storage, meets it as an incident count on S3, a risk score on S4, an accountable party on S5 and a control on S6. That repetition is deliberate. The brief asks for security "across the complete examination ecosystem rather than focusing on any single stage" [B LS8], and symmetric treatment of the stages is the way to show that no stage was skipped.

## 2. The answer on one page: centralise trust, federate delivery, shrink the prize

### 2.1 The recommendation in three sentences

PRAMAAN is a hybrid by function: one statutory authority, NEIAA, holds standards, the national item-bank vault, split-key release, incident response and audit, while the National Testing Agency, UPSC, SSC, the railway boards and state commissions keep conducting their own examinations with a named Senior Responsible Officer for each exam. It changes what a thief can steal and who can steal it, through a calibrated item bank 20 times the paper length, 96 parallel forms for NEET-UG assembled by algorithm at T−60 minutes, 3-of-5 threshold keys held by independent institutions, and per-copy forensic watermarks [Model]. It makes liability follow the breach through a six-hour notification clock, strict vendor liability and public root-cause reports, and it does this for ₹673.5 Cr a year at steady state, which is ₹135 a candidate sitting, and returns ₹3.14 of present-value benefit for every rupee of present-value cost (₹14,978 Cr against ₹4,768 Cr at 8% real) [T5].

### 2.2 Why the obvious answer falls short

The Government's July 2026 response centralises harder and digitises: NEET-UG on computer-based testing from 2027 over five to six days in nearly 1,000 centres [F-P18], penalties raised to 5 to 10 years for individuals and at least ₹10 Cr for organised crime [F-P08] [F-P10], 47 NTA officials reported to have been terminated [F-P16] and a task force under Nandan Nilekani [F-P17]. The evidence in this document says each element addresses a stage after or beside the point of loss. The 2026 leak came from question creation, where NTA subject experts and translators are reported to have passed on material matching up to 120 of 180 questions [F-B02]. A computer-based test does not touch that stage. The brief warns of exactly this: "greater technological sophistication does not automatically eliminate malpractice. It can simply shift the point of vulnerability" [B CS10]. India's record supports the warning, with remote-access fraud on CBT nodes in JEE Main 2021 (over 820 beneficiaries reported) [F-B10] and platform failure in SSC Selection Post Phase 13 in 2025 [F-B12]. Three other observations complete the argument: penalties without detection have not deterred, because Rajasthan (fine up to ₹10 Cr), Uttarakhand and Jharkhand (life imprisonment and up to ₹10 Cr) already had heavy penalties and leaks continued [F-P13]; the design for a fix already exists in the Radhakrishnan Committee's 101 recommendations of October 2024 and was still unimplemented at the 2026 leak [F-P14] [F-P15]; and UPSC is reported to have had no confirmed leak of the Civil Services Examination since 1991, and press accounts attribute this partly to setters not knowing which questions will be used [F-D12, snip]. Delivery mode does not decide security. The design of what any one person can see does.

### 2.3 The six answers

| Brief question | PRAMAAN's answer | Evidence anchor |
|---|---|---|
| "Should examination security be centralised, decentralised or hybrid?" [B Q1] | Hybrid by function: central trust and assurance planes, federated delivery plane | Blast radius 22,70,000 today, 1,13,500 under the Government's CBT plan, 23,646 under PRAMAAN [T9] |
| "How can India reduce insider, physical, cyber and operational risks?" [B Q2] | Item banks, split keys, a sealed chain of custody and zero-trust nodes | Insiders drive 31 of 49 coded incidents; the two top risks score 20 of 25 and sit in creation and storage [T7] [T8] |
| "What role should AI, biometrics, encryption and surveillance play?" [B Q3] | Encryption is the backbone; biometrics are a 1:1 gate; AI flags and humans decide; surveillance is proportionate and never includes shutdowns | Zero trust per NIST SP 800-207 [F-D14]; the IIT Madras answer analysis of 2024 found no mass malpractice [F-P04] |
| "How should responsibility, audits and liability be assigned after a breach?" [B Q4] | Six-hour clock, strict vendor liability including subcontractors, a named officer per exam, re-tests on the responsible body's budget, root-cause report in 30 days | Seller's expected value moves from +₹14.0 Cr to −₹5.44 Cr [T9] [A16] |
| "What level of security spending is economically justified?" [B Q5] | ₹673.5 Cr a year, 20.3% of expected annual loss and 55.2% of the Gordon-Loeb ceiling | EAL ₹3,316.5 Cr; ceiling ₹1,220.1 Cr [T2] [F-D16] |
| "How can security improve without compromising accessibility and affordability?" [B Q6] | ₹135 a sitting (7.9% of the ₹1,700 NEET-UG fee), ₹50 levy with waivers, centres within 50 km, Aadhaar optional | Per-sitting cost ₹134.6 steady state [Model] [F-A15] |

### 2.4 The three design principles

1. **Shrink the prize.** The item bank is 20 times the length of a paper, and no person sees more than 5% of it (a 1/20 cap). One setter's items fill 2.5% of a form in expectation. For NEET-UG the plan is 96 forms (6 days, 2 shifts, 8 forms), or 24 forms in 2027 to 2028, assembled at T−60 minutes [Model]. A paper that does not exist until an hour before the exam cannot be sold a month before it.
2. **Split the keys.** A 3-of-5 threshold release across NEIAA, the exam body, CERT-In, a state officer and an independent auditor means fewer than three shares reveal nothing [F-D15]. Two-person integrity applies to every privileged action, access is zero-trust [F-D14], and per-copy forensic watermarks trace any leaked image to its source copy. A doctored image, like the UGC-NET 2024 screenshot that led to the cancellation for 9.08 lakh candidates and was later found by the CBI to have been altered by a school student, fails that trace [F-B07].
3. **Liability follows the breach.** Notification within six hours, matching the CERT-In direction [F-P20]; a named officer per exam; strict vendor liability that reaches subcontractors; re-tests funded from the responsible body's budget; a public root-cause report within 30 days; and a Candidate Protection Fund.

### 2.5 The moneyshot

**One compromise of NEET-UG reaches 22,70,000 candidates today and 23,646 under PRAMAAN, 96 times fewer** [T9]. Two supporting numbers sit beside it. The share of a paper one insider can expose falls from 67% (120 of 180 questions) to 2.5% expected, with a 5% cap [F-B02] [Model]. The expected value of a leak to its seller, on the team's illustrative parameters, falls from +₹14.0 Cr to −₹5.44 Cr [T9] [A16]. The first number contains the damage, the second removes the incentive to try. Together they answer the brief's stated objective: probability of compromise reduced, impact contained, attack cost raised above the expected benefit [B SO0].

### 2.6 Key numbers

| Quantity | Value | Tag |
|---|---|---|
| Annual high-stakes sittings | 5.00 crore (central 3.00 crore, state 2.00 crore) | [T1] |
| Candidates hit by cancellations a year | 38.59 lakh | [T2] |
| Cost per affected candidate | ₹7,300 (₹1,500 household, ₹5,000 time, ₹800 re-conduct) | [A06] [A07] [A08] |
| Expected annual loss (EAL) | ₹3,316.5 Cr (direct ₹2,817.3 Cr, stalled posts ₹499.2 Cr) | [T2] |
| EAL counting cash only | ₹1,386.8 Cr | [T2] |
| Capex and steady opex | ₹779.5 Cr and ₹673.5 Cr a year | [T3] |
| Ten-year programme cost (2027 to 2036) | ₹7,092.4 Cr | [T4] |
| Loss cut at full coverage | 80% base (58% bear, 91% bull) | [T5] [A14] |
| NPV, BCR, payback, base | ₹10,210.6 Cr, 3.14, 2029 | [T5] |
| NPV, BCR, payback, bear and bull | ₹6,091.6 Cr, 2.28, 2030 and ₹12,316.9 Cr, 3.58, 2028 | [T5] |
| Cash-only stress | NPV ₹1,495.8 Cr, BCR 1.31, payback 2032 | [T5] |
| Cost per sitting | ₹123.6 over ten years; ₹134.6 steady state | [Model] |
| Funding at steady state | Union ₹351.3 Cr (52%), integrity levy ₹250.2 Cr (37%), states ₹72.0 Cr (11%) | [T10] |
| Resilience score (8 tests, 0 to 3 each) | Fragmented 7 of 24, central CBT only 8 of 24, PRAMAAN 21 of 24 | [Model] |

### 2.7 What PRAMAAN is not

It is not a new examination conductor. NEIAA audits, accredits and sets standards, but it does not run examinations, because an authority that conducts and audits the same exam is marking its own work. It is not more central delivery. Delivery stays with the exam bodies and 36 State Examination Security Cells, and no vendor may exceed 40% of national CBT volume. It is not blanket surveillance. Face matching is 1:1, templates are deleted 90 days after results, AI flags for a human panel and cameras are wired and proportionate. Internet shutdowns and blanket social-media blocking are deliberately excluded [F-P22].

### 2.8 Conclusively

The case for PRAMAAN rests on one observation from the incident record and one from the economics. In the 49-incident sample, 100.73 of 115.81 lakh candidates in attributed cancellations, 87.0%, lost their examination before the paper reached a centre [F-B19] [T7], so a design that begins at the hall begins too late. And the expected loss from cancelled examinations, ₹3,316.5 Cr a year on stated assumptions, is large enough that a programme costing ₹673.5 Cr a year sits at 55% of the ceiling that Gordon and Loeb's model sets for rational spending [T2] [F-D16]. Conclusively, the architecture that answers the brief is the one that lowers what a compromise can reach, makes a leak cost its seller more than it pays, and holds a named body liable for each stage, at a price of ₹135 a sitting.

## 3. India's examination system: five crore sittings a year run by bodies built for logistics, not security

### 3.1 The context in six lenses (PESTLE)

The brief opens by describing examinations as "one of the largest mechanisms through which educational and employment opportunities are allocated" [B B1] and frames security as a question of "Institutional Integrity | Cybersecurity | Public Trust | State Capacity" [B B5]. A PESTLE reading shows why those four words belong together.

| Lens | What bears on examination security | Evidence |
|---|---|---|
| Political | Exams are run by Union bodies and by state commissions, so no single government owns the chain. The 2026 leak ended with the Education Minister reported to have resigned on 25 July 2026, and the Radhakrishnan Committee's design was largely unimplemented | [F-B04] [F-P15] |
| Economic | Scarce jobs make a leaked paper worth paying for: RRB NTPC drew 1,21,67,679 applications for 11,558 vacancies. A coaching industry estimated at ₹58,088 Cr (Infinium, as reported) and projected at ₹1,33,995 Cr by 2028 sits beside the public system, with NEET coaching fees of ₹50,000 to ₹2,50,000 a year | [F-A11] [F-A22] [snip] |
| Social | Families are reported to have paid ₹2 lakh to ₹10 lakh for the 2026 material [snip], and the cancellation had human costs that Section 4.4 records once, factually | [F-B02] |
| Technological | A shift to CBT is under way (NEET-UG from 2027), but remote-access fraud and platform failure are already on India's record | [F-P18] [F-B10] [F-B11] [F-B12] |
| Legal | The 2024 Act, the 2026 Amendment, the CERT-In Directions and the DPDP Rules 2025 bind different parts of the same chain; Section 6 sets them out | [F-P01] [F-P07] [F-P19] [F-P20] |
| Environmental (geography) | NEET-UG 2025 ran at 5,468 centres in 552 cities plus 14 abroad; the CBT plan asks nearly 1,000 centres to do the work over five to six days, which at about 20 shifts means roughly 113.5 candidates per centre per shift (team arithmetic on reported plans) | [F-A03] [F-P18] [snip] |

### 3.2 Scale: five crore sittings a year

The team's estimate of annual high-stakes sittings is 5.00 crore, built from named institutions rather than sliced from a national total. Each line traces to a fact.

| Line | Lakh | Basis |
|---|---|---|
| NTA CBT exams | 100.00 | About 1 crore candidate-tests a year in the March 2026 tender's planning [F-A08] |
| NEET-UG | 22.76 | 2025 registrations of 22,76,069 [F-A03] |
| SSC CGL and GD | 53.36 | 28,15,445 CGL applications plus 25.21 lakh GD appeared [F-A09] [F-A10] |
| RRB NTPC and Group D | 114.95 | 1,21,67,679 plus 1,08,22,423 applications, counting half a cycle a year [F-A11] [A01] |
| UPSC Civil Services Examination | 9.38 | 9,37,876 applied [F-A16] |
| Central subtotal | 300.45 | [T1] |
| State exams | 200.00 | State PSCs, boards, police and eligibility tests, deliberately low [A02] |
| Total | 500.45 | [T1] |

The measure mixes registrations, applications and appearances, because sources report different ones, so the total is an upper bound on candidates seated. Appearance rates run below registration: 6,49,490 of 8,49,166 registered appeared for UGC-NET in December 2024 (about 76%), while about 22.09 lakh of 22.76 lakh appeared for NEET-UG 2025 (about 97%) [F-A07] [F-A03]. The state line of 2 crore is a floor. UP Police 2024 alone had about 48 lakh applicants [F-A21], and leaked state examinations touched 1.4 crore applicants in five years [F-B17].

### 3.3 Who conducts what

| Body | What it conducts | Scale evidence |
|---|---|---|
| National Testing Agency (NTA), an autonomous society under the Ministry of Education, registered 2017 | JEE Main, NEET-UG, CUET-UG, CUET-PG, UGC-NET, CSIR-UGC NET [F-A01] | 6.6 crore registrations across 270+ exams since 2017; in 2026 to July, 65 lakh registrations across 12 exams [F-A02] |
| UPSC | Civil Services Examination | 9,37,876 applied, 5,76,793 appeared, 958 recommended for 1,087 vacancies in 2025 [F-A16] |
| SSC | CGL and GD | 28,15,445 CGL applications; 25.21 lakh appeared for 53,690 GD vacancies [F-A09] [F-A10] |
| Railway Recruitment Boards | NTPC and Group D | 1,21,67,679 and 1,08,22,423 applications in 2025 [F-A11] |
| IBPS | Named in the 2024 Act's coverage [F-P01]; no volume in the fact base, so not sized here | Not sized |
| State PSCs and SSBs | Recruitment for state posts (RPSC, TSPSC, BPSC and GPSSB appear in the incident record) | Sized at 2 crore in aggregate [A02] |
| Police recruitment boards | Constable and sub-inspector exams | UP Police 2024: about 48 lakh applicants for 60,244 posts [F-A21] |
| Central ministries and departments | Departmental recruitment | Within the 2024 Act's coverage [F-P01] |

The map matters for design. The 2024 Act reaches UPSC, SSC, the RRBs, IBPS, the NTA and central departments [F-P01], but state bodies account for about two fifths of the estimated sittings [T1], and the state laws differ from one another [F-P13]. Any architecture that binds only Union bodies leaves the largest single block of sittings out.

### 3.4 The NTA: finances and staffing

The NTA carries the country's most visible examinations, so its capacity is a fair test of the system. Its income grew from ₹504.16 Cr (2019-20) to ₹1,116.84 Cr (2023-24), while its permanent staffing stayed at 39 posts [F-A12] [F-A13].

| Period | Fee income (₹ Cr) | Expenditure (₹ Cr) | Note |
|---|---|---|---|
| 2018-19 to 2023-24, cumulative | 3,513.98 | 3,064.77 | Surplus ₹449.21 Cr [F-A13] [S29] |
| 2021-22 | 490.35 | Not stated | Before CUET [F-A13] |
| 2022-23 | 873.20 | Not stated | Income up 78% after CUET [F-A13] |
| 2023-24 | 1,116.84 | 1,040.96 | Rajya Sabha reply of July 2026; an August 2024 estimate had given ₹1,065.38 Cr and ₹1,020.35 Cr [F-A13] [S28] |

No security spending is disclosed in these replies [F-A13]. Staffing tells the same story, and the two Rajya Sabha replies differ, so both are shown.

| Category | August 2024 reply | 22 July 2026 reply |
|---|---|---|
| Permanent or deputed posts | 22 deputed | 39 permanent posts, filled on deputation |
| Contract staff | 39 | 73 |
| Outsourced staff | 132 | 124 |
| Contract plus outsourced | 171 | 197 |

Sixteen new posts (8 Director, 8 Joint Director) were proposed in 2026 [F-A12]. The slides quote the July 2026 figures: 39 permanent posts beside 197 contract and outsourced staff [F-A12]. The 2019 NEET fee record shows the fee base: ₹192 Cr from 15,19,375 candidates, and the 2026 fee is ₹1,700 for the general category, ₹1,600 for EWS and OBC-NCL and ₹1,000 for SC, ST, PwD and third-gender candidates [F-A14] [F-A15]. NEET-UG registrations fell from 24,06,079 in 2024 to 22,76,069 in 2025, so the design does not assume fast volume growth [F-A04] [F-A03] [A03].

### 3.5 The vendor ecosystem and what its contracts allocate

Computer-based delivery rests on a small set of vendors. TCS iON reports 3,180 exams for over 200 million candidates across 6,444 venues and 643 cities, and more than 4 lakh computers, in its own newsroom material (a [snip] source, so context only) [F-A18]. The NTA's March 2026 CBT tender shows how responsibility is divided.

| Tender term | What it says | Why it matters for security |
|---|---|---|
| Cameras and jammers | At least one wired 2 MP IP camera per 12 candidates plus common areas; jammers at every centre, so only wired cameras work | Detection is by camera, inside the hall [F-A19] |
| Data and ports | Data centre and disaster recovery in two seismic zones; remote desktop, USB and sensitive ports disabled | Sound controls, but they cover the node, not the paper [F-A19] |
| Question paper | Soft copy handed over one hour before the exam; question preparation is outside the vendor's scope | Creation and storage before the hour sit with the exam body [F-A19] |
| Financial terms | EMD ₹2 Cr; performance guarantee 10% of exam value; penalty 10% of the quoted per-candidate rate for failed CCTV and ₹200 per blind spot | A blind spot costs a vendor ₹200 [F-A20] |
| Volume slabs | Rate falls to 0.95 times at 50 to 75 lakh tests and down to 0.50 times at 2.75 to 3 crore | Price rewards concentration in one vendor [F-A20] |
| Liability | Clause 11.3: "NTA shall not be responsible for any vulnerability in the software of the service provider and integrity of the exam functionaries deployed by them" | The body that owns the exam disclaims the two commonest failures [F-A20] |
| Subcontracting | Clause 12 lets the vendor use third parties for exam manpower, CCTV, biometric authentication (including Aadhaar) and guards | Identity checks may sit with a sub-vendor [F-A20] |
| Named provider | The clause 13 usage terms name Tata Consultancy Services Limited as the service provider | One named provider at national scale [F-A20] |

The record on vendors is mixed and the document reports it that way. SSC Selection Post Phase 13 (24 July to 1 August 2025) suffered frozen screens, server crashes and biometric failures, with cancellations at some centres; its vendor, Eduquity, had earlier been accused over MP TET 2022 outsourcing [F-B12]. The tender itself shows a design in which the buyer disclaims the vendor's software and staff integrity while the vendor may subcontract the identity check. That allocation of risk is the CH4 problem stated in the brief: third-party dependence [B CH4].

### 3.6 The stakes: applicants per post

| Examination | Applicants | Posts or vacancies | Applicants per post |
|---|---|---|---|
| RRB NTPC 2025 | 1,21,67,679 | 11,558 | About 1,053 [F-A11] |
| UPSC CSE 2025 | 9,37,876 | 1,087 | About 863 [F-A16] |
| UP Police Constable 2024 | About 48 lakh | 60,244 | About 80 [F-A21] |
| SSC GD 2025 | 25.21 lakh appeared | 53,690 | About 47 [F-A10] |
| SSC CGL 2025 | 28,15,445 | Two vacancy counts are reported (14,582 and 15,118), so only applications are quoted | Not computed (see Appendix F) |

The ratios are the team's arithmetic on the cited facts. They explain both the incentive to buy a paper and the cost of a cancellation: every re-sit repeats a contest in which most candidates cannot win.

### 3.7 The brief's nine existing measures and where the weak point moved

The brief lists nine measures already in use and warns that technology "can simply shift the point of vulnerability" [B CS10]. The record lets each measure be tested.

| Measure | Evidence of use in India | Where the weak point moved |
|---|---|---|
| CS1 Computer-based examinations | UGC-NET Dec 2024 ran in 558 centres across 266 cities [F-A07] | Remote access at CBT nodes: JEE Main 2021, RRB JE 2019, Rajasthan Police 2018, GUVNL 2020, MP TET 2022 [F-B10] [F-B11]; platform failure in 2025 [F-B12] |
| CS2 Biometric authentication | UPSC made face authentication with liveness mandatory for CSE 2026 prelims [F-A17] | Failures at scale (SSC Phase 13) and sub-vendor control of the check under the tender [F-B12] [F-A20] |
| CS3 CCTV and surveillance | One wired camera per 12 candidates in the tender [F-A19] | The Supreme Court listed inadequate CCTV among NTA lapses in 2024, and a blind spot draws a ₹200 penalty [F-P06] [F-A20] |
| CS4 Encrypted material | Encrypted e-transmission recommended by the Radhakrishnan Committee [F-P14] | Not in use at the time of the 2026 leak, and encryption does nothing at question creation [F-P15] [F-B02] |
| CS5 Digital registration and verification | 3 coded impersonation incidents [T7] | Identity checks at the gate leave what was written before the exam untouched |
| CS6 AI-assisted monitoring | UPSC live AI CCTV in its 2024 tender [F-A17]; the NTA is exploring AI on logs and data [F-P17] | Watches candidates in the hall, while 25 of 49 coded incidents began before a centre [T7] |
| CS7 Centralised examination platform | One named service provider in the tender [F-A20] | One platform and volume discounts favour one vendor |
| CS8 Secure printing and logistics | Sealed consignments and printing-press custody | Leaks at a Kolkata press (BPSC TRE-3), an Ahmedabad warehouse (UP Police 2024) and a Hyderabad press (GPSSB) [F-B09] [F-B08] [F-B13] |
| CS9 Cybersecurity protocols | CERT-In Directions: six-hour reporting and 180-day logs [F-P20] | Insiders using authorised credentials: TSPSC 2023 [F-B15] |

The pattern is consistent. Each measure guards a stage, and the losses occurred at the adjacent stage or through a person the measure was not designed to constrain. The rest of this document takes that pattern as its starting point.

## 4. A decade of breaches: 49 coded incidents show the paper is usually lost before it reaches the hall

### 4.1 The aggregate record, and why the counts differ

The most cited count is the Indian Express analysis of 8 February 2024: 41 documented leaks in 15 states over five years, affecting 1.4 crore applicants and stalling 1.04 lakh posts [F-B17] (a [via] source, quoted as the linked page reports it [S01]). Other counts exist: 65 paper leaks since 2019 in a data analysis cited by Wikipedia, 50 cases since 2015 reported by the Tribune [snip], and 34 leaks in Gujarat over ten years [snip] [F-B18]. The figures differ because the sources define "leak" differently, count from different start years, and cover different jurisdictions. The team's loss model uses the Indian Express figures because they are the only ones that carry candidate and post totals [Model]; the others are context. None of the counts is a census, and every one probably understates events that never reached the press.

### 4.2 The coded dataset: method and rules

To learn where in the chain breaches begin, the team coded 49 incidents from 2015 to 2026 by lifecycle stage and risk type [F-B19]. The full list is in Appendix C. The dataset is a documented sample, not a census: it holds incidents that reached the public record, and larger exams are covered more fully than smaller ones. It covers 16 states and union territories plus incidents coded All India, and 34 of the 49 incidents ended in cancellation [T11].

The stage codes follow the brief's eight lifecycle stages [B LS1]:

| Code | Stage | What is coded there |
|---|---|---|
| QC | Question creation | Setters, moderators, translators |
| QS | Question storage | Printing presses, strong rooms, servers, vaults |
| PA | Personnel access | Officials or staff misusing privileged access outside a setting or printing role |
| TR | Transmission | Logistics and digital transfer |
| EC | Examination centre | Centre staff and centre strong rooms |
| CA | Candidate authentication | Impersonation and dummy candidates |
| EX | Examination | Devices, solver gangs, remote access, platform failure, false alarms |
| ER | Evaluation and results | OMR tampering and marks manipulation |

Risk types are INS (an authorised person misusing access), PHY (devices, theft or impersonation without an insider), CYB (compromise of digital systems) and OPS (process failure, error or false alarm). Where an insider used a computer, as in TSPSC 2023, the incident is coded INS and the cyber element is noted in the text. Candidate counts are recorded only where a source states them. That rule leaves 12 of the 49 rows with a count, and 9 of the 34 cancelled incidents [T11].

### 4.3 What the coded record shows

**By stage and type.** Storage is the largest stage, examination the second, and insiders dominate before the centre.

| Stage | INS | PHY | CYB | OPS | Total |
|---|---|---|---|---|---|
| Question creation | 4 | 0 | 0 | 0 | 4 |
| Question storage | 10 | 1 | 1 | 0 | 12 |
| Personnel access | 6 | 0 | 0 | 0 | 6 |
| Transmission | 3 | 0 | 0 | 0 | 3 |
| Examination centre | 2 | 2 | 0 | 0 | 4 |
| Candidate authentication | 0 | 3 | 0 | 0 | 3 |
| Examination | 0 | 1 | 7 | 2 | 10 |
| Evaluation and results | 6 | 0 | 0 | 1 | 7 |
| **Total** | **31** | **7** | **8** | **3** | **49** |

Source: [T7]. By type, insiders account for 31 of 49 incidents (63%), cyber 8, physical 7 and operations 3. The four stages before a centre (creation, storage, personnel access, transmission) hold 25 incidents, of which 23 are insider cases. Cyber incidents concentrate in the examination stage (7 of 8), where computer-based delivery is exposed, which is the shift of vulnerability the brief describes [B CS10].

**The 15 largest incidents.** The table lists the 12 incidents with a stated candidate count plus three that Section 4.5 documents.

| # | Year | Exam | Stage | Type | Candidates | Cancelled |
|---|---|---|---|---|---|---|
| 43 | 2024 | UP Police Constable | Transmission | INS | 48,00,000 | yes |
| 45 | 2024 | NEET-UG (Hazaribagh strong room) | Examination centre | INS | 24,06,079 | no |
| 49 | 2026 | NEET-UG (setters and translators) | Question creation | INS | 22,70,000 | yes |
| 28 | 2021 | REET Level 2 | Question storage | INS | 16,00,000 | yes |
| 42 | 2023 | GPSSB Junior Clerk | Question storage | INS | 9,53,000 | yes |
| 47 | 2024 | UGC-NET June (doctored-screenshot alarm) | Examination | OPS | 9,08,000 | yes |
| 15 | 2019 | GSSSB Binsachivalay Clerk | Examination centre | PHY | 6,00,000 | yes |
| 44 | 2024 | BPSC TRE-3 | Question storage | INS | 3,75,000 | yes |
| 35 | 2022 | HP Police Constable | Question storage | PHY | 75,000 | yes |
| 22 | 2021 | ITBP Constable Tradesmen | Personnel access | INS | 46,174 | no |
| 17 | 2020 | GUVNL Vidyut Sahayak | Examination | CYB | 2,156 | no |
| 8 | 2017 | TRB Polytechnic Lecturer | Evaluation and results | INS | 200 | yes |
| 38 | 2023 | TSPSC Group-I and 14 other papers | Question storage | INS | not stated | yes |
| 40 | 2022 | RPSC Senior Teacher GK | Question creation | INS | not stated | yes |
| 26 | 2021 | JEE Main | Examination | CYB | not stated | no |

Source: [T11]. Candidate counts are applicants or registrants as the sources report them.

**The 87% finding and its arithmetic.** Of the 34 cancelled incidents, 9 have a stated count, and together they cost 115.81 lakh candidates their examination. Six of them began at creation, storage, personnel access or transmission: UP Police 48.00 lakh, NEET-UG 2026 22.70 lakh, REET 16.00 lakh, GPSSB 9.53 lakh, BPSC 3.75 lakh and HP Police 0.75 lakh, which sum to 100.73 lakh. The other three began later: UGC-NET 9.08 lakh, GSSSB 6.00 lakh and TRB 200 candidates, together 15.08 lakh. So 100.73 of 115.81 lakh, or 87.0%, lost the examination before the paper reached a centre [F-B19] [Model].

The finding survives two stress tests. UP Police alone contributes 48.00 lakh, and without it the pre-centre share is (100.73 − 48.00) ÷ (115.81 − 48.00), or 78%, still a clear majority [Model]. The UGC-NET incident was a false alarm, coded OPS, and if it is dropped the share rises to 94%. On a plain count of incidents, without weighting by candidates, 25 of 49 (51%) began before a centre [T7]. The finding is a statement about this sample. It says that where the record gives candidate counts, the damage was concentrated at the front of the chain, and it says nothing about breach frequency nationally.

**Case-level counts.** Seven of the 12 incidents with a stated candidate count were insider cases at or before the centre (UP Police, NEET-UG 2024 at Hazaribagh, NEET-UG 2026, REET, GPSSB, BPSC and ITBP) [T11], which is why the architecture is built around what an insider can see and carry.

### 4.4 Four case studies

**Case 1: NEET-UG 2026, a leak at question creation (coded QC, INS).**

| Item | Record |
|---|---|
| Timeline | Exam held 3 May 2026 for about 22.7 lakh candidates; cancelled 12 May, nine days later; CBI probe ordered; re-exam 21 June; results 16 July [F-B01] [S06]. The NTA terminated 47 officials on 24 July (reported), the Education Minister is reported to have resigned on 25 July, and the Nilekani task force was announced on 26 July [F-P16] [F-B04] [F-P17] |
| Mechanism | Up to 120 of 180 questions matched a pre-circulated guess paper (one report said nearly 140; the document uses 120). Those arrested included a Pune chemistry professor with NTA translator credentials, a biology professor, a Pune school headmistress who was an NTA physics subject expert, and a physics teacher at a Pune medical coaching academy; a Latur coaching-institute owner was also arrested. Material spread through WhatsApp and coaching centres, and families are reported to have paid ₹2 lakh to ₹10 lakh [snip]; one distributor is reported to have paid ₹15 lakh. A Bihar police report alleged a ₹32 lakh deal [F-B02] [S07] [snip] |
| Damage | 22.7 lakh candidates; household cost of the re-exam estimated at ₹1,000 to ₹2,000 a student and over ₹300 Cr nationally, with no fresh registration or fee [F-A23] [F-A24]. Retest attendance was 87.72%, against 96.72% at the first sitting, and over 2.7 lakh candidates skipped it. Telegram was blocked nationally until 22 June, a step the Delhi High Court upheld on 19 June [F-B04]. The CBI found that the 2025 paper had also been compromised by the same racket [F-B03] |
| Human cost | At least 12 student deaths by suicide were reported by 20 June 2026 (Wikipedia, citing the Indian Express) [F-B04]. This is the only place the figure appears, and the document draws no inference from it |
| What would have stopped it | No one hand would have held more than the 5% cap of a bank 20 times the paper, against the 67% overlap reported (120 of 180) [F-B02] [Model]. The forms would not have existed until T−60 minutes, so anything circulated in advance would have covered a small slice of the bank and could not have told a buyer which items a candidate would receive. The coaching conflict bar would have applied to anyone setting or translating. The retest itself shows feasibility: setters and translators were sequestered and papers flown by Air Force aircraft [F-B04]. PRAMAAN makes that the routine, at ₹135 a sitting |

**Case 2: NEET-UG 2024, a strong-room breach and the Supreme Court's test (coded EC, INS).**

| Item | Record |
|---|---|
| Timeline | Exam 5 May 2024, registrations 24,06,079. At Oasis Public School, Hazaribagh, a strong-room back door was left open; the paper was photographed at 8:02 am, reached conspirators by 9:23 am and was solved by MBBS students by 10:40 am. The NTA Director General was removed on 22 June 2024; the Supreme Court ordered on 23 July [F-B05] [F-A04] [F-P04] |
| Mechanism | Trunks moved by open e-rickshaw; at 12 centres Canara Bank papers were issued instead of SBI papers. The CBI identified 155 beneficiaries and 36 people were arrested. Candidates are reported to have paid ₹30 lakh to ₹50 lakh; at Godhra a deputy superintendent is reported to have charged ₹10 lakh a student to fill answers later [F-B05] |
| Damage | 67 perfect scores; 1,563 candidates received grace marks that were later withdrawn with a retest [F-B05] [F-B06] |
| Court | No systemic breach; the leak was limited to Patna and Hazaribagh; an IIT Madras analysis found no sign of mass malpractice. Cancellation is justified only when "it is not possible to separate the tainted candidates from the untainted ones", and the Court told the NTA "Flip flops are anathema to fairness" [F-P04] [F-P05] [F-P06] |
| What would have stopped it | A strong room holding encrypted forms whose keys arrive at the centre at T−30 minutes, dual custody and a CCTV alert, so a back door yields nothing to photograph (Slide S4, risk 10). A per-copy watermark would identify the source copy. An electronic custody ledger would have caught the wrong bank's papers |

**Case 3: UP Police Constable 2024, a leak in transit (coded TR, INS).**

| Item | Record |
|---|---|
| Timeline | Exam 17 and 18 February 2024, about 48 lakh applicants (about 16 lakh women) for 60,244 posts; cancelled; re-exam 23 to 31 August at 2,385 centres in 75 districts; the board chair was removed [F-A21] |
| Mechanism | The paper is alleged to have leaked from a TCI Express warehouse in Ahmedabad, where logistics staff and a doctor are alleged to have opened a sealed consignment and scanned it; the exam agency, Edutest, was blacklisted [F-B08] |
| Damage | Six months between the cancelled exam and the re-exam, the basis for the model's appointment-delay assumption [A04] |
| What would have stopped it | No physical paper in transit for a Tier 1 exam: encrypted delivery and printing near or at centres, as the Radhakrishnan Committee proposed [F-P14]. For what stays physical, smart-lock boxes and tamper seals. The logistics contractor would face strict liability, not blacklisting after the fact |

**Case 4: UGC-NET June 2024, a false alarm (coded EX, OPS).** The examination, taken in OMR mode by 9.08 lakh candidates, was cancelled after an input from the Indian Cyber Crime Coordination Centre's threat analytics. The CBI closed the case, and its closure report is reported to say that a juvenile had doctored and backdated the screenshot and was let off after counselling [F-B07] [S10] [S11]. The cost of a false alarm was the same as that of a real leak, a cancellation for 9.08 lakh candidates. PRAMAAN responds with a verification step: per-copy watermarks let NEIAA test a circulating image against the issued copies within 24 hours, so a fabricated image is disproved before candidates lose an exam.

### 4.5 Short boxes

| Incident | Record | Stage | What would have stopped it |
|---|---|---|---|
| BPSC TRE-3 (15 Mar 2024) | 3.75 lakh candidates at 415 centres; the paper leaked before bar-coding at a Kolkata printing press; ₹10 lakh or more per candidate; 266 arrested [F-B09] | QS | No full paper at a press; print at centre |
| GPSSB Junior Clerk (29 Jan 2023) | 9.53 lakh applicants for 1,181 posts; an employee of KL Hitech printing press, Hyderabad, is alleged to have handed over a copy; 19 arrested [F-B13] | QS | Per-copy watermark; the 5% cap |
| RPSC Senior Teacher GK (Dec 2022) | RPSC member Babulal Katara, assigned to set the paper, is reported to have shared it before printing for ₹60 lakh; resold at ₹5 lakh or more per candidate; the Enforcement Directorate attached assets of about ₹3.11 Cr [F-B14] | QC | Item bank; a setter sees at most 5% |
| TSPSC (2023) | 15 papers leaked; an assistant section officer and a system administrator retrieved papers from commission computers; 14 arrested including 4 staff; Group-I prelims cancelled [F-B15] | QS | Split keys; just-in-time access; two-person integrity |
| JEE Main 2021 | Affinity Education is reported to have solved candidates' papers by remote access at a Sonepat centre for ₹12 lakh to ₹15 lakh per admission; a Russian national was arrested in October 2022 for hacking the iLeon exam software; over 820 beneficiaries reported [F-B10] | EX | Locked node image, no remote ports, network SOC |

Two further entries complete the picture. REET 2021, with about 16 lakh candidates, leaked from a district strong room two days before the exam, and mobile internet was shut in several districts on exam day [F-B16]. Remote access on CBT nodes recurred in Rajasthan Police 2018, RRB JE 2019, GUVNL 2020 (screen-splitter software at 8 centres, 2,156 candidates), Punjab Police SI 2021 and MP TET 2022 [F-B11]. Taken together, the five short cases and the four case studies show the same shape: a person with legitimate access at the front of the chain, a buyer market with prices of ₹2 lakh to ₹50 lakh a candidate, and detection that came after the exam.

## 5. Root causes: one paper passes through many hands and nobody owns the whole chain

### 5.1 The issue tree

The problem to be explained is stated as a fact: breaches keep cancelling examinations, at a cost the model puts at ₹3,316.5 Cr a year [T2]. The tree below is mutually exclusive and collectively exhaustive at its first level, meaning any breach can be traced to one or more of the five branches, which overlap in practice, and each branch has a distinct remedy.

| Branch | Statement | Evidence in this document | Remedy family |
|---|---|---|---|
| 1. The prize is too large | One paper serves an entire cohort, so one leak is worth a large sum to a seller | 22,70,000 candidates share one NEET-UG paper; families are reported to have paid ₹2 lakh to ₹10 lakh [F-A05] [F-B02, snip] | Shrink the prize |
| 2. Too many hands hold full value | Setters, translators, presses and transporters each see or carry the whole paper | 25 of 49 coded incidents began before a centre, 23 of them insider cases [T7] | Split what any hand can see |
| 3. Detection is weak | Breaches surface after the exam, or not at all | Cancellation of NEET-UG 2026 came nine days after the exam [F-B01]; 52 FIRs under the 2024 Act [F-P11] | Watermarks, analytics, a security operations centre |
| 4. Accountability is diffuse | No named owner across the chain; buyers disclaim vendor software and staff | Tender clause 11.3 [F-A20]; no end-to-end owner (Section 8) | Liability that follows the breach |
| 5. Capacity is thin | The bodies that run exams lack permanent security staff | 39 permanent NTA posts beside 197 contract and outsourced staff [F-A12] | An authority with a security mandate and a budget |

### 5.2 Five whys on NEET-UG 2026

| Level | Statement | Evidence |
|---|---|---|
| Problem | The exam was cancelled for 22.7 lakh candidates | [F-B01] |
| Why 1 | Because the paper was in circulation before the exam: up to 120 of 180 questions matched a pre-circulated guess paper | [F-B02] |
| Why 2 | Because people with authorised access to the questions passed them on: those arrested included an NTA-credentialed translator and an NTA subject expert | [F-B02] |
| Why 3 | Because the controls that exist all begin at the platform or the hall, after the paper exists: cameras, jammers, port locks and a one-hour handover apply to delivery, and question preparation lies outside the vendor's scope | [F-A19] |
| Why 4 | Because nothing in the design made the insider's knowledge partial or traceable: no split of items, no forms assembled late, no per-copy mark, so a leak could not be attributed and sold with little risk | [Model] [F-D17] |
| Why 5 | Because the paper exists as a single complete object that setters and translators see in full | 67% overlap, 120 of 180 [Model] |

The chain ends at design, not at a person. Replacing the individuals would leave the object unchanged, and the next set of setters and translators would hold the same complete paper. The CBI's finding that the 2025 paper was also compromised by the same racket supports that reading [F-B03].

### 5.3 Fishbone: the six causes with evidence

| Bone | Cause | Evidence |
|---|---|---|
| People | Insiders with legitimate access sell what they hold | 31 of 49 coded incidents are insider cases [T7]; an RPSC member assigned to set a paper is reported to have sold it [F-B14]; TSPSC staff are among 14 arrested [F-B15]; logistics staff and a doctor are reported to have opened a sealed consignment [F-B08] |
| Process | The paper moves as one object with single points of custody | A strong-room back door left open [F-B05]; the wrong bank's papers at 12 centres [F-B05] [F-P06]; a paper leaked from a district strong room two days before REET 2021 [F-B16] |
| Technology | Delivery technology has moved the vulnerability without closing it | Remote access on CBT nodes [F-B10] [F-B11]; SSC Phase 13 platform failure [F-B12]; encrypted transmission and print at centre recommended in 2024 and not in use in 2026 [F-P15] |
| Vendors | Risk is disclaimed and subcontracted | Clause 11.3 disclaimer and clause 12 subcontracting [F-A20]; an employee of a Hyderabad press handed over a copy [F-B13]; the UP Police exam agency was blacklisted after the fact [F-B08] |
| Law | Severity has risen faster than certainty | Life imprisonment and ₹10 Cr in some states already [F-P13]; 52 FIRs under the 2024 Act [F-P11]; over 2.45 lakh cases pending in existing fast-track special courts [F-P12] |
| Institutions | Capacity and continuity are missing | 39 permanent NTA posts [F-A12]; no security spend disclosed [F-A13]; NTA Director General removed in 2024 and 47 officials terminated in 2026 (reported) [F-B05] [F-P16] |

### 5.4 The chain of hands

Viewed as a value chain, a paper acquires value as it is written, translated, stored, moved and held, and each hand adds an exposure. The table shows what each hand holds and what the record says about it, using the eight lifecycle stages in order.

| Hand | What it holds | Stage and coded incidents | Examples from the record |
|---|---|---|---|
| Setter, moderator, translator | The items in full, in every language | QC: 4 [T7] | NEET-UG 2026; RPSC 2022; MHADA 2021; KEA 2022 [T11] |
| Press or server, and vault | The assembled paper, or the files for it | QS: 12, the largest stage [T7] | BPSC TRE-3, GPSSB, TSPSC; REET 2021; HP Police 2022 [F-B09] [F-B13] [F-B15] [F-B16] |
| Officials with privileged access | Access outside a setting or printing role | PA: 6 [T7] | BSSC 2017, HCS Judicial 2017, ITBP 2021, Army CEE 2021, HPSSC 2022, UKPSC 2023 [T11] |
| Transporter | A sealed consignment | TR: 3 [T7] | UP Police 2024; TNPSC 2017 and 2019 [F-B08] [T11] |
| Centre and strong room | The physical paper on the morning | EC: 4 [T7] | NEET-UG 2024 at Hazaribagh; GSSSB 2019 [F-B05] [T11] |
| Candidate identity | The right to sit | CA: 3 [T7] | HSSC 2021, NEET-UG impersonation 2021, PPSC 2022 [T11] |
| Examination, devices and nodes | The live paper or the delivery platform | EX: 10 [T7] | JEE Main 2021; MP TET 2022; SSC Phase 13; UGC-NET 2024 false alarm [F-B10] [F-B12] [F-B07] |
| Evaluator | Responses and marks | ER: 7 [T7] | TRB 2017; Karnataka Police SI 2021; Godhra, NEET-UG 2024 [F-B05] [T11] |

No hand in the first four rows is constrained by a technical control that limits what it can see. Cameras, biometric gates and tender controls bind the centre, the candidate and the examination nodes. The chain also has no single owner. The NTA disclaims vendor software and functionary integrity [F-A20], state commissions run their own chains [T1], and no body in the record is accountable end to end.

### 5.5 Why more rules have not worked

1. **The design exists; execution does not.** The Radhakrishnan Committee reported 101 recommendations in October 2024, including encrypted electronic transmission, printing at centres and unique codes on each copy [F-P14]. Computer-assisted pen-and-paper testing was still not in use at the time of the 2026 leak, and much of the report remained unimplemented [F-P15].
2. **The bodies lack permanent capacity.** The NTA runs on 39 permanent posts beside 197 contract and outsourced staff, and its replies disclose no security spend [F-A12] [F-A13]. A body that depends on contract and outsourced staff cannot build a security culture.
3. **Contracts allocate risk away from the exam body.** A ₹200 penalty for a CCTV blind spot, a 10% performance guarantee and a disclaimer of vendor software and staff integrity leave little cost on the party best placed to prevent a breach [F-A20].
4. **Deterrence without detection.** Becker's model holds that offending falls with the probability of conviction times the punishment, so certainty matters as much as severity [F-D17]. Rajasthan (fine up to ₹10 Cr), Uttarakhand and Jharkhand (life imprisonment and up to ₹10 Cr) already had heavy penalties, and leaks continued [F-P13]. Under the 2024 Act, 52 FIRs had been registered (reported) [F-P11]; the 2026 Amendment sets a three-month trial limit, yet existing fast-track courts carry over 2.45 lakh pending cases and PRS notes no consequence for missing investigation deadlines [F-P12].
5. **The counter-example is design, not mode.** UPSC runs pen-and-paper examinations with tightly controlled printing and custody, and its subject experts do not know whether their questions will be selected. It reports no confirmed leak of the Civil Services Examination since 1991 [F-D12] (a [snip] source, so context only). UPSC's advantage is that no hand holds a complete, known paper. That is the property PRAMAAN generalises.

### 5.6 What the diagnosis implies

The five branches, the whys and the chain point to one conclusion. Adding cameras, raising fines or moving to computer-based delivery changes the cost of an attack at a stage, but it leaves the value of the stolen object intact and leaves the number of people who can hold it in full unchanged. The brief's objective is to make the cost of attack "significantly higher than its expected benefit" [B SO0], and the benefit side of that inequality is what the record shows to be untouched. Stronger locks raise the price of a leak. They do not shrink the prize.
