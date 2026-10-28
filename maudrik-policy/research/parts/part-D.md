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
