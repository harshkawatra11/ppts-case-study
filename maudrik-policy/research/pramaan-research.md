# PRAMAAN: Research Deliverable

**A 10-year National Examination Security Architecture for India**

Team: Harsh Kawatra (Delhi Technological University, Team Leader) · Aakriti Aggarwal (Maharaja Agrasen
Institute of Management Studies, MAIMS)

Prepared for: Maudrik v7.0 Policy Case Competition, September 2026

---

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

## 6. Law and policy: penalties have risen fivefold since 2024 while detection and execution lag

The legal position on examination malpractice changed more in the two years from June 2024 to July 2026 than in the previous decade, and almost all of the change was on one axis: severity. This section sets out what the 2024 Act and the 2026 Amendment do, what the states and the courts have added, what the Radhakrishnan Committee proposed and how much of it was live when the 2026 NEET-UG leak occurred, and which data-protection and cyber obligations any new architecture inherits. It then makes one analytical point, using Becker's model, that frames the rest of the document: the law has raised what a convicted offender loses, but it has done little to raise the chance that an offender is caught, and the chance is the term that matters more for deterrence [F-D17].

### 6.1 The 2024 Act: a central statute with a central reach

The Public Examinations (Prevention of Unfair Means) Act, 2024 was introduced in the Lok Sabha on 5 February 2024 and has been in force since June 2024 [F-P01]. Its coverage list is central: UPSC, SSC, the Railway Recruitment Boards, IBPS, the NTA and central ministries and departments [F-P01]. Read literally, that list leaves state commissions, state selection boards and police recruitment boards to their own state laws, which is why Section 6.3 matters. This is the team's reading of the coverage list, not a finding reported by the sources.

The penalty structure was tiered by role [F-P02]. An individual using unfair means faced 3 to 5 years and a fine of up to ₹10 lakh. A service provider faced a fine of up to ₹1 Cr plus the proportionate cost of the examination, and debarment for four years. Organised crime attracted 5 to 10 years and a fine of at least ₹1 Cr. Offences were made cognisable, non-bailable and non-compoundable, and investigation was reserved to an officer not below the rank of DSP or ACP [F-P03]. The design logic was sound: put the most serious exposure on the parties who organise leaks and on the vendors who are paid to prevent them.

### 6.2 The 2026 Amendment: fines multiplied, timelines fixed

The Public Examinations (Prevention of Unfair Means) Amendment Bill, 2026 was introduced in the Lok Sabha on 27 July 2026 by Dr Jitendra Singh, passed by the Lok Sabha on 29 July and by the Rajya Sabha on 30 July [F-P07]. That is three days from introduction to passage in both Houses, and the introduction came about eleven weeks after the NEET-UG 2026 cancellation on 12 May [F-B01]. Table 6.2 sets the two statutes side by side.

| Element | 2024 Act | 2026 Amendment | Change |
|---|---|---|---|
| Individual, prison term | 3 to 5 years [F-P02] | 5 to 10 years [F-P08] | Floor and ceiling both about doubled |
| Individual, fine | Up to ₹10 lakh [F-P02] | Up to ₹50 lakh [F-P08] | 5 times |
| Service provider, fine | Up to ₹1 Cr plus proportionate exam cost [F-P02] | Up to ₹5 Cr [F-P09] | 5 times |
| Service provider, debarment | 4 years [F-P02] | 8 years [F-P09] | 2 times |
| Directors and senior management | Not separately listed in the fact base | 5 years or more and ₹5 Cr [F-P09] | New personal exposure, as reported |
| Organised crime | 5 to 10 years, fine of at least ₹1 Cr [F-P02] | At least 7 years, fine of at least ₹10 Cr, property seizure [F-P10] | Minimum fine 10 times |
| Procedure | Cognisable, non-bailable, non-compoundable; DSP or ACP investigates [F-P03] | Special task forces; investigation within two months; Special Fast Track Courts in every state and UT; trial within three months of chargesheet; High Court appeals within three months [F-P11] | Time limits added |

The headline in the title of this section is therefore an accurate summary of the fine ceilings for individuals and providers and a conservative one for organised crime. It is not a statement about outcomes.

### 6.3 State laws: six regimes, the same ₹10 Cr ceiling in three of them

Before and alongside the central statute, at least six states legislated on their own [F-P13]. Table 6.3 lists them as the fact base records them.

| State (year) | Prison term | Fine |
|---|---|---|
| Rajasthan (2022) | Up to 10 years in 2022, later made stricter [F-P13] | Up to ₹10 Cr [F-P13] |
| Uttarakhand (2023) | Life imprisonment [F-P13] | Up to ₹10 Cr [F-P13] |
| Jharkhand (2023) | Life imprisonment [F-P13] | Up to ₹10 Cr [F-P13] |
| Gujarat (2023) | 5 to 10 years for organised leaks [F-P13] | ₹10 lakh to ₹1 Cr [F-P13] |
| Uttar Pradesh (2024) | Two years to life [F-P13] | ₹1 lakh to ₹1 Cr [F-P13] |
| Bihar (2024) | 3 to 10 years [F-P13] | ₹10 lakh to ₹1 Cr [F-P13] |

Three observations follow. First, severity is not scarce: three states already carried maximum fines of ₹10 Cr, and two allowed life imprisonment, yet leaks continued in and around them. Rajasthan's REET 2021 paper left a district strong room two days before the exam [F-B16] and its RPSC Senior Teacher paper was reported to have been shared by a commission member in December 2022 [F-B14]. Second, the regimes differ on definitions, on the classes of offender covered and on procedure, so a syndicate operating across state lines meets six different sets of rules. The Indian Express count of 41 documented leaks across 15 states in five years [F-B17] is a reminder that leaks do not respect the boundary the statutes draw. Third, one report counts 34 leaks in Gujarat over ten years [F-B18], a figure that spans years before and after the state's 2023 law and so cannot be used to judge that law either way. It is cited here only as a reported count.

### 6.4 The PRS critique: deadlines without consequences, courts without capacity

PRS Legislative Research, the source the fact base relies on for the Amendment, raises three issues [F-P12]. The Bill's rigid three-month trial deadline conflicts with a 2002 Supreme Court ruling against outer limits for criminal trials. The Bill attaches no consequence to missed investigation deadlines, so the two-month limit is an aspiration. And the existing fast-track special courts, the model the Bill extends, carry over 2.45 lakh pending cases (2025), with trials taking between 257 and 1,717 days [F-P12].

PRS also records a point that cuts the other way: fast-track courts dispose of 9.51 cases a month against 3.26 in regular courts [F-P12]. The model works on speed per case. The constraint is volume and the absence of enforcement for missed deadlines. The Amendment adds a new class of cases to an already loaded docket, and the fact base contains no conviction count under the 2024 Act. What it does contain is 52 FIRs registered under that Act, as reported [F-P11] [S19]. That is 52 registered cases in about two years against 41 documented leaks in five years in the Indian Express count [F-B17], two different populations that cannot be divided into a conversion rate, but which together suggest that registration is not the bottleneck and that the path from FIR to conviction is the piece not evidenced in the public record.

### 6.5 The Supreme Court in 2024: the systemic-breach test

In NEET-UG 2024 the Supreme Court declined to cancel the examination. Its order of 23 July 2024, with reasons in August, found no systemic breach, limited the leak to Patna and Hazaribagh, and noted that an IIT Madras analysis found no sign of mass malpractice [F-P04]. The legal test it applied is the one every architecture in this area must now respect: cancellation is justified only when "it is not possible to separate the tainted candidates from the untainted ones", on material showing "a real possibility of systemic malaise" [F-P05].

The Court did three other things in the same judgment [F-P06]. It told the NTA that "Flip flops are anathema to fairness". It listed the NTA's lapses: the wrong bank's papers at 12 centres, weak coordination, inadequate CCTV and unreliable transport. And it widened the Radhakrishnan Committee's mandate to five areas: exam security and administration (strong rooms, identity checks, sealed transport, real-time monitoring), data security and technology, policy and stakeholders, international cooperation, and support and training [F-P06].

Two design consequences follow, and the later parts of this document rely on them. The first is that a security architecture should generate evidence that lets a court separate the tainted from the untainted; the watermark and custody ledger in PRAMAAN exist partly for this reason. The second is that the 2026 cancellation of the full examination for about 22.7 lakh candidates [F-B01] is consistent with the test only if the tainted candidates could not be sorted out. The team's reading is that a leak at the setting stage contaminates the paper itself, so no separation by centre or by batch was possible. That reading is ours and is not a finding reported by the sources.

### 6.6 The Radhakrishnan Committee: a design that was largely still on paper

The committee was constituted on 22 June 2024 and chaired by Dr K. Radhakrishnan, a former chair of ISRO, with Randeep Guleria, Prof B.J. Rao, Prof Ramamurthy K, Pankaj Bansal and Prof Aditya Mittal as members [F-P14]. It held 23 full-day sittings, drew about 37,000 responses on MyGov and reported in October 2024 with 101 recommendations [F-P14]. Its status at the time of the 2026 leak is stated in one line of the record: computer-assisted pen-and-paper testing was still not in use, and much of the report remained unimplemented [F-P15]. Table 6.6 lists the recommendations the fact base names, with what is and is not known about each.

| Recommendation [F-P14] | What it would change | Status in the record |
|---|---|---|
| DIGI-EXAM identity (Aadhaar, biometrics, AI analytics) | Candidate authentication at LS6 | Status not established in the sources collected |
| Computer-assisted pen-and-paper testing: encrypted e-transmission, high-speed printing at centres, unique code on each copy | Removes physical paper transport; makes each copy traceable | Not in use at the time of the 2026 leak [F-P15] |
| Multi-session testing for exams over two lakh candidates | Cuts exposure per paper | NEET-UG to become a multi-day CBT from 2027, as told to the Supreme Court and reported [F-P18] |
| Multi-stage tests | Adaptive difficulty | Status not established in the sources collected |
| At least 1,000 secure testing centres in government institutions | Controlled venues | The 2026 plan cites nearly 1,000 centres, and the NTA asked AICTE to map government IT infrastructure, as reported [F-P18] |
| Mobile test centres of about 150 seats for remote areas | Access | Status not established in the sources collected |
| NTA to focus on entrance exams; ten verticals including information security and vigilance | Institutional focus | Status not established in the sources collected |
| Director General of Additional Secretary rank; permanent staff; a steering committee for mission-mode delivery | Capacity | NTA had 39 permanent posts filled on deputation, 73 contract and 124 outsourced staff in July 2026; 16 new posts (8 Director, 8 Joint Director) proposed [F-A12] |

The Radhakrishnan design is the closest thing India has to a consensus architecture, and PRAMAAN is built to complete it, not to compete with it: computer-assisted pen-and-paper testing becomes the offline delivery mode for exams that cannot move to CBT, and the identity recommendation becomes the 1:1 gate check. What PRAMAAN adds is the part the committee, on the record here, did not address: what any one person can see before the exam, and who answers when it fails.

### 6.7 The July 2026 response: a week of decisions, all on severity, staff and delivery mode

Table 6.7 sets the 2026 sequence in date order.

| Date | Event | Tag |
|---|---|---|
| 3 May 2026 | NEET-UG held for about 22.7 lakh candidates | [F-B01] |
| 12 May 2026 | Examination cancelled; CBI probe ordered | [F-B01] [S06] |
| 21 Jun 2026 | Re-examination; no fresh registration and no additional fee | [F-B01] [F-A24] |
| 16 Jul 2026 | Results | [F-B01] |
| 24 Jul 2026 | NTA reported to have terminated 47 officials, with criminal proceedings planned against some | [F-P16] [snip] |
| 25 Jul 2026 | Education Minister resigned | [F-B04] |
| 26 Jul 2026 | Task force under Nandan Nilekani announced: examination security, technology, infrastructure, accessibility, student well-being | [F-P17] |
| 27 to 30 Jul 2026 | Amendment introduced, passed by both Houses | [F-P07] |
| Reported | Centre told the Supreme Court NEET-UG becomes a CBT from 2027, over five to six days in nearly 1,000 centres; the NTA Director General spoke of about 20 shifts with score normalisation | [F-P18] [snip] |

On technology, the NTA chief said the agency is exploring AI analysis of logs and data to detect fraud, and cooperation with BRICS countries on paper security [F-P17]. Read as a package, the response has four components: heavier penalties, personnel action, a shift to CBT and more analytics. What it leaves untouched, on the evidence recorded, is the object that leaked. The 2026 mechanism was that up to 120 of 180 questions matched a pre-circulated guess paper, and the arrested persons included an NTA subject expert and NTA translators [F-B02]. A change of delivery mode does not alter what a setter or translator sees at the time of setting. The CBI also found that the NEET-UG 2025 paper had been compromised by the same racket [F-B03], which means that the leak had gone undetected through a full annual cycle.

### 6.8 Data protection, incident reporting and privacy: obligations the architecture inherits

Three instruments apply to any national system that collects candidate identity, holds question material and monitors centres.

The Digital Personal Data Protection Rules, 2025 were notified on 13 November 2025 with phased compliance over 18 months, to 13 May 2027 [F-P19]. They require verifiable parental consent for children's data, with exemptions that include education; significant data fiduciaries must run data protection impact assessments and annual independent audits; and biometric data is treated as personal data, with no separate sensitive class [F-P19]. The last point matters for identity checks: there is no statutory tier that would give face templates a higher legal barrier, so the design has to supply it. The compliance date of 13 May 2027 falls in the first year of the PRAMAAN roadmap, so exam bodies will be building new systems into a rulebook that becomes fully binding at the same time.

The CERT-In Directions of 28 April 2022 require cyber incidents to be reported within six hours and ICT logs to be kept for 180 days in India [F-P20]. The six-hour rule is the anchor for the breach-response clock in the accountability design. It is an existing legal standard, not a new burden, and nothing in the fact base suggests that examination systems sit outside it.

Puttaswamy v. Union of India (2017) established privacy as a fundamental right and set a four-part test for state intrusion: legality, a legitimate aim, proportionality and procedural safeguards [F-P21]. The team applies that test, prong by prong, to face matching, CCTV and AI analytics in Section 15. For this section the point is that surveillance is not free of legal cost, and the Supreme Court has already told the state what the price of overreach is.

### 6.9 Blunt instruments: internet shutdowns and the Telegram block

Two blunt instruments recur in the record. Rajasthan cut mobile internet in several districts from 6 am to 6 pm on 26 September 2021 for REET, and again in seven districts in February 2023; SFLC.in argues that examinations are not a "public emergency" under the law that authorises shutdowns [F-P22]. The REET paper had, in the same period, already left a district strong room two days earlier [F-B16], so the shutdown addressed a threat (real-time cheating on the day) that was not the one that had materialised. In 2026 Telegram was blocked nationally until 22 June, a measure the Delhi High Court upheld on 19 June [F-B04]; the re-test proceeded with setters and translators sequestered and papers flown by Indian Air Force aircraft, and attendance fell from 96.72% to 87.72%, with over 2.7 lakh candidates absent [F-B04].

These measures show what the state does when the design gives it no better option: it restricts the public and moves assets by air. Both are costly, both are visible and neither protects the stage where the leak occurred. PRAMAAN excludes shutdowns and blanket platform blocks from its toolkit, for the proportionality reasons in Section 15.

### 6.10 The Becker reading: severity has risen, certainty has not

Becker's economic model of crime holds that offending falls with the probability of conviction multiplied by the size of the punishment, and that certainty of detection matters as much as severity [F-D17]. Applied here, the record is asymmetric. The punishment term has risen fivefold on fine ceilings and more on organised-crime minimums (Table 6.2). The probability term shows no comparable movement. The CBI needed until 2026 to discover that the 2025 paper was also compromised [F-B03]. The 2024 Act generated 52 FIRs in about two years [F-P11]. Special Fast Track Courts are being added to a system with 2.45 lakh cases pending in the older ones [F-P12]. Investigation deadlines have no consequence attached [F-P12]. The team's own attacker model, which is illustrative and set out in Section 14, uses a detection probability of 10% today and 60% under PRAMAAN [A16].

The policy conclusion is not that penalties are wrong. Rajasthan, Uttarakhand and Jharkhand have the highest ceilings in the fact base and have still seen leaks, which is what Becker would predict when detection is weak [F-P13] [F-D17]. The conclusion is that the next unit of policy effort produces more deterrence when spent on making a leak traceable and its investigation certain than on raising a ceiling that is already ₹10 Cr in three states. That is the gap PRAMAAN is designed to fill, and Sections 7 to 10 explain why the other tools in the brief's option list do not fill it alone.

## 7. What other systems teach: Kenya, South Korea, China, the digital SAT and UPSC

Five systems are worth studying because each has solved a different piece of the problem at national scale, and each has a cost that limits how far the solution travels. The fact base for this section is deliberately narrow: it records what the sources report about controls and results, and it does not claim to know these systems' internal costs or candidate volumes. Transferability judgements below are the team's own, made against three tests: scale (India's 5 crore sittings a year [T1]), federalism (exam bodies at the Centre and in the states) and privacy (the Puttaswamy proportionality test [F-P21]).

### 7.1 Kenya: custody that two people must open together

In 2015 cheating in the Kenya Certificate of Secondary Education (KCSE) rose by about 70%, 5,101 candidates' results were cancelled and the board of the Kenya National Examinations Council (KNEC) was dissolved on 24 March 2016 [F-D01]. The 2016 reforms were mainly physical and administrative [F-D02]. Exam materials moved out of police stations and into 346 containers placed in sub-counties. Each container opened only with two keys, one held by the sub-county commissioner and the other by the sub-county director of education, and each was guarded around the clock. Head teachers collected papers at 5 am on each exam day. Social events in the third term were banned and the exam window was cut from six weeks to four. The result was that no KCSE results were cancelled in 2016 [F-D03]. KNEC later added smart padlocks that log container openings, as reported by the Nation [F-D03] [snip].

What transfers is the principle of dual custody with named officials from independent lines of authority; it appears in PRAMAAN as two-person integrity on privileged actions and as 3-of-5 key release. The logistics do not transfer directly. India's NEET-UG alone used 5,468 centres in 552 cities in 2025 [F-A03], so a network of 346 containers is a different order of magnitude from what a single Indian exam would need, and the time saved by compressing the exam window is not available to a system with 22.7 lakh candidates in a single sitting. The team's judgement is that the idea transfers and the equipment must be rebuilt: the smart-lock boxes in the PRAMAAN cost basis (5,000 boxes at ₹1 lakh each, component C04) are the Indian equivalent of the Kenyan container [Model].

### 7.2 South Korea: confine the setters, not just the paper

Korea's national college entrance exam (CSAT) is known for airspace restrictions. All takeoffs and landings are halted from 1:05 to 1:40 pm during the English listening test, about 140 flights are rescheduled and aircraft already in the air stay above 3 km [F-D04]. The less visible control is the one aimed at the people who write the paper. Question writers are confined for about 40 days at a classified location, with no physical or electronic contact, and get their phones back only after the test ends at 5:45 pm [F-D05].

The airspace measure is a spectacle that does not transfer: it is a cost imposed on the public for a single sitting, and the fact base offers no evidence that it prevents the type of leak India has suffered. The sequestration of setters is the transferable control, and it is aimed at exactly the stage where NEET-UG 2026 failed. India has already done it once in emergency form: the NEET-UG re-test setters and translators were sequestered [F-B04]. PRAMAAN institutionalises the practice for about 2,000 setters and translators, budgeted at ₹2 lakh each (₹40 Cr a year, part of component C08) [Model]. The cost of confinement is the reason PRAMAAN pairs it with the 20-times item bank: when no person sees more than 5% of a bank, confinement is needed only for the small group who see the most, not for every contributor.

### 7.3 China: the case for restraint as much as for technology

China made cheating in national exams a criminal offence in 2015 [F-D06]. It has used technology in layers: Shaanxi introduced iris scans in 2018, Beijing added facial recognition in 2021, provinces deployed AI patrol systems to flag suspicious behaviour in 2024, and signal disruption is used near campuses [F-D07]. In 2025 Alibaba, Tencent and ByteDance switched off the photo-recognition and question-answering features of their AI apps during gaokao hours [F-D08].

The last item is the most interesting for policy. It shows a regulator securing an exam by asking the platforms that host the cheating tools to withdraw them for a fixed window, a control on the supply side of cheating aids, not on the candidate. That idea has a proportionate form in India: time-limited cooperation agreements with platforms, with no blanket blocking. The rest of the Chinese stack is heavily biometric and behavioural, and the team does not treat it as a template. Iris scans and continuous behavioural flagging are hard to reconcile with the four-part proportionality test in Puttaswamy [F-P21] and with a DPDP regime that treats biometrics as ordinary personal data [F-P19]. China's use of AI is a fact about what is possible. It is not evidence that the same design meets India's legal standard.

### 7.4 The digital SAT: different paths for different candidates

The US digital SAT is a multistage adaptive test. The difficulty of the second module depends on performance in the first, so students take different sets of questions [F-D09]. This is the closest working precedent for the PRAMAAN idea that no two candidates need face the same paper. Its relevance is that it shows large-scale, high-stakes testing can be delivered from a bank of calibrated items instead of a single fixed paper, with scores made comparable by psychometric methods. It also shows what the approach demands: a calibrated item bank, a published scoring method and a professional psychometric function.

India would be adopting the idea under a tougher legal and political constraint. The Supreme Court has said that "Flip flops are anathema to fairness" [F-P06], and normalisation of scores across shifts is exactly what a disappointed candidate would litigate. The NTA Director General has already spoken of about 20 shifts with score normalisation for a CBT NEET-UG [F-P18] [snip]. The team's judgement is that the SAT precedent supports the use of equating, but the Indian version must publish its method, use an independent psychometric panel and keep a fallback of fewer, larger forms, all of which are set out in Section 11 and in the risk register of Section 19.

### 7.5 UPSC: pen and paper, and no confirmed leak since 1991

UPSC provides the most useful domestic benchmark. Its Civil Services Examination in 2025 drew 9,37,876 applicants, 5,76,793 of whom appeared, and produced 958 recommendations against 1,087 vacancies [F-A16]. Its control model is procedural and is known from press reports rather than from published protocols: subject experts do not know whether their questions will be selected, printing and custody are tightly controlled, and there has been no confirmed leak of the exam since 1991, as reported [F-D12] [snip]. Alongside those controls UPSC made AI-enabled face authentication with liveness checks mandatory for the 24 May 2026 prelims, and its 2024 tender sought Aadhaar fingerprint and face authentication, QR e-admit cards and live AI CCTV [F-A17] [F-D13].

The mechanism that matters is the first: a setter who cannot tell whether his or her items will be used cannot sell a paper, because the paper does not yet exist in that person's hands. This is the same property PRAMAAN engineers on purpose with the item bank. UPSC gets it by process and by the smaller scale of a single annual exam; PRAMAAN needs it as an architectural property so that it holds for 22.7 lakh candidates and for the states' 2 crore sittings [A02]. The UPSC example also disposes of the claim that mode determines security. It is a pen-and-paper exam, and it is the best-performing exam in the record. The scale contrast is real (5.77 lakh appeared, against about 22.09 lakh for NEET-UG 2025 [F-A16] [F-A03]), so the lesson is directional, not a demonstration that the approach scales unchanged.

### 7.6 Lessons table

| System | Control | Result reported | What the control reduces | Transferable to India? (team judgement) |
|---|---|---|---|---|
| Kenya KCSE 2016 | 346 dual-key containers; papers collected at 5 am; shorter exam window | 5,101 results cancelled in 2015, none in 2016 [F-D01 to F-D03] | What one official can do alone with stored papers | Principle yes; hardware redesigned for 5,468 NEET centres |
| South Korea CSAT | Setters confined about 40 days; airspace closed during listening test | Controls reported; no leak-rate evidence in the fact base [F-D04] [F-D05] | What setters can leak, and real-time interference | Setter confinement yes; airspace no |
| China | Criminal offence (2015); iris, facial and AI patrol; app shutdown during gaokao | Reported use, no leak-rate evidence in the fact base [F-D06 to F-D08] | Cheating aids and candidate behaviour | Platform cooperation yes; biometric and behavioural stack no |
| US digital SAT | Multistage adaptive testing, different test path per student | Reported as the test format; no leak-rate evidence in the fact base [F-D09] | What any one form exposes | Yes with published equating and a fallback |
| UPSC | Setters do not know which items are used; controlled printing and custody; face authentication | No confirmed leak of the CSE since 1991, as reported [F-D12] [snip] | What a setter can sell | Yes, made architectural through item banks |

### 7.7 Synthesis: the effective controls limit what one person can see or touch

Set side by side, the five systems point to the same conclusion, which is the one the brief itself hints at when it warns that technology "can simply shift the point of vulnerability" [B CS10]. The controls with the best reported results are those that reduce what any single person can see or touch: Korea's sequestration of setters, Kenya's two-key containers, UPSC's uncertainty about selection and the SAT's multiple forms. The controls with the most attention, cameras, AI patrols and airspace closures, watch the hall and the candidate. India's 2026 response leans toward the second family [F-P16] [F-P17] [F-P18], and India's incident record places most of its damage in the first: 25 of the 49 coded incidents occurred before the paper reached a centre, and 100.73 of 115.81 lakh candidates in attributed cancellations lost their exam at those stages [T7] [Model].

Two cautions apply. First, the fact base has thin evidence on the costs of the international controls, and none on their failure cases, so this is a comparison of reported design features and not an evaluation of outcomes. Second, the sources collected do not describe any of these systems as divided between a national body and dozens of state bodies, and India's fragmentation across the NTA, UPSC, SSC, the RRBs, IBPS and state commissions is a structural difference the lessons do not solve. The PRAMAAN answer to that difference is the hybrid-by-function structure in Section 10: standards, keys and audit at the centre, delivery where the capacity already is.

## 8. Stakeholders: ten actors, three veto points and no single owner of the chain

The brief lists ten stakeholders and adds that "each additional layer can introduce another point of vulnerability" [B ST1, ST2, ST3, ST4, ST5, ST6, ST7, ST8, ST9, ST10]. A governance design that cannot say which of these actors can block it, which will carry it and which has a reason to resist it will stall at the statute or at the state boundary. This section maps the ten, adds four institutional actors the brief omits (the courts, Parliament, the states as a separate order of government and the MeitY and CERT-In pair), identifies three veto points and documents the structural problem that PRAMAAN's governance design is built to solve: nobody today is accountable for the whole chain.

### 8.1 How the grid was built

The power-interest grid below is the team's judgement and not a survey. Each actor is scored 1 to 5 on two axes. Power is the actor's ability to enable or block a PRAMAAN component, whether by statute, by money, by control of custody or data, or by a court order. Interest is how directly the outcome of an examination-integrity reform touches the actor's own position. Scores come from the incident record (which actor held custody or gave a decision at the point of failure), the legal record (who has legislated or ruled) and the institutional facts on capacity. The quadrant then follows a fixed rule: power of 4 or above and interest of 4 or above is Manage closely; power of 4 or above and interest below 4 is Keep satisfied; power below 4 and interest of 4 or above is Keep informed; the rest is Monitor. Two analysts reading the same evidence could move a score by one point. No quadrant assignment in the table depends on a single point except where noted.

### 8.2 The grid, actor by actor

| Actor | Power | Interest | Quadrant | What it needs | What it fears | Role in PRAMAAN |
|---|---|---|---|---|---|---|
| Examination authorities (ST1): NTA, UPSC, SSC, RRBs, IBPS, state commissions | 5 | 5 | Manage closely | Credible security without losing control of its own exam; capacity (the NTA has 39 permanent posts on deputation beside 197 contract and outsourced staff [F-A12]) | Losing autonomy to a new authority; blame after a breach (NTA Director General removed in 2024 [F-B05]) | Keep delivering; own item content; name a Senior Responsible Officer per exam |
| Union Government, including the Ministry of Education (ST2) | 5 | 4 | Manage closely | A visible response that holds; 2026 saw the Education Minister resign [F-B04] | Another cancellation, court rebuke | Sponsor the statute, fund the Union share (52% of steady opex [T10]) |
| State governments (ST2) | 4 | 4 | Manage closely | Retain control of state exams and police recruitment, which the team sizes at 2 crore sittings a year [A02] | Central overreach; unfunded mandates | Host 36 State Examination Security Cells; share 40% of that cost |
| Technology providers (ST3) | 3 | 5 | Keep informed | Predictable procurement; the NTA CBT tender names Tata Consultancy Services Limited as service provider [F-A20] | Strict liability; a volume cap (rates fall to 0.50x at 2.75 to 3 crore tests today [F-A20]) | Accredited, capped at 40% of national CBT volume, strictly liable |
| Logistics agencies (ST4) | 3 | 3 | Monitor | Clear custody rules and insurance | Being the visible node in a leak (UP Police 2024 [F-B08]) | Move encrypted files and reserve stock, not full papers; smart-lock custody |
| Examination centres (ST5) | 2 | 4 | Keep informed | Funded upgrades; clarity on liability | Being closed after one incident (5,468 NEET-UG centres in 2025 [F-A03]) | Accredited by state cells; hardened labs; keys arrive at T−30 |
| Invigilators (ST6) | 1 | 3 | Monitor | Fair pay and training | Blame for a centre-level breach | Two-person custody, vetting, rotation |
| Candidates (ST7) | 3 | 5 | Keep informed | An exam that is fair, affordable and close; no repeat sitting | Cancellation and cost (₹7,300 per affected candidate [Model]); retest attendance fell to 87.72% in 2026 [F-B04] | Protected by the Candidate Protection Fund; scoped cancellation |
| Coaching institutions (ST8) | 3 | 4 | Keep informed | Continued demand; NEET coaching fees run ₹50,000 to ₹2,50,000 a year and the industry is reported at about ₹58,088 Cr [F-A22] [snip] | A conflict bar on setters; loss of the leak premium | Barred from employing or paying setters and translators; subject to declaration and audit |
| Cybersecurity firms (ST9) | 2 | 3 | Monitor | A defined market for testing and red-teaming | Being a vendor and its own auditor | Independent red teams under NEIAA; not allowed to audit systems they built |
| Law enforcement (ST10): CBI, STF, SIT, EOU, I4C, ED | 4 | 4 | Manage closely | Faster forensics; time limits with consequences | Deadlines it cannot meet (two months to investigate [F-P11]) | Exam-crime unit and forensic labs; evidence from watermark and ledger |
| Supreme Court and High Courts | 5 | 2 | Keep satisfied | Evidence that separates tainted from untainted candidates [F-P05] | Repeated "flip flops" [F-P06] | Set the test PRAMAAN's scoped cancellation applies |
| Parliament | 5 | 3 | Keep satisfied (one point from Manage closely) | A defensible statute; it passed the Amendment in three days [F-P07] | Passing a law that fails | Enact a NEIAA chapter; receive public reports |
| MeitY and CERT-In | 4 | 3 | Keep satisfied | Consistent incident reporting under the six-hour rule [F-P20] | A parallel exam-only regime | CERT-Exam operates as a sectoral team under CERT-In |

Four actors sit in Manage closely and ten elsewhere. The concentration of power at the top (examination authorities, the Union and the states, law enforcement) is the structural reason the governance chapter proposes an authority that audits but does not conduct: the power is where the interest is, and interest alone tends to protect the status quo.

### 8.3 Three veto points

Veto-player analysis asks whose agreement is required to change a rule and who can stop a change [B Q1].

The first veto point is the Union Cabinet and Parliament, whose assent a statutory authority such as NEIAA requires. The evidence that they are willing to act is the Amendment: introduced on 27 July 2026 and passed by both Houses by 30 July [F-P07]. The evidence about what they act on is the content of the Amendment, which is severity and procedure. The political window is real and it is on the severity axis, so the design has to present NEIAA as a natural complement to the Amendment and not as a competitor to it.

The second is the states. State commissions run the state sittings that the team sizes at 2 crore a year [A02], state police boards recruit through those exams, and six states have legislated independently on unfair means [F-P13]. A central authority that tried to take over delivery would meet resistance from 36 separate units, several of which have their own laws. PRAMAAN's answer is to leave delivery with the states and to make accreditation the point of contact: states accept the standard because their own centres and commissions gain a funded security cell, at a 60:40 Centre-state split (component C10, Section 12).

The third is the Supreme Court, which controls the two questions on which the design is most exposed: when a cancellation is justified [F-P05] and whether surveillance meets the four-part privacy test [F-P21]. Neither is a veto over the statute. Both can strike down a policy that is careless on either count. The design's answer is the scoped-cancellation rule in Section 14 and the proportionality analysis in Section 15.

The negotiation is a two-level game in Putnam's sense. At one level the Centre bargains with the states over standards and money. At the other it faces courts, Parliament and a candidate public whose NEET-UG exam was cancelled in May 2026 and whose Education Minister resigned in July [F-B01] [F-B04]. An agreement acceptable to the states but not to the Supreme Court is worthless, and the reverse is equally true. The feasible region is narrow, and the design places its bets on the overlap: exam bodies retain delivery, the Centre holds keys and audit, and the courts get evidence.

### 8.4 Coaching institutions: victims, channels and beneficiaries

The brief lists coaching institutions as one stakeholder [B ST8]. The record shows three roles at once. They are victims when a paper is cancelled and their students' preparation is wasted. They are channels: in the 2026 NEET-UG leak, material spread through WhatsApp and coaching centres [F-B02]. And they are, in specific cases, participants: arrested persons included a physics teacher at a Pune medical coaching academy and a Latur coaching-institute owner [F-B02]. The sums are large. Families are reported to have paid ₹2 lakh to ₹10 lakh for the leaked 2026 material and one distributor is reported to have paid ₹15 lakh [F-B02, snip], against annual NEET coaching fees of ₹50,000 to ₹2,50,000 [F-A22]. The industry is reported at about ₹58,088 Cr, projected to reach ₹1,33,995 Cr by 2028 [F-A22] [snip]. Those numbers indicate that a leak can cost a family more than a year of coaching.

The design implication is a conflict bar between the people who write and translate papers and the people who sell preparation, described in Section 12, and disclosure and audit rules for coaching institutions. It is not an argument against coaching. The team's judgement is that coaching institutions are best treated as a Keep informed stakeholder whose cooperation is helpful and whose opposition is bounded, since a conflict bar affects setters and not students.

### 8.5 The missing owner: accountability lands on whoever is visible

The most important stakeholder finding is negative. No actor in the current system is accountable end to end. Table 8.5 sets out what the record shows for five events, and what happened afterwards.

| Event | Where custody or control failed | Who answered, per the record |
|---|---|---|
| NEET-UG 2024 | Strong-room back door left open at a Hazaribagh school; wrong bank's papers at 12 centres [F-B05] [F-P06] | NTA Director General removed on 22 June 2024 [F-B05] |
| UP Police Constable 2024 | Sealed consignment opened at a TCI Express warehouse in Ahmedabad [F-B08] | Exam agency Edutest blacklisted [F-B08]; board chair removed [F-A21] |
| BPSC TRE-3, March 2024 | Paper leaked at a Kolkata press before bar-coding [F-B09] | 266 arrested [F-B09] |
| SSC Selection Post Phase 13, 2025 | Frozen screens, server crashes, biometric failures [F-B12] | Cancelled at some centres; vendor Eduquity had earlier been accused over MP TET 2022 outsourcing [F-B12] |
| NEET-UG 2026 | Setters and translators [F-B02] | 47 NTA officials reported to have been terminated [F-P16] [snip]; Education Minister reported to have resigned [F-B04] |

In each case a consequence lands on someone: an official, a contractor, a board head. The pattern is that the consequence goes to the person at the node where the failure became visible and not to a role defined in advance to own the chain. The NTA's own CBT tender shows why. Clause 11.3 states that the NTA "shall not be responsible for any vulnerability in the software of the service provider and integrity of the exam functionaries deployed by them" [F-A20]. Clause 12 lets the vendor use third parties for exam manpower, CCTV, biometric authentication, including Aadhaar, and guards [F-A20]. Question preparation is outside the vendor's scope [F-A19]. The result is a contract in which the vendor is not responsible for the paper, the NTA disclaims the vendor's software and staff, and the third parties who handle identity are not parties to the contract. Everyone has a partial claim and nobody holds the whole.

The Radhakrishnan Committee saw the institutional half of this and recommended a Director General of Additional Secretary rank, ten verticals and permanent staff [F-P14]. The record shows the NTA at 39 permanent posts on deputation in July 2026 with 16 more proposed [F-A12], and the NTA recorded 65 lakh registrations across 12 exams in 2026 up to July [F-A02]. That is a large operational load for a small core. PRAMAAN responds with two structural choices that the stakeholder analysis supports. It creates one accountable owner for the whole chain, the Senior Responsible Officer named per exam, and it separates conducting from auditing, so that the body that runs an exam is never the body that certifies it. The details are in Section 12. What this section establishes is that the stakeholder map leaves no doubt about the diagnosis: the power is spread, the interest is concentrated, the custody is shared and the accountability is nobody's.

## 9. Risk framework: two risks score 20 of 25, and both sit before the exam hall

The brief asks for a risk framework that prioritises "key physical, cyber, insider and operational risks" across all eight lifecycle stages [B D1] [B LS1, LS2, LS3, LS4, LS5, LS6, LS7, LS8]. The framework here is an 8 by 4 grid of stage and risk type, scored by likelihood and impact, then reduced to a ranked register of ten risks with one mitigation each, an owner and a residual score. The result is that the two highest scores, 20 of 25, are both insider risks in question creation and question storage, which is to say before the paper reaches any centre.

### 9.1 Method, and what the scores are

The scores are the team's judgements. They are not model outputs in the sense that the cost-benefit numbers are, although they are stored in the model file so that the ranking is reproducible [T8]. Each cell is the product of two integers from 1 to 5.

Likelihood is derived from the frequency of incidents in the team's coded dataset for that stage and type [T7], adjusted for trend and for the number of independent opportunities at that stage (for example, 5,468 centres for NEET-UG alone [F-A03] raise the chance of a centre-level failure above what a raw count shows). Impact is derived from the number of candidates a single failure at that stage can reach, with 5 reserved for the compromise of a whole national paper affecting lakhs of candidates and lower values for failures that reach a centre, a batch or an individual. The thresholds are 15 or more critical, 10 to 14 high, 6 to 9 medium and 5 or below low.

The dataset is a documented sample, not a census. It holds 49 incidents from 2015 to 2026, coded by lifecycle stage and risk type with the rules in the raw record: 31 insider, 8 cyber, 7 physical and 3 operational [F-B19] [T7]. Where a cell has zero coded incidents, the score is a judgement from analogous evidence and the rationale below says so. Two limits should be kept in view. Press coverage favours large, cancelled events, so small incidents are under-recorded. And the scores are a prioritisation device: a difference of two points between neighbouring cells is within the margin of judgement, while the gap between a 20 and a 4 is not.

### 9.2 The heat map

| Stage | Insider | Physical | Cyber | Operational |
|---|---|---|---|---|
| LS1 Question creation | 20 | 5 | 10 | 6 |
| LS2 Question storage | 20 | 15 | 15 | 8 |
| LS3 Personnel access | 16 | 6 | 12 | 9 |
| LS4 Transmission | 15 | 12 | 8 | 6 |
| LS5 Examination centre | 12 | 9 | 6 | 6 |
| LS6 Candidate authentication | 4 | 6 | 4 | 4 |
| LS7 Examination | 9 | 8 | 16 | 12 |
| LS8 Evaluation and results | 9 | 2 | 8 | 9 |

Source: [T8]. Sums: seven cells reach 15 or more (critical), five more reach 10 to 14 (high). Reading down the columns, the insider column dominates the first four stages, the cyber column peaks at examination, and candidate authentication, the stage that attracts most public attention through biometrics, is the coolest row on the map. That last observation does not argue against identity checks. It argues that identity is a smaller part of the problem than the volume of investment in it suggests, and that its main case is the individual impersonator, not the syndicate.

### 9.3 A rationale for every cell

Each row gives likelihood (L), impact (I), score and one line of reasoning. Incident counts are from [T7] and named incidents from [T11].

| Stage | Type | L | I | Score | One-line rationale |
|---|---|---|---|---|---|
| LS1 Creation | Insider | 4 | 5 | 20 | All 4 coded creation incidents were insiders (MHADA 2021, KEA 2022, RPSC 2022, NEET-UG 2026); setters and translators saw up to 120 of 180 questions [F-B02] |
| LS1 Creation | Physical | 1 | 5 | 5 | No coded case; theft of a paper from a setter's premises would be as damaging as an insider leak but nothing in the record shows it |
| LS1 Creation | Cyber | 2 | 5 | 10 | No coded case; setters and translators work on devices, and TSPSC shows insiders retrieving papers from commission computers [F-B15] |
| LS1 Creation | Operational | 2 | 3 | 6 | No coded case; errors across translation into 13 languages are a standing possibility [Model], usually caught before they cancel an exam |
| LS2 Storage | Insider | 4 | 5 | 20 | 10 of 12 storage incidents were insiders, at presses and strong rooms (BPSC TRE-3 [F-B09]; GPSSB [F-B13]; REET 2021 [F-B16]; TSPSC [F-B15]) |
| LS2 Storage | Physical | 3 | 5 | 15 | One coded case (HP Police Constable 2022, 75,000 candidates); likelihood is lifted above the count because presses and strong rooms multiply physical custody points |
| LS2 Storage | Cyber | 3 | 5 | 15 | One coded case (MPPEB 2021); CBT tenders hand the paper to the vendor as a soft copy one hour before the exam [F-A19], so servers hold the whole paper |
| LS2 Storage | Operational | 2 | 4 | 8 | No coded case; custody mix-ups occur, as when Canara Bank papers were issued instead of SBI papers at 12 centres [F-B05] |
| LS3 Personnel access | Insider | 4 | 4 | 16 | All 6 coded access incidents were insiders (BSSC 2017, HCS Judicial 2017, ITBP 2021, Army CEE 2021, HPSSC 2022, UKPSC 2023); each reaches one or a few papers |
| LS3 Personnel access | Physical | 2 | 3 | 6 | No coded case; badge or key theft by outsiders is possible but the record shows privileged staff, not intruders |
| LS3 Personnel access | Cyber | 3 | 4 | 12 | No coded case at this stage; a TSPSC system administrator is reported to have retrieved papers from commission computers [F-B15], which is the digital form of access misuse |
| LS3 Personnel access | Operational | 3 | 3 | 9 | No coded case; stale accounts and unreturned keys are likely with 197 contract and outsourced staff beside 39 permanent posts at the NTA [F-A12] |
| LS4 Transmission | Insider | 3 | 5 | 15 | All 3 coded transmission incidents were insiders (TNPSC 2017 and 2019, UP Police 2024); logistics staff and a doctor opened a sealed consignment [F-B08] |
| LS4 Transmission | Physical | 3 | 4 | 12 | No coded case; trunks moved by open e-rickshaw in NEET-UG 2024 [F-B05] and the Court listed unreliable transport [F-P06] |
| LS4 Transmission | Cyber | 2 | 4 | 8 | No coded case; most papers still move physically, and encrypted e-transmission is the Radhakrishnan remedy [F-P14] |
| LS4 Transmission | Operational | 2 | 3 | 6 | No coded case; wrong-set delivery at 12 centres [F-P06] is recoverable at centre level |
| LS5 Centre | Insider | 4 | 3 | 12 | 2 of 4 centre incidents (UP BTC 2018; NEET-UG 2024 Hazaribagh, photographed 8:02, with conspirators 9:23, solved 10:40 [F-B05]); many centres, local staff; contained to centre level [F-P04] |
| LS5 Centre | Physical | 3 | 3 | 9 | 2 coded cases (GSSSB Clerk 2019, 6 lakh candidates; KPTCL 2022); device and door failures at individual centres |
| LS5 Centre | Cyber | 2 | 3 | 6 | No coded case at centre level; remote-access compromises are coded to LS7, so the centre network is a secondary route |
| LS5 Centre | Operational | 3 | 2 | 6 | No coded case; power, seating and paper-set errors are common and recoverable within a day |
| LS6 Authentication | Insider | 2 | 2 | 4 | No coded case; staff waving through a dummy candidate affects one seat at a time |
| LS6 Authentication | Physical | 3 | 2 | 6 | All 3 coded authentication incidents were physical impersonation (HSSC 2021, NEET-UG impersonation 2021, PPSC 2022); individual scale |
| LS6 Authentication | Cyber | 2 | 2 | 4 | No coded case; spoofing a face match is possible but UPSC pairs face authentication with liveness checks [F-A17] |
| LS6 Authentication | Operational | 2 | 2 | 4 | No coded case at this stage; false rejects at gates are an access problem and a small one (biometric failures at SSC Phase 13 are coded to LS7 [F-B12]) |
| LS7 Examination | Insider | 3 | 3 | 9 | No coded case; invigilator collusion in a hall is plausible across thousands of centres but reaches a room, not a national paper |
| LS7 Examination | Physical | 4 | 2 | 8 | One coded case (AIPMT 2015); devices and solver gangs are the everyday form of malpractice but affect individuals |
| LS7 Examination | Cyber | 4 | 4 | 16 | 7 of 10 examination incidents were cyber: remote access at CBT centres (JEE Main 2021, over 820 reported [F-B10]; GUVNL 2020, 2,156 candidates [F-B11]) |
| LS7 Examination | Operational | 3 | 4 | 12 | 2 coded cases: the UGC-NET 2024 doctored-screenshot alarm cancelled an exam for 9.08 lakh [F-B07]; SSC Phase 13 crashes [F-B12] |
| LS8 Results | Insider | 3 | 3 | 9 | 6 of 7 results incidents were insiders (TRB 2017, UPSSSC 2018, MAHA-TET 2020, APSSB 2020, Karnataka Police SI 2021, NEET-UG Godhra 2024); typically batch-level tampering |
| LS8 Results | Physical | 1 | 2 | 2 | No coded case; physical tampering with OMR sheets is the lowest-scoring cell on the map |
| LS8 Results | Cyber | 2 | 4 | 8 | No coded case; a marks database or results portal is a single system, so a compromise would be systemic if it happened |
| LS8 Results | Operational | 3 | 3 | 9 | One coded case (APPSC Group-I Mains 2020); 1,563 grace marks were later withdrawn with a retest [F-B06], and multi-shift normalisation adds a scoring dependency [F-P18] |

Count of cells scored 15 or more: LS1 insider (20), LS2 insider (20), LS3 insider (16), LS7 cyber (16), LS2 physical (15), LS2 cyber (15), LS4 insider (15), which is seven [T8]. The seven cells fall in five stages, and six of them fall before the centre. This is the arithmetic behind the headline of the section.

### 9.4 The top-10 register with 1:1 mitigation

The ten highest-scoring cells, ranked by score and then by the number of coded incidents behind them, form the register in Table 9.4. Each risk is paired with exactly one primary mitigation, an accountable owner and a residual score. The initial scores come from the heat map [T8]. The ranking is the model's [Model]. Owners and residual scores are the team's proposal and its judgement: residual scores estimate what the cell would score once the mitigation is working at full coverage, using the same likelihood and impact scales as Section 9.1, and no model or source computes them.

| Rank | Risk (incident evidence) | Stage | Type | Score | Mitigation in PRAMAAN | Owner | Residual |
|---|---|---|---|---|---|---|---|
| 1 | A press or vault insider copies the finished paper (BPSC TRE-3 2024, leaked at a Kolkata press before bar-coding [F-B09]; GPSSB 2023, a press employee handed over a copy [F-B13]; 10 of 12 storage incidents were insiders [T7]) | LS2 storage | Insider | 20 | No complete paper exists until T−60 minutes; per-copy forensic watermark; smart-lock custody [Model] | Senior Responsible Officer of the exam, audited by NEIAA | 8 |
| 2 | A setter or translator leaks items (NEET-UG 2026, up to 120 of 180 questions [F-B02]; RPSC 2022, an RPSC member is reported to have received ₹60 lakh to leak the paper [F-B14]) | LS1 creation | Insider | 20 | Item bank 20 times the paper length; 5% cap on what any one person sees; coaching conflict bar; sequestration of about 2,000 setters and translators [Model] | NEIAA (Item Bank Vault) | 9 |
| 3 | Remote access to CBT nodes (JEE Main 2021, over 820 candidates reported [F-B10]; GUVNL 2020, 2,156 candidates [F-B11]; 7 of 10 examination incidents were cyber [T7]) | LS7 examination | Cyber | 16 | Locked node image, remote-access and USB ports disabled, network monitoring by CERT-Exam | CERT-Exam, with the accredited vendor | 8 |
| 4 | An official sells access (UKPSC 2023, ITBP 2021, Army CEE 2021 [T11]; all 6 coded access incidents were insiders [T7]) | LS3 personnel access | Insider | 16 | Just-in-time access, 3-of-5 split keys, vetting, rotation, two-person integrity | NEIAA, with each exam body's Senior Responsible Officer | 8 |
| 5 | Stored papers are stolen (HP Police Constable 2022, 75,000 candidates [T11]) | LS2 storage | Physical | 15 | Smart-lock boxes, GPS tracking, tamper-evident seals | State Examination Security Cell | 9 |
| 6 | Server or file theft (MPPEB 2021 [T11]; TSPSC 2023, a system administrator retrieved 15 papers from commission computers [F-B15]) | LS2 storage | Cyber | 15 | Air-gapped vault, hardware security module encryption, data-loss control | NEIAA and CERT-Exam | 6 |
| 7 | Logistics staff open sealed boxes (UP Police 2024, a TCI Express warehouse in Ahmedabad [F-B08]; 4.8 million candidates [T11]) | LS4 transmission | Insider | 15 | Encrypted e-delivery of files, printing at the centre, smart locks; only a reserve stock moves physically | Exam body, with the State Examination Security Cell | 6 |
| 8 | Platform crash or false alarm (SSC Selection Post Phase 13, 2025 [F-B12]; UGC-NET 2024, 9.08 lakh candidates [F-B07]) | LS7 examination | Operational | 12 | Vendor cap of 40% of national CBT volume, buffer nodes, a 24-hour leak-verification protocol | NEIAA (accreditation) | 8 |
| 9 | Misuse of administrator credentials by an insider (TSPSC 2023, as reported [F-B15]) | LS3 personnel access | Cyber | 12 | Hardware keys, zero-trust sessions per NIST SP 800-207 [F-D14], access logs | CERT-Exam | 6 |
| 10 | Centre staff open a strong room (NEET-UG 2024, Hazaribagh: photographed at 8:02, with conspirators by 9:23, solved by 10:40 [F-B05]) | LS5 examination centre | Insider | 12 | Keys reach the centre at T−30 minutes; dual custody; CCTV alerts to the state cell | State Examination Security Cell | 6 |

Sources: [T8] for scores, [Model] for rank order, [F-B05] to [F-B15] and [T11] for incidents. Owners and residual scores are the team's proposal and judgement.

Three readings of the register matter. First, the top ten sum to 153 points and the residual column sums to 74, a fall of about half. That is a judgement about how far a control set can push a cell, and it should be read with the same margin as the heat map: two points either way on a single row changes nothing about the ordering. Second, no row is fully closed. Rows 1 and 2, the two insider cells at the top, retain 8 and 9 because a person who sees 5% of a bank can still leak that 5%, and because the setter's knowledge of the subject does not disappear. What changes is the value of what is leaked, which Section 14 quantifies as a fall in the seller's expected value from +₹14.0 Cr to −₹5.44 Cr [Model]. Third, seven of the ten rows are held by a body other than the exam conductor, either NEIAA, CERT-Exam or a state cell. That is deliberate: a register in which the conductor owns and mitigates its own top risks recreates the self-audit problem that Section 12 argues against.

### 9.5 Threat-actor profiles

A register ranks cells. A profile asks who would attack them, why, and with what access. Six actors cover the incident record. Table 9.5 sets out motive, access, the stage they usually strike, the tagged evidence, and PRAMAAN's effect. The profiles are the team's synthesis of the incidents, not a criminological study, and the incident record is a sample [F-B19].

| Actor | Motive | Access | Typical stage | Evidence from the record | What PRAMAAN does |
|---|---|---|---|---|---|
| Insider setter or translator | Money at a high multiple of salary; sometimes ideology or coaching ties | Whole paper or large parts, before any control applies | LS1 creation | NEET-UG 2026: an NTA translator and an NTA physics subject expert were among those arrested; up to 120 of 180 questions matched [F-B02]. RPSC 2022: ₹60 lakh [F-B14] | Removes the whole paper from any one head; a person sees at most 5% of a bank; conflict bar; sequestration |
| Printing or logistics staff | Opportunity plus a buyer network | Sealed packets, print files, warehouses | LS2 storage, LS4 transmission | BPSC TRE-3: leaked at a Kolkata press before bar-coding [F-B09]; GPSSB: press employee [F-B13]; UP Police 2024: warehouse staff and a doctor opened a consignment [F-B08] | Nothing complete to steal until T−60; encrypted e-delivery; per-copy watermark traces the source copy |
| Organised syndicate | Resale at scale: ₹2 lakh to ₹10 lakh a buyer in NEET-UG 2026 [F-B02]; ₹10 lakh or more in BPSC TRE-3 [F-B09] | Buys access from insiders; runs the distribution | LS1 to LS4, and results tampering | NEET-UG 2024: 155 beneficiaries identified, 36 arrested [F-B05]; BPSC TRE-3: 266 arrested [F-B09]; 41 documented leaks in 15 states in five years [F-B17] | Cuts revenue per leak from ₹15.0 Cr to ₹0.56 Cr and lifts detection to 60% [Model] [A16] |
| Remote-access gang | Per-seat fees at CBT centres | Centre network, a machine or a complicit operator | LS7 examination | JEE Main 2021: ₹12 lakh to ₹15 lakh per admission, over 820 beneficiaries reported [F-B10]; GUVNL 2020: 2,156 candidates [F-B11]; RRB JE 2019 and MP TET 2022 [F-B11] | Locked node image, no remote ports, network monitoring, per-shift forms so a solved seat helps only one form |
| Lone opportunist | Personal advantage or a small fee | A device, a dummy candidate, a bribed invigilator | LS5 centre, LS6 authentication | 3 of 3 coded authentication incidents were physical impersonation: HSSC 2021, NEET-UG 2021, PPSC 2022 [T7] [T11] | 1:1 face match with liveness; alternate-ID desk; contained to one seat |
| Hoaxer | Small payment; effect is disruption | A screenshot and a channel | Announcement, LS7 | UGC-NET 2024: the CBI closure report is reported to say a juvenile had doctored and backdated a screenshot and was let off after counselling; the exam was cancelled for 9.08 lakh candidates [F-B07, S11] | Watermark and custody ledger disprove a fake within 24 hours; scoped response; 24-hour leak verification |

The first two profiles carry the money and the damage. Insider cases at creation, storage, personnel access and transmission account for 23 of the 49 coded incidents (4, 10, 6 and 3) [T7]. What distinguishes them from the others is that they hold the object and not merely a route to it. A remote-access gang has to defeat a network to win a seat. A setter has the paper already. That asymmetry is why the heat map puts insider cells at the top of the ranking, and it is why controls that assume the paper exists as a finished object, such as vaults and sealed transport, are guarding the wrong thing when the setter is the seller.

The syndicate is best understood as a market maker. It aggregates supply, an insider willing to sell, and demand, the families paying ₹2 lakh to ₹10 lakh [F-B02], and takes a margin. Markets respond to price and to risk. PRAMAAN acts on both: it shrinks what an insider can supply, which lowers the value of the goods, and it makes the goods traceable, which raises the seller's exposure. The model's attacker economics assume 300 buyers at ₹5 lakh, a detection probability of 10% today and 60% under PRAMAAN, and a ₹10 Cr fine [A16]. Those parameters are illustrative, and the qualitative result, that a leak stops paying its seller, does not depend on any single one of them.

The hoaxer deserves separate treatment because the damage is not the leak but the response. The UGC-NET 2024 cancellation cost about 9.08 lakh candidates a re-test on the strength of a doctored image [F-B07]. A defence that can prove a fake is as valuable as one that prevents a leak, and per-copy watermarks give it that ability. The lone opportunist matters mainly for fairness at the individual level. The heat map scores the authentication row as its coolest [T8], and the profile explains why: impersonation is a one-seat crime, and its cost to the system is small next to a compromised paper.

### 9.6 Two attack trees

An attack tree starts from an attacker's goal and decomposes it into the ways of achieving it. The two below are text renderings. Cost ordering is the team's judgement and rests on the incident record for what has actually worked. The cheapest path is marked with ">>>". Each branch carries PRAMAAN's control.

**Tree A. Goal: obtain the NEET-UG paper before the exam**

```
GOAL: hold the paper before 2 pm on exam day
|
+-- A1. Buy a setter, moderator or translator            >>> CHEAPEST PATH
|      Evidence: NEET-UG 2026, up to 120 of 180 questions [F-B02];
|      RPSC 2022, ₹60 lakh [F-B14]
|      PRAMAAN: no person sees over 5% of a 20x bank; the "paper" is
|      assembled at T-60 from one of 96 forms; sequestered setters;
|      coaching conflict bar
|
+-- A2. Copy it at the press or the print file
|      Evidence: BPSC TRE-3 [F-B09]; GPSSB [F-B13]
|      PRAMAAN: no print run of a national paper; forms assembled at
|      T-60; per-copy watermark; smart-lock custody
|
+-- A3. Open it in transit or at a warehouse
|      Evidence: UP Police 2024 [F-B08]; NEET-UG 2024 trunks by
|      open e-rickshaw [F-B05]
|      PRAMAAN: encrypted e-delivery; print at the centre; smart locks
|
+-- A4. Open the strong room at the centre
|      Evidence: Hazaribagh 2024, photo at 8:02, solved 10:40 [F-B05]
|      PRAMAAN: keys reach the centre at T-30; dual custody; CCTV alert
|
+-- A5. Steal it digitally from a server or a computer
|      Evidence: TSPSC 2023, administrator retrieved papers [F-B15];
|      MPPEB 2021 [T11]
|      PRAMAAN: air-gapped HSM vault, 3-of-5 key release,
|      zero-trust sessions [F-D14]
|
+-- A6. Fake a leak to cause a cancellation
       Evidence: UGC-NET 2024, doctored screenshot [F-B07]
       PRAMAAN: watermark and ledger disprove it within hours
```

A1 is the cheapest because it needs one purchase and no technical skill, the buyer's price is small next to the resale value (₹2 lakh to ₹10 lakh per family across 300 buyers, per [A16]) and the item arrives complete. The record shows this path succeeding at the top of the system in 2026, and again in 2025 if the CBI's finding that the 2025 paper was also compromised is taken at face value [F-B03]. Every other branch requires a physical or technical step that the record shows being caught or contained more often: the Hazaribagh case was solved in under three hours and was held by the Court to be limited to Patna and Hazaribagh [F-B05] [F-P04]. The design point is that PRAMAAN concentrates its heaviest spending on the A1 branch, through the item bank and conflict rules, and treats A2 to A5 as branches where the same control (nothing complete to steal until the last hour) removes the value from the path even when the path stays open.

**Tree B. Goal: compromise a CBT node so that a candidate receives answers**

```
GOAL: a paying candidate receives correct answers during the exam
|
+-- B1. Remote-access software or hardware on the node   >>> CHEAPEST PATH
|      Evidence: JEE Main 2021, Sonepat, ₹12 to 15 lakh a seat [F-B10];
|      Rajasthan Police 2018, RRB JE 2019, MP TET 2022 [F-B11]
|      PRAMAAN: locked node image; remote-desktop, USB and other ports
|      disabled (a control the NTA tender already specifies [F-A19]);
|      network SOC monitors sessions; per-shift forms
|
+-- B2. Compromise the exam software through the vendor
|      Evidence: arrest of a Russian national for hacking iLeon
|      software, JEE Main 2021 [F-B10]
|      PRAMAAN: accredited vendors, independent red teams, vendor
|      strict liability
|
+-- B3. Complicit centre operator installs a screen-splitter
|      Evidence: GUVNL 2020, 8 centres, 2,156 candidates [F-B11]
|      PRAMAAN: lab hardening, wired CCTV, dual custody, state-cell
|      accreditation, de-accreditation for blind spots
|
+-- B4. Extract the question set from the platform
|      Evidence: tender hands the soft copy to the vendor one hour
|      before the exam [F-A19]
|      PRAMAAN: keys released 3-of-5 at T-60; the node holds only its
|      own form; no full paper on any server
|
+-- B5. Disrupt the platform and force a cancellation
|      Evidence: SSC Phase 13 2025 [F-B12]
|      PRAMAAN: 40% vendor cap, buffer nodes, scoped re-test of one form
|
+-- B6. Impersonate the candidate with a solver
       Evidence: authentication incidents [T7]
       PRAMAAN: 1:1 face match with liveness; alternate-ID desk
```

B1 is the cheapest for the same reason A1 is: it exploits a trusted position. The remote-access gang needs one machine at one centre and a solver in a room elsewhere. The PRAMAAN control is not exotic. The NTA's own tender already disables remote desktop and sensitive ports [F-A19], so the design's addition is verification, not invention: a locked image that CERT-Exam can attest at the start of every session, and a network monitor that flags a session opened from outside. The larger point is the second-order one. Even a successful B1 attack helps a candidate on one form in one shift, not a national population, because parallel forms confine the value of any solved seat. That containment is what the blast-radius arithmetic in Section 11 quantifies.

### 9.7 The six brief challenges mapped to the risks

The brief lists six challenges, CH1 to CH6 [B CH1, CH2, CH3, CH4, CH5, CH6], and a fundamental challenge that security must be strengthened "without making the examination ecosystem prohibitively expensive, inaccessible or overly centralised" [B CH0]. Table 9.7 ties each to the heat-map cells that express it and to the section of this document that answers it.

| Challenge | Heat-map cells that express it | Answered in |
|---|---|---|
| CH1 Insider risk | LS1 insider 20, LS2 insider 20, LS3 insider 16, LS4 insider 15, LS5 insider 12 [T8]; register rows 1, 2, 4, 7, 10 | Section 11 (item bank, split keys, watermark); Section 12 (conflict bar, vetting); Section 14 (liability, whistle-blower rewards) |
| CH2 Cyber-physical risk | LS2 physical 15, LS2 cyber 15, LS7 cyber 16, LS4 physical 12, LS5 physical 9 [T8]; register rows 3, 5, 6 | Section 13 (encryption, locked nodes, smart locks, CCTV and network monitoring) |
| CH3 Centralisation risk | LS2 cyber 15 (a vault or server holds the whole paper), LS8 cyber 8 (a single results system) [T8]; blast radius of 22.7 lakh [Model] | Section 10.4 (structures); Section 11 (blast radius by design); Section 12 (NEIAA audits, does not conduct) |
| CH4 Third-party dependence | LS7 cyber 16, LS7 operational 12, LS4 insider 15 (logistics) [T8]; register rows 3, 7, 8; contract cl. 11.3 and 12 [F-A20] | Section 12 (vendor accreditation, 40% cap); Section 14 (strict liability, contract reform) |
| CH5 Cost versus security | Every cell in Table 9.4; opex against the Gordon-Loeb ceiling [F-D16] | Section 16 (cost-benefit: 3.14 benefit-cost ratio, opex 20% of expected annual loss) [Model] |
| CH6 Privacy versus surveillance | LS5 and LS6 rows, LS7 cyber; the authentication row is the coolest at 4 to 6 [T8] | Section 15 (Puttaswamy test, DPDP Rules, deletion 90 days after results) |

Two conclusions follow. The challenges are not evenly spread across the map. CH1 covers four of the seven critical cells, CH2 and CH4 share the other three, while CH6 touches the cells with the lowest scores. That is the reason the brief's privacy tension matters less for the heat map than the attention it draws would suggest: the cells where biometrics and surveillance operate are not where most of the risk sits [T8]. It matters more for the legal design, which Section 15 treats separately. And CH3 is the only challenge that the design must answer by structure and not by control, since centralisation is a property of who holds what, which is the subject of Section 10.

## 10. Options appraisal: six strategic options and three structures, filtered on one set of criteria

The brief lists six strategic options, SO1 to SO6, and asks that the solution "reduce the probability of compromise, contain the impact of failure, and make the cost of attack significantly higher than its expected benefit" [B SO0]. It also asks whether examination security should be centralised, decentralised or hybrid [B Q1]. Both questions can be answered with the same discipline: fix the criteria first, score every candidate against all of them, and let the pattern of scores, not preference, argue the case. This section does that for the six options and for the three structures, then draws the conclusion that shapes the rest of the document.

### 10.1 The criteria

Six criteria are used, each scored 0 to 3. The first three are the brief's own objective, split into its three verbs. The other three are the constraints the brief names elsewhere and that the jury will apply.

| # | Criterion | What a score of 3 means |
|---|---|---|
| 1 | Reduces the probability of compromise | Acts on the highest-scoring heat-map cells [T8] and removes an attack route |
| 2 | Contains the blast radius | Cuts the candidates exposed by one failure, measured against 22.7 lakh [Model] |
| 3 | Raises the cost of attack relative to its benefit | Lowers seller revenue or lifts detection so that expected value turns negative [A16] |
| 4 | Cost | Low incremental cost against the ₹673.5 Cr steady-state opex envelope [Model] |
| 5 | Privacy | Adds little personal-data processing, or supplies its own safeguards [F-P21] |
| 6 | Feasibility | Can be legislated, procured and staffed in the roadmap window given the veto points in Section 8.3 |

Probability, blast radius and cost of attack are kept apart because they are different things. A control can lower how often a compromise occurs without changing what a compromise reaches, and the brief asks for both. The remaining criteria stop the filter from rewarding options that are effective but unaffordable, unlawful or impossible to pass through the states.

### 10.2 The MECE filter

Table 10.2 scores each option as a stand-alone solution. The scores are the team's judgements. They are derived in three steps: for each option, the analyst reads which heat-map cells the option acts on (using Table 9.3), what evidence exists that the option has worked at scale in the international record (Section 7) or in India (Section 4), and what the option does to the seller's expected value in the attacker model [A16]. The score for privacy reflects how much personal data the option adds. Scores can move by one point on any cell, and the totals should be read in bands, not as points.

| Option | Probability | Blast radius | Cost of attack | Cost | Privacy | Feasibility | Total (of 18) |
|---|---|---|---|---|---|---|---|
| SO1 AI-assisted security | 1 | 0 | 1 | 2 | 1 | 2 | 7 |
| SO2 Multi-layered authentication | 1 | 0 | 1 | 2 | 1 | 3 | 8 |
| SO3 Zero-trust architecture | 2 | 2 | 2 | 2 | 2 | 2 | 12 |
| SO4 Distributed question-paper architecture | 2 | 3 | 3 | 2 | 3 | 2 | 15 |
| SO5 Risk-based security | 2 | 1 | 1 | 3 | 3 | 3 | 13 |
| SO6 Integrated governance | 2 | 1 | 3 | 2 | 2 | 1 | 11 |

Source: team judgement on 0 to 3 scales, using [T8], [T7], [A16] and Sections 4 and 7. The option names are the brief's [B SO1, SO2, SO3, SO4, SO5, SO6].

The reasoning behind the extremes is short. SO1 and SO2 score lowest because the cells they act on are not where the risk is. AI analytics and layered authentication mainly address examination-hall behaviour and identity, and the authentication row is the coolest on the map at 4 to 6 [T8]. Neither reduces what a setter or press insider can reach, so neither changes the blast radius, and each adds personal data, so privacy scores 1. SO4 scores highest because it is the only option that acts on all three of the brief's verbs together: it lowers the value of any one compromise (blast radius 3), which lowers the seller's revenue and expected value (cost of attack 3), and it adds no new personal-data burden (privacy 3). Its feasibility is 2, not 3, because a calibrated item bank needs psychometric capacity that India has not yet built at scale [F-D09] [Model]. SO6 scores low on feasibility because a new statutory authority passes through Parliament and the states, both veto points, and because an authority alone does not change what any person can see. What it adds is certainty of detection and liability, which is why its cost-of-attack score is 3.

SO3 scores 12 because zero trust limits what any one credential or session can do, which contains insider risk in the digital layer. It has less effect on physical custody and on the setting stage, where a human holds content. SO5 scores 13, mostly on cost, privacy and feasibility: risk-based tiering spends less on low-stakes exams and is easy to adopt. It does not by itself reduce what a compromise reaches, so its blast-radius score is 1.

### 10.3 No option works alone: SO4 and SO6 are the spine

Three patterns in Table 10.2 argue against picking a winner. The highest total, 15 of 18, still leaves feasibility and probability short of full marks. Every option has at least one zero or one in a column that the brief treats as an objective. And the options act on different stages: SO4 works on creation, storage and transmission, SO3 on access and systems, SO2 and SO1 on the hall and the candidate, SO5 on allocation of effort, and SO6 on who answers afterwards. A filter that selected only the highest-scoring option would leave most of the map uncovered. Table 9.4's register shows this: rows 1, 2 and 7 (scores 20, 20 and 15) have their primary mitigation in the SO4 family; rows 3, 4, 6, 9 and 10 depend on SO3-type controls and on physical custody; and row 8 depends on the governance rules of SO6 [Table 9.4].

PRAMAAN therefore assigns roles. SO4 and SO6 are the spine, because they are the two options that change structure. SO4 changes what can be stolen. SO6 changes who is accountable and how strong the incentive to detect is. The four other options become layers on that spine:

| Layer | Role in PRAMAAN | Why it is a layer, not the core |
|---|---|---|
| SO4 Distributed paper architecture (spine) | Item bank 20 times the paper; 96 parallel forms for NEET-UG; assembly at T−60; 5% person cap [Model] | Changes the prize |
| SO6 Integrated governance (spine) | NESC, NEIAA, Senior Responsible Officers, 36 state cells, strict vendor liability | Changes who answers |
| SO3 Zero trust | Just-in-time access, split keys, locked nodes, per-session policy [F-D14] | Limits what one credential can do; does not shrink the paper |
| SO5 Risk-based security | Three tiers by exam size; full stack for exams of 5 lakh or more [Slide 5 tier table] | Allocates effort; keeps cost at ₹135 a sitting |
| SO2 Multi-layered authentication | 1:1 face match with liveness at the gate; alternate-ID desk | Stops individuals; not syndicates |
| SO1 AI-assisted security | Answer-similarity, response-time and network analytics that flag and never decide | An analyst; useful only after the paper is protected |

The sequence matters. Layers placed on a leaking spine buy little: an AI monitor that flags anomalies in a hall cannot detect a paper that left from the setting stage weeks earlier. Layers placed on a spine that already shrinks the prize add real value, because they now guard a smaller and less valuable asset. This is the structural argument the brief anticipated when it observed that greater technological sophistication "can simply shift the point of vulnerability" [B CS10].

### 10.4 Q1: central, federal or hybrid by function

Q1 asks whether examination security should be centralised, decentralised or hybrid [B Q1]. Table 10.4 compares three structures on the five criteria used in the deck's Slide 5, with the values shown there. "Central" means one body sets, holds and conducts. "Federal" is the present fragmented position, in which the NTA, UPSC, SSC, the RRBs, IBPS and state commissions each hold their own standards and custody. "Hybrid by function" is PRAMAAN.

| Criterion | Central | Federal (today) | Hybrid by function (PRAMAAN) |
|---|---|---|---|
| Single failure point | High | Low | Low |
| Common standards | Strong | Weak | Strong |
| Uses state capacity | Weak | Strong | Strong |
| Blast radius of one compromise | 22.7 lakh | Varies | 23,646 |
| Response speed | Slow | Uneven | 6 hours |

Source: team judgement on the five criteria; blast radius from [Model]; six-hour clock from [F-P20] and the accountability design in Section 14.

Each row rests on a specific reason. **Single failure point.** A central model that conducts every exam and holds every paper concentrates risk in one platform and one vault. The NTA's own tender shows the pull toward that outcome: volume slabs cut the per-candidate rate to 0.50x at 2.75 to 3 crore tests, which rewards a single winner [F-A20]. A federal model has many bodies, so no single failure takes everything down. PRAMAAN keeps delivery federated and caps any vendor at 40% of CBT volume.

**Common standards.** Federal is weak because six states have written six regimes on unfair means [F-P13] and the central and state agencies apply different controls; the Indian Express counted 41 leaks in 15 states [F-B17]. Central and hybrid are strong because one national security standard binds all of them. The team's proposal is the National Examination Security Standard (NESS), owned by the NEIAA.

**Uses state capacity.** Central scores weak because it would have to build what states already run: 36 states and union territories operate their own commissions, and about 2 crore sittings a year sit with them [A02]. Hybrid uses it by making the State Examination Security Cell the accreditor and custodian of district-level custody, funded 60:40 [Model]. This is the veto-player consideration of Section 8.3 written into the structure.

**Blast radius.** A single national paper reaches 22,70,000 candidates. The Government's announced CBT plan, at about 20 shifts, would expose about 1,13,500 per compromised shift and is based on reported plans [Model] [F-P18] [snip]. Under federal delivery, the number depends on the exam: NEET-UG is 22.7 lakh, UP Police 2024 was 48 lakh applicants [F-A21], and a small state exam may be a few thousand, so the entry is "varies". PRAMAAN's figure is 23,646 (96 forms) [Model].

**Response speed.** A central body handling every incident is slow because every response queues at one desk. A federal system responds unevenly, since each body has its own capacity and notification habits: the NTA has 39 permanent posts beside 197 contract and outsourced staff [F-A12]. PRAMAAN puts one six-hour clock on all of them, taken from the CERT-In rule [F-P20], with CERT-Exam as the sectoral response team.

### 10.5 "Hybrid" alone is not an answer; "hybrid by function" is

The word hybrid has been used in Indian policy debates for anything that is neither wholly central nor wholly state. Left undefined it settles nothing, because the same word can describe a central body that conducts and states that help, or the reverse. Three tests show the difference.

First, a hybrid is an answer only if it says what goes where. PRAMAAN's rule is functional: things that must be identical everywhere, or that must never sit in one place with one person, are central (the standard, the item-bank vault, the key release, the security operations centre and the audit); things that depend on local presence and existing capacity are federated (conducting the exam, owning item content, running centres and district custody). The line between them follows the risk, which is why the trust plane is small and the delivery plane is large.

Second, a hybrid is an answer only if it separates conducting from auditing. Most fragmented systems and most central ones fail on this: the body that runs an exam certifies it. PRAMAAN gives NEIAA the audit and accreditation role and bars it from conducting any exam, so the assurer never marks its own work.

Third, a hybrid is an answer only if its central element does not itself become a single point of failure. The vault is the obvious candidate, which is why the design splits the key 3-of-5 across independent institutions [F-D15] and why the bank holds calibrated items and not finished papers. The team acknowledges the trade-off: a national vault is a new central asset. The blast-radius arithmetic explains why it is acceptable, since a compromised vault would still yield a bank in which no complete paper exists and no form is assembled until T−60. That reasoning is set out in Section 11 and tested in Section 19.

A structure that is only "hybrid" would score as Federal on the Slide 5 criteria, with a more complicated org chart. Hybrid by function differs on each row of Table 10.4.

### 10.6 Conclusively

Sections 6 to 10 build the case in five moves. Section 6 shows that India has raised the price of a leak fivefold while detection and execution lag, so a further increase in severity buys little. Section 7 shows that the systems with the best reported results limit what one person can see or touch. Section 8 shows that the power to change the system is spread across three veto points while accountability for the chain belongs to nobody. Section 9 shows that the two highest risks, each scoring 20 of 25, sit in question creation and storage, before the exam hall, and that the threat actors who exploit them hold the paper itself. Section 10 shows that no single option in the brief's list addresses all of that, that the two structural options, SO4 and SO6, do the most work when combined, and that the answer to Q1 is a hybrid defined by function, not a hybrid by label.

The consequence is that PRAMAAN is not a more forceful version of the response India announced in July 2026. It is a different theory of the problem. The announced response raises penalties, replaces staff and moves to CBT [F-P16] [F-P17] [F-P18]. PRAMAAN changes what a thief can steal and who can steal it, and it makes accountability follow the breach. The remaining sections describe the architecture in detail, price it, test it and state its weaknesses.

## 11. The recommended architecture: PRAMAAN centralises trust, federates delivery and shrinks the prize

This section sets out the architecture itself. Everything in it is the team's proposal. Where it leans on an existing law, standard or practice, the fact ID is tagged; where it goes beyond the fact base (the choice of key holders, the exact number of forms, the exposure cap), it is marked as a design choice and its arithmetic is shown so a reader can test it. The argument in one line: the Government's 2026 response makes a leak more expensive to attempt, while PRAMAAN makes a leak worth less to steal, and it does so by changing what a compromised person or system can reach rather than by adding more people to watch them [B Q1, B Q2].

### 11.1 Three planes, one owner per plane

PRAMAAN answers the brief's first question, "Should examination security be centralised, decentralised or hybrid?" [B Q1], with a split by function rather than by geography. Three planes carry the work.

| Plane | Character | What sits in it | Who runs it |
|---|---|---|---|
| Trust plane | Central | National Item Bank Vault; 3-of-5 split-key release; the National Examination Security Standard (NESS); CERT-Exam, the exam-sector security operations centre | NEIAA, with CERT-In as one key holder |
| Assurance plane | Independent | Accreditation of vendors and centres; audits and red teams; incident command; public root-cause reports | NEIAA, with an independent auditor and the CAG above it |
| Delivery plane | Federated | Conduct of exams by NTA, UPSC, SSC, RRBs, IBPS and state commissions; 36 State Examination Security Cells; accredited vendors under a 40% volume cap; 2,500 hardened government labs | Exam bodies and states |

The central plane is deliberately narrow. It holds encrypted items, keys and standards, and it never conducts an exam. The federated plane is deliberately wide. It keeps the people, centres and logistics that already exist, because India's system runs about five crore high-stakes sittings a year across dozens of bodies [T1, A02] and no single agency has the capacity to absorb that volume. The brief names centralisation risk as one of its six challenges [B CH3]; the plane split is the team's answer to it. What is centralised is the part that benefits from one standard and one audit trail. What is federated is the part that needs local capacity.

The choice is not a compromise between two extremes. A central conductor concentrates the blast radius (one paper, one platform, one vendor pool), and a fully federal system produces uneven standards and slow response. Section 10 scores the three structures on the same criteria; the recommendation here is the design that follows from that score.

### 11.2 Principle 1: shrink the prize

The 2026 NEET-UG leak is the reference case. Up to 120 of the 180 questions matched a pre-circulated "guess paper", and the people arrested included an NTA translator and an NTA physics subject expert [F-B02]. The paper leaked because a small number of trusted people each saw most of it. Locks, cameras and heavier penalties did not touch that fact. The design response is to make sure that no one sees most of anything.

Four mechanisms do this work together.

**A calibrated item bank twenty times the length of a paper.** Each Tier-1 exam draws from a bank holding 20 times the number of items in a single paper. The model prices a national bank of 45,000 calibrated items, on a costing basis of 15 Tier-1 exams, 150 items a paper on average and a 20-fold bank, at ₹25,000 an item including translation into 13 languages and pre-testing [Model, T3, C02]. That costing basis is a simplification: an individual paper such as NEET-UG's 180 questions [F-B02] sits above the average, and its bank would be correspondingly larger. The point of the multiplier is that a leaked item is a small fraction of the material that could have been used, and that a bank of this depth cannot be memorised, photographed or sold as a "paper".

**A 5% cap on what any person sees.** No setter, moderator or translator handles more than 1/20 of a bank. The cap is a hard ceiling that NEIAA enforces through the custody ledger, not a guideline [Model, exposure cap 1/20]. Item-level translation follows the same rule: translators receive items, never papers, and the same cap applies within each language pool.

**An expected exposure of 1/40 of any form.** A form is a random draw from the bank, assembled after the fact. A person who holds the maximum 5% of a bank can expect about 5% of a random form to fall inside their items. The model uses 1/40, or 2.5%, as the expected share for a typical setter, which corresponds to an average exposure of half the cap [Model, exposure_p = 1/40]. That is the team's design target, not a measured fact, and the 5% cap is the figure that holds in the worst case. Today, by contrast, the insiders in the 2026 case were able to reach up to 120 of 180 questions, or about 67% of a paper [F-B02, Model]. The comparison is 67% to 2.5% on expected exposure and 67% to 5% on the cap.

**Assembly at T−60 minutes.** Forms are assembled by algorithm one hour before the exam, under the split-key release described in Section 11.5. Until that moment the "paper" does not exist as an object. It cannot be photographed in a strong room, copied at a press or intercepted in transit, because there is nothing complete to copy. The relevant contrast is with the cases in the coded record: the BPSC TRE-3 paper leaked at a Kolkata printing press before bar-coding [F-B09], the UP Police 2024 paper leaked from a logistics warehouse in Ahmedabad [F-B08], and the NEET-UG 2024 paper was photographed inside a strong room at 8:02 am and solved by 10:40 am [F-B05]. Each of those depends on a complete paper sitting in one place for hours or days.

The design borrows from three systems that already work at scale. UPSC's setters do not know whether their questions will be selected, and no confirmed leak of the Civil Services Examination has been reported since 1991 (a [snip]-level claim that the team treats as reported, not established) [F-D12]. The College Board's digital SAT gives different students different question sets through multistage adaptive testing [F-D09]. South Korea confines its question writers for about 40 days [F-D05]. PRAMAAN keeps UPSC's uncertainty and the SAT's parallel forms and replaces Korea's confinement with a smaller exposure per person, which is cheaper and does not scale linearly with headcount.

### 11.3 The 96-form build for NEET-UG

The headline configuration is 96 parallel forms for NEET-UG: 6 days × 2 shifts × 8 forms = 96 [Model, forms_full]. The 6 days match the Government's own reported plan of five to six days in nearly 1,000 centres [F-P18]. Each shift runs eight forms at once, so that even within a single shift candidates in the same room sit different forms.

| Element | Design | Basis |
|---|---|---|
| Exam days | 6 | Government plan, five to six days [F-P18] |
| Shifts per day | 2 | Team design |
| Parallel forms per shift | 8 | Team design |
| Total forms | 96 | 6 × 2 × 8 [Model] |
| Interim forms, 2027 to 2028 | 24 | Bank still being calibrated [Model, forms_interim] |
| Candidates | 22,70,000 | NEET-UG 2026 [F-A05] |
| Candidates per form, full build | 23,646 | 22,70,000 ÷ 96 [Model] |
| Candidates per form, interim | 94,583 | 22,70,000 ÷ 24 [Model] |

The 24-form interim stage covers 2027 and 2028, while the bank is built and calibrated. Capital spending is phased 40%, 40% and 20% over 2027 to 2029 [A12], and share of national exam volume under PRAMAAN runs at 10%, 35%, 60% and 80% before reaching 100% [A10]. The 96-form configuration therefore arrives in 2029, once the bank is deep enough to support it.

Parallel forms raise a fairness question that the design must answer instead of avoiding. Forms drawn from a large bank are not identical in difficulty, so scores need to be placed on one scale. The standard tool is item response theory (IRT): every item is pre-tested to estimate its difficulty and discrimination, forms are assembled to a common target profile, and scores are equated across forms. The team proposes that NEIAA publish the equating method, that an independent psychometric panel audit it after each cycle, and that the Supreme Court's warning that "Flip flops are anathema to fairness" [F-P06] be treated as a design requirement: the method is fixed and published before a cycle, not adjusted after results. The NTA Director General has spoken of about 20 shifts with score normalisation [F-P18, snip]; normalising across 96 forms is a heavier psychometric commitment, and the trade-off is stated in Section 18.

### 11.4 The blast-radius arithmetic (T9)

The moneyshot of the design is the size of the population that one compromise can reach. Blast radius is defined here as the number of candidates who sat a form that was compromised. Under a single national paper it is everyone.

| Metric | Today | PRAMAAN |
|---|---|---|
| Candidates exposed by one NEET-UG compromise | 22,70,000 | 23,646 (96 forms); 94,583 (24 forms, 2027 to 2028) |
| Government CBT plan, one form a shift (20 shifts) | 1,13,500 | not applicable |
| Share of a paper one insider can expose | 67% | 2.5% expected, 5% cap |
| Leak revenue (₹ Cr) | 15.0 | 0.6 |
| Seller's expected value (₹ Cr) | 14.0 | −5.4 |

*Source: [T9, Model]; the attacker rows rest on assumption A16 and are discussed in Section 14.*

The arithmetic is short. 22,70,000 ÷ 96 = 23,646 to the nearest candidate, a reduction of 96 times [Model, blast_ratio]. 22,70,000 ÷ 24 = 94,583 for the interim configuration. 22,70,000 ÷ 20 = 1,13,500 for the Government's reported CBT plan. A simple cross-check on the full build: 22,70,000 candidates across 12 shifts is about 1,89,000 per shift, and eight forms per shift brings that to 23,646 per form.

The model assumes candidates are spread evenly across forms and that a compromised form exposes only the candidates who sat it. Both are simplifications. In practice a leak of one form's items also carries some information about other forms that share items, because forms are draws from one bank. The 5% exposure cap and the item-overlap scans in the matrix (Section 13.6) exist to keep that overlap small, and the effectiveness scenarios in the cost-benefit model apply a much smaller cut than the mechanical 96-fold figure: the base case assumes a 60% cut in candidates hit per breach [A14, T5], so the design does not rely on the full arithmetic.

### 11.5 Comparison with the Government's reported CBT plan

The Centre has told the Supreme Court that NEET-UG becomes a computer-based test from 2027, over five to six days in nearly 1,000 centres, and the NTA Director General has referred to about 20 shifts [F-P18]. These plan details come from a snippet-level report and are treated as reported, not confirmed. On the reported numbers, one compromised shift exposes about 1,13,500 candidates [Model, blast_govt]. This is a real improvement on 22,70,000. It is a factor of 20, achieved by splitting the candidate population into shifts.

PRAMAAN goes a further factor of about 4.8 (1,13,500 ÷ 23,646) by making each shift a set of eight forms and by assembling them from a bank rather than setting them as papers. The reasons the Government plan leaves residual exposure are specific, and the record supports each of them.

First, a CBT in one shift still delivers one question set to everyone in it. If that set leaks, 1,13,500 candidates are tainted. Second, CBT does not touch question creation. The 2026 leak came from setters and translators [F-B02], and a computer-based delivery of the same set of questions would have leaked in the same way. Third, CBT relocates the point of attack. India's record includes remote-access fraud at CBT nodes (JEE Main 2021 with over 820 beneficiaries reported, Rajasthan Police 2018, RRB JE 2019, GUVNL 2020, Punjab Police SI 2021, MP TET 2022) [F-B10, F-B11], and a platform failure at SSC Selection Post Phase 13 in 2025 [F-B12]. The brief makes the same point in its own terms: technology "can simply shift the point of vulnerability" [B CS10]. Fourth, the current CBT tender's terms concentrate rather than spread vendor dependence: volume slabs cut the rate to 0.50 times at 2.75 to 3 crore tests [F-A20], and the NTA disclaims responsibility for the vendor's software and functionaries under clause 11.3 [F-A20].

PRAMAAN keeps CBT where the capacity exists and adds computer-assisted pen-and-paper testing where it does not (Section 11.7). It is not an argument against the Government's move to CBT; it is an argument that the move needs the trust-plane mechanics underneath it to deliver the security benefit that the announcement implies. The Radhakrishnan Committee's own recommendations, including encrypted e-transmission, high-speed printing at centres, unique codes on each copy and multi-session testing for exams above two lakh candidates [F-P14], point in the same direction and were still not implemented when the 2026 leak occurred [F-P15].

### 11.6 Principle 2: split the keys

A national item bank is a new central asset, and a new central asset is a new single point of failure unless the design says otherwise. The design answer is that the bank is encrypted and that no institution, and no single person, holds the means to decrypt it.

**The threshold scheme.** Keys are split with a threshold secret-sharing scheme of the kind Shamir described in 1979: a secret split into n shares can be rebuilt from any k of them, and fewer than k shares reveal nothing [F-D15, S70]. The team proposes n = 5 and k = 3.

**The five holders.** One share each is held by NEIAA, the exam body concerned, CERT-In, a state officer, and an independent auditor. This choice is the team's proposal; it is not existing law or practice. The logic of the selection is independence along three lines: the Union regulator (NEIAA), the conductor whose exam it is (the exam body), the national cyber authority (CERT-In, whose directions already govern incident reporting [F-P20]), a federal counterweight (a state officer, assigned by rotation), and a party outside government (the independent auditor). A compromise needs three of these five, so an attacker must cross institutional and federal lines at once.

**How the keys are used.** The bank stays encrypted at rest inside hardware security modules at two sites [Model, C03]. At T−60 minutes a quorum of three holders releases a form-assembly key inside the module, the assembly algorithm draws the form, and the form is encrypted separately for each centre. Centre-level keys reach centres later, at T−30 minutes (the register's mitigation for centre-staff access, Slide 4). The two events are separate on purpose: even a compromised assembly step yields an encrypted form that no centre can yet read.

**Two-person integrity and zero trust.** Every privileged action, including any export from the vault, needs two authorised people. Access is granted per session by a policy decision point and enforced by a policy enforcement point, with continuous monitoring of asset and user state, which are the components of the zero-trust model in NIST SP 800-207 [F-D14, S53] (mapped in Section 13.5). Access is just-in-time: a setter or engineer is granted rights for a task and loses them when it ends.

**What the design costs and what it risks.** Hardware security modules, public-key infrastructure and key ceremonies are budgeted at ₹40 Cr capex and ₹8 Cr a year [T3, C03]. The residual risks are availability and collusion. With a 3-of-5 threshold, two holders can be absent and the release still works, but the loss of three shares would block it. The matrix therefore includes a reserve form and a rebuild path (Section 13.6). Collusion of three holders across NEIAA, an exam body, CERT-In, a state and an auditor is possible in principle and is the reason the custody ledger is public to the auditor and the CAG.

### 11.6a Principle 3: liability follows the breach

Principle 3 turns the design into consequences: a six-hour notification clock, strict vendor liability including subcontractors, a named Senior Responsible Officer, re-tests funded by the responsible body, and public root-cause reports within 30 days. Section 14 sets these out in full: the response clock, the liability ladder from individual to exam body, and the contract terms that replace today's disclaimers. Without Principle 3, Principles 1 and 2 shrink the prize and lock the vault, but leave the cost of a breach, and the incentive to prevent one, exactly where it sits today, disclaimed away from the parties best placed to stop it [F-A20].

### 11.7 Forensic watermarks and computer-assisted pen-and-paper testing

**Per-copy watermarks.** Every copy of a paper carries a unique code, visible (a printed code) and invisible (variations in layout and wording). A leaked image or a photographed page can then be traced to its source copy, which means to a centre, a desk and a custody chain. This addresses two distinct failures. In a true leak it should find the source within hours. In a false alarm it shows the circulated image does not match any issued copy. The UGC-NET 2024 case is the example: the exam was cancelled for 9.08 lakh candidates after a threat-analytics input, and the CBI closed the case, its closure report reported to say a juvenile had doctored and backdated a screenshot and was let off after counselling [F-B07, S10, S11]. A watermark check inside 24 hours could have tested the circulated image against issued copies before the cancellation. The model prices watermarking, the custody ledger and smart-lock boxes at ₹50 Cr capex and ₹17.5 Cr a year, on a basis of 5,000 smart-lock boxes and ₹5 a printed copy for about 1.5 crore copies [T3, C04].

**Computer-assisted pen-and-paper testing (CPPT).** Some exams will stay on paper, including in regions without CBT capacity. The Radhakrishnan Committee proposed encrypted electronic transmission, high-speed printing at centres and a unique code on each copy [F-P14]. PRAMAAN adopts that design and connects it to the trust plane: the encrypted form is assembled at T−60, sent to the centre and printed there, each copy watermarked. This removes the printing press and the transport leg, which account for BPSC TRE-3 and UP Police 2024 in the record [F-B08, F-B09], while keeping the pen-and-paper mode where computers are not available.

### 11.8 Risk tiers

Not every exam needs the full stack. The tier table below is the team's proposal for proportionate control, in line with the brief's "risk based security" option [B SO5].

| Tier | Which exams | Controls |
|---|---|---|
| Tier 1 | 5 lakh and above, or a national rank | Full stack: item bank, split keys, CERT-Exam SOC |
| Tier 2 | 50,000 to 5 lakh | Item bank, watermark, vendor audit |
| Tier 3 | Under 50,000 | Custody log and watermark |

*Source: Team IdeaForge governance design (Slide 5).*

The item-bank costing covers 15 Tier-1 exams only [T3, C02]. Tier 2 and Tier 3 exams use the shared bank and tooling at lower intensity; Tier 3 keeps a custody log and a watermark, which is the cheapest control that still gives traceability.

### 11.9 What this design does not claim

The architecture does not make compromise impossible, and the brief does not ask that it should [B SO0]. The objective is to reduce the probability of compromise, contain its impact and make the cost of attack exceed its expected benefit. Section 14 tests the third of those with the attacker-economics model. The design leaves three exposures open by intent. The vault holds encrypted items, so a compromise of three key holders would open it. Insiders who see up to 5% of a bank can still leak that 5%, which is small but nonzero. And the equating method creates a new dependence on psychometric capacity, which Section 19 lists as an implementation risk. Each is smaller than the exposure it replaces.

## 12. Governance model: one statutory assurer, federated conductors, and binding rules for vendors and coaching

The brief asks the team to "Define roles of authorities, governments, providers and stakeholders" [B D2] and to say how "responsibility, audits and liability" should be assigned [B Q4]. The current position is that nobody owns the whole chain. The NTA conducts NEET-UG, JEE Main, CUET and UGC-NET [F-A01], UPSC, SSC and the RRBs run their own exams, and state commissions and police boards run the rest. The NTA itself runs on 39 permanent posts filled on deputation, beside 73 contract and 124 outsourced staff [F-A12], and its CBT tender places question preparation outside the vendor's scope and disclaims the vendor's software and functionaries [F-A19, F-A20]. This section assigns the missing ownership.

### 12.1 Institutions and roles

Every institution below is a proposal by the team unless a fact ID says otherwise.

| Institution | Status | Role in PRAMAAN | Does not do |
|---|---|---|---|
| National Examination Security Council (NESC) | New apex body, chaired by the Cabinet Secretary | Sets national direction; resolves disputes between the Union and states; receives the annual integrity report | Operate systems or audit exams |
| National Examination Integrity and Assurance Authority (NEIAA) | New statutory authority | Issues the National Examination Security Standard (NESS); accredits vendors, centres and exam bodies; runs the National Item Bank Vault and key ceremonies; holds incident command; publishes root-cause reports | Conduct any exam |
| CERT-Exam | Sectoral computer security incident response team within NEIAA's trust plane, linked to CERT-In | 24×7 security operations for exams; psychometric and network forensics; first receiver of breach notices | Decide cancellations |
| Exam bodies (NTA, UPSC, SSC, RRBs, IBPS, state commissions) | Existing | Own their item content and conduct exams; each names a Senior Responsible Officer (SRO) for every exam; fund re-tests from their own budgets | Audit themselves |
| 36 State Examination Security Cells | New, state-run, centrally co-funded | Accredit and inspect centres; run district custody; hold the state share of the key; liaise with police | Set standards |
| Accredited vendors | Existing market, accredited by NEIAA | Deliver platforms, printing, logistics, CCTV and identity devices under NESS; carry liability | Handle identity or custody through subcontractors without approval |
| STFs, I4C and Special Fast Track Courts | Existing or created by the 2026 Amendment [F-P11] | Investigate within two months; prosecute; try within three months of chargesheet | None of the security functions |
| Exam Integrity Ombudsman | New | Hears candidate and whistle-blower complaints; can require a root-cause report | Order cancellations |
| Parliament and the CAG | Existing | Statute and budget; CAG audits NEIAA every three years | Operate |

Three of these deserve explanation.

**NESC.** A council chaired by the Cabinet Secretary is a proposal chosen for one reason: the veto points (Section 12.7) sit in different ministries and states, and the reforms cross them. A council at Cabinet Secretary level can settle a dispute between the Education Ministry, the Home Ministry, MeitY and the states without waiting for a court. It has no operational role, which keeps it from becoming a further layer in the chain of hands.

**CERT-Exam.** The CERT-In Directions of April 2022 already require cyber incidents to be reported within six hours and ICT logs to be kept for 180 days in India [F-P20, S54]. CERT-Exam applies that discipline to a defined sector. It is a sectoral response team within the trust plane and reports into CERT-In's national coordination. The model costs it at ₹80 Cr capex and ₹60 Cr a year for a 24×7 operations centre, psychometric forensics, and network and CCTV analytics with human review [T3, C07].

**The SRO.** A named Senior Responsible Officer for each exam converts the diffuse duty that exists today into one identifiable person. The SRO signs the readiness check, owns the response to a breach in the first hours, and answers to the ombudsman and the CAG. The concept is borrowed from project governance; it is a team proposal and has no statutory equivalent in the fact base.

### 12.2 The legal route

Three instruments are needed, and each is proposed.

1. **A PRAMAAN chapter in the Public Examinations (Prevention of Unfair Means) Act, 2024, as amended in 2026.** The 2024 Act covers UPSC, SSC, RRBs, IBPS, the NTA and central ministries and departments [F-P01]; the 2026 Amendment raised penalties and created special task forces and fast-track courts [F-P07 to F-P11]. It penalises what people do. It does not create an assurer, a security standard or a duty on exam bodies to run one. A new chapter would establish NEIAA and NESC, empower NEIAA to issue NESS and to accredit, and attach the vendor and SRO duties described below. The roadmap places the NEIAA statute in 2027 (Section 17).
2. **A model state law.** State exams sit under state laws with widely different penalties: Uttarakhand and Jharkhand allow life imprisonment and up to ₹10 Cr, Gujarat 5 to 10 years, Bihar 3 to 10 years, Uttar Pradesh two years to life [F-P13]. A model law would adopt NESS by reference and give State Examination Security Cells their statutory footing.
3. **Centrally sponsored funding at 60:40.** The Centre funds 60% and states 40% of the State Examination Security Cells [Model, C10]. Accreditation to NESS is a condition of the Union share. This is the mechanism by which a federal system takes a common standard without a constitutional amendment.

Timing matters. The 2026 Amendment moved from introduction on 27 July to passage in both houses on 30 July 2026 [F-P07], and the Education Minister resigned on 25 July [F-B04]. Legislative attention to examination security is at a high point, and the team's proposal is designed to use it: an ordinance or bill for NEIAA in the first year, before the attention fades (Section 21, question 22).

### 12.3 The RACI across the lifecycle

The matrix follows the eight lifecycle stages in the brief's order [B LS1 to LS8], so it can be read against the heat map and controls table without translation. The letters are R (responsible: does the work), A (accountable: answers for the result, one per row), C (consulted before the action) and I (informed after). A dot marks no role. "A/R" marks a row where one party both does the work and answers for it.

| Stage | NEIAA | Exam body | CERT | State cell | Vendor | Police | Auditor |
|---|---|---|---|---|---|---|---|
| Creation | C | A/R | · | · | · | I | C |
| Storage | R | A | C | · | · | I | C |
| Personnel access | A | R | C | R | R | C | C |
| Transmission | A | R | R | C | R | I | I |
| Exam centre | C | A | C | R | R | C | I |
| Authentication | C | A | I | C | R | I | I |
| Examination | I | A | R | R | R | C | I |
| Evaluation | C | A/R | C | · | C | I | R |

*Source: Team IdeaForge governance design (Slide 5). Columns: NEIAA; Exam body; CERT-Exam; State Examination Security Cell; Vendor; Police (STF, I4C, state police); Independent auditor.*

Notes by row, so that each assignment has a reason.

**Creation.** The exam body is accountable and responsible, because the items are its intellectual property and the Supreme Court has already placed subject-matter responsibility with it [F-P06]. NEIAA and the auditor are consulted: NEIAA on the 1/20 cap and the coaching bar, the auditor on the item-overlap scans. Police are informed only. There is no vendor role: the NTA tender already places question preparation outside the vendor's scope [F-A19], and PRAMAAN keeps it there.

**Storage.** NEIAA is responsible because it runs the National Item Bank Vault. The exam body stays accountable for the content held in it. The row is the most visible departure from today: the vault is a shared central asset, so the operator and the owner of the content are different parties, and a single accountability for the outcome would blur the split. If a vault fails, the exam body answers for the exam.

**Personnel access.** NEIAA is accountable because access rules are a standard, not a local choice. Exam bodies, state cells and vendors are all responsible for applying vetting, rotation and just-in-time access to their own people. This is the row with the most responsible parties, because it is the row where the record is worst: six of the 49 coded incidents are personnel-access failures and 31 of 49 involve insiders [T7, F-B19]. Police are consulted because vetting depends on their records.

**Transmission.** NEIAA is accountable for the encrypted delivery standard and the key schedule. CERT-Exam, the exam body and the vendor are responsible for their parts of the move. In the record, logistics staff opened a sealed consignment in the UP Police 2024 case [F-B08], and the design replaces physical transport of complete papers with encrypted delivery and print at centre.

**Exam centre.** The exam body is accountable; state cells and vendors are responsible for centre readiness and for what happens inside it. NEIAA is consulted through accreditation, and the auditor is informed of findings. The NEET-UG 2024 case turned on a strong-room back door left open at one centre and on the wrong bank's papers being issued at 12 [F-B05], which are centre-level failures the state cell exists to prevent.

**Authentication.** The exam body is accountable; the vendor runs the devices. NEIAA sets the false-match and alternate-ID rules. Section 15 covers the privacy design.

**Examination.** The exam body is accountable. CERT-Exam, the state cell and the vendor are responsible for the network, the centre and the platform. Police are consulted on incident response. NEIAA is informed, since it should hear of any incident but does not run the exam.

**Evaluation.** The exam body is both accountable and responsible for marking and results. The independent auditor is responsible for answer forensics: the same-question, same-answer, response-time and score-gain analysis of the kind the IIT Madras review applied to NEET-UG 2024 [F-P04]. This is deliberate: the party that publishes results does not run the test of whether they are clean.

Two features of the matrix follow from design principles and are worth stating. Every row has exactly one A, so no row can be read as shared accountability. And NEIAA is the accountable party on two rows only, personnel access and transmission, and both are rows where the standard is the control. Elsewhere NEIAA is consulted or responsible. On Storage, NEIAA is responsible for operating the vault but is not the accountable party: the exam body holds the A there, so NEIAA's statutory duty for the vault sits alongside, not in place of, the exam body's accountability for its content.

### 12.4 Vendor rules

The brief names third-party dependence as a challenge [B CH4]. The NTA's March 2026 CBT tender shows the present contract position: the performance bank guarantee is 10% of exam value; failing CCTV costs 10% of the quoted per-candidate rate and each blind spot ₹200; volume slabs reduce the rate to 0.95 times at 50 to 75 lakh tests and 0.50 times at 2.75 to 3 crore; clause 11.3 states that the NTA "shall not be responsible for any vulnerability in the software of the service provider and integrity of the exam functionaries deployed by them"; clause 12 lets the vendor use third parties for exam manpower, CCTV, biometric authentication and guards; and the usage terms in clause 13 name Tata Consultancy Services Limited as the service provider [F-A20]. None of this implies misconduct. It shows a contract that prices volume, disowns integrity and permits chains of subcontractors, which is a design that concentrates rather than spreads dependence.

PRAMAAN's rules, all proposals, are as follows.

- **Accreditation.** No vendor handles Tier 1 or Tier 2 exams without NEIAA accreditation against NESS, renewed annually and revocable.
- **A 40% cap.** No firm exceeds 40% of national CBT volume. This is the team's number; it is chosen so that at least three firms are needed to serve the market, and it directly cuts across the volume-slab logic that pushes toward one supplier [F-A20]. Volume slabs that reward concentration are replaced by a flat rate with performance-linked adjustments.
- **Subcontracting.** Identity and custody functions cannot be subcontracted without NEIAA approval. Where subcontracting is allowed, the prime vendor carries strict liability for the subcontractor. This reverses the structure of clause 12 [F-A20].
- **Clause 11.3 reversed.** The exam body is responsible for the integrity of the platform it contracts. The vendor is liable for its software and for the integrity of the people it deploys. A contract that disowns both leaves no one accountable, which is the current state.
- **Open standards and exit.** Contracts require open data formats and tested exit plans, so that a vendor can be replaced within one cycle.

The rules link to the incident record. Edutest was blacklisted after the UP Police 2024 leak [F-B08], and Eduquity, the SSC Selection Post Phase 13 vendor, had earlier been accused over MP TET 2022 outsourcing [F-B12]. Both are reported facts, and the design point is narrower than either: a blacklist after the event is a weaker control than an accreditation before it.

### 12.5 The coaching conflict bar

Coaching institutions appear in the brief's stakeholder list [B ST8] and in the 2026 record both as victims and as channels. The 2026 racket spread through WhatsApp and coaching centres, and those arrested included a Latur coaching-institute owner and a physics teacher at a Pune medical coaching academy alongside the NTA-credentialed academics [F-B02]. The coaching industry is estimated at about ₹58,088 Cr, reported at [snip] level [F-A22], so the incentives are large.

The bar, proposed by the team, is that no setter, moderator or translator may hold a coaching role for three years before an appointment or for two years after it. Both conditions are declared, checked against public and tax records by NEIAA, and audited. The record does not say whether every arrested coaching-sector participant held an NTA role, so the bar is presented as closing a channel, not as a specific counterfactual for named individuals.

### 12.6 Why NEIAA does not conduct exams

If the assurer also conducted exams, it would audit itself. The rule is simple and the sources support it in reverse: the NTA both conducted and secured NEET-UG 2024, and the Court's list of lapses (wrong bank's papers at 12 centres, weak coordination, inadequate CCTV, unreliable transport [F-P06]) describes failures that self-review had not caught. An assurer that stays out of conduct can say a thing failed. The independent auditor holds a key share, is responsible for evaluation forensics and audits every exam (Section 14.6), and NEIAA itself is audited by the CAG every three years.

### 12.7 Centre-state feasibility

The reform crosses three veto points. The Union Cabinet and Parliament must agree the statute; states must accept accreditation, cells and the key share; and the Supreme Court can rule on cancellations and privacy, as it did in 2024 [F-P04, F-P05] and in Puttaswamy [F-P21]. A two-level game applies: at the domestic level, states will accept a central standard if it comes with funding and leaves them delivery; at the international level, there is no external constraint, though the NTA chief has referred to cooperation with BRICS countries on paper security [F-P17].

The bargain offered to states is explicit. They keep delivery and their own item content. They receive 60% of the cost of their cells from the Union [Model, C10]. In return they accept NESS as a condition of that funding. The funding picture at steady state is a Union budget share of ₹351.3 Cr (52%), an integrity levy of ₹250.2 Cr (37%) and a state share of ₹72.0 Cr (11%), which together equal the ₹673.5 Cr annual running cost [T10, A15]. States pay 11% of the total; the Union and candidates via a ₹50 levy pay the rest. NEIAA itself is planned at about 300 staff at a loaded ₹25 lakh each [Model, C01], against 236 people of all categories at the NTA today [F-A12: 39 + 73 + 124], a scale at which it can audit without conducting.

## 13. Technology framework: encryption is the backbone, biometrics the gate, AI an analyst and surveillance proportionate

The brief asks "What role should AI, biometrics, encryption and surveillance play?" [B Q3] and asks for a recommendation on the "deployment of AI, biometrics, encryption and surveillance" [B D3]. The team's answer gives each technology one job and a boundary. Encryption is the backbone because it is the only one of the four that reduces what a person can steal. Biometrics are the gate because impersonation is a real but smaller risk (three of 49 coded incidents sit at candidate authentication [T7]). AI is an analyst that flags and never decides. Surveillance is proportionate: wired, local and limited to rooms where the exam or its custody is at stake. The brief's own warning applies to all four: greater sophistication "can simply shift the point of vulnerability" [B CS10].

### 13.1 Encryption: the backbone

**Role.** Encryption keeps the item bank, the assembled forms, the responses and the logs unreadable to anyone without a released key. It is the technology that makes the trust plane possible.

**Where deployed.** The item bank at rest inside hardware security modules; each assembled form, encrypted separately for its centre; encrypted electronic delivery to centres for CBT and CPPT; candidate responses until marking; and the custody ledger's signatures. The design keeps the timing logic of today's tender, which hands the soft copy over one hour before the exam [F-A19], and strengthens it: the form is assembled at T−60 under a 3-of-5 release and reaches the centre in encrypted form, with the centre key arriving at T−30 (Section 11.6).

**Where not deployed.** Encryption is not deployed as a substitute for controlling people. An encrypted bank is protected only from those who lack the keys, and setters see items in clear. That is why the item cap and sequestration sit beside it. It is also not deployed with any single master key. The design has no national key that a single official or agency holds whole.

**Guardrail.** No body holds a whole key. Keys are split 3-of-5, two-person integrity applies to every privileged action, and key ceremonies are audited by the independent auditor and the CAG.

**Evidence.** Threshold secret sharing lets a secret be rebuilt from any k of n shares while fewer than k reveal nothing [F-D15, S70]. The Radhakrishnan Committee recommended encrypted electronic transmission with printing at centres [F-P14], and it remained unimplemented at the 2026 leak [F-P15]. Kenya is the physical analogue: in 2016 exam materials moved into 346 containers, each opened only by keys held by two officials (the sub-county commissioner and the sub-county director of education) and guarded around the clock, and no KCSE results were cancelled that year against 5,101 cancelled in 2015 [F-D01 to F-D03]. Kenya's later smart padlocks that log container openings are reported at [snip] level [F-D03]. The Kenyan result is a single-country outcome with other reforms alongside it, so it is offered as supporting evidence and not as proof.

### 13.2 Biometrics: the gate

**Role.** Confirm at the centre gate that the person seated is the registered candidate, and confirm that staff entering the vault or the custody room are who the log says they are.

**Where deployed.** One-to-one face matching against the registration photograph, with a liveness check, at Tier 1 and Tier 2 centres. The model prices identity devices at 10,000 centres × 4 devices × ₹25,000, a ₹100 Cr capex, and about ₹3 a candidate in operations [T3, C06]. Staff biometric checks apply to vault access and key ceremonies.

**Where not deployed.** No one-to-many search against a national database. No central store of face templates beyond the registration photographs that already exist. No iris scanning or other modalities beyond the face check. No behavioural or emotion inference. Aadhaar authentication is not required, and an alternate-ID desk handles anyone whom the device rejects (Section 15).

**Guardrail.** The face check produces a match or no-match for a human at an alternate-ID desk to resolve; no candidate is turned away by a machine alone. Face data is deleted 90 days after results (Section 15). The 90-day rule is the team's proposal.

**Evidence.** UPSC made AI-enabled face authentication with liveness checks mandatory for its Civil Services prelims from 24 May 2026, and its 2024 tender sought Aadhaar fingerprint and face authentication and QR e-admit cards [F-A17, S47]. The Radhakrishnan Committee proposed a DIGI-EXAM identity built on Aadhaar, biometrics and AI analytics [F-P14]. China has used facial recognition in Beijing since 2021 and iris scans in Shaanxi since 2018 [F-D07]; PRAMAAN adopts the first and declines the second as more intrusive than the risk warrants. The scale of the risk explains the modest ₹100 Cr: candidate authentication accounts for three of 49 coded incidents [T7] and scores 4 to 6 in the heat map [T8], well below the 20 scored by creation and storage.

### 13.3 AI analytics: the analyst

**Role.** Find patterns that humans cannot review at scale and hand them to a panel: answer similarity between candidates, response times, score jumps, log anomalies, access behaviour, CCTV events.

**Where deployed.** Five uses. (1) Answer-similarity, response-time and score-gain forensics on every exam, run by the independent auditor and CERT-Exam. (2) Network and log anomaly detection at CBT nodes and the vault gateway. (3) Behaviour analytics on privileged access. (4) Item-overlap scans against the bank when circulating material comes to notice. (5) CCTV analytics that flag events, such as an unexplained movement or a covered camera, for a human reviewer. The model prices the operations centre and forensics at ₹80 Cr capex and ₹60 Cr a year [T3, C07].

**Where not deployed.** No automated disqualification. No emotion or intent inference from faces or voices. No ranking or profiling of candidates. No decision of any kind taken by a model without a human panel.

**Guardrail.** A flag is a lead. A human panel of at least the exam body and the auditor decides what a flag means, and a candidate can appeal to the Ombudsman. The panel records the model's false-positive rate on each exam, and NEIAA publishes it.

**Evidence.** The Supreme Court relied on an IIT Madras analysis that found no sign of mass malpractice in NEET-UG 2024 [F-P04, S12]: statistical forensics is already accepted as evidence. The NTA chief has said the agency is exploring AI analysis of logs and data to detect fraud [F-P17, F-D10]. UGC-NET 2024 shows the cost of acting on an unverified signal: the exam was cancelled for 9.08 lakh candidates on an alert and the CBI closed the case after finding a doctored screenshot [F-B07]. China's provincial AI patrols in 2024 flagged suspicious behaviour [F-D07], and in 2025 Alibaba, Tencent and ByteDance switched off photo-recognition and question-answering features of their AI apps during gaokao hours [F-D08], an example of platforms limiting their own AI at exam time that PRAMAAN could invite by agreement, not compel. TCS iON's AI command centre for venue monitoring is reported at [snip] level [F-D11].

### 13.4 Surveillance: proportionate

**Role.** Give the exam body evidence of what happened in a room, and deter misuse in places where custody is at stake.

**Where deployed.** Wired CCTV in exam rooms, strong rooms, the vault and printing rooms; smart-lock logs on boxes; access logs on systems. The team adopts the NTA tender's floor of at least one wired 2 MP IP camera per 12 candidates plus common areas, jammers at every centre, and live feed to a command room [F-A19]. Wired cameras only, because jammers make wireless cameras unreliable [F-A19]. The programme hardens 2,500 existing government labs at ₹75 Cr capex and ₹25 Cr a year [T3, C05].

**Where not deployed.** No internet shutdowns as a standing control. No blanket blocking of social platforms. No monitoring of candidates outside the centre. No live facial recognition of crowds or of candidates in transit.

**Guardrail.** Footage is retained for a set period under NESS (not below the three months in today's tender [F-A19]), accessed by two authorised people and logged. A blind spot leads to centre de-accreditation, not a ₹200 fine. The 24×7 review of feeds is by CERT-Exam and the state cell, with human judgment.

**Evidence.** The shutdown record argues against the blunt tool. Rajasthan cut mobile internet in several districts from 6 am to 6 pm on 26 September 2021 for REET, and again in seven districts in February 2023, and SFLC.in argues exams are not a "public emergency" under the law [F-P22]. Yet REET 2021 leaked from a district strong room two days before the shutdown [F-B16]. The shutdown could not affect that leak. Telegram was blocked nationally in June 2026 after the NEET-UG re-test, with the Delhi High Court upholding the block on 19 June [F-B04]; the design does not include it as a standing control. South Korea's halt of flights during the English listening test, about 140 flights rescheduled [F-D04], is a narrow, time-limited, physical measure with a specific purpose, and that is the type of intervention the design would accept.

### 13.5 Zero trust and defence in depth

**Zero trust.** NIST SP 800-207 describes an architecture in which no trust is implied by network location, access is granted per session by a policy decision point and enforced by a policy enforcement point, and asset and user state are monitored continuously [F-D14, S53]. The mapping to PRAMAAN is direct.

| NIST SP 800-207 idea | PRAMAAN implementation (team design) |
|---|---|
| No implicit trust from network location | A centre's internal network gets no standing rights; nodes run locked images with remote desktop, USB and sensitive ports disabled, as the NTA tender already requires [F-A19] |
| Per-session access via a decision point | A NEIAA policy engine, operated by CERT-Exam, decides each request to the vault or assembly service; hardware keys and just-in-time rights |
| Enforcement point | Gateways at the vault and at each centre device enforce the decision and log it |
| Continuous monitoring of asset and user state | CERT-Exam's 24×7 operations centre, with logs kept 180 days in India [F-P20] |

**Defence in depth.** No control is trusted alone. The Swiss-cheese view says harm happens when holes in independent layers line up. The design tries to keep the layers independent by giving them different owners in the RACI: the item cap belongs to NEIAA and the exam body, the key to five institutions, the centre to the state cell and vendor, the forensics to the auditor. The NEET-UG 2024 case shows the alternative: a strong-room back door left open, a paper photographed at 8:02 am, trunks moved on an open e-rickshaw and the wrong bank's papers at 12 centres, a chain in which each failure was in the same body's hands [F-B05]. Under PRAMAAN the strong room holds no complete paper at all.

### 13.6 The eight-stage control matrix

The compact matrix below is the one on Slide 6. The expanded version follows, with two lines in each cell.

| Stage | Prevent | Detect | Respond |
|---|---|---|---|
| Creation | 20× bank, 5% cap each | Item-overlap scans | Retire exposed items |
| Storage | Air-gapped HSM vault | Access-log alerts | Re-key, rebuild forms |
| Personnel | Vetting, conflict bar | Behaviour analytics | Suspend, investigate |
| Transmission | Encrypted, keys at T−60 | Tamper seals, GPS | Switch to reserve form |
| Exam centre | Hardened lab, jammers | CCTV analytics flags | Cancel one centre only |
| Authentication | 1:1 face match | Liveness check | Alternate-ID desk |
| Examination | Locked nodes, 96 forms | Network SOC, logs | Re-test the one form |
| Evaluation | Encrypted responses | Answer-similarity AI | Human panel decides |

**Creation (LS1).**
Prevent: The bank is 20 times a paper and no setter, moderator or translator sees more than 5% of it. Setters and translators work under sequestration during setting (about 2,000 people budgeted [T3, C08]) and are subject to the coaching conflict bar.
Detect: Item-overlap scans compare any circulating material that reaches the operations centre through tips or open sources against the bank. A match of the scale seen in 2026, up to 120 of 180 questions [F-B02], would be flagged in hours.
Respond: Exposed items are retired and any form containing them is rebuilt. The person's access is suspended and the case goes to the STF, with the 5% cap bounding how many items can have been exposed.

**Storage (LS2).**
Prevent: The vault is air-gapped and holds only encrypted items, and the key is never whole. Privileged actions need two people.
Detect: Access-log alerts reach CERT-Exam in real time. Smart-lock boxes for any physical material log every opening [F-D03, snip].
Respond: The affected key share is revoked and re-issued and forms are rebuilt. Items that may have been exposed are retired from the bank.

**Personnel access (LS3).**
Prevent: About 3 lakh functionaries are vetted [Model, C08], duties rotate, and hardware keys and just-in-time rights replace standing access. The coaching conflict bar applies to setters and translators.
Detect: Behaviour analytics flag unusual retrievals, of the kind reported at TSPSC in 2023, where an assistant section officer and a system administrator are alleged to have retrieved papers from commission computers [F-B15]. Periodic access-log reviews by the auditor sample who touched what.
Respond: Access is suspended at once and the case is referred to police. The role is rotated and colleagues with shared access are re-verified.

**Transmission (LS4).**
Prevent: Forms are assembled at T−60 and delivered encrypted, with centre keys at T−30. Complete physical papers do not travel for Tier 1 exams, because CPPT prints at the centre.
Detect: Tamper-evident seals and GPS cover any physical consignment that remains. Delivery checks compare the watermark on received copies with the issue record.
Respond: The exam switches to a reserve form drawn from the bank. The custody ledger identifies the failed leg and the affected centres are held.

**Examination centre (LS5).**
Prevent: Hardened government labs with wired CCTV, room jammers, locked images and network isolation [T3, C05]. Keys and strong rooms are under dual custody, with keys at the centre only from T−30.
Detect: CCTV analytics flag events for human review, on top of at least one wired camera per 12 candidates [F-A19]. A live feed reaches the state cell and CERT-Exam.
Respond: The scoped rule cancels only the affected centre and re-tests it. A blind spot or a custody lapse leads to review of the centre's accreditation.

**Candidate authentication (LS6).**
Prevent: One-to-one face match against the registration photo with a liveness check, plus a QR e-admit card as UPSC uses [F-A17].
Detect: The liveness check flags photographs, masks and screens. CERT-Exam reviews rejection and mismatch patterns by centre for clusters that suggest organised impersonation.
Respond: An alternate-ID desk lets a human resolve any rejection. Confirmed impersonation goes to police, and no candidate is excluded by a machine result alone.

**Examination (LS7).**
Prevent: Locked node images with remote desktop and USB disabled [F-A19], and 96 forms so that a compromised form reaches 23,646 candidates at most [Model]. Jammers and wired cameras cover the room.
Detect: The network operations centre watches traffic and logs for the remote-access signatures seen in JEE Main 2021 and the other CBT cases [F-B10, F-B11], and keeps logs for 180 days in India [F-P20].
Respond: Only the compromised form is re-tested. Buffer nodes let candidates move when a platform fails, as at SSC Selection Post Phase 13 in 2025 [F-B12].

**Evaluation and results (LS8).**
Prevent: Responses stay encrypted until marking, and marks and source sheets are under dual custody with results signed by the exam body. The record includes a deputy superintendent reported to have charged ₹10 lakh per student to fill answers later at Godhra [F-B05].
Detect: The independent auditor runs answer-similarity, response-time and score-gain analysis on every exam [F-P04]. Marks are checked against source sheets.
Respond: A human panel decides on any flagged group, and results are held for that group only. The finding is published in the root-cause report.

### 13.7 CBT or pen-and-paper: a choice by capacity

The design does not say that computer-based testing is always better. The choice depends on capacity. The team proposes CBT where secure capacity exists and CPPT where it does not.

| Situation | Mode | Reason |
|---|---|---|
| Large national exam, secure labs available | CBT, multi-form, multi-shift | Government plan already moves NEET-UG to CBT over five to six days in nearly 1,000 centres [F-P18]; the item bank makes each form small |
| Exam for which centres or IT capacity are thin | CPPT: encrypted e-delivery, print at centre, unique code per copy | Radhakrishnan design [F-P14]; removes the printing press and transport leg |
| Remote areas | Mobile test centres of about 150 seats, or CPPT | Radhakrishnan proposal for mobile centres [F-P14] |
| Tier 3 exams under 50,000 | Existing mode with custody log and watermark | Proportionate control (Section 11.8) |

The record justifies keeping both modes. Pen-and-paper leaks at presses and in transit [F-B08, F-B09], and CBT is exposed to remote access and platform failure [F-B10 to F-B12]. The UPSC contrast [F-D12] shows that neither mode is secure or insecure in itself. What differs is what any one person can reach.

## 14. Accountability: liability follows the breach, and a leak stops paying its seller

The brief asks "How should responsibility, audits and liability be assigned after a breach?" [B Q4] and requires the team to "Establish clear responsibility, audits and liability mechanisms" [B D4]. The design has two halves. The first is procedural: a clock that starts when a breach is flagged, with an owner at each step. The second is economic: a liability structure and a detection rate that together make a leak lose money for the person who sells it. The section closes with the honest limit of that economic argument, which is that its parameters are illustrative.

### 14.1 The breach response clock

The clock is the team's proposal. Its purpose is to replace improvisation, which is what the record shows. UGC-NET June 2024 was cancelled for 9.08 lakh candidates on a threat-analytics input, and the CBI later closed the case after finding a doctored, backdated screenshot [F-B07]. NEET-UG 2026 was held on 3 May 2026 and cancelled on 12 May, nine days later, with the re-exam on 21 June [F-B01]. One case cancelled too fast on bad evidence. The other cancelled slowly on good evidence.

| Time | Step | Owner | What must happen |
|---|---|---|---|
| T+0 | SOC or tip-off flags a breach | CERT-Exam, or the SRO if a tip arrives at the exam body | Incident opened; affected forms, keys and access frozen |
| T+6h | Notify NEIAA and CERT-In | SRO of the exam body | Written notice to NEIAA and CERT-In. The six hours mirror the CERT-In rule for cyber incidents [F-P20] |
| T+24h | Verify the leak by watermark | CERT-Exam, countersigned by the independent auditor | The circulating image is matched to an issued copy, or shown not to match any; source copy, centre and custody chain traced |
| T+72h | Cancel only the affected forms | SRO decides on NEIAA's written advice | Scoped cancellation under the rule in Section 14.2; unaffected candidates keep their results |
| T+15d | Re-test that segment | Exam body, on its own budget | Re-test for the affected candidates only; Candidate Protection Fund reimburses travel |
| T+30d | Publish the root-cause report | NEIAA | Public report with cause, chain of hands, fix and owner |
| T+60d | Probe closes by law | STF, under the 2026 Amendment | Investigation completes within two months [F-P11] |

*Source: Team IdeaForge design (Slide 7), building on [F-P11] and [F-P20].*

Three points on the clock need explaining.

**The six-hour figure is an extension of an existing rule.** The CERT-In Directions require reporting of cyber incidents within six hours [F-P20, S54]. They do not, on the sources reviewed, cover a paper leak as such. The team proposes that NESS extend the same interval to any exam-integrity incident, and that the notice go to NEIAA as well as CERT-In. The six hours is a design choice; the 24-hour verification step is what makes a fast clock safe.

**The 24-hour verification step is what separates a leak from a hoax.** In UGC-NET 2024 the exam was cancelled before any check that could have separated a doctored image from a real one. Per-copy watermarks make the check quick: a genuine leaked image carries a code that maps to an issued copy, and a fabricated one does not [F-B07]. Verification is therefore a technical procedure and not an argument between officials.

**The re-test interval depends on scope.** NEET-UG 2026's full re-test took 40 days from cancellation (12 May to 21 June) [F-B01], and attendance fell from 96.72% to 87.72%, with over 2.7 lakh skipping [F-B04]. A re-test at T+15 days is realistic for a segment such as one form's 23,646 candidates [Model]. It would not be for 22.7 lakh, and the design does not promise it.

### 14.2 The scoped-cancellation rule

The Supreme Court's 2024 test for cancellation is that it is justified only when "it is not possible to separate the tainted candidates from the untainted ones", on material showing "a real possibility of systemic malaise" [F-P05]. It also said "Flip flops are anathema to fairness" [F-P06]. The Court applied the test to a leak it found limited to Patna and Hazaribagh, and declined a full cancellation [F-P04]. Yet the Court was working after the event, with the candidate population to hand and no clean way of separating people.

PRAMAAN's rule turns the Court's test into something that can be run in 72 hours. A candidate is tainted if and only if verification (Section 14.1) ties the leak to their form, their centre or their copy. With 96 forms and per-copy watermarks, separation is mechanical and does not need an inquiry. The rule has three parts, all team proposals.

1. **Cancel scope equals leak scope.** The forms, centres or copies that the watermark and custody ledger tie to the leak are cancelled and re-tested. Others stand.
2. **Wider cancellation needs a systemic finding.** Cancellation beyond the scope requires a written finding, published with reasons, that the bank itself has been compromised beyond the 5% cap, or that separation is impossible. This is the Court's systemic-malaise test in NEIAA's hands.
3. **Criteria are published before the cycle.** The rule and its thresholds are fixed and public in advance, so a decision is applied and not invented, which addresses the "flip flops" concern [F-P06].

The rule also answers a practical problem in the NEET-UG 2024 record: 1,563 candidates received grace marks that were later withdrawn with a retest [F-B06], a sequence that damaged confidence more than the underlying event. Scoped cancellation avoids the choice between cancelling everything and doing nothing.

### 14.3 The liability ladder

Liability is placed on the party best able to prevent the breach. The ladder distinguishes what the law already provides from what PRAMAAN adds.

| Rung | Who | Sanction | Basis |
|---|---|---|---|
| Individual | Person who leaks, sells or cheats | 5 to 10 years and up to ₹50 lakh | Existing, 2026 Amendment [F-P08] |
| Organised crime | Gang or syndicate | At least 7 years and at least ₹10 Cr, with property seizure | Existing, 2026 Amendment [F-P10] |
| Service provider | Vendor and its directors | Up to ₹5 Cr and 8-year debarment; directors and senior management 5 years or more and ₹5 Cr [F-P09]. PRAMAAN adds uncapped contractual damages, strict liability for subcontractors and de-accreditation | Existing statute plus proposed contract terms |
| Exam body | Body and its named SRO | Re-test funded from the body's own budget; named officer answerable to the Ombudsman and CAG | Proposed |
| System | NEIAA and NESC | Annual integrity report to Parliament; CAG audit every three years; public root-cause reports | Proposed |

*Source: Team IdeaForge design (Slide 7); penalty rows from [F-P08] to [F-P10].*

Two features are deliberate. The first is that the exam body pays for its own re-test. Today a re-test is a cost that falls on candidates and on the public, and no budget line feels it. The 2026 re-exam carried no fresh registration and no additional fee [F-A24], so the cost fell on households, estimated at ₹1,000 to ₹2,000 a student, over ₹300 Cr nationally [F-A23], and on the NTA. Charging the responsible body creates a reason to invest in prevention. The second is that PRAMAAN pays for the candidate's loss out of a Candidate Protection Fund, sized at ₹50 Cr a year on a basis of about 3.3 lakh re-sit reimbursements at ₹1,500 plus counselling [T3, C11]. The candidate is compensated whether or not the responsible party can pay, and the fund can claim against the responsible body or vendor.

There is an enforcement gap that the ladder alone does not close. PRS notes that the 2026 Amendment sets an investigation deadline but no consequence for missing it, and that existing fast-track special courts already carry over 2.45 lakh pending cases [F-P12]. The team's proposal is administrative: NEIAA reports missed deadlines, by exam, to NESC and in the annual report. That is an inexpensive way of attaching a consequence to the deadline without changing the statute.

### 14.4 Contract reforms: today against PRAMAAN

The table compares the terms of the NTA's March 2026 CBT tender, as summarised in the fact base, with the team's proposed terms. The "Today" column describes one tender and should not be read as a description of every exam body's contracts.

| Lever | Today (NTA CBT tender, Mar 2026) | PRAMAAN (proposal) |
|---|---|---|
| Vendor duty | NTA "shall not be responsible for any vulnerability in the software of the service provider and integrity of the exam functionaries deployed by them" (cl. 11.3) [F-A20] | Vendor liable for its software and its people; strict liability for subcontractors |
| Subcontracting | Vendor may use third parties for exam manpower, CCTV, biometric authentication and guards (cl. 12) [F-A20] | No subcontracting of identity or custody without NEIAA approval |
| Bank guarantee | 10% of exam value, for 12 plus 3 months; EMD ₹2 Cr [F-A20] | 15% of exam value plus exam insurance |
| CCTV failure | 10% of the quoted per-candidate rate [F-A20] | Failure recorded against accreditation |
| Blind spot | ₹200 per blind spot [F-A20] | Centre de-accredited |
| Volume pricing | Rate falls to 0.95 times at 50 to 75 lakh tests and 0.50 times at 2.75 to 3 crore [F-A20] | Flat rate with performance adjustment; 40% cap on national CBT volume |
| Breach notice | No fixed clock in the tender terms as summarised [F-A19, F-A20] | Six hours to NEIAA |
| Public report | Not a term of the tender; the team found no routine publication in the sources reviewed | Root-cause report within 30 days |
| Data centres and footage | Two seismic zones; footage kept three months [F-A19] | Retained as a floor; footage retention set by NESS |

*Source: [F-A19], [F-A20]; PRAMAAN column is the team's proposal (Slide 7). The 15% figure and the 40% cap are team design choices.*

The 15% guarantee raises the amount at stake by half compared with today. The team chose it so that the guarantee exceeds a plausible re-conduct cost per exam, but it has no external benchmark and should be treated as a negotiable design parameter. Exam insurance is a risk transfer that adds an independent assessor of vendor quality, since an insurer prices the vendor's controls. It is not one of the model's twelve cost components [T3] and would be a cost carried in tender prices. De-accrediting a centre for a blind spot is a heavier sanction than a ₹200 penalty, and it puts the cost of a camera failure on the operator best placed to prevent it.

### 14.5 The audit calendar

| Audit | How often | Who | Purpose |
|---|---|---|---|
| Readiness check | Each cycle | Independent auditor with the state cell | Confirms centres, devices, keys and staff before the exam |
| NESS compliance | Annual | NEIAA assessors | Accreditation renewal for vendors, centres and exam bodies |
| Red team | Twice a year | Accredited independent testers | Attempts to breach the vault, a centre and a CBT node |
| Answer forensics | Every exam | Independent auditor and CERT-Exam | Similarity, response time and score-gain analysis [F-P04] |
| CAG audit | Every three years | CAG | Audits NEIAA itself |

*Source: Team IdeaForge design (Slide 7).*

The programme is budgeted at ₹50 Cr a year, on a basis of 50 exam bodies at ₹1 Cr each [T3, C09]. The audits are independent of the bodies they examine, which is the audit-side counterpart of NEIAA not conducting exams (Section 12.6). The independent auditor also holds one key share. That creates a self-review risk, so the auditor's key ceremonies are themselves audited by the CAG, and the auditor does not audit its own share.

### 14.6 Principal-agent analysis

The public and candidates are principals. Exam bodies, vendors, setters, printers and centre staff are agents whose actions the principal cannot observe. The record shows how that asymmetry is exploited. A member of the RPSC, assigned to set a paper, is reported to have shared it before printing for ₹60 lakh [F-B14]; an employee of a printing press is alleged to have handed over a copy in the GPSSB case [F-B13]; logistics staff and a doctor are alleged to have opened a sealed consignment in the UP Police case [F-B08]; and an assistant section officer and a system administrator are alleged to have retrieved papers from commission computers at TSPSC [F-B15]. Each agent had private information (the paper) and an incentive to sell it (families are reported to have paid ₹2 lakh to ₹10 lakh in 2026 [F-B02, snip]).

Standard mechanism design has four levers, and PRAMAAN uses all four. It reduces the agent's private information, through the bank cap and late assembly. It improves monitoring, through watermarks, ledgers and logs. It raises the stake the agent puts at risk, through strict vendor liability, the 15% guarantee, de-accreditation and named SROs. And it reduces the rents from misbehaviour, by making a leaked paper worth much less (Section 14.7). The current tender does the reverse on the second and third levers: its clause 11.3 removes the principal's stake, and its clause 12 lengthens the chain of agents [F-A20].

### 14.7 Becker's model and the attacker's economics

Becker's argument is that offending falls with the probability of conviction times the punishment, and that the certainty of detection matters as much as its severity [F-D17, S71]. India has raised severity steeply. The 2026 Amendment lifts individual penalties to 5 to 10 years and up to ₹50 lakh, service-provider fines to ₹5 Cr and organised-crime penalties to at least ₹10 Cr [F-P08 to F-P10], and Uttarakhand and Jharkhand already allow life imprisonment and up to ₹10 Cr [F-P13]. Leaks continued regardless, and 52 FIRs had been registered under the 2024 Act by the time of the 2026 Amendment (as reported) [F-P11]. The brief's objective sentence is the same test in other words: make "the cost of attack significantly higher than its expected benefit" [B SO0].

The model translates this into the expected value of a leak to its seller. All the inputs are assumption A16. The seller of a leaked paper has 300 buyers paying ₹5 lakh each, so revenue is ₹15.0 Cr. Detection probability is 10% today and 60% under PRAMAAN. The fine on detection is ₹10 Cr. Expected value equals revenue minus detection probability times fine. The revenue under PRAMAAN scales with what the seller can offer: the paper exposed falls from 67% to 2.5%, so revenue falls in the same proportion, from ₹15.0 Cr to ₹0.56 Cr [Model, T9].

| | Today | PRAMAAN |
|---|---|---|
| Buyers × price | 300 × ₹5 lakh | Same |
| Share of the paper the seller can offer | 67% | 2.5% expected |
| Revenue (₹ Cr) | 15.0 | 0.56 |
| Detection probability | 10% | 60% |
| Fine (₹ Cr) | 10 | 10 |
| Expected penalty (₹ Cr) | 1.0 | 6.0 |
| **Seller's expected value (₹ Cr)** | **+14.0** | **−5.44** |

*Source: [T9, Model]; parameters from [A16].*

The result is a swing from +₹14.0 Cr to −₹5.44 Cr. Two derived checks show where it comes from, and both use only the A16 inputs. First, at today's revenue, even certain detection at a ₹10 Cr fine leaves the seller ₹5.0 Cr ahead, and at 10% detection the fine would need to be ₹150 Cr to remove the profit. Severity alone does not close the gap. Second, under PRAMAAN the seller's expected value stays negative at any detection probability above about 5.6% (₹0.56 Cr ÷ ₹10 Cr), so the design has a wide margin against detection that turns out to be weaker than the 60% assumed. The main effect comes from the reduction in what there is to sell.

**The caveat, stated plainly.** The parameters in A16 are illustrative assumptions and not measurements. The 300 buyers and ₹5 lakh price are anchored loosely on reported resale at ₹5 lakh or more in the RPSC case and ₹2 lakh to ₹10 lakh in NEET-UG 2026 [F-B14, F-B02]. The 10% present detection rate and the 60% target are the team's estimates, not statistics: no source in the fact base gives a detection rate. The ₹10 Cr fine borrows the organised-crime minimum in the Amendment [F-P10] and assumes the fine is actually collected, which is not certain. The model treats one seller and one paper and ignores the seller's other costs and the buyer's side of the market. The purpose of the calculation is to show the direction and the mechanism, and the numbers should be quoted with A16 attached. Under rule R5, stated assumptions are permitted where reliable data is unavailable [B R5], and A16 is disclosed on the assumptions register and on the appendix slide.

### 14.8 Whistle-blowers and public reporting

Detection depends on people who see something. The team proposes a protected channel through the Exam Integrity Ombudsman, a reward for verified disclosures with the scale to be set in NESS, and protection from retaliation for staff of exam bodies and vendors. The reward is not costed in the model [T3]. Public reporting completes the loop. NEIAA publishes each root-cause report within 30 days, an annual integrity report goes to NESC and Parliament, and the KPI set in Section 17 (leak probability, blast radius, detection time, response time, cost per sitting and access) is published each year. The design principle is that each incident produces a public record and a named owner, so the cost of a failure is borne where the failure occurred.

## 15. Privacy, accessibility and affordability: security at ₹135 a sitting without exclusion

The brief poses the last of its six questions as "How can security improve without compromising accessibility and affordability?" [B Q6] and lists "Privacy vs Surveillance" among its challenges [B CH6]. Its fundamental challenge is that security "must be strengthened without making the examination ecosystem prohibitively expensive, inaccessible or overly centralised" [B CH0]. The design's answer has three parts: a proportionality test that the three data-heavy technologies must pass, a data design that limits what is collected and how long it is kept, and an access and cost design that keeps candidates from paying for the security with distance or fees.

### 15.1 The Puttaswamy test applied to three technologies

In Puttaswamy (2017) the Supreme Court held privacy to be a fundamental right and said that a state intrusion must pass four tests: legality, a legitimate aim, proportionality and procedural safeguards [F-P21, S60]. The team applies the four prongs to face matching, CCTV and AI analytics, the three technologies in PRAMAAN that process personal data at scale. This is the team's own reading of the test applied to its own design. It is not a legal opinion, and counsel would need to confirm it.

| Prong | Face matching | CCTV | AI analytics |
|---|---|---|---|
| Legality: is there a law? | The DPDP Rules 2025 provide the general data framework [F-P19]. A PRAMAAN chapter and NESS would supply the specific authority for identity checks at exams (Section 12.2) | CCTV is already a term of the NTA tender [F-A19], which is a contract, not a law. NESS under the proposed chapter would give it statutory footing | The NEIAA chapter would authorise forensics on exam-generated data. The IIT Madras analysis was accepted by the Court without a separate statute [F-P04] |
| Legitimate aim | Prevent impersonation and dummy candidates. Three of 49 coded incidents sit at candidate authentication [T7] | Give evidence of what happened in a room and deter misuse in custody spaces. The Court listed inadequate CCTV among the NTA's lapses [F-P06] | Detect collusion, answer copying and false alarms at a scale no human panel can screen, across about five crore sittings a year [T1] |
| Proportionality: necessary and least intrusive | One-to-one match only, no database search, no template store; scoped to Tier 1 and 2; human fallback. The weakest necessity case of the three, and the reason spending is limited to ₹100 Cr [T3, C06] | Wired cameras in exam rooms and custody rooms only, not in corridors outside the centre or in candidates' homes; camera density set at the tender's floor of one per 12 candidates [F-A19] | Runs only on data the exam itself produces (responses, timings, logs, access records); no external profiling; no emotion inference; a flag is not a finding |
| Procedural safeguards | Alternate-ID desk; deletion 90 days after results; DPIA before deployment; independent audit | Two-person access to footage, access logs, notice at every centre, retention period fixed in NESS | Human panel decides; appeal to the Ombudsman; false-positive rate published each exam; annual audit |

*Source: Team IdeaForge analysis applying the four prongs of [F-P21]; design elements are proposals.*

**Face matching.** The design is at its narrowest here because the need is the smallest. The record shows impersonation and dummy-candidate incidents (for example NEET-UG impersonation in 2021 and PPSC Naib Tehsildar in 2022 [T11]) but only three of the 49, and none of the large cancellations. The team keeps face matching because UPSC has already adopted it with liveness checks for its 2026 prelims [F-A17], because a manual photograph check is the alternative and it is the process under which the coded incidents happened, and because the intrusion, a live photograph compared to one already given at registration, is limited. The proportionality argument would fail if the design compared candidates against any wider database, and it does not.

**CCTV.** The necessity case is stronger, because the Court has itself named inadequate CCTV as a lapse [F-P06] and the strong-room failure at Hazaribagh [F-B05] is a custody event that video would have recorded. The proportionality control is location: cameras in rooms where an exam or its custody is at stake. Candidates are recorded because they are in those rooms, and the safeguards address who may see the recording and how long it is kept.

**AI analytics.** The necessity is the scale of the data. Its intrusion is small in one respect (it uses data candidates produce in the exam) and significant in another (a flag can affect a person). The safeguard is that a flag alone never affects anyone. The Court's acceptance of an IIT Madras analysis [F-P04] shows that forensics of this kind is treated as legitimate evidence when a person reviews it, and the team's guardrail is built on that point.

### 15.2 DPDP Rules: what the design commits to

The Digital Personal Data Protection Rules were notified on 13 November 2025, with phased compliance over 18 months to 13 May 2027 [F-P19, S56]. The fact base records four features that matter to examination bodies: verifiable parental consent for children's data, with exemptions such as education; data protection impact assessments and annual independent audits for significant data fiduciaries; the treatment of biometric data as personal data, with no separate "sensitive" class; and the phased timetable itself [F-P19]. The team does not record other provisions from primary text and does not rely on them. The design commitments below are the team's own, chosen to be defensible under any reading of the Rules.

| Area | Commitment (team proposal unless tagged) |
|---|---|
| Notice | Candidates are told at registration what is collected (registration photograph, gate photograph, exam responses, logs), for what purpose and for how long |
| Purpose limit | Face data is used for identity at the gate and for no other purpose, including no reuse for research or for any other government database |
| Children's data | Many candidates are under 18. The Rules require verifiable parental consent for children's data, with exemptions such as education [F-P19]. Whether an exam body's face matching falls within an education exemption is a question for counsel; the design does not depend on the answer, because notice, a consent path and an alternate-ID route are provided regardless |
| Retention | Face captures and match results deleted 90 days after results. CCTV footage kept for a period set in NESS, not below the three months in today's tender [F-A19], and extended only under a legal hold. ICT logs for 180 days in India as CERT-In requires [F-P20]; logs hold no face templates |
| Breach reporting | A personal-data breach inside PRAMAAN follows the same six-hour clock to NEIAA and CERT-In as a paper breach (Section 14.1), with data-protection notification alongside |
| DPIA and audit | A DPIA before each new deployment and an annual independent audit, whether or not an exam body is designated a significant data fiduciary [F-P19] |
| Timing | Full compliance by 13 May 2027 is a milestone on the roadmap [F-P19] |

The retention rule for face data has a reason. Ninety days runs past the 60-day investigation clock (Section 14.1), so a match record is available if a dispute arises, and stops well short of an open-ended store. The number is a design choice and not a legal requirement.

### 15.3 Data design in five rules

1. **One-to-one only.** A face is compared with the registration photograph of the claimed candidate, never searched against a population.
2. **No new central store.** PRAMAAN keeps registration photographs, which exist already, and creates no national template database.
3. **Deletion 90 days after results,** with a legal hold as the only extension.
4. **DPIA first.** A data protection impact assessment is completed before a control that processes personal data is deployed at scale.
5. **Aadhaar optional.** Aadhaar-based authentication can be one route, and it is never the only one. UPSC's 2024 tender sought Aadhaar fingerprint and face authentication [F-A17], and the Radhakrishnan design built DIGI-EXAM on Aadhaar and biometrics [F-P14], but a candidate without Aadhaar authentication working must still be able to sit the exam.

### 15.4 Access: distance, language and disability

The move to CBT changes the map of where candidates sit. NEET-UG 2025 ran pen-and-paper at 5,468 centres in 552 cities plus 14 cities abroad [F-A03]. The Government's CBT plan uses nearly 1,000 centres [F-P18]. That is about 5.5 times fewer (5,468 ÷ 1,000), and on that arithmetic a candidate's journey to a centre can lengthen sharply, which is a cost the fee does not show. A similar scale exists in other exams: UGC-NET CBT used 558 centres across 266 cities [F-A07] and JEE Main 598 centres in 284 cities [F-A06]. The design offers four responses, all proposals.

- **Distance target.** NESS sets a target that a candidate's assigned centre is within 50 km of the candidate's home, where the exam mode permits.
- **Two modes.** CPPT runs where CBT capacity is thin (Section 13.7), and the 2,500 hardened government labs [T3, C05] are used with the Radhakrishnan proposal of at least 1,000 secure testing centres in government institutions [F-P14].
- **Mobile centres.** The Radhakrishnan Committee proposed mobile testing centres of about 150 seats for remote areas [F-P14]; PRAMAAN adopts them for the areas that no fixed centre reaches within the distance target.
- **Language and disability.** The item bank is translated into 13 languages at the item level with the cap applied within each language pool [T3, C02]. Candidates with disabilities receive scribes and extra time under NESS, and the biometric and liveness checks have an alternate-ID route so that no one is excluded by a device.

### 15.5 Affordability

At steady state PRAMAAN costs ₹673.5 Cr a year to run, which is ₹134.6 a sitting across about 5.00 crore sittings, and ₹123.6 a sitting averaged over the ten years including capital [Model, T3]. Against the NEET-UG 2026 general fee of ₹1,700 [F-A15], ₹134.6 is 7.9% [Model]. That figure is the system cost per sitting, not what the candidate pays.

The candidate contribution is an integrity levy of ₹50 a sitting [A15], which is under 3% of the ₹1,700 fee, raising ₹250.2 Cr a year [T10]. SC, ST and PwD candidates, for whom the NEET-UG fee is ₹1,000 [F-A15], are waived, and the waivers are paid from the Union share. The remaining funding is the Union budget at ₹351.3 Cr (52%) and the state share at ₹72.0 Cr (11%) [T10].

| Funding source | ₹ Cr a year | Share |
|---|---|---|
| Union budget | 351.3 | 52% |
| Integrity levy (₹50 a sitting) | 250.2 | 37% |
| States (40% of C10) | 72.0 | 11% |
| Total | 673.5 | 100% |

*Source: [T10, Model, A15].*

The comparison that matters is with what candidates lose today. The model values the direct cost of a cancellation at ₹7,300 per affected candidate: ₹1,500 household, ₹5,000 of time and ₹800 to re-conduct [Model, A06 to A08]. One avoided re-sit is worth 146 levies of ₹50 (₹7,300 ÷ ₹50). The household cost of the 2026 re-exam alone was estimated at ₹1,000 to ₹2,000 a student, over ₹300 Cr nationally [F-A23], and the re-exam carried no additional fee [F-A24], so the cost fell on families instead of the exam body. The levy moves a small, predictable cost onto every sitting to remove a large, unpredictable one from the few who are hit. The NTA also reported a surplus of ₹449.21 Cr over 2018-19 to 2023-24 with no security spending disclosed [F-A13]. The model does not count any offset from this and funds PRAMAAN from the sources in the table.

### 15.6 Why internet shutdowns are excluded

The exclusion follows from all three tests in this section. On access, a district-wide shutdown falls on everyone in the district, not on candidates. Rajasthan cut mobile internet from 6 am to 6 pm on 26 September 2021 for REET and again in seven districts in February 2023 [F-P22]. On legality, SFLC.in argues that exams are not a "public emergency" under the law that would authorise it [F-P22]. On effectiveness, REET 2021 had already leaked from a district strong room two days before [F-B16], so the shutdown could not have prevented it. The nationwide Telegram block until 22 June 2026 [F-B04] is a similar blunt instrument. PRAMAAN's premise is that the paper does not exist in leakable form until an hour before the exam. A control on the internet at large is not needed when there is nothing complete to leak, and its costs fall on people who did nothing wrong.

### 15.7 What this section commits the design to

The design commits to five things in exchange for the security it buys. It will collect a narrow set of personal data and delete it. It will not let a machine exclude a candidate. It will not use blanket shutdowns. It will keep the candidate's cost of sitting an exam close to the cost of the seat (₹50 a sitting on a ₹1,700 fee), and it will publish its false-positive rates and its audit results. The residual risk is litigation over face matching of minors, which Section 19 carries in its register.

## 16. Cost-benefit: ₹7,092 Cr over ten years returns ₹3.14 for every rupee

### 16.1 Method and scope

This section answers the brief's spending question, "What level of security spending is economically justified?" [B Q5], and deliverable D6 [B D6]. The method is a cost-benefit analysis of the kind used in a regulatory impact assessment. It estimates the expected annual loss (EAL) that cancelled examinations impose today, applies the share of that loss PRAMAAN removes at each year's coverage, discounts at 8% real [A09], and sets the result against the programme's cost. Values are in 2026 prices and ₹ Cr, for the ten years 2027 to 2036, and every figure comes from one script, pramaan_model.py [Model].

Avoided loss in year t equals the EAL, grown at 3% a year [A03], times the share of national volume under PRAMAAN that year [A10], times the loss cut. The loss cut is 1 − (1 − p)(1 − b), where p is the reduction in breach probability and b the reduction in candidates hit per breach [A14]. The base case sets p at 50% and b at 60%, so the cut is 80%. Payback is the first year in which cumulative undiscounted benefit reaches cumulative cost. Year one is discounted by a full year. Two limits belong before the numbers. The EAL rests on a documented sample of incidents, not a census [F-B19]. The unit costs in the cost build are the team's estimates, not procurement records, which is why the tornado moves programme cost by 30% either way [T6].

### 16.2 The expected annual loss build (T2)

| Line | Value | Basis |
|---|---|---|
| Candidates hit by cancellations a year | 38.59 lakh | 28 lakh a year from 1.4 crore over five years [F-B17][S01], plus one third of the 9.08 lakh (UGC-NET June 2024) and 22.7 lakh (NEET-UG 2026) candidates whose exams were cancelled [F-B07][F-B01] |
| Cost per affected candidate | ₹7,300 | ₹1,500 household [A06] + ₹5,000 time [A07] + ₹800 re-conduct [A08] |
| Direct candidate and re-conduct loss | ₹2,817.3 Cr | 38.59 lakh × ₹7,300 |
| Stalled posts | ₹499.2 Cr | 20,800 posts a year (1.04 lakh over five years [F-B17]) × 8 months [A04] × ₹30,000 a month [A05] |
| Expected annual loss (EAL) | ₹3,316.5 Cr | Direct loss plus stalled posts [T2] |
| EAL, cash only | ₹1,386.8 Cr | Removes the ₹5,000 of candidate time [T2] |
| Gordon-Loeb ceiling | ₹1,220.1 Cr | EAL ÷ e [T2][F-D16] |

The two 2024 to 2026 cancellations are spread over three years, a model construction that carries no separate assumption ID. They do not overlap the Indian Express window, which closed in February 2024 [S01]. NEET-UG 2024 is left out because that exam was not cancelled, and nothing is added for the 1,563 candidates who received grace marks and a retest [F-B06]. The Indian Express figure counts documented leaks and the applicants affected, so treating every affected applicant as bearing a re-sit cost is a simplification the team accepts and flags [F-B17].

The household cost is the midpoint of the ₹1,000 to ₹2,000 reported for the 2026 NEET-UG re-exam [F-A23]. At ₹1,500 across 22.7 lakh candidates it comes to ₹340.5 Cr, which is consistent with the reported figure of over ₹300 Cr nationally [F-A05][F-A23]. The re-conduct cost starts from the NTA's spending of ₹3,064.77 Cr across 2018-19 to 2023-24, about ₹600 per registration over roughly 5 crore registrations, and is raised to ₹800 for re-test logistics [F-A13][A08]. Candidate time is the largest single term: ₹5,000 is half a month at ₹10,000 [A07], and it makes up about 58% of the EAL. That dependence is why the cash-only case exists.

### 16.3 The cost build (T3 and its basis)

| ID | Component | Capex ₹ Cr | Opex ₹ Cr a year | Basis (team estimate) |
|---|---|---|---|---|
| C01 | NEIAA | 150 | 120 | About 300 staff at ₹25 lakh loaded (₹75 Cr) plus ₹45 Cr operations; capex for headquarters and a share of the national SOC fit-out |
| C02 | Item Bank Vault and 45,000 calibrated items | 172.5 | 38 | 15 Tier-1 exams × 150 items × 20 = 45,000 items at ₹25,000, including translation into 13 languages and pre-testing (₹112.5 Cr), plus a ₹60 Cr vault; opex is a 25% annual refresh (₹28 Cr) and ₹10 Cr vault operations |
| C03 | Split-key cryptography | 40 | 8 | Hardware security modules at two sites, PKI, key ceremonies |
| C04 | Watermark, ledger, smart locks | 50 | 17.5 | 5,000 smart-lock boxes at ₹1 lakh; ₹5 per printed copy for about 1.5 crore copies (₹7.5 Cr) plus ₹10 Cr ledger operations |
| C05 | Lab hardening | 75 | 25 | 2,500 existing government labs at ₹3 lakh (wired CCTV, room jammers, locked images, network isolation); ₹1 lakh a lab a year |
| C06 | Identity at the gate | 100 | 15 | 10,000 centres × 4 devices × ₹25,000; about ₹3 a candidate in operations |
| C07 | CERT-Exam SOC and AI forensics | 80 | 60 | 24×7 SOC, psychometric forensics, network and CCTV analytics with human review |
| C08 | Insider programme | 0 | 50 | Vetting about 3 lakh functionaries at ₹300 (₹9 Cr) and sequestering about 2,000 setters and translators at ₹2 lakh (₹40 Cr), rounded up |
| C09 | Audits and red teams | 0 | 50 | 50 exam bodies × ₹1 Cr |
| C10 | 36 State Examination Security Cells | 72 | 180 | 36 cells × ₹2 Cr set-up and ₹5 Cr a year; Centre 60%, states 40% |
| C11 | Candidate Protection Fund | 0 | 50 | About 3.3 lakh re-sit reimbursements at ₹1,500, plus counselling, rounded up |
| C12 | Exam-crime investigation | 40 | 60 | Forensic labs and an exam-crime unit supporting the 2026 Act's task forces [F-P11] |
| | **Total** | **779.5** | **673.5** | [T3] |

Capex of ₹779.5 Cr is spread 40%, 40% and 20% over 2027 to 2029 [A12]. Opex of ₹673.5 Cr a year ramps at 40%, 70% and then 100% [A11]. Hardware accounts for ₹460.0 Cr of capex, and 40% of it is renewed in 2032 as a ₹184.0 Cr refresh on a five-year device life [A13]. Ten-year cost is therefore ₹779.5 Cr of capex, ₹184.0 Cr of refresh and about ₹6,129 Cr of opex, which sums to ₹7,092.4 Cr [Model]. The largest opex lines are the state cells (₹180 Cr, 27%) and NEIAA (₹120 Cr, 18%). The largest capex lines are the item bank (22%), NEIAA (19%) and identity devices (13%).

For scale, steady opex of ₹673.5 Cr is about 65% of the ₹1,040.96 Cr the NTA spent in 2023-24 [F-A13]. The comparison is loose, because the NTA runs roughly one crore tests and PRAMAAN covers about five crore sittings across all bodies [F-A08][T1]. It shows that the programme is a material line, not a rounding error, and that no security spend is disclosed in NTA accounts today [F-A13].

### 16.4 The year path (T4)

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

Coverage, not effectiveness, drives the shape of the curve [A10]. Avoided loss is 8% of the EAL in 2027, 28% in 2028, 48% in 2029, 64% in 2030 and the full 80% from 2031 [A10][A14]. Annual benefit passes annual cost in 2028, cumulative benefit passes cumulative cost in 2029, and the deepest cumulative shortfall is ₹316 Cr at the end of 2027. By 2031 the undiscounted net position is +₹4,676 Cr, and by 2036 it is +₹17,454 Cr [T4]. The 2032 refresh lifts that year's cost to ₹857.5 Cr, still below the year's avoided loss of ₹3,075.8 Cr. Discounted at 8%, benefits are ₹14,978.2 Cr and costs ₹4,767.6 Cr [T5].

### 16.5 Scenarios and the cash-only stress (T5)

| Scenario | Loss cut | PV benefit | PV cost | NPV | BCR | Payback |
|---|---|---|---|---|---|---|
| Bear (p 30%, b 40%) | 58% | 10,859.2 | 4,767.6 | 6,091.6 | 2.28 | 2030 |
| Base (p 50%, b 60%) | 80% | 14,978.2 | 4,767.6 | 10,210.6 | 3.14 | 2029 |
| Bull (p 65%, b 75%) | 91% | 17,084.5 | 4,767.6 | 12,316.9 | 3.58 | 2028 |
| Base, cash only | 80% | 6,263.3 | 4,767.6 | 1,495.8 | 1.31 | 2032 |

The scenarios vary effectiveness only [A14]. The bear case is the answer to the doubt that an 80% cut is too generous. It assumes PRAMAAN halves neither breaches nor damage, and it still returns ₹2.28 per rupee. The base case is anchored two ways. Kenya went from 5,101 cancelled results in 2015 to none in 2016 [F-D01][F-D03], and the mechanical cut in candidates exposed per breach is 96 times [T9], so the 60% cut in candidates hit is conservative against the arithmetic. Kenya is a smaller system, so it is evidence of direction, not a forecast.

The cash-only stress removes candidate time entirely and counts only what households, exam bodies and the public pay in money, plus the stalled posts. The EAL falls to ₹1,386.8 Cr, the NPV to ₹1,495.8 Cr, the BCR to 1.31 and payback moves to 2032 [T5]. The programme still clears 1.0 without valuing a single hour of a candidate's life. The model does not run joint stresses, such as the bear case combined with cash-only counting and a cost overrun. That gap is stated here so the jury does not have to find it.

### 16.6 The tornado (T6)

| Input, low to high | NPV at low | NPV at high | Swing |
|---|---|---|---|
| Candidate time per re-sit, ₹0 to ₹10,000 | 1,495.8 | 18,925.4 | 17,429.6 |
| Candidates hit a year, −30% to +30% | 6,393.5 | 14,027.7 | 7,634.2 |
| Effectiveness, bear to bull | 6,091.6 | 12,316.9 | 6,225.3 |
| Discount rate, 12% to 6% | 7,991.2 | 11,605.0 | 3,613.8 |
| Programme cost, +30% to −30% | 8,780.3 | 11,640.9 | 2,860.6 |
| Appointment delay, 4 to 12 months | 9,083.3 | 11,337.9 | 2,254.6 |
| Re-conduct cost, ₹500 to ₹1,200 | 9,687.7 | 10,907.8 | 1,220.1 |

No tested input turns the NPV negative. The lowest value in the table, ₹1,495.8 Cr, arises when candidate time is valued at zero, and it equals the cash-only NPV because the two tests are the same restriction [T6][T5]. The remaining six inputs keep the NPV above ₹6,000 Cr. A 30% cost overrun leaves ₹8,780.3 Cr, and a 12% discount rate leaves ₹7,991.2 Cr. The two inputs that matter most are the value of candidate time and the number of candidates hit each year, and both are exposure measures, not design choices. That is the right place for the uncertainty to sit, because it means the result depends on how much harm the current system does, and the current harm is documented [F-B17]. The tornado moves one input at a time.

### 16.7 The Gordon-Loeb check

The Gordon-Loeb model holds that the optimal information-security investment never exceeds 1/e, about 37%, of the expected loss [F-D16][S55]. On the EAL of ₹3,316.5 Cr the ceiling is ₹1,220.1 Cr. Steady opex of ₹673.5 Cr is 20.3% of the EAL and 55.2% of the ceiling [T2][Model]. The highest single-year cost, ₹857.5 Cr in the 2032 refresh year, is also below the 2026 ceiling [T4]. The margin between steady opex and the ceiling is ₹546.6 Cr. The result supports two claims. The spend is not extravagant, since it sits well inside the ceiling. It is not timid either, because the ten-year path shows benefits well above cost. The model was built for a firm protecting one information set, and applying it to a national programme is an analogy, so the team uses it as a ceiling test and does not claim the spend is optimal.

### 16.8 Cost per sitting and affordability

Annual high-stakes sittings total 5.00 crore, made up of 3.00 crore central and 2.00 crore state sittings [T1][A01][A02]. Over ten years, with 3% growth, that is about 57 crore sittings, and total cost of ₹7,092.4 Cr gives ₹123.6 a sitting. At steady state, opex of ₹673.5 Cr over 5.00 crore sittings is ₹134.6 [Model]. Against the NEET-UG 2026 general fee of ₹1,700 [F-A15], ₹134.6 is 7.9%. The ₹50 integrity levy [A15] is 2.9% of that fee. The cost per sitting is small next to the ₹7,300 each affected candidate loses [T2], so the affordability question for candidates is about who pays, and section 15 covers waivers and access.

### 16.9 Funding at steady state (T10)

| Source | ₹ Cr a year | Share |
|---|---|---|
| Union budget | 351.3 | 52% |
| Integrity levy (₹50 a sitting) | 250.2 | 37% |
| States (40% of C10) | 72.0 | 11% |
| Total | 673.5 | 100% |

The levy is ₹50 × 5.00 crore sittings [A15]. The Union share is the residual, so waivers for SC, ST and PwD candidates, who pay ₹1,000 against ₹1,700 for the general category at NEET-UG [F-A15], raise the Union share by the amount waived. The waiver cost is not modelled. T10 covers steady opex only. The Union is assumed to fund the capex of ₹779.5 Cr, including the ₹72 Cr of state-cell set-up, as a proposal; the 60:40 split is modelled on opex alone [Model]. The NTA reported a surplus of ₹449.21 Cr over 2018-19 to 2023-24 [F-A13], and the team proposes that the levy sit in a ring-fenced fund, not in the NTA's general receipts.

### 16.10 What is not counted

Six benefits are left out, so the BCR is conservative. Merit displacement is not priced: a candidate who loses a rank to a cheat loses more than a re-sit. Harm to candidate wellbeing, which the record reports in the NEET-UG 2026 aftermath [F-B04], is not priced. The wasted coaching spend of failed or displaced candidates is not counted, although the coaching industry is reported at about ₹58,088 Cr [F-A22, snippet, as reported]. Losses from internet shutdowns on exam days [F-P22] and the cost of court time, with over 2.45 lakh cases pending in fast-track courts [F-P12], are not counted. Public trust in merit-based selection [B B6] has no line in the model.

The cost side also has gaps. State spending on labs and staff beyond the C10 cells is not counted. Transition and training costs are inside the ±30% band and not itemised, and the model carries no contingency. The result is a floor on benefits and an estimate on costs, and the tornado shows the estimate can be wrong by 30% without changing the conclusion [T6].

## 17. The ten-year roadmap: stabilise by 2028, scale by 2031, embed by 2036

### 17.1 Three horizons and their gates

The roadmap answers deliverable D5 [B D5] and follows the three-horizons logic: defend the core first, build the next layer while the core runs, then embed the system for the long term. Each horizon ends in a gate. A gate is a test, and the next horizon's spending is released only if the test is met.

| Horizon | Years | What gets built | Gate |
|---|---|---|---|
| 1. Stabilise | 2027 to 2028 | NEIAA law and NESS v1; Tier-1 item banks begin (NEET-UG, JEE Main, CUET); split keys and watermarks live for Tier-1 exams; NEET-UG on CBT with 24 forms; state cells start | Zero Tier-1 cancellations; every Tier-1 copy traceable |
| 2. Scale | 2029 to 2031 | 96 NEET-UG forms from 2029; central item banks for SSC, RRB and UPSC; 2,500 labs hardened by 2030; 36 state cells accredited and adopting by 2031 | Blast radius under 25,000; 80% of state volume accredited |
| 3. Embed | 2032 to 2036 | Hardware refresh in 2032 [A13]; adaptive testing (CAT) pilots for NET and CUET; AI forensics and SOC on every central exam | 80% loss cut held; cost at or under ₹135 a sitting |

Horizon 1 sits on top of the Government's own July 2026 plan. NEET-UG moves to CBT from 2027 over five to six days in nearly 1,000 centres [F-P18], and the NTA is exploring AI analysis of logs [F-P17]. PRAMAAN adds what that plan lacks: item banks, split keys and watermarks. The 24 forms of 2027 to 2028 cut the blast radius from 22,70,000 to 94,583, and the 96 forms from 2029 cut it to 23,646 [T9]. Both are below the 1,13,500 of the Government's plan at about 20 shifts, which is reported and should be read as such [F-P18][T9]. The model's coverage path runs 10%, 35%, 60% and 80% from 2027 to 2030 and reaches 100% in 2031 [A10]. The Horizon 2 gate of 80% of state volume is therefore behind the model's path by design, so the model does not depend on the gate being met early, and a state-volume shortfall is carried as risk R2 in section 19.

### 17.2 The workstreams (Gantt as a table)

| Workstream | Years | Owner | Output |
|---|---|---|---|
| NEIAA law and NESS v1 | 2027 to 2028 | Ministry of Education, Parliament | NEIAA statute; first national security standard |
| Tier-1 item banks | 2027 to 2029 | NEIAA with NTA | Banks for NEET, JEE, CUET at 20 times paper length [C02] |
| Split keys, watermarks | 2027 to 2028 | NEIAA, CERT-In | 3-of-5 key release and per-copy watermarks live for Tier-1 |
| NEET-UG CBT forms | 2027 to 2036 | NTA | 24 forms, then 96 from 2029 |
| States adopt NESS | 2028 to 2031 | State Examination Security Cells | 36 cells accredited, funded 60:40 |
| 2,500 labs hardened | 2028 to 2030 | State cells, exam bodies | Secure centres [C05] |
| Central item banks | 2029 to 2031 | NEIAA with SSC, RRBs, UPSC | Banks for the remaining central exams |
| AI forensics and SOC | 2028 to 2036 | CERT-Exam | Analytics on every central exam, human review |
| Adaptive tests (CAT) | 2032 to 2036 | NTA | NET and CUET pilots |

Owners are the team's proposal and section 12 sets the roles. The dates match the Slide 8 Gantt. The NEET-UG stream runs all ten years because it is the moneyshot case and the exam the country watches [F-A05].

### 17.3 The KPI tree

The goal is trusted results. It splits into four drivers, each with a measure a named owner can move: the probability of a breach (frequency), the impact of a breach (blast radius and insider exposure), detection and response (odds, time), and the cost and access of the system. The tree is a balanced scorecard with eight leaves.

| KPI | 2026 baseline | 2028 | 2031 | 2036 |
|---|---|---|---|---|
| Loss cut against 2026 | 0% | 28% | 80% | 80% |
| Blast radius, NEET-UG | 22,70,000 | 94,583 | 23,646 | 23,646 |
| Tier-1 exams traceable by watermark | 0% | 100% | 100% | 100% |
| Insider exposure of a paper | 67% | 5% cap for NEET-UG | 5% cap, 2.5% expected | 5% cap, 2.5% expected |
| Detection odds of a leak sale | 10% | 40% or better, interim | 60% | 60% |
| Time to cancel or clear an exam | 9 days (NEET-UG 2026) | 72 hours | 72 hours | 72 hours |
| Cost per sitting | none disclosed | within ₹135 | ₹135 | ₹135 or less |
| Centre within 50 km | to be measured in 2027 | survey done | target met | held |

The baselines come from the record: loss and blast radius from the model [T2][T9], insider exposure from the 120-of-180 overlap [F-B02][T9], and nine days from the NEET-UG 2026 timeline of 3 May to 12 May [F-B01]. Detection odds are an assumption (A16), not a measured rate. The 2028 detection figure is a team interim target, not a modelled value. The 50 km target has no baseline in the fact base, so the first task is a 2027 survey. The loss cut is the only KPI the model prices, at 8%, 28%, 48%, 64% and 80% from 2027 to 2031 [A10][A14].

### 17.4 Legal and institutional milestones

| When | Milestone | Basis |
|---|---|---|
| 2027 | NEIAA statute: a PRAMAAN chapter added to the 2024 Act as amended, by ordinance or bill (team proposal) | [F-P01][F-P07] |
| 2027 | NESS v1 published; model state law released; centrally sponsored funding at 60:40 sanctioned | Team proposal |
| 13 May 2027 | DPDP Rules compliance window closes; PRAMAAN identity and data design must comply | [F-P19] |
| 2027 | NEET-UG moves to CBT | [F-P18] |
| 2028 | Horizon 1 gate review by the apex council | Team proposal |
| 2031 | Independent review one; Horizon 2 gate | Team proposal |
| 2032 | Hardware refresh of ₹184.0 Cr | [A13] |
| 2036 | Independent review two; decade close | Team proposal |
| Every 3 years | CAG audit of NEIAA | Team proposal |

The route to an early statute has a precedent. The 2026 Amendment moved from introduction on 27 July to passage by both Houses by 30 July 2026 [F-P07]. Speed is possible when salience is high, and it will not last, so the NEIAA bill needs to be ready before the next incident.

## 18. Resilience and trade-offs: 21 of 24 against 7 for the fragmented model

### 18.1 How the grid is scored

The brief closes by asking the team to "show why your model is more resilient than India's fragmented approach and highlight its key trade-offs" [B RS1]. The answer is a grid of eight tests scored 0 (none), 1 (weak), 2 (partial) or 3 (strong) for three models. Fragmented today is the present system of many bodies, vendors and state practices. Central CBT only is the team's stylised version of the announced direction: one platform, computer-based testing, higher penalties [F-P18][F-P08]. PRAMAAN is the recommendation. The scores are the team's judgment against the evidence cited in each paragraph, not measurements.

| Test | Fragmented today | Central CBT only | PRAMAAN |
|---|---|---|---|
| Insider at creation | 0 | 1 | 3 |
| Storage and transport | 0 | 2 | 3 |
| Centre and remote access | 1 | 1 | 2 |
| Blast radius per breach | 0 | 1 | 3 |
| Vendor concentration | 1 | 0 | 3 |
| Detection and liability | 0 | 1 | 3 |
| Privacy proportionality | 2 | 1 | 2 |
| Cost and access | 3 | 1 | 2 |
| **Total (of 24)** | **7** | **8** | **21** |

The margin is not fragile. Removing one point from every test where PRAMAAN scores 3 leaves 16 of 24, twice the central model. Removing one point from all eight tests leaves 13, still ahead of 8 and 7.

### 18.2 Insider at creation: 0, 1, 3

Fragmented scores 0. The NEET-UG 2026 paper was lost to setters and translators, up to 120 of 180 questions matched a circulated guess paper, and the arrested included an NTA subject expert and a translator [F-B02]. An RPSC member assigned to set a paper shared it for ₹60 lakh [F-B14]. Central CBT scores 1 because delivery mode does not touch creation, and the NTA tender places question preparation outside the vendor's scope [F-A19]. Any gain is procedural. PRAMAAN scores 3 because no person sees more than 5% of a bank, one setter's items fill 2.5% of a form in expectation, and exposure falls from 67% to 2.5% [T9]. Sequestration follows Korea's practice [F-D05], and UPSC's unknown selection is the precedent [F-D12].

### 18.3 Storage and transport: 0, 2, 3

Storage is the most frequent failure stage, with 12 of 49 coded incidents, and transmission adds 3 [T7]. Fragmented scores 0: a Kolkata press leak before bar-coding [F-B09], a warehouse consignment opened by logistics staff and a doctor [F-B08], a printing-press employee's copy [F-B13] and a strong-room leak two days before REET [F-B16]. Central CBT scores 2. The tender hands the soft copy over one hour before the exam and moves no printed paper for CBT exams [F-A19], which removes most transport exposure, but the paper still exists as one file at the body before that hour. PRAMAAN scores 3 with an air-gapped vault, keys released at T−60, encrypted delivery, print at the centre for offline exams [F-P14] and smart-lock boxes [C04].

### 18.4 Centre and remote access: 1, 1, 2

Fragmented scores 1. Remote-access fraud is recorded at CBT centres in JEE Main 2021 and five other cases [F-B10][F-B11], and a strong-room back door was left open at Hazaribagh [F-B05]. Central CBT also scores 1. The tender requires wired cameras and jammers [F-A19], but it lets the vendor subcontract guards, CCTV and biometric authentication [F-A20], and SSC Selection Post Phase 13 failed at the platform level in 2025 [F-B12]. PRAMAAN scores 2, not 3. Locked node images, no remote ports, a network SOC and 2,500 hardened labs [C05] contain what happens at a centre, but the centre remains the point where vendors, state cells and local staff meet. The design limits the damage from a bad centre and does not prevent one.

### 18.5 Blast radius per breach: 0, 1, 3

Fragmented scores 0 because one NEET-UG paper is shared by 22,70,000 candidates [T9]. Central CBT scores 1. At about 20 shifts and one form each, a compromised shift exposes about 1,13,500 candidates, a reported plan, not an established figure [F-P18][T9]. That is a real gain, but the figure holds only if the shifts draw independent papers. A creation-stage compromise upstream of the shifts, as in 2026, can reach several of them, which is the reasoning behind a score of 1 and not 2. PRAMAAN scores 3: 94,583 with 24 forms in 2027 to 2028 and 23,646 with 96 forms, a 96 times reduction [T9].

### 18.6 Vendor concentration: 1, 0, 3

Fragmented scores 1. It has no national monopoly, but no cap or common standard either, and the same names recur: Eduquity was accused over MP TET 2022 before its SSC Phase 13 work [F-B12], and Edutest was blacklisted after UP Police 2024 [F-B08]. Central CBT scores 0. One platform and volume slabs that cut the rate to 0.50 times at 2.75 to 3 crore tests push volume to one supplier, the usage terms name a single service provider, and clause 11.3 disclaims vulnerability in the vendor's software and the integrity of its functionaries [F-A20]. PRAMAAN scores 3 with accreditation, a 40% cap on national CBT volume, open standards, exit clauses and strict liability for subcontractors, which is the reversal of clause 11.3.

### 18.7 Detection and liability: 0, 1, 3

Fragmented scores 0. UGC-NET June 2024 was cancelled for 9.08 lakh candidates on a screenshot the CBI later found to be doctored by a school student [F-B07]. NEET-UG 2026 took nine days from exam to cancellation [F-B01], and 52 FIRs have been registered under the 2024 Act [F-P11]. Central CBT scores 1 because penalties rise sharply [F-P08][F-P09][F-P10] and the NTA plans AI log analysis [F-D10], but the body that conducts still audits itself and the contract disowns vendor failure [F-A20]. PRAMAAN scores 3 with a six-hour clock, watermark verification at 24 hours, an auditor independent of the conductor, root-cause reports in 30 days and detection odds raised from 10% to 60% [A16]. Becker's point that certainty of detection matters as much as severity [F-D17] is the basis.

### 18.8 Privacy proportionality: 2, 1, 2

Fragmented scores 2. It builds no national biometric store, but it does use blunt instruments: mobile internet was cut in Rajasthan districts for REET [F-P22], and Telegram was blocked nationally in 2026 [F-B04]. Central CBT scores 1 because a national platform concentrates images, live camera feeds to a command room and vendor-held footage for three months [F-A19], and identity checks can be subcontracted [F-A20]. PRAMAAN scores 2, the same as today, though for different reasons. It uses 1:1 face matching only, keeps no central template store beyond registration photos, deletes data 90 days after results, runs a DPIA and excludes shutdowns. It cannot score 3 because the DPDP Rules treat biometric data as ordinary personal data [F-P19], and face matching of young candidates and CCTV analytics still carry residual intrusion under the proportionality test [F-P21].

### 18.9 Cost and access: 3, 1, 2

Fragmented scores 3 because it adds no security spend and no levy, and NEET-UG runs at 5,468 centres in 552 cities [F-A03]. The cost falls elsewhere: ₹7,300 for each of 38.59 lakh candidates hit [T2]. Central CBT scores 1 because CBT at nearly 1,000 centres, over five to six days, replaces 5,468 centres [F-P18][F-A03], lengthening journeys for candidates in remote districts. PRAMAAN scores 2. It adds ₹134.6 a sitting, 7.9% of the NEET-UG fee [T2][F-A15], and a ₹50 levy with waivers [A15], but it keeps pen-and-paper testing where CBT capacity is absent, funds mobile centres of about 150 seats [F-P14] and targets a centre within 50 km. The access target is a proposal without a baseline, so the score stays at 2.

### 18.10 The trade-offs we accept

| Trade-off | What it costs | Mitigation |
|---|---|---|
| Cost | ₹7,092 Cr over ten years; ₹134.6 a sitting, 7.9% of the NEET-UG fee [T5][F-A15] | Cost within 55% of the Gordon-Loeb ceiling; ₹50 levy waived for SC, ST and PwD |
| Psychometrics | Parallel forms need published equating, and scores must remain comparable | Published method, independent psychometric panel, the digital SAT's adaptive design as precedent [F-D09]; 24 forms as fallback |
| Privacy | Face matching and analytics touch personal data | 1:1 match only, 90-day deletion, DPIA, human review |
| A new central vault | A concentration of value that did not exist before | Items only, encrypted; 3-of-5 keys across independent bodies; NEIAA does not conduct exams |
| Federal consent | States must accept accreditation and audit | Delivery stays with them; 60:40 funding; model state law |
| Back-loaded benefits | Cumulative net position is −₹316 Cr after 2027 and −₹142.7 Cr after 2028, and turns positive in 2029 [T4] | Tier-1 exams first; gates release later spending |

### 18.11 Therefore

Therefore, the fragmented model fails on the tests that matter most, the ones about who can steal a paper and how much damage a theft does, and scores 7 of 24. Central CBT alone raises severity and moves the delivery mode, and scores 8, because it leaves creation untouched and concentrates vendors and data. PRAMAAN scores 21 of 24 because it reduces what any one person can see, splits the keys, contains each breach to about 23,646 candidates and makes detection certain enough to change a seller's arithmetic. It gives up points on privacy and access, where it holds at 2, and pays for the gain in money, complexity and a new vault. The team accepts those trade-offs because each has a named mitigation and because the alternatives leave between 1,13,500 and 22,70,000 candidates exposed to a single compromise.

## 19. Risks to the reform, and a pre-mortem

### 19.1 The implementation risk register

Section 9 scores risks to examinations. This register scores risks to the reform itself. Probability (P) and impact (I) run from 1 to 5. Thresholds match section 9: 15 or more is critical, 10 to 14 high, 6 to 9 medium, 5 or less low. The scores are the team's judgment, not model inputs.

| # | Risk | P | I | Score | Mitigation | Owner | Residual |
|---|---|---|---|---|---|---|---|
| R1 | Statute delayed | 3 | 5 | 15 | Bill drafted before 2027; contract-based NESS for Tier-1 vendors as bridge | Ministry of Education | 8 |
| R2 | States opt out | 3 | 4 | 12 | Delivery stays with states; 60:40 funding tied to accreditation; model state law | NESC | 6 |
| R3 | Vendor lock-in or cartel | 3 | 4 | 12 | 40% cap; open standards; exit clauses; strict subcontract liability | NEIAA | 6 |
| R4 | Psychometric capacity shortfall | 4 | 3 | 12 | Start Tier-1 banks first; university and IIT partnerships; 24-form fallback | NEIAA | 6 |
| R5 | Item-bank breach | 2 | 5 | 10 | 3-of-5 keys; items encrypted; two-person integrity; access-log alerts; re-key and rebuild plan | CERT-Exam | 5 |
| R6 | Legal challenge to normalisation | 3 | 4 | 12 | Published equating; independent panel; scoped cancellation on the Court's test [F-P05] | Exam bodies | 6 |
| R7 | Privacy litigation | 3 | 3 | 9 | Proportionality file; DPIA; 90-day deletion; alternate-ID desk [F-P21] | NEIAA | 4 |
| R8 | Budget cuts | 3 | 4 | 12 | Levy ring-fenced; Tier-1 protected first; gates pause later phases | Union Finance | 6 |

Three rows deserve a note. R1 carries the top score because every later step depends on it, and the 2026 Amendment shows Parliament can act fast when salience is high [F-P07]. R4 has the highest probability because 45,000 calibrated items and equating need scarce skills [C02]. R5 has the lowest probability and the highest severity of the technical risks, and the design answers it with threshold keys [F-D15].

### 19.2 The pre-mortem

The pre-mortem method asks a team to assume failure and work backwards to causes [Klein 2007]. It is 2031 and PRAMAAN has failed. Five stories explain how, and each carries an early-warning indicator that can be watched from 2027.

**Story 1: the statute and the money.** NEIAA was created late and funded thin. NEET-UG went to CBT in 2027 on the Government's plan without split keys or item banks, and a creation-stage leak in 2028 exposed the whole paper again. The reform never reached Tier-1 gate conditions because spending was released before the standards existed. **Early warning:** no NEIAA bill introduced by the end of the first parliamentary session after the decision, or a first-year appropriation below the ₹581.2 Cr of the base path [T4]. **Response:** contract-based NESS for Tier-1 vendors and a protected Tier-1 budget line.

**Story 2: the vault.** Three key holders and an insider colluded, and the item bank was copied. Because the bank was 20 times the paper length, exposure was partial, but the exposed items had to be retired and exam dates slipped. **Early warning:** access-log anomalies at the vault, a missed key ceremony, or an item-overlap scan flagging more than the 5% cap for any one person. **Response:** re-key, retire exposed items and rebuild forms, as the controls table provides.

**Story 3: the states.** States joined on paper and delivered as before. The 36 cells existed, but staffing lagged, accreditation was granted without inspection, and state exams stayed as exposed as in 2026. **Early warning:** state-volume accreditation below the path of the A10 coverage (35% in 2028 and 60% in 2029) [A10], or 60:40 claims left unclaimed for two consecutive years. **Response:** tie centrally sponsored funds to accredited volume and publish a state league table.

**Story 4: the courts.** Candidates challenged normalisation across 96 forms, and a court held that scores were not comparable. The Supreme Court's own warning that "flip flops are anathema to fairness" [F-P06] set the tone. The exam bodies had no fallback and reverted to a single paper. **Early warning:** petitions on equating filed within a cycle of the first multi-form exam, or a score-gain gap between forms beyond the panel's tolerance. **Response:** the fallback of fewer, larger forms, at 24 forms a blast radius of 94,583 [T9].

**Story 5: the supply side.** Two vendors won most CBT contracts, and psychometric staff were too few to calibrate 45,000 items. Forms were assembled from thin banks and repeated, so overlap between forms rose and the 96 times reduction shrank. **Early warning:** any vendor above 35% of national CBT volume on the way to the 40% cap, or item reuse across forms rising in the analytics. **Response:** open standards, a third accredited vendor and item-writing partnerships with universities.

### 19.3 Off-ramps

Each failure has a fallback. If the statute slips, Tier-1 vendors are bound by contract to the NESS standard. If states opt out, the programme runs for central exams first, which are 3.00 crore of the 5.00 crore sittings [T1]. The model does not split the EAL between central and state exams, so the loss avoided by a central-only programme is not quantified. If normalisation is struck down, PRAMAAN uses fewer, larger forms. If the vault is breached, keys are rotated and forms rebuilt. If budgets are cut, Tier-1 exams are protected first, and the gates make sure later phases pause until earlier ones meet their tests.

## 20. Slide blueprint

The table maps every panel on Slides 1 to 11 to the document section that supports it and to its sources. Section numbers follow the outline of this document. Slide 2 answers the six questions at a glance, and Slides 3 to 9 follow the ribbon order Summary, Diagnosis, Risk, Governance, Technology, Accountability, Roadmap and Cost-Benefit.

| Slide | Panel | Doc § | Sources |
|---|---|---|---|
| 1 Cover | Chips: Maudrik v7.0, 10-year security architecture, Team IdeaForge | §0, §1 | [B] problem statement |
| 1 | Title block PRAMAAN and strapline | §2, §11 | [Model] |
| 1 | Verdict card: hybrid by function, ₹3,317 Cr, 80%, ₹135, ₹3.14 | §2, §16 | [T2][T5]; S01, S05 |
| 1 | Team table | §0 | Team roster |
| 1 | The case in five numbers (22.7 lakh, 41 leaks, 87%, 39 posts, 96x) | §3, §4, §11 | [F-A05][F-B17][F-B19][F-A12][T9]; S01, S05, S28 |
| 1 | Logo slots | §0 | Placeholders |
| 2 Executive summary | The problem: ₹3,317 Cr, 38.6 lakh, 87%, 31 of 49 | §4, §16 | [T2][T7]; S01 |
| 2 | Why the obvious fix falls short | §2, §5, §6 | [F-P11][F-P18][F-A20]; S17, S19, S27 |
| 2 | Our answer: PRAMAAN (three principles) | §2, §11 | [T9][F-D15] |
| 2 | Answers to the six questions | §2 | [B Q1 to Q6][T5] |
| 2 | What ₹7,092 Cr buys in ten years | §16, §18 | [T5][T9] |
| 3 Diagnosis | Where 49 coded breaches started | §4 | [T7][F-B19] |
| 3 | Candidates hit (lakh, cancelled) | §4 | [T11][F-A21][F-B01][F-B07]; S37, S05 |
| 3 | One paper, many hands | §5 | [F-B02][F-A05] |
| 3 | The chain of hands, with incidents | §5 | [F-B01][F-B05][F-B08][F-B09]; S38, S39 |
| 3 | Why more rules have not worked | §5, §6 | [F-P15][F-A12][F-A20][F-D12]; S62, S27, S28, S48 |
| 4 Risk framework | Risk heat map: likelihood × impact | §9 | [T8][T7] |
| 4 | Legend, formula and risk-type bar | §9 | [T7][T8] |
| 4 | Top 10 risks with 1:1 mitigation | §9 | [F-B05][F-B08][F-B10][F-B15]; S43, S42 |
| 5 Governance | Q1: central, federal or hybrid | §10, §12 | [B Q1][T9] |
| 5 | The PRAMAAN architecture: three planes | §11, §12 | [F-D14][F-D15]; S53, S70 |
| 5 | Who does what: RACI across the lifecycle | §12 | [B LS1 to LS8][B ST1 to ST10] |
| 5 | Risk tiers and binding rules | §12 | [F-A20][F-D05]; S27 |
| 6 Technology | The moneyshot: 22,70,000 to 23,646 | §11, §14 | [T9][F-B02][F-D09] |
| 6 | Controls by stage: prevent, detect, respond | §13 | [F-P14][F-D14]; S53 |
| 6 | Role cards: encryption, biometrics, AI, surveillance | §13, §15 | [F-P19][F-P22][F-D08]; S56 |
| 7 Accountability | Breach response clock | §14 | [F-P20][F-B07][F-B01]; S54, S11 |
| 7 | Who pays: the liability ladder | §14 | [F-P08][F-P09][F-P10] |
| 7 | Today vs PRAMAAN | §14 | [F-A20] |
| 7 | Audit calendar | §14 | Team proposal |
| 7 | A leak stops paying (₹ Cr) | §14 | [T9][A16][F-D17]; S71 |
| 8 Roadmap | Workstreams, 2027 to 2036 | §17 | [A10][F-P14][F-P18] |
| 8 | Three horizons and gates | §17 | [T9] |
| 8 | KPI targets | §17 | [T2][T9][A14] |
| 8 | Access and affordability (Q6) | §15, §17 | [F-P22][F-P14][A15] |
| 9 Cost-benefit | Cost by year (₹ Cr) | §16 | [T3][T4] |
| 9 | Cumulative benefit vs cost | §16 | [T4] |
| 9 | Scenarios and the spending test | §16 | [T5][F-D16]; S55 |
| 9 | Resilience vs today's model | §18 | [B RS1][T7][T9] |
| 9 | Trade-offs we accept | §18 | [F-D09][F-P19][T5] |
| 10 Appendix | Key assumptions | App E | [A01 to A16] |
| 10 | Sensitivity of base NPV | §16 | [T6] |
| 10 | Model summary, base case | §16, App B | [T4] |
| 10 | Incidents: stage × type | §4, App C | [T7] |
| 10 | Sources | App A | S01 to S71 |
| 11 Thank you | Message and team table | §0 | Team roster |

## 21. Anticipated jury questions

The jury may put up to 25 questions in the four minutes of question time [B R7]. The answers below are short by design, so that each can be delivered in under thirty seconds.

**A juror asked why India should not simply move everything to computer-based testing, as the Government has announced.**
The 2026 leak came from setters and translators, up to 120 of 180 questions [F-B02], so it happened before delivery, and CBT does not touch that stage. CBT also has its own record: JEE Main 2021 with over 820 beneficiaries reported, five further remote-access cases and the SSC Phase 13 failure [F-B10][F-B11][F-B12]. A one-form-per-shift CBT plan still exposes about 1,13,500 candidates per compromised shift, against 23,646 under PRAMAAN [T9][F-P18]. PRAMAAN keeps CBT where capacity exists.

**A juror asked whether "hybrid" is not the obvious answer.**
It is the obvious word, which is why the team defines it by function and not by geography. The trust plane (standards, item vault, split keys, CERT-Exam, accreditation and audit) is central, and the delivery plane (exam bodies, 36 state cells, capped vendors) is federated. NEIAA audits and does not conduct. A hybrid by geography would still leave each paper as a single object, and it would not change the blast radius [T9].

**A juror asked who guards the central vault, and whether it is not a new single point of failure.**
The vault holds encrypted items only, and a key needs 3 of 5 shares held by independent institutions: NEIAA, the exam body, CERT-In, a state officer and an independent auditor. Fewer than three shares reveal nothing [F-D15][S70]. It is a new concentration, and the team lists it as a trade-off. The item bank costs ₹172.5 Cr of capex [C02], and a bank breach scores 10 on the risk register, 5 after mitigation.

**A juror asked how 96 forms stay fair to candidates.**
Forms are equated with item response theory and the method is published. An independent psychometric panel checks them before results. The digital SAT already gives students different question sets by design [F-D09], and the NTA itself has spoken of about 20 shifts with score normalisation, as reported [F-P18]. The fallback is 24 forms, where the blast radius is still 94,583 [T9]. The method is proposed here and is not yet proven at NEET-UG scale.

**A juror asked where 45,000 calibrated items would come from, and in 13 languages.**
The number is 15 Tier-1 exams × 150 items × 20 [C02]. At ₹25,000 an item, including translation into 13 languages and pre-testing, the build is ₹112.5 Cr, with a 25% annual refresh of about ₹28 Cr [T3]. Banks are built in phases from 2027 to 2029 for NEET-UG, JEE Main and CUET, then for SSC, RRB and UPSC from 2029 to 2031 [Section 17]. Translation is item by item, under the same 5% cap.

**A juror asked what stops a translator from leaking under PRAMAAN.**
A translator sees no more than 5% of a bank, and one person's items fill 2.5% of a form in expectation [T9]. Sequestration for about 2,000 setters and translators costs ₹40 Cr a year [C08], following Korea's confinement of about 40 days [F-D05]. Every printed copy carries a watermark, so a leak traces to its source copy. Setters and translators must stay clear of coaching for three years before and two years after, a rule aimed at the pattern in 2026 [F-B02].

**A juror asked why states should accept a central authority.**
They keep delivery, content ownership and a named officer per exam. The centre funds 60% of the state cells' running cost, which is ₹108 Cr a year of C10's ₹180 Cr, and states pay ₹72.0 Cr [T10]. Accreditation ties funding to compliance. States are already legislating against leaks, in Rajasthan, Gujarat, Uttar Pradesh and Bihar among others [F-P13], which shows demand for common standards.

**A juror asked how ₹3,317 Cr a year is justified.**
It is the EAL: 38.59 lakh candidates a year × ₹7,300 = ₹2,817.3 Cr, plus ₹499.2 Cr for 20,800 stalled posts [T2][A04 to A08][F-B17]. The candidate count comes from 41 documented leaks and 1.4 crore applicants over five years, plus the two recent cancellations. Counting cash only, the EAL is still ₹1,387 Cr [T2].

**A juror asked whether valuing candidate time is legitimate.**
Time is the largest term at about 58% of the EAL, so the team tested its removal [A07]. With time at zero the NPV is ₹1,495.8 Cr, the BCR is 1.31 and payback is 2032 [T5][T6]. A candidate who loses a fortnight to a re-sit has lost something real, and standard cost-benefit practice values it. The conclusion does not depend on that value.

**A juror asked why the team assumes an 80% loss cut.**
The 80% combines a 50% cut in breach probability and a 60% cut in candidates hit per breach [A14]. Kenya went from 5,101 cancelled results in 2015 to none in 2016 [F-D01][F-D03], and the mechanical cut in candidates exposed is 96 times [T9]. The bear case at 58% still returns a BCR of 2.28 and an NPV of ₹6,091.6 Cr [T5].

**A juror asked why the spend is not higher.**
The Gordon-Loeb ceiling is ₹1,220.1 Cr a year, and steady opex of ₹673.5 Cr is 55.2% of it [T2][F-D16]. Beyond that, returns diminish because the design already contains each breach and makes detection likely. The ceiling is a test and not a target, and the model was built for one firm, not a country. The team does not claim ₹673.5 Cr is optimal, only that it is inside the ceiling.

**A juror asked whether the ₹50 levy hurts poor candidates.**
The levy is 2.9% of the ₹1,700 NEET-UG general fee [A15][F-A15]. SC, ST and PwD candidates, who pay ₹1,000 at NEET-UG, are waived, and the waiver is paid from the Union share [F-A15]. The full cost per sitting is ₹134.6, which is 7.9% of the fee [T2], and the levy funds 37% of steady opex [T10].

**A juror asked what AI actually decides.**
Nothing. AI flags answer similarity, response-time and score-gain anomalies, network anomalies and CCTV events, and a human panel decides. The 2024 IIT Madras analysis that found no sign of mass malpractice in NEET-UG is the model for forensics [F-P04]. There is no automated disqualification. CERT-Exam analytics cost ₹60 Cr a year with human review [C07].

**A juror asked whether face matching of 17-year-olds is lawful under the DPDP Rules.**
The DPDP Rules 2025 require verifiable parental consent for children's data, with exemptions such as education, and compliance is due by 13 May 2027 [F-P19]. PRAMAAN uses 1:1 matching only, keeps no central template store beyond registration photos, deletes data 90 days after results and runs a DPIA. It is tested against the four prongs of Puttaswamy [F-P21]. Whether the education exemption covers exam bodies is a point for legal confirmation.

**A juror asked what happens in the first six hours after a leak.**
The SOC or a tip-off flags a breach at T+0. NEIAA and CERT-In are notified by T+6h, which matches CERT-In's six-hour reporting rule [F-P20]. The watermark verifies the leak by T+24h and cancellation is scoped to affected forms at T+72h, as the Supreme Court's test requires [F-P05]. Today, UGC-NET 2024 was cancelled for 9.08 lakh candidates on a doctored screenshot [F-B07], and NEET-UG 2026 took nine days [F-B01].

**A juror asked who pays for a re-test.**
The responsible body pays from its own budget, and vendors carry strict liability including for subcontractors, with a 15% guarantee plus insurance. The Candidate Protection Fund of ₹50 Cr a year reimburses about 3.3 lakh re-sits at ₹1,500 [C11]. The 2026 NEET-UG re-exam charged no additional fee [F-A24], but households spent ₹1,000 to ₹2,000 each [F-A23].

**A juror asked whether PRAMAAN would have stopped NEET-UG 2026.**
Likely not stopped by one control, but made much smaller. Setters would see at most 5% of a bank, so 120 of 180 questions could not come from one insider, and no complete paper would exist until T−60 [T9][F-B02]. The coaching bar would apply to any setter or translator with a coaching role. The record does not say whether the arrested coaching teacher held an NTA role [F-B02]. Reaching 67% of a form would need at least 14 people at the 5% cap (67 divided by 5), against the two or three reported in 2026.

**A juror asked whether PRAMAAN would have stopped UP Police 2024.**
The paper leaked from a warehouse in Ahmedabad where logistics staff and a doctor opened a sealed consignment and scanned it [F-B08]. Under PRAMAAN there is no printed paper in transit for CBT exams. For offline exams the paper is delivered encrypted and printed at the centre [F-P14], with per-copy watermarks, so a scan would trace to its source copy. The exam involved about 48 lakh applicants [F-A21].

**A juror asked how the team stops vendor cartels or lock-in.**
No firm may hold more than 40% of national CBT volume, standards are open, and contracts carry exit clauses. Today's tender pushes the other way, with volume slabs cutting rates to 0.50 times at 2.75 to 3 crore tests [F-A20]. The risk is in the register at 12, with a residual score of 6, and its warning sign is any vendor near 35%.

**A juror asked about remote and hill districts without CBT capacity.**
Offline exams stay pen-and-paper under computer-assisted printing at the centre [F-P14]. Mobile centres of about 150 seats reach remote areas [F-P14], and 2,500 existing labs are hardened for ₹75 Cr [C05]. The target is a centre within 50 km. NEET-UG used 5,468 centres in 552 cities in 2025, against nearly 1,000 CBT centres planned for 2027 [F-A03][F-P18].

**A juror asked how PRAMAAN interacts with the 2026 Amendment.**
It complements it. The Amendment raises severity: 5 to 10 years for individuals, up to ₹5 Cr for providers and at least ₹10 Cr for organised crime [F-P08][F-P09][F-P10]. PRAMAAN is designed to raise detection odds, assumed at 10% today and 60% under PRAMAAN [A16, illustrative], which is what Becker's model says deters [F-D17]. Only 52 FIRs were reported under the 2024 Act [F-P11], and PRS notes the fast-track backlog [F-P12]. The team would add PRAMAAN as a chapter in the Act.

**A juror asked what the first thing to do on day one is.**
Draft the NEIAA bill or ordinance, start the Tier-1 item banks, and put split keys in place for NEET-UG 2027 [F-P18]. The 2026 Amendment passed both Houses within days of introduction [F-P07]. NEET-UG's CBT move gives a hard date, and a bank at 20 times paper length must exist before it. The first-year budget is ₹581.2 Cr [T4].

**A juror asked what happens if the Supreme Court strikes down normalisation.**
The Court's own test cancels only where tainted and untainted candidates cannot be separated [F-P05], and it disliked "flip flops" [F-P06]. The team publishes the equating method in advance and uses an independent panel. The fallback is fewer, larger forms, at 24 forms with a blast radius of 94,583 [T9]. The 1,563 grace-mark candidates of 2024 [F-B06] show how contested scoring changes become.

**A juror asked how success is measured.**
Through the KPI tree of section 17: loss cut of 28% in 2028 and 80% from 2031, blast radius from 22,70,000 to 94,583 to 23,646, detection odds from 10% to 60%, time to clear an exam from nine days to 72 hours, and cost at or under ₹135 a sitting [T4][T9][A16]. Independent reviews take place in 2031 and 2036.

**A juror asked for the single biggest trade-off.**
A new central vault and psychometric complexity, bought for a blast radius 96 times smaller, from 22,70,000 to 23,646 [T9]. The vault is protected by 3-of-5 keys and by the fact that NEIAA does not run exams. The complexity is contained by published equating and a 24-form fallback. The team judges the trade worth making because the alternatives keep a single object exposed to between 1,13,500 and 22.7 lakh candidates [F-A05][T9].

## Appendix A: Bibliography

Seventy-one sources, in order of first use in the team's fact base. [snip] marks sources read only through a search snippet or a blocked page; [via] marks facts quoted as reported by the linked page; [vendor] marks a vendor's own blog. Snippet-only sources are used for context or corroboration and never as the sole support for a number.

**S01** The Indian Express (8 Feb 2024) "The big all India exam leak: Over 5 years, 1.4 crore job seekers in 15 states bore the brunt" [via S02, Express video]. https://www.youtube.com/watch?v=f9Qaq5v3Tas

**S02** Wikipedia, "List of paper leaks in India". https://en.wikipedia.org/wiki/List_of_paper_leaks_in_India

**S03** Wikipedia, "Paper leak in India". https://en.wikipedia.org/wiki/Paper_leak_in_India

**S04** Wikipedia, "2024 NEET controversy". https://en.wikipedia.org/wiki/2024_NEET_controversy

**S05** Wikipedia, "2026 NEET controversy". https://en.wikipedia.org/wiki/2026_NEET_controversy

**S06** News On Air / Akashvani (12 May 2026) "NEET (UG) exam cancelled over paper leak allegations; CBI probe ordered". https://newsonair.gov.in/neet-under-graduate-exam-cancelled-over-paper-leak-allegations-cbi-probe-ordered/

**S07** Careers360 (May 2026) "NEET cancelled: Bihar police report alleges paper leak for Rs 32 lakh" [snip]. https://news.careers360.com/neet-cancelled-bihar-police-report-alleges-paper-leak-rs-32-lakh-nta-education-minister-denies-latest-news

**S08** The Tribune (Jul 2026) "NEET paper leak: NTA terminates 47 officials" [snip]. https://www.tribuneindia.com/news/india/neet-ug-2026-paper-leak-nta-terminates-47-officials-announces-complete-overhaul/

**S09** ANI (24 Jul 2026) "NTA terminates 47 officials in major crackdown" [snip]. https://www.aninews.in/news/national/politics/nta-terminates-47-officials-in-major-crackdown-move-part-of-overhaul-of-agency-that-conducts-neet-ug-test20260724204332/

**S10** Careers360 (Jun 2024) "UGC NET June 2024 cancelled, 'integrity of exam may be compromised'". https://news.careers360.com/ugc-net-june-2024-cancelled-nta-integrity-of-exam-may-be-compromised-education-ministry

**S11** ThePrint "CBI files closure report in UGC-NET case, juvenile who 'doctored' paper let off after counselling". https://theprint.in/india/education/cbi-report-ugc-net-case-lets-off-juvenile-after-counselling/2470125/

**S12** SCC Online (8 Aug 2024) "Explained: Final verdict of Supreme Court on NEET UG 2024". https://www.scconline.com/blog/post/2024/08/08/explained-final-verdict-of-supreme-court-on-neet-ug-2024/

**S13** Supreme Court Observer (2024) "Supreme Court refuses to cancel 2024 NEET UG exam due to insufficient evidence of 'systemic' leak". https://www.scobserver.in/journal/supreme-court-refuses-to-cancel-2024-neet-ug-exam-due-to-insufficient-evidence-of-systemic-leak/

**S14** News On Air (23 Jul 2024) "SC refuses to cancel NEET-UG 2024 exam". https://www.newsonair.gov.in/sc-refuses-to-cancel-neet-ug-2024-exam-on-grounds-of-paper-leak-and-malpractices

**S15** Careers360 (Jun 2024) "1,563 NEET 2024 candidates got grace marks". https://news.careers360.com/neet-2024-result-1563-candidates-compensated-44-got-all-india-rank-air-1-due-physics-question-clarifies-nta

**S16** PRS Legislative Research, "The Public Examinations (Prevention of Unfair Means) Bill, 2024". https://prsindia.org/billtrack/the-public-examinations-prevention-of-unfair-means-bill-2024

**S17** PRS Legislative Research, "The Public Examinations (Prevention of Unfair Means) Amendment Bill, 2026". https://prsindia.org/billtrack/the-public-examinations-prevention-of-unfair-means-amendment-bill-2026

**S18** SCC Online (29 Jul 2026) "Lok Sabha passes Public Examinations Amendment Bill, 2026". https://www.scconline.com/blog/post/2026/07/29/lok-sabha-passes-public-examinations-amendment-bill-2026/

**S19** StudyIQ (2026) "Public Examinations Amendment Bill, 2026 passed: key changes" (reports 52 FIRs under the 2024 Act). https://www.studyiq.com/articles/public-examinations-amendment-bill-2026/

**S20** PIB (30 Jul 2026) "Rajya Sabha passes Public Examinations (Prevention of Unfair Means) Amendment Bill, 2026" [snip]. https://www.pib.gov.in/PressReleasePage.aspx?PRID=2292127

**S21** Khurana & Khurana (4 Nov 2024) "Paper leak: law to combat the issue" (state laws). https://www.khuranaandkhurana.com/2024/11/04/paper-leak-law-to-combat-the-issue

**S22** Careers360 (Jun 2024) "UP cabinet clears ordinance to curb paper leaks, offenders to face life imprisonment". https://news.careers360.com/up-cabinet-clears-ordinance-curb-paper-leaks-offenders-face-life-imprisonment

**S23** The Tribune (Jul 2024) "10-year jail, Rs 1 crore fine: Bihar passes bill to curb paper leak". https://www.tribuneindia.com/news/india/10-year-jail-rs-1-crore-fine-bihar-passes-bill-to-curb-paper-leak-642978

**S24** Oneindia (2026) "'CBT is the future': NTA chief says NEET to go computer-based soon, Nilekani task force working on reform". https://www.oneindia.com/education-jobs/nta-chief-says-neet-to-go-computer-based-soon-nilekani-task-force-working-on-reform-8204395.html

**S25** Medical Dialogues (2026) "NEET 2027 to shift to computer-based test: NTA asks AICTE to identify exam centres" [snip]. https://medicaldialogues.in/news/education/medical-admissions/neet-2027-to-shift-to-computer-based-test-nta-asks-aicte-to-identify-exam-centres-178572

**S26** Eklavvya (2026) "Computer Based Test readiness checklist after the NTA overhaul" [vendor]. https://www.eklavvya.com/blog/computer-based-test-readiness-checklist-nta-reform-2026/

**S27** National Testing Agency (Mar 2026) "Tender Document for Conduct of Computer-Based Test (CBT) in various professional entrance and eligibility examinations". https://nta.ac.in/Download/Tender/Tender_20260302181817.pdf

**S28** ummid.com (23 Jul 2026) "How much National Testing Agency earns, Govt data reveals" (Rajya Sabha reply, 22 Jul 2026). https://www.ummid.com/news/2026/7/23/how-much-national-testing-agency-earns-govt-data-reveals.html

**S29** Careers360 (Aug 2024) "NTA has earned Rs 3,514 crore from exam fees; income rose 78% after CUET" (Rajya Sabha, 1 Aug 2024). https://news.careers360.com/nta-national-testing-agency-exam-fees-income-3514-cr-rose-after-cuet-ug-neet-jee-main-449-crore-balance-parliament

**S30** Careers360 (May 2025) "NEET UG 2025 held at over 5,400 centres"; Medical Dialogues "NEET 2025 highlights". https://news.careers360.com/neet-ug-2025-held-at-over-5400-centres-under-strict-security-sporadic-incidents-of-protest-arrest

**S31** Careers360 (2025) "NTA JEE Main 2025 session 1 ends with 94.4% attendance; UGC NET records over 76% participation". https://news.careers360.com/nta-jee-main-2025-session-1-ends-94-per-cent-attendance-ugc-net-records-over-76-per-cent-participation

**S32** Adda247 "SSC received 28 lakh applications for CGL posts". https://www.adda247.com/exams/ssc/ssc-received-28-lakh-applications-for-cgl-posts-against-14582-vacancies/

**S33** Adda247 "SSC GD Result 2025" (25.21 lakh appeared). https://www.adda247.com/jobs/ssc-gd-result-2025-out-at-ssc-gov-in/

**S34** Career Power "Over 1.21 crore candidates to appear for RRB NTPC exam". https://www.careerpower.in/blog/12167679-candidates-applied-for-rrb-ntpc-2025-exam

**S35** Free Press Journal "RRB Group D Recruitment 2025: over 1.08 crore applications received". https://www.freepressjournal.in/education/rrb-group-d-recruitment-2025-over-108-crore-applications-received-mumbai-zone-records-highest-numbers

**S36** PIB "Civil Services Examination (CSE), 2025 result highlights". https://www.pib.gov.in/PressReleasePage.aspx?PRID=2235933

**S37** Careers360 "48 lakh await UP Police Constable results 2024"; Business Today (24 Feb 2024). https://news.careers360.com/up-police-constable-results-2024-48-lakh-await-uppbpb-gov-in-frustrated-candidates-ask-result-kab-aaega-cut-off

**S38** India.com "UP paper leak case: paper leaked during transport, stored at Ahmedabad warehouse"; Shiksha "company conducting UP Police exam blacklisted". https://www.india.com/uttar-pradesh/uttar-pradesh-police-recruitment-exam-paper-leak-case-paper-leaked-during-transport-stored-at-ahmedabad-warehouse-police-chief-reveals-details-6790318/

**S39** Careers360 "BPSC TRE 3.0 question paper was leaked before it was sent to printing press, bar coding"; Main Media. https://news.careers360.com/bpsc-tre-3-0-question-paper-was-leaked-it-was-sent-printing-press-bar-coding-solver-gang-reports

**S40** ETV Bharat (31 Jan 2023) "Gujarat ATS traces roots of junior clerk exam paper leak case to Hyderabad"; Careers360. https://www.etvbharat.com/english/state/gujarat/gujarat-ats-traces-roots-of-junior-clerk-exam-paper-leak-case-to-hyderabad/na20230131194200233233206

**S41** Careers360 "RPSC member received Rs 60 lakh for leaking teacher recruitment question paper: Police". https://news.careers360.com/rpsc-member-received-rs-60-lakh-for-leaking-teacher-recruitment-question-paper-police

**S42** The Hans India "TSPSC paper leak case: SIT reveals 15 papers leaked". https://www.thehansindia.com/news/cities/hyderabad/tspsc-paper-leak-case-sit-reveals-15-papers-leaked-group-1-paper-was-with-accused-790588

**S43** Careers360 "JEE Main: CBI arrests Russian national in last year's exam manipulation case"; LatestLY. https://news.careers360.com/jee-main-cbi-arrests-russian-national-in-last-years-exam-manipulation-case

**S44** Careers360 (2025) "SSC Phase 13 exam 2025 cancelled at multiple centres due to technical, administrative glitches"; Two Circles. https://news.careers360.com/ssc-phase-13-exam-2025-cancelled-at-multiple-centres-due-technical-administrative-glitches

**S45** The Logical Indian (May 2026) "NEET UG 2026 cancelled: how paper leaks inflate costs, erode trust and waste public money". https://thelogicalindian.com/neet-ug-2026-cancelled-cost-of-paper-leak-in-india/

**S46** TCS newsroom "TCS iON launches AI-driven command center to monitor examination venues in real time" [snip]. https://www.tcs.com/who-we-are/newsroom/press-release/tcs-ion-launches-artificial-intelligence-driven-command-center-to-monitor-examination-venues-in-real-time

**S47** Business Standard (Feb 2026) "UPSC CSE 2026 prelims on May 24; face authentication made mandatory"; Careers360 on UPSC AI face authentication. https://www.business-standard.com/education/news/upsc-civil-services-prelims-on-may-24-mandatory-face-authentication-for-aspirants-126020501669_1.html

**S48** Repute Today "UPSC has created a leakproof island" [snip]; Sunday Guardian on the 1991 UPSC leak [snip]. https://www.reputetoday.com/india/upsc-has-created-a-leakproof-island-this-is-how-it-stops-paper-leaks/10548/

**S49** Citizen Digital "Securing KCSE 2016: this is what Matiang'i did"; KBC (29 Dec 2016). https://www.citizen.digital/article/securing-kcse-2016-this-is-what-matiangi-did-153367

**S50** Korea JoongAng Daily "From flight restrictions to police escorts"; Stars and Stripes (12 Nov 2025). https://www.koreajoongangdaily.com/korea/from-flight-restrictions-to-police-escorts-korea-goes-all-out-for-test-takers-on-college-entry-exam-day/11249744

**S51** Semafor (7 Jun 2024) "China uses AI to crack down on cheating during gaokao exam"; Fortune (9 Jun 2025). https://www.semafor.com/article/06/07/2024/china-uses-ai-to-crack-down-on-cheating-during-gaokao-exam

**S52** College Board "What is Digital SAT adaptive testing?"; Digital SAT test specifications. https://blog.collegeboard.org/what-digital-sat-adaptive-testing

**S53** NIST SP 800-207 (Aug 2020) "Zero Trust Architecture". https://csrc.nist.gov/pubs/sp/800/207/final

**S54** CERT-In (28 Apr 2022) Directions under section 70B(6) of the IT Act. https://www.cert-in.org.in/Directions70B.jsp

**S55** Gordon-Loeb model (Wikipedia; University of Maryland Smith School). https://en.wikipedia.org/wiki/Gordon%E2%80%93Loeb_model

**S56** PIB (Nov 2025) "DPDP Rules, 2025 notified". https://static.pib.gov.in/WriteReadData/specificdocs/documents/2025/nov/doc20251117695301.pdf

**S57** Wikipedia, "Digital Personal Data Protection Rules, 2025". https://en.wikipedia.org/wiki/Digital_Personal_Data_Protection_Rules,_2025

**S58** Quartz (2021) "Rajasthan shut down the internet to prevent exam cheating"; SFLC.in Internet Shutdowns Tracker. https://qz.com/india/2065204/rajasthan-shut-down-the-internet-to-prevent-exam-cheating

**S59** BW Education "Inside India's Rs 50,000 Cr coaching industry"; Infinium estimate of ₹58,088 Cr as reported [snip]. https://www.bweducation.com/article/inside-indias-rs-50000-cr-coaching-industry-555516

**S60** Wikipedia, "Puttaswamy v. Union of India". https://en.wikipedia.org/wiki/Puttaswamy_v._Union_of_India

**S61** Testbook "K Radhakrishnan Committee: NTA reforms, recommendations and report". https://testbook.com/ias-preparation/k-radhakrishnan-committee

**S62** Vajiram and Ravi "K Radhakrishnan Committee: blueprint for secure and transparent exam reform" (status notes). https://vajiramandravi.com/current-affairs/k-radhakrishnan-committee-blueprint-for-secure-and-transparent-exam-reform-in-india/

**S63** Business Standard (Jul 2026) "2024 NTA reforms: why the Radhakrishnan panel was formed and what it proposed" [snip]. https://www.business-standard.com/india-news/exam-reforms-k-radhakrishnan-panel-nta-recommendations-paper-leak-126072700556_1.html

**S64** The Quint (2026) "NEET-UG 2027 to shift to computer-based test format" [snip]. https://www.thequint.com/news/breaking-news/neet-ug-2027-moves-to-computer-based-test

**S65** Medical Dialogues "RTI reply: NEET exam brought Rs 192 crore revenue". https://education.medicaldialogues.in/rti-reply-neet-exam-brought-rs-192-crore-revenue-to-government-no-account-of-how-it-was-spent

**S66** Vibes of India "34 paper leaks in 10 years: is Gujarat's anti-leak law working?" [snip]. https://www.vibesofindia.com/gujarat-paper-leak-cases-anti-paper-leak-law-effectiveness/

**S67** Nation (Kenya) "The smart padlocks KNEC is using to secure exams" [snip]. https://nation.africa/kenya/news/education/the-smart-padlocks-knec-is-using-to-secure-exams--5246752

**S68** National Testing Agency, "Information Bulletin NEET (UG) 2026" (fees). https://cdnbbsr.s3waas.gov.in/s37bc1ec1d9c3426357e69acd5bf320061/uploads/2026/02/20260208939209382.pdf

**S69** The Tribune "50 cases of public exam paper leak since 2015" [snip]. https://www.tribuneindia.com/news/india/50-cases-of-public-exam-paper-leak-since-2015-588102

**S70** Shamir, A. (1979) "How to share a secret", Communications of the ACM 22(11). https://dl.acm.org/doi/10.1145/359168.359176

**S71** Becker, G. S. (1968) "Crime and punishment: an economic approach", Journal of Political Economy 76(2). https://www.journals.uchicago.edu/doi/10.1086/259394


## Appendix B: Model tables

Generated by `model/pramaan_model.py` (run 28 September 2026). Amounts in ₹ Cr, constant 2026 prices, unless stated. T11, the coded incident list, is in Appendix C.

### T1. Annual high-stakes sittings (lakh)
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

### T2. Expected annual loss, 2026 baseline (₹ Cr)
| Line | Value |
|---|---|
| Candidates hit by cancellations a year (lakh) | 38.59 |
| Cost per affected candidate (₹) | 7,300 |
| Direct candidate and re-conduct loss | 2,817.3 |
| Stalled posts: 20,800 a year x 8 months x ₹30,000 | 499.2 |
| Expected annual loss (EAL) | 3,316.5 |
| EAL, cash only (no candidate time) | 1,386.8 |
| Gordon-Loeb ceiling (EAL / e) | 1,220.1 |

### T3. Cost components (₹ Cr)
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

### T4. Base case by year (₹ Cr)
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

### T5. Scenarios (₹ Cr, PV at 8% real)
| Scenario | Loss cut | PV benefit | PV cost | NPV | BCR | Payback |
|---|---|---|---|---|---|---|
| bear | 58% | 10,859.2 | 4,767.6 | 6,091.6 | 2.28 | 2030 |
| base | 80% | 14,978.2 | 4,767.6 | 10,210.6 | 3.14 | 2029 |
| bull | 91% | 17,084.5 | 4,767.6 | 12,316.9 | 3.58 | 2028 |
| base, cash only | 80% | 6,263.3 | 4,767.6 | 1,495.8 | 1.31 | 2032 |

### T6. Tornado on base NPV (₹ Cr)
| Input | Low | High |
|---|---|---|
| Candidate time per re-sit, ₹0 to ₹10,000 | 1,495.8 | 18,925.4 |
| Candidates hit a year, -30% to +30% | 6,393.5 | 14,027.7 |
| Effectiveness, bear to bull | 6,091.6 | 12,316.9 |
| Discount rate, 12% to 6% | 7,991.2 | 11,605.0 |
| Programme cost, +30% to -30% | 8,780.3 | 11,640.9 |
| Appointment delay, 4 to 12 months | 9,083.3 | 11,337.9 |
| Re-conduct cost, ₹500 to ₹1,200 | 9,687.7 | 10,907.8 |

### T7. Coded incidents by stage and risk type (49, 2015 to 2026)
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

### T8. Risk heat map (likelihood x impact)
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

### T9. Blast radius and attacker economics
| Metric | Today | PRAMAAN |
|---|---|---|
| Candidates exposed by one NEET-UG compromise | 22,70,000 | 23,646 (96 forms); 94,583 (24 forms, 2027 to 2028) |
| Government CBT plan, one form a shift (20 shifts) | 1,13,500 |  |
| Share of a paper one insider can expose | 67% | 2.5% expected, 5% cap |
| Leak revenue (₹ Cr) | 15.0 | 0.6 |
| Seller's expected value (₹ Cr) | 14.0 | −5.4 |

### T10. Funding, steady state (₹ Cr a year)
| Source | ₹ Cr | Share |
|---|---|---|
| Union budget | 351.3 | 52% |
| Integrity levy (₹50 a sitting) | 250.2 | 37% |
| States (40% of C10) | 72.0 | 11% |
| Total | 673.5 | 100% |


## Appendix C: Coded incident dataset

The 49 incidents below are a documented sample assembled from the public record (source S02 and the case sources cited in section 4 of the document), not a census. Candidate counts are entered only where a source states them.

**Coding rules**
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

### C.1 Coded incident list
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
| 15 | 2019 | GSSSB Binsachivalay Clerk | Gujarat | Examination centre | PHY | 6,00,000 | yes |
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
| 28 | 2021 | REET Level 2 | Rajasthan | Question storage | INS | 16,00,000 | yes |
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
| 42 | 2023 | GPSSB Junior Clerk | Gujarat | Question storage | INS | 9,53,000 | yes |
| 43 | 2024 | UP Police Constable | Uttar Pradesh | Transmission | INS | 48,00,000 | yes |
| 44 | 2024 | BPSC TRE-3 | Bihar | Question storage | INS | 3,75,000 | yes |
| 45 | 2024 | NEET-UG (Hazaribagh strong room) | All India | Examination centre | INS | 24,06,079 | no |
| 46 | 2024 | NEET-UG (Godhra centre) | Gujarat | Evaluation & results | INS | not stated | no |
| 47 | 2024 | UGC-NET June (doctored-screenshot alarm) | All India | Examination | OPS | 9,08,000 | yes |
| 48 | 2025 | SSC Selection Post Phase 13 | All India | Examination | OPS | not stated | no |
| 49 | 2026 | NEET-UG (setters and translators) | All India | Question creation | INS | 22,70,000 | yes |

### C.2 Coded incidents by stage and risk type (49, 2015 to 2026)
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


## Appendix D: Glossary

**Aadhaar authentication.** Verification of a person's identity against the Aadhaar database by fingerprint, iris or face. In PRAMAAN it is one accepted route, never the only one.

**BCR (benefit-cost ratio).** Present value of avoided losses divided by present value of programme cost. Above 1.0 means the programme returns more than it costs.

**Becker model.** Gary Becker's 1968 economics-of-crime model: offending falls as the probability of being caught and the size of the punishment rise, so certainty of detection matters as much as severity [S71].

**Blast radius.** The number of candidates whose exam is lost if one paper, key or system is compromised. PRAMAAN measures it for NEET-UG as candidates per parallel form.

**CAT (computer adaptive testing).** A test that chooses the next question from the candidate's earlier answers, so no two candidates see the same sequence.

**CBT (computer-based test).** An exam delivered on computers at a test centre, usually over a local network.

**CERT-Exam.** The proposed sectoral computer emergency response team and security operations centre for examinations, run under the oversight of CERT-In.

**CERT-In.** The Indian Computer Emergency Response Team. Its 2022 Directions require cyber incidents to be reported within six hours [S54].

**CPPT (computer-assisted pen-and-paper testing).** The Radhakrishnan Committee's design for exams that stay on paper: encrypted electronic transmission of the paper to the centre and printing there, with a unique code on each copy [S61].

**CSS (centrally sponsored scheme).** A scheme funded jointly by the Union and states, here on a 60:40 basis for the State Examination Security Cells.

**DPDP Act and Rules.** The Digital Personal Data Protection Act, 2023 and the Rules notified on 13 November 2025, with full compliance due by 13 May 2027 [S56].

**DPIA (data protection impact assessment).** A written assessment of the privacy risks of a data-processing system, mandatory for significant data fiduciaries under the DPDP Rules.

**EAL (expected annual loss).** The team's estimate of what breaches cost the country in a year: ₹3,316.5 Cr in the base case [T2].

**EMD (earnest money deposit).** Bid security a bidder pays with a tender. The NTA's 2026 CBT tender sets it at ₹2 Cr [S27].

**Equating.** The statistical step that puts scores from different test forms on one scale so that a hard form does not penalise a candidate.

**EWS.** Economically Weaker Sections, a reservation and fee-concession category.

**Forensic watermark.** A per-copy mark, visible or hidden in layout and wording, that lets a leaked image be traced to the exact copy and centre it came from.

**FTSC (fast-track special court).** A court set up for quick trial of a class of offences. The 2026 Amendment requires one in every state and Union Territory for exam-crime cases [S17].

**Gordon-Loeb model.** A 2002 model showing that the best security investment never exceeds about 37 per cent (1/e) of the expected loss [S55].

**HSM (hardware security module).** A tamper-resistant device that stores cryptographic keys and performs encryption without exposing the keys.

**I4C.** The Indian Cyber Crime Coordination Centre, whose threat-analytics unit flagged the UGC-NET 2024 exam [S10].

**IRT (item response theory).** A family of statistical models that describe how likely a candidate of a given ability is to answer an item correctly; it underpins equating.

**Item bank.** A large, calibrated store of questions from which exam forms are assembled. PRAMAAN holds about 20 times the number of items in a paper.

**Liveness detection.** A check that a face or fingerprint presented to a scanner belongs to a live person and not a photograph or recording.

**NEIAA.** National Examination Integrity and Assurance Authority: the proposed statutory body that sets standards, accredits, audits and commands incidents, without conducting exams.

**NESC.** National Examination Security Council: the proposed apex council, chaired by the Cabinet Secretary, that brings the Union, states and exam bodies together.

**NESS.** National Examination Security Standard: the binding technical and process standard issued by NEIAA, versioned (NESS v1 in 2027).

**Normalisation.** Adjusting scores across shifts or forms so candidates are compared fairly when they sat different papers.

**NPV (net present value).** Present value of benefits minus present value of costs, here at an 8 per cent real discount rate.

**NTA.** National Testing Agency, the autonomous society that runs NEET-UG, JEE Main, CUET and UGC-NET [S27].

**OMR.** Optical mark recognition: the machine-read answer sheet used in pen-and-paper exams.

**Parallel form.** One of several equivalent versions of a paper assembled from the same item bank. NEET-UG under PRAMAAN uses 96.

**PBG (performance bank guarantee).** A bank guarantee a vendor posts so the buyer can recover losses if the vendor fails. The 2026 NTA tender sets it at 10 per cent of exam value [S27].

**PDP and PEP.** Policy decision point and policy enforcement point, the two components in the NIST zero-trust model that decide and enforce each access request [S53].

**PKI (public key infrastructure).** The system of certificates and keys that lets parties prove who they are and encrypt to each other.

**PV (present value).** Future money expressed in today's terms by discounting.

**PwD.** Persons with Disabilities.

**RACI.** A matrix that marks each party as Responsible, Accountable, Consulted or Informed for each activity.

**SDF (significant data fiduciary).** A data fiduciary the government designates for stricter duties under the DPDP Rules, including annual independent audits [S56].

**Sequestration.** Keeping setters, translators and moderators at a secured location, without outside contact, until the exam ends.

**SOC (security operations centre).** A team and platform that monitors systems around the clock for attacks.

**SRO (senior responsible officer).** The single named official accountable for the security of one exam.

**STF (special task force).** An investigating unit the Centre may constitute under the 2026 Amendment for organised exam crime [S17].

**Threshold secret sharing.** Adi Shamir's 1979 scheme in which a secret is split into n shares and any k of them rebuild it while fewer than k reveal nothing [S70]. PRAMAAN uses 3 of 5.

**Two-person integrity.** A rule that a sensitive action needs two authorised people acting together.

**Zero trust.** A security design in which no user or device is trusted because of where it sits on the network; every request is checked, as set out in NIST SP 800-207 [S53].


## Appendix E: Assumptions register

Sixteen assumptions the team made where reliable data does not exist. Each is stated on the appendix slide or in this table and can be changed in the model.

| ID | Assumption | Value | Why this value |
|---|---|---|---|
| A01 | Share of an RRB NTPC plus Group D cycle counted each year | 0.5 | The two notifications recur roughly every two years; counting a full cycle a year would double volume |
| A02 | State PSC, SSB, police and TET sittings a year | 2 crore | UP Police 2024 alone had 48 lakh applicants [F-A21]; leaked state exams alone touched 1.4 crore in five years [F-B17]; 2 crore a year across 36 states is deliberately low |
| A03 | Candidate volume growth | 3% a year | Moderate; NEET-UG registrations actually fell 1.3 lakh from 2024 to 2025 [F-A03, F-A04], so growth is not assumed to be fast |
| A04 | Appointment delay per cancelled recruitment exam | 8 months | UP Police: cancelled Feb 2024, re-exam Aug 2024 (6 months) before results and joining [F-A21] |
| A05 | Monthly cost of an unfilled entry-level post | ₹30,000 | Deliberately below typical entry-level government pay with allowances; a proxy for lost public service |
| A06 | Household travel and stay cost per re-sit | ₹1,500 | Midpoint of ₹1,000 to ₹2,000 [F-A23] |
| A07 | Candidate time lost per re-sit | ₹5,000 | Half a month at ₹10,000; set to zero in the cash-only stress test |
| A08 | Exam body's re-conduct cost per candidate | ₹800 | NTA spent ₹3,064.77 Cr in 2018-19 to 2023-24 [F-A13] over roughly 5 crore registrations (about ₹600 each); raised for re-test logistics |
| A09 | Real social discount rate | 8% | Tornado tests 6% to 12% |
| A10 | Share of national exam volume under PRAMAAN | 10%, 35%, 60%, 80%, then 100% (2027 to 2031 onward) | Tier-1 central exams first, states by 2031 |
| A11 | Opex ramp | 40%, 70%, then 100% | Institutions staff up over two years |
| A12 | Capex phasing | 40%, 40%, 20% (2027 to 2029) | |
| A13 | Hardware refresh | 40% of hardware capex in 2032 | Five-year device life |
| A14 | Effectiveness: cut in breach probability and in candidates hit per breach | Bear 30% and 40%; base 50% and 60%; bull 65% and 75% (combined 58%, 80%, 91%) | Kenya went from 5,101 cancelled results to none in one year [F-D01 to F-D03]; the mechanical blast-radius cut is 96x, so a 60% cut in candidates hit is conservative |
| A15 | Integrity levy | ₹50 a sitting | Under 3% of the NEET-UG fee; SC, ST and PwD waivers paid from the Union share |
| A16 | Attacker economics | 300 buyers at ₹5 lakh; detection 10% today and 60% under PRAMAAN; fine ₹10 Cr | Resale at ₹5 lakh+ (RPSC) and ₹2 lakh to ₹10 lakh (NEET 2026) [F-B14, F-B02]; 52 FIRs under the 2024 Act [F-P11]; organised-crime minimum fine [F-P10] |


## Appendix F: Data conflicts and resolutions

| Topic | Conflict | Resolution |
|---|---|---|
| NEET-UG 2026 overlap | "Up to 120 of 180" vs "nearly 140" | Use "up to 120 of 180" everywhere |
| NEET-UG 2024 size | 24,06,079 registered vs "2.4 million took the exam" | Use 24.06 lakh registered |
| NTA 2023-24 finances | Aug 2024 estimates ₹1,065.38 Cr income / ₹1,020.35 Cr spend vs Jul 2026 reply ₹1,116.84 Cr / ₹1,040.96 Cr | Use the Jul 2026 reply (later, actuals); mention the earlier estimate once |
| NTA staffing | Aug 2024: 22 / 39 / 132 vs Jul 2026: 39 / 73 / 124 | Use Jul 2026 on slides; show both in the document |
| Leak counts | 41 in 5 years (Indian Express) vs 65 since 2019 vs 50 since 2015 | The loss model uses Indian Express, the only source with candidate totals; others are context |
| Rajasthan law | "10 years and ₹10 Cr" (2022) vs "life imprisonment" (later) | Write "up to 10 years and ₹10 Cr in 2022, later made stricter" |
| JEE Main 2021 beneficiaries | "over 820" reported vs no CBI total | Write "over 820 reported" |
| UGC-NET 2024 | Cancelled as a leak vs CBI closure (doctored screenshot) | Treat as a false alarm; coded OPS |
| Government CBT blast radius | "About 20 shifts" comes from a snippet | Write "about 1.1 lakh a shift" and label it as based on reported plans |
| SSC CGL 2025 vacancies | 14,582 vs 15,118 | Quote applications only |
| TCS iON scale | Snippet only | Context in the document; never on a slide |
| NEET-UG 2026 suicides | "At least 12" reported via Wikipedia citing the Indian Express | Document only, stated with care; never on a slide |
