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

